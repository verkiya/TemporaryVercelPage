"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GitBranch, Sparkles } from "lucide-react";

const stars = [
  { x: 8, y: 12, opacity: 0.4, duration: 4 },
  { x: 16, y: 28, opacity: 0.7, duration: 6 },
  { x: 22, y: 54, opacity: 0.5, duration: 5 },
  { x: 30, y: 18, opacity: 0.6, duration: 7 },
  { x: 38, y: 72, opacity: 0.35, duration: 4.5 },
  { x: 44, y: 42, opacity: 0.55, duration: 5.5 },
  { x: 52, y: 14, opacity: 0.45, duration: 6.5 },
  { x: 60, y: 62, opacity: 0.65, duration: 4.2 },
  { x: 68, y: 36, opacity: 0.5, duration: 7.2 },
  { x: 74, y: 84, opacity: 0.38, duration: 5.8 },
  { x: 82, y: 24, opacity: 0.72, duration: 4.8 },
  { x: 90, y: 48, opacity: 0.48, duration: 6.8 },
  { x: 12, y: 88, opacity: 0.52, duration: 5.1 },
  { x: 26, y: 8, opacity: 0.42, duration: 4.9 },
  { x: 34, y: 92, opacity: 0.66, duration: 6.1 },
  { x: 48, y: 76, opacity: 0.36, duration: 5.3 },
  { x: 58, y: 30, opacity: 0.58, duration: 7.4 },
  { x: 70, y: 10, opacity: 0.46, duration: 4.4 },
  { x: 86, y: 66, opacity: 0.61, duration: 6.3 },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* base ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,247,255,0.06),transparent_45%)]" />

      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

      {/* animated aurora blob 1 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/12 blur-[140px]"
      />

      {/* animated aurora blob 2 */}
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] bottom-[-80px] h-[520px] w-[520px] rounded-full bg-pink-500/10 blur-[150px]"
      />

      {/* orbital ring */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/5"
      />

      {/* second orbital ring */}
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 58,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-400/5"
      />

      {/* floating stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star, i) => (
          <motion.span
            key={i}
            initial={{
              opacity: star.opacity,
              x: `${star.x}vw`,
              y: `${star.y}vh`,
            }}
            animate={{
              y: [`${star.y}vh`, `${star.y - 8}vh`, `${star.y}vh`],
              opacity: [star.opacity * 0.5, 1, star.opacity * 0.5],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[2px] w-[2px] rounded-full bg-cyan-200/70 shadow-[0_0_10px_rgba(0,247,255,0.8)]"
          />
        ))}
      </div>

      {/* content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-6">
        <motion.section
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-5xl rounded-[32px] border border-white/10 bg-black/30 p-10 shadow-[0_0_80px_rgba(0,247,255,0.05)] backdrop-blur-3xl md:p-16"
        >
          {/* animated sheen */}
          <motion.div
            animate={{
              x: ["-120%", "150%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-transparent via-white/5 to-transparent"
          />

          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mb-10 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-200 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              WORK IN PROGRESS
            </div>
          </motion.div>

          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="relative text-center"
          >
            <h1 className="text-5xl font-black tracking-[-0.04em] text-white md:text-8xl">
              Building
              <span className="bg-gradient-to-r from-cyan-300 via-white to-pink-300 bg-clip-text text-transparent">
                {" "}
                Something Exceptional
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
              The portfolio ecosystem is currently under reconstruction.
              Live demos are temporarily offline while infrastructure,
              deployment systems, and integrations are being rebuilt properly.
            </p>
          </motion.div>

          {/* pulse line */}
          <div className="relative mx-auto mt-12 h-px max-w-xl overflow-hidden bg-white/10">
            <motion.div
              animate={{
                x: ["-100%", "220%"],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-full w-40 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
            />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-14 flex justify-center"
          >
            <Button
              asChild
              size="lg"
              className="group h-14 rounded-2xl border border-cyan-300/20 bg-white px-8 text-base font-semibold text-black shadow-2xl transition hover:scale-[1.03] hover:bg-cyan-100"
            >
              <a
                href="https://github.com/verkiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitBranch className="mr-2 h-5 w-5 transition duration-300 group-hover:rotate-12" />
                Explore GitHub
              </a>
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
