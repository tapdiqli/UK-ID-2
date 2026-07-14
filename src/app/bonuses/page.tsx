import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AffiliateLink } from "@/components/tracking/AffiliateLink";
import { bonusCategories, compliance, getAllBrands } from "@/lib/data";

export const metadata: Metadata = {
  title: "UK Casino Bonuses & Offers 2026",
  description:
    "Compare the latest UK casino bonuses — welcome packages, no-wager spins, no-deposit offers and cashback. All from UKGC-licensed operators. 18+, T&Cs apply.",
};

const bonusIcons: Record<string, IconName> = {
  gift: "gift",
  spin: "spin",
  coin: "coin",
  refresh: "refresh",
};

export default function BonusesPage() {
  const brands = getAllBrands();

  return (
    <>
      <PageHero
        variant="soft"
        crumbs={[{ label: "Home", href: "/" }, { label: "Bonuses" }]}
        eyebrow="Offers & promotions"
        title="The best UK casino bonuses"
        description="Hand-picked offers from UK-licensed casinos, with the small print checked so you know exactly what you're getting."
      />

      {/* All offers list */}
      <section className="bg-cream py-8">
        <div className="container-page">
          <SectionHeading
            eyebrow="Every offer"
            title="All current bonuses"
            description="Compare every offer side by side. Always read the operator's full terms before claiming."
          />
          <div className="mt-8 space-y-4">
            {brands.map((brand) => (
              <AffiliateLink
                key={brand.id}
                href={brand.affiliateUrl}
                className="grid items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-forest-300 hover:shadow-brand sm:grid-cols-[auto_1fr_auto]"
              >
                <div className="flex items-center gap-4">
                  <BrandLogo brand={brand} size={52} />
                  <div>
                    <p className="font-display font-bold text-ink">
                      {brand.name}
                    </p>
                    <p className="text-xs text-ink-muted">
                      Wagering {brand.wagering} · Min £{brand.minDeposit}
                    </p>
                  </div>
                </div>
                <div className="sm:text-center">
                  <p className="font-display text-xl font-bold text-forest-700">
                    {brand.bonusHeadline}
                  </p>
                  <p className="text-sm text-ink-muted">
                    {brand.bonusExtra} · {brand.bonusType}
                  </p>
                </div>
                <span className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-600 px-6 py-3 text-sm font-semibold text-white">
                  Claim <Icon name="arrow" size={16} />
                </span>
              </AffiliateLink>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-ink-muted">
            18+. New customers only. Significant terms apply to all offers.{" "}
            {compliance.disclosure}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10">
        <div className="container-page">
          <SectionHeading
            eyebrow="Offer types"
            title="Find the right kind of bonus"
            description="Different offers suit different players. Here's how the main UK bonus types work."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bonusCategories.map((cat) => (
              <div
                key={cat.slug}
                id={cat.slug}
                className="scroll-mt-28 rounded-2xl border border-ink/10 bg-white p-6 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-600">
                  <Icon name={bonusIcons[cat.icon] ?? "gift"} size={24} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
