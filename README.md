# Kanan Suri — Portfolio

Personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

All copy lives in typed data files — no JSX changes needed:

- `src/data/site.ts` — name, tagline, contact links, résumé path
- `src/data/experience.ts` — work history timeline
- `src/data/projects.ts` — project cards
- `src/data/skills.ts` — skills, leadership, certifications

Replace `public/resume.pdf` to update the downloadable résumé.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) — zero config.

```bash
npm run build   # production build
```
