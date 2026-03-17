# Kahmo Portfolio

Portfolio website for **Kamilla Freitas** — a social media specialist, graphic designer, and visual identity creator. Built from scratch with Next.js as a single-page application with bilingual support (PT-BR / EN).

**Live:** https://kahmoagportfolio.vercel.app

## Features

- **Bilingual (PT-BR / EN)** — Full i18n with `next-intl`, locale switcher in the navbar, and localized URL paths (e.g., `/obrigado` vs `/thank-you`)
- **Portfolio with filters** — Filterable project grid by category (Social Media, Visual Identity, Graphic Design, Scriptwriting) with expandable image galleries and lightbox
- **Services showcase** — Four service cards with detailed descriptions and deliverables
- **Contact form** — Validated with Zod, emails sent via Resend API, redirects to a thank-you page on success
- **Google Calendar booking** — Direct scheduling link integrated into the contact section
- **Dark theme** — Always-on dark mode with a pink (#ffa5da) / cyan (#90e5e6) accent palette
- **Animated hero** — Mouse-tracking parallax blobs and staggered fade-in animations via Framer Motion
- **Floating CTA** — Persistent "Get a Quote" button with a pulse animation
- **Social proof** — Managed accounts section displaying follower counts and platforms
- **SEO & Open Graph** — Dynamic metadata per locale, Twitter cards, and structured OG tags
- **Error tracking** — Sentry integration for global error boundaries

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Animations | Framer Motion |
| i18n | next-intl v4 |
| Forms | React Hook Form + Zod |
| Email | Resend |
| Fonts | Inter, Space Grotesk, TT Ramillas (custom) |
| Deploy | Vercel |

## Project Structure

```
kahmo/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale-aware layout (html, body, fonts, metadata)
│   │   ├── page.tsx            # Home — assembles all sections
│   │   └── obrigado/page.tsx   # Thank-you page after form submission
│   ├── api/contato/route.ts    # POST endpoint — validates + sends email via Resend
│   ├── layout.tsx              # Root layout (minimal wrapper)
│   ├── error.tsx               # Global error boundary (Sentry)
│   └── globals.css             # Tailwind config, custom theme, animations
├── components/
│   ├── Hero.tsx                # Hero section with parallax blobs
│   ├── About.tsx               # Bio, skills, photo placeholder
│   ├── Services.tsx            # Service cards grid
│   ├── Portfolio.tsx           # Filterable portfolio with lightbox
│   ├── SocialMedia.tsx         # Managed accounts showcase
│   ├── ContactForm.tsx         # Contact form + booking link
│   ├── FloatingButton.tsx      # Floating CTA
│   ├── Footer.tsx              # Footer with social links
│   └── ui/                     # shadcn/ui primitives (button, input, form, etc.)
├── i18n/
│   ├── messages/
│   │   ├── pt.json             # Portuguese translations
│   │   └── en.json             # English translations
│   ├── routing.ts              # Locale config and path mappings
│   ├── navigation.ts           # Localized Link, redirect, useRouter
│   └── request.ts              # Server-side locale resolution
├── lib/
│   ├── portfolio-data.ts       # Portfolio items (clients, categories, images)
│   ├── resend.ts               # Resend email sender
│   ├── validators.ts           # Zod schemas for contact form
│   └── utils.ts                # cn() utility (clsx + tailwind-merge)
├── types/
│   └── index.ts                # Shared TypeScript interfaces
└── public/
    └── fonts/                  # Custom TT Ramillas font
```

## Getting Started

### Prerequisites

- Node.js 18+
- A [Resend](https://resend.com) API key (for the contact form)

### Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=contato@kahmo.com.br
RESEND_TO_EMAIL=your-email@example.com
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/kahmo.ag
NEXT_PUBLIC_BOOKING_URL=https://calendar.google.com/...
```

### Install and Run

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

Deployed on **Vercel** with automatic builds from the `main` branch. Environment variables are configured in the Vercel dashboard.

- **Vercel project:** `marinabraus-projects/website-portfolio`
- **Custom domain:** `kahmo.com.br` (planned)

## Adding Portfolio Items

Edit `/lib/portfolio-data.ts` to add new clients:

1. Add images to `public/images/portfolio/<client-slug>/`
2. Add a new entry to the `portfolioItems` array with `slug`, `cliente`, `categoria`, `cor`, `descricao` (pt/en), and `imagens` paths

## License

Private repository. All rights reserved.
