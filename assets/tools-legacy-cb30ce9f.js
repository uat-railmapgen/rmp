!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var i,r,a,l,o=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;s=!1}else for(;!(s=(i=a.call(e)).done)&&(o.push(i.value),o.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw r}}return o}}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);"Object"===i&&n.constructor&&(i=n.constructor.name);if("Map"===i||"Set"===i)return Array.from(n);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}System.register(["./chakra-legacy-6a2b2acd.js","./react-legacy-d8ea2a5a.js","./index-legacy-0d5e7d55.js","./stations-legacy-2da5a78b.js","./misc-nodes-legacy-0e71f597.js"],(function(t,e){"use strict";var i,r,a,l,o,s,c,u,f,d,x,m,h,j,p,y,v,b,g,w,S,A,C,I,O,k,H;return{setters:[function(n){i=n.v,r=n.j,a=n.F,l=n.h,o=n.ay,s=n.az,c=n.aA,u=n.B,f=n.aB,d=n.aC,x=n.s},function(n){m=n.b},function(n){h=n.d,j=n.e,p=n.z,y=n.a8,v=n.a9,b=n.T,g=n.O,w=n.aa,S=n.L,A=n.l,C=n.J,I=n.S,O=n.ab},function(n){k=n.s},function(n){H=n.m}],execute:function(){var e={justifyContent:"flex-start",p:0,pl:"5px",pr:"5px",maxH:50,minH:50},N={p:"0",display:"flex",flexDirection:"column"};t("default",(function(){var t=h().t,V=j(),z=p((function(n){return n.runtime})),M=z.mode,T=z.theme,B=i("white","gray.800"),D=n(m.useState(!0),2),L=D[0],U=D[1],W=n(m.useState(!1),2),q=W[0],E=W[1],F=function(n){return V(O("misc-node-".concat(n)))};return r.jsxs(a,{flexShrink:"0",direction:"column",width:L?400:50,maxWidth:"100%",height:"100%",bg:B,zIndex:"5",transition:"width 0.3s ease-in-out",children:[r.jsx(l,{"aria-label":"Menu",leftIcon:L?r.jsx(y,{size:40,transform:"rotate(90)"}):r.jsx(v,{size:40,transform:"rotate(90)"}),onClick:function(){return U(!L)},sx:e,children:L?t("panel.tools.showLess"):void 0}),r.jsx(a,{className:"tools",overflow:"auto",children:r.jsxs(o,{width:"100%",allowMultiple:!0,defaultIndex:[0,1,2],children:[r.jsxs(s,{children:[r.jsxs(c,{sx:{minH:50,maxH:50},children:[r.jsx(u,{as:"span",flex:"1",textAlign:"left",children:L?t("panel.tools.section.lineDrawing"):void 0}),r.jsx(f,{})]}),r.jsxs(d,{sx:N,children:[r.jsxs(a,{children:[r.jsx(b,{theme:T,onClick:function(){return E(!0)}}),r.jsx(x,{fontWeight:"600",pl:"1",alignSelf:"center",children:L?t("color"):void 0})]}),r.jsx(g,{isOpen:q,defaultTheme:T,onClose:function(){return E(!1)},onUpdate:function(n){return V(w(n))}}),Object.values(S).map((function(n){return r.jsx(l,{"aria-label":n,leftIcon:A[n].icon,onClick:function(){return function(n){return V(O("line-".concat(n)))}(n)},variant:M==="line-".concat(n)?"solid":"outline",sx:e,children:L?t(A[n].metadata.displayName):void 0},n)})),r.jsx(l,{"aria-label":C.Virtual,leftIcon:H[C.Virtual].icon,onClick:function(){return F(C.Virtual)},variant:M==="misc-node-".concat(C.Virtual)?"solid":"outline",sx:e,children:L?t(H[C.Virtual].metadata.displayName):void 0})]})]}),r.jsxs(s,{children:[r.jsxs(c,{sx:{minH:50,maxH:50},children:[r.jsx(u,{as:"span",flex:"1",textAlign:"left",children:L?t("panel.tools.section.stations"):void 0}),r.jsx(f,{})]}),r.jsx(d,{sx:N,children:Object.values(I).map((function(n){return r.jsx(l,{"aria-label":n,leftIcon:k[n].icon,onClick:function(){return function(n){return V(O("station-".concat(n)))}(n)},variant:M==="station-".concat(n)?"solid":"outline",sx:e,children:L?t(k[n].metadata.displayName):void 0},n)}))})]}),r.jsxs(s,{children:[r.jsxs(c,{sx:{minH:50,maxH:50},children:[r.jsx(u,{as:"span",flex:"1",textAlign:"left",children:L?t("panel.tools.section.miscellaneousNodes"):void 0}),r.jsx(f,{})]}),r.jsx(d,{sx:N,children:Object.values(C).filter((function(n){return n!==C.Virtual})).map((function(n){return r.jsx(l,{"aria-label":n,leftIcon:H[n].icon,onClick:function(){return F(n)},variant:M==="misc-node-".concat(n)?"solid":"outline",sx:e,children:L?t(H[n].metadata.displayName):void 0},n)}))})]})]})})]})}))}}}))}();
