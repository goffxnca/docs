"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7871],{56975:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(85893),c=a(11151);const r={},o=void 0,s={id:"build/primitives/ft/smart-contract/attach-to-call",title:"attach-to-call",description:"",source:"@site/../docs/2.build/5.primitives/ft/smart-contract/attach-to-call.md",sourceDirName:"2.build/5.primitives/ft/smart-contract",slug:"/build/primitives/ft/smart-contract/attach-to-call",permalink:"/build/primitives/ft/smart-contract/attach-to-call",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/ft/smart-contract/attach-to-call.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},i={},l=[];function d(t){const e={code:"code",pre:"pre",...(0,c.a)(),...t.components};return(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-rust",children:'#[payable]\npub fn call_with_attached_tokens(&mut self, receiver_id: AccountId, amount: U128) -> Promise {\n  assert_eq!(env::attached_deposit(), 1, "Requires attached deposit of exactly 1 yoctoNEAR");\n\n  let promise = ext(self.ft_contract.clone())\n    .with_static_gas(Gas(150*TGAS))\n    .with_attached_deposit(YOCTO_NEAR)\n    .ft_transfer_call(receiver_id, amount, None, "".to_string());\n\n  return promise.then( // Create a promise to callback query_greeting_callback\n    Self::ext(env::current_account_id())\n    .with_static_gas(Gas(100*TGAS))\n    .external_call_callback()\n  )\n}\n'})})}function u(t={}){const{wrapper:e}={...(0,c.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},11151:(t,e,a)=>{a.d(e,{Z:()=>s,a:()=>o});var n=a(67294);const c={},r=n.createContext(c);function o(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:o(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);