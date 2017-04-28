!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vueTextMask=t():e.vueTextMask=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(2);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(i).default}});var a=r(5),u=n(a);t.default={render:function(e){var t=this;return e("input",{ref:"input",domProps:{value:this.value},on:{input:function(e){return t.updateValue(e.target.value)}}})},name:"masked-input",props:{value:{type:String,required:!1,default:""},mask:{type:[Array,Function,Boolean,Object],required:!0},guide:{type:Boolean,required:!1},placeholderChar:{type:String,required:!1},keepCharPositions:{type:Boolean,required:!1},pipe:{type:Function,required:!1},showMask:{type:Boolean,required:!1}},mounted:function(){this.bind()},methods:{createTextMaskInputElement:u.default,bind:function(){this.textMaskInputElement=this.createTextMaskInputElement(o({inputElement:this.$refs.input},this.$options.propsData)),this.updateValue(this.value)},updateValue:function(e){this.textMaskInputElement.update(e),this.$emit("input",this.$refs.input.value)}},watch:{mask:function(e){this.mask!==e&&this.bind()},guide:function(){this.bind()},placeholderChar:function(){this.bind()},keepCharPositions:function(){this.bind()},pipe:function(){this.bind()},showMask:function(){this.bind()}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_"},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.guide,u=void 0===n||n,s=r.previousConformedValue,l=void 0===s?a:s,d=r.placeholderChar,f=void 0===d?i.placeholderChar:d,c=r.placeholder,p=void 0===c?(0,o.convertMaskToPlaceholder)(t,f):c,h=r.currentCaretPosition,v=r.keepCharPositions,m=u===!1&&void 0!==l,g=e.length,y=l.length,b=p.length,C=t.length,k=g-y,P=k>0,x=h+(P?-k:0),O=x+Math.abs(k);if(v===!0&&!P){for(var M=a,T=x;T<O;T++)p[T]===f&&(M+=f);e=e.slice(0,x)+M+e.slice(x,g)}for(var w=e.split(a).map(function(e,t){return{char:e,isNew:t>=x&&t<O}}),j=g-1;j>=0;j--){var V=w[j].char;if(V!==f){var S=j>=x&&y===C;V===p[S?j-k:j]&&w.splice(j,1)}}var _=a,E=!1;e:for(var N=0;N<b;N++){var q=p[N];if(q===f){if(w.length>0)for(;w.length>0;){var A=w.shift(),I=A.char,R=A.isNew;if(I===f&&m!==!0){_+=f;continue e}if(t[N].test(I)){if(v===!0&&R!==!1&&l!==a&&u!==!1&&P){for(var B=w.length,F=null,$=0;$<B;$++){var J=w[$];if(J.char!==f&&J.isNew===!1)break;if(J.char===f){F=$;break}}null!==F?(_+=I,w.splice(F,1)):N--}else _+=I;continue e}E=!0}m===!1&&(_+=p.substr(N,b));break}_+=q}if(m&&P===!1){for(var L=null,W=0;W<_.length;W++)p[W]===f&&(L=W);_=null!==L?_.substr(0,L+1):a}return{conformedValue:_,meta:{someCharsRejected:E}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=r(3),i=r(1),a=""},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var t=[],r=void 0;r=e.indexOf(l),r!==-1;)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isString=o,t.isNumber=i,t.processCaretTraps=a;var u=r(1),s=[],l="[]"},function(e,t){"use strict";function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,s=void 0===u?0:u,l=e.conformedValue,d=e.rawValue,f=e.placeholderChar,c=e.placeholder,p=e.indexesOfPipedChars,h=void 0===p?n:p,v=e.caretTrapIndexes,m=void 0===v?n:v;if(0===s)return 0;var g=d.length,y=r.length,b=c.length,C=l.length,k=g-y,P=k>0,x=0===y,O=k>1&&!P&&!x;if(O)return s;var M=P&&(r===l||l===c),T=0,w=void 0,j=void 0;if(M)T=s-k;else{var V=l.toLowerCase(),S=d.toLowerCase(),_=S.substr(0,s).split(o),E=_.filter(function(e){return V.indexOf(e)!==-1});j=E[E.length-1];var N=a.substr(0,E.length).split(o).filter(function(e){return e!==f}).length,q=c.substr(0,E.length).split(o).filter(function(e){return e!==f}).length,A=q!==N,I=void 0!==a[E.length-1]&&void 0!==c[E.length-2]&&a[E.length-1]!==f&&a[E.length-1]!==c[E.length-1]&&a[E.length-1]===c[E.length-2];!P&&(A||I)&&N>0&&c.indexOf(j)>-1&&void 0!==d[s]&&(w=!0,j=d[s]);for(var R=h.map(function(e){return V[e]}),B=R.filter(function(e){return e===j}).length,F=E.filter(function(e){return e===j}).length,$=c.substr(0,c.indexOf(f)).split(o).filter(function(e,t){return e===j&&d[t]!==e}).length,J=$+F+B+(w?1:0),L=0,W=0;W<C;W++){var D=V[W];if(T=W+1,D===j&&L++,L>=J)break}}if(P){for(var z=T,G=T;G<=b;G++)if(c[G]===f&&(z=G),c[G]===f||m.indexOf(G)!==-1||G===b)return z}else if(w){for(var H=T-1;H>=0;H--)if(l[H]===j||m.indexOf(H)!==-1||0===H)return H}else for(var K=T;K>=0;K--)if(c[K-1]===f||m.indexOf(K)!==-1||0===K)return K}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[],o=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,l=n.mask,f=n.guide,g=n.pipe,b=n.placeholderChar,C=void 0===b?h.placeholderChar:b,k=n.keepCharPositions,P=void 0!==k&&k,x=n.showMask,O=void 0!==x&&x;if("undefined"==typeof r&&(r=o.value),r!==t.previousConformedValue){("undefined"==typeof l?"undefined":s(l))===y&&void 0!==l.pipe&&void 0!==l.mask&&(g=l.pipe,l=l.mask);var M=void 0,T=void 0;if(l instanceof Array&&(M=(0,p.convertMaskToPlaceholder)(l,C)),l!==!1){var w=a(r),j=o.selectionEnd,V=t.previousConformedValue,S=t.previousPlaceholder,_=void 0;if(("undefined"==typeof l?"undefined":s(l))===v){if(T=l(w,{currentCaretPosition:j,previousConformedValue:V,placeholderChar:C}),T===!1)return;var E=(0,p.processCaretTraps)(T),N=E.maskWithoutCaretTraps,q=E.indexes;T=N,_=q,M=(0,p.convertMaskToPlaceholder)(T,C)}else T=l;var A={previousConformedValue:V,guide:f,placeholderChar:C,pipe:g,placeholder:M,currentCaretPosition:j,keepCharPositions:P},I=(0,c.default)(w,T,A),R=I.conformedValue,B=("undefined"==typeof g?"undefined":s(g))===v,F={};B&&(F=g(R,u({rawValue:w},A)),F===!1?F={value:V,rejected:!0}:(0,p.isString)(F)&&(F={value:F}));var $=B?F.value:R,J=(0,d.default)({previousConformedValue:V,previousPlaceholder:S,conformedValue:$,placeholder:M,rawValue:w,currentCaretPosition:j,placeholderChar:C,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:_}),L=$===M&&0===J,W=O?M:m,D=L?W:$;t.previousConformedValue=D,t.previousPlaceholder=M,o.value!==D&&(o.value=D,i(o,J))}}}}}function i(e,t){document.activeElement===e&&s(e.setSelectionRange)===v&&(b?C(function(){return e.setSelectionRange(t,t,g)},0):e.setSelectionRange(t,t,g))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var l=r(4),d=n(l),f=r(2),c=n(f),p=r(3),h=r(1),v="function",m="",g="none",y="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});