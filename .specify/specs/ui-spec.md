---
title: UI Specification — Portfolio-2025
type: ui-spec
owner: Maryam Faizan
created: 2025-11-19
---

# UI Specification — Portfolio-2025

Overview
- Purpose: Define visual system, component behaviours, responsive rules, and micro-interactions to ensure a consistent premium experience across the site.

Design Tokens (conceptual)
- Colors: Primary (brand gradient family), Secondary (accent), Neutral (90-10 scale), Backgrounds for light/dark.
- Typography: Two-tier system. Display (large headings), Text (UI and body). Scales: 16px base; modular scale for headings.
- Spacing: 4px baseline grid; scale steps (4, 8, 12, 16, 24, 32, 48, 64).
- Elevation & borders: subtle shadows for elevated cards, 1–3 elevation levels; 1px borders for neutral separation.

Core Components
- Navigation
  - Requirements: sticky top, transparent-to-solid on scroll, compact mobile menu, theme toggle.
  - States: default, scrolled, mobile-open.

- Hero
  - Requirements: optional video background with fallback, centered profile, short title, two CTAs (primary: View Projects, secondary: Contact), social links.
  - Behaviours: staggered entrance of elements, accessible skip links.

- Project Card (Gallery)
  - Layout: image area (cover), meta region (title, short summary, tech tags), CTAs (Live, Code).
  - Interactions: hover lift (translateY -8px), subtle image scale, card-level focus-visible.
  - Variants: featured (larger), standard.

- Skill Chips / Tags
  - Style: rounded chips, single-line, optional tooltip for long names.

- Contact Block / Form
  - Requirements: minimal fields (name, email, message), clear privacy note, success and inline error states.

- Footer
  - Requirements: compact, contact CTA, small copyright, social links.

Responsive Rules
- Breakpoints: mobile (≤640px), tablet (641–1024px), desktop (≥1025px).
- Layouts:
  - Mobile: single column stacking; large tappable targets; hidden decorative visuals when necessary.
  - Tablet: two columns for select sections (e.g., skill grid vs. about text).
  - Desktop: multi-column grids (projects grid 2–3 columns), generous whitespace.

Accessibility & UX
- Focus states visible for keyboard navigation; focus order mirrors visual order.
- Color contrast: ensure text contrasts meet WCAG AA; check all accent-on-accent combinations.
- Reduced motion mode: respects `prefers-reduced-motion`.

Interaction Patterns
- Buttons: primary (filled gradient), secondary (outline), tertiary (link style). All have disabled state.
- Links: underline on focus; no ambiguous color-only affordances.
- Modals/Overlays: trap focus, dismissible with Esc and click outside, labeled with aria attributes.

Microcopy & Tone
- Buttons: concise action verbs ("View Work", "Get In Touch").
- Project cards: 1–2 sentence summary and 3–5 tech keywords.

Deliverables
- Finalized component visual spec for Nav, Hero, Project Card, Skill chips, Contact form, Footer.

Acceptance Criteria
- Components exist in design tokens and have responsive variants.
- All interactive controls are reachable via keyboard and have visible focus states.
- Visual treatments degrade gracefully on small devices and under reduced motion.
