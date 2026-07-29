import type { Brew } from '../types'
import FlavorChart from './FlavorChart'
import BrewIcon from './BrewIcon'

interface Props {
  brew: Brew
}

// 【抽出法カード】1つの淹れ方（抽出法）を表すカード。
// タイトルに淹れ方（アイコン付き）＋挽き方タグを置き、
// 本体は左に説明（description）、右に味覚チャートを表示します。
// 豆の共通情報（名前・画像・産地・焙煎度・温度）は BeanBrewGroup の
// 見出しにまとめて表示するため、ここには含めません。
function BrewCard({ brew }: Props) {
  return (
    <article className="menu-card brew-card">
      <div className="menu-card__body">
        <div className="menu-card__main">
          <div className="brew-card__head">
            <h4 className="brew-card__title">
              <BrewIcon method={brew.brewMethod} size={18} />
              {brew.brewMethod}
            </h4>
            {brew.grind && <span className="tag tag--brew">{brew.grind}</span>}
            {brew.temperature?.map((t) => (
              <span key={t} className={`tag tag--temp tag--temp-${t.toLowerCase()}`}>
                {t}
              </span>
            ))}
          </div>

          <hr className="menu-card__divider" />

          <p className="menu-card__desc">{brew.description}</p>
        </div>

        <div className="menu-card__flavor">
          <FlavorChart flavor={brew.flavor} />
        </div>
      </div>
    </article>
  )
}

export default BrewCard
