'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, MessageCircle, Share2, Verified } from 'lucide-react';

// Mock data
const artists = [
  {
    id: '1',
    name: 'Fatou Diop',
    username: '@fatoudiop',
    category: 'Actrice',
    location: 'Dakar',
    verified: true,
    available: true,
    images: [
      'https://images.pexels.com/photos/2556042/pexels-photo-2556042.jpeg',
      'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg',
      'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg',
    ],
    bio: 'Actrice passionnée avec 5 ans d\'expérience dans le théâtre et le cinéma sénégalais.',
    languages: ['Wolof', 'Français', 'Anglais'],
  },
  {
    id: '2',
    name: 'Abdoulaye Seck',
    username: '@abseck',
    category: 'Danseur',
    location: 'Saint-Louis',
    verified: true,
    available: false,
    images: [
      'https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg',
      'https://images.pexels.com/photos/6152222/pexels-photo-6152222.jpeg',
    ],
    bio: 'Danseur contemporain spécialisé dans la fusion des styles traditionnels et modernes.',
    languages: ['Wolof', 'Français'],
  },
  {
    id: '3',
    name: 'Marie Ndiaye',
    username: '@mariendiaye',
    category: 'Chanteuse',
    location: 'Dakar',
    verified: false,
    available: true,
    images: [
      'https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg',
      'https://images.pexels.com/photos/3811809/pexels-photo-3811809.jpeg',
    ],
    bio: 'Chanteuse aux influences jazz et mbalax, je partage ma passion pour la musique.',
    languages: ['Wolof', 'Français', 'Anglais'],
  },
  {
    id: '4',
    name: 'Omar Sy',
    username: '@omarsy',
    category: 'Acteur',
    location: 'Thiès',
    verified: true,
    available: true,
    images: [
      'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    ],
    bio: 'Acteur polyvalent avec une expérience dans le cinéma et la télévision.',
    languages: ['Wolof', 'Français'],
  },
];

export function ArtistsGrid() {
  const [expandedArtist, setExpandedArtist] = useState<string | null>(null);
  const [currentImageIndexes, setCurrentImageIndexes] = useState<Record<string, number>>({});

  const nextImage = (artistId: string, totalImages: number) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [artistId]: ((prev[artistId] || 0) + 1) % totalImages,
    }));
  };

  const previousImage = (artistId: string, totalImages: number) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [artistId]: ((prev[artistId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {artists.map((artist) => (
        <Card
          key={artist.id}
          className="overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <div className="relative">
            <AspectRatio ratio={4/5}>
              <Image
                src={artist.images[currentImageIndexes[artist.id] || 0]}
                alt={artist.name}
                fill
                className="object-cover"
              />
            </AspectRatio>
            {artist.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40"
                  onClick={(e) => {
                    e.preventDefault();
                    previousImage(artist.id, artist.images.length);
                  }}
                >
                  ←
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40"
                  onClick={(e) => {
                    e.preventDefault();
                    nextImage(artist.id, artist.images.length);
                  }}
                >
                  →
                </Button>
              </>
            )}
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link
                  href={`/artistes/${artist.id}`}
                  className="font-serif text-lg font-medium hover:text-primary"
                >
                  {artist.name}
                </Link>
                {artist.verified && (
                  <Verified className="h-4 w-4 text-primary" />
                )}
              </div>
              <Badge variant={artist.available ? 'default' : 'secondary'}>
                {artist.available ? 'Disponible' : 'Indisponible'}
              </Badge>
            </div>

            <p className="mt-1 text-sm text-muted-foreground">
              {artist.username} • {artist.location}
            </p>

            <div className="mt-2">
              <Badge variant="outline" className="mr-2">
                {artist.category}
              </Badge>
              {artist.languages.map((language) => (
                <Badge key={language} variant="outline" className="mr-2">
                  {language}
                </Badge>
              ))}
            </div>

            <p className={`mt-4 text-sm ${
              expandedArtist === artist.id ? '' : 'line-clamp-2'
            }`}>
              {artist.bio}
            </p>
            {artist.bio.length > 100 && (
              <Button
                variant="ghost"
                className="mt-1 h-auto p-0 text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setExpandedArtist(
                  expandedArtist === artist.id ? null : artist.id
                )}
              >
                {expandedArtist === artist.id ? 'Voir moins' : 'Voir plus'}
              </Button>
            )}

            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <Button variant="default" asChild>
                <Link href={`/artistes/${artist.id}`}>
                  Voir le profil
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}