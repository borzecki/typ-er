(this["webpackJsonptyp-er"]=this["webpackJsonptyp-er"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),s=(n(13),n(1)),i=n(7),u=n(6),l=n.n(u),m=["Shift","Control","Meta","CapsLock","Alt","Backspace","Escape"];var f=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];function c(e){var t=e.key;-1===m.indexOf(t)&&r(t)}var o=function(){r("")};return Object(a.useEffect)((function(){return window.addEventListener("keydown",c),window.addEventListener("keyup",o),function(){window.removeEventListener("keydown",c),window.removeEventListener("keyup",o)}}),[]),n},d=function(e){var t=e.char,n=e.state;return r.a.createElement("span",{className:l()(n,{space:" "===t})},t)},w=function(e){var t=e.text,n=e.resetTimer,c=e.increaseErrors,o=e.onComplete,u=f(),l=Object(a.useState)(0),m=Object(s.a)(l,2),w=m[0],p=m[1],v=Object(a.useState)(new Set([])),h=Object(s.a)(v,2),E=h[0],b=h[1];Object(a.useEffect)((function(){w===t.length&&(o(),b(new Set),p(0)),""!==u&&(0===w&&!E.has(w)&&n&&n(),u===t[w]?p(w+1):(E.add(w),b(E),c&&c()))}),[u]);var j=function(e){return{current:e===w,failed:E.has(e),success:e<w&&!E.has(e),unused:e>w}};return r.a.createElement("div",{className:"editor"},Object(i.a)(t).map((function(e,t){return r.a.createElement(d,{key:t,char:e,state:j(t)})})))},p=(n(14),function(e){var t=e.wpm,n=e.errors;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"score"},t),r.a.createElement("div",{className:"errors"},n>0&&n))});var v=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)((new Date).getTime()),i=Object(s.a)(o,2),u=i[0],l=i[1],m=Object(a.useState)(),f=Object(s.a)(m,2),d=f[0],v=f[1],h=Object(a.useState)(0),E=Object(s.a)(h,2),b=E[0],j=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{wpm:d,errors:b}),r.a.createElement(w,{text:n,resetTimer:function(){return l((new Date).getTime())},onComplete:function(){var e=((new Date).getTime()-u)/1e3,t=Math.round(n.length/5/e*60);n&&v(t),fetch("https://hipsum.co/api/?type=hipster-centric&sentences=1&_rand=".concat((new Date).getTime())).then((function(e){return e.json()})).then((function(e){var t=Object(s.a)(e,1)[0];return c(t.replace(/[.,&--+\d']/g,"").toLowerCase())}))},increaseErrors:function(){return j(b+1)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3ab65b84.chunk.js.map