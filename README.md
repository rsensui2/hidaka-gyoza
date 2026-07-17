# ひだかや

餃子専門店「ひだかや」のランディングページ（Next.js）。

## 開発

```bash
cp .env.example .env.local
# RESEND_API_KEY / CONTACT_TO_EMAIL を設定
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開いてください。

### 環境変数

| 変数 | 説明 |
|------|------|
| `RESEND_API_KEY` | Resend の API キー |
| `CONTACT_TO_EMAIL` | 店舗側の受信メール |
| `RESEND_FROM_EMAIL` | 送信元（開発時は `onboarding@resend.dev` 可） |

> `onboarding@resend.dev` では、Resend アカウントのメール以外への送信が制限されます。お客様への自動返信を本番運用するには、Resend でドメイン検証してください。

## Docker

```bash
docker compose up --build
```

## デプロイ

Vercel にデプロイ済み（GitHub: [rsensui2/hidaka-gyoza](https://github.com/rsensui2/hidaka-gyoza)）。

## ドキュメント

- [要件定義](./docs/requirements.yaml)
- [システム設計](./docs/system_design.md)
