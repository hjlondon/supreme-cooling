import SectionHeading from '@/components/core/SectionHeading'
import Stat from '@/components/core/Stat'
import FeatureCard from '@/components/content/FeatureCard'
import CheckList from '@/components/content/CheckList'
import Media from '@/components/content/Media'
import CTABanner from '@/components/content/CTABanner'
import { CLIENTS, STATS, FEATURES } from '@/lib/content'

export const metadata = {
  title: 'About Us',
  description:
    'Supreme Cooling Services Limited are trusted commercial air conditioning specialists based in Chislehurst, serving London with NVQ qualified, F-Gas certified engineers.',
}

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="container page-header__inner reveal">
          <span className="eyebrow">About Us</span>
          <h1>Trusted Commercial Air Conditioning Specialists</h1>
          <p className="lede">
            20+ years of combined industry experience, based in Chislehurst,
            working across London and the South East.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="prose">
            <SectionHeading eyebrow="Who We Are" title="Do it once, do it properly" />
            <p>
              Supreme Cooling Services Limited are trusted commercial air
              conditioning specialists based in Chislehurst, Greater London.
              We install, service, and repair air conditioning and ventilation
              systems for commercial and residential clients across London.
            </p>
            <p style={{ marginTop: 'var(--space-4)' }}>
              Our engineers are NVQ qualified and F-Gas certified, with 20+
              years of combined industry experience. As an approved Mitsubishi
              Heavy Industries Diamond Dealer, we install to manufacturer
              standard and pass extended warranties on to our clients.
            </p>
            <p style={{ marginTop: 'var(--space-4)' }}>
              We sell with response times, not adjectives: fast, reliable
              response for both existing and new clients when it matters most,
              and 24/7 availability for emergencies.
            </p>
          </div>
          <Media ratio="4x3" label="Team photo" />
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container">
          <div className="grid-4">
            {STATS.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Credentials"
            title="Certified, approved, accountable"
          />
          <div className="grid-3">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} text={f.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container grid-2">
          <div>
            <SectionHeading
              eyebrow="Clients"
              title="Who Do We Work With?"
              lede="We work with a wide range of commercial clients who rely on efficient, reliable air conditioning systems to keep their spaces running smoothly."
            />
            <CheckList items={CLIENTS} columns={2} />
          </div>
          <Media ratio="4x3" label="Rooftop condensers photo" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTABanner />
        </div>
      </section>
    </>
  )
}
