System.register(["./chakra-legacy-oG9ixp5q.js","./index-legacy-ZYgQgt5i.js","./react-legacy-J6S8G-Zx.js"],(function(e,t){"use strict";var n,a,s,r,o;return{setters:[e=>{n=e.j,a=e.N},e=>{s=e.r,r=e.x},e=>{o=e.b}],execute:function(){e("default",(function(e){const{isOpen:c,onClose:i,defaultTheme:l,onSelect:u}=e,[p]=o.useState(crypto.randomUUID()),[d,g]=o.useState(!1),m="/rmg-palette/#/picker?"+new URLSearchParams({parentComponent:s.getAppName(),parentId:p}),f=o.useRef();return o.useEffect((()=>{const e=new BroadcastChannel("rmg-palette-bridge--"+p);return f.current=e,e.onmessage=e=>{const{event:t,data:n}=e.data;console.log("[rmp] Received event from Palette app clip:",t),"CLOSE"===t?i():"SELECT"===t?u(n):"LOADED"===t&&g(!0)},()=>{e.close()}}),[]),o.useEffect((()=>{var e;l&&(null===(e=f.current)||void 0===e||e.postMessage({event:"OPEN",data:l}))}),[d,null==l?void 0:l.toString()]),n.jsxs(r,{size:"md",isOpen:c,onClose:i,sx:t,children:[n.jsx(a,{onClick:i}),n.jsx("iframe",{src:m,loading:"eager"})]})}));const t={position:"relative",h:460,maxH:"70%","& > button":{position:"absolute",right:1,top:1},"& iframe":{h:"100%",w:"100%"}}}}}));
