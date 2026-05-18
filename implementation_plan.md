# PayCaps.com — Full Website Revamp
### Implementation Plan v2.0 · Senior Developer Edition

---

## 1. Current Site Audit — What We're Replacing

| Area | Current State | Verdict |
|---|---|---|
| **Tech Stack** | WordPress (Nunito font, jQuery, heavy plugins) | ❌ Replace entirely |
| **Hero** | Cluttered form + long headline competing for attention | ❌ Redesign |
| **Navigation** | 15+ dropdown items, top info bar adds clutter | ❌ Simplify |
| **Colors** | Off-brand greens, no navy, inconsistent palette | ❌ Enforce brand tokens |
| **Typography** | Nunito — too playful for a regulated FinTech | ❌ Replace with Inter |
| **Images** | Generic SVG icons, no real product screenshots | ❌ Upgrade to UI mockups |
| **Mobile UX** | Hamburger works but mega-menu bleeds through | ⚠️ Fix |
| **Performance** | WordPress bloat — estimated Lighthouse ~55–65 | ❌ Target ≥ 95 |
| **SEO** | Decent content, poor schema, no hreflang | ⚠️ Full SEO implementation |
| **Compliance Display** | CBUAE mention only in footer text | ❌ Elevate to hero |

**Existing URLs to preserve (indexed traffic):**
- `/payment-gateway-integration-guide-uae`
- `/payment-gateway-for-schools`
- `/payment-gateway-features/`
- All solution sub-pages (Shopify, WooCommerce, etc.)

---

## 2. Tech Stack Decision

| Layer | Choice | Reason |
|---|---|---|
| **Frontend Framework** | **Next.js 14** (App Router) | SSG/ISR for Lighthouse ≥ 95; React ecosystem; hreflang support |
| **CMS** | **Sanity v3** (Headless) | Marketing team edits content without touching code; GROQ queries |
| **Styling** | **CSS Modules + CSS Custom Properties** | Zero runtime CSS; scoped styles; brand tokens enforced |
| **Deployment** | **Vercel** | Native Next.js, Edge CDN, analytics |
| **Images** | **next/image** (WebP/AVIF auto) | Automatic format conversion + lazy loading = LCP < 2.5s |
| **Fonts** | **next/font** (Inter + Space Grotesk) | Self-hosted, `font-display: swap`, zero layout shift |
| **Analytics** | **Google Analytics 4 + GTM** | Via `@next/third-parties` or GTM script |
| **Forms** | **React Hook Form + Webhook → Odoo CRM** | Lightweight, fast, no jQuery |

---

## 3. Brand Design System

### 3.1 Color Tokens (Exact Values — Never Deviate)
```css
:root {
  /* Brand Core */
  --color-navy:        #1A3C6E;   /* Primary — headings, nav bg hover, section accents */
  --color-green:       #00B37A;   /* CTA — all primary buttons */
  --color-green-hover: #00976A;   /* CTA hover state */
  --color-orange:      #F5871F;   /* Highlight only — badges, stats labels, icons */
  --color-bg-light:    #F4F7FB;   /* Alternating section backgrounds */
  --color-footer:      #1A2B45;   /* Footer + Trust section */
  --color-muted:       #5A7299;   /* Body text, descriptions */

  /* Neutral */
  --color-white:       #FFFFFF;
  --color-text-dark:   #0D1B2A;   /* H1, H2 on white backgrounds */
  --color-border:      #E2E8F0;

  /* States */
  --color-error:       #E53E3E;
  --color-success:     #00B37A;
}
```

### 3.2 CTA Button Rules (Strict — Required by Google Ads Brief)
| Type | Background | Text | Border | Hover |
|---|---|---|---|---|
| **Primary CTA** | `#00B37A` | White | none | `#00976A` |
| **Secondary CTA** | `#FFFFFF` | `#1A3C6E` | `2px solid #1A3C6E` | Light navy bg |
| **CTA on dark bg** | `#FFFFFF` | `#1A3C6E` | none | Off-white |
| **CTA on green banner** | `#FFFFFF` | `#1A3C6E` | none | Off-white |
| ❌ NEVER | Orange on buttons | — | — | — |

> **Border-radius: 4px** on all buttons (as specified in brief)

### 3.3 Typography Scale
| Role | Font | Weight | Size (Desktop) |
|---|---|---|---|
| H1 | Space Grotesk | 700 | 52px |
| H2 | Space Grotesk | 700 | 38px |
| H3 | Space Grotesk | 600 | 24px |
| Body | Inter | 400 | 16px / 1.7 line-height |
| Caption / Label | Inter | 500 | 13px |
| Button | Inter | 600 | 15px |

### 3.4 Spacing & Layout
- Max content width: **1200px**
- Section vertical padding: **80px desktop / 48px mobile**
- Card border-radius: **12px**
- Grid gaps: **24px**

---

## 4. Project Structure

```
paycaps/
├── app/                          ← Next.js App Router
│   ├── layout.tsx                ← Root layout (GTM, fonts, meta)
│   ├── page.tsx                  ← Homepage
│   ├── features/page.tsx
│   ├── solutions/
│   │   ├── page.tsx              ← Solutions overview
│   │   ├── ecommerce/page.tsx
│   │   ├── shopify/page.tsx
│   │   ├── woocommerce/page.tsx
│   │   └── [industry]/page.tsx   ← Dynamic routes per industry
│   ├── integrations/page.tsx
│   ├── pricing/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── payment-methods/page.tsx
│   ├── security/page.tsx
│   └── sign-up/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            ← Sticky nav, EN/AR toggle
│   │   ├── Footer.tsx
│   │   └── CTABanner.tsx         ← Reusable green CTA banner
│   ├── home/
│   │   ├── Hero.tsx              ← Section 2
│   │   ├── StatsBar.tsx          ← Section 3
│   │   ├── ProductsGrid.tsx      ← Section 4
│   │   ├── PaymentMethods.tsx    ← Section 5
│   │   ├── WhyPayCaps.tsx        ← Section 6
│   │   ├── Integrations.tsx      ← Section 7
│   │   ├── Industries.tsx        ← Section 8
│   │   ├── TrustCompliance.tsx   ← Section 9
│   │   ├── Testimonials.tsx      ← Section 10
│   │   └── BottomCTA.tsx         ← Section 11
│   └── ui/
│       ├── Button.tsx            ← Centralized CTA button component
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── CodePreview.tsx       ← Syntax-highlighted code block
├── lib/
│   ├── sanity.ts                 ← Sanity client + GROQ queries
│   └── analytics.ts             ← GTM event helpers
├── public/
│   ├── logos/                    ← Payment method SVGs
│   ├── badges/                   ← Compliance badge SVGs
│   └── icons/
├── styles/
│   ├── globals.css               ← CSS tokens + resets
│   └── *.module.css              ← Per-component scoped styles
├── sanity/
│   ├── schema/                   ← Content type definitions
│   │   ├── homepage.ts
│   │   ├── product.ts
│   │   ├── testimonial.ts
│   │   └── industry.ts
│   └── sanity.config.ts
└── next.config.js
```

---

## 5. Homepage — 12 Sections Detailed Spec

### Section 1 — Navigation
**Behavior:** Sticky, white bg, box-shadow on scroll  
**Left:** PayCaps logo (SVG)  
**Center links:** Products · Solutions · Integrations · Pricing · About  
**Right:** `Login` (text link, navy) + `Get Started` (green button)  
**EN/AR toggle:** Switches between `/en` and `/ar` routes (hreflang)  
**Mobile:** Hamburger only — full-screen slide-in overlay, no mega-menus  
**GTM:** Button ID `cta-nav-get-started` triggers conversion event

---

### Section 2 — Hero
**Background:** Navy `#1A3C6E`, full-bleed  
**H1:** "UAE's Most Trusted Payment Gateway — CBUAE Regulated"  
**Subtext:** PCI DSS Level 1 · NESA Certified · 80+ Payment Methods · 92+ Currencies  
**Right side:** Product UI mockup (dashboard/checkout screen — generated image)  
**Animated ticker strip:** Visa · Mastercard · UnionPay · Apple Pay · Google Pay · Samsung Pay logos (CSS marquee)  
**Trust line:** No setup fee · CBUAE Licensed · 2-day onboarding  
**CTAs:**  
- `[ Start Accepting Payments ]` → `/sign-up?utm_source=hero&utm_medium=cta`  
- `[ Talk to Sales ]` → `/contact?utm_source=hero&utm_medium=cta`  

**GTM:** `cta-hero-start-payments` + `cta-hero-talk-sales`

---

### Section 3 — Stats Bar
**Background:** White  
**Layout:** 4-column full-width strip  
**Metrics:**

| Metric | Label |
|---|---|
| 80+ | Payment Methods |
| 92+ | Currencies |
| 10+ | Integrations |
| 24/7 | Support |

**Style:** Large bold navy numerals + small orange/green label below  
**Animation:** Count-up on scroll enter (Intersection Observer)  
**CTA:** `[ See all features → ]` anchor link to `#features`

---

### Section 4 — Products Grid
**Background:** `#F4F7FB`  
**Layout:** 3-column responsive grid (wraps to 2 → 1 on mobile)  
**Cards (white, 12px radius, subtle shadow):**

| Product | CTA |
|---|---|
| Payment Gateway | Get Started with Payment Gateway |
| Pay by Link | Get Started with Pay by Link |
| Invoice Payments | Get Started with Invoice Payments |
| Hosted Payment Page | Get Started with Hosted Page |
| Merchant Mobile App | Get Started with Mobile App |
| Recurring Payments | Get Started with Recurring Payments |
| White Label | Learn more → |
| API Integration | View API docs → |

**Card anatomy:** Green icon (SVG) · Navy H3 · 2-line muted description · Individual CTA button  
**Section footer:** "Not sure which product fits you? Talk to our team →" → `/contact`

---

### Section 5 — Payment Methods Strip
**Background:** White  
**H2:** "Accept 80+ Payment Methods Worldwide"  
**Logo grid:** Visa · Mastercard · UnionPay · Amex · Apple Pay · Google Pay · Samsung Pay (+ 73 more)  
**Sub-label:** 92+ currencies · Real-time FX conversion · Settle in AED  
**CTA:** `[ View all payment methods ]` → `/payment-methods`

---

### Section 6 — Why PayCaps
**Background:** `#F4F7FB`  
**H2:** "Why 500+ UAE Merchants Choose PayCaps"  
**Layout:** 3-column white card grid  
**9 cards:**

| Icon | Title | Body |
|---|---|---|
| ⚡ | Fast Onboarding | Go live in 2 days — fastest in UAE |
| 💰 | Quick Settlements | T+1 settlement to your UAE bank account |
| 📊 | Best Rates in UAE | Competitive MDR for every business size |
| 🔒 | PCI DSS Level 1 | Highest security certification in payments |
| 🏛️ | CBUAE Regulated | Fully licensed by Central Bank of UAE |
| 🔗 | 10+ Integrations | API, plugins, SDK — connect anything |
| 📱 | Merchant Mobile App | Manage payments on the go |
| 📈 | Smart Dashboard | Real-time analytics and reporting |
| 🎧 | 24/7 Support | Dedicated team, always available |

**CTAs:**  
- `[ Start your free onboarding ]` → `/sign-up`  
- `[ Compare plans → ]` → `/pricing`

---

### Section 7 — Integrations
**Background:** White  
**H2:** "Connect PayCaps to Your Platform in Days"  
**Layout:** Left (integration type cards) + Right (code snippet preview)  
**Integration chips:** API · Hosted Page · WooCommerce · Shopify · Magento · OpenCart · iOS SDK · Android SDK  
**Code block (navy bg, monospace font):**
```json
POST /api/v1/transactions/initiate
Authorization: Bearer {api_key}
{
  "amount": 150.00,
  "currency": "AED",
  "reference": "ORDER-1234",
  "redirect_url": "https://yourstore.com/success"
}
```
**Sub:** 10+ integrations · 2-day setup · Dedicated integration support  
**CTAs:**  
- `[ View developer docs ]` → external docs link  
- `[ Download plugin → ]` → `/integrations`

---

### Section 8 — Industries
**Background:** `#F4F7FB`  
**H2:** "Solutions Built for Your Industry"  
**Layout:** 4-column tabbed chip grid  
**8 Industries (each links to existing sub-page):**

| Industry | Sub-page |
|---|---|
| eCommerce | /solutions/ecommerce |
| Food & Restaurants | /solutions/restaurants |
| Education | /payment-gateway-for-schools |
| Healthcare | /solutions/healthcare |
| Retail / SME | /solutions/retail |
| Travel & Tourism | /solutions/travel |
| Real Estate | /solutions/real-estate |
| Logistics | /solutions/logistics |

**Chip → expand panel:** 2-sentence value prop + CTA on click  
**CTA:** `[ See [industry] solution → ]`

---

### Section 9 — Trust & Compliance
**Background:** `#1A2B45` (dark navy)  
**White text, institutional weight (inspired by checkout.com)**  
**H2:** "Payments You Can Trust — Compliance You Can Count On"  
**Badge row (large, white bordered):**

| Badge |
|---|
| CBUAE Regulated |
| PCI DSS Level 1 |
| NESA Certified |
| 3D Secure 2.0 |
| SHA-256 Encryption |
| AI Fraud Detection |
| DDoS Protection |

**1-paragraph trust statement**  
**CTAs:**  
- `[ Read our security overview ]` → `/security`  
- `[ Download compliance docs ]`

---

### Section 10 — Testimonials
**Background:** White  
**H2:** "Trusted by 500+ UAE Merchants"  
**3-4 merchant cards:** name, company, industry, 5-star green rating  
**Card style:** White · navy left-border accent · green star icons  
**Mobile:** Horizontal scroll carousel  
**Logo strip:** Recognisable merchant brand logos below quotes  
**CTA:** `[ Join 500+ UAE merchants ]` → `/sign-up`

---

### Section 11 — Bottom CTA Banner
**Background:** `#00B37A` (full-width green)  
**H2 (white):** "Ready to accept online payments in UAE?"  
**Sub (light):** Fast 2-day onboarding · Best rates · No setup fee  
**CTAs:**  
- `[ Create Free Account ]` → `/sign-up` (primary conversion event)  
- `[ Call +971 4-283-3886 ]` → `tel:+97142833886`

---

### Section 12 — Footer
**Background:** `#1A2B45`  
**4 columns:** Products · Company · Developers · Support  
**Bottom bar:** © PayCaps Technology · CBUAE Licence No. [X] · Privacy Policy · Terms · AR/EN  
**Green hover on links** · White text · Muted grey sub-text  
**CTAs:** `[ Subscribe to updates ]` (email input) · `[ WhatsApp us ]` (wa.me deeplink)

---

## 6. Additional Pages

| Page | Priority | Notes |
|---|---|---|
| `/features` | High | Tabbed feature details, comparison table |
| `/solutions` | High | Overview + industry cards |
| `/integrations` | High | Developer-focused, code examples |
| `/pricing` | High | Quote-based, comparison table |
| `/about` | Medium | Company story, team, CBUAE info |
| `/contact` | High | Form → Odoo CRM webhook |
| `/payment-methods` | Medium | Full list of 80+ methods |
| `/security` | Medium | Compliance detail page |
| `/sign-up` | High | Lead capture (UTM preserved) |

---

## 7. SEO & Google Ads Implementation

### On-Page SEO (Every Page)
```html
<!-- Unique H1 per page — exact-match keyword -->
<h1>Payment Gateway UAE — CBUAE Regulated | PayCaps</h1>

<!-- Title tag < 60 chars -->
<title>Payment Gateway UAE | PayCaps</title>

<!-- Meta description with CTA -->
<meta name="description" content="Accept 80+ payment methods in UAE. CBUAE regulated, PCI DSS Level 1. Get started free →" />

<!-- hreflang -->
<link rel="alternate" hreflang="en" href="https://paycaps.com/en/" />
<link rel="alternate" hreflang="ar" href="https://paycaps.com/ar/" />
```

### Schema Markup (JSON-LD)
- `Organization` — company info, CBUAE licence, contact
- `FAQPage` — on features + pricing pages
- `BreadcrumbList` — on all inner pages

### Target Keywords
| Keyword | Page |
|---|---|
| payment gateway UAE | Homepage |
| CBUAE regulated payment gateway | Homepage + /security |
| pay by link UAE | /features + /products/pay-by-link |
| PCI DSS payment UAE | /security |
| WooCommerce payment gateway UAE | /solutions/woocommerce |
| Shopify payment gateway Dubai | /solutions/shopify |
| accept Apple Pay UAE | /payment-methods |

### Google Ads Requirements
- All sign-up/contact CTAs: `?utm_source={{utm_source}}&utm_medium={{utm_medium}}&utm_campaign={{utm_campaign}}`
- GTM conversion event: `Create Free Account` button click
- Phone number: `<a href="tel:+97142833886">` — tracked as conversion
- No pop-ups on any page (kills Quality Score)
- Page load < 3s on mobile

---

## 8. Performance Targets

| Metric | Target | Method |
|---|---|---|
| Lighthouse (all) | ≥ 95 | Next.js SSG + Vercel Edge |
| LCP | < 2.5s | `next/image` priority on hero, preload fonts |
| CLS | < 0.1 | `font-display: swap` + fixed image dimensions |
| FID | < 100ms | No blocking JS, defer GTM |
| Page weight | < 500KB | CSS Modules, no Tailwind purge needed |
| Images | WebP/AVIF ≤ 200KB | `next/image` auto-converts |

---

## 9. Required Integrations Checklist

| Integration | Method |
|---|---|
| Google Analytics 4 | Via GTM |
| Google Tag Manager | `<Script>` in `layout.tsx` with `strategy="afterInteractive"` |
| Google Ads Conversion | GTM trigger on button ID `cta-signup-create-account` |
| Google Ads Remarketing | GTM tag on all pages |
| Odoo CRM | Contact form POST to Odoo webhook URL |
| WhatsApp Widget | `wa.me/+97142833886` deeplink button |
| Microsoft Clarity | Script tag via GTM |
| hreflang EN + AR | Next.js `i18n` config + `<link>` tags |

---

## 10. Sanity CMS — Content Types

| Schema | Fields editable by marketing |
|---|---|
| `homepage` | Hero headline, sub-heading, stats numbers |
| `product` | Title, description, icon, CTA link |
| `testimonial` | Quote, name, company, industry, rating |
| `industry` | Name, icon, value prop, sub-page link |
| `complianceBadge` | Name, icon, description |
| `faqItem` | Question, answer, page |

---

## 11. Open Questions

> [!IMPORTANT]
> **Please answer before I start building:**

1. **Arabic (RTL) support**: Is AR required for the assignment deliverable, or English-only for now?
2. **Sanity CMS**: Should I include the full Sanity Studio setup, or build with static JSON data for the assignment (faster to demo)?
3. **Real testimonials / logos**: Do you have actual merchant quotes + logos I can use, or should I create realistic placeholder content?
4. **CBUAE Licence Number**: Do you want me to use the real licence number in the footer, or leave a `[LICENCE-NO]` placeholder?
5. **Phone number**: Brief shows `+971 4-283-3886` — should I use this or the one on the current site (`+971 26267553`)?
6. **Deployment**: Do you want this deployed to Vercel for review, or just built locally and submitted as a ZIP/GitHub repo?
7. **Deadline**: When is the assignment due? I'll prioritize accordingly.

---

## 12. Phased Execution Plan

| Phase | Deliverables | Est. Time |
|---|---|---|
| **Phase 1** | Project setup (Next.js 14 + Sanity) + Design system (CSS tokens, fonts, Button component) | 2h |
| **Phase 2** | Navbar + Footer + Homepage Sections 2–5 (Hero, Stats, Products, Payment Methods) | 3h |
| **Phase 3** | Homepage Sections 6–11 (Why PayCaps, Integrations, Industries, Trust, Testimonials, CTA) | 3h |
| **Phase 4** | Inner pages: Features, Solutions, Integrations, Contact, Sign-up | 3h |
| **Phase 5** | SEO (meta, schema, hreflang, sitemap), GTM integration, performance audit | 2h |
| **Phase 6** | Mobile QA, accessibility (WCAG AA), final polish + Lighthouse ≥ 95 | 2h |
| **Total** | **Production-ready revamp** | **~15h** |

---

## Competitors Reference

| Competitor | What to Beat |
|---|---|
| **checkout.com** | Institutional weight in compliance section, clean product pages |
| **mamopay.com** | Clean white layout, strong mobile UX — match or exceed |
| **telr.com** | UAE-focus, compliance anchors — we do this better with CBUAE in hero |
| **network.ae** | Bilingual (EN/AR), institutional — aspirational benchmark |
