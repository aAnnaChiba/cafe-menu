import type { MenuItem } from '../types'
import FlavorChart from './FlavorChart'

interface Props {
  item: MenuItem
}

// 1つのメニューを表すカード。
// 任意項目（産地・温度・淹れ方・写真・味覚チャートなど）は、
// menu.json に値があるときだけ表示します。
function MenuItemCard({ item }: Props) {
  return (
    <article className="menu-card">
      {item.image && (
        <img className="menu-card__image" src={item.image} alt={item.name} />
      )}

      <div className="menu-card__body">
        <div className="menu-card__head">
          <h3 className="menu-card__name">{item.name}</h3>
          {typeof item.price === 'number' && (
            <span className="menu-card__price">¥{item.price.toLocaleString()}</span>
          )}
        </div>

        {item.origin && (
          <p className="menu-card__origin">産地：{item.origin}</p>
        )}

        <p className="menu-card__desc">{item.description}</p>

        {item.temperature && item.temperature.length > 0 && (
          <div className="menu-card__temps">
            {item.temperature.map((t) => (
              <span
                key={t}
                className={`temp-badge temp-badge--${t.toLowerCase()}`}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {(item.brewMethod || item.grind) && (
          <dl className="menu-card__specs">
            {item.brewMethod && (
              <div className="spec">
                <dt>淹れ方</dt>
                <dd>{item.brewMethod}</dd>
              </div>
            )}
            {item.grind && (
              <div className="spec">
                <dt>挽き方</dt>
                <dd>{item.grind}</dd>
              </div>
            )}
          </dl>
        )}

        {item.flavor && (
          <div className="menu-card__flavor">
            <FlavorChart flavor={item.flavor} />
          </div>
        )}
      </div>
    </article>
  )
}

export default MenuItemCard
