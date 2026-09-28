# Logistics Virtual Assistant — Portfolio

A production-ready personal portfolio site for a Logistics Virtual Assistant.
Built with React, Vite, Tailwind CSS v4, and Lucide icons.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Adding your photos

Drop your images into the `public/images/` folder:

| File | Where it appears | Recommended size |
| --- | --- | --- |
| `public/images/profile.jpg` | Large hero portrait (right side) | 720 × 900 px or larger, 4:5 portrait |
| `public/images/about.jpg` | Secondary photo in the About section | 720 × 900 px, 4:5 portrait |

Until the files exist, the site shows a styled placeholder telling you where to
put them. Nothing breaks.

Tips for the hero portrait:

- Business-casual, clean or plain background
- Portrait orientation, subject centered slightly high
- Compress before uploading (aim for under 400 KB)

## Editing the content

**Everything editable lives in one file: [`src/data/content.js`](src/data/content.js).**

You do not need to touch any component to change:

- Your name, job title, headline, and taglines (`profile`)
- Email, LinkedIn, Facebook, WhatsApp, location (`contact`)
- Navigation links (`navLinks`)
- Hero floating cards (`heroCards`)
- About copy and the three stats (`about`)
- Services cards (`services`)
- Toolkit / software badges (`toolkit`)
- Skills groups (`skills`)
- Workflow steps (`workflow`)
- Portfolio projects (`portfolio`)
- Testimonials (`testimonials`)
- Why-work-with-me benefits (`whyMe`)
- Experience timeline (`experience`)
- Contact form options (`cta`) and footer (`footer`)

### Icons

Icon fields take a [Lucide](https://lucide.dev/icons/) icon name as a string,
e.g. `"Truck"`. If you use a name that isn't already imported, add it to the
`iconMap` at the top of [`src/components/ui.jsx`](src/components/ui.jsx).

### Colors and fonts

Defined as CSS variables in [`src/index.css`](src/index.css) under `@theme`:
`--color-navy-*` (base), `--color-accent-*` (orange), `--color-teal-*` (secondary
accent). Change them there and every component follows. The font is Manrope,
loaded in `index.html`.

## Contact form

The form has no backend. On submit it opens the visitor's email client with a
prefilled message addressed to `contact.email`. To use a real form service
(Formspree, Netlify Forms, Web3Forms, etc.), replace `handleSubmit` in
[`src/components/Contact.jsx`](src/components/Contact.jsx).

## Sample data notice

All portfolio project previews, figures, carrier names, and testimonials are
**fictional sample data**, labeled as such on the page. Replace them with real
work and real client feedback before publishing.

## Deploying

The build output is a static `dist/` folder — deploy it to Netlify, Vercel,
Cloudflare Pages, or GitHub Pages.

```bash
npm run build
# then upload the dist/ folder
```
