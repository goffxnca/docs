"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7253],{80361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(85893),a=n(11151),o=(n(74866),n(85162),n(71183),n(46610));const i={id:"anatomy",title:"Basic Anatomy",hide_table_of_contents:!0},s=void 0,l={id:"build/smart-contracts/anatomy/anatomy",title:"Basic Anatomy",description:'Let\'s illustrate the basic anatomy of a simple "Hello World" contract. The code on this page comes from our Hello NEAR repository on GitHub.',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/anatomy/anatomy.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/",permalink:"/zh-CN/build/smart-contracts/anatomy/",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/anatomy.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,frontMatter:{id:"anatomy",title:"Basic Anatomy",hide_table_of_contents:!0},sidebar:"build",previous:{title:"Quickstart \u2728",permalink:"/zh-CN/build/smart-contracts/quickstart"},next:{title:"External Interface",permalink:"/zh-CN/build/smart-contracts/anatomy/functions"}},c={},u=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:['Let\'s illustrate the basic anatomy of a simple "Hello World" contract. The code on this page comes from our ',(0,r.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples",children:"Hello NEAR repository"})," on GitHub."]}),"\n",(0,r.jsxs)(o.z8,{languages:"js,rust",children:[(0,r.jsx)(o.gO,{highlights:'{"js": "1", "rust": "1"}',fname:"hello-near",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### Importing the SDK\nAll contracts will import the **NEAR SDK**, enabling them to [access the execution environment](./environment.md), [call other contracts](./crosscontract.md), [transfer tokens](./actions.md), and much more.\n\nYou can also use third-party libraries, thought some might not work due to the limitations of the contract runtime.\n"})})}),(0,r.jsx)(o.gO,{highlights:'{"js": "4-17", "rust":"5-7,20-31"}',fname:"hello-near",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### Contract's Class / Structure\nThe contract is described through a `Class` / `Struct` :\n- The attributes define which data the contract stores\n- The functions define its public (and private) interface\n"})})}),(0,r.jsx)(o.gO,{highlights:'{"js": "3"}',fname:"hello-near",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### Contract Class Decorator\n\nNote that the contract's class is decorated with `@NearBindgen`. This decorator tells the SDK which class defines the contract, so it knows:\n1. What to fetch from storage when the contract is loaded\n2. What to store when the contract is done executing\n3. The methods that are exposed to the outside world\n\n**Note:** Only one class can be decorated with the `@NearBindgen` decorator.\n"})})}),(0,r.jsx)(o.gO,{highlights:'{"rust": "4,19"}',fname:"hello-near",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### Contract Struct Macro\n\nNote that the contract's struct definition and the implementation are decorated with macros\n\nThe `#[near(contract_state)]` macro tell the SDK that this structure defines the contract's state, so it knows:\n1. What to fetch from storage when the contract is loaded\n2. What to store when the contract is done executing\n\nThe `#[near]` macro tells the SDK which functions are exposed to the outside world.\n\n**Note:** Only one struct can be decorated with the `#[near(contract_state)]` macro.\n"})})}),(0,r.jsx)(o.gO,{highlights:'{"rust": "4,19"}',fname:"hello-near",type:"info",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'<details>\n\n<summary> Interaction with other macros </summary>\n\nWhen `near` is built for the wasm32 target, it generates the external NEAR contract bindings.  To achieve this it is actually generating another function with the signature `pub extern "C" fn function_name()` that first deserializes the contract struct from NEAR storage and then calls the `contract.function_name(parameter1, parameter2, ...)`.\n\nIf you have annotated your function with any attribute-like macros, these are then executed _twice_.  Specifically if the attribute like macro makes any modification to the function signature, or inserts any code that depends on the contract struct (in the form of `&self`, `&mut self`, or `self`) this will fail in the second invocation, because the externally exposed function does not have any concept of this struct.\n\nIt is possible to detect this by checking which build target you are building for and limit the execution of the macro to operate only on the first pass.\n\n</details>\n'})})}),(0,r.jsx)(o.gO,{highlights:'{"js": "5", "rust": "6,10-16"}',fname:"hello-near",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### Storage (State)\nWe call the data stored in the contract [the contract's state](./storage.md).\n\nIn our Hello World example, the contract stores a single string (`greeting`), and the state starts initialized with the default value `\"Hello\"`.\n\n**Note:** We will cover more about the contract's state in the [state section](./storage.md).\n"})})}),(0,r.jsx)(o.gO,{highlights:'{"js": "8-10", "rust": "22-24"}',fname:"hello-near",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### Read Only Functions\nContract's functions can be read-only, meaning they don't modify the state. Calling them is free for everyone, and does not require to have a NEAR account.\n\n**Note:** We will cover more about function types in the [functions section](./functions.md).\n"})})}),(0,r.jsx)(o.gO,{highlights:'{"js": "13-16", "rust": "27-30"}',fname:"hello-near",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### State Mutating Functions\nFunctions that modify the state or call other contracts are considered state mutating functions. It is necessary to have a NEAR account to call them, as they require a transaction to be sent to the network.\n\n**Note:** We will cover more about function types in the [functions section](./functions.md).\n"})})}),(0,r.jsx)(o.$B,{language:"js",fname:"hello-near",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-ts/src/contract.ts",start:"2",end:"18"}),(0,r.jsx)(o.$B,{language:"rust",fname:"hello-near",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-rs/src/lib.rs",start:"2",end:"32"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var o=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),o=n(12466),i=n(16550),s=n(20469),l=n(91980),c=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function g(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,g=h(e),p=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:g})})),b=p[0],v=p[1],x=f({queryString:c,groupId:d}),y=x[0],j=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=w[0],S=w[1],E=function(){var e=null!=y?y:k;return m({value:e,tabValues:g})?e:null}();return(0,s.Z)((function(){E&&v(E)}),[E]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);v(e),j(e),S(e)}),[j,S,g]),tabValues:g}}var p=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,s=e.tabValues,l=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),i(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;n=null!=(o=l[i])?o:l[l.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},o,{className:(0,a.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function j(e){var t=g(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,Object.assign({},t,e)),(0,v.jsx)(y,Object.assign({},t,e))]})}function w(e){var t=(0,p.Z)();return(0,v.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},46610:(e,t,n)=>{n.d(t,{gO:()=>g,z8:()=>f,$B:()=>p,rV:()=>b,rC:()=>v,h7:()=>m});var r=n(98906),a=n(67294),o=n(1841),i=n.n(o),s=n(71183),l=n(74866),c=n(85162),u=n(85893);const d=function(e){var t=e.props,n=t.blocks,r=t.files,o=t.languages,i=t.language,s=t.setLanguage,d=(0,a.useState)(n[0].highlight),h=d[0],f=d[1],g=(0,a.useState)(0),p=g[0],x=g[1],y=(0,a.useState)(n[0].fname),j=y[0],w=y[1],k=function(e){x(e),f(n[e].highlight),w(n[e].fname)};return(0,a.useEffect)((function(){var e=document.querySelector('div[fname="'+j+'"] .theme-code-block-highlighted-line'),t=document.querySelector('div[fname="'+j+'"] .prism-code');if(e){var n=e.offsetTop-t.clientHeight/2;t.scrollTo({top:n,behavior:"smooth"})}}),[j,h]),(0,a.useEffect)((function(){k(0);var e=document.querySelector(".navbar"),t=document.getElementById("files");t.style.top=e.clientHeight+"px";var r=document.querySelector(".file-tabs");document.querySelectorAll(".language-"+i).forEach((function(t){return t.style.maxHeight="calc(100vh - "+e.clientHeight+"px - "+r.clientHeight+"px)"}));var a=document.getElementById("block0").getBoundingClientRect().top,o=document.getElementById("block"+(n.length-1)).getBoundingClientRect().bottom,s=Math.abs(o-a),l=document.getElementById("codeblocks").getBoundingClientRect().top+window.scrollY,c=document.getElementById("block"+(n.length-1)).getBoundingClientRect().top;document.getElementById("extra-padding").style.height=t.clientHeight-Math.abs(c-o)-e.clientHeight+"px";var u=function(){for(var t=window.scrollY-l+e.clientHeight,r=window.scrollY?t/s:0,a=0,o=0,i=0;i<n.length;i++){if(a=o,o+=document.getElementById("block"+i).clientHeight/s,r>a&&r<o){k(i);break}}};return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[n,r,i]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"row code-explain",children:[(0,u.jsxs)("div",{className:"col-blocks col",id:"codeblocks",children:[(0,u.jsx)(l.Z,{className:"file-tabs",selectedValue:i,selectValue:function(e){return s(e)},children:o.map((function(e){return(0,u.jsx)(c.Z,{value:e,label:m[e]})}))}),n.map((function(e,t){return(0,u.jsx)(b,{selected:p===t,index:t,text:e.text,type:e.type,activateFn:k})})),(0,u.jsx)("div",{id:"extra-padding",style:{width:"100%"}})]}),(0,u.jsx)("div",{className:"col-files col",children:(0,u.jsx)("div",{id:"files",style:{position:"sticky"},children:(0,u.jsx)(l.Z,{className:"file-tabs",selectedValue:j||n[0].fname,selectValue:function(e){return w(e)},children:r.map((function(e){return(0,u.jsx)(c.Z,{value:e.fname,children:(0,u.jsx)(v,Object.assign({},e,{lineNumber:h}))})}))})})})]})})};const h=function(e){var t=e.props,n=t.blocks,r=t.files,o=t.languages,i=t.language,s=t.setLanguage,d=(0,a.useState)(n[0].highlight),h=d[0],f=d[1],g=(0,a.useState)(0),p=g[0],x=g[1],y=(0,a.useState)(n[0].fname),j=y[0],w=y[1],k=function(e){x(e),f(n[e].highlight),w(n[e].fname)};return(0,a.useEffect)((function(){var e=document.querySelector('div[fname="'+j+'"] .theme-code-block-highlighted-line'),t=document.querySelector('div[fname="'+j+'"] .prism-code');e&&t.scrollTo({top:e.offsetTop,behavior:"smooth"})}),[j,h]),(0,a.useEffect)((function(){k(0);var e=document.querySelector(".navbar"),t=document.querySelector(".file-tabs");document.querySelectorAll(".language-"+i).forEach((function(e){return e.style.maxHeight="calc(33vh - "+t.clientHeight+"px)"}));var r=document.getElementById("block0").getBoundingClientRect().top,a=document.getElementById("block"+(n.length-1)).getBoundingClientRect().bottom,o=Math.abs(a-r),s=document.getElementById("codeblocks").getBoundingClientRect().top+window.scrollY,l=function(){for(var t=window.scrollY-s+e.clientHeight,r=document.getElementById("files"),a=window.scrollY?t/(o+r.clientHeight):0,i=0,l=0,c=0;c<n.length;c++){if(i=l,l+=document.getElementById("block"+c).clientHeight/o,a>i&&a<l){k(c);break}}};return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}}),[n,r,i]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"code-explain",style:{position:"relative"},children:[(0,u.jsxs)("div",{id:"codeblocks",children:[(0,u.jsx)(l.Z,{className:"file-tabs",selectedValue:i,selectValue:function(e){return s(e)},children:o.map((function(e){return(0,u.jsx)(c.Z,{value:e,label:m[e]})}))}),n.map((function(e,t){return(0,u.jsx)(b,{selected:p===t,index:t,text:e.text,type:e.type,activateFn:k})}))]}),(0,u.jsx)("div",{id:"files",style:{height:"33vh",position:"sticky",bottom:0,backgroundColor:"var(--ifm-background-color)"},children:(0,u.jsx)(l.Z,{className:"file-tabs",selectedValue:j||n[0].fname,selectValue:function(e){return w(e)},children:r.map((function(e){return(0,u.jsx)(c.Z,{value:e.fname,children:(0,u.jsx)(v,Object.assign({},e,{lineNumber:h}))})}))})})]})})};var m={rust:"\ud83e\udd80 RS",js:"\ud83c\udf10 JS",ts:"\ud83c\udf10 TS"};function f(e){var t=e.children,n=e.languages;n=n.split(",");var o=(0,a.useState)(n[0]),i=o[0],s=o[1],l=(0,a.useState)([]),c=l[0],f=l[1],g=(0,a.useState)([]),p=g[0],b=g[1],v=(0,a.useState)(!0),x=v[0],y=v[1];if(!n.every((function(e){return e in m})))throw new Error("languages must be one of ['rust', 'js', 'ts']");var j=function(e){localStorage.setItem("docusaurus.tab.code-tabs",e),s(e)};return(0,a.useEffect)((function(){var e=localStorage.getItem("docusaurus.tab.code-tabs");e&&n.includes(e)&&s(e),y(window.innerWidth>768)}),[]),(0,a.useEffect)((function(){for(var e,n=[],a=[],o=(0,r.Z)(t);!(e=o()).done;){var s=e.value;if(s.props.highlights){var l=JSON.parse(s.props.highlights);l&&i in l&&n.push({text:s.props.children,highlight:l[i],fname:s.props.fname,type:s.props.type})}i===s.props.language&&a.push(Object.assign({},s.props))}f(n),b(a)}),[i]),c.length&&p.length?x?(0,u.jsx)(d,{props:{blocks:c,files:p,languages:n,language:i,setLanguage:j}}):(0,u.jsx)(h,{props:{blocks:c,files:p,languages:n,language:i,setLanguage:j}}):"Loading..."}function g(e){return e.children}function p(e){return e.children}function b(e){var t=e.selected,n=e.text,r=e.index,a=e.activateFn,o=e.type;if(console.log("TYPE",o),o)return(0,u.jsx)("div",{id:"block"+r,children:n});var i=t?"block-selected":"";return(0,u.jsx)("div",{className:"block "+i+" padding--sm",id:"block"+r,onClick:function(){return a(r)},children:n},r)}function v(e){var t=e.url,n=e.start,r=e.end,a=e.language,o=e.fname,l=e.lineNumber,c=e.children;return t?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{fname:o,children:(0,u.jsx)(s.Ey,{url:t,start:n,end:r,language:a,fname:o,metastring:"{"+l+"}"})})}):(0,u.jsx)("div",{fname:o,children:(0,u.jsx)(i(),{language:a,metastring:"{"+l+"}",children:c.props.children.props.children})})}},71183:(e,t,n)=>{n.d(t,{O2:()=>f,Ey:()=>p,SQ:()=>g});var r=n(67294),a=n(74866),o=n(85162),i=n(74165),s=n(15861),l=n(1841),c=n.n(l),u=n(85893);function d(){return(d=(0,s.Z)((0,i.Z)().mark((function e(t,n,r){var a,o,s,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((o=localStorage.getItem(t+"-until"))&&o>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return s=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):s.length,s=s.slice(n,r),l=s.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",s.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,o=e.language,i=e.fname,s=e.metastring,l=(0,r.useState)("Loading..."),h=l[0],m=l[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],o=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+o+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return m(e)}))})),(0,u.jsxs)("div",{fname:i,children:[(0,u.jsx)(c(),{language:o,metastring:s+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var m={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(o.Z,{value:e.props.value,label:m[e.props.value],children:e})}))})}function g(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,o=n.end,i=n.fname;if(e.type===p)return p({url:r,start:a,end:o,language:t,fname:i});return e}(e,n)})),1==t.length?(0,u.jsx)(o.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(o.Z,{value:t,label:e.props.fname,children:e})}))})}function p(e){var t=e.url,n=e.start,r=e.end,a=e.language,o=e.fname,i=e.metastring;return h({url:t,start:n,end:r,language:a,fname:o,metastring:i})}}}]);