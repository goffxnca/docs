"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9179],{7897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var a=n(85893),r=n(11151),o=n(74866),i=n(85162),c=n(71183);const l={id:"locking-the-contract",title:"Locking the contract",sidebar_label:"Locking the contract"},s=void 0,u={id:"tutorials/auction/locking-the-contract",title:"Locking the contract",description:"In the basic contract, the auctioneer would claim the tokens from the final bid of the contract via logging into the contract accounts wallet using a key. It is a security issue for there to exist a key for a smart contract since the key holder can take the funds from the contract at any point, maliciously change the contract or just delete the contract as a whole. To stop exploitation we will lock the contract by removing all access keys and implementing a new method to claim the tokens.",source:"@site/../docs/3.tutorials/auction/2-locking.md",sourceDirName:"3.tutorials/auction",slug:"/tutorials/auction/locking-the-contract",permalink:"/tutorials/auction/locking-the-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/auction/2-locking.md",tags:[],version:"current",lastUpdatedBy:"Owen",lastUpdatedAt:1726498411e3,sidebarPosition:2,frontMatter:{id:"locking-the-contract",title:"Locking the contract",sidebar_label:"Locking the contract"}},d={},h=[{value:"Adding an auctioneer",id:"adding-an-auctioneer",level:2},{value:"Adding the claim method",id:"adding-the-claim-method",level:2},{value:"Updating the tests",id:"updating-the-tests",level:2},{value:"Deploying and locking",id:"deploying-and-locking",level:2},{value:"Conclusion",id:"conclusion",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In the basic contract, the auctioneer would claim the tokens from the final bid of the contract via logging into the contract accounts wallet using a key. It is a security issue for there to exist a key for a smart contract since the key holder can take the funds from the contract at any point, maliciously change the contract or just delete the contract as a whole. To stop exploitation we will ",(0,a.jsx)(t.a,{href:"/concepts/protocol/access-keys#locked-accounts",children:"lock"})," the contract by removing all access keys and implementing a new method to ",(0,a.jsx)(t.code,{children:"claim"})," the tokens."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"adding-an-auctioneer",children:"Adding an auctioneer"}),"\n",(0,a.jsxs)(t.p,{children:["When we introduce the ",(0,a.jsx)(t.code,{children:"claim"})," method we want to make sure that the individual or entity that set up the auction receives the $NEAR tokens. To do this we now change the ",(0,a.jsx)(t.code,{children:"init"})," method to initialize the contract with an ",(0,a.jsx)(t.code,{children:"auctioneer"}),"."]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"contract.ts",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/02-owner-claims-money/src/contract.ts#L17-L21",start:"17",end:"21"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(c.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/02-owner-claims-money/src/lib.rs#L25-L35",start:"25",end:"35"})})]}),"\n",(0,a.jsxs)(t.p,{children:["Let's also introduce a boolean field named ",(0,a.jsx)(t.code,{children:"claimed"})," to track whether the tokens have been claimed by the auctioneer yet."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"adding-the-claim-method",children:"Adding the claim method"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"claim"})," method should only be callable when the auction is over, can only be executed once and should transfer the tokens to the auctioneer. We'll implement this as so:"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"contract.ts",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/02-owner-claims-money/src/contract.ts#L56-L61",start:"56",end:"61"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(c.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/02-owner-claims-money/src/lib.rs#L65-L76",start:"65",end:"76"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"updating-the-tests",children:"Updating the tests"}),"\n",(0,a.jsxs)(t.p,{children:["If we update our contract then we should update our tests accordingly. For example, the tests will now need to add ",(0,a.jsx)(t.code,{children:"auctioneer"})," to the arguments of ",(0,a.jsx)(t.code,{children:"init"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["We will also now also test the ",(0,a.jsx)(t.code,{children:"claim"})," method. The test will check that the ",(0,a.jsx)(t.code,{children:"auctioneer"})," account has received the correct amount of $NEAR tokens."]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"main.ava.js",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/02-owner-claims-money/sandbox-test/main.ava.js#L70-L81",start:"70",end:"81"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(c.Ey,{fname:"test_basics.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/02-owner-claims-money/tests/test_basics.rs#L89-L105",start:"89",end:"105"})})]}),"\n",(0,a.jsxs)(t.p,{children:["Note that the test doesn't check that the auctioneer has exactly 12 $NEAR since the auctioneer uses tokens through gas fees when calling ",(0,a.jsx)(t.code,{children:"claim"}),"."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"deploying-and-locking",children:"Deploying and locking"}),"\n",(0,a.jsx)(t.p,{children:'Go ahead and test, build and deploy your new contract, as in part 1. Remember to add the "auctioneer" argument when initializing.'}),"\n",(0,a.jsx)(t.p,{children:"Now we have the claim method, we can deploy the contract without keys. Later we will introduce a factory contract that deploys auctions to a locked account, but for now, we can manually remove the keys using the CLI to lock the account."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"near account delete-keys \n"})}),"\n",(0,a.jsx)(t.p,{children:"Next specify the contract account and click the right arrow \u2192 to delete all the keys. Make sure to select testnet"}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"Be extra careful to delete the keys from the correct account as you'll never be able to access the account again!"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"In this part of the tutorial, we learned how to lock a contract by creating a new method to claim tokens, specify an account on initialization that will claim the tokens and how to delete the contract account's keys with the CLI."}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.a,{href:"/tutorials/auction/winning-an-nft",children:"next part"}),", we'll add a prize to the auction by introducing a new primitive; spoiler, the primitive is an NFT. We'll look at how to use non-fungible token standards to send NFTs and interact with multiple interacting contracts in sandbox testing."]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var o=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),o=n(12466),i=n(16550),c=n(20469),l=n(91980),s=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),c=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(c),(0,a.useCallback)((function(e){if(c){var t=new URLSearchParams(o.location.search);t.set(c,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[c,o])]}function f(e){var t,n,r,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,d=e.groupId,f=h(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),b=g[0],v=g[1],x=p({queryString:s,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=w[0],I=w[1],L=function(){var e=null!=j?j:k;return m({value:e,tabValues:f})?e:null}();return(0,c.Z)((function(){L&&v(L)}),[L]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),I(e)}),[y,I,f]),tabValues:f}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,c=e.tabValues,l=[],s=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=c[n].value;r!==a&&(s(t),i(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;n=null!=(o=l[i])?o:l[l.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:c.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},o,{className:(0,r.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,Object.assign({},t,e)),(0,v.jsx)(j,Object.assign({},t,e))]})}function w(e){var t=(0,g.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>p,Ey:()=>g,SQ:()=>f});var a=n(67294),r=n(74866),o=n(85162),i=n(74165),c=n(15861),l=n(1841),s=n.n(l),u=n(85893);function d(){return(d=(0,c.Z)((0,i.Z)().mark((function e(t,n,a){var r,o,c,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((o=localStorage.getItem(t+"-until"))&&o>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return c=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):c.length,c=c.slice(n,a),l=c.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",c.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,r=e.end,o=e.language,i=e.fname,c=e.metastring,l=(0,a.useState)("Loading..."),h=l[0],m=l[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],o=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+o+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return d.apply(this,arguments)}(e,n,r);a.then((function(e){return m(e)}))})),(0,u.jsxs)("div",{fname:i,children:[(0,u.jsx)(s(),{language:o,metastring:c+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var m={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(o.Z,{value:e.props.value,label:m[e.props.value],children:e})}))})}function f(e){var t=e.children,n=e.language,a=e.showSingleFName;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,o=n.end,i=n.fname;if(e.type===g)return g({url:a,start:r,end:o,language:t,fname:i});return e}(e,n)})),1!=t.length||a?(0,u.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(o.Z,{value:t,label:e.props.fname,children:e})}))}):(0,u.jsx)(o.Z,{value:0,label:t[0].props.fname,children:t[0]})}function g(e){var t=e.url,n=e.start,a=e.end,r=e.language,o=e.fname,i=e.metastring;return h({url:t,start:n,end:a,language:r,fname:o,metastring:i})}}}]);