"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3033],{23489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var r=t(85893),a=t(11151),i=t(71183);const o=t.p+"assets/images/logging-in-2fae41d7bd3bfaa9509e199426ef897e.png",s=t.p+"assets/images/chapter-2-explorer-transfer-620c7e86d643ecdf5f6a609731a6574a.jpg",l={sidebar_position:6,sidebar_label:"Access keys and login 2/2",title:"Implementing the login button"},c="Add the login functionality",u={id:"tutorials/crosswords/beginner/logging-in-implementation",title:"Implementing the login button",description:"Plan",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/02-beginner/06-logging-in-implementation.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/logging-in-implementation",permalink:"/zh-CN/tutorials/crosswords/beginner/logging-in-implementation",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/06-logging-in-implementation.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Access keys and login 2/2",title:"Implementing the login button"},sidebar:"tutorials",previous:{title:"Access keys and login 1/2",permalink:"/zh-CN/tutorials/crosswords/beginner/logging-in"},next:{title:"Overview",permalink:"/zh-CN/tutorials/crosswords/intermediate/overview"}},d={},h=[{value:"Plan",id:"plan",level:2},{value:"Adding the button",id:"adding-the-button",level:2},{value:"Call the contract function from JavaScript",id:"call-the-contract-function-from-javascript",level:2},{value:"Fetch the puzzle, finish up",id:"fetch-the-puzzle-finish-up",level:2},{value:"Run the React app",id:"run-the-react-app",level:2},{value:"For kicks",id:"for-kicks",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"add-the-login-functionality",children:"Add the login functionality"}),"\n",(0,r.jsx)(n.h2,{id:"plan",children:"Plan"}),"\n",(0,r.jsxs)(n.p,{children:["We're going to add a login button that uses ",(0,r.jsx)(n.code,{children:"near-api-js"})," to login with NEAR."]}),"\n",(0,r.jsx)(n.p,{children:"Below is the workflow of logging in:"}),"\n",(0,r.jsx)("img",{src:o,alt:"Three steps to logging in. 1. click the login button we will build. 2. It creates a private key in the browser local storage. 3. Three steps to logging in. 1. click the login button we will build. 2. It creates a private key in the browser local storage. 3. Redirected to NEAR Wallet where you sign, creating a new key"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"User clicks the login button"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"near-api-js"})," creates a private key in the browser"]}),"\n",(0,r.jsxs)(n.li,{children:["A redirect to NEAR Wallet occurs, passing the public key. NEAR Wallet (often) has a full-access key capable of the ",(0,r.jsx)(n.code,{children:"AddKey"})," action. The user follows a wizard, ultimately authorizing the creation of a new key. NEAR Wallet (often) has a full-access key capable of the ",(0,r.jsx)(n.code,{children:"AddKey"})," action. The user follows a wizard, ultimately authorizing the creation of a new key."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"adding-the-button",children:"Adding the button"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"src"})," directory we'll look at:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"index.js"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"App.js"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We won't go over every change, but instead point to the new logic."}),"\n",(0,r.jsxs)(n.p,{children:["First we set up a ",(0,r.jsx)(n.code,{children:"WalletConnection"})," object from our JavaScript library:"]}),"\n",(0,r.jsx)(i.Ey,{language:"js",start:"12",end:"20",url:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/1d64bf29c3376a18c71e5c5a075e29824d7a55f5/src/index.js"}),"\n",(0,r.jsx)(n.p,{children:"It's then used in React:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const signIn = () => {\n  walletConnection.requestSignIn(\n    nearConfig.contractName,\n    \'\', // title. Optional, by the way\n    \'\', // successUrl. Optional, by the way\n    \'\', // failureUrl. Optional, by the way\n  );\n};\n\nconst signOut = () => {\n  walletConnection.signOut();\n  \u2026\n};\n\n\u2026\n\nreturn (\n  <div id="page">\n    <h1>NEAR Crossword Puzzle</h1>\n    <div id="crossword-wrapper">\n      <div id="login">\n        { currentUser\n          ? <button onClick={signOut}>Log out</button>\n          : <button onClick={signIn}>Log in</button>\n        }\n      </div>\n      \u2026\n    </div>\n  </div>\n); Optional, by the way\n    \'\', // successUrl. Optional, by the way\n    \'\', // failureUrl. Optional, by the way\n  );\n};\n\nconst signOut = () => {\n  walletConnection.signOut();\n  \u2026\n};\n\n\u2026\n\nreturn (\n  <div id="page">\n    <h1>NEAR Crossword Puzzle</h1>\n    <div id="crossword-wrapper">\n      <div id="login">\n        { currentUser\n          ? <button onClick={signOut}>Log out</button>\n          : <button onClick={signIn}>Log in</button>\n        }\n      </div>\n      \u2026\n    </div>\n  </div>\n);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Once logged in, that ",(0,r.jsx)(n.code,{children:"WalletConnection"})," object will be tied to the logged-in user, and they'll use that key to sign transactions and interact with the contract."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Transactions that redirect to NEAR Wallet In our improved crossword puzzle, the function-call access key for the logged-in user will be signing a transaction to submit their solution.",type:"info",children:[(0,r.jsx)(n.p,{children:"You may notice, however, that sometimes you'll be redirected to NEAR Wallet, and other times you aren't."}),(0,r.jsxs)(n.p,{children:["This goes back to an earlier rule we mentioned: function-call access keys cannot send NEAR. They cannot perform the ",(0,r.jsx)(n.code,{children:"Transfer"})," Action. They cannot perform the ",(0,r.jsx)(n.code,{children:"Transfer"})," Action."]}),(0,r.jsx)(n.p,{children:"If a function call requires even 1 yoctoNEAR, NEAR Wallet (or any other wallet containing a full-access key) is required to sign the transaction. ::: :::"}),(0,r.jsx)(n.h2,{id:"call-the-contract-function-from-javascript",children:"Call the contract function from JavaScript"}),(0,r.jsxs)(n.p,{children:["The frontend code contains a check to see if the user has completed the crossword puzzle successfully. In there we'll add logic to call the ",(0,r.jsx)(n.code,{children:"submit_solution"})," function on the smart contract. In there we'll add logic to call the ",(0,r.jsx)(n.code,{children:"submit_solution"})," function on the smart contract."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Send the 5 NEAR prize to the logged-in winner\nlet functionCallResult = await walletConnection.account().functionCall({\n  contractId: nearConfig.contractName,\n  methodName: 'submit_solution',\n  args: {solution: seedPhrase, memo: \"Yay I won!\"},\n  gas: DEFAULT_FUNCTION_CALL_GAS, // optional param, by the way\n  attachedDeposit: 0,\n  walletMeta: '', // optional param, by the way\n  walletCallbackUrl: '' // optional param, by the way\n});\n\nif (functionCallResult && functionCallResult.transaction && functionCallResult.transaction.hash) {\n  // Display a link the NEAR Explorer\n  console.log('Transaction hash for explorer', functionCallResult.transaction.hash)\n}\n"})}),(0,r.jsxs)(n.admonition,{title:"try\u2026catch blocks It's not a bad idea to wrap these type of calls in try\u2026catch blocks to properly handle any errors that come from the blockchain.",type:"tip",children:[(0,r.jsx)(n.p,{children:"These errors can be quite helpful to the developer and the end user. ::: :::"}),(0,r.jsx)(n.h2,{id:"fetch-the-puzzle-finish-up",children:"Fetch the puzzle, finish up"}),(0,r.jsx)(n.p,{children:"In the previous chapter, the frontend had a hardcoded file containing information about the clues for a simple crossword puzzle. In this chapter, we've given the coordinates and details about the clues, but the frontend needs to fetch this information. In this chapter, we've given the coordinates and details about the clues, but the frontend needs to fetch this information."}),(0,r.jsxs)(n.p,{children:["We're going to modify the logic surrounding our view-only call to ",(0,r.jsx)(n.code,{children:"get_unsolved_puzzles"})," on the contract. We're going to modify the logic surrounding our view-only call to ",(0,r.jsx)(n.code,{children:"get_unsolved_puzzles"})," on the contract. This method now returns the clue information, so we've implemented a function that puts it in the proper format for React to construct the crossword puzzle."]}),(0,r.jsxs)(n.p,{children:["This is a tutorial about Rust smart contract development, so we won't focus on the details of this, but know we've added the function ",(0,r.jsx)(n.code,{children:"mungeBlockchainCrossword"}),". This allows us to keep adding custom crossword puzzles and have the frontend be dynamic. This allows us to keep adding custom crossword puzzles and have the frontend be dynamic."]}),(0,r.jsx)(n.p,{children:"We'll also make other minor changes like adding a page for when there are no puzzles available, and adding a loading screen."}),(0,r.jsx)(n.h2,{id:"run-the-react-app",children:"Run the React app"}),(0,r.jsx)(n.p,{children:"If you've been following this guide closely, you'll likely just need to start the React app with:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"env CONTRACT_NAME=crossword.friend.testnet npm run start\n"})}),(0,r.jsx)(n.p,{children:"As a helpful reminder, below has the steps necessary to recreate the subaccount, build the contract, deploy the subaccount, and call methods on the contract:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Go into the directory containing the Rust smart contract we\'ve been working on\ncd contract\n\n# Build\ncargo near build\n\n# Create fresh account if you wish, which is good practice\nnear account delete-account crossword.friend.testnet beneficiary friend.testnet network-config testnet sign-with-legacy-keychain send\n\nnear account create-account fund-myself crossword.friend.testnet \'1 NEAR\' autogenerate-new-keypair save-to-legacy-keychain sign-as friend.testnet network-config testnet sign-with-legacy-keychain send\n\n# Deploy\ncargo near deploy crossword.friend.testnet with-init-call new json-args \'{"owner_id": "crossword.friend.testnet"}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'0 NEAR\' network-config testnet sign-with-legacy-keychain send\n\n# Add the crossword puzzle\nnear contract call-function as-transaction crossword.friend.testnet new_puzzle json-args \'{"solution_hash":"d1a5cf9ad1adefe0528f7d31866cf901e665745ff172b96892693769ad284010","answers":[{"num": 1,"start": {"x": 1,"y": 1},"direction": "Down","length": 5,"clue": "NFT market on NEAR that specializes in cards and comics."},{"num": 2,"start": {"x": 0,"y": 2},"direction": "Across","length": 13,"clue": "You can move assets between NEAR and different chains, including Ethereum, by visiting ______.app"},{"num": 3,"start": {"x": 9,"y": 1},"direction": "Down","length": 8,"clue": "NFT market on NEAR with art, physical items, tickets, and more."},{"num": 4,"start": {"x": 3,"y": 8},"direction": "Across","length": 9,"clue": "The smallest denomination of the native token on NEAR."},{"num": 5,"start": {"x": 5,"y": 8},"direction": "Down","length": 3,"clue": "You typically deploy a smart contract with the NEAR ___ tool."}]}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'0 NEAR\' sign-as crossword.friend.testnet network-config testnet sign-with-legacy-keychain send\n\n# Return to the project root and start the React app\ncd ..\nenv CONTRACT_NAME=crossword.friend.testnet npm run start\n'})}),(0,r.jsx)(n.h2,{id:"for-kicks",children:"For kicks"}),(0,r.jsx)(n.p,{children:"For fun, try interacting with the smart contract using the React frontend and the CLI. For fun, try interacting with the smart contract using the React frontend and the CLI. We can check the status of the puzzle using the CLI, solve the puzzle with the frontend, and check the status again."}),(0,r.jsx)(n.p,{children:"Before and after solving the puzzle, run this command:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near contract call-function as-read-only crossword.friend.testnet get_puzzle_status json-args \'{"solution_hash": "d1a5cf9ad1adefe0528f7d31866cf901e665745ff172b96892693769ad284010"}\' network-config testnet now\n'})}),(0,r.jsxs)(n.p,{children:["This will return our enum ",(0,r.jsx)(n.code,{children:"PuzzleStatus"}),". Before solving the puzzle it should print: Before solving the puzzle it should print:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"    'Unsolved'\n"})}),(0,r.jsx)(n.p,{children:"and after:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"    { Solved: { memo: 'Yay I won!' } } } }\n"})}),(0,r.jsxs)(n.p,{children:["After you solve the crossword puzzle you'll see a screen with a link to NEAR Explorer to look at the details of the transaction. Notice we have our ",(0,r.jsx)(n.code,{children:"Transfer"})," Action in there: Notice we have our ",(0,r.jsx)(n.code,{children:"Transfer"})," Action in there:"]}),(0,r.jsx)("figure",{children:(0,r.jsx)("img",{src:s,alt:"Screenshot from the NEAR Explorer highlighting a place in the transaction where 5 NEAR is sent to mike.testnet"})}),(0,r.jsx)("br",{}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.p,{children:"That's it for this chapter! That's it for this chapter! As a reminder the full code is available at:"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/near-examples/crossword-tutorial-chapter-2",children:"https://github.com/near-examples/crossword-tutorial-chapter-2"})})]})]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(67294),a=t(36905),i=t(12466),o=t(16550),s=t(20469),l=t(91980),c=t(67392),u=t(20812);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,o.k6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((function(e){if(s){var n=new URLSearchParams(i.location.search);n.set(s,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[s,i])]}function f(e){var n,t,a,i,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=h(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),b=m[0],v=m[1],w=g({queryString:c,groupId:d}),y=w[0],x=w[1],j=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=j[0],N=j[1],A=function(){var e=null!=y?y:k;return p({value:e,tabValues:f})?e:null}();return(0,s.Z)((function(){A&&v(A)}),[A]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),x(e),N(e)}),[x,N,f]),tabValues:f}}var m=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function w(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,s=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(c(n),o(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var i,o=l.indexOf(e.currentTarget)-1;t=null!=(i=l[o])?i:l[l.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function y(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function x(e){var n=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(w,Object.assign({},n,e)),(0,v.jsx)(y,Object.assign({},n,e))]})}function j(e){var n=(0,m.Z)();return(0,v.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>g,Ey:()=>m,SQ:()=>f});var r=t(67294),a=t(74866),i=t(85162),o=t(74165),s=t(15861),l=t(1841),c=t.n(l),u=t(85893);function d(){return(d=(0,s.Z)((0,o.Z)().mark((function e(n,t,r){var a,i,s,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(n+"-until"))&&i>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return s=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):s.length,s=s.slice(t,r),l=s.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",s.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var n=e.url,t=e.start,a=e.end,i=e.language,o=e.fname,s=e.metastring,l=(0,r.useState)("Loading..."),h=l[0],p=l[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],i=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+i+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return d.apply(this,arguments)}(e,t,a);r.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:o,children:[(0,u.jsx)(c(),{language:i,metastring:s+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function g(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,u.jsx)(i.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,i=t.end,o=t.fname;if(e.type===m)return m({url:r,start:a,end:i,language:n,fname:o});return e}(e,t)})),1==n.length?(0,u.jsx)(i.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,u.jsx)(i.Z,{value:n,label:e.props.fname,children:e})}))})}function m(e){var n=e.url,t=e.start,r=e.end,a=e.language,i=e.fname,o=e.metastring;return h({url:n,start:t,end:r,language:a,fname:i,metastring:o})}}}]);