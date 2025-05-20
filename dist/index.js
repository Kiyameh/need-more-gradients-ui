import s, { useState as $, useRef as w, useMemo as g } from "react";
function S({
  roundness: e = 1,
  background: i = "var(--surface-100)",
  firstGradient: u = "var(--gradient-100)",
  secondGradient: o = "var(--gradient-200)",
  thirdGradient: n = "var(--gradient-300)",
  borderWidth: r = 1,
  children: t,
  style: f,
  ...d
}) {
  const [h, l] = $(!1), [p, a] = $(!1), [v, b] = $({ x: 0, y: 0 }), x = w(null), C = (M) => {
    if (x.current) {
      const E = x.current.getBoundingClientRect();
      b({ x: M.clientX - E.left, y: M.clientY - E.top });
    }
  }, m = () => {
    l(!0);
  }, c = () => {
    l(!1);
  }, k = () => {
    a(!0);
  }, I = () => {
    a(!1);
  };
  return /* @__PURE__ */ s.createElement(
    "button",
    {
      onMouseEnter: m,
      onMouseLeave: c,
      onMouseMove: C,
      onMouseDown: k,
      onMouseUp: I,
      ref: x,
      style: {
        background: p ? `linear-gradient(to right, ${u}, ${o}, ${n})` : h ? "var(--surface-300)" : i,
        color: p ? "white" : "inherit",
        borderRadius: `${e}rem`,
        paddingInline: "1rem",
        paddingBlock: "0.4rem",
        userSelect: "none",
        cursor: "pointer",
        border: "none",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        ...f
      },
      ...d
    },
    t,
    /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          background: `radial-gradient(circle at ${v.x}px ${v.y}px, ${u}, ${o}, ${n}, transparent, transparent)`,
          transition: "opacity 0.4s ease-in-out",
          opacity: h ? 1 : 0,
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          zIndex: -1
        }
      }
    ),
    /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          background: "inherit",
          position: "absolute",
          top: `${r}px`,
          left: `${r}px`,
          width: `calc(100% - ${r * 2}px)`,
          height: `calc(100% - ${r * 2}px)`,
          borderRadius: "inherit",
          zIndex: -1
        }
      }
    )
  );
}
function R({
  primary: e = !1,
  roundness: i = 1,
  background: u = "var(--surface-100)",
  firstGradient: o = "var(--gradient-100)",
  secondGradient: n = "var(--gradient-200)",
  thirdGradient: r = "var(--gradient-300)",
  borderWidth: t = 1,
  children: f,
  style: d,
  ...h
}) {
  const [l, p] = $(!1), [a, v] = $(!1), b = () => {
    p(!0);
  }, x = () => {
    p(!1);
  }, C = () => {
    v(!0);
  }, m = () => {
    v(!1);
  }, c = g(
    () => ({
      backgroundColor: e ? "transparent" : u,
      hoverColor: e ? "transparent" : "var(--surface-300)",
      pressedColor: e ? "var(--surface-300)" : "transparent",
      contentColor: e ? "white" : "inherit",
      pressedContentColor: e ? "inherit" : "white"
    }),
    [e, u]
  ), k = g(
    () => ({
      backgroundColor: a ? c.pressedColor : l ? c.hoverColor : c.backgroundColor,
      color: a ? c.pressedContentColor : c.contentColor,
      borderRadius: `${i}rem`,
      paddingInline: "1rem",
      paddingBlock: "0.4rem",
      userSelect: "none",
      cursor: "pointer",
      border: "none",
      position: "relative",
      zIndex: 1,
      overflow: "hidden",
      ...d
    }),
    [a, l, c, i, d]
  ), I = g(
    () => ({
      background: `conic-gradient(
      from 0deg,
      ${o} 0%,
      ${n} 33%,
      ${r} 66%,
      ${o} 100%,
      transparent 100%
      )`,
      animation: "spotlight-spin 4s linear infinite",
      position: "absolute",
      top: "-300%",
      left: "-50%",
      width: "200%",
      aspectRatio: "1/1",
      borderRadius: "999px",
      zIndex: -1
    }),
    [o, n, r]
  ), M = g(
    () => ({
      background: "inherit",
      position: "absolute",
      top: `${t}px`,
      left: `${t}px`,
      width: `calc(100% - ${t * 2}px)`,
      height: `calc(100% - ${t * 2}px)`,
      borderRadius: "inherit",
      zIndex: -1
    }),
    [t]
  );
  return /* @__PURE__ */ s.createElement(
    "button",
    {
      onMouseEnter: b,
      onMouseLeave: x,
      onMouseDown: C,
      onMouseUp: m,
      ...h,
      style: k
    },
    f,
    /* @__PURE__ */ s.createElement("div", { style: I }),
    /* @__PURE__ */ s.createElement("div", { style: M }),
    /* @__PURE__ */ s.createElement("style", null, `
          @keyframes spotlight-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `)
  );
}
function z({
  primary: e = !1,
  roundness: i = 1,
  background: u = "var(--surface-100)",
  firstGradient: o = "var(--gradient-100)",
  secondGradient: n = "var(--gradient-200)",
  thirdGradient: r = "var(--gradient-300)",
  borderWidth: t = 1,
  children: f,
  style: d,
  ...h
}) {
  const [l, p] = $(!1), [a, v] = $(!1), b = () => {
    p(!0);
  }, x = () => {
    p(!1);
  }, C = () => {
    v(!0);
  }, m = () => {
    v(!1);
  }, c = g(
    () => ({
      backgroundColor: e ? "transparent" : u,
      hoverColor: e ? "transparent" : "var(--surface-300)",
      pressedColor: e ? "var(--surface-300)" : "transparent",
      contentColor: e ? "white" : "inherit",
      pressedContentColor: e ? "inherit" : "white"
    }),
    [e, u]
  ), k = g(
    () => ({
      background: a ? c.pressedColor : l ? c.hoverColor : c.backgroundColor,
      color: a ? c.pressedContentColor : c.contentColor,
      borderRadius: `${i}rem`,
      paddingInline: "1rem",
      paddingBlock: "0.4rem",
      userSelect: "none",
      cursor: "pointer",
      position: "relative",
      zIndex: 1,
      border: "none",
      ...d
    }),
    [
      a,
      l,
      c,
      o,
      n,
      r,
      i,
      d
    ]
  ), I = g(
    () => ({
      background: `linear-gradient(to right, ${o}, ${n}, ${r})`,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "inherit",
      zIndex: -1
    }),
    [o, n, r]
  ), M = g(
    () => ({
      background: "inherit",
      position: "absolute",
      top: `${t}px`,
      left: `${t}px`,
      width: `calc(100% - ${t * 2}px)`,
      height: `calc(100% - ${t * 2}px)`,
      borderRadius: "inherit",
      zIndex: -1
    }),
    [t]
  );
  return /* @__PURE__ */ s.createElement(
    "button",
    {
      onMouseEnter: b,
      onMouseLeave: x,
      onMouseDown: C,
      onMouseUp: m,
      ...h,
      style: k
    },
    f,
    /* @__PURE__ */ s.createElement("div", { style: I }),
    /* @__PURE__ */ s.createElement("div", { style: M })
  );
}
function H({
  firstGradient: e = "var(--gradient-100)",
  secondGradient: i = "var(--gradient-200)",
  thirdGradient: u = "var(--gradient-300)",
  borderWidth: o = 1,
  children: n,
  style: r,
  ...t
}) {
  const [f, d] = $(!1), [h, l] = $({ x: 0, y: 0 }), p = w(null), a = (x) => {
    if (p.current) {
      const C = p.current.getBoundingClientRect();
      l({ x: x.clientX - C.left, y: x.clientY - C.top });
    }
  }, v = () => {
    d(!0);
  }, b = () => {
    d(!1);
  };
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      onMouseEnter: v,
      onMouseLeave: b,
      onMouseMove: a,
      ref: p,
      style: {
        fontSize: "0.8rem",
        paddingInline: "0.8rem",
        paddingBlock: "0.2rem",
        userSelect: "none",
        backgroundColor: f ? "var(--surface-300)" : "var(--surface-100)",
        color: "inherit",
        borderRadius: "1rem",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        ...r
      },
      ...t
    },
    n,
    /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          background: `radial-gradient(circle at ${h.x}px ${h.y}px, ${e}, ${i}, ${u}, transparent, transparent)`,
          transition: "opacity 0.4s ease-in-out",
          opacity: f ? 1 : 0,
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          zIndex: -1
        }
      }
    ),
    /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          background: "inherit",
          position: "absolute",
          top: `${o}px`,
          left: `${o}px`,
          width: `calc(100% - ${o * 2}px)`,
          height: `calc(100% - ${o * 2}px)`,
          borderRadius: "inherit",
          zIndex: -1
        }
      }
    )
  );
}
function L({
  primary: e = !1,
  firstGradient: i = "var(--gradient-100)",
  secondGradient: u = "var(--gradient-200)",
  thirdGradient: o = "var(--gradient-300)",
  borderWidth: n = 1,
  children: r,
  style: t,
  ...f
}) {
  const [d, h] = $(!1), l = () => {
    h(!0);
  }, p = () => {
    h(!1);
  }, a = g(
    () => ({
      backgroundColor: e ? "transparent" : "var(--surface-100)",
      hoverColor: e ? "transparent" : "var(--surface-300)",
      contentColor: e ? "white" : "inherit"
    }),
    [e]
  ), v = g(
    () => ({
      fontSize: "0.8rem",
      paddingInline: "0.8rem",
      paddingBlock: "0.2rem",
      userSelect: "none",
      backgroundColor: d ? a.hoverColor : a.backgroundColor,
      color: a.contentColor,
      borderRadius: "1rem",
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
      ...t
    }),
    [d, a, t]
  ), b = g(
    () => ({
      background: `conic-gradient(
      from 0deg,
      ${i} 0%,
      ${u} 33%,
      ${o} 66%,
      ${i} 100%,
      transparent 100%
      )`,
      animation: "spotlight-spin 4s linear infinite",
      position: "absolute",
      top: "-300%",
      left: "-50%",
      width: "200%",
      aspectRatio: "1/1",
      borderRadius: "999px",
      zIndex: -1
    }),
    [i, u, o]
  ), x = g(
    () => ({
      background: "inherit",
      position: "absolute",
      top: `${n}px`,
      left: `${n}px`,
      width: `calc(100% - ${n * 2}px)`,
      height: `calc(100% - ${n * 2}px)`,
      borderRadius: "inherit",
      zIndex: -1
    }),
    [n]
  );
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      onMouseEnter: l,
      onMouseLeave: p,
      ...f,
      style: v
    },
    r,
    /* @__PURE__ */ s.createElement("div", { style: b }),
    /* @__PURE__ */ s.createElement("div", { style: x }),
    /* @__PURE__ */ s.createElement("style", null, `
          @keyframes spotlight-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `)
  );
}
function B({
  primary: e = !1,
  firstGradient: i = "var(--gradient-100)",
  secondGradient: u = "var(--gradient-200)",
  thirdGradient: o = "var(--gradient-300)",
  borderWidth: n = 1,
  children: r,
  style: t,
  ...f
}) {
  const [d, h] = $(!1), l = () => {
    h(!0);
  }, p = () => {
    h(!1);
  }, a = g(
    () => ({
      backgroundColor: e ? "transparent" : "var(--surface-100)",
      hoverColor: e ? "transparent" : "var(--surface-300)",
      contentColor: e ? "white" : "inherit"
    }),
    [e]
  ), v = g(
    () => ({
      fontSize: "0.8rem",
      paddingInline: "0.8rem",
      paddingBlock: "0.2rem",
      userSelect: "none",
      backgroundColor: d ? a.hoverColor : a.backgroundColor,
      color: a.contentColor,
      borderRadius: "1rem",
      position: "relative",
      zIndex: 1,
      ...t
    }),
    [d, a, t]
  ), b = g(
    () => ({
      background: `linear-gradient(to right, ${i}, ${u}, ${o})`,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "inherit",
      zIndex: -1
    }),
    [i, u, o]
  ), x = g(
    () => ({
      background: "inherit",
      position: "absolute",
      top: `${n}px`,
      left: `${n}px`,
      width: `calc(100% - ${n * 2}px)`,
      height: `calc(100% - ${n * 2}px)`,
      borderRadius: "inherit",
      zIndex: -1
    }),
    [n]
  );
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      onMouseEnter: l,
      onMouseLeave: p,
      ...f,
      style: v
    },
    r,
    /* @__PURE__ */ s.createElement("div", { style: b }),
    /* @__PURE__ */ s.createElement("div", { style: x })
  );
}
function P({
  roundness: e = 1,
  background: i = "var(--surface-100)",
  firstGradient: u = "var(--gradient-100)",
  secondGradient: o = "var(--gradient-200)",
  thirdGradient: n = "var(--gradient-300)",
  borderWidth: r = 1,
  children: t,
  style: f,
  ...d
}) {
  const [h, l] = $(!1), [p, a] = $({ x: 0, y: 0 }), v = w(null), b = (m) => {
    if (v.current) {
      const c = v.current.getBoundingClientRect();
      a({ x: m.clientX - c.left, y: m.clientY - c.top });
    }
  }, x = () => {
    l(!0);
  }, C = () => {
    l(!1);
  };
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      onMouseEnter: x,
      onMouseLeave: C,
      onMouseMove: b,
      ref: v,
      style: {
        backgroundColor: i,
        borderRadius: `${e}rem`,
        padding: "1rem",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        ...f
      },
      ...d
    },
    t,
    /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          background: `radial-gradient(circle at ${p.x}px ${p.y}px, ${u}, ${o}, ${n}, transparent, transparent)`,
          transition: "opacity 0.4s ease-in-out",
          opacity: h ? 1 : 0,
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          zIndex: -1
        }
      }
    ),
    /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          background: "inherit",
          position: "absolute",
          top: `${r}px`,
          left: `${r}px`,
          width: `calc(100% - ${r * 2}px)`,
          height: `calc(100% - ${r * 2}px)`,
          borderRadius: "inherit",
          zIndex: -1
        }
      }
    )
  );
}
function D({
  primary: e = !1,
  roundness: i = 1,
  background: u = "var(--surface-100)",
  firstGradient: o = "var(--gradient-100)",
  secondGradient: n = "var(--gradient-200)",
  thirdGradient: r = "var(--gradient-300)",
  borderWidth: t = 1,
  children: f,
  style: d,
  ...h
}) {
  const l = g(
    () => ({
      backgroundColor: e ? "transparent" : u,
      contentColor: e ? "white" : "inherit"
    }),
    [e, u]
  ), p = g(
    () => ({
      backgroundColor: l.backgroundColor,
      color: l.contentColor,
      borderRadius: `${i}rem`,
      padding: "1rem",
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
      ...d
    }),
    [l, i, d]
  ), a = g(
    () => ({
      background: `conic-gradient(
      from 0deg,
      ${o} 0%,
      ${n} 33%,
      ${r} 66%,
      ${o} 100%,
      transparent 100%
      )`,
      animation: "spotlight-spin 4s linear infinite",
      position: "absolute",
      top: "-300%",
      left: "-100%",
      width: "300%",
      aspectRatio: "1/1",
      borderRadius: "999px",
      zIndex: -1
    }),
    [o, n, r]
  ), v = g(
    () => ({
      background: "inherit",
      position: "absolute",
      top: `${t}px`,
      left: `${t}px`,
      width: `calc(100% - ${t * 2}px)`,
      height: `calc(100% - ${t * 2}px)`,
      borderRadius: "inherit",
      zIndex: -1
    }),
    [t]
  );
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      ...h,
      style: p
    },
    f,
    /* @__PURE__ */ s.createElement("div", { style: a }),
    /* @__PURE__ */ s.createElement("div", { style: v }),
    /* @__PURE__ */ s.createElement("style", null, `
          @keyframes spotlight-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `)
  );
}
function U({
  primary: e = !1,
  roundness: i = 1,
  background: u = "var(--surface-100)",
  firstGradient: o = "var(--gradient-100)",
  secondGradient: n = "var(--gradient-200)",
  thirdGradient: r = "var(--gradient-300)",
  borderWidth: t = 1,
  children: f,
  style: d,
  ...h
}) {
  const l = g(
    () => ({
      backgroundColor: e ? "transparent" : u,
      contentColor: e ? "white" : "inherit"
    }),
    [e, u]
  ), p = g(
    () => ({
      backgroundColor: l.backgroundColor,
      color: l.contentColor,
      borderRadius: `${i}rem`,
      padding: "1rem",
      position: "relative",
      zIndex: 1,
      ...d
    }),
    [l, i, d]
  ), a = g(
    () => ({
      background: `linear-gradient(to right, ${o}, ${n}, ${r})`,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "inherit",
      zIndex: -1
    }),
    [o, n, r]
  ), v = g(
    () => ({
      background: "inherit",
      position: "absolute",
      top: `${t}px`,
      left: `${t}px`,
      width: `calc(100% - ${t * 2}px)`,
      height: `calc(100% - ${t * 2}px)`,
      borderRadius: "inherit",
      zIndex: -1
    }),
    [t]
  );
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      ...h,
      style: p
    },
    f,
    /* @__PURE__ */ s.createElement("div", { style: a }),
    /* @__PURE__ */ s.createElement("div", { style: v })
  );
}
function X({
  roundness: e = 1,
  background: i = "var(--surface-100)",
  firstGradient: u = "var(--gradient-100)",
  secondGradient: o = "var(--gradient-200)",
  thirdGradient: n = "var(--gradient-300)",
  borderWidth: r = 1,
  children: t,
  style: f,
  ...d
}) {
  const [h, l] = $(!1), [p, a] = $(!1), [v, b] = $({ x: 0, y: 0 }), x = w(null), C = (M) => {
    if (x.current) {
      const E = x.current.getBoundingClientRect();
      b({ x: M.clientX - E.left, y: M.clientY - E.top });
    }
  }, m = () => {
    l(!0);
  }, c = () => {
    l(!1);
  }, k = () => {
    a(!0);
  }, I = () => {
    a(!1);
  };
  return /* @__PURE__ */ s.createElement(
    "button",
    {
      onMouseEnter: m,
      onMouseLeave: c,
      onMouseMove: C,
      onMouseDown: k,
      onMouseUp: I,
      ref: x,
      style: {
        background: p ? `linear-gradient(to right, ${u}, ${o}, ${n})` : h ? "var(--surface-300)" : i,
        color: p ? "white" : "inherit",
        borderRadius: `${e * 2}rem ${e * 2}rem 0 ${e * 2}rem`,
        paddingInline: "2rem",
        paddingBlock: "0.8rem",
        fontSize: "1.2rem",
        userSelect: "none",
        cursor: "pointer",
        border: "none",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        ...f
      },
      ...d
    },
    t,
    /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          background: `radial-gradient(circle at ${v.x}px ${v.y}px, ${u}, ${o}, ${n}, transparent, transparent)`,
          transition: "opacity 0.4s ease-in-out",
          opacity: h ? 1 : 0,
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          zIndex: -1
        }
      }
    ),
    /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          background: "inherit",
          position: "absolute",
          top: `${r}px`,
          left: `${r}px`,
          width: `calc(100% - ${r * 2}px)`,
          height: `calc(100% - ${r * 2}px)`,
          borderRadius: "inherit",
          zIndex: -1
        }
      }
    )
  );
}
function Y({
  primary: e = !1,
  roundness: i = 1,
  background: u = "var(--surface-100)",
  firstGradient: o = "var(--gradient-100)",
  secondGradient: n = "var(--gradient-200)",
  thirdGradient: r = "var(--gradient-300)",
  borderWidth: t = 1,
  children: f,
  style: d,
  ...h
}) {
  const [l, p] = $(!1), [a, v] = $(!1), b = () => {
    p(!0);
  }, x = () => {
    p(!1);
  }, C = () => {
    v(!0);
  }, m = () => {
    v(!1);
  }, c = g(
    () => ({
      backgroundColor: e ? "transparent" : u,
      hoverColor: e ? "transparent" : "var(--surface-300)",
      pressedColor: e ? "var(--surface-300)" : "transparent",
      contentColor: e ? "white" : "inherit",
      pressedContentColor: e ? "inherit" : "white"
    }),
    [e, u]
  ), k = g(
    () => ({
      backgroundColor: a ? c.pressedColor : l ? c.hoverColor : c.backgroundColor,
      color: a ? c.pressedContentColor : c.contentColor,
      borderRadius: `${i * 2}rem ${i * 2}rem 0 ${i * 2}rem`,
      paddingInline: "2rem",
      paddingBlock: "0.8rem",
      fontSize: "1.2rem",
      userSelect: "none",
      cursor: "pointer",
      border: "none",
      position: "relative",
      zIndex: 1,
      overflow: "hidden",
      ...d
    }),
    [a, l, c, i, d]
  ), I = g(
    () => ({
      background: `conic-gradient(
      from 0deg,
      ${o} 0%,
      ${n} 33%,
      ${r} 66%,
      ${o} 100%,
      transparent 100%
      )`,
      animation: "spotlight-spin 4s linear infinite",
      position: "absolute",
      top: "-300%",
      left: "-50%",
      width: "200%",
      aspectRatio: "1/1",
      borderRadius: "999px",
      zIndex: -1
    }),
    [o, n, r]
  ), M = g(
    () => ({
      background: "inherit",
      position: "absolute",
      top: `${t}px`,
      left: `${t}px`,
      width: `calc(100% - ${t * 2}px)`,
      height: `calc(100% - ${t * 2}px)`,
      borderRadius: "inherit",
      zIndex: -1
    }),
    [t]
  );
  return /* @__PURE__ */ s.createElement(
    "button",
    {
      onMouseEnter: b,
      onMouseLeave: x,
      onMouseDown: C,
      onMouseUp: m,
      ...h,
      style: k
    },
    f,
    /* @__PURE__ */ s.createElement("div", { style: I }),
    /* @__PURE__ */ s.createElement("div", { style: M }),
    /* @__PURE__ */ s.createElement("style", null, `
          @keyframes spotlight-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `)
  );
}
function A({
  primary: e = !1,
  roundness: i = 1,
  background: u = "var(--surface-100)",
  firstGradient: o = "var(--gradient-100)",
  secondGradient: n = "var(--gradient-200)",
  thirdGradient: r = "var(--gradient-300)",
  borderWidth: t = 1,
  children: f,
  style: d,
  ...h
}) {
  const [l, p] = $(!1), [a, v] = $(!1), b = () => {
    p(!0);
  }, x = () => {
    p(!1);
  }, C = () => {
    v(!0);
  }, m = () => {
    v(!1);
  }, c = g(
    () => ({
      backgroundColor: e ? "transparent" : u,
      hoverColor: e ? "transparent" : "var(--surface-300)",
      pressedColor: e ? "var(--surface-300)" : "transparent",
      contentColor: e ? "white" : "inherit",
      pressedContentColor: e ? "inherit" : "white"
    }),
    [e, u]
  ), k = g(
    () => ({
      background: a ? c.pressedColor : l ? c.hoverColor : c.backgroundColor,
      color: a ? c.pressedContentColor : c.contentColor,
      borderRadius: `${i * 2}rem ${i * 2}rem 0 ${i * 2}rem`,
      paddingInline: "2rem",
      paddingBlock: "0.8rem",
      fontSize: "1.2rem",
      userSelect: "none",
      cursor: "pointer",
      position: "relative",
      zIndex: 1,
      border: "none",
      ...d
    }),
    [
      a,
      l,
      c,
      o,
      n,
      r,
      i,
      d
    ]
  ), I = g(
    () => ({
      background: `linear-gradient(to right, ${o}, ${n}, ${r})`,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "inherit",
      zIndex: -1
    }),
    [o, n, r]
  ), M = g(
    () => ({
      background: "inherit",
      position: "absolute",
      top: `${t}px`,
      left: `${t}px`,
      width: `calc(100% - ${t * 2}px)`,
      height: `calc(100% - ${t * 2}px)`,
      borderRadius: "inherit",
      zIndex: -1
    }),
    [t]
  );
  return /* @__PURE__ */ s.createElement(
    "button",
    {
      onMouseEnter: b,
      onMouseLeave: x,
      onMouseDown: C,
      onMouseUp: m,
      ...h,
      style: k
    },
    f,
    /* @__PURE__ */ s.createElement("div", { style: I }),
    /* @__PURE__ */ s.createElement("div", { style: M })
  );
}
export {
  B as GradientBadge,
  z as GradientButton,
  A as GradientCallToAction,
  U as GradientCard,
  L as SpotlightBadge,
  R as SpotlightButton,
  Y as SpotlightCallToAction,
  D as SpotlightCard,
  H as StickyBadge,
  S as StickyButton,
  X as StickyCallToAction,
  P as StickyCard
};
