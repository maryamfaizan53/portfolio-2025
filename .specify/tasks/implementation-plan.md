---
title: Implementation Plan — UX/Performance/Accessibility Improvements
type: implementation-plan
owner: Maryam Faizan
created: 2025-11-19
---

# Implementation Plan — UX / Performance / Accessibility

Summary
- This plan converts the specs into a pragmatic set of PR-ready implementation tasks prioritized to increase polish, accessibility, and conversion.

Phases & Tasks

Phase 1 — Quick wins (1–2 days)
- Optimize images: add `loading="lazy"`, WebP fallbacks, and `srcset` for key images (`/hero`, project images).
- Add `prefers-reduced-motion` handling for framer-motion usages.
- Ensure `alt` text on all images and `aria-label` on social icons.

Phase 2 — Accessibility & UX (2–4 days)
- Improve focus states across components (Navigation, Project Card, CTAs).
- Ensure contact form validation and accessible error messaging.
- Add keyboard handling for ChatBot and mobile menu.

Phase 3 — Performance & Integrations (2–3 days)
- Replace hero video with conditional lazy-load and provide static fallback image.
- Add analytics event hooks (small utility `lib/analytics.ts`) and fire events for project clicks, contact submits, theme toggles.
- Add serverless endpoint for contact (e.g., `app/api/contact/route.ts`) with honeypot and rate limiting.

Phase 4 — QA & CI (1–2 days)
- Add CI gates: TypeScript check, ESLint, unit tests (if applicable), Lighthouse performance check (via `lighthouse-ci`), and axe accessibility check.

Files Likely to Change
- `components/sections/hero.tsx` — add lazy-loading, fallback, reduced-motion.
- `components/sections/projects.tsx` — responsive images, broken-link handling, keyboard focus.
- `components/navigation.tsx` — mobile menu accessibility, sticky behavior tests.
- `components/chatbot.tsx` — focus management.
- `app/api/contact/route.ts` (new) — serverless contact endpoint.
- `lib/utils.ts` — small analytics helper and `cn` already exists.

PR Strategy
- Make focused, small PRs per phase with clear descriptions and acceptance criteria:
  - PR 1: Image & media optimizations (Phase 1)
  - PR 2: Accessibility fixes (Phase 2)
  - PR 3: Contact endpoint + analytics (Phase 3)
  - PR 4: CI & testing (Phase 4)

Estimates & Risks
- Estimated total: 6–11 developer-days depending on test automation.
- Risks: external live project links may require manual verification; video formats can be large — ensure CDN or compressed assets.

Acceptance Criteria (for merge)
- All automated checks pass (TS, ESLint, CI gates).
- No critical accessibility violations.
- Lighthouse performance meets minimum targets.
