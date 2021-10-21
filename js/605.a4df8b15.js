"use strict";(self["webpackChunkdggs_webgis"]=self["webpackChunkdggs_webgis"]||[]).push([[605],{4605:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var s=r(3673);function a(e,t,r,a,o,n){const l=(0,s.up)("Map"),i=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(i,{class:"q-pt-lg"},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(l)])])),_:1})}var o=r(2323);const n={class:"q-pa-md"},l={class:"row items-start items-center q-gutter-md q-mb-md"},i={class:"q-mb-md"},c={id:"openmap",ref:"map-gis",class:"map-container"};function p(e,t,r,a,p,d){return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",l,[(0,s._)("div",null,"Map zoom: "+(0,o.zw)(p.mapZoom),1),(0,s._)("div",null," Map center: "+(0,o.zw)(d.mapCenterComputed[0].toFixed(5))+", "+(0,o.zw)(d.mapCenterComputed[1].toFixed(5)),1)]),(0,s._)("div",i," DGGS layer seleted: "+(0,o.zw)(d.layerSelectedDGGSComputed),1),(0,s._)("div",c,null,512)])}r(71),r(2167),r(9708);var d=r(921),u=r.n(d),m=r(3081),h=r(5140),g=r(7879),y=r(2411),w=r(4070),f=r(7263),S=r(5344),C=r(2553),Z=r(3489),v=r(5090),G=r(9455),b=r(1314);const x={name:"Map",props:{layer:Object},components:{},data(){return{map:null,mapCenter:[2791191.1823448315,8117240.098736058],mapZoom:7,layers:[],dggsLayersFeatures:[],extent:null}},watch:{layerSelectedRasterComputed(e,t){this.createMap()},layersSelectedVectorComputed(e,t){this.createMap()},layerSelectedDGGSComputed(e,t){console.log("DGGS changed"),this.createMap()}},mounted(){this.createMap()},methods:{async createMap(){document.getElementById("openmap").innerHTML="",this.layers=[],this.dggsLayersFeatures=[];const e=new g.Z({source:new y.Z({url:this.layerSelectedRasterComputed.url,attributions:this.layerSelectedRasterComputed.attributions})});this.layers.push(e);const t=new Z.ZP({fill:new v.Z({color:"rgba(255, 255, 255, 0.6)"}),stroke:new G.Z({color:"#319FD3",width:1}),text:new b.Z({font:"12px Calibri,sans-serif",fill:new v.Z({color:"#000"}),stroke:new G.Z({color:"#fff",width:3})})});if(this.layersSelectedVectorComputed.length>0&&this.layersSelectedVectorComputed.forEach((e=>{let r=new f.Z({source:new S.Z({url:e.url,format:new C.Z}),style:function(e){return t.getText().setText(e.get("name")),t}});this.layers.push(r)})),this.layerSelectedDGGSComputed.length>0){var r=this.layerSelectedDGGSComputed;await Promise.all(r.map((async e=>{var r=[];try{r=await this.$axios.get("https://dggs-api-bozea3cspa-ew.a.run.app/dggs-api/collections/"+e.id+"/zones",{params:{resolution:3,limit:10},headers:{"Content-Type":"application/json"}})}catch(i){console.log("error ",i.message)}let s=r.data.features;var a=[];s.forEach((e=>{let t=e.geometry[0],r=u().h3ToFeature(t);r.properties=e.properties,r.properties.id=e.id,r.properties.links=e.links,a.push(r)}));let o={type:"FeatureCollection",features:a};this.dggsLayersFeatures=o;const n=new S.Z({features:(new C.Z).readFeatures(o,{featureProjection:"EPSG:3857"})}),l=new f.Z({source:n,style:function(e){return t.getText().setText(e.get("id")),t}});this.extent=l,this.layers.push(l)})))}if(this.map=new m.Z({target:this.$refs["map-gis"],layers:this.layers,view:new h.ZP({center:this.mapCenter,zoom:this.mapZoom,constrainResolution:!0})}),this.extent){var s=this.extent.getSource().getExtent();this.map.getView().fit(s,this.map.getSize())}this.map.on("moveend",(e=>{let t=e.map,r=t.getView().getCenter(),s=t.getView().getZoom();this.mapCenter=r,this.mapZoom=s}))}},computed:{mapCenterComputed:function(){return(0,w.bU)(this.mapCenter)},layersSelectedVectorComputed:function(){return this.$store.state.layers.layersSelectedVector},layerSelectedRasterComputed:function(){return this.$store.state.layers.layerSelectedRaster},layerSelectedDGGSComputed:function(){return this.$store.state.layers.layersSelectedDGGS}}};x.render=p,x.__scopeId="data-v-b7cb2664";const M=x,_={name:"Web-GIS",components:{Map:M},data(){return{}},mounted(){},methods:{},computed:{layersSelectedVectorComputed:function(){return this.$store.state.layers.layersSelectedVector},layerSelectedRasterComputed:function(){return this.$store.state.layers.layerSelectedRaster}}};var D=r(4379),V=r(7518),z=r.n(V);_.render=a;const F=_;z()(_,"components",{QPage:D.Z})}}]);