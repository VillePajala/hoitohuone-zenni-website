# Product Requirements Document (PRD) — Hoitohuone Zenni

**Owner:** [Name] (Energy Healer)  
**Prepared by:** Ville Pajala  
**Location:** Lappeenranta, Finland  
**Last updated:** 2025-11-06

---

## 1. Overview

Hoitohuone Zenni is a calm, minimalist website for an energy healer trained through **Suomen Energiahoitajat – BodyMind**.  
The site informs visitors about what the healing method is, what it’s based on, who the practitioner is, and how to book a treatment through an **external booking link**.  

The website is built using **Next.js** and deployed via **Vercel**, optimized for simplicity, accessibility, and search performance.  
The primary language is **Finnish**, but the structure supports **multilingual expansion** (English to follow later).

**Primary Call to Action:** “Varaa aika” (Book a session).

---

## 2. Objectives & Metrics

**Goals**
- Build trust and credibility for Hoitohuone Zenni and the BodyMind approach.  
- Clearly communicate what energy healing is and what visitors can expect.  
- Convert visitors into bookings through a seamless user experience.  

**Success Indicators**
- ≥ 2% click-through rate to booking link.  
- ≥ 90 Lighthouse performance score (mobile).  
- Visitors spend ≥ 1 minute average on site.  

---

## 3. Audience

- Adults seeking holistic wellbeing or complementary therapy.  
- People searching for “energiahoito Lappeenranta” or “BodyMind energiahoito.”  
- Visitors curious about Suomen Energiahoitajat training and philosophy.  

Key questions to answer:  
1. What happens during a session?  
2. Who is the healer and why trust her?  
3. How do I book a time?  
4. What does it cost?  

---

## 4. Design & Branding

**Visual Style:**  
Light theme, minimal and calm with spa-like feeling.  
Soft whites, natural tones, pale blue/green accents.  

**Typography:**  
- Sans-serif for readability (e.g., Inter or Lato).  
- Elegant serif or soft sans for headings (e.g., Playfair Display).  

**Imagery:**  
Natural textures, diffused light, local environment, hands, nature, and calm interiors.  

**Tone of Voice:**  
Warm, clear, honest. Avoids exaggerated or medical claims. Focus on balance, wellbeing, and personal experience.

---

## 5. Site Structure & Navigation

**Navigation type:**  
- **Desktop:** Left sidebar navigation (sticky).  
- **Mobile:** Top header with hamburger menu.

**Pages:**  
1. **Home / Energiahoito** — What energy healing is and what happens in a session.  
2. **BodyMind** — The background and philosophy of the Suomen Energiahoitajat BodyMind method.  
3. **About Me** — Introduction, training, and personal story.  
4. **Prices & Booking** — Service descriptions, prices, and external booking link.  
5. **Testimonials** — Real customer experiences and stories.  
6. **Contact** — Location, map, and contact form.  

---

## 6. Content Requirements

- Introduction paragraph (150–200 words).  
- BodyMind explanation (100–150 words).  
- Practitioner bio (150–250 words) with professional portrait.  
- Price list: service name, duration, price.  
- Booking URL (external).  
- Testimonials (3–6).  
- Address, location, and directions.  
- Accessibility and privacy disclaimers.  

---

## 7. Technical Requirements

**Framework:** Next.js 15 (App Router).  
**Styling:** Tailwind CSS.  
**Rendering:** Static Site Generation (SSG) with Incremental Static Regeneration (ISR).  
**Content:** Markdown/MDX in `/content` folder.  
**Hosting:** Vercel.  
**Analytics:** Plausible (EU-friendly, cookieless).  
**Forms:** Minimal contact form via Formspree or Vercel Serverless Function.  
**Booking:** External link integration (no payments).  
**Images:** Optimized via next/image with responsive sizes.  
**i18n:** Finnish default, English placeholder structure ready.  
**SEO:** Advanced configuration planned for Phase 2 (structured data, schema, OG images).  
**Performance Targets:**  
- LCP < 2.5s mobile  
- CLS < 0.1  
- Lighthouse ≥ 90 on all metrics  

---

## 8. Page Details

### 8.1 Home / Energiahoito
- Hero section with tagline and “Varaa aika” button.  
- Summary of what energy healing is.  
- Small visual elements (background textures, calm motion).  

### 8.2 BodyMind
- Overview of the BodyMind training and its philosophy.  
- Link to Suomen Energiahoitajat official site.  

### 8.3 About Me
- Portrait and story of the healer.  
- Training, certifications, and personal approach.  
- Optional callout quote.  

### 8.4 Prices & Booking
- Transparent price table.  
- Note on payment methods (cash, mobilepay, etc.).  
- External booking link (highlighted).  

### 8.5 Testimonials
- Grid or card layout of 3–6 testimonials.  
- Each includes short quote, name (optional), and date.  

### 8.6 Contact
- Map embed (Google Maps iframe or Leaflet).  
- Address and directions.  
- Simple contact form (optional).  

---

## 9. URL Structure

- `/` — Home (Energiahoito)  
- `/bodymind`  
- `/about`  
- `/prices-booking`  
- `/testimonials`  
- `/contact`  

---

## 10. Accessibility & Compliance

- WCAG 2.1 AA compliant (contrast, keyboard navigation, ARIA roles).  
- Descriptive alt text for all images.  
- Form inputs labeled clearly.  
- GDPR-compliant data handling (minimal data).  

---

## 11. SEO (Phase 2 Plan)

- Local SEO for “energiahoito Lappeenranta.”  
- Semantic HTML5 structure.  
- Schema.org markup for LocalBusiness.  
- OG image templates via Next.js dynamic routes.  
- Blog expansion potential using MDX.  

---

## 12. Timeline (Example)

| Milestone | Target Date | Owner |
|------------|--------------|--------|
| Content ready | TBD | Client |
| Design prototype | TBD | Ville |
| Static site implementation | TBD | Ville |
| Test & QA | TBD | Ville |
| Go live on Vercel | TBD | Ville |

---

## 13. Acceptance Criteria

- All pages load statically, Lighthouse ≥ 90 (Performance/SEO/Best/Access).  
- Booking link correctly redirects to external system.  
- Layout visually stable and responsive.  
- Testimonials visible on desktop and mobile.  
- No console errors; sitemap.xml and robots.txt present.  

---

## 14. Future Roadmap

- English translation version.  
- Blog or “Thoughts” section.  
- Gift card sales via Stripe/Paytrail.  
- Richer SEO (FAQ schema, local structured data).  
- Simple CMS (Sanity/Contentlayer) for content management.

---

**End of Document**
