import { useTranslations, useMessages } from 'next-intl';

type LegendItem = { id: string; kind: string; title: string; text: string };

const kindStyles: Record<string, { bg: string; label: string }> = {
  fact: { bg: '#2d5a3d', label: 'fact' },
  tradition: { bg: '#3a7a8d', label: 'tradition' },
  story: { bg: '#c76b2a', label: 'story' },
};

export default function LegendsSection() {
  const t = useTranslations('legends');
  const messages = useMessages() as any;
  const items = (messages?.legends?.items || []) as LegendItem[];

  return (
    <section id="legends" className="section-padding">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => {
            const style = kindStyles[item.kind] || kindStyles.fact;
            return (
              <div
                key={item.id}
                className="rounded-xl p-6 flex flex-col gap-3"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ background: style.bg }}
                  >
                    {t(`kinds.${style.label}`)}
                  </span>
                  <h3
                    className="font-display text-lg font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
