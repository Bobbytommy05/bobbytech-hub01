import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze Okafor",
    role: "Founder, Prime Purity",
    initials: "AO",
    text: "Blessing transformed our Shopify store. Sales tripled within two months of launch — the design is absolutely stunning.",
  },
  {
    name: "Michael Adeyemi",
    role: "CEO, Renikeji Jewelry",
    initials: "MA",
    text: "Truly a perfectionist. The WordPress site he built is fast, elegant, and easy to manage. Highly recommended.",
  },
  {
    name: "Chidinma Eze",
    role: "Product Manager",
    initials: "CE",
    text: "Great communicator, strong technical skills, and a keen eye for design. Working with BobbyTech Hub is a delight.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary font-semibold">Testimonials</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            Loved by <span className="text-gradient">clients</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium p-7 relative hover:-translate-y-1 hover:border-primary/40"
            >
              <Quote className="h-8 w-8 text-primary/40 absolute top-5 right-5" />
              <div className="flex gap-1 text-brand-accent">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-white/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-brand-secondary flex items-center justify-center font-semibold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
