import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { RiDownload2Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();

  const formations = t("about.formations", { returnObjects: true });
  const experiences = t("about.experiences", { returnObjects: true });

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
          {/* Titre */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-accent mb-8">
            {t("about.title")}
          </h2>

          {/* Citation */}
          <div className="my-8 p-4 bg-secondary/5 dark:bg-accent/5 rounded-lg border border-secondary/10 dark:border-accent/20">
            <blockquote className="italic text-sm md:text-base">
              {t("about.quote")}
            </blockquote>
          </div>

          {/* Introduction */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <img
              src="/images/miniature.png"
              alt="Francel"
              className="w-40 h-40 md:h-60 md:w-60 rounded-full object-cover border-4 border-secondary/10 shadow-lg bg-secondary/20"
            />

            <div>
              <div className="text-xs md:text-sm leading-relaxed max-w-2xl text-justify">
                <p
                  className="mb-4"
                  dangerouslySetInnerHTML={{
                    __html: t("about.intro1", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
                <p
                  className="mb-4"
                  dangerouslySetInnerHTML={{
                    __html: t("about.intro2", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("about.intro3", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </div>

              {/* CV */}
              <a
                href={`/files/${i18n.language}/Francel_Cabrel_CV_Frontend_Montreal.pdf`}
                download
                className="mt-4 flex gap-1 items-center justify-center bg-secondary/90 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
              >
                <RiDownload2Fill className="w-6 h-6 mr-2" />
                <span>{t("about.download_cv")}</span>
              </a>

              {/* Outils */}
              <div className="mt-16 flex flex-col justify-center items-center gap-2">
                <h3 className="text-xl md:text-2xl font-semibold text-secondary dark:text-accent border-b-2 border-secondary/20 dark:border-accent/30 pb-2">
                  {t("about.tools_title")}
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-4">
                  {[
                    ["html5.png", "HTML 5"],
                    ["css3.png", "CSS 3"],
                    ["js2.png", "JavaScript"],
                    ["typescript.png", "TypeScript"],
                    ["react.png", "React.js"],
                    ["next.png", "Next.js"],
                    ["tailwind.png", "TailwindCSS"],
                    ["git.png", "Git"],
                    ["python.png", "Python"],
                    ["django.png", "Django"],
                    ["postegre.png", "PostgreSQL"],
                    ["api.png", "APIs"],
                  ].map(([img, label], i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 hover:scale-105 transition duration-300"
                    >
                      <img
                        src={`/images/${img}`}
                        alt={`${label} logo`}
                        className="w-16 h-16"
                      />
                      <span className="text-xs md:text-sm text-secondary dark:text-accent">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Formation & Expérience */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 justify-between">
            {/* Formations */}
            <div className="flex flex-col gap-6 items-start">
              <div className="text-xl md:text-2xl text-secondary">
                {t("about.education_title")}
              </div>

              <div className="border bg-secondary/20 border-secondary/10 rounded-lg">
                <div className="relative">
                  <div className="absolute left-[25px] top-5 bottom-5 w-0.5 bg-secondary/30 dark:bg-accent/30" />
                  <div className="p-4 flex flex-col gap-8">
                    {formations.map((f, i) => (
                      <div key={i} className="relative flex gap-4">
                        <div className="relative z-10 flex-shrink-0">
                          <div className="mt-1 ml-1 w-3 h-3 bg-secondary dark:bg-accent/80 rounded-full border-2 border-white dark:border-gray-900 shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                          <div className="flex items-center gap-2">
                            <CalendarDaysIcon className="w-5 h-5 text-secondary dark:text-accent" />
                            <span className="font-semibold">{f.pediode}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-secondary dark:text-accent">
                            {f.titre}
                          </h3>
                          <p className="text-sm">{f.description}</p>
                          <p className="text-xs text-secondary dark:text-accent">
                            {f.lieu}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Expériences */}
            <div className="flex flex-col gap-6 items-start md:items-end">
              <div className="text-xl md:text-2xl text-secondary">
                {t("about.experience_title")}
              </div>

              <div className="border bg-secondary/20 border-secondary/10 rounded-lg">
                <div className="relative">
                  <div className="absolute left-[25px] top-5 bottom-5 w-0.5 bg-secondary/30 dark:bg-accent/30" />
                  <div className="p-4 flex flex-col gap-8">
                    {experiences.map((e, i) => (
                      <div key={i} className="relative flex gap-4">
                        <div className="relative z-10 flex-shrink-0">
                          <div className="mt-1 ml-1 w-3 h-3 bg-secondary dark:bg-accent/80 rounded-full border-2 border-white dark:border-gray-900 shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                          <div className="flex items-center gap-2">
                            <CalendarDaysIcon className="w-5 h-5 text-secondary dark:text-accent" />
                            <span className="font-semibold">{e.pediode}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-secondary dark:text-accent">
                            {e.titre}
                          </h3>
                          <p className="text-sm">{e.description}</p>
                          <p className="text-xs text-secondary dark:text-accent">
                            {e.lieu}
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
