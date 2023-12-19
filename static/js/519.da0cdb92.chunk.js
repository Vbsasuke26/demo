"use strict";(self.webpackChunkob_app=self.webpackChunkob_app||[]).push([[519,3139],{28458:(e,a,r)=>{r.d(a,{L:()=>n});var t=r(41226);class n{constructor(){this._serviceMetadatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const n=await(0,t.T)(e,a);return this._serviceMetadatas.set(e,n),n}}},84076:(e,a,r)=>{r.d(a,{w:()=>y});var t=r(19545),n=r(76200),i=r(10064),l=r(66978),o=r(25899),c=r(7575),s=r(98995);async function y(e,a){var r,y;const L=(0,o.Qc)(e);if(!L)throw new i.Z("invalid-url","Invalid scene service url");const f={...a,sceneServerUrl:L.url.path,layerId:null!==(r=L.sublayer)&&void 0!==r?r:void 0};if(null!==(y=f.sceneLayerItem)&&void 0!==y||(f.sceneLayerItem=await async function(e){const a=(await u(e)).serviceItemId;if(!a)return null;const r=new s.default({id:a,apiKey:e.apiKey}),i=await async function(e){const a=null===t.id||void 0===t.id?void 0:t.id.findServerInfo(e.sceneServerUrl);if(null!==a&&void 0!==a&&a.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.Z)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(v){(0,l.r9)(v)}return null}(e);null!=i&&(r.portal=new c.Z({url:i}));try{return r.load({signal:e.signal})}catch(p){return(0,l.r9)(p),null}}(f)),null==f.sceneLayerItem)return d(f.sceneServerUrl.replace("/SceneServer","/FeatureServer"),f);const v=await async function(e){let{sceneLayerItem:a,signal:r}=e;if(!a)return null;try{const e=(await a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const t=new s.default({portal:e.portal,id:e.id});return await t.load(),t}catch(t){return(0,l.r9)(t),null}}(f);if(null===v||void 0===v||!v.url)throw new i.Z("related-service-not-found","Could not find feature service through portal item relationship");const p=await d(v.url,f);return p.portalItem=v,p}async function u(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.Z)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const r=(0,o.Qc)(e);if(!r)throw new i.Z("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,l=a.layerId;if(null==l)return{serverUrl:t};const c=u(a),s=e=>{const r={query:{f:"json"},responseType:"json",authMode:e,signal:a.signal};return(0,n.Z)(t,r)},y=s("anonymous").catch((()=>s("no-prompt"))),[d,L]=await Promise.all([y,c]),f=null===L||void 0===L?void 0:L.layers,v=d.data&&d.data.layers;if(!Array.isArray(v))throw new Error("expected layers array");if(Array.isArray(f)){for(let n=0;n<Math.min(f.length,v.length);n++)if(f[n].id===l)return{serverUrl:t,layerId:v[n].id}}else if(null!=l&&l<v.length)return{serverUrl:t,layerId:v[l].id};throw new Error("could not find matching associated sublayer")}},20519:(e,a,r)=>{r.d(a,{k:()=>G,populateOperationalLayers:()=>y});var t=r(40281),n=(r(93169),r(28458)),i=r(19610),l=r(98995);function o(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var c=r(43139),s=r(21371);async function y(e,a,r){if(!a)return;const t=[];for(const i of a)t.push(h(i,r));const n=await Promise.allSettled(t);for(const i of n)"rejected"===i.status||i.value&&e.add(i.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},L={ArcGISFeatureLayer:"FeatureLayer"},f={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},v={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},p={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},m={...v,LinkChartLayer:"LinkChartLayer"},w={...p},I={...S};async function h(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&("GroupLayer"===a.layerType?await G(t,a,r):T(a)?function(e,a,r){a.itemId&&(e.portalItem=new l.default({id:a.itemId,portal:null===r||void 0===r?void 0:r.portal}),e.when((()=>{var t,n;const i=t=>{var n;const i=t.layerId;A(t,e,a,i,r);const l=null===(n=a.featureCollection)||void 0===n||null===(n=n.layers)||void 0===n?void 0:n[i];l&&t.read(l,r)};null!==(t=e.layers)&&void 0!==t&&t.forEach(i),null===(n=e.tables)||void 0===n||n.forEach(i)})))}(t,a,r.context):g(a)&&await async function(e,a,r){var t;const n=i.T.FeatureLayer,l=await n(),o=a.featureCollection,c=null===o||void 0===o?void 0:o.showLegend,s=null===o||void 0===o||null===(t=o.layers)||void 0===t?void 0:t.map(((t,n)=>{const i=new l;i.read(t,r);const o={...r,ignoreDefaults:!0};return A(i,e,a,n,o),null!=c&&i.read({showLegend:c},o),i}));e.layers.addMany(null!==s&&void 0!==s?s:[])}(t,a,r.context)),await(0,s.y)(t,r.context),t}(await b(e,a),e,a)}async function b(e,a){var r,t;const s=a.context,y=M(s);let u=e.layerType||e.type;!u&&(null===a||void 0===a?void 0:a.defaultLayerType)&&(u=a.defaultLayerType);const d=y[u];let L=d?i.T[d]:i.T.UnknownLayer;if(T(e)){const a=null===s||void 0===s?void 0:s.portal;if(e.itemId){const r=new l.default({id:e.itemId,portal:a});await r.load();const t=(await(0,c.v)(r,new n.L)).className||"UnknownLayer";L=i.T[t]}}else"ArcGISFeatureLayer"===u?function(e){return o(e,"notes")}(e)||function(e){return o(e,"markup")}(e)?L=i.T.MapNotesLayer:function(e){return o(e,"route")}(e)?L=i.T.RouteLayer:g(e)&&(L=i.T.GroupLayer):null!==(r=e.wmtsInfo)&&void 0!==r&&r.url&&e.wmtsInfo.layerIdentifier?L=i.T.WMTSLayer:"WFS"===u&&"2.0.0"!==(null===(t=e.wfsInfo)||void 0===t?void 0:t.version)&&(L=i.T.UnsupportedLayer);return L()}function g(e){var a,r;return"ArcGISFeatureLayer"===e.layerType&&!T(e)&&(null!==(a=null===(r=e.featureCollection)||void 0===r||null===(r=r.layers)||void 0===r?void 0:r.length)&&void 0!==a?a:0)>1}function T(e){return"Feature Collection"===e.type}function M(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=f;break;case"ground":a=d;break;case"tables":a=L;break;default:a=u}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=I;break;case"tables":a=w;break;default:a=m}break;default:switch(e.layerContainerType){case"basemap":a=S;break;case"tables":a=p;break;default:a=v}}return a}async function G(e,a,r){const n=new t.Z,i=y(n,Array.isArray(a.layers)?a.layers:[],r);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(l){e.destroy();for(const e of n)e.destroy();throw l}}catch(l){throw l}}function A(e,a,r,t,n){var i,l;e.read({id:"".concat(a.id,"-sublayer-").concat(t),visibility:null===(i=null===(l=r.visibleLayers)||void 0===l?void 0:l.includes(t))||void 0===i||i},n)}},19610:(e,a,r)=>{r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await r.e(165).then(r.bind(r,60165))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(1118),r.e(2846),r.e(7066),r.e(8162),r.e(6505)]).then(r.bind(r,66505))).default,CSVLayer:async()=>(await r.e(8435).then(r.bind(r,98435))).default,DimensionLayer:async()=>(await r.e(7406).then(r.bind(r,47406))).default,ElevationLayer:async()=>(await r.e(6816).then(r.bind(r,46816))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,64326))).default,GeoJSONLayer:async()=>(await r.e(5064).then(r.bind(r,5064))).default,GeoRSSLayer:async()=>(await r.e(54).then(r.bind(r,70054))).default,GroupLayer:async()=>(await r.e(8048).then(r.bind(r,18048))).default,ImageryLayer:async()=>(await Promise.all([r.e(3406),r.e(7607),r.e(5345),r.e(436),r.e(9672),r.e(9108),r.e(9652)]).then(r.bind(r,39652))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(5345),r.e(394),r.e(436),r.e(9672),r.e(527),r.e(9108),r.e(3064)]).then(r.bind(r,43064))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(1118),r.e(6251)]).then(r.bind(r,56251))).default,KMLLayer:async()=>(await r.e(3838).then(r.bind(r,13838))).default,LineOfSightLayer:async()=>(await r.e(3724).then(r.bind(r,33724))).default,LinkChartLayer:async()=>(await Promise.all([r.e(3406),r.e(5026),r.e(4054),r.e(5281),r.e(6143),r.e(5957),r.e(6326)]).then(r.bind(r,46326))).default,MapImageLayer:async()=>(await Promise.all([r.e(3406),r.e(7607),r.e(9623),r.e(680),r.e(9583)]).then(r.bind(r,19583))).default,MapNotesLayer:async()=>(await r.e(3513).then(r.bind(r,33513))).default,MediaLayer:async()=>(await r.e(8839).then(r.bind(r,88839))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(3406),r.e(7213),r.e(6741)]).then(r.bind(r,98701))).default,OpenStreetMapLayer:async()=>(await r.e(1656).then(r.bind(r,31656))).default,OrientedImageryLayer:async()=>(await r.e(706).then(r.bind(r,60706))).default,PointCloudLayer:async()=>(await Promise.all([r.e(1118),r.e(9532)]).then(r.bind(r,9532))).default,RouteLayer:async()=>(await Promise.all([r.e(729),r.e(7637)]).then(r.bind(r,67637))).default,SceneLayer:async()=>(await Promise.all([r.e(1118),r.e(2846),r.e(7066),r.e(8162),r.e(5838)]).then(r.bind(r,5838))).default,StreamLayer:async()=>(await r.e(2668).then(r.bind(r,2668))).default,SubtypeGroupLayer:async()=>(await r.e(150).then(r.bind(r,60150))).default,TileLayer:async()=>(await Promise.all([r.e(3406),r.e(7607),r.e(9623),r.e(680),r.e(2977)]).then(r.bind(r,42977))).default,UnknownLayer:async()=>(await r.e(4917).then(r.bind(r,74917))).default,UnsupportedLayer:async()=>(await r.e(8101).then(r.bind(r,88101))).default,VectorTileLayer:async()=>(await Promise.all([r.e(242),r.e(969),r.e(8853)]).then(r.bind(r,47409))).default,VoxelLayer:async()=>(await Promise.all([r.e(1118),r.e(1080)]).then(r.bind(r,11080))).default,WFSLayer:async()=>(await Promise.all([r.e(5927),r.e(6657)]).then(r.bind(r,38566))).default,WMSLayer:async()=>(await r.e(4227).then(r.bind(r,84227))).default,WMTSLayer:async()=>(await r.e(3154).then(r.bind(r,3154))).default,WebTileLayer:async()=>(await r.e(9200).then(r.bind(r,89200))).default}},97827:(e,a,r)=>{r.d(a,{$O:()=>i,CD:()=>y,Ok:()=>l,Q4:()=>o,XX:()=>c,_Y:()=>s,bS:()=>n});var t=r(84076);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function i(e,a,r){var t,i;if(null==(null===(t=e)||void 0===t?void 0:t.layers)||null==(null===(i=e)||void 0===i?void 0:i.tables)){var l,o;const t=await r.fetchServiceMetadata(a);(e=e||{}).layers=e.layers||(null===t||void 0===t||null===(l=t.layers)||void 0===l?void 0:l.map(n)),e.tables=e.tables||(null===t||void 0===t||null===(o=t.tables)||void 0===o?void 0:o.map(n))}return e}function l(e){const a=e.layers;if(null!==a&&void 0!==a&&a.length)return a[0].id;const r=e.tables;return null!==r&&void 0!==r&&r.length?r[0].id:null}function o(e){var a,r,t,n;return(null!==(a=null===e||void 0===e||null===(r=e.layers)||void 0===r?void 0:r.length)&&void 0!==a?a:0)+(null!==(t=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==t?t:0)}function c(e){var a;const r=[];return null!==e&&void 0!==e&&null!==(a=e.layers)&&void 0!==a&&a.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&r.push(e.id)})),r}function s(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"OrientedImageryLayer"===a})).map((e=>{let{id:a}=e;return a}))}async function y(e,a,r){var i,l;if(null===e||void 0===e||!e.url)return null!==(i=a)&&void 0!==i?i:{};if(null!==(l=a)&&void 0!==l||(a={}),!a.layers){var o;const t=await r.fetchServiceMetadata(e.url);a.layers=null===(o=t.layers)||void 0===o?void 0:o.map(n)}const{serverUrl:c,portalItem:s}=await(0,t.w)(e.url,{sceneLayerItem:e}).catch((()=>({serverUrl:null,portalItem:null})));if(null==c)return a.tables=[],a;if(!a.tables&&s){const e=await s.fetchData();if(null!==e&&void 0!==e&&e.tables)a.tables=e.tables.map(n);else{var y;const e=await r.fetchServiceMetadata(c);a.tables=null===e||void 0===e||null===(y=e.tables)||void 0===y?void 0:y.map(n)}}if(a.tables)for(const t of a.tables)t.url="".concat(c,"/").concat(t.id);return a}},43139:(e,a,r)=>{r.d(a,{fromItem:()=>u,v:()=>d});var t=r(10064),n=r(84076),i=r(28458),l=r(37933),o=r(19610),c=r(98995),s=r(97827),y=r(73117);async function u(e){!e.portalItem||e.portalItem instanceof c.default||(e={...e,portalItem:new c.default(e.portalItem)});const a=await async function(e){await e.load();const a=new i.L;return async function(e){const a=e.className,r=o.T[a];return{constructor:await r(),properties:e.properties}}(await d(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function d(e,a){switch(e.type){case"Map Service":return async function(e,a){return await async function(e,a){return(await a.fetchServiceMetadata(e.url)).tileInfo}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Feature Service":return async function(e,a){const r=await L(e,a);if("object"==typeof r){const e={};return null!=r.id&&(e.layerId=r.id),{className:r.className||"FeatureLayer",properties:e}}return{className:"GroupLayer"}}(e,a);case"Feature Collection":return async function(e){await e.load();const a=(0,y._$)(e,"Map Notes"),r=(0,y._$)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,y._$)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,s.Q4)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return async function(e,a){const r=await L(e,a,(async()=>{try{var r;if(!e.url)return[];const{serverUrl:t}=await(0,n.w)(e.url,{sceneLayerItem:e}),i=await a.fetchServiceMetadata(t);return null!==(r=null===i||void 0===i?void 0:i.tables)&&void 0!==r?r:[]}catch{return[]}}));if("object"==typeof r){var t;const n={};let i;if(null!=r.id?(n.layerId=r.id,i="".concat(e.url,"/layers/").concat(r.id)):i=e.url,null!==(t=e.typeKeywords)&&void 0!==t&&t.length)for(const a of Object.keys(l.fb))if(e.typeKeywords.includes(a))return{className:l.fb[a]};const o=await a.fetchServiceMetadata(i);return{className:l.fb[null===o||void 0===o?void 0:o.layerType]||"SceneLayer",properties:n}}if(!1===r){const r=await a.fetchServiceMetadata(e.url);if("Voxel"===(null===r||void 0===r?void 0:r.layerType))return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Image Service":return async function(e,a){var r,t,n,i;await e.load();const l=null!==(r=null===(t=e.typeKeywords)||void 0===t?void 0:t.map((e=>e.toLowerCase())))&&void 0!==r?r:[];if(l.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(l.includes("tiled imagery"))return{className:"ImageryTileLayer"};const o=await e.fetchData(),c=null===o||void 0===o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===c)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===c)return{className:"ImageryLayer"};const s=await a.fetchServiceMetadata(e.url),y=null===(n=s.cacheType)||void 0===n?void 0:n.toLowerCase(),u=null===(i=s.capabilities)||void 0===i?void 0:i.toLowerCase().includes("tilesonly");return"map"===y||u?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Group Layer":return{className:"GroupLayer"};default:throw new t.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function L(e,a,r){const t=e.url;if(!t||/\/\d+$/.test(t))return{};await e.load();let n=await e.fetchData();if("Feature Service"===e.type){const e=await(0,s.$O)(n,t,a),r=f(e);if("object"==typeof r){const a=(0,s.XX)(e),t=(0,s._Y)(e);r.className=null!=r.id&&a.includes(r.id)?"SubtypeGroupLayer":null!=r.id&&null!==t&&void 0!==t&&t.includes(r.id)?"OrientedImageryLayer":"FeatureLayer"}return r}if("Scene Service"===e.type&&(n=await(0,s.CD)(e,n,a)),(0,s.Q4)(n)>0)return f(n);const i=await a.fetchServiceMetadata(t);return r&&(i.tables=await r()),f(i)}function f(e){return 1===(0,s.Q4)(e)&&{id:(0,s.Ok)(e)}}},41226:(e,a,r)=>{r.d(a,{T:()=>n});var t=r(76200);async function n(e,a){const{data:r}=await(0,t.Z)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return r}}}]);
//# sourceMappingURL=519.da0cdb92.chunk.js.map