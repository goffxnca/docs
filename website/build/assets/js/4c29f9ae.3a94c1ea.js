"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5619],{17781:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=r(85893),t=r(11151);const a={id:"run-lake-indexer",sidebar_label:"Running Lake Indexer"},d="Running NEAR Lake Indexer",o={id:"build/data-infrastructure/lake-framework/running-near-lake/run-lake-indexer",title:"Running NEAR Lake Indexer",description:"NEAR Lake is a blockchain indexer built on top of NEAR Indexer microframework",source:"@site/../docs/2.build/6.data-infrastructure/lake-framework/running-near-lake/run-near-lake.md",sourceDirName:"2.build/6.data-infrastructure/lake-framework/running-near-lake",slug:"/build/data-infrastructure/lake-framework/running-near-lake/run-lake-indexer",permalink:"/build/data-infrastructure/lake-framework/running-near-lake/run-lake-indexer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-framework/running-near-lake/run-near-lake.md",tags:[],version:"current",lastUpdatedBy:"Tayfun Elmas",lastUpdatedAt:1731515704e3,frontMatter:{id:"run-lake-indexer",sidebar_label:"Running Lake Indexer"},sidebar:"build",previous:{title:"Migrating to NEAR Lake framework",permalink:"/build/data-infrastructure/lake-framework/migrating-to-near-lake-framework"},next:{title:"Start options",permalink:"/build/data-infrastructure/lake-framework/running-near-lake/lake-start-options"}},i={},c=[{value:"How to start",id:"how-to-start",level:2},{value:"Prepare Development Environment",id:"prepare-development-environment",level:3},{value:"Compile NEAR Lake",id:"compile-near-lake",level:3},{value:"Configure NEAR Lake",id:"configure-near-lake",level:3},{value:"Run NEAR Lake",id:"run-near-lake",level:3},{value:"Syncing",id:"syncing",level:2},{value:"Mainnet",id:"mainnet",level:3},{value:"Testnet",id:"testnet",level:3},{value:"Running NEAR Lake as an archival node",id:"running-near-lake-as-an-archival-node",level:2},{value:"Using the data",id:"using-the-data",level:2},{value:"Custom S3 storage",id:"custom-s3-storage",level:2},{value:"Data structure",id:"data-structure",level:3},{value:"Access the data",id:"access-the-data",level:3},{value:"NEAR Lake Framework",id:"near-lake-framework",level:3}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"running-near-lake-indexer",children:"Running NEAR Lake Indexer"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["NEAR Lake is a blockchain indexer built on top of ",(0,s.jsx)(n.a,{href:"https://github.com/nearprotocol/nearcore/tree/master/chain/indexer",children:"NEAR Indexer microframework"}),"\nto watch the network and store all the events as JSON files on AWS S3."]})}),"\n",(0,s.jsx)(n.h2,{id:"how-to-start",children:"How to start"}),"\n",(0,s.jsx)(n.p,{children:"The Lake Indexer setup consists of the following components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AWS S3 Bucket as a storage"}),"\n",(0,s.jsxs)(n.li,{children:["NEAR Lake binary that operates as a regular NEAR Protocol peer-to-peer node, so you will operate it as\nany other ",(0,s.jsx)(n.a,{href:"https://near-nodes.io/rpc/hardware-rpc",children:"Regular/RPC Node in NEAR"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"prepare-development-environment",children:"Prepare Development Environment"}),"\n",(0,s.jsx)(n.p,{children:"Before you proceed, make sure you have the following software installed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://rustup.rs/",children:"Rust compiler"})," of the version that is mentioned in ",(0,s.jsx)(n.code,{children:"rust-toolchain"})," file in the root of\n",(0,s.jsx)(n.a,{href:"https://github.com/nearprotocol/nearcore",children:"nearcore"})," project."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Ensure you have ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html",children:"AWS Credentials configured"}),"\nFrom AWS Docs:"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"For example, the files generated by the AWS CLI for a default profile configured with aws configure looks similar to the following."}),"\n",(0,s.jsx)(n.p,{children:"~/.aws/credentials"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[default]\naws_access_key_id=AKIAIOSFODNN7EXAMPLE\naws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"compile-near-lake",children:"Compile NEAR Lake"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cargo build --release\n"})}),"\n",(0,s.jsx)(n.h3,{id:"configure-near-lake",children:"Configure NEAR Lake"}),"\n",(0,s.jsx)(n.p,{children:"To connect NEAR Lake to the specific chain you need to have necessary configs, you can generate it as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ ./target/release/near-lake --home ~/.near/testnet init --chain-id testnet --download-config --download-genesis\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The above code will download the official genesis config and generate necessary configs. You can replace ",(0,s.jsx)(n.code,{children:"testnet"})," in the command above to different network ID (",(0,s.jsx)(n.code,{children:"betanet"}),", ",(0,s.jsx)(n.code,{children:"mainnet"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Configs for the specified network are in the ",(0,s.jsx)(n.code,{children:"--home"})," provided folder. We need to ensure that NEAR Lake follows\nall the necessary shards, so ",(0,s.jsx)(n.code,{children:'"tracked_shards"'})," parameters in ",(0,s.jsx)(n.code,{children:"~/.near/testnet/config.json"})," needs to be configured properly.\nCurrently, ",(0,s.jsx)(n.code,{children:"nearcore"})," treats empty value for ",(0,s.jsx)(n.code,{children:'"tracked_shards"'}),' as "do not track any shard" and ',(0,s.jsx)(n.strong,{children:"any value"}),' as "track all shards".\nFor example, in order to track all shards, you just add the shard #0 to the list:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'...\n"tracked_shards": [0],\n...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"run-near-lake",children:"Run NEAR Lake"}),"\n",(0,s.jsxs)(n.p,{children:["Commands to run NEAR Lake, after ",(0,s.jsx)(n.code,{children:"./target/release/near-lake"})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Command"}),(0,s.jsx)(n.th,{children:"Key/Subcommand"}),(0,s.jsx)(n.th,{children:"Required/Default"}),(0,s.jsx)(n.th,{children:"Responsible for"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--home"})}),(0,s.jsxs)(n.td,{children:["Default ",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"~/.near"})]}),(0,s.jsxs)(n.td,{children:["Tells the node where too look for necessary files: ",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"config.json"}),(0,s.jsx)("br",{}),", ",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"genesis.json"}),(0,s.jsx)("br",{}),", ",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"node_key.json"}),(0,s.jsx)("br",{}),", and ",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"data"}),(0,s.jsx)("br",{})," folder"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"init"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Tells the node to generate config files in ",(0,s.jsx)(n.code,{children:"--home-dir"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--chain-id"})}),(0,s.jsxs)(n.td,{children:["Required",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," _ ",(0,s.jsx)(n.code,{children:"localnet"}),(0,s.jsx)("br",{})," _ ",(0,s.jsx)(n.code,{children:"testnet"}),(0,s.jsx)("br",{})," * ",(0,s.jsx)(n.code,{children:"mainnet"})]}),(0,s.jsx)(n.td,{children:"Defines the chain to generate config files for"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--download-config"})}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsxs)(n.td,{children:["If provided tells the node to download ",(0,s.jsx)(n.code,{children:"config.json"})," from the public URL. You can download them manually",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," - ",(0,s.jsx)(n.a,{href:"https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/testnet/rpc/config.json",children:"testnet config.json"}),(0,s.jsx)("br",{})," - ",(0,s.jsx)(n.a,{href:"https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/mainnet/rpc/config.json",children:"mainnet config.json"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--download-genesis"})}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsxs)(n.td,{children:["If provided tells the node to download ",(0,s.jsx)(n.code,{children:"genesis.json"})," from the public URL. You can download them manually",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," - ",(0,s.jsx)(n.a,{href:"https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/testnet/genesis.json",children:"testnet genesis.json"}),(0,s.jsx)("br",{})," - ",(0,s.jsx)(n.a,{href:"https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/mainnet/genesis.json",children:"mainnet genesis.json"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["TODO:",(0,s.jsx)("br",{}),"Other ",(0,s.jsx)(n.code,{children:"neard"})," keys"]}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"run"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Runs the node"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--bucket"})}),(0,s.jsx)(n.td,{children:"Required"}),(0,s.jsx)(n.td,{children:"AWS S3 Bucket name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--region"})}),(0,s.jsx)(n.td,{children:"Required"}),(0,s.jsx)(n.td,{children:"AWS S3 Bucket region"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--fallback-region"})}),(0,s.jsx)(n.td,{children:"Default eu-central-1"}),(0,s.jsx)(n.td,{children:"AWS S3 Fallback region"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--endpoint"})}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsx)(n.td,{children:"AWS S3 compatible API endpoint"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--stream-while-syncing"})}),(0,s.jsx)(n.td,{children:"Optional"}),(0,s.jsx)(n.td,{children:"If provided Indexer streams blocks while they appear on the node instead of waiting the node to be fully synced"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--concurrency"})}),(0,s.jsx)(n.td,{children:"Default 1"}),(0,s.jsx)(n.td,{children:"Defines the concurrency for the process of saving block data to AWS S3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sync-from-latest"})}),(0,s.jsxs)(n.td,{children:["One of the ",(0,s.jsx)(n.code,{children:"sync-"})," subcommands is required"]}),(0,s.jsx)(n.td,{children:"Tells the node to start indexing from the latest block in the network"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sync-from-interruption"})}),(0,s.jsxs)(n.td,{children:["One of the ",(0,s.jsx)(n.code,{children:"sync-"})," subcommands is required"]}),(0,s.jsxs)(n.td,{children:["Tells the node to start indexing from the block the node was interrupted on (if it is a first start it will fallback to ",(0,s.jsx)(n.code,{children:"sync-from-latest"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sync-from-block --height N"})}),(0,s.jsxs)(n.td,{children:["One of the ",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"sync-"}),(0,s.jsx)("br",{})," subcommands is required"]}),(0,s.jsxs)(n.td,{children:["Tells the node to start indexing from the specified block height ",(0,s.jsx)(n.code,{children:"N"})," (",(0,s.jsx)(n.strong,{children:"Ensure"})," you node data has the block you want to start from)"]})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ ./target/release/near-lake --home ~/.near/testnet run --stream-while-syncing --concurrency 50 sync-from-latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"After the network is synced, you should see logs of every block height currently received by NEAR Lake."}),"\n",(0,s.jsx)(n.h2,{id:"syncing",children:"Syncing"}),"\n",(0,s.jsxs)(n.p,{children:["Whenever you run NEAR Lake for any network except localnet you'll need to sync with the network.\nThis is required because it's a natural behavior of ",(0,s.jsx)(n.code,{children:"nearcore"})," node and NEAR Lake is a wrapper\nfor the regular ",(0,s.jsx)(n.code,{children:"nearcore"})," node. In order to work and index the data your node must be synced\nwith the network. This process can take a while, so we suggest to download a fresh backup of\nthe ",(0,s.jsx)(n.code,{children:"data"})," folder and put it in you ",(0,s.jsx)(n.code,{children:"--home-dir"})," of your choice (by default it is ",(0,s.jsx)(n.code,{children:"~/.near"}),")"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Running your NEAR Lake node on top of a backup data will reduce the time of syncing process\nbecause your node will download only the data after the backup was cut and it takes reasonable amount time."})}),"\n",(0,s.jsx)(n.p,{children:"All the backups can be downloaded from the public S3 bucket which contains latest daily snapshots:"}),"\n",(0,s.jsxs)(n.p,{children:["You will need ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html",children:"AWS CLI"})," to be installed in order to download the backups."]}),"\n",(0,s.jsx)(n.h3,{id:"mainnet",children:"Mainnet"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ aws s3 --no-sign-request cp s3://near-protocol-public/backups/mainnet/rpc/latest .\n$ LATEST=$(cat latest)\n$ aws s3 --no-sign-request cp --no-sign-request --recursive s3://near-protocol-public/backups/mainnet/rpc/$LATEST ~/.near/data\n"})}),"\n",(0,s.jsx)(n.h3,{id:"testnet",children:"Testnet"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ aws s3 --no-sign-request cp s3://near-protocol-public/backups/testnet/rpc/latest .\n$ LATEST=$(cat latest)\n$ aws s3 --no-sign-request cp --no-sign-request --recursive s3://near-protocol-public/backups/testnet/rpc/$LATEST ~/.near/data\n"})}),"\n",(0,s.jsx)(n.h2,{id:"running-near-lake-as-an-archival-node",children:"Running NEAR Lake as an archival node"}),"\n",(0,s.jsxs)(n.p,{children:["It's not necessary but in order to index everything in the network it is better to do it from the genesis.\n",(0,s.jsx)(n.code,{children:"nearcore"})," node is running in non-archival mode by default. That means that the node keeps data only\nfor ",(0,s.jsx)(n.a,{href:"https://docs.near.org/concepts/basics/epoch",children:"5 last epochs"}),". In order to index data from the genesis\nyou need to turn the node in archival mode."]}),"\n",(0,s.jsxs)(n.p,{children:["To do it you need to update ",(0,s.jsx)(n.code,{children:"config.json"})," located in ",(0,s.jsx)(n.code,{children:"--home-dir"})," (by default it is ",(0,s.jsx)(n.code,{children:"~/.near"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Find next keys in the config and update them as following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "archive": true,\n  "tracked_shards": [0],\n  ...\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The syncing process in archival mode can take a lot of time, so it's better to download a backup provided by NEAR\nand put it in your ",(0,s.jsx)(n.code,{children:"data"})," folder. After that your node will download only the data after the backup was cut and it\ntakes reasonable amount time."]}),"\n",(0,s.jsxs)(n.p,{children:["All the backups can be downloaded from the public ",(0,s.jsx)(n.a,{href:"https://near-nodes.io/intro/node-data-snapshots",children:"S3 bucket"})," which contains the latest daily snapshots."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://near-nodes.io/archival/run-archival-node-with-nearup",children:"this link"})," for reference"]}),"\n",(0,s.jsx)(n.h2,{id:"using-the-data",children:"Using the data"}),"\n",(0,s.jsx)(n.p,{children:"We write all the data to AWS S3 buckets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"near-lake-data-testnet"})," (",(0,s.jsx)(n.code,{children:"eu-central-1"})," region) for testnet"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"near-lake-data-mainnet"})," (",(0,s.jsx)(n.code,{children:"eu-central-1"})," region) for mainnet"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"custom-s3-storage",children:"Custom S3 storage"}),"\n",(0,s.jsxs)(n.p,{children:["In case you want to run you own ",(0,s.jsx)(n.code,{children:"near-lake"})," instance and store data in some S3 compatible storage (",(0,s.jsx)(n.a,{href:"https://min.io/",children:"Minio"})," or ",(0,s.jsx)(n.a,{href:"https://localstack.cloud/",children:"Localstack"})," as example)\nYou can override default S3 API endpoint by using ",(0,s.jsx)(n.code,{children:"--endpoint"})," option"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["run ",(0,s.jsx)(n.code,{children:"minio"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ mkdir -p /data/near-lake-custom && minio server /data\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["run ",(0,s.jsx)(n.code,{children:"near-lake"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ ./target/release/near-lake --home ~/.near/testnet run --endpoint http://127.0.0.1:9000 --bucket near-lake-custom sync-from-latest\n"})}),"\n",(0,s.jsx)(n.h3,{id:"data-structure",children:"Data structure"}),"\n",(0,s.jsx)(n.p,{children:"The data structure we use is the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<block_height>/\n  block.json\n  shard_0.json\n  shard_1.json\n  ...\n  shard_N.json\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<block_height>"})," is a 12-character-long ",(0,s.jsx)(n.code,{children:"u64"})," string with leading zeros (e.g ",(0,s.jsx)(n.code,{children:"000042839521"}),"). ",(0,s.jsx)(n.a,{href:"https://github.com/near/near-lake/issues/23",children:"See this issue for a reasoning"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"block_json"})," contains JSON-serialized ",(0,s.jsx)(n.a,{href:"https://github.com/near/nearcore/blob/e9a28c46c2bea505b817abf484e6015a61ea7d01/core/primitives/src/views.rs#L711-L716",children:(0,s.jsx)(n.code,{children:"BlockView"})})," struct. ",(0,s.jsx)(n.strong,{children:"Note:"})," this struct might change in the future, we will announce it"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shard_N.json"})," where ",(0,s.jsx)(n.code,{children:"N"})," is ",(0,s.jsx)(n.code,{children:"u64"})," starting from ",(0,s.jsx)(n.code,{children:"0"}),". Represents the index number of the shard. In order to find out the expected number of shards in the block you can look in ",(0,s.jsx)(n.code,{children:"block.json"})," at ",(0,s.jsx)(n.code,{children:".header.chunks_included"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"access-the-data",children:"Access the data"}),"\n",(0,s.jsxs)(n.p,{children:["All NEAR Lake AWS S3 buckets have ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html",children:"Request Payer"})," enabled. It means that anyone with their own AWS credentials can List and Read the bucket's content and ",(0,s.jsx)(n.strong,{children:"be charged for it by AWS"}),". Connections to the bucket have to be done with AWS credentials provided. See ",(0,s.jsx)(n.a,{href:"https://github.com/near/near-lake-framework",children:"NEAR Lake Framework"})," for a reference."]}),"\n",(0,s.jsx)(n.h3,{id:"near-lake-framework",children:"NEAR Lake Framework"}),"\n",(0,s.jsxs)(n.p,{children:["Once we ",(0,s.jsx)(n.a,{href:"https://github.com/near/near-lake/issues/22",children:"set up the public access to the buckets"})," anyone will be able to build their own code to read it through."]}),"\n",(0,s.jsxs)(n.p,{children:["For our own needs we are working on ",(0,s.jsx)(n.a,{href:"https://github.com/near/near-lake-framework",children:"NEAR Lake Framework"})," to have a simple way to create an indexer on top of the data stored by NEAR Lake itself."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["See the official NEAR Lake Framework ",(0,s.jsx)(n.a,{href:"https://gov.near.org/t/announcement-near-lake-framework-brand-new-word-in-indexer-building-approach/17668",children:"announcement on the NEAR Gov Forum"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>d});var s=r(67294);const t={},a=s.createContext(t);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);