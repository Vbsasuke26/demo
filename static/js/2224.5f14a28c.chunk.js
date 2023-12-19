"use strict";(self.webpackChunkob_app=self.webpackChunkob_app||[]).push([[2224],{15909:(e,a,t)=>{t.d(a,{D:()=>n});var r=t(80292);function n(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:a,propName:t,newOrigin:n}=e;(0,r.l)(a)&&n&&a.originOf(t)!==n&&a.updateOrigin(t,n)}))}},80292:(e,a,t)=>{function r(e){return e&&"getAtOrigin"in e&&"originOf"in e}t.d(a,{l:()=>r})},2224:(e,a,t)=>{t.d(a,{save:()=>I,saveAs:()=>S});var r=t(63780),n=(t(10064),t(65286)),i=t(25899),l=t(74368),o=t(37933),s=t(19610),u=(t(32698),t(73117));const d="Feature Service",c="feature-layer-utils",y="".concat(c,"-save"),p="".concat(c,"-save-as");"".concat(c,"-saveall"),"".concat(c,"-saveall-as");function f(e){return{isValid:(0,o.fP)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const a=[],t=[];for(const{layer:r,layerJSON:n}of e)r.isTable?t.push(n):a.push(n);return{layers:a,tables:t}}function w(e){return m([e])}async function v(e,a){return/\/\d+\/?$/.test(e.url)?w(a[0]):b(a,e)}async function b(e,a){var t,r;if(!a)return e.reverse(),m(e);const{layer:{url:n,customParameters:i,apiKey:o}}=e[0];let u=await a.fetchData("json");null!=(null===(t=u)||void 0===t?void 0:t.layers)&&null!=(null===(r=u)||void 0===r?void 0:r.tables)||(u=await async function(e,a,t){var r,n;e||(e={}),(r=e).layers||(r.layers=[]),(n=e).tables||(n.tables=[]);const{url:i,customParameters:o,apiKey:u}=a,{serviceJSON:d,layersJSON:c}=await(0,l.V)(i,{customParameters:o,apiKey:u}),y=h(e.layers,d.layers,t),p=h(e.tables,d.tables,t);e.layers=y.itemResources,e.tables=p.itemResources;const f=[...y.added,...p.added],m=c?[...c.layers,...c.tables]:[];return await async function(e,a,t,r){const n=await async function(e){const a=[];e.forEach((e=>{let{type:t}=e;const r=function(e){let a;switch(e){case"Feature Layer":case"Table":a="FeatureLayer";break;case"Oriented Imagery Layer":a="OrientedImageryLayer"}return a}(t),n=s.T[r];a.push(n())}));const t=await Promise.all(a),r=new Map;return e.forEach(((e,a)=>{let{type:n}=e;r.set(n,t[a])})),r}(a),i=a.map((e=>{let{id:a,type:i}=e;return new(n.get(i))({url:t,layerId:a,sourceJSON:r.find((e=>{let{id:t}=e;return t===a}))})}));await Promise.allSettled(i.map((e=>e.load()))),i.forEach((a=>{const{layerId:t,loaded:r,defaultPopupTemplate:n}=a;if(!r||null==n)return;const i={id:t,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==a.operationalLayerType&&(i.layerType=a.operationalLayerType),L(a,i,e)}))}(e,f,i,m),e}(u,{url:null!==n&&void 0!==n?n:"",customParameters:i,apiKey:o},e.map((e=>e.layer.layerId))));for(const l of e)L(l.layer,l.layerJSON,u);return u}function h(e,a,t){const n=(0,r.e5)(e,a,((e,a)=>e.id===a.id));e=e.filter((e=>!n.removed.some((a=>a.id===e.id))));const i=n.added;return i.forEach((a=>{let{id:t}=a;e.push({id:t})})),{itemResources:e,added:i.filter((e=>{let{id:a}=e;return!t.includes(a)}))}}function L(e,a,t){e.isTable?P(t.tables,a):P(t.layers,a)}function P(e,a){const t=e.findIndex((e=>{let{id:t}=e;return t===a.id}));-1===t?e.push(a):e[t]=a}async function g(e,a){const{url:t,layerId:r,title:n,fullExtent:l,isTable:o}=e,s=(0,i.Qc)(t);a.url="FeatureServer"===(null===s||void 0===s?void 0:s.serverType)?t:"".concat(t,"/").concat(r),a.title||(a.title=n),a.extent=null,o||null==l||(a.extent=await(0,u.$o)(l)),(0,u.ck)(a,u.Kz.METADATA),(0,u.ck)(a,u.Kz.MULTI_LAYER),(0,u.qj)(a,u.Kz.SINGLE_LAYER),o&&(0,u.qj)(a,u.Kz.TABLE)}async function I(e,a){return(0,n.a1)({layer:e,itemType:d,validateLayer:f,createItemData:(e,a)=>v(a,[e]),errorNamePrefix:y},a)}async function S(e,a,t){return(0,n.po)({layer:e,itemType:d,validateLayer:f,createItemData:(e,a)=>Promise.resolve(w(e)),errorNamePrefix:p,newItem:a,setItemProperties:g},t)}},65286:(e,a,t)=>{t.d(a,{a1:()=>v,po:()=>b});var r=t(10064),n=t(15909),i=t(7575),l=t(98995),o=t(32698),s=t(73117),u=t(81359);async function d(e){const{layer:a,errorNamePrefix:t,validateLayer:n}=e;await a.load(),function(e,a,t){const n=t(e);if(!n.isValid)throw new r.Z("".concat(a,":invalid-parameters"),n.errorMessage,{layer:e})}(a,t,n)}function c(e,a){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(a)}function y(e){const{item:a,itemType:t,errorNamePrefix:n,layer:i,validateItem:l}=e;if((0,u.w)(a),a.type!==t)throw new r.Z("".concat(n,":portal-item-wrong-type"),'Portal item type should be "'.concat(t,'"'),{item:a,layer:i});if(l){const e=l(a);if(!e.isValid)throw new r.Z("".concat(n,":invalid-parameters"),e.errorMessage,{layer:i})}}function p(e){const{layer:a,errorNamePrefix:t}=e,{portalItem:n}=a;if(!n)throw new r.Z("".concat(t,":portal-item-not-set"),c(a,"requires the portalItem property to be set"));if(!n.loaded)throw new r.Z("".concat(t,":portal-item-not-loaded"),c(a,"cannot be saved to a portal item that does not exist or is inaccessible"));y({...e,item:n})}function f(e){var a,t,r,n;const{newItem:o,itemType:s}=e;let u=l.default.from(o);return u.id&&(u=u.clone(),u.id=null),null!==(t=(a=u).type)&&void 0!==t||(a.type=s),null!==(n=(r=u).portal)&&void 0!==n||(r.portal=i.Z.getDefault()),y({...e,item:u}),u}async function m(e,a,t){var n,i;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const l=e.write({},a);return await Promise.all(null!==(n=null===(i=a.resources)||void 0===i?void 0:i.pendingOperations)&&void 0!==n?n:[]),function(e,a){var t;let n=(null!==(t=e.messages)&&void 0!==t?t:[]).filter((e=>{let{type:a}=e;return"error"===a})).map((e=>{let{name:a,message:t,details:n}=e;return new r.Z(a,t,n)}));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new r.Z("url:unsupported","Relative url '".concat(e,"' is not supported")))))),null!==a&&void 0!==a&&a.ignoreUnsupported&&(n=n.filter((e=>{let{name:a}=e;return"layer:unsupported"!==a&&"symbol:unsupported"!==a&&"symbol-layer:unsupported"!==a&&"property:unsupported"!==a&&"url:unsupported"!==a}))),n.length>0)throw new r.Z("layer-write:unsupported","Failed to save layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}(a,t),l}function w(e){(0,s.qj)(e,s.Kz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,a,t)=>t.indexOf(e)===a)))}async function v(e,a){const{layer:t,createItemData:r,createJSONContext:i,saveResources:l}=e;await d(e),p(e);const s=t.portalItem,u=i?i(s):(0,o.Yv)(s),c=await m(t,u,a),y=await r({layer:t,layerJSON:c},s);return w(s),await s.update({data:y}),(0,n.D)(u),await(null===l||void 0===l?void 0:l(s,u)),s}async function b(e,a){const{layer:t,createItemData:r,createJSONContext:i,setItemProperties:l,saveResources:s}=e;await d(e);const u=f(e),c=i?i(u):(0,o.Yv)(u),y=await m(t,c,a),p=await r({layer:t,layerJSON:y},u);return await l(t,u),w(u),await async function(e,a,t){var r;const n=e.portal;await n.signIn(),await(null===(r=n.user)||void 0===r?void 0:r.addItem({item:e,data:a,folder:null===t||void 0===t?void 0:t.folder}))}(u,p,a),t.portalItem=u,(0,n.D)(c),await(null===s||void 0===s?void 0:s(u,c)),u}},74368:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(41226);async function n(e,a){var t;const n=await(0,r.T)(e,a);d(n),o(n);const i={serviceJSON:n};if((null!==(t=n.currentVersion)&&void 0!==t?t:0)<10.5)return i;const l=await(0,r.T)(e+"/layers",a);return d(l),o(l),i.layersJSON={layers:l.layers,tables:l.tables},i}function i(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function l(e){return"Table"===e.type}function o(e){var a,t;e.layers=null===(a=e.layers)||void 0===a?void 0:a.filter(i),e.tables=null===(t=e.tables)||void 0===t?void 0:t.filter(l)}function s(e){e.type||(e.type="Feature Layer")}function u(e){e.type||(e.type="Table")}function d(e){var a,t;null!==(a=e.layers)&&void 0!==a&&a.forEach(s),null===(t=e.tables)||void 0===t||t.forEach(u)}},19610:(e,a,t)=>{t.d(a,{T:()=>r});const r={BingMapsLayer:async()=>(await t.e(165).then(t.bind(t,60165))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(1118),t.e(2846),t.e(7066),t.e(8162),t.e(6505)]).then(t.bind(t,66505))).default,CSVLayer:async()=>(await t.e(8435).then(t.bind(t,98435))).default,DimensionLayer:async()=>(await t.e(7406).then(t.bind(t,47406))).default,ElevationLayer:async()=>(await t.e(6816).then(t.bind(t,46816))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,64326))).default,GeoJSONLayer:async()=>(await t.e(5064).then(t.bind(t,5064))).default,GeoRSSLayer:async()=>(await t.e(54).then(t.bind(t,70054))).default,GroupLayer:async()=>(await t.e(8048).then(t.bind(t,18048))).default,ImageryLayer:async()=>(await Promise.all([t.e(3406),t.e(7607),t.e(5345),t.e(436),t.e(9672),t.e(9108),t.e(9652)]).then(t.bind(t,39652))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(5345),t.e(394),t.e(436),t.e(9672),t.e(527),t.e(9108),t.e(3064)]).then(t.bind(t,43064))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(1118),t.e(6251)]).then(t.bind(t,56251))).default,KMLLayer:async()=>(await t.e(3838).then(t.bind(t,13838))).default,LineOfSightLayer:async()=>(await t.e(3724).then(t.bind(t,33724))).default,LinkChartLayer:async()=>(await Promise.all([t.e(3406),t.e(5026),t.e(4054),t.e(5281),t.e(6143),t.e(5957),t.e(6326)]).then(t.bind(t,46326))).default,MapImageLayer:async()=>(await Promise.all([t.e(3406),t.e(7607),t.e(9623),t.e(680),t.e(9583)]).then(t.bind(t,19583))).default,MapNotesLayer:async()=>(await t.e(3513).then(t.bind(t,33513))).default,MediaLayer:async()=>(await t.e(8839).then(t.bind(t,88839))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(3406),t.e(7213),t.e(6741)]).then(t.bind(t,98701))).default,OpenStreetMapLayer:async()=>(await t.e(1656).then(t.bind(t,31656))).default,OrientedImageryLayer:async()=>(await t.e(706).then(t.bind(t,60706))).default,PointCloudLayer:async()=>(await Promise.all([t.e(1118),t.e(9532)]).then(t.bind(t,9532))).default,RouteLayer:async()=>(await Promise.all([t.e(729),t.e(7637)]).then(t.bind(t,67637))).default,SceneLayer:async()=>(await Promise.all([t.e(1118),t.e(2846),t.e(7066),t.e(8162),t.e(5838)]).then(t.bind(t,5838))).default,StreamLayer:async()=>(await t.e(2668).then(t.bind(t,2668))).default,SubtypeGroupLayer:async()=>(await t.e(150).then(t.bind(t,60150))).default,TileLayer:async()=>(await Promise.all([t.e(3406),t.e(7607),t.e(9623),t.e(680),t.e(2977)]).then(t.bind(t,42977))).default,UnknownLayer:async()=>(await t.e(4917).then(t.bind(t,74917))).default,UnsupportedLayer:async()=>(await t.e(8101).then(t.bind(t,88101))).default,VectorTileLayer:async()=>(await Promise.all([t.e(242),t.e(969),t.e(8853)]).then(t.bind(t,47409))).default,VoxelLayer:async()=>(await Promise.all([t.e(1118),t.e(1080)]).then(t.bind(t,11080))).default,WFSLayer:async()=>(await Promise.all([t.e(5927),t.e(6657)]).then(t.bind(t,38566))).default,WMSLayer:async()=>(await t.e(4227).then(t.bind(t,84227))).default,WMTSLayer:async()=>(await t.e(3154).then(t.bind(t,3154))).default,WebTileLayer:async()=>(await t.e(9200).then(t.bind(t,89200))).default}},32698:(e,a,t)=>{t.d(a,{M4:()=>s,Yv:()=>l,ht:()=>i,wk:()=>o});var r=t(35995),n=t(7575);function i(e){return{origin:"portal-item",url:(0,r.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function l(e){const a=(0,r.mN)(e.itemUrl);return{origin:"portal-item",messages:[],writtenProperties:[],url:a,portal:e.portal||n.Z.getDefault(),portalItem:e,verifyItemRelativeUrls:a?{rootPath:a.path,writtenUrls:[]}:null,blockedRelativeUrls:[]}}function o(e){return{origin:"web-map",url:(0,r.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function s(e,a){const t=(0,r.mN)(e.itemUrl);return{origin:"web-map",messages:[],writtenProperties:[],url:t,portal:e.portal||n.Z.getDefault(),portalItem:e,initiator:a,verifyItemRelativeUrls:t?{rootPath:t.path,writtenUrls:[]}:null,blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}}}},41226:(e,a,t)=>{t.d(a,{T:()=>n});var r=t(76200);async function n(e,a){const{data:t}=await(0,r.Z)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return t}},81359:(e,a,t)=>{t.d(a,{w:()=>l});var r=t(42265),n=t(10064),i=t(66660);function l(e){if(r.default.apiKey&&(0,i.r)(e.portal.url))throw new n.Z("save-api-key-utils:api-key-not-supported","Saving is not supported on ".concat(e.portal.url," when using an api key"))}}}]);
//# sourceMappingURL=2224.5f14a28c.chunk.js.map