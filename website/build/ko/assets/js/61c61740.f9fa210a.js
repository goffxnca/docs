"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2002],{83266:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=i(85893),t=i(11151);const c={id:"token-loss",title:"\ud1a0\ud070 \uc190\uc2e4 \ud53c\ud558\uae30",sidebar_label:"\ud1a0\ud070 \uc190\uc2e4 \ud53c\ud558\uae30"},o=void 0,r={id:"integrations/errors/token-loss",title:"\ud1a0\ud070 \uc190\uc2e4 \ud53c\ud558\uae30",description:"\uc8fc\uc758\ud558\uc138\uc694! \ud1a0\ud070\uc744 \uc783\ub294\ub2e4\ub294 \uac83\uc740 \ub3c8\uc744 \uc783\ub294\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4!",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/6.integrations/errors/token-loss.md",sourceDirName:"6.integrations/errors",slug:"/integrations/errors/token-loss",permalink:"/ko/integrations/errors/token-loss",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrations/errors/token-loss.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"token-loss",title:"\ud1a0\ud070 \uc190\uc2e4 \ud53c\ud558\uae30",sidebar_label:"\ud1a0\ud070 \uc190\uc2e4 \ud53c\ud558\uae30"},sidebar:"exchanges",previous:{title:"\uc18c\uc2a4 \ucf54\ub4dc \uc870\uc0ac",permalink:"/ko/integrations/errors/error-implementation"},next:{title:"\ud1b5\ud569 FAQ",permalink:"/ko/integrations/faq"}},l={},d=[{value:"Improper key management",id:"improper-key-management",level:2},{value:"Loss of <code>FullAccess</code> key",id:"loss-of-fullaccess-key",level:3},{value:"Loss of <code>FunctionCall</code> access key",id:"loss-of-functioncall-access-key",level:3},{value:"Refunding deleted accounts",id:"refunding-deleted-accounts",level:2},{value:"Deleting account with non-existent beneficiary",id:"deleting-account-with-non-existent-beneficiary",level:3},{value:"Account with zero balance is garbage-collected, just before it receives refund",id:"account-with-zero-balance-is-garbage-collected-just-before-it-receives-refund",level:3},{value:"Failed function calls in batches",id:"failed-function-calls-in-batches",level:2}];function a(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"\uc8fc\uc758\ud558\uc138\uc694! \ud1a0\ud070\uc744 \uc783\ub294\ub2e4\ub294 \uac83\uc740 \ub3c8\uc744 \uc783\ub294\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4!"})}),"\n",(0,s.jsx)(n.p,{children:"\uc5ec\ub7ec \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c \ud1a0\ud070 \uc190\uc2e4\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc2dc\ub098\ub9ac\uc624\ub294 \uba87 \uac00\uc9c0 \uad00\ub828 \ud074\ub798\uc2a4\ub85c \uadf8\ub8f9\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\ubd80\uc801\uc808\ud55c \ud0a4 \uad00\ub9ac"}),"\n",(0,s.jsx)(n.li,{children:"\uc0ad\uc81c\ub41c \uacc4\uc815 \ud658\ubd88"}),"\n",(0,s.jsx)(n.li,{children:"\ubc30\uce58\uc5d0\uc11c \uc2e4\ud328\ud55c \ud568\uc218 \ud638\ucd9c"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"improper-key-management",children:"Improper key management"}),"\n",(0,s.jsx)(n.p,{children:"\ubd80\uc801\uc808\ud55c \ud0a4 \uad00\ub9ac\ub294 \ud1a0\ud070 \uc190\uc2e4\ub85c \uc774\uc5b4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud0a4\ub97c \ubd84\uc2e4\ud558\uac70\ub098 \uc0ad\uc81c\ud55c \uacc4\uc815\uc744 \ubcf5\uad6c\ud560 \uc218 \uc788\ub294 \ubc31\uc5c5 \ud0a4\ub97c \ubc1c\uae09\ud558\uc5ec \uc774\ub7ec\ud55c \uc2dc\ub098\ub9ac\uc624\ub85c \uc778\ud55c \uc190\uc2e4\uc744 \ucd5c\uc18c\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.h3,{id:"loss-of-fullaccess-key",children:["Loss of ",(0,s.jsx)(n.code,{children:"FullAccess"})," key"]}),"\n",(0,s.jsxs)(n.p,{children:["\uc0ac\uc6a9\uc790\ub294 ",(0,s.jsx)(n.code,{children:"FullAccess"})," \ud0a4 \uc678\uc5d0 \ub2e4\ub978 \ud0a4\uac00 \uc5c6\ub294 \uacc4\uc815\uc5d0\uc11c \ud574\ub2f9 \ud0a4 \uc30d\uc758 \uac1c\uc778 \ud0a4\ub97c \uc783\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \uc544\ubb34\ub3c4 \uc790\uae08\uc744 \ud68c\uc218\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc790\uae08\uc740 \uacc4\uc815\uc5d0 \uc601\uc6d0\ud788 \uc7a0\uae30\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.h3,{id:"loss-of-functioncall-access-key",children:["Loss of ",(0,s.jsx)(n.code,{children:"FunctionCall"})," access key"]}),"\n",(0,s.jsxs)(n.p,{children:["\uacc4\uc815 \ub0b4 \ud558\ub098\ubfd0\uc778 ",(0,s.jsx)(n.code,{children:"FunctionCall"})," \uc561\uc138\uc2a4 \ud0a4\uac00 \uc0ad\uc81c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \uc544\ubb34\ub3c4 \uc790\uae08\uc744 \ud68c\uc218\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc790\uae08\uc740 \uacc4\uc815\uc5d0 \uc601\uc6d0\ud788 \uc7a0\uae30\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"refunding-deleted-accounts",children:"Refunding deleted accounts"}),"\n",(0,s.jsx)(n.p,{children:"\uacc4\uc815\uc5d0 \ub300\ud55c \ud658\ubd88 Receipt\uac00 \ubc1c\ud589\ub420 \ub54c \ud574\ub2f9 \uacc4\uc815\uc774 \ub354 \uc774\uc0c1 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0, \uc790\uae08\uc740 \ud604\uc7ac \uc5d0\ud3ec\ud06c\uc758 \uc9c0\ubd84\uc5d0 \ube44\ub840\ud558\uc5ec \ubc38\ub9ac\ub370\uc774\ud130\ub4e4\uc5d0\uac8c \ubd84\ubc30\ub429\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"deleting-account-with-non-existent-beneficiary",children:"Deleting account with non-existent beneficiary"}),"\n",(0,s.jsx)(n.p,{children:"\uacc4\uc815\uc744 \uc0ad\uc81c\ud560 \ub54c, \uc218\ub839\uc778\uc744 \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \uc0ad\uc81c\ub418\uba74 \uc1a1\uae08 Receipt\uac00 \uc0dd\uc131\ub418\uc5b4 \uc218\ub839\uc778 \uacc4\uc815\uc73c\ub85c \uc804\uc1a1\ub429\ub2c8\ub2e4. \uc218\ub839\uc778 \uacc4\uc815\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0, \ud658\ubd88 Receipt \uc0dd\uc131\ub418\uc5b4 \uc6d0\ub798 \uacc4\uc815\uc73c\ub85c \ub2e4\uc2dc \uc804\uc1a1\ub429\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \uc774\ub54c\ub294 \uc6d0\ub798 \uacc4\uc815\uc774 \uc774\ubbf8 \uc0ad\uc81c\ub41c \uc0c1\ud0dc\uc77c \uac83\uc774\ubbc0\ub85c, \uc790\uae08\uc740 \ubc38\ub9ac\ub370\uc774\ud130 \uac04\uc5d0 \ubd84\ubc30\ub429\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"account-with-zero-balance-is-garbage-collected-just-before-it-receives-refund",children:"Account with zero balance is garbage-collected, just before it receives refund"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"A"})," \uacc4\uc815\uc774 \ubaa8\ub4e0 \uc790\uae08\uc744 \ub2e4\ub978 \uacc4\uc815 ",(0,s.jsx)(n.code,{children:"B"}),"\ub85c \uc774\uccb4\ud558\uc600\ub294\ub370 ",(0,s.jsx)(n.code,{children:"B"})," \uacc4\uc815\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0, ",(0,s.jsx)(n.code,{children:"A"})," \uacc4\uc815\uc5d0 \ub300\ud55c \ud658\ubd88 Receipt\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774 \uae30\uac04 \ub3d9\uc548 ",(0,s.jsx)(n.code,{children:"A"})," \uacc4\uc815\uc740 \ub124\ud2b8\uc6cc\ud06c\uc758 \uac00\ube44\uc9c0 \uceec\ub809\uc158 \ud65c\ub3d9\uc5d0 \uc758\ud574 \uc0ad\uc81c\ub418\uae30 \uc27d\uc2b5\ub2c8\ub2e4. \ud658\ubd88 Receipt\uac00 \ub3c4\ucc29\ud558\uae30 \uc804\uc5d0 ",(0,s.jsx)(n.code,{children:"A"})," \uacc4\uc815\uc774 \uc0ad\uc81c\ub418\uba74 \uc790\uae08\uc740 \ubc38\ub9ac\ub370\uc774\ud130\uc5d0\uac8c \ubd84\ubc30\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"failed-function-calls-in-batches",children:"Failed function calls in batches"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc124\uacc4\ud560 \ub54c, NEAR \ud504\ub85c\ud1a0\ucf5c\uc758 \ube44\ub3d9\uae30\uc801\uc778 \ud2b9\uc131\uc744 \ud56d\uc0c1 \uace0\ub824\ud574\uc57c \ud569\ub2c8\ub2e4."})}),"\n",(0,s.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8 \ud568\uc218 ",(0,s.jsx)(n.code,{children:"f1"}),"\uc774 \ub450 \uac1c(\ub610\ub294 \uadf8 \uc774\uc0c1)\uc758 \ub2e4\ub978 \ud568\uc218 ",(0,s.jsx)(n.code,{children:"f2"}),"\uc640 ",(0,s.jsx)(n.code,{children:"f3"}),"\ub97c \ud638\ucd9c\ud558\uace0, \uc774\ub7ec\ud55c \ud568\uc218 \uc911 \ud558\ub098 \uc774\uc0c1\uc774 \uc2e4\ud328\ud558\uba74, \uc2e4\ud328\ud55c \ud568\uc218\uc5d0\uc11c\ub294 \ud1a0\ud070\uc774 \ud658\ubd88\ub418\uc9c0\ub9cc, \uc131\uacf5\ud55c \ud568\uc218\uc5d0 \ub300\ud574\uc11c\ub294 \ud1a0\ud070\uc774 \uc801\uc808\ud558\uac8c \uc804\uc1a1\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\ubc30\uce58 \ub0b4 \ub2e8\uc77c\ud55c \uc2e4\ud328\uac00 \uc804\uccb4 \ubc30\uce58 \uc2e4\ud328\ub97c \uc758\ubbf8\ud558\ub294 \uacbd\uc6b0, \uc0ac\uc6a9 \uc0ac\ub840\uc5d0 \ub530\ub77c \uc131\uacf5\uc801\uc778 \ud638\ucd9c\uc5d0\uc11c\uc758 \ud1a0\ud070\uc774 \uc190\uc2e4\ub41c \uac83\uc73c\ub85c \uc0dd\uac01\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var s=i(67294);const t={},c=s.createContext(t);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);