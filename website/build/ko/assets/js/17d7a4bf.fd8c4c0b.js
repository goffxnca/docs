"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1373],{29386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(85893),a=t(11151);const s={id:"best-practices",title:"Indexing best practices",sidebar_label:"Best Practices"},r=void 0,o={id:"build/data-infrastructure/query-api/best-practices",title:"Indexing best practices",description:"In this article you can find suggested best practices when building blockchain indexers using QueryAPI.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/6.data-infrastructure/query-api/best-practices.md",sourceDirName:"2.build/6.data-infrastructure/query-api",slug:"/build/data-infrastructure/query-api/best-practices",permalink:"/ko/build/data-infrastructure/query-api/best-practices",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/query-api/best-practices.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718616124e3,frontMatter:{id:"best-practices",title:"Indexing best practices",sidebar_label:"Best Practices"},sidebar:"build",previous:{title:"Getting Started",permalink:"/ko/build/data-infrastructure/query-api/indexers"},next:{title:"Indexing Functions",permalink:"/ko/build/data-infrastructure/query-api/index-functions"}},d={},c=[{value:"Indexing development",id:"indexing-development",level:2},{value:"Design APIs for your UIs",id:"design-apis-for-your-uis",level:3},{value:"Create a Database",id:"create-a-database",level:3},{value:"Find blocks to test on",id:"find-blocks-to-test-on",level:3},{value:"Write JS code and debug",id:"write-js-code-and-debug",level:3},{value:"Deploy code and check logs",id:"deploy-code-and-check-logs",level:3},{value:"Fix bugs and redeploy",id:"fix-bugs-and-redeploy",level:3},{value:"Generate GraphQL queries and export",id:"generate-graphql-queries-and-export",level:3},{value:"Database design",id:"database-design",level:2},{value:"Schema for Blockchain analytics",id:"schema-for-blockchain-analytics",level:3},{value:"Schema for interactive UIs",id:"schema-for-interactive-uis",level:3},{value:"Indexing",id:"indexing",level:4},{value:"Partitioning",id:"partitioning",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In this article you can find suggested best practices when building blockchain indexers using ",(0,i.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/intro",children:"QueryAPI"}),".\nIf you're planning to design a production-ready indexer, please check the recommendations for ",(0,i.jsx)(n.a,{href:"#indexing-development",children:"indexing development"})," and ",(0,i.jsx)(n.a,{href:"#database-design",children:"database design"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"indexing-development",children:"Indexing development"}),"\n",(0,i.jsx)(n.p,{children:"This section presents a recommended workflow when building a new indexer using QueryAPI."}),"\n",(0,i.jsx)(n.h3,{id:"design-apis-for-your-uis",children:"Design APIs for your UIs"}),"\n",(0,i.jsx)(n.p,{children:"If your application requires front-end User Interfaces (UIs), your first step should be to define the APIs that will be used by your front-end UI. The main objective here is to reduce the overall number of requests that each page makes to render all content. Once you define these APIs, you will have a good overview of the data that you need to index from the blockchain."}),"\n",(0,i.jsx)(n.h3,{id:"create-a-database",children:"Create a Database"}),"\n",(0,i.jsx)(n.p,{children:"Once you have a better idea of the indexed data, you can design the database to store the indexing results."}),"\n",(0,i.jsx)(n.p,{children:"When defining your SQL database schema, consider these recommendations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Design for ",(0,i.jsx)(n.code,{children:"UPSERT"}),"s, so that indexed data can be replaced if needed"]}),"\n",(0,i.jsx)(n.li,{children:"Use foreign keys between entities for GraphQL linking"}),"\n",(0,i.jsx)(n.li,{children:"Think of indexes (e.g. by accounts, by dates, etc.)"}),"\n",(0,i.jsxs)(n.li,{children:["Use views to generate more GraphQL queries \u2013\xa0when you ",(0,i.jsx)(n.code,{children:"CREATE VIEW"}),", QueryAPI generates a separate GraphQL query for it."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Check the ",(0,i.jsx)(n.a,{href:"#database-design",children:"Database design section"})," to learn how to design optimal database schemas for your indexer."]})}),"\n",(0,i.jsx)(n.h3,{id:"find-blocks-to-test-on",children:"Find blocks to test on"}),"\n",(0,i.jsxs)(n.p,{children:["Using exploring tools such as ",(0,i.jsx)(n.a,{href:"https://nearblocks.io/",children:"NearBlocks"}),", you can find a few ",(0,i.jsx)(n.code,{children:"block_height"}),"s with transactions to your smart contracts that you need to index. These example blocks will help you to test and debug while writing your indexer code."]}),"\n",(0,i.jsx)(n.h3,{id:"write-js-code-and-debug",children:"Write JS code and debug"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Start from a simple ",(0,i.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/index-functions",children:(0,i.jsx)(n.code,{children:"indexingLogic.js"})})," to get blockchain data dumped in a database, in a raw form. For example, start by getting the ",(0,i.jsx)(n.a,{href:"../../2.develop/contracts/actions.md#function-call",children:"FunctionCall"}),"'s arguments from the smart contract that you want to index. Then, use the ",(0,i.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/index-functions#mutations-in-graphql",children:"GraphQL playground"})," to understand the raw dump and further analyze the data."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Playground",src:t(54356).Z+"",width:"2560",height:"1374"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Check the ",(0,i.jsx)(n.a,{href:"https://near.github.io/near-lake-framework-js/",children:"NEAR Lake Primitives"})," documentation"]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/context-object#db",children:(0,i.jsx)(n.code,{children:"context.db"})})," object to access your database tables"]}),"\n",(0,i.jsx)(n.li,{children:"Write logs"}),"\n"]})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once you have figured out a good logic to process the raw data, test the processing logic by ",(0,i.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/index-functions#local-debug-mode",children:"enabling debug mode"})," in the ",(0,i.jsx)(n.code,{children:"indexingLogic.js"})," editor, and set a list of block heights that contains different cases that your processing logic must handle."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"QueryAPI Dashboard",src:t(99223).Z+"",width:"2692",height:"956"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once your index logic extracts all data correctly as expected, you might find that you need to create new tables or change your schema to better organize the data. In that case, fork the indexer, change the  SQL schema and update the indexer logic to process and store structured data."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If there were changes in smart contracts, e.g. changes in method and event definitions, you might need to implement conditional logic on the block height."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deploy-code-and-check-logs",children:"Deploy code and check logs"}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to ",(0,i.jsx)(n.code,{children:"try { } catch { }"})," exceptions while processing each block. In the ",(0,i.jsx)(n.code,{children:"catch"})," section, log exceptional blocks and debug them by enabling debug mode. (set the block ",(0,i.jsx)(n.code,{children:"height"})," of the problematic blocks, and run a local debug)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'try {\n  console.log("Creating a Post Snapshot");\n  const postData = {\n    post_id: post_id,\n    account_id: accountId,\n    block_height: block_height,\n  };\n  await context.db.Posts.insert(postData);\n  console.log(\n    `Post Snapshot with post_id ${post_id} at block_height ${block_height} has been added to the database`\n  );\n  return null;\n} catch (e) {\n  console.log(\n    `Error creating Post Snapshot with post_id ${post_id} at block_height ${block_height}: ${e}`\n  );\n  return e;\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"fix-bugs-and-redeploy",children:"Fix bugs and redeploy"}),"\n",(0,i.jsxs)(n.p,{children:["You may have to do several iterations to fix all bugs in your indexer to process all the blocks correctly. Currently QueryAPI does not allow to clean the database and change the schema, so you will need to fork your indexer, update the schema or ",(0,i.jsx)(n.code,{children:"indexingLogic"}),", and try again. The new indexer can be named ",(0,i.jsx)(n.code,{children:"YourIndexName_v2"}),", ",(0,i.jsx)(n.code,{children:"YourIndexerName_v3"}),", ",(0,i.jsx)(n.code,{children:"..._v4"}),", and so on. If you don't do that, your new indexing logic will re-run on old blocks, and if you don\u2019t handle re-indexing in your ",(0,i.jsx)(n.code,{children:"indexingLogic.js"}),", the same old data will be inserted again into the database, bringing further errors."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Remember to clean out old, unused indexers. If you get ",(0,i.jsx)(n.code,{children:"YourIndexerName_v8"})," to work, delete ",(0,i.jsx)(n.code,{children:"..._v7"}),", ",(0,i.jsx)(n.code,{children:"..._v6"}),", so they can free resources taken from QueryAPI workers."]})}),"\n",(0,i.jsx)(n.h3,{id:"generate-graphql-queries-and-export",children:"Generate GraphQL queries and export"}),"\n",(0,i.jsx)(n.p,{children:"When your indexer is deployed and ready, you can generate and export GraphQL queries that can be used in your front-end application, NEAR component, or any other integration."}),"\n",(0,i.jsx)(n.p,{children:"To generate GraphQL queries:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/index-functions#mutations-in-graphql",children:"Use GraphiQL playground"})}),"\n",(0,i.jsx)(n.li,{children:"Click through and debug queries"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/index-functions#create-a-bos-component-from-query",children:"Use code exporter to NEAR components"})}),"\n",(0,i.jsxs)(n.li,{children:["Change ",(0,i.jsx)(n.code,{children:"query"})," to ",(0,i.jsx)(n.code,{children:"subscription"})," for WebSockets"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"database-design",children:"Database design"}),"\n",(0,i.jsx)(n.p,{children:"Designing an optimal database schema depends on the type of indexer that you want to build.\nFocusing on the two most common blockchain indexing use cases, you can consider:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a database schema for an indexer doing blockchain analytics, reporting, business intelligence, and big-data queries."}),"\n",(0,i.jsx)(n.li,{children:"a database schema for an indexer built as a backend for a web3 dApp building interactive and responsive UIs, that tracks interactions over a specific smart contract."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["QueryAPI uses ",(0,i.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/index.html",children:"PostgreSQL 14.9"}),". You can find additional documentation about PostgresSQL data definition language ",(0,i.jsx)(n.a,{href:"https://postgrespro.com/docs/postgresql/14/ddl",children:"in this link"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"schema-for-blockchain-analytics",children:"Schema for Blockchain analytics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Consider using summary tables for precomputed analytics. Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE summary_account_transactions_per_day (\n    dim_signer_account_id TEXT NOT NULL,\n    dim_transaction_date DATE NOT NULL,\n    metric_total_transactions BIGINT NOT NULL,\n    PRIMARY KEY (dim_signer_account_id, dim_transaction_date)\n);\n\nINSERT INTO summary_account_transactions_per_day (dim_signer_account_id, dim_transaction_date, metric_total_transactions)\nSELECT\n    t.signer_account_id AS dim_signer_account_id,\n    t.transaction_date AS dim_transaction_date,\n    COUNT(*) AS metric_total_transactions\nFROM\n    transactions t\nWHERE\n    t.transaction_date = CURRENT_DATE\nGROUP BY\n    t.signer_account_id, t.transaction_date\nON CONFLICT (dim_signer_account_id, dim_transaction_date)\nDO UPDATE SET\n    metric_total_transactions = EXCLUDED.metric_total_transactions;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you want to do a SQL ",(0,i.jsx)(n.code,{children:"JOIN"})," query, use a ",(0,i.jsx)(n.code,{children:"VIEW"}),". For example:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE VIEW\n  posts_with_latest_snapshot AS\nSELECT\n  ps.post_id,\n  p.parent_id,\n  p.author_id,\n  ps.block_height,\n  ps.editor_id,\n  ps.labels,\n  ps.post_type,\n  ps.description,\n  ps.name,\n  ps.sponsorship_token,\n  ps.sponsorship_amount,\n  ps.sponsorship_supervisor\nFROM\n  posts p\n  INNER JOIN (\n    SELECT\n      post_id,\n      MAX(block_height) AS max_block_height\n    FROM\n      post_snapshots\n    GROUP BY\n      post_id\n  ) latest_snapshots ON p.id = latest_snapshots.post_id\n  INNER JOIN post_snapshots ps ON latest_snapshots.post_id = ps.post_id\n  AND latest_snapshots.max_block_height = ps.block_height;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"schema-for-interactive-uis",children:"Schema for interactive UIs"}),"\n",(0,i.jsx)(n.h4,{id:"indexing",children:"Indexing"}),"\n",(0,i.jsx)(n.p,{children:"Add indexes for efficient querying. Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX idx_transactions_signer_account_id ON transactions(signer_account_id);\n"})}),"\n",(0,i.jsx)(n.h4,{id:"partitioning",children:"Partitioning"}),"\n",(0,i.jsx)(n.p,{children:"Utilize partitioning for large tables."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE transactions_partitioned_by_account_id (\n    transaction_hash text NOT NULL,\n    signer_account_id text NOT NULL,\n    receipt_conversion_tokens_burnt numeric(45) NULL,\n    PRIMARY KEY (signer_account_id, transaction_hash)\n)\nPARTITION BY LIST (signer_account_id);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},54356:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/QAPIScreen-03cb0756572d56815b027f3ed320ab00.gif"},99223:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/QAPIdebug-3b3feca48be98705da3a6a8a2622cce2.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(67294);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);