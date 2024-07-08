"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[122],{63438:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=s(85893),a=s(11151),n=s(39654);const c={sidebar_position:1,sidebar_label:"T\xf4\u0309ng quan",title:"Intermediate concepts (cross-contract calls and more)"},o="Intermediate concepts",i={id:"tutorials/crosswords/intermediate/overview",title:"Intermediate concepts (cross-contract calls and more)",description:"This chapter will go a bit faster than the previous ones.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/03-intermediate/00-overview.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/overview",permalink:"/vi/tutorials/crosswords/intermediate/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/00-overview.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1720430471e3,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"T\xf4\u0309ng quan",title:"Intermediate concepts (cross-contract calls and more)"},sidebar:"tutorials",previous:{title:"Access keys and login 2/2",permalink:"/vi/tutorials/crosswords/beginner/logging-in-implementation"},next:{title:"Solution as seed phrase",permalink:"/vi/tutorials/crosswords/intermediate/access-key-solution"}},l={},d=[{value:"C\xe1c cross-contract call",id:"c\xe1c-cross-contract-call",level:2},{value:"Access keys",id:"access-keys",level:2},{value:"Completed project",id:"completed-project",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"intermediate-concepts",children:"Intermediate concepts"}),"\n",(0,r.jsx)(t.p,{children:"This chapter will go a bit faster than the previous ones."}),"\n",(0,r.jsx)(t.p,{children:"We're going to be covering an important part of smart contract development: cross-contract calls."}),"\n",(0,r.jsx)(t.h2,{id:"c\xe1c-cross-contract-call",children:"C\xe1c cross-contract call"}),"\n",(0,r.jsxs)(t.p,{children:["A cross-contract call is when a smart contract calls another smart contract. For instance, if ",(0,r.jsx)(t.code,{children:"alice.near"})," calls contract A, and contract A makes a call to contract B."]}),"\n",(0,r.jsx)(t.p,{children:"NEAR has asynchronous transactions, and some cross-contract calls will have callbacks in order to determine the result of the call. This works a bit different from other blockchains, as we'll explain more in this chapter."}),"\n",(0,r.jsx)(t.h2,{id:"access-keys",children:"Access keys"}),"\n",(0,r.jsx)(t.p,{children:'Last chapter covered access keys, and we implemented a login system where a user "logs in" by adding a function-call access key to their account which is tied to the crossword puzzle dApp.'}),"\n",(0,r.jsx)(t.p,{children:"Login is a common use case for access keys, but let's think bigger!"}),"\n",(0,r.jsx)(t.p,{children:"Remember the two (smaller, gray) function-call access keys from the keychain illustration?"}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:n.Z,width:"600",alt:"A keychain with three keys. A large, gold key represents the full-access keys on NEAR. The two other keys are gray and smaller, and have detachable latches on them. They represent function-call access key. Art created by alcantara_gabriel.near"}),(0,r.jsxs)("figcaption",{children:["Art by ",(0,r.jsx)("a",{href:"https://twitter.com/Bagriel_5_10",target:"_blank",rel:"noopener noreferrer",children:"alcantara_gabriel.near"})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:"Notice that they have a clasp to make them removable."}),"\n",(0,r.jsx)(t.p,{children:"While it's unlikely you'll want to give another person a full-access key, there are times when you could give a function-call access key to another person or make it public. V\xec sao? This can help enable a smooth onboarding experience, as we'll do soon."}),"\n",(0,r.jsx)(t.h2,{id:"completed-project",children:"Completed project"}),"\n",(0,r.jsx)(t.p,{children:"Here's the final code for this chapter:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/near-examples/crossword-tutorial-chapter-3",children:"https://github.com/near-examples/crossword-tutorial-chapter-3"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},39654:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/keys-cartoon-good--alcantara_gabriel.near--Bagriel_5_10-25f5521a242db4d310be7de1dd937aa2.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>c});var r=s(67294);const a={},n=r.createContext(a);function c(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);