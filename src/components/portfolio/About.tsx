import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 80, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Technologies Mastered" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary font-semibold">About Me</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
              I design solutions <br /> that <span className="text-gradient">make an impact.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
              I'm a Full Stack Developer, Shopify Expert, WordPress Developer, and UI/UX Designer
              passionate about building modern digital experiences that help businesses grow.
              I specialize in creating responsive websites, e-commerce solutions, and intuitive
              user interfaces that combine clean design with high performance.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
              My focus is delivering scalable, user-centered solutions that strengthen brands and
              turn ideas into impactful online products.
            </p>
            <p className="mt-6 font-signature text-2xl text-gradient italic">— Blessing Moses</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-premium p-6 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
