"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8280],{12102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(85893),s=n(11151),r=n(74866),i=n(85162),c=n(71183);const o={id:"bidding-with-fts",title:"Bidding with FTs",sidebar_label:"Bidding with FTs"},l=void 0,u={id:"tutorials/auction/bidding-with-fts",title:"Bidding with FTs",description:"To further develop this contract we will introduce another primitive: fungible tokens. Instead of placing bids in $NEAR tokens, they will be placed in FTs. This may be useful if, for example, an auctioneer wants to keep the bid amounts constant in terms of dollars as an auction is carried out, so bids can be placed in stablecoins such as $USDC. Another use case is if a project like Ref Finance was holding its own auction and wanted the auction to happen in its project's token $REF.",source:"@site/../docs/3.tutorials/auction/4-ft.md",sourceDirName:"3.tutorials/auction",slug:"/tutorials/auction/bidding-with-fts",permalink:"/vi/tutorials/auction/bidding-with-fts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/auction/4-ft.md",tags:[],version:"current",lastUpdatedBy:"Owen",lastUpdatedAt:1727205071e3,sidebarPosition:4,frontMatter:{id:"bidding-with-fts",title:"Bidding with FTs",sidebar_label:"Bidding with FTs"}},h={},d=[{value:"Specifying the FT contract",id:"specifying-the-ft-contract",level:2},{value:"Accepting bids in FTs",id:"accepting-bids-in-fts",level:2},{value:"Claiming the FTs",id:"claiming-the-fts",level:2},{value:"Creating a new FT",id:"creating-a-new-ft",level:2},{value:"Registering users in the FT contract",id:"registering-users-in-the-ft-contract",level:2},{value:"Simple FT transfer to bidders",id:"simple-ft-transfer-to-bidders",level:2},{value:"FT transfer call",id:"ft-transfer-call",level:2},{value:"Checking users&#39; FT balance",id:"checking-users-ft-balance",level:2},{value:"Invalid FT transfer call",id:"invalid-ft-transfer-call",level:2},{value:"Using FTs with the CLI",id:"using-fts-with-the-cli",level:2},{value:"Auction architecture",id:"auction-architecture",level:2},{value:"Conclusion",id:"conclusion",level:2}];function f(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["To further develop this contract we will introduce another primitive: ",(0,a.jsx)(t.a,{href:"../../2.build/5.primitives/ft.md",children:"fungible tokens"}),". Instead of placing bids in $NEAR tokens, they will be placed in FTs. This may be useful if, for example, an auctioneer wants to keep the bid amounts constant in terms of dollars as an auction is carried out, so bids can be placed in stablecoins such as $USDC. Another use case is if a project like Ref Finance was holding its own auction and wanted the auction to happen in its project's token $REF."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"specifying-the-ft-contract",children:"Specifying the FT contract"}),"\n",(0,a.jsx)(t.p,{children:"We want to only accept bids in one type of fungible token; accepting many different FTs would make the value of each bid difficult to compare. We're also going to adjust the contract so that the auctioneer can specify a starting bid amount for the auction."}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"contract.ts",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/src/contract.ts#L23-L30",start:"23",end:"30"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(c.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/src/lib.rs#L33-L53",start:"33",end:"53"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"accepting-bids-in-fts",children:"Accepting bids in FTs"}),"\n",(0,a.jsxs)(t.p,{children:["When we were making bids in $NEAR tokens we would call the auction contract directly and attach $NEAR tokens to the call. With fungible tokens, since an account's balance lives on a separate contract, we call the FT contract which then calls the auction contract and transfers tokens. The method on the FT contract to do this is named ",(0,a.jsx)(t.code,{children:"ft_transfer_call"})," and it will always call a method in the target contract named ",(0,a.jsx)(t.code,{children:"ft_on_transfer"}),". Take a look ",(0,a.jsx)(t.a,{href:"../../2.build/5.primitives/ft.md#attaching-fts-to-a-call",children:"here"})," for more information."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ft_transfer_call-flow",src:n(17662).Z+"",width:"2277",height:"480"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"ft_on_transfer"})," method always has the same interface; the FT contract will pass it the ",(0,a.jsx)(t.code,{children:"sender"}),", the ",(0,a.jsx)(t.code,{children:"amount"})," of FTs being sent and a ",(0,a.jsx)(t.code,{children:"msg"})," which can be empty (which it will be here) or it can contain some information needed by the method (if you want to send multiple arguments in msg it is best practice to deliver this in JSON then parse it in the contract). The method returns the number of tokens to refund the user, in our case we will use all the tokens attached to the call for the bid unless the contract panics in which case the user will automatically be refunded their FTs in full."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"contract.ts",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/src/contract.ts#L57",start:"57",end:"57"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(c.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/src/lib.rs#L56",start:"56",end:"56"})})]}),"\n",(0,a.jsxs)(t.p,{children:["We need to confirm that the user is attaching fungible tokens when calling the method and that they are using the right FT, this is done by checking the predecessor's account ID. Since it's the FT contract that directly calls the auction contract, the ",(0,a.jsx)(t.code,{children:"predecessor"})," is now the account ID of the FT contract."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"contract.ts",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/src/contract.ts#L62",start:"62",end:"62"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(c.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/src/lib.rs#L62-L63",start:"62",end:"63"})})]}),"\n",(0,a.jsxs)(t.p,{children:["The bidder's account ID is now given by the argument ",(0,a.jsx)(t.code,{children:"sender_id"}),"."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"contract.ts",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/src/contract.ts#L64-L67",start:"64",end:"67"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(c.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/src/lib.rs#L75-L78",start:"75",end:"78"})})]}),"\n",(0,a.jsx)(t.p,{children:"When we want to return the funds to the previous bidder we now make a cross-contract call to the FT contract."}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:[(0,a.jsxs)(c.SQ,{value:"javascript",language:"javascript",children:[(0,a.jsx)(c.Ey,{fname:"call",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/src/contract.ts#L69-L75",start:"69",end:"75"}),(0,a.jsx)(c.Ey,{fname:"callback",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/src/contract.ts#L78-L81",start:"78",end:"81"})]}),(0,a.jsxs)(t.p,{children:["In JavaScript, we have to return the Promise to transfer the FTs but we also need to return how much to refund the user. So after transferring the FTs, we make a ",(0,a.jsx)(t.code,{children:"callback"})," to our own contract to resume the contract flow. Note that the callback is private so it can only be called by the contract. We return 0 because the method uses all the FTs in the call."]})]}),(0,a.jsxs)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:[(0,a.jsxs)(c.SQ,{value:"rust",language:"rust",children:[(0,a.jsx)(c.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/src/lib.rs#L81-L84",start:"81",end:"84"}),(0,a.jsx)(c.Ey,{fname:"ext.rs",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/src/ext.rs#L8-L11",start:"8",end:"11"})]}),(0,a.jsx)(t.p,{children:"We then return 0 because the method uses all the FTs in the call."}),(0,a.jsx)(c.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/src/lib.rs#L86",start:"86",end:"86"})]})]}),"\n",(0,a.jsxs)(o,{children:[(0,a.jsx)("summary",{children:" What happens if the cross-contract call fails? "}),(0,a.jsx)(t.p,{children:"The first time this method is called the contract will try to send itself FTs. Most fungible token contracts don't allow one to send themselves FTs so the cross-contract call will fail. However, since cross-contract calls are asynchronous and independent and we are not checking the result of the call then the auction contract does not care that the call failed and ft_on_transfer will complete successfully."}),(0,a.jsx)(t.p,{children:"In the other cases, the call to the fungible token contract could only fail if the receiver does not exist, the FT contract does not exist, the auction contract doesn't have enough fungible tokens to cover the amount being sent, or the receiver is not registered in the FT contract. Our contract is set up such that these errors cannot occur, the receiver must exist since they placed the previous bid, the FT contract exists since it was used to place the bid, the auction contract has enough FTs to cover the amount since it was sent that amount by the previous bid, and the receiver must be registered in the FT contract since they needed to have held the token in the first place to make a bid."})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"claiming-the-fts",children:"Claiming the FTs"}),"\n",(0,a.jsx)(t.p,{children:"When the auction is complete we need to send the fungible tokens to the auctioneer when we send the NFT to the highest bidder, we implement a similar call as when we were returning the funds just changing the arguments."}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(c.Ey,{fname:"contract.ts",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/src/contract.ts#L49-L53",start:"49",end:"53"}),(0,a.jsx)(t.p,{children:"In JavaScript, since we need to return each cross-contract call we chain the NFT and FT transfer."})]}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(c.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/src/lib.rs#L99-L109",start:"99",end:"109"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"creating-a-new-ft",children:"Creating a new FT"}),"\n",(0,a.jsxs)(t.p,{children:["Just as with the NFT contract, we will deploy an FT contract in the sandbox tests using a WASM file compiled from ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/FT",children:"this repo"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["When the contract is deployed it is initialized with ",(0,a.jsx)(t.code,{children:"new_default_meta"})," which sets the token's metadata, including things like its name and symbol, to default values while requiring the owner (where the token supply will sent), and the total supply of the token."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"main.ava.js",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/sandbox-test/main.ava.js#L28-L29",start:"28",end:"29"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(c.Ey,{fname:"test_basics.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/tests/test_basics.rs#L33-L46",start:"33",end:"46"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"registering-users-in-the-ft-contract",children:"Registering users in the FT contract"}),"\n",(0,a.jsxs)(t.p,{children:["For one to receive fungible tokens, first their account ID must be ",(0,a.jsx)(t.a,{href:"../../2.build/5.primitives/ft.md#registering-a-user",children:"registered"})," in the FT contract. A user has to register in an FT contract to pay for the storage used to track their amount of tokens. By default, a contract pays for its own storage, but not requiring a user to register and pay for storage would drain the contract of $NEAR tokens. When the contract is live we don't need to register the accounts that we transfer tokens back to since to make a bid in the first place they would have needed to be registered, but we do need to register the auction contract in the FT contract to receive bids and the auctioneer to receive the funds at the end of the auction. It is most convenient to register users from the frontend rather than the contract."]}),"\n",(0,a.jsx)(t.p,{children:"In our tests, since we are creating a new fungible token and new accounts we will actually have to register every account that will interact with FTs."}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"main.ava.js",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/sandbox-test/main.ava.js#L50-L53",start:"50",end:"53"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(c.Ey,{fname:"test_basics.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/tests/test_basics.rs#L81-L97",start:"81",end:"97"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"simple-ft-transfer-to-bidders",children:"Simple FT transfer to bidders"}),"\n",(0,a.jsxs)(t.p,{children:["Then we will transfer the bidders FTs so they can use them to bid. A simple transfer of FTs is done using the method ",(0,a.jsx)(t.code,{children:"ft_transfer"})," on the FT contract."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"main.ava.js",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/sandbox-test/main.ava.js#L56-L57",start:"56",end:"57"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsxs)(c.SQ,{value:"rust",language:"rust",children:[(0,a.jsx)(c.Ey,{fname:"Call ft_transfer",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/tests/test_basics.rs#L100-L107",start:"100",end:"107"}),(0,a.jsx)(c.Ey,{fname:"ft_transfer definition",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/tests/test_basics.rs#L291-L307",start:"291",end:"307"})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"ft-transfer-call",children:"FT transfer call"}),"\n",(0,a.jsxs)(t.p,{children:["As stated previously, to bid on the auction the bidder now calls ",(0,a.jsx)(t.code,{children:"ft_transfer_call"})," on the FT contract which subsequently calls the auction contract's ",(0,a.jsx)(t.code,{children:"ft_on_transfer"})," method with fungible tokens attached."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"main.ava.js",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/sandbox-test/main.ava.js#L101-L104",start:"101",end:"104"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsxs)(c.SQ,{value:"rust",language:"rust",children:[(0,a.jsx)(c.Ey,{fname:"Call ft_transfer_call",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/tests/test_basics.rs#L149-L161",start:"149",end:"161"}),(0,a.jsx)(c.Ey,{fname:"ft_transfer_call definition",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/tests/test_basics.rs#L322-L337",start:"322",end:"337"})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"checking-users-ft-balance",children:"Checking users' FT balance"}),"\n",(0,a.jsxs)(t.p,{children:["Previously, to check a user's $NEAR balance, we pulled the details from their account. Now we are using FTs we query the balance on the FT contract using ",(0,a.jsx)(t.code,{children:"ft_balance_of"}),", let's check that the contract's balance increased by the bid amount and the user's balance decreased by the bid amount."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"main.ava.js",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/sandbox-test/main.ava.js#L106-L109",start:"106",end:"109"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsxs)(c.SQ,{value:"rust",language:"rust",children:[(0,a.jsx)(c.Ey,{fname:"Call ft_balance_of",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/tests/test_basics.rs#L163-L166",start:"163",end:"166"}),(0,a.jsx)(c.Ey,{fname:"ft_balance_of definition",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/tests/test_basics.rs#L309-L320",start:"309",end:"320"})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"invalid-ft-transfer-call",children:"Invalid FT transfer call"}),"\n",(0,a.jsxs)(t.p,{children:["If we make a lower bid than the previous this will cause the auction contract to panic. One might expect that ",(0,a.jsx)(t.code,{children:"ft_transfer_call"})," will fail, but it does not. ",(0,a.jsx)(t.code,{children:"ft_on_transfer"})," will fail and the FT contract will recognize this and reverse the transfer of tokens. So after making an invalid bid, we should check that the call was successful but the parties involved in the transaction (the bidder and the contract) have the same balance of fungible tokens as they did before the call."]}),"\n",(0,a.jsx)(t.p,{children:"Previous to this, Bob made a bid of 60,000 and Alice was returned her bid bringing her balance back up to 150,000. Now when Alice makes an invalid of 50,000 Alice's balance should remain at 150,000 and the contract should remain at a balance of 60,000."}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"main.ava.js",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/04-ft-owner-claims-winner-gets-nft/sandbox-test/main.ava.js#L122-L130",start:"122",end:"130"})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(c.Ey,{fname:"test_basics.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/04-ft-owner-claims-winner-gets-nft/tests/test_basics.rs#L190-L207",start:"190",end:"207"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"using-fts-with-the-cli",children:"Using FTs with the CLI"}),"\n",(0,a.jsxs)(t.p,{children:["If you want to interact with the auction contract you're going to need FTs. For this example, we'll use $DAI where the contract address is ",(0,a.jsx)(t.code,{children:"dai.fakes.testnet"}),". One can easily acquire FTs through the ",(0,a.jsx)(t.a,{href:"https://near-faucet.io/",children:"testnet faucet"}),". Select DAI and withdraw to the account you will use to place a bid. If you take a look at the transaction details you can see that the faucet registers your account in the FT contract and then sends you DAI from the faucet account."]}),"\n",(0,a.jsxs)(t.p,{children:["When deploying the contract make sure to specify the FT contract ",(0,a.jsx)(t.code,{children:"dai.fakes.testnet"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The auction contract will need to be registered as well, you could do this by sending it an arbitrary amount of $DAI from the faucet or you can just register it since it doesn't need any FTs. You should also register the auctioneer,"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"near contract call-function as-transaction dai.fakes.testnet storage_deposit json-args '{\"account_id\": \"<auctionContractId>\"}' prepaid-gas '100.0 Tgas' attached-deposit '0.1 NEAR'\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now you can go ahead and place a bid. DAI has 18 decimals meaning that 1 $DAI is made up of 10^24 smallest units. To make a bid of 2 $DAI you can use the command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'near contract call-function as-transaction dai.fakes.testnet ft_transfer_call json-args \'{"receiver_id": "<auctionContractId>", "amount": "2000000000000000000", "msg": ""}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'1 yoctoNEAR\'\n'})}),"\n",(0,a.jsx)(t.h2,{id:"auction-architecture",children:"Auction architecture"}),"\n",(0,a.jsx)(t.p,{children:"When creating an application there are numerous ways to structure it. Here, we have one contract per auction meaning we have to deploy a new contract each time we want to host an auction. To make this easier we will leverage a factory contract to deploy auction contracts for an auctioneer. Deploying code for each auction gets expensive, with 100kb of storage costing 1 $NEAR, since each auction stores all the same type of information and implements the same methods one could instead decide to have multiple auctions per contract."}),"\n",(0,a.jsx)(t.p,{children:"In such case, the Contract struct would be a map of auctions. We would implement a method to create a new auction by adding an entry to the map with the specific details of that individual auction."}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"class Contract {\n    auctions: UnorderedMap<string, Auction>\n"})})}),(0,a.jsx)(i.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"pub struct Contract {\n    auctions: IterableMap<String, Auction>\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"However, this architecture could be deemed less secure since if a bad actor were to gain access to the contract they would have access to every auction instead of just one."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"In this section, you learned a lot about fungible tokens: how to send and receive FTs in a smart contract, and then in sandbox tests how to deploy and initialize an FT contract, how to register a user in an FT contract, and send them some tokens, how to attach FTs to a smart contract call and finally how to view the FT balance of a user. With that, we now have our completed auction smart contract!"}),"\n",(0,a.jsx)(t.p,{children:"Taking a further step back we've taken a very simple auction contract and transformed it into a more production contract with thorough testing. To improve the auction we learned how to make a contract more secure by locking it, added a prize by introducing NFTs, and enabled auctioneers to host auctions with FTs."}),"\n",(0,a.jsxs)(t.p,{children:["Up to now, we've just interacted with the contract via the CLI. In the ",(0,a.jsx)(t.a,{href:"/vi/tutorials/auction/creating-a-frontend",children:"next part"}),", we'll learn the basics of creating frontends for NEAR contracts by creating a simple frontend for our auction contract so users can seamlessly interact with it."]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(36905);const s={tabItem:"tabItem_Ymn6"};var r=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(67294),s=n(36905),r=n(12466),i=n(16550),c=n(20469),o=n(91980),l=n(67392),u=n(20812);function h(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.lx)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId,r=(0,i.k6)(),c=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:s});return[(0,o._X)(c),(0,a.useCallback)((function(e){if(c){var t=new URLSearchParams(r.location.search);t.set(c,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[c,r])]}function b(e){var t,n,s,r,i=e.defaultValue,o=e.queryString,l=void 0!==o&&o,h=e.groupId,b=d(e),p=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:b})})),g=p[0],w=p[1],v=m({queryString:l,groupId:h}),x=v[0],j=v[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,u.Nk)(t),s=n[0],r=n[1],[s,(0,a.useCallback)((function(e){t&&r.set(e)}),[t,r])]),T=y[0],k=y[1],F=function(){var e=null!=x?x:T;return f({value:e,tabValues:b})?e:null}();return(0,c.Z)((function(){F&&w(F)}),[F]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);w(e),j(e),k(e)}),[j,k,b]),tabValues:b}}var p=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(85893);function v(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,c=e.tabValues,o=[],l=(0,r.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=o.indexOf(t),s=c[n].value;s!==a&&(l(t),i(s))},h=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,s=o.indexOf(e.currentTarget)+1;n=null!=(a=o[s])?a:o[0];break;case"ArrowLeft":var r,i=o.indexOf(e.currentTarget)-1;n=null!=(r=o[i])?r:o[o.length-1]}null==(t=n)||t.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:c.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,w.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return o.push(e)},onKeyDown:h,onClick:u},r,{className:(0,s.Z)("tabs__item",g.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var c=i.find((function(e){return e.props.value===r}));return c?(0,a.cloneElement)(c,{className:(0,s.Z)("margin-top--md",c.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function j(e){var t=b(e);return(0,w.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,w.jsx)(v,Object.assign({},t,e)),(0,w.jsx)(x,Object.assign({},t,e))]})}function y(e){var t=(0,p.Z)();return(0,w.jsx)(j,Object.assign({},e,{children:h(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>m,Ey:()=>p,SQ:()=>b});var a=n(67294),s=n(74866),r=n(85162),i=n(74165),c=n(15861),o=n(1841),l=n.n(o),u=n(85893);function h(){return(h=(0,c.Z)((0,i.Z)().mark((function e(t,n,a){var s,r,c,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=localStorage.getItem(t+"-until"))&&r>Date.now())){e.next=5;break}s=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:s=e.sent,localStorage.setItem(t,s),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return c=s.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):c.length,c=c.slice(n,a),o=c.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",c.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const d=function(e){var t=e.url,n=e.start,s=e.end,r=e.language,i=e.fname,c=e.metastring,o=(0,a.useState)("Loading..."),d=o[0],f=o[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),s=a[0],r=a[1];return a[2],"https://raw.githubusercontent.com/"+s+"/"+r+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return h.apply(this,arguments)}(e,n,s);a.then((function(e){return f(e)}))})),(0,u.jsxs)("div",{fname:i,children:[(0,u.jsx)(l(),{language:r,metastring:c+" showLineNumbers",children:d}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(r.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function b(e){var t=e.children,n=e.language,a=e.showSingleFName;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),s=n.start,r=n.end,i=n.fname;if(e.type===p)return p({url:a,start:s,end:r,language:t,fname:i});return e}(e,n)})),1!=t.length||a?(0,u.jsx)(s.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))}):(0,u.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]})}function p(e){var t=e.url,n=e.start,a=e.end,s=e.language,r=e.fname,i=e.metastring;return d({url:t,start:n,end:a,language:s,fname:r,metastring:i})}},17662:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/auction-ft-transfer-22e80680fe9ecdaa4dca4853f70ca2af.png"}}]);