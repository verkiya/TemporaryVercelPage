"use client";

import { motion } from "framer-motion";
import { GitBranch, Wrench, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      {/* Animated floating blobs */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl"
      />

      {/* Main panel */}
      <motion.section
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="cyber-panel glow-hover relative z-10 w-full max-w-4xl rounded-3xl px-8 py-14 md:px-16"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="animate-neon inline-flex items-center gap-2 rounded-full px-5 py-2 neon-border bg-black/30 text-sm tracking-widest uppercase text-cyan-300">
            <Wrench size={16} />
            Work In Progress
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="neon-text text-center text-5xl font-black tracking-tight md:text-7xl"
        >
          SYSTEM UNDER CONSTRUCTION
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-zinc-300 md:text-xl"
        >
          Crafting something absurdly polished.
          <br />
          Projects are temporarily offline while APIs, infra, and chaos are
          being managed.
        </motion.p>

        {/* Animated fake terminal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 rounded-2xl border border-cyan-500/20 bg-black/60 p-6 font-mono text-sm text-zinc-300 shadow-2xl"
        >
          <div className="mb-4 flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <p>
            <span className="text-cyan-400">$</span> booting portfolio...
          </p>
          <p>
            <span className="text-cyan-400">$</span> loading projects...
          </p>
          <p>
            <span className="text-cyan-400">$</span> optimizing deployment...
          </p>
          <p className="neon-pink mt-2">
            status: still cooking<span className="animate-pulse">_</span>
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/verkiya"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-neon flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-8 py-4 font-semibold text-cyan-200 backdrop-blur transition"
          >
            <GitBranch size={22} />
            View GitHub
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2 rounded-2xl border border-pink-400/20 bg-pink-500/10 px-6 py-4 text-pink-200"
          >
            <Sparkles size={20} />
            New projects coming soon
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
