import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config';
import type { Metadata, Viewport } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const htmlLang: Record<string, string> = {
  zh: 'zh-CN',
  en: 'en',
  bg: 'bg-BG',
};

const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  bg: 'bg_BG',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const { baseUrl, attractionName, city, country, ogImage } = siteConfig;

  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;
  const bgUrl = `${baseUrl}/bg`;
  const selfUrl = `${baseUrl}/${locale}`;
  const ogImageUrl = `${baseUrl}${ogImage}`;

  return {
    metadataBase: new URL(baseUrl),
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        zh: zhUrl,
        en: enUrl,
        bg: bgUrl,
        'x-default': bgUrl,
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: attractionName,
      locale: ogLocale[locale] || 'en_US',
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${attractionName} - ${city}, ${country}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [ogImageUrl],
    },
    icons: {
      icon: '/icons/icon.svg',
      apple: '/icons/icon.svg',
    },
    manifest: '/manifest.webmanifest',
    keywords: [
      attractionName,
      city,
      country,
      `${attractionName} ${city}`,
      `${city} park`,
      `${city} garden`,
      'Цар Симеонова градина',
      'Plovdiv park',
    ],
  };
}

export const viewport: Viewport = {
  themeColor: '#3a7a8d',
  width: 'device-width',
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const {
    baseUrl,
    attractionFullName,
    attractionName,
    attractionLocalName,
    attractionShortName,
    city,
    stateProvince,
    country,
    countryCode,
    postalCode,
    streetAddress,
    latitude,
    longitude,
    mapsShareUrl,
    govtTourismUrl,
    rating,
    reviewCount,
    ogImage,
  } = siteConfig;

  const faqItems = (messages as any)?.faq?.items || [];

  // ---- Schema.org / JSON-LD 结构化数据 ----
  const touristAttraction = {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Park'],
    '@id': `${baseUrl}/#attraction`,
    name: attractionFullName,
    alternateName: [
      attractionShortName,
      attractionName,
      attractionLocalName,
      `${city} ${attractionFullName}`,
    ],
    description: messages.meta.description,
    url: baseUrl,
    image: [`${baseUrl}${ogImage}`],
    isAccessibleForFree: true,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: Number(reviewCount.replace(/,/g, '')),
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress,
      addressLocality: city,
      addressRegion: stateProvince,
      postalCode,
      addressCountry: countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    hasMap: mapsShareUrl,
    sameAs: [mapsShareUrl, govtTourismUrl],
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: `${attractionName} Visitor Guide`,
    url: baseUrl,
    logo: `${baseUrl}/icons/icon.svg`,
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/${locale}#webpage`,
    url: `${baseUrl}/${locale}`,
    name: messages.meta.title,
    description: messages.meta.description,
    inLanguage: htmlLang[locale] || 'en',
    datePublished: '2026-08-31',
    dateModified: '2026-08-31',
    isPartOf: { '@id': `${baseUrl}/#organization` },
    about: { '@id': `${baseUrl}/#attraction` },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item: any) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <html lang={htmlLang[locale] || 'en'} suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HXM22WWPKP" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-HXM22WWPKP');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttraction) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        {/* PWA Service Worker 注册 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in navigator) { window.addEventListener('load', function() { navigator.serviceWorker.register('/sw.js').catch(function(err) { console.warn('SW registration failed:', err); }); }); }`,
          }}
        />
      </body>
    </html>
  );
}
