"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90582],{1714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(85893),o=n(11151);const s={},a=void 0,i={id:"primitives/linkdrop/web-app/transfer-nft",title:"transfer-nft",description:"The Wallet object comes from our quickstart template",source:"@site/../docs/7.primitives/linkdrop/web-app/transfer-nft.md",sourceDirName:"7.primitives/linkdrop/web-app",slug:"/primitives/linkdrop/web-app/transfer-nft",permalink:"/primitives/linkdrop/web-app/transfer-nft",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/web-app/transfer-nft.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1706635251e3,frontMatter:{}},c={},l=[];function p(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst KEYPOM_CONTRACT_ADDRESS = "v2.keypom.near";\nconst NFT_CONTRACT_ADDRESS = "nft.primitives.near";\nconst NFT_TOKEN_ID = "1";\nconst DROP_AMOUNT = "10000000000000000000000";\n\nconst nftConnectedWallet = new Wallet({ createAccessKeyFor: NFT_CONTRACT_ADDRESS }); \n\nawait wallet.callMethod({\n  method: "nft_transfer_call",\n  contractId: NFT_CONTRACT_ADDRESS,\n  args: {\n    receiver_id: keypomContract,\n    token_id: nftTokenId,\n    msg: dropId.toString()\n  },\n  deposit: 1,\n  gas: "100000000000000",\n});\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["The ",(0,r.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(67294);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);