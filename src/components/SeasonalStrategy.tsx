'use client';

import { useTranslations, useMessages } from 'next-intl';

type SeasonRow = {
  season: string;
  climate: string;
  bestTime: string;
  bring: string;
  notes: string;
};

export default function SeasonalStrategy() {
  const t = useTranslations('seasonal');
  const messages = useMessages() as any;
  const rows = (messages?.seasonal?.rows || []) as SeasonRow[];
  const cols = (messages?.seasonal?.cols || {}) as Record<string, string>;

  return (
    <section id="seasonal" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border-color)' }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr style={{ background: 'var(--bg-tertiary)' }}>
                {[cols.season, cols.climate, cols.bestTime, cols.bring, cols.notes].map((c, i) => (
                  <th
                    key={i}
                    className="font-display text-sm font-semibold px-4 py-3"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{ borderTop: '1px solid var(--border-color)' }}>
                  <td className="px-4 py-3 align-top font-semibold text-sm" style={{ color: 'var(--accent)' }}>
                    {row.season}
                  </td>
                  <td className="px-4 py-3 align-top text-sm" style={{ color: 'var(--text-secondary)' }}>{row.climate}</td>
                  <td className="px-4 py-3 align-top text-sm" style={{ color: 'var(--text-secondary)' }}>{row.bestTime}</td>
                  <td className="px-4 py-3 align-top text-sm" style={{ color: 'var(--text-secondary)' }}>{row.bring}</td>
                  <td className="px-4 py-3 align-top text-sm" style={{ color: 'var(--text-secondary)' }}>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <h3 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--accent)' }}>
                {row.season}
              </h3>
              <Stacked label={cols.climate} value={row.climate} />
              <Stacked label={cols.bestTime} value={row.bestTime} />
              <Stacked label={cols.bring} value={row.bring} />
              <Stacked label={cols.notes} value={row.notes} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stacked({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-2">
      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</div>
      <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{value}</div>
    </div>
  );
}
