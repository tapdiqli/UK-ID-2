import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import { compliance, guides, reviewCriteria } from "@/lib/data";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return { title: "Guide not found" };
  return { title: guide.title, description: guide.excerpt };
}

const guideBodies: Record<string, { intro: string; sections: { h: string; p: string }[] }> = {
  "how-we-review-casinos": {
    intro:
      "Transparency matters. Here is exactly how our team assesses every UK-licensed casino before it appears on BritCasinoChoice.",
    sections: [
      { h: "Licence verification first", p: "Before anything else, we confirm the operator holds a valid UK Gambling Commission licence. If it doesn't, it never makes our list." },
      { h: "Real-money testing", p: "We deposit, play and — crucially — withdraw using real money across debit cards and e-wallets, timing every step of the process." },
      { h: "Reading the small print", p: "We read every bonus term: wagering, game weighting, maximum bets, time limits and maximum withdrawal caps, so you don't have to." },
      { h: "Safer gambling checks", p: "We test the depth of deposit limits, reality checks, time-outs and self-exclusion tools available to players." },
    ],
  },
  "understanding-wagering-requirements": {
    intro:
      "Wagering requirements are the single most misunderstood part of any casino bonus. Here's how they really work.",
    sections: [
      { h: "What 'wagering' means", p: "A wagering (or playthrough) requirement is the number of times you must stake a bonus before you can withdraw related winnings. A 35x requirement on a £10 bonus means £350 of total stakes." },
      { h: "Game weighting", p: "Not every game counts equally. Slots usually contribute 100%, while table games may contribute 10% or less towards wagering." },
      { h: "Time limits", p: "Most bonuses expire — often within 7 to 30 days. Any unmet wagering is forfeited when the clock runs out." },
      { h: "Look for low or zero wagering", p: "No-wager offers let you keep what you win outright. They're rarer, but far better value." },
    ],
  },
  "safer-gambling-tools": {
    intro:
      "UK-licensed casinos must offer a range of tools to help you stay in control. Here's what's available and how to use it.",
    sections: [
      { h: "Deposit limits", p: "Set daily, weekly or monthly caps on how much you can pay in. Decreases apply immediately; increases require a cooling-off period." },
      { h: "Reality checks", p: "Pop-up reminders show how long you've been playing, prompting you to take a break." },
      { h: "Time-outs & self-exclusion", p: "Take a short break of 24 hours to 6 weeks, or self-exclude for longer periods. GAMSTOP lets you exclude across all UK operators at once." },
      { h: "Where to get help", p: "Free, confidential support is available 24/7 from BeGambleAware on 0808 8020 133." },
    ],
  },
  "fastest-payout-casinos": {
    intro:
      "Waiting days for a withdrawal is frustrating. Here's how to find casinos that pay out quickly — and what slows things down.",
    sections: [
      { h: "Complete verification early", p: "Upload your ID as soon as you register. KYC checks are the most common cause of withdrawal delays." },
      { h: "Choose fast payment methods", p: "E-wallets and instant bank transfers typically clear fastest, while card withdrawals may take a little longer." },
      { h: "Watch for pending periods", p: "Some casinos hold withdrawals for a 'pending' review window. The best operators keep this short or skip it entirely." },
      { h: "Check withdrawal limits", p: "Large wins may be paid in instalments. Always read the maximum withdrawal terms before you play." },
    ],
  },
};

export default async function GuideDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const body = guideBodies[slug] ?? {
    intro: guide.excerpt,
    sections: reviewCriteria.map((c) => ({ h: c.title, p: c.description })),
  };

  const related = guides.filter((g) => g.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        variant="soft"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: guide.title },
        ]}
        title={guide.title}
        description={body.intro}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="green">{guide.category}</Badge>
          <span className="flex items-center gap-1.5 text-sm text-ink-muted">
            <Icon name="clock" size={15} /> {guide.readTime}
          </span>
        </div>
      </PageHero>

      <article className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_300px] lg:py-16">
        <div className="max-w-2xl">
          {body.sections.map((section, i) => (
            <section key={section.h} className={i === 0 ? "" : "mt-8"}>
              <h2 className="font-display text-2xl font-bold text-ink">
                {section.h}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{section.p}</p>
            </section>
          ))}

          <div className="mt-10 rounded-2xl border border-forest-200 bg-forest-50/60 p-6">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-forest-800">
              <Icon name="age" size={20} /> Remember
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Gambling should be fun, never a way to make money. Set a budget you
              can afford to lose and never chase losses. For free, confidential
              support, visit{" "}
              <a
                href="https://www.begambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-forest-700 underline"
              >
                BeGambleAware.org
              </a>
              . 18+ only.
            </p>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
              More guides
            </h3>
            <div className="mt-4 space-y-4">
              {related.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="block border-l-2 border-forest-200 pl-3 transition-colors hover:border-forest-500"
                >
                  <p className="text-sm font-semibold text-ink">{g.title}</p>
                  <p className="text-xs text-ink-muted">{g.readTime}</p>
                </Link>
              ))}
            </div>
            <LinkButton href="/casinos" size="sm" className="mt-6 w-full">
              Compare casinos
            </LinkButton>
          </div>
        </aside>
      </article>

      <div className="container-page pb-12 text-center">
        <p className="text-xs text-ink-muted">{compliance.disclosure}</p>
      </div>
    </>
  );
}
