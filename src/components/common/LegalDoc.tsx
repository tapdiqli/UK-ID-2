import type { ReactNode } from "react";

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalDocProps {
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}

export function LegalDoc({ updated, intro, sections }: LegalDocProps) {
  return (
    <div className="container-page grid gap-10 py-12 lg:grid-cols-[240px_1fr] lg:py-16">
      {/* Table of contents */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          On this page
        </p>
        <nav className="mt-3 space-y-1 border-l border-ink/10 text-sm">
          {sections.map((section, i) => (
            <a
              key={section.heading}
              href={`#section-${i + 1}`}
              className="block border-l-2 border-transparent py-1 pl-3 text-ink-muted transition-colors hover:border-forest-500 hover:text-forest-700"
            >
              {section.heading}
            </a>
          ))}
        </nav>
      </aside>

      <article className="max-w-3xl">
        <p className="text-sm text-ink-muted">Last updated: {updated}</p>
        <div className="mt-4 text-base leading-relaxed text-ink-soft">
          {intro}
        </div>

        <div className="mt-8 space-y-8">
          {sections.map((section, i) => (
            <section
              key={section.heading}
              id={`section-${i + 1}`}
              className="scroll-mt-28"
            >
              <h2 className="font-display text-xl font-bold text-ink">
                {i + 1}. {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
