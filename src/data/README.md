# Data Layer Documentation

This directory contains all content data separated from UI logic, following software engineering best practices (DRY, KISS, Separation of Concerns).

## Philosophy

**"Data changes, logic doesn't."**

By separating content from components, we can:

- Update copy without touching React code
- Maintain consistency across the site
- Easier debugging and testing
- Better version control (content vs. code changes)
- Enable future CMS integration if needed

---

## File Structure

```
src/data/
├── README.md              # This file
├── services.ts            # Service offerings (AI/ML, Data Eng, Full-Stack, MVP)
├── why-arc-systems.ts     # Homepage differentiators
├── trust-signals.ts       # Why businesses trust us section
├── process.ts             # How we work (4 steps)
├── faqs.ts                # Frequently asked questions
└── about.ts               # About page content (values, what we bring, ideal clients)
```

---

## Data Files

### `services.ts`

**Purpose:** Complete service catalog with full descriptions  
**Used in:**

- Homepage: Services Overview section (shortDescription)
- Services Page: Full service details
- Contact Form: Dropdown options (id field)
- Footer: Service links

**Interface:**

```typescript
interface Service {
  id: string; // Unique identifier (e.g., "ai-ml")
  title: string; // Display name
  shortDescription: string; // For homepage cards (~25 words)
  overview: string; // Services page intro
  whatWeBuild: string[]; // List of deliverables
  idealFor: string[]; // Target use cases (5 items for consistency)
}
```

**Guidelines:**

- Keep `shortDescription` uniform length (25-30 words)
- Maintain 5 items in `idealFor` for UI consistency
- IDs should match across site (forms, routes, etc.)

---

### `why-arc-systems.ts`

**Purpose:** Five key differentiators  
**Used in:** Homepage "Why Arc Systems" section

**Interface:**

```typescript
interface Differentiator {
  title: string; // 2-4 words
  description: string; // ~15-20 words
}
```

**Guidelines:**

- Exactly 5 differentiators (UI constraint)
- Keep descriptions uniform length
- Focus on unique value propositions

---

### `trust-signals.ts`

**Purpose:** Trust-building metrics  
**Used in:** Homepage "Why Businesses Trust Us" section

**Interface:**

```typescript
interface TrustSignal {
  stat: string; // Short label (e.g., "Expert-Led")
  label: string; // Category (e.g., "Development")
  description: string; // Brief explanation
}
```

**Guidelines:**

- Keep descriptions very brief (3-6 words)
- Use parallel structure (e.g., all noun phrases)

---

### `process.ts`

**Purpose:** Development workflow  
**Used in:** Homepage "How We Work" section

**Interface:**

```typescript
interface ProcessStep {
  number: string; // "01", "02", etc.
  title: string; // Step name
  description: string; // Details (~20-22 words)
}
```

**Guidelines:**

- Exactly 4 steps (standard project phases)
- Keep descriptions uniform length for visual balance

---

### `faqs.ts`

**Purpose:** Common questions and answers  
**Used in:** Contact page FAQ section

**Interface:**

```typescript
interface FAQ {
  question: string;
  answer: string;
}
```

**Guidelines:**

- Questions should be direct and commonly asked
- Answers should be concise but complete
- Avoid jargon in answers

---

### `about.ts`

**Purpose:** About page content  
**Used in:** About page

**Exports:**

- `coreValues`: Array of 4 value propositions
- `whatWeBring`: Array of 3 paragraphs (uniform length)
- `idealClientTraits`: Array of 5 characteristics

**Guidelines:**

- `whatWeBring` paragraphs should be ~3 lines each
- `idealClientTraits` should be concise bullet points

---

## Usage Examples

### Importing Data

```typescript
import { services } from "@/data/services";
import { differentiators } from "@/data/why-arc-systems";
import { faqs } from "@/data/faqs";
```

### Using in Components

```typescript
export default function ServicesPage() {
  return (
    <div>
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}
```

### Accessing Helper Functions

```typescript
import { getServiceById } from "@/data/services";

const aiService = getServiceById("ai-ml");
```

---

## Maintenance Guidelines

### When Updating Content:

1. ✅ **DO** update data files only
2. ✅ **DO** maintain consistent structure
3. ✅ **DO** keep text lengths uniform within sections
4. ✅ **DO** test changes across all pages that use the data
5. ❌ **DON'T** modify interfaces without updating all usages
6. ❌ **DON'T** add logic to data files (pure data only)

### Adding New Content:

1. Add data to appropriate file
2. Update TypeScript interface if needed
3. Update this README with documentation
4. Test all pages using that data

### Consistency Checklist:

- [ ] Service short descriptions are ~25 words
- [ ] Process step descriptions are ~20-22 words
- [ ] "What We Bring" paragraphs are ~3 lines each
- [ ] All "Ideal For" lists have 5 items
- [ ] Trust signal descriptions are 3-6 words

---

## Future Enhancements

### Possible Additions:

- `testimonials.ts` - Client testimonials
- `team.ts` - Team member profiles
- `blog-metadata.ts` - Blog post metadata
- `case-studies.ts` - Project case study data

### CMS Integration:

These files could be auto-generated from a CMS (Contentful, Sanity, etc.) in the future. The TypeScript interfaces would serve as the schema.

---

## Related Configuration

- **Site-wide settings:** `src/config/site.ts` (company info, contact, integrations)
- **Styling constants:** `tailwind.config.ts` (colors, fonts)
- **Brand voice guide:** `BRAND-VOICE-GUIDE.md` (writing guidelines)

---

**Last Updated:** January 2026  
**Maintainer:** Arc Systems Development Team
