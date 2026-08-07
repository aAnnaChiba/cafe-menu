# カフェメニュー HP

カフェのメニュー（コーヒー・紅茶・お菓子）を表示する Web サイトです。
**メニューの内容は `src/data/menu.json` を編集するだけ** で更新できます。

- 技術: React + Vite + TypeScript
- 公開: GitHub Pages（main ブランチへの push で自動デプロイ）

---

## 1. メニューの追加・編集方法

編集するのは **`src/data/menu.json` だけ** です。コードを触る必要はありません。

`categories`（コーヒー / 紅茶 / お菓子）の中の `items` 配列に、メニューを追加・編集します。

### コーヒーを1つ追加する例

`coffee` カテゴリの `items` に、以下をコピペして値を書き換えてください
（前の項目の後ろに `,` を付けるのを忘れずに）。

```json
{
  "name": "コロンビア スプレモ",
  "origin": "コロンビア",
  "description": "甘い香りとまろやかな口当たり。バランスのとれた王道の味。",
  "price": 580,
  "temperature": ["HOT", "ICE"],
  "brewMethod": "ハンドドリップ",
  "grind": "中挽き",
  "image": "images/colombia.jpg",
  "flavor": {
    "acidity": 3,
    "bitterness": 3,
    "sweetness": 4,
    "body": 3,
    "aroma": 4
  }
}
```

### 各項目の説明

| 項目          | 必須 | 説明                                                                                                             |
| ------------- | :--: | ---------------------------------------------------------------------------------------------------------------- |
| `name`        |  ◯   | 商品名                                                                                                           |
| `description` |  ◯   | 説明文                                                                                                           |
| `origin`      |      | 産地（主にコーヒー）                                                                                             |
| `temperature` |      | `["HOT", "ICE"]` のうち該当するもの。HOT/ICE バッジを表示                                                        |
| `brewMethod`  |      | 淹れ方（例: ドリップ）                                                                                           |
| `roast`       |      | 焙煎度（例: ミディアムロースト）                                                                                 |
| `grind`       |      | 挽き方（例: 中細挽き）                                                                                           |
| `link`        |      | 商品の参考リンク（URL）。商品名がリンクになります                                                                |
| `image`       |      | 写真。`public/images/` に画像を置き、`images/ファイル名` と書く                                                  |
| `price`       |      | 価格（円）。数値で指定（例: `580`）。指定すると `¥580` と表示                                                    |
| `flavor`      |      | 味覚チャート。`acidity`(酸味) `bitterness`(苦味) `sweetness`(甘味) `body`(コク) `aroma`(香り) を **1〜5** で指定 |
| `brews`       |      | 複数の抽出法で提供する場合の一覧（配列）。詳しくは下記「複数の抽出法がある場合」を参照                           |

> 紅茶・お菓子では不要な項目（`flavor` や `brewMethod` など）は省略してかまいません。
> 値がある項目だけが自動的に表示されます。

### 複数の抽出法がある場合（`brews`）

1つの豆を **複数の淹れ方（抽出法）** で提供し、淹れ方ごとに説明や味覚チャートを
変えたい場合は、`brewMethod` / `flavor` を項目直下に書く代わりに、
**`brews` 配列** を使います。

`brews` を使うと、画面には **豆名を見出し** にして、その下に **抽出法ごとのカード** が
縦に並んで表示されます。`brews` があるかどうかは自動で判定され、表示が切り替わります
（コードを触る必要はありません）。

#### 書き方の考え方：「豆で共通の項目」と「抽出法ごとに変える項目」

1つの豆に対して、値が **豆全体で共通するもの** と **淹れ方ごとに変わるもの** を
分けて書きます。

- **豆で共通の項目**（項目の直下に書く）
  … `name` / `origin` / `roast` / `image` / `link` / `price` / `temperature`
- **抽出法ごとに変える項目**（`brews` 配列の中の各要素に書く）
  … `brewMethod`（その抽出法の名前・カードの見出し）/ `description`（その淹れ方の説明）/
  `flavor`（その淹れ方の味覚チャート）/ `grind`（挽き方・任意）/ `temperature`（任意）

> `brews` を使う場合、豆の項目直下の `flavor` や `brewMethod` は書きません
> （抽出法ごとに `brews` の中で指定するため）。
> 挽き方（`grind`）や提供温度（`temperature`）を淹れ方ごとに変えたいときは、
> `brews` の各要素の中に書きます。豆全体で共通なら項目直下に書いてもかまいません。

#### 記述例（1つの豆を4通りの淹れ方で提供）

`coffee` カテゴリの `items` に、以下のように書きます。

```json
{
  "name": "インド モンスーン",
  "origin": "🇮🇳 インド",
  "roast": "ハイロースト",
  "image": "images/india-monsoon.jpg",
  "description": "酸味が少なく独特のスパイシーな香味とまろやかなコクを持つ芳醇なコーヒー。",
  "brews": [
    {
      "brewMethod": "ドリップ",
      "grind": "中細挽き",
      "temperature": ["HOT"],
      "description": "基準となる味。酸味を下げ、コクと甘みを強調。",
      "flavor": {
        "acidity": 1,
        "bitterness": 3,
        "sweetness": 3.5,
        "body": 3.5,
        "aroma": 3.5
      }
    },
    {
      "brewMethod": "フレンチプレス",
      "grind": "粗挽き",
      "temperature": ["HOT"],
      "description": "オイル分による濃厚なコクと、スパイス感がダイレクトに伝わる味わい。",
      "flavor": {
        "acidity": 1,
        "bitterness": 3,
        "sweetness": 4,
        "body": 4.5,
        "aroma": 4
      }
    },
    {
      "brewMethod": "水出し",
      "grind": "中細挽き",
      "temperature": ["ICE"],
      "description": "酸味がなくなり、シロップのような甘みが際立つ。",
      "flavor": {
        "acidity": 0.5,
        "bitterness": 2.5,
        "sweetness": 4,
        "body": 3.5,
        "aroma": 3.5
      }
    }
  ]
}
```

> 抽出法が1つだけ（淹れ方ごとに味を変えない）の場合は、`brews` を使わず、
> 従来どおり項目直下に `brewMethod` と `flavor` を書けば、豆カードが1枚表示されます。

### 写真の追加

1. 画像ファイルを `public/images/` フォルダに入れる
2. `menu.json` の `image` に `"images/ファイル名.jpg"` と書く

### 注意（TypeScript の型チェック）

項目名のスペルミスや型の誤り（数値であるべき所に文字列など）は、
`npm run build` 時やエディタ上でエラーとして検出されます。型定義は `src/types.ts` にあります。

---

## 2. ローカルでの確認方法

```bash
npm install      # 初回のみ
npm run dev      # http://localhost:5173 が開きます
```

`menu.json` を保存すると、ブラウザに即座に反映されます。

本番ビルドの確認:

```bash
npm run build    # dist/ に出力 + 型チェック
npm run preview  # ビルド結果を確認
```

---

## 3. 公開方法（GitHub Pages）

1. このプロジェクトを GitHub のリポジトリに push する
2. リポジトリの **Settings → Pages** で、**Source** を **GitHub Actions** に設定する
3. 以降は `main` ブランチに push するたびに `.github/workflows/deploy.yml` が
   自動でビルド・公開します
4. 公開 URL は `https://<ユーザー名>.github.io/<リポジトリ名>/` です

> アセットは相対パス（`vite.config.ts` の `base: './'`）で読み込むため、
> リポジトリ名がどんな名前でもそのまま動作します。
