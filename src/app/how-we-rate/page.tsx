import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { compliance, reviewCriteria } from "@/lib/data";

export const metadata: Metadata = {
  title: "How We Rate Casinos — Our Methodology",
  description:
    "Our transparent, 6-factor methodology for reviewing UK-licensed online casinos: licence & safety, bonuses, payouts, games, support and safer gambling.",
};

const steps = [
  { title: "Licence check", text: "We confirm a valid UKGC licence before testing begins." },
  { title: "Sign up & deposit", text: "We create a real account and make a real deposit." },
  { title: "Test the games", text: "We play across slots, live casino and table games." },
  { title: "Claim the bonus", text: "We read and test every bonus term in practice." },
  { title: "Withdraw & time it", text: "We request a real withdrawal and time how long it takes." },
  { title: "Score & publish", text: "We score against six weighted factors and publish." },
];

export default function HowWeRatePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "How We Rate" }]}
        eyebrow="Our methodology"
        title="How we rate UK casinos"
        description="We're independent and rigorous. Here's the exact process behind every rating on BritCasinoChoice — and why you can trust it."
      />

      {/* Weighted criteria */}
      <section className="py-14 lg:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="The scorecard"
            title="Six factors, independently weighted"
            description="Each casino is scored out of 100 across these six areas. Commercial relationships never affect a score."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviewCriteria.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {c.title}
                  </h3>
                  <Badge tone="green">{c.weight}</Badge>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-forest-50">
                  <div
                    className="h-full rounded-full bg-forest-500"
                    style={{ width: c.weight }}
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-ink py-14 text-white lg:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Step by step"
            title="Our hands-on testing process"
            tone="light"
          />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-500 font-display font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/65">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Independence */}
      <section className="py-14 lg:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-3xl border border-forest-200 bg-forest-50/50 p-8 text-center lg:p-12">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-600 text-white">
              <Icon name="scales" size={28} />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-ink">
              Our promise of independence
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              {compliance.disclosure} We only ever recommend casinos licensed by
              the {compliance.regulator.name}, and our editorial team has the
              final say on every score.
            </p>
            <LinkButton href="/casinos" size="lg" className="mt-6">
              See the rankings <Icon name="arrow" size={18} />
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
