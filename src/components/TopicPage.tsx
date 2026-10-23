import { siteConfig } from '@/config';
import { relatedTopics, type TopicContent, type TopicGroup } from '@/data/topics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HOME_LABEL: Record<string, string> = {
  bg: 'Начало',
  en: 'Home',
  zh: '首页',
};

const GROUP_TITLE: Record<TopicGroup, Record<string, string>> = {
  park: { bg: 'Полезно за парка', en: 'Park essentials', zh: '公园实用' },
  food: { bg: 'Храна и кафе', en: 'Food & coffee', zh: '餐饮咖啡' },
  nearby: { bg: 'Забележителности наблизо', en: 'Nearby sights', zh: '周边景点' },
  routes: { bg: 'Маршрути', en: 'Itineraries', zh: '行程路线' },
  history: { bg: 'История и култура', en: 'History & culture', zh: '历史文化' },
};

type Props = {
  locale: string;
  slug: string;
  content: TopicContent;
};

export default function TopicPage({ locale, slug, content }: Props) {
  const base = siteConfig.baseUrl;
  const url = `${base}/${locale}/${slug}`;
  const homeUrl = `${base}/${locale}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: content.title,
        description: content.description,
        inLanguage: locale === 'bg' ? 'bg-BG' : locale === 'zh' ? 'zh-CN' : 'en',
        about: { '@id': `${base}/#attraction` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: HOME_LABEL[locale] ?? 'Home',
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: content.title,
            item: url,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: content.faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };

  const related = relatedTopics(slug, locale);

  return (
    <>
      <Header />
      <main>
        <article>
          <header>
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
            {content.updated && (
              <p>
                <small>
                  {locale === 'bg'
                    ? `Последна проверка: ${content.updated}`
                    : locale === 'zh'
                      ? `最近核实：${content.updated}`
                      : `Last verified: ${content.updated}`}
                </small>
              </p>
            )}
          </header>

          {content.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}

          {content.faq.length > 0 && (
            <section>
              <h2>
                {locale === 'bg'
                  ? 'Често задавани въпроси'
                  : locale === 'zh'
                    ? '常见问题'
                    : 'Frequently asked questions'}
              </h2>
              {content.faq.map((f) => (
                <details key={f.question}>
                  <summary>{f.question}</summary>
                  <p>{f.answer}</p>
                </details>
              ))}
            </section>
          )}

          {related.length > 0 && (
            <section>
              <h2>{GROUP_TITLE[related[0].group]?.[locale] ?? ''}</h2>
              <ul>
                {related.map((t) => (
                  <li key={t.slug}>
                    <a href={`/${locale}/${t.slug}`}>
                      {t[locale as 'bg' | 'en' | 'zh']?.title ?? t.slug}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
