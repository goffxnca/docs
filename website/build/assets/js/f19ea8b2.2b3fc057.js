"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5402],{20524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(85893),s=n(11151);const a={},r=void 0,i={id:"build/primitives/dex/web-app/get-pools",title:"get-pools",description:"The Wallet object comes from our quickstart template",source:"@site/../docs/2.build/5.primitives/dex/web-app/get-pools.md",sourceDirName:"2.build/5.primitives/dex/web-app",slug:"/build/primitives/dex/web-app/get-pools",permalink:"/build/primitives/dex/web-app/get-pools",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dex/web-app/get-pools.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},c={},l=[];function p(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const AMM_CONTRACT_ADDRESS = \"v2.ref-finance.near\";\nconst wallet = new Wallet({ createAccessKeyFor: AMM_CONTRACT_ADDRESS });\n \nawait wallet.viewMethod({\n  method: 'get_pools',\n  args: {\n    from_index: 0,\n    limit: 1000\n  },\n  contractId: AMM_CONTRACT_ADDRESS,\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["The ",(0,o.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,o.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Example response"}),(0,o.jsx)("p",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"[\n  {\n    pool_kind: 'SIMPLE_POOL',\n    token_account_ids: [ 'token.skyward.near', 'wrap.near' ],\n    amounts: [ '51865812079751349630100', '6254162663147994789053210138' ],\n    total_fee: 30,\n    shares_total_supply: '1305338644973934698612124055',\n    amp: 0\n  },\n  {\n    pool_kind: 'SIMPLE_POOL',\n    token_account_ids: [\n      'c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.factory.bridge.near',\n      'wrap.near'\n    ],\n    amounts: [ '783621938569399817', '1100232280852443291118200599' ],\n    total_fee: 30,\n    shares_total_supply: '33923015415693335344747628',\n    amp: 0\n  }\n]\n"})})})]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var o=n(67294);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);