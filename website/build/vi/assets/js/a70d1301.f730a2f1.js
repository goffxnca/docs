"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4898],{91146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=n(85893),s=n(11151);const a={title:"Reorganizing our docs",authors:["gagdiez"],slug:"reorganizing-docs",tags:["docusaurus","updates"],hide_table_of_contents:!0},i=void 0,r={permalink:"/vi/blog/reorganizing-docs",source:"@site/i18n/vi/docusaurus-plugin-content-blog/2024-04-24.md",title:"Reorganizing our docs",description:"We released a mayor reorganization of our repository, so we can improve docs for everyone... including us",date:"2024-04-24T00:00:00.000Z",tags:[{inline:!0,label:"docusaurus",permalink:"/vi/blog/tags/docusaurus"},{inline:!0,label:"updates",permalink:"/vi/blog/tags/updates"}],readingTime:3.34,hasTruncateMarker:!0,authors:[{name:"Guille",title:"Docs Maintainer",url:"https://github.com/gagdiez",imageURL:"https://github.com/gagdiez.png",key:"gagdiez"}],frontMatter:{title:"Reorganizing our docs",authors:["gagdiez"],slug:"reorganizing-docs",tags:["docusaurus","updates"],hide_table_of_contents:!0},unlisted:!1,prevItem:{title:"It's gonna be Legen... wait for it...",permalink:"/vi/blog/yield-resume"},nextItem:{title:"We have a blog now!",permalink:"/vi/blog/we-have-a-blog"}},c={authorsImageUrls:[void 0]},d=[{value:"Organic growth",id:"organic-growth",level:2},{value:"What link was that again?",id:"what-link-was-that-again",level:2},{value:"The problem",id:"the-problem",level:3},{value:"The migration",id:"the-migration",level:3},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"We released a mayor reorganization of our repository, so we can improve docs for everyone... including us"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsx)("img",{src:"https://img.freepik.com/free-photo/ancient-books-adorn-library-carefully-arranged-with-classics-rare-gems_157027-2332.jpg"})}),"\n",(0,o.jsx)(t.h2,{id:"organic-growth",children:"Organic growth"}),"\n",(0,o.jsxs)(t.p,{children:["Our documentation is the result of multiple people collaborating across the span of four very active years, and it has seen a lot of changes: ",(0,o.jsx)(t.a,{href:"https://github.com/near/docs/commits/master/",children:"2942 commits and counting"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["In the beginning, our docs only needed to explain how to create ",(0,o.jsx)(t.a,{href:"/build/smart-contracts/what-is",children:"smart contracts"}),", and how to ",(0,o.jsx)(t.a,{href:"/build/web3-apps/quickstart",children:"interact with them through a frontend"}),". Fast forward to today, and we have more than 200 pages of documentation, covering topics such as ",(0,o.jsx)(t.a,{href:"/build/chain-abstraction/what-is",children:"chain abstraction"}),", ",(0,o.jsx)(t.a,{href:"/build/near-components/what-is",children:"on-chain components"}),", ",(0,o.jsx)(t.a,{href:"/build/data-infrastructure/what-is",children:"data infrastructure"}),", and ",(0,o.jsx)(t.a,{href:"/build/primitives/what-is",children:"primitives such as NFT, FT"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The best thing is that new features are released every single month. However, all progress comes at a cost, and as our ecosystem grew, so did the disorganization of our documentation."}),"\n",(0,o.jsx)(t.h2,{id:"what-link-was-that-again",children:"What link was that again?"}),"\n",(0,o.jsxs)(t.p,{children:["Let's briefly explain how ",(0,o.jsx)(t.a,{href:"https://docusaurus.io/",children:"docusaurus"})," (the framework we use in our docs) works so you can understand the problem."]}),"\n",(0,o.jsxs)(t.p,{children:["In docusaurus, all the pages are written as simple markdown files. These files go inside the ",(0,o.jsx)(t.code,{children:"./docs"})," folder, and can be organized in folders. Each file has a unique ID on its header that identifies it (e.g. ",(0,o.jsx)(t.code,{children:"id: what-is"}),"), and this ID, alongside its folder path, is used to generate the URL."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["For example, the document ",(0,o.jsx)(t.a,{href:"https://github.com/near/docs/blob/master/docs/2.build/2.smart-contracts/what-is.md",children:(0,o.jsx)(t.code,{children:"docs/build/smart-contracts/what-is.md"})})," has the ",(0,o.jsx)(t.code,{children:"id: what-is"}),", so it ends being served in the URL ",(0,o.jsx)(t.a,{href:"https://docs.near.org/build/smart-contracts/what-is",children:"https://docs.near.org/build/smart-contracts/what-is"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"the-problem",children:"The problem"}),"\n",(0,o.jsx)(t.p,{children:"About a year ago, we noticed that our organic growth had left us with a very inconsistent URL structure. Basically, we had a lot of folders, and the files related to the same topic (e.g. NEAR components) would be all over the place."}),"\n",(0,o.jsxs)(t.p,{children:['For example, you would be in the "Build" section reading about "What is a NEAR Component?" and the URL was ',(0,o.jsx)(t.code,{children:"/bos/tutorial/quickstart"}),'. The next page was "Setup an Environment" located at ',(0,o.jsx)(t.code,{children:"/bos/dev/intro"}),', followed by "Anatomy of a Component -> State" at ',(0,o.jsx)(t.code,{children:"/bos/api/state"}),". Talk about consistency!"]}),"\n",(0,o.jsx)(t.p,{children:'Of course, we did not do this on purpose, it is just how things evolved. You might even notice that we are now talking about "NEAR Components" but the URL talks about "BOS". This is because when we started, "BOS" (Blockchain Operating System) felt like a good name, but community feedback made us know that, indeed, it was not.'}),"\n",(0,o.jsx)(t.h3,{id:"the-migration",children:"The migration"}),"\n",(0,o.jsxs)(t.p,{children:["We ",(0,o.jsx)(t.a,{href:"https://github.com/near/docs/pull/1890/files",children:"re-organized more than 200 files"})," to a new structure that is more consistent. This makes it easier for users to remember the URLs, improves our SEO, and makes it easier for contributors to find where to add new content. No more need to search across multiple folders trying to find the right file!"]}),"\n",(0,o.jsxs)(t.p,{children:["In the process, we updated all ",(0,o.jsx)(t.strong,{children:"internal links"}),", aided by our ",(0,o.jsx)(t.a,{href:"https://github.com/near/docs/blob/master/website/test-links.sh",children:"link-checker script"})," to make sure we left ",(0,o.jsx)(t.strong,{children:"no broken links"}),". We also added ",(0,o.jsx)(t.strong,{children:"URL redirects"})," in our server, so all users coming from an external site are redirected to the correct URLs."]}),"\n",(0,o.jsxs)(t.p,{children:["Besides checking broken links, we took the time to make sure all the ",(0,o.jsx)(t.strong,{children:"translations were correctly migrated"}),". The system Docusaurus uses (called ",(0,o.jsx)(t.a,{href:"https://crowdin.com/",children:"Crowdin"}),") is not very good at detecting changes in a file, so migrating all the translations was a huge effort in itself."]}),"\n",(0,o.jsx)(t.p,{children:"We could write a blog post just about migrating translations in docusaurus + crowdin... but we will spare you the pain."}),"\n",(0,o.jsx)(t.admonition,{title:"Missing URL",type:"tip",children:(0,o.jsxs)(t.p,{children:["If you come across a URL that is not working, please let us know by using the ",(0,o.jsx)(t.code,{children:"Feedback"})," button on the right side of the page, or by opening an ",(0,o.jsx)(t.a,{href:"https://github.com/near/docs/issues",children:"issue in our repository"})]})}),"\n",(0,o.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,o.jsx)(t.p,{children:"Now that most of our documentation is in a better shape, we can focus on improving the content itself. We have a lot of ideas on how to make the docs more interactive, and we are excited to start working on them."}),"\n",(0,o.jsx)(t.p,{children:"Stay tuned for more updates, and remember that if you have any feedback or ideas, you can always reach out to us. We are always happy to hear from you!"}),"\n",(0,o.jsx)(t.p,{children:"See you in the next post! \ud83d\ude80"})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(67294);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);