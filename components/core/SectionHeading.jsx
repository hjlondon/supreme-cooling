export default function SectionHeading({ eyebrow, title, lede, center = false, as: Tag = 'h2' }) {
  return (
    <div className={`section-heading${center ? ' section-heading--center' : ''}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag>{title}</Tag>
      {lede ? <p className="lede">{lede}</p> : null}
    </div>
  )
}
