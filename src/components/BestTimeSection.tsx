import { useTranslations, useMessages } from 'next-intl';

type SeasonItem = { id: string; title: string; text: string };

const seasonIcons: Record<string, React.ReactNode> = {
  spring: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="3" />
      <path d="M12 7V3" />
      <path d="M8.5 8L6 5.5" />
      <path d="M15.5 8L18 5.5" />
      <path d="M9 13l-2 3" />
      <path d="M15 13l2 3" />
      <path d="M12 20v-3" />
    </svg>
  ),
  summer: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
  autumn: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20V11" />
      <path d="M12 11c0-3 2-5 5-5 0 3-2 5-5 5z" />
      <path d="M12 11c0-3-2-5-5-5 0 3 2 5 5 5z" />
      <path d="M12 15c0-2 1.5-3.5 3.5-3.5 0 2-1.5 3.5-3.5 3.5z" />
      <path d="M12 15c0-2-1.5-3.5-3.5-3.5 0 2 1.5 3.5 3.5 3.5z" />
    </svg>
  ),
  winter: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 12h18" />
      <path d="M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

export default function BestTimeSection() {
  const t = useTranslations('bestTime');
  const messages = useMessages() as any;
  const seasons = (messages?.bestTime?.seasons || []) as SeasonItem[];

  return (
    <section
      id="bestTime"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-5xl mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {seasons.map((season) => (
            <div
              key={season.id}
              className="rounded-xl p-6 flex gap-4"
              style={{
                background: 'var(--bg-tertiary)',
                border:
                  season.id === 'summer'
                    ? `2px solid var(--accent)`
                    : '1px solid var(--border-color)',
              }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent)', color: 'white' }}
              >
                {seasonIcons[season.id] || null}
              </div>
              <div>
                <h3
                  className="font-display font-semibold mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {season.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {season.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-8 text-xs leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('note')}
        </p>
      </div>
    </section>
  );
}
