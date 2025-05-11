'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { badge, cn } from '@/lib/utils';

// Mock data
const featuredArtists = [
  {
    id: '1',
    name: 'Fatou Diop',
    category: 'Actrice',
    image: 'https://images.pexels.com/photos/2556042/pexels-photo-2556042.jpeg',
    popular: true,
  },
  {
    id: '2',
    name: 'Abdoulaye Seck',
    category: 'Danseur',
    image: 'https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg',
    popular: false,
  },
  {
    id: '3',
    name: 'Marie Ndiaye',
    category: 'Chanteuse',
    image: 'https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg',
    popular: true,
  },
  {
    id: '4',
    name: 'Omar Sy',
    category: 'Acteur',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    popular: false,
  },
  {
    id: '5',
    name: 'Aissatou Diouf',
    category: 'Modèle',
    image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
    popular: true,
  },
  {
    id: '6',
    name: 'Moussa Kane',
    category: 'Musicien',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
    popular: false,
  },
];

export function FeaturedArtists() {
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Artistes en vedette
            </h2>
            <p className="mt-2 text-muted-foreground">
              Découvrez les talents sénégalais qui font la différence
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/artistes" className="group flex items-center gap-1">
              Voir tous les artistes
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 staggered-grid">
          {featuredArtists.map((artist) => (
            <Link
              key={artist.id}
              href={`/artistes/${artist.id}`}
              className="artist-card group"
              onMouseEnter={() => setHoveredArtist(artist.id)}
              onMouseLeave={() => setHoveredArtist(null)}
            >
              <div className="relative">
                <AspectRatio ratio={4 / 5}>
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className={cn(
                      "artist-card-image",
                      hoveredArtist === artist.id ? "scale-105" : ""
                    )}
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-medium leading-tight">
                        {artist.name}
                      </h3>
                      <p className="text-sm text-white/70">{artist.category}</p>
                    </div>
                    {artist.popular && (
                      <span className="rounded-full bg-primary/90 px-2 py-1 text-xs">
                        Populaire
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}