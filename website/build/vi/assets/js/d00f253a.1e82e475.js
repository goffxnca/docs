"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2411],{4743:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=n(85893),s=n(11151);const i={id:"utils",title:"Utilities",sidebar_label:"Utilities"},a=void 0,r={id:"tools/near-api-js/utils",title:"Utilities",description:"NEAR => yoctoNEAR",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/4.tools/near-api-js/naj-utils.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/utils",permalink:"/vi/tools/near-api-js/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/naj-utils.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{id:"utils",title:"Utilities",sidebar_label:"Utilities"},sidebar:"tools",previous:{title:"Contract",permalink:"/vi/tools/near-api-js/contract"},next:{title:"FAQ",permalink:"/vi/tools/near-api-js/faq"}},c={},l=[{value:"NEAR =&gt; yoctoNEAR",id:"near--yoctonear",level:3},{value:"YoctoNEAR =&gt; NEAR",id:"yoctonear--near",level:3}];function u(t){const e={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h3,{id:"near--yoctonear",children:"NEAR => yoctoNEAR"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'// chuy\u1ec3n \u0111\u1ed5i s\u1ed1 l\u01b0\u1ee3ng NEAR th\xe0nh yoctoNEAR (10^-24)\n\nconst { utils } = nearAPI;\nconst amountInYocto = utils.format.parseNearAmount("1");\n'})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsxs)(e.a,{href:"https://near.github.io/near-api-js/functions/_near_js_utils.format.parseNearAmount.html",children:[(0,o.jsx)("span",{className:"typedoc-icon typedoc-icon-function"})," Function ",(0,o.jsx)(e.code,{children:"parseNearAmount"})]})}),"\n",(0,o.jsx)(e.h3,{id:"yoctonear--near",children:"YoctoNEAR => NEAR"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'// chuy\u1ec3n \u0111\u1ed5i s\u1ed1 l\u01b0\u1ee3ng yoctoNEAR (10^-24) th\xe0nh NEAR\n\nconst { utils } = nearAPI;\nconst amountInNEAR = utils.format.formatNearAmount("1000000000000000000000000");\n'})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsxs)(e.a,{href:"https://near.github.io/near-api-js/functions/_near_js_utils.format.formatNearAmount.html",children:[(0,o.jsx)("span",{className:"typedoc-icon typedoc-icon-function"})," Function ",(0,o.jsx)(e.code,{children:"formatNearAmount"})]})})]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>a});var o=n(67294);const s={},i=o.createContext(s);function a(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);