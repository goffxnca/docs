"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4978],{70821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(85893),o=t(11151);const s={},i=void 0,r={id:"build/primitives/ft/web-app/check-balance",title:"check-balance",description:"Remember about fungible token precision. You may need this value to show a response of balance requests in an understandable-to-user way in your app. How to get precision value (decimals) you may find above.",source:"@site/../docs/2.build/5.primitives/ft/web-app/check-balance.md",sourceDirName:"2.build/5.primitives/ft/web-app",slug:"/build/primitives/ft/web-app/check-balance",permalink:"/build/primitives/ft/web-app/check-balance",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/ft/web-app/check-balance.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Remember about fungible token precision. You may need this value to show a response of balance requests in an understandable-to-user way in your app. How to get precision value (decimals) you may find ",(0,a.jsx)(n.a,{href:"#get-token-metadata",children:"above"}),"."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst TOKEN_CONTRACT_ADDRESS = \"token.v2.ref-finance.near\";\nconst wallet = new Wallet({ createAccessKeyFor: TOKEN_CONTRACT_ADDRESS });\n \nawait wallet.viewMethod({\n  method: 'ft_balance_of',\n  args: {\n    account_id: 'bob.near'\n  },\n  contractId: TOKEN_CONTRACT_ADDRESS\n});\n"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Example response"}),(0,a.jsx)("p",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"3479615037675962643842"\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.em,{children:["The ",(0,a.jsx)(n.code,{children:"Wallet"})," object comes from our ",(0,a.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var a=t(67294);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);