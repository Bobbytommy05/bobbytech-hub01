import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Campus Marketplace Platform",
    category: "Web Application",
    desc: "Modern marketplace connecting students to buy and sell products securely.",
    stack: ["Next.js", "TypeScript", "Firebase"],
    gradient: "from-primary/40 via-brand-secondary/30 to-brand-accent/30",
  },
  {
    title: "Prime Purity Store",
    category: "Shopify Website",
    desc: "Premium eCommerce store for fashion and lifestyle products.",
    stack: ["Shopify", "Liquid", "Tailwind"],
    gradient: "from-brand-accent/40 via-primary/30 to-brand-secondary/30",
  },
  {
    title: "Renikeji Jewelry",
    category: "WordPress Website",
    desc: "Elegant online jewelry store with responsive shopping experience.",
    stack: ["WordPress", "WooCommerce", "PHP"],
    gradient: "from-brand-secondary/40 via-brand-accent/30 to-primary/30",
  },
  {
    title: "Restaurant Booking System",
    category: "Full Stack Web App",
    desc: "Restaurant reservation platform with booking management.",
    stack: ["React", "Node", "Postgres"],
    gradient: "from-primary/50 via-primary/20 to-brand-accent/30",
  },
  {
    title: "Real Estate Platform",
    category: "Business Website",
    desc: "Luxury property listing website with modern UI.",
    stack: ["Next.js", "Tailwind", "Framer"],
    gradient: "from-brand-accent/40 via-brand-secondary/30 to-primary/30",
  },
  {
    title: "Personal Developer Portfolio",
    category: "Next.js Website",
    desc: "Professional portfolio showcasing skills and projects.",
    stack: ["Next.js", "TypeScript", "Motion"],
    gradient: "from-brand-secondary/40 via-primary/30 to-brand-accent/30",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary font-semibold">Featured Work</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              Some of my <br /><span className="text-gradient">recent projects</span>
            </h2>
          </motion.div>
          <a href="#contact" className="inline-flex items-center gap-1 text-sm font-medium text-brand-secondary hover:text-white">
            View All Projects <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group card-premium overflow-hidden hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_25px_70px_-30px_rgba(15,98,254,0.55)]"
            >
              {/* Thumbnail */}
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass rounded-2xl px-6 py-4 text-lg font-bold tracking-tight">
                    {p.title.split(" ").slice(0, 2).join(" ")}
                  </div>
                </div>
                <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-xs font-medium">
                  0{i + 1}
                </div>
                <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-xs font-medium">
                  {p.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-brand-secondary transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <a href="#" className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-white text-background font-medium hover:bg-white/90 transition">
                    View <ExternalLink className="h-3 w-3" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full glass hover:border-primary/40 transition">
                    Live Demo <ExternalLink className="h-3 w-3" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full glass hover:border-primary/40 transition">
                    <Github className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
