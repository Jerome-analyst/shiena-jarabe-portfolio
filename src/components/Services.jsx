import { services } from "../data/content";
import { Icon, Reveal, Section, SectionHeading } from "./ui";

export default function Services() {
  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.headline}
          intro={services.intro}
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service, i) => (
          <Reveal key={service.number} delay={i * 70}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/8">
              <span
                aria-hidden="true"
                className="absolute right-6 top-5 text-4xl font-extrabold tracking-tight text-navy-50 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-accent-500/20"
              >
                {service.number}
              </span>

              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white shadow-lg shadow-navy-900/15 transition-colors duration-300 group-hover:bg-accent-500 group-hover:shadow-accent-500/25">
                <Icon name={service.icon} className="h-5 w-5" strokeWidth={2} />
              </span>

              <h3 className="mt-5 text-lg font-bold tracking-tight text-navy-900">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-600">
                {service.description}
              </p>

              <span
                aria-hidden="true"
                className="mt-6 block h-1 w-10 rounded-full bg-navy-100 transition-all duration-300 group-hover:w-20 group-hover:bg-accent-500"
              />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
