"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6037],{10489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(85893),i=t(11151);const o={id:"introduction",title:"\uc18c\uac1c",sidebar_label:"\uc18c\uac1c"},a=void 0,d={id:"integrations/errors/introduction",title:"\uc18c\uac1c",description:"\uc54c\uace0 \uacc4\uc168\ub098\uc694?",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/6.integrations/errors/introduction.md",sourceDirName:"6.integrations/errors",slug:"/integrations/errors/introduction",permalink:"/ko/integrations/errors/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrations/errors/introduction.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1720430471e3,frontMatter:{id:"introduction",title:"\uc18c\uac1c",sidebar_label:"\uc18c\uac1c"},sidebar:"exchanges",previous:{title:"\uc554\uc2dc\uc801 \uacc4\uc815(Implicit Account)",permalink:"/ko/integrations/implicit-accounts"},next:{title:"\uc18c\uc2a4 \ucf54\ub4dc \uc870\uc0ac",permalink:"/ko/integrations/errors/error-implementation"}},c={},l=[{value:"\ud2b8\ub79c\uc7ad\uc158 \uc218\uba85:",id:"the-life-of-a-transaction",level:2},{value:"NEAR \ud50c\ub7ab\ud3fc \uc624\ub958",id:"near-platform-errors",level:2},{value:"RuntimeError \ubc0f \ud558\uc704 \uc720\ud615",id:"runtimeerror-and-subtypes",level:3},{value:"TxExecutionError \ubc0f \ud558\uc704 \uc720\ud615",id:"txexecutionerror-and-subtypes",level:3},{value:"VMerror \ubc0f \ud558\uc704 \uc720\ud615",id:"vmerror-and-subtypes",level:3}];function s(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("blockquote",{className:"info",children:[(0,r.jsx)("strong",{children:"\uc54c\uace0 \uacc4\uc168\ub098\uc694?"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/concepts/welcome",children:"NEAR \ud50c\ub7ab\ud3fc \uac1c\uc694"}),"\ub294 \uc774 \uc139\uc158\uc758 \uc5b8\uc5b4 \ub300\ubd80\ubd84\uc744 \uba85\ud655\ud558\uac8c \uc124\uba85\ud569\ub2c8\ub2e4."]})]}),"\n",(0,r.jsx)(n.h2,{id:"the-life-of-a-transaction",children:"\ud2b8\ub79c\uc7ad\uc158 \uc218\uba85:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uace0, \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\ub97c \uacc4\uc0b0\ud558\uba70 \uc774 \ud574\uc2dc\uc5d0 \uc11c\uba85\ud558\uc5ec \uc11c\uba85\ub41c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc5bb\uc2b5\ub2c8\ub2e4. \uc774\uc81c \uc774 \uc11c\uba85\ub41c \ud2b8\ub79c\uc7ad\uc158\uc744 \ub178\ub4dc\ub85c \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.li,{children:["RPC \uc778\ud130\ud398\uc774\uc2a4\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc218\uc2e0\ud558\uace0, ",(0,r.jsx)(n.code,{children:"signer_id"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc62c\ubc14\ub978 \ubb3c\ub9ac\uc801 \ub178\ub4dc\ub85c \ub77c\uc6b0\ud305\ud569\ub2c8\ub2e4.  ",(0,r.jsx)(n.code,{children:"signer_id"}),"\ub294 \ub2e8\uc77c \uc0e4\ub4dc\uc5d0 \uc788\ub294 NEAR \uacc4\uc815 ID\uc774\uc5ec\uc57c \ud558\ubbc0\ub85c, \uacc4\uc815\uc740 \uc0e4\ub4dc\uc5d0 \ub9e4\ud551\ub418\uba70, \uadf8 \ub4a4\uc5d0 IP \uc8fc\uc18c\ub85c \ud558\ub098 \uc774\uc0c1\uc758 \uc2dc\uc2a4\ud15c\uc744 \uc2e4\ud589\ud558\ub294 \ud558\ub098 \uc774\uc0c1\uc758 \ubc38\ub9ac\ub370\uc774\ud130\uac00 \ub4a4\ub530\ub985\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["\ub178\ub4dc\uac00 \uc11c\uba85\ub41c \uc0c8 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc218\uc2e0\ud558\uba74, \uc11c\uba85\uc790, \uc218\uc2e0\uc790, \uacc4\uc815 \uc794\uc561, \ube44\uc6a9 \uc624\ubc84\ud50c\ub85c\uc6b0, \uc11c\uba85 \ub4f1\uc5d0 \ub300\ud55c \ud2b8\ub79c\uc7ad\uc158\uc758 \uc720\ud6a8\uc131\uc744 \uac80\uc0ac\ud558\uace0(",(0,r.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Scenarios/FinancialTransaction.html#transaction-to-receipt",children:"\uc5ec\uae30"})," \ucc38\uc870), \ub3d9\uc77c\ud55c \uc0e4\ub4dc\ub97c \ub530\ub974\ub294 \ubaa8\ub4e0 \ud53c\uc5b4 \ub178\ub4dc\uc5d0 \uc774\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc11c\uba85\uc774 \uc788\uac70\ub098, \ucd5c\uc2e0 \uc0c1\ud0dc\uc5d0\uc11c \uc720\ud6a8\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0, \ud2b8\ub79c\uc7ad\uc158\uc740 \uc2e0\uc18d\ud558\uac8c \uac70\ubd80\ub418\uace0 \uc6d0\ub798 RPC \ud638\ucd9c\uc5d0 \uc624\ub958\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.li,{children:"\uc720\ud6a8\ud55c \ud2b8\ub79c\uc7ad\uc158\uc774 \ud2b8\ub79c\uc7ad\uc158 \ud480\uc5d0 \ucd94\uac00\ub429\ub2c8\ub2e4(\ubaa8\ub4e0 \ubc38\ub9ac\ub370\uc774\ud130 \ub178\ub4dc\uc5d0\ub294 \uace0\uc720\ud55c \ud2b8\ub79c\uc7ad\uc158 \ud480\uc758 \ub3c5\ub9bd\uc801\uc778 \ubcf5\uc0ac\ubcf8\uc774 \uc788\uc74c). \ud2b8\ub79c\uc7ad\uc158 \ud480\uc740 \uc544\uc9c1 \ud3d0\uae30\ub418\uc9c0 \uc54a\uc558\uc9c0\ub9cc \uccb4\uc778\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc740 \ud2b8\ub79c\uc7ad\uc158\ub4e4\uc744 \uc720\uc9c0 \uad00\ub9ac\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.li,{children:["\ud480 \ubc18\ubcf5\uc790\ub294 \ud480\uc774 \uace0\uac08\ub418\uac70\ub098 \uc77c\ubd80 \uccad\ud06c \uc81c\ud55c(\uccad\ud06c\ub2f9 \ucd5c\ub300 \ud2b8\ub79c\uc7ad\uc158 \uc218 \ub610\ub294 \ucc98\ub9ac\ud560 \uccad\ud06c\ub2f9 \ucd5c\ub300 \uac00\uc2a4 \uc18c\uac01)\uc5d0 \ub3c4\ub2ec\ud560 \ub54c\uae4c\uc9c0, \uac00\uc7a5 \uc791\uc740 \ub17c\uc2a4\uc5d0\uc11c \uac00\uc7a5 \ud070 \uc21c\uc11c\ub85c \ud480\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \ud55c \ubc88\uc5d0 \ud558\ub098\uc529 \uc120\ud0dd\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.  Please refer to articles on the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/ChainSpec/Transactions.html?highlight=pool#pool-iterator",children:"pool iterator"})," and ",(0,r.jsx)(n.a,{href:"/concepts/protocol/gas",children:"gas"})," for more details."]}),"\n",(0,r.jsx)(n.li,{children:"\uc0e4\ub529\ub41c \ube14\ub85d\uccb4\uc778\uc758 \ubd84\uc0b0\ub41c \ud2b9\uc131\uc744 \uc218\uc6a9\ud558\uae30 \uc704\ud574, \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc740 3\uac1c\uc758 \uac1c\ubcc4 \ub808\uc774\uc5b4\uac00 \uc788\ub294 \ubd84\ub9ac\ub41c \ud2b8\ub79c\uc7ad\uc158 \ud480\ub85c \ubc18\ud658\ub429\ub2c8\ub2e4. \uc774\ub294 \uc218\ub77d\ub41c \ud2b8\ub79c\uc7ad\uc158(\ub2e4\uc74c \uccad\ud06c\uc5d0\uc11c \ucc98\ub9ac\ub420 \uc608\uc815), \ubcf4\ub958 \uc911\uc778 \ud2b8\ub79c\uc7ad\uc158(\ud604\uc7ac \uccad\ud06c\uc758 \ud55c\ub3c4\ub97c \ucd08\uacfc\ud55c \ud2b8\ub79c\uc7ad\uc158. \ucc28\ud6c4 \ucc98\ub9ac \ub77c\uc6b4\ub4dc\uc5d0 \ud3ec\ud568\ub420 \uc608\uc815) \ubc0f \uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \ud2b8\ub79c\uc7ad\uc158(\ub2e4\uc74c \ubc88\uc5d0 \uac70\ubd80\ub420 \uc608\uc815)\uc73c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uccad\ud06c\uac00 \uc0dd\uc131\ub418\uae30 \uc804\uc5d0, \ud2b8\ub79c\uc7ad\uc158\uc774 \ub2e4\uc2dc \uc815\ub82c\ub418\uace0 \uc720\ud6a8\uc131\uc774 \uac80\uc0ac\ub429\ub2c8\ub2e4. \uc774\ub294 \ubd84\uc0b0 \uc2dc\uc2a4\ud15c \uc804\uccb4\uc5d0\uc11c \uc720\ud6a8\ud55c \ud2b8\ub79c\uc7ad\uc158\ub9cc\uc73c\ub85c \uad6c\uc131\ub41c \uccad\ud06c\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud568\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ud2b8\ub79c\uc7ad\uc158\uc774 \uccad\ud06c\uc5d0\uc11c \ucc98\ub9ac\ub418\ub294 \ub3d9\uc548, \ud2b8\ub79c\uc7ad\uc158 \ub0b4 Action \uc801\uc6a9\uc73c\ub85c \uc778\ud574 \ubc1c\uc0dd\ud55c \uc624\ub958\ub3c4 RPC\ub97c \ud1b5\ud574 \ubc18\ud658\ub429\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"near-platform-errors",children:"NEAR \ud50c\ub7ab\ud3fc \uc624\ub958"}),"\n",(0,r.jsxs)(n.p,{children:["NEAR \ud50c\ub7ab\ud3fc\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc624\ub958\ub294 ",(0,r.jsx)(n.code,{children:"nearcore"})," \ub0b4 \ub2e4\uc74c \uc704\uce58\uc5d0\uc11c \uad6c\ud604\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/nearcore/blob/master/core/primitives/src/errors.rs",children:"nearcore/core/primitives/src/errors.rs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/nearcore/blob/master/runtime/near-vm-errors/src/lib.rs",children:"nearcore/runtime/near-vm-errors/src/lib.rs"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\uc774 \ud398\uc774\uc9c0\ub294 \ub2e4\uc74c\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"RuntimeError \ubc0f \ud558\uc704 \uc720\ud615"}),": \ud2b8\ub79c\uc7ad\uc158\uc774 \ub300\uc0c1 \ub178\ub4dc\uc5d0\uc11c \ucc98\uc74c \uc218\uc2e0\ub418\uace0 \ucc98\ub9ac\ub418\uc5b4 \uccad\ud06c\uc5d0 \uc801\uc6a9\ub418\uae30 \uc804\uc5d0 \ub2e4\uc2dc \ubc1c\uc0dd\ud558\ub294 \uc624\ub958\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TxExecutionError \ubc0f \ud558\uc704 \uc720\ud615"}),": \ud2b8\ub79c\uc7ad\uc158 \ubc0f \ud3ec\ud568\ub41c Action\uc758 \uc720\ud6a8\uc131\uc744 \uac80\uc0ac\ud558\uace0 \uccad\ud06c\uc5d0 \uc801\uc6a9\ud558\ub294 \ub3d9\uc548 \ubc1c\uc0dd\ud558\ub294 \uc624\ub958\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"VMerror \ubc0f \ud558\uc704 \uc720\ud615"}),": NEAR VM\uc774 Wasm \ucee8\ud2b8\ub799\ud2b8\ub97c \uc2e4\ud589\ud558\ub294 \ub3d9\uc548 \ubc1c\uc0dd\ud558\ub294 \uc624\ub958\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"runtimeerror-and-subtypes",children:"RuntimeError \ubc0f \ud558\uc704 \uc720\ud615"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"RuntimeError                                              Error returned from `Runtime::apply  \n  StorageError                                            Unexpected error which is typically related to the node storage corruption.account\n  BalanceMismatchError                                    An error happens if `check_balance` fails, which is likely an indication of an invalid state\n  InvalidTxError                                          An error happened during TX verification and account charging\n    InvalidAccessKeyError                                 Describes the error for validating access key\n    ActionsValidationError                                Describes the error for validating a list of actions    \n      TotalPrepaidGasExceeded                             The total prepaid gas (for all given actions) exceeded the limit.\n      TotalNumberOfActionsExceeded                        The number of actions exceeded the given limit.\n      AddKeyMethodNamesNumberOfBytesExceeded              The total number of bytes of the method names exceeded the limit in a Add Key action.\n      AddKeyMethodNameLengthExceeded                      The length of some method name exceeded the limit in a Add Key action.\n      IntegerOverflow                                     Integer overflow during a compute.\n      InvalidAccountId                                    Invalid account ID.\n      ContractSizeExceeded                                The size of the contract code exceeded the limit in a DeployContract action.\n      FunctionCallMethodNameLengthExceeded                The length of the method name exceeded the limit in a Function Call action.\n      FunctionCallArgumentsLengthExceeded                 The length of the arguments exceeded the limit in a Function Call action.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"txexecutionerror-and-subtypes",children:"TxExecutionError \ubc0f \ud558\uc704 \uc720\ud615"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"TxExecutionError                                          Error returned in the ExecutionOutcome in case of failure\n  InvalidTxError                                          An error happened during Transaction execution\n    InvalidAccessKeyError                                 Describes the error for validating access key\n    ActionsValidationError                                Describes the error for validating a list of actions\n      TotalPrepaidGasExceeded                             The total prepaid gas (for all given actions) exceeded the limit.\n      TotalNumberOfActionsExceeded                        The number of actions exceeded the given limit.\n      AddKeyMethodNamesNumberOfBytesExceeded              The total number of bytes of the method names exceeded the limit in a Add Key action.\n      AddKeyMethodNameLengthExceeded                      The length of some method name exceeded the limit in a Add Key action.\n      IntegerOverflow                                     Integer overflow during a compute.\n      InvalidAccountId                                    Invalid account ID.\n      ContractSizeExceeded                                The size of the contract code exceeded the limit in a DeployContract action.\n      FunctionCallMethodNameLengthExceeded                The length of the method name exceeded the limit in a Function Call action.\n      FunctionCallArgumentsLengthExceeded                 The length of the arguments exceeded the limit in a Function Call action.\n  ActionError                                             An error happened during Acton execution\n    ActionErrorKind                                       The kind of ActionError happened\n      RuntimeCallError \n      ReceiptValidationError                              Describes the error for validating a receipt\n        ActionsValidationError                            Describes the error for validating a list of actions    \n          TotalPrepaidGasExceeded                         The total prepaid gas (for all given actions) exceeded the limit.\n          TotalNumberOfActionsExceeded                    The number of actions exceeded the given limit.\n          AddKeyMethodNamesNumberOfBytesExceeded          The total number of bytes of the method names exceeded the limit in a Add Key action.\n          AddKeyMethodNameLengthExceeded                  The length of some method name exceeded the limit in a Add Key action.\n          IntegerOverflow                                 Integer overflow during a compute.\n          InvalidAccountId                                Invalid account ID.\n          ContractSizeExceeded                            The size of the contract code exceeded the limit in a DeployContract action.\n          FunctionCallMethodNameLengthExceeded            The length of the method name exceeded the limit in a Function Call action.\n          FunctionCallArgumentsLengthExceeded             The length of the arguments exceeded the limit in a Function Call action.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"vmerror-and-subtypes",children:"VMerror \ubc0f \ud558\uc704 \uc720\ud615"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"VMerror                                                   An error that occurs in the NEAR virtual machine\n  ExternalError                                           Serialized external error from External trait implementation\n  InconsistentStateError                                  An error that is caused by an operation on an inconsistent state (ie. an integer overflow by using a value from the given context\n    IntegerOverflow                                       Math operation with a value from the state resulted in a integer overflow\n  FunctionCallError \n    LinkError \n    WasmTrap \n    MethodResolveError \n      MethodEmptyName \n      MethodUTF8Error \n      MethodNotFound \n      MethodInvalidSignature \n    HostError \n      BadUTF16                                            String encoding is bad UTF-16 sequence\n      BadUTF8                                             String encoding is bad UTF-8 sequence\n      GasExceeded                                         Exceeded the prepaid ga\n      GasLimitExceeded                                    Exceeded the maximum amount of gas allowed to burn per contract\n      BalanceExceeded                                     Exceeded the account balance\n      EmptyMethodName                                     Tried to call an empty method nam\n      GuestPanic                                          Smart contract panicked\n      IntegerOverflow                                     IntegerOverflow happened during a contract execution\n      InvalidPromiseIndex                                 `promise_idx` does not correspond to existing promises\n      CannotAppendActionToJointPromise                    Actions can only be appended to non-joint promise.\n      CannotReturnJointPromise                            Returning joint promise is currently prohibited\n      InvalidPromiseResultIndex                           Accessed invalid promise result index\n      InvalidRegisterId                                   Accessed invalid register id\n      IteratorWasInvalidated                              Iterator `iterator_index` was invalidated after its creation by performing a mutable operation on trie\n      MemoryAccessViolation                               Accessed memory outside the bounds\n      InvalidReceiptIndex                                 VM Logic returned an invalid receipt index\n      InvalidIteratorIndex                                Iterator index `iterator_index` does not exist\n      InvalidAccountId                                    VM Logic returned an invalid account id\n      InvalidMethodName                                   VM Logic returned an invalid method name\n      InvalidPublicKey                                    VM Logic provided an invalid public key\n      ProhibitedInView                                    `method_name` is not allowed in view calls\n      NumberOfLogsExceeded                                The total number of logs will exceed the limit.\n      KeyLengthExceeded                                   The storage key length exceeded the limit.\n      ValueLengthExceeded                                 The storage value length exceeded the limit.\n      TotalLogLengthExceeded                              The total log length exceeded the limit.\n      NumberPromisesExceeded                              The maximum number of promises within a FunctionCall exceeded the limit.\n      NumberInputDataDependenciesExceeded                 The maximum number of input data dependencies exceeded the limit.\n      ReturnedValueLengthExceeded                         The returned value length exceeded the limit.\n      ContractSizeExceeded                                The contract size for DeployContract action exceeded the limit.\n    CompilationError \n      CodeDoesNotExist \n      WasmerCompileError \n      PrepareError                                        Error that can occur while preparing or executing Wasm smart-contract\n        Serialization                                     Error happened while serializing the module\n        Deserialization                                   Error happened while deserializing the module\n        InternalMemoryDeclared                            Internal memory declaration has been found in the module\n        GasInstrumentation                                Gas instrumentation failed.  This most likely indicates the module isn't valid\n        StackHeightInstrumentation                        Stack instrumentation failed.  This  most likely indicates the module isn't valid\n        Instantiate                                       Error happened during instantiation.  This might indicate that `start` function trapped, or module isn't instantiable and/or unlinkable\n        Memory                                            Error creating memory\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\uc9c8\ubb38\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",type:"tip",children:(0,r.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",target:"_blank",rel:"noopener noreferrer",children:" Ask it on StackOverflow! "})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var r=t(67294);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);