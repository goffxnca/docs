"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1928],{75271:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(85893),i=s(11151);const r={id:"setup",title:"Setup"},a=void 0,c={id:"api/rpc/setup",title:"Setup",description:"In order to use the RPC API you will need to setup the correct RPC endpoints.",source:"@site/../docs/5.api/rpc/setup.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/setup",permalink:"/api/rpc/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/setup.md",tags:[],version:"current",lastUpdatedBy:"hattizai",lastUpdatedAt:1718487502e3,frontMatter:{id:"setup",title:"Setup"},sidebar:"api",previous:{title:"RPC Providers",permalink:"/api/rpc/providers"},next:{title:"Access Keys",permalink:"/api/rpc/access-keys"}},o={},l=[{value:"RPC Endpoint Setup",id:"rpc-endpoint-setup",level:2},{value:"Limits",id:"limits",level:3},{value:"Querying Historical Data",id:"querying-historical-data",level:2},{value:"Limits",id:"limits-1",level:3},{value:"Postman Setup",id:"postman-setup",level:2},{value:"JavaScript Setup",id:"javascript-setup",level:2},{value:"HTTPie Setup",id:"httpie-setup",level:2},{value:"Using <code>block_id</code> param",id:"using-block_id-param",level:2},{value:"Using <code>finality</code> param",id:"using-finality-param",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In order to use the RPC API you will need to setup the correct RPC endpoints."}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(n.h2,{id:"rpc-endpoint-setup",children:"RPC Endpoint Setup"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"POST"})," for all methods"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"JSON RPC 2.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'id: "dontcare"'})}),"\n",(0,t.jsxs)(n.li,{children:["endpoint URL varies by network:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["mainnet ",(0,t.jsx)(n.code,{children:"https://rpc.mainnet.near.org"})]}),"\n",(0,t.jsxs)(n.li,{children:["testnet ",(0,t.jsx)(n.code,{children:"https://rpc.testnet.near.org"})]}),"\n",(0,t.jsxs)(n.li,{children:["betanet ",(0,t.jsx)(n.code,{children:"https://rpc.betanet.near.org"})," ",(0,t.jsx)(n.em,{children:"(may be unstable)"})]}),"\n",(0,t.jsxs)(n.li,{children:["localnet ",(0,t.jsx)(n.code,{children:"http://localhost:3030"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"limits",children:"Limits"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maximum number of requests per IP: 600 req/min"}),"\n"]}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(n.h2,{id:"querying-historical-data",children:"Querying Historical Data"}),"\n",(0,t.jsxs)(n.p,{children:["Querying historical data (older than 5 ",(0,t.jsx)(n.a,{href:"/concepts/basics/epoch",children:"epochs"})," or ~2.5 days), you may get responses that the data is not available anymore. In that case, archival RPC nodes will come to your rescue:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["mainnet ",(0,t.jsx)(n.code,{children:"https://archival-rpc.mainnet.near.org"})]}),"\n",(0,t.jsxs)(n.li,{children:["testnet ",(0,t.jsx)(n.code,{children:"https://archival-rpc.testnet.near.org"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can see this interface defined in ",(0,t.jsx)(n.code,{children:"nearcore"})," ",(0,t.jsx)(n.a,{href:"https://github.com/near/nearcore/blob/bf9ae4ce8c680d3408db1935ebd0ca24c4960884/chain/jsonrpc/client/src/lib.rs#L181",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"limits-1",children:"Limits"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maximum number of requests per IP: 600 req/min"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"postman-setup",children:"Postman Setup"}),"\n",(0,t.jsxs)(n.p,{children:["An easy way to test the queries in this documentation page is to use an API request tool such as ",(0,t.jsx)(n.a,{href:"https://www.postman.com/",children:"Postman"}),".\nYou only need to configure two things:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure you add a header with a key of ",(0,t.jsx)(n.code,{children:"Content-Type"})," and value of ",(0,t.jsx)(n.code,{children:"application/json"}),".\n",(0,t.jsx)(n.img,{alt:"postman-setup-header",src:s(99916).Z+"",width:"1064",height:"299"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Then select the ",(0,t.jsx)(n.code,{children:"Body"})," tab and choose the ",(0,t.jsx)(n.code,{children:"raw"})," radio button and ensure ",(0,t.jsx)(n.code,{children:"JSON"})," is the selected format.\n",(0,t.jsx)(n.img,{alt:"postman-setup-header",src:s(2121).Z+"",width:"1052",height:"324"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After that is set up, just copy/paste the ",(0,t.jsx)(n.code,{children:"JSON object"})," example snippets below into the ",(0,t.jsx)(n.code,{children:"body"})," of your request, on Postman, and click ",(0,t.jsx)(n.code,{children:"send"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"javascript-setup",children:"JavaScript Setup"}),"\n",(0,t.jsxs)(n.p,{children:["All of the queries listed in this documentation page can be called using ",(0,t.jsx)(n.a,{href:"https://github.com/near/near-api-js",children:(0,t.jsx)(n.code,{children:"near-api-js"})}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.code,{children:"near-api-js"})," installation and setup please refer to ",(0,t.jsx)(n.code,{children:"near-api-js"})," ",(0,t.jsx)(n.a,{href:"/tools/near-api-js/quick-reference",children:"quick reference documentation"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["All JavaScript code snippets require a ",(0,t.jsx)(n.code,{children:"near"})," object. For examples of how to instantiate, ",(0,t.jsx)(n.a,{href:"/tools/near-api-js/quick-reference#connect",children:(0,t.jsx)(n.strong,{children:"click here"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"httpie-setup",children:"HTTPie Setup"}),"\n",(0,t.jsxs)(n.p,{children:["If you prefer to use a command line interface, we have provided RPC examples you can use with ",(0,t.jsx)(n.a,{href:"https://httpie.org/",children:"HTTPie"}),". Please note that params take\neither an object or array passed as a string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=network_info params:='[]'\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"using-block_id-param",children:["Using ",(0,t.jsx)(n.code,{children:"block_id"})," param"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"block_id"})," param can take either the block number (e.g. ",(0,t.jsx)(n.code,{children:"27912554"}),") or the block hash (e.g. ",(0,t.jsx)(n.code,{children:"'3Xz2wM9rigMXzA2c5vgCP8wTgFBaePucgUmVYPkMqhRL'"})," ) as an argument."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The block IDs of transactions shown in ",(0,t.jsx)(n.a,{href:"https://testnet.nearblocks.io",children:"NearBlocks Explorer"})," are not necessarily the block ID of the executed transaction. Transactions may execute a block or two after its recorded, and in some cases, can take place over several blocks. Due to this, it is important to check subsequent blocks to be sure all results related to the queried transaction are discovered."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"using-finality-param",children:["Using ",(0,t.jsx)(n.code,{children:"finality"})," param"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"finality"})," param has two options: ",(0,t.jsx)(n.code,{children:"optimistic"})," and ",(0,t.jsx)(n.code,{children:"final"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"optimistic"})," uses the latest block recorded on the node that responded to your query ",(0,t.jsx)(n.em,{children:"(< 1 second delay after the transaction is submitted)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"final"})," is for a block that has been validated on at least 66% of the nodes in the network ",(0,t.jsx)(n.em,{children:"(usually takes 2 blocks / approx. 2 second delay)"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2121:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/postman-setup-body-93fd45785b0fee57caa83bc9ee772d45.png"},99916:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/postman-setup-headers-54e021bfa8af3fb5992db0f4281ae948.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var t=s(67294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);