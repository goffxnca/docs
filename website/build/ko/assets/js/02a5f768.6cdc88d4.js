"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4815],{81270:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=r(85893),a=r(11151);const i={sidebar_label:"\uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c"},s="NEAR \uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c",c={id:"concepts/advanced/near-indexer-framework",title:"NEAR \uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c",description:"https://github.com/near/nearcore/tree/master/chain/indexer",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/1.concepts/3.advanced/near-indexer-framework.md",sourceDirName:"1.concepts/3.advanced",slug:"/concepts/advanced/near-indexer-framework",permalink:"/ko/concepts/advanced/near-indexer-framework",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/3.advanced/near-indexer-framework.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719220968e3,frontMatter:{sidebar_label:"\uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c"},sidebar:"concepts",previous:{title:"\uc778\ub371\uc11c \uc18c\uac1c",permalink:"/ko/concepts/advanced/indexers"},next:{title:"Lake \ud504\ub808\uc784\uc6cc\ud06c",permalink:"/ko/concepts/advanced/near-lake-framework"}},d={},o=[{value:"\uc124\uba85",id:"\uc124\uba85",level:2},{value:"\uadfc\uac70",id:"\uadfc\uac70",level:2},{value:"\ud55c\uacc4",id:"\ud55c\uacc4",level:2},{value:"\ud604\uc7ac \uc0c1\ud0dc",id:"\ud604\uc7ac-\uc0c1\ud0dc",level:2},{value:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158",id:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"near-\uc778\ub371\uc11c-\ud504\ub808\uc784\uc6cc\ud06c",children:"NEAR \uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c"}),"\n",(0,t.jsx)(n.admonition,{title:"GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac",type:"note",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/near/nearcore/tree/master/chain/indexer",children:"https://github.com/near/nearcore/tree/master/chain/indexer"})})}),"\n",(0,t.jsx)(n.admonition,{title:"NEAR LAKE \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ucc3e\uace0 \uc788\ub294 \uac74 \uc544\ub2cc\uc9c0 \ud655\uc778\ud574\ubcf4\uc138\uc694.",type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/ko/concepts/advanced/near-lake-framework",children:"NEAR Lake \ud504\ub808\uc784\uc6cc\ud06c"}),"\ub294 NEAR \uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c\uc758 \uacbd\ub7c9 \ub300\uc548\uc73c\ub85c, \uc911\uc559\ud654\uac00 \ud5c8\uc6a9\ub420 \ub54c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uad8c\uc7a5\ub429\ub2c8\ub2e4."]})}),"\n",(0,t.jsx)(n.h2,{id:"\uc124\uba85",children:"\uc124\uba85"}),"\n",(0,t.jsxs)(n.p,{children:["NEAR \uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c\ub294 ",(0,t.jsx)(n.a,{href:"https://github.com/near/nearcore",children:"nearcore"}),"\ub97c \ub0b4\uc7a5\ud558\uace0 NEAR \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uc0dd\uc131\ub41c \uac01 \ube14\ub85d\uacfc \uad00\ub828\ub41c \ubaa8\ub4e0 \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\ub294 \ubaa8\ub4e0 \ubcf5\uc7a1\uc131\uc744 \ucd94\uc0c1\ud654\ud558\ub294 Rust \ud328\ud0a4\uc9c0(\ud06c\ub808\uc774\ud2b8)\uc785\ub2c8\ub2e4. \ud06c\ub808\uc774\ud2b8 \uc774\ub984\uc740 ",(0,t.jsx)(n.a,{href:"https://github.com/near/nearcore/tree/master/chain/indexer",children:(0,t.jsx)(n.code,{children:"near-indexer"})}),"\uc774\uace0, \uc774\ub294 ",(0,t.jsx)(n.a,{href:"https://github.com/near/nearcore",children:"nearcore \ub808\ud37c\uc9c0\ud1a0\ub9ac"}),"\uc758 \uc77c\ubd80\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"near-indexer"}),'\ub294 NEAR \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uae30\ub85d\ub41c \ube14\ub85d \uc2a4\ud2b8\ub9bc\uc744 \uc81c\uacf5\ud558\ub294 \ub9c8\uc774\ud06c\ub85c \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4. \uc774\ub294 \uccb4\uc778\uc5d0\uc11c \uc2e4\uc2dc\uac04 "\uc774\ubca4\ud2b8"\ub97c \ucc98\ub9ac\ud558\ub294 \ub370\uc5d0 \uc720\uc6a9\ud569\ub2c8\ub2e4.']}),"\n",(0,t.jsx)(n.h2,{id:"\uadfc\uac70",children:"\uadfc\uac70"}),"\n",(0,t.jsx)(n.p,{children:"\uc2a4\ucf00\uc77c\ub9c1 dApp\uc774 NEAR\uc758 \uba54\uc778\ub137\uc5d0 \uc9c4\uc785\ud568\uc5d0 \ub530\ub77c, \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubc30\ud3ec\ub41c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc0c1\ud0dc\uc5d0 \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uc561\uc138\uc2a4\ud558\uace0, \ubc29\ud574\ubb3c\uc744 \uc81c\uac70\ud558\ub294 \ubc29\ubc95\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694? \ucee8\ud2b8\ub799\ud2b8\ub294 \ubcf5\uc7a1\ud55c \ub370\uc774\ud130 \uad6c\uc870\ub97c \uac16\ub3c4\ub85d \uc131\uc7a5\ud560 \uc218 \uc788\uc73c\uba70, \ub124\ud2b8\uc6cc\ud06c RPC\ub97c \ucffc\ub9ac\ud558\ub294 \uac83\uc740 \uc0c1\ud0dc \ub370\uc774\ud130\uc5d0 \uc561\uc138\uc2a4\ud558\ub294 \ucd5c\uc801\uc758 \ubc29\ubc95\uc774 \uc544\ub2d0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. NEAR \uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc0ac\uc6a9\ud558\uba74 \uc0ac\uc6a9\uc790\uac00 \uc9c0\uc815\ud55c \ubc29\uc2dd\uc73c\ub85c \uc2a4\ud2b8\ub9bc\uc744 \ucea1\ucc98\ud558\uace0 \uc778\ub371\uc2f1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc778 \uc0ac\uc6a9 \uc0ac\ub840 \uc911 \ud558\ub098\ub294 \uc774 \ub370\uc774\ud130\uac00 \uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub85c \uac00\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub294 \ud504\ub85c\uc81d\ud2b8\ubcc4\ub85c \ub9de\ucda4\ud654\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c, \uc774 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc0ac\uc6a9\ud558\ub294 \ub370 \uad00\ub828\ub41c \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1 \uc791\uc5c5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\ud55c\uacc4",children:"\ud55c\uacc4"}),"\n",(0,t.jsx)(n.p,{children:"NEAR \uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c\ub294 \uc804\uccb4 NEAR \ub178\ub4dc\ub97c \ud3ec\ud568\ud558\ubbc0\ub85c, P2P \ub124\ud2b8\uc6cc\ud06c\uc640 \ub3d9\uae30\ud654\ud558\uace0 \ubaa8\ub4e0 \ub124\ud2b8\uc6cc\ud06c \ub370\uc774\ud130\ub97c \ub85c\uceec\uc5d0 \uc800\uc7a5\ud574\uc57c \ud558\uba70 \uc774\uc5d0 \ub530\ub978 \uc2a4\ud1a0\ub9ac\uc9c0 \uc694\uad6c \uc0ac\ud56d\uc774 \uc801\uc6a9\ub429\ub2c8\ub2e4. \ucd94\ucd9c\ub9cc \ud544\uc694\ud55c \uacbd\uc6b0 SSD\uc5d0 \uc218\ubc31 GB\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. ~2.5\uc77c \uc774\ud558\uc758 \ub370\uc774\ud130, \uadf8\ub9ac\uace0 \ub124\ud2b8\uc6cc\ud06c\uc758 \uc804\uccb4 \uae30\ub85d\uc744 \uac80\ud1a0\ud558\ub824\ub294 \uacbd\uc6b0 \uc218\ucc9c GB\uc758 SSD \uc6a9\ub7c9\uc774 \ud544\uc694\ud558\uc8e0. \ub610\ud55c \ub124\ud2b8\uc6cc\ud06c \ub3d9\uae30\ud654 \ud504\ub85c\uc138\uc2a4\ub294 \ub9e4\uc6b0 \ub290\ub9b0 \uac83\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4(\ube14\ub85d \uc0dd\uc131\uc740 \ucd08\ub2f9 1 \ube14\ub85d\uc774\uc9c0\ub9cc \ube14\ub85d \ub3d9\uae30\ud654\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \ucd08\ub2f9 2 \ube14\ub85d\uc5d0 \ub3c4\ub2ec\ud558\ubbc0\ub85c \ub77c\uc774\ube0c \ub124\ud2b8\uc6cc\ud06c\ub97c \ube60\ub978 \uc18d\ub3c4\ub85c \ub530\ub77c \uc7a1\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub178\ub4dc\uac00 \ud55c \uc2dc\uac04 \ub3d9\uc548 \uc624\ud504\ub77c\uc778 \uc0c1\ud0dc\uc600\ub2e4\uba74 \uc0c8\ub85c \uc0dd\uc131\ub41c \ube14\ub85d\uc744 \uacc4\uc18d \uac00\uc838\uc624\ub294 \ub124\ud2b8\uc6cc\ud06c \ub05d\uc744 \ub530\ub77c\uc7a1\ub294 \ub370 \ud55c \uc2dc\uac04\uc774 \uac78\ub9bd\ub2c8\ub2e4.)."}),"\n",(0,t.jsx)(n.p,{children:"NEAR \uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c\ub294 \uc644\ub8cc\ub41c \ube14\ub85d\ub9cc \ub178\ucd9c\ud569\ub2c8\ub2e4. NEAR \ud504\ub85c\ud1a0\ucf5c\uc5d0\uc11c\ub294 \ube14\ub85d\uc744 \uc644\ub8cc\ud558\ub294 \ub370 3\uac1c\uc758 \uc5f0\uc18d\ub41c \ube14\ub85d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc989, \uc774\ub294 \uc77c\ubd80 \ud2b8\ub79c\uc7ad\uc158\uc774 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ub3c4\ub2ec\ud558\ub294 \uc2dc\uac04\uacfc NEAR \uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c \uc644\ub8cc\ub418\uace0 \uc2a4\ud2b8\ub9ac\ubc0d\ub418\ub294 \uc2dc\uac04 \uc0ac\uc774\uc5d0 \ucd5c\uc18c 3\ucd08\uc758 \uc9c0\uc5f0\uc774 \uc788\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. If we measure the delay between the moment when a transaction gets submitted from the client device to the moment Indexer Framework-based indexers would receive it, we can see the following timings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\uc778\ud130\ub137\uc744 \ud1b5\ud574 NEAR \ub178\ub4dc\ub85c \uc804\uc1a1\ub418\ub294 \uc9c1\ub82c\ud654\ub41c \ud2b8\ub79c\uc7ad\uc158(\uac00\uc7a5 \uc77c\ubc18\uc801\uc73c\ub85c ",(0,t.jsx)(n.a,{href:"https://docs.near.org/api/rpc/transactions#send-transaction-await",children:"NEAR JSON RPC broadcast_tx_commit"}),"\uc744 \ud1b5\ud574)\uc740 \uc57d 50ms(\ub300\ubd80\ubd84 TCP \ud578\ub4dc\uc170\uc774\ud06c + HTTPS \ud578\ub4dc\uc170\uc774\ud06c\uc758 \ub124\ud2b8\uc6cc\ud06c \ub300\uae30 \uc2dc\uac04\uc774\ubbc0\ub85c \uc815\ud655\ud558\uac8c \uce21\uc815\ub418\uc9c0 \uc54a\uc74c)\uac00 \uc18c\uc694\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:["\ud2b8\ub79c\uc7ad\uc158\uc740 ",(0,t.jsx)(n.a,{href:"https://near-nodes.io/intro/what-is-a-node",children:"\ubc38\ub9ac\ub370\uc774\ud130 \ub178\ub4dc"}),"\ub85c \ub77c\uc6b0\ud305\ub418\uc5b4, \uc57d 50ms(\ub300\ubd80\ubd84 \ud53c\uc5b4 \ub178\ub4dc \uac04\uc758 \ub124\ud2b8\uc6cc\ud06c \ub300\uae30 \uc2dc\uac04)\uac00 \uc18c\uc694\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.li,{children:"\ud2b8\ub79c\uc7ad\uc158\uc740 \ubc38\ub9ac\ub370\uc774\ud130 \ub178\ub4dc\uc758 mempool\uc5d0 \ub3c4\ucc29\ud558\uace0 \ucd5c\uc18c\ud55c \ub2e4\uc74c \uccad\ud06c/\ube14\ub85d\uc774 \uc0dd\uc131\ub420 \ub54c\uae4c\uc9c0 \uc9c0\uc5f0\ub418\ubbc0\ub85c, \ud604\uc7ac \ube14\ub85d\uc5d0 \ub300\ud55c \ud2b8\ub79c\uc7ad\uc158\uc774 \uc120\ud0dd\ub41c \uc21c\uac04\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc218\uc2e0\ub41c \uacbd\uc6b0 \ub2e4\uc74c \ube14\ub85d \uc0dd\uc131\uc744 \uc704\ud574 \uba54\uc778\ub137\uc5d0\uc11c 1.2\ucd08\uac00 \uc18c\uc694\ub429\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.li,{children:["\ud2b8\ub79c\uc7ad\uc158\uc774 \ube14\ub85d\uc5d0 \ud3ec\ud568\ub418\uba74 \ub2e4\uc74c \ube14\ub85d\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 Receipt\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4(\ub610 \ub2e4\ub978 1.2\ucd08 \uc9c0\uc5f0). ",(0,t.jsx)(n.a,{href:"/ko/concepts/data-flow/near-data-flow",children:"\uc5ec\uae30"}),"\uc5d0\uc11c NEAR \ud504\ub85c\ud1a0\ucf5c \ub370\uc774\ud130 \ud750\ub984\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694."]}),"\n",(0,t.jsx)(n.li,{children:"\ube14\ub85d \uc644\ub8cc\uc5d0 3\ube14\ub85d(1.2\ucd08 * 3)\uc774 \uac78\ub9b0\ub2e4\ub294 \uc810\uc744 \uac10\uc548\ud560 \ub54c \uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c\ub294 3.6\ucd08 \ud6c4\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc774 \ud3ec\ud568\ub41c \ube14\ub85d\uc5d0 \ub300\ud55c \uc815\ubcf4 \uc218\uc9d1\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc0dd\uc131\ub41c \ube14\ub85d\uc774 \uac80\uc99d \ub178\ub4dc\uc5d0\uc11c \uc77c\ubc18 \ub178\ub4dc\ub85c \ub2e4\uc2dc \uc804\ud30c\ub420 \ub54c \ub124\ud2b8\uc6cc\ud06c \ub300\uae30 \uc2dc\uac04\uc5d0 \uc758\ud55c \ucd5c\uc18c 50ms\uc758 \uc9c0\uc5f0 \uc2dc\uac04\ub3c4 \ud3ec\ud568\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\uadf8\ub7f0 \ub2e4\uc74c \uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c\ub294 \uc0dd\uc131\ub41c \ube14\ub85d\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uace0 \uc2a4\ud2b8\ub9ac\ubc0d\ud569\ub2c8\ub2e4. \uc57d 50-100ms\uac00 \uc18c\uc694\ub429\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc778\ub371\uc11c \uad6c\ud604\uc740 \ube14\ub85d\uc744 \uc218\uc2e0\ud558\ub294\ub370\uc5d0 \ucd94\uac00 \uc9c0\uc5f0 \uc2dc\uac04\uc774 \uc874\uc7ac\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc, \uc5ec\uae30\uc11c\ub294 \ubc94\uc704\ub97c \ubc97\uc5b4\ub0a9\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Ultimately, it takes at least 3.8 seconds from the moment one submits a transaction to the network, and Indexer Framework-based indexers pick it up, where the finalization time contributes the most of the delay. \uc2e4\uc81c \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c dApp\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \uc2e4\ud589 \uacb0\uacfc\ub97c \uc54c\uc544\uc57c \ud558\ubbc0\ub85c \ud2b8\ub79c\uc7ad\uc158\uc774 \ud3ec\ud568\ub41c \ud6c4 \ubaa8\ub4e0 Receipt\ub97c \uc2e4\ud589\ud558\ub824\uba74 \uba87 \ube14\ub85d\uc774 \uac78\ub9bd\ub2c8\ub2e4(\ub370\uc774\ud130 \ud750\ub984\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,t.jsx)(n.a,{href:"/ko/concepts/data-flow/near-data-flow",children:"\uc5ec\uae30"})," \ucc38\uc870). \ud2b8\ub79c\uc7ad\uc158 \uc81c\ucd9c \ubc0f \uc778\ub371\uc11c\uc5d0\uc11c \uad00\ucc30\ub418\ub294 \uacb0\uacfc\ub294 5-7\ucd08\uac00 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h2,{id:"\ud604\uc7ac-\uc0c1\ud0dc",children:"\ud604\uc7ac \uc0c1\ud0dc"}),"\n",(0,t.jsx)(n.p,{children:"\uc778\ub371\uc11c \ud504\ub808\uc784\uc6cc\ud06c\ub294 \ubd84\uc0b0\ud615 NEAR \ud504\ub85c\ud1a0\ucf5c \ud53c\uc5b4 \ud22c \ud53c\uc5b4 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uc791\ub3d9\ud558\ub294, \uc644\uacb0\ub41c NEAR \ud504\ub85c\ud1a0\ucf5c \ube14\ub85d\uc758 \uc2a4\ud2b8\ub9bc\uc744 \uc5bb\ub294 \uac00\uc7a5 \ube60\ub974\uace0 \uac04\ub2e8\ud55c \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.p,{children:["\uadf8\ub7ec\ub098 \uc778\ub371\uc11c \uc0dd\ud0dc\uacc4\uc5d0 \ub300\ud55c \uc2e4\ud5d8\uc5d0\uc11c \uc6b0\ub9ac\ub294 \uc644\uc804\ud55c ",(0,t.jsx)(n.a,{href:"https://github.com/near/nearcore",children:"nearcore"})," \ub178\ub4dc\ub97c \uc720\uc9c0\ud558\ub294 \ub300\uc2e0 \ub9c8\uc774\ud06c\ub85c \uc778\ub371\uc11c\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud55c \uacbd\ub7c9 \ubc84\uc804\uc774 \ud544\uc694\ud558\ub2e4\ub294 \uac83\uc744 \uae68\ub2ec\uc558\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uc774\ubca4\ud2b8\ub97c \uc804\ub2ec\ud558\uae30 \uc704\ud574 \ub2e4\uc591\ud55c \uc194\ub8e8\uc158(Kafka, RabbitMQ \ub4f1)\uc744 \uace0\ub824\ud588\uc9c0\ub9cc \uacb0\uad6d \ubaa8\ub4e0 \ube14\ub85d\uc744 AWS S3 \ubc84\ud0b7\uc5d0 \ub364\ud504\ud558\uae30\ub85c \uacb0\uc815\ud588\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c NEAR Lake \uc0dd\ud0dc\uacc4\uac00 \ud0c4\uc0dd\ud588\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(n.a,{href:"/ko/concepts/advanced/near-lake-framework",children:"\uc5ec\uae30"}),"\uc5d0\uc11c \uc790\uc138\ud55c \ub0b4\uc6a9\uc744 \uc54c\uc544 \ubcf4\uc138\uc694."]}),"\n",(0,t.jsxs)(n.p,{children:["\uc694\uc998 \uc6b0\ub9ac\ub294 ",(0,t.jsx)(n.a,{href:"/ko/concepts/advanced/near-lake-framework",children:"NEAR Lake \uc778\ub371\uc11c"}),"\ub97c \uad6c\ud604\ud558\uae30 \uc704\ud574 NEAR Indexer Framework\ub97c \uc0ac\uc6a9\ud558\uace0 \uac70\uae30\uc5d0\uc11c ",(0,t.jsx)(n.a,{href:"https://github.com/near/near-lake-indexer",children:"NEAR Lake \ud504\ub808\uc784\uc6cc\ud06c"}),"\ub97c \uae30\ubc18\uc73c\ub85c \ub9c8\uc774\ud06c\ub85c \uc778\ub371\uc11c\ub97c \uad6c\ucd95 \ud569\ub2c8\ub2e4. Having said that, Indexer Framework plays a crucial role in the ecosystem even though most of the indexers these days are implemented without using it directly."]}),"\n",(0,t.jsx)(n.h2,{id:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158",children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158"}),"\n",(0,t.jsxs)(n.p,{children:["\uc790\uc138\ud55c \uae30\uc220 \uc815\ubcf4\ub294 ",(0,t.jsx)(n.a,{href:"https://github.com/nearprotocol/nearcore/tree/master/tools/indexer/example",children:"\uc608\uc81c"}),"\ub97c \ucc38\uace0\ud558\uc138\uc694."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/near-examples/indexer-tx-watcher-example",children:(0,t.jsx)(n.code,{children:"near-examples/indexer-tx-watcher-example"})}),"\ub294 \uc9c0\uc815\ub41c \uacc4\uc815/\ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \ud2b8\ub79c\uc7ad\uc158\uc744 \uac10\uc2dc\ud558\ub294 NEAR \uc778\ub371\uc11c \uc608\uc81c\uc785\ub2c8\ub2e4."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var t=r(67294);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);