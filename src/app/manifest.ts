import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tsar Simeon Garden Park – Plovdiv, Bulgaria',
    short_name: 'Tsar Simeon Garden',
    description:
      'Visitor guide to "Tsar Simeon Garden" Park in Plovdiv, Plovdiv Province, Bulgaria.',
    start_url: '/bg',
    scope: '/',
    display: 'standalone',
    background_color: '#faf8f4',
    theme_color: '#3a7a8d',
    lang: 'bg',
    categories: ['travel', 'tourism'],
    icons: [
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
}
