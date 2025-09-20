"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sentify",
    description:
      "A scalable sentiment analysis API built with FastAPI, processing 10,000+ YouTube comments in real time. Features optimized model evaluation and robust error handling.",
    github: "https://github.com/divyadityabhardwaj/sentify-v2",
    live: "https://sentify-v2.vercel.app/",
    image:
      "/images/Flux_Dev_A_sleek_and_modern_techthemed_illustration_showing_a__2.jpg",
  },
  {
    title: "Gestura",
    description:
      "Hand gesture recognition model using MediaPipe and CNNs, achieving 98% accuracy on 7,800+ samples. Built for accessibility use cases like sign language translation.",
    github: "https://github.com/divyadityabhardwaj/sign-language-recognition",
    image:
      "/images/Leonardo_Phoenix_10_A_sleek_modern_darkthemed_tech_illustratio_0.jpg",
  },
  {
    title: "ProcrastiNation",
    description:
      "Study platform managing 250+ educational videos with AI-generated summaries and Q&A features. Built to support 50,000+ monthly active users with Supabase backend.",
    github: "https://github.com/divyadityabhardwaj/Procastination-v2",
    live: "https://procastination-v2.netlify.app/",
    image: "/images/image.png",
  },
];

export function Projects() {
  return (
    <section className="space-y-6" id="projects">
      <h2 className="text-2xl font-medium">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="bg-muted rounded-lg overflow-hidden flex flex-col group shadow-lg border border-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(59,130,246,0.15)",
            }}
          >
            <div className="relative w-full h-40 bg-gray-200  flex items-center justify-center">
              {/* Image placeholder, replace src later */}
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                style={{ filter: "blur(0.5px)" }}
              />
              <div className="absolute top-2 right-2 flex gap-2 z-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/80 rounded-full p-2 hover:bg-blue-100 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/80 rounded-full p-2 hover:bg-green-100 transition-colors"
                    title="Live Preview"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
            <div className="flex-1 flex flex-col p-4">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 -blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm flex-1 group-hover:text-foreground transition-colors">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
