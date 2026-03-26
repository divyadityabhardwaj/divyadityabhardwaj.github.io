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
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
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
            className="border-t border-white/10 pt-8"
          >
            <About />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border-t border-white/10 pt-8"
          >
            <div className="grid gap-8 divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="pb-8 md:pb-0 md:pr-8">
                <Experience />
              </div>
              <div className="pt-8 md:pt-0 md:pl-8">
                <Education />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border-t border-white/10 pt-8"
          >
            <TechStack />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border-t border-white/10 pt-8"
          >
            <Projects />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
