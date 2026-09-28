import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml } from "./markdown";
import { getSubstackEssays } from "./substack";

const essaysDir = path.join(process.cwd(), "content", "essays");

export type Essay = {
  slug: string;
  title: string;
  date: string;
  description: string;
  html: string;
};

function getLocalEssays(): Essay[] {
  if (!fs.existsSync(essaysDir)) return [];

  return fs
    .readdirSync(essaysDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(essaysDir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        html: markdownToHtml(content),
      };
    });
}

export async function getEssays(): Promise<Essay[]> {
  const essays = [...(await getSubstackEssays()), ...getLocalEssays()];
  return essays.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getEssay(slug: string): Promise<Essay | null> {
  const essays = await getEssays();
  return essays.find((essay) => essay.slug === slug) ?? null;
}
