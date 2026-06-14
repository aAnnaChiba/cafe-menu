interface Props {
  /** 焙煎度の名称（例: "ミディアムロースト"） */
  roast: string
}

// 焙煎の度合いを「浅煎り → 深煎り」のスケール上で示すコンポーネント。
// 焙煎度の一般的な並び（浅い順）。名称にこのキーワードが含まれれば位置を決定。
const ROAST_SCALE = [
  'ライト',
  'シナモン',
  'ミディアム',
  'ハイ',
  'シティ',
  'フルシティ',
  'フレンチ',
  'イタリアン',
]

/** 焙煎度名から 0〜1 の位置を求める。該当が無ければ中央(0.5)。 */
function roastPosition(name: string): number {
  // 「フルシティ」を「シティ」より先に判定するため、長い名前から照合
  const order = [...ROAST_SCALE]
    .map((label, index) => ({ label, index }))
    .sort((a, b) => b.label.length - a.label.length)
  for (const { label, index } of order) {
    if (name.includes(label)) {
      return index / (ROAST_SCALE.length - 1)
    }
  }
  return 0.5
}

function RoastLevel({ roast }: Props) {
  const pos = roastPosition(roast)
  return (
    <div className="roast">
      <div className="roast__label">
        <span className="roast__caption">焙煎度</span>
        <span className="roast__name">{roast}</span>
      </div>
      <div className="roast__scale">
        <span className="roast__end">浅煎り</span>
        <div className="roast__bar">
          <span
            className="roast__marker"
            style={{ left: `${pos * 100}%` }}
            aria-hidden
          />
        </div>
        <span className="roast__end">深煎り</span>
      </div>
    </div>
  )
}

export default RoastLevel
