import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import {
  CRAFT_POINTS,
  ORDER_STEPS,
  PRODUCTS,
  SITE,
} from "@/lib/content";

export function CraftSection() {
  return (
    <section id="craft" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <Reveal>
          <p className="mb-4 text-xs tracking-[0.35em] text-gold">CRAFT</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-[0.12em] md:text-5xl">
            毎日、同じ火入れはしない。
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            ひだかやの餃子は、その日の肉と野菜の状態を見て餡を調えます。香ばしい焼き目と、口に広がる肉汁。店でも、ご家庭でも、同じ味を届けます。
          </p>
        </Reveal>
        <Reveal className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1400&q=80"
            alt="湯気が立つ餃子の料理"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-3">
        {CRAFT_POINTS.map((point, index) => (
          <Reveal key={point.title} className="border-t border-paper/15 pt-6">
            <article>
              <p className="text-xs tracking-[0.3em] text-chili">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl tracking-wider">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{point.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="border-y border-paper/10 bg-charcoal/60 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs tracking-[0.35em] text-gold">MENU</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-[0.12em] md:text-5xl">
            店の味を、そのままお届け。
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            焼き餃子・水餃子に加え、ご家庭用の冷凍お取り寄せセットをご用意しています。
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <li key={product.name}>
              <Reveal className="group">
                <div className="relative mb-5 aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wider">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{product.desc}</p>
                <p className="mt-4 text-sm tracking-wider text-gold">{product.price}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function OrderSection() {
  return (
    <section id="order" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs tracking-[0.35em] text-gold">ORDER</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-[0.12em] md:text-5xl">
            お取り寄せの流れ
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            まずはお気軽にご連絡ください。数量やギフト包装にも対応します。
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {ORDER_STEPS.map((item) => (
            <li key={item.step}>
              <Reveal className="bg-smoke/50 p-6 md:p-8">
                <p className="font-[family-name:var(--font-display)] text-3xl text-chili">
                  {item.step}
                </p>
                <h3 className="mt-4 text-xl tracking-wider">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-14 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex bg-chili px-8 py-4 text-sm tracking-wider text-paper transition hover:bg-chili-deep"
          >
            お問い合わせフォームへ
          </a>
          <a
            href={`tel:${SITE.phone.replace(/-/g, "")}`}
            className="inline-flex border border-paper/30 px-8 py-4 text-sm tracking-wider transition hover:border-gold hover:text-gold"
          >
            電話する {SITE.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-paper/10 bg-charcoal/40 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <Reveal>
          <p className="mb-4 text-xs tracking-[0.35em] text-gold">CONTACT</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-[0.12em] md:text-5xl">
            お問い合わせ
          </h2>
          <p className="mt-5 max-w-md text-muted">
            お取り寄せのご相談やご質問は、こちらのフォームからどうぞ。送信後、確認メールをお送りします。
          </p>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

export function StoreSection() {
  return (
    <section id="store" className="border-t border-paper/10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-xs tracking-[0.35em] text-gold">STORE</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-[0.12em] md:text-5xl">
            店舗情報
          </h2>
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="tracking-[0.2em] text-muted">店名</dt>
              <dd className="mt-1 text-lg tracking-wider">{SITE.brand}</dd>
            </div>
            <div>
              <dt className="tracking-[0.2em] text-muted">住所</dt>
              <dd className="mt-1 text-lg tracking-wider">{SITE.address}</dd>
            </div>
            <div>
              <dt className="tracking-[0.2em] text-muted">営業時間</dt>
              <dd className="mt-1 text-lg tracking-wider">{SITE.hours}</dd>
            </div>
            <div>
              <dt className="tracking-[0.2em] text-muted">アクセス</dt>
              <dd className="mt-1 text-lg tracking-wider">{SITE.access}</dd>
            </div>
            <div>
              <dt className="tracking-[0.2em] text-muted">電話</dt>
              <dd className="mt-1 text-lg tracking-wider">
                <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="hover:text-gold">
                  {SITE.phone}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="relative min-h-[320px] overflow-hidden bg-smoke">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80"
            alt="温かみのある飲食店の店内"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-[family-name:var(--font-display)] text-2xl tracking-[0.15em]">
            鉄板の音が聞こえる店へ。
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-paper/10 px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-[family-name:var(--font-display)] text-xl tracking-[0.2em]">
          {SITE.brand}
        </p>
        <p className="text-xs tracking-wider text-muted">
          © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
