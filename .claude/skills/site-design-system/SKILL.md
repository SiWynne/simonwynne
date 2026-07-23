---
name: site-design-system
description: This codebase's own UI conventions — the scheme-1–4 classes, type tokens, section idiom, MDX content pattern and static-export limits. Use when adding or restyling a section, page or component in the simonwynne.com site, or converting a Relume export. Pair with the frontend-design skill, which covers aesthetic direction; this one covers how that direction binds to this code.
---

# Site design system — simonwynne.com

## The one rule that matters most

**No hardcoded values in `app/` or `components/`.** No hex codes, no font families,
no pixel font sizes. Every colour comes from a CSS custom property and every size
from a type token, both defined in `app/globals.css`.

This is not tidiness. Colour and type decisions live in
`../source-files/brand/design-tokens.md`, outside this repo, and `app/globals.css`
is their single binding point. A second copy is how the scheme count silently
drifted from six to four. If a value needs changing, it changes in the brand source
and then in `globals.css` — never inline in a component.

`docs/design-implementation.md` records how tokens bind to code. It must never
restate a hex value either.

## Schemes

Four exist: `scheme-1` through `scheme-4`, declared as `@utility` blocks in
`app/globals.css`. **There is no scheme-5 or scheme-6** — the original Relume
export described six; only four were built.

| Scheme | Background | Text | Logo |
|---|---|---|---|
| `scheme-1` | neutral-lightest | dark | as-authored |
| `scheme-2` | fiord-light | white | needs `logo-alt` |
| `scheme-3` | neutral-dark | white | needs `logo-alt` |
| `scheme-4` | white | dark | as-authored |

Each sets `--color-scheme-background`, `--color-scheme-text` and
`--color-scheme-border`, which children inherit. Reference them as
`text-scheme-text`, `border-scheme-border` and so on — never a literal colour.

Apply the scheme class to the `<section>`. Alternate light and dark down the page
for rhythm; `docs/sitemap.md` records which scheme each existing section uses, and
should be updated when you add one.

### Scheme hazards

- **Dark schemes need `logo-alt`.** It knocks the single black logo asset to white
  via a filter. There is no separate white logo file.
- **The button accent never follows the scheme.** The accent fill with its black
  label is a brand rule. On `scheme-2`/`scheme-3` the section text is white, and
  white on the accent yellow fails contrast — the label stays black in all four.

## Type

Tokens, not sizes: `text-h1`–`text-h6`, `text-large`, `text-medium`,
`text-regular`, `text-small`, `text-tiny`. All defined in `app/globals.css` with
their line-height and letter-spacing; the responsive scale is documented in
`docs/design-implementation.md`.

Fonts load locally from `public/fonts/` via `@font-face` — **never the Google
Fonts CDN**. DM Sans for headings, JetBrains Mono for body.

`font-cal-sans` is a deliberate one-off: the homepage hero `h1` only. It is not a
sitewide heading change.

Match heading levels to siblings. Section headings are `text-h2`; card and list
item titles are `text-h5`. If a new component's titles sit beside an existing
component's, use the same token so they match at every breakpoint.

## The section idiom

Every section follows the same skeleton:

```jsx
<section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
  <div className="container">
    {/* content */}
  </div>
</section>
```

- `px-[5%]` and the `py-16 / md:py-24 / lg:py-28` rhythm are consistent sitewide.
- `badge-alt`, `alternate` and `btn-light` are `@custom-variant` hooks that let
  badges and buttons restyle inside a section without prop drilling.
- Spacing below a section heading is `mb-12 / md:mb-18 / lg:mb-20`.

Match the surrounding code's density and idiom rather than introducing a new one.

## Section eyebrows — removed

Sections used to carry a small `font-semibold` label above the heading ("Services",
"Testimonials", "Process"). **These were deliberately removed sitewide** in July
2026. Do not reintroduce them when adding sections or converting new Relume
exports — Relume's templates include them by default.

When removing one, check whether the heading carried a top margin (`mt-3 md:mt-4`)
that existed only to clear the eyebrow, and remove that too.

## Content from MDX

Repeating or editorial content is externalised, not hardcoded. The pattern:

```
content/<area>/<name>.mdx   frontmatter + body
lib/<name>.js               reads it with gray-matter, returns a plain object
app/(group)/page.js         server component, calls the loader, passes props down
components/<area>/x.jsx     presentational, "use client" if it needs interactivity
```

A page that reads content must **not** be `"use client"` — the loader uses `fs`.
Child components declare their own `"use client"` where needed.

When you remove the last consumer of a content field, remove it from the whole
chain: component prop, `lib/` loader, and the MDX frontmatter. Don't leave orphans.

## Static export constraints

`next.config.mjs` sets `output: "export"`. There is **no server and no API routes**.
Forms need a third-party endpoint. `images.unoptimized` is set, so `next/image`
gives no optimisation — plain `<img>` is used throughout.

## Reusability

Components are being collected toward a template library for other niche sites, so
prefer choices that generalise: prop-driven over hardcoded, token-driven over
literal, content in MDX over inline JSX. A component that assumes it is about Simon
specifically is less useful later than one that takes a prop.

## Verifying

The dev server runs via the `simonwynne-site` config in `.claude/launch.json` —
start it with the preview tooling, not `npm run dev` in a shell.

After a visual change, check the rendered result rather than assuming: compare
computed font sizes when matching type between components, and confirm spacing
where you removed an element. `npm run build` catches the rest.
