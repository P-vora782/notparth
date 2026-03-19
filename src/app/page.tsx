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

      {/* now */}
      <section className="mb-12 pt-6 border-t border-border">
        <h2 className="text-sm font-medium text-muted uppercase tracking-widest mb-6">
          now
        </h2>
        <div className="space-y-6">
          <WorkItem
            company="yolo"
            role="co-founder"
            description='building a hypercasual trading app.'
            link="https://tradeyolo.fun"
            linkLabel="tradeyolo.fun"
          />
          <WorkItem
            company="wedefin"
            role="growth"
            description="leading growth and partnerships at wedefin, an onchain index fund platform."
          />
        </div>
      </section>

      {/* things i've worked on */}
      <section className="mb-12 pt-6 border-t border-border">
        <h2 className="text-sm font-medium text-muted uppercase tracking-widest mb-8">
          things i&apos;ve worked on
        </h2>
        <div className="space-y-6">
          <WorkItem
            company="asgardfi"
            role="marketing"
            description="helped drive 100k+ impressions in two months and grew social presence through experimental campaigns."
          />
          <WorkItem
            company="interswap"
            role="ecosystem growth"
            description="worked on partnerships and user acquisition for a crosschain defi ecosystem."
          />
          <WorkItem
            company="lumos labs"
            role="social media"
            description="designed a campaign that achieved about 10x lower cac and improved newsletter engagement."
          />
          <WorkItem
            company="handshake"
            role="partnerships, built at blockverse"
            description="helped onboard 100+ brands to the partnership platform and created collaborations across projects."
          />
          <WorkItem
            company="blockverse"
            role="sales and growth"
            description="worked on outreach and b2b collaborations for web3 clients."
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
            href="https://x.com/parthvora"
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
            href="https://t.me/0xroomwithparthvora"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            experiments
          </a>
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
