"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/data";

const STORAGE_KEY = "bcc-age-verified";

// Read the verification flag from localStorage as an external store so we don't
// need to call setState inside an effect (avoids cascading renders).
const emptySubscribe = () => () => {};
const getVerified = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "yes";
  } catch {
    return false;
  }
};

export function AgeGate() {
  const verified = useSyncExternalStore(
    emptySubscribe,
    getVerified,
    () => false, // server snapshot: assume not verified so the gate renders
  );
  const [dismissed, setDismissed] = useState(false);
  const [denied, setDenied] = useState(false);

  const visible = !verified && !dismissed;

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [visible]);

  const confirm = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "yes");
    } catch {
      /* ignore */
    }
    setDismissed(true);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="animate-overlay-in fixed inset-0 z-[100] overflow-y-auto bg-ink/50 backdrop-blur-md"
    >
      {/* Soft brand glows over the blurred site */}
      <div className="pointer-events-none fixed -left-24 top-1/4 h-72 w-72 rounded-full bg-forest-400/25 blur-3xl" />
      <div className="pointer-events-none fixed -right-24 bottom-1/4 h-72 w-72 rounded-full bg-forest-500/25 blur-3xl" />

      <div className="flex min-h-full items-center justify-center px-4 py-8">
      <div className="animate-pop-in relative w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-brand ring-1 ring-black/5">
        {/* Header */}
        <div className="relative overflow-hidden bg-forest-radial px-8 pb-14 pt-9 text-center">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
          {/* Top sheen */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-forest-300/30 blur-2xl" />

          <div className="relative flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-forest-50 backdrop-blur">
              <Icon name="shield" size={14} />
              {siteConfig.name}
            </span>
          </div>
        </div>

        {/* Floating 18+ medallion straddling header and body */}
        <div className="relative -mt-12 flex justify-center">
          <div className="animate-badge-glow flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-forest-500 to-forest-700 text-white shadow-brand ring-4 ring-white">
            <span className="font-display text-4xl font-extrabold leading-none tracking-tight">
              18<span className="align-super text-2xl">+</span>
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 pb-8 pt-5">
          <h2
            id="age-gate-title"
            className="text-center font-display text-[26px] font-bold leading-tight text-ink"
          >
            Are you 18 or over?
          </h2>
          <p className="mx-auto mt-2.5 max-w-xs text-center text-sm leading-relaxed text-ink-soft">
            {siteConfig.name} features gambling-related content intended only for
            adults. Please confirm your age to continue.
          </p>

          {/* Trust chips */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 px-3 py-1.5 text-xs font-semibold text-forest-800 ring-1 ring-forest-100">
              <Icon name="shield" size={13} />
              UKGC Licensed
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 px-3 py-1.5 text-xs font-semibold text-forest-800 ring-1 ring-forest-100">
              <Icon name="scales" size={13} />
              Independent
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 px-3 py-1.5 text-xs font-semibold text-forest-800 ring-1 ring-forest-100">
              <Icon name="lock" size={13} />
              Secure
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={confirm}
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-forest-600 px-6 py-4 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-forest-700 hover:shadow-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 active:translate-y-0"
            >
              <Icon name="check" size={18} />
              Yes, I am 18 or over — Enter
              <span className="transition-transform group-hover:translate-x-0.5">
                <Icon name="arrow" size={18} />
              </span>
            </button>
            <button
              type="button"
              onClick={() => setDenied(true)}
              className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink-soft transition-colors hover:border-ink/25 hover:bg-ink/5"
            >
              No, I am under 18
            </button>
          </div>

          {denied && (
            <div className="animate-fade-up mt-5 flex items-start gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3.5 text-left text-sm text-ink-soft">
              <span className="mt-0.5 shrink-0 text-amber-600">
                <Icon name="shield" size={18} />
              </span>
              <p>
                You must be 18 or over to access this site. Please close this
                page. For free, confidential support visit{" "}
                <a
                  href="https://www.begambleaware.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-forest-700 underline"
                >
                  BeGambleAware
                </a>
                .
              </p>
            </div>
          )}

          <div className="mt-6 flex items-start gap-2 border-t border-ink/10 pt-5 text-xs leading-relaxed text-ink-muted">
            <span className="mt-0.5 shrink-0 text-forest-600">
              <Icon name="age" size={16} />
            </span>
            <p>
              Gambling can be addictive. Please play responsibly. By entering you
              agree to our{" "}
              <Link
                href="/terms"
                className="font-semibold text-forest-700 underline"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold text-forest-700 underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
