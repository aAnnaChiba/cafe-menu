// メニューデータ（src/data/menu.json）の型定義。
// menu.json を編集する際、この型に合っていないと `npm run build` や
// エディタ上で型エラーとして検出されます。

/** 味覚チャート。各値は 1〜5 の強さを表します。 */
export interface Flavor {
  /** 酸味 */
  acidity: number
  /** 苦味 */
  bitterness: number
  /** 甘味 */
  sweetness: number
  /** コク */
  body: number
  /** 香り */
  aroma: number
}

/** 提供温度。 */
export type Temperature = 'HOT' | 'ICE'

/** 1つのメニュー項目。基本項目以外は任意（紅茶・お菓子では省略可）。 */
export interface MenuItem {
  /** 商品名（必須） */
  name: string
  /** 説明（必須） */
  description: string
  /** 価格（円）。任意 */
  price?: number
  /** 産地。任意（主にコーヒー） */
  origin?: string
  /** 提供温度。例: ["HOT", "ICE"]。任意 */
  temperature?: Temperature[]
  /** 淹れ方。例: "ドリップ"。任意 */
  brewMethod?: string
  /** 挽き方。例: "中細挽き"。任意 */
  grind?: string
  /** 焙煎度。例: "ミディアムロースト"。任意（主にコーヒー） */
  roast?: string
  /** 商品の参考リンク（URL）。任意 */
  link?: string
  /** 写真パス。public/ からの相対パス。例: "images/foo.jpg"。任意 */
  image?: string
  /** 味覚チャート。任意（主にコーヒー） */
  flavor?: Flavor
}

/** メニューのカテゴリ（コーヒー・紅茶・お菓子など）。 */
export interface Category {
  /** 一意な識別子。例: "coffee" */
  id: string
  /** 画面に表示するカテゴリ名。例: "コーヒー" */
  name: string
  /** このカテゴリのメニュー一覧 */
  items: MenuItem[]
}

/** メニュー全体。 */
export interface Menu {
  /** カフェ名（ページ見出しに表示） */
  cafeName: string
  /** カテゴリ一覧 */
  categories: Category[]
}
