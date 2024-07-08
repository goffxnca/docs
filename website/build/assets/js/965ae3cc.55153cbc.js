"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4420],{76334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(85893),o=n(11151),i=n(71183);const r={id:"minting",title:"Minting",sidebar_label:"Minting"},s=void 0,l={id:"tutorials/nfts/js/minting",title:"Minting",description:"This is the first of many tutorials in a series where you'll be creating a complete NFT smart contract from scratch that conforms with all the NEAR NFT standards. Today you'll learn how to create the logic needed to mint NFTs and have them show up in your NEAR wallet. You will be modifying a bare-bones skeleton smart contract by filling in the necessary code snippets needed to add minting functionalities.",source:"@site/../docs/3.tutorials/nfts/js/2-minting.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/minting",permalink:"/tutorials/nfts/js/minting",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/2-minting.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712093018e3,sidebarPosition:2,frontMatter:{id:"minting",title:"Minting",sidebar_label:"Minting"},sidebar:"tutorials",previous:{title:"Contract Architecture",permalink:"/tutorials/nfts/js/skeleton"},next:{title:"Upgrade a Contract",permalink:"/tutorials/nfts/js/upgrade-contract"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the skeleton contract",id:"what-does-minting-mean",level:2},{value:"Storing information on the contract",id:"storing-information",level:3},{value:"Constructor Function",id:"constructor-function",level:4},{value:"Metadata and token information",id:"metadata-and-token-info",level:3},{value:"Function for querying contract metadata",id:"function-for-querying-contract-metadata",level:4},{value:"Minting Logic",id:"minting-logic",level:3},{value:"Querying for token information",id:"querying-for-token-information",level:3},{value:"Interacting with the contract on-chain",id:"interacting-with-the-contract-on-chain",level:2},{value:"Deploying the contract",id:"deploy-the-contract",level:3},{value:"Initializing the contract",id:"initialize-contract",level:3},{value:"Viewing the contract&#39;s metadata",id:"viewing-the-contracts-metadata",level:3},{value:"Minting our first NFT",id:"minting-our-first-nft",level:3},{value:"Viewing information about the NFT",id:"viewing-information-about-the-nft",level:3},{value:"Viewing your NFTs in the wallet",id:"viewing-your-nfts-in-the-wallet",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This is the first of many tutorials in a series where you'll be creating a complete NFT smart contract from scratch that conforms with all the NEAR ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/NonFungibleToken/",children:"NFT standards"}),". Today you'll learn how to create the logic needed to mint NFTs and have them show up in your NEAR wallet. You will be modifying a bare-bones ",(0,a.jsx)(t.a,{href:"/tutorials/nfts/js/skeleton",children:"skeleton smart contract"})," by filling in the necessary code snippets needed to add minting functionalities."]}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:["To get started, switch to the ",(0,a.jsx)(t.code,{children:"1.skeleton"})," branch in our repo. If you haven't cloned the repository, refer to the ",(0,a.jsx)(t.a,{href:"/tutorials/nfts/js/skeleton",children:"Contract Architecture"})," to get started."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"git checkout 1.skeleton\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If you wish to see the finished code for the minting portion of the tutorial, that can be found on the ",(0,a.jsx)(t.code,{children:"2.minting"})," branch."]}),"\n",(0,a.jsx)(t.h2,{id:"what-does-minting-mean",children:"Modifications to the skeleton contract"}),"\n",(0,a.jsx)(t.p,{children:"In order to implement the logic needed for minting, we should break it up into smaller tasks and handle those one-by-one. Let's step back and think about the best way to do this by asking ourselves a simple question: what does it mean to mint an NFT?"}),"\n",(0,a.jsx)(t.p,{children:"To mint a non-fungible token, in the most simple way possible, a contract needs to be able to associate a token with an owner on the blockchain. This means you'll need:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"A way to keep track of tokens and other information on the contract."}),"\n",(0,a.jsxs)(t.li,{children:["A way to store information for each token such as ",(0,a.jsx)(t.code,{children:"metadata"})," (more on that later)."]}),"\n",(0,a.jsx)(t.li,{children:"A way to link a token with an owner."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"That's it! We've now broken down the larger problem into some smaller, less daunting, subtasks. Let's start by tackling the first and work our way through the rest."}),"\n",(0,a.jsx)(t.h3,{id:"storing-information",children:"Storing information on the contract"}),"\n",(0,a.jsxs)(t.p,{children:["Start by navigating to ",(0,a.jsx)(t.code,{children:"nft-contract/src/index.ts"})," and filling in some of the code blocks.\nYou need to be able to store important information on the contract such as the list of tokens that an account has."]}),"\n",(0,a.jsx)(t.p,{children:"The first thing to do is add the information to the contract class."}),"\n",(0,a.jsx)(i.Ey,{language:"js",start:"16",end:"22",url:"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/index.ts"}),"\n",(0,a.jsx)(t.p,{children:"This allows you to get the information stored in these data structures from anywhere in the contract. The code above has created 3 token specific storages:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"tokensPerOwner"}),": allows you to keep track of the tokens owned by any account. It will map the account address to a set of token ID strings owned by that account."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"tokensById"}),": returns all the information about a specific token. It will map a token ID string to a ",(0,a.jsx)(t.code,{children:"Token"})," object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"tokenMetadataById"}),": returns just the metadata for a specific token. It wil map a token ID string to a ",(0,a.jsx)(t.code,{children:"TokenMetadata"})," object."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"In addition, you'll keep track of the owner of the contract as well as the metadata for the contract."}),"\n",(0,a.jsx)(t.h4,{id:"constructor-function",children:"Constructor Function"}),"\n",(0,a.jsxs)(t.p,{children:["Next, you'll add the logic to the constructor function. This function needs to be invoked when you first deploy the contract. It will initialize all the contract's fields that you've defined above with default values.\nWe've added the ",(0,a.jsx)(t.code,{children:"ownerId"})," and ",(0,a.jsx)(t.code,{children:"metadata"})," fields as parameters to the function because those are the only ones that can be customized."]}),"\n",(0,a.jsxs)(t.p,{children:["This function will default all the collections to be empty and set the ",(0,a.jsx)(t.code,{children:"owner"})," and ",(0,a.jsx)(t.code,{children:"metadata"})," equal to what you pass in."]}),"\n",(0,a.jsx)(i.Ey,{language:"js",start:"24",end:"43",url:"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/index.ts"}),"\n",(0,a.jsx)(t.p,{children:"More often than not when doing development, you'll need to deploy contracts several times. You can imagine that it might get tedious to have to pass in metadata every single time you want to initialize the contract. For this reason, the metadata has been defaulted with some initial data if it wasn't passed in by the user."}),"\n",(0,a.jsx)(t.h3,{id:"metadata-and-token-info",children:"Metadata and token information"}),"\n",(0,a.jsxs)(t.p,{children:["Now that you've defined what information to store on the contract itself and you've defined some ways to initialize the contract, you need to define what information should go in the ",(0,a.jsx)(t.code,{children:"Token"}),", ",(0,a.jsx)(t.code,{children:"TokenMetadata"}),", and ",(0,a.jsx)(t.code,{children:"NFTContractMetadata"})," data types."]}),"\n",(0,a.jsxs)(t.p,{children:["Let's switch over to the ",(0,a.jsx)(t.code,{children:"nft-contract/src/metadata.ts"})," file as this is where that information will go. If you look at the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"standards for metadata"}),", you'll find all the necessary information that you need to store for both ",(0,a.jsx)(t.code,{children:"TokenMetadata"})," and ",(0,a.jsx)(t.code,{children:"NFTContractMetadata"}),". Simply fill in the following code."]}),"\n",(0,a.jsx)(i.Ey,{language:"js",start:"12",end:"104",url:"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/metadata.ts"}),"\n",(0,a.jsxs)(t.p,{children:["This now leaves you with the ",(0,a.jsx)(t.code,{children:"Token"})," struct and something called a ",(0,a.jsx)(t.code,{children:"JsonToken"}),". The ",(0,a.jsx)(t.code,{children:"Token"})," struct will hold all the information directly related to the token excluding the metadata. The metadata, if you remember, is stored in a map on the contract in a data structured called ",(0,a.jsx)(t.code,{children:"tokenMetadataById"}),". This allows you to quickly get the metadata for any token by simply passing in the token's ID."]}),"\n",(0,a.jsxs)(t.p,{children:["For the ",(0,a.jsx)(t.code,{children:"Token"})," struct, you'll just keep track of the owner for now."]}),"\n",(0,a.jsx)(i.Ey,{language:"js",start:"106",end:"117",url:"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/metadata.ts"}),"\n",(0,a.jsxs)(t.p,{children:["The purpose of the ",(0,a.jsx)(t.code,{children:"JsonToken"})," is to hold all the information for an NFT that you want to send back as JSON whenever someone does a view call. This means you'll want to store the owner, token ID, and metadata."]}),"\n",(0,a.jsx)(i.Ey,{language:"js",start:"119",end:"141",url:"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/metadata.ts"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Some of you might be thinking ",(0,a.jsxs)(t.em,{children:["\"how come we don't just store all the information in the ",(0,a.jsx)(t.code,{children:"Token"}),' struct?"']}),".\nThe reason behind this is that it's actually more efficient to construct the JSON token on the fly only when you need it rather than storing all the information in the token struct.\nIn addition, some operations might only need the metadata for a token and so having the metadata in a separate data structure is more optimal."]})}),"\n",(0,a.jsx)(t.h4,{id:"function-for-querying-contract-metadata",children:"Function for querying contract metadata"}),"\n",(0,a.jsxs)(t.p,{children:["Now that you've defined some of the types that were used in the previous section, let's move on and create the first view function ",(0,a.jsx)(t.code,{children:"internalNftMetadata"}),". This will allow users to query for the contract's metadata as per the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"metadata standard"}),"."]}),"\n",(0,a.jsx)(i.Ey,{language:"js",start:"143",end:"150",url:"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/metadata.ts"}),"\n",(0,a.jsxs)(t.p,{children:["This function will get the ",(0,a.jsx)(t.code,{children:"metadata"})," object from the contract which is of type ",(0,a.jsx)(t.code,{children:"NFTContractMetadata"})," and will return it."]}),"\n",(0,a.jsx)(t.p,{children:"Just like that, you've completed the first two tasks and are ready to move onto last part of the tutorial."}),"\n",(0,a.jsx)(t.h3,{id:"minting-logic",children:"Minting Logic"}),"\n",(0,a.jsxs)(t.p,{children:["Now that all the information and types are defined, let's start brainstorming how the minting logic will play out. In the end, you need to link a ",(0,a.jsx)(t.code,{children:"Token"})," and ",(0,a.jsx)(t.code,{children:"TokenId"})," to a specific owner. Let's look back at a couple data structures that might be useful:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"//keeps track of all the token IDs for a given account\ntokensPerOwner: LookupMap<AccountId, UnorderedSet<TokenId>>;\n\n//keeps track of the token struct for a given token ID\ntokensById: LookupMap<TokenId, Token>;\n\n//keeps track of the token metadata for a given token ID\ntokenMetadataById: UnorderedMap<TokenId, TokenMetadata>;\n"})}),"\n",(0,a.jsx)(t.p,{children:"Looking at these data structures, you could do the following:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Add the token ID into the set of tokens that the receiver owns. This will be done on the ",(0,a.jsx)(t.code,{children:"tokensPerOwner"})," field."]}),"\n",(0,a.jsxs)(t.li,{children:["Create a token object and map the token ID to that token object in the ",(0,a.jsx)(t.code,{children:"tokensById"})," field."]}),"\n",(0,a.jsxs)(t.li,{children:["Map the token ID to it's metadata using the ",(0,a.jsx)(t.code,{children:"tokenMetadataById"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"With those steps outlined, it's important to take into consideration the storage costs of minting NFTs. Since you're adding bytes to the contract by creating entries in the data structures, the contract needs to cover the storage costs. If you just made it so any user could go and mint an NFT for free, that system could easily be abused and users could essentially \"drain\" the contract of all it's funds by minting thousands of NFTs. For this reason, you'll make it so that users need to attach a deposit to the call to cover the cost of storage. You'll measure the initial storage usage before anything was added and you'll measure the final storage usage after all the logic is finished. Then you'll make sure that the user has attached enough $NEAR to cover that cost and refund them if they've attached too much."}),"\n",(0,a.jsx)(t.p,{children:"Now that you've got a good understanding of how everything should play out, let's fill in the necessary code."}),"\n",(0,a.jsx)(i.Ey,{language:"js",start:"7",end:"44",url:"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/mint.ts"}),"\n",(0,a.jsxs)(t.p,{children:["You'll notice that we're using some internal methods such as ",(0,a.jsx)(t.code,{children:"refundDeposit"})," and ",(0,a.jsx)(t.code,{children:"internalAddTokenToOwner"}),". We've described the function of ",(0,a.jsx)(t.code,{children:"refundDeposit"})," and as for ",(0,a.jsx)(t.code,{children:"internalAddTokenToOwner"}),", this will add a token to the set of tokens an account owns for the contract's ",(0,a.jsx)(t.code,{children:"tokensPerOwner"})," data structure. You can create these functions in a file called ",(0,a.jsx)(t.code,{children:"internal.ts"}),". Go ahead and create the file. Your new contract architecture should look as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"nft-contract\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 approval.ts\n    \u251c\u2500\u2500 enumeration.ts\n    \u251c\u2500\u2500 internal.ts\n    \u251c\u2500\u2500 lib.ts\n    \u251c\u2500\u2500 metadata.ts\n    \u251c\u2500\u2500 mint.ts\n    \u251c\u2500\u2500 nft_core.ts\n    \u2514\u2500\u2500 royalty.ts\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Add the following to your newly created ",(0,a.jsx)(t.code,{children:"internal.ts"})," file."]}),"\n",(0,a.jsx)(i.Ey,{language:"js",start:"1",end:"54",url:"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/internal.ts"}),"\n",(0,a.jsxs)(t.p,{children:["At this point, the core logic is all in place so that you can mint NFTs. You can use the function ",(0,a.jsx)(t.code,{children:"nft_mint"})," which takes the following parameters:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"token_id"}),": the ID of the token you're minting (as a string)."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"metadata"}),": the metadata for the token that you're minting (of type ",(0,a.jsx)(t.code,{children:"TokenMetadata"})," which is found in the ",(0,a.jsx)(t.code,{children:"metadata.ts"})," file)."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"receiver_id"}),": specifies who the owner of the token will be."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Behind the scenes, the function will:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Call the internal mint function."}),"\n",(0,a.jsx)(t.li,{children:"Calculate the initial storage before adding anything to the contract"}),"\n",(0,a.jsxs)(t.li,{children:["Create a ",(0,a.jsx)(t.code,{children:"Token"})," object with the owner ID"]}),"\n",(0,a.jsxs)(t.li,{children:["Link the token ID to the newly created token object by inserting them into the ",(0,a.jsx)(t.code,{children:"tokensById"})," field."]}),"\n",(0,a.jsxs)(t.li,{children:["Link the token ID to the passed in metadata by inserting them into the ",(0,a.jsx)(t.code,{children:"tokenMetadataById"})," field."]}),"\n",(0,a.jsxs)(t.li,{children:["Add the token ID to the list of tokens that the owner owns by calling the ",(0,a.jsx)(t.code,{children:"internalAddTokenToOwner"})," function."]}),"\n",(0,a.jsx)(t.li,{children:"Calculate the final and net storage to make sure that the user has attached enough NEAR to the call in order to cover those costs."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"querying-for-token-information",children:"Querying for token information"}),"\n",(0,a.jsxs)(t.p,{children:["If you were to go ahead and deploy this contract, initialize it, and mint an NFT, you would have no way of knowing or querying for the information about the token you just minted. Let's quickly add a way to query for the information of a specific NFT. You'll move to the ",(0,a.jsx)(t.code,{children:"nft-contract/src/nft_core.ts"})," file and edit the ",(0,a.jsx)(t.code,{children:"internalNftToken"})," function."]}),"\n",(0,a.jsxs)(t.p,{children:["It will take a token ID as a parameter and return the information for that token. The ",(0,a.jsx)(t.code,{children:"JsonToken"})," contains the token ID, the owner ID, and the token's metadata."]}),"\n",(0,a.jsx)(i.Ey,{language:"js",start:"10",end:"35",url:"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/nft_core.ts"}),"\n",(0,a.jsx)(t.p,{children:"With that finished, it's finally time to build and deploy the contract so you can mint your first NFT."}),"\n",(0,a.jsx)(t.h2,{id:"interacting-with-the-contract-on-chain",children:"Interacting with the contract on-chain"}),"\n",(0,a.jsx)(t.p,{children:"Now that the logic for minting is complete and you've added a way to query for information about specific tokens, it's time to build and deploy your contract to the blockchain."}),"\n",(0,a.jsx)(t.h3,{id:"deploy-the-contract",children:"Deploying the contract"}),"\n",(0,a.jsxs)(t.p,{children:["We've included a very simple way to build the smart contracts throughout this tutorial using ",(0,a.jsx)(t.code,{children:"yarn"}),". The following command will build the contract and copy over the ",(0,a.jsx)(t.code,{children:".wasm"})," file to a folder ",(0,a.jsx)(t.code,{children:"build/nft.wasm"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn build:nft\n"})}),"\n",(0,a.jsxs)(t.p,{children:["For deployment, you will need a NEAR account with the keys stored on your local machine. Navigate to the ",(0,a.jsx)(t.a,{href:"https://testnet.mynearwallet.com//",children:"NEAR wallet"})," site and create an account."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Please ensure that you deploy the contract to an account with no pre-existing contracts. It's easiest to simply create a new account or create a sub-account for this tutorial."})}),"\n",(0,a.jsxs)(t.p,{children:["Log in to your newly created account with ",(0,a.jsx)(t.code,{children:"near-cli"})," by running the following command in your terminal."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near login\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To make this tutorial easier to copy/paste, we're going to set an environment variable for your account ID. In the command below, replace ",(0,a.jsx)(t.code,{children:"YOUR_ACCOUNT_NAME"})," with the account name you just logged in with including the ",(0,a.jsx)(t.code,{children:".testnet"})," portion:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'export NFT_CONTRACT_ID="YOUR_ACCOUNT_NAME"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Test that the environment variable is set correctly by running:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"echo $NFT_CONTRACT_ID\n"})}),"\n",(0,a.jsx)(t.p,{children:"Verify that the correct account ID is printed in the terminal. If everything looks correct you can now deploy your contract.\nIn the root of your NFT project run the following command to deploy your smart contract."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near deploy --wasmFile build/nft.wasm --accountId $NFT_CONTRACT_ID\n"})}),"\n",(0,a.jsx)(t.p,{children:"At this point, the contract should have been deployed to your account and you're ready to move onto testing and minting NFTs."}),"\n",(0,a.jsx)(t.h3,{id:"initialize-contract",children:"Initializing the contract"}),"\n",(0,a.jsx)(t.p,{children:"The very first thing you need to do once the contract has been deployed is to initialize it. For simplicity, let's call the default metadata initialization function you wrote earlier so that you don't have to type the metadata manually in the CLI."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near call $NFT_CONTRACT_ID init '{\"owner_id\": \"'$NFT_CONTRACT_ID'\"}' --accountId $NFT_CONTRACT_ID\n"})}),"\n",(0,a.jsx)(t.p,{children:"You've just initialized the contract with some default metadata and set your account ID as the owner. At this point, you're ready to call your first view function."}),"\n",(0,a.jsx)(t.h3,{id:"viewing-the-contracts-metadata",children:"Viewing the contract's metadata"}),"\n",(0,a.jsx)(t.p,{children:"Now that the contract has been initialized, you can call some of the functions you wrote earlier. More specifically, let's test out the function that returns the contract's metadata:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near view $NFT_CONTRACT_ID nft_metadata\n"})}),"\n",(0,a.jsx)(t.p,{children:"This should return an output similar to the following:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"{ spec: 'nft-1.0.0', name: 'NFT Tutorial Contract', symbol: 'GOTEAM' }\n"})}),"\n",(0,a.jsx)(t.p,{children:"At this point, you're ready to move on and mint your first NFT."}),"\n",(0,a.jsx)(t.h3,{id:"minting-our-first-nft",children:"Minting our first NFT"}),"\n",(0,a.jsxs)(t.p,{children:["Let's now call the minting function that you've created. This requires a ",(0,a.jsx)(t.code,{children:"token_id"})," and ",(0,a.jsx)(t.code,{children:"metadata"}),". If you look back at the ",(0,a.jsx)(t.code,{children:"TokenMetadata"})," struct you created earlier, there are many fields that could potentially be stored on-chain:"]}),"\n",(0,a.jsx)(i.Ey,{language:"js",start:"91",end:"102",url:"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/metadata.ts"}),"\n",(0,a.jsx)(t.p,{children:"Let's mint an NFT with a title, description, and media to start. The media field can be any URL pointing to a media file. We've got an excellent GIF to mint but if you'd like to mint a custom NFT, simply replace our media link with one of your choosing. If you run the following command, it will mint an NFT with the following parameters:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"token_id"}),': "token-1"']}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"metadata"}),":","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"title"}),': "My Non Fungible Team Token"']}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"description"}),': "The Team Most Certainly Goes :)"']}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"media"}),": ",(0,a.jsx)(t.code,{children:"https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"receiver_id"}),": \"'$NFT_CONTRACT_ID'\""]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near call $NFT_CONTRACT_ID nft_mint \'{"token_id": "token-1", "metadata": {"title": "My Non Fungible Team Token", "description": "The Team Most Certainly Goes :)", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$NFT_CONTRACT_ID\'"}\' --accountId $NFT_CONTRACT_ID --amount 0.1\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"amount"})," flag is specifying how much NEAR to attach to the call. Since you need to pay for storage, 0.1 NEAR is attached and you'll get refunded any excess that is unused at the end."]})}),"\n",(0,a.jsx)(t.h3,{id:"viewing-information-about-the-nft",children:"Viewing information about the NFT"}),"\n",(0,a.jsxs)(t.p,{children:["Now that the NFT has been minted, you can check and see if everything went correctly by calling the ",(0,a.jsx)(t.code,{children:"nft_token"})," function.\nThis should return a ",(0,a.jsx)(t.code,{children:"JsonToken"})," which should contain the ",(0,a.jsx)(t.code,{children:"token_id"}),", ",(0,a.jsx)(t.code,{children:"owner_id"}),", and ",(0,a.jsx)(t.code,{children:"metadata"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_token \'{"token_id": "token-1"}\'\n'})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Example response: "}),(0,a.jsx)("p",{children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"{\n  token_id: 'token-1',\n  owner_id: 'goteam.examples.testnet',\n  metadata: {\n    title: 'My Non Fungible Team Token',\n    description: 'The Team Most Certainly Goes :)',\n    media: 'https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif'\n  }\n}\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Go team!"})," You've now verified that everything works correctly and it's time to view your freshly minted NFT in the NEAR wallet's collectibles tab!"]}),"\n",(0,a.jsx)(t.h2,{id:"viewing-your-nfts-in-the-wallet",children:"Viewing your NFTs in the wallet"}),"\n",(0,a.jsxs)(t.p,{children:["If you navigate to the ",(0,a.jsx)(t.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"collectibles tab"})," in the NEAR wallet, this should list all the NFTs that you own. Currently, It should be empty."]}),"\n",(0,a.jsxs)(t.p,{children:["We've got a problem. The wallet correctly picked up that you minted an NFT, however, the contract doesn't implement the specific view function that is being called. Behind the scenes, the wallet is trying to call ",(0,a.jsx)(t.code,{children:"nft_tokens_for_owner"})," to get a list of all the NFTs owned by your account on the contract. The only function you've created, however, is the ",(0,a.jsx)(t.code,{children:"nft_token"})," function. It wouldn't be very efficient for the wallet to call ",(0,a.jsx)(t.code,{children:"nft_token"})," for every single NFT that a user has to get information and so they try to call the ",(0,a.jsx)(t.code,{children:"nft_tokens_for_owner"})," function instead."]}),"\n",(0,a.jsx)(t.p,{children:"In the next tutorial, you'll learn about how to deploy a patch fix to a pre-existing contract so that you can view the NFT in the wallet."}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"In this tutorial, you went through the basics of setting up and understand the logic behind minting NFTs on the blockchain using a skeleton contract."}),"\n",(0,a.jsxs)(t.p,{children:["You first looked at ",(0,a.jsx)(t.a,{href:"#what-does-minting-mean",children:"what it means"})," to mint NFTs and how to break down the problem into more feasible chunks. You then started modifying the skeleton contract chunk by chunk starting with solving the problem of ",(0,a.jsx)(t.a,{href:"#storing-information",children:"storing information / state"})," on the contract. You then looked at what to put in the ",(0,a.jsx)(t.a,{href:"#metadata-and-token-info",children:"metadata and token information"}),". Finally, you looked at the logic necessary for ",(0,a.jsx)(t.a,{href:"#minting-logic",children:"minting NFTs"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["After the contract was written, it was time to deploy to the blockchain. You ",(0,a.jsx)(t.a,{href:"#deploy-the-contract",children:"deployed the contract"})," and ",(0,a.jsx)(t.a,{href:"#initialize-contract",children:"initialized it"}),". Finally, you ",(0,a.jsx)(t.a,{href:"#minting-our-first-nft",children:"minted your very first NFT"})," and saw that some changes are needed before you can view it in the wallet."]}),"\n",(0,a.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.a,{href:"/tutorials/nfts/js/upgrade-contract",children:"next tutorial"}),", you'll find out how to deploy a patch fix and what that means so that you can view your NFTs in the wallet."]}),"\n",(0,a.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,a.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["near-cli: ",(0,a.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,a.jsxs)(t.li,{children:["NFT standard: ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,a.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,a.jsxs)(t.li,{children:["Metadata standard: ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"NEP177"}),", version ",(0,a.jsx)(t.code,{children:"2.1.0"})]}),"\n"]})]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var a=n(36905);const o={tabItem:"tabItem_Ymn6"};var i=n(85893);function r(e){var t=e.children,n=e.hidden,r=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,r),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(67294),o=n(36905),i=n(12466),r=n(16550),s=n(20469),l=n(91980),c=n(67392),d=n(20812);function h(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function u(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,i=(0,r.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:o});return[(0,l._X)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function g(e){var t,n,o,i,r=e.defaultValue,l=e.queryString,c=void 0!==l&&l,h=e.groupId,g=u(e),p=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:g})})),y=p[0],j=p[1],x=m({queryString:c,groupId:h}),b=x[0],w=x[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,d.Nk)(t),o=n[0],i=n[1],[o,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),v=k[0],T=k[1],N=function(){var e=null!=b?b:v;return f({value:e,tabValues:g})?e:null}();return(0,s.Z)((function(){N&&j(N)}),[N]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);j(e),w(e),T(e)}),[w,T,g]),tabValues:g}}var p=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function x(e){var t=e.className,n=e.block,a=e.selectedValue,r=e.selectValue,s=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=l.indexOf(t),o=s[n].value;o!==a&&(c(t),r(o))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,o=l.indexOf(e.currentTarget)+1;n=null!=(a=l[o])?a:l[0];break;case"ArrowLeft":var i,r=l.indexOf(e.currentTarget)-1;n=null!=(i=l[r])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",y.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,o=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var r=i.find((function(e){return e.props.value===o}));return r?(0,a.cloneElement)(r,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})}))})}function w(e){var t=g(e);return(0,j.jsxs)("div",{className:(0,o.Z)("tabs-container",y.tabList),children:[(0,j.jsx)(x,Object.assign({},t,e)),(0,j.jsx)(b,Object.assign({},t,e))]})}function k(e){var t=(0,p.Z)();return(0,j.jsx)(w,Object.assign({},e,{children:h(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>m,Ey:()=>p,SQ:()=>g});var a=n(67294),o=n(74866),i=n(85162),r=n(74165),s=n(15861),l=n(1841),c=n.n(l),d=n(85893);function h(){return(h=(0,s.Z)((0,r.Z)().mark((function e(t,n,a){var o,i,s,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}o=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:o=e.sent,localStorage.setItem(t,o),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return s=o.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):s.length,s=s.slice(n,a),l=s.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",s.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const u=function(e){var t=e.url,n=e.start,o=e.end,i=e.language,r=e.fname,s=e.metastring,l=(0,a.useState)("Loading..."),u=l[0],f=l[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),o=a[0],i=a[1];return a[2],"https://raw.githubusercontent.com/"+o+"/"+i+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return h.apply(this,arguments)}(e,n,o);a.then((function(e){return f(e)}))})),(0,d.jsxs)("div",{fname:r,children:[(0,d.jsx)(c(),{language:i,metastring:s+" showLineNumbers",children:u}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,d.jsx)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,d.jsx)(i.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function g(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),o=n.start,i=n.end,r=n.fname;if(e.type===p)return p({url:a,start:o,end:i,language:t,fname:r});return e}(e,n)})),1==t.length?(0,d.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,d.jsx)(o.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,d.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))})}function p(e){var t=e.url,n=e.start,a=e.end,o=e.language,i=e.fname,r=e.metastring;return u({url:t,start:n,end:a,language:o,fname:i,metastring:r})}}}]);