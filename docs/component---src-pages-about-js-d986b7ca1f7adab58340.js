(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[682],{4929:function(e,t,n){"use strict";var r=n(4942),o=n(6511),a=n(4667),i=n(7294);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var l=function(e){var t,n=e.type,a=void 0===n?"checkbox":n,l=e._hover,s=e._invalid,u=e._disabled,d=e._focus,f=e._checked,h=e._child,m=void 0===h?{opacity:0}:h,p=e._checkedAndChild,y=void 0===p?{opacity:1}:p,v=e._checkedAndDisabled,g=e._checkedAndFocus,b=e._checkedAndHover,x=e.children,w=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["type","_hover","_invalid","_disabled","_focus","_checked","_child","_checkedAndChild","_checkedAndDisabled","_checkedAndFocus","_checkedAndHover","children"]),k="input[type="+a+"]:checked:disabled + &",E="input[type="+a+"]:checked:hover:not(:disabled) + &",C="input[type="+a+"]:checked:focus + &",O="input[type="+a+"]:disabled + &",_="input[type="+a+"]:focus + &",I="input[type="+a+"]:hover:not(:disabled):not(:checked) + &",j="input[type="+a+"]:checked + &, input[type="+a+"][aria-checked=mixed] + &",M="input[type="+a+"][aria-invalid=true] + &",S="& > *";return i.createElement(o.m$.div,c({},w,{"aria-hidden":!0,__css:(t={display:"inline-flex",alignItems:"center",justifyContent:"center",transitionProperty:"common",transitionDuration:"fast",flexShrink:0},(0,r.Z)(t,_,d),(0,r.Z)(t,I,l),(0,r.Z)(t,O,u),(0,r.Z)(t,M,s),(0,r.Z)(t,k,v),(0,r.Z)(t,C,g),(0,r.Z)(t,E,b),(0,r.Z)(t,S,m),(0,r.Z)(t,j,c({},f,(0,r.Z)({},S,y))),t)}),x)};a.Ts&&(l.displayName="ControlBox")},7262:function(e,t,n){"use strict";n.d(t,{q:function(){return l}});var r=n(9439),o=n(4238),a=n(7294);var i=n(4207);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e){void 0===e&&(e={});var t=e,n=t.onClose,l=t.onOpen,s=t.isOpen,u=t.id,d=a.useState(e.defaultIsOpen||!1),f=(0,r.Z)(d,2),h=f[0],m=f[1],p=function(e,t){var n=void 0!==e;return[n,n&&void 0!==e?e:t]}(s,h),y=(0,r.Z)(p,2),v=y[0],g=y[1],b=(0,i.Me)(u,"disclosure"),x=a.useCallback((function(){v||m(!1),null==n||n()}),[v,n]),w=a.useCallback((function(){v||m(!0),null==l||l()}),[v,l]),k=a.useCallback((function(){(g?x:w)()}),[g,w,x]);return{isOpen:!!g,onOpen:w,onClose:x,onToggle:k,isControlled:v,getButtonProps:function(e){return void 0===e&&(e={}),c({},e,{"aria-expanded":"true","aria-controls":b,onClick:(0,o.v0)(e.onClick,k)})},getDisclosureProps:function(e){return void 0===e&&(e={}),c({},e,{hidden:!g,id:b})}}}},7690:function(e,t,n){"use strict";n.d(t,{xu:function(){return s}});var r=n(6511),o=n(2543),a=n(4667),i=n(7294);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var s=(0,r.m$)("div");a.Ts&&(s.displayName="Box");var u=(0,o.G)((function(e,t){var n=e.size,r=e.centerContent,o=void 0===r||r,a=l(e,["size","centerContent"]),u=o?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return i.createElement(s,c({ref:t,boxSize:n,__css:c({},u,{flexShrink:0,flexGrow:0})},a))}));a.Ts&&(u.displayName="Square");var d=(0,o.G)((function(e,t){var n=e.size,r=l(e,["size"]);return i.createElement(u,c({size:n,ref:t,borderRadius:"9999px"},r))}));a.Ts&&(d.displayName="Circle")},7361:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var r=n(2543),o=n(6511),a=n(4667),i=n(7294);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var l=(0,r.G)((function(e,t){var n=e.direction,r=e.align,a=e.justify,l=e.wrap,s=e.basis,u=e.grow,d=e.shrink,f=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["direction","align","justify","wrap","basis","grow","shrink"]),h={display:"flex",flexDirection:n,alignItems:r,justifyContent:a,flexWrap:l,flexBasis:s,flexGrow:u,flexShrink:d};return i.createElement(o.m$.div,c({ref:t,__css:h},f))}));a.Ts&&(l.displayName="Flex")},2331:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var r=n(2543),o=n(3888),a=n(7487),i=n(6511),c=n(5587),l=n(4667),s=n(7294);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var d=(0,r.G)((function(e,t){var n=(0,o.m)("Heading",e),r=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}((0,a.Lr)(e),["className"]);return s.createElement(i.m$.h2,u({ref:t,className:(0,c.cx)("chakra-heading",e.className)},r,{__css:n}))}));l.Ts&&(d.displayName="Heading")},2200:function(e,t,n){"use strict";n.d(t,{x:function(){return f}});var r=n(2543),o=n(3888),a=n(7487),i=n(6511),c=n(4526),l=n(5587),s=n(4667),u=n(7294);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var f=(0,r.G)((function(e,t){var n=(0,o.m)("Text",e),r=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}((0,a.Lr)(e),["className","align","decoration","casing"]),s=(0,c.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return u.createElement(i.m$.p,d({ref:t,className:(0,l.cx)("chakra-text",e.className)},s,r,{__css:n}))}));s.Ts&&(f.displayName="Text")},5230:function(e,t,n){"use strict";n.d(t,{forwardRef:function(){return o.forwardRef},useColorMode:function(){return o.useColorMode},useColorModeValue:function(){return o.useColorModeValue}});n(4929);var r=n(6397);n.o(r,"forwardRef")&&n.d(t,{forwardRef:function(){return r.forwardRef}}),n.o(r,"useColorMode")&&n.d(t,{useColorMode:function(){return r.useColorMode}}),n.o(r,"useColorModeValue")&&n.d(t,{useColorModeValue:function(){return r.useColorModeValue}});var o=n(8047)},8047:function(e,t,n){"use strict";n.d(t,{forwardRef:function(){return o.G},useColorMode:function(){return r.If},useColorModeValue:function(){return r.ff}});var r=n(5623),o=(n(4762),n(6690),n(2543))},6690:function(){},6772:function(e,t,n){"use strict";var r=n(7262),o=n(7690),a=n(2200),i=n(2331),c=n(7294);t.Z=function(){var e=(0,r.q)();e.isOpen,e.onToggle;return c.createElement(o.xu,{lineHeight:"1.6",h:"100%",my:"4em",textAlign:"left",as:"section"},c.createElement(a.x,null,"Hello my name is Renzo, at the time of writing this, I've been in the programming world for a year."),c.createElement(o.xu,{py:4,borderBottom:"4px solid",borderColor:"#53c8c4",my:5,key:"jkdjsd"},c.createElement(i.X,{mb:4,fontSize:"xl"},"Why?"),c.createElement(a.x,null,"I was always someone who liked to"," ",c.createElement(a.x,{as:"strong",color:"tomato"},"invent and create")," ","different things, when I was a kid I used to combine different toys to create new ones (like the bad boy from Toy Story), when I started studying product design at the university, I realized that it was not my way to exploit my potential, and that's when I left the university and started this journey of programming and especially"," ",c.createElement(a.x,{color:"tomato",as:"strong"},"web development."))),c.createElement(o.xu,{py:4,borderBottom:"4px solid",borderColor:"#53c8c4",my:5},c.createElement(i.X,{mb:4,fontSize:"xl"},"How?"),c.createElement(a.x,null,"My first line of code I wrote it thanks to a pythoin (p4e) course and then I realized that this was my thing, I've been researching on the web trying to see how I could work on this, I found web development and especially the Frontend and I loved it. I decided to study well the basics (HTML, CSS, JS) before jumping to a Framework like React, however this path has not been easy to be self-taught one has to learn to research very well and not waste time on unnecessary things."," ")),c.createElement(o.xu,null,c.createElement(i.X,{mb:4,fontSize:"xl"},"What about now?"),c.createElement(a.x,null,c.createElement(a.x,{color:"tomato",as:"strong"},"Now I am pursuing web development as my primary career"),". Since then I have not stopped learning and creating, getting my hands into any code almost everyday, and I'm not overexagerating when I say I love the experience. I don't believe in perfection at all times but trying your best to achieve something functional and practical. Ergo, I'm pretty proud of what I've done so far and will continue to improve on what I do and can do.")))}},5504:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(7294),o=n(5444),a=n(7690),i=n(7361),c=n(2200),l=n(7814),s=function(e){var t=e.children,n=(0,o.useStaticQuery)("2199005656").site.siteMetadata.author;return r.createElement(a.xu,{borderTopLeftRadius:"2em",borderTopRightRadius:"2em",as:"footer",py:"1em",mt:"auto",boxShadow:"xl",width:"100%",zIndex:"55"},r.createElement(l.Z,null),r.createElement(i.k,{direction:["column","row"],w:"100%",alignItems:"center",justifyContent:"center"},t,r.createElement(c.x,{mr:["0","20px"]},"Crafted By ",n," © 2021"),r.createElement(c.x,{mr:["0","20px"]},"That's it. Seeya later friend ¯\\_(ツ)_/¯"),r.createElement(o.Link,{to:"/thanks"},"Thanks!!!")))},u=n(4982),d=(0,u.I)({displayName:"SunIcon",path:r.createElement("g",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2",fill:"none",stroke:"currentColor"},r.createElement("circle",{cx:"12",cy:"12",r:"5"}),r.createElement("path",{d:"M12 1v2"}),r.createElement("path",{d:"M12 21v2"}),r.createElement("path",{d:"M4.22 4.22l1.42 1.42"}),r.createElement("path",{d:"M18.36 18.36l1.42 1.42"}),r.createElement("path",{d:"M1 12h2"}),r.createElement("path",{d:"M21 12h2"}),r.createElement("path",{d:"M4.22 19.78l1.42-1.42"}),r.createElement("path",{d:"M18.36 5.64l1.42-1.42"}))}),f=(0,u.I)({d:"M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",displayName:"MoonIcon"}),h=n(5230),m=n(2332);function p(){var e=(0,h.useColorMode)().toggleColorMode,t=(0,h.useColorModeValue)(d,f);return r.createElement(m.h,{icon:r.createElement(t,null),variant:"ghost","aria-label":"Toggle Theme",onClick:e})}var y=n(3442),v=function(e){return console.log(e),["home","projects","about"].map((function(e){var t=""+e.charAt(0).toUpperCase()+e.slice(1);return r.createElement(o.Link,{key:e,to:"/"+("home"===e?"":e)},r.createElement(y.z,{as:"span",variant:"ghost"},r.createElement(c.x,{fontWeight:"bold",fontSize:"lg"},t)))}))},g=function(e){var t=e.activePage;(0,o.useStaticQuery)("2199005656").site.siteMetadata.title;return r.createElement(a.xu,{borderBottomLeftRadius:"2em",borderBottomRightRadius:"2em",as:"header",px:4,boxShadow:"lg",width:"100%"},r.createElement(i.k,{as:"nav",direction:["column","row"],h:16,alignItems:"center",justifyContent:"space-between",w:["90%","85%","80%"],maxW:800,mx:"auto"},r.createElement(i.k,{role:"navigation"},v(t)),r.createElement(p,null)))},b=n(3653),x=n(3433),w=n(6397),k=n(4667),E=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"];function C(e){return!!(0,k.Kn)(e)&&E.every((function(t){return Object.prototype.hasOwnProperty.call(e,t)}))}var O=n(4238),_=n(3971),I=n.n(_);function j(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return I().apply(void 0,[{}].concat(t,[M]))}function M(e,t,n,r){if(((0,k.mf)(e)||(0,k.mf)(t))&&Object.prototype.hasOwnProperty.call(r,n))return function(){var n=(0,k.mf)(e)?e.apply(void 0,arguments):e,r=(0,k.mf)(t)?t.apply(void 0,arguments):t;return I()({},n,r,M)}}var S=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=[].concat(t),o=t[t.length-1];return C(o)&&r.length>1?r=r.slice(0,r.length-1):o=w.Z,O.zG.apply(void 0,(0,x.Z)(r.map((function(e){return function(t){return(0,k.mf)(e)?e(t):j(t,e)}}))))(o)}({fonts:{body:"Poppins"}}),z=S,T=function(e){var t=e.pageTitle,n=e.children;return r.createElement(b.x,{h:"100%",theme:z,resetCSS:!0},r.createElement(i.k,{as:"div",direction:"column",textAlign:"center",fontSize:"xl",w:["90%","85%","80%"],maxW:850,mx:"auto",h:"100%"},r.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/wenk/dist/wenk.css"}),r.createElement(g,{activePage:t}),r.createElement(a.xu,{className:"layout-module--animationChange--3bQLY",flexGrow:"2",mt:"auto",as:"main"},n),r.createElement(s,null)))}},5518:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(6772),a=n(5504),i=n(3751);t.default=function(){return r.createElement(a.Z,null,r.createElement(i.Z,{title:"About",description:"@renzo4web Froentend Developer"}),r.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-about-js-d986b7ca1f7adab58340.js.map