import type { Category } from '../types'
import MenuItemCard from './MenuItemCard'

interface Props {
  category: Category
}

// 1カテゴリ（コーヒー・紅茶・お菓子など）の見出し + メニュー一覧。
function MenuSection({ category }: Props) {
  return (
    <section className="menu-section" id={category.id}>
      <h2 className="menu-section__title">{category.name}</h2>
      <div className="menu-section__grid">
        {category.items.map((item, i) => (
          <MenuItemCard key={`${category.id}-${i}`} item={item} />
        ))}
      </div>
    </section>
  )
}

export default MenuSection
