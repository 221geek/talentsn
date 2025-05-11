export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          À propos de Talents SN
        </h1>
        
        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold">Notre Mission</h2>
            <p className="mt-4 text-muted-foreground">
              Talents SN est née d'une vision simple mais ambitieuse : créer un pont entre les talents
              artistiques du Sénégal et les opportunités professionnelles. Notre plateforme vise à
              valoriser et promouvoir les artistes sénégalais tout en facilitant leur découverte par
              les professionnels du secteur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Nos Valeurs</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Authenticité</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Nous valorisons l'expression artistique authentique et unique de chaque talent.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Excellence</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Nous encourageons le développement professionnel et l'excellence artistique.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Innovation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Nous adoptons les technologies modernes pour mieux servir notre communauté.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Communauté</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Nous créons un espace d'échange et de collaboration entre artistes et professionnels.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Notre Impact</h2>
            <p className="mt-4 text-muted-foreground">
              Depuis notre création, nous avons contribué à :
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>Mettre en lumière plus de 1000 artistes sénégalais</li>
              <li>Faciliter plus de 500 collaborations professionnelles</li>
              <li>Organiser plus de 50 événements de networking</li>
              <li>Créer une communauté de plus de 5000 membres actifs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Notre Équipe</h2>
            <p className="mt-4 text-muted-foreground">
              Talents SN est portée par une équipe passionnée de professionnels du secteur culturel et
              technologique. Notre diversité d'expériences et notre engagement commun pour la promotion
              des arts nous permettent d'offrir une plateforme innovante et adaptée aux besoins de
              notre communauté.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}