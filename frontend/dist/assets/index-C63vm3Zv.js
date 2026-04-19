const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vaultService-CN5Qz0-L.js","assets/pdf-utils-HZTV32cA.js","assets/compression-utils-CXh1ITwj.js","assets/resourceRegistry-BelDkWW9.js","assets/dataExport-Cd5QdDuP.js","assets/element-plus-Ca9klJWt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/iconProtonAuth-By4W04ac.js","assets/dataMigrationService-D1gFIi41.js","assets/argon2-browser-ICE29r9E.js","assets/hash-wasm-Dup_VHWH.js","assets/qr-utils-BC7NLEos.js","assets/wa-sqlite-D0naBMh4.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/common-C-8Ql2yp.js","assets/responsiveOverlay-BK3SNTTx.js","assets/responsiveOverlay-DXpm1mUF.css","assets/dataImport-Bca3Q22u.js","assets/iconLastPassAuth-BYKcLXlV.js","assets/dataBackup-ClYh4_Gy.js","assets/utilityTools-CkJFqzKH.js","assets/iconToolbox-DlVfwCDt.js","assets/passkeySettings-Dc9RVIqu.js","assets/webAuthnService-B2aG1oBp.js","assets/emergency-mkIUtubs.js","assets/home-BYczQqeG.js","assets/home-wjBgacGz.css","assets/login-DOZIKmNn.js","assets/oauthCallback--5WYGvyW.js","assets/healthCheck-k-Ifb7Dt.js","assets/healthCheck-X2U2YMiZ.css"])))=>i.map(i=>d[i]);
import { _ as de, __tla as __tla_0 } from "./pdf-utils-HZTV32cA.js";
import { as as mr, f as Oe, l as pr, e as F, s as bn, c as se, D as Ct, g as Lt, E as Ue, x as gr, k as qt, a3 as vn, z as hr, O as K, a2 as yr, F as $t, az as Qe, aA as ga, I as G, M as te, Q as V, aB as ha, n as br, u as O, J as ke, Y as ge, aa as vr, P as oe, Z as We, _ as he, a0 as kn, S as Ht, R as Ia, aC as En, ac as La, v as kr, X as Er, aD as wr, aE as Ar, aF as Tr, au as Sr, aG as Ir } from "./vue-core-Daban9YF.js";
import { E as Pe, b as wn, d as ya, e as Lr, s as Pr, m as Nr, f as Yt, l as oa, h as Pa, i as Or, p as Cr, j as Dr, k as An, n as Rr, o as Tn, q as Mr, z as Fr, r as Ur, t as xr, u as Br } from "./element-plus-Ca9klJWt.js";
import { s as Na, a as Oa, W as Wr, b as Ca } from "./simplewebauthn-3qpiAaRi.js";
import { u as $r, V as Hr } from "./tanstack-query-C-OQsQoR.js";
import "./compression-utils-CXh1ITwj.js";
let Hl, Pl, rl, Zt, cr, Jt, ve, Qi, zi, _t, ce, dt, X, gn, nt, ae, qr, ct, el, ir, $e, at, _e, $i, Dt, ur, xt, Hi, ac;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);
        new MutationObserver((o)=>{
            for (const n of o)if (n.type === "childList") for (const s of n.addedNodes)s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function a(o) {
            const n = {};
            return o.integrity && (n.integrity = o.integrity), o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? n.credentials = "include" : o.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n;
        }
        function r(o) {
            if (o.ep) return;
            o.ep = !0;
            const n = a(o);
            fetch(o.href, n);
        }
    })();
    const Me = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3
    }, Da = {
        debug: Me.DEBUG,
        info: Me.INFO,
        warn: Me.WARN,
        error: Me.ERROR
    };
    class Gr {
        constructor(){
            this.level = Me.INFO, this.setLevel("warn");
        }
        setLevel(t) {
            if (typeof t == "string") {
                const a = t.toLowerCase();
                Da[a] !== void 0 && (this.level = Da[a]);
            } else typeof t == "number" && (this.level = t);
        }
        formatMessage(t, a) {
            return `[${new Date().toLocaleTimeString()}] [${t.toUpperCase()}] ${a}`;
        }
        debug(t, ...a) {
            this.level <= Me.DEBUG && console.log(this.formatMessage("debug", t), ...a);
        }
        info(t, ...a) {
            this.level <= Me.INFO && console.info(this.formatMessage("info", t), ...a);
        }
        warn(t, ...a) {
            this.level <= Me.WARN && console.warn(this.formatMessage("warn", t), ...a);
        }
        error(t, ...a) {
            this.level <= Me.ERROR && console.error(this.formatMessage("error", t), ...a);
        }
    }
    ae = new Gr;
    function Vr(e = {}) {
        const { immediate: t = !1, onNeedRefresh: a, onOfflineReady: r, onRegistered: o, onRegisteredSW: n, onRegisterError: s } = e;
        let i, c;
        const _ = async (f = !0)=>{
            await c;
        };
        async function p() {
            if ("serviceWorker" in navigator) {
                if (i = await de(async ()=>{
                    const { Workbox: f } = await import("./workbox-window.prod.es5-BIl4cyR9.js");
                    return {
                        Workbox: f
                    };
                }, []).then(({ Workbox: f })=>new f("/sw.js", {
                        scope: "/",
                        type: "classic"
                    })).catch((f)=>{
                    s?.(f);
                }), !i) return;
                i.addEventListener("activated", (f)=>{
                    (f.isUpdate || f.isExternal) && window.location.reload();
                }), i.addEventListener("installed", (f)=>{
                    f.isUpdate || r?.();
                }), i.register({
                    immediate: t
                }).then((f)=>{
                    n ? n("/sw.js", f) : o?.(f);
                }).catch((f)=>{
                    s?.(f);
                });
            }
        }
        return c = p(), _;
    }
    qr = "/logo.svg?20260402";
    function Yr(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
    }
    const Gt = typeof window < "u", Ge = (e, t = !1)=>t ? Symbol.for(e) : Symbol(e), Kr = (e, t, a)=>jr({
            l: e,
            k: t,
            s: a
        }), jr = (e)=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), re = (e)=>typeof e == "number" && isFinite(e), zr = (e)=>In(e) === "[object Date]", He = (e)=>In(e) === "[object RegExp]", Kt = (e)=>B(e) && Object.keys(e).length === 0, fe = Object.assign, Qr = Object.create, z = (e = null)=>Qr(e);
    let Ra;
    const Fe = ()=>Ra || (Ra = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : z());
    function Ma(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
    }
    function Fa(e) {
        return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function Xr(e) {
        return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, n)=>`${o}="${Fa(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, n)=>`${o}='${Fa(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
            /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
            /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
        ].forEach((r)=>{
            e = e.replace(r, "$1javascript&#58;");
        }), e;
    }
    const Jr = Object.prototype.hasOwnProperty;
    function Se(e, t) {
        return Jr.call(e, t);
    }
    const Z = Array.isArray, J = (e)=>typeof e == "function", N = (e)=>typeof e == "string", $ = (e)=>typeof e == "boolean", q = (e)=>e !== null && typeof e == "object", Zr = (e)=>q(e) && J(e.then) && J(e.catch), Sn = Object.prototype.toString, In = (e)=>Sn.call(e), B = (e)=>{
        if (!q(e)) return !1;
        const t = Object.getPrototypeOf(e);
        return t === null || t.constructor === Object;
    }, eo = (e)=>e == null ? "" : Z(e) || B(e) && e.toString === Sn ? JSON.stringify(e, null, 2) : String(e);
    function to(e, t = "") {
        return e.reduce((a, r, o)=>o === 0 ? a + r : a + t + r, "");
    }
    function jt(e) {
        let t = e;
        return ()=>++t;
    }
    const Ft = (e)=>!q(e) || Z(e);
    function Wt(e, t) {
        if (Ft(e) || Ft(t)) throw new Error("Invalid value");
        const a = [
            {
                src: e,
                des: t
            }
        ];
        for(; a.length;){
            const { src: r, des: o } = a.pop();
            Object.keys(r).forEach((n)=>{
                n !== "__proto__" && (q(r[n]) && !q(o[n]) && (o[n] = Array.isArray(r[n]) ? [] : z()), Ft(o[n]) || Ft(r[n]) ? o[n] = r[n] : a.push({
                    src: r[n],
                    des: o[n]
                }));
            });
        }
    }
    function ao(e, t, a) {
        return {
            line: e,
            column: t,
            offset: a
        };
    }
    function Vt(e, t, a) {
        return {
            start: e,
            end: t
        };
    }
    const no = /\{([0-9a-zA-Z]+)\}/g;
    function Ln(e, ...t) {
        return t.length === 1 && ro(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(no, (a, r)=>t.hasOwnProperty(r) ? t[r] : "");
    }
    const Pn = Object.assign, Ua = (e)=>typeof e == "string", ro = (e)=>e !== null && typeof e == "object";
    function Nn(e, t = "") {
        return e.reduce((a, r, o)=>o === 0 ? a + r : a + t + r, "");
    }
    const ba = {
        USE_MODULO_SYNTAX: 1,
        __EXTEND_POINT__: 2
    }, oo = {
        [ba.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
    };
    function so(e, t, ...a) {
        const r = Ln(oo[e], ...a || []), o = {
            message: String(r),
            code: e
        };
        return t && (o.location = t), o;
    }
    const x = {
        EXPECTED_TOKEN: 1,
        INVALID_TOKEN_IN_PLACEHOLDER: 2,
        UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
        UNKNOWN_ESCAPE_SEQUENCE: 4,
        INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
        UNBALANCED_CLOSING_BRACE: 6,
        UNTERMINATED_CLOSING_BRACE: 7,
        EMPTY_PLACEHOLDER: 8,
        NOT_ALLOW_NEST_PLACEHOLDER: 9,
        INVALID_LINKED_FORMAT: 10,
        MUST_HAVE_MESSAGES_IN_PLURAL: 11,
        UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
        UNEXPECTED_EMPTY_LINKED_KEY: 13,
        UNEXPECTED_LEXICAL_ANALYSIS: 14,
        UNHANDLED_CODEGEN_NODE_TYPE: 15,
        UNHANDLED_MINIFIER_NODE_TYPE: 16,
        __EXTEND_POINT__: 17
    }, io = {
        [x.EXPECTED_TOKEN]: "Expected token: '{0}'",
        [x.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
        [x.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
        [x.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
        [x.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
        [x.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
        [x.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
        [x.EMPTY_PLACEHOLDER]: "Empty placeholder",
        [x.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
        [x.INVALID_LINKED_FORMAT]: "Invalid linked format",
        [x.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
        [x.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
        [x.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
        [x.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
        [x.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
        [x.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
    };
    function ut(e, t, a = {}) {
        const { domain: r, messages: o, args: n } = a, s = Ln((o || io)[e] || "", ...n || []), i = new SyntaxError(String(s));
        return i.code = e, t && (i.location = t), i.domain = r, i;
    }
    function lo(e) {
        throw e;
    }
    const De = " ", co = "\r", pe = `
`, uo = "\u2028", _o = "\u2029";
    function fo(e) {
        const t = e;
        let a = 0, r = 1, o = 1, n = 0;
        const s = (P)=>t[P] === co && t[P + 1] === pe, i = (P)=>t[P] === pe, c = (P)=>t[P] === _o, _ = (P)=>t[P] === uo, p = (P)=>s(P) || i(P) || c(P) || _(P), f = ()=>a, d = ()=>r, g = ()=>o, m = ()=>n, w = (P)=>s(P) || c(P) || _(P) ? pe : t[P], T = ()=>w(a), I = ()=>w(a + n);
        function D() {
            return n = 0, p(a) && (r++, o = 0), s(a) && a++, a++, o++, t[a];
        }
        function h() {
            return s(a + n) && n++, n++, t[a + n];
        }
        function y() {
            a = 0, r = 1, o = 1, n = 0;
        }
        function k(P = 0) {
            n = P;
        }
        function v() {
            const P = a + n;
            for(; P !== a;)D();
            n = 0;
        }
        return {
            index: f,
            line: d,
            column: g,
            peekOffset: m,
            charAt: w,
            currentChar: T,
            currentPeek: I,
            next: D,
            peek: h,
            reset: y,
            resetPeek: k,
            skipToPeek: v
        };
    }
    const Be = void 0, mo = ".", xa = "'", po = "tokenizer";
    function go(e, t = {}) {
        const a = t.location !== !1, r = fo(e), o = ()=>r.index(), n = ()=>ao(r.line(), r.column(), r.index()), s = n(), i = o(), c = {
            currentType: 14,
            offset: i,
            startLoc: s,
            endLoc: s,
            lastType: 14,
            lastOffset: i,
            lastStartLoc: s,
            lastEndLoc: s,
            braceNest: 0,
            inLinked: !1,
            text: ""
        }, _ = ()=>c, { onError: p } = t;
        function f(l, u, A, ...M) {
            const ee = _();
            if (u.column += A, u.offset += A, p) {
                const W = a ? Vt(ee.startLoc, u) : null, b = ut(l, W, {
                    domain: po,
                    args: M
                });
                p(b);
            }
        }
        function d(l, u, A) {
            l.endLoc = n(), l.currentType = u;
            const M = {
                type: u
            };
            return a && (M.loc = Vt(l.startLoc, l.endLoc)), A != null && (M.value = A), M;
        }
        const g = (l)=>d(l, 14);
        function m(l, u) {
            return l.currentChar() === u ? (l.next(), u) : (f(x.EXPECTED_TOKEN, n(), 0, u), "");
        }
        function w(l) {
            let u = "";
            for(; l.currentPeek() === De || l.currentPeek() === pe;)u += l.currentPeek(), l.peek();
            return u;
        }
        function T(l) {
            const u = w(l);
            return l.skipToPeek(), u;
        }
        function I(l) {
            if (l === Be) return !1;
            const u = l.charCodeAt(0);
            return u >= 97 && u <= 122 || u >= 65 && u <= 90 || u === 95;
        }
        function D(l) {
            if (l === Be) return !1;
            const u = l.charCodeAt(0);
            return u >= 48 && u <= 57;
        }
        function h(l, u) {
            const { currentType: A } = u;
            if (A !== 2) return !1;
            w(l);
            const M = I(l.currentPeek());
            return l.resetPeek(), M;
        }
        function y(l, u) {
            const { currentType: A } = u;
            if (A !== 2) return !1;
            w(l);
            const M = l.currentPeek() === "-" ? l.peek() : l.currentPeek(), ee = D(M);
            return l.resetPeek(), ee;
        }
        function k(l, u) {
            const { currentType: A } = u;
            if (A !== 2) return !1;
            w(l);
            const M = l.currentPeek() === xa;
            return l.resetPeek(), M;
        }
        function v(l, u) {
            const { currentType: A } = u;
            if (A !== 8) return !1;
            w(l);
            const M = l.currentPeek() === ".";
            return l.resetPeek(), M;
        }
        function P(l, u) {
            const { currentType: A } = u;
            if (A !== 9) return !1;
            w(l);
            const M = I(l.currentPeek());
            return l.resetPeek(), M;
        }
        function C(l, u) {
            const { currentType: A } = u;
            if (!(A === 8 || A === 12)) return !1;
            w(l);
            const M = l.currentPeek() === ":";
            return l.resetPeek(), M;
        }
        function E(l, u) {
            const { currentType: A } = u;
            if (A !== 10) return !1;
            const M = ()=>{
                const W = l.currentPeek();
                return W === "{" ? I(l.peek()) : W === "@" || W === "%" || W === "|" || W === ":" || W === "." || W === De || !W ? !1 : W === pe ? (l.peek(), M()) : R(l, !1);
            }, ee = M();
            return l.resetPeek(), ee;
        }
        function U(l) {
            w(l);
            const u = l.currentPeek() === "|";
            return l.resetPeek(), u;
        }
        function j(l) {
            const u = w(l), A = l.currentPeek() === "%" && l.peek() === "{";
            return l.resetPeek(), {
                isModulo: A,
                hasSpace: u.length > 0
            };
        }
        function R(l, u = !0) {
            const A = (ee = !1, W = "", b = !1)=>{
                const S = l.currentPeek();
                return S === "{" ? W === "%" ? !1 : ee : S === "@" || !S ? W === "%" ? !0 : ee : S === "%" ? (l.peek(), A(ee, "%", !0)) : S === "|" ? W === "%" || b ? !0 : !(W === De || W === pe) : S === De ? (l.peek(), A(!0, De, b)) : S === pe ? (l.peek(), A(!0, pe, b)) : !0;
            }, M = A();
            return u && l.resetPeek(), M;
        }
        function H(l, u) {
            const A = l.currentChar();
            return A === Be ? Be : u(A) ? (l.next(), A) : null;
        }
        function me(l) {
            const u = l.charCodeAt(0);
            return u >= 97 && u <= 122 || u >= 65 && u <= 90 || u >= 48 && u <= 57 || u === 95 || u === 36;
        }
        function ye(l) {
            return H(l, me);
        }
        function Ee(l) {
            const u = l.charCodeAt(0);
            return u >= 97 && u <= 122 || u >= 65 && u <= 90 || u >= 48 && u <= 57 || u === 95 || u === 36 || u === 45;
        }
        function ft(l) {
            return H(l, Ee);
        }
        function mt(l) {
            const u = l.charCodeAt(0);
            return u >= 48 && u <= 57;
        }
        function pt(l) {
            return H(l, mt);
        }
        function gt(l) {
            const u = l.charCodeAt(0);
            return u >= 48 && u <= 57 || u >= 65 && u <= 70 || u >= 97 && u <= 102;
        }
        function Ae(l) {
            return H(l, gt);
        }
        function Ye(l) {
            let u = "", A = "";
            for(; u = pt(l);)A += u;
            return A;
        }
        function ht(l) {
            T(l);
            const u = l.currentChar();
            return u !== "%" && f(x.EXPECTED_TOKEN, n(), 0, u), l.next(), "%";
        }
        function Xe(l) {
            let u = "";
            for(;;){
                const A = l.currentChar();
                if (A === "{" || A === "}" || A === "@" || A === "|" || !A) break;
                if (A === "%") if (R(l)) u += A, l.next();
                else break;
                else if (A === De || A === pe) if (R(l)) u += A, l.next();
                else {
                    if (U(l)) break;
                    u += A, l.next();
                }
                else u += A, l.next();
            }
            return u;
        }
        function yt(l) {
            T(l);
            let u = "", A = "";
            for(; u = ft(l);)A += u;
            return l.currentChar() === Be && f(x.UNTERMINATED_CLOSING_BRACE, n(), 0), A;
        }
        function bt(l) {
            T(l);
            let u = "";
            return l.currentChar() === "-" ? (l.next(), u += `-${Ye(l)}`) : u += Ye(l), l.currentChar() === Be && f(x.UNTERMINATED_CLOSING_BRACE, n(), 0), u;
        }
        function Rt(l) {
            return l !== xa && l !== pe;
        }
        function vt(l) {
            T(l), m(l, "'");
            let u = "", A = "";
            for(; u = H(l, Rt);)u === "\\" ? A += kt(l) : A += u;
            const M = l.currentChar();
            return M === pe || M === Be ? (f(x.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, n(), 0), M === pe && (l.next(), m(l, "'")), A) : (m(l, "'"), A);
        }
        function kt(l) {
            const u = l.currentChar();
            switch(u){
                case "\\":
                case "'":
                    return l.next(), `\\${u}`;
                case "u":
                    return Je(l, u, 4);
                case "U":
                    return Je(l, u, 6);
                default:
                    return f(x.UNKNOWN_ESCAPE_SEQUENCE, n(), 0, u), "";
            }
        }
        function Je(l, u, A) {
            m(l, u);
            let M = "";
            for(let ee = 0; ee < A; ee++){
                const W = Ae(l);
                if (!W) {
                    f(x.INVALID_UNICODE_ESCAPE_SEQUENCE, n(), 0, `\\${u}${M}${l.currentChar()}`);
                    break;
                }
                M += W;
            }
            return `\\${u}${M}`;
        }
        function Et(l) {
            return l !== "{" && l !== "}" && l !== De && l !== pe;
        }
        function wt(l) {
            T(l);
            let u = "", A = "";
            for(; u = H(l, Et);)A += u;
            return A;
        }
        function At(l) {
            let u = "", A = "";
            for(; u = ye(l);)A += u;
            return A;
        }
        function L(l) {
            const u = (A)=>{
                const M = l.currentChar();
                return M === "{" || M === "%" || M === "@" || M === "|" || M === "(" || M === ")" || !M || M === De ? A : (A += M, l.next(), u(A));
            };
            return u("");
        }
        function Y(l) {
            T(l);
            const u = m(l, "|");
            return T(l), u;
        }
        function Ze(l, u) {
            let A = null;
            switch(l.currentChar()){
                case "{":
                    return u.braceNest >= 1 && f(x.NOT_ALLOW_NEST_PLACEHOLDER, n(), 0), l.next(), A = d(u, 2, "{"), T(l), u.braceNest++, A;
                case "}":
                    return u.braceNest > 0 && u.currentType === 2 && f(x.EMPTY_PLACEHOLDER, n(), 0), l.next(), A = d(u, 3, "}"), u.braceNest--, u.braceNest > 0 && T(l), u.inLinked && u.braceNest === 0 && (u.inLinked = !1), A;
                case "@":
                    return u.braceNest > 0 && f(x.UNTERMINATED_CLOSING_BRACE, n(), 0), A = et(l, u) || g(u), u.braceNest = 0, A;
                default:
                    {
                        let ee = !0, W = !0, b = !0;
                        if (U(l)) return u.braceNest > 0 && f(x.UNTERMINATED_CLOSING_BRACE, n(), 0), A = d(u, 1, Y(l)), u.braceNest = 0, u.inLinked = !1, A;
                        if (u.braceNest > 0 && (u.currentType === 5 || u.currentType === 6 || u.currentType === 7)) return f(x.UNTERMINATED_CLOSING_BRACE, n(), 0), u.braceNest = 0, Tt(l, u);
                        if (ee = h(l, u)) return A = d(u, 5, yt(l)), T(l), A;
                        if (W = y(l, u)) return A = d(u, 6, bt(l)), T(l), A;
                        if (b = k(l, u)) return A = d(u, 7, vt(l)), T(l), A;
                        if (!ee && !W && !b) return A = d(u, 13, wt(l)), f(x.INVALID_TOKEN_IN_PLACEHOLDER, n(), 0, A.value), T(l), A;
                        break;
                    }
            }
            return A;
        }
        function et(l, u) {
            const { currentType: A } = u;
            let M = null;
            const ee = l.currentChar();
            switch((A === 8 || A === 9 || A === 12 || A === 10) && (ee === pe || ee === De) && f(x.INVALID_LINKED_FORMAT, n(), 0), ee){
                case "@":
                    return l.next(), M = d(u, 8, "@"), u.inLinked = !0, M;
                case ".":
                    return T(l), l.next(), d(u, 9, ".");
                case ":":
                    return T(l), l.next(), d(u, 10, ":");
                default:
                    return U(l) ? (M = d(u, 1, Y(l)), u.braceNest = 0, u.inLinked = !1, M) : v(l, u) || C(l, u) ? (T(l), et(l, u)) : P(l, u) ? (T(l), d(u, 12, At(l))) : E(l, u) ? (T(l), ee === "{" ? Ze(l, u) || M : d(u, 11, L(l))) : (A === 8 && f(x.INVALID_LINKED_FORMAT, n(), 0), u.braceNest = 0, u.inLinked = !1, Tt(l, u));
            }
        }
        function Tt(l, u) {
            let A = {
                type: 14
            };
            if (u.braceNest > 0) return Ze(l, u) || g(u);
            if (u.inLinked) return et(l, u) || g(u);
            switch(l.currentChar()){
                case "{":
                    return Ze(l, u) || g(u);
                case "}":
                    return f(x.UNBALANCED_CLOSING_BRACE, n(), 0), l.next(), d(u, 3, "}");
                case "@":
                    return et(l, u) || g(u);
                default:
                    {
                        if (U(l)) return A = d(u, 1, Y(l)), u.braceNest = 0, u.inLinked = !1, A;
                        const { isModulo: ee, hasSpace: W } = j(l);
                        if (ee) return W ? d(u, 0, Xe(l)) : d(u, 4, ht(l));
                        if (R(l)) return d(u, 0, Xe(l));
                        break;
                    }
            }
            return A;
        }
        function ea() {
            const { currentType: l, offset: u, startLoc: A, endLoc: M } = c;
            return c.lastType = l, c.lastOffset = u, c.lastStartLoc = A, c.lastEndLoc = M, c.offset = o(), c.startLoc = n(), r.currentChar() === Be ? d(c, 14) : Tt(r, c);
        }
        return {
            nextToken: ea,
            currentOffset: o,
            currentPosition: n,
            context: _
        };
    }
    const ho = "parser", yo = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
    function bo(e, t, a) {
        switch(e){
            case "\\\\":
                return "\\";
            case "\\'":
                return "'";
            default:
                {
                    const r = parseInt(t || a, 16);
                    return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
                }
        }
    }
    function vo(e = {}) {
        const t = e.location !== !1, { onError: a, onWarn: r } = e;
        function o(h, y, k, v, ...P) {
            const C = h.currentPosition();
            if (C.offset += v, C.column += v, a) {
                const E = t ? Vt(k, C) : null, U = ut(y, E, {
                    domain: ho,
                    args: P
                });
                a(U);
            }
        }
        function n(h, y, k, v, ...P) {
            const C = h.currentPosition();
            if (C.offset += v, C.column += v, r) {
                const E = t ? Vt(k, C) : null;
                r(so(y, E, P));
            }
        }
        function s(h, y, k) {
            const v = {
                type: h
            };
            return t && (v.start = y, v.end = y, v.loc = {
                start: k,
                end: k
            }), v;
        }
        function i(h, y, k, v) {
            t && (h.end = y, h.loc && (h.loc.end = k));
        }
        function c(h, y) {
            const k = h.context(), v = s(3, k.offset, k.startLoc);
            return v.value = y, i(v, h.currentOffset(), h.currentPosition()), v;
        }
        function _(h, y) {
            const k = h.context(), { lastOffset: v, lastStartLoc: P } = k, C = s(5, v, P);
            return C.index = parseInt(y, 10), h.nextToken(), i(C, h.currentOffset(), h.currentPosition()), C;
        }
        function p(h, y, k) {
            const v = h.context(), { lastOffset: P, lastStartLoc: C } = v, E = s(4, P, C);
            return E.key = y, k === !0 && (E.modulo = !0), h.nextToken(), i(E, h.currentOffset(), h.currentPosition()), E;
        }
        function f(h, y) {
            const k = h.context(), { lastOffset: v, lastStartLoc: P } = k, C = s(9, v, P);
            return C.value = y.replace(yo, bo), h.nextToken(), i(C, h.currentOffset(), h.currentPosition()), C;
        }
        function d(h) {
            const y = h.nextToken(), k = h.context(), { lastOffset: v, lastStartLoc: P } = k, C = s(8, v, P);
            return y.type !== 12 ? (o(h, x.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), C.value = "", i(C, v, P), {
                nextConsumeToken: y,
                node: C
            }) : (y.value == null && o(h, x.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Te(y)), C.value = y.value || "", i(C, h.currentOffset(), h.currentPosition()), {
                node: C
            });
        }
        function g(h, y) {
            const k = h.context(), v = s(7, k.offset, k.startLoc);
            return v.value = y, i(v, h.currentOffset(), h.currentPosition()), v;
        }
        function m(h) {
            const y = h.context(), k = s(6, y.offset, y.startLoc);
            let v = h.nextToken();
            if (v.type === 9) {
                const P = d(h);
                k.modifier = P.node, v = P.nextConsumeToken || h.nextToken();
            }
            switch(v.type !== 10 && o(h, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Te(v)), v = h.nextToken(), v.type === 2 && (v = h.nextToken()), v.type){
                case 11:
                    v.value == null && o(h, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Te(v)), k.key = g(h, v.value || "");
                    break;
                case 5:
                    v.value == null && o(h, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Te(v)), k.key = p(h, v.value || "");
                    break;
                case 6:
                    v.value == null && o(h, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Te(v)), k.key = _(h, v.value || "");
                    break;
                case 7:
                    v.value == null && o(h, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Te(v)), k.key = f(h, v.value || "");
                    break;
                default:
                    {
                        o(h, x.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
                        const P = h.context(), C = s(7, P.offset, P.startLoc);
                        return C.value = "", i(C, P.offset, P.startLoc), k.key = C, i(k, P.offset, P.startLoc), {
                            nextConsumeToken: v,
                            node: k
                        };
                    }
            }
            return i(k, h.currentOffset(), h.currentPosition()), {
                node: k
            };
        }
        function w(h) {
            const y = h.context(), k = y.currentType === 1 ? h.currentOffset() : y.offset, v = y.currentType === 1 ? y.endLoc : y.startLoc, P = s(2, k, v);
            P.items = [];
            let C = null, E = null;
            do {
                const R = C || h.nextToken();
                switch(C = null, R.type){
                    case 0:
                        R.value == null && o(h, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Te(R)), P.items.push(c(h, R.value || ""));
                        break;
                    case 6:
                        R.value == null && o(h, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Te(R)), P.items.push(_(h, R.value || ""));
                        break;
                    case 4:
                        E = !0;
                        break;
                    case 5:
                        R.value == null && o(h, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Te(R)), P.items.push(p(h, R.value || "", !!E)), E && (n(h, ba.USE_MODULO_SYNTAX, y.lastStartLoc, 0, Te(R)), E = null);
                        break;
                    case 7:
                        R.value == null && o(h, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Te(R)), P.items.push(f(h, R.value || ""));
                        break;
                    case 8:
                        {
                            const H = m(h);
                            P.items.push(H.node), C = H.nextConsumeToken || null;
                            break;
                        }
                }
            }while (y.currentType !== 14 && y.currentType !== 1);
            const U = y.currentType === 1 ? y.lastOffset : h.currentOffset(), j = y.currentType === 1 ? y.lastEndLoc : h.currentPosition();
            return i(P, U, j), P;
        }
        function T(h, y, k, v) {
            const P = h.context();
            let C = v.items.length === 0;
            const E = s(1, y, k);
            E.cases = [], E.cases.push(v);
            do {
                const U = w(h);
                C || (C = U.items.length === 0), E.cases.push(U);
            }while (P.currentType !== 14);
            return C && o(h, x.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), i(E, h.currentOffset(), h.currentPosition()), E;
        }
        function I(h) {
            const y = h.context(), { offset: k, startLoc: v } = y, P = w(h);
            return y.currentType === 14 ? P : T(h, k, v, P);
        }
        function D(h) {
            const y = go(h, Pn({}, e)), k = y.context(), v = s(0, k.offset, k.startLoc);
            return t && v.loc && (v.loc.source = h), v.body = I(y), e.onCacheKey && (v.cacheKey = e.onCacheKey(h)), k.currentType !== 14 && o(y, x.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, h[k.offset] || ""), i(v, y.currentOffset(), y.currentPosition()), v;
        }
        return {
            parse: D
        };
    }
    function Te(e) {
        if (e.type === 14) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "…" : t;
    }
    function ko(e, t = {}) {
        const a = {
            ast: e,
            helpers: new Set
        };
        return {
            context: ()=>a,
            helper: (n)=>(a.helpers.add(n), n)
        };
    }
    function Ba(e, t) {
        for(let a = 0; a < e.length; a++)va(e[a], t);
    }
    function va(e, t) {
        switch(e.type){
            case 1:
                Ba(e.cases, t), t.helper("plural");
                break;
            case 2:
                Ba(e.items, t);
                break;
            case 6:
                {
                    va(e.key, t), t.helper("linked"), t.helper("type");
                    break;
                }
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break;
        }
    }
    function Eo(e, t = {}) {
        const a = ko(e);
        a.helper("normalize"), e.body && va(e.body, a);
        const r = a.context();
        e.helpers = Array.from(r.helpers);
    }
    function wo(e) {
        const t = e.body;
        return t.type === 2 ? Wa(t) : t.cases.forEach((a)=>Wa(a)), e;
    }
    function Wa(e) {
        if (e.items.length === 1) {
            const t = e.items[0];
            (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
        } else {
            const t = [];
            for(let a = 0; a < e.items.length; a++){
                const r = e.items[a];
                if (!(r.type === 3 || r.type === 9) || r.value == null) break;
                t.push(r.value);
            }
            if (t.length === e.items.length) {
                e.static = Nn(t);
                for(let a = 0; a < e.items.length; a++){
                    const r = e.items[a];
                    (r.type === 3 || r.type === 9) && delete r.value;
                }
            }
        }
    }
    const Ao = "minifier";
    function rt(e) {
        switch(e.t = e.type, e.type){
            case 0:
                {
                    const t = e;
                    rt(t.body), t.b = t.body, delete t.body;
                    break;
                }
            case 1:
                {
                    const t = e, a = t.cases;
                    for(let r = 0; r < a.length; r++)rt(a[r]);
                    t.c = a, delete t.cases;
                    break;
                }
            case 2:
                {
                    const t = e, a = t.items;
                    for(let r = 0; r < a.length; r++)rt(a[r]);
                    t.i = a, delete t.items, t.static && (t.s = t.static, delete t.static);
                    break;
                }
            case 3:
            case 9:
            case 8:
            case 7:
                {
                    const t = e;
                    t.value && (t.v = t.value, delete t.value);
                    break;
                }
            case 6:
                {
                    const t = e;
                    rt(t.key), t.k = t.key, delete t.key, t.modifier && (rt(t.modifier), t.m = t.modifier, delete t.modifier);
                    break;
                }
            case 5:
                {
                    const t = e;
                    t.i = t.index, delete t.index;
                    break;
                }
            case 4:
                {
                    const t = e;
                    t.k = t.key, delete t.key;
                    break;
                }
            default:
                throw ut(x.UNHANDLED_MINIFIER_NODE_TYPE, null, {
                    domain: Ao,
                    args: [
                        e.type
                    ]
                });
        }
        delete e.type;
    }
    const To = "parser";
    function So(e, t) {
        const { filename: a, breakLineCode: r, needIndent: o } = t, n = t.location !== !1, s = {
            filename: a,
            code: "",
            column: 1,
            line: 1,
            offset: 0,
            map: void 0,
            breakLineCode: r,
            needIndent: o,
            indentLevel: 0
        };
        n && e.loc && (s.source = e.loc.source);
        const i = ()=>s;
        function c(w, T) {
            s.code += w;
        }
        function _(w, T = !0) {
            const I = T ? r : "";
            c(o ? I + "  ".repeat(w) : I);
        }
        function p(w = !0) {
            const T = ++s.indentLevel;
            w && _(T);
        }
        function f(w = !0) {
            const T = --s.indentLevel;
            w && _(T);
        }
        function d() {
            _(s.indentLevel);
        }
        return {
            context: i,
            push: c,
            indent: p,
            deindent: f,
            newline: d,
            helper: (w)=>`_${w}`,
            needIndent: ()=>s.needIndent
        };
    }
    function Io(e, t) {
        const { helper: a } = e;
        e.push(`${a("linked")}(`), it(e, t.key), t.modifier ? (e.push(", "), it(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
    }
    function Lo(e, t) {
        const { helper: a, needIndent: r } = e;
        e.push(`${a("normalize")}([`), e.indent(r());
        const o = t.items.length;
        for(let n = 0; n < o && (it(e, t.items[n]), n !== o - 1); n++)e.push(", ");
        e.deindent(r()), e.push("])");
    }
    function Po(e, t) {
        const { helper: a, needIndent: r } = e;
        if (t.cases.length > 1) {
            e.push(`${a("plural")}([`), e.indent(r());
            const o = t.cases.length;
            for(let n = 0; n < o && (it(e, t.cases[n]), n !== o - 1); n++)e.push(", ");
            e.deindent(r()), e.push("])");
        }
    }
    function No(e, t) {
        t.body ? it(e, t.body) : e.push("null");
    }
    function it(e, t) {
        const { helper: a } = e;
        switch(t.type){
            case 0:
                No(e, t);
                break;
            case 1:
                Po(e, t);
                break;
            case 2:
                Lo(e, t);
                break;
            case 6:
                Io(e, t);
                break;
            case 8:
                e.push(JSON.stringify(t.value), t);
                break;
            case 7:
                e.push(JSON.stringify(t.value), t);
                break;
            case 5:
                e.push(`${a("interpolate")}(${a("list")}(${t.index}))`, t);
                break;
            case 4:
                e.push(`${a("interpolate")}(${a("named")}(${JSON.stringify(t.key)}))`, t);
                break;
            case 9:
                e.push(JSON.stringify(t.value), t);
                break;
            case 3:
                e.push(JSON.stringify(t.value), t);
                break;
            default:
                throw ut(x.UNHANDLED_CODEGEN_NODE_TYPE, null, {
                    domain: To,
                    args: [
                        t.type
                    ]
                });
        }
    }
    const Oo = (e, t = {})=>{
        const a = Ua(t.mode) ? t.mode : "normal", r = Ua(t.filename) ? t.filename : "message.intl";
        t.sourceMap;
        const o = t.breakLineCode != null ? t.breakLineCode : a === "arrow" ? ";" : `
`, n = t.needIndent ? t.needIndent : a !== "arrow", s = e.helpers || [], i = So(e, {
            filename: r,
            breakLineCode: o,
            needIndent: n
        });
        i.push(a === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(n), s.length > 0 && (i.push(`const { ${Nn(s.map((p)=>`${p}: _${p}`), ", ")} } = ctx`), i.newline()), i.push("return "), it(i, e), i.deindent(n), i.push("}"), delete e.helpers;
        const { code: c, map: _ } = i.context();
        return {
            ast: e,
            code: c,
            map: _ ? _.toJSON() : void 0
        };
    };
    function Co(e, t = {}) {
        const a = Pn({}, t), r = !!a.jit, o = !!a.minify, n = a.optimize == null ? !0 : a.optimize, i = vo(a).parse(e);
        return r ? (n && wo(i), o && rt(i), {
            ast: i,
            code: ""
        }) : (Eo(i, a), Oo(i, a));
    }
    function Do() {
        typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Fe().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Fe().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Fe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
    }
    function Ne(e) {
        return q(e) && ka(e) === 0 && (Se(e, "b") || Se(e, "body"));
    }
    const On = [
        "b",
        "body"
    ];
    function Ro(e) {
        return Ve(e, On);
    }
    const Cn = [
        "c",
        "cases"
    ];
    function Mo(e) {
        return Ve(e, Cn, []);
    }
    const Dn = [
        "s",
        "static"
    ];
    function Fo(e) {
        return Ve(e, Dn);
    }
    const Rn = [
        "i",
        "items"
    ];
    function Uo(e) {
        return Ve(e, Rn, []);
    }
    const Mn = [
        "t",
        "type"
    ];
    function ka(e) {
        return Ve(e, Mn);
    }
    const Fn = [
        "v",
        "value"
    ];
    function Ut(e, t) {
        const a = Ve(e, Fn);
        if (a != null) return a;
        throw Pt(t);
    }
    const Un = [
        "m",
        "modifier"
    ];
    function xo(e) {
        return Ve(e, Un);
    }
    const xn = [
        "k",
        "key"
    ];
    function Bo(e) {
        const t = Ve(e, xn);
        if (t) return t;
        throw Pt(6);
    }
    function Ve(e, t, a) {
        for(let r = 0; r < t.length; r++){
            const o = t[r];
            if (Se(e, o) && e[o] != null) return e[o];
        }
        return a;
    }
    const Bn = [
        ...On,
        ...Cn,
        ...Dn,
        ...Rn,
        ...xn,
        ...Un,
        ...Fn,
        ...Mn
    ];
    function Pt(e) {
        return new Error(`unhandled node type: ${e}`);
    }
    const qe = [];
    qe[0] = {
        w: [
            0
        ],
        i: [
            3,
            0
        ],
        "[": [
            4
        ],
        o: [
            7
        ]
    };
    qe[1] = {
        w: [
            1
        ],
        ".": [
            2
        ],
        "[": [
            4
        ],
        o: [
            7
        ]
    };
    qe[2] = {
        w: [
            2
        ],
        i: [
            3,
            0
        ],
        0: [
            3,
            0
        ]
    };
    qe[3] = {
        i: [
            3,
            0
        ],
        0: [
            3,
            0
        ],
        w: [
            1,
            1
        ],
        ".": [
            2,
            1
        ],
        "[": [
            4,
            1
        ],
        o: [
            7,
            1
        ]
    };
    qe[4] = {
        "'": [
            5,
            0
        ],
        '"': [
            6,
            0
        ],
        "[": [
            4,
            2
        ],
        "]": [
            1,
            3
        ],
        o: 8,
        l: [
            4,
            0
        ]
    };
    qe[5] = {
        "'": [
            4,
            0
        ],
        o: 8,
        l: [
            5,
            0
        ]
    };
    qe[6] = {
        '"': [
            4,
            0
        ],
        o: 8,
        l: [
            6,
            0
        ]
    };
    const Wo = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
    function $o(e) {
        return Wo.test(e);
    }
    function Ho(e) {
        const t = e.charCodeAt(0), a = e.charCodeAt(e.length - 1);
        return t === a && (t === 34 || t === 39) ? e.slice(1, -1) : e;
    }
    function Go(e) {
        if (e == null) return "o";
        switch(e.charCodeAt(0)){
            case 91:
            case 93:
            case 46:
            case 34:
            case 39:
                return e;
            case 95:
            case 36:
            case 45:
                return "i";
            case 9:
            case 10:
            case 13:
            case 160:
            case 65279:
            case 8232:
            case 8233:
                return "w";
        }
        return "i";
    }
    function Vo(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : $o(t) ? Ho(t) : "*" + t;
    }
    function qo(e) {
        const t = [];
        let a = -1, r = 0, o = 0, n, s, i, c, _, p, f;
        const d = [];
        d[0] = ()=>{
            s === void 0 ? s = i : s += i;
        }, d[1] = ()=>{
            s !== void 0 && (t.push(s), s = void 0);
        }, d[2] = ()=>{
            d[0](), o++;
        }, d[3] = ()=>{
            if (o > 0) o--, r = 4, d[0]();
            else {
                if (o = 0, s === void 0 || (s = Vo(s), s === !1)) return !1;
                d[1]();
            }
        };
        function g() {
            const m = e[a + 1];
            if (r === 5 && m === "'" || r === 6 && m === '"') return a++, i = "\\" + m, d[0](), !0;
        }
        for(; r !== null;)if (a++, n = e[a], !(n === "\\" && g())) {
            if (c = Go(n), f = qe[r], _ = f[c] || f.l || 8, _ === 8 || (r = _[0], _[1] !== void 0 && (p = d[_[1]], p && (i = n, p() === !1)))) return;
            if (r === 7) return t;
        }
    }
    const $a = new Map;
    function Yo(e, t) {
        return q(e) ? e[t] : null;
    }
    function Ko(e, t) {
        if (!q(e)) return null;
        let a = $a.get(t);
        if (a || (a = qo(t), a && $a.set(t, a)), !a) return null;
        const r = a.length;
        let o = e, n = 0;
        for(; n < r;){
            const s = a[n];
            if (Bn.includes(s) && Ne(o)) return null;
            const i = o[s];
            if (i === void 0 || J(o)) return null;
            o = i, n++;
        }
        return o;
    }
    const jo = (e)=>e, zo = (e)=>"", Qo = "text", Xo = (e)=>e.length === 0 ? "" : to(e), Jo = eo;
    function Ha(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
    }
    function Zo(e) {
        const t = re(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (re(e.named.count) || re(e.named.n)) ? re(e.named.count) ? e.named.count : re(e.named.n) ? e.named.n : t : t;
    }
    function es(e, t) {
        t.count || (t.count = e), t.n || (t.n = e);
    }
    function ts(e = {}) {
        const t = e.locale, a = Zo(e), r = q(e.pluralRules) && N(t) && J(e.pluralRules[t]) ? e.pluralRules[t] : Ha, o = q(e.pluralRules) && N(t) && J(e.pluralRules[t]) ? Ha : void 0, n = (I)=>I[r(a, I.length, o)], s = e.list || [], i = (I)=>s[I], c = e.named || z();
        re(e.pluralIndex) && es(a, c);
        const _ = (I)=>c[I];
        function p(I) {
            const D = J(e.messages) ? e.messages(I) : q(e.messages) ? e.messages[I] : !1;
            return D || (e.parent ? e.parent.message(I) : zo);
        }
        const f = (I)=>e.modifiers ? e.modifiers[I] : jo, d = B(e.processor) && J(e.processor.normalize) ? e.processor.normalize : Xo, g = B(e.processor) && J(e.processor.interpolate) ? e.processor.interpolate : Jo, m = B(e.processor) && N(e.processor.type) ? e.processor.type : Qo, T = {
            list: i,
            named: _,
            plural: n,
            linked: (I, ...D)=>{
                const [h, y] = D;
                let k = "text", v = "";
                D.length === 1 ? q(h) ? (v = h.modifier || v, k = h.type || k) : N(h) && (v = h || v) : D.length === 2 && (N(h) && (v = h || v), N(y) && (k = y || k));
                const P = p(I)(T), C = k === "vnode" && Z(P) && v ? P[0] : P;
                return v ? f(v)(C, k) : C;
            },
            message: p,
            type: m,
            interpolate: g,
            normalize: d,
            values: fe(z(), s, c)
        };
        return T;
    }
    let Nt = null;
    function as(e) {
        Nt = e;
    }
    function ns(e, t, a) {
        Nt && Nt.emit("i18n:init", {
            timestamp: Date.now(),
            i18n: e,
            version: t,
            meta: a
        });
    }
    const rs = os("function:translate");
    function os(e) {
        return (t)=>Nt && Nt.emit(e, t);
    }
    const ss = ba.__EXTEND_POINT__, Ke = jt(ss), is = {
        FALLBACK_TO_TRANSLATE: Ke(),
        CANNOT_FORMAT_NUMBER: Ke(),
        FALLBACK_TO_NUMBER_FORMAT: Ke(),
        CANNOT_FORMAT_DATE: Ke(),
        FALLBACK_TO_DATE_FORMAT: Ke(),
        EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Ke(),
        __EXTEND_POINT__: Ke()
    }, Wn = x.__EXTEND_POINT__, je = jt(Wn), Ie = {
        INVALID_ARGUMENT: Wn,
        INVALID_DATE_ARGUMENT: je(),
        INVALID_ISO_DATE_ARGUMENT: je(),
        NOT_SUPPORT_NON_STRING_MESSAGE: je(),
        NOT_SUPPORT_LOCALE_PROMISE_VALUE: je(),
        NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: je(),
        NOT_SUPPORT_LOCALE_TYPE: je(),
        __EXTEND_POINT__: je()
    };
    function Le(e) {
        return ut(e, null, void 0);
    }
    function Ea(e, t) {
        return t.locale != null ? Ga(t.locale) : Ga(e.locale);
    }
    let ta;
    function Ga(e) {
        if (N(e)) return e;
        if (J(e)) {
            if (e.resolvedOnce && ta != null) return ta;
            if (e.constructor.name === "Function") {
                const t = e();
                if (Zr(t)) throw Le(Ie.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
                return ta = t;
            } else throw Le(Ie.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
        } else throw Le(Ie.NOT_SUPPORT_LOCALE_TYPE);
    }
    function ls(e, t, a) {
        return [
            ...new Set([
                a,
                ...Z(t) ? t : q(t) ? Object.keys(t) : N(t) ? [
                    t
                ] : [
                    a
                ]
            ])
        ];
    }
    function $n(e, t, a) {
        const r = N(a) ? a : lt, o = e;
        o.__localeChainCache || (o.__localeChainCache = new Map);
        let n = o.__localeChainCache.get(r);
        if (!n) {
            n = [];
            let s = [
                a
            ];
            for(; Z(s);)s = Va(n, s, t);
            const i = Z(t) || !B(t) ? t : t.default ? t.default : null;
            s = N(i) ? [
                i
            ] : i, Z(s) && Va(n, s, !1), o.__localeChainCache.set(r, n);
        }
        return n;
    }
    function Va(e, t, a) {
        let r = !0;
        for(let o = 0; o < t.length && $(r); o++){
            const n = t[o];
            N(n) && (r = cs(e, t[o], a));
        }
        return r;
    }
    function cs(e, t, a) {
        let r;
        const o = t.split("-");
        do {
            const n = o.join("-");
            r = us(e, n, a), o.splice(-1, 1);
        }while (o.length && r === !0);
        return r;
    }
    function us(e, t, a) {
        let r = !1;
        if (!e.includes(t) && (r = !0, t)) {
            r = t[t.length - 1] !== "!";
            const o = t.replace(/!/g, "");
            e.push(o), (Z(a) || B(a)) && a[o] && (r = a[o]);
        }
        return r;
    }
    const _s = "9.14.5", zt = -1, lt = "en-US", qa = "", Ya = (e)=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
    function ds() {
        return {
            upper: (e, t)=>t === "text" && N(e) ? e.toUpperCase() : t === "vnode" && q(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t)=>t === "text" && N(e) ? e.toLowerCase() : t === "vnode" && q(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t)=>t === "text" && N(e) ? Ya(e) : t === "vnode" && q(e) && "__v_isVNode" in e ? Ya(e.children) : e
        };
    }
    let Hn;
    function Ka(e) {
        Hn = e;
    }
    let Gn;
    function fs(e) {
        Gn = e;
    }
    let Vn;
    function ms(e) {
        Vn = e;
    }
    let qn = null;
    const ps = (e)=>{
        qn = e;
    }, gs = ()=>qn;
    let Yn = null;
    const ja = (e)=>{
        Yn = e;
    }, hs = ()=>Yn;
    let za = 0;
    function ys(e = {}) {
        const t = J(e.onWarn) ? e.onWarn : Yr, a = N(e.version) ? e.version : _s, r = N(e.locale) || J(e.locale) ? e.locale : lt, o = J(r) ? lt : r, n = Z(e.fallbackLocale) || B(e.fallbackLocale) || N(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = B(e.messages) ? e.messages : aa(o), i = B(e.datetimeFormats) ? e.datetimeFormats : aa(o), c = B(e.numberFormats) ? e.numberFormats : aa(o), _ = fe(z(), e.modifiers, ds()), p = e.pluralRules || z(), f = J(e.missing) ? e.missing : null, d = $(e.missingWarn) || He(e.missingWarn) ? e.missingWarn : !0, g = $(e.fallbackWarn) || He(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, w = !!e.unresolving, T = J(e.postTranslation) ? e.postTranslation : null, I = B(e.processor) ? e.processor : null, D = $(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, h = !!e.escapeParameter, y = J(e.messageCompiler) ? e.messageCompiler : Hn, k = J(e.messageResolver) ? e.messageResolver : Gn || Yo, v = J(e.localeFallbacker) ? e.localeFallbacker : Vn || ls, P = q(e.fallbackContext) ? e.fallbackContext : void 0, C = e, E = q(C.__datetimeFormatters) ? C.__datetimeFormatters : new Map, U = q(C.__numberFormatters) ? C.__numberFormatters : new Map, j = q(C.__meta) ? C.__meta : {};
        za++;
        const R = {
            version: a,
            cid: za,
            locale: r,
            fallbackLocale: n,
            messages: s,
            modifiers: _,
            pluralRules: p,
            missing: f,
            missingWarn: d,
            fallbackWarn: g,
            fallbackFormat: m,
            unresolving: w,
            postTranslation: T,
            processor: I,
            warnHtmlMessage: D,
            escapeParameter: h,
            messageCompiler: y,
            messageResolver: k,
            localeFallbacker: v,
            fallbackContext: P,
            onWarn: t,
            __meta: j
        };
        return R.datetimeFormats = i, R.numberFormats = c, R.__datetimeFormatters = E, R.__numberFormatters = U, __INTLIFY_PROD_DEVTOOLS__ && ns(R, a, j), R;
    }
    const aa = (e)=>({
            [e]: z()
        });
    function wa(e, t, a, r, o) {
        const { missing: n, onWarn: s } = e;
        if (n !== null) {
            const i = n(e, a, t, o);
            return N(i) ? i : t;
        } else return t;
    }
    function St(e, t, a) {
        const r = e;
        r.__localeChainCache = new Map, e.localeFallbacker(e, a, t);
    }
    function bs(e, t) {
        return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
    }
    function vs(e, t) {
        const a = t.indexOf(e);
        if (a === -1) return !1;
        for(let r = a + 1; r < t.length; r++)if (bs(e, t[r])) return !0;
        return !1;
    }
    function na(e) {
        return (a)=>ks(a, e);
    }
    function ks(e, t) {
        const a = Ro(t);
        if (a == null) throw Pt(0);
        if (ka(a) === 1) {
            const n = Mo(a);
            return e.plural(n.reduce((s, i)=>[
                    ...s,
                    Qa(e, i)
                ], []));
        } else return Qa(e, a);
    }
    function Qa(e, t) {
        const a = Fo(t);
        if (a != null) return e.type === "text" ? a : e.normalize([
            a
        ]);
        {
            const r = Uo(t).reduce((o, n)=>[
                    ...o,
                    sa(e, n)
                ], []);
            return e.normalize(r);
        }
    }
    function sa(e, t) {
        const a = ka(t);
        switch(a){
            case 3:
                return Ut(t, a);
            case 9:
                return Ut(t, a);
            case 4:
                {
                    const r = t;
                    if (Se(r, "k") && r.k) return e.interpolate(e.named(r.k));
                    if (Se(r, "key") && r.key) return e.interpolate(e.named(r.key));
                    throw Pt(a);
                }
            case 5:
                {
                    const r = t;
                    if (Se(r, "i") && re(r.i)) return e.interpolate(e.list(r.i));
                    if (Se(r, "index") && re(r.index)) return e.interpolate(e.list(r.index));
                    throw Pt(a);
                }
            case 6:
                {
                    const r = t, o = xo(r), n = Bo(r);
                    return e.linked(sa(e, n), o ? sa(e, o) : void 0, e.type);
                }
            case 7:
                return Ut(t, a);
            case 8:
                return Ut(t, a);
            default:
                throw new Error(`unhandled node on format message part: ${a}`);
        }
    }
    const Kn = (e)=>e;
    let ot = z();
    function jn(e, t = {}) {
        let a = !1;
        const r = t.onError || lo;
        return t.onError = (o)=>{
            a = !0, r(o);
        }, {
            ...Co(e, t),
            detectError: a
        };
    }
    const Es = (e, t)=>{
        if (!N(e)) throw Le(Ie.NOT_SUPPORT_NON_STRING_MESSAGE);
        {
            $(t.warnHtmlMessage) && t.warnHtmlMessage;
            const r = (t.onCacheKey || Kn)(e), o = ot[r];
            if (o) return o;
            const { code: n, detectError: s } = jn(e, t), i = new Function(`return ${n}`)();
            return s ? i : ot[r] = i;
        }
    };
    function ws(e, t) {
        if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && N(e)) {
            $(t.warnHtmlMessage) && t.warnHtmlMessage;
            const r = (t.onCacheKey || Kn)(e), o = ot[r];
            if (o) return o;
            const { ast: n, detectError: s } = jn(e, {
                ...t,
                location: !1,
                jit: !0
            }), i = na(n);
            return s ? i : ot[r] = i;
        } else {
            const a = e.cacheKey;
            if (a) {
                const r = ot[a];
                return r || (ot[a] = na(e));
            } else return na(e);
        }
    }
    const Xa = ()=>"", we = (e)=>J(e);
    function Ja(e, ...t) {
        const { fallbackFormat: a, postTranslation: r, unresolving: o, messageCompiler: n, fallbackLocale: s, messages: i } = e, [c, _] = ia(...t), p = $(_.missingWarn) ? _.missingWarn : e.missingWarn, f = $(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn, d = $(_.escapeParameter) ? _.escapeParameter : e.escapeParameter, g = !!_.resolvedMessage, m = N(_.default) || $(_.default) ? $(_.default) ? n ? c : ()=>c : _.default : a ? n ? c : ()=>c : "", w = a || m !== "", T = Ea(e, _);
        d && As(_);
        let [I, D, h] = g ? [
            c,
            T,
            i[T] || z()
        ] : zn(e, c, T, s, f, p), y = I, k = c;
        if (!g && !(N(y) || Ne(y) || we(y)) && w && (y = m, k = y), !g && (!(N(y) || Ne(y) || we(y)) || !N(D))) return o ? zt : c;
        let v = !1;
        const P = ()=>{
            v = !0;
        }, C = we(y) ? y : Qn(e, c, D, y, k, P);
        if (v) return y;
        const E = Is(e, D, h, _), U = ts(E), j = Ts(e, C, U);
        let R = r ? r(j, c) : j;
        if (d && N(R) && (R = Xr(R)), __INTLIFY_PROD_DEVTOOLS__) {
            const H = {
                timestamp: Date.now(),
                key: N(c) ? c : we(y) ? y.key : "",
                locale: D || (we(y) ? y.locale : ""),
                format: N(y) ? y : we(y) ? y.source : "",
                message: R
            };
            H.meta = fe({}, e.__meta, gs() || {}), rs(H);
        }
        return R;
    }
    function As(e) {
        Z(e.list) ? e.list = e.list.map((t)=>N(t) ? Ma(t) : t) : q(e.named) && Object.keys(e.named).forEach((t)=>{
            N(e.named[t]) && (e.named[t] = Ma(e.named[t]));
        });
    }
    function zn(e, t, a, r, o, n) {
        const { messages: s, onWarn: i, messageResolver: c, localeFallbacker: _ } = e, p = _(e, r, a);
        let f = z(), d, g = null;
        const m = "translate";
        for(let w = 0; w < p.length && (d = p[w], f = s[d] || z(), (g = c(f, t)) === null && (g = f[t]), !(N(g) || Ne(g) || we(g))); w++)if (!vs(d, p)) {
            const T = wa(e, t, d, n, m);
            T !== t && (g = T);
        }
        return [
            g,
            d,
            f
        ];
    }
    function Qn(e, t, a, r, o, n) {
        const { messageCompiler: s, warnHtmlMessage: i } = e;
        if (we(r)) {
            const _ = r;
            return _.locale = _.locale || a, _.key = _.key || t, _;
        }
        if (s == null) {
            const _ = (()=>r);
            return _.locale = a, _.key = t, _;
        }
        const c = s(r, Ss(e, a, o, r, i, n));
        return c.locale = a, c.key = t, c.source = r, c;
    }
    function Ts(e, t, a) {
        return t(a);
    }
    function ia(...e) {
        const [t, a, r] = e, o = z();
        if (!N(t) && !re(t) && !we(t) && !Ne(t)) throw Le(Ie.INVALID_ARGUMENT);
        const n = re(t) ? String(t) : (we(t), t);
        return re(a) ? o.plural = a : N(a) ? o.default = a : B(a) && !Kt(a) ? o.named = a : Z(a) && (o.list = a), re(r) ? o.plural = r : N(r) ? o.default = r : B(r) && fe(o, r), [
            n,
            o
        ];
    }
    function Ss(e, t, a, r, o, n) {
        return {
            locale: t,
            key: a,
            warnHtmlMessage: o,
            onError: (s)=>{
                throw n && n(s), s;
            },
            onCacheKey: (s)=>Kr(t, a, s)
        };
    }
    function Is(e, t, a, r) {
        const { modifiers: o, pluralRules: n, messageResolver: s, fallbackLocale: i, fallbackWarn: c, missingWarn: _, fallbackContext: p } = e, d = {
            locale: t,
            modifiers: o,
            pluralRules: n,
            messages: (g)=>{
                let m = s(a, g);
                if (m == null && p) {
                    const [, , w] = zn(p, g, t, i, c, _);
                    m = s(w, g);
                }
                if (N(m) || Ne(m)) {
                    let w = !1;
                    const I = Qn(e, g, t, m, g, ()=>{
                        w = !0;
                    });
                    return w ? Xa : I;
                } else return we(m) ? m : Xa;
            }
        };
        return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), re(r.plural) && (d.pluralIndex = r.plural), d;
    }
    function Za(e, ...t) {
        const { datetimeFormats: a, unresolving: r, fallbackLocale: o, onWarn: n, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [c, _, p, f] = la(...t), d = $(p.missingWarn) ? p.missingWarn : e.missingWarn;
        $(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn;
        const g = !!p.part, m = Ea(e, p), w = s(e, o, m);
        if (!N(c) || c === "") return new Intl.DateTimeFormat(m, f).format(_);
        let T = {}, I, D = null;
        const h = "datetime format";
        for(let v = 0; v < w.length && (I = w[v], T = a[I] || {}, D = T[c], !B(D)); v++)wa(e, c, I, d, h);
        if (!B(D) || !N(I)) return r ? zt : c;
        let y = `${I}__${c}`;
        Kt(f) || (y = `${y}__${JSON.stringify(f)}`);
        let k = i.get(y);
        return k || (k = new Intl.DateTimeFormat(I, fe({}, D, f)), i.set(y, k)), g ? k.formatToParts(_) : k.format(_);
    }
    const Xn = [
        "localeMatcher",
        "weekday",
        "era",
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
        "timeZoneName",
        "formatMatcher",
        "hour12",
        "timeZone",
        "dateStyle",
        "timeStyle",
        "calendar",
        "dayPeriod",
        "numberingSystem",
        "hourCycle",
        "fractionalSecondDigits"
    ];
    function la(...e) {
        const [t, a, r, o] = e, n = z();
        let s = z(), i;
        if (N(t)) {
            const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!c) throw Le(Ie.INVALID_ISO_DATE_ARGUMENT);
            const _ = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
            i = new Date(_);
            try {
                i.toISOString();
            } catch  {
                throw Le(Ie.INVALID_ISO_DATE_ARGUMENT);
            }
        } else if (zr(t)) {
            if (isNaN(t.getTime())) throw Le(Ie.INVALID_DATE_ARGUMENT);
            i = t;
        } else if (re(t)) i = t;
        else throw Le(Ie.INVALID_ARGUMENT);
        return N(a) ? n.key = a : B(a) && Object.keys(a).forEach((c)=>{
            Xn.includes(c) ? s[c] = a[c] : n[c] = a[c];
        }), N(r) ? n.locale = r : B(r) && (s = r), B(o) && (s = o), [
            n.key || "",
            i,
            n,
            s
        ];
    }
    function en(e, t, a) {
        const r = e;
        for(const o in a){
            const n = `${t}__${o}`;
            r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n);
        }
    }
    function tn(e, ...t) {
        const { numberFormats: a, unresolving: r, fallbackLocale: o, onWarn: n, localeFallbacker: s } = e, { __numberFormatters: i } = e, [c, _, p, f] = ca(...t), d = $(p.missingWarn) ? p.missingWarn : e.missingWarn;
        $(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn;
        const g = !!p.part, m = Ea(e, p), w = s(e, o, m);
        if (!N(c) || c === "") return new Intl.NumberFormat(m, f).format(_);
        let T = {}, I, D = null;
        const h = "number format";
        for(let v = 0; v < w.length && (I = w[v], T = a[I] || {}, D = T[c], !B(D)); v++)wa(e, c, I, d, h);
        if (!B(D) || !N(I)) return r ? zt : c;
        let y = `${I}__${c}`;
        Kt(f) || (y = `${y}__${JSON.stringify(f)}`);
        let k = i.get(y);
        return k || (k = new Intl.NumberFormat(I, fe({}, D, f)), i.set(y, k)), g ? k.formatToParts(_) : k.format(_);
    }
    const Jn = [
        "localeMatcher",
        "style",
        "currency",
        "currencyDisplay",
        "currencySign",
        "useGrouping",
        "minimumIntegerDigits",
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits",
        "compactDisplay",
        "notation",
        "signDisplay",
        "unit",
        "unitDisplay",
        "roundingMode",
        "roundingPriority",
        "roundingIncrement",
        "trailingZeroDisplay"
    ];
    function ca(...e) {
        const [t, a, r, o] = e, n = z();
        let s = z();
        if (!re(t)) throw Le(Ie.INVALID_ARGUMENT);
        const i = t;
        return N(a) ? n.key = a : B(a) && Object.keys(a).forEach((c)=>{
            Jn.includes(c) ? s[c] = a[c] : n[c] = a[c];
        }), N(r) ? n.locale = r : B(r) && (s = r), B(o) && (s = o), [
            n.key || "",
            i,
            n,
            s
        ];
    }
    function an(e, t, a) {
        const r = e;
        for(const o in a){
            const n = `${t}__${o}`;
            r.__numberFormatters.has(n) && r.__numberFormatters.delete(n);
        }
    }
    Do();
    const Ls = "9.14.5";
    function Ps() {
        typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Fe().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Fe().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Fe().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Fe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Fe().__INTLIFY_PROD_DEVTOOLS__ = !1);
    }
    const Ns = is.__EXTEND_POINT__, Re = jt(Ns);
    Re(), Re(), Re(), Re(), Re(), Re(), Re(), Re(), Re();
    const Zn = Ie.__EXTEND_POINT__, be = jt(Zn), ie = {
        UNEXPECTED_RETURN_TYPE: Zn,
        INVALID_ARGUMENT: be(),
        MUST_BE_CALL_SETUP_TOP: be(),
        NOT_INSTALLED: be(),
        NOT_AVAILABLE_IN_LEGACY_MODE: be(),
        REQUIRED_VALUE: be(),
        INVALID_VALUE: be(),
        CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: be(),
        NOT_INSTALLED_WITH_PROVIDE: be(),
        UNEXPECTED_ERROR: be(),
        NOT_COMPATIBLE_LEGACY_VUE_I18N: be(),
        BRIDGE_SUPPORT_VUE_2_ONLY: be(),
        MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: be(),
        NOT_AVAILABLE_COMPOSITION_IN_LEGACY: be(),
        __EXTEND_POINT__: be()
    };
    function ue(e, ...t) {
        return ut(e, null, void 0);
    }
    const ua = Ge("__translateVNode"), _a = Ge("__datetimeParts"), da = Ge("__numberParts"), er = Ge("__setPluralRules"), tr = Ge("__injectWithOption"), fa = Ge("__dispose");
    function Ot(e) {
        if (!q(e) || Ne(e)) return e;
        for(const t in e)if (Se(e, t)) if (!t.includes(".")) q(e[t]) && Ot(e[t]);
        else {
            const a = t.split("."), r = a.length - 1;
            let o = e, n = !1;
            for(let s = 0; s < r; s++){
                if (a[s] === "__proto__") throw new Error(`unsafe key: ${a[s]}`);
                if (a[s] in o || (o[a[s]] = z()), !q(o[a[s]])) {
                    n = !0;
                    break;
                }
                o = o[a[s]];
            }
            if (n || (Ne(o) ? Bn.includes(a[r]) || delete e[t] : (o[a[r]] = e[t], delete e[t])), !Ne(o)) {
                const s = o[a[r]];
                q(s) && Ot(s);
            }
        }
        return e;
    }
    function Qt(e, t) {
        const { messages: a, __i18n: r, messageResolver: o, flatJson: n } = t, s = B(a) ? a : Z(r) ? z() : {
            [e]: z()
        };
        if (Z(r) && r.forEach((i)=>{
            if ("locale" in i && "resource" in i) {
                const { locale: c, resource: _ } = i;
                c ? (s[c] = s[c] || z(), Wt(_, s[c])) : Wt(_, s);
            } else N(i) && Wt(JSON.parse(i), s);
        }), o == null && n) for(const i in s)Se(s, i) && Ot(s[i]);
        return s;
    }
    function ar(e) {
        return e.type;
    }
    function nr(e, t, a) {
        let r = q(t.messages) ? t.messages : z();
        "__i18nGlobal" in a && (r = Qt(e.locale.value, {
            messages: r,
            __i18n: a.__i18nGlobal
        }));
        const o = Object.keys(r);
        o.length && o.forEach((n)=>{
            e.mergeLocaleMessage(n, r[n]);
        });
        {
            if (q(t.datetimeFormats)) {
                const n = Object.keys(t.datetimeFormats);
                n.length && n.forEach((s)=>{
                    e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
                });
            }
            if (q(t.numberFormats)) {
                const n = Object.keys(t.numberFormats);
                n.length && n.forEach((s)=>{
                    e.mergeNumberFormat(s, t.numberFormats[s]);
                });
            }
        }
    }
    function nn(e) {
        return K(yr, null, e, 0);
    }
    const rn = "__INTLIFY_META__", on = ()=>[], Os = ()=>!1;
    let sn = 0;
    function ln(e) {
        return ((t, a, r, o)=>e(a, r, Lt() || void 0, o));
    }
    const Cs = ()=>{
        const e = Lt();
        let t = null;
        return e && (t = ar(e)[rn]) ? {
            [rn]: t
        } : null;
    };
    function Aa(e = {}, t) {
        const { __root: a, __injectWithOption: r } = e, o = a === void 0, n = e.flatJson, s = Gt ? F : bn, i = !!e.translateExistCompatible;
        let c = $(e.inheritLocale) ? e.inheritLocale : !0;
        const _ = s(a && c ? a.locale.value : N(e.locale) ? e.locale : lt), p = s(a && c ? a.fallbackLocale.value : N(e.fallbackLocale) || Z(e.fallbackLocale) || B(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : _.value), f = s(Qt(_.value, e)), d = s(B(e.datetimeFormats) ? e.datetimeFormats : {
            [_.value]: {}
        }), g = s(B(e.numberFormats) ? e.numberFormats : {
            [_.value]: {}
        });
        let m = a ? a.missingWarn : $(e.missingWarn) || He(e.missingWarn) ? e.missingWarn : !0, w = a ? a.fallbackWarn : $(e.fallbackWarn) || He(e.fallbackWarn) ? e.fallbackWarn : !0, T = a ? a.fallbackRoot : $(e.fallbackRoot) ? e.fallbackRoot : !0, I = !!e.fallbackFormat, D = J(e.missing) ? e.missing : null, h = J(e.missing) ? ln(e.missing) : null, y = J(e.postTranslation) ? e.postTranslation : null, k = a ? a.warnHtmlMessage : $(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter;
        const P = a ? a.modifiers : B(e.modifiers) ? e.modifiers : {};
        let C = e.pluralRules || a && a.pluralRules, E;
        E = (()=>{
            o && ja(null);
            const b = {
                version: Ls,
                locale: _.value,
                fallbackLocale: p.value,
                messages: f.value,
                modifiers: P,
                pluralRules: C,
                missing: h === null ? void 0 : h,
                missingWarn: m,
                fallbackWarn: w,
                fallbackFormat: I,
                unresolving: !0,
                postTranslation: y === null ? void 0 : y,
                warnHtmlMessage: k,
                escapeParameter: v,
                messageResolver: e.messageResolver,
                messageCompiler: e.messageCompiler,
                __meta: {
                    framework: "vue"
                }
            };
            b.datetimeFormats = d.value, b.numberFormats = g.value, b.__datetimeFormatters = B(E) ? E.__datetimeFormatters : void 0, b.__numberFormatters = B(E) ? E.__numberFormatters : void 0;
            const S = ys(b);
            return o && ja(S), S;
        })(), St(E, _.value, p.value);
        function j() {
            return [
                _.value,
                p.value,
                f.value,
                d.value,
                g.value
            ];
        }
        const R = se({
            get: ()=>_.value,
            set: (b)=>{
                _.value = b, E.locale = _.value;
            }
        }), H = se({
            get: ()=>p.value,
            set: (b)=>{
                p.value = b, E.fallbackLocale = p.value, St(E, _.value, b);
            }
        }), me = se(()=>f.value), ye = se(()=>d.value), Ee = se(()=>g.value);
        function ft() {
            return J(y) ? y : null;
        }
        function mt(b) {
            y = b, E.postTranslation = b;
        }
        function pt() {
            return D;
        }
        function gt(b) {
            b !== null && (h = ln(b)), D = b, E.missing = h;
        }
        const Ae = (b, S, Q, ne, xe, Mt)=>{
            j();
            let tt;
            try {
                __INTLIFY_PROD_DEVTOOLS__, o || (E.fallbackContext = a ? hs() : void 0), tt = b(E);
            } finally{
                __INTLIFY_PROD_DEVTOOLS__, o || (E.fallbackContext = void 0);
            }
            if (Q !== "translate exists" && re(tt) && tt === zt || Q === "translate exists" && !tt) {
                const [fr, zl] = S();
                return a && T ? ne(a) : xe(fr);
            } else {
                if (Mt(tt)) return tt;
                throw ue(ie.UNEXPECTED_RETURN_TYPE);
            }
        };
        function Ye(...b) {
            return Ae((S)=>Reflect.apply(Ja, null, [
                    S,
                    ...b
                ]), ()=>ia(...b), "translate", (S)=>Reflect.apply(S.t, S, [
                    ...b
                ]), (S)=>S, (S)=>N(S));
        }
        function ht(...b) {
            const [S, Q, ne] = b;
            if (ne && !q(ne)) throw ue(ie.INVALID_ARGUMENT);
            return Ye(S, Q, fe({
                resolvedMessage: !0
            }, ne || {}));
        }
        function Xe(...b) {
            return Ae((S)=>Reflect.apply(Za, null, [
                    S,
                    ...b
                ]), ()=>la(...b), "datetime format", (S)=>Reflect.apply(S.d, S, [
                    ...b
                ]), ()=>qa, (S)=>N(S));
        }
        function yt(...b) {
            return Ae((S)=>Reflect.apply(tn, null, [
                    S,
                    ...b
                ]), ()=>ca(...b), "number format", (S)=>Reflect.apply(S.n, S, [
                    ...b
                ]), ()=>qa, (S)=>N(S));
        }
        function bt(b) {
            return b.map((S)=>N(S) || re(S) || $(S) ? nn(String(S)) : S);
        }
        const vt = {
            normalize: bt,
            interpolate: (b)=>b,
            type: "vnode"
        };
        function kt(...b) {
            return Ae((S)=>{
                let Q;
                const ne = S;
                try {
                    ne.processor = vt, Q = Reflect.apply(Ja, null, [
                        ne,
                        ...b
                    ]);
                } finally{
                    ne.processor = null;
                }
                return Q;
            }, ()=>ia(...b), "translate", (S)=>S[ua](...b), (S)=>[
                    nn(S)
                ], (S)=>Z(S));
        }
        function Je(...b) {
            return Ae((S)=>Reflect.apply(tn, null, [
                    S,
                    ...b
                ]), ()=>ca(...b), "number format", (S)=>S[da](...b), on, (S)=>N(S) || Z(S));
        }
        function Et(...b) {
            return Ae((S)=>Reflect.apply(Za, null, [
                    S,
                    ...b
                ]), ()=>la(...b), "datetime format", (S)=>S[_a](...b), on, (S)=>N(S) || Z(S));
        }
        function wt(b) {
            C = b, E.pluralRules = C;
        }
        function At(b, S) {
            return Ae(()=>{
                if (!b) return !1;
                const Q = N(S) ? S : _.value, ne = Ze(Q), xe = E.messageResolver(ne, b);
                return i ? xe != null : Ne(xe) || we(xe) || N(xe);
            }, ()=>[
                    b
                ], "translate exists", (Q)=>Reflect.apply(Q.te, Q, [
                    b,
                    S
                ]), Os, (Q)=>$(Q));
        }
        function L(b) {
            let S = null;
            const Q = $n(E, p.value, _.value);
            for(let ne = 0; ne < Q.length; ne++){
                const xe = f.value[Q[ne]] || {}, Mt = E.messageResolver(xe, b);
                if (Mt != null) {
                    S = Mt;
                    break;
                }
            }
            return S;
        }
        function Y(b) {
            const S = L(b);
            return S ?? (a ? a.tm(b) || {} : {});
        }
        function Ze(b) {
            return f.value[b] || {};
        }
        function et(b, S) {
            if (n) {
                const Q = {
                    [b]: S
                };
                for(const ne in Q)Se(Q, ne) && Ot(Q[ne]);
                S = Q[b];
            }
            f.value[b] = S, E.messages = f.value;
        }
        function Tt(b, S) {
            f.value[b] = f.value[b] || {};
            const Q = {
                [b]: S
            };
            if (n) for(const ne in Q)Se(Q, ne) && Ot(Q[ne]);
            S = Q[b], Wt(S, f.value[b]), E.messages = f.value;
        }
        function ea(b) {
            return d.value[b] || {};
        }
        function l(b, S) {
            d.value[b] = S, E.datetimeFormats = d.value, en(E, b, S);
        }
        function u(b, S) {
            d.value[b] = fe(d.value[b] || {}, S), E.datetimeFormats = d.value, en(E, b, S);
        }
        function A(b) {
            return g.value[b] || {};
        }
        function M(b, S) {
            g.value[b] = S, E.numberFormats = g.value, an(E, b, S);
        }
        function ee(b, S) {
            g.value[b] = fe(g.value[b] || {}, S), E.numberFormats = g.value, an(E, b, S);
        }
        sn++, a && Gt && (Oe(a.locale, (b)=>{
            c && (_.value = b, E.locale = b, St(E, _.value, p.value));
        }), Oe(a.fallbackLocale, (b)=>{
            c && (p.value = b, E.fallbackLocale = b, St(E, _.value, p.value));
        }));
        const W = {
            id: sn,
            locale: R,
            fallbackLocale: H,
            get inheritLocale () {
                return c;
            },
            set inheritLocale (b){
                c = b, b && a && (_.value = a.locale.value, p.value = a.fallbackLocale.value, St(E, _.value, p.value));
            },
            get availableLocales () {
                return Object.keys(f.value).sort();
            },
            messages: me,
            get modifiers () {
                return P;
            },
            get pluralRules () {
                return C || {};
            },
            get isGlobal () {
                return o;
            },
            get missingWarn () {
                return m;
            },
            set missingWarn (b){
                m = b, E.missingWarn = m;
            },
            get fallbackWarn () {
                return w;
            },
            set fallbackWarn (b){
                w = b, E.fallbackWarn = w;
            },
            get fallbackRoot () {
                return T;
            },
            set fallbackRoot (b){
                T = b;
            },
            get fallbackFormat () {
                return I;
            },
            set fallbackFormat (b){
                I = b, E.fallbackFormat = I;
            },
            get warnHtmlMessage () {
                return k;
            },
            set warnHtmlMessage (b){
                k = b, E.warnHtmlMessage = b;
            },
            get escapeParameter () {
                return v;
            },
            set escapeParameter (b){
                v = b, E.escapeParameter = b;
            },
            t: Ye,
            getLocaleMessage: Ze,
            setLocaleMessage: et,
            mergeLocaleMessage: Tt,
            getPostTranslationHandler: ft,
            setPostTranslationHandler: mt,
            getMissingHandler: pt,
            setMissingHandler: gt,
            [er]: wt
        };
        return W.datetimeFormats = ye, W.numberFormats = Ee, W.rt = ht, W.te = At, W.tm = Y, W.d = Xe, W.n = yt, W.getDateTimeFormat = ea, W.setDateTimeFormat = l, W.mergeDateTimeFormat = u, W.getNumberFormat = A, W.setNumberFormat = M, W.mergeNumberFormat = ee, W[tr] = r, W[ua] = kt, W[_a] = Et, W[da] = Je, W;
    }
    function Ds(e) {
        const t = N(e.locale) ? e.locale : lt, a = N(e.fallbackLocale) || Z(e.fallbackLocale) || B(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = J(e.missing) ? e.missing : void 0, o = $(e.silentTranslationWarn) || He(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, n = $(e.silentFallbackWarn) || He(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, s = $(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, c = B(e.modifiers) ? e.modifiers : {}, _ = e.pluralizationRules, p = J(e.postTranslation) ? e.postTranslation : void 0, f = N(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, d = !!e.escapeParameterHtml, g = $(e.sync) ? e.sync : !0;
        let m = e.messages;
        if (B(e.sharedMessages)) {
            const v = e.sharedMessages;
            m = Object.keys(v).reduce((C, E)=>{
                const U = C[E] || (C[E] = {});
                return fe(U, v[E]), C;
            }, m || {});
        }
        const { __i18n: w, __root: T, __injectWithOption: I } = e, D = e.datetimeFormats, h = e.numberFormats, y = e.flatJson, k = e.translateExistCompatible;
        return {
            locale: t,
            fallbackLocale: a,
            messages: m,
            flatJson: y,
            datetimeFormats: D,
            numberFormats: h,
            missing: r,
            missingWarn: o,
            fallbackWarn: n,
            fallbackRoot: s,
            fallbackFormat: i,
            modifiers: c,
            pluralRules: _,
            postTranslation: p,
            warnHtmlMessage: f,
            escapeParameter: d,
            messageResolver: e.messageResolver,
            inheritLocale: g,
            translateExistCompatible: k,
            __i18n: w,
            __root: T,
            __injectWithOption: I
        };
    }
    function ma(e = {}, t) {
        {
            const a = Aa(Ds(e)), { __extender: r } = e, o = {
                id: a.id,
                get locale () {
                    return a.locale.value;
                },
                set locale (n){
                    a.locale.value = n;
                },
                get fallbackLocale () {
                    return a.fallbackLocale.value;
                },
                set fallbackLocale (n){
                    a.fallbackLocale.value = n;
                },
                get messages () {
                    return a.messages.value;
                },
                get datetimeFormats () {
                    return a.datetimeFormats.value;
                },
                get numberFormats () {
                    return a.numberFormats.value;
                },
                get availableLocales () {
                    return a.availableLocales;
                },
                get formatter () {
                    return {
                        interpolate () {
                            return [];
                        }
                    };
                },
                set formatter (n){},
                get missing () {
                    return a.getMissingHandler();
                },
                set missing (n){
                    a.setMissingHandler(n);
                },
                get silentTranslationWarn () {
                    return $(a.missingWarn) ? !a.missingWarn : a.missingWarn;
                },
                set silentTranslationWarn (n){
                    a.missingWarn = $(n) ? !n : n;
                },
                get silentFallbackWarn () {
                    return $(a.fallbackWarn) ? !a.fallbackWarn : a.fallbackWarn;
                },
                set silentFallbackWarn (n){
                    a.fallbackWarn = $(n) ? !n : n;
                },
                get modifiers () {
                    return a.modifiers;
                },
                get formatFallbackMessages () {
                    return a.fallbackFormat;
                },
                set formatFallbackMessages (n){
                    a.fallbackFormat = n;
                },
                get postTranslation () {
                    return a.getPostTranslationHandler();
                },
                set postTranslation (n){
                    a.setPostTranslationHandler(n);
                },
                get sync () {
                    return a.inheritLocale;
                },
                set sync (n){
                    a.inheritLocale = n;
                },
                get warnHtmlInMessage () {
                    return a.warnHtmlMessage ? "warn" : "off";
                },
                set warnHtmlInMessage (n){
                    a.warnHtmlMessage = n !== "off";
                },
                get escapeParameterHtml () {
                    return a.escapeParameter;
                },
                set escapeParameterHtml (n){
                    a.escapeParameter = n;
                },
                get preserveDirectiveContent () {
                    return !0;
                },
                set preserveDirectiveContent (n){},
                get pluralizationRules () {
                    return a.pluralRules || {};
                },
                __composer: a,
                t (...n) {
                    const [s, i, c] = n, _ = {};
                    let p = null, f = null;
                    if (!N(s)) throw ue(ie.INVALID_ARGUMENT);
                    const d = s;
                    return N(i) ? _.locale = i : Z(i) ? p = i : B(i) && (f = i), Z(c) ? p = c : B(c) && (f = c), Reflect.apply(a.t, a, [
                        d,
                        p || f || {},
                        _
                    ]);
                },
                rt (...n) {
                    return Reflect.apply(a.rt, a, [
                        ...n
                    ]);
                },
                tc (...n) {
                    const [s, i, c] = n, _ = {
                        plural: 1
                    };
                    let p = null, f = null;
                    if (!N(s)) throw ue(ie.INVALID_ARGUMENT);
                    const d = s;
                    return N(i) ? _.locale = i : re(i) ? _.plural = i : Z(i) ? p = i : B(i) && (f = i), N(c) ? _.locale = c : Z(c) ? p = c : B(c) && (f = c), Reflect.apply(a.t, a, [
                        d,
                        p || f || {},
                        _
                    ]);
                },
                te (n, s) {
                    return a.te(n, s);
                },
                tm (n) {
                    return a.tm(n);
                },
                getLocaleMessage (n) {
                    return a.getLocaleMessage(n);
                },
                setLocaleMessage (n, s) {
                    a.setLocaleMessage(n, s);
                },
                mergeLocaleMessage (n, s) {
                    a.mergeLocaleMessage(n, s);
                },
                d (...n) {
                    return Reflect.apply(a.d, a, [
                        ...n
                    ]);
                },
                getDateTimeFormat (n) {
                    return a.getDateTimeFormat(n);
                },
                setDateTimeFormat (n, s) {
                    a.setDateTimeFormat(n, s);
                },
                mergeDateTimeFormat (n, s) {
                    a.mergeDateTimeFormat(n, s);
                },
                n (...n) {
                    return Reflect.apply(a.n, a, [
                        ...n
                    ]);
                },
                getNumberFormat (n) {
                    return a.getNumberFormat(n);
                },
                setNumberFormat (n, s) {
                    a.setNumberFormat(n, s);
                },
                mergeNumberFormat (n, s) {
                    a.mergeNumberFormat(n, s);
                },
                getChoiceIndex (n, s) {
                    return -1;
                }
            };
            return o.__extender = r, o;
        }
    }
    const Ta = {
        tag: {
            type: [
                String,
                Object
            ]
        },
        locale: {
            type: String
        },
        scope: {
            type: String,
            validator: (e)=>e === "parent" || e === "global",
            default: "parent"
        },
        i18n: {
            type: Object
        }
    };
    function Rs({ slots: e }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o)=>[
                ...r,
                ...o.type === $t ? o.children : [
                    o
                ]
            ], []) : t.reduce((a, r)=>{
            const o = e[r];
            return o && (a[r] = o()), a;
        }, z());
    }
    function rr(e) {
        return $t;
    }
    const Ms = Ct({
        name: "i18n-t",
        props: fe({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [
                    Number,
                    String
                ],
                validator: (e)=>re(e) || !isNaN(e)
            }
        }, Ta),
        setup (e, t) {
            const { slots: a, attrs: r } = t, o = e.i18n || _t({
                useScope: e.scope,
                __useComponent: !0
            });
            return ()=>{
                const n = Object.keys(a).filter((f)=>f !== "_"), s = z();
                e.locale && (s.locale = e.locale), e.plural !== void 0 && (s.plural = N(e.plural) ? +e.plural : e.plural);
                const i = Rs(t, n), c = o[ua](e.keypath, i, s), _ = fe(z(), r), p = N(e.tag) || q(e.tag) ? e.tag : rr();
                return Ue(p, _, c);
            };
        }
    }), cn = Ms;
    function Fs(e) {
        return Z(e) && !N(e[0]);
    }
    function or(e, t, a, r) {
        const { slots: o, attrs: n } = t;
        return ()=>{
            const s = {
                part: !0
            };
            let i = z();
            e.locale && (s.locale = e.locale), N(e.format) ? s.key = e.format : q(e.format) && (N(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((d, g)=>a.includes(g) ? fe(z(), d, {
                    [g]: e.format[g]
                }) : d, z()));
            const c = r(e.value, s, i);
            let _ = [
                s.key
            ];
            Z(c) ? _ = c.map((d, g)=>{
                const m = o[d.type], w = m ? m({
                    [d.type]: d.value,
                    index: g,
                    parts: c
                }) : [
                    d.value
                ];
                return Fs(w) && (w[0].key = `${d.type}-${g}`), w;
            }) : N(c) && (_ = [
                c
            ]);
            const p = fe(z(), n), f = N(e.tag) || q(e.tag) ? e.tag : rr();
            return Ue(f, p, _);
        };
    }
    const Us = Ct({
        name: "i18n-n",
        props: fe({
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [
                    String,
                    Object
                ]
            }
        }, Ta),
        setup (e, t) {
            const a = e.i18n || _t({
                useScope: e.scope,
                __useComponent: !0
            });
            return or(e, t, Jn, (...r)=>a[da](...r));
        }
    }), un = Us, xs = Ct({
        name: "i18n-d",
        props: fe({
            value: {
                type: [
                    Number,
                    Date
                ],
                required: !0
            },
            format: {
                type: [
                    String,
                    Object
                ]
            }
        }, Ta),
        setup (e, t) {
            const a = e.i18n || _t({
                useScope: e.scope,
                __useComponent: !0
            });
            return or(e, t, Xn, (...r)=>a[_a](...r));
        }
    }), _n = xs;
    function Bs(e, t) {
        const a = e;
        if (e.mode === "composition") return a.__getInstance(t) || e.global;
        {
            const r = a.__getInstance(t);
            return r != null ? r.__composer : e.global.__composer;
        }
    }
    function Ws(e) {
        const t = (s)=>{
            const { instance: i, modifiers: c, value: _ } = s;
            if (!i || !i.$) throw ue(ie.UNEXPECTED_ERROR);
            const p = Bs(e, i.$), f = dn(_);
            return [
                Reflect.apply(p.t, p, [
                    ...fn(f)
                ]),
                p
            ];
        };
        return {
            created: (s, i)=>{
                const [c, _] = t(i);
                Gt && e.global === _ && (s.__i18nWatcher = Oe(_.locale, ()=>{
                    i.instance && i.instance.$forceUpdate();
                })), s.__composer = _, s.textContent = c;
            },
            unmounted: (s)=>{
                Gt && s.__i18nWatcher && (s.__i18nWatcher(), s.__i18nWatcher = void 0, delete s.__i18nWatcher), s.__composer && (s.__composer = void 0, delete s.__composer);
            },
            beforeUpdate: (s, { value: i })=>{
                if (s.__composer) {
                    const c = s.__composer, _ = dn(i);
                    s.textContent = Reflect.apply(c.t, c, [
                        ...fn(_)
                    ]);
                }
            },
            getSSRProps: (s)=>{
                const [i] = t(s);
                return {
                    textContent: i
                };
            }
        };
    }
    function dn(e) {
        if (N(e)) return {
            path: e
        };
        if (B(e)) {
            if (!("path" in e)) throw ue(ie.REQUIRED_VALUE, "path");
            return e;
        } else throw ue(ie.INVALID_VALUE);
    }
    function fn(e) {
        const { path: t, locale: a, args: r, choice: o, plural: n } = e, s = {}, i = r || {};
        return N(a) && (s.locale = a), re(o) && (s.plural = o), re(n) && (s.plural = n), [
            t,
            i,
            s
        ];
    }
    function $s(e, t, ...a) {
        const r = B(a[0]) ? a[0] : {}, o = !!r.useI18nComponentName;
        (!$(r.globalInstall) || r.globalInstall) && ([
            o ? "i18n" : cn.name,
            "I18nT"
        ].forEach((s)=>e.component(s, cn)), [
            un.name,
            "I18nN"
        ].forEach((s)=>e.component(s, un)), [
            _n.name,
            "I18nD"
        ].forEach((s)=>e.component(s, _n))), e.directive("t", Ws(t));
    }
    function Hs(e, t, a) {
        return {
            beforeCreate () {
                const r = Lt();
                if (!r) throw ue(ie.UNEXPECTED_ERROR);
                const o = this.$options;
                if (o.i18n) {
                    const n = o.i18n;
                    if (o.__i18n && (n.__i18n = o.__i18n), n.__root = t, this === this.$root) this.$i18n = mn(e, n);
                    else {
                        n.__injectWithOption = !0, n.__extender = a.__vueI18nExtend, this.$i18n = ma(n);
                        const s = this.$i18n;
                        s.__extender && (s.__disposer = s.__extender(this.$i18n));
                    }
                } else if (o.__i18n) if (this === this.$root) this.$i18n = mn(e, o);
                else {
                    this.$i18n = ma({
                        __i18n: o.__i18n,
                        __injectWithOption: !0,
                        __extender: a.__vueI18nExtend,
                        __root: t
                    });
                    const n = this.$i18n;
                    n.__extender && (n.__disposer = n.__extender(this.$i18n));
                }
                else this.$i18n = e;
                o.__i18nGlobal && nr(t, o, o), this.$t = (...n)=>this.$i18n.t(...n), this.$rt = (...n)=>this.$i18n.rt(...n), this.$tc = (...n)=>this.$i18n.tc(...n), this.$te = (n, s)=>this.$i18n.te(n, s), this.$d = (...n)=>this.$i18n.d(...n), this.$n = (...n)=>this.$i18n.n(...n), this.$tm = (n)=>this.$i18n.tm(n), a.__setInstance(r, this.$i18n);
            },
            mounted () {},
            unmounted () {
                const r = Lt();
                if (!r) throw ue(ie.UNEXPECTED_ERROR);
                const o = this.$i18n;
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, o.__disposer && (o.__disposer(), delete o.__disposer, delete o.__extender), a.__deleteInstance(r), delete this.$i18n;
            }
        };
    }
    function mn(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[er](t.pluralizationRules || e.pluralizationRules);
        const a = Qt(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(a).forEach((r)=>e.mergeLocaleMessage(r, a[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r)=>e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r)=>e.mergeNumberFormat(r, t.numberFormats[r])), e;
    }
    const Gs = Ge("global-vue-i18n");
    function Vs(e = {}, t) {
        const a = __VUE_I18N_LEGACY_API__ && $(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = $(e.globalInjection) ? e.globalInjection : !0, o = __VUE_I18N_LEGACY_API__ && a ? !!e.allowComposition : !0, n = new Map, [s, i] = qs(e, a), c = Ge("");
        function _(d) {
            return n.get(d) || null;
        }
        function p(d, g) {
            n.set(d, g);
        }
        function f(d) {
            n.delete(d);
        }
        {
            const d = {
                get mode () {
                    return __VUE_I18N_LEGACY_API__ && a ? "legacy" : "composition";
                },
                get allowComposition () {
                    return o;
                },
                async install (g, ...m) {
                    if (g.__VUE_I18N_SYMBOL__ = c, g.provide(g.__VUE_I18N_SYMBOL__, d), B(m[0])) {
                        const I = m[0];
                        d.__composerExtend = I.__composerExtend, d.__vueI18nExtend = I.__vueI18nExtend;
                    }
                    let w = null;
                    !a && r && (w = ei(g, d.global)), __VUE_I18N_FULL_INSTALL__ && $s(g, d, ...m), __VUE_I18N_LEGACY_API__ && a && g.mixin(Hs(i, i.__composer, d));
                    const T = g.unmount;
                    g.unmount = ()=>{
                        w && w(), d.dispose(), T();
                    };
                },
                get global () {
                    return i;
                },
                dispose () {
                    s.stop();
                },
                __instances: n,
                __getInstance: _,
                __setInstance: p,
                __deleteInstance: f
            };
            return d;
        }
    }
    _t = function(e = {}) {
        const t = Lt();
        if (t == null) throw ue(ie.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw ue(ie.NOT_INSTALLED);
        const a = Ys(t), r = js(a), o = ar(t), n = Ks(e, o);
        if (__VUE_I18N_LEGACY_API__ && a.mode === "legacy" && !e.__useComponent) {
            if (!a.allowComposition) throw ue(ie.NOT_AVAILABLE_IN_LEGACY_MODE);
            return Js(t, n, r, e);
        }
        if (n === "global") return nr(r, e, o), r;
        if (n === "parent") {
            let c = zs(a, t, e.__useComponent);
            return c == null && (c = r), c;
        }
        const s = a;
        let i = s.__getInstance(t);
        if (i == null) {
            const c = fe({}, e);
            "__i18n" in o && (c.__i18n = o.__i18n), r && (c.__root = r), i = Aa(c), s.__composerExtend && (i[fa] = s.__composerExtend(i)), Xs(s, t, i), s.__setInstance(t, i);
        }
        return i;
    };
    function qs(e, t, a) {
        const r = mr();
        {
            const o = __VUE_I18N_LEGACY_API__ && t ? r.run(()=>ma(e)) : r.run(()=>Aa(e));
            if (o == null) throw ue(ie.UNEXPECTED_ERROR);
            return [
                r,
                o
            ];
        }
    }
    function Ys(e) {
        {
            const t = gr(e.isCE ? Gs : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw ue(e.isCE ? ie.NOT_INSTALLED_WITH_PROVIDE : ie.UNEXPECTED_ERROR);
            return t;
        }
    }
    function Ks(e, t) {
        return Kt(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
    }
    function js(e) {
        return e.mode === "composition" ? e.global : e.global.__composer;
    }
    function zs(e, t, a = !1) {
        let r = null;
        const o = t.root;
        let n = Qs(t, a);
        for(; n != null;){
            const s = e;
            if (e.mode === "composition") r = s.__getInstance(n);
            else if (__VUE_I18N_LEGACY_API__) {
                const i = s.__getInstance(n);
                i != null && (r = i.__composer, a && r && !r[tr] && (r = null));
            }
            if (r != null || o === n) break;
            n = n.parent;
        }
        return r;
    }
    function Qs(e, t = !1) {
        return e == null ? null : t && e.vnode.ctx || e.parent;
    }
    function Xs(e, t, a) {
        qt(()=>{}, t), vn(()=>{
            const r = a;
            e.__deleteInstance(t);
            const o = r[fa];
            o && (o(), delete r[fa]);
        }, t);
    }
    function Js(e, t, a, r = {}) {
        const o = t === "local", n = bn(null);
        if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw ue(ie.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const s = $(r.inheritLocale) ? r.inheritLocale : !N(r.locale), i = F(!o || s ? a.locale.value : N(r.locale) ? r.locale : lt), c = F(!o || s ? a.fallbackLocale.value : N(r.fallbackLocale) || Z(r.fallbackLocale) || B(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value), _ = F(Qt(i.value, r)), p = F(B(r.datetimeFormats) ? r.datetimeFormats : {
            [i.value]: {}
        }), f = F(B(r.numberFormats) ? r.numberFormats : {
            [i.value]: {}
        }), d = o ? a.missingWarn : $(r.missingWarn) || He(r.missingWarn) ? r.missingWarn : !0, g = o ? a.fallbackWarn : $(r.fallbackWarn) || He(r.fallbackWarn) ? r.fallbackWarn : !0, m = o ? a.fallbackRoot : $(r.fallbackRoot) ? r.fallbackRoot : !0, w = !!r.fallbackFormat, T = J(r.missing) ? r.missing : null, I = J(r.postTranslation) ? r.postTranslation : null, D = o ? a.warnHtmlMessage : $(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, h = !!r.escapeParameter, y = o ? a.modifiers : B(r.modifiers) ? r.modifiers : {}, k = r.pluralRules || o && a.pluralRules;
        function v() {
            return [
                i.value,
                c.value,
                _.value,
                p.value,
                f.value
            ];
        }
        const P = se({
            get: ()=>n.value ? n.value.locale.value : i.value,
            set: (L)=>{
                n.value && (n.value.locale.value = L), i.value = L;
            }
        }), C = se({
            get: ()=>n.value ? n.value.fallbackLocale.value : c.value,
            set: (L)=>{
                n.value && (n.value.fallbackLocale.value = L), c.value = L;
            }
        }), E = se(()=>n.value ? n.value.messages.value : _.value), U = se(()=>p.value), j = se(()=>f.value);
        function R() {
            return n.value ? n.value.getPostTranslationHandler() : I;
        }
        function H(L) {
            n.value && n.value.setPostTranslationHandler(L);
        }
        function me() {
            return n.value ? n.value.getMissingHandler() : T;
        }
        function ye(L) {
            n.value && n.value.setMissingHandler(L);
        }
        function Ee(L) {
            return v(), L();
        }
        function ft(...L) {
            return n.value ? Ee(()=>Reflect.apply(n.value.t, null, [
                    ...L
                ])) : Ee(()=>"");
        }
        function mt(...L) {
            return n.value ? Reflect.apply(n.value.rt, null, [
                ...L
            ]) : "";
        }
        function pt(...L) {
            return n.value ? Ee(()=>Reflect.apply(n.value.d, null, [
                    ...L
                ])) : Ee(()=>"");
        }
        function gt(...L) {
            return n.value ? Ee(()=>Reflect.apply(n.value.n, null, [
                    ...L
                ])) : Ee(()=>"");
        }
        function Ae(L) {
            return n.value ? n.value.tm(L) : {};
        }
        function Ye(L, Y) {
            return n.value ? n.value.te(L, Y) : !1;
        }
        function ht(L) {
            return n.value ? n.value.getLocaleMessage(L) : {};
        }
        function Xe(L, Y) {
            n.value && (n.value.setLocaleMessage(L, Y), _.value[L] = Y);
        }
        function yt(L, Y) {
            n.value && n.value.mergeLocaleMessage(L, Y);
        }
        function bt(L) {
            return n.value ? n.value.getDateTimeFormat(L) : {};
        }
        function Rt(L, Y) {
            n.value && (n.value.setDateTimeFormat(L, Y), p.value[L] = Y);
        }
        function vt(L, Y) {
            n.value && n.value.mergeDateTimeFormat(L, Y);
        }
        function kt(L) {
            return n.value ? n.value.getNumberFormat(L) : {};
        }
        function Je(L, Y) {
            n.value && (n.value.setNumberFormat(L, Y), f.value[L] = Y);
        }
        function Et(L, Y) {
            n.value && n.value.mergeNumberFormat(L, Y);
        }
        const wt = {
            get id () {
                return n.value ? n.value.id : -1;
            },
            locale: P,
            fallbackLocale: C,
            messages: E,
            datetimeFormats: U,
            numberFormats: j,
            get inheritLocale () {
                return n.value ? n.value.inheritLocale : s;
            },
            set inheritLocale (L){
                n.value && (n.value.inheritLocale = L);
            },
            get availableLocales () {
                return n.value ? n.value.availableLocales : Object.keys(_.value);
            },
            get modifiers () {
                return n.value ? n.value.modifiers : y;
            },
            get pluralRules () {
                return n.value ? n.value.pluralRules : k;
            },
            get isGlobal () {
                return n.value ? n.value.isGlobal : !1;
            },
            get missingWarn () {
                return n.value ? n.value.missingWarn : d;
            },
            set missingWarn (L){
                n.value && (n.value.missingWarn = L);
            },
            get fallbackWarn () {
                return n.value ? n.value.fallbackWarn : g;
            },
            set fallbackWarn (L){
                n.value && (n.value.missingWarn = L);
            },
            get fallbackRoot () {
                return n.value ? n.value.fallbackRoot : m;
            },
            set fallbackRoot (L){
                n.value && (n.value.fallbackRoot = L);
            },
            get fallbackFormat () {
                return n.value ? n.value.fallbackFormat : w;
            },
            set fallbackFormat (L){
                n.value && (n.value.fallbackFormat = L);
            },
            get warnHtmlMessage () {
                return n.value ? n.value.warnHtmlMessage : D;
            },
            set warnHtmlMessage (L){
                n.value && (n.value.warnHtmlMessage = L);
            },
            get escapeParameter () {
                return n.value ? n.value.escapeParameter : h;
            },
            set escapeParameter (L){
                n.value && (n.value.escapeParameter = L);
            },
            t: ft,
            getPostTranslationHandler: R,
            setPostTranslationHandler: H,
            getMissingHandler: me,
            setMissingHandler: ye,
            rt: mt,
            d: pt,
            n: gt,
            tm: Ae,
            te: Ye,
            getLocaleMessage: ht,
            setLocaleMessage: Xe,
            mergeLocaleMessage: yt,
            getDateTimeFormat: bt,
            setDateTimeFormat: Rt,
            mergeDateTimeFormat: vt,
            getNumberFormat: kt,
            setNumberFormat: Je,
            mergeNumberFormat: Et
        };
        function At(L) {
            L.locale.value = i.value, L.fallbackLocale.value = c.value, Object.keys(_.value).forEach((Y)=>{
                L.mergeLocaleMessage(Y, _.value[Y]);
            }), Object.keys(p.value).forEach((Y)=>{
                L.mergeDateTimeFormat(Y, p.value[Y]);
            }), Object.keys(f.value).forEach((Y)=>{
                L.mergeNumberFormat(Y, f.value[Y]);
            }), L.escapeParameter = h, L.fallbackFormat = w, L.fallbackRoot = m, L.fallbackWarn = g, L.missingWarn = d, L.warnHtmlMessage = D;
        }
        return hr(()=>{
            if (e.proxy == null || e.proxy.$i18n == null) throw ue(ie.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const L = n.value = e.proxy.$i18n.__composer;
            t === "global" ? (i.value = L.locale.value, c.value = L.fallbackLocale.value, _.value = L.messages.value, p.value = L.datetimeFormats.value, f.value = L.numberFormats.value) : o && At(L);
        }), wt;
    }
    const Zs = [
        "locale",
        "fallbackLocale",
        "availableLocales"
    ], pn = [
        "t",
        "rt",
        "d",
        "n",
        "tm",
        "te"
    ];
    function ei(e, t) {
        const a = Object.create(null);
        return Zs.forEach((o)=>{
            const n = Object.getOwnPropertyDescriptor(t, o);
            if (!n) throw ue(ie.UNEXPECTED_ERROR);
            const s = pr(n.value) ? {
                get () {
                    return n.value.value;
                },
                set (i) {
                    n.value.value = i;
                }
            } : {
                get () {
                    return n.get && n.get();
                }
            };
            Object.defineProperty(a, o, s);
        }), e.config.globalProperties.$i18n = a, pn.forEach((o)=>{
            const n = Object.getOwnPropertyDescriptor(t, o);
            if (!n || !n.value) throw ue(ie.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${o}`, n);
        }), ()=>{
            delete e.config.globalProperties.$i18n, pn.forEach((o)=>{
                delete e.config.globalProperties[`$${o}`];
            });
        };
    }
    Ps();
    __INTLIFY_JIT_COMPILATION__ ? Ka(ws) : Ka(Es);
    fs(Ko);
    ms($n);
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const e = Fe();
        e.__INTLIFY__ = !0, as(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
    }
    let ti, ai, ni, ri, oi, si, ii, li, ci, ui, _i, di, fi, mi, pi, gi, hi, yi, bi, vi, ki, Ei, wi, Ai, Ti, Si, Ii, Li, Pi, Ni, Oi, Ci, Di, Ri, Mi, Fi, Ui, xi, Bi, Wi, Gi, Ce, Vi;
    ti = {
        confirm: "确定",
        cancel: "取消",
        setup: "去设置",
        disable: "停用",
        tip: "提示",
        success: "操作成功",
        error: "操作失败",
        save: "保存",
        delete: "删除",
        edit: "编辑",
        add: "添加",
        close: "关闭",
        back: "返回",
        copy: "复制",
        refresh: "刷新页面",
        loading_failed: "组件加载失败，请检查网络连接",
        copy_success: "复制成功",
        copy_fail: "复制失败",
        offline_mode: "网络已断开，当前应用正处于离线缓存模式",
        loading_data: "数据获取中, 请稍候...",
        resource_loading: "资源加载中",
        data_security: "数据安全",
        warning: "警告",
        uncategorized: "未分类",
        all: "全部",
        encrypted: "加密",
        plaintext: "明文",
        remove: "移除",
        other: "其它",
        no_data: "暂无数据",
        understand: "了解",
        offline_tag: "离线模式",
        network_error_tag: "网络异常"
    };
    ai = {
        install: "安装应用",
        install_desc: "将 NodeAuth 安装到设备，获得更无缝和支持离线的独立应用体验",
        already_installed: "已安装",
        update_available: "更新可用",
        update_ready: "NodeAuth 核心已准备好新的版本构建，请点击下方按钮完成升级。",
        pwa_refresh: "立即升级",
        update_success: "升级成功",
        offline_feature_error_title: "首次使用需在线",
        offline_feature_error_desc: "该高级功能首次加载需要下载必要的依赖组件。您目前正处于断网或离线状态，请连接网络后再试。"
    };
    ni = {
        placeholder: "搜索服务名称、账号或分类...",
        no_matching_accounts: "没有找到匹配的账号",
        selected_items: "已选 {count} 项",
        select_all_loaded: "全选已加载"
    };
    ri = {
        vault: "我的账号",
        add: "添加账号",
        backup: "云端备份",
        migration: "数据迁移",
        tools: "实用工具",
        passkey: "通行密钥",
        security: "安全设置",
        settings: "系统设置",
        appearance: "外观设置",
        language: "语言切换",
        theme: "主题模式",
        about: "关于应用",
        logout: "退出登录",
        mobile: {
            vault: "账号",
            data: "数据",
            tools: "工具",
            settings: "设置"
        }
    };
    oi = {
        title: "关于",
        version: "版本",
        commit: "构建提交",
        platform: "运行环境",
        tagline: "一个十分安全的 2FA 服务管理工具",
        open_source_github: " GitHub 开源地址",
        documentation: "Wiki 文档"
    };
    si = {
        go_add_vault: "去添加账号",
        loading_more: "正在加载更多...",
        no_more_accounts: "到底了，没有更多账号了",
        reorder_offline_disabled: "离线模式下暂不支持拖拽排序",
        edit_account: "编辑账号",
        service_name: "服务名称 (如 Google, GitHub)",
        account_identifier: "账号标识 (如 邮箱地址)",
        category_optional: "分类 (可选)",
        empty_vault: "空空如也，快去添加你的第一个 2FA 账号吧！",
        export_account: "导出",
        add_account: "手动输入",
        add_scan: "扫码添加",
        add_mode_camera: "摄像头扫描",
        add_mode_image: "图片识别",
        service: "服务商",
        account: "账号",
        secret: "密钥",
        category: "分类",
        delete_confirm: "确定要删除 {service}吗？",
        delete_success: "账号已删除",
        delete_batch_confirm: "确定要删除选中的 {count} 个账号吗？",
        delete_batch_success: "已成功删除 {count} 个账号",
        copy_failed: "复制失败，你的浏览器可能禁用或不支持剪贴板操作",
        qr_invalid: "二维码格式无效，请扫描有效的 OTP 二维码",
        add_success: "账号添加成功",
        update_success: "账号信息已更新",
        not_generated_yet: "验证码尚未生成，请稍候",
        duplicate_confirm: "账号可能已存在，是否继续添加？",
        generate_fail: "无效的 OTP URI",
        add_account_tip: "支持通过摄像头扫码、识别图片或手动输入的方式添加账号。",
        invalid_qr_format: "二维码格式无效，请扫描有效的 OTP 二维码",
        service_label: "服务方",
        unknown_service: "未指定服务",
        account_label: "账　号",
        unnamed_account: "未命名账号",
        param_label: "参　数",
        digits_suffix: "位",
        period_suffix: "秒",
        confirm_add_title: "解析成功，确认添加？",
        input_service_placeholder: "请输入服务名称",
        input_account_placeholder: "请输入账号或邮箱",
        input_secret_label: "安全密钥 (Base32格式)",
        input_secret_placeholder: "请输入 16 位以上的安全密钥",
        generate_random_secret: "随机生成密钥",
        digits_label: "代码位数",
        digits_5: "5 位 (Steam)",
        digits_6: "6 位",
        digits_8: "8 位",
        period_label: "更新周期",
        period_30s: "30 秒",
        period_60s: "60 秒",
        algorithm_label: "算法",
        algo_sha1: "SHA1",
        algo_steam: "Steam 令牌",
        input_category_placeholder: "如 工作, 个人",
        confirm_add_btn: "确认添加",
        require_secret: "请输入安全密钥",
        secret_min_length: "密钥长度通常不少于 16 位",
        secret_invalid_char: "包含非法字符 (仅限 A-Z, 2-7)",
        require_service: "请输入服务名称",
        require_account: "请输入账号标识",
        export_qr_tip: "使用任意 2FA 应用扫描二维码即可添加此账户",
        hide_secret: "隐藏",
        show_secret: "显示",
        copy_secret: "复制密钥",
        copy_otp_url: "复制 OTPAuth 链接",
        total_count: "共 {count} 个账号",
        filtered_count: "分类「{category}」下共 {count} 个账号",
        sort_updated: "账号顺序已更新",
        sort_by: "排序方式",
        sort_name: "名称 (A-Z)",
        sort_newest: "最新添加",
        offline_pending_sync: "离线模式：有 {count} 项变更等待同步",
        pending_sync_tip: "此账号尚有变更待同步到云端",
        conflict_detected_tip: "发现同步冲突！请点击处理",
        conflict_notice: "另一台设备已修改此项，是否保留本地？",
        force_sync: "强制覆盖",
        discard_local: "放弃修改",
        conflict_force_applied: "已触发强制同步",
        conflict_discarded: "本地更改已放弃",
        batch_import_entry_title: "从其他应用批量导入数据",
        batch_import_entry_desc: "支持从 20+ 应用直接迁移"
    };
    ii = {
        appearance_desc: "个性化您的界面风格、语言以及布局显示。",
        theme_desc: "选择适合您的视觉风格",
        language_desc: "选择您偏好的界面语言",
        display_layout: "列表布局",
        layout_desc: "选择适合您的列表布局",
        layout_standard: "标准布局",
        layout_compact: "紧凑布局",
        language_changed: "语言已切换"
    };
    li = {
        title: "安全设置",
        ghost_mode: "防窥屏模式",
        ghost_mode_desc: "隐藏界面敏感验证码，离开应用自动遮挡。",
        ghost_mode_toggle: "防窥屏模糊开关",
        ghost_mode_active: "防窥屏保护已开启",
        ghost_mode_inactive: "防窥屏保护已关闭",
        offline_mode: "离线模式",
        offline_mode_desc: "开启后将物理阻断所有网络请求，应用仅使用本地同步缓存运行。",
        offline_mode_active: "离线模式已开启",
        offline_mode_inactive: "离线模式已关闭",
        offline_check_title: "离线就绪准备度检测",
        ready_label: "就绪度",
        offline_check_desc: "正在验证本地安全保险箱环境...",
        offline_incomplete_msg: "检测到部分资源尚未离线，请下载缺失资源。",
        offline_complete_msg: "检测完毕！本地环境已具备 100% 离线运行能力。",
        check_accounts: "账号信息",
        check_components: "核心组件",
        check_engine: "安全引擎",
        check_assets: "静态资源",
        check_sync: "同步状态",
        download_offline: "下载离线资源",
        downloading: "资源下载中...",
        confirm_enable_offline: "确认开启离线模式",
        sync_success: "离线资源同步完成",
        sync_partial: "资源已拉取，但部分校验未通过，请尝试再次点击下载",
        sync_failed: "同步失败",
        auth_missing: "本地安全授权已失效，请重新登录，以确保当前设备具备物理离线存储能力。",
        vault_unreachable: "无法连接到账号API，请检查网络后再试",
        insecure_context_blocked: "当前环境并不安全 (需强制 HTTPS 或使用 localhost)，浏览器禁用了离线缓存功能。",
        clipboard_cleared: "出于安全考虑，剪贴板已清空",
        clipboard_wipe_failed: "系统限制，无法自动清空剪贴板，请警惕泄露",
        devices: "登录设备管理",
        devices_desc: "查看并管理所有登录设备。",
        current_device: "当前设备",
        session_created_at: "创建于",
        sign_out_all_others: "注销其他所有设备",
        confirm_remove_device: "移除登录设备",
        confirm_remove_device_desc: "确定要强制移除设备「{device}」的登录状态吗？该设备上的账户需重新登录。",
        confirm_signout_all_desc: "确定要注销除当前设备外的所有其他登录会话吗？这是一个敏感操作。",
        cannot_remove_current: "无法移除当前正在使用的设备",
        remove: "移除",
        session_secure: "当前会话已受加密保护",
        pin_lock: "PIN码安全锁",
        pin_lock_desc: "开启后，每次冷启动或切回应用均需验证 6 位数字安全锁。",
        locked_active: "保护中",
        setup_pin_title: "设置 6 位安全锁",
        setup_pin_tip: "请设置 6 位数字 PIN 码。请务必牢记，若遗失只能重置应用并重新同步。",
        biometric_unlock: "生物特征解锁",
        biometric_unlock_desc: "在已开启安全锁的前提下，允许通过指纹或面容快速进入应用。",
        biometric_prf_unsupported: "当前硬件/系统版本暂不支持",
        app_locked: "应用已锁定",
        enter_pin_to_unlock: "请输入 6 位安全锁 PIN 码以进入",
        forgot_pin: "忘记 PIN 码？",
        unlocked: "解锁成功",
        reset_confirm_title: "确定要重置应用吗？",
        reset_confirm_message: "重置将清空所有本地缓存数据。您需要重新登录并从服务器同步数据才能继续使用。",
        unknown_device: "未知设备",
        disable_pin_title: "验证身份以停用安全锁",
        disable_pin_tip: "出于安全考虑，停用锁需要验证您当前的 6 位 PIN 码。",
        confirm_disable: "确认停用",
        pin_setup_success: "安全锁已启用",
        pin_disable_success: "安全锁已停用",
        pin_verify_failed: "PIN 码验证失败，请重试",
        biometric_enabled: "生物识别解锁已开启",
        biometric_disabled: "生物识别解锁已停用",
        biometric_hardware_unsupported_title: "硬件兼容性受限",
        biometric_hardware_unsupported_msg: "您的设备虽支持 Passkey，但暂不支持硬件级密钥派生 (PRF 扩展)。出于安全考虑，无法开启生物一键解锁，请继续使用 PIN 码保护。",
        biometric_enable_failed: "开启失败",
        auto_lock_delay: "自动锁定延迟",
        auto_lock_delay_desc: "应用切到后台后，在此时间段内切回无需重新验证。",
        delay_0s: "立即锁定",
        delay_30s: "30 秒",
        delay_1m: "1 分钟",
        delay_5m: "5 分钟",
        delay_10m: "10 分钟",
        auto_lock_delay_updated: "自动锁定延迟已更新"
    };
    ci = {
        providers: "备份配置",
        add_provider: "添加",
        cloud: "云端备份",
        restore: "恢复",
        type: "提供商类型",
        name: "配置名称",
        config: "参数配置",
        auto_backup: "自动备份",
        password_required: "静默同步需设置至少 6 位密码",
        test_success: "连接成功",
        test_failed: "连接失败",
        github_token_invalid_or_revoked: "Personal Access Token 已失效或无权限，请检查并在上方输入框重新输入验证",
        save_success: "云端备份设置成功",
        delete_provider_confirm: "确定删除该备份源吗？",
        backup_success: "云端备份完成，已成功备份数据至 {provider}",
        restore_success: "恢复成功，导入了 {count} 个新账户",
        no_new_accounts: "恢复的账户皆已存在，无新添项。",
        management: "云端备份管理",
        fetching_sources: "备份源获取中, 请稍候...",
        test_connection: "测试连接",
        connection_normal: "连接正常",
        connection_failed: "连接失败",
        auto_backup_on: "自动备份已开启",
        last_backup: "上次备份: ",
        never_backed_up: "从未",
        backup_now: "立即备份",
        restore_data: "恢复数据",
        empty_provider: "暂无备份源，请点击右上角添加",
        edit_provider: "编辑备份源",
        type_label: "类型",
        type_s3: "S3 对象存储",
        type_webdav: "WebDAV",
        type_telegram: "Telegram",
        type_gdrive: "Google Drive",
        type_onedrive: "OneDrive",
        type_baidu: "百度网盘",
        type_dropbox: "Dropbox",
        type_github: "GitHub",
        github_token: "Personal Access Token",
        github_token_placeholder: "ghp_xxxxxxxx...",
        github_owner: "仓库所有者",
        github_owner_placeholder: "例如: nodeauth",
        github_repo: "仓库名称",
        github_repo_placeholder: "例如: nodeauth-backup",
        github_branch: "分支名",
        github_branch_placeholder: "例如: main",
        require_github_token: "请填写 GitHub PAT",
        require_github_owner: "请填写仓库所有者",
        require_github_repo: "请填写仓库名称",
        type_email: "电子邮箱 (SMTP)",
        email_smtp_host: "SMTP 服务器",
        email_smtp_port: "端口",
        email_smtp_host_placeholder: "例如: smtp.gmail.com",
        email_smtp_secure: "加密方式",
        email_smtp_secure_ssl: "SSL / TLS (端口 465)",
        email_smtp_secure_tls: "STARTTLS (端口 587)",
        email_smtp_user: "发件人账号",
        email_smtp_user_placeholder: "发件人邮箱地址",
        email_smtp_password: "授权码 / 密码",
        email_smtp_from: "发件人昵称 (可选)",
        email_smtp_from_placeholder: "例如: NodeAuth Backup",
        email_smtp_to: "收件人邮箱",
        email_smtp_to_placeholder: "接收备份文件的邮箱地址",
        email_tip: "备份文件将以加密附件形式发送到指定邮箱，备份历史仅保存在本地记录中。",
        email_download_not_supported: '邮箱备份无法直接下载，请打开邮箱从附件中手动保存备份文件，然后使用"数据迁移"功能导入。',
        require_email_smtp_host: "请输入 SMTP 服务器地址",
        require_email_smtp_user: "请输入发件人账号",
        require_email_smtp_password: "请输入授权码或密码",
        require_email_smtp_to: "请输入收件人邮箱地址",
        email_backup_subject: "📦 NodeAuth 定期备份 {time}",
        email_backup_body_intro: `您好，

这是您的 NodeAuth 自动定期备份文件，请妥善保管。`,
        email_backup_body_filename: "文件名：{filename}",
        email_backup_body_time: "备份时间：{time}",
        email_backup_body_note: "注意：附件内容经过 AES-256 加密，请使用您设置的备份密码进行解密恢复。",
        email_backup_body_footer: `---
NodeAuth 自动备份系统`,
        name_label: "名称 (别名)",
        name_placeholder: "例如: 个人云盘",
        webdav_url: "WebDAV 地址",
        username: "用户名",
        password: "密码",
        modify: "修改",
        save_dir: "保存目录",
        s3_endpoint: "Endpoint (API 地址)",
        s3_bucket: "Bucket (存储桶名称)",
        s3_region: "Region (区域)",
        s3_path_prefix: "存储路径前缀 (可选)",
        auth_with_google: "连接 Google Drive 授权",
        auth_with_microsoft: "连接 OneDrive 授权",
        auth_with_baidu: "连接 百度网盘 授权",
        auth_with_dropbox: "连接 Dropbox 授权",
        gdrive_auth_tip: "建议备份至您的个人 Google Drive 以确保数据主权与高可用性。",
        onedrive_auth_tip: "建议备份至您的个人 OneDrive 以确保数据主权与高可用性。",
        baidu_auth_tip: "建议备份至您的个人 百度网盘 以确保数据主权与高可用性。",
        dropbox_auth_tip: "建议备份至您的个人 Dropbox 以确保数据主权与高可用性。",
        gdrive_auth_success: "Google Drive 授权成功",
        onedrive_auth_success: "OneDrive 授权成功",
        gdrive_refresh_token: "授权令牌",
        onedrive_refresh_token: "授权令牌",
        baidu_refresh_token: "授权令牌",
        dropbox_refresh_token: "授权令牌",
        gdrive_token_active: "授权令牌生效中",
        onedrive_token_active: "授权令牌生效中",
        baidu_token_active: "授权令牌生效中",
        dropbox_token_active: "授权令牌生效中",
        gdrive_folder_tip: "建议使用英文或数字路径。例如：/backups",
        onedrive_folder_tip: "建议使用英文或数字路径。例如：/backups",
        baidu_folder_tip: "备份文件将保存在网盘的：/apps/nodeauth-backup ",
        save_dir_placeholder: "/nodeauth-backup",
        re_authorize: "重新授权",
        waiting_authorization: "正在等待授权...",
        token_expired_or_revoked: '授权已失效，请点击"重新授权"按钮重新连接存储源',
        oauth_token_revoked: "授权令牌已失效，请重新授权。",
        authorized_success_gd: "已成功连接 Google Drive",
        authorized_success_ms: "已成功连接 OneDrive",
        authorized_success_baidu: "已成功连接 百度网盘",
        authorized_success_dropbox: "已成功连接 Dropbox",
        require_google_auth: "请先完成 Google Drive 授权",
        require_microsoft_auth: "请先完成 OneDrive 授权",
        require_baidu_auth: "请先完成 百度网盘 授权",
        require_dropbox_auth: "请先完成 Dropbox 授权",
        telegram_bot_token: "Bot Token",
        telegram_bot_token_placeholder: "123456789:ABCdefGHIjklmNOPQrsTUVwxyZ",
        telegram_chat_id: "Chat ID",
        telegram_chat_id_placeholder: "例如：123456789 或 -100123456789",
        telegram_chat_id_tip_title: "如何获取 Chat ID",
        telegram_chat_id_tip_1: "1. 私聊备份：搜索 userinfobot 发送 /start 获取您的专属 ID",
        telegram_chat_id_tip_2: "2. 群组/频道备份：将 Bot 拉入目标群组并赋予发言与删除消息权限，发送任意消息后获取群组 ID（通常以 -100 开头）",
        require_telegram_token: "请填写 Bot Token",
        require_telegram_chat_id: "请填写 Chat ID",
        file_unavailable: "该备份文件在 Telegram 中已失效或被删除，是否清理此无效记录？",
        record_invalid: "记录失效",
        confirm_clean: "确定清理",
        cancel_clean: "暂不清理",
        clean_record_success: "已清理失效记录",
        clean_record_fail: "清理记录失败",
        auto_backup_config: "自动备份配置",
        switch_on: "开启",
        switch_off: "关闭",
        encrypt_password: "加密密码",
        keep_old_pwd: "保持原密码不变",
        set_new_pwd: "设置新密码",
        input_encrypt_pwd: "输入加密密码",
        continue_use_old_pwd: "系统将继续使用原有的自动备份密码。",
        retain_count_label: "保留最近份数",
        retain_zero_tip: "填 0 表示不对历史备份做任何限制与清理",
        save: "保存",
        encrypted_backup: "加密备份",
        backup_security_tip: "请输入加密密码用于保护备份文件。",
        use_auto_pwd: "使用自动备份密码",
        use_new_pwd: "使用新密码",
        input_custom_pwd: "输入自定义加密密码 (至少 6 位)",
        baidu_auth_failed: "百度网盘授权失败",
        dropbox_auth_failed: "Dropbox 授权失败",
        start_backup: "开始备份",
        select_restore_file: "选择备份文件恢复",
        filename: "文件名",
        size: "大小",
        time: "时间",
        action: "操作",
        decrypt_restore: "解密恢复",
        restore_warning: "恢复操作将覆盖当前所有数据！",
        input_restore_pwd: "输入备份时的加密密码",
        confirm_restore: "确认覆盖恢复",
        center_title: "云端备份中心",
        center_desc: "配置多个备份源（Email, WebDAV, S3等），确保数据万无一失。",
        s3_region_placeholder: "auto 或 us-east-1",
        password_length_req: "必填项，长度必须 ≥ 6 位。",
        require_name: "请输入名称",
        require_webdav_url: "请输入 WebDAV 地址",
        require_username: "请输入用户名",
        require_password: "请输入密码",
        require_endpoint: "请输入 Endpoint",
        require_bucket: "请输入 Bucket",
        require_access_key: "请输入 Access Key ID",
        require_secret_key: "请输入 Secret Access Key",
        require_auto_backup_pwd: "请输入自动备份加密密码",
        config_missing: "备份源配置存在缺失内容",
        create_success: "新建成功",
        update_success: "修改成功",
        delete_confirm: "删除确认",
        delete_warning: "此操作将永久删除该备份源配置(不影响云端已备份的数据)，是否继续？",
        cancel_delete: "已取消删除",
        delete_success: "删除成功",
        testing_connection: "正在测试连接...",
        fetching_configs: "正在获取配置列表...",
        saving_config: "正在保存配置...",
        password_min_length: "密码至少 6 位",
        password_no_space: "密码不能包含空格",
        password_not_all_number: "密码不能全部为数字",
        backup_finish_title: "云端备份完成",
        backup_success_msg: "成功备份了数据",
        fetch_backup_fail: "获取备份文件失败",
        fetch_list_fail: "获取备份列表失败",
        restore_finish_title: "恢复数据结束",
        processed_total: "共处理",
        backup_files_count: "个备份文件",
        base_accounts_count: "个基准账号",
        import_success_count: "成功导入",
        new_accounts: "个新账户！",
        skipped_duplicates: "自动跳过了",
        existing_accounts: "个已有账户。"
    };
    ui = {
        export: "数据导出",
        import: "数据导入",
        export_format: "导出格式",
        export_password: "加密密码（至少 6 位）",
        export_password_confirm: "确认密码",
        password_mismatch: "两次输入的密码不一致！",
        password_weak: "密码太弱！至少需要 6 个字符。",
        select_account: "请至少选择一个账号",
        export_success: "导出完成",
        export_failed: "导出失败，请稍后重试",
        file_too_large: "文件 {name} 太大，不能超过 10MB",
        import_password: "解密密码",
        password_wrong: "解密失败：密码错误或不支持加密标准",
        no_valid_data: "没有可导入的有效账户数据",
        import_success: "导入成功",
        task_build_pf: "构建数据：PhoneFactor 数据集",
        err_pf_parse: "[PhoneFactor] 解析失败: {detail}",
        task_prepare: "准备解析：{name}",
        task_scan_qr: "截取图中二维码：{name}",
        err_scan_qr: "[{name}] 解析图片失败: {msg}",
        err_read_fail: "[{name}] 读取失败",
        err_unrecognized: "[{name}] 无法识别该文件格式。",
        task_build_file: "构建数据：{name}",
        err_parse_fail: "[{name}] 解析失败: {detail}",
        err_read_abnormal: "[{name}] 读取异常",
        task_decrypting: "正在使用密码解密数据...",
        err_user_cancel: "[{name}] 用户取消密码输入",
        import_anomaly: "导入异常",
        task_saving: "合并保存中... ({count} 个账号)",
        msg_total_files: "<div>共处理 <b>{count}</b> 个文件。</div>",
        msg_success_accounts: '<div style="color:var(--el-color-success)">🎉 成功导入 <b>{count}</b> 个新账户！</div>',
        msg_no_new_accounts: '<div style="color:var(--el-color-warning)">⚠️ 导入账户皆已存在，无需添加。</div>',
        msg_duplicates_skipped: '<div style="color:var(--el-text-color-secondary)">ℹ️ 自动跳过了 <b>{count}</b> 个已拥有的账户。</div>',
        msg_error_summary: '<div style="color:var(--el-color-danger); margin-top: 5px;">❌ <b>错误摘要：</b><br>{errors}</div>',
        msg_offline_queued: '<div style="color:var(--el-color-warning); margin-top: 5px;">☁️ <b>离线模式</b>：账号已存入本地队列，联网后将自动同步至云端。</div>',
        batch_import_finished: "批量导入结束",
        encrypted_file: "加密文件",
        export_desc: "选择您需要的导出格式。请注意，明文导出存在安全风险。",
        hub_desc: "管理您的账户数据的导入、导出与安全备份",
        system_backup: "本系统备份",
        encrypted_json: "加密备份 (.json)",
        plaintext_json: "明文备份 (.json)",
        mobile_app: "移动端 2FA App",
        migrate_ga: "迁移到 Google Auth",
        generic_format: "通用格式",
        otpauth_txt: "文本 URI (.txt)",
        spreadsheet_csv: "表格文件 (.csv)",
        steam_guard_title: "Steam 令牌",
        steam_guard_desc: "支持 .maFile (SDA) 或 steam:// 文本",
        steam_guard_desc_guide: "支持直接导入 <b>.maFile</b> (Steam Desktop Authenticator) 原始备份或 <b>steam://</b> 链接。系统将自动智能识别并应用 5 位字母验证码模式。",
        html_page: "网页文件 (.html)",
        export_pwd_title: "设置导出密码",
        pwd_placeholder_strong: "请输入高强度密码",
        pwd_placeholder_again: "请再次输入",
        start_encrypt_dl: "开始加密并下载",
        warning_title: "⚠️ 安全警告",
        warning_alert_title: "风险提示",
        warning_desc: "您正在导出未加密的明文数据。任何获取该文件/图片的人都可以直接访问您的账号验证码！",
        confirm_export: "确定导出",
        ga_title: "迁移到 Google Authenticator",
        ga_desc_1: '打开手机上的 Google Authenticator，选择"扫描二维码"进行导入',
        ga_desc_multiple: "(账号较多，已分批生成，请依次扫码)",
        btn_prev: "上一张",
        btn_next: "下一张",
        finish: "完成",
        select_account_title: "选择要导出的账号",
        search_account: "搜索服务或账号...",
        select_all_accounts: "全选所有账号",
        select_all_search: "全选搜索出的 {count} 个账号",
        selected_count: "已选: {selected} / {total}",
        no_matching: "无匹配账号",
        ga_steam_filter_notice: "为了确保兼容性，Steam 账号已自动隐藏（Google Authenticator 不支持其专有算法）。",
        migrate_btn: "迁移 {count} 个账号",
        center_title: "数据导入",
        import_desc: "支持从各类 2FA 软件或本系统的备份文件中恢复数据。",
        auto_identify_tip: "💡 自动识别文件类型并导入",
        drag_drop_tip: "将备份文件或迁移二维码截图拖到此处，或 <em>点击上传</em>",
        support_desc: "支持列表",
        ga_auth_desc: '请在 App 内导出"迁移二维码"，将截图直接上传 (.png / .jpg)',
        ms_auth_desc: "Microsoft Authenticator",
        ms_auth_detail: "仅支持 Android 手机,导出以下3个文件后,同时选中上传即可导入",
        import_guide: "导入指南",
        batch_import_processing: "📦 批量导入处理中",
        batch_progress: "{processed} / {total} 任务已完成",
        decrypt_backup_title: "🔓 解密备份文件",
        detect_aegis: "探测到 Aegis 加密备份",
        detect_steam_mafile: "检测到 Steam .maFile 备份，将自动应用专有算法...",
        detect_proton_auth: "检测到 Proton Authenticator 加密备份",
        detect_proton_pass: "检测到 Proton Pass 加密备份 (.pgp)",
        detect_2fas: "检测到 2FAS Auth 加密备份",
        detect_ente: "检测到 Ente Auth 加密备份",
        detect_bitwarden_pass: "检测到 Bitwarden Pass 加密备份",
        detect_system: "检测到本系统加密备份",
        input_decrypt_pwd_label: "请输入该备份的解密密码：",
        input_decrypt_pwd_placeholder: "输入当时设置的导出密码",
        confirm_decrypt_import: "确认解密并导入",
        system_backup_format: "本系统备份",
        password_manager_format: "密码管理器",
        encrypted_backup_json: "加密备份 (.json)",
        plaintext_backup_json: "明文备份 (.json)",
        mobile_app_format: "移动端 2FA App",
        proton_auth: "Proton Auth",
        lastpass_auth: "LastPass Authenticator (.json)",
        generic_json: "通用格式 (.json)",
        fetching_accounts: "正在获取账号数据...",
        no_accounts_to_export: "没有可导出的账号",
        encrypting: "正在加密...",
        generating_file: "正在生成导出文件...",
        generating_qr: "正在生成二维码...",
        reading_backup: "正在读取备份文件...",
        uploading_processing: "正在上传并处理...",
        unsupported_format: "未能识别或不支持的文件格式。",
        unsupported_decrypt: "暂不支持解密来自",
        encrypted_backup_tail: "的加密备份文件。"
    };
    _i = {
        apps_review_title: "2FA APP 排行榜",
        apps_review_desc: "主流 2FA 软件评测与避坑指南",
        apps_review_table: {
            app_name: "APP 名称",
            platforms: "支持平台",
            website: "官方网站",
            pros: "特色功能",
            cons: "缺点与不足",
            security: "安全事故史",
            summary: "简评",
            rating: "推荐星级"
        },
        apps: {
            "2fas": {
                pros: "全开源、完全本地优先、支持 iCloud / Google Drive 强加密同步，安全性极高。",
                cons: "桌面端并非独立 App，必须依赖手机在线扫码配对浏览器插件使用，有些繁琐。",
                security: "无安全事故记录",
                summary: "安全社区口碑极佳的本地优先 2FA，但在 PC 端体验略显折腾。"
            },
            aegis: {
                pros: "完全开源、极高强度的本地加密库、异常强大的自定义与格式兼容导出功能。",
                cons: "仅支持 Android 端，缺乏原生的跨平台云同步或 iOS 版本。",
                security: "无安全事故记录",
                summary: "Android 平台极客与隐私倡导者的绝对首选，硬核且强大。"
            },
            ente: {
                pros: "完全开源、支持端到端加密云同步、提供全平台原生桌面端及网页版，UI精美。",
                cons: "由于所有数据依赖云同步，对纯“离线本地”原教旨主义者来说不够纯粹。",
                security: "无安全事故记录",
                summary: "近年来口碑狂飙的跨平台同步之王，Authy 最完美的开源接班人。"
            },
            proton: {
                pros: "与极度注重隐私的 Proton 生态深度结合，支持端到端加密同步。",
                cons: "本质上是密码管理器的一部分，可能存在生态绑定问题。",
                security: "无安全事故记录",
                summary: "Proton 生态用户的绝佳选择，安全隐私拉满。"
            },
            bitwarden: {
                pros: "开源免费、由著名的 Bitwarden 安全团队打造，体验流畅。",
                cons: "作为一个独立 APP，功能目前还相对基础（注：BW主密码管理器内也自带 2FA）。",
                security: "无安全事故记录",
                summary: "大厂背书的纯净好产品，适合追求极简与信任大厂商的用户。"
            },
            google: {
                pros: "极其轻量纯粹、开箱即用，支持极其方便的二维码批量导出功能，近期加入了云端同步支持。",
                cons: "闭源，虽然加入了云同步但早期无端到端加密（近期已改善），无官方桌面端。",
                security: "曾因其初步加入的云同步缺乏端到端加密被发愁，现已支持。",
                summary: "纯粹且受众极广的基础款，二维码批量导出功能是它的杀手锏。"
            },
            microsoft: {
                pros: "如果你是重度微软生态用户，它支持免密登录且合规性极佳。",
                cons: "体积极度臃肿，强制绑定微软账号，且绝对禁止以标准格式导出密钥（锁死生态），云备份不能跨 iOS/Android 平台通用。",
                security: "大量用户反馈换机恢复后所有数据清空，存在安全隐患。",
                summary: "为了单纯的 TOTP 而装它过于沉重，且“不准导出”的数据霸权令人反感（避坑）。"
            },
            freeotp: {
                pros: "由 Red Hat 维护的开源项目，注重纯粹与自由。",
                cons: "界面极其复古且停止维护已久，近乎“半废弃”状态。",
                security: "无安全事故记录",
                summary: "情怀满分的开源工具，但已不适合现代日常使用。"
            },
            authy: {
                pros: "早年支持云同步与多端设备的开创者，使用极其便利。",
                cons: "闭源、必须绑定手机号码、官方阻止用户自由导出密钥、桌面端已彻底下架。",
                security: "母公司 Twilio 曾遭受严重黑客攻击，泄露大量敏感数据。",
                summary: "曾经的王者，如今由于封闭协议和隐私风险，建议尽早逃离（避坑）。"
            },
            lastpass: {
                pros: "便于 LastPass 生态的用户直接一站式管理。",
                cons: "云端采用闭源架构，完全和 LastPass 解绑不够独立。",
                security: "LastPass 近年发生过轰动全球的脱裤级数据泄露事件。",
                summary: "由于 LastPass 本身的声誉危机，不建议将关键 2FA 交托于此（极度警告）。"
            },
            raivo: {
                pros: "曾是 iOS 端备受推崇的最强开源本地 2FA 应用。",
                cons: "最近被一家名为 Mobime 的不明空壳公司收购。",
                security: "收购后发生灾难性更新故障，大量用户所有本地种子被随机清空且至今无法恢复。",
                summary: "发生过极其恶劣的信任背叛与数据销毁事件，绝不可用（极度警告）。"
            }
        },
        qr_parser: "二维码解析",
        password_generator: "强密码生成",
        time_sync: "时间校准",
        totp_sandbox: "TOTP 沙盒",
        parse_success: "解析成功",
        invalid_uri: "无效的 OTP URI",
        secret_required: "密钥不能为空",
        service_required: "请填写服务商和账号",
        save_to_vault: "保存到我的账户",
        sync_success: "校准完成，偏差 {offset}ms",
        sync_failed: "无法连接服务器",
        select_chars: "请至少选择一种字符类型",
        title: "实用工具箱",
        desc: "生成密码、同步时间及解析二维码等实用工具集合。",
        totp_secret_title: "TOTP 密钥工具",
        totp_secret_desc: "随机生成密钥，支持 Base32 格式转换与校验",
        password_gen_title: "密码生成器",
        password_gen_desc: "生成高强度随机密码，支持自定义长度和字符类型",
        time_sync_title: "时间校准器",
        time_sync_desc: "精准检测本地时间与服务器时间的偏差",
        qr_parser_title: "二维码解析器",
        qr_parser_desc: "识别图片中的二维码内容，提取 OTP 链接",
        length: "长度",
        regenerate: "重新生成",
        select_one_char_type: "请至少选择一种字符类型",
        password_copied: "密码已复制",
        qr_result: "解析结果",
        qr_parsed: "二维码解析成功",
        local_time: "本地设备时间",
        server_time: "服务器时间 (估算)",
        time_offset: "时间偏差",
        network_latency: "网络延迟",
        check_now: "立即检测",
        sync_completed: "校准完成，偏差 {offset}ms",
        secret_config: "密钥配置",
        basic_info: "基础信息",
        preview: "结果预览",
        refresh_after: "后刷新",
        advanced_settings: "高级设置 (算法/位数/步长)",
        reset_time: "重置",
        prev_period: "上个周期",
        next_period: "下个周期",
        scanner_camera: "摄像头扫描",
        scanner_image: "图片识别",
        camera_click_to_open: "点击开启摄像头",
        camera_open: "开启摄像头",
        camera_stop: "停止扫描",
        image_placeholder: "点击选择或拖拽二维码图片",
        camera_unsupported: "您的浏览器不支持摄像头功能",
        camera_access_denied: "无法访问摄像头，请检查权限设置",
        qr_not_recognized: "未能从图片中识别出有效的二维码",
        sync_normal: "时间同步正常",
        sync_normal_desc: "本地时间与服务器误差极小，不影响 2FA 验证。",
        sync_warning: "存在微小偏差",
        sync_warning_desc: "建议校准本地时间，但通常仍可使用。",
        sync_error: "时间偏差过大",
        sync_error_desc: "严重偏差！2FA 验证码将失效，请务必校准设备时间。",
        sync_offline: "使用智能回退缓存",
        sync_offline_desc: "当处于离线模式，目前使用断网前的时间偏差缓存推算真实时间。",
        secret_empty: "密钥不能为空",
        fill_info: "请填写服务商和账号",
        current_offset: "当前偏差",
        totp_hex: "Hex (十六进制)",
        totp_config_preview: "配置参数以生成预览",
        totp_algorithm: "算法",
        totp_algo_sha1: "SHA1",
        totp_digits: "位数",
        totp_period: "周期",
        totp_scan_qr_title: "扫描二维码",
        health_check_title: "系统安全体检",
        health_check_desc: "检查服务器核心环境安全配置并给出漏洞修复建议"
    };
    di = {
        session_expired: "登录状态已失效，请重新登录",
        subtitle: "一个十分安全的 2FA 服务管理工具",
        login: "登录",
        logout_success: "已安全退出",
        logout_confirm: "您确定要退出当前登录吗？",
        fetch_providers_failed: "获取身份提供商列表失败，请稍后重试",
        oauth_failed: "获取授权链接失败：提供商未配置或失效",
        oauth_network_error: "获取授权状态遭遇网络异常",
        login_with: "通过 {provider} 授权登录",
        privacy_title: "安全隐私提示",
        privacy_desc: "系统基于 OAuth 2.0 协议验证身份，绝不会获取、记录或传输您的密码信息。",
        passkey_login: "通过通行密钥登录",
        passkey_not_supported: "您的浏览器或设备不支持通行密钥",
        secure_login_in_progress: "正在安全登录中",
        secure_login_sub: "请稍候，系统正在与 {provider} 交换安全凭证...",
        auth_failed_title: "授权失败",
        back_to_login: "返回登录页",
        default_provider: "身份提供商",
        oauth_declined: "您拒绝了 {provider} 的授权请求",
        telegram_missing_hash: "Telegram 登录缺少签名参数",
        missing_auth_params: "URL 缺少必要的授权凭证参数",
        state_mismatch: "安全警告：State 校验失败，请求可能被篡改",
        login_rejected: "登录验证被后端拒绝",
        network_abnormal: "网络请求异常，请稍后再试",
        web3_login: "通过 Web3 钱包登录",
        web3_qr_title: "WalletConnect 扫码登录",
        web3_auth_flow: "Web3 钱包安全登录",
        web3_scan_tip: "请使用 MetaMask、Trust Wallet 等兼容 WalletConnect 的 APP 扫描此二维码进行授权",
        step_connect: "连接钱包",
        step_sign: "签名确认",
        step_verify: "验证登录",
        web3_status_preparing: "准备建立 WebSocket 加密信道...",
        web3_status_connected: "已连接！请返回钱包完成签名挑战",
        web3_status_verifying: "正在同步签名数据至后端...",
        web3_action_connect: "前往钱包授权",
        web3_action_sign: "唤起钱包确认签名",
        web3_action_verifying: "正在验证身份...",
        web3_fallback_tip: "若跳转失败，请手动复制链接并在钱包中打开：",
        web3_notify_signature: "连接成功，返回钱包完成【签名确认】",
        web3_return_to_wallet: "请返回 {wallet} 进行签名",
        web3_reopen_wallet: "重新唤起 {wallet}",
        web3_return_to_system_wallet: "请返回系统钱包完成签名",
        web3_try_system_reopen: "尝试系统唤醒"
    };
    fi = {
        not_supported: "您的浏览器不支持摄像头功能",
        no_access: "无法访问摄像头，请检查权限设置",
        no_qr_found: "未能从图片中识别出有效的二维码"
    };
    mi = {
        offline: "当前处于离线模式，无法进行此操作",
        session_expired: "会话已过期，请重新登录",
        unauthorized: "未授权的访问",
        forbidden: "禁止访问",
        server_error: "服务器异常",
        request_failed: "请求失败",
        network_error: "网络请求异常",
        account_not_found: "未找到该账号",
        account_exists: "账号已存在",
        invalid_secret_format: "密钥格式无效（必须为 Base32，至少 16 个字符）",
        missing_service_account: "服务商和账号名称为必填项",
        no_account_ids: "未提供账号 ID",
        export_type_invalid: "无效的导出类型",
        export_password_length: "导出密码至少需要 6 个字符",
        missing_content_type: "内容和类型不能为空",
        import_password_required: "加密导入需要密码",
        parse_failed: "解析失败，请检查文件格式或密码是否正确",
        provider_not_found: "未找到提供商",
        missing_fields: "缺少必填字段",
        backup_password_length: "自动备份密码至少需要 6 个字符",
        backup_password_required: "自动备份密码为必填项（至少 6 个字符）",
        manual_backup_password_needed: "使用自动密码进行手动备份要求先配置好自动备份密码。",
        filename_required: "文件名为必填项",
        no_session: "未授权：缺少会话 cookie",
        csrf_mismatch: "请求被拒绝：CSRF token 不匹配",
        token_expired: "未授权：Token 已过期或无效",
        oauth_state_invalid: "无效或缺失的 OAuth state 参数。安全校验失败。",
        oauth_code_missing: "缺少 OAuth code 参数",
        not_whitelisted: "未配置访问白名单。拒绝登录。",
        unauthorized_user: "未授权的用户，拒绝登录！",
        oauth_token_revoked: "存储源授权已失效，请在下方点击配置图标重新授权。",
        connection_failed: "连接失败",
        backup_failed: "备份失败",
        download_failed: "下载失败",
        delete_failed: "删除失败",
        oauth_config_incomplete: "OAuth 配置不完整",
        oauth_api_error: "OAuth API 错误",
        oauth_token_exchange_failed: "OAuth token 交换失败",
        telegram_missing_bot_name: "尚未配置 Telegram Bot Name",
        telegram_missing_query: "Telegram 提供商需要完整的查询参数，不仅是 code",
        telegram_missing_bot_token: "尚未配置 Telegram Bot Token",
        telegram_missing_hash: "缺少哈希签名",
        telegram_signature_failed: "Telegram 签名验证失败",
        telegram_login_expired: "Telegram 登录数据已过期",
        telegram_config_incomplete: "Telegram 配置不完整 (缺少 Token 或 Chat ID)",
        telegram_db_missing: "缺少数据库连接或 Provider ID",
        telegram_api_error: "Telegram API 错误",
        telegram_upload_failed: "Telegram 上传失败",
        telegram_download_failed: "Telegram 下载失败",
        file_not_found_in_history: "在历史记录中找不到此文件",
        telegram_file_path_missing: "Telegram 未返回文件路径",
        invalid_emergency_verification: "验证失败！请核对 PDF 文件中密钥的最后 4 位",
        s3_config_incomplete: "S3 配置不完整",
        s3_api_error: "S3 API 错误",
        s3_list_failed: "获取 S3 对象列表失败",
        s3_upload_failed: "S3 上传失败",
        s3_download_failed: "S3 下载失败",
        s3_delete_failed: "S3 删除失败",
        webdav_config_incomplete: "WebDAV 配置不完整",
        webdav_upload_failed: "WebDAV 备选方案上传失败",
        webdav_download_redirect_failed: "WebDAV 重定向请求失败",
        webdav_download_failed: "WebDAV 备选方案下载失败",
        webdav_delete_failed: "WebDAV 备选方案删除失败",
        unsupported_provider: "不支持的提供商",
        webauthn_challenge_missing: "身份验证挑战已过期，请刷新页面重试",
        webauthn_registration_failed: "通行密钥注册失败",
        webauthn_login_failed: "通行密钥登录失败",
        passkey_not_found: "未找到对应的通行密钥凭证",
        email_config_incomplete: "邮箱备份配置不完整 (缺少 SMTP 服务器、账号或收件人)",
        email_db_missing: "缺少数据库连接或 Provider ID",
        email_send_failed: "邮件发送失败",
        email_send_failed_via_relay: "通过中继发送邮件失败",
        email_download_not_supported: "邮件备份不支持直接下载，请从邮箱附件中手动获取备份文件",
        smtp_greeting_failed: "SMTP: 服务器问候失败",
        smtp_ehlo_failed: "SMTP: EHLO 指令失败",
        smtp_starttls_ready_failed: "SMTP: STARTTLS 升级失败",
        smtp_ehlo_after_tls_failed: "SMTP: TLS 握手后 EHLO 失败",
        smtp_auth_prompt_user_failed: "SMTP: 等待输入用户名失败",
        smtp_auth_prompt_pass_failed: "SMTP: 等待输入密码失败",
        smtp_auth_success_failed: "SMTP: 身份验证失败 (用户名或授权码无效)",
        smtp_mail_from_failed: "SMTP: 发件人指令失败",
        smtp_rcpt_to_failed: "SMTP: 收件人指令失败",
        smtp_data_ready_failed: "SMTP: 数据传输指令失败",
        smtp_message_accepted_failed: "SMTP: 邮件发送提交失败",
        smtp_connection_closed: "SMTP: 连接被意外关闭",
        health_check_failed: "环境配置漏洞警告，系统已被锁定！"
    };
    pi = {
        title: "配置安全未达标",
        subtitle: "我们检测到当前环境配置存在高危风险或未完成初始化，为了保护您的数据安全，已禁止系统访问。",
        passed_title: "体检通过",
        passed_subtitle: "太棒了！您的 NodeAuth 安全防御体系处于最佳状态。",
        go_to_login: "前往登录",
        how_to_fix: "如何修复？",
        generate_new: "重新生成",
        view_docs: "查看相关配置文档",
        missing_fields: "缺失以下环境变量：",
        passed_checks_title: "检测通过项",
        passed_checks: {
            encryption_key_passed: "ENCRYPTION_KEY 长度达标",
            jwt_secret_passed: "JWT_SECRET 长度达标",
            oauth_allow_all_passed: "全局放行已被禁止 (防止任意人员登入)",
            allowed_users_passed: "系统已配置有效的管理员邮箱白名单",
            oauth_provider_configured: "系统已正确配置至少一套 OAuth 第三方登录",
            license_passed: "NODEAUTH_LICENSE 授权已激活"
        },
        issues: {
            encryption_key_too_short: {
                title: "核心加密密钥合规性错误 (ENCRYPTION_KEY)",
                desc: "您当前的环境变量 ENCRYPTION_KEY 为空或长度不足 32 位！这把钥匙用于加密数据库内的所有验证器种子，增加复杂度避免被暴力破解。"
            },
            jwt_secret_too_short: {
                title: "会话签名密钥脆弱 (JWT_SECRET)",
                desc: "您当前的环境变量 JWT_SECRET 长度不足 32 位，增加复杂度防止黑客伪造身份凭证直接登入系统。"
            },
            oauth_allow_all_enabled: {
                title: "致命警告：开启了全局放行访问",
                desc: "您当前配置了 OAUTH_ALLOW_ALL=true。这不是演习，此时任何人进入主页都能直接操控您的验证器数据！"
            },
            allowed_users_empty: {
                title: "登录白名单为空",
                desc: "系统处于锁定保护中，但您没有配置 OAUTH_ALLOWED_USERS。此时没有任何人能够登录本系统。"
            },
            github_config_incomplete: {
                title: "GitHub 登录配置不完整",
                desc: "GitHub OAuth 配置参数缺失。"
            },
            telegram_config_incomplete: {
                title: "Telegram 登录配置不完整",
                desc: "Telegram OAuth 配置参数缺失。"
            },
            google_config_incomplete: {
                title: "Google 登录配置不完整",
                desc: "Google OAuth 配置参数缺失。"
            },
            nodeloc_config_incomplete: {
                title: "NodeLoc 登录配置不完整",
                desc: "NodeLoc OAuth 配置参数缺失。"
            },
            gitee_config_incomplete: {
                title: "Gitee 登录配置不完整",
                desc: "Gitee OAuth 配置参数缺失。"
            },
            cloudflare_config_incomplete: {
                title: "Cloudflare Access 配置不完整",
                desc: "Cloudflare Access OAuth 配置参数缺失。"
            },
            no_provider_configured: {
                title: "未配置任何登录方式",
                desc: "您必须至少配置一种合法的 OAuth2 登录方式（如 GitHub、Telegram）才能使用系统。"
            },
            license_missing: {
                title: "系统未激活 (NODEAUTH_LICENSE)",
                desc: "您尚未配置授权许可证，前往 https://license.nodeauth.io/ 获取，然后根据不同部署方式填入，将其填入 NODEAUTH_LICENSE 。"
            },
            license_domain_mismatch: {
                title: "授权域名不匹配",
                desc: "检测到当前运行域名与 License 中绑定的域名不符。"
            },
            license_expired: {
                title: "授权许可证已过期",
                desc: "您的授权许可证已超过有效期。"
            },
            license_invalid_signature: {
                title: "授权签名校验失败",
                desc: "License 签名无效，可能已被恶意篡改。"
            },
            license_invalid_format: {
                title: "授权许可证格式非法",
                desc: "检测到 License 字符串格式错误，请确保填入的是授权中心生成的完整原始 Base64 字符串。"
            },
            license_invalid: {
                title: "授权校验未通过",
                desc: "当前的许可证无法通过系统校验，请检查是否填错或过期。"
            }
        },
        suggestions: {
            suggestion_deploy_by_worker: "Worker 一键部署: 前往 Cloudflare 后台 -> Workers 和 Pages -> nodeauth -> 设置 -> 变量和机密",
            suggestion_deploy_by_gitaction: "Github Action 部署: 前往 Fork 仓库 -> Settings -> Secrets and variables -> Actions",
            suggestion_deploy_by_docker: "Docker Compose 部署: 修改 docker-compose.yml -> environment",
            encryption_key_suggestion: "请复制下方为您预生成的高强度随机密钥，根据不同部署方式填入，将其填入 ENCRYPTION_KEY 。",
            jwt_secret_suggestion: "请复制下方为您预生成的高强度随机密钥，根据不同部署方式填入，将其填入 JWT_SECRET 。",
            oauth_allow_all_suggestion: "根据不同部署方式，将 OAUTH_ALLOW_ALL 删除将其值修改为 false。",
            allowed_users_suggestion: "根据不同部署方式，填入 OAUTH_ALLOWED_USERS ",
            github_config_suggestion: "根据不同部署方式，填入 OAUTH_GITHUB_CLIENT_ID、OAUTH_GITHUB_CLIENT_SECRET、OAUTH_GITHUB_REDIRECT_URI ",
            telegram_config_suggestion: "请在 BotFather 检查机器人配置，确保信息填全，根据不同部署方式，填入 OAUTH_TELEGRAM_BOT_NAME、OAUTH_TELEGRAM_BOT_TOKEN、OAUTH_TELEGRAM_REDIRECT_URI",
            google_config_suggestion: "请前往 Google Cloud Console 检查凭据配置，根据不同部署方式，填入 OAUTH_GOOGLE_CLIENT_ID、OAUTH_GOOGLE_CLIENT_SECRET、OAUTH_GOOGLE_REDIRECT_URI",
            nodeloc_config_suggestion: "请前往 NodeLoc 面板检查您的开发者凭据，根据不同部署方式，填入 OAUTH_NODELOC_CLIENT_ID、OAUTH_NODELOC_CLIENT_SECRET、OAUTH_NODELOC_REDIRECT_URI 填入",
            gitee_config_suggestion: "请核对 Gitee 开发者凭据，，根据不同部署方式，填入 OAUTH_GITEE_CLIENT_ID、OAUTH_GITEE_CLIENT_SECRET、OAUTH_GITEE_REDIRECT_URI 填入",
            cloudflare_config_suggestion: "需要四位一体的参数：Client ID, Secret, Org Domain, Redirect URI，根据不同部署方式，填入  OAUTH_CLOUDFLARE_CLIENT_ID、OAUTH_CLOUDFLARE_CLIENT_SECRET、OAUTH_CLOUDFLARE_REDIRECT_URI 填入",
            no_provider_suggestion: "阅读NodeAuth Worker 的 README，挑选最适合您且配置最简单的一种登录方式，按照其说明获取 Client ID 与 Secret 并在云端配置。",
            apply_license: "请点击下方按钮前往授权中心，系统会自动识别您的域名。完成激活后，请将生成的许可证填入环境变量 NODEAUTH_LICENSE。",
            rebind_license: "请确定并在授权中心重新绑定您的部署域名，确保其与 window.location.hostname 完全一致。",
            renew_license: "您的授权已过期，请前往中心进行续费或重新申领。",
            license_suggestion: "请点击下方按钮前往授权中心，系统会自动识别您的域名。完成激活后，请将生成的许可证填入环境变量 NODEAUTH_LICENSE。"
        },
        apply_license_btn: "获取授权许可",
        copy_unsupported: "您的浏览器不支持自动复制，请手动选中复制。",
        copy_success: "安全密钥已复制到剪贴板",
        connection_failed: "无法连接到服务端进行安全校验"
    };
    gi = {
        management: "通行密钥管理",
        passkey_title: "通行密钥",
        passkey_desc: "通过生物识别（如指纹或面容）实现无密码登录，为您提供更安全、更快速的账户访问体验。",
        passkey_list: "已绑定的通行密钥",
        add_passkey: "添加",
        no_passkeys: "您尚未绑定任何通行密钥",
        credential_name: "设备名称",
        created_at: "绑定时间",
        last_used: "最后使用",
        delete_confirm: "确定要移除这个通行密钥吗？移除后您将无法使用该设备直接登录。",
        add_dialog_title: "添加新的通行密钥",
        add_dialog_tip: "建议为您的设备起一个容易辨识的名称（如：我的 iPhone 15）。",
        default_name: "我的新设备",
        registering: "正在与硬件通信...",
        register_success: "通行密钥绑定成功！",
        name_required: "名称不能为空"
    };
    hi = {
        emergency_title: "加密密钥 ENCRYPTION_KEY 备份",
        emergency_subtitle: "系统初始化成功。为了您的数据安全，必须对加密密钥进行物理备份。",
        encryption_key_label: "核心加密密钥",
        importance_title: "为什么很重要？",
        importance_desc: "本系统采用零知识加密。核心加密密钥是解密所有令牌的唯一凭证。若服务器环境变量丢失，此密钥是找回数据的唯一途径。",
        save_instruction: "请在该页面下载 PDF 核心密钥，并将其存放在安全的地方（如邮箱、网盘或打印后保存）。",
        download_pdf: "第一步：下载 PDF 核心密钥",
        download_pdf_btn: "下载 核心密钥 PDF 文档",
        verify_title: "第二步：验证并激活",
        verify_desc: "请打开您刚刚下载的 PDF 文件，填写核心密钥的最后 4 位。",
        verify_placeholder: "最后 4 位",
        verify_btn: "马上验证",
        invalid_verification: "验证失败。请核对 PDF 中的密钥最后 4 位。",
        confirm_success: "核心密钥备份已完成，欢迎使用 NodeAuth！",
        pdf_filename: "NodeAuth_Worker_核心密钥备份",
        pdf_header: "NodeAuth 核心密钥备份",
        pdf_self_custody: "为什么不能丢失？",
        pdf_self_custody_desc: "NodeAuth 是一个完全自托管的系统。我们不存储您的主密码或加密密钥。这意味着如果您丢失了此密钥，您的所有数据将永久锁定，无法恢复。",
        pdf_info_title: "系统信息",
        pdf_server_url: "服务器地址: ",
        pdf_admin_email: "管理员邮箱: ",
        pdf_gen_date: "生成日期: ",
        pdf_key_title: "核心加密密钥 (ENCRYPTION_KEY)",
        pdf_usage_title: "如何使用?",
        pdf_usage_desc: "如果您的服务器环境变量丢失，请在重新部署时将此密钥填入环境变量 ENCRYPTION_KEY 即可恢复所有数据。",
        pdf_warning: "警告：切勿遗失此密钥，这是恢复您数据的唯一途径。",
        pdf_footer: "NodeAuth  A Secure 2FA Management Tool"
    };
    yi = {
        light: "浅色模式",
        dark: "深色模式",
        auto: "跟随系统"
    };
    bi = {
        common: ti,
        pwa: ai,
        search: ni,
        menu: ri,
        about: oi,
        vault: si,
        settings: ii,
        security: li,
        backup: ci,
        migration: ui,
        tools: _i,
        auth: di,
        camera: fi,
        api_errors: mi,
        healthCheck: pi,
        passkey: gi,
        emergency: hi,
        theme: yi
    };
    vi = {
        confirm: "Confirm",
        cancel: "Cancel",
        setup: "Setup",
        disable: "Disable",
        tip: "Tip",
        success: "Success",
        error: "Error",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        add: "Add",
        close: "Close",
        back: "Back",
        copy: "Copy",
        refresh: "Refresh",
        loading_failed: "Component loading failed, please check your network connection",
        copy_success: "Copy success",
        copy_fail: "Copy failed",
        offline_mode: "Network disconnected, the application is currently in offline cache mode",
        loading_data: "Fetching data, please wait...",
        resource_loading: "Loading resources...",
        data_security: "Data Security",
        warning: "Warning",
        uncategorized: "Uncategorized",
        all: "All",
        encrypted: "Encrypted",
        plaintext: "Plaintext",
        remove: "Remove",
        other: "Other",
        no_data: "No Data Found",
        understand: "Understand",
        offline_tag: "Offline",
        network_error_tag: "Network Error"
    };
    ki = {
        install: "Install App",
        install_desc: "Install NodeAuth on your device for quick access and offline capability",
        already_installed: "Installed",
        update_available: "Update Available",
        update_ready: "A new version of NodeAuth is ready. Please click the button below to complete the update.",
        pwa_refresh: "Update Now",
        update_success: "Update Successful",
        offline_feature_error_title: "Network Required for Initial Use",
        offline_feature_error_desc: "This advanced feature requires a network connection to download its necessary components for the first time. Please connect to the internet and try again."
    };
    Ei = {
        placeholder: "Search service, account, or category...",
        no_matching_accounts: "No matching accounts found",
        selected_items: "Selected {count} items",
        select_all_loaded: "Select all loaded"
    };
    wi = {
        vault: "Vault List",
        add: "Add Account",
        backup: "Cloud Backup",
        migration: "Migration",
        tools: "Toolbox",
        passkey: "Passkey",
        security: "Security",
        settings: "Settings",
        appearance: "Appearance",
        language: "Language",
        theme: "Theme Mode",
        about: "About",
        logout: "Sign Out",
        mobile: {
            vault: "Vault",
            data: "Data",
            tools: "Tools",
            settings: "Settings"
        }
    };
    Ai = {
        title: "About",
        version: "Version",
        commit: "Commit Hash",
        platform: "Platform",
        tagline: "A Secure 2FA Management Tool",
        open_source_github: "Open Source on GitHub",
        documentation: "Documentation"
    };
    Ti = {
        go_add_vault: "Go to Add Account",
        loading_more: "Loading more...",
        no_more_accounts: "No more accounts",
        reorder_offline_disabled: "Sorting is not supported in offline mode",
        edit_account: "Edit Account",
        service_name: "Service Name (e.g., Google, GitHub)",
        account_identifier: "Account Identifier (e.g., Email)",
        category_optional: "Category (Optional)",
        empty_vault: "Empty here, go add your first 2FA account!",
        export_account: "Export",
        add_account: "Manual",
        add_scan: "Scan QR Code",
        add_mode_camera: "Camera",
        add_mode_image: "Image",
        service: "Service",
        account: "Account",
        secret: "Secret",
        category: "Category",
        delete_confirm: "Are you sure you want to delete {service}?",
        delete_success: "Account deleted",
        delete_batch_confirm: "Are you sure you want to delete {count} selected account(s)?",
        delete_batch_success: "Successfully deleted {count} account(s)",
        copy_failed: "Copy failed. Your browser might disable clipboard operations.",
        qr_invalid: "Invalid QR code format. Please scan a valid OTP QR code.",
        add_success: "Account added successfully",
        update_success: "Account details updated",
        not_generated_yet: "Token has not been generated yet, please wait.",
        duplicate_confirm: "An account might already exist. Continue adding?",
        generate_fail: "Invalid OTP URI",
        add_account_tip: "Support adding accounts via camera scan, image recognition, or manual input.",
        invalid_qr_format: "Invalid QR code format, please scan a valid OTP QR code.",
        service_label: "Service",
        unknown_service: "Unknown Service",
        account_label: "Account",
        unnamed_account: "Unnamed Account",
        param_label: "Params",
        digits_suffix: " digits",
        period_suffix: "s",
        confirm_add_title: "Parsed successfully, confirm add?",
        input_service_placeholder: "Enter service name",
        input_account_placeholder: "Enter account or email",
        input_secret_label: "Secret Key (Base32)",
        input_secret_placeholder: "Enter a secret key of 16+ characters",
        generate_random_secret: "Randomly generate secret",
        digits_label: "Digits",
        digits_5: "5 Digits (Steam)",
        digits_6: "6 Digits",
        digits_8: "8 Digits",
        period_label: "Period",
        period_30s: "30 Seconds",
        period_60s: "60 Seconds",
        algorithm_label: "Algorithm",
        algo_sha1: "SHA1 (Default)",
        algo_steam: "Steam Guard",
        input_category_placeholder: "e.g., Work, Personal",
        confirm_add_btn: "Confirm Add",
        require_secret: "Please enter a secret key",
        secret_min_length: "Secret length is usually at least 16 chars",
        secret_invalid_char: "Contains invalid characters (A-Z, 2-7 only)",
        require_service: "Please enter service name",
        require_account: "Please enter account identifier",
        export_qr_tip: "Scan the QR code with any 2FA app to add this account",
        hide_secret: "Hide",
        show_secret: "Show",
        copy_secret: "Copy Secret",
        copy_otp_url: "Copy OTPAuth URL",
        total_count: "Total {count} accounts",
        filtered_count: 'Total {count} accounts in "{category}"',
        sort_updated: "Account order updated",
        sort_by: "Sort By",
        sort_name: "Name (A-Z)",
        sort_newest: "Recently Added",
        offline_pending_sync: "Offline Mode: {count} changes pending sync",
        pending_sync_tip: "Changes to this account are pending cloud sync",
        conflict_detected_tip: "Conflict detected! Click to resolve",
        conflict_notice: "Other device updated this item. Keep local?",
        force_sync: "Force Sync",
        discard_local: "Discard",
        conflict_force_applied: "Force sync triggered",
        conflict_discarded: "Local changes discarded",
        batch_import_entry_title: "Batch Import from other Apps",
        batch_import_entry_desc: "Support migrating from 20+ apps directly"
    };
    Si = {
        appearance_desc: "Personalize your interface style, language and layout display.",
        theme_desc: "Choose the visual style that suits you",
        language_desc: "Select your preferred interface language",
        display_layout: "List Layout",
        layout_desc: "Choose the list layout that suits you",
        layout_standard: "Standard Layout",
        layout_compact: "Compact Layout",
        language_changed: "Language changed"
    };
    Ii = {
        title: "Security Settings",
        ghost_mode: "Ghost Mode",
        ghost_mode_desc: "Hides sensitive codes and applies a blur overlay when the app is backgrounded.",
        ghost_mode_toggle: "Enable Ghost Mode",
        ghost_mode_active: "Ghost Mode Active",
        ghost_mode_inactive: "Ghost Mode Disabled",
        offline_mode: "Offline Mode",
        offline_mode_desc: "Enable to physically block all network requests; app runs solely on local synced cache.",
        offline_mode_active: "Offline Mode Active",
        offline_mode_inactive: "Offline Mode Inactive",
        offline_check_title: "Offline Readiness Check",
        ready_label: "Ready",
        offline_check_desc: "Verifying local secure vault environment...",
        offline_incomplete_msg: "Some resources are not yet cached. Please download the missing resources.",
        offline_complete_msg: "Verification complete! Local environment is 100% ready for offline operation.",
        check_accounts: "Account Data",
        check_components: "Core Components",
        check_engine: "Security Engine",
        check_assets: "Static Assets",
        check_sync: "Sync Status",
        download_offline: "Download Offline Resources",
        downloading: "Downloading resources...",
        confirm_enable_offline: "Confirm Enable Offline Mode",
        sync_success: "Offline resources synced successfully",
        sync_partial: "Resources downloaded but some checks failed. Please try downloading again.",
        sync_failed: "Sync failed",
        auth_missing: "Local security authorization has expired. Please log in again to ensure this device has offline storage capability.",
        vault_unreachable: "Unable to reach account API. Please check your network and try again.",
        insecure_context_blocked: "Insecure context detected. Browser has disabled offline cache (HTTPS or localhost required).",
        clipboard_cleared: "Clipboard cleared for security reasons",
        clipboard_wipe_failed: "System restriction: unable to auto-clear clipboard. Please clear it manually.",
        devices: "Login Device Management",
        devices_desc: "View and manage all logged in devices.",
        current_device: "Current Device",
        session_created_at: "Registered at",
        session_secure: "Securely Encrypted Session",
        sign_out_all_others: "Sign out all other devices",
        confirm_remove_device: "Remove Device",
        confirm_remove_device_desc: "Are you sure you want to force sign out the device '{device}'? You will need to log in again on that device.",
        confirm_signout_all_desc: "Are you sure you want to sign out all other active sessions except the current one? This is a sensitive operation.",
        cannot_remove_current: "You cannot remove the device you are currently using",
        remove: "Remove",
        pin_lock: "App Security Lock (6-digit PIN)",
        pin_lock_desc: "Requires a 6-digit PIN verification on app startup or return from background.",
        locked_active: "Protected",
        setup_pin_title: "Setup Security PIN",
        setup_pin_tip: "Set a 6-digit numeric PIN. If forgotten, you must reset the app and re-sync.",
        biometric_unlock: "Biometric Quick Unlock",
        biometric_unlock_desc: "Allow Fingerprint or FaceID to unlock the vault quickly.",
        biometric_prf_unsupported: "Current hardware/OS does not support",
        app_locked: "APP Locked",
        enter_pin_to_unlock: "Enter 6-digit PIN to unlock",
        forgot_pin: "Forgot PIN?",
        unlocked: "Unlocked successfully",
        reset_confirm_title: "Confirm App Reset?",
        reset_confirm_message: "Resetting will clear all local data. You will need to log in again and sync from the server.",
        unknown_device: "Unknown Device",
        disable_pin_title: "Verify Identity to Disable Security Lock",
        disable_pin_tip: "For security reasons, disabling the lock requires verifying your current 6-digit PIN.",
        confirm_disable: "Confirm Disable",
        pin_setup_success: "PIN Lock enabled",
        pin_disable_success: "Security lock successfully disabled",
        pin_verify_failed: "PIN verification failed, please try again",
        biometric_enabled: "Biometric unlock enabled",
        biometric_disabled: "Biometric unlock disabled",
        biometric_hardware_unsupported_title: "Hardware Compatibility Limited",
        biometric_hardware_unsupported_msg: "Your device supports Passkeys but does not support hardware-level key derivation (PRF extension). For security reasons, biometric quick unlock cannot be enabled. Please continue using PIN protection.",
        biometric_enable_failed: "Failed to enable",
        auto_lock_delay: "Auto-lock Delay",
        auto_lock_delay_desc: "If the app is returned from background within this period, it won't require re-authentication.",
        delay_0s: "Immediately",
        delay_30s: "30 Seconds",
        delay_1m: "1 Minute",
        delay_5m: "5 Minutes",
        delay_10m: "10 Minutes",
        auto_lock_delay_updated: "Auto-lock delay updated"
    };
    Li = {
        providers: "Backup Providers",
        add_provider: "Add",
        cloud: "Cloud Backup",
        restore: "Restore",
        type: "Provider Type",
        name: "Config Name",
        config: "Settings",
        auto_backup: "Auto Backup",
        password_required: "Auto backup requires a password (min 6 chars)",
        test_success: "Connection successful",
        test_failed: "Connection failed",
        save_success: "Cloud backup config saved",
        delete_provider_confirm: "Are you sure you want to delete this backup source?",
        backup_success: "Backup completed successfully to {provider}",
        restore_success: "Restored successfully. {count} new accounts added.",
        no_new_accounts: "All restored accounts already exist, no new items added.",
        management: "Management",
        fetching_sources: "Fetching backup sources, please wait...",
        test_connection: "Test Connection",
        connection_normal: "Connection Normal",
        connection_failed: "Connection Failed",
        auto_backup_on: "Auto Backup Enabled",
        last_backup: "Last Backup: ",
        never_backed_up: "Never",
        backup_now: "Backup Now",
        restore_data: "Restore Data",
        empty_provider: "No backup sources, click top right to add",
        edit_provider: "Edit Backup Source",
        type_label: "Type",
        type_s3: "S3 Object Storage",
        type_webdav: "WebDAV",
        type_telegram: "Telegram",
        type_gdrive: "Google Drive",
        type_onedrive: "OneDrive",
        type_baidu: "Baidu Netdisk",
        type_dropbox: "Dropbox",
        type_github: "GitHub",
        github_token: "Personal Access Token",
        github_token_placeholder: "ghp_xxxxxxxx...",
        github_owner: "Owner",
        github_owner_placeholder: "e.g., nodeauth",
        github_repo: "Repository Name",
        github_repo_placeholder: "e.g., nodeauth-backup",
        github_branch: "Branch",
        github_branch_placeholder: "e.g., main",
        require_github_token: "Please enter GitHub PAT",
        require_github_owner: "Please enter Repository Owner",
        require_github_repo: "Please enter Repository Name",
        type_email: "Email (SMTP)",
        email_smtp_host: "SMTP Server",
        email_smtp_port: "Port",
        email_smtp_host_placeholder: "e.g., smtp.gmail.com",
        email_smtp_secure: "Encryption",
        email_smtp_secure_ssl: "SSL / TLS (Port 465)",
        email_smtp_secure_tls: "STARTTLS (Port 587)",
        email_smtp_user: "Sender Account",
        email_smtp_user_placeholder: "Sender email address",
        email_smtp_password: "Auth Code / Password",
        email_smtp_from: "Sender Name (Optional)",
        email_smtp_from_placeholder: "e.g., NodeAuth Backup",
        email_smtp_to: "Recipient Email",
        email_smtp_to_placeholder: "Email address to receive the backup",
        email_tip: "Backup files will be sent as encrypted attachments to the specified email. Backup history is only stored locally.",
        email_download_not_supported: 'Email backups cannot be downloaded directly. Please open your email, save the attachment manually, and then use the "Migration" feature to import.',
        require_email_smtp_host: "Please enter SMTP server address",
        require_email_smtp_user: "Please enter the sender account",
        require_email_smtp_password: "Please enter auth code or password",
        require_email_smtp_to: "Please enter recipient email address",
        email_backup_subject: "📦 NodeAuth Scheduled Backup {time}",
        email_backup_body_intro: `Hello,

This is your NodeAuth automatic scheduled backup file. Please keep it safe.`,
        email_backup_body_filename: "Filename: {filename}",
        email_backup_body_time: "Backup Time: {time}",
        email_backup_body_note: "Note: The attachment is encrypted with AES-256. Please use your backup password to decrypt and restore it.",
        email_backup_body_footer: `---
NodeAuth Automatic Backup System`,
        name_label: "Name (Alias)",
        name_placeholder: "e.g., Google Drive",
        webdav_url: "WebDAV URL",
        username: "Username",
        password: "Password",
        modify: "Modify",
        save_dir: "Save Directory",
        s3_endpoint: "Endpoint (API URL)",
        s3_bucket: "Bucket Name",
        s3_region: "Region",
        s3_path_prefix: "Path Prefix (Optional)",
        auth_with_google: "Authorize Google Drive",
        auth_with_microsoft: "Authorize OneDrive",
        auth_with_baidu: "Authorize Baidu Netdisk",
        auth_with_dropbox: "Authorize Dropbox",
        gdrive_auth_tip: "Back up to your personal Google Drive for full data sovereignty and high availability.",
        onedrive_auth_tip: "Back up to your personal OneDrive for full data sovereignty and high availability.",
        baidu_auth_tip: "Back up to your personal Baidu Netdisk for full data sovereignty and high availability.",
        dropbox_auth_tip: "Back up to your personal Dropbox for full data sovereignty and high availability.",
        gdrive_auth_success: "Google Drive authorized successfully",
        onedrive_auth_success: "OneDrive authorized successfully",
        gdrive_refresh_token: "Authorization Token",
        onedrive_refresh_token: "Authorization Token",
        baidu_refresh_token: "Authorization Token",
        dropbox_refresh_token: "Authorization Token",
        gdrive_token_active: "OAuth Token Active",
        onedrive_token_active: "OAuth Token Active",
        baidu_token_active: "OAuth Token Active",
        dropbox_token_active: "OAuth Token Active",
        gdrive_folder_tip: "Recommended to use alphanumeric paths. e.g., /backups",
        onedrive_folder_tip: "Recommended to use alphanumeric paths. e.g., /backups",
        baidu_folder_tip: "Backup files will be saved to: /apps/nodeauth-backup",
        save_dir_placeholder: "/nodeauth-backup",
        re_authorize: "Re-authorize",
        waiting_authorization: "Waiting for authorization...",
        token_expired_or_revoked: 'Authorization has expired. Click "Re-authorize" to reconnect the storage provider.',
        oauth_token_revoked: "Authorization token has expired, please re-authorize.",
        github_token_invalid_or_revoked: "Personal Access Token is invalid or expired. Please enter a valid Token.",
        authorized_success_gd: "Google Drive Connected Successfully",
        authorized_success_ms: "OneDrive Connected Successfully",
        authorized_success_baidu: "Baidu Netdisk Connected Successfully",
        authorized_success_dropbox: "Dropbox Connected Successfully",
        require_google_auth: "Please authorize Google Drive first",
        require_microsoft_auth: "Please authorize OneDrive first",
        require_baidu_auth: "Please authorize Baidu Netdisk first",
        require_dropbox_auth: "Please authorize Dropbox first",
        telegram_bot_token: "Bot Token",
        telegram_bot_token_placeholder: "123456789:ABCdefGHIjklmNOPQrsTUVwxyZ",
        telegram_chat_id: "Chat ID",
        telegram_chat_id_placeholder: "e.g., 123456789 or -100123456789",
        telegram_chat_id_tip_title: "How to get Chat ID",
        telegram_chat_id_tip_1: "1. Private chat back up: Search for userinfobot and send /start to get your ID.",
        telegram_chat_id_tip_2: "2. Group/Channel back up: Add your Bot to the destination group and grant message sending & deleting permissions, then send any message to get the group ID (usually starts with -100).",
        require_telegram_token: "Please enter Bot Token",
        require_telegram_chat_id: "Please enter Chat ID",
        file_unavailable: "This backup file is unavailable or deleted on Telegram. Do you want to clean up this invalid record?",
        record_invalid: "Record Invalid",
        confirm_clean: "Clean Up",
        cancel_clean: "Not Now",
        clean_record_success: "Invalid record cleaned up",
        clean_record_fail: "Failed to clean record",
        auto_backup_config: "Auto Backup Configuration",
        switch_on: "ON",
        switch_off: "OFF",
        encrypt_password: "Encryption Password",
        keep_old_pwd: "Keep Original Password",
        set_new_pwd: "Set New Password",
        input_encrypt_pwd: "Enter encryption password",
        continue_use_old_pwd: "The system will continue to use the previous auto-backup password.",
        retain_count_label: "Retain Recent Backups",
        retain_zero_tip: "0 means no limits or cleanup for historical backups.",
        save: "Save",
        encrypted_backup: "Encrypted Backup",
        backup_security_tip: "Please enter an encryption password to secure the backup file.",
        use_auto_pwd: "Use Auto Backup Password",
        use_new_pwd: "Use New Password",
        input_custom_pwd: "Enter custom encryption password (at least 6 chars)",
        baidu_auth_failed: "Baidu Netdisk authorization failed",
        dropbox_auth_failed: "Dropbox authorization failed",
        start_backup: "Start Backup",
        select_restore_file: "Select Backup to Restore",
        filename: "Filename",
        size: "Size",
        time: "Time",
        action: "Action",
        decrypt_restore: "Decrypt & Restore",
        restore_warning: "Restoring will overwrite all current data!",
        input_restore_pwd: "Enter encryption password used for backup",
        confirm_restore: "Confirm Overwrite",
        center_title: "Cloud Backup Center",
        center_desc: "Configure multiple backup sources (Email, WebDAV, S3, etc.) to ensure data safety.",
        s3_region_placeholder: "auto or us-east-1",
        password_length_req: "Required, length must be ≥ 6 characters.",
        require_name: "Please enter a name",
        require_webdav_url: "Please enter WebDAV URL",
        require_username: "Please enter username",
        require_password: "Please enter password",
        require_endpoint: "Please enter Endpoint",
        require_bucket: "Please enter Bucket",
        require_access_key: "Please enter Access Key ID",
        require_secret_key: "Please enter Secret Access Key",
        require_auto_backup_pwd: "Please enter auto backup password",
        config_missing: "Missing configurations in backup source",
        create_success: "Created successfully",
        update_success: "Updated successfully",
        delete_confirm: "Delete Confirmation",
        delete_warning: "This will permanently delete the backup profile (it will NOT affect backed up data in the cloud). Continue?",
        cancel_delete: "Deletion cancelled",
        delete_success: "Deleted successfully",
        testing_connection: "Testing connection...",
        fetching_configs: "Fetching config list...",
        saving_config: "Saving config...",
        password_min_length: "Password must be at least 6 characters",
        password_no_space: "Password cannot contain spaces",
        password_not_all_number: "Password cannot be all numbers",
        backup_finish_title: "Cloud Backup Finished",
        backup_success_msg: "Successfully backed up data",
        fetch_backup_fail: "Failed to fetch backup file",
        fetch_list_fail: "Failed to fetch backup list",
        restore_finish_title: "Data Restoration Finished",
        processed_total: "Processed",
        backup_files_count: "backup files",
        base_accounts_count: "base accounts",
        import_success_count: "Successfully imported",
        new_accounts: "new accounts!",
        skipped_duplicates: "Automatically skipped",
        existing_accounts: "existing accounts."
    };
    Pi = {
        export: "Export Data",
        import: "Import Data",
        export_format: "Export Format",
        export_password: "Encryption Password (min 6 chars)",
        export_password_confirm: "Confirm Password",
        password_mismatch: "Passwords do not match!",
        password_weak: "Password too weak. It must be at least 6 characters.",
        select_account: "Please select at least one account.",
        export_success: "Export completed.",
        export_failed: "Export failed. Please try again later.",
        file_too_large: "The file {name} is too large. Limit is 10MB.",
        import_password: "Decryption Password",
        password_wrong: "Decryption failed: Incorrect password or unsupported standard.",
        no_valid_data: "No valid account data found to import.",
        import_success: "Import successful",
        task_build_pf: "Building Data: PhoneFactor Dataset",
        detect_steam_mafile: "Detected Steam .maFile backup, auto-applying algorithm...",
        err_pf_parse: "[PhoneFactor] Parsing failed: {detail}",
        task_prepare: "Preparing to parse: {name}",
        task_scan_qr: "Extracting QR code from image: {name}",
        err_scan_qr: "[{name}] Image parsing failed: {msg}",
        err_read_fail: "[{name}] Read failed",
        err_unrecognized: "[{name}] Unrecognized file format.",
        task_build_file: "Building Data: {name}",
        err_parse_fail: "[{name}] Parsing failed: {detail}",
        err_read_abnormal: "[{name}] Read error",
        task_decrypting: "Decrypting data...",
        err_user_cancel: "[{name}] User cancelled password input",
        import_anomaly: "Import Error",
        task_saving: "Merging and saving... ({count} accounts)",
        msg_total_files: "<div>Processed <b>{count}</b> files in total.</div>",
        msg_success_accounts: '<div style="color:var(--el-color-success)">🎉 Successfully imported <b>{count}</b> new accounts!</div>',
        msg_no_new_accounts: '<div style="color:var(--el-color-warning)">⚠️ All accounts already exist, no new accounts added.</div>',
        msg_duplicates_skipped: '<div style="color:var(--el-text-color-secondary)">ℹ️ Skipped <b>{count}</b> duplicated accounts.</div>',
        msg_error_summary: '<div style="color:var(--el-color-danger); margin-top: 5px;">❌ <b>Error Summary:</b><br>{errors}</div>',
        msg_offline_queued: '<div style="color:var(--el-color-warning); margin-top: 5px;">☁️ <b>Offline Mode</b>: Accounts queued locally and will auto-sync when back online.</div>',
        batch_import_finished: "Batch Import Finished",
        encrypted_file: "Encrypted file",
        export_desc: "Select the export format you need. Please note that plaintext exports have security risks.",
        hub_desc: "Manage the import, export, and secure backup of your account data",
        system_backup: "System Backup",
        encrypted_json: "Encrypted Backup (.json)",
        plaintext_json: "Plaintext Backup (.json)",
        mobile_app: "Mobile 2FA App",
        migrate_ga: "Migrate to Google Auth",
        generic_format: "Generic Formats",
        otpauth_txt: "OTPAuth URI (.txt)",
        spreadsheet_csv: "Spreadsheet (.csv)",
        steam_guard_title: "Steam Guard",
        steam_guard_desc: "Support .maFile (SDA) or steam://",
        steam_guard_desc_guide: "Supports direct import of <b>.maFile</b> (Steam Desktop Authenticator) or <b>steam://</b> links. System will auto-detect and apply 5-digit alphanumeric algorithm.",
        html_page: "HTML Webpage (.html)",
        export_pwd_title: "Set Export Password",
        pwd_placeholder_strong: "Enter strong password",
        pwd_placeholder_again: "Re-enter password",
        start_encrypt_dl: "Start Encrypting & Download",
        warning_title: "⚠️ Security Warning",
        warning_alert_title: "Risk Warning",
        warning_desc: "You are exporting unencrypted plaintext data. Anyone with access to this file can access your account codes!",
        confirm_export: "Confirm Export",
        ga_title: "Migrate to Google Authenticator",
        ga_desc_1: "Open Google Authenticator on your phone and scan the QR code",
        ga_desc_multiple: "(Too many accounts, generated in batches. Please scan sequentially)",
        btn_prev: "Prev",
        btn_next: "Next",
        finish: "Done",
        select_account_title: "Select Accounts to Export",
        search_account: "Search service or account...",
        select_all_accounts: "Select all accounts",
        select_all_search: "Select {count} searched accounts",
        selected_count: "Selected: {selected} / {total}",
        no_matching: "No matching accounts",
        ga_steam_filter_notice: "Steam accounts are hidden for compatibility (Google Authenticator does not support the Steam custom algorithm).",
        migrate_btn: "Migrate {count} accounts",
        center_title: "Data Import",
        import_desc: "Support restoring data from various 2FA apps or system backups.",
        auto_identify_tip: "💡 Automatically recognize file types",
        drag_drop_tip: "Drag backup files or migration QR screenshots here, or <em>click to upload</em>",
        support_desc: "Support List",
        ga_auth_desc: "Export 'Transfer QR code' in the App and upload the screenshot (.png / .jpg)",
        ms_auth_desc: "Microsoft Authenticator",
        ms_auth_detail: "Only support Android, export the following 3 files and upload them together",
        import_guide: "Import Guide",
        batch_import_processing: "📦 Batch Import Processing",
        batch_progress: "{processed} / {total} tasks completed",
        decrypt_backup_title: "🔓 Decrypt Backup File",
        detect_aegis: "Aegis encrypted backup detected",
        detect_proton_auth: "Proton Authenticator encrypted backup detected",
        detect_proton_pass: "Proton Pass encrypted backup detected (.pgp)",
        detect_2fas: "2FAS Auth encrypted backup detected",
        detect_ente: "Ente Auth encrypted backup detected",
        detect_bitwarden_pass: "Bitwarden Pass encrypted backup detected",
        detect_system: "System encrypted backup detected",
        input_decrypt_pwd_label: "Please enter the decryption password:",
        input_decrypt_pwd_placeholder: "Enter the password set during export",
        confirm_decrypt_import: "Confirm Decrypt & Import",
        system_backup_format: "System Backup",
        password_manager_format: "Password Manager",
        encrypted_backup_json: "Encrypted Backup (.json)",
        plaintext_backup_json: "Plaintext Backup (.json)",
        mobile_app_format: "Mobile 2FA Apps",
        proton_auth: "Proton Auth",
        lastpass_auth: "LastPass Authenticator (.json)",
        generic_json: "Generic Format (.json)",
        fetching_accounts: "Fetching account data...",
        no_accounts_to_export: "No accounts to export",
        encrypting: "Encrypting...",
        generating_file: "Generating export file...",
        generating_qr: "Generating QR code...",
        reading_backup: "Reading backup file...",
        uploading_processing: "Uploading and processing...",
        unsupported_format: "Unrecognized or unsupported file format.",
        unsupported_decrypt: "Decrypting from",
        encrypted_backup_tail: "is not supported currently."
    };
    Ni = {
        apps_review_title: "2FA Apps Review",
        apps_review_desc: "Mainstream 2FA Applications Review and Anti-Pitfall Guide",
        apps_review_table: {
            app_name: "App Name",
            platforms: "Platforms",
            website: "Website",
            pros: "Pros",
            cons: "Cons",
            security: "Security Incidents",
            summary: "Summary",
            rating: "Rating"
        },
        apps: {
            "2fas": {
                pros: "Open source, fully local-first, supports secure iCloud/G-Drive sync.",
                cons: "Not a true standalone desktop app; you must scan a QR code on PC to use the browser extension.",
                security: "No security incidents",
                summary: "Highly trusted local-first 2FA, though the PC experience can be slightly tedious."
            },
            aegis: {
                pros: "Fully open source, heavy local encryption, wildly powerful export & format compatibility.",
                cons: "Android-exclusive, lacks native cross-platform cloud sync or an iOS version.",
                security: "No security incidents",
                summary: "The absolute top choice for Android privacy geeks and power users."
            },
            ente: {
                pros: "Fully open source, End-to-End Encrypted cloud sync, offers native desktop apps and a web vault.",
                cons: "Since all data relies on cloud sync, it may lack the purity sought by offline-only purists.",
                security: "No security incidents",
                summary: "The rapidly growing king of cross-platform sync, serving as Authy's perfect open-source successor."
            },
            proton: {
                pros: "Deeply integrated into the highly private Proton ecosystem, E2EE sync.",
                cons: "Tied to Proton Pass ecosystem lock-in.",
                security: "No security incidents",
                summary: "Excellent choice for existing Proton ecosystem users with top-tier privacy."
            },
            bitwarden: {
                pros: "Open source and free, backed by the reputable Bitwarden security team.",
                cons: "The standalone authenticator app is fairly basic right now (though BW main app also does 2FA).",
                security: "No security incidents",
                summary: "Pure and solid app endorsed by a reputable giant, ideal for minimalists."
            },
            google: {
                pros: "Extremely lightweight, works out of the box, offers highly convenient QR batch export, and now supports cloud sync.",
                cons: "Closed source. Early sync lacked E2EE (though improved recently). No official desktop app.",
                security: "Initial cloud sync was criticized for lacking E2EE, but this has been addressed.",
                summary: "A pure, widely-adopted foundation app. Its QR batch export is a killer feature."
            },
            microsoft: {
                pros: "If you are deep in the Microsoft ecosystem, it supports passwordless logins seamlessly.",
                cons: "Severely bloated, forces MS account binding, absolutely refuses standard exports (locking you in), and backups cannot cross iOS/Android.",
                security: "Numerous user reports of complete data loss when restoring on a new device, posing a significant security risk.",
                summary: "Way too heavy for pure TOTP usage, and its aggressive 'no-export' data monopoly is repulsive (avoid)."
            },
            freeotp: {
                pros: "Open source project maintained by Red Hat, pure and free.",
                cons: "Extremely outdated UI, feels abandoned with rare updates.",
                security: "No security incidents",
                summary: "A nostalgic open-source tool, but no longer fits modern daily usage."
            },
            authy: {
                pros: "Pioneer in cloud sync, very convenient historically.",
                cons: "Closed source, forces phone number binding, holds keys hostage (no exports), desktop apps shut down.",
                security: "Parent company Twilio suffered severe hacker breaches leaking sensitive data.",
                summary: "Once a king, now an absolutely anti-recommended app due to privacy and lock-in risks."
            },
            lastpass: {
                pros: "Convenient for users deeply tied into LastPass ecosystem.",
                cons: "Closed-source cloud architecture, intertwined with LastPass infrastructure.",
                security: "LastPass suffered catastrophic global data breaches recently.",
                summary: "Due to LastPass's severe reputation crisis, avoid entrusting critical 2FA here."
            },
            raivo: {
                pros: "Was previously the most recommended open-source iOS 2FA app.",
                cons: "Recently acquired by a shady shell company (Mobime).",
                security: "Disastrous update randomly deleted all local seeds for huge amounts of users, unrecoverable.",
                summary: "A catastrophic tale of trust betrayal and data destruction. DO NOT USE."
            }
        },
        qr_parser: "QR Code Parser",
        password_generator: "Password Gen",
        time_sync: "Time Sync",
        totp_sandbox: "TOTP Sandbox",
        parse_success: "Parsed successfully",
        invalid_uri: "Invalid OTP URI",
        secret_required: "Secret is required.",
        service_required: "Please provide Service and Account name.",
        save_to_vault: "Save to Vault",
        sync_success: "Sync complete. Offset: {offset}ms",
        sync_failed: "Failed to connect to the server.",
        select_chars: "Please select at least one character type.",
        title: "Utility Toolbox",
        desc: "Practical utilities like password generation, time sync and QR parsing.",
        totp_secret_title: "TOTP Secret Tool",
        totp_secret_desc: "Generate and convert Base32 secrets",
        password_gen_title: "Password Generator",
        password_gen_desc: "Generate strong random passwords",
        time_sync_title: "Time Sync Tool",
        time_sync_desc: "Check time drift between local and server",
        qr_parser_title: "QR Code Parser",
        qr_parser_desc: "Extract OTP links from QR code images",
        length: "Length",
        regenerate: "Regenerate",
        select_one_char_type: "Select at least one character type",
        password_copied: "Password copied",
        qr_result: "Parsed Result",
        qr_parsed: "QR parsed successfully",
        local_time: "Local Device Time",
        server_time: "Server Time (Estimated)",
        time_offset: "Time Offset",
        network_latency: "Network Latency",
        check_now: "Check Now",
        sync_completed: "Sync complete, offset {offset}ms",
        secret_config: "Secret Configuration",
        basic_info: "Basic Info",
        preview: "Result Preview",
        refresh_after: "to refresh",
        advanced_settings: "Advanced Settings",
        reset_time: "Reset",
        prev_period: "Prev Period",
        next_period: "Next Period",
        scanner_camera: "Camera Scan",
        scanner_image: "Image Parse",
        camera_click_to_open: "Click to open camera",
        camera_open: "Open Camera",
        camera_stop: "Stop Camera",
        image_placeholder: "Click or drag QR image here",
        camera_unsupported: "Camera not supported",
        camera_access_denied: "Camera access denied",
        qr_not_recognized: "No valid QR code recognized",
        sync_normal: "Time Sync Normal",
        sync_normal_desc: "Local time is accurate.",
        sync_warning: "Slight Drift",
        sync_warning_desc: "Minor time drift. You can still use 2FA.",
        sync_error: "Significant Time Drift",
        sync_error_desc: "Drift is too large. 2FA codes will be invalid.",
        sync_offline: "Using Offline Cached Offset",
        sync_offline_desc: "Network disconnected. Using the previously stored time drift value to estimate the true time.",
        secret_empty: "Secret cannot be empty",
        fill_info: "Please fill service and account details",
        current_offset: "Offset",
        totp_hex: "Hexadecimal",
        totp_config_preview: "Configure parameters to generate a preview",
        totp_algorithm: "Algorithm",
        totp_algo_sha1: "SHA-1",
        totp_digits: "Digits",
        totp_period: "Period",
        totp_scan_qr_title: "Scan QR Code",
        health_check_title: "System Security Check",
        health_check_desc: "Check core environment security configurations and provide repair suggestions"
    };
    Oi = {
        session_expired: "Session has expired, please log in again",
        subtitle: "A Secure 2FA Management Tool",
        login: "Login",
        logout_success: "Signed out securely.",
        logout_confirm: "Are you sure you want to sign out?",
        fetch_providers_failed: "Failed to fetch identity providers, please try again later",
        oauth_failed: "Failed to retrieve OAuth link. Provider not configured.",
        oauth_network_error: "Network error while getting OAuth status.",
        login_with: "Login with {provider}",
        privacy_title: "Privacy & Security Note",
        privacy_desc: "The system validates identity based on the OAuth 2.0 protocol and will never capture, log, or transmit your password.",
        passkey_login: "Login with Passkey",
        passkey_not_supported: "Your browser or device does not support Passkeys",
        secure_login_in_progress: "Secure login in progress",
        secure_login_sub: "Please wait, exchanging security credentials with {provider}...",
        auth_failed_title: "Authorization Failed",
        back_to_login: "Back to Login",
        default_provider: "Identity Provider",
        oauth_declined: "You declined the authorization request from {provider}",
        telegram_missing_hash: "Telegram login missing signature parameter",
        missing_auth_params: "URL missing required authorization credential parameters",
        state_mismatch: "Security Warning: State validation failed, request may be tampered with",
        login_rejected: "Login validation rejected by server",
        network_abnormal: "Network request abnormal, please try again later",
        web3_login: "Login with Web3 Wallet",
        web3_qr_title: "Scan to Connect (WalletConnect)",
        web3_auth_flow: "Web3 Authentication Flow",
        web3_scan_tip: "Scan this QR code using MetaMask, Trust Wallet or any WalletConnect compatible App.",
        step_connect: "Connect",
        step_sign: "Sign",
        step_verify: "Verify",
        web3_status_preparing: "Preparing WebSocket encrypted channel...",
        web3_status_connected: "Connected! Return to wallet for signing challenge",
        web3_status_verifying: "Syncing signature to backend...",
        web3_action_connect: "Go to Wallet for Authorization",
        web3_action_sign: "Open Wallet to Sign",
        web3_action_verifying: "Verifying Identity...",
        web3_fallback_tip: "If redirection fails, copy the link and open it in your wallet browser:",
        web3_notify_signature: "Channel established! Please return to your wallet to complete the signature.",
        web3_return_to_wallet: "Please return to {wallet} to sign",
        web3_reopen_wallet: "Re-open {wallet}",
        web3_return_to_system_wallet: "Please return to system wallet to sign",
        web3_try_system_reopen: "Try system re-open"
    };
    Ci = {
        not_supported: "Your browser does not support camera access.",
        no_access: "Cannot access camera. Please review your permission settings.",
        no_qr_found: "No valid QR code was detected in the image."
    };
    Di = {
        offline: "Offline mode: action not allowed.",
        session_expired: "Session expired, please login again.",
        unauthorized: "Unauthorized access.",
        forbidden: "Forbidden.",
        server_error: "Server error.",
        request_failed: "Request failed",
        network_error: "Network request failed",
        account_not_found: "Account not found",
        account_exists: "Account already exists",
        invalid_secret_format: "Invalid secret format (must be Base32, at least 16 chars)",
        missing_service_account: "Service and Account names are required",
        no_account_ids: "No account IDs provided",
        export_type_invalid: "Invalid export type",
        export_password_length: "Export password needs at least 6 characters",
        missing_content_type: "Content and type cannot be empty",
        import_password_required: "Encrypted import requires a password",
        parse_failed: "Parsing failed, please check file format or password",
        provider_not_found: "Provider not found",
        missing_fields: "Missing required fields",
        backup_password_length: "Auto backup password must be at least 6 characters",
        backup_password_required: "Auto backup password is required (at least 6 characters)",
        manual_backup_password_needed: "Manual backup with auto-password requires configuring an auto-backup password first.",
        filename_required: "Filename is required",
        no_session: "Unauthorized: Missing session cookie",
        csrf_mismatch: "Request rejected: CSRF token mismatch",
        token_expired: "Unauthorized: Token expired or invalid",
        oauth_state_invalid: "Invalid or missing OAuth state parameter. Security check failed.",
        oauth_code_missing: "Missing OAuth code parameter",
        not_whitelisted: "Access whitelist not configured. Login denied.",
        unauthorized_user: "Unauthorized user, login denied!",
        oauth_token_revoked: "Backup storage authorization has expired. Please click the edit icon below to re-authorize.",
        connection_failed: "Connection failed",
        backup_failed: "Backup failed",
        download_failed: "Download failed",
        delete_failed: "Delete failed",
        oauth_config_incomplete: "OAuth configuration incomplete",
        oauth_api_error: "OAuth API error",
        oauth_token_exchange_failed: "OAuth token exchange failed",
        telegram_missing_bot_name: "Telegram Bot Name is not configured",
        telegram_missing_query: "Telegram provider requires full query parameters, not just code",
        telegram_missing_bot_token: "Telegram Bot Token is not configured",
        telegram_missing_hash: "Missing hash signature",
        telegram_signature_failed: "Telegram signature verification failed",
        telegram_login_expired: "Telegram login data has expired",
        telegram_config_incomplete: "Telegram config incomplete (missing Token or Chat ID)",
        telegram_db_missing: "Database connection or Provider ID is missing",
        telegram_api_error: "Telegram API Error",
        telegram_upload_failed: "Telegram upload failed",
        telegram_download_failed: "Telegram download failed",
        file_not_found_in_history: "File not found in history",
        telegram_file_path_missing: "File path not returned from Telegram",
        invalid_emergency_verification: "Verification failed! Please double-check the last 4 digits of the key at the bottom of your Emergency Kit PDF.",
        s3_config_incomplete: "S3 configuration incomplete",
        s3_api_error: "S3 API Error",
        s3_list_failed: "Failed to list S3 objects",
        s3_upload_failed: "S3 upload failed",
        s3_download_failed: "S3 download failed",
        s3_delete_failed: "S3 delete failed",
        webdav_config_incomplete: "WebDAV configuration incomplete",
        webdav_upload_failed: "WebDAV fallback upload failed",
        webdav_download_redirect_failed: "WebDAV redirect fetch failed",
        webdav_download_failed: "WebDAV fallback download failed",
        webdav_delete_failed: "WebDAV fallback delete failed",
        unsupported_provider: "Unsupported provider",
        webauthn_challenge_missing: "Authentication challenge expired, please refresh and try again",
        webauthn_registration_failed: "Passkey registration failed",
        webauthn_login_failed: "Passkey login failed",
        passkey_not_found: "No matching Passkey credential found",
        email_config_incomplete: "Email backup config incomplete (missing SMTP host, account, or recipient)",
        email_db_missing: "Database connection or Provider ID is missing",
        email_send_failed: "Failed to send email",
        email_send_failed_via_relay: "Failed to send email via relay",
        email_download_not_supported: "Email backup does not support direct download. Please retrieve the file from your email's attachment.",
        smtp_greeting_failed: "SMTP: Server greeting failed",
        smtp_ehlo_failed: "SMTP: EHLO command failed",
        smtp_starttls_ready_failed: "SMTP: STARTTLS failed",
        smtp_ehlo_after_tls_failed: "SMTP: EHLO after TLS failed",
        smtp_auth_prompt_user_failed: "SMTP: Auth username prompt failed",
        smtp_auth_prompt_pass_failed: "SMTP: Auth password prompt failed",
        smtp_auth_success_failed: "SMTP: Authentication failed (Invalid user or password)",
        smtp_mail_from_failed: "SMTP: MAIL FROM command failed",
        smtp_rcpt_to_failed: "SMTP: RCPT TO command failed",
        smtp_data_ready_failed: "SMTP: DATA command failed",
        smtp_message_accepted_failed: "SMTP: Message submission failed",
        smtp_connection_closed: "SMTP: Connection closed unexpectedly",
        health_check_failed: "Security vulnerability detected! System access is locked."
    };
    Ri = {
        title: "Intercept: Security Check Failed",
        subtitle: "We detected critical vulnerabilities or incomplete initialization in the environment configuration. System access is locked to protect your data.",
        passed_title: "Check Passed",
        passed_subtitle: "Excellent! Your NodeAuth security defense is operating at optimal conditions.",
        go_to_login: "Go to Login",
        how_to_fix: "How to Fix?",
        generate_new: "Generate New",
        view_docs: "View Configuration Docs",
        missing_fields: "Missing the following environment variables:",
        passed_checks_title: "Passed Checks",
        passed_checks: {
            encryption_key_passed: "ENCRYPTION_KEY length is sufficient",
            jwt_secret_passed: "JWT_SECRET length is sufficient",
            oauth_allow_all_passed: "Global Access is successfully blocked",
            allowed_users_passed: "Login whitelist accounts are configured",
            oauth_provider_configured: "OAuth2 provider is correctly configured",
            license_passed: "NODEAUTH_LICENSE is activated"
        },
        issues: {
            encryption_key_too_short: {
                title: "Encryption Key Compliance Error (ENCRYPTION_KEY)",
                desc: "Your ENCRYPTION_KEY is empty or shorter than 32 characters! This key encrypts all vault seeds and is highly susceptible to brute-forcing."
            },
            jwt_secret_too_short: {
                title: "Weak Session Secret (JWT_SECRET)",
                desc: "Your JWT_SECRET is shorter than 32 characters. Hackers could forge identity credentials and bypass logins."
            },
            oauth_allow_all_enabled: {
                title: "CRITICAL: Global Access Enabled",
                desc: "OAUTH_ALLOW_ALL=true is active! This is not a drill. Anyone visiting the site can instantly govern all your 2FA data!"
            },
            allowed_users_empty: {
                title: "Login Whitelist is Empty",
                desc: "The system is locked but OAUTH_ALLOWED_USERS is empty. Nobody can successfully login to this system."
            },
            github_config_incomplete: {
                title: "Incomplete GitHub Config",
                desc: "You configured GitHub parameters but are missing the Client ID, Secret, or Redirect URI."
            },
            telegram_config_incomplete: {
                title: "Incomplete Telegram Config",
                desc: "Missing Bot Name or Bot Token."
            },
            google_config_incomplete: {
                title: "Incomplete Google Config",
                desc: "Missing required parameters."
            },
            nodeloc_config_incomplete: {
                title: "Incomplete NodeLoc Config",
                desc: "Missing required parameters."
            },
            gitee_config_incomplete: {
                title: "Incomplete Gitee Config",
                desc: "Missing required parameters."
            },
            cloudflare_config_incomplete: {
                title: "Incomplete Cloudflare Config",
                desc: "Missing required parameters."
            },
            no_provider_configured: {
                title: "No OAuth Provider Configured",
                desc: "You must configure at least one active OAuth2 provider (like GitHub or Telegram) to access the UI."
            },
            license_missing: {
                title: "System Not Activated (NODEAUTH_LICENSE)",
                desc: "You haven't configured a license. Get one at https://license.nodeauth.io/ and fill NODEAUTH_LICENSE according to your deployment method."
            },
            license_domain_mismatch: {
                title: "Domain Mismatch",
                desc: "Detected current hostname doesn't match the one bound to the license."
            },
            license_expired: {
                title: "License Expired",
                desc: "Your license has exceeded its validity period."
            },
            license_invalid_signature: {
                title: "Signature Verification Failed",
                desc: "License signature is invalid, possibly tampered with."
            },
            license_invalid_format: {
                title: "Invalid License Format",
                desc: "Detected malformed license string. Ensure it's the full Base64 string from the license center."
            },
            license_invalid: {
                title: "Verification Failed",
                desc: "Current license failed verification. Check if it's correct or expired."
            }
        },
        suggestions: {
            suggestion_deploy_by_worker: "One-click Deploy to Worker: Go to Cloudflare Dashboard -> Workers & Pages -> nodeauth -> Settings -> Variables and Secrets",
            suggestion_deploy_by_gitaction: "Deploy via Github Action: Go to Forked Repository -> Settings -> Secrets and variables -> Actions",
            suggestion_deploy_by_docker: "Deploy via Docker Compose: Edit docker-compose.yml -> environment",
            encryption_key_suggestion: "Please copy the high-strength random key pre-generated for you below, and set it as ENCRYPTION_KEY according to your deployment method.",
            jwt_secret_suggestion: "Please copy the high-strength random key pre-generated for you below, and set it as JWT_SECRET according to your deployment method.",
            oauth_allow_all_suggestion: "Depending on your deployment method, remove OAUTH_ALLOW_ALL or set its value to false.",
            allowed_users_suggestion: "Depending on your deployment method, fill in OAUTH_ALLOWED_USERS.",
            github_config_suggestion: "Depending on your deployment method, fill in OAUTH_GITHUB_CLIENT_ID, OAUTH_GITHUB_CLIENT_SECRET, and OAUTH_GITHUB_REDIRECT_URI.",
            telegram_config_suggestion: "Please check the bot configuration in BotFather to ensure the information is complete, and depending on your deployment method, fill in OAUTH_TELEGRAM_BOT_NAME, OAUTH_TELEGRAM_BOT_TOKEN, and OAUTH_TELEGRAM_REDIRECT_URI.",
            google_config_suggestion: "Please check the credentials configuration in Google Cloud Console, and depending on your deployment method, fill in OAUTH_GOOGLE_CLIENT_ID, OAUTH_GOOGLE_CLIENT_SECRET, and OAUTH_GOOGLE_REDIRECT_URI.",
            nodeloc_config_suggestion: "Please check your developer credentials in NodeLoc panel, and depending on your deployment method, fill in OAUTH_NODELOC_CLIENT_ID, OAUTH_NODELOC_CLIENT_SECRET, and OAUTH_NODELOC_REDIRECT_URI.",
            gitee_config_suggestion: "Please verify Gitee developer credentials, and depending on your deployment method, fill in OAUTH_GITEE_CLIENT_ID, OAUTH_GITEE_CLIENT_SECRET, and OAUTH_GITEE_REDIRECT_URI.",
            cloudflare_config_suggestion: "Requires four parameters: Client ID, Secret, Org Domain, Redirect URI. Depending on your deployment method, fill in OAUTH_CLOUDFLARE_CLIENT_ID, OAUTH_CLOUDFLARE_CLIENT_SECRET, and OAUTH_CLOUDFLARE_REDIRECT_URI.",
            no_provider_suggestion: "Consult the NodeAuth Worker README to pick the easiest provider. Retrieve the Client ID and Secret and configure them in Cloudflare's dashboard.",
            apply_license: "Click the button below to go to the license center. The system will auto-detect your domain. After activation, fill the generated license into NODEAUTH_LICENSE.",
            rebind_license: "Please re-bind your deployment domain in the license center, matching window.location.hostname exactly.",
            renew_license: "Your license has expired. Please renew or re-apply at the center.",
            license_suggestion: "Click the button below to go to the license center. The system will auto-detect your domain. After activation, fill the generated license into NODEAUTH_LICENSE."
        },
        apply_license_btn: "Get License",
        copy_unsupported: "Your browser doesn't support automatic copying, please manually select it.",
        copy_success: "Key copied to clipboard",
        connection_failed: "Cannot connect to server for health check"
    };
    Mi = {
        management: "Management",
        passkey_title: "Passkey",
        passkey_desc: "Enable passwordless login using biometrics such as fingerprint or face recognition for a more secure and convenient access experience.",
        passkey_list: "Registered Passkeys",
        add_passkey: "Add",
        no_passkeys: "You haven't registered any Passkeys yet",
        credential_name: "Device Name",
        created_at: "Added",
        last_used: "Last Used",
        delete_confirm: "Are you sure you want to remove this Passkey? You will no longer be able to login directly with this device.",
        add_dialog_title: "Add New Passkey",
        add_dialog_tip: "Give your device a recognizable name (e.g., My iPhone 15).",
        default_name: "My New Device",
        registering: "Communicating with hardware...",
        register_success: "Passkey registered successfully!",
        name_required: "Name is required"
    };
    Fi = {
        emergency_title: "ENCRYPTION_KEY Backup",
        emergency_subtitle: "Initialization successful. For your data security, you must back up the core encryption key.",
        encryption_key_label: "Core Encryption Key",
        importance_title: "Why is this important?",
        importance_desc: "This system operates on zero-knowledge encryption. The core encryption key is the only credential for your data. In case of server environment loss, it is the only way to recover your data.",
        save_instruction: "Please download the PDF Core Key on this page and store it in a safe place (e.g., email, cloud storage, or print for safekeeping).",
        download_pdf: "Step 1: Download PDF Core Key",
        download_pdf_btn: "Download Core Key PDF Document",
        verify_title: "Step 2: Verify and Activate",
        verify_desc: "Please open the PDF file you just downloaded and fill in the last 4 characters of the core key.",
        verify_placeholder: "Last 4 chars",
        verify_btn: "Verify Now",
        invalid_verification: "Verification failed. Please check the last 4 characters of the key in the PDF.",
        confirm_success: "Core key backup completed, welcome to NodeAuth!",
        pdf_filename: "NodeAuth_Worker_Core_Key_Backup",
        pdf_header: "NodeAuth Core Key Backup",
        pdf_self_custody: "Important Notice",
        pdf_self_custody_desc: "NodeAuth is a fully self-hosted system. We do not store your master password or encryption keys. This means if you lose this Emergency code, all your data will be permanently locked and irrecoverable.",
        pdf_info_title: "System Information",
        pdf_server_url: "Server URL: ",
        pdf_admin_email: "Admin Email: ",
        pdf_gen_date: "Generation Date: ",
        pdf_key_title: "Core Encryption Key (ENCRYPTION_KEY)",
        pdf_usage_title: "How to use?",
        pdf_usage_desc: "If your server environment variables are lost, fill this key into the ENCRYPTION_KEY variable during redeployment to recover all data.",
        pdf_warning: "Warning: Never lose this key; it is the only way to recover your data.",
        pdf_footer: "NodeAuth  A Secure 2FA Management Tool"
    };
    Ui = {
        light: "Light",
        dark: "Dark",
        auto: "Follow System"
    };
    xi = {
        common: vi,
        pwa: ki,
        search: Ei,
        menu: wi,
        about: Ai,
        vault: Ti,
        settings: Si,
        security: Ii,
        backup: Li,
        migration: Pi,
        tools: Ni,
        auth: Oi,
        camera: Ci,
        api_errors: Di,
        healthCheck: Ri,
        passkey: Mi,
        emergency: Fi,
        theme: Ui
    };
    Bi = ()=>(navigator.language || navigator.userLanguage).startsWith("zh") ? "zh-CN" : "en-US";
    Wi = localStorage.getItem("app_locale") || Bi();
    X = Vs({
        legacy: !1,
        locale: Wi,
        fallbackLocale: "en-US",
        messages: {
            "zh-CN": bi,
            "en-US": xi
        }
    });
    $i = (e)=>{
        X.global.locale.value = e, localStorage.setItem("app_locale", e), document.documentElement.lang = e === "zh-CN" ? "zh-CN" : "en";
    };
    Dt = Qe("layout", ()=>{
        const e = F(!1), t = F(!1), a = F(0), r = F(sessionStorage.getItem("app_active_tab") || "vault"), o = F(null), n = F(""), s = F(!1), i = F("fade"), c = F(localStorage.getItem("app_vault_view_mode") || "card"), _ = F(localStorage.getItem("app_ghost_mode") === "true"), p = F(localStorage.getItem("app_sidebar_collapse") !== "false"), f = (k)=>{
            _.value = k, localStorage.setItem("app_ghost_mode", String(k));
        }, d = F(!1), g = {
            "add-vault": "vault",
            "mobile-data": "vault",
            "mobile-settings": "vault",
            "migration-export": "mobile-data",
            "migration-import": "mobile-data",
            backups: "mobile-data",
            tools: "vault",
            "settings-passkey": "mobile-settings",
            "settings-about": "mobile-settings",
            "settings-appearance": "mobile-settings",
            "settings-language": "settings-appearance",
            "settings-theme": "settings-appearance",
            "settings-layout": "settings-appearance",
            "settings-security": "mobile-settings",
            "settings-devices": "settings-security"
        }, m = (k)=>{
            s.value = k !== void 0 ? k : !s.value, s.value || (n.value = "");
        }, w = se(()=>o.value ? !0 : !!g[r.value]), T = ()=>{
            if (o.value) {
                o.value = null, i.value = "slide-right";
                return;
            }
            const k = g[r.value];
            k && (i.value = "slide-right", I(k));
        }, I = (k)=>{
            const v = r.value;
            o.value = null, g[v] === k ? i.value = "slide-right" : g[k] === v ? i.value = "slide-left" : i.value = "fade", r.value = k, sessionStorage.setItem("app_active_tab", k), s.value = !1, n.value = "";
        }, D = ()=>{
            r.value = "vault", a.value++;
        }, h = ()=>{
            p.value = !p.value, localStorage.setItem("app_sidebar_collapse", p.value);
        }, y = (k)=>{
            c.value = k, localStorage.setItem("app_vault_view_mode", k);
        };
        return Oe(_, (k)=>{
            k ? Pe.success({
                message: X.global.t("security.ghost_mode_active") || "Ghost Mode Enabled",
                grouping: !0
            }) : Pe.success({
                message: X.global.t("security.ghost_mode_inactive") || "Ghost Mode Disabled",
                grouping: !0
            });
        }), {
            isMobile: e,
            showMobileMenu: t,
            homeTabReset: a,
            app_active_tab: r,
            activeSubTool: o,
            searchQuery: n,
            isSearchVisible: s,
            isLoadingSearching: d,
            canGoBack: w,
            pageTransition: i,
            toggleSearch: m,
            setActiveTab: I,
            goBack: T,
            resetHomeTab: D,
            appVaultViewMode: c,
            setVaultViewMode: y,
            appGhostMode: _,
            setGhostMode: f,
            isSidebarCollapsed: p,
            toggleSidebar: h
        };
    });
    ct = Qe("offline", ()=>{
        const e = F(localStorage.getItem("app_offline_mode") === "true"), t = F(typeof navigator < "u" ? !navigator.onLine : !1), a = se(()=>e.value), r = se(()=>t.value || a.value), o = F(new Set), n = (p)=>{
            e.value = p, localStorage.setItem("app_offline_mode", String(p));
        }, s = (p)=>{
            const f = new Set(o.value);
            f.add(p), o.value = f;
        }, i = (p)=>{
            const f = new Set(o.value);
            f.delete(p), o.value = f;
        }, c = (p)=>o.value.has(p), _ = ()=>{
            typeof window > "u" || (window.addEventListener("online", ()=>{
                t.value = !1;
            }), window.addEventListener("offline", ()=>{
                t.value = !0;
            }), typeof navigator < "u" && (t.value = !navigator.onLine));
        };
        return Oe(e, (p)=>{
            p ? Pe.success({
                message: X.global.t("security.offline_mode_active") || "Air-Gapped Mode Enabled",
                grouping: !0
            }) : Pe.success({
                message: X.global.t("security.offline_mode_inactive") || "Air-Gapped Mode Disabled. Syncing...",
                grouping: !0
            });
        }), {
            appOfflineMode: e,
            isPhysicalOffline: t,
            isManualOffline: a,
            isOffline: r,
            setOfflineMode: n,
            initNetworkStatus: _,
            conflictIds: o,
            registerConflict: s,
            removeConflict: i,
            isItemInConflict: c
        };
    });
    Hi = Object.freeze(Object.defineProperty({
        __proto__: null,
        useOfflineStore: ct
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    Gi = "NodeAuthDB";
    Ce = "app_key_store";
    Vi = 1;
    function Xt() {
        return new Promise((e, t)=>{
            const a = setTimeout(()=>{
                t(new Error("IndexedDB initialization timeout. The database may be locked by another instance."));
            }, 5e3), r = indexedDB.open(Gi, Vi);
            r.onblocked = ()=>{
                ae.warn("[IDB] Database access is blocked by another session.");
            }, r.onerror = ()=>{
                clearTimeout(a), t(r.error);
            }, r.onsuccess = ()=>{
                clearTimeout(a), e(r.result);
            }, r.onupgradeneeded = (o)=>{
                const n = o.target.result;
                n.objectStoreNames.contains(Ce) || n.createObjectStore(Ce);
            };
        });
    }
    _e = async function(e, t) {
        const a = await Xt();
        return new Promise((r, o)=>{
            const i = a.transaction(Ce, "readwrite").objectStore(Ce).put(t, e);
            i.onsuccess = ()=>r(), i.onerror = ()=>o(i.error);
        });
    };
    ce = async function(e) {
        const t = await Xt();
        return new Promise((a, r)=>{
            const s = t.transaction(Ce, "readonly").objectStore(Ce).get(e);
            s.onsuccess = ()=>a(s.result), s.onerror = ()=>r(s.error);
        });
    };
    ve = async function(e) {
        const t = await Xt();
        return new Promise((a, r)=>{
            const s = t.transaction(Ce, "readwrite").objectStore(Ce).delete(e);
            s.onsuccess = ()=>a(), s.onerror = ()=>r(s.error);
        });
    };
    async function qi() {
        const e = await Xt();
        return new Promise((t, a)=>{
            const n = e.transaction(Ce, "readwrite").objectStore(Ce).clear();
            n.onsuccess = ()=>t(), n.onerror = ()=>a(n.error);
        });
    }
    function Yi(e) {
        const a = `; ${document.cookie}`.split(`; ${e}=`);
        if (a.length === 2) return a.pop().split(";").shift();
    }
    let ra = !1;
    at = async function(e, t = {}) {
        if (ct().isManualOffline && !(e.includes("/api/oauth/login") || e.includes("/api/oauth/verify") || e.includes("/api/oauth/me") || e.includes("/api/health"))) {
            ae.warn(`[Air-Gapped] Request blocked: ${e}`);
            const _ = new Error("offline_mode_active");
            throw _.isOffline = !0, _;
        }
        const r = {
            "Content-Type": "application/json",
            ...t.headers
        }, o = Yi("csrf_token");
        o && (r["X-CSRF-Token"] = o);
        const n = t.timeout || 3e4, s = new AbortController, i = setTimeout(()=>s.abort(), n);
        try {
            const c = await fetch(e, {
                ...t,
                headers: r,
                credentials: "include",
                signal: s.signal
            });
            if (clearTimeout(i), c.status === 204) return {
                success: !0
            };
            const _ = await c.json();
            if (_.message && typeof _.message == "string" && _.message.includes("oauth_token_revoked")) {
                const p = new Error("oauth_token_revoked");
                throw p.isOAuthRevoked = !0, p;
            }
            if (c.status === 403 && _.message === "health_check_failed") {
                window.location.pathname !== "/health" && (window.location.href = "/health");
                const p = new Error("Security Check Failed");
                throw p.data = _.data, p.isSecurity = !0, p;
            }
            if (c.status === 401 || _.code === 401) {
                if (t.silent) throw new Error(_.message || _.error || "Unauthorized/Forbidden");
                if (!ra) {
                    ra = !0;
                    let p = _.message || _.error || "session_expired", f = "";
                    if (typeof p == "string" && p.includes(":")) {
                        const g = p.split(":");
                        p = g[0].trim(), f = g.slice(1).join(":").trim();
                    }
                    let d = X.global.te(`api_errors.${p}`) ? X.global.t(`api_errors.${p}`) : p;
                    if (f) {
                        let g = f.split(":"), m = g[0].trim();
                        X.global.te(`api_errors.${m}`) && (g[0] = X.global.t(`api_errors.${m}`), f = g.join(": ")), d = `${d}: ${f}`;
                    }
                    Pe.error(d);
                    try {
                        dt().clearUserInfo();
                    } catch  {
                        ve("auth:user:profile"), ve("vault:data:main"), ve("vault:conf:backups"), ve("sys:sec:device_salt"), sessionStorage.removeItem("app_vault_session_key");
                    }
                    window.location.pathname !== "/login" ? window.location.href = "/login" : setTimeout(()=>{
                        ra = !1;
                    }, 1e3);
                }
                throw new Error(_.message || _.error || "Unauthorized/Forbidden");
            }
            if (!c.ok || _.success === !1) {
                if (!t.silent) {
                    let p = _.message || _.error || "request_failed", f = "";
                    if (typeof p == "string" && p.includes(":")) {
                        const g = p.split(":");
                        p = g[0].trim(), f = g.slice(1).join(":").trim();
                    }
                    let d = X.global.te(`api_errors.${p}`) ? X.global.t(`api_errors.${p}`) : p;
                    if (f) {
                        let g = f.split(":"), m = g[0].trim();
                        X.global.te(`api_errors.${m}`) && (g[0] = X.global.t(`api_errors.${m}`), f = g.join(": ")), d = `${d}: ${f}`;
                    }
                    Pe.error(d);
                }
                throw new Error(_.message || _.error || X.global.t("api_errors.request_failed"));
            }
            return _.data !== void 0 && Object.keys(_).includes("code") ? {
                success: !0,
                ..._.data
            } : _;
        } catch (c) {
            throw c.message !== "Unauthorized/Forbidden" && !t.silent && !c.isOAuthRevoked && !c.isOffline && (ae.error("API Request Error:", c), (c.name === "TypeError" || c.message.includes("fetch") || c.name === "AbortError") && Pe.error(X.global.te("api_errors.network_error") ? X.global.t("api_errors.network_error") : X.global.t("auth.network_abnormal"))), c;
        }
    };
    xt = class extends Error {
        constructor(t, a = "AUTH_ERR"){
            super(t), this.name = "authError", this.code = a;
        }
    };
    let sr, Ki, It, pa, Sa, ji;
    sr = ()=>{
        let e = localStorage.getItem("app_device_id");
        return e || (e = crypto.randomUUID ? crypto.randomUUID() : "dev-" + Math.random().toString(36).substring(2, 15), localStorage.setItem("app_device_id", e)), e;
    };
    ac = Object.freeze(Object.defineProperty({
        __proto__: null,
        getDeviceId: sr
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    gn = {
        async getProviders () {
            try {
                return await at("/api/oauth/providers");
            } catch (e) {
                throw new xt(e.message || "获取登录方式失败", e.status);
            }
        },
        async getAuthorizeUrl (e) {
            try {
                return await at(`/api/oauth/authorize/${e}`);
            } catch (t) {
                throw new xt(t.message || "获取授权链接失败", t.status);
            }
        },
        async loginWithToken (e, t) {
            try {
                const a = {
                    ...t,
                    deviceId: await sr()
                };
                return await at(`/api/oauth/callback/${e}`, {
                    method: "POST",
                    body: JSON.stringify(a)
                });
            } catch (a) {
                throw new xt(a.message || "登录验证失败", a.status);
            }
        },
        async logout () {
            try {
                return await at("/api/oauth/logout", {
                    method: "POST"
                });
            } catch (e) {
                return ae.error(`Logout request failed: ${e.message || e}`), {
                    success: !1
                };
            }
        },
        async fetchMe () {
            try {
                return await at(`/api/oauth/me?_t=${Date.now()}`, {
                    silent: !0
                });
            } catch  {
                return {
                    success: !1
                };
            }
        },
        async confirmEmergency (e) {
            try {
                return await at("/api/emergency/confirm", {
                    method: "POST",
                    body: JSON.stringify({
                        lastFour: e
                    })
                });
            } catch (t) {
                throw new xt(t.message || "系统确认失败", t.status);
            }
        }
    };
    Ki = 1e5;
    It = 16;
    pa = 12;
    Sa = "AES-GCM";
    ji = "SHA-256";
    $e = typeof window < "u" ? window.crypto || window.msCrypto : globalThis.crypto;
    ir = function(e = "Using development fallback.") {
        if ($e && $e.subtle) return !1;
        if (typeof location < "u") {
            const t = location.hostname.startsWith("192.168.") || location.hostname.startsWith("10."), a = location.protocol === "http:";
            if (t && a) return ae.warn(`Running locally via HTTP: ${e}`), !0;
        }
        throw new Error("Web Crypto API (window.crypto.subtle) is not available. Please ensure the context is secure (HTTPS).");
    };
    async function lr(e, t) {
        const a = new TextEncoder, r = await $e.subtle.importKey("raw", a.encode(e), {
            name: "PBKDF2"
        }, !1, [
            "deriveKey"
        ]);
        return $e.subtle.deriveKey({
            name: "PBKDF2",
            salt: t,
            iterations: Ki,
            hash: ji
        }, r, {
            name: Sa,
            length: 256
        }, !1, [
            "encrypt",
            "decrypt"
        ]);
    }
    zi = async function(e, t) {
        if (ir("Skipping real encryption for Vault data.")) {
            const p = new TextEncoder().encode(JSON.stringify({
                __dev_mock_encryption: !0,
                data: e
            }));
            return hn(p);
        }
        const a = $e.getRandomValues(new Uint8Array(It)), r = $e.getRandomValues(new Uint8Array(pa)), o = await lr(t, a), s = new TextEncoder().encode(JSON.stringify(e)), i = await $e.subtle.encrypt({
            name: Sa,
            iv: r
        }, o, s), c = new Uint8Array(a.length + r.length + i.byteLength);
        return c.set(a, 0), c.set(r, a.length), c.set(new Uint8Array(i), a.length + r.length), hn(c);
    };
    Qi = async function(e, t) {
        if (ir("Skipping real decryption for Vault data.")) {
            try {
                const a = yn(e), r = new TextDecoder, o = JSON.parse(r.decode(a));
                if (o.__dev_mock_encryption) return o.data;
            } catch  {}
            throw new Error("Web Crypto API missing: Cannot decrypt real secure data without HTTPS");
        }
        try {
            const a = yn(e), r = a.slice(0, It), o = a.slice(It, It + pa), n = a.slice(It + pa), s = await lr(t, r), i = await $e.subtle.decrypt({
                name: Sa,
                iv: o
            }, s, n), c = new TextDecoder;
            return JSON.parse(c.decode(i));
        } catch (a) {
            throw ae.error("Decryption failed:", a), new Error("密码错误或数据损坏");
        }
    };
    function hn(e) {
        const t = new Uint8Array(e);
        let a = "";
        for(let r = 0; r < t.byteLength; r++)a += String.fromCharCode(t[r]);
        return typeof window < "u" ? window.btoa(a) : Buffer.from(a, "binary").toString("base64");
    }
    function yn(e) {
        let t;
        typeof window < "u" ? t = window.atob(e) : t = Buffer.from(e, "base64").toString("binary");
        const a = t.length, r = new Uint8Array(a);
        for(let o = 0; o < a; o++)r[o] = t.charCodeAt(o);
        return r;
    }
    let Xi, Ji, Zi, Bt, le, tl, al;
    Xi = 1e5;
    Ji = 16;
    Zi = 12;
    Bt = window.location.hostname;
    le = {
        isBiometricSupported () {
            return Ca() ? !!(window.PublicKeyCredential?.getClientExtensionCapabilities?.() || {}).prf : !1;
        },
        isLegacyBiometricSupported () {
            return Ca();
        },
        cancelCurrentCeremony () {
            try {
                Wr.cancelCeremony();
            } catch  {}
        },
        async enrollBiometricCompatible (e = {}) {
            const t = {
                challenge: "AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE",
                rp: {
                    name: "NodeAuth",
                    id: Bt
                },
                user: {
                    id: "nodeauth-compat",
                    name: e.email || e.username || "nodeauth",
                    displayName: `NodeAuth Lock (${e.email || e.username || "Account"})`
                },
                pubKeyCredParams: [
                    {
                        alg: -7,
                        type: "public-key"
                    }
                ],
                authenticatorSelection: {
                    authenticatorAttachment: "platform",
                    userVerification: "required"
                }
            };
            try {
                return (await Oa(t)).id;
            } catch (a) {
                throw ae.error(`[AppLockService] Compat enrollment failed: ${a.message || a}`), a;
            }
        },
        async verifyBiometricCompatible (e, t = !1) {
            if (!e) throw new Error("MISSING_CRED_ID");
            t && this.cancelCurrentCeremony();
            const a = {
                challenge: "AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE",
                allowCredentials: [
                    {
                        id: e,
                        type: "public-key"
                    }
                ],
                userVerification: "required",
                rpId: Bt
            };
            try {
                return !!await Na(a);
            } catch (r) {
                throw r?.name !== "AbortError" && ae.error(`[AppLockService] Compat auth failed: ${r.name}`), r;
            }
        },
        async enrollBiometric (e = {}) {
            const t = {
                challenge: "AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE",
                rp: {
                    name: "NodeAuth",
                    id: Bt
                },
                user: {
                    id: "nodeauth-lock",
                    name: e.email || e.username || "nodeauth",
                    displayName: `NodeAuth Lock (${e.email || e.username || "Account"})`
                },
                pubKeyCredParams: [
                    {
                        alg: -7,
                        type: "public-key"
                    },
                    {
                        alg: -257,
                        type: "public-key"
                    }
                ],
                authenticatorSelection: {
                    userVerification: "required",
                    residentKey: "required",
                    requireResidentKey: !0
                },
                extensions: {
                    prf: {
                        enabled: !0
                    }
                }
            };
            try {
                const a = await Oa(t);
                if (!a.clientExtensionResults?.prf) throw new Error("E_PRF_NOT_SUPPORTED");
                const r = await this.getBiometricKey(a.id);
                if (!r) throw new Error("E_DERIVATION_FAILED");
                return {
                    key: r,
                    credId: a.id
                };
            } catch (a) {
                throw ae.error(`[AppLockService] Enrollment failed: ${a.message || a}`), a;
            }
        },
        async getBiometricKey (e, t = !1) {
            t && this.cancelCurrentCeremony();
            const a = "AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE", r = {
                challenge: a,
                allowCredentials: e ? [
                    {
                        id: e,
                        type: "public-key"
                    }
                ] : [],
                userVerification: "required",
                rpId: Bt,
                extensions: {
                    prf: {
                        eval: {
                            first: a
                        }
                    }
                }
            };
            try {
                const n = (await Na(r)).clientExtensionResults?.prf;
                if (n?.results?.first) return new Uint8Array(n.results.first);
                throw new Error("PRF key not returned by hardware");
            } catch (o) {
                throw o?.name !== "AbortError" && ae.error(`[AppLockService] Auth failed: ${o.name}`), o;
            }
        },
        async deriveKeyFromPin (e, t) {
            if (e.length !== 6) throw new Error("PIN must be 6 digits");
            const a = new TextEncoder, r = await crypto.subtle.importKey("raw", a.encode(e), {
                name: "PBKDF2"
            }, !1, [
                "deriveKey"
            ]);
            return await crypto.subtle.deriveKey({
                name: "PBKDF2",
                salt: t,
                iterations: Xi,
                hash: "SHA-256"
            }, r, {
                name: "AES-GCM",
                length: 256
            }, !1, [
                "encrypt",
                "decrypt"
            ]);
        },
        async encryptDeviceSalt (e, t) {
            const a = crypto.getRandomValues(new Uint8Array(Zi)), r = new TextEncoder, o = await crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: a
            }, t, r.encode(e));
            return {
                encrypted: new Uint8Array(o),
                iv: a,
                salt: null
            };
        },
        async decryptDeviceSalt (e, t, a) {
            try {
                const r = await crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: t
                }, a, e);
                return new TextDecoder().decode(r);
            } catch  {
                return null;
            }
        },
        generateSalt () {
            return crypto.getRandomValues(new Uint8Array(Ji));
        }
    };
    Jt = Qe("appLock", ()=>{
        const e = F(!1), t = F(!1), a = F("none"), r = F(0), o = F(0), n = F(!1), s = F(0), i = F(0), c = F(!1), _ = F(!1), p = F(null), f = F(null), d = async ()=>{
            if ([
                "biometric",
                "biometric_compat"
            ].includes(a.value)) try {
                const E = await ce("sys:sec:bio_enc_salt"), U = await ce("sys:sec:bio_cred_id");
                E && U && (p.value = {
                    encData: E,
                    credId: U
                });
            } catch (E) {
                ae.error(`[AppLockStore] Pre-warm failed: ${E.message || E}`);
            }
        }, g = async ()=>{
            if (e.value) return;
            n.value = le.isBiometricSupported() || le.isLegacyBiometricSupported();
            const E = await ce("sys:sec:lock_mode") || "none";
            a.value = E;
            const U = !!await ce("sys:sec:enc_device_salt");
            E !== "none" && U && (t.value = !0, localStorage.removeItem("app_lock_last_hidden"), i.value = 0, d()), s.value = await ce("sys:sec:auto_lock_delay") || 0, document.addEventListener("visibilitychange", ()=>{
                if (a.value !== "none" && !c.value) {
                    if (document.visibilityState === "hidden") {
                        const j = Date.now();
                        i.value = j, localStorage.setItem("app_lock_last_hidden", j.toString()), Number(s.value) === 0 && k();
                    } else if (document.visibilityState === "visible") {
                        const j = localStorage.getItem("app_lock_last_hidden"), R = i.value || Number(j || 0);
                        !t.value && Number(s.value) > 0 && R > 0 && !_.value && (Date.now() - R) / 1e3 > Number(s.value) && k(), i.value = 0, localStorage.removeItem("app_lock_last_hidden");
                    }
                }
            }), e.value = !0;
        }, m = async (E)=>{
            const U = await ce("sys:sec:lock_mode");
            if (U && U !== "none") {
                t.value = !0, d();
                return;
            }
            await _e("sys:sec:device_salt", E), f.value = E, a.value = "none", t.value = !1;
        }, w = async ()=>{
            if (f.value) return f.value;
            if (!t.value && a.value === "none") {
                const E = await ce("sys:sec:device_salt");
                return E && (f.value = E), E;
            }
            return null;
        }, T = async (E)=>{
            if (!E || E.length !== 6) throw new Error("PIN must be 6 digits");
            let U = f.value || await ce("sys:sec:device_salt");
            if (!U) throw new Error("System salt not found");
            const j = le.generateSalt(), R = await le.deriveKeyFromPin(E, j), H = await le.encryptDeviceSalt(U, R);
            await _e("sys:sec:enc_device_salt", {
                ...H,
                salt: j
            }), await _e("sys:sec:lock_mode", "pin"), a.value = "pin", t.value = !1, await ve("sys:sec:device_salt");
        }, I = async (E)=>{
            if (r.value >= 3) {
                const H = Date.now(), me = r.value >= 5 ? 3e5 : 3e4;
                if (H - o.value < me) {
                    const ye = Math.ceil((me - (H - o.value)) / 1e3);
                    throw new Error(`Too many attempts. Wait ${ye}s`);
                }
            }
            const U = await ce("sys:sec:enc_device_salt");
            if (!U) return !1;
            const j = await le.deriveKeyFromPin(E, U.salt), R = await le.decryptDeviceSalt(U.encrypted, U.iv, j);
            return R ? (f.value = R, t.value = !1, r.value = 0, _.value = !0, setTimeout(()=>{
                _.value = !1;
            }, 1e3), !0) : (r.value++, o.value = Date.now(), !1);
        }, D = async (E = {})=>{
            const U = le.isBiometricSupported(), j = le.isLegacyBiometricSupported();
            if (!U && !j) throw new Error("Biometric not supported");
            const R = await ce("sys:sec:device_salt") || f.value;
            if (!R) throw new Error("Unlocked state required");
            if (U) {
                const H = await le.enrollBiometric(E);
                if (!H) return !1;
                const me = await crypto.subtle.importKey("raw", H.key, {
                    name: "AES-GCM"
                }, !1, [
                    "encrypt"
                ]), ye = await le.encryptDeviceSalt(R, me);
                return await _e("sys:sec:bio_enc_salt", ye), await _e("sys:sec:bio_cred_id", H.credId), await v("biometric"), d(), !0;
            } else {
                const H = await le.enrollBiometricCompatible(E);
                if (!H) return !1;
                const me = crypto.getRandomValues(new Uint8Array(32)), ye = await crypto.subtle.importKey("raw", me, {
                    name: "AES-GCM"
                }, !1, [
                    "encrypt"
                ]), Ee = await le.encryptDeviceSalt(R, ye);
                return await _e("sys:sec:bio_wrap_key", me), await _e("sys:sec:bio_enc_salt", Ee), await _e("sys:sec:bio_cred_id", H), await v("biometric_compat"), d(), !0;
            }
        }, h = async (E = !1)=>{
            if (c.value && !E) return !1;
            const U = E;
            if (p.value || await d(), !p.value) return !1;
            c.value = !0;
            const { encData: j, credId: R } = p.value;
            try {
                let H = null;
                if (a.value === "biometric" ? H = await le.getBiometricKey(R, U) : a.value === "biometric_compat" && await le.verifyBiometricCompatible(R, U) && (H = await ce("sys:sec:bio_wrap_key")), H) {
                    const me = await crypto.subtle.importKey("raw", H, {
                        name: "AES-GCM"
                    }, !1, [
                        "decrypt"
                    ]), ye = await le.decryptDeviceSalt(j.encrypted, j.iv, me);
                    if (ye) return f.value = ye, t.value = !1, r.value = 0, _.value = !0, setTimeout(()=>{
                        _.value = !1;
                    }, 1e3), !0;
                }
                return !1;
            } catch (H) {
                throw H;
            } finally{
                c.value = !1;
            }
        }, y = async (E)=>{
            const U = await ce("sys:sec:enc_device_salt");
            if (!U) return !1;
            const j = await le.deriveKeyFromPin(E, U.salt), R = await le.decryptDeviceSalt(U.encrypted, U.iv, j);
            return R ? (await _e("sys:sec:device_salt", R), f.value = R, await ve("sys:sec:enc_device_salt"), await ve("sys:sec:bio_enc_salt"), await ve("sys:sec:bio_cred_id"), await v("none"), t.value = !1, !0) : !1;
        }, k = ()=>{
            f.value = null, t.value = !0, d();
        }, v = async (E)=>{
            await _e("sys:sec:lock_mode", E), a.value = E;
        };
        return {
            isInitialized: e,
            isLocked: t,
            lockMode: a,
            autoLockDelay: s,
            failedAttempts: r,
            isBiometricAvailable: n,
            isUnlocking: c,
            ignoreAutoLockTemporarily: _,
            init: g,
            setDeviceKey: m,
            getDeviceKey: w,
            setupPin: T,
            unlockWithPin: I,
            enableBiometric: D,
            unlockWithBiometric: h,
            disableLock: y,
            updateLockMode: v,
            setAutoLockDelay: async (E)=>{
                s.value = E, await _e("sys:sec:auto_lock_delay", E);
                const U = X.global.t("security.auto_lock_delay_updated");
                Pe.success({
                    message: U,
                    grouping: !0
                });
            },
            lock: k,
            reset: ()=>{
                t.value = !1, a.value = "none", f.value = null, r.value = 0, p.value = null;
            }
        };
    });
    cr = Qe("vault", ()=>{
        const e = Jt(), t = F(!1), a = F(!1), r = async ()=>{
            const f = await ce("vault:data:main");
            t.value = !!f;
        }, o = async ()=>{
            const f = await e.getDeviceKey();
            if (!f) {
                if (e.isLocked) return {
                    vault: []
                };
                throw new Error("设备授权信息已失效，请重新登录");
            }
            const d = await ce("vault:data:main");
            if (!d) return {
                vault: []
            };
            try {
                return await Qi(d, f);
            } catch  {
                return {
                    vault: []
                };
            }
        }, n = async ({ serverTotal: f, delta: d = 0, localCount: g = void 0 } = {})=>{
            if (g !== void 0) await _e("vault:meta:local_count", g);
            else if (await ce("vault:meta:local_count") === void 0) {
                const T = await o();
                await _e("vault:meta:local_count", T.vault?.length || 0);
            }
            let m = await ce("vault:meta:server_total") || 0;
            f !== void 0 ? m = f : d !== 0 && (m = Math.max(0, m + d)), await _e("vault:meta:server_total", m);
        }, s = async (f)=>{
            const d = await e.getDeviceKey();
            if (!d) throw new Error("设备授权信息已失效，请重新登录");
            const g = await zi(f, d);
            await _e("vault:data:main", g), await n({
                localCount: f.vault?.length || 0
            }), t.value = !0;
        };
        return {
            hasVault: t,
            isDirty: a,
            init: r,
            getData: o,
            markDirty: ()=>{
                a.value = !0;
            },
            clearDirty: ()=>{
                a.value = !1;
            },
            saveData: s,
            updateMetadata: n,
            deleteItems: async (f)=>{
                if (!f || f.length === 0) return;
                const d = await o();
                if (d && d.vault) {
                    const g = d.vault.filter((m)=>!f.includes(m.id));
                    await s({
                        vault: g,
                        categoryStats: d.categoryStats || []
                    });
                }
            },
            unlock: async ()=>!0,
            setup: async ()=>{},
            reset: ()=>{
                a.value = !1, t.value = !1;
            }
        };
    });
    el = Qe("vaultSync", ()=>{
        const e = F([]), t = F(!1), a = F(!1), r = async ()=>{
            if (!a.value) try {
                const d = await ce("vault:sync:queue");
                if (d && Array.isArray(d)) {
                    e.value = d;
                    const g = ct();
                    d.forEach((m)=>{
                        m.status === "conflict" && g.registerConflict(m.id);
                    });
                }
            } finally{
                a.value = !0;
            }
        }, o = async ()=>{
            await _e("vault:sync:queue", JSON.parse(JSON.stringify(e.value)));
        }, n = se(()=>e.value.length > 0), s = (d)=>e.value.some((g)=>g.id === d), i = async (d, g, m)=>{
            a.value || await r(), _(d, g, m), await o();
        }, c = async (d)=>{
            a.value || await r();
            for (const g of d)_(g.type, g.id, g.data);
            await o();
        }, _ = (d, g, m)=>{
            const w = e.value.findIndex((T)=>T.id === g);
            if (w > -1) {
                const T = e.value[w];
                if (T.type === "create" && d === "delete") {
                    e.value.splice(w, 1);
                    return;
                }
                if (T.type === "delete" && d === "delete") return;
                T.type === "create" && d === "update" ? T.data = {
                    ...T.data,
                    ...m
                } : T.type === "update" && d === "update" ? T.data = {
                    ...T.data,
                    ...m
                } : e.value[w] = {
                    id: g,
                    type: d,
                    data: m,
                    timestamp: Date.now()
                };
            } else {
                const T = m?.updatedAt;
                e.value.push({
                    id: g,
                    type: d,
                    data: m,
                    baselineUpdatedAt: T,
                    timestamp: Date.now()
                });
            }
        };
        typeof window < "u" && window.addEventListener("online", async ()=>{
            const { useOfflineStore: d } = await de(async ()=>{
                const { useOfflineStore: m } = await Promise.resolve().then(()=>Hi);
                return {
                    useOfflineStore: m
                };
            }, void 0), g = d();
            if (n.value && !g.isOffline) try {
                const { vaultService: m } = await de(async ()=>{
                    const { vaultService: w } = await import("./vaultService-CN5Qz0-L.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((T)=>T.l);
                    return {
                        vaultService: w
                    };
                }, __vite__mapDeps([0,1,2,3]));
                await m.syncOfflineActions();
            } catch (m) {
                console.warn("[Sync-Store] Remote trigger failed:", m);
            }
        });
        const p = async ()=>{
            e.value = [], await ve("vault:sync:queue");
        };
        return r(), {
            syncQueue: e,
            isSyncing: t,
            isInitialized: a,
            hasPendingChanges: n,
            isItemPending: s,
            enqueueAction: i,
            enqueueActions: c,
            clearQueue: p,
            initQueue: r,
            saveQueue: o,
            resolveConflict: async (d, g)=>{
                const m = e.value.findIndex((T)=>T.id === d);
                if (m === -1) return;
                g === "force" ? (e.value[m].data.force = !0, e.value[m].status = "pending") : g === "discard" && e.value.splice(m, 1), ct().removeConflict(d), await o();
            }
        };
    });
    dt = Qe("authUserInfo", ()=>{
        const e = Jt(), t = el(), a = $r(), r = ga(), o = F({}), n = F(!1), s = F(!1), i = F(""), c = F(!1), _ = ()=>{
            c.value = !0;
        }, p = ()=>{
            c.value = !1;
        }, f = ()=>{
            n.value = !0;
        }, d = async (I, D = !1, h = "", y = "")=>{
            o.value = I, s.value = D, i.value = h, await _e("auth:user:profile", I), y && await e.setDeviceKey(y);
        }, g = async ()=>{
            const I = await ce("auth:user:profile");
            I && (o.value = I);
        }, m = async ()=>{
            const I = cr(), D = Dt();
            e.reset(), I.reset(), await qi(), await t.clearQueue(), a.clear(), o.value = {}, s.value = !1, i.value = "", D.resetHomeTab(), n.value = !0;
        };
        return {
            userInfo: o,
            isInitialized: n,
            isVerifying: c,
            needsEmergency: s,
            tempEncryptionKey: i,
            setUserInfo: d,
            clearUserInfo: m,
            logout: async ()=>{
                try {
                    await gn.logout();
                } finally{
                    await m(), r.push("/login");
                }
            },
            fetchUserInfo: async ()=>{
                const I = await gn.fetchMe();
                return I && I.success ? (await d(I.userInfo, !!I.needsEmergency, I.encryptionKey || "", I.deviceKey || ""), !0) : (await m(), !1);
            },
            init: g,
            startVerifying: _,
            stopVerifying: p,
            markInitialized: f
        };
    });
    ur = Qe("theme", ()=>{
        const e = F(localStorage.getItem("app_theme_mode") || "auto"), t = F(!1), a = ()=>{
            n(), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ()=>{
                e.value === "auto" && n();
            });
        }, r = (s)=>{
            e.value = s, localStorage.setItem("app_theme_mode", s), n();
        }, o = ()=>{
            const s = t.value ? "light" : "dark";
            r(s);
        }, n = ()=>{
            let s = !1;
            e.value === "auto" ? s = window.matchMedia("(prefers-color-scheme: dark)").matches : s = e.value === "dark", t.value = s, s ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
        };
        return {
            themeMode: e,
            isDark: t,
            initTheme: a,
            setThemeMode: r,
            toggleTheme: o
        };
    });
    Zt = (e, t)=>{
        const a = e.__vccOpts || e;
        for (const [r, o] of t)a[r] = o;
        return a;
    };
    tl = {
        name: "iconLocales"
    };
    al = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
    };
    function nl(e, t, a, r, o, n) {
        return G(), te("svg", al, [
            ...t[0] || (t[0] = [
                V("path", {
                    fill: "currentColor",
                    d: "M5 15v2a2 2 0 0 0 2 2h3v2H7a4 4 0 0 1-4-4v-2zm13-5l4.4 11h-2.16l-1.2-3h-4.09l-1.2 3h-2.15L16 10zm-1 2.89L15.75 16h2.5zM8 2v2h4v7H8v3H6v-3H2V4h4V2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3zM6 6H4v3h2zm4 0H8v3h2z"
                }, null, -1)
            ])
        ]);
    }
    let ol, sl, il, ll, cl, ul, _l, dl, fl, _r, ml, pl, gl, hl, yl, bl, dr, vl, kl, El, wl, Al, Tl, Sl, Il;
    rl = Zt(tl, [
        [
            "render",
            nl
        ]
    ]);
    ol = {
        class: "header-left"
    };
    sl = {
        key: 0,
        class: "header-center"
    };
    il = {
        class: "header-page-title"
    };
    ll = {
        class: "header-right"
    };
    cl = {
        key: 0,
        class: "guest-actions"
    };
    ul = {
        key: 1,
        class: "mobile-search-wrapper"
    };
    _l = {
        key: 2,
        class: "mobile-actions"
    };
    dl = {
        key: 3,
        class: "user-profile"
    };
    fl = {
        class: "username"
    };
    _r = {
        __name: "theHeader",
        setup (e) {
            const { locale: t } = _t(), a = ha(), r = ga(), o = Dt(), n = ct(), s = dt(), i = ur(), c = F(null);
            Oe(()=>o.isSearchVisible, (g)=>{
                g && br(()=>{
                    c.value?.focus();
                });
            });
            const _ = {
                vault: "menu.vault",
                "add-vault": "menu.add",
                "mobile-data": "menu.migration",
                "mobile-settings": "menu.settings",
                "settings-appearance": "menu.appearance",
                "migration-export": "migration.export",
                "migration-import": "migration.import",
                backups: "menu.backup",
                tools: "menu.tools",
                "settings-passkey": "menu.passkey",
                "settings-about": "menu.about",
                "settings-language": "menu.language",
                "settings-theme": "menu.theme",
                "settings-layout": "settings.display_layout",
                "settings-security": "menu.security",
                "settings-devices": "security.devices"
            }, p = ()=>{
                const g = t.value === "zh-CN" ? "en-US" : "zh-CN";
                $i(g);
            }, f = ()=>{
                a.path === "/" ? o.homeTabReset++ : r.push("/");
            }, d = {
                "totp-secret": "tools.totp_secret_title",
                "apps-review": "tools.apps_review_title",
                password: "tools.password_gen_title",
                "time-sync": "tools.time_sync_title",
                "qr-parser": "tools.qr_parser_title"
            };
            return (g, m)=>{
                const w = ya, T = Lr, I = Yt, D = Or, h = Dr;
                return G(), te("header", {
                    class: Ht([
                        "header",
                        {
                            "is-mobile-subpage": O(o).isMobile && O(o).canGoBack
                        }
                    ])
                }, [
                    V("div", ol, [
                        O(o).isMobile && O(o).canGoBack ? (G(), ke(w, {
                            key: 0,
                            circle: "",
                            link: "",
                            icon: O(wn),
                            onClick: m[0] || (m[0] = (y)=>O(o).goBack()),
                            class: "header-back-btn"
                        }, null, 8, [
                            "icon"
                        ])) : ge("", !0),
                        !O(o).isMobile || !O(o).canGoBack ? (G(), te("a", {
                            key: 1,
                            href: "#",
                            onClick: vr(f, [
                                "prevent"
                            ]),
                            class: "header-home-link"
                        }, [
                            V("div", {
                                class: "header-logo",
                                onClick: m[1] || (m[1] = (...y)=>O(o).resetHomeTab && O(o).resetHomeTab(...y))
                            }, [
                                m[7] || (m[7] = V("img", {
                                    src: qr,
                                    alt: "NodeAuth",
                                    class: "header-logo-img"
                                }, null, -1)),
                                m[8] || (m[8] = V("h2", {
                                    class: "header-logo-text"
                                }, "NodeAuth", -1)),
                                K(kn, {
                                    name: "tag-fade"
                                }, {
                                    default: oe(()=>[
                                            O(n).isManualOffline ? (G(), ke(T, {
                                                key: 0,
                                                size: "small",
                                                type: "warning",
                                                effect: "dark",
                                                class: "status-tag manual-offline"
                                            }, {
                                                default: oe(()=>[
                                                        We(he(g.$t("common.offline_tag")), 1)
                                                    ]),
                                                _: 1
                                            })) : O(n).isPhysicalOffline ? (G(), ke(T, {
                                                key: 1,
                                                size: "small",
                                                type: "danger",
                                                effect: "dark",
                                                class: "status-tag passive-offline"
                                            }, {
                                                default: oe(()=>[
                                                        We(he(g.$t("common.network_error_tag")), 1)
                                                    ]),
                                                _: 1
                                            })) : ge("", !0)
                                        ]),
                                    _: 1
                                })
                            ])
                        ])) : ge("", !0)
                    ]),
                    O(o).isMobile && O(o).canGoBack ? (G(), te("div", sl, [
                        V("h2", il, he(O(o).activeSubTool ? g.$t(d[O(o).activeSubTool]) : g.$t(_[O(o).app_active_tab])), 1)
                    ])) : ge("", !0),
                    V("div", ll, [
                        O(a).meta.requiresAuth ? ge("", !0) : (G(), te("div", cl, [
                            K(w, {
                                circle: "",
                                icon: O(i).isDark ? O(Pr) : O(Nr),
                                onClick: O(i).toggleTheme,
                                class: "header-action-btn"
                            }, null, 8, [
                                "icon",
                                "onClick"
                            ]),
                            K(w, {
                                circle: "",
                                icon: rl,
                                title: g.$i18n.locale === "zh-CN" ? "English" : "切换语言",
                                onClick: p,
                                class: "header-action-btn"
                            }, null, 8, [
                                "title"
                            ])
                        ])),
                        O(o).isMobile && O(o).isSearchVisible ? (G(), te("div", ul, [
                            K(D, {
                                ref_key: "mobileSearchInput",
                                ref: c,
                                modelValue: O(o).searchQuery,
                                "onUpdate:modelValue": m[2] || (m[2] = (y)=>O(o).searchQuery = y),
                                placeholder: g.$t("search.placeholder"),
                                clearable: "",
                                class: "header-search-input"
                            }, {
                                prefix: oe(()=>[
                                        O(o).isLoadingSearching && O(o).searchQuery ? (G(), ke(I, {
                                            key: 0,
                                            class: "is-loading"
                                        }, {
                                            default: oe(()=>[
                                                    K(O(oa))
                                                ]),
                                            _: 1
                                        })) : (G(), ke(I, {
                                            key: 1
                                        }, {
                                            default: oe(()=>[
                                                    K(O(Pa))
                                                ]),
                                            _: 1
                                        }))
                                    ]),
                                _: 1
                            }, 8, [
                                "modelValue",
                                "placeholder"
                            ]),
                            K(w, {
                                link: "",
                                onClick: m[3] || (m[3] = (y)=>O(o).toggleSearch(!1)),
                                class: "search-cancel-btn"
                            }, {
                                default: oe(()=>[
                                        We(he(g.$t("common.cancel")), 1)
                                    ]),
                                _: 1
                            })
                        ])) : ge("", !0),
                        O(o).isMobile && O(a).meta.requiresAuth && O(o).app_active_tab === "vault" && !O(o).isSearchVisible ? (G(), te("div", _l, [
                            K(w, {
                                circle: "",
                                onClick: m[4] || (m[4] = (y)=>O(o).toggleSearch(!0)),
                                class: "header-action-btn shadow-btn"
                            }, {
                                default: oe(()=>[
                                        O(o).isLoadingSearching ? (G(), ke(I, {
                                            key: 0,
                                            class: "is-loading"
                                        }, {
                                            default: oe(()=>[
                                                    K(O(oa))
                                                ]),
                                            _: 1
                                        })) : (G(), ke(I, {
                                            key: 1
                                        }, {
                                            default: oe(()=>[
                                                    K(O(Pa))
                                                ]),
                                            _: 1
                                        }))
                                    ]),
                                _: 1
                            }),
                            K(w, {
                                circle: "",
                                type: "primary",
                                icon: O(Cr),
                                onClick: m[5] || (m[5] = (y)=>O(o).setActiveTab("add-vault")),
                                class: "header-add-btn shadow-btn"
                            }, null, 8, [
                                "icon"
                            ])
                        ])) : ge("", !0),
                        !O(o).isMobile && O(a).meta.requiresAuth ? (G(), te("div", dl, [
                            K(h, {
                                size: 32,
                                src: O(s).userInfo?.avatar || "",
                                onError: m[6] || (m[6] = (y)=>!0)
                            }, {
                                default: oe(()=>[
                                        We(he(O(s).userInfo?.username ? O(s).userInfo.username.charAt(0).toUpperCase() : "?"), 1)
                                    ]),
                                _: 1
                            }, 8, [
                                "src"
                            ]),
                            V("span", fl, he(O(s).userInfo?.username || "NodeAuth"), 1)
                        ])) : ge("", !0)
                    ])
                ], 2);
            };
        }
    };
    ml = {
        class: "global-footer"
    };
    pl = {
        class: "footer-content"
    };
    gl = {
        key: 0
    };
    hl = [
        "title"
    ];
    yl = {
        key: 0,
        class: "commit-hash"
    };
    bl = {
        __name: "theFooter",
        setup (e) {
            const t = Dt(), a = "__DIST_COMMIT_HASH__", r = "2.2.4";
            return (o, n)=>(G(), te("footer", ml, [
                    V("div", pl, [
                        V("p", null, [
                            We(" ©" + he(new Date().getFullYear()) + " ", 1),
                            n[2] || (n[2] = V("a", {
                                href: "https://github.com/nodeauth/nodeauth-worker",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "NodeAuth", -1)),
                            O(t).isMobile ? ge("", !0) : (G(), te("span", gl, [
                                ...n[0] || (n[0] = [
                                    V("span", {
                                        class: "divider"
                                    }, "|", -1),
                                    We(" A Secure 2FA Management Tool ", -1)
                                ])
                            ])),
                            V("span", {
                                class: "version-info",
                                title: `Commit Hash: ${O(a)}`
                            }, [
                                n[1] || (n[1] = V("span", {
                                    class: "divider"
                                }, "|", -1)),
                                We(" v" + he(O(r)), 1),
                                O(a) && O(a) !== "unknown" ? (G(), te("span", yl, " (" + he(O(a)) + ")", 1)) : ge("", !0)
                            ], 8, hl)
                        ])
                    ])
                ]));
        }
    };
    dr = Zt(bl, [
        [
            "__scopeId",
            "data-v-e48f96a8"
        ]
    ]);
    vl = {
        class: "layout-main-content"
    };
    kl = {
        class: "text-16 ls-1"
    };
    El = {
        __name: "mainLayout",
        setup (e) {
            const t = Dt(), a = dt(), r = se(()=>t.isMobile ? {
                    minHeight: "440px"
                } : {
                    paddingLeft: t.isSidebarCollapsed ? "64px" : "240px",
                    minHeight: "520px",
                    transition: "padding-left 0.3s"
                });
            let o = 0, n = 0;
            const s = F(0), i = F(!1), c = F(!1), _ = (d)=>{
                !t.isMobile || !t.canGoBack || (o = d.touches[0].clientX, n = Date.now(), s.value = 0, c.value = !1, i.value = o < 50);
            }, p = (d)=>{
                if (!i.value) return;
                const g = d.touches[0].clientX;
                if (s.value = Math.max(0, g - o), s.value >= 50 && !c.value) {
                    if ("vibrate" in navigator) try {
                        navigator.vibrate(25);
                    } catch  {}
                    c.value = !0;
                }
                s.value < 40 && (c.value = !1);
            }, f = (d)=>{
                if (!i.value) return;
                const g = d.changedTouches[0].clientX, m = Date.now() - n;
                g - o > 50 && m < 1500 && t.goBack(), i.value = !1, s.value = 0, c.value = !1;
            };
            return (d, g)=>{
                const m = Yt;
                return G(), te("div", {
                    class: "layout-main",
                    onTouchstart: _,
                    onTouchmove: p,
                    onTouchend: f
                }, [
                    O(t).isMobile && O(o) < 50 && s.value > 5 ? (G(), te("div", {
                        key: 0,
                        class: "swipe-back-feedback",
                        style: Ia({
                            opacity: Math.min(s.value / 100, .9),
                            transform: `translateY(-50%) translateX(${Math.min(s.value - 45, 15)}px) scale(${.8 + Math.min(s.value / 350, .4)})`
                        })
                    }, [
                        K(m, null, {
                            default: oe(()=>[
                                    K(O(wn))
                                ]),
                            _: 1
                        })
                    ], 4)) : ge("", !0),
                    K(_r),
                    V("main", vl, [
                        O(a).isVerifying ? (G(), te("div", {
                            key: 0,
                            class: "flex-column flex-center text-secondary content-loading-container",
                            style: Ia(O(r))
                        }, [
                            K(m, {
                                class: "is-loading mb-20 text-primary",
                                size: 48
                            }, {
                                default: oe(()=>[
                                        K(O(oa))
                                    ]),
                                _: 1
                            }),
                            V("p", kl, he(d.$t("common.loading_data")), 1)
                        ], 4)) : (G(), ke(O(En), {
                            key: 1
                        }))
                    ]),
                    O(t).isMobile ? ge("", !0) : (G(), ke(dr, {
                        key: 1
                    }))
                ], 32);
            };
        }
    };
    wl = {
        class: "layout-blank"
    };
    Al = {
        class: "layout-blank-content"
    };
    Tl = {
        __name: "blankLayout",
        setup (e) {
            return (t, a)=>(G(), te("div", wl, [
                    K(_r),
                    V("main", Al, [
                        K(O(En))
                    ]),
                    K(dr)
                ]));
        }
    };
    Sl = {
        name: "iconFingerprint"
    };
    Il = {
        fill: "currentColor",
        width: "1em",
        height: "1em",
        viewBox: "0 0 512 512",
        xmlns: "http://www.w3.org/2000/svg"
    };
    function Ll(e, t, a, r, o, n) {
        return G(), te("svg", Il, [
            ...t[0] || (t[0] = [
                V("path", {
                    d: "M390.42,75.28a10.45,10.45,0,0,1-5.32-1.44C340.72,50.08,302.35,40,256.35,40c-45.77,0-89.23,11.28-128.76,33.84C122,77,115.11,74.8,111.87,69a12.4,12.4,0,0,1,4.63-16.32A281.81,281.81,0,0,1,256.35,16c49.23,0,92.23,11.28,139.39,36.48a12,12,0,0,1,4.85,16.08A11.3,11.3,0,0,1,390.42,75.28Zm-330.79,126a11.73,11.73,0,0,1-6.7-2.16,12.26,12.26,0,0,1-2.78-16.8c22.89-33.6,52-60,86.69-78.48C209.42,65,302.35,64.72,375.16,103.6c34.68,18.48,63.8,44.64,86.69,78a12.29,12.29,0,0,1-2.78,16.8,11.26,11.26,0,0,1-16.18-2.88c-20.8-30.24-47.15-54-78.36-70.56-66.34-35.28-151.18-35.28-217.29.24-31.44,16.8-57.79,40.8-78.59,71A10,10,0,0,1,59.63,201.28ZM204.1,491a10.66,10.66,0,0,1-8.09-3.6C175.9,466.48,165,453,149.55,424c-16-29.52-24.27-65.52-24.27-104.16,0-71.28,58.71-129.36,130.84-129.36S387,248.56,387,319.84a11.56,11.56,0,1,1-23.11,0c0-58.08-48.32-105.36-107.72-105.36S148.4,261.76,148.4,319.84c0,34.56,7.39,66.48,21.49,92.4,14.8,27.6,25,39.36,42.77,58.08a12.67,12.67,0,0,1,0,17A12.44,12.44,0,0,1,204.1,491Zm165.75-44.4c-27.51,0-51.78-7.2-71.66-21.36a129.1,129.1,0,0,1-55-105.36,11.57,11.57,0,1,1,23.12,0,104.28,104.28,0,0,0,44.84,85.44c16.41,11.52,35.6,17,58.72,17a147.41,147.41,0,0,0,24-2.4c6.24-1.2,12.25,3.12,13.4,9.84a11.92,11.92,0,0,1-9.47,13.92A152.28,152.28,0,0,1,369.85,446.56ZM323.38,496a13,13,0,0,1-3-.48c-36.76-10.56-60.8-24.72-86-50.4-32.37-33.36-50.16-77.76-50.16-125.28,0-38.88,31.9-70.56,71.19-70.56s71.2,31.68,71.2,70.56c0,25.68,21.5,46.56,48.08,46.56s48.08-20.88,48.08-46.56c0-90.48-75.13-163.92-167.59-163.92-65.65,0-125.75,37.92-152.79,96.72-9,19.44-13.64,42.24-13.64,67.2,0,18.72,1.61,48.24,15.48,86.64,2.32,6.24-.69,13.2-6.7,15.36a11.34,11.34,0,0,1-14.79-7,276.39,276.39,0,0,1-16.88-95c0-28.8,5.32-55,15.72-77.76,30.75-67,98.94-110.4,173.6-110.4,105.18,0,190.71,84.24,190.71,187.92,0,38.88-31.9,70.56-71.2,70.56s-71.2-31.68-71.2-70.56C303.5,293.92,282,273,255.42,273s-48.08,20.88-48.08,46.56c0,41,15.26,79.44,43.23,108.24,22,22.56,43,35,75.59,44.4,6.24,1.68,9.71,8.4,8.09,14.64A11.39,11.39,0,0,1,323.38,496Z"
                }, null, -1)
            ])
        ]);
    }
    let Nl, Ol, Cl, Dl, Rl, Ml, Fl, Ul, xl, Bl, Wl, $l;
    Pl = Zt(Sl, [
        [
            "render",
            Ll
        ]
    ]);
    Nl = {
        key: 0,
        class: "security-lock-overlay"
    };
    Ol = {
        class: "lock-panel"
    };
    Cl = {
        class: "lock-header"
    };
    Dl = {
        class: "lock-icon-circle"
    };
    Rl = {
        class: "keypad"
    };
    Ml = [
        "onClick"
    ];
    Fl = {
        class: "lock-footer mt-20"
    };
    Ul = {
        __name: "appLockOverlay",
        setup (e) {
            const { t } = _t(), a = Jt(), r = dt(), o = ha(), n = se(()=>a.isLocked && o.meta.requiresAuth && !o.meta.skipPinLock), s = F(""), i = F(!1), c = (m)=>{
                ae.info(`[PWA-Debug] ${m}`);
            }, _ = (m)=>{
                s.value.length < 6 && (s.value += m);
            }, p = ()=>{
                s.value = s.value.slice(0, -1);
            }, f = async (m = !1)=>{
                if (n.value) try {
                    c(m ? "👉 用户手动触发生物识别" : "🤖 系统探测到前台激活，尝试自动唤起"), await a.unlockWithBiometric(m) && (c("✅ 解锁成功"), Pe.success(t("security.unlocked")));
                } catch (w) {
                    const T = w?.name || w?.message;
                    if (c(`❌ 验证异常: ${T}`), !m && (T === "NotAllowedError" || T === "AbortError")) {
                        ae.warn("[PWA-AppLock] Auto-prompt blocked by OS (Expected behavior on iOS)");
                        return;
                    }
                    m && ae.error(`Biometric Auth Error: ${w.message || w}`);
                }
            }, d = ()=>{
                document.visibilityState === "visible" && n.value && (c("监测到 App 回到前台"), setTimeout(()=>f(!1), 500));
            };
            qt(()=>{
                document.addEventListener("visibilitychange", d), n.value && setTimeout(()=>f(!1), 500);
            }), vn(()=>{
                document.removeEventListener("visibilitychange", d);
            }), Oe(()=>a.isLocked, (m)=>{
                m && (c("系统锁定状态激活"), setTimeout(()=>f(!1), 500));
            }), Oe(s, async (m)=>{
                m.length === 6 && !a.isUnlocking && (await a.unlockWithPin(m) ? (s.value = "", Pe.success(t("security.unlocked"))) : (i.value = !0, setTimeout(()=>{
                    i.value = !1, s.value = "";
                }, 500)));
            });
            const g = ()=>{
                Tn.confirm(t("security.reset_confirm_message"), t("security.reset_confirm_title"), {
                    confirmButtonText: t("common.confirm"),
                    cancelButtonText: t("common.cancel"),
                    type: "warning"
                }).then(async ()=>{
                    await r.logout(), await Promise.all([
                        ve("sys:sec:enc_device_salt"),
                        ve("sys:sec:lock_mode"),
                        ve("sys:sec:bio_cred_id"),
                        ve("sys:sec:bio_enc_salt"),
                        ve("sys:sec:bio_wrap_key")
                    ]), localStorage.clear(), window.location.reload();
                });
            };
            return (m, w)=>{
                const T = Yt, I = ya;
                return G(), ke(kn, {
                    name: "el-fade-in"
                }, {
                    default: oe(()=>[
                            n.value ? (G(), te("div", Nl, [
                                V("div", Ol, [
                                    V("div", Cl, [
                                        V("div", Dl, [
                                            K(T, {
                                                size: 32
                                            }, {
                                                default: oe(()=>[
                                                        K(O(An))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                        V("h2", null, he(m.$t("security.app_locked")), 1),
                                        V("p", null, he(m.$t("security.enter_pin_to_unlock")), 1)
                                    ]),
                                    V("div", {
                                        class: Ht([
                                            "pin-display mb-30",
                                            {
                                                shake: i.value
                                            }
                                        ])
                                    }, [
                                        (G(), te($t, null, La(6, (D)=>V("div", {
                                                key: D,
                                                class: Ht([
                                                    "pin-dot",
                                                    {
                                                        "is-filled": s.value.length >= D
                                                    }
                                                ])
                                            }, null, 2)), 64))
                                    ], 2),
                                    V("div", Rl, [
                                        (G(), te($t, null, La(9, (D)=>V("button", {
                                                key: D,
                                                onClick: (h)=>_(D.toString())
                                            }, he(D), 9, Ml)), 64)),
                                        [
                                            "biometric",
                                            "biometric_compat"
                                        ].includes(O(a).lockMode) ? (G(), te("button", {
                                            key: 0,
                                            class: "btn-extra btn-biometric",
                                            onClick: w[0] || (w[0] = (D)=>f(!0))
                                        }, [
                                            K(T, null, {
                                                default: oe(()=>[
                                                        K(Pl)
                                                    ]),
                                                _: 1
                                            })
                                        ])) : (G(), te("button", {
                                            key: 1,
                                            class: "btn-extra",
                                            onClick: w[1] || (w[1] = (D)=>s.value = "")
                                        }, "C")),
                                        V("button", {
                                            onClick: w[2] || (w[2] = (D)=>_("0"))
                                        }, "0"),
                                        V("button", {
                                            class: "btn-extra",
                                            onClick: p
                                        }, [
                                            K(T, null, {
                                                default: oe(()=>[
                                                        K(O(Rr))
                                                    ]),
                                                _: 1
                                            })
                                        ])
                                    ]),
                                    V("div", Fl, [
                                        K(I, {
                                            link: "",
                                            type: "info",
                                            onClick: g
                                        }, {
                                            default: oe(()=>[
                                                    We(he(m.$t("security.forgot_pin")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ])
                                ])
                            ])) : ge("", !0)
                        ]),
                    _: 1
                });
            };
        }
    };
    xl = Zt(Ul, [
        [
            "__scopeId",
            "data-v-b5046829"
        ]
    ]);
    Bl = {
        key: 1,
        class: "app-blur-overlay"
    };
    Wl = {
        class: "blur-content"
    };
    $l = {
        __name: "app",
        setup (e) {
            const { locale: t } = _t(), a = se(()=>t.value === "zh-CN" ? Fr : Ur), r = ha();
            ga();
            const o = Dt(), n = ct(), s = Jt(), i = se(()=>r.meta.layout === "blank" || !r.meta.requiresAuth ? Tl : El);
            Oe(()=>o.showMobileMenu, (m)=>{
                m ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
            });
            const c = ()=>{
                o.isMobile = window.innerWidth < 768;
            }, _ = F(!1), p = se(()=>n.isPhysicalOffline && !_.value);
            Oe(()=>n.isPhysicalOffline, (m)=>{
                m && (_.value = !1);
            });
            const f = F(!1), d = ()=>{
                f.value = document.hidden;
            }, g = ()=>{
                const m = ()=>{
                    n.isOffline || (ae.info("Initiating background prefetching of advanced capabilities..."), Promise.allSettled([
                        de(()=>import("./dataExport-Cd5QdDuP.js"), __vite__mapDeps([4,5,6,7,8,9,1,2,0,3,10,11,12,13,14,15,16,17,18])),
                        de(()=>import("./dataImport-Bca3Q22u.js"), __vite__mapDeps([19,5,6,7,9,1,2,0,3,10,11,12,13,14,15,17,18,8,20])),
                        de(()=>import("./dataBackup-ClYh4_Gy.js"), __vite__mapDeps([21,5,6,7,9,1,2,0,3,10,11,12,13,14,15,17,18])),
                        de(()=>import("./utilityTools-CkJFqzKH.js").then(async (m)=>{
                                await m.__tla;
                                return m;
                            }), __vite__mapDeps([22,1,2,5,6,7,23,14,15])),
                        de(()=>import("./dataMigrationService-D1gFIi41.js").then(async (m)=>{
                                await m.__tla;
                                return m;
                            }), __vite__mapDeps([9,1,2,0,3,10,5,6,7,11,12,13,14,15])),
                        de(()=>import("./passkeySettings-Dc9RVIqu.js"), __vite__mapDeps([24,5,6,7,25,1,2,14,17,18,15])),
                        de(()=>import("./emergency-mkIUtubs.js"), __vite__mapDeps([26,5,6,7,1,2,14,15]))
                    ]));
                };
                window.requestIdleCallback ? window.setTimeout(()=>window.requestIdleCallback(m), 5e3) : window.setTimeout(m, 8e3);
            };
            return qt(()=>{
                c(), n.initNetworkStatus(), s.init(), window.addEventListener("resize", c), document.addEventListener("visibilitychange", d), g();
            }), kr(()=>{
                window.removeEventListener("resize", c), document.removeEventListener("visibilitychange", d);
            }), (m, w)=>{
                const T = xr, I = Yt, D = Mr;
                return G(), ke(D, {
                    locale: a.value,
                    "z-index": 5e3
                }, {
                    default: oe(()=>[
                            V("div", {
                                class: Ht([
                                    "app-container",
                                    {
                                        "is-blank-layout": O(r).meta.layout === "blank" || !O(r).meta.requiresAuth
                                    }
                                ])
                            }, [
                                K(xl),
                                p.value ? (G(), ke(T, {
                                    key: 0,
                                    title: m.$t("common.offline_mode"),
                                    type: "warning",
                                    "show-icon": "",
                                    center: "",
                                    closable: "",
                                    class: "global-offline-banner",
                                    onClose: w[0] || (w[0] = (h)=>_.value = !0)
                                }, null, 8, [
                                    "title"
                                ])) : ge("", !0),
                                O(o).appGhostMode && f.value && !O(s).isLocked ? (G(), te("div", Bl, [
                                    V("div", Wl, [
                                        K(I, {
                                            size: 48
                                        }, {
                                            default: oe(()=>[
                                                    K(O(An))
                                                ]),
                                            _: 1
                                        }),
                                        V("p", null, he(m.$t("security.ghost_mode_active")), 1)
                                    ])
                                ])) : ge("", !0),
                                (G(), ke(Er(i.value)))
                            ], 2)
                        ]),
                    _: 1
                }, 8, [
                    "locale"
                ]);
            };
        }
    };
    Hl = Ct({
        name: "AsyncLoading",
        setup () {
            const e = (a)=>{
                try {
                    return X.global.t(a);
                } catch  {
                    return a;
                }
            };
            return qt(()=>{
                if (document.getElementById("async-loading-styles")) return;
                const a = document.createElement("style");
                a.id = "async-loading-styles", a.textContent = `
                @keyframes async-progress-flow {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .async-progress-bar {
                    width: 200px;
                    height: 3px;
                    background: rgba(64, 158, 255, 0.1);
                    border-radius: 4px;
                    overflow: hidden;
                    position: relative;
                    margin-top: 16px;
                }
                .async-progress-inner {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    height: 100%;
                    background: var(--el-color-primary);
                    border-radius: 4px;
                    animation: async-progress-flow 1.5s infinite ease-in-out;
                    box-shadow: 0 0 8px var(--el-color-primary);
                }
            `, document.head.appendChild(a);
            }), ()=>Ue("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "400px",
                        width: "100%",
                        backgroundColor: "transparent"
                    }
                }, [
                    Ue("div", {
                        style: {
                            fontSize: "16px",
                            color: "var(--el-text-color-regular)",
                            fontWeight: "500",
                            letterSpacing: "1px"
                        }
                    }, e("common.resource_loading")),
                    Ue("div", {
                        class: "async-progress-bar"
                    }, [
                        Ue("div", {
                            class: "async-progress-inner"
                        })
                    ])
                ]);
        }
    });
    nt = function(e) {
        return wr({
            loader: async ()=>{
                ae.info("[AsyncComponent] Starting to load component...");
                try {
                    const t = await e();
                    return ae.info("[AsyncComponent] Component loaded successfully"), t;
                } catch (t) {
                    throw ae.error("[AsyncComponent] Component load failed:", t), t;
                }
            },
            loadingComponent: Hl,
            errorComponent: Ct({
                name: "AsyncError",
                props: [
                    "error"
                ],
                setup (t) {
                    ae.error("[AsyncComponent] Rendering error component:", t.error);
                    const a = (r)=>{
                        try {
                            return X.global.t(r);
                        } catch  {
                            return r;
                        }
                    };
                    return ()=>Ue("div", {
                            style: {
                                padding: "40px",
                                textAlign: "center"
                            }
                        }, [
                            Ue(Br, {
                                description: a("common.loading_failed")
                            }, {
                                default: ()=>Ue(ya, {
                                        type: "primary",
                                        onClick: ()=>window.location.reload()
                                    }, a("common.refresh"))
                            })
                        ]);
                }
            }),
            delay: 200,
            timeout: 15e3,
            onError (t, a, r, o) {
                o <= 2 ? (ae.warn(`[AsyncComponent] Loading failed, retrying (${o}/2)...`, t), setTimeout(()=>a(), 500)) : r();
            }
        });
    };
    const Gl = [
        {
            path: "/",
            name: "Home",
            component: nt(()=>de(()=>import("./home-BYczQqeG.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((e)=>e.h), __vite__mapDeps([27,5,6,7,23,1,2,28]))),
            meta: {
                requiresAuth: !0
            }
        },
        {
            path: "/login",
            name: "Login",
            component: nt(()=>de(()=>import("./login-DOZIKmNn.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([29,5,6,7,1,2,12,25,14,15]))),
            meta: {
                guestOnly: !0
            }
        },
        {
            path: "/oauth/callback",
            name: "OAuthCallback",
            component: nt(()=>de(()=>import("./oauthCallback--5WYGvyW.js"), __vite__mapDeps([30,5,6,7,1,2,14,15]))),
            meta: {
                requiresAuth: !1
            }
        },
        {
            path: "/callback/:provider",
            name: "ProviderCallback",
            component: nt(()=>de(()=>import("./oauthCallback--5WYGvyW.js"), __vite__mapDeps([30,5,6,7,1,2,14,15]))),
            meta: {
                requiresAuth: !1
            }
        },
        {
            path: "/health",
            name: "HealthCheck",
            component: nt(()=>de(()=>import("./healthCheck-k-Ifb7Dt.js"), __vite__mapDeps([31,5,6,7,1,2,14,15,32]))),
            meta: {
                guestOnly: !1,
                requiresAuth: !1
            }
        },
        {
            path: "/emergency",
            name: "Emergency",
            component: nt(()=>de(()=>import("./emergency-mkIUtubs.js"), __vite__mapDeps([26,5,6,7,1,2,14,15]))),
            meta: {
                requiresAuth: !0,
                skipPinLock: !0
            }
        }
    ], st = Ar({
        history: Tr(),
        routes: Gl
    });
    st.beforeEach(async (e)=>{
        const t = dt(), a = !!(t.userInfo && t.userInfo.id);
        if (e.meta.requiresAuth && !a) return "/login";
        if (e.meta.guestOnly && a) return "/";
        if (a) {
            if (t.needsEmergency && e.path !== "/emergency") return "/emergency";
            if (!t.needsEmergency && e.path === "/emergency") return "/";
        }
        return !t.isInitialized && (e.meta.requiresAuth || e.meta.guestOnly) ? (t.startVerifying(), t.fetchUserInfo().then((r)=>{
            t.markInitialized(), t.stopVerifying(), !r && e.meta.requiresAuth && st.replace("/login"), r && e.meta.guestOnly && st.replace("/");
        }).catch(()=>{
            t.markInitialized(), t.stopVerifying();
        })) : t.isInitialized || t.markInitialized(), !0;
    });
    st.onError((e, t)=>{
        ae.error("Router navigation error:", e), (e.message.match(/Failed to fetch dynamically imported module/i) || e.message.match(/Importing a module script failed/i) || e.message.match(/Loading chunk/i)) && (navigator.onLine ? window.location.reload() : Tn.alert(X.global.t("pwa.offline_feature_error_desc") || "The advanced feature requires a network connection to download its necessary components for the first time. Please connect to the internet and try again.", X.global.t("pwa.offline_feature_error_title") || "Network Required", {
            confirmButtonText: X.global.t("common.confirm") || "OK",
            type: "warning",
            center: !0
        }));
    });
    const ze = Sr($l), Vl = Ir();
    ze.use(Vl);
    ze.use(X);
    const ql = ur();
    ql.initTheme();
    const Yl = Vr({
        immediate: !0,
        onNeedRefresh () {
            de(async ()=>{
                const { ElNotification: e } = await import("./element-plus-Ca9klJWt.js").then((t)=>t.aZ);
                return {
                    ElNotification: e
                };
            }, __vite__mapDeps([5,6,7])).then(({ ElNotification: e })=>{
                e({
                    title: X.global.t("pwa.update_available") || "Update Available",
                    message: `
          <div style="line-height: 1.5; font-size: 14px; margin-bottom: 5px;">
            🎉 ${X.global.t("pwa.update_ready") || "A new version is ready!"}
          </div>
          <div>
            <button 
              style="background: var(--el-color-primary); color: white; border: none; padding: 5px 12px; border-radius: 4px; cursor: pointer; font-size: 13px;"
              id="pwa-refresh-btn"
            >
              ${X.global.t("pwa.pwa_refresh") || "Refresh Now"}
            </button>
          </div>
        `,
                    dangerouslyUseHTMLString: !0,
                    type: "success",
                    duration: 0
                }), setTimeout(()=>{
                    const t = document.getElementById("pwa-refresh-btn");
                    t && (t.onclick = ()=>Yl(!0));
                }, 100);
            });
        }
    });
    ze.use(Hr, {
        queryClientConfig: {
            defaultOptions: {
                queries: {
                    retry: 1,
                    refetchOnWindowFocus: !1,
                    staleTime: 1e3 * 60 * 5
                }
            }
        }
    });
    const Kl = cr(), jl = dt();
    Promise.all([
        Kl.init(),
        jl.init()
    ]).then(()=>{
        ze.use(st), ze.mount("#app");
    }).catch((e)=>{
        ae.error("[Main] Initialization failed:", e), ze.use(st), ze.mount("#app");
    });
});
export { Hl as A, Pl as F, rl as I, Zt as _, cr as a, Jt as b, ve as c, Qi as d, zi as e, _t as f, ce as g, dt as h, X as i, gn as j, nt as k, ae as l, qr as m, ct as n, el as o, ir as p, $e as q, at as r, _e as s, $i as t, Dt as u, ur as v, xt as w, Hi as x, ac as y, __tla };
