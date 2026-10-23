import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config';
import { TOPICS } from '@/data/topics';

const HREFLANG: Record<string, string> = { bg: 'bg', en: 'en', zh: 'zh-CN' };

export default function sitemap(): MetadataRoute.Sitemap {
  const { baseUrl } = siteConfig;

  const entries: MetadataRoute.Sitemap = [];

  const pages = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-settings',
  ];

  for (const locale of routing.locales) {
    for (const page of pages) {
      const languages: Record<string, string> = {};
      for (const l of routing.locales) {
        languages[l] = `${baseUrl}/${l}${page}`;
      }
      languages['x-default'] = `${baseUrl}/bg${page}`;

      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date('2026-08-31'),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.5,
        alternates: {
          languages,
        },
      });
    }
  }

  // 专题页（仅收录已发布内容的语种组合）
  for (const t of TOPICS) {
    const langs = (['bg', 'en', 'zh'] as const).filter((l) => t[l]);
    if (langs.length === 0) continue;
    const languages: Record<string, string> = {};
    for (const l of langs) {
      languages[HREFLANG[l]] = `${baseUrl}/${l}/${t.slug}`;
    }
    languages['x-default'] = `${baseUrl}/${langs[0]}/${t.slug}`;
    entries.push({
      url: `${baseUrl}/${langs[0]}/${t.slug}`,
      lastModified: new Date('2026-10-23'),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: { languages },
    });
  }

  return entries;
}
