"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4039],{4659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=n(651),r=n(2844);const i={sidebar_position:5},l="Localization",d={id:"using-daypicker/localization",title:"Localization",description:"Configure the Locale",source:"@site/versioned_docs/version-8.10.1/using-daypicker/localization.mdx",sourceDirName:"using-daypicker",slug:"/using-daypicker/localization",permalink:"/using-daypicker/localization",draft:!1,unlisted:!1,editUrl:"https://github.com/gpbl/react-day-picker/tree/main/website/versioned_docs/version-8.10.1/using-daypicker/localization.mdx",tags:[],version:"8.10.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Selection Modes",permalink:"/using-daypicker/selection-modes"},next:{title:"Accessibility",permalink:"/using-daypicker/accessibility"}},a={},c=[{value:"Configure the Locale",id:"configure-the-locale",level:2},{value:"Set a Different Locale",id:"set-a-different-locale",level:3},{value:"First Date of the Week",id:"first-date-of-the-week",level:3},{value:"First Week of the Year",id:"first-week-of-the-year",level:3},{value:"ISO Week Dates",id:"iso-week-dates",level:3},{value:"Translate DayPicker",id:"translate-daypicker",level:2},{value:"ARIA Labels",id:"aria-labels",level:3},{value:"Formatters",id:"formatters",level:3},{value:"RTL Text Direction",id:"rtl-text-direction",level:3},{value:"Numbering System",id:"numbering-system",level:3}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{BrowserWindow:n,ExamplesV8:i}=t;return n||x("BrowserWindow",!0),i||x("ExamplesV8",!1),i.NumberingSystem||x("ExamplesV8.NumberingSystem",!0),i.Rtl||x("ExamplesV8.Rtl",!0),i.Spanish||x("ExamplesV8.Spanish",!0),i.SpanishWeekStartsOn||x("ExamplesV8.SpanishWeekStartsOn",!0),i.WeeknumberCustom||x("ExamplesV8.WeeknumberCustom",!0),i.WeeknumberIso||x("ExamplesV8.WeeknumberIso",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"localization",children:"Localization"}),"\n",(0,s.jsx)(t.h2,{id:"configure-the-locale",children:"Configure the Locale"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prop Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"locale"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://date-fns.org/docs/I18n",children:(0,s.jsx)(t.code,{children:"Locale"})})}),(0,s.jsxs)(t.td,{children:["Set the locale. Default is ",(0,s.jsx)(t.code,{children:"en-US"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"weekStartsOn"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"1"})," | ",(0,s.jsx)(t.code,{children:"2"})," | ",(0,s.jsx)(t.code,{children:"3"})," | ",(0,s.jsx)(t.code,{children:"4"})," | ",(0,s.jsx)(t.code,{children:"5"})," | ",(0,s.jsx)(t.code,{children:"6"})," | ",(0,s.jsx)(t.code,{children:"7"})]}),(0,s.jsx)(t.td,{children:"Display the days falling into the other months."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"firstWeekContainsDate"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"1"})," | ",(0,s.jsx)(t.code,{children:"4"})]}),(0,s.jsx)(t.td,{children:"Configure the first date in the first week of the year."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ISOWeek"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsxs)(t.td,{children:["Use ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_week_date",children:"ISO Week Dates"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"set-a-different-locale",children:"Set a Different Locale"}),"\n",(0,s.jsxs)(t.p,{children:["To set a locale different than the the default ",(0,s.jsx)(t.code,{children:"English (US)"}),", pass to the ",(0,s.jsx)(t.code,{children:"locale"})," prop a ",(0,s.jsx)(t.a,{href:"https://date-fns.org/docs/I18n",children:"Locale"})," object imported from ",(0,s.jsx)(t.code,{children:"date-fns"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, to localize the calendar in Spanish, import the ",(0,s.jsx)(t.code,{children:"es"})," locale object from date-fns and pass it to the component."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'caption="render:Spanish"',children:'import { es } from "date-fns/locale";\n\n<DayPicker locale={es} />; // Set the locale to Spanish\n'})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)(i.Spanish,{})}),"\n",(0,s.jsx)(t.h3,{id:"first-date-of-the-week",children:"First Date of the Week"}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"weekStartsOn"})," to override the first date of the week."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"<DayPicker weekStartsOn={0} />\n"})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)(i.SpanishWeekStartsOn,{})}),"\n",(0,s.jsx)(t.h3,{id:"first-week-of-the-year",children:"First Week of the Year"}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"weekStartsOn"})," to override the first date of the first week of the year, used to calculate the week numbers. Possible values are ",(0,s.jsx)(t.code,{children:"1"})," (Monday) or ",(0,s.jsx)(t.code,{children:"4"})," (Thursday)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'caption="render:WeeknumberCustom"',children:"<DayPicker\n  showWeekNumber\n  firstWeekContainsDate={1} // First week must contain Monday\n/>\n"})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)(i.WeeknumberCustom,{})}),"\n",(0,s.jsx)(t.h3,{id:"iso-week-dates",children:"ISO Week Dates"}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"ISOWeek"})," to switch using ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_week_date",children:"ISO Week Dates"})," instead of the locale setting."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'caption="render:WeeknumberIso"',children:"<DayPicker\n  showWeekNumber\n  ISOWeek // Switch to ISO week\n/>\n"})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)(i.WeeknumberIso,{})}),"\n",(0,s.jsx)(t.h2,{id:"translate-daypicker",children:"Translate DayPicker"}),"\n",(0,s.jsx)(t.admonition,{title:"Draft",type:"info",children:(0,s.jsxs)(t.p,{children:["This paragraph is still a work in progress. If you have any questions, ask to the ",(0,s.jsx)(t.a,{href:"https://github.com/gpbl/react-day-picker/discussions",children:"discussions"})," page on Github."]})}),"\n",(0,s.jsx)(t.p,{children:"Use these props to translate DayPicker in any language."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prop Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"labels"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/type-aliases/Labels",children:(0,s.jsx)(t.code,{children:"Labels"})})}),(0,s.jsx)(t.td,{children:"Map the ARIA labels used within DayPicker."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"formatters"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/type-aliases/Formatters",children:(0,s.jsx)(t.code,{children:"Formatters"})})}),(0,s.jsx)(t.td,{children:"Map the function used as date formatters."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"dir"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"rtl"})," | ",(0,s.jsx)(t.code,{children:"ltr"})]}),(0,s.jsx)(t.td,{children:"Set the text direction."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"aria-labels",children:"ARIA Labels"}),"\n",(0,s.jsxs)(t.p,{children:["ARIA labels are used by DayPicker to provide a better accessibility experience. Use the ",(0,s.jsx)(t.code,{children:"labels"})," prop to translate the labels used in the component."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'<DayPicker\n  labels={{\n    labelNext: () => "Prossimo mese"\n    labelPrevious: () => "Mese precedente"\n  }}\n/>\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Member"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"labelMonthDropdown"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["() => ",(0,s.jsx)(t.code,{children:"string"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'Returns the label for the "Months" dropwdown'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"labelNext"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/api/type-aliases/NavButtonLabel",children:(0,s.jsx)(t.code,{children:"NavButtonLabel"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'Label for the "Next month" button.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"labelPrevious"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/api/type-aliases/NavButtonLabel",children:(0,s.jsx)(t.code,{children:"NavButtonLabel"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'Label for the "Previous month" button.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"labelWeekNumber"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/api/type-aliases/WeekNumberLabel",children:(0,s.jsx)(t.code,{children:"WeekNumberLabel"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'Label for the "Next month" button.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"labelWeekday"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/api/type-aliases/WeekdayLabel",children:(0,s.jsx)(t.code,{children:"WeekdayLabel"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Label for the week day used in the head component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"labelYearDropdown"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["() => ",(0,s.jsx)(t.code,{children:"string"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'Label for the "Years" dropdown.'})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"formatters",children:"Formatters"}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"formatters"})," prop to format the dates and the week numbers."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Member"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"formatCaption"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/api/type-aliases/DateFormatter",children:(0,s.jsx)(t.code,{children:"DateFormatter"})})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Format the month in the caption when ",(0,s.jsx)(t.code,{children:"captionLayout"})," is ",(0,s.jsx)(t.code,{children:"buttons"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"formatDay"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/api/type-aliases/DateFormatter",children:(0,s.jsx)(t.code,{children:"DateFormatter"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Format the day in the day cell."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"formatMonthCaption"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/api/type-aliases/DateFormatter",children:(0,s.jsx)(t.code,{children:"DateFormatter"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Format the month in the navigation dropdown."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"formatWeekNumber"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/api/type-aliases/WeekNumberFormatter",children:(0,s.jsx)(t.code,{children:"WeekNumberFormatter"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Format the week number."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"formatWeekdayName"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/api/type-aliases/DateFormatter",children:(0,s.jsx)(t.code,{children:"DateFormatter"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Format the week day name in the header"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"formatYearCaption"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/api/type-aliases/DateFormatter",children:(0,s.jsx)(t.code,{children:"DateFormatter"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Format the year in the navigation dropdown."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"rtl-text-direction",children:"RTL Text Direction"}),"\n",(0,s.jsxs)(t.p,{children:["To set the right-to-left text direction, toggle the ",(0,s.jsx)(t.code,{children:"dir"})," prop to ",(0,s.jsx)(t.code,{children:"rtl"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'caption="render:Rtl"',children:'import { arSA } from "date-fns/locale";\n\n<DayPicker locale={arSA} dir="rtl" />;\n'})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)(i.Rtl,{})}),"\n",(0,s.jsx)(t.h3,{id:"numbering-system",children:"Numbering System"}),"\n",(0,s.jsxs)(t.p,{children:["Use the proper ",(0,s.jsx)(t.code,{children:"formatters"})," to change the ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Numeral_system",children:"numbering system"})," used in the calendar."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, to switch to hindu-arabic use the native ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString",children:(0,s.jsx)(t.code,{children:"Date.toLocaleString"})}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'caption="render:NumberingSystem"',children:'import { format } from "date-fns/format";\nimport { arSA } from "date-fns/locale";\nimport { DayPicker, Formatters } from "react-day-picker";\n\nconst NU_LOCALE = "ar-u-nu-arab";\n\nconst formatDay = (day) => day.getDate().toLocaleString(NU_LOCALE);\nconst formatWeekNumber = (weekNumber) => weekNumber.toLocaleString(NU_LOCALE);\nconst formatMonthCaption = (date, options) => {\n  const y = date.getFullYear().toLocaleString(NU_LOCALE);\n  const m = format(date, "LLLL", options);\n  return `${m} ${y}`;\n};\n\nexport function NumberingSystemExample() {\n  return (\n    <DayPicker\n      locale={arSA}\n      dir="rtl"\n      showWeekNumber\n      formatters={{\n        formatDay,\n        formatMonthCaption,\n        formatWeekNumber\n      }}\n    />\n  );\n}\n'})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)(i.NumberingSystem,{})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}function x(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2844:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var s=n(2379);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);