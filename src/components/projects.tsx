"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sentify",
    description:
      "Real-time sentiment analysis platform built with FastAPI and Next.js, processing 10,000+ YouTube comments per run with batch support for 100+ comments per request.",
    stack: ["Python", "FastAPI", "Next.js", "NLP"],
    github: "https://github.com/divyadityabhardwaj/sentify-v2",
    live: "https://sentify-v2.vercel.app/",
  },
  {
    title: "VoxFlow",
    description:
      "Privacy-first AI dictation app for macOS built with Go, Wails, React, and Whisper.cpp, with AppleScript text injection, global hotkeys, transcription history, and pluggable LLM post-processing.",
    stack: ["Go", "Wails", "React", "Whisper.cpp"],
    github: "https://github.com/divyadityabhardwaj/voxflow",
  },
];

export function Projects() {
  return (
    <section className="space-y-6" id="projects">
      <h2 className="text-2xl font-medium">Projects</h2>
      <div className="divide-y divide-white/[0.07]">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="group grid gap-4 py-6 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,220px)_1fr_auto] md:gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <div className="space-y-2">
              <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/80">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-muted-foreground/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm leading-6 text-muted-foreground transition-colors group-hover:text-foreground">
                {project.description}
              </p>
            </div>
            <div className="flex gap-2 md:justify-end">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                  title="Live Preview"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
