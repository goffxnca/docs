(self.webpackChunk=self.webpackChunk||[]).push([[5093],{21140:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(85893),o=t(11151);t(2154);const a={id:"ethers-js",title:"NEAR for Ethereum developers"},s=void 0,i={id:"tutorials/near-components/ethers-js",title:"NEAR for Ethereum developers",description:"NEAR components are chain-agnostic, enabling you to create decentralized frontends tailored for any Ethereum dApps. Throughout this article, we'll navigate prevalent use-cases with code snippets. You\u2019ll also find links to exemplary NEAR components for reference.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/near-components/bos-ethersjs.md",sourceDirName:"3.tutorials/near-components",slug:"/tutorials/near-components/ethers-js",permalink:"/vi/tutorials/near-components/ethers-js",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/near-components/bos-ethersjs.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"ethers-js",title:"NEAR for Ethereum developers"},sidebar:"tutorials",previous:{title:"WebSockets & QueryAPI",permalink:"/vi/tutorials/near-components/queryapi-websockets"},next:{title:"Best Practices for Ethereum developers on NEAR",permalink:"/vi/tutorials/near-components/ethers-js-best-practices"}},c={},l=[{value:"Interact with Ethereum using Ethers.js",id:"interact-with-ethereum-using-ethersjs",level:2},{value:"Example showing the difference between <code>Ethers.provider()</code> and <code>ethers.utils</code>:",id:"example-showing-the-difference-between-ethersprovider-and-ethersutils",level:4},{value:"FAQ",id:"faq",level:2},{value:"How to get a user account?",id:"how-to-get-a-user-account",level:3},{value:"How to get the current chain ID?",id:"how-to-get-the-current-chain-id",level:3},{value:"How to show a Web3Login button?",id:"how-to-show-a-web3login-button",level:3},{value:"How to load a contract ABI?",id:"how-to-load-a-contract-abi",level:3},{value:"How to load data from EVM nodes?",id:"how-to-load-data-from-evm-nodes",level:3},{value:"How to send a transaction to Ethereum nodes?",id:"how-to-send-a-transaction-to-ethereum-nodes",level:3},{value:"How to convert HEX values to human readable numbers?",id:"how-to-convert-hex-values-to-human-readable-numbers",level:3},{value:"How to locate the ABI of a Smart Contract?",id:"how-to-locate-the-abi-of-a-smart-contract",level:3},{value:"Is there an example of applications with a description of how they were created?",id:"is-there-an-example-of-applications-with-a-description-of-how-they-were-created",level:3},{value:"Examples",id:"examples",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"NEAR components are chain-agnostic, enabling you to create decentralized frontends tailored for any Ethereum dApps. Throughout this article, we'll navigate prevalent use-cases with code snippets. You\u2019ll also find links to exemplary NEAR components for reference."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"interact-with-ethereum-using-ethersjs",children:"Interact with Ethereum using Ethers.js"}),"\n",(0,r.jsxs)(n.p,{children:["The NEAR VM has imported the ",(0,r.jsx)(n.a,{href:"https://docs.ethers.org/",children:"Ethers.js"})," library, allowing for seamless interaction with Ethereum nodes using JavaScript in a NEAR component."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Ethers"})," object exposes the provider connection:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Ethers.provider()"})," is a read-only connection to the blockchain, which allows querying the blockchain state (e.g., account, block or transaction details), querying event logs or evaluating read-only code using call.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Ethers.provider().getSigner()"})," abstracts the class that interacts with an account","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Ethers.provider().getSigner().getBalance()"})," returns a Promise that resolves to the account address."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Ethers.provider().getBlockNumber()"})," looks up the current block number (i.e. height)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Ethers.provider().getFeeData()"})," gets the best guess at the recommended FeeData"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can see various ways of using ",(0,r.jsx)(n.code,{children:"Ethers"})," objects on the ",(0,r.jsx)(n.a,{href:"https://docs.ethers.org/",children:"Ethers documentation portal"}),")."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["Furthermore, numerous ",(0,r.jsx)(n.a,{href:"https://docs.ethers.org/v6/api/utils/",children:"basic tools"}),"  can be found in the ethers.utils object (be aware of the lowercase 'e')."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ethers.utils.parseUnits(value, unit)"}),' converts the decimal string value to a BigInt, assuming unit decimal places. The unit may the number of decimal places or the name of a unit (e.g. "gwei" for 9 decimal places).']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ethers.utils.formatEther(wei)"})," converts value into a decimal string using 18 decimal places."]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"example-showing-the-difference-between-ethersprovider-and-ethersutils",children:["Example showing the difference between ",(0,r.jsx)(n.code,{children:"Ethers.provider()"})," and ",(0,r.jsx)(n.code,{children:"ethers.utils"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'    Ethers.provider()\n        .getSigner()\n        .getBalance()\n        .then((balance) => {\n            console.log("Your ETH balance: ", ethers.utils.formatEther(balance))\n        });\n'})}),"\n",(0,r.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h3,{id:"how-to-get-a-user-account",children:"How to get a user account?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const receiver = Ethers.provider().send("eth_requestAccounts", [])[0];\n'})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-get-the-current-chain-id",children:"How to get the current chain ID?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"Ethers.provider().getNetwork().then((chainIdData) => {\n    console.log(chainIdData.chainId);\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-show-a-web3login-button",children:"How to show a Web3Login button?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'<Web3ConnectButton \n    className="my-class" \n    connectLabel="Connect Web3 Wallet" \n    disconnectLabel="Disconnect Web3 Wallet"\n    connectingLabel="Connecting..." \n/>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-load-a-contract-abi",children:"How to load a contract ABI?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const abi = fetch(`https://eth.blockscout.com/api?module=contract&action=getabi&address=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2`);\n\nif (!abi.ok) {\n    return "Loading";\n}\n\nconsole.log(abi.body.result);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-load-data-from-evm-nodes",children:"How to load data from EVM nodes?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'// create a contract interface\nconst iface = new ethers.utils.Interface(abi.body.result);\n\n// encode the balanceOf get request\nconst encodedBalanceData = iface.encodeFunctionData("balanceOf", [receiver]);\n\n// perform a call\nEthers.provider().call({\n    to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n    data: encodedBalanceData,\n})\n.then((rawBalance) => {\n    // decode the result\n    const receiverBalanceHex = iface.decodeFunctionResult(\n        "balanceOf",\n        rawBalance\n    );\n    console.log(Big(receiverBalanceHex).toFixed());\n});\n'})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-send-a-transaction-to-ethereum-nodes",children:"How to send a transaction to Ethereum nodes?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'// create a contract instance\nconst wEthContract = new ethers.Contract(\n    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n    abi.body.result,\n    Ethers.provider().getSigner()\n);\n\n// perform a given method (withdraw in this case)\nwEthContract\n    .withdraw(balance, {\n        value: 0\n    })\n    .then((transactionHash) => {\n        console.log(transactionHash);\n    });\n'})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-convert-hex-values-to-human-readable-numbers",children:"How to convert HEX values to human readable numbers?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// use Big().toFixed method\n\nBig(balanceHex).toFixed()\n"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-locate-the-abi-of-a-smart-contract",children:"How to locate the ABI of a Smart Contract?"}),"\n",(0,r.jsx)(n.p,{children:"Utilize platforms like etherscan.com and blockscout.com, or delve into the project's GitHub repositories and documentation."}),"\n",(0,r.jsx)(n.h3,{id:"is-there-an-example-of-applications-with-a-description-of-how-they-were-created",children:"Is there an example of applications with a description of how they were created?"}),"\n",(0,r.jsxs)(n.p,{children:["Yes, there is an article that describes ",(0,r.jsx)(n.a,{href:"/vi/tutorials/near-components/ethers-js-best-practices",children:"best practices for creating applications for Ethereum developers on NEAR"}),", with a breakdown of individual steps."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Below is a curated list of NEAR components, developed by the community, that epitomize the best practices for creating NEAR components:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=zavodil.near/widget/unwrap-weth&tab=source",children:"Unwrap ETH"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=zavodil.near/widget/erc20-sender&tab=source",children:"ERC-20 Token sender"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=zavodil.near/widget/Lido&tab=source",children:"Lido Component"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=zavodil.near/widget/swap&tab=source",children:"Swap component"})," (a set of swap dApps for Ethereum Mainnet, Polygon Mainnet, Polygon zkevm, Aurora, NEAR, etc)"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://near.org#/near/widget/ComponentDetailsPage?src=chanon.near/widget/1inch",children:"1inch"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=garlicfaucet.near/widget/liquityWidget",children:"Liquity"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2154:(e,n,t)=>{"use strict";t.d(n,{W:()=>s});var r=t(67294),o=t(91262),a=t(85893);function s(e){var n=e.children,s=e.id,i=void 0===s?1:s,c=e.networkId,l=void 0===c?"testnet":c,d=e.height,h=void 0===d?"160px":d;return(0,a.jsx)(o.Z,{fallback:(0,a.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{n.length||(n=[n]),e=n[0].props.children.props.children}catch(x){}var o=t(58613),s=o.Widget,c=o.useInitNear,d=t(2302).ZP,u=(0,r.useState)(e),p=u[0],m=u[1],g=c().initNear;return(0,r.useEffect)((function(){g&&g({networkId:l,selector:new Promise((function(){}))})}),[g]),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"monaco",children:(0,a.jsx)(d,{height:h,value:p,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return m(e)}})}),(0,a.jsx)("div",{className:"code_iframe",children:(0,a.jsx)("div",{className:"bootstrap-scope",children:(0,a.jsx)("div",{className:"vm-widget",children:(0,a.jsx)(s,{code:p},i)})})}),n[1]]})}})}},24654:()=>{},55024:()=>{},15861:(e,n,t)=>{"use strict";function r(e,n,t,r,o,a,s){try{var i=e[a](s),c=i.value}catch(l){return void t(l)}i.done?n(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var s=e.apply(n,t);function i(e){r(s,o,a,i,c,"next",e)}function c(e){r(s,o,a,i,c,"throw",e)}i(void 0)}))}}t.d(n,{Z:()=>o})},11151:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);