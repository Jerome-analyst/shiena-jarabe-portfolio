import { workflow } from "../data/content";
import { Icon, Reveal, Section, SectionHeading } from "./ui";

export default function Workflow() {
  return (
    <Section id="workflow">
      <Reveal>
        <SectionHeading eyebrow={workflow.eyebrow} title={workflow.headline} />
      </Reveal>

      <div className="relative mt-16">
        {/* Connecting line (desktop), with a pulse that travels along it */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-7 hidden h-px bg-navy-100 lg:block"
        >
          <span className="trace-line absolute inset-0 block opacity-70" />
        </div>

        <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {workflow.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 110} as="li">
              <div className="group relative flex h-full flex-col">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-navy-100 bg-white text-navy-900 shadow-md transition-all duration-500 group-hover:-translate-y-1.5 group-hover:rotate-6 group-hover:border-accent-500 group-hover:bg-accent-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent-500/25">
                  <Icon name={step.icon} className="h-6 w-6" strokeWidth={1.9} />
                </span>

                <span className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-accent-600">
                  {step.number}
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
