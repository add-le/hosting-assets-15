const e="s3p-pdf-render";let t;let n;let s;let l=false;let o=false;let i=false;let c=false;let f=false;const r={};const u=e=>{const t=new URL(e,Le.t);return t.origin!==xe.location.origin?t.href:t.pathname};const a=(e,t="")=>{{return()=>{}}};const d=(e,t)=>{{return()=>{}}};const p="{visibility:hidden}.hydrated{visibility:inherit}";const h="http://www.w3.org/1999/xlink";const w={};const m="http://www.w3.org/2000/svg";const $="http://www.w3.org/1999/xhtml";const b=e=>e!=null;const y=e=>{e=typeof e;return e==="object"||e==="function"};function g(e){var t,n,s;return(s=(n=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const v=(e,t,...n)=>{let s=null;let l=null;let o=false;let i=false;const c=[];const f=t=>{for(let n=0;n<t.length;n++){s=t[n];if(Array.isArray(s)){f(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof e!=="function"&&!y(s)){s=String(s)}if(o&&i){c[c.length-1].l+=s}else{c.push(o?S(null,s):s)}i=o}}};f(n);if(t){if(t.name){l=t.name}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}const r=S(e,null);r.o=t;if(c.length>0){r.i=c}{r.u=l}return r};const S=(e,t)=>{const n={p:0,h:e,l:t,m:null,i:null};{n.o=null}{n.u=null}return n};const k={};const j=e=>e&&e.h===k;const C=(e,t)=>{if(e!=null&&!y(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};const O=e=>Se(e).$;const M=(e,t,n)=>{const s=O(e);return{emit:e=>P(s,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}};const P=(e,t,n)=>{const s=Le.ce(t,n);e.dispatchEvent(s);return s};const U=new WeakMap;const x=(e,t,n)=>{let s=Ue.get(e);if(Ne&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=t}else{s.replaceSync(t)}}else{s=t}Ue.set(e,s)};const R=(e,t,n,s)=>{var l;let o=T(t);const i=Ue.get(o);e=e.nodeType===11?e:Re;if(i){if(typeof i==="string"){e=e.head||e;let t=U.get(e);let n;if(!t){U.set(e,t=new Set)}if(!t.has(o)){{{n=Re.createElement("style");n.innerHTML=i}const t=(l=Le.g)!==null&&l!==void 0?l:g(Re);if(t!=null){n.setAttribute("nonce",t)}e.insertBefore(n,e.querySelector("link"))}if(t){t.add(o)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,i]}}return o};const L=e=>{const t=e.v;const n=e.$;const s=t.p;const l=a("attachStyles",t.S);const o=R(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);if(s&10){n["s-sc"]=o;n.classList.add(o+"-h")}l()};const T=(e,t)=>"sc-"+e.S;const N=(e,t,n,s,l,o)=>{if(n!==s){let i=Ce(e,t);let c=t.toLowerCase();if(t==="class"){const t=e.classList;const l=W(n);const o=W(s);t.remove(...l.filter((e=>e&&!o.includes(e))));t.add(...o.filter((e=>e&&!l.includes(e))))}else if(t==="style"){{for(const t in n){if(!s||s[t]==null){if(t.includes("-")){e.style.removeProperty(t)}else{e.style[t]=""}}}}for(const t in s){if(!n||s[t]!==n[t]){if(t.includes("-")){e.style.setProperty(t,s[t])}else{e.style[t]=s[t]}}}}else if(t==="ref"){if(s){s(e)}}else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(Ce(xe,c)){t=c.slice(2)}else{t=c[2]+t.slice(3)}if(n){Le.rel(e,t,n,false)}if(s){Le.ael(e,t,s,false)}}else{const f=y(s);if((i||f&&s!==null)&&!l){try{if(!e.tagName.includes("-")){const l=s==null?"":s;if(t==="list"){i=false}else if(n==null||e[t]!=l){e[t]=l}}else{e[t]=s}}catch(e){}}let r=false;{if(c!==(c=c.replace(/^xlink\:?/,""))){t=c;r=true}}if(s==null||s===false){if(s!==false||e.getAttribute(t)===""){if(r){e.removeAttributeNS(h,t)}else{e.removeAttribute(t)}}}else if((!i||o&4||l)&&!f){s=s===true?"":s;if(r){e.setAttributeNS(h,t,s)}else{e.setAttribute(t,s)}}}}};const E=/\s/;const W=e=>!e?[]:e.split(E);const q=(e,t,n,s)=>{const l=t.m.nodeType===11&&t.m.host?t.m.host:t.m;const o=e&&e.o||w;const i=t.o||w;{for(s in o){if(!(s in i)){N(l,s,o[s],undefined,n,t.p)}}}for(s in i){N(l,s,o[s],i[s],n,t.p)}};const A=(e,o,f,r)=>{const u=o.i[f];let a=0;let d;let p;let h;if(!l){i=true;if(u.h==="slot"){if(t){r.classList.add(t+"-s")}u.p|=u.i?2:1}}if(u.l!==null){d=u.m=Re.createTextNode(u.l)}else if(u.p&1){d=u.m=Re.createTextNode("")}else{if(!c){c=u.h==="svg"}d=u.m=Re.createElementNS(c?m:$,u.p&2?"slot-fb":u.h);if(c&&u.h==="foreignObject"){c=false}{q(null,u,c)}if(b(t)&&d["s-si"]!==t){d.classList.add(d["s-si"]=t)}if(u.i){for(a=0;a<u.i.length;++a){p=A(e,u,a,d);if(p){d.appendChild(p)}}}{if(u.h==="svg"){c=false}else if(d.tagName==="foreignObject"){c=true}}}{d["s-hn"]=s;if(u.p&(2|1)){d["s-sr"]=true;d["s-cr"]=n;d["s-sn"]=u.u||"";h=e&&e.i&&e.i[f];if(h&&h.h===u.h&&e.m){D(e.m,false)}}}return d};const D=(e,t)=>{Le.p|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const l=n[e];if(l["s-hn"]!==s&&l["s-ol"]){z(l).insertBefore(l,_(l));l["s-ol"].remove();l["s-ol"]=undefined;i=true}if(t){D(l,t)}}Le.p&=~1};const F=(e,t,n,l,o,i)=>{let c=e["s-cr"]&&e["s-cr"].parentNode||e;let f;if(c.shadowRoot&&c.tagName===s){c=c.shadowRoot}for(;o<=i;++o){if(l[o]){f=A(null,n,o,e);if(f){l[o].m=f;c.insertBefore(f,_(t))}}}};const H=(e,t,n)=>{for(let s=t;s<=n;++s){const t=e[s];if(t){const e=t.m;X(t);if(e){{o=true;if(e["s-ol"]){e["s-ol"].remove()}else{D(e,true)}}e.remove()}}}};const I=(e,t,n,s)=>{let l=0;let o=0;let i=t.length-1;let c=t[0];let f=t[i];let r=s.length-1;let u=s[0];let a=s[r];let d;while(l<=i&&o<=r){if(c==null){c=t[++l]}else if(f==null){f=t[--i]}else if(u==null){u=s[++o]}else if(a==null){a=s[--r]}else if(V(c,u)){B(c,u);c=t[++l];u=s[++o]}else if(V(f,a)){B(f,a);f=t[--i];a=s[--r]}else if(V(c,a)){if(c.h==="slot"||a.h==="slot"){D(c.m.parentNode,false)}B(c,a);e.insertBefore(c.m,f.m.nextSibling);c=t[++l];a=s[--r]}else if(V(f,u)){if(c.h==="slot"||a.h==="slot"){D(f.m.parentNode,false)}B(f,u);e.insertBefore(f.m,c.m);f=t[--i];u=s[++o]}else{{d=A(t&&t[o],n,o,e);u=s[++o]}if(d){{z(c.m).insertBefore(d,_(c.m))}}}}if(l>i){F(e,s[r+1]==null?null:s[r+1].m,n,s,o,r)}else if(o>r){H(t,l,i)}};const V=(e,t)=>{if(e.h===t.h){if(e.h==="slot"){return e.u===t.u}return true}return false};const _=e=>e&&e["s-ol"]||e;const z=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;const B=(e,t)=>{const n=t.m=e.m;const s=e.i;const l=t.i;const o=t.h;const i=t.l;let f;if(i===null){{c=o==="svg"?true:o==="foreignObject"?false:c}{if(o==="slot");else{q(e,t,c)}}if(s!==null&&l!==null){I(n,s,t,l)}else if(l!==null){if(e.l!==null){n.textContent=""}F(n,null,t,l,0,l.length-1)}else if(s!==null){H(s,0,s.length-1)}if(c&&o==="svg"){c=false}}else if(f=n["s-cr"]){f.parentNode.textContent=i}else if(e.l!==i){n.data=i}};const G=e=>{const t=e.childNodes;let n;let s;let l;let o;let i;let c;for(s=0,l=t.length;s<l;s++){n=t[s];if(n.nodeType===1){if(n["s-sr"]){i=n["s-sn"];n.hidden=false;for(o=0;o<l;o++){c=t[o].nodeType;if(t[o]["s-hn"]!==n["s-hn"]||i!==""){if(c===1&&i===t[o].getAttribute("slot")){n.hidden=true;break}}else{if(c===1||c===3&&t[o].textContent.trim()!==""){n.hidden=true;break}}}}G(n)}}};const J=[];const K=e=>{let t;let n;let s;let l;let i;let c;let f=0;const r=e.childNodes;const u=r.length;for(;f<u;f++){t=r[f];if(t["s-sr"]&&(n=t["s-cr"])&&n.parentNode){s=n.parentNode.childNodes;l=t["s-sn"];for(c=s.length-1;c>=0;c--){n=s[c];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==t["s-hn"]){if(Q(n,l)){i=J.find((e=>e.k===n));o=true;n["s-sn"]=n["s-sn"]||l;if(i){i.j=t}else{J.push({j:t,k:n})}if(n["s-sr"]){J.map((e=>{if(Q(e.k,n["s-sn"])){i=J.find((e=>e.k===n));if(i&&!e.j){e.j=i.j}}}))}}else if(!J.some((e=>e.k===n))){J.push({k:n})}}}}if(t.nodeType===1){K(t)}}};const Q=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};const X=e=>{{e.o&&e.o.ref&&e.o.ref(null);e.i&&e.i.map(X)}};const Y=(e,c)=>{const f=e.$;const r=e.v;const u=e.C||S(null,null);const a=j(c)?c:v(null,null,c);s=f.tagName;if(r.O){a.o=a.o||{};r.O.map((([e,t])=>a.o[t]=f[e]))}a.h=null;a.p|=4;e.C=a;a.m=u.m=f.shadowRoot||f;{t=f["s-sc"]}{n=f["s-cr"];l=(r.p&1)!==0;o=false}B(u,a);{Le.p|=1;if(i){K(a.m);let e;let t;let n;let s;let l;let o;let i=0;for(;i<J.length;i++){e=J[i];t=e.k;if(!t["s-ol"]){n=Re.createTextNode("");n["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=n,t)}}for(i=0;i<J.length;i++){e=J[i];t=e.k;if(e.j){s=e.j.parentNode;l=e.j.nextSibling;n=t["s-ol"];while(n=n.previousSibling){o=n["s-nr"];if(o&&o["s-sn"]===t["s-sn"]&&s===o.parentNode){o=o.nextSibling;if(!o||!o["s-nr"]){l=o;break}}}if(!l&&s!==t.parentNode||t.nextSibling!==l){if(t!==l){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}s.insertBefore(t,l)}}}else{if(t.nodeType===1){t.hidden=true}}}}if(o){G(a.m)}Le.p&=~1;J.length=0}};const Z=(e,t)=>{if(t&&!e.M&&t["s-p"]){t["s-p"].push(new Promise((t=>e.M=t)))}};const ee=(e,t)=>{{e.p|=16}if(e.p&4){e.p|=512;return}Z(e,e.P);const n=()=>te(e,t);return Ie(n)};const te=(e,t)=>{const n=a("scheduleUpdate",e.v.S);const s=e.U;let l;if(t){{l=fe(s,"componentWillLoad")}}n();return ne(l,(()=>le(e,s,t)))};const ne=(e,t)=>se(e)?e.then(t):t();const se=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";const le=async(e,t,n)=>{var s;const l=e.$;const o=a("update",e.v.S);const i=l["s-rc"];if(n){L(e)}const c=a("render",e.v.S);{oe(e,t)}if(i){i.map((e=>e()));l["s-rc"]=undefined}c();o();{const t=(s=l["s-p"])!==null&&s!==void 0?s:[];const n=()=>ie(e);if(t.length===0){n()}else{Promise.all(t).then(n);e.p|=4;t.length=0}}};const oe=(e,t,n)=>{try{t=t.render();{e.p&=~16}{e.p|=2}{{{Y(e,t)}}}}catch(t){Oe(t,e.$)}return null};const ie=e=>{const t=e.v.S;const n=e.$;const s=a("postUpdate",t);const l=e.U;const o=e.P;if(!(e.p&64)){e.p|=64;{re(n)}{fe(l,"componentDidLoad")}s();{e.R(n);if(!o){ce()}}}else{{fe(l,"componentDidUpdate")}s()}{e.L(n)}{if(e.M){e.M();e.M=undefined}if(e.p&512){Fe((()=>ee(e,false)))}e.p&=~(4|512)}};const ce=t=>{{re(Re.documentElement)}Fe((()=>P(xe,"appload",{detail:{namespace:e}})))};const fe=(e,t,n)=>{if(e&&e[t]){try{return e[t](n)}catch(e){Oe(e)}}return undefined};const re=e=>e.classList.add("hydrated");const ue=(e,t)=>Se(e).T.get(t);const ae=(e,t,n,s)=>{const l=Se(e);const o=l.$;const i=l.T.get(t);const c=l.p;const f=l.U;n=C(n,s.N[t][0]);const r=Number.isNaN(i)&&Number.isNaN(n);const u=n!==i&&!r;if((!(c&8)||i===undefined)&&u){l.T.set(t,n);if(f){if(s.W&&c&128){const e=s.W[t];if(e){e.map((e=>{try{f[e](n,i,t)}catch(e){Oe(e,o)}}))}}if((c&(2|16))===2){ee(l,false)}}}};const de=(e,t,n)=>{if(t.N){if(e.watchers){t.W=e.watchers}const s=Object.entries(t.N);const l=e.prototype;s.map((([e,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(l,e,{get(){return ue(this,e)},set(n){ae(this,e,n,t)},configurable:true,enumerable:true})}else if(n&1&&s&64){Object.defineProperty(l,e,{value(...t){const n=Se(this);return n.q.then((()=>n.U[e](...t)))}})}}));if(n&1){const n=new Map;l.attributeChangedCallback=function(e,t,s){Le.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t)){s=this[t];delete this[t]}else if(l.hasOwnProperty(t)&&typeof this[t]==="number"&&this[t]==s){return}this[t]=s===null&&typeof this[t]==="boolean"?false:s}))};e.observedAttributes=s.filter((([e,t])=>t[0]&15)).map((([e,s])=>{const l=s[1]||e;n.set(l,e);if(s[0]&512){t.O.push([e,l])}return l}))}}return e};const pe=async(e,t,n,s,l)=>{if((t.p&32)===0){t.p|=32;{l=Pe(n);if(l.then){const e=d();l=await l;e()}if(!l.isProxied){{n.W=l.watchers}de(l,n,2);l.isProxied=true}const e=a("createInstance",n.S);{t.p|=8}try{new l(t)}catch(e){Oe(e)}{t.p&=~8}{t.p|=128}e();he(t.U)}if(l.style){let e=l.style;const t=T(n);if(!Ue.has(t)){const s=a("registerStyles",n.S);x(t,e,!!(n.p&1));s()}}}const o=t.P;const i=()=>ee(t,true);if(o&&o["s-rc"]){o["s-rc"].push(i)}else{i()}};const he=e=>{{fe(e,"connectedCallback")}};const we=e=>{if((Le.p&1)===0){const t=Se(e);const n=t.v;const s=a("connectedCallback",n.S);if(!(t.p&1)){t.p|=1;{if(n.p&(4|8)){me(e)}}{let n=e;while(n=n.parentNode||n.host){if(n["s-p"]){Z(t,t.P=n);break}}}if(n.N){Object.entries(n.N).map((([t,[n]])=>{if(n&31&&e.hasOwnProperty(t)){const n=e[t];delete e[t];e[t]=n}}))}{pe(e,t,n)}}else{he(t.U)}s()}};const me=e=>{const t=e["s-cr"]=Re.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};const $e=e=>{if((Le.p&1)===0){const t=Se(e);const n=t.U;{fe(n,"disconnectedCallback")}}};const be=(e,t={})=>{var n;const s=a();const l=[];const o=t.exclude||[];const i=xe.customElements;const c=Re.head;const f=c.querySelector("meta[charset]");const r=Re.createElement("style");const u=[];let d;let h=true;Object.assign(Le,t);Le.t=new URL(t.resourcesUrl||"./",Re.baseURI).href;e.map((e=>{e[1].map((t=>{const n={p:t[0],S:t[1],N:t[2],A:t[3]};{n.N=t[2]}{n.O=[]}{n.W={}}const s=n.S;const c=class extends HTMLElement{constructor(e){super(e);e=this;je(e,n);if(n.p&1){{{e.attachShadow({mode:"open"})}}}}connectedCallback(){if(d){clearTimeout(d);d=null}if(h){u.push(this)}else{Le.jmp((()=>we(this)))}}disconnectedCallback(){Le.jmp((()=>$e(this)))}componentOnReady(){return Se(this).D}};n.F=e[0];if(!o.includes(s)&&!i.get(s)){l.push(s);i.define(s,de(c,n,1))}}))}));{r.innerHTML=l+p;r.setAttribute("data-styles","");const e=(n=Le.g)!==null&&n!==void 0?n:g(Re);if(e!=null){r.setAttribute("nonce",e)}c.insertBefore(r,f?f.nextSibling:c.firstChild)}h=false;if(u.length){u.map((e=>e.connectedCallback()))}else{{Le.jmp((()=>d=setTimeout(ce,30)))}}s()};const ye=(e,t)=>{if(t in r){return r[t]}else if(t==="window"){return xe}else if(t==="document"){return Re}else if(t==="isServer"||t==="isPrerender"){return false}else if(t==="isClient"){return true}else if(t==="resourcesUrl"||t==="publicPath"){return u(".")}else if(t==="queue"){return{write:Ie,read:He,tick:{then(e){return Fe(e)}}}}return undefined};const ge=e=>Le.g=e;const ve=new WeakMap;const Se=e=>ve.get(e);const ke=(e,t)=>ve.set(t.U=e,t);const je=(e,t)=>{const n={p:0,$:e,v:t,T:new Map};{n.q=new Promise((e=>n.L=e))}{n.D=new Promise((e=>n.R=e));e["s-p"]=[];e["s-rc"]=[]}return ve.set(e,n)};const Ce=(e,t)=>t in e;const Oe=(e,t)=>(0,console.error)(e,t);const Me=new Map;const Pe=(e,t,n)=>{const s=e.S.replace(/-/g,"_");const l=e.F;const o=Me.get(l);if(o){return o[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((e=>{{Me.set(l,e)}return e[s]}),Oe)};const Ue=new Map;const xe=typeof window!=="undefined"?window:{};const Re=xe.document||{head:{}};const Le={p:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)};const Te=e=>Promise.resolve(e);const Ne=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();const Ee=[];const We=[];const qe=(e,t)=>n=>{e.push(n);if(!f){f=true;if(t&&Le.p&4){Fe(De)}else{Le.raf(De)}}};const Ae=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){Oe(e)}}e.length=0};const De=()=>{Ae(Ee);{Ae(We);if(f=Ee.length>0){Le.raf(De)}}};const Fe=e=>Te().then(e);const He=qe(Ee,false);const Ie=qe(We,true);export{k as H,O as a,be as b,M as c,u as d,ye as g,v as h,Te as p,ke as r,ge as s};
//# sourceMappingURL=p-d5a6e412.js.map