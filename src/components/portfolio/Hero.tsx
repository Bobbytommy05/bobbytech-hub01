import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.jpg.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-primary/25 blur-[140px]" />
        <div className="absolute top-1/2 left-0 h-[500px] w-[500px] rounded-full bg-brand-accent/15 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium text-muted-foreground mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-brand-accent" />
              </span>
              Available for freelance work
            </div>

            <p className="text-brand-secondary font-medium mb-3 tracking-wide">
              Hello, I'm Blessing Moses <span className="inline-block">👋</span>
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Building{" "}
              <span className="text-gradient">Modern Websites</span>
              <br />
              That Drive Business Growth.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Full Stack Developer · Shopify Expert · WordPress Expert · UI/UX Designer.
              I build responsive websites, e-commerce solutions, and intuitive
              interfaces that combine clean design with high performance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-brand-secondary text-white font-semibold glow-primary hover:opacity-95"
              >
                <a href="#portfolio">
                  View My Work <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full glass border-white/10 text-white hover:bg-white/5"
              >
                <a href="#resume">
                  <Download className="mr-1 h-4 w-4" /> Download CV
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full text-white hover:bg-white/5"
              >
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Github, href: "https://github.com/Bobbytommy05", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/real-blessingmoses", label: "LinkedIn" },
                { Icon: Instagram, href: "https://instagram.com/Bobbytech_Hub", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass h-10 w-10 rounded-full inline-flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/50 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Soft blue glow behind */}
              <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-primary/40 via-brand-secondary/20 to-brand-accent/25 blur-3xl opacity-70" />
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-conic from-primary/30 via-transparent to-brand-secondary/30 blur-2xl" />

              {/* Portrait with feathered mask */}
              <div
                className="relative rounded-[2rem] overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(120% 90% at 50% 45%, #000 55%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.2) 92%, transparent 100%)",
                  maskImage:
                    "radial-gradient(120% 90% at 50% 45%, #000 55%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.2) 92%, transparent 100%)",
                }}
              >
                <img
                  src={portrait.url}
                  alt="Blessing Moses — BobbyTech Hub"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                {/* Bottom fade into page */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/70 to-transparent" />
              </div>

              {/* Floating badge - years */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-8 -left-4 sm:-left-8 glass rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-2xl font-bold text-gradient">5+</div>
                <div className="text-xs text-muted-foreground">Years Exp.</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-24 -right-4 sm:-right-8 glass rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-2xl font-bold text-gradient">150+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
