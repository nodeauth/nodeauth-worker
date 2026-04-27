const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-NqcSa8kS.js","assets/pdf-utils-r4RjNe6V.js","assets/compression-utils-CXh1ITwj.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh0klhaa.js","assets/element-plus-Dh61In7b.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CLSE-HWx.css"])))=>i.map(i=>d[i]);
import { _ as z, __tla as __tla_0 } from "./pdf-utils-r4RjNe6V.js";
import { n as F, y as Q, z as B, B as L, l as D, r as g, b as G, C as w, u as K, s as q, g as W, D as b, a as M, __tla as __tla_1 } from "./index-NqcSa8kS.js";
import { l as x, __tla as __tla_2 } from "./resourceRegistry-BAWP-Piz.js";
import { f as X, e as N } from "./vue-core-Daban9YF.js";
let pt, ht, dt, ft, et, nt, at, ot, st;
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
    async function j(t, n = 30, e = 6, r = "SHA-1", s = 0) {
        if (!t) return "------";
        try {
            const o = F(t);
            if (o.length === 0) return "------";
            const i = Q() / 1e3, a = Math.floor(i / n) + s, u = new ArrayBuffer(8);
            new DataView(u).setBigUint64(0, BigInt(a), !1);
            const f = {
                name: "HMAC",
                hash: r.includes("-") ? r : r.replace("SHA", "SHA-")
            };
            let d;
            if (B("using hash-wasm fallback for TOTP generation.")) {
                const v = await x("hash-wasm"), { createHMAC: C, createSHA1: m, createSHA256: _, createSHA512: y } = v?.default || v;
                let T;
                f.hash === "SHA-256" ? T = _() : f.hash === "SHA-512" ? T = y() : T = m();
                const O = await C(T, o);
                O.init(), O.update(new Uint8Array(u));
                const R = O.digest("hex"), J = new Uint8Array(R.length / 2);
                for(let H = 0; H < R.length; H += 2)J[H / 2] = parseInt(R.substring(H, H + 2), 16);
                d = J.buffer;
            } else {
                const v = await L.subtle.importKey("raw", o, f, !1, [
                    "sign"
                ]);
                d = await L.subtle.sign("HMAC", v, u);
            }
            const c = new DataView(d), p = c.getUint8(d.byteLength - 1) & 15;
            return (((c.getUint8(p) & 127) << 24 | (c.getUint8(p + 1) & 255) << 16 | (c.getUint8(p + 2) & 255) << 8 | c.getUint8(p + 3) & 255) % Math.pow(10, e)).toString().padStart(e, "0");
        } catch (o) {
            return D.error("TOTP Error", o), "ERROR";
        }
    }
    const k = "23456789BCDFGHJKMNPQRTVWXY";
    async function Y(t, n = 30, e = 0) {
        if (!t) return "-----";
        try {
            const r = F(t);
            if (r.length === 0) return "-----";
            const s = Q() / 1e3, o = Math.floor(s / n) + e, i = new ArrayBuffer(8);
            new DataView(i).setBigUint64(0, BigInt(o), !1);
            const u = {
                name: "HMAC",
                hash: "SHA-1"
            };
            let l;
            if (B("using hash-wasm fallback for Steam TOTP generation.")) {
                const h = await x("hash-wasm"), { createHMAC: A, createSHA1: v } = h?.default || h, C = await A(v(), r);
                C.init(), C.update(new Uint8Array(i));
                const m = C.digest("hex"), _ = new Uint8Array(m.length / 2);
                for(let y = 0; y < m.length; y += 2)_[y / 2] = parseInt(m.substring(y, y + 2), 16);
                l = _.buffer;
            } else {
                const h = await L.subtle.importKey("raw", r, u, !1, [
                    "sign"
                ]);
                l = await L.subtle.sign("HMAC", h, i);
            }
            const f = new DataView(l), d = f.getUint8(l.byteLength - 1) & 15;
            let c = (f.getUint8(d) & 127) << 24 | (f.getUint8(d + 1) & 255) << 16 | (f.getUint8(d + 2) & 255) << 8 | f.getUint8(d + 3) & 255, p = "";
            for(let h = 0; h < 5; h++)p += k.charAt(c % k.length), c = Math.floor(c / k.length);
            return p;
        } catch (r) {
            return D.error("Steam TOTP Error", r), "ERROR";
        }
    }
    async function Z(t, n = 0, e = 6, r = "SHA-1") {
        if (!t) return "------";
        try {
            const s = F(t);
            if (s.length === 0) return "------";
            const o = new ArrayBuffer(8);
            new DataView(o).setBigUint64(0, BigInt(n), !1);
            const a = {
                name: "HMAC",
                hash: r.includes("-") ? r : r.replace("SHA", "SHA-")
            };
            let u;
            if (B("using hash-wasm fallback for HOTP generation.")) {
                const p = await x("hash-wasm"), { createHMAC: h, createSHA1: A, createSHA256: v, createSHA512: C } = p?.default || p;
                let m;
                a.hash === "SHA-256" ? m = v() : a.hash === "SHA-512" ? m = C() : m = A();
                const _ = await h(m, s);
                _.init(), _.update(new Uint8Array(o));
                const y = _.digest("hex"), T = new Uint8Array(y.length / 2);
                for(let O = 0; O < y.length; O += 2)T[O / 2] = parseInt(y.substring(O, O + 2), 16);
                u = T.buffer;
            } else {
                const p = await L.subtle.importKey("raw", s, a, !1, [
                    "sign"
                ]);
                u = await L.subtle.sign("HMAC", p, o);
            }
            const l = new DataView(u), f = l.getUint8(u.byteLength - 1) & 15;
            return (((l.getUint8(f) & 127) << 24 | (l.getUint8(f + 1) & 255) << 16 | (l.getUint8(f + 2) & 255) << 8 | l.getUint8(f + 3) & 255) % Math.pow(10, e)).toString().padStart(e, "0");
        } catch (s) {
            return D.error("HOTP Error", s), "ERROR";
        }
    }
    async function tt(t, n = 30, e = 0) {
        return j(t, n, 8, "SHA1", e);
    }
    ft = async function(t, n = 30, e = 6, r = "SHA1", s = "totp", o = 0) {
        return s === "steam" ? Y(t, n, o) : s === "blizzard" ? tt(t, n, o) : s === "hotp" ? Z(t, n, e, r) : j(t, n, e, r, o);
    };
    et = function(t = {}) {
        const n = rt(t.type, t), e = {
            ...t,
            type: n
        };
        if (n === "steam") e.digits = 5, e.period = 30, e.algorithm = "SHA1";
        else if (n === "blizzard") e.digits = 8, e.period = 30, e.algorithm = "SHA1";
        else {
            let r = (t.algorithm || "SHA1").toUpperCase().replace(/-/g, "");
            [
                "SHA1",
                "SHA256",
                "SHA512"
            ].includes(r) || (r = "SHA1"), e.algorithm = r;
            let s = parseInt(t.digits || "6", 10);
            (isNaN(s) || s <= 0) && (s = 6), e.digits = s;
            let o = parseInt(t.period || "30", 10);
            (isNaN(o) || o <= 0) && (o = 30), e.period = o;
        }
        return e.service = e.service || e.issuer || "Unknown", e.account = e.account || "Unknown", e.secret = (e.secret || "").replace(/[\s=]/g, "").toUpperCase(), e.counter = parseInt(e.counter || "0", 10), (isNaN(e.counter) || e.counter < 0) && (e.counter = 0), e.category = e.category || "", e;
    };
    function rt(t, n = {}) {
        const e = (t || n.type || "").toLowerCase().trim(), r = (n.algorithm || "").toUpperCase(), s = (n.service || n.issuer || "").toUpperCase(), o = parseInt(n.digits || "0", 10);
        return e === "steam" || e === "steam guard" || r === "STEAM" || o === 5 && s.includes("STEAM") ? "steam" : [
            "blizzard",
            "battle.net"
        ].some((i)=>e.includes(i) || s.includes(i.toUpperCase())) ? "blizzard" : e === "totp" ? "totp" : e === "hotp" || n.hasOwnProperty("counter") && n.counter !== null && n.counter !== void 0 ? "hotp" : "totp";
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
            const n = new URL(t);
            if (n.protocol !== "otpauth:") return null;
            let e = n.host || n.hostname;
            !e && n.pathname.startsWith("//") && (e = n.pathname.substring(2).split("/")[0]), e = (e || "").toLowerCase();
            const r = n.searchParams, s = r.get("secret");
            if (!s) return null;
            const o = decodeURIComponent(n.pathname.replace(/^\//, ""));
            let i = r.get("issuer") || "", a = o;
            if (o.includes(":")) {
                const c = o.indexOf(":"), p = o.substring(0, c).trim(), h = o.substring(c + 1).trim();
                i || (i = p), a = h;
            }
            let u = (r.get("algorithm") || "SHA1").toUpperCase().replace(/-/g, "");
            [
                "SHA1",
                "SHA256",
                "SHA512"
            ].includes(u) || (u = "SHA1");
            const l = parseInt(r.get("digits") || "0", 10), f = parseInt(r.get("period") || "30", 10);
            let d = parseInt(r.get("counter") || "0", 10);
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
    dt = function(t) {
        const { service: n, account: e, secret: r, algorithm: s = "SHA1", digits: o = 6, period: i = 30, type: a = "totp", counter: u = 0 } = t, l = encodeURIComponent(e ? `${n}:${e}` : n), f = encodeURIComponent(n);
        if (a === "hotp") {
            let d = `otpauth://hotp/${l}?secret=${r}&counter=${u}`;
            return n && (d += `&issuer=${f}`), s !== "SHA1" && (d += `&algorithm=${s}`), o !== 6 && (d += `&digits=${o}`), d;
        }
        return a === "steam" ? `otpauth://steam/${l}?secret=${r}&issuer=${f}&algorithm=SHA1&digits=5` : a === "blizzard" ? `otpauth://totp/${l}?secret=${r}&issuer=${f}&algorithm=SHA1&digits=8&period=30` : `otpauth://totp/${l}?secret=${r}&issuer=${f}&algorithm=${s}&digits=${o}&period=${i}`;
    };
    pt = {
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
        generic_otpauth: [
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
        nodeauth_csv: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        nodeauth_html: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ]
    };
    class S extends Error {
        constructor(n, e = "VAULT_ERROR", r = null){
            super(n), this.name = "vaultError", this.code = e, this.details = r, Error.captureStackTrace && Error.captureStackTrace(this, S);
        }
    }
    let I, U, P, V;
    at = {
        async getTrashList () {
            const t = await g("/api/vault/trash");
            try {
                const { useLayoutStore: n } = await z(async ()=>{
                    const { useLayoutStore: o } = await import("./index-NqcSa8kS.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((i)=>i.M);
                    return {
                        useLayoutStore: o
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), r = n().appTrashRetention;
                let s = t.vault || t.data || (Array.isArray(t) ? t : []);
                if (r > 0 && s.length > 0) {
                    const o = Date.now(), i = r * 24 * 60 * 60 * 1e3, a = o - i, u = s.filter((l)=>l.deletedAt && l.deletedAt < a);
                    if (u.length > 0) {
                        const l = u.map((f)=>this.hardDelete(f.id));
                        Promise.allSettled(l).catch(console.warn), s = s.filter((f)=>!f.deletedAt || f.deletedAt >= a), t.vault = s, t.data && Array.isArray(t.data) && (t.data = s);
                    }
                }
            } catch (n) {
                console.warn("[Trash TTL] Failed to evaluate auto-purge:", n);
            }
            return t;
        },
        async moveToTrash (t) {
            return await g(`/api/vault/${t}/trash_move`, {
                method: "POST"
            });
        },
        async restoreItem (t) {
            return await g(`/api/vault/${t}/trash_restore`, {
                method: "POST"
            });
        },
        async batchMoveToTrash (t) {
            return await g("/api/vault/trash_batch_move", {
                method: "POST",
                body: JSON.stringify({
                    ids: t
                })
            });
        },
        async hardDelete (t) {
            return await g(`/api/vault/${t}/trash_hard`, {
                method: "DELETE"
            });
        },
        async emptyTrash () {
            return await g("/api/vault/trash_empty", {
                method: "DELETE"
            });
        }
    };
    I = N([]);
    U = N(0);
    P = N(!1);
    V = N(null);
    typeof window < "u" && W("vault:meta:trash_count").then((t)=>{
        typeof t == "number" && (U.value = t);
    }).catch(()=>{});
    ot = function() {
        const t = G(), n = w(), e = K(), r = async ()=>{
            if (!(t.isLocked || n.isOffline || !e.appTrashMode) && !P.value) {
                P.value = !0, V.value = null;
                try {
                    const i = await at.getTrashList(), a = i.vault || i.data || (Array.isArray(i) ? i : []);
                    I.value = a, U.value = a.length, q("vault:meta:trash_count", a.length).catch(()=>{});
                } catch (i) {
                    V.value = i, D.error("[useTrashList] fetchTrash failed:", i);
                } finally{
                    P.value = !1;
                }
            }
        };
        return X([
            ()=>t.isInitialized,
            ()=>t.isLocked,
            ()=>n.isOffline,
            ()=>e.appTrashMode
        ], ([i, a, u, l])=>{
            if (i) {
                if (a || u || !l) {
                    I.value = [];
                    return;
                }
                r();
            }
        }, {
            immediate: !0
        }), {
            trashVault: I,
            trashCount: U,
            isFetchingTrash: P,
            trashError: V,
            fetchTrash: r,
            filteredTrash: (i = "")=>{
                const a = I.value;
                if (!i) return a;
                const u = i.toLowerCase();
                return a.filter((l)=>l.service?.toLowerCase().includes(u) || l.account?.toLowerCase().includes(u));
            },
            updateTrashMetadata: (i, a = void 0)=>{
                a !== void 0 ? U.value = a : U.value = Math.max(0, U.value + i), q("vault:meta:trash_count", U.value).catch(()=>{});
            }
        };
    };
    let $, E;
    $ = async (t)=>{
        if (t && t.secret && !t.secret.startsWith("nodeauth:")) {
            const { useAppLockStore: n } = await z(async ()=>{
                const { useAppLockStore: s } = await import("./index-NqcSa8kS.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((o)=>o.Q);
                return {
                    useAppLockStore: s
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), r = await n().getMaskingKey();
            if (r) {
                const { maskSecretFront: s } = await z(async ()=>{
                    const { maskSecretFront: o } = await import("./index-NqcSa8kS.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((i)=>i.P);
                    return {
                        maskSecretFront: o
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8]));
                t.secret = await s(t.secret, r);
            }
        }
    };
    E = (t)=>t.isOffline || t.name === "TypeError" || t.message?.toLowerCase().includes("fetch") || t.message?.toLowerCase().includes("network") || typeof navigator < "u" && !navigator.onLine;
    st = {
        async getVault ({ page: t = 1, limit: n = 12, search: e = "", category: r = "" }) {
            if (w().isManualOffline) try {
                const i = await M().getData();
                let a = i?.vault || [];
                if (e && e.trim()) {
                    const c = e.trim().toLowerCase();
                    a = a.filter((p)=>p.service?.toLowerCase().includes(c) || p.account?.toLowerCase().includes(c));
                }
                r && r !== "____UNCATEGORIZED____" ? a = a.filter((c)=>(c.category || "") === r) : r === "____UNCATEGORIZED____" && (a = a.filter((c)=>!c.category || c.category === ""));
                const u = a.length, l = i?.vault || [], f = {};
                l.forEach((c)=>{
                    const p = c.category || "";
                    f[p] = (f[p] || 0) + 1;
                });
                const d = Object.entries(f).map(([c, p])=>({
                        category: c,
                        count: p
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
                    limit: n,
                    search: e,
                    category: r
                });
                return await g(`/api/vault?${o.toString()}`);
            } catch (o) {
                throw new S("Failed to fetch vault list", "VAULT_FETCH_FAILED", o);
            }
        },
        async createAccount (t) {
            await $(t);
            const n = async ()=>{
                const e = M(), r = b(), o = (await e.getData())?.vault || [], i = (l, f)=>`${(l || "").trim().toLowerCase()}:${(f || "").trim().toLowerCase()}`, a = i(t.service, t.account);
                if (o.some((l)=>i(l.service, l.account) === a)) return console.warn("[VaultService] Account already exists locally, skipping duplicate create task"), {
                    success: !0,
                    alreadyExists: !0
                };
                const u = `tmp_${Date.now()}`;
                return r.enqueueAction("create", u, t), {
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
                return w().isOffline ? n() : await g("/api/vault", {
                    method: "POST",
                    body: JSON.stringify(t)
                });
            } catch (e) {
                if (E(e)) return console.warn("[VaultService] Network error, falling back to offline queue", e), n();
                throw new S("Failed to create account", "ACCOUNT_CREATE_FAILED", e);
            }
        },
        async updateAccount (t, n) {
            await $(n);
            const e = ()=>(b().enqueueAction("update", t, n), {
                    success: !0,
                    pending: !0
                });
            try {
                return w().isOffline ? e() : await g(`/api/vault/${t}`, {
                    method: "PUT",
                    body: JSON.stringify(n)
                });
            } catch (r) {
                if (E(r)) return e();
                throw new S("Failed to update account", "ACCOUNT_UPDATE_FAILED", r);
            }
        },
        async incrementCounter (t, n) {
            const e = ()=>(b().enqueueAction("increment", t, {
                    updatedAt: n
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return w().isOffline ? e() : await g(`/api/vault/${t}/increment`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        updatedAt: n
                    })
                });
            } catch (r) {
                if (E(r)) return e();
                throw new S("Failed to increment counter", "ACCOUNT_INCREMENT_FAILED", r);
            }
        },
        async deleteAccount (t, n = {}) {
            const e = ()=>(b().enqueueAction("delete", t, n), {
                    success: !0,
                    pending: !0
                });
            try {
                return w().isOffline ? e() : await g(`/api/vault/${t}`, {
                    method: "DELETE"
                });
            } catch (r) {
                const s = r.details?.statusCode || r.statusCode, o = r.details?.message || r.message;
                if (s === 404 || o === "account_not_found") return console.warn("[VaultService] Account already deleted on server, treating as success:", t), {
                    success: !0
                };
                if (E(r)) return e();
                throw new S("Failed to delete account", "ACCOUNT_DELETE_FAILED", r);
            }
        },
        async batchDelete (t) {
            const n = ()=>{
                const e = b();
                for (const r of t)e.enqueueAction("delete", r);
                return {
                    success: !0,
                    pending: !0,
                    deleted: t.length
                };
            };
            try {
                return w().isOffline ? n() : await g("/api/vault/batch-delete", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (e) {
                if (E(e)) return n();
                throw new S("Failed to batch delete accounts", "ACCOUNTS_BATCH_DELETE_FAILED", e);
            }
        },
        async reorder (t) {
            const n = ()=>(b().enqueueAction("reorder", "global_order", {
                    ids: t
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return w().isOffline ? n() : await g("/api/vault/reorder", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (e) {
                if (E(e)) return n();
                throw new S("Failed to reorder accounts", "VAULT_REORDER_FAILED", e);
            }
        },
        async moveSortOrder (t, n) {
            const e = ()=>(b().enqueueAction("move-sort", t, {
                    sortOrder: n
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return w().isOffline ? e() : await g(`/api/vault/${t}/sort-order`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        sortOrder: n
                    })
                });
            } catch (r) {
                if (E(r)) return e();
                throw new S("Failed to move sort order", "VAULT_SORT_MOVE_FAILED", r);
            }
        },
        async addFromUri (t, n = "扫码添加") {
            const e = async ()=>{
                const r = nt(t);
                if (!r) throw new Error("Invalid OTP URI");
                return r.category = n, await this.createAccount(r);
            };
            try {
                return w().isOffline ? await e() : await g("/api/vault/add-from-uri", {
                    method: "POST",
                    body: JSON.stringify({
                        uri: t,
                        category: n
                    })
                });
            } catch (r) {
                if (E(r)) return console.warn("[VaultService] Network error in addFromUri, falling back"), await e();
                throw new S("Failed to add account from URI", "ACCOUNT_ADD_URI_FAILED", r);
            }
        },
        async restoreBlizzardNet (t, n, e) {
            return await g("/api/vault/import/blizzard-net", {
                method: "POST",
                body: JSON.stringify({
                    serial: t,
                    restoreCode: n,
                    ssoToken: e
                })
            });
        },
        async importVault (t, n = "raw") {
            const e = async ()=>{
                const r = M(), s = b(), i = (await r.getData())?.vault || [], a = (c, p)=>`${(c || "").trim().toLowerCase()}:${(p || "").trim().toLowerCase()}`, u = new Set(i.map((c)=>a(c.service, c.account)));
                let l = 0;
                const f = Array.isArray(t) ? t : typeof t == "string" ? JSON.parse(t) : [
                    t
                ], d = [];
                for (const c of f){
                    if (!c) continue;
                    const p = a(c.service, c.account);
                    if (u.has(p)) {
                        console.debug("[VaultService] Skipping duplicate import in sync queue:", p);
                        continue;
                    }
                    let h;
                    try {
                        h = JSON.parse(JSON.stringify(c));
                    } catch  {
                        console.warn("[importVault] Account not serializable, skipping:", c);
                        continue;
                    }
                    const A = h.id || Date.now().toString(36) + Math.random().toString(36).substr(2);
                    h.id = A, await $(h), d.push({
                        type: "create",
                        id: A,
                        data: h
                    }), l++, u.add(p);
                }
                return d.length > 0 && await s.enqueueActions(d), {
                    success: !0,
                    count: l,
                    pending: !0
                };
            };
            try {
                return w().isOffline ? await e() : await g("/api/vault/import", {
                    method: "POST",
                    body: JSON.stringify({
                        type: n,
                        content: typeof t == "string" ? t : JSON.stringify(t)
                    })
                });
            } catch (r) {
                if (E(r)) return await e();
                throw new S("Failed to import vault data", "VAULT_IMPORT_FAILED", r);
            }
        },
        async syncOfflineActions () {
            const t = b();
            if (t.hasPendingChanges && !t.isSyncing) try {
                t.isSyncing = !0;
                const n = t.syncQueue.filter((a)=>a.type === "move-sort"), e = t.syncQueue.filter((a)=>a.type !== "move-sort"), r = await Promise.allSettled(n.map((a)=>g(`/api/vault/${a.id}/sort-order`, {
                        method: "PATCH",
                        body: JSON.stringify({
                            sortOrder: a.data.sortOrder
                        })
                    }))), s = new Set(n.filter((a, u)=>r[u].status === "fulfilled").map((a)=>a.id));
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
                    })), i = await g("/api/vault/sync", {
                    method: "POST",
                    body: JSON.stringify({
                        actions: o
                    })
                });
                if (i.success && i.results) {
                    const a = i.results, u = [];
                    for(let d = 0; d < e.length; d++){
                        const c = e[d], p = a[d];
                        if (!p?.success) {
                            const h = p?.code || "error", A = p?.error || "", v = h === "conflict_detected" || A === "conflict_detected" || h === "409";
                            if (h === "404" || A === "account_not_found" || h === "account_not_found") continue;
                            if (v) {
                                u.push({
                                    ...c,
                                    status: "conflict"
                                });
                                const { useOfflineStore: m } = await z(async ()=>{
                                    const { useOfflineStore: y } = await import("./index-NqcSa8kS.js").then(async (m)=>{
                                        await m.__tla;
                                        return m;
                                    }).then((T)=>T.N);
                                    return {
                                        useOfflineStore: y
                                    };
                                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8]));
                                m().registerConflict(c.id);
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
            } catch (n) {
                throw console.error("[Sync] Batch sync failed:", n), new S("Offline sync failed", "SYNC_FAILED", n);
            } finally{
                t.isSyncing = !1;
            }
        }
    };
    ht = Object.freeze(Object.defineProperty({
        __proto__: null,
        vaultService: st
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { pt as O, ht as a, dt as b, ft as g, et as n, nt as p, at as t, ot as u, st as v, __tla };
