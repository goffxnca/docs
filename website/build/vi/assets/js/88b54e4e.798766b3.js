"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3503],{62681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(85893),s=n(11151);const r={},i="Marketplace Frontend",o={id:"tutorials/templates/marketplace",title:"Marketplace Frontend",description:"Demo",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/templates/marketplace.md",sourceDirName:"3.tutorials/templates",slug:"/tutorials/templates/marketplace",permalink:"/vi/tutorials/templates/marketplace",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/templates/marketplace.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{},sidebar:"tutorials",previous:{title:"NFT minter",permalink:"/vi/tutorials/templates/minter"},next:{title:"Onchain Blog",permalink:"/vi/tutorials/templates/blog"}},c={},l=[{value:"Project Walkthrough",id:"project-walkthrough",level:2},{value:"Setup",id:"setup",level:3},{value:"Step 1: Connect Wallet",id:"step-1-connect-wallet",level:3},{value:"Step 2: Get NFTs from Store",id:"step-2-get-nfts-from-store",level:3},{value:"Step 3: Get Store Data",id:"step-3-get-store-data",level:3},{value:"Step 4: Get Metadata from an NFT",id:"step-4-get-metadata-from-an-nft",level:3},{value:"Step 5: Get Current NEAR Price",id:"step-5-get-current-near-price",level:3},{value:"Step 6: Execute the Contract Call - Buy",id:"step-6-execute-the-contract-call---buy",level:3},{value:"Set ENV variables",id:"set-env-variables",level:2},{value:"Extending",id:"extending",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"marketplace-frontend",children:"Marketplace Frontend"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://marketplace-template.mintbase.xyz/",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/Demo-Visit%20Demo-brightgreen",alt:"Demo"})}),"\n",(0,a.jsx)(t.a,{href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMintbase%2Ftemplates%2Ftree%2Fmain%2Fmarketplace",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/Deploy-on%20Vercel-blue",alt:"Deploy"})})]}),"\n",(0,a.jsx)(t.p,{children:"Unlock Your NFT Storefront: Clone & Customize Your Path to Blockchain Success with this whitelabel marketplace template!"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://i.imgur.com/FjcUss9.png",alt:"img"})}),"\n",(0,a.jsx)(t.admonition,{title:"Mintbase Templates",type:"tip",children:(0,a.jsxs)(t.p,{children:["This is part of the ",(0,a.jsx)(t.a,{href:"https://templates.mintbase.xyz/",children:"Mintbase Templates"}),", a collection of templates that you can use to scaffold your own project"]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"project-walkthrough",children:"Project Walkthrough"}),"\n",(0,a.jsxs)(t.p,{children:["This guide will take you step by step through the process of creating a basic marketplace frontend where you can purchase tokens and filter your selection by store. It uses ",(0,a.jsx)(t.a,{href:"https://docs.mintbase.xyz/dev/mintbase-sdk-ref/data",children:"mintbase-js/data"})," for retrieving data and ",(0,a.jsx)(t.a,{href:"https://docs.mintbase.xyz/dev/mintbase-sdk-ref/sdk",children:"mintbase-js/sdk"})," for executing marketplace methods on the ",(0,a.jsx)(t.a,{href:"https://github.com/Mintbase/mb-contracts/tree/main/mb-interop-market",children:"mintbase marketplace contract"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The mintbase-js/data package provides convenient functions for retrieving nft data from the mintbase indexer. In this example, you will be able to view and purchase NFTs from a specific nft contract."}),"\n",(0,a.jsxs)(t.p,{children:["You can find more information on Github: ",(0,a.jsx)(t.a,{href:"https://github.com/Mintbase/mintbase-js/tree/beta/packages/data",children:"GitHub link"})]}),"\n",(0,a.jsxs)(t.p,{children:["A live demo of the marketplace can be found here: ",(0,a.jsx)(t.a,{href:"https://marketplace-template.mintbase.xyz/",children:"Live demo link"})]}),"\n",(0,a.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# install dependencies\npnpm install\n\n#run the project\npnpm dev\n"})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"step-1-connect-wallet",children:"Step 1: Connect Wallet"}),"\n",(0,a.jsxs)(t.p,{children:["Before proceeding, it is important to have a wallet connection feature implemented in your application in order to interact with the contract. To do this, you can check our guide ",(0,a.jsx)(t.a,{href:"https://docs.mintbase.xyz/dev/getting-started/add-wallet-connection-to-your-react-app",children:"Wallet Connection Guide"}),"."]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"step-2-get-nfts-from-store",children:"Step 2: Get NFTs from Store"}),"\n",(0,a.jsx)(t.p,{children:"In this example, we utilized react-query to manage the loading state when retrieving NFTs from the contract via the storeNfts method. This method returns all listed NFTs from the specified contract, allowing you to display them in the user interface."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// src/hooks/useStoreNfts.ts\nimport { useQuery } from 'react-query';\nimport { storeNfts } from '@mintbase-js/data';\n\nconst useStoreNfts = (store?: string) => {\n  const defaultStores = process.env.NEXT_PUBLIC_STORES || MAINNET_CONFIG.stores;\n  const formattedStores = defaultStores.split(/[ ,]+/);\n\n  const { isLoading, error, data } = useQuery(['storeNfts', store], () => storeNfts(store || formattedStores, true), {\n    retry: false,\n    refetchOnWindowFocus: false,\n    select: mapStoreNfts,\n  });\n\n  return { ...data, error, loading: isLoading };\n};\n\nexport { useStoreNfts };\n"})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"step-3-get-store-data",children:"Step 3: Get Store Data"}),"\n",(0,a.jsx)(t.p,{children:"To control the tabs, we need to retrieve store data using the storeData method. This method returns the data from the specified contract, enabling you to display it in the user interface."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// src/hooks/useStoreData.ts\nimport { useQuery } from 'react-query';\nimport { storeData } from '@mintbase-js/data';\n\nconst useStoreData = () => {\n  const defaultStores = process.env.NEXT_PUBLIC_STORES || MAINNET_CONFIG.stores;\n  const formattedStores = defaultStores.split(/[ ,]+/);\n\n  const { isLoading, error, data } = useQuery('storeData', () => storeData(formattedStores), {\n    retry: false,\n    refetchOnWindowFocus: false,\n    select: mapStoreData,\n  });\n\n  return { ...data, error, loading: isLoading };\n};\n\nexport { useStoreData };\n\n"})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"step-4-get-metadata-from-an-nft",children:"Step 4: Get Metadata from an NFT"}),"\n",(0,a.jsx)(t.p,{children:"To display NFT pricing information, available quantities, and other details in the user interface, it is necessary to access the NFT metadata using the metadataByMetadataId method."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// src/hooks/useMetadataByMetadataId.ts\nimport { useQuery } from 'react-query';\nimport { metadataByMetadataId } from '@mintbase-js/data';\n\nconst useMetadataByMetadataId = ({ metadataId }) => {\n  const { isLoading, data: metadata } = useQuery('metadataByMetadataId', () => metadataByMetadataId(metadataId), {\n    retry: false,\n    refetchOnWindowFocus: false,\n    select: mapMetadata,\n  });\n\n  return { ...metadata, isTokenListLoading: isLoading };\n};\n\nexport { useMetadataByMetadataId };\n"})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"step-5-get-current-near-price",children:"Step 5: Get Current NEAR Price"}),"\n",(0,a.jsx)(t.p,{children:"To obtain the current price of the NFT in USD, it is necessary to retrieve the current Near price. We accomplish this by using the nearPrice method."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// src/hooks/useNearPrice.ts\nimport { useEffect, useState } from 'react';\nimport { nearPrice } from '@mintbase-js/data';\n\nconst useNearPrice = () => {\n  const [nearPriceData, setNearPriceData] = useState('0');\n\n  useEffect(() => {\n    const getNearPrice = async () => {\n      const { data: priceData, error } = await nearPrice();\n      setNearPriceData(error ? '0' : priceData);\n    };\n\n    getNearPrice();\n  }, []);\n\n  return nearPriceData;\n};\n\nexport { useNearPrice };\n"})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"step-6-execute-the-contract-call---buy",children:"Step 6: Execute the Contract Call - Buy"}),"\n",(0,a.jsx)(t.p,{children:'The execute method accepts one or more contract call objects and executes them using a specified wallet instance. In this example, we need to use the execute method to execute the "buy" call, allowing the user to purchase the desired NFT.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'const singleBuy = async () => {\n    const wallet = await selector.wallet();\n\n    if (tokenId) {\n      (await execute(\n        { wallet, callbackArgs: callback },\n        {\n          ...buy({\n            contractAddress: nftContractId,\n            tokenId,\n            affiliateAccount:\n              process.env.NEXT_PUBLIC_AFFILIATE_ACCOUNT ||\n              MAINNET_CONFIG.affiliate,\n            marketId,\n            price: nearToYocto(currentPrice?.toString()) || "0",\n          }),\n        }\n      )) as FinalExecutionOutcome;\n    }\n  };\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"set-env-variables",children:"Set ENV variables"}),"\n",(0,a.jsxs)(t.p,{children:["Once that's done, copy the ",(0,a.jsx)(t.code,{children:".env.example"})," file in this directory to ",(0,a.jsx)(t.code,{children:".env.local"})," (which will be ignored by Git):"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cp .env.example .env.local\n"})}),"\n",(0,a.jsx)(t.p,{children:"if you use windows without powershell or cygwin:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"copy .env.example .env.local\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To get your ",(0,a.jsx)(t.code,{children:"api key"})," visit :"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.mintbase.xyz/developer",children:"Mintbase Developers Page for Mainnet"}),":\n",(0,a.jsx)(t.a,{href:"https://testnet.mintbase.xyz/developer",children:"Mintbase Developers Page for testnet"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"NEXT_PUBLIC_DEVELOPER_KEY=your_mintbase_api_key\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"NEXT_PUBLIC_NETWORK"})," could be ",(0,a.jsx)(t.code,{children:"testnet"})," or ",(0,a.jsx)(t.code,{children:"mainnet"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"NEXT_PUBLIC_NETWORK=testnet\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"NEXT_PUBLIC_STORES"})," is your store's ids"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"NEXT_PUBLIC_STORES=latium.mintspace2.testnet,mufasa.mintspace2.testnet\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"NEXT_PUBLIC_AFFILIATE_ACCOUNT"})," is your near account where your should get your market fee"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"NEXT_PUBLIC_AFFILIATE_ACCOUNT=your_near_account.near\n"})}),"\n",(0,a.jsx)(t.h2,{id:"extending",children:"Extending"}),"\n",(0,a.jsx)(t.p,{children:"This project is setup using Next.js + @mintbase/js\nYou can use this project as a reference to build your own, and use or remove any library you think it would suit your needs."}),"\n",(0,a.jsx)(t.admonition,{title:"Get in touch",type:"info",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Support: ",(0,a.jsx)(t.a,{href:"https://t.me/mintdev",children:"Join the Telegram"})]}),"\n",(0,a.jsxs)(t.li,{children:["Twitter: ",(0,a.jsx)(t.a,{href:"https://twitter.com/mintbase",children:"@mintbase"})]}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(67294);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);