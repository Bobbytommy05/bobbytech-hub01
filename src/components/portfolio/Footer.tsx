import { Github, Linkedin, Instagram, Facebook, Mail } from "lucide-react";

const cols = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Design", href: "#services" },
      { label: "Shopify Dev", href: "#services" },
      { label: "WordPress Dev", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "#portfolio" },
      { label: "Blog", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Style Guide", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-brand-secondary text-white font-bold inline-flex items-center justify-center">B</span>
              <span className="text-lg font-bold">BobbyTech<span className="text-gradient">Hub</span></span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Building modern websites that drive business growth — design, develop, launch.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { Icon: Github, href: "https://github.com/Bobbytommy05", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/real-blessingmoses", label: "LinkedIn" },
                { Icon: Instagram, href: "https://instagram.com/Bobbytech_Hub", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="glass h-9 w-9 rounded-full inline-flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/50">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-white/90">{c.title}</h4>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-muted-foreground hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-white/90">Newsletter</h4>
            <p className="mt-4 text-sm text-muted-foreground">Get updates on new work and design tips.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex glass rounded-full p-1">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="rounded-full bg-gradient-to-r from-primary to-brand-secondary px-4 text-white" aria-label="Subscribe">
                <Mail className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 BobbyTech Hub. All Rights Reserved.</div>
          <div>Designed & built by Blessing Moses</div>
        </div>
      </div>
    </footer>
  );
}
