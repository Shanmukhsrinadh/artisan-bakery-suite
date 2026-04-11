import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-wide">MAISON DORÉE</h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              Handcrafting exceptional baked goods since 1987.
              Every creation tells a story of passion, tradition, and uncompromising quality.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-primary-foreground/50 transition-colors hover:text-primary-foreground"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-primary-foreground/50 transition-colors hover:text-primary-foreground"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/50">
              Opening Hours
            </h4>
            <div className="mt-6 space-y-3 text-sm text-primary-foreground/70">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span>7:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/50">
              Visit Us
            </h4>
            <div className="mt-6 space-y-3 text-sm text-primary-foreground/70">
              <p>42 Rue de la Pâtisserie</p>
              <p>Paris 75004, France</p>
              <p className="mt-4">+33 1 42 78 56 00</p>
              <p>hello@maisondoree.com</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Maison Dorée. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
