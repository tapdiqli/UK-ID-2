import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustBar } from "@/components/common/TrustBar";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { BrandMiniCard } from "@/components/brands/BrandMiniCard";
import { BrandRankCard } from "@/components/brands/BrandRankCard";
import {
  bonusCategories,
  compliance,
  faqs,
  getAllBrands,
  getTopBrands,
  reviewCriteria,
  stats,
} from "@/lib/data";
import type { IconName } from "@/components/ui/Icon";

const bonusIcons: Record<string, IconName> = {
  gift: "gift",
  spin: "spin",
  coin: "coin",
  refresh: "refresh",
};

export default function HomePage() {
  const topBrands = getTopBrands(3);
  const allBrands = getAllBrands();

  return (
    <>
      {/* ---------------- HERO (brands above the fold) ---------------- */}
      <section className="relative overflow-hidden bg-forest-radial text-white">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-forest-400/20 blur-3xl" aria-hidden="true" />

        <div className="container-page relative grid items-center gap-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-10">
          {/* Left */}
          <div className="animate-fade-up">
            <Badge tone="light">
              <Icon name="shield" size={14} /> 100% UKGC-licensed casinos
            </Badge>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Find your perfect{" "}
              <span className="text-forest-300">UK casino</span> — safely.
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/80">
              We independently test and rate UK-licensed online casinos so you
              can compare bonuses, payout speeds and safety at a glance. For
              players aged 18 and over.
            </p>

            <div className="mt-5 hidden lg:flex flex-wrap gap-2.5">
              <LinkButton href="/casinos" variant="light" size="md">
                Compare top casinos
                <Icon name="arrow" size={16} />
              </LinkButton>
              <LinkButton href="/how-we-rate" variant="outlineOnDark" size="md">
                How we rate
              </LinkButton>
            </div>

            <dl className="mt-6 hidden max-w-lg grid-cols-2 gap-x-6 gap-y-3 sm:grid sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-xl font-bold text-white">
                    {stat.value}
                  </dd>
                  <p className="text-[11px] text-white/70">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — top brands, visible without scrolling */}
          <div className="hidden lg:block animate-fade-up rounded-2xl bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur-sm sm:p-4">
            <div className="mb-2 flex items-center justify-between px-1">
              <p className="flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-white">
                <Icon name="trophy" size={14} /> Top rated this month
              </p>
              <span className="text-[11px] text-white/60">July 2026</span>
            </div>
            <div className="space-y-2">
              {topBrands.map((brand, i) => (
                <BrandMiniCard key={brand.id} brand={brand} rank={i + 1} />
              ))}
            </div>
            <Link
              href="/casinos"
              className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-white/10 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20"
            >
              See all reviewed casinos <Icon name="arrow" size={14} />
            </Link>
            <p className="mt-2 text-center text-[10px] leading-relaxed text-white/55">
              18+ | Play responsibly | Terms &amp; conditions apply | BeGambleAware.org
            </p>
          </div>
        </div>
      </section>



      {/* ---------------- FULL RANKING ---------------- */}
      <section>
        <div className="container-page">
          <div className="mt-6 space-y-4">
            {allBrands.map((brand, i) => (
              <BrandRankCard key={brand.id} brand={brand} rank={i + 1} />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-ink-muted">
            {compliance.disclosure}
          </p>
        </div>
      </section>

      {/* ---------------- TRUST BAR ---------------- */}
      <section className="border-b border-ink/5 bg-cream py-8">
        <div className="container-page">
          <TrustBar />
        </div>
      </section>
      {/* ---------------- BONUS CATEGORIES ---------------- */}
      <section className="bg-ink py-16 text-white lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Browse by offer"
            title="Casino bonuses for every player"
            description="From wager-free spins to weekly cashback, explore the offer types available at UK-licensed casinos."
            tone="light"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bonusCategories.map((cat) => (
              <div key={cat.slug}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-500/20 text-forest-300">
                  <Icon name={bonusIcons[cat.icon] ?? "gift"} size={24} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/65">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- HOW WE RATE ---------------- */}
      <section className="py-16 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our methodology"
              title="Reviews you can actually trust"
              description="We are independent. We test every casino with real money, read every bonus term, and time real withdrawals. Commercial partnerships never influence a score."
            />
            <div className="mt-8 flex flex-col gap-3">
              <LinkButton href="/how-we-rate" size="md">
                See our full process <Icon name="arrow" size={16} />
              </LinkButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reviewCriteria.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-ink/10 bg-white p-5 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-ink">{c.title}</h3>
                  <Badge tone="green">{c.weight}</Badge>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- RESPONSIBLE GAMBLING ---------------- */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-3xl border border-forest-200 bg-white shadow-card">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 lg:p-12">
                <Badge tone="green">
                  <Icon name="age" size={14} /> Safer gambling
                </Badge>
                <h2 className="mt-4 font-display text-3xl font-bold text-ink">
                  When the fun stops, stop.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  Gambling should always be entertainment, never a way to make
                  money. Set limits, take breaks, and never chase losses. If
                  gambling stops being fun, free and confidential help is
                  available 24/7.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <LinkButton href="/responsible-gambling" size="md">
                    Safer gambling tools
                  </LinkButton>
                  <LinkButton
                    href="https://www.begambleaware.org"
                    variant="outline"
                    size="md"
                  >
                    Visit BeGambleAware
                  </LinkButton>
                </div>
              </div>
              <div className="bg-forest-radial p-8 text-white lg:p-12">
                <h3 className="font-display text-lg font-bold">Get help now</h3>
                <ul className="mt-4 space-y-4">
                  {compliance.helpOrganisations.map((org) => (
                    <li key={org.name}>
                      <a
                        href={org.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3"
                      >
                        <span className="mt-0.5 text-forest-300">
                          <Icon name="check" size={18} />
                        </span>
                        <span>
                          <span className="font-semibold text-white group-hover:text-forest-300">
                            {org.name}
                          </span>
                          {org.phone && (
                            <span className="ml-2 text-sm text-white/70">
                              {org.phone}
                            </span>
                          )}
                          <span className="block text-sm text-white/65">
                            {org.description}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
            description="Everything UK players ask us about online casinos, bonuses and staying safe."
          />
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
