import { motion } from "motion/react";

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Flutter", "Dart",
  "Shopify", "Liquid", "WordPress", "PHP", "Tailwind CSS",
  "Firebase", "Git", "Figma", "UI/UX Design",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary font-semibold">Skills</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            Technologies I <span className="text-gradient">work with</span>
          </h2>
        </motion.div>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              whileHover={{ y: -4 }}
              className="glass rounded-full px-5 py-3 text-sm font-medium text-white/90 border border-white/10 hover:border-primary/50 hover:text-white hover:shadow-[0_10px_30px_-15px_rgba(15,98,254,0.6)] cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
