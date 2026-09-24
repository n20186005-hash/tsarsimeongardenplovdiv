import { siteConfig } from '@/config';

export type WeatherCodeInfo = { label: string; icon: string };

// WMO weather interpretation codes → neutral label + icon
const WMO: Record<number, WeatherCodeInfo> = {
  0: { label: 'Clear sky', icon: '☀️' },
  1: { label: 'Mainly clear', icon: '🌤️' },
  2: { label: 'Partly cloudy', icon: '⛅' },
  3: { label: 'Overcast', icon: '☁️' },
  45: { label: 'Fog', icon: '🌫️' },
  48: { label: 'Rime fog', icon: '🌫️' },
  51: { label: 'Light drizzle', icon: '🌦️' },
  53: { label: 'Drizzle', icon: '🌦️' },
  55: { label: 'Dense drizzle', icon: '🌧️' },
  56: { label: 'Freezing drizzle', icon: '🌧️' },
  57: { label: 'Freezing drizzle', icon: '🌧️' },
  61: { label: 'Light rain', icon: '🌦️' },
  63: { label: 'Rain', icon: '🌧️' },
  65: { label: 'Heavy rain', icon: '🌧️' },
  66: { label: 'Freezing rain', icon: '🌧️' },
  67: { label: 'Freezing rain', icon: '🌧️' },
  71: { label: 'Light snow', icon: '🌨️' },
  73: { label: 'Snow', icon: '🌨️' },
  75: { label: 'Heavy snow', icon: '❄️' },
  77: { label: 'Snow grains', icon: '🌨️' },
  80: { label: 'Rain showers', icon: '🌦️' },
  81: { label: 'Rain showers', icon: '🌧️' },
  82: { label: 'Violent rain showers', icon: '⛈️' },
  85: { label: 'Snow showers', icon: '🌨️' },
  86: { label: 'Snow showers', icon: '❄️' },
  95: { label: 'Thunderstorm', icon: '⛈️' },
  96: { label: 'Thunderstorm with hail', icon: '⛈️' },
  99: { label: 'Thunderstorm with hail', icon: '⛈️' },
};

export function wmoInfo(code: number): WeatherCodeInfo {
  return WMO[code] ?? { label: 'Variable conditions', icon: '🌡️' };
}

export type CurrentWeather = {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  precipitationProbability: number;
  weatherCode: number;
  windSpeed: number;
  isDay: boolean;
};

export type DailyForecast = {
  date: string;
  code: number;
  tempMax: number;
  tempMin: number;
  precipProbability: number;
  windSpeed: number;
  uvIndex: number;
};

export type WeatherData = {
  current: CurrentWeather;
  daily: DailyForecast[];
  updatedAt: string;
};

export type WeatherAdvice = {
  risk: string[];
  outfit: string[];
  plan: string[];
  items: string[];
};

const apiUrl =
  `https://api.open-meteo.com/v1/forecast?latitude=${siteConfig.latitude}` +
  `&longitude=${siteConfig.longitude}` +
  `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m,is_day` +
  `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max` +
  `&timezone=auto&forecast_days=7`;

export async function getWeather(): Promise<WeatherData | null> {
  try {
    const res = await fetch(apiUrl, { next: { revalidate: 1800 } });
    if (!res.ok) return null;
    const j = await res.json();
    const cur = j.current;
    const dailyRaw = j.daily ?? {};
    const times: string[] = dailyRaw.time ?? [];
    const daily: DailyForecast[] = times.map((date: string, i: number) => ({
      date,
      code: dailyRaw.weather_code?.[i] ?? 0,
      tempMax: dailyRaw.temperature_2m_max?.[i] ?? 0,
      tempMin: dailyRaw.temperature_2m_min?.[i] ?? 0,
      precipProbability: dailyRaw.precipitation_probability_max?.[i] ?? 0,
      windSpeed: dailyRaw.wind_speed_10m_max?.[i] ?? 0,
      uvIndex: dailyRaw.uv_index_max?.[i] ?? 0,
    }));
    return {
      current: {
        temperature: cur.temperature_2m,
        apparentTemperature: cur.apparent_temperature,
        humidity: cur.relative_humidity_2m,
        precipitationProbability: cur.precipitation_probability ?? 0,
        weatherCode: cur.weather_code,
        windSpeed: cur.wind_speed_10m,
        isDay: cur.is_day === 1,
      },
      daily,
      updatedAt: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function buildAdvice(w: WeatherData): WeatherAdvice {
  const risk: string[] = [];
  const outfit: string[] = [];
  const plan: string[] = [];
  const items: string[] = [];

  const cur = w.current;
  const today = w.daily[0];
  const maxToday = today?.tempMax ?? cur.temperature;
  const minToday = today?.tempMin ?? cur.temperature;
  const tempDiff = maxToday - minToday;
  const precip = Math.max(cur.precipitationProbability, today?.precipProbability ?? 0);
  const uv = today?.uvIndex ?? 0;
  const wind = Math.max(cur.windSpeed, today?.windSpeed ?? 0);
  const windBft = beaufort(wind);
  const code = cur.weatherCode;

  const isThunder = [95, 96, 99].includes(code);
  const isHeavyRain = [65, 66, 67, 82].includes(code) || precip >= 70;
  const isRain = isHeavyRain || [51, 53, 55, 56, 57, 61, 63, 80, 81].includes(code);
  const isSnow = [71, 73, 75, 77, 85, 86].includes(code);
  const isFog = [45, 48].includes(code);
  const isClear = code === 0 || code === 1;
  const isCloudy = code === 2 || code === 3;

  // ---- Risk notice (top, red; only when genuinely applicable) ----
  // Open-Meteo free data has no official alerts feed, so risk is derived from
  // current conditions (thunderstorm / heavy rain / high wind / dense fog / extreme heat).
  if (isThunder) {
    risk.push(
      'Thunderstorms are possible — take shelter in buildings or under covered walkways, and avoid open ground, tall trees and the water features during lightning.'
    );
  }
  if (isHeavyRain) {
    risk.push(
      'Heavy rain is likely — paths can get slippery and low spots may pool; keep to the paved alleys and take care near the ponds and fountains.'
    );
  }
  if (windBft >= 7) {
    risk.push(
      'Strong winds expected — hold onto hats and lightweight items, and keep clear of tall trees and the open squares.'
    );
  }
  if (maxToday >= 35) {
    risk.push(
      'High heat is forecast — limit time in the sun around midday and watch for signs of heat fatigue, especially with children or older visitors.'
    );
  }
  if (isFog) {
    risk.push(
      'Dense fog may cut visibility, especially in the early morning — move carefully along the alleys and away from the pond edges.'
    );
  }

  // ---- Outfit (what to wear) ----
  if (minToday <= 0) {
    outfit.push(
      'Dress in warm layers with a winter coat, hat and gloves — mornings and evenings can drop below freezing.'
    );
  } else if (maxToday <= 10) {
    outfit.push('A warm jacket or coat is recommended, with layers you can add or remove during the day.');
  } else if (maxToday <= 20) {
    outfit.push('A light jacket or long sleeves keep you comfortable at the current temperatures.');
  } else {
    outfit.push('Light, breathable clothing keeps you comfortable in the warmth.');
  }
  if (tempDiff > 8) {
    outfit.push('The day–night temperature swing is large — bring a light layer you can add once it cools down.');
  }
  if (precip >= 40) {
    outfit.push('Bring a raincoat or compact umbrella — there is a real chance of showers.');
  } else if (maxToday >= 28) {
    outfit.push('Choose sun-protective clothing and a hat for extended time outdoors.');
  }
  if (isSnow) {
    outfit.push('Snow is possible — wear waterproof shoes with good grip.');
  }

  // ---- Plan (how to spend the visit) ----
  if (precip >= 60) {
    plan.push(
      'A good chance of rain — favour the shaded colonnades and the promenades near buildings, and save the open lawns for another time.'
    );
  } else if (isRain) {
    plan.push(
      'Light rain is around — paths may be damp, so walk carefully; the covered alleys and the fountains still make a pleasant short stroll.'
    );
  } else if (maxToday >= 32) {
    plan.push(
      'It will be hot — keep the main walk to the morning or late afternoon and pause in shaded alleys through the midday peak.'
    );
  } else if (maxToday <= 5) {
    plan.push('Keep walks shorter and warm up in sunny, sheltered spots around the park.');
  } else if (isClear) {
    plan.push(
      'Clear skies are ideal for a relaxed walk — early morning and just before sunset give the best light for the fountains and flower beds.'
    );
  } else if (isCloudy) {
    plan.push('Soft, even light today is great for photos and comfortable for a longer wander with no harsh sun.');
  } else {
    plan.push(
      'Conditions are suitable for a relaxed walk — the alleys, fountains and flower beds are enjoyable throughout the day.'
    );
  }
  if (uv >= 5) {
    plan.push('UV is moderate-to-high around midday — prefer shade between late morning and mid-afternoon.');
  }
  if (windBft >= 5 && windBft < 7) {
    plan.push('It is breezy — hats can blow off in the open squares, so hold onto them and skip very loose clothing.');
  }

  // ---- Items (handy to bring; only what applies) ----
  if (precip >= 40) {
    if (windBft >= 6) items.push('Raincoat rather than a long umbrella (windy)');
    else items.push('Umbrella or raincoat');
  }
  if (uv >= 5) items.push('Sunscreen, sunglasses and a hat');
  if (maxToday >= 26) items.push('Water bottle to stay hydrated');
  if (minToday <= 8) items.push('A warm layer for the evening');
  if (isFog) items.push('A mask if you are sensitive to damp air');
  items.push('Comfortable walking shoes');

  return { risk, outfit, plan, items };
}

export function beaufort(kmh: number): number {
  const ms = kmh / 3.6;
  const thresholds = [
    0.3, 1.6, 3.4, 5.5, 8.0, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7,
  ];
  let b = 0;
  for (let i = 0; i < thresholds.length; i++) {
    if (ms >= thresholds[i]) b = i + 1;
  }
  return b;
}

const LOCALE_MAP: Record<string, string> = {
  en: 'en-US',
  bg: 'bg-BG',
  zh: 'zh-CN',
};

export function formatDate(dateStr: string, locale: string): string {
  const d = new Date(`${dateStr}T00:00:00`);
  const intl = LOCALE_MAP[locale] ?? 'en-US';
  return d.toLocaleDateString(intl, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}
