System.register(["./chakra-legacy-oG9ixp5q.js","./react-legacy-J6S8G-Zx.js","./index-legacy-ZYgQgt5i.js","./misc-nodes-legacy-zDIFPEOv.js","./stations-legacy-K9NVw8Wa.js"],(function(e,l){"use strict";var s,t,i,a,n,o,c,r,d,x,h,j,u,f,p,m,v,g,y,b,k,w,C,I,S,$,N,V;return{setters:[e=>{s=e.t,t=e.j,i=e.d,a=e.s,n=e.ai,o=e.aj,c=e.ak,r=e.a0,d=e.al,x=e.am,h=e.q},e=>{j=e.b},e=>{u=e.c,f=e.j,p=e.d,m=e.ab,v=e.ac,g=e.ad,y=e.ae,b=e.af,k=e.T,w=e.O,C=e.q,I=e.t,S=e.e,$=e.S},e=>{N=e.m},e=>{V=e.s}],execute:function(){const l={justifyContent:"flex-start",p:0,w:"100%",h:10},A={p:2.5,h:10},O={p:0,display:"flex",flexDirection:"column"},z=t.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:t.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeDasharray:"2",fill:"none"})});e("default",(()=>{const{t:e}=u(),D=f(),{mode:q,theme:M,paletteAppClip:{output:P}}=p((e=>e.runtime)),{preference:{unlockSimplePathAttempts:W,toolsPanel:{expand:B}}}=p((e=>e.app)),E=s("white","var(--chakra-colors-gray-800)"),[L,T]=j.useState(!1);j.useEffect((()=>{L&&P&&(D(m(P)),T(!1))}),[null==P?void 0:P.toString()]);const F=e=>D(b(`misc-node-${e}`));return t.jsxs(i,{flexShrink:"0",direction:"column",width:B?450:10,maxWidth:"100%",height:"100%",bg:E,zIndex:"5",transition:"width 0.3s ease-in-out",children:[t.jsx(a,{"aria-label":"Menu",leftIcon:B?t.jsx(v,{size:40,transform:"rotate(90)"}):t.jsx(g,{size:40,transform:"rotate(90)"}),onClick:()=>D(y(!B)),sx:l,children:B?e("panel.tools.showLess"):void 0}),t.jsx(i,{className:"tools",overflow:"auto",children:t.jsxs(n,{width:"100%",allowMultiple:!0,defaultIndex:[0,1,2],children:[t.jsx(a,{"aria-label":"select",leftIcon:z,onClick:()=>D(b("select"===q?"free":"select")),variant:"select"===q?"solid":"outline",sx:l,children:B?e("panel.tools.select"):void 0}),t.jsxs(o,{children:[t.jsxs(c,{sx:A,children:[B&&t.jsx(r,{as:"span",flex:"1",textAlign:"left",children:e("panel.tools.section.lineDrawing")}),t.jsx(d,{})]}),t.jsxs(x,{sx:O,children:[t.jsxs(i,{children:[t.jsx(k,{theme:M,onClick:()=>{T(!0),D(w(M))}}),t.jsx(h,{fontWeight:"600",pl:"1",alignSelf:"center",children:B?e("color"):void 0})]}),Object.values(C).filter((e=>!(e===C.Simple&&W>=0))).map((s=>t.jsx(a,{"aria-label":s,leftIcon:I[s].icon,onClick:()=>(e=>D(b(`line-${e}`)))(s),variant:q===`line-${s}`?"solid":"outline",sx:l,children:B?e(I[s].metadata.displayName):void 0},s))),t.jsx(a,{"aria-label":S.Virtual,leftIcon:N[S.Virtual].icon,onClick:()=>F(S.Virtual),variant:q===`misc-node-${S.Virtual}`?"solid":"outline",sx:l,children:B?e(N[S.Virtual].metadata.displayName):void 0})]})]}),t.jsxs(o,{children:[t.jsxs(c,{sx:A,children:[B&&t.jsx(r,{as:"span",flex:"1",textAlign:"left",children:e("panel.tools.section.stations")}),t.jsx(d,{})]}),t.jsx(x,{sx:O,children:Object.values($).map((s=>t.jsx(a,{"aria-label":s,leftIcon:V[s].icon,onClick:()=>(e=>D(b(`station-${e}`)))(s),variant:q===`station-${s}`?"solid":"outline",sx:l,children:B?e(V[s].metadata.displayName):void 0},s)))})]}),t.jsxs(o,{children:[t.jsxs(c,{sx:A,children:[B&&t.jsx(r,{as:"span",flex:"1",textAlign:"left",children:e("panel.tools.section.miscellaneousNodes")}),t.jsx(d,{})]}),t.jsx(x,{sx:O,children:Object.values(S).filter((e=>e!==S.Virtual)).map((s=>t.jsx(a,{"aria-label":s,leftIcon:N[s].icon,onClick:()=>F(s),variant:q===`misc-node-${s}`?"solid":"outline",sx:l,children:B?e(N[s].metadata.displayName):void 0},s)))})]})]})})]})}))}}}));
