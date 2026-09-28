import RefreshForm from "./RefreshForm";

export const metadata = {
  title: "Refresh — Parth",
  robots: { index: false, follow: false },
};

export default function RefreshPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-bold tracking-tight mb-2">
        Refresh
      </h1>
      <p className="text-muted mb-10">
        Pull new Substack posts onto the essays page right now.
      </p>
      <RefreshForm />
    </div>
  );
}
