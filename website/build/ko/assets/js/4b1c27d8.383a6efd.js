"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7614],{3281:(t,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var e=o(85893),r=o(11151);const s={},i=void 0,c={id:"primitives/linkdrop/bos/get-drop-id",title:"get-drop-id",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/7.primitives/linkdrop/bos/get-drop-id.md",sourceDirName:"7.primitives/linkdrop/bos",slug:"/primitives/linkdrop/bos/get-drop-id",permalink:"/ko/primitives/linkdrop/bos/get-drop-id",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/bos/get-drop-id.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{}},d={},p=[];function a(t){const n={code:"code",pre:"pre",...(0,r.a)(),...t.components};return(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-js",children:'const accountId = context.accountId ?? props.accountId;\nconst keypomContract = "v2.keypom.near";\n\nconst dropSupplyForOwner = Near.view(\n  keypomContract,\n  "get_drop_supply_for_owner",\n  { account_id: accountId }\n);\n\nconst dropsForOwner = Near.view(keypomContract, "get_drops_for_owner", {\n  account_id: accountId,\n  from_index: (dropSupplyForOwner - 1).toString(),\n});\n\nconst dropId = dropsForOwner[dropsForOwner.length - 1].drop_id;\n'})})}function u(t={}){const{wrapper:n}={...(0,r.a)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(a,{...t})}):a(t)}},11151:(t,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var e=o(67294);const r={},s=e.createContext(r);function i(t){const n=e.useContext(s);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),e.createElement(s.Provider,{value:n},t.children)}}}]);