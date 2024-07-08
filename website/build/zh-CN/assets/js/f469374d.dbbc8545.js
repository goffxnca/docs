"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7913],{35627:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(85893),i=t(11151);const r={id:"accounts",title:"Accounts",sidebar_label:"Accounts"},c=void 0,o={id:"integrations/accounts",title:"Accounts",description:"Introduction",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/6.integrations/accounts.md",sourceDirName:"6.integrations",slug:"/integrations/accounts",permalink:"/zh-CN/integrations/accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrations/accounts.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1720430471e3,frontMatter:{id:"accounts",title:"Accounts",sidebar_label:"Accounts"},sidebar:"exchanges",previous:{title:"Balance Changes",permalink:"/zh-CN/integrations/balance-changes"},next:{title:"Create a Transaction",permalink:"/zh-CN/integrations/create-transactions"}},a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Transfer from Function Call",id:"transfer-from-function-call",level:2}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components},{Details:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(e.p,{children:["Please see the ",(0,s.jsx)(e.a,{href:"/concepts/protocol/account-model",children:"documentation for accounts"})," for basic information."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["For exchanges, NEAR supports ",(0,s.jsx)(e.a,{href:"https://nomicon.io/DataStructures/Account.html#implicit-account-ids",children:"implicit account"})," creation which allows the creation of accounts without paying for transactions."]}),"\n",(0,s.jsxs)(e.li,{children:["You can create an implicit account by following the steps in ",(0,s.jsx)(e.a,{href:"/integrations/implicit-accounts",children:"this guide"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Accounts must have enough tokens to cover its storage which currently costs ",(0,s.jsx)(e.code,{children:"0.0001 NEAR"})," per byte. This equates to a minimum balance of ",(0,s.jsx)(e.code,{children:"0.00182 NEAR"})," for an account with one access key. You can query the live storage price using the ",(0,s.jsx)(e.a,{href:"https://docs.near.org/api/rpc/setup#protocol-config",children:(0,s.jsx)(e.code,{children:"protocol-config"})})," RPC endpoint. For more details on storage fees see ",(0,s.jsx)(e.a,{href:"https://pages.near.org/papers/economics-in-sharded-blockchain/#transaction-and-storage-fees",children:"this section of the economics paper"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"transfer-from-function-call",children:"Transfer from Function Call"}),"\n",(0,s.jsx)(e.p,{children:"NEAR allows transfers to happen within a function call. More importantly, when an account is deployed with some contract, it is possible that the only way to transfer tokens from that account is through a function call. Therefore, exchanges need to support transfers through function calls as well. We recommend the following approach:"}),"\n",(0,s.jsxs)(e.p,{children:["Exchange can ",(0,s.jsx)(e.a,{href:"/api/rpc/setup#block",children:"query block by height"})," to get blocks on each height, and for every block, ",(0,s.jsx)(e.a,{href:"/api/rpc/setup#chunk",children:"query its chunk"})," to obtain the transactions included in the block. For each transaction, ",(0,s.jsx)(e.a,{href:"/api/rpc/setup#transaction-status-with-receipts",children:"query its status"})," to see the receipts generated from transactions. Since exchanges are only interested in transfers to their addresses, they only need to filter receipts that only contain ",(0,s.jsx)(e.code,{children:"Transfer"})," action and whose ",(0,s.jsx)(e.code,{children:"predecessor_id"})," is not ",(0,s.jsx)(e.code,{children:"system"})," (receipts with ",(0,s.jsx)(e.code,{children:"predecessor_id"})," equal to ",(0,s.jsx)(e.code,{children:"system"})," are ",(0,s.jsx)(e.a,{href:"https://nomicon.io/RuntimeSpec/Refunds.html",children:"refunds"}),"). Then, to check whether the receipt succeeds, it is sufficient to look for the ",(0,s.jsx)(e.code,{children:"receipt_id"})," in ",(0,s.jsx)(e.code,{children:"receipts_outcome"})," and see if its status is ",(0,s.jsx)(e.code,{children:"SuccessValue"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["Alternatively, exchange can use ",(0,s.jsx)(e.a,{href:"https://github.com/near/nearcore/tree/master/chain/indexer",children:"the indexer framework"})," to help index on-chain data which include receipts. An example usage of the indexer can be found ",(0,s.jsx)(e.a,{href:"https://github.com/near/nearcore/tree/master/tools/indexer/example",children:"here"}),"."]}),"\n",(0,s.jsx)(e.p,{children:"Below we include examples from the contracts that are likely to be used to perform transfers through function calls."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example of transfer from a lockup contract"})}),"\n",(0,s.jsxs)(e.p,{children:["A contract ",(0,s.jsx)(e.code,{children:"evgeny.lockup.near"})," is deployed and we can check its owner by"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"> near view evgeny.lockup.near get_owner_account_id\nView call: evgeny.lockup.near.get_owner_account_id()\n'evgeny.near'\n"})}),"\n",(0,s.jsx)(e.p,{children:"Now we want to transfer some unlocked tokens (1 NEAR) with the following call"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'near call evgeny.lockup.near transfer \'{"amount":"1000000000000000000000000", "receiver_id": "evgeny.near"}\' --accountId=evgeny.near\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note"}),": the response below can be obtained by hitting the RPC with the transaction hash and NEAR account like this:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=txstatus method=EXPERIMENTAL_tx_status \\\n  params:=\'[ "GXP8YaSonoN2eBY6dB3FbMN2NyYD2JeJJvKdvbL4Jmb2", "evgeny.near"]\'\n'})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(e.strong,{children:"Example Response:"})}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "id": "123",\n  "jsonrpc": "2.0",\n  "result": {\n    "receipts": [\n      {\n        "predecessor_id": "evgeny.near",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "FunctionCall": {\n                  "args": "eyJhbW91bnQiOiIxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwicmVjZWl2ZXJfaWQiOiJldmdlbnkubmVhciJ9",\n                  "deposit": "0",\n                  "gas": 100000000000000,\n                  "method_name": "transfer"\n                }\n              }\n            ],\n            "gas_price": "186029458",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "evgeny.near",\n            "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n          }\n        },\n        "receipt_id": "CyJL22SYqt26qgh2XVnk9MGfvzgyiiq5Lny7DdbTdTWU",\n        "receiver_id": "evgeny.lockup.near"\n      },\n      {\n        "predecessor_id": "evgeny.lockup.near",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "1000000000000000000000000"\n                }\n              }\n            ],\n            "gas_price": "186029458",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "evgeny.near",\n            "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n          }\n        },\n        "receipt_id": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n        "receiver_id": "evgeny.near"\n      },\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "19200274886926125000"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "evgeny.near",\n            "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n          }\n        },\n        "receipt_id": "J1bBKH43nXHYg4NuS97R1PFzdZchrJboVAdRsK5NRrAv",\n        "receiver_id": "evgeny.near"\n      },\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "18655658845681462514128"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "evgeny.near",\n            "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n          }\n        },\n        "receipt_id": "6PFaxnNvK5r6qxBq5WfV9uGjoNM6qjhHwLehLP1qak9d",\n        "receiver_id": "evgeny.near"\n      }\n    ],\n    "receipts_outcome": [\n      {\n        "block_hash": "9boEKq9G1UFsEuzmuQrxh5dkRc8xsv8PSPGEkYiTyRLj",\n        "id": "CyJL22SYqt26qgh2XVnk9MGfvzgyiiq5Lny7DdbTdTWU",\n        "outcome": {\n          "executor_id": "evgeny.lockup.near",\n          "gas_burnt": 3574640311481,\n          "logs": [\n            "Transferring 1000000000000000000000000 to account @evgeny.near"\n          ],\n          "receipt_ids": [\n            "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n            "6PFaxnNvK5r6qxBq5WfV9uGjoNM6qjhHwLehLP1qak9d"\n          ],\n          "status": {\n            "SuccessReceiptId": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC"\n          },\n          "tokens_burnt": "357464031148100000000"\n        },\n        "proof": []\n      },\n      {\n        "block_hash": "7qn4BjmMD4QbyVvMa8QEzm7h5YuhoGTFTgLeNMUp85UQ",\n        "id": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n        "outcome": {\n          "executor_id": "evgeny.near",\n          "gas_burnt": 223182562500,\n          "logs": [],\n          "receipt_ids": ["J1bBKH43nXHYg4NuS97R1PFzdZchrJboVAdRsK5NRrAv"],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "22318256250000000000"\n        },\n        "proof": [\n          {\n            "direction": "Right",\n            "hash": "AwHdk5dushTSXHFBt3R5MiexjiXybwdnEaB7L9iJ5F6t"\n          }\n        ]\n      },\n      {\n        "block_hash": "46788Ay85YGnQaH5tfbboQNWJs3gyXsPbcWzRyxqw56K",\n        "id": "J1bBKH43nXHYg4NuS97R1PFzdZchrJboVAdRsK5NRrAv",\n        "outcome": {\n          "executor_id": "evgeny.near",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": []\n      },\n      {\n        "block_hash": "7qn4BjmMD4QbyVvMa8QEzm7h5YuhoGTFTgLeNMUp85UQ",\n        "id": "6PFaxnNvK5r6qxBq5WfV9uGjoNM6qjhHwLehLP1qak9d",\n        "outcome": {\n          "executor_id": "evgeny.near",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": [\n          {\n            "direction": "Left",\n            "hash": "9RRJpH5VdDxsHpp323EshcAauV5wUNDyW9FpEJBRXXq8"\n          }\n        ]\n      }\n    ],\n    "status": {\n      "SuccessValue": ""\n    },\n    "transaction": {\n      "actions": [\n        {\n          "FunctionCall": {\n            "args": "eyJhbW91bnQiOiIxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwicmVjZWl2ZXJfaWQiOiJldmdlbnkubmVhciJ9",\n            "deposit": "0",\n            "gas": 100000000000000,\n            "method_name": "transfer"\n          }\n        }\n      ],\n      "hash": "GXP8YaSonoN2eBY6dB3FbMN2NyYD2JeJJvKdvbL4Jmb2",\n      "nonce": 6,\n      "public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq",\n      "receiver_id": "evgeny.lockup.near",\n      "signature": "ed25519:4nfzTMpQJKCY3KaqUTFig4Xy9uxwbMeQpMJjtNKsXmwiVqgcVSWRguZEgZM8L2x1jvdpZHsYjLCxc9cSBamXuXPH",\n      "signer_id": "evgeny.near"\n    },\n    "transaction_outcome": {\n      "block_hash": "4u7maz2U43W4DPxqQE8KoRNi5dTRHrAsKsFk2qDQsQEw",\n      "id": "GXP8YaSonoN2eBY6dB3FbMN2NyYD2JeJJvKdvbL4Jmb2",\n      "outcome": {\n        "executor_id": "evgeny.near",\n        "gas_burnt": 2428086459116,\n        "logs": [],\n        "receipt_ids": ["CyJL22SYqt26qgh2XVnk9MGfvzgyiiq5Lny7DdbTdTWU"],\n        "status": {\n          "SuccessReceiptId": "CyJL22SYqt26qgh2XVnk9MGfvzgyiiq5Lny7DdbTdTWU"\n        },\n        "tokens_burnt": "242808645911600000000"\n      },\n      "proof": []\n    }\n  }\n}\n'})})]}),"\n",(0,s.jsxs)(e.p,{children:["As we can see, there are four receipts generated in this function call. If we apply the criteria mentioned above, we can find in ",(0,s.jsx)(e.code,{children:"receipts"})," field this object"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "predecessor_id": "evgeny.lockup.near",\n  "receipt": {\n    "Action": {\n      "actions": [\n        {\n          "Transfer": {\n            "deposit": "1000000000000000000000000"\n          }\n        }\n      ],\n      "gas_price": "186029458",\n      "input_data_ids": [],\n      "output_data_receivers": [],\n      "signer_id": "evgeny.near",\n      "signer_public_key": "ed25519:BVRTxEEMx3gFceSgJtnvPFbSnPDwwUzHe6KGduRh5Byq"\n    }\n  },\n  "receipt_id": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n  "receiver_id": "evgeny.near"\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["which contains only ",(0,s.jsx)(e.code,{children:"Transfer"})," action and whose ",(0,s.jsx)(e.code,{children:"predecessor_id"})," is not ",(0,s.jsx)(e.code,{children:"system"}),". Now we can check the status of the execution by looking for the same receipt id ",(0,s.jsx)(e.code,{children:"EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC"})," in ",(0,s.jsx)(e.code,{children:"receipts_outcome"})," field of the rpc return result, this leads us to this execution outcome"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "block_hash": "7qn4BjmMD4QbyVvMa8QEzm7h5YuhoGTFTgLeNMUp85UQ",\n  "id": "EvHfj4fUyVuLBRKNdCZmFGr4WfqwYf7YCbzFsRGFTFJC",\n  "outcome": {\n    "executor_id": "evgeny.near",\n    "gas_burnt": 223182562500,\n    "logs": [],\n    "receipt_ids": ["J1bBKH43nXHYg4NuS97R1PFzdZchrJboVAdRsK5NRrAv"],\n    "status": {\n      "SuccessValue": ""\n    },\n    "tokens_burnt": "22318256250000000000"\n  },\n  "proof": [\n    {\n      "direction": "Right",\n      "hash": "AwHdk5dushTSXHFBt3R5MiexjiXybwdnEaB7L9iJ5F6t"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["and its status contains ",(0,s.jsx)(e.code,{children:"SuccessValue"}),", which indicates that the receipt has succeeded. Therefore we know that ",(0,s.jsx)(e.code,{children:"1000000000000000000000000"})," yoctoNEAR, or 1 NEAR has been successfully transferred."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example of transfer from a multisig contract"})}),"\n",(0,s.jsx)(e.p,{children:"Mutisig contract, as the name suggests, uses multiple signatures to confirm a transaction and therefore, actions performed by the multisig contract involves multiple transactions. In the following example, we will show how a transfer is done from a multisig contract that requires two confirmations."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["First step: ",(0,s.jsx)(e.code,{children:"add_request_and_confirm"}),". This initiates the action that the multisig contract wants to perform with one confirmation. The multisig contract ",(0,s.jsx)(e.code,{children:"multsigtest.testnet"})," wants to transfer 1 NEAR to ",(0,s.jsx)(e.code,{children:"bowen"})," and it first sends a transaction that calls ",(0,s.jsx)(e.code,{children:"add_request_and_confirm"})," with a request"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "request": {\n    "receiver_id": "bowen",\n    "actions": [\n      {\n        "type": "Transfer",\n        "amount": "1000000000000000000000000"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["that indicates it wants to transfer 1 NEAR to ",(0,s.jsx)(e.code,{children:"bowen"}),". Notice that this transaction only records the action but does not perform the actual transfer. The transaction result is as follows:"]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(e.strong,{children:"Example Response:"})}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "id": "123",\n  "jsonrpc": "2.0",\n  "result": {\n    "receipts": [\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "3069687780141648922140"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "multisigtest.testnet",\n            "signer_public_key": "ed25519:JDewsbE7nz6orFD4zJ3mVzqhfcaoSD6Hmi5as3AHHiTt"\n          }\n        },\n        "receipt_id": "4qgDptd7Wm6vswAhWMCsVpTjBEkmLJEUxSNVQS1wu3rD",\n        "receiver_id": "multisigtest.testnet"\n      }\n    ],\n    "receipts_outcome": [\n      {\n        "block_hash": "6uJWHTvUrtFQAurUyfuAfy9EdoR9FhLodGh44aHJta6m",\n        "id": "94LiYwKJEDherHMNg9fqLy9ShFTDiQiUN3nDaGmLZwth",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 8024094920263,\n          "logs": [],\n          "receipt_ids": ["4qgDptd7Wm6vswAhWMCsVpTjBEkmLJEUxSNVQS1wu3rD"],\n          "status": {\n            "SuccessValue": "OA=="\n          },\n          "tokens_burnt": "802409492026300000000"\n        },\n        "proof": [\n          {\n            "direction": "Left",\n            "hash": "GedzmwRkxA5VkT8GLBCnrPUmnEhWPXadPmiq4Ho1s9pH"\n          },\n          {\n            "direction": "Right",\n            "hash": "GirkzdS9YpsAz5fXuL5T3rXd93aRcnXNAdXYi241qpWK"\n          }\n        ]\n      },\n      {\n        "block_hash": "4JyQ6guJKeWZxxXrKndLDuSa5URuirmBi6RzsbKYFsBE",\n        "id": "4qgDptd7Wm6vswAhWMCsVpTjBEkmLJEUxSNVQS1wu3rD",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": []\n      }\n    ],\n    "status": {\n      "SuccessValue": "OA=="\n    },\n    "transaction": {\n      "actions": [\n        {\n          "FunctionCall": {\n            "args": "eyJyZXF1ZXN0Ijp7InJlY2VpdmVyX2lkIjoiYm93ZW4iLCJhY3Rpb25zIjpbeyJ0eXBlIjoiVHJhbnNmZXIiLCJhbW91bnQiOiIxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIn1dfX0=",\n            "deposit": "0",\n            "gas": 30000000000000,\n            "method_name": "add_request_and_confirm"\n          }\n        }\n      ],\n      "hash": "FGREJkC1e8y95Rc35iD1LVRiDy1WcAZhAxxkSinfb2mL",\n      "nonce": 10,\n      "public_key": "ed25519:JDewsbE7nz6orFD4zJ3mVzqhfcaoSD6Hmi5as3AHHiTt",\n      "receiver_id": "multisigtest.testnet",\n      "signature": "ed25519:3NUKXd4uj2eEBqGQtRAxkTFW7UfG44tjvQNNHBDvN9ZswTTMRsDrMJSd1U3GqWF7QToqWQR9J8atNEVTemSWYw41",\n      "signer_id": "multisigtest.testnet"\n    },\n    "transaction_outcome": {\n      "block_hash": "6uJWHTvUrtFQAurUyfuAfy9EdoR9FhLodGh44aHJta6m",\n      "id": "FGREJkC1e8y95Rc35iD1LVRiDy1WcAZhAxxkSinfb2mL",\n      "outcome": {\n        "executor_id": "multisigtest.testnet",\n        "gas_burnt": 2428204963618,\n        "logs": [],\n        "receipt_ids": ["94LiYwKJEDherHMNg9fqLy9ShFTDiQiUN3nDaGmLZwth"],\n        "status": {\n          "SuccessReceiptId": "94LiYwKJEDherHMNg9fqLy9ShFTDiQiUN3nDaGmLZwth"\n        },\n        "tokens_burnt": "242820496361800000000"\n      },\n      "proof": [\n        {\n          "direction": "Right",\n          "hash": "AsNAQabPFkmaugRGhCbzcEcR8Gnd22WXxPM2fb2cwHiv"\n        },\n        {\n          "direction": "Right",\n          "hash": "GirkzdS9YpsAz5fXuL5T3rXd93aRcnXNAdXYi241qpWK"\n        }\n      ]\n    }\n  }\n}\n'})})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Second step: ",(0,s.jsx)(e.code,{children:"confirm"}),". A second transaction is sent to confirm the transfer. This transaction takes the request id returned by the first transaction and does the actual transfer. The transaction result is as follows"]}),"\n"]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(e.strong,{children:"Example Response:"})}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "id": "123",\n  "jsonrpc": "2.0",\n  "result": {\n    "receipts": [\n      {\n        "predecessor_id": "multisigtest.testnet",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "1000000000000000000000000"\n                }\n              }\n            ],\n            "gas_price": "451542320",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "multisigtest.testnet",\n            "signer_public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz"\n          }\n        },\n        "receipt_id": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n        "receiver_id": "bowen"\n      },\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "78458115804795000000"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "multisigtest.testnet",\n            "signer_public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz"\n          }\n        },\n        "receipt_id": "6SxC9GfYdjqm7Ao5EAw51XUAjgoN8Lj2X9xJfxjDQYXd",\n        "receiver_id": "multisigtest.testnet"\n      },\n      {\n        "predecessor_id": "system",\n        "receipt": {\n          "Action": {\n            "actions": [\n              {\n                "Transfer": {\n                  "deposit": "112870156274913516718240"\n                }\n              }\n            ],\n            "gas_price": "0",\n            "input_data_ids": [],\n            "output_data_receivers": [],\n            "signer_id": "multisigtest.testnet",\n            "signer_public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz"\n          }\n        },\n        "receipt_id": "CHfzz6NLcQMyiLHBQoczhgm5BFjLVfv9B7eCyXKLhhcT",\n        "receiver_id": "multisigtest.testnet"\n      }\n    ],\n    "receipts_outcome": [\n      {\n        "block_hash": "9JEiMrZ1SpAUEbQswde3Diptzwy35Vrvd41VZWG9hYVE",\n        "id": "FfuhYhsgFL7sLC8pk1tuRnMHJdqycE6gEcfgZLW9fmFB",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 10109796553814,\n          "logs": [],\n          "receipt_ids": [\n            "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n            "CHfzz6NLcQMyiLHBQoczhgm5BFjLVfv9B7eCyXKLhhcT"\n          ],\n          "status": {\n            "SuccessReceiptId": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy"\n          },\n          "tokens_burnt": "1010979655381400000000"\n        },\n        "proof": [\n          {\n            "direction": "Left",\n            "hash": "9e2UcG6qBRahBh3V2Z8bGJLh5c4jXfZdP3WBJkCpJCfj"\n          }\n        ]\n      },\n      {\n        "block_hash": "4LkVfqyhhrxDdVFmow6NxLf1jTaj6XVr7CVcUxxySd1R",\n        "id": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n        "outcome": {\n          "executor_id": "bowen",\n          "gas_burnt": 223182562500,\n          "logs": [],\n          "receipt_ids": ["6SxC9GfYdjqm7Ao5EAw51XUAjgoN8Lj2X9xJfxjDQYXd"],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "22318256250000000000"\n        },\n        "proof": [\n          {\n            "direction": "Right",\n            "hash": "FFWaWUFt6sNx5XNHzGYsYBSYFWtGPoww5XQz1QmLVc8i"\n          }\n        ]\n      },\n      {\n        "block_hash": "G6LDdnAa2b38TB4KZ89HAyVgfgyiRPDDgSxoZypbUYpx",\n        "id": "6SxC9GfYdjqm7Ao5EAw51XUAjgoN8Lj2X9xJfxjDQYXd",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": []\n      },\n      {\n        "block_hash": "4LkVfqyhhrxDdVFmow6NxLf1jTaj6XVr7CVcUxxySd1R",\n        "id": "CHfzz6NLcQMyiLHBQoczhgm5BFjLVfv9B7eCyXKLhhcT",\n        "outcome": {\n          "executor_id": "multisigtest.testnet",\n          "gas_burnt": 0,\n          "logs": [],\n          "receipt_ids": [],\n          "status": {\n            "SuccessValue": ""\n          },\n          "tokens_burnt": "0"\n        },\n        "proof": [\n          {\n            "direction": "Left",\n            "hash": "DpDYAEKZTtSomgyeNcJ2i4qjvfqnCtf1CXa83Cz5wvEy"\n          }\n        ]\n      }\n    ],\n    "status": {\n      "SuccessValue": ""\n    },\n    "transaction": {\n      "actions": [\n        {\n          "FunctionCall": {\n            "args": "eyJyZXF1ZXN0X2lkIjo4fQ==",\n            "deposit": "0",\n            "gas": 250000000000000,\n            "method_name": "confirm"\n          }\n        }\n      ],\n      "hash": "Fu39vwxC4mu9ks1DZA5Cib63RnBMHpFonk2DcbpioEYc",\n      "nonce": 9,\n      "public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz",\n      "receiver_id": "multisigtest.testnet",\n      "signature": "ed25519:2raQq7t3cmzSL2krE2xaNqXhAw7cKMoXrBjT2ZhAGfCVtGwzbbQ8zkB17vrCSFZDbFmPWSJpoqsw8qPZZiorwSzS",\n      "signer_id": "multisigtest.testnet"\n    },\n    "transaction_outcome": {\n      "block_hash": "9JEiMrZ1SpAUEbQswde3Diptzwy35Vrvd41VZWG9hYVE",\n      "id": "Fu39vwxC4mu9ks1DZA5Cib63RnBMHpFonk2DcbpioEYc",\n      "outcome": {\n        "executor_id": "multisigtest.testnet",\n        "gas_burnt": 2427972426482,\n        "logs": [],\n        "receipt_ids": ["FfuhYhsgFL7sLC8pk1tuRnMHJdqycE6gEcfgZLW9fmFB"],\n        "status": {\n          "SuccessReceiptId": "FfuhYhsgFL7sLC8pk1tuRnMHJdqycE6gEcfgZLW9fmFB"\n        },\n        "tokens_burnt": "242797242648200000000"\n      },\n      "proof": [\n        {\n          "direction": "Right",\n          "hash": "B6hN48qeVP8J3hP8XGcANShM264QkNjgJAfMtsuknqex"\n        }\n      ]\n    }\n  }\n}\n'})})]}),"\n",(0,s.jsxs)(e.p,{children:["Notice that similar to the transfer from lockup contract, there is also one receipt in the ",(0,s.jsx)(e.code,{children:"receipts"})," field that meet our requirements:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "predecessor_id": "multisigtest.testnet",\n  "receipt": {\n    "Action": {\n      "actions": [\n        {\n          "Transfer": {\n            "deposit": "1000000000000000000000000"\n          }\n        }\n      ],\n      "gas_price": "451542320",\n      "input_data_ids": [],\n      "output_data_receivers": [],\n      "signer_id": "multisigtest.testnet",\n      "signer_public_key": "ed25519:BmVX32jhvEd8d8outiQdjf66GGYV3pb7kaxrKTdNisCz"\n    }\n  },\n  "receipt_id": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n  "receiver_id": "bowen"\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["and we can find its outcome in ",(0,s.jsx)(e.code,{children:"receipts_outcome"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "block_hash": "4LkVfqyhhrxDdVFmow6NxLf1jTaj6XVr7CVcUxxySd1R",\n  "id": "DZbHTEf3i3XznK4oJHQfcrteoiCL6WykRiA8vsn4LmAy",\n  "outcome": {\n    "executor_id": "bowen",\n    "gas_burnt": 223182562500,\n    "logs": [],\n    "receipt_ids": ["6SxC9GfYdjqm7Ao5EAw51XUAjgoN8Lj2X9xJfxjDQYXd"],\n    "status": {\n      "SuccessValue": ""\n    },\n    "tokens_burnt": "22318256250000000000"\n  },\n  "proof": [\n    {\n      "direction": "Right",\n      "hash": "FFWaWUFt6sNx5XNHzGYsYBSYFWtGPoww5XQz1QmLVc8i"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"which indicates that the transaction is successful."}),"\n",(0,s.jsx)(e.admonition,{title:"Got a question?",type:"tip",children:(0,s.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",target:"_blank",rel:"noopener noreferrer",children:" Ask it on StackOverflow! "})})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>c});var s=t(67294);const i={},r=s.createContext(i);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);