---
title: Animation & Motion Specification — Portfolio-2025
type: animation-spec
owner: Maryam Faizan
created: 2025-11-19
---

# Animation & Motion Spec — Portfolio-2025

Principles
- Purposeful: Motion should communicate hierarchy and affordance, not distract.
- Subtlety: Favor gentle easing and small scale/translation over large, attention-grabbing motions.
- Performance-first: Favor transform-based animations (translate, scale, opacity) and avoid layout-triggering transitions.

Global Motion Rules
- Respect `prefers-reduced-motion`: reduce or eliminate non-essential motion.
- Default durations: short (150–220ms), medium (300–450ms), long (600–800ms).
- Easing: use standard curves — ease-out for entrances, linear for continuous loops, ease-in-out for toggles.

Component Patterns
- Hero entrance
  - Staggered fades and upward motion for profile, heading, and CTAs.
  - Duration: 600–900ms per item with 100–300ms stagger.

- Project cards
  - Hover: translateY -6 to -10px + scale 1.02 over 180–260ms, shadow grows slightly.
  - Focus: same as hover but with a more visible outline (no motion required if `prefers-reduced-motion`).

- Buttons & CTAs
  - Tap/press: quick scale down to 0.98 and return (150ms).

- Page transitions (optional)
  - Quick cross-fade with slight scale (300–400ms), only when internal navigation present.

- Scroll indicators
  - Subtle loop (0→10px→0) with low opacity, slow rhythm (1.8–2s).

Performance & Implementation Notes
- Prefer CSS transforms and GPU-accelerated properties.
- Avoid animating `width`, `height`, `top`, `left` where possible.
- Use limited simultaneous animations to avoid jank on low-end devices.

Testing & Acceptance
- Verify that reduced-motion user settings disable non-essential animations.
- Validate 60fps on mid-range devices for typical animated sequences (hero entrance, hover effects).
