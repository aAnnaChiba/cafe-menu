import menuData from './data/menu.json'
import type { Menu } from './types'
import MenuSection from './components/MenuSection'

// menu.json を Menu 型として読み込み。構造が型に合わなければ型エラーになります。
const menu = menuData as Menu

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <h1 className="site-header__title">{menu.cafeName}</h1>
        <nav className="site-nav">
          {menu.categories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="site-nav__link">
              {c.name}
            </a>
          ))}
        </nav>
      </header>

      <main className="site-main">
        {menu.categories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </main>

      <footer className="site-footer">
        <p>{menu.cafeName}</p>
      </footer>
    </div>
  )
}

export default App
