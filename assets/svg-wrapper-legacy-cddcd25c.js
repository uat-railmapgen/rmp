!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,r||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,u,a=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(l){s=!0,i=l}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw i}}return a}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./chakra-legacy-99ea1e3b.js","./react-legacy-57266490.js","./useEvent-legacy-81ca6d24.js","./index-legacy-759ff39e.js","./stations-legacy-4ec4f5f1.js","./misc-nodes-legacy-b19e4800.js","./helpers-legacy-ea65da85.js"],(function(e,t){"use strict";var a,c,s,l,f,y,d,p,g,v,h,m,b,x,A,w,j,E,S,N,k,I,O,P,D,L,W,T,_,z,C,K,M,F;return{setters:[function(e){a=e.j},function(e){c=e.b,s=e.r},function(e){l=e.u},function(e){f=e.q,y=e.J,d=e.p,p=e.i,g=e.j,v=e.ae,h=e.A,m=e.af,b=e.v,x=e.x,A=e.ad,w=e.S,j=e.d,E=e.o,S=e.L,N=e.r,k=e.E,I=e.y,O=e.O,P=e.H,D=e.G,L=e.a2,W=e.a4},function(e){T=e.s},function(e){_=e.m},function(e){z=e.a,C=e.r,K=e.f,M=e.F,F=e.i}],execute:function(){var t=function(e){var t=e.id,r=e.type,n=e.attrs,i=void 0===n?f[r].defaultAttrs:n,u=e.styleType,s=e.styleAttrs,l=void 0===s?y[u].defaultAttrs:s,p=e.newLine,g=e.handleClick,v=e.x1,h=e.y1,m=e.x2,b=e.y2,x=o(c.useState("M 0,0 L 0,0"),2),A=x[0],w=x[1];c.useEffect((function(){var e="M 0,0 L 0,0";if(["offsetFrom","offsetTo"].every((function(e){return Object.keys(i).includes(e)}))&&!Number.isNaN(i.offsetFrom)&&!Number.isNaN(i.offsetTo)&&i.offsetFrom===i.offsetTo&&((v===m||h===b)&&[d.Diagonal,d.Perpendicular].includes(r)||1===Math.abs((b-h)/(m-v))&&[d.Diagonal,d.RotatePerpendicular].includes(r))){var t=i.offsetFrom;e=f[d.Simple].generatePath(v,m,h,b,{offset:t})}else e=f[r].generatePath(v,m,h,b,i);w(e)}),[r,JSON.stringify(i),v,m,h,b]);var j=y[u].component;return c.useMemo((function(){return a.jsx(j,{id:t,type:r,path:A,styleAttrs:l,newLine:p,handleClick:g})}),[t,r,A,u,JSON.stringify(l),p,g])},R=function(e){var t,r={},n=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=u(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}(e.filterDirectedEdges((function(e,t,r,n,i,o,u){return e.startsWith("line")&&""!==t.reconcileId})));try{for(n.s();!(t=n.n()).done;){var i=t.value,o=e.getEdgeAttribute(i,"reconcileId");o in r?r[o].push(i):r[o]=[i]}}catch(a){n.e(a)}finally{n.f()}return r},B=function(e){var t=R(e),r=[],n=[];return Object.values(t).forEach((function(t){if(1!==t.length){var u=e.getEdgeAttribute(t.at(0),"type");if(t.every((function(t){return e.getEdgeAttribute(t,"type")===u}))){var a=e.getEdgeAttribute(t.at(0),"style");if(t.every((function(t){return e.getEdgeAttribute(t,"style")===a}))){var c={},s=new Set,l=new Set,f=Object.fromEntries(t.map((function(t){var r,n,i=o(e.extremities(t),2),u=i[0],a=i[1];return c[u]=(null!==(r=c[u])&&void 0!==r?r:0)+1,c[a]=(null!==(n=c[a])&&void 0!==n?n:0)+1,s.add(u),l.add(a),[u,[t,a]]}))),y=Array.from(s).filter((function(e){return 1===c[e]})),d=Array.from(l).filter((function(e){return 1===c[e]}));if(1===y.length&&1===d.length){var p=y[0],g=d[0];if(p!==g){for(var v=[f[p][0]],h=f[p][1],m=1;m<t.length;m+=1){var b,x=null===(b=f[h])||void 0===b?void 0:b.at(1);if(!x)return void n.push.apply(n,i(t));v.push(f[h][0]),h=x}h===g&&v.length===t.length?r.push(v):n.push.apply(n,i(t))}else n.push.apply(n,i(t))}else n.push.apply(n,i(t))}else n.push.apply(n,i(t))}else n.push.apply(n,i(t))}else n.push.apply(n,i(t))})),{allReconciledLines:r,danglingLines:n}},U=function(e){return e.filterNodes((function(e,t){return e.startsWith("stn")})).map((function(t){return[t,e.getNodeAttributes(t)]})).filter((function(e){var t=o(e,2);t[0];return t[1].visible})).sort((function(e,t){return e[1].zIndex-t[1].zIndex})).map((function(e){var t=o(e,2),r=t[0],i=t[1];return n({node:r,visible:i.visible,zIndex:i.zIndex,x:i.x,y:i.y,type:i.type},i.type,i[i.type])}))},V=function(e){return e.filterDirectedEdges((function(e,t,r,n,i,o,u){return e.startsWith("line")&&t.visible&&""===t.reconcileId})).sort((function(t,r){return e.getEdgeAttribute(t,"zIndex")-e.getEdgeAttribute(r,"zIndex")})).map((function(t){var r=e.getEdgeAttribute(t,"type"),n=e.getEdgeAttribute(t,r),i=e.getEdgeAttribute(t,"style"),u=e.getEdgeAttribute(t,i),a=o(e.extremities(t),2),c=a[0],s=a[1],l=e.getNodeAttributes(c),f=e.getNodeAttributes(s);return{edge:t,x1:l.x,y1:l.y,x2:f.x,y2:f.y,type:r,attr:n,style:i,styleAttr:u}}))},J=function(e){return e.filterNodes((function(e,t){return e.startsWith("misc_node")})).map((function(t){return[t,e.getNodeAttributes(t)]})).filter((function(e){var t=o(e,2);t[0];return t[1].visible})).sort((function(e,t){return e[1].zIndex-t[1].zIndex})).map((function(e){var t=o(e,2),r=t[0],i=t[1];return n({node:r,visible:i.visible,zIndex:i.zIndex,x:i.x,y:i.y,type:i.type},i.type,i[i.type])}))},Y=function(){var e=p(),u=c.useRef(window.graph),s=g((function(e){return e.app})).telemetry.project,O=g((function(e){return e.param})).svgViewBoxZoom,P=g((function(e){return e.runtime})),D=P.selected,L=P.refresh,W=L.nodes,K=L.edges,M=P.mode,F=P.active,R=P.keepLastPath,Y=P.theme,H=o(c.useState({x:0,y:0}),2),Z=H[0],q=H[1],G=o(c.useState({x:0,y:0}),2),X=G[0],$=G[1],Q=l((function(t,r){r.stopPropagation();var n=r.currentTarget,i=z(r),o=i.x,u=i.y;n.setPointerCapture(r.pointerId),q({x:o,y:u}),e(v(t)),!r.shiftKey&&D.length<=1&&e(h()),e(m(t))})),ee=l((function(t,n){n.stopPropagation();var i=z(n),o=i.x,a=i.y;"free"===M&&F===t?(D.forEach((function(e){u.current.updateNodeAttributes(e,(function(e){return r(r({},e),{},{x:C(e.x-(Z.x-o)*O/100,n.altKey?1:5),y:C(e.y-(Z.y-a)*O/100,n.altKey?1:5)})}))})),e(b()),e(x())):M.startsWith("line")&&$({x:(Z.x-o)*O/100,y:(Z.y-a)*O/100})})),te=l((function(t,r){if(r.stopPropagation(),M.startsWith("line")){R||e(A("free"));var o=[].concat(i(Object.values(w)),[j.Virtual]),a=u.current.hasNode(F)&&o.includes(u.current.getNodeAttribute(F,"type"));["stn_core_","virtual_circle_"].forEach((function(e){var t,i=null===(t=document.elementsFromPoint(r.clientX,r.clientY)[0].attributes)||void 0===t||null===(t=t.getNamedItem("id"))||void 0===t?void 0:t.value,o=null==i?void 0:i.startsWith(e);if(a&&o){var c,l=M.slice(5),y="line_".concat(E(10));u.current.addDirectedEdgeWithKey(y,F,i.slice(e.length),(n(c={visible:!0,zIndex:0,type:l},l,structuredClone(f[l].defaultAttrs)),n(c,"style",S.SingleColor),n(c,S.SingleColor,{color:Y}),n(c,"reconcileId",""),c)),s&&N.event(k.ADD_LINE,{type:l})}})),e(x()),e(I(u.current.export()))}else if("free"===M)if(F){var c=z(r),l=c.x,y=c.y;Z.x-l==0&&Z.y-y==0?e(m(t)):e(I(u.current.export()))}else e(m(t));e(v(void 0))})),re=l((function(t,r){e(h()),e(m(t))})),ne=o(c.useState(U(u.current)),2),ie=ne[0],oe=ne[1],ue=o(c.useState(J(u.current)),2),ae=ue[0],ce=ue[1],se=o(c.useState(V(u.current)),2),le=se[0],fe=se[1],ye=o(c.useState([]),2),de=ye[0],pe=ye[1],ge=o(c.useState([]),2),ve=ge[0],he=ge[1];return c.useEffect((function(){oe(U(u.current)),ce(J(u.current))}),[W]),c.useEffect((function(){fe(V(u.current));var e=B(u.current),t=e.allReconciledLines,r=e.danglingLines;pe(t),he(r)}),[]),c.useEffect((function(){fe(V(u.current));var e=B(u.current),t=e.allReconciledLines,r=e.danglingLines;pe(t),he(r)}),[K]),a.jsxs(a.Fragment,{children:[ve.map((function(e){var r=o(u.current.extremities(e),2),n=r[0],i=r[1],c=u.current.getNodeAttributes(n),s=u.current.getNodeAttributes(i);return a.jsx(t,{id:e,x1:c.x,y1:c.y,x2:s.x,y2:s.y,newLine:!1,type:d.Simple,attrs:f[d.Simple].defaultAttrs,styleType:S.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:re},e)})),de.map((function(e){var t=function(e,t){if(t.every((function(t){return e.hasEdge(t)}))){for(var r=t.map((function(t){var r,n=o(e.extremities(t),2),i=n[0],u=n[1],a=e.getNodeAttributes(i),c=e.getNodeAttributes(u),s=e.getEdgeAttribute(t,"type"),l=null!==(r=e.getEdgeAttribute(t,s))&&void 0!==r?r:f[s].defaultAttrs;return f[s].generatePath(a.x,c.x,a.y,c.y,l)})),n="".concat(r[0]," "),i=1;i<t.length;i+=1)n+=r[i].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return n}}(u.current,e);if(!t)return a.jsx(a.Fragment,{});var r=e.at(0),n=u.current.getEdgeAttribute(r,"type"),i=u.current.getEdgeAttribute(r,"style"),c=u.current.getEdgeAttribute(r,i),s=y[i].component;return a.jsx(s,{id:r,type:n,path:t,styleAttrs:c,newLine:!1,handleClick:re},r)})),le.map((function(e){var r=e.edge,n=e.x1,i=e.y1,o=e.x2,u=e.y2,c=e.type,s=e.attr,l=e.style,f=e.styleAttr;return a.jsx(t,{id:r,x1:n,y1:i,x2:o,y2:u,newLine:!1,type:c,attrs:s,styleType:l,styleAttrs:f,handleClick:re},r)})),ae.map((function(e){var t=e.node,r=e.x,n=e.y,i=e.type,o=_[i].component;return a.jsx(o,{id:t,x:r,y:n,attrs:e[i],handlePointerDown:Q,handlePointerMove:ee,handlePointerUp:te},t)})),ie.map((function(e){var t=e.node,r=e.x,i=e.y,o=e.type,u=T[o].component;return a.jsx(u,{id:t,x:r,y:i,attrs:n({},o,e[o]),handlePointerDown:Q,handlePointerMove:ee,handlePointerUp:te},t)})),M.startsWith("line")&&F&&a.jsx(t,{id:"create_in_progress___no_use",x1:u.current.getNodeAttribute(F,"x"),y1:u.current.getNodeAttribute(F,"y"),x2:u.current.getNodeAttribute(F,"x")-X.x,y2:u.current.getNodeAttribute(F,"y")-X.y,newLine:!0,type:M.slice(5),attrs:f[M.slice(5)].defaultAttrs,styleType:S.SingleColor,styleAttrs:{color:Y}})]})};e("default",(function(){var e,t,r=p(),i=c.useRef(window.graph),u=function(){r(b()),r(x()),r(I(i.current.export()))},f=g((function(e){return e.app})).telemetry.project,y=g((function(e){return e.param})),d=y.svgViewBoxZoom,m=y.svgViewBoxMin,w=g((function(e){return e.runtime})),j=w.mode,S=w.lastTool,R=w.active,B=w.selected,U=w.keepLastPath,V=w.theme,J=w.refresh.nodes;c.useEffect((function(){var e=K(i.current);Object.entries(e).filter((function(e){var t=o(e,2),r=t[0];return t[1]&&r in M})).map((function(e){var t=o(e,2),r=t[0];t[1];return r})).filter((function(e){return M[e]&&null===document.getElementById(M[e].cssName)})).map((function(e){return M[e].cssName})).filter((function(e,t,r){return t===r.findIndex((function(t){return t===e}))})).forEach((function(e){var t=document.createElement("link");t.rel="stylesheet",t.id=e,t.href="/rmp/"+"styles/".concat(e,".css"),document.head.append(t)}))}),[J]);var H,Z,q,G=o(c.useState({x:0,y:0}),2),X=G[0],$=G[1],Q=o(c.useState({x:0,y:0}),2),ee=Q[0],te=Q[1],re=l((function(e){var t=z(e),o=t.x,a=t.y;if(j.startsWith("station")){r(A("free"));var c=E(10),s=j.slice(8),l=structuredClone(T[s].defaultAttrs);"color"in l&&(l.color=V),i.current.addNode("stn_".concat(c),n({visible:!0,zIndex:0,x:C(o*d/100+m.x,10),y:C(a*d/100+m.y,10),type:s},s,l)),u(),f&&N.event(k.ADD_STATION,{type:s})}else if(j.startsWith("misc-node")){r(A("free"));var y=E(10),p=j.slice(10);i.current.addNode("misc_node_".concat(y),n({visible:!0,zIndex:0,x:C(o*d/100+m.x,10),y:C(a*d/100+m.y,10),type:p},p,structuredClone(_[p].defaultAttrs))),u(),f&&N.event(k.ADD_STATION,{type:p})}else("free"===j||j.startsWith("line"))&&(j.startsWith("line")&&(r(A("free")),U&&r(O(!1))),$({x:o,y:a}),te(m),e.shiftKey||(r(v("background")),r(h())))})),ne=l((function(e){if("background"===R){var t=z(e),n=t.x,i=t.y;r(P({x:ee.x+(X.x-n)*d/100,y:ee.y+(X.y-i)*d/100}))}})),ie=l((function(e){"background"!==R||e.shiftKey||r(v(void 0))})),oe=l((function(e){var t=d;e.deltaY>0&&d+10<400?t=d+10:e.deltaY<0&&d-10>0&&(t=d-10),r(D(t));var n=z(e),i=n.x,o=n.y,u=e.currentTarget.getBoundingClientRect(),a=i/u.width,c=o/u.height;r(P({x:m.x+i*d/100-se*t/100*a,y:m.y+o*d/100-ce*t/100*c}))})),ue=l((function(e){if(F?"Backspace"===e.key:"Delete"===e.key)B.length>0&&B.filter((function(e){return i.current.hasNode(e)||i.current.hasEdge(e)})).forEach((function(e){r(h()),i.current.hasNode(e)?i.current.dropNode(e):i.current.dropEdge(e),u()}));else if(e.key.startsWith("Arrow")){var t=e.key.endsWith("Left")?-1:e.key.endsWith("Right")?1:0,n=e.key.endsWith("Up")?-1:e.key.endsWith("Down")?1:0;r(P({x:m.x+100*d/100*t,y:m.y+100*d/100*n}))}else if("i"===e.key||"j"===e.key||"k"===e.key||"l"===e.key){var o=10*("j"===e.key?-1:"l"===e.key?1:0),a=10*("i"===e.key?-1:"k"===e.key?1:0);B.length>0&&B.filter((function(e){return i.current.hasNode(e)})).forEach((function(e){i.current.updateNodeAttribute(e,"x",(function(e){return(null!=e?e:0)+o})),i.current.updateNodeAttribute(e,"y",(function(e){return(null!=e?e:0)+a})),u()}))}else"f"===e.key&&S?r(A(S)):"z"===e.key&&(F?e.metaKey&&!e.shiftKey:e.ctrlKey)?(F&&e.preventDefault(),r(L())):(F&&"z"===e.key&&e.metaKey&&e.shiftKey||!F&&"y"===e.key&&e.ctrlKey)&&r(W())})),ae=(H=o(s.useState({width:void 0,height:void 0}),2),Z=H[0],q=H[1],s.useEffect((function(){function e(){q({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Z),ce=(null!==(e=ae.height)&&void 0!==e?e:1280)-40,se=(null!==(t=ae.width)&&void 0!==t?t:720)-40;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40,userSelect:"none"},height:ce,width:se,viewBox:"".concat(m.x," ").concat(m.y," ").concat(se*d/100," ").concat(ce*d/100),onPointerDown:re,onPointerMove:ne,onPointerUp:ie,onWheel:oe,tabIndex:0,onKeyDown:ue,children:a.jsx(Y,{})})}))}}}))}();
