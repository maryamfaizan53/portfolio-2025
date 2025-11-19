---
title: SEO Specification — Portfolio-2025
type: seo-spec
owner: Maryam Faizan
created: 2025-11-19
---

# SEO Specification — Portfolio-2025

Meta & Open Graph
- Each page must include a unique `<title>` and `<meta name="description">` (50–160 chars).
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:type`, and `og:url` for share previews.
- Twitter card: `twitter:card` set to `summary_large_image` with matching image.

Structured Data
- Add `schema.org` JSON-LD for `Person` on the site root (name, jobTitle, url, sameAs links) and `WebSite` (search action optional).

Performance Targets
- Lighthouse targets: Performance ≥ 80 (mobile) and ≥ 90 (desktop); CLS < 0.05; TBT < 200ms.
- Image and video budgets: defer non-critical assets; lazy-load off-screen images.

Content & Indexing
- Use clear H1 per page; descriptive URLs and consistent breadcrumbing.
- Create project pages or canonical summaries for deeper indexing of case studies.
- `robots.txt`: allow index, disallow sensitive endpoints; provide sitemap.xml.

Localization & Canonical
- If localized in the future, use `hreflang` and canonical tags per page.

Monitoring
- Set up basic search console / indexing monitoring, and weekly crawl/broken-link reports.

Acceptance Criteria
- All pages have working meta and OG tags.
- Pages score within defined Lighthouse targets on CI or pre-release checks.
