"use strict";(self.webpackChunkredux_cool_website=self.webpackChunkredux_cool_website||[]).push([[206],{206:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});t(524),t(120),t(188),t(80);t(989);var c=t(917);t(491),t(486);var a=t(125),n=t(951);t(119),t(873);const u={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};t(902);class r extends n._{constructor(e){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(u)}async _handle(e,s){const t=s.fetchAndCachePut(e).catch((()=>{}));let c,n=await s.cacheMatch(e);if(n)0;else{0;try{n=await t}catch(e){c=e}}if(!n)throw new a.V("no-response",{url:e.url,error:c});return n}}t(54);const o=e=>{e.debug&&console.log("[Docusaurus-PWA][SW]: running swCustom code",e),(0,c.X)((e=>[/graph\.facebook\.com\/.*\/picture/,/netlify\.com\/img/,/avatars1\.githubusercontent/].some((s=>e.url.href.match(s)))),new r)}}}]);