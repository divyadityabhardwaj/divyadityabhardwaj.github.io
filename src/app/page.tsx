import { Card } from "@/components/ui/card";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-background dark:bg-gray-950 relative">
      <AnimatedBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 space-y-16">
        <Card className="bg-background dark:bg-gray-950 shadow-none">
          <Hero />
          <About />
          <Experience />
          <Education />
          <TechStack />
          <Projects />
        </Card>
      </div>
    </main>
  );
}
