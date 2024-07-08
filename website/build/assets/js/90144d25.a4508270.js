"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3724],{73284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const c={id:"near-cli-rs",title:"NEAR CLI RS"},r="NEAR-CLI-RS",o={id:"tools/near-cli-rs",title:"NEAR CLI RS",description:"Quick Start Guide",source:"@site/../docs/4.tools/cli-rs.md",sourceDirName:"4.tools",slug:"/tools/near-cli-rs",permalink:"/tools/near-cli-rs",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/cli-rs.md",tags:[],version:"current",lastUpdatedBy:"solnyszczko",lastUpdatedAt:1694696323e3,frontMatter:{id:"near-cli-rs",title:"NEAR CLI RS"},sidebar:"tools",previous:{title:"NEAR CLI",permalink:"/tools/near-cli"},next:{title:"Wallet Selector",permalink:"/tools/wallet-selector"}},d={},l=[{value:"Quick Start Guide",id:"quick-start-guide",level:2},{value:"Install",id:"install",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Usage",id:"usage",level:2},{value:"Accounts",id:"accounts",level:3},{value:"Tokens",id:"tokens",level:3},{value:"Contract",id:"contract",level:3},{value:"Transaction",id:"transaction",level:3},{value:"Config",id:"config",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"near-cli-rs",children:"NEAR-CLI-RS"}),"\n",(0,s.jsx)(n.h2,{id:"quick-start-guide",children:"Quick Start Guide"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"near-cli-rs"})," tool is a human-friendly companion that helps you interact with the ",(0,s.jsx)(n.a,{href:"https://near.org/",children:"NEAR Protocol"})," from the command line. This has a guided prompt interface to help you make your own commands built in Rust."]}),"\n",(0,s.jsx)(n.admonition,{title:"note",type:"info",children:(0,s.jsxs)(n.p,{children:["This is a separate tool from ",(0,s.jsx)(n.a,{href:"https://docs.near.org/tools/near-cli",children:"near-cli"}),", a CLI tool of similar functionality without the guided prompts."]})}),"\n",(0,s.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,s.jsxs)(n.p,{children:["Download the pre-compiled version of ",(0,s.jsx)(n.code,{children:"near-cli-rs"})," for your OS from ",(0,s.jsx)(n.a,{href:"https://github.com/near/near-cli-rs/releases/",children:"GitHub Releases Page"})," or install it with ",(0,s.jsx)(n.a,{href:"https://doc.rust-lang.org/cargo/",children:"Cargo"})," (Rust's package manager tool) with the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ cargo install near-cli-rs\n"})}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.p,{children:"To utilize the commands that involve transactions, sending tokens, deploying contracts, etc., you'll have to store a full access key to a given account on your machine."}),"\n",(0,s.jsx)(n.p,{children:"Run..."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"near\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using the arrow keys navigate to..."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"account  -Manage accounts\n"})}),"\n",(0,s.jsx)(n.p,{children:"Navigate to..."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'import-account -Import existing account (a.k.a. "sign-in")\n'})}),"\n",(0,s.jsx)(n.p,{children:"choose any of the preferred sign-in methods. For this example, we'll choose the..."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'using-web-wallet -Import existing account using NEAR Wallet (a.k.a. "sign in")\n### Account\n- Gives you information on a specified account, near balance, storage, list of access keys, etc.\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For this tutorial select ",(0,s.jsx)(n.code,{children:"testnet"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"What is the name of the network?\nmainnet\n>testnet\nshardnet\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You'll get redirected to ",(0,s.jsx)(n.code,{children:"wallet.testnet.near.org"}),". Once there, grant authorization. Then in your terminal, you'll be asked to enter your account ID. Give it the name of the account you just authorized access to and a full access key."]}),"\n",(0,s.jsxs)(n.p,{children:["If you're on Mac you'll have the option to use the ",(0,s.jsx)(n.a,{href:"https://support.apple.com/guide/keychain-access/what-is-keychain-access-kyca1083/mac",children:"Mac Keychain"})," option."]}),"\n",(0,s.jsxs)(n.p,{children:["Either storage option is fine. Using the legacy storage option will save a file in your root directory in a hidden folder called ",(0,s.jsx)(n.code,{children:"./near-credentials"}),". This storage option is compatable with the ",(0,s.jsx)(n.code,{children:"near-cli"})," tool (a cli tool without the guided prompts but similar functionality)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Good Job!"}),"\nNow you can use ",(0,s.jsx)(n.code,{children:"near-cli-rs"})," to it's full capacity."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["To use the ",(0,s.jsx)(n.code,{children:"near-cli-rs"})," simply run the following in your terminal."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ near\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You should then see the following. Use the arrow keys and hit ",(0,s.jsx)(n.code,{children:"enter"})," or simply type out one of the available options to select an option"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(36538).Z+"",width:"2212",height:"398"})}),"\n",(0,s.jsx)(n.h3,{id:"accounts",children:"Accounts"}),"\n",(0,s.jsx)(n.p,{children:"This option will allow you to manage, control, and retrieve information on your accounts."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"view-account-summary"})}),(0,s.jsx)(n.td,{children:"View properties for an account"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"import-account"})}),(0,s.jsx)(n.td,{children:'Import existing account (a.k.a. "sign in")'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"create-account"})}),(0,s.jsx)(n.td,{children:"Create a new account"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"delete-account"})}),(0,s.jsx)(n.td,{children:"Delete an Account"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"list-keys"})}),(0,s.jsx)(n.td,{children:"View a list of keys for an account"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"add-key"})}),(0,s.jsx)(n.td,{children:"Add an access key to an account"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"delete-key"})}),(0,s.jsx)(n.td,{children:"Delete an access key from an account"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"tokens",children:"Tokens"}),"\n",(0,s.jsx)(n.p,{children:"This will allow you to manage your token assets such as NEAR, FTs and NFTs"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"send-near"})}),(0,s.jsx)(n.td,{children:"Transfers NEAR to a specified recipient in units of NEAR or yoctoNEAR"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"send-ft"})}),(0,s.jsx)(n.td,{children:"Transfer Fungible Tokens to a specified user"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"send-nft"})}),(0,s.jsx)(n.td,{children:"Transfers NFTs between accounts"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"view-near-balance"})}),(0,s.jsx)(n.td,{children:"View the balance of NEAR tokens"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"view-ft-balance"})}),(0,s.jsx)(n.td,{children:"View the balance of Fungible Tokens"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"view-nft-assets"})}),(0,s.jsx)(n.td,{children:"View the balance of NFT Tokens"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"contract",children:"Contract"}),"\n",(0,s.jsx)(n.p,{children:"This option allows you to manage and interact with your smart contracts"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"call-function"})}),(0,s.jsx)(n.td,{children:"Execute Function"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"deploy"})}),(0,s.jsx)(n.td,{children:"Add a new contract code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"download-wasm"})}),(0,s.jsx)(n.td,{children:"Download Wasm"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"transaction",children:"Transaction"}),"\n",(0,s.jsx)(n.p,{children:"Operate Transactions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"view-status"})}),(0,s.jsx)(n.td,{children:"View a transaction status"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"construct-tansaction"})}),(0,s.jsx)(n.td,{children:"Construct a new transaction"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,s.jsxs)(n.p,{children:["Manage the connection parameters inside the ",(0,s.jsx)(n.code,{children:"config.toml"})," file for ",(0,s.jsx)(n.code,{children:"near-cli-rs"})]}),"\n",(0,s.jsx)(n.p,{children:"This will allow you to change or modify the network connections for your CLI."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"show-connections"})}),(0,s.jsx)(n.td,{children:"Show a list of network connections"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"add-connection"})}),(0,s.jsx)(n.td,{children:"Add a network connection"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"delete-connection"})}),(0,s.jsx)(n.td,{children:"Delete a network Connection"})]})]})]}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},36538:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/near-cli-rs-5423df8244ce033a1b11a9e652f18532.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(67294);const i={},c=s.createContext(i);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);