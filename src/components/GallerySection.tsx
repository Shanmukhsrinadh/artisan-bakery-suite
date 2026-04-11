import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import cakeImg from "@/assets/cake.jpg";
import heroImg from "@/assets/hero-bakery.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const images = [
  { src: gallery1, alt: "Pastel French macarons", cols: "col-span-2", rows: "row-span-1" },
  { src: gallery2, alt: "Elegant tiered wedding cake", cols: "col-span-1", rows: "row-span-2" },
  { src: gallery3, alt: "Fresh cinnamon rolls with glaze", cols: "col-span-1", rows: "row-span-1" },
  { src: cakeImg, alt: "Chocolate layer cake on marble", cols: "col-span-1", rows: "row-span-1" },
  { src: gallery4, alt: "Artisan bread basket assortment", cols: "col-span-1", rows: "row-span-1" },
  { src: heroImg, alt: "Bakery counter with fresh pastries", cols: "col-span-2", rows: "row-span-1" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Gallery
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl">
              Our Visual Story
            </h2>
            <div className="mx-auto mt-2 h-px w-16 bg-gold" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[250px] md:grid-cols-3 lg:auto-rows-[300px]">
          {images.map((img, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.08}
              direction="none"
              className={`${img.cols} ${img.rows}`}
            >
              <div className="group h-full w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
