import { Mail, Linkedin, MapPin, ArrowRight } from "lucide-react";
import { contact, cta } from "../data/content";
import { Button, Reveal, Section, SectionHeading } from "./ui";

const socials = [
  {
    key: "email",
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "View profile",
    href: contact.linkedin,
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <Section id="contact" dark className="relative overflow-hidden bg-navy-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-accent-500/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-navy-500/25 blur-[140px]"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal>
          <SectionHeading
            eyebrow={cta.eyebrow}
            title={cta.headline}
            intro={cta.subheadline}
            dark
          />
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href={`mailto:${contact.email}`} variant="primary">
              Let&apos;s Work Together
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={contact.linkedin} target="_blank" rel="noreferrer" variant="outline">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              Connect on LinkedIn
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="w-full">
          <ul className="mx-auto mt-12 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {socials.map(({ key, label, value, href, icon: LucideIcon }) => (
              <li key={key}>
                <a
                  href={href}
                  target={key === "email" ? undefined : "_blank"}
                  rel={key === "email" ? undefined : "noreferrer"}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <LucideIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-navy-300">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-semibold text-white">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-navy-300">
            <MapPin className="h-4 w-4 text-teal-400" aria-hidden="true" />
            {contact.location}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
