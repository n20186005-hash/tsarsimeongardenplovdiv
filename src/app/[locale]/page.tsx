import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import BestTimeSection from '@/components/BestTimeSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import HistorySection from '@/components/HistorySection';
import LegendsSection from '@/components/LegendsSection';
import EtiquetteSection from '@/components/EtiquetteSection';
import InfoSection from '@/components/InfoSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import FAQSection from '@/components/FAQSection';
import SourcesSection from '@/components/SourcesSection';
import WeatherSection from '@/components/WeatherSection';
import SeasonalStrategy from '@/components/SeasonalStrategy';
import Itineraries from '@/components/Itineraries';
import TopicLinks from '@/components/TopicLinks';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { baseUrl } = siteConfig;
  return {
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'zh': `${baseUrl}/zh`,
        'en': `${baseUrl}/en`,
        'bg': `${baseUrl}/bg`,
        'x-default': `${baseUrl}/bg`,
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <WeatherSection />
        <BestTimeSection />
        <SeasonalStrategy />
        <FacilitiesSection />
        <HistorySection />
        <LegendsSection />
        <Itineraries />
        <TopicLinks locale={locale} />
        <InfoSection />
        <EtiquetteSection />
        <Gallery />
        <Reviews />
        <FAQSection />
        <MapEmbed />
        <SourcesSection />
      </main>
      <Footer />
    </>
  );
}
