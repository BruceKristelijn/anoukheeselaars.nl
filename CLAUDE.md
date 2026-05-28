# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Structure

```
/
├── web/        ← Vue/Vite portfolio app (deploy target)
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── studio/     ← Sanity Studio (scaffold with: cd studio && npm create sanity@latest .)
├── vercel.json ← Root Vercel config (points build at web/)
└── CLAUDE.md
```

## Commands

Run from `web/`:

```bash
cd web
npm run dev      # Start Vite dev server
npm run build    # Production build
npm run preview  # Preview production build locally
```

No test framework is configured.

## Architecture

Portfolio website for Anouk Heeselaars (UI/UX, visual design, branding). Built with **Vue 3 + Vite + Tailwind CSS v4**, deployed on Vercel.

### Routing & Theming

Each route in `web/src/routes.js` carries metadata that drives the site's dynamic theme:
- `bgColor` — sets the `--body-bg` CSS custom property (background of the entire page)
- `activeLinkColor` — sets `--active-url` (highlights the current nav link)

`App.vue` watches `$route` and applies these values to `document.documentElement` style. When adding a new page/route, always include both metadata fields.

### Views vs Components

- `web/src/views/` — full-page route components (one per project + HomeView)
- `web/src/components/` — shared layout pieces:
  - `PageWrapper.vue` — standard layout shell for project detail pages
  - `MyWorkCard.vue` — card used in the home portfolio grid
  - `SimpleCard.vue` — generic card

### Asset Preloading

`App.vue` uses `import.meta.glob('**/*.png', { eager: true })` on mount to preload all PNG assets, avoiding flash-of-missing-image on first navigation.

### SPA Routing

Root `vercel.json` rewrites all paths to `index.html` to support Vue Router's HTML5 history mode. If deploying elsewhere, equivalent server-side rewrite rules are needed.

### Styles

`web/src/style.css` imports Google Fonts (Poppins, Montserrat) and Tailwind. Global CSS variables (`--body-bg`, `--active-url`) are set dynamically per route. Tailwind is integrated via `@tailwindcss/vite` plugin (v4 approach — no `tailwind.config.js` needed).
