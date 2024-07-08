"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4267],{32761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(85893),o=t(11151);const s={id:"token-loss",title:"Token Loss",sidebar_label:"Token Loss"},c=void 0,r={id:"integrations/errors/token-loss",title:"Token Loss",description:"Careful! Losing tokens means losing money!",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/6.integrations/errors/token-loss.md",sourceDirName:"6.integrations/errors",slug:"/integrations/errors/token-loss",permalink:"/vi/integrations/errors/token-loss",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrations/errors/token-loss.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1713279052e3,frontMatter:{id:"token-loss",title:"Token Loss",sidebar_label:"Token Loss"},sidebar:"exchanges",previous:{title:"\u0110\xe1nh Gi\xe1 Source Code",permalink:"/vi/integrations/errors/error-implementation"},next:{title:"T\xedch h\u1ee3p FAQ",permalink:"/vi/integrations/faq"}},a={},l=[{value:"Improper key management",id:"improper-key-management",level:2},{value:"Loss of <code>FullAccess</code> key",id:"loss-of-fullaccess-key",level:3},{value:"Loss of <code>FunctionCall</code> access key",id:"loss-of-functioncall-access-key",level:3},{value:"Refunding deleted accounts",id:"refunding-deleted-accounts",level:2},{value:"Deleting account with non-existent beneficiary",id:"deleting-account-with-non-existent-beneficiary",level:3},{value:"Account with zero balance is garbage-collected, just before it receives refund",id:"account-with-zero-balance-is-garbage-collected-just-before-it-receives-refund",level:3},{value:"Failed function calls in batches",id:"failed-function-calls-in-batches",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Careful! Losing tokens means losing money!"})}),"\n",(0,i.jsx)(n.p,{children:"Token loss c\xf3 th\u1ec3 x\u1ea3y ra trong nhi\u1ec1u tr\u01b0\u1eddng h\u1ee3p. C\xe1c tr\u01b0\u1eddng h\u1ee3p n\xe0y c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c nh\xf3m th\xe0nh m\u1ed9t v\xe0i c\u1ea5p c\xf3 li\xean quan nh\u01b0:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Lo\u1ea1i 1: Key Management"}),"\n",(0,i.jsx)(n.li,{children:"Lo\u1ea1i 2: Refunds"}),"\n",(0,i.jsx)(n.li,{children:"Lo\u1ea1i 3: Function Calls"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"improper-key-management",children:"Improper key management"}),"\n",(0,i.jsx)(n.p,{children:"Improper key management may lead to token loss. Mitigating such scenarios may be done by issuing backup keys allowing for recovery of accounts whose keys have been lost or deleted."}),"\n",(0,i.jsxs)(n.h3,{id:"loss-of-fullaccess-key",children:["Loss of ",(0,i.jsx)(n.code,{children:"FullAccess"})," key"]}),"\n",(0,i.jsxs)(n.p,{children:["A user may lose their private key of a ",(0,i.jsx)(n.code,{children:"FullAccess"})," key pair for an account with no other keys. Kh\xf4ng ai c\xf3 th\u1ec3 l\u1ea5y l\u1ea1i s\u1ed1 ti\u1ec1n. Ti\u1ec1n s\u1ebd v\u1eabn b\u1ecb kh\xf3a trong t\xe0i kho\u1ea3n m\xe3i m\xe3i."]}),"\n",(0,i.jsxs)(n.h3,{id:"loss-of-functioncall-access-key",children:["Loss of ",(0,i.jsx)(n.code,{children:"FunctionCall"})," access key"]}),"\n",(0,i.jsxs)(n.p,{children:["M\u1ed9t account c\xf3 th\u1ec3 xo\xe1 m\u1ed9t v\xe0 ch\u1ec9 m\u1ed9t ",(0,i.jsx)(n.code,{children:"FunctionCall"})," access key. Kh\xf4ng ai c\xf3 th\u1ec3 l\u1ea5y l\u1ea1i s\u1ed1 ti\u1ec1n. Ti\u1ec1n s\u1ebd v\u1eabn b\u1ecb kh\xf3a trong t\xe0i kho\u1ea3n m\xe3i m\xe3i."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"refunding-deleted-accounts",children:"Refunding deleted accounts"}),"\n",(0,i.jsx)(n.p,{children:"When a refund receipt is issued for an account, if that account no longer exists, the funds will be dispersed among validators proportional to their stake in the current epoch."}),"\n",(0,i.jsx)(n.h3,{id:"deleting-account-with-non-existent-beneficiary",children:"Deleting account with non-existent beneficiary"}),"\n",(0,i.jsx)(n.p,{children:"When you delete an account, you must assign a beneficiary. Sau khi x\xf3a, bi\xean lai chuy\u1ec3n kho\u1ea3n s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o v\xe0 g\u1eedi \u0111\u1ebfn t\xe0i kho\u1ea3n ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng. N\u1ebfu t\xe0i kho\u1ea3n ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng kh\xf4ng t\u1ed3n t\u1ea1i, bi\xean lai ho\xe0n ti\u1ec1n s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o v\xe0 g\u1eedi tr\u1edf l\u1ea1i t\xe0i kho\u1ea3n ban \u0111\u1ea7u. V\xec t\xe0i kho\u1ea3n ban \u0111\u1ea7u \u0111\xe3 b\u1ecb x\xf3a, ti\u1ec1n s\u1ebd \u0111\u01b0\u1ee3c ph\xe2n chia gi\u1eefa c\xe1c validator."}),"\n",(0,i.jsx)(n.h3,{id:"account-with-zero-balance-is-garbage-collected-just-before-it-receives-refund",children:"Account with zero balance is garbage-collected, just before it receives refund"}),"\n",(0,i.jsxs)(n.p,{children:["If an account ",(0,i.jsx)(n.code,{children:"A"})," transfers all of its funds to another account ",(0,i.jsx)(n.code,{children:"B"})," and account ",(0,i.jsx)(n.code,{children:"B"})," does not exist, a refund receipt will be generated for account ",(0,i.jsx)(n.code,{children:"A"}),". During the period of this round trip, account ",(0,i.jsx)(n.code,{children:"A"})," is vulnerable to deletion by garbage collection activities on the network. If account ",(0,i.jsx)(n.code,{children:"A"})," is deleted before the refund receipt arrives, the funds will be dispersed among validators."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"failed-function-calls-in-batches",children:"Failed function calls in batches"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"When designing a smart contract, you should always consider the asynchronous nature of NEAR Protocol."})}),"\n",(0,i.jsxs)(n.p,{children:["If a contract function ",(0,i.jsx)(n.code,{children:"f1"})," calls two (or more) other functions ",(0,i.jsx)(n.code,{children:"f2"})," and ",(0,i.jsx)(n.code,{children:"f3"}),", and at least one of these functions, ",(0,i.jsx)(n.code,{children:"f2"})," and ",(0,i.jsx)(n.code,{children:"f3"})," fails, then tokens will be refunded from the function that failed, but tokens will be appropriately credited to the function(s) which succeed."]}),"\n",(0,i.jsx)(n.p,{children:"The successful call's tokens may be considered lost depending on your use case if a single failure in the batch means the whole batch failed."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var i=t(67294);const o={},s=i.createContext(o);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);