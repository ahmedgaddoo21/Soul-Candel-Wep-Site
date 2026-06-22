---
name: Luminous Sanctuary
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4d4635'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#865046'
  on-secondary: '#ffffff'
  secondary-container: '#feb8ab'
  on-secondary-container: '#7a473d'
  tertiary: '#77574c'
  on-tertiary: '#ffffff'
  tertiary-container: '#d2aa9c'
  on-tertiary-container: '#5b3e34'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdad3'
  secondary-fixed-dim: '#fbb6a8'
  on-secondary-fixed: '#351009'
  on-secondary-fixed-variant: '#6a3930'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#e7bdaf'
  on-tertiary-fixed: '#2c160d'
  on-tertiary-fixed-variant: '#5d4035'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  title-md:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The visual identity of the design system is rooted in the concepts of warmth, intentionality, and high-end craftsmanship. It targets a discerning audience that values self-care as a ritual and seeks beauty in the details of their home environment. The emotional response is one of immediate serenity—a "digital exhale."

The style is a sophisticated blend of **Editorial Minimalism** and **Tactile Luxury**. It utilizes vast amounts of whitespace to mimic the airy feel of a high-end boutique, paired with soft, organic textures that reference the handcrafted nature of the products. The interface should feel like a premium lifestyle magazine, where the photography is the protagonist and the UI is the elegant, unobtrusive frame.

## Colors

The palette is inspired by natural wax, botanical dyes, and precious metals.
- **Primary (Champagne Gold):** Used sparingly for interactive highlights, call-to-action borders, and decorative icons. It represents the flame and luxury.
- **Secondary (Soft Blush & Dusty Rose):** These tones provide a feminine, romantic warmth. Used for category labels, hover states, and soft background sections.
- **Tertiary (Light Wood/Earth):** A grounding brown used for secondary text and structural elements, echoing the wooden lids and natural wicks.
- **Neutral (Ivory/Cream):** The foundation of the system. This off-white base prevents the "starkness" of pure white, ensuring the interface feels cozy and inviting.

## Typography

The typographic hierarchy relies on the contrast between a romantic, high-contrast serif and a modern, understated sans-serif. 

**Playfair Display** is used for all major headings and titles. Its elegant ligatures and classic proportions evoke the feel of luxury scent labels. Use *Italic* styles for sub-headings or "hand-written" notes to add a personal, artisanal touch.

**DM Sans** provides a clean, functional counterpoint. It is used for body copy and navigation to ensure legibility is never sacrificed for style. Large tracking (letter-spacing) should be applied to small labels to maintain an "expensive" editorial feel.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain the precise composition of an editorial lookbook. 
- **Desktop:** A 12-column grid with generous 64px side margins. Large "whitespace lungs" are encouraged between sections (up to 120px) to allow the product photography to breathe.
- **Asymmetry:** Occasionally break the grid with offset images or text blocks to mimic the organic, "hand-placed" feel of Pinterest boards.
- **Mobile:** A 4-column grid with 20px margins. Content should stack vertically, but maintain the ivory background between cards to avoid a "boxed-in" feeling.

## Elevation & Depth

Depth is created through **Tonal Layering** rather than heavy shadows. 
- **Soft Shadows:** Use extremely diffused, low-opacity shadows (e.g., `rgba(140, 106, 94, 0.08)`) to give cards a gentle lift, suggesting they are resting lightly on a linen surface.
- **Layering:** Overlap elements—such as a serif title slightly clipping a product image—to create a sense of physical depth.
- **Dividers:** Use hairline-thin gold (`#D4AF37`) or rose-tinted lines to separate sections without adding visual weight.

## Shapes

The shape language is organic and soft. 
- **Core Elements:** Buttons and input fields use a standard 0.5rem (8px) radius to feel approachable and smooth.
- **Featured Containers:** Large image containers or promotional cards should use `rounded-xl` (1.5rem) to echo the soft curves of the candle glass jars.
- **Icons:** Use thin-stroke, rounded icons. Avoid sharp angles or harsh geometric shapes.

## Components

- **Buttons:** Primary buttons should be ghost-style with a Gold border or solid Blush background. Text must be uppercase with generous letter spacing.
- **Cards:** Product cards are "borderless." They rely on the `surface-soft` background color and soft shadows to define their edges. The product name (Serif) sits above the price (Sans-Serif).
- **Inputs:** Simple bottom-border only or very light ivory-filled boxes. Focus states should transition the bottom border to Gold.
- **Chips/Labels:** Small, pill-shaped tags in `accent-blush` for "Limited Edition" or "Hand-poured" callouts.
- **Floral Accents:** Use subtle SVG floral or botanical line-art as background watermarks or section starters to reinforce the "Made with Love" narrative.
- **Dividers:** Instead of simple lines, use a small gold dot or a floral glyph in the center of a horizontal line for section breaks.