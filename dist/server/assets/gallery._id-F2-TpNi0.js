import { jsx, jsxs } from "react/jsx-runtime";
const SplitErrorComponent = ({
  reset
}) => /* @__PURE__ */ jsx("main", { className: "grid min-h-screen place-items-center bg-background text-center", children: /* @__PURE__ */ jsxs("div", { children: [
  /* @__PURE__ */ jsx("p", { children: "Something went sideways." }),
  /* @__PURE__ */ jsx("button", { onClick: reset, className: "mt-3 text-neon-cyan underline", children: "Try again" })
] }) });
export {
  SplitErrorComponent as errorComponent
};
