import Icon from '@/components/core/Icon'
import SectionHeading from '@/components/core/SectionHeading'
import ContactForm from '@/components/forms/ContactForm'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/content'

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact Supreme Cooling Services for air conditioning installation, servicing, repairs, and ventilation across London. Call 020 3916 5880 — 24/7 emergency response.',
}

const CONTACT_POINTS = [
  {
    icon: 'phone',
    title: 'Phone',
    body: (
      <a href={PHONE_HREF} className="spec" style={{ fontSize: 'var(--text-lede)' }}>
        {PHONE_DISPLAY}
      </a>
    ),
    note: '24/7 for emergencies',
  },
  {
    icon: 'map-pin',
    title: 'Registered address',
    body: <span>Chislehurst, Greater London, BR7 5BE</span>,
    note: 'Serving London and the South East',
  },
  {
    icon: 'clock',
    title: 'Response',
    body: <span>Fast, reliable response for both existing and new clients</span>,
    note: 'Enquiries answered within one working day',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="container page-header__inner reveal">
          <span className="eyebrow">Contact</span>
          <h1>Ready to discuss your air conditioning requirements?</h1>
          <p className="lede">
            Speak directly with our experienced team for expert advice, fast
            response, and competitive commercial solutions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: 'var(--section-pad)' }}>
            {CONTACT_POINTS.map((c) => (
              <div key={c.title} className="card">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <span className="icon-disc">
                    <Icon name={c.icon} size={22} />
                  </span>
                  <h3 className="card__title">{c.title}</h3>
                  <div>{c.body}</div>
                  <p className="card__text">{c.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div>
              <SectionHeading
                eyebrow="Enquiry"
                title="Tell us what the building needs"
                lede="Send the basics and we will come back with next steps — usually a survey, then a written quotation."
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
