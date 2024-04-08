"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7688],{48690:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=r(85893),a=r(11151),c=r(74866),s=r(85162);const l={id:"gas",title:"Gas"},i=void 0,o={id:"api/rpc/gas",title:"Gas",description:"The RPC API enables you to query the gas price for a specific block or hash.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/5.api/rpc/gas.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/gas",permalink:"/vi/api/rpc/gas",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/gas.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,frontMatter:{id:"gas",title:"Gas"},sidebar:"api",previous:{title:"Block / Chunk",permalink:"/vi/api/rpc/block-chunk"},next:{title:"Protocol",permalink:"/vi/api/rpc/protocol"}},d={},u=[{value:"Gas Price",id:"gas-price",level:2},{value:"S\u1ef1 c\u1ed1 n\xe0o c\xf3 th\u1ec3 x\u1ea3y ra?",id:"what-could-go-wrong",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The RPC API enables you to query the gas price for a specific block or hash."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"gas-price",children:"Gas Price"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Tr\u1ea3 v\u1ec1 gi\xe1 gas cho m\u1ed9t ",(0,t.jsx)(n.code,{children:"block_height"})," ho\u1eb7c ",(0,t.jsx)(n.code,{children:"block_hash"})," c\u1ee5 th\u1ec3."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["D\xf9ng tham s\u1ed1 ",(0,t.jsx)(n.code,{children:"[null]"})," s\u1ebd tr\u1ea3 v\u1ec1 gi\xe1 gas c\u1ee7a block m\u1edbi nh\u1ea5t."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"gas_price"})]}),"\n",(0,t.jsxs)(n.li,{children:["c\xe1c param: ",(0,t.jsx)(n.code,{children:"[block_height]"}),", ",(0,t.jsx)(n.code,{children:'["block_hash"]'}),", ho\u1eb7c ",(0,t.jsx)(n.code,{children:"[null]"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"[block_height]"})}),"\n",(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(s.Z,{value:"json",label:"JSON",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "gas_price",\n  "params": [17824600]\n}\n'})})}),(0,t.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const response = await near.connection.provider.gasPrice(17824600);\n"})})}),(0,t.jsx)(s.Z,{value:"http",label:"HTTPie",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 method=gas_price params:='[17824600]' id=dontcare\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'["block_hash"]'})}),"\n",(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(s.Z,{value:"json",label:"JSON",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "gas_price",\n  "params": ["AXa8CHDQSA8RdFCt12rtpFraVq4fDUgJbLPxwbaZcZrj"]\n}\n'})})}),(0,t.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const response = await near.connection.provider.gasPrice(\n  "AXa8CHDQSA8RdFCt12rtpFraVq4fDUgJbLPxwbaZcZrj"\n);\n'})})}),(0,t.jsx)(s.Z,{value:"http",label:"HTTPie",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 method=gas_price params:='[\"AXa8CHDQSA8RdFCt12rtpFraVq4fDUgJbLPxwbaZcZrj\"]' id=dontcare\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"[null]"})}),"\n",(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(s.Z,{value:"json",label:"JSON",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "gas_price",\n  "params": [null]\n}\n'})})}),(0,t.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const response = await near.connection.provider.gasPrice(null);\n"})})}),(0,t.jsx)(s.Z,{value:"http",label:"HTTPie",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 method=gas_price params:='[null]' id=dontcare\n"})})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"V\xed d\u1ee5 v\u1ec1 response nh\u1eadn \u0111\u01b0\u1ee3c: "}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "gas_price": "100000000"\n  },\n  "id": "dontcare"\n}\n'})})})]}),"\n",(0,t.jsx)(n.h4,{id:"what-could-go-wrong",children:"S\u1ef1 c\u1ed1 n\xe0o c\xf3 th\u1ec3 x\u1ea3y ra?"}),"\n",(0,t.jsxs)(n.p,{children:["Khi API request kh\xf4ng th\xe0nh c\xf4ng, RPC server s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t error response \u0111\u01b0\u1ee3c c\u1ea5u tr\xfac s\u1eb5n, v\u1edbi m\u1ed9t s\u1ed1 l\u01b0\u1ee3ng gi\u1edbi h\u1ea1n c\xe1c error variant \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a r\xf5 r\xe0ng, t\u1eeb \u0111\xf3 client code c\xf3 th\u1ec3 handle to\xe0n b\u1ed9 c\xe1c error case c\xf3 th\u1ec3 x\u1ea3y ra. C\xe1c JSON-RPC error c\u1ee7a ch\xfang t\xf4i tu\xe2n theo quy \u01b0\u1edbc ",(0,t.jsx)(n.a,{href:"https://github.com/joyent/node-verror",children:"verror"})," \u0111\u1ec3 c\u1ea5u tr\xfac cho error response:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Ch\xfa \xfd"})}),"\n",(0,t.jsxs)(n.p,{children:["C\xe1c field ",(0,t.jsx)(n.code,{children:"code"}),", ",(0,t.jsx)(n.code,{children:"data"}),", v\xe0 ",(0,t.jsx)(n.code,{children:"message"})," trong structure tr\xean l\xe0 nh\u1eefng field k\u1ebf th\u1eeba t\u1eeb Verror v\xe0 c\xf3 th\u1ec3 kh\xf4ng \u0111\u01b0\u1ee3c d\xf9ng n\u1eefa trong t\u01b0\u01a1ng lai. Do \u0111\xf3 vui l\xf2ng kh\xf4ng s\u1eed d\u1ee5ng ch\xfang."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["D\u01b0\u1edbi \u0111\xe2y l\xe0 danh s\xe1ch \u0111\u1ea7y \u0111\u1ee7 c\xe1c error variant c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 b\u1edfi method ",(0,t.jsx)(n.code,{children:"gas_price"}),":"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsxs)(n.p,{children:["ERROR_TYPE",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("code",{children:"error.name"})]})}),(0,t.jsxs)("th",{children:["ERROR_CAUSE",(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"error.cause.name"})]}),(0,t.jsx)("th",{children:"Nguy\xean nh\xe2n"}),(0,t.jsx)("th",{children:"Gi\u1ea3i ph\xe1p"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"HANDLER_ERROR"}),(0,t.jsx)("td",{children:"UNKNOWN_BLOCK"}),(0,t.jsx)("td",{children:"Block \u0111ang \u0111\u01b0\u1ee3c request ch\u01b0a \u0111\u01b0\u1ee3c t\u1ea1o ra, ho\u1eb7c n\xf3 \u0111\xe3 \u0111\u01b0\u1ee3c garbage-collect (d\u1ecdn d\u1eb9p \u0111\u1ec3 ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng tr\xean node RPC)"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Ki\u1ec3m tra xem block \u0111\u01b0\u1ee3c request c\xf3 h\u1ee3p l\u1ec7 kh\xf4ng"}),(0,t.jsx)("li",{children:"N\u1ebfu block \u0111\xe3 \u0111\u01b0\u1ee3c produce h\u01a1n 5 epoch tr\u01b0\u1edbc \u0111\xf3, h\xe3y th\u1eed send request c\u1ee7a b\u1ea1n \u0111\u1ebfn m\u1ed9t archival node"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"REQUEST_VALIDATION_ERROR"}),(0,t.jsx)("td",{children:"PARSE_ERROR"}),(0,t.jsx)("td",{children:"\u0110\xe3 pass c\xe1c argument m\xe0 JSON RPC server kh\xf4ng th\u1ec3 parse \u0111\u01b0\u1ee3c (thi\u1ebfu c\xe1c argument, sai format, v.v...)"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Ki\u1ec3m tra l\u1ea1i c\xe1c argument \u0111\xe3 pass v\xe0 pass l\u1ea1i cho \u0111\xfang"}),(0,t.jsxs)("li",{children:["Ki\u1ec3m tra ",(0,t.jsx)("code",{children:"error.cause.info"})," \u0111\u1ec3 bi\u1ebft th\xeam chi ti\u1ebft"]})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"INTERNAL_ERROR"}),(0,t.jsx)("td",{children:"INTERNAL_ERROR"}),(0,t.jsx)("td",{children:"\u0110\xe3 x\u1ea3y ra l\u1ed7i v\u1edbi ch\xednh node \u0111\xf3, ho\u1eb7c b\u1ecb overload"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"H\xe3y th\u1eed l\u1ea1i sau"}),(0,t.jsx)("li",{children:"G\u1edfi m\u1ed9t request \u0111\u1ebfn m\u1ed9t node kh\xe1c"}),(0,t.jsxs)("li",{children:["Ki\u1ec3m tra ",(0,t.jsx)("code",{children:"error.cause.info"})," \u0111\u1ec3 bi\u1ebft th\xeam chi ti\u1ebft"]})]})})]})]})]}),"\n",(0,t.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>s});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var c=r(85893);function s(e){var n=e.children,r=e.hidden,s=e.className;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>y});var t=r(67294),a=r(36905),c=r(12466),s=r(16550),l=r(20469),i=r(91980),o=r(67392),d=r(50012);function u(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,c=(0,s.k6)(),l=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,i._X)(l),(0,t.useCallback)((function(e){if(l){var n=new URLSearchParams(c.location.search);n.set(l,e),c.replace(Object.assign({},c.location,{search:n.toString()}))}}),[l,c])]}function x(e){var n,r,a,c,s=e.defaultValue,i=e.queryString,o=void 0!==i&&i,u=e.groupId,x=h(e),g=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:x})})),v=g[0],m=g[1],b=j({queryString:o,groupId:u}),f=b[0],k=b[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,d.Nk)(n),a=r[0],c=r[1],[a,(0,t.useCallback)((function(e){n&&c.set(e)}),[n,c])]),R=y[0],N=y[1],w=function(){var e=null!=f?f:R;return p({value:e,tabValues:x})?e:null}();return(0,l.Z)((function(){w&&m(w)}),[w]),{selectedValue:v,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);m(e),k(e),N(e)}),[k,N,x]),tabValues:x}}var g=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(85893);function b(e){var n=e.className,r=e.block,t=e.selectedValue,s=e.selectValue,l=e.tabValues,i=[],o=(0,c.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=i.indexOf(n),a=l[r].value;a!==t&&(o(n),s(a))},u=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,a=i.indexOf(e.currentTarget)+1;r=null!=(t=i[a])?t:i[0];break;case"ArrowLeft":var c,s=i.indexOf(e.currentTarget)-1;r=null!=(c=i[s])?c:i[i.length-1]}null==(n=r)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((function(e){var n=e.value,r=e.label,c=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return i.push(e)},onKeyDown:u,onClick:d},c,{className:(0,a.Z)("tabs__item",v.tabItem,null==c?void 0:c.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function f(e){var n=e.lazy,r=e.children,a=e.selectedValue,c=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var s=c.find((function(e){return e.props.value===a}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:c.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function k(e){var n=x(e);return(0,m.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,m.jsx)(b,Object.assign({},e,n)),(0,m.jsx)(f,Object.assign({},e,n))]})}function y(e){var n=(0,g.Z)();return(0,m.jsx)(k,Object.assign({},e,{children:u(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var t=r(67294);const a={},c=t.createContext(a);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);