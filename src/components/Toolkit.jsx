import { toolkit } from "../data/content";
import { brandLogos } from "./BrandLogos";
import { Icon, Reveal, Section, SectionHeading } from "./ui";

export default function Toolkit() {
  return (
    <Section id="toolkit" dark className="bg-navy-950">
      <Reveal>
        <SectionHeading
          eyebrow={toolkit.eyebrow}
          title={toolkit.headline}
          intro={toolkit.note}
          dark
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {toolkit.tools.map((tool, i) => {
          const Logo = brandLogos[tool.logo];
          return (
            <Reveal key={tool.name} delay={i * 45}>
              <div className="group flex h-full flex-col items-center justify-center gap-4 px-2 py-6 text-center">
                <span
                  className="float-drift flex h-14 w-14 items-center justify-center drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    // Staggered so the logos drift independently.
                    "--float-duration": `${6 + (i % 4) * 0.9}s`,
                    "--float-delay": `${(i % 6) * 0.45}s`,
                  }}
                >
                  {Logo ? (
                    <Logo />
                  ) : (
                    <Icon
                      name={tool.icon}
                      className="h-8 w-8 text-navy-100"
                      strokeWidth={1.8}
                    />
                  )}
                </span>
                <span className="text-sm font-bold text-white">{tool.name}</span>
              </div>
            </Reveal>
          );
        })}
      </div>

    </Section>
  );
}
