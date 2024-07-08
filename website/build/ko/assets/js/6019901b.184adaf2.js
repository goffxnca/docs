(self.webpackChunk=self.webpackChunk||[]).push([[420],{43677:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(85893),o=t(11151);t(2154);const s={id:"ethers-js-best-practices",title:"Best Practices for Ethereum developers on NEAR"},i=void 0,r={id:"tutorials/near-components/ethers-js-best-practices",title:"Best Practices for Ethereum developers on NEAR",description:"In this example, we will create an Ethereum dApp on NEAR that functions as a portfolio manager, displaying the current balances for a list of tokens. Additionally, we will display current market value of each asset in the portfolio.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/near-components/bos-ethersjs-best-practices.md",sourceDirName:"3.tutorials/near-components",slug:"/tutorials/near-components/ethers-js-best-practices",permalink:"/ko/tutorials/near-components/ethers-js-best-practices",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/near-components/bos-ethersjs-best-practices.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,frontMatter:{id:"ethers-js-best-practices",title:"Best Practices for Ethereum developers on NEAR"},sidebar:"tutorials",previous:{title:"NEAR for Ethereum developers",permalink:"/ko/tutorials/near-components/ethers-js"},next:{title:"Lido \uc608\uc2dc",permalink:"/ko/tutorials/near-components/lido"}},c={},d=[{value:"Step 1: Load balances from chain",id:"step-1-load-balances-from-chain",level:2},{value:"Source code",id:"source-code",level:3},{value:"Step 2: Load static data",id:"step-2-load-static-data",level:2},{value:"Step 3. Save data in social-db",id:"step-3-save-data-in-social-db",level:2},{value:"Step 4. Caching Data Through GitHub Actions",id:"step-4-caching-data-through-github-actions",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In this example, we will create an Ethereum dApp on NEAR that functions as a portfolio manager, displaying the current balances for a list of tokens. Additionally, we will display current market value of each asset in the portfolio."}),"\n",(0,a.jsx)(n.p,{children:"We will be using several technologies:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"NEAR Components for the user interface (UI)."}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/ko/tutorials/near-components/ethers-js",children:"Ethers.js"})," for retrieving balance data from the blockchain."]}),"\n",(0,a.jsx)(n.li,{children:"CoinGecko API for fetching static content with information about tokens and their current prices."}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../../social/contract.md",children:"Social-DB"})," for storing the list of tokens to be tracked."]}),"\n",(0,a.jsx)(n.li,{children:"GitHub Actions for caching static content, speeding up loading, and circumventing rate limits."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"step-1-load-balances-from-chain",children:"Step 1: Load balances from chain"}),"\n",(0,a.jsx)(n.p,{children:"Let's start with a simple example and consider an application where we want to display a user's balances for multiple tokens."}),"\n",(0,a.jsx)(n.h3,{id:"source-code",children:"Source code"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// Load current sender address if it was not loaded yet\nif (state.sender == undefined && Ethers.provider()) {\n  Ethers.provider()\n    .send("eth_requestAccounts", [])\n    .then((accounts) => {\n      if (accounts.length) {\n        // save sender address to the state\n        State.update({ sender: accounts[0] });\n      }\n    });\n}\n\n// Load ERC20 ABI JSON\nconst erc20Abi = fetch(\n  "https://ipfs.near.social/ipfs/bafkreifgw34kutqcnusv4yyv7gjscshc5jhrzw7up7pdabsuoxfhlnckrq"\n);\nif (!erc20Abi.ok) {\n  return "Loading";\n}\n\n// Create contract interface\nconst iface = new ethers.utils.Interface(erc20Abi.body);\n\n// specify list of tokens\nconst tokens = [\n  "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", // WBTC\n  "0x6b175474e89094c44da98b954eedeac495271d0f", // DAI\n  "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", // UNI\n];\n\n// load receiver\'s balance for a giver token\nconst getTokenBalance = (receiver, tokenId) => {\n  // encode `balanceOf` request\n  const encodedData = iface.encodeFunctionData("balanceOf", [receiver]);\n\n  // send request to the network\n  return Ethers.provider()\n    .call({\n      to: tokenId,\n      data: encodedData,\n    })\n    .then((rawBalance) => {\n      // decode response\n      const receiverBalanceHex = iface.decodeFunctionResult(\n        "balanceOf",\n        rawBalance\n      );\n\n      return Big(receiverBalanceHex).toFixed(0);\n    });\n};\n\nconst loadTokensData = () => {\n  // load balances of all tokens\n  tokens.map((tokenId) => {\n    getTokenBalance(state.sender, tokenId).then((value) => {\n      // save balance of every token to the state\n      State.update({ [tokenId]: { balance: value, ...state[tokenId] } });\n    });\n  });\n};\n\nconst renderToken = (tokenId) => (\n  <li>\n    {tokenId}: {state[tokenId].balance}\n  </li>\n);\n\nif (state.sender) {\n  loadTokensData();\n\n  return (\n    <>\n      <ul>{tokens.map((tokenId) => renderToken(tokenId))}</ul>\n      <p>Your account: {state.sender} </p>\n    </>\n  );\n} else {\n  // output connect button for anon user\n  return <Web3Connect />;\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can see how it works here: ",(0,a.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=zavodil.near/widget/token-balances-step-1%5C&tab=source",children:"step_1"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Once the web3 connection is enabled, the output will appear as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599: 726220\n0x6b175474e89094c44da98b954eedeac495271d0f: 140325040242585301886\n0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984: 127732731780832810\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["When developing NEAR components, it's recommended to always present some content even if the user hasn't connected their wallet yet. In this example, the component uses the ",(0,a.jsx)(n.code,{children:"<Web3Connect>"})," button to prompt the user to connect their wallet if they haven't already."]})}),"\n",(0,a.jsx)(n.h2,{id:"step-2-load-static-data",children:"Step 2: Load static data"}),"\n",(0,a.jsx)(n.p,{children:"To format the list, we must determine the decimal precision for each asset. While it's possible to retrieve this information from the ERC-20 contract for each token, it's important to note that the ERC-20 contract lacks certain valuable data such as the token icon and description. As a solution, we can leverage the CoinGecko API to retrieve token details, including the current market price."}),"\n",(0,a.jsx)(n.p,{children:"Let's add a function to load token data for a given token from the Coingecko:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const loadCoingeckData = (tokenId) => {\n    let dataUrl = `https://api.coingecko.com/api/v3/coins/ethereum/contract/${tokenId}`;\n\n    const data = fetch(dataUrl);\n    if (data.ok) {\n        return {\n            name: data.body.name,\n            icon: data.body.image.small,\n            decimals: data.body.detail_platforms["ethereum"].decimal_place,\n            price: Number(data.body.market_data.current_price.usd),\n        };\n    }\n};\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Other available API methods are listed in the ",(0,a.jsx)(n.a,{href:"https://www.coingecko.com/en/api",children:"Coingecko API documentation"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Now that we have the data, let's modify the loadTokensData function to save the token information in the state:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const loadTokensData = () => {\n  // load balances of all tokens\n  tokens.map((tokenId) => {\n    getTokenBalance(state.sender, tokenId).then((value) => {\n      // save balance of every token to the state\n      State.update({ [tokenId]: { balance: value, ...state[tokenId] } });\n    });\n  });\n\n  tokens.map((tokenId) => {\n    const tokenData = loadCoingeckData(tokenId);\n    // save balance of every token to the state\n    State.update({ [tokenId]: { ...tokenData, ...state[tokenId] } });\n  });\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["And lets update the ",(0,a.jsx)(n.code,{children:"renderToken"})," function to display data we just got:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const renderToken = (tokenId) => {\n  const tokenBalance = Big(state[tokenId].balance ?? 0)\n    .div(new Big(10).pow(state[tokenId].decimals ?? 1))\n    .toFixed(4);\n  const tokenBalanceUSD = (tokenBalance * state[tokenId].price).toFixed(2);\n  return (\n    <li>\n      {state[tokenId].name}: {tokenBalance}{" "}\n      <img src={state[tokenId].icon} width="16" alt={state[tokenId].symbol} />\n      {`(${tokenBalanceUSD} USD)`}\n    </li>\n  );\n};\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can see how it works here: ",(0,a.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=zavodil.near/widget/token-balances-step-2%5C&tab=source",children:"step_2"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Output will be like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Wrapped Bitcoin: 0.0073 wbtc (247.64 USD)\nDai: 140.3250 dai (140.21 USD)\nUniswap: 0.1277 uni (0.54 USD)\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Please note that the ",(0,a.jsx)(n.code,{children:"fetch"})," function caches data and will be executed only once during loading."]})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Utilize any available web-services to provide data for your application on NEAR, ensuring that the user experience is on par with traditional web 2.0 applications."})}),"\n",(0,a.jsx)(n.h2,{id:"step-3-save-data-in-social-db",children:"Step 3. Save data in social-db"}),"\n",(0,a.jsx)(n.p,{children:"Now, instead of hardcoding the list of tokens directly within the application code, let's transition them to an onchain data repository named social-db. This approach allows us to adjust the list of trackable tokens without having to modify the application's code. It also offers users the flexibility to select from pre-existing token lists or formulate their own."}),"\n",(0,a.jsxs)(n.p,{children:["Learn more about how ",(0,a.jsx)(n.a,{href:"https://github.com/NearSocial/social-db/blob/master/README.md",children:"key-value storage social-db works"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Here is an example of a simple application for ",(0,a.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=zavodil.near/widget/tokens-db%5C&tab=source",children:"setting tokens list in social-db"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"In this format, the data from the example will be stored in social-db."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n"0x6b175474e89094c44da98b954eedeac495271d0f": "",\n"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": "",\n"0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984": ""\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Viewing this data from the blockchain is accessible for every NEAR app or, for example, through an ",(0,a.jsx)(n.a,{href:"https://dev.near.org/zavodil.near/widget/Explorer?path=zavodil.near/tokens-db/**",children:"Explorer app"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Let's add a function to our application that will read the list of tokens."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// set list of tokens\nif (!state.tokensLoaded) {\n    // load tokens list from the Social DB\n    const tokens = Social.get(`zavodil.near/tokens-db/*`, "final");\n\n    if (tokens) {\n        State.update({\n            tokensLoaded: true,\n            tokens,\n        });\n    }\n}\n\nconst tokens = Object.keys(state.tokens ?? {});\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["In this case, ",(0,a.jsx)(n.code,{children:"zavodil.near"})," is the NEAR account of the user who created this list of tokens. Any other user can create their own list, and it will also be available in ",(0,a.jsx)(n.code,{children:"social-db"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["You can see how it works here: ",(0,a.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=zavodil.near/widget/token-balances-step-3%5C&tab=source",children:"step_3"}),". The output of the data in the application remains unchanged, but now it no longer contains hardcoded values."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Use social-db, an on-chain data storage, to decouple the data and the application."})}),"\n",(0,a.jsx)(n.h2,{id:"step-4-caching-data-through-github-actions",children:"Step 4. Caching Data Through GitHub Actions"}),"\n",(0,a.jsx)(n.p,{children:"Ethereum-based applications frequently depend on static content sources to present details about tokens or contracts. Often, frontends pull this data from platforms like CoinGecko or CoinMarketCap, leveraging API keys to enhance the data retrieval rate limit. Without these API keys, and given a significant volume of data, fetching from these platforms can be sluggish or even disrupted. We'll showcase a serverless approach utilizing GitHub Actions. This method preserves the decentralized nature of NEAR gateways (where securely storing API keys isn't feasible), all while ensuring user ease-of-use and swift data loading."}),"\n",(0,a.jsxs)(n.p,{children:["Let's create a Node.js application that will iterate through a list of tokens from ",(0,a.jsx)(n.code,{children:"social-db"})," and display the retrieved data along with a timestamp of the operation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import * as nearAPI from "near-api-js";\nimport * as cg from "coingecko-api-v3";\n\nconst CONTRACT_ID = "social.near";\nconst ETHEREUM_NETWORK_ID = "ethereum";\nconst FETCH_TIMEOUT = 7000;\n\nasync function connect() {\n    const config = {\n        networkId: "mainnet",\n        keyStore: new nearAPI.keyStores.InMemoryKeyStore(),\n        nodeUrl: "https://rpc.mainnet.near.org",\n        walletUrl: "https://wallet.mainnet.near.org",\n        helperUrl: "https://helper.mainnet.near.org",\n        explorerUrl: "https://nearblocks.io",\n    };\n    const near = await nearAPI.connect(config);\n    const account = await near.account(CONTRACT_ID);\n\n    const contract = new nearAPI.Contract(\n        account, // the account object that is connecting\n        CONTRACT_ID, // name of contract you\'re connecting to\n        {\n            viewMethods: ["get"], // view methods do not change state but usually return a value\n            changeMethods: [], // change methods modify state\n            sender: account, // account object to initialize and sign transactions.\n        }\n    );\n\n    return contract;\n}\n\n// load data from the social-db\nconst contract = await connect();\nconst data = await contract.get({ keys: ["zavodil.near/tokens-db/*"] });\nconst tokens = data["zavodil.near"]["tokens-db"];\n\n// init coingecko client\nconst client = new cg.CoinGeckoClient({\n    timeout: 5000,\n    autoRetry: false,\n});\n\nlet res = {};\nfor (let i = 0; i < Object.keys(tokens).length; i++) {\n    const tokenId = Object.keys(tokens)[i];\n\n    try {\n        // load data from coingecko\n        const data = await client.contract({\n            id: ETHEREUM_NETWORK_ID,\n            contract_address: tokenId,\n        });\n        // format output\n        const tokenData = {\n            name: data["name"],\n            symbol: data["symbol"],\n            icon: data["image"]?.["thumb"],\n            decimals: data["detail_platforms"]?.[ETHEREUM_NETWORK_ID]?.["decimal_place"],\n            price: data["market_data"]?.["current_price"]?.["usd"],\n        };\n        // store output\n        res[tokenId] = tokenData;\n\n        // add timeout to avoid rate limits\n        await new Promise((resolve) => {\n            setTimeout(resolve, FETCH_TIMEOUT);\n        });\n    } catch (ex) {\n        console.error(tokenId, ex)\n    }\n}\n\n// output results\nconsole.log(\n    JSON.stringify({\n        timestamp: Date.now(),\n        data: res,\n    })\n);\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Example ",(0,a.jsx)(n.a,{href:"https://github.com/zavodil/tokens-db/",children:"of this code on a github"}),",  you can clone the repository and modify the data retrieval request as needed."]}),"\n",(0,a.jsxs)(n.p,{children:["Now, we can create a GitHub worker that will execute this script and save the data to a file named ",(0,a.jsx)(n.code,{children:"tokens-db.json"}),". Here are the instructions for the worker:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"name: Tokens Data Updater\non:\n  workflow_dispatch:\n  schedule:\n    - cron:  '*/15 * * * *'\n\njobs:\n  updateStats:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Prepare        \n        uses: actions/setup-node@v3\n        with:\n            node-version: 16\n      - run: npm i      \n      - name: Tokens Data\n        run: node load > tokens-db.json              \n        env:\n          EXPORT_MODE: CS\n      - uses: EndBug/add-and-commit@v9 \n        with: \n          author_name: \"Tokens Data Updater\"\n          add: 'tokens-db.json --force'\n          message: \"Tokens Data fetching\"\n"})}),"\n",(0,a.jsx)(n.p,{children:"Don't forget to grant the worker the necessary permissions to add files to your repository (Open GitHub Repository: Settings->Actions->General)"}),"\n",(0,a.jsxs)(n.p,{children:["The output of this worker will be the ",(0,a.jsx)(n.a,{href:"https://raw.githubusercontent.com/zavodil/tokens-db/main/tokens-db.json",children:"tokens-db.json"})," file which will be regularly updated with current data. You can easily add any private API keys required for bypassing rate limits in the worker."]}),"\n",(0,a.jsx)(n.p,{children:"Now, let's get back to the NEAR application. We need to modify the code to read data from the cached file created by GitHub Actions instead of fetching it from CoinGecko every time."}),"\n",(0,a.jsxs)(n.p,{children:["To do this, we'll make changes to the ",(0,a.jsx)(n.code,{children:"loadTokensData"})," function:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const loadTokensData = () => {\n    let cacheTokenData = {};\n    // load data generated by github action\n    const cachedData = fetch(\n        `https://raw.githubusercontent.com/zavodil/tokens-db/main/tokens-db.json`\n    );\n    if (cachedData.ok) {\n        const cache = JSON.parse(cachedData.body);\n        const cacheDate = new Date(cache.timestamp);\n        const timeDifference = Date.now() - cacheDate.getTime();\n        if (timeDifference <= 30 * 60 * 1000) {  // use cached data if it is not outdated (30 min)\n            cacheTokenData = cache.data;\n        }\n\n        tokens.map((tokenId) => {\n            const tokenData = cacheTokenData.hasOwnProperty(tokenId)\n                ? cacheTokenData?.[tokenId]\n                : // load data from coingecko if we don't have cached data only\n                loadCoingeckData(tokenId);\n            // save balance of every token to the state\n            State.update({ [tokenId]: { ...tokenData, ...state[tokenId] } });\n        });\n    }\n};\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can see how it works here: ",(0,a.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=zavodil.near/widget/token-balances-step-4%5C&tab=source",children:"step_4"}),". The output of the data in the application remains the same, but now it operates more efficiently."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Use GitHub Actions as a serverless backend for securing API keys, caching data etc."})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},2154:(e,n,t)=>{"use strict";t.d(n,{W:()=>i});var a=t(67294),o=t(91262),s=t(85893);function i(e){var n=e.children,i=e.id,r=void 0===i?1:i,c=e.networkId,d=void 0===c?"testnet":c,l=e.height,h=void 0===l?"160px":l;return(0,s.jsx)(o.Z,{fallback:(0,s.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{n.length||(n=[n]),e=n[0].props.children.props.children}catch(k){}var o=t(58613),i=o.Widget,c=o.useInitNear,l=t(2302).ZP,p=(0,a.useState)(e),u=p[0],f=p[1],m=c().initNear;return(0,a.useEffect)((function(){m&&m({networkId:d,selector:new Promise((function(){}))})}),[m]),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"monaco",children:(0,s.jsx)(l,{height:h,value:u,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return f(e)}})}),(0,s.jsx)("div",{className:"code_iframe",children:(0,s.jsx)("div",{className:"bootstrap-scope",children:(0,s.jsx)("div",{className:"vm-widget",children:(0,s.jsx)(i,{code:u},r)})})}),n[1]]})}})}},24654:()=>{},55024:()=>{},15861:(e,n,t)=>{"use strict";function a(e,n,t,a,o,s,i){try{var r=e[s](i),c=r.value}catch(d){return void t(d)}r.done?n(c):Promise.resolve(c).then(a,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,s){var i=e.apply(n,t);function r(e){a(i,o,s,r,c,"next",e)}function c(e){a(i,o,s,r,c,"throw",e)}r(void 0)}))}}t.d(n,{Z:()=>o})},11151:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r,a:()=>i});var a=t(67294);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);