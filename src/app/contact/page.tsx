import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/common/ContactForm";
import { compliance, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the BritCasinoChoice team — suggest a casino, report a correction, or ask a question about UK online casinos.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="soft"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in touch"
        title="We'd love to hear from you"
        description="Questions, feedback or a casino you'd like us to review? Drop us a message and our team will get back to you."
      />

      <section className="py-14 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_360px]">
          <ContactForm />

          <aside className="space-y-4">
            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
              <h2 className="font-display text-lg font-bold text-ink">
                Contact details
              </h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-forest-600">
                    <Icon name="mail" size={20} />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">Email</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-ink-muted hover:text-forest-700"
                    >
                      {siteConfig.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-forest-600">
                    <Icon name="shield" size={20} />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">
                      Regulation
                    </span>
                    <a
                      href={compliance.regulator.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-muted hover:text-forest-700"
                    >
                      {compliance.regulator.name}
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-forest-radial p-6 text-white">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold">
                <Icon name="age" size={20} /> Need gambling support?
              </h2>
              <p className="mt-2 text-sm text-white/80">
                We can&apos;t provide counselling, but free, confidential help is
                available 24/7.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {compliance.helpOrganisations.slice(0, 3).map((org) => (
                  <li key={org.name}>
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-forest-200 hover:text-white"
                    >
                      {org.name}
                    </a>
                    {org.phone && (
                      <span className="text-white/70"> · {org.phone}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
