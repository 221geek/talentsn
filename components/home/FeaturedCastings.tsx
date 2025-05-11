import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';

// Mock data
const featuredCastings = [
  {
    id: '1',
    title: 'Acteurs pour série TV',
    company: 'Teranga Productions',
    location: 'Dakar, Sénégal',
    date: '25 Oct 2023',
    category: 'Télévision',
    urgent: true,
  },
  {
    id: '2',
    title: 'Danseurs traditionnels',
    company: 'Festival des Arts',
    location: 'Saint-Louis, Sénégal',
    date: '10 Nov 2023',
    category: 'Danse',
    urgent: false,
  },
  {
    id: '3',
    title: 'Mannequins pour défilé de mode',
    company: 'Dakar Fashion Week',
    location: 'Dakar, Sénégal',
    date: '5 Déc 2023',
    category: 'Mode',
    urgent: true,
  },
];

export function FeaturedCastings() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Castings à la une
          </h2>
          <p className="mt-2 text-muted-foreground">
            Les dernières opportunités pour les artistes
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/castings" className="group flex items-center gap-1">
            Tous les castings
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {featuredCastings.map((casting) => (
          <Link
            key={casting.id}
            href={`/castings/${casting.id}`}
            className="casting-card group"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-primary">
                    {casting.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {casting.company}
                  </p>
                </div>
                <Badge variant={casting.urgent ? 'destructive' : 'secondary'}>
                  {casting.category}
                </Badge>
              </div>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  {casting.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Date limite: {casting.date}
                </div>
              </div>

              <div className="mt-auto pt-4">
                <Button
                  variant="outline"
                  className="w-full justify-between group-hover:bg-primary group-hover:text-white"
                >
                  <span>Voir les détails</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}