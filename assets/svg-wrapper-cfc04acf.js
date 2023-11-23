import{j as E}from"./chakra-594c63ee.js";import{t as W,N as ie,q as R,j as he,d as Y,af as K,ag as J,D as U,ah as X,y as me,z as ce,S as we,e as ke,p as ae,v as G,r as de,E as le,A as ue,Q as Ee,K as ne,ai as re,J as Ne,a4 as Ce,a6 as Le}from"./index-707af454.js";import{r as ye,b as A}from"./react-2c0b8364.js";import{u as M,e as Pe,i as Ie}from"./clipboard-007c443d.js";import{b as B,r as $,F as Z,p as D,a as O}from"./helpers-3e28aebd.js";import{f as _e,a as je,b as Me}from"./graph-ea6bdc37.js";import{m as ve}from"./misc-nodes-19b8113c.js";import{s as Ae}from"./stations-a4a6bed3.js";const We=()=>{const[t,e]=ye.useState({width:void 0,height:void 0});return ye.useEffect(()=>{function n(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),t},fe=t=>t.filterNodes((e,n)=>e.startsWith("stn")).map(e=>[e,t.getNodeAttributes(e)]).filter(([e,n])=>n.visible).sort((e,n)=>e[1].zIndex-n[1].zIndex).map(([e,n])=>({node:e,visible:n.visible,zIndex:n.zIndex,x:n.x,y:n.y,type:n.type,[n.type]:n[n.type]})),ge=t=>t.filterDirectedEdges((e,n,c,r,g,h,y)=>e.startsWith("line")&&n.visible&&n.reconcileId==="").sort((e,n)=>t.getEdgeAttribute(e,"zIndex")-t.getEdgeAttribute(n,"zIndex")).map(e=>{const n=t.getEdgeAttribute(e,"type"),c=t.getEdgeAttribute(e,n),r=t.getEdgeAttribute(e,"style"),g=t.getEdgeAttribute(e,r),[h,y]=t.extremities(e),l=t.getNodeAttributes(h),p=t.getNodeAttributes(y);return{edge:e,x1:l.x,y1:l.y,x2:p.x,y2:p.y,type:n,attr:c,style:r,styleAttr:g}}),xe=t=>t.filterNodes((e,n)=>e.startsWith("misc_node")).map(e=>[e,t.getNodeAttributes(e)]).filter(([e,n])=>n.visible).sort((e,n)=>e[1].zIndex-n[1].zIndex).map(([e,n])=>({node:e,visible:n.visible,zIndex:n.zIndex,x:n.x,y:n.y,type:n.type,[n.type]:n[n.type]})),ze=t=>{const e=t.filterDirectedEdges((c,r,g,h,y,l,p)=>c.startsWith("line")&&r.reconcileId!==""),n={};for(const c of e){const r=t.getEdgeAttribute(c,"reconcileId");r in n?n[r].push(c):n[r]=[c]}return n},De=t=>{const e=ze(t),n=[],c=[];return Object.values(e).forEach(r=>{var L;if(r.length===1){c.push(...r);return}const g=t.getEdgeAttribute(r.at(0),"type");if(!r.every(f=>t.getEdgeAttribute(f,"type")===g)){c.push(...r);return}const h=t.getEdgeAttribute(r.at(0),"style");if(!r.every(f=>t.getEdgeAttribute(f,"style")===h)){c.push(...r);return}const y={},l=new Set,p=new Set,b=Object.fromEntries(r.map(f=>{var V,T;const[P,j]=t.extremities(f);return y[P]=((V=y[P])!=null?V:0)+1,y[j]=((T=y[j])!=null?T:0)+1,l.add(P),p.add(j),[P,[f,j]]})),w=Array.from(l).filter(f=>y[f]===1),I=Array.from(p).filter(f=>y[f]===1);if(w.length!==1||I.length!==1){c.push(...r);return}const N=w[0],_=I[0];if(N===_){c.push(...r);return}const C=[b[N][0]];let m=b[N][1];for(let f=1;f<r.length;f=f+1){const P=(L=b[m])==null?void 0:L.at(1);if(!P){c.push(...r);return}C.push(b[m][0]),m=P}if(m!==_||C.length!==r.length){c.push(...r);return}n.push(C)}),{allReconciledLines:n,danglingLines:c}},Ke=(t,e)=>{if(!e.every(r=>t.hasEdge(r)))return;const n=e.map(r=>{var w,I,N;const[g,h]=t.extremities(r),y=t.getNodeAttributes(g),l=t.getNodeAttributes(h),p=t.getEdgeAttribute(r,"type"),b=(w=t.getEdgeAttribute(r,p))!=null?w:W[p].defaultAttrs;return(N=(I=W[p])==null?void 0:I.generatePath(y.x,l.x,y.y,l.y,b))!=null?N:`M ${y.x},${y.y} L ${l.x},${l.y}`});let c=`${n[0]} `;for(let r=1;r<e.length;r=r+1)c+=n[r].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return c},pe=t=>{const{id:e,x:n,y:c,handlePointerDown:r,handlePointerMove:g,handlePointerUp:h}=t,y=A.useCallback(b=>r(e,b),[e,r]),l=A.useCallback(b=>g(e,b),[e,g]),p=A.useCallback(b=>h(e,b),[e,h]);return E.jsx("g",{id:e,transform:`translate(${n-6.4},${c-6.4})scale(0.025)`,onPointerDown:y,onPointerMove:l,onPointerUp:p,style:{cursor:"move"},children:E.jsx("path",{id:`stn_core_${e}`,fillRule:"evenodd",clipRule:"evenodd",d:"M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.91 302.69v-2.07c.16-13.72 1.51-24.59 4.15-32.67 2.59-8.08 6.32-14.65 11.18-19.63 4.87-5.02 10.72-9.58 17.56-13.72 4.4-2.8 8.39-5.9 11.91-9.37 3.52-3.42 6.32-7.41 8.38-11.91 2.07-4.46 3.11-9.42 3.11-14.91 0-6.53-1.55-12.18-4.66-16.99-3.05-4.77-7.19-8.44-12.27-11.08-5.13-2.59-10.82-3.89-17.09-3.89-5.65 0-11.03 1.15-16.21 3.53-5.12 2.33-9.42 6-12.79 10.97-3.36 4.98-5.33 11.35-5.85 19.11h-33.56c.53-13.21 3.89-24.39 10.05-33.55 6.21-9.16 14.4-16.11 24.55-20.82 10.2-4.71 21.49-7.04 33.81-7.04 13.57 0 25.38 2.48 35.52 7.56 10.15 5.02 18.08 12.06 23.72 21.08 5.59 9 8.44 19.47 8.44 31.48 0 8.23-1.29 15.64-3.88 22.21-2.59 6.58-6.22 12.48-10.98 17.61-4.77 5.18-10.41 9.73-17.03 13.67-6.27 3.94-11.35 7.97-15.18 12.17-3.88 4.19-6.68 9.17-8.44 14.86-1.76 5.74-2.75 12.84-2.9 21.33v2.07h-31.54zm16.68 70.67c-6.06 0-11.24-2.18-15.59-6.48-4.34-4.29-6.47-9.53-6.47-15.63 0-6.01 2.12-11.19 6.47-15.49 4.35-4.3 9.53-6.47 15.59-6.47 5.95 0 11.12 2.19 15.48 6.47 4.39 4.31 6.58 9.48 6.58 15.49 0 4.04-1.05 7.76-3.06 11.08-2.02 3.35-4.66 6.07-7.97 8.03-3.31 1.96-6.99 3-11.03 3z"})})},be=t=>{const{id:e,path:n,handleClick:c}=t,r=A.useCallback(g=>c(e,g),[e,c]);return E.jsx("path",{id:e,d:n,fill:"none",stroke:"grey",strokeWidth:"5",strokeLinecap:"round",cursor:"pointer",onClick:r})},oe=t=>{var C,m;const{id:e,type:n,attrs:c=W[n].defaultAttrs,styleType:r,styleAttrs:g=ie[r].defaultAttrs,newLine:h,handleClick:y}=t,{x1:l,y1:p,x2:b,y2:w}=t,[I,N]=A.useState("M 0,0 L 0,0");A.useEffect(()=>{let L="M 0,0 L 0,0";if(!(n in W))L=`M ${l},${p} L ${b},${w}`;else if(["offsetFrom","offsetTo"].every(f=>Object.keys(c).includes(f))&&!Number.isNaN(c.offsetFrom)&&!Number.isNaN(c.offsetTo)&&c.offsetFrom===c.offsetTo&&((l===b||p===w)&&[R.Diagonal,R.Perpendicular].includes(n)||Math.abs((w-p)/(b-l))===1&&[R.Diagonal,R.RotatePerpendicular].includes(n))){const f=c.offsetFrom;L=W[R.Simple].generatePath(l,b,p,w,{offset:f})}else L=W[n].generatePath(l,b,p,w,c);N(L)},[n,JSON.stringify(c),l,b,p,w]);const _=(m=(C=ie[r])==null?void 0:C.component)!=null?m:be;return A.useMemo(()=>E.jsx(_,{id:e,type:n,path:I,styleAttrs:g,newLine:h,handleClick:y}),[e,n,I,r,JSON.stringify(g),h,y])},$e=()=>{const t=he(),e=A.useRef(window.graph),{telemetry:{project:n}}=Y(a=>a.app),{svgViewBoxZoom:c}=Y(a=>a.param),{selected:r,refresh:{nodes:g,edges:h},mode:y,active:l,keepLastPath:p,theme:b}=Y(a=>a.runtime),[w,I]=A.useState({x:0,y:0}),[N,_]=A.useState({x:0,y:0}),C=M((a,x)=>{x.stopPropagation(),y==="select"&&t(K("free"));const v=x.currentTarget,{x:S,y:s}=B(x);v.setPointerCapture(x.pointerId),I({x:S,y:s}),t(J(a)),!x.shiftKey&&r.length<=1&&t(U()),t(X(a))}),m=M((a,x)=>{const{x:v,y:S}=B(x);y==="free"&&l===a?(r.forEach(s=>{e.current.updateNodeAttributes(s,o=>({...o,x:$(o.x-(w.x-v)*c/100,x.altKey?1:5),y:$(o.y-(w.y-S)*c/100,x.altKey?1:5)}))}),t(me()),t(ce())):y.startsWith("line")&&_({x:(w.x-v)*c/100,y:(w.y-S)*c/100})}),L=M((a,x)=>{if(y.startsWith("line")){p||t(K("free"));const v=[...Object.values(we),ke.Virtual],S=e.current.hasNode(l)&&v.includes(e.current.getNodeAttribute(l,"type"));["stn_core_","virtual_circle_"].forEach(o=>{var k,z;const u=(z=(k=document.elementsFromPoint(x.clientX,x.clientY)[0].attributes)==null?void 0:k.getNamedItem("id"))==null?void 0:z.value,d=u==null?void 0:u.startsWith(o);if(S&&d){const F=y.slice(5),Se=`line_${ae(10)}`;e.current.addDirectedEdgeWithKey(Se,l,u.slice(o.length),{visible:!0,zIndex:0,type:F,[F]:structuredClone(W[F].defaultAttrs),style:G.SingleColor,[G.SingleColor]:{color:b},reconcileId:""}),n&&de.event(le.ADD_LINE,{type:F})}}),t(ce()),t(ue(e.current.export()))}else if(y==="free")if(l){const{x:v,y:S}=B(x);w.x-v===0&&w.y-S===0?t(X(a)):t(ue(e.current.export()))}else t(X(a));t(J(void 0))}),f=M((a,x)=>{t(U()),t(X(a))}),[P,j]=A.useState(fe(e.current)),[V,T]=A.useState(xe(e.current)),[q,H]=A.useState(ge(e.current)),[Q,ee]=A.useState([]),[te,se]=A.useState([]);return A.useEffect(()=>{j(fe(e.current)),T(xe(e.current))},[g]),A.useEffect(()=>{H(ge(e.current));const{allReconciledLines:a,danglingLines:x}=De(e.current);ee(a),se(x)},[h]),E.jsxs(E.Fragment,{children:[te.map(a=>{const[x,v]=e.current.extremities(a),S=e.current.getNodeAttributes(x),s=e.current.getNodeAttributes(v);return E.jsx(oe,{id:a,x1:S.x,y1:S.y,x2:s.x,y2:s.y,newLine:!1,type:R.Simple,attrs:W[R.Simple].defaultAttrs,styleType:G.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:f},a)}),Q.map(a=>{var u,d;const x=Ke(e.current,a);if(!x)return E.jsx(E.Fragment,{});const v=a.at(0),S=e.current.getEdgeAttribute(v,"type"),s=e.current.getEdgeAttribute(v,"style"),o=e.current.getEdgeAttribute(v,s),i=(d=(u=ie[s])==null?void 0:u.component)!=null?d:be;return E.jsx(i,{id:v,type:S,path:x,styleAttrs:o,newLine:!1,handleClick:f},v)}),q.map(({edge:a,x1:x,y1:v,x2:S,y2:s,type:o,attr:i,style:u,styleAttr:d})=>E.jsx(oe,{id:a,x1:x,y1:v,x2:S,y2:s,newLine:!1,type:o,attrs:i,styleType:u,styleAttrs:d,handleClick:f},a)),V.map(a=>{var i,u;const{node:x,x:v,y:S,type:s}=a,o=(u=(i=ve[s])==null?void 0:i.component)!=null?u:pe;return E.jsx(o,{id:x,x:v,y:S,attrs:a[s],handlePointerDown:C,handlePointerMove:m,handlePointerUp:L},x)}),P.map(a=>{var i,u;const{node:x,x:v,y:S,type:s}=a,o=(u=(i=Ae[s])==null?void 0:i.component)!=null?u:pe;return E.jsx(o,{id:x,x:v,y:S,attrs:{[s]:a[s]},handlePointerDown:C,handlePointerMove:m,handlePointerUp:L},x)}),y.startsWith("line")&&l&&E.jsx(oe,{id:"create_in_progress___no_use",x1:e.current.getNodeAttribute(l,"x"),y1:e.current.getNodeAttribute(l,"y"),x2:e.current.getNodeAttribute(l,"x")-N.x,y2:e.current.getNodeAttribute(l,"y")-N.y,newLine:!0,type:y.slice(5),attrs:W[y.slice(5)].defaultAttrs,styleType:G.SingleColor,styleAttrs:{color:b}})]})},Xe=()=>{var v,S;const t=he(),e=A.useRef(window.graph),n=()=>{t(me()),t(ce()),t(ue(e.current.export()))},{telemetry:{project:c}}=Y(s=>s.app),{svgViewBoxZoom:r,svgViewBoxMin:g}=Y(s=>s.param),{mode:h,lastTool:y,active:l,selected:p,keepLastPath:b,theme:w,refresh:{nodes:I}}=Y(s=>s.runtime),N=We(),_=((v=N.height)!=null?v:1280)-40,C=((S=N.width)!=null?S:720)-40;A.useEffect(()=>{const s=_e(e.current);Object.entries(s).filter(([o,i])=>i&&o in Z).map(([o,i])=>o).filter(o=>Z[o]&&document.getElementById(Z[o].cssName)===null).map(o=>Z[o].cssName).filter((o,i,u)=>i===u.findIndex(d=>d===o)).forEach(o=>{const i=document.createElement("link");i.rel="stylesheet",i.id=o,i.href=`/rmp/styles/${o}.css`,document.head.append(i)})},[I]);const[m,L]=A.useState({x:0,y:0}),[f,P]=A.useState({x:0,y:0}),[j,V]=A.useState({x:0,y:0}),[T,q]=A.useState({x:0,y:0}),H=M(s=>{const{x:o,y:i}=B(s);if(h.startsWith("station")){t(K("free"));const u=ae(10),d=h.slice(8),k=structuredClone(Ae[d].defaultAttrs);"color"in k&&(k.color=w);const{x:z,y:F}=D(o,i,r,g);e.current.addNode(`stn_${u}`,{visible:!0,zIndex:0,x:$(z,5),y:$(F,5),type:d,[d]:k}),n(),c&&de.event(le.ADD_STATION,{type:d})}else if(h.startsWith("misc-node")){t(K("free"));const u=ae(10),d=h.slice(10),{x:k,y:z}=D(o,i,r,g);e.current.addNode(`misc_node_${u}`,{visible:!0,zIndex:0,x:$(k,5),y:$(z,5),type:d,[d]:structuredClone(ve[d].defaultAttrs)}),n(),c&&de.event(le.ADD_STATION,{type:d})}else h==="free"||h.startsWith("line")?(h.startsWith("line")&&(t(K("free")),b&&t(Ee(!1))),V({x:o,y:i}),q(g),s.shiftKey||(t(J("background")),t(U()))):h==="select"&&(L(D(o,i,r,g)),P(D(o,i,r,g)))}),Q=M(s=>{if(h==="select"){if(m.x!=0&&m.y!=0){const{x:o,y:i}=B(s);P(D(o,i,r,g))}}else if(l==="background"){const{x:o,y:i}=B(s);t(ne({x:T.x+(j.x-o)*r/100,y:T.y+(j.y-i)*r/100}))}}),ee=M(s=>{if(h==="select"){const{x:o,y:i}=B(s),{x:u,y:d}=D(o,i,r,g),k=je(e.current,m.x,m.y,u,d);s.shiftKey?t(re([...new Set([...p,...k])])):t(re(k)),t(K("free")),L({x:0,y:0}),P({x:0,y:0})}l==="background"&&!s.shiftKey&&t(J(void 0))}),te=M(s=>{let o=r;s.deltaY>0&&r+10<400?o=r+10:s.deltaY<0&&r-10>0&&(o=r-10),t(Ne(o));const{x:i,y:u}=B(s),d=s.currentTarget.getBoundingClientRect(),[k,z]=[i/d.width,u/d.height];t(ne({x:g.x+i*r/100-C*o/100*k,y:g.y+u*r/100-_*o/100*z}))}),se=M(async s=>{if(O?s.key==="Backspace":s.key==="Delete")p.length>0&&p.filter(o=>e.current.hasNode(o)||e.current.hasEdge(o)).forEach(o=>{t(U()),e.current.hasNode(o)?e.current.dropNode(o):e.current.dropEdge(o),n()});else if(s.key.startsWith("Arrow")){const i=s.key.endsWith("Left")?-1:s.key.endsWith("Right")?1:0,u=s.key.endsWith("Up")?-1:s.key.endsWith("Down")?1:0;t(ne(D(100*i,100*u,r,g)))}else if(s.key==="i"||s.key==="j"||s.key==="k"||s.key==="l"){const i=(s.key==="j"?-1:s.key==="l"?1:0)*10,u=(s.key==="i"?-1:s.key==="k"?1:0)*10;p.length>0&&p.filter(d=>e.current.hasNode(d)).forEach(d=>{e.current.updateNodeAttribute(d,"x",k=>(k!=null?k:0)+i),e.current.updateNodeAttribute(d,"y",k=>(k!=null?k:0)+u),n()})}else if(s.key==="f"&&y)t(K(y));else if(s.key==="z"&&(O?s.metaKey&&!s.shiftKey:s.ctrlKey))O&&s.preventDefault(),t(Ce());else if(s.key==="s")t(K("select"));else if((s.key==="c"||s.key==="x")&&(O?s.metaKey&&!s.shiftKey:s.ctrlKey)){const o=new Set(p),i=Me(e.current,o),u=Pe(e.current,o,new Set(i));navigator.clipboard.writeText(u),s.key==="x"&&(t(U()),p.forEach(d=>{e.current.hasNode(d)?e.current.dropNode(d):e.current.hasEdge(d)&&e.current.dropEdge(d)}),n())}else if(s.key==="v"&&(O?s.metaKey&&!s.shiftKey:s.ctrlKey)){const o=await navigator.clipboard.readText(),{x:i,y:u}=D(C/2,_/2,r,g),{nodes:d}=Ie(o,e.current,$(i,5),$(u,5));n(),t(U()),t(re(d))}else(O&&s.key==="z"&&s.metaKey&&s.shiftKey||!O&&s.key==="y"&&s.ctrlKey)&&t(Le())}),[a,x]=A.useState({sx:0,sy:0,ex:0,ey:0});return A.useEffect(()=>{x({sx:m.x<=f.x?m.x:f.x,ex:m.x>f.x?m.x:f.x,sy:m.y<=f.y?m.y:f.y,ey:m.y>f.y?m.y:f.y})},[f.x,f.y]),E.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40,userSelect:"none"},height:_,width:C,viewBox:`${g.x} ${g.y} ${C*r/100} ${_*r/100}`,onPointerDown:H,onPointerMove:Q,onPointerUp:ee,onWheel:te,tabIndex:0,onKeyDown:se,children:[E.jsx($e,{}),h==="select"&&m.x!=0&&m.y!=0&&E.jsx("rect",{x:a.sx,y:a.sy,width:a.ex-a.sx,height:a.ey-a.sy,rx:"2",stroke:"#b5b5b6",strokeWidth:"2",strokeOpacity:"0.4",fill:"#b5b5b6",opacity:"0.75"})]})};export{Xe as default};
