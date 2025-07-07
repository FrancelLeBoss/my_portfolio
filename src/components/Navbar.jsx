"use client";

import { useState, useEffect } from "react";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px est le breakpoint md de Tailwind
    };

    // Vérifier la taille à l'initialisation
    checkScreenSize();

    // Écouter les changements de taille d'écran
    window.addEventListener("resize", checkScreenSize);

    // Nettoyer l'event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-backgroundLight dark:bg-backgroundDark text-primary dark:text-textLight shadow-sm backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="cursor-pointer text-2xl font-signature tracking-wide text-secondary dark:text-accent"
        >
          Francel Prowo
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-2 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="hover:bg-accent/20 p-3 transition dark:text-accent/80 text-green-800"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <ThemeToggle mini_format={isMobile} />
        {/* Burger Icon */}
        <button
          className="md:hidden ml-4 text-secondary dark:text-textLight"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-backgroundLight dark:bg-backgroundDark px-6 pb-6 pt-2 space-y-2 shadow-md">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block p-3 text-sm font-medium hover:bg-accent/20 dark:text-accent/80 text-green-800 transition"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
