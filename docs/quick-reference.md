# Arc Systems Website - Quick Reference

## 🚀 Quick Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript

# Clear cache
rm -rf .next
```

## 📁 Key Files

```
src/app/
├── page.tsx           # Homepage
├── layout.tsx         # Root layout (Header/Footer here)
├── globals.css        # Global styles
├── services/          # Services page
├── pricing/           # Pricing page
├── about/             # About page
├── contact/           # Contact page
├── sitemap.ts         # SEO sitemap
└── robots.ts          # Robots.txt

src/components/
├── ui/                # Reusable components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Section.tsx
├── layout/
│   ├── Header.tsx     # Navigation
│   └── Footer.tsx     # Footer
└── home/              # Homepage sections

Configuration:
├── tailwind.config.ts # Tailwind config (colors here)
├── next.config.ts     # Next.js config
├── tsconfig.json      # TypeScript config
└── package.json       # Dependencies
```

## 🎨 Brand Colors

```typescript
black: "#000000"         // Pure AMOLED black background
white: "#ffffff"         // Text
dark-grey: "#0a0a0a"     // Cards/alternate sections
medium-grey: "#222222"   // Darker elements
border-grey: "#2a2a2a"   // Borders
power-red: "#e50914"     // Accent/CTAs
white/70 opacity         // Secondary text
```

## 📝 Common Tasks

### Add New Page

```bash
mkdir src/app/new-page
# Create src/app/new-page/page.tsx
```

### Add New Component

```typescript
// src/components/ComponentName.tsx
export default function ComponentName() {
  return <div>Content</div>;
}
```

### Update Homepage Content

Edit files in: `src/components/home/`

### Change Navigation Links

Edit: `src/components/layout/Header.tsx`

### Update Footer

Edit: `src/components/layout/Footer.tsx`

## 🚀 Deployment

### Vercel (Easiest)

1. Push to GitHub
2. Import in Vercel
3. Deploy (automatic)

### Manual Build

```bash
npm run build
npm start
# Runs on http://localhost:3000
```

## 📊 Analytics Setup

```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to src/app/layout.tsx:
import { Analytics } from '@vercel/analytics/react';
// Add <Analytics /> before </body>
```

## 🔧 Contact Form Email

Update `src/app/contact/page.tsx`:

```typescript
// Option 1: FormSpree
const handleSubmit = async (e) => {
  await fetch("https://formspree.io/f/YOUR_ID", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

// Option 2: Create API route
// src/app/api/contact/route.ts
```

## 📱 Responsive Breakpoints

```css
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Extra large */
```

## 🐛 Common Issues

### Port in use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID] /F
```

### Build errors

```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### TypeScript errors

```bash
npm run type-check
```

## 📧 Email Addresses

- **Contact**: hello@arcsystems.tech
- **Domain**: arcsystems.ae

## 🔍 SEO URLs

```
Homepage: https://arcsystems.ae
Services: https://arcsystems.ae/services
Pricing: https://arcsystems.ae/pricing
About: https://arcsystems.ae/about
Contact: https://arcsystems.ae/contact
```

## 📦 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v3
- MDX (for projects)
- React 19

## ⚡ Performance

- All pages are static (pre-rendered)
- Automatic code splitting
- Font optimization (Inter from Google Fonts)
- Mobile-first responsive design

## 🎯 Key Features

✅ Dark theme only
✅ Fully responsive
✅ SEO optimized
✅ TypeScript
✅ MDX for projects
✅ Contact form with validation
✅ Professional UI components
✅ Mobile navigation
✅ Fast performance

## 📚 Documentation

- `DEPLOYMENT-GUIDE.md` - Complete deployment instructions
- `DEVELOPMENT-README.md` - Development documentation
- `WEBSITE-CONTENT.md` - All website content
- `content/PROJECTS-LIST.md` - Project templates

## 🆘 Need Help?

1. Check `DEPLOYMENT-GUIDE.md` for detailed instructions
2. See `DEVELOPMENT-README.md` for development docs
3. All code has comments explaining functionality
4. Email: hello@arcsystems.tech

---

**Website Status: READY FOR PRODUCTION** ✅

Built with Next.js 14, TypeScript, and Tailwind CSS
Following SWE best practices
No emojis in production pages (only in docs)
Professional, clean, and fast
