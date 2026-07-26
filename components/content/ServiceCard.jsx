import Link from 'next/link'
import Icon from '../core/Icon'
import Media from './Media'

export default function ServiceCard({ icon, title, text, href, mediaLabel }) {
  return (
    <article className="card card--media card--lift">
      <Media flush label={mediaLabel || title} />
      <div className="card__body">
        {icon ? (
          <span className="icon-disc">
            <Icon name={icon} size={22} />
          </span>
        ) : null}
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <Link href={href} className="card__link">
          Go to Service
          <Icon name="arrow-right" size={14} />
        </Link>
      </div>
    </article>
  )
}
