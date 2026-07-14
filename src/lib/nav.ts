export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Casino Reviews", href: "/casinos" },
  { label: "Bonuses", href: "/bonuses" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavLink[] = [
  { label: "Responsible Gambling", href: "/responsible-gambling" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];
