import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
            Hi, I'm{" "}
            <span className="animated-gradient-text font-medium">
              Divyaditya
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            A developer with a curiosity-driven mindset and a love for building
            tech.
          </p>
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center gap-4 pt-4">
          <span className="text-sm font-medium text-muted-foreground">
            Connect:
          </span>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/divyadityabhardwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full w-10 h-10 flex items-center justify-center bg-accent hover:bg-accent/80 transition-colors group"
              title="GitHub"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/divyaditya-bhardwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full w-10 h-10 flex items-center justify-center bg-accent hover:bg-accent/80 transition-colors group"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:divyadityabhardwaj@gmail.com"
              className="rounded-full w-10 h-10 flex items-center justify-center bg-accent hover:bg-accent/80 transition-colors group"
              title="Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full w-10 h-10 flex items-center justify-center bg-accent hover:bg-accent/80 transition-colors group"
              title="Resume"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0">
        {/* <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-white text-4xl font-bold">DB</div>
        </div> */}
      </div>
    </section>
  );
}
