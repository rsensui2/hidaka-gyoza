export const SITE = {
  brand: "ひだかや",
  tagline: "餃子専門店",
  phone: "03-0000-0000",
  email: "order@hidakaya.example",
  address: "東京都〇〇区〇〇 1-2-3",
  hours: "11:30 – 14:30 / 17:00 – 22:00（火曜定休）",
  access: "〇〇駅 徒歩3分",
} as const;

export const PRODUCTS = [
  {
    name: "焼き餃子",
    desc: "香ばしい皮と、肉汁あふれる餡。店の看板。",
    price: "¥550（6個）",
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "水餃子",
    desc: "湯気とともに届く、やさしい旨み。",
    price: "¥520（6個）",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "お取り寄せセット",
    desc: "ご家庭で焼き上がる、職人仕込みの冷凍餃子。",
    price: "¥3,200（50個）",
    image:
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const CRAFT_POINTS = [
  {
    title: "毎朝仕込む餡",
    body: "国産豚肉と季節の野菜を、その日の火入れに合わせて調合します。",
  },
  {
    title: "薄く、強い皮",
    body: "パリッと焼けて、中の汁を逃がさない。焼き目が命です。",
  },
  {
    title: "お取り寄せも同品質",
    body: "店で出す餃子と同じレシピを、ご自宅のフライパンへ。",
  },
] as const;

export const ORDER_STEPS = [
  {
    step: "01",
    title: "セットを選ぶ",
    body: "定番50個入り、またはギフト用詰め合わせから。",
  },
  {
    step: "02",
    title: "ご注文",
    body: "お問い合わせフォームから数量・配送先をお知らせください。",
  },
  {
    step: "03",
    title: "冷凍でお届け",
    body: "鮮度を保ったまま、全国へクール便で発送します。",
  },
] as const;
