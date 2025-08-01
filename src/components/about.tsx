"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function About() {
  return (
    <motion.section
      className="space-y-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-medium">About Me</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Full stack developer with practical experience crafting web
          applications and AI-powered tools using React, Next.js, Node.js, and
          Python. Comfortable working across the stack — from designing
          intuitive APIs to building responsive interfaces — with a focus on
          clean architecture and performance.
        </p>
        <p>
          I’m a quick learner who enjoys diving deep into new technologies,
          refining workflows, and solving real-world problems through thoughtful
          engineering. Always exploring, always building.
        </p>
      </div>
      <div>
        <a
          href={process.env.NEXT_PUBLIC_RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-black hover:bg-black/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90 transition-transform hover:scale-105">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </a>
      </div>
    </motion.section>
  );
}
