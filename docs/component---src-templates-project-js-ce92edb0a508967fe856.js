(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[769],{4929:function(e,t,n){"use strict";var r=n(5774),o=n(6511),i=n(4667),u=n(7294);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=function(e){var t,n=e.type,i=void 0===n?"checkbox":n,a=e._hover,l=e._invalid,f=e._disabled,s=e._focus,d=e._checked,p=e._child,y=void 0===p?{opacity:0}:p,E=e._checkedAndChild,h=void 0===E?{opacity:1}:E,m=e._checkedAndDisabled,v=e._checkedAndFocus,g=e._checkedAndHover,b=e.children,T=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["type","_hover","_invalid","_disabled","_focus","_checked","_child","_checkedAndChild","_checkedAndDisabled","_checkedAndFocus","_checkedAndHover","children"]),O="input[type="+i+"]:checked:disabled + &",_="input[type="+i+"]:checked:hover:not(:disabled) + &",S="input[type="+i+"]:checked:focus + &",I="input[type="+i+"]:disabled + &",A="input[type="+i+"]:focus + &",w="input[type="+i+"]:hover:not(:disabled):not(:checked) + &",D="input[type="+i+"]:checked + &, input[type="+i+"][aria-checked=mixed] + &",L="input[type="+i+"][aria-invalid=true] + &",N="& > *";return u.createElement(o.m$.div,c({},T,{"aria-hidden":!0,__css:(t={display:"inline-flex",alignItems:"center",justifyContent:"center",transitionProperty:"common",transitionDuration:"fast",flexShrink:0},(0,r.Z)(t,A,s),(0,r.Z)(t,w,a),(0,r.Z)(t,I,f),(0,r.Z)(t,L,l),(0,r.Z)(t,O,m),(0,r.Z)(t,S,v),(0,r.Z)(t,_,g),(0,r.Z)(t,N,y),(0,r.Z)(t,D,c({},d,(0,r.Z)({},N,h))),t)}),b)};i.Ts&&(a.displayName="ControlBox")},7690:function(e,t,n){"use strict";n.d(t,{xu:function(){return l}});var r=n(6511),o=n(2543),i=n(4667),u=n(7294);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var l=(0,r.m$)("div");i.Ts&&(l.displayName="Box");var f=(0,o.G)((function(e,t){var n=e.size,r=e.centerContent,o=void 0===r||r,i=a(e,["size","centerContent"]),f=o?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return u.createElement(l,c({ref:t,boxSize:n,__css:c({},f,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(f.displayName="Square");var s=(0,o.G)((function(e,t){var n=e.size,r=a(e,["size"]);return u.createElement(f,c({size:n,ref:t,borderRadius:"9999px"},r))}));i.Ts&&(s.displayName="Circle")},7361:function(e,t,n){"use strict";n.d(t,{k:function(){return a}});var r=n(2543),o=n(6511),i=n(4667),u=n(7294);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=(0,r.G)((function(e,t){var n=e.direction,r=e.align,i=e.justify,a=e.wrap,l=e.basis,f=e.grow,s=e.shrink,d=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["direction","align","justify","wrap","basis","grow","shrink"]),p={display:"flex",flexDirection:n,alignItems:r,justifyContent:i,flexWrap:a,flexBasis:l,flexGrow:f,flexShrink:s};return u.createElement(o.m$.div,c({ref:t,__css:p},d))}));i.Ts&&(a.displayName="Flex")},9537:function(e,t,n){"use strict";n.d(t,{aV:function(){return E},QI:function(){return m},HC:function(){return v},DE:function(){return g}});var r=n(5774),o=n(132),i=n(2543),u=n(3888),c=n(7487),a=n(9735),l=n(6511),f=n(4667),s=n(2299),d=n(7294);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var E=(0,i.G)((function(e,t){var n=(0,u.j)("List",e),o=(0,c.Lr)(e),i=o.children,f=o.styleType,E=void 0===f?"none":f,h=o.stylePosition,m=o.spacing,v=y(o,["children","styleType","stylePosition","spacing"]),g=(0,s.W)(i),b=m?(0,r.Z)({},"& > *:not(style) ~ *:not(style)",{mt:m}):{};return d.createElement(a.Fo,{value:n},d.createElement(l.m$.ul,p({ref:t,listStyleType:E,listStylePosition:h,role:"list",__css:p({},n.container,b)},v),g))}));f.Ts&&(E.displayName="List");var h=(0,i.G)((function(e,t){var n=y(e,["as"]);return d.createElement(E,p({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},n))}));f.Ts&&(h.displayName="OrderedList");var m=(0,i.G)((function(e,t){var n=y(e,["as"]);return d.createElement(E,p({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},n))}));f.Ts&&(m.displayName="UnorderedList");var v=(0,i.G)((function(e,t){var n=(0,a.yK)();return d.createElement(l.m$.li,p({ref:t},e,{__css:n.item}))}));f.Ts&&(v.displayName="ListItem");var g=(0,i.G)((function(e,t){var n=(0,a.yK)();return d.createElement(o.J,p({ref:t,role:"presentation"},e,{__css:n.icon}))}));f.Ts&&(g.displayName="ListIcon")},2200:function(e,t,n){"use strict";n.d(t,{x:function(){return d}});var r=n(2543),o=n(3888),i=n(7487),u=n(6511),c=n(4526),a=n(5587),l=n(4667),f=n(7294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=(0,r.G)((function(e,t){var n=(0,o.m)("Text",e),r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}((0,i.Lr)(e),["className","align","decoration","casing"]),l=(0,c.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return f.createElement(u.m$.p,s({ref:t,className:(0,a.cx)("chakra-text",e.className)},l,r,{__css:n}))}));l.Ts&&(d.displayName="Text")},5230:function(e,t,n){"use strict";n.d(t,{forwardRef:function(){return o.forwardRef},useColorMode:function(){return o.useColorMode},useColorModeValue:function(){return o.useColorModeValue}});n(4929);var r=n(6397);n.o(r,"forwardRef")&&n.d(t,{forwardRef:function(){return r.forwardRef}}),n.o(r,"useColorMode")&&n.d(t,{useColorMode:function(){return r.useColorMode}}),n.o(r,"useColorModeValue")&&n.d(t,{useColorModeValue:function(){return r.useColorModeValue}});var o=n(8047)},8047:function(e,t,n){"use strict";n.d(t,{forwardRef:function(){return o.G},useColorMode:function(){return r.If},useColorModeValue:function(){return r.ff}});var r=n(5623),o=(n(4762),n(6690),n(2543))},6690:function(){},9806:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var a,l,f=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),u=function(e){try{return!!e()}catch(t){return!0}},a=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!l.call({1:2},1)?function(e){var t=f(this,e);return!!t&&t.enumerable}:l},d=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},p={}.toString,y="".split,E=u((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return p.call(e).slice(8,-1)}(e)?y.call(e,""):Object(e)}:Object,h=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},m=function(e){return E(h(e))},v=function(e){return"object"==typeof e?null!==e:"function"==typeof e},g=function(e,t){if(!v(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!v(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,T=Object.hasOwn||function(e,t){return b.call(Object(h(e)),t)},O=i.document,_=v(O)&&v(O.createElement),S=function(e){return _?O.createElement(e):{}},I=!a&&!u((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,w={f:a?A:function(e,t){if(e=m(e),t=g(t,!0),I)try{return A(e,t)}catch(n){}if(T(e,t))return d(!s.f.call(e,t),e[t])}},D=function(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e},L=Object.defineProperty,N={f:a?L:function(e,t,n){if(D(e),t=g(t,!0),D(n),I)try{return L(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},j=a?function(e,t,n){return N.f(e,t,d(1,n))}:function(e,t,n){return e[t]=n,e},x=function(e,t){try{j(i,e,t)}catch(n){i[e]=t}return t},k="__core-js_shared__",R=i[k]||x(k,{}),M=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(e){return M.call(e)});var P,C,G,H=R.inspectSource,B=i.WeakMap,Y="function"==typeof B&&/native code/.test(H(B)),U=r((function(e){(e.exports=function(e,t){return R[e]||(R[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.14.0",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),z=0,F=Math.random(),K=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++z+F).toString(36)},W=U("keys"),Z=function(e){return W[e]||(W[e]=K(e))},V={},Q="Object already initialized",q=i.WeakMap;if(Y||R.state){var $=R.state||(R.state=new q),J=$.get,X=$.has,ee=$.set;P=function(e,t){if(X.call($,e))throw new TypeError(Q);return t.facade=e,ee.call($,e,t),t},C=function(e){return J.call($,e)||{}},G=function(e){return X.call($,e)}}else{var te=Z("state");V[te]=!0,P=function(e,t){if(T(e,te))throw new TypeError(Q);return t.facade=e,j(e,te,t),t},C=function(e){return T(e,te)?e[te]:{}},G=function(e){return T(e,te)}}var ne={set:P,get:C,has:G,enforce:function(e){return G(e)?C(e):P(e,{})},getterFor:function(e){return function(t){var n;if(!v(t)||(n=C(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},re=r((function(e){var t=ne.get,n=ne.enforce,r=String(String).split("String");(e.exports=function(e,t,o,u){var c,a=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,f=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof t||T(o,"name")||j(o,"name",t),(c=n(o)).source||(c.source=r.join("string"==typeof t?t:""))),e!==i?(a?!f&&e[t]&&(l=!0):delete e[t],l?e[t]=o:j(e,t,o)):l?e[t]=o:x(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||H(this)}))})),oe=i,ie=function(e){return"function"==typeof e?e:void 0},ue=function(e,t){return arguments.length<2?ie(oe[e])||ie(i[e]):oe[e]&&oe[e][t]||i[e]&&i[e][t]},ce=Math.ceil,ae=Math.floor,le=function(e){return isNaN(e=+e)?0:(e>0?ae:ce)(e)},fe=Math.min,se=Math.max,de=Math.min,pe=function(e){return function(t,n,r){var o,i,u=m(t),c=(o=u.length)>0?fe(le(o),9007199254740991):0,a=function(e,t){var n=le(e);return n<0?se(n+t,0):de(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((i=u[a++])!=i)return!0}else for(;c>a;a++)if((e||a in u)&&u[a]===n)return e||a||0;return!e&&-1}},ye={includes:pe(!0),indexOf:pe(!1)},Ee=ye.indexOf,he=function(e,t){var n,r=m(e),o=0,i=[];for(n in r)!T(V,n)&&T(r,n)&&i.push(n);for(;t.length>o;)T(r,n=t[o++])&&(~Ee(i,n)||i.push(n));return i},me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ve=me.concat("length","prototype"),ge={f:Object.getOwnPropertyNames||function(e){return he(e,ve)}},be={f:Object.getOwnPropertySymbols},Te=ue("Reflect","ownKeys")||function(e){var t=ge.f(D(e)),n=be.f;return n?t.concat(n(e)):t},Oe=function(e,t){for(var n=Te(t),r=N.f,o=w.f,i=0;i<n.length;i++){var u=n[i];T(e,u)||r(e,u,o(t,u))}},_e=/#|\.prototype\./,Se=function(e,t){var n=Ae[Ie(e)];return n==De||n!=we&&("function"==typeof t?u(t):!!t)},Ie=Se.normalize=function(e){return String(e).replace(_e,".").toLowerCase()},Ae=Se.data={},we=Se.NATIVE="N",De=Se.POLYFILL="P",Le=Se,Ne=w.f,je=function(e,t){var n,r,o,u,c,a=e.target,l=e.global,f=e.stat;if(n=l?i:f?i[a]||x(a,{}):(i[a]||{}).prototype)for(r in t){if(u=t[r],o=e.noTargetGet?(c=Ne(n,r))&&c.value:n[r],!Le(l?r:a+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;Oe(u,o)}(e.sham||o&&o.sham)&&j(u,"sham",!0),re(n,r,u,e)}},xe=Object.keys||function(e){return he(e,me)},ke=s.f,Re=function(e){return function(t){for(var n,r=m(t),o=xe(r),i=o.length,u=0,c=[];i>u;)n=o[u++],a&&!ke.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Me=(Re(!0),Re(!1));je({target:"Object",stat:!0},{values:function(e){return Me(e)}}),oe.Object.values;var Pe,Ce,Ge=ue("navigator","userAgent")||"",He=i.process,Be=He&&He.versions,Ye=Be&&Be.v8;Ye?Ce=(Pe=Ye.split("."))[0]<4?1:Pe[0]+Pe[1]:Ge&&(!(Pe=Ge.match(/Edge\/(\d+)/))||Pe[1]>=74)&&(Pe=Ge.match(/Chrome\/(\d+)/))&&(Ce=Pe[1]);var Ue,ze=Ce&&+Ce,Fe=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ze&&ze<41})),Ke=Fe&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,We=U("wks"),Ze=i.Symbol,Ve=Ke?Ze:Ze&&Ze.withoutSetter||K,Qe=a?Object.defineProperties:function(e,t){D(e);for(var n,r=xe(t),o=r.length,i=0;o>i;)N.f(e,n=r[i++],t[n]);return e},qe=ue("document","documentElement"),$e=Z("IE_PROTO"),Je=function(){},Xe=function(e){return"<script>"+e+"<\/script>"},et=function(){try{Ue=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;et=Ue?function(e){e.write(Xe("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Ue):((t=S("iframe")).style.display="none",qe.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Xe("document.F=Object")),e.close(),e.F);for(var n=me.length;n--;)delete et.prototype[me[n]];return et()};V[$e]=!0;var tt,nt=Object.create||function(e,t){var n;return null!==e?(Je.prototype=D(e),n=new Je,Je.prototype=null,n[$e]=e):n=et(),void 0===t?n:Qe(n,t)},rt=(T(We,tt="unscopables")&&(Fe||"string"==typeof We[tt])||(Fe&&T(Ze,tt)?We[tt]=Ze[tt]:We[tt]=Ve("Symbol."+tt)),We[tt]),ot=Array.prototype;null==ot[rt]&&N.f(ot,rt,{configurable:!0,value:nt(null)});var it,ut=ye.includes;je({target:"Array",proto:!0},{includes:function(e){return ut(this,e,arguments.length>1?arguments[1]:void 0)}}),it="includes",ot[rt][it]=!0;var ct,at,lt,ft=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},st=Function.call;ct="includes",ft(st,i.Array.prototype[ct],at),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell"}(lt||(lt={}));var dt,pt=lt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(dt||(dt={}));var yt,Et=dt,ht=[pt.PARAGRAPH,pt.HEADING_1,pt.HEADING_2,pt.HEADING_3,pt.HEADING_4,pt.HEADING_5,pt.HEADING_6,pt.OL_LIST,pt.UL_LIST,pt.HR,pt.QUOTE,pt.EMBEDDED_ENTRY,pt.EMBEDDED_ASSET,pt.TABLE],mt=[pt.HR,pt.EMBEDDED_ENTRY,pt.EMBEDDED_ASSET],vt=((yt={})[pt.OL_LIST]=[pt.LIST_ITEM],yt[pt.UL_LIST]=[pt.LIST_ITEM],yt[pt.LIST_ITEM]=ht.slice(),yt[pt.QUOTE]=[pt.PARAGRAPH],yt[pt.TABLE]=[pt.TABLE_ROW],yt[pt.TABLE_ROW]=[pt.TABLE_CELL],yt[pt.TABLE_CELL]=[pt.PARAGRAPH],yt),gt={nodeType:pt.DOCUMENT,data:{},content:[{nodeType:pt.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},bt=Object.freeze({isInline:function(e){return Object.values(Et).includes(e.nodeType)},isBlock:function(e){return Object.values(pt).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=pt,t.CONTAINERS=vt,t.EMPTY_DOCUMENT=gt,t.INLINES=Et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=ht,t.VOID_BLOCKS=mt,t.helpers=bt}(a={exports:{}},a.exports),a.exports);(l=f)&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")&&l.default;var s,d,p=f.BLOCKS,y=(f.CONTAINERS,f.EMPTY_DOCUMENT,f.INLINES),E=f.MARKS,h=(f.TOP_LEVEL_BLOCKS,f.VOID_BLOCKS,f.helpers);function m(e,t){return e.map((function(e,n){return r=v(e,t),i=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:i}):r;var r,i}))}function v(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(h.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var u=m(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,u):i.createElement(i.Fragment,null,u)}var g=((s={})[p.DOCUMENT]=function(e,t){return t},s[p.PARAGRAPH]=function(e,t){return i.createElement("p",null,t)},s[p.HEADING_1]=function(e,t){return i.createElement("h1",null,t)},s[p.HEADING_2]=function(e,t){return i.createElement("h2",null,t)},s[p.HEADING_3]=function(e,t){return i.createElement("h3",null,t)},s[p.HEADING_4]=function(e,t){return i.createElement("h4",null,t)},s[p.HEADING_5]=function(e,t){return i.createElement("h5",null,t)},s[p.HEADING_6]=function(e,t){return i.createElement("h6",null,t)},s[p.EMBEDDED_ENTRY]=function(e,t){return i.createElement("div",null,t)},s[p.UL_LIST]=function(e,t){return i.createElement("ul",null,t)},s[p.OL_LIST]=function(e,t){return i.createElement("ol",null,t)},s[p.LIST_ITEM]=function(e,t){return i.createElement("li",null,t)},s[p.QUOTE]=function(e,t){return i.createElement("blockquote",null,t)},s[p.HR]=function(){return i.createElement("hr",null)},s[y.ASSET_HYPERLINK]=function(e){return T(y.ASSET_HYPERLINK,e)},s[y.ENTRY_HYPERLINK]=function(e){return T(y.ENTRY_HYPERLINK,e)},s[y.EMBEDDED_ENTRY]=function(e){return T(y.EMBEDDED_ENTRY,e)},s[y.HYPERLINK]=function(e,t){return i.createElement("a",{href:e.data.uri},t)},s),b=((d={})[E.BOLD]=function(e){return i.createElement("b",null,e)},d[E.ITALIC]=function(e){return i.createElement("i",null,e)},d[E.UNDERLINE]=function(e){return i.createElement("u",null,e)},d[E.CODE]=function(e){return i.createElement("code",null,e)},d);function T(e,t){return i.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?v(e,{renderNode:u({},g,t.renderNode),renderMark:u({},b,t.renderMark),renderText:t.renderText}):null}},1394:function(e,t,n){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var i=function(e){return e&&e.Math==Math&&e},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof r&&r)||Function("return this")(),c=function(e){try{return!!e()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!l.call({1:2},1)?function(e){var t=f(this,e);return!!t&&t.enumerable}:l},d=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},p={}.toString,y="".split,E=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return p.call(e).slice(8,-1)}(e)?y.call(e,""):Object(e)}:Object,h=function(e){return E(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},m=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!m(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!m(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!m(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!m(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},g={}.hasOwnProperty,b=function(e,t){return g.call(e,t)},T=u.document,O=m(T)&&m(T.createElement),_=function(e){return O?T.createElement(e):{}},S=!a&&!c((function(){return 7!=Object.defineProperty(_("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,A={f:a?I:function(e,t){if(e=h(e),t=v(t,!0),S)try{return I(e,t)}catch(n){}if(b(e,t))return d(!s.f.call(e,t),e[t])}},w=function(e){if(!m(e))throw TypeError(String(e)+" is not an object");return e},D=Object.defineProperty,L={f:a?D:function(e,t,n){if(w(e),t=v(t,!0),w(n),S)try{return D(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},N=a?function(e,t,n){return L.f(e,t,d(1,n))}:function(e,t,n){return e[t]=n,e},j=function(e,t){try{N(u,e,t)}catch(n){u[e]=t}return t},x="__core-js_shared__",k=u[x]||j(x,{}),R=Function.toString;"function"!=typeof k.inspectSource&&(k.inspectSource=function(e){return R.call(e)});var M,P,C,G=k.inspectSource,H=u.WeakMap,B="function"==typeof H&&/native code/.test(G(H)),Y=o((function(e){(e.exports=function(e,t){return k[e]||(k[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),U=0,z=Math.random(),F=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++U+z).toString(36)},K=Y("keys"),W=function(e){return K[e]||(K[e]=F(e))},Z={},V=u.WeakMap;if(B){var Q=new V,q=Q.get,$=Q.has,J=Q.set;M=function(e,t){return J.call(Q,e,t),t},P=function(e){return q.call(Q,e)||{}},C=function(e){return $.call(Q,e)}}else{var X=W("state");Z[X]=!0,M=function(e,t){return N(e,X,t),t},P=function(e){return b(e,X)?e[X]:{}},C=function(e){return b(e,X)}}var ee={set:M,get:P,has:C,enforce:function(e){return C(e)?P(e):M(e,{})},getterFor:function(e){return function(t){var n;if(!m(t)||(n=P(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},te=o((function(e){var t=ee.get,n=ee.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var c=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||b(o,"name")||N(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==u?(c?!l&&e[t]&&(a=!0):delete e[t],a?e[t]=o:N(e,t,o)):a?e[t]=o:j(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||G(this)}))})),ne=u,re=function(e){return"function"==typeof e?e:void 0},oe=function(e,t){return arguments.length<2?re(ne[e])||re(u[e]):ne[e]&&ne[e][t]||u[e]&&u[e][t]},ie=Math.ceil,ue=Math.floor,ce=function(e){return isNaN(e=+e)?0:(e>0?ue:ie)(e)},ae=Math.min,le=Math.max,fe=Math.min,se=function(e){return function(t,n,r){var o,i,u=h(t),c=(o=u.length)>0?ae(ce(o),9007199254740991):0,a=function(e,t){var n=ce(e);return n<0?le(n+t,0):fe(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((i=u[a++])!=i)return!0}else for(;c>a;a++)if((e||a in u)&&u[a]===n)return e||a||0;return!e&&-1}},de={includes:se(!0),indexOf:se(!1)},pe=de.indexOf,ye=function(e,t){var n,r=h(e),o=0,i=[];for(n in r)!b(Z,n)&&b(r,n)&&i.push(n);for(;t.length>o;)b(r,n=t[o++])&&(~pe(i,n)||i.push(n));return i},Ee=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],he=Ee.concat("length","prototype"),me={f:Object.getOwnPropertyNames||function(e){return ye(e,he)}},ve={f:Object.getOwnPropertySymbols},ge=oe("Reflect","ownKeys")||function(e){var t=me.f(w(e)),n=ve.f;return n?t.concat(n(e)):t},be=function(e,t){for(var n=ge(t),r=L.f,o=A.f,i=0;i<n.length;i++){var u=n[i];b(e,u)||r(e,u,o(t,u))}},Te=/#|\.prototype\./,Oe=function(e,t){var n=Se[_e(e)];return n==Ae||n!=Ie&&("function"==typeof t?c(t):!!t)},_e=Oe.normalize=function(e){return String(e).replace(Te,".").toLowerCase()},Se=Oe.data={},Ie=Oe.NATIVE="N",Ae=Oe.POLYFILL="P",we=Oe,De=A.f,Le=function(e,t){var n,r,o,i,c,a=e.target,l=e.global,f=e.stat;if(n=l?u:f?u[a]||j(a,{}):(u[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=De(n,r))&&c.value:n[r],!we(l?r:a+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;be(i,o)}(e.sham||o&&o.sham)&&N(i,"sham",!0),te(n,r,i,e)}},Ne=Object.keys||function(e){return ye(e,Ee)},je=s.f,xe=function(e){return function(t){for(var n,r=h(t),o=Ne(r),i=o.length,u=0,c=[];i>u;)n=o[u++],a&&!je.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},ke={entries:xe(!0),values:xe(!1)}.values;Le({target:"Object",stat:!0},{values:function(e){return ke(e)}});ne.Object.values;var Re,Me=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),Pe=Me&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ce=Y("wks"),Ge=u.Symbol,He=Pe?Ge:Ge&&Ge.withoutSetter||F,Be=a?Object.defineProperties:function(e,t){w(e);for(var n,r=Ne(t),o=r.length,i=0;o>i;)L.f(e,n=r[i++],t[n]);return e},Ye=oe("document","documentElement"),Ue=W("IE_PROTO"),ze=function(){},Fe=function(e){return"<script>"+e+"</"+"script>"},Ke=function(){try{Re=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;Ke=Re?function(e){e.write(Fe("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Re):((t=_("iframe")).style.display="none",Ye.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Fe("document.F=Object")),e.close(),e.F);for(var n=Ee.length;n--;)delete Ke.prototype[Ee[n]];return Ke()};Z[Ue]=!0;var We,Ze=Object.create||function(e,t){var n;return null!==e?(ze.prototype=w(e),n=new ze,ze.prototype=null,n[Ue]=e):n=Ke(),void 0===t?n:Be(n,t)},Ve=(b(Ce,We="unscopables")||(Me&&b(Ge,We)?Ce[We]=Ge[We]:Ce[We]=He("Symbol."+We)),Ce[We]),Qe=Array.prototype;null==Qe[Ve]&&L.f(Qe,Ve,{configurable:!0,value:Ze(null)});var qe,$e=Object.defineProperty,Je={},Xe=function(e){throw e},et=de.includes;Le({target:"Array",proto:!0,forced:!function(e,t){if(b(Je,e))return Je[e];t||(t={});var n=[][e],r=!!b(t,"ACCESSORS")&&t.ACCESSORS,o=b(t,0)?t[0]:Xe,i=b(t,1)?t[1]:void 0;return Je[e]=!!n&&!c((function(){if(r&&!a)return!0;var e={length:-1};r?$e(e,1,{enumerable:!0,get:Xe}):e[1]=1,n.call(e,o,i)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return et(this,e,arguments.length>1?arguments[1]:void 0)}}),qe="includes",Qe[Ve][qe]=!0;var tt,nt,rt,ot=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},it=Function.call;tt="includes",ot(it,u["Array"].prototype[tt],nt);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(rt||(rt={}));var ut,ct=rt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(ut||(ut={}));var at,lt=ut,ft=[ct.PARAGRAPH,ct.HEADING_1,ct.HEADING_2,ct.HEADING_3,ct.HEADING_4,ct.HEADING_5,ct.HEADING_6,ct.OL_LIST,ct.UL_LIST,ct.HR,ct.QUOTE,ct.EMBEDDED_ENTRY,ct.EMBEDDED_ASSET],st=[ct.HR,ct.EMBEDDED_ENTRY,ct.EMBEDDED_ASSET],dt=((at={})[ct.OL_LIST]=[ct.LIST_ITEM],at[ct.UL_LIST]=[ct.LIST_ITEM],at[ct.LIST_ITEM]=ft.slice(),at[ct.QUOTE]=[ct.PARAGRAPH],at),pt={nodeType:ct.DOCUMENT,data:{},content:[{nodeType:ct.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var yt=Object.freeze({isInline:function(e){return Object.values(lt).includes(e.nodeType)},isBlock:function(e){return Object.values(ct).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.RG=ct,t.oN={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"}},5504:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(7294),o=n(5444),i=n(7690),u=n(7361),c=n(2200),a=n(7814),l=function(e){var t=e.children,n=(0,o.useStaticQuery)("2199005656").site.siteMetadata.author;return r.createElement(i.xu,{borderTopLeftRadius:"2em",borderTopRightRadius:"2em",as:"footer",py:"1em",mt:"auto",boxShadow:"xl",width:"100%",zIndex:"55"},r.createElement(a.Z,null),r.createElement(u.k,{direction:["column","row"],w:"100%",alignItems:"center",justifyContent:"center"},t,r.createElement(c.x,{mr:["0","20px"]},"Crafted By ",n," © 2021"),r.createElement(c.x,{mr:["0","20px"]},"That's it. Seeya later friend ¯\\_(ツ)_/¯"),r.createElement(o.Link,{to:"/thanks"},"Thanks!!!")))},f=n(4982),s=(0,f.I)({displayName:"SunIcon",path:r.createElement("g",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2",fill:"none",stroke:"currentColor"},r.createElement("circle",{cx:"12",cy:"12",r:"5"}),r.createElement("path",{d:"M12 1v2"}),r.createElement("path",{d:"M12 21v2"}),r.createElement("path",{d:"M4.22 4.22l1.42 1.42"}),r.createElement("path",{d:"M18.36 18.36l1.42 1.42"}),r.createElement("path",{d:"M1 12h2"}),r.createElement("path",{d:"M21 12h2"}),r.createElement("path",{d:"M4.22 19.78l1.42-1.42"}),r.createElement("path",{d:"M18.36 5.64l1.42-1.42"}))}),d=(0,f.I)({d:"M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",displayName:"MoonIcon"}),p=n(5230),y=n(2332);function E(){var e=(0,p.useColorMode)().toggleColorMode,t=(0,p.useColorModeValue)(s,d);return r.createElement(y.h,{icon:r.createElement(t,null),variant:"ghost","aria-label":"Toggle Theme",onClick:e})}var h=n(1799),m=function(e){return console.log(e),["home","projects","about"].map((function(e){var t=""+e.charAt(0).toUpperCase()+e.slice(1);return r.createElement(o.Link,{key:e,to:"/"+("home"===e?"":e)},r.createElement(h.z,{as:"span",variant:"ghost"},r.createElement(c.x,{fontWeight:"bold",fontSize:"lg"},t)))}))},v=function(e){var t=e.activePage;(0,o.useStaticQuery)("2199005656").site.siteMetadata.title;return r.createElement(i.xu,{borderBottomLeftRadius:"2em",borderBottomRightRadius:"2em",as:"header",px:4,boxShadow:"lg",width:"100%"},r.createElement(u.k,{as:"nav",direction:["column","row"],h:16,alignItems:"center",justifyContent:"space-between",w:["90%","85%","80%"],maxW:800,mx:"auto"},r.createElement(u.k,{role:"navigation"},m(t)),r.createElement(E,null)))},g=n(4055),b=n(9259),T=n(6397),O=n(4667),_=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"];function S(e){return!!(0,O.Kn)(e)&&_.every((function(t){return Object.prototype.hasOwnProperty.call(e,t)}))}var I=n(4238),A=n(3971),w=n.n(A);function D(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return w().apply(void 0,[{}].concat(t,[L]))}function L(e,t,n,r){if(((0,O.mf)(e)||(0,O.mf)(t))&&Object.prototype.hasOwnProperty.call(r,n))return function(){var n=(0,O.mf)(e)?e.apply(void 0,arguments):e,r=(0,O.mf)(t)?t.apply(void 0,arguments):t;return w()({},n,r,L)}}var N=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=[].concat(t),o=t[t.length-1];return S(o)&&r.length>1?r=r.slice(0,r.length-1):o=T.Z,I.zG.apply(void 0,(0,b.Z)(r.map((function(e){return function(t){return(0,O.mf)(e)?e(t):D(t,e)}}))))(o)}({fonts:{body:"Poppins"}}),j=function(e){var t=e.pageTitle,n=e.children;return r.createElement(g.x,{h:"100%",theme:N,resetCSS:!0},r.createElement(i.xu,{h:"100%",bgImage:"url(../images/wave.svg)",bgGradient:function(){return(0,p.useColorModeValue)("linear-gradient(315deg, #E0EAFC 0%, #CFDEF3 74%)","linear(to-b, #141E30 0%, #243B55 74%)")}},r.createElement(u.k,{as:"div",direction:"column",textAlign:"center",fontSize:"xl",w:["90%","85%","80%"],maxW:850,mx:"auto",h:"100%"},r.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/wenk/dist/wenk.css"}),r.createElement(v,{activePage:t}),r.createElement(i.xu,{h:"100%",className:"layout-module--animationChange--3bQLY",flexGrow:"2",mt:"auto",as:"main"},n),r.createElement(l,null))))}},8304:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(7294),o=n(1496),i=n(5504),u=n(3751),c=n(1394),a=n(9806),l=n(2200),f=n(9537),s=n(7690),d=n(1799),p=n(9446),y=n(5444),E=function(){return r.createElement(r.Fragment,null,r.createElement(y.Link,{to:"/projects"},r.createElement(d.z,{variant:"outline",leftIcon:r.createElement(p.Y4O,null),as:"span"},"Go Back")))},h=function(e){var t,n,d=e.data.contentfulProject,p=d.title,y=d.description,h=d.body,m=[],v={renderMark:(t={},t[c.oN.BOLD]=function(e){return r.createElement(l.x,{as:"strong",fontWeight:"bold",my:2},e)},t),renderNode:(n={},n[c.RG.PARAGRAPH]=function(e,t){return r.createElement(l.x,{as:"p",fontSize:"md",my:4},t)},n[c.RG.HEADING_1]=function(e,t){return r.createElement(l.x,{as:"h1",textAlign:"center",my:"2em",fontWeight:"extrabold",color:"teal.500"},t)},n[c.RG.HEADING_2]=function(e,t){return r.createElement(l.x,{as:"h2",textAlign:"center",my:"2em",fontWeight:"extrabold",color:"teal.500"},t)},n[c.RG.HEADING_3]=function(e,t){return r.createElement(l.x,{as:"h3",textAlign:"left",my:"1em",fontWeight:"extrabold",color:"teal.500"},t)},n[c.RG.UL_LIST]=function(e,t){return r.createElement(f.QI,null,t)},n[c.RG.LIST_ITEM]=function(e,t){return r.createElement(f.HC,null,t)},n["embedded-asset-block"]=function(){if(!(m.length>0))return m=h.references.map((function(e){if(!m.includes(e)){var t=e.fluid,n=e.description;return r.createElement(o.Z,{style:{maxWidth:"450px",width:"100%",margin:"2em auto",height:"100%",borderRadius:"25px"},loading:"eager",fluid:t,alt:n,key:n.src})}}))},n)};return r.createElement(i.Z,{pageTitle:p},r.createElement(u.Z,{title:p,description:y}),r.createElement(s.xu,{mt:"auto",textAlign:"left"},(0,a.h)(JSON.parse(h.raw),v)),r.createElement(E,null))}}}]);
//# sourceMappingURL=component---src-templates-project-js-ce92edb0a508967fe856.js.map