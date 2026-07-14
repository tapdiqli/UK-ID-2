import { trustSignals } from "@/lib/data";
import { Icon, type IconName } from "@/components/ui/Icon";

const iconMap: Record<string, IconName> = {
  shield: "shield",
  check: "check",
  age: "age",
  lock: "lock",
};

interface TrustBarProps {
  tone?: "light" | "dark";
}

export function TrustBar({ tone = "light" }: TrustBarProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={`grid grid-cols-2 gap-3 sm:grid-cols-4 ${
        isDark ? "text-white/85" : "text-ink-soft"
      }`}
    >
      {trustSignals.map((signal) => (
        <div
          key={signal.label}
          className={`flex items-center gap-2.5 rounded-xl px-3 py-3 text-sm font-medium ${
            isDark ? "bg-white/10" : "bg-white shadow-card"
          }`}
        >
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
              isDark ? "bg-forest-500/30 text-forest-200" : "bg-forest-50 text-forest-600"
            }`}
          >
            <Icon name={iconMap[signal.icon] ?? "check"} size={18} />
          </span>
          {signal.label}
        </div>
      ))}
    </div>
  );
}
