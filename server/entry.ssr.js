import{j as d,d as ce,s as ue,e as fe,F as M,g as de,c as Z,i as K,u as pe,f as me,a as P,_ as y,h as he,k as C,R as ve,Q as be}from"./q-0RWg-HSl.js";const W={manifestHash:"2mji6x",core:"q-Co_8SHO8.js",preloader:"q-fFn9hMSC.js",qwikLoader:"q-pLIxelCT.js",bundleGraphAsset:"assets/C1DcQaUf-bundle-graph.json",injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/assets/2fczHu5i-style.css"}}],mapping:{s_Ysfvd0zsHZc:"q-4AFQOYpC.js",s_26Zk9LevwR4:"q-DSCLlBV1.js",s_35YlVmV10xA:"q-Bpyv4vFk.js",s_0vphQYqOdZI:"q-C0Vaf0Yd.js",s_1raneLGffO8:"q-Bpyv4vFk.js",s_2mDWcGg7sn0:"q-DxKlcja0.js",s_B0lqk5IDDy4:"q-D_zq4wie.js",s_GYKuz12OHhc:"q-CUJtaJ9n.js",s_MiPVFWJLcMo:"q-Cem1sOg_.js",s_ScE8eseirUA:"q-DJfm7Wtq.js",s_bmV0oH7tsks:"q-Co_8SHO8.js",s_p1yCGpFL1xE:"q-4AFQOYpC.js",s_pWsmcogutG8:"q-DvHmGk4v.js",s_tntnak2DhJ8:"q-Bxqw8Yng.js",s_tySZ00tiUmE:"q-DTJoH4iI.js",s_K4gvalEGCME:"q-4AFQOYpC.js",s_9KRx0IOCHt8:"q-istiA8xF.js",s_A5SCimyrjAE:"q-DaHQQIWv.js",s_N26RLdG0oBg:"q-CqVJi0jZ.js",s_WfTOxT4IrdA:"q-COjKEXua.js",s_FdQ8zERN4uM:"q-Bpyv4vFk.js",s_PmWjL2RrvZM:"q-Cem1sOg_.js",s_US0pTyQnOdc:"q-Co_8SHO8.js",s_aww2BzpANGM:"q-4AFQOYpC.js",s_qGVD1Sz413o:"q-4AFQOYpC.js",s_xe8duyQ5aaU:"q-DvHmGk4v.js",s_zPJUEsxZLIA:"q-Bpyv4vFk.js",s_zpHcJzYZ88E:"q-DvHmGk4v.js"}};/**
 * @license
 * @builder.io/qwik/server 1.16.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var ye=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ge="<sync>";function _e(e,n){const t=n?.mapper,r=e.symbolMapper?e.symbolMapper:(s,i,a)=>{if(t){const l=j(s),c=t[l];if(!c){if(l===ge)return[l,""];if(globalThis.__qwik_reg_symbols?.has(l))return[s,"_"];if(a)return[s,`${a}?qrl=${s}`];console.error("Cannot resolve symbol",s,"in",t,a)}return c}};return{isServer:!0,async importSymbol(s,i,a){const l=j(a),c=globalThis.__qwik_reg_symbols?.get(l);if(c)return c;let u=String(i);u.endsWith(".js")||(u+=".js");const p=ye(u);if(!(a in p))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${u}'.`);return p[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(i=>{setTimeout(()=>{i(s())})}),chunkForSymbol(s,i,a){return r(s,t,a)}}}async function qe(e,n){const t=_e(e,n);ue(t)}var j=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e},we="q:instance",A={$DEBUG$:!1,$invPreloadProbability$:.65},$e=Date.now(),Se=/\.[mc]?js$/,X=0,Pe=1,Ee=2,ke=3,R,B,Ce=(e,n)=>({$name$:e,$state$:Se.test(e)?X:ke,$deps$:te?n?.map(t=>({...t,$factor$:1})):n,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),je=e=>{const n=new Map;let t=0;for(;t<e.length;){const r=e[t++],o=[];let s,i=1;for(;s=e[t],typeof s=="number";)s<0?i=-s/10:o.push({$name$:e[s],$importProbability$:i,$factor$:1}),t++;n.set(r,o)}return n},ee=e=>{let n=F.get(e);if(!n){let t;if(B){if(t=B.get(e),!t)return;t.length||(t=void 0)}n=Ce(e,t),F.set(e,n)}return n},Ae=(e,n)=>{n&&("debug"in n&&(A.$DEBUG$=!!n.debug),typeof n.preloadProbability=="number"&&(A.$invPreloadProbability$=1-n.preloadProbability)),!(R!=null||!e)&&(R="",B=je(e))},F=new Map,te,x,ne=0,E=[],xe=(...e)=>{console.log(`Preloader ${Date.now()-$e}ms ${ne}/${E.length} queued>`,...e)},Oe=()=>{F.clear(),x=!1,te=!0,ne=0,E.length=0},Ie=()=>{x&&(E.sort((e,n)=>e.$inverseProbability$-n.$inverseProbability$),x=!1)},Le=()=>{Ie();let e=.4;const n=[];for(const t of E){const r=Math.round((1-t.$inverseProbability$)*10);r!==e&&(e=r,n.push(e)),n.push(t.$name$)}return n},re=(e,n,t)=>{if(t?.has(e))return;const r=e.$inverseProbability$;if(e.$inverseProbability$=n,!(r-e.$inverseProbability$<.01)&&(R!=null&&e.$state$<Ee&&e.$inverseProbability$<A.$invPreloadProbability$&&(e.$state$===X&&(e.$state$=Pe,E.push(e),A.$DEBUG$&&xe(`queued ${Math.round((1-e.$inverseProbability$)*100)}%`,e.$name$)),x=!0),e.$deps$)){t||(t=new Set),t.add(e);const o=1-e.$inverseProbability$;for(const s of e.$deps$){const i=ee(s.$name$);if(i.$inverseProbability$===0)continue;let a;if(s.$importProbability$>.5&&(o===1||o>=.99&&Q<100))Q++,a=Math.min(.01,1-s.$importProbability$);else{const l=1-s.$importProbability$*o,c=s.$factor$,u=l/c;a=Math.max(.02,i.$inverseProbability$*u),s.$factor$=u}re(i,a,t)}}},V=(e,n)=>{const t=ee(e);t&&t.$inverseProbability$>n&&re(t,n)},Q,Ne=(e,n)=>{if(!e?.length)return;Q=0;let t=n?1-n:.4;if(Array.isArray(e))for(let r=e.length-1;r>=0;r--){const o=e[r];typeof o=="number"?t=1-o/10:V(o,t)}else V(e,t)};function De(e){const n=[],t=r=>{if(r)for(const o of r)n.includes(o.url)||(n.push(o.url),o.imports&&t(o.imports))};return t(e),n}var Te=e=>{const n=de();return e?.qrls?.map(t=>{const r=t.$refSymbol$||t.$symbol$,o=t.$chunk$,s=n.chunkForSymbol(r,o,t.dev?.file);return s?s[1]:o}).filter(Boolean)};function Re(e,n,t){const r=n.prefetchStrategy;if(r===null)return[];if(!t?.manifest.bundleGraph)return Te(e);if(typeof r?.symbolsToPrefetch=="function")try{const s=r.symbolsToPrefetch({manifest:t.manifest});return De(s)}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}const o=new Set;for(const s of e?.qrls||[]){const i=j(s.$refSymbol$||s.$symbol$);i&&i.length>=10&&o.add(i)}return[...o]}var Be=(e,n)=>{if(!n?.manifest.bundleGraph)return[...new Set(e)];Oe();let t=.99;for(const r of e.slice(0,15))Ne(r,t),t*=.85;return Le()},H=(e,n)=>{if(n==null)return null;const t=`${e}${n}`.split("/"),r=[];for(const o of t)o===".."&&r.length>0?r.pop():r.push(o);return r.join("/")},Fe=(e,n,t,r,o)=>{const s=H(e,n?.manifest?.preloader),i="/"+n?.manifest.bundleGraphAsset;if(s&&i&&t!==!1){const l=typeof t=="object"?{debug:t.debug,preloadProbability:t.ssrPreloadProbability}:void 0;Ae(n?.manifest.bundleGraph,l);const c=[];t?.debug&&c.push("d:1"),t?.maxIdlePreloads&&c.push(`P:${t.maxIdlePreloads}`),t?.preloadProbability&&c.push(`Q:${t.preloadProbability}`);const u=c.length?`,{${c.join(",")}}`:"",p=`let b=fetch("${i}");import("${s}").then(({l})=>l(${JSON.stringify(e)},b${u}));`;r.push(d("link",{rel:"modulepreload",href:s,nonce:o}),d("link",{rel:"preload",href:i,as:"fetch",crossorigin:"anonymous",nonce:o}),d("script",{type:"module",async:!0,dangerouslySetInnerHTML:p,nonce:o}))}const a=H(e,n?.manifest.core);a&&r.push(d("link",{rel:"modulepreload",href:a,nonce:o}))},Qe=(e,n,t,r,o)=>{if(r.length===0||t===!1)return null;const{ssrPreloads:s,ssrPreloadProbability:i}=Me(typeof t=="boolean"?void 0:t);let a=s;const l=[],c=[],u=n?.manifest.manifestHash;if(a){const g=n?.manifest.preloader,m=n?.manifest.core,v=Be(r,n);let S=4;const k=i*10;for(const b of v)if(typeof b=="string"){if(S<k)break;if(b===g||b===m)continue;if(c.push(b),--a===0)break}else S=b}const p=H(e,u&&n?.manifest.preloader);let $=c.length?`${JSON.stringify(c)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(e)}+l;document.head.appendChild(e)});`:"";return p&&($+=`window.addEventListener('load',f=>{f=_=>import("${p}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),$&&l.push(d("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:$,nonce:o})),l.length>0?d(M,{children:l}):null},He=(e,n,t,r,o)=>{if(t.preloader!==!1){const s=Re(n,t,r);if(s.length>0){const i=Qe(e,r,t.preloader,s,t.serverData?.nonce);i&&o.push(i)}}};function Me(e){return{...Ue,...e}}var Ue={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},Ge='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach(n=>e.push(...s(n,t))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach(t=>{const e=t.shadowRoot;e&&i(e)})},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach(o=>{u(o,t,e,n)})},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),u=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter(t=>t[0]===s);if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],()=>e.isConnected)(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),u=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:u,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{b("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){b("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){b("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},b=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=u(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{var s;const c=t.readyState;if(!r&&("interactive"==c||"complete"==c)&&(o.forEach(i),r=1,b("qinit"),(null!=(s=e.requestIdleCallback)?s:e.setTimeout).bind(e)(()=>b("qidle")),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),u(n.target,"",p("qvisible",n)))});t.forEach(t=>e.observe(t))}},y=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})},w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach(t=>y(t,r,q,!0)),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach(t=>y(r,t,q,!0)),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?w(...r):w("click","input")),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}',Je=`const doc = document;
const win = window;
const events = /* @__PURE__ */ new Set();
const roots = /* @__PURE__ */ new Set([doc]);
let hasInitialized;
const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
const querySelectorAll = (query) => {
  const elements = [];
  roots.forEach((root) => elements.push(...nativeQuerySelectorAll(root, query)));
  return elements;
};
const findShadowRoots = (fragment) => {
  processEventOrNode(fragment);
  nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent) => {
    const shadowRoot = parent.shadowRoot;
    shadowRoot && findShadowRoots(shadowRoot);
  });
};
const isPromise = (promise) => promise && typeof promise.then === "function";
const broadcast = (infix, ev, type = ev.type) => {
  querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el) => {
    dispatch(el, infix, ev, type);
  });
};
const resolveContainer = (containerEl) => {
  if (containerEl._qwikjson_ === void 0) {
    const parentJSON = containerEl === doc.documentElement ? doc.body : containerEl;
    let script = parentJSON.lastElementChild;
    while (script) {
      if (script.tagName === "SCRIPT" && script.getAttribute("type") === "qwik/json") {
        containerEl._qwikjson_ = JSON.parse(
          script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1")
        );
        break;
      }
      script = script.previousElementSibling;
    }
  }
};
const createEvent = (eventName, detail) => new CustomEvent(eventName, {
  detail
});
const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
  const attrName = "on" + onPrefix + ":" + eventName;
  if (element.hasAttribute("preventdefault:" + eventName)) {
    ev.preventDefault();
  }
  if (element.hasAttribute("stoppropagation:" + eventName)) {
    ev.stopPropagation();
  }
  const ctx = element._qc_;
  const relevantListeners = ctx && ctx.li.filter((li) => li[0] === attrName);
  if (relevantListeners && relevantListeners.length > 0) {
    for (const listener of relevantListeners) {
      const results = listener[1].getFn([element, ev], () => element.isConnected)(ev, element);
      const cancelBubble = ev.cancelBubble;
      if (isPromise(results)) {
        await results;
      }
      if (cancelBubble) {
        ev.stopPropagation();
      }
    }
    return;
  }
  const attrValue = element.getAttribute(attrName);
  if (attrValue) {
    const container = element.closest("[q\\\\:container]");
    const qBase = container.getAttribute("q:base");
    const qVersion = container.getAttribute("q:version") || "unknown";
    const qManifest = container.getAttribute("q:manifest-hash") || "dev";
    const base = new URL(qBase, doc.baseURI);
    for (const qrl of attrValue.split("\\n")) {
      const url = new URL(qrl, base);
      const href = url.href;
      const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
      const reqTime = performance.now();
      let handler;
      let importError;
      let error;
      const isSync = qrl.startsWith("#");
      const eventData = {
        qBase,
        qManifest,
        qVersion,
        href,
        symbol,
        element,
        reqTime
      };
      if (isSync) {
        const hash = container.getAttribute("q:instance");
        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
        if (!handler) {
          importError = "sync";
          error = new Error("sym:" + symbol);
        }
      } else {
        emitEvent("qsymbol", eventData);
        const uri = url.href.split("#")[0];
        try {
          const module = import(
                        uri
          );
          resolveContainer(container);
          handler = (await module)[symbol];
          if (!handler) {
            importError = "no-symbol";
            error = new Error(\`\${symbol} not in \${uri}\`);
          }
        } catch (err) {
          importError || (importError = "async");
          error = err;
        }
      }
      if (!handler) {
        emitEvent("qerror", {
          importError,
          error,
          ...eventData
        });
        console.error(error);
        break;
      }
      const previousCtx = doc.__q_context__;
      if (element.isConnected) {
        try {
          doc.__q_context__ = [element, ev, url];
          const results = handler(ev, element);
          if (isPromise(results)) {
            await results;
          }
        } catch (error2) {
          emitEvent("qerror", { error: error2, ...eventData });
        } finally {
          doc.__q_context__ = previousCtx;
        }
      }
    }
  }
};
const emitEvent = (eventName, detail) => {
  doc.dispatchEvent(createEvent(eventName, detail));
};
const camelToKebab = (str) => str.replace(/([A-Z])/g, (a) => "-" + a.toLowerCase());
const processDocumentEvent = async (ev) => {
  let type = camelToKebab(ev.type);
  let element = ev.target;
  broadcast("-document", ev, type);
  while (element && element.getAttribute) {
    const results = dispatch(element, "", ev, type);
    let cancelBubble = ev.cancelBubble;
    if (isPromise(results)) {
      await results;
    }
    cancelBubble || (cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type));
    element = ev.bubbles && cancelBubble !== true ? element.parentElement : null;
  }
};
const processWindowEvent = (ev) => {
  broadcast("-window", ev, camelToKebab(ev.type));
};
const processReadyStateChange = () => {
  var _a;
  const readyState = doc.readyState;
  if (!hasInitialized && (readyState == "interactive" || readyState == "complete")) {
    roots.forEach(findShadowRoots);
    hasInitialized = 1;
    emitEvent("qinit");
    const riC = (_a = win.requestIdleCallback) != null ? _a : win.setTimeout;
    riC.bind(win)(() => emitEvent("qidle"));
    if (events.has("qvisible")) {
      const results = querySelectorAll("[on\\\\:qvisible]");
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            dispatch(entry.target, "", createEvent("qvisible", entry));
          }
        }
      });
      results.forEach((el) => observer.observe(el));
    }
  }
};
const addEventListener = (el, eventName, handler, capture = false) => {
  el.addEventListener(eventName, handler, { capture, passive: false });
};
const processEventOrNode = (...eventNames) => {
  for (const eventNameOrNode of eventNames) {
    if (typeof eventNameOrNode === "string") {
      if (!events.has(eventNameOrNode)) {
        roots.forEach(
          (root) => addEventListener(root, eventNameOrNode, processDocumentEvent, true)
        );
        addEventListener(win, eventNameOrNode, processWindowEvent, true);
        events.add(eventNameOrNode);
      }
    } else {
      if (!roots.has(eventNameOrNode)) {
        events.forEach(
          (eventName) => addEventListener(eventNameOrNode, eventName, processDocumentEvent, true)
        );
        roots.add(eventNameOrNode);
      }
    }
  }
};
if (!("__q_context__" in doc)) {
  doc.__q_context__ = 0;
  const qwikevents = win.qwikevents;
  if (qwikevents) {
    if (Array.isArray(qwikevents)) {
      processEventOrNode(...qwikevents);
    } else {
      processEventOrNode("click", "input");
    }
  }
  win.qwikevents = {
    events,
    roots,
    push: processEventOrNode
  };
  addEventListener(doc, "readystatechange", processReadyStateChange);
  processReadyStateChange();
}`;function ze(e={}){return e.debug?Je:Ge}function T(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function Ye(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var We="<!DOCTYPE html>";async function Ve(e,n){let t=n.stream,r=0,o=0,s=0,i=0,a="",l;const c=n.streaming?.inOrder??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=n.containerTagName??"html",p=n.containerAttributes??{},O=t,$=T(),g=Ye(n),m=Ke(n.manifest),v=n.serverData?.nonce;function S(){a&&(O.write(a),a="",r=0,s++,s===1&&(i=$()))}function k(f){const h=f.length;r+=h,o+=h,a+=f}switch(c.strategy){case"disabled":t={write:k};break;case"direct":t=O;break;case"auto":let f=0,h=!1;const z=c.maximunChunk??0,D=c.maximunInitialChunk??0;t={write(w){w==="<!--qkssr-f-->"?h||(h=!0):w==="<!--qkssr-pu-->"?f++:w==="<!--qkssr-po-->"?f--:k(w),f===0&&(h||r>=(s===0?D:z))&&(h=!1,S())}};break}u==="html"?t.write(We):t.write("<!--cq-->"),m||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await qe(n,m);const b=m?.manifest.injections,I=b?b.map(f=>d(f.tag,f.attributes??{})):[],L=n.qwikLoader?.include??"auto",N=m?.manifest.qwikLoader;let U=!1;L!=="never"&&N&&(I.unshift(d("link",{rel:"modulepreload",href:`${g}${N}`,nonce:v}),d("script",{type:"module",async:!0,src:`${g}${N}`,nonce:v})),U=!0),Fe(g,m,n.preloader,I,v);const se=T(),oe=[];let G=0,J=0;await ce(e,{stream:t,containerTagName:u,containerAttributes:p,serverData:n.serverData,base:g,beforeContent:I,beforeClose:async(f,h,z,D)=>{G=se();const w=T();l=await fe(f,h,void 0,D);const _=[];He(g,l,n,m,_);const ae=JSON.stringify(l.state,void 0,void 0);if(_.push(d("script",{type:"qwik/json",dangerouslySetInnerHTML:Xe(ae),nonce:v})),l.funcs.length>0){const q=p[we];_.push(d("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:nt(q,l.funcs),nonce:v}))}const le=!l||l.mode!=="static";if(!U&&(L==="always"||L==="auto"&&le)){const q=ze({debug:n.debug});_.push(d("script",{id:"qwikloader",async:!0,type:"module",dangerouslySetInnerHTML:q,nonce:v}))}const Y=Array.from(h.$events$,q=>JSON.stringify(q));if(Y.length>0){const q=`(window.qwikevents||(window.qwikevents=[])).push(${Y.join(",")})`;_.push(d("script",{dangerouslySetInnerHTML:q,nonce:v}))}return et(oe,f),J=w(),d(M,{children:_})},manifestHash:m?.manifest.manifestHash||"dev"+Ze()}),u!=="html"&&t.write("<!--/cq-->"),S();const ie=l.resources.some(f=>f._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:s,manifest:m?.manifest,size:o,isStatic:!ie,timing:{render:G,snapshot:J,firstFlush:i}}}function Ze(){return Math.random().toString(36).slice(2)}function Ke(e){const n=e?{...W,...e}:W;if(!n||"mapper"in n)return n;if(n.mapping){const t={};return Object.entries(n.mapping).forEach(([r,o])=>{t[j(r)]=[r,o]}),{mapper:t,manifest:n,injections:n.injections||[]}}}var Xe=e=>e.replace(/<(\/?script)/gi,"\\x3C$1");function et(e,n){for(const t of n){const r=t.$componentQrl$?.getSymbol();r&&!e.includes(r)&&e.push(r)}}var tt='document["qFuncs_HASH"]=';function nt(e,n){return tt.replace("HASH",e)+`[${n.join(`,
`)}]`}const rt=()=>{const e=pe(),n=me();return P(M,{children:[y("title",null,null,e.title,1,null),y("link",null,{rel:"canonical",href:he(t=>t.url.href,[n],"p0.url.href")},null,3,null),y("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),y("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),e.meta.map(t=>C("meta",{...t},null,0,t.key)),e.links.map(t=>C("link",{...t},null,0,t.key)),e.styles.map(t=>C("style",{...t.props,...t.props?.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:t.style}},null,0,t.key)),e.scripts.map(t=>C("script",{...t.props,...t.props?.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:t.script}},null,0,t.key))]},1,"0D_0")},st=Z(K(rt,"s_0vphQYqOdZI")),ot=()=>P(be,{children:[y("head",null,null,[y("meta",null,{charset:"utf-8"},null,3,null),y("link",null,{rel:"manifest",href:"/manifest.json"},null,3,"vp_0"),P(st,null,3,"vp_1")],1,null),y("body",null,{lang:"en"},P(ve,null,3,"vp_2"),1,null)]},1,"vp_3"),it=Z(K(ot,"s_tntnak2DhJ8"));function ut(e){return Ve(P(it,null,3,"Qb_0"),{...e,containerAttributes:{lang:"en-us",...e.containerAttributes},serverData:{...e.serverData}})}export{ut as default};
