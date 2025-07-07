import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Project() {
  const { t } = useTranslation();

  const projects = t("projects.list", { returnObjects: true });
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="projects"
      className="py-16 px-6 bg-white dark:bg-backgroundDark text-primary dark:text-textLight"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-accent mb-12">
          {t("projects.title")}
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.04,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              style={{
                perspective: 1000, // Important pour l’effet 3D
                transformStyle: "preserve-3d",
              }}
              className="cursor-pointer rounded-xl overflow-hidden bg-backgroundLight dark:bg-secondary/10 shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary dark:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
                  {project.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-accent/10 text-accent rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
