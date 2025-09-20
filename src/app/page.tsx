"use client";

import { Card } from "@/components/ui/card";
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
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #000000",
        }}
      />
      {/* Main Content */}
      <main className="relative z-10 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="bg-background shadow-none space-y-6">
              {/* <div className="border-b border-white/20 pb-6"> */}
              <Hero />
              {/* </div> */}
              <div className="border-b border-white/20 pb-6">
                <About />
              </div>
              <div className="border-b border-white/20 pb-6">
                <Experience />
              </div>
              <div className="border-b border-white/20 pb-6">
                <Education />
              </div>
              <div className="border-b border-white/20 pb-6">
                <TechStack />
              </div>
              <Projects />
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
