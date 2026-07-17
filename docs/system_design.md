# ひだかや LP — システム設計

## 概要

静的に近い Next.js App Router のシングルページ LP。データはコード内定数。バックエンド・DB なし。

## 構成

```
src/app/
  layout.tsx    # メタデータ・フォント・共通レイアウト
  page.tsx      # LP 本体
  globals.css   # デザイントークン・モーション
components/     # セクション単位の UI
public/         # 静的アセット
docs/           # 要件・設計
```

## デプロイ

| 環境 | 方式 |
|------|------|
| 本番 | Vercel（GitHub `hidaka-gyoza` 連携） |
| ローカル | `npm run dev` または `docker compose up` |

## デザイン方針

- ブランド名「ひだかや」をファーストビューの主役にする
- ヒーローはフルブリード画像＋最小コピー＋ CTA
- 炭火の夜をイメージしたダーク基調＋唐辛子レッド／胡麻ゴールド
- スクロールリビールとヒーローの微細な動きで存在感を出す

## 非機能

- LCP: ヒーロー画像は `priority` / `fetchPriority="high"`
- 下記折画像は `loading="lazy"`
- 外部フォントは `next/font` で自己ホスト
