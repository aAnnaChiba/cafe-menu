import type { MenuItem } from '../types'
import FlavorChart from './FlavorChart'
import BrewIcon from './BrewIcon'
import RoastLevel from './RoastLevel'

interface Props {
  item: MenuItem
}

// 1つのメニューを表すカード（タグ強調デザイン）。
// 産地・焙煎度・淹れ方・挽き方・HOT/ICE を色付きタグで並べ、
// 区切り線をはさんで説明文・味覚チャートを表示します。
// 任意項目は menu.json に値があるときだけ表示されます。
function MenuItemCard({ item }: Props) {
  const hasTags = item.origin || item.brewMethod || item.grind

  return (
    <article className="menu-card">
      {item.image && (
        <img className="menu-card__image" src={item.image} alt={item.name} />
      )}

      <div className="menu-card__body">
        <div className="menu-card__main">
        <div className="menu-card__head">
          <h3 className="menu-card__name">
            {item.link ? (
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            ) : (
              item.name
            )}
            {item.temperature?.map((t) => (
              <span key={t} className={`tag tag--temp tag--temp-${t.toLowerCase()}`}>
                {t}
              </span>
            ))}
          </h3>
          {typeof item.price === 'number' && (
            <span className="menu-card__price">¥{item.price.toLocaleString()}</span>
          )}
        </div>

        {hasTags && (
          <div className="menu-card__tags">
            {item.origin && (
              <span className="tag tag--origin">{item.origin}</span>
            )}
            {item.brewMethod && (
              <span className="tag tag--brew">
                <BrewIcon method={item.brewMethod} />
                {item.brewMethod}
              </span>
            )}
            {item.grind && <span className="tag tag--brew">{item.grind}</span>}
          </div>
        )}

        {item.roast && <RoastLevel roast={item.roast} />}

          <hr className="menu-card__divider" />

          <p className="menu-card__desc">{item.description}</p>
        </div>

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
