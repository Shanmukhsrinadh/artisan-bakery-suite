import aboutImg from "@/assets/about-bakery.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={aboutImg}
            alt="Artisan baker kneading dough by hand"
            width={1200}
            height={800}
            loading="lazy"
            className="image-reveal h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
            A Legacy of<br />Timeless Craft
          </h2>
          <div className="mt-2 h-px w-16 bg-gold" />
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Founded in 1987, Maison Dorée began as a humble patisserie in the heart of Paris. 
            Our founder, Chef Laurent Beaumont, brought with him generations of baking wisdom 
            passed down through his family.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Today, we continue this tradition with the same unwavering commitment to quality. 
            Every loaf, every pastry, every cake is crafted by hand using time-honored techniques 
            and the finest locally-sourced ingredients. We believe that baking is not just a 
            craft — it's an art form.
          </p>
          <div className="mt-10 flex gap-12">
            <div>
              <p className="font-serif text-4xl font-semibold text-foreground">37+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Years of Excellence</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-semibold text-foreground">50K+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
