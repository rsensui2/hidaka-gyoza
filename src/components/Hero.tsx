import Image from "next/image";
import { SITE } from "@/lib/content";

/**
 * ファーストビュー。ブランド名・一行コピー・CTA・フルブリード画像のみ。
 */
export function Hero() {
  return (
    <header className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=2400&q=80"
          alt="鉄板で香ばしく焼けた餃子"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="hero-media object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/70 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="steam-glow absolute bottom-[18%] left-[12%] h-40 w-40 rounded-full bg-chili/20 blur-3xl" />
      </div>

      <nav className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 md:px-10">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-lg tracking-[0.2em] text-paper"
        >
          {SITE.brand}
        </a>
        <div className="flex items-center gap-6 text-sm tracking-wider text-paper/80">
          <a href="#products" className="transition hover:text-gold">
            メニュー
          </a>
          <a href="#order" className="transition hover:text-gold">
            お取り寄せ
          </a>
          <a href="#contact" className="transition hover:text-gold">
            お問い合わせ
          </a>
          <a href="#store" className="transition hover:text-gold">
            店舗
          </a>
        </div>
      </nav>

      <div className="relative z-10 flex min-h-[100svh] max-w-3xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-10 md:pb-24 md:pt-20">
        <p className="animate-rise mb-4 text-xs tracking-[0.35em] text-gold uppercase">
          {SITE.tagline}
        </p>
        <h1 className="animate-rise-delay-1 font-[family-name:var(--font-display)] text-[clamp(3.4rem,12vw,7.5rem)] leading-[0.95] tracking-[0.08em] text-paper">
          {SITE.brand}
        </h1>
        <p className="animate-rise-delay-2 mt-6 max-w-md text-base leading-relaxed text-paper/85 md:text-lg">
          一粒に、職人の火入れ。焼き立ての香ばしさと、ご自宅で楽しむお取り寄せ餃子。
        </p>
        <div className="animate-rise-delay-3 mt-10 flex flex-wrap gap-3">
          <a
            href="#order"
            className="inline-flex items-center justify-center bg-chili px-7 py-3.5 text-sm tracking-wider text-paper transition hover:bg-chili-deep"
          >
            お取り寄せを見る
          </a>
          <a
            href="#store"
            className="inline-flex items-center justify-center border border-paper/35 px-7 py-3.5 text-sm tracking-wider text-paper transition hover:border-gold hover:text-gold"
          >
            店舗情報
          </a>
        </div>
      </div>
    </header>
  );
}
