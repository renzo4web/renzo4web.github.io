(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[769],{9806:function(e,t,r){"use strict";var n,i=r(7294),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n,o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};var l,c,s=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==u?u:"undefined"!=typeof self?self:{};function n(e,t){return e(t={exports:{}},t.exports),t.exports}var i=function(e){return e&&e.Math==Math&&e},a=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof r&&r)||function(){return this}()||Function("return this")(),o=function(e){try{return!!e()}catch(t){return!0}},l=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,d={f:s&&!c.call({1:2},1)?function(e){var t=s(this,e);return!!t&&t.enumerable}:c},f=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},p={}.toString,h="".split,g=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return p.call(e).slice(8,-1)}(e)?h.call(e,""):Object(e)}:Object,m=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},E=function(e){return g(m(e))},y=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e,t){if(!y(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!y(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!y(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!y(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},v={}.hasOwnProperty,S=Object.hasOwn||function(e,t){return v.call(Object(m(e)),t)},T=a.document,O=y(T)&&y(T.createElement),L=function(e){return O?T.createElement(e):{}},I=!l&&!o((function(){return 7!=Object.defineProperty(L("div"),"a",{get:function(){return 7}}).a})),w=Object.getOwnPropertyDescriptor,_={f:l?w:function(e,t){if(e=E(e),t=b(t,!0),I)try{return w(e,t)}catch(r){}if(S(e,t))return f(!d.f.call(e,t),e[t])}},R=function(e){if(!y(e))throw TypeError(String(e)+" is not an object");return e},N=Object.defineProperty,A={f:l?N:function(e,t,r){if(R(e),t=b(t,!0),R(r),I)try{return N(e,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},D=l?function(e,t,r){return A.f(e,t,f(1,r))}:function(e,t,r){return e[t]=r,e},P=function(e,t){try{D(a,e,t)}catch(r){a[e]=t}return t},H="__core-js_shared__",j=a[H]||P(H,{}),M=Function.toString;"function"!=typeof j.inspectSource&&(j.inspectSource=function(e){return M.call(e)});var C,k,x,G=j.inspectSource,B=a.WeakMap,V="function"==typeof B&&/native code/.test(G(B)),z=n((function(e){(e.exports=function(e,t){return j[e]||(j[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.14.0",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),Y=0,W=Math.random(),U=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++Y+W).toString(36)},K=z("keys"),F=function(e){return K[e]||(K[e]=U(e))},q={},Q="Object already initialized",J=a.WeakMap;if(V||j.state){var Z=j.state||(j.state=new J),X=Z.get,$=Z.has,ee=Z.set;C=function(e,t){if($.call(Z,e))throw new TypeError(Q);return t.facade=e,ee.call(Z,e,t),t},k=function(e){return X.call(Z,e)||{}},x=function(e){return $.call(Z,e)}}else{var te=F("state");q[te]=!0,C=function(e,t){if(S(e,te))throw new TypeError(Q);return t.facade=e,D(e,te,t),t},k=function(e){return S(e,te)?e[te]:{}},x=function(e){return S(e,te)}}var re={set:C,get:k,has:x,enforce:function(e){return x(e)?k(e):C(e,{})},getterFor:function(e){return function(t){var r;if(!y(t)||(r=k(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}},ne=n((function(e){var t=re.get,r=re.enforce,n=String(String).split("String");(e.exports=function(e,t,i,o){var u,l=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof i&&("string"!=typeof t||S(i,"name")||D(i,"name",t),(u=r(i)).source||(u.source=n.join("string"==typeof t?t:""))),e!==a?(l?!s&&e[t]&&(c=!0):delete e[t],c?e[t]=i:D(e,t,i)):c?e[t]=i:P(t,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||G(this)}))})),ie=a,ae=function(e){return"function"==typeof e?e:void 0},oe=function(e,t){return arguments.length<2?ae(ie[e])||ae(a[e]):ie[e]&&ie[e][t]||a[e]&&a[e][t]},ue=Math.ceil,le=Math.floor,ce=function(e){return isNaN(e=+e)?0:(e>0?le:ue)(e)},se=Math.min,de=Math.max,fe=Math.min,pe=function(e){return function(t,r,n){var i,a,o=E(t),u=(i=o.length)>0?se(ce(i),9007199254740991):0,l=function(e,t){var r=ce(e);return r<0?de(r+t,0):fe(r,t)}(n,u);if(e&&r!=r){for(;u>l;)if((a=o[l++])!=a)return!0}else for(;u>l;l++)if((e||l in o)&&o[l]===r)return e||l||0;return!e&&-1}},he={includes:pe(!0),indexOf:pe(!1)},ge=he.indexOf,me=function(e,t){var r,n=E(e),i=0,a=[];for(r in n)!S(q,r)&&S(n,r)&&a.push(r);for(;t.length>i;)S(n,r=t[i++])&&(~ge(a,r)||a.push(r));return a},Ee=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ye=Ee.concat("length","prototype"),be={f:Object.getOwnPropertyNames||function(e){return me(e,ye)}},ve={f:Object.getOwnPropertySymbols},Se=oe("Reflect","ownKeys")||function(e){var t=be.f(R(e)),r=ve.f;return r?t.concat(r(e)):t},Te=function(e,t){for(var r=Se(t),n=A.f,i=_.f,a=0;a<r.length;a++){var o=r[a];S(e,o)||n(e,o,i(t,o))}},Oe=/#|\.prototype\./,Le=function(e,t){var r=we[Ie(e)];return r==Re||r!=_e&&("function"==typeof t?o(t):!!t)},Ie=Le.normalize=function(e){return String(e).replace(Oe,".").toLowerCase()},we=Le.data={},_e=Le.NATIVE="N",Re=Le.POLYFILL="P",Ne=Le,Ae=_.f,De=function(e,t){var r,n,i,o,u,l=e.target,c=e.global,s=e.stat;if(r=c?a:s?a[l]||P(l,{}):(a[l]||{}).prototype)for(n in t){if(o=t[n],i=e.noTargetGet?(u=Ae(r,n))&&u.value:r[n],!Ne(c?n:l+(s?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;Te(o,i)}(e.sham||i&&i.sham)&&D(o,"sham",!0),ne(r,n,o,e)}},Pe=Object.keys||function(e){return me(e,Ee)},He=d.f,je=function(e){return function(t){for(var r,n=E(t),i=Pe(n),a=i.length,o=0,u=[];a>o;)r=i[o++],l&&!He.call(n,r)||u.push(e?[r,n[r]]:n[r]);return u}},Me=(je(!0),je(!1));De({target:"Object",stat:!0},{values:function(e){return Me(e)}}),ie.Object.values;var Ce,ke,xe=oe("navigator","userAgent")||"",Ge=a.process,Be=Ge&&Ge.versions,Ve=Be&&Be.v8;Ve?ke=(Ce=Ve.split("."))[0]<4?1:Ce[0]+Ce[1]:xe&&(!(Ce=xe.match(/Edge\/(\d+)/))||Ce[1]>=74)&&(Ce=xe.match(/Chrome\/(\d+)/))&&(ke=Ce[1]);var ze,Ye=ke&&+ke,We=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Ye&&Ye<41})),Ue=We&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ke=z("wks"),Fe=a.Symbol,qe=Ue?Fe:Fe&&Fe.withoutSetter||U,Qe=l?Object.defineProperties:function(e,t){R(e);for(var r,n=Pe(t),i=n.length,a=0;i>a;)A.f(e,r=n[a++],t[r]);return e},Je=oe("document","documentElement"),Ze=F("IE_PROTO"),Xe=function(){},$e=function(e){return"<script>"+e+"<\/script>"},et=function(){try{ze=document.domain&&new ActiveXObject("htmlfile")}catch(n){}var e,t;et=ze?function(e){e.write($e("")),e.close();var t=e.parentWindow.Object;return e=null,t}(ze):((t=L("iframe")).style.display="none",Je.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write($e("document.F=Object")),e.close(),e.F);for(var r=Ee.length;r--;)delete et.prototype[Ee[r]];return et()};q[Ze]=!0;var tt,rt=Object.create||function(e,t){var r;return null!==e?(Xe.prototype=R(e),r=new Xe,Xe.prototype=null,r[Ze]=e):r=et(),void 0===t?r:Qe(r,t)},nt=(S(Ke,tt="unscopables")&&(We||"string"==typeof Ke[tt])||(We&&S(Fe,tt)?Ke[tt]=Fe[tt]:Ke[tt]=qe("Symbol."+tt)),Ke[tt]),it=Array.prototype;null==it[nt]&&A.f(it,nt,{configurable:!0,value:rt(null)});var at,ot=he.includes;De({target:"Array",proto:!0},{includes:function(e){return ot(this,e,arguments.length>1?arguments[1]:void 0)}}),at="includes",it[nt][at]=!0;var ut,lt,ct,st=function(e,t,r){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}},dt=Function.call;ut="includes",st(dt,a.Array.prototype[ut],lt),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell"}(ct||(ct={}));var ft,pt=ct;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(ft||(ft={}));var ht,gt=ft,mt=[pt.PARAGRAPH,pt.HEADING_1,pt.HEADING_2,pt.HEADING_3,pt.HEADING_4,pt.HEADING_5,pt.HEADING_6,pt.OL_LIST,pt.UL_LIST,pt.HR,pt.QUOTE,pt.EMBEDDED_ENTRY,pt.EMBEDDED_ASSET,pt.TABLE],Et=[pt.HR,pt.EMBEDDED_ENTRY,pt.EMBEDDED_ASSET],yt=((ht={})[pt.OL_LIST]=[pt.LIST_ITEM],ht[pt.UL_LIST]=[pt.LIST_ITEM],ht[pt.LIST_ITEM]=mt.slice(),ht[pt.QUOTE]=[pt.PARAGRAPH],ht[pt.TABLE]=[pt.TABLE_ROW],ht[pt.TABLE_ROW]=[pt.TABLE_CELL],ht[pt.TABLE_CELL]=[pt.PARAGRAPH],ht),bt={nodeType:pt.DOCUMENT,data:{},content:[{nodeType:pt.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},vt=Object.freeze({isInline:function(e){return Object.values(gt).includes(e.nodeType)},isBlock:function(e){return Object.values(pt).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=pt,t.CONTAINERS=yt,t.EMPTY_DOCUMENT=bt,t.INLINES=gt,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=mt,t.VOID_BLOCKS=Et,t.helpers=vt}(l={exports:{}},l.exports),l.exports);(c=s)&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")&&c.default;var d,f,p=s.BLOCKS,h=(s.CONTAINERS,s.EMPTY_DOCUMENT,s.INLINES),g=s.MARKS,m=(s.TOP_LEVEL_BLOCKS,s.VOID_BLOCKS,s.helpers);function E(e,t){return e.map((function(e,r){return n=y(e,t),a=r,i.isValidElement(n)&&null===n.key?i.cloneElement(n,{key:a}):n;var n,a}))}function y(e,t){var r=t.renderNode,n=t.renderMark,i=t.renderText;if(m.isText(e))return e.marks.reduce((function(e,t){return n[t.type]?n[t.type](e):e}),i?i(e.value):e.value);var o=E(e.content,t);return e.nodeType&&r[e.nodeType]?r[e.nodeType](e,o):a.createElement(a.Fragment,null,o)}var b=((d={})[p.DOCUMENT]=function(e,t){return t},d[p.PARAGRAPH]=function(e,t){return a.createElement("p",null,t)},d[p.HEADING_1]=function(e,t){return a.createElement("h1",null,t)},d[p.HEADING_2]=function(e,t){return a.createElement("h2",null,t)},d[p.HEADING_3]=function(e,t){return a.createElement("h3",null,t)},d[p.HEADING_4]=function(e,t){return a.createElement("h4",null,t)},d[p.HEADING_5]=function(e,t){return a.createElement("h5",null,t)},d[p.HEADING_6]=function(e,t){return a.createElement("h6",null,t)},d[p.EMBEDDED_ENTRY]=function(e,t){return a.createElement("div",null,t)},d[p.UL_LIST]=function(e,t){return a.createElement("ul",null,t)},d[p.OL_LIST]=function(e,t){return a.createElement("ol",null,t)},d[p.LIST_ITEM]=function(e,t){return a.createElement("li",null,t)},d[p.QUOTE]=function(e,t){return a.createElement("blockquote",null,t)},d[p.HR]=function(){return a.createElement("hr",null)},d[h.ASSET_HYPERLINK]=function(e){return S(h.ASSET_HYPERLINK,e)},d[h.ENTRY_HYPERLINK]=function(e){return S(h.ENTRY_HYPERLINK,e)},d[h.EMBEDDED_ENTRY]=function(e){return S(h.EMBEDDED_ENTRY,e)},d[h.HYPERLINK]=function(e,t){return a.createElement("a",{href:e.data.uri},t)},d),v=((f={})[g.BOLD]=function(e){return a.createElement("b",null,e)},f[g.ITALIC]=function(e){return a.createElement("i",null,e)},f[g.UNDERLINE]=function(e){return a.createElement("u",null,e)},f[g.CODE]=function(e){return a.createElement("code",null,e)},f);function S(e,t){return a.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?y(e,{renderNode:o({},b,t.renderNode),renderMark:o({},v,t.renderMark),renderText:t.renderText}):null}},1496:function(e,t,r){"use strict";var n=r(5318);var i,a=n(r(1506)),o=n(r(5354)),u=n(r(7316)),l=n(r(7154)),c=n(r(7294)),s=n(r(5697)),d=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,r=e.fixed,n=g(t||r||[]);return n&&n.src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),E=function(e){var t=f(e),r=h(t);return m[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,S=new WeakMap;function T(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),r&&c.default.createElement("source",{media:i,srcSet:r,sizes:a}))}))}function O(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function L(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function I(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function w(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var _=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",s=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+o+u+r+n+t+a+i+l+s+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,u=c.default.createElement(A,(0,l.default)({ref:t,src:r},a,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,i(n),u):u})),A=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,s=e.onError,f=e.loading,p=e.draggable,h=e.ariaHidden,g=(0,u.default)(e,d);return c.default.createElement("img",(0,l.default)({"aria-hidden":h,sizes:r,srcSet:n,src:i},g,{onLoad:o,onError:s,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));A.propTypes={style:s.default.object,onError:s.default.func,onLoad:s.default.func};var D=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&E(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:E(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=_(e,(function(){var e=E(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),(r=h(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,u=void 0===o?{}:o,s=e.placeholderStyle,d=void 0===s?{}:s,p=e.placeholderClassName,h=e.fluid,m=e.fixed,E=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,v=e.itemProp,S=e.loading,O=e.draggable,w=h||m;if(!w)return null;var _=!1===this.state.fadeIn||this.state.imgLoaded,D=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,l.default)({opacity:_?1:0,transition:D?"opacity "+y+"ms":"none"},u),H="boolean"==typeof E?"lightgray":E,j={transitionDelay:y+"ms"},M=(0,l.default)({opacity:this.state.imgLoaded?0:1},D&&j,u,d),C={title:t,alt:this.state.isVisible?"":r,style:M,className:p,itemProp:v},k=this.state.isHydrated?g(w):w[0];if(h)return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:k.maxWidth?k.maxWidth+"px":null,maxHeight:k.maxHeight?k.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),H&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},D&&j)}),k.base64&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:C,imageVariants:w,generateSources:I}),k.tracedSVG&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:C,imageVariants:w,generateSources:L}),this.state.isVisible&&c.default.createElement("picture",null,T(w),c.default.createElement(A,{alt:r,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:r,title:t,loading:S},k,{imageVariants:w}))}}));if(m){var x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},a);return"inherit"===a.display&&delete x.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},H&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:H,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},D&&j)}),k.base64&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:C,imageVariants:w,generateSources:I}),k.tracedSVG&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:C,imageVariants:w,generateSources:L}),this.state.isVisible&&c.default.createElement("picture",null,T(w),c.default.createElement(A,{alt:r,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:r,title:t,loading:S},k,{imageVariants:w}))}}))}return null},t}(c.default.Component);D.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=s.default.shape({width:s.default.number.isRequired,height:s.default.number.isRequired,src:s.default.string.isRequired,srcSet:s.default.string.isRequired,base64:s.default.string,tracedSVG:s.default.string,srcWebp:s.default.string,srcSetWebp:s.default.string,media:s.default.string}),H=s.default.shape({aspectRatio:s.default.number.isRequired,src:s.default.string.isRequired,srcSet:s.default.string.isRequired,sizes:s.default.string.isRequired,base64:s.default.string,tracedSVG:s.default.string,srcWebp:s.default.string,srcSetWebp:s.default.string,media:s.default.string,maxWidth:s.default.number,maxHeight:s.default.number});function j(e){return function(t,r,n){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");s.default.checkPropTypes(((i={})[r]=e,i),t,"prop",n)}}D.propTypes={resolutions:P,sizes:H,fixed:j(s.default.oneOfType([P,s.default.arrayOf(P)])),fluid:j(s.default.oneOfType([H,s.default.arrayOf(H)])),fadeIn:s.default.bool,durationFadeIn:s.default.number,title:s.default.string,alt:s.default.string,className:s.default.oneOfType([s.default.string,s.default.object]),critical:s.default.bool,crossOrigin:s.default.oneOfType([s.default.string,s.default.bool]),style:s.default.object,imgStyle:s.default.object,placeholderStyle:s.default.object,placeholderClassName:s.default.string,backgroundColor:s.default.oneOfType([s.default.string,s.default.bool]),onLoad:s.default.func,onError:s.default.func,onStartLoad:s.default.func,Tag:s.default.string,itemProp:s.default.string,loading:s.default.oneOf(["auto","lazy","eager"]),draggable:s.default.bool}},5227:function(e,t,r){"use strict";r.r(t);var n=r(7294),i=(r(1496),r(8804)),a=r(6179),o=r(9806);t.default=function(e){var t=e.data.contentfulProject,r=t.title,u=t.description,l=t.body,c={renderNode:{"embedded-asset-block":function(){var e=l.references[0].file.url,t=l.references[0].description;return n.createElement("img",{src:e,alt:t})}}};return n.createElement(i.Z,{pageTitle:r},n.createElement(a.Z,{title:r,description:u}),(0,o.h)(JSON.parse(l.raw),c))}}}]);
//# sourceMappingURL=component---src-templates-project-js-30b9d2f66caea5e855b0.js.map