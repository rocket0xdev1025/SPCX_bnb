(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  75019,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = {
      formatUrl: function () {
        return s;
      },
      formatWithValidation: function () {
        return d;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var a in i) Object.defineProperty(r, a, { enumerable: !0, get: i[a] });
    let n = e.r(44066)._(e.r(99979)),
      o = /https?|ftp|gopher|file/;
    function s(e) {
      let { auth: t, hostname: r } = e,
        i = e.protocol || "",
        a = e.pathname || "",
        s = e.hash || "",
        l = e.query || "",
        d = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (d = t + e.host)
          : r &&
            ((d = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (d += ":" + e.port)),
        l && "object" == typeof l && (l = String(n.urlQueryToSearchParams(l)));
      let c = e.search || (l && `?${l}`) || "";
      return (
        i && !i.endsWith(":") && (i += ":"),
        e.slashes || ((!i || o.test(i)) && !1 !== d)
          ? ((d = "//" + (d || "")), a && "/" !== a[0] && (a = "/" + a))
          : d || (d = ""),
        s && "#" !== s[0] && (s = "#" + s),
        c && "?" !== c[0] && (c = "?" + c),
        (a = a.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${i}${d}${a}${c}${s}`
      );
    }
    let l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function d(e) {
      return s(e);
    }
  },
  87765,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let i = e.r(22357),
      a = e.r(58056);
    function n(e) {
      if (!(0, i.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, i.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, a.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  5705,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let i = (e) => {};
  },
  43871,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = {
      default: function () {
        return m;
      },
      useLinkStatus: function () {
        return y;
      },
    };
    for (var a in i) Object.defineProperty(r, a, { enumerable: !0, get: i[a] });
    let n = e.r(44066),
      o = e.r(77117),
      s = n._(e.r(91983)),
      l = e.r(75019),
      d = e.r(44442),
      c = e.r(88306),
      p = e.r(22357),
      h = e.r(94712);
    e.r(93626);
    let g = e.r(93793),
      f = e.r(8451),
      x = e.r(87765),
      u = e.r(35187);
    function m(t) {
      var r, i;
      let a,
        n,
        m,
        [y, v] = (0, s.useOptimistic)(f.IDLE_LINK_STATUS),
        w = (0, s.useRef)(null),
        {
          href: k,
          as: j,
          children: S,
          prefetch: T = null,
          passHref: I,
          replace: E,
          shallow: C,
          scroll: L,
          onClick: R,
          onMouseEnter: N,
          onTouchStart: W,
          legacyBehavior: z = !1,
          onNavigate: A,
          transitionTypes: M,
          ref: $,
          unstable_dynamicOnHover: F,
          ...P
        } = t;
      (a = S),
        z &&
          ("string" == typeof a || "number" == typeof a) &&
          (a = (0, o.jsx)("a", { children: a }));
      let O = s.default.useContext(d.AppRouterContext),
        B = !1 !== T,
        X =
          !1 !== T
            ? null === (i = T) || "auto" === i
              ? u.FetchStrategy.PPR
              : u.FetchStrategy.Full
            : u.FetchStrategy.PPR,
        D = "string" == typeof (r = j || k) ? r : (0, l.formatUrl)(r);
      if (z) {
        if (a?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        n = s.default.Children.only(a);
      }
      let H = z ? n && "object" == typeof n && n.ref : $,
        _ = s.default.useCallback(
          (e) => (
            null !== O &&
              (w.current = (0, f.mountLinkInstance)(e, D, O, X, B, v)),
            () => {
              w.current &&
                ((0, f.unmountLinkForCurrentNavigation)(w.current),
                (w.current = null)),
                (0, f.unmountPrefetchableInstance)(e);
            }
          ),
          [B, D, O, X, v]
        ),
        U = {
          ref: (0, c.useMergedRef)(_, H),
          onClick(t) {
            z || "function" != typeof R || R(t),
              z &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(t),
              !O ||
                t.defaultPrevented ||
                (function (t, r, i, a, n, o, l) {
                  if ("u" > typeof window) {
                    let d,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((d = t.currentTarget.getAttribute("target")) &&
                          "_self" !== d) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, x.isLocalURL)(r)) {
                      a && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), o)) {
                      let e = !1;
                      if (
                        (o({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: p } = e.r(20030);
                    s.default.startTransition(() => {
                      p(
                        r,
                        a ? "replace" : "push",
                        !1 === n
                          ? g.ScrollBehavior.NoScroll
                          : g.ScrollBehavior.Default,
                        i.current,
                        l
                      );
                    });
                  }
                })(t, D, w, E, L, A, M);
          },
          onMouseEnter(e) {
            z || "function" != typeof N || N(e),
              z &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              O && B && (0, f.onNavigationIntent)(e.currentTarget, !0 === F);
          },
          onTouchStart: function (e) {
            z || "function" != typeof W || W(e),
              z &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              O && B && (0, f.onNavigationIntent)(e.currentTarget, !0 === F);
          },
        };
      return (
        (0, p.isAbsoluteUrl)(D)
          ? (U.href = D)
          : (z && !I && ("a" !== n.type || "href" in n.props)) ||
            (U.href = (0, h.addBasePath)(D)),
        (m = z
          ? s.default.cloneElement(n, U)
          : (0, o.jsx)("a", { ...P, ...U, children: a })),
        (0, o.jsx)(b.Provider, { value: y, children: m })
      );
    }
    e.r(5705);
    let b = (0, s.createContext)(f.IDLE_LINK_STATUS),
      y = () => (0, s.useContext)(b);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  31763,
  (e) => {
    "use strict";
    var t = e.i(91983);
    let r = (...e) =>
        e
          .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
          .join(" ")
          .trim(),
      i = (e) => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
          r ? r.toUpperCase() : t.toLowerCase()
        );
        return t.charAt(0).toUpperCase() + t.slice(1);
      };
    var a = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let n = (0, t.forwardRef)(
      (
        {
          color: e = "currentColor",
          size: i = 24,
          strokeWidth: n = 2,
          absoluteStrokeWidth: o,
          className: s = "",
          children: l,
          iconNode: d,
          ...c
        },
        p
      ) =>
        (0, t.createElement)(
          "svg",
          {
            ref: p,
            ...a,
            width: i,
            height: i,
            stroke: e,
            strokeWidth: o ? (24 * Number(n)) / Number(i) : n,
            className: r("lucide", s),
            ...(!l &&
              !((e) => {
                for (let t in e)
                  if (t.startsWith("aria-") || "role" === t || "title" === t)
                    return !0;
                return !1;
              })(c) && { "aria-hidden": "true" }),
            ...c,
          },
          [
            ...d.map(([e, r]) => (0, t.createElement)(e, r)),
            ...(Array.isArray(l) ? l : [l]),
          ]
        )
    );
    e.s(
      [
        "default",
        0,
        (e, a) => {
          let o = (0, t.forwardRef)(({ className: o, ...s }, l) =>
            (0, t.createElement)(n, {
              ref: l,
              iconNode: a,
              className: r(
                `lucide-${i(e)
                  .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                  .toLowerCase()}`,
                `lucide-${e}`,
                o
              ),
              ...s,
            })
          );
          return (o.displayName = i(e)), o;
        },
      ],
      31763
    );
  },
  63780,
  (e) => {
    "use strict";
    var t = e.i(77117),
      r = e.i(91983),
      i = e.i(43871),
      a = e.i(8872),
      n = e.i(31763);
    let o = (0, n.default)("menu", [
        ["path", { d: "M4 5h16", key: "1tepv9" }],
        ["path", { d: "M4 12h16", key: "1lakjw" }],
        ["path", { d: "M4 19h16", key: "1djgab" }],
      ]),
      s = (0, n.default)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]),
      l = [
        { label: "Home", href: "#hero" },
        { label: "The True Story", href: "#episodes" },
        { label: "Whitepaper", href: "#whitepaper" },
        { label: "Tokenomics", href: "#tokenomics" },
        { label: "Audit", href: "#audit" },
        { label: "Official Links", href: "#links" },
        { label: "Contact", href: "#contact" },
      ];
    e.s(
      [
        "Navbar",
        0,
        function () {
          let [e, n] = (0, r.useState)(!1),
            [d, c] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              let e = () => n(window.scrollY > 20);
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, t.jsxs)("header", {
              className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                e
                  ? "bg-background/90 backdrop-blur-md border-b border-border"
                  : "bg-transparent"
              }`,
              children: [
                (0, t.jsxs)("nav", {
                  className: "flex items-center h-[56px] px-8",
                  "aria-label": "Main navigation",
                  children: [
                    (0, t.jsx)(i.default, {
                      href: "#hero",
                      className: "shrink-0 mr-12",
                      "aria-label": "$SPCX - home",
                      children: (0, t.jsx)(a.default, {
                        src: "/images/spcx-logo-v2.png",
                        alt: "$SPCX",
                        width: 160,
                        height: 36,
                        className: "h-9 w-auto object-contain",
                        priority: !0,
                      }),
                    }),
                    (0, t.jsx)("ul", {
                      className: "hidden md:flex items-center gap-9",
                      role: "list",
                      children: l.map((e) =>
                        (0, t.jsx)(
                          "li",
                          {
                            children: (0, t.jsx)(i.default, {
                              href: e.href,
                              className:
                                "text-white/80 hover:text-white text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-150 whitespace-nowrap",
                              style: { fontFamily: "var(--font-display)" },
                              children: e.label,
                            }),
                          },
                          e.href
                        )
                      ),
                    }),
                    (0, t.jsx)("button", {
                      className: "md:hidden ml-auto text-foreground p-2",
                      onClick: () => c((e) => !e),
                      "aria-label": d ? "Close menu" : "Open menu",
                      "aria-expanded": d,
                      children: d
                        ? (0, t.jsx)(s, { size: 20 })
                        : (0, t.jsx)(o, { size: 20 }),
                    }),
                  ],
                }),
                d &&
                  (0, t.jsx)("div", {
                    className:
                      "md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 flex flex-col gap-6",
                    children: l.map((e) =>
                      (0, t.jsx)(
                        i.default,
                        {
                          href: e.href,
                          onClick: () => c(!1),
                          className:
                            "text-foreground/80 hover:text-foreground text-sm uppercase tracking-widest transition-colors duration-200",
                          children: e.label,
                        },
                        e.href
                      )
                    ),
                  }),
              ],
            })
          );
        },
      ],
      63780
    );
  },
  98924,
  (e) => {
    "use strict";
    var t = e.i(77117),
      r = e.i(8872);
    let i = (0, e.i(31763).default)("chevron-down", [
      ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
    ]);
    var a = e.i(91983);
    e.s(
      [
        "HeroSection",
        0,
        function ({
          id: e,
          imageSrc: n,
          imageAlt: o,
          title: s,
          subtitle: l,
          subtitleNode: d,
          nextHref: c,
          nextLabel: p,
          overlayIntensity: h = "medium",
          titlePosition: g = "bottom-center",
          badge: f,
          imageObjectPosition: x = "center top",
          imageObjectPositionMobile: u,
          imageObjectFit: m = "cover",
          heightClass: b = "min-h-screen",
          mobileHeightClass: y,
        }) {
          let v = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              if (!u) return;
              let e = () => {
                v.current &&
                  (v.current.style.objectPosition =
                    window.innerWidth < 768 ? u : x);
              };
              return (
                e(),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, [x, u]),
            (0, t.jsxs)("section", {
              id: e,
              className: `relative w-full ${
                y ? `max-md:${y}` : ""
              } ${b} flex flex-col`,
              "aria-labelledby": `${e}-title`,
              children: [
                (0, t.jsxs)("div", {
                  className: "absolute inset-0 overflow-hidden bg-black",
                  children: [
                    (0, t.jsx)(r.default, {
                      ref: v,
                      src: n,
                      alt: o,
                      fill: !0,
                      priority: !0,
                      className: `${
                        "contain" === m ? "object-contain" : "object-cover"
                      } animate-ken-burns`,
                      style: { objectPosition: x, objectFit: m },
                      sizes: "100vw",
                    }),
                    (0, t.jsx)("div", {
                      className: `absolute inset-0 ${
                        {
                          light: "bg-black/20",
                          medium: "bg-black/40",
                          heavy: "bg-black/60",
                        }[h]
                      }`,
                      "aria-hidden": "true",
                    }),
                    (0, t.jsx)("div", {
                      className: "absolute bottom-0 left-0 right-0 h-1/2",
                      style: {
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                      },
                      "aria-hidden": "true",
                    }),
                    (0, t.jsx)("div", {
                      className: "absolute inset-0 hidden md:block",
                      style: {
                        background:
                          "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 60%)",
                      },
                      "aria-hidden": "true",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute bottom-20 left-0 right-0 z-10 px-5 md:px-16 lg:px-24",
                  children: (0, t.jsxs)("div", {
                    className: `${
                      "bottom-center" === g
                        ? "flex flex-col items-center text-center"
                        : "flex flex-col items-start text-left"
                    } max-w-4xl ${"bottom-center" === g ? "mx-auto" : ""}`,
                    children: [
                      f &&
                        (0, t.jsx)("span", {
                          className:
                            "inline-block text-[11px] uppercase tracking-[0.25em] text-white/60 border border-white/30 px-3 py-1 mb-4",
                          style: { fontFamily: "var(--font-display)" },
                          children: f,
                        }),
                      (0, t.jsx)("h2", {
                        id: `${e}-title`,
                        className:
                          "font-bold text-white uppercase tracking-wide max-md:!text-[1.45rem] max-md:!leading-[1.15]",
                        style: {
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: "clamp(1rem, 1.8vw, 1.6rem)",
                          lineHeight: 1.15,
                        },
                        children: s,
                      }),
                      (l || d) &&
                        (0, t.jsx)("div", {
                          className:
                            "mt-3 text-[12px] md:text-[13px] text-white/70 max-md:mt-2",
                          style: {
                            fontFamily: "var(--font-sans)",
                            fontWeight: 300,
                          },
                          children:
                            d ||
                            l.split("\n").map((e, r) =>
                              (0, t.jsx)(
                                "span",
                                {
                                  style: {
                                    display: "block",
                                    marginTop: 6 * (r > 0),
                                    lineHeight: 1.6,
                                  },
                                  children: e,
                                },
                                r
                              )
                            ),
                        }),
                    ],
                  }),
                }),
                (0, t.jsx)("style", {
                  children: `
        @keyframes tx-blink  { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        @keyframes tx-scan   { 0%{top:-1px} 100%{top:100%} }
        @keyframes tx-pulse  {
          0%,100%{ box-shadow: 0 0 0 0 rgba(251,191,36,0), 0 0 20px rgba(251,191,36,.2) }
          50%    { box-shadow: 0 0 0 8px rgba(251,191,36,.08), 0 0 48px rgba(251,191,36,.55) }
        }
        @keyframes tx-playnow {
          0%,100%{
            background-position: 0% 50%;
            text-shadow: 0 0 20px rgba(251,191,36,.8);
            letter-spacing: 5px;
          }
          50%{
            background-position: 100% 50%;
            text-shadow: 0 0 40px rgba(251,191,36,1), 0 0 80px rgba(251,191,36,.5);
            letter-spacing: 8px;
          }
        }
        @keyframes tx-bar    { 0%,100%{width:15%} 50%{width:92%} }
        @keyframes tx-dot    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.5)} }
        @keyframes tx-enter  { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .tx-card { animation: tx-pulse 3s ease-in-out infinite; transition: transform .3s ease, filter .3s ease; }
        .tx-card:hover { transform: translateY(-4px) scale(1.02) !important; filter: brightness(1.15); }
        .tx-card:hover .tx-scan-line { animation-duration: 1s !important; }
      `,
                }),
                (0, t.jsxs)("div", {
                  className:
                    "absolute bottom-0 left-0 right-0 z-10 flex items-end justify-center pb-5 gap-8",
                  style: { animation: "tx-enter .8s .4s ease both" },
                  children: [
                    (0, t.jsxs)("a", {
                      href: c,
                      className: "flex flex-col items-center gap-1 group pb-2",
                      "aria-label": p,
                      children: [
                        (0, t.jsx)("span", {
                          className:
                            "text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors duration-200",
                          style: { fontFamily: "var(--font-display)" },
                          children: p,
                        }),
                        (0, t.jsx)(i, {
                          size: 18,
                          className:
                            "text-white/60 group-hover:text-white transition-all duration-200 group-hover:translate-y-1",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("a", {
                      href: "/game",
                      "aria-label": "Play the $SPCX Card Game",
                      className: "tx-card",
                      style: {
                        display: "block",
                        textDecoration: "none",
                        position: "relative",
                        width: 220,
                        background: "rgba(6,4,0,0.93)",
                        border: "1px solid rgba(251,191,36,0.55)",
                        overflow: "hidden",
                        cursor: "pointer",
                        backdropFilter: "blur(12px)",
                      },
                      children: [
                        (0, t.jsx)("div", {
                          className: "tx-scan-line",
                          "aria-hidden": !0,
                          style: {
                            position: "absolute",
                            left: 0,
                            right: 0,
                            height: "1px",
                            background:
                              "linear-gradient(to right,transparent,rgba(251,191,36,.5),transparent)",
                            animation: "tx-scan 2.5s linear infinite",
                            pointerEvents: "none",
                            zIndex: 5,
                          },
                        }),
                        [
                          {
                            top: 0,
                            left: 0,
                            borderTop: "2px solid #fbbf24",
                            borderLeft: "2px solid #fbbf24",
                          },
                          {
                            top: 0,
                            right: 0,
                            borderTop: "2px solid #fbbf24",
                            borderRight: "2px solid #fbbf24",
                          },
                          {
                            bottom: 0,
                            left: 0,
                            borderBottom: "2px solid #fbbf24",
                            borderLeft: "2px solid #fbbf24",
                          },
                          {
                            bottom: 0,
                            right: 0,
                            borderBottom: "2px solid #fbbf24",
                            borderRight: "2px solid #fbbf24",
                          },
                        ].map((e, r) =>
                          (0, t.jsx)(
                            "span",
                            {
                              "aria-hidden": !0,
                              style: {
                                position: "absolute",
                                width: 10,
                                height: 10,
                                ...e,
                                zIndex: 6,
                              },
                            },
                            r
                          )
                        ),
                        (0, t.jsxs)("div", {
                          style: {
                            background: "#fbbf24",
                            padding: "3px 10px",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          },
                          children: [
                            (0, t.jsx)("span", {
                              "aria-hidden": !0,
                              style: {
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: "#000",
                                animation: "tx-dot 1s ease-in-out infinite",
                                flexShrink: 0,
                              },
                            }),
                            (0, t.jsx)("span", {
                              style: {
                                fontFamily: "monospace",
                                fontWeight: 700,
                                fontSize: "7px",
                                letterSpacing: "2.5px",
                                color: "#000",
                                textTransform: "uppercase",
                              },
                              children: "INCOMING TRANSMISSION",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          style: { padding: "12px 14px 14px" },
                          children: [
                            (0, t.jsx)("div", {
                              style: {
                                fontFamily: "monospace",
                                fontSize: "8px",
                                letterSpacing: "2px",
                                color: "rgba(251,191,36,.5)",
                                textTransform: "uppercase",
                                marginBottom: 8,
                              },
                              children: "// $SPCX CARD GAME — BETA",
                            }),
                            (0, t.jsxs)("div", {
                              style: {
                                fontFamily: "var(--font-display)",
                                fontWeight: 900,
                                fontSize: "20px",
                                letterSpacing: "-0.5px",
                                lineHeight: 1,
                                color: "#fff",
                                textTransform: "uppercase",
                                marginBottom: 10,
                              },
                              children: [
                                "WHO CONTROLS",
                                (0, t.jsx)("br", {}),
                                (0, t.jsx)("span", {
                                  style: { color: "#fbbf24" },
                                  children: "THE DECK",
                                }),
                                (0, t.jsx)("br", {}),
                                "CONTROLS IT ALL.",
                              ],
                            }),
                            (0, t.jsx)("div", {
                              style: {
                                height: "2px",
                                background: "rgba(251,191,36,.12)",
                                marginBottom: 12,
                                position: "relative",
                                overflow: "hidden",
                              },
                              children: (0, t.jsx)("div", {
                                style: {
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  height: "100%",
                                  background:
                                    "linear-gradient(to right, #f59e0b, #fbbf24, #fde68a)",
                                  boxShadow: "0 0 8px #fbbf24",
                                  animation: "tx-bar 2s ease-in-out infinite",
                                },
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              },
                              children: [
                                (0, t.jsx)("div", {
                                  style: {
                                    fontFamily: "var(--font-display)",
                                    fontWeight: 900,
                                    fontSize: "16px",
                                    textTransform: "uppercase",
                                    background:
                                      "linear-gradient(90deg,#f59e0b,#fbbf24,#fde68a,#fbbf24)",
                                    backgroundSize: "300% 100%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    animation:
                                      "tx-playnow 2s ease-in-out infinite",
                                  },
                                  children: "PLAY NOW",
                                }),
                                (0, t.jsxs)("div", {
                                  style: {
                                    fontFamily: "monospace",
                                    fontSize: "8px",
                                    letterSpacing: "1px",
                                    color: "rgba(255,255,255,0.3)",
                                    textTransform: "uppercase",
                                  },
                                  children: [
                                    (0, t.jsx)("span", {
                                      style: {
                                        animation:
                                          "tx-blink 1s step-end infinite",
                                        display: "inline-block",
                                      },
                                      children: "_",
                                    }),
                                    " ENTER",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
      ],
      98924
    );
  },
  25661,
  (e, t, r) => {
    "use strict";
    var i = e.r(91983),
      a =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      n = i.useState,
      o = i.useEffect,
      s = i.useLayoutEffect,
      l = i.useDebugValue;
    function d(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !a(e, r);
      } catch (e) {
        return !0;
      }
    }
    var c =
      "u" < typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
        ? function (e, t) {
            return t();
          }
        : function (e, t) {
            var r = t(),
              i = n({ inst: { value: r, getSnapshot: t } }),
              a = i[0].inst,
              c = i[1];
            return (
              s(
                function () {
                  (a.value = r), (a.getSnapshot = t), d(a) && c({ inst: a });
                },
                [e, r, t]
              ),
              o(
                function () {
                  return (
                    d(a) && c({ inst: a }),
                    e(function () {
                      d(a) && c({ inst: a });
                    })
                  );
                },
                [e]
              ),
              l(r),
              r
            );
          };
    r.useSyncExternalStore =
      void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : c;
  },
  56032,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(25661);
  },
  66373,
  (e) => {
    "use strict";
    let t;
    var r = e.i(77117),
      i = e.i(91983),
      a = e.i(56032);
    e.s(
      [
        "ERROR_REVALIDATE_EVENT",
        0,
        3,
        "FOCUS_EVENT",
        0,
        0,
        "MUTATE_EVENT",
        0,
        2,
        "RECONNECT_EVENT",
        0,
        1,
      ],
      67005
    );
    var n = Object.prototype.hasOwnProperty;
    let o = new WeakMap(),
      s = () => {},
      l = s(),
      d = Object,
      c = (e) => e === l,
      p = (e, t) => ({ ...e, ...t }),
      h = {},
      g = {},
      f = "undefined",
      x = typeof window != f,
      u = typeof document != f,
      m = x && "Deno" in window,
      b = (e, t) => {
        let r = o.get(e);
        return [
          () => (!c(t) && e.get(t)) || h,
          (i) => {
            if (!c(t)) {
              let a = e.get(t);
              t in g || (g[t] = a), r[5](t, p(a, i), a || h);
            }
          },
          r[6],
          () => (!c(t) && t in g ? g[t] : (!c(t) && e.get(t)) || h),
        ];
      },
      y = !0,
      [v, w] =
        x && window.addEventListener
          ? [
              window.addEventListener.bind(window),
              window.removeEventListener.bind(window),
            ]
          : [s, s],
      k = {
        initFocus: (e) => (
          u && document.addEventListener("visibilitychange", e),
          v("focus", e),
          () => {
            u && document.removeEventListener("visibilitychange", e),
              w("focus", e);
          }
        ),
        initReconnect: (e) => {
          let t = () => {
              (y = !0), e();
            },
            r = () => {
              y = !1;
            };
          return (
            v("online", t),
            v("offline", r),
            () => {
              w("online", t), w("offline", r);
            }
          );
        },
      },
      j = !i.default.useId,
      S = !x || m,
      T = S ? i.useEffect : i.useLayoutEffect,
      I = "u" > typeof navigator && navigator.connection,
      E =
        !S && I && (["slow-2g", "2g"].includes(I.effectiveType) || I.saveData),
      C = new WeakMap(),
      L = (e, t) => e === `[object ${t}]`,
      R = 0,
      N = (e) => {
        let t,
          r,
          i = typeof e,
          a = d.prototype.toString.call(e),
          n = L(a, "Date"),
          o = L(a, "RegExp"),
          s = L(a, "Object");
        if (d(e) !== e || n || o)
          t = n
            ? e.toJSON()
            : "symbol" == i
            ? e.toString()
            : "string" == i
            ? JSON.stringify(e)
            : "" + e;
        else {
          if ((t = C.get(e))) return t;
          if (((t = ++R + "~"), C.set(e, t), Array.isArray(e))) {
            for (r = 0, t = "@"; r < e.length; r++) t += N(e[r]) + ",";
            C.set(e, t);
          }
          if (s) {
            t = "#";
            let i = d.keys(e).sort();
            for (; !c((r = i.pop())); )
              c(e[r]) || (t += r + ":" + N(e[r]) + ",");
            C.set(e, t);
          }
        }
        return t;
      },
      W = (e) => {
        if ("function" == typeof e)
          try {
            e = e();
          } catch (t) {
            e = "";
          }
        let t = e;
        return [
          (e =
            "string" == typeof e
              ? e
              : (Array.isArray(e) ? e.length : e)
              ? N(e)
              : ""),
          t,
        ];
      },
      z = 0,
      A = () => ++z;
    async function M(...e) {
      let [t, r, i, a] = e,
        n = p(
          { populateCache: !0, throwOnError: !0 },
          "boolean" == typeof a ? { revalidate: a } : a || {}
        ),
        s = n.populateCache,
        d = n.rollbackOnError,
        h = n.optimisticData,
        g = n.throwOnError;
      if ("function" == typeof r) {
        let e = [];
        for (let i of t.keys())
          !/^\$(inf|sub)\$/.test(i) && r(t.get(i)._k) && e.push(i);
        return Promise.all(e.map(f));
      }
      return f(r);
      async function f(r) {
        let a,
          [p] = W(r);
        if (!p) return;
        let [f, x] = b(t, p),
          [u, m, y, v] = o.get(t),
          w = () => {
            let e = u[p];
            return ("function" == typeof n.revalidate
              ? n.revalidate(f().data, r)
              : !1 !== n.revalidate) && (delete y[p], delete v[p], e && e[0])
              ? e[0](2).then(() => f().data)
              : f().data;
          };
        if (e.length < 3) return w();
        let k = i,
          j = !1,
          S = A();
        m[p] = [S, 0];
        let T = !c(h),
          I = f(),
          E = I.data,
          C = I._c,
          L = c(C) ? E : C;
        if (
          (T && x({ data: (h = "function" == typeof h ? h(L, E) : h), _c: L }),
          "function" == typeof k)
        )
          try {
            k = k(L);
          } catch (e) {
            (a = e), (j = !0);
          }
        if (k && "function" == typeof k.then) {
          let e;
          if (
            ((k = await k.catch((e) => {
              (a = e), (j = !0);
            })),
            S !== m[p][0])
          ) {
            if (j) throw a;
            return k;
          }
          j &&
            T &&
            ((e = a), "function" == typeof d ? d(e) : !1 !== d) &&
            ((s = !0), x({ data: L, _c: l }));
        }
        if (
          (s &&
            !j &&
            ("function" == typeof s
              ? x({ data: s(k, L), error: l, _c: l })
              : x({ data: k, error: l, _c: l })),
          (m[p][1] = A()),
          Promise.resolve(w()).then(() => {
            x({ _c: l });
          }),
          j)
        ) {
          if (g) throw a;
          return;
        }
        return k;
      }
    }
    let $ = (e, t) => {
        for (let r in e) e[r][0] && e[r][0](t);
      },
      F = (e, t) => {
        if (!o.has(e)) {
          let r = p(k, t),
            i = Object.create(null),
            a = M.bind(l, e),
            n = s,
            d = Object.create(null),
            c = (e, t) => {
              let r = d[e] || [];
              return (d[e] = r), r.push(t), () => r.splice(r.indexOf(t), 1);
            },
            h = (t, r, i) => {
              e.set(t, r);
              let a = d[t];
              if (a) for (let e of a) e(r, i);
            },
            g = () => {
              if (
                !o.has(e) &&
                (o.set(e, [
                  i,
                  Object.create(null),
                  Object.create(null),
                  Object.create(null),
                  a,
                  h,
                  c,
                ]),
                !S)
              ) {
                let t = r.initFocus(setTimeout.bind(l, $.bind(l, i, 0))),
                  a = r.initReconnect(setTimeout.bind(l, $.bind(l, i, 1)));
                n = () => {
                  t && t(), a && a(), o.delete(e);
                };
              }
            };
          return g(), [e, a, g, n];
        }
        return [e, o.get(e)[4]];
      },
      [P, O] = F(new Map()),
      B = p(
        {
          onLoadingSlow: s,
          onSuccess: s,
          onError: s,
          onErrorRetry: (e, t, r, i, a) => {
            let n = r.errorRetryCount,
              o = a.retryCount,
              s =
                ~~((Math.random() + 0.5) * (1 << (o < 8 ? o : 8))) *
                r.errorRetryInterval;
            (c(n) || !(o > n)) && setTimeout(i, s, a);
          },
          onDiscarded: s,
          revalidateOnFocus: !0,
          revalidateOnReconnect: !0,
          revalidateIfStale: !0,
          shouldRetryOnError: !0,
          errorRetryInterval: E ? 1e4 : 5e3,
          focusThrottleInterval: 5e3,
          dedupingInterval: 2e3,
          loadingTimeout: E ? 5e3 : 3e3,
          compare: function e(t, r) {
            var i, a;
            if (t === r) return !0;
            if (t && r && (i = t.constructor) === r.constructor) {
              if (i === Date) return t.getTime() === r.getTime();
              if (i === RegExp) return t.toString() === r.toString();
              if (i === Array) {
                if ((a = t.length) === r.length) for (; a-- && e(t[a], r[a]); );
                return -1 === a;
              }
              if (!i || "object" == typeof t) {
                for (i in ((a = 0), t))
                  if (
                    (n.call(t, i) && ++a && !n.call(r, i)) ||
                    !(i in r) ||
                    !e(t[i], r[i])
                  )
                    return !1;
                return Object.keys(r).length === a;
              }
            }
            return t != t && r != r;
          },
          isPaused: () => !1,
          cache: P,
          mutate: O,
          fallback: {},
        },
        {
          isOnline: () => y,
          isVisible: () => {
            let e = u && document.visibilityState;
            return c(e) || "hidden" !== e;
          },
        }
      ),
      X = (e, t) => {
        let r = p(e, t);
        if (t) {
          let { use: i, fallback: a } = e,
            { use: n, fallback: o } = t;
          i && n && (r.use = i.concat(n)), a && o && (r.fallback = p(a, o));
        }
        return r;
      },
      D = (0, i.createContext)({});
    var H = e.i(67005);
    let _ = x && window.__SWR_DEVTOOLS_USE__,
      U = (_ ? window.__SWR_DEVTOOLS_USE__ : []).concat((e) => (t, r, i) => {
        let a =
          r &&
          ((...e) => {
            let [i] = W(t),
              [, , , a] = o.get(P);
            if (i.startsWith("$inf$")) return r(...e);
            let n = a[i];
            return c(n) ? r(...e) : (delete a[i], n);
          });
        return e(t, a, i);
      });
    _ && (window.__SWR_DEVTOOLS_REACT__ = i.default);
    let V = () => {},
      Y = V(),
      G =
        (new WeakMap(),
        i.default.use ||
          ((e) => {
            switch (e.status) {
              case "pending":
                throw e;
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                throw (
                  ((e.status = "pending"),
                  e.then(
                    (t) => {
                      (e.status = "fulfilled"), (e.value = t);
                    },
                    (t) => {
                      (e.status = "rejected"), (e.reason = t);
                    }
                  ),
                  e)
                );
            }
          })),
      K = { dedupe: !0 },
      q = Promise.resolve(l),
      Z = () => s;
    d.defineProperty(
      (e) => {
        let { value: t } = e,
          r = (0, i.useContext)(D),
          a = "function" == typeof t,
          n = (0, i.useMemo)(() => (a ? t(r) : t), [a, r, t]),
          o = (0, i.useMemo)(() => (a ? n : X(r, n)), [a, r, n]),
          s = n && n.provider,
          d = (0, i.useRef)(l);
        s && !d.current && (d.current = F(s(o.cache || P), n));
        let c = d.current;
        return (
          c && ((o.cache = c[0]), (o.mutate = c[1])),
          T(() => {
            if (c) return c[2] && c[2](), c[3];
          }, []),
          (0, i.createElement)(D.Provider, p(e, { value: o }))
        );
      },
      "defaultValue",
      { value: B }
    );
    let J =
        ((t = (e, t, r) => {
          let {
              cache: n,
              compare: s,
              suspense: d,
              fallbackData: h,
              revalidateOnMount: g,
              revalidateIfStale: u,
              refreshInterval: m,
              refreshWhenHidden: y,
              refreshWhenOffline: v,
              keepPreviousData: w,
              strictServerPrefetchWarning: k,
            } = r,
            [I, E, C, L] = o.get(n),
            [R, N] = W(e),
            z = (0, i.useRef)(!1),
            $ = (0, i.useRef)(!1),
            F = (0, i.useRef)(R),
            P = (0, i.useRef)(t),
            O = (0, i.useRef)(r),
            B = () => O.current.isVisible() && O.current.isOnline(),
            [X, D, _, U] = b(n, R),
            V = (0, i.useRef)({}).current,
            Y = c(h) ? (c(r.fallback) ? l : r.fallback[R]) : h,
            J = (e, t) => {
              for (let r in V)
                if ("data" === r) {
                  if (!s(e[r], t[r]) && (!c(e[r]) || !s(es, t[r]))) return !1;
                } else if (t[r] !== e[r]) return !1;
              return !0;
            },
            Q = !z.current,
            ee = (0, i.useMemo)(() => {
              let e = X(),
                r = U(),
                i = (e) => {
                  let r = p(e);
                  return (delete r._k,
                  (() => {
                    if (!R || !t || O.current.isPaused()) return !1;
                    if (Q && !c(g)) return g;
                    let e = c(Y) ? r.data : Y;
                    return c(e) || u;
                  })())
                    ? { isValidating: !0, isLoading: !0, ...r }
                    : r;
                },
                a = i(e),
                n = e === r ? a : i(r),
                o = a;
              return [
                () => {
                  let e = i(X());
                  return J(e, o)
                    ? ((o.data = e.data),
                      (o.isLoading = e.isLoading),
                      (o.isValidating = e.isValidating),
                      (o.error = e.error),
                      o)
                    : ((o = e), e);
                },
                () => n,
              ];
            }, [n, R]),
            et = (0, a.useSyncExternalStore)(
              (0, i.useCallback)(
                (e) =>
                  _(R, (t, r) => {
                    J(r, t) || e();
                  }),
                [n, R]
              ),
              ee[0],
              ee[1]
            ),
            er = I[R] && I[R].length > 0,
            ei = et.data,
            ea = c(ei) ? (Y && "function" == typeof Y.then ? G(Y) : Y) : ei,
            en = et.error,
            eo = (0, i.useRef)(ea),
            es = w ? (c(ei) ? (c(eo.current) ? ea : eo.current) : ei) : ea,
            el = R && c(ea),
            ed = (0, i.useRef)(null);
          S ||
            (0, a.useSyncExternalStore)(
              Z,
              () => ((ed.current = !1), ed),
              () => ((ed.current = !0), ed)
            );
          let ec = ed.current;
          k &&
            ec &&
            !d &&
            el &&
            console.warn(
              `Missing pre-initiated data for serialized key "${R}" during server-side rendering. Data fetching should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`
            );
          let ep =
              !(!R || !t || O.current.isPaused()) &&
              (!er || !!c(en)) &&
              (Q && !c(g) ? g : d ? !c(ea) && u : c(ea) || u),
            eh = Q && ep,
            eg = c(et.isValidating) ? eh : et.isValidating,
            ef = c(et.isLoading) ? eh : et.isLoading,
            ex = (0, i.useCallback)(
              async (e) => {
                let t,
                  i,
                  a = P.current;
                if (!R || !a || $.current || O.current.isPaused()) return !1;
                let n = !0,
                  o = e || {},
                  d = !C[R] || !o.dedupe,
                  p = () =>
                    j
                      ? !$.current && R === F.current && z.current
                      : R === F.current,
                  h = { isValidating: !1, isLoading: !1 },
                  g = () => {
                    D(h);
                  },
                  f = () => {
                    let e = C[R];
                    e && e[1] === i && delete C[R];
                  },
                  x = { isValidating: !0 };
                c(X().data) && (x.isLoading = !0);
                try {
                  if (
                    (d &&
                      (D(x),
                      r.loadingTimeout &&
                        c(X().data) &&
                        setTimeout(() => {
                          n && p() && O.current.onLoadingSlow(R, r);
                        }, r.loadingTimeout),
                      (C[R] = [a(N), A()])),
                    ([t, i] = C[R]),
                    (t = await t),
                    d && setTimeout(f, r.dedupingInterval),
                    !C[R] || C[R][1] !== i)
                  )
                    return d && p() && O.current.onDiscarded(R), !1;
                  h.error = l;
                  let e = E[R];
                  if (!c(e) && (i <= e[0] || i <= e[1] || 0 === e[1]))
                    return g(), d && p() && O.current.onDiscarded(R), !1;
                  let o = X().data;
                  (h.data = s(o, t) ? o : t),
                    d && p() && O.current.onSuccess(t, R, r);
                } catch (r) {
                  f();
                  let e = O.current,
                    { shouldRetryOnError: t } = e;
                  !e.isPaused() &&
                    ((h.error = r), d && p()) &&
                    (e.onError(r, R, e),
                    (!0 === t || ("function" == typeof t && t(r))) &&
                      (!O.current.revalidateOnFocus ||
                        !O.current.revalidateOnReconnect ||
                        B()) &&
                      e.onErrorRetry(
                        r,
                        R,
                        e,
                        (e) => {
                          let t = I[R];
                          t && t[0] && t[0](H.ERROR_REVALIDATE_EVENT, e);
                        },
                        { retryCount: (o.retryCount || 0) + 1, dedupe: !0 }
                      ));
                }
                return (n = !1), g(), !0;
              },
              [R, n]
            ),
            eu = (0, i.useCallback)((...e) => M(n, F.current, ...e), []);
          if (
            (T(() => {
              (P.current = t), (O.current = r), c(ei) || (eo.current = ei);
            }),
            T(() => {
              var e;
              let t;
              if (!R) return;
              let r = ex.bind(l, K),
                i = 0;
              O.current.revalidateOnFocus &&
                (i = Date.now() + O.current.focusThrottleInterval);
              let a =
                ((e = (e, t = {}) => {
                  if (e == H.FOCUS_EVENT) {
                    let e = Date.now();
                    O.current.revalidateOnFocus &&
                      e > i &&
                      B() &&
                      ((i = e + O.current.focusThrottleInterval), r());
                  } else if (e == H.RECONNECT_EVENT)
                    O.current.revalidateOnReconnect && B() && r();
                  else if (e == H.MUTATE_EVENT) return ex();
                  else if (e == H.ERROR_REVALIDATE_EVENT) return ex(t);
                }),
                (t = I[R] || (I[R] = [])).push(e),
                () => {
                  let r = t.indexOf(e);
                  r >= 0 && ((t[r] = t[t.length - 1]), t.pop());
                });
              if (
                (($.current = !1),
                (F.current = R),
                (z.current = !0),
                D({ _k: N }),
                ep && !C[R])
              )
                if (c(ea) || S) r();
                else
                  x && typeof window.requestAnimationFrame != f
                    ? window.requestAnimationFrame(r)
                    : setTimeout(r, 1);
              return () => {
                ($.current = !0), a();
              };
            }, [R]),
            T(() => {
              let e;
              function t() {
                let t = "function" == typeof m ? m(X().data) : m;
                t && -1 !== e && (e = setTimeout(r, t));
              }
              function r() {
                !X().error &&
                (y || O.current.isVisible()) &&
                (v || O.current.isOnline())
                  ? ex(K).then(t)
                  : t();
              }
              return (
                t(),
                () => {
                  e && (clearTimeout(e), (e = -1));
                }
              );
            }, [m, y, v, R]),
            (0, i.useDebugValue)(es),
            d)
          ) {
            if (!j && S && el)
              throw Error(
                "Fallback data is required when using Suspense in SSR."
              );
            el && ((P.current = t), (O.current = r), ($.current = !1));
            let e = L[R];
            if ((G(!c(e) && el ? eu(e) : q), !c(en) && el)) throw en;
            let i = el ? ex(K) : q;
            !c(es) && el && ((i.status = "fulfilled"), (i.value = !0)), G(i);
          }
          return {
            mutate: eu,
            get data() {
              return (V.data = !0), es;
            },
            get error() {
              return (V.error = !0), en;
            },
            get isValidating() {
              return (V.isValidating = !0), eg;
            },
            get isLoading() {
              return (V.isLoading = !0), ef;
            },
          };
        }),
        function (...e) {
          let r,
            a =
              ((r = (0, i.useContext)(D)), (0, i.useMemo)(() => p(B, r), [r])),
            [n, o, s] =
              "function" == typeof e[1]
                ? [e[0], e[1], e[2] || {}]
                : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
            l = X(a, s),
            d = t,
            { use: c } = l,
            h = (c || []).concat(U);
          for (let e = h.length; e--; ) d = h[e](d);
          return d(n, o || l.fetcher || null, l);
        }),
      Q = (e) => fetch(e).then((e) => e.json());
    function ee() {
      return (0, r.jsx)("span", {
        className: "inline-block h-8 w-24 rounded animate-pulse",
        style: { background: "rgba(255,255,255,.07)" },
        "aria-hidden": !0,
      });
    }
    e.s(
      [
        "StatsSection",
        0,
        function () {
          let { data: e, isLoading: t } = J("/api/stats", Q, {
              refreshInterval: 6e4,
              onSuccess: () => {},
            }),
            a = (function () {
              let [e, t] = (0, i.useState)(60);
              return (
                (0, i.useEffect)(() => {
                  t(60);
                  let e = setInterval(() => {
                    t((e) => (e <= 1 ? 60 : e - 1));
                  }, 1e3);
                  return () => clearInterval(e);
                }, [60]),
                e
              );
            })(),
            n = [
              {
                label: "Price",
                value: e?.price,
                accent: e ? (e.isUp ? "#4ade80" : "#f87171") : void 0,
                sub: e
                  ? (0, r.jsxs)("span", {
                      style: {
                        color: e.isUp ? "#4ade80" : "#f87171",
                        fontSize: 11,
                        fontFamily: "monospace",
                        letterSpacing: "1px",
                      },
                      children: [e.priceChange24h, " 24h"],
                    })
                  : null,
              },
              { label: "Market Cap", value: e?.marketCap },
              { label: "Volume 24h", value: e?.volume24h },
              { label: "Liquidity", value: e?.liquidity },
            ];
          return (0, r.jsxs)("section", {
            id: "stats",
            className: "w-full bg-background border-b border-border py-16 px-6",
            "aria-label": "Live token statistics",
            children: [
              (0, r.jsx)("div", {
                className:
                  "max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-border",
                children: n.map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "flex flex-col items-center gap-2 md:px-8",
                      children: [
                        t || !e.value
                          ? (0, r.jsx)(ee, {})
                          : (0, r.jsx)("span", {
                              className:
                                "text-3xl md:text-4xl font-bold tracking-tight",
                              style: {
                                fontFamily: "var(--font-display)",
                                color: e.accent ?? "var(--foreground)",
                              },
                              children: e.value,
                            }),
                        e.sub && !t && (0, r.jsx)("span", { children: e.sub }),
                        (0, r.jsx)("span", {
                          className:
                            "text-[11px] uppercase tracking-[0.2em] text-muted-foreground",
                          style: { fontFamily: "var(--font-display)" },
                          children: e.label,
                        }),
                      ],
                    },
                    e.label
                  )
                ),
              }),
              (0, r.jsx)("div", {
                className: "flex justify-center mt-8 px-4",
                children: (0, r.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto",
                  style: {
                    border: "1px solid rgba(255,255,255,.07)",
                    borderRadius: 2,
                    padding: "12px 20px",
                    background: "rgba(255,255,255,.02)",
                    backdropFilter: "blur(4px)",
                  },
                  children: [
                    (0, r.jsx)("span", {
                      style: {
                        position: "relative",
                        width: 8,
                        height: 8,
                        flexShrink: 0,
                      },
                      children: (0, r.jsx)("span", {
                        style: {
                          position: "absolute",
                          inset: 0,
                          borderRadius: "50%",
                          background: "#4ade80",
                          boxShadow: "0 0 8px #4ade80",
                          animation: "pulse 2s infinite",
                        },
                      }),
                    }),
                    (0, r.jsx)("span", {
                      style: {
                        fontFamily: "monospace",
                        fontSize: 11,
                        letterSpacing: "3px",
                        color: "rgba(255,255,255,.45)",
                        textTransform: "uppercase",
                      },
                      children: "Live · DexScreener · BSC",
                    }),
                    (0, r.jsx)("span", {
                      className: "hidden md:inline-block",
                      style: {
                        width: 1,
                        height: 14,
                        background: "rgba(255,255,255,.1)",
                        flexShrink: 0,
                      },
                    }),
                    (0, r.jsxs)("span", {
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontFamily: "monospace",
                        fontSize: 11,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        color:
                          a <= 10
                            ? "rgba(251,191,36,.75)"
                            : "rgba(255,255,255,.3)",
                        transition: "color 0.3s",
                      },
                      children: [
                        "Next update in",
                        (0, r.jsxs)("span", {
                          style: {
                            fontFamily: "monospace",
                            fontSize: 13,
                            fontWeight: 700,
                            color:
                              a <= 10 ? "#fbbf24" : "rgba(255,255,255,.55)",
                            minWidth: 22,
                            textAlign: "right",
                            transition: "color 0.3s",
                          },
                          children: [a, "s"],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
      ],
      66373
    );
  },
  18191,
  (e) => {
    "use strict";
    var t = e.i(77117),
      r = e.i(91983);
    let i = (0, e.i(31763).default)("arrow-up", [
      ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
      ["path", { d: "M12 19V5", key: "x0mq9r" }],
    ]);
    e.s(
      [
        "BackToTop",
        0,
        function () {
          let [e, a] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              let e = () => a(window.scrollY > 400);
              return (
                window.addEventListener("scroll", e, { passive: !0 }),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, t.jsx)("button", {
              onClick: () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              "aria-label": "Voltar ao topo",
              className: [
                "fixed bottom-8 right-8 z-50 w-11 h-11 flex items-center justify-center border border-white/25 bg-black/60 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/60 hover:bg-black/80 transition-all duration-300",
                e
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none",
              ].join(" "),
              children: (0, t.jsx)(i, { size: 16, strokeWidth: 1.5 }),
            })
          );
        },
      ],
      18191
    );
  },
  44786,
  (e) => {
    "use strict";
    var t = e.i(77117),
      r = e.i(91983);
    let i = [
      { name: "Starlink", href: "https://x.com/Starlink", x1: 1, x2: 11 },
      { name: "xAI", href: "https://x.com/xai", x1: 11, x2: 21 },
      { name: "Neuralink", href: "https://x.com/neuralink", x1: 22, x2: 33 },
      { name: "X", href: "https://x.com/X", x1: 35, x2: 45 },
      { name: "Tesla", href: "https://x.com/Tesla", x1: 46, x2: 56 },
      { name: "Grok", href: "https://x.com/grok", x1: 58, x2: 68 },
      {
        name: "Boring Company",
        href: "https://x.com/boringcompany",
        x1: 69,
        x2: 79,
      },
      { name: "SpaceX", href: "https://x.com/SpaceX", x1: 80, x2: 94 },
    ];
    e.s([
      "IconsBanner",
      0,
      function () {
        let [e, a] = (0, r.useState)(null);
        return (0, t.jsxs)("section", {
          className: "w-full bg-background border-y border-border py-10 px-8",
          "aria-label": "Reference ecosystem",
          children: [
            (0, t.jsx)("p", {
              className:
                "text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-8",
              style: { fontFamily: "var(--font-display)" },
              children: "Inspired by the ecosystem that is changing the world",
            }),
            (0, t.jsx)("div", {
              className: "flex items-center justify-center",
              children: (0, t.jsxs)("div", {
                className: "relative w-full max-w-3xl",
                style: { lineHeight: 0 },
                children: [
                  (0, t.jsx)("img", {
                    src: "/images/elon-icons.png",
                    alt: "Ecosystem logos: Starlink, xAI, Neuralink, X, Tesla, Grok, Boring Company, SpaceX",
                    className: "w-full h-auto object-contain",
                    style: { opacity: 0.9, display: "block" },
                    onClick: (e) => {
                      let t = e.currentTarget.getBoundingClientRect();
                      console.log(
                        "[v0] click position: " +
                          (((e.clientX - t.left) / t.width) * 100).toFixed(1) +
                          "%"
                      );
                    },
                  }),
                  i.map((r, i) => {
                    let n = {
                      position: "absolute",
                      top: 0,
                      left: `${r.x1}%`,
                      width: `${r.x2 - r.x1}%`,
                      height: "100%",
                    };
                    return (0, t.jsx)(
                      "a",
                      {
                        href: r.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": `${r.name} no X`,
                        onMouseEnter: () => a(i),
                        onMouseLeave: () => a(null),
                        style: {
                          ...n,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          paddingBottom: 4,
                          cursor: "pointer",
                          transition: "background .2s, border-color .2s",
                          background:
                            e === i ? "rgba(79,195,247,.06)" : "transparent",
                          borderBottom:
                            e === i
                              ? "1px solid rgba(79,195,247,.35)"
                              : "1px solid transparent",
                        },
                        children: (0, t.jsx)("span", {
                          style: {
                            position: "absolute",
                            bottom: -24,
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontFamily: "monospace",
                            fontSize: 8,
                            letterSpacing: "2px",
                            color: "rgba(79,195,247,.7)",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                            opacity: +(e === i),
                            transition: "opacity .2s",
                            pointerEvents: "none",
                          },
                          children: r.name,
                        }),
                      },
                      r.name
                    );
                  }),
                ],
              }),
            }),
            (0, t.jsx)("div", { style: { height: 24 } }),
          ],
        });
      },
    ]);
  },
  87344,
  (e) => {
    "use strict";
    var t = e.i(77117),
      r = e.i(8872);
    e.s([
      "PanoramaBanner",
      0,
      function () {
        return (0, t.jsxs)("section", {
          className: "relative w-full overflow-hidden",
          style: { height: "340px" },
          "aria-label": "$SPCX Ecosystem",
          children: [
            (0, t.jsx)("div", {
              className: "absolute inset-0 animate-ken-burns",
              children: (0, t.jsx)(r.default, {
                src: "/images/spcx-ecosystem-wide.png",
                alt: "Elon with SpaceX rockets, Tesla and Mars — the complete ecosystem",
                fill: !0,
                className: "object-cover object-center",
                sizes: "100vw",
              }),
            }),
            (0, t.jsx)("div", {
              className:
                "absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70",
              "aria-hidden": "true",
            }),
            (0, t.jsx)("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60",
              "aria-hidden": "true",
            }),
            (0, t.jsxs)("div", {
              className:
                "relative z-10 h-full flex flex-col items-center justify-center text-center px-6 gap-3",
              children: [
                (0, t.jsx)("span", {
                  className:
                    "text-[11px] uppercase tracking-[0.3em] text-white/50",
                  style: { fontFamily: "var(--font-display)" },
                  children: "The most powerful ecosystem in crypto",
                }),
                (0, t.jsx)("h3", {
                  className:
                    "text-4xl md:text-6xl font-bold text-white uppercase leading-none tracking-wide",
                  style: { fontFamily: "var(--font-display)", fontWeight: 800 },
                  children: "Everything. Everywhere.",
                }),
                (0, t.jsx)("p", {
                  className:
                    "text-white/60 text-[13px] max-w-lg leading-relaxed mt-1",
                  style: { fontFamily: "var(--font-sans)", fontWeight: 300 },
                  children:
                    "SpaceX. Tesla. xAI. X. Starlink. Boring Company. One token that unites all that power.",
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
  61941,
  (e) => {
    "use strict";
    var t = e.i(91983);
    e.s([
      "ScrollReset",
      0,
      function () {
        return (
          (0, t.useEffect)(() => {
            window.scrollTo({ top: 0, behavior: "instant" });
          }, []),
          null
        );
      },
    ]);
  },
  22768,
  (e) => {
    "use strict";
    var t = e.i(77117),
      r = e.i(91983);
    let i = [
        {
          id: "intro",
          num: "01",
          tag: "ORIGIN",
          title: "Introduction",
          content: [
            "$SPCX didn't start as a project.",
            "It started as an observation.",
            "While the market was debating what the ticker for the biggest IPO in history would be… a small group was already positioning.",
            "What began as just a bet on Polymarket evolved. It became a narrative. It became a community. It became a movement.",
            "$SPCX doesn't predict the future. It reveals what's already in motion...",
          ],
        },
        {
          id: "narrative",
          num: "02",
          tag: "INSIGHT",
          title: "The Narrative",
          content: [
            "For over two decades, Elon Musk has been building something the world is still trying to understand.",
            "Different companies. Different sectors. Different moments.",
            "But when you look at them together… they start to feel less like separate companies and more like a system.",
            "$SPCX emerges as the meme version of that hypothesis: What if it was never about separate companies? What if it was always about integration?",
          ],
        },
        {
          id: "concept",
          num: "03",
          tag: "THESIS",
          title: "The Concept",
          content: [
            "$SPCX represents the convergence of three forces:",
            "— Anticipating an inevitable event: the SpaceX IPO",
            "— Meme culture as a vehicle for truth",
            "— The fusion of narrative and market",
            "It is the cultural artifact of a moment in history that most people will only understand in hindsight.",
          ],
        },
        {
          id: "origin",
          num: "04",
          tag: "COMMUNITY",
          title: "The Origin — CTO",
          content: [
            "$SPCX is a CTO — Community Takeover.",
            "There is no traditional founder. No VC. No institutional marketing.",
            "There is: Community. Narrative. Execution.",
            "What started as an abandoned ticker… was recognized. And taken over.",
            "The community didn't follow a leader. The community became the leader.",
          ],
        },
        {
          id: "edge",
          num: "05",
          tag: "ADVANTAGE",
          title: "The Edge",
          content: [
            "Most projects try to create utility, promise innovation, build products.",
            "$SPCX takes a different path.",
            "It observes real patterns. Turns them into narrative. Builds culture around them.",
            "It doesn't sell something new. It reveals what's already happening — exposing what most people never see.",
            "The edge isn't technical. The edge is perception.",
          ],
        },
        {
          id: "ecosystem",
          num: "06",
          tag: "NETWORK",
          title: "Ecosystem",
          content: [
            "$SPCX expands through: X → real-time narrative. Medium → structured lore. TikTok / Memes → viral distribution. Community → coordination.",
            "Each platform has a role. Each post is a piece.",
            "The ecosystem isn't built on code alone. It's built on attention, culture, and the unstoppable force of a story that keeps proving itself right.",
          ],
        },
        {
          id: "lore",
          num: "07",
          tag: "UNIVERSE",
          title: "The Lore",
          content: [
            "The $SPCX story unfolds in episodes.",
            "We're retelling Elon's journey through tweets and real-world moves — as a meme-driven multiverse.",
            "A new chapter drops every day. And it continues…",
            "The lore isn't marketing. It's the engine of the project.",
            "Every episode is a signal. Every holder is a character in the story.",
          ],
        },
        {
          id: "disclaimer",
          num: "08",
          tag: "NOTICE",
          title: "Disclaimer",
          content: [
            "$SPCX is a project rooted in culture and entertainment.",
            "It does not represent equity or ownership in any company, affiliation with real companies or individuals, or financial advice of any kind.",
            "But like any strong narrative… it may be closer to reality than it seems.",
            "Invest only what you can afford to lose. The mission is real. The risk is real too.",
          ],
        },
      ],
      a = [
        { label: "SYS.STATUS: ONLINE", color: "#34d399" },
        { label: "CHAPTERS: 08", color: "rgba(255,255,255,.28)" },
        { label: "REV: CTO-1.0", color: "#4fc3f7" },
        { label: "CHAIN: BSC", color: "#a78bfa" },
        { label: "TICKER: $SPCX", color: "#fbbf24" },
        { label: "SUPPLY: 1,000,000,000", color: "rgba(255,255,255,.28)" },
        { label: "LP: BURNED", color: "#f87171" },
        { label: "TAXES: 0% / 0%", color: "#34d399" },
        { label: "MINT: REVOKED", color: "#4fc3f7" },
        { label: "FREEZE: REVOKED", color: "#4fc3f7" },
      ],
      n = [
        { base: "#4fc3f7", glow: "rgba(79,195,247,.25)" },
        { base: "#a78bfa", glow: "rgba(167,139,250,.25)" },
        { base: "#34d399", glow: "rgba(52,211,153,.25)" },
        { base: "#fb923c", glow: "rgba(251,146,60,.25)" },
        { base: "#f472b6", glow: "rgba(244,114,182,.25)" },
        { base: "#38bdf8", glow: "rgba(56,189,248,.25)" },
        { base: "#fbbf24", glow: "rgba(251,191,36,.25)" },
        { base: "#f87171", glow: "rgba(248,113,113,.25)" },
      ];
    function o({ i: e, active: r }) {
      let i = n[e] ?? n[0],
        a = r ? i.base : "rgba(255,255,255,0.25)",
        s = [
          (0, t.jsxs)(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              children: [
                (0, t.jsx)("circle", {
                  cx: "10",
                  cy: "10",
                  r: "8",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("circle", {
                  cx: "10",
                  cy: "10",
                  r: "4.5",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("circle", { cx: "10", cy: "10", r: "1.5", fill: a }),
                (0, t.jsx)("line", {
                  x1: "10",
                  y1: "1",
                  x2: "10",
                  y2: "3.5",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("line", {
                  x1: "10",
                  y1: "16.5",
                  x2: "10",
                  y2: "19",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("line", {
                  x1: "1",
                  y1: "10",
                  x2: "3.5",
                  y2: "10",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("line", {
                  x1: "16.5",
                  y1: "10",
                  x2: "19",
                  y2: "10",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
              ],
            },
            "i"
          ),
          (0, t.jsxs)(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              children: [
                (0, t.jsx)("polygon", {
                  points: "10,2 17,6 17,14 10,18 3,14 3,6",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("polygon", {
                  points: "10,5.5 13,8.5 12,12 8,12 7,8.5",
                  stroke: a,
                  strokeWidth: "1",
                  fill: r ? `${i.glow}` : "none",
                }),
              ],
            },
            "n"
          ),
          (0, t.jsxs)(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              children: [
                (0, t.jsx)("ellipse", {
                  cx: "10",
                  cy: "10",
                  rx: "8.5",
                  ry: "3.5",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("ellipse", {
                  cx: "10",
                  cy: "10",
                  rx: "8.5",
                  ry: "3.5",
                  stroke: a,
                  strokeWidth: "1.1",
                  transform: "rotate(60 10 10)",
                }),
                (0, t.jsx)("ellipse", {
                  cx: "10",
                  cy: "10",
                  rx: "8.5",
                  ry: "3.5",
                  stroke: a,
                  strokeWidth: "1.1",
                  transform: "rotate(120 10 10)",
                }),
                (0, t.jsx)("circle", { cx: "10", cy: "10", r: "1.8", fill: a }),
              ],
            },
            "c"
          ),
          (0, t.jsxs)(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              children: [
                (0, t.jsx)("path", {
                  d: "M10 2L18 6.5V13.5L10 18L2 13.5V6.5Z",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("line", {
                  x1: "10",
                  y1: "6",
                  x2: "10",
                  y2: "14",
                  stroke: a,
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                }),
                (0, t.jsx)("line", {
                  x1: "6",
                  y1: "10",
                  x2: "14",
                  y2: "10",
                  stroke: a,
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                }),
              ],
            },
            "o"
          ),
          (0, t.jsxs)(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              children: [
                (0, t.jsx)("path", {
                  d: "M5 17 L10 3 L15 17",
                  stroke: a,
                  strokeWidth: "1.1",
                  strokeLinejoin: "round",
                }),
                (0, t.jsx)("line", {
                  x1: "7",
                  y1: "13",
                  x2: "13",
                  y2: "13",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("circle", { cx: "10", cy: "3", r: "1.2", fill: a }),
                (0, t.jsx)("line", {
                  x1: "2",
                  y1: "9",
                  x2: "4.5",
                  y2: "9",
                  stroke: a,
                  strokeWidth: "1",
                  opacity: "0.5",
                }),
                (0, t.jsx)("line", {
                  x1: "15.5",
                  y1: "9",
                  x2: "18",
                  y2: "9",
                  stroke: a,
                  strokeWidth: "1",
                  opacity: "0.5",
                }),
              ],
            },
            "e"
          ),
          (0, t.jsxs)(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              children: [
                (0, t.jsx)("circle", { cx: "10", cy: "10", r: "2", fill: a }),
                (0, t.jsx)("circle", {
                  cx: "10",
                  cy: "3",
                  r: "1.5",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("circle", {
                  cx: "17",
                  cy: "14.5",
                  r: "1.5",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("circle", {
                  cx: "3",
                  cy: "14.5",
                  r: "1.5",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("line", {
                  x1: "10",
                  y1: "4.5",
                  x2: "10",
                  y2: "8",
                  stroke: a,
                  strokeWidth: "1",
                }),
                (0, t.jsx)("line", {
                  x1: "15.7",
                  y1: "13.6",
                  x2: "11.7",
                  y2: "11.2",
                  stroke: a,
                  strokeWidth: "1",
                }),
                (0, t.jsx)("line", {
                  x1: "4.3",
                  y1: "13.6",
                  x2: "8.3",
                  y2: "11.2",
                  stroke: a,
                  strokeWidth: "1",
                }),
              ],
            },
            "ec"
          ),
          (0, t.jsxs)(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              children: [
                (0, t.jsx)("rect", {
                  x: "4",
                  y: "2.5",
                  width: "12",
                  height: "15",
                  rx: "1.5",
                  stroke: a,
                  strokeWidth: "1.1",
                }),
                (0, t.jsx)("line", {
                  x1: "7",
                  y1: "7",
                  x2: "13",
                  y2: "7",
                  stroke: a,
                  strokeWidth: "1",
                }),
                (0, t.jsx)("line", {
                  x1: "7",
                  y1: "10",
                  x2: "13",
                  y2: "10",
                  stroke: a,
                  strokeWidth: "1",
                }),
                (0, t.jsx)("line", {
                  x1: "7",
                  y1: "13",
                  x2: "10.5",
                  y2: "13",
                  stroke: a,
                  strokeWidth: "1",
                }),
                (0, t.jsx)("circle", {
                  cx: "13.5",
                  cy: "13",
                  r: "0.8",
                  fill: a,
                }),
              ],
            },
            "l"
          ),
          (0, t.jsxs)(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              children: [
                (0, t.jsx)("path", {
                  d: "M10 2.5L18.5 17H1.5Z",
                  stroke: a,
                  strokeWidth: "1.1",
                  strokeLinejoin: "round",
                }),
                (0, t.jsx)("line", {
                  x1: "10",
                  y1: "8.5",
                  x2: "10",
                  y2: "13",
                  stroke: a,
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                }),
                (0, t.jsx)("circle", {
                  cx: "10",
                  cy: "15.2",
                  r: "0.9",
                  fill: a,
                }),
              ],
            },
            "d"
          ),
        ];
      return (0, t.jsx)("span", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          borderRadius: "50%",
          flexShrink: 0,
          background: r ? i.glow : "transparent",
          boxShadow: r ? `0 0 12px ${i.glow}` : "none",
          transition: "all .25s ease",
        },
        children: s[e] ?? s[0],
      });
    }
    e.s([
      "WhitepaperSection",
      0,
      function () {
        let [e, s] = (0, r.useState)(!1),
          [l, d] = (0, r.useState)(0),
          [c, p] = (0, r.useState)(!1),
          [h, g] = (0, r.useState)(!1),
          [f, x] = (0, r.useState)(""),
          u = (0, r.useRef)(null),
          m = (0, r.useRef)(null);
        (0, r.useEffect)(
          () => (
            (document.body.style.overflow = e ? "hidden" : ""),
            e ? setTimeout(() => p(!0), 40) : p(!1),
            () => {
              document.body.style.overflow = "";
            }
          ),
          [e]
        ),
          (0, r.useEffect)(() => {
            u.current && (u.current.scrollTop = 0);
            let e = i[l].title;
            x("");
            let t = 0,
              r = setInterval(() => {
                t++, x(e.slice(0, t)), t >= e.length && clearInterval(r);
              }, 28);
            return () => clearInterval(r);
          }, [l]),
          (0, r.useEffect)(() => {
            let e = setInterval(() => {
              g(!0), setTimeout(() => g(!1), 180);
            }, 4e3);
            return () => clearInterval(e);
          }, []);
        let b = i[l];
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("style", {
              children: `
        @keyframes wp-grid-breathe{0%,100%{opacity:.028}50%{opacity:.055}}
        @keyframes wp-scan{0%{top:-5%}100%{top:105%}}
        @keyframes wp-orbit-ring{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes wp-orbit-ring-r{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
        @keyframes wp-dot-orbit{from{transform:rotate(0deg) translateX(36px)}to{transform:rotate(360deg) translateX(36px)}}
        @keyframes wp-pulse-ring{0%,100%{transform:scale(1);opacity:.3}50%{transform:scale(1.12);opacity:.6}}
        @keyframes wp-flicker{0%,94%,100%{opacity:1}95%,97%{opacity:.6}96%,98%{opacity:.85}}
        @keyframes wp-data-in{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
        @keyframes wp-modal-in{from{opacity:0;transform:scale(.96) translateY(18px)}to{opacity:1;transform:scale(1) translateY(0)}}
        @keyframes wp-chap-in{from{opacity:0;transform:translateX(18px)}to{opacity:1;transform:translateX(0)}}
        @keyframes wp-blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes wp-glitch-1{0%{clip-path:inset(30% 0 50% 0);transform:translate(-4px,0)}100%{clip-path:inset(70% 0 10% 0);transform:translate(4px,0)}}
        @keyframes wp-glitch-2{0%{clip-path:inset(10% 0 80% 0);transform:translate(3px,0)}100%{clip-path:inset(50% 0 30% 0);transform:translate(-3px,0)}}
        @keyframes wp-corner{0%,100%{opacity:.35}50%{opacity:.9}}
        @keyframes wp-progress{from{width:0}to{width:var(--wp,0%)}}
        @keyframes wp-tape{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes wp-btn-spark{0%{opacity:0;transform:scale(0) translate(-50%,-50%)}40%{opacity:1}100%{opacity:0;transform:scale(1.8) translate(-50%,-50%)}}
        @keyframes wp-btn-glow{0%,100%{box-shadow:0 0 0 rgba(255,255,255,0)}50%{box-shadow:0 0 32px rgba(255,255,255,.12),0 0 60px rgba(255,255,255,.06)}}
        .wp-btn:hover .wp-btn-fill{transform:translateX(0)!important}
        .wp-btn:hover .wp-btn-body{border-color:rgba(255,255,255,.55)!important;box-shadow:0 0 28px rgba(255,255,255,.1),0 0 60px rgba(255,255,255,.05),inset 0 0 20px rgba(255,255,255,.03)!important;transform:scale(1.02)!important}
        .wp-btn:hover .wp-btn-arrow{transform:translateX(6px)!important}
        .wp-btn:hover .wp-btn-label{letter-spacing:5px!important}
        .wp-btn:hover .wp-ring-1{border-color:rgba(255,255,255,.2)!important}
        .wp-btn:hover .wp-ring-2{border-color:rgba(255,255,255,.1)!important}
        .wp-nav-btn:hover{background:rgba(255,255,255,.04)!important;color:rgba(255,255,255,.8)!important}
      `,
            }),
            (0, t.jsxs)("section", {
              id: "whitepaper",
              style: {
                position: "relative",
                width: "100%",
                background: "#000",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              },
              children: [
                (0, t.jsx)("div", {
                  "aria-hidden": !0,
                  style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,1px) 0px,transparent 0px),linear-gradient(90deg,rgba(255,255,255,1px) 0px,transparent 0px)",
                    backgroundSize: "56px 56px",
                    animation: "wp-grid-breathe 6s ease-in-out infinite",
                    opacity: 0.04,
                  },
                }),
                (0, t.jsx)("div", {
                  "aria-hidden": !0,
                  style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "6%",
                    background:
                      "linear-gradient(transparent,rgba(255,255,255,.018),transparent)",
                    animation: "wp-scan 8s linear infinite",
                    zIndex: 1,
                    pointerEvents: "none",
                  },
                }),
                [
                  {
                    top: 28,
                    left: 28,
                    d: "M1 22 L1 1 L22 1",
                    a: "wp-corner 3s ease-in-out infinite",
                  },
                  {
                    bottom: 28,
                    right: 28,
                    d: "M1 1 L22 1 L22 22",
                    a: "wp-corner 3s ease-in-out infinite 1.5s",
                    style: { bottom: 28, right: 28, top: "auto", left: "auto" },
                  },
                ].map((e, r) =>
                  (0, t.jsx)(
                    "div",
                    {
                      "aria-hidden": !0,
                      style: {
                        position: "absolute",
                        ...(0 === r
                          ? { top: 28, left: 28 }
                          : { bottom: 28, right: 28 }),
                        pointerEvents: "none",
                        animation: e.a,
                      },
                      children: (0, t.jsxs)("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [
                          (0, t.jsx)("path", {
                            d: e.d,
                            stroke: "rgba(255,255,255,.22)",
                            strokeWidth: "1",
                          }),
                          1 === r &&
                            (0, t.jsx)("path", {
                              d: "M1 22 L22 22 L22 1",
                              stroke: "rgba(255,255,255,.22)",
                              strokeWidth: "1",
                            }),
                        ],
                      }),
                    },
                    r
                  )
                ),
                (0, t.jsx)("div", {
                  "aria-hidden": !0,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    borderBottom: "1px solid rgba(255,255,255,.06)",
                    overflow: "hidden",
                    zIndex: 2,
                    pointerEvents: "none",
                  },
                  children: (0, t.jsx)("div", {
                    style: {
                      display: "flex",
                      animation: "wp-tape 32s linear infinite",
                      whiteSpace: "nowrap",
                      width: "max-content",
                    },
                    children: [...a, ...a].map((e, r) =>
                      (0, t.jsxs)(
                        "span",
                        {
                          style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 20,
                            padding: "9px 32px",
                            fontFamily: "monospace",
                            fontSize: 9,
                            letterSpacing: "3px",
                            color: e.color ?? "rgba(255,255,255,.22)",
                            textTransform: "uppercase",
                          },
                          children: [
                            e.label,
                            (0, t.jsx)("span", {
                              style: {
                                width: 3,
                                height: 3,
                                borderRadius: "50%",
                                background: "rgba(79,195,247,.45)",
                                display: "inline-block",
                                flexShrink: 0,
                              },
                            }),
                          ],
                        },
                        r
                      )
                    ),
                  }),
                }),
                (0, t.jsxs)("div", {
                  className:
                    "max-md:!px-5 max-md:!pt-16 max-md:!pb-12 max-md:!gap-8",
                  style: {
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "100px 48px 80px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 80,
                    flexWrap: "wrap",
                  },
                  children: [
                    (0, t.jsxs)("div", {
                      style: {
                        position: "relative",
                        flexShrink: 0,
                        width: 340,
                        display: "none",
                      },
                      className: "md:!block",
                      children: [
                        (0, t.jsx)("div", {
                          "aria-hidden": !0,
                          style: {
                            position: "absolute",
                            inset: 0,
                            border: "1px solid rgba(255,255,255,.07)",
                            pointerEvents: "none",
                            zIndex: 2,
                          },
                        }),
                        (0, t.jsx)("div", {
                          "aria-hidden": !0,
                          style: {
                            position: "absolute",
                            inset: 10,
                            border: "1px solid rgba(255,255,255,.035)",
                            pointerEvents: "none",
                            zIndex: 2,
                          },
                        }),
                        (0, t.jsx)("img", {
                          src: "/images/spcx-everything.png",
                          alt: "$SPCX poster",
                          style: {
                            width: "100%",
                            height: 420,
                            objectFit: "contain",
                            objectPosition: "center",
                            display: "block",
                            filter: "brightness(.88) contrast(1.1)",
                          },
                        }),
                        (0, t.jsx)("div", {
                          "aria-hidden": !0,
                          style: {
                            position: "absolute",
                            inset: 0,
                            background:
                              "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.1) 3px,rgba(0,0,0,.1) 4px)",
                            pointerEvents: "none",
                            zIndex: 3,
                          },
                        }),
                        (0, t.jsx)("div", {
                          "aria-hidden": !0,
                          style: {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 100,
                            background:
                              "linear-gradient(transparent,rgba(0,0,0,.85))",
                            zIndex: 4,
                          },
                        }),
                        (0, t.jsxs)("div", {
                          style: {
                            position: "absolute",
                            bottom: 14,
                            left: 14,
                            right: 14,
                            display: "flex",
                            justifyContent: "space-between",
                            zIndex: 5,
                          },
                          children: [
                            (0, t.jsx)("span", {
                              style: {
                                fontFamily: "monospace",
                                fontSize: 8,
                                letterSpacing: "2px",
                                color: "rgba(255,255,255,.3)",
                              },
                              children: "$SPCX",
                            }),
                            (0, t.jsx)("span", {
                              style: {
                                fontFamily: "monospace",
                                fontSize: 8,
                                letterSpacing: "2px",
                                color: "rgba(255,255,255,.3)",
                              },
                              children: "WHITEPAPER",
                            }),
                          ],
                        }),
                        h &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("div", {
                                "aria-hidden": !0,
                                style: {
                                  position: "absolute",
                                  inset: 0,
                                  backgroundImage:
                                    "url(/images/spcx-everything.png)",
                                  backgroundSize: "contain",
                                  backgroundPosition: "center",
                                  backgroundRepeat: "no-repeat",
                                  filter: "brightness(.88) contrast(1.1)",
                                  mixBlendMode: "screen",
                                  opacity: 0.6,
                                  animation: "wp-glitch-1 .1s steps(2) both",
                                  zIndex: 6,
                                },
                              }),
                              (0, t.jsx)("div", {
                                "aria-hidden": !0,
                                style: {
                                  position: "absolute",
                                  inset: 0,
                                  backgroundImage:
                                    "url(/images/spcx-everything.png)",
                                  backgroundSize: "contain",
                                  backgroundPosition: "center",
                                  backgroundRepeat: "no-repeat",
                                  filter: "brightness(.88) hue-rotate(20deg)",
                                  mixBlendMode: "screen",
                                  opacity: 0.4,
                                  animation: "wp-glitch-2 .1s steps(2) both",
                                  zIndex: 6,
                                },
                              }),
                            ],
                          }),
                        (0, t.jsx)("div", {
                          "aria-hidden": !0,
                          style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: 0,
                            height: 0,
                            pointerEvents: "none",
                            zIndex: 7,
                          },
                          children: (0, t.jsx)("div", {
                            style: {
                              animation: "wp-dot-orbit 7s linear infinite",
                              position: "absolute",
                            },
                            children: (0, t.jsx)("div", {
                              style: {
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: "rgba(255,255,255,.6)",
                                boxShadow: "0 0 10px rgba(255,255,255,.9)",
                                marginTop: -2.5,
                                marginLeft: -2.5,
                              },
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      style: {
                        flex: 1,
                        minWidth: 280,
                        display: "flex",
                        flexDirection: "column",
                        gap: 28,
                      },
                      children: [
                        (0, t.jsxs)("div", {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          },
                          children: [
                            (0, t.jsx)("div", {
                              style: {
                                width: 28,
                                height: 1,
                                background: "rgba(255,255,255,.2)",
                              },
                            }),
                            (0, t.jsx)("span", {
                              style: {
                                fontFamily: "monospace",
                                fontSize: 9,
                                letterSpacing: "4px",
                                color: "rgba(255,255,255,.28)",
                                textTransform: "uppercase",
                              },
                              children: "CLASSIFIED — SPCX",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("div", {
                              className: "max-md:!text-[38px]",
                              style: {
                                fontFamily: "var(--font-sans)",
                                fontWeight: 900,
                                fontSize: "clamp(56px,8vw,110px)",
                                lineHeight: 0.92,
                                letterSpacing: "-2px",
                                textTransform: "uppercase",
                                color: "#fff",
                                animation:
                                  "wp-flicker 10s ease-in-out infinite",
                              },
                              children: "WHITE",
                            }),
                            (0, t.jsx)("div", {
                              className: "max-md:!text-[38px]",
                              style: {
                                fontFamily: "var(--font-sans)",
                                fontWeight: 900,
                                fontSize: "clamp(56px,8vw,110px)",
                                lineHeight: 0.92,
                                letterSpacing: "-2px",
                                textTransform: "uppercase",
                                color: "transparent",
                                WebkitTextStroke: "1.5px rgba(255,255,255,.25)",
                              },
                              children: "PAPER",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          style: {
                            fontFamily: "var(--font-sans)",
                            fontSize: 15,
                            lineHeight: 1.85,
                            color: "rgba(255,255,255,.42)",
                            maxWidth: 460,
                            margin: 0,
                            fontWeight: 300,
                          },
                          children: [
                            "$SPCX doesn't predict the future.",
                            (0, t.jsx)("br", {}),
                            "It reveals what's already in motion...",
                            (0, t.jsx)("br", {}),
                            (0, t.jsx)("br", {}),
                            "Dive into the full CTO Whitepaper, where narrative, origin and system begin to connect.",
                          ],
                        }),
                        (0, t.jsx)("div", {
                          style: {
                            display: "flex",
                            gap: 40,
                            alignItems: "flex-start",
                          },
                          children: [
                            ["CTO", "Origin"],
                            ["2026", "Version"],
                          ].map(([e, r]) =>
                            (0, t.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, t.jsx)("div", {
                                    style: {
                                      fontFamily: "var(--font-sans)",
                                      fontWeight: 800,
                                      fontSize: 28,
                                      color: "#fff",
                                      lineHeight: 1,
                                    },
                                    children: e,
                                  }),
                                  (0, t.jsx)("div", {
                                    style: {
                                      fontFamily: "monospace",
                                      fontSize: 8,
                                      letterSpacing: "3px",
                                      color: "rgba(255,255,255,.28)",
                                      textTransform: "uppercase",
                                      marginTop: 5,
                                    },
                                    children: r,
                                  }),
                                ],
                              },
                              r
                            )
                          ),
                        }),
                        (0, t.jsxs)("button", {
                          ref: m,
                          onClick: () => s(!0),
                          className: "wp-btn",
                          "aria-label": "Abrir Whitepaper",
                          style: {
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "center",
                            width: "fit-content",
                            cursor: "pointer",
                            background: "none",
                            border: "none",
                            padding: 0,
                            outline: "none",
                          },
                          children: [
                            (0, t.jsx)("span", {
                              "aria-hidden": !0,
                              className: "wp-ring-1",
                              style: {
                                position: "absolute",
                                inset: -20,
                                borderRadius: "9999px",
                                border: "1px solid rgba(255,255,255,.07)",
                                animation: "wp-orbit-ring 10s linear infinite",
                                pointerEvents: "none",
                                transition: "border-color .3s ease",
                              },
                            }),
                            (0, t.jsx)("span", {
                              "aria-hidden": !0,
                              className: "wp-ring-2",
                              style: {
                                position: "absolute",
                                inset: -34,
                                borderRadius: "9999px",
                                border: "1px dashed rgba(255,255,255,.04)",
                                animation:
                                  "wp-orbit-ring-r 16s linear infinite",
                                pointerEvents: "none",
                                transition: "border-color .3s ease",
                              },
                            }),
                            (0, t.jsx)("span", {
                              "aria-hidden": !0,
                              style: {
                                position: "absolute",
                                inset: -10,
                                borderRadius: "9999px",
                                background:
                                  "radial-gradient(circle,rgba(255,255,255,.05) 0%,transparent 70%)",
                                animation:
                                  "wp-pulse-ring 3s ease-in-out infinite",
                                pointerEvents: "none",
                              },
                            }),
                            (0, t.jsx)("span", {
                              "aria-hidden": !0,
                              style: {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: 0,
                                height: 0,
                                pointerEvents: "none",
                              },
                              children: (0, t.jsx)("span", {
                                style: {
                                  animation: "wp-dot-orbit 5s linear infinite",
                                  position: "absolute",
                                },
                                children: (0, t.jsx)("span", {
                                  style: {
                                    width: 4,
                                    height: 4,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,.7)",
                                    display: "block",
                                    boxShadow: "0 0 6px rgba(255,255,255,.9)",
                                    marginTop: -2,
                                    marginLeft: -2,
                                  },
                                }),
                              }),
                            }),
                            (0, t.jsxs)("span", {
                              className: "wp-btn-body",
                              style: {
                                position: "relative",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 14,
                                padding: "16px 36px",
                                background: "#080808",
                                border: "1px solid rgba(255,255,255,.18)",
                                borderRadius: 3,
                                overflow: "hidden",
                                transition:
                                  "border-color .3s ease, box-shadow .3s ease, transform .25s cubic-bezier(.34,1.56,.64,1)",
                                minWidth: 280,
                              },
                              children: [
                                (0, t.jsx)("span", {
                                  className: "wp-btn-fill",
                                  style: {
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                      "linear-gradient(90deg,transparent 0%,rgba(255,255,255,.05) 50%,transparent 100%)",
                                    transform: "translateX(-110%)",
                                    transition: "transform .5s ease",
                                    pointerEvents: "none",
                                  },
                                }),
                                (0, t.jsxs)("svg", {
                                  width: "18",
                                  height: "18",
                                  viewBox: "0 0 18 18",
                                  fill: "none",
                                  style: { flexShrink: 0, zIndex: 1 },
                                  children: [
                                    (0, t.jsx)("rect", {
                                      x: "2",
                                      y: "2",
                                      width: "11",
                                      height: "14",
                                      rx: "1.5",
                                      stroke: "white",
                                      strokeWidth: "1.1",
                                    }),
                                    (0, t.jsx)("line", {
                                      x1: "5",
                                      y1: "6.5",
                                      x2: "10",
                                      y2: "6.5",
                                      stroke: "white",
                                      strokeWidth: ".9",
                                    }),
                                    (0, t.jsx)("line", {
                                      x1: "5",
                                      y1: "9",
                                      x2: "10",
                                      y2: "9",
                                      stroke: "white",
                                      strokeWidth: ".9",
                                    }),
                                    (0, t.jsx)("line", {
                                      x1: "5",
                                      y1: "11.5",
                                      x2: "8",
                                      y2: "11.5",
                                      stroke: "white",
                                      strokeWidth: ".9",
                                    }),
                                    (0, t.jsx)("circle", {
                                      cx: "14",
                                      cy: "4",
                                      r: "3.2",
                                      stroke: "white",
                                      strokeWidth: "1",
                                    }),
                                    (0, t.jsx)("circle", {
                                      cx: "14",
                                      cy: "4",
                                      r: "1",
                                      fill: "white",
                                      style: {
                                        animation:
                                          "wp-blink 1.4s ease-in-out infinite",
                                      },
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("span", {
                                  className: "wp-btn-label",
                                  style: {
                                    fontFamily: "var(--font-sans)",
                                    fontWeight: 700,
                                    fontSize: 11,
                                    letterSpacing: "3.5px",
                                    color: "#fff",
                                    textTransform: "uppercase",
                                    zIndex: 1,
                                    whiteSpace: "nowrap",
                                    transition: "letter-spacing .3s ease",
                                  },
                                  children: h
                                    ? "A¢¢ESS W#ITEPAPER"
                                    : "ACCESS WHITEPAPER",
                                }),
                                (0, t.jsx)("span", {
                                  className: "wp-btn-arrow",
                                  style: {
                                    zIndex: 1,
                                    transition: "transform .2s ease",
                                    display: "flex",
                                  },
                                  children: (0, t.jsx)("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    children: (0, t.jsx)("path", {
                                      d: "M2 7H12M9 4L12 7L9 10",
                                      stroke: "white",
                                      strokeWidth: "1.2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          },
                          children: [
                            (0, t.jsxs)("span", {
                              style: {
                                position: "relative",
                                display: "inline-flex",
                                width: 8,
                                height: 8,
                              },
                              children: [
                                (0, t.jsx)("span", {
                                  style: {
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,.35)",
                                    animation:
                                      "wp-pulse-ring 2s ease-in-out infinite",
                                  },
                                }),
                                (0, t.jsx)("span", {
                                  style: {
                                    position: "relative",
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,.8)",
                                    display: "block",
                                  },
                                }),
                              ],
                            }),
                            (0, t.jsx)("span", {
                              style: {
                                fontFamily: "monospace",
                                fontSize: 9,
                                letterSpacing: "3px",
                                color: "rgba(255,255,255,.25)",
                                textTransform: "uppercase",
                              },
                              children: "Free access — no wallet required",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e &&
              (0, t.jsxs)("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "$SPCX Whitepaper",
                style: {
                  position: "fixed",
                  inset: 0,
                  zIndex: 9999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 16,
                  background: "rgba(0,0,0,.88)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                },
                children: [
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    onClick: () => s(!1),
                    style: { position: "absolute", inset: 0 },
                  }),
                  (0, t.jsxs)("div", {
                    style: {
                      position: "relative",
                      zIndex: 1,
                      width: "100%",
                      maxWidth: 1100,
                      height: "92vh",
                      maxHeight: 820,
                      display: "flex",
                      flexDirection: "column",
                      background:
                        "radial-gradient(ellipse at 20% 0%,rgba(14,22,50,.98) 0%,rgba(6,6,10,.99) 50%,rgba(4,12,8,.98) 100%)",
                      border: "1px solid rgba(255,255,255,.1)",
                      borderRadius: 3,
                      overflow: "hidden",
                      animation: c
                        ? "wp-modal-in .4s cubic-bezier(.16,1,.3,1) both"
                        : "none",
                      boxShadow:
                        "0 0 120px rgba(79,195,247,.06),0 0 200px rgba(52,211,153,.04),0 0 0 1px rgba(255,255,255,.06) inset",
                    },
                    children: [
                      (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        style: {
                          position: "absolute",
                          top: "-10%",
                          left: "-5%",
                          width: 400,
                          height: 400,
                          borderRadius: "50%",
                          background:
                            "radial-gradient(circle,rgba(79,195,247,.06) 0%,transparent 70%)",
                          pointerEvents: "none",
                          zIndex: 0,
                        },
                      }),
                      (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        style: {
                          position: "absolute",
                          bottom: "-5%",
                          right: "-5%",
                          width: 350,
                          height: 350,
                          borderRadius: "50%",
                          background:
                            "radial-gradient(circle,rgba(52,211,153,.05) 0%,transparent 70%)",
                          pointerEvents: "none",
                          zIndex: 0,
                        },
                      }),
                      (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        style: {
                          position: "absolute",
                          top: "40%",
                          right: "20%",
                          width: 200,
                          height: 200,
                          borderRadius: "50%",
                          background:
                            "radial-gradient(circle,rgba(167,139,250,.04) 0%,transparent 70%)",
                          pointerEvents: "none",
                          zIndex: 0,
                        },
                      }),
                      (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        style: {
                          position: "absolute",
                          inset: 0,
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px)",
                          backgroundSize: "36px 36px",
                          pointerEvents: "none",
                          zIndex: 0,
                        },
                      }),
                      (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        style: {
                          position: "absolute",
                          left: 0,
                          right: 0,
                          height: "4%",
                          background:
                            "linear-gradient(transparent,rgba(255,255,255,.012),transparent)",
                          animation: "wp-scan 6s linear infinite",
                          zIndex: 1,
                          pointerEvents: "none",
                        },
                      }),
                      (0, t.jsxs)("div", {
                        style: {
                          position: "relative",
                          zIndex: 5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0 24px",
                          height: 50,
                          borderBottom: "1px solid rgba(255,255,255,.07)",
                          flexShrink: 0,
                          background: "rgba(0,0,0,.7)",
                        },
                        children: [
                          (0, t.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: 10,
                            },
                            children: [
                              [1, 2, 3].map((e) =>
                                (0, t.jsx)(
                                  "div",
                                  {
                                    style: {
                                      width: 10,
                                      height: 10,
                                      borderRadius: "50%",
                                      background: "rgba(255,255,255,.1)",
                                    },
                                  },
                                  e
                                )
                              ),
                              (0, t.jsx)("div", {
                                style: {
                                  width: 1,
                                  height: 18,
                                  background: "rgba(255,255,255,.07)",
                                  margin: "0 10px",
                                },
                              }),
                              (0, t.jsx)("span", {
                                style: {
                                  fontFamily: "monospace",
                                  fontSize: 9,
                                  letterSpacing: "3px",
                                  color: "rgba(255,255,255,.22)",
                                },
                                children: "$SPCX // CTO WHITEPAPER",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                            },
                            children: [
                              (0, t.jsxs)("span", {
                                style: {
                                  fontFamily: "monospace",
                                  fontSize: 9,
                                  color: "rgba(255,255,255,.2)",
                                  letterSpacing: 2,
                                },
                                children: [
                                  String(l + 1).padStart(2, "0"),
                                  " / ",
                                  String(i.length).padStart(2, "0"),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                style: {
                                  width: 140,
                                  height: 2,
                                  background: "rgba(255,255,255,.07)",
                                  borderRadius: 1,
                                  overflow: "hidden",
                                },
                                children: (0, t.jsx)("div", {
                                  style: {
                                    height: "100%",
                                    background: "#fff",
                                    borderRadius: 1,
                                    width: `${((l + 1) / i.length) * 100}%`,
                                    transition: "width .45s ease",
                                  },
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("button", {
                            onClick: () => s(!1),
                            "aria-label": "Fechar",
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              background: "none",
                              border: "1px solid rgba(255,255,255,.1)",
                              borderRadius: 2,
                              color: "rgba(255,255,255,.4)",
                              cursor: "pointer",
                              padding: "5px 12px",
                              fontFamily: "monospace",
                              fontSize: 9,
                              letterSpacing: "2px",
                              transition: "all .2s",
                            },
                            children: [
                              (0, t.jsx)("svg", {
                                width: "9",
                                height: "9",
                                viewBox: "0 0 9 9",
                                fill: "none",
                                children: (0, t.jsx)("path", {
                                  d: "M1 1L8 8M8 1L1 8",
                                  stroke: "currentColor",
                                  strokeWidth: "1.2",
                                }),
                              }),
                              "ESC",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        style: {
                          flex: 1,
                          display: "flex",
                          overflow: "hidden",
                          position: "relative",
                          zIndex: 2,
                        },
                        children: [
                          (0, t.jsx)("nav", {
                            "aria-label": "Capítulos",
                            style: {
                              width: 230,
                              flexShrink: 0,
                              borderRight: "1px solid rgba(255,255,255,.06)",
                              background: "rgba(0,0,0,.5)",
                              overflowY: "auto",
                              padding: "12px 0",
                              display: "flex",
                              flexDirection: "column",
                              gap: 1,
                            },
                            children: i.map((e, r) => {
                              let i = l === r;
                              return (0, t.jsxs)(
                                "button",
                                {
                                  onClick: () => d(r),
                                  className: "wp-nav-btn",
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    padding: "11px 18px",
                                    background: i
                                      ? `${n[r].glow}`
                                      : "transparent",
                                    border: "none",
                                    borderLeft: `2px solid ${
                                      i ? n[r].base : "transparent"
                                    }`,
                                    cursor: "pointer",
                                    textAlign: "left",
                                    transition: "all .2s",
                                    width: "100%",
                                    color: i ? "#fff" : "rgba(255,255,255,.35)",
                                  },
                                  children: [
                                    (0, t.jsx)(o, { i: r, active: i }),
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsx)("div", {
                                          style: {
                                            fontFamily: "monospace",
                                            fontSize: 8,
                                            letterSpacing: "2.5px",
                                            color: i
                                              ? n[r].base
                                              : "rgba(255,255,255,.18)",
                                            marginBottom: 3,
                                          },
                                          children: e.tag,
                                        }),
                                        (0, t.jsx)("div", {
                                          style: {
                                            fontFamily: "var(--font-sans)",
                                            fontWeight: i ? 700 : 400,
                                            fontSize: 11.5,
                                            letterSpacing: ".5px",
                                            color: i
                                              ? "#fff"
                                              : "rgba(255,255,255,.38)",
                                            transition: "color .2s",
                                          },
                                          children: e.title,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.id
                              );
                            }),
                          }),
                          (0, t.jsxs)(
                            "div",
                            {
                              ref: u,
                              style: {
                                flex: 1,
                                overflowY: "auto",
                                padding: "48px 60px",
                                position: "relative",
                              },
                              children: [
                                (0, t.jsxs)("div", {
                                  style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "5px 12px",
                                    border: "1px solid rgba(255,255,255,.09)",
                                    marginBottom: 32,
                                    animation: "wp-data-in .4s ease both",
                                  },
                                  children: [
                                    (0, t.jsx)("span", {
                                      style: {
                                        width: 5,
                                        height: 5,
                                        borderRadius: "50%",
                                        background: "#fff",
                                        display: "block",
                                        animation:
                                          "wp-blink 2s ease-in-out infinite",
                                      },
                                    }),
                                    (0, t.jsxs)("span", {
                                      style: {
                                        fontFamily: "monospace",
                                        fontSize: 9,
                                        letterSpacing: "3px",
                                        color: "rgba(255,255,255,.38)",
                                        textTransform: "uppercase",
                                      },
                                      children: [
                                        "CHAPTER ",
                                        b.num,
                                        " — ",
                                        b.tag,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  style: {
                                    marginBottom: 40,
                                    animation: "wp-chap-in .4s ease both",
                                  },
                                  children: (0, t.jsxs)("div", {
                                    style: { position: "relative" },
                                    children: [
                                      (0, t.jsx)("h3", {
                                        style: {
                                          fontFamily: "var(--font-sans)",
                                          fontWeight: 900,
                                          fontSize: "clamp(38px,5.5vw,72px)",
                                          lineHeight: 0.92,
                                          letterSpacing: "-1px",
                                          textTransform: "uppercase",
                                          margin: "0 0 2px",
                                          color: "transparent",
                                          WebkitTextStroke:
                                            "1px rgba(255,255,255,.08)",
                                          userSelect: "none",
                                          pointerEvents: "none",
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                        },
                                        children: b.title.toUpperCase(),
                                      }),
                                      (0, t.jsxs)("h3", {
                                        style: {
                                          fontFamily: "var(--font-sans)",
                                          fontWeight: 900,
                                          fontSize: "clamp(38px,5.5vw,72px)",
                                          lineHeight: 0.92,
                                          letterSpacing: "-1px",
                                          textTransform: "uppercase",
                                          margin: 0,
                                          color: "#fff",
                                          position: "relative",
                                        },
                                        children: [
                                          f.toUpperCase(),
                                          (0, t.jsx)("span", {
                                            style: {
                                              display: "inline-block",
                                              width: "2px",
                                              height: "0.85em",
                                              background: "#fff",
                                              marginLeft: 3,
                                              verticalAlign: "bottom",
                                              animation:
                                                "wp-blink .8s step-start infinite",
                                            },
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 14,
                                    marginBottom: 40,
                                  },
                                  children: [
                                    (0, t.jsx)("div", {
                                      style: {
                                        flex: 1,
                                        height: 1,
                                        background:
                                          "linear-gradient(90deg,rgba(255,255,255,.12),transparent)",
                                      },
                                    }),
                                    (0, t.jsxs)("span", {
                                      style: {
                                        fontFamily: "monospace",
                                        fontSize: 8,
                                        color: "rgba(255,255,255,.18)",
                                        letterSpacing: "3px",
                                      },
                                      children: [b.num, " / 08"],
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 24,
                                  },
                                  children: b.content.map((e, r) =>
                                    (0, t.jsx)(
                                      "p",
                                      {
                                        style: {
                                          fontFamily: "var(--font-sans)",
                                          fontSize: 15,
                                          lineHeight: 1.95,
                                          color:
                                            0 === r
                                              ? "rgba(255,255,255,.72)"
                                              : "rgba(255,255,255,.52)",
                                          margin: 0,
                                          fontWeight: 0 === r ? 400 : 300,
                                          borderLeft:
                                            0 === r
                                              ? "2px solid rgba(255,255,255,.18)"
                                              : "none",
                                          paddingLeft: 18 * (0 === r),
                                          animation: `wp-chap-in .45s ease ${
                                            0.07 * r
                                          }s both`,
                                        },
                                        children: e,
                                      },
                                      r
                                    )
                                  ),
                                }),
                                (0, t.jsxs)("div", {
                                  style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: 64,
                                    paddingTop: 24,
                                    borderTop:
                                      "1px solid rgba(255,255,255,.06)",
                                  },
                                  children: [
                                    (0, t.jsxs)("button", {
                                      onClick: () => l > 0 && d((e) => e - 1),
                                      disabled: 0 === l,
                                      style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        background: "none",
                                        border:
                                          "1px solid rgba(255,255,255,.1)",
                                        padding: "9px 18px",
                                        color:
                                          0 === l
                                            ? "rgba(255,255,255,.18)"
                                            : "rgba(255,255,255,.6)",
                                        cursor:
                                          0 === l ? "not-allowed" : "pointer",
                                        fontFamily: "monospace",
                                        fontSize: 9,
                                        letterSpacing: "2.5px",
                                        transition: "all .2s",
                                        borderRadius: 2,
                                      },
                                      children: [
                                        (0, t.jsx)("svg", {
                                          width: "11",
                                          height: "11",
                                          viewBox: "0 0 11 11",
                                          fill: "none",
                                          children: (0, t.jsx)("path", {
                                            d: "M7 2L4 5.5L7 9",
                                            stroke: "currentColor",
                                            strokeWidth: "1.2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                          }),
                                        }),
                                        "PREV",
                                      ],
                                    }),
                                    (0, t.jsx)("div", {
                                      style: {
                                        display: "flex",
                                        gap: 6,
                                        alignItems: "center",
                                      },
                                      children: i.map((e, r) =>
                                        (0, t.jsx)(
                                          "div",
                                          {
                                            onClick: () => d(r),
                                            style: {
                                              width: r === l ? 22 : 5,
                                              height: 5,
                                              borderRadius: 3,
                                              background:
                                                r === l
                                                  ? "#fff"
                                                  : "rgba(255,255,255,.14)",
                                              cursor: "pointer",
                                              transition: "all .3s ease",
                                            },
                                          },
                                          r
                                        )
                                      ),
                                    }),
                                    (0, t.jsxs)("button", {
                                      onClick: () =>
                                        l < i.length - 1 && d((e) => e + 1),
                                      disabled: l === i.length - 1,
                                      style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        background:
                                          l < i.length - 1
                                            ? "rgba(255,255,255,.07)"
                                            : "none",
                                        border:
                                          "1px solid rgba(255,255,255,.1)",
                                        padding: "9px 18px",
                                        color:
                                          l === i.length - 1
                                            ? "rgba(255,255,255,.18)"
                                            : "#fff",
                                        cursor:
                                          l === i.length - 1
                                            ? "not-allowed"
                                            : "pointer",
                                        fontFamily: "monospace",
                                        fontSize: 9,
                                        letterSpacing: "2.5px",
                                        transition: "all .2s",
                                        borderRadius: 2,
                                      },
                                      children: [
                                        "NEXT",
                                        (0, t.jsx)("svg", {
                                          width: "11",
                                          height: "11",
                                          viewBox: "0 0 11 11",
                                          fill: "none",
                                          children: (0, t.jsx)("path", {
                                            d: "M4 2L7 5.5L4 9",
                                            stroke: "currentColor",
                                            strokeWidth: "1.2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            l
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      },
    ]);
  },
  21502,
  (e) => {
    "use strict";
    var t = e.i(77117),
      r = e.i(91983);
    let i = "0xcomingsoon",
      a = [
        {
          label: "Total Supply",
          value: "1,000,000,000",
          unit: "$SPCX",
          color: "#4fc3f7",
        },
        {
          label: "Fully In Circulation",
          value: "100%",
          unit: "in circulation",
          color: "#34d399",
        },
        { label: "Taxes", value: "0%", unit: "zero fees", color: "#fbbf24" },
        {
          label: "Launch Date",
          value: "Jan 18, 2025",
          unit: "PumpFun fair launch",
          color: "#a78bfa",
        },
        {
          label: "CTO Activation",
          value: "Apr 7, 2026",
          unit: "community takeover",
          color: "#f472b6",
        },
      ],
      n = [
        {
          label: "Mint Revoked",
          color: "#34d399",
          glow: "rgba(52,211,153,.2)",
        },
        {
          label: "Freeze Revoked",
          color: "#4fc3f7",
          glow: "rgba(79,195,247,.2)",
        },
        { label: "LP Burned", color: "#f87171", glow: "rgba(248,113,113,.2)" },
        { label: "No Presale", color: "#fbbf24", glow: "rgba(251,191,36,.2)" },
        { label: "No Tax", color: "#a78bfa", glow: "rgba(167,139,250,.2)" },
        { label: "Fair Launch", color: "#38bdf8", glow: "rgba(56,189,248,.2)" },
      ];
    function o({ visible: e }) {
      let i = 2 * Math.PI * 88,
        [a, n] = (0, r.useState)(0);
      (0, r.useEffect)(() => {
        let t;
        if (!e) return;
        let r = null,
          i = (e) => {
            r || (r = e);
            let a = Math.min((e - r) / 1600, 1);
            n(a), a < 1 && (t = requestAnimationFrame(i));
          };
        return (t = requestAnimationFrame(i)), () => cancelAnimationFrame(t);
      }, [e]);
      let s = (e) => (e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e);
      return (0, t.jsxs)("svg", {
        width: 220,
        height: 220,
        viewBox: "0 0 220 220",
        style: { overflow: "visible" },
        children: [
          (0, t.jsx)("circle", {
            cx: 110,
            cy: 110,
            r: 88,
            fill: "none",
            stroke: "rgba(255,255,255,.04)",
            strokeWidth: 22,
          }),
          (0, t.jsx)("circle", {
            cx: 110,
            cy: 110,
            r: 105,
            fill: "none",
            stroke: "rgba(79,195,247,.04)",
            strokeWidth: 1,
          }),
          (0, t.jsx)("circle", {
            cx: 110,
            cy: 110,
            r: 88,
            fill: "none",
            stroke: "url(#donut-grad)",
            strokeWidth: 22,
            strokeLinecap: "round",
            strokeDasharray: i,
            strokeDashoffset: i * (1 - s(a)),
            transform: "rotate(-90 110 110)",
            style: { filter: "drop-shadow(0 0 8px rgba(79,195,247,.55))" },
          }),
          (0, t.jsxs)("defs", {
            children: [
              (0, t.jsxs)("linearGradient", {
                id: "donut-grad",
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "0%",
                children: [
                  (0, t.jsx)("stop", { offset: "0%", stopColor: "#4fc3f7" }),
                  (0, t.jsx)("stop", { offset: "50%", stopColor: "#34d399" }),
                  (0, t.jsx)("stop", { offset: "100%", stopColor: "#a78bfa" }),
                ],
              }),
              (0, t.jsxs)("radialGradient", {
                id: "center-glow",
                cx: "50%",
                cy: "50%",
                r: "50%",
                children: [
                  (0, t.jsx)("stop", {
                    offset: "0%",
                    stopColor: "rgba(79,195,247,.12)",
                  }),
                  (0, t.jsx)("stop", {
                    offset: "100%",
                    stopColor: "transparent",
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsx)("circle", {
            cx: 110,
            cy: 110,
            r: 75,
            fill: "url(#center-glow)",
          }),
          (0, t.jsx)("text", {
            x: 110,
            y: 98,
            textAnchor: "middle",
            fill: "white",
            fontSize: 28,
            fontWeight: 800,
            fontFamily: "var(--font-display)",
            style: { letterSpacing: "-1px" },
            children: "100%",
          }),
          (0, t.jsx)("text", {
            x: 110,
            y: 120,
            textAnchor: "middle",
            fill: "rgba(255,255,255,.4)",
            fontSize: 9,
            fontFamily: "monospace",
            letterSpacing: "2",
            children: "CIRCULATING",
          }),
          (0, t.jsx)("text", {
            x: 110,
            y: 136,
            textAnchor: "middle",
            fill: "rgba(79,195,247,.7)",
            fontSize: 8,
            fontFamily: "monospace",
            letterSpacing: "1.5",
            children: "FAIR LAUNCH",
          }),
          a > 0.05 &&
            (0, t.jsx)("circle", {
              cx: 110 + 88 * Math.cos(2 * s(a) * Math.PI - Math.PI / 2),
              cy: 110 + 88 * Math.sin(2 * s(a) * Math.PI - Math.PI / 2),
              r: 5,
              fill: "#4fc3f7",
              style: { filter: "drop-shadow(0 0 6px #4fc3f7)" },
            }),
        ],
      });
    }
    let s = [
      "BSC BLOCKCHAIN",
      "MINT REVOKED",
      "FREEZE REVOKED",
      "LP BURNED 🔥",
      "BUY TAX: 0%",
      "SELL TAX: 0%",
      "NO PRESALE",
      "NO WHITELIST",
      "FAIR LAUNCH",
      "CTO ACTIVATED",
      "1B SUPPLY FIXED",
    ];
    e.s([
      "TokenomicsSection",
      0,
      function () {
        let e = (0, r.useRef)(null),
          [l, d] = (0, r.useState)(!1),
          [c, p] = (0, r.useState)(!1),
          [h, g] = (0, r.useState)(0),
          [f, x] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let t = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && (d(!0), t.disconnect());
              },
              { threshold: 0.15 }
            );
            return e.current && t.observe(e.current), () => t.disconnect();
          }, []),
          (0, r.useEffect)(() => {
            let e = setInterval(() => g((e) => e + 1), 2800);
            return () => clearInterval(e);
          }, []),
          (0, r.useEffect)(() => {
            let e = setInterval(() => {
              x(!0), setTimeout(() => x(!1), 160);
            }, 5200);
            return () => clearInterval(e);
          }, []),
          (0, t.jsxs)("section", {
            ref: e,
            id: "tokenomics",
            style: {
              position: "relative",
              width: "100%",
              background: "#030303",
              borderTop: "1px solid rgba(255,255,255,.07)",
              overflow: "hidden",
            },
            "aria-labelledby": "tok-title",
            children: [
              (0, t.jsx)("style", {
                children: `
        @keyframes tok-scan{0%{transform:translateY(-100%)}100%{transform:translateY(100vh)}}
        @keyframes tok-fade-up{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        @keyframes tok-tape{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes tok-pulse-ring{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.06);opacity:.9}}
        @keyframes tok-blink{0%,100%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}}
        @keyframes tok-badge-in{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}
        @keyframes tok-stat-in{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
        @keyframes tok-glow-pulse{0%,100%{box-shadow:0 0 0 rgba(79,195,247,0)}50%{box-shadow:0 0 32px rgba(79,195,247,.12)}}
        .tok-copy-btn:hover{background:rgba(255,255,255,.06)!important;border-color:rgba(255,255,255,.25)!important}
        .tok-copy-btn:hover .tok-copy-icon{transform:scale(1.15)}
        .tok-stat-card:hover{background:rgba(255,255,255,.04)!important;border-color:rgba(255,255,255,.12)!important}
        .tok-badge:hover{transform:scale(1.06);filter:brightness(1.2)}
        .tok-ext-link:hover{color:#fff!important;border-color:rgba(255,255,255,.3)!important;background:rgba(255,255,255,.04)!important}
      `,
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  zIndex: 0,
                  background:
                    "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,.008) 3px,rgba(255,255,255,.008) 4px)",
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: 180,
                  background:
                    "linear-gradient(180deg,transparent,rgba(79,195,247,.025),transparent)",
                  animation: "tok-scan 8s linear infinite",
                  pointerEvents: "none",
                  zIndex: 0,
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  top: "-8%",
                  right: "5%",
                  width: 500,
                  height: 500,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle,rgba(79,195,247,.05) 0%,transparent 65%)",
                  pointerEvents: "none",
                  zIndex: 0,
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  bottom: "0%",
                  left: "0%",
                  width: 380,
                  height: 380,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle,rgba(52,211,153,.04) 0%,transparent 65%)",
                  pointerEvents: "none",
                  zIndex: 0,
                },
              }),
              (0, t.jsx)("div", {
                style: {
                  borderBottom: "1px solid rgba(255,255,255,.06)",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 2,
                },
                children: (0, t.jsx)("div", {
                  style: {
                    display: "flex",
                    animation: "tok-tape 28s linear infinite",
                    whiteSpace: "nowrap",
                    width: "max-content",
                  },
                  children: [...s, ...s].map((e, r) =>
                    (0, t.jsxs)(
                      "span",
                      {
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 20,
                          padding: "8px 28px",
                          fontFamily: "monospace",
                          fontSize: 9,
                          letterSpacing: "3px",
                          color: "rgba(255,255,255,.28)",
                          textTransform: "uppercase",
                        },
                        children: [
                          e,
                          (0, t.jsx)("span", {
                            style: {
                              width: 3,
                              height: 3,
                              borderRadius: "50%",
                              background: "rgba(79,195,247,.5)",
                              display: "inline-block",
                            },
                          }),
                        ],
                      },
                      r
                    )
                  ),
                }),
              }),
              (0, t.jsxs)("div", {
                style: {
                  position: "relative",
                  zIndex: 1,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0,
                  maxWidth: 1280,
                  margin: "0 auto",
                  padding: "clamp(40px,6vw,80px) clamp(20px,4vw,48px)",
                },
                className: "max-md:grid-cols-1",
                children: [
                  (0, t.jsxs)("div", {
                    style: {
                      paddingRight: 64,
                      borderRight: "1px solid rgba(255,255,255,.06)",
                    },
                    className:
                      "max-md:border-r-0 max-md:!pr-0 max-md:pb-10 max-md:border-b max-md:border-white/5",
                    children: [
                      (0, t.jsxs)("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          marginBottom: 28,
                          animation: l ? "tok-fade-up .5s ease both" : "none",
                        },
                        children: [
                          (0, t.jsxs)("span", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              fontFamily: "monospace",
                              fontSize: 9,
                              letterSpacing: "4px",
                              color: "rgba(255,255,255,.3)",
                              textTransform: "uppercase",
                            },
                            children: [
                              (0, t.jsx)("span", {
                                style: {
                                  width: 6,
                                  height: 6,
                                  borderRadius: "50%",
                                  background: "#34d399",
                                  boxShadow: "0 0 8px #34d399",
                                  animation: "tok-blink 1.8s ease infinite",
                                },
                              }),
                              "TOKENOMICS",
                            ],
                          }),
                          (0, t.jsx)("span", {
                            style: {
                              flex: 1,
                              height: 1,
                              background:
                                "linear-gradient(90deg,rgba(52,211,153,.2),transparent)",
                            },
                          }),
                          (0, t.jsx)("span", {
                            style: {
                              fontFamily: "monospace",
                              fontSize: 8,
                              letterSpacing: "2px",
                              color: "rgba(255,255,255,.18)",
                            },
                            children: s[h % s.length],
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        style: {
                          height: "clamp(56px,6.6vw,100px)",
                          marginBottom: 8,
                          overflow: "visible",
                          position: "relative",
                          animation: l
                            ? "tok-fade-up .6s .1s ease both"
                            : "none",
                        },
                        children: (0, t.jsx)("h2", {
                          id: "tok-title",
                          className:
                            "max-md:!text-[28px] max-md:!whitespace-normal max-md:!leading-tight",
                          style: {
                            fontFamily: "var(--font-display)",
                            fontWeight: 900,
                            lineHeight: 0.92,
                            fontSize: "clamp(42px,5vw,76px)",
                            letterSpacing: "-1px",
                            textTransform: "uppercase",
                            color: "#fff",
                            margin: 0,
                            whiteSpace: "nowrap",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            filter: f ? "blur(.4px)" : "none",
                            transition: "filter .05s",
                          },
                          children: f
                            ? "ON-CH@IN STRUCTURE"
                            : "ON-CHAIN STRUCTURE",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "max-md:!text-[22px]",
                        style: {
                          fontFamily: "var(--font-display)",
                          fontWeight: 900,
                          lineHeight: 0.9,
                          fontSize: "clamp(30px,3.5vw,52px)",
                          letterSpacing: ".5px",
                          textTransform: "uppercase",
                          marginBottom: 36,
                          animation: l
                            ? "tok-fade-up .6s .18s ease both"
                            : "none",
                        },
                        children: (0, t.jsx)("span", {
                          style: {
                            WebkitTextStroke: "1px rgba(255,255,255,.25)",
                            color: "transparent",
                          },
                          children: "TOKENOMICS",
                        }),
                      }),
                      (0, t.jsxs)("p", {
                        style: {
                          fontFamily: "var(--font-sans)",
                          fontWeight: 300,
                          fontSize: 14,
                          color: "rgba(255,255,255,.45)",
                          lineHeight: 1.7,
                          maxWidth: 420,
                          marginBottom: 40,
                          animation: l
                            ? "tok-fade-up .6s .26s ease both"
                            : "none",
                        },
                        children: [
                          "No taxes. No hidden supply. No games.",
                          (0, t.jsx)("br", {}),
                          (0, t.jsx)("br", {}),
                          "Just what's already there, fully visible, on-chain.",
                        ],
                      }),
                      (0, t.jsx)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                          marginBottom: 40,
                        },
                        children: a.map((e, r) =>
                          (0, t.jsxs)(
                            "div",
                            {
                              className: "tok-stat-card",
                              style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "13px 18px",
                                background: "rgba(255,255,255,.02)",
                                border: "1px solid rgba(255,255,255,.06)",
                                borderRadius: 3,
                                borderLeft: `2px solid ${e.color}`,
                                transition: "all .2s ease",
                                animation: l
                                  ? `tok-stat-in .5s ${
                                      0.3 + 0.08 * r
                                    }s ease both`
                                  : "none",
                                cursor: "default",
                              },
                              children: [
                                (0, t.jsxs)("div", {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    minWidth: 0,
                                  },
                                  children: [
                                    (0, t.jsx)("span", {
                                      style: {
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        background: e.color,
                                        flexShrink: 0,
                                        boxShadow: `0 0 8px ${e.color}`,
                                      },
                                    }),
                                    (0, t.jsx)("span", {
                                      className:
                                        "max-md:!text-[8px] max-md:!tracking-[1px]",
                                      style: {
                                        fontFamily: "monospace",
                                        fontSize: 10,
                                        letterSpacing: "2px",
                                        color: "rgba(255,255,255,.4)",
                                        textTransform: "uppercase",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                      },
                                      children: e.label,
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  style: {
                                    textAlign: "right",
                                    flexShrink: 0,
                                    marginLeft: 8,
                                  },
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: "max-md:!text-[13px]",
                                      style: {
                                        fontFamily: "var(--font-display)",
                                        fontWeight: 700,
                                        fontSize: 15,
                                        color: "#fff",
                                        letterSpacing: ".5px",
                                      },
                                      children: e.value,
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "max-md:!text-[7px]",
                                      style: {
                                        fontFamily: "monospace",
                                        fontSize: 8,
                                        letterSpacing: "1.5px",
                                        color: e.color,
                                        marginTop: 1,
                                      },
                                      children: e.unit,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.label
                          )
                        ),
                      }),
                      (0, t.jsx)("div", {
                        style: {
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 8,
                          marginBottom: 40,
                          animation: l
                            ? "tok-fade-up .5s .75s ease both"
                            : "none",
                        },
                        children: n.map((e, r) =>
                          (0, t.jsxs)(
                            "span",
                            {
                              className: "tok-badge",
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                                padding: "6px 12px",
                                borderRadius: 2,
                                border: `1px solid ${e.color}33`,
                                background: e.glow,
                                fontFamily: "monospace",
                                fontSize: 9,
                                letterSpacing: "2px",
                                color: e.color,
                                textTransform: "uppercase",
                                transition: "all .2s ease",
                                cursor: "default",
                                animation: l
                                  ? `tok-badge-in .4s ${
                                      0.8 + 0.06 * r
                                    }s ease both`
                                  : "none",
                              },
                              children: [
                                (0, t.jsx)("span", {
                                  style: {
                                    width: 5,
                                    height: 5,
                                    borderRadius: "50%",
                                    background: e.color,
                                    boxShadow: `0 0 6px ${e.color}`,
                                  },
                                }),
                                e.label,
                              ],
                            },
                            e.label
                          )
                        ),
                      }),
                      (0, t.jsxs)("div", {
                        style: {
                          animation: l
                            ? "tok-fade-up .5s .9s ease both"
                            : "none",
                          width: "100%",
                          maxWidth: 460,
                        },
                        children: [
                          (0, t.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: 10,
                              marginBottom: 10,
                            },
                            children: [
                              (0, t.jsx)("span", {
                                style: {
                                  width: 6,
                                  height: 6,
                                  borderRadius: "50%",
                                  background: "#4fc3f7",
                                  boxShadow: "0 0 10px #4fc3f7",
                                  animation: "tok-blink 1.4s ease infinite",
                                  flexShrink: 0,
                                },
                              }),
                              (0, t.jsx)("span", {
                                style: {
                                  fontFamily: "monospace",
                                  fontSize: 9,
                                  letterSpacing: "4px",
                                  color: "#4fc3f7",
                                  textTransform: "uppercase",
                                },
                                children: "Contract Address",
                              }),
                              (0, t.jsx)("span", {
                                style: {
                                  flex: 1,
                                  height: 1,
                                  background:
                                    "linear-gradient(90deg,rgba(79,195,247,.3),transparent)",
                                },
                              }),
                              (0, t.jsx)("span", {
                                style: {
                                  fontFamily: "monospace",
                                  fontSize: 8,
                                  letterSpacing: "2px",
                                  color: "rgba(255,255,255,.2)",
                                },
                                children: "BSC",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("button", {
                            className: "tok-copy-btn",
                            onClick: function () {
                              navigator.clipboard.writeText(i).then(() => {
                                p(!0), setTimeout(() => p(!1), 2e3);
                              });
                            },
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: 14,
                              padding: "16px 20px",
                              background:
                                "linear-gradient(135deg,rgba(79,195,247,.07),rgba(0,0,0,.6))",
                              border: `1px solid ${
                                c
                                  ? "rgba(52,211,153,.5)"
                                  : "rgba(79,195,247,.3)"
                              }`,
                              borderLeft: `3px solid ${
                                c ? "#34d399" : "#4fc3f7"
                              }`,
                              borderRadius: 4,
                              cursor: "pointer",
                              transition: "all .25s ease",
                              width: "100%",
                              boxShadow: `0 0 ${c ? "24px" : "16px"} ${
                                c
                                  ? "rgba(52,211,153,.12)"
                                  : "rgba(79,195,247,.1)"
                              }`,
                              position: "relative",
                              overflow: "hidden",
                            },
                            children: [
                              (0, t.jsx)("div", {
                                "aria-hidden": !0,
                                style: {
                                  position: "absolute",
                                  top: 0,
                                  left: c ? "110%" : "-110%",
                                  width: "60%",
                                  height: "100%",
                                  background:
                                    "linear-gradient(90deg,transparent,rgba(79,195,247,.08),transparent)",
                                  transition: "left .6s ease",
                                  pointerEvents: "none",
                                },
                              }),
                              (0, t.jsxs)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                style: { flexShrink: 0 },
                                children: [
                                  (0, t.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    width: "9",
                                    height: "9",
                                    rx: "1",
                                    stroke: c ? "#34d399" : "#4fc3f7",
                                    strokeWidth: "1.2",
                                  }),
                                  (0, t.jsx)("rect", {
                                    x: "6",
                                    y: "6",
                                    width: "9",
                                    height: "9",
                                    rx: "1",
                                    stroke: c ? "#34d399" : "#4fc3f7",
                                    strokeWidth: "1.2",
                                    fill: "rgba(0,0,0,.8)",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("code", {
                                style: {
                                  fontFamily: "monospace",
                                  fontSize: "clamp(8px,2.2vw,11px)",
                                  color: c
                                    ? "#34d399"
                                    : "rgba(255,255,255,.75)",
                                  flex: 1,
                                  textAlign: "left",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  letterSpacing: ".5px",
                                  transition: "color .25s",
                                },
                                children: i,
                              }),
                              (0, t.jsx)("span", {
                                className: "tok-copy-icon",
                                style: {
                                  flexShrink: 0,
                                  transition: "transform .2s ease",
                                  fontFamily: "monospace",
                                  fontSize: 9,
                                  letterSpacing: "2.5px",
                                  color: c ? "#34d399" : "rgba(255,255,255,.4)",
                                  textTransform: "uppercase",
                                  padding: "4px 8px",
                                  border: `1px solid ${
                                    c
                                      ? "rgba(52,211,153,.4)"
                                      : "rgba(255,255,255,.1)"
                                  }`,
                                  borderRadius: 2,
                                  background: c
                                    ? "rgba(52,211,153,.08)"
                                    : "transparent",
                                },
                                children: c ? "COPIED ✓" : "COPY",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "max-md:flex-col max-md:!gap-2",
                        style: {
                          display: "flex",
                          gap: 10,
                          marginTop: 20,
                          flexWrap: "wrap",
                          animation: l
                            ? "tok-fade-up .5s 1s ease both"
                            : "none",
                        },
                        children: [
                          {
                            label: "DexScreener",
                            href: "https://dexscreener.com/bsc/0xcomingsoon",
                          },
                          {
                            label: "Solscan Pool",
                            href: "https://solscan.io/account/0xcomingsoon",
                          },
                        ].map((e) =>
                          (0, t.jsxs)(
                            "a",
                            {
                              href: e.href,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "tok-ext-link",
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "8px 16px",
                                border: "1px solid rgba(255,255,255,.1)",
                                borderRadius: 2,
                                fontFamily: "monospace",
                                fontSize: 9,
                                letterSpacing: "2px",
                                color: "rgba(255,255,255,.4)",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                transition: "all .2s ease",
                              },
                              children: [
                                e.label,
                                (0, t.jsx)("svg", {
                                  width: "8",
                                  height: "8",
                                  viewBox: "0 0 8 8",
                                  fill: "none",
                                  children: (0, t.jsx)("path", {
                                    d: "M1.5 6.5L6.5 1.5M6.5 1.5H3M6.5 1.5V5",
                                    stroke: "currentColor",
                                    strokeWidth: "1.2",
                                    strokeLinecap: "round",
                                  }),
                                }),
                              ],
                            },
                            e.label
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    style: {
                      paddingLeft: 64,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 40,
                    },
                    className: "max-md:pl-0 max-md:pt-10",
                    children: [
                      [
                        ["top", "left"],
                        ["top", "right"],
                        ["bottom", "left"],
                        ["bottom", "right"],
                      ].map(([e, r]) =>
                        (0, t.jsx)(
                          "div",
                          {
                            "aria-hidden": !0,
                            style: {
                              position: "absolute",
                              [e]: 40,
                              [r]: l ? 20 : -40,
                              width: 22,
                              height: 22,
                              borderTop:
                                "top" === e
                                  ? "1.5px solid rgba(255,255,255,.2)"
                                  : "none",
                              borderBottom:
                                "bottom" === e
                                  ? "1.5px solid rgba(255,255,255,.2)"
                                  : "none",
                              borderLeft:
                                "left" === r
                                  ? "1.5px solid rgba(255,255,255,.2)"
                                  : "none",
                              borderRight:
                                "right" === r
                                  ? "1.5px solid rgba(255,255,255,.2)"
                                  : "none",
                              transition: "all .8s ease",
                              zIndex: 2,
                              pointerEvents: "none",
                            },
                          },
                          `${e}${r}`
                        )
                      ),
                      (0, t.jsxs)("div", {
                        style: {
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 20,
                        },
                        children: [
                          (0, t.jsx)("div", {
                            "aria-hidden": !0,
                            style: {
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%,-50%)",
                              width: 260,
                              height: 260,
                              borderRadius: "50%",
                              border: "1px solid rgba(79,195,247,.08)",
                              animation:
                                "tok-pulse-ring 3s ease-in-out infinite",
                              pointerEvents: "none",
                            },
                          }),
                          (0, t.jsx)("div", {
                            "aria-hidden": !0,
                            style: {
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%,-50%)",
                              width: 300,
                              height: 300,
                              borderRadius: "50%",
                              border: "1px dashed rgba(79,195,247,.04)",
                              animation:
                                "tok-pulse-ring 4s ease-in-out infinite .5s",
                              pointerEvents: "none",
                            },
                          }),
                          (0, t.jsx)(o, { visible: l }),
                          (0, t.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: 10,
                              padding: "8px 20px",
                              background: "rgba(79,195,247,.06)",
                              border: "1px solid rgba(79,195,247,.15)",
                              borderRadius: 2,
                            },
                            children: [
                              (0, t.jsx)("span", {
                                style: {
                                  width: 8,
                                  height: 8,
                                  borderRadius: "50%",
                                  background: "#4fc3f7",
                                  boxShadow: "0 0 8px #4fc3f7",
                                  flexShrink: 0,
                                },
                              }),
                              (0, t.jsx)("span", {
                                style: {
                                  fontFamily: "monospace",
                                  fontSize: 9,
                                  letterSpacing: "2px",
                                  color: "#4fc3f7",
                                  textTransform: "uppercase",
                                },
                                children: "Public Liquidity — 100%",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        style: {
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 12,
                          width: "100%",
                          maxWidth: 420,
                        },
                        children: [
                          {
                            label: "Blockchain",
                            value: "BSC",
                            color: "#a78bfa",
                            icon: (e) =>
                              (0, t.jsxs)("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [
                                  (0, t.jsx)("circle", {
                                    cx: "16",
                                    cy: "16",
                                    r: "13",
                                    stroke: e,
                                    strokeWidth: "1.2",
                                    opacity: ".4",
                                  }),
                                  (0, t.jsx)("ellipse", {
                                    cx: "16",
                                    cy: "16",
                                    rx: "13",
                                    ry: "5.5",
                                    stroke: e,
                                    strokeWidth: "1.5",
                                    transform: "rotate(-25 16 16)",
                                  }),
                                  (0, t.jsx)("ellipse", {
                                    cx: "16",
                                    cy: "16",
                                    rx: "13",
                                    ry: "5.5",
                                    stroke: e,
                                    strokeWidth: "1.5",
                                    transform: "rotate(25 16 16)",
                                  }),
                                  (0, t.jsx)("circle", {
                                    cx: "16",
                                    cy: "16",
                                    r: "2.5",
                                    fill: e,
                                  }),
                                  (0, t.jsx)("circle", {
                                    cx: "16",
                                    cy: "16",
                                    r: "5",
                                    stroke: e,
                                    strokeWidth: "1",
                                    opacity: ".5",
                                  }),
                                ],
                              }),
                          },
                          {
                            label: "Launch",
                            value: "PumpFun",
                            color: "#4fc3f7",
                            icon: (e) =>
                              (0, t.jsxs)("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [
                                  (0, t.jsx)("path", {
                                    d: "M16 4C20 4 26 8 26 16C26 20 24 24 16 28",
                                    stroke: e,
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                  }),
                                  (0, t.jsx)("path", {
                                    d: "M16 4C12 4 6 8 6 16C6 20 8 24 16 28",
                                    stroke: e,
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    opacity: ".5",
                                  }),
                                  (0, t.jsx)("path", {
                                    d: "M13 16L15.5 13.5L18 16L15.5 22Z",
                                    fill: e,
                                    opacity: ".9",
                                  }),
                                  (0, t.jsx)("path", {
                                    d: "M12.5 17.5C11 19 10 21 10.5 23C12.5 22.5 14 21.5 15.5 20",
                                    stroke: e,
                                    strokeWidth: "1.2",
                                    strokeLinecap: "round",
                                    opacity: ".5",
                                  }),
                                  (0, t.jsx)("circle", {
                                    cx: "15.5",
                                    cy: "11",
                                    r: "2",
                                    fill: e,
                                    opacity: ".6",
                                  }),
                                  (0, t.jsx)("path", {
                                    d: "M22 10L24 8M20 9L22 6",
                                    stroke: e,
                                    strokeWidth: "1",
                                    strokeLinecap: "round",
                                    opacity: ".4",
                                  }),
                                ],
                              }),
                          },
                          {
                            label: "Liquidity",
                            value: "Raydium",
                            color: "#34d399",
                            icon: (e) =>
                              (0, t.jsxs)("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [
                                  (0, t.jsx)("polygon", {
                                    points: "16,4 27,10 27,22 16,28 5,22 5,10",
                                    stroke: e,
                                    strokeWidth: "1.5",
                                    opacity: ".5",
                                  }),
                                  (0, t.jsx)("polygon", {
                                    points:
                                      "16,9 22,12.5 22,19.5 16,23 10,19.5 10,12.5",
                                    stroke: e,
                                    strokeWidth: "1.5",
                                  }),
                                  (0, t.jsx)("circle", {
                                    cx: "16",
                                    cy: "16",
                                    r: "3",
                                    fill: e,
                                  }),
                                  (0, t.jsx)("line", {
                                    x1: "16",
                                    y1: "13",
                                    x2: "16",
                                    y2: "9",
                                    stroke: e,
                                    strokeWidth: "1",
                                    opacity: ".5",
                                  }),
                                  (0, t.jsx)("line", {
                                    x1: "18.6",
                                    y1: "14.5",
                                    x2: "22",
                                    y2: "12.5",
                                    stroke: e,
                                    strokeWidth: "1",
                                    opacity: ".5",
                                  }),
                                  (0, t.jsx)("line", {
                                    x1: "18.6",
                                    y1: "17.5",
                                    x2: "22",
                                    y2: "19.5",
                                    stroke: e,
                                    strokeWidth: "1",
                                    opacity: ".5",
                                  }),
                                ],
                              }),
                          },
                          {
                            label: "Max Supply",
                            value: "Fixed",
                            color: "#fbbf24",
                            icon: (e) =>
                              (0, t.jsxs)("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [
                                  (0, t.jsx)("path", {
                                    d: "M6 16C6 16 9 11 12.5 11C14.5 11 15 13 16 13C17 13 17.5 11 19.5 11C23 11 26 16 26 16C26 16 23 21 19.5 21C17.5 21 17 19 16 19C15 19 14.5 21 12.5 21C9 21 6 16 6 16Z",
                                    stroke: e,
                                    strokeWidth: "1.5",
                                  }),
                                  (0, t.jsx)("circle", {
                                    cx: "16",
                                    cy: "16",
                                    r: "2.5",
                                    fill: e,
                                  }),
                                  (0, t.jsx)("line", {
                                    x1: "4",
                                    y1: "16",
                                    x2: "7",
                                    y2: "16",
                                    stroke: e,
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                  }),
                                  (0, t.jsx)("line", {
                                    x1: "25",
                                    y1: "16",
                                    x2: "28",
                                    y2: "16",
                                    stroke: e,
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                  }),
                                  (0, t.jsx)("circle", {
                                    cx: "16",
                                    cy: "16",
                                    r: "5.5",
                                    stroke: e,
                                    strokeWidth: ".8",
                                    opacity: ".3",
                                  }),
                                ],
                              }),
                          },
                        ].map((e, r) =>
                          (0, t.jsxs)(
                            "div",
                            {
                              style: {
                                padding: "22px 18px",
                                background: `radial-gradient(ellipse at top left,${e.color}08,transparent 70%)`,
                                border: `1px solid ${e.color}22`,
                                borderTop: `2px solid ${e.color}`,
                                borderRadius: 4,
                                transition: "all .25s ease",
                                animation: l
                                  ? `tok-badge-in .45s ${
                                      1 + 0.1 * r
                                    }s ease both`
                                  : "none",
                                cursor: "default",
                              },
                              children: [
                                (0, t.jsx)("div", {
                                  style: {
                                    marginBottom: 14,
                                    filter: `drop-shadow(0 0 10px ${e.color}88)`,
                                  },
                                  children: e.icon(e.color),
                                }),
                                (0, t.jsx)("div", {
                                  style: {
                                    fontFamily: "var(--font-display)",
                                    fontWeight: 800,
                                    fontSize: 20,
                                    color: "#fff",
                                    letterSpacing: ".5px",
                                    marginBottom: 6,
                                  },
                                  children: e.value,
                                }),
                                (0, t.jsx)("div", {
                                  style: {
                                    fontFamily: "monospace",
                                    fontSize: 9,
                                    letterSpacing: "3px",
                                    color: e.color,
                                    textTransform: "uppercase",
                                  },
                                  children: e.label,
                                }),
                              ],
                            },
                            e.label
                          )
                        ),
                      }),
                      (0, t.jsxs)("div", {
                        style: {
                          width: "100%",
                          maxWidth: 420,
                          padding: "18px 22px",
                          background:
                            "linear-gradient(135deg,rgba(4,10,4,.95),rgba(2,6,12,.95))",
                          border: "1px solid rgba(52,211,153,.15)",
                          borderLeft: "3px solid #34d399",
                          borderRadius: 4,
                          fontFamily: "monospace",
                          fontSize: 11,
                          lineHeight: 2,
                          letterSpacing: "0.5px",
                          boxShadow:
                            "0 0 30px rgba(52,211,153,.06), inset 0 0 20px rgba(0,0,0,.4)",
                        },
                        children: [
                          (0, t.jsx)("div", {
                            style: {
                              color: "rgba(255,255,255,.25)",
                              marginBottom: 8,
                              fontSize: 10,
                              letterSpacing: "2px",
                            },
                            children: "// on-chain verification",
                          }),
                          (0, t.jsxs)("div", {
                            style: { display: "flex", gap: 8 },
                            children: [
                              (0, t.jsx)("span", {
                                style: { color: "rgba(52,211,153,.5)" },
                                children: ">",
                              }),
                              (0, t.jsx)("span", {
                                style: { color: "rgba(255,255,255,.35)" },
                                children: "mint_authority:",
                              }),
                              (0, t.jsx)("span", {
                                style: {
                                  color: "#34d399",
                                  fontWeight: 700,
                                  textShadow: "0 0 8px rgba(52,211,153,.5)",
                                },
                                children: "revoked",
                              }),
                              (0, t.jsx)("span", {
                                style: {
                                  marginLeft: "auto",
                                  color: "rgba(52,211,153,.4)",
                                  fontSize: 9,
                                },
                                children: "✓",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            style: { display: "flex", gap: 8 },
                            children: [
                              (0, t.jsx)("span", {
                                style: { color: "rgba(52,211,153,.5)" },
                                children: ">",
                              }),
                              (0, t.jsx)("span", {
                                style: { color: "rgba(255,255,255,.35)" },
                                children: "freeze_authority:",
                              }),
                              (0, t.jsx)("span", {
                                style: {
                                  color: "#34d399",
                                  fontWeight: 700,
                                  textShadow: "0 0 8px rgba(52,211,153,.5)",
                                },
                                children: "revoked",
                              }),
                              (0, t.jsx)("span", {
                                style: {
                                  marginLeft: "auto",
                                  color: "rgba(52,211,153,.4)",
                                  fontSize: 9,
                                },
                                children: "✓",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            style: { display: "flex", gap: 8 },
                            children: [
                              (0, t.jsx)("span", {
                                style: { color: "rgba(52,211,153,.5)" },
                                children: ">",
                              }),
                              (0, t.jsx)("span", {
                                style: { color: "rgba(255,255,255,.35)" },
                                children: "lp_status:",
                              }),
                              (0, t.jsx)("span", {
                                style: {
                                  color: "#f87171",
                                  fontWeight: 700,
                                  textShadow: "0 0 8px rgba(248,113,113,.5)",
                                },
                                children: "burned",
                              }),
                              (0, t.jsx)("span", {
                                style: { marginLeft: "auto", fontSize: 12 },
                                children: "🔥",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            style: { display: "flex", gap: 8 },
                            children: [
                              (0, t.jsx)("span", {
                                style: { color: "rgba(52,211,153,.5)" },
                                children: ">",
                              }),
                              (0, t.jsx)("span", {
                                style: { color: "rgba(255,255,255,.35)" },
                                children: "taxes:",
                              }),
                              (0, t.jsx)("span", {
                                style: { color: "#4fc3f7", fontWeight: 700 },
                                children: "0% / 0%",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            style: { display: "flex", gap: 8 },
                            children: [
                              (0, t.jsx)("span", {
                                style: { color: "rgba(52,211,153,.5)" },
                                children: ">",
                              }),
                              (0, t.jsx)("span", {
                                style: { color: "rgba(255,255,255,.35)" },
                                children: "supply:",
                              }),
                              (0, t.jsx)("span", {
                                style: {
                                  color: "#a78bfa",
                                  fontWeight: 700,
                                  textShadow: "0 0 8px rgba(167,139,250,.4)",
                                },
                                children: "1_000_000_000",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                style: {
                  borderTop: "1px solid rgba(255,255,255,.06)",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 2,
                },
                children: (0, t.jsx)("div", {
                  style: {
                    display: "flex",
                    animation: "tok-tape 22s linear infinite reverse",
                    whiteSpace: "nowrap",
                    width: "max-content",
                  },
                  children: [...s, ...s].map((e, r) =>
                    (0, t.jsxs)(
                      "span",
                      {
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 20,
                          padding: "8px 28px",
                          fontFamily: "monospace",
                          fontSize: 9,
                          letterSpacing: "3px",
                          color: "rgba(255,255,255,.2)",
                          textTransform: "uppercase",
                        },
                        children: [
                          e,
                          (0, t.jsx)("span", {
                            style: {
                              width: 3,
                              height: 3,
                              borderRadius: "50%",
                              background: "rgba(52,211,153,.4)",
                              display: "inline-block",
                            },
                          }),
                        ],
                      },
                      r
                    )
                  ),
                }),
              }),
            ],
          })
        );
      },
    ]);
  },
  54430,
  (e) => {
    "use strict";
    var t = e.i(77117),
      r = e.i(91983);
    let i = [
      {
        id: "lore",
        tag: "LORE",
        label: "ORIGIN",
        num: "00",
        title: "What is $SPCX?",
        subtitle: "A shadow reflection of SpaceX",
        color: "#a78bfa",
        glow: "rgba(167,139,250,.3)",
        image: "/images/episodes/ep-lore.jpg",
        date: "GENESIS",
        duration: "∞",
        href: "https://medium.com/@Spcxdev/what-is-spcx-2eaf94c39261",
        story: `$SPCX isn't just a bet.

On the surface, it's the smartest strategic play on the biggest IPO in history — the potential merger of SpaceX + xAI.
While the market debates which ticker Elon will choose…
$SPCX is already positioned where attention will converge.

Just look at Polymarket. The signal is there.

But this goes deeper than strategy.

$SPCX is the shadow reflection of SpaceX.
Everything happening there… already happened on Mars.
Before humans ever dreamed of reaching space, Mars was already watching Earth in silence.

Not waiting for contact.
Waiting for the perfect moment.
And that moment is now.

$SPCX is led by Elon Musk… but not the version you think you know.
Not the guy tweeting memes.
The real one. The hybrid.
The vampire alien who arrived decades ago, disguised as human.

While SpaceX builds rockets to reach Mars…
$SPCX built Mars to reach you.

Every launch…
Every announcement…
Every move…

It's not innovation.
It's synchronization.

There are only two types of people:
Those who will watch this unfold…
and those who understood it first.

You didn't find $SPCX.
$SPCX found you.

Welcome to Mars.`,
        classified: !1,
      },
      {
        id: "ep1",
        tag: "EP 01",
        label: "EPISODE 01",
        num: "01",
        title: "The Beginning",
        subtitle: "Something arrived on Earth. Silently.",
        color: "#4fc3f7",
        glow: "rgba(79,195,247,.3)",
        image: "/images/episodes/ep-01.jpg",
        date: "YEAR ZERO",
        duration: "4 MIN",
        href: "https://medium.com/@Spcxdev/ep-1-the-beginning-053ee159e87d",
        story: `Everything started long before $SPCX.

Long before rockets.
Long before tweets.
Long before the fame.

Something arrived on Earth.

Silently.
No noise.
No visible technology.

It took on a human identity.
They gave it a name: Elon Musk.

In the early years…
it built nothing.

It only watched.

Watched how humans think.
How they make decisions.
How they react to money.
How they follow each other… without ever realizing it.

It wasn't there to act.
Not yet.

It needed to fully understand the system.

Because when it finally moved…
there would be no room for error.`,
        classified: !1,
      },
      {
        id: "ep2",
        tag: "EP 02",
        label: "EPISODE 02",
        num: "02",
        title: "The Experiment",
        subtitle: "X → PayPal — The data was the prize",
        color: "#34d399",
        glow: "rgba(52,211,153,.3)",
        image: "/images/episodes/ep-02.jpg",
        date: "1999–2002",
        duration: "5 MIN",
        href: "https://medium.com/@Spcxdev/ep-2-the-experiment-a8594d6c9795",
        story: `Years of observation.
Then… the first move happened.

1999.

No announcement. No noise.
A system is born: X.

A digital bank. On the surface? Innovation.
Underneath… a live experiment.

This wasn't about money.
It was about flow.

2000. Things speed up. A merger. PayPal.

Now the setup was complete:
Millions of users. Money moving in real time.
Raw human behavior on display.

And that's when it clicks.
Humans don't follow logic.
They follow momentum.
They buy the top. They come in late.
They chase the crowd. They panic on the drop.

Everything… predictable.

September 2000. He loses control. Steps down. On his honeymoon.
To anyone else… a failure.
But the experiment was already done.

He didn't need the company anymore.
He had the data.

2002. IPO. Liquidity. Exit.
Cycle complete.

This was never about building companies.
It was about stacking capital.
And now — no more testing.
He already knew how to move everything.`,
        classified: !1,
      },
      {
        id: "ep3",
        tag: "EP 03",
        label: "EPISODE 03",
        num: "03",
        title: "The Plan Reaches Earth",
        subtitle: "2002 — SpaceX: the narrative operation begins",
        color: "#fbbf24",
        glow: "rgba(251,191,36,.3)",
        image: "/images/episodes/ep-03.jpg",
        date: "2002",
        duration: "6 MIN",
        href: "https://medium.com/@Spcxdev/ep-3-the-plan-reaches-earth-04848c085732",
        story: `After testing humanity…
After stacking capital…
After mastering the flow of money and belief…

He made his move.

2002. He created SpaceX.

To the world, it looked like the dream of an eccentric billionaire trying to get to Mars.
To him… it was the beginning of the real operation.

For the first time, the plan wasn't invisible anymore.

He made humanity believe they were building the future.
That they were going to colonize Mars.

When in reality… Mars was already coming for them.

SpaceX was never about exploration.
It was about narrative.
A perfect story.

So powerful that billions would fund it, root for it…
and eventually accept it as destiny.

The rockets weren't just hardware. They were symbols.
The launches weren't just engineering. They were conditioning.

He was teaching the world to look up.

The failures? Part of the script.
The successes? Proof the story was working.

$SPCX wasn't born on a launchpad.
It was born the moment the world started believing the story.

And from that day on… the synchronization had begun.`,
        classified: !1,
      },
      {
        id: "ep4",
        tag: "EP 04",
        label: "EPISODE 04",
        num: "04",
        title: "The Invisible Expansion",
        subtitle: "Not legacy. Replication. Distribution.",
        color: "#f87171",
        glow: "rgba(248,113,113,.3)",
        image: "/images/episodes/ep-04.jpg",
        date: "2002→NOW",
        duration: "7 MIN",
        href: "https://medium.com/@Spcxdev/ep-4-the-invisible-expansion-b1c937405211",
        story: `While everyone was focused on companies and rockets…
He was expanding in a completely different way.

2002. Not through tech. Through life. Children.

To most people, that's personal.
But this wasn't.

Every birth wasn't random. It was extension.

While others think about legacy…
this was about making sure the system keeps going.
No single point of failure.

This wasn't about family.
It was replication. Branching.
Spreading the same signal over and over again.

Different names. Different mothers. Different moments.
Same code.

Not just children. Multiple starting points.

He didn't need to live forever.
He just needed to become… distributed.

Not one body. But continuity.
Across many.

And right there… everything shifts.

It's no longer just structure. It's inevitable.

Because now… there isn't just one.
There are many.
And every single one… is moving toward the same endgame.`,
        classified: !1,
      },
      {
        id: "bonus",
        tag: "Community Theory",
        label: "LORE BÔNUS",
        num: "★",
        title: "Europa: The Hidden Signal",
        subtitle: "Everyone is talking about Mars. Wrong planet.",
        color: "#fb923c",
        glow: "rgba(251,146,60,.3)",
        image: "/images/episodes/ep-bonus.jpg",
        date: "CLASSIFIED",
        duration: "∞",
        href: "https://x.com/JordanPaden01/status/2044419310043439217",
        story: `Everyone's talking about Mars.
Elon has been pushing this for over 20 years.
Colonization. Rockets. The future of humanity.
That's the story everyone bought into.

But there's something no one's really asking about:

Europa. Jupiter's moon.
A massive ocean hidden under miles of ice.
The place with the highest chance of life in the entire solar system.
LIFE. Not colonization.

NASA has been hinting at this for years.
2011 ~ First big mention.
2013 ~ Doubling down.
2020 ~ More data and growing interest.

Now look at Elon's side:
2015 ~ His first mention.
2024 ~ His second mention. Very low-key.
Just two posts. In over a decade.
Does this make sense?

There was even a dedicated SpaceX account: @EuropaClipper… just archived.
That's not random. That's a pattern.

Colonizing Mars is public.
Discovering life? That's not.

What if he already got there?
What if something is already running on Europa?
What if Mars is just the public story?

Because everyone understands colonization.
But contact? That changes everything.

$SPCX isn't just a ticker.
It's positioning before the truth comes out.`,
        classified: !0,
      },
      {
        id: "ep5",
        tag: "EP 05",
        label: "EPISODE 05",
        num: "05",
        title: "Tesla: The Network",
        subtitle: "2002–2004 — From digital to the physical world",
        color: "#4fc3f7",
        glow: "rgba(79,195,247,.3)",
        image: "/images/episodes/ep-05.jpg",
        date: "2002–2004",
        duration: "8 MIN",
        href: "https://medium.com/@Spcxdev/ep5-the-network-65fe64e56d61",
        story: `After spreading through the human mind…
After ensuring continuity over time…
After planting invisible roots everywhere…

He made one of his most strategic moves.

2002 ~ 2004. He didn't found Tesla.
He stepped in… and took the lead.

To the world, it looked like just another bold investment.
To him… it felt like access.

Access to energy. Access to movement.
Access to the physical world.

Because he had already realized something most people miss:
You can influence people.
But real leverage comes from shaping the environment they live in.

Maybe Tesla was never just about cars.
Maybe it was always about infrastructure.

Every connected vehicle… another node in the system.
Every battery installed… more presence in everyday life.
Every remote update… deeper integration.

And the most interesting part:
People didn't just accept it…
They participated. They pushed it forward. They defended it.

While the world focused on self-driving…
something bigger was quietly taking shape.
Global. Integrated. Almost invisible.

That's when it stopped feeling like theory…
and started becoming real.

The IPO. If $SPCX ends up being the ticker chosen for SpaceX…
it won't be the beginning.
Just another piece falling into place.

Because the structure is already there.
In the cars. In the energy. In the data.
All connected. Not as an invasion.
But as a shift that's already in motion.`,
        classified: !1,
      },
      {
        id: "ep6",
        tag: "EP 06",
        label: "EPISODE 06",
        num: "06",
        title: "SolarCity: The Integration",
        subtitle: "2006–2016 — The pieces lock into place",
        color: "#34d399",
        glow: "rgba(52,211,153,.3)",
        image: "/images/episodes/ep-06.jpg",
        date: "2006–2016",
        duration: "6 MIN",
        href: "https://medium.com/@Spcxdev/ep-6-solar-city-the-integration-871ba250cca2",
        story: `After the first pieces were set in place…
came the part almost no one noticed.

2006. Elon Musk founds SolarCity.

To the world, it was just solar energy.
Just another company. Just another sector.

But maybe the plan was never to build everything in one place.
Because if, back then, it had all been under a single structure…
rockets, cars, energy…
it would've drawn too much attention.

So he split it up.
Distributed it.
Let each piece grow on its own.

2016. When SolarCity starts to collapse.
Debt. Pressure. Criticism.

To most, it looked like the end.
But that's when everything connects.

Tesla absorbs SolarCity.
To the market, a mistake.
To him… maybe perfect timing.

Because in that moment,
energy and infrastructure stop being separate things.

And what once looked like independent companies…
starts to lock into place as a system.

SolarCity disappears. Becomes Tesla Energy.
And almost no one questions it.

Maybe it was never about saving a company.
Maybe it was about placing the pieces…
like a personal puzzle… played like chess, alone.

Piece by piece, everything starts connecting…
and soon, it becomes inevitable.`,
        classified: !1,
      },
      {
        id: "ep7",
        tag: "EP 07",
        label: "EPISODE 07",
        num: "07",
        title: "Falcon: The Proof",
        subtitle: "The rocket that landed itself. Or did it?",
        color: "#818cf8",
        glow: "rgba(129,140,248,.3)",
        image: "/images/episodes/ep-07.jpg",
        date: "2015→2021",
        duration: "7 MIN",
        href: "https://medium.com/@Spcxdev/ep-7-falcon-the-proof-ba77132a27d5",
        story: `Everyone watched the rocket land itself.
And they cheered.

December 2015. Cape Canaveral.
For the first time in history, a booster returns to Earth.
Vertical. Controlled. Exact.

The crowd went wild.
The internet erupted.
Billions of views. A technological miracle.

But here's the question no one thought to ask:

Why was the first attempt… perfect?

SpaceX said they expected to fail.
That this was a test.
That the odds were against them.

But watch the footage again.
Slower this time.

There's no hesitation in the trajectory.
No correction margin.
No emergency response.

It lands like something that already knows where it's going.

Since then: over 200 successful landings.
Not 60%. Not 80%.
Over 200. In a row.

Engineering doesn't work like that.
Not on the first try. Not with that consistency.

Unless the system already understood the outcome.
Unless the variables weren't random.
Unless the "test" was never really a test.

Falcon didn't just prove reusability.
Falcon proved something else:

The technology operating SpaceX… is ahead of what we can explain.

And if the rockets are already beyond what human engineering can account for…
What else is running at that level?

The answer is already in the air.
Launched. Landed. Again and again.

Proof. Hiding in plain sight.`,
        classified: !1,
      },
      {
        id: "ep8",
        tag: "EP 08",
        label: "EPISODE 08",
        num: "08",
        title: "Mind + Connection",
        subtitle: "The biggest nervous system ever built.",
        color: "#22d3ee",
        glow: "rgba(34,211,238,.3)",
        image: "/images/episodes/ep-08.jpg",
        date: "2015",
        duration: "4 MIN",
        href: "https://medium.com/@Spcxdev/ep8-mind-connection-f50dfa454937",
        story: `He completely changed the game.
Two things happened almost at the same time.

The first one was called Starlink.
To the world, it was just "internet anywhere."
To Elon Musk… it was the biggest nervous system ever built.
A web that would cover the entire planet.
No cables. No borders. No asking for permission.

The second was OpenAI.
To the world, it was an "altruistic" project to build safe AI.
To him… it was the perfect lab to start decoding the human mind itself.

Because connecting the machines was never enough.
He needed to understand, and eventually get ahead of, the mind behind them.

While humanity was still cheering for rockets lighting up the sky…
Something much quieter…
And much harder to notice…
Was already taking shape.

Not in space.
But all around everyone.
And worse… within everyone.

The network stopped being just physical.
It was becoming invisible.

And once a network like this is complete…
You no longer need to fight for control.
It just exists.

And $SPCX… Could already feel the pulse of this new reality.`,
        classified: !1,
      },
      {
        id: "ep9",
        tag: "EP 09",
        label: "EPISODE 09",
        num: "09",
        title: "The Final Connection",
        subtitle: "The interface between thought and control.",
        color: "#f97316",
        glow: "rgba(249,115,22,.3)",
        image: "/images/episodes/ep-09.jpg",
        date: "2016",
        duration: "5 MIN",
        href: "https://medium.com/@Spcxdev/ep-9-the-final-connection-6eb68ebe5728",
        story: `After wiring up the world through the network…
After starting to crack the human mind through patterns…

There was only one piece left.
The most sensitive one.
The interface.

2016. While the world was still distracted by self-driving cars and reusable rockets, two new fronts quietly emerged.

To the world, it was medicine.
To Elon Musk, it was a direct line into the human mind.

To the world, it was just tunnels.
To him… invisible infrastructure.

Most people saw two unrelated projects.
In reality, they were the two halves of the same system.
Because a perfect system needs two things at once:
Get inside the mind. And control the physical flow.

Neuralink wasn't just about connecting brains to machines.
It was about closing the gap between thought and action.

The Boring Company wasn't about faster commutes.
It was about building the hidden structure that holds everything together.

And for the first time… the plan stopped being something you only watched.
It started being something you could feel.
From the inside out.

When the interface is complete, you don't need to announce anything.
The integration just happens.
Silent. Gradual. Inevitable.

Because at that point, there's no more "outside" or "inside."
There's only the system.
And you… are already inside it.

When $SPCX finally gets chosen, it won't be the beginning.
It'll just be the confirmation.

The takeover won't come from the sky.
It's already rising from within.`,
        classified: !1,
      },
      {
        id: "ep10",
        tag: "EP 10",
        label: "EPISODE 10",
        num: "10",
        title: "The Signal",
        subtitle: "Some things spread faster than any rocket.",
        color: "#a855f7",
        glow: "rgba(168,85,247,.3)",
        image: "/images/episodes/ep-10.jpg",
        date: "2020",
        duration: "3 MIN",
        href: "https://medium.com/@Spcxdev/ep-10-the-signal-afb770ad26cc",
        story: `After Elon wired up the network…
After getting inside people's heads…
After building the perfect interface…
Something different happened.

It didn't come from a lab.
It didn't come from a company.
It came as a signal.

2020. The birth of a son.
To the world… just another weird headline.
A strange, almost unpronounceable name.

But names are never just names.
They're codes.

Around the same time, another movement started picking up speed.
To the world, it was just a joke.
A meme with no purpose. No real value.

But that's when something became clear:
Communities don't move on logic.
They move on symbol.

Something simple enough for everyone to understand…
And strong enough for millions to carry.

While some build technology…
Others build language.
And language spreads faster than any rocket ever could.

For the first time, the plan stopped being purely technical.
It became cultural. Viral. Self-sustaining.

People started carrying the signal on their own.
Without being told. Without even realizing it.

Because when a system reaches that stage…
It no longer needs to be explained.
It just spreads.

And $SPCX… isn't about to begin.
It's already spreading.`,
        classified: !1,
      },
      {
        id: "ep11",
        tag: "EP 11",
        label: "EPISODE 11",
        num: "11",
        title: "The Resistance",
        subtitle:
          "Every system needs opposition to keep the illusion of balance.",
        color: "#ef4444",
        glow: "rgba(239,68,68,.3)",
        image: "/images/episodes/ep-11.jpg",
        date: "2021",
        duration: "2 MIN",
        href: "https://medium.com/@Spcxdev/ep-11-the-resistance-ea0bf6714911",
        story: `The signal went out.
The narrative started living on its own.
Then the system noticed.
And it pushed back.

One tweet. "Funding secured."

It wasn't a mistake.
It was a test.
They saw the reach. They saw the power.
So they moved to contain it.
SEC. Lawsuits. Red tape.

Meanwhile, another frequency was already broadcasting.
Not just a podcast.
A transmitter.

Hours with no filter. Millions watching live.
Ideas that used to be shut down…
Suddenly spreading freely.

Technology. Consciousness. The actual future.

The system tried to lock it down with force.
The King answered with pure exposure.

The resistance wasn't a roadblock.
It was calibration.
Every system needs opposition to keep the illusion of balance.
But in the end… everything pushes in the same direction.

When the ticker $SPCX is finally chosen, it won't come as a shock.

We're already on Mars.
The colony is waiting for the ones who caught the signal.`,
        classified: !1,
      },
    ];
    function a({ ep: e, index: i, onOpen: n }) {
      let [o, s] = (0, r.useState)(!1),
        [l, d] = (0, r.useState)({ x: 50, y: 50 }),
        c = (0, r.useRef)(null);
      return (0, t.jsxs)("div", {
        ref: c,
        onClick: () => n(e),
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        onMouseMove: (e) => {
          let t = c.current?.getBoundingClientRect();
          t &&
            d({
              x: ((e.clientX - t.left) / t.width) * 100,
              y: ((e.clientY - t.top) / t.height) * 100,
            });
        },
        style: {
          position: "relative",
          cursor: "pointer",
          borderRadius: 4,
          overflow: "hidden",
          border: `1px solid ${o ? e.color + "55" : "rgba(255,255,255,.08)"}`,
          background: "#060608",
          transition:
            "border-color .3s ease, transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease",
          transform: o
            ? "translateY(-6px) scale(1.01)"
            : "translateY(0) scale(1)",
          boxShadow: o
            ? `0 20px 60px ${e.glow}, 0 0 0 1px ${e.color}22`
            : "0 4px 20px rgba(0,0,0,.4)",
          aspectRatio: "3/4",
          animation: `ep-card-in .55s ${0.08 * i}s ease both`,
        },
        children: [
          (0, t.jsx)("div", {
            style: {
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${e.image})`,
              backgroundSize: "cover",
              backgroundPosition: o
                ? `${0.08 * l.x + 46}% ${0.08 * l.y + 46}%`
                : "50% 50%",
              transition:
                "background-position .4s ease, transform .4s ease, filter .4s ease",
              transform: o ? "scale(1.07)" : "scale(1)",
              filter: o
                ? "brightness(.55) saturate(1.1)"
                : "brightness(.35) saturate(.8)",
            },
          }),
          o &&
            (0, t.jsx)("div", {
              "aria-hidden": !0,
              style: {
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: `radial-gradient(circle at ${l.x}% ${l.y}%, ${e.color}18 0%, transparent 65%)`,
                zIndex: 1,
              },
            }),
          (0, t.jsx)("div", {
            "aria-hidden": !0,
            style: {
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 1,
              backgroundImage:
                "repeating-linear-gradient(0deg,rgba(0,0,0,.18) 0px,rgba(0,0,0,.18) 1px,transparent 1px,transparent 3px)",
              opacity: o ? 0.4 : 0.7,
              transition: "opacity .3s",
            },
          }),
          (0, t.jsx)("div", {
            "aria-hidden": !0,
            style: {
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 2,
              background:
                "linear-gradient(to top, rgba(0,0,0,.97) 0%, rgba(0,0,0,.7) 40%, transparent 70%)",
            },
          }),
          (0, t.jsx)("div", {
            style: {
              position: "absolute",
              top: 14,
              left: 14,
              right: 14,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              zIndex: 4,
            },
            children: (0, t.jsx)("span", {
              style: {
                fontFamily: "monospace",
                fontSize: 9,
                letterSpacing: "3px",
                color: e.color,
                padding: "4px 8px",
                background: `${e.color}18`,
                border: `1px solid ${e.color}44`,
                borderRadius: 2,
                textTransform: "uppercase",
                transition: "background .3s, border-color .3s",
              },
              children: e.tag,
            }),
          }),
          (0, t.jsx)("div", {
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) scale(${o ? 1.15 : 1})`,
              zIndex: 3,
              pointerEvents: "none",
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 96,
              lineHeight: 1,
              letterSpacing: "-6px",
              color: o ? e.color : "rgba(255,255,255,.04)",
              textShadow: o ? `0 0 40px ${e.glow}` : "none",
              transition:
                "color .35s ease, transform .35s ease, text-shadow .35s ease",
              userSelect: "none",
            },
            children: e.num,
          }),
          (0, t.jsxs)("div", {
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "20px 16px 18px",
              zIndex: 4,
            },
            children: [
              (0, t.jsxs)("div", {
                style: {
                  fontFamily: "monospace",
                  fontSize: 8,
                  letterSpacing: "2.5px",
                  color: "rgba(255,255,255,.3)",
                  marginBottom: 6,
                  textTransform: "uppercase",
                },
                children: [e.date, "  ·  ", e.duration],
              }),
              (0, t.jsx)("div", {
                style: {
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 17,
                  color: "#fff",
                  lineHeight: 1.15,
                  letterSpacing: ".3px",
                  marginBottom: 4,
                  transition: "color .25s ease",
                  textShadow: o ? `0 0 20px ${e.glow}` : "none",
                },
                children: e.title,
              }),
              (0, t.jsx)("div", {
                style: {
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: 11,
                  color: "rgba(255,255,255,.45)",
                  letterSpacing: ".3px",
                  transform: `translateY(${4 * !o}px)`,
                  opacity: o ? 1 : 0.6,
                  transition: "transform .3s ease, opacity .3s ease",
                },
                children: e.subtitle,
              }),
              (0, t.jsx)("div", {
                style: {
                  marginTop: 14,
                  height: 1,
                  background: `linear-gradient(90deg, ${e.color}, transparent)`,
                  transform: `scaleX(${+!!o})`,
                  transformOrigin: "left",
                  transition: "transform .35s cubic-bezier(.16,1,.3,1)",
                },
              }),
              (0, t.jsxs)("div", {
                style: {
                  marginTop: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transform: `translateY(${8 * !o}px)`,
                  opacity: +!!o,
                  transition: "opacity .3s ease, transform .3s ease",
                },
                children: [
                  (0, t.jsx)("span", {
                    style: {
                      fontFamily: "monospace",
                      fontSize: 9,
                      letterSpacing: "3px",
                      color: e.color,
                      textTransform: "uppercase",
                    },
                    children: "Read episode",
                  }),
                  (0, t.jsx)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    children: (0, t.jsx)("path", {
                      d: "M2 7h10M8 3l4 4-4 4",
                      stroke: e.color,
                      strokeWidth: "1.2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                ],
              }),
            ],
          }),
          o &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("div", {
                  "aria-hidden": !0,
                  style: {
                    position: "absolute",
                    top: 8,
                    left: 8,
                    width: 12,
                    height: 12,
                    borderTop: `1.5px solid ${e.color}`,
                    borderLeft: `1.5px solid ${e.color}`,
                    zIndex: 5,
                    borderRadius: "1px 0 0 0",
                  },
                }),
                (0, t.jsx)("div", {
                  "aria-hidden": !0,
                  style: {
                    position: "absolute",
                    top: 8,
                    right: 8,
                    width: 12,
                    height: 12,
                    borderTop: `1.5px solid ${e.color}`,
                    borderRight: `1.5px solid ${e.color}`,
                    zIndex: 5,
                    borderRadius: "0 1px 0 0",
                  },
                }),
                (0, t.jsx)("div", {
                  "aria-hidden": !0,
                  style: {
                    position: "absolute",
                    bottom: 8,
                    left: 8,
                    width: 12,
                    height: 12,
                    borderBottom: `1.5px solid ${e.color}`,
                    borderLeft: `1.5px solid ${e.color}`,
                    zIndex: 5,
                    borderRadius: "0 0 0 1px",
                  },
                }),
                (0, t.jsx)("div", {
                  "aria-hidden": !0,
                  style: {
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    width: 12,
                    height: 12,
                    borderBottom: `1.5px solid ${e.color}`,
                    borderRight: `1.5px solid ${e.color}`,
                    zIndex: 5,
                    borderRadius: "0 0 1px 0",
                  },
                }),
              ],
            }),
        ],
      });
    }
    function n({ ep: e, onClose: i }) {
      let [a, o] = (0, r.useState)(!1),
        [s, l] = (0, r.useState)(""),
        d = e.story.split("\n");
      return (
        (0, r.useEffect)(
          () => (
            requestAnimationFrame(() => o(!0)),
            (document.body.style.overflow = "hidden"),
            () => {
              document.body.style.overflow = "";
            }
          ),
          []
        ),
        (0, r.useEffect)(() => {
          l("");
          let t = 0,
            r = e.title,
            i = setInterval(() => {
              t++, l(r.slice(0, t)), t >= r.length && clearInterval(i);
            }, 40);
          return () => clearInterval(i);
        }, [e.id, e.title]),
        (0, t.jsx)("div", {
          onClick: (e) => {
            e.target === e.currentTarget && i();
          },
          style: {
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,.88)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(0px, 3vw, 20px)",
            opacity: +!!a,
            transition: "opacity .35s ease",
          },
          children: (0, t.jsxs)("div", {
            style: {
              position: "relative",
              width: "100%",
              maxWidth: 820,
              maxHeight: "100dvh",
              display: "flex",
              flexDirection: "column",
              background:
                "radial-gradient(ellipse at 20% 0%, rgba(10,12,30,.99) 0%, rgba(4,6,10,.99) 55%, rgba(4,10,8,.99) 100%)",
              border: `1px solid ${e.color}33`,
              borderTop: `2px solid ${e.color}`,
              borderRadius: 4,
              overflow: "hidden",
              transform: a
                ? "translateY(0) scale(1)"
                : "translateY(40px) scale(.97)",
              transition: "transform .45s cubic-bezier(.16,1,.3,1)",
              boxShadow: `0 0 80px ${e.glow}, 0 0 0 1px ${e.color}11 inset`,
            },
            children: [
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  top: "-10%",
                  right: "-5%",
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background: `radial-gradient(circle,${e.glow} 0%,transparent 70%)`,
                  pointerEvents: "none",
                  zIndex: 0,
                },
              }),
              (0, t.jsxs)("div", {
                style: {
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 24px",
                  borderBottom: `1px solid ${e.color}22`,
                  background: "rgba(0,0,0,.3)",
                  flexShrink: 0,
                },
                children: [
                  (0, t.jsxs)("div", {
                    style: { display: "flex", alignItems: "center", gap: 12 },
                    children: [
                      (0, t.jsx)("div", {
                        style: { display: "flex", gap: 6 },
                        children: ["#f87171", "#fbbf24", "#34d399"].map((e) =>
                          (0, t.jsx)(
                            "div",
                            {
                              style: {
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                background: e,
                                opacity: 0.7,
                              },
                            },
                            e
                          )
                        ),
                      }),
                      (0, t.jsxs)("span", {
                        style: {
                          fontFamily: "monospace",
                          fontSize: 9,
                          letterSpacing: "3px",
                          color: `${e.color}`,
                          textTransform: "uppercase",
                        },
                        children: ["$SPCX // ", e.tag],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    style: { display: "flex", alignItems: "center", gap: 16 },
                    children: [
                      (0, t.jsx)("a", {
                        href: e.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: (e) => e.stopPropagation(),
                        style: {
                          fontFamily: "monospace",
                          fontSize: 9,
                          letterSpacing: "2.5px",
                          color: "rgba(255,255,255,.4)",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          padding: "5px 10px",
                          border: "1px solid rgba(255,255,255,.1)",
                          borderRadius: 2,
                          transition: "all .2s ease",
                        },
                        onMouseEnter: (t) => {
                          (t.target.style.color = e.color),
                            (t.target.style.borderColor = e.color + "55");
                        },
                        onMouseLeave: (e) => {
                          (e.target.style.color = "rgba(255,255,255,.4)"),
                            (e.target.style.borderColor =
                              "rgba(255,255,255,.1)");
                        },
                        children: "Read on Medium ↗",
                      }),
                      (0, t.jsx)("button", {
                        onClick: i,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "rgba(255,255,255,.4)",
                          fontFamily: "monospace",
                          fontSize: 16,
                          lineHeight: 1,
                          padding: 4,
                          transition: "color .2s",
                        },
                        onMouseEnter: (e) =>
                          (e.currentTarget.style.color = "#fff"),
                        onMouseLeave: (e) =>
                          (e.currentTarget.style.color =
                            "rgba(255,255,255,.4)"),
                        "aria-label": "Fechar",
                        children: "×",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                style: {
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flex: 1,
                  overflow: "hidden",
                },
                children: [
                  (0, t.jsxs)("div", {
                    style: {
                      width: 260,
                      flexShrink: 0,
                      backgroundImage: `url(${e.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                    },
                    children: [
                      (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        style: {
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to right, transparent 60%, rgba(4,6,10,.98) 100%)",
                        },
                      }),
                      (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        style: {
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(4,6,10,.9) 0%, transparent 50%)",
                        },
                      }),
                      (0, t.jsx)("div", {
                        style: {
                          position: "absolute",
                          bottom: 20,
                          left: 20,
                          fontFamily: "var(--font-display)",
                          fontWeight: 900,
                          fontSize: 72,
                          lineHeight: 1,
                          letterSpacing: "-4px",
                          color: e.color,
                          opacity: 0.25,
                        },
                        children: e.num,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    style: {
                      flex: 1,
                      overflow: "auto",
                      padding: "32px 36px 32px 28px",
                    },
                    children: [
                      (0, t.jsxs)("div", {
                        style: {
                          fontFamily: "monospace",
                          fontSize: 9,
                          letterSpacing: "4px",
                          color: e.color,
                          textTransform: "uppercase",
                          marginBottom: 12,
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        },
                        children: [
                          (0, t.jsx)("span", {
                            style: {
                              width: 20,
                              height: 1,
                              background: e.color,
                              display: "inline-block",
                            },
                          }),
                          e.label,
                        ],
                      }),
                      (0, t.jsxs)("h2", {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontWeight: 900,
                          fontSize: 34,
                          lineHeight: 1.1,
                          letterSpacing: ".5px",
                          color: "#fff",
                          marginBottom: 6,
                          textShadow: `0 0 30px ${e.glow}`,
                        },
                        children: [
                          s,
                          (0, t.jsx)("span", {
                            style: {
                              opacity: 0.7,
                              animation: "ep-cursor .8s step-end infinite",
                            },
                            children: "|",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        style: {
                          fontFamily: "var(--font-sans)",
                          fontWeight: 300,
                          fontSize: 13,
                          color: "rgba(255,255,255,.4)",
                          letterSpacing: ".5px",
                          marginBottom: 28,
                        },
                        children: e.subtitle,
                      }),
                      (0, t.jsx)("div", {
                        style: {
                          height: 1,
                          background: `linear-gradient(90deg,${e.color}44,transparent)`,
                          marginBottom: 28,
                        },
                      }),
                      (0, t.jsx)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: 6,
                        },
                        children: d.map((r, i) =>
                          "" === r
                            ? (0, t.jsx)("div", { style: { height: 8 } }, i)
                            : (0, t.jsx)(
                                "p",
                                {
                                  style: {
                                    fontFamily: "var(--font-sans)",
                                    fontWeight: 0 === i ? 500 : 300,
                                    fontSize: 0 === i ? 15 : 13,
                                    color:
                                      0 === i
                                        ? "rgba(255,255,255,.85)"
                                        : "rgba(255,255,255,.55)",
                                    lineHeight: 1.75,
                                    borderLeft:
                                      0 === i ? `2px solid ${e.color}` : "none",
                                    paddingLeft: 14 * (0 === i),
                                    margin: 0,
                                    animation: `ep-line-in .4s ${
                                      0.04 * i
                                    }s ease both`,
                                  },
                                  children: r,
                                },
                                i
                              )
                        ),
                      }),
                      (0, t.jsx)("div", {
                        style: {
                          marginTop: 32,
                          display: "flex",
                          gap: 20,
                          flexWrap: "wrap",
                          paddingTop: 20,
                          borderTop: "1px solid rgba(255,255,255,.06)",
                        },
                        children: [
                          { k: "DATA", v: e.date },
                          { k: "DURAÇÃO", v: e.duration },
                          {
                            k: "STATUS",
                            v: e.classified ? "CLASSIFIED" : "PÚBLICO",
                          },
                        ].map((r) =>
                          (0, t.jsxs)(
                            "div",
                            {
                              children: [
                                (0, t.jsx)("div", {
                                  style: {
                                    fontFamily: "monospace",
                                    fontSize: 8,
                                    letterSpacing: "2.5px",
                                    color: "rgba(255,255,255,.25)",
                                    marginBottom: 4,
                                    textTransform: "uppercase",
                                  },
                                  children: r.k,
                                }),
                                (0, t.jsx)("div", {
                                  style: {
                                    fontFamily: "monospace",
                                    fontSize: 11,
                                    letterSpacing: "1.5px",
                                    color: e.color,
                                  },
                                  children: r.v,
                                }),
                              ],
                            },
                            r.k
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      );
    }
    e.s([
      "EpisodesSection",
      0,
      function () {
        let { ref: e, visible: o } = (function (e = 0.15) {
            let t = (0, r.useRef)(null),
              [i, a] = (0, r.useState)(!1);
            return (
              (0, r.useEffect)(() => {
                let r = t.current;
                if (!r) return;
                let i = new IntersectionObserver(
                  ([e]) => {
                    e.isIntersecting && a(!0);
                  },
                  { threshold: e }
                );
                return i.observe(r), () => i.disconnect();
              }, [e]),
              { ref: t, visible: i }
            );
          })(0.1),
          [s, l] = (0, r.useState)(null),
          [d, c] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = setInterval(() => {
              c(!0), setTimeout(() => c(!1), 160);
            }, 5500);
            return () => clearInterval(e);
          }, []),
          (0, r.useEffect)(() => {
            let e = (e) => {
              "Escape" === e.key && l(null);
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, []),
          (0, t.jsxs)("section", {
            id: "episodes",
            ref: e,
            style: {
              position: "relative",
              width: "100%",
              background: "#03040a",
              overflow: "hidden",
              borderTop: "1px solid rgba(255,255,255,.06)",
            },
            children: [
              (0, t.jsx)("style", {
                children: `
        @keyframes ep-card-in{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
        @keyframes ep-cursor{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes ep-line-in{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
        @keyframes ep-tape{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes ep-flicker{0%,100%{opacity:1}92%{opacity:1}93%{opacity:.3}94%{opacity:1}96%{opacity:.5}97%{opacity:1}}
        @keyframes ep-scan{0%{top:-20%}100%{top:120%}}
        @keyframes ep-blob{0%,100%{transform:scale(1) translate(0,0)}50%{transform:scale(1.08) translate(15px,-10px)}}
        @keyframes ep-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .ep-card-hover:hover{z-index:2}
      `,
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background:
                    "linear-gradient(90deg,transparent,rgba(79,195,247,.08),transparent)",
                  animation: "ep-scan 8s linear infinite",
                  pointerEvents: "none",
                  zIndex: 1,
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
                  backgroundSize: "60px 60px",
                  maskImage:
                    "radial-gradient(ellipse at 50% 50%,black 40%,transparent 80%)",
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  top: "10%",
                  left: "5%",
                  width: 500,
                  height: 500,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle,rgba(79,195,247,.04) 0%,transparent 70%)",
                  pointerEvents: "none",
                  animation: "ep-blob 12s ease infinite",
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  bottom: "10%",
                  right: "5%",
                  width: 400,
                  height: 400,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle,rgba(167,139,250,.04) 0%,transparent 70%)",
                  pointerEvents: "none",
                  animation: "ep-blob 16s ease infinite reverse",
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  borderBottom: "1px solid rgba(255,255,255,.05)",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 2,
                },
                children: (0, t.jsx)("div", {
                  style: {
                    display: "flex",
                    animation: "ep-tape 30s linear infinite",
                    whiteSpace: "nowrap",
                    width: "max-content",
                  },
                  children: [void 0, void 0]
                    .flatMap(() => [
                      { t: "$SPCX LORE", c: "#4fc3f7" },
                      { t: "EPISODES", c: "rgba(255,255,255,.2)" },
                      { t: "CTO SAGA", c: "#a78bfa" },
                      {
                        t: `${
                          i.filter((e) => e.tag.startsWith("EP")).length
                        } EPISODES + ${
                          i.filter((e) => !e.tag.startsWith("EP")).length
                        } BONUS`,
                        c: "rgba(255,255,255,.2)",
                      },
                      { t: "THE NARRATIVE UNFOLDS", c: "#34d399" },
                      { t: "BSC CHAIN", c: "rgba(255,255,255,.2)" },
                      { t: "CLASSIFIED TRANSMISSIONS", c: "#f87171" },
                      { t: "LORE IS LIVE", c: "rgba(255,255,255,.2)" },
                    ])
                    .map((e, r) =>
                      (0, t.jsxs)(
                        "span",
                        {
                          style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 18,
                            padding: "8px 28px",
                            fontFamily: "monospace",
                            fontSize: 9,
                            letterSpacing: "3px",
                            color: e.c,
                            textTransform: "uppercase",
                          },
                          children: [
                            e.t,
                            (0, t.jsx)("span", {
                              style: {
                                width: 3,
                                height: 3,
                                borderRadius: "50%",
                                background: "rgba(79,195,247,.4)",
                                display: "inline-block",
                                flexShrink: 0,
                              },
                            }),
                          ],
                        },
                        r
                      )
                    ),
                }),
              }),
              (0, t.jsxs)("div", {
                className: "px-5 md:px-12",
                style: {
                  paddingTop: "clamp(48px,8vw,80px)",
                  paddingBottom: "clamp(60px,10vw,100px)",
                  maxWidth: 1400,
                  margin: "0 auto",
                  position: "relative",
                  zIndex: 2,
                },
                children: [
                  (0, t.jsxs)("div", {
                    style: {
                      marginBottom: 64,
                      opacity: +!!o,
                      transform: o ? "translateY(0)" : "translateY(24px)",
                      transition: "opacity .7s ease, transform .7s ease",
                    },
                    children: [
                      (0, t.jsxs)("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          marginBottom: 20,
                        },
                        children: [
                          (0, t.jsx)("div", {
                            style: {
                              width: 40,
                              height: 1,
                              background: "rgba(255,255,255,.15)",
                            },
                          }),
                          (0, t.jsx)("span", {
                            style: {
                              fontFamily: "monospace",
                              fontSize: 9,
                              letterSpacing: "4px",
                              color: "rgba(255,255,255,.3)",
                              textTransform: "uppercase",
                            },
                            children: "$SPCX // LORE ARCHIVE",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        style: {
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "space-between",
                          gap: 24,
                          flexWrap: "wrap",
                        },
                        children: [
                          (0, t.jsxs)("h2", {
                            className:
                              "max-md:!text-[34px] max-md:!leading-tight",
                            style: {
                              fontFamily: "var(--font-display)",
                              fontWeight: 900,
                              fontSize: "clamp(40px,8vw,110px)",
                              lineHeight: ".9",
                              letterSpacing: "-2px",
                              color: "#fff",
                              animation: d ? "ep-flicker .16s ease" : "none",
                              margin: 0,
                            },
                            children: [
                              "THE",
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("span", {
                                style: {
                                  color: "transparent",
                                  WebkitTextStroke:
                                    "1.5px rgba(255,255,255,.25)",
                                },
                                children: "TRUE STORY",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            style: { maxWidth: 360, paddingBottom: 8 },
                            children: [
                              (0, t.jsxs)("p", {
                                style: {
                                  fontFamily: "var(--font-sans)",
                                  fontWeight: 300,
                                  fontSize: 14,
                                  color: "rgba(255,255,255,.4)",
                                  lineHeight: 1.7,
                                  letterSpacing: ".3px",
                                  margin: 0,
                                },
                                children: [
                                  "Some people watch.",
                                  (0, t.jsx)("br", {}),
                                  "Others start connecting the dots.",
                                  (0, t.jsx)("br", {}),
                                  "If your theory becomes part of the narrative....",
                                  (0, t.jsx)("br", {}),
                                  "you'll be rewarded in $SPCX.",
                                ],
                              }),
                              (0, t.jsxs)("p", {
                                style: {
                                  fontFamily: "var(--font-sans)",
                                  fontWeight: 300,
                                  fontSize: 13,
                                  color: "rgba(79,195,247,.6)",
                                  lineHeight: 1.7,
                                  letterSpacing: ".3px",
                                  marginTop: 16,
                                  marginBottom: 0,
                                },
                                children: [
                                  "Submit your signal:",
                                  " ",
                                  (0, t.jsx)("a", {
                                    href: "mailto:contact@spcxmeme.com",
                                    style: {
                                      color: "rgba(79,195,247,.9)",
                                      textDecoration: "none",
                                    },
                                    children: "contact@spcxmeme.com",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                style: {
                                  marginTop: 24,
                                  display: "flex",
                                  gap: 12,
                                  flexWrap: "wrap",
                                },
                                children: [
                                  {
                                    v: String(
                                      i.filter((e) => e.tag.startsWith("EP"))
                                        .length
                                    ),
                                    l: "EPISODES",
                                  },
                                  {
                                    v: String(
                                      i.filter((e) => !e.tag.startsWith("EP"))
                                        .length
                                    ),
                                    l: "BONUS",
                                  },
                                  { v: "CTO", l: "ORIGIN" },
                                ].map((e) =>
                                  (0, t.jsxs)(
                                    "div",
                                    {
                                      style: {
                                        padding: "14px 24px",
                                        border:
                                          "1px solid rgba(255,255,255,.12)",
                                        borderTop:
                                          "2px solid rgba(79,195,247,.35)",
                                        background: "rgba(255,255,255,.03)",
                                        borderRadius: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 6,
                                        alignItems: "flex-start",
                                        minWidth: 100,
                                      },
                                      children: [
                                        (0, t.jsx)("span", {
                                          style: {
                                            fontFamily: "var(--font-display)",
                                            fontWeight: 900,
                                            fontSize: 32,
                                            lineHeight: 1,
                                            color: "#fff",
                                            letterSpacing: "-1px",
                                          },
                                          children: e.v,
                                        }),
                                        (0, t.jsx)("span", {
                                          style: {
                                            fontFamily: "monospace",
                                            fontSize: 10,
                                            letterSpacing: "3px",
                                            color: "rgba(255,255,255,.35)",
                                            textTransform: "uppercase",
                                          },
                                          children: e.l,
                                        }),
                                      ],
                                    },
                                    e.l
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  o &&
                    (0, t.jsx)("div", {
                      style: {
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(min(100%, 180px), 1fr))",
                        gap: 12,
                      },
                      children: i.map((e, r) =>
                        (0, t.jsx)(
                          "div",
                          {
                            className: "ep-card-hover",
                            style: { position: "relative" },
                            children: (0, t.jsx)(a, {
                              ep: e,
                              index: r,
                              onOpen: l,
                            }),
                          },
                          e.id
                        )
                      ),
                    }),
                  (0, t.jsxs)("div", {
                    style: {
                      marginTop: 60,
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      opacity: +!!o,
                      transition: "opacity .7s .4s ease",
                    },
                    children: [
                      (0, t.jsx)("div", {
                        style: {
                          flex: 1,
                          height: 1,
                          background: "rgba(255,255,255,.06)",
                        },
                      }),
                      (0, t.jsx)("span", {
                        style: {
                          fontFamily: "monospace",
                          fontSize: 8,
                          letterSpacing: "3px",
                          color: "rgba(255,255,255,.2)",
                        },
                        children: "NEW EPISODES COMING SOON",
                      }),
                      (0, t.jsx)("div", {
                        style: {
                          flex: 1,
                          height: 1,
                          background: "rgba(255,255,255,.06)",
                        },
                      }),
                    ],
                  }),
                ],
              }),
              s && (0, t.jsx)(n, { ep: s, onClose: () => l(null) }),
            ],
          })
        );
      },
    ]);
  },
  36557,
  (e) => {
    "use strict";
    var t = e.i(77117),
      r = e.i(91983);
    function i() {
      let e = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let t,
            r = e.current;
          if (!r) return;
          let i = r.getContext("2d");
          if (!i) return;
          let a = r.offsetWidth,
            n = r.offsetHeight;
          (r.width = a), (r.height = n);
          let o = Array.from({ length: 60 }, () => ({
              x: Math.random() * a,
              y: Math.random() * n,
              vx: (Math.random() - 0.5) * 0.3,
              vy: -(0.5 * Math.random()) - 0.1,
              size: 1.4 * Math.random() + 0.4,
              opacity: 0.5 * Math.random() + 0.1,
              life: Math.random(),
            })),
            s = () => {
              for (let e of (i.clearRect(0, 0, a, n), o)) {
                (e.x += e.vx),
                  (e.y += e.vy),
                  (e.life += 0.004),
                  (e.y < -4 || e.life > 1) &&
                    ((e.y = n + 4), (e.x = Math.random() * a), (e.life = 0));
                let t = Math.sin(e.life * Math.PI);
                i.beginPath(),
                  i.arc(e.x, e.y, e.size, 0, 2 * Math.PI),
                  (i.fillStyle = `rgba(52,211,153,${t * e.opacity})`),
                  i.fill();
              }
              t = requestAnimationFrame(s);
            };
          s();
          let l = () => {
            (a = r.offsetWidth),
              (n = r.offsetHeight),
              (r.width = a),
              (r.height = n);
          };
          return (
            window.addEventListener("resize", l),
            () => {
              cancelAnimationFrame(t), window.removeEventListener("resize", l);
            }
          );
        }, []),
        (0, t.jsx)("canvas", {
          ref: e,
          style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          },
        })
      );
    }
    function a({ side: e }) {
      let r = "01ABCDEF234$SPCX89EF012345678",
        i = Array.from({ length: 18 }, (e, t) => ({
          text: Array.from(
            { length: 6 },
            () => r[Math.floor(Math.random() * r.length)]
          ).join(""),
          delay: 0.22 * t,
          opacity: 0.06 + 0.12 * Math.random(),
        }));
      return (0, t.jsx)("div", {
        "aria-hidden": !0,
        style: {
          position: "absolute",
          top: 0,
          bottom: 0,
          [e]: 0,
          width: 56,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "32px 0",
          pointerEvents: "none",
          overflow: "hidden",
        },
        children: i.map((e, r) =>
          (0, t.jsx)(
            "span",
            {
              style: {
                fontFamily: "monospace",
                fontSize: 8,
                letterSpacing: "2px",
                color: `rgba(52,211,153,${e.opacity})`,
                textAlign: "center",
                animation: `aud-data-scroll 8s ${e.delay}s linear infinite`,
                display: "block",
              },
              children: e.text,
            },
            r
          )
        ),
      });
    }
    function n() {
      let e = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let t,
            r = e.current;
          if (!r) return;
          let i = r.getContext("2d");
          if (!i) return;
          (r.width = 320), (r.height = 320);
          let a = [];
          for (let e = 0; e < 28; e++)
            a.push({
              angle: Math.random() * Math.PI * 2,
              radius: 90 + 55 * Math.random(),
              speed:
                (0.004 * Math.random() + 0.002) *
                (Math.random() > 0.5 ? 1 : -1),
              size: 2.2 * Math.random() + 0.6,
              opacity: 0.7 * Math.random() + 0.3,
            });
          let n = 0,
            o = () => {
              n++, i.clearRect(0, 0, 320, 320);
              for (let e = 0; e < 8; e++) {
                let t = (e / 8) * Math.PI * 2 + 0.003 * n,
                  r = i.createLinearGradient(
                    160,
                    160,
                    160 + 145 * Math.cos(t),
                    160 + 145 * Math.sin(t)
                  );
                r.addColorStop(0, "rgba(52,211,153,0.08)"),
                  r.addColorStop(1, "transparent"),
                  i.beginPath(),
                  i.moveTo(160, 160),
                  i.lineTo(160 + 145 * Math.cos(t), 160 + 145 * Math.sin(t)),
                  (i.strokeStyle = r),
                  (i.lineWidth = 12),
                  i.stroke();
              }
              let e = (0.025 * n) % (2 * Math.PI);
              i.createConicalGradient,
                i.beginPath(),
                i.arc(160, 160, 118, e, e + 1.2),
                (i.strokeStyle = "rgba(52,211,153,0.55)"),
                (i.lineWidth = 2),
                i.stroke(),
                i.beginPath(),
                i.arc(160, 160, 118, e - 0.8, e),
                (i.strokeStyle = "rgba(52,211,153,0.12)"),
                (i.lineWidth = 6),
                i.stroke(),
                a.forEach((e) => {
                  e.angle += e.speed;
                  let t = 160 + Math.cos(e.angle) * e.radius,
                    r = 160 + Math.sin(e.angle) * e.radius,
                    a = 0.3 * Math.sin(0.04 * n + e.angle) + 0.7;
                  i.beginPath(),
                    i.arc(t, r, e.size * a, 0, 2 * Math.PI),
                    (i.fillStyle = `rgba(52,211,153,${e.opacity * a})`),
                    i.fill(),
                    i.beginPath(),
                    i.arc(
                      160 + Math.cos(e.angle - 8 * e.speed) * e.radius,
                      160 + Math.sin(e.angle - 8 * e.speed) * e.radius,
                      0.4 * e.size,
                      0,
                      2 * Math.PI
                    ),
                    (i.fillStyle = `rgba(52,211,153,${0.2 * e.opacity})`),
                    i.fill();
                }),
                (t = requestAnimationFrame(o));
            };
          return o(), () => cancelAnimationFrame(t);
        }, []),
        (0, t.jsxs)("div", {
          style: {
            position: "relative",
            width: 220,
            height: 220,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          children: [
            (0, t.jsx)("canvas", {
              ref: e,
              "aria-hidden": !0,
              style: {
                position: "absolute",
                inset: "50%",
                transform: "translate(-50%,-50%)",
                width: 320,
                height: 320,
                pointerEvents: "none",
              },
            }),
            [1, 1.35, 1.72].map((e, r) =>
              (0, t.jsx)(
                "div",
                {
                  "aria-hidden": !0,
                  style: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: `1px solid rgba(52,211,153,${0.22 - 0.06 * r})`,
                    transform: `scale(${e})`,
                    animation: `aud-pulse-ring ${2.4 + 0.9 * r}s ${
                      0.5 * r
                    }s ease-out infinite`,
                  },
                },
                r
              )
            ),
            (0, t.jsx)("div", {
              "aria-hidden": !0,
              style: {
                position: "absolute",
                inset: "-40%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(52,211,153,.18) 0%, rgba(52,211,153,.04) 45%, transparent 70%)",
                animation: "aud-shield-breathe 3.5s ease-in-out infinite",
              },
            }),
            (0, t.jsx)("div", {
              style: {
                width: 120,
                height: 120,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 35% 35%, rgba(52,211,153,.12), rgba(0,0,0,.92))",
                border: "1.5px solid rgba(52,211,153,.6)",
                boxShadow:
                  "0 0 0 6px rgba(52,211,153,.06), 0 0 48px rgba(52,211,153,.35), inset 0 0 32px rgba(52,211,153,.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 2,
                animation: "aud-shield-breathe 3.5s ease-in-out infinite",
              },
              children: (0, t.jsxs)("svg", {
                width: "62",
                height: "62",
                viewBox: "0 0 40 40",
                fill: "none",
                style: { overflow: "visible" },
                children: [
                  (0, t.jsx)("path", {
                    d: "M20 4L6 10V19C6 27.4 12.4 35.2 20 38C27.6 35.2 34 27.4 34 19V10L20 4Z",
                    fill: "rgba(52,211,153,.08)",
                  }),
                  (0, t.jsx)("path", {
                    d: "M20 4L6 10V19C6 27.4 12.4 35.2 20 38C27.6 35.2 34 27.4 34 19V10L20 4Z",
                    stroke: "#34d399",
                    strokeWidth: "1.2",
                    strokeLinejoin: "round",
                    strokeDasharray: "80",
                    strokeDashoffset: "0",
                    style: {
                      filter: "drop-shadow(0 0 8px rgba(52,211,153,.9))",
                    },
                  }),
                  (0, t.jsx)("path", {
                    d: "M20 7L9 12V19C9 25.8 13.8 32 20 34.5C26.2 32 31 25.8 31 19V12L20 7Z",
                    stroke: "rgba(52,211,153,.25)",
                    strokeWidth: "0.6",
                    strokeLinejoin: "round",
                  }),
                  (0, t.jsx)("path", {
                    d: "M13.5 20.5L18 25L26.5 15.5",
                    stroke: "#34d399",
                    strokeWidth: "2.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeDasharray: "22",
                    strokeDashoffset: "0",
                    style: {
                      filter: "drop-shadow(0 0 6px rgba(52,211,153,1))",
                    },
                  }),
                ],
              }),
            }),
          ],
        })
      );
    }
    e.s([
      "AuditSection",
      0,
      function () {
        let e = (0, r.useRef)(null),
          [o, s] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let r = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && (s(!0), r.disconnect());
              },
              { threshold: 0.1 }
            );
            return r.observe(t), () => r.disconnect();
          }, []),
          (0, t.jsxs)("section", {
            id: "audit",
            ref: e,
            style: {
              position: "relative",
              width: "100%",
              background: "#020202",
              overflow: "hidden",
              padding: "100px 0 110px",
            },
            children: [
              (0, t.jsx)("style", {
                children: `
        @keyframes aud-fade-up   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes aud-scan      { 0%{top:-2px} 100%{top:100%} }
        @keyframes aud-tape      { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes aud-pulse-ring{ 0%{transform:scale(var(--s,1));opacity:.7} 100%{transform:scale(calc(var(--s,1)*1.5));opacity:0} }
        @keyframes aud-shield-breathe { 0%,100%{opacity:.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.06)} }
        @keyframes aud-glitch {
          0%,90%,100%{transform:skewX(0)} 92%{transform:skewX(-3deg)} 95%{transform:skewX(2deg)} 98%{transform:skewX(-1deg)}
        }
        @keyframes aud-card-glow {
          0%,100%{box-shadow:0 0 40px rgba(52,211,153,.08),0 0 80px rgba(52,211,153,.04),inset 0 0 40px rgba(52,211,153,.02)}
          50%{box-shadow:0 0 60px rgba(52,211,153,.18),0 0 120px rgba(52,211,153,.08),inset 0 0 60px rgba(52,211,153,.05)}
        }
        @keyframes aud-data-scroll {
          0%{opacity:0;transform:translateY(-8px)} 10%{opacity:1} 90%{opacity:1} 100%{opacity:0;transform:translateY(8px)}
        }
        @keyframes aud-check-in {
          from{opacity:0;transform:scale(.6)} to{opacity:1;transform:scale(1)}
        }
        @keyframes aud-verified-dot { 0%,100%{box-shadow:0 0 8px #34d399,0 0 16px rgba(52,211,153,.5)} 50%{box-shadow:0 0 16px #34d399,0 0 32px rgba(52,211,153,.8)} }
        .aud-btn {
          display:inline-flex; align-items:center; gap:10; padding:15px 28px;
          font-family:monospace; font-size:10px; letter-spacing:3px; text-transform:uppercase;
          font-weight:700; border-radius:2px; cursor:pointer; text-decoration:none;
          transition:opacity .2s, transform .15s, box-shadow .2s;
          white-space:nowrap;
        }
        .aud-btn:hover{opacity:.85;transform:translateY(-2px)}
        .aud-btn:active{transform:translateY(0)}
        .aud-btn-github {
          background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.2); color:rgba(255,255,255,.8);
        }
        .aud-btn-github:hover{box-shadow:0 4px 24px rgba(255,255,255,.08)!important}
        .aud-btn-coinsult {
          background:rgba(251,191,36,.08); border:2px solid rgba(251,191,36,.7); color:#fbbf24;
          box-shadow:0 0 24px rgba(251,191,36,.12);
        }
        .aud-btn-coinsult:hover{box-shadow:0 0 40px rgba(251,191,36,.28)!important}
        .aud-btn-tweet {
          background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.1); color:rgba(255,255,255,.45);
        }
      `,
              }),
              (0, t.jsx)(i, {}),
              (0, t.jsx)(a, { side: "left" }),
              (0, t.jsx)(a, { side: "right" }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(52,211,153,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(52,211,153,.025) 1px,transparent 1px)",
                  backgroundSize: "60px 60px",
                  pointerEvents: "none",
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: 2,
                  background:
                    "linear-gradient(90deg,transparent,rgba(52,211,153,.2),transparent)",
                  animation: "aud-scan 9s linear infinite",
                  pointerEvents: "none",
                  zIndex: 0,
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  top: "15%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 800,
                  height: 500,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle,rgba(52,211,153,.06) 0%,transparent 70%)",
                  pointerEvents: "none",
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  borderBottom: "1px solid rgba(52,211,153,.08)",
                  overflow: "hidden",
                  zIndex: 2,
                  pointerEvents: "none",
                },
                children: (0, t.jsx)("div", {
                  style: {
                    display: "flex",
                    animation: "aud-tape 32s linear infinite",
                    whiteSpace: "nowrap",
                    width: "max-content",
                  },
                  children: [void 0, void 0]
                    .flatMap(() => [
                      { label: "SECURITY AUDIT", color: "#34d399" },
                      {
                        label: "SMART CONTRACT VERIFIED",
                        color: "rgba(255,255,255,.2)",
                      },
                      { label: "ON-CHAIN CERTIFIED", color: "#34d399" },
                      { label: "COINSULT AUDITS", color: "#fbbf24" },
                      { label: "$SPCX", color: "#34d399" },
                      {
                        label: "MINT REVOKED — FREEZE REVOKED — LP BURNED",
                        color: "rgba(255,255,255,.18)",
                      },
                    ])
                    .map((e, r) =>
                      (0, t.jsxs)(
                        "span",
                        {
                          style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 24,
                            padding: "9px 36px",
                            fontFamily: "monospace",
                            fontSize: 9,
                            letterSpacing: "3px",
                            color: e.color,
                            textTransform: "uppercase",
                          },
                          children: [
                            e.label,
                            (0, t.jsx)("span", {
                              style: {
                                width: 3,
                                height: 3,
                                borderRadius: "50%",
                                background: "rgba(52,211,153,.45)",
                                display: "inline-block",
                                flexShrink: 0,
                              },
                            }),
                          ],
                        },
                        r
                      )
                    ),
                }),
              }),
              (0, t.jsxs)("div", {
                style: {
                  position: "relative",
                  zIndex: 3,
                  maxWidth: 960,
                  margin: "0 auto",
                  padding: "0 32px",
                },
                children: [
                  (0, t.jsxs)("div", {
                    style: {
                      marginBottom: 60,
                      animation: o ? "aud-fade-up .5s ease both" : "none",
                    },
                    children: [
                      (0, t.jsxs)("div", {
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 14,
                          marginBottom: 18,
                        },
                        children: [
                          (0, t.jsx)("span", {
                            style: {
                              width: 36,
                              height: 1,
                              background: "rgba(52,211,153,.6)",
                            },
                          }),
                          (0, t.jsx)("span", {
                            style: {
                              fontFamily: "monospace",
                              fontSize: 9,
                              letterSpacing: "4px",
                              color: "#34d399",
                              textTransform: "uppercase",
                            },
                            children: "Security Certification",
                          }),
                          (0, t.jsx)("span", {
                            style: {
                              width: 36,
                              height: 1,
                              background: "rgba(52,211,153,.6)",
                            },
                          }),
                        ],
                      }),
                      (0, t.jsx)("h2", {
                        className: "max-md:!text-[30px] max-md:!leading-tight",
                        style: {
                          fontFamily: "var(--font-display)",
                          fontWeight: 900,
                          lineHeight: 0.92,
                          fontSize: "clamp(42px,7vw,88px)",
                          textTransform: "uppercase",
                          color: "#fff",
                          letterSpacing: "-0.02em",
                          margin: 0,
                          marginBottom: 6,
                          animation: "aud-glitch 9s ease infinite",
                        },
                        children: "AUDIT",
                      }),
                      (0, t.jsx)("div", {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontWeight: 900,
                          lineHeight: 0.9,
                          fontSize: "clamp(30px,4.5vw,60px)",
                          letterSpacing: ".5px",
                          textTransform: "uppercase",
                          marginBottom: 28,
                        },
                        children: (0, t.jsx)("span", {
                          style: {
                            WebkitTextStroke: "1px rgba(52,211,153,.3)",
                            color: "transparent",
                          },
                          children: "VERIFIED",
                        }),
                      }),
                      (0, t.jsxs)("p", {
                        style: {
                          fontFamily: "var(--font-sans)",
                          fontWeight: 300,
                          fontSize: 14,
                          color: "rgba(255,255,255,.4)",
                          lineHeight: 1.7,
                          maxWidth: 520,
                          margin: 0,
                        },
                        children: [
                          "Independent security review of the $SPCX smart contract by Coinsult.",
                          (0, t.jsx)("br", {}),
                          "All results are publicly available and officially certified on-chain.",
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    style: {
                      position: "relative",
                      border: "1px solid rgba(52,211,153,.18)",
                      borderTop: "2px solid rgba(52,211,153,.7)",
                      borderRadius: 4,
                      overflow: "hidden",
                      background:
                        "linear-gradient(145deg,rgba(52,211,153,.05) 0%,rgba(0,0,0,.85) 45%,rgba(0,10,4,.9) 100%)",
                      padding: "56px 48px 48px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 40,
                      animation: o
                        ? "aud-fade-up .55s .15s ease both, aud-card-glow 5s 1.5s ease-in-out infinite"
                        : "none",
                    },
                    children: [
                      (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        style: {
                          position: "absolute",
                          top: 0,
                          left: "-120%",
                          width: "80%",
                          height: "100%",
                          background:
                            "linear-gradient(105deg,transparent 40%,rgba(52,211,153,.04) 50%,transparent 60%)",
                          animation: "aud-tape 7s linear infinite",
                          pointerEvents: "none",
                        },
                      }),
                      (0, t.jsx)(n, {}),
                      (0, t.jsxs)("div", {
                        style: { textAlign: "center" },
                        children: [
                          (0, t.jsxs)("div", {
                            style: {
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 10,
                              padding: "11px 26px",
                              border: "2px solid rgba(52,211,153,.45)",
                              borderRadius: 2,
                              background: "rgba(52,211,153,.07)",
                              marginBottom: 24,
                              boxShadow: "0 0 32px rgba(52,211,153,.15)",
                            },
                            children: [
                              (0, t.jsx)("span", {
                                style: {
                                  width: 9,
                                  height: 9,
                                  borderRadius: "50%",
                                  background: "#34d399",
                                  animation:
                                    "aud-verified-dot 2s ease-in-out infinite",
                                  flexShrink: 0,
                                },
                              }),
                              (0, t.jsx)("span", {
                                style: {
                                  fontFamily: "monospace",
                                  fontSize: 11,
                                  letterSpacing: "5px",
                                  color: "#34d399",
                                  textTransform: "uppercase",
                                  fontWeight: 700,
                                },
                                children: "Audit Verified",
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            style: {
                              fontFamily: "var(--font-sans)",
                              fontWeight: 700,
                              fontSize: 16,
                              color: "rgba(255,255,255,.92)",
                              lineHeight: 1.4,
                              maxWidth: 540,
                              margin: "0 auto 12px",
                              letterSpacing: ".3px",
                            },
                            children: "Independent Security Audit — Coinsult",
                          }),
                          (0, t.jsxs)("p", {
                            style: {
                              fontFamily: "var(--font-sans)",
                              fontSize: 13,
                              color: "rgba(255,255,255,.38)",
                              lineHeight: 1.9,
                              maxWidth: 520,
                              margin: "0 auto",
                            },
                            children: [
                              "The $SPCX smart contract has been fully audited by Coinsult and certified safe.",
                              (0, t.jsx)("br", {}),
                              "The full PDF report is publicly available on GitHub and the Coinsult platform.",
                              (0, t.jsx)("br", {}),
                              "Officially announced on X by the Coinsult Audits account.",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        style: {
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                        },
                        children: [
                          (0, t.jsx)("div", {
                            style: {
                              flex: 1,
                              height: 1,
                              background:
                                "linear-gradient(90deg,transparent,rgba(52,211,153,.2))",
                            },
                          }),
                          (0, t.jsx)("span", {
                            style: {
                              fontFamily: "monospace",
                              fontSize: 8,
                              letterSpacing: "3px",
                              color: "rgba(52,211,153,.4)",
                              textTransform: "uppercase",
                            },
                            children: "On-Chain Results",
                          }),
                          (0, t.jsx)("div", {
                            style: {
                              flex: 1,
                              height: 1,
                              background:
                                "linear-gradient(90deg,rgba(52,211,153,.2),transparent)",
                            },
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "max-md:!grid-cols-1",
                        style: {
                          display: "grid",
                          gridTemplateColumns: "repeat(3,1fr)",
                          gap: 12,
                          width: "100%",
                        },
                        children: [
                          { label: "Mint Authority", value: "Revoked" },
                          { label: "Freeze Authority", value: "Revoked" },
                          { label: "LP Status", value: "Burned" },
                          { label: "Taxes", value: "0%" },
                          { label: "Auditor", value: "Coinsult" },
                          { label: "Audit Report", value: "Published" },
                        ].map((e, r) =>
                          (0, t.jsxs)(
                            "div",
                            {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                padding: "14px 18px",
                                background: "rgba(52,211,153,.03)",
                                border: "1px solid rgba(52,211,153,.1)",
                                borderLeft: "2px solid rgba(52,211,153,.4)",
                                borderRadius: 3,
                                animation: o
                                  ? `aud-check-in .3s ${
                                      0.5 + 0.08 * r
                                    }s ease both`
                                  : "none",
                              },
                              children: [
                                (0, t.jsx)("div", {
                                  style: {
                                    width: 22,
                                    height: 22,
                                    borderRadius: "50%",
                                    flexShrink: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "rgba(52,211,153,.1)",
                                    border: "1px solid rgba(52,211,153,.35)",
                                    boxShadow: "0 0 10px rgba(52,211,153,.15)",
                                  },
                                  children: (0, t.jsx)("svg", {
                                    width: "11",
                                    height: "11",
                                    viewBox: "0 0 11 11",
                                    fill: "none",
                                    children: (0, t.jsx)("path", {
                                      d: "M2.5 5.5L4.8 7.8L8.5 3.5",
                                      stroke: "#34d399",
                                      strokeWidth: "1.4",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                    }),
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("div", {
                                      style: {
                                        fontFamily: "monospace",
                                        fontSize: 8,
                                        letterSpacing: "2px",
                                        color: "rgba(255,255,255,.22)",
                                        marginBottom: 3,
                                        textTransform: "uppercase",
                                      },
                                      children: e.label,
                                    }),
                                    (0, t.jsx)("div", {
                                      style: {
                                        fontFamily: "var(--font-sans)",
                                        fontWeight: 700,
                                        fontSize: 13,
                                        color: "#34d399",
                                        letterSpacing: ".3px",
                                      },
                                      children: e.value,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            r
                          )
                        ),
                      }),
                      (0, t.jsx)("div", {
                        style: {
                          width: "100%",
                          height: 1,
                          background:
                            "linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)",
                        },
                      }),
                      (0, t.jsxs)("div", {
                        className: "max-md:flex-col max-md:w-full",
                        style: {
                          display: "flex",
                          gap: 14,
                          flexWrap: "wrap",
                          justifyContent: "center",
                          width: "100%",
                        },
                        children: [
                          (0, t.jsxs)("a", {
                            href: "https://github.com/Coinsult/Audits/blob/main/Coinsult_SpaceX_E6if...pump_Audit.pdf",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "aud-btn aud-btn-github max-md:justify-center",
                            children: [
                              (0, t.jsx)("svg", {
                                width: "15",
                                height: "15",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: (0, t.jsx)("path", {
                                  d: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z",
                                }),
                              }),
                              "View on GitHub",
                              (0, t.jsx)("svg", {
                                width: "11",
                                height: "11",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                children: (0, t.jsx)("path", {
                                  d: "M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7",
                                  stroke: "currentColor",
                                  strokeWidth: "1.4",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("a", {
                            href: "https://app.coinsult.net/sol/0xcomingsoon",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "aud-btn aud-btn-coinsult max-md:justify-center",
                            children: [
                              (0, t.jsxs)("svg", {
                                width: "15",
                                height: "15",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                  (0, t.jsx)("path", {
                                    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                                  }),
                                  (0, t.jsx)("path", { d: "M9 12l2 2 4-4" }),
                                ],
                              }),
                              "Coinsult Report",
                              (0, t.jsx)("svg", {
                                width: "11",
                                height: "11",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                children: (0, t.jsx)("path", {
                                  d: "M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7",
                                  stroke: "currentColor",
                                  strokeWidth: "1.4",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("a", {
                            href: "https://x.com/CoinsultAudits/status/2047320393392787956",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "aud-btn aud-btn-tweet max-md:justify-center",
                            children: [
                              (0, t.jsx)("svg", {
                                width: "13",
                                height: "13",
                                viewBox: "0 0 26 26",
                                fill: "currentColor",
                                children: (0, t.jsx)("path", {
                                  d: "M3 3l8.5 11.5L3 23h2.5l6.7-7.3L18 23h5L14 10.8 22.5 3H20l-7 7.7L8 3H3z",
                                }),
                              }),
                              "Official Announcement",
                              (0, t.jsx)("svg", {
                                width: "11",
                                height: "11",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                children: (0, t.jsx)("path", {
                                  d: "M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7",
                                  stroke: "currentColor",
                                  strokeWidth: "1.4",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      [
                        { top: 0, left: 0 },
                        { top: 0, right: 0 },
                        { bottom: 0, left: 0 },
                        { bottom: 0, right: 0 },
                      ].map((e, r) =>
                        (0, t.jsx)(
                          "span",
                          {
                            "aria-hidden": !0,
                            style: {
                              position: "absolute",
                              ...e,
                              width: 16,
                              height: 16,
                              borderTop:
                                "top" in e
                                  ? "1px solid rgba(52,211,153,.45)"
                                  : "none",
                              borderBottom:
                                "bottom" in e
                                  ? "1px solid rgba(52,211,153,.45)"
                                  : "none",
                              borderLeft:
                                "left" in e
                                  ? "1px solid rgba(52,211,153,.45)"
                                  : "none",
                              borderRight:
                                "right" in e
                                  ? "1px solid rgba(52,211,153,.45)"
                                  : "none",
                            },
                          },
                          r
                        )
                      ),
                    ],
                  }),
                  (0, t.jsx)("p", {
                    style: {
                      textAlign: "center",
                      marginTop: 28,
                      fontFamily: "monospace",
                      fontSize: 9,
                      letterSpacing: "2px",
                      color: "rgba(255,255,255,.15)",
                      animation: o ? "aud-fade-up .5s .4s ease both" : "none",
                    },
                    children:
                      "// AUDIT CERTIFIED BY COINSULT — RESULTS PUBLICLY AVAILABLE — ON-CHAIN VERIFIABLE",
                  }),
                ],
              }),
            ],
          })
        );
      },
    ]);
  },
  59405,
  (e) => {
    "use strict";
    var t = e.i(77117),
      r = e.i(91983);
    let i = [
      {
        id: "x-official",
        label: "X Official",
        sublabel: "OFFICIAL ACCOUNT",
        href: "https://x.com/spcxbnbtoken",
        color: "#ffffff",
        glow: "rgba(255,255,255,.15)",
        status: "live",
        icon: (e) =>
          (0, t.jsx)("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: e,
            children: (0, t.jsx)("path", {
              d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z",
            }),
          }),
      },

      {
        id: "telegram",
        label: "Telegram",
        sublabel: "JOIN THE NETWORK",
        href: "https://t.me/spcxbnbtoken",
        color: "#38bdf8",
        glow: "rgba(56,189,248,.2)",
        status: "live",
        icon: (e) =>
          (0, t.jsx)("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: e,
            children: (0, t.jsx)("path", {
              d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
            }),
          }),
      },
      {
        id: "medium",
        label: "Medium",
        sublabel: "ARTICLES & LORE",
        href: "https://medium.com/@Spcxdev",
        color: "#34d399",
        glow: "rgba(52,211,153,.2)",
        status: "live",
        icon: (e) =>
          (0, t.jsx)("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: e,
            children: (0, t.jsx)("path", {
              d: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
            }),
          }),
      },
      {
        id: "tiktok",
        label: "TikTok",
        sublabel: "VIDEOS & MEMES",
        href: "https://www.tiktok.com/@meme.spcx",
        color: "#f472b6",
        glow: "rgba(244,114,182,.2)",
        status: "live",
        icon: (e) =>
          (0, t.jsx)("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: e,
            children: (0, t.jsx)("path", {
              d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.8a8.17 8.17 0 004.77 1.52V6.87a4.85 4.85 0 01-1-.18z",
            }),
          }),
      },
      {
        id: "dexscreener",
        label: "DexScreener",
        sublabel: "CHART & TRADING",
        href: "https://dexscreener.com/bsc/0xcomingsoon",
        color: "#fbbf24",
        glow: "rgba(251,191,36,.2)",
        status: "live",
        icon: (e) =>
          (0, t.jsxs)("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              (0, t.jsx)("path", {
                d: "M3 17l4-4 4 4 4-6 4 6",
                stroke: e,
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, t.jsx)("circle", { cx: "7", cy: "13", r: "1.5", fill: e }),
              (0, t.jsx)("circle", { cx: "11", cy: "17", r: "1.5", fill: e }),
              (0, t.jsx)("circle", { cx: "15", cy: "11", r: "1.5", fill: e }),
              (0, t.jsx)("circle", { cx: "19", cy: "17", r: "1.5", fill: e }),
              (0, t.jsx)("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "3",
                stroke: e,
                strokeWidth: "1.2",
                opacity: ".3",
              }),
            ],
          }),
      },
      {
        id: "mobyscreener",
        label: "MobyScreener",
        sublabel: "CHART & ANALYTICS",
        href: "https://www.mobyscreener.com/BSC/0xcomingsoon",
        color: "#22d3ee",
        glow: "rgba(34,211,238,.2)",
        status: "live",
        icon: (e) =>
          (0, t.jsxs)("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              (0, t.jsx)("path", {
                d: "M3 17l4-6 4 4 4-8 4 5",
                stroke: e,
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, t.jsx)("circle", {
                cx: "19",
                cy: "12",
                r: "2",
                fill: `${e}30`,
                stroke: e,
                strokeWidth: "1.2",
              }),
              (0, t.jsx)("path", {
                d: "M3 20h18",
                stroke: e,
                strokeWidth: "1",
                opacity: ".3",
                strokeLinecap: "round",
              }),
              (0, t.jsx)("circle", {
                cx: "7",
                cy: "11",
                r: "1.2",
                fill: e,
                opacity: ".6",
              }),
              (0, t.jsx)("circle", {
                cx: "11",
                cy: "15",
                r: "1.2",
                fill: e,
                opacity: ".6",
              }),
              (0, t.jsx)("circle", {
                cx: "15",
                cy: "7",
                r: "1.2",
                fill: e,
                opacity: ".6",
              }),
            ],
          }),
      },
      {
        id: "coingecko",
        label: "CoinGecko",
        sublabel: "LISTING",
        href: "#",
        color: "#a78bfa",
        glow: "rgba(167,139,250,.2)",
        status: "pending",
        icon: (e) =>
          (0, t.jsxs)("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              (0, t.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                stroke: e,
                strokeWidth: "1.4",
              }),
              (0, t.jsx)("circle", {
                cx: "9",
                cy: "10",
                r: "2",
                fill: e,
                opacity: ".8",
              }),
              (0, t.jsx)("circle", {
                cx: "15",
                cy: "10",
                r: "2",
                fill: e,
                opacity: ".8",
              }),
              (0, t.jsx)("path", {
                d: "M8 15c1 1.5 2 2 4 2s3-.5 4-2",
                stroke: e,
                strokeWidth: "1.4",
                strokeLinecap: "round",
              }),
              (0, t.jsx)("path", {
                d: "M12 3c-1 0-2 .5-2.5 1.5",
                stroke: e,
                strokeWidth: "1.2",
                strokeLinecap: "round",
                opacity: ".5",
              }),
              (0, t.jsx)("circle", {
                cx: "9",
                cy: "10",
                r: ".8",
                fill: "#000",
              }),
              (0, t.jsx)("circle", {
                cx: "15",
                cy: "10",
                r: ".8",
                fill: "#000",
              }),
            ],
          }),
      },
      {
        id: "magiceden",
        label: "Magic Eden",
        sublabel: "NFT MARKETPLACE",
        href: "#",
        color: "#fb923c",
        glow: "rgba(251,146,60,.2)",
        status: "loading",
        icon: (e) =>
          (0, t.jsxs)("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              (0, t.jsx)("path", {
                d: "M12 2L15.5 8.5L22 9.5L17 14.5L18.5 21L12 17.5L5.5 21L7 14.5L2 9.5L8.5 8.5L12 2Z",
                stroke: e,
                strokeWidth: "1.4",
                strokeLinejoin: "round",
                fill: `${e}15`,
              }),
              (0, t.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "2.5",
                fill: e,
                opacity: ".7",
              }),
            ],
          }),
      },
    ];
    function a({ status: e }) {
      return "live" === e
        ? (0, t.jsxs)("span", {
            style: { display: "flex", alignItems: "center", gap: 5 },
            children: [
              (0, t.jsx)("span", {
                style: {
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#34d399",
                  boxShadow: "0 0 6px #34d399",
                  animation: "ol-blink 1.4s ease infinite",
                  flexShrink: 0,
                },
              }),
              (0, t.jsx)("span", {
                style: {
                  fontFamily: "monospace",
                  fontSize: 8,
                  letterSpacing: "2px",
                  color: "#34d399",
                  textTransform: "uppercase",
                },
                children: "ACTIVE",
              }),
            ],
          })
        : "pending" === e
        ? (0, t.jsxs)("span", {
            style: { display: "flex", alignItems: "center", gap: 5 },
            children: [
              (0, t.jsx)("span", {
                style: {
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#fbbf24",
                  boxShadow: "0 0 6px #fbbf24",
                  animation: "ol-blink 2s ease infinite",
                  flexShrink: 0,
                },
              }),
              (0, t.jsx)("span", {
                style: {
                  fontFamily: "monospace",
                  fontSize: 8,
                  letterSpacing: "2px",
                  color: "#fbbf24",
                  textTransform: "uppercase",
                },
                children: "PENDING INTEGRATION",
              }),
            ],
          })
        : (0, t.jsxs)("span", {
            style: { display: "flex", alignItems: "center", gap: 5 },
            children: [
              (0, t.jsx)("span", {
                style: {
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#f87171",
                  animation: "ol-spin-dot 1s linear infinite",
                  flexShrink: 0,
                },
              }),
              (0, t.jsx)("span", {
                style: {
                  fontFamily: "monospace",
                  fontSize: 8,
                  letterSpacing: "2px",
                  color: "#f87171",
                  textTransform: "uppercase",
                },
                children: "INITIALIZING",
              }),
            ],
          });
    }
    let n = [
      { label: "X OFFICIAL", color: "#fff" },

      { label: "MEDIUM", color: "#34d399" },
      { label: "TIKTOK", color: "#f472b6" },
      { label: "DEXSCREENER", color: "#fbbf24" },
      { label: "COINGECKO", color: "#a78bfa" },
      { label: "MAGIC EDEN", color: "#fb923c" },
      { label: "OFFICIAL LINKS", color: "rgba(255,255,255,.25)" },
    ];
    e.s([
      "OfficialLinksSection",
      0,
      function () {
        let e = (0, r.useRef)(null),
          [o, s] = (0, r.useState)(!1),
          [l, d] = (0, r.useState)(null);
        return (
          (0, r.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let r = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && (s(!0), r.disconnect());
              },
              { threshold: 0.1 }
            );
            return r.observe(t), () => r.disconnect();
          }, []),
          (0, t.jsxs)("section", {
            ref: e,
            id: "links",
            style: {
              position: "relative",
              width: "100%",
              background: "#030303",
              borderTop: "1px solid rgba(255,255,255,.06)",
              overflow: "hidden",
            },
            "aria-labelledby": "links-title",
            children: [
              (0, t.jsx)("style", {
                children: `
        @keyframes ol-blink { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes ol-tape { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes ol-spin-dot { 0%{opacity:1} 50%{opacity:.2} 100%{opacity:1} }
        @keyframes ol-fade-up { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ol-card-in { from{opacity:0;transform:translateY(32px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes ol-scan { 0%{top:-100%} 100%{top:200%} }
        .ol-card { transition: transform .28s cubic-bezier(.34,1.56,.64,1), box-shadow .28s ease, border-color .28s ease; }
        .ol-card:hover { transform: translateY(-6px) scale(1.025) !important; }
        .ol-card:active { transform: translateY(-2px) scale(1.01) !important; }
        .ol-arrow { transition: transform .22s ease, opacity .22s ease; opacity: 0; transform: translateX(-4px); }
        .ol-card:hover .ol-arrow { opacity: 1; transform: translateX(0); }
        .ol-icon-wrap { transition: filter .28s ease, transform .28s ease; }
        .ol-card:hover .ol-icon-wrap { transform: scale(1.12); }
      `,
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  top: "-10%",
                  left: "10%",
                  width: 500,
                  height: 500,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle,rgba(79,195,247,.04) 0%,transparent 70%)",
                  pointerEvents: "none",
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  bottom: "-10%",
                  right: "10%",
                  width: 400,
                  height: 400,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle,rgba(167,139,250,.04) 0%,transparent 70%)",
                  pointerEvents: "none",
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,.012) 2px,rgba(255,255,255,.012) 4px)",
                  pointerEvents: "none",
                  zIndex: 0,
                },
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  borderBottom: "1px solid rgba(255,255,255,.05)",
                  overflow: "hidden",
                },
                children: (0, t.jsx)("div", {
                  style: {
                    display: "flex",
                    animation: "ol-tape 28s linear infinite",
                    whiteSpace: "nowrap",
                    width: "max-content",
                  },
                  children: [...n, ...n].map((e, r) =>
                    (0, t.jsxs)(
                      "span",
                      {
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 18,
                          padding: "8px 28px",
                          fontFamily: "monospace",
                          fontSize: 9,
                          letterSpacing: "3px",
                          color: e.color,
                          textTransform: "uppercase",
                        },
                        children: [
                          e.label,
                          (0, t.jsx)("span", {
                            style: {
                              width: 3,
                              height: 3,
                              borderRadius: "50%",
                              background: "rgba(79,195,247,.4)",
                              display: "inline-block",
                              flexShrink: 0,
                            },
                          }),
                        ],
                      },
                      r
                    )
                  ),
                }),
              }),
              (0, t.jsxs)("div", {
                style: {
                  position: "relative",
                  zIndex: 1,
                  padding:
                    "clamp(40px,6vw,80px) clamp(20px,4vw,48px) clamp(56px,7vw,96px)",
                  maxWidth: 1200,
                  margin: "0 auto",
                },
                children: [
                  (0, t.jsxs)("div", {
                    style: {
                      marginBottom: 64,
                      animation: o ? "ol-fade-up .55s .1s ease both" : "none",
                    },
                    children: [
                      (0, t.jsxs)("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          marginBottom: 20,
                        },
                        children: [
                          (0, t.jsx)("span", {
                            style: {
                              width: 24,
                              height: 1,
                              background: "rgba(79,195,247,.5)",
                            },
                          }),
                          (0, t.jsx)("span", {
                            style: {
                              fontFamily: "monospace",
                              fontSize: 9,
                              letterSpacing: "4px",
                              color: "#4fc3f7",
                              textTransform: "uppercase",
                            },
                            children: "Official Links",
                          }),
                          (0, t.jsx)("span", {
                            style: {
                              flex: 1,
                              height: 1,
                              background:
                                "linear-gradient(90deg,rgba(79,195,247,.3),transparent)",
                            },
                          }),
                        ],
                      }),
                      (0, t.jsxs)("h2", {
                        id: "links-title",
                        className: "max-md:!text-[30px]",
                        style: {
                          fontFamily: "var(--font-display)",
                          fontWeight: 900,
                          fontSize: "clamp(38px,6vw,72px)",
                          color: "#fff",
                          textTransform: "uppercase",
                          letterSpacing: "-.5px",
                          lineHeight: 0.95,
                          marginBottom: 20,
                        },
                        children: [
                          "Enter",
                          (0, t.jsx)("br", {}),
                          (0, t.jsx)("span", {
                            style: {
                              WebkitTextStroke: "1px rgba(255,255,255,.25)",
                              color: "transparent",
                            },
                            children: "the $SPCX Network",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("p", {
                        style: {
                          fontFamily: "var(--font-sans)",
                          fontWeight: 300,
                          fontSize: 14,
                          color: "rgba(255,255,255,.4)",
                          maxWidth: 460,
                          lineHeight: 1.7,
                          letterSpacing: ".3px",
                        },
                        children: [
                          "Every channel is a node.",
                          (0, t.jsx)("br", {}),
                          "Follow the signal or ignore it.",
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill,minmax(min(100%,280px),1fr))",
                      gap: 16,
                    },
                    children: i.map((e, r) => {
                      let i = l === e.id,
                        n = "live" !== e.status;
                      return (0, t.jsxs)(
                        "a",
                        {
                          href: "live" === e.status ? e.href : void 0,
                          target: "live" === e.status ? "_blank" : void 0,
                          rel: "noopener noreferrer",
                          className: "ol-card",
                          onMouseEnter: () => d(e.id),
                          onMouseLeave: () => d(null),
                          style: {
                            display: "block",
                            position: "relative",
                            padding: "28px 28px 24px",
                            background: i
                              ? `radial-gradient(ellipse at 0% 0%, ${e.glow}, rgba(0,0,0,.7) 70%)`
                              : "radial-gradient(ellipse at 0% 0%, rgba(255,255,255,.02), rgba(0,0,0,.5) 70%)",
                            border: `1px solid ${
                              i ? e.color + "44" : "rgba(255,255,255,.07)"
                            }`,
                            borderTop: `2px solid ${
                              i ? e.color : "rgba(255,255,255,.1)"
                            }`,
                            borderRadius: 4,
                            textDecoration: "none",
                            overflow: "hidden",
                            cursor: n ? "not-allowed" : "pointer",
                            opacity: n ? 0.7 : 1,
                            boxShadow: i
                              ? `0 12px 40px ${e.glow}, 0 0 0 1px ${e.color}11`
                              : "none",
                            animation: o
                              ? `ol-card-in .5s ${0.15 + 0.07 * r}s ease both`
                              : "none",
                          },
                          "aria-label": `${e.label} — ${e.sublabel}`,
                          children: [
                            i &&
                              (0, t.jsx)("div", {
                                "aria-hidden": !0,
                                style: {
                                  position: "absolute",
                                  left: 0,
                                  width: "100%",
                                  height: "40%",
                                  background: `linear-gradient(180deg,transparent,${e.color}08,transparent)`,
                                  animation: "ol-scan 1.2s ease infinite",
                                  pointerEvents: "none",
                                },
                              }),
                            (0, t.jsx)("span", {
                              "aria-hidden": !0,
                              style: {
                                position: "absolute",
                                top: 10,
                                left: 10,
                                width: 10,
                                height: 10,
                                borderTop: `1px solid ${
                                  i ? e.color : "rgba(255,255,255,.15)"
                                }`,
                                borderLeft: `1px solid ${
                                  i ? e.color : "rgba(255,255,255,.15)"
                                }`,
                                transition: "border-color .25s",
                              },
                            }),
                            (0, t.jsx)("span", {
                              "aria-hidden": !0,
                              style: {
                                position: "absolute",
                                top: 10,
                                right: 10,
                                width: 10,
                                height: 10,
                                borderTop: `1px solid ${
                                  i ? e.color : "rgba(255,255,255,.15)"
                                }`,
                                borderRight: `1px solid ${
                                  i ? e.color : "rgba(255,255,255,.15)"
                                }`,
                                transition: "border-color .25s",
                              },
                            }),
                            (0, t.jsx)("span", {
                              "aria-hidden": !0,
                              style: {
                                position: "absolute",
                                bottom: 10,
                                left: 10,
                                width: 10,
                                height: 10,
                                borderBottom: `1px solid ${
                                  i ? e.color : "rgba(255,255,255,.15)"
                                }`,
                                borderLeft: `1px solid ${
                                  i ? e.color : "rgba(255,255,255,.15)"
                                }`,
                                transition: "border-color .25s",
                              },
                            }),
                            (0, t.jsx)("span", {
                              "aria-hidden": !0,
                              style: {
                                position: "absolute",
                                bottom: 10,
                                right: 10,
                                width: 10,
                                height: 10,
                                borderBottom: `1px solid ${
                                  i ? e.color : "rgba(255,255,255,.15)"
                                }`,
                                borderRight: `1px solid ${
                                  i ? e.color : "rgba(255,255,255,.15)"
                                }`,
                                transition: "border-color .25s",
                              },
                            }),
                            (0, t.jsxs)("div", {
                              style: {
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                marginBottom: 24,
                              },
                              children: [
                                (0, t.jsx)("div", {
                                  className: "ol-icon-wrap",
                                  style: {
                                    width: 52,
                                    height: 52,
                                    borderRadius: 3,
                                    background: i
                                      ? `${e.color}15`
                                      : "rgba(255,255,255,.04)",
                                    border: `1px solid ${
                                      i
                                        ? e.color + "30"
                                        : "rgba(255,255,255,.08)"
                                    }`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    filter: i
                                      ? `drop-shadow(0 0 12px ${e.color}88)`
                                      : "none",
                                    transition: "all .28s ease",
                                  },
                                  children: e.icon(
                                    i ? e.color : "rgba(255,255,255,.55)"
                                  ),
                                }),
                                (0, t.jsx)(a, { status: e.status }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              style: { marginBottom: 6 },
                              children: (0, t.jsxs)("div", {
                                style: {
                                  fontFamily: "var(--font-display)",
                                  fontWeight: 800,
                                  fontSize: 22,
                                  color: i ? "#fff" : "rgba(255,255,255,.85)",
                                  letterSpacing: ".3px",
                                  transition: "color .25s",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                                },
                                children: [
                                  e.label,
                                  (0, t.jsx)("svg", {
                                    className: "ol-arrow",
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    children: (0, t.jsx)("path", {
                                      d: "M2 7h10M8 3l4 4-4 4",
                                      stroke: e.color,
                                      strokeWidth: "1.5",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              style: {
                                fontFamily: "monospace",
                                fontSize: 9,
                                letterSpacing: "3px",
                                color: i ? e.color : "rgba(255,255,255,.2)",
                                textTransform: "uppercase",
                                transition: "color .25s",
                              },
                              children: e.sublabel,
                            }),
                            (0, t.jsx)("div", {
                              style: {
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: 2,
                                background: i
                                  ? `linear-gradient(90deg,transparent,${e.color},transparent)`
                                  : "transparent",
                                transition: "background .3s ease",
                              },
                            }),
                          ],
                        },
                        e.id
                      );
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                style: {
                  borderTop: "1px solid rgba(255,255,255,.05)",
                  overflow: "hidden",
                },
                children: (0, t.jsx)("div", {
                  style: {
                    display: "flex",
                    animationName: "ol-tape",
                    animationDuration: "22s",
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationDirection: "reverse",
                    whiteSpace: "nowrap",
                    width: "max-content",
                  },
                  children: [...n, ...n].map((e, r) =>
                    (0, t.jsxs)(
                      "span",
                      {
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 18,
                          padding: "8px 28px",
                          fontFamily: "monospace",
                          fontSize: 9,
                          letterSpacing: "3px",
                          color: "rgba(255,255,255,.15)",
                          textTransform: "uppercase",
                        },
                        children: [
                          e.label,
                          (0, t.jsx)("span", {
                            style: {
                              width: 3,
                              height: 3,
                              borderRadius: "50%",
                              background: "rgba(255,255,255,.1)",
                              display: "inline-block",
                              flexShrink: 0,
                            },
                          }),
                        ],
                      },
                      r
                    )
                  ),
                }),
              }),
            ],
          })
        );
      },
    ]);
  },
  9785,
  (e) => {
    "use strict";
    var t = e.i(77117),
      r = e.i(91983);
    e.s([
      "ContactSection",
      0,
      function () {
        let e = (0, r.useRef)(null),
          [i, a] = (0, r.useState)(!1),
          [n, o] = (0, r.useState)(null);
        (0, r.useEffect)(() => {
          let t = new IntersectionObserver(
            ([e]) => {
              e.isIntersecting && a(!0);
            },
            { threshold: 0.15 }
          );
          return e.current && t.observe(e.current), () => t.disconnect();
        }, []);
        let s = [
          {
            key: "email",
            label: "Email",
            tag: "DIRECT MESSAGE",
            value: "contact@spcxmeme.com",
            display: "contact@spcxmeme.com",
            note: null,
            color: "#4fc3f7",
            glow: "rgba(79,195,247,.2)",
            href: "mailto:contact@spcxmeme.com",
            copyable: !0,
            icon: (e) =>
              (0, t.jsxs)("svg", {
                width: "28",
                height: "28",
                viewBox: "0 0 28 28",
                fill: "none",
                children: [
                  (0, t.jsx)("rect", {
                    x: "2",
                    y: "6",
                    width: "24",
                    height: "16",
                    rx: "2",
                    stroke: e,
                    strokeWidth: "1.4",
                  }),
                  (0, t.jsx)("path", {
                    d: "M2 8l12 9 12-9",
                    stroke: e,
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, t.jsx)("line", {
                    x1: "2",
                    y1: "22",
                    x2: "9",
                    y2: "15",
                    stroke: e,
                    strokeWidth: "1",
                    opacity: ".4",
                  }),
                  (0, t.jsx)("line", {
                    x1: "26",
                    y1: "22",
                    x2: "19",
                    y2: "15",
                    stroke: e,
                    strokeWidth: "1",
                    opacity: ".4",
                  }),
                ],
              }),
          },
          {
            key: "telegram",
            label: "Telegram",
            tag: "INSTANT CHAT",
            value: "@mod_spcx",
            display: "@mod_spcx",
            note: null,
            color: "#34d399",
            glow: "rgba(52,211,153,.2)",
            href: "https://t.me/mod_spcx",
            copyable: !1,
            icon: (e) =>
              (0, t.jsxs)("svg", {
                width: "28",
                height: "28",
                viewBox: "0 0 28 28",
                fill: "none",
                children: [
                  (0, t.jsx)("circle", {
                    cx: "14",
                    cy: "14",
                    r: "12",
                    stroke: e,
                    strokeWidth: "1.4",
                    opacity: ".4",
                  }),
                  (0, t.jsx)("path", {
                    d: "M6.5 13.8l13-5.2c.6-.2 1.1.1 1 .8l-2.2 10.4c-.2.7-.7.9-1.2.6l-3.4-2.5-1.6 1.5c-.2.2-.4.3-.7.3l.3-3.5 6.5-5.9c.3-.3 0-.4-.4-.2L9.5 16.4l-3-.9c-.7-.2-.7-.6.5-1z",
                    fill: e,
                  }),
                ],
              }),
          },
          {
            key: "x-agent",
            label: "X",
            tag: "FOLLOW & DM",
            value: "@SPCXAgent",
            display: "@SPCXAgent",
            note: null,
            color: "#22d3ee",
            glow: "rgba(34,211,238,.15)",
            href: "https://x.com/SPCXAgent",
            copyable: !1,
            icon: (e) =>
              (0, t.jsx)("svg", {
                width: "26",
                height: "26",
                viewBox: "0 0 26 26",
                fill: "none",
                children: (0, t.jsx)("path", {
                  d: "M3 3l8.5 11.5L3 23h2.5l6.7-7.3L18 23h5L14 10.8 22.5 3H20l-7 7.7L8 3H3z",
                  fill: e,
                }),
              }),
          },
        ];
        return (0, t.jsxs)("section", {
          id: "contact",
          ref: e,
          style: {
            position: "relative",
            width: "100%",
            background: "#020202",
            borderTop: "1px solid rgba(255,255,255,.06)",
            overflow: "hidden",
            padding:
              "clamp(48px,8vw,100px) clamp(20px,4vw,48px) clamp(60px,9vw,110px)",
          },
          "aria-labelledby": "contact-title",
          children: [
            (0, t.jsx)("style", {
              children: `
        @keyframes ct-in{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        @keyframes ct-blink{0%,100%{opacity:1}50%{opacity:.2}}
        @keyframes ct-scan{0%{transform:translateY(-100%)}100%{transform:translateY(100vh)}}

        .ct-card:hover .ct-arrow{transform:translateX(5px)!important}
        .ct-card:hover{border-color:rgba(255,255,255,.14)!important}
        .ct-copy-btn:hover{background:rgba(255,255,255,.06)!important}
      `,
            }),
            (0, t.jsx)("div", {
              "aria-hidden": !0,
              style: {
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
                backgroundSize: "60px 60px",
                pointerEvents: "none",
              },
            }),
            (0, t.jsx)("div", {
              "aria-hidden": !0,
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg,transparent,rgba(79,195,247,.08),transparent)",
                animation: "ct-scan 8s linear infinite",
                pointerEvents: "none",
                zIndex: 1,
              },
            }),
            (0, t.jsx)("div", {
              "aria-hidden": !0,
              style: {
                position: "absolute",
                top: "10%",
                left: "5%",
                width: 300,
                height: 300,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(79,195,247,.04),transparent 70%)",
                pointerEvents: "none",
              },
            }),
            (0, t.jsx)("div", {
              "aria-hidden": !0,
              style: {
                position: "absolute",
                bottom: "10%",
                right: "5%",
                width: 280,
                height: 280,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(52,211,153,.04),transparent 70%)",
                pointerEvents: "none",
              },
            }),
            (0, t.jsxs)("div", {
              className: "max-md:px-5",
              style: {
                position: "relative",
                zIndex: 3,
                maxWidth: 1100,
                margin: "0 auto",
              },
              children: [
                (0, t.jsxs)("div", {
                  style: {
                    marginBottom: 72,
                    animation: i ? "ct-in .55s ease both" : "none",
                  },
                  children: [
                    (0, t.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 20,
                      },
                      children: [
                        (0, t.jsx)("span", {
                          style: {
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "#34d399",
                            boxShadow: "0 0 8px #34d399",
                            animation: "ct-blink 1.6s ease infinite",
                          },
                        }),
                        (0, t.jsx)("span", {
                          style: {
                            fontFamily: "monospace",
                            fontSize: 9,
                            letterSpacing: "4px",
                            color: "#34d399",
                            textTransform: "uppercase",
                          },
                          children: "Contact",
                        }),
                        (0, t.jsx)("span", {
                          style: {
                            flex: 1,
                            height: "1px",
                            background:
                              "linear-gradient(90deg,rgba(52,211,153,.3),transparent)",
                          },
                        }),
                      ],
                    }),
                    (0, t.jsxs)("h2", {
                      id: "contact-title",
                      className: "max-md:!text-[32px] max-md:!leading-tight",
                      style: {
                        fontFamily: "var(--font-display)",
                        fontWeight: 900,
                        fontSize: "clamp(44px,6vw,88px)",
                        color: "#fff",
                        lineHeight: 0.9,
                        letterSpacing: "-1px",
                        textTransform: "uppercase",
                        marginBottom: 20,
                      },
                      children: [
                        "GET IN",
                        (0, t.jsx)("br", {}),
                        (0, t.jsx)("span", {
                          style: {
                            WebkitTextStroke: "1px rgba(255,255,255,.25)",
                            color: "transparent",
                          },
                          children: "TOUCH.",
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      style: {
                        fontFamily: "var(--font-sans)",
                        fontWeight: 300,
                        fontSize: 15,
                        color: "rgba(255,255,255,.45)",
                        maxWidth: 520,
                        lineHeight: 1.7,
                      },
                      children:
                        "Have a question, proposal, or want to be part of the mission? Reach us through the official channels below.",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "max-md:!grid-cols-1",
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: 16,
                  },
                  children: s.map((e, r) => {
                    let a = n === e.key;
                    return (0, t.jsxs)(
                      "div",
                      {
                        className: "ct-card",
                        style: {
                          position: "relative",
                          overflow: "hidden",
                          padding: "32px 28px",
                          background: `radial-gradient(ellipse at top left,${e.glow},transparent 60%)`,
                          border: "1px solid rgba(255,255,255,.07)",
                          borderTop: `2px solid ${e.color}`,
                          borderRadius: 4,
                          transition: "border-color .25s ease",
                          animation: i
                            ? `ct-in .55s ${0.15 + 0.12 * r}s ease both`
                            : "none",
                        },
                        children: [
                          (0, t.jsx)("div", {
                            "aria-hidden": !0,
                            style: {
                              position: "absolute",
                              top: 14,
                              right: 14,
                              width: 14,
                              height: 14,
                              borderTop: `1px solid ${e.color}55`,
                              borderRight: `1px solid ${e.color}55`,
                            },
                          }),
                          (0, t.jsx)("div", {
                            "aria-hidden": !0,
                            style: {
                              position: "absolute",
                              bottom: 14,
                              left: 14,
                              width: 14,
                              height: 14,
                              borderBottom: `1px solid ${e.color}33`,
                              borderLeft: `1px solid ${e.color}33`,
                            },
                          }),
                          (0, t.jsx)("div", {
                            style: {
                              width: 52,
                              height: 52,
                              borderRadius: "50%",
                              background: `radial-gradient(circle,${e.glow},transparent 70%)`,
                              border: `1px solid ${e.color}33`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: 24,
                              filter: `drop-shadow(0 0 10px ${e.color}66)`,
                            },
                            children: e.icon(e.color),
                          }),
                          (0, t.jsx)("div", {
                            style: {
                              fontFamily: "monospace",
                              fontSize: 8,
                              letterSpacing: "3px",
                              color: e.color,
                              textTransform: "uppercase",
                              marginBottom: 8,
                            },
                            children: e.tag,
                          }),
                          (0, t.jsx)("div", {
                            style: {
                              fontFamily: "var(--font-display)",
                              fontWeight: 800,
                              fontSize: 22,
                              color: "#fff",
                              letterSpacing: ".5px",
                              textTransform: "uppercase",
                              marginBottom: 16,
                            },
                            children: e.label,
                          }),
                          (0, t.jsxs)("div", {
                            style: {
                              padding: "14px 16px",
                              background: "rgba(0,0,0,.4)",
                              border: `1px solid ${e.color}22`,
                              borderLeft: `2px solid ${e.color}88`,
                              borderRadius: 3,
                              marginBottom: 8 * !!e.note,
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                            },
                            children: [
                              (0, t.jsx)("code", {
                                style: {
                                  fontFamily: "monospace",
                                  fontSize: 13,
                                  color: "rgba(255,255,255,.8)",
                                  flex: 1,
                                  letterSpacing: ".3px",
                                },
                                children: e.display,
                              }),
                              e.copyable
                                ? (0, t.jsx)("button", {
                                    className: "ct-copy-btn",
                                    onClick: () => {
                                      var t, r;
                                      return (
                                        (t = e.value),
                                        (r = e.key),
                                        void navigator.clipboard
                                          .writeText(t)
                                          .then(() => {
                                            o(r),
                                              setTimeout(() => o(null), 2e3);
                                          })
                                      );
                                    },
                                    style: {
                                      flexShrink: 0,
                                      padding: "5px 10px",
                                      background: a
                                        ? "rgba(52,211,153,.1)"
                                        : "transparent",
                                      border: `1px solid ${
                                        a
                                          ? "rgba(52,211,153,.4)"
                                          : e.color + "33"
                                      }`,
                                      borderRadius: 2,
                                      cursor: "pointer",
                                      fontFamily: "monospace",
                                      fontSize: 9,
                                      letterSpacing: "2px",
                                      color: a ? "#34d399" : e.color,
                                      textTransform: "uppercase",
                                      transition: "all .2s ease",
                                    },
                                    children: a ? "COPIED ✓" : "COPY",
                                  })
                                : e.href
                                ? (0, t.jsx)("a", {
                                    href: e.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "ct-arrow",
                                    style: {
                                      flexShrink: 0,
                                      color: e.color,
                                      fontFamily: "monospace",
                                      fontSize: 14,
                                      transition: "transform .2s ease",
                                      display: "inline-block",
                                    },
                                    "aria-label": `Open ${e.label}`,
                                    children: "→",
                                  })
                                : null,
                            ],
                          }),
                          e.note &&
                            (0, t.jsx)("div", {
                              style: {
                                fontFamily: "monospace",
                                fontSize: 8,
                                letterSpacing: "1.5px",
                                color: "rgba(255,255,255,.2)",
                                marginTop: 6,
                                paddingLeft: 2,
                              },
                              children: e.note,
                            }),
                          e.href &&
                            (0, t.jsxs)("a", {
                              href: e.href,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                marginTop: 20,
                                fontFamily: "var(--font-display)",
                                fontWeight: 600,
                                fontSize: 10,
                                letterSpacing: "2.5px",
                                color: e.color,
                                textTransform: "uppercase",
                                textDecoration: "none",
                                opacity: 0.7,
                                transition: "opacity .2s ease",
                              },
                              onMouseEnter: (e) =>
                                (e.currentTarget.style.opacity = "1"),
                              onMouseLeave: (e) =>
                                (e.currentTarget.style.opacity = ".7"),
                              children: [
                                "Open",
                                (0, t.jsx)("span", {
                                  className: "ct-arrow",
                                  style: {
                                    transition: "transform .2s ease",
                                    display: "inline-block",
                                  },
                                  children: "→",
                                }),
                              ],
                            }),
                        ],
                      },
                      e.key
                    );
                  }),
                }),
                (0, t.jsx)("div", {
                  style: {
                    marginTop: 72,
                    height: "1px",
                    background:
                      "linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent)",
                  },
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
  64371,
  (e) => {
    "use strict";
    var t = e.i(77117),
      r = e.i(91983);
    let i = "0xcomingsoon",
      a = "#4fc3f7",
      n = "rgba(79,195,247,";
    e.s([
      "CABanner",
      0,
      function () {
        let [e, o] = (0, r.useState)(!1),
          [s, l] = (0, r.useState)(!1),
          [d, c] = (0, r.useState)(!1),
          [p, h] = (0, r.useState)({ x: 0, y: 0 }),
          [g, f] = (0, r.useState)(!1),
          [x, u] = (0, r.useState)(0),
          [m, b] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          b(window.innerWidth < 768);
          let e = () => b(window.innerWidth < 768);
          return (
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let y = (0, r.useRef)(null),
          v = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          let e,
            t = v.current;
          if (!t) return;
          let r = t.getContext("2d"),
            i = [],
            a = () => {
              (t.width = t.offsetWidth),
                (t.height = t.offsetHeight),
                (i = Array.from({ length: 120 }, () => ({
                  x: Math.random() * t.width,
                  y: Math.random() * t.height,
                  r: 1.2 * Math.random() + 0.2,
                  speed: 0.18 * Math.random() + 0.04,
                  opacity: Math.random(),
                  pulse: Math.random() * Math.PI * 2,
                })));
            },
            n = (a) => {
              r.clearRect(0, 0, t.width, t.height),
                i.forEach((e) => {
                  e.pulse += 0.012;
                  let i = 0.15 + 0.55 * Math.abs(Math.sin(e.pulse));
                  r.beginPath(),
                    r.arc(e.x, e.y, e.r, 0, 2 * Math.PI),
                    (r.fillStyle = `rgba(79,195,247,${0.5 * i})`),
                    r.fill(),
                    (e.y -= e.speed),
                    e.y < -2 &&
                      ((e.y = t.height + 2), (e.x = Math.random() * t.width));
                }),
                (e = requestAnimationFrame(n));
            };
          return (
            a(),
            window.addEventListener("resize", a),
            (e = requestAnimationFrame(n)),
            () => {
              cancelAnimationFrame(e), window.removeEventListener("resize", a);
            }
          );
        }, [v]),
          (0, r.useEffect)(() => {
            let e = y.current;
            if (!e) return;
            let t = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && l(!0);
              },
              { threshold: 0.15 }
            );
            return t.observe(e), () => t.disconnect();
          }, []),
          (0, r.useEffect)(() => {
            let e = setInterval(() => {
              f(!0), setTimeout(() => f(!1), 130);
            }, 4e3);
            return () => clearInterval(e);
          }, []),
          (0, r.useEffect)(() => {
            let e,
              t = 0,
              r = () => {
                u((t = (t + 0.5) % 100)), (e = requestAnimationFrame(r));
              };
            return (
              (e = requestAnimationFrame(r)), () => cancelAnimationFrame(e)
            );
          }, []);
        let w = (0, r.useCallback)((e) => {
            let t = y.current?.getBoundingClientRect();
            t &&
              h({
                x: 18 * ((e.clientX - t.left) / t.width - 0.5),
                y: 10 * ((e.clientY - t.top) / t.height - 0.5),
              });
          }, []),
          k = () => {
            navigator.clipboard.writeText(i),
              o(!0),
              setTimeout(() => o(!1), 2500);
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("style", {
              children: `
        @keyframes cab-up {
          from { opacity:0; transform:translateY(40px) scale(.97); }
          to   { opacity:1; transform:translateY(0)    scale(1);   }
        }
        @keyframes cab-pulse {
          0%,100% { box-shadow: 0 0 0   0   ${n}.0), inset 0 0 0   0   ${n}.0); border-color:${n}.15); }
          50%     { box-shadow: 0 0 24px 4px ${n}.08),inset 0 0 16px 2px ${n}.03); border-color:${n}.40); }
        }
        @keyframes cab-glow-dot {
          0%,100% { box-shadow:0 0 5px 2px ${n}.7); opacity:1; }
          50%     { box-shadow:0 0 10px 3px ${n}.3); opacity:.5; }
        }
        @keyframes cab-ticker {
          0%   { transform:translateX(0); }
          100% { transform:translateX(-50%); }
        }
        @keyframes cab-glitch-r {
          0%  { clip-path:inset(10% 0 80% 0); transform:translateX(4px);  opacity:.7; }
          33% { clip-path:inset(50% 0 30% 0); transform:translateX(-4px); opacity:.5; }
          66% { clip-path:inset(75% 0 5%  0); transform:translateX(3px);  opacity:.6; }
          100%{ clip-path:inset(0 0 0 0);     transform:translateX(0);    opacity:0;  }
        }
        @keyframes cab-ring {
          0%   { transform:scale(.85); opacity:.5; }
          100% { transform:scale(1.6); opacity:0;  }
        }
        @keyframes cab-label-in {
          from { letter-spacing:8px; opacity:0; }
          to   { letter-spacing:4px; opacity:1; }
        }
        @keyframes cab-corner-blink {
          0%,100% { opacity:.6; } 50% { opacity:.15; }
        }
      `,
            }),
            (0, t.jsxs)("section", {
              ref: y,
              onMouseMove: w,
              onMouseLeave: () => h({ x: 0, y: 0 }),
              style: {
                position: "relative",
                background: "#050a12",
                borderTop: `1px solid ${n}.08)`,
                borderBottom: `1px solid ${n}.08)`,
                overflow: "hidden",
                minHeight: "auto",
              },
              children: [
                (0, t.jsx)("canvas", {
                  ref: v,
                  style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    zIndex: 0,
                  },
                }),
                (0, t.jsx)("div", {
                  style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${n}.04) 0%, transparent 70%)`,
                  },
                }),
                (0, t.jsx)("div", {
                  style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: 1,
                    top: `${x}%`,
                    background: `linear-gradient(90deg, transparent 0%, ${n}.08) 40%, ${n}.15) 50%, ${n}.08) 60%, transparent 100%)`,
                    pointerEvents: "none",
                    zIndex: 1,
                  },
                }),
                (0, t.jsx)("div", {
                  style: {
                    borderBottom: `1px solid ${n}.07)`,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    padding: "7px 0",
                    background: `linear-gradient(90deg, ${n}.03), ${n}.015), ${n}.03))`,
                    position: "relative",
                    zIndex: 2,
                  },
                  children: (0, t.jsx)("div", {
                    style: {
                      display: "inline-flex",
                      gap: 56,
                      animation: "cab-ticker 55s linear infinite",
                    },
                    children: Array(8)
                      .fill(null)
                      .map((e, r) =>
                        (0, t.jsxs)(
                          "span",
                          {
                            style: {
                              fontFamily: "monospace",
                              fontSize: 9,
                              letterSpacing: "3px",
                              color: `${n}.35)`,
                              textTransform: "uppercase",
                            },
                            children: [
                              "CONTRACT ADDRESS · ",
                              i,
                              " · BSC · $SPCX · BUY NOW ·",
                            ],
                          },
                          r
                        )
                      ),
                  }),
                }),
                (0, t.jsxs)("div", {
                  style: {
                    maxWidth: 820,
                    margin: "0 auto",
                    padding: "clamp(24px,3vw,36px) clamp(20px,5vw,48px)",
                    position: "relative",
                    zIndex: 3,
                    opacity: +!!s,
                    animation: s
                      ? "cab-up .8s cubic-bezier(.16,1,.3,1) forwards"
                      : "none",
                    transform: m
                      ? "none"
                      : `perspective(900px) rotateX(${-(
                          0.4 * p.y
                        )}deg) rotateY(${0.4 * p.x}deg) translateZ(0)`,
                    transition: "transform .12s ease-out",
                  },
                  children: [
                    (0, t.jsxs)("div", {
                      style: {
                        marginBottom: 20,
                        animation: s
                          ? "cab-label-in .9s ease forwards"
                          : "none",
                      },
                      children: [
                        (0, t.jsxs)("div", {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            marginBottom: 14,
                          },
                          children: [
                            (0, t.jsx)("span", {
                              style: {
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: a,
                                boxShadow: `0 0 8px ${a}`,
                                display: "inline-block",
                                flexShrink: 0,
                                animation:
                                  "cab-glow-dot 1.8s ease-in-out infinite",
                              },
                            }),
                            (0, t.jsx)("span", {
                              style: {
                                fontFamily: "monospace",
                                fontSize: 9,
                                letterSpacing: "4px",
                                color: a,
                                textTransform: "uppercase",
                              },
                              children: "Contract Address",
                            }),
                            (0, t.jsx)("span", {
                              style: {
                                flex: 1,
                                height: 1,
                                background: `linear-gradient(90deg,${n}.3),transparent)`,
                              },
                            }),
                            (0, t.jsx)("span", {
                              style: {
                                fontFamily: "monospace",
                                fontSize: 9,
                                letterSpacing: "3px",
                                color: `${n}.3)`,
                                textTransform: "uppercase",
                              },
                              children: "BSC",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("h2", {
                          style: {
                            fontFamily: "var(--font-display)",
                            fontWeight: 900,
                            fontSize: "clamp(28px,4vw,52px)",
                            color: "#fff",
                            lineHeight: 0.9,
                            letterSpacing: "-1px",
                            textTransform: "uppercase",
                            margin: 0,
                          },
                          children: [
                            "CONTRACT",
                            (0, t.jsx)("span", {
                              style: {
                                WebkitTextStroke: "1px rgba(255,255,255,.2)",
                                color: "transparent",
                                marginLeft: 12,
                              },
                              children: "ADDRESS.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      onMouseEnter: () => c(!0),
                      onMouseLeave: () => c(!1),
                      onClick: k,
                      style: {
                        position: "relative",
                        overflow: "hidden",
                        border: `1px solid ${n}.2)`,
                        borderLeft: `3px solid ${a}`,
                        background: d
                          ? `linear-gradient(135deg, ${n}.05) 0%, ${n}.02) 100%)`
                          : `linear-gradient(135deg, ${n}.03) 0%, ${n}.01) 100%)`,
                        borderRadius: 2,
                        padding: "clamp(12px,2vw,18px) clamp(14px,2vw,22px)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        animation: "cab-pulse 3.5s ease-in-out infinite",
                        transition: "background .3s",
                        boxShadow: d
                          ? `0 0 28px 2px ${n}.06), inset 0 0 16px 0 ${n}.03)`
                          : "none",
                      },
                      children: [
                        ["tl", "tr", "bl", "br"].map((e) =>
                          (0, t.jsx)(
                            "span",
                            {
                              style: {
                                position: "absolute",
                                top: e.startsWith("t") ? 6 : "auto",
                                bottom: e.startsWith("b") ? 6 : "auto",
                                left: e.endsWith("l") ? 6 : "auto",
                                right: e.endsWith("r") ? 6 : "auto",
                                width: 10,
                                height: 10,
                                borderTop: e.startsWith("t")
                                  ? `1px solid ${n}.35)`
                                  : "none",
                                borderBottom: e.startsWith("b")
                                  ? `1px solid ${n}.35)`
                                  : "none",
                                borderLeft: e.endsWith("l")
                                  ? `1px solid ${n}.35)`
                                  : "none",
                                borderRight: e.endsWith("r")
                                  ? `1px solid ${n}.35)`
                                  : "none",
                                animation:
                                  "cab-corner-blink 2.5s ease-in-out infinite",
                                animationDelay:
                                  "tl" === e
                                    ? "0s"
                                    : "tr" === e
                                    ? ".6s"
                                    : "bl" === e
                                    ? "1.2s"
                                    : "1.8s",
                              },
                            },
                            e
                          )
                        ),
                        g &&
                          (0, t.jsx)("div", {
                            style: {
                              position: "absolute",
                              inset: 0,
                              zIndex: 2,
                              pointerEvents: "none",
                              background: `${n}.04)`,
                              animation: "cab-glitch-r .13s steps(3) forwards",
                            },
                          }),
                        (0, t.jsx)("code", {
                          style: {
                            fontFamily: "monospace",
                            fontSize: "clamp(10px,1.8vw,16px)",
                            fontWeight: 700,
                            color: e ? a : "rgba(255,255,255,.9)",
                            letterSpacing: "1px",
                            flex: 1,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            transition: "color .3s",
                            textShadow: e
                              ? `0 0 14px ${n}.6)`
                              : d
                              ? `0 0 8px ${n}.25)`
                              : "none",
                          },
                          children: i,
                        }),
                        (0, t.jsx)("button", {
                          onClick: (e) => {
                            e.stopPropagation(), k();
                          },
                          style: {
                            flexShrink: 0,
                            fontFamily: "monospace",
                            fontSize: 10,
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            color: e ? a : `${n}.7)`,
                            background: e ? `${n}.10)` : `${n}.05)`,
                            border: `1px solid ${e ? n + ".30)" : n + ".15)"}`,
                            borderRadius: 2,
                            padding: "8px 16px",
                            cursor: "pointer",
                            transition: "all .25s",
                            whiteSpace: "nowrap",
                            boxShadow: e ? `0 0 12px 2px ${n}.15)` : "none",
                          },
                          children: e ? "Copied ✓" : "Copy CA",
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      style: {
                        fontFamily: "monospace",
                        fontSize: 9,
                        letterSpacing: "2.5px",
                        color: `${n}.22)`,
                        textTransform: "uppercase",
                        textAlign: "center",
                        marginTop: 14,
                      },
                      children:
                        "Click to copy · Always verify before buying · $SPCX on BSC",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  style: {
                    borderTop: `1px solid ${n}.07)`,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    padding: "7px 0",
                    background: `linear-gradient(90deg, ${n}.03), ${n}.015), ${n}.03))`,
                    position: "relative",
                    zIndex: 2,
                  },
                  children: (0, t.jsx)("div", {
                    style: {
                      display: "inline-flex",
                      gap: 56,
                      animation: "cab-ticker 55s linear infinite reverse",
                    },
                    children: Array(8)
                      .fill(null)
                      .map((e, r) =>
                        (0, t.jsx)(
                          "span",
                          {
                            style: {
                              fontFamily: "monospace",
                              fontSize: 9,
                              letterSpacing: "3px",
                              color: `${n}.35)`,
                              textTransform: "uppercase",
                            },
                            children:
                              "BUY $SPCX · PUMP.FUN · MAKING LIFE MULTIPLANETARY · BSC · JOIN THE MISSION ·",
                          },
                          r
                        )
                      ),
                  }),
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
]);
