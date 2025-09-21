import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import RotatingText from "./RotatingText";
import { GlowingName } from "./GlowingName";

export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-normal align-left">
            <GlowingName text="Divyaditya Bhardwaj" className="" />
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            I build
            <span className="align-middle">
              <RotatingText
                texts={["backends", "webapps", "frontends", "APIs"]}
                mainClassName="inline-flex items-center px-2 sm:px-2 md:px-3 bg-accent text-accent-foreground py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </p>
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center gap-4  pb-6">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/divyadityabhardwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg w-10 h-10 flex items-center justify-center bg-accent hover:bg-accent/80 transition-colors group border-2 border-white/40"
              title="GitHub"
            >
              <Github
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="white"
              />
            </a>
            <a
              href="https://linkedin.com/in/divyaditya-bhardwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg w-10 h-10 flex items-center justify-center bg-accent hover:bg-accent/80 transition-colors group border-2 border-white/40"
              title="LinkedIn"
            >
              <Linkedin
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="white"
              />
            </a>
            <a
              href="mailto:divyadityabhardwaj@gmail.com"
              className="rounded-lg w-10 h-10 flex items-center justify-center bg-accent hover:bg-accent/80 transition-colors group border-2 border-white/40"
              title="Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://x.com/adino_there"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg w-10 h-10 flex items-center justify-center bg-accent hover:bg-accent/80 transition-colors group border-2 border-white/40"
              title="X"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="white"
                  d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
                />
              </svg>
            </a>
            <a
              href={process.env.NEXT_PUBLIC_RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-lg h-10 px-4 flex items-center justify-center bg-accent hover:bg-accent/80 transition-colors group border-2 border-white/40 text-white hover:scale-105 transition-transform">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
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
