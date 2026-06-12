import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMotionSystem } from "@/hooks/use-motion-system";

import heroAsset from "@/assets/band/hero.jpg.asset.json";
import logoAsset from "@/assets/band/logo.jpg.asset.json";
import michaelAsset from "@/assets/band/michael.jpg.asset.json";
import peterAsset from "@/assets/band/peter.jpg.asset.json";
import graceAsset from "@/assets/band/grace.jpg.asset.json";
import georgeAsset from "@/assets/band/george.jpg.asset.json";
import samuelAsset from "@/assets/band/samuel.jpg.asset.json";
import muhiaAsset from "@/assets/band/muhia.jpg.asset.json";
import stage1Asset from "@/assets/band/stage1.jpg.asset.json";
import sammyAsset from "@/assets/band/sammy.jpg.asset.json";
import saz1Asset from "@/assets/band/saz1.jpg.asset.json";
import saz2Asset from "@/assets/band/saz2.jpg.asset.json";
import heatHeartAsset from "@/assets/band/heatheart.jpg.asset.json";

const heroImg = heroAsset.url;
const logoImg = logoAsset.url;
const weaveImg = saz2Asset.url;
const stageImg = stage1Asset.url;
const vocalistImg = graceAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sauti Aziz Band — Precious Voice. Powerful Purpose." },
      { name: "description", content: "A 14-voice Afro-Fusion collective from Chuka, Kenya. Music, storytelling and youth empowerment — from Africa to the world." },
      { property: "og:title", content: "Sauti Aziz Band — Precious Voice. Powerful Purpose." },
      { property: "og:description", content: "A 14-voice Afro-Fusion collective from Chuka, Kenya. Africa to the world." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const NAV = [
  { id: "story", label: "Story" },
  { id: "sound", label: "Sound" },
  { id: "collective", label: "Collective" },
  { id: "timeline", label: "Journey" },
  { id: "sazfest", label: "SAZ Fest" },
  { id: "book", label: "Book" },
];

const LEADERSHIP = [
  ["Joseph Mwangi", "President & Co-Founder"],
  ["Samuel Odanga", "Chairperson"],
  ["Catherine Mariba", "Deputy Chairperson"],
  ["Joseph Muhia Buya", "Music Director"],
  ["Michael Kamau Munyua", "Lead Vocalist"],
  ["Alex Kamau", "Secretary"],
  ["Grace Njoroge Mumbi", "Treasurer"],
  ["Peter Mukungi", "Disciplinary Officer"],
];

const COLLECTIVE: { name: string; role: string; field: string; photo?: string }[] = [
  { name: "Joseph Mwangi", role: "Vocals · Founder", field: "Economics & Statistics" },
  { name: "Michael Kamau Munyua", role: "Lead Vocals · Guitarist", field: "Business", photo: michaelAsset.url },
  { name: "Peter Mukungi", role: "Vocals · Rapper · Spoken Word", field: "Computer Science", photo: peterAsset.url },
  { name: "Grace Njoroge Mumbi", role: "Vocals · Treasurer", field: "Computer Science", photo: graceAsset.url },
  { name: "Claire Omondi", role: "Tenor Vocals", field: "Psychology" },
  { name: "George Kihara", role: "Bass Vocals · Rapper", field: "Health Systems & Data", photo: georgeAsset.url },
  { name: "Pamelah Shekinah", role: "Alto Vocals", field: "Nursing" },
  { name: "Samuel Odanga", role: "Guitarist · Vocals · Chair", field: "Communication Studies", photo: samuelAsset.url },
  { name: "Catherine Mariba", role: "Alto / Tenor · Guitarist", field: "Electrical Engineering" },
  { name: "Joseph Muhia Buya", role: "Music Director · Multi-Instrumentalist", field: "Law", photo: muhiaAsset.url },
  { name: "Janice Kipkiror", role: "Vocals", field: "Computer Science" },
  { name: "Alex Kamau", role: "Rapper · Vocals · Secretary", field: "Linguistics & Literature" },
  { name: "Cherotich Kilel", role: "Vocals", field: "Commerce" },
  { name: "Sammy Ogejo", role: "Producer · Guitarist · Vocals", field: "Physics", photo: sammyAsset.url },
];

const TIMELINE = [
  { year: "2021", title: "Founded in Chuka", body: "Joseph Mwangi and fellow musicians turn informal jam sessions into a movement." },
  { year: "2021", title: "First University Stages", body: "Debut performances introduce the collective to Kenya's campus audiences." },
  { year: "2022", title: "Safaricom Hook Circle", body: "A breakout appearance places Sauti Aziz on the national radar." },
  { year: "2023", title: "Major Cover Releases", body: "A wave of releases earns the band a dedicated digital following." },
  { year: "2023", title: "Sina Noma — 1M+ Engagements", body: "The Sina Noma cover crosses one million views and engagements." },
  { year: "2024", title: "TV47 Feature", body: "National broadcast spotlight expands reach across East Africa." },
  { year: "2024", title: "Regional Festival Tour", body: "Bookings expand from campus shows to regional festivals." },
  { year: "2025", title: "Original Music Era", body: "The collective steps into a new chapter — original songs, original stories." },
];

const GENRES = ["Afrobeat", "Afro Soul", "Afro Fusion", "Acoustic", "R&B", "Spoken Word", "Contemporary African Pop", "Amapiano"];

function Index() {
  useMotionSystem();
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Mission />
        <Sound />
        <Collective />
        <Leadership />
        <Timeline />
        <Showcase />
        <SazFest />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-cream ring-1 ring-gold/60">
            <img src={logoImg} alt="Sauti Aziz logo" className="h-full w-full object-contain p-1" />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base text-foreground">Sauti Aziz</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Precious Voice</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="group relative text-sm text-foreground/80 transition hover:text-foreground"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#book"
          className="hidden rounded-full bg-forest px-5 py-2.5 text-sm text-cream transition hover:bg-forest-deep md:inline-flex"
        >
          Book the band
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute inset-x-0 top-0 h-px bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 bottom-0 h-px bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="rounded-md px-2 py-3 text-base text-foreground">
                {n.label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-forest px-5 py-3 text-center text-sm text-cream">
              Book the band
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-dvh overflow-hidden bg-night text-cream">
      <img
        src={heroImg}
        alt="Sauti Aziz Band performing on stage in warm stage light"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/40 to-night" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-night to-transparent" />

      <div className="container-x relative z-10 flex min-h-dvh flex-col justify-between pb-12 pt-32 md:pt-40">
        <div className="flex items-center gap-3 animate-rise">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow !text-gold-soft">Chuka, Kenya · Est. 2021</span>
        </div>

        <div className="max-w-5xl animate-rise" style={{ animationDelay: "0.15s" }}>
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.92] tracking-tight">
            Precious <em className="italic text-gold">Voice.</em>
            <br />
            Powerful Purpose.
          </h1>
          <p className="mt-8 max-w-xl text-base text-cream/75 md:text-lg">
            Fourteen voices. One sound. A Kenyan Afro-Fusion collective bringing
            music, story and movement from Africa to the world.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#sound"
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-medium text-night transition hover:bg-gold-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-shimmer rounded-full bg-night/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-night" />
              </span>
              Hear Us
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-sm text-cream transition hover:border-cream"
            >
              Our Story <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-cream/15 pt-8 sm:grid-cols-4">
          {[
            ["14", "Voices"],
            ["1M+", "Engagements"],
            ["10+", "Disciplines"],
            ["2021", "Founded"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="font-display text-3xl text-gold md:text-4xl">{k}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cream/55">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Africa To The World", "Precious Voice", "Powerful Purpose", "Sauti Aziz", "Afro-Fusion", "Chuka · Kenya"];
  return (
    <div className="overflow-hidden border-y border-border bg-forest py-6 text-cream">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-16 font-display text-3xl md:text-5xl">
            {w}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-36 ${className}`}>
      <div className="container-x">
        {(eyebrow || title) && (
          <header className="mb-14 max-w-3xl md:mb-20">
            {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
            {title && (
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">{title}</h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

function Story() {
  return (
    <Section
      id="story"
      eyebrow="01 — Origin"
      title={
        <>
          Born from a jam session in <span className="text-forest">Chuka</span>,
          shaped by the conviction that music can heal.
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-12">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-7">
          <p>
            In 2021, Joseph Mwangi and a small circle of musicians began meeting
            in Chuka, Tharaka-Nithi County. There were no contracts. No label.
            Only a question — what if our voices could carry something more than a melody?
          </p>
          <p>
            From those informal sessions, <em className="text-foreground">Sauti Aziz</em> — Precious
            Voice — took shape. A platform for young African creatives to write,
            perform and produce music that resonates across generations.
          </p>
          <p>
            Four years on, Sauti Aziz has grown into one of Kenya's most promising
            emerging collectives — fourteen voices, ten disciplines, one sound.
          </p>
        </div>
        <div className="relative md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img src={vocalistImg} alt="Sauti Aziz vocalist" loading="lazy" width={1200} height={1500} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 weave-bg md:block" aria-hidden />
          <figcaption className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            The voice — the instrument we build everything around.
          </figcaption>
        </div>
      </div>
    </Section>
  );
}

function Mission() {
  const values = [
    ["Craft", "We treat each performance as a body of work. Nothing accidental."],
    ["Culture", "We carry East African story, sound and texture into every room we enter."],
    ["Community", "We build platforms for young creatives to grow alongside us."],
    ["Conviction", "We sing about life as we have lived it. Honest. Joyful. Whole."],
  ];
  return (
    <section className="bg-ink py-24 text-cream md:py-36">
      <div className="container-x grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="eyebrow mb-5">02 — Mission</div>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
            Music is more than entertainment. It is a celebration of life, unity and creativity.
          </h2>
        </div>
        <ul className="grid gap-px bg-cream/10 md:col-span-7 md:grid-cols-2">
          {values.map(([k, v]) => (
            <li key={k} className="bg-ink p-8">
              <div className="font-display text-2xl text-gold">{k}</div>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{v}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Sound() {
  return (
    <Section
      id="sound"
      eyebrow="03 — Musical Identity"
      title={
        <>
          A sound rooted in <span className="italic text-forest">Africa</span>,
          curious about the world.
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-lg leading-relaxed text-foreground/80">
            Afrobeat meets Afro-Soul. Acoustic meets spoken word. A sound that
            could only have grown in Kenya — informed by Fela Kuti, Brenda Fassie,
            Sauti Sol and Bensoul, but spoken in a voice that is ours.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {GENRES.map((g) => (
              <span key={g} className="rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.15em] text-foreground/70">
                {g}
              </span>
            ))}
          </div>
        </div>
        <div className="relative md:col-span-7">
          <div className="aspect-[16/10] overflow-hidden rounded-sm">
            <img src={stageImg} alt="Acoustic guitar under stage light" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -right-4 -top-4 hidden h-24 w-24 border border-gold md:block" aria-hidden />
        </div>
      </div>
    </Section>
  );
}

function Collective() {
  return (
    <Section
      id="collective"
      eyebrow="04 — The Collective"
      title={<>Fourteen voices. Ten disciplines. One sound.</>}
    >
      <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-4">
        {COLLECTIVE.map((m, i) => (
          <article
            key={m.name}
            className="group relative overflow-hidden bg-background transition hover:bg-card"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full w-full items-end justify-start p-6">
                  <span className="font-display text-7xl text-forest/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              )}
              <span className="absolute left-3 top-3 rounded-full bg-night/70 px-2 py-0.5 font-display text-[11px] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg leading-tight">{m.name}</h3>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold">{m.role}</div>
              <div className="mt-2 text-xs text-muted-foreground">{m.field}</div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Leadership() {
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="container-x">
        <div className="mb-12 max-w-2xl">
          <div className="eyebrow mb-5">05 — Leadership</div>
          <h2 className="font-display text-3xl md:text-5xl">The team carrying the movement forward.</h2>
        </div>
        <div className="grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map(([name, role]) => (
            <div key={name} className="border-t border-foreground/15 pt-5">
              <div className="font-display text-xl">{name}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <Section id="timeline" eyebrow="06 — Journey" title="Four years. One trajectory.">
      <ol className="relative mx-auto max-w-4xl">
        <span className="absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-border md:left-1/2" aria-hidden />
        {TIMELINE.map((t, i) => (
          <li key={i} className="relative grid grid-cols-1 gap-4 py-8 md:grid-cols-2 md:gap-12">
            <span className="absolute left-3 top-10 h-2 w-2 -translate-x-1/2 rounded-full bg-gold ring-4 ring-background md:left-1/2" aria-hidden />
            <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
              <div className="font-display text-4xl text-forest md:text-5xl">{t.year}</div>
            </div>
            <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:order-1 md:text-right md:pr-12"}`}>
              <h3 className="font-display text-2xl">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Showcase() {
  const tracks = [
    { title: "Beautiful", meta: "Heat & Heart EP · 2025", note: "Track 01" },
    { title: "Energy", meta: "Heat & Heart EP · 2025", note: "Track 02" },
    { title: "Sherehe", meta: "Heat & Heart EP · 2025", note: "Track 03" },
    { title: "Steam", meta: "Heat & Heart EP · 2025", note: "Track 04" },
    { title: "What Is Love", meta: "Heat & Heart EP · 2025", note: "Track 05" },
  ];
  return (
    <section className="bg-night py-24 text-cream md:py-36">
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-20">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5">07 — Listen</div>
            <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">Press play. Stay awhile.</h2>
          </div>
          <a href="https://www.youtube.com/@sauti_aziz_band" target="_blank" rel="noreferrer" className="text-sm text-gold underline-offset-4 hover:underline">Watch on YouTube →</a>
        </div>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-sm ring-1 ring-cream/10">
              <img src={heatHeartAsset.url} alt="Heat & Heart EP cover" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="eyebrow !text-gold-soft">Upcoming EP</div>
                <div className="font-display text-2xl">Heat & Heart</div>
              </div>
              <div className="text-right text-xs uppercase tracking-[0.2em] text-cream/55">Out 31 June</div>
            </div>
          </div>
          <ul className="divide-y divide-cream/10 border-y border-cream/10 md:col-span-7">
            {tracks.map((t, i) => (
              <li key={t.title} className="group flex items-center gap-6 py-6 transition hover:bg-cream/5 md:py-7">
                <span className="w-10 font-display text-2xl text-gold md:text-3xl">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1">
                  <div className="font-display text-xl md:text-2xl">{t.title}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/55">{t.meta}</div>
                </div>
                <div className="hidden text-sm text-cream/60 sm:block">{t.note}</div>
                <button
                  aria-label={`Play ${t.title}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition group-hover:border-gold group-hover:text-gold"
                >
                  ▶
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SazFest() {
  return (
    <section id="sazfest" className="relative overflow-hidden bg-forest py-24 text-cream md:py-36">
      <img src={weaveImg} alt="" loading="lazy" width={1600} height={1000} aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-overlay" />
      <div className="container-x relative">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="eyebrow mb-5 !text-gold-soft">08 — Flagship Initiative</div>
            <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
              SAZ Fest.
              <br />
              <em className="italic text-gold">Where the movement gathers.</em>
            </h2>
            <p className="mt-8 max-w-xl text-cream/80">
              SAZ Fest is Sauti Aziz's flagship cultural platform — a meeting point
              for music, entrepreneurship, innovation, community and youth leadership.
              Not just a festival. A future-East-African institution being built in real time.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#book" className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-night hover:bg-gold-soft">
                Partner with SAZ Fest
              </a>
              <a href="#contact" className="rounded-full border border-cream/30 px-6 py-3 text-sm hover:border-cream">
                Get notified
              </a>
            </div>
          </div>
          <ul className="space-y-px bg-cream/10 md:col-span-5">
            {[
              ["Music", "Live stages spotlighting emerging African talent."],
              ["Enterprise", "A marketplace for young creative founders."],
              ["Community", "Mentorship, workshops, conversation."],
              ["Innovation", "Where culture meets creative technology."],
            ].map(([k, v]) => (
              <li key={k} className="bg-forest p-6">
                <div className="font-display text-2xl text-gold">{k}</div>
                <p className="mt-2 text-sm text-cream/75">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const types = ["Concert / Festival", "Corporate Event", "University Show", "Private Function", "Media / Press", "Partnership"];
  return (
    <Section
      id="book"
      eyebrow="09 — Bookings"
      title={<>Bring fourteen voices to your stage.</>}
    >
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-lg leading-relaxed text-foreground/80">
            Concerts, festivals, corporate functions, university shows, community
            activations — Sauti Aziz performs across East Africa and beyond.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex justify-between border-b border-border py-3">
              <span className="text-muted-foreground">Based in</span>
              <span>Chuka, Kenya</span>
            </div>
            <div className="flex justify-between border-b border-border py-3">
              <span className="text-muted-foreground">Touring</span>
              <span>East Africa & beyond</span>
            </div>
            <div className="flex justify-between border-b border-border py-3">
              <span className="text-muted-foreground">Languages</span>
              <span>English, Swahili</span>
            </div>
          </div>
        </div>
        <form
          className="space-y-6 rounded-sm bg-card p-8 shadow-sm md:col-span-7"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you. We'll be in touch within 48 hours.");
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Your name" name="name" />
            <Field label="Organisation" name="org" />
            <Field label="Email" name="email" type="email" />
            <Field label="Phone (optional)" name="phone" />
          </div>
          <div>
            <label className="eyebrow mb-2 block">Event type</label>
            <select name="type" className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-forest focus:outline-none">
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Event date" name="date" type="date" />
            <Field label="City" name="city" />
          </div>
          <div>
            <label className="eyebrow mb-2 block">Tell us about your event</label>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-forest focus:outline-none"
              placeholder="Audience, venue, vision…"
            />
          </div>
          <button className="inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-medium text-cream transition hover:bg-forest-deep">
            Send booking enquiry →
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-2 block">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-forest focus:outline-none"
      />
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-muted py-20">
      <div className="container-x grid gap-10 md:grid-cols-3">
        <div>
          <div className="eyebrow mb-3">Press</div>
          <a href="mailto:press@sautiaziz.com" className="font-display text-2xl hover:text-forest">press@sautiaziz.com</a>
        </div>
        <div>
          <div className="eyebrow mb-3">Bookings</div>
          <a href="mailto:bookings@sautiaziz.com" className="font-display text-2xl hover:text-forest">bookings@sautiaziz.com</a>
        </div>
        <div>
          <div className="eyebrow mb-3">Follow</div>
          <div className="flex gap-5 font-display text-lg">
            <a href="#" className="hover:text-forest">Instagram</a>
            <a href="#" className="hover:text-forest">TikTok</a>
            <a href="#" className="hover:text-forest">YouTube</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-night py-16 text-cream">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-3xl md:text-4xl">
              Sauti Aziz <em className="italic text-gold">Band.</em>
            </div>
            <p className="mt-3 max-w-sm text-sm text-cream/60">
              Precious Voice. Powerful Purpose. From Chuka, Kenya — to the world.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterCol title="Explore" links={NAV.map(n => [n.label, `#${n.id}`])} />
            <FooterCol title="Connect" links={[["Instagram","#"],["TikTok","#"],["YouTube","#"],["Spotify","#"]]} />
            <FooterCol title="Office" links={[["Chuka, Kenya","#"],["press@sautiaziz.com","mailto:press@sautiaziz.com"],["bookings@sautiaziz.com","mailto:bookings@sautiaziz.com"]]} />
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Sauti Aziz Band. All rights reserved.</div>
          <div className="tracking-[0.3em] uppercase">Africa · To · The · World</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="eyebrow mb-4">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map(([l, href]) => (
          <li key={l}><a href={href} className="text-cream/75 hover:text-gold">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
