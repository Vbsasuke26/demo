"use strict";(self.webpackChunkob_app=self.webpackChunkob_app||[]).push([[5164],{85164:(e,t,a)=>{a.r(t),a.d(t,{createSymbolSchema:()=>i});var r=a(78915),l=a(80613),n=a(54815);function s(e){var t;return"line-marker"===e.type?{type:"line-marker",color:null===(t=e.color)||void 0===t?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function o(e){return(0,n.hF)(e)}function i(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,a){const r=(0,n.jj)(l.LW.FILL,t),i=a?o(r):r,c=e.clone(),h=c.outline,m=(0,n.jy)(t.symbologyType);m||(c.outline=null);const u={materialKey:i,hash:c.hash(),...s(c)};if(m)return u;const y=[];if(y.push(u),h){const e=(0,n.jj)(l.LW.LINE,{...t,isOutline:!0}),r={materialKey:a?o(e):e,hash:h.hash(),...s(h)};y.push(r)}return{type:"composite-symbol",layers:y,hash:y.reduce(((e,t)=>t.hash+e),"")}}(e,t,a);case"simple-marker":case"picture-marker":return function(e,t,a){if("simple-marker"===e.type&&("path"===e.style||e.outline&&"solid"!==e.outline.style&&"none"!==e.outline.style))return i({type:"CIMSymbolReference",symbol:r.B$.fromSimpleMarker(e)},t,a);const c=(0,n.jj)(l.LW.MARKER,t),h=a?o(c):c,m=s(e);return{materialKey:h,hash:e.hash(),...m,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,a);case"simple-line":return function(e,t,a){const r=(0,n.jy)(t.symbologyType)?l.mD.DEFAULT:t.symbologyType,i=(0,n.jj)(l.LW.LINE,{...t,symbologyType:r}),c=a?o(i):i,h=e.clone(),m=h.marker;h.marker=null;const u=[];if(u.push({materialKey:c,hash:h.hash(),...s(h)}),m){var y;const e=(0,n.jj)(l.LW.MARKER,t),r=a?o(e):e;m.color=null!==(y=m.color)&&void 0!==y?y:h.color,u.push({materialKey:r,hash:m.hash(),lineWidth:h.width,...s(m)})}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,t)=>t.hash+e),"")}}(e,t,a);case"text":return function(e,t,a){const r=(0,n.jj)(l.LW.TEXT,t),i=a?o(r):r,c=s(e);return{materialKey:i,hash:e.hash(),...c,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,a);case"label":return function(e,t,a){const r=e.toJSON(),s=(0,n.jj)(l.LW.LABEL,{...t,placement:r.labelPlacement});return{materialKey:a?o(s):s,hash:e.hash(),...r,labelPlacement:r.labelPlacement}}(e,t,a);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...s(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error("symbol not supported ".concat(e.type))}}}}]);
//# sourceMappingURL=5164.16f73eeb.chunk.js.map