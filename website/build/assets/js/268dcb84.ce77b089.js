"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1743],{96033:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var s=r(85893),t=r(11151),a=r(74866),c=r(85162);const l={id:"block-chunk",title:"Block / Chunk"},d=void 0,i={id:"api/rpc/block-chunk",title:"Block / Chunk",description:"The RPC API enables you to query the network and get details about specific blocks or chunks.",source:"@site/../docs/5.api/rpc/block-chunk.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/block-chunk",permalink:"/api/rpc/block-chunk",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/block-chunk.md",tags:[],version:"current",lastUpdatedBy:"matiasbenary",lastUpdatedAt:1720020198e3,frontMatter:{id:"block-chunk",title:"Block / Chunk"},sidebar:"api",previous:{title:"Accounts / Contracts",permalink:"/api/rpc/contracts"},next:{title:"Gas",permalink:"/api/rpc/gas"}},o={},h=[{value:"Block details",id:"block-details",level:2},{value:"What Could Go Wrong??",id:"what-could-go-wrong",level:4},{value:"Changes in Block",id:"changes-in-block",level:2},{value:"What Could Go Wrong??",id:"what-could-go-wrong-1",level:4},{value:"Chunk Details",id:"chunk-details",level:2},{value:"What Could Go Wrong??",id:"what-could-go-wrong-2",level:4}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The RPC API enables you to query the network and get details about specific blocks or chunks."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"block-details",children:"Block details"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Queries network and returns block for given height or hash. You can also use ",(0,s.jsx)(n.code,{children:"finality"})," param to return latest block details."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": You may choose to search by a specific block ",(0,s.jsx)(n.em,{children:"or"})," finality, you can not choose both."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["method: ",(0,s.jsx)(n.code,{children:"block"})]}),"\n",(0,s.jsxs)(n.li,{children:["params:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/api/rpc/setup#using-finality-param",children:(0,s.jsx)(n.code,{children:"finality"})})," ",(0,s.jsx)(n.em,{children:"OR"})," ",(0,s.jsx)(n.a,{href:"/api/rpc/setup#using-block_id-param",children:(0,s.jsx)(n.code,{children:"block_id"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"finality"})," example:"]}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c.Z,{value:"json",label:"JSON",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "block",\n  "params": {\n    "finality": "final"\n  }\n}\n'})})}),(0,s.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const response = await near.connection.provider.block({\n  finality: "final",\n});\n'})})}),(0,s.jsx)(c.Z,{value:"http",label:"HTTPie",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=block \\\n  params:=\'{\n    "finality": "final"\n  }\'\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"[block_id]"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c.Z,{value:"json",label:"JSON",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "block",\n  "params": {\n    "block_id": 17821130\n  }\n}\n'})})}),(0,s.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const response = await near.connection.provider.block({blockId: 17821130});\n"})})}),(0,s.jsx)(c.Z,{value:"http",label:"HTTPie",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=block \\\n  params:='{\n    \"block_id\": 17821130\n  }'\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"[block_hash]"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c.Z,{value:"json",label:"JSON",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "block",\n  "params": {\n    "block_id": "7nsuuitwS7xcdGnD9JgrE22cRB2vf2VS4yh1N9S71F4d"\n  }\n}\n'})})}),(0,s.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const response = await near.connection.provider.block(\n  {blockId: "7nsuuitwS7xcdGnD9JgrE22cRB2vf2VS4yh1N9S71F4d"}\n);\n'})})}),(0,s.jsx)(c.Z,{value:"http",label:"HTTPie",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=block \\\n  params:=\'{\n    "block_id": "7nsuuitwS7xcdGnD9JgrE22cRB2vf2VS4yh1N9S71F4d"\n  }\'\n'})})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Example response:"}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "author": "bitcat.pool.f863973.m0",\n    "header": {\n      "height": 17821130,\n      "epoch_id": "7Wr3GFJkYeCxjVGz3gDaxvAMUzXuzG8MjFXTFoAXB6ZZ",\n      "next_epoch_id": "A5AdnxEn7mfHieQ5fRxx9AagCkHNJz6wr61ppEXiWvvh",\n      "hash": "CLo31YCUhzz8ZPtS5vXLFskyZgHV5qWgXinBQHgu9Pyd",\n      "prev_hash": "2yUTTubrv1gJhTUVnHXh66JG3qxStBqySoN6wzRzgdVD",\n      "prev_state_root": "5rSz37fySS8XkVgEy3FAZwUncX4X1thcSpuvCgA6xmec",\n      "chunk_receipts_root": "9ETNjrt6MkwTgSVMMbpukfxRshSD1avBUUa4R4NuqwHv",\n      "chunk_headers_root": "HMpEoBhPvThWZvppLwrXQSSfumVdaDW7WfZoCAPtjPfo",\n      "chunk_tx_root": "7tkzFg8RHBmMw1ncRJZCCZAizgq4rwCftTKYLce8RU8t",\n      "outcome_root": "7tkzFg8RHBmMw1ncRJZCCZAizgq4rwCftTKYLce8RU8t",\n      "chunks_included": 1,\n      "challenges_root": "11111111111111111111111111111111",\n      "timestamp": 1601280114229875635,\n      "timestamp_nanosec": "1601280114229875635",\n      "random_value": "ACdUSF3nehbMTwT7qjUB6Mm4Ynck5TVAWbNH3DR1cjQ7",\n      "validator_proposals": [],\n      "chunk_mask": [true],\n      "gas_price": "100000000",\n      "rent_paid": "0",\n      "validator_reward": "0",\n      "total_supply": "1042339182040791154864822502764857",\n      "challenges_result": [],\n      "last_final_block": "AaxTqjYND5WAKbV2UZaFed6DH1DShN9fEemtnpTsv3eR",\n      "last_ds_final_block": "2yUTTubrv1gJhTUVnHXh66JG3qxStBqySoN6wzRzgdVD",\n      "next_bp_hash": "3ZNEoFYh2CQeJ9dc1pLBeUd1HWG8657j2c1v72ENE45Q",\n      "block_merkle_root": "H3912Nkw6rtamfjsjmafe2uV2p1XmUKDou5ywgxb1gJr",\n      "approvals": [\n        "ed25519:4hNtc9vLhn2PQhktWtLKJV9g8SBfpm6NBT1w4syNFqoKE7ZMts2WwKA9x1ZUSBGVKYCuDGEqogLvwCF25G7e1UR3",\n        "ed25519:2UNmbTqysMMevVPqJEKSq57hkcxVFcAMdGq7CFhpW65yBKFxYwpoziiWsAtARusLn9Sy1eXM7DkGTXwAqFiSooS6",\n        "ed25519:4sumGoW9dnQCsJRpzkd4FQ5NSJypGQRCppWp7eQ9tpsEcJXjHZN8GVTCyeEk19WmbbMEJ5KBNypryyHzaH2gBxd4",\n        "ed25519:3fP2dri6GjYkmHgEqQWWP9GcoQEgakbaUtfr3391tXtYBgxmiJUEymRe54m7D8bQrSJ3LhKD8gTFT7qqdemRnizR",\n        "ed25519:3mwdqSWNm6RiuZAoZhD6pqsirC2cL48nEZAGoKixpqbrsBpAzqV3W2paH4KtQQ4JPLvk5pnzojaint2kNBCcUyq1",\n        "ed25519:D4hMnxqLyQW4Wo29MRNMej887GH46yJXDKNN4es8UDSi9shJ9Y4FcGqkxdV4AZhn1yUjwN5LwfgAgY6fyczk5L3",\n        null,\n        "ed25519:4WCVm4dn88VJxTkUgcvdS7vs34diBqtQY4XWMRctSN1NpbgdkwwVyxg7d2SbGC22SuED7w4nrToMhcpJXrkhkDmF",\n        "ed25519:JqtC7TFP7U14s7YhRKQEqwbc2RUxoctq75mrBdX91f7DuCWsPpe6ZTTnfHPmuJPjTzFHVZTsaQJWzwfSrrgNpnc",\n        "ed25519:ngGUpWc2SyHmMCkWGTNNNfvZAJQ5z7P92JCmDqB7JW3j8fNH6LobvFFXb2zVdssibJKgnjwBj8CRe6qiZtuYQZM",\n        "ed25519:5kzW6RbjukyJZiw9NTzTPPsQdoqN6EecafjVFEoWmTxQ4uSv1uSXhQYcHK2eq4m84oMmPABQDz2mm73Qx8mDdCQX",\n        "ed25519:5wHnuuxwJJiZ4bXNq5cESnr4YovFU2yaUcuHRDUw3DnLoxkqc15CsegoyUSQKEwtCZ4yETv8Z9QcD6Wr9zHV4AUk",\n        "ed25519:3F9XzWBxto31e8RAcBShAJBzJPgSJQsWbPXR38AfQnJn6AiveGz3JjebQm9Ye63BrnNA57QrPshwknxpzSrcNEZW",\n        "ed25519:2g5s4SKsHt9PMdekkDqVtwwtz14v4edhqdBX1MYA8tB6nDpj3vDCDCTy9pEU8dX31PoQe5ygnf88aTZukMBMK1Yt",\n        "ed25519:3Xz4jqhdyS3qs6xTmWdgjwt5gJraU5czMA89hPhmvbAN4aA7SUKL1HkevpmutRQqqxe7c7uCFeGiDHvDcxhhmD8W",\n        null,\n        "ed25519:55xs3vwPEys39egf9Z8SNyn1JsHPRMgj9HCX1GE7GJsVTcAuutQUCo91E12ZdXkuToYRXb9KzoT8n9XQRCNuLpwY",\n        null,\n        "ed25519:28JrFw7KnhnQPN89qZnnw17KDBjS6CDN7zB1hTg7KGg8qQPoCzakz9DNnaSnx39ji7e2fQSpZt4cNJaD7K7Yu7yo",\n        "ed25519:41hAr5qhtvUYpdD2NK9qqTVnpG325ZoAiwrcmk1MJH7fdpxm7oSKXvXZqh7bTmPhv61hH2RpHnhcGuN4QqLzK2zt",\n        "ed25519:4QacMsQ5FJgvecAYDFq8QBh19BBjh4qU8oeD5bV7p6Zhhu3e6r2iSHTvDBU2Q62RZAaWQQkkEwDUC9rsXdkGVhAt",\n        "ed25519:27smtCZ3WobEvBuD5DggY6kkGxjB9qRVY6kPixgwqvBT1eKbRVoV8cLj1z51S8RTcp7YzAr1vhHJUHgksatR9Udz",\n        "ed25519:4wspCWoAbhYxb3th2eX6ZXvKep1Fsco7mFP5zBodXBR8Wr344ANXSUCri3gUgNCCSoQ2CKSdqDEsvE6Y2jQ9hmbB",\n        "ed25519:46XpYf9ZB9gjDfdnJLHqqhYJpQCuvCgB9tzKWS88GANMCb2j9BM3KXyjaEzynSsaPK8VrKFXQuTsTzgQSeo9cWGW",\n        null,\n        "ed25519:Y5ehsrhEpTRGjG6fHJHsEXj2NYPGMmKguiJHXP7TqsCWHBvNzaJbieR7UDp78hJ1ib7C18J5MB2kCzTXBCF9c3b",\n        "ed25519:3P9363Dc8Kqvgjt3TsNRncUrncCHid7aSRnuySjF4JYmQbApkAxomyMu8xm9Rgo3mj9rqXb16PM7Xjn7hKP6TyVr",\n        null,\n        null,\n        "ed25519:65ATjGsigZ3vMp7sGcp1c4ptxoqhHPkBeAaZ5GWJguVDLyrRLPJrtXhLGjH9DpXd7CZswjyMYq5aRtorLnmmJ7GW",\n        null,\n        "ed25519:5SvqSViXbtsLoFMdtCufyyDgZnrEK7LheFi38X5M2ic17gfV5cz37r85RyixjUv98MbAmgVdmkxVFDGfSbeoHW7X",\n        null,\n        null,\n        "ed25519:2n3fQiBEiDKkB84biXWyQmvnupKX7B8faugY37jVi8hVXuWLggJmaEjqub511RCYwFnwW1RBxYpuJQ455KaniCd4",\n        "ed25519:2K9xKFLJ2fW74tddXtghFGFurKWomAqaJmkKYVZKHQT6zHe5wNSYT3vzMotLQcez5JD1Ta57N9zQ4H1RysB2s5DZ",\n        null,\n        null,\n        "ed25519:3qeCRtcLAqLtQ2YSQLcHDa26ykKX1BvAhP9jshLLYapxSEGGgZJY8sU72p9E78AkXwHP3X2Eq74jvts7gTRzNgMg",\n        null,\n        "ed25519:2czSQCF8wBDomEeSdDRH4gFoyJrp2ppZqR6JDaDGoYpaFkpWxZf2oGDkKfQLZMbfvU6LXkQjJssVHcLCJRMzG8co"\n      ],\n      "signature": "ed25519:58sdWd6kxzhQdCGvHzxqvdtDLJzqspe74f3gytnqdxDLHf4eesXi7B3nYq2YaosCHZJYmcR4HPHKSoFm3WE4MbxT",\n      "latest_protocol_version": 35\n    },\n    "chunks": [\n      {\n        "chunk_hash": "EBM2qg5cGr47EjMPtH88uvmXHDHqmWPzKaQadbWhdw22",\n        "prev_block_hash": "2yUTTubrv1gJhTUVnHXh66JG3qxStBqySoN6wzRzgdVD",\n        "outcome_root": "11111111111111111111111111111111",\n        "prev_state_root": "HqWDq3f5HJuWnsTfwZS6jdAUqDjGFSTvjhb846vV27dx",\n        "encoded_merkle_root": "9zYue7drR1rhfzEEoc4WUXzaYRnRNihvRoGt1BgK7Lkk",\n        "encoded_length": 8,\n        "height_created": 17821130,\n        "height_included": 17821130,\n        "shard_id": 0,\n        "gas_used": 0,\n        "gas_limit": 1000000000000000,\n        "rent_paid": "0",\n        "validator_reward": "0",\n        "balance_burnt": "0",\n        "outgoing_receipts_root": "H4Rd6SGeEBTbxkitsCdzfu9xL9HtZ2eHoPCQXUeZ6bW4",\n        "tx_root": "11111111111111111111111111111111",\n        "validator_proposals": [],\n        "signature": "ed25519:4iPgpYAcPztAvnRHjfpegN37Rd8dTJKCjSd1gKAPLDaLcHUySJHjexMSSfC5iJVy28vqF9VB4psz13x2nt92cbR7"\n      }\n    ]\n  },\n  "id": "dontcare"\n}\n'})})})]}),"\n",(0,s.jsx)(n.h4,{id:"what-could-go-wrong",children:"What Could Go Wrong??"}),"\n",(0,s.jsxs)(n.p,{children:["When API request fails, RPC server returns a structured error response with a limited number of well-defined error variants, so client code can exhaustively handle all the possible error cases. Our JSON-RPC errors follow ",(0,s.jsx)(n.a,{href:"https://github.com/joyent/node-verror",children:"verror"})," convention for structuring the error response:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Heads up"})}),"\n",(0,s.jsxs)(n.p,{children:["The fields ",(0,s.jsx)(n.code,{children:"code"}),", ",(0,s.jsx)(n.code,{children:"data"}),", and ",(0,s.jsx)(n.code,{children:"message"})," in the structure above are considered legacy ones and might be deprecated in the future. Please, don't rely on them."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Here is the exhaustive list of the error variants that can be returned by ",(0,s.jsx)(n.code,{children:"block"})," method:"]}),"\n",(0,s.jsxs)("table",{className:"custom-stripe",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsxs)(n.p,{children:["ERROR_TYPE",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("code",{children:"error.name"})]})}),(0,s.jsxs)("th",{children:["ERROR_CAUSE",(0,s.jsx)("br",{}),(0,s.jsx)("code",{children:"error.cause.name"})]}),(0,s.jsx)("th",{children:"Reason"}),(0,s.jsx)("th",{children:"Solution"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"HANDLER_ERROR"}),(0,s.jsx)("td",{children:"UNKNOWN_BLOCK"}),(0,s.jsx)("td",{children:"The requested block has not been produced yet or it has been garbage-collected (cleaned up to save space on the RPC node)"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Check that the requested block is legit"}),(0,s.jsxs)("li",{children:["If the block had been produced more than 5 epochs ago, try to send your request to ",(0,s.jsx)("a",{href:"https://near-nodes.io/intro/node-types#archival-node",target:"_blank",rel:"noopener noreferrer",children:"an archival node"})]})]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"NOT_SYNCED_YET"}),(0,s.jsx)("td",{children:"The node is still syncing and the requested block is not in the database yet"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Wait until the node finish syncing"}),(0,s.jsx)("li",{children:"Send a request to a different node which is synced"})]})})]}),(0,s.jsxs)("tr",{className:"stripe",children:[(0,s.jsx)("td",{children:"REQUEST_VALIDATION_ERROR"}),(0,s.jsx)("td",{children:"PARSE_ERROR"}),(0,s.jsx)("td",{children:"Passed arguments can't be parsed by JSON RPC server (missing arguments, wrong format, etc.)"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Check the arguments passed and pass the correct ones"}),(0,s.jsxs)("li",{children:["Check ",(0,s.jsx)("code",{children:"error.cause.info"})," for more details"]})]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"INTERNAL_ERROR"}),(0,s.jsx)("td",{children:"INTERNAL_ERROR"}),(0,s.jsx)("td",{children:"Something went wrong with the node itself or overloaded"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Try again later"}),(0,s.jsx)("li",{children:"Send a request to a different node"}),(0,s.jsxs)("li",{children:["Check ",(0,s.jsx)("code",{children:"error.cause.info"})," for more details"]})]})})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"changes-in-block",children:"Changes in Block"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Returns changes in block for given block height or hash. You can also use ",(0,s.jsx)(n.code,{children:"finality"})," param to return latest block details."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": You may choose to search by a specific block ",(0,s.jsx)(n.em,{children:"or"})," finality, you can not choose both."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["method: ",(0,s.jsx)(n.code,{children:"EXPERIMENTAL_changes_in_block"})]}),"\n",(0,s.jsxs)(n.li,{children:["params:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/api/rpc/setup#using-finality-param",children:(0,s.jsx)(n.code,{children:"finality"})})," ",(0,s.jsx)(n.em,{children:"OR"})," ",(0,s.jsx)(n.a,{href:"/api/rpc/setup#using-block_id-param",children:(0,s.jsx)(n.code,{children:"block_id"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"finality"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c.Z,{value:"json",label:"JSON",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_changes_in_block",\n  "params": {\n    "finality": "final"\n  }\n}\n'})})}),(0,s.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const response = await near.connection.provider.experimental_changes_in_block({\n  finality: "final",\n});\n'})})}),(0,s.jsx)(c.Z,{value:"http",label:"HTTPie",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_changes_in_block \\\n  params:=\'{\n    "finality": "final"\n  }\'\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"[block_id]"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c.Z,{value:"json",label:"JSON",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_changes_in_block",\n  "params": {\n    "block_id": 17821135\n  }\n}\n'})})}),(0,s.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const response = await near.connection.provider.experimental_changes_in_block(\n  17821135\n);\n"})})}),(0,s.jsx)(c.Z,{value:"http",label:"HTTPie",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_changes_in_block \\\n  params:='{\n    \"block_id\": 17821135\n  }'\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"block_hash"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c.Z,{value:"json",label:"JSON",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_changes_in_block",\n  "params": {\n    "block_id": "81k9ked5s34zh13EjJt26mxw5npa485SY4UNoPi6yYLo"\n  }\n}\n'})})}),(0,s.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const response = await near.connection.provider.experimental_changes_in_block(\n  "81k9ked5s34zh13EjJt26mxw5npa485SY4UNoPi6yYLo"\n);\n'})})}),(0,s.jsx)(c.Z,{value:"http",label:"HTTPie",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_changes_in_block \\\n  params:=\'{\n    "block_id": "81k9ked5s34zh13EjJt26mxw5npa485SY4UNoPi6yYLo"\n  }\'\n'})})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Example response: "}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "block_hash": "81k9ked5s34zh13EjJt26mxw5npa485SY4UNoPi6yYLo",\n    "changes": [\n      {\n        "type": "account_touched",\n        "account_id": "lee.testnet"\n      },\n      {\n        "type": "contract_code_touched",\n        "account_id": "lee.testnet"\n      },\n      {\n        "type": "access_key_touched",\n        "account_id": "lee.testnet"\n      }\n    ]\n  },\n  "id": "dontcare"\n}\n'})})})]}),"\n",(0,s.jsx)(n.h4,{id:"what-could-go-wrong-1",children:"What Could Go Wrong??"}),"\n",(0,s.jsxs)(n.p,{children:["When API request fails, RPC server returns a structured error response with a limited number of well-defined error variants, so client code can exhaustively handle all the possible error cases. Our JSON-RPC errors follow ",(0,s.jsx)(n.a,{href:"https://github.com/joyent/node-verror",children:"verror"})," convention for structuring the error response:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Heads up"})}),"\n",(0,s.jsxs)(n.p,{children:["The fields ",(0,s.jsx)(n.code,{children:"code"}),", ",(0,s.jsx)(n.code,{children:"data"}),", and ",(0,s.jsx)(n.code,{children:"message"})," in the structure above are considered legacy ones and might be deprecated in the future. Please, don't rely on them."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Here is the exhaustive list of the error variants that can be returned by ",(0,s.jsx)(n.code,{children:"EXPERIMENTAL_changes_in_block"})," method:"]}),"\n",(0,s.jsxs)("table",{className:"custom-stripe",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsxs)(n.p,{children:["ERROR_TYPE",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("code",{children:"error.name"})]})}),(0,s.jsxs)("th",{children:["ERROR_CAUSE",(0,s.jsx)("br",{}),(0,s.jsx)("code",{children:"error.cause.name"})]}),(0,s.jsx)("th",{children:"Reason"}),(0,s.jsx)("th",{children:"Solution"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",children:"HANDLER_ERROR"}),(0,s.jsx)("td",{children:"UNKNOWN_BLOCK"}),(0,s.jsx)("td",{children:"The requested block has not been produced yet or it has been garbage-collected (cleaned up to save space on the RPC node)"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Check that the requested block is legit"}),(0,s.jsxs)("li",{children:["If the block had been produced more than 5 epochs ago, try to send your request to ",(0,s.jsx)("a",{href:"https://near-nodes.io/intro/node-types#archival-node",target:"_blank",rel:"noopener noreferrer",children:"an archival node"})]})]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"NOT_SYNCED_YET"}),(0,s.jsx)("td",{children:"The node is still syncing and the requested block is not in the database yet"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Wait until the node finish syncing"}),(0,s.jsx)("li",{children:"Send a request to a different node which is synced"})]})})]}),(0,s.jsxs)("tr",{className:"stripe",children:[(0,s.jsx)("td",{children:"REQUEST_VALIDATION_ERROR"}),(0,s.jsx)("td",{children:"PARSE_ERROR"}),(0,s.jsx)("td",{children:"Passed arguments can't be parsed by JSON RPC server (missing arguments, wrong format, etc.)"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Check the arguments passed and pass the correct ones"}),(0,s.jsxs)("li",{children:["Check ",(0,s.jsx)("code",{children:"error.cause.info"})," for more details"]})]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"INTERNAL_ERROR"}),(0,s.jsx)("td",{children:"INTERNAL_ERROR"}),(0,s.jsx)("td",{children:"Something went wrong with the node itself or overloaded"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Try again later"}),(0,s.jsx)("li",{children:"Send a request to a different node"}),(0,s.jsxs)("li",{children:["Check ",(0,s.jsx)("code",{children:"error.cause.info"})," for more details"]})]})})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"chunk-details",children:"Chunk Details"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Returns details of a specific chunk. You can run a ",(0,s.jsx)(n.a,{href:"/api/rpc/setup#block-details",children:"block details"})," query to get a valid chunk hash."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["method: ",(0,s.jsx)(n.code,{children:"chunk"})]}),"\n",(0,s.jsxs)(n.li,{children:["params:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chunk_id"})," ",(0,s.jsx)(n.em,{children:"OR"})," ",(0,s.jsxs)(n.a,{href:"/api/rpc/setup#using-block_id-param",children:[(0,s.jsx)(n.code,{children:"block_id"}),", ",(0,s.jsx)(n.code,{children:"shard_id"})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"chunk_id"})," example:"]}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c.Z,{value:"json",label:"JSON",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "chunk",\n  "params": {"chunk_id": "EBM2qg5cGr47EjMPtH88uvmXHDHqmWPzKaQadbWhdw22"}\n}\n'})})}),(0,s.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const response = await near.connection.provider.chunk({\n  chunk_id: "EBM2qg5cGr47EjMPtH88uvmXHDHqmWPzKaQadbWhdw22"\n});\n'})})}),(0,s.jsx)(c.Z,{value:"http",label:"HTTPie",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 method=chunk params:=\'{"chunk_id": "EBM2qg5cGr47EjMPtH88uvmXHDHqmWPzKaQadbWhdw22"}\' id=dontcare\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"block_id"}),", ",(0,s.jsx)(n.code,{children:"shard_id"})," example:"]}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c.Z,{value:"json",label:"JSON",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "chunk",\n  "params": {"block_id": 58934027, "shard_id": 0}\n}\n'})})}),(0,s.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const response = await near.connection.provider.chunk({\n  block_id: 58934027, shard_id: 0\n});\n"})})}),(0,s.jsx)(c.Z,{value:"http",label:"HTTPie",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 method=chunk params:=\'{"block_id": 58934027, "shard_id": 0}\' id=dontcare\n'})})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Example response: "}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "author": "bitcat.pool.f863973.m0",\n    "header": {\n      "chunk_hash": "EBM2qg5cGr47EjMPtH88uvmXHDHqmWPzKaQadbWhdw22",\n      "prev_block_hash": "2yUTTubrv1gJhTUVnHXh66JG3qxStBqySoN6wzRzgdVD",\n      "outcome_root": "11111111111111111111111111111111",\n      "prev_state_root": "HqWDq3f5HJuWnsTfwZS6jdAUqDjGFSTvjhb846vV27dx",\n      "encoded_merkle_root": "9zYue7drR1rhfzEEoc4WUXzaYRnRNihvRoGt1BgK7Lkk",\n      "encoded_length": 8,\n      "height_created": 17821130,\n      "height_included": 17821130,\n      "shard_id": 0,\n      "gas_used": 0,\n      "gas_limit": 1000000000000000,\n      "rent_paid": "0",\n      "validator_reward": "0",\n      "balance_burnt": "0",\n      "outgoing_receipts_root": "H4Rd6SGeEBTbxkitsCdzfu9xL9HtZ2eHoPCQXUeZ6bW4",\n      "tx_root": "11111111111111111111111111111111",\n      "validator_proposals": [],\n      "signature": "ed25519:4iPgpYAcPztAvnRHjfpegN37Rd8dTJKCjSd1gKAPLDaLcHUySJHjexMSSfC5iJVy28vqF9VB4psz13x2nt92cbR7"\n    },\n    "transactions": [],\n    "receipts": []\n  },\n  "id": "dontcare"\n}\n'})})})]}),"\n",(0,s.jsx)(n.h4,{id:"what-could-go-wrong-2",children:"What Could Go Wrong??"}),"\n",(0,s.jsxs)(n.p,{children:["When API request fails, RPC server returns a structured error response with a limited number of well-defined error variants, so client code can exhaustively handle all the possible error cases. Our JSON-RPC errors follow ",(0,s.jsx)(n.a,{href:"https://github.com/joyent/node-verror",children:"verror"})," convention for structuring the error response:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Heads up"})}),"\n",(0,s.jsxs)(n.p,{children:["The fields ",(0,s.jsx)(n.code,{children:"code"}),", ",(0,s.jsx)(n.code,{children:"data"}),", and ",(0,s.jsx)(n.code,{children:"message"})," in the structure above are considered legacy ones and might be deprecated in the future. Please, don't rely on them."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Here is the exhaustive list of the error variants that can be returned by ",(0,s.jsx)(n.code,{children:"chunk"})," method:"]}),"\n",(0,s.jsxs)("table",{className:"custom-stripe",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsxs)(n.p,{children:["ERROR_TYPE",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("code",{children:"error.name"})]})}),(0,s.jsxs)("th",{children:["ERROR_CAUSE",(0,s.jsx)("br",{}),(0,s.jsx)("code",{children:"error.cause.name"})]}),(0,s.jsx)("th",{children:"Reason"}),(0,s.jsx)("th",{children:"Solution"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"4",children:"HANDLER_ERROR"}),(0,s.jsx)("td",{children:"UNKNOWN_BLOCK"}),(0,s.jsx)("td",{children:"The requested block has not been produced yet or it has been garbage-collected (cleaned up to save space on the RPC node)"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Check that the requested block is legit"}),(0,s.jsxs)("li",{children:["If the block had been produced more than 5 epochs ago, try to send your request to ",(0,s.jsx)("a",{href:"https://near-nodes.io/intro/node-types#archival-node",target:"_blank",rel:"noopener noreferrer",children:"an archival node"})]})]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"UNKNOWN_CHUNK"}),(0,s.jsx)("td",{children:"The requested chunk can't be found in a database"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Check that the requested chunk is legit"}),(0,s.jsx)("li",{children:"If the chunk had been produced more than 5 epochs ago, try to send your request to an archival node"})]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"INVALID_SHARD_ID"}),(0,s.jsxs)("td",{children:["Provided ",(0,s.jsx)("code",{children:"shard_id"})," does not exist"]}),(0,s.jsx)("td",{children:(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["Provide ",(0,s.jsx)("code",{children:"shard_id"})," for an existing shard"]})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"NOT_SYNCED_YET"}),(0,s.jsx)("td",{children:"The node is still syncing and the requested chunk is not in the database yet"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Wait until the node finish syncing"}),(0,s.jsx)("li",{children:"Send a request to a different node which is synced"})]})})]}),(0,s.jsxs)("tr",{className:"stripe",children:[(0,s.jsx)("td",{children:"REQUEST_VALIDATION_ERROR"}),(0,s.jsx)("td",{children:"PARSE_ERROR"}),(0,s.jsx)("td",{children:"Passed arguments can't be parsed by JSON RPC server (missing arguments, wrong format, etc.)"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Check the arguments passed and pass the correct ones"}),(0,s.jsxs)("li",{children:["Check ",(0,s.jsx)("code",{children:"error.cause.info"})," for more details"]})]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"INTERNAL_ERROR"}),(0,s.jsx)("td",{children:"INTERNAL_ERROR"}),(0,s.jsx)("td",{children:"Something went wrong with the node itself or overloaded"}),(0,s.jsx)("td",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Try again later"}),(0,s.jsx)("li",{children:"Send a request to a different node"}),(0,s.jsxs)("li",{children:["Check ",(0,s.jsx)("code",{children:"error.cause.info"})," for more details"]})]})})]})]})]}),"\n",(0,s.jsx)(n.hr,{})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>c});r(67294);var s=r(36905);const t={tabItem:"tabItem_Ymn6"};var a=r(85893);function c(e){var n=e.children,r=e.hidden,c=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,c),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>R});var s=r(67294),t=r(36905),a=r(12466),c=r(16550),l=r(20469),d=r(91980),i=r(67392),o=r(20812);function h(e){var n,r;return null!=(n=null==(r=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function u(e){var n=e.values,r=e.children;return(0,s.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,i.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function j(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function x(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,a=(0,c.k6)(),l=function(e){var n=e.queryString,r=void 0!==n&&n,s=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:r,groupId:t});return[(0,d._X)(l),(0,s.useCallback)((function(e){if(l){var n=new URLSearchParams(a.location.search);n.set(l,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[l,a])]}function p(e){var n,r,t,a,c=e.defaultValue,d=e.queryString,i=void 0!==d&&d,h=e.groupId,p=u(e),g=(0,s.useState)((function(){return function(e){var n,r=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(n=s.find((function(e){return e.default})))?n:s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:c,tabValues:p})})),b=g[0],m=g[1],v=x({queryString:i,groupId:h}),f=v[0],k=v[1],R=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),r=(0,o.Nk)(n),t=r[0],a=r[1],[t,(0,s.useCallback)((function(e){n&&a.set(e)}),[n,a])]),_=R[0],y=R[1],N=function(){var e=null!=f?f:_;return j({value:e,tabValues:p})?e:null}();return(0,l.Z)((function(){N&&m(N)}),[N]),{selectedValue:b,selectValue:(0,s.useCallback)((function(e){if(!j({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);m(e),k(e),y(e)}),[k,y,p]),tabValues:p}}var g=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(85893);function v(e){var n=e.className,r=e.block,s=e.selectedValue,c=e.selectValue,l=e.tabValues,d=[],i=(0,a.o5)().blockElementScrollPositionUntilNextRender,o=function(e){var n=e.currentTarget,r=d.indexOf(n),t=l[r].value;t!==s&&(i(n),c(t))},h=function(e){var n,r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var s,t=d.indexOf(e.currentTarget)+1;r=null!=(s=d[t])?s:d[0];break;case"ArrowLeft":var a,c=d.indexOf(e.currentTarget)-1;r=null!=(a=d[c])?a:d[d.length-1]}null==(n=r)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:l.map((function(e){var n=e.value,r=e.label,a=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:function(e){return d.push(e)},onKeyDown:h,onClick:o},a,{className:(0,t.Z)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===n}),children:null!=r?r:n}),n)}))})}function f(e){var n=e.lazy,r=e.children,t=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var c=a.find((function(e){return e.props.value===t}));return c?(0,s.cloneElement)(c,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function k(e){var n=p(e);return(0,m.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(v,Object.assign({},n,e)),(0,m.jsx)(f,Object.assign({},n,e))]})}function R(e){var n=(0,g.Z)();return(0,m.jsx)(k,Object.assign({},e,{children:h(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var s=r(67294);const t={},a=s.createContext(t);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);