import { skills } from "../data/content";
import { Icon, Reveal, Section, SectionHeading, cx } from "./ui";

const accents = {
  accent: {
    badge: "bg-accent-500 text-white shadow-accent-500/25",
    pill: "border-accent-500/20 bg-accent-500/[0.07] text-navy-800 hover:border-accent-500/50 hover:bg-accent-500/10",
    dot: "bg-accent-500",
  },
  teal: {
    badge: "bg-teal-500 text-white shadow-teal-500/25",
    pill: "border-teal-500/20 bg-teal-500/[0.07] text-navy-800 hover:border-teal-500/50 hover:bg-teal-500/10",
    dot: "bg-teal-500",
  },
  navy: {
    badge: "bg-navy-900 text-white shadow-navy-900/25",
    pill: "border-navy-200 bg-navy-50 text-navy-800 hover:border-navy-400 hover:bg-navy-100",
    dot: "bg-navy-500",
  },
};

export default function Skills() {
  return (
    <Section id="skills" className="bg-navy-50/50">
      <Reveal>
        <SectionHeading eyebrow={skills.eyebrow} title={skills.headline} />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {skills.groups.map((group, i) => {
          const tone = accents[group.accent] ?? accents.navy;
          return (
            <Reveal key={group.title} from="scale" delay={i * 90}>
              <article className="h-full rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <span
                    className={cx(
                      "flex h-11 w-11 items-center justify-center rounded-xl shadow-lg",
                      tone.badge
                    )}
                  >
                    <Icon name={group.icon} className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-navy-900">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item, j) => (
                    <li key={item}>
                      <span
                        style={{ transitionDelay: `${j * 40}ms` }}
                        className={cx(
                          "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
                          tone.pill
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cx("h-1.5 w-1.5 rounded-full", tone.dot)}
                        />
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
