const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-iEwaeEs_.js","assets/element-plus-Ca9klJWt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-BC7NLEos.js","assets/index-C63vm3Zv.js","assets/pdf-utils-HZTV32cA.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-D6rhlcle.css"])))=>i.map(i=>d[i]);
import { _ as Z, __tla as __tla_0 } from "./pdf-utils-HZTV32cA.js";
import { p as G, f as Q, ay as X, aF as J, aP as Y, a1 as j, G as K, i as W, d as x, az as ee, Z as ae, R as le, _ as te, $ as oe, F as se, a8 as re, aO as ie, X as ne, E, o as ue } from "./element-plus-Ca9klJWt.js";
import { p as ce, v as F, f as de, __tla as __tla_1 } from "./vaultService-CN5Qz0-L.js";
import { a as me, u as ve, n as _e, i as pe, __tla as __tla_2 } from "./index-C63vm3Zv.js";
import { f as fe, I as m, M as f, Q as i, O as e, P as o, u as v, _ as p, Y as A, F as ge, ac as be, J as k, X as he, Z as ye, e as y, c as we, E as n, aD as Ve } from "./vue-core-Daban9YF.js";
import "./compression-utils-CXh1ITwj.js";
import { __tla as __tla_3 } from "./resourceRegistry-BelDkWW9.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let We;
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
    let Se, $e, Ee, Ae, ke, Me, Te, Ue, Be, Fe, Oe, Re, Ce, De, He, qe, Ie, Ne, Pe;
    Se = {
        class: "add-vault-wrapper"
    };
    $e = {
        class: "tab-card-wrapper"
    };
    Ee = {
        class: "page-header-container"
    };
    Ae = {
        class: "page-header-hero"
    };
    ke = {
        class: "hero-icon-wrapper"
    };
    Me = {
        key: 0
    };
    Te = {
        class: "page-desc-text"
    };
    Ue = {
        class: "max-w-600 m-auto"
    };
    Be = {
        class: "batch-import-container-top mb-10"
    };
    Fe = {
        class: "card-left"
    };
    Oe = {
        class: "icon-ring"
    };
    Re = {
        class: "text-meta"
    };
    Ce = {
        class: "entry-title"
    };
    De = {
        class: "entry-desc"
    };
    He = {
        class: "flex-center mb-20"
    };
    qe = {
        class: "flex-center gap-5"
    };
    Ie = {
        key: 0
    };
    Ne = {
        key: 1,
        class: "vault-manual-form-container"
    };
    Pe = {
        class: "m-auto w-full"
    };
    We = {
        __name: "addVault",
        emits: [
            "success"
        ],
        setup (ze, { emit: O }) {
            const R = Ve(()=>Z(()=>import("./qrScanner-iEwaeEs_.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), M = O, g = me(), T = ve(), U = _e(), { t: s } = pe.global, _ = y("camera"), C = we(()=>[
                    {
                        label: s("vault.add_mode_camera"),
                        value: "camera",
                        icon: re
                    },
                    {
                        label: s("vault.add_mode_image"),
                        value: "image",
                        icon: ie
                    },
                    {
                        label: s("vault.add_account"),
                        value: "manual",
                        icon: ne
                    }
                ]), w = y(!1), V = y(null), t = y({
                service: "",
                account: "",
                secret: "",
                category: "",
                digits: 6,
                period: 30,
                algorithm: "SHA1"
            }), D = (a, l, u)=>{
                if (!l) return u(new Error(s("vault.require_secret")));
                const b = l.replace(/\s/g, "");
                if (b.length < 16) return u(new Error(s("vault.secret_min_length")));
                if (!/^[A-Z2-7]+$/i.test(b)) return u(new Error(s("vault.secret_invalid_char")));
                u();
            }, H = {
                service: [
                    {
                        required: !0,
                        message: s("vault.require_service"),
                        trigger: "blur"
                    }
                ],
                account: [
                    {
                        required: !0,
                        message: s("vault.require_account"),
                        trigger: "blur"
                    }
                ],
                secret: [
                    {
                        required: !0,
                        validator: D,
                        trigger: "blur"
                    }
                ]
            };
            fe(()=>t.value.algorithm, (a)=>{
                a === "STEAM" ? (t.value.digits = 5, t.value.period = 30, t.value.service || (t.value.service = "Steam")) : t.value.digits === 5 && (t.value.digits = 6, t.value.service === "Steam" && (t.value.service = ""));
            });
            const q = ()=>{
                const a = new Uint8Array(20);
                window.crypto.getRandomValues(a), t.value.secret = de(a);
            }, I = async ()=>{
                V.value && await V.value.validate(async (a)=>{
                    if (a) {
                        w.value = !0;
                        try {
                            (await F.createAccount(t.value)).success && (U.isOffline || await g.updateMetadata({
                                delta: 1
                            }), E.success(s("vault.add_success")), t.value = {
                                service: "",
                                account: "",
                                secret: "",
                                category: "",
                                digits: 6,
                                period: 30,
                                algorithm: "SHA1"
                            }, g.markDirty(), M("success"));
                        } catch  {} finally{
                            w.value = !1;
                        }
                    }
                });
            }, N = async (a)=>{
                try {
                    const l = ce(a);
                    if (!l) {
                        E.error(s("vault.invalid_qr_format"));
                        return;
                    }
                    await ue.confirm(n("div", {
                        class: "confirmation-box"
                    }, [
                        n("div", {
                            class: "confirmation-row"
                        }, [
                            n("span", {
                                class: "confirmation-label"
                            }, s("vault.service_label")),
                            n("span", {
                                class: "confirmation-value"
                            }, l.service || s("vault.unknown_service"))
                        ]),
                        n("div", {
                            class: "confirmation-row"
                        }, [
                            n("span", {
                                class: "confirmation-label"
                            }, s("vault.account_label")),
                            n("span", {
                                class: "confirmation-value mono"
                            }, l.account || s("vault.unnamed_account"))
                        ]),
                        n("div", {
                            class: "confirmation-row"
                        }, [
                            n("span", {
                                class: "confirmation-label"
                            }, s("vault.param_label")),
                            n("div", {
                                class: "confirmation-tags"
                            }, [
                                n("span", {
                                    class: "confirmation-tag confirmation-tag-info"
                                }, l.algorithm || "SHA1"),
                                n("span", {
                                    class: "confirmation-tag confirmation-tag-success"
                                }, `${l.digits || 6}${s("vault.digits_suffix")}`),
                                n("span", {
                                    class: "confirmation-tag confirmation-tag-warning"
                                }, `${l.period || 30}${s("vault.period_suffix")}`)
                            ])
                        ])
                    ]), s("vault.confirm_add_title"), {
                        confirmButtonText: s("common.confirm"),
                        cancelButtonText: s("common.cancel"),
                        type: "success",
                        center: !0
                    }), (await F.addFromUri(a, "Scan")).success && (U.isOffline || await g.updateMetadata({
                        delta: 1
                    }), E.success(s("vault.add_success")), g.markDirty(), M("success"));
                } catch (l) {
                    l !== "cancel" && console.error(l);
                }
            };
            return (a, l)=>{
                const u = Q, b = Y, P = j, h = W, d = K, B = x, c = oe, S = te, $ = le, z = ae, L = se;
                return m(), f("div", Se, [
                    i("div", $e, [
                        i("div", Ee, [
                            i("div", Ae, [
                                i("div", ke, [
                                    e(u, {
                                        size: 28
                                    }, {
                                        default: o(()=>[
                                                e(v(G))
                                            ]),
                                        _: 1
                                    })
                                ]),
                                v(T).isMobile ? A("", !0) : (m(), f("h2", Me, p(a.$t("menu.add")), 1))
                            ]),
                            i("p", Te, p(a.$t("vault.add_account_tip")), 1)
                        ]),
                        i("div", Ue, [
                            i("div", Be, [
                                i("div", {
                                    class: "import-card-hero",
                                    onClick: l[0] || (l[0] = (r)=>v(T).setActiveTab("migration-import"))
                                }, [
                                    i("div", Fe, [
                                        i("div", Oe, [
                                            e(u, null, {
                                                default: o(()=>[
                                                        e(v(X))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                        i("div", Re, [
                                            i("div", Ce, p(a.$t("vault.batch_import_entry_title")), 1),
                                            i("div", De, p(a.$t("vault.batch_import_entry_desc")), 1)
                                        ])
                                    ]),
                                    e(u, {
                                        class: "card-arrow"
                                    }, {
                                        default: o(()=>[
                                                e(v(J))
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            i("div", He, [
                                e(P, {
                                    modelValue: _.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = (r)=>_.value = r),
                                    class: "mode-switcher-radio"
                                }, {
                                    default: o(()=>[
                                            (m(!0), f(ge, null, be(C.value, (r)=>(m(), k(b, {
                                                    key: r.value,
                                                    label: r.value
                                                }, {
                                                    default: o(()=>[
                                                            i("div", qe, [
                                                                e(u, null, {
                                                                    default: o(()=>[
                                                                            (m(), k(he(r.icon)))
                                                                        ]),
                                                                    _: 2
                                                                }, 1024),
                                                                i("span", null, p(r.label), 1)
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
                            _.value === "camera" || _.value === "image" ? (m(), f("div", Ie, [
                                e(v(R), {
                                    "force-mode": _.value,
                                    onScanSuccess: N
                                }, null, 8, [
                                    "force-mode"
                                ])
                            ])) : _.value === "manual" ? (m(), f("div", Ne, [
                                i("div", Pe, [
                                    e(L, {
                                        model: t.value,
                                        "label-position": "top",
                                        rules: H,
                                        ref_key: "addFormRef",
                                        ref: V,
                                        class: "vault-manual-form-wrapper"
                                    }, {
                                        default: o(()=>[
                                                e(d, {
                                                    label: a.$t("vault.service_name"),
                                                    prop: "service"
                                                }, {
                                                    default: o(()=>[
                                                            e(h, {
                                                                modelValue: t.value.service,
                                                                "onUpdate:modelValue": l[2] || (l[2] = (r)=>t.value.service = r),
                                                                placeholder: a.$t("vault.input_service_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    label: a.$t("vault.account_identifier"),
                                                    prop: "account"
                                                }, {
                                                    default: o(()=>[
                                                            e(h, {
                                                                modelValue: t.value.account,
                                                                "onUpdate:modelValue": l[3] || (l[3] = (r)=>t.value.account = r),
                                                                placeholder: a.$t("vault.input_account_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    label: a.$t("vault.input_secret_label"),
                                                    prop: "secret"
                                                }, {
                                                    default: o(()=>[
                                                            e(h, {
                                                                modelValue: t.value.secret,
                                                                "onUpdate:modelValue": l[4] || (l[4] = (r)=>t.value.secret = r),
                                                                placeholder: a.$t("vault.input_secret_placeholder"),
                                                                clearable: ""
                                                            }, {
                                                                append: o(()=>[
                                                                        e(B, {
                                                                            onClick: q,
                                                                            title: a.$t("vault.generate_random_secret")
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(u, null, {
                                                                                        default: o(()=>[
                                                                                                e(v(ee))
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
                                                ]),
                                                e(z, {
                                                    gutter: 20
                                                }, {
                                                    default: o(()=>[
                                                            e($, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        e(d, {
                                                                            label: a.$t("vault.algorithm_label"),
                                                                            prop: "algorithm"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(S, {
                                                                                        modelValue: t.value.algorithm,
                                                                                        "onUpdate:modelValue": l[5] || (l[5] = (r)=>t.value.algorithm = r),
                                                                                        class: "w-full"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                e(c, {
                                                                                                    label: a.$t("vault.algo_sha1"),
                                                                                                    value: "SHA1"
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                e(c, {
                                                                                                    label: "SHA256",
                                                                                                    value: "SHA256"
                                                                                                }),
                                                                                                e(c, {
                                                                                                    label: "SHA512",
                                                                                                    value: "SHA512"
                                                                                                }),
                                                                                                e(c, {
                                                                                                    label: a.$t("vault.algo_steam"),
                                                                                                    value: "STEAM"
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
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            e($, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        e(d, {
                                                                            label: a.$t("vault.digits_label"),
                                                                            prop: "digits"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(S, {
                                                                                        modelValue: t.value.digits,
                                                                                        "onUpdate:modelValue": l[6] || (l[6] = (r)=>t.value.digits = r),
                                                                                        class: "w-full",
                                                                                        disabled: t.value.algorithm === "STEAM"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                t.value.algorithm === "STEAM" ? (m(), k(c, {
                                                                                                    key: 0,
                                                                                                    label: a.$t("vault.digits_5"),
                                                                                                    value: 5
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])) : A("", !0),
                                                                                                e(c, {
                                                                                                    label: a.$t("vault.digits_6"),
                                                                                                    value: 6
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                e(c, {
                                                                                                    label: a.$t("vault.digits_8"),
                                                                                                    value: 8
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])
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
                                                            e($, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        e(d, {
                                                                            label: a.$t("vault.period_label"),
                                                                            prop: "period"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(S, {
                                                                                        modelValue: t.value.period,
                                                                                        "onUpdate:modelValue": l[7] || (l[7] = (r)=>t.value.period = r),
                                                                                        class: "w-full",
                                                                                        disabled: t.value.algorithm === "STEAM"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                e(c, {
                                                                                                    label: a.$t("vault.period_30s"),
                                                                                                    value: 30
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                e(c, {
                                                                                                    label: a.$t("vault.period_60s"),
                                                                                                    value: 60
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])
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
                                                            })
                                                        ]),
                                                    _: 1
                                                }),
                                                e(d, {
                                                    label: a.$t("vault.category_optional"),
                                                    prop: "category"
                                                }, {
                                                    default: o(()=>[
                                                            e(h, {
                                                                modelValue: t.value.category,
                                                                "onUpdate:modelValue": l[8] || (l[8] = (r)=>t.value.category = r),
                                                                placeholder: a.$t("vault.input_category_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    class: "mt-30"
                                                }, {
                                                    default: o(()=>[
                                                            e(B, {
                                                                type: "primary",
                                                                loading: w.value,
                                                                onClick: I,
                                                                class: "vault-manual-submit-btn",
                                                                size: "large"
                                                            }, {
                                                                default: o(()=>[
                                                                        ye(p(a.$t("vault.confirm_add_btn")), 1)
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
                            ])) : A("", !0)
                        ])
                    ])
                ]);
            };
        }
    };
});
export { We as default, __tla };
