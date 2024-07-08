(self.webpackChunk=self.webpackChunk||[]).push([[1412],{28226:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(85893),i=t(11151),s=t(2154);const r={id:"builtin-components",title:"List of Native Components"},a=void 0,l={id:"build/near-components/anatomy/builtin-components",title:"List of Native Components",description:"A list of all the built-in components to be used on Near Components.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/3.near-components/anatomy/builtin-components.md",sourceDirName:"2.build/3.near-components/anatomy",slug:"/build/near-components/anatomy/builtin-components",permalink:"/ko/build/near-components/anatomy/builtin-components",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/3.near-components/anatomy/builtin-components.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1719825734e3,frontMatter:{id:"builtin-components",title:"List of Native Components"},sidebar:"build",previous:{title:"Web Browser Methods",permalink:"/ko/build/near-components/anatomy/web-methods"},next:{title:"Interacting with Near",permalink:"/ko/build/near-components/anatomy/near"}},d={},c=[{value:"Widget",id:"widget",level:2},{value:"IpfsImageUpload",id:"ipfsimageupload",level:2},{value:"Files",id:"files",level:2},{value:"Markdown",id:"markdown",level:2},{value:"OverlayTrigger",id:"overlaytrigger",level:2},{value:"InfiniteScroll",id:"infinitescroll",level:2},{value:"TypeAhead",id:"typeahead",level:2},{value:"Styled Components",id:"styled-components",level:2},{value:"Tooltip",id:"tooltip",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"A list of all the built-in components to be used on Near Components."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"widget",children:"Widget"}),"\n",(0,o.jsxs)(n.p,{children:["The predefined component ",(0,o.jsx)(n.code,{children:"Widget"})," allows you to include an existing component into your code, thus enabling to create complex applications by composing components."]}),"\n",(0,o.jsx)(s.W,{id:"1",height:"100px",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'const props = { name: "Anna", amount: 3 };\n\nreturn <Widget src="influencer.testnet/widget/Greeter" props={props} />;\n'})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"ipfsimageupload",children:"IpfsImageUpload"}),"\n",(0,o.jsx)(n.p,{children:"A built-in component that enables users to directly upload an image to the InterPlanetary File System (IPFS)."}),"\n",(0,o.jsx)(s.W,{id:"2",height:"200px",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"State.init({image: {}})\n\nreturn <>\n  <p> Raw State: {JSON.stringify(state.image)} </p>\n  <IpfsImageUpload image={state.image} />\n</>\n"})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"files",children:"Files"}),"\n",(0,o.jsxs)(n.p,{children:["A built-in component that enables to input files with drag and drop support. Read more about the ",(0,o.jsx)(n.code,{children:"Files"})," component ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/react-files",children:"here"}),"."]}),"\n",(0,o.jsx)(s.W,{id:"3",height:"220px",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const [img, setImg] = useState(null);\nconst [msg, setMsg] = useState(\'Upload an Image\')\n\nconst uploadFile = (files) => {\n  setMsg(\'Uploading...\')\n\n  const file = fetch(\n    "https://ipfs.near.social/add",\n    {\n      method: "POST",\n      headers: { Accept: "application/json" },\n      body: files[0]\n    }\n  )\n\n  setImg(file.body.cid)\n  setMsg(\'Upload an Image\')\n}\n\nreturn <>\n  <Files\n    multiple={false}\n    accepts={["image/*"]}\n    clickable\n    className="btn btn-outline-primary"\n    onChange={uploadFile}\n  >\n    {msg}\n  </Files>\n  {img ? <div><img src={`https://ipfs.near.social/ipfs/${img}`} /></div> : \'\'}\n</>;\n'})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"markdown",children:"Markdown"}),"\n",(0,o.jsx)(n.p,{children:"A component that enables to render Markdown."}),"\n",(0,o.jsx)(s.W,{id:"4",height:"60px",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const markdown = (`\n## A title\n\nThis is some example **markdown** content, with _styled_ text\n`)\n\nreturn <Markdown text={markdown} />;\n"})})}),"\n",(0,o.jsx)(n.admonition,{title:"Markdown Editor",type:"tip",children:(0,o.jsxs)(n.p,{children:["Checkout this ",(0,o.jsx)(n.a,{href:"https://near.social/#/mob.near/widget/MarkdownEditorIframeExample",children:"Markdown Editor"}),", and ",(0,o.jsx)(n.a,{href:"https://near.social/mob.near/widget/WidgetSource?src=mob.near/widget/MarkdownEditorIframeExample",children:"its source code"}),"."]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"overlaytrigger",children:"OverlayTrigger"}),"\n",(0,o.jsx)(n.p,{children:"Used to display a message or icon when the mouse is over a DOM element."}),"\n",(0,o.jsx)(s.W,{id:"5",height:"200px",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const [show, setShow] = useState(false);\n\nconst overlay = (\n  <div className='border m-3 p-3'>\n    This is the overlay Message\n  </div>\n);\n\nreturn (\n  <OverlayTrigger\n    show={show}\n    delay={{ show: 250, hide: 300 }}\n    placement='auto'\n    overlay={overlay}\n  >\n    <button\n      className=\"btn btn-outline-primary\"\n      onMouseEnter={() => setShow(true)}\n      onMouseLeave={() => setShow(false)}\n    >\n      Place Mouse Over Me\n    </button>\n  </OverlayTrigger>\n);\n"})})}),"\n",(0,o.jsxs)(t,{markdown:"1",children:[(0,o.jsx)("summary",{children:" Component props "}),(0,o.jsx)(n.p,{children:"The OverlayTrigger component has several props that allow you to customize its behavior:"}),(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Prop"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"show"})}),(0,o.jsx)(n.td,{children:"A boolean value that determines whether the overlay is currently visible or not."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"trigger"})}),(0,o.jsxs)(n.td,{children:["An array of events that trigger the display of the overlay. In this example, the ",(0,o.jsx)(n.code,{children:"trigger"})," prop is set to ",(0,o.jsx)(n.code,{children:'["hover", "focus"]'}),", which means that the overlay will be displayed when the user hovers over or focuses on the element."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"delay"})}),(0,o.jsxs)(n.td,{children:["An object that specifies the delay before the overlay is displayed or hidden. In this example, the ",(0,o.jsx)(n.code,{children:"delay"})," prop is set to ",(0,o.jsx)(n.code,{children:"{ show: 250, hide: 300 }"}),", which means that the overlay will be displayed after a 250-millisecond delay and hidden after a 300-millisecond delay."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"placement"})}),(0,o.jsxs)(n.td,{children:["A string that specifies the position of the overlay relative to the trigger element. In this example, the ",(0,o.jsx)(n.code,{children:"placement"})," prop is set to ",(0,o.jsx)(n.code,{children:'"auto"'}),", which means that the position will be automatically determined based on available space."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"overlay"})}),(0,o.jsxs)(n.td,{children:["The content that will be displayed in the overlay. In this example, the ",(0,o.jsx)(n.code,{children:"overlay"})," prop is set to a ",(0,o.jsx)(n.code,{children:"<div>"}),' element containing the message "This is the overlay message.']})]})]})]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"infinitescroll",children:"InfiniteScroll"}),"\n",(0,o.jsx)(n.p,{children:"Infinitely load a grid or list of items. This component allows you to create a simple, lightweight infinite scrolling page or element by supporting both window and scrollable elements."}),"\n",(0,o.jsxs)(n.p,{children:["Read more about the ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/react-infinite-scroller",children:"react-infinite-scroller"})," package."]}),"\n",(0,o.jsx)(s.W,{id:"6",height:"200px",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const allNumbers = Array.from(Array(100).keys())\nconst [lastNumber, setLastNumber] = useState(0);\nconst [display, setDisplay] = useState([]);\n\nconst loadNumbers = (page) => {\n  const toDisplay = allNumbers\n    .slice(0, lastNumber + page*10)\n    .map(n => <p>{n}</p>)\n\n  console.log(lastNumber + page*10)\n  setDisplay(toDisplay);\n  setLastNumber(lastNumber + page*10);\n};\n\nreturn (\n  <InfiniteScroll\n    loadMore={loadNumbers}\n    hasMore={lastNumber < allNumbers.length}\n    useWindow={false}\n  >\n    {display}\n  </InfiniteScroll>\n);\n"})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"typeahead",children:"TypeAhead"}),"\n",(0,o.jsxs)(n.p,{children:["Provides a type-ahead input field for selecting an option from a list of choices. More information about the component can be found ",(0,o.jsx)(n.a,{href:"https://github.com/ericgio/react-bootstrap-typeahead",children:"here"}),"."]}),"\n",(0,o.jsx)(s.W,{id:"7",height:"300px",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'const [selected, setSelected] = useState([]);\nconst options = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];\n\nreturn <>\n  <Typeahead\n    options={options}\n    multiple\n    onChange={v => setSelected(v)}\n    placeholder=\'Choose a fruit...\'\n  />\n  <hr />\n  <p> Selected: {selected.join(\', \')} </p>\n</>;\n'})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"styled-components",children:"Styled Components"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://styled-components.com/",children:"Styled Components"})," is a popular library for styling React components using CSS-in-JS."]}),"\n",(0,o.jsx)(s.W,{id:"8",height:"80px",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'const Button = styled.button`\n  /* Adapt the colors based on primary prop */\n  background: ${(props) => (props.primary ? "palevioletred" : "white")};\n  color: ${(props) => (props.primary ? "white" : "palevioletred")};\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 10px;\n`;\n\nreturn (\n  <div>\n    <Button>Normal</Button>\n    <Button primary>Primary</Button>\n  </div>\n);\n'})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"tooltip",children:"Tooltip"}),"\n",(0,o.jsxs)(n.p,{children:["Displays a message once the mouse hovers over a particular item. This component was imported from ",(0,o.jsx)(n.a,{href:"https://react-bootstrap-v3.netlify.app/components/tooltips/",children:(0,o.jsx)(n.code,{children:"React-Bootstrap"})}),"."]}),"\n",(0,o.jsx)(s.W,{id:"9",height:"120px",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const tooltip = (\n  <Tooltip id="tooltip">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Tooltip>\n);\n\nreturn <>\n  <OverlayTrigger placement="left" overlay={tooltip}>\n    <button>Holy guacamole!</button>\n  </OverlayTrigger>\n\n  <OverlayTrigger placement="top" overlay={tooltip}>\n    <button>Holy guacamole!</button>\n  </OverlayTrigger>\n\n  <OverlayTrigger placement="bottom" overlay={tooltip}>\n    <button>Holy guacamole!</button>\n  </OverlayTrigger>\n\n  <OverlayTrigger placement="right" overlay={tooltip}>\n    <button>Holy guacamole!</button>\n  </OverlayTrigger>\n</>\n'})})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},2154:(e,n,t)=>{"use strict";t.d(n,{W:()=>r});var o=t(67294),i=t(91262),s=t(85893);function r(e){var n=e.children,r=e.id,a=void 0===r?1:r,l=e.networkId,d=void 0===l?"testnet":l,c=e.height,h=void 0===c?"160px":c;return(0,s.jsx)(i.Z,{fallback:(0,s.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{n.length||(n=[n]),e=n[0].props.children.props.children}catch(x){}var i=t(58613),r=i.Widget,l=i.useInitNear,c=t(2302).ZP,p=(0,o.useState)(e),m=p[0],u=p[1],g=l().initNear;return(0,o.useEffect)((function(){g&&g({networkId:d,selector:new Promise((function(){}))})}),[g]),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"monaco",children:(0,s.jsx)(c,{height:h,value:m,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return u(e)}})}),(0,s.jsx)("div",{className:"code_iframe",children:(0,s.jsx)("div",{className:"bootstrap-scope",children:(0,s.jsx)("div",{className:"vm-widget",children:(0,s.jsx)(r,{code:m},a)})})}),n[1]]})}})}},24654:()=>{},55024:()=>{},15861:(e,n,t)=>{"use strict";function o(e,n,t,o,i,s,r){try{var a=e[s](r),l=a.value}catch(d){return void t(d)}a.done?n(l):Promise.resolve(l).then(o,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,s){var r=e.apply(n,t);function a(e){o(r,i,s,a,l,"next",e)}function l(e){o(r,i,s,a,l,"throw",e)}a(void 0)}))}}t.d(n,{Z:()=>i})},11151:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a,a:()=>r});var o=t(67294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);