import menuData from './data/menu.json'
import type { Menu } from './types'
import MenuSection from './components/MenuSection'

// menu.json を Menu 型として読み込み。構造が型に合わなければ型エラーになります。
const menu = menuData as Menu

function App() {
  return (
    <div className="app">
      {/* スクロールに追従する左サイドバー（ロゴ＋ナビ）。
          スマホでは上部の横バーに切り替わる（CSSのメディアクエリ） */}
      <aside className="sidebar">
        <h1 className="sidebar__title">
          <img
            className="site-logo"
            src="images/a-ted-cafe-logo.png"
            alt={menu.cafeName}
          />
        </h1>
        <nav className="site-nav">
          {menu.categories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="site-nav__link">
              {c.name}
            </a>
          ))}
        </nav>
      </aside>

      <div className="content">
        <main className="site-main">
          {menu.categories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </main>

        <footer className="site-footer">
          <p>{menu.cafeName}</p>
        </footer>
      </div>
    </div>
  )
}

export default App
