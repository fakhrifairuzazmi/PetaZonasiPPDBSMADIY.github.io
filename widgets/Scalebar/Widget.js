// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/Scalebar":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/query ../kernel ../lang ../domUtils ../units ../SpatialReference ../WKIDUnitConversion ../geometry/Point ../geometry/ScreenPoint ../geometry/Polyline ../geometry/geodesicUtils ../geometry/webMercatorUtils ../geometry/screenUtils ../geometry/normalizeUtils dojo/i18n!../nls/jsapi".split(" "),function(r,
m,n,l,u,q,B,x,C,t,D,v,w,b,f,k,y,F,G,E,z,H,I,J){r=r(null,{declaredClass:"esri.dijit.Scalebar",map:null,mapUnit:null,scalebarUnit:null,unitsDictionary:[],domNode:null,screenPt1:null,screenPt2:null,localStrings:J.widgets.scalebar,constructor:function(a,c){this.metricScalebar=q.create("div",{innerHTML:"\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLine esriScalebarMetricLine'\x3e\x3c/div\x3e"});
this.englishScalebar=q.create("div",{innerHTML:"\x3cdiv class\x3d'esriScalebarLine esriScalebarEnglishLine'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e"});this.domNode=q.create("div");a=a||{};if(a.map){if(a.scalebarUnit){if("english"!==a.scalebarUnit&&"metric"!==a.scalebarUnit&&"dual"!==a.scalebarUnit){console.error("scalebar unit only accepts english or metric or dual");return}this.scalebarUnit=
a.scalebarUnit}else this.scalebarUnit="english";if(a.scalebarStyle){if("ruler"!==a.scalebarStyle&&"line"!==a.scalebarStyle){console.error("scalebar style must be ruler or line");return}this.scalebarStyle=a.scalebarStyle}else this.scalebarStyle="ruler";this.background=a.background;switch(this.scalebarUnit){case "english":"ruler"===this.scalebarStyle&&(this.englishScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.englishScalebar);break;case "metric":"ruler"===this.scalebarStyle&&(this.metricScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.metricScalebar);break;case "dual":this.domNode.appendChild(this.metricScalebar),this.domNode.appendChild(this.englishScalebar)}this.map=a.map;c?c.appendChild(this.domNode):(this.map.container.appendChild(this.domNode),a.attachTo?u.add(this.domNode,"scalebar_"+a.attachTo):u.add(this.domNode,"scalebar_bottom-left"));u.add(this.domNode,"esriScalebar");if(this.map.loaded)this._getDistance(),this._checkBingMaps();else var g=l.connect(this.map,"onLoad",this,function(){l.disconnect(g);
g=null;this._getDistance();this._checkBingMaps()});this._mapOnPan=l.connect(this.map,"onPan",this,this._getDistance);this._mapOnExtentChange=l.connect(this.map,"onExtentChange",this,this._getDistance);n.forEach(this.map.layerIds,function(e,h){"esri.virtualearth.VETiledLayer"===this.map.getLayer(e).declaredClass&&l.connect(this.map.getLayer(e),"onVisibilityChange",m.hitch(this,function(d){this._checkBingMaps()}))},this);this._mapOnLayerAdd=l.connect(this.map,"onLayerAdd",m.hitch(this,function(e){"esri.virtualearth.VETiledLayer"===
e.declaredClass&&l.connect(e,"onVisibilityChange",m.hitch(this,function(h){this._checkBingMaps()}));this._checkBingMaps()}));this._mapOnLayerRemove=l.connect(this.map,"onLayerRemove",m.hitch(this,this._checkBingMaps))}else console.error("scalebar: unable to find the 'map' property in parameters")},hide:function(){this._hidden=!0;w.hide(this.domNode)},show:function(){this._hidden=!1;w.show(this.domNode)},destroy:function(){l.disconnect(this._mapOnPan);l.disconnect(this._mapOnExtentChange);l.disconnect(this._mapOnLayerAdd);
l.disconnect(this._mapOnLayerRemove);this.hide();this.map=null;q.destroy(this.domNode)},_checkBingMaps:function(){u.contains(this.domNode,"scalebar_bottom-left")&&(x.set(this.domNode,"left","25px"),n.forEach(this.map.layerIds,function(a,c){"esri.virtualearth.VETiledLayer"===this.map.getLayer(a).declaredClass&&this.map.getLayer(a).visible&&(a="95px",this.map._mapParams.nav&&(a="115px"),x.set(this.domNode,"left",a))},this))},_getDistance:function(a){a=this.map._clip?this.map._getAvailExtent():a||this.map.extent;
var c=B.position(this.domNode,!0).y-this.map.position.y;c=c>this.map.height?this.map.height:c;c=0>c?0:c;var g=new F(0,c);c=new F(this.map.width,c);this.mapUnit="esriDecimalDegrees";var e=H.toMapPoint(a,this.map.width,this.map.height,g),h=H.toMapPoint(a,this.map.width,this.map.height,c);g=new y(a.xmin,(a.ymin+a.ymax)/2,this.map.spatialReference);c=new y(a.xmax,(a.ymin+a.ymax)/2,this.map.spatialReference);this.map._clip&&(h=this.map.spatialReference._getInfo(),e=new y(h.valid[0],0,this.map.spatialReference),
h=new y(h.valid[1],0,this.map.spatialReference));if(3857===this.map.spatialReference.wkid||102100===this.map.spatialReference.wkid||102113===this.map.spatialReference.wkid||this.map.spatialReference.wkt&&-1!=this.map.spatialReference.wkt.indexOf("WGS_1984_Web_Mercator"))e=z.webMercatorToGeographic(e,!0),h=z.webMercatorToGeographic(h,!0),g=z.webMercatorToGeographic(g,!0),c=z.webMercatorToGeographic(c,!0);else if(v.isDefined(k[this.map.spatialReference.wkid])||this.map.spatialReference.wkt&&0===this.map.spatialReference.wkt.indexOf("PROJCS")){this.mapUnit=
"linearUnit";a=Math.abs(a.xmax-a.xmin);if(v.isDefined(k[this.map.spatialReference.wkid]))var d=k.values[k[this.map.spatialReference.wkid]];else{d=this.map.spatialReference.wkt;var p=d.lastIndexOf(",")+1;var A=d.lastIndexOf("]]");d=parseFloat(d.substring(p,A))}a*=d;p=a/1609;d=a/1E3;a/=1E3}"esriDecimalDegrees"===this.mapUnit&&(d=E.isSupported(this.map.spatialReference)?this.map.spatialReference.wkid:4326,a=new G(new f({wkid:d})),a.addPath([e,h]),e=I._straightLineDensify(a,10),a=E.geodesicLengths([e],
b.KILOMETERS)[0],e=new G(new f({wkid:d})),e.addPath([g,c]),g=I._straightLineDensify(e,10),E.geodesicLengths([g],b.KILOMETERS),p=a/1.609,d=a);"english"===this.scalebarUnit?this._getScaleBarLength(p,"mi"):"metric"===this.scalebarUnit?this._getScaleBarLength(d,"km"):"dual"===this.scalebarUnit&&(this._getScaleBarLength(p,"mi"),this._getScaleBarLength(d,"km"))},_getScaleBarLength:function(a,c){var g=this.map._getFrameWidth();a=50*a/(this.map._clip&&0<g?g:this.map.width);g=0;var e=c;.1>a&&("mi"===c?(a*=
5280,e="ft"):"km"===c&&(a*=1E3,e="m"));for(;1<=a;)a/=10,g++;if(.5<a){var h=1;var d=.5}else.3<a?(h=.5,d=.3):.2<a?(h=.3,d=.2):.15<a?(h=.2,d=.15):.1<=a&&(h=.15,d=.1);c=h/a>=a/d?d:h;this._drawScaleBar(c/a*50,Math.pow(10,g)*c,e)},_drawScaleBar:function(a,c,g){var e=2*Math.round(a);if("mi"===g||"ft"===g){this.englishScalebar.style.width=e+"px";a=t(".esriScalebarFirstNumber",this.englishScalebar);var h=t(".esriScalebarSecondNumber",this.englishScalebar);var d=t(".esriScalebarMetricLineBackground",this.englishScalebar)}else this.metricScalebar.style.width=
e+"px",a=t(".esriScalebarFirstNumber",this.metricScalebar),h=t(".esriScalebarSecondNumber",this.metricScalebar),d=t(".esriScalebarMetricLineBackground",this.metricScalebar);n.forEach(d,function(p,A){p.style.width=e-2+"px"},this);n.forEach(a,function(p,A){p.innerHTML=c},this);n.forEach(h,function(p,A){p.innerHTML="esriUnknown"!==this.mapUnit?2*c+this.localStrings[g]:2*c+"Unknown Unit"},this)}});C("extend-esri")&&m.setObject("dijit.Scalebar",r,D);return r})},"widgets/Scalebar/_build-generate_module":function(){define(["dojo/text!./css/style.css",
"dojo/i18n!./nls/strings"],function(){})},"url:widgets/Scalebar/css/style.css":".jimu-rtl .jimu-widget-scalebar .scaleLabelDiv .esriScalebarLabel:first-child{right: -3% !important; left: auto !important;};.jimu-rtl .jimu-widget-scalebar .scaleLabelDiv .esriScalebarFirstNumber{right: 45% !important; left: auto;}.jimu-rtl .jimu-widget-scalebar .scaleLabelDiv .esriScalebarSecondNumber{right: 95%; left: auto;}.jimu-widget-scalebar .ruler-style {position: relative; top: -5px !important; left: 0 !important;}.jimu-widget-scalebar .esriScalebarLine.esriScalebarEnglishLine{box-shadow: inset 1px 1px #fff, inset -1px 1px #fff, 0px -1px 0px 0px #fff, -1px -1px 0px 0px #fff, 1px -1px 0px 0px #fff;}.jimu-widget-scalebar .esriScalebarLine.esriScalebarMetricLine {box-shadow: inset 1px 0px #fff, inset -1px -1px #fff, 0px 1px 0px 0px #fff, 1px 0px 0px 0px #fff, -1px 0px 0px 0px #fff;}.jimu-widget-scalebar .esriScaleLabelDiv,.jimu-widget-scalebar .scaleLabelDiv{text-shadow: -1px -1px 0px #fff, 1px -1px 0px #fff, -1px 1px 0px #fff, 1px 1px 0px #fff;}.jimu-widget-scalebar .esriScalebarRuler {box-shadow: 0px -1px 0px #fff, 1px 0px 0px #fff, 0px 1px 0px #fff, -1px 0px 0px #fff;}.jimu-widget-scalebar .scalebar-line{color:#666; height: auto;}.jimu-widget-scalebar .hide{display: none !important;}",
"*now":function(r){r(['dojo/i18n!*preload*widgets/Scalebar/nls/Widget*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/Deferred jimu/BaseWidget jimu/utils jimu/portalUtils jimu/dijit/Message esri/dijit/Scalebar dojo/on esri/geometry/scaleUtils dojo/dom-style dojo/query dojo/NodeList-dom".split(" "),function(r,m,n,l,u,q,B,x,C,t,D,v,w){return r([u],{baseClass:"jimu-widget-scalebar",name:"Scalebar",scalebar:null,moveTopOnActive:!1,startup:function(){this.inherited(arguments);var b=m.clone(this.config.scalebar);b.map=this.map;this.position&&(void 0!==this.position.top&&
void 0!==this.position.left?b.attachTo="top-left":void 0!==this.position.top&&void 0!==this.position.right?b.attachTo="top-right":void 0!==this.position.bottom&&void 0!==this.position.left?b.attachTo="bottom-left":void 0!==this.position.bottom&&void 0!==this.position.right&&(b.attachTo="bottom-right"));this._processConfig(b).then(m.hitch(this,function(f){f.scalebarStyle||(f.scalebarStyle="line");this.scalebar=new C(f);this.scalebar.show();this.domNode.appendChild(this.scalebar.domNode);this._hackForhighlight();
"ruler"===f.scalebarStyle?n.addClass(this.scalebar.domNode,"ruler-style"):n.removeClass(this.scalebar.domNode,"ruler-style");var k={left:"auto",right:"auto",top:"auto",bottom:"auto",width:"auto"};m.mixin(k,this.position);v.set(this.domNode,q.getPositionStyle(k));this._isNumberStyle()&&(this._createNumberStyleContainer(),this._showNumberScale());this._set508Label();setTimeout(m.hitch(this,function(){this.domNode&&(v.set(this.domNode,q.getPositionStyle(k)),this.own(t(this.map,"extent-change",m.hitch(this,
this.onExtentChange))))}),1E3)}),m.hitch(this,function(f){new x({message:f.message||f})}))},_processConfig:function(b){var f=new l;this._isNumberStyle()&&(b.scalebarStyle="line");b.scalebarUnit?f.resolve(b):B.getUnits(this.appConfig.portalUrl).then(m.hitch(this,function(k){b.scalebarUnit="english"===k?"english":"metric";f.resolve(b)}));return f.promise},_hackForhighlight:function(){w(".esriScalebar",this.domNode).removeClass("esriScalebar")},onClose:function(){this.scalebar.destroy()},_createNumberStyleContainer:function(){for(var b=
"top-right bottom-right top-center bottom-center bottom-left top-left".split(" "),f=0,k=b.length;f<k;f++)w(".scalebar_"+b[f],this.domNode).addClass("hide");this.numberStyleContainer=n.create("div",{"class":"number-style"},this.domNode)},_isNumberStyle:function(){return"number"===this.config.scalebar.scalebarStyle},onExtentChange:function(){this._set508Label();this._refreshTooltip();this._isNumberStyle()&&this._showNumberScale()},_getScaleString:function(){var b=D.getScale(this.map);isNaN(b)?b="":
(b=q.localizeNumberByFieldInfo(b,{format:{places:this.config.scalebar.decimalPlaces,digitSeparator:this.config.scalebar.addSeparator}}),b=window.isRTL?b+":1":"1:"+b);return b},_showNumberScale:function(){this.numberStyleContainer.innerHTML=q.sanitizeHTML("\x3cdiv class\x3d'scaleLabelDiv scalebar-line'\x3e"+this._getScaleString()+"\x3c/div\x3e")},_set508Label:function(b){var f,k=this._getScaleString();b?f=b:k&&(f=this.nls.scale+" "+k);n.setAttr(this.domNode,"aria-label",f)},_refreshTooltip:function(){q.isInNavMode()&&
n.hasClass(document.activeElement,this.baseClass)&&(this.domNode.blur(),this.domNode.focus())}})});