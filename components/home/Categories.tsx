'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 'acteurs',
    name: 'Acteurs',
    description: 'Acteurs de cinéma, TV et théâtre',
    image: 'https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg',
    color: 'from-amber-500 to-orange-700',
  },
  {
    id: 'danseurs',
    name: 'Danseurs',
    description: 'Danseurs traditionnels et contemporains',
    image: 'https://images.pexels.com/photos/2188012/pexels-photo-2188012.jpeg',
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 'musiciens',
    name: 'Musiciens',
    description: 'Chanteurs et instrumentistes',
    image: 'https://images.pexels.com/photos/1460037/pexels-photo-1460037.jpeg',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    id: 'modeles',
    name: 'Modèles',
    description: 'Mannequins et modèles photo',
    image: 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg',
    color: 'from-red-500 to-rose-700',
  },
];

export function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explorez par catégorie
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Découvrez des talents dans différentes disciplines artistiques et domaines du spectacle
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Link 
              href={`/artistes?categorie=${category.id}`} 
              key={category.id}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div 
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-80",
                    category.color
                  )}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <p className="mt-2 text-sm">{category.description}</p>
                  
                  <div
                    className={cn(
                      "mt-4 rounded-full bg-white px-4 py-2 text-xs font-medium text-foreground",
                      "transform transition-all duration-200",
                      hoveredIndex === index 
                        ? "translate-y-0 opacity-100" 
                        : "translate-y-2 opacity-0"
                    )}
                  >
                    Découvrir
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}