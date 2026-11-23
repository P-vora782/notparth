import Link from "next/link";

export const metadata = {
  title: "Contact — Parth",
  description: "Get in touch.",
};

const links = [
  {
    label: "x",
    href: "https://x.com/parthvora",
    description: "where i think out loud",
  },
  {
    label: "email",
    href: "mailto:pvora782@gmail.com",
    description: "for longer conversations",
  },
  {
    label: "telegram",
    href: "https://t.me/parthvora",
    description: "for quick messages",
  },
];

export default function ContactPage() {
  return (
    <div>
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; parth
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight mb-2">
        contact
      </h1>
      <p className="text-muted mb-12">
        i like meeting interesting people.
      </p>

      <div className="flex flex-col gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto")
                ? undefined
                : "noopener noreferrer"
            }
            className="group block"
          >
            <span className="font-medium group-hover:opacity-70 transition-opacity">
              {link.label}
            </span>
            <span className="text-muted text-sm ml-3">
              {link.description}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
