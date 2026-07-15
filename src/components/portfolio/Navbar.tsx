import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`glass flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 ${
            scrolled ? "shadow-[0_10px_40px_-20px_rgba(15,98,254,0.5)]" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand-secondary text-white font-bold shadow-[0_0_30px_-5px_rgba(15,98,254,0.7)]">
              B
            </span>
            <span className="text-lg font-bold tracking-tight">
              BobbyTech<span className="text-gradient">Hub</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3 py-2 text-sm text-muted-foreground hover:text-white transition-colors after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:bg-gradient-to-r after:from-primary after:to-brand-secondary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden sm:inline-flex rounded-full bg-white text-background hover:bg-white/90 font-semibold"
            >
              <a href="#contact">Let's Talk</a>
            </Button>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl glass"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 rounded-full bg-white text-background text-sm font-semibold text-center"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
