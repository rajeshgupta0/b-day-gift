import { jsxs, jsx } from "react/jsx-runtime";
import { useRouter, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";
import { S as StarField } from "./StarField-bndSkTe8.js";
import { R as Route } from "./router-Fn4qV9Zl.js";
import "react";
import "@tanstack/react-query";
function MemoryDetail() {
  const {
    photo,
    similar
  } = Route.useLoaderData();
  const router = useRouter();
  const handleBack = (e) => {
    e.preventDefault();
    if (window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({
        to: "/",
        hash: "gallery"
      });
    }
  };
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen overflow-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(StarField, {}),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-60" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-neon-purple/25 blur-[160px]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-6 py-12", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", onClick: handleBack, className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:text-foreground", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back one step"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid items-center gap-12 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.92,
          rotate: -2
        }, animate: {
          opacity: 1,
          scale: 1,
          rotate: 0
        }, transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1]
        }, className: "relative mx-auto w-full max-w-md rounded-3xl bg-white/95 p-3 pb-12 shadow-cinema", children: [
          /* @__PURE__ */ jsx("img", { src: photo.src, alt: photo.title, className: "aspect-[4/5] w-full rounded-2xl object-cover" }),
          /* @__PURE__ */ jsx("p", { className: "absolute bottom-3 left-0 right-0 text-center font-hand text-2xl text-neutral-700", children: photo.title })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.9,
          delay: 0.15
        }, children: [
          /* @__PURE__ */ jsxs("p", { className: "mb-3 text-xs uppercase tracking-[0.4em] text-neon-cyan", children: [
            "Memory · ",
            photo.mood
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl leading-tight md:text-6xl", children: /* @__PURE__ */ jsx("span", { className: "text-aurora", children: photo.title }) }),
          /* @__PURE__ */ jsxs("p", { className: "mt-6 font-hand text-2xl leading-snug text-foreground/90", children: [
            '"',
            photo.tagline,
            '"'
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-muted-foreground", children: "Some frames you don't just look at — you fall back into them. This is one of those. A breath, a glance, a forever-second pinned to the inside of our story." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-neon-pink/15 px-4 py-2 text-xs uppercase tracking-widest text-neon-pink", children: [
              /* @__PURE__ */ jsx(Heart, { className: "h-3.5 w-3.5" }),
              " Kept forever"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-neon-cyan" }),
              " ",
              photo.mood
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.aside, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8
      }, className: "relative mt-20 overflow-hidden rounded-3xl glass-strong p-8 md:p-12", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-neon-purple/30 blur-[120px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-neon-pink/25 blur-[120px]" }),
        /* @__PURE__ */ jsxs("div", { className: "relative grid items-center gap-8 md:grid-cols-[1fr_auto]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "mb-2 text-[10px] uppercase tracking-[0.4em] text-neon-cyan", children: "From the Memory Atelier" }),
            /* @__PURE__ */ jsxs("h3", { className: "font-display text-3xl md:text-4xl", children: [
              "Print this moment in ",
              /* @__PURE__ */ jsx("span", { className: "text-aurora", children: "museum quality" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "mt-3 max-w-xl text-muted-foreground", children: [
              "Turn “",
              photo.title,
              "” into a hand-framed giclée, an aurora-foil postcard, or a velvet-bound mini album. Made slow, on demand — because some memories deserve a body."
            ] })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#", onClick: (e) => e.preventDefault(), className: "group inline-flex items-center justify-center rounded-full bg-aurora px-8 py-4 text-sm font-medium uppercase tracking-widest text-white shadow-cinema transition hover:scale-105", children: "Order a print →" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-end justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "mb-2 text-xs uppercase tracking-[0.4em] text-neon-cyan", children: "More like this" }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl", children: "Moments cut from the same light" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/", hash: "gallery", className: "hidden text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground md:block", children: "View all →" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7", children: similar.map((s, i) => /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-40px"
        }, transition: {
          delay: i * 0.06,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1]
        }, children: /* @__PURE__ */ jsxs(Link, { to: "/gallery/$id", params: {
          id: s.id
        }, className: "group block overflow-hidden rounded-2xl bg-white/95 p-2 pb-6 shadow-cinema transition hover:-translate-y-1", children: [
          /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx("img", { src: s.src, alt: s.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-center font-hand text-lg text-neutral-800", children: s.title })
        ] }) }, s.id)) })
      ] })
    ] })
  ] });
}
export {
  MemoryDetail as component
};
