"use strict";(self.webpackChunkob_app=self.webpackChunkob_app||[]).push([[4227],{84227:(e,t,r)=>{r.r(t),r.d(t,{default:()=>we});var n,i=r(27366),s=r(42265),l=r(52639),o=r(44055),a=r(76200),u=r(40281),p=r(77178),d=r(43404),c=r(84652),m=r(97642),y=r(66978),h=r(94172),f=r(35995),b=r(49861),g=r(25243),v=r(38511),x=r(69912),w=r(31201),_=r(18987),S=r(53866),C=r(78952),N=r(82582),E=r(92975),I=r(30651),F=r(6693),O=r(6061),R=r(29598),P=r(71684),A=r(56811),L=r(99063),M=r(86685),U=r(25899),j=r(45948),T=r(42388),Z=r(83690),q=r(79056),B=r(89125),W=r(63780);r(93169);let V=0,k=n=class extends((0,q.IG)(m.w)){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([(0,h.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer}),h.Z_),(0,h.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),h.Z_),(0,h.YP)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),h.Z_),(0,h.YP)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),h.Z_)])}get id(){const e=this._get("id");return null!==e&&void 0!==e?e:V++}set id(e){this._set("id",e)}readLegendUrl(e,t){var r,n;return null!==(r=null!==(n=t.legendUrl)&&void 0!==n?n:t.legendURL)&&void 0!==r?r:null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return(0,g.se)(u.Z.ofType(n),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){var e,t,r,i;const s=new n;return this.hasOwnProperty("description")&&(s.description=this.description),this.hasOwnProperty("fullExtent")&&(s.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(s.fullExtents=null!==(e=null===(t=this.fullExtents)||void 0===t?void 0:t.map((e=>e.clone())))&&void 0!==e?e:null),this.hasOwnProperty("legendUrl")&&(s.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(s.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(s.layer=this.layer),this.hasOwnProperty("name")&&(s.name=this.name),this.hasOwnProperty("parent")&&(s.parent=this.parent),this.hasOwnProperty("queryable")&&(s.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(s.sublayers=null===(r=this.sublayers)||void 0===r?void 0:r.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(s.spatialReferences=null===(i=this.spatialReferences)||void 0===i?void 0:i.map((e=>e))),this.hasOwnProperty("visible")&&(s.visible=this.visible),this.hasOwnProperty("title")&&(s.title=this.title),s}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,i._)([(0,b.Cb)()],k.prototype,"description",void 0),(0,i._)([(0,b.Cb)({readOnly:!0})],k.prototype,"dimensions",void 0),(0,i._)([(0,b.Cb)({type:S.Z,json:{name:"extent"}})],k.prototype,"fullExtent",void 0),(0,i._)([(0,b.Cb)()],k.prototype,"fullExtents",void 0),(0,i._)([(0,b.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],k.prototype,"id",null),(0,i._)([(0,b.Cb)({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],k.prototype,"legendUrl",void 0),(0,i._)([(0,v.r)("legendUrl",["legendUrl","legendURL"])],k.prototype,"readLegendUrl",null),(0,i._)([(0,b.Cb)({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],k.prototype,"legendEnabled",void 0),(0,i._)([(0,b.Cb)()],k.prototype,"layer",void 0),(0,i._)([(0,b.Cb)()],k.prototype,"maxScale",void 0),(0,i._)([(0,b.Cb)()],k.prototype,"minScale",void 0),(0,i._)([(0,b.Cb)({readOnly:!0})],k.prototype,"effectiveScaleRange",null),(0,i._)([(0,b.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],k.prototype,"name",void 0),(0,i._)([(0,b.Cb)()],k.prototype,"parent",void 0),(0,i._)([(0,b.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],k.prototype,"popupEnabled",void 0),(0,i._)([(0,b.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],k.prototype,"queryable",void 0),(0,i._)([(0,b.Cb)()],k.prototype,"sublayers",void 0),(0,i._)([(0,B.p)("sublayers")],k.prototype,"castSublayers",null),(0,i._)([(0,b.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],k.prototype,"spatialReferences",void 0),(0,i._)([(0,b.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],k.prototype,"title",void 0),(0,i._)([(0,b.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],k.prototype,"visible",null),k=n=(0,i._)([(0,x.j)("esri.layers.support.WMSSublayer")],k);const D=k;var G=r(10064);const H={84:4326,83:4269,27:4267};function X(e){var t,r,n;if(!e)return null;const i={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const s=e.documentElement;if("ServiceExceptionReport"===s.nodeName){const e=Array.prototype.slice.call(s.childNodes).map((e=>e.textContent)).join("\r\n");throw new G.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const l=Y("Capability",s),o=Y("Service",s),a=l&&Y("Request",l);if(!l||!o||!a)return null;const u=Y("Layer",l);if(!u)return null;const p="WMS_Capabilities"===s.nodeName||"WMT_MS_Capabilities"===s.nodeName?s.getAttribute("version"):"1.3.0",d=K("Title",o,"")||K("Name",o,""),c=K("AccessConstraints",o,""),m=/^none$/i.test(c)?"":c,y=K("Abstract",o,""),h=parseInt(K("MaxWidth",o,"5000"),10),f=parseInt(K("MaxHeight",o,"5000"),10),b=re(a,"GetMap"),g=te(a,"GetMap"),v=ie(u,p,i);if(!v)return null;let x,w=0;const _=Array.prototype.slice.call(l.childNodes),C=null!==(t=v.sublayers)&&void 0!==t?t:[],N=e=>{null!=e&&C.push(e)};_.forEach((e=>{"Layer"===e.nodeName&&(0===w?x=e:1===w?(v.name&&(v.name="",N(ie(x,p,i))),N(ie(e,p,i))):N(ie(e,p,i)),w++)}));let E=v.sublayers,I=v.extent;const F=null!==(r=v.fullExtents)&&void 0!==r?r:[];if(E||(E=[]),0===E.length&&E.push(v),!I){const e=new S.Z(E[0].extent);v.extent=e.toJSON(),I=v.extent}const O=v.spatialReferences.length>0?v.spatialReferences:$(v),R=te(a,"GetFeatureInfo"),P=R?re(a,"GetFeatureInfo"):null,A=J(E),L=v.minScale||0,M=v.maxScale||0,U=null!==(n=v.dimensions)&&void 0!==n?n:[],j=A.reduce(((e,t)=>{var r;return e.concat(null!==(r=t.dimensions)&&void 0!==r?r:[])}),[]),T=U.concat(j).filter(oe);let Z=null;if(T.length){const e=T.map((e=>{const{extent:t}=e;return function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(t)?t.map((e=>e.getTime())):null===t||void 0===t?void 0:t.map((e=>[e.min.getTime(),e.max.getTime()]))})).flat(2).filter(W.pC);Z={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...e),Math.max(...e)]}}return{copyright:m,description:y,dimensions:U,extent:I,fullExtents:F,featureInfoFormats:P,featureInfoUrl:R,mapUrl:g,maxWidth:h,maxHeight:f,maxScale:M,minScale:L,layers:A,spatialReferences:O,supportedImageFormatTypes:b,timeInfo:Z,title:d,version:p}}function $(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const e=$(t);if(e.length>0)return e}return[]}function J(e){let t=[];for(const n of e){var r;t.push(n),(null===(r=n.sublayers)||void 0===r?void 0:r.length)&&(t=t.concat(J(n.sublayers)),delete n.sublayers)}return t}function Q(e,t,r){var n;return null!==(n=t.getAttribute(e))&&void 0!==n?n:r}function Y(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(se(n)&&n.nodeName===e)return n}return null}function z(e,t){if(null==t)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];se(i)&&i.nodeName===e&&r.push(i)}return r}function K(e,t,r){var n,i;return null!==(n=null===(i=Y(e,t))||void 0===i?void 0:i.textContent)&&void 0!==n?n:r}function ee(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),i=parseFloat(e.getAttribute("miny")),s=parseFloat(e.getAttribute("maxx")),l=parseFloat(e.getAttribute("maxy"));let o,a,u,p;r?(o=isNaN(i)?-Number.MAX_VALUE:i,a=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(l)?Number.MAX_VALUE:l,p=isNaN(s)?Number.MAX_VALUE:s):(o=isNaN(n)?-Number.MAX_VALUE:n,a=isNaN(i)?-Number.MAX_VALUE:i,u=isNaN(s)?Number.MAX_VALUE:s,p=isNaN(l)?Number.MAX_VALUE:l);const d=new C.Z({wkid:t});return new S.Z({xmin:o,ymin:a,xmax:u,ymax:p,spatialReference:d})}function te(e,t){const r=Y(t,e);if(r){const e=Y("DCPType",r);if(e){const t=Y("HTTP",e);if(t){const e=Y("Get",t);if(e){let t=function(e,t,r,n){const i=Y(e,r);return i?Q(t,i,n):n}("OnlineResource","xlink:href",e,null);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const r=[],n=(0,f.mN)(e);for(const i in n.query)n.query.hasOwnProperty(i)&&(t.includes(i.toLowerCase())||r.push(i+"="+n.query[i]));return n.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}return null}function re(e,t){const r=z("Operation",e);if(!r.length)return z("Format",Y(t,e)).map((e=>{let{textContent:t}=e;return t})).filter(W.pC);const n=[];for(const i of r)if(i.getAttribute("name")===t){const e=z("Format",i);for(const{textContent:t}of e)null!=t&&n.push(t)}return n}function ne(e,t,r){const n=Y(t,e);if(!n)return r;const{textContent:i}=n;if(null==i||""===i)return r;const s=Number(i);return isNaN(s)?r:s}function ie(e,t,r){var n;if(!e)return null;const i={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},s=Y("LatLonBoundingBox",e),l=Y("EX_GeographicBoundingBox",e);let o=null;s&&(o=ee(s,4326)),l&&(o=new S.Z(0,0,0,0,new C.Z({wkid:4326})),o.xmin=parseFloat(K("westBoundLongitude",l,"0")),o.ymin=parseFloat(K("southBoundLatitude",l,"0")),o.xmax=parseFloat(K("eastBoundLongitude",l,"0")),o.ymax=parseFloat(K("northBoundLatitude",l,"0"))),s||l||(o=new S.Z(-180,-90,180,90,new C.Z({wkid:4326}))),i.minScale=ne(e,"MaxScaleDenominator",0),i.maxScale=ne(e,"MinScaleDenominator",0);const a=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)i.name=e.textContent||"";else if("Title"===e.nodeName)i.title=e.textContent||"";else if("Abstract"===e.nodeName)i.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(a);if(r&&0===r.indexOf("EPSG:")){const n=parseInt(r.substring(5),10);0===n||isNaN(n)||o||(o="1.3.0"===t?ee(e,n,(0,M.A)(n)):ee(e,n))}const s=r&&r.indexOf(":");if(s&&s>-1){var n;let l=parseInt(r.substring(s+1,r.length),10);0===l||isNaN(l)||(l=null!==(n=H[l])&&void 0!==n?n:l);const o="1.3.0"===t?ee(e,l,(0,M.A)(l)):ee(e,l);o&&i.fullExtents&&i.fullExtents.push(o)}}else if(e.nodeName===a){var s,l;(null!==(s=null===(l=e.textContent)||void 0===l?void 0:l.split(" "))&&void 0!==s?s:[]).forEach((e=>{const t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){var r;const e=null!==(r=H[t])&&void 0!==r?r:t;i.spatialReferences.includes(e)||i.spatialReferences.push(e)}}))}else if("Style"!==e.nodeName||i.legendUrl){if("Layer"===e.nodeName){const n=ie(e,t,r);n&&(n.parentLayerId=i.id,i.sublayers||(i.sublayers=[]),i.sublayers.push(n))}}else{const t=Y("LegendURL",e);if(t){const e=Y("OnlineResource",t);e&&(i.legendUrl=e.getAttribute("xlink:href"))}}})),i.extent=null===(n=o)||void 0===n?void 0:n.toJSON(),i.dimensions=z("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{var t,r;const n=e.getAttribute("name"),i=e.getAttribute("units"),s=e.textContent,l=null!==(t=e.getAttribute("unitSymbol"))&&void 0!==t?t:void 0,o=null!==(r=e.getAttribute("default"))&&void 0!==r?r:void 0,a="0"!==Q("default",e,"0"),u="0"!==Q("nearestValue",e,"0"),p="0"!==Q("current",e,"0");return oe({name:n,units:i})?{name:"time",units:"ISO8601",extent:pe(s),default:pe(o),multipleValues:a,nearestValue:u,current:p}:le({name:n,units:i})?{name:"elevation",units:i,extent:ae(s),unitSymbol:l,default:ae(o),multipleValues:a,nearestValue:u}:{name:n,units:i,extent:ue(s),unitSymbol:l,default:ue(o),multipleValues:a,nearestValue:u}})),i}function se(e){return e.nodeType===Node.ELEMENT_NODE}function le(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function oe(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ae(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter(W.pC):r.map((e=>parseFloat(e)))}function ue(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter(W.pC):r}function pe(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?de(t[2]):void 0}})).filter(W.pC):r.map((e=>new Date(e)))}function de(e){const t=e.match(/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i);return t?{years:ce(t[1]),months:ce(t[2]),days:ce(t[3]),hours:ce(t[4]),minutes:ce(t[5]),seconds:ce(t[6])}:null}function ce(e){if(!e)return 0;const t=e.match(/(?:\d+(?:\.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function me(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const ye=new Set([102100,3857,102113,900913]),he=new Set([3395,54004]);const fe=new d.X({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function be(e){return"text/html"===e}function ge(e){return"text/plain"===e}let ve=class extends((0,F.h)((0,L.n)((0,P.Q)((0,A.M)((0,O.q)((0,R.I)((0,m.R)(I.Z)))))))){constructor(){super(...arguments),this.allSublayers=new p.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([(0,h.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=t.layer=this}),h.Z_),(0,h.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),h.Z_),(0,h.YP)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=r.layer=this}),h.Z_)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(y.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new S.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){var e,t;return null==this.featureInfoFormats?null:null!==(e=null!==(t=this.featureInfoFormats.find(be))&&void 0!==t?t:this.featureInfoFormats.find(ge))&&void 0!==e?e:null}set featureInfoFormat(e){null==e?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(be(e)||ge(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new C.Z(t.spatialReferences[0])}writeSpatialReferences(e,t){var r;const n=null===(r=this.spatialReference)||void 0===r?void 0:r.wkid;e&&n?(t.spatialReferences=e.filter((e=>e!==n)),t.spatialReferences.unshift(n)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return xe(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return xe(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const i=new Map,s=e.flatten((e=>{let{sublayers:t}=e;return null!==t&&void 0!==t?t:[]}));for(const a of s){var l;if("number"==typeof(null===(l=a.parent)||void 0===l?void 0:l.id)){const e=i.get(a.parent.id);null!=e?e.push(a.id):i.set(a.parent.id,[a.id])}}for(const a of s){var o;const e={sublayer:a,...n},r=a.write({parentLayerId:"number"==typeof(null===(o=a.parent)||void 0===o?void 0:o.id)?a.parent.id:-1},e);if(i.has(a.id)&&(r.sublayerIds=i.get(a.id)),!a.sublayers&&a.name){const r=a.write({},e);delete r.id,t.layers.push(r)}}t.visibleLayers=s.filter((e=>{let{visible:t,sublayers:r}=e;return t&&!r})).map((e=>{let{name:t}=e;return t})).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=(0,f.mN)(e);for(const i in r)/^(request|service)$/i.test(i)&&delete r[i];const n=(0,f.fl)(t,null!==r&&void 0!==r?r:{});this._set("url",n)}createExportImageParameters(e,t,r,n){var i;const s=null!==(i=null===n||void 0===n?void 0:n.pixelRatio)&&void 0!==i?i:1,l=(0,N.yZ)({extent:e,width:t})*s,o=new T.j({layer:this,scale:l}),{xmin:a,ymin:u,xmax:p,ymax:d,spatialReference:c}=e,m=function(e,t){let r=e.wkid;return null==t?r:(null!=r&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),null!=r&&ye.has(r)?t.find((e=>ye.has(e)))||t.find((e=>he.has(e)))||102100:r)}(c,this.spatialReferences),y="1.3.0"===this.version&&(0,M.A)(m)?"".concat(u,",").concat(a,",").concat(d,",").concat(p):"".concat(a,",").concat(u,",").concat(p,",").concat(d),h=o.toJSON();return{bbox:y,["1.3.0"===this.version?"crs":"srs"]:null==m||isNaN(m)?void 0:"EPSG:"+m,...h}}async fetchImage(e,t,r,n){var i,s;const l=this.mapUrl,o=this.createExportImageParameters(e,t,r,n);if(!o.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const u=null===n||void 0===n||null===(i=n.timeExtent)||void 0===i?void 0:i.start,p=null===n||void 0===n||null===(s=n.timeExtent)||void 0===s?void 0:s.end,d=null!=u&&null!=p?u.getTime()===p.getTime()?me(u):"".concat(me(u),"/").concat(me(p)):void 0,c={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...o,time:d,...this.refreshParameters}),signal:null===n||void 0===n?void 0:n.signal};return(0,a.Z)(null!==l&&void 0!==l?l:"",c).then((e=>e.data))}async fetchImageBitmap(e,t,r,n){var i,s,l;const o=null!==(i=this.mapUrl)&&void 0!==i?i:"",u=this.createExportImageParameters(e,t,r,n);if(!u.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const p=null===n||void 0===n||null===(s=n.timeExtent)||void 0===s?void 0:s.start,d=null===n||void 0===n||null===(l=n.timeExtent)||void 0===l?void 0:l.end,c=null!=p&&null!=d?p.getTime()===d.getTime()?me(p):"".concat(me(p),"/").concat(me(d)):void 0,m={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...u,time:c,...this.refreshParameters}),signal:null===n||void 0===n?void 0:n.signal},{data:y}=await(0,a.Z)(o,m);return(0,Z.g)(y,o,null===n||void 0===n?void 0:n.signal)}fetchFeatureInfo(e,t,r,n,i){const s=(0,N.yZ)({extent:e,width:t}),l=function(e){const t=e.filter((e=>e.popupEnabled&&e.name&&e.queryable));return t.length?t.map((e=>{let{name:t}=e;return t})).join():null}(new T.j({layer:this,scale:s}).visibleSublayers);if(null==this.featureInfoUrl||null==l)return Promise.resolve([]);if(null==this.fetchFeatureInfoFunction&&null==this.featureInfoFormat)return Promise.resolve([]);const o="1.3.0"===this.version?{I:n,J:i}:{x:n,y:i},a={query_layers:l,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...o},u={...this.createExportImageParameters(e,t,r),...a},p=this._mixCustomParameters(u);return null!=this.fetchFeatureInfoFunction?this.fetchFeatureInfoFunction(p):this._defaultFetchFeatureInfoFunction((0,f.fl)(this.featureInfoUrl,p))}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}serviceSupportsSpatialReference(e){return(0,U.G)(this.url)||null!=this.spatialReferences&&this.spatialReferences.some((t=>{const r=900913===t?C.Z.WebMercator:new C.Z({wkid:t});return(0,E.fS)(r,e)}))}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=(0,f.qg)(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new o.Z({title:this.title,content:t}),n=new l.Z({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){var t;if(!this.resourceInfo&&null!==(t=this.parsedUrl)&&void 0!==t&&t.path){const{path:t,query:r}=this.parsedUrl,{data:n}=await(0,a.Z)(t,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=X(n)}if(this.parsedUrl){const e=new f.R9(this.parsedUrl.path),{httpsDomains:t}=s.default.request;"https"!==e.scheme||e.port&&"443"!==e.port||!e.host||t.includes(e.host)||t.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function xe(e,t,r){var n;e=null!==(n=e)&&void 0!==n?n:[];const i=new Map;e.every((e=>null==e.id))&&(e=(0,c.d9)(e)).forEach(((e,t)=>e.id=t));for(const l of e){const e=new D;e.read(l,t),r&&!r.includes(e.name)&&(e.visible=!1),i.set(e.id,e)}const s=[];for(const l of e){const e=null!=l.id?i.get(l.id):null;if(e)if(null!=l.parentLayerId&&l.parentLayerId>=0){const t=i.get(l.parentLayerId);if(!t)continue;t.sublayers||(t.sublayers=new u.Z),t.sublayers.push(e)}else s.push(e)}return s}(0,i._)([(0,b.Cb)({readOnly:!0})],ve.prototype,"allSublayers",void 0),(0,i._)([(0,b.Cb)({json:{type:Object,write:!0}})],ve.prototype,"customParameters",void 0),(0,i._)([(0,b.Cb)({json:{type:Object,write:!0}})],ve.prototype,"customLayerParameters",void 0),(0,i._)([(0,b.Cb)({type:String,json:{write:!0}})],ve.prototype,"copyright",void 0),(0,i._)([(0,b.Cb)()],ve.prototype,"description",void 0),(0,i._)([(0,b.Cb)({readOnly:!0})],ve.prototype,"dimensions",void 0),(0,i._)([(0,b.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],ve.prototype,"fullExtent",void 0),(0,i._)([(0,v.r)(["web-document","portal-item"],"fullExtent",["extent"])],ve.prototype,"readFullExtentFromItemOrMap",null),(0,i._)([(0,w.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],ve.prototype,"writeFullExtent",null),(0,i._)([(0,b.Cb)()],ve.prototype,"fullExtents",void 0),(0,i._)([(0,b.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ve.prototype,"featureInfoFormat",null),(0,i._)([(0,b.Cb)({type:[String],readOnly:!0})],ve.prototype,"featureInfoFormats",void 0),(0,i._)([(0,b.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ve.prototype,"featureInfoUrl",void 0),(0,i._)([(0,b.Cb)()],ve.prototype,"fetchFeatureInfoFunction",void 0),(0,i._)([(0,b.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:fe.jsonValues,read:{reader:fe.read,source:"format"},write:{writer:fe.write,target:"format"}}}}})],ve.prototype,"imageFormat",void 0),(0,i._)([(0,v.r)("imageFormat",["supportedImageFormatTypes"])],ve.prototype,"readImageFormat",null),(0,i._)([(0,b.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],ve.prototype,"imageMaxHeight",void 0),(0,i._)([(0,b.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],ve.prototype,"imageMaxWidth",void 0),(0,i._)([(0,b.Cb)()],ve.prototype,"imageTransparency",void 0),(0,i._)([(0,b.Cb)(j.rn)],ve.prototype,"legendEnabled",void 0),(0,i._)([(0,b.Cb)({type:["show","hide","hide-children"]})],ve.prototype,"listMode",void 0),(0,i._)([(0,b.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ve.prototype,"mapUrl",void 0),(0,i._)([(0,b.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],ve.prototype,"isReference",void 0),(0,i._)([(0,b.Cb)({type:["WMS"]})],ve.prototype,"operationalLayerType",void 0),(0,i._)([(0,b.Cb)()],ve.prototype,"resourceInfo",void 0),(0,i._)([(0,b.Cb)({type:C.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],ve.prototype,"spatialReference",void 0),(0,i._)([(0,v.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],ve.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,i._)([(0,b.Cb)({type:[g.z8],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],ve.prototype,"spatialReferences",void 0),(0,i._)([(0,w.c)(["web-document","portal-item"],"spatialReferences")],ve.prototype,"writeSpatialReferences",null),(0,i._)([(0,b.Cb)({type:u.Z.ofType(D),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if((0,_.d)(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],ve.prototype,"sublayers",void 0),(0,i._)([(0,v.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],ve.prototype,"readSublayersFromItemOrMap",null),(0,i._)([(0,v.r)("service","sublayers",["layers"])],ve.prototype,"readSublayers",null),(0,i._)([(0,w.c)("sublayers",{layers:{type:[D]},visibleLayers:{type:[String]}})],ve.prototype,"writeSublayers",null),(0,i._)([(0,b.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],ve.prototype,"type",void 0),(0,i._)([(0,b.Cb)(j.HQ)],ve.prototype,"url",null),(0,i._)([(0,b.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ve.prototype,"version",void 0),ve=(0,i._)([(0,x.j)("esri.layers.WMSLayer")],ve);const we=ve},86685:(e,t,r)=>{r.d(t,{A:()=>i});const n=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function i(e){return null!=e&&n.some((t=>{let[r,n]=t;return e>=r&&e<=n}))}},42388:(e,t,r)=>{r.d(t,{j:()=>a});var n=r(27366),i=r(7138),s=r(49861),l=(r(25243),r(63780),r(93169),r(69912));const o={visible:"visibleSublayers"};let a=class extends i.Z{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(o[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=null===e||void 0===e?void 0:e.sublayers,n=[],i=e=>{const{minScale:r,maxScale:s,sublayers:l,visible:o}=e;o&&(0===t||(0===r||t<=r)&&(0===s||t>=s))&&(l?l.forEach(i):n.push(e))};return null!==r&&void 0!==r&&r.forEach(i),n}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:n,version:i}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:n?"TRUE":"FALSE",version:i,layers:t}}};(0,n._)([(0,s.Cb)()],a.prototype,"layer",null),(0,n._)([(0,s.Cb)({readOnly:!0})],a.prototype,"layers",null),(0,n._)([(0,s.Cb)({type:Number})],a.prototype,"scale",void 0),(0,n._)([(0,s.Cb)({readOnly:!0})],a.prototype,"version",null),(0,n._)([(0,s.Cb)({readOnly:!0})],a.prototype,"visibleSublayers",null),a=(0,n._)([(0,l.j)("esri.layers.support.ExportWMSImageParameters")],a)},83690:(e,t,r)=>{r.d(t,{V:()=>l,g:()=>s});var n=r(10064),i=r(66978);async function s(e,t,r){let s;try{s=await createImageBitmap(e)}catch(l){throw new n.Z("request:server","Unable to load ".concat(t),{url:t,error:l})}return(0,i.k_)(r),s}async function l(e,t,r,s,l){let o;try{o=await createImageBitmap(e)}catch(a){throw new n.Z("request:server","Unable to load tile ".concat(t,"/").concat(r,"/").concat(s),{error:a,level:t,row:r,col:s})}return(0,i.k_)(l),o}}}]);
//# sourceMappingURL=4227.c02f2c4d.chunk.js.map