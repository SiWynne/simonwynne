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
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#FFFFFF"
    textHex: "#000000"
    accentHex: "#000000"
    borderValue: "#000000"
    useLogoVariant: light
    cssClass: "scheme-1"
  - name: "Scheme 2"
    background: "neutral-shade-1"
    backgroundHex: "#F2F2F2"
    foregroundHex: "#F2F2F2"
    textHex: "#000000"
    accentHex: "#000000"
    borderValue: "#000000"
    useLogoVariant: light
    cssClass: "scheme-2"
  - name: "Scheme 3"
    background: "neutral-shade-6"
    backgroundHex: "#191919"
    foregroundHex: "#191919"
    textHex: "#ffffff"
    accentHex: "#FFF9AA"
    borderValue: "#ffffff"
    useLogoVariant: dark
    cssClass: "scheme-3"
  - name: "Scheme 4"
    background: "chromatic2-shade-3"
    backgroundHex: "#758798"
    foregroundHex: "#758798"
    textHex: "#ffffff"
    accentHex: "#FFF9AA"
    borderValue: "#ffffff"
    useLogoVariant: dark
    cssClass: "scheme-4"
  - name: "Scheme 5"
    background: "neutral-shade-5"
    backgroundHex: "#4C4C4C"
    foregroundHex: "#4C4C4C"
    textHex: "#ffffff"
    accentHex: "#FFF9AA"
    borderValue: "#ffffff"
    useLogoVariant: dark
    cssClass: "scheme-5"
  - name: "Scheme 6"
    background: "neutral-shade-4"
    backgroundHex: "#7F7F7F"
    foregroundHex: "#7F7F7F"
    textHex: "#ffffff"
    accentHex: "#FFF9AA"
    borderValue: "#ffffff"
    useLogoVariant: dark
    cssClass: "scheme-6"
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

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are in `react/globals.css`.

## UI Elements

UI style is **brick** with button radius 0px. Cards use the **edgy** style with border-width 2px.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme is derived from a single background color — all other colors (text, foreground, accent, border) are automatically computed for optimal contrast.

| Scheme | Background | Text | Accent | Logo | CSS class |
|--------|-----------|------|--------|------|-----------|
| Scheme 1 | Neutral White (#FFFFFF) | #000000 | #000000 | light | `.scheme-1` |
| Scheme 2 | Neutral Lightest (#F2F2F2) | #000000 | #000000 | light | `.scheme-2` |
| Scheme 3 | Neutral Darker (#191919) | #ffffff | #FFF9AA | dark | `.scheme-3` |
| Scheme 4 | Fiord Light (#758798) | #ffffff | #FFF9AA | dark | `.scheme-4` |
| Scheme 5 | Neutral Dark (#4C4C4C) | #ffffff | #FFF9AA | dark | `.scheme-5` |
| Scheme 6 | Neutral (#7F7F7F) | #ffffff | #FFF9AA | dark | `.scheme-6` |

Apply a scheme by adding its CSS class to the section element. See `sitemap.md` for which scheme each section uses.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text, accent, and border colors
- Use the matching logo variant (`logo-light.png` or `logo-light.png`) based on the scheme's `useLogoVariant`
- Alternate between light and dark schemes to create visual rhythm
