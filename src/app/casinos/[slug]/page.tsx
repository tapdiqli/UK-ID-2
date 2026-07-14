import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { AffiliateLink } from "@/components/tracking/AffiliateLink";
import {
  brands,
  compliance,
  getAllBrands,
  getBrandBySlug,
  getBrandRank,
} from "@/lib/data";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return { title: "Casino not found" };
  return {
    title: `${brand.name} Review 2026`,
    description: `${brand.name} review: ${brand.summary} Rated ${brand.rating}/5. 18+ only, T&Cs apply.`,
  };
}

export default async function BrandReviewPage({ params }: PageParams) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const rank = getBrandRank(slug);
  const others = getAllBrands()
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

  const facts = [
    { label: "Established", value: brand.established.toString(), icon: "clock" as const },
    { label: "Licence", value: brand.licence, icon: "shield" as const },
    { label: "Games", value: brand.gamesCount.toLocaleString("en-GB"), icon: "game" as const },
    { label: "Min deposit", value: `£${brand.minDeposit}`, icon: "wallet" as const },
    { label: "Wagering", value: brand.wagering, icon: "refresh" as const },
    { label: "Payout time", value: brand.payoutTime, icon: "clock" as const },
  ];

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Casino Reviews", href: "/casinos" },
          { label: brand.name },
        ]}
        title={
          <span className="flex flex-wrap items-center gap-4">
            <BrandLogo brand={brand} size={64} />
            {brand.name} review
          </span>
        }
        description={brand.summary}
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">
            <StarRating rating={brand.rating} className="text-white" />
          </div>
          <Badge tone="light">#{rank} in our UK rankings</Badge>
          <Badge tone="light">
            <Icon name="shield" size={14} /> {brand.licence}
          </Badge>
        </div>
      </PageHero>

      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_340px] lg:py-16">
        {/* Main */}
        <div className="min-w-0">
          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-ink/10 bg-white p-4 shadow-card"
              >
                <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-ink-muted">
                  <Icon name={f.icon} size={14} /> {f.label}
                </span>
                <p className="mt-1 font-display font-bold text-ink">{f.value}</p>
              </div>
            ))}
          </div>

          {/* Pros & cons */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-forest-200 bg-forest-50/60 p-6">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold text-forest-800">
                <Icon name="check" size={20} /> Pros
              </h2>
              <ul className="mt-4 space-y-3">
                {brand.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-0.5 text-forest-600">
                      <Icon name="check" size={16} />
                    </span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white p-6">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                <Icon name="close" size={18} /> Cons
              </h2>
              <ul className="mt-4 space-y-3">
                {brand.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-0.5 text-ink-muted">
                      <Icon name="close" size={15} />
                    </span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Full review */}
          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold text-ink">
              Our verdict on {brand.name}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{brand.summary}</p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              With a {brand.wagering} wagering requirement, a minimum deposit of
              just £{brand.minDeposit} and withdrawals typically processed in{" "}
              {brand.payoutTime.toLowerCase()}, {brand.name} earned{" "}
              {brand.rating.toFixed(1)}/5 in our latest assessment. The site holds a
              valid {compliance.regulator.name} licence ({brand.licence}) and
              offers the full suite of safer-gambling tools, including deposit
              limits, reality checks and self-exclusion.
            </p>

            {/* Features */}
            <h3 className="mt-8 font-display text-lg font-bold text-ink">
              Standout features
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {brand.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 rounded-xl bg-cream p-3 text-sm font-medium text-ink-soft"
                >
                  <span className="text-forest-600">
                    <Icon name="sparkle" size={16} />
                  </span>
                  {feature}
                </div>
              ))}
            </div>

            {/* Games & payments */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  Game selection
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {brand.gameTypes.map((g) => (
                    <Badge key={g} tone="green">
                      {g}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  Payment methods
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {brand.paymentMethods.map((p) => (
                    <span
                      key={p}
                      className="rounded-lg border border-ink/10 bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 rounded-xl bg-cream p-4 text-xs leading-relaxed text-ink-muted">
            {compliance.disclosure} 18+. {compliance.primaryWarning}
          </p>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <AffiliateLink
            href={brand.affiliateUrl}
            className="block overflow-hidden rounded-2xl border border-ink/10 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand"
          >
            <div
              className="p-6 text-center text-white"
              style={{
                background: `linear-gradient(135deg, ${brand.accentFrom}, ${brand.accentTo})`,
              }}
            >
              <BrandLogo brand={brand} size={64} className="mx-auto" />
              <p className="mt-3 font-display text-lg font-bold">{brand.name}</p>
              <div className="mt-2 flex justify-center">
                <StarRating rating={brand.rating} className="text-white" />
              </div>
            </div>
            <div className="space-y-4 bg-white p-6">
              <div className="rounded-xl bg-cream p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {brand.bonusType}
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-forest-700">
                  {brand.bonusHeadline}
                </p>
                <p className="text-sm text-ink-soft">{brand.bonusExtra}</p>
              </div>
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-600 px-8 py-4 text-base font-semibold text-white">
                Visit {brand.name}
                <Icon name="arrow" size={18} />
              </span>
              <p className="text-center text-[11px] leading-relaxed text-ink-muted">
                18+. New customers only. T&amp;Cs apply. Please gamble
                responsibly. BeGambleAware.org
              </p>
            </div>
          </AffiliateLink>

          {/* Other casinos */}
          <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-5 shadow-card">
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
              Compare alternatives
            </h3>
            <div className="mt-4 space-y-3">
              {others.map((b) => (
                <AffiliateLink
                  key={b.id}
                  href={b.affiliateUrl}
                  className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-cream"
                >
                  <BrandLogo brand={b} size={38} rounded="rounded-lg" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-ink">
                      {b.name}
                    </p>
                    <StarRating rating={b.rating} size={12} />
                  </div>
                  <Icon name="arrow" size={16} className="text-ink-muted" />
                </AffiliateLink>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
