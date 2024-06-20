"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3530],{46395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(85893),o=t(11151);const r={id:"frontend",title:"Frontends for Web3 dApps",sidebar_label:"Frontends"},a=void 0,s={id:"build/web3-apps/frontend",title:"Frontends for Web3 dApps",description:"There are 3 major options to choose from when you're building a frontend for your Web3 dApp, each with their own set of pros and cons.",source:"@site/../docs/2.build/4.web3-apps/frontend.md",sourceDirName:"2.build/4.web3-apps",slug:"/build/web3-apps/frontend",permalink:"/ko/build/web3-apps/frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/4.web3-apps/frontend.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1718898395e3,frontMatter:{id:"frontend",title:"Frontends for Web3 dApps",sidebar_label:"Frontends"},sidebar:"build",previous:{title:"\u2b50 Quickstart a WebApp",permalink:"/ko/build/web3-apps/quickstart"},next:{title:"Integrating Contracts",permalink:"/ko/build/web3-apps/integrate-contracts"}},l={},d=[{value:"Standard Web App",id:"standard-web-app",level:2},{value:"Pros",id:"pros",level:4},{value:"Cons",id:"cons",level:4},{value:"Integration",id:"integration",level:4},{value:"Decentralized Hosting",id:"decentralized-hosting",level:2},{value:"BOS (SocialVM)",id:"bos-socialvm",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"There are 3 major options to choose from when you're building a frontend for your Web3 dApp, each with their own set of pros and cons.\nThis overview presents and summarizes these options so you can select the right solution for your UI."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#standard-web-app",children:"Standard Web App"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#decentralized-hosting",children:"Decentralized Hosting"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#bos-socialvm",children:"BOS (SocialVM)"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"standard-web-app",children:"Standard Web App"}),"\n",(0,i.jsx)(n.p,{children:"Even though your UI layer won't be decentralized, your backend layer (business logic, stored data, etc) will be decentralized via smart contracts. This will be the most convenient option for most applications due to having zero technical limitations or performance impact. However, it might be a deal breaker if you require your entire stack to be decentralized."}),"\n",(0,i.jsx)(n.h4,{id:"pros",children:"Pros"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Build a standard web app like you normally would without any technical limitations."}),"\n",(0,i.jsx)(n.li,{children:"Works with any framework and combination of libraries."}),"\n",(0,i.jsx)(n.li,{children:"Supports SSR if using something like Next JS or Svelte Kit."}),"\n",(0,i.jsx)(n.li,{children:"Will have best performance overall."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"cons",children:"Cons"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Your web app will need to be hosted by a Web 2 hosting provider (e.g.: Vercel, AWS, etc)."}),"\n",(0,i.jsx)(n.li,{children:"This means your UI layer won't be decentralized."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"integration",children:"Integration"}),"\n",(0,i.jsxs)(n.p,{children:["It's highly recommend to integrate with ",(0,i.jsx)(n.a,{href:"../../4.tools/wallet-selector.md",children:"Wallet Selector"})," as your primary means of interacting with smart contracts. It's the easiest way to get up and running, allowing users to connect a wallet and send signed transactions. The only use case Wallet Selector doesn't cover is sending ",(0,i.jsx)(n.code,{children:"view"})," transactions for users who haven't connected a wallet yet."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Check ",(0,i.jsx)(n.a,{href:"integrate-contracts.md",children:"this article"})," to learn how to integrate smart contracts to your frontend, using ",(0,i.jsx)(n.a,{href:"../../4.tools/wallet-selector.md",children:"Wallet Selector"})," and ",(0,i.jsx)(n.a,{href:"../../4.tools/near-api-js/quick-reference.md",children:"NEAR API JS"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"decentralized-hosting",children:"Decentralized Hosting"}),"\n",(0,i.jsx)(n.p,{children:"If you require your entire stack to be decentralized, this will be the best choice. However, the potential technical limitations (no SSR or meta frameworks like Next JS) are worth considering."}),"\n",(0,i.jsxs)(n.p,{children:["To learn more, you can check other decentralized hosting options like ",(0,i.jsx)(n.a,{href:"https://fleek.co/",children:"Fleek"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"bos-socialvm",children:"BOS (SocialVM)"}),"\n",(0,i.jsxs)(n.p,{children:["BOS (UI) was an experiment in hosting UI code on chain and creating an ecosystem of composable and remixable components for dApp development.\nAn example BOS VM website is ",(0,i.jsx)(n.a,{href:"https://near.social",children:"near.social"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["We no longer recommend building on it, but ",(0,i.jsx)(n.a,{href:"integrate-components.md",children:"this article"})," details how BOS components could be integrated into your frontend."]}),"\n",(0,i.jsx)(n.admonition,{title:"What is the state of BOS?",type:"warning",children:(0,i.jsx)(n.p,{children:"We no longer recommend building on BOS due to its limited capabilities and discontinued security maintenance. Developers with active projects on BOS are encouraged to migrate to another deployment strategy."})}),"\n",(0,i.jsx)(n.p,{children:"The use of a VM was intended to allow embedding untrusted third-party components into your experience in a way that their access to the full browser context and the ability to manipulate the behavior of your dApp was limited."}),"\n",(0,i.jsx)(n.p,{children:"Unfortunately numerous exploits have been discovered and patched, and the nature of these exploits along with the quirks of javascript make it likely that this will be a continuing trend."}),"\n",(0,i.jsx)(n.p,{children:"It is not tenable to proactively discover and mitigate vulnerabilities in a comprehensive manner where the VM can be seen as providing a security guarantee. Coupling that with the significant tradeoffs in capabilities of applications built for the VM, we do not recommend continued usage of BOS as a development platform."}),"\n",(0,i.jsx)(n.admonition,{title:"VM vulnerabilities",type:"info",children:(0,i.jsxs)(n.p,{children:["For examples of previous discovered vulnerabilities, view the ",(0,i.jsx)(n.a,{href:"https://github.com/NearSocial/VM/blob/master/CHANGELOG.md",children:"VM changelog"})," going back to ",(0,i.jsx)(n.a,{href:"https://github.com/NearSocial/VM/blob/master/CHANGELOG.md#251",children:"v2.5.1"})," paying attention to lines tagged as ",(0,i.jsx)(n.code,{children:"FIX"})," on issues ",(0,i.jsx)(n.code,{children:"Reported by BrunoModificato from OtterSec"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(67294);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);