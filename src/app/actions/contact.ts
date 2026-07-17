"use server";

import { Resend } from "resend";

export type ContactState = {
  ok: boolean;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * HTML メール用に特殊文字をエスケープする。
 */
function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/**
 * 問い合わせを受け付け、店舗通知とお客様への自動返信を Resend で送信する。
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "お名前・メールアドレス・内容を入力してください。" };
  }

  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "メールアドレスの形式が正しくありません。" };
  }

  if (name.length > 80 || message.length > 2000) {
    return { ok: false, message: "入力内容が長すぎます。短くして再度お試しください。" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL ?? "ひだかや <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return {
      ok: false,
      message: "送信設定が未完了です。しばらくしてから再度お試しください。",
    };
  }

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    const notify = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `【ひだかや】お問い合わせ — ${name}`,
      html: `
        <p>ウェブサイトからお問い合わせがありました。</p>
        <p><strong>お名前:</strong> ${safeName}</p>
        <p><strong>メール:</strong> ${safeEmail}</p>
        <p><strong>内容:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (notify.error) {
      console.error("Resend notify error:", notify.error);
      return {
        ok: false,
        message: "送信に失敗しました。時間をおいて再度お試しください。",
      };
    }

    const reply = await resend.emails.send({
      from,
      to: [email],
      subject: "【ひだかや】お問い合わせを受け付けました",
      html: `
        <p>${safeName} 様</p>
        <p>このたびはひだかやへお問い合わせいただき、ありがとうございます。<br />
        内容を確認のうえ、折り返しご連絡いたします。</p>
        <p><strong>お問い合わせ内容:</strong></p>
        <p>${safeMessage}</p>
        <p>―――<br />餃子専門店 ひだかや</p>
      `,
    });

    if (reply.error) {
      // 店舗通知は成功しているので受付自体は成功扱い（テスト送信元制限など）
      console.error("Resend auto-reply error:", reply.error);
      return {
        ok: true,
        message:
          "お問い合わせを受け付けました。自動返信の送信に失敗した可能性がありますが、店舗には届いています。",
      };
    }

    return {
      ok: true,
      message: "お問い合わせを受け付けました。確認メールをお送りしました。",
    };
  } catch (error) {
    console.error("Contact submit failed:", error);
    return {
      ok: false,
      message: "ネットワークエラーが発生しました。しばらくしてから再度お試しください。",
    };
  }
}
