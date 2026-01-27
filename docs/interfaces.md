# Interface Documentation

## Overview
This document describes all interfaces, APIs, and data contracts used in the Arc Systems website.

---

## TypeScript Interfaces

### Site Configuration (`/src/config/site.ts`)

#### `siteConfig` Object
```typescript
{
  company: {
    name: string;           // "Arc Systems"
    tagline: string;        // "Engineering Intelligent Systems"
    email: string;          // "hello@archsystems.tech"
    phone: string;          // "+971-50-751-1002"
    whatsappNumber: string; // "971507511002"
    location: string;       // "Dubai, United Arab Emirates"
    timezone: string;       // "GST (UTC+4)"
    businessHours: string;  // Display hours
    businessHoursExtended: string;
    businessHoursFull: string;
  };
  
  founder: {
    name: string;           // "Danish Ahmed"
    role: string;           // "Founder, CEO & Lead Engineer"
  };
  
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
  
  integrations: {
    googleAnalyticsId: string;
    googleSheetsWebAppUrl: string;
    calendlyUsername: string;
  };
  
  urls: {
    website: string;        // "https://archsystems.tech"
    portfolio: string;
    contact: string;
  };
  
  whatsappMessages: {
    default: string;
    fromContact: string;
    fromServices: string;
    fromProject: string;
  };
}
```

---

### Services (`/src/data/services.ts`)

#### `Service` Interface
```typescript
interface Service {
  id: string;               // Unique identifier (kebab-case)
  title: string;            // Display title
  shortDescription: string; // Brief description for cards
  overview: string;         // Longer description for detail pages
  whatWeBuild: string[];    // List of capabilities
  idealFor: string[];       // List of use cases
}
```

**Example**:
```typescript
{
  id: "ai-chatbots-automation",
  title: "AI Chatbots & Automation",
  shortDescription: "Smart chatbots, AI agents...",
  overview: "Build intelligent conversational systems...",
  whatWeBuild: [
    "AI-powered chatbots and virtual assistants",
    "LLM integration (ChatGPT, Claude, custom GPTs)",
    // ...
  ],
  idealFor: [
    "Customer support automation",
    "Internal knowledge management",
    // ...
  ]
}
```

---

### Why Arc Systems (`/src/data/why-arc-systems.ts`)

#### `Differentiator` Interface
```typescript
interface Differentiator {
  title: string;       // Feature title
  description: string; // Feature description (15-20 words)
}
```

---

### Process Steps (`/src/data/process.ts`)

#### `ProcessStep` Interface
```typescript
interface ProcessStep {
  number: string;      // Step number ("01", "02", etc.)
  title: string;       // Step title
  description: string; // Step description
}
```

---

### Trust Signals (`/src/data/trust-signals.ts`)

#### `TrustSignal` Interface
```typescript
interface TrustSignal {
  stat: string;        // Statistic/label (e.g., "Production")
  label: string;       // Secondary label (e.g., "Ready Systems")
  description: string; // Text description
}
```

---

### About Page (`/src/data/about.ts`)

#### `CoreValue` Interface
```typescript
interface CoreValue {
  title: string;       // Value title
  description: string; // Value description
}
```

#### `whatWeBring` Array
```typescript
string[] // Array of paragraph strings
```

#### `idealClientTraits` Array
```typescript
string[] // Array of trait strings
```

---

### FAQs (`/src/data/faqs.ts`)

#### `FAQ` Interface
```typescript
interface FAQ {
  question: string;    // Question text
  answer: string;      // Answer text (can include HTML)
}
```

---

## External API Interfaces

### Google Sheets Web App

#### Request Format
```typescript
interface ContactFormData {
  timestamp: string;     // ISO 8601 format
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;   // One of: ai-ml, full-stack, data-engineering, mvp, not-sure
  timeline: string;      // One of: urgent, soon, planning, not-sure
  description: string;
  referral: string;      // How they heard about us
}
```

#### Request Method
```
POST https://script.google.com/macros/s/[SCRIPT_ID]/exec
Content-Type: application/json
Mode: no-cors
```

#### Response Format
```typescript
// Success
{
  result: "success"
}

// Error
{
  result: "error",
  error: string
}
```

**Note**: Due to `no-cors` mode, response cannot be read by client. Success is assumed if no error is thrown.

---

### Google Analytics

#### Event Tracking Interface
```typescript
interface GAEvent {
  event_name: string;    // Event identifier
  event_category?: string;
  event_label?: string;
  value?: number;
}
```

#### Page View Tracking
```typescript
gtag('config', GA_MEASUREMENT_ID, {
  page_path: string
});
```

#### Custom Events
```typescript
gtag('event', 'contact_form_submit', {
  event_category: 'engagement',
  event_label: 'contact_page'
});
```

---

### WhatsApp Business API

#### Link Format
```
https://wa.me/{phone_number}?text={encoded_message}
```

**Example**:
```
https://wa.me/971507511002?text=Hi!%20I'd%20like%20to%20discuss%20my%20AI/ML%20project.
```

**Parameters**:
- `phone_number` - International format without + (e.g., 971507511002)
- `text` - URL-encoded message

---

## Component Props Interfaces

### Button Component (`/components/ui/Button.tsx`)

```typescript
interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;           // Optional link
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

---

### Card Component (`/components/ui/Card.tsx`)

```typescript
interface CardProps {
  className?: string;
  children: React.ReactNode;
}
```

---

### Section Component (`/components/ui/Section.tsx`)

```typescript
interface SectionProps {
  id?: string;
  className?: string;
  divider?: boolean;       // Show top divider
  children: React.ReactNode;
}
```

---

## Form Interfaces

### Contact Form State
```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  timeline: string;
  description: string;
  referral: string;
}
```

### Form Validation Rules
```typescript
{
  name: {
    required: true,
    minLength: 2
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    required: true,
    pattern: /^\+?[\d\s-()]+$/
  },
  company: {
    required: true
  },
  projectType: {
    required: true,
    enum: ['ai-ml', 'full-stack', 'data-engineering', 'mvp', 'not-sure']
  },
  timeline: {
    required: true,
    enum: ['urgent', 'soon', 'planning', 'not-sure']
  },
  description: {
    required: true,
    minLength: 20
  },
  referral: {
    required: true
  }
}
```

---

## Environment Variables

### Required Variables
```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Sheets Integration
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/.../exec
```

### Variable Format Rules
- `NEXT_PUBLIC_` prefix for client-accessible variables
- No quotes needed in `.env.local`
- Never commit `.env.local` to Git

---

## MDX Content Interface

### MDX Frontmatter
```typescript
interface MDXFrontmatter {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
}
```

---

## Helper Functions

### WhatsApp Link Generator
```typescript
function getWhatsAppLink(message?: string): string
```

**Parameters**:
- `message` (optional) - Message to pre-fill

**Returns**: WhatsApp API URL

**Example**:
```typescript
getWhatsAppLink("Hi! I need help with AI/ML")
// Returns: "https://wa.me/971507511002?text=Hi!%20I%20need%20help%20with%20AI/ML"
```

---

### WhatsApp Status Check
```typescript
function isWhatsAppEnabled(): boolean
```

**Returns**: `true` if WhatsApp number is configured

---

## Route Params & Search Params

### Dynamic Routes
```typescript
// /projects/[slug]
interface PageProps {
  params: {
    slug: string;
  }
}
```

---

## Error Interfaces

### Form Submission Error
```typescript
interface FormError {
  field?: string;
  message: string;
}
```

---

## Data Fetching Patterns

### Server Components (Default)
```typescript
// Data is fetched at build time or request time
async function getData() {
  const data = await fetch('...');
  return data;
}

export default async function Page() {
  const data = await getData();
  return <div>{data}</div>;
}
```

### Client Components
```typescript
'use client';

export default function Component() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('...')
      .then(res => res.json())
      .then(setData);
  }, []);
  
  return <div>{data}</div>;
}
```

---

## Browser APIs Used

### LocalStorage (None currently)
Not used in current implementation.

### SessionStorage (None currently)
Not used in current implementation.

### Fetch API
Used for form submissions to Google Sheets.

### Window Location
Used for navigation and analytics.

---

**Last Updated**: January 27, 2026
