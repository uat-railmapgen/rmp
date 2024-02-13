import{ap as T,C as S,c as N,aq as L,b,j as W,S as q}from"./index-g0cexJpe.js";import{j as n}from"./chakra-77DnoTeR.js";import{b as s,u as F}from"./react-hBmrxY6U.js";import{L as ie,M as V,l as se,b as re,f as ce}from"./stations-GR7_IN8a.js";const de=o=>{const{id:e,x:t,y:i,handlePointerDown:l,handlePointerMove:r,handlePointerUp:a}=o,h=s.useCallback(m=>l(e,m),[e,l]),d=s.useCallback(m=>r(e,m),[e,r]),u=s.useCallback(m=>a(e,m),[e,a]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")rotate(45)"),onPointerDown:h,onPointerMove:d,onPointerUp:u,style:{cursor:"move"},children:[n.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),n.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),n.jsx("circle",{id:"virtual_circle_".concat(e),r:5,stroke:"black",fill:"white",fillOpacity:"0"})]})},me={},he=()=>n.jsx(T,{fields:[]}),ue=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[n.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),n.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),n.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),xe={component:de,icon:ue,defaultAttrs:me,attrsComponent:he,metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},ge=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{num:d=M.num,color:u=M.color}=l!=null?l:M,[m,f]=d>=10?[22.67,10.75]:[21,10],g=s.useCallback(p=>r(e,p),[e,r]),c=s.useCallback(p=>a(e,p),[e,a]),x=s.useCallback(p=>h(e,p),[e,h]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:g,onPointerMove:c,onPointerUp:x,style:{cursor:"move"},children:[n.jsx("rect",{fill:u[2],width:m,height:"22.67"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:f,y:"19",fill:u[3],fontSize:"21.33",letterSpacing:"-1.75",children:d}),n.jsx("text",{className:"rmp-name__zh",x:m+2,y:"12",fontSize:"14.67",children:"号线"}),n.jsxs("text",{className:"rmp-name__en",x:m+4,y:"21.5",fontSize:"8",children:["Line ",d]})]})},M={num:1,color:[S.Shanghai,"sh1","#E4002B",N.white]},pe=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:M).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:M;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:n.jsx(L,{type:b.ShmetroNumLineBadge,defaultTheme:M.color})}],fe=()=>n.jsx(T,{fields:pe}),be=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),n.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),n.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),n.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),ye={component:ge,icon:be,defaultAttrs:M,attrsComponent:fe,metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},je=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{names:d=H.names,color:u=H.color}=l!=null?l:H,m=s.useRef(null),[f,g]=s.useState({width:12});s.useEffect(()=>g(m.current.getBBox()),[...d,g,m]);const c=s.useCallback(y=>r(e,y),[e,r]),x=s.useCallback(y=>a(e,y),[e,a]),p=s.useCallback(y=>h(e,y),[e,h]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:c,onPointerMove:x,onPointerUp:p,style:{cursor:"move"},children:[n.jsx("rect",{fill:u[2],x:"0",width:f.width+7,height:"21"}),n.jsxs("g",{ref:m,children:[n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(f.width+7)/2,y:"4",fontSize:"10",fill:u[3],letterSpacing:"-0.25",children:d[0]}),n.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(f.width+7)/2,y:"13",fontSize:"5",fill:u[3],letterSpacing:"-0.25",children:d[1]})]})]})},H={names:["浦江线","Pujiang Line"],color:[S.Shanghai,"pjl","#B5B5B6",N.white]},Be=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:l}=F(),r=[{type:"textarea",label:l("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:a=>{t.names[0]=a,i(e,t)},minW:"full"},{type:"input",label:l("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:a=>{t.names[1]=a,i(e,t)},minW:"full"},{type:"custom",label:l("color"),component:n.jsx(L,{type:b.ShmetroTextLineBadge,defaultTheme:H.color})}];return n.jsx(W,{fields:r})},Ne=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),n.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),n.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),we={component:je,icon:Ne,defaultAttrs:H,attrsComponent:Be,metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},Ce=o=>{var p,y;const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{names:d=k.names,color:u=k.color,tram:m=k.tram,span:f=k.span}=l!=null?l:k,g=s.useCallback(B=>r(e,B),[e,r]),c=s.useCallback(B=>a(e,B),[e,a]),x=s.useCallback(B=>h(e,B),[e,h]);return n.jsx("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")scale(").concat(m?.5:1,")"),onPointerDown:g,onPointerMove:c,onPointerUp:x,style:{cursor:"move"},children:n.jsx(ie,{zhName:(p=d.at(0))!=null?p:"",enName:(y=d.at(1))!=null?y:"",zhClassName:"rmp-name__zh",enClassName:"rmp-name__en",foregroundColour:u[3],backgroundColour:u[2],spanDigits:f})})},k={names:["1号线","Line 1"],color:[S.Guangzhou,"gz1","#F3D03E",N.black],tram:!1,span:!0},Se=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:l}=F(),r=[{type:"input",label:l("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:a=>{t.names[0]=a,i(e,t)},minW:"full"},{type:"input",label:l("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:a=>{t.names[1]=a,i(e,t)},minW:"full"},{type:"switch",label:l("panel.details.nodes.gzmtrLineBadge.tram"),oneLine:!0,isChecked:t.tram,onChange:a=>{t.tram=a,i(e,t)},minW:"full"},{type:"switch",label:l("panel.details.nodes.gzmtrLineBadge.span"),oneLine:!0,isChecked:t.span,onChange:a=>{t.span=a,i(e,t)},minW:"full"},{type:"custom",label:l("color"),component:n.jsx(L,{type:b.GzmtrLineBadge,defaultTheme:k.color})}];return n.jsx(W,{fields:r})},Le=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),n.jsx("text",{x:"6",y:"15",textAnchor:"middle",fontSize:"10",fill:"white",children:"1"}),n.jsx("text",{x:"15",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"号线"}),n.jsx("text",{x:"14.5",y:"17",textAnchor:"middle",fontSize:"4",fill:"white",children:"Line 1"})]}),ze={component:Ce,icon:Le,defaultAttrs:k,attrsComponent:Se,metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},O=11.84375,ve=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{num:d=R.num,color:u=R.color}=l!=null?l:R,m=s.useCallback(x=>r(e,x),[e,r]),f=s.useCallback(x=>a(e,x),[e,a]),g=s.useCallback(x=>h(e,x),[e,h]),c=u[3]===N.black?"#003670":N.white;return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:m,onPointerMove:f,onPointerUp:g,style:{cursor:"move"},children:[n.jsx("rect",{fill:u[2],x:"0",width:O+21,height:"16",rx:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:O/2+2,y:"13.5",fill:c,fontSize:"15",letterSpacing:"-1.5",children:d}),n.jsx("text",{className:"rmp-name__zh",x:O+(d>9?5.5:3),y:"8.5",fontSize:"7",fill:c,children:"号线"}),n.jsxs("text",{className:"rmp-name__en",x:O+(d>9?6:4.5),y:"13.5",fontSize:"4",fill:c,children:["Line ",d]})]})},R={num:1,color:[S.Beijing,"bj1","#c23a30",N.white]},Pe=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:R).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:R;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:n.jsx(L,{type:b.BjsubwayNumLineBadge,defaultTheme:R.color})}],Te=()=>n.jsx(T,{fields:Pe}),Ae=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),n.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),n.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),n.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),ke={component:ve,icon:Ae,defaultAttrs:R,attrsComponent:Te,metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},_e=28.84375,Me=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{names:d=v.names,color:u=v.color}=l!=null?l:v,m=s.useRef(null),[f,g]=s.useState({width:12});s.useEffect(()=>g(m.current.getBBox()),[...d,g,m]);const c=s.useCallback(w=>r(e,w),[e,r]),x=s.useCallback(w=>a(e,w),[e,a]),p=s.useCallback(w=>h(e,w),[e,h]),y=Math.max(_e,f.width),B=u[3]===N.black?"#003670":N.white;return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:c,onPointerMove:x,onPointerUp:p,style:{cursor:"move"},children:[n.jsx("rect",{fill:u[2],x:"0",width:y+4,height:"16",rx:"2"}),n.jsxs("g",{ref:m,children:[n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(y+4)/2,y:"8",fontSize:"7",fill:B,children:d[0]}),n.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(y+4)/2,y:"13.5",fontSize:"4",fill:B,children:d[1]})]})]})},v={names:["八通线","Batong Line"],color:[S.Beijing,"bj1","#c23a30",N.white]},Re=[{type:"input",label:"panel.details.nodes.common.nameZh",value:o=>(o!=null?o:v).names[0],onChange:(o,e)=>{const t=e!=null?e:v;return t.names[0]=o.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:o=>(o!=null?o:v).names[1],onChange:(o,e)=>{const t=e!=null?e:v;return t.names[1]=o.toString(),t}},{type:"custom",label:"color",component:n.jsx(L,{type:b.BjsubwayTextLineBadge,defaultTheme:v.color})}],$e=()=>n.jsx(T,{fields:Re}),Ue=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),n.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),n.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),De={component:Me,icon:Ue,defaultAttrs:v,attrsComponent:$e,metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},Ee=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{num:d=z.num,branch:u=z.branch,color:m=z.color}=l!=null?l:z,f=s.useCallback(x=>r(e,x),[e,r]),g=s.useCallback(x=>a(e,x),[e,a]),c=s.useCallback(x=>h(e,x),[e,h]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:f,onPointerMove:g,onPointerUp:c,style:{cursor:"move"},children:[n.jsx("rect",{fill:m[2],width:"20",height:"20",rx:"2",ry:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:m[3],fontSize:"15",letterSpacing:"-1",children:d}),u&&n.jsxs(n.Fragment,{children:[n.jsx("text",{className:"rmp-name__zh",x:20+2.5,y:"10",fontSize:"10",children:"支线"}),n.jsx("text",{className:"rmp-name__en",x:20+2.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]})]})},z={num:1,branch:!1,color:[S.Suzhou,"sz1","#78BA25",N.white]},Ie=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:z).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:z;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:o=>{var e;return(e=o==null?void 0:o.branch)!=null?e:z.branch},onChange:(o,e)=>{const t=e!=null?e:z;return t.branch=o,t}},{type:"custom",label:"color",component:n.jsx(L,{type:b.SuzhouRTNumLineBadge,defaultTheme:z.color})}],We=()=>n.jsx(T,{fields:Ie}),Fe=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),n.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),qe={component:Ee,icon:Fe,defaultAttrs:z,attrsComponent:We,metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},He=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{num:d=$.num,color:u=$.color}=l!=null?l:$,m=s.useCallback(x=>r(e,x),[e,r]),f=s.useCallback(x=>a(e,x),[e,a]),g=s.useCallback(x=>h(e,x),[e,h]),c=u[3];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:m,onPointerMove:f,onPointerUp:g,style:{cursor:"move"},children:[n.jsx("rect",{fill:u[2],x:"0",width:"25",height:"15"}),n.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:c,fontSize:"14",letterSpacing:"1",children:["U",d]})]})},$={num:1,color:[S.Berlin,"bu1","#62AD2D",N.white]},Je=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:$).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:$;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:n.jsx(L,{type:b.BerlinUBahnLineBadge,defaultTheme:$.color})}],Oe=()=>n.jsx(T,{fields:Je}),Xe=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),n.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),Ze={component:He,icon:Xe,defaultAttrs:$,attrsComponent:Oe,metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},Ge=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{num:d=U.num,color:u=U.color}=l!=null?l:U,[m,f]=d>=10?[6,19.75]:[10,20],g=s.useCallback(y=>r(e,y),[e,r]),c=s.useCallback(y=>a(e,y),[e,a]),x=s.useCallback(y=>h(e,y),[e,h]),p=u[3];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:g,onPointerMove:c,onPointerUp:x,style:{cursor:"move"},children:[n.jsx("rect",{fill:u[2],x:"0",width:"30",height:"15",rx:"8"}),n.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:m,y:"12.5",fill:p,fontSize:"14",letterSpacing:"0",children:"S"}),n.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:f,y:"12.5",fill:p,fontSize:"14",letterSpacing:"-0.2",children:d})]})},U={num:1,color:[S.Berlin,"bs1","#DD6CA6",N.white]},Qe=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:U).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:U;return Number.isNaN(o)||(t.num=Number(o)),t}},{type:"custom",label:"color",component:n.jsx(L,{type:b.BerlinSBahnLineBadge,defaultTheme:U.color})}],Ve=()=>n.jsx(T,{fields:Qe}),Ke=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),n.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),Ye={component:Ge,icon:Ke,defaultAttrs:U,attrsComponent:Ve,metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}},en=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{num:d=D.num,color:u=D.color}=l!=null?l:D,m=s.useCallback(B=>r(e,B),[e,r]),f=s.useCallback(B=>a(e,B),[e,a]),g=s.useCallback(B=>h(e,B),[e,h]),c=u[3],x=Number.isInteger(d)?16:15,[p,y]=Number.isInteger(d)?Number(d)>=10?[-1.2,1.5]:[0,5.5]:[0,2.55];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:m,onPointerMove:f,onPointerUp:g,style:{cursor:"move"},children:[n.jsx("rect",{fill:u[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:y,y:"10",fill:c,fontSize:x,letterSpacing:p,dominantBaseline:"central",children:d})]})},D={num:1,color:[S.Chongqing,"cq1","#e4002b",N.white]},nn=[{type:"input",label:"panel.details.nodes.common.num",value:o=>(o!=null?o:D).num,validator:o=>!Number.isNaN(o),onChange:(o,e)=>{const t=e!=null?e:D;return Number.isNaN(Number(o))?t.num=o:t.num=Number(o),t}},{type:"custom",label:"color",component:n.jsx(L,{type:b.ChongqingRTNumLineBadge,defaultTheme:D.color})}],tn=()=>n.jsx(T,{fields:nn}),on=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),n.jsx("text",{x:"8",y:"18",fill:"white",fontSize:"18",children:"1"})]}),ln={component:en,icon:on,defaultAttrs:D,attrsComponent:tn,metadata:{displayName:"panel.details.nodes.chongqingRTNumLineBadge.displayName",tags:[]}},an=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{names:d=P.names,color:u=P.color}=l!=null?l:P,m=s.useRef(null),f=s.useCallback(p=>r(e,p),[e,r]),g=s.useCallback(p=>a(e,p),[e,a]),c=s.useCallback(p=>h(e,p),[e,h]),x=u[3];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:f,onPointerMove:g,onPointerUp:c,style:{cursor:"move"},children:[n.jsx("rect",{fill:u[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:"10",y:"10.5",fill:x,fontSize:"6",letterSpacing:"0",children:d[0]}),n.jsx(V,{ref:m,text:d[1].split("\n"),className:"rmp-name__en",textAnchor:"middle",x:"10",y:"9.25",fill:x,fontSize:"2.5",letterSpacing:"0",lineHeight:2.25,grow:"down"})]})},P={names:["空港线","Konggang Line"],color:[S.Chongqing,"cq3","#003da5",N.white]},sn=[{type:"input",label:"panel.details.nodes.common.nameZh",value:o=>(o!=null?o:P).names[0],onChange:(o,e)=>{const t=e!=null?e:P;return t.names[0]=o.toString(),t}},{type:"textarea",label:"panel.details.nodes.common.nameEn",value:o=>(o!=null?o:P).names[1],onChange:(o,e)=>{const t=e!=null?e:P;return t.names[1]=o.toString(),t}},{type:"custom",label:"color",component:n.jsx(L,{type:b.ChongqingRTTextLineBadge,defaultTheme:P.color})}],rn=()=>n.jsx(T,{fields:sn}),cn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),n.jsx("text",{x:"4.5",y:"12.5",fill:"white",fontSize:"5",children:"空港线"}),n.jsx("text",{x:"4.5",y:"15",fill:"white",fontSize:"2",children:"Konggang Line"})]}),dn={component:an,icon:cn,defaultAttrs:P,attrsComponent:rn,metadata:{displayName:"panel.details.nodes.chongqingRTTextLineBadge.displayName",tags:[]}},X=11.84375,mn=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{num:d=I.num,color:u=I.color,isBranch:m=I.isBranch}=l!=null?l:I,f=s.useCallback(E=>r(e,E),[e,r]),g=s.useCallback(E=>a(e,E),[e,a]),c=s.useCallback(E=>h(e,E),[e,h]),x=u[3]===N.black?"#003670":N.white,p=m?10:X+(d>9?6.5:3),y=m?-1:0,B=m?11:X+(d>9?7:3.5),w=m?6:X/2+4;return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:f,onPointerMove:g,onPointerUp:c,style:{cursor:"move"},children:[n.jsx("rect",{fill:u[2],x:"0",width:X+21,height:"16",rx:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:w,y:"13.5",fill:x,fontSize:"15",letterSpacing:"-1",children:d}),n.jsxs("text",{className:"rmp-name__zh",x:p,y:"9.5",fontSize:"6",fill:x,letterSpacing:y,children:["号线",m?"支线":""]}),n.jsxs("text",{className:"rmp-name__en",x:B,y:"13.5",fontSize:"3",fill:x,children:[m?"Branch":""," Line ",d]})]})},I={num:1,color:[S.Shenzhen,"sz1","#00b140",N.white],isBranch:!1},hn=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:l}=F(),r=[{type:"input",label:l("panel.details.nodes.common.num"),value:String(t.num),validator:a=>!Number.isNaN(a),onChange:a=>{t.num=Number(a),i(e,t)},minW:"full"},{type:"custom",label:l("color"),component:n.jsx(L,{type:b.ShenzhenMetroNumLineBadge,defaultTheme:I.color}),minW:"full"},{type:"switch",label:l("panel.details.nodes.shenzhenMetroNumLineBadge.branch"),oneLine:!0,isChecked:t.isBranch,onChange:a=>{t.isBranch=a,i(e,t)},minW:"full"}];return n.jsx(W,{fields:r})},un=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),n.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),n.jsx("text",{x:"11",y:"14",fill:"white",fontSize:"5",children:"号线"}),n.jsx("text",{x:"12",y:"17",fill:"white",fontSize:"3",children:"Line 1"})]}),xn={component:mn,icon:un,defaultAttrs:I,attrsComponent:hn,metadata:{displayName:"panel.details.nodes.shenzhenMetroNumLineBadge.displayName",tags:[]}},gn=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{num:d=J.num,color:u=J.color}=l!=null?l:J,m=s.useCallback(p=>r(e,p),[e,r]),f=s.useCallback(p=>a(e,p),[e,a]),g=s.useCallback(p=>h(e,p),[e,h]),c=u[3],x=u[2];return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:m,onPointerMove:f,onPointerUp:g,style:{cursor:"move"},children:[n.jsx("circle",{r:"6",fill:x}),n.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",x:"0",y:"0",width:"12",height:"12",fill:c,fontSize:"9",dominantBaseline:"central",letterSpacing:"-0.2",children:d})]})},J={num:1,color:[S.Singapore,"ewl","#009739",N.white]},pn=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:l}=F(),r=[{type:"input",label:l("panel.details.nodes.common.num"),value:String(t.num),validator:a=>!Number.isNaN(a),onChange:a=>{t.num=Number(a),i(e,t)},minW:"full"},{type:"custom",label:l("color"),component:n.jsx(L,{type:b.MRTDestinationNumbers,defaultTheme:J.color}),minW:"full"}];return n.jsx(W,{fields:r})},fn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),n.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),bn={component:gn,icon:fn,defaultAttrs:J,attrsComponent:pn,metadata:{displayName:"panel.details.nodes.mrtDestinationNumbers.displayName",tags:[]}},Z=4,Y=7,G=10,te=5,yn=5,C=yn*Math.SQRT1_2,ee=.25,Q=(C*Math.SQRT2-ee)/2*Math.SQRT2,jn=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{names:d=_.names,num:u=_.num,color:m=_.color,crosshatchPatternFill:f=_.crosshatchPatternFill}=l!=null?l:_,g=s.useRef(null),[c,x]=s.useState({height:10,width:12});s.useEffect(()=>x(g.current.getBBox()),[...d,x,g]);const p=s.useCallback(w=>r(e,w),[e,r]),y=s.useCallback(w=>a(e,w),[e,a]),B=s.useCallback(w=>h(e,w),[e,h]);return n.jsxs("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")"),onPointerDown:p,onPointerMove:y,onPointerUp:B,style:{cursor:"move"},children:[n.jsxs("defs",{children:[n.jsxs("clipPath",{id:"jr_east_fill_pattern_clip_path",patternUnits:"userSpaceOnUse",children:[n.jsx("polygon",{points:"0,0 0,".concat(Q," ").concat(Q,",0")}),n.jsx("polygon",{points:"".concat(C,",").concat(C," ").concat(C-Q,",").concat(C," ").concat(C,",").concat(C-Q)})]}),n.jsxs("pattern",{id:"jr_east_".concat(e,"_fill_pattern_").concat(m[2]),width:C,height:C,patternUnits:"userSpaceOnUse",children:[n.jsx("rect",{width:C,height:C,fill:m[2]}),n.jsx("line",{x1:"0",y1:"0",x2:C,y2:C,stroke:"white",strokeWidth:ee,strokeOpacity:"33%",clipPath:"url(#jr_east_fill_pattern_clip_path)"}),n.jsx("line",{x1:C,y1:"0",x2:"0",y2:C,stroke:"white",strokeWidth:ee,strokeOpacity:"33%"})]})]}),n.jsx("rect",{fill:f?"url(#jr_east_".concat(e,"_fill_pattern_").concat(m[2],")"):m[2],x:"0",y:"-1",width:c.width+Z+10,height:c.height+1,rx:"1",stroke:"black",strokeWidth:"0.25"}),n.jsx("circle",{r:Z,cx:Y,cy:G/2+1,stroke:"black",strokeWidth:"0.25",fill:m[3]}),n.jsx("text",{x:Y,y:G/2+1.75,textAnchor:"middle",dominantBaseline:"middle",fill:m[3]==="#000"?"white":m[2],fontSize:u>9?7:8,className:"rmp-name__jreast_en",children:u}),n.jsx(V,{ref:g,text:d[0].split("\\"),x:Y+Z+1,y:"-1",fill:m[3],fontSize:G,lineHeight:G,grow:"down",className:"rmp-name__jreast_ja"}),n.jsx(V,{text:d[1].split("\\"),textAnchor:"middle",dominantBaseline:"hanging",x:(c.width+Z+10)/2,y:c.height+1,fontSize:te,lineHeight:te,baseOffset:0,grow:"down",className:"rmp-name__jreast_en"})]})},_={names:["山手線","Yamanote Line"],color:[S.Tokyo,"jy","#9ACD32",N.black],num:9,crosshatchPatternFill:!1},Bn=o=>{const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:l}=F(),r=[{type:"input",label:l("panel.details.nodes.common.num"),value:String(t.num),validator:a=>!Number.isNaN(a),onChange:a=>{t.num=Number(a),i(e,t)},minW:"full"},{type:"textarea",label:l("panel.details.nodes.common.nameJa"),value:t.names[0].replaceAll("\\","\n"),onChange:a=>{t.names[0]=a.replaceAll("\n","\\"),i(e,t)},minW:"full"},{type:"textarea",label:l("panel.details.nodes.common.nameEn"),value:t.names[1].replaceAll("\\","\n"),onChange:a=>{t.names[1]=a.replaceAll("\n","\\"),i(e,t)},minW:"full"},{type:"switch",label:l("panel.details.nodes.jrEastLineBadge.crosshatchPatternFill"),oneLine:!0,isChecked:t.crosshatchPatternFill,onChange:a=>{t.crosshatchPatternFill=a,i(e,t)},minW:"full"},{type:"custom",label:l("color"),component:n.jsx(L,{type:b.JREastLineBadge,defaultTheme:_.color})}];return n.jsx(W,{fields:r})},Nn=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"1",y:"6",width:"22",height:"7"}),n.jsx("circle",{cx:"3.5",cy:"9.25",r:"2",fill:"white"}),n.jsx("text",{x:"3",y:"10.5",fontSize:"3",children:"9"}),n.jsx("text",{x:"6",y:"11.25",fontSize:"5",fill:"white",children:"山手線"}),n.jsx("text",{x:"1.5",y:"16",fontSize:"3",children:"Yamanote Line"})]}),wn={component:jn,icon:Nn,defaultAttrs:_,attrsComponent:Bn,metadata:{displayName:"panel.details.nodes.jrEastLineBadge.displayName",tags:[]}},Cn=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,{content:d=j.content,fontSize:u=j.fontSize,lineHeight:m=j.lineHeight,textAnchor:f=j.textAnchor,dominantBaseline:g=j.dominantBaseline,language:c=j.language,color:x=j.color,rotate:p=j.rotate,italic:y=j.italic,bold:B=j.bold}=l!=null?l:j,w=s.useRef(null),[E,ne]=s.useState({x:0,y:0,width:32,height:16});s.useEffect(()=>ne(w.current.getBBox()),[d,f,g,ne,w]),s.useEffect(()=>{const A={mtr__zh:q.MTR,mtr__en:q.MTR,berlin:b.BerlinSBahnLineBadge,mrt:q.MRTBasic,jreast_ja:q.JREastBasic,jreast_en:q.JREastBasic}[c];A&&se(A)},[c]);const oe=s.useCallback(A=>r(e,A),[e,r]),le=s.useCallback(A=>a(e,A),[e,a]),ae=s.useCallback(A=>h(e,A),[e,h]);return n.jsx("g",{id:e,transform:"translate(".concat(t,", ").concat(i,")rotate(").concat(p,")"),onPointerDown:oe,onPointerMove:le,onPointerUp:ae,style:{cursor:"move"},children:n.jsx(V,{ref:w,text:d.split("\n"),lineHeight:m,grow:"down",className:"rmp-name__".concat(c),fontSize:u,textAnchor:f,dominantBaseline:g,fill:x[2],fontStyle:y,fontWeight:B})})},j={content:"Enter your text here",fontSize:16,lineHeight:16,textAnchor:"middle",dominantBaseline:"middle",language:"en",color:[S.Shanghai,"jsr","#000000",N.white],rotate:0,italic:"normal",bold:"normal"},Sn=o=>{var a,h,d,u,m,f,g;const{id:e,attrs:t,handleAttrsUpdate:i}=o,{t:l}=F(),r=[{type:"textarea",label:l("panel.details.nodes.text.content"),value:(a=t.content)!=null?a:j.content,onChange:c=>{t.content=c.toString(),i(e,t)},minW:"full"},{type:"input",label:l("panel.details.nodes.text.fontSize"),value:((h=t.fontSize)!=null?h:j.fontSize).toString(),validator:c=>Number.isInteger(c)&&Number(c)>0,onChange:c=>{t.fontSize=Number(c),i(e,t)},minW:"full"},{type:"input",label:l("panel.details.nodes.text.lineHeight"),value:((d=t.lineHeight)!=null?d:j.lineHeight).toString(),validator:c=>Number.isInteger(c)&&Number(c)>0,onChange:c=>{t.lineHeight=Number(c),i(e,t)},minW:"full"},{type:"select",label:l("panel.details.nodes.text.textAnchor"),value:(u=t.textAnchor)!=null?u:j.textAnchor,options:{start:l("panel.details.nodes.text.start"),middle:l("panel.details.nodes.text.middle"),end:l("panel.details.nodes.text.end")},onChange:c=>{t.textAnchor=c,i(e,t)},minW:"full"},{type:"select",label:l("panel.details.nodes.text.dominantBaseline"),value:(m=t.dominantBaseline)!=null?m:j.dominantBaseline,options:{auto:l("panel.details.nodes.text.auto"),middle:l("panel.details.nodes.text.middle"),hanging:l("panel.details.nodes.text.hanging")},onChange:c=>{t.dominantBaseline=c,i(e,t)},minW:"full"},{type:"select",label:l("panel.details.nodes.text.language"),value:(f=t.language)!=null?f:j.language,options:{zh:l("panel.details.nodes.text.zh"),en:l("panel.details.nodes.text.en"),mtr__zh:l("panel.details.nodes.text.mtr__zh"),mtr__en:l("panel.details.nodes.text.mtr__en"),berlin:l("panel.details.nodes.text.berlin"),mrt:l("panel.details.nodes.text.mrt"),jreast_ja:l("panel.details.nodes.text.jreast_ja"),jreast_en:l("panel.details.nodes.text.jreast_en")},onChange:c=>{t.language=c.toString(),i(e,t)},minW:"full"},{type:"select",label:l("panel.details.nodes.text.rotate"),value:(g=t.rotate)!=null?g:j.rotate,options:{0:"0",45:"45",90:"90",135:"135",180:"180",225:"225",270:"270",315:"315"},onChange:c=>{t.rotate=Number(c),i(e,t)},minW:"full"},{type:"switch",label:l("panel.details.nodes.text.italic"),isChecked:t.italic==="italic",onChange:c=>{t.italic=c?"italic":"normal",i(e,t)},minW:"full"},{type:"switch",label:l("panel.details.nodes.text.bold"),isChecked:t.bold==="bold",onChange:c=>{t.bold=c?"bold":"normal",i(e,t)},minW:"full"},{type:"custom",label:l("color"),component:n.jsx(L,{type:b.Text,defaultTheme:j.color})}];return n.jsx(W,{fields:r})},Ln=n.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:n.jsx("text",{x:"12",y:"12",textAnchor:"middle",dominantBaseline:"middle",fontSize:"10",children:"Text"})}),K={component:Cn,icon:Ln,defaultAttrs:j,attrsComponent:Sn,metadata:{displayName:"panel.details.nodes.text.displayName",tags:[]}},zn=o=>{const{id:e,x:t,y:i,attrs:l,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h}=o,d=re();l.content=d(l.contents);const u=K.component;return n.jsx(u,{id:e,x:t,y:i,handlePointerDown:r,handlePointerMove:a,handlePointerUp:h,attrs:l})},vn={contents:{},...j},Pn={component:zn,icon:K.icon,defaultAttrs:vn,attrsComponent:K.attrsComponent,metadata:{displayName:"panel.details.nodes.i18nText.displayName",tags:[]}},Mn={[b.Virtual]:xe,[b.ShmetroNumLineBadge]:ye,[b.ShmetroTextLineBadge]:we,[b.GzmtrLineBadge]:ze,[b.BjsubwayNumLineBadge]:ke,[b.BjsubwayTextLineBadge]:De,[b.SuzhouRTNumLineBadge]:qe,[b.BerlinSBahnLineBadge]:Ye,[b.BerlinUBahnLineBadge]:Ze,[b.ChongqingRTNumLineBadge]:ln,[b.ChongqingRTTextLineBadge]:dn,[b.ShenzhenMetroNumLineBadge]:xn,[b.MRTDestinationNumbers]:bn,[b.JREastLineBadge]:wn,[b.Facilities]:ce,[b.Text]:K,[b.I18nText]:Pn};export{Mn as m};
