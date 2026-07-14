import type { ReactNode } from "react";

type Tone = "green" | "dark" | "amber" | "outline" | "light";

const tones: Record<Tone, string> = {
  green: "bg-forest-100 text-forest-800",
  dark: "bg-ink text-white",
  amber: "bg-amber-100 text-amber-800",
  outline: "border border-forest-300 text-forest-700",
  light: "bg-white/15 text-white ring-1 ring-white/25",
};

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

export function Badge({ children, tone = "green", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
