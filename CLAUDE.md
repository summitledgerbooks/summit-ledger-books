# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Summit Ledger Co. — a bookkeeping business website built with **Astro 5** and deployed to **Netlify**. Static site (no SSR). Site URL: `https://summitledger.co`.

## Commands

```bash
npm install          # install dependencies (no lock file yet)
npm run dev          # start Astro dev server
npm run build        # production build → dist/
npm run preview      # preview production build locally
```

## Architecture

- **Astro 5** static site with TypeScript (strict config).
- Integrations: `@astrojs/sitemap` (auto sitemap), `@astrojs/rss` (RSS feed).
- `src/styles/global.css` — single global stylesheet using CSS custom properties (no CSS framework). Design tokens are defined as `:root` variables.
- `src/components/SEO.astro` — reusable `<head>` meta/OG tags component. Accepts `title`, `description`, `ogType`, `canonicalUrl` props.
- Pages and layouts directories are not yet created — new pages go in `src/pages/`, layouts in `src/layouts/`.
- `public/` — static assets served at root.
- Deployed via Netlify (`netlify.toml` configures build command and publish dir).

## Conventions

- CSS uses BEM-ish class names (`.site-header`, `.card-grid`, `.post-card`). Utility classes: `.container`, `.btn`, `.btn-primary`, `.prose`, `.tag`.
- Mobile-first responsive design; breakpoint at `48rem`.
- Navigation uses a `.nav-toggle` hamburger pattern for mobile with JS toggling `.open` class on `.site-nav`.
