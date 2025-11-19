---
title: Component Checklist — UI Implementation Tasks
type: task-list
owner: Maryam Faizan
created: 2025-11-19
---

# Component Checklist — UI Implementation Tasks

Purpose
- Expand `ui-spec.md` into actionable component-level checks and acceptance tests to guide implementation and QA.

Components

- Navigation
  - Acceptance:
    - Sticky, responsive, and transitions from transparent to solid on scroll.
    - Theme toggle persists preference to `localStorage` and updates `document.documentElement` class.
    - Mobile menu accessible (aria-expanded, focus trap or close on navigation).
  - Tests:
    - Keyboard open/close of mobile menu; focus order returns to menu button after close.
    - Theme persisted on reload.

- Hero
  - Acceptance:
    - Video background loads with a performant fallback (gradient or image) when `onLoadedData` is slow.
    - Image alt text and caption available for profile image.
    - Primary CTA visible in first viewport.
  - Tests:
    - Simulate slow network: fallback displays and hero remains readable.
    - Reduced-motion: hero entrance animations disabled.

- Project Card
  - Acceptance:
    - Image uses responsive `srcset`/`sizes`, lazy-loads, and provides `alt`.
    - Hover/focus interactions visible and non-janky.
    - Featured variant visually distinct and responsive.
  - Tests:
    - Keyboard navigation reaches CTAs; CTAs open new tabs.
    - Broken link handling: show "Unavailable" state.

- Skill Chips / Tags
  - Acceptance:
    - Contrast and legibility for small chips.
    - Accessible tooltip for truncated long chips.
  - Tests:
    - Verify screen reader reads chip labels.

- Contact Form
  - Acceptance:
    - Fields: name, email (validated), message, hidden honeypot.
    - Clear success and error states; success message announced to screen readers.
    - No PII stored beyond delivery; endpoint rate-limited.
  - Tests:
    - Invalid email prevents submission and focuses first invalid field.
    - Successful flow shows confirmation and triggers analytics event.

- Footer
  - Acceptance:
    - Compact links, social icons use aria-labels, copyright year updates.
  - Tests:
    - Verify social icon links have accessible names and open in new tabs.

- ChatBot (tray)
  - Acceptance:
    - Toggleable panel, accessible name/role, focus moves into the panel and escapes on close.
  - Tests:
    - Keyboard open/close, ensure focus returns to toggle.

- Theme Provider
  - Acceptance:
    - Consistent theming tokens available for light/dark.
    - All components use `cn` util for merging classNames safely.
  - Tests:
    - Toggle theme and ensure all components update colors correctly.

- Inputs & Buttons
  - Acceptance:
    - Clear disabled states, focus-visible, and accessible labels.
  - Tests:
    - Keyboard-only interaction for all primary actions.

Deliverable
- A checklist for each component with acceptance criteria and minimal test cases to validate implementation.
