"use client";

import { useState } from "react";
import type { Faq } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";

interface FaqAccordionProps {
  faqs: Faq[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 overflow-hidden rounded-2xl border border-ink/10 bg-white">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-cream sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold text-ink">
                {faq.question}
              </span>
              <span
                className={`shrink-0 text-forest-600 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <Icon name="chevron" size={20} />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted sm:px-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
