import{S as l,b as f,L as u}from"./index-eCpU7cNs.js";const N=(o,t)=>o.filterEdges((s,n,e,c,i,r,d)=>t.has(e)&&t.has(c)),S=o=>{const t=Object.fromEntries([...Object.values(l),Object.values(f)].map(s=>[s,!1]));return o.forEachNode(s=>{const n=o.getNodeAttribute(s,"type");t[n]=!0}),t},g=(o,t,s,n,e,c)=>o<=e&&e<=s&&t<=c&&c<=n,h=(o,t,s,n,e)=>{const c=t<=n?t:n,i=s<=e?s:e,r=t<=n?n:t,d=s<=e?e:s;return o.filterNodes((b,a)=>g(c,i,r,d,a.x,a.y))},p=(o,t,s)=>{const n=[],e=new Set;return t.forEach(c=>{const i=o.getNodeAttributes(c).type,r=o.getNodeAttribute(c,i);if(r.color!==void 0){const d=r.color;e.has(d.toString())||(n.push(d),e.add(d.toString()))}}),s.filter(c=>u.includes(o.getEdgeAttribute(c,"style"))).forEach(c=>{const i=o.getEdgeAttributes(c),r=i[i.style].color;e.has(r.toString())||(n.push(r),e.add(r.toString()))}),n};export{h as a,N as b,p as c,S as f};
