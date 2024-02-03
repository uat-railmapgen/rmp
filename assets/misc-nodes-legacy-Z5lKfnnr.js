System.register(["./index-legacy-ycDNfaG_.js","./chakra-legacy-Ts5iMId3.js","./react-legacy-T1GznqXM.js","./stations-legacy-Df4IUGaX.js"],(function(e,t){"use strict";var n,l,a,i,o,s,r,d,c,m,h,u,x,p,g;return{setters:[e=>{n=e.am,l=e.C,a=e.c,i=e.an,o=e.b,s=e.j,r=e.S},e=>{d=e.j},e=>{c=e.b,m=e.u},e=>{h=e.L,u=e.M,x=e.F,p=e.b,g=e.f}],execute:function(){const t={component:e=>{const{id:t,x:n,y:l,handlePointerDown:a,handlePointerMove:i,handlePointerUp:o}=e,s=c.useCallback((e=>a(t,e)),[t,a]),r=c.useCallback((e=>i(t,e)),[t,i]),m=c.useCallback((e=>o(t,e)),[t,o]);return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})rotate(45)`,onPointerDown:s,onPointerMove:r,onPointerUp:m,style:{cursor:"move"},children:[d.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),d.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),d.jsx("circle",{id:`virtual_circle_${t}`,r:5,stroke:"black",fill:"white",fillOpacity:"0"})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[d.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),d.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),d.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),defaultAttrs:{},attrsComponent:()=>d.jsx(n,{fields:[]}),metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},f={num:1,color:[l.Shanghai,"sh1","#E4002B",a.white]},y=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:f).num,validator:e=>!Number.isNaN(e),onChange:(e,t)=>{const n=null!=t?t:f;return Number.isNaN(e)||(n.num=Number(e)),n}},{type:"custom",label:"color",component:d.jsx(i,{type:o.ShmetroNumLineBadge,defaultTheme:f.color})}],j={component:e=>{const{id:t,x:n,y:l,attrs:a,handlePointerDown:i,handlePointerMove:o,handlePointerUp:s}=e,{num:r=f.num,color:m=f.color}=null!=a?a:f,[h,u]=r>=10?[22.67,10.75]:[21,10],x=c.useCallback((e=>i(t,e)),[t,i]),p=c.useCallback((e=>o(t,e)),[t,o]),g=c.useCallback((e=>s(t,e)),[t,s]);return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})`,onPointerDown:x,onPointerMove:p,onPointerUp:g,style:{cursor:"move"},children:[d.jsx("rect",{fill:m[2],width:h,height:"22.67"}),d.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:u,y:"19",fill:m[3],fontSize:"21.33",letterSpacing:"-1.75",children:r}),d.jsx("text",{className:"rmp-name__zh",x:h+2,y:"12",fontSize:"14.67",children:"号线"}),d.jsxs("text",{className:"rmp-name__en",x:h+4,y:"21.5",fontSize:"8",children:["Line ",r]})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),d.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),d.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),d.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),defaultAttrs:f,attrsComponent:()=>d.jsx(n,{fields:y}),metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},b={names:["浦江线","Pujiang Line"],color:[l.Shanghai,"pjl","#B5B5B6",a.white]},w={component:e=>{const{id:t,x:n,y:l,attrs:a,handlePointerDown:i,handlePointerMove:o,handlePointerUp:s}=e,{names:r=b.names,color:m=b.color}=null!=a?a:b,h=c.useRef(null),[u,x]=c.useState({width:12});c.useEffect((()=>x(h.current.getBBox())),[...r,x,h]);const p=c.useCallback((e=>i(t,e)),[t,i]),g=c.useCallback((e=>o(t,e)),[t,o]),f=c.useCallback((e=>s(t,e)),[t,s]);return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})`,onPointerDown:p,onPointerMove:g,onPointerUp:f,style:{cursor:"move"},children:[d.jsx("rect",{fill:m[2],x:"0",width:u.width+7,height:"21"}),d.jsxs("g",{ref:h,children:[d.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(u.width+7)/2,y:"4",fontSize:"10",fill:m[3],letterSpacing:"-0.25",children:r[0]}),d.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(u.width+7)/2,y:"13",fontSize:"5",fill:m[3],letterSpacing:"-0.25",children:r[1]})]})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),d.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),d.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),defaultAttrs:b,attrsComponent:e=>{const{id:t,attrs:n,handleAttrsUpdate:l}=e,{t:a}=m(),r=[{type:"textarea",label:a("panel.details.nodes.common.nameZh"),value:n.names[0],onChange:e=>{n.names[0]=e,l(t,n)},minW:"full"},{type:"input",label:a("panel.details.nodes.common.nameEn"),value:n.names[1],onChange:e=>{n.names[1]=e,l(t,n)},minW:"full"},{type:"custom",label:a("color"),component:d.jsx(i,{type:o.ShmetroTextLineBadge,defaultTheme:b.color})}];return d.jsx(s,{fields:r})},metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},N={names:["1号线","Line 1"],color:[l.Guangzhou,"gz1","#F3D03E",a.black],tram:!1},v={component:e=>{var t,n;const{id:l,x:a,y:i,attrs:o,handlePointerDown:s,handlePointerMove:r,handlePointerUp:m}=e,{names:u=N.names,color:x=N.color,tram:p=N.tram}=null!=o?o:N,g=c.useCallback((e=>s(l,e)),[l,s]),f=c.useCallback((e=>r(l,e)),[l,r]),y=c.useCallback((e=>m(l,e)),[l,m]);return d.jsx("g",{id:l,transform:`translate(${a}, ${i})scale(${p?.5:1})`,onPointerDown:g,onPointerMove:f,onPointerUp:y,style:{cursor:"move"},children:d.jsx(h,{zhName:null!==(t=u.at(0))&&void 0!==t?t:"",enName:null!==(n=u.at(1))&&void 0!==n?n:"",zhClassName:"rmp-name__zh",enClassName:"rmp-name__en",foregroundColour:x[3],backgroundColour:x[2],spanDigits:!0})})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),d.jsx("text",{x:"6",y:"15",textAnchor:"middle",fontSize:"10",fill:"white",children:"1"}),d.jsx("text",{x:"15",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"号线"}),d.jsx("text",{x:"14.5",y:"17",textAnchor:"middle",fontSize:"4",fill:"white",children:"Line 1"})]}),defaultAttrs:N,attrsComponent:e=>{const{id:t,attrs:n,handleAttrsUpdate:l}=e,{t:a}=m(),r=[{type:"input",label:a("panel.details.nodes.common.nameZh"),value:n.names[0],onChange:e=>{n.names[0]=e,l(t,n)},minW:"full"},{type:"input",label:a("panel.details.nodes.common.nameEn"),value:n.names[1],onChange:e=>{n.names[1]=e,l(t,n)},minW:"full"},{type:"switch",label:a("panel.details.nodes.gzmtrLineBadge.tram"),oneLine:!0,isChecked:n.tram,onChange:e=>{n.tram=e,l(t,n)},minW:"full"},{type:"custom",label:a("color"),component:d.jsx(i,{type:o.GzmtrLineBadge,defaultTheme:N.color})}];return d.jsx(s,{fields:r})},metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},C=11.84375,B={num:1,color:[l.Beijing,"bj1","#c23a30",a.white]},S=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:B).num,validator:e=>!Number.isNaN(e),onChange:(e,t)=>{const n=null!=t?t:B;return Number.isNaN(e)||(n.num=Number(e)),n}},{type:"custom",label:"color",component:d.jsx(i,{type:o.BjsubwayNumLineBadge,defaultTheme:B.color})}],P={component:e=>{const{id:t,x:n,y:l,attrs:i,handlePointerDown:o,handlePointerMove:s,handlePointerUp:r}=e,{num:m=B.num,color:h=B.color}=null!=i?i:B,u=c.useCallback((e=>o(t,e)),[t,o]),x=c.useCallback((e=>s(t,e)),[t,s]),p=c.useCallback((e=>r(t,e)),[t,r]),g=h[3]===a.black?"#003670":a.white;return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})`,onPointerDown:u,onPointerMove:x,onPointerUp:p,style:{cursor:"move"},children:[d.jsx("rect",{fill:h[2],x:"0",width:32.84375,height:"16",rx:"2"}),d.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:7.921875,y:"13.5",fill:g,fontSize:"15",letterSpacing:"-1.5",children:m}),d.jsx("text",{className:"rmp-name__zh",x:C+(m>9?5.5:3),y:"8.5",fontSize:"7",fill:g,children:"号线"}),d.jsxs("text",{className:"rmp-name__en",x:C+(m>9?6:4.5),y:"13.5",fontSize:"4",fill:g,children:["Line ",m]})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),d.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),d.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),d.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),defaultAttrs:B,attrsComponent:()=>d.jsx(n,{fields:S}),metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},_={names:["八通线","Batong Line"],color:[l.Beijing,"bj1","#c23a30",a.white]},z=[{type:"input",label:"panel.details.nodes.common.nameZh",value:e=>(null!=e?e:_).names[0],onChange:(e,t)=>{const n=null!=t?t:_;return n.names[0]=e.toString(),n}},{type:"input",label:"panel.details.nodes.common.nameEn",value:e=>(null!=e?e:_).names[1],onChange:(e,t)=>{const n=null!=t?t:_;return n.names[1]=e.toString(),n}},{type:"custom",label:"color",component:d.jsx(i,{type:o.BjsubwayTextLineBadge,defaultTheme:_.color})}],k={component:e=>{const{id:t,x:n,y:l,attrs:i,handlePointerDown:o,handlePointerMove:s,handlePointerUp:r}=e,{names:m=_.names,color:h=_.color}=null!=i?i:_,u=c.useRef(null),[x,p]=c.useState({width:12});c.useEffect((()=>p(u.current.getBBox())),[...m,p,u]);const g=c.useCallback((e=>o(t,e)),[t,o]),f=c.useCallback((e=>s(t,e)),[t,s]),y=c.useCallback((e=>r(t,e)),[t,r]),j=Math.max(28.84375,x.width),b=h[3]===a.black?"#003670":a.white;return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})`,onPointerDown:g,onPointerMove:f,onPointerUp:y,style:{cursor:"move"},children:[d.jsx("rect",{fill:h[2],x:"0",width:j+4,height:"16",rx:"2"}),d.jsxs("g",{ref:u,children:[d.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(j+4)/2,y:"8",fontSize:"7",fill:b,children:m[0]}),d.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(j+4)/2,y:"13.5",fontSize:"4",fill:b,children:m[1]})]})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),d.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),d.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),defaultAttrs:_,attrsComponent:()=>d.jsx(n,{fields:z}),metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},L={num:1,branch:!1,color:[l.Suzhou,"sz1","#78BA25",a.white]},A=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:L).num,validator:e=>!Number.isNaN(e),onChange:(e,t)=>{const n=null!=t?t:L;return Number.isNaN(e)||(n.num=Number(e)),n}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:e=>{var t;return null!==(t=null==e?void 0:e.branch)&&void 0!==t?t:L.branch},onChange:(e,t)=>{const n=null!=t?t:L;return n.branch=e,n}},{type:"custom",label:"color",component:d.jsx(i,{type:o.SuzhouRTNumLineBadge,defaultTheme:L.color})}],T={component:e=>{const{id:t,x:n,y:l,attrs:a,handlePointerDown:i,handlePointerMove:o,handlePointerUp:s}=e,{num:r=L.num,branch:m=L.branch,color:h=L.color}=null!=a?a:L,u=c.useCallback((e=>i(t,e)),[t,i]),x=c.useCallback((e=>o(t,e)),[t,o]),p=c.useCallback((e=>s(t,e)),[t,s]);return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})`,onPointerDown:u,onPointerMove:x,onPointerUp:p,style:{cursor:"move"},children:[d.jsx("rect",{fill:h[2],width:"20",height:"20",rx:"2",ry:"2"}),d.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:h[3],fontSize:"15",letterSpacing:"-1",children:r}),m&&d.jsxs(d.Fragment,{children:[d.jsx("text",{className:"rmp-name__zh",x:22.5,y:"10",fontSize:"10",children:"支线"}),d.jsx("text",{className:"rmp-name__en",x:22.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),d.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),defaultAttrs:L,attrsComponent:()=>d.jsx(n,{fields:A}),metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},U={num:1,color:[l.Berlin,"bu1","#62AD2D",a.white]},$=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:U).num,validator:e=>!Number.isNaN(e),onChange:(e,t)=>{const n=null!=t?t:U;return Number.isNaN(e)||(n.num=Number(e)),n}},{type:"custom",label:"color",component:d.jsx(i,{type:o.BerlinUBahnLineBadge,defaultTheme:U.color})}],M={component:e=>{const{id:t,x:n,y:l,attrs:a,handlePointerDown:i,handlePointerMove:o,handlePointerUp:s}=e,{num:r=U.num,color:m=U.color}=null!=a?a:U,h=c.useCallback((e=>i(t,e)),[t,i]),u=c.useCallback((e=>o(t,e)),[t,o]),x=c.useCallback((e=>s(t,e)),[t,s]),p=m[3];return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})`,onPointerDown:h,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[d.jsx("rect",{fill:m[2],x:"0",width:"25",height:"15"}),d.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:p,fontSize:"14",letterSpacing:"1",children:["U",r]})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),d.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),defaultAttrs:U,attrsComponent:()=>d.jsx(n,{fields:$}),metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},D={num:1,color:[l.Berlin,"bs1","#DD6CA6",a.white]},W=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:D).num,validator:e=>!Number.isNaN(e),onChange:(e,t)=>{const n=null!=t?t:D;return Number.isNaN(e)||(n.num=Number(e)),n}},{type:"custom",label:"color",component:d.jsx(i,{type:o.BerlinSBahnLineBadge,defaultTheme:D.color})}],R={component:e=>{const{id:t,x:n,y:l,attrs:a,handlePointerDown:i,handlePointerMove:o,handlePointerUp:s}=e,{num:r=D.num,color:m=D.color}=null!=a?a:D,[h,u]=r>=10?[6,19.75]:[10,20],x=c.useCallback((e=>i(t,e)),[t,i]),p=c.useCallback((e=>o(t,e)),[t,o]),g=c.useCallback((e=>s(t,e)),[t,s]),f=m[3];return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})`,onPointerDown:x,onPointerMove:p,onPointerUp:g,style:{cursor:"move"},children:[d.jsx("rect",{fill:m[2],x:"0",width:"30",height:"15",rx:"8"}),d.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:h,y:"12.5",fill:f,fontSize:"14",letterSpacing:"0",children:"S"}),d.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:u,y:"12.5",fill:f,fontSize:"14",letterSpacing:"-0.2",children:r})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),d.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),defaultAttrs:D,attrsComponent:()=>d.jsx(n,{fields:W}),metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}},E={num:1,color:[l.Chongqing,"cq1","#e4002b",a.white]},H=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:E).num,validator:e=>!Number.isNaN(e),onChange:(e,t)=>{const n=null!=t?t:E;return Number.isNaN(Number(e))?n.num=e:n.num=Number(e),n}},{type:"custom",label:"color",component:d.jsx(i,{type:o.ChongqingRTNumLineBadge,defaultTheme:E.color})}],q={component:e=>{const{id:t,x:n,y:l,attrs:a,handlePointerDown:i,handlePointerMove:o,handlePointerUp:s}=e,{num:r=E.num,color:m=E.color}=null!=a?a:E,h=c.useCallback((e=>i(t,e)),[t,i]),u=c.useCallback((e=>o(t,e)),[t,o]),x=c.useCallback((e=>s(t,e)),[t,s]),p=m[3],g=Number.isInteger(r)?16:15,[f,y]=Number.isInteger(r)?Number(r)>=10?[-1.2,1.5]:[0,5.5]:[0,2.55];return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})`,onPointerDown:h,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[d.jsx("rect",{fill:m[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),d.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:y,y:"10",fill:p,fontSize:g,letterSpacing:f,dominantBaseline:"central",children:r})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),d.jsx("text",{x:"8",y:"18",fill:"white",fontSize:"18",children:"1"})]}),defaultAttrs:E,attrsComponent:()=>d.jsx(n,{fields:H}),metadata:{displayName:"panel.details.nodes.chongqingRTNumLineBadge.displayName",tags:[]}},F={names:["空港线","Konggang Line"],color:[l.Chongqing,"cq3","#003da5",a.white]},I=[{type:"input",label:"panel.details.nodes.common.nameZh",value:e=>(null!=e?e:F).names[0],onChange:(e,t)=>{const n=null!=t?t:F;return n.names[0]=e.toString(),n}},{type:"textarea",label:"panel.details.nodes.common.nameEn",value:e=>(null!=e?e:F).names[1],onChange:(e,t)=>{const n=null!=t?t:F;return n.names[1]=e.toString(),n}},{type:"custom",label:"color",component:d.jsx(i,{type:o.ChongqingRTTextLineBadge,defaultTheme:F.color})}],O={component:e=>{const{id:t,x:n,y:l,attrs:a,handlePointerDown:i,handlePointerMove:o,handlePointerUp:s}=e,{names:r=F.names,color:m=F.color}=null!=a?a:F,h=c.useRef(null),x=c.useCallback((e=>i(t,e)),[t,i]),p=c.useCallback((e=>o(t,e)),[t,o]),g=c.useCallback((e=>s(t,e)),[t,s]),f=m[3];return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})`,onPointerDown:x,onPointerMove:p,onPointerUp:g,style:{cursor:"move"},children:[d.jsx("rect",{fill:m[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),d.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:"10",y:"10.5",fill:f,fontSize:"6",letterSpacing:"0",children:r[0]}),d.jsx(u,{ref:h,text:r[1].split("\n"),className:"rmp-name__en",textAnchor:"middle",x:"10",y:"9.25",fill:f,fontSize:"2.5",letterSpacing:"0",lineHeight:2.25,grow:"down"})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),d.jsx("text",{x:"4.5",y:"12.5",fill:"white",fontSize:"5",children:"空港线"}),d.jsx("text",{x:"4.5",y:"15",fill:"white",fontSize:"2",children:"Konggang Line"})]}),defaultAttrs:F,attrsComponent:()=>d.jsx(n,{fields:I}),metadata:{displayName:"panel.details.nodes.chongqingRTTextLineBadge.displayName",tags:[]}},J=11.84375,Z={num:1,color:[l.Shenzhen,"sz1","#00b140",a.white],isBranch:!1},G={component:e=>{const{id:t,x:n,y:l,attrs:i,handlePointerDown:o,handlePointerMove:s,handlePointerUp:r}=e,{num:m=Z.num,color:h=Z.color,isBranch:u=Z.isBranch}=null!=i?i:Z,x=c.useCallback((e=>o(t,e)),[t,o]),p=c.useCallback((e=>s(t,e)),[t,s]),g=c.useCallback((e=>r(t,e)),[t,r]),f=h[3]===a.black?"#003670":a.white,y=u?10:J+(m>9?6.5:3),j=u?-1:0,b=u?11:J+(m>9?7:3.5),w=u?6:9.921875;return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})`,onPointerDown:x,onPointerMove:p,onPointerUp:g,style:{cursor:"move"},children:[d.jsx("rect",{fill:h[2],x:"0",width:32.84375,height:"16",rx:"2"}),d.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:w,y:"13.5",fill:f,fontSize:"15",letterSpacing:"-1",children:m}),d.jsxs("text",{className:"rmp-name__zh",x:y,y:"9.5",fontSize:"6",fill:f,letterSpacing:j,children:["号线",u?"支线":""]}),d.jsxs("text",{className:"rmp-name__en",x:b,y:"13.5",fontSize:"3",fill:f,children:[u?"Branch":""," Line ",m]})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),d.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),d.jsx("text",{x:"11",y:"14",fill:"white",fontSize:"5",children:"号线"}),d.jsx("text",{x:"12",y:"17",fill:"white",fontSize:"3",children:"Line 1"})]}),defaultAttrs:Z,attrsComponent:e=>{const{id:t,attrs:n,handleAttrsUpdate:l}=e,{t:a}=m(),r=[{type:"input",label:a("panel.details.nodes.common.num"),value:String(n.num),validator:e=>!Number.isNaN(e),onChange:e=>{n.num=Number(e),l(t,n)},minW:"full"},{type:"custom",label:a("color"),component:d.jsx(i,{type:o.ShenzhenMetroNumLineBadge,defaultTheme:Z.color}),minW:"full"},{type:"switch",label:a("panel.details.nodes.shenzhenMetroNumLineBadge.branch"),oneLine:!0,isChecked:n.isBranch,onChange:e=>{n.isBranch=e,l(t,n)},minW:"full"}];return d.jsx(s,{fields:r})},metadata:{displayName:"panel.details.nodes.shenzhenMetroNumLineBadge.displayName",tags:[]}},Q={num:1,color:[l.Singapore,"ewl","#009739",a.white]},K={component:e=>{const{id:t,x:n,y:l,attrs:a,handlePointerDown:i,handlePointerMove:o,handlePointerUp:s}=e,{num:r=Q.num,color:m=Q.color}=null!=a?a:Q,h=c.useCallback((e=>i(t,e)),[t,i]),u=c.useCallback((e=>o(t,e)),[t,o]),x=c.useCallback((e=>s(t,e)),[t,s]),p=m[3],g=m[2];return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})`,onPointerDown:h,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[d.jsx("circle",{r:"6",fill:g}),d.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",x:"0",y:"0",width:"12",height:"12",fill:p,fontSize:"9",dominantBaseline:"central",letterSpacing:"-0.2",children:r})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),d.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),defaultAttrs:Q,attrsComponent:e=>{const{id:t,attrs:n,handleAttrsUpdate:l}=e,{t:a}=m(),r=[{type:"input",label:a("panel.details.nodes.common.num"),value:String(n.num),validator:e=>!Number.isNaN(e),onChange:e=>{n.num=Number(e),l(t,n)},minW:"full"},{type:"custom",label:a("color"),component:d.jsx(i,{type:o.MRTDestinationNumbers,defaultTheme:Q.color}),minW:"full"}];return d.jsx(s,{fields:r})},metadata:{displayName:"panel.details.nodes.mrtDestinationNumbers.displayName",tags:[]}},Y=5*Math.SQRT1_2,V=.25,X=(Y*Math.SQRT2-V)/2*Math.SQRT2,ee={names:["山手線","Yamanote Line"],color:[l.Tokyo,"jy","#9ACD32",a.black],num:9,crosshatchPatternFill:!1},te={component:e=>{const{id:t,x:n,y:l,attrs:a,handlePointerDown:i,handlePointerMove:o,handlePointerUp:s}=e,{names:r=ee.names,num:m=ee.num,color:h=ee.color,crosshatchPatternFill:x=ee.crosshatchPatternFill}=null!=a?a:ee,p=c.useRef(null),[g,f]=c.useState({height:10,width:12});c.useEffect((()=>f(p.current.getBBox())),[...r,f,p]);const y=c.useCallback((e=>i(t,e)),[t,i]),j=c.useCallback((e=>o(t,e)),[t,o]),b=c.useCallback((e=>s(t,e)),[t,s]);return d.jsxs("g",{id:t,transform:`translate(${n}, ${l})`,onPointerDown:y,onPointerMove:j,onPointerUp:b,style:{cursor:"move"},children:[d.jsxs("defs",{children:[d.jsxs("clipPath",{id:"jr_east_fill_pattern_clip_path",patternUnits:"userSpaceOnUse",children:[d.jsx("polygon",{points:`0,0 0,${X} ${X},0`}),d.jsx("polygon",{points:`${Y},${Y} ${Y-X},${Y} ${Y},${Y-X}`})]}),d.jsxs("pattern",{id:`jr_east_${t}_fill_pattern_${h[2]}`,width:Y,height:Y,patternUnits:"userSpaceOnUse",children:[d.jsx("rect",{width:Y,height:Y,fill:h[2]}),d.jsx("line",{x1:"0",y1:"0",x2:Y,y2:Y,stroke:"white",strokeWidth:V,strokeOpacity:"33%",clipPath:"url(#jr_east_fill_pattern_clip_path)"}),d.jsx("line",{x1:Y,y1:"0",x2:"0",y2:Y,stroke:"white",strokeWidth:V,strokeOpacity:"33%"})]})]}),d.jsx("rect",{fill:x?`url(#jr_east_${t}_fill_pattern_${h[2]})`:h[2],x:"0",y:"-1",width:g.width+4+10,height:g.height+1,rx:"1",stroke:"black",strokeWidth:"0.25"}),d.jsx("circle",{r:4,cx:7,cy:6,stroke:"black",strokeWidth:"0.25",fill:h[3]}),d.jsx("text",{x:7,y:6.75,textAnchor:"middle",dominantBaseline:"middle",fill:"#000"===h[3]?"white":h[2],fontSize:m>9?7:8,className:"rmp-name__jreast_en",children:m}),d.jsx(u,{ref:p,text:r[0].split("\\"),x:12,y:"-1",fill:h[3],fontSize:10,lineHeight:10,grow:"down",className:"rmp-name__jreast_ja"}),d.jsx(u,{text:r[1].split("\\"),textAnchor:"middle",dominantBaseline:"hanging",x:(g.width+4+10)/2,y:g.height+1,fontSize:5,lineHeight:5,baseOffset:0,grow:"down",className:"rmp-name__jreast_en"})]})},icon:d.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[d.jsx("rect",{fill:"currentColor",x:"1",y:"6",width:"22",height:"7"}),d.jsx("circle",{cx:"3.5",cy:"9.25",r:"2",fill:"white"}),d.jsx("text",{x:"3",y:"10.5",fontSize:"3",children:"9"}),d.jsx("text",{x:"6",y:"11.25",fontSize:"5",fill:"white",children:"山手線"}),d.jsx("text",{x:"1.5",y:"16",fontSize:"3",children:"Yamanote Line"})]}),defaultAttrs:ee,attrsComponent:e=>{const{id:t,attrs:n,handleAttrsUpdate:l}=e,{t:a}=m(),r=[{type:"input",label:a("panel.details.nodes.common.num"),value:String(n.num),validator:e=>!Number.isNaN(e),onChange:e=>{n.num=Number(e),l(t,n)},minW:"full"},{type:"textarea",label:a("panel.details.nodes.common.nameJa"),value:n.names[0].replaceAll("\\","\n"),onChange:e=>{n.names[0]=e.replaceAll("\n","\\"),l(t,n)},minW:"full"},{type:"textarea",label:a("panel.details.nodes.common.nameEn"),value:n.names[1].replaceAll("\\","\n"),onChange:e=>{n.names[1]=e.replaceAll("\n","\\"),l(t,n)},minW:"full"},{type:"switch",label:a("panel.details.lines.jrEastLineBadge.crosshatchPatternFill"),oneLine:!0,isChecked:n.crosshatchPatternFill,onChange:e=>{n.crosshatchPatternFill=e,l(t,n)},minW:"full"},{type:"custom",label:a("color"),component:d.jsx(i,{type:o.JREastLineBadge,defaultTheme:ee.color})}];return d.jsx(s,{fields:r})},metadata:{displayName:"panel.details.nodes.jrEastLineBadge.displayName",tags:[]}},ne={content:"Enter your text here",fontSize:16,lineHeight:16,textAnchor:"middle",dominantBaseline:"middle",language:"en",color:[l.Shanghai,"jsr","#000000",a.white],rotate:0,italic:"normal",bold:"normal"},le={component:e=>{const{id:t,x:n,y:l,attrs:a,handlePointerDown:i,handlePointerMove:s,handlePointerUp:m}=e,{content:h=ne.content,fontSize:p=ne.fontSize,lineHeight:g=ne.lineHeight,textAnchor:f=ne.textAnchor,dominantBaseline:y=ne.dominantBaseline,language:j=ne.language,color:b=ne.color,rotate:w=ne.rotate,italic:N=ne.italic,bold:v=ne.bold}=null!=a?a:ne,C=c.useRef(null),[B,S]=c.useState({x:0,y:0,width:32,height:16});c.useEffect((()=>S(C.current.getBBox())),[h,f,y,S,C]),c.useEffect((()=>{const e={mtr__zh:r.MTR,mtr__en:r.MTR,berlin:o.BerlinSBahnLineBadge,mrt:r.MRTBasic,jreast_ja:r.JREastBasic,jreast_en:r.JREastBasic}[j];if(e&&null===document.getElementById(x[e].cssName)){const t=x[e].cssName,n=document.createElement("link");n.rel="stylesheet",n.id=t,n.href=`/rmp/styles/${t}.css`,document.head.append(n)}}),[j]);const P=c.useCallback((e=>i(t,e)),[t,i]),_=c.useCallback((e=>s(t,e)),[t,s]),z=c.useCallback((e=>m(t,e)),[t,m]);return d.jsx("g",{id:t,transform:`translate(${n}, ${l})rotate(${w})`,onPointerDown:P,onPointerMove:_,onPointerUp:z,style:{cursor:"move"},children:d.jsx(u,{ref:C,text:h.split("\n"),lineHeight:g,grow:"down",className:`rmp-name__${j}`,fontSize:p,textAnchor:f,dominantBaseline:y,fill:b[2],fontStyle:N,fontWeight:v})})},icon:d.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:d.jsx("text",{x:"12",y:"12",textAnchor:"middle",dominantBaseline:"middle",fontSize:"10",children:"Text"})}),defaultAttrs:ne,attrsComponent:e=>{var t,n,l,a,r,c,h;const{id:u,attrs:x,handleAttrsUpdate:p}=e,{t:g}=m(),f=[{type:"textarea",label:g("panel.details.nodes.text.content"),value:null!==(t=x.content)&&void 0!==t?t:ne.content,onChange:e=>{x.content=e.toString(),p(u,x)},minW:"full"},{type:"input",label:g("panel.details.nodes.text.fontSize"),value:(null!==(n=x.fontSize)&&void 0!==n?n:ne.fontSize).toString(),validator:e=>Number.isInteger(e)&&Number(e)>0,onChange:e=>{x.fontSize=Number(e),p(u,x)},minW:"full"},{type:"input",label:g("panel.details.nodes.text.lineHeight"),value:(null!==(l=x.lineHeight)&&void 0!==l?l:ne.lineHeight).toString(),validator:e=>Number.isInteger(e)&&Number(e)>0,onChange:e=>{x.lineHeight=Number(e),p(u,x)},minW:"full"},{type:"select",label:g("panel.details.nodes.text.textAnchor"),value:null!==(a=x.textAnchor)&&void 0!==a?a:ne.textAnchor,options:{start:g("panel.details.nodes.text.start"),middle:g("panel.details.nodes.text.middle"),end:g("panel.details.nodes.text.end")},onChange:e=>{x.textAnchor=e,p(u,x)},minW:"full"},{type:"select",label:g("panel.details.nodes.text.dominantBaseline"),value:null!==(r=x.dominantBaseline)&&void 0!==r?r:ne.dominantBaseline,options:{auto:g("panel.details.nodes.text.auto"),middle:g("panel.details.nodes.text.middle"),hanging:g("panel.details.nodes.text.hanging")},onChange:e=>{x.dominantBaseline=e,p(u,x)},minW:"full"},{type:"select",label:g("panel.details.nodes.text.language"),value:null!==(c=x.language)&&void 0!==c?c:ne.language,options:{zh:g("panel.details.nodes.text.zh"),en:g("panel.details.nodes.text.en"),mtr__zh:g("panel.details.nodes.text.mtr__zh"),mtr__en:g("panel.details.nodes.text.mtr__en"),berlin:g("panel.details.nodes.text.berlin"),mrt:g("panel.details.nodes.text.mrt"),jreast_ja:g("panel.details.nodes.text.jreast_ja"),jreast_en:g("panel.details.nodes.text.jreast_en")},onChange:e=>{x.language=e.toString(),p(u,x)},minW:"full"},{type:"select",label:g("panel.details.nodes.text.rotate"),value:null!==(h=x.rotate)&&void 0!==h?h:ne.rotate,options:{0:"0",45:"45",90:"90",135:"135",180:"180",225:"225",270:"270",315:"315"},onChange:e=>{x.rotate=Number(e),p(u,x)},minW:"full"},{type:"switch",label:g("panel.details.nodes.text.italic"),isChecked:"italic"===x.italic,onChange:e=>{x.italic=e?"italic":"normal",p(u,x)},minW:"full"},{type:"switch",label:g("panel.details.nodes.text.bold"),isChecked:"bold"===x.bold,onChange:e=>{x.bold=e?"bold":"normal",p(u,x)},minW:"full"},{type:"custom",label:g("color"),component:d.jsx(i,{type:o.Text,defaultTheme:ne.color})}];return d.jsx(s,{fields:f})},metadata:{displayName:"panel.details.nodes.text.displayName",tags:[]}},ae={contents:{},...ne},ie={component:e=>{const{id:t,x:n,y:l,attrs:a,handlePointerDown:i,handlePointerMove:o,handlePointerUp:s}=e,r=p();a.content=r(a.contents);const c=le.component;return d.jsx(c,{id:t,x:n,y:l,handlePointerDown:i,handlePointerMove:o,handlePointerUp:s,attrs:a})},icon:le.icon,defaultAttrs:ae,attrsComponent:le.attrsComponent,metadata:{displayName:"panel.details.nodes.i18nText.displayName",tags:[]}};e("m",{[o.Virtual]:t,[o.ShmetroNumLineBadge]:j,[o.ShmetroTextLineBadge]:w,[o.GzmtrLineBadge]:v,[o.BjsubwayNumLineBadge]:P,[o.BjsubwayTextLineBadge]:k,[o.SuzhouRTNumLineBadge]:T,[o.BerlinSBahnLineBadge]:R,[o.BerlinUBahnLineBadge]:M,[o.ChongqingRTNumLineBadge]:q,[o.ChongqingRTTextLineBadge]:O,[o.ShenzhenMetroNumLineBadge]:G,[o.MRTDestinationNumbers]:K,[o.JREastLineBadge]:te,[o.Facilities]:g,[o.Text]:le,[o.I18nText]:ie})}}}));
