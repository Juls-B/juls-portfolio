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
const nav = ["Home", "Work", "About", "Skills", "Contact"];
const skills = ["User research", "Wireframing", "Prototyping", "Visual design", "Design systems", "Mobile UI", "Figma", "Frontend basics"];
const btn = "inline-flex items-center rounded-full px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5";

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background bg-glow font-sans">
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3">
          <a href="#home" className="font-display font-bold">JB<span className="text-primary">.</span></a>
          <div className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-foreground">{n}</a>)}
          </div>
          <a href="#contact" className="hidden rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground md:inline">Get CV</a>
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
            <a href="#contact" className={`${btn} glass`}>Download my CV</a>
          </div>
        </div>
        <div className="relative animate-rise [animation-delay:.2s]">
          <div className="glass rounded-[2.5rem] p-3">
            <img src={portrait.url} alt="Julius Boamah" className="aspect-[4/5] w-full rounded-[2rem] object-cover" />
          </div>
          <div className="glass absolute -bottom-5 -left-5 rounded-2xl px-4 py-3 text-sm">
            <span className="font-bold">7</span> <span className="text-muted-foreground">design projects below ↓</span>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Selected work</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.t} className={`group glass overflow-hidden rounded-[2rem] ${i % 3 === 0 ? "md:col-span-2" : ""}`}>
              <div className={`overflow-hidden bg-muted ${i % 3 === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
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

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <h2 className="font-display text-4xl font-bold md:text-5xl">About</h2>
        <p className="text-lg text-muted-foreground">
          I'm Julius, a UI/UX designer based in Ghana. I care about clarity, hierarchy and the small details that make an interface feel effortless. I'm also interested in frontend development and how design decisions translate into real products.
        </p>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Skills</h2>
        <div className="mt-8 flex flex-wrap gap-3">{skills.map((s) => <span key={s} className="glass rounded-full px-5 py-2">{s}</span>)}</div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="glass rounded-[2.5rem] p-10 text-center md:p-16">
          <h2 className="font-display text-4xl font-bold md:text-6xl">Let's build something good.</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">Open to UI/UX roles, internships, freelance work and collaborations.</p>
          <a href="mailto:" className={`${btn} mt-8 bg-primary text-primary-foreground`}>Email me</a>
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Julius Boamah</p>
      </section>
    </div>
  );
}
