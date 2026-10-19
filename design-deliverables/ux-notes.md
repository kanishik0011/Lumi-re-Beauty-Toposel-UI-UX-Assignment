# Lumière Beauty — UX notes

## Navigation decisions

The top-level navigation uses familiar beauty categories and a persistent search field on desktop. On mobile, the menu collapses into a compact drawer so the header stays calm and the first touch targets remain easy to reach. “The Edit” is a secondary route to the promotional moment rather than a competing category.

## Layout hierarchy

The hero gives the brand promise a generous reading area and pairs it with a tactile product still life. Categories answer “where should I begin?” before the product grid asks “which item is right for me?”. The product grid keeps add-to-bag actions visible on every card. Benefits and newsletter appear after the conversion moment to reduce hesitation and build repeat intent.

## Product discovery

Users can browse by category, search by product/category name, and reset filters if there are no results. The category cards and navigation both feed the same collection section, preserving a predictable destination. Wishlist is intentionally lightweight demo state and does not claim persistence.

## Responsive adaptations

- Desktop: split hero, four-up category grid, four-up product grid, multi-column footer.
- Tablet: narrower copy/image split and reduced gaps while preserving four-up product rhythm where readable.
- Mobile: stacked hero, two-up category/product grids, full-width promo, two-column benefits, stacked footer.

## Accessibility considerations

- Semantic `header`, `nav`, `main`, `section`, `article`, and `footer` landmarks.
- Visible button labels and `aria-label`s for icon-only controls.
- Form label is visually hidden but available to assistive technology.
- Focusable controls use native focus behavior; color is not the only product state cue.
- Reduced motion media query disables non-essential transitions.
- No claims such as dermatologist approval or clinical efficacy are made.
