"use client";

import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 text-center sm:p-14">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(40rem 20rem at 50% -20%, rgba(99,102,241,0.18), transparent 60%)",
            }}
          />
          <div className="relative">
            <p className="font-mono text-sm text-accent-soft">06 / contact</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-soft">
              I&apos;m open to internships, new-grad roles, and interesting projects.
              The fastest way to reach me is email.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
              >
                <Mail size={16} /> {site.email}
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent-soft hover:bg-surface"
              >
                <Download size={16} /> Résumé
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {[
                { href: site.github, icon: Github, label: "GitHub" },
                { href: site.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `tel:${site.phone.replace(/\s/g, "")}`, icon: Phone, label: "Phone" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-border p-2.5 text-soft transition-colors hover:border-accent-soft hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
