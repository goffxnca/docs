"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2799],{88398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(85893),a=n(11151),o=n(71183);const s={id:"enumeration",title:"Enumeration",sidebar_label:"Enumeration"},i=void 0,l={id:"tutorials/nfts/enumeration",title:"Enumeration",description:"In the previous tutorials, you looked at ways to integrate the minting functionality into a skeleton smart contract. In order to get your NFTs to show in the wallet, you also had to deploy a patch fix that implemented one of the enumeration methods. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the standard.",source:"@site/../docs/3.tutorials/nfts/3-enumeration.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/enumeration",permalink:"/tutorials/nfts/enumeration",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/3-enumeration.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1719787277e3,sidebarPosition:3,frontMatter:{id:"enumeration",title:"Enumeration",sidebar_label:"Enumeration"},sidebar:"tutorials",previous:{title:"Upgrade a Contract",permalink:"/tutorials/nfts/upgrade-contract"},next:{title:"Transfers",permalink:"/tutorials/nfts/core"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Redeploying the contract",id:"redeploying-contract",level:2},{value:"Enumerating tokens",id:"enumerating-tokens",level:2},{value:"NFT tokens",id:"nft-tokens",level:3},{value:"Tokens by owner",id:"tokens-by-owner",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In the previous tutorials, you looked at ways to integrate the minting functionality into a skeleton smart contract. In order to get your NFTs to show in the wallet, you also had to deploy a patch fix that implemented one of the enumeration methods. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"standard"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Now you'll extend the NFT smart contract and add a couple of enumeration methods that can be used to return the contract's state."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["As mentioned in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/upgrade-contract",children:"Upgrade a Contract"})," tutorial, you can deploy patches and fixes to smart contracts. This time, you'll use that knowledge to implement the ",(0,r.jsx)(t.code,{children:"nft_total_supply"}),", ",(0,r.jsx)(t.code,{children:"nft_tokens"})," and ",(0,r.jsx)(t.code,{children:"nft_supply_for_owner"})," enumeration functions."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),"\n",(0,r.jsxs)(t.p,{children:["Let's start by opening the  ",(0,r.jsx)(t.code,{children:"src/enumeration.rs"})," file and locating the empty ",(0,r.jsx)(t.code,{children:"nft_total_supply"})," function."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"nft_total_supply"})}),"\n",(0,r.jsxs)(t.p,{children:["This function should return the total number of NFTs stored on the contract. You can easily achieve this functionality by simply returning the length of the ",(0,r.jsx)(t.code,{children:"nft_metadata_by_id"})," data structure."]}),"\n",(0,r.jsx)(o.Ey,{language:"rust",start:"5",end:"9",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/enumeration.rs"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"nft_token"})}),"\n",(0,r.jsxs)(t.p,{children:["This function should return a paginated list of ",(0,r.jsx)(t.code,{children:"JsonTokens"})," that are stored on the contract regardless of their owners.\nIf the user provides a ",(0,r.jsx)(t.code,{children:"from_index"})," parameter, you should use that as the starting point for which to start iterating through tokens; otherwise it should start from the beginning. Likewise, if the user provides a ",(0,r.jsx)(t.code,{children:"limit"})," parameter, the function shall stop after reaching either the limit or the end of the list."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Rust has useful methods for pagination, allowing you to skip to a starting index and taking the first ",(0,r.jsx)(t.code,{children:"n"})," elements of an iterator."]})}),"\n",(0,r.jsx)(o.Ey,{language:"rust",start:"11",end:"26",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/enumeration.rs"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"nft_supply_for_owner"})}),"\n",(0,r.jsxs)(t.p,{children:["This function should look for all the non-fungible tokens for a user-defined owner, and return the length of the resulting set.\nIf there isn't a set of tokens for the provided ",(0,r.jsx)(t.code,{children:"AccountID"}),", then the function shall return ",(0,r.jsx)(t.code,{children:"0"}),"."]}),"\n",(0,r.jsx)(o.Ey,{language:"rust",start:"28",end:"43",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/enumeration.rs"}),"\n",(0,r.jsx)(t.p,{children:"Next, you can use the CLI to query these new methods and validate that they work correctly."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"redeploying-contract",children:"Redeploying the contract"}),"\n",(0,r.jsxs)(t.p,{children:["Now that you've implemented the necessary logic for ",(0,r.jsx)(t.code,{children:"nft_tokens_for_owner"}),", it's time to build and re-deploy the contract to your account. Using the cargo-near, deploy the contract as you did in the previous tutorials:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cargo near deploy $NFT_CONTRACT_ID without-init-call network-config testnet sign-with-keychain send\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"enumerating-tokens",children:"Enumerating tokens"}),"\n",(0,r.jsx)(t.p,{children:"Once the updated contract has been redeployed, you can test and see if these new functions work as expected."}),"\n",(0,r.jsx)(t.h3,{id:"nft-tokens",children:"NFT tokens"}),"\n",(0,r.jsx)(t.p,{children:"Let's query for a list of non-fungible tokens on the contract. Use the following command to query for the information of up to 50 NFTs starting from the 10th item:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near contract call-function as-read-only $NFT_CONTRACT_ID nft_tokens json-args \'{"from_index": "10", "limit": 50}\' network-config testnet now\n'})}),"\n",(0,r.jsx)(t.p,{children:"This command should return an output similar to the following:"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:"[]\n"})})})]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"tokens-by-owner",children:"Tokens by owner"}),"\n",(0,r.jsxs)(t.p,{children:["To get the total supply of NFTs owned by the ",(0,r.jsx)(t.code,{children:"goteam.testnet"})," account, call the ",(0,r.jsx)(t.code,{children:"nft_supply_for_owner"})," function and set the ",(0,r.jsx)(t.code,{children:"account_id"})," parameter:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near contract call-function as-read-only $NFT_CONTRACT_ID nft_supply_for_owner json-args \'{"account_id": "goteam.testnet"}\' network-config testnet now\n'})}),"\n",(0,r.jsx)(t.p,{children:"This should return an output similar to the following:"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:"0\n"})})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(t.p,{children:["In this tutorial, you have added two ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/enumeration#modifications-to-the-contract",children:"new enumeration functions"}),", and now you have a basic NFT smart contract with minting and enumeration methods in place. After implementing these modifications, you redeployed the smart contract and tested the functions using the CLI."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/core",children:"next tutorial"}),", you'll implement the core functions needed to allow users to transfer the minted tokens."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["rustc: ",(0,r.jsx)(t.code,{children:"1.77.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["near-cli-rs: ",(0,r.jsx)(t.code,{children:"0.11.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["cargo-near ",(0,r.jsx)(t.code,{children:"0.6.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["NFT standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Enumeration standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var o=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),o=n(12466),s=n(16550),i=n(20469),l=n(91980),u=n(67392),c=n(20812);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,n,a,o,s=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,m=h(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),x=g[0],b=g[1],j=p({queryString:u,groupId:d}),v=j[0],y=j[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=w[0],T=w[1],_=function(){var e=null!=v?v:k;return f({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){_&&b(_)}),[_]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),T(e)}),[y,T,m]),tabValues:m}}var g=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function j(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,i=e.tabValues,l=[],u=(0,o.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var o,s=l.indexOf(e.currentTarget)-1;n=null!=(o=l[s])?o:l[l.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},o,{className:(0,a.Z)("tabs__item",x.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=o.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=m(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,Object.assign({},t,e)),(0,b.jsx)(v,Object.assign({},t,e))]})}function w(e){var t=(0,g.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>p,Ey:()=>g,SQ:()=>m});var r=n(67294),a=n(74866),o=n(85162),s=n(74165),i=n(15861),l=n(1841),u=n.n(l),c=n(85893);function d(){return(d=(0,i.Z)((0,s.Z)().mark((function e(t,n,r){var a,o,i,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((o=localStorage.getItem(t+"-until"))&&o>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):i.length,i=i.slice(n,r),l=i.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,o=e.language,s=e.fname,i=e.metastring,l=(0,r.useState)("Loading..."),h=l[0],f=l[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],o=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+o+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return f(e)}))})),(0,c.jsxs)("div",{fname:s,children:[(0,c.jsx)(u(),{language:o,metastring:i+" showLineNumbers",children:h}),(0,c.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,c.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,c.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,c.jsx)(o.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,o=n.end,s=n.fname;if(e.type===g)return g({url:r,start:a,end:o,language:t,fname:s});return e}(e,n)})),1==t.length?(0,c.jsx)(o.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,c.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,c.jsx)(o.Z,{value:t,label:e.props.fname,children:e})}))})}function g(e){var t=e.url,n=e.start,r=e.end,a=e.language,o=e.fname,s=e.metastring;return h({url:t,start:n,end:r,language:a,fname:o,metastring:s})}}}]);