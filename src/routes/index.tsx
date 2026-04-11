import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Maison Dorée — Artisan Bakery & Pâtisserie" },
      {
        name: "description",
        content:
          "Handcrafted French pastries, artisan breads, and signature cakes since 1987. Visit our boutique bakery in Paris.",
      },
      { property: "og:title", content: "Maison Dorée — Artisan Bakery & Pâtisserie" },
      {
        property: "og:description",
        content:
          "Handcrafted French pastries, artisan breads, and signature cakes since 1987.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <MenuSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
