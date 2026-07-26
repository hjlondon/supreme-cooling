import Link from 'next/link'
import Icon from '../core/Icon'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div>
            <img
              src="/assets/logo-horizontal.webp"
              alt="Supreme Cooling Services"
              className="site-footer__logo"
            />
            <p className="site-footer__blurb">
              Trusted commercial air conditioning specialists serving London
              and the South East. NVQ qualified, F-Gas certified, and an
              approved Mitsubishi Heavy Industries Diamond Dealer.
            </p>
          </div>
          <div>
            <h4>Quick links</h4>
            <ul className="site-footer__links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="site-footer__contact">
              <li>
                <Icon name="phone" size={16} />
                <a href="tel:+442039165880">020 3916 5880</a>
              </li>
              <li>
                <Icon name="map-pin" size={16} />
                <span>Chislehurst, Greater London, BR7 5BE</span>
              </li>
              <li>
                <Icon name="clock" size={16} />
                <span>24/7 emergency response</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>
            Supreme Cooling Services Limited. All rights reserved.
          </span>
          <span>Commercial and residential HVAC, London</span>
        </div>
      </div>
    </footer>
  )
}
