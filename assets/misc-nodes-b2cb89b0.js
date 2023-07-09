import{C as z,v as b,am as M,J as B}from"./index-6c328a8c.js";import{j as e}from"./chakra-85c10392.js";import{b as l}from"./react-d997006e.js";import{M as $}from"./stations-b27d5998.js";const D=t=>{const{id:n,x:i,y:h,handlePointerDown:a,handlePointerMove:m,handlePointerUp:d}=t,x=l.useCallback(s=>a(n,s),[n,a]),o=l.useCallback(s=>m(n,s),[n,m]),c=l.useCallback(s=>d(n,s),[n,d]);return l.useMemo(()=>e.jsxs("g",{id:n,transform:`translate(${i}, ${h})rotate(45)`,children:[e.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),e.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),e.jsx("circle",{id:`virtual_circle_${n}`,r:5,stroke:"black",fill:"white",fillOpacity:"0",onPointerDown:x,onPointerMove:o,onPointerUp:c,style:{cursor:"move"}})]}),[n,i,h,x,o,c])},U={},O=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[e.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),e.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),e.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),I={component:D,icon:O,defaultAttrs:U,fields:[],metadata:{displayName:"panel.details.node.virtual.displayName",tags:[]}},H=t=>{const{id:n,x:i,y:h,attrs:a,handlePointerDown:m,handlePointerMove:d,handlePointerUp:x}=t,{num:o=L.num,color:c=L.color}=a!=null?a:L,[s,r]=o>=10?[22.67,10.75]:[21,10],u=l.useCallback(p=>m(n,p),[n,m]),f=l.useCallback(p=>d(n,p),[n,d]),y=l.useCallback(p=>x(n,p),[n,x]);return l.useMemo(()=>e.jsxs("g",{id:n,transform:`translate(${i}, ${h})`,children:[e.jsx("rect",{fill:c[2],width:s,height:"22.67"}),e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:r,y:"19",fill:c[3],fontSize:"21.33",letterSpacing:"-1.75",children:o}),e.jsx("text",{className:"rmp-name__zh",x:s+2,y:"12",fontSize:"14.67",children:"号线"}),e.jsxs("text",{className:"rmp-name__en",x:s+4,y:"21.5",fontSize:"8",children:["Line ",o]}),e.jsx("rect",{fill:"white",fillOpacity:"0",width:s,height:"22.67",onPointerDown:u,onPointerMove:f,onPointerUp:y,style:{cursor:"move"}})]}),[n,i,h,o,...c,u,f,y])},L={num:1,color:[z.Shanghai,"sh1","#E4002B",b.white]},R=[{type:"input",label:"panel.details.node.shmetroNumLineBadge.num",value:t=>(t!=null?t:L).num,validator:t=>!Number.isNaN(t),onChange:(t,n)=>{const i=n!=null?n:L;return Number.isNaN(t)||(i.num=Number(t)),i}},{type:"custom",component:e.jsx(M,{type:B.ShmetroNumLineBadge,defaultAttrs:L})}],Z=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),e.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),e.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),e.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),V={component:H,icon:Z,defaultAttrs:L,fields:R,metadata:{displayName:"panel.details.node.shmetroNumLineBadge.displayName",tags:[]}},G=t=>{const{id:n,x:i,y:h,attrs:a,handlePointerDown:m,handlePointerMove:d,handlePointerUp:x}=t,{names:o=v.names,color:c=v.color}=a!=null?a:v,s=l.useRef(null),[r,u]=l.useState({width:12});l.useEffect(()=>u(s.current.getBBox()),[...o,u,s]);const f=l.useCallback(j=>m(n,j),[n,m]),y=l.useCallback(j=>d(n,j),[n,d]),p=l.useCallback(j=>x(n,j),[n,x]);return l.useMemo(()=>e.jsxs("g",{id:n,transform:`translate(${i}, ${h})`,children:[e.jsx("rect",{fill:c[2],x:"0",width:r.width+7,height:"21"}),e.jsxs("g",{ref:s,children:[e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(r.width+7)/2,y:"4",fontSize:"10",fill:c[3],letterSpacing:"-0.25",children:o[0]}),e.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(r.width+7)/2,y:"13",fontSize:"5",fill:c[3],letterSpacing:"-0.25",children:o[1]})]}),e.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:r.width+7,height:"21",onPointerDown:f,onPointerMove:y,onPointerUp:p,style:{cursor:"move"}})]}),[n,i,h,...o,r,...c,f,y,p])},v={names:["浦江线","Pujiang Line"],color:[z.Shanghai,"pjl","#B5B5B6",b.white]},W=[{type:"input",label:"panel.details.node.shmetroTextLineBadge.nameZh",value:t=>(t!=null?t:v).names[0],onChange:(t,n)=>{const i=n!=null?n:v;return i.names[0]=t.toString(),i}},{type:"input",label:"panel.details.node.shmetroTextLineBadge.nameEn",value:t=>(t!=null?t:v).names[1],onChange:(t,n)=>{const i=n!=null?n:v;return i.names[1]=t.toString(),i}},{type:"custom",component:e.jsx(M,{type:B.ShmetroTextLineBadge,defaultAttrs:v})}],X=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),e.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),e.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),J={component:G,icon:X,defaultAttrs:v,fields:W,metadata:{displayName:"panel.details.node.shmetroTextLineBadge.displayName",tags:[]}},q=t=>{const{lineName:n,commonPart:i}=t,h=l.useRef(null),[a,m]=l.useState({x:0,height:0,width:0});l.useEffect(()=>{h.current&&m(h.current.getBBox())},[n.toString()]);const d=C/Math.max(C,a.width),x=(-a.x-a.width/2)*d,o=a.height*(1-d)*1.2/2;return e.jsx("g",{ref:h,transform:`translate(${x},${o})scale(${d})`,children:e.jsxs("text",{className:"rmp-name__zh",fontSize:14,y:12,textAnchor:"end",children:[i,e.jsx("tspan",{className:"rmp-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:n[0].slice(i.length).trim()}),e.jsx("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:n[1].slice(i.length).trim()})]})})},K=t=>e.jsx("rect",{x:-22.5,height:24,width:45,rx:4.5,...t}),C=42,Q=t=>{const{lineName:n,foregroundColour:i,backgroundColour:h,passed:a}=t,[m,d]=Y(n),x=l.useRef(null),o=l.useRef(null),[c,s]=l.useState({width:0}),[r,u]=l.useState({width:0});l.useEffect(()=>{x.current&&s(x.current.getBBox()),o.current&&u(o.current.getBBox())},[n.toString()]);const f=C/Math.max(C,c.width),y=C/Math.max(C,r.width),p={nameZh:{y:7.3+13.5*(1-f)*f/2},nameEn:{y:19.5-9*(1-y)*y/2}};return e.jsxs("g",{textAnchor:"middle",fill:a?b.white:i,children:[e.jsx(K,{fill:a?"#aaa":h}),m===2?e.jsx(q,{lineName:n,commonPart:d}):e.jsxs(e.Fragment,{children:[e.jsx("text",{ref:x,className:"rmp-name__zh",fontSize:12,transform:`translate(0,${p.nameZh.y})scale(${f})`,dominantBaseline:"central",children:m===1?e.jsxs(e.Fragment,{children:[e.jsx("tspan",{fontSize:16,dy:.7,className:"rmp-name__zh",dominantBaseline:"central",children:d}),e.jsx("tspan",{dy:-.7,className:"rmp-name__zh",dominantBaseline:"central",children:n[0].slice(d.length)})]}):n[0]}),e.jsx("text",{ref:o,className:"rmp-name__en",fontSize:8,transform:`translate(0,${p.nameEn.y})scale(${y})`,dominantBaseline:"middle",children:n[1]})]})]})},Y=t=>{const n=t[0].match(/^(\d+)\D+$/);if(n)return[1,n[1]];const i=t.map(h=>h.match(/^(\w+).+$/));return i[0]&&i[1]&&i[0][1]===i[1][1]?[2,i[0][1]]:[3,""]},_=t=>{const{id:n,x:i,y:h,attrs:a,handlePointerDown:m,handlePointerMove:d,handlePointerUp:x}=t,{names:o=F.names,color:c=F.color}=a!=null?a:F,s=l.useCallback(f=>m(n,f),[n,m]),r=l.useCallback(f=>d(n,f),[n,d]),u=l.useCallback(f=>x(n,f),[n,x]);return l.useMemo(()=>e.jsxs("g",{id:n,transform:`translate(${i}, ${h})`,children:[e.jsx(Q,{lineName:o,foregroundColour:c[3],backgroundColour:c[2]}),e.jsx("rect",{fill:"white",fillOpacity:"0",x:"-22.5",width:"45",height:"24",rx:"4.5",onPointerDown:s,onPointerMove:r,onPointerUp:u,style:{cursor:"move"}})]}),[n,i,h,...o,...c,s,r,u])},F={names:["1号线","Line 1"],color:[z.Guangzhou,"gz1","#F3D03E",b.black]},ee=[{type:"input",label:"panel.details.node.gzmtrLineBadge.nameZh",value:t=>(t!=null?t:F).names[0],onChange:(t,n)=>{const i=n!=null?n:F;return i.names[0]=t.toString(),i}},{type:"input",label:"panel.details.node.gzmtrLineBadge.nameEn",value:t=>(t!=null?t:F).names[1],onChange:(t,n)=>{const i=n!=null?n:F;return i.names[1]=t.toString(),i}},{type:"custom",component:e.jsx(M,{type:B.GzmtrLineBadge,defaultAttrs:F})}],ne=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),e.jsx("text",{x:"12",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"1号线"}),e.jsx("text",{x:"12",y:"17",textAnchor:"middle",fontSize:"5",fill:"white",children:"Line 1"})]}),te={component:_,icon:ne,defaultAttrs:F,fields:ee,metadata:{displayName:"panel.details.node.gzmtrLineBadge.displayName",tags:[]}},ie=t=>{const{id:n,x:i,y:h,attrs:a,handlePointerDown:m,handlePointerMove:d,handlePointerUp:x}=t,{num:o=S.num,color:c=S.color}=a!=null?a:S,s=l.useRef(null),[r,u]=l.useState({width:12});l.useEffect(()=>u(s.current.getBBox()),[o,u,s]);const f=l.useCallback(w=>m(n,w),[n,m]),y=l.useCallback(w=>d(n,w),[n,d]),p=l.useCallback(w=>x(n,w),[n,x]),j=c[3]===b.black?"#003670":b.white;return l.useMemo(()=>e.jsxs("g",{id:n,transform:`translate(${i}, ${h})scale(1.5)`,children:[e.jsx("rect",{fill:c[2],x:"0",width:r.width+23,height:"16",rx:"2"}),e.jsx("text",{ref:s,className:"rmp-name__zh",textAnchor:"middle",x:r.width/2+3,y:"13.5",fill:j,children:o}),e.jsx("text",{className:"rmp-name__zh",x:r.width+4,y:"8.5",fontSize:"8",fill:j,children:"号线"}),e.jsxs("text",{className:"rmp-name__en",x:r.width+6,y:"13.5",fontSize:"4",fill:j,children:["Line ",o]}),e.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:r.width+24,height:"16",rx:"2",onPointerDown:f,onPointerMove:y,onPointerUp:p,style:{cursor:"move"}})]}),[n,i,h,o,...c,r,f,y,p])},S={num:1,color:[z.Beijing,"bj1","#c23a30",b.white]},le=[{type:"input",label:"panel.details.node.bjsubwayNumLineBadge.num",value:t=>(t!=null?t:S).num,validator:t=>!Number.isNaN(t),onChange:(t,n)=>{const i=n!=null?n:S;return Number.isNaN(t)||(i.num=Number(t)),i}},{type:"custom",component:e.jsx(M,{type:B.BjsubwayNumLineBadge,defaultAttrs:S})}],oe=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),e.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),e.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),se={component:ie,icon:oe,defaultAttrs:S,fields:le,metadata:{displayName:"panel.details.node.bjsubwayNumLineBadge.displayName",tags:[]}},ae=t=>{const{id:n,x:i,y:h,attrs:a,handlePointerDown:m,handlePointerMove:d,handlePointerUp:x}=t,{names:o=N.names,color:c=N.color}=a!=null?a:N,s=l.useRef(null),[r,u]=l.useState({width:12});l.useEffect(()=>u(s.current.getBBox()),[...o,u,s]);const f=l.useCallback(w=>m(n,w),[n,m]),y=l.useCallback(w=>d(n,w),[n,d]),p=l.useCallback(w=>x(n,w),[n,x]),j=c[3]===b.black?"#003670":b.white;return l.useMemo(()=>e.jsxs("g",{id:n,transform:`translate(${i}, ${h})scale(1.5)`,children:[e.jsx("rect",{fill:c[2],x:"0",width:r.width+6,height:"16",rx:"2"}),e.jsxs("g",{ref:s,children:[e.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(r.width+6)/2,y:"8",fontSize:"7",fill:j,children:o[0]}),e.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(r.width+6)/2,y:"13.5",fontSize:"4",fill:j,children:o[1]})]}),e.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:r.width+3,height:"16",rx:"2",onPointerDown:f,onPointerMove:y,onPointerUp:p,style:{cursor:"move"}})]}),[n,i,h,...o,r,...c,f,y,p])},N={names:["八通线","Batong Line"],color:[z.Beijing,"bj1","#c23a30",b.white]},ce=[{type:"input",label:"panel.details.node.bjsubwayTextLineBadge.nameZh",value:t=>(t!=null?t:N).names[0],onChange:(t,n)=>{const i=n!=null?n:N;return i.names[0]=t.toString(),i}},{type:"input",label:"panel.details.node.bjsubwayTextLineBadge.nameEn",value:t=>(t!=null?t:N).names[1],onChange:(t,n)=>{const i=n!=null?n:N;return i.names[1]=t.toString(),i}},{type:"custom",component:e.jsx(M,{type:B.BjsubwayTextLineBadge,defaultAttrs:N})}],re=e.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[e.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),e.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),e.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),he={component:ae,icon:re,defaultAttrs:N,fields:ce,metadata:{displayName:"panel.details.node.bjsubwayTextLineBadge.displayName",tags:[]}},de=t=>{const{id:n,x:i,y:h,attrs:a,handlePointerDown:m,handlePointerMove:d,handlePointerUp:x}=t,{type:o=k.type}=a!=null?a:k,c=l.useCallback(u=>m(n,u),[n,m]),s=l.useCallback(u=>d(n,u),[n,d]),r=l.useCallback(u=>x(n,u),[n,x]);return l.useMemo(()=>e.jsxs("g",{id:n,transform:`translate(${i}, ${h})`,children:[o==="airport"&&e.jsxs("g",{id:"airport",transform:"translate(-12.5,0)",children:[e.jsx("circle",{fill:"#828282",cx:"12.5",cy:"12.5",r:"11.5"}),e.jsx("line",{fill:"none",stroke:"#FFFFFF",strokeWidth:"2.167",strokeLinecap:"round",strokeMiterlimit:"10",x1:"12.5",y1:"18.7",x2:"12.5",y2:"3.7"}),e.jsx("polyline",{fill:"#FFFFFF",points:"11.7,9.3 3.3,14.3 3.3,16.7 11.7,13.7 "}),e.jsx("polyline",{fill:"#FFFFFF",points:"13.3,9.3 21.7,14.3 21.7,16.7 13.3,13.7 "}),e.jsx("polyline",{fill:"#FFFFFF",points:"11.7,18.3 9.7,19.7 9.7,21.7 12.3,20.7 12.7,20.7 15.3,21.7 15.3,19.7 13.3,18.3 "}),e.jsx("circle",{fill:"#828282",fillOpacity:"0",cx:"12.5",cy:"12.5",r:"11.5",onPointerDown:c,onPointerMove:s,onPointerUp:r,style:{cursor:"move"}})]}),o==="disney"&&e.jsxs("g",{id:"disney",transform:"scale(0.426)",children:[e.jsx("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey"}),e.jsx("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"}),e.jsx("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"grey",fillOpacity:"0",onPointerDown:c,onPointerMove:s,onPointerUp:r,style:{cursor:"move"}})]}),o==="maglev"&&e.jsxs("g",{id:"maglev",transform:"translate(-12.5,0)",children:[e.jsx("path",{fill:"#10716F",d:`M23.8,22.4c0,0.8-0.6,1.4-1.4,1.4H2.6c-0.8,0-1.4-0.6-1.4-1.4V2.6c0-0.8,0.6-1.4,1.4-1.4h19.8
		c0.8,0,1.4,0.6,1.4,1.4V22.4L23.8,22.4z`}),e.jsx("path",{fill:"#FFFFFF",d:`M12.5,2.8l-1,1.7L7.2,5C5.9,5.1,4.8,6.2,4.8,7.6v6.2c0,0.9,0.7,1.7,1.7,1.7h12c0.9,0,1.7-0.7,1.7-1.7V7.6
	c0-1.4-1-2.5-2.4-2.7l-4.3-0.4`}),e.jsx("polyline",{fill:"#10716F",points:"13.2,8.8 13.2,11.8 18,11.8 18,8.5 13.2,8.5 "}),e.jsx("polyline",{fill:"#10716F",points:"7,8.8 7,11.8 11.8,11.8 11.8,8.5 7,8.5 "}),e.jsx("path",{fill:"#FFFFFF",d:`M4.8,15.3v4c0,1.1,0.7,2,1.8,2h2v-1.7H6.5v-2.3h12v2.3h-2.2v1.7h2c1.1,0,1.8-0.7,1.8-1.8v-4.3v0.2
	c-0.3,0.4-0.8,0.7-1.3,0.7H6.2C5.7,16,5.2,15.8,4.8,15.3L4.8,15.3z`}),e.jsx("path",{d:`M23.8,22.4c0,0.8-0.6,1.4-1.4,1.4H2.6c-0.8,0-1.4-0.6-1.4-1.4V2.6c0-0.8,0.6-1.4,1.4-1.4h19.8
		c0.8,0,1.4,0.6,1.4,1.4V22.4L23.8,22.4z`,fill:"#10716F",fillOpacity:"0",onPointerDown:c,onPointerMove:s,onPointerUp:r,style:{cursor:"move"}})]}),o==="railway"&&e.jsxs("g",{id:"railway",transform:"translate(-12.5,0)",children:[e.jsx("circle",{fill:"#807F80",cx:"12.5",cy:"12.5",r:"11.5"}),e.jsx("line",{fill:"none",x1:"10.8",y1:"3.8",x2:"10.8",y2:"4.8"}),e.jsx("polyline",{fill:"#FFFFFF",points:"10.8,5 10.8,3.8 14.2,3.8 14.2,5 "}),e.jsx("path",{fill:"#FFFFFF",d:`M13.8,14.1h-2.7c-0.8,0-1.5-0.7-1.5-1.5v-0.2c0-0.8,0.7-1.5,1.5-1.5h2.7c0.8,0,1.5,0.7,1.5,1.5v0.2
	C15.3,13.4,14.7,14.1,13.8,14.1z`}),e.jsx("circle",{fill:"none",stroke:"#FFFFFF",strokeWidth:"2",strokeMiterlimit:"10",cx:"12.5",cy:"12.5",r:"6.7"}),e.jsx("polyline",{fill:"#807F80",points:"10.2,17.3 8.8,20 12.5,21 16.2,19.7 14.8,17.3 "}),e.jsx("path",{fill:"#FFFFFF",d:"M13.1,13.8h-1.5v5.6c0,0.2-0.1,0.3-0.3,0.3l-4.1,0.9v1.2h10.3v-1.2l-4.1-0.9c-0.2,0-0.3-0.2-0.3-0.3L13.1,13.8"}),e.jsx("circle",{cx:"12.5",cy:"12.5",r:"11.5",fill:"#807F80",fillOpacity:"0",onPointerDown:c,onPointerMove:s,onPointerUp:r,style:{cursor:"move"}})]}),o==="hsr"&&e.jsxs(e.Fragment,{children:[e.jsx("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)",children:e.jsx("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})}),e.jsxs("g",{id:"hsr",transform:"scale(0.33)",children:[e.jsx("rect",{x:-29.33899,width:58.67798,height:58.67798}),e.jsxs("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)",children:[e.jsx("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),e.jsx("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),e.jsx("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),e.jsx("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),e.jsx("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),e.jsx("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),e.jsx("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),e.jsx("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),e.jsx("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),e.jsx("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),e.jsx("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),e.jsx("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"})]}),e.jsx("rect",{x:-29.33899,width:58.67798,height:58.67798,fillOpacity:"0",onPointerDown:c,onPointerMove:s,onPointerUp:r,style:{cursor:"move"}})]})]}),o==="airport_hk"&&e.jsxs("g",{id:"airport_hk",transform:"scale(0.33)",children:[e.jsx("rect",{x:"-29.35",fill:"#012639",width:"58.7",height:"58.7"}),e.jsx("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"}),e.jsx("rect",{fill:"#012639",x:"-29.35",width:"58.7",height:"58.7",fillOpacity:"0",onPointerDown:c,onPointerMove:s,onPointerUp:r,style:{cursor:"move"}})]}),o==="disney_hk"&&e.jsxs("g",{id:"disney_hk",transform:"scale(0.33)",children:[e.jsx("rect",{x:"-29.35",fill:"#012639",width:"58.7",height:"58.7"}),e.jsx("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"}),e.jsx("rect",{fill:"#012639",x:"-29.35",width:"58.7",height:"58.7",fillOpacity:"0",onPointerDown:c,onPointerMove:s,onPointerUp:r,style:{cursor:"move"}})]}),o==="ngong_ping_360"&&e.jsx(e.Fragment,{children:e.jsxs("g",{id:"ngong_ping_360",transform:"translate(-179,-161)scale(0.33)",children:[e.jsx("rect",{x:"270.1",y:"270.4",fill:"#012639",width:"58.7",height:"58.7"}),e.jsx("polygon",{fill:"#FFFFFF",points:"277.2,274.7 297.4,280.1 297.4,278.6 277.2,273.2 "}),e.jsx("polygon",{fill:"#FFFFFF",points:"301.4,281.2 321.7,286.6 321.7,285.1 301.4,279.7 "}),e.jsx("path",{fill:"#FFFFFF",d:`M312.4,326c0,0.1-0.2,0.2-0.3,0.2h-1.1c-0.2,0-0.3-0.1-0.3-0.3c0,0,0-0.1,0-0.1l0.8-2.4h-23.9l0.8,2.4
	c0,0,0,0.1,0,0.1c0,0.2-0.1,0.3-0.3,0.3h-1.1c-0.1,0-0.3-0.1-0.3-0.2l-3.8-13.9c-1-3.6-0.3-8.2,0.4-10.5l4.7-14.9
	c0.2-0.8,0.5-0.9,0.8-0.9h1.2l-0.4,1.2h8.7v-10.2c0-0.2,0.2-0.4,0.4-0.4h1.8c0.2,0,0.4,0.2,0.4,0.4v10.2h8.7l-0.4-1.2h1.2
	c0.3,0,0.6,0.1,0.8,0.9l4.7,14.9c0.7,2.3,1.4,6.8,0.4,10.5L312.4,326z`}),e.jsx("path",{fill:"#012639",d:"M288.4,289.9v19c0,0.3-0.2,0.5-0.5,0.5h-4c-0.3-3.2,0.4-6,1-8.3L288.4,289.9z"}),e.jsx("path",{fill:"#012639",d:"M310.5,289.9v19c0,0.3,0.2,0.5,0.5,0.5h4c0.3-3.2-0.4-6-1-8.3L310.5,289.9z"}),e.jsx("path",{fill:"#012639",d:`M290.4,289.9h7.7c0.3,0,0.5,0.2,0.5,0.5v18.5c0,0.3-0.2,0.5-0.5,0.5h-7.7c-0.3,0-0.5-0.2-0.5-0.5v-18.5
	C289.9,290.2,290.2,289.9,290.4,289.9`}),e.jsx("path",{fill:"#012639",d:`M300.7,289.9h7.8c0.3,0,0.5,0.2,0.5,0.5v18.5c0,0.3-0.2,0.5-0.5,0.5h-7.8c-0.3,0-0.5-0.2-0.5-0.5v-18.5
	C300.2,290.2,300.4,289.9,300.7,289.9`}),e.jsx("rect",{x:"270.1",y:"270.4",width:"58.7",height:"58.7",fillOpacity:"0",onPointerDown:c,onPointerMove:s,onPointerUp:r,style:{cursor:"move"}})]})})]}),[n,i,h,o,c,s,r])},k={type:"airport"},xe=[{type:"select",label:"panel.details.node.facilities.type",value:t=>(t!=null?t:k).type,options:{airport:"airport",maglev:"maglev",disney:"disney",railway:"railway",hsr:"hsr",airport_hk:"airport Hongkong",disney_hk:"disney Hongkong",ngong_ping_360:"Ngong Ping 360"},onChange:(t,n)=>{const i=n!=null?n:k;return i.type=t,i}}],me=e.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:e.jsxs("g",{transform:"translate(12, 0)scale(0.4)",children:[e.jsx("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"currentColor"}),e.jsx("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]})}),ue={component:de,icon:me,defaultAttrs:k,fields:xe,metadata:{displayName:"panel.details.node.facilities.displayName",tags:[]}},fe=t=>{const{id:n,x:i,y:h,attrs:a,handlePointerDown:m,handlePointerMove:d,handlePointerUp:x}=t,{content:o=g.content,fontSize:c=g.fontSize,lineHeight:s=g.lineHeight,textAnchor:r=g.textAnchor,dominantBaseline:u=g.dominantBaseline,language:f=g.language,color:y=g.color}=a!=null?a:g,p=l.useRef(null),[j,w]=l.useState({width:12});l.useEffect(()=>w(p.current.getBBox()),[o,w,p]);const A=l.useCallback(P=>m(n,P),[n,m]),T=l.useCallback(P=>d(n,P),[n,d]),E=l.useCallback(P=>x(n,P),[n,x]);return l.useMemo(()=>e.jsxs("g",{id:n,transform:`translate(${i}, ${h})`,children:[e.jsx($,{ref:p,text:o.split(`
`),className:`rmp-name-station rmp-name__${f}`,fontSize:c,lineHeight:s,textAnchor:r,dominantBaseline:u,fill:y[2],grow:"down"}),e.jsx("rect",{fill:"white",fillOpacity:"0",x:j.x-1.5,y:j.y-1.5,width:j.width+3,height:j.height+3,onPointerDown:A,onPointerMove:T,onPointerUp:E,style:{cursor:"move"}})]}),[n,i,h,o,c,s,r,u,f,y,j,A,T,E])},g={content:"Enter your text here",fontSize:16,lineHeight:16,textAnchor:"middle",dominantBaseline:"middle",language:"en",color:[z.Shanghai,"jsr","#000000",b.white]},ge=[{type:"textarea",label:"panel.details.node.text.content",value:t=>(t!=null?t:g).content,onChange:(t,n)=>{const i=n!=null?n:g;return i.content=t.toString(),i}},{type:"input",label:"panel.details.node.text.fontSize",value:t=>(t!=null?t:g).fontSize,validator:t=>Number.isInteger(t)&&Number(t)>0,onChange:(t,n)=>{const i=n!=null?n:g;return i.fontSize=Number(t),i}},{type:"input",label:"panel.details.node.text.lineHeight",value:t=>(t!=null?t:g).lineHeight,validator:t=>Number.isInteger(t)&&Number(t)>0,onChange:(t,n)=>{const i=n!=null?n:g;return i.lineHeight=Number(t),i}},{type:"select",label:"panel.details.node.text.textAnchor",value:t=>(t!=null?t:g).textAnchor,options:{start:"start",middle:"middle",end:"end"},onChange:(t,n)=>{const i=n!=null?n:g;return i.textAnchor=t,i}},{type:"select",label:"panel.details.node.text.dominantBaseline",value:t=>(t!=null?t:g).dominantBaseline,options:{auto:"auto",middle:"middle",hanging:"hanging"},onChange:(t,n)=>{const i=n!=null?n:g;return i.dominantBaseline=t,i}},{type:"select",label:"panel.details.node.text.language",value:t=>(t!=null?t:g).language,options:{zh:"Chinese",en:"English",mtr__zh:"MTR Chinese",mtr__en:"MTR English"},onChange:(t,n)=>{const i=n!=null?n:g;return i.language=t.toString(),i}},{type:"custom",component:e.jsx(M,{type:B.Text,defaultAttrs:g})}],pe=e.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:e.jsx("text",{x:"12",y:"12",textAnchor:"middle",dominantBaseline:"middle",fontSize:"10",children:"Text"})}),ye={component:fe,icon:pe,defaultAttrs:g,fields:ge,metadata:{displayName:"panel.details.node.text.displayName",tags:[]}},ve={[B.Virtual]:I,[B.ShmetroNumLineBadge]:V,[B.ShmetroTextLineBadge]:J,[B.GzmtrLineBadge]:te,[B.BjsubwayNumLineBadge]:se,[B.BjsubwayTextLineBadge]:he,[B.Facilities]:ue,[B.Text]:ye};export{ve as m};
