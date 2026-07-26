# Supreme Cooling Services — Next.js site

Marketing site for Supreme Cooling Services Limited (London commercial &
residential HVAC), built to the supplied design-system README — a
derivation from the logo, not a copy of the live site's stylesheet.

## Pages

- `/` — Home (hero ink band, stats, services, clients, FAQs, CTA)
- `/services` — the four services with detail sections
- `/about-us` — company, credentials, clients
- `/contact` — contact points and enquiry form (front-end only, no backend)

## Structure

- `styles/tokens/*.css` — colour, typography, spacing, shape, motion tokens
  and element resets, exactly as specified in the design-system README
- `app/globals.css` — imports the tokens and holds all component styles
- `components/` — core / content / forms / site components
- `lib/content.js` — all site copy, authored to the brand voice
- `public/assets/logo-horizontal.webp` — the supplied artwork, untouched
  (the white footer version is a CSS `filter` recolour, no redrawing)

## Known substitutions (flagged in the design-system README)

- **Fonts**: Chakra Petch / Barlow / IBM Plex Mono via `next/font/google` —
  substitutions until the real faces are supplied. Swap in `app/layout.jsx`.
- **Icons**: Lucide via CSS mask from unpkg. Swap `ICON_BASE` in
  `components/core/Icon.jsx` to migrate to the real set.
- **Photography**: none supplied — every image slot renders a hatched,
  labelled placeholder (`components/content/Media.jsx`). Pass `src` when
  real site photos arrive. Do not fill with stock.

## Run

Node.js is not installed system-wide on this machine; a portable Node
v22.23.1 lives at `%LOCALAPPDATA%\Programs\nodejs-portable`.

```
%LOCALAPPDATA%\Programs\nodejs-portable\node.exe node_modules\next\dist\bin\next dev
```

or, with Node on PATH: `npm run dev`
