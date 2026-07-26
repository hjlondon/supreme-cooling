import Icon from '../core/Icon'

export default function CheckList({ items, columns = 1 }) {
  return (
    <ul className={`check-list${columns === 2 ? ' check-list--2col' : ''}`}>
      {items.map((item) => (
        <li key={item} className="check-list__item">
          <span className="check-list__badge">
            <Icon name="check" size={14} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
