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
  "flavor": { "acidity": 3, "bitterness": 3, "sweetness": 4, "body": 3, "aroma": 4 }
}
```

### 各項目の説明

| 項目 | 必須 | 説明 |
| --- | :---: | --- |
| `name` | ◯ | 商品名 |
| `description` | ◯ | 説明文 |
| `origin` |  | 産地（主にコーヒー） |
| `temperature` |  | `["HOT", "ICE"]` のうち該当するもの。HOT/ICE バッジを表示 |
| `brewMethod` |  | 淹れ方（例: ドリップ） |
| `roast` |  | 焙煎度（例: ミディアムロースト） |
| `grind` |  | 挽き方（例: 中細挽き） |
| `link` |  | 商品の参考リンク（URL）。商品名がリンクになります |
| `image` |  | 写真。`public/images/` に画像を置き、`images/ファイル名` と書く |
| `flavor` |  | 味覚チャート。`acidity`(酸味) `bitterness`(苦味) `sweetness`(甘味) `body`(コク) `aroma`(香り) を **1〜5** で指定 |

> 紅茶・お菓子では不要な項目（`flavor` や `brewMethod` など）は省略してかまいません。
> 値がある項目だけが自動的に表示されます。

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
