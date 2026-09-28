import { useState } from "react";
import { ArrowRight, Mail, Check, UserRound, ShieldCheck } from "lucide-react";
import { profile, heroCards } from "../data/content";
import { Button, Icon, Reveal } from "./ui";

/** Subtle logistics-inspired backdrop: route lines, pins, grid, glow. */
function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-backdrop opacity-30" />
      <div className="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-navy-500/15 blur-[130px]" />
      <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent-500/10 blur-[140px]" />

      {/* A single route line, kept faint — suggestion, not decoration. */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.16]"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-50 660 C 260 660, 300 440, 560 440 S 880 260, 1260 260"
          stroke="url(#routeGradient)"
          strokeWidth="1.25"
          strokeDasharray="9 13"
        />
        <circle cx="560" cy="440" r="4" fill="#f97316" />
        <circle cx="560" cy="440" r="13" stroke="#f97316" strokeWidth="1" opacity="0.4" />
        <defs>
          <linearGradient id="routeGradient" x1="0" y1="0" x2="1200" y2="800">
            <stop offset="0%" stopColor="#5784c3" stopOpacity="0" />
            <stop offset="45%" stopColor="#bccfea" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FloatingCard({ card, className, animation }) {
  return (
    <div
      className={`absolute z-20 flex max-w-[11rem] items-center gap-2.5 rounded-2xl border border-white/15 bg-navy-900/80 px-3 py-2.5 shadow-2xl shadow-navy-950/50 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.04] sm:max-w-none sm:gap-3 sm:px-4 sm:py-3 ${animation} ${className}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400 sm:h-9 sm:w-9">
        <Icon name={card.icon} className="h-4 w-4 sm:h-[1.1rem] sm:w-[1.1rem]" strokeWidth={2} />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="truncate text-[0.72rem] font-bold text-white sm:text-[0.8rem]">
          {card.title}
        </span>
        <span className="mt-0.5 flex items-center gap-1.5 text-[0.7rem] font-semibold text-teal-400">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-teal-400" aria-hidden="true" />
          {card.status}
        </span>
      </span>
    </div>
  );
}

function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
      {/* A single offset frame reads calmer than stacked shapes. */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-[2.5rem] border border-white/10 sm:-inset-5 sm:rounded-[2.75rem]"
      />

      <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-navy-700 to-navy-900 shadow-2xl shadow-navy-950/60 ring-1 ring-white/10">
        {/* Replace public/images/profile.jpg with your own portrait. */}
        {failed ? (
          <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 text-center">
            <UserRound className="h-16 w-16 text-navy-300" aria-hidden="true" />
            <p className="px-8 text-sm font-semibold text-navy-200">
              Add your portrait at
              <br />
              <code className="mt-1 inline-block rounded-md bg-white/10 px-2 py-1 text-xs text-white">
                /public{profile.photo}
              </code>
            </p>
          </div>
        ) : (
          <img
            src={profile.photo}
            onError={() => setFailed(true)}
            alt={`${profile.name}, ${profile.title}`}
            className="aspect-[4/5] w-full object-cover"
            loading="eager"
            width={720}
            height={900}
          />
        )}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent"
        />

        {/* Name plate anchored to the portrait */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-lg font-extrabold tracking-tight text-white">
            {profile.name}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent-400">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            {profile.title}
          </p>
        </div>
      </div>

      <FloatingCard
        card={heroCards[0]}
        animation="float-slow"
        className="left-1 top-16 sm:-left-12 sm:top-20"
      />
      <FloatingCard
        card={heroCards[1]}
        animation="float-slower"
        className="right-1 bottom-20 sm:-right-4 sm:bottom-16 xl:-right-10"
      />
    </div>
  );
}

export default function Hero() {
  // Split the headline so the trailing accent phrase can be colored.
  const headlineLead = profile.headlineAccent
    ? profile.headline.slice(
        0,
        profile.headline.lastIndexOf(profile.headlineAccent)
      )
    : profile.headline;

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy-950 pb-24 pt-32 text-white sm:pb-32 sm:pt-40"
    >
      <HeroBackdrop />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_44%] lg:gap-12">
        {/* Left: copy */}
        <Reveal from="left" className="order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-accent-400 backdrop-blur sm:px-4 sm:text-[0.7rem] sm:tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            {profile.badge}
          </span>

          <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.12] tracking-tight sm:mt-7 sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem]">
            {headlineLead}
            {profile.headlineAccent && (
              <span className="text-accent-400">{profile.headlineAccent}</span>
            )}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
            {profile.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#services" variant="primary">
              View My Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="outline">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Let&apos;s Work Together
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-7">
            {profile.trustIndicators.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-semibold text-navy-200"
              >
                <Check className="h-4 w-4 text-teal-400" strokeWidth={3} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right: portrait */}
        <Reveal from="right" delay={120} className="order-2 w-full">
          <Portrait />
        </Reveal>
      </div>
    </section>
  );
}
