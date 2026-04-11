import { M as useRouter, r as reactExports, b as isRedirect, T as jsxRuntimeExports, _ as TSS_SERVER_FUNCTION, a0 as getServerFnById, $ as createServerFn } from "./worker-entry-C9OY_9a1.js";
import { o as objectType, s as stringType } from "./types-DGfzljZx.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$8 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$8);
const __iconNode$7 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$6);
const __iconNode$5 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3 shadow-sm" : "py-6"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#hero", className: "font-serif text-2xl font-semibold tracking-wide text-foreground", children: "MAISON DORÉE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden items-center gap-8 md:flex", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: link.href,
              className: "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground",
              children: link.label
            },
            link.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setMenuOpen(!menuOpen),
              className: "text-foreground md:hidden",
              "aria-label": "Toggle menu",
              children: menuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
            }
          )
        ] }),
        menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass absolute inset-x-0 top-full animate-fade-in px-6 py-8 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: link.href,
            onClick: () => setMenuOpen(false),
            className: "text-sm font-medium uppercase tracking-[0.2em] text-foreground",
            children: link.label
          },
          link.href
        )) }) })
      ]
    }
  );
}
const heroImg = "/artisan-bakery-suite/assets/hero-bakery-BeZckFOC.jpg";
function HeroSection() {
  const animateRef = reactExports.useCallback((el) => {
    if (el) el.classList.add("animate-fade-up");
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "hero", className: "relative flex min-h-screen items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: heroImg,
          alt: "Luxury artisan bakery with fresh pastries",
          width: 1920,
          height: 1080,
          className: "h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-4xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "mb-6 text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/70",
          style: { animationDelay: "0.2s", opacity: 0 },
          ref: animateRef,
          children: "Artisan Bakery • Est. 1987"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          className: "font-serif text-5xl font-light leading-[1.1] text-primary-foreground sm:text-7xl lg:text-8xl",
          style: { animationDelay: "0.4s", opacity: 0 },
          ref: animateRef,
          children: "Maison Dorée"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-primary-foreground/80 sm:text-lg",
          style: { animationDelay: "0.6s", opacity: 0 },
          ref: animateRef,
          children: "Where every creation is a masterpiece — handcrafted daily with the finest ingredients and timeless French tradition."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center",
          style: { animationDelay: "0.8s", opacity: 0 },
          ref: animateRef,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#products",
                className: "inline-flex items-center justify-center rounded-none bg-primary-foreground px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-primary-foreground/90",
                children: "Explore Our Creations"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: "inline-flex items-center justify-center rounded-none border border-primary-foreground/40 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10",
                children: "Get In Touch"
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-[1px] bg-primary-foreground/40" }) })
  ] });
}
const aboutImg = "/artisan-bakery-suite/assets/about-bakery-B5gUASjX.jpg";
function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = options;
  const ref = reactExports.useRef(null);
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);
  return { ref, isVisible };
}
function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8
}) {
  const { ref, isVisible } = useScrollReveal();
  const directionMap = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(40px)",
    right: "translateX(-40px)",
    none: "none"
  };
  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : directionMap[direction],
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, style, className, children });
}
function AboutSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "bg-background py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: aboutImg,
        alt: "Artisan baker kneading dough by hand",
        width: 1200,
        height: 800,
        loading: "lazy",
        className: "image-reveal h-full w-full object-cover"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground", children: "Our Story" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollReveal, { delay: 0.2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl", children: [
          "A Legacy of",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Timeless Craft"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-px w-16 bg-gold" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollReveal, { delay: 0.3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-base leading-relaxed text-muted-foreground", children: "Founded in 1987, Maison Dorée began as a humble patisserie in the heart of Paris. Our founder, Chef Laurent Beaumont, brought with him generations of baking wisdom passed down through his family." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: "Today, we continue this tradition with the same unwavering commitment to quality. Every loaf, every pastry, every cake is crafted by hand using time-honored techniques and the finest locally-sourced ingredients. We believe that baking is not just a craft — it's an art form." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: 0.4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-4xl font-semibold text-foreground", children: "37+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Years of Excellence" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-4xl font-semibold text-foreground", children: "50K+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Happy Customers" })
        ] })
      ] }) })
    ] })
  ] }) });
}
const cakeImg = "/artisan-bakery-suite/assets/cake-KVqg6cW8.jpg";
const pastryImg = "/artisan-bakery-suite/assets/pastry-CSpXDiwl.jpg";
const breadImg = "/artisan-bakery-suite/assets/bread-C0CaS5pt.jpg";
const products = [
  {
    title: "Signature Cakes",
    description: "Decadent multi-layered cakes crafted for special occasions, from classic chocolate ganache to seasonal fruit créations.",
    image: cakeImg,
    price: "From $48"
  },
  {
    title: "French Pastries",
    description: "Buttery croissants, pain au chocolat, and delicate viennoiseries — baked fresh every morning at dawn.",
    image: pastryImg,
    price: "From $4"
  },
  {
    title: "Artisan Breads",
    description: "Slow-fermented sourdough and crusty baguettes made with heritage flour and traditional techniques.",
    image: breadImg,
    price: "From $8"
  }
];
function ProductsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "products", className: "bg-warm py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground", children: "Our Specialties" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl", children: "Signature Creations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-2 h-px w-16 bg-gold" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: products.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i * 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hover-lift group overflow-hidden bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: product.image,
          alt: product.title,
          width: 800,
          height: 800,
          loading: "lazy",
          className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl font-medium text-foreground", children: product.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-gold", children: product.price })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: product.description })
      ] })
    ] }) }, product.title)) })
  ] }) });
}
const menuCategories = [
  {
    name: "Breads",
    items: [
      { name: "Sourdough Boule", price: "$8" },
      { name: "Classic Baguette", price: "$5" },
      { name: "Walnut & Fig Loaf", price: "$12" },
      { name: "Olive Focaccia", price: "$10" }
    ]
  },
  {
    name: "Viennoiseries",
    items: [
      { name: "Butter Croissant", price: "$4.50" },
      { name: "Pain au Chocolat", price: "$5" },
      { name: "Almond Croissant", price: "$6" },
      { name: "Danish Pastry", price: "$5.50" }
    ]
  },
  {
    name: "Pâtisserie",
    items: [
      { name: "Chocolate Éclair", price: "$7" },
      { name: "Tarte Tatin", price: "$9" },
      { name: "Crème Brûlée Tart", price: "$8.50" },
      { name: "Mille-Feuille", price: "$9" }
    ]
  },
  {
    name: "Cakes",
    items: [
      { name: "Opera Cake (slice)", price: "$10" },
      { name: "Red Velvet (whole)", price: "$55" },
      { name: "Lemon Drizzle (whole)", price: "$42" },
      { name: "Tiramisu Cake (whole)", price: "$58" }
    ]
  }
];
function MenuSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "menu", className: "bg-background py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground", children: "What We Offer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl", children: "Featured Menu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-2 h-px w-16 bg-gold" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-12 sm:grid-cols-2", children: menuCategories.map((category, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl font-medium text-foreground", children: category.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-5", children: category.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-end justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground transition-colors group-hover:text-gold", children: item.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1 flex-1 border-b border-dotted border-border" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-sm font-medium text-muted-foreground", children: item.price })
      ] }, item.name)) })
    ] }) }, category.name)) })
  ] }) });
}
const testimonials = [
  {
    name: "Catherine Moreau",
    role: "Event Planner",
    text: "Maison Dorée crafted the most exquisite wedding cake I've ever seen. The attention to detail and flavor was absolutely divine. My clients were speechless.",
    rating: 5
  },
  {
    name: "James Whitfield",
    role: "Food Critic",
    text: "In all my years reviewing bakeries, few match the caliber of Maison Dorée. Their sourdough is a work of art — crusty exterior, pillowy interior, perfect tang.",
    rating: 5
  },
  {
    name: "Amélie Laurent",
    role: "Loyal Customer",
    text: "Every Saturday morning starts with their almond croissants. It's been our family tradition for over a decade. The quality has never wavered — always perfect.",
    rating: 5
  }
];
function TestimonialsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-warm py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground", children: "Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl", children: "What Our Guests Say" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-2 h-px w-16 bg-gold" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 md:grid-cols-3", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i * 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass h-full rounded-sm p-8 transition-all duration-300 hover:shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: Array.from({ length: t.rating }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "fill-gold text-gold" }, j)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm leading-relaxed text-muted-foreground italic", children: [
        "“",
        t.text,
        "”"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.role })
      ] })
    ] }) }, t.name)) })
  ] }) });
}
const gallery1 = "/artisan-bakery-suite/assets/gallery-1-DK2xa34M.jpg";
const gallery2 = "/artisan-bakery-suite/assets/gallery-2-DIc2fVA-.jpg";
const gallery3 = "/artisan-bakery-suite/assets/gallery-3-DuSPLtSg.jpg";
const gallery4 = "/artisan-bakery-suite/assets/gallery-4-CoxsZd8g.jpg";
const images = [
  { src: gallery1, alt: "Pastel French macarons", cols: "col-span-2", rows: "row-span-1" },
  { src: gallery2, alt: "Elegant tiered wedding cake", cols: "col-span-1", rows: "row-span-2" },
  { src: gallery3, alt: "Fresh cinnamon rolls with glaze", cols: "col-span-1", rows: "row-span-1" },
  { src: cakeImg, alt: "Chocolate layer cake on marble", cols: "col-span-1", rows: "row-span-1" },
  { src: gallery4, alt: "Artisan bread basket assortment", cols: "col-span-1", rows: "row-span-1" },
  { src: heroImg, alt: "Bakery counter with fresh pastries", cols: "col-span-2", rows: "row-span-1" }
];
function GallerySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "gallery", className: "bg-background py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground", children: "Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl", children: "Our Visual Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-2 h-px w-16 bg-gold" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[250px] md:grid-cols-3 lg:auto-rows-[300px]", children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollReveal,
      {
        delay: i * 0.08,
        direction: "none",
        className: `${img.cols} ${img.rows}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group h-full w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: img.src,
            alt: img.alt,
            loading: "lazy",
            className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          }
        ) })
      },
      i
    )) })
  ] }) });
}
var createSsrRpc = (functionId) => {
  const url = "/artisan-bakery-suite/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactSchema = objectType({
  name: stringType().trim().min(1, "Name is required").max(100),
  email: stringType().trim().email("Invalid email address").max(255),
  phone: stringType().trim().max(20).optional().default(""),
  message: stringType().trim().min(1, "Message is required").max(2e3)
});
const submitContactForm = createServerFn({
  method: "POST"
}).inputValidator((input) => contactSchema.parse(input)).handler(createSsrRpc("536d5a6ebdda052d485a92852ccdbf3a8d0e2c6e508dc067c0e897a8a9e2bb66"));
const BAKERY_LAT = 48.8534;
const BAKERY_LNG = 2.3574;
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${BAKERY_LAT},${BAKERY_LNG}`;
const EMBED_URL = `https://www.google.com/maps?q=${BAKERY_LAT},${BAKERY_LNG}&z=15&output=embed`;
function ContactSection() {
  const submitFn = useServerFn(submitContactForm);
  const [form, setForm] = reactExports.useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = reactExports.useState({});
  const [status, setStatus] = reactExports.useState("idle");
  const [serverError, setServerError] = reactExports.useState("");
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const result = await submitFn({ data: form });
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setServerError(result.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setServerError("Network error. Please try again.");
    }
  };
  const inputClass = (field) => `w-full border-b bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors duration-300 focus:border-foreground ${errors[field] ? "border-destructive" : "border-border"}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src: EMBED_URL,
          title: "Maison Dorée bakery location",
          className: "h-full w-full border-0 grayscale-[0.3] contrast-[0.9]",
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
          allowFullScreen: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 lg:from-background/95 lg:via-background/70 lg:to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-xl", children: status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "mb-6 text-gold", size: 48 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl font-light text-foreground", children: "Thank You" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Your message has been received. We'll get back to you shortly." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setStatus("idle"),
          className: "mt-8 text-xs font-medium uppercase tracking-[0.2em] text-foreground underline underline-offset-4 transition-colors hover:text-gold",
          children: "Send Another Message"
        }
      )
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollReveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground", children: "Get In Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl", children: [
          "We'd Love to",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Hear From You"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-px w-16 bg-gold" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm leading-relaxed text-muted-foreground", children: "Whether you're planning a celebration, placing a special order, or simply curious about our offerings — drop us a line." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-8 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-foreground", children: "42 Rue de la Pâtisserie, Paris 75004" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-foreground", children: "+33 1 42 78 56 00" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: GOOGLE_MAPS_LINK,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
            "Open in Google Maps",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 12 })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: 0.25, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-10 space-y-6 rounded-sm bg-background/80 p-6 shadow-lg backdrop-blur-sm sm:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Your Name *",
                value: form.name,
                onChange: (e) => setForm({ ...form, name: e.target.value }),
                className: inputClass("name"),
                maxLength: 100
              }
            ),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                placeholder: "Your Email *",
                value: form.email,
                onChange: (e) => setForm({ ...form, email: e.target.value }),
                className: inputClass("email"),
                maxLength: 255
              }
            ),
            errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "tel",
            placeholder: "Phone (Optional)",
            value: form.phone,
            onChange: (e) => setForm({ ...form, phone: e.target.value }),
            className: inputClass("phone"),
            maxLength: 20
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              placeholder: "Your Message *",
              value: form.message,
              onChange: (e) => setForm({ ...form, message: e.target.value }),
              rows: 4,
              className: `${inputClass("message")} resize-none`,
              maxLength: 2e3
            }
          ),
          errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.message })
        ] }),
        status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: serverError }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            disabled: status === "loading",
            className: "inline-flex items-center gap-3 bg-primary px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-foreground disabled:opacity-50",
            children: [
              status === "loading" ? "Sending..." : "Send Message",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 14 })
            ]
          }
        )
      ] }) })
    ] }) }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-primary py-16 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl font-semibold tracking-wide", children: "MAISON DORÉE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-primary-foreground/60", children: "Handcrafting exceptional baked goods since 1987. Every creation tells a story of passion, tradition, and uncompromising quality." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              "aria-label": "Instagram",
              className: "text-primary-foreground/50 transition-colors hover:text-primary-foreground",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              "aria-label": "Facebook",
              className: "text-primary-foreground/50 transition-colors hover:text-primary-foreground",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/50", children: "Opening Hours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 text-sm text-primary-foreground/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Monday – Friday" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "7:00 AM – 7:00 PM" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Saturday" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "8:00 AM – 6:00 PM" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sunday" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "8:00 AM – 2:00 PM" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/50", children: "Visit Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 text-sm text-primary-foreground/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "42 Rue de la Pâtisserie" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Paris 75004, France" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "+33 1 42 78 56 00" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "hello@maisondoree.com" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 border-t border-primary-foreground/10 pt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary-foreground/40", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Maison Dorée. All rights reserved."
    ] }) })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AboutSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GallerySection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
