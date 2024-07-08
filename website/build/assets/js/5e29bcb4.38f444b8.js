"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5338],{93779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(85893),i=n(11151);const s={sidebar_position:2,sidebar_label:"Webhooks Example"},r="Turn on the (Hue) lights with NEAR NFTs and Pagoda Alerts & Triggers",a={id:"pagoda/alerts/webhooks",title:"Turn on the (Hue) lights with NEAR NFTs and Pagoda Alerts & Triggers",description:"Please be advised that these tools and services will be discontinued soon.",source:"@site/../docs/pagoda/alerts/webhooks.md",sourceDirName:"pagoda/alerts",slug:"/pagoda/alerts/webhooks",permalink:"/pagoda/alerts/webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/pagoda/alerts/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1712614736e3,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Webhooks Example"},sidebar:"pagoda",previous:{title:"Setup",permalink:"/pagoda/alerts/setup"}},h={},d=[{value:"Overview",id:"overview",level:2},{value:"What will we be doing?",id:"what-will-we-be-doing",level:2},{value:"What is IFTTT?",id:"what-is-ifttt",level:3},{value:"If This",id:"if-this",level:4},{value:"Then That",id:"then-that",level:4},{value:"Step 1: Getting the webhook address",id:"step-1-getting-the-webhook-address",level:2},{value:"Step 2: Setting up your Trigger",id:"step-2-setting-up-your-trigger",level:2},{value:"Step 3: Select your Action",id:"step-3-select-your-action",level:2},{value:"Step 4: Setting up your endpoint",id:"step-4-setting-up-your-endpoint",level:2},{value:"Step 5: Integrating Webhook into Pagoda Console",id:"step-5-integrating-webhook-into-pagoda-console",level:2},{value:"Wrapping up",id:"wrapping-up",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"turn-on-the-hue-lights-with-near-nfts-and-pagoda-alerts--triggers",children:"Turn on the (Hue) lights with NEAR NFTs and Pagoda Alerts & Triggers"}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"Please be advised that these tools and services will be discontinued soon."})}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"How cool would it be to have your lights turn on or your favorite song on spotify to play when someone bought your NFT on NEAR?"}),"\n",(0,o.jsx)(t.p,{children:"With the Pagoda Console and IFTTT you can do both in minutes with zero code!"}),"\n",(0,o.jsx)(t.h2,{id:"what-will-we-be-doing",children:"What will we be doing?"}),"\n",(0,o.jsxs)(t.p,{children:["Using a combination of the ",(0,o.jsx)(t.a,{href:"https://console.pagoda.co",children:"Pagoda Console"})," and ",(0,o.jsx)(t.a,{href:"https://ifttt.com",children:"IFTTT"})," we will turn on our lights when a successful transaction has been processed."]}),"\n",(0,o.jsx)(t.p,{children:"We will be using the webhook trigger to allow the pagoda console to call an endpoint on IFTTT which will then turn on our HUE Lights"}),"\n",(0,o.jsx)(t.h3,{id:"what-is-ifttt",children:"What is IFTTT?"}),"\n",(0,o.jsx)(t.p,{children:'IFTTT stands for "If This Then That". It\'s a platform (at ifttt.com) that provides a variety of services each with their own collection of applets within it that provide some unique functionality.'}),"\n",(0,o.jsx)("img",{width:"60%",src:"/docs/pagoda/webhook1.png"}),"\n",(0,o.jsx)(t.h4,{id:"if-this",children:"If This"}),"\n",(0,o.jsx)(t.p,{children:'It starts with the "If This" Trigger. For example time could be your trigger, so if it\'s 10pm you can write your own script to turn off your lights. Or something more random like, liking a song on spotify could add the music video to a youtube playlist.'}),"\n",(0,o.jsx)(t.p,{children:"There are a lot of triggers on this service, but just to name some examples"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Time"}),"\n",(0,o.jsx)(t.li,{children:"Temperature"}),"\n",(0,o.jsx)(t.li,{children:"Webhooks (what we'll be using)"}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"then-that",children:"Then That"}),"\n",(0,o.jsx)(t.p,{children:'Next comes the "Then That" action. An action is what happens when your trigger has been tripped. For example, turning out the lights at 10pm OR turning them on when you mint an NFT on NEAR.'}),"\n",(0,o.jsx)(t.h2,{id:"step-1-getting-the-webhook-address",children:"Step 1: Getting the webhook address"}),"\n",(0,o.jsx)(t.p,{children:"We will be setting up a webhook trigger so after you make an account on ifttt.com You will see this page...."}),"\n",(0,o.jsx)("img",{width:"70%",src:"/docs/pagoda/webhook2.png"}),"\n",(0,o.jsxs)(t.p,{children:["Go to the ",(0,o.jsx)(t.strong,{children:"Services"}),' Tab and search for "webhook"']}),"\n",(0,o.jsx)("img",{width:"20%",src:"/docs/pagoda/webhook3.png"}),"\n",(0,o.jsx)(t.p,{children:"Click on the webhooks icon and then you'll be sent to this page..."}),"\n",(0,o.jsx)("img",{width:"50%",src:"/docs/pagoda/webhook4.png"}),"\n",(0,o.jsx)(t.p,{children:'Click on the "Documentation Button". This should open up a new tab....'}),"\n",(0,o.jsx)("img",{width:"70%",src:"/docs/pagoda/webhook5.png"}),"\n",(0,o.jsx)(t.p,{children:'Leave that page alone for now we\'ll come back to it. This is essentially where we get the webhook address we will call for our "IF".'}),"\n",(0,o.jsx)(t.h2,{id:"step-2-setting-up-your-trigger",children:"Step 2: Setting up your Trigger"}),"\n",(0,o.jsxs)(t.p,{children:["Hit the ",(0,o.jsx)(t.strong,{children:"Create"})," Button on the upper right corner of the screen.."]}),"\n",(0,o.jsx)("img",{width:"20%",src:"/docs/pagoda/webhook6.png"}),"\n",(0,o.jsx)(t.p,{children:'Next click on the "If This" Button...'}),"\n",(0,o.jsx)("img",{width:"40%",src:"/docs/pagoda/webhook7.png"}),"\n",(0,o.jsxs)(t.p,{children:["Again search for ",(0,o.jsx)(t.strong,{children:"webhooks"})," ..."]}),"\n",(0,o.jsx)("img",{width:"60%",src:"/docs/pagoda/webhook8.png"}),"\n",(0,o.jsxs)(t.p,{children:["Select the ",(0,o.jsx)(t.strong,{children:"Receive a Web Request"})," trigger..."]}),"\n",(0,o.jsx)("img",{width:"30%",src:"/docs/pagoda/webhook9.png"}),"\n",(0,o.jsxs)(t.p,{children:["let's call this \"",(0,o.jsx)(t.strong,{children:"on_transaction"}),'" then select create trigger']}),"\n",(0,o.jsx)("img",{width:"50%",src:"/docs/pagoda/webhook10.png"}),"\n",(0,o.jsx)(t.h2,{id:"step-3-select-your-action",children:"Step 3: Select your Action"}),"\n",(0,o.jsx)(t.p,{children:"You for this tutorial you will need to have:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Hue Account"}),"\n",(0,o.jsx)(t.li,{children:"Hue Lights"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Next click on ",(0,o.jsx)(t.strong,{children:"Then That"})," ..."]}),"\n",(0,o.jsx)("img",{width:"50%",src:"/docs/pagoda/webhook11.png"}),"\n",(0,o.jsxs)(t.p,{children:["Search for ",(0,o.jsx)(t.strong,{children:"Hue"})]}),"\n",(0,o.jsx)("img",{width:"60%",src:"/docs/pagoda/webhook12.png"}),"\n",(0,o.jsx)(t.p,{children:"Select Turn On Lights"}),"\n",(0,o.jsx)("img",{width:"30%",src:"/docs/pagoda/webhook13.png"}),"\n",(0,o.jsx)(t.p,{children:"Select the lights of your choosing but I will simply do all lights."}),"\n",(0,o.jsx)(t.p,{children:"If you haven't already create and connect your Hue Account"}),"\n",(0,o.jsx)("img",{width:"40%",src:"/docs/pagoda/webhook14.png"}),"\n",(0,o.jsxs)(t.p,{children:["After you do this simply hit ",(0,o.jsx)(t.strong,{children:"Create Action"})," Then you'll be redirected here..."]}),"\n",(0,o.jsx)("img",{width:"50%",src:"/docs/pagoda/webhook15.png"}),"\n",(0,o.jsxs)(t.p,{children:["As you can see you can add more than one trigger or action if you'd like. But for now we'll stick to the one. Hit ",(0,o.jsx)(t.strong,{children:"Continue"})]}),"\n",(0,o.jsx)(t.h2,{id:"step-4-setting-up-your-endpoint",children:"Step 4: Setting up your endpoint"}),"\n",(0,o.jsxs)(t.p,{children:["Once you hit ",(0,o.jsx)(t.strong,{children:"Continue"})," you'll be redirected here..."]}),"\n",(0,o.jsx)("img",{width:"40%",src:"/docs/pagoda/webhook16.png"}),"\n",(0,o.jsxs)(t.p,{children:['take note of the name "on_transaction" and copy it.. then hit the ',(0,o.jsx)(t.strong,{children:"Finish"})," button..."]}),"\n",(0,o.jsx)(t.p,{children:"Next go back to the documentation tab we opened up earlier"}),"\n",(0,o.jsxs)(t.p,{children:["Where it says ",(0,o.jsx)(t.code,{children:"{event}"}),' replace everything even the curly braces with "on_transaction"']}),"\n",(0,o.jsx)("img",{width:"90%",src:"/docs/pagoda/webhook17.png"}),"\n",(0,o.jsx)(t.p,{children:"to"}),"\n",(0,o.jsx)("img",{width:"90%",src:"/docs/pagoda/webhook18.png"}),"\n",(0,o.jsx)(t.p,{children:"copy that entire line and head on over to console.pagoda.co"}),"\n",(0,o.jsx)(t.h2,{id:"step-5-integrating-webhook-into-pagoda-console",children:"Step 5: Integrating Webhook into Pagoda Console"}),"\n",(0,o.jsx)(t.p,{children:"Once at console.pagoda.co, you should be greeted by the log-in page. Select the Non-funcable Token (NFT) project to start exploring the NFT contract"}),"\n",(0,o.jsx)("img",{width:"60%",src:"/docs/pagoda/webhook19.png"}),"\n",(0,o.jsx)(t.p,{children:'Hit the "Deploy and Explore Contract" Button. This will create a dev account for you and deploy the pre written NFT smart contract onto that account for you.'}),"\n",(0,o.jsx)("img",{width:"40%",src:"/docs/pagoda/webhook20.png"}),"\n",(0,o.jsxs)(t.p,{children:["Head to the ",(0,o.jsx)("kbd",{children:"Alerts"})," section"]}),"\n",(0,o.jsx)("img",{width:"20%",src:"/docs/pagoda/webhook21.png"}),"\n",(0,o.jsxs)(t.p,{children:["And select ",(0,o.jsx)("kbd",{children:"+ New Alert"})]}),"\n",(0,o.jsx)("img",{width:"70%",src:"/docs/pagoda/webhook22.png"}),"\n",(0,o.jsx)(t.p,{children:"You should see this page..."}),"\n",(0,o.jsx)("img",{width:"80%",src:"/docs/pagoda/webhook23.png"}),"\n",(0,o.jsx)(t.p,{children:"Select the suggested contract which should be dev account that was created."}),"\n",(0,o.jsx)("img",{width:"80%",src:"/docs/pagoda/webhook24.png"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"You can use any contract running on mainnet or testnet for an alert. We'll just use this NFT testnet example for this guide."})}),"\n",(0,o.jsx)(t.p,{children:'Under "Select Condition" hit "Successful Transaction". This means that for any successful transaction an alert will be sent. In this case for any successful method call the lights will turn on. If you want to, you can select "function call" for a specific method to be the trigger.'}),"\n",(0,o.jsx)(t.p,{children:"But for now, we'll keep it easy and select any Successful Action."}),"\n",(0,o.jsx)("img",{width:"60%",src:"/docs/pagoda/webhook25.png"}),"\n",(0,o.jsx)(t.p,{children:'We\'re almost done! Under destination select webhooks. Now that webhook we created earlier go ahead and copy and paste it into here. Then hit "Create"'}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Don't forget to remove the ",(0,o.jsx)(t.code,{children:"{}"})," around the name of your event! ",(0,o.jsx)(t.code,{children:"ifttt.com/trigger/..."}),", not ",(0,o.jsx)(t.code,{children:"ifftt.com/{trigger}/..."})]})}),"\n",(0,o.jsx)("img",{width:"60%",src:"/docs/pagoda/webhook26.png"}),"\n",(0,o.jsx)(t.p,{children:'Remember to hit the "+ Create Alert" button on this page...'}),"\n",(0,o.jsx)("img",{width:"60%",src:"/docs/pagoda/webhook27.png"}),"\n",(0,o.jsx)(t.p,{children:'Now head on over to the "Contracts" Section.'}),"\n",(0,o.jsx)("img",{width:"60%",src:"/docs/pagoda/webhook28.png"}),"\n",(0,o.jsx)(t.p,{children:'Select the contract we just created and navigate to the "Interact" tab to connect your wallet.'}),"\n",(0,o.jsx)("img",{width:"60%",src:"/docs/pagoda/webhook29.png"}),"\n",(0,o.jsxs)(t.p,{children:["Now here is the part we've all been waiting for... ",(0,o.jsx)(t.strong,{children:"Turn on the (hue) lights!"})]}),"\n",(0,o.jsxs)(t.p,{children:["Select the ",(0,o.jsx)(t.code,{children:"new_default_metadata"})," function (we are choosing this one because we have to initialize our contract, this is still a transaction which will trigger our new webhook). Fill in the ",(0,o.jsx)(t.code,{children:"owner_id"})," field with your wallet account name and hit send transaction"]}),"\n",(0,o.jsx)("img",{width:"60%",src:"/docs/pagoda/webhook30.png"}),"\n",(0,o.jsx)(t.h2,{id:"wrapping-up",children:"Wrapping up"}),"\n",(0,o.jsx)(t.p,{children:"And that's it! You've just triggered something in the real world with an event that happened on the NEAR Blockchain. Hopefully this inspires you to create your own webhook using IFTTT and the Pagoda Console."}),"\n",(0,o.jsxs)(t.p,{children:["We'd love to see what you create! Tag ",(0,o.jsx)(t.a,{href:"https://twitter.com/PagodaPlatform",children:"@PagodaPlatform"})," on Twitter with a novel implementation of a webhhook and trigger and we might retweet it."]}),"\n",(0,o.jsx)(t.p,{children:"Happy hacking!"})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(67294);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);