import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { RiDownload2Fill } from "react-icons/ri";

export default function About() {
  const formations = [
    {
      id: 1,
      pediode: "2022 - 2024",
      titre: "Master of Technologies in Information System",
      description: "Deuxieme de ma promotion",
      lieu: "Yessenov University, Kazakhstan",
    },
    {
      id: 2,
      pediode: "2016 - 2019",
      titre: "Licence de Technologies en Informatique et Reseaux",
      description: "Sixieme de ma promotion",
      lieu: "IUT de Bandjoun, Cameroun",
    },
    {
      id: 3,
      pediode: "2016 - 2018",
      titre: "DUT (BAC + 2) en Genie Logiciel",
      description: "Sixieme de ma promotion",
      lieu: "IUT de Bandjoun, Cameroun",
    },
    {
      id: 4,
      pediode: "2015 - 2016",
      titre: "Baccalaureat Maths et Physique",
      description: "Mention Assez-bien",
      lieu: "Lycée Bilingue de Bafoussam Rural, Cameroun",
    },
  ];

  const experiences = [
    {
      id: 1,
      pediode: "Avril 2023 - Avril 2025",
      titre: "Développeur Frontend",
      description:
        "J'ai utilisé React.js, Typescript et Tailwind CSS pour créer des interfaces utilisateur modernes et performantes.",
      lieu: "Vitteck Agency Dubai, Émirats Arabes Unis",
    },
    {
      id: 2,
      pediode: "Sep 2021 - December 2021",
      titre: "Développeur Frontend React",
      description:
        "J'ai travaille sur des projets de grande envergure, en utilisant React.js",
      lieu: "KevMax Sarl, Yaoundé, Cameroun",
    },
    {
      id: 3,
      pediode: "Oct 2020 - Aout 2021",
      titre: "Développeur Fullstack",
      description:
        "J'ai utilisé React, Django, Wordpress, PHP pour créer des applications web.",
      lieu: "FOSEINT LTD Douala, Cameroun",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-backgroundLight dark:bg-backgroundDark py-12 px-8 text-primary dark:text-textLight"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-accent mb-8">
            À propos de moi
          </h2>
          <div className="my-8 p-4 bg-secondary/5 dark:bg-accent/5 rounded-lg border border-secondary/10 dark:border-accent/20">
            <blockquote className="italic text-sm md:text-base">
              Une belle interface c'est comme une bonne blague, on ne devrait
              pas avoir à l'expliquer.
            </blockquote>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Image ou illustration optionnelle */}
            <img
              src="/images/miniature.png"
              alt="Francel"
              className="w-40 h-40 md:h-60 md:w-60 rounded-full object-cover border-4 border-secondary/10 shadow-lg bg-secondary/20"
            />

            {/* Texte */}
            <div>
              <div className="text-xs md:text-sm  leading-relaxed max-w-2xl  text-justify">
                <p className="mb-4">
                  Hello 👋 Je m'appelle{" "}
                  <strong className="text-secondary dark:text-accent">
                    Francel
                  </strong>
                  , développeur frontend passionné basé à Montréal. J’adore
                  transformer des idées en interfaces web fluides, accessibles
                  et visuellement engageantes.
                </p>
                <p className="mb-4">
                  Je travaille principalement avec <strong>React</strong>,{" "}
                  <strong>Typescript</strong>,<strong>Tailwind CSS</strong> et
                  les outils modernes comme <strong>Vite</strong>,
                  <strong>Git</strong> ou <strong>Figma</strong>. Je suis tres a
                  l'aise avec l'integration d'API REST et GraphQL, et j'ai une
                  bonne expérience avec les bases de données comme{" "}
                  <strong>PostegreSQL</strong> et <strong>MySQL</strong>.
                </p>
                <p>
                  J'ai egalement des competences solides en backend grace a mes
                  expériences avec <strong>Python</strong>, precisement{" "}
                  <strong>Django</strong>. Rigoureux, curieux et toujours en
                  quête d’optimisation, je m'efforce de créer des expériences
                  utilisateur intuitives et performantes. En dehors du code,
                  j’aime la musique(comme tout le monde ?), le football et je ne
                  desespere pas d'etre regulier a la salle de sport.
                </p>
              </div>
              <a
                href="/files/Francel_Cabrel_CV_Frontend_Montreal_FR.pdf"
                download
                className="mt-4 flex gap-1 items-center justify-center bg-secondary/90 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
              >
                <RiDownload2Fill className="inline-block w-6 h-6 mr-2" />
                <span>Telecharger mon CV</span>
              </a>
              <div className="mt-16 flex flex-col justify-center items-center gap-2">
                <h3 className="text-xl md:text-2xl font-semibold text-secondary dark:text-accent border-b-2 border-secondary/20 dark:border-accent/30 pb-2">
                  Mes outils de travail
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-4">
                  <div className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300">
                    <img src="/images/html5.png" alt="" className="w-16 h-16" />
                    <span className="text-xs md:text-sm text-secondary dark:text-accent">
                      HTML 5
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300">
                    <img src="/images/css3.png" alt="" className="w-16 h-16" />
                    <span className="text-xs md:text-sm text-secondary dark:text-accent">
                      CSS 3
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300">
                    <img src="/images/js2.png" alt="" className="w-16 h-16" />
                    <span className="text-xs md:text-sm text-secondary dark:text-accent">
                      Javascript
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300">
                    <img
                      src="/images/typescript.png"
                      alt=""
                      className="w-16 h-16"
                    />
                    <span className="text-xs md:text-sm text-secondary dark:text-accent">
                      Typescript
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300">
                    <img src="/images/react.png" alt="" className="w-16 h-16" />
                    <span className="text-xs md:text-sm text-secondary dark:text-accent">
                      React.js
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300">
                    <img src="/images/next.png" alt="" className="w-16 h-16" />
                    <span className="text-xs md:text-sm text-secondary dark:text-accent">
                      Next.js
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300">
                    <img
                      src="/images/tailwind.png"
                      alt=""
                      className="w-16 h-16"
                    />
                    <span className="text-xs md:text-sm text-secondary dark:text-accent">
                      Tailwindcss
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300">
                    <img src="/images/git.png" alt="" className="w-16 h-16" />
                    <span className="text-xs md:text-sm text-secondary dark:text-accent">
                      GIT
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300">
                    <img
                      src="/images/python.png"
                      alt=""
                      className="w-16 h-16"
                    />
                    <span className="text-xs md:text-sm text-secondary dark:text-accent">
                      Python
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300">
                    <img
                      src="/images/django.png"
                      alt=""
                      className="w-16 h-16"
                    />
                    <span className="text-xs md:text-sm text-secondary dark:text-accent">
                      Django
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300">
                    <img
                      src="/images/postegre.png"
                      alt=""
                      className="w-16 h-16"
                    />
                    <span className="text-xs md:text-sm text-secondary dark:text-accent">
                      PostgreSQL
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300">
                    <img src="/images/api.png" alt="" className="w-16 h-16" />
                    <span className="text-xs md:text-sm text-secondary dark:text-accent">
                      APIs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Formation et experience */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
            <div className="flex flex-col gap-6 items-start">
              <div className="text-xl text-secondary md:text-2xl">
                Formation
              </div>
              <div className="border bg-secondary/20 border-secondary/10 rounded-lg">
                <div className="relative">
                  {/* Ligne verticale */}
                  <div className="absolute left-[25px] top-5 bottom-5 w-0.5 bg-secondary/30 dark:bg-accent/30"></div>

                  <div className="p-4 flex flex-col gap-8">
                    {formations.map((formation, index) => (
                      <div key={formation.id} className="relative flex gap-4">
                        {/* Point de timeline */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="mt-1 ml-1 w-3 h-3 bg-secondary dark:bg-accent/80 rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div>
                        </div>

                        {/* Contenu */}
                        <div className="flex flex-col gap-2 flex-1">
                          <div className="flex items-center gap-2">
                            <CalendarDaysIcon className="inline-block w-5 h-5 mr-2 text-secondary dark:text-accent" />
                            <span className="font-semibold">
                              {formation.pediode}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-secondary dark:text-accent">
                            {formation.titre}
                          </h3>
                          <p className="text-sm text-primary dark:text-textLight">
                            {formation.description}
                          </p>
                          <p className="text-xs text-secondary dark:text-accent">
                            {formation.lieu}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start md:items-end">
              <div className="text-xl md:text-2xl text-secondary">
                Parcours Professionel
              </div>
              <div className="border bg-secondary/20 border-secondary/10 rounded-lg">
                <div className="relative">
                  {/* Ligne verticale */}
                  <div className="absolute left-[25px] top-5 bottom-5 w-0.5 bg-secondary/30 dark:bg-accent/30"></div>

                  <div className="p-4 flex flex-col gap-8">
                    {experiences.map((experience, index) => (
                      <div key={experience.id} className="relative flex gap-4">
                        {/* Point de timeline */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="mt-1 ml-1 w-3 h-3 bg-secondary dark:bg-accent/80 rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div>
                        </div>

                        {/* Contenu */}
                        <div className="flex flex-col gap-2 flex-1">
                          <div className="flex items-center gap-2">
                            <CalendarDaysIcon className="inline-block w-5 h-5 mr-2 text-secondary dark:text-accent" />
                            <span className="font-semibold">
                              {experience.pediode}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-secondary dark:text-accent">
                            {experience.titre}
                          </h3>
                          <p className="text-sm text-primary dark:text-textLight">
                            {experience.description}
                          </p>
                          <p className="text-xs text-secondary dark:text-accent">
                            {experience.lieu}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
