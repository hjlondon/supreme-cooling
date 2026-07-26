'use client'

import { useState } from 'react'
import Button from '../core/Button'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="card" role="status">
        <h3 className="card__title">Thank you</h3>
        <p className="card__text" style={{ marginTop: 'var(--space-2)' }}>
          Your enquiry has been received. We aim to respond within one working
          day. If your requirement is urgent, call 020 3916 5880 — we are
          reachable 24/7.
        </p>
      </div>
    )
  }

  return (
    <form
      className="form-grid"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className="field">
        <label className="field__label" htmlFor="name">Name</label>
        <input className="input" id="name" name="name" required autoComplete="name" />
      </div>
      <div className="field">
        <label className="field__label" htmlFor="company">Company</label>
        <input className="input" id="company" name="company" autoComplete="organization" />
      </div>
      <div className="field">
        <label className="field__label" htmlFor="email">Email</label>
        <input className="input" id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label className="field__label" htmlFor="phone">Phone</label>
        <input className="input" id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field field--full">
        <label className="field__label" htmlFor="service">Service required</label>
        <select className="select" id="service" name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Air Conditioning Installation</option>
          <option>Maintenance &amp; Servicing</option>
          <option>Repairs &amp; Fault Finding</option>
          <option>Ventilation</option>
          <option>Unsure — I need advice</option>
        </select>
      </div>
      <div className="field field--full">
        <label className="field__label" htmlFor="message">Your requirements</label>
        <textarea
          className="textarea"
          id="message"
          name="message"
          required
          placeholder="Tell us about the site, the space, and any timescales."
        />
        <span className="field__hint">
          Unsure about your requirements? Send what you know — we survey
          before we quote.
        </span>
      </div>
      <div className="field field--full">
        <Button type="submit" variant="filled" icon="arrow-right">
          Contact Us
        </Button>
      </div>
    </form>
  )
}
