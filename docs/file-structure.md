# Project Structure Reference

## Overview
This document explains where each type of code/file is stored in the Arc Systems website codebase.

---

## Directory Structure

### `/src` - Source Code
All application source code lives here.

#### `/src/app` - Next.js App Router
Contains all pages, routes, and app-level configurations.

**Files:**
- `layout.tsx` - Root layout (Header, Footer, global providers)
- `page.tsx` - Homepage
- `globals.css` - Global CSS styles
- `not-found.tsx` - 404 page
- `robots.ts` - Robots.txt configuration
- `sitemap.ts` - Sitemap generation

**Subdirectories:**
- `/about` - About page
- `/contact` - Contact page  
- `/services` - Services page
- `/projects` - Projects/portfolio pages

#### `/src/components` - React Components
All reusable and page-specific React components.

**`/components/features/`** - Page-Specific Components
Components used by specific pages:
- `/features/home/` - Homepage components (Hero, WhyArcSystems, ServicesOverview, UseCases, ProcessOverview, TrustSignals)

**`/components/layout/`** - Layout Components
- `Header.tsx` - Top navigation
- `Footer.tsx` - Site footer

**`/components/ui/`** - Reusable UI Components
- `Button.tsx` - Button component
- `Card.tsx` - Card container
- `Section.tsx` - Page section wrapper
- `ImageGallery.tsx` - Image gallery
- `MDXComponents.tsx` - MDX renderers
- `TableOfContents.tsx` - TOC component
- `WhatsAppButton.tsx` - WhatsApp floating button

**`/components/analytics/`** - Analytics Components
- `GoogleAnalytics.tsx` - GA4 tracking component

#### `/src/data` - Content & Data Files
Static data and content used throughout the site.

**Files:**
- `about.ts` - About page content (core values, what we bring, client traits)
- `faqs.ts` - Frequently asked questions
- `process.ts` - Development process steps
- `services.ts` - Service definitions and details
- `trust-signals.ts` - Trust signals/stats
- `why-arc-systems.ts` - Key differentiators

#### `/src/config` - Configuration
- `site.ts` - Site-wide configuration (company info, contact, URLs, WhatsApp messages)

#### `/src/lib` - Utilities & Helpers
- `utils.ts` - Utility functions

---

## Root Directory Files

### Configuration Files
- `.env.example` - Environment variables template
- `.eslintrc.json` - ESLint configuration
- `.gitignore` - Git ignore rules
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration

### Package Management
- `package.json` - Dependencies and scripts
- `package-lock.json` - Locked dependency versions

### Documentation
- `README.md` - Project overview and getting started

---

## Special Directories

### `/public` - Static Assets
Publicly accessible files served directly.
- `/logo-white.svg` - White logo
- `/logo-full.svg` - Full logo
- `/favicon.svg` - Favicon

### `/brand-assets` - Brand Materials
Logo files and brand assets.

### `/content` - MDX Content
Content files written in MDX format.

### `/docs` - Documentation
All project documentation.

**`/docs/guides/`** - Guide Documents
- `brand-voice.md` - Brand voice guidelines
- `deployment.md` - Deployment guide
- `development.md` - Development guide
- `discovery-call.md` - Discovery call guide

**`/docs/guides/integrations/`** - Integration Guides
- `google-sheets.md` - Google Sheets integration
- `google-analytics.md` - Google Analytics setup

**Other Documentation:**
- `content-guidelines.md` - Website content guidelines
- `quick-reference.md` - Quick reference
- `architecture.md` - System architecture
- `interfaces.md` - API/Interface documentation
- `components.md` - Component documentation

### `/scripts` - Build & Utility Scripts
Helper scripts for development and deployment.
- `google-sheets-setup.js` - Google Sheets integration script

### `/.next` - Build Output
Next.js build output (auto-generated, not in Git).

### `/node_modules` - Dependencies
NPM packages (auto-generated, not in Git).

---

## File Naming Conventions

### Components
- **PascalCase**: `Button.tsx`, `Hero.tsx`, `WhyArcSystems.tsx`
- Component files match the component name

### Data Files
- **kebab-case**: `trust-signals.ts`, `why-arc-systems.ts`
- Use TypeScript for type safety

### Pages
- **kebab-case** for directories: `/about`, `/contact-us`
- `page.tsx` for the page component

### Configuration
- Standard names: `next.config.ts`, `tailwind.config.ts`

---

## Import Paths

### Absolute Imports (Preferred)
Use `@/` alias for clean imports:

```typescript
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
```

### Path Mapping
Configured in `tsconfig.json`:
```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

---

## Adding New Files

### New Component
1. Place in appropriate directory:
   - Page-specific → `/components/features/[page-name]/`
   - Reusable → `/components/ui/`
   - Layout → `/components/layout/`
2. Use TypeScript (.tsx)
3. Export default component
4. Import using `@/components/...`

### New Page
1. Create folder in `/src/app/[page-name]/`
2. Add `page.tsx` file
3. Export default page component
4. Optional: Add `layout.tsx` for page-specific layout

### New Data File
1. Place in `/src/data/`
2. Use TypeScript (.ts)
3. Define TypeScript interfaces
4. Export data and types
5. Import using `@/data/...`

### New Documentation
1. Place in `/docs/` or `/docs/guides/`
2. Use Markdown (.md)
3. Follow existing format

---

## Quick Lookup

**Need to find...**

| What | Where |
|------|-------|
| Homepage components | `/src/components/features/home/` |
| Site configuration | `/src/config/site.ts` |
| Service data | `/src/data/services.ts` |
| Header/Footer | `/src/components/layout/` |
| Button/Card/UI | `/src/components/ui/` |
| About page | `/src/app/about/page.tsx` |
| Contact form | `/src/app/contact/page.tsx` |
| Brand guidelines | `/docs/guides/brand-voice.md` |
| Deployment guide | `/docs/guides/deployment.md` |
| Environment variables | `.env.example` |

---

**Last Updated**: January 27, 2026
