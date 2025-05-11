import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-primary">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Êtes-vous un artiste ou un directeur de casting ?
              </h2>
              <p className="mt-6 text-lg text-white/80">
                Rejoignez notre communauté dès aujourd&apos;hui pour présenter votre talent ou
                trouver les meilleurs artistes pour vos projets.
              </p>
            </div>
            <div className="flex flex-col items-start gap-8 sm:flex-row lg:items-center lg:justify-end">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/inscription?role=artiste">
                  Je suis un artiste
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/inscription?role=recruteur">
                  Je cherche des talents
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}