export const metadata = {
  title: "Contact — Parth",
  description: "Get in touch.",
};

const links = [
  {
    label: "X (Twitter)",
    href: "https://x.com/0xparthvora",
    description: "where I think out loud",
  },
  {
    label: "Email",
    href: "mailto:pvora782@gmail.com",
    description: "for longer conversations",
  },
  {
    label: "Telegram",
    href: "https://t.me/parthvora",
    description: "for quick messages",
  },
];

export default function ContactPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-bold tracking-tight mb-2">
        Contact
      </h1>
      <p className="text-muted mb-12">
        I like meeting interesting people.
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
