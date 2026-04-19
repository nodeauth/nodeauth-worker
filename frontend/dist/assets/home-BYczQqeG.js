const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vaultList-CLGZLql7.js","assets/element-plus-Ca9klJWt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/index-C63vm3Zv.js","assets/pdf-utils-HZTV32cA.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-D6rhlcle.css","assets/vaultService-CN5Qz0-L.js","assets/resourceRegistry-BelDkWW9.js","assets/responsiveOverlay-BK3SNTTx.js","assets/responsiveOverlay-DXpm1mUF.css","assets/qr-utils-BC7NLEos.js","assets/common-C-8Ql2yp.js","assets/vaultList-Cz0xssQI.css","assets/addVault-B2xH_5II.js","assets/dataExport-Cd5QdDuP.js","assets/iconProtonAuth-By4W04ac.js","assets/dataMigrationService-D1gFIi41.js","assets/argon2-browser-ICE29r9E.js","assets/hash-wasm-Dup_VHWH.js","assets/wa-sqlite-D0naBMh4.js","assets/dataImport-Bca3Q22u.js","assets/iconLastPassAuth-BYKcLXlV.js","assets/dataBackup-ClYh4_Gy.js","assets/utilityTools-CkJFqzKH.js","assets/iconToolbox-DlVfwCDt.js","assets/passkeySettings-Dc9RVIqu.js","assets/webAuthnService-B2aG1oBp.js","assets/securitySettings-CqQtGLOO.js","assets/securitySettings-CWqITrPL.css","assets/appearanceSetting-HQj8P1nG.js","assets/iconTheme-DTfTTDCS.js","assets/languageSettings-DO55Hh-2.js","assets/themeSettings-Bb9LXSz4.js","assets/layoutSettings-w7EMaVgd.js","assets/layoutSettings-CDkc7e94.css","assets/devicesSettings-U29WOzEb.js","assets/aboutView-DkQ4fgOa.js","assets/mobileHub-OknzIl1c.js"])))=>i.map(i=>d[i]);
import { ad as q, p as X, M as Y, w as G, ae as K, a6 as Z, k as tt, af as et, ag as U, ah as at, ai as ot, aj as it, f as F, d as nt, ak as st, al as _t, am as lt, an as ct, E as ut, ao as pt, ap as N, aq as rt } from "./element-plus-Ca9klJWt.js";
import { I as a, M as S, Q as v, aA as mt, J as o, P as s, O as _, u as t, F as x, ac as B, X as M, _ as A, S as w, c as dt, Y as C, f as L, n as D, a0 as j, e as W, k as vt } from "./vue-core-Daban9YF.js";
import { _ as H, F as bt, f as yt, h as gt, u as $, k as i, __tla as __tla_0 } from "./index-C63vm3Zv.js";
import { I as J } from "./iconToolbox-DlVfwCDt.js";
import { _ as n, __tla as __tla_1 } from "./pdf-utils-HZTV32cA.js";
let Tt, Ct;
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
    const ft = {
        name: "iconAbout"
    }, kt = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
    };
    function Et(d, e, l, b, u, c) {
        return a(), S("svg", kt, [
            ...e[0] || (e[0] = [
                v("path", {
                    fill: "currentColor",
                    d: "M11 9h2V7h-2v2zm0 8h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                }, null, -1)
            ])
        ]);
    }
    let St, At, ht, Vt, It, Lt, Dt, Rt;
    Tt = H(ft, [
        [
            "render",
            Et
        ]
    ]);
    St = [
        {
            key: "vault",
            label: "menu.vault",
            icon: q
        },
        {
            key: "add-vault",
            label: "menu.add",
            icon: X
        },
        {
            key: "migration",
            label: "menu.migration",
            icon: K,
            children: [
                {
                    key: "migration-export",
                    label: "migration.export",
                    icon: Y
                },
                {
                    key: "migration-import",
                    label: "migration.import",
                    icon: G
                }
            ]
        },
        {
            key: "backups",
            label: "menu.backup",
            icon: Z
        },
        {
            key: "tools",
            label: "menu.tools",
            icon: J
        },
        {
            key: "settings",
            label: "menu.settings",
            icon: U,
            children: [
                {
                    key: "settings-passkey",
                    label: "menu.passkey",
                    icon: bt
                },
                {
                    key: "settings-security",
                    label: "menu.security",
                    icon: tt
                },
                {
                    key: "settings-appearance",
                    label: "menu.appearance",
                    icon: et
                },
                {
                    key: "settings-about",
                    label: "menu.about",
                    icon: Tt
                }
            ]
        }
    ];
    At = {
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
            const { t: e, locale: l } = yt(), b = gt(), u = $();
            mt();
            const c = dt(()=>u.isSidebarCollapsed), m = ()=>u.toggleSidebar(), g = async ()=>{
                await b.clearUserInfo(), await Promise.race([
                    b.logout(),
                    new Promise((p)=>setTimeout(p, 1500))
                ]).catch(()=>{}), window.location.href = "/login", ut.success(e("auth.logout_success"));
            };
            return (p, h)=>{
                const E = F, V = it, R = ot, P = at, I = nt, O = ct;
                return a(), o(O, {
                    width: t(c) ? "64px" : "240px",
                    class: "left-aside"
                }, {
                    default: s(()=>[
                            _(P, {
                                "default-active": d.app_active_tab,
                                class: "side-menu",
                                onSelect: h[0] || (h[0] = (r)=>p.$emit("select", r)),
                                collapse: t(c)
                            }, {
                                default: s(()=>[
                                        (a(!0), S(x, null, B(t(St), (r)=>(a(), S(x, {
                                                key: r.key
                                            }, [
                                                r.children ? (a(), o(R, {
                                                    key: 0,
                                                    index: r.key
                                                }, {
                                                    title: s(()=>[
                                                            _(E, null, {
                                                                default: s(()=>[
                                                                        (a(), o(M(r.icon)))
                                                                    ]),
                                                                _: 2
                                                            }, 1024),
                                                            v("span", null, A(p.$t(r.label)), 1)
                                                        ]),
                                                    default: s(()=>[
                                                            (a(!0), S(x, null, B(r.children, (y)=>(a(), o(V, {
                                                                    key: y.key,
                                                                    index: y.key
                                                                }, {
                                                                    default: s(()=>[
                                                                            _(E, null, {
                                                                                default: s(()=>[
                                                                                        (a(), o(M(y.icon)))
                                                                                    ]),
                                                                                _: 2
                                                                            }, 1024),
                                                                            v("span", null, A(p.$t(y.label)), 1)
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
                                                    title: s(()=>[
                                                            v("span", null, A(p.$t(r.label)), 1)
                                                        ]),
                                                    default: s(()=>[
                                                            _(E, null, {
                                                                default: s(()=>[
                                                                        (a(), o(M(r.icon)))
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
                                class: w([
                                    "sidebar-footer",
                                    {
                                        "is-collapsed": t(c)
                                    }
                                ])
                            }, [
                                _(I, {
                                    circle: "",
                                    icon: t(c) ? t(st) : t(_t),
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
                                    default: s(()=>[
                                            _(E, null, {
                                                default: s(()=>[
                                                        _(t(lt))
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
    ht = {
        key: 0,
        class: "mobile-menu"
    };
    Vt = {
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
            const l = e, b = $(), u = (c)=>{
                l("select", c);
            };
            return (c, m)=>{
                const g = F;
                return t(b).isMobile ? (a(), S("nav", ht, [
                    v("div", {
                        class: w([
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
                            default: s(()=>[
                                    _(t(q))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.vault")), 1)
                    ], 2),
                    v("div", {
                        class: w([
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
                            default: s(()=>[
                                    _(t(pt))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.data")), 1)
                    ], 2),
                    v("div", {
                        class: w([
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
                            default: s(()=>[
                                    _(J)
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.tools")), 1)
                    ], 2),
                    v("div", {
                        class: w([
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
                            default: s(()=>[
                                    _(t(U))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.settings")), 1)
                    ], 2)
                ])) : C("", !0);
            };
        }
    };
    It = H(Vt, [
        [
            "__scopeId",
            "data-v-3dd01012"
        ]
    ]);
    Lt = {
        __name: "desktopBody",
        setup (d) {
            const e = $(), l = W(null), b = i(()=>n(()=>import("./vaultList-CLGZLql7.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))), u = i(()=>n(()=>import("./addVault-B2xH_5II.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([17,5,6,1,2,3,10,4,7,8,9,11]))), c = i(()=>n(()=>import("./dataExport-Cd5QdDuP.js"), __vite__mapDeps([18,1,2,3,19,4,5,6,7,8,9,20,10,11,21,22,14,23,15,12,13]))), m = i(()=>n(()=>import("./dataImport-Bca3Q22u.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,20,10,11,21,22,14,23,12,13,19,25]))), g = i(()=>n(()=>import("./dataBackup-ClYh4_Gy.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,20,10,11,21,22,14,23,12,13]))), p = i(()=>n(()=>import("./utilityTools-CkJFqzKH.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([27,5,6,1,2,3,28,4,7,8,9]))), h = i(()=>n(()=>import("./passkeySettings-Dc9RVIqu.js"), __vite__mapDeps([29,1,2,3,4,5,6,7,8,9,30,12,13]))), E = i(()=>n(()=>import("./securitySettings-CqQtGLOO.js"), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,11,12,13,32]))), V = i(()=>n(()=>import("./appearanceSetting-HQj8P1nG.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,34]))), R = i(()=>n(()=>import("./languageSettings-DO55Hh-2.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9]))), P = i(()=>n(()=>import("./themeSettings-Bb9LXSz4.js"), __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,34]))), I = i(()=>n(()=>import("./layoutSettings-w7EMaVgd.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,38]))), O = i(()=>n(()=>import("./devicesSettings-U29WOzEb.js"), __vite__mapDeps([39,1,2,3,4,5,6,7,8,9]))), r = i(()=>n(()=>import("./aboutView-DkQ4fgOa.js"), __vite__mapDeps([40,4,5,6,2,1,3,7,8,9])));
            let y = !1;
            const T = ()=>{
                e.setActiveTab("vault"), l.value ? D(()=>l.value?.fetchVault()) : y = !0;
            };
            return L(l, (f)=>{
                f && y && (y = !1, D(()=>f.fetchVault()));
            }), L(()=>e.homeTabReset, ()=>{
                e.app_active_tab === "vault" ? l.value?.fetchVault() : (e.setActiveTab("vault"), y = !0);
            }), L(()=>e.app_active_tab, ()=>{
                D(()=>{
                    window.scrollTo(0, 0);
                    const f = document.querySelector(".main-content");
                    f && (f.scrollTop = 0);
                });
            }), (f, k)=>{
                const z = N;
                return a(), o(z, {
                    class: "main-content"
                }, {
                    default: s(()=>[
                            _(j, {
                                name: t(e).pageTransition,
                                mode: "out-in"
                            }, {
                                default: s(()=>[
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
                                            })) : t(e).app_active_tab === "settings-security" ? (a(), o(t(E), {
                                                key: 7
                                            })) : t(e).app_active_tab === "settings-appearance" ? (a(), o(t(V), {
                                                key: 8
                                            })) : t(e).app_active_tab === "settings-language" ? (a(), o(t(R), {
                                                key: 9
                                            })) : t(e).app_active_tab === "settings-theme" ? (a(), o(t(P), {
                                                key: 10
                                            })) : t(e).app_active_tab === "settings-layout" ? (a(), o(t(I), {
                                                key: 11
                                            })) : t(e).app_active_tab === "settings-devices" ? (a(), o(t(O), {
                                                key: 12
                                            })) : t(e).app_active_tab === "settings-about" ? (a(), o(t(r), {
                                                key: 13
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
    Dt = {
        __name: "mobileBody",
        setup (d) {
            const e = $(), l = W(null), b = i(()=>n(()=>import("./vaultList-CLGZLql7.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))), u = i(()=>n(()=>import("./mobileHub-OknzIl1c.js"), __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,28]))), c = i(()=>n(()=>import("./aboutView-DkQ4fgOa.js"), __vite__mapDeps([40,4,5,6,2,1,3,7,8,9]))), m = i(()=>n(()=>import("./addVault-B2xH_5II.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([17,5,6,1,2,3,10,4,7,8,9,11]))), g = i(()=>n(()=>import("./dataExport-Cd5QdDuP.js"), __vite__mapDeps([18,1,2,3,19,4,5,6,7,8,9,20,10,11,21,22,14,23,15,12,13]))), p = i(()=>n(()=>import("./dataImport-Bca3Q22u.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,20,10,11,21,22,14,23,12,13,19,25]))), h = i(()=>n(()=>import("./dataBackup-ClYh4_Gy.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,20,10,11,21,22,14,23,12,13]))), E = i(()=>n(()=>import("./utilityTools-CkJFqzKH.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([27,5,6,1,2,3,28,4,7,8,9]))), V = i(()=>n(()=>import("./passkeySettings-Dc9RVIqu.js"), __vite__mapDeps([29,1,2,3,4,5,6,7,8,9,30,12,13]))), R = i(()=>n(()=>import("./appearanceSetting-HQj8P1nG.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,34]))), P = i(()=>n(()=>import("./securitySettings-CqQtGLOO.js"), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,11,12,13,32]))), I = i(()=>n(()=>import("./languageSettings-DO55Hh-2.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9]))), O = i(()=>n(()=>import("./themeSettings-Bb9LXSz4.js"), __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,34]))), r = i(()=>n(()=>import("./layoutSettings-w7EMaVgd.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,38]))), y = i(()=>n(()=>import("./devicesSettings-U29WOzEb.js"), __vite__mapDeps([39,1,2,3,4,5,6,7,8,9])));
            let T = !1;
            const f = ()=>{
                e.setActiveTab("vault"), l.value ? D(()=>l.value?.fetchVault()) : T = !0;
            };
            return L(l, (k)=>{
                k && T && (T = !1, D(()=>k.fetchVault()));
            }), L(()=>e.homeTabReset, ()=>{
                e.setActiveTab("vault"), T = !0;
            }), L(()=>e.app_active_tab, ()=>{
                D(()=>{
                    const k = document.querySelector("#app");
                    k && (k.scrollTop = 0), setTimeout(()=>{
                        k && k.scrollTop !== 0 && (k.scrollTop = 0);
                    }, 10);
                });
            }), (k, z)=>{
                const Q = N;
                return a(), o(Q, {
                    class: "main-content has-bottom-nav"
                }, {
                    default: s(()=>[
                            _(j, {
                                name: t(e).pageTransition,
                                mode: "out-in"
                            }, {
                                default: s(()=>[
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
                                                onSuccess: f
                                            })) : t(e).app_active_tab === "migration-export" ? (a(), o(t(g), {
                                                key: 5
                                            })) : t(e).app_active_tab === "migration-import" ? (a(), o(t(p), {
                                                key: 6,
                                                onSuccess: f
                                            })) : t(e).app_active_tab === "backups" ? (a(), o(t(h), {
                                                key: 7,
                                                onSuccess: f
                                            })) : t(e).app_active_tab === "tools" ? (a(), o(t(E), {
                                                key: 8
                                            })) : t(e).app_active_tab === "settings-passkey" ? (a(), o(t(V), {
                                                key: 9
                                            })) : t(e).app_active_tab === "settings-appearance" ? (a(), o(t(R), {
                                                key: 10
                                            })) : t(e).app_active_tab === "settings-security" ? (a(), o(t(P), {
                                                key: 11
                                            })) : t(e).app_active_tab === "settings-language" ? (a(), o(t(I), {
                                                key: 12
                                            })) : t(e).app_active_tab === "settings-theme" ? (a(), o(t(O), {
                                                key: 13
                                            })) : t(e).app_active_tab === "settings-layout" ? (a(), o(t(r), {
                                                key: 14
                                            })) : t(e).app_active_tab === "settings-devices" ? (a(), o(t(y), {
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
        __name: "home",
        setup (d) {
            const e = $();
            return vt(()=>{
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
                const u = rt;
                return a(), o(u, {
                    class: "home-container"
                }, {
                    default: s(()=>[
                            _(u, {
                                class: "main-body"
                            }, {
                                default: s(()=>[
                                        t(e).isMobile ? (a(), o(Dt, {
                                            key: 1
                                        })) : (a(), S(x, {
                                            key: 0
                                        }, [
                                            _(At, {
                                                app_active_tab: t(e).app_active_tab,
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "app_active_tab",
                                                "onSelect"
                                            ]),
                                            _(Lt)
                                        ], 64))
                                    ]),
                                _: 1
                            }),
                            t(e).isMobile ? (a(), o(It, {
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
    Ct = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Rt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { Tt as I, Ct as h, __tla };
