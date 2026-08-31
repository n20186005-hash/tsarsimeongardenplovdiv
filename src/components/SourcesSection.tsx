import { useTranslations, useMessages } from 'next-intl';
import { siteConfig } from '@/config';

export default function SourcesSection() {
  const t = useTranslations('sources');
  const messages = useMessages() as any;
  const items = (messages?.sources?.items || []) as Array<{
    name: string;
    url: string;
    note: string;
  }>;

  return (
    <section id="sources" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8 mx-auto" style={{ background: 'var(--accent)' }} />
        <p
          className="text-center text-sm mb-10 max-w-2xl mx-auto"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('subtitle')}
        </p>

        <div className="space-y-3">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-xl p-4 sm:p-5 transition-colors hover:shadow-md"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  {item.name}
                </p>
                {item.note && (
                  <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {item.note}
                  </p>
                )}
              </div>
              <span className="flex-shrink-0" style={{ color: 'var(--accent)' }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        <p
          className="mt-8 text-sm text-center leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('note')}
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href={siteConfig.govtTourismUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            {t('portalLink')}
          </a>
        </div>
      </div>
    </section>
  );
}
