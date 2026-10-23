import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config';
import { getTopic, topicSlugsForLocale, topicLocales } from '@/data/topics';
import TopicPage from '@/components/TopicPage';

export const dynamicParams = false;

const HREFLANG: Record<string, string> = { bg: 'bg', en: 'en', zh: 'zh-CN' };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    topicSlugsForLocale(locale).map((slug) => ({
      locale,
      slug: slug.split('/'),
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const full = slug.join('/');
  const content = getTopic(full, locale);
  if (!content) return {};

  const base = siteConfig.baseUrl;
  const canonical = `${base}/${locale}/${full}`;

  const languages: Record<string, string> = {};
  const altLocales = topicLocales(full);
  for (const l of altLocales) {
    languages[HREFLANG[l]] = `${base}/${l}/${full}`;
  }
  if (altLocales.length > 0) {
    languages['x-default'] = `${base}/${altLocales[0]}/${full}`;
  }

  return {
    title: content.title,
    description: content.description,
    alternates: { canonical, languages },
  };
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}) {
  const { locale, slug } = await params;
  const full = slug.join('/');
  const content = getTopic(full, locale);
  if (!content) notFound();
  setRequestLocale(locale);
  return <TopicPage locale={locale} slug={full} content={content} />;
}
