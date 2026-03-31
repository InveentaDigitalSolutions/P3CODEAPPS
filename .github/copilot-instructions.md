<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Power Apps Code App — "App From Scratch"

## Project Overview
- **Type**: Power Apps Code App (Vite + React + TypeScript)
- **Client Library**: `@microsoft/power-apps`
- **Build Tool**: Vite with `@microsoft/power-apps-vite` plugin
- **Environment**: Code App (ID: `94283d50-c20e-e585-aade-876895af0d0d`)
- **Tenant**: `47176c00-abb5-4125-8ce3-a795dffd8b87`

## Development Workflow
- `npm run dev` — Start local dev server
- `npm run build` — Production build (tsc + vite build)
- `npx power-apps push` — Deploy to Power Apps environment
- `npx power-apps list-codeapps` — List deployed code apps
- `npx power-apps add-data-source` — Add data connections

## Conventions
- Use TypeScript strict mode
- Use React functional components with hooks
- Keep Power Fx / Power Apps integration via `@microsoft/power-apps` APIs
- Build output goes to `./dist`
- Entry point is `index.html`

## Key Files
- `power.config.json` — Power Apps app config (environment, app ID, connections)
- `src/main.tsx` — App entry point
- `src/App.tsx` — Root component
- `vite.config.ts` — Vite configuration with Power Apps plugin
