"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7665],{95587:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(85893),o=t(11151);const r={id:"random",title:"Random Numbers"},s=void 0,a={id:"build/smart-contracts/security/random",title:"Random Numbers",description:"When writing smart contracts in NEAR you have access to a random seed that enables you to create random numbers/strings",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/security/random.md",sourceDirName:"2.build/2.smart-contracts/security",slug:"/build/smart-contracts/security/random",permalink:"/vi/build/smart-contracts/security/random",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/security/random.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"random",title:"Random Numbers"},sidebar:"build",previous:{title:"Reentrancy Attacks",permalink:"/vi/build/smart-contracts/security/reentrancy"},next:{title:"What are Web3 Apps?",permalink:"/vi/build/web3-apps/what-is"}},c={},d=[{value:"Gaming the Input",id:"gaming-the-input",level:2},{value:"Refusing to Mine the Block",id:"refusing-to-mine-the-block",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["When writing smart contracts in NEAR you have access to a ",(0,i.jsx)(n.code,{children:"random seed"})," that enables you to create random numbers/strings\nwithin your contract."]}),"\n",(0,i.jsxs)(n.p,{children:["This ",(0,i.jsx)(n.code,{children:"random seed"})," is ",(0,i.jsx)(n.strong,{children:"deterministic and verifiable"}),": it comes from the validator that produced the block signing the previous\nblock-hash with their private key."]}),"\n",(0,i.jsx)(n.p,{children:"The way the random seed is created implies two things:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Only the validator mining the transaction ",(0,i.jsx)(n.strong,{children:"can predict"})," which random number will come out. ",(0,i.jsx)(n.strong,{children:"No one else"})," could predict it because nobody knows the validator's private key (except the validator itself)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The validator ",(0,i.jsx)(n.strong,{children:"cannot interfere"})," with the random number being created. This is because they need to sign the previous block, over which (with a high probability) they had no control."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"However, notice that this still leaves room for three types of attacks from the validator:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/vi/build/smart-contracts/security/frontrunning",children:"Frontrunning"}),", which we cover in another page"]}),"\n",(0,i.jsx)(n.li,{children:"Gaming the input"}),"\n",(0,i.jsx)(n.li,{children:"Refusing to mine the block."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"gaming-the-input",children:"Gaming the Input"}),"\n",(0,i.jsxs)(n.p,{children:["Imagine you have a method that takes an input and gives a reward based on it. For example, you ask the user to choose a number,\nand if it the same as your ",(0,i.jsx)(n.code,{children:"random seed"})," you give them money."]}),"\n",(0,i.jsxs)(n.p,{children:["Since the validator knows which ",(0,i.jsx)(n.code,{children:"random seed"})," will come out, it can create a transaction with that specific input and win the prize."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"refusing-to-mine-the-block",children:"Refusing to Mine the Block"}),"\n",(0,i.jsx)(n.p,{children:'One way to fix the "gaming the input" problem is to force the user to send the input first, and then decide the result on a different block.\nLet\'s call these two stages: "bet" and "resolve".'}),"\n",(0,i.jsxs)(n.p,{children:["In this way, a validator cannot game the input, since the ",(0,i.jsx)(n.code,{children:"random"})," number against which it will be compared is computed in a different block."]}),"\n",(0,i.jsx)(n.p,{children:"However, something that the validator can still do to increase their chance of winning is:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Create a "bet" transaction with an account.'}),"\n",(0,i.jsx)(n.li,{children:'When it\'s their turn to validate, decide if they want to "resolve" or not.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If the validator, on their turn, sees that generating a random number makes them win, they can add the transaction to the block. And if they\nsee that they will not, they can skip the transaction."}),"\n",(0,i.jsx)(n.p,{children:"While this does not ensure that the validator will win (other good validators could mine the transaction), it can improve their chance of winning."}),"\n",(0,i.jsxs)(n.p,{children:["Imagine a flip-coin game, where you choose ",(0,i.jsx)(n.code,{children:"heads"})," or ",(0,i.jsx)(n.code,{children:"tails"}),' in the "bet" stage, and later resolve if you won or not. If you are a validator\nyou can send a first transaction choosing either input.']}),"\n",(0,i.jsxs)(n.p,{children:["Then, on your turn to validate, you can check if your chosen input came out. If not, you can simply skip the transaction. This brings your\nprobability of winning from ",(0,i.jsx)(n.code,{children:"1/2"})," to ",(0,i.jsx)(n.code,{children:"3/4"}),", that's a 25% increase!"]}),"\n",(0,i.jsx)(n.p,{children:"These odds, of course, dilute in games with more possible outcomes."}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"How does the math work here?"}),(0,i.jsxs)(n.p,{children:["Imagine you always bet for ",(0,i.jsx)(n.code,{children:"heads"}),"."]}),(0,i.jsxs)(n.p,{children:["In a fair coin-flip game you have 50-50 percent chance of winning, this is because after the coin is flipped there are two possible outcomes:\n",(0,i.jsx)(n.code,{children:"H"})," and ",(0,i.jsx)(n.code,{children:"T"}),", and you only win in one (",(0,i.jsx)(n.code,{children:"H"}),")."]}),(0,i.jsxs)(n.p,{children:["However, if you can choose to flip again if ",(0,i.jsx)(n.code,{children:"tails"})," comes out, now there are 4 scenarios: ",(0,i.jsx)(n.code,{children:"H H"})," ",(0,i.jsx)(n.code,{children:"T H"})," ",(0,i.jsx)(n.code,{children:"H T"})," ",(0,i.jsx)(n.code,{children:"T T"}),", and in 3 of those\nyou win (all the ones including an ",(0,i.jsx)(n.code,{children:"H"}),")!!!."]})]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);