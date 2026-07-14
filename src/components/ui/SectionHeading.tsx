import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const descColor = tone === "light" ? "text-white/75" : "text-ink-muted";

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-sm font-bold uppercase tracking-widest text-forest-600">
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-2 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
