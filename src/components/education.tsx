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
      <motion.div className="border-t border-white/[0.07] py-6" transition={{ duration: 0.3 }}>
        <div className="grid items-start gap-5 md:grid-cols-[minmax(0,140px)_1fr] md:gap-6">
          <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground/90">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>2022 - 2026</span>
          </div>
          <div className="space-y-2">
            <h3 className="max-w-[16rem] text-lg font-medium leading-tight tracking-tight">
              Bennett University
            </h3>
            <p className="max-w-[18rem] text-sm leading-6 text-muted-foreground">
              B. Tech. in Computer Science and Engineering
            </p>
            <p className="text-sm text-muted-foreground">CGPA: 9.22/10</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
