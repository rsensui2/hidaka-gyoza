"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { ok: false, message: "" };

/**
 * 氏名・メール・内容のシンプルな問い合わせフォーム。
 */
export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm tracking-wider text-muted">
          お名前 <span className="text-chili">必須</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={80}
          autoComplete="name"
          enterKeyHint="next"
          className="w-full border border-paper/20 bg-ink/40 px-4 py-3 text-paper outline-none transition placeholder:text-muted/50 focus:border-gold"
          placeholder="山田 太郎"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm tracking-wider text-muted">
          メールアドレス <span className="text-chili">必須</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          enterKeyHint="next"
          className="w-full border border-paper/20 bg-ink/40 px-4 py-3 text-paper outline-none transition placeholder:text-muted/50 focus:border-gold"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm tracking-wider text-muted">
          お問い合わせ内容 <span className="text-chili">必須</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={2000}
          rows={5}
          enterKeyHint="send"
          className="w-full resize-y border border-paper/20 bg-ink/40 px-4 py-3 text-paper outline-none transition placeholder:text-muted/50 focus:border-gold"
          placeholder="お取り寄せのご相談、ご質問など"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex bg-chili px-8 py-4 text-sm tracking-wider text-paper transition hover:bg-chili-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "送信中…" : "送信する"}
      </button>

      {state.message ? (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm tracking-wider ${state.ok ? "text-gold" : "text-chili"}`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
