"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5976],{91657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(85893),o=n(11151);const i={},r=void 0,s={id:"build/primitives/dao/web-app/create-dao",title:"create-dao",description:"The full list of roles and permissions you can find here.",source:"@site/../docs/2.build/5.primitives/dao/web-app/create-dao.md",sourceDirName:"2.build/5.primitives/dao/web-app",slug:"/build/primitives/dao/web-app/create-dao",permalink:"/build/primitives/dao/web-app/create-dao",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dao/web-app/create-dao.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst DAO_FACTORY_CONTRACT_ADDRESS = "sputnik-dao.near";\nconst wallet = new Wallet({ createAccessKeyFor: DAO_FACTORY_CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'create\',\n  args: {\n    name: "primitives",\n    args: btoa({\n      config: {\n        name: "Primitives",\n        purpose: "Building primitives on NEAR",\n        metadata: ""\n      },\n      policy: ["bob.near"]\n    }),\n  },\n  contractId: DAO_FACTORY_CONTRACT_ADDRESS,\n  gas: 300000000000000,\n  deposit: 6000000000000000000000000\n});\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["The full list of roles and permissions you can find ",(0,a.jsx)(t.a,{href:"https://github.com/near-daos/sputnik-dao-contract#roles-and-permissions",children:"here"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["The ",(0,a.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var a=n(67294);const o={},i=a.createContext(o);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);