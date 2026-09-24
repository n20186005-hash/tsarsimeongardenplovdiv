import { getLocale, getTranslations } from 'next-intl/server';
import {
  getWeather,
  buildAdvice,
  wmoInfo,
  beaufort,
  formatDate,
} from '@/lib/weather';

export default async function WeatherSection() {
  const t = await getTranslations('weather');
  const locale = await getLocale();
  const data = await getWeather();

  if (!data) {
    return (
      <section id="weather" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
          <p className="mt-8 text-base" style={{ color: 'var(--text-secondary)' }}>
            {t('unavailable')}
          </p>
        </div>
      </section>
    );
  }

  const advice = buildAdvice(data);
  const cur = data.current;
  const curInfo = wmoInfo(cur.weatherCode);
  const windBft = beaufort(cur.windSpeed);

  return (
    <section id="weather" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        {/* Current conditions */}
        <div
          className="rounded-2xl p-6 sm:p-8 mb-8 flex flex-col sm:flex-row items-center gap-6"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <div className="text-6xl leading-none" aria-hidden>
            {curInfo.icon}
          </div>
          <div className="text-center sm:text-left">
            <div className="font-display text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
              {Math.round(cur.temperature)}°C
            </div>
            <div className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
              {curInfo.label}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-2 sm:mt-0">
            <Metric label={t('feelsLike')} value={`${Math.round(cur.apparentTemperature)}°C`} />
            <Metric label={t('precip')} value={`${cur.precipitationProbability}%`} />
            <Metric label={t('wind')} value={`${Math.round(cur.windSpeed)} km/h (${windBft})`} />
            <Metric label={t('humidity')} value={`${cur.humidity}%`} />
          </div>
        </div>

        {/* 7-day forecast */}
        <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('forecast')}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 mb-10">
          {data.daily.slice(0, 7).map((d) => {
            const info = wmoInfo(d.code);
            return (
              <div
                key={d.date}
                className="rounded-xl p-3 text-center"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
              >
                <div className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                  {formatDate(d.date, locale)}
                </div>
                <div className="text-2xl mb-1" aria-hidden>{info.icon}</div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {Math.round(d.tempMax)}° / {Math.round(d.tempMin)}°
                </div>
                <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                  {t('precip')} {d.precipProbability}%
                </div>
              </div>
            );
          })}
        </div>

        {/* Smart advice */}
        {advice.risk.length > 0 && (
          <AdviceBlock tone="risk" icon="⚠️" title={t('adviceRisk')} items={advice.risk} />
        )}
        <AdviceBlock tone="normal" icon="👕" title={t('adviceOutfit')} items={advice.outfit} />
        <AdviceBlock tone="normal" icon="🗺️" title={t('advicePlan')} items={advice.plan} />
        <AdviceBlock tone="normal" icon="🎒" title={t('adviceItems')} items={advice.items} />
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</div>
      <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{value}</div>
    </div>
  );
}

function AdviceBlock({
  tone,
  icon,
  title,
  items,
}: {
  tone: 'risk' | 'normal';
  icon: string;
  title: string;
  items: string[];
}) {
  if (items.length === 0) return null;
  const isRisk = tone === 'risk';
  return (
    <div
      className="rounded-xl p-5 mb-6"
      style={{
        background: isRisk ? 'rgba(200,80,40,0.08)' : 'var(--bg-tertiary)',
        border: `1px solid ${isRisk ? 'rgba(200,80,40,0.35)' : 'var(--border-color)'}`,
      }}
    >
      <h4
        className="font-display text-base font-semibold mb-3"
        style={{ color: isRisk ? '#b4471f' : 'var(--text-primary)' }}
      >
        <span aria-hidden>{icon}</span> {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--accent)' }} className="mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
