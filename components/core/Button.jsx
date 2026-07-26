import Link from 'next/link'
import Icon from './Icon'

export default function Button({
  href,
  children,
  variant = 'filled',
  icon,
  type,
  ...rest
}) {
  const className = `btn btn--${variant}`
  const content = (
    <>
      {children}
      {icon ? <Icon name={icon} size={16} /> : null}
    </>
  )
  if (href) {
    return (
      <Link href={href} className={className} {...rest}>
        {content}
      </Link>
    )
  }
  return (
    <button type={type || 'button'} className={className} {...rest}>
      {content}
    </button>
  )
}
