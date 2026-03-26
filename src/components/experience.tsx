"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar } from "lucide-react";

const experienceLevels = [
  {
    title: "Full Stack Intern",
    company: "CAPGRID",
    dates: "Feb 2025 - July 2025",
    // description: "Building scalable web applications with modern tech stack",
  },
  {
    title: "SDE 1",
    company: "CAPGRID",
    dates: "Aug 2025 - Present",
    // description: "Leading full-stack development and architecture decisions",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="space-y-6" id="experience">
      <h2 className="text-2xl font-medium text-foreground">Experience</h2>
      <div ref={ref} className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="divide-y divide-white/[0.07]"
        >
          {experienceLevels.map((exp) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              variants={itemVariants}
              className="group grid gap-4 py-6 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,220px)_1fr] md:gap-8"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground/90">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{exp.dates}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/80">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
