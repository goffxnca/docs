"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8157],{8455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(85893),a=n(11151),i=(n(74866),n(85162),n(71183));const s={id:"coin-flip",title:"Coin Flip"},l=void 0,o={id:"tutorials/examples/coin-flip",title:"Coin Flip",description:"Coin Flip is a game where the player tries to guess the outcome of a coin flip. It is one of the simplest contracts implementing random numbers.",source:"@site/../docs/3.tutorials/examples/coin-flip.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/coin-flip",permalink:"/tutorials/examples/coin-flip",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/coin-flip.md",tags:[],version:"current",lastUpdatedBy:"matiasbenary",lastUpdatedAt:1720020198e3,frontMatter:{id:"coin-flip",title:"Coin Flip"},sidebar:"tutorials",previous:{title:"Cross Contract Call",permalink:"/tutorials/examples/xcc"},next:{title:"Factory",permalink:"/tutorials/examples/factory"}},c={},u=[{value:"Starting the Game",id:"starting-the-game",level:2},{value:"Interacting With the Counter",id:"interacting-with-the-counter",level:2},{value:"Structure of a dApp",id:"structure-of-a-dapp",level:2},{value:"Contract",id:"contract",level:3},{value:"Running the Frontend",id:"running-the-frontend",level:3},{value:"Understanding the Frontend",id:"understanding-the-frontend",level:3},{value:"Testing",id:"testing",level:2},{value:"Integration test",id:"integration-test",level:3},{value:"A Note On Randomness",id:"a-note-on-randomness",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Coin Flip is a game where the player tries to guess the outcome of a coin flip. It is one of the simplest contracts implementing random numbers."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"img",src:n(46104).Z+"",width:"960",height:"255"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"starting-the-game",children:"Starting the Game"}),"\n",(0,r.jsx)(t.p,{children:"You have two options to start the example:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Recommended:"})," use the app through Gitpod (a web-based interactive environment)"]}),"\n",(0,r.jsx)(t.li,{children:"Clone the project locally."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Gitpod"}),(0,r.jsx)(t.th,{children:"Clone locally"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/coin-flip-examples.git",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"https://github.com/near-examples/coin-flip-examples.git"})})]})})]}),"\n",(0,r.jsx)(t.p,{children:"If you choose Gitpod, a new browser window will open automatically with the code. Give it a minute, and the front-end will pop up (ensure the pop-up window is not blocked)."}),"\n",(0,r.jsx)(t.p,{children:"If you are running the app locally, you should build and deploy a contract (JavaScript or Rust version) and a client manually."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"interacting-with-the-counter",children:"Interacting With the Counter"}),"\n",(0,r.jsxs)(t.p,{children:["Go ahead and log in with your NEAR account. If you don't have one, you can create one on the fly. Once logged in, use the ",(0,r.jsx)(t.code,{children:"tails"})," and ",(0,r.jsx)(t.code,{children:"heads"})," buttons to try to guess the next coin flip outcome."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"img",src:n(46104).Z+"",width:"960",height:"255"}),"\n",(0,r.jsx)(t.em,{children:"Frontend of the Game"})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"structure-of-a-dapp",children:"Structure of a dApp"}),"\n",(0,r.jsx)(t.p,{children:"Now that you understand what the dApp does, let us take a closer look to its structure:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["The frontend code lives in the ",(0,r.jsx)(t.code,{children:"/frontend"})," folder."]}),"\n",(0,r.jsxs)(t.li,{children:["The smart contract code in Rust is in the ",(0,r.jsx)(t.code,{children:"/contract-rs"})," folder."]}),"\n",(0,r.jsxs)(t.li,{children:["The smart contract code in JavaScript is in the ",(0,r.jsx)(t.code,{children:"/contract-ts"})," folder."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Both Rust and JavaScript versions of the contract implement the same functionality."})}),"\n",(0,r.jsx)(t.h3,{id:"contract",children:"Contract"}),"\n",(0,r.jsxs)(t.p,{children:["The contract presents 2 methods: ",(0,r.jsx)(t.code,{children:"flip_coin"}),", and ",(0,r.jsx)(t.code,{children:"points_of"}),"."]}),"\n",(0,r.jsxs)(i.O2,{children:[(0,r.jsx)(i.SQ,{value:"js",language:"ts",children:(0,r.jsx)(i.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/coin-flip-examples/blob/main/contract-ts/src/contract.ts",start:"23",end:"56"})}),(0,r.jsx)(i.SQ,{value:"rust",language:"rust",children:(0,r.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/coin-flip-examples/blob/main/contract-rs/src/lib.rs",start:"46",end:"70"})})]}),"\n",(0,r.jsx)(t.h3,{id:"running-the-frontend",children:"Running the Frontend"}),"\n",(0,r.jsx)(t.p,{children:"To start the frontend you will need to install the dependencies and start the server."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd frontend\nyarn\nyarn dev\n"})}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"understanding-the-frontend",children:"Understanding the Frontend"}),"\n",(0,r.jsxs)(t.p,{children:["The frontend is a ",(0,r.jsx)(t.a,{href:"https://nextjs.org/",children:"Next.JS"})," project generated by ",(0,r.jsx)(t.a,{href:"https://github.com/near/create-near-app",children:"create-near-app"}),". Check ",(0,r.jsx)(t.code,{children:"_app.js"})," and ",(0,r.jsx)(t.code,{children:"index.js"})," to understand how components are displayed and interacting with the contract."]}),"\n",(0,r.jsxs)(i.SQ,{value:"js",language:"js",children:[(0,r.jsx)(i.Ey,{fname:"_app.js",url:"https://github.com/near-examples/coin-flip-workshop-js/blob/main/frontend/src/pages/_app.js"}),(0,r.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/coin-flip-workshop-js/blob/main/frontend/src/pages/index.js"})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,r.jsxs)(t.p,{children:["When writing smart contracts, it is very important to test all methods exhaustively. In this\nproject you have integration tests. Before digging into them, go ahead and perform the tests present in the dApp through the command ",(0,r.jsx)(t.code,{children:"yarn test"})," for the JavaScript version, or ",(0,r.jsx)(t.code,{children:"./test.sh"})," for the Rust version."]}),"\n",(0,r.jsx)(t.h3,{id:"integration-test",children:"Integration test"}),"\n",(0,r.jsxs)(t.p,{children:["Integration tests can be written in both Rust and JavaScript. They automatically deploy a new\ncontract and execute methods on it. In this way, integration tests simulate interactions\nfrom users in a realistic scenario. You will find the integration tests for the ",(0,r.jsx)(t.code,{children:"coin-flip"}),"\nin ",(0,r.jsx)(t.code,{children:"contract-ts/sandbox-ts"})," (for the JavaScript contract) and ",(0,r.jsx)(t.code,{children:"contract-rs/tests"})," (for the Rust contract)."]}),"\n",(0,r.jsxs)(i.O2,{children:[(0,r.jsx)(i.SQ,{value:"js",language:"ts",children:(0,r.jsx)(i.Ey,{fname:"main.test.js",url:"https://github.com/near-examples/coin-flip-examples/blob/main/contract-ts/sandbox-test/main.ava.js",start:"32",end:"57"})}),(0,r.jsx)(i.SQ,{value:"rust",language:"rust",children:(0,r.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/coin-flip-examples/blob/main/contract-rs/tests/tests.rs",start:"25",end:"82"})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"a-note-on-randomness",children:"A Note On Randomness"}),"\n",(0,r.jsxs)(t.p,{children:["Randomness in the blockchain is a complex subject. We recommend you to read and investigate about it.\nYou can start with our ",(0,r.jsx)(t.a,{href:"/build/smart-contracts/security/random",children:"security page on it"}),"."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["near-cli: ",(0,r.jsx)(t.code,{children:"4.0.13"})]}),"\n",(0,r.jsxs)(t.li,{children:["node: ",(0,r.jsx)(t.code,{children:"18.19.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["rustc: ",(0,r.jsx)(t.code,{children:"1.77.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),i=n(12466),s=n(16550),l=n(20469),o=n(91980),c=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function f(e){var t,n,a,i,s=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,f=h(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),x=g[0],j=g[1],v=m({queryString:c,groupId:d}),b=v[0],y=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),I=w[0],S=w[1],k=function(){var e=null!=b?b:I;return p({value:e,tabValues:f})?e:null}();return(0,l.Z)((function(){k&&j(k)}),[k]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),S(e)}),[y,S,f]),tabValues:f}}var g=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function v(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,l=e.tabValues,o=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var i,s=o.indexOf(e.currentTarget)-1;n=null!=(i=o[s])?i:o[o.length-1]}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,Object.assign({},t,e)),(0,j.jsx)(b,Object.assign({},t,e))]})}function w(e){var t=(0,g.Z)();return(0,j.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>m,Ey:()=>g,SQ:()=>f});var r=n(67294),a=n(74866),i=n(85162),s=n(74165),l=n(15861),o=n(1841),c=n.n(o),u=n(85893);function d(){return(d=(0,l.Z)((0,s.Z)().mark((function e(t,n,r){var a,i,l,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return l=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):l.length,l=l.slice(n,r),o=l.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",l.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,i=e.language,s=e.fname,l=e.metastring,o=(0,r.useState)("Loading..."),h=o[0],p=o[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],i=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+i+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:s,children:[(0,u.jsx)(c(),{language:i,metastring:l+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,i=n.end,s=n.fname;if(e.type===g)return g({url:r,start:a,end:i,language:t,fname:s});return e}(e,n)})),1==t.length?(0,u.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))})}function g(e){var t=e.url,n=e.start,r=e.end,a=e.language,i=e.fname,s=e.metastring;return h({url:t,start:n,end:r,language:a,fname:i,metastring:s})}},46104:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/coin-flip-54eec9769bd7c2c68778790d69fcd4ab.png"}}]);