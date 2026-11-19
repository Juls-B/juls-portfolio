import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portrait from "@/assets/portrait.png.asset.json";
import abena from "@/assets/abena.png.asset.json";
import atlas from "@/assets/atlas.png.asset.json";
import celebrity from "@/assets/celebrity.webp.asset.json";
import zyncIos from "@/assets/zync-ios.png.asset.json";
import zyncCampus from "@/assets/zync-campus.png.asset.json";
import iroyals from "@/assets/iroyals.png.asset.json";
import juma from "@/assets/juma.png.asset.json";
import cm from "@/assets/container-margin.png.asset.json";
import wa from "@/assets/design-whatsapp.jpeg.asset.json";
import g12 from "@/assets/group-12.png.asset.json";
import g27 from "@/assets/group-27b.png.asset.json";
import cv from "@/assets/julius-boamah-cv.pdf.asset.json";

const EMAIL = "jboamah211006@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/julius-boamah-24497028a";
const BEHANCE = "https://www.behance.net/juliusboamah";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Julius Boamah — UI/UX Designer Portfolio" },
      { name: "description", content: "Selected product design work by Julius Boamah, a UI/UX designer from Ghana." },
      { property: "og:title", content: "Julius Boamah — UI/UX Designer" },
      { property: "og:description", content: "Selected product design work by Julius Boamah." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const F = "https://www.figma.com/design/";
const projects = [
  { t: "Abena AI", c: "AI product design", d: "Interface design for an AI assistant experience, focused on clear conversation flows.", tags: ["AI", "Mobile", "UI"], img: abena.url, f: F + "0bFvM8ZvtlhkW4iXH3oD2A/Abena-ai" },
  { t: "Zync — Flat iOS Style", c: "iOS app UI", d: "A flat, iOS-inspired visual exploration with clean hierarchy and native patterns.", tags: ["iOS", "Visual"], img: zyncIos.url, f: F + "DGxRWKurT4kiHXPL3xts2T" },
  { t: "Atlas — Digital Twin", c: "App UI", d: "App interface for a digital twin concept, organising complex information simply.", tags: ["Dashboard", "App"], img: atlas.url, f: F + "CWaHuKPA7CqvV3UexEsY7U" },
  { t: "Zync — Campus Social", c: "Social app", d: "Dating and social app design for campus communities.", tags: ["Social", "Mobile"], img: zyncCampus.url, f: F + "VOlAfeB64n6nr3FiFfCUy7" },
  { t: "iRoyals", c: "Product UI", d: "Interface design project exploring a polished, trustworthy visual language.", tags: ["UI", "Web"], img: iroyals.url, f: F + "jiGIEExw7ysxMOylsKSx4A/iRoyals" },
  { t: "Juma", c: "Product UI", d: "Screen design exploration with a focus on layout and flow.", tags: ["UI"], img: juma.url, f: F + "BMLVU369JdMLxRkjFXhHXG/juma" },
  { t: "Celebrity Chief", c: "Web / app design", d: "A food-centred experience with rich imagery and editorial layout.", tags: ["Food", "Visual"], img: celebrity.url, f: F + "quXwzYqbKmkoyRQy1xxISx/celebrity-chief" },
];
const gallery = [
  ...projects.map((p) => ({ img: p.img, t: p.t, href: p.f })),
  { img: g12, t: "UI exploration", href: BEHANCE },
  { img: g27, t: "Campus social screens", href: BEHANCE },
  { img: cm, t: "Interface layouts", href: BEHANCE },
  { img: wa, t: "Design work", href: BEHANCE },
].map((g) => ({ ...g, img: typeof g.img === "string" ? g.img : g.img.url }));
const nav = ["Home", "Work", "Gallery", "About", "Skills", "Contact"];
const skillGroups = [
  { h: "UI/UX & Product", s: ["UI design", "UX research", "Wireframing", "Prototyping", "User journeys", "Design systems", "Mobile app UI", "Web design"] },
  { h: "Design & Editing", s: ["Figma", "Photoshop", "Canva", "Premiere Pro", "After Effects", "Branding", "Graphic design", "3D modeling"] },
  { h: "Development", s: ["HTML/CSS", "JavaScript", "React Native", "Python", "Website maintenance", "E-commerce"] },
  { h: "AI & Strategy", s: ["AI prompt engineering", "AI-assisted design", "Recommendation systems", "Digital marketing", "Project management", "Team leadership"] },
];
const experience = [
  ["2025 — now", "Founder · Juma Design & Software Agency", "Leading design, branding and video projects from planning to delivery."],
  ["2024 — now", "Freelance UI/UX · Graphic Designer · Frontend", "Mobile app UI for clients; websites for Bartey Décor and Lodgers Restaurant."],
  ["2026 — now", "Independent Researcher · Travel A", "Product concept, user journeys and service models for smart mobility in Ghana."],
  ["2024 — 2025", "Marketing Strategist & E-commerce Dev · Shiirat", "Built an online store for small vendors."],
  ["2024 — 2025", "IT & Art Instructor · JCLU School", "Taught IT, design and digital arts."],
];
const awards = ["1st Place — ALX Ghana Cohort Project (2025)", "1st Place — IT Club Web Dev Competition (2025)", "ALX Career Essentials Certificate (2025)"];
const btn = "inline-flex items-center rounded-full px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5";

function Index() {
  const [open, setOpen] = useState(false);
  const [lb, setLb] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-background bg-glow font-sans">
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3">
          <a href="#home" className="font-display font-bold">JB<span className="text-primary">.</span></a>
          <div className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-foreground">{n}</a>)}
          </div>
          <a href={cv.url} target="_blank" rel="noreferrer" className="hidden rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground md:inline">Get CV</a>
          <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        </nav>
        {open && (
          <div className="glass mx-auto mt-2 flex max-w-5xl flex-col rounded-3xl p-4 md:hidden">
            {nav.map((n) => <a key={n} onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="py-2">{n}</a>)}
          </div>
        )}
      </header>

      <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-[1.2fr_1fr]">
        <div className="animate-rise">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Julius Boamah · UI/UX Designer</p>
          <h1 className="font-display text-5xl font-bold leading-[1.02] md:text-7xl">
            Designing products that feel <span className="text-secondary">obvious</span> to use.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            I design intuitive, thoughtful and human digital experiences — from first sketch to polished interface, with an eye on how it gets built.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className={`${btn} bg-primary text-primary-foreground`}>Explore my work</a>
            <a href={cv.url} target="_blank" rel="noreferrer" download className={`${btn} glass`}>Download my CV</a>
            <a href={`mailto:${EMAIL}`} className={`${btn} text-muted-foreground hover:text-foreground`}>Say hello →</a>
          </div>
        </div>
        <div className="relative animate-rise [animation-delay:.2s]">
          <div className="glass rounded-[2.5rem] p-3">
            <img src={portrait.url} alt="Julius Boamah" className="aspect-[4/5] w-full rounded-[2rem] object-cover" />
          </div>
          <div className="glass absolute -bottom-5 -left-5 rounded-2xl px-4 py-3 text-sm">
            <span className="font-bold">{gallery.length}+</span> <span className="text-muted-foreground">designs · 2× 1st place awards</span>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Selected work</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.t} className={`group glass overflow-hidden rounded-[2rem] transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${i % 3 === 0 ? "md:col-span-2" : ""}`}>
              <button onClick={() => setLb(i)} aria-label={`Open ${p.t}`} className={`block w-full cursor-zoom-in overflow-hidden bg-muted ${i % 3 === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-contain transition duration-700 group-hover:scale-105" />
              </button>
              <div className="flex flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent">{p.c}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold">{p.t}</h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">{p.d}</p>
                  <div className="mt-3 flex gap-2">{p.tags.map((t) => <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{t}</span>)}</div>
                </div>
                <a href={p.f} target="_blank" rel="noreferrer" className={`${btn} shrink-0 bg-foreground text-background`}>View in Figma ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Gallery</h2>
          <a href={BEHANCE} target="_blank" rel="noreferrer" className={`${btn} glass`}>More on Behance ↗</a>
        </div>
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((g, i) => (
            <button key={i} onClick={() => setLb(i)} className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-3xl border border-border bg-muted">
              <img src={g.img} alt={g.t} loading="lazy" className="w-full transition duration-700 group-hover:scale-105" />
              <span className="glass absolute inset-x-3 bottom-3 translate-y-4 rounded-2xl px-4 py-2 text-left text-sm font-bold opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">{g.t} · view ↗</span>
            </button>
          ))}
        </div>
      </section>

      {lb !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl" onClick={() => setLb(null)}>
          <div className="relative max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[lb].img} alt={gallery[lb].t} className="mx-auto max-h-[75vh] rounded-3xl object-contain" />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="font-display text-xl font-bold">{gallery[lb].t}</p>
              <div className="flex gap-2">
                <button onClick={() => setLb((lb - 1 + gallery.length) % gallery.length)} className={`${btn} glass`}>←</button>
                <button onClick={() => setLb((lb + 1) % gallery.length)} className={`${btn} glass`}>→</button>
                <a href={gallery[lb].href} target="_blank" rel="noreferrer" className={`${btn} bg-primary text-primary-foreground`}>Open ↗</a>
                <button onClick={() => setLb(null)} className={`${btn} glass`}>✕</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold md:text-5xl">About</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            I'm Julius, a UI/UX designer and founder of Juma Design & Software Agency in Accra, Ghana. I turn ideas into practical, user-friendly products — from banking and food delivery app concepts to websites for construction, furniture and restaurant brands. I blend design, frontend development and AI to build experiences that help businesses connect with people.
          </p>
          <div className="mt-8 space-y-2">{awards.map((a) => <p key={a} className="text-sm"><span className="text-accent">★</span> {a}</p>)}</div>
        </div>
        <div className="space-y-3">
          {experience.map(([y, r, d]) => (
            <div key={r} className="glass rounded-2xl p-5 transition hover:translate-x-1">
              <p className="text-xs text-accent">{y}</p>
              <p className="mt-1 font-bold">{r}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Skills</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.h} className="glass rounded-3xl p-6">
              <p className="font-display text-lg font-bold">{g.h}</p>
              <div className="mt-4 flex flex-wrap gap-2">{g.s.map((s) => <span key={s} className="rounded-full border border-border px-4 py-1.5 text-sm transition hover:border-primary hover:bg-primary hover:text-primary-foreground">{s}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="glass rounded-[2.5rem] p-10 text-center md:p-16">
          <h2 className="font-display text-4xl font-bold md:text-6xl">Let's build something good.</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">Open to UI/UX roles, internships, freelance work and collaborations.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${EMAIL}`} className={`${btn} bg-primary text-primary-foreground`}>{EMAIL}</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className={`${btn} glass`}>LinkedIn ↗</a>
            <a href={BEHANCE} target="_blank" rel="noreferrer" className={`${btn} glass`}>Behance ↗</a>
            <a href={cv.url} target="_blank" rel="noreferrer" className={`${btn} glass`}>CV ↗</a>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Julius Boamah · Accra, Ghana</p>
      </section>
    </div>
  );
}
