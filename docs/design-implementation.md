---
typeScale:
  desktop:
    h1: 84px
    h2: 60px
    h3: 48px
    h4: 40px
    h5: 32px
    h6: 26px
    text-large: 26px
    text-medium: 20px
    text-regular: 18px
    text-small: 16px
    text-tiny: 12px
  mobile:
    h1: 48px
    h2: 44px
    h3: 32px
    h4: 24px
    h5: 20px
    h6: 18px
    text-large: 18px
    text-small: 12px
    text-regular: 14px
    text-tiny: 10px

schemeClasses:
  scheme-1: "Scheme 1 — light, black text, logo as-authored"
  scheme-2: "Scheme 2 — Fiord light, white text, logo-alt"
  scheme-3: "Scheme 3 — neutral dark, white text, logo-alt"
  scheme-4: "Scheme 4 — white, black text, logo as-authored"
---

# Design — Web Implementation

How the brand's design tokens bind to this codebase. **This file does not define
values.** Colours, type families, the accent rule, the character and the four scheme
recipes live in the brand source of truth:

`source-files/brand/design-tokens.md`
(outside this repo — `../source-files/brand/` from the site root, in the
`simonwynne/` project folder)

If a hex code or font choice needs to change, it changes there. This file only records
how those decisions are wired into the code, plus the values that are genuinely
web-only — the responsive type scale above.

Keep it that way: never paste a hex code into this file. Two copies of the palette is
how the scheme count drifted from six to four without anyone noticing.

## Colour and type

Reference colours via the CSS custom properties in `app/globals.css` — never hardcode
hex values in components.

Fonts load locally via `@font-face` from `public/fonts/` — never from the Google Fonts
CDN. DM Sans for headings, JetBrains Mono for body.

Cal Sans is applied through the **`font-cal-sans`** utility, and only on the homepage
hero `h1`. It falls back to DM Sans / sans-serif, and is set `leading-[0.85]` on mobile
and `leading-[1.1]` on desktop, left-aligned. This is a one-off for the name — not a
sitewide heading change.

Apply the mobile type scale at smaller breakpoints. All scale values are in
`app/globals.css`.

## Schemes

The site implements **4 schemes** as `@utility scheme-1` – `scheme-4` in
`app/globals.css`. **There is no scheme-5 or scheme-6 in the codebase** — the original
Relume export described six; only four were ever built. The four here were verified
against each component's actual `scheme-N` class, not against that original plan.

Apply a scheme by adding its class to the section element. Child elements inherit text
and border colours automatically. See `sitemap.md` for which scheme each section uses.

### Buttons

The accent fill and its black label are a brand rule, not a scheme property — see the
brand doc. The implementation hazard: **do not let a scheme's text colour cascade into
the button label.** On `scheme-2` and `scheme-3` the section text is white, and white
on the accent yellow fails contrast. The label stays black in all four schemes.

### Logo

One asset, `/logo/simonwynne-logo-black.svg`, authored black. Dark schemes (2, 3) add
the **`logo-alt`** utility, which knocks it out to white via
`filter: brightness(0) invert(1)` rather than swapping to a second file. There is no
separate white logo asset in the repo.

### Changing a section's scheme

- Swap the CSS class (e.g. `.scheme-1` → `.scheme-2`).
- Add `logo-alt` for dark schemes (2, 3); omit it for light schemes (1, 4).
- The button accent is unaffected — it never follows the scheme.
- Alternate light and dark schemes down the page for rhythm.
