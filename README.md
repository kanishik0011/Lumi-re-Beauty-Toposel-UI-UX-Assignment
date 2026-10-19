# Lumière Beauty

Premium beauty e-commerce homepage created for the Toposel UI/UX assignment.

## Project overview

Lumière Beauty is a fictional editorial beauty shop designed around a slower, more considered shopping ritual. The experience uses warm ivory, blush, muted rose, and charcoal with a Playfair Display / DM Sans pairing. The content hierarchy moves from brand promise → category discovery → product comparison → offer → reassurance → newsletter, keeping conversion visible without making the page feel transactional.

## Design approach (submission-ready, 126 words)

Lumière Beauty is designed as a quiet, editorial alternative to noisy beauty marketplaces. Warm ivory and blush create a soft canvas, while charcoal typography and muted rose accents keep the experience grounded and premium. The hero establishes the ritual-led brand promise, then moves visitors through category discovery and a focused “Beauty Edit” product grid. Product cards are intentionally compact but actionable: category, price, wishlist, and add-to-bag are visible without visual clutter. The promotional banner adds a clear conversion moment, while shopping benefits and the newsletter reduce uncertainty and invite a longer relationship. On mobile, navigation collapses, imagery crops deliberately, and all discovery surfaces become two-column or stacked layouts. Motion is subtle, focus states remain visible, and reduced-motion preferences are honored.

## Feature list

- Responsive desktop, tablet, and mobile homepage layouts
- Mobile navigation toggle with accessible labels
- Mock product search and category filtering
- Add-to-bag interaction with live cart count and toast feedback
- Wishlist toggles per product
- Newsletter validation with success/error feedback
- Featured products show the complete All collection by default
- Dedicated amber fragrance bottle imagery for Santal Veil Eau de Parfum
- Generated hero, category, and product imagery with stable crops
- Reduced-motion support and keyboard-friendly controls

## Technology stack

- React + TypeScript
- Vite 6
- Lucide React icons
- CSS design tokens and responsive layout system (Tailwind-compatible token structure)
- Generated PNG assets for the editorial campaign photography

## Run locally

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```

## Design deliverables

- [Desktop low-fidelity wireframe](./design-deliverables/wireframe-desktop.svg)
- [Mobile low-fidelity wireframe](./design-deliverables/wireframe-mobile.svg)
- [Desktop high-fidelity reference](./design-deliverables/high-fidelity-desktop.svg)
- [Mobile high-fidelity reference](./design-deliverables/high-fidelity-mobile.svg)
- [Design system / tokens](./design-deliverables/design-system.svg)
- [UX notes](./design-deliverables/ux-notes.md)
- [Portfolio case study](./design-deliverables/case-study.md)

The SVGs are editable/importable into Figma. To create the final native Figma file, import the five SVGs into pages named `Wireframes`, `High fidelity`, and `Design system`, then enable view access.

## UI/UX decisions

- The journey is ordered as promise → category → product comparison → offer → reassurance → retention.
- Muted rose is reserved for emphasis, focus, status, and editorial accents so CTAs stay legible.
- Product cards expose price, wishlist, and add-to-bag without requiring a detail-page detour.
- Fragrance has a real filterable product, so every visible top-level category resolves to content.
- Sticky navigation uses scroll offsets to keep filtered sections from hiding below the header.

## Responsive behavior

The layout has explicit desktop/tablet/mobile rules: split hero and four-column grids at larger widths; stacked hero, two-column discovery grids, full-width promotion, and stacked footer at 720px and below. The mobile header exposes both menu and search controls. The CSS audit covers 1440px, 1024px, 768px, 390px, and 360px breakpoints; visual browser capture was unavailable in this environment.

## Screenshots

No screenshot files are claimed here: browser-level capture was unavailable because the automation inventory exposed no targetable browser. Export full-page 1440px and 390px captures after opening the local preview.

Wireframe previews are available as the editable SVG deliverables above.

## Links to complete before submission

- Figma URL: `PENDING — create native Figma file and enable view access`
- Portfolio URL: `PENDING — add your real portfolio/case-study URL`
- Deployment URL: `PENDING — Sites version 2 saved; private publish failed in the Sites connector`

## Submission checklist

- [x] Responsive high-fidelity homepage
- [x] Mobile navigation, search/filtering, bag feedback, wishlist, newsletter validation
- [x] Desktop low-fidelity wireframe
- [x] Mobile low-fidelity wireframe
- [x] Reusable design tokens and component notes
- [x] Figma-importable SVG deliverables
- [x] Case study and UX rationale
- [x] TypeScript and production build checks
- [x] Mobile search affordance, focus-visible states, and Fragrance filter defect fixed
- [x] Sites source version 2 saved with the corrected source
- [ ] Figma URL created and access enabled
- [ ] Portfolio URL added
- [ ] 1440px / 390px screenshots exported from a browser
- [ ] Deployment URL verified and added (Sites publish returned a terminal failure)
