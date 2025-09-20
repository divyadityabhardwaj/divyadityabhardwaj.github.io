import { Card } from "@/components/ui/card";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Violet Abyss */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #000000",
        }}
      />
      <main className="relative z-10 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
          <Card className="bg-background shadow-none">
            <Hero />
            <About />
            <Experience />
            <Education />
            <TechStack />
            <Projects />
          </Card>
        </div>
      </main>
    </div>
  );
}
