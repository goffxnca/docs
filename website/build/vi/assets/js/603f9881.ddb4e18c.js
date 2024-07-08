"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8356],{35902:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=s(85893),n=s(11151);const a={id:"storage",title:"Million Small Deposits"},r=void 0,i={id:"build/smart-contracts/security/storage",title:"Million Small Deposits",description:"On NEAR, your contract pays for the storage it uses. This means that the more data you store, the more balance you need to cover for storage. If you don't handle these costs correctly (e.g. asking the user to cover their storage usage), then a million little deposits can drain your contract of its funds.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/security/storage.md",sourceDirName:"2.build/2.smart-contracts/security",slug:"/build/smart-contracts/security/storage",permalink:"/vi/build/smart-contracts/security/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/security/storage.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"storage",title:"Million Small Deposits"},sidebar:"build",previous:{title:"\u2705 Checklist",permalink:"/vi/build/smart-contracts/security/checklist"},next:{title:"Cross-Contract Calls",permalink:"/vi/build/smart-contracts/security/callbacks"}},c={},l=[];function u(t){const e={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"On NEAR, your contract pays for the storage it uses. This means that the more data you store, the more balance you need to cover for storage. If you don't handle these costs correctly (e.g. asking the user to cover their storage usage), then a million little deposits can drain your contract of its funds."}),"\n",(0,o.jsx)(e.p,{children:"Let's walk through an example:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["You launch ",(0,o.jsx)(e.a,{href:"https://examples.near.org/guest-book-js",children:"a guest book app"}),", deploying your app's smart contract to the account ",(0,o.jsx)(e.code,{children:"example.near"})]}),"\n",(0,o.jsxs)(e.li,{children:["Visitors to your app can add messages to the guest book. This means your users will pay a small gas fee to ",(0,o.jsx)(e.strong,{children:"store"})," their message to your contract."]}),"\n",(0,o.jsxs)(e.li,{children:["When a new message comes in, NEAR will check if ",(0,o.jsx)(e.code,{children:"example.near"})," has enough balance to cover the new storage needs. If it does not, the transaction will fail."]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Note that this can create an attack surface. If sending data to your guest book is inexpensive to the user while costing the contract owner significantly more, a malicious user can exploit the imbalance to make maintaining the contract prohibitively expensive."}),"\n",(0,o.jsx)(e.p,{children:"One possible way to tackle this problem is asking the user to attach money to the call to cover the storage used by their message."}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.p,{children:["Remember that you can release the ",(0,o.jsx)(e.em,{children:"balance locked for storage"})," by simply deleting data from the contract."]})})]})}function d(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},11151:(t,e,s)=>{s.d(e,{Z:()=>i,a:()=>r});var o=s(67294);const n={},a=o.createContext(n);function r(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);