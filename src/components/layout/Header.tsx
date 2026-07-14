"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.3)] backdrop-blur"
          : "bg-white"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-radial text-white shadow-brand">
            <Icon name="shield" size={22} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-ink">
              Brit<span className="text-forest-600">Casino</span>Choice
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-ink-muted">
              UK Casino Guide
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-forest-50 text-forest-700"
                  : "text-ink-soft hover:bg-forest-50 hover:text-forest-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-white">
            18+
          </span>
          <LinkButton href="/casinos" size="sm">
            Compare Casinos
          </LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-white lg:hidden">
          <nav className="container-page flex flex-col py-4" aria-label="Mobile">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-3 text-base font-medium ${
                  isActive(link.href)
                    ? "bg-forest-50 text-forest-700"
                    : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LinkButton href="/casinos" className="mt-3 w-full" size="md">
              Compare Casinos
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
