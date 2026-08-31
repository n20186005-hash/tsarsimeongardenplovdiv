import { useTranslations, useMessages } from 'next-intl';

type FacilityItem = { id: string; title: string; desc: string };

const icons: Record<string, React.ReactNode> = {
  toilets: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 2h10v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V2z" />
      <circle cx="12" cy="13.5" r="1.8" />
      <path d="M8 21v-2a4 4 0 0 1 8 0v2" />
    </svg>
  ),
  parking: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  ),
  dining: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3v7a3 3 0 0 0 3 3v8" />
      <path d="M7 3v18" />
      <path d="M17 3c-1.5 2-2.5 5.5-2.5 8.5S15.5 19 17 20" />
      <path d="M17 3v18" />
    </svg>
  ),
  accommodation: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-8 9 8" />
      <path d="M5 9v11h14V9" />
      <path d="M9 20v-6h6v6" />
    </svg>
  ),
  shopping: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 7h12l1 14H5L6 7z" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  fuelEv: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  ),
  wifiAtm: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="14" rx="2" />
      <path d="M7 17v4h10v-4" />
      <path d="M8 8h8v3H8z" />
      <path d="M12 8v3" />
    </svg>
  ),
  family: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a6 6 0 0 1 12 0v2" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M16 21v-1.5a4.5 4.5 0 0 1 3-4.2" />
    </svg>
  ),
};

export default function FacilitiesSection() {
  const t = useTranslations('facilities');
  const messages = useMessages() as any;
  const items = (messages?.facilities?.items || []) as FacilityItem[];

  return (
    <section id="facilities" className="section-padding">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl p-5 flex gap-4"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent)', color: 'white' }}
              >
                {icons[item.id] || null}
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-8 text-xs text-center leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('note')}
        </p>
      </div>
    </section>
  );
}
