"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3089],{84351:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(67294);var i=a(36905),n=a(52263),r=a(71667),s=a(35281),o=a(61460),l=a(99703),d=a(90197),g=a(79985),c=a(35742),u=a(20136),p=a(85893);function m(e){var t=(0,u.C)(e);return(0,p.jsx)(c.Z,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){var t=e.metadata,a=(0,n.Z)().siteConfig.title,i=t.blogDescription,s=t.blogTitle,o="/"===t.permalink?a:s;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.d,{title:o,description:i}),(0,p.jsx)(d.Z,{tag:"blog_posts_list"})]})}function b(e){var t=e.metadata,a=e.items,i=e.sidebar;return(0,p.jsxs)(o.Z,{sidebar:i,children:[(0,p.jsx)(g.Z,{items:a}),(0,p.jsx)(l.Z,{metadata:t})]})}function f(e){return(0,p.jsxs)(r.FG,{className:(0,i.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage),children:[(0,p.jsx)(h,Object.assign({},e)),(0,p.jsx)(m,Object.assign({},e)),(0,p.jsx)(b,Object.assign({},e))]})}},99703:(e,t,a)=>{a.d(t,{Z:()=>s});a(67294);var i=a(95999),n=a(32244),r=a(85893);function s(e){var t=e.metadata,a=t.previousPage,s=t.nextPage;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.Z,{permalink:a,title:(0,r.jsx)(i.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),s&&(0,r.jsx)(n.Z,{permalink:s,title:(0,r.jsx)(i.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},79985:(e,t,a)=>{a.d(t,{Z:()=>s});a(67294);var i=a(9460),n=a(33665),r=a(85893);function s(e){var t=e.items,a=e.component,s=void 0===a?n.Z:a;return(0,r.jsx)(r.Fragment,{children:t.map((function(e){var t=e.content;return(0,r.jsx)(i.n,{content:t,children:(0,r.jsx)(s,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},20136:(e,t,a)=>{a.d(t,{C:()=>g,i:()=>c});var i=a(44996),n=a(52263),r=a(65102);var s=a(9460),o=function(e){return new Date(e).toISOString()};function l(e){var t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,a){return e?{image:(i={imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: "+a},n=i.imageUrl,r=i.caption,{"@type":"ImageObject","@id":n,url:n,contentUrl:n,caption:r})}:{};var i,n,r}function g(e){var t=(0,n.Z)().siteConfig,a=(0,i.Cg)().withBaseUrl,r=e.metadata,s=r.blogDescription,g=r.blogTitle,c=r.permalink,u=""+t.url+c;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:g,description:s,blogPost:e.items.map((function(e){return function(e,t,a){var i,n,r=e.assets,s=e.frontMatter,g=e.metadata,c=g.date,u=g.title,p=g.description,m=g.lastUpdatedAt,h=null!=(i=r.image)?i:s.image,b=null!=(n=s.keywords)?n:[],f=""+t.url+g.permalink,j=m?o(m):void 0;return Object.assign({"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:u,name:u,description:p,datePublished:c},j?{dateModified:j}:{},l(g.authors),d(h,a,u),b?{keywords:b}:{})}(e.content,t,a)}))}}function c(){var e,t,a=function(){var e,t=(0,r.Z)(),a=null==t||null==(e=t.data)?void 0:e.blogMetadata;if(!a)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return a}(),g=(0,s.C)(),c=g.assets,u=g.metadata,p=(0,n.Z)().siteConfig,m=(0,i.Cg)().withBaseUrl,h=u.date,b=u.title,f=u.description,j=u.frontMatter,v=u.lastUpdatedAt,x=null!=(e=c.image)?e:j.image,k=null!=(t=j.keywords)?t:[],Z=v?o(v):void 0,w=""+p.url+u.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":w,mainEntityOfPage:w,url:w,headline:b,name:b,description:f,datePublished:h},Z?{dateModified:Z}:{},l(u.authors),d(x,m,b),k?{keywords:k}:{},{isPartOf:{"@type":"Blog","@id":""+p.url+a.blogBasePath,name:a.blogTitle}})}function u(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}}}]);