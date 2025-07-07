import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { RiContractFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.01,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.01,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        bounce: 0.2,
      },
    },
  };

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-backgroundLight dark:bg-backgroundDark px-8 py-6 gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Photo */}
      <motion.div className="relative" variants={itemVariants}>
        <motion.img
          src="/images/my_photo.png"
          alt={t("hero.name")}
          className="mt-20 md:mt-8 bg-secondary/20 transition hover:shadow-accent/40 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-secondary/10 shadow-secondary/10 shadow-xl"
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Texte intro */}
      <motion.div className="text-center md:text-left" variants={itemVariants}>
        <motion.h2
          className="text-4xl md:text-5xl font-signature text-secondary dark:text-accent"
          variants={itemVariants}
        >
          {t("hero.name")}
        </motion.h2>

        <motion.h2
          className="mt-2 text-xl text-secondary dark:text-accent md:text-2xl font-semibold max-w-screen-sm"
          variants={itemVariants}
        >
          {t("hero.title")}
        </motion.h2>

        <motion.p
          className="mt-4 text-primary dark:text-textLight max-w-md"
          variants={itemVariants}
        >
          {t("hero.description")}{" "}
          <a href="/#about" className="text-secondary text-xs lg:text-sm">
            {t("hero.read_more")}
          </a>
        </motion.p>

        {/* Réseaux sociaux */}
        <motion.div
          className="mt-4 flex justify-center md:justify-start items-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="https://www.facebook.com/francelcabrel.pehuie"
            target="_blank"
            rel="noopener noreferrer"
            title={t("hero.facebook_title")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook className="w-8 h-8 text-secondary dark:text-accent/80 hover:scale-110 transition ml-2" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/fc-prowo/"
            target="_blank"
            rel="noopener noreferrer"
            title={t("hero.linkedin_title")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="w-8 h-8 text-secondary dark:text-accent/80 hover:scale-110 transition ml-2" />
          </motion.a>
          <motion.a
            href="mailto:cabrelprowo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title={t("hero.email_title")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GoMail className="w-8 h-8 text-secondary dark:text-accent/80 hover:scale-110 transition ml-2" />
          </motion.a>
          <motion.a
            href="https://github.com/FrancelLeBoss"
            target="_blank"
            rel="noopener noreferrer"
            title={t("hero.github_title")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="w-8 h-8 text-secondary dark:text-accent/80 hover:scale-110 transition ml-2" />
          </motion.a>
        </motion.div>

        {/* Boutons CTA */}
        <motion.div
          className="mt-2 flex flex-col text-xs lg:text-base sm:flex-row items-center justify-center sm:justify-start gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="/#contact"
            className="mt-6 flex gap-1 items-center justify-center bg-secondary text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <RiContractFill className="w-6 h-6 mr-2" />
            <span>{t("hero.cta_contact")}</span>
          </motion.a>

          <motion.a
            href="#projects"
            className="mt-6 flex gap-1 items-center justify-center bg-primary text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t("hero.cta_projects")}</span>
            <ArrowRightCircleIcon className="w-6 h-6 mr-2" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
