import { useEffect, useRef, useState } from "react";
import {
  Award,
  CalendarClock,
  CheckCircle2,
  CheckSquare,
  Circle,
  ClipboardList,
  Clock,
  Database,
  FileSpreadsheet,
  FileText,
  FolderTree,
  Handshake,
  Headphones,
  Inbox,
  LayoutGrid,
  Mail,
  MessageSquare,
  ScanSearch,
  Search,
  Send,
  Sheet,
  ShieldCheck,
  Table2,
  Trello,
  Truck,
  Users,
  Video,
  Workflow as WorkflowIcon,
} from "lucide-react";

/**
 * Icons referenced by name from src/data/content.js.
 * Add an entry here if you use a new lucide icon name in the content file.
 */
const iconMap = {
  Award,
  CalendarClock,
  CheckCircle2,
  CheckSquare,
  ClipboardList,
  Clock,
  Database,
  FileSpreadsheet,
  FileText,
  FolderTree,
  Handshake,
  Headphones,
  Inbox,
  LayoutGrid,
  Mail,
  MessageSquare,
  ScanSearch,
  Search,
  Send,
  Sheet,
  ShieldCheck,
  Table2,
  Trello,
  Truck,
  Users,
  Video,
  Workflow: WorkflowIcon,
};

/** Render a lucide icon by its string name (falls back to a neutral icon). */
export function Icon({ name, ...props }) {
  const Cmp = iconMap[name] ?? Circle;
  return <Cmp aria-hidden="true" {...props} />;
}

export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

const revealDirections = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

/**
 * Fades children in once they scroll into view.
 * `from` picks the direction: "up" (default), "left", "right", or "scale".
 */
export function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cx(
        "reveal",
        revealDirections[from],
        visible && "is-visible",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Section({ id, children, className = "", dark = false }) {
  return (
    <section
      id={id}
      className={cx(
        "scroll-mt-24 py-20 sm:py-28",
        dark ? "bg-navy-950 text-white" : "bg-white text-navy-900",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em]",
        dark
          ? "bg-white/10 text-accent-400 ring-1 ring-white/15"
          : "bg-navy-50 text-navy-600 ring-1 ring-navy-100"
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  align = "center",
}) {
  return (
    <div
      className={cx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={cx(
          "max-w-3xl text-[1.75rem] font-extrabold leading-[1.18] tracking-tight sm:text-4xl sm:leading-[1.15] lg:text-[2.75rem]",
          dark ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cx(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            dark ? "text-navy-200" : "text-navy-600/90"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2";

const buttonVariants = {
  primary:
    "bg-accent-500 text-white shadow-lg shadow-accent-500/25 hover:bg-accent-600 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-500/30 focus-visible:ring-offset-navy-950",
  navy:
    "bg-navy-900 text-white shadow-lg shadow-navy-900/20 hover:bg-navy-800 hover:-translate-y-0.5 focus-visible:ring-offset-white",
  outline:
    "border border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/50 hover:bg-white/10 hover:-translate-y-0.5 focus-visible:ring-offset-navy-950",
  outlineDark:
    "border border-navy-200 bg-white text-navy-800 hover:border-navy-400 hover:bg-navy-50 hover:-translate-y-0.5 focus-visible:ring-offset-white",
};

export function Button({
  as = "a",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const Tag = as;
  return (
    <Tag className={cx(buttonBase, buttonVariants[variant], className)} {...props}>
      {children}
    </Tag>
  );
}

/** Counts up to `value` when scrolled into view. */
export function CountUp({ value, suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
