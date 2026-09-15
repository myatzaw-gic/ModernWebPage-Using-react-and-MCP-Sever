# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Repository overview

This repo contains:

1. **`worldcup-landing`** — a Vite + React static landing page for FIFA World Cup 2026 (`src/`, `index.html`, `vite.config.js`, `package.json`).

There is also a `.mcp.json` at the repo root, which configures an MCP Postgres server *for Codex's own tool use* (connects to `local_dev_db`) — this is agent tooling config, not application code.

## Commands

Frontend (run from repo root):
- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run preview` — preview a production build locally

There is no lint or test script configured in `package.json` — do not assume `npm test`/`npm run lint` exist.

## Frontend architecture

- Single-page app, no router. `src/App.jsx` composes four sections rendered top-to-bottom in a fixed order: `Hero` → `Highlights` → `CountdownSchedule` → `Footer` (`src/components/`). Each section is a self-contained function component with no shared local state — page structure is entirely the JSX order in `App.jsx`.
- All content is mock/static data centralized in `src/data/mockData.js`: `TOURNAMENT` (top-line facts), `HIGHLIGHTS` (feature cards), `TEAMS`, and `SCHEDULE` (match list). There is no API/backend call anywhere in the frontend — every component just imports from this file. Adding or changing displayed content usually means editing this file, not the components.
- `CountdownSchedule.jsx` derives the "next match" and a live countdown from `SCHEDULE`/`TOURNAMENT` at render time (`getNextMatch`, `useCountdown`) rather than from any prop/state passed down — it's the one component with actual logic (a `setInterval`-driven ticking clock).
- Styling is a single global stylesheet (`src/styles/index.css`) using BEM-ish class names (`block__element--modifier`, e.g. `hero__title-accent`, `countdown__unit`). There are no CSS modules, no CSS-in-JS, and no utility framework — new UI should follow the same global-class + CSS-variable convention (colors/fonts/spacing are defined as CSS custom properties in `:root`).

## Secrets

`.env` holds `DATABASE_URL` (gitignored). `.mcp.json` currently has the same Postgres connection string hardcoded inline rather than referencing the env var — this is intentional per prior direction from the repo owner; leave it as-is unless explicitly asked to change it.