import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { AffiliateLink } from "@/components/tracking/AffiliateLink";
import { getAllBrands, guides } from "@/lib/data";

export const metadata: Metadata = {
  title: "UK Casino Guides & Tips",
  description:
    "Learn how to play smarter and safer with our UK casino guides — wagering explained, safer gambling tools, fast payouts and how we review casinos.",
};

export default function GuidesPage() {
  const top = getAllBrands().slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
        eyebrow="Learn & play smart"
        title="UK casino guides"
        description="Clear, jargon-free advice to help you choose the right casino, understand bonus terms and stay in control."
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

      <section className="py-14 lg:py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {guides.map((guide, i) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-brand"
            >
              <div
                className="flex h-36 items-center justify-center text-white"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(135deg,#1b5e20,#2e7d32)"
                      : "linear-gradient(135deg,#2e7d32,#66bb6a)",
                }}
              >
                <Icon name="sparkle" size={44} className="opacity-80" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Badge tone="green" className="w-fit">
                  {guide.category}
                </Badge>
                <h2 className="mt-3 font-display text-xl font-bold text-ink group-hover:text-forest-700">
                  {guide.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {guide.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-ink-muted">{guide.readTime}</span>
                  <span className="flex items-center gap-1.5 font-semibold text-forest-700">
                    Read guide <Icon name="arrow" size={15} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
