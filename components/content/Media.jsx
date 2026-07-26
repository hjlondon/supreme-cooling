/* Ratio-locked image frame. Renders a hatched, labelled placeholder when
   no src is given — no photography was supplied, so placeholders stay
   honest instead of inviting stock imagery. */
export default function Media({ src, alt = '', ratio = '4x3', label = 'Site photo', flush = false }) {
  return (
    <div className={`media media--${ratio}${flush ? ' media--flush' : ''}`}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="media__placeholder">
          <span className="media__label">{label}</span>
        </div>
      )}
    </div>
  )
}
