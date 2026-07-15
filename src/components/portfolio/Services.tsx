import { motion } from "motion/react";
import {
  Palette, ShoppingBag, Globe, Code2, Layout, Sparkles,
  LayoutTemplate, Gauge, Search, Wrench, Plug, Briefcase, ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Palette, title: "Website Design", desc: "Beautiful, brand-driven designs that convert visitors into customers." },
  { icon: ShoppingBag, title: "Shopify Store Development", desc: "High-performing Shopify stores with custom themes and Liquid." },
  { icon: Globe, title: "WordPress Development", desc: "Custom WordPress builds, themes, and Elementor / WooCommerce." },
  { icon: Code2, title: "Full Stack Development", desc: "End-to-end web apps with modern frameworks and clean APIs." },
  { icon: Layout, title: "Frontend Development", desc: "Pixel-perfect, responsive interfaces in React & Next.js." },
  { icon: Sparkles, title: "UI/UX Design", desc: "Human-centered product design from wireframes to prototypes." },
  { icon: LayoutTemplate, title: "Landing Pages", desc: "High-converting landing pages built to launch fast." },
  { icon: Gauge, title: "Speed Optimization", desc: "Blazing Core Web Vitals and page performance tuning." },
  { icon: Search, title: "SEO Optimization", desc: "Technical SEO and on-page strategy that ranks." },
  { icon: Wrench, title: "Website Maintenance", desc: "Reliable ongoing updates, backups and monitoring." },
  { icon: Plug, title: "API Integration", desc: "Payments, CRMs, and 3rd-party APIs, cleanly integrated." },
  { icon: Briefcase, title: "Business Websites", desc: "Professional websites that grow your online presence." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary font-semibold">Services</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            What I can <span className="text-gradient">do for you</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete toolkit to plan, design, build and grow modern digital products.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group card-premium p-6 relative overflow-hidden hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_rgba(15,98,254,0.5)]"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-brand-accent/20 border border-white/10 text-brand-secondary group-hover:scale-110 transition-transform">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-secondary hover:text-white transition-colors">
                  Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
