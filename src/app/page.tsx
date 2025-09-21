"use client";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #111010",
        }}
      />
      {/* Main Content */}
      <main className="relative z-10 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            <Hero />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative flex w-full rounded-xl border-[0.5px] border-white/20 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab z-10 max-sm:h-max p-0.5"
          >
            <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-start gap-8 max-sm:h-[275px] max-sm:gap-4 text-white border-[0.5px] border-white/20 rounded-xl bg-[#111010] w-full">
              <About />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="relative flex w-full rounded-xl border-[0.5px] border-white/20 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab z-10 max-sm:h-max p-0.5"
          >
            <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-start gap-8 max-sm:h-[275px] max-sm:gap-4 text-white border-[0.5px] border-white/20 rounded-xl bg-[#111010] w-full">
              <Experience />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
            className="relative flex w-full rounded-xl border-[0.5px] border-white/20 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab z-10 max-sm:h-max p-0.5"
          >
            <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-start gap-8 max-sm:h-[275px] max-sm:gap-4 text-white border-[0.5px] border-white/20 rounded-xl bg-[#111010] w-full">
              <Education />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="relative flex w-full rounded-xl border-[0.5px] border-white/20 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab z-10 max-sm:h-max p-0.5"
          >
            <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-start gap-8 max-sm:h-[275px] max-sm:gap-4 text-white border-[0.5px] border-white/20 rounded-xl bg-[#111010] w-full">
              <TechStack />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
            className="relative flex w-full rounded-xl border-[0.5px] border-white/20 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab z-10 max-sm:h-max p-0.5"
          >
            <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-start gap-8 max-sm:h-[275px] max-sm:gap-4 text-white border-[0.5px] border-white/20 rounded-xl bg-[#111010] w-full">
              <Projects />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
