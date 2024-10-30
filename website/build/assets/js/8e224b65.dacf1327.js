"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8722],{84665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(85893),a=t(11151),s=t(74866),o=t(85162);const l={id:"predeployed-contract",title:"Pre-deployed Contract",sidebar_label:"Pre-deployed Contract"},i=void 0,c={id:"tutorials/fts/predeployed-contract",title:"Pre-deployed Contract",description:"Learn how to easily receive fungible tokens without doing any software development by using a readily-available FT smart contract.",source:"@site/../docs/3.tutorials/fts/0-predeployed.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/predeployed-contract",permalink:"/tutorials/fts/predeployed-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/0-predeployed.md",tags:[],version:"current",lastUpdatedBy:"Lyudmil Ivanov",lastUpdatedAt:1730307732e3,sidebarPosition:0,frontMatter:{id:"predeployed-contract",title:"Pre-deployed Contract",sidebar_label:"Pre-deployed Contract"},sidebar:"tutorials",previous:{title:"Introduction",permalink:"/tutorials/fts/introduction"},next:{title:"Contract Architecture",permalink:"/tutorials/fts/skeleton"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using the FT contract",id:"using-the-ft-contract",level:2},{value:"Setup",id:"setup",level:3},{value:"Receiving Fungible Tokens",id:"receiving-fungible-tokens",level:3},{value:"Final remarks",id:"final-remarks",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Learn how to easily receive fungible tokens without doing any software development by using a readily-available FT smart contract."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To complete this tutorial successfully, you'll need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"A NEAR testnet account"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/tools/near-cli/#installation",children:"NEAR-CLI"})}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"using-the-ft-contract",children:"Using the FT contract"}),"\n",(0,r.jsxs)(n.p,{children:["Create a new ",(0,r.jsx)(n.code,{children:"testnet"})," account using the ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"web wallet"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.p,{children:["Log in to your newly created account with ",(0,r.jsx)(n.code,{children:"near-cli-rs"})," by running the following command in your terminal:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near account import-account using-web-wallet network-config testnet\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set an environment variable for your account ID to make it easy to copy and paste commands from this tutorial:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export NEARID=YOUR_ACCOUNT_NAME\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Be sure to replace ",(0,r.jsx)(n.code,{children:"YOUR_ACCOUNT_NAME"})," with the account name you just logged in with including the ",(0,r.jsx)(n.code,{children:".testnet"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Test that the environment variable is set correctly by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"echo $NEARID\n"})}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"receiving-fungible-tokens",children:"Receiving Fungible Tokens"}),"\n",(0,r.jsxs)(n.p,{children:["NEAR has deployed a new Fungible Token contract to the account ",(0,r.jsx)(n.code,{children:"ft.predeployed.examples.testnet"})," which allows users to freely receive some ",(0,r.jsx)(n.code,{children:"gtNEAR"})," - a new fungible token aimed to promote the power of teamwork! Each ",(0,r.jsx)(n.code,{children:"gtNEAR"})," is equal to ",(0,r.jsx)(n.code,{children:"1e24 yocto-gtNEAR"})," similar to how 1 $NEAR is equal to 1e24 yoctoNEAR."]}),"\n",(0,r.jsx)(n.p,{children:"Using this pre-deployed contract, let's get some gtNEAR!"}),"\n",(0,r.jsxs)(n.p,{children:["Start by calling the method ",(0,r.jsx)(n.code,{children:"ft_mint"})," which is a custom function implemented on this contract in order to send your account some ",(0,r.jsx)(n.code,{children:"gtNEAR"}),"! The following command will send ",(0,r.jsx)(n.code,{children:"0.01 gtNEAR"})," to your account."]}),"\n",(0,r.jsxs)(s.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(o.Z,{value:"short",label:"Short",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call ft.predeployed.examples.testnet ft_mint \'{"account_id": "\'$NEARID\'", "amount": "10000000000000000000000"}\' --gas 100000000000000 --accountId $NEARID --networkId testnet\n'})})}),(0,r.jsx)(o.Z,{value:"full",label:"Full",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-transaction ft.predeployed.examples.testnet ft_mint json-args '{\"account_id\": \"'$NEARID'\", \"amount\": \"10000000000000000000000\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' sign-as $NEARID network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'Log [ft.predeployed.examples.testnet]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_mint","data":[{"owner_id":"benjiman.testnet","amount":"10000000000000000000000","memo":"FTs Minted"}]}\nTransaction Id Fhqa8YDLKxnxM9jjHCPN4hn1w1RKESYrav3kwDjhWWUu\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/Fhqa8YDLKxnxM9jjHCPN4hn1w1RKESYrav3kwDjhWWUu\n\'\'\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["To view tokens owned by an account you can call the FT contract with the following ",(0,r.jsx)(n.code,{children:"near-cli"})," command:"]}),"\n",(0,r.jsxs)(s.Z,{groupId:"cli-tabs",children:[(0,r.jsx)(o.Z,{value:"short",label:"Short",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near view ft.predeployed.examples.testnet ft_balance_of '{\"account_id\": \"'$NEARID'\"}' --networkId testnet\n"})})}),(0,r.jsx)(o.Z,{value:"full",label:"Full",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only ft.predeployed.examples.testnet ft_balance_of json-args '{\"account_id\": \"'$NEARID'\"}' network-config testnet now\n"})})})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"'10000000000000000000000'\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Congratulations! You just received your first Team Tokens on the NEAR blockchain!"})})," \ud83c\udf89"]}),"\n",(0,r.jsxs)(n.p,{children:["\ud83d\udc49 Now try going to your ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"NEAR Wallet"}),' and view your FTs in the "Balances" tab. \ud83d\udc48']}),"\n",(0,r.jsx)(n.admonition,{title:"Pre-deployed Contract",type:"note",children:(0,r.jsxs)(n.p,{children:["The contract used in this section has been modified such that you can infinitely get ",(0,r.jsx)(n.code,{children:"gtNEAR"})," by calling ",(0,r.jsx)(n.code,{children:"ft_mint"}),". This function is not part of the FT ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"standards"})," and has been implemented for the purpose of this tutorial."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"final-remarks",children:"Final remarks"}),"\n",(0,r.jsx)(n.p,{children:"This basic example illustrates all the required steps to call an FT smart contract on NEAR and receive your own fungible tokens."}),"\n",(0,r.jsxs)(n.p,{children:["Now that you're familiar with the process, you can jump to ",(0,r.jsx)(n.a,{href:"/tutorials/fts/skeleton",children:"Contract Architecture"})," and learn more about the smart contract structure and how you can build your own FT contract from the ground up."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Happy minting!"})})," \ud83e\ude99"]}),"\n",(0,r.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["near-cli-rs: ",(0,r.jsx)(n.code,{children:"0.11.0"})]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),s=t(12466),o=t(16550),l=t(20469),i=t(91980),c=t(67392),u=t(20812);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.lx)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,o.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(s.location.search);n.set(l,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[l,s])]}function f(e){var n,t,a,s,o=e.defaultValue,i=e.queryString,c=void 0!==i&&i,d=e.groupId,f=h(e),x=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),g=x[0],b=x[1],j=m({queryString:c,groupId:d}),v=j[0],y=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),N=w[0],k=w[1],E=function(){var e=null!=v?v:N;return p({value:e,tabValues:f})?e:null}();return(0,l.Z)((function(){E&&b(E)}),[E]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),k(e)}),[y,k,f]),tabValues:f}}var x=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function j(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,l=e.tabValues,i=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=i.indexOf(n),a=l[t].value;a!==r&&(c(n),o(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;t=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var s,o=i.indexOf(e.currentTarget)-1;t=null!=(s=i[o])?s:i[i.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,s=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=o.find((function(e){return e.props.value===s}));return l?(0,r.cloneElement)(l,{className:(0,a.Z)("margin-top--md",l.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function y(e){var n=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(j,Object.assign({},n,e)),(0,b.jsx)(v,Object.assign({},n,e))]})}function w(e){var n=(0,x.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(67294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);