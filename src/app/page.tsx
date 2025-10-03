"use client";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { SpotifyNowPlaying } from "@/components/SpotifyNowPlaying";
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Hero />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SpotifyNowPlaying />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex w-full rounded-xl border-[0.5px] border-white/20 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab z-10 max-sm:h-max p-0.5"
          >
            <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-start gap-8 max-sm:h-[275px] max-sm:gap-4 text-white border-[0.5px] border-white/20 rounded-xl bg-[#111010] w-full">
              <About />
            </div>
          </motion.div>
          {/* Experience & Education side by side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex w-full z-10 max-sm:h-max"
          >
            <div className="flex flex-col md:flex-row w-full gap-8">
              {/* Experience Box */}
              <div className="flex-1 w-full md:w-1/2 rounded-xl border-[0.5px] border-white/20 bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] p-0.5">
                <div className="overflow-hidden relative z-10 p-5 text-white border-[0.5px] border-white/20 rounded-xl bg-[#111010] w-full h-full">
                  <Experience />
                </div>
              </div>
              {/* Education Box */}
              <div className="flex-1 w-full md:w-1/2 rounded-xl border-[0.5px] border-white/20 bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] p-0.5">
                <div className="overflow-hidden relative z-10 p-5 text-white border-[0.5px] border-white/20 rounded-xl bg-[#111010] w-full h-full">
                  <Education />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex w-full rounded-xl border-[0.5px] border-white/20 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab z-10 max-sm:h-max p-0.5"
          >
            <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-start gap-8 max-sm:gap-4 text-white border-[0.5px] border-white/20 rounded-xl bg-[#111010] w-full">
              <TechStack />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex w-full rounded-xl border-[0.5px] border-white/20 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab z-10 max-sm:h-max p-0.5"
          >
            <div className="flex flex-col overflow-auto size-full relative z-10 p-5 items-start justify-start gap-8 max-sm:gap-4 text-white border-[0.5px] border-white/20 rounded-xl bg-[#111010] w-full">
              <Projects />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
