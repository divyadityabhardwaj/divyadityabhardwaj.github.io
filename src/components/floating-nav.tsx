"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

export function FloatingNav() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-background/80 backdrop-blur-md border rounded-full px-3 py-2 shadow-lg">
        <a
          href="#"
          className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent transition-colors"
          title="Home"
        >
          <Home className="w-4 h-4" />
        </a>
        <a
          href="#about"
          className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent transition-colors"
          title="About"
        >
          <User className="w-4 h-4" />
        </a>
        <a
          href="#experience"
          className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent transition-colors"
          title="Experience"
        >
          <Briefcase className="w-4 h-4" />
        </a>
        <a
          href="#projects"
          className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent transition-colors"
          title="Projects"
        >
          <Code className="w-4 h-4" />
        </a>
        <a
          href="#contact"
          className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent transition-colors"
          title="Contact"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com/in/divyaditya-bhardwaj"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent transition-colors"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/divyadityabhardwaj"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent transition-colors"
          title="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
}
