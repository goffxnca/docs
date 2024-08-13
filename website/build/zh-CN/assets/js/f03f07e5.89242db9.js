"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3052],{95699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(85893),s=t(11151);const i={id:"predeployed-contract",title:"Pre-deployed Contract",sidebar_label:"Pre-deployed Contract"},o=void 0,a={id:"tutorials/nfts/predeployed-contract",title:"Pre-deployed Contract",description:"Create your first non-fungible token by using a pre-deployed NFT smart contract which works exactly as the one you will build on this tutorial.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/0-predeployed.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/predeployed-contract",permalink:"/zh-CN/tutorials/nfts/predeployed-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/0-predeployed.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,sidebarPosition:0,frontMatter:{id:"predeployed-contract",title:"Pre-deployed Contract",sidebar_label:"Pre-deployed Contract"},sidebar:"tutorials",previous:{title:"Introduction",permalink:"/zh-CN/tutorials/nfts/introduction"},next:{title:"Contract Architecture",permalink:"/zh-CN/tutorials/nfts/skeleton"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using the NFT contract",id:"using-the-nft-contract",level:2},{value:"Setup",id:"setup",level:3},{value:"Minting your NFTs",id:"minting-your-nfts",level:3},{value:"Querying your NFT",id:"querying-your-nft",level:3},{value:"Final remarks",id:"final-remarks",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Create your first non-fungible token by using a pre-deployed NFT smart contract which works exactly as the one you will build on this tutorial."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["To complete this tutorial successfully, you'll need ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com/create",children:"a NEAR Wallet"})," and ",(0,r.jsx)(n.a,{href:"../../4.tools/cli-rs.md#setup",children:"NEAR CLI RS"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"using-the-nft-contract",children:"Using the NFT contract"}),"\n",(0,r.jsx)(n.p,{children:"Minting an NFT token on NEAR is a simple process that involves calling a smart contract function."}),"\n",(0,r.jsxs)(n.p,{children:["To interact with the contract you will need to first login to your NEAR account through ",(0,r.jsx)(n.code,{children:"near-cli"}),"."]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.p,{children:["Log in to your newly created account with ",(0,r.jsx)(n.code,{children:"near-cli"})," by running the following command in your terminal:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near account import-account using-web-wallet network-config testnet\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set an environment variable for your account ID to make it easy to copy and paste commands from this tutorial:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export NEARID=YOUR_ACCOUNT_NAME\n"})}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"minting-your-nfts",children:"Minting your NFTs"}),"\n",(0,r.jsxs)(n.p,{children:["We have already deployed an NFT contract to ",(0,r.jsx)(n.code,{children:"nft.examples.testnet"})," which allows users to freely mint tokens. Let's use it to mint our first token."]}),"\n",(0,r.jsxs)(n.p,{children:["Run this command in your terminal, remember to replace the ",(0,r.jsx)(n.code,{children:"token_id"})," with a string of your choice. This string will uniquely identify the token you mint."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near contract call-function as-transaction nft.examples.testnet nft_mint json-args \'{"token_id": "TYPE_A_UNIQUE_VALUE_HERE", "receiver_id": "\'$NEARID\'", "metadata": { "title": "GO TEAM", "description": "The Team Goes", "media": "https://bafybeidl4hjbpdr6u6xvlrizwxbrfcyqurzvcnn5xoilmcqbxfbdwrmp5m.ipfs.dweb.link/", "copies": 1}}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'0.1 NEAR\' sign-as $NEARID network-config testnet sign-with-legacy-keychain send\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'Log [nft.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"nft-1.0.0","event":"nft_mint","data":[{"owner_id":"benjiman.testnet","token_ids":["TYPE_A_UNIQUE_VALUE_HERE"]}]}\nTransaction Id 8RFWrQvAsm2grEsd1UTASKpfvHKrjtBdEyXu7WqGBPUr\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/8RFWrQvAsm2grEsd1UTASKpfvHKrjtBdEyXu7WqGBPUr\n\'\'\n'})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:["You can also replace the ",(0,r.jsx)(n.code,{children:"media"})," URL with a link to any image file hosted on your web server. ::: :::"]}),(0,r.jsx)("hr",{class:"subsection"}),(0,r.jsx)(n.h3,{id:"querying-your-nft",children:"Querying your NFT"}),(0,r.jsxs)(n.p,{children:["To view tokens owned by an account you can call the NFT contract with the following ",(0,r.jsx)(n.code,{children:"near-cli"})," command:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only nft.examples.testnet nft_tokens_for_owner json-args '{\"account_id\": \"'$NEARID'\"}' network-config testnet now\n"})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "token_id": "Goi0CZ",\n    "owner_id": "bob.testnet",\n    "metadata": {\n      "title": "GO TEAM",\n      "description": "The Team Goes",\n      "media": "https://bafybeidl4hjbpdr6u6xvlrizwxbrfcyqurzvcnn5xoilmcqbxfbdwrmp5m.ipfs.dweb.link/",\n      "media_hash": null,\n      "copies": 1,\n      "issued_at": null,\n      "expires_at": null,\n      "starts_at": null,\n      "updated_at": null,\n      "extra": null,\n      "reference": null,\n      "reference_hash": null\n    },\n    "approved_account_ids": {}\n  }\n]\n'})})})]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Congratulations!"})," You just minted your first NFT token on the NEAR blockchain! \ud83c\udf89"]}),(0,r.jsxs)(n.p,{children:["Now try going to your ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"NEAR Wallet"}),' and view your NFT in the "Collectibles" tab.']}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"final-remarks",children:"Final remarks"}),(0,r.jsx)(n.p,{children:"This basic example illustrates all the required steps to call an NFT smart contract on NEAR and start minting your own non-fungible tokens."}),(0,r.jsxs)(n.p,{children:["Now that you're familiar with the process, you can jump to ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/skeleton",children:"Contract Architecture"})," and learn more about the smart contract structure and how you can build your own NFT contract from the ground up."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Happy minting!"})})," \ud83e\ude99"]}),(0,r.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["near-cli-rs: ",(0,r.jsx)(n.code,{children:"0.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["NFT standard: ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(n.code,{children:"1.0.0"})]}),"\n"]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);