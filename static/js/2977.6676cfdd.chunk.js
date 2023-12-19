"use strict";(self.webpackChunkob_app=self.webpackChunkob_app||[]).push([[2977],{70116:(e,t,i)=>{var l;i.d(t,{Y:()=>l}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(l||(l={}))},42977:(e,t,i)=>{i.r(t),i.d(t,{default:()=>B});var l,r=i(27366),a=i(76200),n=i(10064),o=i(93002),s=i(97642),c=i(66978),h=i(35995),p=i(49861),u=i(89125),d=(i(63780),i(93169),i(38511)),v=i(69912),f=i(31201),y=i(78952),m=i(30651),_=i(27961),b=i(17775),g=i(6741),w=i(11936),S=i(6693),T=i(46671),O=i(6061),C=i(29598),D=i(71684),A=i(56811),L=i(18870),I=i(25899),M=i(45948),Z=i(83690),x=i(77990);const U=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let P=l=class extends((0,S.h)((0,A.M)((0,L.x)((0,b.Z)((0,g.O)((0,O.q)((0,C.I)((0,w.Y)((0,s.R)((0,D.Q)((0,_.V)((0,T.N)(m.Z))))))))))))){constructor(){super(...arguments),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(c.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}get attributionDataUrl(){var e;const t=null===(e=this.parsedUrl)||void 0===e?void 0:e.path.toLowerCase();return t?this._getDefaultAttribution(this._getMapName(t)):null}readSpatialReference(e,t){var i;return(e=e||(null===(i=t.tileInfo)||void 0===i?void 0:i.spatialReference))&&y.Z.fromJSON(e)}writeSublayers(e,t,i,l){if(!this.loaded||!e)return;const r=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray(),a=[],n={writeSublayerStructure:!1,...l};r.forEach((e=>{const t=e.write({},n);a.push(t)})),a.some((e=>Object.keys(e).length>1))&&(t.layers=a)}get tileServers(){var e;return this._getDefaultTileServers(null===(e=this.parsedUrl)||void 0===e?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>(0,h.mN)(e).path)):null}fetchTile(e,t,i){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:r}=l,n=this.getTileUrl(e,t,i),o={responseType:"image",signal:r,query:{...this.refreshParameters}};return(0,a.Z)(n,o).then((e=>e.data))}async fetchImageBitmapTile(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:n}=r;if(this.fetchTile!==l.prototype.fetchTile){const l=await this.fetchTile(e,t,i,r);return(0,Z.V)(l,e,t,i,n)}const o=this.getTileUrl(e,t,i),s={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:c}=await(0,a.Z)(o,s);return(0,Z.V)(c,e,t,i,n)}getTileUrl(e,t,i){var l,r;const a=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,n=(0,h.B7)({...null===(l=this.parsedUrl)||void 0===l?void 0:l.query,blankTile:!a&&null,...this.customParameters,token:this.apiKey}),o=this.tileServers;return"".concat(o&&o.length?o[t%o.length]:null===(r=this.parsedUrl)||void 0===r?void 0:r.path,"/tile/").concat(e,"/").concat(t,"/").concat(i).concat(n?"?"+n:"")}loadAll(){return(0,o.G)(this,(e=>{e(this.allSublayers)}))}_fetchService(e){return new Promise(((t,i)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new n.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new n.Z("tile-layer:undefined-url","layer's url is not defined");const l=(0,I.Qc)(this.parsedUrl.path);if(null!=l&&"ImageServer"===l.serverType)throw new n.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,a.Z)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t,i)})).then((t=>{let i=this.url;if(t.ssl&&(i=this.url=i.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,I.M8)(i))return this._fetchServerVersion(i,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,t){if(!(0,I.B5)(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,a.Z)(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new n.Z("tile-layer:version-not-available")}))}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t?t[2]:void 0}_getDefaultAttribution(e){if(null==e)return null;let t;e=e.toLowerCase();for(let i=0,l=U.length;i<l;i++)if(t=U[i],t.toLowerCase().includes(e))return(0,h.hF)("//static.arcgis.com/attribution/"+t);return null}_getDefaultTileServers(e){if(null==e)return[];const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),i=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||i?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[k]}};(0,r._)([(0,p.Cb)({readOnly:!0})],P.prototype,"attributionDataUrl",null),(0,r._)([(0,p.Cb)({type:["show","hide","hide-children"]})],P.prototype,"listMode",void 0),(0,r._)([(0,p.Cb)({json:{read:!0,write:!0}})],P.prototype,"blendMode",void 0),(0,r._)([(0,p.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],P.prototype,"isReference",void 0),(0,r._)([(0,p.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],P.prototype,"operationalLayerType",void 0),(0,r._)([(0,p.Cb)({type:Boolean})],P.prototype,"resampling",void 0),(0,r._)([(0,p.Cb)()],P.prototype,"sourceJSON",void 0),(0,r._)([(0,p.Cb)({type:y.Z})],P.prototype,"spatialReference",void 0),(0,r._)([(0,d.r)("spatialReference",["spatialReference","tileInfo"])],P.prototype,"readSpatialReference",null),(0,r._)([(0,p.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],P.prototype,"path",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],P.prototype,"sublayers",void 0),(0,r._)([(0,f.c)("sublayers",{layers:{type:[x.Z]}})],P.prototype,"writeSublayers",null),(0,r._)([(0,p.Cb)({json:{read:!1,write:!1}})],P.prototype,"popupEnabled",void 0),(0,r._)([(0,p.Cb)()],P.prototype,"tileServers",null),(0,r._)([(0,u.p)("tileServers")],P.prototype,"castTileServers",null),(0,r._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],P.prototype,"type",void 0),(0,r._)([(0,p.Cb)(M.HQ)],P.prototype,"url",void 0),P=l=(0,r._)([(0,v.j)("esri.layers.TileLayer")],P);const k=Symbol("default-fetch-tile");P.prototype.fetchTile[k]=!0;const B=P},17775:(e,t,i)=>{i.d(t,{Z:()=>p});var l=i(27366),r=(i(59486),i(49861)),a=(i(25243),i(63780),i(93169),i(38511)),n=i(69912),o=i(22824),s=i(53184),c=i(34810),h=i(78952);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){var e,t;null===(e=this.tilemapCache)||void 0===e||null===(t=e.destroy)||void 0===t||t.call(e)}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,i){var l;const r=null===(l=t.capabilities)||void 0===l?void 0:l.includes("Tilemap");let{minLOD:a,maxLOD:n,minScale:h,maxScale:p}=t;if(null==a&&null==n&&0!==h&&0!==p){const e=e=>Math.round(1e4*e)/1e4;h=e(h||t.tileInfo.lods[0].scale),p=e(p||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const i of t.tileInfo.lods){const t=e(i.scale);a=t>=h?i.level:a,n=t>=p?i.level:n}}if(r)return new c.y({layer:this,minLOD:a,maxLOD:n});if(t.tileInfo){const e=new o.Z;return e.read(t.tileInfo,i),new s.Z(e,a,n)}return null}};return(0,l._)([(0,r.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,l._)([(0,r.Cb)()],t.prototype,"minScale",void 0),(0,l._)([(0,a.r)("service","minScale")],t.prototype,"readMinScale",null),(0,l._)([(0,r.Cb)()],t.prototype,"maxScale",void 0),(0,l._)([(0,a.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,l._)([(0,r.Cb)({type:h.Z})],t.prototype,"spatialReference",void 0),(0,l._)([(0,r.Cb)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,l._)([(0,r.Cb)({type:o.Z})],t.prototype,"tileInfo",void 0),(0,l._)([(0,r.Cb)()],t.prototype,"tilemapCache",void 0),(0,l._)([(0,a.r)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,l._)([(0,r.Cb)()],t.prototype,"version",void 0),t=(0,l._)([(0,n.j)("esri.layers.mixins.ArcGISCachedService")],t),t}},53184:(e,t,i)=>{i.d(t,{Z:()=>a});var l=i(10064),r=i(66978);class a{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.lods[e.lods.length-1].level;this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){var l;const r=null===(l=this.tileInfo)||void 0===l?void 0:l.lodAt(e);return!r||e<this.minLOD||e>this.maxLOD?"unavailable":r.cols&&r.rows?i>=r.cols[0]&&i<=r.cols[1]&&t>=r.rows[0]&&t<=r.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,a){await(0,r.Yn)(a);const n=this.getAvailability(e,t,i);if("unavailable"===n)throw new l.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return n}async fetchAvailabilityUpsample(e,t,i,l,a){await(0,r.Yn)(a),l.level=e,l.row=t,l.col=i;const n=this.tileInfo;return n.updateTileInfo(l),this.fetchAvailability(e,t,i,a).catch((e=>{if((0,r.D_)(e))throw e;if(n.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,a);throw e}))}}},34810:(e,t,i)=>{i.d(t,{y:()=>O});var l,r=i(27366),a=i(76200),n=i(7138),o=i(70116),s=i(10064),c=i(42537),h=i(16054),p=i(27546),u=i(66978),d=i(94172),v=i(99346),f=i(35995),y=i(49861),m=(i(25243),i(63780)),_=(i(93169),i(69912)),b=i(87960),g=i(84652),w=i(18722);class S{constructor(e){this._validateJSON(e);const{location:t,data:i}=e;this.location=Object.freeze((0,g.d9)(t));const l=this.location.width,r=this.location.height;let a=!0,n=!0;const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e<=w.c8?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(l*r/32));let s=0;for(let c=0;c<i.length;c++){const e=c%32;i[c]?(n=!1,o[s]|=1<<e):a=!1,31===e&&++s}n?(this._availability="unavailable",this.byteSize=40):a?(this._availability="available",this.byteSize=40):(this._availability=o,this.byteSize=40+(0,w.Xw)(o))}getAvailability(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),l=i%32,r=i>>5,a=this._availability;return r<0||r>a.length?"unknown":a[r]&1<<l?"available":"unavailable"}static fromDefinition(e,t){const i=e.service.request||a.Z,{row:l,col:r,width:n,height:o}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(function(e){var t;let i;if(null!==(t=e.service.tileServers)&&void 0!==t&&t.length){const t=e.service.tileServers;i="".concat(t&&t.length?t[e.row%t.length]:e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}else i="".concat(e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height);const l=e.service.query;return l&&(i="".concat(i,"?").concat(l)),i}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:l,left:r,width:n,height:o},valid:!0,data:(0,m.a9)(n*o,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==l||e.location.left!==r||e.location.width!==n||e.location.height!==o))throw new s.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:l,left:r,width:n,height:o}});return S.fromJSON(e)}))}static fromJSON(e){return Object.freeze(new S(e))}_validateJSON(e){if(null===e||void 0===e||!e.location)throw new s.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new s.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new s.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new s.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new s.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function T(e){return"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}let O=l=class extends n.Z{constructor(e){super(e),this._pendingTilemapRequests={},this.request=a.Z,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new h.z(2*o.Y.MEGABYTES),this.addHandles([(0,d.YP)((()=>{const{layer:e}=this;return[null===e||void 0===e?void 0:e.parsedUrl,null===e||void 0===e?void 0:e.tileServers,null===e||void 0===e?void 0:e.apiKey,null===e||void 0===e?void 0:e.customParameters]}),(()=>this._initializeTilemapDefinition()),d.nn)])}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}fetchTilemap(e,t,i,l){var r;if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new s.Z("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")));const a=this._tmpTilemapDefinition,n=this._tilemapFromCache(e,t,i,a);if(n)return Promise.resolve(n);const o=null===(r=l)||void 0===r?void 0:r.signal;return l={...l,signal:null},new Promise(((e,t)=>{(0,u.fu)(o,(()=>t((0,u.zE)())));const i=T(a);let r=this._pendingTilemapRequests[i];if(!r){r=S.fromDefinition(a,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>{delete this._pendingTilemapRequests[i]};this._pendingTilemapRequests[i]=r,r.then(e,e)}r.then(e,t)}))}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,l){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new s.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this.fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof S){const r=l.getAvailability(t,i);if("unavailable"===r)throw new s.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return r}if((0,u.D_)(l))throw l;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,l,r){l.level=e,l.row=t,l.col=i;const a=this.layer.tileInfo;a.updateTileInfo(l);const n=this.fetchAvailability(e,t,i,r).catch((e=>{if((0,u.D_)(e))throw e;if(a.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,r,n),n}async _fetchAvailabilityUpsamplePrefetch(e,t,i,r,a,n){if(!this._prefetchingEnabled||null==e)return;const o="prefetch-".concat(e);if(this.hasHandles(o))return;const s=new AbortController;n.then((()=>s.abort()),(()=>s.abort()));let h=!1;const p=(0,c.kB)((()=>{h||(h=!0,s.abort())}));if(this.addHandles(p,o),await(0,v.MU)(10,s.signal).catch((()=>{})),h||(h=!0,this.removeHandles(o)),(0,u.Hc)(s))return;const d=new b.f(e,t,i,r),f={...a,signal:s.signal},y=this.layer.tileInfo;for(let c=0;l._prefetches.length<l._maxPrefetch&&y.upsampleTile(d);++c){const e=this.fetchAvailability(d.level,d.row,d.col,f);l._prefetches.push(e);const t=()=>{l._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:l}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:(0,f.B7)({...t.query,...l,token:null!==i&&void 0!==i?i:null===(e=t.query)||void 0===e?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const r=T(l);return this._tilemapCache.get(r)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,l)=>!!e._tilemapFromCache(t,i,l,e._tmpTilemapDefinition)}}};O._maxPrefetch=4,O._prefetches=new p.Z({initialSize:l._maxPrefetch}),(0,r._)([(0,y.Cb)({constructOnly:!0})],O.prototype,"layer",void 0),(0,r._)([(0,y.Cb)({constructOnly:!0})],O.prototype,"minLOD",void 0),(0,r._)([(0,y.Cb)({constructOnly:!0})],O.prototype,"maxLOD",void 0),(0,r._)([(0,y.Cb)({constructOnly:!0})],O.prototype,"request",void 0),(0,r._)([(0,y.Cb)({constructOnly:!0})],O.prototype,"size",void 0),O=l=(0,r._)([(0,_.j)("esri.layers.support.TilemapCache")],O)}}]);
//# sourceMappingURL=2977.6676cfdd.chunk.js.map