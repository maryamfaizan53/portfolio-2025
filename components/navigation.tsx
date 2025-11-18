"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    setMounted(true);
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const newIsDark = !isDark;

    if (newIsDark) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setIsDark(newIsDark);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl font-bold bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            MF
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              ref={menuButtonRef}
              onClick={() => {
                const next = !isOpen;
                setIsOpen(next);
                // focus first link when opening
                if (next)
                  setTimeout(() => firstMenuLinkRef.current?.focus(), 0);
              }}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-nav"
            className="md:hidden pb-4 space-y-2 border-t border-neutral-200 dark:border-neutral-800"
            role="menu"
          >
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                ref={i === 0 ? firstMenuLinkRef : undefined}
                role="menuitem"
                className="block px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  // return focus to button
                  setTimeout(() => menuButtonRef.current?.focus(), 0);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
