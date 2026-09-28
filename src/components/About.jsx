import { useState } from "react";
import { ArrowRight, ImageIcon, Quote } from "lucide-react";
import { about, profile } from "../data/content";
import { Button, CountUp, Reveal, Section, SectionHeading } from "./ui";

function SecondaryImage() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -left-5 -top-5 h-24 w-24 rounded-2xl bg-accent-500/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-navy-100"
      />
      <div className="relative overflow-hidden rounded-[2rem] bg-navy-100 shadow-xl shadow-navy-900/10 ring-1 ring-navy-100">
        {failed ? (
          <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 px-8 text-center">
            <ImageIcon className="h-12 w-12 text-navy-300" aria-hidden="true" />
            <p className="text-sm font-semibold text-navy-500">
              Optional second photo at
              <br />
              <code className="mt-1 inline-block rounded-md bg-white px-2 py-1 text-xs text-navy-700">
                /public{profile.photoSecondary}
              </code>
            </p>
          </div>
        ) : (
          <img
            src={profile.photoSecondary}
            onError={() => setFailed(true)}
            alt={`${profile.name} at work`}
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-navy-100 bg-white p-4 shadow-xl sm:left-auto sm:-right-8 sm:w-60">
        <Quote className="h-5 w-5 text-accent-500" aria-hidden="true" />
        <p className="mt-2 text-sm font-semibold leading-snug text-navy-800">
          &ldquo;I help logistics businesses stay organized, efficient, and on
          schedule.&rdquo;
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" className="bg-navy-50/50">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal from="left" className="order-2 lg:order-1">
          <SecondaryImage />
        </Reveal>

        <Reveal from="right" delay={100} className="order-1 lg:order-2">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.headline}
            align="left"
          />

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} className="text-base leading-relaxed text-navy-600">
                {text}
              </p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-1 divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {about.stats.map((stat) => (
              <div key={stat.label} className="p-5">
                <dt className="text-2xl font-extrabold tracking-tight text-navy-900">
                  {stat.value === null ? (
                    stat.display
                  ) : (
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  )}
                </dt>
                <dd className="mt-1.5">
                  <span className="block text-sm font-bold text-accent-600">
                    {stat.label}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-navy-500">
                    {stat.sublabel}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-9">
            <Button href="#experience" variant="navy">
              More About Me
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
