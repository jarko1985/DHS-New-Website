export type MenuItem = {
  label: string;
  link: string;
};

export type MenuColumn = {
  title: string;
  items: MenuItem[];
};

export const footerMenuColumns: MenuColumn[] = [
  {
    title: "DHS",
    items: [
      { label: "homepage", link: "/" },
      { label: "exchange", link: "/exchange" },
      { label: "about-us", link: "/about" },
    ],
  },
  {
    title: "user_account",
    items: [
      { label: "signup", link: "/signup" },
      { label: "signin", link: "/login" },
      { label: "trading", link: "/trading" },
    ],
  },
  {
    title: "legal_compliance",
    items: [
      { label: "risk_disclosure", link: "/risk-disclosure" },
      { label: "privacy_policy", link: "/privacy-policy" },
      { label: "terms_and_conditions", link: "/terms-and-conditions" },
      { label: "conflict_of_interest", link: "/conflict-of-interest" },
      { label: "whistleblowing_policy", link: "/whistleblowing-policy" },
      { label: "complaints_handling", link: "/complaint-policy" },
      { label: "aml_ctf_policy", link: "/ctf-policy" },
    ],
  },
  {
    title: "transparency_disclosures",
    items: [
      { label: "fees_charges", link: "/fees" },
      { label: "custody_safeguarding", link: "/custody-of-assets" },
      { label: "public_disclosures", link: "/public-disclosures" },
      { label: "token_listing", link: "/token-listing" },
      { label: "governance_management", link: "/governance-management" },
    ],
  },
  {
    title: "support_engagement",
    items: [
      { label: "contact_us", link: "/contact" },
      { label: "complaints_dispute", link: "/complaints-dispute" },
      { label: "faq", link: "/faq" },
      { label: "newsletter_blog", link: "/newsletter-blog" },
      { label: "support_tickets", link: "/support-tickets" },
    ],
  },
  {
    title: "security",
    items: [
      { label: "data_protection", link: "/security-protection" },
      { label: "system_status", link: "/system-status" },
    ],
  },
];


