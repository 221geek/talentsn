import { ArtistsGrid } from '@/components/artists/ArtistsGrid';
import { ArtistsFilters } from '@/components/artists/ArtistsFilters';

export default function ArtistsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Découvrir les artistes
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
          Explorez notre répertoire d&apos;artistes talentueux du Sénégal et trouvez les personnes
          parfaites pour votre prochain projet
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <ArtistsFilters />
        </div>
        <div className="lg:col-span-3">
          <ArtistsGrid />
        </div>
      </div>
    </div>
  );
}