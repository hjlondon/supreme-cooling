import Button from '../core/Button'
import Icon from '../core/Icon'

export default function CTABanner({
  title = 'Ready to discuss your air conditioning requirements?',
  text = 'Speak directly with our experienced team for expert advice, fast response, and competitive commercial solutions.',
}) {
  return (
    <div className="cta-banner">
      <div className="cta-banner__inner">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="cta-banner__actions">
          <Button href="/contact" icon="arrow-right">
            Contact Us Today
          </Button>
          <a href="tel:+442039165880" className="cta-banner__phone">
            <Icon name="phone" size={20} />
            020 3916 5880
          </a>
        </div>
      </div>
    </div>
  )
}
