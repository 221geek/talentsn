'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type HeroImage = {
  url: string;
  alt: string;
};

const heroImages: HeroImage[] = [
  {
    url: 'https://images.pexels.com/photos/7681324/pexels-photo-7681324.jpeg',
    alt: 'Artiste sénégalais jouant du tambour',
  },
  {
    url: 'https://images.pexels.com/photos/6157231/pexels-photo-6157231.jpeg',
    alt: 'Danseur contemporain en performance',
  },
  {
    url: 'https://images.pexels.com/photos/3328077/pexels-photo-3328077.jpeg',
    alt: 'Acteur en séance photo',
  },
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
      {/* Background images with fade transition */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: index === currentImageIndex ? 10 : 0,
            }}
            aria-hidden="true"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background z-20" />
      </div>

      {/* Hero content */}
      <div className="relative z-30 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Découvrez les{' '}
              <span className="text-primary">talents artistiques</span> du Sénégal
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Une plateforme dédiée aux acteurs, danseurs, musiciens et artistes sénégalais pour
              présenter leur talent et trouver des opportunités de casting.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/artistes">Découvrir les artistes</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/castings" className="group">
                  Voir les castings
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentImageIndex
                ? 'bg-primary w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}