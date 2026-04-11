import heroBg from "@/assets/hero-bakery.jpg";
import { useCallback } from "react";

export default function HeroSection() {
  const animateRef = useCallback((el: HTMLElement | null) => {
    if (el) el.classList.add("animate-fade-up");
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury artisan bakery with fresh pastries"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p
          className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/70"
          style={{ animationDelay: "0.2s", opacity: 0 }}
          ref={animateRef}
        >
          Artisan Bakery &bull; Est. 1987
        </p>
        <h1
          className="font-serif text-5xl font-light leading-[1.1] text-primary-foreground sm:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.4s", opacity: 0 }}
          ref={animateRef}
        >
          Maison Dorée
        </h1>
        <p
          className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-primary-foreground/80 sm:text-lg"
          style={{ animationDelay: "0.6s", opacity: 0 }}
          ref={animateRef}
        >
          Where every creation is a masterpiece — handcrafted daily with the finest ingredients and timeless French tradition.
        </p>
        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          style={{ animationDelay: "0.8s", opacity: 0 }}
          ref={animateRef}
        >
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-none bg-primary-foreground px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-primary-foreground/90"
          >
            Explore Our Creations
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-none border border-primary-foreground/40 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-[1px] bg-primary-foreground/40" />
      </div>
    </section>
  );
}
