const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vaultList-CcF3pjjB.js","assets/element-plus-Dh0klhaa.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/index-NqcSa8kS.js","assets/pdf-utils-r4RjNe6V.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CLSE-HWx.css","assets/vaultService-DmxSVr-T.js","assets/resourceRegistry-BAWP-Piz.js","assets/responsiveOverlay-CroS3BCl.js","assets/responsiveOverlay-DXpm1mUF.css","assets/useVaultList-312skfP_.js","assets/qr-utils-C-MFlKj_.js","assets/common-Cpp1KiKo.js","assets/vaultList-BnUV2xxc.css","assets/addVault-zjsCJwk2.js","assets/addVault-d-XrpLLu.css","assets/dataExport-CNne2lwt.js","assets/iconProtonAuth-CiCbD6Fj.js","assets/dataMigrationService-Cc5kuD-V.js","assets/wa-sqlite-l0JLtCOf.js","assets/argon2-browser-qelKfid9.js","assets/hash-wasm-Dup_VHWH.js","assets/dataExport-BViWmYxM.css","assets/dataImport-Bc57JfA-.js","assets/iconLastPassAuth-DETFnNuu.js","assets/dataBackup-CfnjspjF.js","assets/utilityTools-9E94vN4y.js","assets/iconToolbox-BvC3QYAW.js","assets/passkeySettings-BaW5vx2S.js","assets/webAuthnService-wKG1REm_.js","assets/securitySettings-yAjLo69s.js","assets/iconPinCode-2a3Mbtoi.js","assets/securitySettings-CWqITrPL.css","assets/appearanceSetting-0lP2ks00.js","assets/iconTheme-BlzyDb1Z.js","assets/languageSettings-D7qdDl3A.js","assets/themeSettings-iAaUGb0-.js","assets/layoutSettings-Ce2fFHO4.js","assets/layoutSettings-CDkc7e94.css","assets/devicesSettings-CyM-mYkp.js","assets/trashSettings-Dyalp1Hm.js","assets/pinSettings-Bs20aLvk.js","assets/aboutView-dop5v35j.js","assets/mobileHub-DDAH5LV3.js"])))=>i.map(i=>d[i]);
import { ad as F, p as G, M as K, w as Z, ae as tt, a6 as et, k as at, af as ot, ag as N, ah as it, ai as st, aj as nt, f as j, d as _t, ak as lt, al as ct, am as ut, an as pt, E as rt, ao as mt, ap as W, aq as dt } from "./element-plus-Dh0klhaa.js";
import { I as a, M as S, Q as v, aA as vt, J as o, P as n, O as _, u as t, F as M, ac as U, X as z, _ as A, S as $, c as bt, Y as C, f as D, n as P, a0 as H, e as J, k as gt } from "./vue-core-Daban9YF.js";
import { _ as Q, F as yt, f as kt, h as ft, u as x, k as i, __tla as __tla_0 } from "./index-NqcSa8kS.js";
import { I as X } from "./iconToolbox-BvC3QYAW.js";
import { _ as s, __tla as __tla_1 } from "./pdf-utils-r4RjNe6V.js";
let At, Bt;
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
    })()
]).then(async ()=>{
    const Et = {
        name: "iconAbout"
    }, Tt = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    };
    function St(d, e, l, b, u, c) {
        return a(), S("svg", Tt, [
            ...e[0] || (e[0] = [
                v("path", {
                    fill: "currentColor",
                    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
                }, null, -1)
            ])
        ]);
    }
    let ht, Vt, It, Lt, Dt, Pt, Rt, Ot;
    At = Q(Et, [
        [
            "render",
            St
        ]
    ]);
    ht = [
        {
            key: "vault",
            label: "menu.vault",
            icon: F
        },
        {
            key: "add-vault",
            label: "menu.add",
            icon: G
        },
        {
            key: "migration",
            label: "menu.migration",
            icon: tt,
            children: [
                {
                    key: "migration-export",
                    label: "migration.export",
                    icon: K
                },
                {
                    key: "migration-import",
                    label: "migration.import",
                    icon: Z
                }
            ]
        },
        {
            key: "backups",
            label: "menu.backup",
            icon: et
        },
        {
            key: "tools",
            label: "menu.tools",
            icon: X
        },
        {
            key: "settings",
            label: "menu.settings",
            icon: N,
            children: [
                {
                    key: "settings-passkey",
                    label: "menu.passkey",
                    icon: yt
                },
                {
                    key: "settings-security",
                    label: "menu.security",
                    icon: at
                },
                {
                    key: "settings-appearance",
                    label: "menu.appearance",
                    icon: ot
                },
                {
                    key: "settings-about",
                    label: "menu.about",
                    icon: At
                }
            ]
        }
    ];
    Vt = {
        __name: "desktopMenu",
        props: {
            app_active_tab: {
                type: String,
                required: !0
            }
        },
        emits: [
            "select"
        ],
        setup (d) {
            const { t: e, locale: l } = kt(), b = ft(), u = x();
            vt();
            const c = bt(()=>u.isSidebarCollapsed), m = ()=>u.toggleSidebar(), g = async ()=>{
                await b.clearUserInfo(), await Promise.race([
                    b.logout(),
                    new Promise((p)=>setTimeout(p, 1500))
                ]).catch(()=>{}), window.location.href = "/login", rt.success(e("auth.logout_success"));
            };
            return (p, h)=>{
                const f = j, V = nt, R = st, O = it, I = _t, w = pt;
                return a(), o(w, {
                    width: t(c) ? "64px" : "240px",
                    class: "left-aside"
                }, {
                    default: n(()=>[
                            _(O, {
                                "default-active": d.app_active_tab,
                                class: "side-menu",
                                onSelect: h[0] || (h[0] = (r)=>p.$emit("select", r)),
                                collapse: t(c)
                            }, {
                                default: n(()=>[
                                        (a(!0), S(M, null, U(t(ht), (r)=>(a(), S(M, {
                                                key: r.key
                                            }, [
                                                r.children ? (a(), o(R, {
                                                    key: 0,
                                                    index: r.key
                                                }, {
                                                    title: n(()=>[
                                                            _(f, null, {
                                                                default: n(()=>[
                                                                        (a(), o(z(r.icon)))
                                                                    ]),
                                                                _: 2
                                                            }, 1024),
                                                            v("span", null, A(p.$t(r.label)), 1)
                                                        ]),
                                                    default: n(()=>[
                                                            (a(!0), S(M, null, U(r.children, (E)=>(a(), o(V, {
                                                                    key: E.key,
                                                                    index: E.key
                                                                }, {
                                                                    default: n(()=>[
                                                                            _(f, null, {
                                                                                default: n(()=>[
                                                                                        (a(), o(z(E.icon)))
                                                                                    ]),
                                                                                _: 2
                                                                            }, 1024),
                                                                            v("span", null, A(p.$t(E.label)), 1)
                                                                        ]),
                                                                    _: 2
                                                                }, 1032, [
                                                                    "index"
                                                                ]))), 128))
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "index"
                                                ])) : (a(), o(V, {
                                                    key: 1,
                                                    index: r.key
                                                }, {
                                                    title: n(()=>[
                                                            v("span", null, A(p.$t(r.label)), 1)
                                                        ]),
                                                    default: n(()=>[
                                                            _(f, null, {
                                                                default: n(()=>[
                                                                        (a(), o(z(r.icon)))
                                                                    ]),
                                                                _: 2
                                                            }, 1024)
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "index"
                                                ]))
                                            ], 64))), 128))
                                    ]),
                                _: 1
                            }, 8, [
                                "default-active",
                                "collapse"
                            ]),
                            v("div", {
                                class: $([
                                    "sidebar-footer",
                                    {
                                        "is-collapsed": t(c)
                                    }
                                ])
                            }, [
                                _(I, {
                                    circle: "",
                                    icon: t(c) ? t(lt) : t(ct),
                                    onClick: m,
                                    title: t(c) ? "展开" : "折叠"
                                }, null, 8, [
                                    "icon",
                                    "title"
                                ]),
                                _(I, {
                                    circle: "",
                                    onClick: g,
                                    title: p.$t("menu.logout")
                                }, {
                                    default: n(()=>[
                                            _(f, null, {
                                                default: n(()=>[
                                                        _(t(ut))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                    _: 1
                                }, 8, [
                                    "title"
                                ])
                            ], 2)
                        ]),
                    _: 1
                }, 8, [
                    "width"
                ]);
            };
        }
    };
    It = {
        key: 0,
        class: "mobile-menu"
    };
    Lt = {
        __name: "mobileMenu",
        props: {
            app_active_tab: {
                type: String,
                required: !0
            }
        },
        emits: [
            "select"
        ],
        setup (d, { emit: e }) {
            const l = e, b = x(), u = (c)=>{
                l("select", c);
            };
            return (c, m)=>{
                const g = j;
                return t(b).isMobile ? (a(), S("nav", It, [
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: d.app_active_tab === "vault" || d.app_active_tab === "add-vault"
                            }
                        ]),
                        onClick: m[0] || (m[0] = (p)=>u("vault"))
                    }, [
                        _(g, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(t(F))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.vault")), 1)
                    ], 2),
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: [
                                    "mobile-data",
                                    "migration-export",
                                    "migration-import",
                                    "backups"
                                ].includes(d.app_active_tab)
                            }
                        ]),
                        onClick: m[1] || (m[1] = (p)=>u("mobile-data"))
                    }, [
                        _(g, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(t(mt))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.data")), 1)
                    ], 2),
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: d.app_active_tab === "tools" || d.app_active_tab.startsWith("tool-")
                            }
                        ]),
                        onClick: m[2] || (m[2] = (p)=>u("tools"))
                    }, [
                        _(g, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(X)
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.tools")), 1)
                    ], 2),
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: d.app_active_tab === "mobile-settings" || d.app_active_tab.startsWith("settings-")
                            }
                        ]),
                        onClick: m[3] || (m[3] = (p)=>u("mobile-settings"))
                    }, [
                        _(g, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(t(N))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.settings")), 1)
                    ], 2)
                ])) : C("", !0);
            };
        }
    };
    Dt = Q(Lt, [
        [
            "__scopeId",
            "data-v-3dd01012"
        ]
    ]);
    Pt = {
        __name: "desktopBody",
        setup (d) {
            const e = x(), l = J(null), b = i(()=>s(()=>import("./vaultList-CcF3pjjB.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))), u = i(()=>s(()=>import("./addVault-zjsCJwk2.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([18,5,6,1,2,3,10,4,7,8,9,11,19]))), c = i(()=>s(()=>import("./dataExport-CNne2lwt.js"), __vite__mapDeps([20,1,2,3,21,4,5,6,7,8,9,22,10,11,23,15,24,25,16,12,13,26]))), m = i(()=>s(()=>import("./dataImport-Bc57JfA-.js"), __vite__mapDeps([27,1,2,3,4,5,6,7,8,9,22,10,11,23,15,24,25,12,13,21,28]))), g = i(()=>s(()=>import("./dataBackup-CfnjspjF.js"), __vite__mapDeps([29,1,2,3,4,5,6,7,8,9,22,10,11,23,15,24,25,12,13]))), p = i(()=>s(()=>import("./utilityTools-9E94vN4y.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([30,5,6,1,2,3,31,4,7,8,9]))), h = i(()=>s(()=>import("./passkeySettings-BaW5vx2S.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,33,12,13]))), f = i(()=>s(()=>import("./securitySettings-yAjLo69s.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,35,11,12,13,36]))), V = i(()=>s(()=>import("./appearanceSetting-0lP2ks00.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,38]))), R = i(()=>s(()=>import("./languageSettings-D7qdDl3A.js"), __vite__mapDeps([39,1,2,3,4,5,6,7,8,9]))), O = i(()=>s(()=>import("./themeSettings-iAaUGb0-.js"), __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,38]))), I = i(()=>s(()=>import("./layoutSettings-Ce2fFHO4.js"), __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,42]))), w = i(()=>s(()=>import("./devicesSettings-CyM-mYkp.js"), __vite__mapDeps([43,1,2,3,4,5,6,7,8,9]))), r = i(()=>s(()=>import("./trashSettings-Dyalp1Hm.js"), __vite__mapDeps([44,1,2,3,4,5,6,7,8,9,14,10,11]))), E = i(()=>s(()=>import("./pinSettings-Bs20aLvk.js"), __vite__mapDeps([45,1,2,3,4,5,6,7,8,9,35,12,13]))), B = i(()=>s(()=>import("./aboutView-dop5v35j.js"), __vite__mapDeps([46,4,5,6,2,1,3,7,8,9])));
            let L = !1;
            const T = ()=>{
                e.setActiveTab("vault"), l.value ? P(()=>l.value?.fetchVault()) : L = !0;
            };
            return D(l, (y)=>{
                y && L && (L = !1, P(()=>y.fetchVault()));
            }), D(()=>e.homeTabReset, ()=>{
                e.app_active_tab === "vault" ? l.value?.fetchVault() : (e.setActiveTab("vault"), L = !0);
            }), D(()=>e.app_active_tab, ()=>{
                P(()=>{
                    window.scrollTo(0, 0);
                    const y = document.querySelector(".main-content");
                    y && (y.scrollTop = 0);
                });
            }), (y, k)=>{
                const q = W;
                return a(), o(q, {
                    class: "main-content"
                }, {
                    default: n(()=>[
                            _(H, {
                                name: t(e).pageTransition,
                                mode: "out-in"
                            }, {
                                default: n(()=>[
                                        (a(), S("div", {
                                            key: t(e).app_active_tab,
                                            class: "view-container"
                                        }, [
                                            t(e).app_active_tab === "vault" ? (a(), o(t(b), {
                                                key: 0,
                                                ref_key: "vaultListRef",
                                                ref: l,
                                                onSwitchTab: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSwitchTab"
                                            ])) : t(e).app_active_tab === "add-vault" ? (a(), o(t(u), {
                                                key: 1,
                                                onSuccess: T
                                            })) : t(e).app_active_tab === "migration-export" ? (a(), o(t(c), {
                                                key: 2
                                            })) : t(e).app_active_tab === "migration-import" ? (a(), o(t(m), {
                                                key: 3,
                                                onSuccess: T
                                            })) : t(e).app_active_tab === "backups" ? (a(), o(t(g), {
                                                key: 4,
                                                onSuccess: T
                                            })) : t(e).app_active_tab === "tools" ? (a(), o(t(p), {
                                                key: 5
                                            })) : t(e).app_active_tab === "settings-passkey" ? (a(), o(t(h), {
                                                key: 6
                                            })) : t(e).app_active_tab === "settings-security" ? (a(), o(t(f), {
                                                key: 7
                                            })) : t(e).app_active_tab === "settings-appearance" ? (a(), o(t(V), {
                                                key: 8
                                            })) : t(e).app_active_tab === "settings-language" ? (a(), o(t(R), {
                                                key: 9
                                            })) : t(e).app_active_tab === "settings-theme" ? (a(), o(t(O), {
                                                key: 10
                                            })) : t(e).app_active_tab === "settings-layout" ? (a(), o(t(I), {
                                                key: 11
                                            })) : t(e).app_active_tab === "settings-devices" ? (a(), o(t(w), {
                                                key: 12
                                            })) : t(e).app_active_tab === "settings-trash" ? (a(), o(t(r), {
                                                key: 13
                                            })) : t(e).app_active_tab === "settings-pin" ? (a(), o(t(E), {
                                                key: 14
                                            })) : t(e).app_active_tab === "settings-about" ? (a(), o(t(B), {
                                                key: 15
                                            })) : C("", !0)
                                        ]))
                                    ]),
                                _: 1
                            }, 8, [
                                "name"
                            ])
                        ]),
                    _: 1
                });
            };
        }
    };
    Rt = {
        __name: "mobileBody",
        setup (d) {
            const e = x(), l = J(null), b = i(()=>s(()=>import("./vaultList-CcF3pjjB.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))), u = i(()=>s(()=>import("./mobileHub-DDAH5LV3.js"), __vite__mapDeps([47,1,2,3,4,5,6,7,8,9,31]))), c = i(()=>s(()=>import("./aboutView-dop5v35j.js"), __vite__mapDeps([46,4,5,6,2,1,3,7,8,9]))), m = i(()=>s(()=>import("./addVault-zjsCJwk2.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([18,5,6,1,2,3,10,4,7,8,9,11,19]))), g = i(()=>s(()=>import("./dataExport-CNne2lwt.js"), __vite__mapDeps([20,1,2,3,21,4,5,6,7,8,9,22,10,11,23,15,24,25,16,12,13,26]))), p = i(()=>s(()=>import("./dataImport-Bc57JfA-.js"), __vite__mapDeps([27,1,2,3,4,5,6,7,8,9,22,10,11,23,15,24,25,12,13,21,28]))), h = i(()=>s(()=>import("./dataBackup-CfnjspjF.js"), __vite__mapDeps([29,1,2,3,4,5,6,7,8,9,22,10,11,23,15,24,25,12,13]))), f = i(()=>s(()=>import("./utilityTools-9E94vN4y.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([30,5,6,1,2,3,31,4,7,8,9]))), V = i(()=>s(()=>import("./passkeySettings-BaW5vx2S.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,33,12,13]))), R = i(()=>s(()=>import("./appearanceSetting-0lP2ks00.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,38]))), O = i(()=>s(()=>import("./securitySettings-yAjLo69s.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,35,11,12,13,36]))), I = i(()=>s(()=>import("./languageSettings-D7qdDl3A.js"), __vite__mapDeps([39,1,2,3,4,5,6,7,8,9]))), w = i(()=>s(()=>import("./themeSettings-iAaUGb0-.js"), __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,38]))), r = i(()=>s(()=>import("./layoutSettings-Ce2fFHO4.js"), __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,42]))), E = i(()=>s(()=>import("./devicesSettings-CyM-mYkp.js"), __vite__mapDeps([43,1,2,3,4,5,6,7,8,9]))), B = i(()=>s(()=>import("./trashSettings-Dyalp1Hm.js"), __vite__mapDeps([44,1,2,3,4,5,6,7,8,9,14,10,11]))), L = i(()=>s(()=>import("./pinSettings-Bs20aLvk.js"), __vite__mapDeps([45,1,2,3,4,5,6,7,8,9,35,12,13])));
            let T = !1;
            const y = ()=>{
                e.setActiveTab("vault"), l.value ? P(()=>l.value?.fetchVault()) : T = !0;
            };
            return D(l, (k)=>{
                k && T && (T = !1, P(()=>k.fetchVault()));
            }), D(()=>e.homeTabReset, ()=>{
                e.setActiveTab("vault"), T = !0;
            }), D(()=>e.app_active_tab, ()=>{
                P(()=>{
                    const k = document.querySelector("#app");
                    k && (k.scrollTop = 0), setTimeout(()=>{
                        k && k.scrollTop !== 0 && (k.scrollTop = 0);
                    }, 10);
                });
            }), (k, q)=>{
                const Y = W;
                return a(), o(Y, {
                    class: "main-content has-bottom-nav"
                }, {
                    default: n(()=>[
                            _(H, {
                                name: t(e).pageTransition,
                                mode: "out-in"
                            }, {
                                default: n(()=>[
                                        (a(), S("div", {
                                            key: t(e).app_active_tab,
                                            class: "view-container"
                                        }, [
                                            t(e).app_active_tab === "vault" ? (a(), o(t(b), {
                                                key: 0,
                                                ref_key: "vaultListRef",
                                                ref: l,
                                                onSwitchTab: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSwitchTab"
                                            ])) : t(e).app_active_tab === "mobile-data" ? (a(), o(t(u), {
                                                key: 1,
                                                mode: "data",
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSelect"
                                            ])) : t(e).app_active_tab === "mobile-settings" ? (a(), o(t(u), {
                                                key: 2,
                                                mode: "settings",
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSelect"
                                            ])) : t(e).app_active_tab === "settings-about" ? (a(), o(t(c), {
                                                key: 3
                                            })) : t(e).app_active_tab === "add-vault" ? (a(), o(t(m), {
                                                key: 4,
                                                onSuccess: y
                                            })) : t(e).app_active_tab === "migration-export" ? (a(), o(t(g), {
                                                key: 5
                                            })) : t(e).app_active_tab === "migration-import" ? (a(), o(t(p), {
                                                key: 6,
                                                onSuccess: y
                                            })) : t(e).app_active_tab === "backups" ? (a(), o(t(h), {
                                                key: 7,
                                                onSuccess: y
                                            })) : t(e).app_active_tab === "tools" ? (a(), o(t(f), {
                                                key: 8
                                            })) : t(e).app_active_tab === "settings-passkey" ? (a(), o(t(V), {
                                                key: 9
                                            })) : t(e).app_active_tab === "settings-appearance" ? (a(), o(t(R), {
                                                key: 10
                                            })) : t(e).app_active_tab === "settings-security" ? (a(), o(t(O), {
                                                key: 11
                                            })) : t(e).app_active_tab === "settings-language" ? (a(), o(t(I), {
                                                key: 12
                                            })) : t(e).app_active_tab === "settings-theme" ? (a(), o(t(w), {
                                                key: 13
                                            })) : t(e).app_active_tab === "settings-layout" ? (a(), o(t(r), {
                                                key: 14
                                            })) : t(e).app_active_tab === "settings-devices" ? (a(), o(t(E), {
                                                key: 15
                                            })) : t(e).app_active_tab === "settings-trash" ? (a(), o(t(B), {
                                                key: 16
                                            })) : t(e).app_active_tab === "settings-pin" ? (a(), o(t(L), {
                                                key: 17
                                            })) : C("", !0)
                                        ]))
                                    ]),
                                _: 1
                            }, 8, [
                                "name"
                            ])
                        ]),
                    _: 1
                });
            };
        }
    };
    Ot = {
        __name: "home",
        setup (d) {
            const e = x();
            return gt(()=>{
                const l = [
                    "vault",
                    "add-vault",
                    "tools",
                    "backups",
                    "migration-export",
                    "migration-import"
                ];
                e.isMobile && l.push("mobile-data", "mobile-settings");
                const b = e.app_active_tab.startsWith("settings-");
                !l.includes(e.app_active_tab) && !b && e.setActiveTab("vault");
            }), (l, b)=>{
                const u = dt;
                return a(), o(u, {
                    class: "home-container"
                }, {
                    default: n(()=>[
                            _(u, {
                                class: "main-body"
                            }, {
                                default: n(()=>[
                                        t(e).isMobile ? (a(), o(Rt, {
                                            key: 1
                                        })) : (a(), S(M, {
                                            key: 0
                                        }, [
                                            _(Vt, {
                                                app_active_tab: t(e).app_active_tab,
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "app_active_tab",
                                                "onSelect"
                                            ]),
                                            _(Pt)
                                        ], 64))
                                    ]),
                                _: 1
                            }),
                            t(e).isMobile ? (a(), o(Dt, {
                                key: 0,
                                app_active_tab: t(e).app_active_tab,
                                onSelect: t(e).setActiveTab
                            }, null, 8, [
                                "app_active_tab",
                                "onSelect"
                            ])) : C("", !0)
                        ]),
                    _: 1
                });
            };
        }
    };
    Bt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ot
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { At as I, Bt as h, __tla };
