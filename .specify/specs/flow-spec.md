---
title: Flow Specification — Key User Flows
type: flow-spec
owner: Maryam Faizan
created: 2025-11-19
---

# Flow Specification — Key User Flows

Overview
- Purpose: Define primary user journeys to ensure content and UI support conversion and discovery.

Primary Flows (high-level)
1. Landing → Explore Projects → Contact
  - Entry: hero explains role and primary CTA.
  - Mid: user scrolls to Projects, reads teasers, and visits project details or live demos.
  - Close: user clicks Contact CTA or email link.

2. Landing → About → Skills → Hire
  - Entry: quick bio and outcomes.
  - Mid: skill groups and experience validate fit.
  - Close: user initiates contact with clear pricing/engagement hints.

3. Recruiter Deep-Dive
  - Entry: navigation to Experience and Projects.
  - Mid: checks for technical details, links to repos, and outcomes.
  - Close: direct GitHub link or email.

State & Navigation Considerations
- Sticky navigation to allow quick access to sections.
- Each section exposes a CTA at logical intervals (hero, projects, contact).
- Anchor links should scroll smoothly and respect reduced-motion preferences.

Fallbacks & Offline Flow
- If external resources (project live sites) are slow or blocked, show cached thumbnails and metadata.

Analytics & Event Tracking
- Track events: "View Project", "Click Live", "Click Code", "Contact Submit", "Theme Toggle", "Chat Open".

Acceptance Criteria
- Smooth anchor navigation between primary sections for all breakpoints.
- CTAs appear in each major section and produce expected outcomes (open contact modal/email/new tab).
