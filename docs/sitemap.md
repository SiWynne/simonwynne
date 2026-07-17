# Sitemap

Scheme numbers below match the 4 schemes implemented in `app/globals.css` (`scheme-1`–`scheme-4`) and `docs/design-implementation.md` — verified against each component's actual `scheme-N` class, not the original 6-scheme plan.

## Home

| # | Section | Component | Scheme |
|---|---------|-----------|--------|
| 1 | Navbar | `components/navbar-01` | 1 |
| 2 | Hero Section | `components/home/header-15` | 1 |
| 3 | Newsletter | `components/home/cta-14` | 2 |
| 4 | Logo | `components/home/logo-03` | 1 |
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
| 3 | Me & Ai | `components/meet-the-team/layout-615` | *not built* |
| 4 | CTA Section | `components/meet-the-team/cta-01` | 3 |
| 5 | Logo | `components/meet-the-team/logo-03` | 1 |
| 6 | Footer | `components/footer-01` | 2 |

- Navbar [Scheme 1]
- Header Section [Scheme 1]: Welcoming headline introducing the team and the value they bring.
- Me & Ai — **not implemented.** `layout-615.jsx` doesn't exist in `components/meet-the-team/` and `app/meet-the-team/page.js` doesn't render it; the page currently goes straight from the header to the CTA section. Profiles of each team member with photos, roles, bios, and key strengths (as originally planned).
- CTA Section [Scheme 3]: Encouragement to connect with the team or learn more about working together.
- Logo [Scheme 1]
- Footer [Scheme 2]

### How I Work

| # | Section | Component | Scheme |
|---|---------|-----------|--------|
| 1 | Navbar | `components/navbar-01` | 1 |
| 2 | Header Section | `components/how-i-work/header-64` | 1 |
| 3 | How It Works Section | `components/how-i-work/layout-300` | 2 |
| 4 | Feature Section | `components/how-i-work/layout-192` | 3 |
| 5 | Testimonial Section | `components/how-i-work/testimonial-01` | 2 |
| 6 | Logo | `components/how-i-work/logo-03` | 1 |
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
| 5 | Logo | `components/services/logo-03` | 1 |
| 6 | Testimonial Section | `components/services/testimonial-01` | 3 |
| 7 | Pricing Section | `components/services/pricing-23` | *not built* |
| 8 | CTA Section | `components/services/cta-01` | 2 |
| 9 | Footer | `components/footer-01` | 2 |

- Navbar [Scheme 1]
- Header Section [Scheme 1]: Page title and a brief introduction to your services and philosophy.
- Services Section [Scheme 2]: Overview of the main services you offer with short descriptions (e.g., coaching, consulting, workshops).
- Features List Section [Scheme 3]: Up to three key benefits or unique aspects of your services.
- Logo [Scheme 1]
- Testimonial Section [Scheme 3]: Client testimonials or success stories to build trust.
- Pricing Section — **not implemented.** `pricing-23.jsx` doesn't exist in `components/services/` and `app/services/page.js` doesn't render it. Transparent pricing or packages (optional, if relevant to your brand), as originally planned.
- CTA Section [Scheme 2]: Call to action inviting visitors to book a consultation, get in touch, or request a quote.
- Footer [Scheme 2]

### Blog

| # | Section | Component | Scheme |
|---|---------|-----------|--------|
| 1 | Navbar | `components/navbar-01` | 1 |
| 2 | Featured Blog List Header Section | `components/blog/blog-18` | 2 |
| 3 | Logo | `components/blog/logo-03` | 1 |
| 4 | Blog List Section | `components/blog/blog-66` | *not built* |
| 5 | Footer | `components/footer-01` | 2 |

- Navbar [Scheme 1]
- Featured Blog List Header Section [Scheme 2]: Highlight top or recent blog posts with eye-catching visuals or summaries.
- Logo [Scheme 1]
- Blog List Section — **not implemented.** `blog-66.jsx` doesn't exist in `components/blog/` and `app/blog/page.js` doesn't render it. Display a list/grid of all blog posts with titles, excerpts, and links to full posts, as originally planned.
- Footer [Scheme 2]
