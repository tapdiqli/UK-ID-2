import { Icon } from "@/components/ui/Icon";

interface StarRatingProps {
  rating: number;
  size?: number;
  showValue?: boolean;
  className?: string;
  /** Show “How we rate” tooltip on hover */
  showHowWeRate?: boolean;
}

export function StarRating({
  rating,
  size = 16,
  showValue = true,
  className = "",
  showHowWeRate = false,
}: StarRatingProps) {
  const rounded = Math.round(rating);

  return (
    <div
      className={`group/rating relative inline-flex items-center gap-1.5 ${
        showHowWeRate ? "cursor-help" : ""
      } ${className}`}
      aria-label={`Rated ${rating} out of 5${
        showHowWeRate
          ? ". How we rate: licence, bonuses, payouts, games, support and safer gambling."
          : ""
      }`}
    >
      <div className="flex text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon
            key={i}
            name="star"
            size={size}
            className={i < rounded ? "text-amber-400" : "text-ink/15"}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-sm font-semibold text-ink">
          {rating.toFixed(1)}
        </span>
      )}

      {showHowWeRate && (
        <span
          role="tooltip"
          className="pointer-events-none absolute left-0 top-full z-30 mt-2 w-max max-w-[240px] rounded-lg bg-ink px-3 py-2 text-left text-[11px] font-medium leading-snug text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover/rating:opacity-100"
        >
          <span className="mb-0.5 block font-bold text-forest-300">
            How we rate
          </span>
          Based on licence, bonuses, payouts, games, support &amp; safer
          gambling tools.
          <span className="absolute bottom-full left-4 border-4 border-transparent border-b-ink" />
        </span>
      )}
    </div>
  );
}
