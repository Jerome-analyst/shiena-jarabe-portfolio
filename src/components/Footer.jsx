import { Boxes, Mail, Linkedin, ArrowUp } from "lucide-react";
import { contact, footer, profile } from "../data/content";

const socialLinks = [
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail, external: false },
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
                <Boxes className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-extrabold tracking-tight">
                  {profile.name}
                </span>
                <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-navy-300">
                  {profile.title}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              {profile.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-300">
              Navigate
            </h2>
            <ul className="mt-3 space-y-0.5">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline inline-flex min-h-[2.25rem] items-center text-sm font-semibold text-navy-200 transition-colors hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-300">
              Connect
            </h2>
            <ul className="mt-4 flex gap-2.5">
              {socialLinks.map(({ label, href, icon: LucideIcon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-navy-200 transition-all hover:-translate-y-0.5 hover:border-accent-500/50 hover:bg-accent-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                  >
                    <LucideIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 flex min-h-[2.5rem] items-center truncate text-sm font-semibold text-navy-200 transition-colors hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs font-semibold text-navy-400">
            © {footer.year} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex min-h-[2.5rem] items-center gap-2 px-1 text-xs font-bold uppercase tracking-wider text-navy-300 transition-colors hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
