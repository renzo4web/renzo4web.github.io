"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[682],{7262:function(e,t,n){n.d(t,{q:function(){return s}});var o=n(7493),r=n(4238),a=n(7294);var l=n(4207);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e){void 0===e&&(e={});var t=e,n=t.onClose,s=t.onOpen,c=t.isOpen,d=t.id,u=a.useState(e.defaultIsOpen||!1),m=(0,o.Z)(u,2),h=m[0],p=m[1],y=function(e,t){var n=void 0!==e;return[n,n&&void 0!==e?e:t]}(c,h),f=(0,o.Z)(y,2),g=f[0],w=f[1],v=(0,l.Me)(d,"disclosure"),b=a.useCallback((function(){g||p(!1),null==n||n()}),[g,n]),I=a.useCallback((function(){g||p(!0),null==s||s()}),[g,s]),x=a.useCallback((function(){(w?b:I)()}),[w,I,b]);return{isOpen:!!w,onOpen:I,onClose:b,onToggle:x,isControlled:g,getButtonProps:function(e){return void 0===e&&(e={}),i({},e,{"aria-expanded":"true","aria-controls":v,onClick:(0,r.v0)(e.onClick,x)})},getDisclosureProps:function(e){return void 0===e&&(e={}),i({},e,{hidden:!w,id:v})}}}},6772:function(e,t,n){var o=n(7262),r=n(7690),a=n(2200),l=n(2331),i=n(7294);t.Z=function(){var e=(0,o.q)();e.isOpen,e.onToggle;return i.createElement(r.xu,{lineHeight:"1.6",h:"100%",my:"4em",textAlign:"left",as:"section"},i.createElement(a.x,null,"Hello my name is Renzo, at the time of writing this, I've been in the programming world for a year."),i.createElement(r.xu,{py:4,borderBottom:"4px solid",borderColor:"#53c8c4",my:5,key:"jkdjsd"},i.createElement(l.X,{mb:4,fontSize:"xl"},"Why?"),i.createElement(a.x,null,"I was always someone who liked to"," ",i.createElement(a.x,{as:"strong",color:"tomato"},"invent and create")," ","different things, when I was a kid I used to combine different toys to create new ones (like the bad boy from Toy Story), when I started studying product design at the university, I realized that it was not my way to exploit my potential, and that's when I left the university and started this journey of programming and especially"," ",i.createElement(a.x,{color:"tomato",as:"strong"},"web development."))),i.createElement(r.xu,{py:4,borderBottom:"4px solid",borderColor:"#53c8c4",my:5},i.createElement(l.X,{mb:4,fontSize:"xl"},"How?"),i.createElement(a.x,null,"My first line of code I wrote it thanks to a pythoin (p4e) course and then I realized that this was my thing, I've been researching on the web trying to see how I could work on this, I found web development and especially the Frontend and I loved it. I decided to study well the basics (HTML, CSS, JS) before jumping to a Framework like React, however this path has not been easy to be self-taught one has to learn to research very well and not waste time on unnecessary things."," ")),i.createElement(r.xu,null,i.createElement(l.X,{mb:4,fontSize:"xl"},"What about now?"),i.createElement(a.x,null,i.createElement(a.x,{color:"tomato",as:"strong"},"Now I am pursuing web development as my primary career"),". Since then I have not stopped learning and creating, getting my hands into any code almost everyday, and I'm not overexagerating when I say I love the experience. I don't believe in perfection at all times but trying your best to achieve something functional and practical. Ergo, I'm pretty proud of what I've done so far and will continue to improve on what I do and can do.")))}},5518:function(e,t,n){n.r(t);var o=n(7294),r=n(6772),a=n(5504),l=n(3751);t.default=function(){return o.createElement(a.Z,null,o.createElement(l.Z,{title:"About",description:"@renzo4web Froentend Developer"}),o.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-about-js-89a8e2728ae64b7cc15a.js.map