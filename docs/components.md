# Component Documentation

## Overview
This document describes all React components in the Arc Systems website, their purpose, props, and usage.

---

## Layout Components (`/components/layout`)

### Header
**File**: `/components/layout/Header.tsx`

**Purpose**: Site-wide navigation header

**Features**:
- Logo with link to homepage
- Navigation menu (desktop & mobile)
- Responsive hamburger menu
- Sticky positioning

**Props**: None

**Usage**:
```tsx
<Header />
```

---

### Footer
**File**: `/components/layout/Footer.tsx`

**Purpose**: Site-wide footer

**Features**:
- Company branding and tagline
- Service links
- Company links
- Contact information
- Copyright notice

**Props**: None

**Usage**:
```tsx
<Footer />
```

**Data Sources**:
- `siteConfig` from `/config/site.ts`
- `services` from `/data/services.ts`

---

## UI Components (`/components/ui`)

### Button
**File**: `/components/ui/Button.tsx`

**Purpose**: Reusable button component with multiple variants

**Props**:
```typescript
{
  variant?: 'primary' | 'outline' | 'ghost';  // Default: 'primary'
  size?: 'sm' | 'md' | 'lg';                  // Default: 'md'
  href?: string;                               // Optional link
  type?: 'button' | 'submit' | 'reset';       // Default: 'button'
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

**Variants**:
- `primary` - Solid red background
- `outline` - Border with transparent background
- `ghost` - No border, transparent background

**Usage**:
```tsx
<Button variant="primary" size="lg" href="/contact">
  Get Started
</Button>

<Button variant="outline" onClick={handleClick}>
  Learn More
</Button>
```

---

### Card
**File**: `/components/ui/Card.tsx`

**Purpose**: Container card with consistent styling

**Props**:
```typescript
{
  className?: string;
  children: React.ReactNode;
}
```

**Features**:
- Dark background with border
- Rounded corners
- Padding

**Usage**:
```tsx
<Card>
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

---

### Section
**File**: `/components/ui/Section.tsx`

**Purpose**: Page section wrapper with consistent spacing

**Props**:
```typescript
{
  id?: string;           // For anchor links
  className?: string;
  divider?: boolean;     // Show top border divider
  children: React.ReactNode;
}
```

**Features**:
- Container-custom width
- Consistent padding
- Optional divider
- Optional ID for navigation

**Usage**:
```tsx
<Section divider id="services">
  <h2>Our Services</h2>
  {/* Content */}
</Section>
```

---

### WhatsAppButton
**File**: `/components/ui/WhatsAppButton.tsx`

**Purpose**: Floating WhatsApp contact button

**Props**: None

**Features**:
- Fixed position (bottom-right)
- WhatsApp icon
- Pre-filled message
- Mobile-friendly

**Usage**:
```tsx
<WhatsAppButton />
```

---

### ImageGallery
**File**: `/components/ui/ImageGallery.tsx`

**Purpose**: Image gallery component

**Props**:
```typescript
{
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}
```

**Usage**:
```tsx
<ImageGallery images={projectImages} />
```

---

### TableOfContents
**File**: `/components/ui/TableOfContents.tsx`

**Purpose**: Auto-generated table of contents from headings

**Props**:
```typescript
{
  headings: Array<{
    id: string;
    text: string;
    level: number;
  }>;
}
```

**Usage**:
```tsx
<TableOfContents headings={pageHeadings} />
```

---

### MDXComponents
**File**: `/components/ui/MDXComponents.tsx`

**Purpose**: Custom component mapping for MDX content

**Components Mapped**:
- `h1`, `h2`, `h3` - Custom heading styles
- `p` - Custom paragraph styles
- `a` - Custom link styles
- `code` - Code block styles

**Usage**: Automatically used by MDX files

---

## Feature Components - Homepage (`/components/features/home`)

### Hero
**File**: `/components/features/home/Hero.tsx`

**Purpose**: Homepage hero section

**Features**:
- Main headline
- Subheadline
- CTA buttons
- Supporting text

**Props**: None

**Content**:
- Title: "Applied AI & Data Systems"
- Tagline: "We design, build, and deploy AI systems. From data to production."
- CTA buttons

**Usage**:
```tsx
<Hero />
```

---

### WhyArcSystems  
**File**: `/components/features/home/WhyArcSystems.tsx`

**Purpose**: Display key differentiators

**Features**:
- 4 numbered cards
- Grid layout
- CTA buttons

**Props**: None

**Data Source**: `/data/why-arc-systems.ts`

**Usage**:
```tsx
<WhyArcSystems />
```

---

### ServicesOverview
**File**: `/components/features/home/ServicesOverview.tsx`

**Purpose**: Services overview cards

**Features**:
- Service cards (2-column grid)
- "What We Build" lists
- CTA to services page

**Props**: None

**Data Source**: `/data/services.ts`

**Usage**:
```tsx
<ServicesOverview />
```

---

### UseCases
**File**: `/components/features/home/UseCases.tsx`

**Purpose**: Display use cases/what we build

**Features**:
- 4 numbered cards (2x2 grid)
- Matches service categories
- Visual icons

**Props**: None

**Data Source**: Inline array

**Usage**:
```tsx
<UseCases />
```

---

### ProcessOverview
**File**: `/components/features/home/ProcessOverview.tsx`

**Purpose**: Display development process steps

**Features**:
- 4 steps (numbered 01-04)
- Grid layout
- CTA button

**Props**: None

**Data Source**: `/data/process.ts`

**Usage**:
```tsx
<ProcessOverview />
```

---

### TrustSignals
**File**: `/components/features/home/TrustSignals.tsx`

**Purpose**: Display trust signals/stats

**Features**:
- 4 signal cards
- Grid layout
- Stat + label + description

**Props**: None

**Data Source**: `/data/trust-signals.ts`

**Usage**:
```tsx
<TrustSignals />
```

---

## Analytics Components (`/components/analytics`)

### GoogleAnalytics
**File**: `/components/analytics/GoogleAnalytics.tsx`

**Purpose**: Google Analytics 4 tracking

**Features**:
- Loads gtag.js script
- Tracks page views
- Tracks custom events

**Props**: None

**Environment Variable**: `NEXT_PUBLIC_GA_ID`

**Usage** (in `layout.tsx`):
```tsx
<GoogleAnalytics />
```

**Events Tracked**:
- Page views (automatic)
- Contact form submissions
- Button clicks (via custom events)

---

## Page Components

### Homepage
**File**: `/app/page.tsx`

**Sections**:
1. Hero
2. WhyArcSystems
3. ServicesOverview
4. UseCases
5. ProcessOverview
6. TrustSignals

---

### About Page
**File**: `/app/about/page.tsx`

**Sections**:
1. Hero (title + tagline)
2. Our Approach (core values grid)
3. What We Bring (text content)
4. ~~Work With Us~~ (commented out)
5. CTA section

**Data Sources**:
- `/data/about.ts`

---

### Services Page
**File**: `/app/services/page.tsx`

**Sections**:
1. Hero (title + description)
2. Service details (for each service)
   - Overview
   - What We Build
   - Ideal For
3. ~~Technologies We Use~~ (commented out)
4. CTA section

**Data Sources**:
- `/data/services.ts`

---

### Contact Page
**File**: `/app/contact/page.tsx`

**Type**: Client Component (`"use client"`)

**Sections**:
1. Hero with WhatsApp CTA
2. Contact form + contact info
3. Discovery call info
4. FAQs
5. Final CTA

**Features**:
- Form validation
- Google Sheets integration
- Phone input with international format
- Success/error states

**Data Sources**:
- `/config/site.ts`
- `/data/faqs.ts`

---

### Projects Page
**File**: `/app/projects/page.tsx`

**Purpose**: Portfolio/case studies

**Status**: Placeholder (to be developed)

---

### Not Found (404)
**File**: `/app/not-found.tsx`

**Purpose**: 404 error page

**Features**:
- Friendly error message
- Link back to homepage

---

## Component Patterns

### Server Components
Most components are Server Components (default in Next.js App Router):
- Faster initial load
- Better SEO
- No JavaScript sent to client

**Usage**: Default (no directive needed)

---

### Client Components
Use `"use client"` directive for:
- Forms with state
- Event handlers
- Browser APIs

**Usage**:
```tsx
"use client";

import { useState } from "react";

export default function Component() {
  const [state, setState] = useState();
  // ...
}
```

---

## Styling Pattern

### Tailwind Classes
Components use inline Tailwind classes:

```tsx
<div className="flex items-center justify-between p-4 bg-dark-grey">
  <h2 className="text-2xl font-bold text-white">
    Title
  </h2>
</div>
```

### Responsive Classes
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
</div>
```

---

## Component Testing

### Manual Testing
1. Visual inspection in browser
2. Test responsive breakpoints
3. Test interactions (buttons, forms)

### TypeScript Checking
```bash
npx tsc --noEmit
```

---

## Adding New Components

### Creating a New Component

1. **Choose location**:
   - Page-specific → `/components/features/[page]/`
   - Reusable → `/components/ui/`
   - Layout → `/components/layout/`

2. **Create file** (PascalCase):
   ```
   NewComponent.tsx
   ```

3. **Basic structure**:
   ```tsx
   interface NewComponentProps {
     // Define props
   }

   export default function NewComponent({ }: NewComponentProps) {
     return (
       <div>
         {/* Component content */}
       </div>
     );
   }
   ```

4. **Import and use**:
   ```tsx
   import NewComponent from "@/components/ui/NewComponent";

   <NewComponent />
   ```

---

**Last Updated**: January 27, 2026
