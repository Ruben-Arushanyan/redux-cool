!function(e){self.webpackChunk=function(t,n){for(var a in n)e[a]=n[a];for(;t.length;)s[t.pop()]=1};var t={},s={0:1};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(e){var t=[];return t.push(Promise.resolve().then((function(){s[e]||importScripts(n.p+""+e+".sw.js")}))),Promise.all(t)},n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=19)}([function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));s(3);const n=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class a extends Error{constructor(e,t){super(n(e,t)),this.name=e,this.details=t}}},function(e,t,s){"use strict";try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));s(3);const n=null},function(e,t,s){"use strict";try{self["workbox:core:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));s(7);var n=s(10),a=s(9);s(6);class r{constructor(e,t,s=n.a){this.handler=Object(a.a)(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=Object(a.a)(e)}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));s(3);const n={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[n.prefix,e,n.suffix].filter((e=>e&&e.length>0)).join("-"),r={updateDetails:e=>{(e=>{for(const t of Object.keys(n))e(t)})((t=>{"string"==typeof e[t]&&(n[t]=e[t])}))},getGoogleAnalyticsName:e=>e||a(n.googleAnalytics),getPrecacheName:e=>e||a(n.precache),getPrefix:()=>n.prefix,getRuntimeName:e=>e||a(n.runtime),getSuffix:()=>n.suffix}},function(e,t,s){"use strict";try{self["workbox:routing:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";s(0),s(3)},function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));s(3);const n=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")},function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));s(7),s(6);const n=e=>e&&"object"==typeof e?e:{handle:e}},function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));s(6);const n="GET"},function(e,t,s){"use strict";try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var n=s(5),a=s(0),r=(s(2),s(8),s(17));s(11);class i{constructor(e={}){this.cacheName=n.a.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new r.a(this,{event:t,request:s,params:n}),i=this._getResponse(a,s,t);return[i,this._awaitComplete(i,a,s,t)]}async _getResponse(e,t,s){let n;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(n=await this._handle(t,e),!n||"error"===n.type)throw new a.a("no-response",{url:t.url})}catch(a){for(const r of e.iterateCallbacks("handlerDidError"))if(n=await r({error:a,event:s,request:t}),n)break;if(!n)throw a}for(const a of e.iterateCallbacks("handlerWillRespond"))n=await a({event:s,request:t,response:n});return n}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(e){r=e}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));s(2);var n=s(0),a=s(4),r=s(14),i=s(15);s(6);function c(e,t,s){let c;if("string"==typeof e){const n=new URL(e,location.href);0;const r=({url:e})=>e.href===n.href;c=new a.a(r,t,s)}else if(e instanceof RegExp)c=new r.a(e,t,s);else if("function"==typeof e)c=new a.a(e,t,s);else{if(!(e instanceof a.a))throw new n.a("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=e}return Object(i.a)().registerRoute(c),c}},function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));s(7),s(2);var n=s(4);s(6);class a extends n.a{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var n=s(16);s(6);let a;const r=()=>(a||(a=new n.a,a.addFetchListener(),a.addCacheListener()),a)},function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));s(7),s(8);var n=s(10),a=(s(2),s(9)),r=s(0);s(6);class i{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return void 0;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h){0;try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){n=e}}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,t=n.a){this._defaultHandlerMap.set(t,Object(a.a)(e))}setCatchHandler(e){this._catchHandler=Object(a.a)(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new r.a("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new r.a("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));s(7),s(3);function n(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class a{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}s(2);const r=new Set;var i=s(8),c=s(18),o=s(0);s(11);function h(e){return"string"==typeof e?new Request(e):e}class l{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new a,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=h(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){throw new o.a("plugin-error-request-will-fetch",{thrownError:e})}const a=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:a,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:n.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=h(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i={...a,cacheName:n};s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=h(e);await Object(c.a)(0);const a=await this.getCacheKey(s,"write");if(!t)throw new o.a("cache-put-with-no-response",{url:Object(i.a)(a.url)});const l=await this._ensureResponseSafeToCache(t);if(!l)return!1;const{cacheName:u,matchOptions:f}=this._strategy,d=await self.caches.open(u),p=this.hasCallback("cacheDidUpdate"),g=p?await async function(e,t,s,a){const r=n(t.url,s);if(t.url===r)return e.match(t,a);const i={...a,ignoreSearch:!0},c=await e.keys(t,i);for(const t of c)if(r===n(t.url,s))return e.match(t,a)}(d,a.clone(),["__WB_REVISION__"],f):null;try{await d.put(a,p?l.clone():l)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of r)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:u,oldResponse:g,newResponse:l.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=h(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a={...n,state:s};return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));s(3);function n(e){return new Promise((t=>setTimeout(t,e)))}},function(e,t,s){"use strict";s.r(t);s(7);var n=s(5),a=(s(2),s(0));s(3);function r(e,t){const s=t();return e.waitUntil(s),s}s(1);function i(e){if(!e)throw new a.a("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new a.a("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}class c{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class o{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let h;async function l(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new a.a("cross-origin-copy-response",{origin:s});const n=e.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=t?t(r):r,c=function(){if(void 0===h){const e=new Response("");if("body"in e)try{new Response(e.body),h=!0}catch(e){h=!1}h=!1}return h}()?n.body:await n.blob();return new Response(c,i)}s(8);var u=s(12);class f extends u.a{constructor(e={}){e.cacheName=n.a.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(f.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new a.a("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new a.a("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==f.copyRedirectedCacheableResponsesPlugin&&(n===f.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(f.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}f.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},f.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await l(e):e};class d{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new f({cacheName:n.a.getPrecacheName(e),plugins:[...t,new o({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=i(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new a.a("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new a.a("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return r(e,(async()=>{const t=new c;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:n,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return r(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new a.a("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params={cacheKey:t,...s.params},this.strategy.handle(s))}}s(13);var p=s(4);p.a;(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"5a95ad685b8c83dfc5f2c810f5be66c5","url":"1.sw.js"},{"revision":"378f0362f6ad6f18d2804c160099c79d","url":"404.html"},{"revision":"7bb107aeb21a50f4b748a6e67b5b0284","url":"assets/css/styles.272ff2af.css"},{"revision":"f6ba1a8a8268318665c30a30edaf3733","url":"assets/js/0812c7c1.7ab0a7bf.js"},{"revision":"445aea449c6a9552fcb4484a880e5cb5","url":"assets/js/1.6cb2e56e.js"},{"revision":"e38b9075e94785d3a8a391c2ae5390bc","url":"assets/js/16a4261c.14a9fdff.js"},{"revision":"ce25b10b2bac1e3cb0de87cb325dbff9","url":"assets/js/18.8c7b0694.js"},{"revision":"95b20f7e90c99591aafddfa05c60fb44","url":"assets/js/19.513a7db8.js"},{"revision":"b6e5a1eb2f8ed004e71f7e2737c8a121","url":"assets/js/20.17207de4.js"},{"revision":"9f96b948e1ea245a5473463b63f75868","url":"assets/js/21.c656909c.js"},{"revision":"281c38bba7efc9e9d64e71e5f30447f5","url":"assets/js/22.3e777901.js"},{"revision":"2324669aead9226fb184e9c117d4dae9","url":"assets/js/23.6d06ff62.js"},{"revision":"537eab16a1bce27beb5eed5bf646b339","url":"assets/js/33740c59.2d0aabe9.js"},{"revision":"17e1150dc0c57b4e4c4122b06460d61c","url":"assets/js/338edd27.528d2f21.js"},{"revision":"0a43de36b65e82d5dc8d88b8962a95aa","url":"assets/js/5a345ce2.055680eb.js"},{"revision":"17f45913f2b2ecc5532ea88113894912","url":"assets/js/5d6bd565.cf59940d.js"},{"revision":"e112e7ec9f9af59960b570cff1399b99","url":"assets/js/5e8c322a.3597ec6f.js"},{"revision":"f7d7aa10049d9466f423a3092bfad5ac","url":"assets/js/7d4685ea.6edd1b69.js"},{"revision":"f003c076dbff21907678b122f5e033f5","url":"assets/js/935f2afb.5ccbe25d.js"},{"revision":"3bf129b199f9d32f432bb5efeaece251","url":"assets/js/bd267388.05608285.js"},{"revision":"0a57e28e7c43898dbed7520d71f1ccde","url":"assets/js/c2728190.5dd1f78c.js"},{"revision":"09a8173197893aabf8b6084e70fb1cf9","url":"assets/js/c4f5d8e4.e29b18e4.js"},{"revision":"2b7c763ee0bf7ffe8294302c82c2400d","url":"assets/js/c62450f1.125e8cc6.js"},{"revision":"56c294ead17987664fad5cbaa718f832","url":"assets/js/f2fb6ef3.a20574c3.js"},{"revision":"2e8fb5f04891009af0b91ca644fe4c67","url":"assets/js/main.01c0c08f.js"},{"revision":"6b2787ce4ec4bf67527cd90133c5d2a8","url":"assets/js/runtime~main.9acc0714.js"},{"revision":"dee1d347f4027be1190f00d274f8565b","url":"assets/js/styles.9824828a.js"},{"revision":"64886fdab683c4b37bab8ed6473441ab","url":"docs/api/actionsCreator/index.html"},{"revision":"cb1c7b8caa795864c8c4b2a4502ab633","url":"docs/api/index.html"},{"revision":"7d33eef31780100188293f66d3178768","url":"docs/api/reducersCreator/index.html"},{"revision":"dbcd91685ce5a53550a3851d1cda7f8e","url":"docs/concepts/actions-creator/index.html"},{"revision":"b1009fb1d1f3addd5b2dcce01f57872a","url":"docs/concepts/global-and-local-actions/index.html"},{"revision":"53079a381ee5223c7050f80b337357a7","url":"docs/concepts/index.html"},{"revision":"e0cad2b9635786cac19078be7a3b955c","url":"docs/concepts/reducer-tree/index.html"},{"revision":"c7fea50f45fadcc307a15838ed7e9624","url":"docs/concepts/reducers-creator/index.html"},{"revision":"61953d63408d048e2b30405f941c3bb3","url":"docs/guide/index.html"},{"revision":"8efb4a046eba134e53e2782884345dde","url":"docs/guide/react-redux-cool/index.html"},{"revision":"ef8cb39fd7b9a6d446776d8c95ace40c","url":"docs/introduction/index.html"},{"revision":"349c4ad6ca34be121f1cd2306e7b6f20","url":"docs/introduction/problems/index.html"},{"revision":"6b84ccc69293d27738d78e65f6f2f3b1","url":"index.html"},{"revision":"3d61fe4325646fa82563e9477d86d647","url":"manifest.json"},{"revision":"069f50ee373342464fdbdf3534003f10","url":"assets/images/redux-diagram-18134b075570905b557dce840c1f43b9.png"},{"revision":"60fd71c712f2acd1ad18c8913879508c","url":"img/api.svg"},{"revision":"9c90a8fdc19c538e42b531bd2371caf7","url":"img/cover-logo.png"},{"revision":"9e4670f7b1afe2fa6547d067c602b45b","url":"img/fast.svg"},{"revision":"97f449b2f11705b09594d8a9b78abaee","url":"img/favicon.ico"},{"revision":"ba18a31a39ac747d0f1153ca349fffb5","url":"img/intuition.svg"},{"revision":"d6742cec442f695dc29661ce68ac5c33","url":"img/logo.png"},{"revision":"577db01b0b25f3a7f40a2784f300af25","url":"img/logos/logo-114x114.png"},{"revision":"6e9bd7c0a5605924e911ee083a620d2a","url":"img/logos/logo-1200x1200.png"},{"revision":"acf2d26fd6ed1163398c1f6d59b00d47","url":"img/logos/logo-120x120.png"},{"revision":"dd37cdd81b3c66886bf350285d1c05ee","url":"img/logos/logo-144x144.png"},{"revision":"efc5302ef3df75c71bb244028db3d03c","url":"img/logos/logo-152x152.png"},{"revision":"15f9b79a2b370c6414e337dafee6833a","url":"img/logos/logo-180x180.png"},{"revision":"d6742cec442f695dc29661ce68ac5c33","url":"img/logos/logo-400x400.png"},{"revision":"6a68ef4ed09adb2d7ae8c5aad15b4936","url":"img/logos/logo-72x72.png"},{"revision":"069f50ee373342464fdbdf3534003f10","url":"img/redux-diagram.png"}],n=new d({fallbackToNetwork:!0});e.offlineMode&&(n.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){{const t=await s.e(1).then(s.bind(null,20));"function"==typeof t.default?t.default(e):e.debug&&console.warn("[Docusaurus-PWA][SW]: swCustom should have a default export function")}}(e),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(n.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(n.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const s=t.request.url,a=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(s);for(let r=0;r<a.length;r+=1){const i=a[r],c=n.getCacheKeyForURL(i);if(c){const n=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:i,possibleURLs:a,cacheKey:c,cachedResponse:n}),t.respondWith(n);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()}]);