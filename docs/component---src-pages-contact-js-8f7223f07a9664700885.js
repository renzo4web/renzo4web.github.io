(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[501],{4929:function(e,t,n){"use strict";var r=n(4942),a=n(6511),o=n(4667),i=n(7294);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var l=function(e){var t,n=e.type,o=void 0===n?"checkbox":n,l=e._hover,s=e._invalid,u=e._disabled,d=e._focus,f=e._checked,m=e._child,h=void 0===m?{opacity:0}:m,p=e._checkedAndChild,v=void 0===p?{opacity:1}:p,y=e._checkedAndDisabled,g=e._checkedAndFocus,b=e._checkedAndHover,k=e.children,x=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["type","_hover","_invalid","_disabled","_focus","_checked","_child","_checkedAndChild","_checkedAndDisabled","_checkedAndFocus","_checkedAndHover","children"]),E="input[type="+o+"]:checked:disabled + &",w="input[type="+o+"]:checked:hover:not(:disabled) + &",_="input[type="+o+"]:checked:focus + &",C="input[type="+o+"]:disabled + &",M="input[type="+o+"]:focus + &",O="input[type="+o+"]:hover:not(:disabled):not(:checked) + &",j="input[type="+o+"]:checked + &, input[type="+o+"][aria-checked=mixed] + &",z="input[type="+o+"][aria-invalid=true] + &",T="& > *";return i.createElement(a.m$.div,c({},x,{"aria-hidden":!0,__css:(t={display:"inline-flex",alignItems:"center",justifyContent:"center",transitionProperty:"common",transitionDuration:"fast",flexShrink:0},(0,r.Z)(t,M,d),(0,r.Z)(t,O,l),(0,r.Z)(t,C,u),(0,r.Z)(t,z,s),(0,r.Z)(t,E,y),(0,r.Z)(t,_,g),(0,r.Z)(t,w,b),(0,r.Z)(t,T,h),(0,r.Z)(t,j,c({},f,(0,r.Z)({},T,v))),t)}),k)};o.Ts&&(l.displayName="ControlBox")},7690:function(e,t,n){"use strict";n.d(t,{xu:function(){return s}});var r=n(6511),a=n(2543),o=n(4667),i=n(7294);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var s=(0,r.m$)("div");o.Ts&&(s.displayName="Box");var u=(0,a.G)((function(e,t){var n=e.size,r=e.centerContent,a=void 0===r||r,o=l(e,["size","centerContent"]),u=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return i.createElement(s,c({ref:t,boxSize:n,__css:c({},u,{flexShrink:0,flexGrow:0})},o))}));o.Ts&&(u.displayName="Square");var d=(0,a.G)((function(e,t){var n=e.size,r=l(e,["size"]);return i.createElement(u,c({size:n,ref:t,borderRadius:"9999px"},r))}));o.Ts&&(d.displayName="Circle")},7361:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var r=n(2543),a=n(6511),o=n(4667),i=n(7294);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var l=(0,r.G)((function(e,t){var n=e.direction,r=e.align,o=e.justify,l=e.wrap,s=e.basis,u=e.grow,d=e.shrink,f=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["direction","align","justify","wrap","basis","grow","shrink"]),m={display:"flex",flexDirection:n,alignItems:r,justifyContent:o,flexWrap:l,flexBasis:s,flexGrow:u,flexShrink:d};return i.createElement(a.m$.div,c({ref:t,__css:m},f))}));o.Ts&&(l.displayName="Flex")},2200:function(e,t,n){"use strict";n.d(t,{x:function(){return f}});var r=n(2543),a=n(3888),o=n(7487),i=n(6511),c=n(4526),l=n(5587),s=n(4667),u=n(7294);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var f=(0,r.G)((function(e,t){var n=(0,a.m)("Text",e),r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}((0,o.Lr)(e),["className","align","decoration","casing"]),s=(0,c.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return u.createElement(i.m$.p,d({ref:t,className:(0,l.cx)("chakra-text",e.className)},s,r,{__css:n}))}));s.Ts&&(f.displayName="Text")},5230:function(e,t,n){"use strict";n.d(t,{forwardRef:function(){return a.forwardRef},useColorMode:function(){return a.useColorMode},useColorModeValue:function(){return a.useColorModeValue}});n(4929);var r=n(6397);n.o(r,"forwardRef")&&n.d(t,{forwardRef:function(){return r.forwardRef}}),n.o(r,"useColorMode")&&n.d(t,{useColorMode:function(){return r.useColorMode}}),n.o(r,"useColorModeValue")&&n.d(t,{useColorModeValue:function(){return r.useColorModeValue}});var a=n(8047)},8047:function(e,t,n){"use strict";n.d(t,{forwardRef:function(){return a.G},useColorMode:function(){return r.If},useColorModeValue:function(){return r.ff}});var r=n(5623),a=(n(4762),n(6690),n(2543))},6690:function(){},5504:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(7294),a=n(5444),o=n(7690),i=n(7361),c=n(2200),l=n(7814),s=function(e){var t=e.children,n=(0,a.useStaticQuery)("2199005656").site.siteMetadata.author;return r.createElement(o.xu,{borderTopLeftRadius:"2em",borderTopRightRadius:"2em",as:"footer",py:"1em",mt:"auto",boxShadow:"xl",width:"100%",zIndex:"55"},r.createElement(l.Z,null),r.createElement(i.k,{direction:["column","row"],w:"100%",alignItems:"center",justifyContent:"center"},t,r.createElement(c.x,{mr:["0","20px"]},"Crafted By ",n," © 2021"),r.createElement(c.x,{mr:["0","20px"]},"That's it. Seeya later friend ¯\\_(ツ)_/¯"),r.createElement(a.Link,{to:"/thanks"},"Thanks!!!")))},u=n(4982),d=(0,u.I)({displayName:"SunIcon",path:r.createElement("g",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2",fill:"none",stroke:"currentColor"},r.createElement("circle",{cx:"12",cy:"12",r:"5"}),r.createElement("path",{d:"M12 1v2"}),r.createElement("path",{d:"M12 21v2"}),r.createElement("path",{d:"M4.22 4.22l1.42 1.42"}),r.createElement("path",{d:"M18.36 18.36l1.42 1.42"}),r.createElement("path",{d:"M1 12h2"}),r.createElement("path",{d:"M21 12h2"}),r.createElement("path",{d:"M4.22 19.78l1.42-1.42"}),r.createElement("path",{d:"M18.36 5.64l1.42-1.42"}))}),f=(0,u.I)({d:"M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",displayName:"MoonIcon"}),m=n(5230),h=n(2332);function p(){var e=(0,m.useColorMode)().toggleColorMode,t=(0,m.useColorModeValue)(d,f);return r.createElement(h.h,{icon:r.createElement(t,null),variant:"ghost","aria-label":"Toggle Theme",onClick:e})}var v=n(3442),y=function(e){return console.log(e),["home","projects","about"].map((function(e){var t=""+e.charAt(0).toUpperCase()+e.slice(1);return r.createElement(a.Link,{key:e,to:"/"+("home"===e?"":e)},r.createElement(v.z,{as:"span",variant:"ghost"},r.createElement(c.x,{fontWeight:"bold",fontSize:"lg"},t)))}))},g=function(e){var t=e.activePage;(0,a.useStaticQuery)("2199005656").site.siteMetadata.title;return r.createElement(o.xu,{borderBottomLeftRadius:"2em",borderBottomRightRadius:"2em",as:"header",px:4,boxShadow:"lg",width:"100%"},r.createElement(i.k,{as:"nav",direction:["column","row"],h:16,alignItems:"center",justifyContent:"space-between",w:["90%","85%","80%"],maxW:800,mx:"auto"},r.createElement(i.k,{role:"navigation"},y(t)),r.createElement(p,null)))},b=n(3653),k=n(3433),x=n(6397),E=n(4667),w=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"];function _(e){return!!(0,E.Kn)(e)&&w.every((function(t){return Object.prototype.hasOwnProperty.call(e,t)}))}var C=n(4238),M=n(3971),O=n.n(M);function j(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return O().apply(void 0,[{}].concat(t,[z]))}function z(e,t,n,r){if(((0,E.mf)(e)||(0,E.mf)(t))&&Object.prototype.hasOwnProperty.call(r,n))return function(){var n=(0,E.mf)(e)?e.apply(void 0,arguments):e,r=(0,E.mf)(t)?t.apply(void 0,arguments):t;return O()({},n,r,z)}}var T=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=[].concat(t),a=t[t.length-1];return _(a)&&r.length>1?r=r.slice(0,r.length-1):a=x.Z,C.zG.apply(void 0,(0,k.Z)(r.map((function(e){return function(t){return(0,E.mf)(e)?e(t):j(t,e)}}))))(a)}({fonts:{body:"Poppins"}}),S=T,I=function(e){var t=e.pageTitle,n=e.children;return r.createElement(b.x,{h:"100%",theme:S,resetCSS:!0},r.createElement(i.k,{as:"div",direction:"column",textAlign:"center",fontSize:"xl",w:["90%","85%","80%"],maxW:850,mx:"auto",h:"100%"},r.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/wenk/dist/wenk.css"}),r.createElement(g,{activePage:t}),r.createElement(o.xu,{className:"layout-module--animationChange--3bQLY",flexGrow:"2",mt:"auto",as:"main"},n),r.createElement(s,null)))}},262:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(5504),o=n(3751);t.default=function(){return r.createElement(a.Z,null,r.createElement(o.Z,{title:"Contact",description:"Contact me page"}),r.createElement("section",{className:"contact-page"},r.createElement("span",{className:"hire-span"},"Available for hire"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{title:"GitHub Profile",tabIndex:"1",target:"_blank",href:"https://github.com/renzo4web"},"Github")),r.createElement("li",null,r.createElement("a",{tabIndex:"2",title:"Twitter Profile",target:"_blank",href:"https://twitter.com/renzo4web"},"Twitter")),r.createElement("li",null,r.createElement("a",{title:"Linkedin Profile",tabIndex:"3",target:"_blank",href:"https://www.linkedin.com/in/renzobarrios/"},"Linkedin")),r.createElement("li",null,r.createElement("a",{title:"My Email",tabIndex:"4",target:"_blank",href:"mailto:renzobarrios@aol.com"},"renzobarrios@aol.com")))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-8f7223f07a9664700885.js.map