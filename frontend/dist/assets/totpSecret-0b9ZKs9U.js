const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-2LAqxkPA.js","assets/element-plus-Dh0klhaa.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-C-MFlKj_.js","assets/index-NqcSa8kS.js","assets/pdf-utils-r4RjNe6V.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CLSE-HWx.css"])))=>i.map(i=>d[i]);
import { _ as Ae, __tla as __tla_0 } from "./pdf-utils-r4RjNe6V.js";
import { E as L, d as Be, i as Ie, f as Se, az as ve, ad as ue, $ as Ue, _ as ze, R as Ee, a0 as He, Z as Te, w as Re, v as qe, u as Ne, W as De, b as Oe, aF as Qe, aG as Me, au as Pe } from "./element-plus-Dh0klhaa.js";
import { f as fe, k as Ge, a3 as Le, e as f, I as g, M as R, Q as o, _ as c, O as l, P as d, Z as B, S as Q, u as e, W as F, $ as X, l as A, J as P, F as re, Y as pe, aD as Fe } from "./vue-core-Daban9YF.js";
import { u as We } from "./tanstack-query-C-OQsQoR.js";
import { c as de, t as je } from "./common-Cpp1KiKo.js";
import { b as Je, g as Ye, p as Ze, v as Ke, __tla as __tla_1 } from "./vaultService-DmxSVr-T.js";
import { n as Xe, o as x, p as ce, q as ee, t as xe, v as le, w as el, x as ll, l as tl, y as al, i as sl, u as ol, __tla as __tla_2 } from "./index-NqcSa8kS.js";
import { Q as nl } from "./qr-utils-C-MFlKj_.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-BAWP-Piz.js";
import "./simplewebauthn-3qpiAaRi.js";
let nt;
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
    function il() {
        const m = f("base32"), _ = f(""), h = f(""), V = f(""), C = f(""), n = f("totp"), u = f("NodeAuth.io"), E = f("NodeAuth"), p = f("SHA1"), b = f(6), y = f(30), I = f(0), S = f(0), N = f(""), q = f(""), H = f(30);
        let D = null;
        fe(n, (r)=>{
            r === "steam" ? (p.value = "SHA1", b.value = 5, y.value = 30, u.value = "Steam") : r === "blizzard" ? (p.value = "SHA1", b.value = 8, y.value = 30, u.value = "Battle.net") : r === "hotp" ? (p.value = "SHA1", b.value = 6, y.value = 30, I.value = 0, u.value = "NodeAuth.io") : (p.value = "SHA1", b.value = 6, y.value = 30, u.value = "NodeAuth.io"), v("settings");
        });
        const v = async (r)=>{
            try {
                if (r === "base32") {
                    const a = Xe(_.value);
                    h.value = x(a), V.value = ce(a), C.value = ee(a);
                } else if (r === "hex") {
                    const a = xe(h.value);
                    a.length > 0 && (_.value = le(a), V.value = ce(a), C.value = ee(a));
                } else if (r === "ascii") {
                    const a = el(V.value);
                    _.value = le(a), h.value = x(a), C.value = ee(a);
                } else if (r === "base64") {
                    const a = ll(C.value);
                    a.length > 0 && (_.value = le(a), h.value = x(a), V.value = ce(a));
                }
                _.value ? N.value = Je({
                    service: u.value,
                    account: E.value,
                    secret: _.value,
                    algorithm: p.value,
                    digits: b.value,
                    period: y.value,
                    counter: I.value,
                    type: n.value
                }) : (N.value = "", q.value = ""), Z();
            } catch (a) {
                tl.error(a);
            }
        }, W = ()=>v("base32"), O = ()=>v("hex"), j = ()=>v("ascii"), te = ()=>v("base64"), J = ()=>v("settings"), Y = ()=>{
            const r = new Uint8Array(20);
            window.crypto.getRandomValues(r), _.value = le(r), v("base32");
        }, ae = ()=>{
            const r = new Uint8Array(20);
            window.crypto.getRandomValues(r), h.value = x(r), v("hex");
        }, k = ()=>{
            const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
            let a = "";
            const U = new Uint32Array(20);
            window.crypto.getRandomValues(U);
            for(let $ = 0; $ < 20; $++)a += r[U[$] % r.length];
            V.value = a, v("ascii");
        }, se = ()=>{
            const r = new Uint8Array(20);
            window.crypto.getRandomValues(r), C.value = ee(r), v("base64");
        }, Z = async ()=>{
            if (!_.value) return;
            const r = y.value;
            let a = al() / 1e3 + S.value;
            H.value = Math.ceil(r - a % r), n.value === "hotp" && (H.value = 0);
            try {
                const U = n.value === "hotp" ? I.value : r, $ = n.value === "hotp" ? 0 : Math.floor(S.value / r);
                q.value = await Ye(_.value, U, b.value, p.value, n.value, $);
            } catch  {
                q.value = "ERROR";
            }
        }, oe = (r, a = !1)=>{
            a ? S.value = 0 : S.value += r, J();
        }, ne = ()=>{
            I.value++, v("settings");
        }, G = (r)=>{
            const a = Ze(r);
            return a ? (a.secret && (_.value = a.secret, v("base32")), a.service && (u.value = a.service), a.account && (E.value = a.account), a.digits && (b.value = a.digits), a.period && (y.value = a.period), a.counter && (I.value = a.counter), a.algorithm && (p.value = a.algorithm), v("settings"), !0) : !1;
        };
        return Ge(()=>{
            Y(), D = setInterval(Z, 1e3);
        }), Le(()=>{
            D && clearInterval(D);
        }), {
            app_active_tab: m,
            type: n,
            secretBase32: _,
            secretHex: h,
            secretAscii: V,
            secretBase64: C,
            issuer: u,
            account: E,
            algorithm: p,
            digits: b,
            period: y,
            app_time_offset: S,
            currentUri: N,
            currentCode: q,
            remaining: H,
            counter: I,
            handleBase32Input: W,
            handleHexInput: O,
            handleAsciiInput: j,
            handleBase64Input: te,
            updateUri: J,
            refreshBase32: Y,
            refreshHex: ae,
            refreshAscii: k,
            refreshBase64: se,
            adjustTime: oe,
            handleParsedUri: G,
            incrementCounter: ne
        };
    }
    function ul(m, _) {
        const { t: h } = sl.global, V = f(!1), C = f(!1), n = f("");
        return fe(()=>m.currentUri.value, async (p)=>{
            if (p) try {
                n.value = await nl.toDataURL(p, {
                    width: 200,
                    margin: 1
                });
            } catch  {
                n.value = "";
            }
            else n.value = "";
        }), {
            isSaving: V,
            showScanner: C,
            qrCodeUrl: n,
            handleScanSuccess: (p)=>{
                C.value = !1, m.handleParsedUri(p) ? L.success(h("tools.qr_parsed")) : L.warning(h("vault.generate_fail"));
            },
            saveToVault: async ()=>{
                if (!m.secretBase32.value) return L.warning(h("tools.secret_empty"));
                if (!m.issuer.value || !m.account.value) return L.warning(h("tools.fill_info"));
                V.value = !0;
                try {
                    (await Ke.createAccount({
                        service: m.issuer.value,
                        account: m.account.value,
                        secret: m.secretBase32.value,
                        type: m.type.value,
                        digits: m.digits.value,
                        period: m.period.value,
                        algorithm: m.algorithm.value,
                        category: h("tools.title")
                    })).success && (L.success(h("vault.add_success")), _.invalidateQueries([
                        "vault"
                    ]));
                } catch  {} finally{
                    V.value = !1;
                }
            }
        };
    }
    let rl, dl, cl, vl, pl, fl, ml, _l, hl, bl, gl, yl, $l, wl, Vl, Cl, kl, Al, Bl, Il, Sl, Ul, zl, El, Hl, Tl, Rl, ql, Nl, Dl, Ol, Ql, Ml, Pl, Gl, Ll, Fl, Wl, jl, Jl;
    rl = {
        class: "tool-pane"
    };
    dl = {
        class: "totp-layout"
    };
    cl = {
        class: "config-side"
    };
    vl = {
        class: "config-section"
    };
    pl = {
        class: "section-header"
    };
    fl = {
        class: "section-title"
    };
    ml = {
        class: "pill-tabs-container"
    };
    _l = {
        class: "unified-input-card"
    };
    hl = {
        class: "inline-input-actions"
    };
    bl = {
        class: "config-section"
    };
    gl = {
        class: "section-title"
    };
    yl = {
        class: "meta-row"
    };
    $l = {
        class: "input-label"
    };
    wl = {
        class: "input-label"
    };
    Vl = {
        class: "config-section advanced-settings"
    };
    Cl = {
        class: "section-title"
    };
    kl = {
        class: "mb-15"
    };
    Al = {
        class: "advanced-settings-grid"
    };
    Bl = {
        class: "label-text mb-5"
    };
    Il = {
        class: "label-text mb-5"
    };
    Sl = {
        class: "label-text mb-5"
    };
    Ul = {
        class: "config-section"
    };
    zl = {
        class: "section-header"
    };
    El = {
        class: "section-title"
    };
    Hl = {
        class: "unified-preview-card"
    };
    Tl = {
        class: "preview-layout-grid"
    };
    Rl = {
        class: "qr-unified-wrapper"
    };
    ql = [
        "src"
    ];
    Nl = {
        class: "totp-unified-details"
    };
    Dl = [
        "title"
    ];
    Ol = {
        key: 1,
        style: {
            "margin-left": "10px"
        }
    };
    Ql = {
        key: 0,
        class: "uri-box"
    };
    Ml = {
        class: "uri-text"
    };
    Pl = {
        class: "config-section time-travel-section"
    };
    Gl = {
        class: "section-header"
    };
    Ll = {
        class: "section-title mb-0"
    };
    Fl = {
        class: "time-travel-controls"
    };
    Wl = {
        class: "offset-display"
    };
    jl = {
        class: "offset-label"
    };
    Jl = {
        class: "config-section mt-20"
    };
    nt = {
        __name: "totpSecret",
        setup (m) {
            const _ = ol(), h = Fe(()=>Ae(()=>import("./qrScanner-2LAqxkPA.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), V = We(), C = il(), { app_active_tab: n, type: u, secretBase32: E, secretHex: p, secretAscii: b, secretBase64: y, issuer: I, account: S, algorithm: N, digits: q, period: H, app_time_offset: D, counter: v, currentUri: W, currentCode: O, remaining: j, handleBase32Input: te, handleHexInput: J, handleAsciiInput: Y, handleBase64Input: ae, updateUri: k, refreshBase32: se, refreshHex: Z, refreshAscii: oe, refreshBase64: ne, adjustTime: G, incrementCounter: r } = C, { isSaving: a, showScanner: U, qrCodeUrl: $, handleScanSuccess: me, saveToVault: _e } = ul(C, V), he = ()=>{
                n.value === "base32" ? se() : n.value === "hex" ? Z() : n.value === "ascii" ? oe() : n.value === "base64" && ne();
            }, be = ()=>{
                let t = "";
                n.value === "base32" ? t = E.value : n.value === "hex" ? t = p.value : n.value === "ascii" ? t = b.value : n.value === "base64" && (t = y.value), t && de(t);
            }, ge = ()=>{
                $.value && je($.value, `nodeauth-qr-${S.value || "code"}.png`);
            };
            return (t, s)=>{
                const z = Be, M = Ie, T = Se, w = Ue, K = ze, ie = Ee, ye = He, $e = Te, we = Ne, Ve = Me, Ce = Pe, ke = qe;
                return g(), R("div", rl, [
                    o("div", dl, [
                        o("div", cl, [
                            o("div", vl, [
                                o("div", pl, [
                                    o("h3", fl, c(t.$t("tools.secret_config")), 1),
                                    l(z, {
                                        link: "",
                                        type: "primary",
                                        onClick: s[0] || (s[0] = (i)=>U.value = !0)
                                    }, {
                                        default: d(()=>[
                                                B(c(t.$t("vault.add_scan")), 1)
                                            ]),
                                        _: 1
                                    })
                                ]),
                                o("div", ml, [
                                    o("div", {
                                        class: Q([
                                            "pill-tab",
                                            {
                                                active: e(n) === "base32"
                                            }
                                        ]),
                                        onClick: s[1] || (s[1] = (i)=>n.value = "base32")
                                    }, "Base32", 2),
                                    o("div", {
                                        class: Q([
                                            "pill-tab",
                                            {
                                                active: e(n) === "hex"
                                            }
                                        ]),
                                        onClick: s[2] || (s[2] = (i)=>n.value = "hex")
                                    }, c(t.$t("tools.totp_hex")), 3),
                                    o("div", {
                                        class: Q([
                                            "pill-tab",
                                            {
                                                active: e(n) === "ascii"
                                            }
                                        ]),
                                        onClick: s[3] || (s[3] = (i)=>n.value = "ascii")
                                    }, "ASCII", 2),
                                    o("div", {
                                        class: Q([
                                            "pill-tab",
                                            {
                                                active: e(n) === "base64"
                                            }
                                        ]),
                                        onClick: s[4] || (s[4] = (i)=>n.value = "base64")
                                    }, "Base64", 2)
                                ]),
                                o("div", _l, [
                                    F(l(M, {
                                        modelValue: e(E),
                                        "onUpdate:modelValue": s[5] || (s[5] = (i)=>A(E) ? E.value = i : null),
                                        onInput: e(te),
                                        placeholder: "JBSWY3DP...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            X,
                                            e(n) === "base32"
                                        ]
                                    ]),
                                    F(l(M, {
                                        modelValue: e(p),
                                        "onUpdate:modelValue": s[6] || (s[6] = (i)=>A(p) ? p.value = i : null),
                                        onInput: e(J),
                                        placeholder: "48656c6c6f...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            X,
                                            e(n) === "hex"
                                        ]
                                    ]),
                                    F(l(M, {
                                        modelValue: e(b),
                                        "onUpdate:modelValue": s[7] || (s[7] = (i)=>A(b) ? b.value = i : null),
                                        onInput: e(Y),
                                        placeholder: "Hello...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            X,
                                            e(n) === "ascii"
                                        ]
                                    ]),
                                    F(l(M, {
                                        modelValue: e(y),
                                        "onUpdate:modelValue": s[8] || (s[8] = (i)=>A(y) ? y.value = i : null),
                                        onInput: e(ae),
                                        placeholder: "SGVsbG8...",
                                        clearable: "",
                                        type: "textarea",
                                        rows: 3,
                                        class: "seamless-textarea"
                                    }, null, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]), [
                                        [
                                            X,
                                            e(n) === "base64"
                                        ]
                                    ]),
                                    o("div", hl, [
                                        l(z, {
                                            link: "",
                                            type: "primary",
                                            onClick: he
                                        }, {
                                            default: d(()=>[
                                                    l(T, null, {
                                                        default: d(()=>[
                                                                l(e(ve))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    B(" " + c(t.$t("tools.regenerate")), 1)
                                                ]),
                                            _: 1
                                        }),
                                        l(z, {
                                            link: "",
                                            type: "primary",
                                            onClick: be
                                        }, {
                                            default: d(()=>[
                                                    l(T, null, {
                                                        default: d(()=>[
                                                                l(e(ue))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    B(" " + c(t.$t("common.copy")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ])
                                ])
                            ]),
                            o("div", bl, [
                                o("h3", gl, c(t.$t("tools.basic_info")), 1),
                                o("div", yl, [
                                    l(M, {
                                        modelValue: e(I),
                                        "onUpdate:modelValue": s[9] || (s[9] = (i)=>A(I) ? I.value = i : null),
                                        onInput: e(k)
                                    }, {
                                        prefix: d(()=>[
                                                o("span", $l, c(t.$t("vault.service")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]),
                                    l(M, {
                                        modelValue: e(S),
                                        "onUpdate:modelValue": s[10] || (s[10] = (i)=>A(S) ? S.value = i : null),
                                        onInput: e(k)
                                    }, {
                                        prefix: d(()=>[
                                                o("span", wl, c(t.$t("vault.account")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onInput"
                                    ])
                                ])
                            ]),
                            o("div", Vl, [
                                o("h3", Cl, c(t.$t("tools.advanced_settings")), 1),
                                o("div", kl, [
                                    l(K, {
                                        modelValue: e(u),
                                        "onUpdate:modelValue": s[11] || (s[11] = (i)=>A(u) ? u.value = i : null),
                                        onChange: e(k),
                                        class: "w-full"
                                    }, {
                                        default: d(()=>[
                                                l(w, {
                                                    label: t.$t("vault.otp_type_totp"),
                                                    value: "totp"
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                l(w, {
                                                    label: t.$t("vault.otp_type_hotp"),
                                                    value: "hotp"
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                l(w, {
                                                    label: t.$t("vault.otp_type_steam"),
                                                    value: "steam"
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                l(w, {
                                                    label: t.$t("vault.otp_type_blizzard"),
                                                    value: "blizzard"
                                                }, null, 8, [
                                                    "label"
                                                ])
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onChange"
                                    ])
                                ]),
                                o("div", Al, [
                                    l($e, {
                                        gutter: 12
                                    }, {
                                        default: d(()=>[
                                                l(ie, {
                                                    span: 8
                                                }, {
                                                    default: d(()=>[
                                                            o("div", Bl, c(t.$t("vault.algorithm_label")), 1),
                                                            l(K, {
                                                                modelValue: e(N),
                                                                "onUpdate:modelValue": s[12] || (s[12] = (i)=>A(N) ? N.value = i : null),
                                                                onChange: e(k),
                                                                placeholder: t.$t("tools.totp_algorithm"),
                                                                class: "w-full",
                                                                disabled: e(u) === "steam" || e(u) === "blizzard"
                                                            }, {
                                                                default: d(()=>[
                                                                        l(w, {
                                                                            label: t.$t("tools.totp_algo_sha1"),
                                                                            value: "SHA1"
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ]),
                                                                        l(w, {
                                                                            label: "SHA256",
                                                                            value: "SHA256"
                                                                        }),
                                                                        l(w, {
                                                                            label: "SHA512",
                                                                            value: "SHA512"
                                                                        })
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue",
                                                                "onChange",
                                                                "placeholder",
                                                                "disabled"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }),
                                                l(ie, {
                                                    span: 8
                                                }, {
                                                    default: d(()=>[
                                                            o("div", Il, c(t.$t("vault.digits_label")), 1),
                                                            l(K, {
                                                                modelValue: e(q),
                                                                "onUpdate:modelValue": s[13] || (s[13] = (i)=>A(q) ? q.value = i : null),
                                                                onChange: e(k),
                                                                placeholder: t.$t("tools.totp_digits"),
                                                                class: "w-full",
                                                                disabled: e(u) === "steam" || e(u) === "blizzard"
                                                            }, {
                                                                default: d(()=>[
                                                                        e(u) === "steam" ? (g(), P(w, {
                                                                            key: 0,
                                                                            label: t.$t("vault.digits_5"),
                                                                            value: 5
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ])) : e(u) === "blizzard" ? (g(), P(w, {
                                                                            key: 1,
                                                                            label: t.$t("vault.digits_8"),
                                                                            value: 8
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ])) : (g(), R(re, {
                                                                            key: 2
                                                                        }, [
                                                                            l(w, {
                                                                                label: t.$t("vault.digits_6"),
                                                                                value: 6
                                                                            }, null, 8, [
                                                                                "label"
                                                                            ]),
                                                                            l(w, {
                                                                                label: t.$t("vault.digits_8"),
                                                                                value: 8
                                                                            }, null, 8, [
                                                                                "label"
                                                                            ])
                                                                        ], 64))
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue",
                                                                "onChange",
                                                                "placeholder",
                                                                "disabled"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }),
                                                l(ie, {
                                                    span: 8
                                                }, {
                                                    default: d(()=>[
                                                            o("div", Sl, c(e(u) === "hotp" ? t.$t("vault.counter_label") : t.$t("vault.period_label")), 1),
                                                            e(u) === "hotp" ? (g(), P(ye, {
                                                                key: 0,
                                                                modelValue: e(v),
                                                                "onUpdate:modelValue": s[14] || (s[14] = (i)=>A(v) ? v.value = i : null),
                                                                min: 0,
                                                                onChange: e(k),
                                                                class: "w-full",
                                                                "controls-position": "right"
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "onChange"
                                                            ])) : (g(), P(K, {
                                                                key: 1,
                                                                modelValue: e(H),
                                                                "onUpdate:modelValue": s[15] || (s[15] = (i)=>A(H) ? H.value = i : null),
                                                                onChange: e(k),
                                                                placeholder: t.$t("tools.totp_period"),
                                                                class: "w-full",
                                                                disabled: e(u) === "steam" || e(u) === "blizzard"
                                                            }, {
                                                                default: d(()=>[
                                                                        l(w, {
                                                                            label: t.$t("vault.period_30s"),
                                                                            value: 30
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ]),
                                                                        l(w, {
                                                                            label: t.$t("vault.period_60s"),
                                                                            value: 60
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue",
                                                                "onChange",
                                                                "placeholder",
                                                                "disabled"
                                                            ]))
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            o("div", Ul, [
                                o("div", zl, [
                                    o("h3", El, c(t.$t("tools.preview")), 1),
                                    l(z, {
                                        link: "",
                                        type: "primary",
                                        onClick: ge,
                                        disabled: !e($)
                                    }, {
                                        default: d(()=>[
                                                l(T, null, {
                                                    default: d(()=>[
                                                            l(e(Re))
                                                        ]),
                                                    _: 1
                                                }),
                                                B(" " + c(t.$t("common.save")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "disabled"
                                    ])
                                ]),
                                o("div", Hl, [
                                    o("div", Tl, [
                                        F((g(), R("div", Rl, [
                                            e($) ? (g(), R("img", {
                                                key: 0,
                                                src: e($),
                                                alt: "QR Code",
                                                class: "qr-img-unified"
                                            }, null, 8, ql)) : (g(), P(we, {
                                                key: 1,
                                                description: t.$t("tools.totp_config_preview"),
                                                "image-size": 80
                                            }, null, 8, [
                                                "description"
                                            ]))
                                        ])), [
                                            [
                                                ke,
                                                !e($)
                                            ]
                                        ]),
                                        o("div", Nl, [
                                            o("div", {
                                                class: "totp-code-clickable flex flex-items-center gap-10",
                                                onClick: s[16] || (s[16] = (i)=>e(O) && e(de)(e(O), t.$t("common.copy_success"))),
                                                title: t.$t("common.copy")
                                            }, [
                                                o("span", {
                                                    class: Q([
                                                        "totp-code-giant",
                                                        {
                                                            blur: !e(O)
                                                        }
                                                    ])
                                                }, c(e(O) || "------"), 3),
                                                e(O) ? (g(), P(T, {
                                                    key: 0,
                                                    color: "var(--el-color-primary)",
                                                    size: "20"
                                                }, {
                                                    default: d(()=>[
                                                            l(e(ue))
                                                        ]),
                                                    _: 1
                                                })) : pe("", !0)
                                            ], 8, Dl),
                                            e(u) !== "hotp" ? (g(), R("div", {
                                                key: 0,
                                                class: Q([
                                                    "totp-timer",
                                                    {
                                                        urgent: e(j) < 5
                                                    }
                                                ]),
                                                style: {
                                                    "margin-left": "10px"
                                                }
                                            }, [
                                                l(T, null, {
                                                    default: d(()=>[
                                                            l(e(De))
                                                        ]),
                                                    _: 1
                                                }),
                                                B(" " + c(e(j)) + "s " + c(t.$t("tools.refresh_after")), 1)
                                            ], 2)) : (g(), R("div", Ol, [
                                                l(z, {
                                                    type: "primary",
                                                    circle: "",
                                                    onClick: e(r)
                                                }, {
                                                    default: d(()=>[
                                                            l(T, null, {
                                                                default: d(()=>[
                                                                        l(e(ve))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick"
                                                ])
                                            ]))
                                        ])
                                    ])
                                ]),
                                e($) ? (g(), R("div", Ql, [
                                    o("div", Ml, c(e(W)), 1),
                                    l(z, {
                                        link: "",
                                        type: "primary",
                                        onClick: s[17] || (s[17] = (i)=>e(de)(e(W)))
                                    }, {
                                        default: d(()=>[
                                                l(T, null, {
                                                    default: d(()=>[
                                                            l(e(ue))
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ])) : pe("", !0)
                            ]),
                            o("div", Pl, [
                                o("div", Gl, [
                                    o("h3", Ll, c(e(u) === "hotp" ? t.$t("vault.counter_label") : t.$t("tools.time_offset")), 1),
                                    l(z, {
                                        link: "",
                                        type: "primary",
                                        onClick: s[18] || (s[18] = (i)=>e(u) === "hotp" ? (v.value = 0, e(k)()) : e(G)(0, !0)),
                                        size: "small"
                                    }, {
                                        default: d(()=>[
                                                B(c(t.$t("tools.reset_time")), 1)
                                            ]),
                                        _: 1
                                    })
                                ]),
                                o("div", Fl, [
                                    o("div", Wl, [
                                        o("span", jl, c(e(u) === "hotp" ? t.$t("vault.counter_label") : t.$t("tools.current_offset")), 1),
                                        o("span", {
                                            class: Q([
                                                "offset-value",
                                                {
                                                    "has-offset": e(u) === "hotp" ? e(v) > 0 : e(D) !== 0
                                                }
                                            ])
                                        }, [
                                            e(u) === "hotp" ? (g(), R(re, {
                                                key: 0
                                            }, [
                                                B(c(e(v)), 1)
                                            ], 64)) : (g(), R(re, {
                                                key: 1
                                            }, [
                                                B(c(e(D) > 0 ? "+" : "") + c(e(D)) + "s", 1)
                                            ], 64))
                                        ], 2)
                                    ]),
                                    l(Ve, {
                                        class: "segmented-control"
                                    }, {
                                        default: d(()=>[
                                                l(z, {
                                                    onClick: s[19] || (s[19] = (i)=>e(u) === "hotp" ? (v.value = Math.max(0, e(v) - 1), e(k)()) : e(G)(-e(H))),
                                                    size: "default"
                                                }, {
                                                    default: d(()=>[
                                                            l(T, {
                                                                class: "mr-10"
                                                            }, {
                                                                default: d(()=>[
                                                                        l(e(Oe))
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            B(" " + c(e(u) === "hotp" ? t.$t("common.prev") : t.$t("tools.prev_period")), 1)
                                                        ]),
                                                    _: 1
                                                }),
                                                l(z, {
                                                    onClick: s[20] || (s[20] = (i)=>e(u) === "hotp" ? (v.value++, e(k)()) : e(G)(e(H))),
                                                    size: "default"
                                                }, {
                                                    default: d(()=>[
                                                            B(c(e(u) === "hotp" ? t.$t("common.next") : t.$t("tools.next_period")) + " ", 1),
                                                            l(T, {
                                                                class: "ml-5"
                                                            }, {
                                                                default: d(()=>[
                                                                        l(e(Qe))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            o("div", Jl, [
                                l(z, {
                                    type: "success",
                                    size: "large",
                                    onClick: e(_e),
                                    class: "w-full",
                                    loading: e(a)
                                }, {
                                    default: d(()=>[
                                            B(c(t.$t("tools.save_to_vault")), 1)
                                        ]),
                                    _: 1
                                }, 8, [
                                    "onClick",
                                    "loading"
                                ])
                            ])
                        ])
                    ]),
                    l(Ce, {
                        modelValue: e(U),
                        "onUpdate:modelValue": s[21] || (s[21] = (i)=>A(U) ? U.value = i : null),
                        title: t.$t("tools.totp_scan_qr_title"),
                        width: e(_).isMobile ? "90%" : "450px",
                        "destroy-on-close": "",
                        "append-to-body": ""
                    }, {
                        default: d(()=>[
                                l(e(h), {
                                    onScanSuccess: e(me)
                                }, null, 8, [
                                    "onScanSuccess"
                                ])
                            ]),
                        _: 1
                    }, 8, [
                        "modelValue",
                        "title",
                        "width"
                    ])
                ]);
            };
        }
    };
});
export { nt as default, __tla };
