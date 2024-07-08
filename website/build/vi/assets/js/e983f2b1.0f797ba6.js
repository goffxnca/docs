"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[895],{41296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var l=n(85893),a=n(11151);const s={},r="Wallet Selector",o={id:"tools/wallet-selector",title:"Wallet Selector",description:"An easy-to-navigate modal that allows users to select their preferred wallet to easily interact with the NEAR protocol.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/4.tools/wallet-selector.md",sourceDirName:"4.tools",slug:"/tools/wallet-selector",permalink:"/vi/tools/wallet-selector",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/wallet-selector.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{},sidebar:"tools",previous:{title:"NEAR CLI RS",permalink:"/vi/tools/near-cli-rs"},next:{title:"Wallets",permalink:"/vi/tools/wallets"}},c={},i=[{value:"Framework agnostic",id:"framework-agnostic",level:2},{value:"Unlocking the wallet ecosystem",id:"unlocking-the-wallet-ecosystem",level:3},{value:"Install",id:"install",level:2},{value:"Setup Wallet Selector",id:"setup-wallet-selector",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Wallet API",id:"wallet-api",level:2},{value:"Sign in",id:"sign-in",level:3},{value:"Sign out",id:"sign-out",level:3},{value:"Get accounts",id:"get-accounts",level:3},{value:"Verify Owner",id:"verify-owner",level:3},{value:"Sign and send transaction",id:"sign-and-send-transaction",level:3},{value:"Sign and send transactions",id:"sign-and-send-transactions",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"wallet-selector",children:"Wallet Selector"}),"\n",(0,l.jsx)(t.p,{children:"An easy-to-navigate modal that allows users to select their preferred wallet to easily interact with the NEAR protocol."}),"\n",(0,l.jsx)(t.p,{children:"Launched in March 2022 by the NEAR Foundation, this simple modal will appear whenever users are given the option to \u201cConnect Wallet\u201d to the NEAR blockchain."}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.img,{alt:"Preview",src:n(40370).Z+"",width:"1915",height:"1005"})," ",(0,l.jsxs)(t.em,{children:["Initial screen of ",(0,l.jsx)(t.a,{href:"https://near.github.io/wallet-selector/",children:"Wallet Selector"})]})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h2,{id:"framework-agnostic",children:"Framework agnostic"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"https://reactjs.org/",children:"React"})," / ",(0,l.jsx)(t.a,{href:"https://nextjs.org/",children:"Next.js"})," and ",(0,l.jsx)(t.a,{href:"https://angular.io/",children:"Angular"})," variations of the ",(0,l.jsx)(t.a,{href:"https://github.com/near-examples/guest-book-examples/",children:"Guest Book"})," dApp can be found in the ",(0,l.jsx)(t.a,{href:"https://github.com/near/wallet-selector/tree/main/examples",children:(0,l.jsx)(t.code,{children:"examples"})})," directory. Developers can use these to gain a concrete understanding of how to integrate NEAR Wallet Selector into their own dApp."]}),"\n",(0,l.jsx)(t.h3,{id:"unlocking-the-wallet-ecosystem",children:"Unlocking the wallet ecosystem"}),"\n",(0,l.jsx)(t.p,{children:"Wallet Selector makes it easy for users to interact with dApps by providing an abstraction over various wallets and wallet types within the NEAR ecosystem."}),"\n",(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsxs)(t.p,{children:["You can check the current list of supported wallets in the ",(0,l.jsx)(t.a,{href:"https://github.com/near/wallet-selector/blob/main/README.md",children:"README.md"})," file of near/wallet-selector repository."]})}),"\n",(0,l.jsxs)(t.p,{children:["Thanks to NEAR\u2019s open and inclusive approach, other wallet developers can contribute to the NEAR ecosystem by following the documentation and instructions on the\xa0",(0,l.jsx)(t.a,{href:"https://github.com/near/wallet-selector",children:"NEAR Github repository"})," on how to add a new wallets to the Wallet Selector."]}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.p,{children:["To learn more on how to include new wallets for Wallet Selector you can check the listing criteria for third party wallets on this ",(0,l.jsx)(t.a,{href:"https://github.com/near/wallet-selector/blob/main/CONTRIBUTING.md#listing-criteria-for-third-party-wallet-on-wallet-selector",children:"link"}),"."]})}),"\n",(0,l.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,l.jsx)(t.p,{children:"The easiest way to use NEAR Wallet Selector is to install the core package from the NPM registry, some packages may require near-api-js v0.44.2 or above check them at packages."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"npm install near-api-js@^0.44.2\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"npm install @near-wallet-selector/core\n"})}),"\n",(0,l.jsx)(t.p,{children:"Next, you'll need to install the wallets you want to support:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"npm install \\\n  @near-wallet-selector/near-wallet \\\n  @near-wallet-selector/my-near-wallet \\\n  @near-wallet-selector/sender \\\n  @near-wallet-selector/nearfi \\\n  @near-wallet-selector/here-wallet \\\n  @near-wallet-selector/math-wallet \\\n  @near-wallet-selector/nightly \\\n  @near-wallet-selector/meteor-wallet \\\n  @near-wallet-selector/ledger \\\n  @near-wallet-selector/wallet-connect \\\n  @near-wallet-selector/nightly-connect \\\n  @near-wallet-selector/default-wallets \\\n  @near-wallet-selector/coin98-wallet\n"})}),"\n",(0,l.jsx)(t.h2,{id:"setup-wallet-selector",children:"Setup Wallet Selector"}),"\n",(0,l.jsxs)(t.p,{children:["Optionally, you can install our ",(0,l.jsx)(t.a,{href:"https://www.npmjs.com/package/@near-wallet-selector/modal-ui",children:(0,l.jsx)(t.code,{children:"modal-ui"})})," or ",(0,l.jsx)(t.a,{href:"https://www.npmjs.com/package/@near-wallet-selector/modal-ui-js",children:(0,l.jsx)(t.code,{children:"modal-ui-js"})})," package for a pre-built interface that wraps the ",(0,l.jsx)(t.code,{children:"core"})," API and presents the supported wallets:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"npm install @near-wallet-selector/modal-ui\n"})}),"\n",(0,l.jsx)(t.p,{children:"Then use it in your dApp:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-ts",children:'import { setupWalletSelector } from "@near-wallet-selector/core";\nimport { setupModal } from "@near-wallet-selector/modal-ui";\nimport { setupNearWallet } from "@near-wallet-selector/near-wallet";\n\nconst selector = await setupWalletSelector({\n  network: "testnet",\n  modules: [setupNearWallet()],\n});\n\nconst modal = setupModal(selector, {\n  contractId: "test.testnet",\n});\n\nmodal.show();\n'})}),"\n",(0,l.jsxs)(t.admonition,{title:"Required CSS",type:"info",children:[(0,l.jsx)(t.p,{children:"To integrate the Wallet Selector, you also need to include the required CSS:"}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:'import "@near-wallet-selector/modal-ui/styles.css"\n'})})]}),"\n",(0,l.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,l.jsxs)(t.p,{children:["The API reference of the selector can be found ",(0,l.jsx)(t.a,{href:"https://github.com/near/wallet-selector/blob/main/packages/core/docs/api/selector.md",children:(0,l.jsx)(t.code,{children:"here"})})]}),"\n",(0,l.jsx)(t.h2,{id:"wallet-api",children:"Wallet API"}),"\n",(0,l.jsx)(t.h3,{id:"sign-in",children:"Sign in"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-ts",children:'// NEAR Wallet.\n(async () => {\n  const wallet = await selector.wallet("my-near-wallet");\n  const accounts = await wallet.signIn({ contractId: "test.testnet" });\n})();\n'})}),"\n",(0,l.jsx)(t.h3,{id:"sign-out",children:"Sign out"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-ts",children:'(async () => {\n  const wallet = await selector.wallet("my-near-wallet");\n  await wallet.signOut();\n})();\n'})}),"\n",(0,l.jsx)(t.h3,{id:"get-accounts",children:"Get accounts"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-ts",children:'(async () => {\n  const wallet = await selector.wallet("my-near-wallet");\n  const accounts = await wallet.getAccounts();\n  console.log(accounts); // [{ accountId: "test.testnet" }]\n})();\n'})}),"\n",(0,l.jsx)(t.h3,{id:"verify-owner",children:"Verify Owner"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-ts",children:'// MyNearWallet\n(async () => {\n  const wallet = await selector.wallet("my-near-wallet");\n  await wallet.verifyOwner({\n    message: "Test message",\n  });\n})();\n'})}),"\n",(0,l.jsx)(t.h3,{id:"sign-and-send-transaction",children:"Sign and send transaction"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-ts",children:'(async () => {\n  const wallet = await selector.wallet("my-near-wallet");\n  await wallet.signAndSendTransaction({\n    actions: [\n      {\n        type: "FunctionCall",\n        params: {\n          methodName: "addMessage",\n          args: { text: "Hello World!" },\n          gas: "30000000000000",\n          deposit: "10000000000000000000000",\n        },\n      },\n    ],\n  });\n})();\n'})}),"\n",(0,l.jsx)(t.h3,{id:"sign-and-send-transactions",children:"Sign and send transactions"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-ts",children:'(async () => {\n  const wallet = await selector.wallet("my-near-wallet");\n  await wallet.signAndSendTransactions({\n    transactions: [\n      {\n        receiverId: "guest-book.testnet",\n        actions: [\n          {\n            type: "FunctionCall",\n            params: {\n              methodName: "addMessage",\n              args: { text: "Hello World!" },\n              gas: "30000000000000",\n              deposit: "10000000000000000000000",\n            },\n          },\n        ],\n      },\n    ],\n  });\n})();\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},40370:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/wallet-selector-preview-07cd27d7a584df190dcc3420b1d9654e.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var l=n(67294);const a={},s=l.createContext(a);function r(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);