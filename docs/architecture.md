# System Architecture

## Overview
Arc Systems website is built using Next.js 14 with the App Router, TypeScript, and Tailwind CSS. The architecture follows modern React patterns with server and client components.

---

## Technology Stack

### Frontend Framework
- **Next.js 14.2+** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Deployment
- **Vercel** (Recommended) - Optimized for Next.js
- **Alternative**: Any Node.js hosting

---

## Architecture Layers

```
┌─────────────────────────────────────────┐
│           User Interface (Browser)      │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│         Next.js App Router              │
│  - Server Components (default)          │
│  - Client Components ("use client")     │
│  - API Routes (if needed)               │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│         Components Layer                │
│  - features/    (Page components)       │
│  - layout/      (Layout components)     │
│  - ui/          (Reusable UI)           │
│  - analytics/   (Tracking)              │ 
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│      Data & Configuration Layer         │
│  - Data files                           │
│  - Site configuration                   │
│  - Static content                       │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│      External Services                  │
│  - Google Analytics                     │
│  - Google Sheets (Form submissions)     │
│  - WhatsApp Business                    │
└─────────────────────────────────────────┘
```

---

## Component Architecture

### Server Components (Default)
Most components are Server Components for better performance:
- Pages (`/app/**/page.tsx`)
- Layout (`layout.tsx`)
- Static sections (Hero, Trust Signals, etc.)

**Benefits**:
- Faster initial load
- Better SEO
- Reduced JavaScript bundle size

### Client Components
Components with interactivity use `"use client"` directive:
- Contact form (`contact/page.tsx`)
- WhatsApp button
- Google Analytics

---

## Data Flow

### Static Data
```
Data Files (/src/data/*.ts)
    ↓
Imported by Components
    ↓
Rendered as HTML
```

### Form Submissions
```
Contact Form (Client Component)
    ↓
Submit Event
    ↓
Google Sheets Web App (Apps Script)
    ↓
Data Stored in Sheet
    ↓
(Optional) Email Notification
```

### Analytics
```
User Interaction
    ↓
Google Analytics Component
    ↓
GA4 Measurement API
    ↓
Google Analytics Dashboard
```

---

## Routing Structure

### App Router
```
/                       → src/app/page.tsx (Homepage)
/about                  → src/app/about/page.tsx
/services               → src/app/services/page.tsx
/contact                → src/app/contact/page.tsx
/projects               → src/app/projects/page.tsx
/projects/[slug]        → src/app/projects/[slug]/page.tsx
```

### Special Files
- `layout.tsx` - Shared layout (Header, Footer)
- `not-found.tsx` - 404 page
- `robots.ts` - SEO robots.txt
- `sitemap.ts` - SEO sitemap.xml

---

## State Management

### No Global State Library
Simple application doesn't need Redux/Zustand.

### Local State
- `useState` for form inputs
- Component-level state only

### Configuration
- Centralized in `/config/site.ts`
- Environment variables in `.env.local`

---

## Styling Architecture

### Tailwind CSS
Utility-first approach with custom configuration.

**Configuration** (`tailwind.config.ts`):
```typescript
{
  colors: {
    'black': '#111111',
    'white': '#ffffff',
    'power-red': '#dc2626',
    'accent-red': '#dc2626',
    // ... more colors
  }
}
```

### Global Styles
- `app/globals.css` - Global CSS, Tailwind directives
- Component styles - Inline Tailwind classes

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`

---

## Build & Deployment

### Development
```bash
npm run dev          # Start dev server (port 3000)
npm run build        # Build for production
npm start            # Start production server
```

### Production Build Process
```
Source Code
    ↓
Next.js Compiler (Turbopack/Webpack)
    ↓
Optimizations:
  - Tree shaking
  - Code splitting
  - Image optimization
  - CSS minimization
    ↓
Static HTML + JavaScript bundles
    ↓
Deploy to hosting
```

### Deployment Targets
1. **Vercel** (Recommended)
   - Zero config deployment
   - Edge network
   - Automatic HTTPS

2. **Node.js Server**
   - Self-hosted option
   - Requires Node.js 18+

3. **Static Export** (Limited)
   - `next export` for static hosting
   - Loses some Next.js features

---

## Performance Optimization

### Image Optimization
- Next.js `<Image>` component (not currently used)
- SVG logos for crisp display
- Lazy loading for below-fold images

### Code Splitting
- Automatic route-based splitting
- Component-level splitting with `lazy()`

### Caching Strategy
- Static pages cached indefinitely
- Dynamic pages: ISR (Incremental Static Regeneration)

---

## Security Architecture

### Environment Variables
- Sensitive data in `.env.local`
- Never committed to Git
- Prefix: `NEXT_PUBLIC_` for client-side access

### Form Security
- Client-side validation
- Server-side validation in Apps Script
- CORS handling for Google Sheets

### Content Security
- No user-generated content
- Sanitized MDX content
- XSS protection via React

---

## Integration Architecture

### Google Sheets
```
Contact Form
    ↓
POST request (no-cors mode)
    ↓
Google Apps Script Web App
    ↓
Validate & append to sheet
    ↓
Return success/error
```

### Google Analytics
```
Page Load
    ↓
GoogleAnalytics component mounts
    ↓
gtag.js loaded
    ↓
Events sent to GA4
    ↓
Available in Analytics dashboard
```

### WhatsApp
```
User clicks WhatsApp button
    ↓
Open WhatsApp API URL
    ↓
Pre-filled message
    ↓
Opens WhatsApp app/web
```

---

## Error Handling

### Build-time Errors
- TypeScript type checking
- ESLint errors
- Build fails if errors exist

### Runtime Errors
- Error boundaries (Next.js default)
- `not-found.tsx` for 404s
- Form validation errors

---

## Monitoring & Analytics

### Performance Monitoring
- Vercel Analytics (if deployed on Vercel)
- Google Analytics Core Web Vitals

### User Analytics
- Google Analytics 4
- Page views, events, conversions

### Error Tracking
- (Optional) Sentry integration
- Console errors in dev mode

---

## Scalability Considerations

### Current Scale
- Small-to-medium traffic expected
- Static content (no database)
- Simple contact form

### Future Scalability
Can easily add:
- Database (PostgreSQL, MongoDB)
- CMS integration (Sanity, Contentful)
- Authentication (Next-Auth)
- API routes
- Advanced caching (Redis)

---

## Development Workflow

### Local Development
1. Clone repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local`
4. Add environment variables
5. Run dev server: `npm run dev`

### Making Changes
1. Edit source files
2. Hot reload updates automatically
3. TypeScript errors shown in terminal
4. Test in browser

### Deployment
1. Push to Git repository
2. Vercel auto-deploys (if connected)
3. Or run `npm run build` and deploy manually

---

## File Organization Principles

### Colocation
- Components near their usage
- Data files separate from components
- Configurations in dedicated folder

### Naming Conventions
- PascalCase: Components
- kebab-case: Files, directories
- SCREAMING_SNAKE_CASE: Environment variables

---

**Last Updated**: January 27, 2026
