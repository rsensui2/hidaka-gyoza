import { Hero } from "@/components/Hero";
import {
  CraftSection,
  OrderSection,
  ProductsSection,
  SiteFooter,
  StoreSection,
} from "@/components/Sections";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <CraftSection />
      <ProductsSection />
      <OrderSection />
      <StoreSection />
      <SiteFooter />
    </main>
  );
}
