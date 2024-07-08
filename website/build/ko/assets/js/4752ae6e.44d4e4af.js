"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2314],{79132:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var a=r(85893),s=r(11151),t=r(74866),l=r(85162);const c={id:"gas",title:"\uac00\uc2a4"},i=void 0,o={id:"api/rpc/gas",title:"\uac00\uc2a4",description:"RPC API\ub97c \ud1b5\ud574 \ud2b9\uc815 \ube14\ub85d \ub610\ub294 \ud574\uc2dc\uc5d0 \ub300\ud55c \uac00\uc2a4 \uac00\uaca9\uc744 \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/5.api/rpc/gas.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/gas",permalink:"/ko/api/rpc/gas",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/gas.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"gas",title:"\uac00\uc2a4"},sidebar:"api",previous:{title:"\ube14\ub85d / \uccad\ud06c",permalink:"/ko/api/rpc/block-chunk"},next:{title:"\ud504\ub85c\ud1a0\ucf5c",permalink:"/ko/api/rpc/protocol"}},d={},u=[{value:"\uac00\uc2a4 \uac00\uaca9",id:"gas-price",level:2},{value:"\ubb34\uc5c7\uc774 \uc798\ubabb\ub420 \uc218 \uc788\ub098\uc694?",id:"what-could-go-wrong",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"RPC API\ub97c \ud1b5\ud574 \ud2b9\uc815 \ube14\ub85d \ub610\ub294 \ud574\uc2dc\uc5d0 \ub300\ud55c \uac00\uc2a4 \uac00\uaca9\uc744 \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"gas-price",children:"\uac00\uc2a4 \uac00\uaca9"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\ud2b9\uc815 ",(0,a.jsx)(n.code,{children:"block_height"})," \ub610\ub294 ",(0,a.jsx)(n.code,{children:"block_hash"}),"\uc5d0 \ub300\ud55c \uac00\uc2a4 \uac00\uaca9\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[null]"}),"\uc744 \uc0ac\uc6a9\ud558\uba74 \uac00\uc7a5 \ucd5c\uadfc \ube14\ub85d\uc758 \uac00\uc2a4 \uac00\uaca9\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\uba54\uc11c\ub4dc: ",(0,a.jsx)(n.code,{children:"gas_price"})]}),"\n",(0,a.jsxs)(n.li,{children:["\ub9e4\uac1c\ubcc0\uc218: ",(0,a.jsx)(n.code,{children:"[block_height]"}),", ",(0,a.jsx)(n.code,{children:'["block_hash"]'}),", \ub610\ub294 ",(0,a.jsx)(n.code,{children:"[null]"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"[block_height]"})}),"\n",(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(l.Z,{value:"json",label:"JSON",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "gas_price",\n  "params": [17824600]\n}\n'})})}),(0,a.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const response = await near.connection.provider.gasPrice(17824600);\n"})})}),(0,a.jsx)(l.Z,{value:"http",label:"HTTPie",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 method=gas_price params:='[17824600]' id=dontcare\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'["block_hash"]'})}),"\n",(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(l.Z,{value:"json",label:"JSON",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "gas_price",\n  "params": ["AXa8CHDQSA8RdFCt12rtpFraVq4fDUgJbLPxwbaZcZrj"]\n}\n'})})}),(0,a.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const response = await near.connection.provider.gasPrice(\n  "AXa8CHDQSA8RdFCt12rtpFraVq4fDUgJbLPxwbaZcZrj"\n);\n'})})}),(0,a.jsx)(l.Z,{value:"http",label:"HTTPie",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 method=gas_price params:='[\"AXa8CHDQSA8RdFCt12rtpFraVq4fDUgJbLPxwbaZcZrj\"]' id=dontcare\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"[null]"})}),"\n",(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(l.Z,{value:"json",label:"JSON",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "gas_price",\n  "params": [null]\n}\n'})})}),(0,a.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const response = await near.connection.provider.gasPrice(null);\n"})})}),(0,a.jsx)(l.Z,{value:"http",label:"HTTPie",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 method=gas_price params:='[null]' id=dontcare\n"})})})]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"\uc751\ub2f5 \uc608\uc2dc: "}),(0,a.jsx)("p",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "gas_price": "100000000"\n  },\n  "id": "dontcare"\n}\n'})})})]}),"\n",(0,a.jsx)(n.h4,{id:"what-could-go-wrong",children:"\ubb34\uc5c7\uc774 \uc798\ubabb\ub420 \uc218 \uc788\ub098\uc694?"}),"\n",(0,a.jsxs)(n.p,{children:["API \uc694\uccad\uc774 \uc2e4\ud328\ud558\uba74 RPC \uc11c\ubc84\ub294 \uc81c\ud55c\ub41c \uc218\uc758 \uc798 \uc815\uc758\ub41c \uc624\ub958 \ubcc0\ud615\uacfc \ud568\uaed8 \uad6c\uc870\ud654\ub41c \uc624\ub958 \uc751\ub2f5\uc744 \ubc18\ud658\ud558\ubbc0\ub85c, \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\ub294 \uac00\ub2a5\ud55c \ubaa8\ub4e0 \uc624\ub958 \uc0ac\ub840\ub97c \ucca0\uc800\ud558\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. JSON-RPC \uc624\ub958\ub294 \uc624\ub958 \uc751\ub2f5\uc744 \uad6c\uc870\ud654\ud558\uae30 \uc704\ud574 ",(0,a.jsx)(n.a,{href:"https://github.com/joyent/node-verror",children:"verror"})," \uaddc\uce59\uc744 \ub530\ub985\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n'})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\uc8fc\uc758"})}),"\n",(0,a.jsxs)(n.p,{children:["\uc704 \uad6c\uc870\uc758 ",(0,a.jsx)(n.code,{children:"code"}),", ",(0,a.jsx)(n.code,{children:"data"}),", \ubc0f ",(0,a.jsx)(n.code,{children:"message"})," \ud544\ub4dc\ub294 \ub808\uac70\uc2dc \ud56d\ubaa9\uc73c\ub85c \uac04\uc8fc\ub418\uba70, \ud5a5\ud6c4 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc5d0 \uc758\uc874\ud558\uc9c0 \ub9c8\uc138\uc694."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\ub2e4\uc74c\uc740 ",(0,a.jsx)(n.code,{children:"gas_price"})," \uba54\uc11c\ub4dc\uc5d0 \uc758\ud574 \ubc18\ud658\ub420 \uc218 \uc788\ub294 \uc624\ub958 \ubcc0\ud615\uc758 \uc804\uccb4 \ubaa9\ub85d\uc785\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsxs)(n.p,{children:["ERROR_TYPE",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("code",{children:"error.name"})]})}),(0,a.jsxs)("th",{children:["ERROR_CAUSE",(0,a.jsx)("br",{}),(0,a.jsx)("code",{children:"error.cause.name"})]}),(0,a.jsx)("th",{children:"\uc774\uc720"}),(0,a.jsx)("th",{children:"\ud574\uacb0\ucc45"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"HANDLER_ERROR"}),(0,a.jsx)("td",{children:"UNKNOWN_BLOCK"}),(0,a.jsx)("td",{children:"\uc694\uccad\ub41c \ube14\ub85d\uc774 \uc544\uc9c1 \uc0dd\uc131\ub418\uc9c0 \uc54a\uc558\uac70\ub098 \uac00\ube44\uc9c0 \uc218\uc9d1\ub418\uc5c8\uc2b5\ub2c8\ub2e4(RPC \ub178\ub4dc\uc758 \uacf5\uac04\uc744 \uc808\uc57d\ud558\uae30 \uc704\ud574 \uc815\ub9ac\ub428)."}),(0,a.jsx)("td",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"\uc694\uccad\ud55c \ube14\ub85d\uc774 \uc62c\ubc14\ub978\uc9c0 \ud655\uc778\ud558\uc138\uc694."}),(0,a.jsxs)("li",{children:["\ube14\ub85d\uc774 5 \uc774\uc0c1\uc758 \uc5d0\ud3ec\ud06c \uc804\uc5d0 \uc0dd\uc131\ub41c \uacbd\uc6b0 ",(0,a.jsx)("a",{href:"https://near-nodes.io/intro/node-types#archival-node",children:"\uc544\uce74\uc774\ube0c \ub178\ub4dc"}),"\ub85c \uc694\uccad\uc744 \ubcf4\ub0b4\uc138\uc694."]})]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"REQUEST_VALIDATION_ERROR"}),(0,a.jsx)("td",{children:"PARSE_ERROR"}),(0,a.jsx)("td",{children:"\uc804\ub2ec\ub41c \uc778\uc790\ub294 JSON RPC \uc11c\ubc84\uc5d0\uc11c \ud30c\uc2f1\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4(\uc778\uc790 \ub204\ub77d, \uc798\ubabb\ub41c \ud615\uc2dd \ub4f1)."}),(0,a.jsx)("td",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"\uc804\ub2ec\ub41c \uc778\uc790\ub97c \ud655\uc778\ud558\uace0 \uc62c\ubc14\ub978 \uc778\uc218\ub97c \uc804\ub2ec\ud558\uc138\uc694."}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"error.cause.info"}),"\uc5d0\uc11c \uc790\uc138\ud55c \ub0b4\uc6a9\uc744 \ud655\uc778\ud558\uc138\uc694."]})]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"INTERNAL_ERROR"}),(0,a.jsx)("td",{children:"INTERNAL_ERROR"}),(0,a.jsx)("td",{children:"\ub178\ub4dc \uc790\uccb4\uc5d0 \ubb38\uc81c\uac00 \uc788\uac70\ub098 \uacfc\ubd80\ud558\uac00 \uac78\ub838\uc2b5\ub2c8\ub2e4."}),(0,a.jsx)("td",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"\ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694."}),(0,a.jsx)("li",{children:"\ub2e4\ub978 \ub178\ub4dc\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0b4\uc138\uc694."}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"error.cause.info"}),"\uc5d0\uc11c \uc790\uc138\ud55c \ub0b4\uc6a9\uc744 \ud655\uc778\ud558\uc138\uc694."]})]})})]})]})]}),"\n",(0,a.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var a=r(36905);const s={tabItem:"tabItem_Ymn6"};var t=r(85893);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>N});var a=r(67294),s=r(36905),t=r(12466),l=r(16550),c=r(20469),i=r(91980),o=r(67392),d=r(20812);function u(e){var n,r;return null!=(n=null==(r=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,r=void 0!==n&&n,s=e.groupId,t=(0,l.k6)(),c=function(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:s});return[(0,i._X)(c),(0,a.useCallback)((function(e){if(c){var n=new URLSearchParams(t.location.search);n.set(c,e),t.replace(Object.assign({},t.location,{search:n.toString()}))}}),[c,t])]}function x(e){var n,r,s,t,l=e.defaultValue,i=e.queryString,o=void 0!==i&&i,u=e.groupId,x=h(e),b=(0,a.useState)((function(){return function(e){var n,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var s=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:l,tabValues:x})})),f=b[0],g=b[1],v=j({queryString:o,groupId:u}),m=v[0],R=v[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,d.Nk)(n),s=r[0],t=r[1],[s,(0,a.useCallback)((function(e){n&&t.set(e)}),[n,t])]),k=N[0],w=N[1],E=function(){var e=null!=m?m:k;return p({value:e,tabValues:x})?e:null}();return(0,c.Z)((function(){E&&g(E)}),[E]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);g(e),R(e),w(e)}),[R,w,x]),tabValues:x}}var b=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function v(e){var n=e.className,r=e.block,a=e.selectedValue,l=e.selectValue,c=e.tabValues,i=[],o=(0,t.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=i.indexOf(n),s=c[r].value;s!==a&&(o(n),l(s))},u=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,s=i.indexOf(e.currentTarget)+1;r=null!=(a=i[s])?a:i[0];break;case"ArrowLeft":var t,l=i.indexOf(e.currentTarget)-1;r=null!=(t=i[l])?t:i[i.length-1]}null==(n=r)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:c.map((function(e){var n=e.value,r=e.label,t=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return i.push(e)},onKeyDown:u,onClick:d},t,{className:(0,s.Z)("tabs__item",f.tabItem,null==t?void 0:t.className,{"tabs__item--active":a===n}),children:null!=r?r:n}),n)}))})}function m(e){var n=e.lazy,r=e.children,s=e.selectedValue,t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=t.find((function(e){return e.props.value===s}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function R(e){var n=x(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(v,Object.assign({},n,e)),(0,g.jsx)(m,Object.assign({},n,e))]})}function N(e){var n=(0,b.Z)();return(0,g.jsx)(R,Object.assign({},e,{children:u(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var a=r(67294);const s={},t=a.createContext(s);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);