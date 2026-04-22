const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qr-utils-ZD31REeY.js","assets/element-plus-CVRB8fAt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css"])))=>i.map(i=>d[i]);
import { _ as ce, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { n as ae, p as K, v as le, b as ee, O as fe, __tla as __tla_1 } from "./vaultService-DIRirBWX.js";
import { l as N, d as me, e as we, __tla as __tla_2 } from "./index-Bkp62iVv.js";
import { a as pe } from "./argon2-browser-DLxThqQg.js";
import { l as ge, __tla as __tla_3 } from "./resourceRegistry-9eHlhal2.js";
import { argon2id as Ae } from "./hash-wasm-Dup_VHWH.js";
import { unzipSync as _e } from "./compression-utils-CXh1ITwj.js";
import { a as Se } from "./qr-utils-ZD31REeY.js";
import { B as be, S as ie, a as Ee, b as J, c as xe, d as Te, M as ve, F as Ie, e as ue, f as Pe, g as Oe } from "./wa-sqlite-D0naBMh4.js";
import "./vue-core-Daban9YF.js";
import "./element-plus-CVRB8fAt.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let Ze;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_3;
        } catch  {}
    })()
]).then(async ()=>{
    function Y(r) {
        const o = new Uint8Array(r.length / 2);
        for(let t = 0; t < r.length; t += 2)o[t / 2] = parseInt(r.substring(t, t + 2), 16);
        return o;
    }
    function Le(r) {
        const o = atob(r), t = new Uint8Array(o.length);
        for(let e = 0; e < o.length; e++)t[e] = o.charCodeAt(e);
        return t;
    }
    function te(r) {
        try {
            return JSON.parse(r);
        } catch  {
            return null;
        }
    }
    const Fe = {
        decodePayload (r) {
            const o = [];
            let t = 0;
            function e() {
                let y = 0, s = 0;
                for(; t < r.length;){
                    const a = r[t++];
                    if (y |= (a & 127) << s, (a & 128) === 0) break;
                    s += 7;
                }
                return y;
            }
            for(; t < r.length;){
                const y = r[t++], s = y >> 3, a = y & 7;
                if (s === 1 && a === 2) {
                    const i = e(), f = t + i;
                    let w = null, u = "", _ = "", m = "SHA1", E = 6, T = "totp", p = 0;
                    for(; t < f;){
                        const n = r[t++], c = n >> 3, d = n & 7;
                        if (c === 1 && d === 2) {
                            const l = e(), g = r.slice(t, t + l), h = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
                            let A = 0, S = 0, b = "";
                            for(let O = 0; O < g.length; O++)for(S = S << 8 | g[O], A += 8; A >= 5;)b += h[S >>> A - 5 & 31], A -= 5;
                            A > 0 && (b += h[S << 5 - A & 31]), w = b, t += l;
                        } else if (c === 2 && d === 2) {
                            const l = e();
                            u = new TextDecoder().decode(r.slice(t, t + l)), t += l;
                        } else if (c === 3 && d === 2) {
                            const l = e();
                            _ = new TextDecoder().decode(r.slice(t, t + l)), t += l;
                        } else if (c === 4 && d === 0) {
                            const l = e();
                            l === 2 ? m = "SHA256" : l === 3 ? m = "SHA512" : l === 4 && (m = "MD5");
                        } else if (c === 5 && d === 0) e() === 2 && (E = 8);
                        else if (c === 6 && d === 0) T = e() === 1 ? "hotp" : "totp";
                        else if (c === 7 && d === 0) p = e();
                        else if (d === 0) e();
                        else if (d === 2) t += e();
                        else break;
                    }
                    if (w) {
                        let n = u, c = _;
                        if (!c && u.includes(":")) {
                            const d = u.split(":");
                            c = d[0].trim(), n = d[1].trim();
                        } else c || (c = u);
                        o.push(ae({
                            service: c,
                            account: n,
                            secret: w,
                            algorithm: m,
                            digits: E,
                            type: T,
                            counter: T === "hotp" ? p : 0,
                            period: 30
                        }));
                    }
                    t = f;
                } else if (a === 0) e();
                else if (a === 2) t += e();
                else break;
            }
            return o;
        }
    }, de = {
        _splitCsvLine (r) {
            const o = [];
            let t = 0;
            for(; t <= r.length;){
                if (t === r.length) {
                    o.push("");
                    break;
                }
                if (r[t] === '"') {
                    let e = "";
                    for(t++; t < r.length;)if (r[t] === '"') if (r[t + 1] === '"') e += '"', t += 2;
                    else {
                        t++;
                        break;
                    }
                    else e += r[t++];
                    o.push(e.trim()), r[t] === "," && t++;
                } else {
                    const e = r.indexOf(",", t);
                    if (e === -1) {
                        o.push(r.slice(t).trim());
                        break;
                    }
                    o.push(r.slice(t, e).trim()), t = e + 1;
                }
            }
            return o;
        },
        parseCsv (r) {
            const o = r.split(`
`).filter((p)=>p.trim());
            if (o.length < 2) return [];
            const t = this._splitCsvLine(o[0]).map((p)=>p.toLowerCase()), e = [], y = t.includes("login_totp"), s = t.includes("otpauth") && !t.includes("title"), a = t.includes("otpauth") && t.includes("title"), i = t.includes("totp") && t.includes("vault") && t.includes("createtime"), f = t.includes("otpurl") && t.includes("title") && t.includes("username"), w = t.includes("issuer") || t.includes("secret") || t.includes("name"), u = [
                "otpauth",
                "login_totp",
                "totp",
                "mfa",
                "two_factor_code",
                "secret",
                "otpurl",
                "nodeauth",
                "authenticator"
            ], _ = [
                "name",
                "title",
                "item name",
                "issuer",
                "label"
            ], m = [
                "username",
                "login",
                "login_username",
                "account",
                "email"
            ], E = (p)=>p ? p.toString().trim().replace(/[\s-]/g, "").toUpperCase() : "", T = t.some((p)=>u.includes(p));
            if (!y && !s && !a && !i && !f && !w && !T) return [];
            for(let p = 1; p < o.length; p++){
                const n = this._splitCsvLine(o[p]), c = {};
                if (t.forEach((d, l)=>{
                    c[d] = n[l] || "";
                }), a) {
                    const d = (c.otpauth || "").trim();
                    if (d && d.startsWith("otpauth://")) {
                        const l = K(d);
                        l && (l.service = c.title || l.service, l.account = c.username || l.account, e.push(l));
                    }
                } else if (y || s) {
                    const d = (c.login_totp || c.otpauth || c.totp || "").trim();
                    if (d) {
                        let l = null;
                        if (d.startsWith("otpauth://") || d.startsWith("steam://")) l = K(d);
                        else {
                            const g = E(d);
                            /^[A-Z2-7]+=*$/.test(g) && (l = {
                                service: c.name || "Unknown",
                                account: c.login_username || "Unknown",
                                secret: g,
                                algorithm: "SHA1",
                                digits: 6,
                                period: 30,
                                category: "",
                                type: "totp"
                            });
                        }
                        l && (l.service = c.name || l.service, l.account = c.login_username || l.account, e.push(l));
                    }
                } else if (i) {
                    const d = (c.totp || "").trim();
                    if (d && (d.startsWith("otpauth://") || d.startsWith("steam://"))) {
                        const l = K(d);
                        l && (l.service = c.name || l.service, l.account = c.username || l.account, l.category = c.vault || "", e.push(l));
                    }
                } else if (f) {
                    const d = (c.otpurl || "").trim();
                    if (d && (d.startsWith("otpauth://") || d.startsWith("steam://"))) {
                        const l = K(d);
                        l && (l.service = c.title || l.service, l.account = c.username || l.account, l.category = c.category || "", e.push(l));
                    }
                } else {
                    const d = t.find((g)=>u.includes(g)), l = d ? (c[d] || "").trim() : "";
                    if (l) if (l.toLowerCase().startsWith("otpauth://") || l.toLowerCase().startsWith("steam://")) {
                        const g = K(l);
                        if (g) {
                            const h = t.find((S)=>_.includes(S)), A = t.find((S)=>m.includes(S));
                            g.service = c[h] || g.service, g.account = c[A] || g.account, e.push(g);
                        }
                    } else {
                        const g = E(l);
                        if (/^[A-Z2-7]+=*$/.test(g)) {
                            let A = t.find((P)=>_.includes(P)), S = t.find((P)=>m.includes(P));
                            t.includes("issuer") && t.includes("name") && (A = "issuer", S = "name");
                            const b = (c.type || "totp").toLowerCase(), O = parseInt(c.digits || "0", 10), I = (c.algorithm || "SHA1").toUpperCase().replace(/-/g, "");
                            e.push({
                                ...ae({
                                    service: c[A],
                                    account: c[S],
                                    secret: g,
                                    algorithm: I,
                                    digits: O,
                                    period: parseInt(c.period || "30", 10),
                                    type: b,
                                    counter: parseInt(c.counter || "0", 10)
                                }),
                                category: c.category || ""
                            });
                        }
                    }
                }
            }
            return e;
        }
    };
    var se = {
        exports: {}
    }, he;
    function De() {
        return he || (he = 1, (function(r, o) {
            (function(t) {
                function y(p) {
                    const n = new Uint32Array([
                        1116352408,
                        1899447441,
                        3049323471,
                        3921009573,
                        961987163,
                        1508970993,
                        2453635748,
                        2870763221,
                        3624381080,
                        310598401,
                        607225278,
                        1426881987,
                        1925078388,
                        2162078206,
                        2614888103,
                        3248222580,
                        3835390401,
                        4022224774,
                        264347078,
                        604807628,
                        770255983,
                        1249150122,
                        1555081692,
                        1996064986,
                        2554220882,
                        2821834349,
                        2952996808,
                        3210313671,
                        3336571891,
                        3584528711,
                        113926993,
                        338241895,
                        666307205,
                        773529912,
                        1294757372,
                        1396182291,
                        1695183700,
                        1986661051,
                        2177026350,
                        2456956037,
                        2730485921,
                        2820302411,
                        3259730800,
                        3345764771,
                        3516065817,
                        3600352804,
                        4094571909,
                        275423344,
                        430227734,
                        506948616,
                        659060556,
                        883997877,
                        958139571,
                        1322822218,
                        1537002063,
                        1747873779,
                        1955562222,
                        2024104815,
                        2227730452,
                        2361852424,
                        2428436474,
                        2756734187,
                        3204031479,
                        3329325298
                    ]);
                    let c = 1779033703, d = 3144134277, l = 1013904242, g = 2773480762, h = 1359893119, A = 2600822924, S = 528734635, b = 1541459225;
                    const O = new Uint32Array(64);
                    function I(H) {
                        let Q = 0, k = H.length;
                        for(; k >= 64;){
                            let M = c, W = d, z = l, j = g, v = h, V = A, F = S, q = b, B, U, X, Z, re;
                            for(U = 0; U < 16; U++)X = Q + U * 4, O[U] = (H[X] & 255) << 24 | (H[X + 1] & 255) << 16 | (H[X + 2] & 255) << 8 | H[X + 3] & 255;
                            for(U = 16; U < 64; U++)B = O[U - 2], Z = (B >>> 17 | B << 15) ^ (B >>> 19 | B << 13) ^ B >>> 10, B = O[U - 15], re = (B >>> 7 | B << 25) ^ (B >>> 18 | B << 14) ^ B >>> 3, O[U] = (Z + O[U - 7] | 0) + (re + O[U - 16] | 0) | 0;
                            for(U = 0; U < 64; U++)Z = (((v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7)) + (v & V ^ ~v & F) | 0) + (q + (n[U] + O[U] | 0) | 0) | 0, re = ((M >>> 2 | M << 30) ^ (M >>> 13 | M << 19) ^ (M >>> 22 | M << 10)) + (M & W ^ M & z ^ W & z) | 0, q = F, F = V, V = v, v = j + Z | 0, j = z, z = W, W = M, M = Z + re | 0;
                            c = c + M | 0, d = d + W | 0, l = l + z | 0, g = g + j | 0, h = h + v | 0, A = A + V | 0, S = S + F | 0, b = b + q | 0, Q += 64, k -= 64;
                        }
                    }
                    I(p);
                    let P, D = p.length % 64, L = p.length / 536870912 | 0, C = p.length << 3, G = D < 56 ? 56 : 120, R = p.slice(p.length - D, p.length);
                    for(R.push(128), P = D + 1; P < G; P++)R.push(0);
                    return R.push(L >>> 24 & 255), R.push(L >>> 16 & 255), R.push(L >>> 8 & 255), R.push(L >>> 0 & 255), R.push(C >>> 24 & 255), R.push(C >>> 16 & 255), R.push(C >>> 8 & 255), R.push(C >>> 0 & 255), I(R), [
                        c >>> 24 & 255,
                        c >>> 16 & 255,
                        c >>> 8 & 255,
                        c >>> 0 & 255,
                        d >>> 24 & 255,
                        d >>> 16 & 255,
                        d >>> 8 & 255,
                        d >>> 0 & 255,
                        l >>> 24 & 255,
                        l >>> 16 & 255,
                        l >>> 8 & 255,
                        l >>> 0 & 255,
                        g >>> 24 & 255,
                        g >>> 16 & 255,
                        g >>> 8 & 255,
                        g >>> 0 & 255,
                        h >>> 24 & 255,
                        h >>> 16 & 255,
                        h >>> 8 & 255,
                        h >>> 0 & 255,
                        A >>> 24 & 255,
                        A >>> 16 & 255,
                        A >>> 8 & 255,
                        A >>> 0 & 255,
                        S >>> 24 & 255,
                        S >>> 16 & 255,
                        S >>> 8 & 255,
                        S >>> 0 & 255,
                        b >>> 24 & 255,
                        b >>> 16 & 255,
                        b >>> 8 & 255,
                        b >>> 0 & 255
                    ];
                }
                function s(p, n, c) {
                    p = p.length <= 64 ? p : y(p);
                    const d = 64 + n.length + 4, l = new Array(d), g = new Array(64);
                    let h, A = [];
                    for(h = 0; h < 64; h++)l[h] = 54;
                    for(h = 0; h < p.length; h++)l[h] ^= p[h];
                    for(h = 0; h < n.length; h++)l[64 + h] = n[h];
                    for(h = d - 4; h < d; h++)l[h] = 0;
                    for(h = 0; h < 64; h++)g[h] = 92;
                    for(h = 0; h < p.length; h++)g[h] ^= p[h];
                    function S() {
                        for(let b = d - 1; b >= d - 4; b--){
                            if (l[b]++, l[b] <= 255) return;
                            l[b] = 0;
                        }
                    }
                    for(; c >= 32;)S(), A = A.concat(y(g.concat(y(l)))), c -= 32;
                    return c > 0 && (S(), A = A.concat(y(g.concat(y(l))).slice(0, c))), A;
                }
                function a(p, n, c, d, l) {
                    let g;
                    for(u(p, (2 * c - 1) * 16, l, 0, 16), g = 0; g < 2 * c; g++)w(p, g * 16, l, 16), f(l, d), u(l, 0, p, n + g * 16, 16);
                    for(g = 0; g < c; g++)u(p, n + g * 2 * 16, p, g * 16, 16);
                    for(g = 0; g < c; g++)u(p, n + (g * 2 + 1) * 16, p, (g + c) * 16, 16);
                }
                function i(p, n) {
                    return p << n | p >>> 32 - n;
                }
                function f(p, n) {
                    u(p, 0, n, 0, 16);
                    for(let c = 8; c > 0; c -= 2)n[4] ^= i(n[0] + n[12], 7), n[8] ^= i(n[4] + n[0], 9), n[12] ^= i(n[8] + n[4], 13), n[0] ^= i(n[12] + n[8], 18), n[9] ^= i(n[5] + n[1], 7), n[13] ^= i(n[9] + n[5], 9), n[1] ^= i(n[13] + n[9], 13), n[5] ^= i(n[1] + n[13], 18), n[14] ^= i(n[10] + n[6], 7), n[2] ^= i(n[14] + n[10], 9), n[6] ^= i(n[2] + n[14], 13), n[10] ^= i(n[6] + n[2], 18), n[3] ^= i(n[15] + n[11], 7), n[7] ^= i(n[3] + n[15], 9), n[11] ^= i(n[7] + n[3], 13), n[15] ^= i(n[11] + n[7], 18), n[1] ^= i(n[0] + n[3], 7), n[2] ^= i(n[1] + n[0], 9), n[3] ^= i(n[2] + n[1], 13), n[0] ^= i(n[3] + n[2], 18), n[6] ^= i(n[5] + n[4], 7), n[7] ^= i(n[6] + n[5], 9), n[4] ^= i(n[7] + n[6], 13), n[5] ^= i(n[4] + n[7], 18), n[11] ^= i(n[10] + n[9], 7), n[8] ^= i(n[11] + n[10], 9), n[9] ^= i(n[8] + n[11], 13), n[10] ^= i(n[9] + n[8], 18), n[12] ^= i(n[15] + n[14], 7), n[13] ^= i(n[12] + n[15], 9), n[14] ^= i(n[13] + n[12], 13), n[15] ^= i(n[14] + n[13], 18);
                    for(let c = 0; c < 16; ++c)p[c] += n[c];
                }
                function w(p, n, c, d) {
                    for(let l = 0; l < d; l++)c[l] ^= p[n + l];
                }
                function u(p, n, c, d, l) {
                    for(; l--;)c[d++] = p[n++];
                }
                function _(p) {
                    if (!p || typeof p.length != "number") return !1;
                    for(let n = 0; n < p.length; n++){
                        const c = p[n];
                        if (typeof c != "number" || c % 1 || c < 0 || c >= 256) return !1;
                    }
                    return !0;
                }
                function m(p, n) {
                    if (typeof p != "number" || p % 1) throw new Error("invalid " + n);
                    return p;
                }
                function E(p, n, c, d, l, g, h) {
                    if (c = m(c, "N"), d = m(d, "r"), l = m(l, "p"), g = m(g, "dkLen"), c === 0 || (c & c - 1) !== 0) throw new Error("N must be power of 2");
                    if (c > 2147483647 / 128 / d) throw new Error("N too large");
                    if (d > 2147483647 / 128 / l) throw new Error("r too large");
                    if (!_(p)) throw new Error("password must be an array or buffer");
                    if (p = Array.prototype.slice.call(p), !_(n)) throw new Error("salt must be an array or buffer");
                    n = Array.prototype.slice.call(n);
                    let A = s(p, n, l * 128 * d);
                    const S = new Uint32Array(l * 32 * d);
                    for(let v = 0; v < S.length; v++){
                        const V = v * 4;
                        S[v] = (A[V + 3] & 255) << 24 | (A[V + 2] & 255) << 16 | (A[V + 1] & 255) << 8 | (A[V + 0] & 255) << 0;
                    }
                    const b = new Uint32Array(64 * d), O = new Uint32Array(32 * d * c), I = 32 * d, P = new Uint32Array(16), D = new Uint32Array(16), L = l * c * 2;
                    let C = 0, G = null, R = !1, H = 0, Q = 0, k, M;
                    const W = h ? parseInt(1e3 / d) : 4294967295, z = typeof setImmediate < "u" ? setImmediate : setTimeout, j = function() {
                        if (R) return h(new Error("cancelled"), C / L);
                        let v;
                        switch(H){
                            case 0:
                                M = Q * 32 * d, u(S, M, b, 0, I), H = 1, k = 0;
                            case 1:
                                v = c - k, v > W && (v = W);
                                for(let F = 0; F < v; F++)u(b, 0, O, (k + F) * I, I), a(b, I, d, P, D);
                                if (k += v, C += v, h) {
                                    const F = parseInt(1e3 * C / L);
                                    if (F !== G) {
                                        if (R = h(null, C / L), R) break;
                                        G = F;
                                    }
                                }
                                if (k < c) break;
                                k = 0, H = 2;
                            case 2:
                                v = c - k, v > W && (v = W);
                                for(let F = 0; F < v; F++){
                                    const q = (2 * d - 1) * 16, B = b[q] & c - 1;
                                    w(O, B * I, b, I), a(b, I, d, P, D);
                                }
                                if (k += v, C += v, h) {
                                    const F = parseInt(1e3 * C / L);
                                    if (F !== G) {
                                        if (R = h(null, C / L), R) break;
                                        G = F;
                                    }
                                }
                                if (k < c) break;
                                if (u(b, 0, S, M, I), Q++, Q < l) {
                                    H = 0;
                                    break;
                                }
                                A = [];
                                for(let F = 0; F < S.length; F++)A.push(S[F] >> 0 & 255), A.push(S[F] >> 8 & 255), A.push(S[F] >> 16 & 255), A.push(S[F] >> 24 & 255);
                                const V = s(p, A, g);
                                return h && h(null, 1, V), V;
                        }
                        h && z(j);
                    };
                    if (!h) for(;;){
                        const v = j();
                        if (v != null) return v;
                    }
                    j();
                }
                const T = {
                    scrypt: function(p, n, c, d, l, g, h) {
                        return new Promise(function(A, S) {
                            let b = 0;
                            h && h(0), E(p, n, c, d, l, g, function(O, I, P) {
                                if (O) S(O);
                                else if (P) h && b !== 1 && h(1), A(new Uint8Array(P));
                                else if (h && I !== b) return b = I, h(I);
                            });
                        });
                    },
                    syncScrypt: function(p, n, c, d, l, g) {
                        return new Uint8Array(E(p, n, c, d, l, g));
                    }
                };
                r.exports = T;
            })();
        })(se)), se.exports;
    }
    var Ne = De();
    const Re = {
        async decryptDatabase (r, o) {
            const t = r.header.slots;
            if (!t || !t.length) throw new Error("Aegis: 找不到密钥槽");
            const e = r.db, y = r.header.params;
            let s = null;
            const a = new TextEncoder().encode(o);
            for (const m of t)if (m.type === 1) {
                const E = Y(m.salt), T = await Ne.scrypt(a, E, m.n, m.r, m.p, 32), p = Y(m.key), n = Y(m.key_params.nonce), c = Y(m.key_params.tag), d = new Uint8Array(p.length + c.length);
                d.set(p), d.set(c, p.length);
                try {
                    const l = await window.crypto.subtle.importKey("raw", T, {
                        name: "AES-GCM"
                    }, !1, [
                        "decrypt"
                    ]), g = await window.crypto.subtle.decrypt({
                        name: "AES-GCM",
                        iv: n
                    }, l, d);
                    s = new Uint8Array(g);
                    break;
                } catch  {
                    continue;
                }
            }
            if (!s) throw new Error("Aegis: 密码错误或不支持的加密格式 (缺少 Scrypt)");
            const i = Le(e), f = Y(y.nonce), w = Y(y.tag), u = new Uint8Array(i.length + w.length);
            u.set(i), u.set(w, i.length);
            const _ = await window.crypto.subtle.importKey("raw", s, {
                name: "AES-GCM"
            }, !1, [
                "decrypt"
            ]);
            try {
                const m = await window.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: f
                }, _, u);
                return JSON.parse(new TextDecoder().decode(m));
            } catch  {
                throw new Error("Aegis: 数据库载荷解密失败");
            }
        }
    }, ye = {
        name: "Proton Authenticator (.json)",
        fileType: "application/json, text/plain",
        async parse (r, o) {
            let t;
            try {
                t = JSON.parse(r);
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            if (t.version !== 1 || !t.salt || !t.content) throw new Error("INVALID_FORMAT_OR_PASSWORD");
            if (!o) throw new Error("PASSWORD_REQUIRED");
            try {
                const e = atob(t.salt), y = new Uint8Array(e.length);
                for(let n = 0; n < e.length; n++)y[n] = e.charCodeAt(n);
                const s = atob(t.content), a = new Uint8Array(s.length);
                for(let n = 0; n < s.length; n++)a[n] = s.charCodeAt(n);
                const i = a.slice(0, 12), f = a.slice(12), u = (await pe.hash({
                    pass: o,
                    salt: y,
                    time: 2,
                    mem: 19 * 1024,
                    hashLen: 32,
                    parallelism: 1,
                    type: pe.ArgonType.Argon2id,
                    distPath: "/"
                })).hash, _ = await window.crypto.subtle.importKey("raw", u, {
                    name: "AES-GCM"
                }, !1, [
                    "decrypt"
                ]), m = new TextEncoder().encode("proton.authenticator.export.v1"), E = await window.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: i,
                    additionalData: m,
                    tagLength: 128
                }, _, f), T = new TextDecoder().decode(E), p = JSON.parse(T);
                return this.parsePlaintext(p);
            } catch (e) {
                throw N.error("Proton Authenticator decryption failed:", e), new Error("INVALID_FORMAT_OR_PASSWORD");
            }
        },
        parsePlaintext (r) {
            const t = (typeof r == "string" ? JSON.parse(r) : r).entries || [], e = [];
            for (const y of t)if (y.content && y.content.uri) {
                const s = K(y.content.uri);
                s && (y.content.name && (s.account = y.content.name), (!s.service || s.service === "Unknown") && (s.service = y.content.entry_type || "Unknown"), e.push(s));
            }
            return e;
        }
    }, Ue = {
        name: "Proton Pass (.pgp)",
        fileType: "text/plain",
        async parse (r, o) {
            try {
                const t = await ge("openpgp"), e = t?.default || t, y = await e.readMessage({
                    armoredMessage: r
                }), { data: s } = await e.decrypt({
                    message: y,
                    passwords: [
                        o
                    ],
                    format: "utf8"
                }), a = JSON.parse(s), i = [], f = a.vaults || {};
                for(const w in f){
                    const _ = f[w].items || [];
                    for (const m of _){
                        const E = m.data || {}, T = E.content || {}, p = E.metadata || {};
                        if (T.totpUri) {
                            const n = K(T.totpUri);
                            n && (p.name && (n.service = p.name), T.itemUsername && (n.account = T.itemUsername), i.push(n));
                        }
                    }
                }
                return i;
            } catch (t) {
                throw N.error("Proton Pass PGP decryption failed:", t), new Error("INVALID_FORMAT_OR_PASSWORD");
            }
        }
    }, Ce = {
        isEnteEncrypted (r) {
            return r && typeof r.kdfParams == "object" && typeof r.encryptedData == "string" && typeof r.encryptionNonce == "string";
        },
        async decryptAndParse (r, o) {
            let t;
            try {
                t = typeof r == "string" ? JSON.parse(r) : r;
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            if (!this.isEnteEncrypted(t)) throw new Error("INVALID_FORMAT_OR_PASSWORD");
            if (!o) throw new Error("PASSWORD_REQUIRED");
            const e = oe(t.kdfParams.salt), y = oe(t.encryptionNonce), s = oe(t.encryptedData), { opsLimit: a, memLimit: i } = t.kdfParams, f = Math.floor(i / 1024);
            let w;
            try {
                w = await Ae({
                    password: o,
                    salt: e,
                    parallelism: 1,
                    iterations: a,
                    memorySize: f,
                    hashLength: 32,
                    outputType: "binary"
                });
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            let u;
            try {
                const T = await Me(), p = T.crypto_secretstream_xchacha20poly1305_init_pull(y, w), n = T.crypto_secretstream_xchacha20poly1305_pull(p, s);
                if (!n || !n.message) throw new Error("no result");
                u = n.message;
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            const m = new TextDecoder().decode(u).split(`
`), E = [];
            for (const T of m){
                const p = T.trim();
                if (!p.startsWith("otpauth://")) continue;
                const n = K(p);
                n && n.secret && E.push(n);
            }
            return E;
        }
    };
    function oe(r) {
        const o = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(r.length / 4) * 4, "="), t = atob(o), e = new Uint8Array(t.length);
        for(let y = 0; y < t.length; y++)e[y] = t.charCodeAt(y);
        return e;
    }
    let ne = null;
    async function Me() {
        if (ne) return ne;
        const r = await ge("libsodium"), o = r?.default || r;
        return await o.ready, ne = o, ne;
    }
    class x extends Error {
        constructor(o, t = "MIGRATION_ERROR", e = null){
            super(o), this.name = "migrationError", this.code = t, this.details = e;
        }
    }
    class Be extends be {
        name = "memory";
        mapNameToFile = new Map;
        mapIdToFile = new Map;
        constructor(){
            super();
        }
        close() {
            for (const o of this.mapIdToFile.keys())this.xClose(o);
        }
        xOpen(o, t, e, y) {
            o = o || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
            let s = this.mapNameToFile.get(o);
            if (!s) if (e & ie) s = {
                name: o,
                flags: e,
                size: 0,
                data: new ArrayBuffer(0)
            }, this.mapNameToFile.set(o, s);
            else return Ee;
            return this.mapIdToFile.set(t, s), y.setInt32(0, e, !0), J;
        }
        xClose(o) {
            const t = this.mapIdToFile.get(o);
            return t && (this.mapIdToFile.delete(o), t.flags & xe && this.mapNameToFile.delete(t.name)), J;
        }
        xRead(o, t, e) {
            const y = this.mapIdToFile.get(o), s = Math.min(e, y.size), i = Math.min(e + t.byteLength, y.size) - s;
            return i && t.set(new Uint8Array(y.data, s, i)), i < t.byteLength ? (t.fill(0, i), Te) : J;
        }
        xWrite(o, t, e) {
            const y = this.mapIdToFile.get(o);
            if (e + t.byteLength > y.data.byteLength) {
                const s = Math.max(e + t.byteLength, 2 * y.data.byteLength), a = new ArrayBuffer(s);
                new Uint8Array(a).set(new Uint8Array(y.data, 0, y.size)), y.data = a;
            }
            return new Uint8Array(y.data, e, t.byteLength).set(t), y.size = Math.max(y.size, e + t.byteLength), J;
        }
        xTruncate(o, t) {
            const e = this.mapIdToFile.get(o);
            return e.size = Math.min(e.size, t), J;
        }
        xFileSize(o, t) {
            const e = this.mapIdToFile.get(o);
            return t.setBigInt64(0, BigInt(e.size), !0), J;
        }
        xDelete(o, t) {
            return this.mapNameToFile.delete(o), J;
        }
        xAccess(o, t, e) {
            const y = this.mapNameToFile.get(o);
            return e.setInt32(0, y ? 1 : 0, !0), J;
        }
    }
    class ke extends Be {
        name = "memory-async";
        constructor(){
            super();
        }
        async close() {
            for (const o of this.mapIdToFile.keys())await this.xClose(o);
        }
        xOpen(o, t, e, y) {
            return this.handleAsync(async ()=>super.xOpen(o, t, e, y));
        }
        xClose(o) {
            return this.handleAsync(async ()=>super.xClose(o));
        }
        xRead(o, t, e) {
            return this.handleAsync(async ()=>super.xRead(o, t, e));
        }
        xWrite(o, t, e) {
            return this.handleAsync(async ()=>super.xWrite(o, t, e));
        }
        xTruncate(o, t) {
            return this.handleAsync(async ()=>super.xTruncate(o, t));
        }
        xFileSize(o, t) {
            return this.handleAsync(async ()=>super.xFileSize(o, t));
        }
        xDelete(o, t) {
            return this.handleAsync(async ()=>super.xDelete(o, t));
        }
        xAccess(o, t, e) {
            return this.handleAsync(async ()=>super.xAccess(o, t, e));
        }
    }
    let $;
    $ = {
        SALT_LEN: 32,
        IV_LEN: 12,
        ITERATIONS: 1e4,
        ALGORITHM: "aes-256-gcm",
        KDF: "PBKDF2"
    };
    Ze = {
        detectFileType (r, o) {
            if (r instanceof ArrayBuffer || r instanceof Uint8Array) {
                const e = r instanceof Uint8Array ? r : new Uint8Array(r), y = "SQLite format 3";
                let s = !0;
                for(let a = 0; a < y.length && a < e.length; a++)if (e[a] !== y.charCodeAt(a)) {
                    s = !1;
                    break;
                }
                if (s) return "phonefactor";
                try {
                    const a = new TextDecoder("utf-8", {
                        fatal: !1
                    }).decode(e);
                    if (a.includes("accounts") && (a.includes("oath_secret_key") || a.includes("encrypted_oath_secret_key"))) return "phonefactor";
                } catch  {}
            }
            if (o && o.toLowerCase().includes("phonefactor")) return "phonefactor";
            let t = r;
            if (r instanceof ArrayBuffer || r instanceof Uint8Array) try {
                const e = r instanceof Uint8Array ? r : new Uint8Array(r);
                t = new TextDecoder("utf-8", {
                    fatal: !1
                }).decode(e);
            } catch  {
                t = "";
            }
            if (o && o.toLowerCase().endsWith(".csv")) {
                const e = typeof t == "string" ? t.split(`
`)[0].toLowerCase() : "";
                return e.includes("login_totp") ? "bitwarden_pass_csv" : e.includes("title") && e.includes("otpauth") ? "1password_csv" : e.includes("otpauth") ? "bitwarden_auth_csv" : e.includes("totp") && e.includes("vault") && e.includes("createtime") ? "proton_pass_csv" : e.includes("otpurl") && e.includes("title") && e.includes("username") ? "dashlane_csv" : "generic_csv";
            }
            if (typeof t == "string" && t.trim().startsWith("otpauth://")) return "generic_text";
            if (typeof t == "string") {
                const e = te(t);
                if (e) {
                    if (Array.isArray(e.items) && Array.isArray(e.folders)) return "bitwarden_pass_json";
                    if (Array.isArray(e.items) && (e.encrypted === !1 || !("encrypted" in e))) return "bitwarden_auth_json";
                    if (e.encrypted === !0 && e.app === "nodeauth") return "nodeauth_encrypted";
                    if (e.version === 1 && Array.isArray(e.accounts) && (e.accounts.length === 0 || e.accounts[0].issuerName)) return "lastpass_auth_json";
                    if (e.app === "nodeauth" || Array.isArray(e.accounts) || Array.isArray(e.vault) || Array.isArray(e.secrets)) return "nodeauth_json";
                    if (e.schemaVersion && e.servicesEncrypted && typeof e.servicesEncrypted == "string") return "2fas_encrypted";
                    if (e.schemaVersion && Array.isArray(e.services)) return "2fas";
                    if (e.version === 1 && e.db && typeof e.db == "object" && Array.isArray(e.db.entries)) return "aegis";
                    if (e.version === 1 && e.entries && Array.isArray(e.entries)) return "proton_auth";
                    if (e.version === 1 && e.header && e.db && typeof e.db == "string") return "aegis_encrypted";
                    if (e.version === 1 && typeof e.salt == "string" && typeof e.content == "string") return "proton_auth_encrypted";
                    if (e.kdfParams && typeof e.encryptedData == "string") return "ente_encrypted";
                    if (e.encrypted === !0 && e.passwordProtected === !0 && e.encKeyValidation_DO_NOT_EDIT) return "bitwarden_pass_encrypted";
                    if (e.shared_secret && (e.account_name || e.SteamID)) return "steam_mafile";
                }
            }
            if (typeof t == "string" && t.includes("-----BEGIN PGP MESSAGE-----")) return "proton_pass_pgp";
            if (o) {
                const e = o.toLowerCase();
                if (e.endsWith(".2fas")) return "2fas";
                if (e.endsWith(".txt")) return "generic_text";
                if (e.endsWith(".mafile")) return "steam_mafile";
                if (e.endsWith(".1pux")) return "1password_pux";
            }
            return "unknown";
        },
        async fetchAllVault () {
            const r = await le.getVault({
                limit: 9999
            });
            if (!r.success) throw new x("无法获取账号数据", "VAULT_FETCH_FAILED");
            return r.vault || [];
        },
        async exportData (r, o, t, e = "generic") {
            const s = {
                version: "2.0",
                app: "nodeauth",
                timestamp: new Date().toISOString()
            }, a = fe[o];
            if (a && Array.isArray(r)) {
                const i = r.length;
                r = r.filter((f)=>{
                    const w = (f.type || "totp").toLowerCase();
                    return a.includes(w);
                }), r.length < i && N.info(`Export format "${o}" filtered out ${i - r.length} incompatible accounts.`);
            }
            if (o === "nodeauth_encrypted" || o === "encrypted") {
                if (!t) throw new x("加密导出需要密码", "MISSING_PASSWORD");
                const i = {
                    ...s,
                    accounts: r
                }, f = await we(i, t);
                return JSON.stringify({
                    ...s,
                    encrypted: !0,
                    data: f,
                    note: "This file is encrypted with your export password (AES-GCM-256 + PBKDF2)."
                }, null, 2);
            }
            if (o === "generic_json") {
                const i = r.map((f)=>({
                        issuer: f.service || "Unknown",
                        account: f.account || "",
                        secret: f.secret,
                        type: f.type?.toUpperCase() || "TOTP",
                        digits: f.digits || 6,
                        period: f.period || 30,
                        algorithm: f.algorithm || "SHA1",
                        counter: f.counter || 0,
                        category: f.category || ""
                    }));
                return JSON.stringify({
                    version: "1.1",
                    exportDate: new Date().toISOString(),
                    count: i.length,
                    secrets: i
                }, null, 2);
            }
            if (o === "nodeauth_json") return JSON.stringify({
                ...s,
                encrypted: !1,
                accounts: r
            }, null, 2);
            if (o === "2fas") {
                const i = r.map((f, w)=>{
                    const u = f.type === "steam";
                    return {
                        name: f.service,
                        secret: f.secret,
                        otp: {
                            source: "manual",
                            account: f.account || "",
                            digits: u ? 5 : f.digits || 6,
                            period: f.period || 30,
                            algorithm: f.algorithm || "SHA1",
                            tokenType: u ? "STEAM" : f.type?.toUpperCase() || "TOTP",
                            counter: f.counter || 0
                        },
                        order: {
                            position: w
                        },
                        badge: {
                            color: "Default"
                        },
                        updatedAt: Date.now(),
                        icon: {
                            selected: "Label",
                            label: {
                                text: (f.service || "?").slice(0, 2).toUpperCase(),
                                backgroundColor: "Default"
                            },
                            iconCollection: {
                                id: "A5B3FB65-4EC5-43E6-8EC1-49E24CA9E7AD"
                            }
                        }
                    };
                });
                return JSON.stringify({
                    schemaVersion: 4,
                    appVersionCode: 50316,
                    appVersionName: "5.3.16",
                    appOrigin: "ios",
                    groups: [],
                    services: i
                });
            }
            if (o === "aegis") {
                const i = new Map;
                r.forEach((u)=>{
                    u.category && !i.has(u.category) && i.set(u.category, crypto.randomUUID());
                });
                const f = Array.from(i.entries()).map(([u, _])=>({
                        name: u,
                        uuid: _
                    })), w = r.map((u)=>{
                    const _ = [];
                    u.category && i.has(u.category) && _.push(i.get(u.category));
                    const m = (u.type || "totp").toLowerCase(), E = m === "steam", p = E || m === "blizzard" ? "totp" : m, n = {
                        secret: u.secret,
                        algo: u.algorithm || "SHA1",
                        digits: E ? 5 : u.digits || 6
                    };
                    return m === "hotp" ? n.counter = u.counter || 0 : n.period = u.period || 30, {
                        type: p,
                        uuid: crypto.randomUUID(),
                        name: u.account || u.service,
                        issuer: u.service,
                        info: n,
                        groups: _
                    };
                });
                return JSON.stringify({
                    version: 1,
                    header: {
                        slots: null,
                        params: null
                    },
                    db: {
                        version: 3,
                        entries: w,
                        groups: f,
                        icons_optimized: !0
                    }
                }, null, 2);
            }
            if (o === "proton_auth") {
                const i = {
                    version: 1,
                    entries: r.map((f)=>{
                        const w = f.type === "steam", u = w ? `steam://${f.secret}` : ee(f);
                        return {
                            id: crypto.randomUUID(),
                            content: {
                                uri: u,
                                entry_type: w ? "Steam" : "Totp",
                                name: f.account || f.service
                            },
                            note: f.category || null
                        };
                    })
                };
                return JSON.stringify(i, null, 2);
            }
            if (o === "generic_text") return r.map((i)=>ee(i)).join(`
`);
            if (o === "bitwarden_auth_csv") {
                let i = `name,secret,totp,favorite,folder
`;
                return r.forEach((f)=>{
                    const w = `"${f.service}${f.account ? ":" + f.account : ""}"`, u = f.type === "steam" ? `steam://${f.secret}` : ee(f);
                    i += `${w},${f.secret},"${u}",0,
`;
                }), i;
            }
            if (o === "generic_csv") {
                let i = `name,issuer,secret,algorithm,digits,period,type,counter,category
`;
                return r.forEach((f)=>{
                    const w = f.account || "", u = f.service || "", _ = f.type?.toUpperCase() || "TOTP", m = f.category || "";
                    i += `"${w}","${u}",${f.secret},${f.algorithm || "SHA1"},${f.digits || 6},${f.period || 30},${_},${f.counter || 0},"${m}"
`;
                }), i;
            }
            if (o === "bitwarden_auth_json") {
                const i = r.map((f)=>{
                    const w = f.type === "steam" ? `steam://${f.secret}` : ee(f);
                    return {
                        favorite: !1,
                        id: crypto.randomUUID().toUpperCase(),
                        login: {
                            totp: w,
                            username: f.account || ""
                        },
                        name: f.service,
                        type: 1
                    };
                });
                return JSON.stringify({
                    encrypted: !1,
                    items: i
                });
            }
            throw new x("未知的导出类型: " + o, "UNKNOWN_EXPORT_TYPE");
        },
        async exportAsGaMigration (r) {
            if (!r || r.length === 0) throw new x("没有账户可以迁移", "EMPTY_VAULT");
            const o = fe.google_auth || [
                "totp",
                "hotp"
            ];
            if (r = r.filter((u)=>o.includes((u.type || "totp").toLowerCase())), r.length === 0) throw new x("所选账号的类型 Google Authenticator 均不支持", "EMPTY_VAULT");
            const t = 10, e = [];
            for(let u = 0; u < r.length; u += t)e.push(r.slice(u, u + t));
            const y = Math.floor(Math.random() * 2147483647), s = await ce(()=>import("./qr-utils-ZD31REeY.js").then((u)=>u.b), __vite__mapDeps([0,1,2,3])), a = [];
            function i(u, _) {
                for(; u >= 128;)_.push(u & 127 | 128), u >>>= 7;
                _.push(u);
            }
            function f(u, _) {
                const m = new TextEncoder().encode(u);
                i(m.length, _);
                for(let E = 0; E < m.length; E++)_.push(m[E]);
            }
            function w(u, _) {
                i(u.length, _);
                for(let m = 0; m < u.length; m++)_.push(u[m]);
            }
            for(let u = 0; u < e.length; u++){
                const _ = e[u], m = [];
                m.push(16), i(1, m), m.push(24), i(e.length, m), m.push(32), i(u, m), m.push(40), i(y, m);
                for (const n of _){
                    const c = [], d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", l = n.secret.toUpperCase().replace(/=+$/, "").replace(/[^A-Z2-7]/g, ""), g = [];
                    let h = 0, A = 0;
                    for(let P = 0; P < l.length; P++){
                        const D = d.indexOf(l[P]);
                        D !== -1 && (A = A << 5 | D, h += 5, h >= 8 && (g.push(A >>> h - 8 & 255), h -= 8));
                    }
                    g.length > 0 && (c.push(10), w(g, c));
                    const S = n.account || n.service;
                    S && (c.push(18), f(S, c)), n.service && (c.push(26), f(n.service, c));
                    let b = 1;
                    n.algorithm === "SHA256" ? b = 2 : n.algorithm === "SHA512" && (b = 3), c.push(32), i(b, c);
                    let O = 1;
                    n.digits === 8 && (O = 2), c.push(40), i(O, c);
                    let I = 2;
                    n.type === "hotp" && (I = 1), c.push(48), i(I, c), n.type === "hotp" && (c.push(56), i(n.counter || 0, c)), m.push(10), i(c.length, m);
                    for(let P = 0; P < c.length; P++)m.push(c[P]);
                }
                let E = "";
                for(let n = 0; n < m.length; n++)E += String.fromCharCode(m[n]);
                const T = `otpauth-migration://offline?data=${encodeURIComponent(btoa(E))}`, p = await s.toDataURL(T, {
                    errorCorrectionLevel: "M",
                    width: 480,
                    margin: 2
                });
                a.push(p);
            }
            return a;
        },
        async exportAsHtml (r) {
            const o = await ce(()=>import("./qr-utils-ZD31REeY.js").then((e)=>e.b), __vite__mapDeps([0,1,2,3])), t = [];
            t.push(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>NodeAuth 备份报告</title>
        <style>
          body { font-family: -apple-system, system-ui, sans-serif; padding: 20px; color: #333; max-width: 1000px; margin: 0 auto; line-height: 1.5; }
          .header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #eaeaea; padding-bottom: 20px; }
          .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
          .card { border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; background: white; page-break-inside: avoid; }
          .qr-img { width: 160px; height: 160px; margin: 10px 0; border: 1px solid #eee; }
          .service { font-weight: bold; font-size: 1.1em; color: #1a73e8; margin-bottom: 5px; word-break: break-all; }
          .account { color: #555; font-size: 0.9em; margin-bottom: 15px; word-break: break-all; }
          .code { font-family: monospace; background: #f5f5f5; padding: 5px 10px; border-radius: 4px; font-size: 1.2em; letter-spacing: 2px; }
          .footer { text-align: center; margin-top: 50px; color: #888; font-size: 0.9em; page-break-before: auto; }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
            .card { box-shadow: none; border: 1px solid #999; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>NodeAuth 二步验证账户备份</h1>
          <p>生成时间：${new Date().toLocaleString()}</p>
          <p class="no-print" style="color: #d93025; font-weight: bold;">⚠️ 警告：此页面包含敏感信息，请妥善保管。请使用浏览器打印功能将其保存为 PDF 或打印成纸质备份。</p>
          <button class="no-print" onclick="window.print()" style="padding: 10px 20px; background: #1a73e8; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">打印 / 导出 PDF</button>
        </div>
        <div class="grid">
    `);
            for (const e of r){
                const y = ee(e);
                try {
                    const s = await o.toDataURL(y, {
                        errorCorrectionLevel: "M",
                        margin: 2
                    });
                    t.push(`
          <div class="card">
            <div class="service">${e.service}</div>
            <div class="account">${e.account || "-"}</div>
            <img class="qr-img" src="${s}" alt="QR Code">
            <div class="code">${e.secret.replace(/(.{4})/g, "$1 ").trim()}</div>
            <div style="font-size: 0.8em; color: #888; margin-top: 8px;">
              <span style="display: inline-block; background: #f0f4f8; color: #5a6b7d; padding: 2px 8px; border-radius: 12px; font-weight: 600; font-size: 0.85em; margin-right: 8px; border: 1px solid #d1d9e0;">${(e.type || "totp").toUpperCase()}</span>
              ${e.algorithm || "SHA1"} / ${e.digits}位 / ${e.period}s
            </div>
          </div>
        `);
                } catch  {}
            }
            return t.push(`
        </div>
        <div class="footer"><p>This report was securely generated in the browser for backup purposes.</p></div>
      </body>
      </html>
    `), t.join(`
`);
        },
        async decrypt2FasEncrypted (r, o) {
            try {
                const t = o.servicesEncrypted;
                if (!t || typeof t != "string") throw new x("无效的 2FAS 加密数据：找不到 servicesEncrypted 字段", "INVALID_2FAS_ENCRYPTED");
                const e = t.split(":");
                if (e.length < 3) throw new x("无效的 2FAS 加密格式：应为 salt:iv:ciphertext", "INVALID_2FAS_FORMAT");
                const s = [
                    e[0],
                    e[1],
                    e.slice(2).join(":")
                ].map((l)=>Uint8Array.from(atob(l.replace(/\s+/g, "")), (g)=>g.charCodeAt(0))), a = (l)=>{
                    const g = l.reduce((S, b)=>S + b.length, 0), h = new Uint8Array(g);
                    let A = 0;
                    for (const S of l)h.set(S, A), A += S.length;
                    return h;
                };
                let i, f, w;
                const u = s.findIndex((l)=>l.length === $.IV_LEN);
                if (u !== -1 && (f = s.splice(u, 1)[0], s.length > 0)) {
                    let l = 0;
                    for(let g = 1; g < s.length; g++)s[g].length < s[l].length && (l = g);
                    i = s.splice(l, 1)[0], w = s.length === 1 ? s[0] : a(s);
                }
                if (!i || !f || !w) {
                    let l = !1;
                    const g = [
                        {
                            salt: s[1],
                            iv: s[2],
                            cipher: s[0],
                            name: "bufs[1]=salt, bufs[2]=iv, bufs[0]=cipher"
                        },
                        {
                            salt: s.length > 1 && s[1].length >= 44 ? s[1].slice(0, 32) : null,
                            iv: s.length > 1 && s[1].length >= 44 ? s[1].slice(32, 44) : null,
                            cipher: s[0],
                            name: "salt/iv extracted from bufs[1]"
                        },
                        {
                            salt: s[0].slice(0, 32),
                            iv: s[0].slice(32, 44),
                            cipher: s[0].slice(44),
                            name: "salt/iv extracted from bufs[0]"
                        }
                    ];
                    for (const h of g)if (!(!h.salt || !h.iv || !h.cipher) && h.iv.length === $.IV_LEN) try {
                        const A = new TextEncoder().encode(r), S = await crypto.subtle.importKey("raw", A, {
                            name: "PBKDF2"
                        }, !1, [
                            "deriveKey"
                        ]), b = await crypto.subtle.deriveKey({
                            name: "PBKDF2",
                            salt: h.salt,
                            iterations: $.ITERATIONS,
                            hash: "SHA-256"
                        }, S, {
                            name: "AES-GCM",
                            length: 256
                        }, !1, [
                            "decrypt"
                        ]);
                        if (h.cipher.length >= 16) {
                            const O = h.cipher.slice(h.cipher.length - 16), I = h.cipher.slice(0, h.cipher.length - 16), P = await crypto.subtle.decrypt({
                                name: "AES-GCM",
                                iv: h.iv
                            }, b, new Uint8Array([
                                ...I,
                                ...O
                            ])), D = new TextDecoder().decode(P);
                            JSON.parse(D), i = h.salt, f = h.iv, w = h.cipher, l = !0, N.debug("[decrypt2FasEncrypted] permutation succeeded with:", h.name);
                            break;
                        }
                    } catch  {}
                    !l && !i && (i = s[0], f = s[1], w = s[2], i.length !== $.SALT_LEN && f.length === $.SALT_LEN && ([i, f] = [
                        f,
                        i
                    ]), f.length !== $.IV_LEN && w.length === $.IV_LEN && ([f, w] = [
                        w,
                        f
                    ]));
                }
                if (N.debug("[decrypt2FasEncrypted] chosen mapping lengths salt,iv,cipher=", i?.length, f?.length, w?.length), i.length < 16) throw new x(`salt 长度过短：${i.length}`, "INVALID_SALT_LEN");
                if (f.length !== $.IV_LEN) throw new x(`IV 长度错误：期望 ${$.IV_LEN}，实际 ${f.length}`, "INVALID_IV_LEN");
                const _ = new TextEncoder().encode(r), m = await crypto.subtle.importKey("raw", _, {
                    name: "PBKDF2"
                }, !1, [
                    "deriveKey"
                ]), E = await crypto.subtle.deriveKey({
                    name: "PBKDF2",
                    salt: i,
                    iterations: $.ITERATIONS,
                    hash: "SHA-256"
                }, m, {
                    name: "AES-GCM",
                    length: 256
                }, !1, [
                    "decrypt"
                ]);
                if (N.debug("[decrypt2FasEncrypted] key derived"), w.length < 16) throw new x("密文过短（无法包含 auth tag）", "CIPHERTEXT_TOO_SHORT");
                const T = w.slice(w.length - 16), p = w.slice(0, w.length - 16), n = await crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: f
                }, E, new Uint8Array([
                    ...p,
                    ...T
                ])), c = new TextDecoder().decode(n), d = JSON.parse(c);
                if (!Array.isArray(d)) throw new x("解密后的数据不是数组格式", "INVALID_DECRYPTED_FORMAT");
                return d;
            } catch (t) {
                throw t instanceof x ? t : new x(`2FAS 解密失败：${t.message || String(t)}`, "TWOFAS_DECRYPTION_FAILED", t);
            }
        },
        async decryptBitwardenPassEncrypted (r, o) {
            try {
                const t = o.salt, e = o.kdfIterations, y = o.kdfType;
                if (y !== 0) throw new x(`不支持的 KDF 类型: ${y}`, "UNSUPPORTED_BITWARDEN_KDF");
                const s = new TextEncoder().encode(t), a = new TextEncoder().encode(r), i = await crypto.subtle.importKey("raw", a, {
                    name: "PBKDF2"
                }, !1, [
                    "deriveBits"
                ]), f = await crypto.subtle.deriveBits({
                    name: "PBKDF2",
                    salt: s,
                    iterations: e,
                    hash: "SHA-256"
                }, i, 256), w = new Uint8Array(f), u = await this._hkdfExpandSha256(w, "enc", 32), _ = await this._hkdfExpandSha256(w, "mac", 32), m = async (p, n, c)=>{
                    const d = p.split(".");
                    if (d[0] !== "2") throw new Error("Unsupported encryption type");
                    const l = d[1].split("|"), g = Uint8Array.from(atob(l[0]), (L)=>L.charCodeAt(0)), h = Uint8Array.from(atob(l[1]), (L)=>L.charCodeAt(0)), A = Uint8Array.from(atob(l[2]), (L)=>L.charCodeAt(0)), S = await crypto.subtle.importKey("raw", c, {
                        name: "HMAC",
                        hash: "SHA-256"
                    }, !1, [
                        "sign"
                    ]), b = new Uint8Array(g.length + h.length);
                    b.set(g, 0), b.set(h, g.length);
                    const O = new Uint8Array(await crypto.subtle.sign("HMAC", S, b));
                    if (A.length !== O.length) return null;
                    let I = 0;
                    for(let L = 0; L < A.length; L++)I |= A[L] ^ O[L];
                    if (I !== 0) return null;
                    const P = await crypto.subtle.importKey("raw", n, {
                        name: "AES-CBC"
                    }, !1, [
                        "decrypt"
                    ]), D = await crypto.subtle.decrypt({
                        name: "AES-CBC",
                        iv: g
                    }, P, h);
                    return new TextDecoder().decode(D);
                };
                if (!await m(o.encKeyValidation_DO_NOT_EDIT, u, _)) throw new Error("MAC verification failed");
                const T = await m(o.data, u, _);
                return JSON.parse(T);
            } catch (t) {
                throw new x(`Bitwarden 解密失败: ${t.message}`, "BITWARDEN_DECRYPTION_FAILED", t);
            }
        },
        async _hkdfExpandSha256 (r, o, t) {
            const e = new TextEncoder().encode(o || ""), y = await crypto.subtle.importKey("raw", r, {
                name: "HMAC",
                hash: "SHA-256"
            }, !1, [
                "sign"
            ]), s = new Uint8Array(t);
            let a = new Uint8Array(0), i = 0, f = 1;
            for(; i < t;){
                const w = new Uint8Array(a.length + e.length + 1);
                w.set(a, 0), w.set(e, a.length), w[w.length - 1] = f & 255, a = new Uint8Array(await crypto.subtle.sign("HMAC", y, w));
                const u = Math.min(a.length, t - i);
                s.set(a.slice(0, u), i), i += u, f++;
            }
            return s;
        },
        bytesToBase32 (r) {
            const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
            let t = 0, e = 0, y = "";
            for(let s = 0; s < r.length; s++)for(e = e << 8 | r[s], t += 8; t >= 5;)t -= 5, y += o[e >>> t & 31];
            for(t > 0 && (y += o[e << 5 - t & 31]); y.length % 8;)y += "=";
            return y;
        },
        base64ToBase32 (r) {
            try {
                const o = atob(r.trim()), t = new Uint8Array(o.length);
                for(let e = 0; e < o.length; e++)t[e] = o.charCodeAt(e);
                return this.bytesToBase32(t);
            } catch (o) {
                throw new Error(`Base64 转 Base32 失败: ${o.message}`);
            }
        },
        async parsePhoneFactor (r) {
            console.log("[PhoneFactor] parsePhoneFactor 开始");
            let o = null, t = null, e = null, y = null;
            try {
                if (r && r.main && r.main.buffer) o = new Uint8Array(r.main.buffer), r.wal && r.wal.buffer && (t = new Uint8Array(r.wal.buffer)), r.shm && r.shm.buffer && (e = new Uint8Array(r.shm.buffer));
                else if (r instanceof ArrayBuffer || r instanceof Uint8Array) o = new Uint8Array(r);
                else throw new x("无法识别传入的 PhoneFactor 数据格式", "INVALID_PHONEFACTOR_INPUT");
                console.log("[PhoneFactor] 文件提取完成", {
                    mainBufLen: o?.byteLength,
                    walBufLen: t?.byteLength ?? 0,
                    shmBufLen: e?.byteLength ?? 0
                }), console.log("[PhoneFactor] 调用 SQLiteESMFactory...");
                const s = await ve();
                console.log("[PhoneFactor] SQLiteESMFactory 完成，创建 sqlite3...");
                const a = Ie(s);
                console.log("[PhoneFactor] sqlite3 Factory 完成"), y = new ke;
                const i = `vfs-${Date.now()}`;
                y.name = i, a.vfs_register(y), console.log("[PhoneFactor] VFS 注册完成:", i);
                const f = "PhoneFactor", w = (d, l)=>{
                    const g = l.buffer.slice(l.byteOffset, l.byteOffset + l.byteLength);
                    y.mapNameToFile.set(d, {
                        name: d,
                        flags: ie | ue | Pe,
                        size: l.byteLength,
                        data: g
                    });
                };
                w(f, o);
                const u = t && t.byteLength > 0;
                u && w(`${f}-wal`, t), e && e.byteLength > 0 && w(`${f}-shm`, e), console.log("[PhoneFactor] 注入文件到 VFS 完成", {
                    main: f,
                    hasWal: u,
                    hasShm: !!(e && e.byteLength > 0)
                }), console.log("[PhoneFactor] 调用 open_v2...");
                const _ = await a.open_v2(f, ue | ie, i);
                N.info("[PhoneFactor] open_v2 成功"), N.info("[PhoneFactor] 执行 PRAGMA locking_mode..."), await a.exec(_, "PRAGMA locking_mode = EXCLUSIVE;"), N.info("[PhoneFactor] 执行 PRAGMA journal_mode..."), await a.exec(_, "PRAGMA journal_mode = DELETE;"), N.info("[PhoneFactor] PRAGMA 完成");
                let m = !1;
                if (await a.exec(_, "SELECT name FROM sqlite_master WHERE type='table' AND name='accounts'", (d)=>{
                    m = !0;
                }), N.info(`[PhoneFactor] accounts 表存在: ${m}`), !m) throw await a.close(_), new x("不是有效的Microsoft Authenticator数据文件", "INVALID_PHONEFACTOR_FILE");
                const E = [];
                let T = 0, p = 0, n = 0;
                const c = /^[A-Z2-7]+=*$/i;
                try {
                    N.info("[PhoneFactor] 开始提取基础数据...");
                    const d = a.str_new(_, "SELECT name, username, oath_secret_key, encrypted_oath_secret_key, account_type FROM accounts");
                    let l = await a.prepare_v2(_, a.str_value(d));
                    if (l && l.stmt) {
                        const g = l.stmt;
                        N.info("[PhoneFactor] SQL 预编译成功，开始读取行...");
                        try {
                            let h = 0;
                            for(; await a.step(g) === Oe;){
                                h++, h % 5 === 0 && N.info(`[PhoneFactor] 已读取 ${h} 行...`);
                                const A = a.row(g), S = A[0], b = A[1];
                                let O = A[2];
                                const I = A[3], P = A[4];
                                if ((!S || String(S).trim() === "") && (!b || String(b).trim() === "")) {
                                    p++;
                                    continue;
                                }
                                let D = (O || "").toString().trim();
                                if (!D) {
                                    if (I && String(I).trim() !== "") {
                                        T++;
                                        continue;
                                    }
                                    p++;
                                    continue;
                                }
                                let L = "SHA1", C = 6;
                                try {
                                    if (P !== 0) if (P === 1) D = this.base64ToBase32(D), L = "SHA1", C = 8;
                                    else if (P === 2) D = D.toUpperCase(), L = "SHA256", C = 6;
                                    else {
                                        n++;
                                        continue;
                                    }
                                } catch (R) {
                                    N.warn(`Failed to convert secret for account_type=${P}: ${R.message}`), n++;
                                    continue;
                                }
                                const G = D.replace(/\s+/g, "").replace(/=+$/, "");
                                if (!c.test(G)) {
                                    if (I && String(I).trim() !== "") {
                                        T++;
                                        continue;
                                    }
                                    n++;
                                    continue;
                                }
                                E.push({
                                    service: S || "Unknown Service",
                                    account: b || "Unknown Account",
                                    secret: D,
                                    algorithm: L,
                                    digits: C,
                                    period: 30
                                });
                            }
                            N.info(`[PhoneFactor] 行读取循环结束，总共提取 ${h} 行`);
                        } finally{
                            await a.finalize(g);
                        }
                    }
                    a.str_finish(d), N.info("[PhoneFactor] 数据提取完成，关闭 DB...");
                } catch (d) {
                    throw await a.close(_), new x("解析 PhoneFactor 数据库失败", "INVALID_PHONEFACTOR_FILE", d);
                }
                await a.close(_);
                try {
                    y.mapNameToFile.clear(), y.mapIdToFile.clear();
                } catch  {}
                if (E.length === 0) throw T > 0 ? new x("PhoneFactor 文件仅包含加密的密钥，无法在前端导入", "PHONEFACTOR_ONLY_ENCRYPTED") : new x("未能从 PhoneFactor 文件中提取到可导入的 TOTP 记录", "PHONEFACTOR_NO_IMPORTABLE_ROWS");
                return E;
            } catch (s) {
                if (s instanceof x) throw N.error("parsePhoneFactor migrationError:", s), s;
                try {
                    const i = o && (o.byteLength || o.length) || 0;
                    N.error("parsePhoneFactor failed:", {
                        message: s && s.message,
                        stack: s && s.stack,
                        bufferLength: i,
                        error: s
                    });
                } catch (i) {
                    N.error("parsePhoneFactor failed (logging error):", i);
                }
                const a = s && s.message ? `${s.message}` : String(s);
                throw new x(`不是有效的Microsoft Authenticator数据文件: ${a}`, "INVALID_PHONEFACTOR_FILE", s);
            }
        },
        async parseImportData (r, o, t) {
            let e = [];
            if (o === "phonefactor" || o === "phonefactor_group") return await this.parsePhoneFactor(r);
            if (o === "1password_pux") return await this.parse1Pux(r);
            if (o === "steam_mafile") return await this.parseSteamMaFile(r);
            let y = r;
            if (r instanceof ArrayBuffer || r instanceof Uint8Array) try {
                const s = r instanceof Uint8Array ? r : new Uint8Array(r);
                y = new TextDecoder("utf-8", {
                    fatal: !1
                }).decode(s);
            } catch (s) {
                N.warn("Failed to decode buffer as text", s);
            }
            if (r = y, (o === "bitwarden_auth_csv" || o === "1password_csv" || o === "generic_csv") && (e = de.parseCsv(r), r = JSON.stringify(e), o = "raw"), o === "proton_auth_encrypted") {
                if (!t) throw new x("导入 Proton Authenticator 备份需要密码", "MISSING_PASSWORD");
                e = await ye.parse(r, t), o = "raw", r = JSON.stringify(e), t = void 0;
            }
            if (o === "proton_auth" && (e = ye.parsePlaintext(r), o = "raw", r = JSON.stringify(e)), o === "proton_pass_pgp") {
                if (!t) throw new x("导入 Proton Pass 备份需要密码", "MISSING_PASSWORD");
                e = await Ue.parse(r, t), o = "raw", r = JSON.stringify(e), t = void 0;
            }
            if (o === "ente_encrypted") {
                if (!t) throw new x("导入 Ente Auth 加密备份需要密码", "MISSING_PASSWORD");
                try {
                    e = await Ce.decryptAndParse(r, t), o = "raw", t = void 0;
                } catch (s) {
                    throw s.message === "INVALID_FORMAT_OR_PASSWORD" ? new x("解密失败：密码错误或文件格式不兼容", "DECRYPTION_FAILED", s) : new x(`Ente Auth 导入失败：${s.message || String(s)}`, "ENTE_IMPORT_FAILED", s);
                }
            }
            if (o === "2fas_encrypted") {
                if (!t) throw new x("导入 2FAS 加密备份需要密码", "MISSING_PASSWORD");
                try {
                    const s = typeof r == "string" ? JSON.parse(r) : r, a = await this.decrypt2FasEncrypted(t, s);
                    r = JSON.stringify({
                        services: a
                    }), o = "2fas", t = void 0;
                } catch (s) {
                    throw s instanceof x ? s : new x(`2FAS 加密备份解密失败：${s.message || String(s)}`, "TWOFAS_DECRYPTION_FAILED", s);
                }
            }
            if (o === "bitwarden_pass_encrypted") {
                if (!t) throw new x("导入 Bitwarden 加密文件需要密码", "MISSING_PASSWORD");
                try {
                    const s = typeof r == "string" ? JSON.parse(r) : r, a = await this.decryptBitwardenPassEncrypted(t, s);
                    r = JSON.stringify(a), o = "bitwarden_pass_json", t = void 0;
                } catch (s) {
                    throw s instanceof x ? s : new x(`Bitwarden 加密备份解密失败: ${s.message}`, "BITWARDEN_DECRYPTION_FAILED", s);
                }
            }
            if (o === "aegis_encrypted") {
                const s = te(r), a = await Re.decryptDatabase(s, t);
                r = JSON.stringify(a), o = "aegis", t = void 0;
            } else if (o === "aegis") {
                const s = te(r);
                r = JSON.stringify(s.db);
            }
            if (o === "nodeauth_encrypted" || o === "encrypted") {
                if (!t) throw new x("导入本系统加密文件需要密码", "MISSING_PASSWORD");
                try {
                    let s = r;
                    const a = typeof r == "string" ? te(r) : r;
                    a && typeof a == "object" && a.data && (s = a.data);
                    const i = await me(s, t);
                    e = i.vault || i.accounts || [];
                } catch (s) {
                    throw new x("解密失败：密码错误或文件格式不兼容", "DECRYPTION_FAILED", s);
                }
            } else if (o === "nodeauth_json") {
                const s = typeof r == "string" ? JSON.parse(r) : r;
                Array.isArray(s.accounts) ? e = s.accounts : Array.isArray(s.vault) ? e = s.vault : Array.isArray(s.data) ? e = s.data : s.secrets ? e = s.secrets.map((a)=>{
                    let i = a.account || a.label || "";
                    return typeof i == "string" && i.includes(":") && (i = i.split(":").pop()?.trim() || i), {
                        service: a.issuer || a.service || a.name || "Unknown",
                        account: i,
                        secret: a.secret || "",
                        type: (a.type || "TOTP").toLowerCase(),
                        algorithm: a.algorithm || "SHA1",
                        digits: a.digits || 6,
                        period: a.period || 30,
                        counter: a.counter || 0
                    };
                }) : Array.isArray(s) && (e = s);
            } else if (o === "2fas") {
                const s = typeof r == "string" ? JSON.parse(r) : r;
                Array.isArray(s.services) && (e = s.services.map((a)=>{
                    let i = a.otp?.account || a.account || a.username || "";
                    typeof i == "string" && i.includes(":") && (i = i.split(":").pop()?.trim() || i);
                    const f = (a.otp?.tokenType || a.tokenType || "").toUpperCase();
                    return {
                        service: a.otp?.issuer || a.name || "Unknown",
                        account: i,
                        secret: a.secret || "",
                        type: f,
                        algorithm: a.otp?.algorithm || a.algorithm || "SHA1",
                        digits: a.otp?.digits || a.digits || 6,
                        period: a.otp?.period || a.period || 30,
                        counter: a.otp?.counter || a.counter || 0
                    };
                }));
            } else if (o === "bitwarden_pass_json" || o === "bitwarden_auth_json") {
                const s = typeof r == "string" ? JSON.parse(r) : r;
                Array.isArray(s.items) && s.items.forEach((a)=>{
                    const i = a.login && a.login.totp || a.totp || a.uri || "";
                    if (i) {
                        let f = K(i);
                        if (f) f.service = a.name || f.service, f.account = a.login && a.login.username || a.username || f.account;
                        else {
                            const w = i.replace(/\s/g, "").toUpperCase();
                            /^[A-Z2-7]+=*$/.test(w) && (f = {
                                service: a.name || "Unknown",
                                account: a.login && a.login.username || a.username || "Unknown",
                                secret: w,
                                algorithm: "SHA1",
                                digits: 6,
                                period: 30,
                                type: "totp",
                                counter: 0,
                                category: ""
                            });
                        }
                        f && e.push(f);
                    }
                });
            } else if (o === "aegis") {
                const s = typeof r == "string" ? JSON.parse(r) : r;
                e = (s.entries || s.db && s.db.entries || []).map((i)=>{
                    const f = (i.info?.type || i.type || "").toLowerCase();
                    return {
                        service: i.issuer || i.name || "Unknown",
                        account: i.name || "",
                        secret: i.info?.secret || "",
                        type: f,
                        algorithm: i.info?.algo || "SHA1",
                        digits: i.info?.digits || 6,
                        period: i.info?.period || 30,
                        counter: i.info?.counter || 0
                    };
                });
            } else if (o === "generic_text") r.split(`
`).forEach((a)=>{
                const i = K(a.trim());
                i && e.push(i);
            });
            else if (o === "lastpass_auth_json") {
                const s = typeof r == "string" ? JSON.parse(r) : r;
                Array.isArray(s.accounts) && (e = s.accounts.map((a)=>({
                        service: a.issuerName || a.originalIssuerName || "Unknown",
                        account: a.userName || a.originalUserName || "",
                        secret: a.secret || "",
                        type: (a.type || "TOTP").toLowerCase(),
                        algorithm: a.algorithm || "SHA1",
                        digits: a.digits || 6,
                        period: a.timeStep || 30,
                        counter: a.counter || 0
                    })));
            } else (o === "bitwarden_pass_csv" || o === "bitwarden_auth_csv" || o === "1password_csv" || o === "proton_pass_csv" || o === "dashlane_csv" || o === "generic_csv") && (e = de.parseCsv(r));
            return e.map((s)=>{
                typeof s.account == "string" && s.account.includes(":") && (s.account = s.account.split(":").pop()?.trim() || s.account), (!s.account || s.account.trim() === "") && (s.account = s.service || "Unknown Account");
                const a = (s.algorithm || "SHA1").toUpperCase().replace(/-/g, "");
                s.algorithm = [
                    "SHA1",
                    "SHA256",
                    "SHA512"
                ].includes(a) ? a : "SHA1";
                const i = ae(s);
                return i.id = s.id, i;
            }).filter((s)=>s && s.secret && s.service);
        },
        async parseGaQrImageFile (r) {
            return new Promise((o, t)=>{
                const e = new Image, y = URL.createObjectURL(r);
                e.onload = ()=>{
                    URL.revokeObjectURL(y);
                    const s = document.createElement("canvas"), a = s.getContext("2d", {
                        willReadFrequently: !0
                    }), i = [
                        1,
                        1.5,
                        .5,
                        2,
                        .8
                    ];
                    let f = null;
                    for (const u of i){
                        s.width = e.width * u, s.height = e.height * u, a.imageSmoothingEnabled = !1, a.drawImage(e, 0, 0, s.width, s.height);
                        const _ = a.getImageData(0, 0, s.width, s.height);
                        if (f = Se(_.data, _.width, _.height, {
                            inversionAttempts: "attemptBoth"
                        }), f) break;
                    }
                    if (!f) return t(new x("未能识别出二维码，请确认为完整清晰的截图。", "QR_RECOGNITION_FAILED"));
                    const w = f.data;
                    if (!w.startsWith("otpauth-migration://offline?data=")) return t(new x("不是有效的 Google Authenticator 迁移二维码", "INVALID_GA_QR"));
                    try {
                        let m = new URL(w).searchParams.get("data").replace(/-/g, "+").replace(/_/g, "/");
                        for(; m.length % 4;)m += "=";
                        const E = atob(m), T = new Uint8Array(E.length);
                        for(let p = 0; p < E.length; p++)T[p] = E.charCodeAt(p);
                        o(Fe.decodePayload(T));
                    } catch (u) {
                        t(new x("解析 Google Authenticator 数据失败", "GA_DECODE_FAILED", u));
                    }
                }, e.onerror = ()=>{
                    URL.revokeObjectURL(y), t(new x("图片读取失败，文件可能已损坏", "IMAGE_LOAD_FAILED"));
                }, e.src = y;
            });
        },
        async parse1Pux (r) {
            try {
                const o = r instanceof Uint8Array ? r : new Uint8Array(r), e = _e(o)["export.data"];
                if (!e) throw new Error("未能在 .1pux 文件中找到 export.data");
                const y = new TextDecoder().decode(e), s = JSON.parse(y), a = [];
                return (s.accounts || []).forEach((f)=>{
                    (f.vaults || []).forEach((u)=>{
                        (u.items || []).forEach((m)=>{
                            const E = m.overview?.title || "Unknown", T = m.overview?.subtitle || "", p = (n)=>{
                                Array.isArray(n) && n.forEach((c)=>{
                                    c.value && typeof c.value == "object" && c.value.totp && a.push({
                                        service: E,
                                        account: T,
                                        secret: c.value.totp,
                                        algorithm: "SHA1",
                                        digits: 6,
                                        period: 30
                                    });
                                });
                            };
                            p(m.details?.loginFields), Array.isArray(m.details?.sections) && m.details.sections.forEach((n)=>p(n.fields));
                        });
                    });
                }), a;
            } catch (o) {
                throw new x("解析 1Password 备份失败: " + (o.message || String(o)), "ONEPASSWORD_PARSE_FAILED", o);
            }
        },
        async parseSteamMaFile (r) {
            const o = typeof r == "string" ? te(r) : r;
            if (!o || !o.shared_secret) throw new x("无效的 Steam maFile: 找不到 shared_secret", "INVALID_MAFILE");
            const t = this.base64ToBase32(o.shared_secret);
            let e = o.account_name || "Steam Account";
            return typeof e == "string" && e.includes(":") && (e = e.split(":").pop().trim() || e), [
                {
                    service: "Steam",
                    account: e,
                    secret: t,
                    type: "steam",
                    algorithm: "SHA1",
                    digits: 5,
                    period: 30
                }
            ];
        },
        async saveImportedVault (r) {
            return await le.importVault(r);
        }
    };
});
export { Ze as dataMigrationService, __tla };
