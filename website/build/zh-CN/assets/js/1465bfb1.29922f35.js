"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8153],{31279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(85893),r=n(11151);const s={},o=void 0,c={id:"build/primitives/ft/web-app/create",title:"create",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/5.primitives/ft/web-app/create.md",sourceDirName:"2.build/5.primitives/ft/web-app",slug:"/build/primitives/ft/web-app/create",permalink:"/zh-CN/build/primitives/ft/web-app/create",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/ft/web-app/create.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{}},i={},l=[];function p(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst wallet = new Wallet({});\n\nconst args = {\n  args: {\n    owner_id: "bob.near",\n    total_supply: "1000000000",\n    metadata: {\n      spec: "ft-1.0.0",\n      name: "Test Token",\n      symbol: "test",\n      icon: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",\n      decimals: 18,\n    },\n  },\n  account_id: "bob.near",\n};\n\nawait wallet.callMethod({\n  method: \'create_token\',\n  args,\n  contractId: "tkn.near",\n  gas: 300000000000000,\n  deposit: "2234830000000000000000000"\n});\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["The ",(0,a.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var a=n(67294);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);