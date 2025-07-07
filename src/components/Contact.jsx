import { CiLocationOn, CiMail, CiMap, CiPhone } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xovwojdy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-backgroundLight dark:bg-backgroundDark text-primary dark:text-textLight"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-accent mb-8">
          {t("contact.title")}
        </h2>

        <p className="text-center text-sm md:text-base mb-10">
          {t("contact.intro")}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          <a
            href="mailto:cabrelprowo@gmail.com"
            className="flex flex-col items-center gap-2 hover:scale-105 transition duration-300"
          >
            <CiMail className="h-12 w-12 text-secondary dark:text-accent" />
            <span className="text-sm text-secondary dark:text-accent">
              {t("contact.email")}
            </span>
            <span className="text-sm text-secondary dark:text-accent">
              cabrelprowo@gmail.com
            </span>
          </a>

          <a
            href="tel:263 382 8170"
            className="flex flex-col items-center gap-2 hover:scale-105 transition duration-300"
          >
            <CiPhone className="h-12 w-12 text-secondary dark:text-accent" />
            <span className="text-sm text-secondary dark:text-accent">
              {t("contact.call")}
            </span>
            <span className="text-sm text-secondary dark:text-accent">
              +1 (263) 382 8170
            </span>
          </a>

          <div className="flex flex-col items-center gap-2 hover:scale-105 transition duration-300">
            <CiLocationOn className="h-12 w-12 text-secondary dark:text-accent" />
            <span className="text-sm text-secondary dark:text-accent">
              {t("contact.meet")}
            </span>
            <span className="text-sm text-secondary dark:text-accent">
              Montréal, Canada
            </span>
          </div>

          <a
            href="/"
            className="flex flex-col items-center gap-2 hover:scale-105 transition duration-300"
          >
            <CiMap className="h-12 w-12 text-secondary dark:text-accent" />
            <span className="text-sm text-secondary dark:text-accent">
              {t("contact.website")}
            </span>
            <span className="text-sm text-secondary dark:text-accent">
              francel-prowo.com
            </span>
          </a>
        </div>

        <hr />

        <div className="text-center text-base md:text-3xl my-10 text-secondary dark:text-accent">
          {t("contact.leaveMessage")}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white dark:bg-[#1f2937] p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder={t("contact.form.name")}
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.form.email")}
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            name="message"
            rows="5"
            placeholder={t("contact.form.message")}
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-primary dark:bg-secondary text-white py-3 px-6 rounded-full hover:scale-105 transition w-fit self-center disabled:opacity-50"
          >
            {status === "sending" ? "..." : t("contact.form.submit")}
          </button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 dark:text-green-400 text-sm text-center"
            >
              {t("contact.form.success")}
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 dark:text-red-400 text-sm text-center"
            >
              {t("contact.form.error")}
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
}
