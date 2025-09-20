"use client";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

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
    <Card className="bg-background p-6 space-y-6">
      <h2 className="text-2xl font-medium">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <motion.span key={tech}>
            <Badge
              variant="secondary"
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              {tech}
            </Badge>
          </motion.span>
        ))}
      </div>
    </Card>
  );
}
