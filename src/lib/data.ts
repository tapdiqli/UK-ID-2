import rawData from "@/data/data.json";
import type {
  Brand,
  BonusCategory,
  Compliance,
  Faq,
  Guide,
  ReviewCriterion,
  SiteConfig,
  SiteData,
  Stat,
  TrustSignal,
} from "@/lib/types";

const data = rawData as SiteData;

export const siteConfig: SiteConfig = data.site;
export const compliance: Compliance = data.compliance;
export const trustSignals: TrustSignal[] = data.trustSignals;
export const stats: Stat[] = data.stats;
export const brands: Brand[] = data.brands;
export const bonusCategories: BonusCategory[] = data.bonusCategories;
export const guides: Guide[] = data.guides;
export const reviewCriteria: ReviewCriterion[] = data.reviewCriteria;
export const faqs: Faq[] = data.faqs;

export function getAllBrands(): Brand[] {
  return [...brands].sort((a, b) => b.editorScore - a.editorScore);
}

export function getFeaturedBrands(): Brand[] {
  return getAllBrands().filter((brand) => brand.featured);
}

export function getTopBrands(limit = 3): Brand[] {
  return getAllBrands().slice(0, limit);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}

export function getBrandRank(slug: string): number {
  return getAllBrands().findIndex((brand) => brand.slug === slug) + 1;
}
