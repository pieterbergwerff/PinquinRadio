(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),s=a.n(i),l=a(2);const c={stations:[...[{id:"indie",name:"Indie",url:{mp3:"//streams.pinguinradio.com/PinguinRadio192.mp3"},colors:["#F08A05","#ffffff"],color:"black"},{id:"classics",name:"Classics",url:{mp3:"//streams.pinguinradio.com/PinguinClassics192.mp3"},colors:["#FFDD08","#ffffff"],color:"black"},{id:"rock",name:"On the rocks",url:{mp3:"//streams.pinguinradio.com/PinguinOnTheRocks192.mp3"},colors:["#000","#E20D18"],color:"white"},{id:"pop",name:"Pop",url:{mp3:"//samcloud.spacial.com/api/listen?sid=98586&m=sc&rid=174409"},colors:["#F088B6","#fff"],color:"black"},{id:"grooves",name:"Grooves",url:{mp3:"//samcloud.spacial.com/api/listen?sid=98587&m=sc&rid=174412"},colors:["#A3A535","#fff"],color:"black"},{id:"pluche",name:"Pluche",url:{mp3:"//samcloud.spacial.com/api/listen?sid=98569&m=sc&rid=174384"},colors:["#E30613","#fff"],color:"black"},{id:"aardschok",name:"Aardschok",url:{mp3:"//streams.pinguinradio.com/Aardschok192.mp3"},colors:["#000","#7F3484"],color:"white"},{id:"fiesta",name:"Fiesta",url:{mp3:"//19293.live.streamtheworld.com/SP_R2292843_SC"},colors:["#5D514C","#fff"],color:"black"},{id:"blues",name:"Blues",url:{mp3:"//samcloud.spacial.com/api/listen?sid=93462&m=sc&rid=168006"},colors:["#000","#1B9DD9"],color:"white"},{id:"world",name:"World music",url:{mp3:"//samcloud.spacial.com/api/listen?sid=98570&m=sc&rid=174387"},colors:["#41A535","#fff"],color:"black"},{id:"showcase",name:"Showcase",url:{mp3:"//samcloud.spacial.com/api/listen?sid=110690&m=sc&rid=190799"},colors:["#000","#015CA8"],color:"white"}]],idExists(e=""){const t=this.stations.filter(t=>t.id===e);return!(!t||!t.length)},getById(e=""){const t=this.stations.filter(t=>t.id===e);return!(!t||!t.length)&&t[0]},getNameById(e=""){const t=this.getById(e);return!!t&&t.name},getUrlById(e=""){const t=this.getById(e);return!!t&&t.url},getMp3UrlById(e=""){const t=this.getUrlById(e);return!!t&&t.mp3}};var r=a(29),d=a(5),u=a(1),m=a.n(u);function p(e=[]){const t=m.a.get("stats")||{},a=Object(d.a)({},e);return a.stations=a.stations.map(e=>{const a=t[e.id]||0;return e=Object(d.a)({},e,{ranking:a})}).sort((e,t)=>e.ranking>t.ranking?-1:1),a}function f(e=!1){m.a.set("playerState",e)}function g({defaultSelectedStation:e="indie"}){e=c.idExists(e)?e:"indie";const t=!(!m.a.get("selectedStationId")||!c.idExists(m.a.get("selectedStationId")))&&m.a.get("selectedStationId");t&&(e=t);const a=Object(n.useState)(e),o=Object(l.a)(a,2),i=o[0],s=o[1];return{selectedStation:c.getById(i),setSelectedStation:(e="")=>{if(!c.idExists(e)||i===e)return!1;m.a.set("selectedStationId",e),s(e),function(e){let t=Object(d.a)({},m.a.get("stats")||{});"number"!==typeof t[e]&&(t[e]=0),t[e]++,m.a.set("stats",t)}(e)}}}function y({defaultSelectedStation:e="indie"}={}){const t=g({defaultSelectedStation:e}),a=t.selectedStation,n=t.setSelectedStation,o=function({name:e,url:t}){const a=Object(r.a)({src:t.mp3,autoPlay:!1}),n=Object(l.a)(a,4),o=n[0],i=n[1],s=n[2],c=n[3];return{audio:o,play:()=>{i.paused&&(s.play(),f(!0))},pause:()=>{i.paused||(s.pause(),f(!1))},audioState:i,volume:(e=null)=>{if(!e)return!!c.current&&c.current.volume;s.volume(e)},controls:s}}(a),i=o.audio,s=o.audioState,d=o.pause,u=o.play,m=o.volume,y=o.controls;return{audio:i,pause:d,play:u,audioState:s,stations:p(c),selectedStation:a,setSelectedStation:n,volume:m,controls:y}}var h=a(4);function S(e){let t=e.size,a=void 0===t?64:t,n=e.color,i=Object(h.a)(e,["size","color"]);return o.a.createElement("span",{style:{color:n,fontSize:a+"px"}},o.a.createElement("i",Object.assign({className:"fas fa-pause-circle"},i)))}function b(e){let t=e.size,a=void 0===t?64:t,n=e.color,i=Object(h.a)(e,["size","color"]);return o.a.createElement("span",{style:{color:n,fontSize:a+"px"}},o.a.createElement("i",Object.assign({className:"fas fa-play-circle"},i)))}function E(e={}){let t=e.defaultIsPlaying,a=void 0!==t&&t,i=e.style,s=void 0===i?{}:i,c=e.onChange,r=void 0===c?null:c,u=e.play,m=void 0===u?"play":u,p=e.pause,f=void 0===p?"pause":p,g=Object(h.a)(e,["defaultIsPlaying","style","onChange","play","pause"]);const y=Object(n.useState)(a),S=Object(l.a)(y,2),b=S[0],E=S[1];Object(n.useEffect)(()=>{"function"===typeof r&&r(b)},[r,b]);return s=Object(d.a)({cursor:"pointer"},s),o.a.createElement("span",Object.assign({style:s,onClick:()=>E(!b)},g),b?f:m)}a(24),a(25),a(26);function k(){const e=y(),t=e.audio,a=e.pause,n=e.play,i=e.stations,s=e.selectedStation,c=e.setSelectedStation,r=e.audioState,d=Object(l.a)(s.colors,2),u=d[0],m=d[1],p={color:s.color,WebkitTransition:"all 0.3s ease-in-out",transition:"all 0.3s ease-in-out",backgroundImage:"linear-gradient(\n    to top,\n    ".concat(u,",\n    ").concat(m,"\n  ")};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"PinquinRadio",style:p},o.a.createElement("main",{className:"container player"},o.a.createElement("img",{src:"images/logos/".concat(s.id,".svg"),style:{marginRight:"16px",height:"100%"},alt:"logo"}),o.a.createElement("div",{style:{marginLeft:"16px",color:"black"}},o.a.createElement("div",{style:{marginBottom:"8px",height:"100%"}},o.a.createElement(E,{style:{height:"100%"},defaultIsPlaying:!r.paused,onChange:e=>{e?n():a()},play:o.a.createElement(b,{color:u,style:{height:"100%"}}),pause:o.a.createElement(S,{style:{height:"100%"},color:u})})),o.a.createElement("div",null,o.a.createElement("small",null,"Now playing"),o.a.createElement("br",null),"Pinquin ",s.name))),o.a.createElement("ul",{className:"stations"},i.stations.map(e=>{const t="StationsListKey".concat(e.id);return o.a.createElement("li",{key:t,onClick:()=>{c(e.id)}},o.a.createElement("div",{style:{width:"200px",display:"flex",flexDirection:"row",alignItems:"center"}},o.a.createElement("img",{src:"images/logos/".concat(e.id,".svg"),height:"75",style:{borderRadius:"25px",marginRight:"16px"},alt:"logo"}),o.a.createElement("div",null,e.name)))}),o.a.createElement("li",{onClick:()=>{const e=()=>{const t=i.stations[Math.floor(Math.random()*i.stations.length)];return t.id===s.id?e():t},t=e();c(t.id)}},"I feel lucky"))),t)}const v=document.getElementById("root");s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),v)},8:function(e,t,a){e.exports=a(27)}},[[8,1,2]]]);
//# sourceMappingURL=main.0698d2ff.chunk.js.map