interface Props {
  /** 淹れ方の名称（例: "ドリップ" / "フレンチプレス"） */
  method: string
  size?: number
}

// 淹れ方を表すアイコン。名称に応じて該当アイコンを返します。
// 該当が無ければ null（テキストのみ表示）。
function BrewIcon({ method, size = 16 }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinejoin: 'round' as const,
    strokeLinecap: 'round' as const,
    'aria-hidden': true,
  }

  // ドリップ（ペーパードリップ）：円錐ドリッパー＋ポット＋抽出のしずく
  if (method.includes('ドリップ')) {
    return (
      <svg {...common}>
        {/* ドリッパー（円錐） */}
        <path d="M5 4 H19 L13 12 H11 Z" />
        {/* しずく */}
        <path d="M12 13 V16" />
        {/* サーバー（カップ） */}
        <path d="M7 17 H17 V19 A2 2 0 0 1 15 21 H9 A2 2 0 0 1 7 19 Z" />
      </svg>
    )
  }

  // フレンチプレス：円筒の本体＋プランジャー（押し棒）＋取っ手
  if (method.includes('フレンチプレス') || method.includes('プレス')) {
    return (
      <svg {...common}>
        {/* プランジャーのつまみ */}
        <path d="M12 2 V4" />
        {/* フタ */}
        <path d="M7 4 H17 V6 H7 Z" />
        {/* 本体 */}
        <path d="M8 6 H16 V19 A1.5 1.5 0 0 1 14.5 20.5 H9.5 A1.5 1.5 0 0 1 8 19 Z" />
        {/* プランジャーの円盤 */}
        <path d="M8 12 H16" />
        {/* 取っ手 */}
        <path d="M16 9 Q20 10 20 13 Q20 16 16 16" />
      </svg>
    )
  }

  return null
}

export default BrewIcon
