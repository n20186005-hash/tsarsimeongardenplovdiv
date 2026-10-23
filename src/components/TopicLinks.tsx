import { TOPICS, type TopicGroup } from '@/data/topics';

const GROUP_ORDER: TopicGroup[] = ['park', 'food', 'nearby', 'routes', 'history'];

const GROUP_HEADING: Record<TopicGroup, Record<string, string>> = {
  park: { bg: 'Полезно за парка', en: 'Park essentials', zh: '公园实用' },
  food: { bg: 'Храна и кафе наблизо', en: 'Food & coffee nearby', zh: '周边餐饮咖啡' },
  nearby: { bg: 'Забележителности наблизо', en: 'Nearby sights', zh: '周边景点' },
  routes: { bg: 'Маршрути в центъра', en: 'Centre itineraries', zh: '市中心行程' },
  history: { bg: 'История и култура', en: 'History & culture', zh: '历史与文化' },
};

export default function TopicLinks({ locale }: { locale: string }) {
  const groups = GROUP_ORDER.map((group) => ({
    group,
    items: TOPICS.filter((t) => t.group === group && t[locale as 'bg' | 'en' | 'zh']),
  })).filter((g) => g.items.length > 0);

  if (groups.length === 0) return null;

  return (
    <section aria-labelledby="topic-links-heading">
      <h2 id="topic-links-heading">
        {locale === 'bg'
          ? 'Повече за парка и центъра на Пловдив'
          : locale === 'zh'
            ? '更多关于公园与普罗夫迪夫中心'
            : 'More about the park & central Plovdiv'}
      </h2>
      {groups.map((g) => (
        <div key={g.group}>
          <h3>{GROUP_HEADING[g.group][locale] ?? g.group}</h3>
          <ul>
            {g.items.map((t) => (
              <li key={t.slug}>
                <a href={`/${locale}/${t.slug}`}>
                  {t[locale as 'bg' | 'en' | 'zh']?.title ?? t.slug}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
