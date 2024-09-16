"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9337],{43951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(85893),r=n(11151),i=n(71183);const o={id:"indexing-historical-data",title:"Indexing historical data",sidebar_label:"Indexing historical data"},s=void 0,l={id:"tutorials/auction/indexing-historical-data",title:"Indexing historical data",description:"TODO: change github to main when merged",source:"@site/../docs/3.tutorials/auction/6-indexing.md",sourceDirName:"3.tutorials/auction",slug:"/tutorials/auction/indexing-historical-data",permalink:"/ko/tutorials/auction/indexing-historical-data",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/auction/6-indexing.md",tags:[],version:"current",lastUpdatedBy:"Owen",lastUpdatedAt:1726498411e3,sidebarPosition:6,frontMatter:{id:"indexing-historical-data",title:"Indexing historical data",sidebar_label:"Indexing historical data"}},c={},u=[{value:"NEAR Blocks API key",id:"near-blocks-api-key",level:2},{value:"Calling the API endpoint",id:"calling-the-api-endpoint",level:2},{value:"Filtering out invalid transactions",id:"filtering-out-invalid-transactions",level:2},{value:"Using the API Route",id:"using-the-api-route",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"TODO: change github to main when merged"}),"\n",(0,a.jsx)(t.p,{children:"In our frontend, we can easily display the previous bid since it's stored in the contract's state. However, we're unable to see previous bids to the auction. An indexer is used to fetch historical data from the blockchain and store it in a database. Since indexers can take a while to set up and can be expensive to run, we will use a pre-defined API point provided by NEAR Blocks to query an indexer they run that will fetch us the data we need."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"near-blocks-api-key",children:"NEAR Blocks API key"}),"\n",(0,a.jsxs)(t.p,{children:["NEAR Blocks provides a free tier that allows you to make 6 calls per minute, this will be plenty for our usecase. To get an API key head over to ",(0,a.jsx)(t.a,{href:"https://dash.nearblocks.io/user/overview",children:"https://dash.nearblocks.io/user/overview"})," and sign up. Once signed go to ",(0,a.jsx)(t.code,{children:"API Keys"})," then click ",(0,a.jsx)(t.code,{children:"Add key"})," and give it whatever name you like."]}),"\n",(0,a.jsxs)(t.p,{children:["We'll create a new file named ",(0,a.jsx)(t.code,{children:".env.local"})," to store our API key. Swap the API key in the example with your own."]}),"\n",(0,a.jsx)(i.SQ,{value:"bash",language:"bash",showSingleFName:!0,children:(0,a.jsx)(i.Ey,{fname:".env.local",url:"https://github.com/PiVortex/auctions-tutorial/blob/main/frontend/.env.local"})}),"\n",(0,a.jsxs)(t.p,{children:["We put the API key in a ",(0,a.jsx)(t.code,{children:".env.local"})," file so the user cannot access it in the browser and use our key elsewhere. We should also add ",(0,a.jsx)(t.code,{children:".env.local"})," to our ",(0,a.jsx)(t.code,{children:".gitignore"})," file so it is not pushed to GitHub. However, for the purposes of this tutorial, it has been omitted."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"calling-the-api-endpoint",children:"Calling the API endpoint"}),"\n",(0,a.jsxs)(t.p,{children:["NextJS allows us to easily create server-side functions with API routes. We need to make this API call on the server-side rather than the client side so as to not expose our API key. We'll create a new file in src/pages/api named ",(0,a.jsx)(t.code,{children:"getBidHistory.js"}),". Here we'll define our function to get the bid history."]}),"\n",(0,a.jsx)(i.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(i.Ey,{fname:"getBidHistory.js",url:"https://github.com/PiVortex/auctions-tutorial/blob/main/frontend/src/pages/api/getBidHistory.js#L1-L11",start:"1",end:"11"})}),"\n",(0,a.jsx)(t.p,{children:"Here we are retrieving the auction contract ID and fungible token contract ID from the API route call and then calling the NEAR Blocks API. This specific API endpoint allows us to retrieve transactions made to a specific contract calling a specific method. Some details are worth discussing here:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["We pass the account ID of the auction contract, which is ",(0,a.jsx)(t.code,{children:"auction-example.testnet"})," in the example repo."]}),"\n",(0,a.jsxs)(t.li,{children:["We specify the method name on the auction contract that we want the transactions for, this will be ",(0,a.jsx)(t.code,{children:"ft_on_transfer"})," as it will give all bids made to the auction."]}),"\n",(0,a.jsx)(t.li,{children:"We pass the fungible token account ID as the sender since we know only transactions from the correct FT contract will be successful."}),"\n",(0,a.jsx)(t.li,{children:"We'll receive a JSON object of 25 transactions, ordered by the most recent first."}),"\n",(0,a.jsx)(t.li,{children:"We pass our API key to authenticate the request."}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"filtering-out-invalid-transactions",children:"Filtering out invalid transactions"}),"\n",(0,a.jsxs)(t.p,{children:["The API call itself does not filter out invalid transactions. A transaction may be rejected for example if the bid is lower than the current highest bid. To check whether a transaction was successful, therefore the bid was valid, we check that the ",(0,a.jsx)(t.code,{children:"receipt outcome status"})," is ",(0,a.jsx)(t.code,{children:"true"}),". If a transaction is valid we store the account ID of the bidder and the amount they bid, gathered from the args of the transaction. We loop through each transaction until we either have 5 valid transactions or we've looped through the whole page of 25. Note that, in our example, if the previous 25 bids were invalid the API will return an empty array."]}),"\n",(0,a.jsx)(i.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(i.Ey,{fname:"getBidHistory.js",url:"https://github.com/PiVortex/auctions-tutorial/blob/main/frontend/src/pages/api/getBidHistory.js#L12-L39",start:"12",end:"39"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"using-the-api-route",children:"Using the API Route"}),"\n",(0,a.jsx)(t.p,{children:"In our main page, we'll define a function to call the API route we just created. This function will be called as soon as the fungible token account ID is set and each time the page timer reaches zero."}),"\n",(0,a.jsx)(i.SQ,{value:"javascript",language:"javascript",showSingleFName:!0,children:(0,a.jsx)(i.Ey,{fname:"getBidHistory.js",url:"https://github.com/PiVortex/auctions-tutorial/blob/main/frontend/src/pages/index.js#L114-L116",start:"116",end:"124"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"pastBids"})," will then be passed into the ",(0,a.jsx)(t.code,{children:"Bid"})," component to be displayed."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.p,{children:["You may like to explore NEAR Blocks APIs further to see what other data you can retrieve from the blockchain. You can find the documentation at ",(0,a.jsx)(t.a,{href:"https://api.nearblocks.io/api-docs/",children:"https://api.nearblocks.io/api-docs/"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"In this short part of the tutorial, we've added the ability to display the previous 5 valid bids made to the auction contract. In doing this we learned how to interact with the NEAR Blocks APIs to retrieve historical data from the blockchain and how to make server-side calls in NextJS to not expose our API key. Now we have a pretty good frontend that displays all the information we need about the auction contract."}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.a,{href:"/ko/tutorials/auction/auction-factory",children:"final part"})," of this tutorial series we'll learn how to deploy a factory contract - a contract that deploys other contracts - to make it easier for anyone to launch a new auction."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(67294),r=n(36905),i=n(12466),o=n(16550),s=n(20469),l=n(91980),c=n(67392),u=n(20812);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,o.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function v(e){var t,n,r,i,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,v=h(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:v})})),m=g[0],b=g[1],x=f({queryString:c,groupId:d}),j=x[0],w=x[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=y[0],I=y[1],A=function(){var e=null!=j?j:k;return p({value:e,tabValues:v})?e:null}();return(0,s.Z)((function(){A&&b(A)}),[A]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);b(e),w(e),I(e)}),[w,I,v]),tabValues:v}}var g=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function x(e){var t=e.className,n=e.block,a=e.selectedValue,o=e.selectValue,s=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(c(t),o(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var i,o=l.indexOf(e.currentTarget)-1;n=null!=(i=l[o])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},i,{className:(0,r.Z)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function w(e){var t=v(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(x,Object.assign({},t,e)),(0,b.jsx)(j,Object.assign({},t,e))]})}function y(e){var t=(0,g.Z)();return(0,b.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>f,Ey:()=>g,SQ:()=>v});var a=n(67294),r=n(74866),i=n(85162),o=n(74165),s=n(15861),l=n(1841),c=n.n(l),u=n(85893);function d(){return(d=(0,s.Z)((0,o.Z)().mark((function e(t,n,a){var r,i,s,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return s=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):s.length,s=s.slice(n,a),l=s.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",s.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,r=e.end,i=e.language,o=e.fname,s=e.metastring,l=(0,a.useState)("Loading..."),h=l[0],p=l[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],i=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+i+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return d.apply(this,arguments)}(e,n,r);a.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:o,children:[(0,u.jsx)(c(),{language:i,metastring:s+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function v(e){var t=e.children,n=e.language,a=e.showSingleFName;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,i=n.end,o=n.fname;if(e.type===g)return g({url:a,start:r,end:i,language:t,fname:o});return e}(e,n)})),1!=t.length||a?(0,u.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))}):(0,u.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]})}function g(e){var t=e.url,n=e.start,a=e.end,r=e.language,i=e.fname,o=e.metastring;return h({url:t,start:n,end:a,language:r,fname:i,metastring:o})}}}]);