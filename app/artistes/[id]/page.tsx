'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, Heart, MapPin, MessageCircle, Share2, Verified } from 'lucide-react';

// Mock data - In a real app, this would come from an API
const artist = {
  id: '1',
  name: 'Fatou Diop',
  username: '@fatoudiop',
  category: 'Actrice',
  location: 'Dakar, Sénégal',
  verified: true,
  available: true,
  bio: "Actrice passionnée avec plus de 5 ans d'expérience dans le théâtre et le cinéma sénégalais. Spécialisée dans les rôles dramatiques et les performances contemporaines.",
  languages: ['Wolof', 'Français', 'Anglais'],
  skills: ['Théâtre', 'Cinéma', 'Voix off', 'Improvisation'],
  experience: [
    {
      title: 'Rôle principal - "Les Étoiles de Dakar"',
      type: 'Film',
      date: '2023',
      description: 'Rôle principal dans un long-métrage sur la vie urbaine à Dakar.',
    },
    {
      title: 'Théâtre National Daniel Sorano',
      type: 'Théâtre',
      date: '2022',
      description: 'Performance dans plusieurs pièces classiques et contemporaines.',
    },
  ],
  education: [
    {
      school: 'École Nationale des Arts',
      degree: 'Diplôme en Art Dramatique',
      year: '2020',
    },
  ],
  gallery: [
    'https://images.pexels.com/photos/2556042/pexels-photo-2556042.jpeg',
    'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg',
    'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg',
  ],
};

export default function ArtistPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % artist.gallery.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + artist.gallery.length) % artist.gallery.length
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column - Gallery */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="relative">
              <AspectRatio ratio={16/9}>
                <Image
                  src={artist.gallery[currentImageIndex]}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </AspectRatio>
              {artist.gallery.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40"
                    onClick={previousImage}
                  >
                    ←
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40"
                    onClick={nextImage}
                  >
                    →
                  </Button>
                </>
              )}
            </div>
          </Card>

          <Tabs defaultValue="about" className="mt-8">
            <TabsList>
              <TabsTrigger value="about">À propos</TabsTrigger>
              <TabsTrigger value="experience">Expérience</TabsTrigger>
              <TabsTrigger value="education">Formation</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-4 space-y-4">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Biographie</h3>
                  <p className="mt-2 text-muted-foreground">{artist.bio}</p>

                  <div className="mt-6">
                    <h4 className="font-medium">Compétences</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {artist.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium">Langues</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {artist.languages.map((language) => (
                        <Badge key={language} variant="outline">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="mt-4 space-y-4">
              {artist.experience.map((exp, index) => (
                <Card key={index}>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {exp.date}
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="education" className="mt-4 space-y-4">
              {artist.education.map((edu, index) => (
                <Card key={index}>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{edu.school}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {edu.year}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column - Info */}
        <div className="space-y-6">
          <Card>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">{artist.name}</h1>
                    {artist.verified && (
                      <Verified className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <p className="text-muted-foreground">{artist.username}</p>
                </div>
                <Badge variant={artist.available ? 'default' : 'secondary'}>
                  {artist.available ? 'Disponible' : 'Indisponible'}
                </Badge>
              </div>

              <div className="mt-4 flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                {artist.location}
              </div>

              <div className="mt-6 flex gap-4">
                <Button className="flex-1">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contacter
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="font-semibold">Disponibilités</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Disponible pour des projets à partir de Janvier 2024
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}