import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] p-8 sm:p-14 glass border border-white/10"
        >
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/40 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-accent/30 blur-[120px]" />

          <div className="grid lg:grid-cols-2 gap-10 items-center relative">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary font-semibold">Let's Work Together</span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                Have a project <br /> in <span className="text-gradient">mind?</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Let's build something exceptional together. I'm always open to discussing new
                projects, creative ideas or opportunities.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  { Icon: Mail, label: "bobbytommy05@gmail.com", href: "mailto:bobbytommy05@gmail.com" },
                  { Icon: Phone, label: "+234 807 083 4170", href: "tel:+2348070834170" },
                  { Icon: MapPin, label: "Ondo State, Nigeria", href: "#" },
                ].map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-3 text-sm text-white/90 hover:text-brand-secondary transition-colors group">
                    <span className="h-10 w-10 rounded-xl glass inline-flex items-center justify-center group-hover:border-primary/40">
                      <c.Icon className="h-4 w-4" />
                    </span>
                    {c.label}
                  </a>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="mt-8 rounded-full bg-gradient-to-r from-primary to-brand-secondary text-white font-semibold glow-primary"
              >
                <a href="mailto:bobbytommy05@gmail.com">
                  Let's Work Together <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Illustration */}
            <div className="relative hidden lg:flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-64 w-64 rounded-[2rem] bg-gradient-to-br from-primary via-brand-secondary to-brand-accent flex items-center justify-center shadow-[0_30px_80px_-20px_rgba(15,98,254,0.6)]"
              >
                <Rocket className="h-24 w-24 text-white" />
                <div className="absolute -inset-6 rounded-[2.5rem] border border-white/10" />
                <div className="absolute -inset-12 rounded-[3rem] border border-white/5" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
