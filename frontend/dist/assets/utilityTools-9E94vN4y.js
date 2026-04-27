const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/passwordGenerator-Cta-3KII.js","assets/element-plus-Dh0klhaa.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/index-NqcSa8kS.js","assets/pdf-utils-r4RjNe6V.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CLSE-HWx.css","assets/timeSync-CG0cpjWw.js","assets/qrParser-DrrDiD7R.js","assets/totpSecret-0b9ZKs9U.js","assets/common-Cpp1KiKo.js","assets/vaultService-DmxSVr-T.js","assets/resourceRegistry-BAWP-Piz.js","assets/qr-utils-C-MFlKj_.js","assets/appsReview-DprZ8ka6.js","assets/iconProtonAuth-CiCbD6Fj.js","assets/iconLastPassAuth-DETFnNuu.js"])))=>i.map(i=>d[i]);
import { _, __tla as __tla_0 } from "./pdf-utils-r4RjNe6V.js";
import { f as O, S as x, k as B, B as q, a7 as z, W as $, a8 as M } from "./element-plus-Dh0klhaa.js";
import { I as k } from "./iconToolbox-BvC3QYAW.js";
import { u as N, i as F, __tla as __tla_1 } from "./index-NqcSa8kS.js";
import { I as t, M as r, Q as e, F as T, O as m, P as h, u as g, _ as l, Y as E, ac as Q, J as f, X as w, c as y, S as J, a8 as d, aD as p } from "./vue-core-Daban9YF.js";
import "./compression-utils-CXh1ITwj.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let fe;
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
    let W, X, Y, j, G, H, K, U, Z, ee, te, oe, se, ae, ce, re;
    W = {
        class: "tools-wrapper"
    };
    X = {
        class: "tab-card-wrapper"
    };
    Y = {
        class: "page-header-container"
    };
    j = {
        class: "page-header-hero"
    };
    G = {
        class: "hero-icon-wrapper"
    };
    H = {
        key: 0
    };
    K = {
        class: "page-desc-text"
    };
    U = {
        class: "page-header-hero"
    };
    Z = {
        class: "hero-icon-wrapper"
    };
    ee = {
        key: 0
    };
    te = {
        class: "page-desc-text"
    };
    oe = {
        key: 0,
        class: "tools-grid"
    };
    se = {
        class: "tool-card-content"
    };
    ae = {
        class: "icon-wrapper"
    };
    ce = {
        class: "text-info"
    };
    re = {
        key: 1,
        class: "tool-container"
    };
    fe = {
        __name: "utilityTools",
        setup (ie) {
            const u = N(), I = p(()=>_(()=>import("./passwordGenerator-Cta-3KII.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))), C = p(()=>_(()=>import("./timeSync-CG0cpjWw.js"), __vite__mapDeps([10,1,2,3,4,5,6,7,8,9]))), D = p(()=>_(()=>import("./qrParser-DrrDiD7R.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([11,5,6,1,2,3,4,7,8,9]))), P = p(()=>_(()=>import("./totpSecret-0b9ZKs9U.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([12,5,6,1,2,3,8,13,4,7,9,14,15,16]))), S = p(()=>_(()=>import("./appsReview-DprZ8ka6.js"), __vite__mapDeps([17,1,2,3,18,4,5,6,7,8,9,19]))), i = y({
                get: ()=>u.activeSubTool,
                set: (s)=>{
                    u.activeSubTool = s;
                }
            }), { t: o } = F.global, v = y(()=>[
                    {
                        id: "totp-secret",
                        title: o("tools.totp_secret_title"),
                        desc: o("tools.totp_secret_desc"),
                        icon: d(B)
                    },
                    {
                        id: "apps-review",
                        title: o("tools.apps_review_title"),
                        desc: o("tools.apps_review_desc"),
                        icon: d(q)
                    },
                    {
                        id: "password",
                        title: o("tools.password_gen_title"),
                        desc: o("tools.password_gen_desc"),
                        icon: d(z)
                    },
                    {
                        id: "time-sync",
                        title: o("tools.time_sync_title"),
                        desc: o("tools.time_sync_desc"),
                        icon: d($)
                    },
                    {
                        id: "qr-parser",
                        title: o("tools.qr_parser_title"),
                        desc: o("tools.qr_parser_desc"),
                        icon: d(M)
                    }
                ]), V = (s)=>{
                const a = v.value.find((c)=>c.id === s);
                return a ? a.title : "工具";
            }, b = (s)=>{
                const a = v.value.find((c)=>c.id === s);
                return a ? a.desc : "";
            }, A = (s)=>{
                const a = v.value.find((c)=>c.id === s);
                return a ? a.icon : k;
            }, L = y(()=>{
                switch(i.value){
                    case "password":
                        return I;
                    case "time-sync":
                        return C;
                    case "qr-parser":
                        return D;
                    case "totp-secret":
                        return P;
                    case "apps-review":
                        return S;
                    default:
                        return null;
                }
            });
            return (s, a)=>{
                const c = O, R = x;
                return t(), r("div", W, [
                    e("div", X, [
                        e("div", Y, [
                            i.value ? (t(), r(T, {
                                key: 1
                            }, [
                                e("div", U, [
                                    e("div", Z, [
                                        m(c, {
                                            size: 28
                                        }, {
                                            default: h(()=>[
                                                    (t(), f(w(A(i.value))))
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                    g(u).isMobile ? E("", !0) : (t(), r("h2", ee, l(V(i.value)), 1))
                                ]),
                                e("p", te, l(b(i.value)), 1)
                            ], 64)) : (t(), r(T, {
                                key: 0
                            }, [
                                e("div", j, [
                                    e("div", G, [
                                        m(c, {
                                            size: 28
                                        }, {
                                            default: h(()=>[
                                                    m(k)
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                    g(u).isMobile ? E("", !0) : (t(), r("h2", H, l(s.$t("tools.title")), 1))
                                ]),
                                e("p", K, l(s.$t("tools.desc")), 1)
                            ], 64))
                        ]),
                        i.value ? (t(), r("div", re, [
                            (t(), f(w(L.value)))
                        ])) : (t(), r("div", oe, [
                            (t(!0), r(T, null, Q(v.value, (n)=>(t(), f(R, {
                                    key: n.id,
                                    shadow: "hover",
                                    class: J([
                                        "tool-card",
                                        `tool-card-${n.id}`
                                    ]),
                                    onClick: (ne)=>i.value = n.id
                                }, {
                                    default: h(()=>[
                                            e("div", se, [
                                                e("div", ae, [
                                                    m(c, {
                                                        size: 32
                                                    }, {
                                                        default: h(()=>[
                                                                (t(), f(w(n.icon)))
                                                            ]),
                                                        _: 2
                                                    }, 1024)
                                                ]),
                                                e("div", ce, [
                                                    e("h3", null, l(n.title), 1),
                                                    e("p", null, l(n.desc), 1)
                                                ])
                                            ])
                                        ]),
                                    _: 2
                                }, 1032, [
                                    "class",
                                    "onClick"
                                ]))), 128))
                        ]))
                    ])
                ]);
            };
        }
    };
});
export { fe as default, __tla };
