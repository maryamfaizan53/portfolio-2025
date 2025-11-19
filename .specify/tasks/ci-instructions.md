---
title: CI & Local Test Instructions
type: instructions
owner: Maryam Faizan
created: 2025-11-19
---

# CI & Local Test Instructions (PowerShell)

Use these commands in PowerShell on Windows to run the checks locally. Some steps (Lighthouse and axe) require installing tools via `npx` which will fetch them automatically.

Install dependencies:
```powershell
npm ci
```

Run lint, TypeScript check, and build:
```powershell
npm run lint
npm run test:ts
npm run build
```

Run the production server locally (for Lighthouse):
```powershell
npm run ci:start
```

In a separate PowerShell window, run Lighthouse CI (autorun):
```powershell
npx -y @lhci/cli autorun --config=.lighthouseci.json
```

Run a quick accessibility audit using axe (install via npx):
```powershell
# Start server first (see above), then in another window run:
npx -y @axe-core/cli http://localhost:3000/
```

Notes
- The GitHub Actions workflows `ci.yml` (lint/build/tsc) and `lighthouse.yml` (LHCI) are added under `.github/workflows/`.
- LHCI will be fetched via `npx` in CI; no global installs required.
- If you use `pnpm` or `yarn`, replace `npm ci` with your package manager commands.
