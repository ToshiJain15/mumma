---
name: Matriarchal Heritage
colors:
  surface: '#fefccf'
  surface-dim: '#dedcb1'
  surface-bright: '#fefccf'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f6c9'
  surface-container: '#f2f0c4'
  surface-container-high: '#eceabe'
  surface-container-highest: '#e6e5b9'
  on-surface: '#1d1d03'
  on-surface-variant: '#584141'
  inverse-surface: '#323214'
  inverse-on-surface: '#f5f3c7'
  outline: '#8c7071'
  outline-variant: '#e0bfbf'
  surface-tint: '#af2b3e'
  primary: '#570013'
  on-primary: '#ffffff'
  primary-container: '#800020'
  on-primary-container: '#ff828a'
  inverse-primary: '#ffb3b5'
  secondary: '#77574d'
  on-secondary: '#ffffff'
  secondary-container: '#fed3c7'
  on-secondary-container: '#795950'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca730'
  on-tertiary-container: '#4f3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000b'
  on-primary-fixed-variant: '#8e0f28'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#e7bdb1'
  on-secondary-fixed: '#2c160e'
  on-secondary-fixed-variant: '#5d4037'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fefccf'
  on-background: '#1d1d03'
  surface-variant: '#e6e5b9'
typography:
  display-hindi:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 60px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  quote-serif:
    fontFamily: Playfair Display
    fontSize: 22px
    lineHeight: 32px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-page: 2rem
  gutter-grid: 1.5rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
  photo-padding: 1rem
---

## Brand & Style

The design system is centered on the concept of a "Digital Heirloom." It captures the emotional depth of a premium physical birthday card while maintaining the interactive intimacy of a family scrapbook. The personality is refined, warm, and deeply respectful, evoking a sense of timeless elegance tailored for 'Maa'.

The visual style blends **Tactile Minimalism** with **Traditional Editorial** elements. It avoids the coldness of modern SaaS interfaces, opting instead for a physical-media feel. This is achieved through the use of paper-like textures, subtle organic layers, and delicate gold accents that feel like gold-leaf foiling on high-end stationery.

## Colors

The palette is rooted in traditional Indian warmth and luxury.

- **Primary (Deep Wine):** Used for primary headings and significant call-to-action elements. It represents strength and royalty.
- **Background (Warm Ivory):** The base of the entire experience. It should have a subtle grain texture to mimic premium cardstock.
- **Surface (Muted Rose):** Used for containers, photo frames, and secondary sections to add a soft, feminine layer of depth.
- **Accent (Subtle Gold):** Reserved for decorative line art, borders, and highlighting special milestones.
- **Secondary (Warm Brown):** Used primarily for body text and subtle dividers to ensure readability without the harshness of pure black.

## Typography

The typography system relies on high-contrast pairings to create an editorial feel.

- **Headings:** English titles use **Playfair Display** to convey luxury and classic beauty. For Hindi headings, **Noto Serif** provides the necessary weight and traditional calligraphic feel that matches the serif elegance of the English counterparts.
- **Body:** **Montserrat** is used at generous line-heights to ensure clarity against textured backgrounds.
- **Hierarchy:** Use all-caps labels with wide tracking for metadata (e.g., dates in the scrapbook) to create a sophisticated, organized look.

## Layout & Spacing

The layout follows a **Fixed Grid** approach for desktop to mimic the centered, intentional composition of a physical card, while transitioning to a fluid, single-column stack for mobile.

- **Margins:** Generous white space (Ivory space) is essential. Content should never feel crowded.
- **Composition:** Use asymmetrical placements for photographs—overlapping slightly with gold line art—to replicate the hand-placed feel of a scrapbook.
- **Breakpoints:** On mobile, reduce "stack-lg" to "stack-md" to keep the narrative flowing without excessive scrolling, while maintaining the "margin-page" to frame the content elegantly.

## Elevation & Depth

Depth in this design system is achieved through **Material Stacking** rather than digital shadows.

- **Tonal Layers:** Use the Ivory background as the base, with Muted Rose surfaces acting as "paper inserts" placed on top. 
- **Subtle Shadows:** Shadows should be extremely soft, long, and low-opacity (Color: #5D4037 at 5-10% opacity). They should mimic the look of thick paper casting a slight shadow on the page below it.
- **Photo Borders:** Photos should be framed with a thin 1px Gold border or a wide Ivory "Polaroid-style" margin to create a physical object feel.

## Shapes

The shape language is structured and "Soft." 

Avoid large, bubbly radii. Use sharp corners for the main page containers to mimic cardstock, but apply the "Soft" (0.25rem) radius to buttons and internal photo frames to prevent the UI from feeling aggressive. 

Decorative elements like "film strips" or botanical illustrations should remain organic and unconstrained by the grid's geometric containers.

## Components

- **Buttons:** Primary buttons use the Deep Wine background with Gold text. They should be rectangular with a very slight (Soft) corner radius. Use a 1px Gold inset border for an embossed effect.
- **Photo Frames:** Images must have a "film border" or a "deckled edge" effect. Use the Muted Rose color for captions directly beneath photos in a small `label-caps` style.
- **Cards/Scrapbook Snippets:** Use a slightly rotated (1-2 degrees) orientation for some cards to enhance the "hand-arranged" scrapbook aesthetic.
- **Input Fields:** If used for messages, use a simple bottom-border in Gold rather than a full box, mimicking lined stationery.
- **Dividers:** Use botanical line art or a single 1px Gold line that fades out at the edges instead of standard grey horizontal rules.
- **Interactive Wax Seal:** A signature component for this system. Use a circular Deep Wine element with a Gold motif in the center to act as a "Scroll to Top" or "Open Card" trigger.