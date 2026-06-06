import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsx("main", { className: "grid min-h-screen place-items-center bg-background px-6 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
  /* @__PURE__ */ jsx("p", { className: "font-display text-3xl", children: "This memory has faded." }),
  /* @__PURE__ */ jsxs(Link, { to: "/", className: "mt-4 inline-flex items-center gap-2 text-neon-cyan hover:underline", children: [
    /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
    " Back to the universe"
  ] })
] }) });
export {
  SplitNotFoundComponent as notFoundComponent
};
