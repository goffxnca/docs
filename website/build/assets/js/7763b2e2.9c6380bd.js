"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9642],{89992:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(85893),a=i(11151);const r={id:"exchange-integration",title:"Exchange Integration",sidebar_label:"Exchange Integration"},c=void 0,o={id:"integrations/exchange-integration",title:"Exchange Integration",description:"Integration Reference",source:"@site/../docs/6.integrations/exchange-integration.md",sourceDirName:"6.integrations",slug:"/integrations/exchange-integration",permalink:"/integrations/exchange-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrations/exchange-integration.md",tags:[],version:"current",lastUpdatedBy:"matiasbenary",lastUpdatedAt:1720020198e3,frontMatter:{id:"exchange-integration",title:"Exchange Integration",sidebar_label:"Exchange Integration"},sidebar:"exchanges",next:{title:"Balance Changes",permalink:"/integrations/balance-changes"}},s={},l=[{value:"Integration Reference",id:"integration-reference",level:2},{value:"Transaction Reference Links",id:"transaction-reference-links",level:3},{value:"Blocks and Finality",id:"blocks-and-finality",level:2},{value:"Running an Archival Node",id:"running-an-archival-node",level:2},{value:"Staking and Delegation",id:"staking-and-delegation",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"integration-reference",children:"Integration Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/integrations/balance-changes",children:"Balance Changes"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/integrations/accounts",children:"Accounts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/integrations/fungible-tokens",children:"Fungible Tokens"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/integrations/implicit-accounts",children:"Implicit Accounts"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"transaction-reference-links",children:"Transaction Reference Links"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/concepts/protocol/transactions",children:"Basics"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Transactions",children:"Specifications"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/integrations/create-transactions",children:"Constructing Transactions"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"blocks-and-finality",children:"Blocks and Finality"}),"\n",(0,t.jsx)(n.p,{children:"Some important pieces of information regarding blocks and finality include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Expected block time is around 1s and expected time to finality is around 2s. The last final block can be queried by\nspecifying ",(0,t.jsx)(n.code,{children:'{"finality": "final"}'})," in the block query. For example, to get the latest final block on mainnet, one can run"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.mainnet.near.org method=block params:=\'{"finality":"final"}\' id=123 jsonrpc=2.0\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Block height are not necessarily continuous and certain heights may be skipped if, for example, a block producer for that height is offline. For example, after a block at height 100 is produced, the block at height 101 may be skipped. When block at height 102 is produced, its previous block is the block at height 100."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Some blocks may not include new chunks if, for example, the previous chunk producer is offline. Even though in the RPC\nreturn result every block will have non-empty ",(0,t.jsx)(n.code,{children:"chunks"})," field, it does not imply that there is a new chunk included in the block.\nThe way to tell whether the chunk is included in the block is to check whether ",(0,t.jsx)(n.code,{children:"height_included"})," in the chunk is the same\nas the height of the block."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-an-archival-node",children:"Running an Archival Node"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to configuration changes required in ",(0,t.jsx)(n.code,{children:"config.json"})," for archival node by referring to the documentation on ",(0,t.jsx)(n.a,{href:"https://near-nodes.io/archival/run-archival-node-with-nearup",children:"Run an Archival Node"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"staking-and-delegation",children:"Staking and Delegation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/nearprotocol/stakewars",children:"https://github.com/nearprotocol/stakewars"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/near/core-contracts",children:"https://github.com/near/core-contracts"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Got a question?",type:"tip",children:(0,t.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",target:"_blank",rel:"noopener noreferrer",children:" Ask it on StackOverflow! "})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var t=i(67294);const a={},r=t.createContext(a);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);