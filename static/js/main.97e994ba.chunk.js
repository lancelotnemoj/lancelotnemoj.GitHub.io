(this["webpackJsonpnever-blind"]=this["webpackJsonpnever-blind"]||[]).push([[0],{49:function(e,t,n){e.exports=n(60)},54:function(e,t,n){},55:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=(n(54),n(9)),l=(n(55),n(16)),u=n.n(l),s=n(24),d=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;return[[e[0][0]*t[0][0]+e[0][1]*t[1][0]+e[0][2]*t[2][0]+e[0][3]*t[3][0],e[0][0]*t[0][1]+e[0][1]*t[1][1]+e[0][2]*t[2][1]+e[0][3]*t[3][1],e[0][0]*t[0][2]+e[0][1]*t[1][2]+e[0][2]*t[2][2]+e[0][3]*t[3][2],e[0][0]*t[0][3]+e[0][1]*t[1][3]+e[0][2]*t[2][3]+e[0][3]*t[3][3]],[e[1][0]*t[0][0]+e[1][1]*t[1][0]+e[1][2]*t[2][0]+e[1][3]*t[3][0],e[1][0]*t[0][1]+e[1][1]*t[1][1]+e[1][2]*t[2][1]+e[1][3]*t[3][1],e[1][0]*t[0][2]+e[1][1]*t[1][2]+e[1][2]*t[2][2]+e[1][3]*t[3][2],e[1][0]*t[0][3]+e[1][1]*t[1][3]+e[1][2]*t[2][3]+e[1][3]*t[3][3]],[e[2][0]*t[0][0]+e[2][1]*t[1][0]+e[2][2]*t[2][0]+e[2][3]*t[3][0],e[2][0]*t[0][1]+e[2][1]*t[1][1]+e[2][2]*t[2][1]+e[2][3]*t[3][1],e[2][0]*t[0][2]+e[2][1]*t[1][2]+e[2][2]*t[2][2]+e[2][3]*t[3][2],e[2][0]*t[0][3]+e[2][1]*t[1][3]+e[2][2]*t[2][3]+e[2][3]*t[3][3]],[e[3][0]*t[0][0]+e[3][1]*t[1][0]+e[3][2]*t[2][0]+e[3][3]*t[3][0],e[3][0]*t[0][1]+e[3][1]*t[1][1]+e[3][2]*t[2][1]+e[3][3]*t[3][1],e[3][0]*t[0][2]+e[3][1]*t[1][2]+e[3][2]*t[2][2]+e[3][3]*t[3][2],e[3][0]*t[0][3]+e[3][1]*t[1][3]+e[3][2]*t[2][3]+e[3][3]*t[3][3]]]};n(34),n(35),n(32);var m=function(e){var t=e.executes,n=void 0===t?[]:t,i=e.width,o=void 0===i?500:i,l=e.height,d=void 0===l?500:l,m=function(){var e=Object(a.useState)(!0),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=document.createElement("canvas");e.getContext("webgl")||e.getContext("experimental-webgl");r(!1)}),[]),n}(),h=Object(a.useRef)(),p=Object(a.useMemo)((function(){var e=document.createElement("video");return e.autoplay=!0,e.width=o,e.height=d,e}),[document]);return Object(a.useEffect)((function(){navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:405},height:{ideal:720}},audio:!1}).then((function(e){p.srcObject=e})):(navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getUserMedia({video:{width:1280,height:720},audio:!1},(function(e){p.srcObject=e}),(function(e){console.log(e)})))}),[]),Object(a.useEffect)((function(){if(console.log(m),!m)return function(e,t,n){var a=n.reduce((function(e,t){return f(e,t)}),[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]);console.log(a);var r=t.getContext("2d");console.log(r);var i=setInterval(Object(s.a)(u.a.mark((function n(){var i,o,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!1!==e.play&&0!==e.videoWidth){n.next=2;break}return n.abrupt("return");case 2:try{for(t.style.width="".concat(e.videoWidth,"px"),t.style.height="".concat(e.videoHeight,"px"),t.width=e.videoWidth,t.height=e.videoHeight,r.drawImage(e,0,0,e.videoWidth,e.videoHeight),i=r.getImageData(0,0,e.videoWidth,e.videoHeight),o=i.data,c=0;c<o.length;c+=4)o[c]=a[0][0]*o[c]+a[0][1]*o[c+1]+a[0][2]*o[c+2]+a[0][3]*o[c+3],o[c+1]=a[1][0]*o[c]+a[1][1]*o[c+1]+a[1][2]*o[c+2]+a[1][3]*o[c+3],o[c+2]=a[2][0]*o[c]+a[2][1]*o[c+1]+a[2][2]*o[c+2]+a[2][3]*o[c+3];r.putImageData(i,0,0)}catch(l){console.log(l)}case 3:case"end":return n.stop()}}),n)}))),1e3/60);return function(){clearInterval(i)}}(p,h.current,n)}),[m,n]),r.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}},r.a.createElement("canvas",{style:{maxHeight:"100vh",width:"100vw"},ref:h,id:"c1",width:o,height:d,onClick:function(){return p.play=!p.play}}))},h=function(e,t){return[Array(4).fill(0).map((function(n,a){return e[0][a]-t[0][a]})),Array(4).fill(0).map((function(n,a){return e[1][a]-t[1][a]})),Array(4).fill(0).map((function(n,a){return e[2][a]-t[2][a]})),Array(4).fill(0).map((function(n,a){return e[3][a]-t[3][a]}))]},p=function(e,t){return[Array(4).fill(0).map((function(n,a){return e[0][a]+t[0][a]})),Array(4).fill(0).map((function(n,a){return e[1][a]+t[1][a]})),Array(4).fill(0).map((function(n,a){return e[2][a]+t[2][a]})),Array(4).fill(0).map((function(n,a){return e[3][a]+t[3][a]}))]},v=n(90),g=n(92),y=n(94),b=n(95),E=n(98),w=n(97),j=n(96),O=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),x=function(e){var t=r.a.useState(null),n=Object(c.a)(t,2),a=n[0],i=n[1],o=Boolean(a),l=O();return r.a.createElement("div",{style:{textAlign:"left",position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:999,pointer:"none"}},r.a.createElement("div",{className:l.root},r.a.createElement(g.a,{position:"static"},r.a.createElement(y.a,null,r.a.createElement(b.a,{variant:"h6",className:l.title},"\u57fa\u4e8eWebRTC\u7684\u8272\u76f2\u6570\u5b57\u8272\u5f69\u77eb\u6b63\u7a0b\u5e8f"),r.a.createElement("div",null,r.a.createElement(j.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},color:"inherit"},"\u6a21\u5f0f\u9009\u62e9"),r.a.createElement(w.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:function(){i(null)}},r.a.createElement(E.a,{onClick:function(){e.setType&&e.setType("DN")}},"\u7ea2\u8272\u76f2 - \u81ea\u7136"),r.a.createElement(E.a,{onClick:function(){e.setType&&e.setType("DS")}},"\u7ea2\u8272\u76f2 - \u9ad8\u5bf9\u6bd4"),r.a.createElement(E.a,{onClick:function(){return e.setType&&e.setType("PN")}},"\u7eff\u8272\u76f2 - \u81ea\u7136"),r.a.createElement(E.a,{onClick:function(){return e.setType&&e.setType("PS")}},"\u7eff\u8272\u76f2 - \u9ad8\u5bf9\u6bd4"),r.a.createElement(E.a,{onClick:function(){return e.setType&&e.setType("TS")}},"\u84dd\u8272\u76f2 - \u9ad8\u5bf9\u6bd4")))))))},T=[[0,2.02344,-2.52581,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],k=[[1,0,0,0],[.49421,0,1.24827,0],[0,0,1,0],[0,0,0,1]],C=[[1,0,0,0],[0,1,0,0],[-.395913,.801109,0,0],[0,0,0,1]],M=[[0,0,0,0],[.7,1,0,0],[.7,0,1,0],[0,0,0,1]],S=[[1,.7,0,0],[0,0,0,0],[0,.7,1,0],[0,0,0,1]],A=[[1,0,.7,0],[0,1,.7,0],[0,0,1,0],[0,0,0,1]],D={DN:{project:S,simulate:k},TN:{project:A,simulate:C},PN:{project:M,simulate:T},DS:{project:A,simulate:k},TS:{project:M,simulate:C},PS:{project:S,simulate:T}},N=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],W=[[.0809,-.1305,.1167,0],[-.0102,.0540193266,-.1136,0],[-3e-4,-.0041,.6935,0],[0,0,0,1]],I=[[17.8824,43.5161,4.1193,0],[3.4557,27.1554,3.8671,0],[.02996,.18431,1.4671,0],[0,0,0,1]];var U=function(){var e=r.a.useState("DN"),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(p(f(D[n].project,h(N,f(W,f(D[n].simulate,I)))),N)),l=Object(c.a)(o,2),u=l[0],s=l[1],d=Object(a.useMemo)((function(){return[document.documentElement.clientWidth,document.documentElement.clientHeight]}),[]),v=Object(c.a)(d,2),g=v[0],y=v[1];return r.a.useEffect((function(){console.log(n),s(p(f(D[n].project,h(N,f(W,f(D[n].simulate,I)))),N))}),[n]),r.a.createElement("div",{className:"App"},r.a.createElement(m,{width:g,height:y,executes:[u]}),r.a.createElement(x,{setType:function(e){i(e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.97e994ba.chunk.js.map