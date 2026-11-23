import Link from "next/link";

export const metadata = {
  title: "Call — Parth",
  description: "Book a call with Parth.",
};

const CALENDLY_URL =
  "https://calendly.com/parthvora/meet-with-parth?embed_domain=notparth.com&embed_type=Inline&hide_gdpr_banner=1";

export default function CallPage() {
  return (
    <div>
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition-colors"
      >
        ← parth
      </Link>
      <h1 className="text-3xl font-semibold tracking-tight mt-8 mb-2">
        book a call
      </h1>
      <p className="text-muted mb-2">pick a time that works for you.</p>

      {/* wider than the 620px text column so Calendly can show its side-by-side layout */}
      <div className="relative left-1/2 -translate-x-1/2 w-[min(100vw,1040px)] px-2 md:px-6">
        <iframe
          src={CALENDLY_URL}
          title="Book a call with Parth"
          className="w-full h-[1150px] border-0"
        />
      </div>

      <p className="text-sm text-muted mt-6">
        calendar not loading?{" "}
        <a
          href="https://calendly.com/parthvora/meet-with-parth"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          open it on calendly
        </a>
        .
      </p>
    </div>
  );
}
