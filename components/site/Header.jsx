'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from '../core/Icon'
import Button from '../core/Button'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Our Services' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <a href="tel:+442039165880">
            <Icon name="phone" size={14} />
            020 3916 5880
          </a>
          <a href="/contact">
            <Icon name="mail" size={14} />
            Request a callback
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" aria-label="Supreme Cooling Services — home">
            <img
              src="/assets/logo-horizontal.webp"
              alt="Supreme Cooling Services"
              width={168}
              height={70}
              style={{ width: 168, height: 'auto' }}
            />
          </Link>
          <nav className="site-nav" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-nav__link"
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <span className="site-nav__cta">
              <Button href="/contact">Contact Us</Button>
            </span>
          </nav>
        </div>
      </header>
    </>
  )
}
