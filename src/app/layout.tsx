import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const display = Shippori_Mincho({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Noto_Sans_JP({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ひだかや | 餃子専門店・お取り寄せ",
  description:
    "餃子専門店「ひだかや」。香ばしい焼き餃子と、ご自宅で楽しむお取り寄せ餃子をお届けします。",
  openGraph: {
    title: "ひだかや | 餃子専門店・お取り寄せ",
    description:
      "一粒に、職人の火入れ。焼き立ての香ばしさと、ご自宅で楽しむお取り寄せ餃子。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="site-bg grain min-h-full">{children}</body>
    </html>
  );
}
