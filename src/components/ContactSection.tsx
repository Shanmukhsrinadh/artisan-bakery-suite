import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContactForm } from "@/utils/contact.functions";
import { Send, CheckCircle, MapPin, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const BAKERY_LAT = 48.8534;
const BAKERY_LNG = 2.3574;
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${BAKERY_LAT},${BAKERY_LNG}`;
const EMBED_URL = `https://www.google.com/maps?q=${BAKERY_LAT},${BAKERY_LNG}&z=15&output=embed`;

export default function ContactSection() {
  const submitFn = useServerFn(submitContactForm);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

  const inputClass = (field: string) =>
    `w-full border-b bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors duration-300 focus:border-foreground ${
      errors[field] ? "border-destructive" : "border-border"
    }`;

  return (
    <section id="contact" className="relative">
      {/* Google Maps background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={EMBED_URL}
          title="Maison Dorée bakery location"
          className="h-full w-full border-0 grayscale-[0.3] contrast-[0.9]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 lg:from-background/95 lg:via-background/70 lg:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-xl">
          {status === "success" ? (
            <ScrollReveal>
              <div className="flex flex-col items-start">
                <CheckCircle className="mb-6 text-gold" size={48} />
                <h2 className="font-serif text-3xl font-light text-foreground">Thank You</h2>
                <p className="mt-4 text-sm text-muted-foreground">
                  Your message has been received. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-foreground underline underline-offset-4 transition-colors hover:text-gold"
                >
                  Send Another Message
                </button>
              </div>
            </ScrollReveal>
          ) : (
            <>
              <ScrollReveal>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  Get In Touch
                </p>
                <h2 className="mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl">
                  We'd Love to<br />Hear From You
                </h2>
                <div className="mt-2 h-px w-16 bg-gold" />
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  Whether you're planning a celebration, placing a special order,
                  or simply curious about our offerings — drop us a line.
                </p>
              </ScrollReveal>

              {/* Contact info row */}
              <ScrollReveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-8 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Address</p>
                    <p className="mt-1 text-foreground">42 Rue de la Pâtisserie, Paris 75004</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</p>
                    <p className="mt-1 text-foreground">+33 1 42 78 56 00</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Open in Google Maps button */}
              <ScrollReveal delay={0.2}>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-foreground"
                >
                  <MapPin size={14} />
                  Open in Google Maps
                  <ExternalLink size={12} />
                </a>
              </ScrollReveal>

              {/* Form */}
              <ScrollReveal delay={0.25}>
                <form onSubmit={handleSubmit} className="mt-10 space-y-6 rounded-sm bg-background/80 p-6 shadow-lg backdrop-blur-sm sm:p-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass("name")}
                        maxLength={100}
                      />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email *"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass("email")}
                        maxLength={255}
                      />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone (Optional)"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass("phone")}
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message *"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className={`${inputClass("message")} resize-none`}
                      maxLength={2000}
                    />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-destructive">{serverError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-3 bg-primary px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-foreground disabled:opacity-50"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                    <Send size={14} />
                  </button>
                </form>
              </ScrollReveal>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
