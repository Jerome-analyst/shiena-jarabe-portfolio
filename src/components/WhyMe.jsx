import { whyMe } from "../data/content";
import { Icon, Reveal, Section, SectionHeading } from "./ui";

export default function WhyMe() {
  return (
    <Section id="why" dark className="bg-navy-950">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[42%_1fr] lg:gap-16">
        <Reveal from="left">
          <SectionHeading
            eyebrow={whyMe.eyebrow}
            title={whyMe.headline}
            dark
            align="left"
          />
          <p className="mt-6 text-base leading-relaxed text-navy-200">
            {whyMe.paragraph}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {whyMe.benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:bg-white/[0.07]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <Icon name={benefit.icon} className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-base font-bold tracking-tight text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
