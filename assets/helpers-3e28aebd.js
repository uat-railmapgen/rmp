import{S as p,e as g}from"./index-707af454.js";const M=/url\("([\S*]+)"\)/,P=()=>navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),b=t=>new Promise(e=>{const n=new FileReader;n.onloadend=()=>e(n.result),n.readAsDataURL(t)}),_=(t,e)=>t.find(n=>{const r=n.style;return r.getPropertyValue("font-family").replace(/^"(.+)"$/,"$1")===e.family&&r.getPropertyValue("unicode-range")===e.unicodeRange}),U=async(t,e,n,r,a)=>{var h,d;const i=Array.from(new Set(e.map(s=>[...t.querySelectorAll(s)]).flat().map(s=>s.innerHTML).join("").replace(/\s/g,""))).join(""),u=await document.fonts.load(n.join(", "),i),c=(d=(h=document.querySelector(`link#${r}`))==null?void 0:h.sheet)==null?void 0:d.cssRules;if(!c)return Promise.reject(new Error(`cssRules can not be found in link#${r}`));const o=Array.from(c).flatMap(s=>s instanceof CSSImportRule?Array.from(s.styleSheet.cssRules):s).filter(s=>s instanceof CSSFontFaceRule),l=u.reduce((s,m)=>{const y=_(o,m);return y?s.find(S=>{const f=S.style,x=y.style;return f.getPropertyValue("font-family")===x.getPropertyValue("font-family")&&f.getPropertyValue("unicode-range")===x.getPropertyValue("unicode-range")})?s:s.concat(y):s},[]);return await Promise.all(l.map(async s=>{try{const m=await fetch(N(a,s)),y=await b(await m.blob());return s.cssText.replace(M,`url('${y}')`)}catch(m){return console.error(m),""}}))},N=(t,e)=>{var r;const n=e.style.getPropertyValue("src");return t+((r=n.match(M))==null?void 0:r[1])},F={[p.MTR]:{className:[".rmp-name__mtr__zh",".rmp-name__mtr__en"],cssFont:["80px GenYoMin TW","Vegur"],cssName:"fonts_mtr",baseUrl:"/styles/"},[g.BerlinSBahnLineBadge]:{className:[".rmp-name__berlin"],cssFont:["16px Roboto"],cssName:"fonts_berlin",baseUrl:"/rmp/styles/"},[g.BerlinUBahnLineBadge]:{className:[".rmp-name__berlin"],cssFont:["16px Roboto"],cssName:"fonts_berlin",baseUrl:"/rmp/styles/"}},E=t=>{const e=t.currentTarget.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;return{x:n,y:r}},L=(t,e,n,r)=>({x:t*n/100+r.x,y:e*n/100+r.y}),B=(t,e)=>Math.round(t/e)*e,C=t=>{let[e,n,r,a]=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE];return t.forEachNode((i,u)=>{const c=document.getElementById(i);if(c){const o=A(c);e=Math.min(o.x,e),n=Math.min(o.y,n),r=Math.max(o.x+o.width,r),a=Math.max(o.y+o.height,a)}}),e-=50,n-=50,r+=100,a+=100,{xMin:e,yMin:n,xMax:r,yMax:a}},A=t=>{const e=t.getBBox(),n=t.ownerSVGElement,r=t.parentNode.getScreenCTM().inverse().multiply(t.getScreenCTM()),a=[n.createSVGPoint(),n.createSVGPoint(),n.createSVGPoint(),n.createSVGPoint()];a[0].x=e.x,a[0].y=e.y,a[1].x=e.x+e.width,a[1].y=e.y,a[2].x=e.x+e.width,a[2].y=e.y+e.height,a[3].x=e.x,a[3].y=e.y+e.height;let[i,u,c,o]=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE];return a.forEach(l=>{l=l.matrixTransform(r),i=Math.min(i,l.x),c=Math.max(c,l.x),u=Math.min(u,l.y),o=Math.max(o,l.y)}),e.x=i,e.width=c-i,e.y=u,e.height=o-u,e},T=navigator.platform.startsWith("Mac"),w=t=>{for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t};export{F,T as a,E as b,C as c,U as g,P as i,L as p,B as r,w as s};
