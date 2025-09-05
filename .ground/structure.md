# Architecture Overview

## Systems/components and boundaries

- Frontend: Qwik + Qwik City (file-based routing) with Vite.
- Styling: Tailwind CSS v4 via `@tailwindcss/vite` plugin.
- Adapter: Static site generation with `@builder.io/qwik-city/adapters/static`.
- Hosting: Static hosting (e.g., GitHub Pages). `vite.config.ts` origin currently points to GitHub Pages.

## Repo map (selected)

- `src/`
  - `routes/` — pages and layouts
  - `components/` — shared UI components
  - `entry.*.tsx` — platform entry points
  - `global.css` — Tailwind layers and global styles
- `public/` — static assets (favicons, manifest, robots)
- `adapters/static/` — static adapter config for SSR build

## Data flows and key integrations

- Content authored in-code using Qwik components and route files.
- Canonical bio maintained in `.ground/jon-blank-bio.md` and manually synced into pages/components.
- External links for music distribution and socials kept in constants/util modules.

## Rendering

- Dev: SSR dev server via Vite
- Build: Static prerender for routes; no server required at runtime

## Environments

- Local development (Node 18+/20+)
- Production: Static hosting (no server state)
