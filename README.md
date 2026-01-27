# Arc Systems Website - Project Setup Guide

This folder contains all the content, brand assets, and documentation needed to build the Arc Systems website.

**Focus**: AI, Machine Learning, Data Science, and Analytics solutions.

---

## 📁 Folder Structure

```
arc-systems-website/
├── README.md                          (This file)
├── WEBSITE-CONTENT.md                 (Complete website content - ALL PAGES)
├── brand-assets/                      (Logo files and brand assets)
│   ├── logo-full.svg                  (Black logo for light backgrounds)
│   ├── logo-white.svg                 (White logo for dark backgrounds)
│   ├── logo-mark.svg                  (Icon only - for favicons/small sizes)
│   ├── favicon.svg                    (Browser tab icon)
│   └── logo-concepts.html             (Reference: 4 design variations)
└── content/
    └── PROJECTS-LIST.md               (6 projects template - TO BE FILLED)
```

---

## 🚀 Next Steps

### 1. Move This Folder Out

Move the entire `arc-systems-website/` folder out of the docs directory to your preferred development location.

Example:

```bash
# Move to desktop or projects folder
mv "arc-systems-website" "C:/Users/Danish/Desktop/arc-systems-website"
```

### 2. Initialize Project

Navigate to the folder and set up your chosen tech stack.

**Recommended Options:**

#### Option A: Next.js (Recommended)

```bash
cd arc-systems-website
npx create-next-app@latest . --typescript --tailwind --app
```

#### Option B: React + Vite

```bash
cd arc-systems-website
npm create vite@latest . -- --template react-ts
npm install
```

#### Option C: Astro (Static/Fast)

```bash
cd arc-systems-website
npm create astro@latest . -- --template minimal
```

### 3. Configure Project

- Set up routing for pages (Home, Services, About, Pricing, Contact)
- Configure Tailwind CSS with brand colors from WEBSITE-CONTENT.md
- Set up fonts (Inter from Google Fonts)
- Add logo assets to public/assets folder

### 4. Build Pages

Use content from `WEBSITE-CONTENT.md`:

- Section 2: Homepage
- Section 3: Services page
- Section 4: Pricing page
- Section 5: About page
- Section 6: Contact page
- Section 7: Footer

### 5. Implement Contact Form

- Set up form handling (FormSpree, EmailJS, or custom API)
- Configure to send to: hello@arcsystems.tech
- Add validation as specified in WEBSITE-CONTENT.md

### 6. Deploy

- Build production version
- Deploy to hosting (Vercel, Netlify, AWS, etc.)
- Point arcsystems.ae domain to deployment

---

## 📋 Content Status

### ✅ Ready to Use

- Complete brand identity (colors, logos, typography)
- All page content written (Home, Services, About, Contact, Pricing)
- Service descriptions and pricing
- Legal pages available in parent docs
- CTAs and messaging

### ⚠️ Needs Your Input

- **Tagline choice**: Pick from 4 options in WEBSITE-CONTENT.md (default: "Engineering Intelligent Systems")
- **Projects**: Fill in `content/PROJECTS-LIST.md` with your 6 project details
- **Contact info**: Add WhatsApp/phone when available
- **Social links**: Add when profiles created

### 📸 Assets Needed Later

- Founder professional photo
- Project screenshots (for portfolio section)
- Hero background image (optional)
- Service illustrations (optional)

---

## 🎨 Brand Quick Reference

### Colors

```css
--black: #111111
--white: #FFFFFF
--dark-grey: #333333
--red: #E50914
```

### Typography

- **Headings**: Inter Bold/ExtraBold
- **Body**: Inter Regular
- **Code**: JetBrains Mono

### Logo Usage

- Light backgrounds → `logo-full.svg` (black)
- Dark backgrounds → `logo-white.svg` (white)
- Small sizes/favicon → `logo-mark.svg` or `favicon.svg`

---

## 📄 Key Files Reference

### WEBSITE-CONTENT.md

Complete content organized by section:

1. Brand Identity
2. Homepage
3. Services Page
4. Pricing Page
5. About Page
6. Contact Page
7. Footer
8. SEO Metadata
9. CTAs & Messaging
10. Tone & Voice
11. Image Requirements
12. Technical Notes

**Use this as your single source of truth for all content.**

### PROJECTS-LIST.md

Template for your 6 completed projects. Fill in:

- Project types and technologies
- Brief descriptions
- Key features
- Which can be showcased publicly

---

## 🛠️ Tech Stack Suggestions

Based on your expertise from docs:

**Frontend**:

- Next.js 14+ (App Router) ✅ Recommended
- React 18+ with TypeScript
- Tailwind CSS for styling
- shadcn/ui or Radix UI for components

**Forms & Email**:

- React Hook Form for validation
- EmailJS or FormSpree for contact form
- Resend or SendGrid for transactional emails

**Deployment**:

- Vercel (easiest for Next.js)
- Netlify (good for static)
- AWS (if you prefer full control)

**Analytics**:

- Google Analytics 4
- Vercel Analytics (if using Vercel)

---

## 🎯 MVP Scope Recommendation

**Phase 1 - Launch MVP** (2-3 weeks):

- [x] Homepage with hero, services overview, process, CTAs
- [x] Services page with 4 categories, tech stack
- [x] About page with company info, founder section
- [x] Pricing page with rates and packages
- [x] Contact page with form and info
- [x] Footer with links and contact
- [ ] Responsive design (mobile-first)
- [ ] SEO optimization
- [ ] Fast performance (Lighthouse 90+)

**Phase 2 - Enhancements** (After launch):

- [ ] Portfolio section with project case studies
- [ ] Blog/articles
- [ ] Client testimonials
- [ ] Enhanced animations/interactions
- [ ] Newsletter signup
- [ ] Live chat widget

---

## 📝 Questions to Resolve (Optional)

Answer these as you build, or use defaults:

1. **Tagline**: Using "Engineering Intelligent Systems" or different?
2. **Hero Image**: Abstract tech visual, gradient, or photo?
3. **Contact Form**: Which service for backend? (FormSpree, custom API?)
4. **Analytics**: Google Analytics only or additional tools?
5. **Hosting**: Vercel, Netlify, AWS, or other?
6. **Domain**: Ready to point arcsystems.ae to new site?

---

## 🔗 Original Docs Reference

If you need to reference original documentation:

- **Brand details**: `../brand/BRAND-IDENTITY.md`
- **Services & pricing**: `../finance/service-rate-card.md`
- **Company profile**: `../AGENCY-PROFILE-QUESTIONNAIRE.md`
- **Privacy policy**: `../legal/privacy-policy.md`
- **Terms of service**: `../legal/terms-of-service.md`

---

## ✅ Quality Checklist

Before launch, ensure:

- [ ] All content from WEBSITE-CONTENT.md is implemented
- [ ] Logo variants display correctly (light/dark modes)
- [ ] Brand colors match exactly
- [ ] All links work (internal & external)
- [ ] Contact form sends successfully
- [ ] Mobile responsive on all pages
- [ ] Fast loading (images optimized)
- [ ] SEO meta tags on all pages
- [ ] Privacy & Terms linked in footer
- [ ] All CTAs work (discovery call scheduling)
- [ ] Favicon displays in browser
- [ ] 404 page exists
- [ ] Analytics tracking configured

---

## 🚢 Ready to Build!

Everything you need is in this folder. Move it out, initialize your project, and start building.

**Questions?** Reference WEBSITE-CONTENT.md first - it has detailed answers.

**Need more context?** Original docs are in parent directory.

**Good luck!** 🚀
