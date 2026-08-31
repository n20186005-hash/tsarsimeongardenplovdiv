import { useTranslations, useMessages } from 'next-intl';

type HistoryItem = { year: string; title: string; text: string };

export default function HistorySection() {
  const t = useTranslations('history');
  const messages = useMessages() as any;
  const items = (messages?.history?.items || []) as HistoryItem[];

  return (
    <section
      id="history"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <p className="mb-10 max-w-2xl text-sm" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>

        <div
          className="relative pl-10 sm:pl-12 space-y-10 border-l-2"
          style={{ borderColor: 'var(--accent)' }}
        >
          {items.map((item) => (
            <div key={item.year} className="relative">
              <div
                className="absolute -left-[47px] sm:-left-[55px] top-1.5 w-5 h-5 rounded-full border-4"
                style={{ background: 'var(--bg-secondary)', borderColor: 'var(--accent)' }}
              />
              <p
                className="font-display text-xl font-bold mb-1"
                style={{ color: 'var(--accent)' }}
              >
                {item.year}
              </p>
              <h3
                className="font-display text-xl font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.title}
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
