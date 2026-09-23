import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type Essay = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

export type Note = {
  slug: string;
  content: string;
  date: string;
};

export function getEssays(): Essay[] {
  const dir = path.join(contentDir, "essays");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const essays = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || "",
      date: data.date || "",
      description: data.description || "",
      content,
    };
  });

  return essays.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getEssay(slug: string): Essay | null {
  const filePath = path.join(contentDir, "essays", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    description: data.description || "",
    content,
  };
}

export function getNotes(): Note[] {
  const dir = path.join(contentDir, "notes");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const notes = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      content: content.trim(),
      date: data.date || "",
    };
  });

  return notes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
