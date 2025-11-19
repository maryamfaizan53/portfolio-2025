---
title: Integration Specification — Portfolio-2025
type: integration-spec
owner: Maryam Faizan
created: 2025-11-19
---

# Integration Specification — Portfolio-2025

Overview
- Purpose: Define interactions with external systems (email, analytics, external links, video assets) and safe, privacy-conscious behaviors.

Integrations
- Contact Form
  - Behavior: submit to a lightweight serverless endpoint (or email provider) with spam protection (honeypot + rate limiting).
  - Data storage: do not store messages longer than necessary; forward to primary email address and delete transient logs per privacy policy.

- Analytics & Tracking
  - Capture: page views, project clicks, live/code clicks, contact conversions, theme toggles, chat opens.
  - Provider: configurable (e.g., Plausible, Google Analytics, or self-hosted). Respect Do Not Track; avoid personally identifiable data.

- External Links
  - All external links open in a new tab and include `rel="noopener noreferrer"`.
  - Dead-link mitigation: periodically check project destinations and mark archived/unavailable.

- Media Hosting
  - Hero video: host on performant CDN or use an optimized MP4/WebM with fallbacks.
  - Images: use responsive formats (webp when possible) and CDNs for delivery.

- GitHub Links
  - Ensure canonical repo link and optionally link to a demo branch or documented README.

Security & Privacy
- Avoid collecting sensitive personal data. Provide clear privacy notice near contact form.
- Protect endpoints with basic serverless anti-abuse measures.

Acceptance Criteria
- Contact submissions reliably reach the provided email and display a success confirmation to the user.
- Analytics events fire for defined actions and can be toggled off by a site-level setting.
