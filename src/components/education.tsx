"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <motion.section
      className="space-y-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-medium">Education</h2>
      <motion.div
        className="flex items-start gap-4  rounded-lg bg-muted"
        transition={{ duration: 0.3 }}
      >
        <div className="flex-shrink-0 mt-1">
          <GraduationCap className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">Bennett University</h3>
            <span className="text-muted-foreground">2022 - 2026</span>
          </div>
          <p className="text-muted-foreground mb-1">
            B. Tech. in Computer Science and Engineering
          </p>
          <p className="text-muted-foreground text-sm">CGPA: 9.22/10</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
