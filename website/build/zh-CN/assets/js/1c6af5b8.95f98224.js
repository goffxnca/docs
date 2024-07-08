"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1231],{68445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(85893),i=t(11151);const s={id:"frontend",title:"Frontends for Web3 dApps",sidebar_label:"Frontends"},o=void 0,a={id:"build/web3-apps/frontend",title:"Frontends for Web3 dApps",description:"When building decentralized web applications (dApps), developers have two primary options for connecting a front-end user interface (UI) to a smart contract backend. Each option offers distinct advantages and disadvantages, tailored to different project requirements and goals.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/4.web3-apps/frontend.md",sourceDirName:"2.build/4.web3-apps",slug:"/build/web3-apps/frontend",permalink:"/zh-CN/build/web3-apps/frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/4.web3-apps/frontend.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,frontMatter:{id:"frontend",title:"Frontends for Web3 dApps",sidebar_label:"Frontends"},sidebar:"build",previous:{title:"\u2b50 Quickstart a WebApp",permalink:"/zh-CN/build/web3-apps/quickstart"},next:{title:"Integrating Contracts",permalink:"/zh-CN/build/web3-apps/integrate-contracts"}},l={},d=[{value:"Standard Web 2 Frontend",id:"standard-web-2-frontend",level:2},{value:"Decentralized Frontend Solutions",id:"decentralized-frontend-solutions",level:2}];function c(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"When building decentralized web applications (dApps), developers have two primary options for connecting a front-end user interface (UI) to a smart contract backend. Each option offers distinct advantages and disadvantages, tailored to different project requirements and goals."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#standard-web-2-frontend",children:"Standard Web2 Frontend"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#decentralized-frontend-solutions",children:"Decentralized Frontend"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"standard-web-2-frontend",children:"Standard Web 2 Frontend"}),"\n",(0,r.jsx)(n.p,{children:"While your user interface layer will remain centralized, the backend layer\u2014including business logic and stored data\u2014will be decentralized through smart contracts. This approach offers optimal convenience for most applications as it eliminates technical constraints and does not impact performance. However, if your requirement is for full decentralization across the entire stack, this configuration may not be suitable."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Pros:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Develop a standard web application without any technical restrictions."}),"\n",(0,r.jsx)(n.li,{children:"Compatible with any framework and library combination."}),"\n",(0,r.jsx)(n.li,{children:"Supports server-side rendering with platforms like Next.js or SvelteKit."}),"\n",(0,r.jsx)(n.li,{children:"Delivers the best overall performance."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Cons:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Requires hosting through a traditional Web 2 provider (e.g., Vercel, AWS)."}),"\n",(0,r.jsx)(n.li,{children:"The user interface layer will not be decentralized."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"How to Build:"})}),"\n",(0,r.jsx)(n.p,{children:"When building a frontend that can connect with the NEAR blockchain using standard web2 tooling will require you to import two dependencies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/zh-CN/tools/near-api-js/quick-reference",children:"NEAR API JS"})," - A JavaScript API tool that allows frontend clients the ability to view and retrieve data directly from the blockchain."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/zh-CN/tools/wallet-selector",children:"Wallet Selector"})," - Wallet integration tool allowing developers to choose which wallets are supported and allows users to choose which wallet they would like to connect with."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/zh-CN/build/web3-apps/integrate-contracts",children:"Checkout this article"})," to learn how to integrate smart contracts to your frontend, using ",(0,r.jsx)(n.a,{href:"/zh-CN/tools/wallet-selector",children:"Wallet Selector"})," and ",(0,r.jsx)(n.a,{href:"/zh-CN/tools/near-api-js/quick-reference",children:"NEAR API JS"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"decentralized-frontend-solutions",children:"Decentralized Frontend Solutions"}),"\n",(0,r.jsx)(n.p,{children:"If you need full decentralization of your entire stack, this option is ideal. However, consider the possible technical constraints, such as the absence of server-side rendering or meta frameworks like Next.js."}),"\n",(0,r.jsx)(n.p,{children:"Although the ecosystem for developing decentralized frontends is still maturing, here are some notable projects for you to evaluate and consider:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:(0,r.jsx)("div",{align:"center",children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://docs.ipfs.tech/how-to/websites-on-ipfs/single-page-website/",children:(0,r.jsx)(n.strong,{children:"IPFS"})})}),(0,r.jsx)(n.td,{children:"A peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://docs.fleek.co/tutorials/hosting/",children:(0,r.jsx)(n.strong,{children:"Fleek"})})}),(0,r.jsx)(n.td,{children:"Hosts websites on IPFS with a user-friendly interface and continuous deployment from popular repositories."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.arweave.org/build",children:(0,r.jsx)(n.strong,{children:"Arweave"})})}),(0,r.jsx)(n.td,{children:"Arweave lets you build quickly and simply with permanent storage. You can store anything from files to fully decentralized web applications."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://web4.near.page/",children:(0,r.jsx)(n.strong,{children:"Web4"})})}),(0,r.jsx)(n.td,{children:"Web4 is a new way to distribute decentralized apps on NEAR Protocol. Deploy single WASM smart contract to deploy an entire web application."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.a,{href:"https://near.social",children:[(0,r.jsx)(n.strong,{children:"NEAR Social"})," ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"(aka B.O.S. Components)"})})]})}),(0,r.jsx)(n.td,{children:"An experimental platform that allows users to build and deploy multi-chain decentralized UI experiences."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Pros:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Decentralized frontends are less susceptible to single points of failure, making them more resistant to attacks and server downtimes"}),"\n",(0,r.jsx)(n.li,{children:"By decentralizing the hosting of your frontend, you minimize the risk of content being censored or blocked by centralized authorities."}),"\n",(0,r.jsx)(n.li,{children:"Users might trust a decentralized application more, knowing that it operates on a transparent and immutable blockchain."}),"\n",(0,r.jsx)(n.li,{children:"Data displayed on the frontend is more likely to be accurate and tamper-proof since it's typically fetched directly from the blockchain."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Cons:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Implementing a decentralized frontend can be more complex than traditional web development, requiring knowledge of specific technologies like IPFS, Arweave, or blockchain interactions."}),"\n",(0,r.jsx)(n.li,{children:"Decentralized networks can face issues such as latency or lower speeds compared to traditional centralized servers, potentially affecting user experience."}),"\n",(0,r.jsx)(n.li,{children:"The ecosystem for developing decentralized frontends is still maturing, which means there might be fewer tools and libraries available compared to traditional web development."}),"\n",(0,r.jsx)(n.li,{children:"While decentralized storage costs have been decreasing, they can still be higher than traditional hosting, especially if the dApp generates a lot of data transactions."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);