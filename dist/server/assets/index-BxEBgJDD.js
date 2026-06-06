import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from "framer-motion";
import { S as StarField } from "./StarField-bndSkTe8.js";
import { m as m1, a as m15, b as memory7, c as m8, d as m9, e as m11, p as photos, f as m8$1 } from "./router-Fn4qV9Zl.js";
import { Music2, Pause, Play, SkipForward, VolumeX, Volume2, ChevronRight, Sparkles } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
const lines = [
  "Initializing memories...",
  "Scanning beautiful moments...",
  "Loading friendship timeline...",
  "Happiness level detected ❤",
  "Core memories synced successfully"
];
function LoadingIntro({ onDone }) {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (step >= lines.length) {
      const t = setTimeout(() => setDone(true), 700);
      return () => clearTimeout(t);
    }
    const target = lines[step];
    setTyped("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(id);
        setTimeout(() => setStep((s) => s + 1), 550);
      }
    }, 32);
    return () => clearInterval(id);
  }, [step]);
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(onDone, 900);
    return () => clearTimeout(t);
  }, [done, onDone]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, scale: 1.06 },
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      className: "fixed inset-0 z-[100] grid place-items-center bg-background grain",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero" }),
        /* @__PURE__ */ jsx(StarField, { density: 0.7 }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-[min(620px,90vw)] text-center", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "mb-10 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground",
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block h-2 w-2 animate-pulse rounded-full bg-neon-pink" }),
                "memory.os v1.0"
              ]
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl text-aurora md:text-5xl", children: "A digital universe is being born..." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 space-y-2 text-left", children: [
            lines.slice(0, step).map((l, i) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -8 },
                animate: { opacity: 0.7, x: 0 },
                className: "font-mono text-xs text-neon-cyan md:text-sm",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-neon-purple", children: "[ok]" }),
                  " ",
                  l
                ]
              },
              i
            )),
            step < lines.length && /* @__PURE__ */ jsxs("div", { className: "font-mono text-xs text-foreground md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "text-neon-pink", children: ">" }),
              " ",
              typed,
              /* @__PURE__ */ jsx("span", { className: "ml-0.5 inline-block h-3 w-2 -translate-y-[1px] bg-neon-pink align-middle", style: { animation: "blink-caret 0.9s steps(1) infinite" } })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-10 h-[2px] w-full overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "h-full bg-aurora",
              initial: { width: "0%" },
              animate: { width: `${(step + 1) / lines.length * 100}%` },
              transition: { duration: 0.6, ease: "easeOut" }
            }
          ) })
        ] })
      ]
    },
    "intro"
  ) });
}
const MemoryFragment = ({ delay, x, y }) => /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0, scale: 0, x: 0, y: 0 },
    animate: {
      opacity: [0, 0.15, 0.08, 0],
      scale: [0, 1, 0.8, 0],
      x: [0, x],
      y: [0, y],
      rotate: [0, Math.random() * 360]
    },
    transition: {
      duration: 15 + Math.random() * 10,
      delay,
      repeat: Infinity,
      ease: "linear"
    },
    className: "absolute rounded-lg overflow-hidden backdrop-blur-sm",
    style: {
      width: 60 + Math.random() * 80,
      height: 70 + Math.random() * 100,
      background: `linear-gradient(135deg, rgba(255,77,141,0.15), rgba(168,85,247,0.1))`,
      border: "1px solid rgba(255,255,255,0.1)"
    }
  }
);
const ShootingStar = ({ delay }) => /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { x: "-20%", y: "-20%", opacity: 0 },
    animate: {
      x: ["-20%", "120%"],
      y: ["-20%", "80%"],
      opacity: [0, 1, 0.8, 0]
    },
    transition: {
      duration: 2.5,
      delay,
      repeat: Infinity,
      repeatDelay: 8 + Math.random() * 5,
      ease: "linear"
    },
    className: "absolute",
    style: {
      width: 2,
      height: 2,
      background: "white",
      boxShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,77,141,0.6)"
    },
    children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute -left-[80px] top-0 h-[2px] w-[80px]",
        style: {
          background: "linear-gradient(90deg, transparent, white, rgba(255,77,141,0.6))"
        }
      }
    )
  }
);
const messages = [
  "Every memory became a favorite story.",
  "The best moments always included you.",
  "Some people become memories. You became a whole chapter.",
  "Life gave me moments. You made them unforgettable.",
  "Every laugh, every late night, every heartbeat."
];
function Hero() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showName, setShowName] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-2, 2]);
  useTransform(springX, [-0.5, 0.5], [-20, 20]);
  useTransform(springY, [-0.5, 0.5], [-15, 15]);
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 4e3);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const timer1 = setTimeout(() => setShowName(true), 2200);
    const timer2 = setTimeout(() => setShowHeart(true), 2800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    }
  };
  const handleBeginJourney = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
      setIsTransitioning(false);
    }, 1200);
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: heroRef,
      onMouseMove: handleMouseMove,
      className: "relative isolate min-h-screen overflow-hidden bg-[#0A0A0F]",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: [...Array(200)].map((_, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute rounded-full bg-white",
            style: {
              width: 1 + Math.random() * 2,
              height: 1 + Math.random() * 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.5
            },
            animate: {
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            },
            transition: {
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }
          },
          `star-${i}`
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute -left-[20%] -top-[20%] h-[140%] w-[140%] rounded-full bg-[#FF4D8D] opacity-15 blur-[120px]",
              animate: {
                x: ["0%", "10%", "-5%", "0%"],
                y: ["0%", "-5%", "10%", "0%"],
                scale: [1, 1.1, 0.95, 1]
              },
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute -bottom-[20%] -right-[20%] h-[140%] w-[140%] rounded-full bg-[#A855F7] opacity-15 blur-[120px]",
              animate: {
                x: ["0%", "-10%", "5%", "0%"],
                y: ["0%", "10%", "-5%", "0%"],
                scale: [1, 0.9, 1.1, 1]
              },
              transition: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute left-[30%] top-[40%] h-[80%] w-[80%] rounded-full bg-[#67E8F9] opacity-10 blur-[100px]",
              animate: {
                scale: [1, 1.2, 0.8, 1],
                opacity: [0.1, 0.15, 0.08, 0.1]
              },
              transition: {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [...Array(80)].map((_, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute rounded-full",
            style: {
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
              background: `hsla(${260 + Math.random() * 100}, 80%, 70%, ${0.2 + Math.random() * 0.5})`,
              boxShadow: `0 0 ${5 + Math.random() * 15}px hsla(${260 + Math.random() * 100}, 80%, 70%, 0.3)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            },
            animate: {
              y: [0, -30 - Math.random() * 50],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            },
            transition: {
              duration: 5 + Math.random() * 7,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }
          },
          `particle-${i}`
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-[#0A0A0F]/50 via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "pointer-events-none absolute h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#FF4D8D]/20 via-[#A855F7]/20 to-transparent blur-[80px]",
            style: {
              left: useTransform(springX, [-0.5, 0.5], ["30%", "70%"]),
              top: useTransform(springY, [-0.5, 0.5], ["20%", "60%"])
            }
          }
        ),
        [...Array(4)].map((_, i) => /* @__PURE__ */ jsx(ShootingStar, { delay: i * 3 }, `shooting-${i}`)),
        [...Array(12)].map((_, i) => /* @__PURE__ */ jsx(
          MemoryFragment,
          {
            delay: i * 1.5,
            x: (Math.random() - 0.5) * 300,
            y: (Math.random() - 0.5) * 200
          },
          `memory-${i}`
        )),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [...Array(25)].map((_, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute rounded-full bg-white/5",
            style: {
              width: 30 + Math.random() * 80,
              height: 30 + Math.random() * 80,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            },
            animate: {
              scale: [1, 1.5, 1],
              opacity: [0.03, 0.08, 0.03]
            },
            transition: {
              duration: 8 + Math.random() * 7,
              repeat: Infinity,
              delay: Math.random() * 10
            }
          },
          `bokeh-${i}`
        )) }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            ref: containerRef,
            style: {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            },
            className: "relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    transition: { duration: 1, ease: "easeOut" },
                    className: "mb-8",
                    children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-2xl", children: [
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          className: "h-1.5 w-1.5 rounded-full bg-[#FF4D8D]",
                          animate: { scale: [1, 1.8, 1] },
                          transition: { duration: 1.5, repeat: Infinity }
                        }
                      ),
                      /* @__PURE__ */ jsx("span", { className: "text-[11px] font-light uppercase tracking-[0.3em] text-white/50", children: "A Celebration of Memories" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.95 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                    className: "overflow-hidden",
                    children: /* @__PURE__ */ jsx("h1", { className: "text-5xl font-light tracking-tight text-white/80 md:text-7xl lg:text-8xl", children: "Happy Birthday" })
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 40, scale: 0.9 },
                    animate: showName ? { opacity: 1, y: 0, scale: 1 } : {},
                    transition: { duration: 1.2, type: "spring", stiffness: 80 },
                    className: "relative mt-4",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            initial: { scale: 0.8, opacity: 0 },
                            animate: showName ? { scale: 1, opacity: 0.3 } : {},
                            transition: { delay: 0.3, duration: 1 },
                            className: "absolute inset-0 blur-3xl",
                            style: {
                              background: "radial-gradient(circle, rgba(255,77,141,0.3), rgba(168,85,247,0.2))"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsx("h2", { className: "relative text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#FF4D8D] via-[#A855F7] to-[#67E8F9] bg-clip-text text-transparent", children: "ANKIT VERMA" }) })
                      ] }),
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          initial: { width: 0, opacity: 0 },
                          animate: showName ? { width: "100%", opacity: 1 } : {},
                          transition: { delay: 0.8, duration: 1 },
                          className: "mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-[#FF4D8D] to-transparent"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(AnimatePresence, { children: showHeart && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { scale: 0, rotate: -30, opacity: 0 },
                    animate: { scale: 1, rotate: 0, opacity: 1 },
                    transition: { type: "spring", stiffness: 200, delay: 0.2 },
                    className: "mt-6",
                    children: /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        className: "inline-block text-4xl md:text-5xl",
                        animate: { scale: [1, 1.2, 1] },
                        transition: { duration: 1.5, repeat: Infinity },
                        style: {
                          filter: "drop-shadow(0 0 20px #FF4D8D)"
                        },
                        children: "❤"
                      }
                    )
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "relative mt-12 h-20", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.8 },
                  className: "text-center text-base font-light italic text-white/40 md:text-xl",
                  children: messages[messageIndex]
                },
                messageIndex
              ) }) }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 3.2, duration: 0.8 },
                  className: "mt-12",
                  children: /* @__PURE__ */ jsxs(
                    motion.button,
                    {
                      onClick: handleBeginJourney,
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.98 },
                      className: "group relative overflow-hidden rounded-full px-8 py-3.5 md:px-10 md:py-4",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#FF4D8D] via-[#A855F7] to-[#67E8F9]" }),
                        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-[#FF4D8D] via-[#A855F7] to-[#67E8F9] blur-xl" }) }),
                        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent" }) }),
                        /* @__PURE__ */ jsx("span", { className: "relative text-sm font-medium uppercase tracking-[0.2em] text-white md:text-base", children: "Begin the Journey" })
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 3.8, duration: 1 },
                  className: "absolute bottom-12 left-1/2 -translate-x-1/2",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3", children: [
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        animate: { y: [0, 8, 0] },
                        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        className: "relative",
                        children: /* @__PURE__ */ jsxs("svg", { width: "26", height: "40", viewBox: "0 0 26 40", fill: "none", className: "text-white/30", children: [
                          /* @__PURE__ */ jsx("rect", { x: "1", y: "1", width: "24", height: "38", rx: "12", stroke: "currentColor", strokeWidth: "1.5" }),
                          /* @__PURE__ */ jsx(
                            motion.circle,
                            {
                              cx: "13",
                              cy: "12",
                              r: "2",
                              fill: "currentColor",
                              animate: { y: [0, 16, 0] },
                              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }
                          )
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [...Array(3)].map((_, i) => /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "h-1 w-1 rounded-full bg-white/30",
                        animate: {
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.5, 1]
                        },
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }
                      },
                      i
                    )) })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isTransitioning && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.5 },
            transition: { duration: 0.6 },
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl",
            children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                animate: { scale: [1, 1.5, 0], opacity: [1, 0.5, 0] },
                transition: { duration: 1.2 },
                className: "relative",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-[#FF4D8D] via-[#A855F7] to-[#67E8F9] blur-3xl" }),
                  /* @__PURE__ */ jsx("div", { className: "relative text-4xl md:text-6xl", children: "✨" })
                ]
              }
            )
          }
        ) })
      ]
    }
  );
}
const m7 = "/assets/img7-C6kmq9Fu.jpg";
const m6 = "/assets/img6-DzarM5xU.jpg";
const m3$1 = "/assets/img3-C-Pev1r9.jpg";
const img61 = "/assets/img6.1-YhjKNZID.jpg";
const memories = [
  {
    id: 1,
    timeLabel: "First Day",
    locationLabel: "Gargi Hostel",
    momentText: "Two strangers. One room. Everything changed.",
    img: m1,
    colorStart: "#FF4D8D",
    colorEnd: "#FBBF24"
  },
  {
    id: 2,
    timeLabel: "26th January",
    locationLabel: "KNIT Campus",
    momentText: "Tiranga. Friends. A feeling of belonging.",
    img: img61,
    colorStart: "#67E8F9",
    colorEnd: "#A855F7"
  },
  {
    id: 3,
    timeLabel: "Youth Day",
    locationLabel: "KNIT Auditorium",
    momentText: "You on stage. Me in the crowd. Proud doesn't cover it.",
    img: m6,
    colorStart: "#A855F7",
    colorEnd: "#FF4D8D"
  },
  {
    id: 4,
    timeLabel: "Industrial Visit",
    locationLabel: "Korwa Factory",
    momentText: "Learning nothing. Creating everything. Memories.",
    img: m7,
    colorStart: "#FBBF24",
    colorEnd: "#67E8F9"
  },
  {
    id: 5,
    timeLabel: "Night Walk",
    locationLabel: "Somewhere Loud",
    momentText: "The night music felt like time travel.",
    img: m3$1,
    colorStart: "#FF4D8D",
    colorEnd: "#A855F7"
  },
  {
    id: 6,
    timeLabel: "Hackathon Time",
    locationLabel: "Lucknow Streets",
    momentText: "Hungry. Tired. Chasing dreams anyway.",
    img: m15,
    colorStart: "#67E8F9",
    colorEnd: "#FF4D8D"
  },
  {
    id: 7,
    timeLabel: "The Return",
    locationLabel: "KNIT Fest",
    momentText: "Same campus. Different year. Same laughter.",
    img: memory7,
    colorStart: "#FBBF24",
    colorEnd: "#FF4D8D"
  }
];
function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: containerRef,
      className: "relative min-h-screen overflow-hidden bg-[#0B1020]",
      children: [
        /* @__PURE__ */ jsx(AuroraBackground, { scrollY: scrollYProgress }),
        /* @__PURE__ */ jsx(FloatingParticles, {}),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-28 md:py-40", children: [
          /* @__PURE__ */ jsx(CinematicHeader, {}),
          /* @__PURE__ */ jsxs("div", { className: "relative mt-28", children: [
            /* @__PURE__ */ jsx(ProgressLine, { scrollYProgress }),
            /* @__PURE__ */ jsx("div", { className: "space-y-40 md:space-y-56", children: memories.map((memory, index) => /* @__PURE__ */ jsx(
              MemoryCard,
              {
                memory,
                index
              },
              memory.id
            )) })
          ] }),
          /* @__PURE__ */ jsx(EndingCard, {})
        ] })
      ]
    }
  );
}
function AuroraBackground({ scrollY }) {
  const y = useTransform(scrollY, [0, 1], [0, 100]);
  return /* @__PURE__ */ jsxs(motion.div, { className: "absolute inset-0 overflow-hidden", style: { y }, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#0B1020] via-[#1a1030] to-[#0B1020]" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-[#FF4D8D] opacity-15 blur-[150px]",
        animate: {
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0]
        },
        transition: { duration: 20, repeat: Infinity, ease: "linear" }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-[#A855F7] opacity-15 blur-[150px]",
        animate: {
          x: [0, -80, 120, 0],
          y: [0, 80, -40, 0]
        },
        transition: { duration: 25, repeat: Infinity, ease: "linear", delay: 2 }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#67E8F9] opacity-10 blur-[150px]",
        animate: {
          scale: [1, 1.3, 0.9, 1]
        },
        transition: { duration: 15, repeat: Infinity, ease: "linear" }
      }
    )
  ] });
}
function FloatingParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    left: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 8,
    opacity: Math.random() * 0.3
  }));
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: particles.map((particle) => /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "absolute rounded-full bg-white/20",
      style: {
        width: particle.size,
        height: particle.size,
        left: `${particle.left}%`,
        opacity: particle.opacity
      },
      animate: {
        y: ["100vh", "-10vh"],
        x: [`${Math.random() * 60 - 30}px`, `${Math.random() * 60 - 30}px`]
      },
      transition: {
        duration: particle.duration,
        repeat: Infinity,
        delay: particle.delay,
        ease: "linear"
      }
    },
    particle.id
  )) });
}
function CinematicHeader() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
      className: "text-center mb-24",
      children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { delay: 0.2, duration: 0.6 },
            className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xl mb-6",
            children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "h-1.5 w-1.5 rounded-full bg-[#FF4D8D]",
                  animate: { scale: [1, 1.5, 1] },
                  transition: { duration: 1.5, repeat: Infinity }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium uppercase tracking-[0.3em] text-white/50", children: "Memories" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-light tracking-tight", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent", children: "Frozen in Time" }) }),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { delay: 0.5 },
            className: "mt-5 text-white/30 text-xs tracking-[0.2em] uppercase",
            children: "Scroll slowly. Let each moment breathe."
          }
        )
      ]
    }
  );
}
function ProgressLine({ scrollYProgress }) {
  const lineHeight = useTransform(scrollYProgress, [0, 0.7, 0.9], ["0%", "70%", "100%"]);
  return /* @__PURE__ */ jsxs("div", { className: "absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute bottom-0 left-0 w-full origin-bottom bg-gradient-to-t from-[#FF4D8D] via-[#A855F7] to-[#67E8F9]",
        style: { height: lineHeight }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute bottom-0 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full blur-2xl",
        style: {
          background: "radial-gradient(circle, rgba(255,77,141,0.3) 0%, transparent 70%)",
          bottom: `calc(${lineHeight} - 30px)`
        }
      }
    )
  ] });
}
function MemoryCard({ memory, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [imageOffset, setImageOffset] = useState({ x: 0, y: 0 });
  const isEven = index % 2 === 0;
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 25);
    setRotateY((centerX - x) / 25);
    setImageOffset({ x: (x - centerX) / 40, y: (y - centerY) / 40 });
  };
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setImageOffset({ x: 0, y: 0 });
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref: cardRef,
      initial: { opacity: 0, x: isEven ? -60 : 60, y: 40, rotate: isEven ? -2 : 2 },
      animate: isInView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {},
      transition: { duration: 0.8, delay: index * 0.12, type: "spring", stiffness: 80 },
      style: { transformStyle: "preserve-3d" },
      children: /* @__PURE__ */ jsxs("div", { className: `relative flex flex-col gap-6 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} lg:gap-10`, children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "relative group",
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave,
            style: {
              transformStyle: "preserve-3d",
              transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            },
            whileHover: { scale: 1.01 },
            transition: { type: "spring", stiffness: 400, damping: 25 },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none",
                  style: {
                    background: `linear-gradient(135deg, ${memory.colorStart}, ${memory.colorEnd})`,
                    filter: "blur(15px)"
                  }
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl bg-white/[0.02] backdrop-blur-md border border-white/5 overflow-hidden", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      style: { x: imageOffset.x, y: imageOffset.y },
                      transition: { type: "spring", stiffness: 200, damping: 25 },
                      className: "h-full w-full",
                      children: /* @__PURE__ */ jsx(
                        motion.img,
                        {
                          src: memory.img,
                          alt: "",
                          className: "h-full w-full object-cover",
                          whileHover: { scale: 1.08 },
                          transition: { duration: 0.5 }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "text-xs font-medium tracking-wider text-white/50",
                        style: { letterSpacing: "0.15em" },
                        children: memory.locationLabel
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "text-2xl md:text-3xl font-light text-white tracking-tight", children: memory.timeLabel })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r",
                      style: { background: `linear-gradient(90deg, ${memory.colorStart}, ${memory.colorEnd})` },
                      initial: { width: 0 },
                      animate: isInView ? { width: "100%" } : {},
                      transition: { duration: 0.7, delay: index * 0.1 }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "p-6 md:p-7",
                    initial: { opacity: 0, y: 20 },
                    animate: isInView ? { opacity: 1, y: 0 } : {},
                    transition: { delay: index * 0.1 + 0.3 },
                    children: [
                      /* @__PURE__ */ jsx("p", { className: "text-white/70 text-sm md:text-base italic font-light leading-relaxed", children: memory.momentText }),
                      /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          className: "mt-4 flex items-center gap-2",
                          initial: { opacity: 0 },
                          animate: isInView ? { opacity: 1 } : {},
                          transition: { delay: index * 0.1 + 0.4 },
                          children: [
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: "h-px w-8 bg-gradient-to-r",
                                style: { background: `linear-gradient(90deg, ${memory.colorStart}, transparent)` }
                              }
                            ),
                            /* @__PURE__ */ jsxs("span", { className: "text-[10px] tracking-[0.2em] text-white/25 uppercase", children: [
                              "Memory ",
                              String(index + 1).padStart(2, "0")
                            ] })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:flex lg:w-16 lg:items-center lg:justify-center", children: /* @__PURE__ */ jsx(HeartNode, { isInView, delay: index * 0.1, colorStart: memory.colorStart, colorEnd: memory.colorEnd }) }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 hidden lg:block" })
      ] })
    }
  );
}
function HeartNode({ isInView, delay, colorStart, colorEnd }) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { scale: 0, opacity: 0 },
      animate: isInView ? { scale: 1, opacity: 1 } : {},
      transition: { delay, type: "spring", stiffness: 200 },
      className: "relative",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 rounded-full",
            style: { background: `radial-gradient(circle, ${colorStart}, ${colorEnd})` },
            animate: { scale: [1, 2, 1], opacity: [0.4, 0, 0.4] },
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "relative h-4 w-4",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              /* @__PURE__ */ jsx(
                motion.path,
                {
                  d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                  fill: `url(#heartGrad-${colorStart})`,
                  stroke: "white",
                  strokeWidth: "1.2",
                  strokeOpacity: "0.5",
                  initial: { scale: 0.8 },
                  animate: { scale: [0.8, 1.1, 0.8] },
                  transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }
              ),
              /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: `heartGrad-${colorStart}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: colorStart }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: colorEnd })
              ] }) })
            ]
          }
        )
      ]
    }
  );
}
function EndingCard() {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
      className: "mt-48 text-center",
      children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative py-12", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { scale: 0 },
              whileInView: { scale: 1 },
              transition: { delay: 0.2, type: "spring" },
              className: "inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6",
              children: /* @__PURE__ */ jsx("span", { className: "text-xl", children: "∞" })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { delay: 0.4 },
              className: "text-white/30 text-xs tracking-[0.3em] uppercase mb-3",
              children: "The story continues"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { delay: 0.6 },
              className: "text-white/50 text-sm italic font-light",
              children: "Some chapters don't have an ending."
            }
          )
        ] })
      ] })
    }
  );
}
const m2 = "/assets/img2-Dk0MAj79.jpg";
const m4 = "/assets/img4-BoGmuw4-.jpg";
const m5$1 = "/assets/img5-Z53xRiAp.jpg";
const m5 = "/assets/img10-BXBOaKih.jpg";
const m12 = "/assets/img12-DuArueSj.jpg";
const m13 = "/assets/img13-QOt_NLZK.jpg";
const m14 = "/assets/img14-CpY_UVYr.JPG";
const m16 = "/assets/img16-B1sNgdaI.jpg";
const m17 = "/assets/img17-BRx_PMR5.jpg";
const m18 = "/assets/img18-B4tDlKH6.jpg";
const m19 = "/assets/img19-ByPlmQsT.jpg";
const stars = [
  { img: m1, timeLabel: "First Day", locationLabel: "Gargi Hostel", momentText: "Two strangers. One room. Everything changed.", color: "#FF4D8D" },
  { img: m2, timeLabel: "Morning Walk", locationLabel: "KNIT Campus", momentText: "The first time we skipped class together.", color: "#67E8F9" },
  { img: m3$1, timeLabel: "New Year's Eve", locationLabel: "Somewhere Loud", momentText: "The night music felt like time travel.", color: "#FBBF24" },
  { img: m4, timeLabel: "2 AM", locationLabel: "College Streets", momentText: "Exploring campus when the world was asleep.", color: "#A855F7" },
  { img: m5$1, timeLabel: "Temple Morning", locationLabel: "Old City", momentText: "Peace found us when we weren't looking.", color: "#FF4D8D" },
  { img: m6, timeLabel: "Navratri Night", locationLabel: "Sultanpur", momentText: "Stole away. Came back with stories.", color: "#FBBF24" },
  { img: m7, timeLabel: "Youth Day", locationLabel: "KNIT Auditorium", momentText: "You on stage. Me in the crowd. Proud doesn't cover it.", color: "#67E8F9" },
  { img: m8, timeLabel: "Industrial Visit", locationLabel: "Korwa Factory", momentText: "Learning nothing. Creating everything. Memories.", color: "#A855F7" },
  { img: m9, timeLabel: "Study Session", locationLabel: "Our Room", momentText: "Pretended to study. Actually just laughed.", color: "#FF4D8D" },
  { img: m5, timeLabel: "Last Day", locationLabel: "Hostel", momentText: "One door closed. But nothing really ended.", color: "#67E8F9" },
  { img: m11, timeLabel: "Chill Evening", locationLabel: "Our Room", momentText: "No plans. No worries. Just us.", color: "#FBBF24" },
  { img: m12, timeLabel: "Counseling Day", locationLabel: "KNIT", momentText: "Second year started. So did new dreams.", color: "#A855F7" },
  { img: m13, timeLabel: "Dandiya Night", locationLabel: "College Ground", momentText: "Colors. Chaos. Laughter that wouldn't stop.", color: "#FF4D8D" },
  { img: m14, timeLabel: "Birthday Surprise", locationLabel: "Rent Room", momentText: "Seniors. Cake. A night to remember.", color: "#67E8F9" },
  { img: m15, timeLabel: "2 AM", locationLabel: "Lucknow Streets", momentText: "Hungry. Tired. Chasing dreams anyway.", color: "#FBBF24" },
  { img: m16, timeLabel: "Yoga Morning", locationLabel: "College Lawn", momentText: "Found peace. Then found chai.", color: "#A855F7" },
  { img: m17, timeLabel: "Teachers' Day", locationLabel: "RECP Campus", momentText: "New campus. Same old us.", color: "#FF4D8D" },
  { img: m18, timeLabel: "Vishwakarma Pooja", locationLabel: "Workshop", momentText: "Blessings for new beginnings.", color: "#67E8F9" },
  { img: m19, timeLabel: "The Return", locationLabel: "KNIT Fest", momentText: "Same campus. Different year. Same laughter.", color: "#FBBF24" }
];
function MemoryGalaxy() {
  const [open, setOpen] = useState(null);
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hoveredStar, setHoveredStar] = useState(null);
  const positions = useMemo(
    () => stars.map((_, i) => {
      const angle = i / stars.length * Math.PI * 2 * 2.5;
      const r = 25 + i / stars.length * 45;
      return {
        x: 50 + Math.cos(angle) * r * (1 - i / stars.length * 0.2),
        y: 50 + Math.sin(angle) * r * 0.65 * (1 - i / stars.length * 0.15),
        delay: i * 0.1,
        size: 12 + i * 11 % 9,
        depth: 0.3 + i / stars.length * 0.5
      };
    }),
    []
  );
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let raf = 0;
    const update = (clientX, clientY) => {
      const r = el.getBoundingClientRect();
      const x = (clientX - r.left) / r.width * 2 - 1;
      const y = (clientY - r.top) / r.height * 2 - 1;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(
        () => setMouse({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) })
      );
    };
    const onMouse = (e) => update(e.clientX, e.clientY);
    const onTouch = (e) => {
      if (e.touches[0]) update(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onLeave = () => setMouse({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMouse);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchmove", onTouch, { passive: true });
    el.addEventListener("touchend", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMouse);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchmove", onTouch);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#0B1020] via-[#1a1030] to-[#0B1020] py-28 md:py-36", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-[#FF4D8D] opacity-15 blur-[150px] animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-[#A855F7] opacity-15 blur-[150px] animate-pulse delay-1000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#67E8F9] opacity-10 blur-[150px] animate-pulse delay-2000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-5", style: {
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 1px)`,
        backgroundSize: "40px 40px"
      } })
    ] }),
    /* @__PURE__ */ jsx(StarField, { density: 1.6 }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: [...Array(30)].map((_, i) => {
      const size = 2 + Math.random() * 4;
      const left = Math.random() * 100;
      const duration = 12 + Math.random() * 20;
      const delay = -Math.random() * duration;
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute rounded-full bg-white/10",
          style: {
            left: `${left}%`,
            width: size,
            height: size,
            animation: `floatUp ${duration}s linear ${delay}s infinite`
          }
        },
        i
      );
    }) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FF4D8D]/20 to-[#A855F7]/20 blur-[160px]",
        animate: { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] },
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        style: { transform: `translate(calc(-50% + ${mouse.x * -15}px), calc(-50% + ${mouse.y * -15}px))` }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-6 text-center z-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xl mb-6", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "h-1.5 w-1.5 rounded-full bg-[#FF4D8D]",
                  animate: { scale: [1, 1.5, 1] },
                  transition: { duration: 1.5, repeat: Infinity }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium uppercase tracking-[0.3em] text-white/40", children: "Chapter 02" })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent", children: "Memory Galaxy" }) }),
            /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-white/30 text-xs tracking-[0.2em] uppercase", children: "Move your cursor through the stars. Tap one — relive the moment." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref: containerRef,
          className: "relative mx-auto mt-16 md:mt-20 aspect-square w-[min(800px,90vw)] [perspective:1500px] touch-none",
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FF4D8D]/40 to-[#A855F7]/40 blur-[60px]",
                animate: { scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] },
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
            ),
            positions.map((p, i) => {
              const px = mouse.x * 35 * p.depth;
              const py = mouse.y * 35 * p.depth;
              const pz = p.depth * 50;
              const star = stars[i];
              const isHovered = hoveredStar === i;
              return /* @__PURE__ */ jsxs(
                motion.button,
                {
                  initial: { opacity: 0, scale: 0 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true },
                  transition: { delay: p.delay, type: "spring", stiffness: 100, damping: 12 },
                  onClick: () => setOpen(i),
                  onMouseEnter: () => setHoveredStar(i),
                  onMouseLeave: () => setHoveredStar(null),
                  className: "group absolute -translate-x-1/2 -translate-y-1/2 will-change-transform",
                  style: {
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    transform: `translate3d(calc(-50% + ${px}px), calc(-50% + ${py}px), ${pz}px)`,
                    transition: "transform 800ms cubic-bezier(0.22, 1, 0.36, 1)"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "absolute inset-0 rounded-full blur-xl",
                        style: { background: star.color },
                        animate: { opacity: isHovered ? 0.8 : 0.2 },
                        transition: { duration: 0.3 }
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "relative rounded-full",
                        style: {
                          width: p.size,
                          height: p.size,
                          background: `radial-gradient(circle, white, ${star.color})`,
                          boxShadow: `0 0 ${p.size * 2}px ${star.color}`
                        },
                        animate: {
                          scale: isHovered ? 1.5 : 1,
                          rotate: isHovered ? 360 : 0
                        },
                        transition: { scale: { duration: 0.3 }, rotate: { duration: 0.8, ease: "linear" } }
                      }
                    ),
                    /* @__PURE__ */ jsx(AnimatePresence, { children: isHovered && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 10 },
                        className: "pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap z-20",
                        children: /* @__PURE__ */ jsx("div", { className: "rounded-full bg-black/80 backdrop-blur-md px-4 py-1.5 border border-white/15", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium tracking-[0.15em] text-white/90", children: star.timeLabel }) })
                      }
                    ) })
                  ]
                },
                i
              );
            })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open !== null && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 grid place-items-center bg-black/85 backdrop-blur-md p-6",
        onClick: () => setOpen(null),
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { scale: 0.85, opacity: 0, y: 30 },
            animate: { scale: 1, opacity: 1, y: 0 },
            exit: { scale: 0.9, opacity: 0, y: 20 },
            transition: { type: "spring", stiffness: 200, damping: 22 },
            onClick: (e) => e.stopPropagation(),
            className: "relative w-[min(600px,92vw)] overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 shadow-2xl",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  motion.img,
                  {
                    src: stars[open].img,
                    alt: "",
                    className: "h-full w-full object-cover",
                    initial: { scale: 1.1 },
                    animate: { scale: 1 },
                    transition: { duration: 0.6 }
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-30",
                    style: { background: `linear-gradient(135deg, ${stars[open].color}20, transparent)` }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-7", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "h-1.5 w-1.5 rounded-full",
                      style: { background: stars[open].color }
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] tracking-[0.2em] text-white/40 uppercase", children: stars[open].locationLabel })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-light text-white tracking-tight mb-2", children: stars[open].timeLabel }),
                /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm leading-relaxed italic", children: stars[open].momentText }),
                /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "h-px w-8",
                      style: { background: `linear-gradient(90deg, ${stars[open].color}, transparent)` }
                    }
                  ),
                  /* @__PURE__ */ jsxs("span", { className: "text-[8px] tracking-[0.2em] text-white/25 uppercase", children: [
                    "Memory ",
                    String(open + 1).padStart(2, "0")
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setOpen(null),
                  className: "absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white transition-colors",
                  children: /* @__PURE__ */ jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M6 18L18 6M6 6l12 12" }) })
                }
              )
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { delay: 0.5 },
        className: "relative mt-20 text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent max-w-md mx-auto" }),
          /* @__PURE__ */ jsxs("p", { className: "text-white/15 text-[9px] tracking-[0.3em] uppercase mt-6", children: [
            stars.length,
            " memories • frozen in time"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-10vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
      ` })
  ] });
}
const DoodleStar = ({ x, y, delay }) => /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 0.3, scale: 1 },
    transition: { delay, duration: 0.5 },
    className: "absolute pointer-events-none",
    style: { left: x, top: y },
    children: /* @__PURE__ */ jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,255,255,0.3)", strokeWidth: "1.5", children: [
      /* @__PURE__ */ jsx("path", { d: "M12 2 L12 22 M2 12 L22 12" }),
      /* @__PURE__ */ jsx("path", { d: "M5 5 L19 19 M19 5 L5 19" })
    ] })
  }
);
const HandwrittenArrow = ({ x, y, angle }) => /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.4 },
    transition: { delay: 1, duration: 0.8 },
    className: "absolute pointer-events-none",
    style: { left: x, top: y, transform: `rotate(${angle}deg)` },
    children: /* @__PURE__ */ jsx("svg", { width: "40", height: "20", viewBox: "0 0 40 20", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M2 10 L30 10 M30 10 L22 4 M30 10 L22 16", stroke: "rgba(255,255,255,0.4)", strokeWidth: "1.5", strokeLinecap: "round" }) })
  }
);
function StringLights() {
  const lights = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: 5 + i * 8.5,
    delay: i * 0.3
  }));
  return /* @__PURE__ */ jsxs("div", { className: "absolute top-8 left-0 right-0 pointer-events-none", children: [
    /* @__PURE__ */ jsx("svg", { className: "absolute top-0 w-full h-[60px]", preserveAspectRatio: "none", children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M0,20 Q100,5 200,25 T400,20 T600,30 T800,22 T1000,28 T1200,18",
        stroke: "rgba(255,255,255,0.15)",
        strokeWidth: "1.5",
        fill: "none"
      }
    ) }),
    lights.map((light) => /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute",
        style: { left: `${light.left}%`, top: 15 + Math.sin(light.id) * 8 },
        animate: {
          y: [0, -3, 0, 3, 0],
          opacity: [0.6, 1, 0.6]
        },
        transition: {
          duration: 3 + light.id * 0.2,
          repeat: Infinity,
          delay: light.delay,
          ease: "easeInOut"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-3 rounded-full bg-[#FBBF24] blur-md opacity-50" }),
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#FBBF24]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-white/30" })
        ] })
      },
      light.id
    ))
  ] });
}
function MemoryModal({ photo, onClose }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6",
      onClick: onClose,
      children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { scale: 0.9, opacity: 0, y: 30 },
          animate: { scale: 1, opacity: 1, y: 0 },
          exit: { scale: 0.9, opacity: 0, y: 30 },
          transition: { type: "spring", damping: 25, stiffness: 200 },
          className: "relative max-w-3xl w-full bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 overflow-hidden shadow-2xl",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
              /* @__PURE__ */ jsx("img", { src: photo.src, alt: photo.title, className: "w-full h-full object-cover" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx("div", { className: `h-1.5 w-1.5 rounded-full ${photo.mood === "golden" ? "bg-amber-400" : photo.mood === "neon" ? "bg-pink-400" : photo.mood === "nostalgic" ? "bg-blue-400" : "bg-violet-400"}` }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] tracking-[0.2em] text-white/40 uppercase", children: "Memory Unlocked" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-light text-white tracking-tight mb-2", children: photo.title }),
              /* @__PURE__ */ jsx("p", { className: "text-white/60 text-base leading-relaxed italic mb-4", children: photo.tagline }),
              /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" }),
              /* @__PURE__ */ jsx("p", { className: "text-white/40 text-xs tracking-wide", children: "Some moments deserve to be remembered forever." })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white/60 hover:text-white transition-colors flex items-center justify-center",
                children: "✕"
              }
            )
          ]
        }
      )
    }
  );
}
function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [secretRevealed, setSecretRevealed] = useState(false);
  const [discoveredSecret, setDiscoveredSecret] = useState(false);
  const secretIndex = 3;
  const secretMessage = "Out of all the moments here, you somehow became my favorite one. ❤️";
  const memoriesWithCaptions = photos.map((photo, idx) => ({
    ...photo,
    handwrittenCaption: [
      "Still laughing about this. ✨",
      "This day deserves its own movie. 🎬",
      "Proof we were happy. 💫",
      "Peak friendship. 🤝",
      "Nobody else understands this memory. 💭",
      "One ordinary day became unforgettable. 🌟",
      "This photo still makes me smile. 😊",
      "Some moments hit different. 💖"
    ][idx],
    rotation: (photo.rot || 0) + (Math.random() - 0.5) * 2,
    size: idx === secretIndex ? "large" : idx % 3 === 0 ? "medium" : "small"
  }));
  const handlePhotoClick = (photo, index) => {
    if (index === secretIndex && !discoveredSecret) {
      setSecretRevealed(true);
      setDiscoveredSecret(true);
      setTimeout(() => setSecretRevealed(false), 4e3);
    }
    setSelectedPhoto(photo);
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A0A10] via-[#1a1030] to-[#0A0A10] py-28 md:py-36", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-[#FF4D8D] opacity-20 blur-[150px] animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-[#A855F7] opacity-20 blur-[150px] animate-pulse delay-1000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#67E8F9] opacity-15 blur-[150px] animate-pulse delay-2000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20", style: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", children: [...Array(40)].map((_, i) => /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "absolute rounded-full bg-white/10",
          style: {
            width: 1 + Math.random() * 2,
            height: 1 + Math.random() * 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          },
          animate: {
            y: [0, -20 - Math.random() * 30],
            opacity: [0, 0.5, 0]
          },
          transition: {
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 15,
            ease: "linear"
          }
        },
        `dust-${i}`
      )) })
    ] }),
    /* @__PURE__ */ jsx(StringLights, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "text-center mb-20",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-1.5 mb-6", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "h-1.5 w-1.5 rounded-full bg-[#FF4D8D]",
                  animate: { scale: [1, 1.8, 1] },
                  transition: { duration: 1.5, repeat: Infinity }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium uppercase tracking-[0.3em] text-white/50", children: "Chapter 03" })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl lg:text-7xl font-light tracking-tight", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent", children: "A Box Full of Moments" }) }),
            /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-white/30 text-xs tracking-[0.2em] uppercase", children: "Scattered memories. Collected over time. Each one a story." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(DoodleStar, { x: "5%", y: "15%", delay: 0.5 }),
        /* @__PURE__ */ jsx(DoodleStar, { x: "90%", y: "25%", delay: 0.8 }),
        /* @__PURE__ */ jsx(DoodleStar, { x: "15%", y: "75%", delay: 1.1 }),
        /* @__PURE__ */ jsx(HandwrittenArrow, { x: "8%", y: "40%", angle: -15 }),
        /* @__PURE__ */ jsx(HandwrittenArrow, { x: "85%", y: "60%", angle: 10 }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0 },
            animate: { opacity: 0.3, scale: 1 },
            transition: { delay: 1.5, duration: 0.8 },
            className: "absolute left-[12%] top-[45%] pointer-events-none",
            children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,77,141,0.4)", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" }) })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-min", children: memoriesWithCaptions.map((memory, idx) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 50, rotate: (memory.rotation || 0) + 5 },
            whileInView: { opacity: 1, y: 0, rotate: memory.rotation || 0 },
            viewport: { once: true, margin: "-50px" },
            transition: { delay: idx * 0.05, duration: 0.6, type: "spring", stiffness: 100 },
            whileHover: {
              rotate: 0,
              y: -12,
              scale: 1.02,
              transition: { duration: 0.3 }
            },
            className: `relative cursor-pointer group ${memory.size === "large" ? "md:col-span-2 md:row-span-2" : memory.size === "medium" ? "md:col-span-1" : ""}`,
            style: {
              zIndex: idx === secretIndex ? 10 : 1
            },
            onClick: () => handlePhotoClick(memory, idx),
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative bg-white/95 rounded-lg p-3 pb-6 shadow-2xl transition-all duration-300 group-hover:shadow-3xl",
                style: {
                  transform: `rotate(${memory.rotation || 0}deg)`,
                  boxShadow: idx === secretIndex ? "0 0 30px rgba(255,77,141,0.3)" : ""
                },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#67E8F9]/30 backdrop-blur-sm rounded-sm rotate-2" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-1 left-1 w-6 h-6 rounded-full bg-black/5" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-1 right-1 w-6 h-6 rounded-full bg-black/5" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-md", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: memory.src,
                        alt: memory.title,
                        loading: "lazy",
                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none",
                        style: {
                          background: "linear-gradient(135deg, rgba(255,200,150,0.3), rgba(255,100,150,0.2))"
                        }
                      }
                    ),
                    idx === secretIndex && !discoveredSecret && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        animate: { opacity: [0.3, 0.8, 0.3] },
                        transition: { duration: 2, repeat: Infinity },
                        className: "absolute -inset-2 rounded-lg bg-[#FF4D8D]/20 blur-md pointer-events-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-3 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-neutral-700 text-sm font-hand tracking-wide", children: memory.handwrittenCaption }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsx("span", { className: "text-[#FF4D8D] text-xs", children: "❤" }) })
                ]
              }
            )
          },
          memory.id
        )) }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: secretRevealed && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20, scale: 0.9 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: -20, scale: 0.9 },
            className: "fixed bottom-8 left-1/2 -translate-x-1/2 z-50",
            children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[#FF4D8D] to-[#A855F7] rounded-2xl px-6 py-4 shadow-2xl border border-white/20", children: /* @__PURE__ */ jsx("p", { className: "text-white text-sm md:text-base font-medium tracking-wide", children: secretMessage }) })
          }
        ) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 60, scale: 0.95 },
            whileInView: { opacity: 1, y: 0, scale: 1 },
            viewport: { once: true, margin: "-50px" },
            transition: { delay: 0.3, duration: 0.8, type: "spring" },
            className: "relative mt-20 max-w-2xl mx-auto",
            children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 md:p-12 text-center border border-white/20 shadow-2xl", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#67E8F9]/30 backdrop-blur-sm rounded-sm rotate-1" }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { scale: [1, 1.1, 1] },
                  transition: { duration: 3, repeat: Infinity },
                  className: "text-5xl mb-6",
                  children: "✨"
                }
              ),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-light text-white tracking-tight", children: "And somehow..." }),
              /* @__PURE__ */ jsx("div", { className: "h-px w-16 bg-gradient-to-r from-transparent via-[#FF4D8D] to-transparent mx-auto my-6" }),
              /* @__PURE__ */ jsxs("p", { className: "text-white/60 text-lg md:text-xl italic", children: [
                "our favorite picture",
                /* @__PURE__ */ jsx("br", {}),
                "hasn't been taken yet"
              ] }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { scale: [1, 1.2, 1] },
                  transition: { duration: 2, repeat: Infinity, delay: 1 },
                  className: "mt-6 text-2xl",
                  children: "❤️"
                }
              )
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: selectedPhoto && /* @__PURE__ */ jsx(MemoryModal, { photo: selectedPhoto, onClose: () => setSelectedPhoto(null) }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
        .font-hand {
          font-family: 'Kalam', cursive;
        }
      ` })
  ] });
}
const m3 = "/assets/memory-13-jigU6Qj-.jpg";
const notes = [
  { text: "remember that one night we couldn't stop laughing?", color: "from-neon-pink/30 to-neon-purple/20", rot: -4 },
  { text: "you said 'we'll be friends forever' — i kept the receipt.", color: "from-neon-cyan/30 to-neon-purple/20", rot: 3 },
  { text: "thank you for every 3am call. every single one.", color: "from-peach/40 to-neon-pink/20", rot: -2 }
];
function Scrapbook() {
  return /* @__PURE__ */ jsxs("section", { className: "relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FF4D8D] opacity-10 blur-[150px] animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#A855F7] opacity-10 blur-[150px] animate-pulse delay-1000" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.9 },
          className: "mb-16 text-center",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xl mb-6", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "h-1.5 w-1.5 rounded-full bg-[#FF4D8D]",
                  animate: { scale: [1, 1.5, 1] },
                  transition: { duration: 1.5, repeat: Infinity }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium uppercase tracking-[0.3em] text-white/40", children: "Chapter 04" })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent", children: "The Scrapbook" }) }),
            /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-white/30 text-xs tracking-[0.2em] uppercase", children: "Half-torn paper, sticky notes, things I never said out loud." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-8 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40, rotate: -5 },
            whileInView: { opacity: 1, y: 0, rotate: -5 },
            whileHover: { rotate: 0, scale: 1.04 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "relative rounded-xl bg-white/95 p-3 pb-10 shadow-2xl",
            children: [
              /* @__PURE__ */ jsx("img", { src: m3, alt: "", loading: "lazy", className: "aspect-square w-full rounded-md object-cover" }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-center font-hand text-2xl text-neutral-800", children: "Happy Moment" }),
              /* @__PURE__ */ jsx("span", { className: "absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 rounded-sm bg-[#FF4D8D]/50" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "space-y-5", children: notes.map((n, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30, rotate: 0 },
            whileInView: { opacity: 1, y: 0, rotate: n.rot },
            whileHover: { rotate: 0, y: -4, scale: 1.03 },
            viewport: { once: true },
            transition: { delay: i * 0.1, duration: 0.7 },
            className: `relative rounded-xl bg-gradient-to-br ${n.color} p-6 backdrop-blur-md shadow-2xl border border-white/10`,
            children: /* @__PURE__ */ jsx("p", { className: "font-hand text-2xl leading-snug text-white/90", children: n.text })
          },
          i
        )) }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40, rotate: 4 },
            whileInView: { opacity: 1, y: 0, rotate: 4 },
            whileHover: { rotate: 0, scale: 1.03 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "relative overflow-hidden rounded-xl bg-white/95 p-3 pb-10 shadow-2xl",
            children: [
              /* @__PURE__ */ jsx("img", { src: m8$1, alt: "", loading: "lazy", className: "aspect-square w-full rounded-md object-cover" }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-center font-hand text-2xl text-neutral-800", children: "words I almost forgot to say" }),
              /* @__PURE__ */ jsx("span", { className: "absolute -top-3 right-6 h-6 w-16 -rotate-12 rounded-sm bg-[#67E8F9]/50" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40, rotate: -2 },
            whileInView: { opacity: 1, y: 0, rotate: -2 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "relative overflow-hidden rounded-xl bg-white/95 p-3 pb-10 shadow-2xl md:col-span-2",
            children: [
              /* @__PURE__ */ jsx("div", { className: "relative h-48 w-full overflow-hidden rounded-md", children: /* @__PURE__ */ jsx("img", { src: m5, alt: "", loading: "lazy", className: "h-full w-full object-cover" }) }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-center font-hand text-2xl text-neutral-800", children: "wherever you go, take this little universe with you ✶" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "grid place-items-center rounded-2xl bg-white/5 backdrop-blur-xl p-8 shadow-2xl border border-white/10",
            children: [
              /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-[#FF4D8D]", children: "365" }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-[9px] uppercase tracking-[0.3em] text-white/40", children: "days I'll do this again" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
        .font-hand {
          font-family: 'Kalam', cursive;
        }
      ` })
  ] });
}
const letter = `Ankit,

We met in 2023 at Gargi Hostel. Roommates by chance. Friends by choice.

That first year was something else. Late night college explorations — me, you. The night we secretly went to Sultanpur for Navratri. The New Year party. Your Youth Day performance. Every single memory is still fresh.

Then 2024 happened. It wasn't easy — especially for you. We took separate rooms. Some misunderstandings came along. But nothing could break what we built. We fixed things. Because that's what real friends do.

2025 brought us back together. Pratapgarh. New city, same bond. The night outs, the city lights, the new campus at RECP. And then returning to KNIT for the fest — one of the best times of our lives.

You've always been more than a roommate. You're family. I don't say it often — but you already know. You're my person.

Happy birthday, brother. This friendship isn't going anywhere.

— Rajesh`;
function SecretLetter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [typed, setTyped] = useState("");
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setTyped(letter.slice(0, i));
      if (i >= letter.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [inView]);
  return /* @__PURE__ */ jsxs("section", { ref, className: "relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#0B1020] via-[#1a1030] to-[#0B1020] py-28 md:py-36", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-[#FF4D8D] opacity-15 blur-[150px] animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-[#A855F7] opacity-15 blur-[150px] animate-pulse delay-1000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4D8D]/20 blur-[180px] animate-pulse delay-2000" })
    ] }),
    Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "absolute text-[#FF4D8D] pointer-events-none",
        style: {
          left: `${Math.random() * 100}%`,
          bottom: 0,
          fontSize: `${10 + Math.random() * 20}px`,
          animation: `floatUp ${12 + Math.random() * 15}s linear ${-Math.random() * 20}s infinite`,
          filter: `drop-shadow(0 0 ${5 + Math.random() * 10}px #FF4D8D)`,
          opacity: 0.3 + Math.random() * 0.5
        },
        "aria-hidden": true,
        children: "❤"
      },
      i
    )),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xl mb-6",
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "h-1.5 w-1.5 rounded-full bg-[#FF4D8D]",
                animate: { scale: [1, 1.5, 1] },
                transition: { duration: 1.5, repeat: Infinity }
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium uppercase tracking-[0.3em] text-white/40", children: "Final Memory Unlocked" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.8, type: "spring" },
          className: "text-4xl md:text-6xl lg:text-7xl font-light tracking-tight",
          children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent", children: "A Letter For You" })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, delay: 0.3 },
          className: "mt-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-left shadow-2xl md:p-12",
          children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute -top-6 -left-4 text-6xl text-[#FF4D8D]/20 font-serif", children: '"' }),
            /* @__PURE__ */ jsxs("p", { className: "whitespace-pre-line font-hand text-xl leading-relaxed text-white/80 md:text-2xl lg:text-3xl", children: [
              typed,
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "ml-1 inline-block h-6 w-0.5 -translate-y-[2px] bg-[#FF4D8D] align-middle",
                  style: { animation: "blink 0.9s step-end infinite" }
                }
              )
            ] }),
            /* @__PURE__ */ jsx("span", { className: "absolute -bottom-8 -right-4 text-6xl text-[#FF4D8D]/20 font-serif", children: '"' })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, width: 0 },
          whileInView: { opacity: 1, width: "80px" },
          transition: { delay: 1.2, duration: 0.8 },
          className: "h-px bg-gradient-to-r from-transparent via-[#FF4D8D] to-transparent mx-auto mt-8"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { scale: 0 },
          whileInView: { scale: 1 },
          transition: { delay: 1.5, type: "spring" },
          className: "mt-8",
          children: /* @__PURE__ */ jsx("span", { className: "text-2xl text-[#FF4D8D] animate-pulse", children: "💙" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
        
        .font-hand {
          font-family: 'Kalam', cursive;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-10vh) translateX(${Math.random() * 60 - 30}px);
            opacity: 0;
          }
        }
      ` })
  ] });
}
function Finale() {
  const [boom, setBoom] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  useEffect(() => {
    const id = setInterval(() => setBoom((b) => b + 1), 2200);
    return () => clearInterval(id);
  }, []);
  const fireworkColors = [
    { hue: 340, name: "Rose Pink", hex: "#FF4D8D" },
    { hue: 270, name: "Lavender", hex: "#A855F7" },
    { hue: 190, name: "Sky Cyan", hex: "#67E8F9" },
    { hue: 50, name: "Soft Gold", hex: "#FBBF24" }
  ];
  return /* @__PURE__ */ jsxs("section", { ref: containerRef, className: "relative isolate min-h-screen overflow-hidden bg-[#0A0A10] py-28 md:py-40", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-[#FF4D8D] opacity-25 blur-[150px] animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-[#A855F7] opacity-25 blur-[150px] animate-pulse delay-1000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#67E8F9] opacity-20 blur-[150px] animate-pulse delay-2000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/3 right-1/3 h-[400px] w-[400px] rounded-full bg-[#FBBF24] opacity-15 blur-[150px] animate-pulse delay-3000" })
    ] }),
    /* @__PURE__ */ jsx(StarField, { density: 1.8 }),
    /* @__PURE__ */ jsx(
      Firework,
      {
        x: 20 + boom * 13 % 60,
        y: 20 + boom * 7 % 30,
        color: fireworkColors[boom % fireworkColors.length]
      },
      boom
    ),
    /* @__PURE__ */ jsx(
      Firework,
      {
        x: 50 + boom * 17 % 30,
        y: 15 + boom * 11 % 25,
        color: fireworkColors[(boom + 1) % fireworkColors.length],
        delay: 0.4
      },
      `b-${boom}`
    ),
    /* @__PURE__ */ jsx(
      Firework,
      {
        x: 70 + boom * 9 % 25,
        y: 25 + boom * 13 % 20,
        color: fireworkColors[(boom + 2) % fireworkColors.length],
        delay: 0.7
      },
      `c-${boom}`
    ),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsx(HeartStars, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-6 text-center z-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-1.5 mb-6",
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "h-1.5 w-1.5 rounded-full bg-[#FF4D8D]",
                animate: { scale: [1, 1.8, 1] },
                transition: { duration: 1.5, repeat: Infinity }
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium uppercase tracking-[0.3em] text-white/60", children: "The End. Or Maybe Just The Beginning." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          className: "text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-white/90", children: "You are" }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#FF4D8D] via-[#A855F7] to-[#67E8F9] bg-clip-text text-transparent font-medium", children: "one of the best parts" }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-white/90", children: "of my life" }),
            /* @__PURE__ */ jsx("span", { className: "inline-block ml-3 text-[#FF4D8D] animate-pulse text-5xl md:text-7xl", children: "❤" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.p,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { delay: 0.5, duration: 0.8 },
          className: "mx-auto mt-8 max-w-2xl text-white/50 text-sm tracking-wide md:text-base",
          children: [
            "No matter where life goes…",
            /* @__PURE__ */ jsx("br", {}),
            "these memories will always stay alive."
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden", children: Array.from({ length: 100 }).map((_, i) => {
        const color = fireworkColors[i % fireworkColors.length];
        const sizeW = 4 + Math.random() * 8;
        const sizeH = 6 + Math.random() * 14;
        return /* @__PURE__ */ jsx(
          motion.span,
          {
            initial: { y: -20, x: `${Math.random() * 100}%`, rotate: 0, opacity: 0 },
            animate: { y: "110vh", rotate: 720, opacity: [0, 0.9, 0.9, 0] },
            transition: {
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: -Math.random() * 7,
              ease: "linear"
            },
            className: "absolute block",
            style: {
              width: sizeW,
              height: sizeH,
              background: `linear-gradient(135deg, ${color.hex}, ${color.hex}cc)`,
              boxShadow: `0 0 15px ${color.hex}`,
              borderRadius: 2,
              opacity: 0.8
            }
          },
          i
        );
      }) }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 1, duration: 0.6 },
          className: "mt-16",
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-md mx-auto" }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-white/30 text-[8px] tracking-[0.5em] uppercase", children: "made with love · for you" })
          ]
        }
      )
    ] })
  ] });
}
function Firework({ x, y, color, delay = 0 }) {
  const particles = 32;
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute", style: { left: `${x}%`, top: `${y}%` }, "aria-hidden": true, children: [
    Array.from({ length: particles }).map((_, i) => {
      const angle = i / particles * Math.PI * 2;
      const dist = 90 + Math.random() * 110;
      const size = 2.5 + Math.random() * 3.5;
      return /* @__PURE__ */ jsx(
        motion.span,
        {
          initial: { opacity: 1, x: 0, y: 0, scale: 1 },
          animate: {
            opacity: 0,
            x: Math.cos(angle) * dist,
            y: Math.sin(angle) * dist,
            scale: 0.1
          },
          transition: { duration: 1.5, delay: delay + Math.random() * 0.1, ease: "easeOut" },
          className: "absolute block rounded-full",
          style: {
            width: size,
            height: size,
            background: `radial-gradient(circle, ${color.hex}, ${color.hex}aa)`,
            boxShadow: `0 0 ${size * 4}px ${color.hex}, 0 0 ${size * 8}px ${color.hex}`
          }
        },
        i
      );
    }),
    /* @__PURE__ */ jsx(
      motion.span,
      {
        initial: { scale: 0, opacity: 1 },
        animate: { scale: 4, opacity: 0 },
        transition: { duration: 0.5, delay },
        className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block rounded-full",
        style: {
          width: 12,
          height: 12,
          background: `radial-gradient(circle, white, ${color.hex})`,
          boxShadow: `0 0 30px ${color.hex}, 0 0 60px white`
        }
      }
    )
  ] });
}
function HeartStars() {
  const pts = Array.from({ length: 64 }, (_, i) => {
    const t = i / 64 * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return { x: x * 8, y: y * 8 };
  });
  const colors = [
    { hue: 340, hex: "#FF4D8D" },
    { hue: 270, hex: "#A855F7" },
    { hue: 190, hex: "#67E8F9" },
    { hue: 50, hex: "#FBBF24" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative h-[320px] w-[320px]", children: [
    pts.map((p, i) => {
      const color = colors[i % colors.length];
      const size = 2.5 + Math.sin(i) * 1;
      return /* @__PURE__ */ jsx(
        motion.span,
        {
          initial: { scale: 0, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          viewport: { once: true },
          transition: { delay: 0.2 + i * 0.02, duration: 0.4, ease: "backOut" },
          className: "absolute rounded-full",
          style: {
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
            width: size,
            height: size,
            background: `radial-gradient(circle, ${color.hex}, ${color.hex}cc)`,
            boxShadow: `0 0 ${size * 3}px ${color.hex}, 0 0 ${size * 6}px ${color.hex}`
          }
        },
        i
      );
    }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { scale: 0, opacity: 0 },
        whileInView: { scale: 1, opacity: 0.8 },
        viewport: { once: true },
        transition: { delay: 0.4, duration: 0.6 },
        className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
        style: {
          width: 80,
          height: 80,
          background: "radial-gradient(circle, rgba(255,77,141,0.4) 0%, rgba(168,85,247,0.2) 50%, transparent 80%)"
        }
      }
    )
  ] });
}
let dreamOn = false;
const listeners$1 = /* @__PURE__ */ new Set();
const setDreamMode = (on) => {
  dreamOn = on;
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dream-mode", on);
  }
  listeners$1.forEach((l) => l(on));
};
const useDreamMode = () => {
  const [on, setOn] = useState(dreamOn);
  useEffect(() => {
    const l = (v) => setOn(v);
    listeners$1.add(l);
    return () => {
      listeners$1.delete(l);
    };
  }, []);
  return [on, setDreamMode];
};
const SONGS = [
  // Intro Section (Chapter 1 - Start)
  {
    id: "being-binod",
    name: "Being Binod",
    artist: "TVF Rewind",
    file: "/src/assets/being-binod.mp3",
    scene: "intro",
    duration: "2:30"
  },
  {
    id: "shanivar-raati",
    name: "Shanivar Raati",
    artist: "Khyati Sahdev",
    file: "/src/assets/shanivar-raati.mp3",
    scene: "intro",
    duration: "3:00"
  },
  // Galaxy Section (Chapter 2 - Celestial)
  {
    id: "chahun-main",
    name: "Chahun Main Ya Naa",
    artist: "Aashiqui 2",
    file: "/src/assets/chahun-main-ya-naa.mp3",
    scene: "galaxy",
    duration: "4:30"
  },
  // Gallery Section (Chapter 3 - Memories)
  {
    id: "kyo-kisi-ko",
    name: "Kyo Kisi Ko",
    artist: "Tere Naam",
    file: "/src/assets/kyo-kisi-ko.mp3",
    scene: "gallery",
    duration: "5:00"
  },
  // Scrapbook/Letter Section (Chapter 4-5 - Emotional)
  {
    id: "main-rang",
    name: "Main Rang Sharbaton Ka",
    artist: "Romantic Hindi",
    file: "/src/assets/main-rang-sharbaton-ka.mp3",
    scene: "letter",
    duration: "3:30"
  }
];
let audioElement = null;
let currentSongId = null;
let isPlayingState = false;
let currentVolume = 0.35;
const getAudio = () => {
  if (!audioElement) {
    audioElement = new Audio();
    audioElement.loop = true;
    audioElement.volume = currentVolume;
  }
  return audioElement;
};
const playSong = async (songId) => {
  const song = SONGS.find((s) => s.id === songId);
  if (!song) {
    console.error("Song not found:", songId);
    return false;
  }
  const audio = getAudio();
  if (currentSongId === songId && isPlayingState) {
    return true;
  }
  const currentVol = audio.volume;
  audio.src = song.file;
  currentSongId = songId;
  try {
    await audio.load();
    await audio.play();
    isPlayingState = true;
    audio.volume = currentVol;
    return true;
  } catch (error) {
    console.error("Failed to play song:", song.name, error);
    isPlayingState = false;
    return false;
  }
};
const pauseSong = () => {
  const audio = getAudio();
  audio.pause();
  isPlayingState = false;
};
const resumeSong = () => {
  const audio = getAudio();
  if (currentSongId) {
    audio.play().catch(console.error);
    isPlayingState = true;
  }
};
const toggleSong = () => {
  if (isPlayingState) {
    pauseSong();
  } else {
    resumeSong();
  }
};
const setVolume = (volume) => {
  currentVolume = Math.max(0, Math.min(1, volume));
  const audio = getAudio();
  audio.volume = currentVolume;
};
const getCurrentSong = () => {
  if (!currentSongId) return SONGS[0];
  return SONGS.find((s) => s.id === currentSongId) || SONGS[0];
};
const isPlaying = () => isPlayingState;
const setSongByScene = (scene2) => {
  const songForScene = SONGS.find((s) => s.scene === scene2);
  if (songForScene && songForScene.id !== currentSongId) {
    playSong(songForScene.id);
  }
};
const getSongsByScene = (scene2) => {
  return SONGS.filter((s) => s.scene === scene2);
};
const getNextSongInScene = (currentId) => {
  const currentSong = SONGS.find((s) => s.id === currentId);
  if (!currentSong) return null;
  const sceneSongs = SONGS.filter((s) => s.scene === currentSong.scene);
  const currentIndex = sceneSongs.findIndex((s) => s.id === currentId);
  const nextIndex = (currentIndex + 1) % sceneSongs.length;
  return sceneSongs[nextIndex];
};
const SCENE_KEY = "birthday:scene";
const VALID = ["intro", "galaxy", "gallery", "scrapbook", "letter", "finale"];
const initialScene = () => {
  if (typeof window === "undefined") return "intro";
  const v = window.localStorage.getItem(SCENE_KEY);
  return v && VALID.includes(v) ? v : "intro";
};
let scene = initialScene();
const listeners = /* @__PURE__ */ new Set();
const setScene = (s) => {
  if (s === scene) return;
  scene = s;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(SCENE_KEY, s);
    } catch {
    }
  }
  setSongByScene(s);
  listeners.forEach((l) => l(s));
};
const useScene = () => {
  const [s, setS] = useState(scene);
  useEffect(() => {
    const l = (next) => setS(next);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);
  return s;
};
if (typeof window !== "undefined") {
  setTimeout(() => {
    if (!currentSongId) {
      playSong("being-binod");
    }
  }, 100);
}
function AmbientAudio() {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.35);
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(getCurrentSong());
  const [showPlaylist, setShowPlaylist] = useState(false);
  const { isActive: dream, toggle: toggleDream } = useDreamMode();
  const scene2 = useScene();
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaying(isPlaying());
      setCurrentSong(getCurrentSong());
    }, 100);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const sceneSongs2 = getSongsByScene(scene2);
    if (sceneSongs2.length > 0 && currentSong.scene !== scene2) {
      playSong(sceneSongs2[0].id);
    }
  }, [scene2]);
  const handleVolumeChange = (e) => {
    const v = parseFloat(e.target.value);
    setVolumeState(v);
    if (v === 0) {
      setMuted(true);
      setVolume(0);
    } else {
      setMuted(false);
      setVolume(v);
    }
  };
  const handleMuteToggle = () => {
    if (muted) {
      setMuted(false);
      setVolume(volume);
    } else {
      setMuted(true);
      setVolume(0);
    }
  };
  const handleNextSong = () => {
    const nextSong = getNextSongInScene(currentSong.id);
    if (nextSong) {
      playSong(nextSong.id);
    }
  };
  const handleSelectSong = (songId) => {
    playSong(songId);
    setShowPlaylist(false);
  };
  const [audioAllowed, setAudioAllowed] = useState(false);
  useEffect(() => {
    const enableAudio = () => {
      if (!audioAllowed) {
        setAudioAllowed(true);
      }
    };
    document.addEventListener("click", enableAudio);
    return () => document.removeEventListener("click", enableAudio);
  }, [audioAllowed]);
  getSongsByScene(scene2);
  const sceneLabel = {
    intro: "Introduction",
    galaxy: "Galaxy",
    gallery: "Gallery",
    scrapbook: "Scrapbook",
    letter: "Letter",
    finale: "Finale"
  }[scene2];
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-6 right-6 z-[80] flex flex-col items-end gap-3", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 12, scale: 0.95 },
        transition: { duration: 0.25 },
        className: "glass-strong w-80 rounded-2xl p-5 shadow-cinema",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Music2, { className: "h-4 w-4 text-neon-cyan" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: sceneLabel })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleSong,
                className: `rounded-full px-3 py-1 text-[10px] uppercase tracking-widest transition ${playing ? "bg-neon-pink/20 text-neon-pink" : "bg-white/5 text-muted-foreground hover:text-foreground"}`,
                children: playing ? "Playing" : "Paused"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4 rounded-xl bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 p-4 text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1", children: "Currently Playing" }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-aurora font-semibold", children: currentSong.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: currentSong.artist }),
            currentSong.duration && /* @__PURE__ */ jsx("p", { className: "text-[10px] text-muted-foreground/60 mt-2", children: currentSong.duration })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: toggleSong,
                className: "group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-r from-neon-pink to-neon-purple shadow-lg transition-transform hover:scale-110",
                children: [
                  playing ? /* @__PURE__ */ jsx(Pause, { className: "h-6 w-6 text-white" }) : /* @__PURE__ */ jsx(Play, { className: "h-6 w-6 text-white ml-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple opacity-75 blur-xl group-hover:opacity-100 transition-opacity" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleNextSong,
                className: "grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20 hover:scale-105",
                children: /* @__PURE__ */ jsx(SkipForward, { className: "h-4 w-4 text-white" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Volume" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleMuteToggle,
                  className: "grid h-7 w-7 place-items-center rounded-full bg-white/5 transition hover:bg-white/10",
                  children: muted ? /* @__PURE__ */ jsx(VolumeX, { className: "h-3.5 w-3.5 text-muted-foreground" }) : /* @__PURE__ */ jsx(Volume2, { className: "h-3.5 w-3.5 text-neon-cyan" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "range",
                min: 0,
                max: 1,
                step: 0.01,
                value: muted ? 0 : volume,
                onChange: handleVolumeChange,
                className: "h-1.5 w-full cursor-pointer appearance-none rounded-full",
                style: {
                  background: `linear-gradient(to right, var(--neon-purple), var(--neon-pink) ${(muted ? 0 : volume) * 100}%, rgba(255,255,255,0.08) ${(muted ? 0 : volume) * 100}%)`
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setShowPlaylist(!showPlaylist),
              className: "flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm transition hover:bg-white/[0.06] mb-3",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "📋 Section Playlist" }),
                /* @__PURE__ */ jsx(ChevronRight, { className: `h-4 w-4 transition-transform ${showPlaylist ? "rotate-90" : ""}` })
              ]
            }
          ),
          /* @__PURE__ */ jsx(AnimatePresence, { children: showPlaylist && /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              className: "mb-4 overflow-hidden",
              children: /* @__PURE__ */ jsx("div", { className: "space-y-1 max-h-48 overflow-y-auto pr-1", children: SONGS.map((song) => /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleSelectSong(song.id),
                  className: `w-full text-left px-3 py-2 rounded-lg text-sm transition ${currentSong.id === song.id ? "bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 text-neon-pink" : "hover:bg-white/10 text-muted-foreground"}`,
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-medium", children: song.name }),
                      /* @__PURE__ */ jsx("p", { className: "text-[10px] text-muted-foreground", children: song.artist })
                    ] }),
                    currentSong.id === song.id && /* @__PURE__ */ jsx("span", { className: "text-xs text-neon-pink animate-pulse", children: "● Playing" })
                  ] })
                },
                song.id
              )) })
            }
          ) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: toggleDream,
              className: `group flex w-full items-center justify-between rounded-xl border px-4 py-3 transition ${dream ? "border-neon-purple/60 bg-neon-purple/15" : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"}`,
              children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(
                    Sparkles,
                    {
                      className: `h-4 w-4 transition ${dream ? "text-neon-pink" : "text-muted-foreground"}`
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Dream Mode" })
                ] }),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `relative h-5 w-9 rounded-full transition ${dream ? "bg-aurora" : "bg-white/10"}`,
                    children: /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${dream ? "translate-x-4" : "translate-x-0.5"}`
                      }
                    )
                  }
                )
              ]
            }
          ),
          playing && !muted && /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-neon-pink animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-neon-pink animate-pulse delay-150" }),
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-neon-pink animate-pulse delay-300" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground ml-1", children: "Now playing..." })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        className: "relative grid h-12 w-12 place-items-center rounded-full glass-strong text-foreground shadow-cinema transition-transform hover:scale-110",
        children: [
          open ? /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 rotate-90" }) : muted || !playing ? /* @__PURE__ */ jsx(VolumeX, { className: "h-5 w-5 text-muted-foreground" }) : /* @__PURE__ */ jsx(Music2, { className: "h-5 w-5 text-neon-pink" }),
          playing && !muted && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inset-0 -z-10 animate-ping rounded-full bg-neon-pink/40" }),
            /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 h-3 w-3 rounded-full bg-neon-pink animate-pulse" })
          ] })
        ]
      }
    )
  ] });
}
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    let raf = 0;
    const tick = () => {
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;
      el.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "aria-hidden": true,
      className: "pointer-events-none fixed left-0 top-0 z-[90] h-[400px] w-[400px] rounded-full opacity-60 mix-blend-screen",
      style: { background: "radial-gradient(circle, rgba(139,92,246,0.35), transparent 60%)" }
    }
  );
}
function SceneSection({
  scene: scene2,
  children
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting && e.intersectionRatio > 0.4) setScene(scene2);
      }
    }, {
      threshold: [0, 0.4, 0.6, 1]
    });
    io.observe(el);
    return () => io.disconnect();
  }, [scene2]);
  return /* @__PURE__ */ jsx("div", { ref, children });
}
const SCROLL_KEY = "birthday:scroll-y";
function Index() {
  const [ready, setReady] = useState(() => {
    if (typeof window === "undefined") return false;
    if (sessionStorage.getItem("birthday:intro-seen") === "1") return true;
    const y = Number(localStorage.getItem(SCROLL_KEY) || "0");
    return y > 100;
  });
  useEffect(() => {
    if (!ready || typeof window === "undefined") return;
    sessionStorage.setItem("birthday:intro-seen", "1");
    const y = Number(localStorage.getItem(SCROLL_KEY) || "0");
    if (y > 0) {
      const restore = () => window.scrollTo({
        top: y,
        behavior: "instant"
      });
      requestAnimationFrame(() => requestAnimationFrame(restore));
      setTimeout(restore, 400);
    }
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        try {
          localStorage.setItem(SCROLL_KEY, String(window.scrollY));
        } catch {
        }
      });
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ready]);
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen bg-background text-foreground", children: [
    !ready && /* @__PURE__ */ jsx(LoadingIntro, { onDone: () => setReady(true) }),
    ready && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(CursorGlow, {}),
      /* @__PURE__ */ jsx(AmbientAudio, {}),
      /* @__PURE__ */ jsx(SceneSection, { scene: "intro", children: /* @__PURE__ */ jsx(Hero, {}) }),
      /* @__PURE__ */ jsx(SceneSection, { scene: "intro", children: /* @__PURE__ */ jsx(Timeline, {}) }),
      /* @__PURE__ */ jsx(SceneSection, { scene: "galaxy", children: /* @__PURE__ */ jsx(MemoryGalaxy, {}) }),
      /* @__PURE__ */ jsx(SceneSection, { scene: "gallery", children: /* @__PURE__ */ jsx(Gallery, {}) }),
      /* @__PURE__ */ jsx(SceneSection, { scene: "scrapbook", children: /* @__PURE__ */ jsx(Scrapbook, {}) }),
      /* @__PURE__ */ jsx(SceneSection, { scene: "letter", children: /* @__PURE__ */ jsx(SecretLetter, {}) }),
      /* @__PURE__ */ jsx(SceneSection, { scene: "finale", children: /* @__PURE__ */ jsx(Finale, {}) })
    ] })
  ] });
}
export {
  Index as component
};
