import Link from "next/link";
import { getEssays } from "@/lib/content";

export const metadata = {
  title: "Essays — Parth",
  description: "Longer thoughts on crypto, markets, the internet, and life.",
};

export default function EssaysPage() {
  const essays = getEssays();

  return (
    <div>
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; Home
      </Link>

      <h1 className="font-serif text-3xl font-bold tracking-tight mb-2">
        Essays
      </h1>
      <p className="text-muted mb-12">
        Longer thoughts on crypto, markets, the internet, and life.
      </p>

      <div className="flex flex-col gap-8">
        {essays.map((essay) => (
          <Link
            key={essay.slug}
            href={`/essays/${essay.slug}`}
            className="group block"
          >
            <article>
              <time className="text-sm text-muted">
                {new Date(essay.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="font-serif text-xl font-semibold mt-1 group-hover:opacity-70 transition-opacity">
                {essay.title}
              </h2>
              <p className="text-muted mt-1 text-[0.9375rem]">
                {essay.description}
              </p>
            </article>
          </Link>
        ))}
      </div>

      {essays.length === 0 && (
        <p className="text-muted">No essays yet. Check back soon.</p>
      )}
    </div>
  );
}
