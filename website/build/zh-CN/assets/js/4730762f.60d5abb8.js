"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5988],{11234:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(85893),r=t(11151),c=t(74866),s=t(85162);const o={id:"actions",title:"Transfers & Actions"},i=void 0,l={id:"build/smart-contracts/anatomy/actions",title:"Transfers & Actions",description:"Smart contracts can perform specific Actions such as transferring NEAR, or calling other contracts.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/anatomy/actions.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/actions",permalink:"/zh-CN/build/smart-contracts/anatomy/actions",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/actions.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,frontMatter:{id:"actions",title:"Transfers & Actions"},sidebar:"build",previous:{title:"Environment",permalink:"/zh-CN/build/smart-contracts/anatomy/environment"},next:{title:"Cross-Contract Calls",permalink:"/zh-CN/build/smart-contracts/anatomy/crosscontract"}},u={},d=[{value:"Transfer NEAR \u24c3",id:"transfer-near-\u24dd",level:2},{value:"Function Call",id:"function-call",level:2},{value:"Create a Sub Account",id:"create-a-sub-account",level:2},{value:"Creating <code>.testnet</code> / <code>.near</code> Accounts",id:"creating-testnet--near-accounts",level:4},{value:"Deploy a Contract",id:"deploy-a-contract",level:2},{value:"Add Keys",id:"add-keys",level:2},{value:"Delete Account",id:"delete-account",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["Smart contracts can perform specific ",(0,a.jsx)(e.code,{children:"Actions"})," such as transferring NEAR, or calling other contracts."]}),"\n",(0,a.jsxs)(e.p,{children:["An important property of ",(0,a.jsx)(e.code,{children:"Actions"})," is that they can be batched together when acting on the same contract. ",(0,a.jsx)(e.strong,{children:"Batched actions"})," act as a unit: they execute in the same ",(0,a.jsx)(e.a,{href:"/zh-CN/concepts/protocol/transactions#receipt-receipt",children:"receipt"}),", and if ",(0,a.jsx)(e.strong,{children:"any fails"}),", then they ",(0,a.jsx)(e.strong,{children:"all get reverted"}),"."]}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Actions"})," can be batched only when they act on the ",(0,a.jsx)(e.strong,{children:"same contract"}),". You can batch calling two methods on a contract, but ",(0,a.jsx)(e.strong,{children:"cannot"})," call two methods on different contracts."]})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"transfer-near-\u24dd",children:"Transfer NEAR \u24c3"}),"\n",(0,a.jsxs)(e.p,{children:["You can send $NEAR from your contract to any other account on the network. The Gas cost for transferring $NEAR is fixed and is based on the protocol's genesis config. Currently, it costs ",(0,a.jsx)(e.code,{children:"~0.45 TGas"}),"."]}),"\n",(0,a.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { NearBindgen, NearPromise, call } from 'near-sdk-js'\nimport { AccountId } from 'near-sdk-js/lib/types'\n\n@NearBindgen({})\nclass Contract{\n  @call({})\n  transfer({ to, amount }: { to: AccountId, amount: bigint }) {\n    NearPromise.new(to).transfer(amount);\n  }\n}\n"})})}),(0,a.jsx)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:"  use near_sdk::{near, AccountId, Promise, NearToken};\n\n  #[near(contract_state)]\n  #[derive(Default)]\n  pub struct Contract { }\n\n  #[near]\n  impl Contract {\n    pub fn transfer(&self, to: AccountId, amount: NearToken){\n      Promise::new(to).transfer(amount);\n    }\n  }\n"})})})]}),"\n",(0,a.jsx)(e.admonition,{title:"Why is there no callback?",type:"tip",children:(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsxs)(e.mdxAdmonitionTitle,{children:["The only case where a transfer will fail is if the receiver account does ",(0,a.jsx)(e.strong,{children:"not"})," exist."]})})}),"\n",(0,a.jsx)(e.admonition,{type:"caution",children:(0,a.jsx)(e.admonition,{type:"caution",children:(0,a.jsx)(e.p,{children:"Remember that your balance is used to cover for the contract's storage. When sending money, make sure you always leave enough to cover for future storage needs."})})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"function-call",children:"Function Call"}),"\n",(0,a.jsxs)(e.p,{children:["Your smart contract can call methods in another contract. In the snippet below we call a method\nin a deployed ",(0,a.jsx)(e.a,{href:"/zh-CN/build/smart-contracts/quickstart",children:"Hello NEAR"})," contract, and check if everything went\nright in the callback."]}),"\n",(0,a.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'import { NearBindgen, near, call, bytes, NearPromise } from \'near-sdk-js\'\nimport { AccountId } from \'near-sdk-js/lib/types\'\n\nconst HELLO_NEAR: AccountId = "hello-nearverse.testnet";\nconst NO_DEPOSIT: bigint = BigInt(0);\nconst CALL_GAS: bigint = BigInt("10000000000000");\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  call_method({}): NearPromise {\n    const args = bytes(JSON.stringify({ message: "howdy" }))\n\n    return NearPromise.new(HELLO_NEAR)\n    .functionCall("set_greeting", args, NO_DEPOSIT, CALL_GAS)\n    .then(\n      NearPromise.new(near.currentAccountId())\n      .functionCall("callback", bytes(JSON.stringify({})), NO_DEPOSIT, CALL_GAS)\n    )\n    .asReturn()\n  }\n\n  @call({privateFunction: true})\n  callback({}): boolean {\n    let result, success;\n  \n    try{ result = near.promiseResult(0); success = true }\n    catch{ result = undefined; success = false }\n  \n    if (success) {\n      near.log(`Success!`)\n      return true\n    } else {\n      near.log("Promise failed...")\n      return false\n    }\n  }\n}\n'})})}),(0,a.jsx)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:'  use near_sdk::{near, env, log, Promise, Gas, PromiseError};\n  use serde_json::json;\n\n  #[near(contract_state)]\n  #[derive(Default)]\n  pub struct Contract { }\n\n  const HELLO_NEAR: &str = "hello-nearverse.testnet";\n  const NO_DEPOSIT: u128 = 0;\n  const CALL_GAS: Gas = Gas(5_000_000_000_000);\n\n  #[near]\n  impl Contract {\n    pub fn call_method(&self){\n      let args = json!({ "message": "howdy".to_string() })\n                .to_string().into_bytes().to_vec();\n\n      Promise::new(HELLO_NEAR.parse().unwrap())\n      .function_call("set_greeting".to_string(), args, NO_DEPOSIT, CALL_GAS)\n      .then(\n        Promise::new(env::current_account_id())\n        .function_call("callback".to_string(), Vec::new(), NO_DEPOSIT, CALL_GAS)\n      );\n    }\n\n    pub fn callback(&self, #[callback_result] result: Result<(), PromiseError>){\n      if result.is_err(){\n          log!("Something went wrong")\n      }else{\n          log!("Message changed")\n      }\n    }\n  }\n'})})})]}),"\n",(0,a.jsx)(e.admonition,{type:"warning",children:(0,a.jsxs)(e.p,{children:["The snippet showed above is a low level way of calling other methods. We recommend make calls to other contracts as explained in the ",(0,a.jsx)(e.a,{href:"/zh-CN/build/smart-contracts/anatomy/crosscontract",children:"Cross-contract Calls section"}),"."]})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"create-a-sub-account",children:"Create a Sub Account"}),"\n",(0,a.jsxs)(e.p,{children:["Your contract can create direct sub accounts of itself, for example, ",(0,a.jsx)(e.code,{children:"user.near"})," can create ",(0,a.jsx)(e.code,{children:"sub.user.near"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["Accounts do ",(0,a.jsx)(e.strong,{children:"NOT"})," have control over their sub-accounts, since they have their own keys."]}),"\n",(0,a.jsxs)(e.p,{children:["Sub-accounts are simply useful for organizing your accounts (e.g. ",(0,a.jsx)(e.code,{children:"dao.project.near"}),", ",(0,a.jsx)(e.code,{children:"token.project.near"}),")."]}),"\n",(0,a.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { NearBindgen, near, call, NearPromise } from 'near-sdk-js'\n\nconst MIN_STORAGE: bigint = BigInt(\"1000000000000000000000\") // 0.001\u24c3\n\n@NearBindgen({})\nclass Contract {\n  @call({payableFunction:true})\n  create({prefix}:{prefix: String}) {\n    const account_id = `${prefix}.${near.currentAccountId()}`\n\n    NearPromise.new(account_id)\n    .createAccount()\n    .transfer(MIN_STORAGE)\n  }\n}\n"})})}),(0,a.jsx)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:'  use near_sdk::{near, env, Promise, NearToken};\n\n  #[near(contract_state)]\n  #[derive(Default)]\n  pub struct Contract { }\n                            \n  const MIN_STORAGE: Balance = 1_000_000_000_000_000_000_000; //0.001\u24c3\n\n  #[near]\n  impl Contract {\n    pub fn create(&self, prefix: String){\n      let account_id = prefix + "." + &env::current_account_id().to_string();\n      Promise::new(account_id.parse().unwrap())\n      .create_account()\n      .transfer(MIN_STORAGE);\n    }\n  }\n'})})})]}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsx)(e.p,{children:"Notice that in the snippet we are transferring some money to the new account for storage"})})}),"\n",(0,a.jsx)(e.admonition,{type:"caution",children:(0,a.jsx)(e.admonition,{type:"caution",children:(0,a.jsxs)(e.mdxAdmonitionTitle,{children:["When you create an account from within a contract, it has no keys by default. If you don't explicitly ",(0,a.jsx)(e.a,{href:"#add-keys",children:"add keys"})," to it or ",(0,a.jsx)(e.a,{href:"#deploy-a-contract",children:"deploy a contract"})," on creation then it will be ",(0,a.jsx)(e.a,{href:"/zh-CN/concepts/protocol/access-keys#locked-accounts",children:"locked"}),"."]})})}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsxs)(e.h4,{id:"creating-testnet--near-accounts",children:["Creating ",(0,a.jsx)(e.code,{children:".testnet"})," / ",(0,a.jsx)(e.code,{children:".near"})," Accounts"]}),"\n",(0,a.jsx)(e.p,{children:"Accounts can only create immediate sub-accounts of themselves."}),"\n",(0,a.jsxs)(e.p,{children:["If your contract wants to create a ",(0,a.jsx)(e.code,{children:".mainnet"})," or ",(0,a.jsx)(e.code,{children:".testnet"})," account, then it needs to ",(0,a.jsx)(e.a,{href:"#function-call",children:"call"})," the ",(0,a.jsx)(e.code,{children:"create_account"})," method of ",(0,a.jsx)(e.code,{children:"near"})," or ",(0,a.jsx)(e.code,{children:"testnet"})," root contracts."]}),"\n",(0,a.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'import { NearBindgen, near, call, bytes, NearPromise } from \'near-sdk-js\'\n\nconst MIN_STORAGE: bigint = BigInt("1820000000000000000000"); //0.00182\u24c3\nconst CALL_GAS: bigint = BigInt("28000000000000");\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  create_account({account_id, public_key}:{account_id: String, public_key: String}) {\n    const args = bytes(JSON.stringify({ \n      "new_account_id": account_id,\n      "new_public_key": public_key \n    }))\n\n    NearPromise.new("testnet")\n    .functionCall("create_account", args, MIN_STORAGE, CALL_GAS);\n  }\n}\n'})})}),(0,a.jsx)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:'  use near_sdk::{near, Promise, Gas, NearToken };\n  use serde_json::json;\n\n  #[near(contract_state)]\n  #[derive(Default)]\n  pub struct Contract { }\n\n  const CALL_GAS: Gas = Gas(28_000_000_000_000);\n  const MIN_STORAGE: Balance = 1_820_000_000_000_000_000_000; //0.00182\u24c3\n\n  #[near]\n  impl Contract {\n    pub fn create_account(&self, account_id: String, public_key: String){\n      let args = json!({\n                  "new_account_id": account_id,\n                  "new_public_key": public_key,\n                }).to_string().into_bytes().to_vec();\n\n      // Use "near" to create mainnet accounts\n      Promise::new("testnet".parse().unwrap())\n      .function_call("create_account".to_string(), args, MIN_STORAGE, CALL_GAS);\n    }\n  }\n'})})})]}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"deploy-a-contract",children:"Deploy a Contract"}),"\n",(0,a.jsx)(e.p,{children:"When creating an account you can also batch the action of deploying a contract to it. Note that for this, you will need to pre-load the byte-code you want to deploy in your contract."}),"\n",(0,a.jsx)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:'  use near_sdk::{near, env, Promise, NearToken};\n\n  #[near(contract_state)]\n  #[derive(Default)]\n  pub struct Contract { }\n\n  const MIN_STORAGE: Balance = 1_100_000_000_000_000_000_000_000; //1.1\u24c3\n  const HELLO_CODE: &[u8] = include_bytes!("./hello.wasm");\n\n  #[near]\n  impl Contract {\n    pub fn create_hello(&self, prefix: String){\n      let account_id = prefix + "." + &env::current_account_id().to_string();\n      Promise::new(account_id.parse().unwrap())\n      .create_account()\n      .transfer(MIN_STORAGE)\n      .deploy_contract(HELLO_CODE.to_vec());\n    }\n  }\n'})})})}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsxs)(e.mdxAdmonitionTitle,{children:["If an account with a contract deployed does ",(0,a.jsx)(e.strong,{children:"not"})," have any access keys, this is known as a locked contract. When the account is locked, it cannot sign transactions therefore, actions can ",(0,a.jsx)(e.strong,{children:"only"})," be performed from ",(0,a.jsx)(e.strong,{children:"within"})," the contract code."]})})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"add-keys",children:"Add Keys"}),"\n",(0,a.jsxs)(e.p,{children:["When you use actions to create a new account, the created account does not have any ",(0,a.jsx)(e.a,{href:"/zh-CN/concepts/protocol/access-keys",children:"access keys"}),", meaning that it ",(0,a.jsx)(e.strong,{children:"cannot sign transactions"})," (e.g. to update its contract, delete itself, transfer money)."]}),"\n",(0,a.jsx)(e.p,{children:"There are two options for adding keys to the account:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"add_access_key"}),": adds a key that can only call specific methods on a specified contract."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"add_full_access_key"}),": adds a key that has full access to the account."]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { NearBindgen, near, call, NearPromise } from 'near-sdk-js'\nimport { PublicKey } from 'near-sdk-js/lib/types'\n\nconst MIN_STORAGE: bigint = BigInt(\"1000000000000000000000\") // 0.001\u24c3\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  create_hello({prefix, public_key}:{prefix: String, public_key: PublicKey}) {\n    const account_id = `${prefix}.${near.currentAccountId()}`\n\n    NearPromise.new(account_id)\n    .createAccount()\n    .transfer(MIN_STORAGE)\n    .addFullAccessKey(public_key)\n  }\n}\n"})})}),(0,a.jsx)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:'  use near_sdk::{near, env, Promise, Balance, PublicKey};\n\n  #[near(serializers = [json, borsh])]\n  #[derive(Default)]\n  pub struct Contract { }\n\n  const MIN_STORAGE: Balance = 1_100_000_000_000_000_000_000_000; //1.1\u24c3\n  const HELLO_CODE: &[u8] = include_bytes!("./hello.wasm");\n\n  #[near]\n  impl Contract {\n    pub fn create_hello(&self, prefix: String, public_key: PublicKey){\n      let account_id = prefix + "." + &env::current_account_id().to_string();\n      Promise::new(account_id.parse().unwrap())\n      .create_account()\n      .transfer(MIN_STORAGE)\n      .deploy_contract(HELLO_CODE.to_vec())\n      .add_full_access_key(public_key);\n    }\n  }\n'})})})]}),"\n",(0,a.jsx)(e.p,{children:'Notice that what you actually add is a "public key". Whoever holds its private counterpart, i.e. the private-key, will be able to use the newly access key.'}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsxs)(e.mdxAdmonitionTitle,{children:["If an account with a contract deployed does ",(0,a.jsx)(e.strong,{children:"not"})," have any access keys, this is known as a locked contract. When the account is locked, it cannot sign transactions therefore, actions can ",(0,a.jsx)(e.strong,{children:"only"})," be performed from ",(0,a.jsx)(e.strong,{children:"within"})," the contract code."]})})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"delete-account",children:"Delete Account"}),"\n",(0,a.jsxs)(e.p,{children:["There are two scenarios in which you can use the ",(0,a.jsx)(e.code,{children:"delete_account"})," action:"]}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["As the ",(0,a.jsx)(e.strong,{children:"last"})," action in a chain of batched actions."]}),"\n",(0,a.jsx)(e.li,{children:"To make your smart contract delete its own account."}),"\n"]}),"\n",(0,a.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { NearBindgen, near, call, NearPromise } from 'near-sdk-js'\nimport { AccountId } from 'near-sdk-js/lib/types'\n\nconst MIN_STORAGE: bigint = BigInt(\"1000000000000000000000\") // 0.001\u24c3\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  create_delete({prefix, beneficiary}:{prefix: String, beneficiary: AccountId}) {\n    const account_id = `${prefix}.${near.currentAccountId()}`\n\n    NearPromise.new(account_id)\n    .createAccount()\n    .transfer(MIN_STORAGE)\n    .deleteAccount(beneficiary)\n  }\n\n  @call({})\n  self_delete({beneficiary}:{beneficiary: AccountId}) {\n    NearPromise.new(near.currentAccountId())\n    .deleteAccount(beneficiary)\n  }\n}\n"})})}),(0,a.jsx)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:'  use near_sdk::{near, env, Promise, Neartoken, AccountId};\n\n  #[near(contract_state)]\n  #[derive(Default)]\n  pub struct Contract { }\n                            \n  const MIN_STORAGE: Balance = 1_000_000_000_000_000_000_000; //0.001\u24c3\n\n  #[near]\n  impl Contract {\n    pub fn create_delete(&self, prefix: String, beneficiary: AccountId){\n      let account_id = prefix + "." + &env::current_account_id().to_string();\n      Promise::new(account_id.parse().unwrap())\n      .create_account()\n      .transfer(MIN_STORAGE)\n      .delete_account(beneficiary);\n    }\n\n    pub fn self_delete(beneficiary: AccountId){\n      Promise::new(env::current_account_id())\n      .delete_account(beneficiary);\n    }\n  }\n'})})})]}),"\n",(0,a.jsx)(e.admonition,{title:"Token Loss",type:"warning",children:(0,a.jsx)(e.admonition,{type:"warning",children:(0,a.jsxs)(e.mdxAdmonitionTitle,{children:["Token Loss If the beneficiary account does not exist the funds will be ",(0,a.jsx)(e.a,{href:"/zh-CN/concepts/basics/token-loss",children:(0,a.jsx)(e.strong,{children:"dispersed among validators"})}),"."]})})}),"\n",(0,a.jsx)(e.admonition,{title:"Token Loss",type:"warning",children:(0,a.jsx)(e.admonition,{type:"warning",children:(0,a.jsxs)(e.mdxAdmonitionTitle,{children:["Token Loss Do ",(0,a.jsx)(e.strong,{children:"not"})," use ",(0,a.jsx)(e.code,{children:"delete"})," to try fund a new account. Since the account doesn't exist the tokens will be lost."]})})})]})}function p(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(h,{...n})}):h(n)}},85162:(n,e,t)=>{t.d(e,{Z:()=>s});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var c=t(85893);function s(n){var e=n.children,t=n.hidden,s=n.className;return(0,c.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:e})}},74866:(n,e,t)=>{t.d(e,{Z:()=>v});var a=t(67294),r=t(36905),c=t(12466),s=t(16550),o=t(20469),i=t(91980),l=t(67392),u=t(20812);function d(n){var e,t;return null!=(e=null==(t=a.Children.toArray(n).filter((function(n){return"\n"!==n})).map((function(n){if(!n||(0,a.isValidElement)(n)&&((e=n.props)&&"object"==typeof e&&"value"in e))return n;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?e:[]}function h(n){var e=n.values,t=n.children;return(0,a.useMemo)((function(){var n=null!=e?e:function(n){return d(n).map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}(t);return function(n){var e=(0,l.l)(n,(function(n,e){return n.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[e,t])}function p(n){var e=n.value;return n.tabValues.some((function(n){return n.value===e}))}function f(n){var e=n.queryString,t=void 0!==e&&e,r=n.groupId,c=(0,s.k6)(),o=function(n){var e=n.queryString,t=void 0!==e&&e,a=n.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((function(n){if(o){var e=new URLSearchParams(c.location.search);e.set(o,n),c.replace(Object.assign({},c.location,{search:e.toString()}))}}),[o,c])]}function m(n){var e,t,r,c,s=n.defaultValue,i=n.queryString,l=void 0!==i&&i,d=n.groupId,m=h(n),g=(0,a.useState)((function(){return function(n){var e,t=n.defaultValue,a=n.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(e=a.find((function(n){return n.default})))?e:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:m})})),b=g[0],_=g[1],x=f({queryString:l,groupId:d}),j=x[0],y=x[1],v=(e=function(n){return n?"docusaurus.tab."+n:null}({groupId:d}.groupId),t=(0,u.Nk)(e),r=t[0],c=t[1],[r,(0,a.useCallback)((function(n){e&&c.set(n)}),[e,c])]),N=v[0],A=v[1],k=function(){var n=null!=j?j:N;return p({value:n,tabValues:m})?n:null}();return(0,o.Z)((function(){k&&_(k)}),[k]),{selectedValue:b,selectValue:(0,a.useCallback)((function(n){if(!p({value:n,tabValues:m}))throw new Error("Can't select invalid tab value="+n);_(n),y(n),A(n)}),[y,A,m]),tabValues:m}}var g=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(85893);function x(n){var e=n.className,t=n.block,a=n.selectedValue,s=n.selectValue,o=n.tabValues,i=[],l=(0,c.o5)().blockElementScrollPositionUntilNextRender,u=function(n){var e=n.currentTarget,t=i.indexOf(e),r=o[t].value;r!==a&&(l(e),s(r))},d=function(n){var e,t=null;switch(n.key){case"Enter":u(n);break;case"ArrowRight":var a,r=i.indexOf(n.currentTarget)+1;t=null!=(a=i[r])?a:i[0];break;case"ArrowLeft":var c,s=i.indexOf(n.currentTarget)-1;t=null!=(c=i[s])?c:i[i.length-1]}null==(e=t)||e.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e),children:o.map((function(n){var e=n.value,t=n.label,c=n.attributes;return(0,_.jsx)("li",Object.assign({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:function(n){return i.push(n)},onKeyDown:d,onClick:u},c,{className:(0,r.Z)("tabs__item",b.tabItem,null==c?void 0:c.className,{"tabs__item--active":a===e}),children:null!=t?t:e}),e)}))})}function j(n){var e=n.lazy,t=n.children,r=n.selectedValue,c=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){var s=c.find((function(n){return n.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:c.map((function(n,e){return(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==r})}))})}function y(n){var e=m(n);return(0,_.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,_.jsx)(x,Object.assign({},e,n)),(0,_.jsx)(j,Object.assign({},e,n))]})}function v(n){var e=(0,g.Z)();return(0,_.jsx)(y,Object.assign({},n,{children:d(n.children)}),String(e))}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>s});var a=t(67294);const r={},c=a.createContext(r);function s(n){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),a.createElement(c.Provider,{value:e},n.children)}}}]);