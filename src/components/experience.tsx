"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experienceLevels = [
  {
    title: "Full Stack Intern",
    company: "CAPGRID",
    dates: "Feb 2025 - July 2025",
  },
  {
    title: "SDE 1",
    company: "CAPGRID",
    dates: "Aug 2025 - Present",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
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
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="space-y-8" id="experience">
      <h2 className="text-2xl font-medium text-foreground text-center">
        Experience
      </h2>
      <div ref={ref} className="relative max-w-2xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experienceLevels.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex items-start"
              variants={itemVariants}
            >
              {/* Dotted Arrow Connector */}
              {index < experienceLevels.length - 1 && (
                <div className="relative left-0 top-8 h-full w-px">
                  <motion.svg
                    width="20"
                    height="100%"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <defs>
                      <pattern
                        id="repeating-arrow-pattern"
                        patternUnits="userSpaceOnUse"
                        width="20"
                        height="48"
                      >
                        <line
                          x1="10"
                          y1="0"
                          x2="10"
                          y2="32"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                        <polyline
                          points="6 38, 10 42, 14 38"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </pattern>
                    </defs>
                    <motion.rect
                      width="20"
                      x="0"
                      y="0"
                      fill="url(#repeating-arrow-pattern)"
                      className="text-muted-foreground"
                      variants={{
                        hidden: { height: 0 },
                        visible: {
                          height: "100%",
                          transition: {
                            delay: index * 0.5 + 0.5,
                            duration: 0.4,
                            ease: "easeInOut",
                          },
                        },
                      }}
                    />
                  </motion.svg>
                </div>
              )}

              <div className="pl-8 flex-1">
                <p className="text-xs text-muted-foreground mb-1">
                  {exp.dates}
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-0.5">
                  {exp.title}
                </h3>
                <h4 className="text-sm font-normal text-muted-foreground">
                  {exp.company}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
