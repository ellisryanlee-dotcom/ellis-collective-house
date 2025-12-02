"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut", delay: 0.15 * index }
  })
};

export default function Home() {
  const pillars = [
    {
      title: "Community",
      description:
        "Intimate gatherings, shared resources, and a space to belong with people who champion your vision."
    },
    {
      title: "Creativity",
      description:
        "Studios for ideas to breathe, thoughtful curation, and programming that keeps the spark alive."
    },
    {
      title: "Collaboration",
      description:
        "Cross-disciplinary partnerships that turn inspiration into impact, guided by trust and intention."
    }
  ];

  return (
    <main className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(200,164,90,0.14),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(200,164,90,0.1),transparent_40%),linear-gradient(145deg,rgba(255,255,255,0.03),rgba(0,0,0,0.6))] blur-3xl" />
      </div>

      <motion.section
        className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.span
          className="mb-6 text-xs tracking-[0.28em] text-[#C8A45A]"
          variants={fadeUp}
        >
          ELLIS COLLECTIVE HOUSE
        </motion.span>
        <motion.h1
          className="font-display text-4xl font-semibold uppercase leading-tight tracking-[0.12em] text-foreground sm:text-5xl md:text-6xl"
          variants={fadeUp}
        >
          ELLIS COLLECTIVE HOUSE
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl"
          variants={fadeUp}
        >
          Creativity with Soul. Community with Purpose.
        </motion.p>
        <motion.div className="mt-10" variants={fadeUp}>
          <Button
            size="lg"
            className="bg-[#C8A45A] text-black shadow-glow transition-colors duration-300 hover:bg-[#d5b770]"
          >
            Join the House
          </Button>
        </motion.div>
      </motion.section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-12 h-px bg-gradient-to-r from-transparent via-[#C8A45A]/60 to-transparent" aria-hidden />
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={columnVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 px-6 py-10 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1"
            >
              {index > 0 && (
                <span className="absolute left-0 top-6 h-16 w-px bg-[#C8A45A]/40 md:-left-4" aria-hidden />
              )}
              <div className="relative">
                <span className="mb-4 inline-block text-[10px] tracking-[0.28em] text-[#C8A45A]/80">
                  OUR HOUSE
                </span>
                <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-foreground sm:text-3xl">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {pillar.description}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-b from-[#C8A45A]/6 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
