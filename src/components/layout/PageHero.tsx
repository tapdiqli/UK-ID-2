import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
  variant?: "solid" | "soft";
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
  variant = "solid",
}: PageHeroProps) {
  if (variant === "soft") {
    return (
      <section className="border-b border-ink/5 bg-cream">
        <div className="container-page py-12 lg:py-14">
          {crumbs && <Breadcrumbs crumbs={crumbs} tone="dark" />}
          {eyebrow && (
            <span className="mt-4 inline-block text-sm font-bold uppercase tracking-widest text-forest-600">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-ink text-balance sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-forest-radial text-white">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="container-page relative py-12 lg:py-16">
        {crumbs && <Breadcrumbs crumbs={crumbs} tone="light" />}
        {eyebrow && (
          <div className="mt-4">
            <Badge tone="light">{eyebrow}</Badge>
          </div>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

function Breadcrumbs({
  crumbs,
  tone,
}: {
  crumbs: Crumb[];
  tone: "light" | "dark";
}) {
  const base = tone === "light" ? "text-white/70" : "text-ink-muted";
  const active = tone === "light" ? "text-white" : "text-forest-700";
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${base}`}>
        {crumbs.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-1.5">
            {crumb.href ? (
              <Link href={crumb.href} className="hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span className={`font-semibold ${active}`}>{crumb.label}</span>
            )}
            {i < crumbs.length - 1 && (
              <span className="-rotate-90 opacity-50">
                <Icon name="chevron" size={14} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
