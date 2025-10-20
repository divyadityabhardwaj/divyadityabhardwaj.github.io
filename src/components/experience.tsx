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
          className="space-y-6"
        >
          {experienceLevels.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-zinc-900/40 to-zinc-800/20 rounded-xl border border-white/10 p-5 ">
                {/* Timeline Dot & Line */}
                {index < experienceLevels.length - 1 && (
                  <div className="absolute -bottom-6 left-5 w-px h-6 bg-gradient-to-b from-blue-500/50 to-transparent" />
                )}

                {/* Content */}
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <p className="text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-white/5 w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.dates}</span>
                    </div>
                  </div>

                  {/* Description */}
                  {/* <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Background Decoration */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}
