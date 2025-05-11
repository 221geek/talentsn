import Link from 'next/link';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight">Talents</span>
              <span className="text-primary text-2xl font-light">SN</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Découvrez et mettez en valeur les meilleurs talents artistiques du Sénégal.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground/60 hover:text-primary">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary">
                <span className="sr-only">YouTube</span>
                <Youtube size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-md font-medium">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/artistes" className="text-muted-foreground hover:text-primary">
                  Artistes
                </Link>
              </li>
              <li>
                <Link href="/castings" className="text-muted-foreground hover:text-primary">
                  Castings
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-primary">
                  À propos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-medium">Ressources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Conseils pour artistes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Guide du casting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-medium">Légal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Talents SN. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}