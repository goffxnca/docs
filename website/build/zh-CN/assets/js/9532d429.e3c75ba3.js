"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7860],{79446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(85893),o=n(11151);const a={title:"Pagoda Pauses the B.O.S. Web Engine R&D Project",authors:["thisisjoshford"],slug:"bos-web-engine-sunset",tags:["updates","BWE","VM2","BOS"],hide_table_of_contents:!0},s=void 0,r={permalink:"/zh-CN/blog/bos-web-engine-sunset",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2024-07-01.md",title:"Pagoda Pauses the B.O.S. Web Engine R&D Project",description:"After careful consideration, Pagoda has decided to discontinue its active efforts to improve the B.O.S. Web Engine",date:"2024-07-01T00:00:00.000Z",tags:[{inline:!0,label:"updates",permalink:"/zh-CN/blog/tags/updates"},{inline:!0,label:"BWE",permalink:"/zh-CN/blog/tags/bwe"},{inline:!0,label:"VM2",permalink:"/zh-CN/blog/tags/vm-2"},{inline:!0,label:"BOS",permalink:"/zh-CN/blog/tags/bos"}],readingTime:6.085,hasTruncateMarker:!0,authors:[{name:"Josh Ford",title:"DevX PM",url:"https://github.com/thisisjoshford",imageURL:"https://github.com/thisisjoshford.png",key:"thisisjoshford"}],frontMatter:{title:"Pagoda Pauses the B.O.S. Web Engine R&D Project",authors:["thisisjoshford"],slug:"bos-web-engine-sunset",tags:["updates","BWE","VM2","BOS"],hide_table_of_contents:!0},unlisted:!1,prevItem:{title:"An update on the near.org / RPC outage on July 11, 2024",permalink:"/zh-CN/blog/2024-07-11-near-org-outage"},nextItem:{title:"One place for all Smart Contracts Docs",permalink:"/zh-CN/blog/sdks-unified"}},l={authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",level:2},{value:"B.O.S. Web Engine",id:"bos-web-engine",level:2},{value:"True Believers",id:"true-believers",level:3},{value:"Quick Builders",id:"quick-builders",level:3},{value:"Detractors",id:"detractors",level:3},{value:"What does this mean for B.O.S. components &amp; the current VM?",id:"what-does-this-mean-for-bos-components--the-current-vm",level:2},{value:"Should I migrate my project off of B.O.S.?",id:"should-i-migrate-my-project-off-of-bos",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"After careful consideration, Pagoda has decided to discontinue its active efforts to improve the B.O.S. Web Engine"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsx)("img",{src:"/assets/images/protocol-b73c2a3ace3307226ee7eb2149ee432f.png"})}),"\n",(0,i.jsxs)(t.p,{children:["After many discussions with NEAR\u2019s B.O.S. component developers and careful consideration, Pagoda has decided to discontinue its active development for ",(0,i.jsx)(t.a,{href:"https://github.com/near/bos-web-engine",children:"B.O.S. Web Engine R&D "}),"for an improved execution layer for NEAR B.O.S. Components. (also known as \u201cBWE\u201d & \u201cVM2\u201d)"]}),"\n",(0,i.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,i.jsxs)(t.p,{children:["Last year, ",(0,i.jsx)(t.a,{href:"https://near.org/blog/near-announces-the-blockchain-operating-system",children:"NEAR introduced the Blockchain Operating System"}),", demonstrating how NEAR\u2019s performant tech stack could support a full-stack decentralized development platform that was multi-chain compatible. A core feature of this system consisted of composable decentralized front-ends (B.O.S. Components) paired with a user-centric data storage contract (social-db). This model, ",(0,i.jsx)(t.a,{href:"https://thewiki.near.page/PastPresentAndFutureOfNearSocial",children:"pioneered by NEAR Social"}),", aimed to continue NEAR\u2019s mission of empowering users to own their data as well as eliminate reliance on centralized, single-entity-controlled web applications. The potential of a fully decentralized web and the creation of real dApps became closer to reality with these inherently open and customizable experiences."]}),"\n",(0,i.jsx)(t.p,{children:"As the community started to adopt B.O.S. it soon became clear that, while devs loved how fast it was to go from an idea to a product, its intrinsic technical limitations made it hard to use B.O.S. for any real-world application. This consistent feedback from multiple members of the community prompted Pagoda to start an R&D effort to improve B.O.S. such that:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"It was as close to vanilla React as possible"}),"\n",(0,i.jsx)(t.li,{children:"Supported npm package imports"}),"\n",(0,i.jsx)(t.li,{children:"Unlocked multi-chain scalability limitations"}),"\n",(0,i.jsx)(t.li,{children:"Improved performance"}),"\n",(0,i.jsx)(t.li,{children:"Improved security"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"bos-web-engine",children:"B.O.S. Web Engine"}),"\n",(0,i.jsxs)(t.p,{children:["In order to act on this feedback and accomplish these goals, improvements had to be made to the execution layer that makes this all possible. At its core, a virtual machine, (",(0,i.jsx)(t.a,{href:"https://github.com/NearSocial/VM",children:"NEAR Social VM"}),") renders front-end code that developers store in a smart contract onchain (social-db). It was determined that a new approach to the original VM solution was needed, and the B.O.S. Web Engine project was created. Countless hours of hard work and dedication have gone into this project, yielding many significant achievements along the way. However, one major challenge still stands in the way of a production-ready beta release: expanding support for npm packages, particularly UI libraries."]}),"\n",(0,i.jsxs)(t.p,{children:["During the alpha testing phase of this project, we anticipated a fairly straightforward path in resolving wider npm support but unfortunately, the team discovered a more complex scenario. While standard JavaScript packages work well, React UI libraries frequently encounter difficulties. These challenges stem from the unique packaging methods of each library and the complexities involved in synchronizing changes between the iframe and the outer DOM. Although we have identified several theoretical solutions, each requires further research and development to assess their practicality and effectiveness. This has been more fully detailed in ",(0,i.jsx)(t.a,{href:"https://github.com/near/react-on-chain/discussions/425",children:"a GitHub discussion within the BWE Repo"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"We reached out to leading B.O.S. component contributors to determine whether this limitation would be unnegotiable and to learn what features they value most. Do they prioritize unrestricted NPM support over secure iframe composability? How important is composability, and how would they define it? (considering our approach dissects it down to the atomic level of every element)"}),"\n",(0,i.jsx)(t.p,{children:"This revealed some interesting findings, one of which was that secure composability on an atomic level was not at the top of the list. Most favored the ease of quick prototyping, deployment, and onboarding with managed infra and wallet connections. Many valued social-db features and the ability to create custom gateways (websites) using code and user data publicly available to them."}),"\n",(0,i.jsx)(t.p,{children:"In short, there were three camps:"}),"\n",(0,i.jsx)(t.h3,{id:"true-believers",children:"True Believers"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Decentralize all the things!"}),"\n",(0,i.jsx)(t.li,{children:"Love bleeding-edge unique tech"}),"\n",(0,i.jsx)(t.li,{children:"Love inherent open-source"}),"\n",(0,i.jsx)(t.li,{children:"Love social-db and its features"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"quick-builders",children:"Quick Builders"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Love the speed of development, prototyping, remixing"}),"\n",(0,i.jsx)(t.li,{children:"Love reverse engineering existing components"}),"\n",(0,i.jsx)(t.li,{children:"Quick onboarding with managed infra and wallet connections"}),"\n",(0,i.jsx)(t.li,{children:"Great for hackathons"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"detractors",children:"Detractors"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Don't like anything about B.O.S. components"}),"\n",(0,i.jsx)(t.li,{children:"DevX is poor and UI is slow"}),"\n",(0,i.jsx)(t.li,{children:"Value convenience over decentralization"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"After reviewing our findings and engaging extensively with developers using this platform, it became clear that continuing with the release of the B.O.S. web engine as currently planned could potentially have a net negative impact. The majority of developers indicated that they do not favor a version of the BWE with limited npm support, even if it means enhanced secure composability. Additionally, while a minority of builders prioritize decentralization over performance and convenience, those who truly value decentralized frontends might find simpler ways to achieve their objectives once the need for secure composability is eliminated."}),"\n",(0,i.jsxs)(t.p,{children:["For those who may disagree with this perspective, the B.O.S. Web Engine remains, and will always be an open-source project. Anyone who sees value in the work we have done and wishes to advance this initiative is welcome to carry this torch and continue the development. ",(0,i.jsx)(t.a,{href:"https://github.com/near/bos-web-engine",children:"https://github.com/near/bos-web-engine"})]}),"\n",(0,i.jsx)(t.h2,{id:"what-does-this-mean-for-bos-components--the-current-vm",children:"What does this mean for B.O.S. components & the current VM?"}),"\n",(0,i.jsx)(t.p,{children:"During the development of the B.O.S. Web Engine, a large focus was placed on addressing the security aspects of the existing VM and B.O.S. component architecture. The primary concern is with the composability and attack vectors that are exposed when importing components authored by third parties. Despite numerous patches to address discovered exploits, the inherent complexities of JavaScript and the current VM\u2019s architecture suggest that such vulnerabilities may continue to persist. Pagoda has diligently monitored and addressed these issues to date but we anticipate challenges in continuing to proactively discover and mitigate future vulnerabilities."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["For examples of previously discovered vulnerabilities, view the ",(0,i.jsx)(t.a,{href:"https://github.com/NearSocial/VM/releases",children:"VM changelog"})," going back to ",(0,i.jsx)(t.code,{children:"v2.5.1"}),", paying attention to lines tagged as ",(0,i.jsx)(t.code,{children:"FIX"})," on issues Reported by ",(0,i.jsx)(t.code,{children:"BrunoModificato"})," from OtterSec."]})}),"\n",(0,i.jsx)(t.p,{children:"If you find value in creating B.O.S. components and leveraging the features of the social-db smart contract, rest assured that this framework will remain open-source and permanently accessible on-chain. However, we urge caution when incorporating and using third-party components. Due to the current virtual machine's limitations, we cannot guarantee protection against potential future exploits."}),"\n",(0,i.jsx)(t.h2,{id:"should-i-migrate-my-project-off-of-bos",children:"Should I migrate my project off of B.O.S.?"}),"\n",(0,i.jsxs)(t.p,{children:["If your application relies on community-contributed or unreviewed third-party components, then ",(0,i.jsx)(t.strong,{children:"yes"}),". As described above, we cannot guarantee protection against future security vulnerabilities in the VM and B.O.S. component architecture. However, you can mitigate (but not eliminate) these security risks by reviewing all third-party components and either forking them or locking down dependencies to the specific version that you reviewed."]}),"\n",(0,i.jsxs)(t.p,{children:["If you are not relying on any untrusted component code, then ",(0,i.jsx)(t.strong,{children:"maybe"}),". You are not being forced to migrate and there are still teams actively building new applications leveraging B.O.S. Additionally, there are no plans to deprecate main B.O.S. gateways at ",(0,i.jsx)(t.a,{href:"https://dev.near.org",children:"dev.near.org"}),", ",(0,i.jsx)(t.a,{href:"https://near.social",children:"near.social"}),", ",(0,i.jsx)(t.a,{href:"https://dapdap.net",children:"dapdap"})," or ",(0,i.jsx)(t.a,{href:"https://bos.gg",children:"bos.gg"}),". However, the underlying framework and virtual machine are no longer actively developed or maintained by the original team. Consequently, the pace at which new features are introduced and existing bugs or vulnerabilities are addressed may be slower than expected. We openly welcome new maintainers for ",(0,i.jsx)(t.a,{href:"https://github.com/nearsocial",children:"this codebase"}),". However, as previously mentioned, we anticipate that additional security vulnerabilities may still be discovered."]}),"\n",(0,i.jsxs)(t.p,{children:["We have updated ",(0,i.jsx)(t.a,{href:"https://docs.near.org/build/web3-apps/frontend",children:"\u201cFrontends for Web3 dApps\u201d in docs.near.org"}),"  to help you choose a solution that is right for you. If you need help, please reach out to one of our support channels on ",(0,i.jsx)(t.a,{href:"https://t.me/neardev",children:"Telegram"})," or ",(0,i.jsx)(t.a,{href:"https://near.chat",children:"Discord"})," and we will be happy to assist you or answer any questions you have."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(67294);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);