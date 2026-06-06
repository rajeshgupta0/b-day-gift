import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
const appCss = "/assets/styles-Dnzm25hF.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "A cinematic, interactive digital gift that celebrates friendship and memories through a futuristic, dream-like galaxy experience." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "A cinematic, interactive digital gift that celebrates friendship and memories through a futuristic, dream-like galaxy experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "A cinematic, interactive digital gift that celebrates friendship and memories through a futuristic, dream-like galaxy experience." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8dfd4ed9-ead1-4358-a8e5-d51759c4737e/id-preview-d27ddcc3--ce7531dd-c486-4325-a881-fdf7acf597c0.lovable.app-1780334957858.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8dfd4ed9-ead1-4358-a8e5-d51759c4737e/id-preview-d27ddcc3--ce7531dd-c486-4325-a881-fdf7acf597c0.lovable.app-1780334957858.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$1 = () => import("./index-BxEBgJDD.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "A Birthday Memory Experience — for Ankit Verma"
    }, {
      name: "description",
      content: "A cinematic, interactive digital gift made of memories, music, and love — a magical birthday journey through our universe."
    }, {
      property: "og:title",
      content: "A Birthday Memory Experience — for [Friend]"
    }, {
      property: "og:description",
      content: "A cinematic interactive birthday gift built from memories and love."
    }, {
      property: "og:type",
      content: "website"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const m1 = "/assets/img1-YqS89FYv.jpg";
const memory7 = "/assets/memory-7-PJOTvws3.jpg";
const m15 = "/assets/img15-BR_3GVdr.jpg";
const m11 = "/assets/img20-6wR9jJyz.jpg";
const m8$1 = "/assets/img8-Cu9rzayv.jpg";
const m9 = "/assets/img9-DCpx5M-_.jpg";
const m8 = "/assets/memory-8-Dwf84tSK.jpg";
const photos = [
  { id: "1", src: memory7, span: "row-span-2", rot: -3, title: "Golden Hour", tagline: "The sky wore your favorite colors that evening.", mood: "golden" },
  { id: "2", src: m15, span: "", rot: 2, title: "City Lights", tagline: "We chased neon reflections through wet streets.", mood: "neon" },
  { id: "3", src: m1, span: "", rot: -2, title: "First Adventure", tagline: "Where it all began — two souls, one map.", mood: "nostalgic" },
  { id: "4", src: m9, span: "row-span-2", rot: 3, title: "Endless Summer", tagline: "Days that tasted like salt, laughter, and freedom.", mood: "golden" },
  { id: "5", src: m8$1, span: "", rot: -1, title: "Quiet Magic", tagline: "Small moments, infinite gravity.", mood: "dreamy" },
  { id: "6", src: m11, span: "", rot: 2, title: "Midnight Plans", tagline: "We made stars our witnesses.", mood: "neon" },
  { id: "7", src: memory7, span: "", rot: -3, title: "Soft Focus", tagline: "Blurred edges, sharpest memories.", mood: "dreamy" },
  // Changed m7 to m2
  { id: "8", src: m8, span: "", rot: 1, title: "Just Because", tagline: "No reason needed — joy was the whole plan.", mood: "nostalgic" }
];
const getPhoto = (id) => photos.find((p) => p.id === id);
const getSimilar = (id) => {
  const p = getPhoto(id);
  if (!p) return [];
  return photos.filter((q) => q.id !== id && q.mood === p.mood).concat(
    photos.filter((q) => q.id !== id && q.mood !== p.mood)
  ).slice(0, 6);
};
const $$splitComponentImporter = () => import("./gallery._id-D-KNUbAB.js");
const $$splitErrorComponentImporter = () => import("./gallery._id-F2-TpNi0.js");
const $$splitNotFoundComponentImporter = () => import("./gallery._id-CK8EvYBk.js");
const Route = createFileRoute("/gallery/$id")({
  head: ({
    params
  }) => {
    const p = getPhoto(params.id);
    const title = p ? `${p.title} — A Memory` : "A Memory";
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: p?.tagline ?? "A captured moment."
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: p?.tagline ?? "A captured moment."
      }, ...p ? [{
        property: "og:image",
        content: p.src
      }] : []]
    };
  },
  loader: ({
    params
  }) => {
    const photo = getPhoto(params.id);
    if (!photo) throw notFound();
    return {
      photo,
      similar: getSimilar(params.id)
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const GalleryIdRoute = Route.update({
  id: "/gallery/$id",
  path: "/gallery/$id",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  GalleryIdRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  m15 as a,
  memory7 as b,
  m8$1 as c,
  m9 as d,
  m11 as e,
  m8 as f,
  m1 as m,
  photos as p,
  router as r
};
