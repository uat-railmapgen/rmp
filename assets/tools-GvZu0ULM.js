import{a6 as $,j as s,g as h,O as i,aM as E,aN as m,aO as u,B as f,aP as j,aQ as p,a4 as R}from"./chakra-77DnoTeR.js";import{u as O,b as I}from"./react-hBmrxY6U.js";import{f as D,a as S,a6 as L,a7 as z,a8 as q,a9 as W,aa as d,T as F,H,l as k,m as w,b as t,S as Q}from"./index-eCpU7cNs.js";import{m as x}from"./misc-nodes-DSxJH2aV.js";import{s as A}from"./stations-0qwJ0NEP.js";const c={justifyContent:"flex-start",p:0,w:"100%",h:10},v={p:2.5,h:10},b={p:0,display:"flex",flexDirection:"column"},G=s.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:s.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeDasharray:"2",fill:"none"})}),Z=()=>{const{t:o}=O(),l=D(),{mode:n,theme:g,paletteAppClip:{output:r}}=S(e=>e.runtime),{preference:{unlockSimplePathAttempts:M,toolsPanel:{expand:a}}}=S(e=>e.app),N=$("white","var(--chakra-colors-gray-800)"),[P,T]=I.useState(!1);I.useEffect(()=>{P&&r&&(l(L(r)),T(!1))},[r==null?void 0:r.toString()]);const B=e=>l(d("station-".concat(e))),V=e=>l(d("line-".concat(e))),C=e=>l(d("misc-node-".concat(e)));return s.jsxs(h,{flexShrink:"0",direction:"column",width:a?450:10,maxWidth:"100%",height:"100%",bg:N,zIndex:"5",transition:"width 0.3s ease-in-out",children:[s.jsx(i,{"aria-label":"Menu",leftIcon:a?s.jsx(z,{size:40,transform:"rotate(90)"}):s.jsx(q,{size:40,transform:"rotate(90)"}),onClick:()=>l(W(!a)),sx:c,children:a?o("panel.tools.showLess"):void 0}),s.jsx(h,{className:"tools",overflow:"auto",children:s.jsxs(E,{width:"100%",allowMultiple:!0,defaultIndex:[0,1,2],children:[s.jsx(i,{"aria-label":"select",leftIcon:G,onClick:()=>l(d(n==="select"?"free":"select")),variant:n==="select"?"solid":"outline",sx:c,children:a?o("panel.tools.select"):void 0}),s.jsxs(m,{children:[s.jsxs(u,{sx:v,children:[a&&s.jsx(f,{as:"span",flex:"1",textAlign:"left",children:o("panel.tools.section.lineDrawing")}),s.jsx(j,{})]}),s.jsxs(p,{sx:b,children:[s.jsxs(h,{children:[s.jsx(F,{theme:g,onClick:()=>{T(!0),l(H(g))}}),s.jsx(R,{fontWeight:"600",pl:"1",alignSelf:"center",children:a?o("color"):void 0})]}),Object.values(k).filter(e=>!(e===k.Simple&&M>=0)).map(e=>s.jsx(i,{"aria-label":e,leftIcon:w[e].icon,onClick:()=>V(e),variant:n==="line-".concat(e)?"solid":"outline",sx:c,children:a?o(w[e].metadata.displayName):void 0},e)),s.jsx(i,{"aria-label":t.Virtual,leftIcon:x[t.Virtual].icon,onClick:()=>C(t.Virtual),variant:n==="misc-node-".concat(t.Virtual)?"solid":"outline",sx:c,children:a?o(x[t.Virtual].metadata.displayName):void 0})]})]}),s.jsxs(m,{children:[s.jsxs(u,{sx:v,children:[a&&s.jsx(f,{as:"span",flex:"1",textAlign:"left",children:o("panel.tools.section.stations")}),s.jsx(j,{})]}),s.jsx(p,{sx:b,children:Object.values(Q).map(e=>s.jsx(i,{"aria-label":e,leftIcon:A[e].icon,onClick:()=>B(e),variant:n==="station-".concat(e)?"solid":"outline",sx:c,children:a?o(A[e].metadata.displayName):void 0},e))})]}),s.jsxs(m,{children:[s.jsxs(u,{sx:v,children:[a&&s.jsx(f,{as:"span",flex:"1",textAlign:"left",children:o("panel.tools.section.miscellaneousNodes")}),s.jsx(j,{})]}),s.jsx(p,{sx:b,children:Object.values(t).filter(e=>e!==t.Virtual&&e!==t.I18nText).map(e=>s.jsx(i,{"aria-label":e,leftIcon:x[e].icon,onClick:()=>C(e),variant:n==="misc-node-".concat(e)?"solid":"outline",sx:c,children:a?o(x[e].metadata.displayName):void 0},e))})]})]})})]})};export{Z as default};
