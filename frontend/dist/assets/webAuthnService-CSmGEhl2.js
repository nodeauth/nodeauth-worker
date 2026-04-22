const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Bkp62iVv.js","assets/pdf-utils-CLgdGVwQ.js","assets/compression-utils-CXh1ITwj.js","assets/vue-core-Daban9YF.js","assets/element-plus-CVRB8fAt.js","assets/element-plus-Dh61In7b.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-H-OGOzP4.css"])))=>i.map(i=>d[i]);
import { _ as s, __tla as __tla_0 } from "./pdf-utils-CLgdGVwQ.js";
import { s as u, a as c, b as d } from "./simplewebauthn-3qpiAaRi.js";
import { r as a, __tla as __tla_1 } from "./index-Bkp62iVv.js";
let l;
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
    l = {
        isSupported () {
            return d();
        },
        async register (t) {
            const e = await a("/api/oauth/webauthn/register/options"), i = await c(e);
            return await a("/api/oauth/webauthn/register/verify", {
                method: "POST",
                body: JSON.stringify({
                    name: t,
                    response: i
                })
            });
        },
        async login () {
            const t = await a("/api/oauth/webauthn/login/options"), e = await u(t), { getDeviceId: i } = await s(async ()=>{
                const { getDeviceId: r } = await import("./index-Bkp62iVv.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((o)=>o.z);
                return {
                    getDeviceId: r
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), n = {
                ...e,
                deviceId: i()
            };
            return await a("/api/oauth/webauthn/login/verify", {
                method: "POST",
                body: JSON.stringify(n)
            });
        },
        async listCredentials () {
            return await a("/api/oauth/webauthn/credentials");
        },
        async deleteCredential (t) {
            return await a(`/api/oauth/webauthn/credentials/${t}`, {
                method: "DELETE"
            });
        },
        async updateCredentialName (t, e) {
            return await a(`/api/oauth/webauthn/credentials/${t}`, {
                method: "PUT",
                body: JSON.stringify({
                    name: e
                })
            });
        }
    };
});
export { l as w, __tla };
