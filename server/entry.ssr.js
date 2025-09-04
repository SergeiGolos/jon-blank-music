import{j as v,a as Ce,s as Ie,b as Ae,F as J,g as Le,c as W,i as P,u as oe,d as ae,e as De,f as k,_ as $,h as Re,k as je,S as Ne,l as Oe,n as ve,m as B,o as Te,p as Y,q,r as Be,t as Qe,v as S,w as Me,x as ye,y as Ue,z as ce,A as Fe,B as Q}from"./q-BqKXNCsc.js";const ue={manifestHash:"t92peq",core:"q-MIgGOxM1.js",preloader:"q-DB3AdcZP.js",qwikLoader:"q-pLIxelCT.js",bundleGraphAsset:"assets/C4motDTI-bundle-graph.json",injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"./assets/Doyu4SMB-style.css"}}],mapping:{s_Ysfvd0zsHZc:"q-wFaAp2yw.js",s_26Zk9LevwR4:"q-DOyXdpeD.js",s_35YlVmV10xA:"q-bzA7ILph.js",s_0vphQYqOdZI:"q-BXmaSCr4.js",s_1raneLGffO8:"q-bzA7ILph.js",s_2mDWcGg7sn0:"q-DOPJeogg.js",s_B0lqk5IDDy4:"q-DhFQvNwQ.js",s_GYKuz12OHhc:"q-CF7N7K7U.js",s_MiPVFWJLcMo:"q-DBQjvWTn.js",s_ScE8eseirUA:"q-BsIKQe0H.js",s_bmV0oH7tsks:"q-MIgGOxM1.js",s_p1yCGpFL1xE:"q-wFaAp2yw.js",s_pWsmcogutG8:"q-B5DUqJ27.js",s_tntnak2DhJ8:"q-CzxS07l8.js",s_tySZ00tiUmE:"q-CflKuaSl.js",s_K4gvalEGCME:"q-wFaAp2yw.js",s_9KRx0IOCHt8:"q-istiA8xF.js",s_A5SCimyrjAE:"q-DlW2gPnL.js",s_N26RLdG0oBg:"q-Dby_xbl8.js",s_WfTOxT4IrdA:"q-JuQmo6W7.js",s_FdQ8zERN4uM:"q-bzA7ILph.js",s_PmWjL2RrvZM:"q-DBQjvWTn.js",s_US0pTyQnOdc:"q-MIgGOxM1.js",s_aww2BzpANGM:"q-wFaAp2yw.js",s_qGVD1Sz413o:"q-wFaAp2yw.js",s_xe8duyQ5aaU:"q-B5DUqJ27.js",s_zPJUEsxZLIA:"q-bzA7ILph.js",s_zpHcJzYZ88E:"q-B5DUqJ27.js"}};/**
 * @license
 * @builder.io/qwik/server 1.16.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var ze=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Ge="<sync>";function He(e,t){const n=t?.mapper,s=e.symbolMapper?e.symbolMapper:(o,i,a)=>{if(n){const l=F(o),c=n[l];if(!c){if(l===Ge)return[l,""];if(globalThis.__qwik_reg_symbols?.has(l))return[o,"_"];if(a)return[o,`${a}?qrl=${o}`];console.error("Cannot resolve symbol",o,"in",n,a)}return c}};return{isServer:!0,async importSymbol(o,i,a){const l=F(a),c=globalThis.__qwik_reg_symbols?.get(l);if(c)return c;let f=String(i);f.endsWith(".js")||(f+=".js");const u=ze(f);if(!(a in u))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${f}'.`);return u[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(i=>{setTimeout(()=>{i(o())})}),chunkForSymbol(o,i,a){return s(o,n,a)}}}async function Je(e,t){const n=He(e,t);Ie(n)}var F=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e},We="q:instance",z={$DEBUG$:!1,$invPreloadProbability$:.65},Ve=Date.now(),Ke=/\.[mc]?js$/,be=0,Ze=1,Ye=2,Xe=3,ee,te,et=(e,t)=>({$name$:e,$state$:Ke.test(e)?be:Xe,$deps$:_e?t?.map(n=>({...n,$factor$:1})):t,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),tt=e=>{const t=new Map;let n=0;for(;n<e.length;){const s=e[n++],r=[];let o,i=1;for(;o=e[n],typeof o=="number";)o<0?i=-o/10:r.push({$name$:e[o],$importProbability$:i,$factor$:1}),n++;t.set(s,r)}return t},ge=e=>{let t=ne.get(e);if(!t){let n;if(te){if(n=te.get(e),!n)return;n.length||(n=void 0)}t=et(e,n),ne.set(e,t)}return t},nt=(e,t)=>{t&&("debug"in t&&(z.$DEBUG$=!!t.debug),typeof t.preloadProbability=="number"&&(z.$invPreloadProbability$=1-t.preloadProbability)),!(ee!=null||!e)&&(ee="",te=tt(e))},ne=new Map,_e,G,we=0,j=[],rt=(...e)=>{console.log(`Preloader ${Date.now()-Ve}ms ${we}/${j.length} queued>`,...e)},st=()=>{ne.clear(),G=!1,_e=!0,we=0,j.length=0},ot=()=>{G&&(j.sort((e,t)=>e.$inverseProbability$-t.$inverseProbability$),G=!1)},at=()=>{ot();let e=.4;const t=[];for(const n of j){const s=Math.round((1-n.$inverseProbability$)*10);s!==e&&(e=s,t.push(e)),t.push(n.$name$)}return t},qe=(e,t,n)=>{if(n?.has(e))return;const s=e.$inverseProbability$;if(e.$inverseProbability$=t,!(s-e.$inverseProbability$<.01)&&(ee!=null&&e.$state$<Ye&&e.$inverseProbability$<z.$invPreloadProbability$&&(e.$state$===be&&(e.$state$=Ze,j.push(e),z.$DEBUG$&&rt(`queued ${Math.round((1-e.$inverseProbability$)*100)}%`,e.$name$)),G=!0),e.$deps$)){n||(n=new Set),n.add(e);const r=1-e.$inverseProbability$;for(const o of e.$deps$){const i=ge(o.$name$);if(i.$inverseProbability$===0)continue;let a;if(o.$importProbability$>.5&&(r===1||r>=.99&&re<100))re++,a=Math.min(.01,1-o.$importProbability$);else{const l=1-o.$importProbability$*r,c=o.$factor$,f=l/c;a=Math.max(.02,i.$inverseProbability$*f),o.$factor$=f}qe(i,a,n)}}},fe=(e,t)=>{const n=ge(e);n&&n.$inverseProbability$>t&&qe(n,t)},re,it=(e,t)=>{if(!e?.length)return;re=0;let n=t?1-t:.4;if(Array.isArray(e))for(let s=e.length-1;s>=0;s--){const r=e[s];typeof r=="number"?n=1-r/10:fe(r,n)}else fe(e,n)};function lt(e){const t=[],n=s=>{if(s)for(const r of s)t.includes(r.url)||(t.push(r.url),r.imports&&n(r.imports))};return n(e),t}var ct=e=>{const t=Le();return e?.qrls?.map(n=>{const s=n.$refSymbol$||n.$symbol$,r=n.$chunk$,o=t.chunkForSymbol(s,r,n.dev?.file);return o?o[1]:r}).filter(Boolean)};function ut(e,t,n){const s=t.prefetchStrategy;if(s===null)return[];if(!n?.manifest.bundleGraph)return ct(e);if(typeof s?.symbolsToPrefetch=="function")try{const o=s.symbolsToPrefetch({manifest:n.manifest});return lt(o)}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}const r=new Set;for(const o of e?.qrls||[]){const i=F(o.$refSymbol$||o.$symbol$);i&&i.length>=10&&r.add(i)}return[...r]}var ft=(e,t)=>{if(!t?.manifest.bundleGraph)return[...new Set(e)];st();let n=.99;for(const s of e.slice(0,15))it(s,n),n*=.85;return at()},se=(e,t)=>{if(t==null)return null;const n=`${e}${t}`.split("/"),s=[];for(const r of n)r===".."&&s.length>0?s.pop():s.push(r);return s.join("/")},dt=(e,t,n,s,r)=>{const o=se(e,t?.manifest?.preloader),i="/"+t?.manifest.bundleGraphAsset;if(o&&i&&n!==!1){const l=typeof n=="object"?{debug:n.debug,preloadProbability:n.ssrPreloadProbability}:void 0;nt(t?.manifest.bundleGraph,l);const c=[];n?.debug&&c.push("d:1"),n?.maxIdlePreloads&&c.push(`P:${n.maxIdlePreloads}`),n?.preloadProbability&&c.push(`Q:${n.preloadProbability}`);const f=c.length?`,{${c.join(",")}}`:"",u=`let b=fetch("${i}");import("${o}").then(({l})=>l(${JSON.stringify(e)},b${f}));`;s.push(v("link",{rel:"modulepreload",href:o,nonce:r}),v("link",{rel:"preload",href:i,as:"fetch",crossorigin:"anonymous",nonce:r}),v("script",{type:"module",async:!0,dangerouslySetInnerHTML:u,nonce:r}))}const a=se(e,t?.manifest.core);a&&s.push(v("link",{rel:"modulepreload",href:a,nonce:r}))},pt=(e,t,n,s,r)=>{if(s.length===0||n===!1)return null;const{ssrPreloads:o,ssrPreloadProbability:i}=ht(typeof n=="boolean"?void 0:n);let a=o;const l=[],c=[],f=t?.manifest.manifestHash;if(a){const d=t?.manifest.preloader,p=t?.manifest.core,g=ft(s,t);let w=4;const L=i*10;for(const m of g)if(typeof m=="string"){if(w<L)break;if(m===d||m===p)continue;if(c.push(m),--a===0)break}else w=m}const u=se(e,f&&t?.manifest.preloader);let b=c.length?`${JSON.stringify(c)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(e)}+l;document.head.appendChild(e)});`:"";return u&&(b+=`window.addEventListener('load',f=>{f=_=>import("${u}").then(({p})=>p(${JSON.stringify(s)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),b&&l.push(v("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:b,nonce:r})),l.length>0?v(J,{children:l}):null},mt=(e,t,n,s,r)=>{if(n.preloader!==!1){const o=ut(t,n,s);if(o.length>0){const i=pt(e,s,n.preloader,o,n.serverData?.nonce);i&&r.push(i)}}};function ht(e){return{...vt,...e}}var vt={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},yt='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach(n=>e.push(...s(n,t))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach(t=>{const e=t.shadowRoot;e&&i(e)})},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach(o=>{u(o,t,e,n)})},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),u=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter(t=>t[0]===s);if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],()=>e.isConnected)(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),u=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:u,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{b("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){b("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){b("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},b=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=u(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{var s;const c=t.readyState;if(!r&&("interactive"==c||"complete"==c)&&(o.forEach(i),r=1,b("qinit"),(null!=(s=e.requestIdleCallback)?s:e.setTimeout).bind(e)(()=>b("qidle")),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),u(n.target,"",p("qvisible",n)))});t.forEach(t=>e.observe(t))}},y=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})},w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach(t=>y(t,r,q,!0)),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach(t=>y(r,t,q,!0)),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?w(...r):w("click","input")),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}',bt=`const doc = document;
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
}`;function gt(e={}){return e.debug?bt:yt}function X(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function _t(e){let t=e.base;return typeof e.base=="function"&&(t=e.base(e)),typeof t=="string"?(t.endsWith("/")||(t+="/"),t):"/build/"}var wt="<!DOCTYPE html>";async function qt(e,t){let n=t.stream,s=0,r=0,o=0,i=0,a="",l;const c=t.streaming?.inOrder??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},f=t.containerTagName??"html",u=t.containerAttributes??{},y=n,b=X(),d=_t(t),p=St(t.manifest),g=t.serverData?.nonce;function w(){a&&(y.write(a),a="",s=0,o++,o===1&&(i=b()))}function L(h){const _=h.length;s+=_,r+=_,a+=h}switch(c.strategy){case"disabled":n={write:L};break;case"direct":n=y;break;case"auto":let h=0,_=!1;const ie=c.maximunChunk??0,Z=c.maximunInitialChunk??0;n={write(R){R==="<!--qkssr-f-->"?_||(_=!0):R==="<!--qkssr-pu-->"?h++:R==="<!--qkssr-po-->"?h--:L(R),h===0&&(_||s>=(o===0?Z:ie))&&(_=!1,w())}};break}f==="html"?n.write(wt):n.write("<!--cq-->"),p||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Je(t,p);const m=p?.manifest.injections,D=m?m.map(h=>v(h.tag,h.attributes??{})):[],x=t.qwikLoader?.include??"auto",N=p?.manifest.qwikLoader;let O=!1;x!=="never"&&N&&(D.unshift(v("link",{rel:"modulepreload",href:`${d}${N}`,nonce:g}),v("script",{type:"module",async:!0,src:`${d}${N}`,nonce:g})),O=!0),dt(d,p,t.preloader,D,g);const V=X(),K=[];let C=0,T=0;await Ce(e,{stream:n,containerTagName:f,containerAttributes:u,serverData:t.serverData,base:d,beforeContent:D,beforeClose:async(h,_,ie,Z)=>{C=V();const R=X();l=await Ae(h,_,void 0,Z);const I=[];mt(d,l,t,p,I);const ke=JSON.stringify(l.state,void 0,void 0);if(I.push(v("script",{type:"qwik/json",dangerouslySetInnerHTML:Et(ke),nonce:g})),l.funcs.length>0){const A=u[We];I.push(v("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:xt(A,l.funcs),nonce:g}))}const xe=!l||l.mode!=="static";if(!O&&(x==="always"||x==="auto"&&xe)){const A=gt({debug:t.debug});I.push(v("script",{id:"qwikloader",async:!0,type:"module",dangerouslySetInnerHTML:A,nonce:g}))}const le=Array.from(_.$events$,A=>JSON.stringify(A));if(le.length>0){const A=`(window.qwikevents||(window.qwikevents=[])).push(${le.join(",")})`;I.push(v("script",{dangerouslySetInnerHTML:A,nonce:g}))}return Pt(K,h),T=R(),v(J,{children:I})},manifestHash:p?.manifest.manifestHash||"dev"+$t()}),f!=="html"&&n.write("<!--/cq-->"),w();const E=l.resources.some(h=>h._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:p?.manifest,size:r,isStatic:!E,timing:{render:C,snapshot:T,firstFlush:i}}}function $t(){return Math.random().toString(36).slice(2)}function St(e){const t=e?{...ue,...e}:ue;if(!t||"mapper"in t)return t;if(t.mapping){const n={};return Object.entries(t.mapping).forEach(([s,r])=>{n[F(s)]=[s,r]}),{mapper:n,manifest:t,injections:t.injections||[]}}}var Et=e=>e.replace(/<(\/?script)/gi,"\\x3C$1");function Pt(e,t){for(const n of t){const s=n.$componentQrl$?.getSymbol();s&&!e.includes(s)&&e.push(s)}}var kt='document["qFuncs_HASH"]=';function xt(e,t){return kt.replace("HASH",e)+`[${t.join(`,
`)}]`}const Ct=S("qc-s"),It=S("qc-c"),$e=S("qc-ic"),Se=S("qc-h"),Ee=S("qc-l"),At=S("qc-n"),Lt=S("qc-a"),Dt=S("qc-ir"),Rt=S("qc-p"),jt=je(Me("s_9KRx0IOCHt8")),Nt=()=>{if(!ae("containerAttributes"))throw new Error("PrefetchServiceWorker component must be rendered on the server.");De();const t=oe($e);if(t.value&&t.value.length>0){const n=t.value.length;let s=null;for(let r=n-1;r>=0;r--)t.value[r].default&&(s=k(t.value[r].default,{children:s},1,"ni_0"));return k(J,{children:[s,$("script",{"document:onQCInit$":jt,"document:onQInit$":Re(()=>{((r,o)=>{if(!r._qcs&&o.scrollRestoration==="manual"){r._qcs=!0;const i=o.state?._qCityScroll;i&&r.scrollTo(i.x,i.y),document.dispatchEvent(new Event("qcinit"))}})(window,history)},'()=>{((w,h)=>{if(!w._qcs&&h.scrollRestoration==="manual"){w._qcs=true;const s=h.state?._qCityScroll;if(s){w.scrollTo(s.x,s.y);}document.dispatchEvent(new Event("qcinit"));}})(window,history);}')},null,null,2,"ni_1")]},1,"ni_2")}return Ne},Ot=W(P(Nt,"s_ScE8eseirUA")),Tt=(e,t)=>new URL(e,t.href),de=(e,t)=>e.origin===t.origin,pe=e=>e.endsWith("/")?e:e+"/",Bt=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&pe(e)===pe(t)},Qt=(e,t)=>e.search===t.search,H=(e,t)=>Qt(e,t)&&Bt(e,t),Mt=e=>e&&typeof e.then=="function",Ut=(e,t,n,s)=>{const r=Pe(),i={head:r,withLocale:a=>ce(s,a),resolveValue:a=>{const l=a.__id;if(a.__brand==="server_loader"&&!(l in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const c=e.loaders[l];if(Mt(c))throw new Error("Loaders returning a promise can not be resolved for the head function.");return c},...t};for(let a=n.length-1;a>=0;a--){const l=n[a]&&n[a].head;l&&(typeof l=="function"?me(r,ce(s,()=>l(i))):typeof l=="object"&&me(r,l))}return i.head},me=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),M(e.meta,t.meta),M(e.links,t.links),M(e.styles,t.styles),M(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},M=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const s=e.findIndex(r=>r.key===n.key);if(s>-1){e[s]=n;continue}}e.push(n)}},Pe=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}}),Ft=()=>oe(Se),zt=()=>oe(Ee),Gt=()=>ve(ae("qwikcity")),he={},U={navCount:0},Ht=":root{view-transition-name:none}",Jt=e=>{},Wt=async(e,t)=>{const[n,s,r,o]=ye(),{type:i="link",forceReload:a=e===void 0,replaceState:l=!1,scroll:c=!0}=typeof t=="object"?t:{forceReload:t};U.navCount++;const f=r.value.dest,u=e===void 0?f:typeof e=="number"?e:Tt(e,o.url);if(he.$cbs$&&(a||typeof u=="number"||!H(u,f)||!de(u,f))){const y=U.navCount,b=await Promise.all([...he.$cbs$.values()].map(d=>d(u)));if(y!==U.navCount||b.some(Boolean)){y===U.navCount&&i==="popstate"&&history.pushState(null,"",f);return}}if(typeof u!="number"&&de(u,f)&&!(!a&&H(u,f)))return r.value={type:i,dest:u,forceReload:a,replaceState:l,scroll:c},n.value=void 0,o.isNavigating=!0,new Promise(y=>{s.r=y})},Vt=({track:e})=>{const[t,n,s,r,o,i,a,l,c,f,u]=ye();async function y(){const[d,p]=e(()=>[f.value,t.value]),g=Ue(""),w=u.url,L=p?"form":d.type;d.replaceState;let m,D,x=null;if(m=new URL(d.dest,u.url),x=o.loadedRoute,D=o.response,x){const[N,O,V,K]=x,C=V,T=C[C.length-1];d.dest.search&&H(m,w)&&(m.search=d.dest.search),H(m,w)||(u.prevUrl=w),u.url=m,u.params={...O},f.untrackedValue={type:L,dest:m};const E=Ut(D,u,C,g);n.headings=T.headings,n.menu=K,s.value=ve(C),r.links=E.links,r.meta=E.meta,r.styles=E.styles,r.scripts=E.scripts,r.title=E.title,r.frontmatter=E.frontmatter}}return y()},Kt=e=>{Oe(P(Ht,"s_K4gvalEGCME"));const t=Gt();if(!t?.params)throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const n=ae("url");if(!n)throw new Error("Missing Qwik URL Env Data");if(t.ev.originalUrl.pathname!==t.ev.url.pathname)throw new Error('enableRequestRewrite is an experimental feature and is not enabled. Please enable the feature flag by adding `experimental: ["enableRequestRewrite"]` to your qwikVite plugin options.');const s=new URL(n),r=B({url:s,params:t.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),o={},i=Te(B(t.response.loaders,{deep:!1})),a=Y({type:"initial",dest:s,forceReload:!1,replaceState:!1,scroll:!0}),l=B(Pe),c=B({headings:void 0,menu:void 0}),f=Y(),u=t.response.action,y=u?t.response.loaders[u]:void 0,b=Y(y?{id:u,data:t.response.formData,output:{result:y,status:t.response.status}}:void 0),d=P(Jt,"s_qGVD1Sz413o"),p=P(Wt,"s_aww2BzpANGM",[b,o,a,r]);return q(It,c),q($e,f),q(Se,l),q(Ee,r),q(At,p),q(Ct,i),q(Lt,b),q(Dt,a),q(Rt,d),Be(P(Vt,"s_Ysfvd0zsHZc",[b,c,f,l,t,p,i,o,e,a,r])),k(Qe,null,3,"ni_3")},Zt=W(P(Kt,"s_p1yCGpFL1xE")),Yt=()=>{const e=Ft(),t=zt();return k(J,{children:[$("title",null,null,e.title,1,null),$("link",null,{rel:"canonical",href:Fe(n=>n.url.href,[t],"p0.url.href")},null,3,null),$("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),$("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),e.meta.map(n=>Q("meta",{...n},null,0,n.key)),e.links.map(n=>Q("link",{...n},null,0,n.key)),e.styles.map(n=>Q("style",{...n.props,...n.props?.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.style}},null,0,n.key)),e.scripts.map(n=>Q("script",{...n.props,...n.props?.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.script}},null,0,n.key))]},1,"0D_0")},Xt=W(P(Yt,"s_0vphQYqOdZI")),en=()=>k(Zt,{children:[$("head",null,null,[$("meta",null,{charset:"utf-8"},null,3,null),$("link",null,{rel:"manifest",href:"/manifest.json"},null,3,"vp_0"),k(Xt,null,3,"vp_1")],1,null),$("body",null,{lang:"en"},k(Ot,null,3,"vp_2"),1,null)]},1,"vp_3"),tn=W(P(en,"s_tntnak2DhJ8"));function on(e){return qt(k(tn,null,3,"Qb_0"),{...e,containerAttributes:{lang:"en-us",...e.containerAttributes},serverData:{...e.serverData}})}export{on as default};
