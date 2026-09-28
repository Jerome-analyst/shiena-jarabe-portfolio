import { Briefcase, Check, MapPin } from "lucide-react";
import { experience } from "../data/content";
import { Reveal, Section, SectionHeading } from "./ui";

export default function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading eyebrow={experience.eyebrow} title={experience.headline} />
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-3xl">
        {/* Vertical rail */}
        <span
          aria-hidden="true"
          className="absolute left-[1.125rem] top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/50 via-navy-200 to-transparent sm:left-6"
        />

        <ol className="space-y-8">
          {experience.items.map((item, i) => (
            <Reveal key={`${item.role}-${i}`} from="left" delay={i * 110} as="li">
              <div className="relative pl-12 sm:pl-20">
                <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-xl border border-navy-100 bg-white text-navy-900 shadow-md sm:h-12 sm:w-12">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </span>

                <article className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-navy-900 px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-white">
                      {item.period}
                    </span>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-teal-600 ring-1 ring-teal-500/20">
                        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-teal-500" />
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-navy-900">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accent-600">
                    {item.company}
                  </p>
                  {item.location && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-navy-500">
                      <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {item.location}
                    </p>
                  )}

                  <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {item.responsibilities.map((task) => (
                      <li
                        key={task}
                        className="flex items-start gap-2 text-sm text-navy-600"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-teal-500"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                        {task}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
