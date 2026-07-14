import type { MetadataRoute } from "next";
import { brands, guides, siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/casinos",
    "/bonuses",
    "/guides",
    "/how-we-rate",
    "/about",
    "/contact",
    "/responsible-gambling",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const brandRoutes = brands.map((brand) => ({
    url: `${base}/casinos/${brand.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const guideRoutes = guides.map((guide) => ({
    url: `${base}/guides/${guide.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...brandRoutes, ...guideRoutes];
}
