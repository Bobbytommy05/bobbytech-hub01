import { motion } from "motion/react";
import { Search, FlaskConical, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discover", desc: "Understand your goals, users, and business context." },
  { icon: FlaskConical, title: "Research", desc: "Analyze competitors, users, and technical constraints." },
  { icon: PenTool, title: "Design", desc: "Craft wireframes, UI systems, and polished prototypes." },
  { icon: Code2, title: "Develop", desc: "Ship performant, scalable, well-tested code." },
  { icon: Rocket, title: "Launch", desc: "Deploy, measure, and iterate for growth." },
];

export function Process() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary font-semibold">Work Process</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            From idea to <span className="text-gradient">launch</span>
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-brand-secondary flex items-center justify-center shadow-[0_10px_40px_-15px_rgba(15,98,254,0.8)]">
                  <s.icon className="h-6 w-6 text-white" />
                  <span className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-background border border-white/10 flex items-center justify-center text-[10px] font-bold text-brand-secondary">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-semibold">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
