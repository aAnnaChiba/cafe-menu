interface Props {
  /** 淹れ方の名称（例: "ドリップ" / "フレンチプレス"） */
  method: string;
  size?: number;
}

// 淹れ方を表すアイコン。名称に応じて該当アイコンを返します。
// 該当が無ければ null（テキストのみ表示）。
function BrewIcon({ method, size = 16 }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
    "aria-hidden": true,
  };

  // ドリップ（ペーパードリップ）：円錐ドリッパー＋ポット＋抽出のしずく
  if (method.includes("ドリップ")) {
    return (
      <svg {...common}>
        {/* ドリッパー（円錐） */}
        <path d="M5 4 H19 L13 12 H11 Z" />
        {/* しずく */}
        <path d="M12 13 V16" />
        {/* サーバー（カップ） */}
        <path d="M7 17 H17 V19 A2 2 0 0 1 15 21 H9 A2 2 0 0 1 7 19 Z" />
      </svg>
    );
  }

  // フレンチプレス：円筒の本体＋プランジャー（押し棒）＋取っ手
  if (method.includes("フレンチプレス") || method.includes("プレス")) {
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
    );
  }

  // 水出し（アイスコーヒー）：プラカップ＋ストロー＋氷
  if (method.includes("水出し") || method.includes("アイスコーヒー")) {
    return (
      <svg {...common}>
        {/* プラカップ本体 */}
        <path d="M7 7 H17 L15.5 21 H8.5 Z" />
        {/* ドーム型のフタ（少しカーブ） */}
        <path d="M7 7 Q12 3.5 17 7" />
        {/* ストロー（上からカップ内へ、斜めに） */}
        <path d="M14 2 L12 11" />
        {/* 液体レベル（少し波打たせる） */}
        <path d="M7.3 12 C10 11, 14 13, 16.7 12" />
        {/* 氷 (小さな斜め線2つ) */}
        <path d="M10 14.5 L11.5 16.5" />
        <path d="M13.5 13.5 L15 15.5" />
      </svg>
    );
  }

  return null;
}

export default BrewIcon;
