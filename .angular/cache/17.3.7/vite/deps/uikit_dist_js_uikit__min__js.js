import {
  __async,
  __commonJS,
  __spreadProps,
  __spreadValues
} from "./chunk-WKYGNSYM.js";

// node_modules/uikit/dist/js/uikit.min.js
var require_uikit_min = __commonJS({
  "node_modules/uikit/dist/js/uikit.min.js"(exports, module) {
    (function(xe, $e) {
      typeof exports == "object" && typeof module < "u" ? module.exports = $e() : typeof define == "function" && define.amd ? define("uikit", $e) : (xe = typeof globalThis < "u" ? globalThis : xe || self, xe.UIkit = $e());
    })(exports, function() {
      "use strict";
      const { hasOwnProperty: xe, toString: $e } = Object.prototype;
      function mt(t, e) {
        return xe.call(t, e);
      }
      const er = /\B([A-Z])/g, Ot = ht((t) => t.replace(er, "-$1").toLowerCase()), ir = /-(\w)/g, ye = ht((t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace(ir, (e, i) => i.toUpperCase())), St = ht((t) => t.charAt(0).toUpperCase() + t.slice(1));
      function ft(t, e) {
        var i;
        return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e);
      }
      function ee(t, e) {
        var i;
        return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e);
      }
      function m(t, e) {
        var i;
        return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e);
      }
      function wt(t, e) {
        var i;
        return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e);
      }
      const { isArray: K, from: Dt } = Array, { assign: dt } = Object;
      function tt(t) {
        return typeof t == "function";
      }
      function It(t) {
        return t !== null && typeof t == "object";
      }
      function ie(t) {
        return $e.call(t) === "[object Object]";
      }
      function se(t) {
        return It(t) && t === t.window;
      }
      function ke(t) {
        return Fi(t) === 9;
      }
      function Ke(t) {
        return Fi(t) >= 1;
      }
      function Se(t) {
        return Fi(t) === 1;
      }
      function Fi(t) {
        return !se(t) && It(t) && t.nodeType;
      }
      function ne(t) {
        return typeof t == "boolean";
      }
      function N(t) {
        return typeof t == "string";
      }
      function Ie(t) {
        return typeof t == "number";
      }
      function vt(t) {
        return Ie(t) || N(t) && !isNaN(t - parseFloat(t));
      }
      function Ze(t) {
        return !(K(t) ? t.length : It(t) && Object.keys(t).length);
      }
      function G(t) {
        return t === void 0;
      }
      function Hi(t) {
        return ne(t) ? t : t === "true" || t === "1" || t === "" ? true : t === "false" || t === "0" ? false : t;
      }
      function xt(t) {
        const e = Number(t);
        return isNaN(e) ? false : e;
      }
      function S(t) {
        return parseFloat(t) || 0;
      }
      function j(t) {
        return t && E(t)[0];
      }
      function E(t) {
        return Ke(t) ? [t] : Array.from(t || []).filter(Ke);
      }
      function Mt(t) {
        if (se(t))
          return t;
        t = j(t);
        const e = ke(t) ? t : t == null ? void 0 : t.ownerDocument;
        return (e == null ? void 0 : e.defaultView) || window;
      }
      function Qe(t, e) {
        return t === e || It(t) && It(e) && Object.keys(t).length === Object.keys(e).length && Nt(t, (i, s) => i === e[s]);
      }
      function Li(t, e, i) {
        return t.replace(new RegExp(`${e}|${i}`, "g"), (s) => s === e ? i : e);
      }
      function Bt(t) {
        return t[t.length - 1];
      }
      function Nt(t, e) {
        for (const i in t)
          if (e(t[i], i) === false)
            return false;
        return true;
      }
      function Rs(t, e) {
        return t.slice().sort(({ [e]: i = 0 }, { [e]: s = 0 }) => i > s ? 1 : s > i ? -1 : 0);
      }
      function zt(t, e) {
        return t.reduce((i, s) => i + S(tt(e) ? e(s) : s[e]), 0);
      }
      function qs(t, e) {
        const i = /* @__PURE__ */ new Set();
        return t.filter(({ [e]: s }) => i.has(s) ? false : i.add(s));
      }
      function Wi(t, e) {
        return e.reduce((i, s) => __spreadProps(__spreadValues({}, i), { [s]: t[s] }), {});
      }
      function Z(t, e = 0, i = 1) {
        return Math.min(Math.max(xt(t) || 0, e), i);
      }
      function O() {
      }
      function ji(...t) {
        return [["bottom", "top"], ["right", "left"]].every(([e, i]) => Math.min(...t.map(({ [e]: s }) => s)) - Math.max(...t.map(({ [i]: s }) => s)) > 0);
      }
      function ti(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
      }
      function Ri(t, e, i) {
        const s = e === "width" ? "height" : "width";
        return { [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s], [e]: i };
      }
      function Us(t, e) {
        t = __spreadValues({}, t);
        for (const i in t)
          t = t[i] > e[i] ? Ri(t, i, e[i]) : t;
        return t;
      }
      function sr(t, e) {
        t = Us(t, e);
        for (const i in t)
          t = t[i] < e[i] ? Ri(t, i, e[i]) : t;
        return t;
      }
      const qi = { ratio: Ri, contain: Us, cover: sr };
      function nt(t, e, i = 0, s = false) {
        e = E(e);
        const { length: n } = e;
        return n ? (t = vt(t) ? xt(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? n - 1 : e.indexOf(j(t)), s ? Z(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1;
      }
      function ht(t) {
        const e = /* @__PURE__ */ Object.create(null);
        return (i, ...s) => e[i] || (e[i] = t(i, ...s));
      }
      function d(t, e, i) {
        var s;
        if (It(e)) {
          for (const n in e)
            d(t, n, e[n]);
          return;
        }
        if (G(i))
          return (s = j(t)) == null ? void 0 : s.getAttribute(e);
        for (const n of E(t))
          tt(i) && (i = i.call(n, d(n, e))), i === null ? Ee(n, e) : n.setAttribute(e, i);
      }
      function Et(t, e) {
        return E(t).some((i) => i.hasAttribute(e));
      }
      function Ee(t, e) {
        E(t).forEach((i) => i.removeAttribute(e));
      }
      function X(t, e) {
        for (const i of [e, `data-${e}`])
          if (Et(t, i))
            return d(t, i);
      }
      function k(t, ...e) {
        for (const i of E(t)) {
          const s = Ft(e).filter((n) => !$(i, n));
          s.length && i.classList.add(...s);
        }
      }
      function D(t, ...e) {
        for (const i of E(t)) {
          const s = Ft(e).filter((n) => $(i, n));
          s.length && i.classList.remove(...s);
        }
      }
      function Ui(t, e) {
        e = new RegExp(e);
        for (const i of E(t))
          i.classList.remove(...Dt(i.classList).filter((s) => s.match(e)));
      }
      function ei(t, e, i) {
        i = Ft(i), e = Ft(e).filter((s) => !m(i, s)), D(t, e), k(t, i);
      }
      function $(t, e) {
        return [e] = Ft(e), E(t).some((i) => i.classList.contains(e));
      }
      function R(t, e, i) {
        const s = Ft(e);
        G(i) || (i = !!i);
        for (const n of E(t))
          for (const o of s)
            n.classList.toggle(o, i);
      }
      function Ft(t) {
        return t ? K(t) ? t.map(Ft).flat() : String(t).split(" ").filter(Boolean) : [];
      }
      const Ht = typeof window < "u", U = Ht && document.dir === "rtl", oe = Ht && "ontouchstart" in window, re = Ht && window.PointerEvent, ct = re ? "pointerdown" : oe ? "touchstart" : "mousedown", ii = re ? "pointermove" : oe ? "touchmove" : "mousemove", Tt = re ? "pointerup" : oe ? "touchend" : "mouseup", Lt = re ? "pointerenter" : oe ? "" : "mouseenter", ae = re ? "pointerleave" : oe ? "" : "mouseleave", si = re ? "pointercancel" : "touchcancel", nr = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
      function Vi(t) {
        return E(t).some((e) => nr[e.tagName.toLowerCase()]);
      }
      const or = Ht && Element.prototype.checkVisibility || function() {
        return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
      };
      function q(t) {
        return E(t).some((e) => or.call(e));
      }
      const Te = "input,select,textarea,button";
      function Yi(t) {
        return E(t).some((e) => P(e, Te));
      }
      const Ce = `${Te},a[href],[tabindex]`;
      function ni(t) {
        return P(t, Ce);
      }
      function C(t) {
        var e;
        return (e = j(t)) == null ? void 0 : e.parentElement;
      }
      function Pe(t, e) {
        return E(t).filter((i) => P(i, e));
      }
      function P(t, e) {
        return E(t).some((i) => i.matches(e));
      }
      function _e(t, e) {
        const i = [];
        for (; t = C(t); )
          (!e || P(t, e)) && i.push(t);
        return i;
      }
      function M(t, e) {
        t = j(t);
        const i = t ? Dt(t.children) : [];
        return e ? Pe(i, e) : i;
      }
      function $t(t, e) {
        return e ? E(t).indexOf(j(e)) : M(C(t)).indexOf(t);
      }
      function le(t) {
        return t = j(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
      }
      function Gi(t) {
        if (le(t)) {
          t = j(t);
          const e = decodeURIComponent(t.hash).substring(1);
          return document.getElementById(e) || document.getElementsByName(e)[0];
        }
      }
      function Q(t, e) {
        return Xi(t, Vs(t, e));
      }
      function Ae(t, e) {
        return he(t, Vs(t, e));
      }
      function Xi(t, e) {
        return j(Xs(t, j(e), "querySelector"));
      }
      function he(t, e) {
        return E(Xs(t, j(e), "querySelectorAll"));
      }
      function Vs(t, e = document) {
        return N(t) && Ys(t).isContextSelector || ke(e) ? e : e.ownerDocument;
      }
      const rr = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, ar = /.*?[^\\](?![^(]*\))(?:,|$)/g, lr = /\s*,$/, Ys = ht((t) => {
        var e;
        t = t.replace(rr, "$1 *");
        let i = false;
        const s = [];
        for (let n of (e = t.match(ar)) != null ? e : [])
          n = n.replace(lr, "").trim(), i || (i = ["!", "+", "~", "-", ">"].includes(n[0])), s.push(n);
        return { selector: s.join(","), selectors: s, isContextSelector: i };
      }), Gs = ht((t) => {
        t = t.substr(1).trim();
        const e = t.indexOf(" ");
        return ~e ? [t.substring(0, e), t.substring(e + 1)] : [t, ""];
      });
      function Xs(t, e = document, i) {
        if (!t || !N(t))
          return t;
        const s = Ys(t);
        if (!s.isContextSelector)
          return Ji(e, i, s.selector);
        t = "";
        const n = s.selectors.length === 1;
        for (let o of s.selectors) {
          let r, a = e;
          if (o[0] === "!" && ([r, o] = Gs(o), a = e.parentElement.closest(r), !o && n) || a && o[0] === "-" && ([r, o] = Gs(o), a = a.previousElementSibling, a = P(a, r) ? a : null, !o && n))
            return a;
          if (a) {
            if (n)
              return o[0] === "~" || o[0] === "+" ? (o = `:scope > :nth-child(${$t(a) + 1}) ${o}`, a = a.parentElement) : o[0] === ">" && (o = `:scope ${o}`), Ji(a, i, o);
            t += `${t ? "," : ""}${hr(a)} ${o}`;
          }
        }
        return ke(e) || (e = e.ownerDocument), Ji(e, i, t);
      }
      function Ji(t, e, i) {
        try {
          return t[e](i);
        } catch {
          return null;
        }
      }
      function hr(t) {
        const e = [];
        for (; t.parentNode; ) {
          const i = d(t, "id");
          if (i) {
            e.unshift(`#${Ki(i)}`);
            break;
          } else {
            let { tagName: s } = t;
            s !== "HTML" && (s += `:nth-child(${$t(t) + 1})`), e.unshift(s), t = t.parentNode;
          }
        }
        return e.join(" > ");
      }
      function Ki(t) {
        return N(t) ? CSS.escape(t) : "";
      }
      function x(...t) {
        let [e, i, s, n, o = false] = Zi(t);
        n.length > 1 && (n = ur(n)), o != null && o.self && (n = fr(n)), s && (n = cr(s, n));
        for (const r of i)
          for (const a of e)
            a.addEventListener(r, n, o);
        return () => Ct(e, i, n, o);
      }
      function Ct(...t) {
        let [e, i, , s, n = false] = Zi(t);
        for (const o of i)
          for (const r of e)
            r.removeEventListener(o, s, n);
      }
      function F(...t) {
        const [e, i, s, n, o = false, r] = Zi(t), a = x(e, i, s, (l) => {
          const h = !r || r(l);
          h && (a(), n(l, h));
        }, o);
        return a;
      }
      function v(t, e, i) {
        return Qi(t).every((s) => s.dispatchEvent(Wt(e, true, true, i)));
      }
      function Wt(t, e = true, i = false, s) {
        return N(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: i, detail: s })), t;
      }
      function Zi(t) {
        return t[0] = Qi(t[0]), N(t[1]) && (t[1] = t[1].split(" ")), tt(t[2]) && t.splice(2, 0, false), t;
      }
      function cr(t, e) {
        return (i) => {
          const s = t[0] === ">" ? he(t, i.currentTarget).reverse().find((n) => n.contains(i.target)) : i.target.closest(t);
          s && (i.current = s, e.call(this, i), delete i.current);
        };
      }
      function ur(t) {
        return (e) => K(e.detail) ? t(e, ...e.detail) : t(e);
      }
      function fr(t) {
        return function(e) {
          if (e.target === e.currentTarget || e.target === e.current)
            return t.call(null, e);
        };
      }
      function Js(t) {
        return t && "addEventListener" in t;
      }
      function dr(t) {
        return Js(t) ? t : j(t);
      }
      function Qi(t) {
        return K(t) ? t.map(dr).filter(Boolean) : N(t) ? he(t) : Js(t) ? [t] : E(t);
      }
      function pt(t) {
        return t.pointerType === "touch" || !!t.touches;
      }
      function yt(t) {
        var e, i;
        const { clientX: s, clientY: n } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
        return { x: s, y: n };
      }
      const pr = { "animation-iteration-count": true, "column-count": true, "fill-opacity": true, "flex-grow": true, "flex-shrink": true, "font-weight": true, "line-height": true, opacity: true, order: true, orphans: true, "stroke-dasharray": true, "stroke-dashoffset": true, widows: true, "z-index": true, zoom: true };
      function c(t, e, i, s) {
        const n = E(t);
        for (const o of n)
          if (N(e)) {
            if (e = oi(e), G(i))
              return getComputedStyle(o).getPropertyValue(e);
            o.style.setProperty(e, vt(i) && !pr[e] ? `${i}px` : i || Ie(i) ? i : "", s);
          } else if (K(e)) {
            const r = {};
            for (const a of e)
              r[a] = c(o, a);
            return r;
          } else if (It(e))
            for (const r in e)
              c(o, r, e[r], i);
        return n[0];
      }
      const oi = ht((t) => {
        if (ft(t, "--"))
          return t;
        t = Ot(t);
        const { style: e } = document.documentElement;
        if (t in e)
          return t;
        for (const i of ["webkit", "moz"]) {
          const s = `-${i}-${t}`;
          if (s in e)
            return s;
        }
      }), ts = "uk-transition", es = "transitionend", is = "transitioncanceled";
      function gr(t, e, i = 400, s = "linear") {
        return i = Math.round(i), Promise.all(E(t).map((n) => new Promise((o, r) => {
          for (const l in e) {
            const h = c(n, l);
            h === "" && c(n, l, h);
          }
          const a = setTimeout(() => v(n, es), i);
          F(n, [es, is], ({ type: l }) => {
            clearTimeout(a), D(n, ts), c(n, { transitionProperty: "", transitionDuration: "", transitionTimingFunction: "" }), l === is ? r() : o(n);
          }, { self: true }), k(n, ts), c(n, __spreadValues({ transitionProperty: Object.keys(e).map(oi).join(","), transitionDuration: `${i}ms`, transitionTimingFunction: s }, e));
        })));
      }
      const B = { start: gr, stop(t) {
        return __async(this, null, function* () {
          v(t, es), yield Promise.resolve();
        });
      }, cancel(t) {
        return __async(this, null, function* () {
          v(t, is), yield Promise.resolve();
        });
      }, inProgress(t) {
        return $(t, ts);
      } }, Oe = "uk-animation-", Ks = "animationend", ri = "animationcanceled";
      function Zs(t, e, i = 200, s, n) {
        return Promise.all(E(t).map((o) => new Promise((r, a) => {
          v(o, ri);
          const l = setTimeout(() => v(o, Ks), i);
          F(o, [Ks, ri], ({ type: h }) => {
            clearTimeout(l), h === ri ? a() : r(o), c(o, "animationDuration", ""), Ui(o, `${Oe}\\S*`);
          }, { self: true }), c(o, "animationDuration", `${i}ms`), k(o, e, Oe + (n ? "leave" : "enter")), ft(e, Oe) && (s && k(o, `uk-transform-origin-${s}`), n && k(o, `${Oe}reverse`));
        })));
      }
      const mr = new RegExp(`${Oe}(enter|leave)`), Pt = { in: Zs, out(t, e, i, s) {
        return Zs(t, e, i, s, true);
      }, inProgress(t) {
        return mr.test(d(t, "class"));
      }, cancel(t) {
        v(t, ri);
      } };
      function vr(t) {
        if (document.readyState !== "loading") {
          t();
          return;
        }
        F(document, "DOMContentLoaded", t);
      }
      function H(t, ...e) {
        return e.some((i) => {
          var s;
          return ((s = t == null ? void 0 : t.tagName) == null ? void 0 : s.toLowerCase()) === i.toLowerCase();
        });
      }
      function ss(t) {
        return t = y(t), t.innerHTML = "", t;
      }
      function jt(t, e) {
        return G(e) ? y(t).innerHTML : L(ss(t), e);
      }
      const br = hi("prepend"), L = hi("append"), ai = hi("before"), li = hi("after");
      function hi(t) {
        return function(e, i) {
          var s;
          const n = E(N(i) ? Rt(i) : i);
          return (s = y(e)) == null || s[t](...n), Qs(n);
        };
      }
      function ot(t) {
        E(t).forEach((e) => e.remove());
      }
      function ci(t, e) {
        for (e = j(ai(t, e)); e.firstElementChild; )
          e = e.firstElementChild;
        return L(e, t), e;
      }
      function ns(t, e) {
        return E(E(t).map((i) => i.hasChildNodes() ? ci(Dt(i.childNodes), e) : L(i, e)));
      }
      function De(t) {
        E(t).map(C).filter((e, i, s) => s.indexOf(e) === i).forEach((e) => e.replaceWith(...e.childNodes));
      }
      const wr = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
      function Rt(t) {
        const e = wr.exec(t);
        if (e)
          return document.createElement(e[1]);
        const i = document.createElement("template");
        return i.innerHTML = t.trim(), Qs(i.content.childNodes);
      }
      function Qs(t) {
        return t.length > 1 ? t : t[0];
      }
      function kt(t, e) {
        if (Se(t))
          for (e(t), t = t.firstElementChild; t; ) {
            const i = t.nextElementSibling;
            kt(t, e), t = i;
          }
      }
      function y(t, e) {
        return tn(t) ? j(Rt(t)) : Xi(t, e);
      }
      function z(t, e) {
        return tn(t) ? E(Rt(t)) : he(t, e);
      }
      function tn(t) {
        return N(t) && ft(t.trim(), "<");
      }
      const qt = { width: ["left", "right"], height: ["top", "bottom"] };
      function b(t) {
        const e = Se(t) ? j(t).getBoundingClientRect() : { height: et(t), width: ui(t), top: 0, left: 0 };
        return { height: e.height, width: e.width, top: e.top, left: e.left, bottom: e.top + e.height, right: e.left + e.width };
      }
      function I(t, e) {
        e && c(t, { left: 0, top: 0 });
        const i = b(t);
        if (t) {
          const { scrollY: s, scrollX: n } = Mt(t), o = { height: s, width: n };
          for (const r in qt)
            for (const a of qt[r])
              i[a] += o[r];
        }
        if (!e)
          return i;
        for (const s of ["left", "top"])
          c(t, s, e[s] - i[s]);
      }
      function os(t) {
        let { top: e, left: i } = I(t);
        const { ownerDocument: { body: s, documentElement: n }, offsetParent: o } = j(t);
        let r = o || n;
        for (; r && (r === s || r === n) && c(r, "position") === "static"; )
          r = r.parentNode;
        if (Se(r)) {
          const a = I(r);
          e -= a.top + S(c(r, "borderTopWidth")), i -= a.left + S(c(r, "borderLeftWidth"));
        }
        return { top: e - S(c(t, "marginTop")), left: i - S(c(t, "marginLeft")) };
      }
      function Ut(t) {
        t = j(t);
        const e = [t.offsetTop, t.offsetLeft];
        for (; t = t.offsetParent; )
          if (e[0] += t.offsetTop + S(c(t, "borderTopWidth")), e[1] += t.offsetLeft + S(c(t, "borderLeftWidth")), c(t, "position") === "fixed") {
            const i = Mt(t);
            return e[0] += i.scrollY, e[1] += i.scrollX, e;
          }
        return e;
      }
      const et = en("height"), ui = en("width");
      function en(t) {
        const e = St(t);
        return (i, s) => {
          if (G(s)) {
            if (se(i))
              return i[`inner${e}`];
            if (ke(i)) {
              const n = i.documentElement;
              return Math.max(n[`offset${e}`], n[`scroll${e}`]);
            }
            return i = j(i), s = c(i, t), s = s === "auto" ? i[`offset${e}`] : S(s) || 0, s - ce(i, t);
          } else
            return c(i, t, !s && s !== 0 ? "" : +s + ce(i, t) + "px");
        };
      }
      function ce(t, e, i = "border-box") {
        return c(t, "boxSizing") === i ? zt(qt[e].map(St), (s) => S(c(t, `padding${s}`)) + S(c(t, `border${s}Width`))) : 0;
      }
      function fi(t) {
        for (const e in qt)
          for (const i in qt[e])
            if (qt[e][i] === t)
              return qt[e][1 - i];
        return t;
      }
      function Y(t, e = "width", i = window, s = false) {
        return N(t) ? zt($r(t), (n) => {
          const o = kr(n);
          return o ? Sr(o === "vh" ? Ir() : o === "vw" ? ui(Mt(i)) : s ? i[`offset${St(e)}`] : b(i)[e], n) : n;
        }) : S(t);
      }
      const xr = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, $r = ht((t) => t.toString().replace(/\s/g, "").match(xr) || []), yr = /(?:v[hw]|%)$/, kr = ht((t) => (t.match(yr) || [])[0]);
      function Sr(t, e) {
        return t * S(e) / 100;
      }
      let Me, ue;
      function Ir() {
        return Me || (ue || (ue = y("<div>"), c(ue, { height: "100vh", position: "fixed" }), x(window, "resize", () => Me = null)), L(document.body, ue), Me = ue.clientHeight, ot(ue), Me);
      }
      const _t = { read: Er, write: Tr, clear: Cr, flush: sn }, di = [], pi = [];
      function Er(t) {
        return di.push(t), as(), t;
      }
      function Tr(t) {
        return pi.push(t), as(), t;
      }
      function Cr(t) {
        on(di, t), on(pi, t);
      }
      let rs = false;
      function sn() {
        nn(di), nn(pi.splice(0)), rs = false, (di.length || pi.length) && as();
      }
      function as() {
        rs || (rs = true, queueMicrotask(sn));
      }
      function nn(t) {
        let e;
        for (; e = t.shift(); )
          try {
            e();
          } catch (i) {
            console.error(i);
          }
      }
      function on(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1);
      }
      class rn {
        init() {
          this.positions = [];
          let e;
          this.unbind = x(document, "mousemove", (i) => e = yt(i)), this.interval = setInterval(() => {
            e && (this.positions.push(e), this.positions.length > 5 && this.positions.shift());
          }, 50);
        }
        cancel() {
          var e;
          (e = this.unbind) == null || e.call(this), clearInterval(this.interval);
        }
        movesTo(e) {
          if (!this.positions || this.positions.length < 2)
            return false;
          const i = b(e), { left: s, right: n, top: o, bottom: r } = i, [a] = this.positions, l = Bt(this.positions), h = [a, l];
          return ti(l, i) ? false : [[{ x: s, y: o }, { x: n, y: r }], [{ x: s, y: r }, { x: n, y: o }]].some((f) => {
            const p = Pr(h, f);
            return p && ti(p, i);
          });
        }
      }
      function Pr([{ x: t, y: e }, { x: i, y: s }], [{ x: n, y: o }, { x: r, y: a }]) {
        const l = (a - o) * (i - t) - (r - n) * (s - e);
        if (l === 0)
          return false;
        const h = ((r - n) * (e - o) - (a - o) * (t - n)) / l;
        return h < 0 ? false : { x: t + h * (i - t), y: e + h * (s - e) };
      }
      function an(t, e, i = {}, { intersecting: s = true } = {}) {
        const n = new IntersectionObserver(s ? (o, r) => {
          o.some((a) => a.isIntersecting) && e(o, r);
        } : e, i);
        for (const o of E(t))
          n.observe(o);
        return n;
      }
      const _r = Ht && window.ResizeObserver;
      function Be(t, e, i = { box: "border-box" }) {
        if (_r)
          return ln(ResizeObserver, t, e, i);
        const s = [x(window, "load resize", e), x(document, "loadedmetadata load", e, true)];
        return { disconnect: () => s.map((n) => n()) };
      }
      function ls(t) {
        return { disconnect: x([window, window.visualViewport], "resize", t) };
      }
      function hs(t, e, i) {
        return ln(MutationObserver, t, e, i);
      }
      function ln(t, e, i, s) {
        const n = new t(i);
        for (const o of E(e))
          n.observe(o, s);
        return n;
      }
      function cs(t) {
        vi(t) && us(t, { func: "playVideo", method: "play" }), mi(t) && t.play();
      }
      function gi(t) {
        vi(t) && us(t, { func: "pauseVideo", method: "pause" }), mi(t) && t.pause();
      }
      function hn(t) {
        vi(t) && us(t, { func: "mute", method: "setVolume", value: 0 }), mi(t) && (t.muted = true);
      }
      function cn(t) {
        return mi(t) || vi(t);
      }
      function mi(t) {
        return H(t, "video");
      }
      function vi(t) {
        return H(t, "iframe") && (un(t) || fn(t));
      }
      function un(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
      }
      function fn(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/);
      }
      function us(t, e) {
        return __async(this, null, function* () {
          yield Or(t), dn(t, e);
        });
      }
      function dn(t, e) {
        t.contentWindow.postMessage(JSON.stringify(__spreadValues({ event: "command" }, e)), "*");
      }
      const fs = "_ukPlayer";
      let Ar = 0;
      function Or(t) {
        if (t[fs])
          return t[fs];
        const e = un(t), i = fn(t), s = ++Ar;
        let n;
        return t[fs] = new Promise((o) => {
          e && F(t, "load", () => {
            const r = () => dn(t, { event: "listening", id: s });
            n = setInterval(r, 100), r();
          }), F(window, "message", o, false, ({ data: r }) => {
            try {
              return r = JSON.parse(r), e && (r == null ? void 0 : r.id) === s && r.event === "onReady" || i && Number(r == null ? void 0 : r.player_id) === s;
            } catch {
            }
          }), t.src = `${t.src}${m(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`;
        }).then(() => clearInterval(n));
      }
      function Dr(t, e = 0, i = 0) {
        return q(t) ? ji(...Yt(t).map((s) => {
          const { top: n, left: o, bottom: r, right: a } = rt(s);
          return { top: n - e, left: o - i, bottom: r + e, right: a + i };
        }).concat(I(t))) : false;
      }
      function pn(t, { offset: e = 0 } = {}) {
        const i = q(t) ? Vt(t, false, ["hidden"]) : [];
        return i.reduce((r, a, l) => {
          const { scrollTop: h, scrollHeight: u, offsetHeight: f } = a, p = rt(a), g = u - p.height, { height: w, top: T } = i[l - 1] ? rt(i[l - 1]) : I(t);
          let _ = Math.ceil(T - p.top - e + h);
          return e > 0 && f < w + e ? _ += e : e = 0, _ > g ? (e -= _ - g, _ = g) : _ < 0 && (e -= _, _ = 0), () => s(a, _ - h, t, g).then(r);
        }, () => Promise.resolve())();
        function s(r, a, l, h) {
          return new Promise((u) => {
            const f = r.scrollTop, p = n(Math.abs(a)), g = Date.now(), w = gs(r) === r, T = I(l).top + (w ? 0 : f);
            let _ = 0, bt = 15;
            (function Je() {
              const Ni = o(Z((Date.now() - g) / p));
              let gt = 0;
              if (i[0] === r && f + a < h) {
                gt = I(l).top + (w ? 0 : r.scrollTop) - T;
                const we = ds(l);
                gt -= we ? I(we).height : 0;
              }
              r.scrollTop = f + (a + gt) * Ni, Ni === 1 && (_ === gt || !bt--) ? u() : (_ = gt, requestAnimationFrame(Je));
            })();
          });
        }
        function n(r) {
          return 40 * Math.pow(r, 0.375);
        }
        function o(r) {
          return 0.5 * (1 - Math.cos(Math.PI * r));
        }
      }
      function bi(t, e = 0, i = 0) {
        if (!q(t))
          return 0;
        const s = At(t, true), { scrollHeight: n, scrollTop: o } = s, { height: r } = rt(s), a = n - r, l = Ut(t)[0] - Ut(s)[0], h = Math.max(0, l - r + e), u = Math.min(a, l + t.offsetHeight - i);
        return h < u ? Z((o - h) / (u - h)) : 1;
      }
      function Vt(t, e = false, i = []) {
        const s = gs(t);
        let n = _e(t).reverse();
        n = n.slice(n.indexOf(s) + 1);
        const o = wt(n, (r) => c(r, "position") === "fixed");
        return ~o && (n = n.slice(o)), [s].concat(n.filter((r) => c(r, "overflow").split(" ").some((a) => m(["auto", "scroll", ...i], a)) && (!e || r.scrollHeight > rt(r).height))).reverse();
      }
      function At(...t) {
        return Vt(...t)[0];
      }
      function Yt(t) {
        return Vt(t, false, ["hidden", "clip"]);
      }
      function rt(t) {
        const e = Mt(t);
        let i = t === gs(t) ? e : t;
        if (se(i) && e.visualViewport) {
          let { height: n, width: o, scale: r, pageTop: a, pageLeft: l } = e.visualViewport;
          return n = Math.round(n * r), o = Math.round(o * r), { height: n, width: o, top: a, left: l, bottom: a + n, right: l + o };
        }
        let s = I(i);
        if (c(i, "display") === "inline")
          return s;
        for (let [n, o, r, a] of [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]]) {
          se(i) ? i = i.document : s[r] += S(c(i, `border-${r}-width`));
          const l = s[n] % 1;
          s[n] = s[o] = i[`client${St(n)}`] - (l ? l < 0.5 ? -l : 1 - l : 0), s[a] = s[n] + s[r];
        }
        return s;
      }
      function ds(t) {
        const { left: e, width: i, top: s } = b(t);
        for (const n of s ? [0, s] : [0])
          for (const o of Mt(t).document.elementsFromPoint(e + i / 2, n))
            if (!o.contains(t) && !$(o, "uk-togglable-leave") && (ps(o, "fixed") && gn(_e(t).reverse().find((r) => !r.contains(o) && !ps(r, "static"))) < gn(o) || ps(o, "sticky") && C(o).contains(t)))
              return o;
      }
      function gn(t) {
        return S(c(t, "zIndex"));
      }
      function ps(t, e) {
        return c(t, "position") === e;
      }
      function gs(t) {
        return Mt(t).document.scrollingElement;
      }
      const at = [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]];
      function mn(t, e, i) {
        i = __spreadValues({ attach: __spreadValues({ element: ["left", "top"], target: ["left", "top"] }, i.attach), offset: [0, 0], placement: [] }, i), K(e) || (e = [e, e]), I(t, vn(t, e, i));
      }
      function vn(t, e, i) {
        const s = bn(t, e, i), { boundary: n, viewportOffset: o = 0, placement: r } = i;
        let a = s;
        for (const [l, [h, , u, f]] of Object.entries(at)) {
          const p = Mr(t, e[l], o, n, l);
          if (wi(s, p, l))
            continue;
          let g = 0;
          if (r[l] === "flip") {
            const w = i.attach.target[l];
            if (w === f && s[f] <= p[f] || w === u && s[u] >= p[u])
              continue;
            g = Nr(t, e, i, l)[u] - s[u];
            const T = Br(t, e[l], o, l);
            if (!wi(ms(s, g, l), T, l)) {
              if (wi(s, T, l))
                continue;
              if (i.recursion)
                return false;
              const _ = zr(t, e, i);
              if (_ && wi(_, T, 1 - l))
                return _;
              continue;
            }
          } else if (r[l] === "shift") {
            const w = I(e[l]), { offset: T } = i;
            g = Z(Z(s[u], p[u], p[f] - s[h]), w[u] - s[h] + T[l], w[f] - T[l]) - s[u];
          }
          a = ms(a, g, l);
        }
        return a;
      }
      function bn(t, e, i) {
        let { attach: s, offset: n } = __spreadValues({ attach: __spreadValues({ element: ["left", "top"], target: ["left", "top"] }, i.attach), offset: [0, 0] }, i), o = I(t);
        for (const [r, [a, , l, h]] of Object.entries(at)) {
          const u = s.target[r] === s.element[r] ? rt(e[r]) : I(e[r]);
          o = ms(o, u[l] - o[l] + wn(s.target[r], h, u[a]) - wn(s.element[r], h, o[a]) + +n[r], r);
        }
        return o;
      }
      function ms(t, e, i) {
        const [, s, n, o] = at[i], r = __spreadValues({}, t);
        return r[n] = t[s] = t[n] + e, r[o] += e, r;
      }
      function wn(t, e, i) {
        return t === "center" ? i / 2 : t === e ? i : 0;
      }
      function Mr(t, e, i, s, n) {
        let o = $n(...xn(t, e).map(rt));
        return i && (o[at[n][2]] += i, o[at[n][3]] -= i), s && (o = $n(o, I(K(s) ? s[n] : s))), o;
      }
      function Br(t, e, i, s) {
        const [n, o, r, a] = at[s], [l] = xn(t, e), h = rt(l);
        return ["auto", "scroll"].includes(c(l, `overflow-${o}`)) && (h[r] -= l[`scroll${St(r)}`], h[a] = h[r] + l[`scroll${St(n)}`]), h[r] += i, h[a] -= i, h;
      }
      function xn(t, e) {
        return Yt(e).filter((i) => i.contains(t));
      }
      function $n(...t) {
        let e = {};
        for (const i of t)
          for (const [, , s, n] of at)
            e[s] = Math.max(e[s] || 0, i[s]), e[n] = Math.min(...[e[n], i[n]].filter(Boolean));
        return e;
      }
      function wi(t, e, i) {
        const [, , s, n] = at[i];
        return t[s] >= e[s] && t[n] <= e[n];
      }
      function Nr(t, e, { offset: i, attach: s }, n) {
        return bn(t, e, { attach: { element: yn(s.element, n), target: yn(s.target, n) }, offset: Fr(i, n) });
      }
      function zr(t, e, i) {
        return vn(t, e, __spreadProps(__spreadValues({}, i), { attach: { element: i.attach.element.map(kn).reverse(), target: i.attach.target.map(kn).reverse() }, offset: i.offset.reverse(), placement: i.placement.reverse(), recursion: true }));
      }
      function yn(t, e) {
        const i = [...t], s = at[e].indexOf(t[e]);
        return ~s && (i[e] = at[e][1 - s % 2 + 2]), i;
      }
      function kn(t) {
        for (let e = 0; e < at.length; e++) {
          const i = at[e].indexOf(t);
          if (~i)
            return at[1 - e][i % 2 + 2];
        }
      }
      function Fr(t, e) {
        return t = [...t], t[e] *= -1, t;
      }
      var Hr = Object.freeze({ __proto__: null, $: y, $$: z, Animation: Pt, Dimensions: qi, MouseTracker: rn, Transition: B, addClass: k, after: li, append: L, apply: kt, assign: dt, attr: d, before: ai, boxModelAdjust: ce, camelize: ye, children: M, clamp: Z, createEvent: Wt, css: c, data: X, dimensions: b, each: Nt, empty: ss, endsWith: ee, escape: Ki, fastdom: _t, filter: Pe, find: Xi, findAll: he, findIndex: wt, flipPosition: fi, fragment: Rt, getCoveringElement: ds, getEventPos: yt, getIndex: nt, getTargetedElement: Gi, hasAttr: Et, hasClass: $, hasOwn: mt, hasTouch: oe, height: et, html: jt, hyphenate: Ot, inBrowser: Ht, includes: m, index: $t, intersectRect: ji, isArray: K, isBoolean: ne, isDocument: ke, isElement: Se, isEmpty: Ze, isEqual: Qe, isFocusable: ni, isFunction: tt, isInView: Dr, isInput: Yi, isNode: Ke, isNumber: Ie, isNumeric: vt, isObject: It, isPlainObject: ie, isRtl: U, isSameSiteAnchor: le, isString: N, isTag: H, isTouch: pt, isUndefined: G, isVideo: cn, isVisible: q, isVoidElement: Vi, isWindow: se, last: Bt, matches: P, memoize: ht, mute: hn, noop: O, observeIntersection: an, observeMutation: hs, observeResize: Be, observeViewportResize: ls, off: Ct, offset: I, offsetPosition: Ut, offsetViewport: rt, on: x, once: F, overflowParents: Yt, parent: C, parents: _e, pause: gi, pick: Wi, play: cs, pointInRect: ti, pointerCancel: si, pointerDown: ct, pointerEnter: Lt, pointerLeave: ae, pointerMove: ii, pointerUp: Tt, position: os, positionAt: mn, prepend: br, propName: oi, query: Q, queryAll: Ae, ready: vr, remove: ot, removeAttr: Ee, removeClass: D, removeClasses: Ui, replaceClass: ei, scrollIntoView: pn, scrollParent: At, scrollParents: Vt, scrolledOver: bi, selFocusable: Ce, selInput: Te, sortBy: Rs, startsWith: ft, sumBy: zt, swap: Li, toArray: Dt, toBoolean: Hi, toEventTargets: Qi, toFloat: S, toNode: j, toNodes: E, toNumber: xt, toPx: Y, toWindow: Mt, toggleClass: R, trigger: v, ucfirst: St, uniqueBy: qs, unwrap: De, width: ui, wrapAll: ci, wrapInner: ns }), it = { connected() {
        k(this.$el, this.$options.id);
      } };
      const Lr = ["days", "hours", "minutes", "seconds"];
      var Wr = { mixins: [it], props: { date: String, clsWrapper: String, role: String }, data: { date: "", clsWrapper: ".uk-countdown-%unit%", role: "timer" }, connected() {
        d(this.$el, "role", this.role), this.date = S(Date.parse(this.$props.date)), this.end = false, this.start();
      }, disconnected() {
        this.stop();
      }, events: { name: "visibilitychange", el: () => document, handler() {
        document.hidden ? this.stop() : this.start();
      } }, methods: { start() {
        this.stop(), this.update(), this.timer || (v(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1e3));
      }, stop() {
        this.timer && (clearInterval(this.timer), v(this.$el, "countdownstop"), this.timer = null);
      }, update() {
        const t = jr(this.date);
        t.total || (this.stop(), this.end || (v(this.$el, "countdownend"), this.end = true));
        for (const e of Lr) {
          const i = y(this.clsWrapper.replace("%unit%", e), this.$el);
          if (!i)
            continue;
          let s = String(Math.trunc(t[e]));
          s = s.length < 2 ? `0${s}` : s, i.textContent !== s && (s = s.split(""), s.length !== i.children.length && jt(i, s.map(() => "<span></span>").join("")), s.forEach((n, o) => i.children[o].textContent = n));
        }
      } } };
      function jr(t) {
        const e = Math.max(0, t - Date.now()) / 1e3;
        return { total: e, seconds: e % 60, minutes: e / 60 % 60, hours: e / 60 / 60 % 24, days: e / 60 / 60 / 24 };
      }
      const V = {};
      V.events = V.watch = V.observe = V.created = V.beforeConnect = V.connected = V.beforeDisconnect = V.disconnected = V.destroy = vs, V.args = function(t, e) {
        return e !== false && vs(e || t);
      }, V.update = function(t, e) {
        return Rs(vs(t, tt(e) ? { read: e } : e), "order");
      }, V.props = function(t, e) {
        if (K(e)) {
          const i = {};
          for (const s of e)
            i[s] = String;
          e = i;
        }
        return V.methods(t, e);
      }, V.computed = V.methods = function(t, e) {
        return e ? t ? __spreadValues(__spreadValues({}, t), e) : e : t;
      }, V.i18n = V.data = function(t, e, i) {
        return i ? Sn(t, e, i) : e ? t ? function(s) {
          return Sn(t, e, s);
        } : e : t;
      };
      function Sn(t, e, i) {
        return V.computed(tt(t) ? t.call(i, i) : t, tt(e) ? e.call(i, i) : e);
      }
      function vs(t, e) {
        return t = t && !K(t) ? [t] : t, e ? t ? t.concat(e) : K(e) ? e : [e] : t;
      }
      function Rr(t, e) {
        return G(e) ? t : e;
      }
      function Ne(t, e, i) {
        const s = {};
        if (tt(e) && (e = e.options), e.extends && (t = Ne(t, e.extends, i)), e.mixins)
          for (const o of e.mixins)
            t = Ne(t, o, i);
        for (const o in t)
          n(o);
        for (const o in e)
          mt(t, o) || n(o);
        function n(o) {
          s[o] = (V[o] || Rr)(t[o], e[o], i);
        }
        return s;
      }
      function fe(t, e = []) {
        try {
          return t ? ft(t, "{") ? JSON.parse(t) : e.length && !m(t, ":") ? { [e[0]]: t } : t.split(";").reduce((i, s) => {
            const [n, o] = s.split(/:(.*)/);
            return n && !G(o) && (i[n.trim()] = o.trim()), i;
          }, {}) : {};
        } catch {
          return {};
        }
      }
      function bs(t, e) {
        return t === Boolean ? Hi(e) : t === Number ? xt(e) : t === "list" ? Ur(e) : t === Object && N(e) ? fe(e) : t ? t(e) : e;
      }
      const qr = /,(?![^(]*\))/;
      function Ur(t) {
        return K(t) ? t : N(t) ? t.split(qr).map((e) => vt(e) ? xt(e) : Hi(e.trim())) : [t];
      }
      function Vr(t) {
        t._data = {}, t._updates = [...t.$options.update || []];
      }
      function Yr(t, e) {
        t._updates.unshift(e);
      }
      function Gr(t) {
        delete t._data;
      }
      function ze(t, e = "update") {
        t._connected && t._updates.length && (t._queued || (t._queued = /* @__PURE__ */ new Set(), _t.read(() => {
          t._connected && Xr(t, t._queued), delete t._queued;
        })), t._queued.add(e.type || e));
      }
      function Xr(t, e) {
        for (const { read: i, write: s, events: n = [] } of t._updates) {
          if (!e.has("update") && !n.some((r) => e.has(r)))
            continue;
          let o;
          i && (o = i.call(t, t._data, e), o && ie(o) && dt(t._data, o)), s && o !== false && _t.write(() => {
            t._connected && s.call(t, t._data, e);
          });
        }
      }
      function ut(t) {
        return He(Be, t, "resize");
      }
      function de(t) {
        return He(an, t);
      }
      function xi(t) {
        return He(hs, t);
      }
      function $i(t = {}) {
        return de(__spreadValues({ handler: function(e, i) {
          const { targets: s = this.$el, preload: n = 5 } = t;
          for (const o of E(tt(s) ? s(this) : s))
            z('[loading="lazy"]', o).slice(0, n - 1).forEach((r) => Ee(r, "loading"));
          for (const o of e.filter(({ isIntersecting: r }) => r).map(({ target: r }) => r))
            i.unobserve(o);
        } }, t));
      }
      function ws(t) {
        return He((e, i) => ls(i), t, "resize");
      }
      function Fe(t) {
        return He((e, i) => ({ disconnect: x(Kr(e), "scroll", i, { passive: true }) }), t, "scroll");
      }
      function In(t) {
        return __spreadValues({ observe(e, i) {
          return { observe: O, unobserve: O, disconnect: x(e, ct, i, { passive: true }) };
        }, handler(e) {
          if (!pt(e))
            return;
          const i = yt(e), s = "tagName" in e.target ? e.target : C(e.target);
          F(document, `${Tt} ${si} scroll`, (n) => {
            const { x: o, y: r } = yt(n);
            (n.type !== "scroll" && s && o && Math.abs(i.x - o) > 100 || r && Math.abs(i.y - r) > 100) && setTimeout(() => {
              v(s, "swipe"), v(s, `swipe${Jr(i.x, i.y, o, r)}`);
            });
          });
        } }, t);
      }
      function He(t, e, i) {
        return __spreadValues({ observe: t, handler() {
          ze(this, i);
        } }, e);
      }
      function Jr(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down";
      }
      function Kr(t) {
        return E(t).map((e) => {
          const { ownerDocument: i } = e, s = At(e, true);
          return s === i.scrollingElement ? i : s;
        });
      }
      var En = { props: { margin: String, firstColumn: Boolean }, data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" }, observe: [xi({ options: { childList: true } }), xi({ options: { attributes: true, attributeFilter: ["style"] }, target: ({ $el: t }) => [t, ...M(t)] }), ut({ target: ({ $el: t }) => [t, ...M(t)] })], update: { read() {
        return { rows: xs(M(this.$el)) };
      }, write({ rows: t }) {
        for (const e of t)
          for (const i of e)
            R(i, this.margin, t[0] !== e), R(i, this.firstColumn, e[U ? e.length - 1 : 0] === i);
      }, events: ["resize"] } };
      function xs(t) {
        const e = [[]], i = t.some((s, n) => n && t[n - 1].offsetParent !== s.offsetParent);
        for (const s of t) {
          if (!q(s))
            continue;
          const n = $s(s, i);
          for (let o = e.length - 1; o >= 0; o--) {
            const r = e[o];
            if (!r[0]) {
              r.push(s);
              break;
            }
            const a = $s(r[0], i);
            if (n.top >= a.bottom - 1 && n.top !== a.top) {
              e.push([s]);
              break;
            }
            if (n.bottom - 1 > a.top || n.top === a.top) {
              let l = r.length - 1;
              for (; l >= 0; l--) {
                const h = $s(r[l], i);
                if (n.left >= h.left)
                  break;
              }
              r.splice(l + 1, 0, s);
              break;
            }
            if (o === 0) {
              e.unshift([s]);
              break;
            }
          }
        }
        return e;
      }
      function $s(t, e = false) {
        let { offsetTop: i, offsetLeft: s, offsetHeight: n, offsetWidth: o } = t;
        return e && ([i, s] = Ut(t)), { top: i, left: s, bottom: i + n, right: s + o };
      }
      function Zr(t, e, i) {
        return __async(this, null, function* () {
          yield ys();
          let s = M(e);
          const n = s.map((g) => Tn(g, true)), o = __spreadProps(__spreadValues({}, c(e, ["height", "padding"])), { display: "block" }), r = s.concat(e);
          yield Promise.all(r.map(B.cancel)), c(r, "transitionProperty", "none"), yield t(), s = s.concat(M(e).filter((g) => !m(s, g))), yield Promise.resolve(), c(r, "transitionProperty", "");
          const a = d(e, "style"), l = c(e, ["height", "padding"]), [h, u] = Qr(e, s, n), f = s.map((g) => ({ style: d(g, "style") }));
          s.forEach((g, w) => u[w] && c(g, u[w])), c(e, o), v(e, "scroll"), yield ys();
          const p = s.map((g, w) => C(g) === e && B.start(g, h[w], i, "ease")).concat(B.start(e, l, i, "ease"));
          try {
            yield Promise.all(p), s.forEach((g, w) => {
              d(g, f[w]), C(g) === e && c(g, "display", h[w].opacity === 0 ? "none" : "");
            }), d(e, "style", a);
          } catch {
            d(s, "style", ""), ta(e, o);
          }
        });
      }
      function Tn(t, e) {
        const i = c(t, "zIndex");
        return q(t) ? __spreadValues({ display: "", opacity: e ? c(t, "opacity") : "0", pointerEvents: "none", position: "absolute", zIndex: i === "auto" ? $t(t) : i }, Cn(t)) : false;
      }
      function Qr(t, e, i) {
        const s = e.map((o, r) => C(o) && r in i ? i[r] ? q(o) ? Cn(o) : { opacity: 0 } : { opacity: q(o) ? 1 : 0 } : false), n = s.map((o, r) => {
          const a = C(e[r]) === t && (i[r] || Tn(e[r]));
          if (!a)
            return false;
          if (!o)
            delete a.opacity;
          else if (!("opacity" in o)) {
            const { opacity: l } = a;
            l % 1 ? o.opacity = 1 : delete a.opacity;
          }
          return a;
        });
        return [s, n];
      }
      function ta(t, e) {
        for (const i in e)
          c(t, i, "");
      }
      function Cn(t) {
        const { height: e, width: i } = I(t);
        return __spreadValues(__spreadValues({ height: e, width: i, transform: "" }, os(t)), c(t, ["marginTop", "marginLeft"]));
      }
      function ys() {
        return new Promise((t) => requestAnimationFrame(t));
      }
      const ks = "uk-transition-leave", Ss = "uk-transition-enter";
      function Pn(t, e, i, s = 0) {
        const n = yi(e, true), o = { opacity: 1 }, r = { opacity: 0 }, a = (u) => () => n === yi(e) ? u() : Promise.reject(), l = a(() => __async(this, null, function* () {
          k(e, ks), yield Promise.all(An(e).map((u, f) => new Promise((p) => setTimeout(() => B.start(u, r, i / 2, "ease").then(p), f * s)))), D(e, ks);
        })), h = a(() => __async(this, null, function* () {
          const u = et(e);
          k(e, Ss), t(), c(M(e), { opacity: 0 }), yield ys();
          const f = M(e), p = et(e);
          c(e, "alignContent", "flex-start"), et(e, u);
          const g = An(e);
          c(f, r);
          const w = g.map((T, _) => __async(this, null, function* () {
            yield ea(_ * s), yield B.start(T, o, i / 2, "ease");
          }));
          u !== p && w.push(B.start(e, { height: p }, i / 2 + g.length * s, "ease")), yield Promise.all(w).then(() => {
            D(e, Ss), n === yi(e) && (c(e, { height: "", alignContent: "" }), c(f, { opacity: "" }), delete e.dataset.transition);
          });
        }));
        return $(e, ks) ? _n(e).then(h) : $(e, Ss) ? _n(e).then(l).then(h) : l().then(h);
      }
      function yi(t, e) {
        return e && (t.dataset.transition = 1 + yi(t)), xt(t.dataset.transition) || 0;
      }
      function _n(t) {
        return Promise.all(M(t).filter(B.inProgress).map((e) => new Promise((i) => F(e, "transitionend transitioncanceled", i))));
      }
      function An(t) {
        return xs(M(t)).flat().filter(q);
      }
      function ea(t) {
        return new Promise((e) => setTimeout(e, t));
      }
      var On = { props: { duration: Number, animation: Boolean }, data: { duration: 150, animation: "slide" }, methods: { animate(t, e = this.$el) {
        const i = this.animation;
        return (i === "fade" ? Pn : i === "delayed-fade" ? (...n) => Pn(...n, 40) : i ? Zr : () => (t(), Promise.resolve()))(t, e, this.duration).catch(O);
      } } };
      const A = { TAB: 9, ESC: 27, SPACE: 32, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
      var ia = { mixins: [On], args: "target", props: { target: String, selActive: Boolean }, data: { target: "", selActive: false, attrItem: "uk-filter-control", cls: "uk-active", duration: 250 }, computed: { children: ({ target: t }, e) => z(`${t} > *`, e), toggles: ({ attrItem: t }, e) => z(`[${t}],[data-${t}]`, e) }, watch: { toggles(t) {
        this.updateState();
        const e = z(this.selActive, this.$el);
        for (const i of t) {
          this.selActive !== false && R(i, this.cls, m(e, i));
          const s = la(i);
          H(s, "a") && d(s, "role", "button");
        }
      }, children(t, e) {
        e && this.updateState();
      } }, events: { name: "click keydown", delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`, handler(t) {
        t.type === "keydown" && t.keyCode !== A.SPACE || t.target.closest("a,button") && (t.preventDefault(), this.apply(t.current));
      } }, methods: { apply(t) {
        const e = this.getState(), i = Mn(t, this.attrItem, this.getState());
        sa(e, i) || this.setState(i);
      }, getState() {
        return this.toggles.filter((t) => $(t, this.cls)).reduce((t, e) => Mn(e, this.attrItem, t), { filter: { "": "" }, sort: [] });
      }, setState(t, e = true) {
        return __async(this, null, function* () {
          t = __spreadValues({ filter: { "": "" }, sort: [] }, t), v(this.$el, "beforeFilter", [this, t]);
          for (const i of this.toggles)
            R(i, this.cls, oa(i, this.attrItem, t));
          yield Promise.all(z(this.target, this.$el).map((i) => {
            const s = () => na(t, i, M(i));
            return e ? this.animate(s, i) : s();
          })), v(this.$el, "afterFilter", [this]);
        });
      }, updateState() {
        _t.write(() => this.setState(this.getState(), false));
      } } };
      function Dn(t, e) {
        return fe(X(t, e), ["filter"]);
      }
      function sa(t, e) {
        return ["filter", "sort"].every((i) => Qe(t[i], e[i]));
      }
      function na(t, e, i) {
        const s = ra(t);
        for (const r of i)
          c(r, "display", s && !P(r, s) ? "none" : "");
        const [n, o] = t.sort;
        if (n) {
          const r = aa(i, n, o);
          Qe(r, i) || L(e, r);
        }
      }
      function Mn(t, e, i) {
        const { filter: s, group: n, sort: o, order: r = "asc" } = Dn(t, e);
        return (s || G(o)) && (n ? s ? (delete i.filter[""], i.filter[n] = s) : (delete i.filter[n], (Ze(i.filter) || "" in i.filter) && (i.filter = { "": s || "" })) : i.filter = { "": s || "" }), G(o) || (i.sort = [o, r]), i;
      }
      function oa(t, e, { filter: i = { "": "" }, sort: [s, n] }) {
        const { filter: o = "", group: r = "", sort: a, order: l = "asc" } = Dn(t, e);
        return G(a) ? r in i && o === i[r] || !o && r && !(r in i) && !i[""] : s === a && n === l;
      }
      function ra({ filter: t }) {
        let e = "";
        return Nt(t, (i) => e += i || ""), e;
      }
      function aa(t, e, i) {
        return [...t].sort((s, n) => X(s, e).localeCompare(X(n, e), void 0, { numeric: true }) * (i === "asc" || -1));
      }
      function la(t) {
        return y("a,button", t) || t;
      }
      let Is;
      function Bn(t) {
        const e = x(t, "touchstart", (s) => {
          if (s.targetTouches.length !== 1 || P(s.target, 'input[type="range"'))
            return;
          let n = yt(s).y;
          const o = x(t, "touchmove", (r) => {
            const a = yt(r).y;
            a !== n && (n = a, Vt(r.target).some((l) => {
              if (!t.contains(l))
                return false;
              let { scrollHeight: h, clientHeight: u } = l;
              return u < h;
            }) || r.preventDefault());
          }, { passive: false });
          F(t, "scroll touchend touchcanel", o, { capture: true });
        });
        if (Is)
          return e;
        Is = true;
        const { scrollingElement: i } = document;
        return c(i, { overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden", touchAction: "none", paddingRight: ui(window) - i.clientWidth || "" }), () => {
          Is = false, e(), c(i, { overflowY: "", touchAction: "", paddingRight: "" });
        };
      }
      var Le = { props: { container: Boolean }, data: { container: true }, computed: { container({ container: t }) {
        return t === true && this.$container || t && y(t);
      } } }, Gt = { props: { cls: Boolean, animation: "list", duration: Number, velocity: Number, origin: String, transition: String }, data: { cls: false, animation: [false], duration: 200, velocity: 0.2, origin: false, transition: "ease", clsEnter: "uk-togglable-enter", clsLeave: "uk-togglable-leave" }, computed: { hasAnimation: ({ animation: t }) => !!t[0], hasTransition: ({ animation: t }) => ["slide", "reveal"].some((e) => ft(t[0], e)) }, methods: { toggleElement(t, e, i) {
        return __async(this, null, function* () {
          try {
            return yield Promise.all(E(t).map((s) => {
              const n = ne(e) ? e : !this.isToggled(s);
              if (!v(s, `before${n ? "show" : "hide"}`, [this]))
                return Promise.reject();
              const o = (tt(i) ? i : i === false || !this.hasAnimation ? ha : this.hasTransition ? ca : ua)(s, n, this), r = n ? this.clsEnter : this.clsLeave;
              k(s, r), v(s, n ? "show" : "hide", [this]);
              const a = () => {
                D(s, r), v(s, n ? "shown" : "hidden", [this]);
              };
              return o ? o.then(a, () => (D(s, r), Promise.reject())) : a();
            })), true;
          } catch {
            return false;
          }
        });
      }, isToggled(t = this.$el) {
        return t = j(t), $(t, this.clsEnter) ? true : $(t, this.clsLeave) ? false : this.cls ? $(t, this.cls.split(" ")[0]) : q(t);
      }, _toggle(t, e) {
        if (!t)
          return;
        e = !!e;
        let i;
        this.cls ? (i = m(this.cls, " ") || e !== $(t, this.cls), i && R(t, this.cls, m(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), z("[autofocus]", t).some((s) => q(s) ? s.focus() || true : s.blur()), i && v(t, "toggled", [e, this]);
      } } };
      function ha(t, e, { _toggle: i }) {
        return Pt.cancel(t), B.cancel(t), i(t, e);
      }
      function ca(_0, _1, _2) {
        return __async(this, arguments, function* (t, e, { animation: i, duration: s, velocity: n, transition: o, _toggle: r }) {
          var a;
          const [l = "reveal", h = "top"] = ((a = i[0]) == null ? void 0 : a.split("-")) || [], u = [["left", "right"], ["top", "bottom"]], f = u[m(u[0], h) ? 0 : 1], p = f[1] === h, w = ["width", "height"][u.indexOf(f)], T = `margin-${f[0]}`, _ = `margin-${h}`;
          let bt = b(t)[w];
          const Je = B.inProgress(t);
          yield B.cancel(t), e && r(t, true);
          const Ni = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", T, _].map((tr) => [tr, t.style[tr]])), gt = b(t), we = S(c(t, T)), Ko = S(c(t, _)), te = gt[w] + Ko;
          !Je && !e && (bt += Ko);
          const [zi] = ns(t, "<div>");
          c(zi, __spreadValues({ boxSizing: "border-box", height: gt.height, width: gt.width }, c(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", _]))), c(t, { padding: 0, border: 0, minWidth: 0, minHeight: 0, [_]: 0, width: gt.width, height: gt.height, overflow: "hidden", [w]: bt });
          const Zo = bt / te;
          s = (n * te + s) * (e ? 1 - Zo : Zo);
          const Qo = { [w]: e ? te : 0 };
          p && (c(t, T, te - bt + we), Qo[T] = e ? we : te + we), !p ^ l === "reveal" && (c(zi, T, -te + bt), B.start(zi, { [T]: e ? 0 : -te }, s, o));
          try {
            yield B.start(t, Qo, s, o);
          } finally {
            c(t, Ni), De(zi.firstChild), e || r(t, false);
          }
        });
      }
      function ua(t, e, i) {
        const { animation: s, duration: n, _toggle: o } = i;
        return e ? (o(t, true), Pt.in(t, s[0], n, i.origin)) : Pt.out(t, s[1] || s[0], n, i.origin).then(() => o(t, false));
      }
      const st = [];
      var Es = { mixins: [it, Le, Gt], props: { selPanel: String, selClose: String, escClose: Boolean, bgClose: Boolean, stack: Boolean, role: String }, data: { cls: "uk-open", escClose: true, bgClose: true, overlay: true, stack: false, role: "dialog" }, computed: { panel: ({ selPanel: t }, e) => y(t, e), transitionElement() {
        return this.panel;
      }, bgClose({ bgClose: t }) {
        return t && this.panel;
      } }, connected() {
        d(this.panel || this.$el, "role", this.role), this.overlay && d(this.panel || this.$el, "aria-modal", true);
      }, beforeDisconnect() {
        m(st, this) && this.toggleElement(this.$el, false, false);
      }, events: [{ name: "click", delegate: ({ selClose: t }) => `${t},a[href*="#"]`, handler(t) {
        const { current: e, defaultPrevented: i } = t, { hash: s } = e;
        !i && s && le(e) && !this.$el.contains(y(s)) ? this.hide() : P(e, this.selClose) && (t.preventDefault(), this.hide());
      } }, { name: "toggle", self: true, handler(t) {
        t.defaultPrevented || (t.preventDefault(), this.isToggled() === m(st, this) && this.toggle());
      } }, { name: "beforeshow", self: true, handler(t) {
        if (m(st, this))
          return false;
        !this.stack && st.length ? (Promise.all(st.map((e) => e.hide())).then(this.show), t.preventDefault()) : st.push(this);
      } }, { name: "show", self: true, handler() {
        this.stack && c(this.$el, "zIndex", S(c(this.$el, "zIndex")) + st.length);
        const t = [this.overlay && da(this), this.overlay && Bn(this.$el), this.bgClose && pa(this), this.escClose && ga(this)];
        F(this.$el, "hidden", () => t.forEach((e) => e && e()), { self: true }), k(document.documentElement, this.clsPage);
      } }, { name: "shown", self: true, handler() {
        ni(this.$el) || d(this.$el, "tabindex", "-1"), P(this.$el, ":focus-within") || this.$el.focus();
      } }, { name: "hidden", self: true, handler() {
        m(st, this) && st.splice(st.indexOf(this), 1), c(this.$el, "zIndex", ""), st.some((t) => t.clsPage === this.clsPage) || D(document.documentElement, this.clsPage);
      } }], methods: { toggle() {
        return this.isToggled() ? this.hide() : this.show();
      }, show() {
        return this.container && C(this.$el) !== this.container ? (L(this.container, this.$el), new Promise((t) => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, true, Nn);
      }, hide() {
        return this.toggleElement(this.$el, false, Nn);
      } } };
      function Nn(t, e, { transitionElement: i, _toggle: s }) {
        return new Promise((n, o) => F(t, "show hide", () => {
          var r;
          (r = t._reject) == null || r.call(t), t._reject = o, s(t, e);
          const a = F(i, "transitionstart", () => {
            F(i, "transitionend transitioncancel", n, { self: true }), clearTimeout(l);
          }, { self: true }), l = setTimeout(() => {
            a(), n();
          }, fa(c(i, "transitionDuration")));
        })).then(() => delete t._reject);
      }
      function fa(t) {
        return t ? ee(t, "ms") ? S(t) : S(t) * 1e3 : 0;
      }
      function da(t) {
        return x(document, "focusin", (e) => {
          Bt(st) === t && !t.$el.contains(e.target) && t.$el.focus();
        });
      }
      function pa(t) {
        return x(document, ct, ({ target: e }) => {
          Bt(st) !== t || t.overlay && !t.$el.contains(e) || t.panel.contains(e) || F(document, `${Tt} ${si} scroll`, ({ defaultPrevented: i, type: s, target: n }) => {
            !i && s === Tt && e === n && t.hide();
          }, true);
        });
      }
      function ga(t) {
        return x(document, "keydown", (e) => {
          e.keyCode === 27 && Bt(st) === t && t.hide();
        });
      }
      var Ts = { slide: { show(t) {
        return [{ transform: W(t * -100) }, { transform: W() }];
      }, percent(t) {
        return We(t);
      }, translate(t, e) {
        return [{ transform: W(e * -100 * t) }, { transform: W(e * 100 * (1 - t)) }];
      } } };
      function We(t) {
        return Math.abs(c(t, "transform").split(",")[4] / t.offsetWidth);
      }
      function W(t = 0, e = "%") {
        return t += t ? e : "", `translate3d(${t}, 0, 0)`;
      }
      function pe(t) {
        return `scale3d(${t}, ${t}, 1)`;
      }
      function ma(t, e, i, { animation: s, easing: n }) {
        const { percent: o, translate: r, show: a = O } = s, l = a(i);
        let h;
        return { dir: i, show(u, f = 0, p) {
          const g = p ? "linear" : n;
          return u -= Math.round(u * Z(f, -1, 1)), this.translate(f), ki(e, "itemin", { percent: f, duration: u, timing: g, dir: i }), ki(t, "itemout", { percent: 1 - f, duration: u, timing: g, dir: i }), new Promise((w) => {
            h || (h = w), Promise.all([B.start(e, l[1], u, g), B.start(t, l[0], u, g)]).then(() => {
              this.reset(), h();
            }, O);
          });
        }, cancel() {
          return B.cancel([e, t]);
        }, reset() {
          for (const u in l[0])
            c([e, t], u, "");
        }, forward(_0) {
          return __async(this, arguments, function* (u, f = this.percent()) {
            return yield this.cancel(), this.show(u, f, true);
          });
        }, translate(u) {
          if (u === this.percent())
            return;
          this.reset();
          const f = r(u, i);
          c(e, f[1]), c(t, f[0]), ki(e, "itemtranslatein", { percent: u, dir: i }), ki(t, "itemtranslateout", { percent: 1 - u, dir: i });
        }, percent() {
          return o(t || e, e, i);
        }, getDistance() {
          return t == null ? void 0 : t.offsetWidth;
        } };
      }
      function ki(t, e, i) {
        v(t, Wt(e, false, false, i));
      }
      var Si = { props: { i18n: Object }, data: { i18n: null }, methods: { t(t, ...e) {
        var i, s, n;
        let o = 0;
        return ((n = ((i = this.i18n) == null ? void 0 : i[t]) || ((s = this.$options.i18n) == null ? void 0 : s[t])) == null ? void 0 : n.replace(/%s/g, () => e[o++] || "")) || "";
      } } }, va = { props: { autoplay: Boolean, autoplayInterval: Number, pauseOnHover: Boolean }, data: { autoplay: false, autoplayInterval: 7e3, pauseOnHover: true }, connected() {
        d(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
      }, disconnected() {
        this.stopAutoplay();
      }, update() {
        d(this.slides, "tabindex", "-1");
      }, events: [{ name: "visibilitychange", el: () => document, filter: ({ autoplay: t }) => t, handler() {
        document.hidden ? this.stopAutoplay() : this.startAutoplay();
      } }], methods: { startAutoplay() {
        this.stopAutoplay(), this.interval = setInterval(() => {
          this.stack.length || this.draggable && P(this.$el, ":focus-within") && !P(this.$el, ":focus") || this.pauseOnHover && P(this.$el, ":hover") || this.show("next");
        }, this.autoplayInterval);
      }, stopAutoplay() {
        clearInterval(this.interval);
      } } };
      const je = { passive: false, capture: true }, zn = { passive: true, capture: true }, ba = "touchstart mousedown", Cs = "touchmove mousemove", Fn = "touchend touchcancel mouseup click input scroll", Hn = (t) => t.preventDefault();
      var wa = { props: { draggable: Boolean }, data: { draggable: true, threshold: 10 }, created() {
        for (const t of ["start", "move", "end"]) {
          const e = this[t];
          this[t] = (i) => {
            const s = yt(i).x * (U ? -1 : 1);
            this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i);
          };
        }
      }, events: [{ name: ba, passive: true, delegate: ({ selList: t }) => `${t} > *`, handler(t) {
        !this.draggable || this.parallax || !pt(t) && xa(t.target) || t.target.closest(Te) || t.button > 0 || this.length < 2 || this.start(t);
      } }, { name: "dragstart", handler(t) {
        t.preventDefault();
      } }, __spreadValues({ name: Cs, el: ({ list: t }) => t, handler: O }, je)], methods: { start() {
        this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = true, this.stack = []) : this.prevIndex = this.index, x(document, Cs, this.move, je), x(document, Fn, this.end, zn), c(this.list, "userSelect", "none");
      }, move(t) {
        const e = this.pos - this.drag;
        if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
          return;
        this.dragging || x(this.list, "click", Hn, je), t.cancelable && t.preventDefault(), this.dragging = true, this.dir = e < 0 ? 1 : -1;
        let { slides: i, prevIndex: s } = this, n = Math.abs(e), o = this.getIndex(s + this.dir), r = Ln.call(this, s, o);
        for (; o !== s && n > r; )
          this.drag -= r * this.dir, s = o, n -= r, o = this.getIndex(s + this.dir), r = Ln.call(this, s, o);
        this.percent = n / r;
        const a = i[s], l = i[o], h = this.index !== o, u = s === o;
        let f;
        for (const p of [this.index, this.prevIndex])
          m([o, s], p) || (v(i[p], "itemhidden", [this]), u && (f = true, this.prevIndex = s));
        (this.index === s && this.prevIndex !== s || f) && v(i[this.index], "itemshown", [this]), h && (this.prevIndex = s, this.index = o, u || (v(a, "beforeitemhide", [this]), v(a, "itemhide", [this])), v(l, "beforeitemshow", [this]), v(l, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), a, !u && l);
      }, end() {
        if (Ct(document, Cs, this.move, je), Ct(document, Fn, this.end, zn), this.dragging)
          if (this.dragging = null, this.index === this.prevIndex)
            this.percent = 1 - this.percent, this.dir *= -1, this._show(false, this.index, true), this._transitioner = null;
          else {
            const t = (U ? this.dir * (U ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
            this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", true);
          }
        setTimeout(() => Ct(this.list, "click", Hn, je)), c(this.list, { userSelect: "" }), this.drag = this.percent = null;
      } } };
      function Ln(t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
      }
      function xa(t) {
        return c(t, "userSelect") !== "none" && Dt(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
      }
      function $a(t) {
        t._watches = [];
        for (const e of t.$options.watch || [])
          for (const [i, s] of Object.entries(e))
            Wn(t, s, i);
        t._initial = true;
      }
      function Wn(t, e, i) {
        t._watches.push(__spreadValues({ name: i }, ie(e) ? e : { handler: e }));
      }
      function ya(t, e) {
        for (const { name: i, handler: s, immediate: n = true } of t._watches)
          (t._initial && n || mt(e, i) && !Qe(e[i], t[i])) && s.call(t, t[i], e[i]);
        t._initial = false;
      }
      function ka(t) {
        const { computed: e } = t.$options;
        if (t._computed = {}, e)
          for (const i in e)
            Rn(t, i, e[i]);
      }
      const jn = { subtree: true, childList: true };
      function Rn(t, e, i) {
        t._hasComputed = true, Object.defineProperty(t, e, { enumerable: true, get() {
          const { _computed: s, $props: n, $el: o } = t;
          if (!mt(s, e) && (s[e] = (i.get || i).call(t, n, o), i.observe && t._computedObserver)) {
            const r = i.observe.call(t, n);
            t._computedObserver.observe(["~", "+", "-"].includes(r[0]) ? o.parentElement : o.getRootNode(), jn);
          }
          return s[e];
        }, set(s) {
          const { _computed: n } = t;
          n[e] = i.set ? i.set.call(t, s) : s, G(n[e]) && delete n[e];
        } });
      }
      function Sa(t) {
        t._hasComputed && (Yr(t, { read: () => ya(t, qn(t)), events: ["resize", "computed"] }), t._computedObserver = hs(t.$el, () => ze(t, "computed"), jn));
      }
      function Ia(t) {
        var e;
        (e = t._computedObserver) == null || e.disconnect(), delete t._computedObserver, qn(t);
      }
      function qn(t) {
        const e = __spreadValues({}, t._computed);
        return t._computed = {}, e;
      }
      function Ea(t) {
        t._events = [];
        for (const e of t.$options.events || [])
          if (mt(e, "handler"))
            Un(t, e);
          else
            for (const i in e)
              Un(t, e[i], i);
      }
      function Ta(t) {
        t._events.forEach((e) => e()), delete t._events;
      }
      function Un(t, e, i) {
        let { name: s, el: n, handler: o, capture: r, passive: a, delegate: l, filter: h, self: u } = ie(e) ? e : { name: i, handler: e };
        n = tt(n) ? n.call(t, t) : n || t.$el, !(!n || K(n) && !n.length || h && !h.call(t, t)) && t._events.push(x(n, s, l ? N(l) ? l : l.call(t, t) : null, N(o) ? t[o] : o.bind(t), { passive: a, capture: r, self: u }));
      }
      function Ca(t) {
        t._observers = [];
        for (const e of t.$options.observe || [])
          _a(t, e);
      }
      function Vn(t, ...e) {
        t._observers.push(...e);
      }
      function Pa(t) {
        for (const e of t._observers)
          e.disconnect();
      }
      function _a(t, e) {
        let { observe: i, target: s = t.$el, handler: n, options: o, filter: r, args: a } = e;
        if (r && !r.call(t, t))
          return;
        const l = `_observe${t._observers.length}`;
        tt(s) && !mt(t, l) && Rn(t, l, () => s.call(t, t)), n = N(n) ? t[n] : n.bind(t), tt(o) && (o = o.call(t, t));
        const h = mt(t, l) ? t[l] : s, u = i(h, n, o, a);
        tt(s) && K(t[l]) && Wn(t, { handler: Aa(u, o), immediate: false }, l), Vn(t, u);
      }
      function Aa(t, e) {
        return (i, s) => {
          for (const n of s)
            m(i, n) || (t.unobserve ? t.unobserve(n) : t.observe && t.disconnect());
          for (const n of i)
            (!m(s, n) || !t.unobserve) && t.observe(n, e);
        };
      }
      function Oa(t) {
        const { $options: e, $props: i } = t, s = Yn(e);
        dt(i, s);
        const { computed: n, methods: o } = e;
        for (let r in i)
          r in s && (!n || !mt(n, r)) && (!o || !mt(o, r)) && (t[r] = i[r]);
      }
      function Yn(t) {
        const e = {}, { args: i = [], props: s = {}, el: n, id: o } = t;
        if (!s)
          return e;
        for (const a in s) {
          const l = Ot(a);
          let h = X(n, l);
          G(h) || (h = s[a] === Boolean && h === "" ? true : bs(s[a], h), !(l === "target" && ft(h, "_")) && (e[a] = h));
        }
        const r = fe(X(n, o), i);
        for (const a in r) {
          const l = ye(a);
          G(s[l]) || (e[l] = bs(s[l], r[a]));
        }
        return e;
      }
      const Da = ht((t, e) => {
        const i = Object.keys(e), s = i.concat(t).map((n) => [Ot(n), `data-${Ot(n)}`]).flat();
        return { attributes: i, filter: s };
      });
      function Ma(t) {
        const { $options: e, $props: i } = t, { id: s, props: n, el: o } = e;
        if (!n)
          return;
        const { attributes: r, filter: a } = Da(s, n), l = new MutationObserver((h) => {
          const u = Yn(e);
          h.some(({ attributeName: f }) => {
            const p = f.replace("data-", "");
            return (p === s ? r : [ye(p), ye(f)]).some((g) => !G(u[g]) && u[g] !== i[g]);
          }) && t.$reset();
        });
        l.observe(o, { attributes: true, attributeFilter: a }), Vn(t, l);
      }
      function ge(t, e) {
        var i;
        (i = t.$options[e]) == null || i.forEach((s) => s.call(t));
      }
      function Ps(t) {
        t._connected || (Oa(t), ge(t, "beforeConnect"), t._connected = true, Ea(t), Vr(t), $a(t), Ca(t), Ma(t), Sa(t), ge(t, "connected"), ze(t));
      }
      function _s(t) {
        t._connected && (ge(t, "beforeDisconnect"), Ta(t), Gr(t), Pa(t), Ia(t), ge(t, "disconnected"), t._connected = false);
      }
      let Ba = 0;
      function Gn(t, e = {}) {
        e.data = Fa(e, t.constructor.options), t.$options = Ne(t.constructor.options, e, t), t.$props = {}, t._uid = Ba++, Na(t), za(t), ka(t), ge(t, "created"), e.el && t.$mount(e.el);
      }
      function Na(t) {
        const { data: e = {} } = t.$options;
        for (const i in e)
          t.$props[i] = t[i] = e[i];
      }
      function za(t) {
        const { methods: e } = t.$options;
        if (e)
          for (const i in e)
            t[i] = e[i].bind(t);
      }
      function Fa({ data: t = {} }, { args: e = [], props: i = {} }) {
        K(t) && (t = t.slice(0, e.length).reduce((s, n, o) => (ie(n) ? dt(s, n) : s[e[o]] = n, s), {}));
        for (const s in t)
          G(t[s]) ? delete t[s] : i[s] && (t[s] = bs(i[s], t[s]));
        return t;
      }
      const lt = function(t) {
        Gn(this, t);
      };
      lt.util = Hr, lt.options = {}, lt.version = "3.20.9";
      const Ha = "uk-", Xt = "__uikit__", me = {};
      function Xn(t, e) {
        var i, s;
        const n = Ha + Ot(t);
        if (!e)
          return me[n].options || (me[n] = lt.extend(me[n])), me[n];
        t = ye(t), lt[t] = (r, a) => Re(t, r, a);
        const o = (i = e.options) != null ? i : __spreadValues({}, e);
        return o.id = n, o.name = t, (s = o.install) == null || s.call(o, lt, o, t), lt._initialized && !o.functional && requestAnimationFrame(() => Re(t, `[${n}],[data-${n}]`)), me[n] = o;
      }
      function Re(t, e, i, ...s) {
        const n = Xn(t);
        return n.options.functional ? new n({ data: ie(e) ? e : [e, i, ...s] }) : e ? he(e).map(o)[0] : o();
        function o(r) {
          const a = Ii(r, t);
          if (a)
            if (i)
              a.$destroy();
            else
              return a;
          return new n({ el: r, data: i });
        }
      }
      function qe(t) {
        return (t == null ? void 0 : t[Xt]) || {};
      }
      function Ii(t, e) {
        return qe(t)[e];
      }
      function La(t, e) {
        t[Xt] || (t[Xt] = {}), t[Xt][e.$options.name] = e;
      }
      function Wa(t, e) {
        var i;
        (i = t[Xt]) == null || delete i[e.$options.name], Ze(t[Xt]) && delete t[Xt];
      }
      function ja(t) {
        t.component = Xn, t.getComponents = qe, t.getComponent = Ii, t.update = Jn, t.use = function(i) {
          if (!i.installed)
            return i.call(null, this), i.installed = true, this;
        }, t.mixin = function(i, s) {
          s = (N(s) ? this.component(s) : s) || this, s.options = Ne(s.options, i);
        }, t.extend = function(i) {
          i || (i = {});
          const s = this, n = function(r) {
            Gn(this, r);
          };
          return n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.options = Ne(s.options, i), n.super = s, n.extend = s.extend, n;
        };
        let e;
        Object.defineProperty(t, "container", { get() {
          return e || document.body;
        }, set(i) {
          e = y(i);
        } });
      }
      function Jn(t, e) {
        t = t ? j(t) : document.body;
        for (const i of _e(t).reverse())
          Kn(i, e);
        kt(t, (i) => Kn(i, e));
      }
      function Kn(t, e) {
        const i = qe(t);
        for (const s in i)
          ze(i[s], e);
      }
      function Ra(t) {
        t.prototype.$mount = function(e) {
          const i = this;
          La(e, i), i.$options.el = e, document.contains(e) && Ps(i);
        }, t.prototype.$destroy = function(e = false) {
          const i = this, { el: s } = i.$options;
          s && _s(i), ge(i, "destroy"), Wa(s, i), e && ot(i.$el);
        }, t.prototype.$create = Re, t.prototype.$emit = function(e) {
          ze(this, e);
        }, t.prototype.$update = function(e = this.$el, i) {
          Jn(e, i);
        }, t.prototype.$reset = function() {
          _s(this), Ps(this);
        }, t.prototype.$getComponent = Ii, Object.defineProperties(t.prototype, { $el: { get() {
          return this.$options.el;
        } }, $container: Object.getOwnPropertyDescriptor(t, "container") });
      }
      let qa = 1;
      function Jt(t, e = null) {
        return (e == null ? void 0 : e.id) || `${t.$options.id}-${qa++}`;
      }
      var Ua = { i18n: { next: "Next slide", previous: "Previous slide", slideX: "Slide %s", slideLabel: "%s of %s", role: "String" }, data: { selNav: false, role: "region" }, computed: { nav: ({ selNav: t }, e) => y(t, e), navChildren() {
        return M(this.nav);
      }, selNavItem: ({ attrItem: t }) => `[${t}],[data-${t}]`, navItems(t, e) {
        return z(this.selNavItem, e);
      } }, watch: { nav(t, e) {
        d(t, "role", "tablist"), e && this.$emit();
      }, list(t) {
        H(t, "ul") && d(t, "role", "presentation");
      }, navChildren(t) {
        d(t, "role", "presentation");
      }, navItems(t) {
        for (const e of t) {
          const i = X(e, this.attrItem), s = y("a,button", e) || e;
          let n, o = null;
          if (vt(i)) {
            const r = xt(i), a = this.slides[r];
            a && (a.id || (a.id = Jt(this, a)), o = a.id), n = this.t("slideX", S(i) + 1), d(s, "role", "tab");
          } else
            this.list && (this.list.id || (this.list.id = Jt(this, this.list)), o = this.list.id), n = this.t(i);
          d(s, { "aria-controls": o, "aria-label": d(s, "aria-label") || n });
        }
      }, slides(t) {
        t.forEach((e, i) => d(e, { role: this.nav ? "tabpanel" : "group", "aria-label": this.t("slideLabel", i + 1, this.length), "aria-roledescription": this.nav ? null : "slide" }));
      }, length(t) {
        const e = this.navChildren.length;
        if (this.nav && t !== e) {
          ss(this.nav);
          for (let i = 0; i < t; i++)
            L(this.nav, `<li ${this.attrItem}="${i}"><a href></a></li>`);
        }
      } }, connected() {
        d(this.$el, { role: this.role, "aria-roledescription": "carousel" });
      }, update: [{ write() {
        this.navItems.concat(this.nav).forEach((t) => t && (t.hidden = !this.maxIndex)), this.updateNav();
      }, events: ["resize"] }], events: [{ name: "click keydown", delegate: ({ selNavItem: t }) => t, filter: ({ parallax: t }) => !t, handler(t) {
        t.target.closest("a,button") && (t.type === "click" || t.keyCode === A.SPACE) && (t.preventDefault(), this.show(X(t.current, this.attrItem)));
      } }, { name: "itemshow", handler: "updateNav" }, { name: "keydown", delegate: ({ selNavItem: t }) => t, filter: ({ parallax: t }) => !t, handler(t) {
        const { current: e, keyCode: i } = t, s = X(e, this.attrItem);
        if (!vt(s))
          return;
        let n = i === A.HOME ? 0 : i === A.END ? "last" : i === A.LEFT ? "previous" : i === A.RIGHT ? "next" : -1;
        ~n && (t.preventDefault(), this.show(n));
      } }], methods: { updateNav() {
        const t = this.getValidIndex();
        for (const e of this.navItems) {
          const i = X(e, this.attrItem), s = y("a,button", e) || e;
          if (vt(i)) {
            const o = xt(i) === t;
            R(e, this.clsActive, o), R(s, "uk-disabled", this.parallax), d(s, { "aria-selected": o, tabindex: o && !this.parallax ? null : -1 }), o && s && P(C(e), ":focus-within") && s.focus();
          } else
            R(e, "uk-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex));
        }
      } } }, Zn = { mixins: [va, wa, Ua, Si], props: { clsActivated: String, easing: String, index: Number, finite: Boolean, velocity: Number }, data: () => ({ easing: "ease", finite: false, velocity: 1, index: 0, prevIndex: -1, stack: [], percent: 0, clsActive: "uk-active", clsActivated: "", clsEnter: "uk-slide-enter", clsLeave: "uk-slide-leave", clsSlideActive: "uk-slide-active", Transitioner: false, transitionOptions: {} }), connected() {
        this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
      }, disconnected() {
        D(this.slides, this.clsActive);
      }, computed: { duration: ({ velocity: t }, e) => Qn(e.offsetWidth / t), list: ({ selList: t }, e) => y(t, e), maxIndex() {
        return this.length - 1;
      }, slides() {
        return M(this.list);
      }, length() {
        return this.slides.length;
      } }, watch: { slides(t, e) {
        e && this.$emit();
      } }, events: { itemshow({ target: t }) {
        k(t, this.clsEnter, this.clsSlideActive);
      }, itemshown({ target: t }) {
        D(t, this.clsEnter);
      }, itemhide({ target: t }) {
        k(t, this.clsLeave);
      }, itemhidden({ target: t }) {
        D(t, this.clsLeave, this.clsSlideActive);
      } }, methods: { show(t, e = false) {
        var i;
        if (this.dragging || !this.length || this.parallax)
          return;
        const { stack: s } = this, n = e ? 0 : s.length, o = () => {
          s.splice(n, 1), s.length && this.show(s.shift(), true);
        };
        if (s[e ? "unshift" : "push"](t), !e && s.length > 1) {
          s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
          return;
        }
        const r = this.getIndex(this.index), a = $(this.slides, this.clsActive) && this.slides[r], l = this.getIndex(t, this.index), h = this.slides[l];
        if (a === h) {
          o();
          return;
        }
        if (this.dir = Va(t, r), this.prevIndex = r, this.index = l, a && !v(a, "beforeitemhide", [this]) || !v(h, "beforeitemshow", [this, a])) {
          this.index = this.prevIndex, o();
          return;
        }
        const u = this._show(a, h, e).then(() => {
          a && v(a, "itemhidden", [this]), v(h, "itemshown", [this]), s.shift(), this._transitioner = null, s.length && requestAnimationFrame(() => s.length && this.show(s.shift(), true));
        });
        return a && v(a, "itemhide", [this]), v(h, "itemshow", [this]), u;
      }, getIndex(t = this.index, e = this.index) {
        return Z(nt(t, this.slides, e, this.finite), 0, Math.max(0, this.maxIndex));
      }, getValidIndex(t = this.index, e = this.prevIndex) {
        return this.getIndex(t, e);
      }, _show(t, e, i) {
        if (this._transitioner = this._getTransitioner(t, e, this.dir, __spreadValues({ easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing }, this.transitionOptions)), !i && !t)
          return this._translate(1), Promise.resolve();
        const { length: s } = this.stack;
        return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent);
      }, _translate(t, e = this.prevIndex, i = this.index) {
        const s = this._getTransitioner(e === i ? false : e, i);
        return s.translate(t), s;
      }, _getTransitioner(t = this.prevIndex, e = this.index, i = this.dir || 1, s = this.transitionOptions) {
        return new this.Transitioner(Ie(t) ? this.slides[t] : t, Ie(e) ? this.slides[e] : e, i * (U ? -1 : 1), s);
      } } };
      function Va(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
      }
      function Qn(t) {
        return 0.5 * t + 300;
      }
      var to = { mixins: [Zn], props: { animation: String }, data: { animation: "slide", clsActivated: "uk-transition-active", Animations: Ts, Transitioner: ma }, computed: { animation({ animation: t, Animations: e }) {
        return __spreadProps(__spreadValues({}, e[t] || e.slide), { name: t });
      }, transitionOptions() {
        return { animation: this.animation };
      } }, observe: ut(), events: { beforeitemshow({ target: t }) {
        k(t, this.clsActive);
      }, itemshown({ target: t }) {
        k(t, this.clsActivated);
      }, itemhidden({ target: t }) {
        D(t, this.clsActive, this.clsActivated);
      } } }, eo = __spreadProps(__spreadValues({}, Ts), { fade: { show() {
        return [{ opacity: 0 }, { opacity: 1 }];
      }, percent(t) {
        return 1 - c(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t }, { opacity: t }];
      } }, scale: { show() {
        return [{ opacity: 0, transform: pe(1 - 0.2) }, { opacity: 1, transform: pe(1) }];
      }, percent(t) {
        return 1 - c(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t, transform: pe(1 - 0.2 * t) }, { opacity: t, transform: pe(1 - 0.2 + 0.2 * t) }];
      } } }), io = { mixins: [Es, to], functional: true, props: { delayControls: Number, preload: Number, videoAutoplay: Boolean, template: String }, data: () => ({ preload: 1, videoAutoplay: false, delayControls: 3e3, items: [], cls: "uk-open", clsPage: "uk-lightbox-page", selList: ".uk-lightbox-items", attrItem: "uk-lightbox-item", selClose: ".uk-close-large", selCaption: ".uk-lightbox-caption", pauseOnHover: false, velocity: 2, Animations: eo, template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>' }), created() {
        const t = y(this.template), e = y(this.selList, t);
        this.items.forEach(() => L(e, "<li>"));
        const i = y("[uk-close]", t), s = this.t("close");
        i && s && (i.dataset.i18n = JSON.stringify({ label: s })), this.$mount(L(this.container, t));
      }, computed: { caption: ({ selCaption: t }, e) => y(t, e) }, events: [{ name: `${ii} ${ct} keydown`, handler: "showControls" }, { name: "click", self: true, delegate: ({ selList: t }) => `${t} > *`, handler(t) {
        t.defaultPrevented || this.hide();
      } }, { name: "shown", self: true, handler: "showControls" }, { name: "hide", self: true, handler() {
        this.hideControls(), D(this.slides, this.clsActive), B.stop(this.slides);
      } }, { name: "hidden", self: true, handler() {
        this.$destroy(true);
      } }, { name: "keyup", el: () => document, handler({ keyCode: t }) {
        if (!this.isToggled(this.$el) || !this.draggable)
          return;
        let e = -1;
        t === A.LEFT ? e = "previous" : t === A.RIGHT ? e = "next" : t === A.HOME ? e = 0 : t === A.END && (e = "last"), ~e && this.show(e);
      } }, { name: "beforeitemshow", handler(t) {
        this.isToggled() || (this.draggable = false, t.preventDefault(), this.toggleElement(this.$el, true, false), this.animation = eo.scale, D(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
      } }, { name: "itemshow", handler() {
        jt(this.caption, this.getItem().caption || "");
        for (let t = -this.preload; t <= this.preload; t++)
          this.loadItem(this.index + t);
      } }, { name: "itemshown", handler() {
        this.draggable = this.$props.draggable;
      } }, { name: "itemload", handler(t, e) {
        return __async(this, null, function* () {
          const { source: i, type: s, alt: n = "", poster: o, attrs: r = {} } = e;
          if (this.setItem(e, "<span uk-spinner></span>"), !i)
            return;
          let a;
          const l = { allowfullscreen: "", style: "max-width: 100%; box-sizing: border-box;", "uk-responsive": "", "uk-video": `${this.videoAutoplay}` };
          if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
            const h = Ue("img", __spreadValues({ src: i, alt: n }, r));
            x(h, "load", () => this.setItem(e, h)), x(h, "error", () => this.setError(e));
          } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
            const h = Ue("video", __spreadValues({ src: i, poster: o, controls: "", playsinline: "", "uk-video": `${this.videoAutoplay}` }, r));
            x(h, "loadedmetadata", () => this.setItem(e, h)), x(h, "error", () => this.setError(e));
          } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i))
            this.setItem(e, Ue("iframe", __spreadValues({ src: i, allowfullscreen: "", class: "uk-lightbox-iframe" }, r)));
          else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))
            this.setItem(e, Ue("iframe", __spreadValues(__spreadValues({ src: `https://www.youtube${a[1] || ""}.com/embed/${a[2]}${a[3] ? `?${a[3]}` : ""}`, width: 1920, height: 1080 }, l), r)));
          else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
            try {
              const { height: h, width: u } = yield (yield fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, { credentials: "omit" })).json();
              this.setItem(e, Ue("iframe", __spreadValues(__spreadValues({ src: `https://player.vimeo.com/video/${a[1]}${a[2] ? `?${a[2]}` : ""}`, width: u, height: h }, l), r)));
            } catch {
              this.setError(e);
            }
        });
      } }], methods: { loadItem(t = this.index) {
        const e = this.getItem(t);
        this.getSlide(e).childElementCount || v(this.$el, "itemload", [e]);
      }, getItem(t = this.index) {
        return this.items[nt(t, this.slides)];
      }, setItem(t, e) {
        v(this.$el, "itemloaded", [this, jt(this.getSlide(t), e)]);
      }, getSlide(t) {
        return this.slides[this.items.indexOf(t)];
      }, setError(t) {
        this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
      }, showControls() {
        clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), k(this.$el, "uk-active", "uk-transition-active");
      }, hideControls() {
        D(this.$el, "uk-active", "uk-transition-active");
      } } };
      function Ue(t, e) {
        const i = Rt(`<${t}>`);
        return d(i, e), i;
      }
      var Ya = { install: Ga, props: { toggle: String }, data: { toggle: "a" }, computed: { toggles: ({ toggle: t }, e) => z(t, e) }, watch: { toggles(t) {
        this.hide();
        for (const e of t)
          H(e, "a") && d(e, "role", "button");
      } }, disconnected() {
        this.hide();
      }, events: { name: "click", delegate: ({ toggle: t }) => `${t}:not(.uk-disabled)`, handler(t) {
        t.defaultPrevented || (t.preventDefault(), this.show(t.current));
      } }, methods: { show(t) {
        const e = qs(this.toggles.map(so), "source");
        if (Se(t)) {
          const { source: i } = so(t);
          t = wt(e, ({ source: s }) => i === s);
        }
        return this.panel = this.panel || this.$create("lightboxPanel", __spreadProps(__spreadValues({}, this.$props), { items: e })), x(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t);
      }, hide() {
        var t;
        return (t = this.panel) == null ? void 0 : t.hide();
      } } };
      function Ga(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", io), dt(e.props, t.component("lightboxPanel").options.props);
      }
      function so(t) {
        const e = {};
        for (const i of ["href", "caption", "type", "poster", "alt", "attrs"])
          e[i === "href" ? "source" : i] = X(t, i);
        return e.attrs = fe(e.attrs), e;
      }
      var Xa = { mixins: [Le], functional: true, args: ["message", "status"], data: { message: "", status: "", timeout: 5e3, group: "", pos: "top-center", clsContainer: "uk-notification", clsClose: "uk-notification-close", clsMsg: "uk-notification-message" }, install: Ja, computed: { marginProp: ({ pos: t }) => `margin-${t.match(/[a-z]+(?=-)/)[0]}`, startProps() {
        return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
      } }, created() {
        const t = `${this.clsContainer}-${this.pos}`, e = `data-${this.clsContainer}-container`, i = y(`.${t}[${e}]`, this.container) || L(this.container, `<div class="${this.clsContainer} ${t}" ${e}></div>`);
        this.$mount(L(i, `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`));
      }, connected() {
        return __async(this, null, function* () {
          const t = S(c(this.$el, this.marginProp));
          yield B.start(c(this.$el, this.startProps), { opacity: 1, [this.marginProp]: t }), this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        });
      }, events: { click(t) {
        t.target.closest('a[href="#"],a[href=""]') && t.preventDefault(), this.close();
      }, [Lt]() {
        this.timer && clearTimeout(this.timer);
      }, [ae]() {
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      } }, methods: { close(t) {
        return __async(this, null, function* () {
          const e = (i) => {
            const s = C(i);
            v(i, "close", [this]), ot(i), s != null && s.hasChildNodes() || ot(s);
          };
          this.timer && clearTimeout(this.timer), t || (yield B.start(this.$el, this.startProps)), e(this.$el);
        });
      } } };
      function Ja(t) {
        t.notification.closeAll = function(e, i) {
          kt(document.body, (s) => {
            const n = t.getComponent(s, "notification");
            n && (!e || e === n.group) && n.close(i);
          });
        };
      }
      var Ei = { props: { media: Boolean }, data: { media: false }, connected() {
        const t = Ka(this.media, this.$el);
        if (this.matchMedia = true, t) {
          this.mediaObj = window.matchMedia(t);
          const e = () => {
            this.matchMedia = this.mediaObj.matches, v(this.$el, Wt("mediachange", false, true, [this.mediaObj]));
          };
          this.offMediaObj = x(this.mediaObj, "change", () => {
            e(), this.$emit("resize");
          }), e();
        }
      }, disconnected() {
        var t;
        (t = this.offMediaObj) == null || t.call(this);
      } };
      function Ka(t, e) {
        if (N(t)) {
          if (ft(t, "@"))
            t = S(c(e, `--uk-breakpoint-${t.substr(1)}`));
          else if (isNaN(t))
            return t;
        }
        return t && vt(t) ? `(min-width: ${t}px)` : "";
      }
      function no(t) {
        return q(t) ? Math.ceil(Math.max(0, ...z("[stroke]", t).map((e) => e.getTotalLength()))) : 0;
      }
      const Ti = { x: Ci, y: Ci, rotate: Ci, scale: Ci, color: As, backgroundColor: As, borderColor: As, blur: Kt, hue: Kt, fopacity: Kt, grayscale: Kt, invert: Kt, saturate: Kt, sepia: Kt, opacity: Qa, stroke: tl, bgx: ao, bgy: ao }, { keys: oo } = Object;
      var ro = { mixins: [Ei], props: fo(oo(Ti), "list"), data: fo(oo(Ti), void 0), computed: { props(t, e) {
        const i = {};
        for (const n in t)
          n in Ti && !G(t[n]) && (i[n] = t[n].slice());
        const s = {};
        for (const n in i)
          s[n] = Ti[n](n, e, i[n], i);
        return s;
      } }, events: { load() {
        this.$emit();
      } }, methods: { reset() {
        for (const t in this.getCss(0))
          c(this.$el, t, "");
      }, getCss(t) {
        const e = {};
        for (const i in this.props)
          this.props[i](e, Z(t));
        return e.willChange = Object.keys(e).map(oi).join(","), e;
      } } };
      function Ci(t, e, i) {
        let s = _i(i) || { x: "px", y: "px", rotate: "deg" }[t] || "", n;
        return t === "x" || t === "y" ? (t = `translate${St(t)}`, n = (o) => S(S(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", n = (o) => {
          var r;
          return _i([o]) ? Y(o, "width", e, true) / e[`offset${(r = o.endsWith) != null && r.call(o, "vh") ? "Height" : "Width"}`] : S(o);
        }), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = ve(i, n), (o, r) => {
          o.transform = `${o.transform || ""} ${t}(${Ve(i, r)}${s})`;
        };
      }
      function As(t, e, i) {
        return i.length === 1 && i.unshift(Ye(e, t, "")), i = ve(i, (s) => Za(e, s)), (s, n) => {
          const [o, r, a] = uo(i, n), l = o.map((h, u) => (h += a * (r[u] - h), u === 3 ? S(h) : parseInt(h, 10))).join(",");
          s[t] = `rgba(${l})`;
        };
      }
      function Za(t, e) {
        return Ye(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(S);
      }
      function Kt(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = _i(i) || { blur: "px", hue: "deg" }[t] || "%";
        return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, i = ve(i), (n, o) => {
          const r = Ve(i, o);
          n.filter = `${n.filter || ""} ${t}(${r + s})`;
        };
      }
      function Qa(t, e, i) {
        return i.length === 1 && i.unshift(Ye(e, t, "")), i = ve(i), (s, n) => {
          s[t] = Ve(i, n);
        };
      }
      function tl(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = _i(i), n = no(e);
        return i = ve(i.reverse(), (o) => (o = S(o), s === "%" ? o * n / 100 : o)), i.some(([o]) => o) ? (c(e, "strokeDasharray", n), (o, r) => {
          o.strokeDashoffset = Ve(i, r);
        }) : O;
      }
      function ao(t, e, i, s) {
        i.length === 1 && i.unshift(0);
        const n = t === "bgy" ? "height" : "width";
        s[t] = ve(i, (a) => Y(a, n, e));
        const o = ["bgx", "bgy"].filter((a) => a in s);
        if (o.length === 2 && t === "bgx")
          return O;
        if (Ye(e, "backgroundSize", "") === "cover")
          return el(t, e, i, s);
        const r = {};
        for (const a of o)
          r[a] = lo(e, a);
        return ho(o, r, s);
      }
      function el(t, e, i, s) {
        const n = il(e);
        if (!n.width)
          return O;
        const o = { width: e.offsetWidth, height: e.offsetHeight }, r = ["bgx", "bgy"].filter((u) => u in s), a = {};
        for (const u of r) {
          const f = s[u].map(([_]) => _), p = Math.min(...f), g = Math.max(...f), w = f.indexOf(p) < f.indexOf(g), T = g - p;
          a[u] = `${(w ? -T : 0) - (w ? p : g)}px`, o[u === "bgy" ? "height" : "width"] += T;
        }
        const l = qi.cover(n, o);
        for (const u of r) {
          const f = u === "bgy" ? "height" : "width", p = l[f] - o[f];
          a[u] = `max(${lo(e, u)},-${p}px) + ${a[u]}`;
        }
        const h = ho(r, a, s);
        return (u, f) => {
          h(u, f), u.backgroundSize = `${l.width}px ${l.height}px`, u.backgroundRepeat = "no-repeat";
        };
      }
      function lo(t, e) {
        return Ye(t, `background-position-${e.substr(-1)}`, "");
      }
      function ho(t, e, i) {
        return function(s, n) {
          for (const o of t) {
            const r = Ve(i[o], n);
            s[`background-position-${o.substr(-1)}`] = `calc(${e[o]} + ${r}px)`;
          }
        };
      }
      const co = {}, Pi = {};
      function il(t) {
        const e = c(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (Pi[e])
          return Pi[e];
        const i = new Image();
        return e && (i.src = e, !i.naturalWidth && !co[e]) ? (F(i, "error load", () => {
          Pi[e] = Os(i), v(t, Wt("load", false));
        }), co[e] = true, Os(i)) : Pi[e] = Os(i);
      }
      function Os(t) {
        return { width: t.naturalWidth, height: t.naturalHeight };
      }
      function ve(t, e = S) {
        const i = [], { length: s } = t;
        let n = 0;
        for (let o = 0; o < s; o++) {
          let [r, a] = N(t[o]) ? t[o].trim().split(/ (?![^(]*\))/) : [t[o]];
          if (r = e(r), a = a ? S(a) / 100 : null, o === 0 ? a === null ? a = 0 : a && i.push([r, 0]) : o === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([r, a]), a = 1)), i.push([r, a]), a === null)
            n++;
          else if (n) {
            const l = i[o - n - 1][1], h = (a - l) / (n + 1);
            for (let u = n; u > 0; u--)
              i[o - u][1] = l + h * (n - u + 1);
            n = 0;
          }
        }
        return i;
      }
      function uo(t, e) {
        const i = wt(t.slice(1), ([, s]) => e <= s) + 1;
        return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])];
      }
      function Ve(t, e) {
        const [i, s, n] = uo(t, e);
        return i + Math.abs(i - s) * n * (i < s ? 1 : -1);
      }
      const sl = /^-?\d+(?:\.\d+)?(\S+)?/;
      function _i(t, e) {
        var i;
        for (const s of t) {
          const n = (i = s.match) == null ? void 0 : i.call(s, sl);
          if (n)
            return n[1];
        }
        return e;
      }
      function Ye(t, e, i) {
        const s = t.style[e], n = c(c(t, e, i), e);
        return t.style[e] = s, n;
      }
      function fo(t, e) {
        return t.reduce((i, s) => (i[s] = e, i), {});
      }
      function po(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
      }
      var nl = { mixins: [ro], props: { target: String, viewport: Number, easing: Number, start: String, end: String }, data: { target: false, viewport: 1, easing: 1, start: 0, end: 0 }, computed: { target: ({ target: t }, e) => go(t && Q(t, e) || e), start({ start: t }) {
        return Y(t, "height", this.target, true);
      }, end({ end: t, viewport: e }) {
        return Y(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, true);
      } }, observe: [ws(), Fe({ target: ({ target: t }) => t }), ut({ target: ({ $el: t, target: e }) => [t, e, At(e, true)] })], update: { read({ percent: t }, e) {
        if (e.has("scroll") || (t = false), !q(this.$el))
          return false;
        if (!this.matchMedia)
          return;
        const i = t;
        return t = po(bi(this.target, this.start, this.end), this.easing), { percent: t, style: i === t ? false : this.getCss(t) };
      }, write({ style: t }) {
        if (!this.matchMedia) {
          this.reset();
          return;
        }
        t && c(this.$el, t);
      }, events: ["scroll", "resize"] } };
      function go(t) {
        return t ? "offsetTop" in t ? t : go(C(t)) : document.documentElement;
      }
      var mo = { props: { parallax: Boolean, parallaxTarget: Boolean, parallaxStart: String, parallaxEnd: String, parallaxEasing: Number }, data: { parallax: false, parallaxTarget: false, parallaxStart: 0, parallaxEnd: 0, parallaxEasing: 0 }, observe: [ut({ target: ({ $el: t, parallaxTarget: e }) => [t, e], filter: ({ parallax: t }) => t }), Fe({ filter: ({ parallax: t }) => t })], computed: { parallaxTarget({ parallaxTarget: t }, e) {
        return t && Q(t, e) || this.list;
      } }, update: { read() {
        if (!this.parallax)
          return false;
        const t = this.parallaxTarget, e = Y(this.parallaxStart, "height", t, true), i = Y(this.parallaxEnd, "height", t, true), s = po(bi(t, e, i), this.parallaxEasing);
        return { parallax: this.getIndexAt(s) };
      }, write({ parallax: t }) {
        const [e, i] = t, s = this.getValidIndex(e + Math.ceil(i)), n = this.slides[e], o = this.slides[s], { triggerShow: r, triggerShown: a, triggerHide: l, triggerHidden: h } = ol(this);
        if (~this.prevIndex)
          for (const f of /* @__PURE__ */ new Set([this.index, this.prevIndex]))
            m([s, e], f) || (l(this.slides[f]), h(this.slides[f]));
        const u = this.prevIndex !== e || this.index !== s;
        this.dir = 1, this.prevIndex = e, this.index = s, n !== o && l(n), r(o), u && a(n), this._translate(n === o ? 1 : i, n, o);
      }, events: ["scroll", "resize"] }, methods: { getIndexAt(t) {
        const e = t * (this.length - 1);
        return [Math.floor(e), e % 1];
      } } };
      function ol(t) {
        const { clsSlideActive: e, clsEnter: i, clsLeave: s } = t;
        return { triggerShow: n, triggerShown: o, triggerHide: r, triggerHidden: a };
        function n(l) {
          $(l, s) && (r(l), a(l)), $(l, e) || (v(l, "beforeitemshow", [t]), v(l, "itemshow", [t]));
        }
        function o(l) {
          $(l, i) && v(l, "itemshown", [t]);
        }
        function r(l) {
          $(l, e) || n(l), $(l, i) && o(l), $(l, s) || (v(l, "beforeitemhide", [t]), v(l, "itemhide", [t]));
        }
        function a(l) {
          $(l, s) && v(l, "itemhidden", [t]);
        }
      }
      var vo = { update: { write() {
        if (this.stack.length || this.dragging || this.parallax)
          return;
        const t = this.getValidIndex();
        !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index);
      }, events: ["resize"] } }, bo = { observe: $i({ target: ({ slides: t }) => t, targets: (t) => t.getAdjacentSlides() }), methods: { getAdjacentSlides() {
        return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
      } } };
      function rl(t, e, i, { center: s, easing: n, list: o }) {
        const r = t ? Ge(t, o, s) : Ge(e, o, s) + b(e).width * i, a = e ? Ge(e, o, s) : r + b(t).width * i * (U ? -1 : 1);
        let l;
        return { dir: i, show(h, u = 0, f) {
          const p = f ? "linear" : n;
          return h -= Math.round(h * Z(u, -1, 1)), this.translate(u), u = t ? u : Z(u, 0, 1), Ds(this.getItemIn(), "itemin", { percent: u, duration: h, timing: p, dir: i }), t && Ds(this.getItemIn(true), "itemout", { percent: 1 - u, duration: h, timing: p, dir: i }), new Promise((g) => {
            l || (l = g), B.start(o, { transform: W(-a * (U ? -1 : 1), "px") }, h, p).then(l, O);
          });
        }, cancel() {
          return B.cancel(o);
        }, reset() {
          c(o, "transform", "");
        }, forward(_0) {
          return __async(this, arguments, function* (h, u = this.percent()) {
            return yield this.cancel(), this.show(h, u, true);
          });
        }, translate(h) {
          if (h === this.percent())
            return;
          const u = this.getDistance() * i * (U ? -1 : 1);
          c(o, "transform", W(Z(-a + (u - u * h), -be(o), b(o).width) * (U ? -1 : 1), "px"));
          const f = this.getActives(), p = this.getItemIn(), g = this.getItemIn(true);
          h = t ? Z(h, -1, 1) : 0;
          for (const w of M(o)) {
            const T = m(f, w), _ = w === p, bt = w === g, Je = _ || !bt && (T || i * (U ? -1 : 1) === -1 ^ Ai(w, o) > Ai(t || e));
            Ds(w, `itemtranslate${Je ? "in" : "out"}`, { dir: i, percent: bt ? 1 - h : _ ? h : T ? 1 : 0 });
          }
        }, percent() {
          return Math.abs((c(o, "transform").split(",")[4] * (U ? -1 : 1) + r) / (a - r));
        }, getDistance() {
          return Math.abs(a - r);
        }, getItemIn(h = false) {
          let u = this.getActives(), f = xo(o, Ge(e || t, o, s));
          if (h) {
            const p = u;
            u = f, f = p;
          }
          return f[wt(f, (p) => !m(u, p))];
        }, getActives() {
          return xo(o, Ge(t || e, o, s));
        } };
      }
      function Ge(t, e, i) {
        const s = Ai(t, e);
        return i ? s - al(t, e) : Math.min(s, wo(e));
      }
      function wo(t) {
        return Math.max(0, be(t) - b(t).width);
      }
      function be(t, e) {
        return zt(M(t).slice(0, e), (i) => b(i).width);
      }
      function al(t, e) {
        return b(e).width / 2 - b(t).width / 2;
      }
      function Ai(t, e) {
        return t && (os(t).left + (U ? b(t).width - b(e).width : 0)) * (U ? -1 : 1) || 0;
      }
      function xo(t, e) {
        e -= 1;
        const i = b(t).width, s = e + i + 2;
        return M(t).filter((n) => {
          const o = Ai(n, t), r = o + Math.min(b(n).width, i);
          return o >= e && r <= s;
        });
      }
      function Ds(t, e, i) {
        v(t, Wt(e, false, false, i));
      }
      var ll = { mixins: [it, Zn, vo, mo, bo], props: { center: Boolean, sets: Boolean, active: String }, data: { center: false, sets: false, attrItem: "uk-slider-item", selList: ".uk-slider-items", selNav: ".uk-slider-nav", clsContainer: "uk-slider-container", active: "all", Transitioner: rl }, computed: { finite({ finite: t }) {
        return t || hl(this.list, this.center);
      }, maxIndex() {
        if (!this.finite || this.center && !this.sets)
          return this.length - 1;
        if (this.center)
          return Bt(this.sets);
        let t = 0;
        const e = wo(this.list), i = wt(this.slides, (s) => {
          if (t >= e)
            return true;
          t += b(s).width;
        });
        return ~i ? i : this.length - 1;
      }, sets({ sets: t }) {
        if (!t || this.parallax)
          return;
        let e = 0;
        const i = [], s = b(this.list).width;
        for (let n = 0; n < this.length; n++) {
          const o = b(this.slides[n]).width;
          e + o > s && (e = 0), this.center ? e < s / 2 && e + o + b(this.slides[nt(+n + 1, this.slides)]).width / 2 > s / 2 && (i.push(+n), e = s / 2 - o / 2) : e === 0 && i.push(Math.min(+n, this.maxIndex)), e += o;
        }
        if (i.length)
          return i;
      }, transitionOptions() {
        return { center: this.center, list: this.list };
      }, slides() {
        return M(this.list).filter(q);
      } }, connected() {
        R(this.$el, this.clsContainer, !y(`.${this.clsContainer}`, this.$el));
      }, observe: ut({ target: ({ slides: t, $el: e }) => [e, ...t] }), update: { write() {
        for (const t of this.navItems) {
          const e = xt(X(t, this.attrItem));
          e !== false && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !m(this.sets, e));
        }
        this.reorder(), this.updateActiveClasses();
      }, events: ["resize"] }, events: { beforeitemshow(t) {
        !this.dragging && this.sets && this.stack.length < 2 && !m(this.sets, this.index) && (this.index = this.getValidIndex());
        const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
        if (!this.dragging && e > 1) {
          for (let n = 0; n < e; n++)
            this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
          t.preventDefault();
          return;
        }
        const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex, s = be(this.list) / this.length;
        this.duration = Qn(s / this.velocity) * (b(this.slides[i]).width / s), this.reorder();
      }, itemshow() {
        ~this.prevIndex && k(this._getTransitioner().getItemIn(), this.clsActive), this.updateActiveClasses(this.prevIndex);
      }, itemshown() {
        this.updateActiveClasses();
      } }, methods: { reorder() {
        if (this.finite) {
          c(this.slides, "order", "");
          return;
        }
        const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
        if (this.slides.forEach((n, o) => c(n, "order", this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : "")), !this.center || !this.length)
          return;
        const e = this.slides[t];
        let i = b(this.list).width / 2 - b(e).width / 2, s = 0;
        for (; i > 0; ) {
          const n = this.getIndex(--s + t, t), o = this.slides[n];
          c(o, "order", n > t ? -2 : -1), i -= b(o).width;
        }
      }, updateActiveClasses(t = this.index) {
        let e = this._getTransitioner(t).getActives();
        this.active !== "all" && (e = [this.slides[this.getValidIndex(t)]]);
        const i = [this.clsActive, !this.sets || m(this.sets, S(this.index)) ? this.clsActivated : ""];
        for (const s of this.slides) {
          const n = m(e, s);
          R(s, i, n), d(s, "aria-hidden", !n);
          for (const o of z(Ce, s))
            mt(o, "_tabindex") || (o._tabindex = d(o, "tabindex")), d(o, "tabindex", n ? o._tabindex : -1);
        }
      }, getValidIndex(t = this.index, e = this.prevIndex) {
        if (t = this.getIndex(t, e), !this.sets)
          return t;
        let i;
        do {
          if (m(this.sets, t))
            return t;
          i = t, t = this.getIndex(t + this.dir, e);
        } while (t !== i);
        return t;
      }, getAdjacentSlides() {
        const { width: t } = b(this.list), e = -t, i = t * 2, s = b(this.slides[this.index]).width, n = this.center ? t / 2 - s / 2 : 0, o = /* @__PURE__ */ new Set();
        for (const r of [-1, 1]) {
          let a = n + (r > 0 ? s : 0), l = 0;
          do {
            const h = this.slides[this.getIndex(this.index + r + l++ * r)];
            a += b(h).width * r, o.add(h);
          } while (this.length > l && a > e && a < i);
        }
        return Array.from(o);
      }, getIndexAt(t) {
        let e = -1;
        const i = this.center ? be(this.list) - (b(this.slides[0]).width / 2 + b(Bt(this.slides)).width / 2) : be(this.list, this.maxIndex);
        let s = t * i, n = 0;
        do {
          const o = b(this.slides[++e]).width, r = this.center ? o / 2 + b(this.slides[e + 1]).width / 2 : o;
          n = s / r % 1, s -= r;
        } while (s >= 0 && e < this.maxIndex);
        return [e, n];
      } } };
      function hl(t, e) {
        if (!t || t.length < 2)
          return true;
        const { width: i } = b(t);
        if (!e)
          return Math.ceil(be(t)) < Math.trunc(i + cl(t));
        const s = M(t), n = Math.trunc(i / 2);
        for (const o in s) {
          const r = s[o], a = b(r).width, l = /* @__PURE__ */ new Set([r]);
          let h = 0;
          for (const u of [-1, 1]) {
            let f = a / 2, p = 0;
            for (; f < n; ) {
              const g = s[nt(+o + u + p++ * u, s)];
              if (l.has(g))
                return true;
              f += b(g).width, l.add(g);
            }
            h = Math.max(h, a / 2 + b(s[nt(+o + u, s)]).width / 2 - (f - n));
          }
          if (Math.trunc(h) > zt(s.filter((u) => !l.has(u)), (u) => b(u).width))
            return true;
        }
        return false;
      }
      function cl(t) {
        return Math.max(0, ...M(t).map((e) => b(e).width));
      }
      var $o = { mixins: [ro], beforeConnect() {
        this.item = this.$el.closest(`.${this.$options.id.replace("parallax", "items")} > *`);
      }, disconnected() {
        this.item = null;
      }, events: [{ name: "itemin itemout", self: true, el: ({ item: t }) => t, handler({ type: t, detail: { percent: e, duration: i, timing: s, dir: n } }) {
        _t.read(() => {
          if (!this.matchMedia)
            return;
          const o = this.getCss(ko(t, n, e)), r = this.getCss(yo(t) ? 0.5 : n > 0 ? 1 : 0);
          _t.write(() => {
            c(this.$el, o), B.start(this.$el, r, i, s).catch(O);
          });
        });
      } }, { name: "transitioncanceled transitionend", self: true, el: ({ item: t }) => t, handler() {
        B.cancel(this.$el);
      } }, { name: "itemtranslatein itemtranslateout", self: true, el: ({ item: t }) => t, handler({ type: t, detail: { percent: e, dir: i } }) {
        _t.read(() => {
          if (!this.matchMedia) {
            this.reset();
            return;
          }
          const s = this.getCss(ko(t, i, e));
          _t.write(() => c(this.$el, s));
        });
      } }] };
      function yo(t) {
        return ee(t, "in");
      }
      function ko(t, e, i) {
        return i /= 2, yo(t) ^ e < 0 ? i : 1 - i;
      }
      var ul = __spreadProps(__spreadValues({}, Ts), { fade: { show() {
        return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
      }, percent(t) {
        return 1 - c(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
      } }, scale: { show() {
        return [{ opacity: 0, transform: pe(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
      }, percent(t) {
        return 1 - c(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t, transform: pe(1 + 0.5 * t), zIndex: 0 }, { zIndex: -1 }];
      } }, pull: { show(t) {
        return t < 0 ? [{ transform: W(30), zIndex: -1 }, { transform: W(), zIndex: 0 }] : [{ transform: W(-100), zIndex: 0 }, { transform: W(), zIndex: -1 }];
      }, percent(t, e, i) {
        return i < 0 ? 1 - We(e) : We(t);
      }, translate(t, e) {
        return e < 0 ? [{ transform: W(30 * t), zIndex: -1 }, { transform: W(-100 * (1 - t)), zIndex: 0 }] : [{ transform: W(-t * 100), zIndex: 0 }, { transform: W(30 * (1 - t)), zIndex: -1 }];
      } }, push: { show(t) {
        return t < 0 ? [{ transform: W(100), zIndex: 0 }, { transform: W(), zIndex: -1 }] : [{ transform: W(-30), zIndex: -1 }, { transform: W(), zIndex: 0 }];
      }, percent(t, e, i) {
        return i > 0 ? 1 - We(e) : We(t);
      }, translate(t, e) {
        return e < 0 ? [{ transform: W(t * 100), zIndex: 0 }, { transform: W(-30 * (1 - t)), zIndex: -1 }] : [{ transform: W(-30 * t), zIndex: -1 }, { transform: W(100 * (1 - t)), zIndex: 0 }];
      } } }), fl = { mixins: [it, to, vo, mo, bo], props: { ratio: String, minHeight: String, maxHeight: String }, data: { ratio: "16:9", minHeight: void 0, maxHeight: void 0, selList: ".uk-slideshow-items", attrItem: "uk-slideshow-item", selNav: ".uk-slideshow-nav", Animations: ul }, watch: { list(t) {
        c(t, { aspectRatio: this.ratio ? this.ratio.replace(":", "/") : void 0, minHeight: this.minHeight, maxHeight: this.maxHeight, minWidth: "100%", maxWidth: "100%" });
      } }, methods: { getAdjacentSlides() {
        return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
      } } }, dl = { mixins: [it, On], props: { group: String, threshold: Number, clsItem: String, clsPlaceholder: String, clsDrag: String, clsDragState: String, clsBase: String, clsNoDrag: String, clsEmpty: String, clsCustom: String, handle: String }, data: { group: false, threshold: 5, clsItem: "uk-sortable-item", clsPlaceholder: "uk-sortable-placeholder", clsDrag: "uk-sortable-drag", clsDragState: "uk-drag", clsBase: "uk-sortable", clsNoDrag: "uk-sortable-nodrag", clsEmpty: "uk-sortable-empty", clsCustom: "", handle: false, pos: {} }, events: { name: ct, passive: false, handler: "init" }, computed: { target: (t, e) => (e.tBodies || [e])[0], items() {
        return M(this.target);
      }, isEmpty() {
        return !this.items.length;
      }, handles({ handle: t }, e) {
        return t ? z(t, e) : this.items;
      } }, watch: { isEmpty(t) {
        R(this.target, this.clsEmpty, t);
      }, handles(t, e) {
        c(e, { touchAction: "", userSelect: "" }), c(t, { touchAction: "none", userSelect: "none" });
      } }, update: { write(t) {
        if (!this.drag || !C(this.placeholder))
          return;
        const { pos: { x: e, y: i }, origin: { offsetTop: s, offsetLeft: n }, placeholder: o } = this;
        c(this.drag, { top: i - s, left: e - n });
        const r = this.getSortable(document.elementFromPoint(e, i));
        if (!r)
          return;
        const { items: a } = r;
        if (a.some(B.inProgress))
          return;
        const l = vl(a, { x: e, y: i });
        if (a.length && (!l || l === o))
          return;
        const h = this.getSortable(o), u = bl(r.target, l, o, e, i, r === h && t.moved !== l);
        u !== false && (u && o === u || (r !== h ? (h.remove(o), t.moved = l) : delete t.moved, r.insert(o, u), this.touched.add(r)));
      }, events: ["move"] }, methods: { init(t) {
        const { target: e, button: i, defaultPrevented: s } = t, [n] = this.items.filter((o) => o.contains(e));
        !n || s || i > 0 || Yi(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.pos = yt(t), this.touched = /* @__PURE__ */ new Set([this]), this.placeholder = n, this.origin = __spreadValues({ target: e, index: $t(n) }, this.pos), x(document, ii, this.move), x(document, Tt, this.end), this.threshold || this.start(t));
      }, start(t) {
        this.drag = ml(this.$container, this.placeholder);
        const { left: e, top: i } = b(this.placeholder);
        dt(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - i }), k(this.drag, this.clsDrag, this.clsCustom), k(this.placeholder, this.clsPlaceholder), k(this.items, this.clsItem), k(document.documentElement, this.clsDragState), v(this.$el, "start", [this, this.placeholder]), pl(this.pos), this.move(t);
      }, move: xl(function(t) {
        dt(this.pos, yt(t)), this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t);
      }), end() {
        if (Ct(document, ii, this.move), Ct(document, Tt, this.end), !this.drag)
          return;
        gl();
        const t = this.getSortable(this.placeholder);
        this === t ? this.origin.index !== $t(this.placeholder) && v(this.$el, "moved", [this, this.placeholder]) : (v(t.$el, "added", [t, this.placeholder]), v(this.$el, "removed", [this, this.placeholder])), v(this.$el, "stop", [this, this.placeholder]), ot(this.drag), this.drag = null;
        for (const { clsPlaceholder: e, clsItem: i } of this.touched)
          for (const s of this.touched)
            D(s.items, e, i);
        this.touched = null, D(document.documentElement, this.clsDragState);
      }, insert(t, e) {
        k(this.items, this.clsItem), e && e.previousElementSibling !== t ? this.animate(() => ai(e, t)) : !e && this.target.lastElementChild !== t && this.animate(() => L(this.target, t));
      }, remove(t) {
        this.target.contains(t) && this.animate(() => ot(t));
      }, getSortable(t) {
        do {
          const e = this.$getComponent(t, "sortable");
          if (e && (e === this || this.group !== false && e.group === this.group))
            return e;
        } while (t = C(t));
      } } };
      let So;
      function pl(t) {
        let e = Date.now();
        So = setInterval(() => {
          let { x: i, y: s } = t;
          s += document.scrollingElement.scrollTop;
          const n = (Date.now() - e) * 0.3;
          e = Date.now(), Vt(document.elementFromPoint(i, t.y)).reverse().some((o) => {
            let { scrollTop: r, scrollHeight: a } = o;
            const { top: l, bottom: h, height: u } = rt(o);
            if (l < s && l + 35 > s)
              r -= n;
            else if (h > s && h - 35 < s)
              r += n;
            else
              return;
            if (r > 0 && r < a - u)
              return o.scrollTop = r, true;
          });
        }, 15);
      }
      function gl() {
        clearInterval(So);
      }
      function ml(t, e) {
        let i;
        if (H(e, "li", "tr")) {
          i = y("<div>"), L(i, e.cloneNode(true).children);
          for (const s of e.getAttributeNames())
            d(i, s, e.getAttribute(s));
        } else
          i = e.cloneNode(true);
        return L(t, i), c(i, "margin", "0", "important"), c(i, { boxSizing: "border-box", width: e.offsetWidth, height: e.offsetHeight, padding: c(e, "padding") }), et(i.firstElementChild, et(e.firstElementChild)), i;
      }
      function vl(t, e) {
        return t[wt(t, (i) => ti(e, b(i)))];
      }
      function bl(t, e, i, s, n, o) {
        if (!M(t).length)
          return;
        const r = b(e);
        if (!o)
          return wl(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
        const a = b(i), l = Io([r.top, r.bottom], [a.top, a.bottom]), [h, u, f, p] = l ? [s, "width", "left", "right"] : [n, "height", "top", "bottom"], g = a[u] < r[u] ? r[u] - a[u] : 0;
        return a[f] < r[f] ? g && h < r[f] + g ? false : e.nextElementSibling : g && h > r[p] - g ? false : e;
      }
      function wl(t, e) {
        const i = M(t).length === 1;
        i && L(t, e);
        const s = M(t), n = s.some((o, r) => {
          const a = b(o);
          return s.slice(r + 1).some((l) => {
            const h = b(l);
            return !Io([a.left, a.right], [h.left, h.right]);
          });
        });
        return i && ot(e), n;
      }
      function Io(t, e) {
        return t[1] > e[0] && e[1] > t[0];
      }
      function xl(t) {
        let e;
        return function(...i) {
          e || (e = true, requestAnimationFrame(() => {
            e = false, t.call(this, ...i);
          }));
        };
      }
      var Eo = { props: { pos: String, offset: null, flip: Boolean, shift: Boolean, inset: Boolean }, data: { pos: `bottom-${U ? "right" : "left"}`, offset: false, flip: true, shift: true, inset: false }, connected() {
        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = m(["top", "bottom"], this.dir) ? "y" : "x";
      }, methods: { positionAt(t, e, i) {
        let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
        const n = [this.flip && "flip", this.shift && "shift"], o = { element: [this.inset ? this.dir : fi(this.dir), this.align], target: [this.dir, this.align] };
        if (this.axis === "y") {
          for (const l in o)
            o[l].reverse();
          s.reverse(), n.reverse();
        }
        const r = $l(t), a = b(t);
        c(t, { top: -a.height, left: -a.width }), mn(t, e, { attach: o, offset: s, boundary: i, placement: n, viewportOffset: this.getViewportOffset(t) }), r();
      }, getPositionOffset(t = this.$el) {
        return Y(this.offset === false ? c(t, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (m(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
      }, getShiftOffset(t = this.$el) {
        return this.align === "center" ? 0 : Y(c(t, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (m(["left", "top"], this.align) ? 1 : -1);
      }, getViewportOffset(t) {
        return Y(c(t, "--uk-position-viewport-offset"));
      } } };
      function $l(t) {
        const e = At(t), { scrollTop: i } = e;
        return () => {
          i !== e.scrollTop && (e.scrollTop = i);
        };
      }
      var yl = { mixins: [Le, Gt, Eo], data: { pos: "top", animation: ["uk-animation-scale-up"], duration: 100, cls: "uk-active" }, connected() {
        kl(this.$el);
      }, disconnected() {
        this.hide();
      }, methods: { show() {
        if (this.isToggled(this.tooltip || null))
          return;
        const { delay: t = 0, title: e } = Il(this.$options);
        if (!e)
          return;
        const i = d(this.$el, "title"), s = x(this.$el, ["blur", ae], (o) => !pt(o) && this.hide());
        this.reset = () => {
          d(this.$el, { title: i, "aria-describedby": null }), s();
        };
        const n = Jt(this);
        d(this.$el, { title: null, "aria-describedby": n }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, n), t);
      }, hide() {
        return __async(this, null, function* () {
          var t;
          P(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && (yield this.toggleElement(this.tooltip, false, false)), (t = this.reset) == null || t.call(this), ot(this.tooltip), this.tooltip = null);
        });
      }, _show(t, e) {
        return __async(this, null, function* () {
          this.tooltip = L(this.container, `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`), x(this.tooltip, "toggled", (i, s) => {
            if (!s)
              return;
            const n = () => this.positionAt(this.tooltip, this.$el);
            n();
            const [o, r] = Sl(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? `${fi(o)}-${r}` : `${r}-${fi(o)}`;
            const a = [F(document, `keydown ${ct}`, this.hide, false, (l) => l.type === ct && !this.$el.contains(l.target) || l.type === "keydown" && l.keyCode === A.ESC), x([document, ...Yt(this.$el)], "scroll", n, { passive: true })];
            F(this.tooltip, "hide", () => a.forEach((l) => l()), { self: true });
          }), (yield this.toggleElement(this.tooltip, true)) || this.hide();
        });
      } }, events: { [`focus ${Lt} ${ct}`](t) {
        (!pt(t) || t.type === ct) && this.show();
      } } };
      function kl(t) {
        ni(t) || d(t, "tabindex", "0");
      }
      function Sl(t, e, [i, s]) {
        const n = I(t), o = I(e), r = [["left", "right"], ["top", "bottom"]];
        for (const l of r) {
          if (n[l[0]] >= o[l[1]]) {
            i = l[1];
            break;
          }
          if (n[l[1]] <= o[l[0]]) {
            i = l[0];
            break;
          }
        }
        return s = (m(r[0], i) ? r[1] : r[0]).find((l) => n[l] === o[l]) || "center", [i, s];
      }
      function Il(t) {
        const { el: e, id: i, data: s } = t;
        return ["delay", "title"].reduce((n, o) => __spreadValues({ [o]: X(e, o) }, n), __spreadValues(__spreadValues({}, fe(X(e, i), ["title"])), s));
      }
      var El = { mixins: [Si], i18n: { invalidMime: "Invalid File Type: %s", invalidName: "Invalid File Name: %s", invalidSize: "Invalid File Size: %s Kilobytes Max" }, props: { allow: String, clsDragover: String, concurrent: Number, maxSize: Number, method: String, mime: String, multiple: Boolean, name: String, params: Object, type: String, url: String }, data: { allow: false, clsDragover: "uk-dragover", concurrent: 1, maxSize: 0, method: "POST", mime: false, multiple: false, name: "files[]", params: {}, type: "", url: "", abort: O, beforeAll: O, beforeSend: O, complete: O, completeAll: O, error: O, fail: O, load: O, loadEnd: O, loadStart: O, progress: O }, events: { change(t) {
        P(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
      }, drop(t) {
        Oi(t);
        const e = t.dataTransfer;
        e != null && e.files && (D(this.$el, this.clsDragover), this.upload(e.files));
      }, dragenter(t) {
        Oi(t);
      }, dragover(t) {
        Oi(t), k(this.$el, this.clsDragover);
      }, dragleave(t) {
        Oi(t), D(this.$el, this.clsDragover);
      } }, methods: { upload(t) {
        return __async(this, null, function* () {
          if (t = Dt(t), !t.length)
            return;
          v(this.$el, "upload", [t]);
          for (const s of t) {
            if (this.maxSize && this.maxSize * 1e3 < s.size) {
              this.fail(this.t("invalidSize", this.maxSize));
              return;
            }
            if (this.allow && !To(this.allow, s.name)) {
              this.fail(this.t("invalidName", this.allow));
              return;
            }
            if (this.mime && !To(this.mime, s.type)) {
              this.fail(this.t("invalidMime", this.mime));
              return;
            }
          }
          this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
          const e = Tl(t, this.concurrent), i = (s) => __async(this, null, function* () {
            const n = new FormData();
            s.forEach((o) => n.append(this.name, o));
            for (const o in this.params)
              n.append(o, this.params[o]);
            try {
              const o = yield Cl(this.url, { data: n, method: this.method, responseType: this.type, beforeSend: (r) => {
                const { xhr: a } = r;
                x(a.upload, "progress", this.progress);
                for (const l of ["loadStart", "load", "loadEnd", "abort"])
                  x(a, l.toLowerCase(), this[l]);
                return this.beforeSend(r);
              } });
              this.complete(o), e.length ? yield i(e.shift()) : this.completeAll(o);
            } catch (o) {
              this.error(o);
            }
          });
          yield i(e.shift());
        });
      } } };
      function To(t, e) {
        return e.match(new RegExp(`^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`, "i"));
      }
      function Tl(t, e) {
        const i = [];
        for (let s = 0; s < t.length; s += e)
          i.push(t.slice(s, s + e));
        return i;
      }
      function Oi(t) {
        t.preventDefault(), t.stopPropagation();
      }
      function Cl(t, e) {
        const i = __spreadValues({ data: null, method: "GET", headers: {}, xhr: new XMLHttpRequest(), beforeSend: O, responseType: "" }, e);
        return Promise.resolve().then(() => i.beforeSend(i)).then(() => Pl(t, i));
      }
      function Pl(t, e) {
        return new Promise((i, s) => {
          const { xhr: n } = e;
          for (const o in e)
            if (o in n)
              try {
                n[o] = e[o];
              } catch {
              }
          n.open(e.method.toUpperCase(), t);
          for (const o in e.headers)
            n.setRequestHeader(o, e.headers[o]);
          x(n, "load", () => {
            n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(dt(Error(n.statusText), { xhr: n, status: n.status }));
          }), x(n, "error", () => s(dt(Error("Network Error"), { xhr: n }))), x(n, "timeout", () => s(dt(Error("Network Timeout"), { xhr: n }))), n.send(e.data);
        });
      }
      var _l = Object.freeze({ __proto__: null, Countdown: Wr, Filter: ia, Lightbox: Ya, LightboxPanel: io, Notification: Xa, Parallax: nl, Slider: ll, SliderParallax: $o, Slideshow: fl, SlideshowParallax: $o, Sortable: dl, Tooltip: yl, Upload: El });
      function Al(t) {
        Ht && window.MutationObserver && (document.body ? requestAnimationFrame(() => Co(t)) : new MutationObserver((e, i) => {
          document.body && (Co(t), i.disconnect());
        }).observe(document.documentElement, { childList: true }));
      }
      function Co(t) {
        v(document, "uikit:init", t), document.body && kt(document.body, Po), new MutationObserver((e) => e.forEach(Ol)).observe(document, { subtree: true, childList: true }), new MutationObserver((e) => e.forEach(Dl)).observe(document, { subtree: true, attributes: true }), t._initialized = true;
      }
      function Ol({ addedNodes: t, removedNodes: e }) {
        for (const i of t)
          kt(i, Po);
        for (const i of e)
          kt(i, Ml);
      }
      function Dl({ target: t, attributeName: e }) {
        var i;
        const s = _o(e);
        s && (Et(t, e) ? Re(s, t) : (i = Ii(t, s)) == null || i.$destroy());
      }
      function Po(t) {
        const e = qe(t);
        for (const i in e)
          Ps(e[i]);
        for (const i of t.getAttributeNames()) {
          const s = _o(i);
          s && Re(s, t);
        }
      }
      function Ml(t) {
        const e = qe(t);
        for (const i in e)
          _s(e[i]);
      }
      function _o(t) {
        ft(t, "data-") && (t = t.slice(5));
        const e = me[t];
        return e && (e.options || e).name;
      }
      ja(lt), Ra(lt);
      var Ao = { mixins: [it, Gt], props: { animation: Boolean, targets: String, active: null, collapsible: Boolean, multiple: Boolean, toggle: String, content: String, offset: Number }, data: { targets: "> *", active: false, animation: true, collapsible: true, multiple: false, clsOpen: "uk-open", toggle: "> .uk-accordion-title", content: "> .uk-accordion-content", offset: 0 }, computed: { items: ({ targets: t }, e) => z(t, e), toggles({ toggle: t }) {
        return this.items.map((e) => y(t, e));
      }, contents({ content: t }) {
        return this.items.map((e) => {
          var i;
          return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || y(t, e);
        });
      } }, watch: { items(t, e) {
        if (e || $(t, this.clsOpen))
          return;
        const i = this.active !== false && t[Number(this.active)] || !this.collapsible && t[0];
        i && this.toggle(i, false);
      }, toggles() {
        this.$emit();
      }, contents(t) {
        for (const e of t) {
          const i = $(this.items.find((s) => s.contains(e)), this.clsOpen);
          Di(e, !i);
        }
        this.$emit();
      } }, observe: $i(), events: [{ name: "click keydown", delegate: ({ targets: t, $props: e }) => `${t} ${e.toggle}`, handler(t) {
        return __async(this, null, function* () {
          var e;
          t.type === "keydown" && t.keyCode !== A.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = Nl(t.target), yield this.toggle($t(this.toggles, t.current)), this._off());
        });
      } }, { name: "shown hidden", self: true, delegate: ({ targets: t }) => t, handler() {
        this.$emit();
      } }], update() {
        const t = Pe(this.items, `.${this.clsOpen}`);
        for (const e in this.items) {
          const i = this.toggles[e], s = this.contents[e];
          if (!i || !s)
            continue;
          i.id = Jt(this, i), s.id = Jt(this, s);
          const n = m(t, this.items[e]);
          d(i, { role: H(i, "a") ? "button" : null, "aria-controls": s.id, "aria-expanded": n, "aria-disabled": !this.collapsible && t.length < 2 && n }), d(s, { role: "region", "aria-labelledby": i.id }), H(s, "ul") && d(M(s), "role", "presentation");
        }
      }, methods: { toggle(t, e) {
        t = this.items[nt(t, this.items)];
        let i = [t];
        const s = Pe(this.items, `.${this.clsOpen}`);
        if (!this.multiple && !m(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && m(s, t)))
          return Promise.all(i.map((n) => this.toggleElement(n, !m(s, n), (o, r) => {
            if (R(o, this.clsOpen, r), e === false || !this.animation) {
              Di(y(this.content, o), !r);
              return;
            }
            return Bl(o, r, this);
          })));
      } } };
      function Di(t, e) {
        t && (t.hidden = e);
      }
      function Bl(_0, _1, _2) {
        return __async(this, arguments, function* (t, e, { content: i, duration: s, velocity: n, transition: o }) {
          var r;
          i = ((r = t._wrapper) == null ? void 0 : r.firstElementChild) || y(i, t), t._wrapper || (t._wrapper = ci(i, "<div>"));
          const a = t._wrapper;
          c(a, "overflow", "hidden");
          const l = S(c(a, "height"));
          yield B.cancel(a), Di(i, false);
          const h = zt(["marginTop", "marginBottom"], (f) => c(i, f)) + b(i).height, u = l / h;
          s = (n * h + s) * (e ? 1 - u : u), c(a, "height", l), yield B.start(a, { height: e ? h : 0 }, s, o), De(i), delete t._wrapper, e || Di(i, true);
        });
      }
      function Nl(t) {
        const e = At(t, true);
        let i;
        return function s() {
          i = requestAnimationFrame(() => {
            const { top: n } = b(t);
            n < 0 && (e.scrollTop += n), s();
          });
        }(), () => requestAnimationFrame(() => cancelAnimationFrame(i));
      }
      var zl = { mixins: [it, Gt], args: "animation", props: { animation: Boolean, close: String }, data: { animation: true, selClose: ".uk-alert-close", duration: 150 }, events: { name: "click", delegate: ({ selClose: t }) => t, handler(t) {
        t.preventDefault(), this.close();
      } }, methods: { close() {
        return __async(this, null, function* () {
          yield this.toggleElement(this.$el, false, Fl), this.$destroy(true);
        });
      } } };
      function Fl(t, e, { duration: i, transition: s, velocity: n }) {
        const o = S(c(t, "height"));
        return c(t, "height", o), B.start(t, { height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, borderTop: 0, borderBottom: 0, opacity: 0 }, n * o + i, s);
      }
      var Oo = { args: "autoplay", props: { automute: Boolean, autoplay: Boolean }, data: { automute: false, autoplay: true }, beforeConnect() {
        this.autoplay === "inview" && !Et(this.$el, "preload") && (this.$el.preload = "none"), H(this.$el, "iframe") && !Et(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && (H(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = true), this.automute && hn(this.$el);
      }, events: [{ name: `${Lt} focusin`, filter: ({ autoplay: t }) => m(t, "hover"), handler(t) {
        !pt(t) || !Hl(this.$el) ? cs(this.$el) : gi(this.$el);
      } }, { name: `${ae} focusout`, filter: ({ autoplay: t }) => m(t, "hover"), handler(t) {
        pt(t) || gi(this.$el);
      } }], observe: [de({ filter: ({ $el: t, autoplay: e }) => e && e !== "hover" && cn(t), handler([{ isIntersecting: t }]) {
        document.fullscreenElement || (t ? cs(this.$el) : gi(this.$el));
      }, args: { intersecting: false }, options: ({ $el: t, autoplay: e }) => ({ root: e === "inview" ? null : C(t) }) })] };
      function Hl(t) {
        return !t.paused && !t.ended;
      }
      var Ll = { mixins: [Oo], props: { width: Number, height: Number }, data: { automute: true }, created() {
        this.useObjectFit = H(this.$el, "img", "video");
      }, observe: ut({ target: ({ $el: t }) => Do(t) || C(t), filter: ({ useObjectFit: t }) => !t }), update: { read() {
        if (this.useObjectFit)
          return false;
        const { ratio: t, cover: e } = qi, { $el: i, width: s, height: n } = this;
        let o = { width: s, height: n };
        if (!s || !n) {
          const h = { width: i.naturalWidth || i.videoWidth || i.clientWidth, height: i.naturalHeight || i.videoHeight || i.clientHeight };
          s ? o = t(h, "width", s) : n ? o = t(h, "height", n) : o = h;
        }
        const { offsetHeight: r, offsetWidth: a } = Do(i) || C(i), l = e(o, { width: a + (a % 2 ? 1 : 0), height: r + (r % 2 ? 1 : 0) });
        return !l.width || !l.height ? false : l;
      }, write({ height: t, width: e }) {
        c(this.$el, { height: t, width: e });
      }, events: ["resize"] } };
      function Do(t) {
        for (; t = C(t); )
          if (c(t, "position") !== "static")
            return t;
      }
      let J;
      var Mo = { mixins: [Le, Eo, Gt], args: "pos", props: { mode: "list", toggle: Boolean, boundary: Boolean, boundaryX: Boolean, boundaryY: Boolean, target: Boolean, targetX: Boolean, targetY: Boolean, stretch: Boolean, delayShow: Number, delayHide: Number, autoUpdate: Boolean, clsDrop: String, animateOut: Boolean, bgScroll: Boolean, closeOnScroll: Boolean }, data: { mode: ["click", "hover"], toggle: "- *", boundary: false, boundaryX: false, boundaryY: false, target: false, targetX: false, targetY: false, stretch: false, delayShow: 0, delayHide: 800, autoUpdate: true, clsDrop: false, animateOut: false, bgScroll: true, animation: ["uk-animation-fade"], cls: "uk-open", container: false, closeOnScroll: false }, computed: { boundary({ boundary: t, boundaryX: e, boundaryY: i }, s) {
        return [Q(e || t, s) || window, Q(i || t, s) || window];
      }, target({ target: t, targetX: e, targetY: i }, s) {
        return e || (e = t || this.targetEl), i || (i = t || this.targetEl), [e === true ? window : Q(e, s), i === true ? window : Q(i, s)];
      } }, created() {
        this.tracker = new rn();
      }, beforeConnect() {
        this.clsDrop = this.$props.clsDrop || this.$options.id;
      }, connected() {
        k(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = Rl(this)), this._style = Wi(this.$el.style, ["width", "height"]);
      }, disconnected() {
        this.isActive() && (this.hide(false), J = null), c(this.$el, this._style);
      }, events: [{ name: "click", delegate: () => ".uk-drop-close", handler(t) {
        t.preventDefault(), this.hide(false);
      } }, { name: "click", delegate: () => 'a[href*="#"]', handler({ defaultPrevented: t, current: e }) {
        const { hash: i } = e;
        !t && i && le(e) && !this.$el.contains(y(i)) && this.hide(false);
      } }, { name: "beforescroll", handler() {
        this.hide(false);
      } }, { name: "toggle", self: true, handler(t, e) {
        t.preventDefault(), this.isToggled() ? this.hide(false) : this.show(e == null ? void 0 : e.$el, false);
      } }, { name: "toggleshow", self: true, handler(t, e) {
        t.preventDefault(), this.show(e == null ? void 0 : e.$el);
      } }, { name: "togglehide", self: true, handler(t) {
        t.preventDefault(), P(this.$el, ":focus,:hover") || this.hide();
      } }, { name: `${Lt} focusin`, filter: ({ mode: t }) => m(t, "hover"), handler(t) {
        pt(t) || this.clearTimers();
      } }, { name: `${ae} focusout`, filter: ({ mode: t }) => m(t, "hover"), handler(t) {
        !pt(t) && t.relatedTarget && this.hide();
      } }, { name: "toggled", self: true, handler(t, e) {
        e && (this.clearTimers(), this.position());
      } }, { name: "show", self: true, handler() {
        J = this, this.tracker.init(), d(this.targetEl, "aria-expanded", true);
        const t = [ql(this), Ul(this), Yl(this), this.autoUpdate && Bo(this), this.closeOnScroll && Vl(this)];
        F(this.$el, "hide", () => t.forEach((e) => e && e()), { self: true }), this.bgScroll || F(this.$el, "hidden", Bn(this.$el), { self: true });
      } }, { name: "beforehide", self: true, handler: "clearTimers" }, { name: "hide", handler({ target: t }) {
        if (this.$el !== t) {
          J = J === null && this.$el.contains(t) && this.isToggled() ? this : J;
          return;
        }
        J = this.isActive() ? null : J, this.tracker.cancel(), d(this.targetEl, "aria-expanded", null);
      } }], update: { write() {
        this.isToggled() && !$(this.$el, this.clsEnter) && this.position();
      } }, methods: { show(t = this.targetEl, e = true) {
        if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(false, false), this.targetEl = t, this.clearTimers(), !this.isActive()) {
          if (J) {
            if (e && J.isDelaying) {
              this.showTimer = setTimeout(() => P(t, ":hover") && this.show(), 10);
              return;
            }
            let i;
            for (; J && i !== J && !J.$el.contains(this.$el); )
              i = J, J.hide(false, false);
          }
          this.container && C(this.$el) !== this.container && L(this.container, this.$el), this.showTimer = setTimeout(() => this.toggleElement(this.$el, true), e && this.delayShow || 0);
        }
      }, hide(t = true, e = true) {
        const i = () => this.toggleElement(this.$el, false, this.animateOut && e);
        this.clearTimers(), this.isDelayedHide = t, this.isDelaying = Wl(this.$el).some((s) => this.tracker.movesTo(s)), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
      }, clearTimers() {
        clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = false;
      }, isActive() {
        return J === this;
      }, position() {
        D(this.$el, "uk-drop-stack"), c(this.$el, this._style), this.$el.hidden = true;
        const t = this.target.map((n) => jl(this.$el, n)), e = this.getViewportOffset(this.$el), i = [[0, ["x", "width", "left", "right"]], [1, ["y", "height", "top", "bottom"]]];
        for (const [n, [o, r]] of i)
          this.axis !== o && m([o, true], this.stretch) && c(this.$el, { [r]: Math.min(I(this.boundary[n])[r], t[n][r] - 2 * e), [`overflow-${o}`]: "auto" });
        const s = t[0].width - 2 * e;
        this.$el.hidden = false, c(this.$el, "maxWidth", ""), this.$el.offsetWidth > s && k(this.$el, "uk-drop-stack"), c(this.$el, "maxWidth", s), this.positionAt(this.$el, this.target, this.boundary);
        for (const [n, [o, r, a, l]] of i)
          if (this.axis === o && m([o, true], this.stretch)) {
            const h = Math.abs(this.getPositionOffset()), u = I(this.target[n]), f = I(this.$el);
            c(this.$el, { [r]: (u[a] > f[a] ? u[this.inset ? l : a] - Math.max(I(this.boundary[n])[a], t[n][a] + e) : Math.min(I(this.boundary[n])[l], t[n][l] - e) - u[this.inset ? a : l]) - h, [`overflow-${o}`]: "auto" }), this.positionAt(this.$el, this.target, this.boundary);
          }
      } } };
      function Wl(t) {
        const e = [];
        return kt(t, (i) => c(i, "position") !== "static" && e.push(i)), e;
      }
      function jl(t, e) {
        return rt(Yt(e).find((i) => i.contains(t)));
      }
      function Rl(t) {
        const { $el: e } = t.$create("toggle", Q(t.toggle, t.$el), { target: t.$el, mode: t.mode });
        return d(e, "aria-haspopup", true), e;
      }
      function ql(t) {
        const e = () => t.$emit(), i = [ls(e), Be(Yt(t.$el).concat(t.target), e)];
        return () => i.map((s) => s.disconnect());
      }
      function Bo(t, e = () => t.$emit()) {
        return x([document, ...Yt(t.$el)], "scroll", e, { passive: true });
      }
      function Ul(t) {
        return x(document, "keydown", (e) => {
          e.keyCode === A.ESC && t.hide(false);
        });
      }
      function Vl(t) {
        return Bo(t, () => t.hide(false));
      }
      function Yl(t) {
        return x(document, ct, ({ target: e }) => {
          t.$el.contains(e) || F(document, `${Tt} ${si} scroll`, ({ defaultPrevented: i, type: s, target: n }) => {
            var o;
            !i && s === Tt && e === n && !((o = t.targetEl) != null && o.contains(e)) && t.hide(false);
          }, true);
        });
      }
      var No = { mixins: [it, Le], props: { align: String, clsDrop: String, boundary: Boolean, dropbar: Boolean, dropbarAnchor: Boolean, duration: Number, mode: Boolean, offset: Boolean, stretch: Boolean, delayShow: Boolean, delayHide: Boolean, target: Boolean, targetX: Boolean, targetY: Boolean, animation: Boolean, animateOut: Boolean, closeOnScroll: Boolean }, data: { align: U ? "right" : "left", clsDrop: "uk-dropdown", clsDropbar: "uk-dropnav-dropbar", boundary: true, dropbar: false, dropbarAnchor: false, duration: 200, container: false, selNavItem: "> li > a, > ul > li > a" }, computed: { dropbarAnchor: ({ dropbarAnchor: t }, e) => Q(t, e) || e, dropbar({ dropbar: t }) {
        return t ? (t = this._dropbar || Q(t, this.$el) || y(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = y("<div></div>"))) : null;
      }, dropContainer(t, e) {
        return this.container || e;
      }, dropdowns({ clsDrop: t }, e) {
        var i;
        const s = z(`.${t}`, e);
        if (this.dropContainer !== e)
          for (const n of z(`.${t}`, this.dropContainer)) {
            const o = (i = this.getDropdown(n)) == null ? void 0 : i.targetEl;
            !m(s, n) && o && this.$el.contains(o) && s.push(n);
          }
        return s;
      }, items({ selNavItem: t }, e) {
        return z(t, e);
      } }, watch: { dropbar(t) {
        k(t, "uk-dropbar", "uk-dropbar-top", this.clsDropbar, `uk-${this.$options.name}-dropbar`);
      }, dropdowns() {
        this.initializeDropdowns();
      } }, connected() {
        this.initializeDropdowns();
      }, disconnected() {
        ot(this._dropbar), delete this._dropbar;
      }, events: [{ name: "mouseover focusin", delegate: ({ selNavItem: t }) => t, handler({ current: t }) {
        const e = this.getActive();
        e && m(e.mode, "hover") && e.targetEl && !t.contains(e.targetEl) && !e.isDelaying && e.hide(false);
      } }, { name: "keydown", self: true, delegate: ({ selNavItem: t }) => t, handler(t) {
        var e;
        const { current: i, keyCode: s } = t, n = this.getActive();
        s === A.DOWN && (n == null ? void 0 : n.targetEl) === i && (t.preventDefault(), (e = y(Ce, n.$el)) == null || e.focus()), zo(t, this.items, n);
      } }, { name: "keydown", el: ({ dropContainer: t }) => t, delegate: ({ clsDrop: t }) => `.${t}`, handler(t) {
        var e;
        const { current: i, keyCode: s } = t;
        if (!m(this.dropdowns, i))
          return;
        const n = this.getActive();
        let o = -1;
        if (s === A.HOME ? o = 0 : s === A.END ? o = "last" : s === A.UP ? o = "previous" : s === A.DOWN ? o = "next" : s === A.ESC && ((e = n.targetEl) == null || e.focus()), ~o) {
          t.preventDefault();
          const r = z(Ce, i);
          r[nt(o, r, wt(r, (a) => P(a, ":focus")))].focus();
        }
        zo(t, this.items, n);
      } }, { name: "mouseleave", el: ({ dropbar: t }) => t, filter: ({ dropbar: t }) => t, handler() {
        const t = this.getActive();
        t && m(t.mode, "hover") && !this.dropdowns.some((e) => P(e, ":hover")) && t.hide();
      } }, { name: "beforeshow", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler({ target: t }) {
        this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && li(this.dropbarAnchor, this.dropbar), k(t, `${this.clsDrop}-dropbar`));
      } }, { name: "show", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler({ target: t }) {
        if (!this.isDropbarDrop(t))
          return;
        const e = this.getDropdown(t), i = () => {
          const s = Math.max(..._e(t, `.${this.clsDrop}`).concat(t).map((n) => I(n).bottom));
          I(this.dropbar, { left: I(this.dropbar).left, top: this.getDropbarOffset(e.getPositionOffset()) }), this.transitionTo(s - I(this.dropbar).top + S(c(t, "marginBottom")), t);
        };
        this._observer = Be([e.$el, ...e.target], i), i();
      } }, { name: "beforehide", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler(t) {
        const e = this.getActive();
        P(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && m(e.mode, "hover") && e.isDelayedHide && !this.items.some((i) => e.targetEl !== i && P(i, ":focus")) && t.preventDefault();
      } }, { name: "hide", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler({ target: t }) {
        var e;
        if (!this.isDropbarDrop(t))
          return;
        (e = this._observer) == null || e.disconnect();
        const i = this.getActive();
        (!i || i.$el === t) && this.transitionTo(0);
      } }], methods: { getActive() {
        var t;
        return m(this.dropdowns, (t = J) == null ? void 0 : t.$el) && J;
      }, transitionTo(t, e) {
        return __async(this, null, function* () {
          const { dropbar: i } = this, s = et(i);
          if (e = s < t && e, yield B.cancel([e, i]), e) {
            const n = I(e).top - I(i).top - s;
            n > 0 && c(e, "transitionDelay", `${n / t * this.duration}ms`);
          }
          c(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`), et(i, s), yield Promise.all([B.start(i, { height: t }, this.duration), B.start(e, { clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)` }, this.duration).finally(() => c(e, { clipPath: "", transitionDelay: "" }))]).catch(O);
        });
      }, getDropdown(t) {
        return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
      }, isDropbarDrop(t) {
        return m(this.dropdowns, t) && $(t, this.clsDrop);
      }, getDropbarOffset(t) {
        const { $el: e, target: i, targetY: s } = this, { top: n, height: o } = I(Q(s || i || e, e));
        return n + o + t;
      }, initializeDropdowns() {
        this.$create("drop", this.dropdowns.filter((t) => !this.getDropdown(t)), __spreadProps(__spreadValues({}, this.$props), { flip: false, shift: true, pos: `bottom-${this.align}`, boundary: this.boundary === true ? this.$el : this.boundary }));
      } } };
      function zo(t, e, i) {
        var s, n, o;
        const { current: r, keyCode: a } = t;
        let l = -1;
        a === A.HOME ? l = 0 : a === A.END ? l = "last" : a === A.LEFT ? l = "previous" : a === A.RIGHT ? l = "next" : a === A.TAB && ((s = i.targetEl) == null || s.focus(), (n = i.hide) == null || n.call(i, false)), ~l && (t.preventDefault(), (o = i.hide) == null || o.call(i, false), e[nt(l, e, e.indexOf(i.targetEl || r))].focus());
      }
      var Gl = { mixins: [it], args: "target", props: { target: Boolean }, data: { target: false }, computed: { input: (t, e) => y(Te, e), state() {
        return this.input.nextElementSibling;
      }, target({ target: t }, e) {
        return t && (t === true && C(this.input) === e && this.input.nextElementSibling || y(t, e));
      } }, update() {
        var t;
        const { target: e, input: i } = this;
        if (!e)
          return;
        let s;
        const n = Yi(e) ? "value" : "textContent", o = e[n], r = (t = i.files) != null && t[0] ? i.files[0].name : P(i, "select") && (s = z("option", i).filter((a) => a.selected)[0]) ? s.textContent : i.value;
        o !== r && (e[n] = r);
      }, events: [{ name: "change", handler() {
        this.$emit();
      } }, { name: "reset", el: ({ $el: t }) => t.closest("form"), handler() {
        this.$emit();
      } }] }, Xl = { extends: En, mixins: [it], name: "grid", props: { masonry: Boolean, parallax: String, parallaxStart: String, parallaxEnd: String, parallaxJustify: Boolean }, data: { margin: "uk-grid-margin", clsStack: "uk-grid-stack", masonry: false, parallax: 0, parallaxStart: 0, parallaxEnd: 0, parallaxJustify: false }, connected() {
        this.masonry && k(this.$el, "uk-flex-top", "uk-flex-wrap-top");
      }, observe: Fe({ filter: ({ parallax: t, parallaxJustify: e }) => t || e }), update: [{ write({ rows: t }) {
        R(this.$el, this.clsStack, !t.some((e) => e.length > 1));
      }, events: ["resize"] }, { read(t) {
        const { rows: e } = t;
        let { masonry: i, parallax: s, parallaxJustify: n, margin: o } = this;
        if (s = Math.max(0, Y(s)), !(i || s || n) || Fo(e) || e[0].some((w, T) => e.some((_) => _[T] && _[T].offsetWidth !== w.offsetWidth)))
          return t.translates = t.scrollColumns = false;
        let r = Kl(e, o), a, l;
        i ? [a, l] = Jl(e, r, i === "next") : a = Zl(e);
        const h = a.map((w) => zt(w, "offsetHeight") + r * (w.length - 1)), u = Math.max(0, ...h);
        let f, p, g;
        return (s || n) && (f = h.map((w, T) => n ? u - w + s : s / (T % 2 || 8)), n || (s = Math.max(...h.map((w, T) => w + f[T] - u))), p = Y(this.parallaxStart, "height", this.$el, true), g = Y(this.parallaxEnd, "height", this.$el, true)), { columns: a, translates: l, scrollColumns: f, parallaxStart: p, parallaxEnd: g, padding: s, height: l ? u : "" };
      }, write({ height: t, padding: e }) {
        c(this.$el, "paddingBottom", e || ""), t !== false && c(this.$el, "height", t);
      }, events: ["resize"] }, { read({ rows: t, scrollColumns: e, parallaxStart: i, parallaxEnd: s }) {
        return { scrolled: e && !Fo(t) ? bi(this.$el, i, s) : false };
      }, write({ columns: t, scrolled: e, scrollColumns: i, translates: s }) {
        !e && !s || t.forEach((n, o) => n.forEach((r, a) => {
          let [l, h] = s && s[o][a] || [0, 0];
          e && (h += e * i[o]), c(r, "transform", `translate(${l}px, ${h}px)`);
        }));
      }, events: ["scroll", "resize"] }] };
      function Fo(t) {
        return t.flat().some((e) => c(e, "position") === "absolute");
      }
      function Jl(t, e, i) {
        const s = [], n = [], o = Array(t[0].length).fill(0);
        let r = 0;
        for (let a of t) {
          U && (a = a.reverse());
          let l = 0;
          for (const h in a) {
            const { offsetWidth: u, offsetHeight: f } = a[h], p = i ? h : o.indexOf(Math.min(...o));
            Ms(s, p, a[h]), Ms(n, p, [(p - h) * u * (U ? -1 : 1), o[p] - r]), o[p] += f + e, l = Math.max(l, f);
          }
          r += l + e;
        }
        return [s, n];
      }
      function Kl(t, e) {
        const i = t.flat().find((s) => $(s, e));
        return S(i ? c(i, "marginTop") : c(t[0][0], "paddingLeft"));
      }
      function Zl(t) {
        const e = [];
        for (const i of t)
          for (const s in i)
            Ms(e, s, i[s]);
        return e;
      }
      function Ms(t, e, i) {
        t[e] || (t[e] = []), t[e].push(i);
      }
      var Ql = { args: "target", props: { target: String, row: Boolean }, data: { target: "> *", row: true }, computed: { elements: ({ target: t }, e) => z(t, e) }, observe: ut({ target: ({ $el: t, elements: e }) => e.reduce((i, s) => i.concat(s, ...s.children), [t]) }), events: { name: "loadingdone", el: () => document.fonts, handler() {
        this.$emit("resize");
      } }, update: { read() {
        return { rows: (this.row ? xs(this.elements) : [this.elements]).map(th) };
      }, write({ rows: t }) {
        for (const { heights: e, elements: i } of t)
          i.forEach((s, n) => c(s, "minHeight", e[n]));
      }, events: ["resize"] } };
      function th(t) {
        if (t.length < 2)
          return { heights: [""], elements: t };
        let e = t.map(eh);
        const i = Math.max(...e);
        return { heights: t.map((s, n) => e[n].toFixed(2) === i.toFixed(2) ? "" : i), elements: t };
      }
      function eh(t) {
        const e = Wi(t.style, ["display", "minHeight"]);
        q(t) || c(t, "display", "block", "important"), c(t, "minHeight", "");
        const i = b(t).height - ce(t, "height", "content-box");
        return c(t, e), i;
      }
      var ih = { args: "target", props: { target: String }, data: { target: "" }, computed: { target: { get: ({ target: t }, e) => Q(t, e), observe: ({ target: t }) => t } }, observe: ut({ target: ({ target: t }) => t }), update: { read() {
        return this.target ? { height: this.target.offsetHeight } : false;
      }, write({ height: t }) {
        c(this.$el, { minHeight: t });
      }, events: ["resize"] } }, sh = { props: { expand: Boolean, offsetTop: Boolean, offsetBottom: Boolean, minHeight: Number }, data: { expand: false, offsetTop: false, offsetBottom: false, minHeight: 0 }, observe: [ws({ filter: ({ expand: t }) => t }), ut({ target: ({ $el: t }) => Vt(t) })], update: { read() {
        if (!q(this.$el))
          return false;
        let t = "";
        const e = ce(this.$el, "height", "content-box"), { body: i, scrollingElement: s } = document, n = At(this.$el), { height: o } = rt(n === i ? s : n), r = s === n || i === n;
        if (t = `calc(${r ? "100vh" : `${o}px`}`, this.expand) {
          const a = b(n).height - b(this.$el).height;
          t += ` - ${a}px`;
        } else {
          if (this.offsetTop)
            if (r) {
              const a = this.offsetTop === true ? this.$el : Q(this.offsetTop, this.$el), l = Ut(a)[0] - Ut(n)[0];
              t += l > 0 && l < o / 2 ? ` - ${l}px` : "";
            } else
              t += ` - ${ce(n, "height", c(n, "boxSizing"))}px`;
          this.offsetBottom === true ? t += ` - ${b(this.$el.nextElementSibling).height}px` : vt(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && ee(this.offsetBottom, "px") ? t += ` - ${S(this.offsetBottom)}px` : N(this.offsetBottom) && (t += ` - ${b(Q(this.offsetBottom, this.$el)).height}px`);
        }
        return t += `${e ? ` - ${e}px` : ""})`, { minHeight: t };
      }, write({ minHeight: t }) {
        c(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
      }, events: ["resize"] } }, nh = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', oh = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', rh = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', ah = '<svg width="20" height="20" viewBox="0 0 20 20"><rect width="1" height="11" x="9" y="4"/><rect width="11" height="1" x="4" y="9"/></svg>', lh = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', hh = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', ch = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', uh = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1"/><rect width="20" height="2" y="9" class="line-2"/><rect width="20" height="2" y="9" class="line-3"/><rect width="20" height="2" y="15" class="line-4"/></svg>', fh = '<svg width="40" height="40" viewBox="0 0 40 40"><rect width="1" height="40" x="19" y="0"/><rect width="40" height="1" x="0" y="19"/></svg>', dh = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', ph = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Ho = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', gh = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', mh = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', vh = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>', bh = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>', wh = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>', xh = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>', $h = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', yh = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>', Lo = { args: "src", props: { width: Number, height: Number, ratio: Number }, data: { ratio: 1 }, connected() {
        this.svg = this.getSvg().then((t) => {
          if (!this._connected)
            return;
          const e = kh(t, this.$el);
          return this.svgEl && e !== this.svgEl && ot(this.svgEl), Sh.call(this, e, t), this.svgEl = e;
        }, O);
      }, disconnected() {
        this.svg.then((t) => {
          this._connected || (Vi(this.$el) && (this.$el.hidden = false), ot(t), this.svgEl = null);
        }), this.svg = null;
      }, methods: { getSvg() {
        return __async(this, null, function* () {
        });
      } } };
      function kh(t, e) {
        if (Vi(e) || H(e, "canvas")) {
          e.hidden = true;
          const s = e.nextElementSibling;
          return Wo(t, s) ? s : li(e, t);
        }
        const i = e.lastElementChild;
        return Wo(t, i) ? i : L(e, t);
      }
      function Wo(t, e) {
        return H(t, "svg") && H(e, "svg") && t.innerHTML === e.innerHTML;
      }
      function Sh(t, e) {
        const i = ["width", "height"];
        let s = i.map((o) => this[o]);
        s.some((o) => o) || (s = i.map((o) => d(e, o)));
        const n = d(e, "viewBox");
        n && !s.some((o) => o) && (s = n.split(" ").slice(2)), s.forEach((o, r) => d(t, i[r], S(o) * this.ratio || null));
      }
      const Mi = { spinner: $h, totop: yh, marker: ah, "close-icon": nh, "close-large": oh, "drop-parent-icon": rh, "nav-parent-icon": hh, "nav-parent-icon-large": lh, "navbar-parent-icon": ch, "navbar-toggle-icon": uh, "overlay-icon": fh, "pagination-next": dh, "pagination-previous": ph, "search-icon": Ho, "search-large": gh, "search-navbar": mh, "search-toggle-icon": Ho, "slidenav-next": bh, "slidenav-next-large": vh, "slidenav-previous": xh, "slidenav-previous-large": wh }, Bs = { install: Mh, mixins: [Lo], args: "icon", props: { icon: String }, isIcon: true, beforeConnect() {
        k(this.$el, "uk-icon");
      }, methods: { getSvg() {
        return __async(this, null, function* () {
          const t = Nh(this.icon);
          if (!t)
            throw "Icon not found.";
          return t;
        });
      } } }, Zt = { args: false, extends: Bs, data: (t) => ({ icon: Ot(t.constructor.options.name) }), beforeConnect() {
        k(this.$el, this.$options.id);
      } }, Ih = { extends: Zt, beforeConnect() {
        const t = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
      } }, Eh = { extends: Zt, mixins: [Si], i18n: { toggle: "Open Search", submit: "Submit Search" }, beforeConnect() {
        const t = $(this.$el, "uk-search-toggle") || $(this.$el, "uk-navbar-toggle");
        if (this.icon = t ? "search-toggle-icon" : $(this.$el, "uk-search-icon") && this.$el.closest(".uk-search-large") ? "search-large" : this.$el.closest(".uk-search-navbar") ? "search-navbar" : this.$props.icon, !Et(this.$el, "aria-label"))
          if (t) {
            const e = this.t("toggle");
            d(this.$el, "aria-label", e);
          } else {
            const e = this.$el.closest("a,button");
            if (e) {
              const i = this.t("submit");
              d(e, "aria-label", i);
            }
          }
      } }, Th = { extends: Zt, beforeConnect() {
        d(this.$el, "role", "status");
      }, methods: { getSvg() {
        return __async(this, null, function* () {
          const t = yield Bs.methods.getSvg.call(this);
          return this.ratio !== 1 && c(y("circle", t), "strokeWidth", 1 / this.ratio), t;
        });
      } } }, Qt = { extends: Zt, mixins: [Si], beforeConnect() {
        const t = this.$el.closest("a,button");
        d(t, "role", this.role !== null && H(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !Et(t, "aria-label") && d(t, "aria-label", e);
      } }, jo = { extends: Qt, beforeConnect() {
        k(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = $(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      } }, Ch = { extends: Qt, i18n: { label: "Open menu" } }, Ph = { extends: Qt, i18n: { label: "Close" }, beforeConnect() {
        this.icon = `close-${$(this.$el, "uk-close-large") ? "large" : "icon"}`;
      } }, _h = { extends: Qt, i18n: { label: "Open" } }, Ah = { extends: Qt, i18n: { label: "Back to top" } }, Oh = { extends: Qt, i18n: { label: "Next page" }, data: { role: null } }, Dh = { extends: Qt, i18n: { label: "Previous page" }, data: { role: null } }, Bi = {};
      function Mh(t) {
        t.icon.add = (e, i) => {
          const s = N(e) ? { [e]: i } : e;
          Nt(s, (n, o) => {
            Mi[o] = n, delete Bi[o];
          }), t._initialized && kt(document.body, (n) => Nt(t.getComponents(n), (o) => {
            o.$options.isIcon && o.icon in s && o.$reset();
          }));
        };
      }
      const Bh = { twitter: "x" };
      function Nh(t) {
        return t = Bh[t] || t, Mi[t] ? (Bi[t] || (Bi[t] = y((Mi[zh(t)] || Mi[t]).trim())), Bi[t].cloneNode(true)) : null;
      }
      function zh(t) {
        return U ? Li(Li(t, "left", "right"), "previous", "next") : t;
      }
      var Fh = { args: "dataSrc", props: { dataSrc: String, sources: String, margin: String, target: String, loading: String }, data: { dataSrc: "", sources: false, margin: "50%", target: false, loading: "lazy" }, connected() {
        this.loading !== "lazy" ? this.load() : zs(this.$el) && (this.$el.loading = "lazy", Ns(this.$el));
      }, disconnected() {
        this.img && (this.img.onload = ""), delete this.img;
      }, observe: de({ handler(t, e) {
        this.load(), e.disconnect();
      }, options: ({ margin: t }) => ({ rootMargin: t }), filter: ({ loading: t }) => t === "lazy", target: ({ $el: t, $props: e }) => e.target ? [t, ...Ae(e.target, t)] : t }), methods: { load() {
        if (this.img)
          return this.img;
        const t = zs(this.$el) ? this.$el : Lh(this.$el, this.dataSrc, this.sources);
        return Ee(t, "loading"), Ns(this.$el, t.currentSrc), this.img = t;
      } } };
      function Ns(t, e) {
        if (zs(t)) {
          const i = C(t);
          (H(i, "picture") ? M(i) : [t]).forEach((n) => Ro(n, n));
        } else
          e && !m(t.style.backgroundImage, e) && (c(t, "backgroundImage", `url(${Ki(e)})`), v(t, Wt("load", false)));
      }
      const Hh = ["data-src", "data-srcset", "sizes"];
      function Ro(t, e) {
        for (const i of Hh) {
          const s = X(t, i);
          s && d(e, i.replace(/^(data-)+/, ""), s);
        }
      }
      function Lh(t, e, i) {
        const s = new Image();
        return Wh(s, i), Ro(t, s), s.onload = () => {
          Ns(t, s.currentSrc);
        }, d(s, "src", e), s;
      }
      function Wh(t, e) {
        if (e = jh(e), e.length) {
          const i = Rt("<picture>");
          for (const s of e) {
            const n = Rt("<source>");
            d(n, s), L(i, n);
          }
          L(i, t);
        }
      }
      function jh(t) {
        if (!t)
          return [];
        if (ft(t, "["))
          try {
            t = JSON.parse(t);
          } catch {
            t = [];
          }
        else
          t = fe(t);
        return K(t) || (t = [t]), t.filter((e) => !Ze(e));
      }
      function zs(t) {
        return H(t, "img");
      }
      var Rh = { props: { target: String, selActive: String }, data: { target: false, selActive: false }, computed: { target: ({ target: t }, e) => t ? z(t, e) : e }, observe: [de({ handler(t) {
        this.isIntersecting = t.some(({ isIntersecting: e }) => e), this.$emit();
      }, target: ({ target: t }) => t, args: { intersecting: false } }), xi({ target: ({ target: t }) => t, options: { attributes: true, attributeFilter: ["class"], attributeOldValue: true } }), { target: ({ target: t }) => t, observe: (t, e) => {
        const i = Be([...E(t), document.documentElement], e), s = [x(document, "scroll itemshown itemhidden", e, { passive: true, capture: true }), x(document, "show hide transitionstart", (n) => (e(), i.observe(n.target))), x(document, "shown hidden transitionend transitioncancel", (n) => (e(), i.unobserve(n.target)))];
        return { observe: i.observe.bind(i), unobserve: i.unobserve.bind(i), disconnect() {
          i.disconnect(), s.map((n) => n());
        } };
      }, handler() {
        this.$emit();
      } }], update: { read() {
        if (!this.isIntersecting)
          return false;
        for (const t of E(this.target))
          ei(t, "uk-light uk-dark", !this.selActive || P(t, this.selActive) ? qh(t) : "");
      } } };
      function qh(t) {
        const { left: e, top: i, height: s, width: n } = b(t), o = b(window);
        let r;
        for (const a of [0.25, 0.5, 0.75]) {
          const l = t.ownerDocument.elementsFromPoint(Math.max(0, Math.min(e + n * a, o.width - 1)), Math.max(0, Math.min(i + s / 2, o.height - 1)));
          for (const h of l) {
            if (t.contains(h) || !Uh(h) || h.closest('[class*="-leave"]') && l.some((f) => h !== f && P(f, '[class*="-enter"]')))
              continue;
            const u = c(h, "--uk-inverse");
            if (u) {
              if (u === r)
                return `uk-${u}`;
              r = u;
              break;
            }
          }
        }
        return r ? `uk-${r}` : "";
      }
      function Uh(t) {
        if (c(t, "visibility") !== "visible")
          return false;
        for (; t; ) {
          if (c(t, "opacity") === "0")
            return false;
          t = C(t);
        }
        return true;
      }
      var Vh = { mixins: [it, Ei], props: { fill: String }, data: { fill: "", clsWrapper: "uk-leader-fill", clsHide: "uk-leader-hide", attrFill: "data-fill" }, computed: { fill: ({ fill: t }, e) => t || c(e, "--uk-leader-fill-content") }, connected() {
        [this.wrapper] = ns(this.$el, `<span class="${this.clsWrapper}">`);
      }, disconnected() {
        De(this.wrapper.childNodes);
      }, observe: ut(), update: { read() {
        return { width: Math.trunc(this.$el.offsetWidth / 2), fill: this.fill, hide: !this.matchMedia };
      }, write({ width: t, fill: e, hide: i }) {
        R(this.wrapper, this.clsHide, i), d(this.wrapper, this.attrFill, new Array(t).join(e));
      }, events: ["resize"] } }, Yh = { install: Gh, mixins: [Es], data: { clsPage: "uk-modal-page", selPanel: ".uk-modal-dialog", selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full" }, events: [{ name: "fullscreenchange webkitendfullscreen", capture: true, handler(t) {
        H(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide();
      } }, { name: "show", self: true, handler() {
        $(this.panel, "uk-margin-auto-vertical") ? k(this.$el, "uk-flex") : c(this.$el, "display", "block"), et(this.$el);
      } }, { name: "hidden", self: true, handler() {
        c(this.$el, "display", ""), D(this.$el, "uk-flex");
      } }] };
      function Gh({ modal: t }) {
        t.dialog = function(i, s) {
          const n = t(y(`<div><div class="uk-modal-dialog">${i}</div></div>`), __spreadValues({ stack: true, role: "alertdialog" }, s));
          return n.show(), x(n.$el, "hidden", () => __async(this, null, function* () {
            yield Promise.resolve(), n.$destroy(true);
          }), { self: true }), n;
        }, t.alert = function(i, s) {
          return e(({ i18n: n }) => `<div class="uk-modal-body">${N(i) ? i : jt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${n.ok}</button> </div>`, s);
        }, t.confirm = function(i, s) {
          return e(({ i18n: n }) => `<form> <div class="uk-modal-body">${N(i) ? i : jt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${n.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${n.ok}</button> </div> </form>`, s, () => Promise.reject());
        }, t.prompt = function(i, s, n) {
          const o = e(({ i18n: l }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${N(i) ? i : jt(i)}</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${l.cancel}</button> <button class="uk-button uk-button-primary">${l.ok}</button> </div> </form>`, n, () => null, () => a.value), { $el: r } = o.dialog, a = y("input", r);
          return a.value = s || "", x(r, "show", () => a.select()), o;
        }, t.i18n = { ok: "Ok", cancel: "Cancel" };
        function e(i, s, n = O, o = O) {
          s = __spreadProps(__spreadValues({ bgClose: false, escClose: true }, s), { i18n: __spreadValues(__spreadValues({}, t.i18n), s == null ? void 0 : s.i18n) });
          const r = t.dialog(i(s), s);
          return dt(new Promise((a) => {
            const l = x(r.$el, "hide", () => a(n()));
            x(r.$el, "submit", "form", (h) => {
              h.preventDefault(), a(o(r)), l(), r.hide();
            });
          }), { dialog: r });
        }
      }
      var Xh = { extends: Ao, data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" } };
      const Fs = "uk-navbar-transparent";
      var Jh = { extends: No, props: { dropbarTransparentMode: Boolean }, data: { clsDrop: "uk-navbar-dropdown", selNavItem: ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle", dropbarTransparentMode: false }, computed: { navbarContainer: (t, e) => e.closest(".uk-navbar-container") }, watch: { items() {
        const t = $(this.$el, "uk-navbar-justify"), e = z(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
        for (const i of e) {
          const s = t ? z(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", i).length : "";
          c(i, "flexGrow", s);
        }
      } }, events: [{ name: "show", el: ({ dropContainer: t }) => t, handler({ target: t }) {
        this.getTransparentMode(t) === "remove" && $(this.navbarContainer, Fs) && (D(this.navbarContainer, Fs), this._transparent = true);
      } }, { name: "hide", el: ({ dropContainer: t }) => t, handler() {
        return __async(this, null, function* () {
          yield Kh(), !this.getActive() && this._transparent && (k(this.navbarContainer, Fs), this._transparent = null);
        });
      } }], methods: { getTransparentMode(t) {
        if (!this.navbarContainer)
          return;
        if (this.dropbar && this.isDropbarDrop(t))
          return this.dropbarTransparentMode;
        const e = this.getDropdown(t);
        if (e && $(t, "uk-dropbar"))
          return e.inset ? "behind" : "remove";
      }, getDropbarOffset(t) {
        const { top: e, height: i } = I(this.navbarContainer);
        return e + (this.dropbarTransparentMode === "behind" ? 0 : i + t);
      } } };
      function Kh() {
        return new Promise((t) => setTimeout(t));
      }
      var Zh = { mixins: [Es], args: "mode", props: { mode: String, flip: Boolean, overlay: Boolean, swiping: Boolean }, data: { mode: "slide", flip: false, overlay: false, clsPage: "uk-offcanvas-page", clsContainer: "uk-offcanvas-container", selPanel: ".uk-offcanvas-bar", clsFlip: "uk-offcanvas-flip", clsContainerAnimation: "uk-offcanvas-container-animation", clsSidebarAnimation: "uk-offcanvas-bar-animation", clsMode: "uk-offcanvas", clsOverlay: "uk-offcanvas-overlay", selClose: ".uk-offcanvas-close", container: false, swiping: true }, computed: { clsFlip: ({ flip: t, clsFlip: e }) => t ? e : "", clsOverlay: ({ overlay: t, clsOverlay: e }) => t ? e : "", clsMode: ({ mode: t, clsMode: e }) => `${e}-${t}`, clsSidebarAnimation: ({ mode: t, clsSidebarAnimation: e }) => t === "none" || t === "reveal" ? "" : e, clsContainerAnimation: ({ mode: t, clsContainerAnimation: e }) => t !== "push" && t !== "reveal" ? "" : e, transitionElement({ mode: t }) {
        return t === "reveal" ? C(this.panel) : this.panel;
      } }, observe: In({ filter: ({ swiping: t }) => t }), update: { read() {
        this.isToggled() && !q(this.$el) && this.hide();
      }, events: ["resize"] }, events: [{ name: "touchmove", self: true, passive: false, filter: ({ overlay: t }) => t, handler(t) {
        t.cancelable && t.preventDefault();
      } }, { name: "show", self: true, handler() {
        this.mode === "reveal" && !$(C(this.panel), this.clsMode) && (ci(this.panel, "<div>"), k(C(this.panel), this.clsMode));
        const { body: t, scrollingElement: e } = document;
        k(t, this.clsContainer, this.clsFlip), c(t, "touch-action", "pan-y pinch-zoom"), c(this.$el, "display", "block"), c(this.panel, "maxWidth", e.clientWidth), k(this.$el, this.clsOverlay), k(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), et(t), k(t, this.clsContainerAnimation), this.clsContainerAnimation && Qh();
      } }, { name: "hide", self: true, handler() {
        D(document.body, this.clsContainerAnimation), c(document.body, "touch-action", "");
      } }, { name: "hidden", self: true, handler() {
        this.clsContainerAnimation && tc(), this.mode === "reveal" && De(this.panel), D(this.panel, this.clsSidebarAnimation, this.clsMode), D(this.$el, this.clsOverlay), c(this.$el, "display", ""), c(this.panel, "maxWidth", ""), D(document.body, this.clsContainer, this.clsFlip);
      } }, { name: "swipeLeft swipeRight", handler(t) {
        this.isToggled() && ee(t.type, "Left") ^ this.flip && this.hide();
      } }] };
      function Qh() {
        qo().content += ",user-scalable=0";
      }
      function tc() {
        const t = qo();
        t.content = t.content.replace(/,user-scalable=0$/, "");
      }
      function qo() {
        return y('meta[name="viewport"]', document.head) || L(document.head, '<meta name="viewport">');
      }
      var ec = { mixins: [it], props: { selContainer: String, selContent: String, minHeight: Number }, data: { selContainer: ".uk-modal", selContent: ".uk-modal-dialog", minHeight: 150 }, computed: { container: ({ selContainer: t }, e) => e.closest(t), content: ({ selContent: t }, e) => e.closest(t) }, observe: ut({ target: ({ container: t, content: e }) => [t, e] }), update: { read() {
        return !this.content || !this.container || !q(this.$el) ? false : { max: Math.max(this.minHeight, et(this.container) - (b(this.content).height - et(this.$el))) };
      }, write({ max: t }) {
        c(this.$el, { minHeight: this.minHeight, maxHeight: t });
      }, events: ["resize"] } }, ic = { props: ["width", "height"], connected() {
        k(this.$el, "uk-responsive-width"), c(this.$el, "aspectRatio", `${this.width}/${this.height}`);
      } }, sc = { props: { offset: Number }, data: { offset: 0 }, connected() {
        nc(this);
      }, disconnected() {
        oc(this);
      }, methods: { scrollTo(t) {
        return __async(this, null, function* () {
          t = t && y(t) || document.body, v(this.$el, "beforescroll", [this, t]) && (yield pn(t, { offset: this.offset }), v(this.$el, "scrolled", [this, t]));
        });
      } } };
      const Xe = /* @__PURE__ */ new Set();
      function nc(t) {
        Xe.size || x(document, "click", Uo), Xe.add(t);
      }
      function oc(t) {
        Xe.delete(t), Xe.size || Ct(document, "click", Uo);
      }
      function Uo(t) {
        if (!t.defaultPrevented)
          for (const e of Xe)
            e.$el.contains(t.target) && le(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(Gi(e.$el)));
      }
      var rc = { args: "cls", props: { cls: String, target: String, hidden: Boolean, margin: String, repeat: Boolean, delay: Number }, data: () => ({ cls: "", target: false, hidden: true, margin: "-1px", repeat: false, delay: 0, inViewClass: "uk-scrollspy-inview" }), computed: { elements: ({ target: t }, e) => t ? z(t, e) : [e] }, watch: { elements(t) {
        this.hidden && c(Pe(t, `:not(.${this.inViewClass})`), "opacity", 0);
      } }, connected() {
        this.elementData = /* @__PURE__ */ new Map();
      }, disconnected() {
        for (const [t, e] of this.elementData.entries())
          D(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
        delete this.elementData;
      }, observe: de({ target: ({ elements: t }) => t, handler(t) {
        const e = this.elementData;
        for (const { target: i, isIntersecting: s } of t) {
          e.has(i) || e.set(i, { cls: X(i, "uk-scrollspy-class") || this.cls });
          const n = e.get(i);
          !this.repeat && n.show || (n.show = s);
        }
        this.$emit();
      }, options: ({ margin: t }) => ({ rootMargin: t }), args: { intersecting: false } }), update: [{ write(t) {
        for (const [e, i] of this.elementData.entries())
          i.show && !i.inview && !i.queued ? (i.queued = true, t.promise = (t.promise || Promise.resolve()).then(() => new Promise((s) => setTimeout(s, this.delay))).then(() => {
            this.toggle(e, true), setTimeout(() => {
              i.queued = false, this.$emit();
            }, 300);
          })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, false);
      } }], methods: { toggle(t, e) {
        var i, s;
        const n = (i = this.elementData) == null ? void 0 : i.get(t);
        if (n) {
          if ((s = n.off) == null || s.call(n), c(t, "opacity", !e && this.hidden ? 0 : ""), R(t, this.inViewClass, e), R(t, n.cls), /\buk-animation-/.test(n.cls)) {
            const o = () => Ui(t, "uk-animation-[\\w-]+");
            e ? n.off = F(t, "animationcancel animationend", o, { self: true }) : o();
          }
          v(t, e ? "inview" : "outview"), n.inview = e;
        }
      } } }, ac = { props: { cls: String, closest: Boolean, scroll: Boolean, overflow: Boolean, offset: Number }, data: { cls: "uk-active", closest: false, scroll: false, overflow: true, offset: 0 }, computed: { links: (t, e) => z('a[href*="#"]', e).filter((i) => i.hash && le(i)), elements({ closest: t }) {
        return this.links.map((e) => e.closest(t || "*"));
      } }, watch: { links(t) {
        this.scroll && this.$create("scroll", t, { offset: this.offset });
      } }, observe: [de(), Fe()], update: [{ read() {
        const t = this.links.map(Gi).filter(Boolean), { length: e } = t;
        if (!e || !q(this.$el))
          return false;
        const i = At(t, true), { scrollTop: s, scrollHeight: n } = i, o = rt(i), r = n - o.height;
        let a = false;
        if (s === r)
          a = e - 1;
        else {
          const l = this.offset + I(ds()).height;
          for (let h = 0; h < t.length && !(I(t[h]).top - o.top - l > 0); h++)
            a = +h;
          a === false && this.overflow && (a = 0);
        }
        return { active: a };
      }, write({ active: t }) {
        const e = t !== false && !$(this.elements[t], this.cls);
        this.links.forEach((i) => i.blur());
        for (let i = 0; i < this.elements.length; i++)
          R(this.elements[i], this.cls, +i === t);
        e && v(this.$el, "active", [t, this.elements[t]]);
      }, events: ["scroll", "resize"] }] }, lc = { mixins: [it, Ei], props: { position: String, top: null, bottom: null, start: null, end: null, offset: String, overflowFlip: Boolean, animation: String, clsActive: String, clsInactive: String, clsFixed: String, clsBelow: String, selTarget: String, showOnUp: Boolean, targetOffset: Number }, data: { position: "top", top: false, bottom: false, start: false, end: false, offset: 0, overflowFlip: false, animation: "", clsActive: "uk-active", clsInactive: "", clsFixed: "uk-sticky-fixed", clsBelow: "uk-sticky-below", selTarget: "", showOnUp: false, targetOffset: false }, computed: { target: ({ selTarget: t }, e) => t && y(t, e) || e }, connected() {
        this.start = Vo(this.start || this.top), this.end = Vo(this.end || this.bottom), this.placeholder = y("+ .uk-sticky-placeholder", this.$el) || y('<div class="uk-sticky-placeholder"></div>'), this.isFixed = false, this.setActive(false);
      }, beforeDisconnect() {
        this.isFixed && (this.hide(), D(this.target, this.clsInactive)), Yo(this.$el), ot(this.placeholder), this.placeholder = null;
      }, observe: [ws(), Fe({ target: () => document.scrollingElement }), ut({ target: ({ $el: t }) => [t, C(t), document.scrollingElement], handler(t) {
        this.$emit(this._data.resized && t.some(({ target: e }) => e === C(this.$el)) ? "update" : "resize"), this._data.resized = true;
      } })], events: [{ name: "load hashchange popstate", el: () => window, filter: ({ targetOffset: t }) => t !== false, handler() {
        const { scrollingElement: t } = document;
        !location.hash || t.scrollTop === 0 || setTimeout(() => {
          const e = I(y(location.hash)), i = I(this.$el);
          this.isFixed && ji(e, i) && (t.scrollTop = Math.ceil(e.top - i.height - Y(this.targetOffset, "height", this.placeholder) - Y(this.offset, "height", this.placeholder)));
        });
      } }], update: [{ read({ height: t, width: e, margin: i, sticky: s }, n) {
        if (this.inactive = !this.matchMedia || !q(this.$el), this.inactive)
          return;
        const o = this.isFixed && n.has("update");
        o && (Ws(this.target), this.hide()), this.active || ({ height: t, width: e } = I(this.$el), i = c(this.$el, "margin")), o && this.show();
        const r = Y("100vh", "height"), a = et(window), l = Math.max(0, document.scrollingElement.scrollHeight - r);
        let h = this.position;
        this.overflowFlip && t > r && (h = h === "top" ? "bottom" : "top");
        const u = this.isFixed ? this.placeholder : this.$el;
        let f = Y(this.offset, "height", s ? this.$el : u);
        h === "bottom" && (t < a || this.overflowFlip) && (f += a - t);
        const p = this.overflowFlip ? 0 : Math.max(0, t + f - r), g = I(u).top, w = I(this.$el).height, T = (this.start === false ? g : Hs(this.start, this.$el, g)) - f, _ = this.end === false ? l : Math.min(l, Hs(this.end, this.$el, g + t, true) - w - f + p);
        return s = l && !this.showOnUp && T + f === g && _ === Math.min(l, Hs(true, this.$el, 0, true) - w - f + p) && c(C(this.$el), "overflowY") === "visible", { start: T, end: _, offset: f, overflow: p, height: t, elHeight: w, width: e, margin: i, top: Ut(u)[0], sticky: s, viewport: r, maxScrollHeight: l };
      }, write({ height: t, width: e, margin: i, offset: s, sticky: n }) {
        if ((this.inactive || n || !this.isFixed) && Yo(this.$el), this.inactive)
          return;
        n && (t = e = i = 0, c(this.$el, { position: "sticky", top: s }));
        const { placeholder: o } = this;
        c(o, { height: t, width: e, margin: i }), (C(o) !== C(this.$el) || n ^ $t(o) < $t(this.$el)) && ((n ? ai : li)(this.$el, o), o.hidden = true);
      }, events: ["resize"] }, { read({ scroll: t = 0, dir: e = "down", overflow: i, overflowScroll: s = 0, start: n, end: o, elHeight: r, height: a, sticky: l, maxScrollHeight: h }) {
        const u = Math.min(document.scrollingElement.scrollTop, h), f = t <= u ? "down" : "up", p = this.isFixed ? this.placeholder : this.$el;
        return { dir: f, prevDir: e, scroll: u, prevScroll: t, below: u > I(p).top + (l ? Math.min(a, r) : a), offsetParentTop: I(p.offsetParent).top, overflowScroll: Z(s + Z(u, n, o) - Z(t, n, o), 0, i) };
      }, write(t, e) {
        const i = e.has("scroll"), { initTimestamp: s = 0, dir: n, prevDir: o, scroll: r, prevScroll: a = 0, top: l, start: h, below: u } = t;
        if (r < 0 || r === a && i || this.showOnUp && !i && !this.isFixed)
          return;
        const f = Date.now();
        if ((f - s > 300 || n !== o) && (t.initScroll = r, t.initTimestamp = f), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10))
          if (this.inactive || r < h || this.showOnUp && (r <= h || n === "down" && i || n === "up" && !this.isFixed && !u)) {
            if (!this.isFixed) {
              Pt.inProgress(this.$el) && l > r && (Pt.cancel(this.$el), this.hide());
              return;
            }
            if (this.animation && u) {
              if ($(this.$el, "uk-animation-leave"))
                return;
              Pt.out(this.$el, this.animation).then(() => this.hide(), O);
            } else
              this.hide();
          } else
            this.isFixed ? this.update() : this.animation && u ? (this.show(), Pt.in(this.$el, this.animation).catch(O)) : (Ws(this.target), this.show());
      }, events: ["resize", "resizeViewport", "scroll"] }], methods: { show() {
        this.isFixed = true, this.update(), this.placeholder.hidden = false;
      }, hide() {
        const { offset: t, sticky: e } = this._data;
        this.setActive(false), D(this.$el, this.clsFixed, this.clsBelow), e ? c(this.$el, "top", t) : c(this.$el, { position: "", top: "", width: "", marginTop: "" }), this.placeholder.hidden = true, this.isFixed = false;
      }, update() {
        let { width: t, scroll: e = 0, overflow: i, overflowScroll: s = 0, start: n, end: o, offset: r, offsetParentTop: a, sticky: l, below: h } = this._data;
        const u = n !== 0 || e > n;
        if (!l) {
          let f = "fixed";
          e > o && (r += o - a + s - i, f = "absolute"), c(this.$el, { position: f, width: t, marginTop: 0 }, "important");
        }
        c(this.$el, "top", r - s), this.setActive(u), R(this.$el, this.clsBelow, h), k(this.$el, this.clsFixed);
      }, setActive(t) {
        const e = this.active;
        this.active = t, t ? (ei(this.target, this.clsInactive, this.clsActive), e !== t && v(this.$el, "active")) : (ei(this.target, this.clsActive, this.clsInactive), e !== t && (Ws(this.target), v(this.$el, "inactive")));
      } } };
      function Hs(t, e, i, s) {
        if (!t)
          return 0;
        if (vt(t) || N(t) && t.match(/^-?\d/))
          return i + Y(t, "height", e, true);
        {
          const n = t === true ? C(e) : Q(t, e);
          return I(n).bottom - (s && (n != null && n.contains(e)) ? S(c(n, "paddingBottom")) : 0);
        }
      }
      function Vo(t) {
        return t === "true" ? true : t === "false" ? false : t;
      }
      function Yo(t) {
        c(t, { position: "", top: "", marginTop: "", width: "" });
      }
      const Ls = "uk-transition-disable";
      function Ws(t) {
        $(t, Ls) || (k(t, Ls), requestAnimationFrame(() => D(t, Ls)));
      }
      var hc = { mixins: [Lo], args: "src", props: { src: String, icon: String, attributes: "list", strokeAnimation: Boolean }, data: { strokeAnimation: false }, observe: [xi({ handler() {
        return __async(this, null, function* () {
          const t = yield this.svg;
          t && Go.call(this, t);
        });
      }, options: { attributes: true, attributeFilter: ["id", "class", "style"] } })], connected() {
        return __async(this, null, function* () {
          m(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
          const t = yield this.svg;
          t && (Go.call(this, t), this.strokeAnimation && dc(t));
        });
      }, methods: { getSvg() {
        return __async(this, null, function* () {
          return H(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && (yield new Promise((t) => F(this.$el, "load", t))), uc(yield cc(this.src), this.icon) || Promise.reject("SVG not found.");
        });
      } } };
      function Go(t) {
        const { $el: e } = this;
        k(t, d(e, "class"), "uk-svg");
        for (let i = 0; i < e.style.length; i++) {
          const s = e.style[i];
          c(t, s, c(e, s));
        }
        for (const i in this.attributes) {
          const [s, n] = this.attributes[i].split(":", 2);
          d(t, s, n);
        }
        this.$el.id || Ee(t, "id");
      }
      const cc = ht((t) => __async(this, null, function* () {
        return t ? ft(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (yield fetch(t)).text() : Promise.reject();
      }));
      function uc(t, e) {
        return e && m(t, "<symbol") && (t = fc(t)[e] || t), t = y(t.substr(t.indexOf("<svg"))), (t == null ? void 0 : t.hasChildNodes()) && t;
      }
      const Xo = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, fc = ht(function(t) {
        const e = {};
        Xo.lastIndex = 0;
        let i;
        for (; i = Xo.exec(t); )
          e[i[3]] = `<svg ${i[1]}svg>`;
        return e;
      });
      function dc(t) {
        const e = no(t);
        e && c(t, "--uk-animation-stroke", e);
      }
      const js = ".uk-disabled *, .uk-disabled, [disabled]";
      var Jo = { mixins: [Gt], args: "connect", props: { connect: String, toggle: String, itemNav: String, active: Number, followFocus: Boolean, swiping: Boolean }, data: { connect: "~.uk-switcher", toggle: "> * > :first-child", itemNav: false, active: 0, cls: "uk-active", attrItem: "uk-switcher-item", selVertical: ".uk-nav", followFocus: false, swiping: true }, computed: { connects: { get: ({ connect: t }, e) => Ae(t, e), observe: ({ connect: t }) => t }, connectChildren() {
        return this.connects.map((t) => M(t)).flat();
      }, toggles: ({ toggle: t }, e) => z(t, e), children(t, e) {
        return M(e).filter((i) => this.toggles.some((s) => i.contains(s)));
      } }, watch: { connects(t) {
        this.swiping && c(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
      }, connectChildren() {
        let t = Math.max(0, this.index());
        for (const e of this.connects)
          M(e).forEach((i, s) => R(i, this.cls, s === t));
        this.$emit();
      }, toggles(t) {
        this.$emit();
        const e = this.index();
        this.show(~e ? e : t[this.active] || t[0]);
      } }, connected() {
        d(this.$el, "role", "tablist");
      }, observe: [$i({ targets: ({ connectChildren: t }) => t }), In({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })], events: [{ name: "click keydown", delegate: ({ toggle: t }) => t, handler(t) {
        !P(t.current, js) && (t.type === "click" || t.keyCode === A.SPACE) && (t.preventDefault(), this.show(t.current));
      } }, { name: "keydown", delegate: ({ toggle: t }) => t, handler(t) {
        const { current: e, keyCode: i } = t, s = P(this.$el, this.selVertical);
        let n = i === A.HOME ? 0 : i === A.END ? "last" : i === A.LEFT && !s || i === A.UP && s ? "previous" : i === A.RIGHT && !s || i === A.DOWN && s ? "next" : -1;
        if (~n) {
          t.preventDefault();
          const o = this.toggles.filter((a) => !P(a, js)), r = o[nt(n, o, o.indexOf(e))];
          r.focus(), this.followFocus && this.show(r);
        }
      } }, { name: "click", el: ({ $el: t, connects: e, itemNav: i }) => e.concat(i ? Ae(i, t) : []), delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`, handler(t) {
        t.target.closest("a,button") && (t.preventDefault(), this.show(X(t.current, this.attrItem)));
      } }, { name: "swipeRight swipeLeft", filter: ({ swiping: t }) => t, el: ({ connects: t }) => t, handler({ type: t }) {
        this.show(ee(t, "Left") ? "next" : "previous");
      } }], update() {
        var t;
        for (const e of this.connects)
          H(e, "ul") && d(e, "role", "presentation");
        d(M(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const i = this.toggles[e], s = (t = this.connects[0]) == null ? void 0 : t.children[e];
          d(i, "role", "tab"), s && (i.id = Jt(this, i), s.id = Jt(this, s), d(i, "aria-controls", s.id), d(s, { role: "tabpanel", "aria-labelledby": i.id }));
        }
        d(this.$el, "aria-orientation", P(this.$el, this.selVertical) ? "vertical" : null);
      }, methods: { index() {
        return wt(this.children, (t) => $(t, this.cls));
      }, show(t) {
        const e = this.toggles.filter((r) => !P(r, js)), i = this.index(), s = nt(!Ke(t) || m(e, t) ? t : 0, e, nt(this.toggles[i], e)), n = nt(e[s], this.toggles);
        this.children.forEach((r, a) => {
          R(r, this.cls, n === a), d(this.toggles[a], { "aria-selected": n === a, tabindex: n === a ? null : -1 });
        });
        const o = i >= 0 && i !== s;
        this.connects.forEach((_0) => __async(this, [_0], function* ({ children: r }) {
          const a = Dt(r).filter((l, h) => h !== n && $(l, this.cls));
          (yield this.toggleElement(a, false, o)) && (yield this.toggleElement(r[n], true, o));
        }));
      } } }, pc = { mixins: [it], extends: Jo, props: { media: Boolean }, data: { media: 960, attrItem: "uk-tab-item", selVertical: ".uk-tab-left,.uk-tab-right" }, connected() {
        const t = $(this.$el, "uk-tab-left") ? "uk-tab-left" : $(this.$el, "uk-tab-right") ? "uk-tab-right" : false;
        t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
      } };
      const gc = 32;
      var mc = { mixins: [Ei, Gt], args: "target", props: { href: String, target: null, mode: "list", queued: Boolean }, data: { href: false, target: false, mode: "click", queued: true }, computed: { target: { get: ({ target: t }, e) => (t = Ae(t || e.hash, e), t.length ? t : [e]), observe: ({ target: t }) => t } }, connected() {
        m(this.mode, "media") || (ni(this.$el) || d(this.$el, "tabindex", "0"), !this.cls && H(this.$el, "a") && d(this.$el, "role", "button"));
      }, observe: $i({ targets: ({ target: t }) => t }), events: [{ name: ct, filter: ({ mode: t }) => m(t, "hover"), handler(t) {
        this._preventClick = null, !(!pt(t) || ne(this._showState) || this.$el.disabled) && (v(this.$el, "focus"), F(document, ct, () => v(this.$el, "blur"), true, (e) => !this.$el.contains(e.target)), m(this.mode, "click") && (this._preventClick = true));
      } }, { name: `mouseenter mouseleave ${Lt} ${ae} focus blur`, filter: ({ mode: t }) => m(t, "hover"), handler(t) {
        if (pt(t) || this.$el.disabled)
          return;
        const e = m(["mouseenter", Lt, "focus"], t.type), i = this.isToggled(this.target);
        if (!e && (!ne(this._showState) || t.type !== "blur" && P(this.$el, ":focus") || t.type === "blur" && P(this.$el, ":hover"))) {
          i === this._showState && (this._showState = null);
          return;
        }
        e && ne(this._showState) && i !== this._showState || (this._showState = e ? i : null, this.toggle(`toggle${e ? "show" : "hide"}`));
      } }, { name: "keydown", filter: ({ $el: t, mode: e }) => m(e, "click") && !H(t, "input"), handler(t) {
        t.keyCode === gc && (t.preventDefault(), this.$el.click());
      } }, { name: "click", filter: ({ mode: t }) => ["click", "hover"].some((e) => m(t, e)), handler(t) {
        let e;
        (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && P(this.target, e.hash))) && t.preventDefault(), !this._preventClick && m(this.mode, "click") && this.toggle();
      } }, { name: "mediachange", filter: ({ mode: t }) => m(t, "media"), el: ({ target: t }) => t, handler(t, e) {
        e.matches ^ this.isToggled(this.target) && this.toggle();
      } }], methods: { toggle(t) {
        return __async(this, null, function* () {
          if (!v(this.target, t || "toggle", [this]))
            return;
          if (Et(this.$el, "aria-expanded") && d(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued)
            return this.toggleElement(this.target);
          const e = this.target.filter((s) => $(s, this.clsLeave));
          if (e.length) {
            for (const s of this.target) {
              const n = m(e, s);
              this.toggleElement(s, n, n);
            }
            return;
          }
          const i = this.target.filter(this.isToggled);
          (yield this.toggleElement(i, false)) && (yield this.toggleElement(this.target.filter((s) => !m(i, s)), true));
        });
      } } }, vc = Object.freeze({ __proto__: null, Accordion: Ao, Alert: zl, Close: Ph, Cover: Ll, Drop: Mo, DropParentIcon: Zt, Dropdown: Mo, Dropnav: No, FormCustom: Gl, Grid: Xl, HeightMatch: Ql, HeightPlaceholder: ih, HeightViewport: sh, Icon: Bs, Img: Fh, Inverse: Rh, Leader: Vh, Margin: En, Marker: _h, Modal: Yh, Nav: Xh, NavParentIcon: Ih, Navbar: Jh, NavbarParentIcon: Zt, NavbarToggleIcon: Ch, Offcanvas: Zh, OverflowAuto: ec, OverlayIcon: Zt, PaginationNext: Oh, PaginationPrevious: Dh, Responsive: ic, Scroll: sc, Scrollspy: rc, ScrollspyNav: ac, SearchIcon: Eh, SlidenavNext: jo, SlidenavPrevious: jo, Spinner: Th, Sticky: lc, Svg: hc, Switcher: Jo, Tab: pc, Toggle: mc, Totop: Ah, Video: Oo });
      return Nt(vc, (t, e) => lt.component(e, t)), Al(lt), Nt(_l, (t, e) => lt.component(e, t)), lt;
    });
  }
});
export default require_uikit_min();
/*! Bundled license information:

uikit/dist/js/uikit.min.js:
  (*! UIkit 3.20.9 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License *)
*/
//# sourceMappingURL=uikit_dist_js_uikit__min__js.js.map
