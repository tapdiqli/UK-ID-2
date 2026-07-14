"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

const STORAGE_KEY = "bcc-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (choice: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] p-4">
      <div className="container-page">
        <div className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-5 shadow-brand sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 text-forest-600">
              <Icon name="lock" size={20} />
            </span>
            <p className="text-sm leading-relaxed text-ink-soft">
              We use cookies to improve your experience and measure our affiliate
              links. See our{" "}
              <Link
                href="/cookie-policy"
                className="font-semibold text-forest-700 underline"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => decide("rejected")}
              className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:bg-ink/5"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="rounded-full bg-forest-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-700"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
