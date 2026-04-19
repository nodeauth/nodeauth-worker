const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qr-utils-BC7NLEos.js","assets/element-plus-Ca9klJWt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css"])))=>i.map(i=>d[i]);
import { _ as ae, __tla as __tla_0 } from "./pdf-utils-HZTV32cA.js";
import { p as K, v as ce, b as re, __tla as __tla_1 } from "./vaultService-CN5Qz0-L.js";
import { l as D, d as ge, e as ye, __tla as __tla_2 } from "./index-C63vm3Zv.js";
import { a as le } from "./argon2-browser-ICE29r9E.js";
import { l as he, __tla as __tla_3 } from "./resourceRegistry-BelDkWW9.js";
import { argon2id as me } from "./hash-wasm-Dup_VHWH.js";
import { unzipSync as we } from "./compression-utils-CXh1ITwj.js";
import { a as Ae } from "./qr-utils-BC7NLEos.js";
import { B as _e, S as oe, a as Se, b as J, c as be, d as Ee, M as ve, F as xe, e as fe, f as Te, g as Ie } from "./wa-sqlite-D0naBMh4.js";
import "./vue-core-Daban9YF.js";
import "./element-plus-Ca9klJWt.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let qe;
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
    function Y(s) {
        const i = new Uint8Array(s.length / 2);
        for(let t = 0; t < s.length; t += 2)i[t / 2] = parseInt(s.substring(t, t + 2), 16);
        return i;
    }
    function Pe(s) {
        const i = atob(s), t = new Uint8Array(i.length);
        for(let e = 0; e < i.length; e++)t[e] = i.charCodeAt(e);
        return t;
    }
    function ee(s) {
        try {
            return JSON.parse(s);
        } catch  {
            return null;
        }
    }
    const Oe = {
        decodePayload (s) {
            const i = [];
            let t = 0;
            function e() {
                let u = 0, n = 0;
                for(; t < s.length;){
                    const a = s[t++];
                    if (u |= (a & 127) << n, (a & 128) === 0) break;
                    n += 7;
                }
                return u;
            }
            for(; t < s.length;){
                const u = s[t++], n = u >> 3, a = u & 7;
                if (n === 1 && a === 2) {
                    const o = e(), y = t + o;
                    let h = null, m = "", w = "", A = "SHA1", x = 6;
                    for(; t < y;){
                        const E = s[t++], c = E >> 3, r = E & 7;
                        if (c === 1 && r === 2) {
                            const f = e(), p = s.slice(t, t + f), l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
                            let g = 0, d = 0, _ = "";
                            for(let S = 0; S < p.length; S++)for(d = d << 8 | p[S], g += 8; g >= 5;)_ += l[d >>> g - 5 & 31], g -= 5;
                            g > 0 && (_ += l[d << 5 - g & 31]), h = _, t += f;
                        } else if (c === 2 && r === 2) {
                            const f = e();
                            m = new TextDecoder().decode(s.slice(t, t + f)), t += f;
                        } else if (c === 3 && r === 2) {
                            const f = e();
                            w = new TextDecoder().decode(s.slice(t, t + f)), t += f;
                        } else if (c === 4 && r === 0) {
                            const f = e();
                            f === 2 ? A = "SHA256" : f === 3 ? A = "SHA512" : f === 4 && (A = "MD5");
                        } else if (c === 5 && r === 0) e() === 2 && (x = 8);
                        else if (c === 6 && r === 0) e();
                        else if (r === 0) e();
                        else if (r === 2) t += e();
                        else break;
                    }
                    if (h) {
                        let E = m, c = w;
                        if (!c && m.includes(":")) {
                            const r = m.split(":");
                            c = r[0].trim(), E = r[1].trim();
                        }
                        i.push({
                            service: c || "Unknown",
                            account: E || "Unknown",
                            secret: h,
                            algorithm: A,
                            digits: x,
                            period: 30,
                            category: ""
                        });
                    }
                    t = y;
                } else if (a === 0) e();
                else if (a === 2) t += e();
                else break;
            }
            return i;
        }
    }, de = {
        _splitCsvLine (s) {
            const i = [];
            let t = 0;
            for(; t <= s.length;){
                if (t === s.length) {
                    i.push("");
                    break;
                }
                if (s[t] === '"') {
                    let e = "";
                    for(t++; t < s.length;)if (s[t] === '"') if (s[t + 1] === '"') e += '"', t += 2;
                    else {
                        t++;
                        break;
                    }
                    else e += s[t++];
                    i.push(e.trim()), s[t] === "," && t++;
                } else {
                    const e = s.indexOf(",", t);
                    if (e === -1) {
                        i.push(s.slice(t).trim());
                        break;
                    }
                    i.push(s.slice(t, e).trim()), t = e + 1;
                }
            }
            return i;
        },
        parseCsv (s) {
            const i = s.split(`
`).filter((c)=>c.trim());
            if (i.length < 2) return [];
            const t = this._splitCsvLine(i[0]).map((c)=>c.toLowerCase()), e = [], u = t.includes("login_totp"), n = t.includes("otpauth") && !t.includes("title"), a = t.includes("otpauth") && t.includes("title"), o = t.includes("totp") && t.includes("vault") && t.includes("createtime"), y = t.includes("otpurl") && t.includes("title") && t.includes("username"), h = t.includes("issuer") || t.includes("secret") || t.includes("name"), m = [
                "otpauth",
                "login_totp",
                "totp",
                "mfa",
                "two_factor_code",
                "secret",
                "otpurl",
                "nodeauth",
                "authenticator"
            ], w = [
                "name",
                "title",
                "item name",
                "issuer",
                "label"
            ], A = [
                "username",
                "login",
                "login_username",
                "account",
                "email"
            ], x = (c)=>c ? c.toString().trim().replace(/[\s-]/g, "").toUpperCase() : "", E = t.some((c)=>m.includes(c));
            if (!u && !n && !a && !o && !y && !h && !E) return [];
            for(let c = 1; c < i.length; c++){
                const r = this._splitCsvLine(i[c]), f = {};
                if (t.forEach((p, l)=>{
                    f[p] = r[l] || "";
                }), a) {
                    const p = (f.otpauth || "").trim();
                    if (p && p.startsWith("otpauth://")) {
                        const l = K(p);
                        l && (l.service = f.title || l.service, l.account = f.username || l.account, e.push(l));
                    }
                } else if (u || n) {
                    const p = (f.login_totp || f.otpauth || f.totp || "").trim();
                    if (p) {
                        let l = null;
                        if (p.startsWith("otpauth://") || p.startsWith("steam://")) l = K(p);
                        else {
                            const g = x(p);
                            /^[A-Z2-7]+=*$/.test(g) && (l = {
                                service: f.name || "Unknown",
                                account: f.login_username || "Unknown",
                                secret: g,
                                algorithm: "SHA-1",
                                digits: 6,
                                period: 30,
                                category: ""
                            });
                        }
                        l && (l.service = f.name || l.service, l.account = f.login_username || l.account, e.push(l));
                    }
                } else if (o) {
                    const p = (f.totp || "").trim();
                    if (p && (p.startsWith("otpauth://") || p.startsWith("steam://"))) {
                        const l = K(p);
                        l && (l.service = f.name || l.service, l.account = f.username || l.account, l.category = f.vault || "", e.push(l));
                    }
                } else if (y) {
                    const p = (f.otpurl || "").trim();
                    if (p && (p.startsWith("otpauth://") || p.startsWith("steam://"))) {
                        const l = K(p);
                        l && (l.service = f.title || l.service, l.account = f.username || l.account, l.category = f.category || "", e.push(l));
                    }
                } else {
                    const p = t.find((g)=>m.includes(g)), l = p ? (f[p] || "").trim() : "";
                    if (l) if (l.toLowerCase().startsWith("otpauth://") || l.toLowerCase().startsWith("steam://")) {
                        const g = K(l);
                        if (g) {
                            const d = t.find((S)=>w.includes(S)), _ = t.find((S)=>A.includes(S));
                            g.service = f[d] || g.service, g.account = f[_] || g.account, e.push(g);
                        }
                    } else {
                        const g = x(l);
                        if (/^[A-Z2-7]+=*$/.test(g)) {
                            let _ = t.find((b)=>w.includes(b)), S = t.find((b)=>A.includes(b));
                            t.includes("issuer") && t.includes("name") && (_ = "issuer", S = "name"), e.push({
                                service: f[_] || "Unknown",
                                account: f[S] || "Unknown Account",
                                secret: g,
                                algorithm: (f.algorithm || "SHA1").toUpperCase().replace(/^SHA-?1$/, "SHA-1").replace(/^SHA-?256$/, "SHA-256").replace(/^SHA-?512$/, "SHA-512"),
                                digits: parseInt(f.digits || "6", 10),
                                period: parseInt(f.period || "30", 10),
                                category: ""
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
    }, ue;
    function Fe() {
        return ue || (ue = 1, (function(s, i) {
            (function(t) {
                function u(c) {
                    const r = new Uint32Array([
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
                    let f = 1779033703, p = 3144134277, l = 1013904242, g = 2773480762, d = 1359893119, _ = 2600822924, S = 528734635, b = 1541459225;
                    const I = new Uint32Array(64);
                    function P(V) {
                        let Q = 0, k = V.length;
                        for(; k >= 64;){
                            let M = f, W = p, j = l, z = g, T = d, B = _, F = S, q = b, H, U, Z, X, te;
                            for(U = 0; U < 16; U++)Z = Q + U * 4, I[U] = (V[Z] & 255) << 24 | (V[Z + 1] & 255) << 16 | (V[Z + 2] & 255) << 8 | V[Z + 3] & 255;
                            for(U = 16; U < 64; U++)H = I[U - 2], X = (H >>> 17 | H << 15) ^ (H >>> 19 | H << 13) ^ H >>> 10, H = I[U - 15], te = (H >>> 7 | H << 25) ^ (H >>> 18 | H << 14) ^ H >>> 3, I[U] = (X + I[U - 7] | 0) + (te + I[U - 16] | 0) | 0;
                            for(U = 0; U < 64; U++)X = (((T >>> 6 | T << 26) ^ (T >>> 11 | T << 21) ^ (T >>> 25 | T << 7)) + (T & B ^ ~T & F) | 0) + (q + (r[U] + I[U] | 0) | 0) | 0, te = ((M >>> 2 | M << 30) ^ (M >>> 13 | M << 19) ^ (M >>> 22 | M << 10)) + (M & W ^ M & j ^ W & j) | 0, q = F, F = B, B = T, T = z + X | 0, z = j, j = W, W = M, M = X + te | 0;
                            f = f + M | 0, p = p + W | 0, l = l + j | 0, g = g + z | 0, d = d + T | 0, _ = _ + B | 0, S = S + F | 0, b = b + q | 0, Q += 64, k -= 64;
                        }
                    }
                    P(c);
                    let N, R = c.length % 64, O = c.length / 536870912 | 0, C = c.length << 3, G = R < 56 ? 56 : 120, L = c.slice(c.length - R, c.length);
                    for(L.push(128), N = R + 1; N < G; N++)L.push(0);
                    return L.push(O >>> 24 & 255), L.push(O >>> 16 & 255), L.push(O >>> 8 & 255), L.push(O >>> 0 & 255), L.push(C >>> 24 & 255), L.push(C >>> 16 & 255), L.push(C >>> 8 & 255), L.push(C >>> 0 & 255), P(L), [
                        f >>> 24 & 255,
                        f >>> 16 & 255,
                        f >>> 8 & 255,
                        f >>> 0 & 255,
                        p >>> 24 & 255,
                        p >>> 16 & 255,
                        p >>> 8 & 255,
                        p >>> 0 & 255,
                        l >>> 24 & 255,
                        l >>> 16 & 255,
                        l >>> 8 & 255,
                        l >>> 0 & 255,
                        g >>> 24 & 255,
                        g >>> 16 & 255,
                        g >>> 8 & 255,
                        g >>> 0 & 255,
                        d >>> 24 & 255,
                        d >>> 16 & 255,
                        d >>> 8 & 255,
                        d >>> 0 & 255,
                        _ >>> 24 & 255,
                        _ >>> 16 & 255,
                        _ >>> 8 & 255,
                        _ >>> 0 & 255,
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
                function n(c, r, f) {
                    c = c.length <= 64 ? c : u(c);
                    const p = 64 + r.length + 4, l = new Array(p), g = new Array(64);
                    let d, _ = [];
                    for(d = 0; d < 64; d++)l[d] = 54;
                    for(d = 0; d < c.length; d++)l[d] ^= c[d];
                    for(d = 0; d < r.length; d++)l[64 + d] = r[d];
                    for(d = p - 4; d < p; d++)l[d] = 0;
                    for(d = 0; d < 64; d++)g[d] = 92;
                    for(d = 0; d < c.length; d++)g[d] ^= c[d];
                    function S() {
                        for(let b = p - 1; b >= p - 4; b--){
                            if (l[b]++, l[b] <= 255) return;
                            l[b] = 0;
                        }
                    }
                    for(; f >= 32;)S(), _ = _.concat(u(g.concat(u(l)))), f -= 32;
                    return f > 0 && (S(), _ = _.concat(u(g.concat(u(l))).slice(0, f))), _;
                }
                function a(c, r, f, p, l) {
                    let g;
                    for(m(c, (2 * f - 1) * 16, l, 0, 16), g = 0; g < 2 * f; g++)h(c, g * 16, l, 16), y(l, p), m(l, 0, c, r + g * 16, 16);
                    for(g = 0; g < f; g++)m(c, r + g * 2 * 16, c, g * 16, 16);
                    for(g = 0; g < f; g++)m(c, r + (g * 2 + 1) * 16, c, (g + f) * 16, 16);
                }
                function o(c, r) {
                    return c << r | c >>> 32 - r;
                }
                function y(c, r) {
                    m(c, 0, r, 0, 16);
                    for(let f = 8; f > 0; f -= 2)r[4] ^= o(r[0] + r[12], 7), r[8] ^= o(r[4] + r[0], 9), r[12] ^= o(r[8] + r[4], 13), r[0] ^= o(r[12] + r[8], 18), r[9] ^= o(r[5] + r[1], 7), r[13] ^= o(r[9] + r[5], 9), r[1] ^= o(r[13] + r[9], 13), r[5] ^= o(r[1] + r[13], 18), r[14] ^= o(r[10] + r[6], 7), r[2] ^= o(r[14] + r[10], 9), r[6] ^= o(r[2] + r[14], 13), r[10] ^= o(r[6] + r[2], 18), r[3] ^= o(r[15] + r[11], 7), r[7] ^= o(r[3] + r[15], 9), r[11] ^= o(r[7] + r[3], 13), r[15] ^= o(r[11] + r[7], 18), r[1] ^= o(r[0] + r[3], 7), r[2] ^= o(r[1] + r[0], 9), r[3] ^= o(r[2] + r[1], 13), r[0] ^= o(r[3] + r[2], 18), r[6] ^= o(r[5] + r[4], 7), r[7] ^= o(r[6] + r[5], 9), r[4] ^= o(r[7] + r[6], 13), r[5] ^= o(r[4] + r[7], 18), r[11] ^= o(r[10] + r[9], 7), r[8] ^= o(r[11] + r[10], 9), r[9] ^= o(r[8] + r[11], 13), r[10] ^= o(r[9] + r[8], 18), r[12] ^= o(r[15] + r[14], 7), r[13] ^= o(r[12] + r[15], 9), r[14] ^= o(r[13] + r[12], 13), r[15] ^= o(r[14] + r[13], 18);
                    for(let f = 0; f < 16; ++f)c[f] += r[f];
                }
                function h(c, r, f, p) {
                    for(let l = 0; l < p; l++)f[l] ^= c[r + l];
                }
                function m(c, r, f, p, l) {
                    for(; l--;)f[p++] = c[r++];
                }
                function w(c) {
                    if (!c || typeof c.length != "number") return !1;
                    for(let r = 0; r < c.length; r++){
                        const f = c[r];
                        if (typeof f != "number" || f % 1 || f < 0 || f >= 256) return !1;
                    }
                    return !0;
                }
                function A(c, r) {
                    if (typeof c != "number" || c % 1) throw new Error("invalid " + r);
                    return c;
                }
                function x(c, r, f, p, l, g, d) {
                    if (f = A(f, "N"), p = A(p, "r"), l = A(l, "p"), g = A(g, "dkLen"), f === 0 || (f & f - 1) !== 0) throw new Error("N must be power of 2");
                    if (f > 2147483647 / 128 / p) throw new Error("N too large");
                    if (p > 2147483647 / 128 / l) throw new Error("r too large");
                    if (!w(c)) throw new Error("password must be an array or buffer");
                    if (c = Array.prototype.slice.call(c), !w(r)) throw new Error("salt must be an array or buffer");
                    r = Array.prototype.slice.call(r);
                    let _ = n(c, r, l * 128 * p);
                    const S = new Uint32Array(l * 32 * p);
                    for(let T = 0; T < S.length; T++){
                        const B = T * 4;
                        S[T] = (_[B + 3] & 255) << 24 | (_[B + 2] & 255) << 16 | (_[B + 1] & 255) << 8 | (_[B + 0] & 255) << 0;
                    }
                    const b = new Uint32Array(64 * p), I = new Uint32Array(32 * p * f), P = 32 * p, N = new Uint32Array(16), R = new Uint32Array(16), O = l * f * 2;
                    let C = 0, G = null, L = !1, V = 0, Q = 0, k, M;
                    const W = d ? parseInt(1e3 / p) : 4294967295, j = typeof setImmediate < "u" ? setImmediate : setTimeout, z = function() {
                        if (L) return d(new Error("cancelled"), C / O);
                        let T;
                        switch(V){
                            case 0:
                                M = Q * 32 * p, m(S, M, b, 0, P), V = 1, k = 0;
                            case 1:
                                T = f - k, T > W && (T = W);
                                for(let F = 0; F < T; F++)m(b, 0, I, (k + F) * P, P), a(b, P, p, N, R);
                                if (k += T, C += T, d) {
                                    const F = parseInt(1e3 * C / O);
                                    if (F !== G) {
                                        if (L = d(null, C / O), L) break;
                                        G = F;
                                    }
                                }
                                if (k < f) break;
                                k = 0, V = 2;
                            case 2:
                                T = f - k, T > W && (T = W);
                                for(let F = 0; F < T; F++){
                                    const q = (2 * p - 1) * 16, H = b[q] & f - 1;
                                    h(I, H * P, b, P), a(b, P, p, N, R);
                                }
                                if (k += T, C += T, d) {
                                    const F = parseInt(1e3 * C / O);
                                    if (F !== G) {
                                        if (L = d(null, C / O), L) break;
                                        G = F;
                                    }
                                }
                                if (k < f) break;
                                if (m(b, 0, S, M, P), Q++, Q < l) {
                                    V = 0;
                                    break;
                                }
                                _ = [];
                                for(let F = 0; F < S.length; F++)_.push(S[F] >> 0 & 255), _.push(S[F] >> 8 & 255), _.push(S[F] >> 16 & 255), _.push(S[F] >> 24 & 255);
                                const B = n(c, _, g);
                                return d && d(null, 1, B), B;
                        }
                        d && j(z);
                    };
                    if (!d) for(;;){
                        const T = z();
                        if (T != null) return T;
                    }
                    z();
                }
                const E = {
                    scrypt: function(c, r, f, p, l, g, d) {
                        return new Promise(function(_, S) {
                            let b = 0;
                            d && d(0), x(c, r, f, p, l, g, function(I, P, N) {
                                if (I) S(I);
                                else if (N) d && b !== 1 && d(1), _(new Uint8Array(N));
                                else if (d && P !== b) return b = P, d(P);
                            });
                        });
                    },
                    syncScrypt: function(c, r, f, p, l, g) {
                        return new Uint8Array(x(c, r, f, p, l, g));
                    }
                };
                s.exports = E;
            })();
        })(se)), se.exports;
    }
    var De = Fe();
    const Le = {
        async decryptDatabase (s, i) {
            const t = s.header.slots;
            if (!t || !t.length) throw new Error("Aegis: 找不到密钥槽");
            const e = s.db, u = s.header.params;
            let n = null;
            const a = new TextEncoder().encode(i);
            for (const A of t)if (A.type === 1) {
                const x = Y(A.salt), E = await De.scrypt(a, x, A.n, A.r, A.p, 32), c = Y(A.key), r = Y(A.key_params.nonce), f = Y(A.key_params.tag), p = new Uint8Array(c.length + f.length);
                p.set(c), p.set(f, c.length);
                try {
                    const l = await window.crypto.subtle.importKey("raw", E, {
                        name: "AES-GCM"
                    }, !1, [
                        "decrypt"
                    ]), g = await window.crypto.subtle.decrypt({
                        name: "AES-GCM",
                        iv: r
                    }, l, p);
                    n = new Uint8Array(g);
                    break;
                } catch  {
                    continue;
                }
            }
            if (!n) throw new Error("Aegis: 密码错误或不支持的加密格式 (缺少 Scrypt)");
            const o = Pe(e), y = Y(u.nonce), h = Y(u.tag), m = new Uint8Array(o.length + h.length);
            m.set(o), m.set(h, o.length);
            const w = await window.crypto.subtle.importKey("raw", n, {
                name: "AES-GCM"
            }, !1, [
                "decrypt"
            ]);
            try {
                const A = await window.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: y
                }, w, m);
                return JSON.parse(new TextDecoder().decode(A));
            } catch  {
                throw new Error("Aegis: 数据库载荷解密失败");
            }
        }
    }, pe = {
        name: "Proton Authenticator (.json)",
        fileType: "application/json, text/plain",
        async parse (s, i) {
            let t;
            try {
                t = JSON.parse(s);
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            if (t.version !== 1 || !t.salt || !t.content) throw new Error("INVALID_FORMAT_OR_PASSWORD");
            if (!i) throw new Error("PASSWORD_REQUIRED");
            try {
                const e = atob(t.salt), u = new Uint8Array(e.length);
                for(let r = 0; r < e.length; r++)u[r] = e.charCodeAt(r);
                const n = atob(t.content), a = new Uint8Array(n.length);
                for(let r = 0; r < n.length; r++)a[r] = n.charCodeAt(r);
                const o = a.slice(0, 12), y = a.slice(12), m = (await le.hash({
                    pass: i,
                    salt: u,
                    time: 2,
                    mem: 19 * 1024,
                    hashLen: 32,
                    parallelism: 1,
                    type: le.ArgonType.Argon2id,
                    distPath: "/"
                })).hash, w = await window.crypto.subtle.importKey("raw", m, {
                    name: "AES-GCM"
                }, !1, [
                    "decrypt"
                ]), A = new TextEncoder().encode("proton.authenticator.export.v1"), x = await window.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: o,
                    additionalData: A,
                    tagLength: 128
                }, w, y), E = new TextDecoder().decode(x), c = JSON.parse(E);
                return this.parsePlaintext(c);
            } catch (e) {
                throw D.error("Proton Authenticator decryption failed:", e), new Error("INVALID_FORMAT_OR_PASSWORD");
            }
        },
        parsePlaintext (s) {
            const t = (typeof s == "string" ? JSON.parse(s) : s).entries || [], e = [];
            for (const u of t)if (u.content && u.content.uri) {
                const n = K(u.content.uri);
                n && (u.content.name && (n.account = u.content.name), (!n.service || n.service === "Unknown") && (n.service = u.content.entry_type || "Unknown"), e.push(n));
            }
            return e;
        }
    }, Ne = {
        name: "Proton Pass (.pgp)",
        fileType: "text/plain",
        async parse (s, i) {
            try {
                const t = await he("openpgp"), e = t?.default || t, u = await e.readMessage({
                    armoredMessage: s
                }), { data: n } = await e.decrypt({
                    message: u,
                    passwords: [
                        i
                    ],
                    format: "utf8"
                }), a = JSON.parse(n), o = [], y = a.vaults || {};
                for(const h in y){
                    const w = y[h].items || [];
                    for (const A of w){
                        const x = A.data || {}, E = x.content || {}, c = x.metadata || {};
                        if (E.totpUri) {
                            const r = K(E.totpUri);
                            r && (c.name && (r.service = c.name), E.itemUsername && (r.account = E.itemUsername), o.push(r));
                        }
                    }
                }
                return o;
            } catch (t) {
                throw D.error("Proton Pass PGP decryption failed:", t), new Error("INVALID_FORMAT_OR_PASSWORD");
            }
        }
    }, Re = {
        isEnteEncrypted (s) {
            return s && typeof s.kdfParams == "object" && typeof s.encryptedData == "string" && typeof s.encryptionNonce == "string";
        },
        async decryptAndParse (s, i) {
            let t;
            try {
                t = typeof s == "string" ? JSON.parse(s) : s;
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            if (!this.isEnteEncrypted(t)) throw new Error("INVALID_FORMAT_OR_PASSWORD");
            if (!i) throw new Error("PASSWORD_REQUIRED");
            const e = ie(t.kdfParams.salt), u = ie(t.encryptionNonce), n = ie(t.encryptedData), { opsLimit: a, memLimit: o } = t.kdfParams, y = Math.floor(o / 1024);
            let h;
            try {
                h = await me({
                    password: i,
                    salt: e,
                    parallelism: 1,
                    iterations: a,
                    memorySize: y,
                    hashLength: 32,
                    outputType: "binary"
                });
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            let m;
            try {
                const E = await Ue(), c = E.crypto_secretstream_xchacha20poly1305_init_pull(u, h), r = E.crypto_secretstream_xchacha20poly1305_pull(c, n);
                if (!r || !r.message) throw new Error("no result");
                m = r.message;
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            const A = new TextDecoder().decode(m).split(`
`), x = [];
            for (const E of A){
                const c = E.trim();
                if (!c.startsWith("otpauth://")) continue;
                const r = K(c);
                r && r.secret && x.push(r);
            }
            return x;
        }
    };
    function ie(s) {
        const i = s.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(s.length / 4) * 4, "="), t = atob(i), e = new Uint8Array(t.length);
        for(let u = 0; u < t.length; u++)e[u] = t.charCodeAt(u);
        return e;
    }
    let ne = null;
    async function Ue() {
        if (ne) return ne;
        const s = await he("libsodium"), i = s?.default || s;
        return await i.ready, ne = i, ne;
    }
    class v extends Error {
        constructor(i, t = "MIGRATION_ERROR", e = null){
            super(i), this.name = "migrationError", this.code = t, this.details = e;
        }
    }
    class Ce extends _e {
        name = "memory";
        mapNameToFile = new Map;
        mapIdToFile = new Map;
        constructor(){
            super();
        }
        close() {
            for (const i of this.mapIdToFile.keys())this.xClose(i);
        }
        xOpen(i, t, e, u) {
            i = i || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
            let n = this.mapNameToFile.get(i);
            if (!n) if (e & oe) n = {
                name: i,
                flags: e,
                size: 0,
                data: new ArrayBuffer(0)
            }, this.mapNameToFile.set(i, n);
            else return Se;
            return this.mapIdToFile.set(t, n), u.setInt32(0, e, !0), J;
        }
        xClose(i) {
            const t = this.mapIdToFile.get(i);
            return t && (this.mapIdToFile.delete(i), t.flags & be && this.mapNameToFile.delete(t.name)), J;
        }
        xRead(i, t, e) {
            const u = this.mapIdToFile.get(i), n = Math.min(e, u.size), o = Math.min(e + t.byteLength, u.size) - n;
            return o && t.set(new Uint8Array(u.data, n, o)), o < t.byteLength ? (t.fill(0, o), Ee) : J;
        }
        xWrite(i, t, e) {
            const u = this.mapIdToFile.get(i);
            if (e + t.byteLength > u.data.byteLength) {
                const n = Math.max(e + t.byteLength, 2 * u.data.byteLength), a = new ArrayBuffer(n);
                new Uint8Array(a).set(new Uint8Array(u.data, 0, u.size)), u.data = a;
            }
            return new Uint8Array(u.data, e, t.byteLength).set(t), u.size = Math.max(u.size, e + t.byteLength), J;
        }
        xTruncate(i, t) {
            const e = this.mapIdToFile.get(i);
            return e.size = Math.min(e.size, t), J;
        }
        xFileSize(i, t) {
            const e = this.mapIdToFile.get(i);
            return t.setBigInt64(0, BigInt(e.size), !0), J;
        }
        xDelete(i, t) {
            return this.mapNameToFile.delete(i), J;
        }
        xAccess(i, t, e) {
            const u = this.mapNameToFile.get(i);
            return e.setInt32(0, u ? 1 : 0, !0), J;
        }
    }
    class Me extends Ce {
        name = "memory-async";
        constructor(){
            super();
        }
        async close() {
            for (const i of this.mapIdToFile.keys())await this.xClose(i);
        }
        xOpen(i, t, e, u) {
            return this.handleAsync(async ()=>super.xOpen(i, t, e, u));
        }
        xClose(i) {
            return this.handleAsync(async ()=>super.xClose(i));
        }
        xRead(i, t, e) {
            return this.handleAsync(async ()=>super.xRead(i, t, e));
        }
        xWrite(i, t, e) {
            return this.handleAsync(async ()=>super.xWrite(i, t, e));
        }
        xTruncate(i, t) {
            return this.handleAsync(async ()=>super.xTruncate(i, t));
        }
        xFileSize(i, t) {
            return this.handleAsync(async ()=>super.xFileSize(i, t));
        }
        xDelete(i, t) {
            return this.handleAsync(async ()=>super.xDelete(i, t));
        }
        xAccess(i, t, e) {
            return this.handleAsync(async ()=>super.xAccess(i, t, e));
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
    qe = {
        detectFileType (s, i) {
            if (s instanceof ArrayBuffer || s instanceof Uint8Array) {
                const e = s instanceof Uint8Array ? s : new Uint8Array(s), u = "SQLite format 3";
                let n = !0;
                for(let a = 0; a < u.length && a < e.length; a++)if (e[a] !== u.charCodeAt(a)) {
                    n = !1;
                    break;
                }
                if (n) return "phonefactor";
                try {
                    const a = new TextDecoder("utf-8", {
                        fatal: !1
                    }).decode(e);
                    if (a.includes("accounts") && (a.includes("oath_secret_key") || a.includes("encrypted_oath_secret_key"))) return "phonefactor";
                } catch  {}
            }
            if (i && i.toLowerCase().includes("phonefactor")) return "phonefactor";
            let t = s;
            if (s instanceof ArrayBuffer || s instanceof Uint8Array) try {
                const e = s instanceof Uint8Array ? s : new Uint8Array(s);
                t = new TextDecoder("utf-8", {
                    fatal: !1
                }).decode(e);
            } catch  {
                t = "";
            }
            if (i && i.toLowerCase().endsWith(".csv")) {
                const e = typeof t == "string" ? t.split(`
`)[0].toLowerCase() : "";
                return e.includes("login_totp") ? "bitwarden_pass_csv" : e.includes("title") && e.includes("otpauth") ? "1password_csv" : e.includes("otpauth") ? "bitwarden_auth_csv" : e.includes("totp") && e.includes("vault") && e.includes("createtime") ? "proton_pass_csv" : e.includes("otpurl") && e.includes("title") && e.includes("username") ? "dashlane_csv" : "generic_csv";
            }
            if (typeof t == "string" && t.trim().startsWith("otpauth://")) return "generic_text";
            if (typeof t == "string") {
                const e = ee(t);
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
            if (i) {
                const e = i.toLowerCase();
                if (e.endsWith(".2fas")) return "2fas";
                if (e.endsWith(".txt")) return "generic_text";
                if (e.endsWith(".mafile")) return "steam_mafile";
                if (e.endsWith(".1pux")) return "1password_pux";
            }
            return "unknown";
        },
        async fetchAllVault () {
            const s = await ce.getVault({
                limit: 9999
            });
            if (!s.success) throw new v("无法获取账号数据", "VAULT_FETCH_FAILED");
            return s.vault || [];
        },
        async exportData (s, i, t, e = "generic") {
            const n = {
                version: "2.0",
                app: "nodeauth",
                timestamp: new Date().toISOString()
            };
            if (i === "nodeauth_encrypted" || i === "encrypted") {
                if (!t) throw new v("加密导出需要密码", "MISSING_PASSWORD");
                const a = {
                    ...n,
                    accounts: s
                }, o = await ye(a, t);
                return JSON.stringify({
                    ...n,
                    encrypted: !0,
                    data: o,
                    note: "This file is encrypted with your export password (AES-GCM-256 + PBKDF2)."
                }, null, 2);
            }
            if (i === "generic_json") {
                const a = s.map((o)=>({
                        issuer: o.service || "Unknown",
                        account: o.account || "",
                        secret: o.secret,
                        type: "TOTP",
                        digits: o.digits || 6,
                        period: o.period || 30,
                        algorithm: (o.algorithm || "SHA1").toUpperCase().replace("SHA-", "SHA")
                    }));
                return JSON.stringify({
                    version: "1.0",
                    exportDate: new Date().toISOString(),
                    count: a.length,
                    secrets: a
                }, null, 2);
            }
            if (i === "nodeauth_json") return JSON.stringify({
                ...n,
                encrypted: !1,
                accounts: s
            }, null, 2);
            if (i === "2fas") {
                const a = s.map((o, y)=>{
                    const h = o.algorithm?.toUpperCase() === "STEAM", m = h ? "SHA1" : (o.algorithm || "SHA1").toUpperCase().replace("SHA-1", "SHA1").replace("SHA-256", "SHA256").replace("SHA-512", "SHA512");
                    return {
                        name: o.service,
                        secret: o.secret,
                        otp: {
                            source: "manual",
                            account: o.account || "",
                            digits: h ? 5 : o.digits || 6,
                            period: o.period || 30,
                            algorithm: m,
                            tokenType: h ? "STEAM" : "TOTP",
                            counter: 0
                        },
                        order: {
                            position: y
                        },
                        badge: {
                            color: "Default"
                        },
                        updatedAt: Date.now(),
                        icon: {
                            selected: "Label",
                            label: {
                                text: (o.service || "?").slice(0, 2).toUpperCase(),
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
                    services: a
                });
            }
            if (i === "aegis") {
                const a = s.map((o)=>{
                    const y = o.algorithm?.toUpperCase() === "STEAM";
                    return {
                        type: y ? "steam" : "totp",
                        uuid: crypto.randomUUID(),
                        name: o.account || o.service,
                        issuer: o.service,
                        info: {
                            secret: o.secret,
                            algo: y ? "SHA1" : (o.algorithm || "SHA1").toUpperCase().replace("SHA-", "SHA"),
                            digits: y ? 5 : o.digits || 6,
                            period: o.period || 30
                        }
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
                        entries: a
                    }
                }, null, 2);
            }
            if (i === "proton_auth") {
                const a = {
                    version: 1,
                    entries: s.map((o)=>{
                        const y = o.algorithm?.toUpperCase() === "STEAM";
                        let h = "";
                        return y ? h = `steam://${o.secret}` : h = this.totp.buildOtpUri(o), {
                            id: crypto.randomUUID(),
                            content: {
                                uri: h,
                                entry_type: y ? "Steam" : "Totp",
                                name: o.account
                            },
                            note: o.category || null
                        };
                    })
                };
                return JSON.stringify(a, null, 2);
            }
            if (i === "generic_text") return s.map((a)=>re({
                    service: a.service,
                    account: a.account,
                    secret: a.secret,
                    algorithm: a.algorithm,
                    digits: a.digits,
                    period: a.period
                })).join(`
`);
            if (i === "bitwarden_auth_csv") {
                let a = `name,secret,totp,favorite,folder
`;
                return s.forEach((o)=>{
                    const y = o.algorithm?.toUpperCase() === "STEAM", h = `"${o.service}${o.account ? ":" + o.account : ""}"`, m = y ? `steam://${o.secret}` : re({
                        service: o.service,
                        account: o.account,
                        secret: o.secret,
                        algorithm: o.algorithm,
                        digits: o.digits,
                        period: o.period
                    });
                    a += `${h},${o.secret},"${m}",0,
`;
                }), a;
            }
            if (i === "generic_csv") {
                let a = `name,issuer,secret,algorithm,digits,period,type
`;
                return s.forEach((o)=>{
                    const y = `"${o.account}"`, h = `"${o.service}"`;
                    a += `${y},${h},${o.secret},${o.algorithm},${o.digits},${o.period},TOTP
`;
                }), a;
            }
            if (i === "bitwarden_auth_json") {
                const a = s.map((o)=>{
                    const h = o.algorithm?.toUpperCase() === "STEAM" ? `steam://${o.secret}` : re({
                        service: o.service,
                        account: o.account,
                        secret: o.secret,
                        algorithm: o.algorithm,
                        digits: o.digits,
                        period: o.period
                    });
                    return {
                        favorite: !1,
                        id: crypto.randomUUID().toUpperCase(),
                        login: {
                            totp: h,
                            username: o.account || ""
                        },
                        name: o.service,
                        type: 1
                    };
                });
                return JSON.stringify({
                    encrypted: !1,
                    items: a
                });
            }
            throw new v("未知的导出类型: " + i, "UNKNOWN_EXPORT_TYPE");
        },
        async exportAsGaMigration (s) {
            if (!s || s.length === 0) throw new v("没有账户可以迁移", "EMPTY_VAULT");
            const i = 10, t = [];
            for(let h = 0; h < s.length; h += i)t.push(s.slice(h, h + i));
            const e = Math.floor(Math.random() * 2147483647), u = await ae(()=>import("./qr-utils-BC7NLEos.js").then((h)=>h.b), __vite__mapDeps([0,1,2,3])), n = [];
            function a(h, m) {
                for(; h >= 128;)m.push(h & 127 | 128), h >>>= 7;
                m.push(h);
            }
            function o(h, m) {
                const w = new TextEncoder().encode(h);
                a(w.length, m);
                for(let A = 0; A < w.length; A++)m.push(w[A]);
            }
            function y(h, m) {
                a(h.length, m);
                for(let w = 0; w < h.length; w++)m.push(h[w]);
            }
            for(let h = 0; h < t.length; h++){
                const m = t[h], w = [];
                w.push(16), a(1, w), w.push(24), a(t.length, w), w.push(32), a(h, w), w.push(40), a(e, w);
                for (const c of m){
                    const r = [], f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", p = c.secret.toUpperCase().replace(/=+$/, "").replace(/[^A-Z2-7]/g, ""), l = [];
                    let g = 0, d = 0;
                    for(let I = 0; I < p.length; I++){
                        const P = f.indexOf(p[I]);
                        P !== -1 && (d = d << 5 | P, g += 5, g >= 8 && (l.push(d >>> g - 8 & 255), g -= 8));
                    }
                    l.length > 0 && (r.push(10), y(l, r));
                    const _ = c.account || c.service;
                    _ && (r.push(18), o(_, r)), c.service && (r.push(26), o(c.service, r));
                    let S = 1;
                    c.algorithm === "SHA256" ? S = 2 : c.algorithm === "SHA512" && (S = 3), r.push(32), a(S, r);
                    let b = 1;
                    c.digits === 8 && (b = 2), r.push(40), a(b, r), r.push(48), a(2, r), w.push(10), a(r.length, w);
                    for(let I = 0; I < r.length; I++)w.push(r[I]);
                }
                let A = "";
                for(let c = 0; c < w.length; c++)A += String.fromCharCode(w[c]);
                const x = `otpauth-migration://offline?data=${encodeURIComponent(btoa(A))}`, E = await u.toDataURL(x, {
                    errorCorrectionLevel: "M",
                    width: 480,
                    margin: 2
                });
                n.push(E);
            }
            return n;
        },
        async exportAsHtml (s) {
            const i = await ae(()=>import("./qr-utils-BC7NLEos.js").then((e)=>e.b), __vite__mapDeps([0,1,2,3])), t = [];
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
            for (const e of s){
                const u = re({
                    service: e.service,
                    account: e.account,
                    secret: e.secret,
                    algorithm: e.algorithm,
                    digits: e.digits,
                    period: e.period
                });
                try {
                    const n = await i.toDataURL(u, {
                        errorCorrectionLevel: "M",
                        margin: 2
                    });
                    t.push(`
          <div class="card">
            <div class="service">${e.service}</div>
            <div class="account">${e.account || "-"}</div>
            <img class="qr-img" src="${n}" alt="QR Code">
            <div class="code">${e.secret.replace(/(.{4})/g, "$1 ").trim()}</div>
            <div style="font-size: 0.8em; color: #888; margin-top: 8px;">${e.algorithm} / ${e.digits} / ${e.period}s</div>
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
        async decrypt2FasEncrypted (s, i) {
            try {
                const t = i.servicesEncrypted;
                if (!t || typeof t != "string") throw new v("无效的 2FAS 加密数据：找不到 servicesEncrypted 字段", "INVALID_2FAS_ENCRYPTED");
                const e = t.split(":");
                if (e.length < 3) throw new v("无效的 2FAS 加密格式：应为 salt:iv:ciphertext", "INVALID_2FAS_FORMAT");
                const n = [
                    e[0],
                    e[1],
                    e.slice(2).join(":")
                ].map((l)=>Uint8Array.from(atob(l.replace(/\s+/g, "")), (g)=>g.charCodeAt(0))), a = (l)=>{
                    const g = l.reduce((S, b)=>S + b.length, 0), d = new Uint8Array(g);
                    let _ = 0;
                    for (const S of l)d.set(S, _), _ += S.length;
                    return d;
                };
                let o, y, h;
                const m = n.findIndex((l)=>l.length === $.IV_LEN);
                if (m !== -1 && (y = n.splice(m, 1)[0], n.length > 0)) {
                    let l = 0;
                    for(let g = 1; g < n.length; g++)n[g].length < n[l].length && (l = g);
                    o = n.splice(l, 1)[0], h = n.length === 1 ? n[0] : a(n);
                }
                if (!o || !y || !h) {
                    let l = !1;
                    const g = [
                        {
                            salt: n[1],
                            iv: n[2],
                            cipher: n[0],
                            name: "bufs[1]=salt, bufs[2]=iv, bufs[0]=cipher"
                        },
                        {
                            salt: n.length > 1 && n[1].length >= 44 ? n[1].slice(0, 32) : null,
                            iv: n.length > 1 && n[1].length >= 44 ? n[1].slice(32, 44) : null,
                            cipher: n[0],
                            name: "salt/iv extracted from bufs[1]"
                        },
                        {
                            salt: n[0].slice(0, 32),
                            iv: n[0].slice(32, 44),
                            cipher: n[0].slice(44),
                            name: "salt/iv extracted from bufs[0]"
                        }
                    ];
                    for (const d of g)if (!(!d.salt || !d.iv || !d.cipher) && d.iv.length === $.IV_LEN) try {
                        const _ = new TextEncoder().encode(s), S = await crypto.subtle.importKey("raw", _, {
                            name: "PBKDF2"
                        }, !1, [
                            "deriveKey"
                        ]), b = await crypto.subtle.deriveKey({
                            name: "PBKDF2",
                            salt: d.salt,
                            iterations: $.ITERATIONS,
                            hash: "SHA-256"
                        }, S, {
                            name: "AES-GCM",
                            length: 256
                        }, !1, [
                            "decrypt"
                        ]);
                        if (d.cipher.length >= 16) {
                            const I = d.cipher.slice(d.cipher.length - 16), P = d.cipher.slice(0, d.cipher.length - 16), N = await crypto.subtle.decrypt({
                                name: "AES-GCM",
                                iv: d.iv
                            }, b, new Uint8Array([
                                ...P,
                                ...I
                            ])), R = new TextDecoder().decode(N);
                            JSON.parse(R), o = d.salt, y = d.iv, h = d.cipher, l = !0, D.debug("[decrypt2FasEncrypted] permutation succeeded with:", d.name);
                            break;
                        }
                    } catch  {}
                    !l && !o && (o = n[0], y = n[1], h = n[2], o.length !== $.SALT_LEN && y.length === $.SALT_LEN && ([o, y] = [
                        y,
                        o
                    ]), y.length !== $.IV_LEN && h.length === $.IV_LEN && ([y, h] = [
                        h,
                        y
                    ]));
                }
                if (D.debug("[decrypt2FasEncrypted] chosen mapping lengths salt,iv,cipher=", o?.length, y?.length, h?.length), o.length < 16) throw new v(`salt 长度过短：${o.length}`, "INVALID_SALT_LEN");
                if (y.length !== $.IV_LEN) throw new v(`IV 长度错误：期望 ${$.IV_LEN}，实际 ${y.length}`, "INVALID_IV_LEN");
                const w = new TextEncoder().encode(s), A = await crypto.subtle.importKey("raw", w, {
                    name: "PBKDF2"
                }, !1, [
                    "deriveKey"
                ]), x = await crypto.subtle.deriveKey({
                    name: "PBKDF2",
                    salt: o,
                    iterations: $.ITERATIONS,
                    hash: "SHA-256"
                }, A, {
                    name: "AES-GCM",
                    length: 256
                }, !1, [
                    "decrypt"
                ]);
                if (D.debug("[decrypt2FasEncrypted] key derived"), h.length < 16) throw new v("密文过短（无法包含 auth tag）", "CIPHERTEXT_TOO_SHORT");
                const E = h.slice(h.length - 16), c = h.slice(0, h.length - 16), r = await crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: y
                }, x, new Uint8Array([
                    ...c,
                    ...E
                ])), f = new TextDecoder().decode(r), p = JSON.parse(f);
                if (!Array.isArray(p)) throw new v("解密后的数据不是数组格式", "INVALID_DECRYPTED_FORMAT");
                return p;
            } catch (t) {
                throw t instanceof v ? t : new v(`2FAS 解密失败：${t.message || String(t)}`, "TWOFAS_DECRYPTION_FAILED", t);
            }
        },
        async decryptBitwardenPassEncrypted (s, i) {
            try {
                const t = i.salt, e = i.kdfIterations, u = i.kdfType;
                if (u !== 0) throw new v(`不支持的 KDF 类型: ${u}`, "UNSUPPORTED_BITWARDEN_KDF");
                const n = new TextEncoder().encode(t), a = new TextEncoder().encode(s), o = await crypto.subtle.importKey("raw", a, {
                    name: "PBKDF2"
                }, !1, [
                    "deriveBits"
                ]), y = await crypto.subtle.deriveBits({
                    name: "PBKDF2",
                    salt: n,
                    iterations: e,
                    hash: "SHA-256"
                }, o, 256), h = new Uint8Array(y), m = await this._hkdfExpandSha256(h, "enc", 32), w = await this._hkdfExpandSha256(h, "mac", 32), A = async (c, r, f)=>{
                    const p = c.split(".");
                    if (p[0] !== "2") throw new Error("Unsupported encryption type");
                    const l = p[1].split("|"), g = Uint8Array.from(atob(l[0]), (O)=>O.charCodeAt(0)), d = Uint8Array.from(atob(l[1]), (O)=>O.charCodeAt(0)), _ = Uint8Array.from(atob(l[2]), (O)=>O.charCodeAt(0)), S = await crypto.subtle.importKey("raw", f, {
                        name: "HMAC",
                        hash: "SHA-256"
                    }, !1, [
                        "sign"
                    ]), b = new Uint8Array(g.length + d.length);
                    b.set(g, 0), b.set(d, g.length);
                    const I = new Uint8Array(await crypto.subtle.sign("HMAC", S, b));
                    if (_.length !== I.length) return null;
                    let P = 0;
                    for(let O = 0; O < _.length; O++)P |= _[O] ^ I[O];
                    if (P !== 0) return null;
                    const N = await crypto.subtle.importKey("raw", r, {
                        name: "AES-CBC"
                    }, !1, [
                        "decrypt"
                    ]), R = await crypto.subtle.decrypt({
                        name: "AES-CBC",
                        iv: g
                    }, N, d);
                    return new TextDecoder().decode(R);
                };
                if (!await A(i.encKeyValidation_DO_NOT_EDIT, m, w)) throw new Error("MAC verification failed");
                const E = await A(i.data, m, w);
                return JSON.parse(E);
            } catch (t) {
                throw new v(`Bitwarden 解密失败: ${t.message}`, "BITWARDEN_DECRYPTION_FAILED", t);
            }
        },
        async _hkdfExpandSha256 (s, i, t) {
            const e = new TextEncoder().encode(i || ""), u = await crypto.subtle.importKey("raw", s, {
                name: "HMAC",
                hash: "SHA-256"
            }, !1, [
                "sign"
            ]), n = new Uint8Array(t);
            let a = new Uint8Array(0), o = 0, y = 1;
            for(; o < t;){
                const h = new Uint8Array(a.length + e.length + 1);
                h.set(a, 0), h.set(e, a.length), h[h.length - 1] = y & 255, a = new Uint8Array(await crypto.subtle.sign("HMAC", u, h));
                const m = Math.min(a.length, t - o);
                n.set(a.slice(0, m), o), o += m, y++;
            }
            return n;
        },
        bytesToBase32 (s) {
            const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
            let t = 0, e = 0, u = "";
            for(let n = 0; n < s.length; n++)for(e = e << 8 | s[n], t += 8; t >= 5;)t -= 5, u += i[e >>> t & 31];
            for(t > 0 && (u += i[e << 5 - t & 31]); u.length % 8;)u += "=";
            return u;
        },
        base64ToBase32 (s) {
            try {
                const i = atob(s.trim()), t = new Uint8Array(i.length);
                for(let e = 0; e < i.length; e++)t[e] = i.charCodeAt(e);
                return this.bytesToBase32(t);
            } catch (i) {
                throw new Error(`Base64 转 Base32 失败: ${i.message}`);
            }
        },
        async parsePhoneFactor (s) {
            console.log("[PhoneFactor] parsePhoneFactor 开始");
            let i = null, t = null, e = null, u = null;
            try {
                if (s && s.main && s.main.buffer) i = new Uint8Array(s.main.buffer), s.wal && s.wal.buffer && (t = new Uint8Array(s.wal.buffer)), s.shm && s.shm.buffer && (e = new Uint8Array(s.shm.buffer));
                else if (s instanceof ArrayBuffer || s instanceof Uint8Array) i = new Uint8Array(s);
                else throw new v("无法识别传入的 PhoneFactor 数据格式", "INVALID_PHONEFACTOR_INPUT");
                console.log("[PhoneFactor] 文件提取完成", {
                    mainBufLen: i?.byteLength,
                    walBufLen: t?.byteLength ?? 0,
                    shmBufLen: e?.byteLength ?? 0
                }), console.log("[PhoneFactor] 调用 SQLiteESMFactory...");
                const n = await ve();
                console.log("[PhoneFactor] SQLiteESMFactory 完成，创建 sqlite3...");
                const a = xe(n);
                console.log("[PhoneFactor] sqlite3 Factory 完成"), u = new Me;
                const o = `vfs-${Date.now()}`;
                u.name = o, a.vfs_register(u), console.log("[PhoneFactor] VFS 注册完成:", o);
                const y = "PhoneFactor", h = (p, l)=>{
                    const g = l.buffer.slice(l.byteOffset, l.byteOffset + l.byteLength);
                    u.mapNameToFile.set(p, {
                        name: p,
                        flags: oe | fe | Te,
                        size: l.byteLength,
                        data: g
                    });
                };
                h(y, i);
                const m = t && t.byteLength > 0;
                m && h(`${y}-wal`, t), e && e.byteLength > 0 && h(`${y}-shm`, e), console.log("[PhoneFactor] 注入文件到 VFS 完成", {
                    main: y,
                    hasWal: m,
                    hasShm: !!(e && e.byteLength > 0)
                }), console.log("[PhoneFactor] 调用 open_v2...");
                const w = await a.open_v2(y, fe | oe, o);
                D.info("[PhoneFactor] open_v2 成功"), D.info("[PhoneFactor] 执行 PRAGMA locking_mode..."), await a.exec(w, "PRAGMA locking_mode = EXCLUSIVE;"), D.info("[PhoneFactor] 执行 PRAGMA journal_mode..."), await a.exec(w, "PRAGMA journal_mode = DELETE;"), D.info("[PhoneFactor] PRAGMA 完成");
                let A = !1;
                if (await a.exec(w, "SELECT name FROM sqlite_master WHERE type='table' AND name='accounts'", (p)=>{
                    A = !0;
                }), D.info(`[PhoneFactor] accounts 表存在: ${A}`), !A) throw await a.close(w), new v("不是有效的Microsoft Authenticator数据文件", "INVALID_PHONEFACTOR_FILE");
                const x = [];
                let E = 0, c = 0, r = 0;
                const f = /^[A-Z2-7]+=*$/i;
                try {
                    D.info("[PhoneFactor] 开始提取基础数据...");
                    const p = a.str_new(w, "SELECT name, username, oath_secret_key, encrypted_oath_secret_key, account_type FROM accounts");
                    let l = await a.prepare_v2(w, a.str_value(p));
                    if (l && l.stmt) {
                        const g = l.stmt;
                        D.info("[PhoneFactor] SQL 预编译成功，开始读取行...");
                        try {
                            let d = 0;
                            for(; await a.step(g) === Ie;){
                                d++, d % 5 === 0 && D.info(`[PhoneFactor] 已读取 ${d} 行...`);
                                const _ = a.row(g), S = _[0], b = _[1];
                                let I = _[2];
                                const P = _[3], N = _[4];
                                if ((!S || String(S).trim() === "") && (!b || String(b).trim() === "")) {
                                    c++;
                                    continue;
                                }
                                let R = (I || "").toString().trim();
                                if (!R) {
                                    if (P && String(P).trim() !== "") {
                                        E++;
                                        continue;
                                    }
                                    c++;
                                    continue;
                                }
                                let O = "SHA1", C = 6;
                                try {
                                    if (N !== 0) if (N === 1) R = this.base64ToBase32(R), O = "SHA1", C = 8;
                                    else if (N === 2) R = R.toUpperCase(), O = "SHA256", C = 6;
                                    else {
                                        r++;
                                        continue;
                                    }
                                } catch (L) {
                                    D.warn(`Failed to convert secret for account_type=${N}: ${L.message}`), r++;
                                    continue;
                                }
                                const G = R.replace(/\s+/g, "").replace(/=+$/, "");
                                if (!f.test(G)) {
                                    if (P && String(P).trim() !== "") {
                                        E++;
                                        continue;
                                    }
                                    r++;
                                    continue;
                                }
                                x.push({
                                    service: S || "Unknown Service",
                                    account: b || "Unknown Account",
                                    secret: R,
                                    algorithm: O,
                                    digits: C,
                                    period: 30
                                });
                            }
                            D.info(`[PhoneFactor] 行读取循环结束，总共提取 ${d} 行`);
                        } finally{
                            await a.finalize(g);
                        }
                    }
                    a.str_finish(p), D.info("[PhoneFactor] 数据提取完成，关闭 DB...");
                } catch (p) {
                    throw await a.close(w), new v("解析 PhoneFactor 数据库失败", "INVALID_PHONEFACTOR_FILE", p);
                }
                await a.close(w);
                try {
                    u.mapNameToFile.clear(), u.mapIdToFile.clear();
                } catch  {}
                if (x.length === 0) throw E > 0 ? new v("PhoneFactor 文件仅包含加密的密钥，无法在前端导入", "PHONEFACTOR_ONLY_ENCRYPTED") : new v("未能从 PhoneFactor 文件中提取到可导入的 TOTP 记录", "PHONEFACTOR_NO_IMPORTABLE_ROWS");
                return x;
            } catch (n) {
                if (n instanceof v) throw D.error("parsePhoneFactor migrationError:", n), n;
                try {
                    const o = i && (i.byteLength || i.length) || 0;
                    D.error("parsePhoneFactor failed:", {
                        message: n && n.message,
                        stack: n && n.stack,
                        bufferLength: o,
                        error: n
                    });
                } catch (o) {
                    D.error("parsePhoneFactor failed (logging error):", o);
                }
                const a = n && n.message ? `${n.message}` : String(n);
                throw new v(`不是有效的Microsoft Authenticator数据文件: ${a}`, "INVALID_PHONEFACTOR_FILE", n);
            }
        },
        async parseImportData (s, i, t) {
            let e = [];
            if (i === "phonefactor" || i === "phonefactor_group") return await this.parsePhoneFactor(s);
            if (i === "1password_pux") return await this.parse1Pux(s);
            if (i === "steam_mafile") return await this.parseSteamMaFile(s);
            let u = s;
            if (s instanceof ArrayBuffer || s instanceof Uint8Array) try {
                const n = s instanceof Uint8Array ? s : new Uint8Array(s);
                u = new TextDecoder("utf-8", {
                    fatal: !1
                }).decode(n);
            } catch (n) {
                D.warn("Failed to decode buffer as text", n);
            }
            if (s = u, (i === "bitwarden_auth_csv" || i === "1password_csv" || i === "generic_csv") && (e = de.parseCsv(s), s = JSON.stringify(e), i = "raw"), i === "proton_auth_encrypted") {
                if (!t) throw new v("导入 Proton Authenticator 备份需要密码", "MISSING_PASSWORD");
                e = await pe.parse(s, t), i = "raw", s = JSON.stringify(e), t = void 0;
            }
            if (i === "proton_auth" && (e = pe.parsePlaintext(s), i = "raw", s = JSON.stringify(e)), i === "proton_pass_pgp") {
                if (!t) throw new v("导入 Proton Pass 备份需要密码", "MISSING_PASSWORD");
                e = await Ne.parse(s, t), i = "raw", s = JSON.stringify(e), t = void 0;
            }
            if (i === "ente_encrypted") {
                if (!t) throw new v("导入 Ente Auth 加密备份需要密码", "MISSING_PASSWORD");
                try {
                    e = await Re.decryptAndParse(s, t), i = "raw", t = void 0;
                } catch (n) {
                    throw n.message === "INVALID_FORMAT_OR_PASSWORD" ? new v("解密失败：密码错误或文件格式不兼容", "DECRYPTION_FAILED", n) : new v(`Ente Auth 导入失败：${n.message || String(n)}`, "ENTE_IMPORT_FAILED", n);
                }
            }
            if (i === "2fas_encrypted") {
                if (!t) throw new v("导入 2FAS 加密备份需要密码", "MISSING_PASSWORD");
                try {
                    const n = typeof s == "string" ? JSON.parse(s) : s, a = await this.decrypt2FasEncrypted(t, n);
                    s = JSON.stringify({
                        services: a
                    }), i = "2fas", t = void 0;
                } catch (n) {
                    throw n instanceof v ? n : new v(`2FAS 加密备份解密失败：${n.message || String(n)}`, "TWOFAS_DECRYPTION_FAILED", n);
                }
            }
            if (i === "bitwarden_pass_encrypted") {
                if (!t) throw new v("导入 Bitwarden 加密文件需要密码", "MISSING_PASSWORD");
                try {
                    const n = typeof s == "string" ? JSON.parse(s) : s, a = await this.decryptBitwardenPassEncrypted(t, n);
                    s = JSON.stringify(a), i = "bitwarden_pass_json", t = void 0;
                } catch (n) {
                    throw n instanceof v ? n : new v(`Bitwarden 加密备份解密失败: ${n.message}`, "BITWARDEN_DECRYPTION_FAILED", n);
                }
            }
            if (i === "aegis_encrypted") {
                const n = ee(s), a = await Le.decryptDatabase(n, t);
                s = JSON.stringify(a), i = "aegis", t = void 0;
            } else if (i === "aegis") {
                const n = ee(s);
                s = JSON.stringify(n.db);
            }
            if (i === "nodeauth_encrypted" || i === "encrypted") {
                if (!t) throw new v("导入本系统加密文件需要密码", "MISSING_PASSWORD");
                try {
                    let n = s;
                    const a = typeof s == "string" ? ee(s) : s;
                    a && typeof a == "object" && a.data && (n = a.data);
                    const o = await ge(n, t);
                    e = o.vault || o.accounts || [];
                } catch (n) {
                    throw new v("解密失败：密码错误或文件格式不兼容", "DECRYPTION_FAILED", n);
                }
            } else if (i === "nodeauth_json") {
                const n = typeof s == "string" ? JSON.parse(s) : s;
                Array.isArray(n.accounts) ? e = n.accounts : Array.isArray(n.vault) ? e = n.vault : Array.isArray(n.data) ? e = n.data : n.secrets ? e = n.secrets.map((a)=>{
                    let o = a.account || a.label || "";
                    return typeof o == "string" && o.includes(":") && (o = o.split(":").pop()?.trim() || o), {
                        service: a.issuer || a.service || a.name || "Unknown",
                        account: o,
                        secret: a.secret || "",
                        algorithm: a.algorithm || "SHA1",
                        digits: a.digits || 6,
                        period: a.period || 30
                    };
                }) : Array.isArray(n) && (e = n);
            } else if (i === "2fas") {
                const n = typeof s == "string" ? JSON.parse(s) : s;
                Array.isArray(n.services) && (e = n.services.map((a)=>{
                    let o = a.otp?.account || a.account || a.username || "";
                    typeof o == "string" && o.includes(":") && (o = o.split(":").pop()?.trim() || o);
                    const y = a.otp?.tokenType?.toUpperCase() === "STEAM" || a.tokenType?.toUpperCase() === "STEAM";
                    return {
                        service: a.otp?.issuer || a.name || "Unknown",
                        account: o,
                        secret: a.secret || "",
                        algorithm: y ? "STEAM" : (a.otp?.algorithm || a.algorithm || "SHA1").toUpperCase(),
                        digits: y ? 5 : a.otp?.digits || a.digits || 6,
                        period: a.otp?.period || a.period || 30
                    };
                }));
            } else if (i === "bitwarden_pass_json" || i === "bitwarden_auth_json") {
                const n = typeof s == "string" ? JSON.parse(s) : s;
                Array.isArray(n.items) && n.items.forEach((a)=>{
                    const o = a.login && a.login.totp || a.totp || a.uri || "";
                    if (o) {
                        let y = K(o);
                        if (y) y.service = a.name || y.service, y.account = a.login && a.login.username || a.username || y.account;
                        else {
                            const h = o.replace(/\s/g, "").toUpperCase();
                            /^[A-Z2-7]+=*$/.test(h) && (y = {
                                service: a.name || "Unknown",
                                account: a.login && a.login.username || a.username || "Unknown",
                                secret: h,
                                algorithm: "SHA-1",
                                digits: 6,
                                period: 30,
                                category: ""
                            });
                        }
                        y && e.push(y);
                    }
                });
            } else if (i === "aegis") {
                const n = typeof s == "string" ? JSON.parse(s) : s;
                e = (n.entries || n.db && n.db.entries || []).map((o)=>{
                    const y = o.type?.toLowerCase() === "steam";
                    return {
                        service: o.issuer || o.name || "Unknown",
                        account: o.name || "",
                        secret: o.info?.secret || "",
                        algorithm: y ? "STEAM" : (o.info?.algo || "SHA1").toUpperCase(),
                        digits: y ? 5 : o.info?.digits || 6,
                        period: o.info?.period || 30
                    };
                });
            } else if (i === "generic_text") s.split(`
`).forEach((a)=>{
                const o = K(a.trim());
                o && e.push(o);
            });
            else if (i === "lastpass_auth_json") {
                const n = typeof s == "string" ? JSON.parse(s) : s;
                Array.isArray(n.accounts) && (e = n.accounts.map((a)=>({
                        service: a.issuerName || a.originalIssuerName || "Unknown",
                        account: a.userName || a.originalUserName || "",
                        secret: a.secret || "",
                        algorithm: a.algorithm || "SHA1",
                        digits: a.digits || 6,
                        period: a.timeStep || 30
                    })));
            } else (i === "bitwarden_pass_csv" || i === "bitwarden_auth_csv" || i === "1password_csv" || i === "proton_pass_csv" || i === "dashlane_csv" || i === "generic_csv") && (e = de.parseCsv(s));
            return e.map((n)=>(typeof n.account == "string" && n.account.includes(":") && (n.account = n.account.split(":").pop()?.trim() || n.account), (!n.account || n.account.trim() === "") && (n.account = n.service || "Unknown Account"), n)).filter((n)=>n && n.secret && n.service);
        },
        async parseGaQrImageFile (s) {
            return new Promise((i, t)=>{
                const e = new Image, u = URL.createObjectURL(s);
                e.onload = ()=>{
                    URL.revokeObjectURL(u);
                    const n = document.createElement("canvas"), a = n.getContext("2d", {
                        willReadFrequently: !0
                    }), o = [
                        1,
                        1.5,
                        .5,
                        2,
                        .8
                    ];
                    let y = null;
                    for (const m of o){
                        n.width = e.width * m, n.height = e.height * m, a.imageSmoothingEnabled = !1, a.drawImage(e, 0, 0, n.width, n.height);
                        const w = a.getImageData(0, 0, n.width, n.height);
                        if (y = Ae(w.data, w.width, w.height, {
                            inversionAttempts: "attemptBoth"
                        }), y) break;
                    }
                    if (!y) return t(new v("未能识别出二维码，请确认为完整清晰的截图。", "QR_RECOGNITION_FAILED"));
                    const h = y.data;
                    if (!h.startsWith("otpauth-migration://offline?data=")) return t(new v("不是有效的 Google Authenticator 迁移二维码", "INVALID_GA_QR"));
                    try {
                        let A = new URL(h).searchParams.get("data").replace(/-/g, "+").replace(/_/g, "/");
                        for(; A.length % 4;)A += "=";
                        const x = atob(A), E = new Uint8Array(x.length);
                        for(let c = 0; c < x.length; c++)E[c] = x.charCodeAt(c);
                        i(Oe.decodePayload(E));
                    } catch (m) {
                        t(new v("解析 Google Authenticator 数据失败", "GA_DECODE_FAILED", m));
                    }
                }, e.onerror = ()=>{
                    URL.revokeObjectURL(u), t(new v("图片读取失败，文件可能已损坏", "IMAGE_LOAD_FAILED"));
                }, e.src = u;
            });
        },
        async parse1Pux (s) {
            try {
                const i = s instanceof Uint8Array ? s : new Uint8Array(s), e = we(i)["export.data"];
                if (!e) throw new Error("未能在 .1pux 文件中找到 export.data");
                const u = new TextDecoder().decode(e), n = JSON.parse(u), a = [];
                return (n.accounts || []).forEach((y)=>{
                    (y.vaults || []).forEach((m)=>{
                        (m.items || []).forEach((A)=>{
                            const x = A.overview?.title || "Unknown", E = A.overview?.subtitle || "", c = (r)=>{
                                Array.isArray(r) && r.forEach((f)=>{
                                    f.value && typeof f.value == "object" && f.value.totp && a.push({
                                        service: x,
                                        account: E,
                                        secret: f.value.totp,
                                        algorithm: "SHA1",
                                        digits: 6,
                                        period: 30
                                    });
                                });
                            };
                            c(A.details?.loginFields), Array.isArray(A.details?.sections) && A.details.sections.forEach((r)=>c(r.fields));
                        });
                    });
                }), a;
            } catch (i) {
                throw new v("解析 1Password 备份失败: " + (i.message || String(i)), "ONEPASSWORD_PARSE_FAILED", i);
            }
        },
        async parseSteamMaFile (s) {
            const i = typeof s == "string" ? ee(s) : s;
            if (!i || !i.shared_secret) throw new v("无效的 Steam maFile: 找不到 shared_secret", "INVALID_MAFILE");
            const t = this.base64ToBase32(i.shared_secret);
            let e = i.account_name || "Steam Account";
            return typeof e == "string" && e.includes(":") && (e = e.split(":").pop().trim() || e), [
                {
                    service: "Steam",
                    account: e,
                    secret: t,
                    algorithm: "STEAM",
                    digits: 5,
                    period: 30
                }
            ];
        },
        async saveImportedVault (s) {
            return await ce.importVault(s);
        }
    };
});
export { qe as dataMigrationService, __tla };
