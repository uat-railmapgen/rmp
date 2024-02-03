import{a5 as $,j as s,g as h,a4 as i,aM as E,aN as m,aO as u,B as f,aP as j,aQ as p,a2 as R}from"./chakra-h-ATOMu2.js";import{u as D,b as C}from"./react-hBmrxY6U.js";import{f as L,a as S,a7 as O,a8 as z,a9 as q,aa as W,ab as d,T as F,I as Q,l as k,m as w,b as t,S as G}from"./index-5EprFDpZ.js";import{m as x}from"./misc-nodes-p7qnudSn.js";import{s as A}from"./stations-Id5nzAYU.js";const c={justifyContent:"flex-start",p:0,w:"100%",h:10},v={p:2.5,h:10},b={p:0,display:"flex",flexDirection:"column"},H=s.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:s.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeDasharray:"2",fill:"none"})}),Z=()=>{const{t:o}=D(),l=L(),{mode:n,theme:g,paletteAppClip:{output:r}}=S(e=>e.runtime),{preference:{unlockSimplePathAttempts:M,toolsPanel:{expand:a}}}=S(e=>e.app),N=$("white","var(--chakra-colors-gray-800)"),[P,I]=C.useState(!1);C.useEffect(()=>{P&&r&&(l(O(r)),I(!1))},[r==null?void 0:r.toString()]);const B=e=>l(d("station-".concat(e))),V=e=>l(d("line-".concat(e))),T=e=>l(d("misc-node-".concat(e)));return s.jsxs(h,{flexShrink:"0",direction:"column",width:a?450:10,maxWidth:"100%",height:"100%",bg:N,zIndex:"5",transition:"width 0.3s ease-in-out",children:[s.jsx(i,{"aria-label":"Menu",leftIcon:a?s.jsx(z,{size:40,transform:"rotate(90)"}):s.jsx(q,{size:40,transform:"rotate(90)"}),onClick:()=>l(W(!a)),sx:c,children:a?o("panel.tools.showLess"):void 0}),s.jsx(h,{className:"tools",overflow:"auto",children:s.jsxs(E,{width:"100%",allowMultiple:!0,defaultIndex:[0,1,2],children:[s.jsx(i,{"aria-label":"select",leftIcon:H,onClick:()=>l(d(n==="select"?"free":"select")),variant:n==="select"?"solid":"outline",sx:c,children:a?o("panel.tools.select"):void 0}),s.jsxs(m,{children:[s.jsxs(u,{sx:v,children:[a&&s.jsx(f,{as:"span",flex:"1",textAlign:"left",children:o("panel.tools.section.lineDrawing")}),s.jsx(j,{})]}),s.jsxs(p,{sx:b,children:[s.jsxs(h,{children:[s.jsx(F,{theme:g,onClick:()=>{I(!0),l(Q(g))}}),s.jsx(R,{fontWeight:"600",pl:"1",alignSelf:"center",children:a?o("color"):void 0})]}),Object.values(k).filter(e=>!(e===k.Simple&&M>=0)).map(e=>s.jsx(i,{"aria-label":e,leftIcon:w[e].icon,onClick:()=>V(e),variant:n==="line-".concat(e)?"solid":"outline",sx:c,children:a?o(w[e].metadata.displayName):void 0},e)),s.jsx(i,{"aria-label":t.Virtual,leftIcon:x[t.Virtual].icon,onClick:()=>T(t.Virtual),variant:n==="misc-node-".concat(t.Virtual)?"solid":"outline",sx:c,children:a?o(x[t.Virtual].metadata.displayName):void 0})]})]}),s.jsxs(m,{children:[s.jsxs(u,{sx:v,children:[a&&s.jsx(f,{as:"span",flex:"1",textAlign:"left",children:o("panel.tools.section.stations")}),s.jsx(j,{})]}),s.jsx(p,{sx:b,children:Object.values(G).map(e=>s.jsx(i,{"aria-label":e,leftIcon:A[e].icon,onClick:()=>B(e),variant:n==="station-".concat(e)?"solid":"outline",sx:c,children:a?o(A[e].metadata.displayName):void 0},e))})]}),s.jsxs(m,{children:[s.jsxs(u,{sx:v,children:[a&&s.jsx(f,{as:"span",flex:"1",textAlign:"left",children:o("panel.tools.section.miscellaneousNodes")}),s.jsx(j,{})]}),s.jsx(p,{sx:b,children:Object.values(t).filter(e=>e!==t.Virtual&&e!==t.I18nText).map(e=>s.jsx(i,{"aria-label":e,leftIcon:x[e].icon,onClick:()=>T(e),variant:n==="misc-node-".concat(e)?"solid":"outline",sx:c,children:a?o(x[e].metadata.displayName):void 0},e))})]})]})})]})};export{Z as default};
