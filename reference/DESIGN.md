---
name: "SimonWynne"
theme: "light"

colors:
  neutral:
    shade-0: "#FFFFFF"
    shade-1: "#F2F2F2"
    shade-2: "#D8D8D8"
    shade-3: "#B2B2B2"
    shade-4: "#7F7F7F"
    shade-5: "#4C4C4C"
    shade-6: "#191919"
    shade-7: "#000000"
    white: "#FFFFFF"
  milan:
    shade-1: "#FFFEF6"
    shade-2: "#FFFDEE"
    shade-3: "#FFFAC3"
    shade-4: "#FFF9AA"
    shade-5: "#CCC788"
    shade-6: "#666344"
    shade-7: "#4C4A33"
  fiord:
    shade-1: "#EBEDF0"
    shade-2: "#D7DCE1"
    shade-3: "#758798"
    shade-4: "#3B546C"
    shade-5: "#2F4356"
    shade-6: "#17212B"
    shade-7: "#111920"

typography:
  heading:
    fontFamily: "DM Sans"
    fontWeight: 700
  display:
    fontFamily: "Cal Sans"
    fontWeight: 700
    fallback: "DM Sans, sans-serif"
    usage: "Homepage hero h1 only ('Simon Wynne'), via the font-cal-sans utility"
  body:
    fontFamily: "JetBrains Mono"
    fontWeight: 400
  sizes:
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
      text-medium: 16px
      text-regular: 14px
      text-small: 12px
      text-tiny: 10px

ui:
  style: "brick"
  buttonRadius: 0px
  tagRadius: 0px
  inputRadius: 0px

cards:
  style: "edgy"
  borderWidth: 2px
  dividerWidth: 2px
  radiusLarge: 0px
  radiusMedium: 0px
  radiusSmall: 0px

schemes:
  - name: "Scheme 1"
    background: "neutral-shade-1"
    backgroundHex: "#F2F2F2"
    foregroundHex: "#F2F2F2"
    textHex: "#000000"
    accentHex: "#FFF9AA"
    borderValue: "#000000"
    useLogoVariant: light
    cssClass: "scheme-1"
  - name: "Scheme 2"
    background: "fiord-light"
    backgroundHex: "#758798"
    foregroundHex: "#758798"
    textHex: "#ffffff"
    accentHex: "#FFF9AA"
    borderValue: "#ffffff"
    useLogoVariant: dark
    cssClass: "scheme-2"
  - name: "Scheme 3"
    background: "neutral-shade-5"
    backgroundHex: "#4C4C4C"
    foregroundHex: "#4C4C4C"
    textHex: "#ffffff"
    accentHex: "#FFF9AA"
    borderValue: "#ffffff"
    useLogoVariant: dark
    cssClass: "scheme-3"
  - name: "Scheme 4"
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#FFFFFF"
    textHex: "#000000"
    accentHex: "#FFF9AA"
    borderValue: "#000000"
    useLogoVariant: light
    cssClass: "scheme-4"
---

# SimonWynne — Design Specification

This file contains machine-readable design tokens in the YAML frontmatter above, and human-readable guidance below.

## Colors

The design uses a **light** theme with a neutral palette and 2 chromatic palettes.

- **Neutral shades** range from shade-0 (darkest) to shade-7 (lightest), plus white
- **Milan** — primary shade: `#FFF9AA`
- **Fiord** — primary shade: `#3B546C`

Use the CSS custom properties from `react/globals.css` for all colors (e.g. `--color-neutral-darkest`, `--color-blue-ribbon`).

## Typography

Headings use **DM Sans** at weight 700. Body text uses **JetBrains Mono** at weight 400.

The homepage hero headline ("Simon Wynne") is the one exception: it uses **Cal Sans** at weight 700 (via the `font-cal-sans` utility, falling back to DM Sans/sans-serif), set tighter (`leading-[0.85]` on mobile, `leading-[1.1]` on desktop) and left-aligned. This is a one-off display treatment for the name, not a sitewide heading change — every other heading stays on DM Sans.

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are in `react/globals.css`.

## UI Elements

UI style is **brick** with button radius 0px. Cards use the **edgy** style with border-width 2px.

### Button label contrast

The primary/default button always fills solid with **Milan shade-4 (`#FFF9AA`)** and hover-lightens to Milan shade-3 (`#FFFAC3`), with **neutral-darkest (`#000000`)** label text — regardless of which color scheme the surrounding section uses (light or dark background). Do not let a scheme's text color (e.g. white on Scheme 3/4) override the button label; white-on-yellow fails contrast. Secondary buttons keep scheme-appropriate dark text on a light/neutral fill.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme is derived from a single background color — text, foreground, and border are set for contrast against it. The site implements **4 schemes** (`react/globals.css`, `@utility scheme-1`–`scheme-4`); there is no scheme-5 or scheme-6 in the codebase.

| Scheme | Background | Text/Border | Accent (button fill) | Logo | CSS class |
|--------|-----------|------|--------|------|-----------|
| Scheme 1 | Neutral Lightest (#F2F2F2) | #000000 | #FFF9AA | standard (no invert) | `.scheme-1` |
| Scheme 2 | Fiord Light (#758798) | #ffffff | #FFF9AA | inverted to white (`logo-alt`) | `.scheme-2` |
| Scheme 3 | Neutral Dark (#4C4C4C) | #ffffff | #FFF9AA | inverted to white (`logo-alt`) | `.scheme-3` |
| Scheme 4 | Neutral White (#FFFFFF) | #000000 | #FFF9AA | standard (no invert) | `.scheme-4` |

The button accent is uniform across all 4 schemes: every default/primary button fills with Milan shade-4 (`#FFF9AA`) and uses black label text, regardless of the section's scheme (see [Button label contrast](#button-label-contrast) above). Scheme only controls the section's own background/text/border — not the button.

There's no separate "dark" logo file. Light schemes (1, 4) render the logo as-authored (`/logo/simonwynne-logo-black.svg`); dark schemes (2, 3) apply the `logo-alt` utility class, which CSS-inverts it to white (`filter: brightness(0) invert(1)`) rather than swapping assets.

Apply a scheme by adding its CSS class to the section element. See `sitemap.md` for which scheme each section uses.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text and border colors; button accent color is unaffected (always Milan/black label, see above)
- Add or remove the `logo-alt` class on the section to match the scheme's `useLogoVariant` (`dark` → add `logo-alt` to invert the logo to white; `light` → omit it)
- Alternate between light and dark schemes to create visual rhythm
