export default function Project() {
  const projects = [
    {
      title: "West Heaven Hotel - Reservation de  chambres d'hotel",
      description: "Application React au design moderne pour la réservation de chambres d'hôtel. Fonctionnalités de recherche, réservation et gestion des chambres.",
      image: "/images/hotel.png",
      link: "https://west-heaven-hotel.netlify.app/",
      github: "https://github.com/FrancelLeBoss/my_shopsy",
      techs: ["React", "Bootstrap", "API REST", "Tailwind css", "PostgreSQL"]
    },
    {
      title: "Shopsy - E-commerce",
      description: "Application React et Django de vente en ligne, recopiant le style des boutiques Nike. Fonctionnalités de panier, paiement et gestion des produits.",
      image: "/images/shopsy 2.png",
      link: "https://demo-crypto.netlify.app",
      github: "https://github.com/FrancelLeBoss/my_shopsy",
      techs: ["React", "Django", "API REST", "Tailwind css", "PostgreSQL"]
    },
    {
      title: "237coach - Coaching sportif",
      description: "Site web de coaching sportif. Présentation des services, témoignages et formulaire de contact.",
      image: "/images/237coach.png",
      link: "https://237coach.com/",
      github: "https://github.com/FrancelLeBoss/my_shopsy",
      techs: ["React", "Django", "API REST", "Tailwind css", "PostgreSQL"]
    },
    {
      title: "Ouispeak - Application d'apprentissage des langues",
      description: "Application web pour apprendre des langues avec des speakers natifs. Fonctionnalités de chat, appels vidéo et partage de ressources.",
      image: "/images/ouispeak.png",
      link: "https://ouispeak.io/en",
      github: "https://github.com/FrancelLeBoss/my_shopsy",
      techs: ["Next.js", "Tailwindcss", "API REST", "Typescript", "Multi-language"]
    },
    {
      title: "Facebook 2.0 - Clone de Facebook (React)",
      description: "Application React imitant Facebook. Fonctionnalités de publication, commentaires et likes.",
      image: "/images/facebook2.0.png",
      link: "https://ouispeak.io/en",
      github: "https://github.com/FrancelLeBoss/facebook-2.0",
      techs: ["React.js", "Tailwindcss", "API REST", "Firebase"]
    },
    {
      title: "Portfolio personnel",
      description: "Un portfolio responsive développé avec React, TailwindCSS et Vite. Thème clair/sombre, navigation animée et design moderne.",
      image: "/images/portfolio.png",
      link: "https://francelprowo.dev",
      github: "https://github.com/FrancelLeBoss/portfolio-francel",
      techs: ["React", "Tailwind", "Vite", "Dark Mode"]
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-white dark:bg-backgroundDark text-primary dark:text-textLight">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-accent mb-12">
          Mes projets recents
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden bg-backgroundLight dark:bg-secondary/10 shadow-lg hover:shadow-xl transition duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary dark:text-accent">{project.title}</h3>
                <p className="mt-2 text-sm">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-accent/10 text-accent rounded-md">{tech}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <a href={project.link} target="_blank" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Live</a>
                  <a href={project.github} target="_blank" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}