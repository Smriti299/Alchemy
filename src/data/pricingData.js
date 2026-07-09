export const PLANS = [
  {
    name: 'Starter',
    price: '$499',
    period: 'mo',
    description: 'Local SEO + GMB optimization for growing businesses.',
    features: [
      'Local SEO audit',
      'GMB setup & optimization',
      '4 GMB posts/month',
      'Monthly report',
    ],
    ctaLabel: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$999',
    period: 'mo',
    description: 'Full SEO, GMB management, and content — everything you need.',
    features: [
      'Everything in Starter',
      'On-page SEO (10 pages)',
      'Review management',
      '8 GMB posts/month',
      '5 backlinks/month',
    ],
    ctaLabel: 'Most Popular',
    popular: true,
  },
  {
    name: 'Pro',
    price: '$1,799',
    period: 'mo',
    description: 'Advanced SEO, PPC, link building, and dedicated manager.',
    features: [
      'Everything in Growth',
      'Google Ads management',
      '20 backlinks/month',
      'Dedicated account manager',
      'Weekly reporting',
    ],
    ctaLabel: 'Scale Up',
    popular: false,
  },
  {
    name: 'Custom',
    price: 'Let\u2019s Talk',
    period: '',
    description: 'Multi-location or enterprise brands with custom scope and reporting needs.',
    features: [
      'Everything in Pro',
      'Multi-location support',
      'Custom reporting cadence',
      'Priority support & strategy calls',
    ],
    ctaLabel: 'Contact Sales',
    popular: false,
  },
]

// Feature comparison matrix for the full Pricing page.
// value: 'yes' | 'partial' | 'no' | string (custom label e.g. counts)
export const FEATURE_GROUPS = [
  {
    category: 'SEO',
    rows: [
      { label: 'Keyword research & tracking', values: ['yes', 'yes', 'yes', 'yes'] },
      { label: 'On-page optimization', values: ['partial', 'yes', 'yes', 'yes'] },
      { label: 'Technical SEO audit', values: ['partial', 'yes', 'yes', 'yes'] },
      { label: 'Local SEO strategy', values: ['yes', 'yes', 'yes', 'yes'] },
      { label: 'E-commerce SEO', values: ['no', 'partial', 'yes', 'yes'] },
      { label: 'Backlinks / month', values: ['no', '5', '20', 'Custom'] },
    ],
  },
  {
    category: 'Google Business Profile',
    rows: [
      { label: 'GMB setup & optimization', values: ['yes', 'yes', 'yes', 'yes'] },
      { label: 'GMB posts / month', values: ['4', '8', '16', 'Custom'] },
      { label: 'Review response management', values: ['no', 'yes', 'yes', 'yes'] },
      { label: 'Review generation campaigns', values: ['no', 'partial', 'yes', 'yes'] },
      { label: 'Local citation building', values: ['no', 'partial', 'yes', 'Custom'] },
      { label: 'Map Pack ranking tracking', values: ['yes', 'yes', 'yes', 'yes'] },
    ],
  },
  {
    category: 'Content & Ads',
    rows: [
      { label: 'Blog posts / month', values: ['no', '2', '4', 'Custom'] },
      { label: 'PPC / Google Ads management', values: ['no', 'no', 'yes', 'yes'] },
      { label: 'Social media management', values: ['no', 'partial', 'yes', 'yes'] },
      { label: 'Landing page copywriting', values: ['no', 'partial', 'yes', 'yes'] },
    ],
  },
  {
    category: 'Reporting & Support',
    rows: [
      { label: 'Monthly reporting', values: ['yes', 'yes', 'yes', 'yes'] },
      { label: 'Weekly reporting', values: ['no', 'no', 'yes', 'yes'] },
      { label: 'Custom dashboard (Looker Studio)', values: ['no', 'yes', 'yes', 'yes'] },
      { label: 'Dedicated account manager', values: ['no', 'no', 'yes', 'yes'] },
      { label: 'Quarterly strategy review', values: ['no', 'yes', 'yes', 'yes'] },
      { label: 'Support level', values: ['Email', 'Email + Chat', 'Priority', 'White-glove'] },
    ],
  },
]

export const PRICING_FAQS = [
  {
    q: 'Are there any setup fees?',
    a: 'No setup fees on any plan. You pay only the monthly subscription price.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. All plans are month-to-month with no long-term contracts. Cancel with 30 days\u2019 notice.',
  },
  {
    q: 'How soon will I see results?',
    a: 'GMB improvements often show within 30–60 days. SEO rankings typically improve significantly in 3–6 months.',
  },
  {
    q: 'Do you require a contract?',
    a: 'No long-term contracts required. We earn your business every month.',
  },
  {
    q: 'What\u2019s included in the free audit?',
    a: 'A full analysis of your current SEO, GMB profile, competitor landscape, and a prioritized action plan — no strings attached.',
  },
]
