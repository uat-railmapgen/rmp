import{C as L,v as w,ak as z,H as j}from"./index-9eb14620.js";import{j as n}from"./chakra-e455e76b.js";import{b as l}from"./react-beb26faf.js";import{M as H}from"./stations-b2a82cb5.js";const Z=t=>{const{id:e,x:i,y:r,handlePointerDown:a,handlePointerMove:x,handlePointerUp:d}=t,m=l.useCallback(c=>a(e,c),[e,a]),o=l.useCallback(c=>x(e,c),[e,x]),s=l.useCallback(c=>d(e,c),[e,d]);return l.useMemo(()=>n.jsxs("g",{id:e,transform:`translate(${i}, ${r})rotate(45)`,children:[n.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),n.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),n.jsx("circle",{id:`virtual_circle_${e}`,r:5,stroke:"black",fill:"white",fillOpacity:"0",onPointerDown:m,onPointerMove:o,onPointerUp:s,style:{cursor:"move"}})]}),[e,i,r,m,o,s])},V={},G=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[n.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),n.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),n.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),W={component:Z,icon:G,defaultAttrs:V,fields:[],metadata:{displayName:"panel.details.node.virtual.displayName",tags:[]}},X=t=>{const{id:e,x:i,y:r,attrs:a,handlePointerDown:x,handlePointerMove:d,handlePointerUp:m}=t,{num:o=C.num,color:s=C.color}=a!=null?a:C,[c,h]=o>=10?[22.67,10.75]:[21,10],f=l.useCallback(y=>x(e,y),[e,x]),g=l.useCallback(y=>d(e,y),[e,d]),u=l.useCallback(y=>m(e,y),[e,m]);return l.useMemo(()=>n.jsxs("g",{id:e,transform:`translate(${i}, ${r})`,children:[n.jsx("rect",{fill:s[2],width:c,height:"22.67"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:h,y:"19",fill:s[3],fontSize:"21.33",letterSpacing:"-1.75",children:o}),n.jsx("text",{className:"rmp-name__zh",x:c+2,y:"12",fontSize:"14.67",children:"号线"}),n.jsxs("text",{className:"rmp-name__en",x:c+4,y:"21.5",fontSize:"8",children:["Line ",o]}),n.jsx("rect",{fill:"white",fillOpacity:"0",width:c,height:"22.67",onPointerDown:f,onPointerMove:g,onPointerUp:u,style:{cursor:"move"}})]}),[e,i,r,o,...s,f,g,u])},C={num:1,color:[L.Shanghai,"sh1","#E4002B",w.white]},q=[{type:"input",label:"panel.details.node.shmetroNumLineBadge.num",value:t=>(t!=null?t:C).num,validator:t=>!Number.isNaN(t),onChange:(t,e)=>{const i=e!=null?e:C;return Number.isNaN(t)||(i.num=Number(t)),i}},{type:"custom",component:n.jsx(z,{type:j.ShmetroNumLineBadge,defaultAttrs:C})}],J=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),n.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),n.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),n.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),K={component:X,icon:J,defaultAttrs:C,fields:q,metadata:{displayName:"panel.details.node.shmetroNumLineBadge.displayName",tags:[]}},Q=t=>{const{id:e,x:i,y:r,attrs:a,handlePointerDown:x,handlePointerMove:d,handlePointerUp:m}=t,{names:o=N.names,color:s=N.color}=a!=null?a:N,c=l.useRef(null),[h,f]=l.useState({width:12});l.useEffect(()=>f(c.current.getBBox()),[...o,f,c]);const g=l.useCallback(B=>x(e,B),[e,x]),u=l.useCallback(B=>d(e,B),[e,d]),y=l.useCallback(B=>m(e,B),[e,m]);return l.useMemo(()=>n.jsxs("g",{id:e,transform:`translate(${i}, ${r})`,children:[n.jsx("rect",{fill:s[2],x:"0",width:h.width+7,height:"21"}),n.jsxs("g",{ref:c,children:[n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(h.width+7)/2,y:"4",fontSize:"10",fill:s[3],letterSpacing:"-0.25",children:o[0]}),n.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(h.width+7)/2,y:"13",fontSize:"5",fill:s[3],letterSpacing:"-0.25",children:o[1]})]}),n.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:h.width+7,height:"21",onPointerDown:g,onPointerMove:u,onPointerUp:y,style:{cursor:"move"}})]}),[e,i,r,...o,h,...s,g,u,y])},N={names:["浦江线","Pujiang Line"],color:[L.Shanghai,"pjl","#B5B5B6",w.white]},Y=[{type:"input",label:"panel.details.node.shmetroTextLineBadge.nameZh",value:t=>(t!=null?t:N).names[0],onChange:(t,e)=>{const i=e!=null?e:N;return i.names[0]=t.toString(),i}},{type:"input",label:"panel.details.node.shmetroTextLineBadge.nameEn",value:t=>(t!=null?t:N).names[1],onChange:(t,e)=>{const i=e!=null?e:N;return i.names[1]=t.toString(),i}},{type:"custom",component:n.jsx(z,{type:j.ShmetroTextLineBadge,defaultAttrs:N})}],_=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),n.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),n.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),ee={component:Q,icon:_,defaultAttrs:N,fields:Y,metadata:{displayName:"panel.details.node.shmetroTextLineBadge.displayName",tags:[]}},ne=t=>{const{lineName:e,commonPart:i}=t,r=l.useRef(null),[a,x]=l.useState({x:0,height:0,width:0});l.useEffect(()=>{r.current&&x(r.current.getBBox())},[e.toString()]);const d=T/Math.max(T,a.width),m=(-a.x-a.width/2)*d,o=a.height*(1-d)*1.2/2;return n.jsx("g",{ref:r,transform:`translate(${m},${o})scale(${d})`,children:n.jsxs("text",{className:"rmp-name__zh",fontSize:14,y:12,textAnchor:"end",dominantBaseline:"central",children:[i,n.jsx("tspan",{className:"rmp-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",dominantBaseline:"central",children:e[0].slice(i.length).trim()}),n.jsx("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",dominantBaseline:"central",children:e[1].slice(i.length).trim()})]})})},te=t=>n.jsx("rect",{x:-22.5,height:24,width:45,rx:4.5,...t}),T=42,ie=t=>{const{lineName:e,foregroundColour:i,backgroundColour:r,passed:a}=t,[x,d]=le(e),m=l.useRef(null),o=l.useRef(null),[s,c]=l.useState({width:0}),[h,f]=l.useState({width:0});l.useEffect(()=>{m.current&&c(m.current.getBBox()),o.current&&f(o.current.getBBox())},[e.toString()]);const g=T/Math.max(T,s.width),u=T/Math.max(T,h.width),y={nameZh:{y:7.3+13.5*(1-g)*g/2},nameEn:{y:19.5-9*(1-u)*u/2}};return n.jsxs("g",{textAnchor:"middle",fill:a?w.white:i,children:[n.jsx(te,{fill:a?"#aaa":r}),x===2?n.jsx(ne,{lineName:e,commonPart:d}):n.jsxs(n.Fragment,{children:[n.jsx("text",{ref:m,className:"rmp-name__zh",fontSize:12,transform:`translate(0,${y.nameZh.y})scale(${g})`,dominantBaseline:"central",children:x===1?n.jsxs(n.Fragment,{children:[n.jsx("tspan",{fontSize:16,dy:.7,className:"rmp-name__zh",dominantBaseline:"central",children:d}),n.jsx("tspan",{dy:-.7,className:"rmp-name__zh",dominantBaseline:"central",children:e[0].slice(d.length)})]}):e[0]}),n.jsx("text",{ref:o,className:"rmp-name__en",fontSize:8,transform:`translate(0,${y.nameEn.y})scale(${u})`,dominantBaseline:"middle",children:e[1]})]})]})},le=t=>{const e=t[0].match(/^(\d+)\D+$/);if(e)return[1,e[1]];const i=t.map(r=>r.match(/^(\w+).+$/));return i[0]&&i[1]&&i[0][1]===i[1][1]?[2,i[0][1]]:[3,""]},oe=t=>{const{id:e,x:i,y:r,attrs:a,handlePointerDown:x,handlePointerMove:d,handlePointerUp:m}=t,{names:o=F.names,color:s=F.color}=a!=null?a:F,c=l.useCallback(g=>x(e,g),[e,x]),h=l.useCallback(g=>d(e,g),[e,d]),f=l.useCallback(g=>m(e,g),[e,m]);return l.useMemo(()=>n.jsxs("g",{id:e,transform:`translate(${i}, ${r})`,children:[n.jsx(ie,{lineName:o,foregroundColour:s[3],backgroundColour:s[2]}),n.jsx("rect",{fill:"white",fillOpacity:"0",x:"-22.5",width:"45",height:"24",rx:"4.5",onPointerDown:c,onPointerMove:h,onPointerUp:f,style:{cursor:"move"}})]}),[e,i,r,...o,...s,c,h,f])},F={names:["1号线","Line 1"],color:[L.Guangzhou,"gz1","#F3D03E",w.black]},ae=[{type:"input",label:"panel.details.node.gzmtrLineBadge.nameZh",value:t=>(t!=null?t:F).names[0],onChange:(t,e)=>{const i=e!=null?e:F;return i.names[0]=t.toString(),i}},{type:"input",label:"panel.details.node.gzmtrLineBadge.nameEn",value:t=>(t!=null?t:F).names[1],onChange:(t,e)=>{const i=e!=null?e:F;return i.names[1]=t.toString(),i}},{type:"custom",component:n.jsx(z,{type:j.GzmtrLineBadge,defaultAttrs:F})}],se=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),n.jsx("text",{x:"12",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"1号线"}),n.jsx("text",{x:"12",y:"17",textAnchor:"middle",fontSize:"5",fill:"white",children:"Line 1"})]}),ce={component:oe,icon:se,defaultAttrs:F,fields:ae,metadata:{displayName:"panel.details.node.gzmtrLineBadge.displayName",tags:[]}},$=11.84375,re=t=>{const{id:e,x:i,y:r,attrs:a,handlePointerDown:x,handlePointerMove:d,handlePointerUp:m}=t,{num:o=M.num,color:s=M.color}=a!=null?a:M,c=l.useCallback(u=>x(e,u),[e,x]),h=l.useCallback(u=>d(e,u),[e,d]),f=l.useCallback(u=>m(e,u),[e,m]),g=s[3]===w.black?"#003670":w.white;return l.useMemo(()=>n.jsxs("g",{id:e,transform:`translate(${i}, ${r})`,children:[n.jsx("rect",{fill:s[2],x:"0",width:$+21,height:"16",rx:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:$/2+2,y:"13.5",fill:g,fontSize:"15",letterSpacing:"-1.5",children:o}),n.jsx("text",{className:"rmp-name__zh",x:$+(o>9?5.5:3),y:"8.5",fontSize:"7",fill:g,children:"号线"}),n.jsxs("text",{className:"rmp-name__en",x:$+(o>9?6:4.5),y:"13.5",fontSize:"4",fill:g,children:["Line ",o]}),n.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:$+23,height:"16",rx:"2",onPointerDown:c,onPointerMove:h,onPointerUp:f,style:{cursor:"move"}})]}),[e,i,r,o,...s,c,h,f])},M={num:1,color:[L.Beijing,"bj1","#c23a30",w.white]},de=[{type:"input",label:"panel.details.node.bjsubwayNumLineBadge.num",value:t=>(t!=null?t:M).num,validator:t=>!Number.isNaN(t),onChange:(t,e)=>{const i=e!=null?e:M;return Number.isNaN(t)||(i.num=Number(t)),i}},{type:"custom",component:n.jsx(z,{type:j.BjsubwayNumLineBadge,defaultAttrs:M})}],he=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),n.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),n.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),n.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),me={component:re,icon:he,defaultAttrs:M,fields:de,metadata:{displayName:"panel.details.node.bjsubwayNumLineBadge.displayName",tags:[]}},xe=28.84375,ue=t=>{const{id:e,x:i,y:r,attrs:a,handlePointerDown:x,handlePointerMove:d,handlePointerUp:m}=t,{names:o=S.names,color:s=S.color}=a!=null?a:S,c=l.useRef(null),[h,f]=l.useState({width:12});l.useEffect(()=>f(c.current.getBBox()),[...o,f,c]);const g=l.useCallback(b=>x(e,b),[e,x]),u=l.useCallback(b=>d(e,b),[e,d]),y=l.useCallback(b=>m(e,b),[e,m]),B=Math.max(xe,h.width),A=s[3]===w.black?"#003670":w.white;return l.useMemo(()=>n.jsxs("g",{id:e,transform:`translate(${i}, ${r})`,children:[n.jsx("rect",{fill:s[2],x:"0",width:B+4,height:"16",rx:"2"}),n.jsxs("g",{ref:c,children:[n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(B+4)/2,y:"8",fontSize:"7",fill:A,children:o[0]}),n.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(B+4)/2,y:"13.5",fontSize:"4",fill:A,children:o[1]})]}),n.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:B+3,height:"16",rx:"2",onPointerDown:g,onPointerMove:u,onPointerUp:y,style:{cursor:"move"}})]}),[e,i,r,...o,h,...s,g,u,y])},S={names:["八通线","Batong Line"],color:[L.Beijing,"bj1","#c23a30",w.white]},fe=[{type:"input",label:"panel.details.node.bjsubwayTextLineBadge.nameZh",value:t=>(t!=null?t:S).names[0],onChange:(t,e)=>{const i=e!=null?e:S;return i.names[0]=t.toString(),i}},{type:"input",label:"panel.details.node.bjsubwayTextLineBadge.nameEn",value:t=>(t!=null?t:S).names[1],onChange:(t,e)=>{const i=e!=null?e:S;return i.names[1]=t.toString(),i}},{type:"custom",component:n.jsx(z,{type:j.BjsubwayTextLineBadge,defaultAttrs:S})}],ge=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),n.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),n.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),pe={component:ue,icon:ge,defaultAttrs:S,fields:fe,metadata:{displayName:"panel.details.node.bjsubwayTextLineBadge.displayName",tags:[]}},ye=t=>{const{id:e,x:i,y:r,attrs:a,handlePointerDown:x,handlePointerMove:d,handlePointerUp:m}=t,{num:o=v.num,branch:s=v.branch,color:c=v.color}=a!=null?a:v,h=l.useCallback(u=>x(e,u),[e,x]),f=l.useCallback(u=>d(e,u),[e,d]),g=l.useCallback(u=>m(e,u),[e,m]);return l.useMemo(()=>n.jsxs("g",{id:e,transform:`translate(${i}, ${r})`,children:[n.jsx("rect",{fill:c[2],width:"20",height:"20",rx:"2",ry:"2"}),n.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:c[3],fontSize:"15",letterSpacing:"-1",children:o}),s&&n.jsxs(n.Fragment,{children:[n.jsx("text",{className:"rmp-name__zh",x:20+2.5,y:"10",fontSize:"10",children:"支线"}),n.jsx("text",{className:"rmp-name__en",x:20+2.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]}),n.jsx("rect",{fill:"white",fillOpacity:"0",width:"20",height:"20",rx:"2",ry:"2",onPointerDown:h,onPointerMove:f,onPointerUp:g,style:{cursor:"move"}})]}),[e,i,r,o,s,...c,h,f,g])},v={num:1,branch:!1,color:[L.Suzhou,"sz1","#78BA25",w.white]},je=[{type:"input",label:"panel.details.node.suzhouRTNumLineBadge.num",value:t=>(t!=null?t:v).num,validator:t=>!Number.isNaN(t),onChange:(t,e)=>{const i=e!=null?e:v;return Number.isNaN(t)||(i.num=Number(t)),i}},{type:"switch",label:"panel.details.node.suzhouRTNumLineBadge.branch",isChecked:t=>{var e;return(e=t==null?void 0:t.branch)!=null?e:v.branch},onChange:(t,e)=>{const i=e!=null?e:v;return i.branch=t,i}},{type:"custom",component:n.jsx(z,{type:j.SuzhouRTNumLineBadge,defaultAttrs:v})}],Be=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),n.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),we={component:ye,icon:Be,defaultAttrs:v,fields:je,metadata:{displayName:"panel.details.node.suzhouRTNumLineBadge.displayName",tags:[]}},be=t=>{const{id:e,x:i,y:r,attrs:a,handlePointerDown:x,handlePointerMove:d,handlePointerUp:m}=t,{type:o=D.type}=a!=null?a:D,s=l.useCallback(f=>x(e,f),[e,x]),c=l.useCallback(f=>d(e,f),[e,d]),h=l.useCallback(f=>m(e,f),[e,m]);return l.useMemo(()=>n.jsxs("g",{id:e,transform:`translate(${i}, ${r})`,children:[o==="airport"&&n.jsxs("g",{id:"airport",transform:"translate(-12.5,0)",children:[n.jsx("circle",{fill:"#828282",cx:"12.5",cy:"12.5",r:"11.5"}),n.jsx("line",{fill:"none",stroke:"#FFFFFF",strokeWidth:"2.167",strokeLinecap:"round",strokeMiterlimit:"10",x1:"12.5",y1:"18.7",x2:"12.5",y2:"3.7"}),n.jsx("polyline",{fill:"#FFFFFF",points:"11.7,9.3 3.3,14.3 3.3,16.7 11.7,13.7 "}),n.jsx("polyline",{fill:"#FFFFFF",points:"13.3,9.3 21.7,14.3 21.7,16.7 13.3,13.7 "}),n.jsx("polyline",{fill:"#FFFFFF",points:"11.7,18.3 9.7,19.7 9.7,21.7 12.3,20.7 12.7,20.7 15.3,21.7 15.3,19.7 13.3,18.3 "}),n.jsx("circle",{fill:"#828282",fillOpacity:"0",cx:"12.5",cy:"12.5",r:"11.5",onPointerDown:s,onPointerMove:c,onPointerUp:h,style:{cursor:"move"}})]}),o==="disney"&&n.jsxs("g",{id:"disney",transform:"scale(0.426)",children:[n.jsx("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey"}),n.jsx("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"}),n.jsx("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey",fillOpacity:"0",onPointerDown:s,onPointerMove:c,onPointerUp:h,style:{cursor:"move"}})]}),o==="maglev"&&n.jsxs("g",{id:"maglev",transform:"translate(-12.5,0)",children:[n.jsx("path",{fill:"#10716F",d:`M23.8,22.4c0,0.8-0.6,1.4-1.4,1.4H2.6c-0.8,0-1.4-0.6-1.4-1.4V2.6c0-0.8,0.6-1.4,1.4-1.4h19.8
		c0.8,0,1.4,0.6,1.4,1.4V22.4L23.8,22.4z`}),n.jsx("path",{fill:"#FFFFFF",d:`M12.5,2.8l-1,1.7L7.2,5C5.9,5.1,4.8,6.2,4.8,7.6v6.2c0,0.9,0.7,1.7,1.7,1.7h12c0.9,0,1.7-0.7,1.7-1.7V7.6
	c0-1.4-1-2.5-2.4-2.7l-4.3-0.4`}),n.jsx("polyline",{fill:"#10716F",points:"13.2,8.8 13.2,11.8 18,11.8 18,8.5 13.2,8.5 "}),n.jsx("polyline",{fill:"#10716F",points:"7,8.8 7,11.8 11.8,11.8 11.8,8.5 7,8.5 "}),n.jsx("path",{fill:"#FFFFFF",d:`M4.8,15.3v4c0,1.1,0.7,2,1.8,2h2v-1.7H6.5v-2.3h12v2.3h-2.2v1.7h2c1.1,0,1.8-0.7,1.8-1.8v-4.3v0.2
	c-0.3,0.4-0.8,0.7-1.3,0.7H6.2C5.7,16,5.2,15.8,4.8,15.3L4.8,15.3z`}),n.jsx("path",{d:`M23.8,22.4c0,0.8-0.6,1.4-1.4,1.4H2.6c-0.8,0-1.4-0.6-1.4-1.4V2.6c0-0.8,0.6-1.4,1.4-1.4h19.8
		c0.8,0,1.4,0.6,1.4,1.4V22.4L23.8,22.4z`,fill:"#10716F",fillOpacity:"0",onPointerDown:s,onPointerMove:c,onPointerUp:h,style:{cursor:"move"}})]}),o==="railway"&&n.jsxs("g",{id:"railway",transform:"translate(-12.5,0)",children:[n.jsx("circle",{fill:"#807F80",cx:"12.5",cy:"12.5",r:"11.5"}),n.jsx("line",{fill:"none",x1:"10.8",y1:"3.8",x2:"10.8",y2:"4.8"}),n.jsx("polyline",{fill:"#FFFFFF",points:"10.8,5 10.8,3.8 14.2,3.8 14.2,5 "}),n.jsx("path",{fill:"#FFFFFF",d:`M13.8,14.1h-2.7c-0.8,0-1.5-0.7-1.5-1.5v-0.2c0-0.8,0.7-1.5,1.5-1.5h2.7c0.8,0,1.5,0.7,1.5,1.5v0.2
	C15.3,13.4,14.7,14.1,13.8,14.1z`}),n.jsx("circle",{fill:"none",stroke:"#FFFFFF",strokeWidth:"2",strokeMiterlimit:"10",cx:"12.5",cy:"12.5",r:"6.7"}),n.jsx("polyline",{fill:"#807F80",points:"10.2,17.3 8.8,20 12.5,21 16.2,19.7 14.8,17.3 "}),n.jsx("path",{fill:"#FFFFFF",d:"M13.1,13.8h-1.5v5.6c0,0.2-0.1,0.3-0.3,0.3l-4.1,0.9v1.2h10.3v-1.2l-4.1-0.9c-0.2,0-0.3-0.2-0.3-0.3L13.1,13.8"}),n.jsx("circle",{cx:"12.5",cy:"12.5",r:"11.5",fill:"#807F80",fillOpacity:"0",onPointerDown:s,onPointerMove:c,onPointerUp:h,style:{cursor:"move"}})]}),o==="hsr"&&n.jsxs(n.Fragment,{children:[n.jsx("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)",children:n.jsx("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})}),n.jsxs("g",{id:"hsr",transform:"scale(0.33)",children:[n.jsx("rect",{x:-29.33899,width:58.67798,height:58.67798}),n.jsxs("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)",children:[n.jsx("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),n.jsx("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),n.jsx("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),n.jsx("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),n.jsx("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),n.jsx("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),n.jsx("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),n.jsx("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),n.jsx("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),n.jsx("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),n.jsx("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),n.jsx("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"})]}),n.jsx("rect",{x:-29.33899,width:58.67798,height:58.67798,fillOpacity:"0",onPointerDown:s,onPointerMove:c,onPointerUp:h,style:{cursor:"move"}})]})]}),o==="airport_hk"&&n.jsxs("g",{id:"airport_hk",transform:"scale(0.33)",children:[n.jsx("rect",{x:"-29.35",fill:"#012639",width:"58.7",height:"58.7"}),n.jsx("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"}),n.jsx("rect",{fill:"#012639",x:"-29.35",width:"58.7",height:"58.7",fillOpacity:"0",onPointerDown:s,onPointerMove:c,onPointerUp:h,style:{cursor:"move"}})]}),o==="disney_hk"&&n.jsxs("g",{id:"disney_hk",transform:"scale(0.33)",children:[n.jsx("rect",{x:"-29.35",fill:"#012639",width:"58.7",height:"58.7"}),n.jsx("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"}),n.jsx("rect",{fill:"#012639",x:"-29.35",width:"58.7",height:"58.7",fillOpacity:"0",onPointerDown:s,onPointerMove:c,onPointerUp:h,style:{cursor:"move"}})]}),o==="ngong_ping_360"&&n.jsx(n.Fragment,{children:n.jsxs("g",{id:"ngong_ping_360",transform:"translate(-179,-161)scale(0.33)",children:[n.jsx("rect",{x:"270.1",y:"270.4",fill:"#012639",width:"58.7",height:"58.7"}),n.jsx("polygon",{fill:"#FFFFFF",points:"277.2,274.7 297.4,280.1 297.4,278.6 277.2,273.2 "}),n.jsx("polygon",{fill:"#FFFFFF",points:"301.4,281.2 321.7,286.6 321.7,285.1 301.4,279.7 "}),n.jsx("path",{fill:"#FFFFFF",d:`M312.4,326c0,0.1-0.2,0.2-0.3,0.2h-1.1c-0.2,0-0.3-0.1-0.3-0.3c0,0,0-0.1,0-0.1l0.8-2.4h-23.9l0.8,2.4
	c0,0,0,0.1,0,0.1c0,0.2-0.1,0.3-0.3,0.3h-1.1c-0.1,0-0.3-0.1-0.3-0.2l-3.8-13.9c-1-3.6-0.3-8.2,0.4-10.5l4.7-14.9
	c0.2-0.8,0.5-0.9,0.8-0.9h1.2l-0.4,1.2h8.7v-10.2c0-0.2,0.2-0.4,0.4-0.4h1.8c0.2,0,0.4,0.2,0.4,0.4v10.2h8.7l-0.4-1.2h1.2
	c0.3,0,0.6,0.1,0.8,0.9l4.7,14.9c0.7,2.3,1.4,6.8,0.4,10.5L312.4,326z`}),n.jsx("path",{fill:"#012639",d:"M288.4,289.9v19c0,0.3-0.2,0.5-0.5,0.5h-4c-0.3-3.2,0.4-6,1-8.3L288.4,289.9z"}),n.jsx("path",{fill:"#012639",d:"M310.5,289.9v19c0,0.3,0.2,0.5,0.5,0.5h4c0.3-3.2-0.4-6-1-8.3L310.5,289.9z"}),n.jsx("path",{fill:"#012639",d:`M290.4,289.9h7.7c0.3,0,0.5,0.2,0.5,0.5v18.5c0,0.3-0.2,0.5-0.5,0.5h-7.7c-0.3,0-0.5-0.2-0.5-0.5v-18.5
	C289.9,290.2,290.2,289.9,290.4,289.9`}),n.jsx("path",{fill:"#012639",d:`M300.7,289.9h7.8c0.3,0,0.5,0.2,0.5,0.5v18.5c0,0.3-0.2,0.5-0.5,0.5h-7.8c-0.3,0-0.5-0.2-0.5-0.5v-18.5
	C300.2,290.2,300.4,289.9,300.7,289.9`}),n.jsx("rect",{x:"270.1",y:"270.4",width:"58.7",height:"58.7",fillOpacity:"0",onPointerDown:s,onPointerMove:c,onPointerUp:h,style:{cursor:"move"}})]})})]}),[e,i,r,o,s,c,h])},D={type:"airport"},ve=[{type:"select",label:"panel.details.node.facilities.type",value:t=>(t!=null?t:D).type,options:{airport:"airport",maglev:"maglev",disney:"disney",railway:"railway",hsr:"hsr",airport_hk:"airport Hongkong",disney_hk:"disney Hongkong",ngong_ping_360:"Ngong Ping 360"},onChange:(t,e)=>{const i=e!=null?e:D;return i.type=t,i}}],Ne=n.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:n.jsxs("g",{transform:"translate(12, 0)scale(0.4)",children:[n.jsx("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"currentColor"}),n.jsx("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]})}),Fe={component:be,icon:Ne,defaultAttrs:D,fields:ve,metadata:{displayName:"panel.details.node.facilities.displayName",tags:[]}},Se=t=>{const{id:e,x:i,y:r,attrs:a,handlePointerDown:x,handlePointerMove:d,handlePointerUp:m}=t,{content:o=p.content,fontSize:s=p.fontSize,lineHeight:c=p.lineHeight,textAnchor:h=p.textAnchor,dominantBaseline:f=p.dominantBaseline,language:g=p.language,color:u=p.color,rotate:y=p.rotate,italic:B=p.italic}=a!=null?a:p,A=l.useRef(null),[b,E]=l.useState({x:0,y:0,width:32,height:16});l.useEffect(()=>E(A.current.getBBox()),[o,h,f,E,A]);const R=l.useCallback(U=>x(e,U),[e,x]),I=l.useCallback(U=>d(e,U),[e,d]),O=l.useCallback(U=>m(e,U),[e,m]);return l.useMemo(()=>n.jsxs("g",{id:e,transform:`translate(${i}, ${r})rotate(${y})`,children:[n.jsx(H,{ref:A,text:o.split(`
`),lineHeight:c,grow:"down",className:`rmp-name-station rmp-name__${g}`,fontSize:s,textAnchor:h,dominantBaseline:f,fill:u[2],fontStyle:B?"italic":"normal"}),n.jsx("rect",{fill:"white",fillOpacity:"0",x:b.x-1.5,y:b.y-1.5,width:b.width+3,height:b.height+3,onPointerDown:R,onPointerMove:I,onPointerUp:O,style:{cursor:"move"}})]}),[e,i,r,o,s,c,h,f,g,u,y,B,b,R,I,O])},p={content:"Enter your text here",fontSize:16,lineHeight:16,textAnchor:"middle",dominantBaseline:"middle",language:"en",color:[L.Shanghai,"jsr","#000000",w.white],rotate:0,italic:!1},Le=[{type:"textarea",label:"panel.details.node.text.content",value:t=>(t!=null?t:p).content,onChange:(t,e)=>{const i=e!=null?e:p;return i.content=t.toString(),i}},{type:"input",label:"panel.details.node.text.fontSize",value:t=>(t!=null?t:p).fontSize,validator:t=>Number.isInteger(t)&&Number(t)>0,onChange:(t,e)=>{const i=e!=null?e:p;return i.fontSize=Number(t),i}},{type:"input",label:"panel.details.node.text.lineHeight",value:t=>(t!=null?t:p).lineHeight,validator:t=>Number.isInteger(t)&&Number(t)>0,onChange:(t,e)=>{const i=e!=null?e:p;return i.lineHeight=Number(t),i}},{type:"select",label:"panel.details.node.text.textAnchor",value:t=>(t!=null?t:p).textAnchor,options:{start:"start",middle:"middle",end:"end"},onChange:(t,e)=>{const i=e!=null?e:p;return i.textAnchor=t,i}},{type:"select",label:"panel.details.node.text.dominantBaseline",value:t=>(t!=null?t:p).dominantBaseline,options:{auto:"auto",middle:"middle",hanging:"hanging"},onChange:(t,e)=>{const i=e!=null?e:p;return i.dominantBaseline=t,i}},{type:"select",label:"panel.details.node.text.language",value:t=>(t!=null?t:p).language,options:{zh:"Chinese",en:"English",mtr__zh:"MTR Chinese",mtr__en:"MTR English"},onChange:(t,e)=>{const i=e!=null?e:p;return i.language=t.toString(),i}},{type:"select",label:"panel.details.node.text.rotate",value:t=>{var e;return(e=t==null?void 0:t.rotate)!=null?e:p.rotate},options:{0:"0",45:"45",90:"90",135:"135",180:"180",225:"225",270:"270",315:"315"},onChange:(t,e)=>{const i=e!=null?e:p;return i.rotate=Number(t),i}},{type:"switch",label:"panel.details.node.text.italic",isChecked:t=>{var e;return(e=t==null?void 0:t.italic)!=null?e:p.italic},onChange:(t,e)=>{const i=e!=null?e:p;return i.italic=t,i}},{type:"custom",component:n.jsx(z,{type:j.Text,defaultAttrs:p})}],ze=n.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:n.jsx("text",{x:"12",y:"12",textAnchor:"middle",dominantBaseline:"middle",fontSize:"10",children:"Text"})}),Ce={component:Se,icon:ze,defaultAttrs:p,fields:Le,metadata:{displayName:"panel.details.node.text.displayName",tags:[]}},Me=t=>{const{id:e,x:i,y:r,attrs:a,handlePointerDown:x,handlePointerMove:d,handlePointerUp:m}=t,{num:o=P.num,color:s=P.color}=a!=null?a:P,c=l.useCallback(u=>x(e,u),[e,x]),h=l.useCallback(u=>d(e,u),[e,d]),f=l.useCallback(u=>m(e,u),[e,m]),g=s[3];return l.useMemo(()=>n.jsxs("g",{id:e,transform:`translate(${i}, ${r})`,children:[n.jsx("rect",{fill:s[2],x:"0",width:"25",height:"15"}),n.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:g,fontSize:"14",letterSpacing:"1",children:["U",o]}),n.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"25",height:"15",onPointerDown:c,onPointerMove:h,onPointerUp:f,style:{cursor:"move"}})]}),[e,i,r,o,...s,c,h,f])},P={num:1,color:[L.Berlin,"bu1","#62AD2D",w.white]},Pe=[{type:"input",label:"panel.details.node.berlinUBahnLineBadge.num",value:t=>(t!=null?t:P).num,validator:t=>!Number.isNaN(t),onChange:(t,e)=>{const i=e!=null?e:P;return Number.isNaN(t)||(i.num=Number(t)),i}},{type:"custom",component:n.jsx(z,{type:j.BerlinUBahnLineBadge,defaultAttrs:P})}],ke=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),n.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),Ae={component:Me,icon:ke,defaultAttrs:P,fields:Pe,metadata:{displayName:"panel.details.node.berlinUBahnLineBadge.displayName",tags:[]}},Te=t=>{const{id:e,x:i,y:r,attrs:a,handlePointerDown:x,handlePointerMove:d,handlePointerUp:m}=t,{num:o=k.num,color:s=k.color}=a!=null?a:k,[c,h]=o>=10?[6,19.75]:[10,20],f=l.useCallback(B=>x(e,B),[e,x]),g=l.useCallback(B=>d(e,B),[e,d]),u=l.useCallback(B=>m(e,B),[e,m]),y=s[3];return l.useMemo(()=>n.jsxs("g",{id:e,transform:`translate(${i}, ${r})`,children:[n.jsx("rect",{fill:s[2],x:"0",width:"30",height:"15",rx:"8"}),n.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:c,y:"12.5",fill:y,fontSize:"14",letterSpacing:"0",children:"S"}),n.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:h,y:"12.5",fill:y,fontSize:"14",letterSpacing:"-0.2",children:o}),n.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"30",height:"15",onPointerDown:f,onPointerMove:g,onPointerUp:u,style:{cursor:"move"}})]}),[e,i,r,o,...s,f,g,u])},k={num:1,color:[L.Berlin,"bs1","#DD6CA6",w.white]},Ue=[{type:"input",label:"panel.details.node.berlinSBahnLineBadge.num",value:t=>(t!=null?t:k).num,validator:t=>!Number.isNaN(t),onChange:(t,e)=>{const i=e!=null?e:k;return Number.isNaN(t)||(i.num=Number(t)),i}},{type:"custom",component:n.jsx(z,{type:j.BerlinSBahnLineBadge,defaultAttrs:k})}],$e=n.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[n.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),n.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),De={component:Te,icon:$e,defaultAttrs:k,fields:Ue,metadata:{displayName:"panel.details.node.berlinSBahnLineBadge.displayName",tags:[]}},He={[j.Virtual]:W,[j.ShmetroNumLineBadge]:K,[j.ShmetroTextLineBadge]:ee,[j.GzmtrLineBadge]:ce,[j.BjsubwayNumLineBadge]:me,[j.BjsubwayTextLineBadge]:pe,[j.SuzhouRTNumLineBadge]:we,[j.BerlinSBahnLineBadge]:De,[j.BerlinUBahnLineBadge]:Ae,[j.Facilities]:Fe,[j.Text]:Ce};export{He as m};
