"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9406],{46901:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=r(85893),t=r(11151);const a={sidebar_label:"Migrating to NEAR Lake framework"},s="Migrating to NEAR Lake Framework",o={id:"build/data-infrastructure/lake-framework/migrating-to-near-lake-framework",title:"Migrating to NEAR Lake Framework",description:"We encourage everyone who don't have a hard requirement to use NEAR Indexer Framework consider the migration to NEAR Lake Framework.",source:"@site/../docs/2.build/6.data-infrastructure/lake-framework/migrating-to-near-lake-framework.md",sourceDirName:"2.build/6.data-infrastructure/lake-framework",slug:"/build/data-infrastructure/lake-framework/migrating-to-near-lake-framework",permalink:"/build/data-infrastructure/lake-framework/migrating-to-near-lake-framework",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-framework/migrating-to-near-lake-framework.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1714484939e3,frontMatter:{sidebar_label:"Migrating to NEAR Lake framework"},sidebar:"build",previous:{title:"NEAR Lake Indexer Tutorial",permalink:"/build/data-infrastructure/lake-framework/near-lake-state-changes-indexer"},next:{title:"Lake Primitive Types",permalink:"/build/data-infrastructure/lake-framework/building-indexers/primitives"}},c={},l=[{value:"Changing the dependencies",id:"changing-the-dependencies",level:2},{value:"Change the clap configs",id:"change-the-clap-configs",level:2},{value:"Replacing the indexer instantiation",id:"replacing-the-indexer-instantiation",level:2},{value:"Imports before",id:"imports-before",level:3},{value:"Imports after",id:"imports-after",level:3},{value:"Creating <code>main()</code>",id:"creating-main",level:3},{value:"Final async main with NEAR Lake Framework stream",id:"final-async-main-with-near-lake-framework-stream",level:3},{value:"Changes in other function related to data types",id:"changes-in-other-function-related-to-data-types",level:2},{value:"<code>listen_blocks</code>",id:"listen_blocks",level:3},{value:"<code>is_tx_receiver_watched()</code>",id:"is_tx_receiver_watched",level:2},{value:"Credentials",id:"credentials",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Diffs",id:"diffs",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"migrating-to-near-lake-framework",children:"Migrating to NEAR Lake Framework"}),"\n",(0,i.jsxs)(n.p,{children:["We encourage everyone who don't have a hard requirement to use ",(0,i.jsx)(n.a,{href:"/concepts/advanced/near-indexer-framework",children:"NEAR Indexer Framework"})," consider the migration to ",(0,i.jsx)(n.a,{href:"/concepts/advanced/near-lake-framework",children:"NEAR Lake Framework"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial we'll show you how to migrate the project using ",(0,i.jsx)(n.a,{href:"https://github.com/near-examples/indexer-tx-watcher-example",children:"indexer-tx-watcher-example"})," as a showcase."]}),"\n",(0,i.jsx)(n.admonition,{title:"Source code",type:"info",children:(0,i.jsxs)(n.p,{children:["The source code for the migrated indexer can be found on GitHub ",(0,i.jsx)(n.a,{href:"https://github.com/near-examples/indexer-tx-watcher-example-lake/tree/0.4.0",children:"https://github.com/near-examples/indexer-tx-watcher-example-lake/tree/0.4.0"})]})}),"\n",(0,i.jsx)(n.admonition,{title:"Diffs",type:"info",children:(0,i.jsxs)(n.p,{children:["We've ",(0,i.jsx)(n.a,{href:"#diffs",children:"posted the diffs for the reference in the end"})," of the article, you can scroll down to them if diffs are all you need in order to migrate your indexer"]})}),"\n",(0,i.jsx)(n.h2,{id:"changing-the-dependencies",children:"Changing the dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["First of all we'll start from the dependencies in ",(0,i.jsx)(n.code,{children:"Cargo.toml"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:"title=src/Cargo.toml",children:'\n[package]\nname = "indexer-tx-watcher-example"\nversion = "0.1.0"\nauthors = ["Near Inc <hello@nearprotocol.com>"]\nedition = "2018"\n\n[dependencies]\nactix = "=0.11.0-beta.2"\nactix-rt = "=2.2.0"  # remove it once actix is upgraded to 0.11+\nbase64 = "0.11"\nclap = "3.0.0-beta.1"\nopenssl-probe = { version = "0.1.2" }\nserde = { version = "1", features = ["derive"] }\nserde_json = "1.0.55"\ntokio = { version = "1.1", features = ["sync"] }\ntracing = "0.1.13"\ntracing-subscriber = "0.2.4"\n\nnear-indexer = { git = "https://github.com/near/nearcore", rev = "25b000ae4dd9fe784695d07a3f2e99d82a6f10bd" }\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Update ",(0,i.jsx)(n.code,{children:"edition"})," to ",(0,i.jsx)(n.code,{children:"2021"})]}),"\n",(0,i.jsxs)(n.li,{children:["Drop ",(0,i.jsx)(n.code,{children:"actix"})," crates"]}),"\n",(0,i.jsxs)(n.li,{children:["Drop ",(0,i.jsx)(n.code,{children:"openssl-probe"})," crate"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"futures"})," and ",(0,i.jsx)(n.code,{children:"itertools"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add features to ",(0,i.jsx)(n.code,{children:"tokio"})," as we will be using tokio runtime"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"tokio-stream"})," crate"]}),"\n",(0,i.jsxs)(n.li,{children:["Replace ",(0,i.jsx)(n.code,{children:"near-indexer"})," with ",(0,i.jsx)(n.code,{children:"near-lake-framework"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"So in the end we'll have this after all:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:"title=src/Cargo.toml",children:'[package]\nname = "indexer-tx-watcher-example"\nversion = "0.1.0"\nauthors = ["Near Inc <hello@nearprotocol.com>"]\nedition = "2021"\n\n[dependencies]\nbase64 = "0.11"\nclap = { version = "3.1.6", features = ["derive"] }\nfutures = "0.3.5"\nserde = { version = "1", features = ["derive"] }\nserde_json = "1.0.55"\nitertools = "0.9.0"\ntokio = { version = "1.1", features = ["sync", "time", "macros", "rt-multi-thread"] }\ntokio-stream = { version = "0.1" }\ntracing = "0.1.13"\ntracing-subscriber = "0.2.4"\n\nnear-lake-framework = "0.4.0"\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"change-the-clap-configs",children:"Change the clap configs"}),"\n",(0,i.jsxs)(n.p,{children:["Currently we have structure ",(0,i.jsx)(n.code,{children:"Opts"})," that has a subcommand with ",(0,i.jsx)(n.code,{children:"Run"})," and ",(0,i.jsx)(n.code,{children:"Init"})," command. Since ",(0,i.jsx)(n.a,{href:"/concepts/advanced/near-lake-framework",children:"NEAR Lake Framework"})," doesn't need ",(0,i.jsx)(n.code,{children:"data"})," and config files we don't need ",(0,i.jsx)(n.code,{children:"Init"})," at all. So we need to combine some structures into ",(0,i.jsx)(n.code,{children:"Opts"})," itself."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/config.rs",children:'...\n/// NEAR Indexer Example\n/// Watches for stream of blocks from the chain\n#[derive(Clap, Debug)]\n#[clap(version = "0.1", author = "Near Inc. <hello@nearprotocol.com>")]\npub(crate) struct Opts {\n    /// Sets a custom config dir. Defaults to ~/.near/\n    #[clap(short, long)]\n    pub home_dir: Option<std::path::PathBuf>,\n    #[clap(subcommand)]\n    pub subcmd: SubCommand,\n}\n\n#[derive(Clap, Debug)]\npub(crate) enum SubCommand {\n    /// Run NEAR Indexer Example. Start observe the network\n    Run(RunArgs),\n    /// Initialize necessary configs\n    Init(InitConfigArgs),\n}\n\n#[derive(Clap, Debug)]\npub(crate) struct RunArgs {\n    /// account ids to watch for\n    #[clap(long)]\n    pub accounts: String,\n}\n\n#[derive(Clap, Debug)]\npub(crate) struct InitConfigArgs {\n    ...\n}\n...\n'})}),"\n",(0,i.jsx)(n.p,{children:"We are going:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Drop ",(0,i.jsx)(n.code,{children:"InitConfigArgs"})," completely"]}),"\n",(0,i.jsxs)(n.li,{children:["Move the content from ",(0,i.jsx)(n.code,{children:"RunArgs"})," to ",(0,i.jsx)(n.code,{children:"Opts"})," and then drop ",(0,i.jsx)(n.code,{children:"RunArgs"})]}),"\n",(0,i.jsxs)(n.li,{children:["Drop ",(0,i.jsx)(n.code,{children:"home_dir"})," from ",(0,i.jsx)(n.code,{children:"Opts"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"block_height"})," to ",(0,i.jsx)(n.code,{children:"Opts"})," to know from which block height to start indexing"]}),"\n",(0,i.jsxs)(n.li,{children:["Refactor ",(0,i.jsx)(n.code,{children:"SubCommand"})," to have to variants: mainnet and testnet to define what chain to index"]}),"\n",(0,i.jsxs)(n.li,{children:["And add ",(0,i.jsx)(n.code,{children:"Clone"})," detive to the structs for later"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/config.rs",children:'/// NEAR Indexer Example\n/// Watches for stream of blocks from the chain\n#[derive(Clap, Debug, Clone)]\n#[clap(version = "0.1", author = "Near Inc. <hello@nearprotocol.com>")]\npub(crate) struct Opts {\n    /// block height to start indexing from\n    #[clap(long)]\n    pub block_height: u64,\n    /// account ids to watch for\n    #[clap(long)]\n    pub accounts: String,\n    #[clap(subcommand)]\n    pub subcmd: SubCommand,\n}\n\n#[derive(Clap, Debug, Clone)]\npub(crate) enum SubCommand {\n    Mainnet,\n    Testnet,\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In the end of the file we have one implementation we need to replace."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/config.rs",children:"...\nimpl From<InitConfigArgs> for near_indexer::InitConfigArgs {\n    ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We want to be able to cast ",(0,i.jsx)(n.code,{children:"Opts"})," to ",(0,i.jsx)(n.code,{children:"near_lake_framework::LakeConfig"}),". So we're going to create a new implementation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/config.rs",children:'impl From<Opts> for near_lake_framework::LakeConfig {\n    fn from(opts: Opts) -> Self {\n        let mut lake_config =\n            near_lake_framework::LakeConfigBuilder::default().start_block_height(opts.block_height);\n\n        match &opts.subcmd {\n            SubCommand::Mainnet => {\n                lake_config = lake_config.mainnet();\n            }\n            SubCommand::Testnet => {\n                lake_config = lake_config.testnet();\n            }\n        };\n\n        lake_config.build().expect("Failed to build LakeConfig")\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["And the final move is to change ",(0,i.jsx)(n.code,{children:"init_logging"})," function to remove redundant log subscriptions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/config.rs",children:'\n...\npub(crate) fn init_logging() {\n    let env_filter = EnvFilter::new(\n        "tokio_reactor=info,near=info,stats=info,telemetry=info,indexer_example=info,indexer=info,near-performance-metrics=info",\n    );\n    tracing_subscriber::fmt::Subscriber::builder()\n        .with_env_filter(env_filter)\n        .with_writer(std::io::stderr)\n        .init();\n}\n...\n'})}),"\n",(0,i.jsx)(n.p,{children:"Replace it with"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/config.rs",children:'...\npub(crate) fn init_logging() {\n    let env_filter = EnvFilter::new("near_lake_framework=info");\n    tracing_subscriber::fmt::Subscriber::builder()\n        .with_env_filter(env_filter)\n        .with_writer(std::io::stderr)\n        .init();\n}\n...\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally we're done with ",(0,i.jsx)(n.code,{children:"src/config.rs"})," and now we can move on to ",(0,i.jsx)(n.code,{children:"src/main.rs"})]}),"\n",(0,i.jsx)(n.h2,{id:"replacing-the-indexer-instantiation",children:"Replacing the indexer instantiation"}),"\n",(0,i.jsxs)(n.p,{children:["Since we can use ",(0,i.jsx)(n.code,{children:"tokio"})," runtime and make our ",(0,i.jsx)(n.code,{children:"main"})," function asynchronous it's shorted to show the recreating of the ",(0,i.jsx)(n.code,{children:"main"})," function than the process of refactoring."]}),"\n",(0,i.jsx)(n.p,{children:"Let's start from import section"}),"\n",(0,i.jsx)(n.h3,{id:"imports-before",children:"Imports before"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"use std::str::FromStr;\n\nuse std::collections::{HashMap, HashSet};\n\nuse clap::Clap;\nuse tokio::sync::mpsc;\nuse tracing::info;\n\nuse configs::{init_logging, Opts, SubCommand};\n\nmod configs;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"imports-after",children:"Imports after"}),"\n",(0,i.jsxs)(n.p,{children:["We're adding ",(0,i.jsx)(n.code,{children:"near_lake_framework"})," imports and remove redundant import from ",(0,i.jsx)(n.code,{children:"configs"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"use std::str::FromStr;\n\nuse std::collections::{HashMap, HashSet};\n\nuse clap::Clap;\nuse tokio::sync::mpsc;\nuse tracing::info;\n\nuse near_lake_framework::near_indexer_primitives;\nuse near_lake_framework::LakeConfig;\n\nuse configs::{init_logging, Opts};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"creating-main",children:["Creating ",(0,i.jsx)(n.code,{children:"main()"})]}),"\n",(0,i.jsxs)(n.p,{children:["Let's create an async ",(0,i.jsx)(n.code,{children:"main()"})," function, call ",(0,i.jsx)(n.code,{children:"init_logging"})," and read the ",(0,i.jsx)(n.code,{children:"Opts"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"#[tokio::main]\nasync fn main() -> Result<(), tokio::io::Error> {\n    init_logging();\n\n    let opts: Opts = Opts::parse();\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Let's cast ",(0,i.jsx)(n.code,{children:"LakeConfig"})," from ",(0,i.jsx)(n.code,{children:"Opts"})," and instantiate ",(0,i.jsx)(n.a,{href:"/concepts/advanced/near-lake-framework",children:"NEAR Lake Framework"}),"'s ",(0,i.jsx)(n.code,{children:"stream"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"#[tokio::main]\nasync fn main() -> Result<(), tokio::io::Error> {\n    init_logging();\n\n    let opts: Opts = Opts::parse();\n\n    let config: LakeConfig = opts.clone().into();\n\n    let (_, stream) = near_lake_framework::streamer(config);\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Copy/paste the code of reading ",(0,i.jsx)(n.code,{children:"accounts"})," arg to ",(0,i.jsx)(n.code,{children:"Vec<AccountId"}),"> from the old ",(0,i.jsx)(n.code,{children:"main()"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"#[tokio::main]\nasync fn main() -> Result<(), tokio::io::Error> {\n    init_logging();\n\n    let opts: Opts = Opts::parse();\n\n    let config: LakeConfig = opts.clone().into();\n\n    let (_, stream) = near_lake_framework::streamer(config);\n\n    let watching_list = opts\n        .accounts\n        .split(',')\n        .map(|elem| {\n            near_indexer_primitives::types::AccountId::from_str(elem).expect(\"AccountId is invalid\")\n        })\n        .collect();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now we can call ",(0,i.jsx)(n.code,{children:"listen_blocks"})," function we have used before in our indexer while it was built on top of ",(0,i.jsx)(n.a,{href:"/concepts/advanced/near-indexer-framework",children:"NEAR Indexer Framework"}),". And return ",(0,i.jsx)(n.code,{children:"Ok(())"})," so our ",(0,i.jsx)(n.code,{children:"main()"})," would be happy."]}),"\n",(0,i.jsx)(n.h3,{id:"final-async-main-with-near-lake-framework-stream",children:"Final async main with NEAR Lake Framework stream"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"#[tokio::main]\nasync fn main() -> Result<(), tokio::io::Error> {\n    init_logging();\n\n    let opts: Opts = Opts::parse();\n\n    let config: LakeConfig = opts.clone().into();\n\n    let (_, stream) = near_lake_framework::streamer(config);\n\n    let watching_list = opts\n        .accounts\n        .split(',')\n        .map(|elem| {\n            near_indexer_primitives::types::AccountId::from_str(elem).expect(\"AccountId is invalid\")\n        })\n        .collect();\n\n    listen_blocks(stream, watching_list).await;\n\n    Ok(())\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We're done. That's pretty much entire ",(0,i.jsx)(n.code,{children:"main()"})," function. Drop the old one if you haven't yet."]}),"\n",(0,i.jsx)(n.h2,{id:"changes-in-other-function-related-to-data-types",children:"Changes in other function related to data types"}),"\n",(0,i.jsxs)(n.p,{children:["Along with ",(0,i.jsx)(n.a,{href:"/concepts/advanced/near-lake-framework",children:"NEAR Lake Framework"})," release we have extracted the structures created for indexers into a separate crate. This was done in order to avoid dependency on ",(0,i.jsx)(n.code,{children:"nearcore"})," as now you can depend on a separate crate that is already ",(0,i.jsx)(n.a,{href:"https://crates.io/crates/near-indexer-primitives",children:"published on crates.io"})," or on NEAR Lake Framework that exposes that crate."]}),"\n",(0,i.jsx)(n.h3,{id:"listen_blocks",children:(0,i.jsx)(n.code,{children:"listen_blocks"})}),"\n",(0,i.jsx)(n.p,{children:"A function signature needs to be changed to point to new place for data types"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"async fn listen_blocks(\n    mut stream: mpsc::Receiver<near_indexer::StreamerMessage>,\n    watching_list: Vec<near_indexer::near_primitives::types::AccountId>,\n ) {\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"async fn listen_blocks(\n    mut stream: mpsc::Receiver<near_indexer_primitives::StreamerMessage>,\n    watching_list: Vec<near_indexer_primitives::types::AccountId>,\n ) {\n"})}),"\n",(0,i.jsxs)(n.p,{children:["And another 3 places where ",(0,i.jsx)(n.code,{children:"near_indexer::near_primitives"})," needs to be replaced with ",(0,i.jsx)(n.code,{children:"near_indexer_primitives"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"\nif let near_indexer_primitives::views::ReceiptEnumView::Action {\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"if let near_indexer_primitives::views::ReceiptEnumView::Action {\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"if let near_indexer_primitives::views::ActionView::FunctionCall {\n"})}),"\n",(0,i.jsx)(n.h2,{id:"is_tx_receiver_watched",children:(0,i.jsx)(n.code,{children:"is_tx_receiver_watched()"})}),"\n",(0,i.jsxs)(n.p,{children:["And final change for data types in the function ",(0,i.jsx)(n.code,{children:"is_tx_receiver_watched()"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"fn is_tx_receiver_watched(\n    tx: &near_indexer_primitives::IndexerTransactionWithOutcome,\n    watching_list: &[near_indexer_primitives::types::AccountId],\n) -> bool {\n    watching_list.contains(&tx.transaction.receiver_id)\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"credentials",children:"Credentials"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/build/data-infrastructure/lake-framework/running-near-lake/credentials",children:"Configure the Credentials"})," in order to access the data from NEAR Lake Framework"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["And now we have a completely migrated to ",(0,i.jsx)(n.a,{href:"/concepts/advanced/near-lake-framework",children:"NEAR Lake Framework"})," indexer."]}),"\n",(0,i.jsx)(n.p,{children:"We are posting the complete diffs for the reference"}),"\n",(0,i.jsx)(n.h2,{id:"diffs",children:"Diffs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",metastring:"title=Cargo.toml",children:'--- a/Cargo.toml\n+++ b/Cargo.toml\n@@ -2,18 +2,18 @@\n name = "indexer-tx-watcher-example"\n version = "0.1.0"\n authors = ["Near Inc <hello@nearprotocol.com>"]\n-edition = "2018"\n+edition = "2021"\n\n [dependencies]\n-actix = "=0.11.0-beta.2"\n-actix-rt = "=2.2.0"  # remove it once actix is upgraded to 0.11+\n base64 = "0.11"\n-clap = "3.0.0-beta.1"\n-openssl-probe = { version = "0.1.2" }\n+clap = { version = "3.1.6", features = ["derive"] }\n+futures = "0.3.5"\n serde = { version = "1", features = ["derive"] }\n serde_json = "1.0.55"\n-tokio = { version = "1.1", features = ["sync"] }\n+itertools = "0.9.0"\n+tokio = { version = "1.1", features = ["sync", "time", "macros", "rt-multi-thread"] }\n+tokio-stream = { version = "0.1" }\n tracing = "0.1.13"\n tracing-subscriber = "0.2.4"\n\n-near-indexer = { git = "https://github.com/near/nearcore", rev = "25b000ae4dd9fe784695d07a3f2e99d82a6f10bd" }\n+near-lake-framework = "0.4.0"\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",metastring:"title=src/configs.rs",children:'--- a/src/configs.rs\n+++ b/src/configs.rs\n@@ -1,99 +1,50 @@\n-use clap::Clap;\n+use clap::Parser;\n\n use tracing_subscriber::EnvFilter;\n\n /// NEAR Indexer Example\n /// Watches for stream of blocks from the chain\n-#[derive(Clap, Debug)]\n+#[derive(Parser, Debug, Clone)]\n #[clap(version = "0.1", author = "Near Inc. <hello@nearprotocol.com>")]\n pub(crate) struct Opts {\n-    /// Sets a custom config dir. Defaults to ~/.near/\n-    #[clap(short, long)]\n-    pub home_dir: Option<std::path::PathBuf>,\n-    #[clap(subcommand)]\n-    pub subcmd: SubCommand,\n-}\n-\n-#[derive(Clap, Debug)]\n-pub(crate) enum SubCommand {\n-    /// Run NEAR Indexer Example. Start observe the network\n-    Run(RunArgs),\n-    /// Initialize necessary configs\n-    Init(InitConfigArgs),\n-}\n-\n-#[derive(Clap, Debug)]\n-pub(crate) struct RunArgs {\n+    /// block height to start indexing from\n+    #[clap(long)]\n+    pub block_height: u64,\n     /// account ids to watch for\n     #[clap(long)]\n     pub accounts: String,\n+    #[clap(subcommand)]\n+    pub subcmd: SubCommand,\n }\n\n-#[derive(Clap, Debug)]\n-pub(crate) struct InitConfigArgs {\n-    /// chain/network id (localnet, testnet, devnet, betanet)\n-    #[clap(short, long)]\n-    pub chain_id: Option<String>,\n-    /// Account ID for the validator key\n-    #[clap(long)]\n-    pub account_id: Option<String>,\n-    /// Specify private key generated from seed (TESTING ONLY)\n-    #[clap(long)]\n-    pub test_seed: Option<String>,\n-    /// Number of shards to initialize the chain with\n-    #[clap(short, long, default_value = "1")]\n-    pub num_shards: u64,\n-    /// Makes block production fast (TESTING ONLY)\n-    #[clap(short, long)]\n-    pub fast: bool,\n-    /// Genesis file to use when initialize testnet (including downloading)\n-    #[clap(short, long)]\n-    pub genesis: Option<String>,\n-    /// Download the verified NEAR genesis file automatically.\n-    #[clap(long)]\n-    pub download_genesis: bool,\n-    /// Specify a custom download URL for the genesis file.\n-    #[clap(long)]\n-    pub download_genesis_url: Option<String>,\n-    /// Download the verified NEAR config file automtically.\n-    #[clap(long)]\n-    pub download_config: bool,\n-    /// Specify a custom download URL for the config file.\n-    #[clap(long)]\n-    pub download_config_url: Option<String>,\n-    /// Specify the boot nodes to bootstrap the network\n-    #[clap(long)]\n-    pub boot_nodes: Option<String>,\n-    /// Specify a custom max_gas_burnt_view limit.\n-    #[clap(long)]\n-    pub max_gas_burnt_view: Option<u64>,\n+#[derive(Parser, Debug, Clone)]\n+pub(crate) enum SubCommand {\n+    Mainnet,\n+    Testnet,\n }\n\n pub(crate) fn init_logging() {\n-    let env_filter = EnvFilter::new(\n-        "tokio_reactor=info,near=info,stats=info,telemetry=info,indexer_example=info,indexer=info,near-performance-metrics=info",\n-    );\n+    let env_filter = EnvFilter::new("near_lake_framework=info");\n     tracing_subscriber::fmt::Subscriber::builder()\n         .with_env_filter(env_filter)\n         .with_writer(std::io::stderr)\n         .init();\n }\n\n-impl From<InitConfigArgs> for near_indexer::InitConfigArgs {\n-    fn from(config_args: InitConfigArgs) -> Self {\n-        Self {\n-            chain_id: config_args.chain_id,\n-            account_id: config_args.account_id,\n-            test_seed: config_args.test_seed,\n-            num_shards: config_args.num_shards,\n-            fast: config_args.fast,\n-            genesis: config_args.genesis,\n-            download_genesis: config_args.download_genesis,\n-            download_genesis_url: config_args.download_genesis_url,\n-            download_config: config_args.download_config,\n-            download_config_url: config_args.download_config_url,\n-            boot_nodes: config_args.boot_nodes,\n-            max_gas_burnt_view: config_args.max_gas_burnt_view,\n-        }\n+impl From<Opts> for near_lake_framework::LakeConfig {\n+    fn from(opts: Opts) -> Self {\n+        let mut lake_config =\n+            near_lake_framework::LakeConfigBuilder::default().start_block_height(opts.block_height);\n+\n+        match &opts.subcmd {\n+            SubCommand::Mainnet => {\n+                lake_config = lake_config.mainnet();\n+            }\n+            SubCommand::Testnet => {\n+                lake_config = lake_config.testnet();\n+            }\n+        };\n+\n+        lake_config.build().expect("Failed to build LakeConfig")\n     }\n }\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",metastring:"title=src/main.rs",children:'--- a/src/main.rs\n+++ b/src/main.rs\n@@ -2,11 +2,14 @@\n\n use std::collections::{HashMap, HashSet};\n\n-use clap::Clap;\n+use clap::Parser;\n use tokio::sync::mpsc;\n use tracing::info;\n\n-use configs::{init_logging, Opts, SubCommand};\n+use near_lake_framework::near_indexer_primitives;\n+use near_lake_framework::LakeConfig;\n+\n+use configs::{init_logging, Opts};\n\n mod configs;\n\n@@ -15,60 +18,34 @@\n /// We want to catch all *successful* transactions sent to one of the accounts from the list.\n /// In the demo we\'ll just look for them and log them but it might and probably should be extended based on your needs.\n\n-fn main() {\n-    // We use it to automatically search the for root certificates to perform HTTPS calls\n-    // (sending telemetry and downloading genesis)\n-    openssl_probe::init_ssl_cert_env_vars();\n+#[tokio::main]\n+async fn main() -> Result<(), tokio::io::Error> {\n     init_logging();\n\n     let opts: Opts = Opts::parse();\n\n-    let home_dir = opts.home_dir.unwrap_or_else(near_indexer::get_default_home);\n+    let config: LakeConfig = opts.clone().into();\n\n-    match opts.subcmd {\n-        SubCommand::Run(args) => {\n-            // Create the Vec of AccountId from the provided ``--accounts`` to pass it to `listen_blocks`\n-            let watching_list = args\n-                .accounts\n-                .split(\',\')\n-                .map(|elem| {\n-                    near_indexer::near_primitives::types::AccountId::from_str(elem)\n-                        .expect("AccountId is invalid")\n-                })\n-                .collect();\n-\n-            // Inform about indexer is being started and what accounts we\'re watching for\n-            eprintln!(\n-                "Starting indexer transaction watcher for accounts: \\n {:#?}",\n-                &args.accounts\n-            );\n-\n-            // Instantiate IndexerConfig with hardcoded parameters\n-            let indexer_config = near_indexer::IndexerConfig {\n-                home_dir,\n-                sync_mode: near_indexer::SyncModeEnum::FromInterruption,\n-                await_for_node_synced: near_indexer::AwaitForNodeSyncedEnum::WaitForFullSync,\n-            };\n+    let (_, stream) = near_lake_framework::streamer(config);\n\n-            // Boilerplate code to start the indexer itself\n-            let sys = actix::System::new();\n-            sys.block_on(async move {\n-                eprintln!("Actix");\n-                let indexer = near_indexer::Indexer::new(indexer_config);\n-                let stream = indexer.streamer();\n-                actix::spawn(listen_blocks(stream, watching_list));\n-            });\n-            sys.run().unwrap();\n-        }\n-        SubCommand::Init(config) => near_indexer::indexer_init_configs(&home_dir, config.into()),\n-    }\n+    let watching_list = opts\n+        .accounts\n+        .split(\',\')\n+        .map(|elem| {\n+            near_indexer_primitives::types::AccountId::from_str(elem).expect("AccountId is invalid")\n+        })\n+        .collect();\n+\n+    listen_blocks(stream, watching_list).await;\n+\n+    Ok(())\n }\n\n /// The main listener function the will be reading the stream of blocks `StreamerMessage`\n /// and perform necessary checks\n async fn listen_blocks(\n-    mut stream: mpsc::Receiver<near_indexer::StreamerMessage>,\n-    watching_list: Vec<near_indexer::near_primitives::types::AccountId>,\n+    mut stream: mpsc::Receiver<near_indexer_primitives::StreamerMessage>,\n+    watching_list: Vec<near_indexer_primitives::types::AccountId>,\n ) {\n     eprintln!("listen_blocks");\n     // This will be a map of correspondence between transactions and receipts\n@@ -120,7 +97,7 @@\n                         &execution_outcome.receipt.receiver_id,\n                         execution_outcome.execution_outcome.outcome.status\n                     );\n-                    if let near_indexer::near_primitives::views::ReceiptEnumView::Action {\n+                    if let near_indexer_primitives::views::ReceiptEnumView::Action {\n                         signer_id,\n                         ..\n                     } = &execution_outcome.receipt.receipt\n@@ -128,19 +105,20 @@\n                         eprintln!("{}", signer_id);\n                     }\n\n-                    if let near_indexer::near_primitives::views::ReceiptEnumView::Action {\n-                        actions,\n-                        ..\n+                    if let near_indexer_primitives::views::ReceiptEnumView::Action {\n+                        actions, ..\n                     } = execution_outcome.receipt.receipt\n                     {\n                         for action in actions.iter() {\n-                            if let near_indexer::near_primitives::views::ActionView::FunctionCall {\n+                            if let near_indexer_primitives::views::ActionView::FunctionCall {\n                                 args,\n                                 ..\n                             } = action\n                             {\n                                 if let Ok(decoded_args) = base64::decode(args) {\n-                                    if let Ok(args_json) = serde_json::from_slice::<serde_json::Value>(&decoded_args) {\n+                                    if let Ok(args_json) =\n+                                        serde_json::from_slice::<serde_json::Value>(&decoded_args)\n+                                    {\n                                         eprintln!("{:#?}", args_json);\n                                     }\n                                 }\n@@ -156,8 +134,8 @@\n }\n\n fn is_tx_receiver_watched(\n-    tx: &near_indexer::IndexerTransactionWithOutcome,\n-    watching_list: &[near_indexer::near_primitives::types::AccountId],\n+    tx: &near_indexer_primitives::IndexerTransactionWithOutcome,\n+    watching_list: &[near_indexer_primitives::types::AccountId],\n ) -> bool {\n     watching_list.contains(&tx.transaction.receiver_id)\n }\n'})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var i=r(67294);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);