import{ao as w,C,e as j,ap as S,d as b}from"./index-107406f9.js";import{j as t}from"./chakra-594c63ee.js";import{b as i}from"./react-2c0b8364.js";import{M as Z,f as X}from"./stations-bc83e5f8.js";const W=n=>{const{id:e,x:o,y:c,handlePointerDown:a,handlePointerMove:u,handlePointerUp:r}=n,m=i.useCallback(d=>a(e,d),[e,a]),l=i.useCallback(d=>u(e,d),[e,u]),s=i.useCallback(d=>r(e,d),[e,r]);return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${c})rotate(45)`,children:[t.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),t.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),t.jsx("circle",{id:`virtual_circle_${e}`,r:5,stroke:"black",fill:"white",fillOpacity:"0",onPointerDown:m,onPointerMove:l,onPointerUp:s,style:{cursor:"move"}})]}),[e,o,c,m,l,s])},V={},K=()=>t.jsx(w,{fields:[]}),J=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[t.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),t.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),t.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),Q={component:W,icon:J,defaultAttrs:V,attrsComponent:K,metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},Y=n=>{const{id:e,x:o,y:c,attrs:a,handlePointerDown:u,handlePointerMove:r,handlePointerUp:m}=n,{num:l=k.num,color:s=k.color}=a!=null?a:k,[d,g]=l>=10?[22.67,10.75]:[21,10],p=i.useCallback(y=>u(e,y),[e,u]),x=i.useCallback(y=>r(e,y),[e,r]),h=i.useCallback(y=>m(e,y),[e,m]);return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${c})`,children:[t.jsx("rect",{fill:s[2],width:d,height:"22.67"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:g,y:"19",fill:s[3],fontSize:"21.33",letterSpacing:"-1.75",children:l}),t.jsx("text",{className:"rmp-name__zh",x:d+2,y:"12",fontSize:"14.67",children:"号线"}),t.jsxs("text",{className:"rmp-name__en",x:d+4,y:"21.5",fontSize:"8",children:["Line ",l]}),t.jsx("rect",{fill:"white",fillOpacity:"0",width:d,height:"22.67",onPointerDown:p,onPointerMove:x,onPointerUp:h,style:{cursor:"move"}})]}),[e,o,c,l,...s,p,x,h])},k={num:1,color:[C.Shanghai,"sh1","#E4002B",j.white]},_=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:k).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:k;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"custom",label:"color",component:t.jsx(S,{type:b.ShmetroNumLineBadge,defaultTheme:k.color})}],ee=()=>t.jsx(w,{fields:_}),ne=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),t.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),t.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),t.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),te={component:Y,icon:ne,defaultAttrs:k,attrsComponent:ee,metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},oe=n=>{const{id:e,x:o,y:c,attrs:a,handlePointerDown:u,handlePointerMove:r,handlePointerUp:m}=n,{names:l=v.names,color:s=v.color}=a!=null?a:v,d=i.useRef(null),[g,p]=i.useState({width:12});i.useEffect(()=>p(d.current.getBBox()),[...l,p,d]);const x=i.useCallback(B=>u(e,B),[e,u]),h=i.useCallback(B=>r(e,B),[e,r]),y=i.useCallback(B=>m(e,B),[e,m]);return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${c})`,children:[t.jsx("rect",{fill:s[2],x:"0",width:g.width+7,height:"21"}),t.jsxs("g",{ref:d,children:[t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(g.width+7)/2,y:"4",fontSize:"10",fill:s[3],letterSpacing:"-0.25",children:l[0]}),t.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(g.width+7)/2,y:"13",fontSize:"5",fill:s[3],letterSpacing:"-0.25",children:l[1]})]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:g.width+7,height:"21",onPointerDown:x,onPointerMove:h,onPointerUp:y,style:{cursor:"move"}})]}),[e,o,c,...l,g,...s,x,h,y])},v={names:["浦江线","Pujiang Line"],color:[C.Shanghai,"pjl","#B5B5B6",j.white]},ie=[{type:"input",label:"panel.details.nodes.common.nameZh",value:n=>(n!=null?n:v).names[0],onChange:(n,e)=>{const o=e!=null?e:v;return o.names[0]=n.toString(),o}},{type:"input",label:"panel.details.nodes.common.nameEn",value:n=>(n!=null?n:v).names[1],onChange:(n,e)=>{const o=e!=null?e:v;return o.names[1]=n.toString(),o}},{type:"custom",label:"color",component:t.jsx(S,{type:b.ShmetroTextLineBadge,defaultTheme:v.color})}],le=()=>t.jsx(w,{fields:ie}),ae=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),t.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),t.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),se={component:oe,icon:ae,defaultAttrs:v,attrsComponent:le,metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},ce=n=>{const{lineName:e,commonPart:o}=n,c=i.useRef(null),[a,u]=i.useState({x:0,height:0,width:0});i.useEffect(()=>{c.current&&u(c.current.getBBox())},[e.toString()]);const r=D/Math.max(D,a.width),m=(-a.x-a.width/2)*r,l=a.height*(1-r)*1.2/2;return t.jsx("g",{ref:c,transform:`translate(${m},${l})scale(${r})`,children:t.jsxs("text",{className:"rmp-name__zh",fontSize:14,y:12,textAnchor:"end",dominantBaseline:"central",children:[o,t.jsx("tspan",{className:"rmp-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",dominantBaseline:"central",children:e[0].slice(o.length).trim()}),t.jsx("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",dominantBaseline:"central",children:e[1].slice(o.length).trim()})]})})},re=n=>t.jsx("rect",{x:-22.5,height:24,width:45,rx:4.5,...n}),D=42,de=n=>{const{lineName:e,foregroundColour:o,backgroundColour:c,passed:a}=n,[u,r]=me(e),m=i.useRef(null),l=i.useRef(null),[s,d]=i.useState({width:0}),[g,p]=i.useState({width:0});i.useEffect(()=>{m.current&&d(m.current.getBBox()),l.current&&p(l.current.getBBox())},[e.toString()]);const x=D/Math.max(D,s.width),h=D/Math.max(D,g.width),y={nameZh:{y:7.3+13.5*(1-x)*x/2},nameEn:{y:19.5-9*(1-h)*h/2}};return t.jsxs("g",{textAnchor:"middle",fill:a?j.white:o,children:[t.jsx(re,{fill:a?"#aaa":c}),u===2?t.jsx(ce,{lineName:e,commonPart:r}):t.jsxs(t.Fragment,{children:[t.jsx("text",{ref:m,className:"rmp-name__zh",fontSize:12,transform:`translate(0,${y.nameZh.y})scale(${x})`,dominantBaseline:"central",children:u===1?t.jsxs(t.Fragment,{children:[t.jsx("tspan",{fontSize:16,dy:.7,className:"rmp-name__zh",dominantBaseline:"central",children:r}),t.jsx("tspan",{dy:-.7,className:"rmp-name__zh",dominantBaseline:"central",children:e[0].slice(r.length)})]}):e[0]}),t.jsx("text",{ref:l,className:"rmp-name__en",fontSize:8,transform:`translate(0,${y.nameEn.y})scale(${h})`,dominantBaseline:"middle",children:e[1]})]})]})},me=n=>{const e=n[0].match(/^(\d+)\D+$/);if(e)return[1,e[1]];const o=n.map(c=>c.match(/^(\w+).+$/));return o[0]&&o[1]&&o[0][1]===o[1][1]?[2,o[0][1]]:[3,""]},he=n=>{const{id:e,x:o,y:c,attrs:a,handlePointerDown:u,handlePointerMove:r,handlePointerUp:m}=n,{names:l=P.names,color:s=P.color}=a!=null?a:P,d=i.useCallback(x=>u(e,x),[e,u]),g=i.useCallback(x=>r(e,x),[e,r]),p=i.useCallback(x=>m(e,x),[e,m]);return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${c})`,children:[t.jsx(de,{lineName:l,foregroundColour:s[3],backgroundColour:s[2]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"-22.5",width:"45",height:"24",rx:"4.5",onPointerDown:d,onPointerMove:g,onPointerUp:p,style:{cursor:"move"}})]}),[e,o,c,...l,...s,d,g,p])},P={names:["1号线","Line 1"],color:[C.Guangzhou,"gz1","#F3D03E",j.black]},ue=[{type:"input",label:"panel.details.nodes.common.nameZh",value:n=>(n!=null?n:P).names[0],onChange:(n,e)=>{const o=e!=null?e:P;return o.names[0]=n.toString(),o}},{type:"input",label:"panel.details.nodes.common.nameEn",value:n=>(n!=null?n:P).names[1],onChange:(n,e)=>{const o=e!=null?e:P;return o.names[1]=n.toString(),o}},{type:"custom",label:"color",component:t.jsx(S,{type:b.GzmtrLineBadge,defaultTheme:P.color})}],xe=()=>t.jsx(w,{fields:ue}),ge=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),t.jsx("text",{x:"12",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"1号线"}),t.jsx("text",{x:"12",y:"17",textAnchor:"middle",fontSize:"5",fill:"white",children:"Line 1"})]}),pe={component:he,icon:ge,defaultAttrs:P,attrsComponent:xe,metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},I=11.84375,fe=n=>{const{id:e,x:o,y:c,attrs:a,handlePointerDown:u,handlePointerMove:r,handlePointerUp:m}=n,{num:l=M.num,color:s=M.color}=a!=null?a:M,d=i.useCallback(h=>u(e,h),[e,u]),g=i.useCallback(h=>r(e,h),[e,r]),p=i.useCallback(h=>m(e,h),[e,m]),x=s[3]===j.black?"#003670":j.white;return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${c})`,children:[t.jsx("rect",{fill:s[2],x:"0",width:I+21,height:"16",rx:"2"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:I/2+2,y:"13.5",fill:x,fontSize:"15",letterSpacing:"-1.5",children:l}),t.jsx("text",{className:"rmp-name__zh",x:I+(l>9?5.5:3),y:"8.5",fontSize:"7",fill:x,children:"号线"}),t.jsxs("text",{className:"rmp-name__en",x:I+(l>9?6:4.5),y:"13.5",fontSize:"4",fill:x,children:["Line ",l]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:I+23,height:"16",rx:"2",onPointerDown:d,onPointerMove:g,onPointerUp:p,style:{cursor:"move"}})]}),[e,o,c,l,...s,d,g,p])},M={num:1,color:[C.Beijing,"bj1","#c23a30",j.white]},ye=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:M).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:M;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"custom",label:"color",component:t.jsx(S,{type:b.BjsubwayNumLineBadge,defaultTheme:M.color})}],be=()=>t.jsx(w,{fields:ye}),Be=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),t.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),t.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),t.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),je={component:fe,icon:Be,defaultAttrs:M,attrsComponent:be,metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},we=28.84375,Ne=n=>{const{id:e,x:o,y:c,attrs:a,handlePointerDown:u,handlePointerMove:r,handlePointerUp:m}=n,{names:l=T.names,color:s=T.color}=a!=null?a:T,d=i.useRef(null),[g,p]=i.useState({width:12});i.useEffect(()=>p(d.current.getBBox()),[...l,p,d]);const x=i.useCallback(z=>u(e,z),[e,u]),h=i.useCallback(z=>r(e,z),[e,r]),y=i.useCallback(z=>m(e,z),[e,m]),B=Math.max(we,g.width),N=s[3]===j.black?"#003670":j.white;return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${c})`,children:[t.jsx("rect",{fill:s[2],x:"0",width:B+4,height:"16",rx:"2"}),t.jsxs("g",{ref:d,children:[t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(B+4)/2,y:"8",fontSize:"7",fill:N,children:l[0]}),t.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(B+4)/2,y:"13.5",fontSize:"4",fill:N,children:l[1]})]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:B+3,height:"16",rx:"2",onPointerDown:x,onPointerMove:h,onPointerUp:y,style:{cursor:"move"}})]}),[e,o,c,...l,g,...s,x,h,y])},T={names:["八通线","Batong Line"],color:[C.Beijing,"bj1","#c23a30",j.white]},Ce=[{type:"input",label:"panel.details.nodes.common.nameZh",value:n=>(n!=null?n:T).names[0],onChange:(n,e)=>{const o=e!=null?e:T;return o.names[0]=n.toString(),o}},{type:"input",label:"panel.details.nodes.common.nameEn",value:n=>(n!=null?n:T).names[1],onChange:(n,e)=>{const o=e!=null?e:T;return o.names[1]=n.toString(),o}},{type:"custom",label:"color",component:t.jsx(S,{type:b.BjsubwayTextLineBadge,defaultTheme:T.color})}],Se=()=>t.jsx(w,{fields:Ce}),Le=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),t.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),t.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),ze={component:Ne,icon:Le,defaultAttrs:T,attrsComponent:Se,metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},ve=n=>{const{id:e,x:o,y:c,attrs:a,handlePointerDown:u,handlePointerMove:r,handlePointerUp:m}=n,{num:l=L.num,branch:s=L.branch,color:d=L.color}=a!=null?a:L,g=i.useCallback(h=>u(e,h),[e,u]),p=i.useCallback(h=>r(e,h),[e,r]),x=i.useCallback(h=>m(e,h),[e,m]);return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${c})`,children:[t.jsx("rect",{fill:d[2],width:"20",height:"20",rx:"2",ry:"2"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:d[3],fontSize:"15",letterSpacing:"-1",children:l}),s&&t.jsxs(t.Fragment,{children:[t.jsx("text",{className:"rmp-name__zh",x:20+2.5,y:"10",fontSize:"10",children:"支线"}),t.jsx("text",{className:"rmp-name__en",x:20+2.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]}),t.jsx("rect",{fill:"white",fillOpacity:"0",width:"20",height:"20",rx:"2",ry:"2",onPointerDown:g,onPointerMove:p,onPointerUp:x,style:{cursor:"move"}})]}),[e,o,c,l,s,...d,g,p,x])},L={num:1,branch:!1,color:[C.Suzhou,"sz1","#78BA25",j.white]},Pe=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:L).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:L;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:n=>{var e;return(e=n==null?void 0:n.branch)!=null?e:L.branch},onChange:(n,e)=>{const o=e!=null?e:L;return o.branch=n,o}},{type:"custom",label:"color",component:t.jsx(S,{type:b.SuzhouRTNumLineBadge,defaultTheme:L.color})}],Te=()=>t.jsx(w,{fields:Pe}),Ae=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),t.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),ke={component:ve,icon:Ae,defaultAttrs:L,attrsComponent:Te,metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},Me=n=>{const{id:e,x:o,y:c,attrs:a,handlePointerDown:u,handlePointerMove:r,handlePointerUp:m}=n,{content:l=f.content,fontSize:s=f.fontSize,lineHeight:d=f.lineHeight,textAnchor:g=f.textAnchor,dominantBaseline:p=f.dominantBaseline,language:x=f.language,color:h=f.color,rotate:y=f.rotate,italic:B=f.italic,bold:N=f.bold}=a!=null?a:f,z=i.useRef(null),[G,F]=i.useState({x:0,y:0,width:32,height:16});i.useEffect(()=>F(z.current.getBBox()),[l,g,p,F,z]);const q=i.useCallback(E=>u(e,E),[e,u]),O=i.useCallback(E=>r(e,E),[e,r]),H=i.useCallback(E=>m(e,E),[e,m]);return i.useMemo(()=>t.jsx("g",{id:e,transform:`translate(${o}, ${c})rotate(${y})`,onPointerDown:q,onPointerMove:O,onPointerUp:H,style:{cursor:"move"},children:t.jsx(Z,{ref:z,text:l.split(`
`),lineHeight:d,grow:"down",className:`rmp-name__${x}`,fontSize:s,textAnchor:g,dominantBaseline:p,fill:h[2],fontStyle:B,fontWeight:N})}),[e,o,c,l,s,d,g,p,x,h,y,B,N,G,q,O,H])},f={content:"Enter your text here",fontSize:16,lineHeight:16,textAnchor:"middle",dominantBaseline:"middle",language:"en",color:[C.Shanghai,"jsr","#000000",j.white],rotate:0,italic:"normal",bold:"normal"},$e=[{type:"textarea",label:"panel.details.nodes.text.content",value:n=>(n!=null?n:f).content,onChange:(n,e)=>{const o=e!=null?e:f;return o.content=n.toString(),o}},{type:"input",label:"panel.details.nodes.text.fontSize",value:n=>(n!=null?n:f).fontSize,validator:n=>Number.isInteger(n)&&Number(n)>0,onChange:(n,e)=>{const o=e!=null?e:f;return o.fontSize=Number(n),o}},{type:"input",label:"panel.details.nodes.text.lineHeight",value:n=>(n!=null?n:f).lineHeight,validator:n=>Number.isInteger(n)&&Number(n)>0,onChange:(n,e)=>{const o=e!=null?e:f;return o.lineHeight=Number(n),o}},{type:"select",label:"panel.details.nodes.text.textAnchor",value:n=>(n!=null?n:f).textAnchor,options:{start:"start",middle:"middle",end:"end"},onChange:(n,e)=>{const o=e!=null?e:f;return o.textAnchor=n,o}},{type:"select",label:"panel.details.nodes.text.dominantBaseline",value:n=>(n!=null?n:f).dominantBaseline,options:{auto:"auto",middle:"middle",hanging:"hanging"},onChange:(n,e)=>{const o=e!=null?e:f;return o.dominantBaseline=n,o}},{type:"select",label:"panel.details.nodes.text.language",value:n=>(n!=null?n:f).language,options:{zh:"Chinese",en:"English",mtr__zh:"MTR Chinese",mtr__en:"MTR English"},onChange:(n,e)=>{const o=e!=null?e:f;return o.language=n.toString(),o}},{type:"select",label:"panel.details.nodes.text.rotate",value:n=>{var e;return(e=n==null?void 0:n.rotate)!=null?e:f.rotate},options:{0:"0",45:"45",90:"90",135:"135",180:"180",225:"225",270:"270",315:"315"},onChange:(n,e)=>{const o=e!=null?e:f;return o.rotate=Number(n),o}},{type:"switch",label:"panel.details.nodes.text.italic",isChecked:n=>{var e;return((e=n==null?void 0:n.italic)!=null?e:f.italic)==="italic"},onChange:(n,e)=>{const o=e!=null?e:f;return o.italic=n?"italic":"normal",o}},{type:"switch",label:"panel.details.nodes.text.bold",isChecked:n=>{var e;return((e=n==null?void 0:n.bold)!=null?e:f.bold)==="bold"},onChange:(n,e)=>{const o=e!=null?e:f;return o.bold=n?"bold":"normal",o}},{type:"custom",label:"color",component:t.jsx(S,{type:b.Text,defaultTheme:f.color})}],Re=()=>t.jsx(w,{fields:$e}),Ue=t.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:t.jsx("text",{x:"12",y:"12",textAnchor:"middle",dominantBaseline:"middle",fontSize:"10",children:"Text"})}),De={component:Me,icon:Ue,defaultAttrs:f,attrsComponent:Re,metadata:{displayName:"panel.details.nodes.text.displayName",tags:[]}},Ee=n=>{const{id:e,x:o,y:c,attrs:a,handlePointerDown:u,handlePointerMove:r,handlePointerUp:m}=n,{num:l=$.num,color:s=$.color}=a!=null?a:$,d=i.useCallback(h=>u(e,h),[e,u]),g=i.useCallback(h=>r(e,h),[e,r]),p=i.useCallback(h=>m(e,h),[e,m]),x=s[3];return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${c})`,children:[t.jsx("rect",{fill:s[2],x:"0",width:"25",height:"15"}),t.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:x,fontSize:"14",letterSpacing:"1",children:["U",l]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"25",height:"15",onPointerDown:d,onPointerMove:g,onPointerUp:p,style:{cursor:"move"}})]}),[e,o,c,l,...s,d,g,p])},$={num:1,color:[C.Berlin,"bu1","#62AD2D",j.white]},Ie=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:$).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:$;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"custom",label:"color",component:t.jsx(S,{type:b.BerlinUBahnLineBadge,defaultTheme:$.color})}],Fe=()=>t.jsx(w,{fields:Ie}),qe=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),t.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),Oe={component:Ee,icon:qe,defaultAttrs:$,attrsComponent:Fe,metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},He=n=>{const{id:e,x:o,y:c,attrs:a,handlePointerDown:u,handlePointerMove:r,handlePointerUp:m}=n,{num:l=R.num,color:s=R.color}=a!=null?a:R,[d,g]=l>=10?[6,19.75]:[10,20],p=i.useCallback(B=>u(e,B),[e,u]),x=i.useCallback(B=>r(e,B),[e,r]),h=i.useCallback(B=>m(e,B),[e,m]),y=s[3];return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${c})`,children:[t.jsx("rect",{fill:s[2],x:"0",width:"30",height:"15",rx:"8"}),t.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:d,y:"12.5",fill:y,fontSize:"14",letterSpacing:"0",children:"S"}),t.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:g,y:"12.5",fill:y,fontSize:"14",letterSpacing:"-0.2",children:l}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"30",height:"15",onPointerDown:p,onPointerMove:x,onPointerUp:h,style:{cursor:"move"}})]}),[e,o,c,l,...s,p,x,h])},R={num:1,color:[C.Berlin,"bs1","#DD6CA6",j.white]},Ze=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:R).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:R;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"custom",label:"color",component:t.jsx(S,{type:b.BerlinSBahnLineBadge,defaultTheme:R.color})}],Ge=()=>t.jsx(w,{fields:Ze}),Xe=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),t.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),We={component:He,icon:Xe,defaultAttrs:R,attrsComponent:Ge,metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}},Ve=n=>{const{id:e,x:o,y:c,attrs:a,handlePointerDown:u,handlePointerMove:r,handlePointerUp:m}=n,{num:l=U.num,color:s=U.color}=a!=null?a:U,d=i.useCallback(N=>u(e,N),[e,u]),g=i.useCallback(N=>r(e,N),[e,r]),p=i.useCallback(N=>m(e,N),[e,m]),x=s[3],h=Number.isInteger(l)?16:15,[y,B]=Number.isInteger(l)?Number(l)>=10?[-1.2,1.5]:[0,5.5]:[0,2.55];return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${c})`,children:[t.jsx("rect",{fill:s[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:B,y:"10",fill:x,fontSize:h,letterSpacing:y,dominantBaseline:"central",children:l}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"20",height:"20",rx:"10",ry:"10",onPointerDown:d,onPointerMove:g,onPointerUp:p,style:{cursor:"move"}})]}),[e,o,c,l,...s,d,g,p])},U={num:1,color:[C.Chongqing,"cq1","#e4002b",j.white]},Ke=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:U).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:U;return Number.isNaN(Number(n))?o.num=n:o.num=Number(n),o}},{type:"custom",label:"color",component:t.jsx(S,{type:b.ChongqingRTNumLineBadge,defaultTheme:U.color})}],Je=()=>t.jsx(w,{fields:Ke}),Qe=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),t.jsx("text",{x:"8",y:"18",fill:"white",fontSize:"18",children:"1"})]}),Ye={component:Ve,icon:Qe,defaultAttrs:U,attrsComponent:Je,metadata:{displayName:"panel.details.nodes.chongqingRTNumLineBadge.displayName",tags:[]}},_e=n=>{const{id:e,x:o,y:c,attrs:a,handlePointerDown:u,handlePointerMove:r,handlePointerUp:m}=n,{names:l=A.names,color:s=A.color}=a!=null?a:A,d=i.useRef(null),g=i.useCallback(y=>u(e,y),[e,u]),p=i.useCallback(y=>r(e,y),[e,r]),x=i.useCallback(y=>m(e,y),[e,m]),h=s[3];return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${c})`,children:[t.jsx("rect",{fill:s[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:"10",y:"10.5",fill:h,fontSize:"6",letterSpacing:"0",children:l[0]}),t.jsx(Z,{ref:d,text:l[1].split(`
`),className:"rmp-name__en",textAnchor:"middle",x:"10",y:"9.25",fill:h,fontSize:"2.5",letterSpacing:"0",lineHeight:2.25,grow:"down"}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"20",height:"20",rx:"10",ry:"10",onPointerDown:g,onPointerMove:p,onPointerUp:x,style:{cursor:"move"}})]}),[e,o,c,...l,...s,g,p,x])},A={names:["空港线","Konggang Line"],color:[C.Chongqing,"cq3","#003da5",j.white]},en=[{type:"input",label:"panel.details.nodes.common.nameZh",value:n=>(n!=null?n:A).names[0],onChange:(n,e)=>{const o=e!=null?e:A;return o.names[0]=n.toString(),o}},{type:"textarea",label:"panel.details.nodes.common.nameEn",value:n=>(n!=null?n:A).names[1],onChange:(n,e)=>{const o=e!=null?e:A;return o.names[1]=n.toString(),o}},{type:"custom",label:"color",component:t.jsx(S,{type:b.ChongqingRTTextLineBadge,defaultTheme:A.color})}],nn=()=>t.jsx(w,{fields:en}),tn=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),t.jsx("text",{x:"4.5",y:"12.5",fill:"white",fontSize:"5",children:"空港线"}),t.jsx("text",{x:"4.5",y:"15",fill:"white",fontSize:"2",children:"Konggang Line"})]}),on={component:_e,icon:tn,defaultAttrs:A,attrsComponent:nn,metadata:{displayName:"panel.details.nodes.chongqingRTTextLineBadge.displayName",tags:[]}},rn={[b.Virtual]:Q,[b.ShmetroNumLineBadge]:te,[b.ShmetroTextLineBadge]:se,[b.GzmtrLineBadge]:pe,[b.BjsubwayNumLineBadge]:je,[b.BjsubwayTextLineBadge]:ze,[b.SuzhouRTNumLineBadge]:ke,[b.BerlinSBahnLineBadge]:We,[b.BerlinUBahnLineBadge]:Oe,[b.ChongqingRTNumLineBadge]:Ye,[b.ChongqingRTTextLineBadge]:on,[b.Facilities]:X,[b.Text]:De};export{rn as m};
