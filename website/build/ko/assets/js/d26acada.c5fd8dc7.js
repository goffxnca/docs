"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7941],{29399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var r=n(85893),a=n(11151),s=n(74866),l=n(85162),c=n(71183);const o={id:"xcc",title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross Contract Call)"},i=void 0,u={id:"tutorials/examples/xcc",title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross Contract Call)",description:"This example performs the simplest cross-contract call possible: it calls our Hello NEAR example to set and retrieve a greeting. \uc774\ub294 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc5d0 \ub300\ud55c \uac00\uc7a5 \uac04\ub2e8\ud55c \uc608 \uc911 \ud558\ub098\uc774\uba70, \uc0c1\ud638 \uc791\uc6a9 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc138\uacc4\ub85c \ub4e4\uc5b4\uac00\ub294 \uc644\ubcbd\ud55c \uad00\ubb38\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/examples/xcc.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/xcc",permalink:"/ko/tutorials/examples/xcc",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/xcc.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"xcc",title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross Contract Call)"},sidebar:"tutorials",previous:{title:"\uae30\ubd80",permalink:"/ko/tutorials/examples/donation"},next:{title:"\ub3d9\uc804 \ub358\uc9c0\uae30",permalink:"/ko/tutorials/examples/coin-flip"}},d={},h=[{value:"Obtaining the Cross Contract Call Example",id:"obtaining-the-cross-contract-call-example",level:2},{value:"Structure of the Example",id:"structure-of-the-example",level:2},{value:"Smart Contract",id:"smart-contract",level:2},{value:"Contract",id:"contract",level:3},{value:"Testing the Contract",id:"testing-the-contract",level:3},{value:"Deploying the Contract to the NEAR network",id:"deploying-the-contract-to-the-near-network",level:3},{value:"CLI: Interacting with the Contract",id:"cli-interacting-with-the-contract",level:3},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\uace0\uae09 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c",id:"\uace0\uae09-\uad50\ucc28-\ucee8\ud2b8\ub799\ud2b8-\ud638\ucd9c",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This example performs the simplest cross-contract call possible: it calls our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples",children:"Hello NEAR"})," example to set and retrieve a greeting. \uc774\ub294 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc5d0 \ub300\ud55c \uac00\uc7a5 \uac04\ub2e8\ud55c \uc608 \uc911 \ud558\ub098\uc774\uba70, \uc0c1\ud638 \uc791\uc6a9 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc138\uacc4\ub85c \ub4e4\uc5b4\uac00\ub294 \uc644\ubcbd\ud55c \uad00\ubb38\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Advanced Cross-Contract Calls Check the tutorial on how to perform cross-contract calls ",(0,r.jsx)(t.a,{href:"./advanced-xcc",children:"in batches and in parallel"})," :::"]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"obtaining-the-cross-contract-call-example",children:"Obtaining the Cross Contract Call Example"}),(0,r.jsx)(t.p,{children:"You have two options to start the project:"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["You can use the app through ",(0,r.jsx)(t.code,{children:"Github Codespaces"}),", which will open a web-based interactive environment."]}),"\n",(0,r.jsx)(t.li,{children:"Clone the repository locally and use it from your computer."}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Codespaces"}),(0,r.jsx)(t.th,{children:"Clone locally"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://codespaces.new/near-examples/cross-contract-calls?quickstart=1",children:(0,r.jsx)(t.img,{src:"https://github.com/codespaces/badge.svg",alt:"Open in GitHub Codespaces"})})}),(0,r.jsxs)(t.td,{children:["\ud83c\udf10 ",(0,r.jsx)(t.code,{children:"https://github.com/near-examples/cross-contract-calls"})]})]})})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"structure-of-the-example",children:"Structure of the Example"}),(0,r.jsx)(t.p,{children:"The smart contract is available in two flavors: Rust and JavaScript"}),(0,r.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,r.jsx)(l.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\u250c\u2500\u2500 sandbox-ts # sandbox testing\n\u2502    \u251c\u2500\u2500 hello-near\n\u2502    \u2502    \u2514\u2500\u2500 hello-near.wasm\n\u2502    \u2514\u2500\u2500 main.ava.ts\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u2514\u2500\u2500 contract.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json\n"})})}),(0,r.jsx)(l.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\u250c\u2500\u2500 tests # sandbox testing\n\u2502    \u251c\u2500\u2500 hello-near\n\u2502    \u2502    \u2514\u2500\u2500 hello-near.wasm\n\u2502    \u2514\u2500\u2500 tests.rs\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u251c\u2500\u2500 external.rs\n\u2502    \u2514\u2500\u2500 lib.rs\n\u251c\u2500\u2500 Cargo.toml # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 rust-toolchain.toml\n"})})})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"smart-contract",children:"Smart Contract"}),(0,r.jsx)(t.h3,{id:"contract",children:"Contract"}),(0,r.jsxs)(t.p,{children:["\ucee8\ud2b8\ub799\ud2b8\ub294 \uc778\uc0ac\ub9d0\uc744 \ucffc\ub9ac\ud558\uace0 \ubcc0\uacbd\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \uacf5\uac1c\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uba54\uc11c\ub4dc\ub294 ",(0,r.jsx)(t.code,{children:"hello-near"})," \uc608\uc81c\uc5d0\uc11c ",(0,r.jsx)(t.code,{children:"get_greeting"})," \ubc0f ",(0,r.jsx)(t.code,{children:"set_greeting"})," \ud638\ucd9c\ub9cc \uc218\ud589\ud569\ub2c8\ub2e4."]}),(0,r.jsxs)(c.O2,{children:[(0,r.jsx)(c.SQ,{value:"js",language:"ts",children:(0,r.jsx)(c.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-ts/src/contract.ts",start:"17",end:"39"})}),(0,r.jsxs)(c.SQ,{value:"rust",language:"rust",children:[(0,r.jsx)(c.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/lib.rs",start:"22",end:"51"}),(0,r.jsx)(c.Ey,{fname:"external.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/external.rs",start:"2",end:"12"})]})]}),(0,r.jsx)(t.h3,{id:"testing-the-contract",children:"Testing the Contract"}),(0,r.jsx)(t.p,{children:"The contract readily includes a set of unit and sandbox testing to validate its functionality. To execute the tests, run the following commands:"}),(0,r.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,r.jsx)(l.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd contract-simple-ts\nyarn\nyarn test\n"})})}),(0,r.jsx)(l.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd contract-simple-rs\ncargo test\n"})})})]}),(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["The ",(0,r.jsx)(t.code,{children:"integration tests"})," use a sandbox to create NEAR users and simulate interactions with the contract. :::"]}),(0,r.jsxs)(t.p,{children:["In this project in particular, the integration tests first deploy the ",(0,r.jsx)(t.code,{children:"hello-near"})," contract. Then, they test that the cross-contract call correctly sets and retrieves the message. You will find the integration tests in ",(0,r.jsx)(t.code,{children:"sandbox-ts/"})," for the JavaScript version and in ",(0,r.jsx)(t.code,{children:"tests/"})," for the Rust version."]}),(0,r.jsxs)(c.O2,{children:[(0,r.jsx)(c.SQ,{value:"js",language:"js",children:(0,r.jsx)(c.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-ts/sandbox-ts/main.ava.ts",start:"8",end:"52"})}),(0,r.jsx)(c.SQ,{value:"rust",language:"rust",children:(0,r.jsx)(c.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/tests/tests.rs",start:"4",end:"77"})})]}),(0,r.jsx)("hr",{class:"subsection"}),(0,r.jsx)(t.h3,{id:"deploying-the-contract-to-the-near-network",children:"Deploying the Contract to the NEAR network"}),(0,r.jsx)(t.p,{children:"In order to deploy the contract you will need to create a NEAR account."}),(0,r.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,r.jsx)(l.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Optional - create an account\nnear create-account <accountId> --useFaucet\n\n# Deploy the contract\ncd contract-simple-ts\nyarn build\nnear deploy <accountId> ./build/cross_contract.wasm init --initFunction init --initArgs \'{"hello_account":"hello.near-example.testnet"}\'\n'})})}),(0,r.jsx)(l.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Optional - create an account\nnear create-account <accountId> --useFaucet\n\n# Deploy the contract\ncd contract-simple-rs\n\ncargo near build\n\n# During deploying pass {"hello_account":"hello.near-example.testnet"} as init arguments\ncargo near deploy <accountId>\n'})})})]}),(0,r.jsx)("hr",{class:"subsection"}),(0,r.jsx)(t.h3,{id:"cli-interacting-with-the-contract",children:"CLI: Interacting with the Contract"}),(0,r.jsx)(t.p,{children:"To interact with the contract through the console, you can use the following commands:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Get message from the hello-near contract\n# Replace <accountId> with your account ID\nnear call <accountId> query_greeting --accountId <accountId>\n\n# Set a new message for the hello-near contract\n# Replace <accountId> with your account ID\nnear call <accountId> change_greeting \'{"new_greeting":"XCC Hi"}\' --accountId <accountId>\n'})}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),(0,r.jsxs)(t.p,{children:["\ubc30\uc6b8 \uc218 \uc788\ub294 \uc88b\uc740 \ubc29\ubc95\uc740 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud655\uc7a5\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. ",(0,r.jsx)(t.a,{href:"/ko/tutorials/examples/guest-book",children:"\ubc29\uba85\ub85d"})," \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \uc608\uc81c\ub97c \uc218\uc815\ud569\ub2c8\ub2e4! \uc774\ub7f0 \uc2dd\uc73c\ub85c \ub3c8\uc744 \ubd99\uc774\ub294 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc2dc\ub3c4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Remember to correctly ",(0,r.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/crosscontract#callback-method",children:"handle the callback"}),", and to return the money to the user in case of error."]}),(0,r.jsx)(t.h3,{id:"\uace0\uae09-\uad50\ucc28-\ucee8\ud2b8\ub799\ud2b8-\ud638\ucd9c",children:"\uace0\uae09 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c"}),(0,r.jsxs)(t.p,{children:["\ucee8\ud2b8\ub799\ud2b8 \uc5ec\ub7ec \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \ub3d9\uc2dc\uc5d0 \uc218\ud589\ud560 \uc218 \uc788\uace0, \uc774\ub97c \ubcd1\ub82c\ub85c \uc2e4\ud589\ub418\ub294 Promise \uc0dd\uc131 \ud639\uc740 \ubc30\uce58(Batch) \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Check the ",(0,r.jsx)(t.a,{href:"./advanced-xcc",children:"advanced cross contract calls tutorial"})," to learn more."]}),(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["near-cli: ",(0,r.jsx)(t.code,{children:"4.0.13"})]}),"\n",(0,r.jsxs)(t.li,{children:["node: ",(0,r.jsx)(t.code,{children:"18.19.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["rustc: ",(0,r.jsx)(t.code,{children:"1.77.0"})]}),"\n"]})]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),s=n(12466),l=n(16550),c=n(20469),o=n(91980),i=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,l.k6)(),c=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o._X)(c),(0,r.useCallback)((function(e){if(c){var t=new URLSearchParams(s.location.search);t.set(c,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[c,s])]}function x(e){var t,n,a,s,l=e.defaultValue,o=e.queryString,i=void 0!==o&&o,d=e.groupId,x=h(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:x})})),b=g[0],f=g[1],v=m({queryString:i,groupId:d}),j=v[0],y=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),C=w[0],I=w[1],k=function(){var e=null!=j?j:C;return p({value:e,tabValues:x})?e:null}();return(0,c.Z)((function(){k&&f(k)}),[k]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),I(e)}),[y,I,x]),tabValues:x}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function v(e){var t=e.className,n=e.block,r=e.selectedValue,l=e.selectValue,c=e.tabValues,o=[],i=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=o.indexOf(t),a=c[n].value;a!==r&&(i(t),l(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var s,l=o.indexOf(e.currentTarget)-1;n=null!=(s=o[l])?s:o[o.length-1]}null==(t=n)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:c.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=x(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(v,Object.assign({},t,e)),(0,f.jsx)(j,Object.assign({},t,e))]})}function w(e){var t=(0,g.Z)();return(0,f.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>m,Ey:()=>g,SQ:()=>x});var r=n(67294),a=n(74866),s=n(85162),l=n(74165),c=n(15861),o=n(1841),i=n.n(o),u=n(85893);function d(){return(d=(0,c.Z)((0,l.Z)().mark((function e(t,n,r){var a,s,c,o;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(t+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return c=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):c.length,c=c.slice(n,r),o=c.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",c.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,s=e.language,l=e.fname,c=e.metastring,o=(0,r.useState)("Loading..."),h=o[0],p=o[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:l,children:[(0,u.jsx)(i(),{language:s,metastring:c+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function x(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,l=n.fname;if(e.type===g)return g({url:r,start:a,end:s,language:t,fname:l});return e}(e,n)})),1==t.length?(0,u.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function g(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,l=e.metastring;return h({url:t,start:n,end:r,language:a,fname:s,metastring:l})}}}]);