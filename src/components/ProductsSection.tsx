import cakeImg from "@/assets/cake.jpg";
import pastryImg from "@/assets/pastry.jpg";
import breadImg from "@/assets/bread.jpg";

const products = [
  {
    title: "Signature Cakes",
    description: "Decadent multi-layered cakes crafted for special occasions, from classic chocolate ganache to seasonal fruit créations.",
    image: cakeImg,
    price: "From $48",
  },
  {
    title: "French Pastries",
    description: "Buttery croissants, pain au chocolat, and delicate viennoiseries — baked fresh every morning at dawn.",
    image: pastryImg,
    price: "From $4",
  },
  {
    title: "Artisan Breads",
    description: "Slow-fermented sourdough and crusty baguettes made with heritage flour and traditional techniques.",
    image: breadImg,
    price: "From $8",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-warm py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Our Specialties
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl">
            Signature Creations
          </h2>
          <div className="mx-auto mt-2 h-px w-16 bg-gold" />
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="hover-lift group overflow-hidden bg-background"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-medium text-foreground">
                    {product.title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-gold">
                    {product.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
