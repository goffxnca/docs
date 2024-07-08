"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7074],{3938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(85893),s=n(11151),i=n(71183);const o={id:"skeleton",title:"Skeleton and Rust Architecture",sidebar_label:"Contract Architecture"},a=void 0,l={id:"tutorials/nfts/skeleton",title:"Skeleton and Rust Architecture",description:"In this article, you'll learn about the basic architecture behind the NFT contract that you'll develop while following this \"Zero to Hero\" series.",source:"@site/../docs/3.tutorials/nfts/1-skeleton.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/skeleton",permalink:"/tutorials/nfts/skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1719787277e3,sidebarPosition:1,frontMatter:{id:"skeleton",title:"Skeleton and Rust Architecture",sidebar_label:"Contract Architecture"},sidebar:"tutorials",previous:{title:"Pre-deployed Contract",permalink:"/tutorials/nfts/predeployed-contract"},next:{title:"Minting",permalink:"/tutorials/nfts/minting"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Source files",id:"source-files",level:3},{value:"<code>approval.rs</code>",id:"approvalrs",level:2},{value:"<code>enumeration.rs</code>",id:"enumerationrs",level:2},{value:"<code>lib.rs</code>",id:"librs",level:2},{value:"<code>metadata.rs</code>",id:"metadatars",level:2},{value:"<code>mint.rs</code>",id:"mintrs",level:2},{value:"<code>nft_core.rs</code>",id:"nft_corers",level:2},{value:"<code>royalty.rs</code>",id:"royaltyrs",level:2},{value:"<code>events.rs</code>",id:"eventsrs",level:2},{value:"Building the skeleton",id:"building-the-skeleton",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this article, you'll learn about the basic architecture behind the NFT contract that you'll develop while following this ",(0,r.jsx)(t.em,{children:'"Zero to Hero"'})," series."]}),"\n",(0,r.jsx)(t.p,{children:"You'll discover the contract's layout and you'll see how the Rust files are structured in order to build a feature-complete smart contract."}),"\n",(0,r.jsx)(t.admonition,{title:"Skeleton Contract",type:"info",children:(0,r.jsxs)(t.p,{children:["You can find the skeleton contract in our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial/tree/main/nft-contract-skeleton",children:"GitHub repository"})]})}),"\n",(0,r.jsx)(t.admonition,{title:"New to Rust?",type:"info",children:(0,r.jsxs)(t.p,{children:["If you are new to Rust and want to dive into smart contract development, our ",(0,r.jsx)(t.a,{href:"/build/smart-contracts/quickstart",children:"Quick-start guide"})," is a great place to start."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"This tutorial presents the code skeleton for the NFT smart contract and its file structure."}),"\n",(0,r.jsx)(t.p,{children:"Once every file and functions have been covered, we will guide you through the process of building the mock-up contract to confirm that your Rust setup works."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"file-structure",children:"File structure"}),"\n",(0,r.jsxs)(t.p,{children:["Following a regular ",(0,r.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"})," project, the file structure for this smart contract has:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"nft-contract\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 approval.rs\n    \u251c\u2500\u2500 enumeration.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 metadata.rs\n    \u251c\u2500\u2500 mint.rs\n    \u251c\u2500\u2500 nft_core.rs\n    \u251c\u2500\u2500 events.rs\n    \u2514\u2500\u2500 royalty.rs\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The file ",(0,r.jsx)(t.code,{children:"Cargo.toml"})," defines the code dependencies"]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"src"})," folder contains all the Rust source files"]}),"\n"]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"source-files",children:"Source files"}),"\n",(0,r.jsx)(t.p,{children:"Here is a brief description of what each source file is responsible for:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"File"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#approvalrs",children:"approval.rs"})}),(0,r.jsx)(t.td,{children:"Has the functions that controls the access and transfers of non-fungible tokens"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#enumerationrs",children:"enumeration.rs"})}),(0,r.jsx)(t.td,{children:"Contains the methods to list NFT tokens and their owners"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#librs",children:"lib.rs"})}),(0,r.jsx)(t.td,{children:"Holds the smart contract initialization functions"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#metadatars",children:"metadata.rs"})}),(0,r.jsx)(t.td,{children:"Defines the token and metadata structure"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#mintrs",children:"mint.rs"})}),(0,r.jsx)(t.td,{children:"Contains token minting logic"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#nft_corers",children:"nft_core.rs"})}),(0,r.jsx)(t.td,{children:"Core logic that allows you to transfer NFTs between users."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#royaltyrs",children:"royalty.rs"})}),(0,r.jsx)(t.td,{children:"Contains payout-related functions"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#events",children:"events.rs"})}),(0,r.jsx)(t.td,{children:"Contains events related structures"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Explore the code in our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial/",children:"GitHub repository"}),"."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"approvalrs",children:(0,r.jsx)(t.code,{children:"approval.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This allows people to approve other accounts to transfer NFTs on their behalf."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This file contains the logic that complies with the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement",children:"approvals management"})," extension. Here is a breakdown of the methods and their functions:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_approve"})}),(0,r.jsx)(t.td,{children:"Approves an account ID to transfer a token on your behalf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_is_approved"})}),(0,r.jsx)(t.td,{children:"Checks if the input account has access to approve the token ID."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_revoke"})}),(0,r.jsx)(t.td,{children:"Revokes a specific account from transferring the token on your behalf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_revoke_all"})}),(0,r.jsx)(t.td,{children:"Revokes all accounts from transferring the token on your behalf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_on_approve"})}),(0,r.jsxs)(t.td,{children:["This callback function, initiated during ",(0,r.jsx)(t.code,{children:"nft_approve"}),", is a cross contract call to an external contract."]})]})]})]}),"\n",(0,r.jsx)(i.Ey,{language:"rust",start:"4",end:"33",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/approval.rs"}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/approvals",children:"approvals section"})," of the Zero to Hero series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"enumerationrs",children:(0,r.jsx)(t.code,{children:"enumeration.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This file provides the functions needed to view information about NFTs, and follows the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration"})," extension."]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_total_supply"})}),(0,r.jsx)(t.td,{children:"Returns the total amount of NFTs stored on the contract"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_tokens"})}),(0,r.jsx)(t.td,{children:"Returns a paginated list of NFTs stored on the contract regardless of their owner."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_supply_for_owner"})}),(0,r.jsx)(t.td,{children:"Allows you view the total number of NFTs owned by any given user"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_tokens_for_owner"})}),(0,r.jsx)(t.td,{children:"Returns a paginated list of NFTs owned by any given user"})]})]})]}),"\n",(0,r.jsx)(i.Ey,{language:"rust",start:"4",end:"44",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-skeleton/src/enumeration.rs"}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/enumeration",children:"enumeration section"})," of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"librs",children:(0,r.jsx)(t.code,{children:"lib.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This file outlines what information the contract stores and keeps track of."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"new_default_meta"})}),(0,r.jsxs)(t.td,{children:["Initializes the contract with default ",(0,r.jsx)(t.code,{children:"metadata"})," so the user doesn't have to provide any input."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"new"})}),(0,r.jsxs)(t.td,{children:["Initializes the contract with the user-provided ",(0,r.jsx)(t.code,{children:"metadata"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.admonition,{title:"Keep in mind",type:"info",children:(0,r.jsxs)(t.p,{children:["The initialization functions (",(0,r.jsx)(t.code,{children:"new"}),", ",(0,r.jsx)(t.code,{children:"new_default_meta"}),") can only be called once."]})}),"\n",(0,r.jsx)(i.Ey,{language:"rust",start:"47",end:"73",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-skeleton/src/lib.rs"}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"minting section"})," of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"metadatars",children:(0,r.jsx)(t.code,{children:"metadata.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This file is used to keep track of the information to be stored for tokens, and metadata.\nIn addition, you can define a function to view the contract's metadata which is part of the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"metadata"})," extension."]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"TokenMetadata"})}),(0,r.jsx)(t.td,{children:"This structure defines the metadata that can be stored for each token (title, description, media, etc.)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Token"})}),(0,r.jsx)(t.td,{children:"This structure outlines what information will be stored on the contract for each token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"JsonToken"})}),(0,r.jsx)(t.td,{children:"When querying information about NFTs through view calls, the return information is stored in this JSON token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_metadata"})}),(0,r.jsx)(t.td,{children:"This function allows users to query for the contact's internal metadata."})]})]})]}),"\n",(0,r.jsx)(i.Ey,{language:"rust",start:"12",end:"60",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-skeleton/src/metadata.rs"}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"minting section"})," of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"mintrs",children:(0,r.jsx)(t.code,{children:"mint.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Contains the logic to mint the non-fungible tokens"}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_mint"})}),(0,r.jsx)(t.td,{children:"This function mints a non-fungible token."})]})})]}),"\n",(0,r.jsx)(i.Ey,{language:"rust",start:"4",end:"16",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-skeleton/src/mint.rs"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"nft_corers",children:(0,r.jsx)(t.code,{children:"nft_core.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Core logic that allows to transfer NFTs between users."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_transfer"})}),(0,r.jsx)(t.td,{children:"Transfers an NFT to a receiver ID."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_transfer_call"})}),(0,r.jsxs)(t.td,{children:["Transfers an NFT to a receiver and calls a function on the receiver ID's contract. The function returns ",(0,r.jsx)(t.code,{children:"true"})," if the token was transferred from the sender's account."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_token"})}),(0,r.jsx)(t.td,{children:"Allows users to query for the information about a specific NFT."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_on_transfer"})}),(0,r.jsxs)(t.td,{children:["Called by other contracts when an NFT is transferred to your contract account via the ",(0,r.jsx)(t.code,{children:"nft_transfer_call"})," method. It returns ",(0,r.jsx)(t.code,{children:"true"})," if the token should be returned back to the sender."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_resolve_transfer"})}),(0,r.jsxs)(t.td,{children:["When you start the ",(0,r.jsx)(t.code,{children:"nft_transfer_call"})," and transfer an NFT, the standard also calls a method on the receiver's contract. If the receiver needs you to return the NFT to the sender (as per the return value of the ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," method), this function allows you to execute that logic."]})]})]})]}),"\n",(0,r.jsx)(i.Ey,{language:"rust",start:"7",end:"56",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-skeleton/src/nft_core.rs"}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/core",children:"core section"})," of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"royaltyrs",children:(0,r.jsx)(t.code,{children:"royalty.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Contains payout-related functions."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_payout"})}),(0,r.jsx)(t.td,{children:"This view method calculates the payout for a given token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_transfer_payout"})}),(0,r.jsx)(t.td,{children:"Transfers the token to the receiver ID and returns the payout object that should be paid for a given balance."})]})]})]}),"\n",(0,r.jsx)(i.Ey,{language:"rust",start:"3",end:"17",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-skeleton/src/royalty.rs"}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/royalty",children:"royalty section"})," of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"eventsrs",children:(0,r.jsx)(t.code,{children:"events.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Contains events-related structures."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"EventLogVariant"})}),(0,r.jsx)(t.td,{children:"This enum represents the data type of the EventLog."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"EventLog"})}),(0,r.jsx)(t.td,{children:"Interface to capture data about an event."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"NftMintLog"})}),(0,r.jsx)(t.td,{children:"An event log to capture token minting."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"NftTransferLog"})}),(0,r.jsx)(t.td,{children:"An event log to capture token transfer."})]})]})]}),"\n",(0,r.jsx)(i.Ey,{language:"rust",start:"5",end:"79",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-events/src/events.rs"}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/events",children:"events section"})," of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"building-the-skeleton",children:"Building the skeleton"}),"\n",(0,r.jsx)(t.p,{children:"If you haven't cloned the main repository yet, open a terminal and run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/near-examples/nft-tutorial/\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Next, go to the ",(0,r.jsx)(t.code,{children:"nft-contract-skeleton/"})," folder and build the contract with ",(0,r.jsx)(t.code,{children:"cargo-near"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"cd nft-tutorial\ncd nft-contract-skeleton/\ncargo near build\n"})}),"\n",(0,r.jsx)(t.p,{children:"Since this source is just a skeleton you'll get many warnings about unused code, such as:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"   Compiling nft_contract_skeleton v0.1.0 (/Users/near-examples/Documents/my/projects/near/examples/nft-tutorial/nft-contract-basic)\n \u2502 warning: unused imports: `LazyOption`, `LookupMap`, `UnorderedMap`, `UnorderedSet`\n \u2502  --\x3e src/lib.rs:3:29\n \u2502   |\n \u2502 3 | use near_sdk::collections::{LazyOption, LookupMap, UnorderedMap, UnorderedSet};\n \u2502   |                             ^^^^^^^^^^  ^^^^^^^^^  ^^^^^^^^^^^^  ^^^^^^^^^^^^\n \u2502   |\n \u2502   = note: `#[warn(unused_imports)]` on by default\n \u2502\n \u2502 warning: unused import: `Base64VecU8`\n \u2502  --\x3e src/lib.rs:4:28\n \u2502   |\n \u2502 4 | use near_sdk::json_types::{Base64VecU8, U128};\n \u2502   |\n\n \u2502 warning: `nft_contract_skeleton` (lib) generated 48 warnings (run `cargo fix --lib -p nft_contract_skeleton` to apply 45 suggestions)\n \u2502     Finished release [optimized] target(s) in 11.01s\n \u2713 Contract successfully built!\n"})}),"\n",(0,r.jsx)(t.p,{children:"Don't worry about these warnings, you're not going to deploy this contract yet.\nBuilding the skeleton is useful to validate that your Rust toolchain works properly and that you'll be able to compile improved versions of this NFT contract in the upcoming tutorials."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(t.p,{children:["You've seen the layout of this NFT smart contract, and how all the functions are laid out across the different source files.\nUsing ",(0,r.jsx)(t.code,{children:"yarn"}),", you've been able to compile the contract, and you'll start fleshing out this skeleton in the next ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"Minting tutorial"}),"."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["rustc: ",(0,r.jsx)(t.code,{children:"1.76.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["near-sdk-rs: ",(0,r.jsx)(t.code,{children:"5.1.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["cargo-near: ",(0,r.jsx)(t.code,{children:"0.6.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["NFT standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(36905);const s={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),s=n(36905),i=n(12466),o=n(16550),a=n(20469),l=n(91980),c=n(67392),d=n(20812);function h(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function u(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function x(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId,i=(0,o.k6)(),a=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:s});return[(0,l._X)(a),(0,r.useCallback)((function(e){if(a){var t=new URLSearchParams(i.location.search);t.set(a,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[a,i])]}function j(e){var t,n,s,i,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,h=e.groupId,j=u(e),p=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:o,tabValues:j})})),m=p[0],b=p[1],g=f({queryString:c,groupId:h}),v=g[0],y=g[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,d.Nk)(t),s=n[0],i=n[1],[s,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=k[0],_=k[1],T=function(){var e=null!=v?v:w;return x({value:e,tabValues:j})?e:null}();return(0,a.Z)((function(){T&&b(T)}),[T]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!x({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),_(e)}),[y,_,j]),tabValues:j}}var p=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function g(e){var t=e.className,n=e.block,r=e.selectedValue,o=e.selectValue,a=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=l.indexOf(t),s=a[n].value;s!==r&&(c(t),o(s))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,s=l.indexOf(e.currentTarget)+1;n=null!=(r=l[s])?r:l[0];break;case"ArrowLeft":var i,o=l.indexOf(e.currentTarget)-1;n=null!=(i=l[o])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:h,onClick:d},i,{className:(0,s.Z)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,s=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===s}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function y(e){var t=j(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(g,Object.assign({},t,e)),(0,b.jsx)(v,Object.assign({},t,e))]})}function k(e){var t=(0,p.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>f,Ey:()=>p,SQ:()=>j});var r=n(67294),s=n(74866),i=n(85162),o=n(74165),a=n(15861),l=n(1841),c=n.n(l),d=n(85893);function h(){return(h=(0,a.Z)((0,o.Z)().mark((function e(t,n,r){var s,i,a,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}s=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:s=e.sent,localStorage.setItem(t,s),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return a=s.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):a.length,a=a.slice(n,r),l=a.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",a.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const u=function(e){var t=e.url,n=e.start,s=e.end,i=e.language,o=e.fname,a=e.metastring,l=(0,r.useState)("Loading..."),u=l[0],x=l[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),s=r[0],i=r[1];return r[2],"https://raw.githubusercontent.com/"+s+"/"+i+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return h.apply(this,arguments)}(e,n,s);r.then((function(e){return x(e)}))})),(0,d.jsxs)("div",{fname:o,children:[(0,d.jsx)(c(),{language:i,metastring:a+" showLineNumbers",children:u}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var x={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,d.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,d.jsx)(i.Z,{value:e.props.value,label:x[e.props.value],children:e})}))})}function j(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),s=n.start,i=n.end,o=n.fname;if(e.type===p)return p({url:r,start:s,end:i,language:t,fname:o});return e}(e,n)})),1==t.length?(0,d.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,d.jsx)(s.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,d.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))})}function p(e){var t=e.url,n=e.start,r=e.end,s=e.language,i=e.fname,o=e.metastring;return u({url:t,start:n,end:r,language:s,fname:i,metastring:o})}}}]);