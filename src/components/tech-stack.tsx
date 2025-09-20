"use client";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGit,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiNextdotjs,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiGraphql,
  SiTensorflow,
  SiOpencv,
} from "react-icons/si";

const technologies = [
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "C++", icon: SiCplusplus },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "Flask", icon: SiFlask },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "GraphQL", icon: SiGraphql },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "MediaPipe", icon: null },
  { name: "NLP", icon: null },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGit },
  { name: "AWS", icon: FaAws },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function TechStack() {
  return (
    <Card className="bg-background p-6 space-y-6">
      <h2 className="text-2xl font-medium">Tech Stack</h2>
      <motion.div
        className="flex flex-wrap gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {technologies.map((tech) => (
          <motion.div key={tech.name} variants={itemVariants}>
            <Badge
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-chart-2/20 to-chart-3/20 backdrop-blur-md border border-white/40 text-foreground hover:scale-105 hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer rounded-lg"
            >
              {tech.icon && <tech.icon size={16} />}
              {tech.name}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
}
