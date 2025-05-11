'use client';

import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const categories = [
  { id: 'acteurs', name: 'Acteurs' },
  { id: 'danseurs', name: 'Danseurs' },
  { id: 'musiciens', name: 'Musiciens' },
  { id: 'modeles', name: 'Modèles' },
];

const locations = [
  'Dakar',
  'Saint-Louis',
  'Thiès',
  'Ziguinchor',
  'Kaolack',
  'Touba',
];

const languages = [
  { id: 'wolof', name: 'Wolof' },
  { id: 'francais', name: 'Français' },
  { id: 'anglais', name: 'Anglais' },
  { id: 'pulaar', name: 'Pulaar' },
  { id: 'serere', name: 'Sérère' },
];

export function ArtistsFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [isVerified, setIsVerified] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [openSections, setOpenSections] = useState({
    categories: true,
    locations: true,
    languages: true,
  });

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location]
    );
  };

  const toggleLanguage = (languageId: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(languageId)
        ? prev.filter((id) => id !== languageId)
        : [...prev, languageId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedLocations([]);
    setSelectedLanguages([]);
    setIsVerified(false);
    setIsAvailable(false);
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedLocations.length > 0 ||
    selectedLanguages.length > 0 ||
    isVerified ||
    isAvailable;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Filtres</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            Réinitialiser
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {/* Categories */}
        <Collapsible
          open={openSections.categories}
          onOpenChange={(isOpen) =>
            setOpenSections((prev) => ({ ...prev, categories: isOpen }))
          }
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-between p-0 font-medium"
            >
              <span>Catégories</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openSections.categories ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 space-y-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                className={`flex w-full items-center justify-between ${
                  selectedCategories.includes(category.id)
                    ? 'bg-primary/10 text-primary'
                    : ''
                }`}
                onClick={() => toggleCategory(category.id)}
              >
                <span>{category.name}</span>
                {selectedCategories.includes(category.id) && (
                  <Check className="h-4 w-4" />
                )}
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        {/* Locations */}
        <Collapsible
          open={openSections.locations}
          onOpenChange={(isOpen) =>
            setOpenSections((prev) => ({ ...prev, locations: isOpen }))
          }
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-between p-0 font-medium"
            >
              <span>Localisation</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openSections.locations ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <div className="flex flex-wrap gap-2">
              {locations.map((location) => (
                <Badge
                  key={location}
                  variant={selectedLocations.includes(location) ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => toggleLocation(location)}
                >
                  {location}
                </Badge>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        {/* Languages */}
        <Collapsible
          open={openSections.languages}
          onOpenChange={(isOpen) =>
            setOpenSections((prev) => ({ ...prev, languages: isOpen }))
          }
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="flex w-full items-center justify-between p-0 font-medium"
            >
              <span>Langues</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openSections.languages ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 space-y-4">
            {languages.map((language) => (
              <Button
                key={language.id}
                variant="ghost"
                className={`flex w-full items-center justify-between ${
                  selectedLanguages.includes(language.id)
                    ? 'bg-primary/10 text-primary'
                    : ''
                }`}
                onClick={() => toggleLanguage(language.id)}
              >
                <span>{language.name}</span>
                {selectedLanguages.includes(language.id) && (
                  <Check className="h-4 w-4" />
                )}
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        {/* Additional Filters */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="verified" className="font-medium">
              Profil vérifié
            </Label>
            <Switch
              id="verified"
              checked={isVerified}
              onCheckedChange={setIsVerified}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="available" className="font-medium">
              Disponible uniquement
            </Label>
            <Switch
              id="available"
              checked={isAvailable}
              onCheckedChange={setIsAvailable}
            />
          </div>
        </div>
      </div>
    </div>
  );
}