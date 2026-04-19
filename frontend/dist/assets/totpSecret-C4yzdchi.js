const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-iEwaeEs_.js","assets/element-plus-Ca9klJWt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-BC7NLEos.js","assets/index-C63vm3Zv.js","assets/pdf-utils-HZTV32cA.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-D6rhlcle.css"])))=>i.map(i=>d[i]);
import { _ as ge, __tla as __tla_0 } from "./pdf-utils-HZTV32cA.js";
import { E as Q, d as ye, i as be, f as we, az as $e, ad as le, $ as Ve, _ as Ce, w as Ae, v as ke, u as Se, W as Be, b as Ie, aF as Te, aG as Ue, au as Ee } from "./element-plus-Ca9klJWt.js";
import { f as ue, k as He, a3 as Me, e as v, I as R, M as j, Q as o, _ as c, O as s, P as r, Z as T, S as q, u as e, W as N, $ as W, l as C, J as ae, Y as oe, aD as Re } from "./vue-core-Daban9YF.js";
import { u as qe } from "./tanstack-query-C-OQsQoR.js";
import { c as ne, t as ze } from "./common-C-8Ql2yp.js";
import { a as De, c as x, d as ie, e as J, h as Oe, f as Y, g as Qe, i as Ne, b as Pe, j as Ge, k as Le, p as je, v as We, __tla as __tla_1 } from "./vaultService-CN5Qz0-L.js";
import { l as xe, i as Je, u as Ye, __tla as __tla_2 } from "./index-C63vm3Zv.js";
import { Q as Fe } from "./qr-utils-BC7NLEos.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-BelDkWW9.js";
import "./simplewebauthn-3qpiAaRi.js";
let js;
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
    function Ze() {
        const _ = v("base32"), f = v(""), m = v(""), h = v(""), g = v(""), n = v("NodeAuth.io"), A = v("NodeAuth"), b = v("SHA-1"), d = v(6), y = v(30), k = v(0), U = v(""), w = v(""), z = v(30);
        let S = null;
        ue(b, (i)=>{
            i === "STEAM" ? (d.value = 5, y.value = 30, n.value = "Steam") : d.value === 5 && (d.value = 6, n.value = "NodeAuth.io"), p("settings");
        });
        const p = async (i)=>{
            try {
                if (i === "base32") {
                    const t = De(f.value);
                    m.value = x(t), h.value = ie(t), g.value = J(t);
                } else if (i === "hex") {
                    const t = Oe(m.value);
                    t.length > 0 && (f.value = Y(t), h.value = ie(t), g.value = J(t));
                } else if (i === "ascii") {
                    const t = Qe(h.value);
                    f.value = Y(t), m.value = x(t), g.value = J(t);
                } else if (i === "base64") {
                    const t = Ne(g.value);
                    t.length > 0 && (f.value = Y(t), m.value = x(t), h.value = ie(t));
                }
                f.value ? U.value = Pe({
                    service: n.value,
                    account: A.value,
                    secret: f.value,
                    algorithm: b.value,
                    digits: d.value,
                    period: y.value
                }) : (U.value = "", w.value = ""), O();
            } catch (t) {
                xe.error(t);
            }
        }, P = ()=>p("base32"), H = ()=>p("hex"), G = ()=>p("ascii"), F = ()=>p("base64"), Z = ()=>p("settings"), L = ()=>{
            const i = new Uint8Array(20);
            window.crypto.getRandomValues(i), f.value = Y(i), p("base32");
        }, K = ()=>{
            const i = new Uint8Array(20);
            window.crypto.getRandomValues(i), m.value = x(i), p("hex");
        }, M = ()=>{
            const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
            let t = "";
            const V = new Uint32Array(20);
            window.crypto.getRandomValues(V);
            for(let $ = 0; $ < 20; $++)t += i[V[$] % i.length];
            h.value = t, p("ascii");
        }, X = ()=>{
            const i = new Uint8Array(20);
            window.crypto.getRandomValues(i), g.value = J(i), p("base64");
        }, O = async ()=>{
            if (!f.value) return;
            const i = y.value, t = Ge() / 1e3 + k.value;
            z.value = Math.ceil(i - t % i);
            try {
                const V = Math.floor(k.value / i);
                w.value = await Le(f.value, i, d.value, b.value, V);
            } catch  {
                w.value = "ERROR";
            }
        }, ee = (i, t = !1)=>{
            t ? k.value = 0 : k.value += i, O();
        }, se = (i)=>{
            const t = je(i);
            return t ? (t.secret && (f.value = t.secret, p("base32")), t.service && (n.value = t.service), t.account && (A.value = t.account), t.digits && (d.value = t.digits), t.period && (y.value = t.period), t.algorithm && (b.value = t.algorithm), p("settings"), !0) : !1;
        };
        return He(()=>{
            L(), S = setInterval(O, 1e3);
        }), Me(()=>{
            S && clearInterval(S);
        }), {
            app_active_tab: _,
            secretBase32: f,
            secretHex: m,
            secretAscii: h,
            secretBase64: g,
            issuer: n,
            account: A,
            algorithm: b,
            digits: d,
            period: y,
            app_time_offset: k,
            currentUri: U,
            currentCode: w,
            remaining: z,
            handleBase32Input: P,
            handleHexInput: H,
            handleAsciiInput: G,
            handleBase64Input: F,
            updateUri: Z,
            refreshBase32: L,
            refreshHex: K,
            refreshAscii: M,
            refreshBase64: X,
            adjustTime: ee,
            handleParsedUri: se
        };
    }
    function Ke(_, f) {
        const { t: m } = Je.global, h = v(!1), g = v(!1), n = v("");
        return ue(()=>_.currentUri.value, async (d)=>{
            if (d) try {
                n.value = await Fe.toDataURL(d, {
                    width: 200,
                    margin: 1
                });
            } catch  {
                n.value = "";
            }
            else n.value = "";
        }), {
            isSaving: h,
            showScanner: g,
            qrCodeUrl: n,
            handleScanSuccess: (d)=>{
                g.value = !1, _.handleParsedUri(d) ? Q.success(m("tools.qr_parsed")) : Q.warning(m("vault.generate_fail"));
            },
            saveToVault: async ()=>{
                if (!_.secretBase32.value) return Q.warning(m("tools.secret_empty"));
                if (!_.issuer.value || !_.account.value) return Q.warning(m("tools.fill_info"));
                h.value = !0;
                try {
                    (await We.createAccount({
                        service: _.issuer.value,
                        account: _.account.value,
                        secret: _.secretBase32.value,
                        digits: _.digits.value,
                        period: _.period.value,
                        algorithm: _.algorithm.value,
                        category: m("tools.title")
                    })).success && (Q.success(m("vault.add_success")), f.invalidateQueries([
                        "vault"
                    ]));
                } catch  {} finally{
                    h.value = !1;
                }
            }
        };
    }
    let Xe, es, ss, ts, ls, as, os, ns, is, us, rs, cs, ds, vs, ps, fs, ms, _s, hs, gs, ys, bs, ws, $s, Vs, Cs, As, ks, Ss, Bs, Is, Ts, Us, Es, Hs;
    Xe = {
        class: "tool-pane"
    };
    es = {
        class: "totp-layout"
    };
    ss = {
        class: "config-side"
    };
    ts = {
        class: "config-section"
    };
    ls = {
        class: "section-header"
    };
    as = {
        class: "section-title"
    };
    os = {
        class: "pill-tabs-container"
    };
    ns = {
        class: "unified-input-card"
    };
    is = {
        class: "inline-input-actions"
    };
    us = {
        class: "config-section"
    };
    rs = {
        class: "section-title"
    };
    cs = {
        class: "meta-row"
    };
    ds = {
        class: "input-label"
    };
    vs = {
        class: "input-label"
    };
    ps = {
        class: "config-section advanced-settings"
    };
    fs = {
        class: "section-title"
    };
    ms = {
        class: "advanced-row"
    };
    _s = {
        class: "config-section"
    };
    hs = {
        class: "section-header"
    };
    gs = {
        class: "section-title"
    };
    ys = {
        class: "unified-preview-card"
    };
    bs = {
        class: "preview-layout-grid"
    };
    ws = {
        class: "qr-unified-wrapper"
    };
    $s = [
        "src"
    ];
    Vs = {
        class: "totp-unified-details"
    };
    Cs = [
        "title"
    ];
    As = {
        key: 0,
        class: "uri-box"
    };
    ks = {
        class: "uri-text"
    };
    Ss = {
        class: "config-section time-travel-section"
    };
    Bs = {
        class: "section-header"
    };
    Is = {
        class: "section-title mb-0"
    };
    Ts = {
        class: "time-travel-controls"
    };
    Us = {
        class: "offset-display"
    };
    Es = {
        class: "offset-label"
    };
    Hs = {
        class: "config-section mt-20"
    };
    js = {
        __name: "totpSecret",
        setup (_) {
            const f = Ye(), m = Re(()=>ge(()=>import("./qrScanner-iEwaeEs_.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), h = qe(), g = Ze(), { app_active_tab: n, secretBase32: A, secretHex: b, secretAscii: d, secretBase64: y, issuer: k, account: U, algorithm: w, digits: z, period: S, app_time_offset: p, currentUri: P, currentCode: H, remaining: G, handleBase32Input: F, handleHexInput: Z, handleAsciiInput: L, handleBase64Input: K, updateUri: M, refreshBase32: X, refreshHex: O, refreshAscii: ee, refreshBase64: se, adjustTime: i } = g, { isSaving: t, showScanner: V, qrCodeUrl: $, handleScanSuccess: re, saveToVault: ce } = Ke(g, h), de = ()=>{
                n.value === "base32" ? X() : n.value === "hex" ? O() : n.value === "ascii" ? ee() : n.value === "base64" && se();
            }, ve = ()=>{
                let a = "";
                n.value === "base32" ? a = A.value : n.value === "hex" ? a = b.value : n.value === "ascii" ? a = d.value : n.value === "base64" && (a = y.value), a && ne(a);
            }, pe = ()=>{
                $.value && ze($.value, `nodeauth-qr-${U.value || "code"}.png`);
            };
            return (a, l)=>{
                const B = ye, D = be, E = we, I = Ve, te = Ce, fe = Se, me = Ue, _e = Ee, he = ke;
                return R(), j("div", Xe, [
                    o("div", es, [
                        o("div", ss, [
                            o("div", ts, [
                                o("div", ls, [
                                    o("h3", as, c(a.$t("tools.secret_config")), 1),
                                    s(B, {
                                        link: "",
                                        type: "primary",
                                        onClick: l[0] || (l[0] = (u)=>V.value = !0)
                                    }, {
                                        default: r(()=>[
                                                T(c(a.$t("vault.add_scan")), 1)
                                            ]),
                                        _: 1
                                    })
                                ]),
                                o("div", os, [
                                    o("div", {
                                        class: q([
                                            "pill-tab",
                                            {
                                                active: e(n) === "base32"
                                            }
                                        ]),
                                        onClick: l[1] || (l[1] = (u)=>n.value = "base32")
                                    }, "Base32", 2),
                                    o("div", {
                                        class: q([
                                            "pill-tab",
                                            {
                                                active: e(n) === "hex"
                                            }
                                        ]),
                                        onClick: l[2] || (l[2] = (u)=>n.value = "hex")
                                    }, c(a.$t("tools.totp_hex")), 3),
                                    o("div", {
                                        class: q([
                                            "pill-tab",
                                            {
                                                active: e(n) === "ascii"
                                            }
                                        ]),
                                        onClick: l[3] || (l[3] = (u)=>n.value = "ascii")
                                    }, "ASCII", 2),
                                    o("div", {
                                        class: q([
                                            "pill-tab",
                                            {
                                                active: e(n) === "base64"
                                            }
                                        ]),
                                        onClick: l[4] || (l[4] = (u)=>n.value = "base64")
                                    }, "Base64", 2)
                                ]),
                                o("div", ns, [
                                    N(s(D, {
                                        modelValue: e(A),
                                        "onUpdate:modelValue": l[5] || (l[5] = (u)=>C(A) ? A.value = u : null),
                                        onInput: e(F),
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
                                            W,
                                            e(n) === "base32"
                                        ]
                                    ]),
                                    N(s(D, {
                                        modelValue: e(b),
                                        "onUpdate:modelValue": l[6] || (l[6] = (u)=>C(b) ? b.value = u : null),
                                        onInput: e(Z),
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
                                            W,
                                            e(n) === "hex"
                                        ]
                                    ]),
                                    N(s(D, {
                                        modelValue: e(d),
                                        "onUpdate:modelValue": l[7] || (l[7] = (u)=>C(d) ? d.value = u : null),
                                        onInput: e(L),
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
                                            W,
                                            e(n) === "ascii"
                                        ]
                                    ]),
                                    N(s(D, {
                                        modelValue: e(y),
                                        "onUpdate:modelValue": l[8] || (l[8] = (u)=>C(y) ? y.value = u : null),
                                        onInput: e(K),
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
                                            W,
                                            e(n) === "base64"
                                        ]
                                    ]),
                                    o("div", is, [
                                        s(B, {
                                            link: "",
                                            type: "primary",
                                            onClick: de
                                        }, {
                                            default: r(()=>[
                                                    s(E, null, {
                                                        default: r(()=>[
                                                                s(e($e))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    T(" " + c(a.$t("tools.regenerate")), 1)
                                                ]),
                                            _: 1
                                        }),
                                        s(B, {
                                            link: "",
                                            type: "primary",
                                            onClick: ve
                                        }, {
                                            default: r(()=>[
                                                    s(E, null, {
                                                        default: r(()=>[
                                                                s(e(le))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    T(" " + c(a.$t("common.copy")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ])
                                ])
                            ]),
                            o("div", us, [
                                o("h3", rs, c(a.$t("tools.basic_info")), 1),
                                o("div", cs, [
                                    s(D, {
                                        modelValue: e(k),
                                        "onUpdate:modelValue": l[9] || (l[9] = (u)=>C(k) ? k.value = u : null),
                                        onInput: e(M)
                                    }, {
                                        prefix: r(()=>[
                                                o("span", ds, c(a.$t("vault.service")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]),
                                    s(D, {
                                        modelValue: e(U),
                                        "onUpdate:modelValue": l[10] || (l[10] = (u)=>C(U) ? U.value = u : null),
                                        onInput: e(M)
                                    }, {
                                        prefix: r(()=>[
                                                o("span", vs, c(a.$t("vault.account")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onInput"
                                    ])
                                ])
                            ]),
                            o("div", ps, [
                                o("h3", fs, c(a.$t("tools.advanced_settings")), 1),
                                o("div", ms, [
                                    s(te, {
                                        modelValue: e(w),
                                        "onUpdate:modelValue": l[11] || (l[11] = (u)=>C(w) ? w.value = u : null),
                                        onChange: e(M),
                                        placeholder: a.$t("tools.totp_algorithm"),
                                        class: "flex-1"
                                    }, {
                                        default: r(()=>[
                                                s(I, {
                                                    label: a.$t("tools.totp_algo_sha1"),
                                                    value: "SHA-1"
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                s(I, {
                                                    label: "SHA-256",
                                                    value: "SHA-256"
                                                }),
                                                s(I, {
                                                    label: "SHA-512",
                                                    value: "SHA-512"
                                                }),
                                                s(I, {
                                                    label: "STEAM",
                                                    value: "STEAM"
                                                })
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onChange",
                                        "placeholder"
                                    ]),
                                    s(te, {
                                        modelValue: e(z),
                                        "onUpdate:modelValue": l[12] || (l[12] = (u)=>C(z) ? z.value = u : null),
                                        onChange: e(M),
                                        placeholder: a.$t("tools.totp_digits"),
                                        class: "w-100",
                                        disabled: e(w) === "STEAM"
                                    }, {
                                        default: r(()=>[
                                                e(w) === "STEAM" ? (R(), ae(I, {
                                                    key: 0,
                                                    label: a.$t("vault.digits_5"),
                                                    value: 5
                                                }, null, 8, [
                                                    "label"
                                                ])) : oe("", !0),
                                                s(I, {
                                                    label: a.$t("vault.digits_6"),
                                                    value: 6
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                s(I, {
                                                    label: a.$t("vault.digits_8"),
                                                    value: 8
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
                                    ]),
                                    s(te, {
                                        modelValue: e(S),
                                        "onUpdate:modelValue": l[13] || (l[13] = (u)=>C(S) ? S.value = u : null),
                                        onChange: e(M),
                                        placeholder: a.$t("tools.totp_period"),
                                        class: "w-100",
                                        disabled: e(w) === "STEAM"
                                    }, {
                                        default: r(()=>[
                                                s(I, {
                                                    label: a.$t("vault.period_30s"),
                                                    value: 30
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                s(I, {
                                                    label: a.$t("vault.period_60s"),
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
                                    ])
                                ])
                            ]),
                            o("div", _s, [
                                o("div", hs, [
                                    o("h3", gs, c(a.$t("tools.preview")), 1),
                                    s(B, {
                                        link: "",
                                        type: "primary",
                                        onClick: pe,
                                        disabled: !e($)
                                    }, {
                                        default: r(()=>[
                                                s(E, null, {
                                                    default: r(()=>[
                                                            s(e(Ae))
                                                        ]),
                                                    _: 1
                                                }),
                                                T(" " + c(a.$t("common.save")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "disabled"
                                    ])
                                ]),
                                o("div", ys, [
                                    o("div", bs, [
                                        N((R(), j("div", ws, [
                                            e($) ? (R(), j("img", {
                                                key: 0,
                                                src: e($),
                                                alt: "QR Code",
                                                class: "qr-img-unified"
                                            }, null, 8, $s)) : (R(), ae(fe, {
                                                key: 1,
                                                description: a.$t("tools.totp_config_preview"),
                                                "image-size": 80
                                            }, null, 8, [
                                                "description"
                                            ]))
                                        ])), [
                                            [
                                                he,
                                                !e($)
                                            ]
                                        ]),
                                        o("div", Vs, [
                                            o("div", {
                                                class: "totp-code-clickable flex flex-items-center gap-10",
                                                onClick: l[14] || (l[14] = (u)=>e(H) && e(ne)(e(H), a.$t("common.copy_success"))),
                                                title: a.$t("common.copy")
                                            }, [
                                                o("span", {
                                                    class: q([
                                                        "totp-code-giant",
                                                        {
                                                            blur: !e(H)
                                                        }
                                                    ])
                                                }, c(e(H) || "------"), 3),
                                                e(H) ? (R(), ae(E, {
                                                    key: 0,
                                                    color: "var(--el-color-primary)",
                                                    size: "20"
                                                }, {
                                                    default: r(()=>[
                                                            s(e(le))
                                                        ]),
                                                    _: 1
                                                })) : oe("", !0)
                                            ], 8, Cs),
                                            o("div", {
                                                class: q([
                                                    "totp-timer",
                                                    {
                                                        urgent: e(G) < 5
                                                    }
                                                ]),
                                                style: {
                                                    "margin-left": "10px"
                                                }
                                            }, [
                                                s(E, null, {
                                                    default: r(()=>[
                                                            s(e(Be))
                                                        ]),
                                                    _: 1
                                                }),
                                                T(" " + c(e(G)) + "s " + c(a.$t("tools.refresh_after")), 1)
                                            ], 2)
                                        ])
                                    ])
                                ]),
                                e($) ? (R(), j("div", As, [
                                    o("div", ks, c(e(P)), 1),
                                    s(B, {
                                        link: "",
                                        type: "primary",
                                        onClick: l[15] || (l[15] = (u)=>e(ne)(e(P)))
                                    }, {
                                        default: r(()=>[
                                                s(E, null, {
                                                    default: r(()=>[
                                                            s(e(le))
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ])) : oe("", !0)
                            ]),
                            o("div", Ss, [
                                o("div", Bs, [
                                    o("h3", Is, c(a.$t("tools.time_offset")), 1),
                                    s(B, {
                                        link: "",
                                        type: "primary",
                                        onClick: l[16] || (l[16] = (u)=>e(i)(0, !0)),
                                        size: "small"
                                    }, {
                                        default: r(()=>[
                                                T(c(a.$t("tools.reset_time")), 1)
                                            ]),
                                        _: 1
                                    })
                                ]),
                                o("div", Ts, [
                                    o("div", Us, [
                                        o("span", Es, c(a.$t("tools.current_offset")), 1),
                                        o("span", {
                                            class: q([
                                                "offset-value",
                                                {
                                                    "has-offset": e(p) !== 0
                                                }
                                            ])
                                        }, c(e(p) > 0 ? "+" : "") + c(e(p)) + "s ", 3)
                                    ]),
                                    s(me, {
                                        class: "segmented-control"
                                    }, {
                                        default: r(()=>[
                                                s(B, {
                                                    onClick: l[17] || (l[17] = (u)=>e(i)(-e(S))),
                                                    size: "default"
                                                }, {
                                                    default: r(()=>[
                                                            s(E, {
                                                                class: "mr-10"
                                                            }, {
                                                                default: r(()=>[
                                                                        s(e(Ie))
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            T(" " + c(a.$t("tools.prev_period")), 1)
                                                        ]),
                                                    _: 1
                                                }),
                                                s(B, {
                                                    onClick: l[18] || (l[18] = (u)=>e(i)(e(S))),
                                                    size: "default"
                                                }, {
                                                    default: r(()=>[
                                                            T(c(a.$t("tools.next_period")) + " ", 1),
                                                            s(E, {
                                                                class: "ml-5"
                                                            }, {
                                                                default: r(()=>[
                                                                        s(e(Te))
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
                            o("div", Hs, [
                                s(B, {
                                    type: "success",
                                    size: "large",
                                    onClick: e(ce),
                                    class: "w-full",
                                    loading: e(t)
                                }, {
                                    default: r(()=>[
                                            T(c(a.$t("tools.save_to_vault")), 1)
                                        ]),
                                    _: 1
                                }, 8, [
                                    "onClick",
                                    "loading"
                                ])
                            ])
                        ])
                    ]),
                    s(_e, {
                        modelValue: e(V),
                        "onUpdate:modelValue": l[19] || (l[19] = (u)=>C(V) ? V.value = u : null),
                        title: a.$t("tools.totp_scan_qr_title"),
                        width: e(f).isMobile ? "90%" : "450px",
                        "destroy-on-close": "",
                        "append-to-body": ""
                    }, {
                        default: r(()=>[
                                s(e(m), {
                                    onScanSuccess: e(re)
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
export { js as default, __tla };
