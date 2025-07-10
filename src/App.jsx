import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./i18n";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="font-sans bg-backgroundLight dark:bg-backgroundDark text-secondary dark:text-primary">
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.description")} />
        <meta name="keywords" content={t("seo.keywords")} />
        <meta name="author" content="Francel Prowo" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={t("seo.ogTitle")} />
        <meta property="og:description" content={t("seo.ogDescription")} />
        <meta
          property="og:image"
          content="https://www.francel-prowo.com/og-image.jpg"
        />
        <meta property="og:url" content="https://www.francel-prowo.com/" />
      </Helmet>

      <Navbar />
      <div className="scroll-smooth">
        <Hero />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
