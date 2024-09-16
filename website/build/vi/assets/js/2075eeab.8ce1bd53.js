"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7866],{28361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(85893),a=n(11151),i=n(74866),o=n(85162);n(71183);const s={id:"deploy",title:"Deploying to Testnet"},c=void 0,l={id:"tutorials/auction/deploy",title:"Deploying to Testnet",description:"In the previous sections we saw how a simple auction smart contract is implemented, and checked its correctness using sandbox testing.",source:"@site/../docs/3.tutorials/auction/1.3-deploy.md",sourceDirName:"3.tutorials/auction",slug:"/tutorials/auction/deploy",permalink:"/vi/tutorials/auction/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/auction/1.3-deploy.md",tags:[],version:"current",lastUpdatedBy:"Owen",lastUpdatedAt:1726498411e3,frontMatter:{id:"deploy",title:"Deploying to Testnet"},sidebar:"tutorials",previous:{title:"Sandbox Testing",permalink:"/vi/tutorials/auction/sandbox-testing"},next:{title:"BOS Loader",permalink:"/vi/tutorials/near-components/bos-loader"}},u={},d=[{value:"Testnet Account",id:"testnet-account",level:2},{value:"Deploying the Contract",id:"deploying-the-contract",level:2},{value:"Interacting with the Contract",id:"interacting-with-the-contract",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"In the previous sections we saw how a simple auction smart contract is implemented, and checked its correctness using sandbox testing."}),"\n",(0,r.jsx)(t.p,{children:"The time has come to release it on the actual blockchain and interact with it! In this section, we will show you how to create a simple testnet account, deploy the contract and interact with it from the CLI."}),"\n",(0,r.jsx)(t.admonition,{title:"Networks",type:"info",children:(0,r.jsxs)(t.p,{children:["NEAR has two main networks for you to use: ",(0,r.jsx)(t.code,{children:"testnet"})," and ",(0,r.jsx)(t.code,{children:"mainnet"}),". The ",(0,r.jsx)(t.code,{children:"testnet"})," network behaves exactly as the main network, but uses test tokens with no real value"]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"testnet-account",children:"Testnet Account"}),"\n",(0,r.jsx)(t.p,{children:"To deploy a contract, you need a testnet account. If you don't have one, you can create one using the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# create-account using near-cli (contractId has end with .testnet)\nnear create <contractId> --useFaucet\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"<contractId>"})," with the name you want to give to your account, and make sure it ends with ",(0,r.jsx)(t.code,{children:".testnet"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The account will be created with ",(0,r.jsx)(t.strong,{children:"10 NEAR"})," (this are test tokens)."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Testnet Faucet",type:"info",children:[(0,r.jsxs)(t.p,{children:["Notice that we are using the ",(0,r.jsx)(t.code,{children:"--useFaucet"})," flag to automatically request test tokens from the NEAR faucet."]}),(0,r.jsx)(t.p,{children:"The faucet is only available on the testnet network - which is the default network for the CLI"})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"deploying-the-contract",children:"Deploying the Contract"}),"\n",(0,r.jsx)(t.p,{children:"To deploy the contract, you need to compile the contract code into WebAssembly (WASM) and then deploy it to the network"}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsx)(o.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# compile the contract\nnpm run build\n\n# deploy the contract\nnear deploy <contractId> ./build/auction.wasm\n\n# initialize the contract, it finishes in 2 minutes\nMINUTE_FROM_NOW=$(date -v+2M +%s000000000)\nnear call <contractId> init '{\"end_time\": \"'$MINUTE_FROM_NOW'\"}' --accountId <contractId>\n"})})}),(0,r.jsx)(o.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# compile the contract using cargo-near\ncargo near build\n\n# deploy the contract\nnear deploy <contractId> ./target/near/contract_rs.wasm\n\n# initialize the contract, it finishes in 2 minutes\nMINUTE_FROM_NOW=$(date -v+2M +%s000000000)\nnear call <contractId> init '{\"end_time\": \"'$MINUTE_FROM_NOW'\"}' --accountId <contractId>\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Now that the contract is deployed and initialized we can send transactions to it using the CLI."}),"\n",(0,r.jsx)(t.admonition,{title:"Interactive CLI",type:"tip",children:(0,r.jsxs)(t.p,{children:["NEAR's CLI is interactive meaning you can type ",(0,r.jsx)(t.code,{children:"near"})," and click through all the possible options without having to remember certain commands"]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"interacting-with-the-contract",children:"Interacting with the Contract"}),"\n",(0,r.jsxs)(t.p,{children:["We are now ready to start bidding by calling the ",(0,r.jsx)(t.code,{children:"bid"})," function on the contract. We recommend you to create ",(0,r.jsx)(t.strong,{children:"two new accounts"})," to simulate different bidders."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# call the contract to bid \nnear call <contractId> bid --accountId <bidderId> --amount 1\n\n# get the highest bid\nnear view <contractId> get_highest_bid\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Notice that we call the ",(0,r.jsx)(t.code,{children:"bid"})," function without arguments, but attach 1 NEAR to the transaction. This is the amount we are bidding."]}),"\n",(0,r.jsxs)(t.p,{children:["For the ",(0,r.jsx)(t.code,{children:"get_highest_bid"})," function, we don't need to specify which user is calling it, as it is a view function and does not require gas to be executed."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(t.p,{children:"We have now seen how to deploy a contract to the testnet and interact with it using the NEAR CLI."}),"\n",(0,r.jsx)(t.p,{children:"A word of advice before moving forward. When people learn how to use the CLI, they get lazy and start testing new contract features directly on the testnet. While this is tempting, it is not recommended."}),"\n",(0,r.jsxs)(t.p,{children:["Do not use testnet as your ",(0,r.jsx)(t.strong,{children:"only way"})," to test contracts. Always test your contracts on the ",(0,r.jsx)(t.strong,{children:"sandbox environment first"}),", and only deploy to the testnet when you are confident that everything is working as expected."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Frontend",type:"tip",children:[(0,r.jsx)(t.p,{children:"Generally you will use the CLI only to deploy and initialize the contract. After, all interactions will be made from a frontend"}),(0,r.jsx)(t.p,{children:"We will cover this topic in the future, after we have finished adding more features to the auction contract"})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(67294),a=n(36905),i=n(12466),o=n(16550),s=n(20469),c=n(91980),l=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,o.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,c._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function m(e){var t,n,a,i,o=e.defaultValue,c=e.queryString,l=void 0!==c&&c,d=e.groupId,m=h(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:m})})),v=g[0],b=g[1],x=f({queryString:l,groupId:d}),y=x[0],w=x[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),I=j[0],k=j[1],N=function(){var e=null!=y?y:I;return p({value:e,tabValues:m})?e:null}();return(0,s.Z)((function(){N&&b(N)}),[N]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),w(e),k(e)}),[w,k,m]),tabValues:m}}var g=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,o=e.selectValue,s=e.tabValues,c=[],l=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(l(t),o(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=m(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,Object.assign({},t,e)),(0,b.jsx)(y,Object.assign({},t,e))]})}function j(e){var t=(0,g.Z)();return(0,b.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>f,Ey:()=>g,SQ:()=>m});var r=n(67294),a=n(74866),i=n(85162),o=n(74165),s=n(15861),c=n(1841),l=n.n(c),u=n(85893);function d(){return(d=(0,s.Z)((0,o.Z)().mark((function e(t,n,r){var a,i,s,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return s=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):s.length,s=s.slice(n,r),c=s.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",s.map((function(e){return e.slice(c)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,i=e.language,o=e.fname,s=e.metastring,c=(0,r.useState)("Loading..."),h=c[0],p=c[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],i=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+i+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:o,children:[(0,u.jsx)(l(),{language:i,metastring:s+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language,r=e.showSingleFName;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,i=n.end,o=n.fname;if(e.type===g)return g({url:r,start:a,end:i,language:t,fname:o});return e}(e,n)})),1!=t.length||r?(0,u.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))}):(0,u.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]})}function g(e){var t=e.url,n=e.start,r=e.end,a=e.language,i=e.fname,o=e.metastring;return h({url:t,start:n,end:r,language:a,fname:i,metastring:o})}}}]);