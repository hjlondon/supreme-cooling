import Icon from '../core/Icon'

export default function Testimonial({ quote, name, detail, rating = 5 }) {
  return (
    <figure className="testimonial">
      <div className="testimonial__stars" aria-label={`Rated ${rating} out of 5`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Icon key={i} name="star" size={18} />
        ))}
      </div>
      <blockquote className="testimonial__quote">{quote}</blockquote>
      <figcaption className="testimonial__attribution">
        <strong>{name}</strong>
        {detail}
      </figcaption>
    </figure>
  )
}
