"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3538],{99243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(85893),o=a(11151);const r={title:"An update on the near.org / RPC outage on July 11, 2024",authors:["ewiner"],slug:"2024-07-11-near-org-outage",tags:["updates","postmortems"],hide_table_of_contents:!0},s=void 0,i={permalink:"/ko/blog/2024-07-11-near-org-outage",source:"@site/../blog/2024-07-18.md",title:"An update on the near.org / RPC outage on July 11, 2024",description:"From Thursday, July 11 to Saturday, July 13, many visitors to near.org and its subdomains (like dev.near.org and docs.near.org) were unable to reach those websites. Also, NEAR applications that rely on RPC services hosted on near.org were affected. This was due to a security incident followed by an outage from one of our vendors, Squarespace. During this period, the NEAR protocol & blockchain was unaffected by this incident, as it does not rely on any centralized services.",date:"2024-07-18T00:00:00.000Z",tags:[{inline:!0,label:"updates",permalink:"/ko/blog/tags/updates"},{inline:!0,label:"postmortems",permalink:"/ko/blog/tags/postmortems"}],readingTime:6.555,hasTruncateMarker:!0,authors:[{name:"Eric Winer",title:"CTO & Managing Director, Pagoda",url:"https://github.com/ewiner",imageURL:"https://github.com/ewiner.png",key:"ewiner"}],frontMatter:{title:"An update on the near.org / RPC outage on July 11, 2024",authors:["ewiner"],slug:"2024-07-11-near-org-outage",tags:["updates","postmortems"],hide_table_of_contents:!0},unlisted:!1,nextItem:{title:"Pagoda Pauses the B.O.S. Web Engine R&D Project",permalink:"/ko/blog/bos-web-engine-sunset"}},d={authorsImageUrls:[void 0]},c=[{value:"Our Use of Squarespace DNS",id:"our-use-of-squarespace-dns",level:3},{value:"The Squarespace Security Incident",id:"the-squarespace-security-incident",level:3},{value:"The Squarespace Outage",id:"the-squarespace-outage",level:3},{value:"Reflections on this Incident",id:"reflections-on-this-incident",level:3}];function u(e){const t={a:"a",h3:"h3",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["From Thursday, July 11 to Saturday, July 13, many visitors to ",(0,n.jsx)(t.a,{href:"https://near.org",children:"near.org"})," and its subdomains (like ",(0,n.jsx)(t.a,{href:"https://dev.near.org",children:"dev.near.org"})," and ",(0,n.jsx)(t.a,{href:"https://docs.near.org/",children:"docs.near.org"}),") were unable to reach those websites. Also, NEAR applications that rely on ",(0,n.jsx)(t.a,{href:"https://docs.near.org/api/rpc/providers",children:"RPC services"})," hosted on near.org were affected. This was due to a security incident followed by an outage from one of our vendors, Squarespace. During this period, the NEAR protocol & blockchain was unaffected by this incident, as it does not rely on any centralized services."]}),"\n",(0,n.jsx)(t.h3,{id:"our-use-of-squarespace-dns",children:"Our Use of Squarespace DNS"}),"\n",(0,n.jsxs)(t.p,{children:["The near.org domain is operated by ",(0,n.jsx)(t.a,{href:"https://www.pagoda.co/",children:"Pagoda"}),", an engineering arm of the NEAR Foundation. An important part of operating a domain like near.org is choosing a DNS provider; to learn more about DNS and how it operates, please see ",(0,n.jsx)(t.a,{href:"https://www.cloudflare.com/learning/dns/what-is-dns/",children:"this introduction"}),". For years, we happily used Google\u2019s domain name registration & DNS service to manage near.org, as part of our broad usage of Google Cloud services. In June 2023, Google announced it had ",(0,n.jsx)(t.a,{href:"https://support.google.com/domains/answer/13689670?hl=en",children:"sold its Domains business to Squarespace"}),", and that our account would be transitioned to Squarespace \u201cin the next few months.\u201d We expected that the new service from Squarespace would closely match the feature set, reliability, and security we had enjoyed while using Google Domains, and if there were any problems then we could easily switch from Squarespace to another DNS provider after the transition."]}),"\n",(0,n.jsx)(t.p,{children:"Our first domain, near.wiki, was automatically moved over to Squarespace in May 2024. As we explored the new offering, our Security & IT teams quickly had concerns about the feature set, security controls, and level of enterprise support we could get from Squarespace. After some meetings with Squarespace sales and support failed to assuage our concerns, we decided to explore other DNS providers and to start migrating our domains off of Squarespace, starting with the \u2018simpler\u2019 ones and ending with near.org, our most complex and important domain name. As of last week, when this incident began, we had not yet begun migrating near.org to our new provider, Amazon Web Services, so it was still using Squarespace as its DNS provider."}),"\n",(0,n.jsx)(t.h3,{id:"the-squarespace-security-incident",children:"The Squarespace Security Incident"}),"\n",(0,n.jsxs)(t.p,{children:["Unbeknownst to us, Squarespace had a major security vulnerability. You can read about the problem in ",(0,n.jsx)(t.a,{href:"https://securityalliance.notion.site/A-Squarespace-Retrospective-or-How-to-Coordinate-an-Industry-Wide-Incident-Response-fead693b66c14543a48283d85aec19ad",children:"this in-depth blog post from Security Alliance"}),". In short, when each domain was migrated from Google to Squarespace, all existing users on the Google Domains account were sent an email inviting them to create a new Squarespace account. But not everybody clicked on that email right away \u2013 some people, e.g. managers or our accounting team, only needed to log into the DNS service rarely or in emergencies. From what we can tell, all the attacker needed to do was identify one of those email addresses and sign up for a new Squarespace account using that email address, and they would be instantly granted full access to change or delete DNS entries for near.org. From our investigation, Squarespace did not require the attacker to verify ownership of the email address before letting them have full control on our account. In fact, we see no evidence that Squarespace even sent a \u201cwelcome\u201d email to that address upon account creation, which might have raised warning flags."]}),"\n",(0,n.jsx)(t.p,{children:"On July 11, an attacker gained access to our Squarespace account. They deleted the DNS entries for near.org and its subdomains, causing the outage described above. But unlike some other domains affected by this attack, the impact on near.org seems limited to an outage; we have seen no evidence that the attacker put in place an \u2018imposter\u2019 site to try and phish or scam users."}),"\n",(0,n.jsx)(t.p,{children:"Through a combination of our actions and Squarespace\u2019s actions behind the scenes, we were able to quickly regain control of the account. However, due to other issues with Squarespace, it took another two days for near.org and its subdomains and services to get fully back online."}),"\n",(0,n.jsx)(t.h3,{id:"the-squarespace-outage",children:"The Squarespace Outage"}),"\n",(0,n.jsx)(t.p,{children:"Even with full and exclusive access to our Squarespace, we were unable to restore service on near.org. The attacker had deleted our DNS entries, and when we re-added them, Squarespace failed to propagate those new entries to other DNS providers around the world. We attempted to quickly execute a switch to Amazon Web Service\u2019s DNS provider, but the feature to switch to a different DNS service was also broken on the Squarespace site."}),"\n",(0,n.jsxs)(t.p,{children:["The next morning, on Friday July 12, on a hunch we deleted and re-added all of our DNS entries once again. This time, it did take effect and DNS providers around the world quickly saw the new information. That resolved the outage for many users, but not for everyone. near.org had been set up with an additional security feature, DNSSEC, in which Squarespace was supposed to digitally sign our DNS entries to prove that the entries had not been forged by another DNS provider. But Squarespace wasn\u2019t properly updating and signing new DNSSEC entries, so any other DNS provider that validates DNSSEC was detecting near.org\u2019s DNS entries as a forgery and refusing to allow access to near.org. This affected ",(0,n.jsx)(t.a,{href:"https://stats.labs.apnic.net/dnssec",children:"approximately 34% of users"}),", especially in Europe. There is a button on the Squarespace site to turn off DNSSEC, but unsurprisingly, that button also just showed an error message."]}),"\n",(0,n.jsx)(t.p,{children:"Finally, on Saturday July 13, we were able to make contact with a specialist on the Squarespace team, and later that day they were able to fix the DNSSEC issue. Once that change propagated to other DNS providers around the world over the next few hours, near.org and the RPC service was restored for everyone."}),"\n",(0,n.jsx)(t.h3,{id:"reflections-on-this-incident",children:"Reflections on this Incident"}),"\n",(0,n.jsx)(t.p,{children:"You may have noticed that we made a few assumptions in this blog post, saying \u201cfrom what we can tell\u201d and \u201cwe see no evidence of\u2026\u201d a few times. Ideally, almost a week after the incident began, we would have more hard truths and solid information about what happened."}),"\n",(0,n.jsxs)(t.p,{children:["Unfortunately, we\u2019ve seen little to no communication from Squarespace throughout this period. We tried multiple support tickets, chat, personal contacts, LinkedIn messages, and going through our Google support team, and still didn\u2019t hear anything back from Squarespace until late on Friday July 12, about 36 hours after the incident began. Other affected companies also reported total silence from the Squarespace team. As far as we know, Squarespace has still not acknowledged this incident publicly, let alone shared details of the issue and how they remediated it, and their ",(0,n.jsx)(t.a,{href:"https://status.squarespace.com/",children:"status page"})," showed no outages or issues during this time."]}),"\n",(0,n.jsx)(t.p,{children:"I personally find this lack of support, communication, and forthrightness to be unacceptable for any service provider. I\u2019m also somewhat disappointed in Google for transitioning a security-critical service to a new provider without proper vetting. We are accelerating our plans to move near.org and other domains out of Squarespace to Amazon Web Services\u2019s domain registrar and DNS provider, which has a great track record of reliability and security."}),"\n",(0,n.jsxs)(t.p,{children:["DNS is a core part of internet infrastructure, but it\u2019s far from a perfect system. Every domain name owner must rely on one centralized DNS provider to maintain their DNS entries, and every user and application must rely on one or more centralized DNS providers to look up entries as they navigate the internet. Various projects in the blockchain industry have created non-custodial on-chain alternatives to DNS, such as ",(0,n.jsx)(t.a,{href:"https://unstoppabledomains.com/",children:"Unstoppable Domains"})," and ",(0,n.jsx)(t.a,{href:"https://3dns.box/",children:"3DNS"})," (FYI: neither have sponsored or were made aware of this post), but the existing DNS system is so entrenched that adoption has been a challenge. Hopefully as an industry we can make headway on a more decentralized, trustless open web before further incidents like this happen."]}),"\n",(0,n.jsx)(t.p,{children:"I\u2019m deeply sorry to anyone affected by this outage, especially people exploring NEAR for the first time during the EthCC conference and EthGlobal hackathon. We will be more vigilant about using high-quality vendor services going forward \u2013 and, where possible, moving to decentralized on-chain solutions."}),"\n",(0,n.jsxs)(t.p,{children:["-Eric Winer",(0,n.jsx)("br",{}),"\nCTO & Managing Director, Pagoda"]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var n=a(67294);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);