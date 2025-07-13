export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
            Hi, I’m{" "}
            <span className="animated-gradient-text font-medium">
              Divyaditya
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            A developer with a curiosity-driven mindset and a love for building
            tech.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            View My Work
          </a>
          {/* <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-border hover:bg-accent rounded-lg transition-colors"
          >
            Get In Touch
          </a> */}
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
