!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.reactTextMask=t(require("react")):e.reactTextMask=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(10),f=n(s),c=r(9),d=n(c),p=r(5),h=n(p),v=r(2),y=n(v),m=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0,h.default)(u({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(){this.initTextMask()}},{key:"render",value:function(){var e=this,t=u({},this.props);return delete t.mask,delete t.guide,delete t.pipe,delete t.placeholderChar,delete t.keepCharPositions,delete t.value,delete t.onChange,delete t.showMask,f.default.createElement("input",u({},t,{onInput:function(t){return e.onChange(t)},defaultValue:this.props.value,ref:function(t){return e.inputElement=t}}))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}}]),t}(f.default.Component);t.default=m,m.propTypes={mask:d.default.oneOfType([d.default.array,d.default.func,d.default.bool,d.default.shape({mask:d.default.oneOfType([d.default.array,d.default.func]),pipe:d.default.func})]).isRequired,guide:d.default.bool,value:d.default.oneOfType([d.default.string,d.default.number]),pipe:d.default.func,placeholderChar:d.default.string,keepCharPositions:d.default.bool,showMask:d.default.bool},t.conformToMask=y.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_"},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.guide,u=void 0===n||n,l=r.previousConformedValue,s=void 0===l?a:l,f=r.placeholderChar,c=void 0===f?i.placeholderChar:f,d=r.placeholder,p=void 0===d?(0,o.convertMaskToPlaceholder)(t,c):d,h=r.currentCaretPosition,v=r.keepCharPositions,y=u===!1&&void 0!==s,m=e.length,g=s.length,b=p.length,C=t.length,k=m-g,O=k>0,P=h+(O?-k:0),x=P+Math.abs(k);if(v===!0&&!O){for(var T=a,w=P;w<x;w++)p[w]===c&&(T+=c);e=e.slice(0,P)+T+e.slice(P,m)}for(var M=e.split(a).map(function(e,t){return{char:e,isNew:t>=P&&t<x}}),j=m-1;j>=0;j--){var _=M[j].char;if(_!==c){var S=j>=P&&g===C;_===p[S?j-k:j]&&M.splice(j,1)}}var E=a,V=!1;e:for(var R=0;R<b;R++){var N=p[R];if(N===c){if(M.length>0)for(;M.length>0;){var I=M.shift(),q=I.char,A=I.isNew;if(q===c&&y!==!0){E+=c;continue e}if(t[R].test(q)){if(v===!0&&A!==!1&&s!==a&&u!==!1&&O){for(var F=M.length,J=null,D=0;D<F;D++){var L=M[D];if(L.char!==c&&L.isNew===!1)break;if(L.char===c){J=D;break}}null!==J?(E+=q,M.splice(J,1)):R--}else E+=q;continue e}V=!0}y===!1&&(E+=p.substr(R,b));break}E+=N}if(y&&O===!1){for(var U=null,W=0;W<E.length;W++)p[W]===c&&(U=W);E=null!==U?E.substr(0,U+1):a}return{conformedValue:E,meta:{someCharsRejected:V}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=r(3),i=r(1),a=""},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var t=[],r=void 0;r=e.indexOf(s),r!==-1;)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isString=o,t.isNumber=i,t.processCaretTraps=a;var u=r(1),l=[],s="[]"},function(e,t){"use strict";function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,c=e.placeholderChar,d=e.placeholder,p=e.indexesOfPipedChars,h=void 0===p?n:p,v=e.caretTrapIndexes,y=void 0===v?n:v;if(0===l)return 0;var m=f.length,g=r.length,b=d.length,C=s.length,k=m-g,O=k>0,P=0===g,x=k>1&&!O&&!P;if(x)return l;var T=O&&(r===s||s===d),w=0,M=void 0,j=void 0;if(T)w=l-k;else{var _=s.toLowerCase(),S=f.toLowerCase(),E=S.substr(0,l).split(o),V=E.filter(function(e){return _.indexOf(e)!==-1});j=V[V.length-1];var R=a.substr(0,V.length).split(o).filter(function(e){return e!==c}).length,N=d.substr(0,V.length).split(o).filter(function(e){return e!==c}).length,I=N!==R,q=void 0!==a[V.length-1]&&void 0!==d[V.length-2]&&a[V.length-1]!==c&&a[V.length-1]!==d[V.length-1]&&a[V.length-1]===d[V.length-2];!O&&(I||q)&&R>0&&d.indexOf(j)>-1&&void 0!==f[l]&&(M=!0,j=f[l]);for(var A=h.map(function(e){return _[e]}),F=A.filter(function(e){return e===j}).length,J=V.filter(function(e){return e===j}).length,D=d.substr(0,d.indexOf(c)).split(o).filter(function(e,t){return e===j&&f[t]!==e}).length,L=D+J+F+(M?1:0),U=0,W=0;W<C;W++){var z=_[W];if(w=W+1,z===j&&U++,U>=L)break}}if(O){for(var B=w,G=w;G<=b;G++)if(d[G]===c&&(B=G),d[G]===c||y.indexOf(G)!==-1||G===b)return B}else if(M){for(var H=w-1;H>=0;H--)if(s[H]===j||y.indexOf(H)!==-1||0===H)return H}else for(var K=w;K>=0;K--)if(d[K-1]===c||y.indexOf(K)!==-1||0===K)return K}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[],o=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,c=n.guide,m=n.pipe,b=n.placeholderChar,C=void 0===b?h.placeholderChar:b,k=n.keepCharPositions,O=void 0!==k&&k,P=n.showMask,x=void 0!==P&&P;if("undefined"==typeof r&&(r=o.value),r!==t.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===g&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var T=void 0,w=void 0;if(s instanceof Array&&(T=(0,p.convertMaskToPlaceholder)(s,C)),s!==!1){var M=a(r),j=o.selectionEnd,_=t.previousConformedValue,S=t.previousPlaceholder,E=void 0;if(("undefined"==typeof s?"undefined":l(s))===v){if(w=s(M,{currentCaretPosition:j,previousConformedValue:_,placeholderChar:C}),w===!1)return;var V=(0,p.processCaretTraps)(w),R=V.maskWithoutCaretTraps,N=V.indexes;w=R,E=N,T=(0,p.convertMaskToPlaceholder)(w,C)}else w=s;var I={previousConformedValue:_,guide:c,placeholderChar:C,pipe:m,placeholder:T,currentCaretPosition:j,keepCharPositions:O},q=(0,d.default)(M,w,I),A=q.conformedValue,F=("undefined"==typeof m?"undefined":l(m))===v,J={};F&&(J=m(A,u({rawValue:M},I)),J===!1?J={value:_,rejected:!0}:(0,p.isString)(J)&&(J={value:J}));var D=F?J.value:A,L=(0,f.default)({previousConformedValue:_,previousPlaceholder:S,conformedValue:D,placeholder:T,rawValue:M,currentCaretPosition:j,placeholderChar:C,indexesOfPipedChars:J.indexesOfPipedChars,caretTrapIndexes:E}),U=D===T&&0===L,W=x?T:y,z=U?W:D;t.previousConformedValue=z,t.previousPlaceholder=T,o.value!==z&&(o.value=z,i(o,L))}}}}}function i(e,t){document.activeElement===e&&l(e.setSelectionRange)===v&&(b?C(function(){return e.setSelectionRange(t,t,m)},0):e.setSelectionRange(t,t,m))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return y;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var s=r(4),f=n(s),c=r(2),d=n(c),p=r(3),h=r(1),v="function",y="",m="none",g="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,t){"use strict";function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){"use strict";function n(e,t,r,n,i,a,u,l){if(o(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,i,a,u,l],c=0;s=new Error(t.replace(/%s/g,function(){return f[c++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var o=function(e){};e.exports=n},function(e,t,r){"use strict";var n=r(6),o=r(7);e.exports=function(){function e(){o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports=r(8)()},function(t,r){t.exports=e}])});