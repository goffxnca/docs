"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[989],{28658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(85893),a=t(11151),o=t(74866),s=t(85162);const i={id:"epoch",title:"Epoch"},l=void 0,c={id:"concepts/basics/epoch",title:"Epoch",description:"An epoch is a unit of time when validators of the network remain constant. It is measured in blocks",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/1.concepts/basics/epoch.md",sourceDirName:"1.concepts/basics",slug:"/concepts/basics/epoch",permalink:"/zh-CN/concepts/basics/epoch",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/epoch.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1720430471e3,frontMatter:{id:"epoch",title:"Epoch"},sidebar:"concepts",previous:{title:"Networks",permalink:"/zh-CN/concepts/basics/networks"},next:{title:"Introduction",permalink:"/zh-CN/concepts/abstraction/introduction"}},u={},d=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["An ",(0,r.jsx)(n.strong,{children:"epoch"})," is a unit of time when validators of the network remain constant. It is measured in blocks: It is measured in blocks:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Both ",(0,r.jsx)(n.code,{children:"testnet"})," and ",(0,r.jsx)(n.code,{children:"mainnet"})," have an epoch duration of 43,200 blocks. Ideally epochs last about 12 hours, since blocks are created every second (in reality, they take slightly longer to be created). Ideally epochs last about 12 hours, since blocks are created every second (in reality, they take slightly longer to be created)."]}),"\n",(0,r.jsxs)(n.li,{children:["You can view this setting by querying the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/api/rpc/setup#protocol-config",children:(0,r.jsx)(n.code,{children:"protocol_config"})})})," RPC endpoint and searching for ",(0,r.jsx)(n.code,{children:"epoch_length"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Nodes garbage collect blocks after 5 epochs (~2.5 days) unless they are ",(0,r.jsx)(n.a,{href:"https://near-nodes.io/intro/node-types#archival-node",children:"archival nodes"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(s.Z,{value:"json",label:"JSON",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_protocol_config",\n  "params": {\n    "finality": "final"\n  }\n}\n'})})}),(0,r.jsx)(s.Z,{value:"http",label:"HTTPie",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_protocol_config \\\n  params:=\'{\n    "finality": "final"\n  }\'\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "result": {\n        "protocol_version": 44,\n        "genesis_time": "2020-07-21T16:55:51.591948Z",\n        "chain_id": "mainnet",\n        "genesis_height": 9820210,\n        "num_block_producer_seats": 100,\n        "num_block_producer_seats_per_shard": [\n            100\n        ],\n        "avg_hidden_validator_seats_per_shard": [\n            0\n        ],\n        "dynamic_resharding": false,\n        "protocol_upgrade_stake_threshold": [\n            4,\n            5\n        ],\n        "epoch_length": 43200,\n        "gas_limit": 1000000000000000,\n        "min_gas_price": "1000000000",\n        "max_gas_price": "10000000000000000000000",\n        "block_producer_kickout_threshold": 90,\n        "chunk_producer_kickout_threshold": 90,\n\n// ---- snip ----\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can learn more about how epochs are used to manage network validation in the ",(0,r.jsx)(n.a,{href:"https://github.com/near/wiki/blob/master/Archive/validators/faq.md#what-is-an-epoch",children:"Validator FAQ"}),"."]}),"\n",(0,r.jsx)(n.admonition,{title:"Got a question?",type:"tip",children:(0,r.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",target:"_blank",rel:"noopener noreferrer",children:" Ask it on StackOverflow! "})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),a=t(36905),o=t(12466),s=t(16550),i=t(20469),l=t(91980),c=t(67392),u=t(20812);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,s.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function b(e){var n,t,a,o,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,b=h(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:b})})),v=m[0],g=m[1],j=f({queryString:c,groupId:d}),x=j[0],_=j[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),y=k[0],w=k[1],I=function(){var e=null!=x?x:y;return p({value:e,tabValues:b})?e:null}();return(0,i.Z)((function(){I&&g(I)}),[I]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),_(e),w(e)}),[_,w,b]),tabValues:b}}var m=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function j(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,i=e.tabValues,l=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var o,s=l.indexOf(e.currentTarget)-1;t=null!=(o=l[s])?o:l[l.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},o,{className:(0,a.Z)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function x(e){var n=e.lazy,t=e.children,a=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=o.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function _(e){var n=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(j,Object.assign({},n,e)),(0,g.jsx)(x,Object.assign({},n,e))]})}function k(e){var n=(0,m.Z)();return(0,g.jsx)(_,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);