import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { compliance } from "@/lib/data";

export const metadata: Metadata = {
  title: "Responsible Gambling",
  description:
    "Gamble responsibly. Learn about deposit limits, self-exclusion, GAMSTOP and free 24/7 support from BeGambleAware and GamCare. 18+ only.",
};

const tools = [
  { icon: "wallet" as const, title: "Deposit limits", text: "Cap how much you can deposit daily, weekly or monthly." },
  { icon: "clock" as const, title: "Reality checks", text: "Set reminders showing how long you've been playing." },
  { icon: "refresh" as const, title: "Time-outs", text: "Take a short break from 24 hours up to 6 weeks." },
  { icon: "lock" as const, title: "Self-exclusion", text: "Block access for 6 months or more when you need to." },
];

const signs = [
  "Spending more money or time gambling than you can afford",
  "Chasing losses or gambling to win back money",
  "Gambling affecting your work, studies or relationships",
  "Borrowing money or selling things to fund gambling",
  "Feeling anxious, guilty or irritable about gambling",
];

export default function ResponsibleGamblingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Responsible Gambling" }]}
        eyebrow="Safer gambling"
        title="Stay in control"
        description="Gambling should always be fun and never a way to make money. If it stops being enjoyable, it's time to take a break. Help is always available."
      />

      {/* Emergency help — high on the page */}
      <section className="py-12">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {compliance.helpOrganisations.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-ink/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-forest-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-600">
                  <Icon name="phone" size={22} />
                </span>
                <h2 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-forest-700">
                  {org.name}
                </h2>
                {org.phone && (
                  <p className="mt-1 font-semibold text-forest-700">{org.phone}</p>
                )}
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {org.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-cream py-14 lg:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Take control"
            title="Safer gambling tools"
            description="Every UK-licensed casino must offer these free tools to help you manage your play."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-600">
                  <Icon name={tool.icon} size={22} />
                </span>
                <h3 className="mt-4 font-display font-bold text-ink">
                  {tool.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {tool.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning signs + tips */}
      <section className="py-14 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Know the signs"
              title="Is gambling becoming a problem?"
            />
            <ul className="mt-6 space-y-3">
              {signs.map((sign) => (
                <li
                  key={sign}
                  className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white p-4 text-sm text-ink-soft"
                >
                  <span className="mt-0.5 shrink-0 text-amber-500">
                    <Icon name="age" size={18} />
                  </span>
                  {sign}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-forest-radial p-8 text-white lg:p-10">
            <h2 className="font-display text-2xl font-bold">Tips for safer play</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Set a budget before you play and stick to it.",
                "Only gamble with money you can afford to lose.",
                "Never chase your losses.",
                "Don't gamble when upset, stressed or under the influence.",
                "Take regular breaks and set time limits.",
                "Balance gambling with other activities you enjoy.",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <span className="mt-0.5 text-forest-300">
                    <Icon name="check" size={18} />
                  </span>
                  <span className="text-white/85">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GAMSTOP / self-exclusion */}
      <section className="bg-ink py-14 text-white lg:py-16">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-500 text-white">
            <Icon name="lock" size={28} />
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-bold">
            Need a break from all UK gambling sites?
          </h2>
          <p className="max-w-xl text-white/75">
            GAMSTOP is a free service that lets you self-exclude from all
            online gambling companies licensed in Great Britain, in one place.
          </p>
          <a
            href="https://www.gamstop.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-forest-800 transition-colors hover:bg-forest-50"
          >
            Visit GAMSTOP <Icon name="arrow" size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
