"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5143],{66012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(85893),a=t(11151),s=t(71183);const i={id:"enumeration",title:"\uc5f4\uac70(Enumeration)",sidebar_label:"\uc5f4\uac70(Enumeration)"},o=void 0,l={id:"tutorials/nfts/enumeration",title:"\uc5f4\uac70(Enumeration)",description:"\uc774\uc804 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \ubc1c\ud589 \ud568\uc218\ub97c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubf08\ub300\uc5d0 \ud1b5\ud569\ud558\ub294 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4. NFT\ub97c \uc9c0\uac11\uc5d0 \ud45c\uc2dc\ud558\ub824\uba74 \uc5f4\uac70 \uba54\uc11c\ub4dc \uc911 \ud558\ub098\ub97c \uad6c\ud604\ud558\ub294 \ud328\uce58 \uc218\uc815 \uc0ac\ud56d\ub3c4 \ubc30\ud3ec\ud574\uc57c \ud588\uc2b5\ub2c8\ub2e4. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the standard.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/nfts/3-enumeration.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/enumeration",permalink:"/ko/tutorials/nfts/enumeration",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/3-enumeration.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,sidebarPosition:3,frontMatter:{id:"enumeration",title:"\uc5f4\uac70(Enumeration)",sidebar_label:"\uc5f4\uac70(Enumeration)"},sidebar:"tutorials",previous:{title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\uadf8\ub808\uc774\ub4dc",permalink:"/ko/tutorials/nfts/upgrade-contract"},next:{title:"Transfers",permalink:"/ko/tutorials/nfts/core"}},u={},c=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc218\uc815",id:"\ucee8\ud2b8\ub799\ud2b8-\uc218\uc815",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc7ac\ubc30\ud3ec",id:"redeploying-contract",level:2},{value:"\ud1a0\ud070 \uc5f4\uac70",id:"\ud1a0\ud070-\uc5f4\uac70",level:2},{value:"NFT \ud1a0\ud070",id:"nft-\ud1a0\ud070",level:3},{value:"\uc18c\uc720\uc790\ubcc4 \ud1a0\ud070",id:"\uc18c\uc720\uc790\ubcc4-\ud1a0\ud070",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\uc774\uc804 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \ubc1c\ud589 \ud568\uc218\ub97c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubf08\ub300\uc5d0 \ud1b5\ud569\ud558\ub294 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4. NFT\ub97c \uc9c0\uac11\uc5d0 \ud45c\uc2dc\ud558\ub824\uba74 \uc5f4\uac70 \uba54\uc11c\ub4dc \uc911 \ud558\ub098\ub97c \uad6c\ud604\ud558\ub294 \ud328\uce58 \uc218\uc815 \uc0ac\ud56d\ub3c4 \ubc30\ud3ec\ud574\uc57c \ud588\uc2b5\ub2c8\ub2e4. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"standard"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Now you'll extend the NFT smart contract and add a couple of enumeration methods that can be used to return the contract's state."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\uc18c\uac1c",children:"\uc18c\uac1c"}),"\n",(0,r.jsxs)(n.p,{children:["As mentioned in the ",(0,r.jsx)(n.a,{href:"/ko/tutorials/nfts/upgrade-contract",children:"Upgrade a Contract"})," tutorial, you can deploy patches and fixes to smart contracts. \uc774\ubc88\uc5d0\ub294 \ud574\ub2f9 \uc9c0\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,r.jsx)(n.code,{children:"nft_total_supply"}),", ",(0,r.jsx)(n.code,{children:"nft_tokens"})," \ubc0f ",(0,r.jsx)(n.code,{children:"nft_supply_for_owner"})," \uc5f4\uac70\ud615 \ud568\uc218\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\ucee8\ud2b8\ub799\ud2b8-\uc218\uc815",children:"\ucee8\ud2b8\ub799\ud2b8 \uc218\uc815"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"src/enumeration.rs"})," \ud30c\uc77c\uc744 \uc5f4\uace0 \ube48 ",(0,r.jsx)(n.code,{children:"nft_total_supply"})," \ud568\uc218\ub97c \ucc3e\ub294 \uac83\uc73c\ub85c \uc2dc\uc791\ud558\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"nft_total_supply"})}),"\n",(0,r.jsxs)(n.p,{children:["\uc774 \ud568\uc218\ub294 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc800\uc7a5\ub41c \ucd1d NFT \uc218\ub97c \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,r.jsx)(n.code,{children:"nft_metadata_by_id"})," \uc790\ub8cc \uad6c\uc870\uc758 \uae38\uc774\ub97c \ubc18\ud658\ud558\uae30\ub9cc \ud558\uba74, \uc774 \uae30\ub2a5\uc744 \uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"5",end:"9",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/enumeration.rs"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"nft_token"})}),"\n",(0,r.jsxs)(n.p,{children:["This function should return a paginated list of ",(0,r.jsx)(n.code,{children:"JsonTokens"})," that are stored on the contract regardless of their owners. If the user provides a ",(0,r.jsx)(n.code,{children:"from_index"})," parameter, you should use that as the starting point for which to start iterating through tokens; otherwise it should start from the beginning. Likewise, if the user provides a ",(0,r.jsx)(n.code,{children:"limit"})," parameter, the function shall stop after reaching either the limit or the end of the list."]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:["Rust has useful methods for pagination, allowing you to skip to a starting index and taking the first ",(0,r.jsx)(n.code,{children:"n"})," elements of an iterator. :::"]}),(0,r.jsx)(s.Ey,{language:"rust",start:"11",end:"26",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/enumeration.rs"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"nft_supply_for_owner"})}),(0,r.jsxs)(n.p,{children:["\uc774 \ud568\uc218\ub294 \uc0ac\uc6a9\uc790 \uc815\uc758 \uc18c\uc720\uc790\uc5d0 \ub300\ud55c \ubaa8\ub4e0 NFT\ub97c \ucc3e\uace0 \uacb0\uacfc \uc9d1\ud569\uc758 \uae38\uc774\ub97c \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4. \uc81c\uacf5\ub41c ",(0,r.jsx)(n.code,{children:"AccountID"}),"\uc5d0 \ub300\ud55c \ud1a0\ud070 \uc9d1\ud569\uc774 \uc5c6\uc73c\uba74 \ud568\uc218\ub294 ",(0,r.jsx)(n.code,{children:"0"}),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."]}),(0,r.jsx)(s.Ey,{language:"rust",start:"28",end:"43",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/enumeration.rs"}),(0,r.jsx)(n.p,{children:"\uadf8\ub7f0 \ub2e4\uc74c CLI\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ub7ec\ud55c \uc0c8 \uba54\uc11c\ub4dc\ub97c \ucffc\ub9ac\ud558\uace0 \uc62c\ubc14\ub974\uac8c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"redeploying-contract",children:"\ucee8\ud2b8\ub799\ud2b8 \uc7ac\ubc30\ud3ec"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"nft_tokens_for_owner"}),"\uc5d0 \ud544\uc694\ud55c \ub85c\uc9c1\uc744 \uad6c\ud604\ud588\uc73c\ubbc0\ub85c \uc774\uc81c \ucee8\ud2b8\ub799\ud2b8\ub97c \ube4c\ub4dc\ud558\uace0 \uacc4\uc815\uc5d0 \uc7ac\ubc30\ud3ec\ud560 \ucc28\ub840\uc785\ub2c8\ub2e4. Using the cargo-near, deploy the contract as you did in the previous tutorials:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo near deploy $NFT_CONTRACT_ID without-init-call network-config testnet sign-with-keychain send\n"})}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"\ud1a0\ud070-\uc5f4\uac70",children:"\ud1a0\ud070 \uc5f4\uac70"}),(0,r.jsx)(n.p,{children:"\uc5c5\ub370\uc774\ud2b8\ub41c \ucee8\ud2b8\ub799\ud2b8\uac00 \uc7ac\ubc30\ud3ec\ub418\uba74 \uc774\ub7ec\ud55c \uc0c8 \ud568\uc218\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud14c\uc2a4\ud2b8\ud558\uace0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,r.jsx)(n.h3,{id:"nft-\ud1a0\ud070",children:"NFT \ud1a0\ud070"}),(0,r.jsx)(n.p,{children:"\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070(NFT) \ubaa9\ub85d\uc744 \ucffc\ub9ac\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec 10\ubc88\uc9f8 \ud56d\ubaa9\ubd80\ud130 \ucd5c\ub300 50\uac1c\uc758 NFT \uc815\ubcf4\ub97c \ucffc\ub9ac\ud569\ub2c8\ub2e4."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near contract call-function as-read-only $NFT_CONTRACT_ID nft_tokens json-args \'{"from_index": "10", "limit": 50}\' network-config testnet now\n'})}),(0,r.jsx)(n.p,{children:"\uc774 \uba85\ub839\uc740 \ub2e4\uc74c\uacfc \uc720\uc0ac\ud55c \ucd9c\ub825\uc744 \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4."}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"\uc751\ub2f5 \uc608\uc2dc: "}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"[]\n"})})})]}),(0,r.jsx)("hr",{class:"subsection"}),(0,r.jsx)(n.h3,{id:"\uc18c\uc720\uc790\ubcc4-\ud1a0\ud070",children:"\uc18c\uc720\uc790\ubcc4 \ud1a0\ud070"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"goteam.testnet"})," \uacc4\uc815\uc774 \uc18c\uc720\ud55c NFT\uc758 \ucd1d \uacf5\uae09\ub7c9\uc744 \uc5bb\uc73c\ub824\uba74, ",(0,r.jsx)(n.code,{children:"nft_supply_for_owner"})," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uace0 ",(0,r.jsx)(n.code,{children:"account_id"})," \ub9e4\uac1c\ubcc0\uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near contract call-function as-read-only $NFT_CONTRACT_ID nft_supply_for_owner json-args \'{"account_id": "goteam.testnet"}\' network-config testnet now\n'})}),(0,r.jsx)(n.p,{children:"\uadf8\ub7ec\uba74 \ub2e4\uc74c\uacfc \uc720\uc0ac\ud55c \ucd9c\ub825\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4."}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"\uc751\ub2f5 \uc608\uc2dc: "}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"0\n"})})})]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),(0,r.jsxs)(n.p,{children:["\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/enumeration#modifications-to-the-contract",children:"\ub450 \uac1c\uc758 \uc0c8\ub85c\uc6b4 \uc5f4\uac70 \ud568\uc218"}),"\ub97c \ucd94\uac00\ud588\uc73c\uba70, \uc774\uc81c \uc0dd\uc131 \ubc0f \uc5f4\uac70 \uba54\uc11c\ub4dc\uac00 \uc788\ub294 \uae30\ubcf8 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc218\uc815 \uc0ac\ud56d\uc744 \uad6c\ud604\ud55c \ud6c4 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc7ac\ubc30\ud3ec\ud558\uace0 CLI\ub97c \uc0ac\uc6a9\ud558\uc5ec \uae30\ub2a5\uc744 \ud14c\uc2a4\ud2b8\ud588\uc2b5\ub2c8\ub2e4."]}),(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.a,{href:"/ko/tutorials/nfts/core",children:"next tutorial"}),", you'll implement the core functions needed to allow users to transfer the minted tokens."]}),(0,r.jsxs)(n.admonition,{title:"\ubb38\uc11c \ubc84\uc804 \uad00\ub9ac",type:"note",children:[(0,r.jsx)(n.p,{children:"\uae00\uc744 \uc791\uc131\ud558\ub294 \uc2dc\uc810\uc5d0\uc11c, \ud574\ub2f9 \uc608\uc81c\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["rustc: ",(0,r.jsx)(n.code,{children:"1.77.1"})]}),"\n",(0,r.jsxs)(n.li,{children:["near-cli-rs: ",(0,r.jsx)(n.code,{children:"0.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["cargo-near ",(0,r.jsx)(n.code,{children:"0.6.1"})]}),"\n",(0,r.jsxs)(n.li,{children:["NFT standard: ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(n.code,{children:"1.0.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["\uc5f4\uac70 \ud45c\uc900: ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", ",(0,r.jsx)(n.code,{children:"1.0.0"})," \ubc84\uc804"]}),"\n"]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),a=t(36905),s=t(12466),i=t(16550),o=t(20469),l=t(91980),u=t(67392),c=t(20812);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function m(e){var n,t,a,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,m=h(e),x=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),g=x[0],j=x[1],b=p({queryString:u,groupId:d}),v=b[0],y=b[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),w=k[0],T=k[1],_=function(){var e=null!=v?v:w;return f({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){_&&j(_)}),[_]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),T(e)}),[y,T,m]),tabValues:m}}var x=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function b(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(u(n),i(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},s,{className:(0,a.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=m(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(b,Object.assign({},n,e)),(0,j.jsx)(v,Object.assign({},n,e))]})}function k(e){var n=(0,x.Z)();return(0,j.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>p,Ey:()=>x,SQ:()=>m});var r=t(67294),a=t(74866),s=t(85162),i=t(74165),o=t(15861),l=t(1841),u=t.n(l),c=t(85893);function d(){return(d=(0,o.Z)((0,i.Z)().mark((function e(n,t,r){var a,s,o,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(n+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):o.length,o=o.slice(t,r),l=o.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var n=e.url,t=e.start,a=e.end,s=e.language,i=e.fname,o=e.metastring,l=(0,r.useState)("Loading..."),h=l[0],f=l[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return d.apply(this,arguments)}(e,t,a);r.then((function(e){return f(e)}))})),(0,c.jsxs)("div",{fname:i,children:[(0,c.jsx)(u(),{language:s,metastring:o+" showLineNumbers",children:h}),(0,c.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,c.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,c.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,c.jsx)(s.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function m(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,s=t.end,i=t.fname;if(e.type===x)return x({url:r,start:a,end:s,language:n,fname:i});return e}(e,t)})),1==n.length?(0,c.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,c.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,c.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))})}function x(e){var n=e.url,t=e.start,r=e.end,a=e.language,s=e.fname,i=e.metastring;return h({url:n,start:t,end:r,language:a,fname:s,metastring:i})}}}]);