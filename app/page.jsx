import Button from '@/components/core/Button'
import Icon from '@/components/core/Icon'
import Stat from '@/components/core/Stat'
import SectionHeading from '@/components/core/SectionHeading'
import ServiceCard from '@/components/content/ServiceCard'
import FeatureCard from '@/components/content/FeatureCard'
import CheckList from '@/components/content/CheckList'
import Testimonial from '@/components/content/Testimonial'
import Accordion from '@/components/content/Accordion'
import CTABanner from '@/components/content/CTABanner'
import Media from '@/components/content/Media'
import {
  SERVICES,
  CLIENTS,
  STATS,
  FEATURES,
  FAQS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '@/lib/content'

export default function HomePage() {
  return (
    <>
      {/* Hero — the page's one ink band, photographic with a scrim */}
      <section className="page-header page-header--hero page-header--photo">
        <div className="page-header__media">
          <img src="/assets/vanhero.png" alt="Supreme Cooling Services van on site" />
        </div>
        <div className="container page-header__inner reveal">
          <span className="badge badge--inverse">
            <Icon name="award" size={14} />
            Mitsubishi Heavy Industries Diamond Dealer
          </span>
          <h1>Commercial Air Conditioning Specialists</h1>
          <p className="lede">
            Installation, servicing, and repairs across London. NVQ qualified,
            F-Gas certified engineers with 20+ years of combined industry
            experience — reachable 24/7 when it matters most.
          </p>
          <div className="page-header__actions">
            <Button href="/contact" icon="arrow-right">
              Contact Us Today
            </Button>
            <Button href={PHONE_HREF} variant="ghost-inverse" icon="phone">
              {PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid-4">
            {STATS.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--subtle">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            title="Air conditioning and ventilation, done properly"
            lede="Four core services cover the full life of your system — from first survey to emergency call-out."
          />
          <div className="grid-4">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                text={s.summary}
                href={`/services#${s.slug}`}
                mediaLabel={`${s.title} photo`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who do we work with */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <SectionHeading
              eyebrow="Clients"
              title="Who Do We Work With?"
              lede="We work with a wide range of commercial clients who rely on efficient, reliable air conditioning systems to keep their spaces running smoothly."
            />
            <CheckList items={CLIENTS} columns={2} />
          </div>
          <Media ratio="4x3" label="Engineers on site" />
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section--subtle">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Turn up, do it properly, be reachable when it fails"
          />
          <div className="grid-3">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} text={f.text} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--prose-max)' }}>
          <Testimonial
            quote="Supreme Cooling fitted out our office floor with minimal disruption and handed over on schedule. The maintenance visits since have been just as reliable."
            name="Facilities Manager"
            detail="Commercial office fit-out, Central London"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--subtle">
        <div className="container" style={{ maxWidth: 'var(--prose-max)' }}>
          <SectionHeading
            eyebrow="FAQs"
            title="Unsure About Your Requirements?"
            lede="Straight answers to the questions we hear most. If yours is not here, call and ask."
          />
          <Accordion items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <CTABanner />
        </div>
      </section>
    </>
  )
}
