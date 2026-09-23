import Link from "next/link";
import Oneko from "@/components/Oneko";

export default function Home() {
  return (
    <>
      <Oneko />
      {/* hero */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          parth
        </h1>
        <p className="text-muted text-lg leading-relaxed">
          thinking about crypto, markets, and the internet.
        </p>
        <p className="text-muted text-lg leading-relaxed">
          based in ahmedabad, building for the world.
        </p>
      </section>

      {/* about */}
      <section className="mb-12 pt-6 border-t border-border">
        <h2 className="text-sm font-medium text-muted uppercase tracking-widest mb-6">
          about
        </h2>
        <div className="space-y-2 text-[1.0625rem] leading-[1.75]">
          <p>i started trading the indian stock market at 17.</p>
          <p>built a trading community with 150k+ members.</p>
          <p>in 2021 i left traditional markets to go full time into crypto.</p>
          <p>
            since then i have worked across growth, partnerships, and
            experiments in the ecosystem.
          </p>
          <p>
            i am interested in how markets, incentives, and internet communities
            reshape power.
          </p>
        </div>
      </section>

      {/* things i've worked on */}
      <section className="mb-12 pt-6 border-t border-border">
        <h2 className="text-sm font-medium text-muted uppercase tracking-widest mb-8">
          things i&apos;ve worked on
        </h2>
        <div className="space-y-6">
          <WorkItem
            company="ai content systems"
            role="independent project"
            description="built an autonomous ai agent pipeline that handles topic research, scripting, editing, and posting for a creator's instagram end to end. drove 611k+ views, 14k+ shares, and 10k+ saves, growing the account to 3,100+ followers with a 2.3% share rate."
          />
          <WorkItem
            company="wedefin"
            role="growth consultant"
            description="grew social presence from zero to nearly 1,000 followers through organic content strategy. shaped the pitch deck and product narrative, and worked with founders on positioning and go-to-market."
          />
          <WorkItem
            company="yolo"
            role="co-founder"
            description='building a hypercasual trading app.'
            link="https://tradeyolo.fun"
            linkLabel="tradeyolo.fun"
          />
          <WorkItem
            company="asgardfi"
            role="growth associate"
            description="owned meme marketing and trend-led content across x/twitter. grew telegram engagement 10x (5,108 messages) and expanded the member base by 44%, while increasing twitter reach 86% and reposts 100%."
          />
          <WorkItem
            company="interswap"
            role="marketing associate"
            description="attracted 15,000 users by designing the airdrop and points program, scaled the intern account to 100k impressions in 3 months, and managed 35+ kol relationships globally."
          />
          <WorkItem
            company="lumos labs"
            role="social media associate"
            description="led a campaign that cut cac to 1/10th of previous levels and boosted newsletter open rates by 60% through targeted experiments."
          />
          <WorkItem
            company="handshake"
            role="partnerships, built at blockverse"
            description="led development of handshake, a partnership tool for web3 brands, onboarding 100+ companies including supra oracles."
          />
          <WorkItem
            company="blockverse"
            role="growth and sales intern"
            description="secured 2 clients through sales strategy and created content generating 60k+ impressions per month on x."
          />
        </div>
      </section>

      {/* selected highlights */}
      <section className="mb-12 pt-6 border-t border-border">
        <h2 className="text-sm font-medium text-muted uppercase tracking-widest mb-6">
          selected highlights
        </h2>
        <ul className="space-y-2 text-[1.0625rem] leading-[1.75]">
          <li>closed 100+ brand partnerships through handshake</li>
          <li>
            designed a lumos labs campaign that became a benchmark for low cost
            cac
          </li>
          <li>
            grew my personal profile from 0 to 2800 followers in two years
          </li>
          <li>raised $25k+ for a memecoin trading fund</li>
        </ul>
      </section>

      {/* how i can help */}
      <section className="mb-12 pt-6 border-t border-border">
        <h2 className="text-sm font-medium text-muted uppercase tracking-widest mb-6">
          how i can help
        </h2>
        <div className="space-y-2 text-[1.0625rem] leading-[1.75]">
          <p>
            growth through experiments. mixing creative ideas with data loops.
          </p>
          <p>partnerships. connecting projects, creators, and ecosystems.</p>
          <p>
            web3 native distribution. understanding how narratives spread on
            crypto twitter.
          </p>
          <p>
            i work best with small teams that move fast and test ideas quickly.
          </p>
        </div>
      </section>

      {/* footer */}
      <footer className="pt-8 border-t border-border">
        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href="https://x.com/0xparthvora"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            x
          </a>
          <a
            href="mailto:pvora782@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            email
          </a>
          <a
            href="https://t.me/parthvora"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            telegram
          </a>
          <a
            href="https://t.me/Room0xparthvora"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            experiments
          </a>
          <Link
            href="/essays"
            className="hover:text-foreground transition-colors"
          >
            essays
          </Link>
        </div>
      </footer>
    </>
  );
}

function WorkItem({
  company,
  role,
  description,
  link,
  linkLabel,
}: {
  company: string;
  role: string;
  description: string;
  link?: string;
  linkLabel?: string;
}) {
  return (
    <div>
      <p className="text-[1.0625rem]">
        <span className="font-medium">{company}</span>
        <span className="text-muted ml-2 text-sm">{role}</span>
      </p>
      <p className="text-muted text-[0.9375rem] leading-relaxed mt-1">
        {description}
        {link && (
          <>
            {" "}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              {linkLabel || link}
            </a>
          </>
        )}
      </p>
    </div>
  );
}
