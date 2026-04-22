const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Bkp62iVv.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/vue-core-Daban9YF.js","assets/element-plus-CVRB8fAt.js","assets/element-plus-Dh61In7b.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-H-OGOzP4.css"])))=>i.map(i=>d[i]);
import { _ as q, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { n as F, o as H, l as z, r as y, b as G, p as w, u as K, s as J, g as W, q as _, a as N, __tla as __tla_1 } from "./index-Bkp62iVv.js";
import { l as x, __tla as __tla_2 } from "./resourceRegistry-9eHlhal2.js";
import { f as Z, e as D } from "./vue-core-Daban9YF.js";
let At, B, wt, ht, yt, mt, ft, pt, dt, gt, Q, St, bt, et, nt, at, ot, st;
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
    })()
]).then(async ()=>{
    class m extends Error {
        constructor(r, e = "VAULT_ERROR", n = null){
            super(r), this.name = "vaultError", this.code = e, this.details = n, Error.captureStackTrace && Error.captureStackTrace(this, m);
        }
    }
    const V = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    B = function(t) {
        let r = 0, e = 0, n = 0;
        const s = t.toUpperCase().replace(/=+$/, "").replace(/[^A-Z2-7]/g, ""), o = new Uint8Array(Math.ceil(s.length * 5 / 8));
        for(let i = 0; i < s.length; i++){
            const a = V.indexOf(s[i]);
            a !== -1 && (e = e << 5 | a, r += 5, r >= 8 && (o[n++] = e >>> r - 8 & 255, r -= 8));
        }
        return o.slice(0, n);
    };
    ft = function(t) {
        let r = 0, e = 0, n = "";
        const s = new Uint8Array(t);
        for(let o = 0; o < s.length; o++)for(e = e << 8 | s[o], r += 8; r >= 5;)n += V[e >>> r - 5 & 31], r -= 5;
        return r > 0 && (n += V[e << 5 - r & 31]), n;
    };
    dt = function(t) {
        const r = t.replace(/[^0-9a-fA-F]/g, "");
        if (r.length % 2 !== 0) return new Uint8Array(0);
        const e = new Uint8Array(r.length / 2);
        for(let n = 0; n < r.length; n += 2)e[n / 2] = parseInt(r.substr(n, 2), 16);
        return e;
    };
    ht = function(t) {
        return Array.from(new Uint8Array(t)).map((r)=>r.toString(16).padStart(2, "0")).join("");
    };
    pt = function(t) {
        const r = new Uint8Array(t.length);
        for(let e = 0; e < t.length; e++)r[e] = t.charCodeAt(e);
        return r;
    };
    yt = function(t) {
        return String.fromCharCode.apply(null, new Uint8Array(t));
    };
    gt = function(t) {
        try {
            const r = atob(t.trim()), e = new Uint8Array(r.length);
            for(let n = 0; n < r.length; n++)e[n] = r.charCodeAt(n);
            return e;
        } catch  {
            return new Uint8Array(0);
        }
    };
    mt = function(t) {
        const r = new Uint8Array(t);
        let e = "";
        for(let n = 0; n < r.byteLength; n++)e += String.fromCharCode(r[n]);
        return btoa(e);
    };
    Q = function() {
        const t = localStorage.getItem("app_time_offset"), r = t ? parseInt(t, 10) : 0;
        return Date.now() + r;
    };
    async function j(t, r = 30, e = 6, n = "SHA-1", s = 0) {
        if (!t) return "------";
        try {
            const o = B(t);
            if (o.length === 0) return "------";
            const i = Q() / 1e3, a = Math.floor(i / r) + s, u = new ArrayBuffer(8);
            new DataView(u).setBigUint64(0, BigInt(a), !1);
            const f = {
                name: "HMAC",
                hash: n.includes("-") ? n : n.replace("SHA", "SHA-")
            };
            let d;
            if (F("using hash-wasm fallback for TOTP generation.")) {
                const b = await x("hash-wasm"), { createHMAC: C, createSHA1: S, createSHA256: v, createSHA512: g } = b?.default || b;
                let T;
                f.hash === "SHA-256" ? T = v() : f.hash === "SHA-512" ? T = g() : T = S();
                const O = await C(T, o);
                O.init(), O.update(new Uint8Array(u));
                const M = O.digest("hex"), k = new Uint8Array(M.length / 2);
                for(let L = 0; L < M.length; L += 2)k[L / 2] = parseInt(M.substring(L, L + 2), 16);
                d = k.buffer;
            } else {
                const b = await H.subtle.importKey("raw", o, f, !1, [
                    "sign"
                ]);
                d = await H.subtle.sign("HMAC", b, u);
            }
            const c = new DataView(d), h = c.getUint8(d.byteLength - 1) & 15;
            return (((c.getUint8(h) & 127) << 24 | (c.getUint8(h + 1) & 255) << 16 | (c.getUint8(h + 2) & 255) << 8 | c.getUint8(h + 3) & 255) % Math.pow(10, e)).toString().padStart(e, "0");
        } catch (o) {
            return z.error("TOTP Error", o), "ERROR";
        }
    }
    const R = "23456789BCDFGHJKMNPQRTVWXY";
    async function X(t, r = 30, e = 0) {
        if (!t) return "-----";
        try {
            const n = B(t);
            if (n.length === 0) return "-----";
            const s = Q() / 1e3, o = Math.floor(s / r) + e, i = new ArrayBuffer(8);
            new DataView(i).setBigUint64(0, BigInt(o), !1);
            const u = {
                name: "HMAC",
                hash: "SHA-1"
            };
            let l;
            if (F("using hash-wasm fallback for Steam TOTP generation.")) {
                const p = await x("hash-wasm"), { createHMAC: A, createSHA1: b } = p?.default || p, C = await A(b(), n);
                C.init(), C.update(new Uint8Array(i));
                const S = C.digest("hex"), v = new Uint8Array(S.length / 2);
                for(let g = 0; g < S.length; g += 2)v[g / 2] = parseInt(S.substring(g, g + 2), 16);
                l = v.buffer;
            } else {
                const p = await H.subtle.importKey("raw", n, u, !1, [
                    "sign"
                ]);
                l = await H.subtle.sign("HMAC", p, i);
            }
            const f = new DataView(l), d = f.getUint8(l.byteLength - 1) & 15;
            let c = (f.getUint8(d) & 127) << 24 | (f.getUint8(d + 1) & 255) << 16 | (f.getUint8(d + 2) & 255) << 8 | f.getUint8(d + 3) & 255, h = "";
            for(let p = 0; p < 5; p++)h += R.charAt(c % R.length), c = Math.floor(c / R.length);
            return h;
        } catch (n) {
            return z.error("Steam TOTP Error", n), "ERROR";
        }
    }
    async function Y(t, r = 0, e = 6, n = "SHA-1") {
        if (!t) return "------";
        try {
            const s = B(t);
            if (s.length === 0) return "------";
            const o = new ArrayBuffer(8);
            new DataView(o).setBigUint64(0, BigInt(r), !1);
            const a = {
                name: "HMAC",
                hash: n.includes("-") ? n : n.replace("SHA", "SHA-")
            };
            let u;
            if (F("using hash-wasm fallback for HOTP generation.")) {
                const h = await x("hash-wasm"), { createHMAC: p, createSHA1: A, createSHA256: b, createSHA512: C } = h?.default || h;
                let S;
                a.hash === "SHA-256" ? S = b() : a.hash === "SHA-512" ? S = C() : S = A();
                const v = await p(S, s);
                v.init(), v.update(new Uint8Array(o));
                const g = v.digest("hex"), T = new Uint8Array(g.length / 2);
                for(let O = 0; O < g.length; O += 2)T[O / 2] = parseInt(g.substring(O, O + 2), 16);
                u = T.buffer;
            } else {
                const h = await H.subtle.importKey("raw", s, a, !1, [
                    "sign"
                ]);
                u = await H.subtle.sign("HMAC", h, o);
            }
            const l = new DataView(u), f = l.getUint8(u.byteLength - 1) & 15;
            return (((l.getUint8(f) & 127) << 24 | (l.getUint8(f + 1) & 255) << 16 | (l.getUint8(f + 2) & 255) << 8 | l.getUint8(f + 3) & 255) % Math.pow(10, e)).toString().padStart(e, "0");
        } catch (s) {
            return z.error("HOTP Error", s), "ERROR";
        }
    }
    async function tt(t, r = 30, e = 0) {
        return j(t, r, 8, "SHA1", e);
    }
    St = async function(t, r = 30, e = 6, n = "SHA1", s = "totp", o = 0) {
        return s === "steam" ? X(t, r, o) : s === "blizzard" ? tt(t, r, o) : s === "hotp" ? Y(t, r, e, n) : j(t, r, e, n, o);
    };
    et = function(t = {}) {
        const r = rt(t.type, t), e = {
            ...t,
            type: r
        };
        if (r === "steam") e.digits = 5, e.period = 30, e.algorithm = "SHA1";
        else if (r === "blizzard") e.digits = 8, e.period = 30, e.algorithm = "SHA1";
        else {
            let n = (t.algorithm || "SHA1").toUpperCase().replace(/-/g, "");
            [
                "SHA1",
                "SHA256",
                "SHA512"
            ].includes(n) || (n = "SHA1"), e.algorithm = n;
            let s = parseInt(t.digits || "6", 10);
            (isNaN(s) || s <= 0) && (s = 6), e.digits = s;
            let o = parseInt(t.period || "30", 10);
            (isNaN(o) || o <= 0) && (o = 30), e.period = o;
        }
        return e.service = e.service || e.issuer || "Unknown", e.account = e.account || "Unknown", e.secret = (e.secret || "").replace(/[\s=]/g, "").toUpperCase(), e.counter = parseInt(e.counter || "0", 10), (isNaN(e.counter) || e.counter < 0) && (e.counter = 0), e.category = e.category || "", e;
    };
    function rt(t, r = {}) {
        const e = (t || r.type || "").toLowerCase().trim(), n = (r.algorithm || "").toUpperCase(), s = (r.service || r.issuer || "").toUpperCase(), o = parseInt(r.digits || "0", 10);
        return e === "steam" || e === "steam guard" || n === "STEAM" || o === 5 && s.includes("STEAM") ? "steam" : [
            "blizzard",
            "battle.net"
        ].some((i)=>e.includes(i) || s.includes(i.toUpperCase())) ? "blizzard" : e === "totp" ? "totp" : e === "hotp" || r.hasOwnProperty("counter") && r.counter !== null && r.counter !== void 0 ? "hotp" : "totp";
    }
    nt = function(t) {
        try {
            if (!t) return null;
            if (t.startsWith("steam://")) {
                const c = t.replace("steam://", "").replace(/[\s=]/g, "").toUpperCase();
                return c ? {
                    service: "Steam",
                    account: "Steam Guard",
                    secret: c,
                    type: "steam",
                    digits: 5,
                    period: 30,
                    algorithm: "SHA1",
                    counter: 0,
                    category: ""
                } : null;
            }
            const r = new URL(t);
            if (r.protocol !== "otpauth:") return null;
            let e = r.host || r.hostname;
            !e && r.pathname.startsWith("//") && (e = r.pathname.substring(2).split("/")[0]), e = (e || "").toLowerCase();
            const n = r.searchParams, s = n.get("secret");
            if (!s) return null;
            const o = decodeURIComponent(r.pathname.replace(/^\//, ""));
            let i = n.get("issuer") || "", a = o;
            if (o.includes(":")) {
                const c = o.indexOf(":"), h = o.substring(0, c).trim(), p = o.substring(c + 1).trim();
                i || (i = h), a = p;
            }
            let u = (n.get("algorithm") || "SHA1").toUpperCase().replace(/-/g, "");
            [
                "SHA1",
                "SHA256",
                "SHA512"
            ].includes(u) || (u = "SHA1");
            const l = parseInt(n.get("digits") || "0", 10), f = parseInt(n.get("period") || "30", 10);
            let d = parseInt(n.get("counter") || "0", 10);
            return (isNaN(d) || d < 0) && (d = 0), et({
                service: i,
                account: a,
                secret: s,
                type: e,
                digits: l,
                period: f,
                counter: d,
                algorithm: u
            });
        } catch  {
            return null;
        }
    };
    wt = function(t) {
        const { service: r, account: e, secret: n, algorithm: s = "SHA1", digits: o = 6, period: i = 30, type: a = "totp", counter: u = 0 } = t, l = encodeURIComponent(e ? `${r}:${e}` : r), f = encodeURIComponent(r);
        if (a === "hotp") {
            let d = `otpauth://hotp/${l}?secret=${n}&counter=${u}`;
            return r && (d += `&issuer=${f}`), s !== "SHA1" && (d += `&algorithm=${s}`), o !== 6 && (d += `&digits=${o}`), d;
        }
        return a === "steam" ? `otpauth://steam/${l}?secret=${n}&issuer=${f}&algorithm=SHA1&digits=5` : a === "blizzard" ? `otpauth://totp/${l}?secret=${n}&issuer=${f}&algorithm=SHA1&digits=8&period=30` : `otpauth://totp/${l}?secret=${n}&issuer=${f}&algorithm=${s}&digits=${o}&period=${i}`;
    };
    let I, E, P, $;
    At = {
        "2fas": [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        aegis: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        google_auth: [
            "totp",
            "hotp",
            "blizzard"
        ],
        bitwarden_auth_json: [
            "totp",
            "steam",
            "blizzard"
        ],
        bitwarden_auth_csv: [
            "totp",
            "steam",
            "blizzard"
        ],
        proton_auth: [
            "totp",
            "steam",
            "blizzard"
        ],
        generic_json: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        generic_text: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        generic_csv: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        nodeauth_json: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        nodeauth_encrypted: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        encrypted: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ]
    };
    at = {
        async getTrashList () {
            const t = await y("/api/vault/trash");
            try {
                const { useLayoutStore: r } = await q(async ()=>{
                    const { useLayoutStore: o } = await import("./index-Bkp62iVv.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((i)=>i.x);
                    return {
                        useLayoutStore: o
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), n = r().appTrashRetention;
                let s = t.vault || t.data || (Array.isArray(t) ? t : []);
                if (n > 0 && s.length > 0) {
                    const o = Date.now(), i = n * 24 * 60 * 60 * 1e3, a = o - i, u = s.filter((l)=>l.deletedAt && l.deletedAt < a);
                    if (u.length > 0) {
                        const l = u.map((f)=>this.hardDelete(f.id));
                        Promise.allSettled(l).catch(console.warn), s = s.filter((f)=>!f.deletedAt || f.deletedAt >= a), t.vault = s, t.data && Array.isArray(t.data) && (t.data = s);
                    }
                }
            } catch (r) {
                console.warn("[Trash TTL] Failed to evaluate auto-purge:", r);
            }
            return t;
        },
        async moveToTrash (t) {
            return await y(`/api/vault/${t}/trash_move`, {
                method: "POST"
            });
        },
        async restoreItem (t) {
            return await y(`/api/vault/${t}/trash_restore`, {
                method: "POST"
            });
        },
        async batchMoveToTrash (t) {
            return await y("/api/vault/trash_batch_move", {
                method: "POST",
                body: JSON.stringify({
                    ids: t
                })
            });
        },
        async hardDelete (t) {
            return await y(`/api/vault/${t}/trash_hard`, {
                method: "DELETE"
            });
        },
        async emptyTrash () {
            return await y("/api/vault/trash_empty", {
                method: "DELETE"
            });
        }
    };
    I = D([]);
    E = D(0);
    P = D(!1);
    $ = D(null);
    typeof window < "u" && W("vault:meta:trash_count").then((t)=>{
        typeof t == "number" && (E.value = t);
    }).catch(()=>{});
    ot = function() {
        const t = G(), r = w(), e = K(), n = async ()=>{
            if (!(t.isLocked || r.isOffline || !e.appTrashMode) && !P.value) {
                P.value = !0, $.value = null;
                try {
                    const i = await at.getTrashList(), a = i.vault || i.data || (Array.isArray(i) ? i : []);
                    I.value = a, E.value = a.length, J("vault:meta:trash_count", a.length).catch(()=>{});
                } catch (i) {
                    $.value = i, z.error("[useTrashList] fetchTrash failed:", i);
                } finally{
                    P.value = !1;
                }
            }
        };
        return Z([
            ()=>t.isInitialized,
            ()=>t.isLocked,
            ()=>r.isOffline,
            ()=>e.appTrashMode
        ], ([i, a, u, l])=>{
            if (i) {
                if (a || u || !l) {
                    I.value = [];
                    return;
                }
                n();
            }
        }, {
            immediate: !0
        }), {
            trashVault: I,
            trashCount: E,
            isFetchingTrash: P,
            trashError: $,
            fetchTrash: n,
            filteredTrash: (i = "")=>{
                if (!i) return I.value;
                const a = i.toLowerCase();
                return I.value.filter((u)=>u.service?.toLowerCase().includes(a) || u.account?.toLowerCase().includes(a));
            },
            updateTrashMetadata: (i, a = void 0)=>{
                a !== void 0 ? E.value = a : E.value = Math.max(0, E.value + i), J("vault:meta:trash_count", E.value).catch(()=>{});
            }
        };
    };
    let U;
    U = (t)=>t.isOffline || t.name === "TypeError" || t.message?.toLowerCase().includes("fetch") || t.message?.toLowerCase().includes("network") || typeof navigator < "u" && !navigator.onLine;
    st = {
        async getVault ({ page: t = 1, limit: r = 12, search: e = "", category: n = "" }) {
            if (w().isManualOffline) try {
                const i = await N().getData();
                let a = i?.vault || [];
                if (e && e.trim()) {
                    const c = e.trim().toLowerCase();
                    a = a.filter((h)=>h.service?.toLowerCase().includes(c) || h.account?.toLowerCase().includes(c));
                }
                n && n !== "____UNCATEGORIZED____" ? a = a.filter((c)=>(c.category || "") === n) : n === "____UNCATEGORIZED____" && (a = a.filter((c)=>!c.category || c.category === ""));
                const u = a.length, l = i?.vault || [], f = {};
                l.forEach((c)=>{
                    const h = c.category || "";
                    f[h] = (f[h] || 0) + 1;
                });
                const d = Object.entries(f).map(([c, h])=>({
                        category: c,
                        count: h
                    }));
                return {
                    success: !0,
                    vault: a,
                    total: u,
                    categoryStats: d,
                    pagination: {
                        page: 1,
                        limit: u || 1,
                        totalItems: u,
                        totalPages: 1
                    }
                };
            } catch (o) {
                throw console.error("[VaultService] Offline getVault failed:", o), o;
            }
            try {
                const o = new URLSearchParams({
                    page: t,
                    limit: r,
                    search: e,
                    category: n
                });
                return await y(`/api/vault?${o.toString()}`);
            } catch (o) {
                throw new m("Failed to fetch vault list", "VAULT_FETCH_FAILED", o);
            }
        },
        async createAccount (t) {
            const r = async ()=>{
                const e = N(), n = _(), o = (await e.getData())?.vault || [], i = (l, f)=>`${(l || "").trim().toLowerCase()}:${(f || "").trim().toLowerCase()}`, a = i(t.service, t.account);
                if (o.some((l)=>i(l.service, l.account) === a)) return console.warn("[VaultService] Account already exists locally, skipping duplicate create task"), {
                    success: !0,
                    alreadyExists: !0
                };
                const u = `tmp_${Date.now()}`;
                return n.enqueueAction("create", u, t), {
                    success: !0,
                    pending: !0,
                    item: {
                        ...t,
                        id: u,
                        pending: !0
                    }
                };
            };
            try {
                return w().isOffline ? r() : await y("/api/vault", {
                    method: "POST",
                    body: JSON.stringify(t)
                });
            } catch (e) {
                if (U(e)) return console.warn("[VaultService] Network error, falling back to offline queue", e), r();
                throw new m("Failed to create account", "ACCOUNT_CREATE_FAILED", e);
            }
        },
        async updateAccount (t, r) {
            const e = ()=>(_().enqueueAction("update", t, r), {
                    success: !0,
                    pending: !0
                });
            try {
                return w().isOffline ? e() : await y(`/api/vault/${t}`, {
                    method: "PUT",
                    body: JSON.stringify(r)
                });
            } catch (n) {
                if (U(n)) return e();
                throw new m("Failed to update account", "ACCOUNT_UPDATE_FAILED", n);
            }
        },
        async incrementCounter (t, r) {
            const e = ()=>(_().enqueueAction("increment", t, {
                    updatedAt: r
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return w().isOffline ? e() : await y(`/api/vault/${t}/increment`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        updatedAt: r
                    })
                });
            } catch (n) {
                if (U(n)) return e();
                throw new m("Failed to increment counter", "ACCOUNT_INCREMENT_FAILED", n);
            }
        },
        async deleteAccount (t, r = {}) {
            const e = ()=>(_().enqueueAction("delete", t, r), {
                    success: !0,
                    pending: !0
                });
            try {
                return w().isOffline ? e() : await y(`/api/vault/${t}`, {
                    method: "DELETE"
                });
            } catch (n) {
                const s = n.details?.statusCode || n.statusCode, o = n.details?.message || n.message;
                if (s === 404 || o === "account_not_found") return console.warn("[VaultService] Account already deleted on server, treating as success:", t), {
                    success: !0
                };
                if (U(n)) return e();
                throw new m("Failed to delete account", "ACCOUNT_DELETE_FAILED", n);
            }
        },
        async batchDelete (t) {
            const r = ()=>{
                const e = _();
                for (const n of t)e.enqueueAction("delete", n);
                return {
                    success: !0,
                    pending: !0,
                    deleted: t.length
                };
            };
            try {
                return w().isOffline ? r() : await y("/api/vault/batch-delete", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (e) {
                if (U(e)) return r();
                throw new m("Failed to batch delete accounts", "ACCOUNTS_BATCH_DELETE_FAILED", e);
            }
        },
        async reorder (t) {
            const r = ()=>(_().enqueueAction("reorder", "global_order", {
                    ids: t
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return w().isOffline ? r() : await y("/api/vault/reorder", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (e) {
                if (U(e)) return r();
                throw new m("Failed to reorder accounts", "VAULT_REORDER_FAILED", e);
            }
        },
        async moveSortOrder (t, r) {
            const e = ()=>(_().enqueueAction("move-sort", t, {
                    sortOrder: r
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return w().isOffline ? e() : await y(`/api/vault/${t}/sort-order`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        sortOrder: r
                    })
                });
            } catch (n) {
                if (U(n)) return e();
                throw new m("Failed to move sort order", "VAULT_SORT_MOVE_FAILED", n);
            }
        },
        async addFromUri (t, r = "扫码添加") {
            const e = async ()=>{
                const n = nt(t);
                if (!n) throw new Error("Invalid OTP URI");
                return n.category = r, await this.createAccount(n);
            };
            try {
                return w().isOffline ? await e() : await y("/api/vault/add-from-uri", {
                    method: "POST",
                    body: JSON.stringify({
                        uri: t,
                        category: r
                    })
                });
            } catch (n) {
                if (U(n)) return console.warn("[VaultService] Network error in addFromUri, falling back"), await e();
                throw new m("Failed to add account from URI", "ACCOUNT_ADD_URI_FAILED", n);
            }
        },
        async restoreBlizzardNet (t, r, e) {
            return await y("/api/vault/import/blizzard-net", {
                method: "POST",
                body: JSON.stringify({
                    serial: t,
                    restoreCode: r,
                    ssoToken: e
                })
            });
        },
        async importVault (t, r = "raw") {
            const e = async ()=>{
                const n = N(), s = _(), i = (await n.getData())?.vault || [], a = (c, h)=>`${(c || "").trim().toLowerCase()}:${(h || "").trim().toLowerCase()}`, u = new Set(i.map((c)=>a(c.service, c.account)));
                let l = 0;
                const f = Array.isArray(t) ? t : typeof t == "string" ? JSON.parse(t) : [
                    t
                ], d = [];
                for (const c of f){
                    if (!c) continue;
                    const h = a(c.service, c.account);
                    if (u.has(h)) {
                        console.debug("[VaultService] Skipping duplicate import in sync queue:", h);
                        continue;
                    }
                    let p;
                    try {
                        p = JSON.parse(JSON.stringify(c));
                    } catch  {
                        console.warn("[importVault] Account not serializable, skipping:", c);
                        continue;
                    }
                    const A = p.id || Date.now().toString(36) + Math.random().toString(36).substr(2);
                    p.id = A, d.push({
                        type: "create",
                        id: A,
                        data: p
                    }), l++, u.add(h);
                }
                return d.length > 0 && await s.enqueueActions(d), {
                    success: !0,
                    count: l,
                    pending: !0
                };
            };
            try {
                return w().isOffline ? await e() : await y("/api/vault/import", {
                    method: "POST",
                    body: JSON.stringify({
                        type: r,
                        content: typeof t == "string" ? t : JSON.stringify(t)
                    })
                });
            } catch (n) {
                if (U(n)) return await e();
                throw new m("Failed to import vault data", "VAULT_IMPORT_FAILED", n);
            }
        },
        async syncOfflineActions () {
            const t = _();
            if (t.hasPendingChanges && !t.isSyncing) try {
                t.isSyncing = !0;
                const r = t.syncQueue.filter((a)=>a.type === "move-sort"), e = t.syncQueue.filter((a)=>a.type !== "move-sort"), n = await Promise.allSettled(r.map((a)=>y(`/api/vault/${a.id}/sort-order`, {
                        method: "PATCH",
                        body: JSON.stringify({
                            sortOrder: a.data.sortOrder
                        })
                    }))), s = new Set(r.filter((a, u)=>n[u].status === "fulfilled").map((a)=>a.id));
                if (e.length === 0) return t.syncQueue = t.syncQueue.filter((a)=>!s.has(a.id)), await t.saveQueue(), {
                    success: !0
                };
                const o = e.map((a)=>({
                        id: a.id,
                        type: a.type,
                        data: {
                            ...a.data,
                            updatedAt: a.baselineUpdatedAt
                        }
                    })), i = await y("/api/vault/sync", {
                    method: "POST",
                    body: JSON.stringify({
                        actions: o
                    })
                });
                if (i.success && i.results) {
                    const a = i.results, u = [];
                    for(let d = 0; d < e.length; d++){
                        const c = e[d], h = a[d];
                        if (!h?.success) {
                            const p = h?.code || "error", A = h?.error || "", b = p === "conflict_detected" || A === "conflict_detected" || p === "409";
                            if (p === "404" || A === "account_not_found" || p === "account_not_found") continue;
                            if (b) {
                                u.push({
                                    ...c,
                                    status: "conflict"
                                });
                                const { useOfflineStore: S } = await q(async ()=>{
                                    const { useOfflineStore: g } = await import("./index-Bkp62iVv.js").then(async (m)=>{
                                        await m.__tla;
                                        return m;
                                    }).then((T)=>T.y);
                                    return {
                                        useOfflineStore: g
                                    };
                                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8]));
                                S().registerConflict(c.id);
                            } else u.push(c);
                        }
                    }
                    const l = t.syncQueue.filter((d)=>d.type === "move-sort" && !s.has(d.id));
                    t.syncQueue = [
                        ...u,
                        ...l
                    ], await t.saveQueue();
                    const { fetchTrash: f } = ot();
                    f();
                }
                return i;
            } catch (r) {
                throw console.error("[Sync] Batch sync failed:", r), new m("Offline sync failed", "SYNC_FAILED", r);
            } finally{
                t.isSyncing = !1;
            }
        }
    };
    bt = Object.freeze(Object.defineProperty({
        __proto__: null,
        vaultService: st
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { At as O, B as a, wt as b, ht as c, yt as d, mt as e, ft as f, pt as g, dt as h, gt as i, Q as j, St as k, bt as l, et as n, nt as p, at as t, ot as u, st as v, __tla };
