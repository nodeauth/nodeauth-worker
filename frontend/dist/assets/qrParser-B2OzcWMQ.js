const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-BDXW96HW.js","assets/element-plus-CVRB8fAt.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-ZD31REeY.js","assets/index-Bkp62iVv.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-H-OGOzP4.css"])))=>i.map(i=>d[i]);
import { _ as w, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { L as S, i as h, f as g, ad as k, d as q, E as c } from "./element-plus-CVRB8fAt.js";
import { i as x, __tla as __tla_1 } from "./index-Bkp62iVv.js";
import { I as l, M as r, Q as B, O as t, u as i, P as s, Z as u, _, Y as C, aD as D, e as I } from "./vue-core-Daban9YF.js";
import "./compression-utils-CXh1ITwj.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let z;
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
    let N, P, b;
    N = {
        class: "tool-pane"
    };
    P = {
        class: "qr-parser-container"
    };
    b = {
        key: 0,
        class: "result-section mt-20"
    };
    z = {
        __name: "qrParser",
        setup (R) {
            const p = D(()=>w(()=>import("./qrScanner-BDXW96HW.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), e = I(""), { t: a } = x.global, d = (o)=>{
                e.value = o, c.success(a("tools.qr_parsed"));
            }, m = async ()=>{
                if (e.value) try {
                    await navigator.clipboard.writeText(e.value), c.success(a("tools.password_copied"));
                } catch  {}
            };
            return (o, n)=>{
                const f = S, v = h, y = g, E = q;
                return l(), r("div", N, [
                    B("div", P, [
                        t(i(p), {
                            onScanSuccess: d
                        }),
                        e.value ? (l(), r("div", b, [
                            t(f, {
                                "content-position": "left"
                            }, {
                                default: s(()=>[
                                        u(_(o.$t("tools.qr_result")), 1)
                                    ]),
                                _: 1
                            }),
                            t(v, {
                                modelValue: e.value,
                                "onUpdate:modelValue": n[0] || (n[0] = (V)=>e.value = V),
                                type: "textarea",
                                rows: 3,
                                readonly: "",
                                resize: "none"
                            }, null, 8, [
                                "modelValue"
                            ]),
                            t(E, {
                                type: "success",
                                plain: "",
                                class: "w-full mt-10",
                                onClick: m
                            }, {
                                default: s(()=>[
                                        t(y, null, {
                                            default: s(()=>[
                                                    t(i(k))
                                                ]),
                                            _: 1
                                        }),
                                        u(" " + _(o.$t("common.copy")), 1)
                                    ]),
                                _: 1
                            })
                        ])) : C("", !0)
                    ])
                ]);
            };
        }
    };
});
export { z as default, __tla };
