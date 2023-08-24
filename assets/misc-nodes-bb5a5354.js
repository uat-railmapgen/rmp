import{C as L,v as w,ak as z,G as B}from"./index-73eb1caf.js";import{j as t}from"./chakra-6dc5c7a5.js";import{b as i}from"./react-2c0b8364.js";import{M as Z}from"./stations-5602e5ad.js";const G=n=>{const{id:e,x:o,y:r,handlePointerDown:l,handlePointerMove:u,handlePointerUp:d}=n,m=i.useCallback(c=>l(e,c),[e,l]),a=i.useCallback(c=>u(e,c),[e,u]),s=i.useCallback(c=>d(e,c),[e,d]);return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${r})rotate(45)`,children:[t.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),t.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),t.jsx("circle",{id:`virtual_circle_${e}`,r:5,stroke:"black",fill:"white",fillOpacity:"0",onPointerDown:m,onPointerMove:a,onPointerUp:s,style:{cursor:"move"}})]}),[e,o,r,m,a,s])},W={},X=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[t.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),t.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),t.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),V={component:G,icon:X,defaultAttrs:W,fields:[],metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},q=n=>{const{id:e,x:o,y:r,attrs:l,handlePointerDown:u,handlePointerMove:d,handlePointerUp:m}=n,{num:a=P.num,color:s=P.color}=l!=null?l:P,[c,g]=a>=10?[22.67,10.75]:[21,10],f=i.useCallback(y=>u(e,y),[e,u]),x=i.useCallback(y=>d(e,y),[e,d]),h=i.useCallback(y=>m(e,y),[e,m]);return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${r})`,children:[t.jsx("rect",{fill:s[2],width:c,height:"22.67"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:g,y:"19",fill:s[3],fontSize:"21.33",letterSpacing:"-1.75",children:a}),t.jsx("text",{className:"rmp-name__zh",x:c+2,y:"12",fontSize:"14.67",children:"号线"}),t.jsxs("text",{className:"rmp-name__en",x:c+4,y:"21.5",fontSize:"8",children:["Line ",a]}),t.jsx("rect",{fill:"white",fillOpacity:"0",width:c,height:"22.67",onPointerDown:f,onPointerMove:x,onPointerUp:h,style:{cursor:"move"}})]}),[e,o,r,a,...s,f,x,h])},P={num:1,color:[L.Shanghai,"sh1","#E4002B",w.white]},J=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:P).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:P;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"custom",component:t.jsx(z,{type:B.ShmetroNumLineBadge,defaultAttrs:P})}],K=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),t.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),t.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),t.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),Q={component:q,icon:K,defaultAttrs:P,fields:J,metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},Y=n=>{const{id:e,x:o,y:r,attrs:l,handlePointerDown:u,handlePointerMove:d,handlePointerUp:m}=n,{names:a=S.names,color:s=S.color}=l!=null?l:S,c=i.useRef(null),[g,f]=i.useState({width:12});i.useEffect(()=>f(c.current.getBBox()),[...a,f,c]);const x=i.useCallback(b=>u(e,b),[e,u]),h=i.useCallback(b=>d(e,b),[e,d]),y=i.useCallback(b=>m(e,b),[e,m]);return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${r})`,children:[t.jsx("rect",{fill:s[2],x:"0",width:g.width+7,height:"21"}),t.jsxs("g",{ref:c,children:[t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(g.width+7)/2,y:"4",fontSize:"10",fill:s[3],letterSpacing:"-0.25",children:a[0]}),t.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(g.width+7)/2,y:"13",fontSize:"5",fill:s[3],letterSpacing:"-0.25",children:a[1]})]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:g.width+7,height:"21",onPointerDown:x,onPointerMove:h,onPointerUp:y,style:{cursor:"move"}})]}),[e,o,r,...a,g,...s,x,h,y])},S={names:["浦江线","Pujiang Line"],color:[L.Shanghai,"pjl","#B5B5B6",w.white]},_=[{type:"input",label:"panel.details.nodes.common.nameZh",value:n=>(n!=null?n:S).names[0],onChange:(n,e)=>{const o=e!=null?e:S;return o.names[0]=n.toString(),o}},{type:"input",label:"panel.details.nodes.common.nameEn",value:n=>(n!=null?n:S).names[1],onChange:(n,e)=>{const o=e!=null?e:S;return o.names[1]=n.toString(),o}},{type:"custom",component:t.jsx(z,{type:B.ShmetroTextLineBadge,defaultAttrs:S})}],ee=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),t.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),t.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),ne={component:Y,icon:ee,defaultAttrs:S,fields:_,metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},te=n=>{const{lineName:e,commonPart:o}=n,r=i.useRef(null),[l,u]=i.useState({x:0,height:0,width:0});i.useEffect(()=>{r.current&&u(r.current.getBBox())},[e.toString()]);const d=T/Math.max(T,l.width),m=(-l.x-l.width/2)*d,a=l.height*(1-d)*1.2/2;return t.jsx("g",{ref:r,transform:`translate(${m},${a})scale(${d})`,children:t.jsxs("text",{className:"rmp-name__zh",fontSize:14,y:12,textAnchor:"end",dominantBaseline:"central",children:[o,t.jsx("tspan",{className:"rmp-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",dominantBaseline:"central",children:e[0].slice(o.length).trim()}),t.jsx("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",dominantBaseline:"central",children:e[1].slice(o.length).trim()})]})})},oe=n=>t.jsx("rect",{x:-22.5,height:24,width:45,rx:4.5,...n}),T=42,ie=n=>{const{lineName:e,foregroundColour:o,backgroundColour:r,passed:l}=n,[u,d]=le(e),m=i.useRef(null),a=i.useRef(null),[s,c]=i.useState({width:0}),[g,f]=i.useState({width:0});i.useEffect(()=>{m.current&&c(m.current.getBBox()),a.current&&f(a.current.getBBox())},[e.toString()]);const x=T/Math.max(T,s.width),h=T/Math.max(T,g.width),y={nameZh:{y:7.3+13.5*(1-x)*x/2},nameEn:{y:19.5-9*(1-h)*h/2}};return t.jsxs("g",{textAnchor:"middle",fill:l?w.white:o,children:[t.jsx(oe,{fill:l?"#aaa":r}),u===2?t.jsx(te,{lineName:e,commonPart:d}):t.jsxs(t.Fragment,{children:[t.jsx("text",{ref:m,className:"rmp-name__zh",fontSize:12,transform:`translate(0,${y.nameZh.y})scale(${x})`,dominantBaseline:"central",children:u===1?t.jsxs(t.Fragment,{children:[t.jsx("tspan",{fontSize:16,dy:.7,className:"rmp-name__zh",dominantBaseline:"central",children:d}),t.jsx("tspan",{dy:-.7,className:"rmp-name__zh",dominantBaseline:"central",children:e[0].slice(d.length)})]}):e[0]}),t.jsx("text",{ref:a,className:"rmp-name__en",fontSize:8,transform:`translate(0,${y.nameEn.y})scale(${h})`,dominantBaseline:"middle",children:e[1]})]})]})},le=n=>{const e=n[0].match(/^(\d+)\D+$/);if(e)return[1,e[1]];const o=n.map(r=>r.match(/^(\w+).+$/));return o[0]&&o[1]&&o[0][1]===o[1][1]?[2,o[0][1]]:[3,""]},ae=n=>{const{id:e,x:o,y:r,attrs:l,handlePointerDown:u,handlePointerMove:d,handlePointerUp:m}=n,{names:a=v.names,color:s=v.color}=l!=null?l:v,c=i.useCallback(x=>u(e,x),[e,u]),g=i.useCallback(x=>d(e,x),[e,d]),f=i.useCallback(x=>m(e,x),[e,m]);return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${r})`,children:[t.jsx(ie,{lineName:a,foregroundColour:s[3],backgroundColour:s[2]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"-22.5",width:"45",height:"24",rx:"4.5",onPointerDown:c,onPointerMove:g,onPointerUp:f,style:{cursor:"move"}})]}),[e,o,r,...a,...s,c,g,f])},v={names:["1号线","Line 1"],color:[L.Guangzhou,"gz1","#F3D03E",w.black]},se=[{type:"input",label:"panel.details.nodes.common.nameZh",value:n=>(n!=null?n:v).names[0],onChange:(n,e)=>{const o=e!=null?e:v;return o.names[0]=n.toString(),o}},{type:"input",label:"panel.details.nodes.common.nameEn",value:n=>(n!=null?n:v).names[1],onChange:(n,e)=>{const o=e!=null?e:v;return o.names[1]=n.toString(),o}},{type:"custom",component:t.jsx(z,{type:B.GzmtrLineBadge,defaultAttrs:v})}],ce=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),t.jsx("text",{x:"12",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"1号线"}),t.jsx("text",{x:"12",y:"17",textAnchor:"middle",fontSize:"5",fill:"white",children:"Line 1"})]}),re={component:ae,icon:ce,defaultAttrs:v,fields:se,metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},E=11.84375,de=n=>{const{id:e,x:o,y:r,attrs:l,handlePointerDown:u,handlePointerMove:d,handlePointerUp:m}=n,{num:a=A.num,color:s=A.color}=l!=null?l:A,c=i.useCallback(h=>u(e,h),[e,u]),g=i.useCallback(h=>d(e,h),[e,d]),f=i.useCallback(h=>m(e,h),[e,m]),x=s[3]===w.black?"#003670":w.white;return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${r})`,children:[t.jsx("rect",{fill:s[2],x:"0",width:E+21,height:"16",rx:"2"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:E/2+2,y:"13.5",fill:x,fontSize:"15",letterSpacing:"-1.5",children:a}),t.jsx("text",{className:"rmp-name__zh",x:E+(a>9?5.5:3),y:"8.5",fontSize:"7",fill:x,children:"号线"}),t.jsxs("text",{className:"rmp-name__en",x:E+(a>9?6:4.5),y:"13.5",fontSize:"4",fill:x,children:["Line ",a]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:E+23,height:"16",rx:"2",onPointerDown:c,onPointerMove:g,onPointerUp:f,style:{cursor:"move"}})]}),[e,o,r,a,...s,c,g,f])},A={num:1,color:[L.Beijing,"bj1","#c23a30",w.white]},he=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:A).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:A;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"custom",component:t.jsx(z,{type:B.BjsubwayNumLineBadge,defaultAttrs:A})}],me=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),t.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),t.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),t.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),ue={component:de,icon:me,defaultAttrs:A,fields:he,metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},xe=28.84375,ge=n=>{const{id:e,x:o,y:r,attrs:l,handlePointerDown:u,handlePointerMove:d,handlePointerUp:m}=n,{names:a=C.names,color:s=C.color}=l!=null?l:C,c=i.useRef(null),[g,f]=i.useState({width:12});i.useEffect(()=>f(c.current.getBBox()),[...a,f,c]);const x=i.useCallback(N=>u(e,N),[e,u]),h=i.useCallback(N=>d(e,N),[e,d]),y=i.useCallback(N=>m(e,N),[e,m]),b=Math.max(xe,g.width),$=s[3]===w.black?"#003670":w.white;return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${r})`,children:[t.jsx("rect",{fill:s[2],x:"0",width:b+4,height:"16",rx:"2"}),t.jsxs("g",{ref:c,children:[t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(b+4)/2,y:"8",fontSize:"7",fill:$,children:a[0]}),t.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(b+4)/2,y:"13.5",fontSize:"4",fill:$,children:a[1]})]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:b+3,height:"16",rx:"2",onPointerDown:x,onPointerMove:h,onPointerUp:y,style:{cursor:"move"}})]}),[e,o,r,...a,g,...s,x,h,y])},C={names:["八通线","Batong Line"],color:[L.Beijing,"bj1","#c23a30",w.white]},fe=[{type:"input",label:"panel.details.nodes.common.nameZh",value:n=>(n!=null?n:C).names[0],onChange:(n,e)=>{const o=e!=null?e:C;return o.names[0]=n.toString(),o}},{type:"input",label:"panel.details.nodes.common.nameEn",value:n=>(n!=null?n:C).names[1],onChange:(n,e)=>{const o=e!=null?e:C;return o.names[1]=n.toString(),o}},{type:"custom",component:t.jsx(z,{type:B.BjsubwayTextLineBadge,defaultAttrs:C})}],pe=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),t.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),t.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),ye={component:ge,icon:pe,defaultAttrs:C,fields:fe,metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},Be=n=>{const{id:e,x:o,y:r,attrs:l,handlePointerDown:u,handlePointerMove:d,handlePointerUp:m}=n,{num:a=j.num,branch:s=j.branch,color:c=j.color}=l!=null?l:j,g=i.useCallback(h=>u(e,h),[e,u]),f=i.useCallback(h=>d(e,h),[e,d]),x=i.useCallback(h=>m(e,h),[e,m]);return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${r})`,children:[t.jsx("rect",{fill:c[2],width:"20",height:"20",rx:"2",ry:"2"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:c[3],fontSize:"15",letterSpacing:"-1",children:a}),s&&t.jsxs(t.Fragment,{children:[t.jsx("text",{className:"rmp-name__zh",x:20+2.5,y:"10",fontSize:"10",children:"支线"}),t.jsx("text",{className:"rmp-name__en",x:20+2.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]}),t.jsx("rect",{fill:"white",fillOpacity:"0",width:"20",height:"20",rx:"2",ry:"2",onPointerDown:g,onPointerMove:f,onPointerUp:x,style:{cursor:"move"}})]}),[e,o,r,a,s,...c,g,f,x])},j={num:1,branch:!1,color:[L.Suzhou,"sz1","#78BA25",w.white]},be=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:j).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:j;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:n=>{var e;return(e=n==null?void 0:n.branch)!=null?e:j.branch},onChange:(n,e)=>{const o=e!=null?e:j;return o.branch=n,o}},{type:"custom",component:t.jsx(z,{type:B.SuzhouRTNumLineBadge,defaultAttrs:j})}],we=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),t.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),je={component:Be,icon:we,defaultAttrs:j,fields:be,metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},Ne=n=>{const{id:e,x:o,y:r,attrs:l,handlePointerDown:u,handlePointerMove:d,handlePointerUp:m}=n,{type:a=R.type}=l!=null?l:R,s=i.useRef(null),[c,g]=i.useState({width:25,height:25});i.useEffect(()=>g(s.current.getBBox()),[a,g,s]);const f=i.useCallback(y=>u(e,y),[e,u]),x=i.useCallback(y=>d(e,y),[e,d]),h=i.useCallback(y=>m(e,y),[e,m]);return i.useMemo(()=>t.jsx("g",{id:e,transform:`translate(${o-c.width/2}, ${r-c.height/2})`,children:t.jsx("image",{ref:s,href:`/rmp//images/facilities/${a}.svg`,onLoad:()=>g(s.current.getBBox()),onPointerDown:f,onPointerMove:x,onPointerUp:h,style:{cursor:"move"}})}),[e,o,r,a,c,f,x,h])},R={type:"airport"},Se=[{type:"select",label:"panel.details.nodes.facilities.type",value:n=>(n!=null?n:R).type,options:{airport:"Airport",maglev:"Maglev",disney:"Disney",railway:"Railway",hsr:"HSR",airport_hk:"Airport Hongkong",disney_hk:"Disney Hongkong",ngong_ping_360:"Ngong Ping 360",tiananmen:"Tiananmen",airport_bj:"Airport Beijing"},onChange:(n,e)=>{const o=e!=null?e:R;return o.type=n,o}}],ve=t.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:t.jsxs("g",{transform:"translate(12, 0)scale(0.4)",children:[t.jsx("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"currentColor"}),t.jsx("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]})}),Ce={component:Ne,icon:ve,defaultAttrs:R,fields:Se,metadata:{displayName:"panel.details.nodes.facilities.displayName",tags:[]}},Le=n=>{const{id:e,x:o,y:r,attrs:l,handlePointerDown:u,handlePointerMove:d,handlePointerUp:m}=n,{content:a=p.content,fontSize:s=p.fontSize,lineHeight:c=p.lineHeight,textAnchor:g=p.textAnchor,dominantBaseline:f=p.dominantBaseline,language:x=p.language,color:h=p.color,rotate:y=p.rotate,italic:b=p.italic,bold:$=p.bold}=l!=null?l:p,N=i.useRef(null),[U,F]=i.useState({x:0,y:0,width:32,height:16});i.useEffect(()=>F(N.current.getBBox()),[a,g,f,F,N]);const I=i.useCallback(D=>u(e,D),[e,u]),H=i.useCallback(D=>d(e,D),[e,d]),O=i.useCallback(D=>m(e,D),[e,m]);return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${r})rotate(${y})`,children:[t.jsx(Z,{ref:N,text:a.split(`
`),lineHeight:c,grow:"down",className:`rmp-name__${x}`,fontSize:s,textAnchor:g,dominantBaseline:f,fill:h[2],fontStyle:b,fontWeight:$}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:U.x-1.5,y:U.y-1.5,width:U.width+3,height:U.height+3,onPointerDown:I,onPointerMove:H,onPointerUp:O,style:{cursor:"move"}})]}),[e,o,r,a,s,c,g,f,x,h,y,b,$,U,I,H,O])},p={content:"Enter your text here",fontSize:16,lineHeight:16,textAnchor:"middle",dominantBaseline:"middle",language:"en",color:[L.Shanghai,"jsr","#000000",w.white],rotate:0,italic:"normal",bold:"normal"},ze=[{type:"textarea",label:"panel.details.nodes.text.content",value:n=>(n!=null?n:p).content,onChange:(n,e)=>{const o=e!=null?e:p;return o.content=n.toString(),o}},{type:"input",label:"panel.details.nodes.text.fontSize",value:n=>(n!=null?n:p).fontSize,validator:n=>Number.isInteger(n)&&Number(n)>0,onChange:(n,e)=>{const o=e!=null?e:p;return o.fontSize=Number(n),o}},{type:"input",label:"panel.details.nodes.text.lineHeight",value:n=>(n!=null?n:p).lineHeight,validator:n=>Number.isInteger(n)&&Number(n)>0,onChange:(n,e)=>{const o=e!=null?e:p;return o.lineHeight=Number(n),o}},{type:"select",label:"panel.details.nodes.text.textAnchor",value:n=>(n!=null?n:p).textAnchor,options:{start:"start",middle:"middle",end:"end"},onChange:(n,e)=>{const o=e!=null?e:p;return o.textAnchor=n,o}},{type:"select",label:"panel.details.nodes.text.dominantBaseline",value:n=>(n!=null?n:p).dominantBaseline,options:{auto:"auto",middle:"middle",hanging:"hanging"},onChange:(n,e)=>{const o=e!=null?e:p;return o.dominantBaseline=n,o}},{type:"select",label:"panel.details.nodes.text.language",value:n=>(n!=null?n:p).language,options:{zh:"Chinese",en:"English",mtr__zh:"MTR Chinese",mtr__en:"MTR English"},onChange:(n,e)=>{const o=e!=null?e:p;return o.language=n.toString(),o}},{type:"select",label:"panel.details.nodes.text.rotate",value:n=>{var e;return(e=n==null?void 0:n.rotate)!=null?e:p.rotate},options:{0:"0",45:"45",90:"90",135:"135",180:"180",225:"225",270:"270",315:"315"},onChange:(n,e)=>{const o=e!=null?e:p;return o.rotate=Number(n),o}},{type:"switch",label:"panel.details.nodes.text.italic",isChecked:n=>{var e;return((e=n==null?void 0:n.italic)!=null?e:p.italic)==="italic"},onChange:(n,e)=>{const o=e!=null?e:p;return o.italic=n?"italic":"normal",o}},{type:"switch",label:"panel.details.nodes.text.bold",isChecked:n=>{var e;return((e=n==null?void 0:n.bold)!=null?e:p.bold)==="bold"},onChange:(n,e)=>{const o=e!=null?e:p;return o.bold=n?"bold":"normal",o}},{type:"custom",component:t.jsx(z,{type:B.Text,defaultAttrs:p})}],Pe=t.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:t.jsx("text",{x:"12",y:"12",textAnchor:"middle",dominantBaseline:"middle",fontSize:"10",children:"Text"})}),Ae={component:Le,icon:Pe,defaultAttrs:p,fields:ze,metadata:{displayName:"panel.details.nodes.text.displayName",tags:[]}},ke=n=>{const{id:e,x:o,y:r,attrs:l,handlePointerDown:u,handlePointerMove:d,handlePointerUp:m}=n,{num:a=k.num,color:s=k.color}=l!=null?l:k,c=i.useCallback(h=>u(e,h),[e,u]),g=i.useCallback(h=>d(e,h),[e,d]),f=i.useCallback(h=>m(e,h),[e,m]),x=s[3];return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${r})`,children:[t.jsx("rect",{fill:s[2],x:"0",width:"25",height:"15"}),t.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:x,fontSize:"14",letterSpacing:"1",children:["U",a]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"25",height:"15",onPointerDown:c,onPointerMove:g,onPointerUp:f,style:{cursor:"move"}})]}),[e,o,r,a,...s,c,g,f])},k={num:1,color:[L.Berlin,"bu1","#62AD2D",w.white]},Me=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:k).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:k;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"custom",component:t.jsx(z,{type:B.BerlinUBahnLineBadge,defaultAttrs:k})}],Te=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),t.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),$e={component:ke,icon:Te,defaultAttrs:k,fields:Me,metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},Ue=n=>{const{id:e,x:o,y:r,attrs:l,handlePointerDown:u,handlePointerMove:d,handlePointerUp:m}=n,{num:a=M.num,color:s=M.color}=l!=null?l:M,[c,g]=a>=10?[6,19.75]:[10,20],f=i.useCallback(b=>u(e,b),[e,u]),x=i.useCallback(b=>d(e,b),[e,d]),h=i.useCallback(b=>m(e,b),[e,m]),y=s[3];return i.useMemo(()=>t.jsxs("g",{id:e,transform:`translate(${o}, ${r})`,children:[t.jsx("rect",{fill:s[2],x:"0",width:"30",height:"15",rx:"8"}),t.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:c,y:"12.5",fill:y,fontSize:"14",letterSpacing:"0",children:"S"}),t.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:g,y:"12.5",fill:y,fontSize:"14",letterSpacing:"-0.2",children:a}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"30",height:"15",onPointerDown:f,onPointerMove:x,onPointerUp:h,style:{cursor:"move"}})]}),[e,o,r,a,...s,f,x,h])},M={num:1,color:[L.Berlin,"bs1","#DD6CA6",w.white]},De=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:M).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:M;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"custom",component:t.jsx(z,{type:B.BerlinSBahnLineBadge,defaultAttrs:M})}],Ee=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),t.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),Re={component:Ue,icon:Ee,defaultAttrs:M,fields:De,metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}},Ze={[B.Virtual]:V,[B.ShmetroNumLineBadge]:Q,[B.ShmetroTextLineBadge]:ne,[B.GzmtrLineBadge]:re,[B.BjsubwayNumLineBadge]:ue,[B.BjsubwayTextLineBadge]:ye,[B.SuzhouRTNumLineBadge]:je,[B.BerlinSBahnLineBadge]:Re,[B.BerlinUBahnLineBadge]:$e,[B.Facilities]:Ce,[B.Text]:Ae};export{Ze as m};
