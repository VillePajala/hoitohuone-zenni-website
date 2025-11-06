# Hoitohuone Zenni Website

A modern, minimal website for an energy healing practice in Lappeenranta, Finland. Built with Next.js 16, featuring responsive design, Finnish language content, and seamless booking integration.

🌐 **Live Site:** [hoitohuone-zenni-website.vercel.app](https://hoitohuone-zenni-website.vercel.app)

## 📋 Overview

Hoitohuone Zenni offers BodyMind Energy Balancing treatments. This website serves as an online presence to inform visitors about energy healing, the BodyMind method, and facilitate easy booking for treatments.

## ✨ Features

- **6 Main Pages:**
  - Home (Energiahoito) - Introduction to energy healing
  - BodyMind - Detailed information about the BodyMind Energy Balancing Method
  - About (Minusta) - Practitioner bio and qualifications
  - Booking & Pricing (Ajanvaraus ja hinnasto) - Services and external booking integration
  - Testimonials (Kokemuksia) - Client experiences
  - Contact (Yhteystiedot) - Location and contact information

- **Responsive Navigation:**
  - Desktop: Fixed left sidebar navigation
  - Mobile: Hamburger menu with overlay

- **Modern Design:**
  - Clean white background
  - Minimal, spa-like aesthetic
  - Inter font for excellent readability
  - Image placeholders throughout
  - Accessible and user-friendly

- **Performance Optimized:**
  - Static Site Generation (SSG)
  - Next.js 16 with Turbopack
  - Optimized fonts and images
  - Fast page loads

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Hosting:** [Vercel](https://vercel.com/)
- **Booking Integration:** Vello booking system
- **Package Manager:** npm

## 📁 Project Structure

```
hoitohuone-zenni-website/
├── app/
│   ├── components/
│   │   ├── Sidebar.tsx          # Desktop sidebar navigation
│   │   └── MobileNav.tsx        # Mobile hamburger menu
│   ├── ajanvaraus/              # Booking & pricing page
│   ├── arvostelut/              # Testimonials page
│   ├── bodymind/                # BodyMind method page
│   ├── minusta/                 # About page
│   ├── yhteystiedot/            # Contact page
│   ├── layout.tsx               # Root layout with navigation
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── docs/
│   ├── PRD_Hoitohuone_Zenni.md # Product requirements document
│   └── mock.png                 # Design mockup
├── public/                      # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VillePajala/hoitohuone-zenni-website.git
cd hoitohuone-zenni-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization Guide

### Update Content

**Replace placeholder text** in the following files:
- `app/minusta/page.tsx` - Add practitioner bio and qualifications
- `app/ajanvaraus/page.tsx` - Update prices and cancellation policy
- `app/arvostelut/page.tsx` - Add real testimonials
- `app/yhteystiedot/page.tsx` - Add actual address, phone, email, hours

### Add Images

Replace placeholder divs with actual images:

```tsx
// Before (placeholder):
<div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
  <p className="text-gray-400">Kuva tulossa</p>
</div>

// After (with image):
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Description"
  width={1200}
  height={600}
  className="rounded-lg"
/>
```

### Update Booking URL

The booking link is in `app/ajanvaraus/page.tsx`:
```tsx
const bookingUrl = 'https://booking.vello.fi/hoitohuonezenni?...';
```

### Modify Colors

Edit `app/globals.css` to change the color scheme:
```css
body {
  background: #ffffff;  /* Change background color */
  color: #171717;       /* Change text color */
}
```

## 🌍 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Vercel will auto-detect Next.js and deploy
4. Your site will be live at `https://your-project.vercel.app`

### Build for Production

```bash
npm run build
npm start
```

## 📄 Documentation

- Full project requirements: `docs/PRD_Hoitohuone_Zenni.md`
- Design mockup: `docs/mock.png`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is private and proprietary to Hoitohuone Zenni.

## 👤 Author

**Ville Pajala**
- Built with Next.js and Claude Code
- Deployed on Vercel

## 🤝 Support

For questions or support, please contact the developer or refer to the [Next.js documentation](https://nextjs.org/docs).
