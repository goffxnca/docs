"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9118],{208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(85893),i=n(11151);const s={id:"economics",title:"Web 3.0 Economics",sidebar_label:"Economics"},o=void 0,r={id:"concepts/web3/economics",title:"Web 3.0 Economics",description:"With technological decentralization also came economical decentralization. With technological decentralization also came economical decentralization. It stands on 3 pillars - Non-Fungible tokens (NFTs), Fungible tokens (FTs) and Decentralized Finance (DeFi).",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/1.concepts/web3/economics.md",sourceDirName:"1.concepts/web3",slug:"/concepts/web3/economics",permalink:"/zh-CN/concepts/web3/economics",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/web3/economics.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"economics",title:"Web 3.0 Economics",sidebar_label:"Economics"},sidebar:"concepts",previous:{title:"NEAR Protocol",permalink:"/zh-CN/concepts/web3/near"},next:{title:"NFTs for Web 2.0 Apps",permalink:"/zh-CN/concepts/web3/nfts"}},c={},l=[{value:"Non-Fungible Tokens",id:"non-fungible-tokens",level:2},{value:"Fungible Tokens",id:"fungible-tokens",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"With technological decentralization also came economical decentralization. With technological decentralization also came economical decentralization. It stands on 3 pillars - Non-Fungible tokens (NFTs), Fungible tokens (FTs) and Decentralized Finance (DeFi)."}),"\n",(0,a.jsx)(t.h2,{id:"non-fungible-tokens",children:"Non-Fungible Tokens"}),"\n",(0,a.jsxs)(t.p,{children:["At the heart of the new Web 3 economy lies ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Non-fungible_token",children:"Non-Fungible token"})," (NFT). In a nutshell, it\u2019s a way to  represent digital ownership in a decentralized way. From a technical perspective, it\u2019s just a piece of data on a blockchain. The simplest case of such data is just a ",(0,a.jsx)(t.code,{children:"(token_id, account_id)"})," tuple, where ",(0,a.jsx)(t.code,{children:"token_id"})," uniquely identifies an asset, and ",(0,a.jsx)(t.code,{children:"account_id"})," identifies an owner. A smart contract that owns this data defines a set of allowed operations - like creation of a new token (minting) or transfer of a token to another account. An exact set of allowed operations is defined in an NFT standard. Different blockchains have different standards, NEAR NFT Standard is available ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/NonFungibleToken/",children:"here"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Because NFTs are tied to a specific contract, they mostly make sense only in scope of this contract, and subsequently they are tied to a specific dApp. It\u2019s possible to implement transfer of NFTs between contracts, but there\u2019s no standard way to do this. It\u2019s possible to implement transfer of NFTs between contracts, but there\u2019s no standard way to do this."}),"\n",(0,a.jsxs)(t.p,{children:["What digital asset is hiding behind a ",(0,a.jsx)(t.code,{children:"token_id"})," is up to the smart contract to decide. There are few common ways how to handle this: There are few common ways how to handle this:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Store an asset itself in a smart contract alongside the ownership information. Store an asset itself in a smart contract alongside the ownership information. This is the most straightforward way, but often is not feasible since storage cost is quite high and many types of digital assets, especially media, are quite big."}),"\n"]}),"\n",(0,a.jsx)("div",{align:"center",children:(0,a.jsx)("img",{src:"/docs/assets/web3/web3-20.png",alt:"image",width:"400"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Store token data off-chain. Store token data off-chain. Such an approach solves storage cost problems, but requires some level of trust to guarantee that data in the off-chain storage won\u2019t be changed or removed."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image",src:n(12845).Z+"",width:"1600",height:"302"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Store asset\u2019s metadata and hash on chain, and an asset itself on some off-chain storage. Storing an asset\u2019s hash on a chain guarantees data integrity and immutability. On-chain metadata usually includes basic token information, like title, description and media url. It\u2019s required to quickly identify an asset without downloading it from the storage. This is the most popular approach to handle NFT\u2019s since it combines the best of 2 previous approaches - token is immutable and storage cost is cheap (exact cost depends on the storage solution, but it usually several orders of magnitude cheaper than an on-chain storage) Storing an asset\u2019s hash on a chain guarantees data integrity and immutability. On-chain metadata usually includes basic token information, like title, description and media url. It\u2019s required to quickly identify an asset without downloading it from the storage. This is the most popular approach to handle NFT\u2019s since it combines the best of 2 previous approaches - token is immutable and storage cost is cheap (exact cost depends on the storage solution, but it usually several orders of magnitude cheaper than an on-chain storage)"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image",src:n(70610).Z+"",width:"1600",height:"434"})}),"\n",(0,a.jsx)(t.p,{children:"Choosing the right off-chain storage also can be a challenge, in general they can be divided into 2 buckets:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Centralized storages - traditional Web 2 storage solutions, like relational databases or blob storages. Centralized storages - traditional Web 2 storage solutions, like relational databases or blob storages. While suitable for some applications, this means NFTs can be destroyed if a central server goes offline, so they aren\u2019t the most popular in the Web 3 world."}),"\n",(0,a.jsxs)(t.li,{children:["Decentralized storages. Decentralized storages. As we already mentioned, BitTorrent protocol is one of the first examples of such decentralized storage solutions, but in recent years more advanced solutions have appeared - like ",(0,a.jsx)(t.a,{href:"https://ipfs.io/",children:"IPFS"}),", ",(0,a.jsx)(t.a,{href:"https://filecoin.io/",children:"FileCoin"})," and ",(0,a.jsx)(t.a,{href:"https://www.arweave.org/",children:"Arweawe"}),". Such solutions are a preferred method to store digital assets, since they are cheap and decentralized, so no-one can destroy or alter NFT assets. Such solutions are a preferred method to store digital assets, since they are cheap and decentralized, so no-one can destroy or alter NFT assets."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In addition to the NFT standard, NEAR also provides ",(0,a.jsx)(t.a,{href:"https://docs.rs/near-contract-standards/latest/near_contract_standards/non_fungible_token/index.html",children:"its implementation"}),", which can be used by Smart Contract developers to implement NFTs in their smart contract. Implementation itself doesn\u2019t dictate assets storage model, so it\u2019s up to a developer to decide how and where it will be stored. Implementation itself doesn\u2019t dictate assets storage model, so it\u2019s up to a developer to decide how and where it will be stored."]}),"\n",(0,a.jsx)(t.h2,{id:"fungible-tokens",children:"Fungible Tokens"}),"\n",(0,a.jsx)(t.p,{children:"NFTs changed digital assets ownership model, but by itself they are not enough to build a full digital economy. NFTs changed digital assets ownership model, but by itself they are not enough to build a full digital economy. In the simplest model, NFTs can be sold and bought using main blockchain currency (e.g. NEAR tokens), but this is quite limiting since circulation and price of such tokens is dictated by the blockchain itself. What if, instead of relying on blockchain currency, applications could create their own? For exactly this reason, Fungible Tokens (FT) have been created. What if, instead of relying on blockchain currency, applications could create their own? For exactly this reason, Fungible Tokens (FT) have been created."}),"\n",(0,a.jsx)(t.p,{children:"Similarly to NFTs, fungible tokens are also just a piece of data stored in a smart contract, but instead of storing unique token ids, an amount of tokens held by an account is stored."}),"\n",(0,a.jsx)("div",{align:"center",children:(0,a.jsx)("img",{src:"/docs/assets/web3/web3-23.png",alt:"image",width:"400"})}),"\n",(0,a.jsxs)(t.p,{children:["Smart Contracts can define allowed operations - like transfer or payment using this token. Smart Contracts can define allowed operations - like transfer or payment using this token. ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/FungibleToken/Core",children:"NEAR defines a standard"})," for fungible tokens and provides a ",(0,a.jsx)(t.a,{href:"https://docs.rs/near-contract-standards/latest/near_contract_standards/fungible_token/index.html",children:"default implementation"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Since an application is fully in control over emission and circulation of such tokens, a full fledged application economy can be created. For example, users can earn FTs for performing actions, and spend them to buy or mint new NFTs. Another exciting option is creation of ",(0,a.jsx)(t.a,{href:"https://near.org/use-cases/dao/",children:"Decentralized Autonomous Organizations"})," (DAOs), in which FTs can be used as a membership (or governance) tool. In such scenarios, tokens are awarded to members and can be used to vote on decisions or participate in community events."]}),"\n",(0,a.jsxs)(t.p,{children:["But we can push our tokens even further, by tying them to other cryptocurrencies and giving them a real-life monetary value. That\u2019s where ",(0,a.jsx)(t.a,{href:"https://www.investopedia.com/decentralized-finance-defi-5113835",children:"Decentralized Finance"})," (DeFi), and especially ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decentralized_exchange",children:"Decentralized Exchanges"})," (DEX) come into play. We won\u2019t go into details here, but at the core a ",(0,a.jsx)(t.a,{href:"https://academy.binance.com/en/articles/what-are-liquidity-pools-in-defi",children:"liquidity pool"})," for a Fungible Token can be created on DEX, which allows trades of this token for other tokens or ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Stablecoin",children:"stablecoins"}),". This opens the door for a new gaming model - ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Blockchain_game",children:"Play-to-Earn"}),", where players can earn real-life money just by playing a game."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},12845:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web3-21-042e66bf45f4161a2f4736db2f878efc.png"},70610:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web3-22-1fa86ec27ad437d9bf3d350264745d2b.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(67294);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);