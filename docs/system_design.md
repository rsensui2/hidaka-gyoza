# ひだかや LP — システム設計

## 概要

Next.js App Router のシングルページ LP。コンテンツはコード内定数。問い合わせのみ Resend API 経由でメール送信する。

## 構成

```
src/app/
  layout.tsx              # メタデータ・フォント
  page.tsx                # LP 本体
  globals.css
  actions/
    contact.ts            # 問い合わせ Server Action（Resend）
components/
  ContactForm.tsx         # 問い合わせフォーム（クライアント）
  Hero.tsx / Sections.tsx
lib/content.ts
docs/
```

## 問い合わせフロー

1. ユーザーが氏名・メール・内容を送信
2. Server Action でバリデーション
3. Resend で店舗宛に通知（`replyTo` = お客様メール）
4. Resend でお客様宛に受付完了の自動返信
5. UI に成功 / 失敗を表示

## 環境変数

| 変数 | 用途 |
|------|------|
| `RESEND_API_KEY` | Resend API キー |
| `CONTACT_TO_EMAIL` | 店舗が受け取る問い合わせ先 |
| `RESEND_FROM_EMAIL` | 送信元（検証済みドメイン推奨。開発は `ひだかや <onboarding@resend.dev>`） |

> `onboarding@resend.dev` 利用時は、Resend アカウントに紐づくメール以外への送信が制限されます。本番の自動返信には独自ドメイン検証が必要です。

## デプロイ

| 環境 | 方式 |
|------|------|
| 本番 | Vercel（環境変数を設定） |
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
- シークレットはサーバー側のみで参照
