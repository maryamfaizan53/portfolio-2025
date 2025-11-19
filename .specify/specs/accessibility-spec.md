---
title: Accessibility Specification — Portfolio-2025
type: accessibility-spec
owner: Maryam Faizan
created: 2025-11-19
---

# Accessibility Specification — Portfolio-2025

Goal
- Ensure the site meets WCAG 2.1 AA and provides an inclusive experience for keyboard, screen reader, and low-vision users.

Key Requirements
- Semantic HTML: use proper landmarks (nav, main, header, footer) and heading hierarchy (H1 → H2 → H3).
- Keyboard: all interactive controls reachable via Tab, clear focus styles, and logical focus order.
- Color & Contrast: text contrast ratios meet WCAG AA (4.5:1 normal text; 3:1 large text).
- Images: provide meaningful `alt` text for content images; decorative images use empty alt or `aria-hidden`.

Forms & Inputs
- Label every input explicitly. Error messages must be programmatically associated with fields.
- Use accessible success confirmation and error focus management (focus to first invalid field).

Aria & Screen Reader
- Use `aria-label` sparingly; prefer visible labels. Provide `aria-describedby` for supplementary hints.
- For interactive widgets (menu, modal, chat tray), provide proper roles, aria-expanded, and keyboard controls.

Motion
- Respect `prefers-reduced-motion` and provide motion-reduced alternative states.

Testing
- Automated: axe, Lighthouse accessibility, and pa11y checks during CI.
- Manual: keyboard-only navigation, NVDA/VoiceOver smoke tests, and color-blindness checks.

Acceptance Criteria
- No critical accessibility violations in automated audits (CI gates).
- Keyboard navigation covers all primary flows and returns to logical positions after modal close.

Edge Cases
- Video background: provide transcript or summary in content and ensure sufficient foreground contrast.
