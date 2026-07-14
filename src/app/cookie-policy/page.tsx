import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { LegalDoc } from "@/components/common/LegalDoc";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How BritCasinoChoice uses cookies and similar technologies, and how you can manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        variant="soft"
        crumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
        title="Cookie Policy"
        description="Understand how and why we use cookies on this website."
      />
      <LegalDoc
        updated="1 July 2026"
        intro={
          <p>
            This Cookie Policy explains how {siteConfig.name} uses cookies and
            similar technologies on {siteConfig.domain}. It should be read
            alongside our Privacy Policy.
          </p>
        }
        sections={[
          {
            heading: "What are cookies?",
            body: (
              <p>
                Cookies are small text files stored on your device when you visit
                a website. They help the site function correctly and provide
                information to the site&apos;s owners.
              </p>
            ),
          },
          {
            heading: "Types of cookies we use",
            body: (
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <strong>Essential cookies</strong> — required for the website
                  to function, including remembering your age verification.
                </li>
                <li>
                  <strong>Analytics cookies</strong> — help us understand how
                  visitors use the site so we can improve it.
                </li>
                <li>
                  <strong>Affiliate cookies</strong> — used to attribute
                  referrals when you click through to a casino.
                </li>
              </ul>
            ),
          },
          {
            heading: "Managing cookies",
            body: (
              <p>
                You can control and delete cookies through your browser settings.
                Please note that disabling essential cookies may affect how the
                website works. Most browsers let you refuse or delete cookies via
                the settings or preferences menu.
              </p>
            ),
          },
          {
            heading: "Third-party cookies",
            body: (
              <p>
                Some cookies are placed by third-party services such as analytics
                providers. These providers have their own privacy and cookie
                policies which we encourage you to review.
              </p>
            ),
          },
          {
            heading: "Changes to this policy",
            body: (
              <p>
                We may update this Cookie Policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
