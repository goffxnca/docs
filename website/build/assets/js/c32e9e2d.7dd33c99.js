"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48219],{45713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(85893),s=n(11151);const r={},i=void 0,a={id:"primitives/dao/bos/get-proposal-list",title:"get-proposal-list",description:"Example response",source:"@site/../docs/7.primitives/dao/bos/get-proposal-list.md",sourceDirName:"7.primitives/dao/bos",slug:"/primitives/dao/bos/get-proposal-list",permalink:"/primitives/dao/bos/get-proposal-list",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dao/bos/get-proposal-list.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1706635251e3,frontMatter:{}},p={},c=[];function d(e){const t={code:"code",pre:"pre",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const result = Near.view(\n  "nearweek-news-contribution.sputnik-dao.near",\n  "get_proposals",\n  { from_index: 9262, limit: 2 }\n);\n'})}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Example response"}),(0,o.jsx)("p",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"[\n  {\n    id: 9262,\n    proposer: 'pasternag.near',\n    description: 'NEAR, a top non-EVM blockchain, has gone live on Router\u2019s Testnet Mandara. With Router Nitro, our flagship dApp, users in the NEAR ecosystem can now transfer test tokens to and from NEAR onto other supported chains. $$$$https://twitter.com/routerprotocol/status/1727732303491961232',\n    kind: {\n      Transfer: {\n        token_id: '',\n        receiver_id: 'pasternag.near',\n        amount: '500000000000000000000000',\n        msg: null\n      }\n    },\n    status: 'Approved',\n    vote_counts: { council: [ 1, 0, 0 ] },\n    votes: { 'brzk-93444.near': 'Approve' },\n    submission_time: '1700828277659425683'\n  },\n  {\n    id: 9263,\n    proposer: 'fittedn.near',\n    description: 'How to deploy BOS component$$$$https://twitter.com/BitkubAcademy/status/1728003163318563025?t=PiN6pwS380T1N4JuQXSONA&s=19',\n    kind: {\n      Transfer: {\n        token_id: '',\n        receiver_id: 'fittedn.near',\n        amount: '500000000000000000000000',\n        msg: null\n      }\n    },\n    status: 'InProgress',\n    vote_counts: { 'Whitelisted Members': [ 1, 0, 0 ] },\n    votes: { 'trendheo.near': 'Approve' },\n    submission_time: '1700832601849419123'\n  }\n]\n"})})})]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(67294);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);