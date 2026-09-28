import { getEssay, getEssays } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 86400;

export async function generateStaticParams() {
  const essays = await getEssays();
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = await getEssay(slug);
  if (!essay) return {};
  return {
    title: `${essay.title} — Parth`,
    description: essay.description,
  };
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;
  const essay = await getEssay(slug);
  if (!essay) notFound();

  return (
    <article>
      <Link
        href="/essays"
        className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; Essays
      </Link>

      <header className="mb-10">
        <time className="text-sm text-muted">
          {new Date(essay.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mt-2">
          {essay.title}
        </h1>
      </header>

      <div className="prose" dangerouslySetInnerHTML={{ __html: essay.html }} />
    </article>
  );
}
