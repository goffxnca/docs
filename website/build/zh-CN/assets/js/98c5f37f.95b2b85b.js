"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2204],{55715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(85893),s=t(11151);const a={id:"multichain-server",title:"Multichain Relayer Server",sidebar_label:"Multichain Relayer Server"},r=void 0,o={id:"build/chain-abstraction/multichain-gas-relayer/multichain-server",title:"Multichain Relayer Server",description:"The Multichain Relayer Server facilitates cross-chain transactions and enables Chain Abstraction.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/1.chain-abstraction/multichain-gas-relayer/multichain-server.md",sourceDirName:"2.build/1.chain-abstraction/multichain-gas-relayer",slug:"/build/chain-abstraction/multichain-gas-relayer/multichain-server",permalink:"/zh-CN/build/chain-abstraction/multichain-gas-relayer/multichain-server",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/1.chain-abstraction/multichain-gas-relayer/multichain-server.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"multichain-server",title:"Multichain Relayer Server",sidebar_label:"Multichain Relayer Server"},sidebar:"build",previous:{title:"Multichain Gas Station Contract",permalink:"/zh-CN/build/chain-abstraction/multichain-gas-relayer/gas-station"},next:{title:"Relayer + Gas Station",permalink:"/zh-CN/build/chain-abstraction/multichain-gas-relayer/relayer-gas-example"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Paymaster",id:"paymaster",level:2},{value:"Multiple Paymaster accounts",id:"multiple-paymaster-accounts",level:3},{value:"System workflow",id:"system-workflow",level:2},{value:"Relayer Server Endpoints",id:"relayer-server-endpoints",level:2},{value:"Supported Chains",id:"supported-chains",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Total Time expectations for end users",id:"total-time-expectations-for-end-users",level:2},{value:"BSC",id:"bsc",level:3},{value:"Solana",id:"solana",level:3},{value:"Ethereum L2s",id:"ethereum-l2s",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server",children:"Multichain Relayer Server"})," facilitates cross-chain transactions and enables Chain Abstraction."]}),"\n",(0,i.jsx)(n.admonition,{title:"Alpha stage",type:"info",children:(0,i.jsx)(n.p,{children:"The Multichain Relayer solution is currently under development. Users who want to test-drive this solution should keep in mind that the product is in alpha stage, and a code audit is pending."})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"The main function of this server is interfacing with foreign chain RPCs sending both presigned funding transactions to cover gas and the actual presigned transaction once the funding is done."}),"\n",(0,i.jsx)(n.p,{children:"Although the multichain relayer is a server in current design of this system, the goal is to package this as a library that can be called on the client side of the wallet. This will make the system more decentralized."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The Multichain Relayer is meant to be deployed alongside the ",(0,i.jsx)(n.a,{href:"https://github.com/near/gas-station-event-indexer",children:"Gas Station Event Indexer"})," on the same server so that the gas station event indexer can call the multichain relayer server via IPC instead of having to send the request over the network introducing extra latency to the system."]})}),"\n",(0,i.jsx)(n.h2,{id:"paymaster",children:"Paymaster"}),"\n",(0,i.jsx)(n.p,{children:"A paymaster represents an address on a destination chain that holds a balance of that chain\u2019s native gas token:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"User addresses on destination chains will be funded directly from paymaster accounts."}),"\n",(0,i.jsx)(n.li,{children:"Partners that want to integrate with the Multichain Gas Relayer service need to create, fund, and manage paymaster accounts on the destination chains that they want to have support for."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/zh-CN/build/chain-abstraction/multichain-gas-relayer/gas-station#settlement",children:"Manual settlement"})," between the ",(0,i.jsx)(n.a,{href:"/zh-CN/build/chain-abstraction/multichain-gas-relayer/gas-station",children:"NEAR Gas Station contract"})," and paymaster accounts are also required on a regular basis to ensure a consistent balance of funds."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"multiple-paymaster-accounts",children:"Multiple Paymaster accounts"}),"\n",(0,i.jsxs)(n.p,{children:["If the relayer or transaction forwarder is fast enough, having only one Paymaster account ",(0,i.jsx)(n.em,{children:"might"})," be enough."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Currently we don't have actual performance or usage data, so it's difficult to offer recommendations about multiple paymaster accounts."})}),"\n",(0,i.jsx)(n.p,{children:"For independent deployments of gas station contracts, generally, nonce synchronicity should be addressed using these three measures, in this order of preference:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Users and clients of the smart contract submit signed payloads independently.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This is the least reliable option; it is not wise to leave this up to the users, but it is potentially the lowest-latency option. Therefore, while this should be the first option in order of precedence, it must not be the only option."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The relayer service picks up signed payloads and submits them to the remote chain.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This relayer service provides the guarantee to the smart contract that signed payloads ",(0,i.jsx)(n.em,{children:"will"})," make it to the remote chain and update the nonce."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Using multiple paymaster accounts.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This is a stopgap measure that essentially only serves as a small buffer in case the relayer service falls behind, or some of the paymaster nonces (temporarily) get out-of-sync. Adding more paymasters will not eliminate nonce synchronicity issues if they exist; it will only reduce latency for users while the system is working and experiencing high traffic."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"system-workflow",children:"System workflow"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(55256).Z+"",children:(0,i.jsx)(n.img,{alt:"multichain_relayer_technical_design.png",src:t(68086).Z+"",width:"3748",height:"3860"})})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The wallet sends a NEAR transaction to the gas station contract that contains 2 actions:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["A transfer of ",(0,i.jsx)(n.code,{children:"NEAR"})," (or FT Transfer in the future) to cover gas on the foreign chain"]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.code,{children:"create_transaction"})," function call to the gas station contract ",(0,i.jsx)(n.code,{children:"canhazgas.testnet"})," containing the unsigned foreign chain transaction to be signed by the MPC signing service, assuming the unsigned transaction passes validation.","\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["(note: ",(0,i.jsx)(n.code,{children:"mainnet"})," contract address TBD)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"The Gas Station Contract calls the MPC signing service to sign both a funding transaction, which ensures the user's foreign chain account has sufficient gas to execute the desired transaction, and signs the unsigned foreign chain transaction."}),"\n",(0,i.jsxs)(n.li,{children:["Upon receipt of both the signed transactions, the Gas Station Contract emits an event which is picked up by the indexer, which then calls the ",(0,i.jsx)(n.code,{children:"/send_funding_and_user_signed_txns"})," with the 2 signed transactions from the indexer."]}),"\n",(0,i.jsx)(n.li,{children:"The multichain relayer server sends the funding transaction to the foreign chain RPC to fund the user's account with gas."}),"\n",(0,i.jsx)(n.li,{children:"After the gas funding transaction is confirmed, the multichain relayer server calls the foreign chain RPC again to send the signed transaction initiated by the user in step 1."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"/zh-CN/build/chain-abstraction/multichain-gas-relayer/gas-station#settlement",children:"cross-chain settlement"})," takes care of selling the extra ",(0,i.jsx)(n.code,{children:"NEAR"})," being sent to the gas station contract for gas tokens on foreign chains as well as bridging the tokens to the other chains. This process is currently manual, but will be automated in partnership with market makers in the future."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"relayer-server-endpoints",children:"Relayer Server Endpoints"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/send_funding_and_user_signed_txns"})," which handles both","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Funding the user's XChain account with gas from the paymaster treasury account, which is provided as a raw signed transaction"}),"\n",(0,i.jsx)(n.li,{children:"Sending the user's raw signed transaction (in hexadecimal in EVM case) after the funding transaction has been confirmed on the foreign chain"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"supported-chains",children:"Supported Chains"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BSC testnet"}),"\n",(0,i.jsx)(n.li,{children:"BSC mainnet, Ethereum mainnet, and more chains coming soon!"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Check the Relayer's ",(0,i.jsx)(n.a,{href:"https://github.com/near/multichain-relayer-server",children:"GitHub repository"})," to learn more about upcoming features and updates."]})}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsx)(n.p,{children:"When using the Multichain Gas relayer solution, some limitations should be considered. Here's a list of potential issues you might encounter, and suggested ways to mitigate them:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Not enough gas for a cross-chain transaction to get included in time.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Solution:"})," overcharge for gas at the gas station and when constructing the transaction include more than the average gas price."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Slippage violations causing the gas token or foreign chain Fungible Token to get refunded to the user's foreign chain address.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Solution:"})," encourage your users to use high slippage settings in volatile or low liquidity market conditions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Solution:"})," if such error occurs, make the user aware of what happened and that funds were not lost."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," in future versions the solution will support retrying transactions."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Nonce issues if Paymaster rotation isn't done properly. This issue is a function of concurrent usage, blockchain finality time, and the number of paymaster treasury accounts that the ",(0,i.jsx)(n.a,{href:"/zh-CN/build/chain-abstraction/multichain-gas-relayer/gas-station",children:"Gas Station"})," is rotating through.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Solution:"})," use a blockchain that has faster finality."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Solution:"})," increase the number of paymaster treasury accounts through which the gas station rotates."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"total-time-expectations-for-end-users",children:"Total Time expectations for end users"}),"\n",(0,i.jsx)(n.p,{children:"It depends on the chain, but in our current estimation 50-90% of the time will be on NEAR calling and waiting for the signing to complete on the MPC service.\nThe signing service will take 15-30 seconds.\nWe assume that both the signing of the foreign chain transaction and the gas funding transaction happen in parallel."}),"\n",(0,i.jsx)(n.h3,{id:"bsc",children:"BSC"}),"\n",(0,i.jsxs)(n.p,{children:["On BSC mainnet (not ",(0,i.jsx)(n.code,{children:"beaconchain"})," which has 1 second finality) with 3 second blocktimes there should be 2 blocks for confirmation optimistically bringing the total to 6 seconds optimistically/transaction on BSC.\nWe need to make 2 transactions, so that's 12-24 seconds on BSC assuming 2-4 blocks for finality. Add in some network overhead for each step in the process, especially the indexer picking up the emitted event (~5-7 seconds), and we're at 30-60 seconds/transaction on BSC."]}),"\n",(0,i.jsx)(n.h3,{id:"solana",children:"Solana"}),"\n",(0,i.jsxs)(n.p,{children:["For Solana it would be closer to 20-30 seconds (0.4 second block time, 1 block confirmation). See ",(0,i.jsx)(n.a,{href:"https://usa.visa.com/solutions/crypto/deep-dive-on-solana.html",children:"table 1"})," for more confirmation times."]}),"\n",(0,i.jsx)(n.h3,{id:"ethereum-l2s",children:"Ethereum L2s"}),"\n",(0,i.jsxs)(n.p,{children:["L2 real finality times can be over a day for finality, unless we trust a centralized sequencer for soft confirmations, which may be as fast as a few seconds as in the case of ",(0,i.jsx)(n.a,{href:"https://docs.zksync.io/zk-stack/concepts/finality#instant-confirmations",children:"zksync era"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The difference between optimistic or soft confirmations vs real finality is something we are considering. We may get better finalized guarantees when the ",(0,i.jsx)(n.a,{href:"https://near.org/blog/near-foundation-and-eigen-labs-partner-to-enable-faster-cheaper-web3-transactions-for-ethereum-rollups-via-eigenlayer/",children:"Eigenlayer-Near Partnership is live"}),". 3-4 second finality for all Ethereum L2s is much more manageable."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},55256:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/files/multichain_relayer_technical_design-72c7956c4949d709403248d15c286cfd.png"},68086:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/multichain_relayer_technical_design-72c7956c4949d709403248d15c286cfd.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(67294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);