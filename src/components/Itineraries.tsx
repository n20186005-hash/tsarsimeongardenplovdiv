'use client';

import { useTranslations, useMessages } from 'next-intl';

type Route = { title: string; desc: string };
type Persona = { id: string; title: string; desc: string };

export default function Itineraries() {
  const t = useTranslations('itineraries');
  const messages = useMessages() as any;
  const generic = (messages?.itineraries?.generic || {}) as {
    title?: string;
    halfDay?: Route;
    fullDay?: Route;
  };
  const personasBlock = (messages?.itineraries?.personas || {}) as {
    title?: string;
    items?: Persona[];
  };
  const personas = personasBlock.items || [];

  return (
    <section id="itineraries" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
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

        {/* Generic routes */}
        <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {generic.title || t('genericTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <RouteCard
            badge={t('halfDay')}
            title={generic.halfDay?.title || ''}
            desc={generic.halfDay?.desc || ''}
          />
          <RouteCard
            badge={t('fullDay')}
            title={generic.fullDay?.title || ''}
            desc={generic.fullDay?.desc || ''}
          />
        </div>

        {/* Persona routes */}
        <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {personasBlock.title || t('personasTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <RouteCard key={p.id} title={p.title} desc={p.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RouteCard({ badge, title, desc }: { badge?: string; title: string; desc: string }) {
  return (
    <div
      className="rounded-xl p-6"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      {badge && (
        <div
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
          style={{ background: 'var(--accent)', color: '#fff' }}
        >
          {badge}
        </div>
      )}
      <h4 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h4>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {desc}
      </p>
    </div>
  );
}
