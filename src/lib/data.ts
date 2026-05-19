// ─── Static Data — PayCaps Website ────────────────────────────
export const HOMEPAGE_HERO_FALLBACK = {
  topBadgeLine: '🏛️ CBUAE Regulated · PCI DSS Level 1',
  heroTitleLine1: "UAE's Most Trusted",
  heroTitleLine2: 'Payment Gateway',
  heroSubtext:
    "Accept 80+ payment methods in 92+ currencies. Go live in 2 days with the only CBUAE-regulated, NESA-certified gateway built for UAE businesses.",
  trustPills: ['PCI DSS Level 1', 'NESA Certified', '80+ Payment Methods', '92+ Currencies'],
  trustLineBadges: ['No setup fee', 'CBUAE Licensed', '2-day onboarding', 'PCI DSS Level 1'],
};

export const products = [
  {
    id: 'payment-gateway',
    icon: '💳',
    title: 'Payment Gateway',
    description: 'Seamless API-first gateway supporting 80+ payment methods with real-time processing.',
    cta: 'Get Started with Payment Gateway',
    href: '/sign-up?product=payment-gateway&utm_source=products&utm_medium=cta',
  },
  {
    id: 'pay-by-link',
    icon: '🔗',
    title: 'Pay by Link',
    description: 'Generate instant payment links via SMS, WhatsApp, or email — no website required.',
    cta: 'Get Started with Pay by Link',
    href: '/sign-up?product=pay-by-link&utm_source=products&utm_medium=cta',
  },
  {
    id: 'invoice-payments',
    icon: '📄',
    title: 'Invoice Payments',
    description: 'Send branded digital invoices and collect payments instantly from any device.',
    cta: 'Get Started with Invoicing',
    href: '/sign-up?product=invoice&utm_source=products&utm_medium=cta',
  },
  {
    id: 'hosted-payment-page',
    icon: '🖥️',
    title: 'Hosted Payment Page',
    description: 'PCI DSS compliant checkout page — fully branded, zero integration effort.',
    cta: 'Get Started with Hosted Page',
    href: '/sign-up?product=hosted&utm_source=products&utm_medium=cta',
  },
  {
    id: 'merchant-app',
    icon: '📱',
    title: 'Merchant Mobile App',
    description: 'Manage transactions, view analytics and reconcile payments from your smartphone.',
    cta: 'Get Started with Mobile App',
    href: '/sign-up?product=app&utm_source=products&utm_medium=cta',
  },
  {
    id: 'recurring-payments',
    icon: '🔄',
    title: 'Recurring Payments',
    description: 'Automate subscription billing with smart retry logic and dunning management.',
    cta: 'Get Started with Recurring',
    href: '/sign-up?product=recurring&utm_source=products&utm_medium=cta',
  },
  {
    id: 'white-label',
    icon: '🏷️',
    title: 'White Label',
    description: 'Launch your own branded payment gateway powered by PayCaps infrastructure.',
    cta: 'Learn more →',
    href: '/contact?type=white-label&utm_source=products&utm_medium=cta',
  },
  {
    id: 'api-integration',
    icon: '⚙️',
    title: 'API Integration',
    description: 'Full REST API with comprehensive SDKs for iOS, Android, and web platforms.',
    cta: 'View API docs →',
    href: '/integrations?utm_source=products&utm_medium=cta',
  },
];

export const paymentMethods = [
  { name: 'Visa', color: '#1A1F71' },
  { name: 'Mastercard', color: '#EB001B' },
  { name: 'UnionPay', color: '#C0392B' },
  { name: 'Amex', color: '#2E77BC' },
  { name: 'Apple Pay', color: '#000000' },
  { name: 'Google Pay', color: '#4285F4' },
  { name: 'Samsung Pay', color: '#1428A0' },
  { name: 'Mada', color: '#014E35' },
  { name: 'KNET', color: '#6A1B9A' },
  { name: 'Tabby', color: '#3D3D3D' },
  { name: 'Tamara', color: '#2D5F5E' },
  { name: 'Benefit', color: '#C0392B' },
];

export const whyPayCaps = [
  { icon: '⚡', title: 'Fast Onboarding', body: 'Go live in 2 business days — the fastest onboarding of any CBUAE-regulated gateway in the UAE.' },
  { icon: '💰', title: 'Quick Settlements', body: 'T+1 settlement directly to your UAE bank account. Your revenue, faster.' },
  { icon: '📊', title: 'Best Rates in UAE', body: 'Competitive MDR tailored for every business size — from startups to enterprise.' },
  { icon: '🔒', title: 'PCI DSS Level 1', body: 'The highest level of payment security certification. Your customers\' data is always protected.' },
  { icon: '🏛️', title: 'CBUAE Regulated', body: 'Fully licensed and regulated by the Central Bank of UAE — the ultimate stamp of trust.' },
  { icon: '🔗', title: '10+ Integrations', body: 'Shopify, WooCommerce, Magento, OpenCart, REST API, iOS SDK, Android SDK and more.' },
  { icon: '📱', title: 'Merchant Mobile App', body: 'Track sales, manage refunds, and view analytics from the PayCaps merchant app — anytime.' },
  { icon: '📈', title: 'Smart Dashboard', body: 'Real-time transaction analytics, settlement reports, and reconciliation tools built in.' },
  { icon: '🎧', title: '24/7 Support', body: 'Dedicated support team available around the clock via phone, email, and WhatsApp.' },
];

export const integrations = [
  { name: 'REST API', icon: '⚙️', type: 'developer' },
  { name: 'Hosted Page', icon: '🖥️', type: 'no-code' },
  { name: 'WooCommerce', icon: '🛒', type: 'plugin' },
  { name: 'Shopify', icon: '🏪', type: 'plugin' },
  { name: 'Magento', icon: '🔧', type: 'plugin' },
  { name: 'OpenCart', icon: '🛍️', type: 'plugin' },
  { name: 'iOS SDK', icon: '🍎', type: 'mobile' },
  { name: 'Android SDK', icon: '🤖', type: 'mobile' },
];

export const industries = [
  { id: 'ecommerce', icon: '🛒', label: 'eCommerce', href: '/solutions/ecommerce', value: 'Boost conversion with a frictionless checkout. Accept all major cards, digital wallets, and BNPL — all on one page.' },
  { id: 'food', icon: '🍔', label: 'Food & Restaurants', href: '/solutions/restaurants', value: 'Accept online orders, table QR payments and delivery payments. Real-time settlements keep your cash flow healthy.' },
  { id: 'education', icon: '🎓', label: 'Education', href: '/payment-gateway-for-schools', value: 'Collect tuition, registration and activity fees online. Installment plans and recurring billing built in.' },
  { id: 'healthcare', icon: '🏥', label: 'Healthcare', href: '/solutions/healthcare', value: 'PCI DSS compliant billing for clinics and hospitals. Accept insurance co-pays and direct payments digitally.' },
  { id: 'retail', icon: '🏪', label: 'Retail / SME', href: '/solutions/retail', value: 'Unified in-store and online payments. One dashboard for all your channels and settlements.' },
  { id: 'travel', icon: '✈️', label: 'Travel & Tourism', href: '/solutions/travel', value: 'Handle high-value bookings with smart routing. 92+ currencies and real-time FX conversion included.' },
  { id: 'realestate', icon: '🏢', label: 'Real Estate', href: '/solutions/real-estate', value: 'Collect deposits, rent and installments digitally. Payment links make chasing payments a thing of the past.' },
  { id: 'logistics', icon: '🚚', label: 'Logistics', href: '/solutions/logistics', value: 'Cash-on-delivery replacement with digital wallets and card-on-delivery. Real-time proof of payment.' },
];

export const complianceBadges = [
  { icon: '🏛️', title: 'CBUAE Regulated', description: 'Licensed by the Central Bank of UAE' },
  { icon: '🔒', title: 'PCI DSS Level 1', description: 'Highest security certification' },
  { icon: '🛡️', title: 'NESA Certified', description: 'National Electronic Security Authority' },
  { icon: '🔐', title: '3D Secure 2.0', description: 'Advanced authentication protocol' },
  { icon: '🔑', title: 'SHA-256 Encryption', description: 'Military-grade data encryption' },
  { icon: '🤖', title: 'AI Fraud Detection', description: 'Real-time risk scoring engine' },
  { icon: '🛡️', title: 'DDoS Protection', description: '99.9% uptime guaranteed' },
];

export const testimonials = [
  {
    id: 1,
    quote: "PayCaps transformed our online checkout. Our conversion rate jumped 34% in the first month after switching. The onboarding was genuinely done in 2 days as promised.",
    name: 'Ahmed Al Rashidi',
    role: 'CEO',
    company: 'Desert Bloom Retail',
    industry: 'Retail / eCommerce',
    rating: 5,
  },
  {
    id: 2,
    quote: "As a school, we needed a compliant, reliable way to collect tuition fees online. PayCaps' recurring billing has saved our admin team 20+ hours a month.",
    name: 'Sarah Johnson',
    role: 'Finance Director',
    company: 'Emirates International School',
    industry: 'Education',
    rating: 5,
  },
  {
    id: 3,
    quote: "The WooCommerce plugin installed in minutes. Settlements hit our account next day — no other gateway in the UAE matched that speed.",
    name: 'Khalid Mansouri',
    role: 'Founder',
    company: 'Souk Digital',
    industry: 'eCommerce',
    rating: 5,
  },
  {
    id: 4,
    quote: "Their 24/7 support is real. We had a question at 2am before a launch and got a response in under 10 minutes. That's the kind of partner you want.",
    name: 'Priya Nair',
    role: 'Head of Operations',
    company: 'HealthFirst Clinics',
    industry: 'Healthcare',
    rating: 5,
  },
];

export const stats = [
  { value: 80, suffix: '+', label: 'Payment Methods' },
  { value: 92, suffix: '+', label: 'Currencies' },
  { value: 10, suffix: '+', label: 'Integrations' },
  { value: 24, suffix: '/7', label: 'Support' },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/features',
    dropdown: [
      { label: 'Payment Gateway', href: '/features#gateway' },
      { label: 'Pay by Link', href: '/features#pay-by-link' },
      { label: 'Hosted Payment Page', href: '/features#hosted' },
      { label: 'Recurring Payments', href: '/features#recurring' },
      { label: 'Invoice Payments', href: '/features#invoice' },
      { label: 'White Label', href: '/features#white-label' },
    ],
  },
  // {
  //   label: 'Solutions',
  //   href: '/solutions',
  //   dropdown: [
  //     { label: 'eCommerce', href: '/solutions/ecommerce' },
  //     { label: 'Education', href: '/payment-gateway-for-schools' },
  //     { label: 'Healthcare', href: '/solutions/healthcare' },
  //     { label: 'Retail / SME', href: '/solutions/retail' },
  //     { label: 'Travel & Tourism', href: '/solutions/travel' },
  //     { label: 'Real Estate', href: '/solutions/real-estate' },
  //   ],
  // },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Newsroom', href: '/newsroom' },
  { label: 'Developer Guide', href: '/developers' },

  { label: 'About', href: '/about' },
];
