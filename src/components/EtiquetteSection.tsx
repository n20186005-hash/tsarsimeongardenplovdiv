import { useTranslations, useMessages } from 'next-intl';

export default function EtiquetteSection() {
  const t = useTranslations('etiquette');
  const messages = useMessages() as any;
  const items = (messages?.etiquette?.items || []) as string[];

  return (
    <section
      id="etiquette"
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
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 rounded-xl p-4 sm:p-5"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent)', color: 'white' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
