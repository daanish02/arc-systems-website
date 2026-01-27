# Arc Systems Website

Professional website for Arc Systems - Engineering Intelligent Systems. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
arc-systems-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── services/          # Services page
│   │   ├── pricing/           # Pricing page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── ui/                # Reusable UI components
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   └── Section.tsx
│       ├── layout/            # Layout components
│       │   ├── Header.tsx
│       │   └── Footer.tsx
│       └── home/              # Homepage sections
├── content/                   # MDX content for projects
│   └── PROJECTS-LIST.md       # Project templates
├── brand-assets/              # Logo files
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── next.config.ts             # Next.js configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX for projects/case studies
- **Deployment**: Vercel (recommended), AWS, Azure, or GCP

## 🎯 Features

### Dark Theme Only

- Pure dark theme (#111111 background)
- Power red accent (#E50914)
- Optimized for reduced file sizes

### Fully Responsive

- Mobile-first design
- Breakpoints: 640px, 1024px, 1440px
- Touch-optimized navigation

### SEO Optimized

- Next.js metadata API
- Semantic HTML
- Open Graph tags
- Sitemap ready

### Content Management

- MDX for easy project additions
- Structured content files
- Type-safe components

## 📝 Adding New Projects

Projects are managed using MDX for easy content management. To add a new project:

1. Create a new `.mdx` file in `content/projects/`:

```bash
content/projects/project-name.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "Project Name"
client: "Client Type"
timeline: "6 weeks"
budget: "AED 20,000-40,000"
projectType: "AI/ML Solution"
technologies: ["Python", "React", "PostgreSQL", "AWS"]
featured: true
---

## Overview

Description of the project...

## Key Features

- Feature 1
- Feature 2

## Results

What was achieved...
```

3. The project will automatically appear on the website.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
# Contact Form (when implementing backend)
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Email Service (optional)
EMAIL_SERVICE_KEY=your-email-service-key
```

### Brand Colors

Configured in `tailwind.config.ts`:

```typescript
colors: {
  black: "#111111",
  white: "#ffffff",
  "dark-grey": "#333333",
  "medium-grey": "#555555",
  "light-grey": "#cccccc",
  "power-red": "#e50914",
}
```

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Deploy automatically on every push

```bash
# Install Vercel CLI (optional)
npm install -g vercel

# Deploy
vercel
```

### Option 2: AWS (Elastic Beanstalk or Amplify)

**AWS Amplify:**

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

**AWS Elastic Beanstalk:**

```bash
# Install EB CLI
pip install awsebcli

# Initialize
eb init

# Create environment
eb create arc-systems-prod

# Deploy
eb deploy
```

### Option 3: Azure (Static Web Apps or App Service)

**Azure Static Web Apps:**

```bash
# Install Azure CLI
# Deploy using GitHub Actions (automatic)

# Or manual deployment
az staticwebapp create \
  --name arc-systems-website \
  --resource-group arc-systems-rg \
  --source https://github.com/your-repo
```

### Option 4: Google Cloud Platform (Cloud Run)

```bash
# Build Docker image
docker build -t gcr.io/your-project/arc-systems .

# Push to GCR
docker push gcr.io/your-project/arc-systems

# Deploy to Cloud Run
gcloud run deploy arc-systems \
  --image gcr.io/your-project/arc-systems \
  --platform managed
```

## 📊 Analytics & Tracking

### Vercel Analytics (Built-in)

Add to `layout.tsx`:

```typescript
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics

1. Install package:

```bash
npm install @next/third-parties
```

2. Add to layout:

```typescript
import { GoogleAnalytics } from "@next/third-parties/google";

<GoogleAnalytics gaId="G-XXXXXXXXXX" />;
```

## 🔒 Contact Form Integration

The contact form currently uses client-side validation. To enable email sending:

### Option 1: FormSpree

1. Sign up at [formspree.io](https://formspree.io)
2. Update form action in `contact/page.tsx`

### Option 2: SendGrid API

```bash
npm install @sendgrid/mail
```

Create API route: `src/app/api/contact/route.ts`

### Option 3: Email Service (Resend, Postmark, etc.)

```bash
npm install resend
```

## 🧪 Development

### Running Locally

```bash
npm run dev
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Building

```bash
npm run build
npm start
```

## 🎨 Design System

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold/ExtraBold
- **Body**: Regular
- **Code**: JetBrains Mono (optional)

### Components

All components are in `src/components/ui/`:

- `Button`: Primary, secondary, outline variants
- `Card`: Hoverable cards with consistent styling
- `Section`: Page sections with background variants

### Responsive Breakpoints

```css
sm: 640px   /* Tablet */
md: 768px   /* Small laptop */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

## 📱 Mobile Optimization

- Mobile-first design approach
- Touch-friendly tap targets (min 44x44px)
- Optimized images with lazy loading
- Responsive navigation with hamburger menu

## ♿ Accessibility

- Semantic HTML5
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast WCAG AA compliant

## 🔍 SEO

- Metadata configured per page
- Sitemap generation (add sitemap.ts)
- robots.txt configured
- Open Graph tags
- Structured data ready

## 📄 License

Unlicensed - Proprietary software for Arc Systems.

## 🤝 Support

For technical support or questions:

- Email: hello@arcsystems.tech
- Website: www.arcsystems.ae

---

**Built with precision by Arc Systems**
