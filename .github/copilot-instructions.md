# Workspace Instructions for my-bingo-mixer

## Purpose
This repository is a Vite-based React playground for a social bingo game called Bingo Mixer. The app is designed for in-person mixers and uses Tailwind CSS, React 19, and Vitest.

## What to know first
- Entry point: `src/App.tsx`
- Core game logic: `src/hooks/useBingoGame.ts` and `src/utils/bingoLogic.ts`
- UI components: `src/components/`
- Test setup: `src/test/setup.ts`
- Build tooling: `vite.config.ts`
- Dev container support is available in `.devcontainer/devcontainer.json`

## Recommended workflows
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production assets: `npm run build`
- Run linter: `npm run lint`
- Run tests: `npm run test`

## Important conventions
- Use React function components and hooks.
- Keep game state in `useBingoGame` and pass UI behavior through props.
- Preserve the existing directory structure for `components`, `hooks`, `utils`, and `data`.
- Tailwind is configured via Vite and should be used for styling.
- The Vite config sets `base` dynamically from `VITE_REPO_NAME` for GitHub Pages deployments.

## Good first tasks for this repo
- Add new bingo questions to `src/data/questions.ts`
- Improve component accessibility in `src/components/`
- Add UI tests for the game flow

## What not to do
- Do not change the repo structure without a clear reason.
- Avoid adding new major frameworks; this app is intentionally minimal.
- Do not ignore the existing dev container settings when recommending local setup steps.

## Helpful files
- `README.md` — project overview and usage
- `package.json` — scripts, dependencies, and dev dependencies
- `vite.config.ts` — Vite plugins and test configuration
- `src/App.tsx` — application top-level routing between screens
- `src/utils/bingoLogic.ts` — bingo board generation and win detection
