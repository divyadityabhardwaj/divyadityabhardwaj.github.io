"use client";
import { motion } from "framer-motion";

const technologies = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "C++",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Flask",
  "MongoDB",
  "Redis",
  "PostgreSQL",
  "MySQL",
  "GraphQL",
  "TensorFlow",
  "MediaPipe",
  "NLP",
  "OpenCV",
  "Docker",
  "Git",
  "AWS",
];

export function TechStack() {
  return (
    <motion.section
      className="space-y-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-medium">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <motion.span
            key={tech}
            className="px-3 py-1.5 bg-black text-white dark:bg-white dark:text-black text-sm rounded-full font-medium hover:scale-110 transition-transform cursor-pointer"
            whileHover={{
              scale: 1.12,
              boxShadow: "0 4px 16px rgba(59,130,246,0.10)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
