# Repository Guidelines

## Project Structure & Modules

This repository is a React frontend built with Create React App. Application code lives in `src/`: reusable UI and layout components in `components/`, route-level screens in `pages/` (grouped into `public/`, `user/`, and `admin/`), shared state in `context/`, and API or Firebase integrations in `services/`. Global styles sit beside the app entry points; component-specific styles live alongside their components. Static files belong in `public/`; bundled fonts and other imported assets belong in `src/assets/`. Tests currently sit beside source files (for example, `src/App.test.js`).

## Build, Test, and Development

- `npm install` installs dependencies from `package-lock.json`.
- `npm start` launches the local development server.
- `npm test -- --watchAll=false` runs Create React App/Jest tests once.
- `npm run build` creates the production bundle in `build/`.

Configure local services through `.env`, using `.env.example` as the template. Never commit real credentials or tokens.

## Coding Style & Naming

Use the existing JavaScript and React patterns; project lint configuration comes from `react-app` and `react-app/jest`. Indent with two spaces, use semicolons, and keep JSX readable. Name components and page files in PascalCase (for example, `RankingPage.js`), services and utilities in camelCase (for example, `authService.js`), and custom hooks with the `use` prefix. Keep related CSS beside its component or page and prefer existing Bootstrap conventions where they fit.

## Testing Guidelines

Tests use Jest and React Testing Library through Create React App. Name test files `*.test.js` and place them beside the code they cover. Add tests for user-visible behavior and service edge cases; run `npm test -- --watchAll=false` before submitting changes. No coverage threshold is currently configured.

## Commits & Pull Requests

Recent history uses short imperative subjects, often with Conventional Commit prefixes such as `feat:`; keep titles focused (for example, `fix: handle expired session`). Pull requests should explain the user-facing change, link related issues when available, list validation performed, and include screenshots for visual changes. Call out any required backend or environment configuration.

## Configuration & Security

Use `.env.example` to document required environment variable names. Keep secrets out of source, commits, screenshots, and logs. Coordinate API changes with the Java backend and update the relevant service module when endpoints or response shapes change.
