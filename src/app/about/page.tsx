import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { compliance, siteConfig, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BritCasinoChoice is an independent UK casino comparison site. Learn about our mission, our values and our commitment to safer gambling.",
};

const values = [
  {
    icon: "shield" as const,
    title: "Safety first",
    text: "We only list operators licensed by the UK Gambling Commission — no exceptions.",
  },
  {
    icon: "scales" as const,
    title: "Genuinely independent",
    text: "Our ratings are based on hands-on testing, never on commercial relationships.",
  },
  {
    icon: "age" as const,
    title: "Committed to safer gambling",
    text: "We promote responsible play and signpost free support on every page.",
  },
  {
    icon: "check" as const,
    title: "Clear and honest",
    text: "We translate confusing bonus small print into plain, useful English.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="Who we are"
        title="Independent casino reviews, built for UK players"
        description={`Founded in ${siteConfig.foundedYear}, ${siteConfig.name} exists to help UK players find safe, licensed casinos and make informed choices — without the hype.`}
      >
        <dl className="grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-3xl font-bold text-white">
                {stat.value}
              </dd>
              <dt className="text-sm text-white/70">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* Mission */}
      <section className="py-14 lg:py-16">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our mission"
              title="Helping you gamble safely and smartly"
              description="The online casino market is crowded and confusing. We cut through the noise with honest, thoroughly tested reviews so you can spend less time comparing and more time enjoying the games — responsibly."
            />
            <p className="mt-4 leading-relaxed text-ink-muted">
              Every casino we feature is licensed by the{" "}
              <a
                href={compliance.regulator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-forest-700 underline"
              >
                {compliance.regulator.name}
              </a>
              . We regularly re-check licences and update our reviews to keep the
              information accurate.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-600">
                  <Icon name={v.icon} size={22} />
                </span>
                <h3 className="mt-4 font-display font-bold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-forest-radial py-14 text-white lg:py-16">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-bold text-balance">
            Ready to find your perfect UK casino?
          </h2>
          <p className="max-w-xl text-white/80">
            Browse our independently rated rankings and compare offers from
            UK-licensed casinos in seconds.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <LinkButton href="/casinos" variant="light" size="lg">
              Compare casinos <Icon name="arrow" size={18} />
            </LinkButton>
            <LinkButton href="/contact" variant="outlineOnDark" size="lg">
              Get in touch
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
