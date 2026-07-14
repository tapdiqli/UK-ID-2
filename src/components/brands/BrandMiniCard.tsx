import type { Brand } from "@/lib/types";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { StarRating } from "@/components/ui/StarRating";
import { Icon } from "@/components/ui/Icon";
import { AffiliateLink } from "@/components/tracking/AffiliateLink";

interface BrandMiniCardProps {
  brand: Brand;
  rank: number;
}

export function BrandMiniCard({ brand, rank }: BrandMiniCardProps) {
  return (
    <AffiliateLink
      href={brand.affiliateUrl}
      className="flex items-center gap-2.5 rounded-lg bg-white p-2.5 shadow-card transition-transform duration-200 hover:-translate-y-0.5"
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-600 text-[10px] font-bold text-white">
        {rank}
      </span>
      <BrandLogo brand={brand} size={36} rounded="rounded-lg" />
      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-xs font-bold text-ink">
          {brand.name}
        </p>
        <StarRating rating={brand.rating} size={11} />
      </div>
      <div className="text-right">
        <p className="text-xs font-bold text-forest-700">
          {brand.bonusHeadline}
        </p>
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-ink-muted">
          Claim <Icon name="arrow" size={11} />
        </span>
      </div>
    </AffiliateLink>
  );
}
