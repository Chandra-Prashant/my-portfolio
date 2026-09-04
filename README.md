# Personal Portfolio

A single-page portfolio/resume site built with Next.js (App Router) and
Tailwind, driven entirely by a few typed data arrays at the top of
`src/app/page.tsx` (`experienceData`, `publicationsData`, `projectData`,
`skillsData`) rather than a CMS - editing the site means editing those
arrays directly.

## What it actually does

- Five sections (About, Experience, Publications, Projects, Skills)
  rendered from the data arrays.
- A scroll listener (`handleScroll`) tracks which section is currently in
  view and highlights the matching nav item accordingly.
- Icons via `react-icons/fi`.

## Setup

```bash
npm install
npm run dev
# http://localhost:3000
```

## Current state

If you're looking for the "Matrix raining code" background effect
mentioned in an earlier version of this README - it's not currently in
`src/app/page.tsx`. Either it got removed at some point or was never
merged; worth re-adding if it's still wanted, or dropping the claim if
not.
