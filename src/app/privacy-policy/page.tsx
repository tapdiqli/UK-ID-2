import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { LegalDoc } from "@/components/common/LegalDoc";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BritCasinoChoice collects, uses and protects your personal data in line with UK GDPR and the Data Protection Act 2018.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        variant="soft"
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        title="Privacy Policy"
        description="Your privacy matters. This policy explains what data we collect and how we use it."
      />
      <LegalDoc
        updated="1 July 2026"
        intro={
          <p>
            This Privacy Policy explains how {siteConfig.name} (&quot;we&quot;,
            &quot;us&quot;) collects, uses and safeguards your information when
            you visit {siteConfig.domain}. We are committed to protecting your
            personal data in accordance with UK GDPR and the Data Protection Act
            2018.
          </p>
        }
        sections={[
          {
            heading: "Who we are",
            body: (
              <p>
                {siteConfig.name} is an independent affiliate website that
                compares and reviews UK-licensed online casinos. We are not a
                gambling operator and do not accept bets or deposits.
              </p>
            ),
          },
          {
            heading: "Information we collect",
            body: (
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Contact details you provide via our contact form (name, email, message).</li>
                <li>Technical data such as IP address, browser type and device information.</li>
                <li>Usage data about how you interact with our pages.</li>
                <li>Cookie and analytics data (see our Cookie Policy).</li>
              </ul>
            ),
          },
          {
            heading: "How we use your information",
            body: (
              <ul className="list-disc space-y-1.5 pl-5">
                <li>To respond to your enquiries.</li>
                <li>To improve our website and content.</li>
                <li>To measure the performance of our affiliate links.</li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
            ),
          },
          {
            heading: "Lawful basis for processing",
            body: (
              <p>
                We process personal data on the basis of your consent, our
                legitimate interests in operating and improving our website, and
                where necessary to comply with a legal obligation.
              </p>
            ),
          },
          {
            heading: "Affiliate links & third parties",
            body: (
              <p>
                When you click through to a casino, that operator&apos;s own
                privacy policy applies. We may share limited, non-identifying
                referral data with partners to attribute sign-ups. We never sell
                your personal data.
              </p>
            ),
          },
          {
            heading: "Data retention",
            body: (
              <p>
                We keep personal data only for as long as necessary for the
                purposes described above, after which it is securely deleted.
              </p>
            ),
          },
          {
            heading: "Your rights",
            body: (
              <p>
                Under UK GDPR you have the right to access, correct, delete or
                restrict the processing of your personal data, and to object to
                processing or request data portability. To exercise any of these
                rights, contact us at {siteConfig.email}.
              </p>
            ),
          },
          {
            heading: "Contact us",
            body: (
              <p>
                For any privacy-related questions, email us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-forest-700 underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
