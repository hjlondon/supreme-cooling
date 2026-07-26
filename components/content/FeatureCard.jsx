import Icon from '../core/Icon'

export default function FeatureCard({ icon, title, text }) {
  return (
    <article className="card feature-card card--lift">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <span className="icon-disc">
          <Icon name={icon} size={22} />
        </span>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
      </div>
    </article>
  )
}
