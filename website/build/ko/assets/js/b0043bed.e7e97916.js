"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[529],{96261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=n(85893),c=n(11151);const r={id:"checklist",title:"\u2705 \uccb4\ud06c\ub9ac\uc2a4\ud2b8"},i=void 0,l={id:"build/smart-contracts/security/checklist",title:"\u2705 \uccb4\ud06c\ub9ac\uc2a4\ud2b8",description:"Once you finished developing your smart contract please go through the following list in order to ensure everything is safe for the end user.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/security/checklist.md",sourceDirName:"2.build/2.smart-contracts/security",slug:"/build/smart-contracts/security/checklist",permalink:"/ko/build/smart-contracts/security/checklist",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/security/checklist.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"checklist",title:"\u2705 \uccb4\ud06c\ub9ac\uc2a4\ud2b8"},sidebar:"build",previous:{title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c",permalink:"/ko/build/smart-contracts/anatomy/crosscontract"},next:{title:"Best Practices",permalink:"/ko/build/smart-contracts/anatomy/best-practices"}},o={},a=[{value:"Anatomy",id:"anatomy",level:2},{value:"\ud658\uacbd",id:"\ud658\uacbd",level:2},{value:"\uc2a4\ud1a0\ub9ac\uc9c0",id:"\uc2a4\ud1a0\ub9ac\uc9c0",level:2},{value:"Action",id:"action",level:2},{value:"\ucf5c\ubc31",id:"\ucf5c\ubc31",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Once you finished developing your smart contract please go through the following list in order to ensure everything is safe for the end user."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Check our ",(0,s.jsx)(t.a,{href:"/ko/build/smart-contracts/security/welcome",children:"security articles"})," to understand how to improve the security of your contract."]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["All private methods are decorated as ",(0,s.jsx)(t.code,{children:"private"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\ud658\uacbd",children:"\ud658\uacbd"}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"predecessor"}),"\uc640 ",(0,s.jsx)(t.code,{children:"signer"}),"\ub294 \uc804\uccb4 \ucee8\ud2b8\ub799\ud2b8 \ub0b4\uc5d0\uc11c \uc62c\ubc14\ub974\uac8c \uc0ac\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\uc2a4\ud1a0\ub9ac\uc9c0",children:"\uc2a4\ud1a0\ub9ac\uc9c0"}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"\uc0c1\ud0dc\uac00 \ucd94\uac00\ub420 \ub54c\ub9c8\ub2e4 \uc774\ub97c \uac10\ub2f9\ud560 \uc218 \uc788\ub294 \ucda9\ubd84\ud55c \uc794\uace0\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"All collections (i.e. \ubaa8\ub4e0 \uceec\ub809\uc158 (\uc608: \ubca1\ud130, \ub9f5, \ud2b8\ub9ac \ub4f1)\uc5d0\ub294 \uace0\uc720\ud55c ID\uac00 \uc788\uc2b5\ub2c8\ub2e4. Vector, Map, Tree, etc) have an unique id"}),"\n",(0,s.jsxs)(t.li,{children:["\uc5b8\ub354\ud50c\ub85c\uc6b0 \ubc0f \uc624\ubc84\ud50c\ub85c\uc6b0\ub97c \uccb4\ud06c\ud558\uc138\uc694! Rust\uc5d0\uc11c\ub294 ",(0,s.jsx)(t.code,{children:"Cargo.toml"}),"\uc5d0 ",(0,s.jsx)(t.code,{children:"overflow-checks = true"})," \ud50c\ub798\uadf8\ub97c \ucd94\uac00\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"action",children:"Action"}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"\ub3c8\uc744 \ubcf4\ub0bc \ub54c, \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \ucda9\ub2f9\ud560 \ub9cc\ud07c \uc790\uae08\uc744 \ucda9\ubd84\ud788 \ub0a8\uaca8 \ub450\uc5c8\uc2b5\ub2e4."}),"\n",(0,s.jsxs)(t.li,{children:["\uc0ac\uc6a9\uc790\uc758 \uc790\uae08\uc744 \ucd94\uc801\ud558\ub294 \uacbd\uc6b0, \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc774\ub97c \ub2e4\uc2dc \ubcf4\ub0b4\uae30 \uc804\uc5d0 ",(0,s.jsx)(t.strong,{children:"\ube7c \ub450\uc5c8\uc2b5\ub2c8\ub2e4"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\ucf5c\ubc31",children:"\ucf5c\ubc31"}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsxs)(t.li,{children:["\ubaa8\ub4e0 \ube44\uacf5\uac1c \ucf5c\ubc31\uc740 ",(0,s.jsx)(t.code,{children:"private"}),"\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.li,{children:"All cross-contract calls have a callback"}),"\n",(0,s.jsx)(t.li,{children:"All callbacks check for errors and roll back the state if necessary"}),"\n",(0,s.jsxs)(t.li,{children:["All callbacks return money to the ",(0,s.jsx)(t.code,{children:"predecessor"})," if necessary"]}),"\n",(0,s.jsxs)(t.li,{children:["Callbacks are free of ",(0,s.jsx)(t.code,{children:"panic!"})]}),"\n",(0,s.jsx)(t.li,{children:"\ubaa8\ub4e0 \ucf5c\ubc31\uc5d0\ub294 \uc644\uc804\ud788 \uc2e4\ud589\ud558\uae30\uc5d0 \ucda9\ubd84\ud55c \uac00\uc2a4\uac00 \uc81c\uacf5\ub429\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"The contract is not left in an exploitable state between a cross-contract call and its callback"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var s=n(67294);const c={},r=s.createContext(c);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);