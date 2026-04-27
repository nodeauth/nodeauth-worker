const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qr-utils-C-MFlKj_.js","assets/element-plus-Dh0klhaa.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/index-NqcSa8kS.js","assets/pdf-utils-r4RjNe6V.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CLSE-HWx.css"])))=>i.map(i=>d[i]);
import { _ as ne, __tla as __tla_0 } from "./pdf-utils-r4RjNe6V.js";
import { n as pe, O as _e, p as V, b as ee, v as fe, __tla as __tla_1 } from "./vaultService-DmxSVr-T.js";
import { B as xe, S as le, a as Se, b as G, c as Ee, d as Te, M as ve, s as Ie, F as Pe, e as de, f as Le, g as Oe } from "./wa-sqlite-l0JLtCOf.js";
import { l as ue, d as Ue, e as De, __tla as __tla_2 } from "./index-NqcSa8kS.js";
import { a as Re } from "./qr-utils-C-MFlKj_.js";
import { a as he } from "./argon2-browser-qelKfid9.js";
import { l as be, __tla as __tla_3 } from "./resourceRegistry-BAWP-Piz.js";
import { argon2id as Ce } from "./hash-wasm-Dup_VHWH.js";
import { unzipSync as Ne } from "./compression-utils-CXh1ITwj.js";
import "./vue-core-Daban9YF.js";
import "./element-plus-Dh0klhaa.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let at, _t;
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
    class P extends Error {
        constructor(r, e = "MIGRATION_ERROR", t = null){
            super(r), this.name = "migrationError", this.code = e, this.details = t;
        }
    }
    function q(n) {
        const r = new Uint8Array(n.length / 2);
        for(let e = 0; e < n.length; e += 2)r[e / 2] = parseInt(n.substring(e, e + 2), 16);
        return r;
    }
    function Fe(n) {
        const r = atob(n), e = new Uint8Array(r.length);
        for(let t = 0; t < r.length; t++)e[t] = r.charCodeAt(t);
        return e;
    }
    function j(n) {
        try {
            return JSON.parse(n);
        } catch  {
            return null;
        }
    }
    const Me = {
        detect (n, r) {
            if (n instanceof ArrayBuffer || n instanceof Uint8Array) {
                const t = n instanceof Uint8Array ? n : new Uint8Array(n), o = "SQLite format 3";
                let i = !0;
                for(let l = 0; l < o.length && l < t.length; l++)if (t[l] !== o.charCodeAt(l)) {
                    i = !1;
                    break;
                }
                if (i) return "phonefactor";
                try {
                    const l = new TextDecoder("utf-8", {
                        fatal: !1
                    }).decode(t);
                    if (l.includes("accounts") && (l.includes("oath_secret_key") || l.includes("encrypted_oath_secret_key"))) return "phonefactor";
                } catch  {}
            }
            if (r && r.toLowerCase().includes("phonefactor")) return "phonefactor";
            let e = n;
            if (n instanceof ArrayBuffer || n instanceof Uint8Array) try {
                const t = n instanceof Uint8Array ? n : new Uint8Array(n);
                e = new TextDecoder("utf-8", {
                    fatal: !1
                }).decode(t);
            } catch  {
                e = "";
            }
            if (r && r.toLowerCase().endsWith(".csv")) {
                const t = typeof e == "string" ? e.split(`
`)[0].toLowerCase() : "";
                return t.includes("login_totp") ? "bitwarden_pass_csv" : t.includes("title") && t.includes("otpauth") ? "1password_csv" : t.includes("otpauth") ? "bitwarden_auth_csv" : t.includes("totp") && t.includes("vault") && t.includes("createtime") ? "proton_pass_csv" : t.includes("otpurl") && t.includes("title") && t.includes("username") ? "dashlane_csv" : "nodeauth_csv";
            }
            if (typeof e == "string" && e.trim().startsWith("otpauth://")) return "generic_otpauth";
            if (typeof e == "string") {
                const t = j(e);
                if (t) {
                    if (Array.isArray(t.items) && Array.isArray(t.folders)) return "bitwarden_pass_json";
                    if (Array.isArray(t.items) && (t.encrypted === !1 || !("encrypted" in t))) return "bitwarden_auth_json";
                    if (t.encrypted === !0 && t.app === "nodeauth") return "nodeauth_encrypted";
                    if (t.version === 1 && Array.isArray(t.accounts) && (t.accounts.length === 0 || t.accounts[0].issuerName)) return "lastpass_auth_json";
                    if (t.app === "nodeauth" || Array.isArray(t.accounts) || Array.isArray(t.vault) || Array.isArray(t.secrets)) return "nodeauth_json";
                    if (t.schemaVersion && t.servicesEncrypted && typeof t.servicesEncrypted == "string") return "2fas_encrypted";
                    if (t.schemaVersion && Array.isArray(t.services)) return "2fas";
                    if (t.version === 1 && t.db && typeof t.db == "object" && Array.isArray(t.db.entries)) return "aegis";
                    if (t.version === 1 && t.entries && Array.isArray(t.entries)) return "proton_auth";
                    if (t.version === 1 && t.header && t.db && typeof t.db == "string") return "aegis_encrypted";
                    if (t.version === 1 && typeof t.salt == "string" && typeof t.content == "string") return "proton_auth_encrypted";
                    if (t.kdfParams && typeof t.encryptedData == "string") return "ente_encrypted";
                    if (t.encrypted === !0 && t.passwordProtected === !0 && t.encKeyValidation_DO_NOT_EDIT) return "bitwarden_pass_encrypted";
                    if (t.shared_secret && (t.account_name || t.SteamID)) return "steam_mafile";
                }
            }
            if (typeof e == "string" && e.includes("-----BEGIN PGP MESSAGE-----")) return "proton_pass_pgp";
            if (r) {
                const t = r.toLowerCase();
                if (t.endsWith(".2fas")) return "2fas";
                if (t.endsWith(".txt")) return "generic_otpauth";
                if (t.endsWith(".mafile")) return "steam_mafile";
                if (t.endsWith(".1pux")) return "1password_pux";
            }
            return "unknown";
        }
    };
    class ke extends xe {
        name = "memory";
        mapNameToFile = new Map;
        mapIdToFile = new Map;
        constructor(){
            super();
        }
        close() {
            for (const r of this.mapIdToFile.keys())this.xClose(r);
        }
        xOpen(r, e, t, o) {
            r = r || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
            let i = this.mapNameToFile.get(r);
            if (!i) if (t & le) i = {
                name: r,
                flags: t,
                size: 0,
                data: new ArrayBuffer(0)
            }, this.mapNameToFile.set(r, i);
            else return Se;
            return this.mapIdToFile.set(e, i), o.setInt32(0, t, !0), G;
        }
        xClose(r) {
            const e = this.mapIdToFile.get(r);
            return e && (this.mapIdToFile.delete(r), e.flags & Ee && this.mapNameToFile.delete(e.name)), G;
        }
        xRead(r, e, t) {
            const o = this.mapIdToFile.get(r), i = Math.min(t, o.size), f = Math.min(t + e.byteLength, o.size) - i;
            return f && e.set(new Uint8Array(o.data, i, f)), f < e.byteLength ? (e.fill(0, f), Te) : G;
        }
        xWrite(r, e, t) {
            const o = this.mapIdToFile.get(r);
            if (t + e.byteLength > o.data.byteLength) {
                const i = Math.max(t + e.byteLength, 2 * o.data.byteLength), l = new ArrayBuffer(i);
                new Uint8Array(l).set(new Uint8Array(o.data, 0, o.size)), o.data = l;
            }
            return new Uint8Array(o.data, t, e.byteLength).set(e), o.size = Math.max(o.size, t + e.byteLength), G;
        }
        xTruncate(r, e) {
            const t = this.mapIdToFile.get(r);
            return t.size = Math.min(t.size, e), G;
        }
        xFileSize(r, e) {
            const t = this.mapIdToFile.get(r);
            return e.setBigInt64(0, BigInt(t.size), !0), G;
        }
        xDelete(r, e) {
            return this.mapNameToFile.delete(r), G;
        }
        xAccess(r, e, t) {
            const o = this.mapNameToFile.get(r);
            return t.setInt32(0, o ? 1 : 0, !0), G;
        }
    }
    class Be extends ke {
        name = "memory-async";
        constructor(){
            super();
        }
        async close() {
            for (const r of this.mapIdToFile.keys())await this.xClose(r);
        }
        xOpen(r, e, t, o) {
            return this.handleAsync(async ()=>super.xOpen(r, e, t, o));
        }
        xClose(r) {
            return this.handleAsync(async ()=>super.xClose(r));
        }
        xRead(r, e, t) {
            return this.handleAsync(async ()=>super.xRead(r, e, t));
        }
        xWrite(r, e, t) {
            return this.handleAsync(async ()=>super.xWrite(r, e, t));
        }
        xTruncate(r, e) {
            return this.handleAsync(async ()=>super.xTruncate(r, e));
        }
        xFileSize(r, e) {
            return this.handleAsync(async ()=>super.xFileSize(r, e));
        }
        xDelete(r, e) {
            return this.handleAsync(async ()=>super.xDelete(r, e));
        }
        xAccess(r, e, t) {
            return this.handleAsync(async ()=>super.xAccess(r, e, t));
        }
    }
    const Ve = {
        bytesToBase32 (n) {
            const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
            let e = 0, t = 0, o = "";
            for(let i = 0; i < n.length; i++)for(t = t << 8 | n[i], e += 8; e >= 5;)e -= 5, o += r[t >>> e & 31];
            for(e > 0 && (o += r[t << 5 - e & 31]); o.length % 8;)o += "=";
            return o;
        },
        base64ToBase32 (n) {
            try {
                const r = atob(n.trim()), e = new Uint8Array(r.length);
                for(let t = 0; t < r.length; t++)e[t] = r.charCodeAt(t);
                return this.bytesToBase32(e);
            } catch (r) {
                throw new Error(`Base64 转 Base32 失败: ${r.message}`);
            }
        },
        async parse (n) {
            let r = null, e = null, t = null, o = null;
            try {
                if (n && n.main && n.main.buffer) r = new Uint8Array(n.main.buffer), n.wal && n.wal.buffer && (e = new Uint8Array(n.wal.buffer)), n.shm && n.shm.buffer && (t = new Uint8Array(n.shm.buffer));
                else if (n instanceof ArrayBuffer || n instanceof Uint8Array) r = new Uint8Array(n);
                else throw new P("无法识别传入的 PhoneFactor 数据格式", "INVALID_PHONEFACTOR_INPUT");
                const i = await ve({
                    locateFile: (a)=>a.endsWith(".wasm") ? Ie : a
                }), l = Pe(i);
                o = new Be;
                const f = `vfs-pf-${Date.now()}`;
                o.name = f, l.vfs_register(o);
                const g = "PhoneFactor", A = (a, p)=>{
                    const c = p.buffer.slice(p.byteOffset, p.byteOffset + p.byteLength);
                    o.mapNameToFile.set(a, {
                        name: a,
                        flags: le | de | Le,
                        size: p.byteLength,
                        data: c
                    });
                };
                A(g, r), e && e.byteLength > 0 && A(`${g}-wal`, e), t && t.byteLength > 0 && A(`${g}-shm`, t);
                const m = await l.open_v2(g, de | le, f);
                await l.exec(m, "PRAGMA locking_mode = EXCLUSIVE;"), await l.exec(m, "PRAGMA journal_mode = DELETE;");
                let w = !1;
                if (await l.exec(m, "SELECT name FROM sqlite_master WHERE type='table' AND name='accounts'", ()=>{
                    w = !0;
                }), !w) throw await l.close(m), new P("不是有效的 Microsoft Authenticator 数据文件", "INVALID_PHONEFACTOR_FILE");
                const y = [], x = /^[A-Z2-7]+=*$/i, u = l.str_new(m, "SELECT name, username, oath_secret_key, encrypted_oath_secret_key, account_type FROM accounts"), s = await l.prepare_v2(m, l.str_value(u));
                if (s && s.stmt) {
                    const a = s.stmt;
                    try {
                        for(; await l.step(a) === Oe;){
                            const p = l.row(a), c = p[0], h = p[1], d = p[2], _ = p[4];
                            if (!c && !h) continue;
                            let b = (d || "").toString().trim();
                            if (!b) continue;
                            let S = "SHA1", v = 6;
                            try {
                                if (_ !== 0) if (_ === 1) b = this.base64ToBase32(b), v = 8;
                                else if (_ === 2) b = b.toUpperCase(), S = "SHA256";
                                else continue;
                            } catch  {
                                continue;
                            }
                            const I = b.replace(/\s+/g, "").replace(/=+$/, "");
                            x.test(I) && y.push({
                                service: c || "Microsoft",
                                account: h || "Unknown",
                                secret: b,
                                type: "totp",
                                algorithm: S,
                                digits: v,
                                period: 30
                            });
                        }
                    } finally{
                        await l.finalize(a);
                    }
                }
                if (l.str_finish(u), await l.close(m), o.mapNameToFile.clear(), y.length === 0) throw new P("未能提取到有效的 TOTP 记录", "NO_DATA");
                return y;
            } catch (i) {
                throw ue.error("[PhoneFactor] parse failed:", i), i instanceof P ? i : new P(`PhoneFactor 解析失败: ${i.message}`, "PF_ERROR", i);
            }
        }
    }, He = {
        async parseImage (n) {
            return new Promise((r, e)=>{
                const t = new Image, o = URL.createObjectURL(n);
                t.onload = ()=>{
                    URL.revokeObjectURL(o);
                    const i = document.createElement("canvas"), l = i.getContext("2d", {
                        willReadFrequently: !0
                    }), f = [
                        1,
                        1.5,
                        .5,
                        2,
                        .8
                    ];
                    let g = null;
                    for (const m of f){
                        i.width = t.width * m, i.height = t.height * m, l.imageSmoothingEnabled = !1, l.drawImage(t, 0, 0, i.width, i.height);
                        const w = l.getImageData(0, 0, i.width, i.height);
                        if (g = Re(w.data, w.width, w.height, {
                            inversionAttempts: "attemptBoth"
                        }), g) break;
                    }
                    if (!g) return e(new P("未能识别出二维码，请确认为完整清晰的截图。", "QR_RECOGNITION_FAILED"));
                    const A = g.data;
                    if (!A.startsWith("otpauth-migration://offline?data=")) return e(new P("不是有效的 Google Authenticator 迁移二维码", "INVALID_GOOGLE_AUTH_QR"));
                    try {
                        let y = new URL(A).searchParams.get("data").replace(/-/g, "+").replace(/_/g, "/");
                        for(; y.length % 4;)y += "=";
                        const x = atob(y), E = new Uint8Array(x.length);
                        for(let u = 0; u < x.length; u++)E[u] = x.charCodeAt(u);
                        r(this.decodePayload(E));
                    } catch (m) {
                        e(new P("解析 Google Authenticator 数据失败", "GOOGLE_AUTH_DECODE_FAILED", m));
                    }
                }, t.onerror = ()=>{
                    URL.revokeObjectURL(o), e(new P("图片读取失败，文件可能已损坏", "IMAGE_LOAD_FAILED"));
                }, t.src = o;
            });
        },
        decodePayload (n) {
            const r = [];
            let e = 0;
            function t() {
                let o = 0, i = 0;
                for(; e < n.length;){
                    const l = n[e++];
                    if (o |= (l & 127) << i, (l & 128) === 0) break;
                    i += 7;
                }
                return o;
            }
            for(; e < n.length;){
                const o = n[e++], i = o >> 3, l = o & 7;
                if (i === 1 && l === 2) {
                    const f = t(), g = e + f;
                    let A = null, m = "", w = "", y = "SHA1", x = 6, E = "totp", u = 0;
                    for(; e < g;){
                        const s = n[e++], a = s >> 3, p = s & 7;
                        if (a === 1 && p === 2) {
                            const c = t(), h = n.slice(e, e + c), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
                            let _ = 0, b = 0, S = "";
                            for(let v = 0; v < h.length; v++)for(b = b << 8 | h[v], _ += 8; _ >= 5;)S += d[b >>> _ - 5 & 31], _ -= 5;
                            _ > 0 && (S += d[b << 5 - _ & 31]), A = S, e += c;
                        } else if (a === 2 && p === 2) {
                            const c = t();
                            m = new TextDecoder().decode(n.slice(e, e + c)), e += c;
                        } else if (a === 3 && p === 2) {
                            const c = t();
                            w = new TextDecoder().decode(n.slice(e, e + c)), e += c;
                        } else if (a === 4 && p === 0) {
                            const c = t();
                            c === 2 ? y = "SHA256" : c === 3 ? y = "SHA512" : c === 4 && (y = "MD5");
                        } else if (a === 5 && p === 0) t() === 2 && (x = 8);
                        else if (a === 6 && p === 0) E = t() === 1 ? "hotp" : "totp";
                        else if (a === 7 && p === 0) u = t();
                        else if (p === 0) t();
                        else if (p === 2) e += t();
                        else break;
                    }
                    if (A) {
                        let s = m, a = w;
                        if (!a && m.includes(":")) {
                            const p = m.split(":");
                            a = p[0].trim(), s = p[1].trim();
                        } else a || (a = m);
                        r.push(pe({
                            service: a,
                            account: s,
                            secret: A,
                            algorithm: y,
                            digits: x,
                            type: E,
                            counter: E === "hotp" ? u : 0,
                            period: 30
                        }));
                    }
                    e = g;
                } else if (l === 0) t();
                else if (l === 2) e += t();
                else break;
            }
            return r;
        }
    }, Ke = {
        async exportToGoogleAuth (n) {
            if (!n || n.length === 0) throw new P("没有账户可以迁移", "EMPTY_VAULT");
            const r = _e.google_auth || [
                "totp",
                "hotp"
            ], e = n.filter((w)=>r.includes((w.type || "totp").toLowerCase()));
            if (e.length === 0) throw new P("所选账号的类型 Google Authenticator 均不支持", "EMPTY_VAULT");
            const t = 10, o = [];
            for(let w = 0; w < e.length; w += t)o.push(e.slice(w, w + t));
            const i = Math.floor(Math.random() * 2147483647), l = await ne(()=>import("./qr-utils-C-MFlKj_.js").then((w)=>w.b), __vite__mapDeps([0,1,2,3])), f = [];
            function g(w, y) {
                for(; w >= 128;)y.push(w & 127 | 128), w >>>= 7;
                y.push(w);
            }
            function A(w, y) {
                const x = new TextEncoder().encode(w);
                g(x.length, y);
                for(let E = 0; E < x.length; E++)y.push(x[E]);
            }
            function m(w, y) {
                g(w.length, y);
                for(let x = 0; x < w.length; x++)y.push(w[x]);
            }
            for(let w = 0; w < o.length; w++){
                const y = o[w], x = [];
                x.push(16), g(1, x), x.push(24), g(o.length, x), x.push(32), g(w, x), x.push(40), g(i, x);
                for (const a of y){
                    const p = [], c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", h = a.secret.toUpperCase().replace(/=+$/, "").replace(/[^A-Z2-7]/g, ""), d = [];
                    let _ = 0, b = 0;
                    for(let D = 0; D < h.length; D++){
                        const L = c.indexOf(h[D]);
                        L !== -1 && (b = b << 5 | L, _ += 5, _ >= 8 && (d.push(b >>> _ - 8 & 255), _ -= 8));
                    }
                    d.length > 0 && (p.push(10), m(d, p));
                    const S = a.account || a.service;
                    S && (p.push(18), A(S, p)), a.service && (p.push(26), A(a.service, p));
                    let v = 1;
                    a.algorithm === "SHA256" ? v = 2 : a.algorithm === "SHA512" && (v = 3), p.push(32), g(v, p);
                    let I = 1;
                    a.digits === 8 && (I = 2), p.push(40), g(I, p);
                    let U = 2;
                    a.type === "hotp" && (U = 1), p.push(48), g(U, p), a.type === "hotp" && (p.push(56), g(a.counter || 0, p)), x.push(10), g(p.length, x);
                    for(let D = 0; D < p.length; D++)x.push(p[D]);
                }
                let E = "";
                for(let a = 0; a < x.length; a++)E += String.fromCharCode(x[a]);
                const u = `otpauth-migration://offline?data=${encodeURIComponent(btoa(E))}`, s = await l.toDataURL(u, {
                    errorCorrectionLevel: "M",
                    width: 480,
                    margin: 2
                });
                f.push(s);
            }
            return f;
        }
    }, We = {
        _splitCsvLine (n) {
            const r = [];
            let e = 0;
            for(; e <= n.length;){
                if (e === n.length) {
                    r.push("");
                    break;
                }
                if (n[e] === '"') {
                    let t = "";
                    for(e++; e < n.length;)if (n[e] === '"') if (n[e + 1] === '"') t += '"', e += 2;
                    else {
                        e++;
                        break;
                    }
                    else t += n[e++];
                    r.push(t.trim()), n[e] === "," && e++;
                } else {
                    const t = n.indexOf(",", e);
                    if (t === -1) {
                        r.push(n.slice(e).trim());
                        break;
                    }
                    r.push(n.slice(e, t).trim()), e = t + 1;
                }
            }
            return r;
        },
        parseCsv (n) {
            const r = n.split(`
`).filter((u)=>u.trim());
            if (r.length < 2) return [];
            const e = this._splitCsvLine(r[0]).map((u)=>u.toLowerCase()), t = [], o = e.includes("login_totp"), i = e.includes("otpauth") && !e.includes("title"), l = e.includes("otpauth") && e.includes("title"), f = e.includes("totp") && e.includes("vault") && e.includes("createtime"), g = e.includes("otpurl") && e.includes("title") && e.includes("username"), A = e.includes("issuer") || e.includes("secret") || e.includes("name"), m = [
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
            ], y = [
                "username",
                "login",
                "login_username",
                "account",
                "email"
            ], x = (u)=>u ? u.toString().trim().replace(/[\s-]/g, "").toUpperCase() : "", E = e.some((u)=>m.includes(u));
            if (!o && !i && !l && !f && !g && !A && !E) return [];
            for(let u = 1; u < r.length; u++){
                const s = this._splitCsvLine(r[u]), a = {};
                if (e.forEach((p, c)=>{
                    a[p] = s[c] || "";
                }), l) {
                    const p = (a.otpauth || "").trim();
                    if (p && p.startsWith("otpauth://")) {
                        const c = V(p);
                        c && (c.service = a.title || c.service, c.account = a.username || c.account, t.push(c));
                    }
                } else if (o || i) {
                    const p = (a.login_totp || a.otpauth || a.totp || "").trim();
                    if (p) {
                        let c = null;
                        if (p.startsWith("otpauth://") || p.startsWith("steam://")) c = V(p);
                        else {
                            const h = x(p);
                            /^[A-Z2-7]+=*$/.test(h) && (c = {
                                service: a.name || "Unknown",
                                account: a.login_username || "Unknown",
                                secret: h,
                                algorithm: "SHA1",
                                digits: 6,
                                period: 30,
                                category: "",
                                type: "totp"
                            });
                        }
                        c && (c.service = a.name || c.service, c.account = a.login_username || c.account, t.push(c));
                    }
                } else if (f) {
                    const p = (a.totp || "").trim();
                    if (p && (p.startsWith("otpauth://") || p.startsWith("steam://"))) {
                        const c = V(p);
                        c && (c.service = a.name || c.service, c.account = a.username || c.account, c.category = a.vault || "", t.push(c));
                    }
                } else if (g) {
                    const p = (a.otpurl || "").trim();
                    if (p && (p.startsWith("otpauth://") || p.startsWith("steam://"))) {
                        const c = V(p);
                        c && (c.service = a.title || c.service, c.account = a.username || c.account, c.category = a.category || "", t.push(c));
                    }
                } else {
                    const p = e.find((h)=>m.includes(h)), c = p ? (a[p] || "").trim() : "";
                    if (c) if (c.toLowerCase().startsWith("otpauth://") || c.toLowerCase().startsWith("steam://")) {
                        const h = V(c);
                        if (h) {
                            const d = e.find((b)=>w.includes(b)), _ = e.find((b)=>y.includes(b));
                            h.service = a[d] || h.service, h.account = a[_] || h.account, t.push(h);
                        }
                    } else {
                        const h = x(c);
                        if (/^[A-Z2-7]+=*$/.test(h)) {
                            let _ = e.find((U)=>w.includes(U)), b = e.find((U)=>y.includes(U));
                            e.includes("issuer") && e.includes("name") && (_ = "issuer", b = "name");
                            const S = (a.type || "totp").toLowerCase(), v = parseInt(a.digits || "0", 10), I = (a.algorithm || "SHA1").toUpperCase().replace(/-/g, "");
                            t.push({
                                ...pe({
                                    service: a[_],
                                    account: a[b],
                                    secret: h,
                                    algorithm: I,
                                    digits: v,
                                    period: parseInt(a.period || "30", 10),
                                    type: S,
                                    counter: parseInt(a.counter || "0", 10)
                                }),
                                category: a.category || ""
                            });
                        }
                    }
                }
            }
            return t;
        }
    }, Ge = {
        exportToCsv (n) {
            let r = `name,issuer,secret,algorithm,digits,period,type,counter,category
`;
            return n.forEach((e)=>{
                const t = e.account || "", o = e.service || "", i = e.type?.toUpperCase() || "TOTP", l = e.category || "";
                r += `"${t}","${o}",${e.secret},${e.algorithm || "SHA1"},${e.digits || 6},${e.period || 30},${i},${e.counter || 0},"${l}"
`;
            }), r;
        }
    };
    var se = {
        exports: {}
    }, ye;
    function $e() {
        return ye || (ye = 1, (function(n, r) {
            (function(e) {
                function o(u) {
                    const s = new Uint32Array([
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
                    let a = 1779033703, p = 3144134277, c = 1013904242, h = 2773480762, d = 1359893119, _ = 2600822924, b = 528734635, S = 1541459225;
                    const v = new Uint32Array(64);
                    function I(H) {
                        let Q = 0, k = H.length;
                        for(; k >= 64;){
                            let N = a, K = p, $ = c, z = h, T = d, B = _, O = b, Y = S, F, R, X, Z, te;
                            for(R = 0; R < 16; R++)X = Q + R * 4, v[R] = (H[X] & 255) << 24 | (H[X + 1] & 255) << 16 | (H[X + 2] & 255) << 8 | H[X + 3] & 255;
                            for(R = 16; R < 64; R++)F = v[R - 2], Z = (F >>> 17 | F << 15) ^ (F >>> 19 | F << 13) ^ F >>> 10, F = v[R - 15], te = (F >>> 7 | F << 25) ^ (F >>> 18 | F << 14) ^ F >>> 3, v[R] = (Z + v[R - 7] | 0) + (te + v[R - 16] | 0) | 0;
                            for(R = 0; R < 64; R++)Z = (((T >>> 6 | T << 26) ^ (T >>> 11 | T << 21) ^ (T >>> 25 | T << 7)) + (T & B ^ ~T & O) | 0) + (Y + (s[R] + v[R] | 0) | 0) | 0, te = ((N >>> 2 | N << 30) ^ (N >>> 13 | N << 19) ^ (N >>> 22 | N << 10)) + (N & K ^ N & $ ^ K & $) | 0, Y = O, O = B, B = T, T = z + Z | 0, z = $, $ = K, K = N, N = Z + te | 0;
                            a = a + N | 0, p = p + K | 0, c = c + $ | 0, h = h + z | 0, d = d + T | 0, _ = _ + B | 0, b = b + O | 0, S = S + Y | 0, Q += 64, k -= 64;
                        }
                    }
                    I(u);
                    let U, D = u.length % 64, L = u.length / 536870912 | 0, M = u.length << 3, J = D < 56 ? 56 : 120, C = u.slice(u.length - D, u.length);
                    for(C.push(128), U = D + 1; U < J; U++)C.push(0);
                    return C.push(L >>> 24 & 255), C.push(L >>> 16 & 255), C.push(L >>> 8 & 255), C.push(L >>> 0 & 255), C.push(M >>> 24 & 255), C.push(M >>> 16 & 255), C.push(M >>> 8 & 255), C.push(M >>> 0 & 255), I(C), [
                        a >>> 24 & 255,
                        a >>> 16 & 255,
                        a >>> 8 & 255,
                        a >>> 0 & 255,
                        p >>> 24 & 255,
                        p >>> 16 & 255,
                        p >>> 8 & 255,
                        p >>> 0 & 255,
                        c >>> 24 & 255,
                        c >>> 16 & 255,
                        c >>> 8 & 255,
                        c >>> 0 & 255,
                        h >>> 24 & 255,
                        h >>> 16 & 255,
                        h >>> 8 & 255,
                        h >>> 0 & 255,
                        d >>> 24 & 255,
                        d >>> 16 & 255,
                        d >>> 8 & 255,
                        d >>> 0 & 255,
                        _ >>> 24 & 255,
                        _ >>> 16 & 255,
                        _ >>> 8 & 255,
                        _ >>> 0 & 255,
                        b >>> 24 & 255,
                        b >>> 16 & 255,
                        b >>> 8 & 255,
                        b >>> 0 & 255,
                        S >>> 24 & 255,
                        S >>> 16 & 255,
                        S >>> 8 & 255,
                        S >>> 0 & 255
                    ];
                }
                function i(u, s, a) {
                    u = u.length <= 64 ? u : o(u);
                    const p = 64 + s.length + 4, c = new Array(p), h = new Array(64);
                    let d, _ = [];
                    for(d = 0; d < 64; d++)c[d] = 54;
                    for(d = 0; d < u.length; d++)c[d] ^= u[d];
                    for(d = 0; d < s.length; d++)c[64 + d] = s[d];
                    for(d = p - 4; d < p; d++)c[d] = 0;
                    for(d = 0; d < 64; d++)h[d] = 92;
                    for(d = 0; d < u.length; d++)h[d] ^= u[d];
                    function b() {
                        for(let S = p - 1; S >= p - 4; S--){
                            if (c[S]++, c[S] <= 255) return;
                            c[S] = 0;
                        }
                    }
                    for(; a >= 32;)b(), _ = _.concat(o(h.concat(o(c)))), a -= 32;
                    return a > 0 && (b(), _ = _.concat(o(h.concat(o(c))).slice(0, a))), _;
                }
                function l(u, s, a, p, c) {
                    let h;
                    for(m(u, (2 * a - 1) * 16, c, 0, 16), h = 0; h < 2 * a; h++)A(u, h * 16, c, 16), g(c, p), m(c, 0, u, s + h * 16, 16);
                    for(h = 0; h < a; h++)m(u, s + h * 2 * 16, u, h * 16, 16);
                    for(h = 0; h < a; h++)m(u, s + (h * 2 + 1) * 16, u, (h + a) * 16, 16);
                }
                function f(u, s) {
                    return u << s | u >>> 32 - s;
                }
                function g(u, s) {
                    m(u, 0, s, 0, 16);
                    for(let a = 8; a > 0; a -= 2)s[4] ^= f(s[0] + s[12], 7), s[8] ^= f(s[4] + s[0], 9), s[12] ^= f(s[8] + s[4], 13), s[0] ^= f(s[12] + s[8], 18), s[9] ^= f(s[5] + s[1], 7), s[13] ^= f(s[9] + s[5], 9), s[1] ^= f(s[13] + s[9], 13), s[5] ^= f(s[1] + s[13], 18), s[14] ^= f(s[10] + s[6], 7), s[2] ^= f(s[14] + s[10], 9), s[6] ^= f(s[2] + s[14], 13), s[10] ^= f(s[6] + s[2], 18), s[3] ^= f(s[15] + s[11], 7), s[7] ^= f(s[3] + s[15], 9), s[11] ^= f(s[7] + s[3], 13), s[15] ^= f(s[11] + s[7], 18), s[1] ^= f(s[0] + s[3], 7), s[2] ^= f(s[1] + s[0], 9), s[3] ^= f(s[2] + s[1], 13), s[0] ^= f(s[3] + s[2], 18), s[6] ^= f(s[5] + s[4], 7), s[7] ^= f(s[6] + s[5], 9), s[4] ^= f(s[7] + s[6], 13), s[5] ^= f(s[4] + s[7], 18), s[11] ^= f(s[10] + s[9], 7), s[8] ^= f(s[11] + s[10], 9), s[9] ^= f(s[8] + s[11], 13), s[10] ^= f(s[9] + s[8], 18), s[12] ^= f(s[15] + s[14], 7), s[13] ^= f(s[12] + s[15], 9), s[14] ^= f(s[13] + s[12], 13), s[15] ^= f(s[14] + s[13], 18);
                    for(let a = 0; a < 16; ++a)u[a] += s[a];
                }
                function A(u, s, a, p) {
                    for(let c = 0; c < p; c++)a[c] ^= u[s + c];
                }
                function m(u, s, a, p, c) {
                    for(; c--;)a[p++] = u[s++];
                }
                function w(u) {
                    if (!u || typeof u.length != "number") return !1;
                    for(let s = 0; s < u.length; s++){
                        const a = u[s];
                        if (typeof a != "number" || a % 1 || a < 0 || a >= 256) return !1;
                    }
                    return !0;
                }
                function y(u, s) {
                    if (typeof u != "number" || u % 1) throw new Error("invalid " + s);
                    return u;
                }
                function x(u, s, a, p, c, h, d) {
                    if (a = y(a, "N"), p = y(p, "r"), c = y(c, "p"), h = y(h, "dkLen"), a === 0 || (a & a - 1) !== 0) throw new Error("N must be power of 2");
                    if (a > 2147483647 / 128 / p) throw new Error("N too large");
                    if (p > 2147483647 / 128 / c) throw new Error("r too large");
                    if (!w(u)) throw new Error("password must be an array or buffer");
                    if (u = Array.prototype.slice.call(u), !w(s)) throw new Error("salt must be an array or buffer");
                    s = Array.prototype.slice.call(s);
                    let _ = i(u, s, c * 128 * p);
                    const b = new Uint32Array(c * 32 * p);
                    for(let T = 0; T < b.length; T++){
                        const B = T * 4;
                        b[T] = (_[B + 3] & 255) << 24 | (_[B + 2] & 255) << 16 | (_[B + 1] & 255) << 8 | (_[B + 0] & 255) << 0;
                    }
                    const S = new Uint32Array(64 * p), v = new Uint32Array(32 * p * a), I = 32 * p, U = new Uint32Array(16), D = new Uint32Array(16), L = c * a * 2;
                    let M = 0, J = null, C = !1, H = 0, Q = 0, k, N;
                    const K = d ? parseInt(1e3 / p) : 4294967295, $ = typeof setImmediate < "u" ? setImmediate : setTimeout, z = function() {
                        if (C) return d(new Error("cancelled"), M / L);
                        let T;
                        switch(H){
                            case 0:
                                N = Q * 32 * p, m(b, N, S, 0, I), H = 1, k = 0;
                            case 1:
                                T = a - k, T > K && (T = K);
                                for(let O = 0; O < T; O++)m(S, 0, v, (k + O) * I, I), l(S, I, p, U, D);
                                if (k += T, M += T, d) {
                                    const O = parseInt(1e3 * M / L);
                                    if (O !== J) {
                                        if (C = d(null, M / L), C) break;
                                        J = O;
                                    }
                                }
                                if (k < a) break;
                                k = 0, H = 2;
                            case 2:
                                T = a - k, T > K && (T = K);
                                for(let O = 0; O < T; O++){
                                    const Y = (2 * p - 1) * 16, F = S[Y] & a - 1;
                                    A(v, F * I, S, I), l(S, I, p, U, D);
                                }
                                if (k += T, M += T, d) {
                                    const O = parseInt(1e3 * M / L);
                                    if (O !== J) {
                                        if (C = d(null, M / L), C) break;
                                        J = O;
                                    }
                                }
                                if (k < a) break;
                                if (m(S, 0, b, N, I), Q++, Q < c) {
                                    H = 0;
                                    break;
                                }
                                _ = [];
                                for(let O = 0; O < b.length; O++)_.push(b[O] >> 0 & 255), _.push(b[O] >> 8 & 255), _.push(b[O] >> 16 & 255), _.push(b[O] >> 24 & 255);
                                const B = i(u, _, h);
                                return d && d(null, 1, B), B;
                        }
                        d && $(z);
                    };
                    if (!d) for(;;){
                        const T = z();
                        if (T != null) return T;
                    }
                    z();
                }
                const E = {
                    scrypt: function(u, s, a, p, c, h, d) {
                        return new Promise(function(_, b) {
                            let S = 0;
                            d && d(0), x(u, s, a, p, c, h, function(v, I, U) {
                                if (v) b(v);
                                else if (U) d && S !== 1 && d(1), _(new Uint8Array(U));
                                else if (d && I !== S) return S = I, d(I);
                            });
                        });
                    },
                    syncScrypt: function(u, s, a, p, c, h) {
                        return new Uint8Array(x(u, s, a, p, c, h));
                    }
                };
                n.exports = E;
            })();
        })(se)), se.exports;
    }
    var ze = $e();
    const oe = {
        async decryptDatabase (n, r) {
            const e = n.header.slots;
            if (!e || !e.length) throw new Error("Aegis: 找不到密钥槽");
            const t = n.db, o = n.header.params;
            let i = null;
            const l = new TextEncoder().encode(r);
            for (const y of e)if (y.type === 1) {
                const x = q(y.salt), E = await ze.scrypt(l, x, y.n, y.r, y.p, 32), u = q(y.key), s = q(y.key_params.nonce), a = q(y.key_params.tag), p = new Uint8Array(u.length + a.length);
                p.set(u), p.set(a, u.length);
                try {
                    const c = await window.crypto.subtle.importKey("raw", E, {
                        name: "AES-GCM"
                    }, !1, [
                        "decrypt"
                    ]), h = await window.crypto.subtle.decrypt({
                        name: "AES-GCM",
                        iv: s
                    }, c, p);
                    i = new Uint8Array(h);
                    break;
                } catch  {
                    continue;
                }
            }
            if (!i) throw new Error("Aegis: 密码错误或不支持的加密格式 (缺少 Scrypt)");
            const f = Fe(t), g = q(o.nonce), A = q(o.tag), m = new Uint8Array(f.length + A.length);
            m.set(f), m.set(A, f.length);
            const w = await window.crypto.subtle.importKey("raw", i, {
                name: "AES-GCM"
            }, !1, [
                "decrypt"
            ]);
            try {
                const y = await window.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: g
                }, w, m);
                return JSON.parse(new TextDecoder().decode(y));
            } catch  {
                throw new Error("Aegis: 数据库载荷解密失败");
            }
        },
        parseEntries (n) {
            return (n.entries || []).map((e)=>{
                const t = (e.info?.type || e.type || "").toLowerCase();
                return {
                    service: e.issuer || e.name || "Unknown",
                    account: e.name || "",
                    secret: e.info?.secret || "",
                    type: t,
                    algorithm: e.info?.algo || "SHA1",
                    digits: e.info?.digits || 6,
                    period: e.info?.period || 30,
                    counter: e.info?.counter || 0
                };
            });
        }
    }, Je = {
        exportPlaintext (n) {
            const r = new Map;
            n.forEach((o)=>{
                o.category && !r.has(o.category) && r.set(o.category, crypto.randomUUID());
            });
            const e = Array.from(r.entries()).map(([o, i])=>({
                    name: o,
                    uuid: i
                })), t = n.map((o)=>{
                const i = [];
                o.category && r.has(o.category) && i.push(r.get(o.category));
                const l = (o.type || "totp").toLowerCase(), f = l === "steam", A = f || l === "blizzard" ? "totp" : l, m = {
                    secret: o.secret,
                    algo: (o.algorithm || "SHA1").toUpperCase(),
                    digits: f ? 5 : o.digits || 6
                };
                return l === "hotp" ? m.counter = o.counter || 0 : m.period = o.period || 30, {
                    type: A,
                    uuid: crypto.randomUUID(),
                    name: o.account || o.service,
                    issuer: o.service,
                    info: m,
                    groups: i
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
                    entries: t,
                    groups: e,
                    icons_optimized: !0
                }
            }, null, 2);
        }
    }, ge = {
        async parseEncrypted (n, r) {
            if (!r) throw new Error("MISSING_PASSWORD");
            try {
                let e = n;
                const t = typeof n == "string" ? j(n) : n;
                t && typeof t == "object" && t.data && (e = t.data);
                const o = await Ue(e, r);
                return o.vault || o.accounts || [];
            } catch  {
                throw new Error("DECRYPTION_FAILED");
            }
        },
        parsePlaintext (n) {
            const r = typeof n == "string" ? j(n) : n;
            return r ? Array.isArray(r.accounts) ? r.accounts : Array.isArray(r.vault) ? r.vault : Array.isArray(r.data) ? r.data : r.secrets ? r.secrets.map((e)=>{
                let t = e.account || e.label || "";
                return typeof t == "string" && t.includes(":") && (t = t.split(":").pop()?.trim() || t), {
                    service: e.issuer || e.service || e.name || "Unknown",
                    account: t,
                    secret: e.secret || "",
                    type: (e.type || "TOTP").toLowerCase(),
                    algorithm: e.algorithm || "SHA1",
                    digits: e.digits || 6,
                    period: e.period || 30,
                    counter: e.counter || 0
                };
            }) : Array.isArray(r) ? r : [] : [];
        }
    }, me = {
        async exportEncrypted (n, r) {
            if (!r) throw new Error("MISSING_PASSWORD");
            const t = {
                version: "2.0",
                app: "nodeauth",
                timestamp: new Date().toISOString()
            }, o = {
                ...t,
                accounts: n
            }, i = await De(o, r);
            return JSON.stringify({
                ...t,
                encrypted: !0,
                data: i,
                note: "This file is encrypted with your export password (AES-GCM-256 + PBKDF2)."
            }, null, 2);
        },
        exportPlaintext (n) {
            const r = new Date().toISOString();
            return JSON.stringify({
                version: "2.0",
                app: "nodeauth",
                timestamp: r,
                encrypted: !1,
                accounts: n
            }, null, 2);
        }
    }, Qe = {
        async exportToHtml (n) {
            const r = await ne(()=>import("./qr-utils-C-MFlKj_.js").then((t)=>t.b), __vite__mapDeps([0,1,2,3])), e = [];
            e.push(`
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
            for (const t of n){
                const o = ee(t);
                try {
                    const i = await r.toDataURL(o, {
                        errorCorrectionLevel: "M",
                        margin: 2
                    });
                    e.push(`
          <div class="card">
            <div class="service">${t.service}</div>
            <div class="account">${t.account || "-"}</div>
            <img class="qr-img" src="${i}" alt="QR Code">
            <div class="code">${t.secret.replace(/(.{4})/g, "$1 ").trim()}</div>
            <div style="font-size: 0.8em; color: #888; margin-top: 8px;">
                <span style="display: inline-block; background: #f0f4f8; color: #5a6b7d; padding: 2px 8px; border-radius: 12px; font-weight: 600; font-size: 0.85em; margin-right: 8px; border: 1px solid #d1d9e0;">${(t.type || "totp").toUpperCase()}</span>
                ${t.algorithm || "SHA1"} / ${t.digits}位 / ${t.period}s
            </div>
          </div>
        `);
                } catch  {}
            }
            return e.push(`
        </div>
        <div class="footer"><p>This report was securely generated in the browser for backup purposes.</p></div>
      </body>
      </html>
    `), e.join(`
`);
        }
    }, W = {
        SALT_LEN: 32,
        IV_LEN: 12,
        ITERATIONS: 1e4,
        ALGORITHM: "aes-256-gcm",
        KDF: "PBKDF2"
    }, ae = {
        async decrypt (n, r) {
            try {
                const e = r.servicesEncrypted;
                if (!e || typeof e != "string") throw new P("无效的 2FAS 加密数据：找不到 servicesEncrypted 字段", "INVALID_2FAS_ENCRYPTED");
                const t = e.split(":");
                if (t.length < 3) throw new P("无效的 2FAS 加密格式：应为 salt:iv:ciphertext", "INVALID_2FAS_FORMAT");
                const i = [
                    t[0],
                    t[1],
                    t.slice(2).join(":")
                ].map((c)=>Uint8Array.from(atob(c.replace(/\s+/g, "")), (h)=>h.charCodeAt(0))), l = (c)=>{
                    const h = c.reduce((b, S)=>b + S.length, 0), d = new Uint8Array(h);
                    let _ = 0;
                    for (const b of c)d.set(b, _), _ += b.length;
                    return d;
                };
                let f, g, A;
                const m = i.findIndex((c)=>c.length === W.IV_LEN);
                if (m !== -1 && (g = i.splice(m, 1)[0], i.length > 0)) {
                    let c = 0;
                    for(let h = 1; h < i.length; h++)i[h].length < i[c].length && (c = h);
                    f = i.splice(c, 1)[0], A = i.length === 1 ? i[0] : l(i);
                }
                if (!f || !g || !A) {
                    let c = !1;
                    const h = [
                        {
                            salt: i[1],
                            iv: i[2],
                            cipher: i[0]
                        },
                        {
                            salt: i.length > 1 && i[1].length >= 44 ? i[1].slice(0, 32) : null,
                            iv: i.length > 1 && i[1].length >= 44 ? i[1].slice(32, 44) : null,
                            cipher: i[0]
                        },
                        {
                            salt: i[0].slice(0, 32),
                            iv: i[0].slice(32, 44),
                            cipher: i[0].slice(44)
                        }
                    ];
                    for (const d of h)if (!(!d.salt || !d.iv || !d.cipher) && d.iv.length === W.IV_LEN) try {
                        const _ = new TextEncoder().encode(n), b = await crypto.subtle.importKey("raw", _, {
                            name: "PBKDF2"
                        }, !1, [
                            "deriveKey"
                        ]), S = await crypto.subtle.deriveKey({
                            name: "PBKDF2",
                            salt: d.salt,
                            iterations: W.ITERATIONS,
                            hash: "SHA-256"
                        }, b, {
                            name: "AES-GCM",
                            length: 256
                        }, !1, [
                            "decrypt"
                        ]);
                        if (d.cipher.length >= 16) {
                            const v = d.cipher.slice(d.cipher.length - 16), I = d.cipher.slice(0, d.cipher.length - 16), U = await crypto.subtle.decrypt({
                                name: "AES-GCM",
                                iv: d.iv
                            }, S, new Uint8Array([
                                ...I,
                                ...v
                            ])), D = new TextDecoder().decode(U);
                            JSON.parse(D), f = d.salt, g = d.iv, A = d.cipher, c = !0;
                            break;
                        }
                    } catch  {}
                    !c && !f && (f = i[0], g = i[1], A = i[2], f.length !== W.SALT_LEN && g.length === W.SALT_LEN && ([f, g] = [
                        g,
                        f
                    ]), g.length !== W.IV_LEN && A.length === W.IV_LEN && ([g, A] = [
                        A,
                        g
                    ]));
                }
                if (f.length < 16) throw new P(`salt 长度过短：${f.length}`, "INVALID_SALT_LEN");
                if (g.length !== W.IV_LEN) throw new P("IV 长度错误", "INVALID_IV_LEN");
                const w = new TextEncoder().encode(n), y = await crypto.subtle.importKey("raw", w, {
                    name: "PBKDF2"
                }, !1, [
                    "deriveKey"
                ]), x = await crypto.subtle.deriveKey({
                    name: "PBKDF2",
                    salt: f,
                    iterations: W.ITERATIONS,
                    hash: "SHA-256"
                }, y, {
                    name: "AES-GCM",
                    length: 256
                }, !1, [
                    "decrypt"
                ]);
                if (A.length < 16) throw new P("密文过短", "CIPHERTEXT_TOO_SHORT");
                const E = A.slice(A.length - 16), u = A.slice(0, A.length - 16), s = await crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: g
                }, x, new Uint8Array([
                    ...u,
                    ...E
                ])), a = new TextDecoder().decode(s), p = JSON.parse(a);
                if (!Array.isArray(p)) throw new P("解密后的数据不是数组格式", "INVALID_DECRYPTED_FORMAT");
                return p;
            } catch (e) {
                throw e instanceof P ? e : new P(`2FAS 解密失败：${e.message || String(e)}`, "TWOFAS_DECRYPTION_FAILED", e);
            }
        },
        parsePlain (n) {
            return !n || !Array.isArray(n.services) ? [] : n.services.map((r)=>{
                let e = r.otp?.account || r.account || r.username || "";
                typeof e == "string" && e.includes(":") && (e = e.split(":").pop()?.trim() || e);
                const t = (r.otp?.tokenType || r.tokenType || "").toUpperCase();
                return {
                    service: r.otp?.issuer || r.name || "Unknown",
                    account: e,
                    secret: r.secret || "",
                    type: t,
                    algorithm: r.otp?.algorithm || r.algorithm || "SHA1",
                    digits: r.otp?.digits || r.digits || 6,
                    period: r.otp?.period || r.period || 30,
                    counter: r.otp?.counter || r.counter || 0
                };
            });
        }
    }, qe = {
        exportPlaintext (n) {
            const r = n.map((e, t)=>{
                const o = e.type === "steam";
                return {
                    name: e.service,
                    secret: e.secret,
                    otp: {
                        source: "manual",
                        account: e.account || "",
                        digits: o ? 5 : e.digits || 6,
                        period: e.period || 30,
                        algorithm: (e.algorithm || "SHA1").toUpperCase(),
                        tokenType: o ? "STEAM" : e.type?.toUpperCase() || "TOTP",
                        counter: e.counter || 0
                    },
                    order: {
                        position: t
                    },
                    badge: {
                        color: "Default"
                    },
                    updatedAt: Date.now(),
                    icon: {
                        selected: "Label",
                        label: {
                            text: (e.service || "?").slice(0, 2).toUpperCase(),
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
                services: r
            });
        }
    }, ie = {
        async decrypt (n, r) {
            try {
                const e = r.salt, t = r.kdfIterations, o = r.kdfType;
                if (o !== 0) throw new P(`不支持的 KDF 类型: ${o}`, "UNSUPPORTED_BITWARDEN_KDF");
                const i = new TextEncoder().encode(e), l = new TextEncoder().encode(n), f = await crypto.subtle.importKey("raw", l, {
                    name: "PBKDF2"
                }, !1, [
                    "deriveBits"
                ]), g = await crypto.subtle.deriveBits({
                    name: "PBKDF2",
                    salt: i,
                    iterations: t,
                    hash: "SHA-256"
                }, f, 256), A = new Uint8Array(g), m = await this._hkdfExpandSha256(A, "enc", 32), w = await this._hkdfExpandSha256(A, "mac", 32), y = async (u, s, a)=>{
                    const p = u.split(".");
                    if (p[0] !== "2") throw new Error("Unsupported encryption type");
                    const c = p[1].split("|"), h = Uint8Array.from(atob(c[0]), (L)=>L.charCodeAt(0)), d = Uint8Array.from(atob(c[1]), (L)=>L.charCodeAt(0)), _ = Uint8Array.from(atob(c[2]), (L)=>L.charCodeAt(0)), b = await crypto.subtle.importKey("raw", a, {
                        name: "HMAC",
                        hash: "SHA-256"
                    }, !1, [
                        "sign"
                    ]), S = new Uint8Array(h.length + d.length);
                    S.set(h, 0), S.set(d, h.length);
                    const v = new Uint8Array(await crypto.subtle.sign("HMAC", b, S));
                    if (_.length !== v.length) return null;
                    let I = 0;
                    for(let L = 0; L < _.length; L++)I |= _[L] ^ v[L];
                    if (I !== 0) return null;
                    const U = await crypto.subtle.importKey("raw", s, {
                        name: "AES-CBC"
                    }, !1, [
                        "decrypt"
                    ]), D = await crypto.subtle.decrypt({
                        name: "AES-CBC",
                        iv: h
                    }, U, d);
                    return new TextDecoder().decode(D);
                };
                if (!await y(r.encKeyValidation_DO_NOT_EDIT, m, w)) throw new Error("MAC verification failed");
                const E = await y(r.data, m, w);
                return JSON.parse(E);
            } catch (e) {
                throw new P(`Bitwarden 解密失败: ${e.message}`, "BITWARDEN_DECRYPTION_FAILED", e);
            }
        },
        async _hkdfExpandSha256 (n, r, e) {
            const t = new TextEncoder().encode(r || ""), o = await crypto.subtle.importKey("raw", n, {
                name: "HMAC",
                hash: "SHA-256"
            }, !1, [
                "sign"
            ]), i = new Uint8Array(e);
            let l = new Uint8Array(0), f = 0, g = 1;
            for(; f < e;){
                const A = new Uint8Array(l.length + t.length + 1);
                A.set(l, 0), A.set(t, l.length), A[A.length - 1] = g & 255, l = new Uint8Array(await crypto.subtle.sign("HMAC", o, A));
                const m = Math.min(l.length, e - f);
                i.set(l.slice(0, m), f), f += m, g++;
            }
            return i;
        },
        parseJson (n) {
            const r = [];
            return !n || !Array.isArray(n.items) ? [] : (n.items.forEach((e)=>{
                const t = e.login && e.login.totp || e.totp || e.uri || "";
                if (t) {
                    let o = V(t);
                    if (o) o.service = e.name || o.service, o.account = e.login && e.login.username || e.username || o.account;
                    else {
                        const i = t.replace(/\s/g, "").toUpperCase();
                        /^[A-Z2-7]+=*$/.test(i) && (o = {
                            service: e.name || "Unknown",
                            account: e.login && e.login.username || e.username || "Unknown",
                            secret: i,
                            algorithm: "SHA1",
                            digits: 6,
                            period: 30,
                            type: "totp",
                            counter: 0,
                            category: ""
                        });
                    }
                    o && r.push(o);
                }
            }), r);
        }
    }, je = {
        parseJson (n) {
            const r = typeof n == "string" ? j(n) : n;
            return !r || !Array.isArray(r.items) ? [] : r.items.map((e)=>{
                const t = e.login && e.login.totp || e.totp || e.uri || "";
                if (t) {
                    let o = V(t);
                    if (o) return o.service = e.name || o.service, o.account = e.login && e.login.username || e.username || o.account, o;
                }
                return null;
            }).filter(Boolean);
        }
    }, we = {
        exportToJson (n) {
            const r = n.map((e)=>{
                const t = e.type === "steam" ? `steam://${e.secret}` : ee(e);
                return {
                    favorite: !1,
                    id: crypto.randomUUID().toUpperCase(),
                    login: {
                        totp: t,
                        username: e.account || ""
                    },
                    name: e.service,
                    type: 1
                };
            });
            return JSON.stringify({
                encrypted: !1,
                items: r
            });
        },
        exportToCsv (n) {
            let r = `name,secret,totp,favorite,folder
`;
            return n.forEach((e)=>{
                const t = `"${e.service}${e.account ? ":" + e.account : ""}"`, o = e.type === "steam" ? `steam://${e.secret}` : ee(e);
                r += `${t},${e.secret},"${o}",0,
`;
            }), r;
        }
    }, Ae = {
        name: "Proton Authenticator (.json)",
        fileType: "application/json, text/plain",
        async parse (n, r) {
            let e;
            try {
                e = JSON.parse(n);
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            if (e.version !== 1 || !e.salt || !e.content) throw new Error("INVALID_FORMAT_OR_PASSWORD");
            if (!r) throw new Error("PASSWORD_REQUIRED");
            try {
                const t = atob(e.salt), o = new Uint8Array(t.length);
                for(let s = 0; s < t.length; s++)o[s] = t.charCodeAt(s);
                const i = atob(e.content), l = new Uint8Array(i.length);
                for(let s = 0; s < i.length; s++)l[s] = i.charCodeAt(s);
                const f = l.slice(0, 12), g = l.slice(12), m = (await he.hash({
                    pass: r,
                    salt: o,
                    time: 2,
                    mem: 19 * 1024,
                    hashLen: 32,
                    parallelism: 1,
                    type: he.ArgonType.Argon2id,
                    distPath: "/"
                })).hash, w = await window.crypto.subtle.importKey("raw", m, {
                    name: "AES-GCM"
                }, !1, [
                    "decrypt"
                ]), y = new TextEncoder().encode("proton.authenticator.export.v1"), x = await window.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: f,
                    additionalData: y,
                    tagLength: 128
                }, w, g), E = new TextDecoder().decode(x), u = JSON.parse(E);
                return this.parsePlaintext(u);
            } catch (t) {
                throw ue.error("Proton Authenticator decryption failed:", t), new Error("INVALID_FORMAT_OR_PASSWORD");
            }
        },
        parsePlaintext (n) {
            const e = (typeof n == "string" ? JSON.parse(n) : n).entries || [], t = [];
            for (const o of e)if (o.content && o.content.uri) {
                const i = V(o.content.uri);
                i && (o.content.name && (i.account = o.content.name), (!i.service || i.service === "Unknown") && (i.service = o.content.entry_type || "Unknown"), t.push(i));
            }
            return t;
        }
    }, Ye = {
        exportPlaintext (n) {
            const r = {
                version: 1,
                entries: n.map((e)=>{
                    const t = e.type === "steam", o = t ? `steam://${e.secret}` : ee(e);
                    return {
                        id: crypto.randomUUID(),
                        content: {
                            uri: o,
                            entry_type: t ? "Steam" : "Totp",
                            name: e.account || e.service
                        },
                        note: e.category || null
                    };
                })
            };
            return JSON.stringify(r, null, 2);
        }
    }, Xe = {
        name: "Proton Pass (.pgp)",
        fileType: "text/plain",
        async parse (n, r) {
            try {
                const e = await be("openpgp"), t = e?.default || e, o = await t.readMessage({
                    armoredMessage: n
                }), { data: i } = await t.decrypt({
                    message: o,
                    passwords: [
                        r
                    ],
                    format: "utf8"
                }), l = JSON.parse(i), f = [], g = l.vaults || {};
                for(const A in g){
                    const w = g[A].items || [];
                    for (const y of w){
                        const x = y.data || {}, E = x.content || {}, u = x.metadata || {};
                        if (E.totpUri) {
                            const s = V(E.totpUri);
                            s && (u.name && (s.service = u.name), E.itemUsername && (s.account = E.itemUsername), f.push(s));
                        }
                    }
                }
                return f;
            } catch (e) {
                throw ue.error("Proton Pass PGP decryption failed:", e), new Error("INVALID_FORMAT_OR_PASSWORD");
            }
        }
    }, Ze = {
        isEnteEncrypted (n) {
            return n && typeof n.kdfParams == "object" && typeof n.encryptedData == "string" && typeof n.encryptionNonce == "string";
        },
        async decryptAndParse (n, r) {
            let e;
            try {
                e = typeof n == "string" ? JSON.parse(n) : n;
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            if (!this.isEnteEncrypted(e)) throw new Error("INVALID_FORMAT_OR_PASSWORD");
            if (!r) throw new Error("PASSWORD_REQUIRED");
            const t = ce(e.kdfParams.salt), o = ce(e.encryptionNonce), i = ce(e.encryptedData), { opsLimit: l, memLimit: f } = e.kdfParams, g = Math.floor(f / 1024);
            let A;
            try {
                A = await Ce({
                    password: r,
                    salt: t,
                    parallelism: 1,
                    iterations: l,
                    memorySize: g,
                    hashLength: 32,
                    outputType: "binary"
                });
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            let m;
            try {
                const E = await et(), u = E.crypto_secretstream_xchacha20poly1305_init_pull(o, A), s = E.crypto_secretstream_xchacha20poly1305_pull(u, i);
                if (!s || !s.message) throw new Error("no result");
                m = s.message;
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            const y = new TextDecoder().decode(m).split(`
`), x = [];
            for (const E of y){
                const u = E.trim();
                if (!u.startsWith("otpauth://")) continue;
                const s = V(u);
                s && s.secret && x.push(s);
            }
            return x;
        }
    };
    function ce(n) {
        const r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(n.length / 4) * 4, "="), e = atob(r), t = new Uint8Array(e.length);
        for(let o = 0; o < e.length; o++)t[o] = e.charCodeAt(o);
        return t;
    }
    let re = null;
    async function et() {
        if (re) return re;
        const n = await be("libsodium"), r = n?.default || n;
        return await r.ready, re = r, re;
    }
    let tt, rt, nt, st, ot;
    tt = {
        async parse (n) {
            const r = typeof n == "string" ? j(n) : n;
            if (!r || !r.shared_secret) throw new P("无效的 Steam maFile: 找不到 shared_secret", "INVALID_MAFILE");
            const t = ((i)=>{
                const l = atob(i.trim()), f = new Uint8Array(l.length);
                for(let y = 0; y < l.length; y++)f[y] = l.charCodeAt(y);
                const g = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
                let A = 0, m = 0, w = "";
                for(let y = 0; y < f.length; y++)for(m = m << 8 | f[y], A += 8; A >= 5;)A -= 5, w += g[m >>> A & 31];
                for(A > 0 && (w += g[m << 5 - A & 31]); w.length % 8;)w += "=";
                return w;
            })(r.shared_secret);
            let o = r.account_name || "Steam Account";
            return typeof o == "string" && o.includes(":") && (o = o.split(":").pop().trim() || o), [
                {
                    service: "Steam",
                    account: o,
                    secret: t,
                    type: "steam",
                    algorithm: "SHA1",
                    digits: 5,
                    period: 30
                }
            ];
        }
    };
    rt = {
        async parse (n) {
            try {
                const r = n instanceof Uint8Array ? n : new Uint8Array(n), t = Ne(r)["export.data"];
                if (!t) throw new Error("未能在 .1pux 文件中找到 export.data");
                const o = new TextDecoder().decode(t), i = JSON.parse(o), l = [];
                return (i.accounts || []).forEach((g)=>{
                    (g.vaults || []).forEach((m)=>{
                        (m.items || []).forEach((y)=>{
                            const x = y.overview?.title || "Unknown", E = y.overview?.subtitle || "", u = (s)=>{
                                Array.isArray(s) && s.forEach((a)=>{
                                    a.value && typeof a.value == "object" && a.value.totp && l.push({
                                        service: x,
                                        account: E,
                                        secret: a.value.totp,
                                        algorithm: "SHA1",
                                        digits: 6,
                                        period: 30
                                    });
                                });
                            };
                            u(y.details?.loginFields), Array.isArray(y.details?.sections) && y.details.sections.forEach((s)=>u(s.fields));
                        });
                    });
                }), l;
            } catch (r) {
                throw new P("解析 1Password 备份失败: " + (r.message || String(r)), "ONEPASSWORD_PARSE_FAILED", r);
            }
        }
    };
    nt = {
        parse (n) {
            const r = typeof n == "string" ? j(n) : n;
            return !r || !Array.isArray(r.accounts) ? [] : r.accounts.map((e)=>({
                    service: e.issuerName || e.originalIssuerName || "Unknown",
                    account: e.userName || e.originalUserName || "",
                    secret: e.secret || "",
                    type: (e.type || "TOTP").toLowerCase(),
                    algorithm: e.algorithm || "SHA1",
                    digits: e.digits || 6,
                    period: e.timeStep || 30,
                    counter: e.counter || 0
                }));
        }
    };
    st = {
        parse (n) {
            if (!n) return [];
            const r = n.split(`
`), e = [];
            return r.forEach((t)=>{
                const o = t.trim();
                if (o.startsWith("otpauth://") || o.startsWith("steam://")) {
                    const i = V(o);
                    i && e.push(i);
                }
            }), e;
        }
    };
    ot = {
        exportToText (n) {
            return n.map((r)=>ee(r)).join(`
`);
        }
    };
    at = {
        nodeauth_encrypted: {
            requiresPassword: !0
        },
        "2fas_encrypted": {
            requiresPassword: !0
        },
        bitwarden_pass_encrypted: {
            requiresPassword: !0
        },
        aegis_encrypted: {
            requiresPassword: !0
        },
        proton_auth_encrypted: {
            requiresPassword: !0
        },
        proton_pass_pgp: {
            requiresPassword: !0
        },
        ente_encrypted: {
            requiresPassword: !0
        },
        phonefactor: {
            isBinary: !0,
            isGroup: !0
        },
        phonefactor_group: {
            isBinary: !0,
            isGroup: !0
        },
        "1password_pux": {
            isBinary: !0
        },
        steam_mafile: {
            isBinary: !1
        }
    };
    _t = {
        getStrategyMeta (n) {
            return at[n] || {
                requiresPassword: !1,
                isBinary: !1,
                isGroup: !1
            };
        },
        getGroupInfo (n) {
            const r = n.toLowerCase();
            if (r.includes("phonefactor")) {
                let e = "main";
                return r.includes("-wal") && (e = "wal"), r.includes("-shm") && (e = "shm"), {
                    groupId: "phonefactor_group",
                    role: e
                };
            }
            return null;
        },
        detectFileType (n, r) {
            return Me.detect(n, r);
        },
        deduplicateVault (n) {
            const r = (t, o)=>`${(t || "").toString().trim().toLowerCase()}:${(o || "").toString().trim().toLowerCase()}`, e = new Set;
            return n.filter((t)=>{
                const o = r(t.service, t.account);
                return e.has(o) ? !1 : (e.add(o), !0);
            });
        },
        async fetchAllVault () {
            const n = await fe.getVault({
                limit: 9999
            });
            if (!n.success) throw new P("无法获取账号数据", "VAULT_FETCH_FAILED");
            const r = n.vault || [];
            try {
                const { useAppLockStore: e } = await ne(async ()=>{
                    const { useAppLockStore: l } = await import("./index-NqcSa8kS.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((f)=>f.Q);
                    return {
                        useAppLockStore: l
                    };
                }, __vite__mapDeps([4,5,6,2,1,3,7,8,9])), { unmaskSecretFront: t } = await ne(async ()=>{
                    const { unmaskSecretFront: l } = await import("./index-NqcSa8kS.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((f)=>f.P);
                    return {
                        unmaskSecretFront: l
                    };
                }, __vite__mapDeps([4,5,6,2,1,3,7,8,9])), i = await e().getMaskingKey();
                if (i) return await Promise.all(r.map(async (l)=>{
                    if (l.secret && l.secret.startsWith("nodeauth:")) try {
                        const f = await t(l.secret, i);
                        return {
                            ...l,
                            secret: f
                        };
                    } catch  {
                        return l;
                    }
                    return l;
                }));
            } catch  {}
            return r;
        },
        async exportData (n, r, e) {
            const t = _e[r];
            switch(t && Array.isArray(n) && (n = n.filter((o)=>t.includes((o.type || "totp").toLowerCase()))), r){
                case "nodeauth_json":
                    return me.exportPlaintext(n);
                case "nodeauth_encrypted":
                    return await me.exportEncrypted(n, e);
                case "2fas":
                    return qe.exportPlaintext(n);
                case "aegis":
                    return Je.exportPlaintext(n);
                case "proton_auth":
                    return Ye.exportPlaintext(n);
                case "generic_otpauth":
                    return ot.exportToText(n);
                case "bitwarden_auth_csv":
                    return we.exportToCsv(n);
                case "bitwarden_auth_json":
                    return we.exportToJson(n);
                case "nodeauth_csv":
                    return Ge.exportToCsv(n);
                default:
                    throw new P("未知的导出类型: " + r, "UNKNOWN_EXPORT_TYPE");
            }
        },
        async parseImportData (n, r, e) {
            let t = [];
            if (r === "phonefactor" || r === "phonefactor_group") return await Ve.parse(n);
            if (r === "1password_pux") return await rt.parse(n);
            if (r === "steam_mafile") return await tt.parse(n);
            let o = n;
            (n instanceof ArrayBuffer || n instanceof Uint8Array) && (o = new TextDecoder("utf-8", {
                fatal: !1
            }).decode(n instanceof Uint8Array ? n : new Uint8Array(n)));
            const i = (l)=>typeof l == "string" ? JSON.parse(l) : l;
            switch(r){
                case "nodeauth_json":
                    t = ge.parsePlaintext(o);
                    break;
                case "nodeauth_encrypted":
                    t = await ge.parseEncrypted(o, e);
                    break;
                case "2fas":
                    t = ae.parsePlain(i(o));
                    break;
                case "2fas_encrypted":
                    const l = await ae.decrypt(e, i(o));
                    t = ae.parsePlain({
                        services: l
                    });
                    break;
                case "bitwarden_pass_json":
                    t = ie.parseJson(i(o));
                    break;
                case "bitwarden_auth_json":
                    t = je.parseJson(i(o));
                    break;
                case "bitwarden_pass_encrypted":
                    const f = await ie.decrypt(e, i(o));
                    t = ie.parseJson(f);
                    break;
                case "aegis":
                    t = oe.parseEntries(i(o).db || i(o));
                    break;
                case "aegis_encrypted":
                    const g = await oe.decryptDatabase(i(o), e);
                    t = oe.parseEntries(g);
                    break;
                case "proton_auth":
                    t = Ae.parsePlaintext(o);
                    break;
                case "proton_auth_encrypted":
                    t = await Ae.parse(o, e);
                    break;
                case "proton_pass_pgp":
                    t = await Xe.parse(o, e);
                    break;
                case "ente_encrypted":
                    t = await Ze.decryptAndParse(o, e);
                    break;
                case "generic_otpauth":
                    t = st.parse(o);
                    break;
                case "lastpass_auth_json":
                    t = nt.parse(o);
                    break;
                case "bitwarden_pass_csv":
                case "bitwarden_auth_csv":
                case "1password_csv":
                case "proton_pass_csv":
                case "dashlane_csv":
                case "nodeauth_csv":
                    t = We.parseCsv(o);
                    break;
            }
            return t.map((l)=>{
                typeof l.account == "string" && l.account.includes(":") && (l.account = l.account.split(":").pop()?.trim() || l.account), (!l.account || l.account.trim() === "") && (l.account = l.service || "Unknown Account");
                const f = pe(l);
                return f.id = l.id, f;
            }).filter((l)=>l && l.secret && l.service);
        },
        async exportAsGoogleAuthMigration (n) {
            return await Ke.exportToGoogleAuth(n);
        },
        async parseGoogleAuthQrImageFile (n) {
            return await He.parseImage(n);
        },
        async exportAsHtml (n) {
            return await Qe.exportToHtml(n);
        },
        async saveImportedVault (n) {
            return await fe.importVault(n);
        }
    };
});
export { at as MIGRATION_STRATEGY_META, _t as dataMigrationService, __tla };
