import { XMLParser } from "fast-xml-parser";
import sanitizeHtml from "sanitize-html";
import type { Essay } from "./content";

const FEED_URL = "https://0xparthvora.substack.com/feed";

export const SUBSTACK_TAG = "substack";
export const REVALIDATE_SECONDS = 60 * 60 * 24;

// Posts shorter than this are treated as short updates, not essays.
const MIN_ARTICLE_WORDS = 300;

type FeedItem = {
  title?: string;
  description?: string;
  link?: string;
  pubDate?: string;
  "content:encoded"?: string;
};

const parser = new XMLParser({
  parseTagValue: false,
  isArray: (name) => name === "item",
});

// Pass 1 drops Substack widgets (embeds, subscribe boxes, icon buttons).
const stripWidgets: sanitizeHtml.IOptions = {
  allowedTags: false,
  allowedAttributes: false,
  // Safe: this pass only removes widgets; keepContent below sanitizes strictly.
  allowVulnerableTags: true,
  exclusiveFilter: (frame) =>
    frame.tag === "button" ||
    frame.tag === "svg" ||
    (frame.tag === "div" &&
      /digest-post-embed|subscription-widget|button-wrapper/.test(
        frame.attribs.class ?? ""
      )),
};

// Pass 2 keeps only the plain content tags.
const keepContent: sanitizeHtml.IOptions = {
  allowedTags: [
    "p", "h2", "h3", "h4", "ul", "ol", "li", "blockquote", "a", "img",
    "strong", "em", "hr", "br", "code", "pre", "figure", "figcaption",
  ],
  allowedAttributes: {
    a: ["href", "target", "rel"],
    img: ["src", "alt", "loading"],
  },
  transformTags: {
    a: sanitizeHtml.simpleTransform("a", {
      target: "_blank",
      rel: "noopener noreferrer",
    }),
    img: sanitizeHtml.simpleTransform("img", { loading: "lazy" }),
  },
};

function cleanHtml(raw: string): string {
  return sanitizeHtml(sanitizeHtml(raw, stripWidgets), keepContent)
    .replace(/<a [^>]*>\s*(<img [^>]*>)\s*<\/a>/g, "$1")
    .replace(/<p>\s*<\/p>/g, "");
}

function wordCount(html: string): number {
  const text = sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} });
  return text.split(/\s+/).filter(Boolean).length;
}

function toEssay(item: FeedItem): Essay | null {
  const slug = item.link?.split("/p/")[1]?.split(/[?#]/)[0];
  const raw = item["content:encoded"];
  if (!slug || !raw || !item.title || !item.pubDate) return null;

  const html = cleanHtml(raw);
  if (wordCount(html) < MIN_ARTICLE_WORDS) return null;

  return {
    slug,
    title: item.title,
    date: new Date(item.pubDate).toISOString(),
    description: item.description ?? "",
    html,
  };
}

export async function getSubstackEssays(): Promise<Essay[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: REVALIDATE_SECONDS, tags: [SUBSTACK_TAG] },
    });
    if (!res.ok) throw new Error(`Substack feed responded ${res.status}`);

    const feed = parser.parse(await res.text());
    const items: FeedItem[] = feed?.rss?.channel?.item ?? [];
    return items.map(toEssay).filter((e): e is Essay => e !== null);
  } catch (error) {
    // During a build, fall back to local essays instead of failing the deploy.
    // At runtime, rethrow so the last good page keeps being served.
    if (process.env.NEXT_PHASE === "phase-production-build") {
      console.warn("Could not load Substack essays:", error);
      return [];
    }
    throw error;
  }
}
