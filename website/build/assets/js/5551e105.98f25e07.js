"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1935],{70990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(85893),r=n(11151),o=n(71183);const i={id:"royalty",title:"Royalty",sidebar_label:"Royalty"},l=void 0,s={id:"tutorials/nfts/royalty",title:"Royalty",description:"In this tutorial you'll continue building your non-fungible token (NFT) smart contract, and learn how to implement perpetual royalties into your NFTs. This will allow people to get a percentage of the purchase price when an NFT is sold.",source:"@site/../docs/3.tutorials/nfts/6-royalty.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/royalty",permalink:"/tutorials/nfts/royalty",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/6-royalty.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1719787277e3,sidebarPosition:6,frontMatter:{id:"royalty",title:"Royalty",sidebar_label:"Royalty"},sidebar:"tutorials",previous:{title:"Marketplace",permalink:"/tutorials/nfts/marketplace"},next:{title:"Lazy Minting, Collections, and More!",permalink:"/tutorials/nfts/series"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Thinking about the problem",id:"thinking-about-the-problem",level:2},{value:"Expanding the current solution",id:"expanding-the-current-solution",level:3},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Internal helper function",id:"internal-helper-function",level:3},{value:"Royalties",id:"royalties",level:3},{value:"Perpetual royalties",id:"perpetual-royalties",level:3},{value:"Adding royalty object to struct implementations",id:"adding-royalty-object-to-struct-implementations",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Deployment and initialization",id:"deployment-and-initialization",level:3},{value:"Minting",id:"minting",level:3},{value:"NFT payout",id:"nft-payout",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"In this tutorial you'll continue building your non-fungible token (NFT) smart contract, and learn how to implement perpetual royalties into your NFTs. This will allow people to get a percentage of the purchase price when an NFT is sold."}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:["By now, you should have a fully fledged NFT contract, except for the royalties support.\nTo get started, go to the ",(0,a.jsx)(t.code,{children:"nft-contract-approval/"})," folder from our ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial/",children:"GitHub repository"}),", or continue your work from the previous tutorials."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd nft-contract-approval/\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["If you wish to see the finished code for this ",(0,a.jsx)(t.em,{children:"Royalty"})," tutorial, you can find it in the ",(0,a.jsx)(t.code,{children:"nft-contract-royalty"})," folder."]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"thinking-about-the-problem",children:"Thinking about the problem"}),"\n",(0,a.jsxs)(t.p,{children:["In order to implement the functionality, you first need to understand how NFTs are sold. In the previous tutorial, you saw how someone with an NFT could list it on a marketplace using the ",(0,a.jsx)(t.code,{children:"nft_approve"})," function by passing in a message that could be properly decoded. When a user purchases your NFT on the marketplace, what happens?"]}),"\n",(0,a.jsxs)(t.p,{children:["Using the knowledge you have now, a reasonable conclusion would be to say that the marketplace transfers the NFT to the buyer by performing a cross-contract call and invokes the NFT contract's ",(0,a.jsx)(t.code,{children:"nft_transfer"})," method. Once that function finishes, the marketplace would pay the seller for the correct amount that the buyer paid."]}),"\n",(0,a.jsx)(t.p,{children:"Let's now think about how this can be expanded to allow for a cut of the pay going to other accounts that aren't just the seller."}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"expanding-the-current-solution",children:"Expanding the current solution"}),"\n",(0,a.jsxs)(t.p,{children:["Since perpetual royalties will be on a per-token basis, it's safe to assume that you should be changing the ",(0,a.jsx)(t.code,{children:"Token"})," and ",(0,a.jsx)(t.code,{children:"JsonToken"})," structs. You need some way of keeping track of what percentage each account with a royalty should have. If you introduce a map of an account to an integer, that should do the trick."]}),"\n",(0,a.jsx)(t.p,{children:"Now, you need some way to relay that information to the marketplace. This method should be able to transfer the NFT exactly like the old solution but with the added benefit of telling the marketplace exactly what accounts should be paid what amounts. If you implement a method that transfers the NFT and then calculates exactly what accounts get paid and to what amount based on a passed-in balance, that should work nicely."}),"\n",(0,a.jsxs)(t.p,{children:["This is what the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/NonFungibleToken/Payout",children:"royalty standards"})," outlined. Let's now move on and modify our smart contract to introduce this behavior."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),"\n",(0,a.jsxs)(t.p,{children:["The first thing you'll want to do is add the royalty information to the structs. Open the ",(0,a.jsx)(t.code,{children:"nft-contract-approval/src/metadata.rs"})," file and add ",(0,a.jsx)(t.code,{children:"royalty"})," to the ",(0,a.jsx)(t.code,{children:"Token"})," struct:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"pub royalty: HashMap<AccountId, u32>,\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Second, you'll want to add ",(0,a.jsx)(t.code,{children:"royalty"})," to the ",(0,a.jsx)(t.code,{children:"JsonToken"})," struct as well:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"pub royalty: HashMap<AccountId, u32>,\n"})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"internal-helper-function",children:"Internal helper function"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"royalty_to_payout"})}),"\n",(0,a.jsxs)(t.p,{children:["To simplify the payout calculation, let's add a helper ",(0,a.jsx)(t.code,{children:"royalty_to_payout"})," function to ",(0,a.jsx)(t.code,{children:"src/internal.rs"}),". This will convert a percentage to the actual amount that should be paid. In order to allow for percentages less than 1%, you can give 100% a value of ",(0,a.jsx)(t.code,{children:"10,000"}),". This means that the minimum percentage you can give out is 0.01%, or ",(0,a.jsx)(t.code,{children:"1"}),". For example, if you wanted the account ",(0,a.jsx)(t.code,{children:"benji.testnet"})," to have a perpetual royalty of 20%, you would insert the pair ",(0,a.jsx)(t.code,{children:'"benji.testnet": 2000'})," into the payout map."]}),"\n",(0,a.jsx)(o.Ey,{language:"rust",start:"5",end:"8",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-royalty/src/internal.rs"}),"\n",(0,a.jsxs)(t.p,{children:["If you were to use the ",(0,a.jsx)(t.code,{children:"royalty_to_payout"})," function and pass in ",(0,a.jsx)(t.code,{children:"2000"})," as the ",(0,a.jsx)(t.code,{children:"royalty_percentage"})," and an ",(0,a.jsx)(t.code,{children:"amount_to_pay"})," of 1 NEAR, it would return a value of 0.2 NEAR."]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"royalties",children:"Royalties"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"nft_payout"})}),"\n",(0,a.jsxs)(t.p,{children:["Let's now implement a method to check what accounts will be paid out for an NFT given an amount, or balance. Open the ",(0,a.jsx)(t.code,{children:"nft-contract/src/royalty.rs"})," file, and modify the ",(0,a.jsx)(t.code,{children:"nft_payout"})," function as shown."]}),"\n",(0,a.jsx)(o.Ey,{language:"rust",start:"22",end:"67",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-royalty/src/royalty.rs"}),"\n",(0,a.jsxs)(t.p,{children:["This function will loop through the token's royalty map and take the balance and convert that to a payout using the ",(0,a.jsx)(t.code,{children:"royalty_to_payout"})," function you created earlier. It will give the owner of the token whatever is left from the total royalties. As an example:"]}),"\n",(0,a.jsx)(t.p,{children:"You have a token with the following royalty field:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'Token {\n    owner_id: "damian",\n    royalty: {\n        "benji": 1000,\n        "josh": 500,\n        "mike": 2000\n    }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["If a user were to call ",(0,a.jsx)(t.code,{children:"nft_payout"})," on the token and pass in a balance of 1 NEAR, it would loop through the token's royalty field and insert the following into the payout object:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'Payout {\n    payout: {\n        "benji": 0.1 NEAR,\n        "josh": 0.05 NEAR,\n        "mike": 0.2 NEAR\n    }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["At the very end, it will insert ",(0,a.jsx)(t.code,{children:"damian"})," into the payout object and give him ",(0,a.jsx)(t.code,{children:"1 NEAR - 0.1 - 0.05 - 0.2 = 0.65 NEAR"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"nft_transfer_payout"})}),"\n",(0,a.jsx)(t.p,{children:"Now that you know how payouts are calculated, it's time to create the function that will transfer the NFT and return the payout to the marketplace."}),"\n",(0,a.jsx)(o.Ey,{language:"rust",start:"68",end:"135",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-royalty/src/royalty.rs"}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"perpetual-royalties",children:"Perpetual royalties"}),"\n",(0,a.jsxs)(t.p,{children:["To add support for perpetual royalties, let's edit the ",(0,a.jsx)(t.code,{children:"src/mint.rs"})," file. First, add an optional parameter for perpetual royalties. This is what will determine what percentage goes to which accounts when the NFT is purchased. You will also need to create and insert the royalty to be put in the ",(0,a.jsx)(t.code,{children:"Token"})," object:"]}),"\n",(0,a.jsx)(o.Ey,{language:"rust",start:"6",end:"80",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-royalty/src/mint.rs"}),"\n",(0,a.jsxs)(t.p,{children:["Next, you can use the CLI to query the new ",(0,a.jsx)(t.code,{children:"nft_payout"})," function and validate that it works correctly."]}),"\n",(0,a.jsx)(t.h3,{id:"adding-royalty-object-to-struct-implementations",children:"Adding royalty object to struct implementations"}),"\n",(0,a.jsxs)(t.p,{children:["Since you've added a new field to your ",(0,a.jsx)(t.code,{children:"Token"})," and ",(0,a.jsx)(t.code,{children:"JsonToken"})," structs, you need to edit your implementations accordingly. Move to the ",(0,a.jsx)(t.code,{children:"nft-contract/src/internal.rs"})," file and edit the part of your ",(0,a.jsx)(t.code,{children:"internal_transfer"})," function that creates the new ",(0,a.jsx)(t.code,{children:"Token"})," object:"]}),"\n",(0,a.jsx)(o.Ey,{language:"rust",start:"184",end:"192",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-royalty/src/internal.rs"}),"\n",(0,a.jsxs)(t.p,{children:["Once that's finished, move to the ",(0,a.jsx)(t.code,{children:"nft-contract-approval/src/nft_core.rs"})," file. You need to edit your implementation of ",(0,a.jsx)(t.code,{children:"nft_token"})," so that the ",(0,a.jsx)(t.code,{children:"JsonToken"})," sends back the new royalty information."]}),"\n",(0,a.jsx)(o.Ey,{language:"rust",start:"160",end:"177",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-royalty/src/nft_core.rs"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"redeploying-contract",children:"Deploying the contract"}),"\n",(0,a.jsx)(t.p,{children:"As you saw in the previous tutorial, adding changes like these will cause problems when redeploying. Since these changes affect all the other tokens and the state won't be able to automatically be inherited by the new code, simply redeploying the contract will lead to errors. For this reason, you'll create a new account again."}),"\n",(0,a.jsx)(t.h3,{id:"deployment-and-initialization",children:"Deployment and initialization"}),"\n",(0,a.jsx)(t.p,{children:"Next, you'll deploy this contract to the network."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"export ROYALTY_NFT_CONTRACT_ID=<accountId>\nnear account create-account sponsor-by-faucet-service $ROYALTY_NFT_CONTRACT_ID autogenerate-new-keypair save-to-legacy-keychain network-config testnet create\n"})}),"\n",(0,a.jsx)(t.p,{children:"Using the cargo-near, deploy and initialize the contract as you did in the previous tutorials:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cargo near deploy $ROYALTY_NFT_CONTRACT_ID with-init-call new_default_meta json-args '{\"owner_id\": \"'$ROYALTY_NFT_CONTRACT_ID'\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' network-config testnet sign-with-keychain send\n"})}),"\n",(0,a.jsx)(t.h3,{id:"minting",children:"Minting"}),"\n",(0,a.jsxs)(t.p,{children:["Next, you'll need to mint a token. By running this command, you'll mint a token with a token ID ",(0,a.jsx)(t.code,{children:'"royalty-token"'})," and the receiver will be your new account. In addition, you're passing in a map with two accounts that will get perpetual royalties whenever your token is sold."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near contract call-function as-transaction $ROYALTY_NFT_CONTRACT_ID nft_mint json-args \'{"token_id": "royalty-token", "metadata": {"title": "Royalty Token", "description": "testing out the new royalty extension of the standard", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$ROYALTY_NFT_CONTRACT_ID\'", "perpetual_royalties": {"benjiman.testnet": 2000, "mike.testnet": 1000, "josh.testnet": 500}}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'0.1 NEAR\' sign-as $ROYALTY_NFT_CONTRACT_ID network-config testnet sign-with-legacy-keychain send\n'})}),"\n",(0,a.jsx)(t.p,{children:"You can check to see if everything went through properly by calling one of the enumeration functions:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near contract call-function as-read-only $ROYALTY_NFT_CONTRACT_ID nft_tokens_for_owner json-args \'{"account_id": "\'$ROYALTY_NFT_CONTRACT_ID\'", "limit": 10}\' network-config testnet now\n'})}),"\n",(0,a.jsx)(t.p,{children:"This should return an output similar to the following:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "token_id": "royalty-token",\n    "owner_id": "royalty.goteam.examples.testnet",\n    "metadata": {\n      "title": "Royalty Token",\n      "description": "testing out the new royalty extension of the standard",\n      "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif",\n      "media_hash": null,\n      "copies": null,\n      "issued_at": null,\n      "expires_at": null,\n      "starts_at": null,\n      "updated_at": null,\n      "extra": null,\n      "reference": null,\n      "reference_hash": null\n    },\n    "approved_account_ids": {},\n    "royalty": {\n      "josh.testnet": 500,\n      "benjiman.testnet": 2000,\n      "mike.testnet": 1000\n    }\n  }\n]\n'})}),"\n",(0,a.jsx)(t.p,{children:"Notice how there's now a royalty field that contains the 3 accounts that will get a combined 35% of all sales of this NFT? Looks like it works! Go team :)"}),"\n",(0,a.jsx)(t.h3,{id:"nft-payout",children:"NFT payout"}),"\n",(0,a.jsxs)(t.p,{children:["Let's calculate the payout for the ",(0,a.jsx)(t.code,{children:'"royalty-token"'})," NFT, given a balance of 100 yoctoNEAR. It's important to note that the balance being passed into the ",(0,a.jsx)(t.code,{children:"nft_payout"})," function is expected to be in yoctoNEAR."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near contract call-function as-read-only $ROYALTY_NFT_CONTRACT_ID nft_payout json-args \'{"token_id": "royalty-token", "balance": "100", "max_len_payout": 100}\' network-config testnet now\n'})}),"\n",(0,a.jsx)(t.p,{children:"This command should return an output similar to the following:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"{\n  payout: {\n    'josh.testnet': '5',\n    'royalty.goteam.examples.testnet': '65',\n    'mike.testnet': '10',\n    'benjiman.testnet': '20'\n  }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If the NFT was sold for 100 yoctoNEAR, josh would get 5, Benji would get 20, mike would get 10, and the owner, in this case ",(0,a.jsx)(t.code,{children:"royalty.goteam.examples.testnet"})," would get the rest: 65."]}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"At this point you have everything you need for a fully functioning NFT contract to interact with marketplaces.\nThe last remaining standard that you could implement is the events standard. This allows indexers to know what functions are being called and makes it easier and more reliable to keep track of information that can be used to populate the collectibles tab in the wallet for example."}),"\n",(0,a.jsx)(t.admonition,{title:"remember",type:"info",children:(0,a.jsxs)(t.p,{children:["If you want to see the finished code from this tutorial, you can go to the ",(0,a.jsx)(t.code,{children:"nft-contract-royalty"})," folder."]})}),"\n",(0,a.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,a.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["rustc: ",(0,a.jsx)(t.code,{children:"1.77.1"})]}),"\n",(0,a.jsxs)(t.li,{children:["near-cli-rs: ",(0,a.jsx)(t.code,{children:"0.11.0"})]}),"\n",(0,a.jsxs)(t.li,{children:["cargo-near ",(0,a.jsx)(t.code,{children:"0.6.1"})]}),"\n",(0,a.jsxs)(t.li,{children:["NFT standard: ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,a.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,a.jsxs)(t.li,{children:["Enumeration standard: ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", version ",(0,a.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,a.jsxs)(t.li,{children:["Royalties standard: ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Payout",children:"NEP199"}),", version ",(0,a.jsx)(t.code,{children:"2.0.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var o=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),o=n(12466),i=n(16550),l=n(20469),s=n(91980),c=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function y(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function f(e){var t,n,r,o,i=e.defaultValue,s=e.queryString,c=void 0!==s&&s,d=e.groupId,f=h(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),g=m[0],x=m[1],j=y({queryString:c,groupId:d}),b=j[0],v=j[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=w[0],T=w[1],N=function(){var e=null!=b?b:k;return p({value:e,tabValues:f})?e:null}();return(0,l.Z)((function(){N&&x(N)}),[N]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),v(e),T(e)}),[v,T,f]),tabValues:f}}var m=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function j(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,l=e.tabValues,s=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=s.indexOf(t),r=l[n].value;r!==a&&(c(t),i(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=s.indexOf(e.currentTarget)+1;n=null!=(a=s[r])?a:s[0];break;case"ArrowLeft":var o,i=s.indexOf(e.currentTarget)-1;n=null!=(o=s[i])?o:s[s.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:u},o,{className:(0,r.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function v(e){var t=f(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(j,Object.assign({},t,e)),(0,x.jsx)(b,Object.assign({},t,e))]})}function w(e){var t=(0,m.Z)();return(0,x.jsx)(v,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>y,Ey:()=>m,SQ:()=>f});var a=n(67294),r=n(74866),o=n(85162),i=n(74165),l=n(15861),s=n(1841),c=n.n(s),u=n(85893);function d(){return(d=(0,l.Z)((0,i.Z)().mark((function e(t,n,a){var r,o,l,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((o=localStorage.getItem(t+"-until"))&&o>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return l=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):l.length,l=l.slice(n,a),s=l.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",l.map((function(e){return e.slice(s)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,r=e.end,o=e.language,i=e.fname,l=e.metastring,s=(0,a.useState)("Loading..."),h=s[0],p=s[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],o=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+o+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return d.apply(this,arguments)}(e,n,r);a.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:i,children:[(0,u.jsx)(c(),{language:o,metastring:l+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function y(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(o.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,o=n.end,i=n.fname;if(e.type===m)return m({url:a,start:r,end:o,language:t,fname:i});return e}(e,n)})),1==t.length?(0,u.jsx)(o.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(o.Z,{value:t,label:e.props.fname,children:e})}))})}function m(e){var t=e.url,n=e.start,a=e.end,r=e.language,o=e.fname,i=e.metastring;return h({url:t,start:n,end:a,language:r,fname:o,metastring:i})}}}]);