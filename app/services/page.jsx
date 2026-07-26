import Button from '@/components/core/Button'
import SectionHeading from '@/components/core/SectionHeading'
import Media from '@/components/content/Media'
import CheckList from '@/components/content/CheckList'
import CTABanner from '@/components/content/CTABanner'
import Icon from '@/components/core/Icon'
import { SERVICES } from '@/lib/content'

export const metadata = {
  title: 'Our Services',
  description:
    'Air conditioning installation, maintenance and servicing, repairs and fault finding, and ventilation — for commercial and residential clients across London.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="page-header">
        <div className="container page-header__inner reveal">
          <span className="eyebrow">Our Services</span>
          <h1>Air Conditioning &amp; Ventilation Services</h1>
          <p className="lede">
            Whether it’s a residential setting or a commercial space, every
            job is surveyed, specified, and carried out by NVQ qualified,
            F-Gas certified engineers.
          </p>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`section${i % 2 === 1 ? ' section--subtle' : ''}`}
        >
          <div className="container grid-2">
            <div style={{ order: i % 2 === 1 ? 2 : 0 }}>
              <span className="icon-disc" style={{ marginBottom: 'var(--space-4)' }}>
                <Icon name={s.icon} size={22} />
              </span>
              <SectionHeading title={s.title} />
              <div className="prose" style={{ marginTop: 'calc(-1 * var(--space-6))' }}>
                <p>{s.summary}</p>
                <p>{s.detail}</p>
              </div>
              <div style={{ marginTop: 'var(--space-6)' }}>
                <Button href="/contact" variant="ghost" icon="arrow-right">
                  Contact Us
                </Button>
              </div>
            </div>
            <Media ratio="16x10" label={`${s.title} photo`} />
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container grid-2">
          <div>
            <SectionHeading
              eyebrow="Not sure where to start?"
              title="Unsure About Your Requirements?"
              lede="Tell us about the space and what it needs to do. We survey before we quote, and we recommend only what the building actually needs."
            />
            <CheckList
              items={[
                'Free site survey and written quotation',
                'Manufacturer-backed installation standards',
                'F-Gas compliance documentation included',
                'Planned maintenance schedules to suit your site',
              ]}
            />
          </div>
          <Media ratio="4x3" label="Plant room photo" />
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container">
          <CTABanner />
        </div>
      </section>
    </>
  )
}
