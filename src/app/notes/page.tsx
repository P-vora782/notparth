import { getNotes } from "@/lib/content";

export const metadata = {
  title: "Notes — Parth",
  description: "Short thoughts and observations.",
};

export default function NotesPage() {
  const notes = getNotes();

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold tracking-tight mb-2">
        Notes
      </h1>
      <p className="text-muted mb-12">Short thoughts and observations.</p>

      <div className="flex flex-col gap-0">
        {notes.map((note) => (
          <div key={note.slug} className="py-6 border-b border-border">
            <p className="leading-relaxed text-[1.0625rem]">{note.content}</p>
            <time className="text-sm text-muted mt-3 block">
              {new Date(note.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        ))}
      </div>

      {notes.length === 0 && (
        <p className="text-muted">No notes yet. Check back soon.</p>
      )}
    </div>
  );
}
