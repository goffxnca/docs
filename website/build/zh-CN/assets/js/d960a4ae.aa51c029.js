"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5575],{16456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(85893),o=n(11151);const r={},s=void 0,c={id:"build/primitives/dex/bos/get-price",title:"get-price",description:"Example response",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/5.primitives/dex/bos/get-price.md",sourceDirName:"2.build/5.primitives/dex/bos",slug:"/build/primitives/dex/bos/get-price",permalink:"/zh-CN/build/primitives/dex/bos/get-price",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dex/bos/get-price.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{}},a={},d=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'const tokenContract = "token.v2.ref-finance.near";\nconst tokenPriceResult = fetch(\n  `https://indexer.ref.finance/get-token-price?token_id=${tokenContract}`\n).body;\nconst tokenPriceValue = JSON.parse(tokenPriceResult);\n'})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Example response"}),(0,i.jsx)("p",{children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "token_contract_id": "token.v2.ref-finance.near",\n  "price": "0.08153090"\n}\n'})})})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Ref Finance has a method to ",(0,i.jsx)(t.a,{href:"https://indexer.ref.finance/list-token-price",children:"get all token prices at once"}),"."]})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var i=n(67294);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);