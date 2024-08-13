"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5916],{98833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(85893),r=t(11151);const i={id:"predeployed-contract",title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",sidebar_label:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8"},o=void 0,l={id:"tutorials/nfts/predeployed-contract",title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",description:"Create your first non-fungible token by using a pre-deployed NFT smart contract which works exactly as the one you will build on this tutorial.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/nfts/0-predeployed.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/predeployed-contract",permalink:"/ko/tutorials/nfts/predeployed-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/0-predeployed.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,sidebarPosition:0,frontMatter:{id:"predeployed-contract",title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",sidebar_label:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8"},sidebar:"tutorials",previous:{title:"\uc18c\uac1c",permalink:"/ko/tutorials/nfts/introduction"},next:{title:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98",permalink:"/ko/tutorials/nfts/skeleton"}},a={},c=[{value:"\uc804\uc81c \uc870\uac74",id:"\uc804\uc81c-\uc870\uac74",level:2},{value:"NFT \ucee8\ud2b8\ub799\ud2b8 \uc0ac\uc6a9",id:"nft-\ucee8\ud2b8\ub799\ud2b8-\uc0ac\uc6a9",level:2},{value:"\uc124\uc815",id:"\uc124\uc815",level:3},{value:"NFT \ubc1c\ud589",id:"nft-\ubc1c\ud589",level:3},{value:"Querying your NFT",id:"querying-your-nft",level:3},{value:"\ub05d\ub9fa\ub294 \ub9d0",id:"\ub05d\ub9fa\ub294-\ub9d0",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Create your first non-fungible token by using a pre-deployed NFT smart contract which works exactly as the one you will build on this tutorial."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\uc804\uc81c-\uc870\uac74",children:"\uc804\uc81c \uc870\uac74"}),"\n",(0,s.jsxs)(n.p,{children:["To complete this tutorial successfully, you'll need ",(0,s.jsx)(n.a,{href:"https://testnet.mynearwallet.com/create",children:"a NEAR Wallet"})," and ",(0,s.jsx)(n.a,{href:"../../4.tools/cli-rs.md#setup",children:"NEAR CLI RS"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"nft-\ucee8\ud2b8\ub799\ud2b8-\uc0ac\uc6a9",children:"NFT \ucee8\ud2b8\ub799\ud2b8 \uc0ac\uc6a9"}),"\n",(0,s.jsx)(n.p,{children:"Minting an NFT token on NEAR is a simple process that involves calling a smart contract function."}),"\n",(0,s.jsxs)(n.p,{children:["To interact with the contract you will need to first login to your NEAR account through ",(0,s.jsx)(n.code,{children:"near-cli"}),"."]}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"\uc124\uc815",children:"\uc124\uc815"}),"\n",(0,s.jsxs)(n.p,{children:["\ud130\ubbf8\ub110\uc5d0\uc11c \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec \uc0c8\ub85c \ub9cc\ub4e0 \uacc4\uc815\uc5d0 ",(0,s.jsx)(n.code,{children:"near-cli"}),"\ub85c \ub85c\uadf8\uc778\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"near account import-account using-web-wallet network-config testnet\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uba85\ub839\uc744 \uc27d\uac8c \ubcf5\uc0ac\ud558\uace0 \ubd99\uc5ec\ub123\uc744 \uc218 \uc788\ub3c4\ub85d \uacc4\uc815 ID\uc5d0 \ub300\ud55c \ud658\uacbd \ubcc0\uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export NEARID=YOUR_ACCOUNT_NAME\n"})}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"nft-\ubc1c\ud589",children:"NFT \ubc1c\ud589"}),"\n",(0,s.jsxs)(n.p,{children:["We have already deployed an NFT contract to ",(0,s.jsx)(n.code,{children:"nft.examples.testnet"})," which allows users to freely mint tokens. Let's use it to mint our first token."]}),"\n",(0,s.jsxs)(n.p,{children:["Run this command in your terminal, remember to replace the ",(0,s.jsx)(n.code,{children:"token_id"})," with a string of your choice. This string will uniquely identify the token you mint."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'near contract call-function as-transaction nft.examples.testnet nft_mint json-args \'{"token_id": "TYPE_A_UNIQUE_VALUE_HERE", "receiver_id": "\'$NEARID\'", "metadata": { "title": "GO TEAM", "description": "The Team Goes", "media": "https://bafybeidl4hjbpdr6u6xvlrizwxbrfcyqurzvcnn5xoilmcqbxfbdwrmp5m.ipfs.dweb.link/", "copies": 1}}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'0.1 NEAR\' sign-as $NEARID network-config testnet sign-with-legacy-keychain send\n'})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"\uc751\ub2f5 \uc608\uc2dc: "}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'Log [nft.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"nft-1.0.0","event":"nft_mint","data":[{"owner_id":"benjiman.testnet","token_ids":["TYPE_A_UNIQUE_VALUE_HERE"]}]}\nTransaction Id 8RFWrQvAsm2grEsd1UTASKpfvHKrjtBdEyXu7WqGBPUr\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/8RFWrQvAsm2grEsd1UTASKpfvHKrjtBdEyXu7WqGBPUr\n\'\'\n'})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:[(0,s.jsx)(n.code,{children:"media"})," URL\uc744 \uc6f9 \uc11c\ubc84\uc5d0\uc11c \ud638\uc2a4\ud305\ub418\ub294 \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc5d0 \ub300\ud55c \ub9c1\ud06c\ub85c \ubc14\uafc0 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. :::"]}),(0,s.jsx)("hr",{class:"subsection"}),(0,s.jsx)(n.h3,{id:"querying-your-nft",children:"Querying your NFT"}),(0,s.jsxs)(n.p,{children:["\uacc4\uc815\uc774 \uc18c\uc720\ud55c \ud1a0\ud070\uc744 \ubcf4\ub824\uba74 \ub2e4\uc74c ",(0,s.jsx)(n.code,{children:"near-cli"})," \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec NFT \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only nft.examples.testnet nft_tokens_for_owner json-args '{\"account_id\": \"'$NEARID'\"}' network-config testnet now\n"})}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"\uc751\ub2f5 \uc608\uc2dc: "}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "token_id": "Goi0CZ",\n    "owner_id": "bob.testnet",\n    "metadata": {\n      "title": "GO TEAM",\n      "description": "The Team Goes",\n      "media": "https://bafybeidl4hjbpdr6u6xvlrizwxbrfcyqurzvcnn5xoilmcqbxfbdwrmp5m.ipfs.dweb.link/",\n      "media_hash": null,\n      "copies": 1,\n      "issued_at": null,\n      "expires_at": null,\n      "starts_at": null,\n      "updated_at": null,\n      "extra": null,\n      "reference": null,\n      "reference_hash": null\n    },\n    "approved_account_ids": {}\n  }\n]\n'})})})]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Congratulations!"})," You just minted your first NFT token on the NEAR blockchain! \ud83c\udf89"]}),(0,s.jsxs)(n.p,{children:["Now try going to your ",(0,s.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"NEAR Wallet"}),' and view your NFT in the "Collectibles" tab.']}),(0,s.jsx)(n.hr,{}),(0,s.jsx)(n.h2,{id:"\ub05d\ub9fa\ub294-\ub9d0",children:"\ub05d\ub9fa\ub294 \ub9d0"}),(0,s.jsx)(n.p,{children:"\uc774 \uae30\ubcf8 \uc608\uc81c\ub294 NEAR\uc5d0\uc11c NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud558\uace0 \ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070\uc744 \ub9cc\ub4e4\uae30 \uc2dc\uc791\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubaa8\ub4e0 \ub2e8\uacc4\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),(0,s.jsxs)(n.p,{children:["\uc774\uc81c \ud504\ub85c\uc138\uc2a4\uc5d0 \uc775\uc219\ud574\uc84c\uc73c\ubbc0\ub85c ",(0,s.jsx)(n.a,{href:"/tutorials/nfts/skeleton",children:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"}),"\ub85c \uc774\ub3d9\ud558\uc5ec \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uad6c\uc870\uc640 \ucc98\uc74c\ubd80\ud130 \uc790\uccb4 NFT \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"\uc990\uac70\uc6b4 \ubbfc\ud305\ub418\uc138\uc694!"})})," \ud83e\ude99"]}),(0,s.jsxs)(n.admonition,{title:"\ubb38\uc11c \ubc84\uc804 \uad00\ub9ac",type:"note",children:[(0,s.jsx)(n.p,{children:"\uc774 \uae00\uc744 \uc4f0\ub294 \uc2dc\uc810\uc5d0\uc11c \uc774 \uc608\uc81c\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["near-cli-rs: ",(0,s.jsx)(n.code,{children:"0.11.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["NFT standard: ",(0,s.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,s.jsx)(n.code,{children:"1.0.0"})]}),"\n"]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);