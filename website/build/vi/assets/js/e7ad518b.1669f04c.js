"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1359],{84282:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(85893),c=s(11151);const o={id:"access-keys",title:"Access Keys"},i=void 0,a={id:"concepts/protocol/access-keys",title:"Access Keys",description:"In all blockchains, users control their accounts by holding a private key (a secret only they know) and using it to sign transactions.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/1.concepts/protocol/access-keys.md",sourceDirName:"1.concepts/protocol",slug:"/concepts/protocol/access-keys",permalink:"/vi/concepts/protocol/access-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/protocol/access-keys.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"access-keys",title:"Access Keys"},sidebar:"concepts",previous:{title:"Address (Account ID)",permalink:"/vi/concepts/protocol/account-id"},next:{title:"Smart Contract",permalink:"/vi/concepts/protocol/smartcontract"}},r={},l=[{value:"Full-Access Keys",id:"full-access-keys",level:2},{value:"Function-Call Keys",id:"function-call-keys",level:2},{value:"Benefits of Function-Call Keys",id:"benefits-of-function-call-keys",level:2},{value:"Enhancing User Experience",id:"enhancing-user-experience",level:3},{value:"Simple Onboarding",id:"simple-onboarding",level:3},{value:"Key Rotation and Recovery",id:"key-rotation-and-recovery",level:3},{value:"Locked Accounts",id:"locked-accounts",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In all blockchains, users control their accounts by holding a ",(0,t.jsx)(n.code,{children:"private key"})," (a secret only they know) and using it to sign ",(0,t.jsx)(n.a,{href:"/vi/concepts/protocol/transactions",children:"transactions"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(85050).Z+"",width:"1282",height:"470"})}),"\n",(0,t.jsxs)(n.p,{children:["NEAR accounts present the ",(0,t.jsx)(n.strong,{children:"unique"})," feature of being able to hold multiple ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Public-key_cryptography",children:"Access Keys"}),", each with its ",(0,t.jsx)(n.strong,{children:"own set of permissions"}),". We distinguish two types of Keys:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Full-Access Keys"}),": Have full control over the account, and should ",(0,t.jsx)(n.strong,{children:"never be shared"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Function-Call Keys"}),": Can sign calls to specific contract, and are ",(0,t.jsx)(n.strong,{children:"meant to be shared"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"full-access-keys",children:"Full-Access Keys"}),"\n",(0,t.jsxs)(n.p,{children:["As the name suggests, ",(0,t.jsx)(n.code,{children:"Full-Access"})," keys have full control of an account, meaning they can be used to sign ",(0,t.jsx)(n.a,{href:"/vi/concepts/protocol/transactions",children:"transactions"})," doing any action in your account's behalf:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Transfer NEAR \u24c3"}),"\n",(0,t.jsx)(n.li,{children:"Delete your account or create sub-accounts of it"}),"\n",(0,t.jsx)(n.li,{children:"Add or remove Access Keys"}),"\n",(0,t.jsx)(n.li,{children:"Deploy a smart contract in the account"}),"\n",(0,t.jsx)(n.li,{children:"Call methods on any contract"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You should never share your ",(0,t.jsx)(n.code,{children:"Full-Access"}),", otherwise you are giving ",(0,t.jsx)(n.strong,{children:"total control over the account"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"first"})," Full-Access Key of an account is added when the account is ",(0,t.jsx)(n.strong,{children:"created"})]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"function-call-keys",children:"Function-Call Keys"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Function-Call"})," keys can only sign transactions calling a ",(0,t.jsx)(n.strong,{children:"specific contract"}),", and do ",(0,t.jsx)(n.strong,{children:"not allow"})," to ",(0,t.jsx)(n.strong,{children:"attach NEAR tokens"})," to the call. They are defined by three attributes:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"receiver_id"}),": The ",(0,t.jsx)(n.strong,{children:"contract"})," which the key allows to call. No other contract can be called using this key"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"method_names"})," (Optional): The contract's ",(0,t.jsx)(n.strong,{children:"methods"})," the key allows to call. If omitted, all methods can be called"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"allowance"})," (Optional): The ",(0,t.jsx)(n.strong,{children:"amount of NEAR"})," allowed to be spent on ",(0,t.jsx)(n.a,{href:"/vi/concepts/protocol/gas",children:"gas"}),". If omitted, the key can consume ",(0,t.jsx)(n.strong,{children:"unlimited"})," as gas"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Function-Call keys have the main purpose of being shared, so third-parties can make contract calls in your name. This is useful in ",(0,t.jsx)(n.a,{href:"#benefits-of-function-call-keys",children:"multiple scenarios as we will see below"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Function-Call"})," keys are secure to share, as they only permit calls to a specific contract and prohibit NEAR token transfers."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"benefits-of-function-call-keys",children:"Benefits of Function-Call Keys"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Function Call Keys"})," allows you to provide ",(0,t.jsx)(n.strong,{children:"restricted access"})," to third parties. This key type, unique to NEAR, enables several use-cases worth discussing."]}),"\n",(0,t.jsx)(n.h3,{id:"enhancing-user-experience",children:"Enhancing User Experience"}),"\n",(0,t.jsxs)(n.p,{children:["The most common use case for ",(0,t.jsx)(n.code,{children:"Function-Call"})," keys is to allow an application to sign transactions on the user's behalf."]}),"\n",(0,t.jsx)(n.p,{children:"Imagine you are developing a game that records the user's score on a smart contract. On other chains, you would have to disrupt the user's experience to request transaction signatures each time the game needs to update the score."}),"\n",(0,t.jsxs)(n.p,{children:["With NEAR, you can request the user to generate a ",(0,t.jsx)(n.code,{children:"Function-Call"})," key for the game's contract and share it with the game. This way, the game can sign transactions in the user's name, eliminating gameplay interruptions."]}),"\n",(0,t.jsx)(n.p,{children:"Sharing this key is safe for the user, because even in the case of somebody stealing it, they would only be able to call the score-keeping method, and nothing else."}),"\n",(0,t.jsx)("hr",{class:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"simple-onboarding",children:"Simple Onboarding"}),"\n",(0,t.jsxs)(n.p,{children:["Another common use-case of ",(0,t.jsx)(n.code,{children:"Function-Call"})," keys is to simplify the ",(0,t.jsx)(n.strong,{children:"onboarding"})," process for new users. It works as follows:"]}),"\n",(0,t.jsxs)(n.p,{children:["First create a contract that has a method called ",(0,t.jsx)(n.code,{children:"create_account"}),". This method should only be callable by the contract itself and, when executed, should create a new account and transfer some tokens to it."]}),"\n",(0,t.jsxs)(n.p,{children:["You can then create multiple ",(0,t.jsx)(n.code,{children:"Function-Call"})," in the contract's account, that only allow to call ",(0,t.jsx)(n.code,{children:"create_account"}),". Drop these keys to your friends, so they can call the method, and easily create an account with some tokens."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["This is the basic principle behind ",(0,t.jsx)(n.a,{href:"/vi/build/primitives/linkdrop",children:"NEAR Drops"}),", a way to distribute assets to a large number of users"]})}),"\n",(0,t.jsx)("hr",{class:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"key-rotation-and-recovery",children:"Key Rotation and Recovery"}),"\n",(0,t.jsxs)(n.p,{children:["The presence of multiple keys allows for easy ",(0,t.jsx)(n.strong,{children:"rotation"})," and ",(0,t.jsx)(n.strong,{children:"recovery"}),". If you suspect a key might be compromised, you can promptly remove it or replace it with a new one, similar to changing your password on a website."]}),"\n",(0,t.jsx)(n.p,{children:'You can also establish a key-recovery contract in your account and generate a "recovery key" for a trusted party. This key would only be used to initiate the recovery process.'}),"\n",(0,t.jsx)(n.p,{children:"In case of necessity, the trusted party can trigger the recovery process, assisting in the creation of a new full-access key for you."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"locked-accounts",children:"Locked Accounts"}),"\n",(0,t.jsxs)(n.p,{children:["If you remove all keys from an account, then the account will become ",(0,t.jsx)(n.strong,{children:"locked"}),", meaning that no external actor can perform transactions in the\naccount's name."]}),"\n",(0,t.jsx)(n.p,{children:"In practice, this means that only the account's smart contract can transfer assets, create sub-accounts, or update its code."}),"\n",(0,t.jsx)(n.p,{children:"Locking an account is very useful when one wants to deploy a contract, and let the community be assured that only the contract is in control of the account."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"An account could still add keys to itself through a smart contract, effectively allowing the contract to unlock the account. Notice that this can only be done if the contract is deployed before the account is locked"})})]})}function d(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85050:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/access-keys-b8e5f1c2fae9372b8c71f01199e59837.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var t=s(67294);const c={},o=t.createContext(c);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);