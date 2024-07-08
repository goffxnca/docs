"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4368],{60472:(e,a,n)=>{n.r(a),n.d(a,{default:()=>fe});var t=n(67294),i=n(36905),s=n(71667),r=n(35281),c=n(53438),l=n(1116),o=n(95999),d=n(12466),u=n(85936);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var m=n(85893);function b(){var e=function(e){var a=e.threshold,n=(0,t.useState)(!1),i=n[0],s=n[1],r=(0,t.useRef)(!1),c=(0,d.Ct)(),l=c.startScroll,o=c.cancelScroll;return(0,d.RF)((function(e,n){var t=e.scrollY,i=null==n?void 0:n.scrollY;i&&(r.current?r.current=!1:t>=i?(o(),s(!1)):t<a?s(!1):t+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,u.S)((function(e){e.location.hash&&(r.current=!0,s(!1))})),{shown:i,scrollToTop:function(){return l(0)}}}({threshold:300}),a=e.shown,n=e.scrollToTop;return(0,m.jsx)("button",{"aria-label":(0,o.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,a&&h.backToTopButtonShow),type:"button",onClick:n})}var p=n(91442),x=n(16550),j=n(87524),f=n(86668),v=n(86809);function g(e){return e.className.startsWith("collapse")?"Hide":(0,m.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}const _={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function k(e){var a=e.onClick;return(0,m.jsx)("button",{type:"button",title:(0,o.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,o.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",_.collapseSidebarButton),onClick:a,children:(0,m.jsx)(g,{className:_.collapseSidebarButtonIcon})})}var N=n(59689),C=n(63366),S=n(4077),I=Symbol("EmptyContext"),T=t.createContext(I);function y(e){var a=e.children,n=(0,t.useState)(null),i=n[0],s=n[1],r=(0,t.useMemo)((function(){return{expandedItem:i,setExpandedItem:s}}),[i]);return(0,m.jsx)(T.Provider,{value:r,children:a})}var A=n(86043),B=n(48596),w=n(33692),Z=n(72389),L=["item","onItemClick","activePath","level","index"];function E(e){var a=e.collapsed,n=e.categoryLabel,t=e.onClick;return(0,m.jsx)("button",{"aria-label":a?(0,o.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,o.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!a,type:"button",className:"clean-btn menu__caret",onClick:t})}function H(e){var a=e.item,n=e.onItemClick,s=e.activePath,l=e.level,o=e.index,d=(0,C.Z)(e,L),u=a.items,h=a.label,b=a.collapsible,p=a.className,x=a.href,j=(0,f.L)().docs.sidebar.autoCollapseCategories,v=function(e){var a=(0,Z.Z)();return(0,t.useMemo)((function(){return e.href&&!e.linkUnlisted?e.href:!a&&e.collapsible?(0,c.LM)(e):void 0}),[e,a])}(a),g=(0,c._F)(a,s),_=(0,B.Mg)(x,s),k=(0,A.u)({initialState:function(){return!!b&&(!g&&a.collapsed)}}),N=k.collapsed,y=k.setCollapsed,H=function(){var e=(0,t.useContext)(T);if(e===I)throw new S.i6("DocSidebarItemsExpandedStateProvider");return e}(),R=H.expandedItem,M=H.setExpandedItem,W=function(e){void 0===e&&(e=!N),M(e?null:o),y(e)};return function(e){var a=e.isActive,n=e.collapsed,i=e.updateCollapsed,s=(0,S.D9)(a);(0,t.useEffect)((function(){a&&!s&&n&&i(!1)}),[a,s,n,i])}({isActive:g,collapsed:N,updateCollapsed:W}),(0,t.useEffect)((function(){b&&null!=R&&R!==o&&j&&y(!0)}),[b,R,o,y,j]),(0,m.jsxs)("li",{className:(0,i.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":N},p),children:[(0,m.jsxs)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_}),children:[(0,m.jsx)(w.Z,Object.assign({className:(0,i.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!x&&b,"menu__link--active":g}),onClick:b?function(e){null==n||n(a),x?W(!1):(e.preventDefault(),W())}:function(){null==n||n(a)},"aria-current":_?"page":void 0,role:b&&!x?"button":void 0,"aria-expanded":b&&!x?!N:void 0,href:b?null!=v?v:"#":v},d,{children:h})),x&&b&&(0,m.jsx)(E,{collapsed:N,categoryLabel:h,onClick:function(e){e.preventDefault(),W()}})]}),(0,m.jsx)(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:N,children:(0,m.jsx)(Y,{items:u,tabIndex:N?-1:0,onItemClick:n,activePath:s,level:l+1})})]})}var R=n(13919),M=n(39471);const W={menuExternalLink:"menuExternalLink_NmtK"};var F=["item","onItemClick","activePath","level","index"];function P(e){var a=e.item,n=e.onItemClick,t=e.activePath,s=e.level,l=(e.index,(0,C.Z)(e,F)),o=a.href,d=a.label,u=a.className,h=a.autoAddBaseUrl,b=(0,c._F)(a,t),p=(0,R.Z)(o);return(0,m.jsx)("li",{className:(0,i.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",u),children:(0,m.jsxs)(w.Z,Object.assign({className:(0,i.Z)("menu__link",!p&&W.menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:h,"aria-current":b?"page":void 0,to:o},p&&{onClick:n?function(){return n(a)}:void 0},l,{children:[d,!p&&(0,m.jsx)(M.Z,{})]}))},d)}const D={menuHtmlItem:"menuHtmlItem_M9Kj"};function O(e){var a=e.item,n=e.level,t=e.index,s=a.value,c=a.defaultStyle,l=a.className;return(0,m.jsx)("li",{className:(0,i.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),c&&[D.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:s}},t)}var U=["item"];function V(e){var a=e.item,n=(0,C.Z)(e,U);switch(a.type){case"category":return(0,m.jsx)(H,Object.assign({item:a},n));case"html":return(0,m.jsx)(O,Object.assign({item:a},n));default:return(0,m.jsx)(P,Object.assign({item:a},n))}}var K=["items"];function G(e){var a=e.items,n=(0,C.Z)(e,K),t=(0,c.f)(a,n.activePath);return(0,m.jsx)(y,{children:t.map((function(e,a){return(0,m.jsx)(V,Object.assign({item:e,index:a},n),a)}))})}const Y=(0,t.memo)(G),z={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function q(e){var a=e.path,n=e.sidebar,s=e.className,c=function(){var e=(0,N.n)().isActive,a=(0,t.useState)(e),n=a[0],i=a[1];return(0,d.RF)((function(a){var n=a.scrollY;e&&i(0===n)}),[e]),e&&n}();return(0,m.jsx)("nav",{"aria-label":(0,o.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.Z)("menu thin-scrollbar",z.menu,c&&z.menuWithAnnouncementBar,s),children:(0,m.jsx)("ul",{className:(0,i.Z)(r.k.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(Y,{items:n,activePath:a,level:1})})})}const J="sidebar_njMd",Q="sidebarWithHideableNavbar_wUlq",X="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){var a=e.path,n=e.sidebar,t=e.onCollapse,s=e.isHidden,r=(0,f.L)(),c=r.navbar.hideOnScroll,l=r.docs.sidebar.hideable;return(0,m.jsxs)("div",{className:(0,i.Z)(J,c&&Q,s&&X),children:[c&&(0,m.jsx)(v.Z,{tabIndex:-1,className:$}),(0,m.jsx)(q,{path:a,sidebar:n}),l&&(0,m.jsx)(k,{onClick:t})]})}const ae=t.memo(ee);var ne=n(13102),te=n(93163),ie=function(e){var a=e.sidebar,n=e.path,t=(0,te.e)();return(0,m.jsx)("ul",{className:(0,i.Z)(r.k.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(Y,{items:a,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&t.toggle(),"link"===e.type&&t.toggle()},level:1})})};function se(e){return(0,m.jsx)(ne.Zo,{component:ie,props:e})}const re=t.memo(se);function ce(e){var a=(0,j.i)(),n="desktop"===a||"ssr"===a,t="mobile"===a;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(ae,Object.assign({},e)),t&&(0,m.jsx)(re,Object.assign({},e))]})}const le={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function oe(e){var a=e.toggleSidebar;return(0,m.jsx)("div",{className:le.expandButton,title:(0,o.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,o.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:a,onClick:a,children:(0,m.jsx)(g,{className:le.expandButtonIcon})})}const de={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function ue(e){var a,n=e.children,i=(0,l.V)();return(0,m.jsx)(t.Fragment,{children:n},null!=(a=null==i?void 0:i.name)?a:"noSidebar")}function he(e){var a=e.sidebar,n=e.hiddenSidebarContainer,s=e.setHiddenSidebarContainer,c=(0,x.TH)().pathname,l=(0,t.useState)(!1),o=l[0],d=l[1],u=(0,t.useCallback)((function(){o&&d(!1),!o&&(0,p.n)()&&d(!0),s((function(e){return!e}))}),[s,o]);return(0,m.jsx)("aside",{className:(0,i.Z)(r.k.docs.docSidebarContainer,de.docSidebarContainer,n&&de.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(de.docSidebarContainer)&&n&&d(!0)},children:(0,m.jsx)(ue,{children:(0,m.jsxs)("div",{className:(0,i.Z)(de.sidebarViewport,o&&de.sidebarViewportHidden),children:[(0,m.jsx)(ce,{sidebar:a,path:c,onCollapse:u,isHidden:o}),o&&(0,m.jsx)(oe,{toggleSidebar:u})]})})})}const me={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function be(e){var a=e.hiddenSidebarContainer,n=e.children,t=(0,l.V)();return(0,m.jsx)("main",{className:(0,i.Z)(me.docMainContainer,(a||!t)&&me.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",me.docItemWrapper,a&&me.docItemWrapperEnhanced),children:n})})}const pe={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function xe(e){var a=e.children,n=(0,l.V)(),i=(0,t.useState)(!1),s=i[0],r=i[1];return(0,m.jsxs)("div",{className:pe.docsWrapper,children:[(0,m.jsx)(b,{}),(0,m.jsxs)("div",{className:pe.docRoot,children:[n&&(0,m.jsx)(he,{sidebar:n.items,hiddenSidebarContainer:s,setHiddenSidebarContainer:r}),(0,m.jsx)(be,{hiddenSidebarContainer:s,children:a})]})]})}var je=n(43380);function fe(e){var a=(0,c.SN)(e);if(!a)return(0,m.jsx)(je.Z,{});var n=a.docElement,t=a.sidebarName,o=a.sidebarItems;return(0,m.jsx)(s.FG,{className:(0,i.Z)(r.k.page.docsDocPage),children:(0,m.jsx)(l.b,{name:t,items:o,children:(0,m.jsx)(xe,{children:n})})})}},43380:(e,a,n)=>{n.d(a,{Z:()=>l});n(67294);function t(e){var a,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=t(e[a]))&&(i&&(i+=" "),i+=n);else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}const i=function(){for(var e,a,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(a=t(e))&&(i&&(i+=" "),i+=a);return i};var s=n(95999),r=n(92503),c=n(85893);function l(e){var a=e.className;return(0,c.jsx)("main",{className:i("container margin-vert--xl",a),children:(0,c.jsx)("div",{className:"row",children:(0,c.jsxs)("div",{className:"col col--12",children:[(0,c.jsx)(r.Z,{as:"h1",className:"hero__title text-center",children:(0,c.jsx)(s.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"\ud83d\udcd5 Oops! We Couldn't Find That Page"})}),(0,c.jsx)("p",{className:"margin-vert--md text-center",children:(0,c.jsx)(s.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"Where you following a link? Let us know using the Feedback button and we will setup a redirect for you in no time"})}),(0,c.jsxs)("div",{className:"container p404",children:[(0,c.jsx)("h4",{className:"text-center",children:" Don't give up! Check these awesome resources "}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col col--4",children:(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"card__image",children:(0,c.jsx)("img",{src:n(1624).default,alt:"Learn"})}),(0,c.jsxs)("div",{className:"card__body",children:[(0,c.jsx)("h3",{children:"Understanding NEAR"}),"Learn about NEAR and how it works",(0,c.jsxs)("ul",{className:"margin-vert--sm",children:[(0,c.jsx)("a",{href:"/concepts/basics/protocol",children:(0,c.jsx)("li",{children:"What is NEAR?"})}),(0,c.jsx)("a",{href:"/concepts/protocol/account-id",children:(0,c.jsx)("li",{children:"Named Accounts"})}),(0,c.jsx)("a",{href:"/concepts/protocol/access-keys",children:(0,c.jsx)("li",{children:"Access Keys"})}),(0,c.jsx)("a",{href:"/concepts/protocol/transactions",children:(0,c.jsx)("li",{children:"Transactions"})}),(0,c.jsx)("a",{href:"/concepts/protocol/gas",children:(0,c.jsx)("li",{children:"Understanding Gas"})})]})]})]})}),(0,c.jsx)("div",{className:"col col--4",children:(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"card__image",children:(0,c.jsx)("img",{src:n(89701).default,alt:"Contracts"})}),(0,c.jsxs)("div",{className:"card__body",children:[(0,c.jsx)("h3",{children:"Build"}),"Build awesome applications on NEAR",(0,c.jsxs)("ul",{className:"margin-vert--sm",children:[(0,c.jsx)("a",{href:"/build/smart-contracts/what-is",children:(0,c.jsx)("li",{children:"Smart Contracts"})}),(0,c.jsx)("a",{href:"/build/near-components/what-is",children:(0,c.jsx)("li",{children:"NEAR Components"})}),(0,c.jsx)("a",{href:"/build/web3-apps/what-is",children:(0,c.jsx)("li",{children:"Web3 Applications"})}),(0,c.jsx)("a",{href:"/build/chain-abstraction/meta-transactions",children:(0,c.jsx)("li",{children:"Relayers"})}),(0,c.jsx)("a",{href:"/build/chain-abstraction/chain-signatures",children:(0,c.jsx)("li",{children:"Multi-Chain Signatures"})}),(0,c.jsx)("a",{href:"/build/primitives/what-is",children:(0,c.jsx)("li",{children:"Primitives (FT, NFT, ...)"})}),(0,c.jsx)("a",{href:"/build/data-infrastructure/what-is",children:(0,c.jsx)("li",{children:"Indexers & Data Solutions"})}),(0,c.jsx)("a",{href:"/build/chain-abstraction/data-availability",children:" Data Availability ."})]})]})]})}),(0,c.jsx)("div",{className:"col col--4",children:(0,c.jsx)("a",{href:"/tutorials/welcome",children:(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"card__image",children:(0,c.jsx)("img",{src:n(45140).default,alt:"Tutorials"})}),(0,c.jsxs)("div",{className:"card__body",children:[(0,c.jsx)("h3",{children:"Tutorials"}),"Lots of tutorials to get you started",(0,c.jsxs)("ul",{className:"margin-vert--sm",children:[(0,c.jsx)("a",{href:"/tutorials/examples/count-near",children:(0,c.jsx)("li",{children:"Basic dApps"})}),(0,c.jsx)("a",{href:"/tutorials/examples/factory",children:(0,c.jsx)("li",{children:"Advanced Contracts"})}),(0,c.jsx)("a",{href:"/tutorials/nfts/introduction",children:(0,c.jsx)("li",{children:"NFT: Zero to Hero"})}),(0,c.jsx)("a",{href:"/tutorials/near-components/indexer-tutorials/nft-indexer",children:(0,c.jsx)("li",{children:"Indexer Tutorials"})})]})]})]})})})]})]})]})})})}},89701:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});const t=n.p+"assets/images/contracts-2da7f00e2e6131ae33de752b03bd3444.png"},45140:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});const t=n.p+"assets/images/examples-67b6887200684575b443f958ab75e1c5.png"},1624:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});const t=n.p+"assets/images/protocol-b73c2a3ace3307226ee7eb2149ee432f.png"}}]);