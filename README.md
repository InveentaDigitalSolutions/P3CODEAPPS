# App From Scratch — Power Apps Code App

A Power Apps Code App built with React + TypeScript + Vite, deployed to Power Platform.

## Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Start local dev server
npm run build        # Production build
npx power-apps push  # Deploy to Power Apps
```

## Environment

- **Target**: Code App environment (`94283d50-c20e-e585-aade-876895af0d0d`)
- **Tenant**: `47176c00-abb5-4125-8ce3-a795dffd8b87`
- **App URL**: [Play in Power Apps](https://apps.powerapps.com/play/e/94283d50-c20e-e585-aade-876895af0d0d/app/af871ecb-64db-48cb-9234-3026265213df)

## VS Code Tasks

- **dev** — Start local dev server (background)
- **build** — Production build (default build task, `Cmd+Shift+B`)
- **push** — Build and deploy to Power Apps

## Tech Stack

- React 19 + TypeScript
- Vite with `@microsoft/power-apps-vite` plugin
- `@microsoft/power-apps` client library
- Power Platform CLI (`pac`)

---

*Template base: React + TypeScript + Vite, preconfigured for Power Apps Code Apps.*

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
