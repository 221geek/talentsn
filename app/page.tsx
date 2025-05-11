import { FeaturedArtists } from '@/components/home/FeaturedArtists';
import { Hero } from '@/components/home/Hero';
import { FeaturedCastings } from '@/components/home/FeaturedCastings';
import { CTASection } from '@/components/home/CTASection';
import { Categories } from '@/components/home/Categories';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      <Hero />
      <Categories />
      <FeaturedArtists />
      <div className="relative py-16">
        <div className="absolute inset-0 bg-muted/30 dark:bg-muted/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeaturedCastings />
        </div>
      </div>
      <CTASection />
    </div>
  );
}