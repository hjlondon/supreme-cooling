/* Substituted glyph set (Lucide) loaded as a CSS mask so icons inherit
   currentColor. If the real icon set arrives, swap ICON_BASE — that is
   the whole migration. */
const ICON_BASE = 'https://unpkg.com/lucide-static@0.544.0/icons/'

export default function Icon({ name, size = 16, className = '', label }) {
  return (
    <span
      className={`icon ${className}`}
      style={{
        '--icon-url': `url(${ICON_BASE}${name}.svg)`,
        width: size,
        height: size,
      }}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  )
}
