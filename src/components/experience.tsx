"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Experience() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-medium">Work Experience</h2>
      <motion.div
        className="space-y-4 rounded-lg bg-muted"
        whileHover={{
          scale: 1.01,
          boxShadow: "0 8px 32px rgba(59,130,246,0.10)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">CAPGRID</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Dec 2024 - Present</span>
            {/* <ChevronDown className="w-4 h-4" /> */}
          </div>
        </div>
        <div className="text-muted-foreground space-y-2 text-sm">
          <p>
            • Led backend development as the sole backend engineer across 3
            sprints, delivering critical features independently in a high-paced
            Agile environment.
          </p>
          <p>
            • Architected and secured GraphQL APIs with role-based access
            control for internal and guest users, enabling safe multi-tenant
            access across modules.
          </p>
          <p>
            • Boosted API performance by ~40% by refactoring MongoDB queries
            using aggregation pipelines.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
