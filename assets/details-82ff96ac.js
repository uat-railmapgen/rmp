import{j as e,A as V,M as q,m as G,n as Z,p as J,r as K,s as w,$ as z,a0 as I,ae as ee}from"./chakra-594c63ee.js";import{c as R,i as C,y as N,A as x,j as A,ah as _,ai as B,z as j,t as Q,N as W,q as te,v as ne,n as U,D as k,ag as F,aj as se,ak as ae,al as re,am as ie,p as H}from"./index-2cfda547.js";import{b as c}from"./react-2c0b8364.js";import{a as oe}from"./graph-c2781f77.js";import{s as X}from"./stations-f66f627d.js";import{d as le,e as ce,f as de}from"./change-types-e977b7fd.js";import{u as $,e as pe}from"./clipboard-09dcecf6.js";import{m as ue}from"./misc-nodes-8b6daacf.js";function he(){const{t}=R(),r=C(),a=c.useCallback(()=>{r(N()),r(x(n.current.export()))},[r,N,x]),{selected:o}=A(b=>b.runtime),s=o.at(0),n=c.useRef(window.graph),[i,h]=c.useState(!1),l=c.useRef(null),[u,d]=c.useState(void 0),p=n.current.getNodeAttribute(s,"type"),g=Object.fromEntries(Object.entries(X).map(([b,S])=>[b,t(S.metadata.displayName).toString()])),m=()=>{u&&(le(n.current,s,u),a())},y=b=>{b&&m(),d(void 0),h(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(_,{label:t("panel.details.info.stationType"),minW:"276",children:e.jsx(B,{options:g,disabledOptions:[p],value:p,onChange:({target:{value:b}})=>{d(b),h(!0)}})}),e.jsx(V,{isOpen:i,leastDestructiveRef:l,onClose:()=>y(!1),children:e.jsx(q,{children:e.jsxs(G,{children:[e.jsx(Z,{children:t("warning")}),e.jsx(J,{children:t("panel.details.changeStationTypeContent")}),e.jsxs(K,{children:[e.jsx(w,{ref:l,onClick:()=>y(!1),children:t("cancel")}),e.jsx(w,{ml:"2",colorScheme:"red",onClick:()=>y(!0),children:t("panel.details.changeType")})]})]})})})]})}function ge(){const{t}=R(),r=C(),a=c.useCallback(()=>{r(j()),r(x(i.current.export()))},[r,j,x]),{selected:o,theme:s}=A(f=>f.runtime),n=o.at(0),i=c.useRef(window.graph),[h,l]=c.useState(!1),u=c.useRef(null),d=Object.fromEntries(Object.entries(Q).map(([f,M])=>[f,t(M.metadata.displayName).toString()])),[p,g]=c.useState(i.current.getEdgeAttribute(n,"type")),[m,y]=c.useState(void 0),b=Object.fromEntries(Object.entries(W).map(([f,M])=>[f,t(M.metadata.displayName).toString()])),[S,P]=c.useState(i.current.getEdgeAttribute(n,"style")),[T,O]=c.useState(void 0),v=Object.values(te).filter(f=>!W[S].metadata.supportLinePathType.includes(f)),E=Object.values(ne).filter(f=>!W[f].metadata.supportLinePathType.includes(p)),L=()=>{m&&(ce(i.current,n,m),g(i.current.getEdgeAttribute(n,"type")),a())},Y=()=>{T&&(de(i.current,n,T,s),P(i.current.getEdgeAttribute(n,"style")),a())},D=f=>{f&&(m?(L(),y(void 0)):T&&(Y(),O(void 0))),l(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(_,{label:t("panel.details.info.linePathType"),minW:"276",children:e.jsx(B,{options:d,disabledOptions:v,defaultValue:p,value:p,onChange:({target:{value:f}})=>{y(f),l(!0)}})}),e.jsx(_,{label:t("panel.details.info.lineStyleType"),minW:"276",children:e.jsx(B,{options:b,disabledOptions:E,defaultValue:S,value:S,onChange:({target:{value:f}})=>{O(f),l(!0)}})}),e.jsx(V,{isOpen:h,leastDestructiveRef:u,onClose:()=>D(!1),children:e.jsx(q,{children:e.jsxs(G,{children:[e.jsx(Z,{children:t("warning")}),e.jsx(J,{children:t("panel.details.changeLineTypeContent")}),e.jsxs(K,{children:[e.jsx(w,{ref:u,onClick:()=>D(!1),children:t("cancel")}),e.jsx(w,{ml:"2",colorScheme:"red",onClick:()=>D(!0),children:t("panel.details.changeType")})]})]})})})]})}function me(){const{t}=R(),r=C(),a=c.useCallback(()=>{r(N()),r(j()),r(x(n.current.export()))},[r,j,x]),{selected:o}=A(l=>l.runtime),s=o.at(0),n=c.useRef(window.graph),i=l=>{const u=Math.min(Math.max(l,-5),5);n.current.hasNode(s)&&n.current.setNodeAttribute(s,"zIndex",u),n.current.hasEdge(s)&&n.current.setEdgeAttribute(s,"zIndex",u),a()},h=[{type:"input",label:t("panel.details.info.id"),value:o.length>0?o.join(", "):"undefined",minW:276},{type:"select",label:t("panel.details.info.zIndex"),value:s?n.current.hasNode(s)?n.current.getNodeAttribute(s,"zIndex"):n.current.hasEdge(s)?n.current.getEdgeAttribute(s,"zIndex"):0:0,options:Object.fromEntries(Array.from({length:11},(l,u)=>[u-5,(u-5).toString()])),onChange:l=>i(Number(l))}];return o.length===0||o.length>1&&h.push({type:"input",label:t("panel.details.info.type"),value:"multiple selection",minW:276}),e.jsxs(z,{p:1,children:[e.jsx(I,{as:"h5",size:"sm",children:t("panel.details.info.title")}),e.jsx(U,{fields:h,minW:130}),o.length===1&&s.startsWith("stn")&&n.current.hasNode(s)&&e.jsx(he,{}),o.length===1&&s.startsWith("line")&&n.current.hasEdge(s)&&e.jsx(ge,{})]})}function fe(){const{t}=R(),r=C(),{selected:a}=A(S=>S.runtime),o=a.at(0),s=c.useRef(window.graph),[n,i]=c.useState("undefined"),[h,l]=c.useState("undefined"),[u,d]=c.useState("undefined"),[p,g]=c.useState("undefined");c.useEffect(()=>{var S,P,T,O;if(o!=null&&o.startsWith("line")){const[v,E]=s.current.extremities(o);if(i(v),l(E),v.startsWith("stn")){const L=s.current.getNodeAttribute(v,"type");d((P=(S=s.current.getNodeAttribute(v,L))==null?void 0:S.names.at(0))!=null?P:"undefined")}if(E.startsWith("stn")){const L=s.current.getNodeAttribute(E,"type");g((O=(T=s.current.getNodeAttribute(E,L))==null?void 0:T.names.at(0))!=null?O:"undefined")}}},[a]);const m=$(()=>{r(k()),r(F(n))}),y=$(()=>{r(k()),r(F(h))}),b=[{type:"custom",label:t("panel.details.lineExtremities.source"),component:e.jsx(w,{flex:1,size:"sm",variant:"link",onClick:m,children:n})},{type:"custom",label:t("panel.details.lineExtremities.target"),component:e.jsx(w,{flex:1,size:"sm",variant:"link",onClick:y,children:h})},{type:"input",label:t("panel.details.lineExtremities.sourceName"),value:u},{type:"input",label:t("panel.details.lineExtremities.targetName"),value:p}];return e.jsxs(z,{p:1,children:[e.jsx(I,{as:"h5",size:"sm",children:t("panel.details.lineExtremities.title")}),e.jsx(U,{fields:b,minW:130})]})}function xe(){const{t}=R(),r=C(),a=c.useCallback(()=>{r(N()),r(j()),r(x(i.current.export()))},[r,N,j,x]),{selected:o,refresh:{nodes:s}}=A(d=>d.runtime),n=o.at(0),i=c.useRef(window.graph),[h,l]=c.useState({x:0,y:0});c.useEffect(()=>{if(n!=null&&n.startsWith("stn")||n!=null&&n.startsWith("misc_node_")){const d=i.current.getNodeAttribute(n,"x"),p=i.current.getNodeAttribute(n,"y");l({x:d,y:p})}},[s,o]);const u=[{type:"input",label:t("panel.details.nodePosition.pos.x"),value:h.x.toString(),validator:d=>!Number.isNaN(d),onChange:d=>{i.current.mergeNodeAttributes(n,{x:Number(d)}),a()}},{type:"input",label:t("panel.details.nodePosition.pos.y"),value:h.y.toString(),validator:d=>!Number.isNaN(d),onChange:d=>{i.current.mergeNodeAttributes(n,{y:Number(d)}),a()}}];return e.jsxs(z,{p:1,children:[e.jsx(I,{as:"h5",size:"sm",children:t("panel.details.nodePosition.title")}),e.jsx(U,{fields:u,minW:130})]})}const ye={...X,...ue},be=()=>{var h;const t=C(),{selected:r}=A(l=>l.runtime),a=r.at(0),o=window.graph.getNodeAttribute(a,"type"),s=ye[o].attrsComponent,n=(h=window.graph.getNodeAttribute(a,o))!=null?h:{},i=(l,u)=>{const d=window.graph.getNodeAttribute(l,"type");window.graph.mergeNodeAttributes(l,{[d]:u}),t(N()),t(x(window.graph.export()))};return s&&e.jsx(s,{id:a,attrs:n,handleAttrsUpdate:i})},je=()=>{var p,g;const t=C(),{selected:r}=A(m=>m.runtime),a=r.at(0),o=window.graph.getEdgeAttribute(a,"type"),s=(p=window.graph.getEdgeAttribute(a,o))!=null?p:{},n=Q[o].attrsComponent,i=window.graph.getEdgeAttribute(a,"style"),h=(g=window.graph.getEdgeAttribute(a,i))!=null?g:{},l=W[i].attrsComponent,u=(m,y)=>{window.graph.mergeEdgeAttributes(m,{[o]:y}),t(j()),t(x(window.graph.export()))},d=(m,y)=>{window.graph.mergeEdgeAttributes(m,{[i]:y}),t(j()),t(x(window.graph.export()))};return e.jsxs(e.Fragment,{children:[n&&e.jsx(n,{id:a,attrs:s,handleAttrsUpdate:u}),l&&e.jsx(l,{id:a,attrs:h,handleAttrsUpdate:d})]})},Re=()=>{const{t}=R(),r=C(),a=c.useRef(window.graph),o=c.useCallback(()=>{r(N()),r(j()),r(x(a.current.export()))},[r,N,j,x]),{selected:s,mode:n}=A(p=>p.runtime),i=s.at(0),h=()=>r(k()),l=p=>{const g=structuredClone(a.current.getNodeAttributes(p));g.x+=50,g.y+=50;const m=p.startsWith("stn")?`stn_${H(10)}`:`misc_node_${H(10)}`;a.current.addNode(m,g),r(N()),r(x(a.current.export()))},u=p=>{const g=new Set(p),m=oe(a.current,g),y=pe(a.current,g,new Set(m));navigator.clipboard.writeText(y)},d=p=>{r(k()),p.forEach(g=>{a.current.hasNode(g)?(a.current.dropNode(g),o()):a.current.hasEdge(g)&&(a.current.dropEdge(g),r(j()),r(x(a.current.export())))})};return e.jsxs(se,{isOpen:s.length>0&&!n.startsWith("line"),width:300,header:"Dummy header",alwaysOverlay:!0,children:[e.jsx(ae,{onClose:h,children:t("panel.details.header")}),e.jsxs(re,{children:[e.jsx(me,{}),s.length===1&&a.current.hasNode(i)&&e.jsx(xe,{}),s.length===1&&a.current.hasEdge(i)&&e.jsx(fe,{}),s.length===1&&e.jsxs(z,{p:1,children:[e.jsx(I,{as:"h5",size:"sm",children:t("panel.details.specificAttrsTitle")}),window.graph.hasNode(i)&&e.jsx(be,{}),window.graph.hasEdge(i)&&e.jsx(je,{})]})]}),e.jsx(ie,{children:e.jsxs(ee,{children:[s.length===1&&a.current.hasNode(s.at(0))&&e.jsx(w,{size:"sm",variant:"outline",onClick:()=>l(s.at(0)),children:t("panel.details.footer.duplicate")}),e.jsx(w,{size:"sm",variant:"outline",onClick:()=>u(s),children:t("panel.details.footer.copy")}),e.jsx(w,{size:"sm",variant:"outline",onClick:()=>d(s),children:t("panel.details.footer.remove")})]})})]})};export{Re as default};
