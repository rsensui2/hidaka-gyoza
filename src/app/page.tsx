import { Hero } from "@/components/Hero";
import {
  ContactSection,
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
      <ContactSection />
      <StoreSection />
      <SiteFooter />
    </main>
  );
}
