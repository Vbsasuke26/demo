"use strict";(self.webpackChunkob_app=self.webpackChunkob_app||[]).push([[159],{3182:(e,t,s)=>{s.d(t,{S6:()=>h,nd:()=>r,u_:()=>i});class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;this.geometry=e,this.attributes=t,this.centroid=s,this.objectId=i,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new i(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function h(e){var t;return!(null===(t=e.geometry)||void 0===t||null===(t=t.coords)||void 0===t||!t.length)}class r extends i{}},6908:(e,t,s)=>{s.d(t,{Z:()=>i});class i{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new i;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},80457:(e,t,s)=>{s.d(t,{Z:()=>i});class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.lengths=null!==e&&void 0!==e?e:[],this.coords=null!==t&&void 0!==t?t:[],this.hasIndeterminateRingOrder=s}static fromRect(e){const[t,s,h,r]=e,l=h-t,n=r-s;return new i([5],[t,s,l,0,0,n,-l,0,0,-n])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const i=this.lengths[s];for(let s=0;s<i;s++)e(this.coords[2*(s+t)],this.coords[2*(s+t)+1]);t+=i}}clone(e){return e?(e.set(this.coords),new i(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new i(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}}}]);
//# sourceMappingURL=159.512b4ac0.chunk.js.map