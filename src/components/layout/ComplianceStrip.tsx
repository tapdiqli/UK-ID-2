import { compliance } from "@/lib/data";

export function ComplianceStrip() {
  const gambleAware = compliance.helpOrganisations.find(
    (o) => o.name === "BeGambleAware"
  );

  return (
    <div className="bg-ink text-white">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 text-center text-[12px] font-medium">
        <span className="flex items-center gap-1.5">
          <span className="rounded bg-white px-1.5 py-0.5 text-[11px] font-extrabold text-ink">
            18+
          </span>
          {compliance.primaryWarning}
        </span>
        <span className="hidden text-white/30 sm:inline" aria-hidden="true">
          |
        </span>
        <a
          href={gambleAware?.url ?? "https://www.begambleaware.org"}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-forest-400 underline-offset-2 hover:text-forest-300"
        >
          BeGambleAware.org
        </a>
      </div>
    </div>
  );
}
