"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3955],{10305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var a=t(85893),r=t(11151),i=t(74866),l=t(85162);const c={id:"deploy",title:"NEAR CLI - \uae30\ucd08",sidebar_label:"\ubc30\ud3ec \ubc0f \uc0ac\uc6a9"},o=void 0,s={id:"build/smart-contracts/release/deploy",title:"NEAR CLI - \uae30\ucd08",description:"\ucee8\ud2b8\ub799\ud2b8\uac00 \uc900\ube44\ub418\uba74, \ubaa8\ub4e0 \uc0ac\ub78c\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d NEAR \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/release/deploy.md",sourceDirName:"2.build/2.smart-contracts/release",slug:"/build/smart-contracts/release/deploy",permalink:"/ko/build/smart-contracts/release/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/release/deploy.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1713279052e3,frontMatter:{id:"deploy",title:"NEAR CLI - \uae30\ucd08",sidebar_label:"\ubc30\ud3ec \ubc0f \uc0ac\uc6a9"},sidebar:"build",previous:{title:"\ub85c\uceec \uac1c\ubc1c \ud658\uacbd",permalink:"/ko/build/smart-contracts/testing/kurtosis-localnet"},next:{title:"Updating Contracts",permalink:"/ko/build/smart-contracts/release/upgrade"}},u={},d=[{value:"Deploying the Contract",id:"deploying-the-contract",level:2},{value:"\uacc4\uc815 \uc0dd\uc131 \ubc0f \ubc30\ud3ec",id:"\uacc4\uc815-\uc0dd\uc131-\ubc0f-\ubc30\ud3ec",level:4},{value:"\uae30\uc874 \uacc4\uc815\uc5d0 \ubc30\ud3ec",id:"\uae30\uc874-\uacc4\uc815\uc5d0-\ubc30\ud3ec",level:4},{value:"Initializing the Contract",id:"initializing-the-contract",level:2},{value:"Calling the Contract",id:"calling-the-contract",level:2},{value:"View \uba54\uc11c\ub4dc",id:"view-\uba54\uc11c\ub4dc",level:3},{value:"\uba54\uc11c\ub4dc \ubcc0\uacbd",id:"\uba54\uc11c\ub4dc-\ubcc0\uacbd",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\ucee8\ud2b8\ub799\ud2b8\uac00 \uc900\ube44\ub418\uba74, \ubaa8\ub4e0 \uc0ac\ub78c\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d NEAR \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/ko/tools/near-cli",children:"NEAR CLI"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0, \ucee8\ud2b8\ub799\ud2b8 \ub0b4 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ubc29\ubc95\uc744 \uc548\ub0b4\ud574 \ub4dc\ub9bd\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["\uc774 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 NEAR CLI\uc758 \uae30\ubcf8 \uc0ac\ud56d\ub9cc \ub2e4\ub8f9\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.jsx)(n.a,{href:"/ko/tools/near-cli",children:"NEAR CLI \uc124\uba85\uc11c \ud398\uc774\uc9c0"}),"\ub97c \ucc38\uc870\ud558\uc138\uc694."]})})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"deploying-the-contract",children:"Deploying the Contract"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"NEAR CLI"})," \ub355\ubd84\uc5d0 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uac04\ub2e8\ud558\uac8c \uc218\ud589\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\ucee8\ud2b8\ub799\ud2b8\ub97c wasm\uc73c\ub85c \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4(\ud15c\ud50c\ub9bf \ub0b4 ",(0,a.jsx)(n.code,{children:"yarn build"}),"\ub97c \ud1b5\ud574 \uc790\ub3d9\uc73c\ub85c \uc218\ud589\ub428)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/ko/tools/near-cli#near-create-account",children:"Create an account"})," and ",(0,a.jsx)(n.a,{href:"/ko/tools/near-cli#near-deploy",children:"deploy the contract"})," into it using ",(0,a.jsx)(n.code,{children:"NEAR CLI"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"\uacc4\uc815-\uc0dd\uc131-\ubc0f-\ubc30\ud3ec",children:"\uacc4\uc815 \uc0dd\uc131 \ubc0f \ubc30\ud3ec"}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(l.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Create a new account pre-funded by a faucet & deploy\nnear create-account <accountId> --useFaucet\nnear deploy <accountId> <route_to_wasm>\n\n# Get the account name\ncat ./neardev/dev-account\n"})})}),(0,a.jsx)(l.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Automatically deploy the wasm in a new account\nnear account create-account sponsor-by-faucet-service <my-new-dev-account>.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n\nnear contract deploy <my-new-dev-account>.testnet use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain\n"})})})]}),"\n",(0,a.jsx)(n.h4,{id:"\uae30\uc874-\uacc4\uc815\uc5d0-\ubc30\ud3ec",children:"\uae30\uc874 \uacc4\uc815\uc5d0 \ubc30\ud3ec"}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(l.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# login into your account\nnear login\n\n# deploy the contract\nnear deploy <accountId> <route_to_wasm>\n"})})}),(0,a.jsx)(l.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# login into your account\nnear account import-account using-web-wallet network-config testnet\n\n# deploy the contract\nnear contract deploy <accountId> use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"You can overwrite a contract by deploying another on top of it. \uc774 \uacbd\uc6b0 \uacc4\uc815\uc758 \ub85c\uc9c1\uc774 \ubcc0\uacbd\ub418\uc9c0\ub9cc, \uc0c1\ud0dc\ub294 \uc720\uc9c0\ub429\ub2c8\ub2e4."})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["\uae30\ubcf8\uc801\uc73c\ub85c ",(0,a.jsx)(n.code,{children:"near-cli"}),"\ub294 ",(0,a.jsx)(n.code,{children:"testnet"})," \ub124\ud2b8\uc6cc\ud06c\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. ",(0,a.jsx)(n.code,{children:"mainnet"}),"\uc5d0 \ubc30\ud3ec\ud558\ub824\uba74, ",(0,a.jsx)(n.code,{children:"NEAR_ENV=mainnet"}),"\ub97c \uc815\uc758\ud558\uc138\uc694."]})})}),"\n",(0,a.jsx)(n.admonition,{title:"Naming Convention for Public-Facing Methods",type:"info",children:(0,a.jsxs)(n.p,{children:["\uc774\ub97c \uace0\ub824\ud558\uc5ec, \ub300\ubd80\ubd84 Rust \ucee8\ud2b8\ub799\ud2b8\ub85c \uad6c\uc131\ub41c \ub098\uba38\uc9c0 NEAR \uc0dd\ud0dc\uacc4\uc640 \ud638\ud658\ub418\ub3c4\ub85d \ubaa8\ub4e0 SDK\uc5d0\uc11c ",(0,a.jsx)(n.code,{children:"snake_case"}),"\ub97c \uc0ac\uc6a9\ud574 \uba54\uc11c\ub4dc\uc758 \uc774\ub984\uc744 \uc815\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"initializing-the-contract",children:"Initializing the Contract"}),"\n",(0,a.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8\uc5d0 ",(0,a.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/#initialization-functions",children:"\ucd08\uae30\ud654 \uba54\uc11c\ub4dc"}),"\uac00 \uc788\ub294 \uacbd\uc6b0, \uc774\ub97c \ud638\ucd9c\ud558\uc5ec \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\uac00 \uc0c1\ud0dc\uc5d0 \ub300\ud55c ",(0,a.jsx)(n.code,{children:"default"})," \uac12\uc744 \uad6c\ud604\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(l.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Call the initialization method (`init` in our examples)\nnear call <contractId> <initMethod> [<args>] --accountId <accountId>\n"})})}),(0,a.jsx)(l.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Call the initialization method (`init` in our examples)\nnear contract call-function as-transaction <contractId> <initMethod> json-args [<args>] prepaid-gas '30 TeraGas' attached-deposit '0 NEAR' sign-as <accountId> network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.mdxAdmonitionTitle,{children:[(0,a.jsx)(n.code,{children:"--initFunction"})," \ubc0f ",(0,a.jsx)(n.code,{children:"--initArgs"})," \uc778\uc790\ub97c \uc0ac\uc6a9\ud574\uc11c ",(0,a.jsx)(n.a,{href:"#%EC%BB%A8%ED%8A%B8%EB%9E%99%ED%8A%B8-%EB%B0%B0%ED%8F%AC",children:"\ubc30\ud3ec \uc911\uc5d0"})," \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"calling-the-contract",children:"Calling the Contract"}),"\n",(0,a.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub418\uace0 \ub098\uba74, ",(0,a.jsx)(n.a,{href:"/ko/tools/near-cli",children:"NEAR CLI"}),"\ub97c \ud1b5\ud574 \ubc14\ub85c \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"view-\uba54\uc11c\ub4dc",children:"View \uba54\uc11c\ub4dc"}),"\n",(0,a.jsxs)(n.p,{children:["View \uba54\uc11c\ub4dc\ub294 ",(0,a.jsx)(n.strong,{children:"\uc77d\uae30 \uc804\uc6a9"})," \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc740 \ubb34\ub8cc\uc774\uba70, \ud638\ucd9c\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uacc4\uc815\uc744 \uc9c0\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(l.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near view <contractId> <methodName>\n"})})}),(0,a.jsx)(l.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only <contractId> <methodName> text-args '' network-config testnet now\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.admonition,{title:"View \uba54\uc11c\ub4dc\ub294 \uc2e4\ud589\uc5d0 \uae30\ubcf8\uc801\uc73c\ub85c 200 TGAS\ub97c \uc18c\ubaa8\ud569\ub2c8\ub2e4.",type:"tip"})}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"\uba54\uc11c\ub4dc-\ubcc0\uacbd",children:"\uba54\uc11c\ub4dc \ubcc0\uacbd"}),"\n",(0,a.jsx)(n.p,{children:"\ubcc0\uacbd \ubc29\ubc95\uc740 \uc77d\uae30 \ubc0f \uc4f0\uae30 \uc791\uc5c5\uc744 \ubaa8\ub450 \uc218\ud589\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\ubc95\uc758 \uacbd\uc6b0, \ud638\ucd9c\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uacc4\uc815\uc744 \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(l.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near call <contractId> <methodName> <jsonArgs> --accountId <yourAccount> [--deposit <amount>] [--gas <GAS>]\n"})})}),(0,a.jsx)(l.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-transaction <AccountId> <MethodName> json-args <JsonArgs> prepaid-gas <PrepaidGas> attached-deposit <AttachedDeposit> sign-as <AccountId>  network-config testnet sign-with-keychain send\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),i=t(12466),l=t(16550),c=t(20469),o=t(91980),s=t(67392),u=t(20812);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,i=(0,l.k6)(),c=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,o._X)(c),(0,a.useCallback)((function(e){if(c){var n=new URLSearchParams(i.location.search);n.set(c,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[c,i])]}function g(e){var n,t,r,i,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,d=e.groupId,g=h(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:g})})),x=f[0],j=f[1],v=m({queryString:s,groupId:d}),b=v[0],y=v[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),r=t[0],i=t[1],[r,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),I=w[0],N=w[1],k=function(){var e=null!=b?b:I;return p({value:e,tabValues:g})?e:null}();return(0,c.Z)((function(){k&&j(k)}),[k]),{selectedValue:x,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),N(e)}),[y,N,g]),tabValues:g}}var f=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function v(e){var n=e.className,t=e.block,a=e.selectedValue,l=e.selectValue,c=e.tabValues,o=[],s=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=o.indexOf(n),r=c[t].value;r!==a&&(s(n),l(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=o.indexOf(e.currentTarget)+1;t=null!=(a=o[r])?a:o[0];break;case"ArrowLeft":var i,l=o.indexOf(e.currentTarget)-1;t=null!=(i=o[l])?i:o[o.length-1]}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:c.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},i,{className:(0,r.Z)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,r=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=i.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=g(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,Object.assign({},n,e)),(0,j.jsx)(b,Object.assign({},n,e))]})}function w(e){var n=(0,f.Z)();return(0,j.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var a=t(67294);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);