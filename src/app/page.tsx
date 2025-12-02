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

export default function Home() {
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
    </main>
  );
}
