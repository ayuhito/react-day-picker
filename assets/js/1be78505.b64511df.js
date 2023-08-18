"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,7755],{4880:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Se});var a=n(7503),r=n(4266),o=n(7359),l=n(766),i=n(3419),c=n(2163),d=n(1029),s=n(6020),m=n(6477),u=n(4959),b=n(5230),p=n(9367);const h={backToTopButton:"backToTopButton_Sjak",backToTopButtonShow:"backToTopButtonShow_nMB8"};function v(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],o=n[1],l=(0,a.useRef)(!1),i=(0,b.Ct)(),c=i.startScroll,d=i.cancelScroll;return(0,b.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(l.current?l.current=!1:a>=r?(d(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.S)((function(e){e.location.hash&&(l.current=!0,o(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,h.backToTopButton,t&&h.backToTopButtonShow),type:"button",onClick:n})}var E=n(9241),f=n(2637),g=n(738),k=n(2861),_=n(3272),C=n(6302);function S(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I={collapseSidebarButton:"collapseSidebarButton_tLpV",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_XSfO"};function N(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},a.createElement(S,{className:I.collapseSidebarButtonIcon}))}var Z=n(690),T=n(217),x=n(371),B=Symbol("EmptyContext"),w=a.createContext(B);function y(e){var t=e.children,n=(0,a.useState)(null),r=n[0],o=n[1],l=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:o}}),[r]);return a.createElement(w.Provider,{value:l},t)}var A=n(3258),L=n(7526),F=n(2025),M=n(7553),P=["item","onItemClick","activePath","level","index"];function H(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function W(e){var t=e.item,n=e.onItemClick,o=e.activePath,i=e.level,d=e.index,s=(0,T.Z)(e,P),m=t.items,u=t.label,b=t.collapsible,p=t.className,h=t.href,v=(0,k.L)().docs.sidebar.autoCollapseCategories,E=function(e){var t=(0,M.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),f=(0,c._F)(t,o),g=(0,L.Mg)(h,o),_=(0,A.u)({initialState:function(){return!!b&&(!f&&t.collapsed)}}),S=_.collapsed,I=_.setCollapsed,N=function(){var e=(0,a.useContext)(w);if(e===B)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=N.expandedItem,y=N.setExpandedItem,W=function(e){void 0===e&&(e=!S),y(e?null:d),I(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,o=(0,x.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:f,collapsed:S,updateCollapsed:W}),(0,a.useEffect)((function(){b&&null!=Z&&Z!==d&&v&&I(!0)}),[b,Z,d,I,v]),a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":S},p)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(F.Z,(0,C.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?function(e){null==n||n(t),h?W(!1):(e.preventDefault(),W())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!S:void 0,href:b?null!=E?E:"#":E},s),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:function(e){e.preventDefault(),W()}})),a.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},a.createElement(j,{items:m,tabIndex:S?-1:0,onItemClick:n,activePath:o,level:i+1})))}var D=n(9876),R=n(4450);const V={menuExternalLink:"menuExternalLink_Mpdw"};var q=["item","onItemClick","activePath","level","index"];function z(e){var t=e.item,n=e.onItemClick,o=e.activePath,i=e.level,d=(e.index,(0,T.Z)(e,q)),s=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,o),h=(0,D.Z)(s);return a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:m},a.createElement(F.Z,(0,C.Z)({className:(0,r.Z)("menu__link",!h&&V.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},h&&{onClick:n?function(){return n(t)}:void 0},d),m,!h&&a.createElement(R.Z,null)))}const G={menuHtmlItem:"menuHtmlItem_btEB"};function U(e){var t=e.item,n=e.level,o=e.index,i=t.value,c=t.defaultStyle,d=t.className;return a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(n),c&&[G.menuHtmlItem,"menu__list-item"],d),key:o,dangerouslySetInnerHTML:{__html:i}})}var Y=["item"];function K(e){var t=e.item,n=(0,T.Z)(e,Y);switch(t.type){case"category":return a.createElement(W,(0,C.Z)({item:t},n));case"html":return a.createElement(U,(0,C.Z)({item:t},n));default:return a.createElement(z,(0,C.Z)({item:t},n))}}var X=["items"];function O(e){var t=e.items,n=(0,T.Z)(e,X);return a.createElement(y,null,t.map((function(e,t){return a.createElement(K,(0,C.Z)({key:t,item:e,index:t},n))})))}const j=(0,a.memo)(O),J={menu:"menu__tDg",menuWithAnnouncementBar:"menuWithAnnouncementBar_sTqa"};function Q(e){var t=e.path,n=e.sidebar,o=e.className,i=function(){var e=(0,Z.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,b.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",J.menu,i&&J.menuWithAnnouncementBar,o)},a.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:n,activePath:t,level:1})))}const $="sidebar_DIKi",ee="sidebarWithHideableNavbar_vSot",te="sidebarHidden_qTSq",ne="sidebarLogo_qnYh";function ae(e){var t=e.path,n=e.sidebar,o=e.onCollapse,l=e.isHidden,i=(0,k.L)(),c=i.navbar.hideOnScroll,d=i.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.Z)($,c&&ee,l&&te)},c&&a.createElement(_.Z,{tabIndex:-1,className:ne}),a.createElement(Q,{path:t,sidebar:n}),d&&a.createElement(N,{onClick:o}))}const re=a.memo(ae);var oe=n(9894),le=n(4915),ie=function(e){var t=e.sidebar,n=e.path,o=(0,le.e)();return a.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ce(e){return a.createElement(oe.Zo,{component:ie,props:e})}const de=a.memo(ce);function se(e){var t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(re,e),r&&a.createElement(de,e))}const me={expandButton:"expandButton_lSyp",expandButtonIcon:"expandButtonIcon_GXRK"};function ue(e){var t=e.toggleSidebar;return a.createElement("div",{className:me.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(S,{className:me.expandButtonIcon}))}const be={docSidebarContainer:"docSidebarContainer_mGAX",docSidebarContainerHidden:"docSidebarContainerHidden_gAsF",sidebarViewport:"sidebarViewport_GtW4"};function pe(e){var t,n=e.children,r=(0,s.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function he(e){var t=e.sidebar,n=e.hiddenSidebarContainer,o=e.setHiddenSidebarContainer,i=(0,f.TH)().pathname,c=(0,a.useState)(!1),d=c[0],s=c[1],m=(0,a.useCallback)((function(){d&&s(!1),!d&&(0,E.n)()&&s(!0),o((function(e){return!e}))}),[o,d]);return a.createElement("aside",{className:(0,r.Z)(l.k.docs.docSidebarContainer,be.docSidebarContainer,n&&be.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(be.docSidebarContainer)&&n&&s(!0)}},a.createElement(pe,null,a.createElement("div",{className:(0,r.Z)(be.sidebarViewport,d&&be.sidebarViewportHidden)},a.createElement(se,{sidebar:t,path:i,onCollapse:m,isHidden:d}),d&&a.createElement(ue,{toggleSidebar:m}))))}const ve={docMainContainer:"docMainContainer_zpGW",docMainContainerEnhanced:"docMainContainerEnhanced_SFVG",docItemWrapperEnhanced:"docItemWrapperEnhanced_bpBq"};function Ee(e){var t=e.hiddenSidebarContainer,n=e.children,o=(0,s.V)();return a.createElement("main",{className:(0,r.Z)(ve.docMainContainer,(t||!o)&&ve.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ve.docItemWrapper,t&&ve.docItemWrapperEnhanced)},n))}const fe={docPage:"docPage_sF26",docsWrapper:"docsWrapper_zRUd"};function ge(e){var t=e.children,n=(0,s.V)(),r=(0,a.useState)(!1),o=r[0],l=r[1];return a.createElement(m.Z,{wrapperClassName:fe.docsWrapper},a.createElement(v,null),a.createElement("div",{className:fe.docPage},n&&a.createElement(he,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(Ee,{hiddenSidebarContainer:o},t)))}var ke=n(7755),_e=n(3167);function Ce(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(_e.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Se(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(ke.default,null);var i=n.docElement,m=n.sidebarName,u=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(Ce,e),a.createElement(o.FG,{className:(0,r.Z)(l.k.wrapper.docsPages,l.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(d.q,{version:t},a.createElement(s.b,{name:m,items:u},a.createElement(ge,null,i)))))}},7755:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7503),r=n(4959),o=n(7359),l=n(6477);function i(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(l.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},1029:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>l});var a=n(7503),r=n(371),o=a.createContext(null);function l(e){var t=e.children,n=e.version;return a.createElement(o.Provider,{value:n},t)}function i(){var e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);
//# sourceMappingURL=1be78505.b64511df.js.map