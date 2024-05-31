"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[409],{8350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(651),r=n(2844),s=n(3401),i=n(767);const l={pagination_next:"using-daypicker/styling"},c="Getting Started",o={id:"start",title:"Getting Started",description:"Install the Package",source:"@site/docs/start.mdx",sourceDirName:".",slug:"/start",permalink:"/next/start",draft:!1,unlisted:!1,editUrl:"https://github.com/gpbl/react-day-picker/tree/main/website/docs/start.mdx",tags:[],version:"current",frontMatter:{pagination_next:"using-daypicker/styling"},sidebar:"docs",previous:{title:"Introduction",permalink:"/next/"},next:{title:"Styling",permalink:"/next/using-daypicker/styling"}},d={},u=[{value:"Install the Package",id:"install-the-package",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Using DayPicker",id:"using-daypicker",level:3},{value:"Advanced Guides",id:"advanced-guides",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{BrowserWindow:n,Examples:l}=t;return n||m("BrowserWindow",!0),l||m("Examples",!1),l.Start||m("Examples.Start",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsx)(t.h2,{id:"install-the-package",children:"Install the Package"}),"\n",(0,a.jsxs)(t.p,{children:["DayPicker is available as ",(0,a.jsx)(t.code,{children:"react-day-picker"})," npm package. It requires ",(0,a.jsx)(t.a,{href:"https://date-fns.org",children:"date-fns"})," as a peer dependency."]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install react-day-picker@next date-fns\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add react-day-picker@next date-fns\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm add react-day-picker@next date-fns\n"})})})]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["See ",(0,a.jsx)(t.a,{href:"https://github.com/gpbl/react-day-picker/issues/1087",children:"#1087"})," if you are interested in DayPicker supporting different date\nlibraries."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,a.jsx)(t.p,{children:"To create a simple date picker calendar,"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Import the component and its default style from ",(0,a.jsx)(t.code,{children:"react-day-picker"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Choose a ",(0,a.jsx)(t.a,{href:"./using-daypicker/selection-modes",children:"selection mode"})," using the ",(0,a.jsx)(t.code,{children:"mode"})," prop."]}),"\n",(0,a.jsxs)(t.li,{children:["Assign the ",(0,a.jsx)(t.code,{children:"selected"})," and ",(0,a.jsx)(t.code,{children:"onSelect"})," props to manage the selected date."]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'import { useState } from "react";\n\nimport { DayPicker } from "react-day-picker";\nimport "react-day-picker/style.css";\n\nexport function MyDatePicker() {\n  const [selected, setSelected] = useState();\n  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;\n}\n'})}),"\n",(0,a.jsx)(n,{children:(0,a.jsx)(l.Start,{})}),"\n",(0,a.jsx)(t.h2,{id:"learn-more",children:"Learn More"}),"\n","\n","\n",(0,a.jsx)(t.h3,{id:"using-daypicker",children:"Using DayPicker"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"./using-daypicker/styling",children:"Styling"})," - Change the style to make DayPicker match your app's look and feel."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"./using-daypicker/customization",children:"Customization"})," - Explore the options available to customize the calendar and the months navigation."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"./using-daypicker/selection-modes",children:"Selection Modes"})," - Enable users to select days with single, multiple or range selections."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"./using-daypicker/localization",children:"Localization"})," - Configure DayPicker to display the calendar in different languages and date formats."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"./using-daypicker/accessibility",children:"Accessible Date Pickers"})," - Make your date picker accessible to all users."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"advanced-guides",children:"Advanced Guides"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"./advanced-guides/input-fields",children:"Input Fields"})," - Learn how to use DayPicker with input fields and form libraries."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"./advanced-guides/custom-selections",children:"Custom Selections"})," - Create custom selection rules."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"./advanced-guides/custom-components",children:"Custom Components"})," - Use custom components to create a fully customized date picker."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"./advanced-guides/custom-modifiers",children:"Custom Modifiers"})," - Create custom modifiers to highlight specific days in the calendar."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},767:(e,t,n)=>{n.d(t,{Z:()=>i});n(2379);var a=n(3048);const r={tabItem:"tabItem_kdQb"};var s=n(651);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},3401:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(2379),r=n(3048),s=n(6941),i=n(5900),l=n(596),c=n(9226),o=n(2231),d=n(2412);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,u]=m({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),x=(()=>{const e=o??f;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(2815);const x={tabList:"tabList_Fq8j",tabItem:"tabItem_J8Am"};var b=n(651);function y(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==a&&(o(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function k(e){const t=(0,g.Z)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},2844:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var a=n(2379);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);