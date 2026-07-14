export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  email: string;
  country: string;
  language: string;
  foundedYear: number;
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
}

export interface HelpOrganisation {
  name: string;
  url: string;
  phone: string;
  description: string;
}

export interface RegBadge {
  name: string;
  url: string;
  image: string;
}

export interface Compliance {
  ageLimit: number;
  primaryWarning: string;
  regulator: {
    name: string;
    shortName: string;
    url: string;
  };
  helpOrganisations: HelpOrganisation[];
  regBadges: RegBadge[];
  disclosure: string;
}

export interface TrustSignal {
  label: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Brand {
  id: number;
  slug: string;
  name: string;
  logoInitials: string;
  logoImage: string;
  logoColor: string;
  rating: number;
  editorScore: number;
  featured: boolean;
  tagline: string;
  bonusHeadline: string;
  bonusExtra: string;
  bonusType: string;
  minDeposit: number;
  wagering: string;
  payoutTime: string;
  gamesCount: number;
  established: number;
  licence: string;
  features: string[];
  paymentMethods: string[];
  gameTypes: string[];
  pros: string[];
  cons: string[];
  summary: string;
  affiliateUrl: string;
  accentFrom: string;
  accentTo: string;
}

export interface BonusCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
}

export interface ReviewCriterion {
  title: string;
  weight: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface SiteData {
  site: SiteConfig;
  compliance: Compliance;
  trustSignals: TrustSignal[];
  stats: Stat[];
  brands: Brand[];
  bonusCategories: BonusCategory[];
  guides: Guide[];
  reviewCriteria: ReviewCriterion[];
  faqs: Faq[];
}
