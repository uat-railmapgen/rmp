!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,a,l,o=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;s=!1}else for(;!(s=(r=a.call(e)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(u){c=!0,i=u}finally{try{if(!s&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./chakra-legacy-53b88c68.js","./react-legacy-9060605e.js","./index-legacy-a187234d.js","./stations-legacy-543bac1c.js","./misc-nodes-legacy-9eba04c7.js"],(function(t,e){"use strict";var r,i,a,l,o,s,c,u,f,d,x,h,j,m,p,y,v,g,b,w,S,I,A,C,k,O,V;return{setters:[function(n){r=n.v,i=n.j,a=n.F,l=n.h,o=n.av,s=n.aw,c=n.ax,u=n.B,f=n.ay,d=n.az,x=n.s},function(n){h=n.b},function(n){j=n.d,m=n.e,p=n.v,y=n.a4,v=n.a5,g=n.T,b=n.H,w=n.a6,S=n.L,I=n.l,A=n.D,C=n.S,k=n.a7},function(n){O=n.s},function(n){V=n.m}],execute:function(){var e={justifyContent:"flex-start",p:0,w:"100%",h:10},D={p:2.5,h:10},N={p:0,display:"flex",flexDirection:"column"};t("default",(function(){var t=j().t,z=m(),M=p((function(n){return n.runtime})),T=M.mode,L=M.theme,U=r("white","gray.800"),W=n(h.useState(!0),2),B=W[0],E=W[1],F=n(h.useState(!1),2),H=F[0],$=F[1],q=function(n){return z(k("misc-node-".concat(n)))};return i.jsxs(a,{flexShrink:"0",direction:"column",width:B?450:10,maxWidth:"100%",height:"100%",bg:U,zIndex:"5",transition:"width 0.3s ease-in-out",children:[i.jsx(l,{"aria-label":"Menu",leftIcon:B?i.jsx(y,{size:40,transform:"rotate(90)"}):i.jsx(v,{size:40,transform:"rotate(90)"}),onClick:function(){return E(!B)},sx:e,children:B?t("panel.tools.showLess"):void 0}),i.jsx(a,{className:"tools",overflow:"auto",children:i.jsxs(o,{width:"100%",allowMultiple:!0,defaultIndex:[0,1,2],children:[i.jsxs(s,{children:[i.jsxs(c,{sx:D,children:[B&&i.jsx(u,{as:"span",flex:"1",textAlign:"left",children:t("panel.tools.section.lineDrawing")}),i.jsx(f,{})]}),i.jsxs(d,{sx:N,children:[i.jsxs(a,{children:[i.jsx(g,{theme:L,onClick:function(){return $(!0)}}),i.jsx(x,{fontWeight:"600",pl:"1",alignSelf:"center",children:B?t("color"):void 0})]}),i.jsx(b,{isOpen:H,defaultTheme:L,onClose:function(){return $(!1)},onUpdate:function(n){return z(w(n))}}),Object.values(S).filter((function(n){return n!==S.Simple})).map((function(n){return i.jsx(l,{"aria-label":n,leftIcon:I[n].icon,onClick:function(){return function(n){return z(k("line-".concat(n)))}(n)},variant:T==="line-".concat(n)?"solid":"outline",sx:e,children:B?t(I[n].metadata.displayName):void 0},n)})),i.jsx(l,{"aria-label":A.Virtual,leftIcon:V[A.Virtual].icon,onClick:function(){return q(A.Virtual)},variant:T==="misc-node-".concat(A.Virtual)?"solid":"outline",sx:e,children:B?t(V[A.Virtual].metadata.displayName):void 0})]})]}),i.jsxs(s,{children:[i.jsxs(c,{sx:D,children:[B&&i.jsx(u,{as:"span",flex:"1",textAlign:"left",children:t("panel.tools.section.lineDrawing")}),i.jsx(f,{})]}),i.jsx(d,{sx:N,children:Object.values(C).map((function(n){return i.jsx(l,{"aria-label":n,leftIcon:O[n].icon,onClick:function(){return function(n){return z(k("station-".concat(n)))}(n)},variant:T==="station-".concat(n)?"solid":"outline",sx:e,children:B?t(O[n].metadata.displayName):void 0},n)}))})]}),i.jsxs(s,{children:[i.jsxs(c,{sx:D,children:[B&&i.jsx(u,{as:"span",flex:"1",textAlign:"left",children:t("panel.tools.section.lineDrawing")}),i.jsx(f,{})]}),i.jsx(d,{sx:N,children:Object.values(A).filter((function(n){return n!==A.Virtual})).map((function(n){return i.jsx(l,{"aria-label":n,leftIcon:V[n].icon,onClick:function(){return q(n)},variant:T==="misc-node-".concat(n)?"solid":"outline",sx:e,children:B?t(V[n].metadata.displayName):void 0},n)}))})]})]})})]})}))}}}))}();
