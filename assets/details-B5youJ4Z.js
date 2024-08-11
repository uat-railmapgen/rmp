import{j as e,B as W,aw as k,ax as re,aK as F,O as S,aM as ie,U as le,D as oe,_ as q,$ as J,a0 as Q,a1 as Y,a3 as ee,a5 as te,a4 as B}from"./chakra-C3T8NphC.js";import{e as L,a as A,ay as ce,a9 as de,as as ue,az as pe,v as C,w,o as I,aw as z,l as he,p as ge,a7 as U,aA as H,t as T,V as me,W as xe,j as V,m as ne,y as D,at as G,aB as fe,aC as ye,aD as be,aE as je,n as X}from"./index-3YJdDK1u.js";import{u as P,b as p}from"./react-DV6nCJb6.js";import{u as K,e as we}from"./clipboard-kkM5fu_B.js";import{s as $}from"./stations-BvwdsnXi.js";import{C as Se,c as Ae,a as Ce,b as Ne}from"./change-type-modal-DnqKWP-R.js";import{LearnHowToAdd as Ee}from"./tools-BoYHEmvE.js";import{m as ve}from"./misc-nodes-OGd04Ye2.js";import"./index-CvYts115.js";function Te(){const{t}=P(),i=L(),{selected:u}=A(r=>r.runtime),h=p.useRef(window.graph),a=r=>{if(h.current.hasNode(r)){const c=h.current.getNodeAttributes(r),g=c.type;return r.startsWith("stn")?c[g].names.join("/"):g}else if(h.current.hasEdge(r)){const[c,g]=h.current.extremities(r),o=h.current.getSourceAttributes(r),d=h.current.getTargetAttributes(r),x=o.type,f=d.type;return(c.startsWith("stn")?o[x].names[0]:x)+" - "+(g.startsWith("stn")?d[f].names[0]:f)}},[l,s]=p.useState([]);p.useEffect(()=>{s(["station","misc-node","line"])},[u]);const[n,m]=p.useState(!1);return e.jsxs(W,{children:[e.jsxs(k,{as:"h5",size:"sm",children:[t("panel.details.multipleSelection.selected")," ",u.size]}),e.jsxs(re,{m:"var(--chakra-space-1)",children:[e.jsxs(F,{w:"100%",children:[e.jsx(k,{as:"h5",size:"xs",w:"100%",children:t("panel.details.multipleSelection.show")}),e.jsx(ce,{selections:[{label:t("panel.details.multipleSelection.station"),value:"station"},{label:t("panel.details.multipleSelection.miscNode"),value:"misc-node"},{label:t("panel.details.multipleSelection.edge"),value:"line"}],defaultValue:l,multiSelect:!0,onChange:r=>s(r)})]}),l.length!==0&&e.jsxs(e.Fragment,{children:[e.jsxs(S,{width:"100%",size:"sm",onClick:()=>m(!0),children:[t("panel.details.multipleSelection.change"),e.jsx(ie,{label:t("header.settings.pro"),children:e.jsx(le,{ml:"1",color:"gray.50",background:"radial-gradient(circle, #3f5efb, #fc466b)",children:"PRO"})})]}),e.jsx(oe,{})]}),[...u].filter(r=>l.includes("station")||!r.startsWith("stn")).filter(r=>l.includes("misc-node")||!r.startsWith("misc")).filter(r=>l.includes("line")||!r.startsWith("line")).map(r=>{var c;return e.jsxs(F,{width:"100%",children:[e.jsx(S,{width:"100%",size:"sm",variant:"solid",onClick:()=>i(de(new Set([r]))),overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"ruby",children:(c=a(r))==null?void 0:c.replaceAll("\\","⏎")}),e.jsx(S,{size:"sm",onClick:()=>i(ue(r)),children:e.jsx(pe,{})})]},r)})]}),e.jsx(Se,{isOpen:n,onClose:()=>m(!1),isSelect:!0,filter:l})]})}function Le(){const{t}=P(),i=L(),u=p.useCallback(()=>{i(C()),i(w(n.current.export()))},[i,C,w]),{preference:{autoParallel:h}}=A(b=>b.app),{selected:a,theme:l}=A(b=>b.runtime),[s]=a,n=p.useRef(window.graph),[m,r]=p.useState(!1),c=p.useRef(null),g=Object.fromEntries(Object.entries(I).map(([b,_])=>[b,t(_.metadata.displayName).toString()])),[o,d]=p.useState(n.current.getEdgeAttribute(s,"type")),[x,f]=p.useState(void 0),j=Object.fromEntries(Object.entries(z).map(([b,_])=>[b,t(_.metadata.displayName).toString()])),[y,N]=p.useState(n.current.getEdgeAttribute(s,"style")),[E,v]=p.useState(void 0);p.useEffect(()=>{d(n.current.getEdgeAttribute(s,"type")),N(n.current.getEdgeAttribute(s,"style"))},[s]);const R=Object.values(he).filter(b=>!z[y].metadata.supportLinePathType.includes(b)),O=Object.values(ge).filter(b=>!z[b].metadata.supportLinePathType.includes(o)),se=()=>{x&&(Ae(n.current,s,x,h),d(n.current.getEdgeAttribute(s,"type")),u())},ae=()=>{E&&(Ce(n.current,s,E,l),N(n.current.getEdgeAttribute(s,"style")),u())},M=b=>{b&&(x?(se(),f(void 0)):E&&(ae(),v(void 0))),r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(U,{label:t("panel.details.info.linePathType"),minW:"276",children:e.jsx(H,{options:g,disabledOptions:R,defaultValue:o,value:o,onChange:({target:{value:b}})=>{f(b),r(!0)}})}),e.jsx(U,{label:t("panel.details.info.lineStyleType"),minW:"276",children:e.jsx(H,{options:j,disabledOptions:O,defaultValue:y,value:y,onChange:({target:{value:b}})=>{v(b),r(!0)}})}),e.jsx(Ee,{type:"line",expand:!0}),e.jsx(q,{isOpen:m,leastDestructiveRef:c,onClose:()=>M(!1),children:e.jsx(J,{children:e.jsxs(Q,{children:[e.jsx(Y,{children:t("warning")}),e.jsx(ee,{children:t("panel.details.changeLineTypeContent")}),e.jsxs(te,{children:[e.jsx(S,{ref:c,onClick:()=>M(!1),children:t("cancel")}),e.jsx(S,{ml:"2",colorScheme:"red",onClick:()=>M(!0),children:t("panel.details.changeType")})]})]})})})]})}function Pe(){const{t}=P(),i=L(),u=p.useCallback(()=>{i(T()),i(w(l.current.export()))},[i,T,w]),{selected:h}=A(f=>f.runtime),[a]=h,l=p.useRef(window.graph),[s,n]=p.useState(!1),m=p.useRef(null),[r,c]=p.useState(void 0),g=l.current.getNodeAttribute(a,"type"),o=Object.fromEntries(Object.entries($).map(([f,j])=>[f,t(j.metadata.displayName).toString()])),d=()=>{r&&(Ne(l.current,a,r),u())},x=f=>{f&&d(),c(void 0),n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(U,{label:t("panel.details.info.stationType"),minW:"276",children:e.jsx(H,{options:o,disabledOptions:[g],value:g,onChange:({target:{value:f}})=>{c(f),n(!0)}})}),e.jsx(q,{isOpen:s,leastDestructiveRef:m,onClose:()=>x(!1),children:e.jsx(J,{children:e.jsxs(Q,{children:[e.jsx(Y,{children:t("warning")}),e.jsx(ee,{children:t("panel.details.changeStationTypeContent")}),e.jsxs(te,{children:[e.jsx(S,{ref:m,onClick:()=>x(!1),children:t("cancel")}),e.jsx(S,{ml:"2",colorScheme:"red",onClick:()=>x(!0),children:t("panel.details.changeType")})]})]})})})]})}function Re(){const{t}=P(),i=L(),u=p.useCallback(()=>{i(T()),i(C()),i(w(n.current.export()))},[i,C,w]),{activeSubscriptions:h}=A(o=>o.account),{selected:a,parallelLinesCount:l}=A(o=>o.runtime),[s]=a,n=p.useRef(window.graph),m=o=>{const d=Math.min(Math.max(o,-10),10);n.current.hasNode(s)&&n.current.setNodeAttribute(s,"zIndex",d),n.current.hasEdge(s)&&n.current.setEdgeAttribute(s,"zIndex",d),u()},r=(o,d)=>{let x=-1;if(o){const f=n.current.getEdgeAttributes(s),[j,y]=n.current.extremities(s);x=ne(n.current,f.type,j,y,d)}c(x)},c=o=>{n.current.setEdgeAttribute(s,"parallelIndex",o),i(C()),i(w(n.current.export()))},g=[];if(a.size!==0)if(a.size===1){if(g.push({type:"input",label:t("panel.details.info.id"),value:s,minW:276}),g.push({type:"select",label:t("panel.details.info.zIndex"),value:s?n.current.hasNode(s)?n.current.getNodeAttribute(s,"zIndex"):n.current.hasEdge(s)?n.current.getEdgeAttribute(s,"zIndex"):0:0,options:Object.fromEntries(Array.from({length:21},(o,d)=>[d-10,(d-10).toString()])),onChange:o=>m(Number(o))}),n.current.hasEdge(s)){const o=n.current.getEdgeAttributes(s),d=o.parallelIndex,x=h.RMP_CLOUD?me:xe,f=l>x&&d<0,j=l>x&&d>=0;g.push({type:"switch",label:t("panel.details.info.parallel"),isDisabled:f,isChecked:d>=0,onChange:y=>r(y,o[o.type].startFrom),oneLine:!0,minW:276}),d>=0&&g.push({type:"input",label:t("panel.details.info.parallelIndex"),variant:"number",isDisabled:j,value:o.parallelIndex.toString(),onChange:y=>c(Number(y)),minW:276})}}else a.size>1&&g.push({type:"input",label:t("panel.details.info.type"),value:t("panel.details.multipleSelection.title"),minW:276});return e.jsxs(W,{p:1,children:[e.jsx(k,{as:"h5",size:"sm",children:t("panel.details.info.title")}),e.jsx(V,{fields:g,minW:130}),a.size===1&&s.startsWith("stn")&&n.current.hasNode(s)&&n.current.getNodeAttribute(s,"type")in $&&e.jsx(Pe,{}),a.size===1&&s.startsWith("line")&&n.current.hasEdge(s)&&n.current.getEdgeAttribute(s,"type")in I&&n.current.getEdgeAttribute(s,"style")in z&&e.jsx(Le,{}),a.size>1&&e.jsx(Te,{})]})}function ze(){const{t}=P(),i=L(),{selected:u}=A(j=>j.runtime),[h]=u,a=p.useRef(window.graph),[l,s]=p.useState("undefined"),[n,m]=p.useState("undefined"),[r,c]=p.useState("undefined"),[g,o]=p.useState("undefined");p.useEffect(()=>{var j,y,N,E;if(h!=null&&h.startsWith("line")){const[v,R]=a.current.extremities(h);if(s(v),m(R),v.startsWith("stn")){const O=a.current.getNodeAttribute(v,"type");c((y=(j=a.current.getNodeAttribute(v,O))==null?void 0:j.names.at(0))!=null?y:"undefined")}if(R.startsWith("stn")){const O=a.current.getNodeAttribute(R,"type");o((E=(N=a.current.getNodeAttribute(R,O))==null?void 0:N.names.at(0))!=null?E:"undefined")}}},[u]);const d=K(()=>{i(D()),i(G(l))}),x=K(()=>{i(D()),i(G(n))}),f=[{type:"custom",label:t("panel.details.lineExtremities.source"),component:e.jsx(S,{ml:"auto",size:"sm",variant:"link",onClick:d,children:l}),oneLine:!0,minW:"full"},{type:"input",label:t("panel.details.lineExtremities.sourceName"),value:r,minW:"full"},{type:"custom",label:t("panel.details.lineExtremities.target"),component:e.jsx(S,{ml:"auto",size:"sm",variant:"link",onClick:x,children:n}),oneLine:!0,minW:"full"},{type:"input",label:t("panel.details.lineExtremities.targetName"),value:g,minW:"full"}];return e.jsxs(W,{p:1,children:[e.jsx(k,{as:"h5",size:"sm",children:t("panel.details.lineExtremities.title")}),e.jsx(V,{fields:f,minW:130})]})}function ke(){const{t}=P(),i=L(),u=p.useCallback(()=>{i(T()),i(C()),i(w(s.current.export()))},[i,T,C,w]),{selected:h,refresh:{nodes:a}}=A(c=>c.runtime),[l]=h,s=p.useRef(window.graph),[n,m]=p.useState({x:0,y:0});p.useEffect(()=>{if(l!=null&&l.startsWith("stn")||l!=null&&l.startsWith("misc_node_")){const c=s.current.getNodeAttribute(l,"x"),g=s.current.getNodeAttribute(l,"y");m({x:c,y:g})}},[a,h]);const r=[{type:"input",label:t("panel.details.nodePosition.pos.x"),value:n.x.toString(),validator:c=>!Number.isNaN(c),onChange:c=>{s.current.mergeNodeAttributes(l,{x:Number(c)}),u()}},{type:"input",label:t("panel.details.nodePosition.pos.y"),value:n.y.toString(),validator:c=>!Number.isNaN(c),onChange:c=>{s.current.mergeNodeAttributes(l,{y:Number(c)}),u()}}];return e.jsxs(W,{p:1,children:[e.jsx(k,{as:"h5",size:"sm",children:t("panel.details.nodePosition.title")}),e.jsx(V,{fields:r,minW:130})]})}const Z={...$,...ve},Oe=()=>{var m;const t=L(),{selected:i}=A(r=>r.runtime),{t:u}=P(),[h]=i,a=window.graph.getNodeAttribute(h,"type"),l=a in Z&&Z[a].attrsComponent,s=(m=window.graph.getNodeAttribute(h,a))!=null?m:{},n=(r,c)=>{const g=window.graph.getNodeAttribute(r,"type");window.graph.mergeNodeAttributes(r,{[g]:c}),t(T()),t(w(window.graph.export()))};return l?e.jsx(l,{id:h,attrs:s,handleAttrsUpdate:n}):e.jsx(B,{fontSize:"xs",m:"var(--chakra-space-1)",children:u("panel.details.unknown.error",{category:u("panel.details.unknown.node")})})},We=()=>{var f,j;const t=L(),{preference:{autoParallel:i}}=A(y=>y.app),{selected:u}=A(y=>y.runtime),{t:h}=P(),[a]=u,l=window.graph.getEdgeAttribute(a,"type"),s=(f=window.graph.getEdgeAttribute(a,l))!=null?f:{},n=l in I&&I[l].attrsComponent,m=window.graph.getEdgeAttribute(a,"style"),r=(j=window.graph.getEdgeAttribute(a,m))!=null?j:{},c=m in z&&z[m].attrsComponent,g=window.graph.getEdgeAttribute(a,"parallelIndex"),o=window.graph.getEdgeAttribute(a,"reconcileId"),d=(y,N)=>{let E=-1;if(i){const[v,R]=window.graph.extremities(y);E=ne(window.graph,l,v,R,N.startFrom)}window.graph.setEdgeAttribute(y,"parallelIndex",E),window.graph.mergeEdgeAttributes(y,{[l]:N}),t(C()),t(w(window.graph.export()))},x=(y,N)=>{window.graph.mergeEdgeAttributes(y,{[m]:N}),t(C()),t(w(window.graph.export()))};return e.jsxs(e.Fragment,{children:[n?e.jsx(n,{id:a,attrs:s,handleAttrsUpdate:d,parallelIndex:g}):e.jsx(B,{fontSize:"xs",m:"var(--chakra-space-1)",children:h("panel.details.unknown.error",{category:h("panel.details.unknown.linePath")})}),c?e.jsx(c,{id:a,attrs:r,handleAttrsUpdate:x,reconcileId:o}):e.jsx(B,{fontSize:"xs",m:"var(--chakra-space-1)",children:h("panel.details.unknown.error",{category:h("panel.details.unknown.lineStyle")})})]})},$e=()=>{const{t}=P(),i=L(),u=p.useRef(window.graph),h=p.useCallback(()=>{i(T()),i(C()),i(w(u.current.export()))},[i,T,C,w]),{selected:a,mode:l,active:s}=A(o=>o.runtime),[n]=a,m=()=>i(D()),r=o=>{const d=structuredClone(u.current.getNodeAttributes(o));d.x+=50,d.y+=50;const x=o.startsWith("stn")?"stn_".concat(X(10)):"misc_node_".concat(X(10));u.current.addNode(x,d),i(T()),i(w(u.current.export()))},c=o=>{const d=we(u.current,o);navigator.clipboard.writeText(d)},g=o=>{i(D()),o.forEach(d=>{u.current.hasNode(d)?u.current.dropNode(d):u.current.hasEdge(d)&&u.current.dropEdge(d)}),h()};return e.jsxs(fe,{isOpen:a.size>0&&!l.startsWith("line")&&!s,width:300,header:"Dummy header",alwaysOverlay:!0,children:[e.jsx(ye,{onClose:m,children:t("panel.details.header")}),e.jsxs(be,{children:[e.jsx(Re,{}),a.size===1&&u.current.hasNode(n)&&e.jsx(ke,{}),a.size===1&&u.current.hasEdge(n)&&e.jsx(ze,{}),a.size===1&&e.jsxs(W,{p:1,children:[e.jsx(k,{as:"h5",size:"sm",children:t("panel.details.specificAttrsTitle")}),window.graph.hasNode(n)&&e.jsx(Oe,{}),window.graph.hasEdge(n)&&e.jsx(We,{})]})]}),e.jsx(je,{children:e.jsxs(F,{children:[a.size===1&&u.current.hasNode([...a].at(0))&&e.jsx(S,{size:"sm",variant:"outline",onClick:()=>r([...a].at(0)),children:t("panel.details.footer.duplicate")}),e.jsx(S,{size:"sm",variant:"outline",onClick:()=>c(a),children:t("panel.details.footer.copy")}),e.jsx(S,{size:"sm",variant:"outline",onClick:()=>g(a),children:t("panel.details.footer.remove")})]})})]})};export{$e as default};
