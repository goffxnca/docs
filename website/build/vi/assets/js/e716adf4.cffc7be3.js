"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7725],{81682:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(85893),c=t(11151);const s={id:"predeployed-contract",title:"Contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy s\u1eb5n",sidebar_label:"Contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy s\u1eb5n"},r=void 0,o={id:"tutorials/nfts/predeployed-contract",title:"Contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy s\u1eb5n",description:"Create your first non-fungible token by using a pre-deployed NFT smart contract which works exactly as the one you will build on this tutorial.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/nfts/0-predeployed.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/predeployed-contract",permalink:"/vi/tutorials/nfts/predeployed-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/0-predeployed.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,sidebarPosition:0,frontMatter:{id:"predeployed-contract",title:"Contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy s\u1eb5n",sidebar_label:"Contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy s\u1eb5n"},sidebar:"tutorials",previous:{title:"Gi\u1edbi thi\u1ec7u",permalink:"/vi/tutorials/nfts/introduction"},next:{title:"Ki\u1ebfn tr\xfac c\u1ee7a Contract",permalink:"/vi/tutorials/nfts/skeleton"}},a={},l=[{value:"\u0110i\u1ec1u ki\u1ec7n c\u1ea7n",id:"\u0111i\u1ec1u-ki\u1ec7n-c\u1ea7n",level:2},{value:"S\u1eed d\u1ee5ng NFT contract",id:"s\u1eed-d\u1ee5ng-nft-contract",level:2},{value:"C\xe0i \u0111\u1eb7t",id:"c\xe0i-\u0111\u1eb7t",level:3},{value:"Mint c\xe1c NFT c\u1ee7a b\u1ea1n",id:"mint-c\xe1c-nft-c\u1ee7a-b\u1ea1n",level:3},{value:"Querying your NFT",id:"querying-your-nft",level:3},{value:"C\xe1c ch\xfa th\xedch cu\u1ed1i c\xf9ng",id:"c\xe1c-ch\xfa-th\xedch-cu\u1ed1i-c\xf9ng",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...n.components},{Details:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Create your first non-fungible token by using a pre-deployed NFT smart contract which works exactly as the one you will build on this tutorial."}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"\u0111i\u1ec1u-ki\u1ec7n-c\u1ea7n",children:"\u0110i\u1ec1u ki\u1ec7n c\u1ea7n"}),"\n",(0,i.jsxs)(e.p,{children:["To complete this tutorial successfully, you'll need ",(0,i.jsx)(e.a,{href:"https://testnet.mynearwallet.com/create",children:"a NEAR Wallet"})," and ",(0,i.jsx)(e.a,{href:"/vi/tools/near-cli-rs#setup",children:"NEAR CLI RS"})]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"s\u1eed-d\u1ee5ng-nft-contract",children:"S\u1eed d\u1ee5ng NFT contract"}),"\n",(0,i.jsx)(e.p,{children:"Minting an NFT token on NEAR is a simple process that involves calling a smart contract function."}),"\n",(0,i.jsxs)(e.p,{children:["To interact with the contract you will need to first login to your NEAR account through ",(0,i.jsx)(e.code,{children:"near-cli"}),"."]}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(e.h3,{id:"c\xe0i-\u0111\u1eb7t",children:"C\xe0i \u0111\u1eb7t"}),"\n",(0,i.jsxs)(e.p,{children:["\u0110\u0103ng nh\u1eadp v\xe0o account m\u1edbi t\u1ea1o c\u1ee7a b\u1ea1n v\u1edbi ",(0,i.jsx)(e.code,{children:"near-cli"})," b\u1eb1ng c\xe1ch ch\u1ea1y c\xe2u l\u1ec7nh sau trong terminal:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"near account import-account using-web-wallet network-config testnet\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u0110\u1eb7t m\u1ed9t bi\u1ebfn m\xf4i tr\u01b0\u1eddng cho ID account c\u1ee7a b\u1ea1n \u0111\u1ec3 gi\xfap d\u1ec5 d\xe0ng sao ch\xe9p v\xe0 d\xe1n c\xe1c l\u1ec7nh t\u1eeb h\u01b0\u1edbng d\u1eabn n\xe0y:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"export NEARID=YOUR_ACCOUNT_NAME\n"})}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(e.h3,{id:"mint-c\xe1c-nft-c\u1ee7a-b\u1ea1n",children:"Mint c\xe1c NFT c\u1ee7a b\u1ea1n"}),"\n",(0,i.jsxs)(e.p,{children:["We have already deployed an NFT contract to ",(0,i.jsx)(e.code,{children:"nft.examples.testnet"})," which allows users to freely mint tokens. Let's use it to mint our first token."]}),"\n",(0,i.jsxs)(e.p,{children:["Run this command in your terminal, remember to replace the ",(0,i.jsx)(e.code,{children:"token_id"})," with a string of your choice. This string will uniquely identify the token you mint."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'near contract call-function as-transaction nft.examples.testnet nft_mint json-args \'{"token_id": "TYPE_A_UNIQUE_VALUE_HERE", "receiver_id": "\'$NEARID\'", "metadata": { "title": "GO TEAM", "description": "The Team Goes", "media": "https://bafybeidl4hjbpdr6u6xvlrizwxbrfcyqurzvcnn5xoilmcqbxfbdwrmp5m.ipfs.dweb.link/", "copies": 1}}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'0.1 NEAR\' sign-as $NEARID network-config testnet sign-with-legacy-keychain send\n'})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"V\xed d\u1ee5 v\u1ec1 response nh\u1eadn \u0111\u01b0\u1ee3c: "}),(0,i.jsx)("p",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'Log [nft.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"nft-1.0.0","event":"nft_mint","data":[{"owner_id":"benjiman.testnet","token_ids":["TYPE_A_UNIQUE_VALUE_HERE"]}]}\nTransaction Id 8RFWrQvAsm2grEsd1UTASKpfvHKrjtBdEyXu7WqGBPUr\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/8RFWrQvAsm2grEsd1UTASKpfvHKrjtBdEyXu7WqGBPUr\n\'\'\n'})})})]}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsxs)(e.mdxAdmonitionTitle,{children:["B\u1ea1n c\u0169ng c\u0169ng c\xf3 th\u1ec3 thay ",(0,i.jsx)(e.code,{children:"media"})," URL b\u1eb1ng m\u1ed9t link c\u1ee7a b\u1ea5t k\u1ef3 file h\xecnh \u1ea3nh n\xe0o ch\u1ee9a tr\xean web server c\u1ee7a b\u1ea1n. :::"]}),(0,i.jsx)("hr",{class:"subsection"}),(0,i.jsx)(e.h3,{id:"querying-your-nft",children:"Querying your NFT"}),(0,i.jsxs)(e.p,{children:["\u0110\u1ec3 xem c\xe1c token \u0111\u01b0\u1ee3c s\u1edf h\u1eefu b\u1edfi m\u1ed9t account b\u1ea1n c\xf3 th\u1ec3 call NFT contract v\u1edbi c\xe2u l\u1ec7nh ",(0,i.jsx)(e.code,{children:"near-cli"})," sau:"]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"near contract call-function as-read-only nft.examples.testnet nft_tokens_for_owner json-args '{\"account_id\": \"'$NEARID'\"}' network-config testnet now\n"})}),(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"V\xed d\u1ee5 response nh\u1eadn \u0111\u01b0\u1ee3c: "}),(0,i.jsx)("p",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "token_id": "Goi0CZ",\n    "owner_id": "bob.testnet",\n    "metadata": {\n      "title": "GO TEAM",\n      "description": "The Team Goes",\n      "media": "https://bafybeidl4hjbpdr6u6xvlrizwxbrfcyqurzvcnn5xoilmcqbxfbdwrmp5m.ipfs.dweb.link/",\n      "media_hash": null,\n      "copies": 1,\n      "issued_at": null,\n      "expires_at": null,\n      "starts_at": null,\n      "updated_at": null,\n      "extra": null,\n      "reference": null,\n      "reference_hash": null\n    },\n    "approved_account_ids": {}\n  }\n]\n'})})})]}),(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Congratulations!"})," You just minted your first NFT token on the NEAR blockchain! \ud83c\udf89"]}),(0,i.jsxs)(e.p,{children:["Now try going to your ",(0,i.jsx)(e.a,{href:"https://testnet.mynearwallet.com",children:"NEAR Wallet"}),' and view your NFT in the "Collectibles" tab.']}),(0,i.jsx)(e.hr,{}),(0,i.jsx)(e.h2,{id:"c\xe1c-ch\xfa-th\xedch-cu\u1ed1i-c\xf9ng",children:"C\xe1c ch\xfa th\xedch cu\u1ed1i c\xf9ng"}),(0,i.jsx)(e.p,{children:"V\xed d\u1ee5 c\u01a1 b\u1ea3n n\xe0y minh h\u1ecda t\u1ea5t c\u1ea3 c\xe1c b\u01b0\u1edbc \u0111\u01b0\u1ee3c y\xeau c\u1ea7u \u0111\u1ec3 call m\u1ed9t NFT smart contract tr\xean NEAR v\xe0 b\u1eaft \u0111\u1ea7u mint c\xe1c non-fungible token cho ri\xeang b\u1ea1n."}),(0,i.jsxs)(e.p,{children:["Gi\u1edd th\xec c\xf3 l\u1ebd b\u1ea1n \u0111\xe3 quen v\u1edbi process, b\u1ea1n c\xf3 th\u1ec3 \u0111\u1ebfn v\u1edbi ",(0,i.jsx)(e.a,{href:"/docs/tutorials/contracts/nfts/skeleton",children:"Ki\u1ebfn tr\xfac c\u1ee7a Contract"})," v\xe0 t\xecm hi\u1ec3u th\xeam v\u1ec1 c\u1ea5u tr\xfac smart contract c\u0169ng nh\u01b0 c\xe1ch build m\u1ed9t NFT contract t\u1eeb \u0111\u1ea7u cho ri\xeang m\xecnh."]}),(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Ch\xfac b\u1ea1n mint th\xe0nh c\xf4ng!"})})," \ud83e\ude99"]}),(0,i.jsxs)(e.admonition,{title:"Version cho b\xe0i vi\u1ebft n\xe0y",type:"note",children:[(0,i.jsx)(e.p,{children:"T\u1ea1i th\u1eddi \u0111i\u1ec3m vi\u1ebft b\xe0i, v\xed d\u1ee5 n\xe0y t\u01b0\u01a1ng th\xedch v\u1edbi c\xe1c version d\u01b0\u1edbi \u0111\xe2y:"}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["near-cli-rs: ",(0,i.jsx)(e.code,{children:"0.11.0"})]}),"\n",(0,i.jsxs)(e.li,{children:["NFT standard: ",(0,i.jsx)(e.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,i.jsx)(e.code,{children:"1.0.0"})]}),"\n"]})]})]})]})}function h(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>r});var i=t(67294);const c={},s=i.createContext(c);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);