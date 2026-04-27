const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-2LAqxkPA.js","assets/element-plus-Dh0klhaa.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-C-MFlKj_.js","assets/index-NqcSa8kS.js","assets/pdf-utils-r4RjNe6V.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CLSE-HWx.css"])))=>i.map(i=>d[i]);
import { _ as W, __tla as __tla_0 } from "./pdf-utils-r4RjNe6V.js";
import { p as x, f as ee, ay as ae, aF as le, aR as te, a1 as oe, G as se, i as re, d as ue, az as ne, _ as ie, $ as de, Z as ce, R as ve, a0 as pe, F as me, a8 as _e, aP as fe, X as be, E as z, o as ge } from "./element-plus-Dh0klhaa.js";
import { p as ye, v as C, u as M, __tla as __tla_1 } from "./vaultService-DmxSVr-T.js";
import { _ as he, a as Ve, u as ze, C as $e, i as we, v as ke, __tla as __tla_2 } from "./index-NqcSa8kS.js";
import { aB as Se, k as Ee, e as $, f as Ae, I as c, M as b, Q as u, O as t, P as s, u as g, _ as y, Y as E, F as D, ac as Be, J as h, X as Ce, Z as Te, c as Ue, E as d, aD as qe } from "./vue-core-Daban9YF.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-BAWP-Piz.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let ma;
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
    let Re, He, Fe, Me, De, Ie, Oe, Pe, Le, Ne, Ze, Ge, Qe, Xe, Je, Ye, je, Ke, We, xe, ea, aa, la, ta;
    Re = {
        class: "add-vault-wrapper"
    };
    He = {
        class: "tab-card-wrapper"
    };
    Fe = {
        class: "page-header-container"
    };
    Me = {
        class: "page-header-hero"
    };
    De = {
        class: "hero-icon-wrapper"
    };
    Ie = {
        key: 0
    };
    Oe = {
        class: "page-desc-text"
    };
    Pe = {
        class: "max-w-600 m-auto"
    };
    Le = {
        class: "batch-import-container-top mb-10"
    };
    Ne = {
        class: "card-left"
    };
    Ze = {
        class: "icon-ring"
    };
    Ge = {
        class: "text-meta"
    };
    Qe = {
        class: "entry-title"
    };
    Xe = {
        class: "entry-desc"
    };
    Je = {
        class: "flex-center mb-20"
    };
    Ye = {
        class: "flex-center gap-5"
    };
    je = {
        key: 0
    };
    Ke = {
        key: 1,
        class: "vault-manual-form-container"
    };
    We = {
        class: "m-auto w-full"
    };
    xe = {
        key: 1,
        class: "mb-20 bg-secondary-subtle border-radius-md blizzard-restore-section"
    };
    ea = {
        class: "blizzard-restore-header"
    };
    aa = {
        class: "mt-20 p-10 rounded-10 blizzard-hint-box"
    };
    la = [
        "innerHTML"
    ];
    ta = {
        __name: "addVault",
        emits: [
            "success"
        ],
        setup (oa, { emit: I }) {
            const O = qe(()=>W(()=>import("./qrScanner-2LAqxkPA.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), T = I, k = Ve(), w = ze(), U = $e(), q = Se();
            Ee(()=>{
                if (w.initialAddVaultParams) {
                    const e = w.initialAddVaultParams;
                    e.mode === "manual" && (m.value = "manual"), e.type === "blizzard" && (a.value.type = "blizzard", a.value.service = "Battle.net"), w.setAddVaultParams(null);
                }
                q.query.mode === "manual" && (m.value = "manual"), q.query.type === "blizzard" && (a.value.type = "blizzard", a.value.service = "Battle.net");
            });
            const { t: r } = we.global, m = $("camera"), P = Ue(()=>[
                    {
                        label: r("vault.add_mode_camera"),
                        value: "camera",
                        icon: _e
                    },
                    {
                        label: r("vault.add_mode_image"),
                        value: "image",
                        icon: fe
                    },
                    {
                        label: r("vault.add_account"),
                        value: "manual",
                        icon: be
                    }
                ]), R = ()=>({
                    type: "totp",
                    service: "",
                    account: "",
                    secret: "",
                    category: "",
                    digits: 6,
                    period: 30,
                    counter: 0,
                    algorithm: "SHA1"
                }), V = $(!1), A = $(null), a = $(R()), H = $(!1), i = $({
                serial: "",
                restoreCode: "",
                ssoToken: ""
            }), L = async ()=>{
                if (!i.value.serial || !i.value.restoreCode || !i.value.ssoToken) {
                    z.warning(r("vault.blizzard_fields_required"));
                    return;
                }
                H.value = !0;
                try {
                    const e = await C.restoreBlizzardNet(i.value.serial, i.value.restoreCode, i.value.ssoToken);
                    e.success && e.secret ? (a.value.secret = e.secret, a.value.service = "Battle.net", a.value.digits = 8, i.value = {
                        serial: "",
                        restoreCode: "",
                        ssoToken: ""
                    }) : z.error(e.error || r("vault.restore_failed"));
                } finally{
                    H.value = !1;
                }
            }, N = (e, l, n)=>{
                if (!l) return n(new Error(r("vault.require_secret")));
                const _ = l.replace(/\s/g, "");
                if (_.length < 16) return n(new Error(r("vault.secret_min_length")));
                if (!/^[A-Z2-7]+$/i.test(_)) return n(new Error(r("vault.secret_invalid_char")));
                n();
            }, Z = {
                service: [
                    {
                        required: !0,
                        message: r("vault.require_service"),
                        trigger: "blur"
                    }
                ],
                account: [
                    {
                        required: !0,
                        message: r("vault.require_account"),
                        trigger: "blur"
                    }
                ],
                secret: [
                    {
                        required: !0,
                        validator: (e, l, n)=>a.value.type === "blizzard" ? n() : N(e, l, n),
                        trigger: "blur"
                    }
                ]
            };
            Ae(()=>a.value.type, (e)=>{
                const l = e === "steam", n = e === "blizzard", _ = e === "hotp";
                a.value.algorithm = "SHA1", l ? (a.value.digits = 5, a.value.period = 30) : n ? (a.value.digits = 8, a.value.period = 30) : (a.value.digits = 6, a.value.period = 30), _ && (a.value.counter = 0), l && !a.value.service && (a.value.service = "Steam"), n && !a.value.service && (a.value.service = "Battle.net");
            });
            const G = ()=>{
                const e = new Uint8Array(20);
                window.crypto.getRandomValues(e), a.value.secret = ke(e);
            }, Q = async ()=>{
                if (A.value) {
                    if (a.value.type === "blizzard" && !a.value.secret) {
                        if (!i.value.serial || !i.value.restoreCode || !i.value.ssoToken) {
                            z.warning(r("vault.blizzard_fields_required"));
                            return;
                        }
                        V.value = !0;
                        try {
                            if (await L(), !a.value.secret) {
                                V.value = !1;
                                return;
                            }
                        } catch  {
                            V.value = !1;
                            return;
                        }
                    }
                    await A.value.validate(async (e)=>{
                        if (e) {
                            V.value = !0;
                            try {
                                if ((await C.createAccount(a.value)).success) {
                                    U.isOffline || await k.updateMetadata({
                                        delta: 1
                                    }), z.success(r("vault.add_success")), a.value = R(), k.markDirty();
                                    const { fetchTrash: n } = M();
                                    n(), T("success");
                                }
                            } catch  {} finally{
                                V.value = !1;
                            }
                        }
                    });
                }
            }, X = async (e)=>{
                try {
                    const l = ye(e);
                    if (!l) {
                        z.error(r("vault.invalid_qr_format"));
                        return;
                    }
                    if (await ge.confirm(d("div", {
                        class: "confirmation-box"
                    }, [
                        d("div", {
                            class: "confirmation-row"
                        }, [
                            d("span", {
                                class: "confirmation-label"
                            }, r("vault.service_label")),
                            d("span", {
                                class: "confirmation-value"
                            }, l.service || r("vault.unknown_service"))
                        ]),
                        d("div", {
                            class: "confirmation-row"
                        }, [
                            d("span", {
                                class: "confirmation-label"
                            }, r("vault.account_label")),
                            d("span", {
                                class: "confirmation-value mono"
                            }, l.account || r("vault.unnamed_account"))
                        ]),
                        d("div", {
                            class: "confirmation-row"
                        }, [
                            d("span", {
                                class: "confirmation-label"
                            }, r("vault.param_label")),
                            d("div", {
                                class: "confirmation-tags"
                            }, [
                                d("span", {
                                    class: "confirmation-tag confirmation-tag-primary"
                                }, l.type === "steam" ? r("vault.otp_type_steam") : l.type === "hotp" ? r("vault.otp_type_hotp") : r("vault.otp_type_totp")),
                                d("span", {
                                    class: "confirmation-tag confirmation-tag-info"
                                }, l.algorithm || "SHA1"),
                                d("span", {
                                    class: "confirmation-tag confirmation-tag-success"
                                }, `${l.digits || 6}${r("vault.digits_suffix")}`),
                                l.type === "hotp" ? d("span", {
                                    class: "confirmation-tag confirmation-tag-warning"
                                }, `${r("vault.counter_label")}: ${l.counter || 0}`) : d("span", {
                                    class: "confirmation-tag confirmation-tag-warning"
                                }, `${l.period || 30}${r("vault.period_suffix")}`)
                            ])
                        ])
                    ]), r("vault.confirm_add_title"), {
                        confirmButtonText: r("common.confirm"),
                        cancelButtonText: r("common.cancel"),
                        type: "success",
                        center: !0
                    }), (await C.addFromUri(e, "Scan")).success) {
                        U.isOffline || await k.updateMetadata({
                            delta: 1
                        }), z.success(r("vault.add_success")), k.markDirty();
                        const { fetchTrash: _ } = M();
                        _(), T("success");
                    }
                } catch (l) {
                    l !== "cancel" && console.error(l);
                }
            };
            return (e, l)=>{
                const n = ee, _ = te, J = oe, f = re, p = se, F = ue, v = de, S = ie, B = ve, Y = pe, j = ce, K = me;
                return c(), b("div", Re, [
                    u("div", He, [
                        u("div", Fe, [
                            u("div", Me, [
                                u("div", De, [
                                    t(n, {
                                        size: 28
                                    }, {
                                        default: s(()=>[
                                                t(g(x))
                                            ]),
                                        _: 1
                                    })
                                ]),
                                g(w).isMobile ? E("", !0) : (c(), b("h2", Ie, y(e.$t("menu.add")), 1))
                            ]),
                            u("p", Oe, y(e.$t("vault.add_account_tip")), 1)
                        ]),
                        u("div", Pe, [
                            u("div", Le, [
                                u("div", {
                                    class: "import-card-hero",
                                    onClick: l[0] || (l[0] = (o)=>g(w).setActiveTab("migration-import"))
                                }, [
                                    u("div", Ne, [
                                        u("div", Ze, [
                                            t(n, null, {
                                                default: s(()=>[
                                                        t(g(ae))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                        u("div", Ge, [
                                            u("div", Qe, y(e.$t("vault.batch_import_entry_title")), 1),
                                            u("div", Xe, y(e.$t("vault.batch_import_entry_desc")), 1)
                                        ])
                                    ]),
                                    t(n, {
                                        class: "card-arrow"
                                    }, {
                                        default: s(()=>[
                                                t(g(le))
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            u("div", Je, [
                                t(J, {
                                    modelValue: m.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = (o)=>m.value = o),
                                    class: "mode-switcher-radio"
                                }, {
                                    default: s(()=>[
                                            (c(!0), b(D, null, Be(P.value, (o)=>(c(), h(_, {
                                                    key: o.value,
                                                    label: o.value
                                                }, {
                                                    default: s(()=>[
                                                            u("div", Ye, [
                                                                t(n, null, {
                                                                    default: s(()=>[
                                                                            (c(), h(Ce(o.icon)))
                                                                        ]),
                                                                    _: 2
                                                                }, 1024),
                                                                u("span", null, y(o.label), 1)
                                                            ])
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "label"
                                                ]))), 128))
                                        ]),
                                    _: 1
                                }, 8, [
                                    "modelValue"
                                ])
                            ]),
                            m.value === "camera" || m.value === "image" ? (c(), b("div", je, [
                                t(g(O), {
                                    "force-mode": m.value,
                                    onScanSuccess: X
                                }, null, 8, [
                                    "force-mode"
                                ])
                            ])) : m.value === "manual" ? (c(), b("div", Ke, [
                                u("div", We, [
                                    t(K, {
                                        model: a.value,
                                        "label-position": "top",
                                        rules: Z,
                                        ref_key: "addFormRef",
                                        ref: A,
                                        class: "vault-manual-form-wrapper"
                                    }, {
                                        default: s(()=>[
                                                t(p, {
                                                    label: e.$t("vault.service_name"),
                                                    prop: "service"
                                                }, {
                                                    default: s(()=>[
                                                            t(f, {
                                                                modelValue: a.value.service,
                                                                "onUpdate:modelValue": l[2] || (l[2] = (o)=>a.value.service = o),
                                                                placeholder: e.$t("vault.input_service_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                t(p, {
                                                    label: e.$t("vault.account_identifier"),
                                                    prop: "account"
                                                }, {
                                                    default: s(()=>[
                                                            t(f, {
                                                                modelValue: a.value.account,
                                                                "onUpdate:modelValue": l[3] || (l[3] = (o)=>a.value.account = o),
                                                                placeholder: e.$t("vault.input_account_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                a.value.type !== "blizzard" ? (c(), h(p, {
                                                    key: 0,
                                                    label: e.$t("vault.input_secret_label"),
                                                    prop: "secret"
                                                }, {
                                                    default: s(()=>[
                                                            t(f, {
                                                                modelValue: a.value.secret,
                                                                "onUpdate:modelValue": l[4] || (l[4] = (o)=>a.value.secret = o),
                                                                placeholder: e.$t("vault.input_secret_placeholder"),
                                                                clearable: ""
                                                            }, {
                                                                append: s(()=>[
                                                                        t(F, {
                                                                            onClick: G,
                                                                            title: e.$t("vault.generate_random_secret")
                                                                        }, {
                                                                            default: s(()=>[
                                                                                    t(n, null, {
                                                                                        default: s(()=>[
                                                                                                t(g(ne))
                                                                                            ]),
                                                                                        _: 1
                                                                                    })
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "title"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ])) : E("", !0),
                                                t(p, {
                                                    label: e.$t("vault.otp_type_label"),
                                                    prop: "type"
                                                }, {
                                                    default: s(()=>[
                                                            t(S, {
                                                                modelValue: a.value.type,
                                                                "onUpdate:modelValue": l[5] || (l[5] = (o)=>a.value.type = o),
                                                                class: "w-full"
                                                            }, {
                                                                default: s(()=>[
                                                                        t(v, {
                                                                            label: e.$t("vault.otp_type_totp"),
                                                                            value: "totp"
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ]),
                                                                        t(v, {
                                                                            label: e.$t("vault.otp_type_hotp"),
                                                                            value: "hotp"
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ]),
                                                                        t(v, {
                                                                            label: e.$t("vault.otp_type_steam"),
                                                                            value: "steam"
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ]),
                                                                        t(v, {
                                                                            label: e.$t("vault.otp_type_blizzard"),
                                                                            value: "blizzard"
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                t(j, {
                                                    gutter: 20
                                                }, {
                                                    default: s(()=>[
                                                            t(B, {
                                                                span: 8
                                                            }, {
                                                                default: s(()=>[
                                                                        t(p, {
                                                                            label: e.$t("vault.algorithm_label"),
                                                                            prop: "algorithm"
                                                                        }, {
                                                                            default: s(()=>[
                                                                                    t(S, {
                                                                                        modelValue: a.value.algorithm,
                                                                                        "onUpdate:modelValue": l[6] || (l[6] = (o)=>a.value.algorithm = o),
                                                                                        class: "w-full",
                                                                                        disabled: a.value.type === "steam" || a.value.type === "blizzard"
                                                                                    }, {
                                                                                        default: s(()=>[
                                                                                                t(v, {
                                                                                                    label: e.$t("vault.algo_sha1"),
                                                                                                    value: "SHA1"
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                t(v, {
                                                                                                    label: "SHA256",
                                                                                                    value: "SHA256"
                                                                                                }),
                                                                                                t(v, {
                                                                                                    label: "SHA512",
                                                                                                    value: "SHA512"
                                                                                                })
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            t(B, {
                                                                span: 8
                                                            }, {
                                                                default: s(()=>[
                                                                        t(p, {
                                                                            label: e.$t("vault.digits_label"),
                                                                            prop: "digits"
                                                                        }, {
                                                                            default: s(()=>[
                                                                                    t(S, {
                                                                                        modelValue: a.value.digits,
                                                                                        "onUpdate:modelValue": l[7] || (l[7] = (o)=>a.value.digits = o),
                                                                                        class: "w-full",
                                                                                        disabled: a.value.type === "steam" || a.value.type === "blizzard"
                                                                                    }, {
                                                                                        default: s(()=>[
                                                                                                a.value.type === "steam" ? (c(), h(v, {
                                                                                                    key: 0,
                                                                                                    label: e.$t("vault.digits_5"),
                                                                                                    value: 5
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])) : a.value.type === "blizzard" ? (c(), h(v, {
                                                                                                    key: 1,
                                                                                                    label: e.$t("vault.digits_8"),
                                                                                                    value: 8
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])) : (c(), b(D, {
                                                                                                    key: 2
                                                                                                }, [
                                                                                                    t(v, {
                                                                                                        label: e.$t("vault.digits_6"),
                                                                                                        value: 6
                                                                                                    }, null, 8, [
                                                                                                        "label"
                                                                                                    ]),
                                                                                                    t(v, {
                                                                                                        label: e.$t("vault.digits_8"),
                                                                                                        value: 8
                                                                                                    }, null, 8, [
                                                                                                        "label"
                                                                                                    ])
                                                                                                ], 64))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            t(B, {
                                                                span: 8
                                                            }, {
                                                                default: s(()=>[
                                                                        t(p, {
                                                                            label: a.value.type === "hotp" ? e.$t("vault.counter_label") : e.$t("vault.period_label"),
                                                                            prop: "period"
                                                                        }, {
                                                                            default: s(()=>[
                                                                                    a.value.type === "hotp" ? (c(), h(Y, {
                                                                                        key: 0,
                                                                                        modelValue: a.value.counter,
                                                                                        "onUpdate:modelValue": l[8] || (l[8] = (o)=>a.value.counter = o),
                                                                                        min: 0,
                                                                                        class: "w-full"
                                                                                    }, null, 8, [
                                                                                        "modelValue"
                                                                                    ])) : (c(), h(S, {
                                                                                        key: 1,
                                                                                        modelValue: a.value.period,
                                                                                        "onUpdate:modelValue": l[9] || (l[9] = (o)=>a.value.period = o),
                                                                                        class: "w-full",
                                                                                        disabled: a.value.type === "steam"
                                                                                    }, {
                                                                                        default: s(()=>[
                                                                                                t(v, {
                                                                                                    label: e.$t("vault.period_30s"),
                                                                                                    value: 30
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                t(v, {
                                                                                                    label: e.$t("vault.period_60s"),
                                                                                                    value: 60
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ]))
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }),
                                                a.value.type === "blizzard" && !a.value.secret ? (c(), b("div", xe, [
                                                    u("div", ea, y(e.$t("vault.blizzard_net_restore_desc")), 1),
                                                    t(p, {
                                                        label: e.$t("vault.serial_number"),
                                                        required: ""
                                                    }, {
                                                        default: s(()=>[
                                                                t(f, {
                                                                    modelValue: i.value.serial,
                                                                    "onUpdate:modelValue": l[10] || (l[10] = (o)=>i.value.serial = o),
                                                                    placeholder: e.$t("vault.serial_placeholder")
                                                                }, null, 8, [
                                                                    "modelValue",
                                                                    "placeholder"
                                                                ])
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "label"
                                                    ]),
                                                    t(p, {
                                                        label: e.$t("vault.restore_code"),
                                                        required: ""
                                                    }, {
                                                        default: s(()=>[
                                                                t(f, {
                                                                    modelValue: i.value.restoreCode,
                                                                    "onUpdate:modelValue": l[11] || (l[11] = (o)=>i.value.restoreCode = o),
                                                                    placeholder: e.$t("vault.restore_code_placeholder"),
                                                                    maxlength: "10",
                                                                    "show-word-limit": ""
                                                                }, null, 8, [
                                                                    "modelValue",
                                                                    "placeholder"
                                                                ])
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "label"
                                                    ]),
                                                    t(p, {
                                                        label: e.$t("vault.sso_token_label"),
                                                        required: ""
                                                    }, {
                                                        default: s(()=>[
                                                                t(f, {
                                                                    modelValue: i.value.ssoToken,
                                                                    "onUpdate:modelValue": l[12] || (l[12] = (o)=>i.value.ssoToken = o),
                                                                    placeholder: e.$t("vault.sso_token_placeholder"),
                                                                    clearable: ""
                                                                }, null, 8, [
                                                                    "modelValue",
                                                                    "placeholder"
                                                                ]),
                                                                u("div", aa, [
                                                                    u("span", {
                                                                        innerHTML: `${e.$t("vault.get_method")}：${e.$t("vault.sso_token_hint")}`
                                                                    }, null, 8, la)
                                                                ])
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "label"
                                                    ])
                                                ])) : E("", !0),
                                                t(p, {
                                                    label: e.$t("vault.category_optional"),
                                                    prop: "category"
                                                }, {
                                                    default: s(()=>[
                                                            t(f, {
                                                                modelValue: a.value.category,
                                                                "onUpdate:modelValue": l[13] || (l[13] = (o)=>a.value.category = o),
                                                                placeholder: e.$t("vault.input_category_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                t(p, {
                                                    class: "mt-30"
                                                }, {
                                                    default: s(()=>[
                                                            t(F, {
                                                                type: "primary",
                                                                loading: V.value,
                                                                onClick: Q,
                                                                class: "vault-manual-submit-btn",
                                                                size: "large"
                                                            }, {
                                                                default: s(()=>[
                                                                        Te(y(e.$t("vault.confirm_add_btn")), 1)
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "loading"
                                                            ])
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "model"
                                    ])
                                ])
                            ])) : E("", !0)
                        ])
                    ])
                ]);
            };
        }
    };
    ma = he(ta, [
        [
            "__scopeId",
            "data-v-4954843f"
        ]
    ]);
});
export { ma as default, __tla };
