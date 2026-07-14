import Link from "next/link";
import Image from "next/image";
import { compliance, siteConfig } from "@/lib/data";
import { legalNav, mainNav } from "@/lib/nav";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink text-white/70">
      {/* Responsible gambling band */}
      <div className="border-b border-white/10 bg-ink-soft/40">
        <div className="container-page flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-lg font-bold text-white">
              Play safe. Stay in control.
            </h2>
            <p className="mt-1 text-sm text-white/70">
              When the fun stops, stop. Free, confidential support is available
              24/7 for anyone affected by gambling.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
            {compliance.regBadges.map((badge) => (
              <a
                key={badge.name}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 transition-opacity hover:opacity-100"
                aria-label={badge.name}
              >
                <Image
                  src={badge.image}
                  alt={badge.name}
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-radial text-white">
              <Icon name="shield" size={22} />
            </span>
            <span className="font-display text-lg font-bold text-white">
              Brit<span className="text-forest-400">Casino</span>Choice
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-forest-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Legal & Safety
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-forest-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Regulation
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            All listed operators are licensed by the{" "}
            <a
              href={compliance.regulator.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest-300 hover:underline"
            >
              {compliance.regulator.name}
            </a>
            .
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm hover:text-forest-300"
          >
            <Icon name="mail" size={16} />
            {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page space-y-3 py-6 text-xs leading-relaxed text-white/50">
          <p>{compliance.disclosure}</p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="rounded bg-white px-1.5 py-0.5 font-extrabold text-ink">
              18+
            </span>
            <span>
              &copy; {year} {siteConfig.name}. {siteConfig.domain}. All rights
              reserved. Gamble responsibly — for support visit BeGambleAware.org.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
