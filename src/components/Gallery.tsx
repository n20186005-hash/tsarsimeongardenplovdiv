'use client';

import { useTranslations, useMessages } from 'next-intl';
import { useState, useCallback } from 'react';

const photos = [
  { src: '/gallery/tsar-simeon-garden-park-1.jpg', alt: 'Tsar Simeon Garden Park Water Tower in Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-2.jpg', alt: 'Flower alleys of Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-3.jpg', alt: 'Historic statues in Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-4.jpg', alt: 'Decorative ponds in Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-5.jpg', alt: 'Green areas of Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-6.jpg', alt: 'Architectural details in Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-7.jpg', alt: 'Spring blossoms in Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-8.jpg', alt: 'Autumn colors in Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-9.jpg', alt: 'Monuments in Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-10.jpg', alt: 'Street lamps of Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-11.jpg', alt: 'Trees and vegetation in Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-12.jpg', alt: 'Rest benches in Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-13.jpg', alt: 'Park entrances of Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-14.jpg', alt: 'Fountain details in Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-15.jpg', alt: 'Walking paths in Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-16.jpg', alt: 'Historic objects in Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-17.jpg', alt: 'Natural beauty of Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
  { src: '/gallery/tsar-simeon-garden-park-18.jpg', alt: 'Panoramic view of Tsar Simeon Garden Park, Plovdiv, Bulgaria' },
];

export default function Gallery() {
  const t = useTranslations('gallery');
  const messages = useMessages() as any;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const captions = (messages?.gallery?.captions || []) as string[];

  const galleryPhotos = photos.map((photo, i) => ({
    ...photo,
    alt: captions[i] || photo.alt,
  }));

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
  }, [galleryPhotos.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1));
  }, [galleryPhotos.length]);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  const mapsLink = messages?.hero?.mapsLink || 'https://maps.app.goo.gl/toDts5VqGcTJ4NhLA';

  return (
    <>
      <section id="gallery" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
          <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {galleryPhotos.map((photo, i) => (
                <div
                  key={i}
                  className={`gallery-item relative group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                  onClick={() => {
                    setCurrentIndex(i);
                    openLightbox();
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ minHeight: i === 0 ? '400px' : '180px' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors rounded-lg flex items-end">
                    <p className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center mt-6 gap-2 sm:gap-4 items-center">
              {t.has('viewMoreDesc') && (
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {t('viewMoreDesc')}
                </span>
              )}
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {t('viewAll')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            src={galleryPhotos[currentIndex].src}
            alt={galleryPhotos[currentIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {galleryPhotos.length}
          </div>
        </div>
      )}
    </>
  );
}
