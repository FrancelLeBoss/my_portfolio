import i18n from "i18next";

export default function LanguageToggle({ mini_format }) {
  const currentLang = i18n.language || "fr";

  const toggleLang = () => {
    const nextLang = currentLang === "fr" ? "en" : "fr";
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLang}
      className="p-2 rounded bg-accent/20 text-sm transition"
      aria-label="Toggle language"
    >
      {currentLang === "fr" ? (
        <span
          className={`${
            mini_format ? "text-xs" : "text-sm"
          } font-semibold text-gray-800 dark:text-white`}
        >
          English
        </span>
      ) : (
        <span
          className={`${
            mini_format ? "text-xs" : "text-sm"
          } font-semibold text-gray-800 dark:text-white`}
        >
          Français
        </span>
      )}
    </button>
  );
}
