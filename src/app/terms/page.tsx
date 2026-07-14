import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { LegalDoc } from "@/components/common/LegalDoc";
import { compliance, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing your use of BritCasinoChoice, an independent UK casino comparison website. 18+ only.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        variant="soft"
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website."
      />
      <LegalDoc
        updated="1 July 2026"
        intro={
          <p>
            These Terms &amp; Conditions govern your use of {siteConfig.domain}.
            By accessing our website you agree to these terms. If you do not
            agree, please do not use the site.
          </p>
        }
        sections={[
          {
            heading: "Age restriction",
            body: (
              <p>
                This website contains information about gambling and is intended
                for adults aged 18 and over only. By using this site you confirm
                that you are at least 18 years old. {compliance.primaryWarning}
              </p>
            ),
          },
          {
            heading: "Informational purposes only",
            body: (
              <p>
                All content is provided for general information and comparison
                purposes. We are an independent affiliate and are not a gambling
                operator. We do not accept wagers, deposits or payments of any
                kind.
              </p>
            ),
          },
          {
            heading: "Affiliate relationships",
            body: (
              <p>
                {compliance.disclosure} Commercial relationships do not influence
                our editorial ratings, which are based on independent testing.
              </p>
            ),
          },
          {
            heading: "Accuracy of information",
            body: (
              <p>
                We work hard to keep bonus offers, terms and licensing details
                accurate and up to date, but promotions change frequently.
                Always check the operator&apos;s own website and full terms
                before signing up or depositing.
              </p>
            ),
          },
          {
            heading: "No guarantees",
            body: (
              <p>
                Gambling involves risk. Nothing on this website should be taken
                as a guarantee of winnings. Never gamble more than you can afford
                to lose.
              </p>
            ),
          },
          {
            heading: "Intellectual property",
            body: (
              <p>
                All content on this site, including text, graphics and logos, is
                owned by or licensed to {siteConfig.name} and may not be
                reproduced without permission. Third-party brand names remain the
                property of their respective owners.
              </p>
            ),
          },
          {
            heading: "Limitation of liability",
            body: (
              <p>
                To the fullest extent permitted by law, {siteConfig.name} accepts
                no liability for any loss arising from your use of this website or
                any third-party gambling operator.
              </p>
            ),
          },
          {
            heading: "Governing law",
            body: (
              <p>
                These terms are governed by the laws of England and Wales, and
                any disputes are subject to the exclusive jurisdiction of the
                courts of England and Wales.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
