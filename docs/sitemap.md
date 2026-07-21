# Sitemap

Scheme numbers below match the 4 schemes implemented in `app/globals.css` (`scheme-1`–`scheme-4`) and `docs/design-implementation.md` — verified against each component's actual `scheme-N` class, not the original 6-scheme plan.

## Page chrome & route groups

The root layout (`app/layout.js`) is chrome-agnostic — it renders only the `<html>/<body>` shell. Navbar and footer live in **per-group layouts** so different page types can present different headers. Route groups (`(name)` folders) don't appear in URLs.

| Group | Layout | Navbar | Footer | Pages |
|-------|--------|--------|--------|-------|
| `(main)` | `app/(main)/layout.js` | `components/navbar-01` (full) | `components/footer-01` | Home, Meet the Team, How I Work, Services, Blog, Work, Style Guide |
| `(tertiary)` | `app/(tertiary)/layout.js` | `components/navbar-minimal` (logo + "Get in Touch") | `components/footer-01` | Service Areas |

To add a new page type (e.g. a landing-page group), create `app/(landing)/layout.js` with its own header and drop pages under it.

## Home

| # | Section | Component | Scheme |
|---|---------|-----------|--------|
| 1 | Navbar | `components/navbar-01` | 1 |
| 2 | Hero Section | `components/home/header-15` | 1 |
| 3 | Newsletter | `components/home/cta-14` | 2 |
| 4 | Logo | `components/shared/logo-carousel` | 1 |
| 5 | Workshops and Livestreams | `components/home/event-07` | 3 |
| 6 | Toolkits & Playbooks | `components/home/portfolio-11` | 4 |
| 7 | Outcomes - Some Examples | `components/home/portfolio-22` | 3 |
| 8 | Latest Blogs | `components/home/blog-34` | 1 |
| 9 | Videos | `components/home/event-27` | 3 |
| 10 | Contact Section | `components/home/contact-17` | 1 |
| 11 | Footer | `components/footer-01` | 2 |

- Navbar [Scheme 1]
- Hero Section [Scheme 1]: Striking introduction to your personal brand with your name, tagline, and a compelling visual or photo.
- Newsletter [Scheme 2]: Showcase up to three core skills, unique selling points, or areas of expertise.
- Logo [Scheme 1]
- Workshops and Livestreams [Scheme 3]: Brief personal bio highlighting your experience, background, and mission.
- Toolkits & Playbooks [Scheme 4]: Selected testimonials or endorsements from clients, colleagues, or mentors.
- Outcomes - Some Examples [Scheme 3]: Optional: Introduce yourself in more detail or highlight collaborators if relevant.
- Latest Blogs [Scheme 1]: Visual showcase of your work, portfolio samples, or achievements.
- Videos [Scheme 3]: Prompt for visitors to contact you, view your portfolio, or connect on social media.
- Contact Section [Scheme 1]: Contact details or direct ways for visitors to reach out to you.
- Footer [Scheme 2]

### Meet the Team

| # | Section | Component | Scheme |
|---|---------|-----------|--------|
| 1 | Navbar | `components/navbar-01` | 1 |
| 2 | Header Section | `components/meet-the-team/header-46` | 1 |
| 3 | Me & Ai | `components/meet-the-team/layout-618` | 1 |
| 4 | Timeline | `components/meet-the-team/timeline-05` | 1 |
| 5 | Logo | `components/shared/logo-carousel` | 1 |
| 6 | CTA Section | `components/meet-the-team/cta-01` | 3 |
| 7 | Footer | `components/footer-01` | 2 |

- Navbar [Scheme 1]
- Header Section [Scheme 1]: Welcoming headline introducing the team and the value they bring.
- Me & Ai [Scheme 1]: Built as a before-and-after — two panels (image + title + subtitle) split by a divider, with a summary block below. Content from `content/meet-the-team/me-and-ai.mdx` via `lib/me-and-ai.js`. Placeholder copy and images — not yet written. Supersedes the originally planned `layout-615`, which was never built.
- Timeline [Scheme 1]: Scroll-driven timeline. Content from `content/meet-the-team/timeline.mdx` via `lib/timeline.js`.
- Logo [Scheme 1]
- CTA Section [Scheme 3]: Encouragement to connect with the team or learn more about working together. Sits last, directly above the footer.
- Footer [Scheme 2]

### How I Work

| # | Section | Component | Scheme |
|---|---------|-----------|--------|
| 1 | Navbar | `components/navbar-01` | 1 |
| 2 | Header Section | `components/how-i-work/header-64` | 1 |
| 3 | How It Works Section | `components/how-i-work/layout-300` | 2 |
| 4 | Feature Section | `components/how-i-work/layout-192` | 3 |
| 5 | Testimonial Section | `components/how-i-work/testimonial-01` | 2 |
| 6 | Logo | `components/shared/logo-carousel` | 1 |
| 7 | CTA Section | `components/how-i-work/cta-01` | 3 |
| 8 | Footer | `components/footer-01` | 2 |

- Navbar [Scheme 1]
- Header Section [Scheme 1]: Page intro: "Discover my collaborative, results-driven process for helping you achieve your goals."
- How It Works Section [Scheme 2]: Step-by-step outline of your process (e.g., Initial Consultation, Strategy Development, Implementation, Ongoing Support).
- Feature Section [Scheme 3]: Highlight a unique or signature aspect of your approach (e.g., personalized strategies, transparency, or accountability).
- Testimonial Section [Scheme 2]: Real feedback from clients about working with you.
- Logo [Scheme 1]
- CTA Section [Scheme 3]: Prompt to schedule a consultation or get in touch to start working together.
- Footer [Scheme 2]

### Services

| # | Section | Component | Scheme |
|---|---------|-----------|--------|
| 1 | Navbar | `components/navbar-01` | 1 |
| 2 | Header Section | `components/services/header-64` | 1 |
| 3 | Services Section | `components/services/layout-239` | 2 |
| 4 | Features List Section | `components/services/layout-237` | 3 |
| 5 | Logo | `components/shared/logo-carousel` | 1 |
| 6 | Testimonial Section | `components/services/testimonial-01` | 3 |
| 7 | Pricing Section | `components/services/pricing-23` | *not built* |
| 8 | Service Areas Link | `components/services/service-areas-link` | 1 |
| 9 | CTA Section | `components/services/cta-01` | 2 |
| 10 | Footer | `components/footer-01` | 2 |

- Navbar [Scheme 1]
- Header Section [Scheme 1]: Page title and a brief introduction to your services and philosophy.
- Services Section [Scheme 2]: Overview of the main services you offer with short descriptions (e.g., coaching, consulting, workshops).
- Features List Section [Scheme 3]: Up to three key benefits or unique aspects of your services.
- Logo [Scheme 1]
- Testimonial Section [Scheme 3]: Client testimonials or success stories to build trust.
- Pricing Section — **not implemented.** `pricing-23.jsx` doesn't exist in `components/services/` and `app/(main)/services/page.js` doesn't render it. Transparent pricing or packages (optional, if relevant to your brand), as originally planned.
- Service Areas Link [Scheme 1]: Title, subtitle and a "Service Areas" button linking to the tertiary `/services/service-areas` page (in-person coverage).
- CTA Section [Scheme 2]: Call to action inviting visitors to book a consultation, get in touch, or request a quote.
- Footer [Scheme 2]

### Blog

| # | Section | Component | Scheme |
|---|---------|-----------|--------|
| 1 | Navbar | `components/navbar-01` | 1 |
| 2 | Featured Blog List Header Section | `components/blog/blog-18` | 2 |
| 3 | Logo | `components/shared/logo-carousel` | 1 |
| 4 | Blog List Section | `components/blog/blog-66` | *not built* |
| 5 | Footer | `components/footer-01` | 2 |

- Navbar [Scheme 1]
- Featured Blog List Header Section [Scheme 2]: Highlight top or recent blog posts with eye-catching visuals or summaries.
- Logo [Scheme 1]
- Blog List Section — **not implemented.** `blog-66.jsx` doesn't exist in `components/blog/` and `app/(main)/blog/page.js` doesn't render it. Display a list/grid of all blog posts with titles, excerpts, and links to full posts, as originally planned.
- Footer [Scheme 2]

### Service Areas

Tertiary page at `/services/service-areas` (route group `(tertiary)`). Uses the minimal navbar instead of the full primary nav.

| # | Section | Component | Scheme |
|---|---------|-----------|--------|
| 1 | Navbar (minimal) | `components/navbar-minimal` | 1 |
| 2 | Header Section | `components/service-areas/header-areas` | 1 |
| 3 | Service Areas List | `components/service-areas/service-areas-list` | 2 / 1 / 2 |
| 4 | CTA Section | `components/service-areas/cta-areas` | 1 |
| 5 | Logo | `components/shared/logo-carousel` | 1 |
| 6 | Footer | `components/footer-01` | 2 |

- Navbar (minimal) [Scheme 1]: logo + "Get in Touch" CTA (→ `/#contact`). No primary nav links.
- Header Section [Scheme 1]: Page title and a "← Back to Services" link.
- Service Areas List: one alternating-scheme section per region — Wales [Scheme 2], Kent [Scheme 1], London [Scheme 2] — each rendering sub-regions/clusters and their towns as a responsive column list.
- CTA Section [Scheme 1]: "Back to Services" button.
- Logo [Scheme 1]: shared `logo-carousel`, same instance used on Home, Meet the Team, How I Work, Blog and Services.
- Footer [Scheme 2]
