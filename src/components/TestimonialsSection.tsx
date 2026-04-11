import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Catherine Moreau",
    role: "Event Planner",
    text: "Maison Dorée crafted the most exquisite wedding cake I've ever seen. The attention to detail and flavor was absolutely divine. My clients were speechless.",
    rating: 5,
  },
  {
    name: "James Whitfield",
    role: "Food Critic",
    text: "In all my years reviewing bakeries, few match the caliber of Maison Dorée. Their sourdough is a work of art — crusty exterior, pillowy interior, perfect tang.",
    rating: 5,
  },
  {
    name: "Amélie Laurent",
    role: "Loyal Customer",
    text: "Every Saturday morning starts with their almond croissants. It's been our family tradition for over a decade. The quality has never wavered — always perfect.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-warm py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Testimonials
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl">
              What Our Guests Say
            </h2>
            <div className="mx-auto mt-2 h-px w-16 bg-gold" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <div className="glass h-full rounded-sm p-8 transition-all duration-300 hover:shadow-lg">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
