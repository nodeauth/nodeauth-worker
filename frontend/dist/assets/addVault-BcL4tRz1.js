const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-BDXW96HW.js","assets/element-plus-CVRB8fAt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-ZD31REeY.js","assets/index-Bkp62iVv.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-H-OGOzP4.css"])))=>i.map(i=>d[i]);
import { _ as W, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { p as x, f as ee, ay as ae, aG as le, aF as te, a1 as oe, G as se, i as re, d as ue, az as ie, Z as ne, R as de, _ as ce, $ as ve, a0 as pe, F as me, a8 as _e, aQ as fe, X as be, E as $, o as ge } from "./element-plus-CVRB8fAt.js";
import { p as ye, v as B, u as O, f as he, __tla as __tla_1 } from "./vaultService-DIRirBWX.js";
import { a as Ve, u as $e, p as ze, i as we, __tla as __tla_2 } from "./index-Bkp62iVv.js";
import { f as ke, I as c, M as b, Q as i, O as t, P as o, u as g, _ as v, Y as S, F as I, ac as Se, J as y, X as Ee, Z as w, e as z, c as Ue, E as d, aD as Ae } from "./vue-core-Daban9YF.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-9eHlhal2.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let ia;
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
    let Be, Ce, Te, qe, Re, Fe, He, De, Oe, Ie, Me, Ne, Le, Ge, Pe, Qe, Ze, Xe, Je, Ye, je, Ke;
    Be = {
        class: "add-vault-wrapper"
    };
    Ce = {
        class: "tab-card-wrapper"
    };
    Te = {
        class: "page-header-container"
    };
    qe = {
        class: "page-header-hero"
    };
    Re = {
        class: "hero-icon-wrapper"
    };
    Fe = {
        key: 0
    };
    He = {
        class: "page-desc-text"
    };
    De = {
        class: "max-w-600 m-auto"
    };
    Oe = {
        class: "batch-import-container-top mb-10"
    };
    Ie = {
        class: "card-left"
    };
    Me = {
        class: "icon-ring"
    };
    Ne = {
        class: "text-meta"
    };
    Le = {
        class: "entry-title"
    };
    Ge = {
        class: "entry-desc"
    };
    Pe = {
        class: "flex-center mb-20"
    };
    Qe = {
        class: "flex-center gap-5"
    };
    Ze = {
        key: 0
    };
    Xe = {
        key: 1,
        class: "vault-manual-form-container"
    };
    Je = {
        class: "m-auto w-full"
    };
    Ye = {
        key: 1,
        class: "p-15 mb-20 bg-secondary-subtle border-radius-sm"
    };
    je = {
        class: "text-xs text-secondary mb-10"
    };
    Ke = {
        class: "mt-20 p-10 rounded-10",
        style: {
            "background-color": "var(--el-color-primary-light-9)",
            "font-size": "11px",
            "line-height": "1.5",
            color: "var(--el-color-primary)"
        }
    };
    ia = {
        __name: "addVault",
        emits: [
            "success"
        ],
        setup (We, { emit: M }) {
            const N = Ae(()=>W(()=>import("./qrScanner-BDXW96HW.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), C = M, k = Ve(), T = $e(), q = ze(), { t: r } = we.global, h = z("camera"), L = Ue(()=>[
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
                }), V = z(!1), E = z(null), a = z(R()), F = z(!1), n = z({
                serial: "",
                restoreCode: "",
                ssoToken: ""
            }), G = async ()=>{
                if (!n.value.serial || !n.value.restoreCode || !n.value.ssoToken) {
                    $.warning(r("vault.blizzard_fields_required"));
                    return;
                }
                F.value = !0;
                try {
                    const e = await B.restoreBlizzardNet(n.value.serial, n.value.restoreCode, n.value.ssoToken);
                    e.success && e.secret ? (a.value.secret = e.secret, a.value.service = "Blizzard", a.value.digits = 8, n.value = {
                        serial: "",
                        restoreCode: "",
                        ssoToken: ""
                    }) : $.error(e.error || r("vault.restore_failed"));
                } finally{
                    F.value = !1;
                }
            }, P = (e, l, u)=>{
                if (!l) return u(new Error(r("vault.require_secret")));
                const p = l.replace(/\s/g, "");
                if (p.length < 16) return u(new Error(r("vault.secret_min_length")));
                if (!/^[A-Z2-7]+$/i.test(p)) return u(new Error(r("vault.secret_invalid_char")));
                u();
            }, Q = {
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
                        validator: (e, l, u)=>a.value.type === "blizzard" ? u() : P(e, l, u),
                        trigger: "blur"
                    }
                ]
            };
            ke(()=>a.value.type, (e)=>{
                const l = e === "steam", u = e === "blizzard", p = e === "hotp";
                a.value.algorithm = "SHA1", l ? (a.value.digits = 5, a.value.period = 30) : u ? (a.value.digits = 8, a.value.period = 30) : (a.value.digits = 6, a.value.period = 30), p && (a.value.counter = 0), l && !a.value.service && (a.value.service = "Steam"), u && !a.value.service && (a.value.service = "Blizzard");
            });
            const Z = ()=>{
                const e = new Uint8Array(20);
                window.crypto.getRandomValues(e), a.value.secret = he(e);
            }, X = async ()=>{
                if (E.value) {
                    if (a.value.type === "blizzard" && !a.value.secret) {
                        if (!n.value.serial || !n.value.restoreCode || !n.value.ssoToken) {
                            $.warning(r("vault.blizzard_fields_required"));
                            return;
                        }
                        V.value = !0;
                        try {
                            if (await G(), !a.value.secret) {
                                V.value = !1;
                                return;
                            }
                        } catch  {
                            V.value = !1;
                            return;
                        }
                    }
                    await E.value.validate(async (e)=>{
                        if (e) {
                            V.value = !0;
                            try {
                                if ((await B.createAccount(a.value)).success) {
                                    q.isOffline || await k.updateMetadata({
                                        delta: 1
                                    }), $.success(r("vault.add_success")), a.value = R(), k.markDirty();
                                    const { fetchTrash: u } = O();
                                    u(), C("success");
                                }
                            } catch  {} finally{
                                V.value = !1;
                            }
                        }
                    });
                }
            }, J = async (e)=>{
                try {
                    const l = ye(e);
                    if (!l) {
                        $.error(r("vault.invalid_qr_format"));
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
                    }), (await B.addFromUri(e, "Scan")).success) {
                        q.isOffline || await k.updateMetadata({
                            delta: 1
                        }), $.success(r("vault.add_success")), k.markDirty();
                        const { fetchTrash: p } = O();
                        p(), C("success");
                    }
                } catch (l) {
                    l !== "cancel" && console.error(l);
                }
            };
            return (e, l)=>{
                const u = ee, p = te, H = oe, f = re, m = se, D = ue, _ = ve, U = ce, A = de, Y = pe, j = ne, K = me;
                return c(), b("div", Be, [
                    i("div", Ce, [
                        i("div", Te, [
                            i("div", qe, [
                                i("div", Re, [
                                    t(u, {
                                        size: 28
                                    }, {
                                        default: o(()=>[
                                                t(g(x))
                                            ]),
                                        _: 1
                                    })
                                ]),
                                g(T).isMobile ? S("", !0) : (c(), b("h2", Fe, v(e.$t("menu.add")), 1))
                            ]),
                            i("p", He, v(e.$t("vault.add_account_tip")), 1)
                        ]),
                        i("div", De, [
                            i("div", Oe, [
                                i("div", {
                                    class: "import-card-hero",
                                    onClick: l[0] || (l[0] = (s)=>g(T).setActiveTab("migration-import"))
                                }, [
                                    i("div", Ie, [
                                        i("div", Me, [
                                            t(u, null, {
                                                default: o(()=>[
                                                        t(g(ae))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                        i("div", Ne, [
                                            i("div", Le, v(e.$t("vault.batch_import_entry_title")), 1),
                                            i("div", Ge, v(e.$t("vault.batch_import_entry_desc")), 1)
                                        ])
                                    ]),
                                    t(u, {
                                        class: "card-arrow"
                                    }, {
                                        default: o(()=>[
                                                t(g(le))
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            i("div", Pe, [
                                t(H, {
                                    modelValue: h.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = (s)=>h.value = s),
                                    class: "mode-switcher-radio"
                                }, {
                                    default: o(()=>[
                                            (c(!0), b(I, null, Se(L.value, (s)=>(c(), y(p, {
                                                    key: s.value,
                                                    label: s.value
                                                }, {
                                                    default: o(()=>[
                                                            i("div", Qe, [
                                                                t(u, null, {
                                                                    default: o(()=>[
                                                                            (c(), y(Ee(s.icon)))
                                                                        ]),
                                                                    _: 2
                                                                }, 1024),
                                                                i("span", null, v(s.label), 1)
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
                            h.value === "camera" || h.value === "image" ? (c(), b("div", Ze, [
                                t(g(N), {
                                    "force-mode": h.value,
                                    onScanSuccess: J
                                }, null, 8, [
                                    "force-mode"
                                ])
                            ])) : h.value === "manual" ? (c(), b("div", Xe, [
                                i("div", Je, [
                                    t(K, {
                                        model: a.value,
                                        "label-position": "top",
                                        rules: Q,
                                        ref_key: "addFormRef",
                                        ref: E,
                                        class: "vault-manual-form-wrapper"
                                    }, {
                                        default: o(()=>[
                                                t(m, {
                                                    label: e.$t("vault.service_name"),
                                                    prop: "service"
                                                }, {
                                                    default: o(()=>[
                                                            t(f, {
                                                                modelValue: a.value.service,
                                                                "onUpdate:modelValue": l[2] || (l[2] = (s)=>a.value.service = s),
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
                                                t(m, {
                                                    label: e.$t("vault.account_identifier"),
                                                    prop: "account"
                                                }, {
                                                    default: o(()=>[
                                                            t(f, {
                                                                modelValue: a.value.account,
                                                                "onUpdate:modelValue": l[3] || (l[3] = (s)=>a.value.account = s),
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
                                                a.value.type !== "blizzard" ? (c(), y(m, {
                                                    key: 0,
                                                    label: e.$t("vault.input_secret_label"),
                                                    prop: "secret"
                                                }, {
                                                    default: o(()=>[
                                                            t(f, {
                                                                modelValue: a.value.secret,
                                                                "onUpdate:modelValue": l[4] || (l[4] = (s)=>a.value.secret = s),
                                                                placeholder: e.$t("vault.input_secret_placeholder"),
                                                                clearable: ""
                                                            }, {
                                                                append: o(()=>[
                                                                        t(D, {
                                                                            onClick: Z,
                                                                            title: e.$t("vault.generate_random_secret")
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    t(u, null, {
                                                                                        default: o(()=>[
                                                                                                t(g(ie))
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
                                                ])) : S("", !0),
                                                t(m, {
                                                    label: e.$t("vault.otp_type_label"),
                                                    prop: "type"
                                                }, {
                                                    default: o(()=>[
                                                            t(H, {
                                                                modelValue: a.value.type,
                                                                "onUpdate:modelValue": l[5] || (l[5] = (s)=>a.value.type = s)
                                                            }, {
                                                                default: o(()=>[
                                                                        t(p, {
                                                                            label: "totp"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    w(v(e.$t("vault.otp_type_totp")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        }),
                                                                        t(p, {
                                                                            label: "hotp"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    w(v(e.$t("vault.otp_type_hotp")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        }),
                                                                        t(p, {
                                                                            label: "steam"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    w(v(e.$t("vault.otp_type_steam")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        }),
                                                                        t(p, {
                                                                            label: "blizzard"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    w(v(e.$t("vault.otp_type_blizzard")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })
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
                                                    default: o(()=>[
                                                            t(A, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        t(m, {
                                                                            label: e.$t("vault.algorithm_label"),
                                                                            prop: "algorithm"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    t(U, {
                                                                                        modelValue: a.value.algorithm,
                                                                                        "onUpdate:modelValue": l[6] || (l[6] = (s)=>a.value.algorithm = s),
                                                                                        class: "w-full",
                                                                                        disabled: a.value.type === "steam" || a.value.type === "blizzard"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                t(_, {
                                                                                                    label: e.$t("vault.algo_sha1"),
                                                                                                    value: "SHA1"
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                t(_, {
                                                                                                    label: "SHA256",
                                                                                                    value: "SHA256"
                                                                                                }),
                                                                                                t(_, {
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
                                                            t(A, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        t(m, {
                                                                            label: e.$t("vault.digits_label"),
                                                                            prop: "digits"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    t(U, {
                                                                                        modelValue: a.value.digits,
                                                                                        "onUpdate:modelValue": l[7] || (l[7] = (s)=>a.value.digits = s),
                                                                                        class: "w-full",
                                                                                        disabled: a.value.type === "steam" || a.value.type === "blizzard"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                a.value.type === "steam" ? (c(), y(_, {
                                                                                                    key: 0,
                                                                                                    label: e.$t("vault.digits_5"),
                                                                                                    value: 5
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])) : a.value.type === "blizzard" ? (c(), y(_, {
                                                                                                    key: 1,
                                                                                                    label: e.$t("vault.digits_8"),
                                                                                                    value: 8
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])) : (c(), b(I, {
                                                                                                    key: 2
                                                                                                }, [
                                                                                                    t(_, {
                                                                                                        label: e.$t("vault.digits_6"),
                                                                                                        value: 6
                                                                                                    }, null, 8, [
                                                                                                        "label"
                                                                                                    ]),
                                                                                                    t(_, {
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
                                                            t(A, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        t(m, {
                                                                            label: a.value.type === "hotp" ? e.$t("vault.counter_label") : e.$t("vault.period_label"),
                                                                            prop: "period"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    a.value.type === "hotp" ? (c(), y(Y, {
                                                                                        key: 0,
                                                                                        modelValue: a.value.counter,
                                                                                        "onUpdate:modelValue": l[8] || (l[8] = (s)=>a.value.counter = s),
                                                                                        min: 0,
                                                                                        class: "w-full"
                                                                                    }, null, 8, [
                                                                                        "modelValue"
                                                                                    ])) : (c(), y(U, {
                                                                                        key: 1,
                                                                                        modelValue: a.value.period,
                                                                                        "onUpdate:modelValue": l[9] || (l[9] = (s)=>a.value.period = s),
                                                                                        class: "w-full",
                                                                                        disabled: a.value.type === "steam"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                t(_, {
                                                                                                    label: e.$t("vault.period_30s"),
                                                                                                    value: 30
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                t(_, {
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
                                                a.value.type === "blizzard" && !a.value.secret ? (c(), b("div", Ye, [
                                                    i("p", je, v(e.$t("vault.blizzard_net_restore_desc")), 1),
                                                    t(m, {
                                                        label: e.$t("vault.serial_number"),
                                                        required: ""
                                                    }, {
                                                        default: o(()=>[
                                                                t(f, {
                                                                    modelValue: n.value.serial,
                                                                    "onUpdate:modelValue": l[10] || (l[10] = (s)=>n.value.serial = s),
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
                                                    t(m, {
                                                        label: e.$t("vault.restore_code"),
                                                        required: ""
                                                    }, {
                                                        default: o(()=>[
                                                                t(f, {
                                                                    modelValue: n.value.restoreCode,
                                                                    "onUpdate:modelValue": l[11] || (l[11] = (s)=>n.value.restoreCode = s),
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
                                                    t(m, {
                                                        label: e.$t("vault.sso_token_label"),
                                                        required: ""
                                                    }, {
                                                        default: o(()=>[
                                                                t(f, {
                                                                    modelValue: n.value.ssoToken,
                                                                    "onUpdate:modelValue": l[12] || (l[12] = (s)=>n.value.ssoToken = s),
                                                                    placeholder: e.$t("vault.sso_token_placeholder"),
                                                                    clearable: ""
                                                                }, null, 8, [
                                                                    "modelValue",
                                                                    "placeholder"
                                                                ]),
                                                                i("div", Ke, v(e.$t("vault.get_method")) + "：" + v(e.$t("vault.sso_token_hint")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "label"
                                                    ])
                                                ])) : S("", !0),
                                                t(m, {
                                                    label: e.$t("vault.category_optional"),
                                                    prop: "category"
                                                }, {
                                                    default: o(()=>[
                                                            t(f, {
                                                                modelValue: a.value.category,
                                                                "onUpdate:modelValue": l[13] || (l[13] = (s)=>a.value.category = s),
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
                                                t(m, {
                                                    class: "mt-30"
                                                }, {
                                                    default: o(()=>[
                                                            t(D, {
                                                                type: "primary",
                                                                loading: V.value,
                                                                onClick: X,
                                                                class: "vault-manual-submit-btn",
                                                                size: "large"
                                                            }, {
                                                                default: o(()=>[
                                                                        w(v(e.$t("vault.confirm_add_btn")), 1)
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
                            ])) : S("", !0)
                        ])
                    ])
                ]);
            };
        }
    };
});
export { ia as default, __tla };
