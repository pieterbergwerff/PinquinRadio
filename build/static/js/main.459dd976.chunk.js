(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(38)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(11),i=n.n(r),s=n(3),l=n(4),c=n(7),d=n(8);const u={stations:[...[{id:"indie",name:"Indie",url:{mp3:"//streams.pinguinradio.com/PinguinRadio192.mp3"},colors:["#F08A05","#E20D18"],color:"black"},{id:"classics",name:"Classics",url:{mp3:"//streams.pinguinradio.com/PinguinClassics192.mp3"},colors:["#FFDD08","#E20D18"],color:"black"},{id:"rock",name:"On the rocks",url:{mp3:"//streams.pinguinradio.com/PinguinOnTheRocks192.mp3"},colors:["#000","#E20D18"],color:"white"},{id:"pop",name:"Pop",url:{mp3:"//samcloud.spacial.com/api/listen?sid=98586&m=sc&rid=174409"},colors:["#F088B6","#E20D18"],color:"black"},{id:"grooves",name:"Grooves",url:{mp3:"//samcloud.spacial.com/api/listen?sid=98587&m=sc&rid=174412"},colors:["#A3A535","#E20D18"],color:"black"},{id:"pluche",name:"Pluche",url:{mp3:"//samcloud.spacial.com/api/listen?sid=98569&m=sc&rid=174384"},colors:["#E30613","#E20D18"],color:"black"},{id:"aardschok",name:"Aardschok",url:{mp3:"//streams.pinguinradio.com/Aardschok192.mp3"},colors:["#000","#7F3484"],color:"white"},{id:"fiesta",name:"Fiesta",url:{mp3:"//19293.live.streamtheworld.com/SP_R2292843_SC"},colors:["#5D514C","#E20D18"],color:"black"},{id:"blues",name:"Blues",url:{mp3:"//samcloud.spacial.com/api/listen?sid=93462&m=sc&rid=168006"},colors:["#000","#1B9DD9"],color:"white"},{id:"world",name:"World music",url:{mp3:"//samcloud.spacial.com/api/listen?sid=98570&m=sc&rid=174387"},colors:["#41A535","#E20D18"],color:"black"},{id:"showcase",name:"Showcase",url:{mp3:"//samcloud.spacial.com/api/listen?sid=110690&m=sc&rid=190799"},colors:["#000","#015CA8"],color:"white"}]],idExists(e=""){const t=this.stations.filter(t=>t.id===e);return!(!t||!t.length)},getById(e=""){const t=this.stations.filter(t=>t.id===e);return!(!t||!t.length)&&t[0]},getNameById(e=""){const t=this.getById(e);return!!t&&t.name},getUrlById(e=""){const t=this.getById(e);return!!t&&t.url},getMp3UrlById(e=""){const t=this.getUrlById(e);return!!t&&t.mp3}};var p=n(12),m=n(40),g=n(2),x=n(1),b=n.n(x);function h(e=[]){let t=Object(g.a)({},e);return t.stations=t.stations.map(e=>{const t=function(e){const t=Object(g.a)({},b.a.get("stationsDurations")||{});if(!t[e])return!1;const n=t[e].duration;return{ms:n,toStr:()=>(function(e){var t=e/1e3,n=parseInt(t/3600);n=String(n).padStart(2,"0"),t%=3600;var o=parseInt(t/60);return o=String(o).padStart(2,"0"),t%=60,t=Math.round(t),t=String(t).padStart(2,"0"),n+":"+o+":"+t})(n)}}(e.id).ms;return e.totalDuration=t||0,e}).sort((e,t)=>e.totalDuration>t.totalDuration?-1:1),t}function f(e=!1){b.a.set("playerState",e)}function E(e,t=""){const n=Object(g.a)({},b.a.get("stationsDurations")||{}),o=()=>{const e=!!Object.keys(n).length&&Object.keys(n);if(!e)return!1;e.forEach(e=>{let t=Object(g.a)({},n[e]),o=t.start,a=t.duration;if(o>0){const t=(new Date).getTime()-o;n[e].duration=a+t,n[e].start=0}}),b.a.set("stationsDurations",n)};"play"===t?(o(),n[e]=Object(g.a)({},n[e]||{start:(new Date).getTime(),duration:0},{start:(new Date).getTime()}),b.a.set("stationsDurations",Object(g.a)({},n))):"pause"===t&&o()}function y({id:e,name:t,url:n}){const o=Object(m.a)({src:n.mp3,autoPlay:!1}),a=Object(s.a)(o,4),r=a[0],i=a[1],l=a[2],c=a[3],d=(e=null)=>{if(!e)return!!c.current&&c.current.volume;l.volume(e),function(e=-1){const t=b.a.get("volume")||100;e>-1&&e<101&&e!==t&&b.a.set("volume",e)}(Math.round(100*e))};return Object(p.a)(()=>{d((b.a.get("volume")||100)/100)}),{audio:r,play:()=>{i.paused&&(l.play(),f(!0),E(e,"play"))},pause:()=>{i.paused||(l.pause(),f(!1),E(e,"pause"))},audioState:i,volume:d,controls:l}}function w({defaultSelectedStation:e="indie"}){e=u.idExists(e)?e:"indie";const t=!(!b.a.get("selectedStationId")||!u.idExists(b.a.get("selectedStationId")))&&b.a.get("selectedStationId");t&&(e=t);const n=Object(o.useState)(e),a=Object(s.a)(n,2),r=a[0],i=a[1];return{selectedStation:u.getById(r),setSelectedStation:(e="")=>{if(!u.idExists(e)||r===e)return!1;b.a.set("selectedStationId",e),i(e),function(e){let t=Object(g.a)({},b.a.get("stats")||{});"number"!==typeof t[e]&&(t[e]=0),t[e]++,b.a.set("stats",t)}(e)}}}function k(e){let t=e.size,n=void 0===t?64:t,o=e.color,r=Object(l.a)(e,["size","color"]);return a.a.createElement("span",{style:{color:o,fontSize:n+"px"}},a.a.createElement("i",Object.assign({className:"fas fa-pause-circle"},r)))}function v(e){let t=e.size,n=void 0===t?64:t,o=e.color,r=Object(l.a)(e,["size","color"]);return a.a.createElement("span",{style:{color:o,fontSize:n+"px"}},a.a.createElement("i",Object.assign({className:"fas fa-play-circle"},r)))}function S(e={}){let t=e.defaultIsPlaying,n=void 0!==t&&t,r=e.style,i=void 0===r?{}:r,c=e.onChange,d=void 0===c?null:c,u=e.play,p=void 0===u?"play":u,m=e.pause,x=void 0===m?"pause":m,b=Object(l.a)(e,["defaultIsPlaying","style","onChange","play","pause"]);const h=Object(o.useState)(n),f=Object(s.a)(h,2),E=f[0],y=f[1];Object(o.useEffect)(()=>{"function"===typeof d&&d(E)},[d,E]);return i=Object(g.a)({cursor:"pointer"},i),a.a.createElement("span",Object.assign({style:i,onClick:()=>y(!E)},b),E?x:p)}n(33),n(34),n(35);function O(){const e=Object(c.a)(["\n  color: ",";\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  background-image: linear-gradient(\n    to top,\n    ",",\n    ","\n  );\n"]);return O=function(){return e},e}function j(){const e=Object(c.a)(["\n  width: 100%;\n  -webkit-appearance: none;\n  background: transparent;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n\n  :focus {\n    outline: none;\n  }\n\n  ::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n  ::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 8.4px;\n    cursor: pointer;\n    animate: 0.2s;\n    box-shadow: 1px 1px 1px ",",\n      0px 0px 1px #0d0d0d;\n    background: ",";\n    border-radius: 1.3px;\n    border: 0.2px solid #010101;\n  }\n  ::-webkit-slider-thumb {\n    box-shadow: 1px 1px 1px ",",\n      0px 0px 1px #0d0d0d;\n    border: 1px solid ",";\n    height: 36px;\n    width: 16px;\n    border-radius: 3px;\n    background: ",";\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -14px;\n  }\n  :focus::-webkit-slider-runnable-track {\n    ","\n  }\n  ::-moz-range-track {\n    width: 100%;\n    height: 8.4px;\n    cursor: pointer;\n    animate: 0.2s;\n    box-shadow: 1px 1px 1px ",",\n      0px 0px 1px #0d0d0d;\n    background: ",";\n    border-radius: 1.3px;\n    border: 0.2px solid #010101;\n  }\n  ::-moz-range-thumb {\n    box-shadow: 1px 1px 1px ",",\n      0px 0px 1px #0d0d0d;\n    border: 1px solid ",";\n    height: 36px;\n    width: 16px;\n    border-radius: 3px;\n    background: ",";\n    cursor: pointer;\n  }\n  ::-ms-track {\n    width: 100%;\n    height: 8.4px;\n    cursor: pointer;\n    animate: 0.2s;\n    background: transparent;\n    border-color: transparent;\n    border-width: 16px 0;\n    color: transparent;\n  }\n  ::-ms-fill-lower {\n    background: #2a6495;\n    border: 0.2px solid #010101;\n    border-radius: 2.6px;\n    box-shadow: 1px 1px 1px ",",\n      0px 0px 1px #0d0d0d;\n  }\n  ::-ms-fill-upper {\n    background: ",";\n    border: 0.2px solid #010101;\n    border-radius: 2.6px;\n    box-shadow: 1px 1px 1px ",",\n      0px 0px 1px #0d0d0d;\n  }\n  ::-ms-thumb {\n    box-shadow: 1px 1px 1px ",",\n      0px 0px 1px #0d0d0d;\n    border: 1px solid ",";\n    height: 36px;\n    width: 16px;\n    border-radius: 3px;\n    background: ",";\n    cursor: pointer;\n  }\n  :focus::-ms-fill-lower {\n    background: ",";\n  }\n  :focus::-ms-fill-upper {\n    ","\n  }\n"]);return j=function(){return e},e}const D=d.a.input(j(),e=>e.color2||"#000",e=>e.color1||"#3071a9",e=>e.color2||"#000",e=>e.color2||"#000",e=>e.color1||"#fff","",e=>e.color2||"#000",e=>e.color1||"#3071a9",e=>e.color2||"#000",e=>e.color2||"#000",e=>e.color1||"#fff",e=>e.color2||"#000",e=>e.color1||"#3071a9",e=>e.color2||"#000",e=>e.color2||"#000",e=>e.color2||"#000",e=>e.color1||"#fff",e=>e.color1||"#3071a9","");function I(e){let t=e.volume,n=e.color1,o=void 0===n?"#EFEFEF":n,r=Object(l.a)(e,["volume","color1"]);return a.a.createElement(D,Object.assign({},r,{value:Math.round(100*t()),type:"range",min:"0",max:"100",onChange:e=>t(e.target.value/100),color1:o}))}const B=d.a.div(O(),e=>e.color||"black",e=>e.color1,e=>e.color2),C=({wait:e=5e3}={})=>{const t=Object(o.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(o.useEffect)(()=>{let t;const n=()=>{if(a)return!1;clearTimeout(t),t=setTimeout(()=>{clearTimeout(t),r(!1)},e),r(!0)},o=["mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];return o.forEach(e=>window.addEventListener(e,n,!1)),()=>{o.forEach(e=>window.removeEventListener(e,n))}},[a,e]),a};function P(){const e=C({wait:5e3}),t=function({defaultSelectedStation:e="indie"}={}){const t=w({defaultSelectedStation:e}),n=t.selectedStation,o=t.setSelectedStation,a=t.selectedStationTotalAirtimeStr,r=y(n),i=r.audio,s=r.audioState,l=r.pause,c=r.play,d=r.volume,p=r.controls;return{audio:i,pause:l,play:c,audioState:s,stations:h(u),selectedStation:n,setSelectedStation:o,volume:d,controls:p,selectedStationTotalAirtimeStr:a}}(),n=t.audio,o=t.pause,r=t.play,i=t.stations,l=t.selectedStation,c=t.setSelectedStation,d=t.audioState,p=t.volume,m=Object(s.a)(l.colors,2),g=m[0],x=m[1];return a.a.createElement(a.a.Fragment,null,e||d.paused?a.a.createElement(B,{color:l.color,color1:g,color2:x,className:"PinquinRadio"},a.a.createElement("main",{className:"container player"},a.a.createElement("img",{src:"images/logos/".concat(l.id,".svg"),style:{marginRight:"16px",height:"100%"},alt:"logo"}),a.a.createElement("div",{style:{marginLeft:"16px",color:"black",minWidth:"256px"}},a.a.createElement("div",{style:{marginBottom:"8px",height:"100%"}},a.a.createElement(S,{style:{height:"100%"},defaultIsPlaying:!d.paused,onChange:e=>{e?r():o()},play:a.a.createElement(v,{color:g,style:{height:"100%"}}),pause:a.a.createElement(k,{style:{height:"100%"},color:g})})),a.a.createElement("div",null,a.a.createElement("small",null,"Now playing"),a.a.createElement("br",null),a.a.createElement("div",null,"Pinquin ",l.name," Radio"),a.a.createElement("br",null),a.a.createElement(I,{volume:p,color1:g,color2:x})))),a.a.createElement("ul",{className:"stations"},i.stations.map(e=>{const t="StationsListKey".concat(e.id);return a.a.createElement("li",{key:t,onClick:()=>{c(e.id),d.paused&&r()}},a.a.createElement("div",{style:{width:"200px",display:"flex",flexDirection:"row",alignItems:"center"}},a.a.createElement("img",{src:"images/logos/".concat(e.id,".svg"),height:"75",style:{borderRadius:"25px",marginRight:"16px"},alt:"logo"}),a.a.createElement("div",null,e.name)))}),a.a.createElement("li",{onClick:()=>{const e=()=>{const t=i.stations[Math.floor(Math.random()*i.stations.length)];return t.id===l.id?e():t},t=e();c(t.id)}},"I feel lucky"))):a.a.createElement(B,{color:l.color,className:"PinquinRadio",style:{backgroundImage:"url(https://picsum.photos/1024/768)",backgroundSize:"cover"}},a.a.createElement("div",{style:{position:"fixed",bottom:"48px",right:"48px",display:"flex",justifyContent:"flex-end",alignItems:"center",backgroundColor:x,paddingLeft:"16px",paddingRight:"16px",paddingTop:"8px",paddingBottom:"8px"}},a.a.createElement("img",{src:"images/soundbar.gif",style:{width:"25px",height:"25px",filter:"grayscale(100%)",marginRight:"16px"},alt:"logo"}),a.a.createElement("img",{src:"images/logos/".concat(l.id,".svg"),style:{marginRight:"16px",height:"50px"},alt:"logo"}),a.a.createElement("div",null,a.a.createElement("small",null,"Now playing"),a.a.createElement("br",null),a.a.createElement("div",null,"Pinquin ",l.name," Radio")))),n)}const R=document.getElementById("root");i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(P,null)),R)}},[[17,1,2]]]);
//# sourceMappingURL=main.459dd976.chunk.js.map