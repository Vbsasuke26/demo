"use strict";(self.webpackChunkob_app=self.webpackChunkob_app||[]).push([[3518],{79347:(e,t,n)=>{n.d(t,{e:()=>v});var r,i,s,a=n(84397),o={exports:{}};r=o,i=function(){function e(e,n,i){i=i||2;var s,a,o,u,l,c,h,x=n&&n.length,p=x?n[0]*i:e.length,y=t(e,0,p,i,!0),f=[];if(!y||y.next===y.prev)return f;if(x&&(y=v(e,n,y,i)),e.length>80*i){s=o=e[0],a=u=e[1];for(var S=i;S<p;S+=i)(l=e[S])<s&&(s=l),(c=e[S+1])<a&&(a=c),l>o&&(o=l),c>u&&(u=c);h=0!==(h=Math.max(o-s,u-a))?1/h:0}return r(y,f,i,s,a,h),f}function t(e,t,n,r,i){var s,a;if(i===E(e,t,n,r)>0)for(s=t;s<n;s+=r)a=z(s,e[s],e[s+1],a);else for(s=n-r;s>=t;s-=r)a=z(s,e[s],e[s+1],a);if(a&&d(a,a.next)){var o=a.next;M(a),a=o}return a}function n(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!d(r,r.next)&&0!==g(r.prev,r,r.next))r=r.next;else{var i=r.prev;if(M(r),(r=t=i)===r.next)break;n=!0}}while(n||r!==t);return t}function r(e,t,v,u,l,c,h){if(e){!h&&c&&x(e,u,l,c);for(var p,y,f=e;e.prev!==e.next;)if(p=e.prev,y=e.next,c?s(e,u,l,c):i(e))t.push(p.i/v),t.push(e.i/v),t.push(y.i/v),M(e),e=y.next,f=y.next;else if((e=y)===f){h?1===h?r(e=a(n(e),t,v),t,v,u,l,c,2):2===h&&o(e,t,v,u,l,c):r(n(e),t,v,u,l,c,1);break}}}function i(e){var t=e.prev,n=e,r=e.next;if(g(t,n,r)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(f(t.x,t.y,n.x,n.y,r.x,r.y,i.x,i.y)&&g(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function s(e,t,n,r){var i=e.prev,s=e,a=e.next;if(g(i,s,a)>=0)return!1;for(var o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,v=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,u=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,l=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,c=p(o,v,t,n,r),h=p(u,l,t,n,r),x=e.prevZ,y=e.nextZ;x&&x.z>=c&&y&&y.z<=h;){if(x!==e.prev&&x!==e.next&&f(i.x,i.y,s.x,s.y,a.x,a.y,x.x,x.y)&&g(x.prev,x,x.next)>=0)return!1;if(x=x.prevZ,y!==e.prev&&y!==e.next&&f(i.x,i.y,s.x,s.y,a.x,a.y,y.x,y.y)&&g(y.prev,y,y.next)>=0)return!1;y=y.nextZ}for(;x&&x.z>=c;){if(x!==e.prev&&x!==e.next&&f(i.x,i.y,s.x,s.y,a.x,a.y,x.x,x.y)&&g(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=h;){if(y!==e.prev&&y!==e.next&&f(i.x,i.y,s.x,s.y,a.x,a.y,y.x,y.y)&&g(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function a(e,t,r){var i=e;do{var s=i.prev,a=i.next.next;!d(s,a)&&m(s,i,i.next,a)&&b(s,a)&&b(a,s)&&(t.push(s.i/r),t.push(i.i/r),t.push(a.i/r),M(i),M(i.next),i=e=a),i=i.next}while(i!==e);return n(i)}function o(e,t,i,s,a,o){var v=e;do{for(var u=v.next.next;u!==v.prev;){if(v.i!==u.i&&S(v,u)){var l=T(v,u);return v=n(v,v.next),l=n(l,l.next),r(v,t,i,s,a,o),void r(l,t,i,s,a,o)}u=u.next}v=v.next}while(v!==e)}function v(e,r,i,s){var a,o,v,l=[];for(a=0,o=r.length;a<o;a++)(v=t(e,r[a]*s,a<o-1?r[a+1]*s:e.length,s,!1))===v.next&&(v.steiner=!0),l.push(y(v));for(l.sort(u),a=0;a<l.length;a++)i=n(i=c(l[a],i),i.next);return i}function u(e,t){return e.x-t.x}function l(e){if(e.next.prev===e)return e;let t=e;for(;;){const n=t.next;if(n.prev===t||n===t||n===e)break;t=n}return t}function c(e,t){var r=function(e,t){var n,r=t,i=e.x,s=e.y,a=-1/0;do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){var o=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=i&&o>a){if(a=o,o===i){if(s===r.y)return r;if(s===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!n)return null;if(i===a)return n;var v,u=n,l=n.x,c=n.y,x=1/0;r=n;do{i>=r.x&&r.x>=l&&i!==r.x&&f(s<c?i:a,s,l,c,s<c?a:i,s,r.x,r.y)&&(v=Math.abs(s-r.y)/(i-r.x),b(r,e)&&(v<x||v===x&&(r.x>n.x||r.x===n.x&&h(n,r)))&&(n=r,x=v)),r=r.next}while(r!==u);return n}(e,t);if(!r)return t;var i=T(r,e),s=n(r,r.next);let a=l(i);return n(a,a.next),s=l(s),l(t===r?s:t)}function h(e,t){return g(e.prev,e,t.prev)<0&&g(t.next,e,e.next)<0}function x(e,t,n,r){var i=e;do{null===i.z&&(i.z=p(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,n,r,i,s,a,o,v,u=1;do{for(n=e,e=null,s=null,a=0;n;){for(a++,r=n,o=0,t=0;t<u&&(o++,r=r.nextZ);t++);for(v=u;o>0||v>0&&r;)0!==o&&(0===v||!r||n.z<=r.z)?(i=n,n=n.nextZ,o--):(i=r,r=r.nextZ,v--),s?s.nextZ=i:e=i,i.prevZ=s,s=i;n=r}s.nextZ=null,u*=2}while(a>1)}(i)}function p(e,t,n,r,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function y(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function f(e,t,n,r,i,s,a,o){return(i-a)*(t-o)-(e-a)*(s-o)>=0&&(e-a)*(r-o)-(n-a)*(t-o)>=0&&(n-a)*(s-o)-(i-a)*(r-o)>=0}function S(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&m(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(b(e,t)&&b(t,e)&&function(e,t){var n=e,r=!1,i=(e.x+t.x)/2,s=(e.y+t.y)/2;do{n.y>s!=n.next.y>s&&n.next.y!==n.y&&i<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(g(e.prev,e,t.prev)||g(e,t.prev,t))||d(e,t)&&g(e.prev,e,e.next)>0&&g(t.prev,t,t.next)>0)}function g(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function d(e,t){return e.x===t.x&&e.y===t.y}function m(e,t,n,r){var i=V(g(e,t,n)),s=V(g(e,t,r)),a=V(g(n,r,e)),o=V(g(n,r,t));return i!==s&&a!==o||!(0!==i||!L(e,n,t))||!(0!==s||!L(e,r,t))||!(0!==a||!L(n,e,r))||!(0!==o||!L(n,t,r))}function L(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function V(e){return e>0?1:e<0?-1:0}function b(e,t){return g(e.prev,e,e.next)<0?g(e,t,e.next)>=0&&g(e,e.prev,t)>=0:g(e,t,e.prev)<0||g(e,e.next,t)<0}function T(e,t){var n=new w(e.i,e.x,e.y),r=new w(t.i,t.x,t.y),i=e.next,s=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,s.next=r,r.prev=s,r}function z(e,t,n,r){var i=new w(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function M(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function w(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E(e,t,n,r){for(var i=0,s=t,a=n-r;s<n;s+=r)i+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return i}return e.deviation=function(e,t,n,r){var i=t&&t.length,s=i?t[0]*n:e.length,a=Math.abs(E(e,0,s,n));if(i)for(var o=0,v=t.length;o<v;o++){var u=t[o]*n,l=o<v-1?t[o+1]*n:e.length;a-=Math.abs(E(e,u,l,n))}var c=0;for(o=0;o<r.length;o+=3){var h=r[o]*n,x=r[o+1]*n,p=r[o+2]*n;c+=Math.abs((e[h]-e[p])*(e[x+1]-e[h+1])-(e[h]-e[x])*(e[p+1]-e[h+1]))}return 0===a&&0===c?0:Math.abs((c-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var s=0;s<e[i].length;s++)for(var a=0;a<t;a++)n.vertices.push(e[i][s][a]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n},e},void 0!==(s=i())&&(r.exports=s);const v=(0,a.g)(o.exports)},13200:(e,t,n)=>{n.d(t,{k3:()=>o,s5:()=>a});Math.PI;const r=256/360,i=1/Math.LN2;function s(e,t){return(e%=t)>=0?e:e+t}function a(e){return s(e*r,256)}function o(e){return Math.log(e)*i}},38999:(e,t,n)=>{var r,i;function s(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function a(e){switch(e){case"top":return i.Top;case"middle":return i.Center;case"baseline":return i.Baseline;case"bottom":return i.Bottom}}function o(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[r.Right,i.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[r.Center,i.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[r.Left,i.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[r.Right,i.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[r.Center,i.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[r.Left,i.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[r.Right,i.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[r.Center,i.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[r.Left,i.Top];default:return console.debug("Found invalid placement type ".concat(e)),[r.Center,i.Center]}}function v(e){switch(e){case r.Right:return-1;case r.Center:return 0;case r.Left:return 1;default:return console.debug("Found invalid horizontal alignment ".concat(e)),0}}function u(e){switch(e){case i.Top:return 1;case i.Center:return 0;case i.Bottom:case i.Baseline:return-1;default:return console.debug("Found invalid vertical alignment ".concat(e)),0}}function l(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function c(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}n.d(t,{Hd:()=>l,M7:()=>r,NS:()=>c,TR:()=>i,b7:()=>a,g:()=>v,kH:()=>s,qv:()=>o,tf:()=>u}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(r||(r={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(i||(i={}))},54815:(e,t,n)=>{n.d(t,{CA:()=>u,Gq:()=>L,Xp:()=>v,a:()=>d,dk:()=>S,hF:()=>c,jj:()=>l,jy:()=>o,m2:()=>h,mE:()=>g,qr:()=>m});var r=n(10064),i=n(38999),s=n(80613);const a=Object.keys(s.mD).filter((e=>"number"==typeof s.mD[e])).reduce(((e,t)=>({...e,[t]:s.mD[t]})),{});function o(e){return e===s.mD.OUTLINE_FILL||e===s.mD.OUTLINE_FILL_SIMPLE}function v(e){return function(e){return e===s.mD.SIMPLE||e===s.mD.OUTLINE_FILL_SIMPLE}(e.symbologyType)}function u(e){return o(e.symbologyType)}function l(e,t){switch(e){case s.LW.FILL:return S.from(t);case s.LW.LINE:return d.from(t);case s.LW.MARKER:return g.from(t);case s.LW.TEXT:return m.from(t);case s.LW.LABEL:return L.from(t);default:throw new Error("Unable to createMaterialKey for unknown geometryType ".concat(e))}}function c(e){switch(h.load(e).geometryType){case s.LW.MARKER:return new g(e);case s.LW.FILL:return new S(e);case s.LW.LINE:return new d(e);case s.LW.TEXT:return new m(e);case s.LW.LABEL:return new L(e)}}class h{static load(e){const t=this.shared;return t.data=e,t}constructor(e){this._data=0,this._data=e}set data(e){this._data=null!==e&&void 0!==e?e:0}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(e){this.setBits(e,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(e){this.setBit(20,e)}get sdf(){return!!this.bit(11)}set sdf(e){this.setBit(11,null!==e&&void 0!==e&&e)}get pattern(){return!!this.bit(12)}set pattern(e){this.setBit(12,e)}get textureBinding(){return this.bits(0,8)}set textureBinding(e){this.setBits(e,0,8)}get symbologyType(){return this.bits(21,26)}set symbologyType(e){this.setBits(e,21,26)}get geometryTypeString(){switch(this.geometryType){case s.LW.FILL:return"fill";case s.LW.MARKER:return"marker";case s.LW.LINE:return"line";case s.LW.TEXT:return"text";case s.LW.LABEL:return"label";default:throw new r.Z("Unable to handle unknown geometryType: ".concat(this.geometryType))}}setBit(e,t){const n=1<<e;t?this._data|=n:this._data&=~n}bit(e){return(this._data&1<<e)>>e}setBits(e,t,n){for(let r=t,i=0;r<n;r++,i++)this.setBit(r,0!=(e&1<<i))}bits(e,t){let n=0;for(let r=e,i=0;r<t;r++,i++)n|=this.bit(r)<<i;return n}hasVV(){return!1}setVV(e,t){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf,symbologyType:{value:s.mD[this.symbologyType],options:a,namespace:"SYMBOLOGY_TYPE"}}}getVariationHash(){return this._data&~(7&this.textureBinding)}}h.shared=new h(0);const x=e=>class extends e{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(e){this.setBit(16,e)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(e){this.setBit(17,e)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(e){this.setBit(18,e)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(e){this.setBit(19,e)}hasSizeVV(){return this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}hasVV(){return super.hasVV()||this.hasSizeVV()}setVV(e,t){super.setVV(e,t);const n=function(e,t,n){const r=s.X.SIZE_FIELD_STOPS|s.X.SIZE_MINMAX_VALUE|s.X.SIZE_SCALE_STOPS|s.X.SIZE_UNIT_VALUE,i=(t&(s.mf.FIELD_TARGETS_OUTLINE|s.mf.MINMAX_TARGETS_OUTLINE|s.mf.SCALE_TARGETS_OUTLINE|s.mf.UNIT_TARGETS_OUTLINE))>>>4;return e===s.LW.LINE&&n.isOutline||e===s.LW.FILL&&o(n.symbologyType)?r&i:r&~i}(this.geometryType,e,t)&e;this.vvSizeMinMaxValue=!!(n&s.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(n&s.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(n&s.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(n&s.X.SIZE_SCALE_STOPS)}},p=e=>class extends e{get vvRotation(){return 0!==this.bit(15)}set vvRotation(e){this.setBit(15,e)}hasVV(){return super.hasVV()||this.vvRotation}setVV(e,t){super.setVV(e,t),this.vvRotation=!t.isOutline&&!!(e&s.X.ROTATION)}},y=e=>class extends e{get vvColor(){return 0!==this.bit(13)}set vvColor(e){this.setBit(13,e)}hasVV(){return super.hasVV()||this.vvColor}setVV(e,t){super.setVV(e,t),this.vvColor=!t.isOutline&&!!(e&s.X.COLOR)}},f=e=>class extends e{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(e){this.setBit(14,e)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(e,t){super.setVV(e,t),this.vvOpacity=!t.isOutline&&!!(e&s.X.OPACITY)}};class S extends(y(f(x(h)))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const{symbologyType:t,vvFlags:n}=e,r=this.load(0);return r.geometryType=s.LW.FILL,r.symbologyType=t,t!==s.mD.DOT_DENSITY&&r.setVV(n,e),r.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}S.shared=new S(0);class g extends(y(f(p(x(h))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const{symbologyType:t,vvFlags:n}=e,r=this.load(0);return r.geometryType=s.LW.MARKER,r.symbologyType=t,t!==s.mD.HEATMAP&&r.setVV(n,e),r.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}g.shared=new g(0);class d extends(y(f(x(h)))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=s.LW.LINE,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}d.shared=new d(0);class m extends(y(f(p(x(h))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=s.LW.TEXT,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}m.shared=new m(0);class L extends(x(h)){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=s.LW.LABEL,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.mapAligned=(0,i.NS)(e.placement),t.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}L.shared=new L(0)}}]);
//# sourceMappingURL=3518.3732947b.chunk.js.map