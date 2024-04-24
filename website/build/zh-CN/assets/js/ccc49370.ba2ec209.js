"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6103],{9209:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});t(67294);var a=t(36905),i=t(71667),r=t(35281),o=t(9460),l=t(61460),s=t(33665),c=t(95999),d=t(32244),u=t(85893);function m(e){var n=e.nextItem,t=e.prevItem;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,Object.assign({},t,{subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})})),n&&(0,u.jsx)(d.Z,Object.assign({},n,{subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0}))]})}function g(){var e,n=(0,o.C)(),t=n.assets,a=n.metadata,r=a.title,l=a.description,s=a.date,c=a.tags,d=a.authors,m=a.frontMatter,g=m.keywords,f=null!=(e=t.image)?e:m.image;return(0,u.jsxs)(i.d,{title:r,description:l,keywords:g,image:f,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),d.some((function(e){return e.url}))&&(0,u.jsx)("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")})]})}var f=t(35742),v=t(20136);function h(){var e=(0,v.i)();return(0,u.jsx)(f.Z,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=t(39407),b=t(22212);function x(e){var n=e.sidebar,t=e.children,a=(0,o.C)(),i=a.metadata,r=a.toc,c=i.nextItem,d=i.prevItem,g=i.frontMatter,f=i.unlisted,v=g.hide_table_of_contents,h=g.toc_min_heading_level,x=g.toc_max_heading_level;return(0,u.jsxs)(l.Z,{sidebar:n,toc:!v&&r.length>0?(0,u.jsx)(p.Z,{toc:r,minHeadingLevel:h,maxHeadingLevel:x}):void 0,children:[f&&(0,u.jsx)(b.Z,{}),(0,u.jsx)(s.Z,{children:t}),(c||d)&&(0,u.jsx)(m,{nextItem:c,prevItem:d})]})}function j(e){var n=e.content;return(0,u.jsx)(o.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.FG,{className:(0,a.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(h,{}),(0,u.jsx)(x,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},39407:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(63366),i=(t(67294),t(36905)),r=t(93743);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(85893),s=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var n=e.className,t=(0,a.Z)(e,s);return(0,l.jsx)("div",{className:(0,i.Z)(o.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(r.Z,Object.assign({},t,{linkClassName:c,linkActiveClassName:d}))})}},93743:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(63366),i=t(67294),r=t(86668),o=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var i=[];return n.forEach((function(e){var t=e.parentIndex,r=(0,a.Z)(e,o);t>=0?n[t].children.push(r):i.push(r)})),i}function s(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){var n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function d(e,n){var t,a,i=n.anchorTopOffset,r=e.find((function(e){return c(e).top>=i}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,i.useRef)(0),n=(0,r.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,i.useRef)(void 0),t=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,i=e.linkActiveClassName,r=e.minHeadingLevel,o=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],i=n;i<=t;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=d(l,{anchorTopOffset:t.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var g=t(33692),f=t(85893);function v(e){var n=e.toc,t=e.className,a=e.linkClassName,i=e.isChild;return n.length?(0,f.jsx)("ul",{className:i?void 0:t,children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)(g.Z,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,f.jsx)(v,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const h=i.memo(v);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function b(e){var n=e.toc,t=e.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,g=void 0===u?void 0:u,v=e.minHeadingLevel,b=e.maxHeadingLevel,x=(0,a.Z)(e,p),j=(0,r.L)(),L=null!=v?v:j.tableOfContents.minHeadingLevel,C=null!=b?b:j.tableOfContents.maxHeadingLevel,k=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return s({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:L,maxHeadingLevel:C});return m((0,i.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:L,maxHeadingLevel:C}}),[d,g,L,C])),(0,f.jsx)(h,Object.assign({toc:k,className:o,linkClassName:d},x))}},22212:(e,n,t)=>{t.d(n,{Z:()=>g});t(67294);var a=t(36905),i=t(95999),r=t(35742),o=t(85893);function l(){return(0,o.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,o.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(r.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(35281),u=t(59047);function m(e){var n=e.className;return(0,o.jsx)(u.Z,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,a.Z)(n,d.k.common.unlistedBanner),children:(0,o.jsx)(s,{})})}function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,Object.assign({},e))]})}},20136:(e,n,t)=>{t.d(n,{C:()=>d,i:()=>u});var a=t(44996),i=t(52263),r=t(65102);var o=t(9460),l=function(e){return new Date(e).toISOString()};function s(e){var n=e.map(m);return{author:1===n.length?n[0]:n}}function c(e,n,t){return e?{image:(a={imageUrl:n(e,{absolute:!0}),caption:"title image for the blog post: "+t},i=a.imageUrl,r=a.caption,{"@type":"ImageObject","@id":i,url:i,contentUrl:i,caption:r})}:{};var a,i,r}function d(e){var n=(0,i.Z)().siteConfig,t=(0,a.C)().withBaseUrl,r=e.metadata,o=r.blogDescription,d=r.blogTitle,u=r.permalink,m=""+n.url+u;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:d,description:o,blogPost:e.items.map((function(e){return function(e,n,t){var a,i,r=e.assets,o=e.frontMatter,d=e.metadata,u=d.date,m=d.title,g=d.description,f=d.lastUpdatedAt,v=null!=(a=r.image)?a:o.image,h=null!=(i=o.keywords)?i:[],p=""+n.url+d.permalink,b=f?l(f):void 0;return Object.assign({"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:m,name:m,description:g,datePublished:u},b?{dateModified:b}:{},s(d.authors),c(v,t,m),h?{keywords:h}:{})}(e.content,n,t)}))}}function u(){var e,n,t=function(){var e,n=(0,r.Z)(),t=null==n||null==(e=n.data)?void 0:e.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),d=(0,o.C)(),u=d.assets,m=d.metadata,g=(0,i.Z)().siteConfig,f=(0,a.C)().withBaseUrl,v=m.date,h=m.title,p=m.description,b=m.frontMatter,x=m.lastUpdatedAt,j=null!=(e=u.image)?e:b.image,L=null!=(n=b.keywords)?n:[],C=x?l(x):void 0,k=""+g.url+m.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:h,name:h,description:p,datePublished:v},C?{dateModified:C}:{},s(m.authors),c(j,f,h),L?{keywords:L}:{},{isPartOf:{"@type":"Blog","@id":""+g.url+t.blogBasePath,name:t.blogTitle}})}function m(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}}}]);