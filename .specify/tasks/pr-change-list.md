---
title: PR Change List — Suggested Pull Requests
type: pr-list
owner: Maryam Faizan
created: 2025-11-19
---

# PR Change List — Suggested Pull Requests

Use these PR descriptions as templates for focused commits. Each PR should be small and include test notes.

PR 1 — Media & Image Optimization
- Summary: Add responsive `srcset`/`sizes`, `loading="lazy"`, and WebP fallbacks for hero and project images. Add a static fallback for the hero video.
- Files: `components/sections/hero.tsx`, `components/sections/projects.tsx`, `public/` (optimized assets)
- Acceptance: Images lazy-load, fallbacks visible on slow networks, Lighthouse image metrics improved.

PR 2 — Accessibility Improvements
- Summary: Add keyboard focus states, ensure `alt` attributes, improve contrast where needed, and make mobile menu accessible.
- Files: `components/navigation.tsx`, `components/sections/projects.tsx`, `components/sections/hero.tsx`, global CSS
- Acceptance: No critical accessibility violations in axe; keyboard-only flows complete.

PR 3 — Contact Endpoint & Spam Protection
- Summary: Add serverless contact API, honeypot field, rate-limiting, and client-side success/error handling.
- Files: `app/api/contact/route.ts` (new), `components/sections/contact.tsx` (update), env sample updates
- Acceptance: Messages forwarded to the configured email and success message displayed.

PR 4 — Analytics Events
- Summary: Add a minimal `lib/analytics.ts` and instrument events for project clicks, contact submits, theme toggles, and chat open.
- Files: `lib/analytics.ts` (new), small updates to components to call analytics hooks
- Acceptance: Events visible in the configured analytics provider; toggling analytics off supported.

PR 5 — CI Checks & Automation
- Summary: Add `lighthouse-ci` config and axe test integration in CI, plus TypeScript and ESLint checks.
- Files: `.github/workflows/ci.yml` (update), `lighthouseci` config, test scripts
- Acceptance: CI fails on regressions in performance/accessibility thresholds.
