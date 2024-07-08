"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3868],{35636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(85893),i=n(11151),r=n(71183);const o={id:"defining-a-token",title:"Defining a Fungible Token",sidebar_label:"Defining Your Token"},s=void 0,l={id:"tutorials/fts/defining-a-token",title:"Defining a Fungible Token",description:"This is the first of many tutorials in a series where you'll be creating a complete FT smart contract from scratch that conforms with all the NEAR FT standards. Today you'll learn what a Fungible Token is and how you can define one on the NEAR blockchain. You will be modifying a bare-bones skeleton smart contract by filling in the necessary code snippets needed to add this functionality. Today you'll learn what a Fungible Token is and how you can define one on the NEAR blockchain. You will be modifying a bare-bones skeleton smart contract by filling in the necessary code snippets needed to add this functionality.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/fts/2-define-a-token.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/defining-a-token",permalink:"/zh-CN/tutorials/fts/defining-a-token",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/2-define-a-token.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,sidebarPosition:2,frontMatter:{id:"defining-a-token",title:"Defining a Fungible Token",sidebar_label:"Defining Your Token"},sidebar:"tutorials",previous:{title:"Contract Architecture",permalink:"/zh-CN/tutorials/fts/skeleton"},next:{title:"Circulating Supply",permalink:"/zh-CN/tutorials/fts/circulating-supply"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the skeleton contract",id:"modifications",level:2},{value:"Defining a fungible token",id:"defining-a-fungible-token",level:3},{value:"Initialization Functions",id:"initialization-functions",level:4},{value:"Interacting with the contract on-chain",id:"interacting-with-the-contract-on-chain",level:2},{value:"Deploying and initializing the contract",id:"deploy-the-contract",level:3},{value:"Viewing the contract&#39;s metadata",id:"viewing-the-contracts-metadata",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Next Steps",id:"next-steps",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This is the first of many tutorials in a series where you'll be creating a complete FT smart contract from scratch that conforms with all the NEAR ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"FT standards"}),". Today you'll learn what a Fungible Token is and how you can define one on the NEAR blockchain. You will be modifying a bare-bones ",(0,a.jsx)(t.a,{href:"/tutorials/fts/skeleton",children:"skeleton smart contract"})," by filling in the necessary code snippets needed to add this functionality. Today you'll learn what a Fungible Token is and how you can define one on the NEAR blockchain. You will be modifying a bare-bones ",(0,a.jsx)(t.a,{href:"/tutorials/fts/skeleton",children:"skeleton smart contract"})," by filling in the necessary code snippets needed to add this functionality."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:["To get started, switch to the ",(0,a.jsx)(t.code,{children:"1.skeleton"})," folder in our repo. To get started, switch to the ",(0,a.jsx)(t.code,{children:"1.skeleton"})," folder in our repo. If you haven't cloned the repository, refer to the ",(0,a.jsx)(t.a,{href:"/tutorials/fts/skeleton",children:"Contract Architecture"})," to get started."]}),"\n",(0,a.jsxs)(t.p,{children:["If you wish to see the finished code for this portion of the tutorial, that can be found on the ",(0,a.jsx)(t.code,{children:"2.defining-a-token"})," folder."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"modifications",children:"Modifications to the skeleton contract"}),"\n",(0,a.jsxs)(t.p,{children:["At its very core, a fungible token is an exchangeable asset that ",(0,a.jsx)(t.strong,{children:"is divisible"})," but is ",(0,a.jsx)(t.strong,{children:"not unique"}),". For example, if Benji had 1 Canadian dollar, it would be worth the exact same as Matt's Canadian dollar. Both their dollars are fungible and exchangeable. In this case, the fungible token is the canadian dollar. All fiat currencies are fungible and exchangeable. For example, if Benji had 1 Canadian dollar, it would be worth the exact same as Matt's Canadian dollar. Both their dollars are fungible and exchangeable. In this case, the fungible token is the canadian dollar. All fiat currencies are fungible and exchangeable."]}),"\n",(0,a.jsxs)(t.p,{children:["Non-fungible tokens, on the other hand, are ",(0,a.jsx)(t.strong,{children:"unique"})," and ",(0,a.jsx)(t.strong,{children:"indivisible"})," such as a house or a car. You ",(0,a.jsx)(t.strong,{children:"cannot"})," have another asset that is exactly the same. Even if you had a specific car model, such as a Corvette 1963 C2 Stingray, each car would have a separate serial number with a different number of kilometers driven etc... You ",(0,a.jsx)(t.strong,{children:"cannot"})," have another asset that is exactly the same. Even if you had a specific car model, such as a Corvette 1963 C2 Stingray, each car would have a separate serial number with a different number of kilometers driven etc..."]}),"\n",(0,a.jsx)(t.p,{children:"Now that you understand what a fungible token is, let's look at how you can define one in the contract itself."}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"defining-a-fungible-token",children:"Defining a fungible token"}),"\n",(0,a.jsxs)(t.p,{children:["Start by navigating to the ",(0,a.jsx)(t.code,{children:"1.skeleton/src/metadata.rs"})," file. This is where you'll define the metadata for the fungible token itself. There are several ways NEAR allows you to customize your token, all of which are found in the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core#metadata",children:"metadata"})," standard. Let's break them up into the optional and non-optional portions."]}),"\n",(0,a.jsx)(t.p,{children:"Required:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"spec"}),": Indicates the version of the standard the contract is using. This should be set to ",(0,a.jsx)(t.code,{children:"ft-1.0.0"}),". This should be set to ",(0,a.jsx)(t.code,{children:"ft-1.0.0"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"name"}),': The human readable name of the token such as "Wrapped NEAR" or "TEAM Tokens".']}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"symbol"}),": The abbreviation of the token such as ",(0,a.jsx)(t.code,{children:"wNEAR"})," or ",(0,a.jsx)(t.code,{children:"gtNEAR"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"decimals"}),": used in frontends to show the proper significant digits of a token. This concept is explained well in this ",(0,a.jsx)(t.a,{href:"https://docs.openzeppelin.com/contracts/3.x/erc20#a-note-on-decimals",children:"OpenZeppelin post"}),". This concept is explained well in this ",(0,a.jsx)(t.a,{href:"https://docs.openzeppelin.com/contracts/3.x/erc20#a-note-on-decimals",children:"OpenZeppelin post"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Optional:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"icon"}),": The image for the token (must be a ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs",children:"data URL"}),")."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"reference"}),": A link to any supplementary JSON details for the token stored off-chain."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"reference_hash"}),": A hash of the referenced JSON."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"With this finished, you can now add these fields to the metadata in the contract."}),"\n",(0,a.jsx)(r.Ey,{language:"rust",start:"8",end:"19",url:"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/metadata.rs"}),"\n",(0,a.jsxs)(t.p,{children:["Now that you've defined what the metadata will look like, you need someway to store it on the contract. Switch to the ",(0,a.jsx)(t.code,{children:"1.skeleton/src/lib.rs"})," file and add the following to the ",(0,a.jsx)(t.code,{children:"Contract"})," struct. You'll want to store the metadata on the contract under the ",(0,a.jsx)(t.code,{children:"metadata"})," field."]}),"\n",(0,a.jsx)(r.Ey,{language:"rust",start:"18",end:"24",url:"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/lib.rs"}),"\n",(0,a.jsxs)(t.p,{children:["You've now defined ",(0,a.jsx)(t.em,{children:"where"})," the metadata will live but you'll also need someway to pass in the metadata itself. This is where the initialization function comes into play."]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h4,{id:"initialization-functions",children:"Initialization Functions"}),"\n",(0,a.jsxs)(t.p,{children:["You'll now create what's called an initialization function; you can name it ",(0,a.jsx)(t.code,{children:"new"}),". This function needs to be invoked when you first deploy the contract. It will initialize all the contract's fields that you've defined with default values. It's important to note that you ",(0,a.jsx)(t.strong,{children:"cannot"})," call these methods more than once."]}),"\n",(0,a.jsx)(r.Ey,{language:"rust",start:"58",end:"74",url:"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/lib.rs"}),"\n",(0,a.jsxs)(t.p,{children:["More often than not when doing development, you'll need to deploy contracts several times. You can imagine that it might get tedious to have to pass in metadata every single time you want to initialize the contract. For this reason, let's create a function that can initialize the contract with a set of default ",(0,a.jsx)(t.code,{children:"metadata"}),". You can call it ",(0,a.jsx)(t.code,{children:"new_default_meta"}),"."]}),"\n",(0,a.jsx)(r.Ey,{language:"rust",start:"38",end:"54",url:"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/lib.rs"}),"\n",(0,a.jsxs)(t.p,{children:["This function is simply calling the previous ",(0,a.jsx)(t.code,{children:"new"})," function and passing in some default metadata behind the scenes."]}),"\n",(0,a.jsxs)(t.p,{children:["At this point, you've defined the metadata for your fungible tokens and you've created a way to store this information on the contract. The last step is to introduce a getter that will query for and return the metadata. Switch to the ",(0,a.jsx)(t.code,{children:"1.skeleton/src/metadata.rs"})," file and add the following code to the ",(0,a.jsx)(t.code,{children:"ft_metadata"})," function."]}),"\n",(0,a.jsx)(r.Ey,{language:"rust",start:"21",end:"31",url:"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/metadata.rs"}),"\n",(0,a.jsxs)(t.p,{children:["This function will get the ",(0,a.jsx)(t.code,{children:"metadata"})," object from the contract which is of type ",(0,a.jsx)(t.code,{children:"FungibleTokenMetadata"})," and will return it."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"interacting-with-the-contract-on-chain",children:"Interacting with the contract on-chain"}),"\n",(0,a.jsx)(t.p,{children:"Now that the logic for defining a custom fungible token is complete and you've added a way to query for the metadata, it's time to build and deploy your contract to the blockchain."}),"\n",(0,a.jsx)(t.h3,{id:"deploy-the-contract",children:"Deploying and initializing the contract"}),"\n",(0,a.jsx)(t.p,{children:"You can build a contract using the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd 2.define-a-token\ncargo near build\n"})}),"\n",(0,a.jsxs)(t.p,{children:["There will be a list of warnings on your console, but as the tutorial progresses, these warnings will go away. You should now see the folder ",(0,a.jsx)(t.code,{children:"out/"})," with the file ",(0,a.jsx)(t.code,{children:"contract.wasm"})," inside. This is what we will be deploying to the blockchain."]}),"\n",(0,a.jsxs)(t.p,{children:["For deployment, you will need a NEAR account with the keys stored on your local machine. Navigate to the ",(0,a.jsx)(t.a,{href:"https://testnet.mynearwallet.com//",children:"NEAR wallet"})," site and create an account. Navigate to the ",(0,a.jsx)(t.a,{href:"https://testnet.mynearwallet.com/",children:"NEAR wallet"})," site and create an account."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Please ensure that you deploy the contract to an account with no pre-existing contracts. It's easiest to simply create a new account or create a sub-account for this tutorial. ::: It's easiest to simply create a new account or create a sub-account for this tutorial."})}),"\n",(0,a.jsxs)(t.p,{children:["Log in to your newly created account with ",(0,a.jsx)(t.code,{children:"near-cli-rs"})," by running the following command in your terminal."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near account import-account using-web-wallet network-config testnet\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To make this tutorial easier to copy/paste, we're going to set an environment variable for your account ID. To make this tutorial easier to copy/paste, we're going to set an environment variable for your account ID. In the command below, replace ",(0,a.jsx)(t.code,{children:"YOUR_ACCOUNT_NAME"})," with the account name you just logged in with including the ",(0,a.jsx)(t.code,{children:".testnet"})," portion:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'export FT_CONTRACT_ID="YOUR_ACCOUNT_NAME.testnet"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Test that the environment variable is set correctly by running:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"echo $FT_CONTRACT_ID\n"})}),"\n",(0,a.jsx)(t.p,{children:"Verify that the correct account ID is printed in the terminal. If everything looks correct you can now deploy your contract. The very first thing you need to do once the contract has been deployed is to initialize it. For simplicity, let's call the default metadata initialization function you wrote earlier so that you don't have to type the metadata manually in the CLI. Verify that the correct account ID is printed in the terminal. If everything looks correct you can now deploy your contract. In the root of your FT project run the following command to deploy your smart contract."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cargo near deploy $FT_CONTRACT_ID with-init-call new_default_meta json-args '{\"owner_id\": \"'$FT_CONTRACT_ID'\", \"total_supply\": \"0\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' network-config testnet sign-with-keychain send\n"})}),"\n",(0,a.jsx)(t.p,{children:"At this point, the contract should have been deployed to your account and initialized."}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"viewing-the-contracts-metadata",children:"Viewing the contract's metadata"}),"\n",(0,a.jsx)(t.p,{children:"Now that the contract has been initialized, you can query for the metadata by calling the function you wrote earlier."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near contract call-function as-read-only $FT_CONTRACT_ID ft_metadata json-args {} network-config testnet now\n"})}),"\n",(0,a.jsx)(t.p,{children:"This should return an output similar to the following:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"{\n  spec: 'ft-1.0.0',\n  name: 'Team Token FT Tutorial',\n  symbol: 'gtNEAR',\n  icon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/\n        /*\n        ...lots of base64 data...\n        */\n        j4Mvhy9H9NlnieJ4iwoo9ZlyLGx4pnrPWeB4CVGRZZcJ7Vohwhi0z5MJY4cVL4MdP/Z',\n  reference: null,\n  reference_hash: null,\n  decimals: 24\n}\n        */\n        j4Mvhy9H9NlnieJ4iwoo9ZlyLGx4pnrPWeB4CVGRZZcJ7Vohwhi0z5MJY4cVL4MdP/Z',\n  reference: null,\n  reference_hash: null,\n  decimals: 24\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Go team!"})," You've now verified that everything works correctly and you've defined your own fungible token!"]}),"\n",(0,a.jsx)(t.p,{children:"In the next tutorial, you'll learn about how to create a total supply and view the tokens in the wallet."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"In this tutorial, you went through the basics of setting up and understanding the logic behind creating a fungible token on the blockchain using a skeleton contract."}),"\n",(0,a.jsxs)(t.p,{children:["You first looked at ",(0,a.jsx)(t.a,{href:"#modifications",children:"what a fungible token is"})," and how it differs from a non-fungible token. You first looked at ",(0,a.jsx)(t.a,{href:"#modifications",children:"what a fungible token is"})," and how it differs from a non-fungible token. You then learned how to customize and create your own fungible tokens and how you could modify the skeleton contract to achieve this. Finally you built and deployed the contract and interacted with it using the NEAR CLI. Finally you built and deployed the contract and interacted with it using the NEAR CLI."]}),"\n",(0,a.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.a,{href:"/tutorials/fts/circulating-supply",children:"next tutorial"}),", you'll find out how to create an initial supply of tokens and have them show up in the NEAR wallet."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,a.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["rustc: ",(0,a.jsx)(t.code,{children:"1.77.1"})]}),"\n",(0,a.jsxs)(t.li,{children:["near-sdk-rs: ",(0,a.jsx)(t.code,{children:"5.1.0"})," (with enabled ",(0,a.jsx)(t.code,{children:"legacy"})," feature)"]}),"\n",(0,a.jsxs)(t.li,{children:["cargo-near: ",(0,a.jsx)(t.code,{children:"0.6.1"})]}),"\n",(0,a.jsxs)(t.li,{children:["near-cli-rs: ",(0,a.jsx)(t.code,{children:"0.11.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const i={tabItem:"tabItem_Ymn6"};var r=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),i=n(36905),r=n(12466),o=n(16550),s=n(20469),l=n(91980),c=n(67392),d=n(20812);function u(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,i=e.groupId,r=(0,o.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:i});return[(0,l._X)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(r.location.search);t.set(s,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[s,r])]}function g(e){var t,n,i,r,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,g=h(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:g})})),b=m[0],x=m[1],y=p({queryString:c,groupId:u}),j=y[0],w=y[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),i=n[0],r=n[1],[i,(0,a.useCallback)((function(e){t&&r.set(e)}),[t,r])]),k=v[0],T=v[1],N=function(){var e=null!=j?j:k;return f({value:e,tabValues:g})?e:null}();return(0,s.Z)((function(){N&&x(N)}),[N]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),T(e)}),[w,T,g]),tabValues:g}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function y(e){var t=e.className,n=e.block,a=e.selectedValue,o=e.selectValue,s=e.tabValues,l=[],c=(0,r.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=l.indexOf(t),i=s[n].value;i!==a&&(c(t),o(i))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,i=l.indexOf(e.currentTarget)+1;n=null!=(a=l[i])?a:l[0];break;case"ArrowLeft":var r,o=l.indexOf(e.currentTarget)-1;n=null!=(r=l[o])?r:l[l.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},r,{className:(0,i.Z)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,i=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=r.find((function(e){return e.props.value===i}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})}))})}function w(e){var t=g(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(y,Object.assign({},t,e)),(0,x.jsx)(j,Object.assign({},t,e))]})}function v(e){var t=(0,m.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:u(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>p,Ey:()=>m,SQ:()=>g});var a=n(67294),i=n(74866),r=n(85162),o=n(74165),s=n(15861),l=n(1841),c=n.n(l),d=n(85893);function u(){return(u=(0,s.Z)((0,o.Z)().mark((function e(t,n,a){var i,r,s,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=localStorage.getItem(t+"-until"))&&r>Date.now())){e.next=5;break}i=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:i=e.sent,localStorage.setItem(t,i),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return s=i.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):s.length,s=s.slice(n,a),l=s.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",s.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,i=e.end,r=e.language,o=e.fname,s=e.metastring,l=(0,a.useState)("Loading..."),h=l[0],f=l[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),i=a[0],r=a[1];return a[2],"https://raw.githubusercontent.com/"+i+"/"+r+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return u.apply(this,arguments)}(e,n,i);a.then((function(e){return f(e)}))})),(0,d.jsxs)("div",{fname:o,children:[(0,d.jsx)(c(),{language:r,metastring:s+" showLineNumbers",children:h}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,d.jsx)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,d.jsx)(r.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function g(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),i=n.start,r=n.end,o=n.fname;if(e.type===m)return m({url:a,start:i,end:r,language:t,fname:o});return e}(e,n)})),1==t.length?(0,d.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,d.jsx)(i.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,d.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function m(e){var t=e.url,n=e.start,a=e.end,i=e.language,r=e.fname,o=e.metastring;return h({url:t,start:n,end:a,language:i,fname:r,metastring:o})}}}]);