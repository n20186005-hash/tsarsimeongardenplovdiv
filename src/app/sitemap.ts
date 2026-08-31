import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config';

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

  return entries;
}
