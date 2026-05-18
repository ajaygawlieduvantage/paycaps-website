import React from 'react';

import {
  complianceBadges as fallbackComplianceBadges,
  industries as fallbackIndustries,
  products as fallbackProducts,
  stats as fallbackStats,
  testimonials as fallbackTestimonials,
} from '@/lib/data';

export type HomeStat = { value: number; suffix: string; label: string };

export type HomeProduct = {
  id: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  href: string;
};

export type HomeTestimonial = {
  id: number | string;
  quote: string;
  name: string;
  role?: string;
  company: string;
  industry?: string;
  rating: number;
};

export type HomeIndustry = {
  id: string;
  icon?: React.ReactNode;
  label: string;
  href: string;
  value: string;
};

export type HomeComplianceBadge = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
};

export type HomeHeroCMS = {
  topBadgeLine: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubtext: string;
  trustPills: string[];
  trustLineBadges: string[];
};

export const HOMEPAGE_HERO_FALLBACK: HomeHeroCMS = {
  topBadgeLine: '🏛️ CBUAE Regulated · PCI DSS Level 1',
  heroTitleLine1: "UAE's Most Trusted",
  heroTitleLine2: 'Payment Gateway',
  heroSubtext:
    "Accept 80+ payment methods in 92+ currencies. Go live in 2 days with the only CBUAE-regulated, NESA-certified gateway built for UAE businesses.",
  trustPills: ['PCI DSS Level 1', 'NESA Certified', '80+ Payment Methods', '92+ Currencies'],
  trustLineBadges: ['No setup fee', 'CBUAE Licensed', '2-day onboarding', 'PCI DSS Level 1'],
};

export type MergedHomeContent = {
  hero: HomeHeroCMS;
  stats: HomeStat[];
  products: HomeProduct[];
  testimonials: HomeTestimonial[];
  industries: HomeIndustry[];
  complianceBadges: HomeComplianceBadge[];
  trustStatement: string;
};

const DEFAULT_TRUST_STATEMENT =
  'PayCaps is licensed and regulated by the Central Bank of the UAE (CBUAE), certified to PCI DSS Level 1 — the highest standard in payment security — and compliant with UAE NESA information security requirements. Every transaction is protected by SHA-256 encryption, AI-powered fraud detection and enterprise-grade DDoS protection, ensuring 99.9% uptime for your business.';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

/**
 * Robust helper to extract a field from a Strapi object (handles both v4 attributes wrapper and v5 flattened schema)
 */
function getField<T = string>(obj: unknown, key: string): T | undefined {
  if (!obj || typeof obj !== 'object') return undefined;

  const record = obj as Record<string, unknown>;

  // 1. Direct field match (e.g. Strapi v5 style or custom formats)
  if (record[key] !== undefined) return record[key] as T;

  // 2. Direct lowercase field match
  const lowerKey = key.toLowerCase();
  if (record[lowerKey] !== undefined) return record[lowerKey] as T;

  // 3. Attributes field match (e.g. Strapi v4 style)
  if (record.attributes && typeof record.attributes === 'object') {
    const attrs = record.attributes as Record<string, unknown>;
    if (attrs[key] !== undefined) return attrs[key] as T;
    if (attrs[lowerKey] !== undefined) return attrs[lowerKey] as T;
  }

  return undefined;
}

/**
 * Helper to extract media URL from a Strapi file/image object (handles both direct, v4 nested, and direct-child schemes)
 */
function getMediaUrl(obj: unknown, key: string): string | undefined {
  const media = getField<unknown>(obj, key);
  if (!media || typeof media !== 'object') return undefined;

  const record = media as Record<string, unknown>;

  // 1. Direct URL (e.g. { url: "/uploads/..." })
  if (record.url && typeof record.url === 'string') {
    return record.url;
  }

  // 2. Nested attributes URL (e.g. { attributes: { url: "/uploads/..." } })
  if (record.attributes && typeof record.attributes === 'object') {
    const attrs = record.attributes as Record<string, unknown>;
    if (attrs.url && typeof attrs.url === 'string') {
      return attrs.url;
    }
  }

  // 3. Nested data wrapper (e.g. { data: { attributes: { url: "/uploads/..." } } })
  if (record.data && typeof record.data === 'object') {
    const data = record.data as Record<string, unknown>;
    if (data.attributes && typeof data.attributes === 'object') {
      const attrs = data.attributes as Record<string, unknown>;
      if (attrs.url && typeof attrs.url === 'string') {
        return attrs.url;
      }
    }
    if (data.url && typeof data.url === 'string') {
      return data.url;
    }
  }

  return undefined;
}

/**
 * Fetch Hero CMS Content
 */
export async function getHero(): Promise<HomeHeroCMS> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/homepage?populate=*`, {
      next: { revalidate: 60 }
    });
    // console.log(res)
    if (!res.ok) return HOMEPAGE_HERO_FALLBACK;

    const json = await res.json() as { data?: unknown };
    const rawHero = json.data;
    if (!rawHero) return HOMEPAGE_HERO_FALLBACK;

    return {
      topBadgeLine: getField<string>(rawHero, 'topBadgeLine') || HOMEPAGE_HERO_FALLBACK.topBadgeLine,
      heroTitleLine1: getField<string>(rawHero, 'heroTitleLine1') || HOMEPAGE_HERO_FALLBACK.heroTitleLine1,
      heroTitleLine2: getField<string>(rawHero, 'heroTitleLine2') || HOMEPAGE_HERO_FALLBACK.heroTitleLine2,
      heroSubtext: getField<string>(rawHero, 'heroSubtext') || HOMEPAGE_HERO_FALLBACK.heroSubtext,
      trustPills: getField<string[]>(rawHero, 'trustPills') || HOMEPAGE_HERO_FALLBACK.trustPills,
      trustLineBadges: getField<string[]>(rawHero, 'trustLineBadges') || HOMEPAGE_HERO_FALLBACK.trustLineBadges,
    };
  } catch {
    return HOMEPAGE_HERO_FALLBACK;
  }
}

/**
 * Fetch Products from Strapi with local static data fallback
 */
export async function getProducts(): Promise<HomeProduct[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/products?populate=*`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) {
      // Try singular fallback first
      const singularRes = await fetch(`${STRAPI_URL}/api/product?populate=*`, {
        next: { revalidate: 60 }
      });
      if (!singularRes.ok) return fallbackProducts;
      const singularJson = await singularRes.json() as { data?: unknown };
      if (!singularJson.data) return fallbackProducts;

      const singularData = Array.isArray(singularJson.data) ? singularJson.data : [singularJson.data];
      return mapRawProducts(singularData);
    }

    const json = await res.json() as { data?: unknown[] };
    if (!json.data || !Array.isArray(json.data) || json.data.length === 0) return fallbackProducts;

    return mapRawProducts(json.data);
  } catch {
    return fallbackProducts;
  }
}

function mapRawProducts(rawData: unknown[]): HomeProduct[] {
  const baseProducts: HomeProduct[] = fallbackProducts.map(p => ({ ...p }));
  const mapped = rawData.map(item => {
    const typedItem = item as { id?: string | number };
    const id = getField<string>(item, 'Slug') || getField<string>(item, 'slug') || String(typedItem.id || '');
    const title = getField<string>(item, 'Title') || getField<string>(item, 'title') || '';
    const description = getField<string>(item, 'Description') || getField<string>(item, 'description') || '';

    const staticMatch = baseProducts.find(p => p.id === id);

    // Resolve icon to string or React Image node
    let icon: React.ReactNode = staticMatch?.icon || '💳';
    const mediaUrl = getMediaUrl(item, 'icon');
    if (mediaUrl) {
      const fullUrl = mediaUrl.startsWith('http') ? mediaUrl : `${STRAPI_URL}${mediaUrl}`;
      icon = React.createElement('img', {
        src: fullUrl,
        alt: title,
        style: { width: '40px', height: '40px', objectFit: 'contain' },
      });
    } else {
      const textIcon = getField<string>(item, 'icon');
      if (textIcon && typeof textIcon === 'string') {
        icon = textIcon;
      }
    }

    return {
      id,
      title,
      description: description || staticMatch?.description || '',
      icon,
      cta: getField<string>(item, 'cta') || staticMatch?.cta || 'Get Started',
      href: getField<string>(item, 'href') || staticMatch?.href || `/sign-up?product=${id}`,
    };
  }).filter(p => p.id && p.title);

  if (mapped.length > 0) {
    const cmsIds = new Set(mapped.map(p => p.id));
    const staticExtras = baseProducts.filter(p => !cmsIds.has(p.id));
    return [...mapped, ...staticExtras];
  }

  return fallbackProducts;
}

/**
 * Fetch Stats from Strapi with local static data fallback
 */
export async function getStats(): Promise<HomeStat[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/stats?populate=*`, {
      next: { revalidate: 60 }
    });
    // console.log('stats', res)
    if (!res.ok) return fallbackStats;

    const json = await res.json() as { data?: unknown[] };
    if (!json.data || !Array.isArray(json.data) || json.data.length === 0) return fallbackStats;

    const mapped = json.data.map(item => ({
      value: Number(getField(item, 'value')) || 0,
      suffix: getField<string>(item, 'suffix') || '',
      label: getField<string>(item, 'label') || '',
    })).filter(s => s.label);

    return mapped.length > 0 ? mapped : fallbackStats;
  } catch {
    return fallbackStats;
  }
}

/**
 * Fetch Testimonials from Strapi with local static data fallback
 */
export async function getTestimonials(): Promise<HomeTestimonial[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/testimonials?populate=*`, {
      next: { revalidate: 60 }
    });
    // console.log(res)
    if (!res.ok) return fallbackTestimonials;

    const json = await res.json() as { data?: unknown[] };
    if (!json.data || !Array.isArray(json.data) || json.data.length === 0) return fallbackTestimonials;

    const mapped = json.data.map(item => {
      const typedItem = item as { id?: string | number };
      return {
        id: typedItem.id || getField<string | number>(item, 'id') || Math.random(),
        quote: getField<string>(item, 'quote') || '',
        name: getField<string>(item, 'name') || getField<string>(item, 'authorName') || '',
        role: getField<string>(item, 'role') || '',
        company: getField<string>(item, 'company') || '',
        industry: getField<string>(item, 'industry') || '',
        rating: Number(getField(item, 'rating')) || 5,
      };
    }).filter(t => t.quote && t.name);

    return mapped.length > 0 ? mapped : fallbackTestimonials;
  } catch {
    return fallbackTestimonials;
  }
}

/**
 * Fetch Industries from Strapi with local static data fallback
 */
export async function getIndustries(): Promise<HomeIndustry[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/industries?populate=*`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return fallbackIndustries;

    const json = await res.json() as { data?: unknown[] };
    if (!json.data || !Array.isArray(json.data) || json.data.length === 0) return fallbackIndustries;

    const mapped = json.data.map(item => {
      const typedItem = item as { id?: string | number };

      let icon: React.ReactNode = '🛒';
      const mediaUrl = getMediaUrl(item, 'icon');
      if (mediaUrl) {
        const fullUrl = mediaUrl.startsWith('http') ? mediaUrl : `${STRAPI_URL}${mediaUrl}`;
        icon = React.createElement('img', {
          src: fullUrl,
          alt: getField<string>(item, 'label') || '',
          style: { width: '40px', height: '40px', objectFit: 'contain' },
        });
      } else {
        const textIcon = getField<string>(item, 'icon');
        if (textIcon && typeof textIcon === 'string') {
          icon = textIcon;
        }
      }

      return {
        id: getField<string>(item, 'Slug') || getField<string>(item, 'slug') || String(typedItem.id || ''),
        icon,
        label: getField<string>(item, 'label') || '',
        href: getField<string>(item, 'href') || '',
        value: getField<string>(item, 'value') || getField<string>(item, 'valueProp') || '',
      };
    }).filter(i => i.id && i.label);

    return mapped.length > 0 ? mapped : fallbackIndustries;
  } catch {
    return fallbackIndustries;
  }
}

/**
 * Fetch Compliance Badges from Strapi with local static data fallback
 */
export async function getComplianceBadges(): Promise<HomeComplianceBadge[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/compliance-badges?populate=*`, {
      next: { revalidate: 60 }
    });
    // console.log('compliance', res)
    if (!res.ok) return fallbackComplianceBadges;

    const json = await res.json() as { data?: unknown[] };
    if (!json.data || !Array.isArray(json.data) || json.data.length === 0) return fallbackComplianceBadges;

    const mapped = json.data.map(item => {
      let icon: React.ReactNode = '🏛️';
      const mediaUrl = getMediaUrl(item, 'icon');
      if (mediaUrl) {
        const fullUrl = mediaUrl.startsWith('http') ? mediaUrl : `${STRAPI_URL}${mediaUrl}`;
        icon = React.createElement('img', {
          src: fullUrl,
          alt: getField<string>(item, 'title') || '',
          style: { width: '40px', height: '40px', objectFit: 'contain' },
        });
      } else {
        const textIcon = getField<string>(item, 'icon');
        if (textIcon && typeof textIcon === 'string') {
          icon = textIcon;
        }
      }

      return {
        icon,
        title: getField<string>(item, 'title') || '',
        description: getField<string>(item, 'description') || '',
      };
    }).filter(b => b.title);

    return mapped.length > 0 ? mapped : fallbackComplianceBadges;
  } catch {
    return fallbackComplianceBadges;
  }
}

/**
 * Fetch Trust Statement from Strapi with local static data fallback
 */
export async function getTrustStatement(): Promise<string> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/homepage?populate=*`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return DEFAULT_TRUST_STATEMENT;

    const json = await res.json() as { data?: unknown };
    const rawHero = json.data;
    if (!rawHero) return DEFAULT_TRUST_STATEMENT;

    return getField<string>(rawHero, 'trustStatement') || DEFAULT_TRUST_STATEMENT;
  } catch {
    return DEFAULT_TRUST_STATEMENT;
  }
}

/**
 * Merged utility for backwards compatibility (optional)
 */
export async function getMergedHomeContent(): Promise<MergedHomeContent> {
  const [hero, stats, products, testimonials, industries, complianceBadges, trustStatement] = await Promise.all([
    getHero(),
    getStats(),
    getProducts(),
    getTestimonials(),
    getIndustries(),
    getComplianceBadges(),
    getTrustStatement(),
  ]);

  return {
    hero,
    stats,
    products,
    testimonials,
    industries,
    complianceBadges,
    trustStatement,
  };
}
