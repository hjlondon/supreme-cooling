'use client'

import { useState } from 'react'
import Icon from '../core/Icon'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.q} className="accordion__item">
            <button
              type="button"
              className="accordion__trigger"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              {item.q}
              <Icon name={open ? 'minus' : 'plus'} size={18} />
            </button>
            <div className="accordion__panel" data-open={open}>
              <div className="accordion__panel-inner">
                <p className="accordion__body">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
