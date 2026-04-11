const menuCategories = [
  {
    name: "Breads",
    items: [
      { name: "Sourdough Boule", price: "$8" },
      { name: "Classic Baguette", price: "$5" },
      { name: "Walnut & Fig Loaf", price: "$12" },
      { name: "Olive Focaccia", price: "$10" },
    ],
  },
  {
    name: "Viennoiseries",
    items: [
      { name: "Butter Croissant", price: "$4.50" },
      { name: "Pain au Chocolat", price: "$5" },
      { name: "Almond Croissant", price: "$6" },
      { name: "Danish Pastry", price: "$5.50" },
    ],
  },
  {
    name: "Pâtisserie",
    items: [
      { name: "Chocolate Éclair", price: "$7" },
      { name: "Tarte Tatin", price: "$9" },
      { name: "Crème Brûlée Tart", price: "$8.50" },
      { name: "Mille-Feuille", price: "$9" },
    ],
  },
  {
    name: "Cakes",
    items: [
      { name: "Opera Cake (slice)", price: "$10" },
      { name: "Red Velvet (whole)", price: "$55" },
      { name: "Lemon Drizzle (whole)", price: "$42" },
      { name: "Tiramisu Cake (whole)", price: "$58" },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            What We Offer
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl">
            Featured Menu
          </h2>
          <div className="mx-auto mt-2 h-px w-16 bg-gold" />
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          {menuCategories.map((category) => (
            <div key={category.name}>
              <h3 className="font-serif text-2xl font-medium text-foreground">
                {category.name}
              </h3>
              <div className="mt-6 space-y-5">
                {category.items.map((item) => (
                  <div key={item.name} className="group flex items-end justify-between">
                    <div className="flex items-end gap-2">
                      <span className="text-sm text-foreground transition-colors group-hover:text-gold">
                        {item.name}
                      </span>
                      <span className="mb-1 flex-1 border-b border-dotted border-border" />
                    </div>
                    <span className="ml-4 text-sm font-medium text-muted-foreground">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
