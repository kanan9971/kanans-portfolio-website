"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-base/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-mono text-sm font-semibold text-white">
          <span className="text-accent-soft">{"</"}</span>kanan
          <span className="text-accent-soft">{">"}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-soft transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-accent/60 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent/15"
          >
            Résumé
          </a>
        </div>

        <button
          className="text-soft md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-border bg-base/95 px-5 pb-5 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 pt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-soft transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="w-fit rounded-full border border-accent/60 px-4 py-1.5 text-sm font-medium text-white"
            >
              Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
