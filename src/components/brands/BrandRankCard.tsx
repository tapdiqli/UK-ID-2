import type { Brand } from "@/lib/types";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { StarRating } from "@/components/ui/StarRating";
import { Icon } from "@/components/ui/Icon";
import { AffiliateLink } from "@/components/tracking/AffiliateLink";

interface BrandRankCardProps {
  brand: Brand;
  rank: number;
}

export function BrandRankCard({ brand, rank }: BrandRankCardProps) {
  return (
    <AffiliateLink
      href={brand.affiliateUrl}
      className="group relative block overflow-visible rounded-2xl border border-ink/10 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-forest-300 hover:shadow-brand sm:p-5 lg:p-6"
    >
      {rank === 1 && (
        <div className="absolute right-0 top-0 rounded-bl-2xl bg-forest-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white sm:px-4 sm:py-1.5 sm:text-xs">
          #1 Top Rated
        </div>
      )}

      {/* Mobile layout */}
      <div className="flex flex-col gap-4 lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest-50 font-display text-xs font-bold text-forest-700">
              {rank}
            </span>
            <BrandLogo brand={brand} rounded="rounded-xl" />
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="font-display text-lg font-bold text-ink">
              {brand.rating.toFixed(1)}
            </span>
            <StarRating
              rating={brand.rating}
              size={14}
              showValue={false}
              showHowWeRate
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-center">
            <p className="font-display text-base font-bold leading-snug text-forest-700">
              {brand.bonusHeadline}
            </p>
            <p className="mt-0.5 text-xs text-ink-muted">{brand.bonusExtra}</p>
          </div>
          <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-12px_rgba(27,94,32,0.8)] transition-colors group-hover:bg-forest-700">
            Visit Casino
            <Icon name="arrow" size={16} />
          </span>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden items-center gap-5 lg:grid lg:grid-cols-[auto_1.5fr_1.4fr_auto]">
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-50 font-display text-sm font-bold text-forest-700">
            {rank}
          </span>
          <BrandLogo brand={brand} size={60} />
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-forest-700">
            {brand.name}
          </h3>
          <p className="mt-0.5 text-sm text-ink-muted">{brand.tagline}</p>
          <div className="mt-2 flex items-center gap-3">
            <StarRating rating={brand.rating} showHowWeRate />
          </div>
        </div>

        <div className="rounded-xl bg-cream p-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
            {brand.bonusType}
          </p>
          <p className="mt-1 font-display text-xl font-bold text-forest-700">
            {brand.bonusHeadline}
          </p>
          <p className="text-xs text-ink-soft">{brand.bonusExtra}</p>
        </div>

        <div className="flex flex-col items-stretch gap-2 lg:w-40">
          <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-12px_rgba(27,94,32,0.8)] transition-colors group-hover:bg-forest-700">
            Visit Casino
            <Icon name="arrow" size={16} />
          </span>
          <span className="text-center text-xs font-semibold text-forest-700">
            Play now
          </span>
        </div>
      </div>
    </AffiliateLink>
  );
}
