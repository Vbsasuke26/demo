"use strict";(self.webpackChunkob_app=self.webpackChunkob_app||[]).push([[9951],{71277:(e,t,l)=>{function n(e){return e=e||globalThis.location.hostname,m.some((t=>{var l;return null!=(null===(l=e)||void 0===l?void 0:l.match(t))}))}function a(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(i)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(r)||null!=t.match(s)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}l.d(t,{XO:()=>n,pJ:()=>a});const o=/^devext.arcgis.com$/,r=/^qaext.arcgis.com$/,i=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,m=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,r,/^jsapps.esri.com$/,i,s]},19951:(e,t,l)=>{l.d(t,{m:()=>y,resolveWebStyleSymbol:()=>d});var n=l(51508),a=l(71277),o=l(10064),r=l(35995),i=l(7575),s=l(53283),m=l(192),c=l(1472),u=l(38048),p=l(81854);function d(e,t,l,d){const b=e.name;return null==b?Promise.reject(new o.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,l){const n=u.wm.replaceAll(/\{SymbolName\}/gi,e),a=null!=t.portal?t.portal:i.Z.getDefault();return(0,u.EJ)(n,l).then((e=>{const t=(0,u.KV)(e.data);return(0,m.im)(t,{portal:a,url:(0,r.mN)((0,r.Yd)(n)),origin:"portal-item"})}))}(b,t,d):(0,u.n2)(e,t,d).then((e=>function(e,t,l,d,b,g){var f,h,v,w;const N=null!=(null===l||void 0===l?void 0:l.portal)?l.portal:i.Z.getDefault(),Z={portal:N,url:(0,r.mN)(e.baseUrl),origin:"portal-item"},$=y(t,e.data);if(!$){const e="The symbol name '".concat(t,"' could not be found");return Promise.reject(new o.Z("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let J=(0,s.f)(b($,d),Z),S=null!==(f=null===(h=$.thumbnail)||void 0===h?void 0:h.href)&&void 0!==f?f:null;const U=null===(v=$.thumbnail)||void 0===v?void 0:v.imageData;(0,a.XO)()&&(J=null!==(w=(0,a.pJ)(J))&&void 0!==w?w:"",S=(0,a.pJ)(S));const k={portal:N,url:(0,r.mN)((0,r.Yd)(J)),origin:"portal-item"};return(0,u.EJ)(J,g).then((a=>{const o="cimRef"===d?(0,u.KV)(a.data):a.data,r=(0,m.im)(o,k);if(r&&(0,n.dU)(r)){if(S){const e=(0,s.f)(S,Z);r.thumbnail=new p.p({url:e})}else U&&(r.thumbnail=new p.p({url:"data:image/png;base64,".concat(U)}));e.styleUrl?r.styleOrigin=new c.Z({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(r.styleOrigin=new c.Z({portal:l.portal,styleName:e.styleName,name:t}))}return r}))}(e,b,t,l,u.v9,d)))}function y(e,t){return t.items.find((t=>t.name===e))}}}]);
//# sourceMappingURL=9951.74ff304e.chunk.js.map