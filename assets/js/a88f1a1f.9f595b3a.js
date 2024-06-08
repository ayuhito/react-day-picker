"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9167],{4649:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var s=n(651),t=n(2844),d=n(5728),i=n(218);const l={sidebar_position:5},c="Upgrading",a={id:"upgrading",title:"Upgrading",description:"Upgrade from v8 to v9",source:"@site/docs/upgrading.mdx",sourceDirName:".",slug:"/upgrading",permalink:"/next/upgrading",draft:!1,unlisted:!1,editUrl:"https://github.com/gpbl/react-day-picker/tree/main/website/docs/upgrading.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Changelog",permalink:"/next/changelog"},next:{title:"License",permalink:"/next/license"}},o={},h=[{value:"Upgrade from v8 to v9",id:"upgrade-from-v8-to-v9",level:2},{value:"1. Upgrade to the next version",id:"1-upgrade-to-the-next-version",level:3},{value:"2. Check for removed props",id:"2-check-for-removed-props",level:3},{value:"3. Check for deprecated props",id:"3-check-for-deprecated-props",level:3},{value:"4. Updates for ARIA labels",id:"4-updates-for-aria-labels",level:3},{value:"5. Formatters: update to return a string",id:"5-formatters-update-to-return-a-string",level:3},{value:"6. Custom Components: update the hooks",id:"6-custom-components-update-the-hooks",level:3},{value:"7. TypeScript: check for deprecated types",id:"7-typescript-check-for-deprecated-types",level:3},{value:"Upgrade from v7 to v8",id:"upgrade-from-v7-to-v8",level:2}];function x(e){const r={a:"a",admonition:"admonition",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"upgrading",children:"Upgrading"}),"\n",(0,s.jsx)(r.h2,{id:"upgrade-from-v8-to-v9",children:"Upgrade from v8 to v9"}),"\n",(0,s.jsxs)(r.p,{children:["This major version introduce some important breaking changes. See the ",(0,s.jsx)(r.a,{href:"/next/changelog",children:"changelog"})," for the full list of changes."]}),"\n",(0,s.jsx)(r.admonition,{title:"Work In Progress",type:"warning",children:(0,s.jsxs)(r.p,{children:["Please help us complete this guide by ",(0,s.jsx)(r.a,{href:"https://github.com/gpbl/react-day-picker/discussions/categories/daypicker-v9",children:"opening an issue"}),"."]})}),"\n",(0,s.jsx)(r.p,{children:"Follow these steps to upgrade your project from v8 to v9:"}),"\n",(0,s.jsx)(r.h3,{id:"1-upgrade-to-the-next-version",children:"1. Upgrade to the next version"}),"\n",(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(i.Z,{value:"npm",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"npm install react-day-picker@next date-fns\n"})})}),(0,s.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"yarn add react-day-picker@next date-fns\n"})})}),(0,s.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"pnpm add react-day-picker@next date-fns\n"})})})]}),"\n",(0,s.jsx)(r.h3,{id:"2-check-for-removed-props",children:"2. Check for removed props"}),"\n",(0,s.jsx)(r.p,{children:"The following props have been removed. Check in your code if you are using them."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Removed prop"}),(0,s.jsx)(r.th,{children:"Notes"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"fromDate"})})}),(0,s.jsxs)(r.td,{children:["Replace it with the ",(0,s.jsx)(r.code,{children:"hidden"})," prop and the ",(0,s.jsx)(r.code,{children:"before"})," ",(0,s.jsx)(r.a,{href:"/next/api/type-aliases/Matcher",children:"Matcher"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"toDate"})})}),(0,s.jsxs)(r.td,{children:["Replace it with the ",(0,s.jsx)(r.code,{children:"hidden"})," prop and the ",(0,s.jsx)(r.code,{children:"after"})," ",(0,s.jsx)(r.a,{href:"/next/api/type-aliases/Matcher",children:"Matcher"}),"."]})]})]})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-diff",children:"- <DayPicker fromDate={new Date(2010, 11, 03)} toDate={new Date(2012, 10, 01)} />\n+ <DayPicker hidden={[{ before: new Date(2010, 11, 03)}, { after: new Date(2012, 10, 01) }]} />\n"})}),"\n",(0,s.jsx)(r.h3,{id:"3-check-for-deprecated-props",children:"3. Check for deprecated props"}),"\n",(0,s.jsx)(r.p,{children:"The following props have been deprecated, and will be removed in the next major version."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Deprecated prop"}),(0,s.jsx)(r.th,{children:"Replacement"}),(0,s.jsx)(r.th,{children:"Notes"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"fromMonth"})})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"startMonth"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"toMonth"})})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"endMonth"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"fromYear"})})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"startMonth"})}),(0,s.jsxs)(r.td,{children:["Pass the first month of the year, e.g. ",(0,s.jsx)(r.code,{children:"startMonth = new Date(2024,0)"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"toYear"})})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"endMonth"})}),(0,s.jsxs)(r.td,{children:["Pass the last month of the year, e.g. ",(0,s.jsx)(r.code,{children:"endMonth = new Date(2024,11)"}),"."]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"4-updates-for-aria-labels",children:"4. Updates for ARIA labels"}),"\n",(0,s.jsx)(r.p,{children:"The following ARIA labels have been updated:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Label"}),(0,s.jsx)(r.th,{children:"Old label"}),(0,s.jsx)(r.th,{children:"New label"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"./api/functions/labelPrevious",children:(0,s.jsx)(r.code,{children:"labelPrevious"})})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Go to previous month"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Previous Month"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"./api/functions/labelNext",children:(0,s.jsx)(r.code,{children:"labelNext"})})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Go to next month"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Next Month"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/next/api/functions/labelWeekNumber",children:(0,s.jsx)(r.code,{children:"labelWeekNumber"})})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Week nr."})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Week"})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"You may need to update your test selectors \u2014 for example:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-diff",metastring:'title="./test.js"',children:"- screen.getByRole('button', 'Go to previous month');\n+ screen.getByRole('button', 'Previous Month');\n"})}),"\n",(0,s.jsx)(r.h3,{id:"5-formatters-update-to-return-a-string",children:"5. Formatters: update to return a string"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"formatters"})," prop now requires functions returning a ",(0,s.jsx)(r.code,{children:"string"})," instead of a ",(0,s.jsx)(r.code,{children:"ReactNode"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["If you were ",(0,s.jsx)(r.a,{href:"/next/using-daypicker/localization#formatters",children:"using the formatters"}),", you may need to update your code or use a ",(0,s.jsx)(r.code,{children:"DayDate"})," component to render a ",(0,s.jsx)(r.code,{children:"ReactElement"})," again: see ",(0,s.jsx)(r.a,{href:"/next/advanced-guides/custom-components",children:"custom components guide"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-diff",children:"- const MyComponent = () => <DayPicker formatters={{ caption: () => <strong>My caption</strong> }} />;\n+ const MyComponent = () => <DayPicker formatters={{ caption: () => 'My caption' }} />;\n"})}),"\n",(0,s.jsx)(r.h3,{id:"6-custom-components-update-the-hooks",children:"6. Custom Components: update the hooks"}),"\n",(0,s.jsx)(r.p,{children:"In case you are using DayPicker hooks in your custom components, you need to update your code:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Hook"}),(0,s.jsx)(r.th,{children:"Upgrade Note"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"useDayPicker"})})}),(0,s.jsxs)(r.td,{children:["Renamed to ",(0,s.jsx)(r.a,{href:"/next/api/functions/useProps",children:(0,s.jsx)(r.code,{children:"useProps"})}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"useNavigation"})})}),(0,s.jsxs)(r.td,{children:["Renamed to ",(0,s.jsx)(r.a,{href:"/next/api/functions/useCalendar",children:(0,s.jsx)(r.code,{children:"useCalendar"})}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"useDayPicker"})})}),(0,s.jsxs)(r.td,{children:["Removed in favor of the ",(0,s.jsx)(r.code,{children:"Day"})," custom component. See ",(0,s.jsx)(r.a,{href:"/next/advanced-guides/custom-components",children:"custom components guide"}),"."]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"7-typescript-check-for-deprecated-types",children:"7. TypeScript: check for deprecated types"}),"\n",(0,s.jsx)(r.p,{children:"Many typings have been deprecated in favor of clarity and shorter names. If you were using the typings, you may need to update your code or it will break in the next major version."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-diff",children:"- import type { DayPickerDefaultProps } from 'react-day-picker';\n+ import type { PropsDefault } from 'react-day-picker';\n"})}),"\n",(0,s.jsxs)(r.p,{children:["See also the source of ",(0,s.jsx)(r.a,{href:"https://github.com/gpbl/react-day-picker/blob/next/src/types-deprecated.ts",children:"types-deprecated.ts"}),"."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Deprecated Type"}),(0,s.jsx)(r.th,{children:"Deprecation Reason"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"Caption"})})}),(0,s.jsxs)(r.td,{children:["This component has been renamed. Use ",(0,s.jsx)(r.a,{href:"/next/api/functions/MonthCaption",children:(0,s.jsx)(r.code,{children:"MonthCaption"})})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"HeadRow"})})}),(0,s.jsx)(r.td,{children:"This component has been removed."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"Row"})})}),(0,s.jsxs)(r.td,{children:["This component has been renamed. Use ",(0,s.jsx)(r.a,{href:"/next/api/functions/Week",children:(0,s.jsx)(r.code,{children:"Week"})})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DayPickerSingleProps"})})}),(0,s.jsxs)(r.td,{children:["This type has been renamed. Use ",(0,s.jsx)(r.a,{href:"/next/api/interfaces/PropsSingle",children:(0,s.jsx)(r.code,{children:"PropsSingle"})})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DayPickerMultipleProps"})})}),(0,s.jsxs)(r.td,{children:["This type has been renamed. Use ",(0,s.jsx)(r.a,{href:"/next/api/interfaces/PropsMulti",children:(0,s.jsx)(r.code,{children:"PropsMulti"})})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DayPickerRangeProps"})})}),(0,s.jsxs)(r.td,{children:["This type has been renamed. Use ",(0,s.jsx)(r.a,{href:"/next/api/interfaces/PropsRange",children:(0,s.jsx)(r.code,{children:"PropsRange"})})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DayPickerDefaultProps"})})}),(0,s.jsxs)(r.td,{children:["This type has been renamed. Use ",(0,s.jsx)(r.a,{href:"/next/api/interfaces/PropsDefault",children:(0,s.jsx)(r.code,{children:"PropsDefault"})})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DaySelectionMode"})})}),(0,s.jsxs)(r.td,{children:["This type has been renamed. Use ",(0,s.jsx)(r.a,{href:"/next/api/type-aliases/Mode",children:(0,s.jsx)(r.code,{children:"Mode"})})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"Modifier"})})}),(0,s.jsxs)(r.td,{children:["This type will be removed. Use ",(0,s.jsx)(r.code,{children:"string"})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"SelectSingleEventHandler"})})}),(0,s.jsxs)(r.td,{children:["This type will be removed. Use ",(0,s.jsx)(r.a,{href:"/next/api/type-aliases/SelectHandler",children:(0,s.jsx)(r.code,{children:'SelectHandler<"single">'})})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"SelectMultipleEventHandler"})})}),(0,s.jsxs)(r.td,{children:["This type will be removed. Use ",(0,s.jsx)(r.a,{href:"/next/api/type-aliases/SelectHandler",children:(0,s.jsx)(r.code,{children:'SelectHandler<"multiple">'})})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"SelectRangeEventHandler"})})}),(0,s.jsxs)(r.td,{children:["This type will be removed. Use ",(0,s.jsx)(r.a,{href:"/next/api/type-aliases/SelectHandler",children:(0,s.jsx)(r.code,{children:'SelectHandler<"range">'})})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DayPickerProviderProps"})})}),(0,s.jsx)(r.td,{children:"This type is not used anymore."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"useDayPicker"})})}),(0,s.jsxs)(r.td,{children:["This type has been renamed to ",(0,s.jsx)(r.a,{href:"/next/api/functions/useProps",children:(0,s.jsx)(r.code,{children:"useProps"})}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"useNavigation"})})}),(0,s.jsxs)(r.td,{children:["This type has been renamed to ",(0,s.jsx)(r.a,{href:"/next/api/functions/useCalendar",children:(0,s.jsx)(r.code,{children:"useCalendar"})}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"useDayRender"})})}),(0,s.jsxs)(r.td,{children:["This hook has been removed. To customize the rendering of a day, use the ",(0,s.jsx)(r.code,{children:"htmlAttributes"})," prop in a custom ",(0,s.jsx)(r.code,{children:"Day"})," component."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"ContextProvidersProps"})})}),(0,s.jsx)(r.td,{children:"This type is not used anymore."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DayLabel"})})}),(0,s.jsxs)(r.td,{children:["Use ",(0,s.jsx)(r.code,{children:"typeof labelDay"})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"NavButtonLabel"})})}),(0,s.jsxs)(r.td,{children:["Use ",(0,s.jsx)(r.code,{children:"typeof labelNext"})," or ",(0,s.jsx)(r.code,{children:"typeof labelPrevious"})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"WeekdayLabel"})})}),(0,s.jsxs)(r.td,{children:["Use ",(0,s.jsx)(r.code,{children:"typeof labelWeekday"})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"WeekNumberLabel"})})}),(0,s.jsxs)(r.td,{children:["Use ",(0,s.jsx)(r.code,{children:"typeof labelWeekNumber"})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DayClickEventHandler"})})}),(0,s.jsxs)(r.td,{children:["Use ",(0,s.jsx)(r.code,{children:"DayMouseEventHandler"})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DayFocusEventHandler"})})}),(0,s.jsxs)(r.td,{children:["This type will be removed. Use ",(0,s.jsx)(r.code,{children:"DayEventHandlerReact.FocusEvent | React.KeyboardEvent>"})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DayKeyboardEventHandler"})})}),(0,s.jsxs)(r.td,{children:["This type will be removed. Use ",(0,s.jsx)(r.code,{children:"DayEventHandler<React.KeyboardEvent>"})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DayMouseEventHandler"})})}),(0,s.jsxs)(r.td,{children:["This type will be removed. Use ",(0,s.jsx)(r.code,{children:"DayEventHandler<React.MouseEvent>"})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DayPointerEventHandler"})})}),(0,s.jsxs)(r.td,{children:["This type will be removed. Use ",(0,s.jsx)(r.code,{children:"DayEventHandler<React.PointerEvent>"})," instead."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.del,{children:(0,s.jsx)(r.code,{children:"DayTouchEventHandler"})})}),(0,s.jsxs)(r.td,{children:["This type will be removed. Use ",(0,s.jsx)(r.code,{children:"DayEventHandler<React.TouchEvent>"})," instead."]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"upgrade-from-v7-to-v8",children:"Upgrade from v7 to v8"}),"\n",(0,s.jsxs)(r.p,{children:["See the ",(0,s.jsx)(r.a,{href:"https://react-day-picker.js.org/upgrading",children:"migration guide"})," for the changes introduced in v8."]})]})}function j(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},218:(e,r,n)=>{n.d(r,{Z:()=>i});n(2379);var s=n(3048);const t={tabItem:"tabItem_FOZf"};var d=n(651);function i(e){let{children:r,hidden:n,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,i),hidden:n,children:r})}},5728:(e,r,n)=>{n.d(r,{Z:()=>k});var s=n(2379),t=n(3048),d=n(1054),i=n(5900),l=n(3256),c=n(3247),a=n(8786),o=n(2862);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:r,children:n}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:t}}=e;return{value:r,label:n,attributes:s,default:t}}))}(n);return function(e){const r=(0,a.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function j(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:n}=e;const t=(0,i.k6)(),d=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c._X)(d),(0,s.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(t.location.search);r.set(d,e),t.replace({...t.location,search:r.toString()})}),[d,t])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,d=x(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:d}))),[a,h]=u({queryString:n,groupId:t}),[p,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,d]=(0,o.Nk)(n);return[t,(0,s.useCallback)((e=>{n&&d.set(e)}),[n,d])]}({groupId:t}),m=(()=>{const e=a??p;return j({value:e,tabValues:d})?e:null})();(0,l.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,d]),tabValues:d}}var f=n(8706);const m={tabList:"tabList_so7n",tabItem:"tabItem_TcIW"};var b=n(651);function y(e){let{className:r,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,d.o5)(),o=e=>{const r=e.currentTarget,n=c.indexOf(r),t=l[n].value;t!==s&&(a(r),i(t))},h=e=>{let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>c.push(e),onKeyDown:h,onClick:o,...d,className:(0,t.Z)("tabs__item",m.tabItem,d?.className,{"tabs__item--active":s===r}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:t}=e;const d=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=d.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:d.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function g(e){const r=p(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...r,...e}),(0,b.jsx)(v,{...r,...e})]})}function k(e){const r=(0,f.Z)();return(0,b.jsx)(g,{...e,children:h(e.children)},String(r))}},2844:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>i});var s=n(2379);const t={},d=s.createContext(t);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);