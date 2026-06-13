import type { Flavor } from '../types'

interface Props {
  flavor: Flavor
  /** 描画サイズ（正方形・px）。省略時 180 */
  size?: number
}

// 5軸の味覚レーダーチャート（依存ライブラリなしの自作 SVG）。
// 各値は 1〜5 を想定。
const AXES: { key: keyof Flavor; label: string }[] = [
  { key: 'acidity', label: '酸味' },
  { key: 'bitterness', label: '苦味' },
  { key: 'sweetness', label: '甘味' },
  { key: 'body', label: 'コク' },
  { key: 'aroma', label: '香り' },
]

const MAX = 5

/** 中心からの角度・距離を SVG 座標に変換（頂点を上向きに） */
function point(cx: number, cy: number, radius: number, index: number, total: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  }
}

function FlavorChart({ flavor, size = 180 }: Props) {
  const cx = size / 2
  const cy = size / 2
  // ラベルを収めるため描画半径は少し小さめに
  const radius = size / 2 - 26

  // 背景グリッド（1〜5 の同心多角形）
  const gridLevels = Array.from({ length: MAX }, (_, i) => i + 1)

  // 実データのポリゴン頂点
  const dataPoints = AXES.map((axis, i) => {
    const value = Math.max(0, Math.min(MAX, flavor[axis.key]))
    const r = (radius * value) / MAX
    return point(cx, cy, r, i, AXES.length)
  })
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(' ')

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="味覚チャート"
      className="flavor-chart"
    >
      {/* グリッド */}
      {gridLevels.map((level) => {
        const r = (radius * level) / MAX
        const pts = AXES.map((_, i) => {
          const p = point(cx, cy, r, i, AXES.length)
          return `${p.x},${p.y}`
        }).join(' ')
        return (
          <polygon
            key={level}
            points={pts}
            fill="none"
            stroke="#e0d6c8"
            strokeWidth={1}
          />
        )
      })}

      {/* 中心から各軸への線 */}
      {AXES.map((_, i) => {
        const p = point(cx, cy, radius, i, AXES.length)
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke="#e0d6c8"
            strokeWidth={1}
          />
        )
      })}

      {/* データ領域 */}
      <polygon
        points={dataPath}
        fill="rgba(150, 96, 53, 0.35)"
        stroke="#966035"
        strokeWidth={2}
      />

      {/* ラベル */}
      {AXES.map((axis, i) => {
        const p = point(cx, cy, radius + 14, i, AXES.length)
        return (
          <text
            key={axis.key}
            x={p.x}
            y={p.y}
            fontSize={12}
            fill="#5b4636"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {axis.label}
          </text>
        )
      })}
    </svg>
  )
}

export default FlavorChart
