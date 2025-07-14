"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Planes", href: "#planes" },
  { label: "Quienes somos", href: "#quienes-somos" },
  { label: "Contacto", href: "#contacto" },
];

function DarkModeButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleDark = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  };

  return (
    <button
      onClick={toggleDark}
      aria-label="Alternar modo oscuro"
      className="ml-2 px-2 py-1 rounded-lg border border-input bg-muted hover:bg-muted/70 transition-colors flex items-center justify-center cursor-pointer"
      type="button"
      style={{ cursor: 'pointer' }}
    >
      {isDark ? (
        <MoonIcon className="w-6 h-6 text-title-text dark:text-title-text" />
      ) : (
        <SunIcon className="w-6 h-6 text-title-text dark:text-title-text" />
      )}
    </button>
  );
}

export default function Navbar() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-30 w-full bg-background/80 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 flex-1 justify-start" 
          style={{ height: "2.25rem" }}
          onClick={(e) => handleClick(e, '#')}
        >
          <Image src="/banda-logo.png" alt="Logo Banda" height={36} width={36} style={{ height: "2.25rem", width: "auto" }} />
          <span className="font-bold text-xl tracking-tight" style={{ color: 'hsl(var(--primary))', lineHeight: '2.25rem', fontSize: '1.5rem' }}>Banda</span>
        </a>
        <div className="hidden md:flex justify-center gap-8 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-muted-text font-medium transition-colors  hover:text-accent whitespace-nowrap"
              style={{
                transition: 'color 0.2s',
              }}
              onMouseOver={e => (e.currentTarget.style.color = 'hsl(var(--accent))')}
              onMouseOut={e => (e.currentTarget.style.color = '')}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-2 items-center flex-1 justify-end">
          <DarkModeButton />
        </div>
      </div>
    </nav>
  );
} 