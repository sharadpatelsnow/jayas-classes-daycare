# Jaya's Classes and Day Care Center — Website

Production website for **Jaya's Classes and Day Care Center**, Kharadi, Pune.

**Live URL:** https://jayasclasses.in  
**Contact:** +91 7869008525 | patel.jaya0@gmail.com  
**Address:** 2nd Floor, Tulaja Bhawani Nagar, Near D'Mart Ready, Kharadi, Pune 411014

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI Framework |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Styling |
| Framer Motion | Animations |
| React Router DOM 6 | Routing |
| React Helmet Async | SEO / Meta tags |
| React Hook Form + Zod | Form handling + validation |
| React Hot Toast | Notifications |
| Web3Forms | Email form submissions |

---

## Project Structure

```
src/
├── components/
│   ├── ui/           # SEO, Button, Section, Logo
│   └── layout/       # Navbar, Footer, FloatingCTA
├── data/
│   ├── constants.ts  # Business info, nav items
│   ├── blog.ts       # 30 SEO blog posts
│   ├── testimonials.ts # 12 parent reviews
│   └── faqs.ts       # 25 FAQs in 7 categories
├── pages/
│   ├── landing/      # 4 SEO landing pages
│   └── ...           # 12 main pages
├── utils/
│   ├── analytics.ts  # GA4 event tracking
│   ├── seo.ts        # SEO meta helpers
│   ├── form.ts       # Form submission + WhatsApp
│   └── validation.ts # Zod schemas
public/
├── sitemap.xml       # All 40+ URLs
├── robots.txt
└── favicon.svg
```

---

## Setup

### Prerequisites
- Node.js 18+
- npm 9+

### Install

```bash
git clone <repo-url>
cd jayas-classes
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

| Variable | Description | Get it from |
|---|---|---|
| `VITE_GA4_ID` | Google Analytics 4 ID | Google Analytics dashboard |
| `VITE_GTM_ID` | Google Tag Manager ID | GTM dashboard |
| `VITE_WEB3FORMS_KEY` | Web3Forms key for email delivery | https://web3forms.com (free) |

> **Note:** If `VITE_WEB3FORMS_KEY` is not set, admission and contact forms automatically fall back to WhatsApp — fully functional without any backend.

### Development

```bash
npm run dev
# Opens at http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview   # Preview production build locally
```

---

## Deployment

### Option 1: Vercel (Recommended — Free)

```bash
npm install -g vercel
vercel
```

Add environment variables in Vercel dashboard under Settings → Environment Variables.

For custom domain `jayasclasses.in`:
1. Go to Vercel Project → Domains
2. Add `jayasclasses.in` and `www.jayasclasses.in`
3. Update DNS at your registrar with Vercel's nameservers or A/CNAME records

### Option 2: Netlify (Free)

```bash
npm run build
# Upload the dist/ folder to Netlify, or connect GitHub for auto-deploy
```

Add environment variables in Netlify → Site Settings → Environment Variables.

### Option 3: GitHub Pages

Add to `vite.config.ts`:
```ts
base: '/repo-name/',   // only if not on custom domain
```

Use GitHub Actions workflow for auto-deployment.

### Option 4: Traditional Web Hosting (cPanel / Hostinger / GoDaddy)

```bash
npm run build
# Upload everything inside dist/ to your public_html folder via FTP
```

---

## Post-Deployment Checklist

- [ ] Replace `GTM-XXXXXXX` in `index.html` with real GTM ID
- [ ] Replace `G-XXXXXXXXXX` in `index.html` with real GA4 ID
- [ ] Set `VITE_WEB3FORMS_KEY` environment variable
- [ ] Update Google Maps embed URL in `src/data/constants.ts` (`mapsEmbed`)
- [ ] Update Google Maps share link (`mapsUrl`) with actual business listing URL
- [ ] Update Google Review URL in `src/pages/ReviewsPage.tsx` (`GOOGLE_REVIEW_URL`)
- [ ] Submit sitemap to Google Search Console: `https://jayasclasses.in/sitemap.xml`
- [ ] Verify site in Google Search Console
- [ ] Set up Google Business Profile if not already done
- [ ] Add OG image at `/public/og-image.jpg` (1200x630px recommended)
- [ ] Add actual photos to the Gallery page
- [ ] Test all WhatsApp links with correct phone number
- [ ] Test admission form submission
- [ ] Test mobile responsiveness on real devices
- [ ] Check all page titles and meta descriptions

---

## SEO Pages Included

| URL | Target Keywords |
|---|---|
| `/` | daycare kharadi, tuition kharadi |
| `/play-school-kharadi` | play school kharadi, nursery kharadi |
| `/day-care-center-kharadi` | day care center kharadi, daycare near dmart |
| `/tuition-classes-kharadi` | tuition classes kharadi |
| `/cbse-tuition-kharadi` | CBSE tuition kharadi |

---

## Analytics Events Tracked

| Event | Trigger |
|---|---|
| `whatsapp_click` | Any WhatsApp button click |
| `call_click` | Any phone number click |
| `direction_click` | Get Directions button |
| `form_submit` | Admission / Contact form |
| `cta_click` | Hero / banner CTAs |
| `page_view` | All page loads |

---

## Customisation

**Update business info:** `src/data/constants.ts`  
**Add blog posts:** `src/data/blog.ts` (follow the `BlogPost` interface)  
**Add testimonials:** `src/data/testimonials.ts`  
**Update FAQs:** `src/data/faqs.ts`  
**Change brand colors:** `tailwind.config.ts` → `colors.primary`, `colors.secondary`, `colors.accent`

---

## License

Private. All rights reserved — Jaya's Classes and Day Care Center.
