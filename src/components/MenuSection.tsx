import type { Category } from '../types'
import MenuItemCard from './MenuItemCard'
import BeanBrewGroup from './BeanBrewGroup'

interface Props {
  category: Category
}

// 1カテゴリ（コーヒー・紅茶・お菓子など）の見出し + メニュー一覧。
// item に brews があれば「豆見出し＋抽出法ごとのカード（縦積み）」、
// なければ従来の「豆カード」を表示します（menu.json の形で自動切替）。
function MenuSection({ category }: Props) {
  return (
    <section className="menu-section" id={category.id}>
      <h2 className="menu-section__title">{category.name}</h2>
      <div className="menu-section__grid">
        {category.items.map((item, i) =>
          item.brews && item.brews.length > 0 ? (
            <BeanBrewGroup key={`${category.id}-${i}`} item={item} />
          ) : (
            <MenuItemCard key={`${category.id}-${i}`} item={item} />
          )
        )}
      </div>
    </section>
  )
}

export default MenuSection
