(function(b){var e="a. b. c. d.".split(" "),c=function(k,l,m,j){return{url:["http://{S}tile.stamen.com/",k,"/{Z}/{X}/{Y}.",l].join(""),type:l,subdomains:e.slice(),minZoom:m,maxZoom:j,attribution:['Map tiles by <a href="http://stamen.com/">Stamen Design</a>, ','under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ','Data by <a href="http://openstreetmap.org/">OpenStreetMap</a>, ','under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'].join("")}},i={toner:c("toner","png",0,20),terrain:c("terrain","jpg",4,18),watercolor:c("watercolor","jpg",1,18),"trees-cabs-crime":{url:"http://{S}.tiles.mapbox.com/v3/stamen.trees-cabs-crime/{Z}/{X}/{Y}.png",type:"png",subdomains:"a b c d".split(" "),minZoom:11,maxZoom:18,extent:[{lat:37.853,lon:-122.577},{lat:37.684,lon:-122.313}],attribution:['Design by Shawn Allen at <a href="http://stamen.com/">Stamen</a>.','Data courtesy of <a href="http://fuf.net/">FuF</a>,','<a href="http://www.yellowcabsf.com/">Yellow Cab</a>','&amp; <a href="http://sf-police.org/">SFPD</a>.'].join(" ")}};h("toner",["hybrid","labels","lines","background","lite"]);h("terrain",["background"]);h("terrain",["labels","lines"],"png");d("toner",["2010"]);d("toner",["2011","2011-lines","2011-labels","2011-lite"]);["toner","toner-hybrid","toner-labels","toner-lines","toner-background","toner-lite"].forEach(function(j){i[j].retina=true;i[j].attribution=['Map tiles by <a href="http://stamen.com/">Stamen Design</a>, ','under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ','Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, ','under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'].join("")});b.stamen=b.stamen||{};b.stamen.tile=b.stamen.tile||{};b.stamen.tile.providers=i;b.stamen.tile.getProvider=a;function d(m,j){var n=a(m);for(var l=0;l<j.length;l++){var k=[m,j[l]].join("-");i[k]=c(k,n.type,n.minZoom,n.maxZoom);i[k].deprecated=true}}function h(n,j,m){var o=a(n);for(var l=0;l<j.length;l++){var k=[n,j[l]].join("-");i[k]=c(k,m||o.type,o.minZoom,o.maxZoom)}}function a(j){if(j in i){var k=i[j];if(k.deprecated&&console&&console.warn){console.warn(j+" is a deprecated style; it will be redirected to its replacement. For performance improvements, please change your reference.")}return k}else{throw"No such provider ("+j+")"}}if(typeof MM==="object"){var f=(typeof MM.Template==="function")?MM.Template:MM.TemplatedMapProvider;MM.StamenTileLayer=function(j){var k=a(j);this._provider=k;MM.Layer.call(this,new f(k.url,k.subdomains));this.provider.setZoomRange(k.minZoom,k.maxZoom);this.attribution=k.attribution};MM.StamenTileLayer.prototype={setCoordLimits:function(j){var k=this._provider;if(k.extent){j.coordLimits=[j.locationCoordinate(k.extent[0]).zoomTo(k.minZoom),j.locationCoordinate(k.extent[1]).zoomTo(k.maxZoom)];return true}else{return false}}};MM.extend(MM.StamenTileLayer,MM.Layer)}if(typeof L==="object"){L.StamenTileLayer=L.TileLayer.extend({initialize:function(l,k){var n=a(l),j=n.url.replace(/({[A-Z]})/g,function(o){return o.toLowerCase()}),m=L.Util.extend({},k,{minZoom:n.minZoom,maxZoom:n.maxZoom,subdomains:n.subdomains,scheme:"xyz",attribution:n.attribution});L.TileLayer.prototype.initialize.call(this,j,m)}});L.stamenTileLayer=function(j,k){return new L.StamenTileLayer(j,k)}}if(typeof OpenLayers==="object"){function g(j){return j.replace(/({.})/g,function(k){return"$"+k.toLowerCase()})}OpenLayers.Layer.Stamen=OpenLayers.Class(OpenLayers.Layer.OSM,{initialize:function(n,m){var p=a(n),l=p.url,j=p.subdomains,k=[];if(l.indexOf("{S}")>-1){for(var o=0;o<j.length;o++){k.push(g(l.replace("{S}",j[o])))}}else{k.push(g(l))}m=OpenLayers.Util.extend({numZoomLevels:p.maxZoom,buffer:0,transitionEffect:"resize",tileOptions:{crossOriginKeyword:null},attribution:p.attribution},m);return OpenLayers.Layer.OSM.prototype.initialize.call(this,n,k,m)}})}if(typeof google==="object"&&typeof google.maps==="object"){google.maps.StamenMapType=function(k){var l=a(k),j=l.subdomains;return google.maps.ImageMapType.call(this,{getTileUrl:function(s,p){var o=1<<p,q=s.x%o,m=(q<0)?q+o:q,r=s.y,n=(p+m+r)%j.length;return l.url.replace("{S}",j[n]).replace("{Z}",p).replace("{X}",m).replace("{Y}",r)},tileSize:new google.maps.Size(256,256),name:k,minZoom:l.minZoom,maxZoom:l.maxZoom})};google.maps.StamenMapType.prototype=new google.maps.ImageMapType("_")}})(typeof exports==="undefined"?this:exports);