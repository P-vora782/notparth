export const metadata = {
  title: "Now — Parth",
  description: "This page is archived for now.",
};

export default function NowPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-bold tracking-tight mb-2">Now</h1>
      <p className="text-muted mb-12">
        This page is archived for now.
      </p>

      <div className="border-t border-border mt-12 pt-8 text-sm text-muted">
        <p>
          This is a{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            now page
          </a>
          , inspired by Derek Sivers.
        </p>
      </div>
    </div>
  );
}
