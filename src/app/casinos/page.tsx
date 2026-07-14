import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BrandRankCard } from "@/components/brands/BrandRankCard";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { StarRating } from "@/components/ui/StarRating";
import { Icon } from "@/components/ui/Icon";
import { AffiliateLink } from "@/components/tracking/AffiliateLink";
import { compliance, getAllBrands } from "@/lib/data";

export const metadata: Metadata = {
  title: "Best UK Casino Reviews 2026",
  description:
    "Compare the best UK-licensed online casinos. Independent reviews of bonuses, payout speeds, games and safety — ranked by our expert team. 18+ only.",
};

export default function CasinosPage() {
  const brands = getAllBrands();
  const top = brands.slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Casino Reviews" }]}
        eyebrow="Independent reviews"
        title="Best UK online casinos, compared"
        description="Every operator is UKGC-licensed and reviewed hands-on. Here are our top picks, visible before you even scroll."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {top.map((brand, i) => (
            <AffiliateLink
              key={brand.id}
              href={brand.affiliateUrl}
              className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-forest-800">
                {i + 1}
              </span>
              <BrandLogo brand={brand} size={42} rounded="rounded-xl" />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white">
                  {brand.name}
                </p>
                <p className="text-xs text-forest-200">{brand.bonusHeadline}</p>
              </div>
            </AffiliateLink>
          ))}
        </div>
      </PageHero>

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <div className="hidden overflow-hidden rounded-2xl border border-ink/10 shadow-card lg:block">
            <div className="grid grid-cols-[0.6fr_1.6fr_1.6fr_0.8fr_1fr_0.9fr_0.8fr] bg-ink px-5 py-4 text-left text-sm font-semibold text-white">
              <span>Rank</span>
              <span>Casino</span>
              <span>Welcome offer</span>
              <span>Wagering</span>
              <span>Payout</span>
              <span>Rating</span>
              <span className="text-right">Play</span>
            </div>
            <div className="divide-y divide-ink/5 bg-white">
              {brands.map((brand, i) => (
                <AffiliateLink
                  key={brand.id}
                  href={brand.affiliateUrl}
                  className="grid grid-cols-[0.6fr_1.6fr_1.6fr_0.8fr_1fr_0.9fr_0.8fr] items-center px-5 py-4 text-sm transition-colors hover:bg-cream"
                >
                  <span className="font-display font-bold text-forest-700">
                    #{i + 1}
                  </span>
                  <span className="flex items-center gap-3">
                    <BrandLogo brand={brand} size={40} rounded="rounded-lg" />
                    <span>
                      <span className="block font-semibold text-ink">
                        {brand.name}
                      </span>
                      <span className="block text-xs text-ink-muted">
                        {brand.licence}
                      </span>
                    </span>
                  </span>
                  <span>
                    <span className="block font-semibold text-forest-700">
                      {brand.bonusHeadline}
                    </span>
                    <span className="block text-xs text-ink-muted">
                      {brand.bonusExtra}
                    </span>
                  </span>
                  <span className="text-ink-soft">{brand.wagering}</span>
                  <span className="text-ink-soft">{brand.payoutTime}</span>
                  <span>
                    <StarRating
                      rating={brand.rating}
                      showValue={false}
                      size={14}
                    />
                  </span>
                  <span className="flex justify-end">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white">
                      Visit
                      <Icon name="arrow" size={14} />
                    </span>
                  </span>
                </AffiliateLink>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:hidden">
            {brands.map((brand, i) => (
              <BrandRankCard key={brand.id} brand={brand} rank={i + 1} />
            ))}
          </div>

          <p className="mt-6 rounded-xl bg-cream p-4 text-center text-xs text-ink-muted">
            {compliance.disclosure}
          </p>
        </div>
      </section>
    </>
  );
}
