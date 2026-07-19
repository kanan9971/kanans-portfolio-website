"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-5 pt-24"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-soft"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Open to internships & new grad roles
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
      >
        {site.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="mt-4 max-w-2xl text-xl font-medium sm:text-2xl"
      >
        <span className="text-gradient">{site.tagline}</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mt-5 max-w-2xl text-base leading-relaxed text-soft"
      >
        {site.blurb}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="mt-6 flex items-center gap-2 font-mono text-sm text-muted"
      >
        <MapPin size={15} /> {site.location}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
        >
          View my work
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={site.resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent-soft hover:bg-surface"
        >
          <Download size={16} /> Résumé
        </a>

        <div className="ml-1 flex items-center gap-1">
          {[
            { href: site.github, icon: Github, label: "GitHub" },
            { href: site.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${site.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-full p-2.5 text-soft transition-colors hover:bg-surface hover:text-white"
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
