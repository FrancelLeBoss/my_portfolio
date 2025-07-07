import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { RiContractFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.01, // Plus rapide entre chaque élément
        delayChildren: 0.1, // Petit délai avant le premier élément
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.01, // Commence comme un point
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1, // Grandit à sa taille normale
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        bounce: 0.2, // Léger rebond à la fin
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
          alt="Francel Prowo"
          className="mt-20 md:mt-8 bg-secondary/20 transition
           hover:shadow-accent/40 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 
           rounded-full object-cover border-4 border-secondary/10 
           shadow-secondary/10 shadow-xl"
          animate={{
            //y: [0, -10, 0],
            //rotate: [0, 5, -5, 0], // Légère rotation pour plus de dynamisme
            scale: [1, 1.06, 1], // Légère augmentation
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Texte d’intro */}
      <motion.div className="text-center md:text-left " variants={itemVariants}>
        <motion.h1
          className="text-4xl md:text-5xl font-signature text-secondary/85"
          variants={itemVariants}
        >
          Francel Prowo
        </motion.h1>
        <motion.h2
          className="mt-2 text-xl text-secondary dark:text-accent md:text-2xl font-semibold"
          variants={itemVariants}
        >
          Développeur Fullstack React & Django <br />
          avec 4 ans d'experience
        </motion.h2>
        <motion.p
          className="mt-4 text-primary dark:text-textLight max-w-md"
          variants={itemVariants}
        >
          Je conçois des interfaces modernes, performantes et accessibles.
          Passionné par le web et curieux de nature, j'utilise les outils les
          plus récents pour créer des expériences utilisateur fluides et
          engageantes.{" "}
          <a href="/#about" className="text-secondary text-xs lg:text-sm">
            Lire plus...
          </a>
        </motion.p>
        <motion.div
          className="mt-4 flex justify-center md:justify-start items-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="https://www.facebook.com/francelcabrel.pehuie"
            target="_blank"
            rel="noopener noreferrer"
            title="Contactez moi sur Facebook"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook className="inline-block w-8 h-8 text-secondary dark:text-accent/80 hover:scale-110 transition ml-2" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/fc-prowo/"
            target="_blank"
            rel="noopener noreferrer"
            title="Mon LinkedIn"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="inline-block w-8 h-8 text-secondary dark:text-accent/80 hover:scale-110 transition ml-2" />
          </motion.a>
          <motion.a
            href="mailto:cabrelprowo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Mon Email"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GoMail className="inline-block w-8 h-8 text-secondary dark:text-accent/80 hover:scale-110 transition ml-2" />
          </motion.a>
          <motion.a
            href="https://github.com/FrancelLeBoss"
            target="_blank"
            rel="noopener noreferrer"
            title="Mon GitHub"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="inline-block w-8 h-8 text-secondary dark:text-accent/80 hover:scale-110 transition ml-2" />
          </motion.a>
        </motion.div>
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
            <RiContractFill className="inline-block w-6 h-6 mr-2" />
            <span>Recrutez moi</span>
          </motion.a>
          <motion.a
            href="#projects"
            className="mt-6 flex gap-1 items-center justify-center  bg-primary text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Voir mes projets</span>
            <ArrowRightCircleIcon className="inline-block w-6 h-6 mr-2" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
