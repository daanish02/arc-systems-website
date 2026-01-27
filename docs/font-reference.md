# Arc Systems Font Reference

## ✅ Actual Fonts Used on Website

Your website uses **ONE primary font** with fallbacks:

### **Space Grotesk** (Primary)
- **Usage**: Everything - body text, headings, buttons, all UI
- **Loaded from**: Google Fonts via Next.js
- **CSS Variable**: `--font-space`
- **Tailwind**: `font-sans` (default for all text)
- **Fallbacks**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`

### **JetBrains Mono** (Code only)
- **Usage**: Code blocks only (if you have any)
- **CSS Variable**: `--font-jetbrains-mono`
- **Tailwind**: `font-mono`
- **Status**: Defined but not actively used on your current site

---

## ❌ NOT Used on Website

### **Inter**
- **Status**: NOT loaded or used anywhere
- **Why you saw it**: Possibly from browser dev tools or a design mockup
- **Clarification**: Your logo is an SVG image, not text, so it doesn't use any font

---

## Font Configuration Details

### Layout Configuration (`layout.tsx`)
```typescript
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});
```

### CSS Variables (`globals.css`)
```css
:root {
  --font-space: 'Space Grotesk', -apple-system, sans-serif;
  --font-jetbrains-mono: 'JetBrains Mono', 'Courier New', monospace;
}
```

### Tailwind Config (`tailwind.config.ts`)
```typescript
fontFamily: {
  sans: ["var(--font-space)"],      // Space Grotesk
  mono: ["var(--font-jetbrains-mono)"], // JetBrains Mono
}
```

---

## What Uses What Font

| Element | Font | How Applied |
|---------|------|-------------|
| Body text | Space Grotesk | Default via `font-sans` |
| Headings (h1-h6) | Space Grotesk | Default via `font-sans` |
| Buttons | Space Grotesk | Default via `font-sans` |
| Cards | Space Grotesk | Default via `font-sans` |
| Navigation | Space Grotesk | Default via `font-sans` |
| Footer | Space Grotesk | Default via `font-sans` |
| Code blocks | JetBrains Mono | When using `font-mono` |
| Logo | N/A | SVG image, not text |

---

## For Your Business Cards

**Use Space Grotesk** for consistency with the website.

### Download Space Grotesk
- **Google Fonts**: https://fonts.google.com/specimen/Space+Grotesk
- **Weights available**: 300, 400, 500, 600, 700
- **Recommended weight**: 500 (Medium) for body, 700 (Bold) for headings

### Business Card Font Recommendations

**Company Name:**
- Font: Space Grotesk
- Weight: Bold (700)
- Size: 24-28pt

**Tagline:**
- Font: Space Grotesk
- Weight: Regular (400) or Medium (500)
- Size: 10-12pt

**Contact Info:**
- Font: Space Grotesk
- Weight: Regular (400)
- Size: 9-10pt

---

## Why You Saw Three Fonts

1. **Inter** - Likely from:
   - Browser default font if Space Grotesk failed to load
   - A design tool showing system fonts
   - Previous version of the site (if it existed)

2. **Space Grotesk** - Actually used on your site ✅

3. **JetBrains Mono** - Defined but only for code blocks (which you don't currently have)

---

## Summary for Business Cards

**YOUR BRAND USES ONE FONT:**
- **Space Grotesk** for everything

**Download it here:**
https://fonts.google.com/specimen/Space+Grotesk

**Font file formats for design:**
- Download as TTF or OTF
- Install on your computer
- Use in Canva, Figma, Illustrator, etc.

---

**Updated**: January 27, 2026
