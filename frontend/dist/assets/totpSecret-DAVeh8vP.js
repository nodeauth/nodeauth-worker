const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-BDXW96HW.js","assets/element-plus-CVRB8fAt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-ZD31REeY.js","assets/index-Bkp62iVv.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-H-OGOzP4.css"])))=>i.map(i=>d[i]);
import { _ as ke, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { E as L, d as Ae, i as Be, f as Ie, az as ve, ad as re, aF as Ue, a1 as Se, $ as Ee, _ as He, a0 as Te, w as Re, v as Ne, u as qe, W as ze, b as De, aG as Qe, aH as Oe, au as Me } from "./element-plus-CVRB8fAt.js";
import { f as pe, k as Pe, a3 as Ge, e as v, I as U, M, Q as o, _ as d, O as t, P as u, Z as w, S as Q, u as e, W as j, $ as F, l as $, J as Z, Y as x, aD as Le } from "./vue-core-Daban9YF.js";
import { u as je } from "./tanstack-query-C-OQsQoR.js";
import { c as de, t as We } from "./common-Ba0HmaOs.js";
import { a as Je, c as K, d as ce, e as X, h as Ye, f as ee, g as Fe, i as Ze, b as xe, j as Ke, k as Xe, p as et, v as tt, __tla as __tla_1 } from "./vaultService-DIRirBWX.js";
import { l as lt, i as st, u as at, __tla as __tla_2 } from "./index-Bkp62iVv.js";
import { Q as ot } from "./qr-utils-ZD31REeY.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-9eHlhal2.js";
import "./simplewebauthn-3qpiAaRi.js";
let ll;
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
    function nt() {
        const m = v("base32"), _ = v(""), h = v(""), y = v(""), b = v(""), i = v("totp"), p = v("NodeAuth.io"), S = v("NodeAuth"), c = v("SHA1"), g = v(6), V = v(30), k = v(0), A = v(0), q = v(""), T = v(""), E = v(30);
        let z = null;
        pe(i, (r)=>{
            r === "steam" ? (c.value = "SHA1", g.value = 5, V.value = 30, p.value = "Steam") : r === "hotp" ? (c.value = "SHA1", g.value = 6, V.value = 30, k.value = 0, p.value = "NodeAuth.io") : (c.value = "SHA1", g.value = 6, V.value = 30, p.value = "NodeAuth.io"), f("settings");
        });
        const f = async (r)=>{
            try {
                if (r === "base32") {
                    const s = Je(_.value);
                    h.value = K(s), y.value = ce(s), b.value = X(s);
                } else if (r === "hex") {
                    const s = Ye(h.value);
                    s.length > 0 && (_.value = ee(s), y.value = ce(s), b.value = X(s));
                } else if (r === "ascii") {
                    const s = Fe(y.value);
                    _.value = ee(s), h.value = K(s), b.value = X(s);
                } else if (r === "base64") {
                    const s = Ze(b.value);
                    s.length > 0 && (_.value = ee(s), h.value = K(s), y.value = ce(s));
                }
                _.value ? q.value = xe({
                    service: p.value,
                    account: S.value,
                    secret: _.value,
                    algorithm: c.value,
                    digits: g.value,
                    period: V.value,
                    counter: k.value,
                    type: i.value
                }) : (q.value = "", T.value = ""), P();
            } catch (s) {
                lt.error(s);
            }
        }, W = ()=>f("base32"), D = ()=>f("hex"), J = ()=>f("ascii"), te = ()=>f("base64"), le = ()=>f("settings"), Y = ()=>{
            const r = new Uint8Array(20);
            window.crypto.getRandomValues(r), _.value = ee(r), f("base32");
        }, se = ()=>{
            const r = new Uint8Array(20);
            window.crypto.getRandomValues(r), h.value = K(r), f("hex");
        }, R = ()=>{
            const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
            let s = "";
            const B = new Uint32Array(20);
            window.crypto.getRandomValues(B);
            for(let C = 0; C < 20; C++)s += r[B[C] % r.length];
            y.value = s, f("ascii");
        }, ae = ()=>{
            const r = new Uint8Array(20);
            window.crypto.getRandomValues(r), b.value = X(r), f("base64");
        }, P = async ()=>{
            if (!_.value) return;
            const r = V.value;
            let s = Ke() / 1e3 + A.value;
            E.value = Math.ceil(r - s % r), i.value === "hotp" && (E.value = 0);
            try {
                const B = i.value === "hotp" ? k.value : Math.floor(A.value / r);
                T.value = await Xe(_.value, r, g.value, c.value, i.value, B);
            } catch  {
                T.value = "ERROR";
            }
        }, oe = (r, s = !1)=>{
            s ? A.value = 0 : A.value += r, P();
        }, ne = ()=>{
            k.value++, f("settings");
        }, G = (r)=>{
            const s = et(r);
            return s ? (s.secret && (_.value = s.secret, f("base32")), s.service && (p.value = s.service), s.account && (S.value = s.account), s.digits && (g.value = s.digits), s.period && (V.value = s.period), s.counter && (k.value = s.counter), s.algorithm && (c.value = s.algorithm), f("settings"), !0) : !1;
        };
        return Pe(()=>{
            Y(), z = setInterval(P, 1e3);
        }), Ge(()=>{
            z && clearInterval(z);
        }), {
            app_active_tab: m,
            type: i,
            secretBase32: _,
            secretHex: h,
            secretAscii: y,
            secretBase64: b,
            issuer: p,
            account: S,
            algorithm: c,
            digits: g,
            period: V,
            app_time_offset: A,
            currentUri: q,
            currentCode: T,
            remaining: E,
            counter: k,
            handleBase32Input: W,
            handleHexInput: D,
            handleAsciiInput: J,
            handleBase64Input: te,
            updateUri: le,
            refreshBase32: Y,
            refreshHex: se,
            refreshAscii: R,
            refreshBase64: ae,
            adjustTime: oe,
            handleParsedUri: G,
            incrementCounter: ne
        };
    }
    function it(m, _) {
        const { t: h } = st.global, y = v(!1), b = v(!1), i = v("");
        return pe(()=>m.currentUri.value, async (c)=>{
            if (c) try {
                i.value = await ot.toDataURL(c, {
                    width: 200,
                    margin: 1
                });
            } catch  {
                i.value = "";
            }
            else i.value = "";
        }), {
            isSaving: y,
            showScanner: b,
            qrCodeUrl: i,
            handleScanSuccess: (c)=>{
                b.value = !1, m.handleParsedUri(c) ? L.success(h("tools.qr_parsed")) : L.warning(h("vault.generate_fail"));
            },
            saveToVault: async ()=>{
                if (!m.secretBase32.value) return L.warning(h("tools.secret_empty"));
                if (!m.issuer.value || !m.account.value) return L.warning(h("tools.fill_info"));
                y.value = !0;
                try {
                    (await tt.createAccount({
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
                    y.value = !1;
                }
            }
        };
    }
    let ut, rt, dt, ct, vt, pt, ft, mt, _t, ht, gt, yt, bt, Vt, wt, $t, Ct, kt, At, Bt, It, Ut, St, Et, Ht, Tt, Rt, Nt, qt, zt, Dt, Qt, Ot, Mt, Pt, Gt, Lt;
    ut = {
        class: "tool-pane"
    };
    rt = {
        class: "totp-layout"
    };
    dt = {
        class: "config-side"
    };
    ct = {
        class: "config-section"
    };
    vt = {
        class: "section-header"
    };
    pt = {
        class: "section-title"
    };
    ft = {
        class: "pill-tabs-container"
    };
    mt = {
        class: "unified-input-card"
    };
    _t = {
        class: "inline-input-actions"
    };
    ht = {
        class: "config-section"
    };
    gt = {
        class: "section-title"
    };
    yt = {
        class: "meta-row"
    };
    bt = {
        class: "input-label"
    };
    Vt = {
        class: "input-label"
    };
    wt = {
        class: "config-section advanced-settings"
    };
    $t = {
        class: "section-title"
    };
    Ct = {
        class: "mb-15"
    };
    kt = {
        class: "advanced-row"
    };
    At = {
        class: "config-section"
    };
    Bt = {
        class: "section-header"
    };
    It = {
        class: "section-title"
    };
    Ut = {
        class: "unified-preview-card"
    };
    St = {
        class: "preview-layout-grid"
    };
    Et = {
        class: "qr-unified-wrapper"
    };
    Ht = [
        "src"
    ];
    Tt = {
        class: "totp-unified-details"
    };
    Rt = [
        "title"
    ];
    Nt = {
        key: 1,
        style: {
            "margin-left": "10px"
        }
    };
    qt = {
        key: 0,
        class: "uri-box"
    };
    zt = {
        class: "uri-text"
    };
    Dt = {
        class: "config-section time-travel-section"
    };
    Qt = {
        class: "section-header"
    };
    Ot = {
        class: "section-title mb-0"
    };
    Mt = {
        class: "time-travel-controls"
    };
    Pt = {
        class: "offset-display"
    };
    Gt = {
        class: "offset-label"
    };
    Lt = {
        class: "config-section mt-20"
    };
    ll = {
        __name: "totpSecret",
        setup (m) {
            const _ = at(), h = Le(()=>ke(()=>import("./qrScanner-BDXW96HW.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), y = je(), b = nt(), { app_active_tab: i, type: p, secretBase32: S, secretHex: c, secretAscii: g, secretBase64: V, issuer: k, account: A, algorithm: q, digits: T, period: E, app_time_offset: z, counter: f, currentUri: W, currentCode: D, remaining: J, handleBase32Input: te, handleHexInput: le, handleAsciiInput: Y, handleBase64Input: se, updateUri: R, refreshBase32: ae, refreshHex: P, refreshAscii: oe, refreshBase64: ne, adjustTime: G, incrementCounter: r } = b, { isSaving: s, showScanner: B, qrCodeUrl: C, handleScanSuccess: fe, saveToVault: me } = it(b, y), _e = ()=>{
                i.value === "base32" ? ae() : i.value === "hex" ? P() : i.value === "ascii" ? oe() : i.value === "base64" && ne();
            }, he = ()=>{
                let a = "";
                i.value === "base32" ? a = S.value : i.value === "hex" ? a = c.value : i.value === "ascii" ? a = g.value : i.value === "base64" && (a = V.value), a && de(a);
            }, ge = ()=>{
                C.value && We(C.value, `nodeauth-qr-${A.value || "code"}.png`);
            };
            return (a, l)=>{
                const I = Ae, O = Be, H = Ie, ie = Ue, ye = Se, N = Ee, ue = He, be = Te, Ve = qe, we = Oe, $e = Me, Ce = Ne;
                return U(), M("div", ut, [
                    o("div", rt, [
                        o("div", dt, [
                            o("div", ct, [
                                o("div", vt, [
                                    o("h3", pt, d(a.$t("tools.secret_config")), 1),
                                    t(I, {
                                        link: "",
                                        type: "primary",
                                        onClick: l[0] || (l[0] = (n)=>B.value = !0)
                                    }, {
                                        default: u(()=>[
                                                w(d(a.$t("vault.add_scan")), 1)
                                            ]),
                                        _: 1
                                    })
                                ]),
                                o("div", ft, [
                                    o("div", {
                                        class: Q([
                                            "pill-tab",
                                            {
                                                active: e(i) === "base32"
                                            }
                                        ]),
                                        onClick: l[1] || (l[1] = (n)=>i.value = "base32")
                                    }, "Base32", 2),
                                    o("div", {
                                        class: Q([
                                            "pill-tab",
                                            {
                                                active: e(i) === "hex"
                                            }
                                        ]),
                                        onClick: l[2] || (l[2] = (n)=>i.value = "hex")
                                    }, d(a.$t("tools.totp_hex")), 3),
                                    o("div", {
                                        class: Q([
                                            "pill-tab",
                                            {
                                                active: e(i) === "ascii"
                                            }
                                        ]),
                                        onClick: l[3] || (l[3] = (n)=>i.value = "ascii")
                                    }, "ASCII", 2),
                                    o("div", {
                                        class: Q([
                                            "pill-tab",
                                            {
                                                active: e(i) === "base64"
                                            }
                                        ]),
                                        onClick: l[4] || (l[4] = (n)=>i.value = "base64")
                                    }, "Base64", 2)
                                ]),
                                o("div", mt, [
                                    j(t(O, {
                                        modelValue: e(S),
                                        "onUpdate:modelValue": l[5] || (l[5] = (n)=>$(S) ? S.value = n : null),
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
                                            F,
                                            e(i) === "base32"
                                        ]
                                    ]),
                                    j(t(O, {
                                        modelValue: e(c),
                                        "onUpdate:modelValue": l[6] || (l[6] = (n)=>$(c) ? c.value = n : null),
                                        onInput: e(le),
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
                                            F,
                                            e(i) === "hex"
                                        ]
                                    ]),
                                    j(t(O, {
                                        modelValue: e(g),
                                        "onUpdate:modelValue": l[7] || (l[7] = (n)=>$(g) ? g.value = n : null),
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
                                            F,
                                            e(i) === "ascii"
                                        ]
                                    ]),
                                    j(t(O, {
                                        modelValue: e(V),
                                        "onUpdate:modelValue": l[8] || (l[8] = (n)=>$(V) ? V.value = n : null),
                                        onInput: e(se),
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
                                            F,
                                            e(i) === "base64"
                                        ]
                                    ]),
                                    o("div", _t, [
                                        t(I, {
                                            link: "",
                                            type: "primary",
                                            onClick: _e
                                        }, {
                                            default: u(()=>[
                                                    t(H, null, {
                                                        default: u(()=>[
                                                                t(e(ve))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    w(" " + d(a.$t("tools.regenerate")), 1)
                                                ]),
                                            _: 1
                                        }),
                                        t(I, {
                                            link: "",
                                            type: "primary",
                                            onClick: he
                                        }, {
                                            default: u(()=>[
                                                    t(H, null, {
                                                        default: u(()=>[
                                                                t(e(re))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    w(" " + d(a.$t("common.copy")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ])
                                ])
                            ]),
                            o("div", ht, [
                                o("h3", gt, d(a.$t("tools.basic_info")), 1),
                                o("div", yt, [
                                    t(O, {
                                        modelValue: e(k),
                                        "onUpdate:modelValue": l[9] || (l[9] = (n)=>$(k) ? k.value = n : null),
                                        onInput: e(R)
                                    }, {
                                        prefix: u(()=>[
                                                o("span", bt, d(a.$t("vault.service")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onInput"
                                    ]),
                                    t(O, {
                                        modelValue: e(A),
                                        "onUpdate:modelValue": l[10] || (l[10] = (n)=>$(A) ? A.value = n : null),
                                        onInput: e(R)
                                    }, {
                                        prefix: u(()=>[
                                                o("span", Vt, d(a.$t("vault.account")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onInput"
                                    ])
                                ])
                            ]),
                            o("div", wt, [
                                o("h3", $t, d(a.$t("tools.advanced_settings")), 1),
                                o("div", Ct, [
                                    t(ye, {
                                        modelValue: e(p),
                                        "onUpdate:modelValue": l[11] || (l[11] = (n)=>$(p) ? p.value = n : null)
                                    }, {
                                        default: u(()=>[
                                                t(ie, {
                                                    label: "totp"
                                                }, {
                                                    default: u(()=>[
                                                            w(d(a.$t("vault.otp_type_totp")), 1)
                                                        ]),
                                                    _: 1
                                                }),
                                                t(ie, {
                                                    label: "hotp"
                                                }, {
                                                    default: u(()=>[
                                                            w(d(a.$t("vault.otp_type_hotp")), 1)
                                                        ]),
                                                    _: 1
                                                }),
                                                t(ie, {
                                                    label: "steam"
                                                }, {
                                                    default: u(()=>[
                                                            w(d(a.$t("vault.otp_type_steam")), 1)
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue"
                                    ])
                                ]),
                                o("div", kt, [
                                    t(ue, {
                                        modelValue: e(q),
                                        "onUpdate:modelValue": l[12] || (l[12] = (n)=>$(q) ? q.value = n : null),
                                        onChange: e(R),
                                        placeholder: a.$t("tools.totp_algorithm"),
                                        class: "flex-1",
                                        disabled: e(p) === "steam"
                                    }, {
                                        default: u(()=>[
                                                t(N, {
                                                    label: a.$t("tools.totp_algo_sha1"),
                                                    value: "SHA1"
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                t(N, {
                                                    label: "SHA256",
                                                    value: "SHA256"
                                                }),
                                                t(N, {
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
                                    ]),
                                    e(p) === "hotp" ? (U(), Z(be, {
                                        key: 0,
                                        modelValue: e(f),
                                        "onUpdate:modelValue": l[13] || (l[13] = (n)=>$(f) ? f.value = n : null),
                                        min: 0,
                                        onChange: e(R),
                                        class: "w-120",
                                        "controls-position": "right"
                                    }, {
                                        prefix: u(()=>[
                                                ...l[22] || (l[22] = [
                                                    o("span", {
                                                        class: "input-label-small"
                                                    }, "C:", -1)
                                                ])
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "modelValue",
                                        "onChange"
                                    ])) : x("", !0),
                                    t(ue, {
                                        modelValue: e(T),
                                        "onUpdate:modelValue": l[14] || (l[14] = (n)=>$(T) ? T.value = n : null),
                                        onChange: e(R),
                                        placeholder: a.$t("tools.totp_digits"),
                                        class: "w-100",
                                        disabled: e(p) === "steam"
                                    }, {
                                        default: u(()=>[
                                                e(p) === "steam" ? (U(), Z(N, {
                                                    key: 0,
                                                    label: a.$t("vault.digits_5"),
                                                    value: 5
                                                }, null, 8, [
                                                    "label"
                                                ])) : x("", !0),
                                                t(N, {
                                                    label: a.$t("vault.digits_6"),
                                                    value: 6
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                t(N, {
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
                                    t(ue, {
                                        modelValue: e(E),
                                        "onUpdate:modelValue": l[15] || (l[15] = (n)=>$(E) ? E.value = n : null),
                                        onChange: e(R),
                                        placeholder: a.$t("tools.totp_period"),
                                        class: "w-100",
                                        disabled: e(p) === "steam"
                                    }, {
                                        default: u(()=>[
                                                t(N, {
                                                    label: a.$t("vault.period_30s"),
                                                    value: 30
                                                }, null, 8, [
                                                    "label"
                                                ]),
                                                t(N, {
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
                            o("div", At, [
                                o("div", Bt, [
                                    o("h3", It, d(a.$t("tools.preview")), 1),
                                    t(I, {
                                        link: "",
                                        type: "primary",
                                        onClick: ge,
                                        disabled: !e(C)
                                    }, {
                                        default: u(()=>[
                                                t(H, null, {
                                                    default: u(()=>[
                                                            t(e(Re))
                                                        ]),
                                                    _: 1
                                                }),
                                                w(" " + d(a.$t("common.save")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "disabled"
                                    ])
                                ]),
                                o("div", Ut, [
                                    o("div", St, [
                                        j((U(), M("div", Et, [
                                            e(C) ? (U(), M("img", {
                                                key: 0,
                                                src: e(C),
                                                alt: "QR Code",
                                                class: "qr-img-unified"
                                            }, null, 8, Ht)) : (U(), Z(Ve, {
                                                key: 1,
                                                description: a.$t("tools.totp_config_preview"),
                                                "image-size": 80
                                            }, null, 8, [
                                                "description"
                                            ]))
                                        ])), [
                                            [
                                                Ce,
                                                !e(C)
                                            ]
                                        ]),
                                        o("div", Tt, [
                                            o("div", {
                                                class: "totp-code-clickable flex flex-items-center gap-10",
                                                onClick: l[16] || (l[16] = (n)=>e(D) && e(de)(e(D), a.$t("common.copy_success"))),
                                                title: a.$t("common.copy")
                                            }, [
                                                o("span", {
                                                    class: Q([
                                                        "totp-code-giant",
                                                        {
                                                            blur: !e(D)
                                                        }
                                                    ])
                                                }, d(e(D) || "------"), 3),
                                                e(D) ? (U(), Z(H, {
                                                    key: 0,
                                                    color: "var(--el-color-primary)",
                                                    size: "20"
                                                }, {
                                                    default: u(()=>[
                                                            t(e(re))
                                                        ]),
                                                    _: 1
                                                })) : x("", !0)
                                            ], 8, Rt),
                                            e(p) !== "hotp" ? (U(), M("div", {
                                                key: 0,
                                                class: Q([
                                                    "totp-timer",
                                                    {
                                                        urgent: e(J) < 5
                                                    }
                                                ]),
                                                style: {
                                                    "margin-left": "10px"
                                                }
                                            }, [
                                                t(H, null, {
                                                    default: u(()=>[
                                                            t(e(ze))
                                                        ]),
                                                    _: 1
                                                }),
                                                w(" " + d(e(J)) + "s " + d(a.$t("tools.refresh_after")), 1)
                                            ], 2)) : (U(), M("div", Nt, [
                                                t(I, {
                                                    type: "primary",
                                                    circle: "",
                                                    onClick: e(r)
                                                }, {
                                                    default: u(()=>[
                                                            t(H, null, {
                                                                default: u(()=>[
                                                                        t(e(ve))
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
                                e(C) ? (U(), M("div", qt, [
                                    o("div", zt, d(e(W)), 1),
                                    t(I, {
                                        link: "",
                                        type: "primary",
                                        onClick: l[17] || (l[17] = (n)=>e(de)(e(W)))
                                    }, {
                                        default: u(()=>[
                                                t(H, null, {
                                                    default: u(()=>[
                                                            t(e(re))
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    })
                                ])) : x("", !0)
                            ]),
                            o("div", Dt, [
                                o("div", Qt, [
                                    o("h3", Ot, d(a.$t("tools.time_offset")), 1),
                                    t(I, {
                                        link: "",
                                        type: "primary",
                                        onClick: l[18] || (l[18] = (n)=>e(G)(0, !0)),
                                        size: "small"
                                    }, {
                                        default: u(()=>[
                                                w(d(a.$t("tools.reset_time")), 1)
                                            ]),
                                        _: 1
                                    })
                                ]),
                                o("div", Mt, [
                                    o("div", Pt, [
                                        o("span", Gt, d(a.$t("tools.current_offset")), 1),
                                        o("span", {
                                            class: Q([
                                                "offset-value",
                                                {
                                                    "has-offset": e(z) !== 0
                                                }
                                            ])
                                        }, d(e(z) > 0 ? "+" : "") + d(e(z)) + "s ", 3)
                                    ]),
                                    t(we, {
                                        class: "segmented-control"
                                    }, {
                                        default: u(()=>[
                                                t(I, {
                                                    onClick: l[19] || (l[19] = (n)=>e(G)(-e(E))),
                                                    size: "default"
                                                }, {
                                                    default: u(()=>[
                                                            t(H, {
                                                                class: "mr-10"
                                                            }, {
                                                                default: u(()=>[
                                                                        t(e(De))
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            w(" " + d(a.$t("tools.prev_period")), 1)
                                                        ]),
                                                    _: 1
                                                }),
                                                t(I, {
                                                    onClick: l[20] || (l[20] = (n)=>e(G)(e(E))),
                                                    size: "default"
                                                }, {
                                                    default: u(()=>[
                                                            w(d(a.$t("tools.next_period")) + " ", 1),
                                                            t(H, {
                                                                class: "ml-5"
                                                            }, {
                                                                default: u(()=>[
                                                                        t(e(Qe))
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
                            o("div", Lt, [
                                t(I, {
                                    type: "success",
                                    size: "large",
                                    onClick: e(me),
                                    class: "w-full",
                                    loading: e(s)
                                }, {
                                    default: u(()=>[
                                            w(d(a.$t("tools.save_to_vault")), 1)
                                        ]),
                                    _: 1
                                }, 8, [
                                    "onClick",
                                    "loading"
                                ])
                            ])
                        ])
                    ]),
                    t($e, {
                        modelValue: e(B),
                        "onUpdate:modelValue": l[21] || (l[21] = (n)=>$(B) ? B.value = n : null),
                        title: a.$t("tools.totp_scan_qr_title"),
                        width: e(_).isMobile ? "90%" : "450px",
                        "destroy-on-close": "",
                        "append-to-body": ""
                    }, {
                        default: u(()=>[
                                t(e(h), {
                                    onScanSuccess: e(fe)
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
export { ll as default, __tla };
