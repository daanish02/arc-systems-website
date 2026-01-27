# Arc Systems Brand Identity Guide

**Last Updated**: January 27, 2026  
**Version**: 1.0

---

## Brand Overview

**Company Name**: Arc Systems  
**Tagline**: Engineering Intelligent Systems  
**Industry**: AI, Machine Learning, Data Science  
**Location**: Dubai, United Arab Emirates

---

## Logo

### Logo Files

All logo files are located in `/public/`:

| File | Usage | Format |
|------|-------|--------|
| `logo-white.svg` | Dark backgrounds, primary use | SVG Vector |
| `logo-full.svg` | Light backgrounds | SVG Vector |
| `logo-mark.svg` | App icons, favicon, social media | SVG Vector |
| `favicon.svg` | Browser favicon | SVG Vector |

### Logo Variations

**Primary Logo** (`logo-white.svg`)
- **Usage**: Website header, footer, dark backgrounds
- **Color**: White (#f0f0f0)
- **Minimum size**: 120px width
- **Clear space**: Minimum 20px padding on all sides

**Full Logo** (`logo-full.svg`)
- **Usage**: Light backgrounds, documents, presentations
- **Includes**: Full company name + tagline
- **Minimum size**: 150px width

**Logo Mark** (`logo-mark.svg`)
- **Usage**: App icons, social media avatars, favicons
- **Square format**: 1:1 ratio
- **Minimum size**: 32px × 32px
- **Recommended sizes**: 512px, 256px, 128px, 64px, 32px, 16px

### Logo Usage Rules

**✅ DO:**
- Use original SVG files (scalable, crisp)
- Maintain aspect ratio when resizing
- Place on solid backgrounds with sufficient contrast
- Use white logo on dark backgrounds
- Ensure minimum clear space around logo

**❌ DON'T:**
- Stretch, skew, or distort the logo
- Change logo colors (except approved versions)
- Add drop shadows or effects
- Place on busy backgrounds
- Use low-resolution formats (PNG/JPG) when SVG available

---

## Color Palette

### Primary Colors

#### Black
- **Hex**: `#000000`
- **RGB**: 0, 0, 0
- **Usage**: Primary background, text
- **Accessibility**: Use with white or light text only

#### White (Off-White)
- **Hex**: `#f0f0f0`
- **RGB**: 240, 240, 240
- **Usage**: Primary text color, logo on dark  
- **Note**: Slight off-white for reduced eye strain

### Secondary Colors (Greys)

#### Dark Grey
- **Hex**: `#0a0a0a`
- **RGB**: 10, 10, 10
- **Tailwind**: `dark-grey`
- **Usage**: Card backgrounds, sections
- **Contrast**: Very subtle difference from black

#### Medium Grey
- **Hex**: `#222222`
- **RGB**: 34, 34, 34
- **Tailwind**: `medium-grey`
- **Usage**: Hover states, alternate sections

#### Border Grey
- **Hex**: `#2a2a2a`
- **RGB**: 42, 42, 42
- **Tailwind**: `border-grey`
- **Usage**: Borders, dividers, subtle lines

### Accent Color

#### Power Red (Primary Accent)
- **Hex**: `#dc2626`
- **RGB**: 220, 38, 38
- **Tailwind**: `power-red`, `accent-red`
- **Usage**: CTAs, links, highlights, brand accent
- **Accessibility**: Use on dark backgrounds only
- **Contrast Ratio**: 4.5:1 on black background ✅

---

## Color Usage Guidelines

### Background Colors

**Primary Backgrounds:**
- Black (`#000000`) - Main background
- Dark Grey (`#0a0a0a`) - Card backgrounds, alternating sections

**Section Dividers:**
- Border Grey (`#2a2a2a`) - 1px solid borders

### Text Colors

**Body Text:**
- White (`#f0f0f0`) - Standard text
- `white/70` - Secondary text (70% opacity)
- `white/60` - Tertiary text (60% opacity)

**Interactive Elements:**
- Power Red (`#dc2626`) - Links, CTAs, active states
- `power-red/20` - Button backgrounds (20% opacity)

### Button Colors

**Primary Button:**
- Background: `#dc2626` (Power Red)
- Text: `#f0f0f0` (White)
- Hover: Lighter red shade
- Border: None

**Outline Button:**
- Background: Transparent
- Text: `#f0f0f0` (White)
- Border: `#dc2626` (Power Red)
- Hover: Background `power-red/10`

**Ghost Button:**
- Background: Transparent
- Text: `#f0f0f0` (White)
- Border: None
- Hover: Background `white/5`

---

## Typography

### Font Families

#### Sans Serif (Primary)
- **Font**: Space Grotesk
- **Variable**: `var(--font-space)`
- **Usage**: Headings, body text, UI
- **Weights**: 300, 400, 500, 600, 700
- **Loaded via**: Google Fonts / Next.js Font Optimization

#### Monospace (Secondary)
- **Font**: JetBrains Mono
- **Variable**: `var(--font-jetbrains-mono)`
- **Usage**: Code blocks, technical text
- **Weights**: 400, 500, 700
- **Loaded via**: Google Fonts / Next.js Font Optimization

### Typography Scale

#### Headings
```css
h1: text-5xl md:text-6xl font-bold (48px/60px desktop)
h2: text-4xl md:text-5xl font-bold (36px/48px desktop)
h3: text-2xl md:text-3xl font-semibold (24px/30px desktop)
h4: text-xl font-semibold (20px)
```

#### Body Text
```css
Large: text-xl (20px) - Taglines, intro text
Base: text-base (16px) - Standard body
Small: text-sm (14px) - Captions, footnotes
```

### Typography Usage

**Headings:**
- Font weight: Bold (700) for h1, h2
- Font weight: Semibold (600) for h3, h4
- Color: White (`#f0f0f0`)
- Line height: 1.2

**Body Text:**
- Font weight: Regular (400)
- Color: `white/70` (70% opacity)
- Line height: 1.6
- Max width: 65-75 characters per line

**Links:**
- Color: Power Red (`#dc2626`)
- Underline: On hover
- Font weight: Inherit

---

## Spacing & Layout

### Container Widths
- **Max width**: 1200px
- **Padding**: 1rem (mobile), 2rem (desktop)
- **Custom class**: `container-custom`

### Section Spacing
- **Vertical padding**: 3rem (mobile), 4rem (desktop)
- **Between sections**: 2rem minimum

### Component Spacing
- **Card padding**: 1.5rem to 2rem
- **Button spacing**: 0.75rem vertical, 1.5rem horizontal
- **Grid gap**: 1.5rem to 2rem

---

## Accessibility

### Color Contrast

**WCAG AA Compliance:**
- White text on black: ✅ 21:1 ratio (AAA)
- Red accent on black: ✅ 4.8:1 ratio (AA)
- White/70 on black: ✅ 14.7:1 ratio (AAA)

### Minimum Target Sizes
- Buttons: 44px × 44px minimum
- Links: 24px × 24px minimum (with padding)
- Touch targets: 48px spacing

### Focus States
- All interactive elements have visible focus states
- Focus ring: 2px Power Red (`#dc2626`)
- Never remove focus indicators

---

## Brand Elements

### Icons
- **Style**: Line icons, minimal, geometric
- **Stroke width**: 1.5px to 2px
- **Color**: White or Power Red
- **Size**: 24px standard, scale proportionally

### Imagery
- **Style**: Technical, clean, modern
- **Color treatment**: Monochrome or desaturated
- **Accent**: Power Red highlights where appropriate

### Graphics
- **Style**: Geometric, minimal, abstract
- **Colors**: Greys with red accents
- **Use**: Background patterns, dividers, decorative elements

---

## UI Components

### Cards
```css
Background: #0a0a0a (dark-grey)
Border: 1px solid #2a2a2a (border-grey)
Border radius: 0.5rem (8px)
Padding: 1.5rem to 2rem
```

### Buttons
See "Button Colors" section above for specifications.

### Forms
```css
Input background: #000000 (black)
Input border: #222222 (medium-grey)
Input text: #f0f0f0 (white)
Focus border: #dc2626 (power-red)
Placeholder: white/60
```

### Dividers
```css
Color: #2a2a2a (border-grey)
Width: 1px
Style: solid
```

---

## Export Specifications

### Web
- **Format**: SVG (preferred), PNG with transparent background
- **Logo sizes**: As large as needed (SVG scales)
- **Favicon**: 32×32, 16×16 from `favicon.svg`

### Print
- **Format**: SVG or high-res PNG (300 DPI)
- **Colors**: RGB for digital, convert to CMYK for print
- **Logo**: Use `logo-full.svg` on white background

### Social Media

**Profile Pictures:**
- Use `logo-mark.svg`
- Sizes: 512×512 (master), 256×256, 128×128

**Cover Images:**
- Dark background (#000000)
- White logo (`logo-white.svg`)
- Dimensions: Platform-specific

**Open Graph Images:**
- 1200×630px
- Dark background
- Logo + tagline
- Power Red accents

---

## Brand Voice Integration

Colors support brand personality:

- **Black backgrounds** → Professional, focused, technical
- **Red accents** → Energy, action, confidence
- **White space** → Clarity, simplicity, breathing room
- **Minimal palette** → Sophisticated, not cluttered

Typography supports brand voice:

- **Space Grotesk** → Modern, geometric, technical yet friendly
- **Bold headings** → Confident, clear, direct
- **Readable body** → Professional, accessible

---

## Usage Examples

### Website Header
```html
<img src="/logo-white.svg" alt="Arc Systems" class="h-10" />
<!-- White logo on dark background -->
```

### Primary CTA Button
```html
<button class="bg-power-red text-white px-6 py-3 rounded-lg">
  Get Started
</button>
```

### Card Component
```html
<div class="bg-dark-grey border border-border-grey rounded-lg p-6">
  <!-- Content -->
</div>
```

---

## Quick Reference

### Color Codes (Copy-Paste)
```
Black: #000000
White: #f0f0f0
Dark Grey: #0a0a0a
Medium Grey: #222222
Border Grey: #2a2a2a
Power Red: #dc2626
```

### Tailwind Classes (Copy-Paste)
```
bg-black
text-white
bg-dark-grey
bg-medium-grey
border-border-grey
text-power-red
bg-power-red
text-accent-red
bg-accent-red
```

---

## File Locations

**Logos**: `/public/logo-*.svg`  
**Brand Assets**: `/brand-assets/`  
**Color Config**: `/tailwind.config.ts`  
**Font Config**: `/src/app/layout.tsx`  

---

## Updates & Versioning

**Version 1.0** - January 27, 2026
- Initial brand identity documentation
- Logo files standardized
- Color palette finalized
- Typography system established

**Future Considerations**:
- Light mode color palette (if needed)
- Extended color palette for data visualization
- Icon library expansion
- Brand pattern library

---

**Maintained by**: Arc Systems Design Team  
**Questions**: Refer to `/docs/guides/brand-voice.md` for writing guidelines
