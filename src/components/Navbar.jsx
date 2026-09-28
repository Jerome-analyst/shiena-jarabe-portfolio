import { useEffect, useState } from "react";
import { Menu, X, Boxes } from "lucide-react";
import { navLinks, profile } from "../data/content";
import { cx } from "./ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy-100 bg-white/90 py-3 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-5 sm:px-8"
      >
        <a
          href="#home"
          className="group flex min-h-[2.75rem] min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
        >
          <span
            className={cx(
              "flex h-9 w-9 items-center justify-center rounded-xl transition-colors",
              scrolled ? "bg-navy-900 text-white" : "bg-white/10 text-white ring-1 ring-white/20"
            )}
          >
            <Boxes className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span
              className={cx(
                "text-base font-extrabold tracking-tight transition-colors",
                scrolled ? "text-navy-900" : "text-white"
              )}
            >
              {profile.shortName}
            </span>
            <span
              className={cx(
                "mt-1 hidden text-[0.65rem] font-semibold uppercase tracking-[0.15em] transition-colors xs:block",
                scrolled ? "text-navy-400" : "text-navy-200"
              )}
            >
              {profile.title}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cx(
                  "inline-flex min-h-[2.5rem] items-center rounded-lg px-3.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
                  scrolled
                    ? "text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                    : "text-navy-100 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-xl bg-accent-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 sm:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cx(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 lg:hidden",
              scrolled
                ? "bg-navy-50 text-navy-900 hover:bg-navy-100"
                : "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="lg:hidden"
      >
        <div className="mx-4 mt-3 rounded-2xl border border-navy-100 bg-white p-3 shadow-2xl">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-accent-500 px-4 py-3 text-center text-base font-bold text-white"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
