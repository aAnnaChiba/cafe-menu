interface Props {
  /** バッジ上部に円弧で表示する名称（cafeName を想定） */
  title: string
  /** バッジ下部に円弧で表示するサブテキスト */
  subtitle?: string
  /** 描画サイズ（正方形・px）。省略時 180 */
  size?: number
}

// エンジニア勉強会向けカフェのエンブレム（バッジ型）ロゴ。
// 中央にコーヒーカップ＋コード記号 </> を配し、円弧に沿って名称を配置。
// 依存ライブラリなしの自作 SVG。色は CSS 変数（--coffee 系）を継承します。
function Logo({ title, subtitle = 'CODE & COFFEE', size = 180 }: Props) {
  // 円弧テキスト用のパス半径
  const r = 74
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label={title}
      className="logo"
    >
      <defs>
        {/* 上の弧（左→右・上向き）：上部テキスト用 */}
        <path id="logo-arc-top" d={`M ${100 - r},100 A ${r},${r} 0 0 1 ${100 + r},100`} />
      </defs>

      {/* 外周の二重リング */}
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="currentColor" strokeWidth="1.5" />

      {/* 円弧テキスト */}
      <text className="logo__title" fill="currentColor">
        <textPath href="#logo-arc-top" startOffset="50%" textAnchor="middle">
          {title}
        </textPath>
      </text>
      <text className="logo__subtitle" fill="currentColor">
        <textPath href="#logo-arc-bottom" startOffset="50%" textAnchor="middle">
          {subtitle}
        </textPath>
      </text>

      {/* 左右の区切りドット（3時・9時方向） */}
      <circle cx="16" cy="100" r="2.5" fill="currentColor" />
      <circle cx="184" cy="100" r="2.5" fill="currentColor" />

      {/* 中央：コード記号 </>（コーヒーの湯気に見立てる） */}
      <text
        x="100"
        y="78"
        textAnchor="middle"
        fontFamily="'SFMono-Regular', Consolas, 'Courier New', monospace"
        fontSize="22"
        fontWeight="700"
        fill="currentColor"
      >
        &lt;/&gt;
      </text>

      {/* 中央：コーヒーカップ */}
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        {/* カップ本体（下すぼまり） */}
        <path d="M 80,92 L 120,92 L 115,120 Q 114,126 108,126 L 92,126 Q 86,126 85,120 Z" />
        {/* 取っ手 */}
        <path d="M 120,98 Q 134,99 134,109 Q 134,119 121,119" />
        {/* ソーサー */}
        <path d="M 74,133 L 126,133" />
      </g>
    </svg>
  )
}

export default Logo
