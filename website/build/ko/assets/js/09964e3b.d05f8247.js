"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1359],{84337:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=r(85893),i=r(11151);const n={id:"reproducible-builds",title:"Reproducible Builds"},s=void 0,a={id:"build/smart-contracts/anatomy/reproducible-builds",title:"Reproducible Builds",description:"Reproducible builds let different people build the same program and get the exact same outputs as one another. It helps users trust that deployed contracts are built correctly and correspond to the source code. To verify your contract user can build it themselves and check that the binaries are identical.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/anatomy/reproducible-builds.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/reproducible-builds",permalink:"/ko/build/smart-contracts/anatomy/reproducible-builds",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/reproducible-builds.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,frontMatter:{id:"reproducible-builds",title:"Reproducible Builds"},sidebar:"build",previous:{title:"Reducing Contract Size",permalink:"/ko/build/smart-contracts/anatomy/reduce-size"},next:{title:"\uc18c\uac1c",permalink:"/ko/build/smart-contracts/testing/introduction"}},c={},l=[{value:"Problem",id:"problem",level:2},{value:"CI solution",id:"ci-solution",level:2}];function u(t){const e={a:"a",h2:"h2",p:"p",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"Reproducible builds let different people build the same program and get the exact same outputs as one another. It helps users trust that deployed contracts are built correctly and correspond to the source code. To verify your contract user can build it themselves and check that the binaries are identical."}),"\n",(0,o.jsx)(e.h2,{id:"problem",children:"Problem"}),"\n",(0,o.jsxs)(e.p,{children:["If you will build your contract on two different machines, most likely you will get two similar but not identical binaries. Your build artifact can be affected by the locale, timezone, build path, and billion other factors in your build environment. Rust community has a long story of fighting this issue but still, ",(0,o.jsx)(e.a,{href:"https://github.com/rust-lang/rust/labels/A-reproducibility",children:"it is not achieved yet"}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"ci-solution",children:"CI solution"}),"\n",(0,o.jsxs)(e.p,{children:["We recommend you to build your contracts with the use of our ",(0,o.jsx)(e.a,{href:"https://github.com/near/near-sdk-rs/tree/master/contract-builder",children:"Contract Builder"}),". It's is using Docker, controlled and sharable environment that can be used by both you and your users. Docker image is available ",(0,o.jsx)(e.a,{href:"https://hub.docker.com/r/nearprotocol/contract-builder",children:"here"}),". The contract built in it will result in a binary that is the same if built on other machines."]})]})}function d(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},11151:(t,e,r)=>{r.d(e,{Z:()=>a,a:()=>s});var o=r(67294);const i={},n=o.createContext(i);function s(t){const e=o.useContext(n);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),o.createElement(n.Provider,{value:e},t.children)}}}]);