/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t=t||self).bootstrap={},t.jQuery)}(this,function(t,p){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}p=p&&p.hasOwnProperty("default")?p.default:p;var e="transitionend";function n(t){var e=this,n=!1;return p(this).one(m.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||m.triggerTransitionEnd(e)},t),this}var m={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=p(t).css("transition-duration"),n=p(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){p(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&m.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?m.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};p.fn.emulateTransitionEnd=n,p.event.special[m.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(p(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=p.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},u="alert",f="fade",d="show",g=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){p.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=m.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=p(t).closest("."+u)[0]),n},t._triggerCloseEvent=function(t){var e=p.Event(h.CLOSE);return p(t).trigger(e),e},t._removeElement=function(e){var n=this;if(p(e).removeClass(d),p(e).hasClass(f)){var t=m.getTransitionDurationFromElement(e);p(e).one(m.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){p(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();p(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),p.fn[o]=g._jQueryInterface,p.fn[o].Constructor=g,p.fn[o].noConflict=function(){return p.fn[o]=c,g._jQueryInterface};var _="button",v="bs.button",y="."+v,E=".data-api",b=p.fn[_],w="active",C="btn",T="focus",S='[data-toggle^="button"]',D='[data-toggle="buttons"]',I='input:not([type="hidden"])',A=".active",O=".btn",N={CLICK_DATA_API:"click"+y+E,FOCUS_BLUR_DATA_API:"focus"+y+E+" blur"+y+E},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=this._element.querySelector(I);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(w))t=!1;else{var o=n.querySelector(A);o&&p(o).removeClass(w)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(w),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(w)),t&&p(this._element).toggleClass(w)},t.dispose=function(){p.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(v);t||(t=new n(this),p(this).data(v,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();p(document).on(N.CLICK_DATA_API,S,function(t){t.preventDefault();var e=t.target;p(e).hasClass(C)||(e=p(e).closest(O)),k._jQueryInterface.call(p(e),"toggle")}).on(N.FOCUS_BLUR_DATA_API,S,function(t){var e=p(t.target).closest(O)[0];p(e).toggleClass(T,/^focus(in)?$/.test(t.type))}),p.fn[_]=k._jQueryInterface,p.fn[_].Constructor=k,p.fn[_].noConflict=function(){return p.fn[_]=b,k._jQueryInterface};var L="carousel",x="bs.carousel",P="."+x,H=".data-api",j=p.fn[L],R={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},F={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},M="next",W="prev",U="left",B="right",q={SLIDE:"slide"+P,SLID:"slid"+P,KEYDOWN:"keydown"+P,MOUSEENTER:"mouseenter"+P,MOUSELEAVE:"mouseleave"+P,TOUCHSTART:"touchstart"+P,TOUCHMOVE:"touchmove"+P,TOUCHEND:"touchend"+P,POINTERDOWN:"pointerdown"+P,POINTERUP:"pointerup"+P,DRAG_START:"dragstart"+P,LOAD_DATA_API:"load"+P+H,CLICK_DATA_API:"click"+P+H},K="carousel",Q="active",V="slide",Y="carousel-item-right",z="carousel-item-left",X="carousel-item-next",G="carousel-item-prev",$="pointer-event",J=".active",Z=".active.carousel-item",tt=".carousel-item",et=".carousel-item img",nt=".carousel-item-next, .carousel-item-prev",it=".carousel-indicators",ot="[data-slide], [data-slide-to]",rt='[data-ride="carousel"]',st={TOUCH:"touch",PEN:"pen"},at=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(it),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(M)},t.nextWhenVisible=function(){!document.hidden&&p(this._element).is(":visible")&&"hidden"!==p(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(W)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(nt)&&(m.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(Z);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)p(this._element).one(q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?M:W;this._slide(i,this._items[t])}},t.dispose=function(){p(this._element).off(P),p.removeData(this._element,x),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},R,t),m.typeCheckConfig(L,t,F),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&p(this._element).on(q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&p(this._element).on(q.MOUSEENTER,function(t){return e.pause(t)}).on(q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&st[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&st[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};p(this._element.querySelectorAll(et)).on(q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(p(this._element).on(q.POINTERDOWN,function(t){return e(t)}),p(this._element).on(q.POINTERUP,function(t){return i(t)}),this._element.classList.add($)):(p(this._element).on(q.TOUCHSTART,function(t){return e(t)}),p(this._element).on(q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),p(this._element).on(q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(tt)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===M,i=t===W,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===W?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(Z)),o=p.Event(q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return p(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(J));p(e).removeClass(Q);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&p(n).addClass(Q)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(Z),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===M?(n=z,i=X,U):(n=Y,i=G,B),l&&p(l).hasClass(Q))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=p.Event(q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(p(this._element).hasClass(V)){p(l).addClass(i),m.reflow(l),p(s).addClass(n),p(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=m.getTransitionDurationFromElement(s);p(s).one(m.TRANSITION_END,function(){p(l).removeClass(n+" "+i).addClass(Q),p(s).removeClass(Q+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return p(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else p(s).removeClass(Q),p(l).addClass(Q),this._isSliding=!1,p(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=p(this).data(x),e=l({},R,p(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),p(this).data(x,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=m.getSelectorFromElement(this);if(e){var n=p(e)[0];if(n&&p(n).hasClass(K)){var i=l({},p(n).data(),p(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(p(n),i),o&&p(n).data(x).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return R}}]),r}();p(document).on(q.CLICK_DATA_API,ot,at._dataApiClickHandler),p(window).on(q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(rt)),e=0,n=t.length;e<n;e++){var i=p(t[e]);at._jQueryInterface.call(i,i.data())}}),p.fn[L]=at._jQueryInterface,p.fn[L].Constructor=at,p.fn[L].noConflict=function(){return p.fn[L]=j,at._jQueryInterface};var lt="collapse",ct="bs.collapse",ht="."+ct,ut=p.fn[lt],ft={toggle:!0,parent:""},dt={toggle:"boolean",parent:"(string|element)"},pt={SHOW:"show"+ht,SHOWN:"shown"+ht,HIDE:"hide"+ht,HIDDEN:"hidden"+ht,CLICK_DATA_API:"click"+ht+".data-api"},mt="show",gt="collapse",_t="collapsing",vt="collapsed",yt="width",Et="height",bt=".show, .collapsing",wt='[data-toggle="collapse"]',Ct=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(wt)),i=0,o=n.length;i<o;i++){var r=n[i],s=m.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){p(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!p(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(bt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(gt)})).length&&(t=null),!(t&&(e=p(t).not(this._selector).data(ct))&&e._isTransitioning))){var i=p.Event(pt.SHOW);if(p(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(p(t).not(this._selector),"hide"),e||p(t).data(ct,null));var o=this._getDimension();p(this._element).removeClass(gt).addClass(_t),this._element.style[o]=0,this._triggerArray.length&&p(this._triggerArray).removeClass(vt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){p(n._element).removeClass(_t).addClass(gt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),p(n._element).trigger(pt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&p(this._element).hasClass(mt)){var e=p.Event(pt.HIDE);if(p(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",m.reflow(this._element),p(this._element).addClass(_t).removeClass(gt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=m.getSelectorFromElement(r);if(null!==s)p([].slice.call(document.querySelectorAll(s))).hasClass(mt)||p(r).addClass(vt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){t.setTransitioning(!1),p(t._element).removeClass(_t).addClass(gt).trigger(pt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){p.removeData(this._element,ct),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},ft,t)).toggle=Boolean(t.toggle),m.typeCheckConfig(lt,t,dt),t},t._getDimension=function(){return p(this._element).hasClass(yt)?yt:Et},t._getParent=function(){var t,n=this;m.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return p(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=p(t).hasClass(mt);e.length&&p(e).toggleClass(vt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=m.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=p(this),e=t.data(ct),n=l({},ft,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ct,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ft}}]),a}();p(document).on(pt.CLICK_DATA_API,wt,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=p(this),e=m.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));p(i).each(function(){var t=p(this),e=t.data(ct)?"toggle":n.data();Ct._jQueryInterface.call(t,e)})}),p.fn[lt]=Ct._jQueryInterface,p.fn[lt].Constructor=Ct,p.fn[lt].noConflict=function(){return p.fn[lt]=ut,Ct._jQueryInterface};for(var Tt="undefined"!=typeof window&&"undefined"!=typeof document,St=["Edge","Trident","Firefox"],Dt=0,It=0;It<St.length;It+=1)if(Tt&&0<=navigator.userAgent.indexOf(St[It])){Dt=1;break}var At=Tt&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Dt))}};function Ot(t){return t&&"[object Function]"==={}.toString.call(t)}function Nt(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function kt(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function Lt(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=Nt(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?t:Lt(kt(t))}var xt=Tt&&!(!window.MSInputMethodContext||!document.documentMode),Pt=Tt&&/MSIE 10/.test(navigator.userAgent);function Ht(t){return 11===t?xt:10===t?Pt:xt||Pt}function jt(t){if(!t)return document.documentElement;for(var e=Ht(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===Nt(n,"position")?jt(n):n:t?t.ownerDocument.documentElement:document.documentElement}function Rt(t){return null!==t.parentNode?Rt(t.parentNode):t}function Ft(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var s,a,l=r.commonAncestorContainer;if(t!==l&&e!==l||i.contains(o))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&jt(s.firstElementChild)!==s?jt(l):l;var c=Rt(t);return c.host?Ft(c.host,e):Ft(t,Rt(e).host)}function Mt(t){var e="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"!==n&&"HTML"!==n)return t[e];var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}function Wt(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function Ut(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],Ht(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function Bt(t){var e=t.body,n=t.documentElement,i=Ht(10)&&getComputedStyle(n);return{height:Ut("Height",e,n,i),width:Ut("Width",e,n,i)}}var qt=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),Kt=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Qt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function Vt(t){return Qt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Yt(t){var e={};try{if(Ht(10)){e=t.getBoundingClientRect();var n=Mt(t,"top"),i=Mt(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?Bt(t.ownerDocument):{},s=r.width||t.clientWidth||o.right-o.left,a=r.height||t.clientHeight||o.bottom-o.top,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var h=Nt(t);l-=Wt(h,"x"),c-=Wt(h,"y"),o.width-=l,o.height-=c}return Vt(o)}function zt(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=Ht(10),o="HTML"===e.nodeName,r=Yt(t),s=Yt(e),a=Lt(t),l=Nt(e),c=parseFloat(l.borderTopWidth,10),h=parseFloat(l.borderLeftWidth,10);n&&o&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var u=Vt({top:r.top-s.top-c,left:r.left-s.left-h,width:r.width,height:r.height});if(u.marginTop=0,u.marginLeft=0,!i&&o){var f=parseFloat(l.marginTop,10),d=parseFloat(l.marginLeft,10);u.top-=c-f,u.bottom-=c-f,u.left-=h-d,u.right-=h-d,u.marginTop=f,u.marginLeft=d}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(u=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=Mt(e,"top"),o=Mt(e,"left"),r=n?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}(u,e)),u}function Xt(t){if(!t||!t.parentElement||Ht())return document.documentElement;for(var e=t.parentElement;e&&"none"===Nt(e,"transform");)e=e.parentElement;return e||document.documentElement}function Gt(t,e,n,i){var o=4<arguments.length&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},s=o?Xt(t):Ft(t,e);if("viewport"===i)r=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=zt(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:Mt(n),a=e?0:Mt(n,"left");return Vt({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:o,height:r})}(s,o);else{var a=void 0;"scrollParent"===i?"BODY"===(a=Lt(kt(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===i?t.ownerDocument.documentElement:i;var l=zt(a,s,o);if("HTML"!==a.nodeName||function t(e){var n=e.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===Nt(e,"position"))return!0;var i=kt(e);return!!i&&t(i)}(s))r=l;else{var c=Bt(t.ownerDocument),h=c.height,u=c.width;r.top+=l.top-l.marginTop,r.bottom=h+l.top,r.left+=l.left-l.marginLeft,r.right=u+l.left}}var f="number"==typeof(n=n||0);return r.left+=f?n:n.left||0,r.top+=f?n:n.top||0,r.right-=f?n:n.right||0,r.bottom-=f?n:n.bottom||0,r}function $t(t,e,i,n,o){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=Gt(i,n,r,o),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return Qt({key:t},a[t],{area:(e=a[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,n=t.height;return e>=i.clientWidth&&n>=i.clientHeight}),h=0<c.length?c[0].key:l[0].key,u=t.split("-")[1];return h+(u?"-"+u:"")}function Jt(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return zt(n,i?Xt(e):Ft(e,n),i)}function Zt(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function te(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function ee(t,e,n){n=n.split("-")[0];var i=Zt(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height";return o[s]=e[s]+e[l]/2-i[l]/2,o[a]=n===a?e[a]-i[c]:e[te(a)],o}function ne(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function ie(t,n,e){return(void 0===e?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=ne(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",e))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e=t.function||t.fn;t.enabled&&Ot(e)&&(n.offsets.popper=Vt(n.offsets.popper),n.offsets.reference=Vt(n.offsets.reference),n=e(n,t))}),n}function oe(t,n){return t.some(function(t){var e=t.name;return t.enabled&&e===n})}function re(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t;if("undefined"!=typeof document.body.style[r])return r}return null}function se(t){var e=t.ownerDocument;return e?e.defaultView:window}function ae(t,e,n,i){n.updateBound=i,se(t).addEventListener("resize",n.updateBound,{passive:!0});var o=Lt(t);return function t(e,n,i,o){var r="BODY"===e.nodeName,s=r?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),r||t(Lt(s.parentNode),n,i,o),o.push(s)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function le(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,se(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function ce(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function he(n,i){Object.keys(i).forEach(function(t){var e="";-1!==["width","height","top","right","bottom","left"].indexOf(t)&&ce(i[t])&&(e="px"),n.style[t]=i[t]+e})}var ue=Tt&&/Firefox/i.test(navigator.userAgent);function fe(t,e,n){var i=ne(t,function(t){return t.name===e}),o=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!o){var r="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var de=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],pe=de.slice(3);function me(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=pe.indexOf(t),i=pe.slice(n+1).concat(pe.slice(0,n));return e?i.reverse():i}var ge="flip",_e="clockwise",ve="counterclockwise";function ye(t,o,r,e){var s=[0,0],a=-1!==["right","left"].indexOf(e),n=t.split(/(\+|\-)/).map(function(t){return t.trim()}),i=n.indexOf(ne(n,function(t){return-1!==t.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(t,e){var n=(1===e?!a:a)?"height":"width",i=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,i=!0,t):i?(t[t.length-1]+=e,i=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return t;if(0!==s.indexOf("%"))return"vh"!==s&&"vw"!==s?r:("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r;var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Vt(a)[e]/100*r}(t,n,o,r)})})).forEach(function(n,i){n.forEach(function(t,e){ce(t)&&(s[i]+=t*("-"===n[e-1]?-1:1))})}),s}var Ee={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var o=t.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Kt({},l,r[l]),end:Kt({},l,r[l]+r[c]-s[c])};t.offsets.popper=Qt({},s,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,o=t.offsets,r=o.popper,s=o.reference,a=i.split("-")[0],l=void 0;return l=ce(+n)?[+n,0]:ye(n,r,s,a),"left"===a?(r.top+=l[0],r.left-=l[1]):"right"===a?(r.top+=l[0],r.left+=l[1]):"top"===a?(r.left+=l[0],r.top-=l[1]):"bottom"===a&&(r.left+=l[0],r.top+=l[1]),t.popper=r,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,i){var e=i.boundariesElement||jt(t.instance.popper);t.instance.reference===e&&(e=jt(e));var n=re("transform"),o=t.instance.popper.style,r=o.top,s=o.left,a=o[n];o.top="",o.left="",o[n]="";var l=Gt(t.instance.popper,t.instance.reference,i.padding,e,t.positionFixed);o.top=r,o.left=s,o[n]=a,i.boundaries=l;var c=i.priority,h=t.offsets.popper,u={primary:function(t){var e=h[t];return h[t]<l[t]&&!i.escapeWithReference&&(e=Math.max(h[t],l[t])),Kt({},t,e)},secondary:function(t){var e="right"===t?"left":"top",n=h[e];return h[t]>l[t]&&!i.escapeWithReference&&(n=Math.min(h[e],l[t]-("right"===t?h.width:h.height))),Kt({},e,n)}};return c.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";h=Qt({},h,u[e](t))}),t.offsets.popper=h,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[a])&&(t.offsets.popper[l]=r(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!fe(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=t.offsets,s=r.popper,a=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",h=l?"Top":"Left",u=h.toLowerCase(),f=l?"left":"top",d=l?"bottom":"right",p=Zt(i)[c];a[d]-p<s[u]&&(t.offsets.popper[u]-=s[u]-(a[d]-p)),a[u]+p>s[d]&&(t.offsets.popper[u]+=a[u]+p-s[d]),t.offsets.popper=Vt(t.offsets.popper);var m=a[u]+a[c]/2-p/2,g=Nt(t.instance.popper),_=parseFloat(g["margin"+h],10),v=parseFloat(g["border"+h+"Width"],10),y=m-t.offsets.popper[u]-_-v;return y=Math.max(Math.min(s[c]-p,y),0),t.arrowElement=i,t.offsets.arrow=(Kt(n={},u,Math.round(y)),Kt(n,f,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(p,m){if(oe(p.instance.modifiers,"inner"))return p;if(p.flipped&&p.placement===p.originalPlacement)return p;var g=Gt(p.instance.popper,p.instance.reference,m.padding,m.boundariesElement,p.positionFixed),_=p.placement.split("-")[0],v=te(_),y=p.placement.split("-")[1]||"",E=[];switch(m.behavior){case ge:E=[_,v];break;case _e:E=me(_);break;case ve:E=me(_,!0);break;default:E=m.behavior}return E.forEach(function(t,e){if(_!==t||E.length===e+1)return p;_=p.placement.split("-")[0],v=te(_);var n,i=p.offsets.popper,o=p.offsets.reference,r=Math.floor,s="left"===_&&r(i.right)>r(o.left)||"right"===_&&r(i.left)<r(o.right)||"top"===_&&r(i.bottom)>r(o.top)||"bottom"===_&&r(i.top)<r(o.bottom),a=r(i.left)<r(g.left),l=r(i.right)>r(g.right),c=r(i.top)<r(g.top),h=r(i.bottom)>r(g.bottom),u="left"===_&&a||"right"===_&&l||"top"===_&&c||"bottom"===_&&h,f=-1!==["top","bottom"].indexOf(_),d=!!m.flipVariations&&(f&&"start"===y&&a||f&&"end"===y&&l||!f&&"start"===y&&c||!f&&"end"===y&&h);(s||u||d)&&(p.flipped=!0,(s||u)&&(_=E[e+1]),d&&(y="end"===(n=y)?"start":"start"===n?"end":n),p.placement=_+(y?"-"+y:""),p.offsets.popper=Qt({},p.offsets.popper,ee(p.instance.popper,p.offsets.reference,p.placement)),p=ie(p.instance.modifiers,p,"flip"))}),p},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),t.placement=te(e),t.offsets.popper=Vt(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!fe(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=ne(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=ne(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s,a,l,c,h,u,f,d,p,m,g,_,v,y,E=void 0!==r?r:e.gpuAcceleration,b=jt(t.instance.popper),w=Yt(b),C={position:o.position},T=(s=t,a=window.devicePixelRatio<2||!ue,l=s.offsets,c=l.popper,h=l.reference,u=Math.round,f=Math.floor,d=function(t){return t},p=u(h.width),m=u(c.width),g=-1!==["left","right"].indexOf(s.placement),_=-1!==s.placement.indexOf("-"),y=a?u:d,{left:(v=a?g||_||p%2==m%2?u:f:d)(p%2==1&&m%2==1&&!_&&a?c.left-1:c.left),top:y(c.top),bottom:y(c.bottom),right:v(c.right)}),S="bottom"===n?"top":"bottom",D="right"===i?"left":"right",I=re("transform"),A=void 0,O=void 0;if(O="bottom"===S?"HTML"===b.nodeName?-b.clientHeight+T.bottom:-w.height+T.bottom:T.top,A="right"===D?"HTML"===b.nodeName?-b.clientWidth+T.right:-w.width+T.right:T.left,E&&I)C[I]="translate3d("+A+"px, "+O+"px, 0)",C[S]=0,C[D]=0,C.willChange="transform";else{var N="bottom"===S?-1:1,k="right"===D?-1:1;C[S]=O*N,C[D]=A*k,C.willChange=S+", "+D}var L={"x-placement":t.placement};return t.attributes=Qt({},L,t.attributes),t.styles=Qt({},C,t.styles),t.arrowStyles=Qt({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return he(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&he(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,o){var r=Jt(o,e,t,n.positionFixed),s=$t(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),he(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},be=function(){function r(t,e){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=At(this.update.bind(this)),this.options=Qt({},r.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(Qt({},r.Defaults.modifiers,i.modifiers)).forEach(function(t){n.options.modifiers[t]=Qt({},r.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return Qt({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&Ot(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return qt(r,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=Jt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=$t(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=ee(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=ie(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,oe(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[re("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=ae(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return le.call(this)}}]),r}();be.Utils=("undefined"!=typeof window?window:global).PopperUtils,be.placements=de,be.Defaults=Ee;var we="dropdown",Ce="bs.dropdown",Te="."+Ce,Se=".data-api",De=p.fn[we],Ie=new RegExp("38|40|27"),Ae={HIDE:"hide"+Te,HIDDEN:"hidden"+Te,SHOW:"show"+Te,SHOWN:"shown"+Te,CLICK:"click"+Te,CLICK_DATA_API:"click"+Te+Se,KEYDOWN_DATA_API:"keydown"+Te+Se,KEYUP_DATA_API:"keyup"+Te+Se},Oe="disabled",Ne="show",ke="dropup",Le="dropright",xe="dropleft",Pe="dropdown-menu-right",He="position-static",je='[data-toggle="dropdown"]',Re=".dropdown form",Fe=".dropdown-menu",Me=".navbar-nav",We=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ue="top-start",Be="top-end",qe="bottom-start",Ke="bottom-end",Qe="right-start",Ve="left-start",Ye={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},ze={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Xe=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!p(this._element).hasClass(Oe)){var t=c._getParentFromElement(this._element),e=p(this._menu).hasClass(Ne);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=p.Event(Ae.SHOW,n);if(p(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof be)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:m.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&p(t).addClass(He),this._popper=new be(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===p(t).closest(Me).length&&p(document.body).children().on("mouseover",null,p.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),p(this._menu).toggleClass(Ne),p(t).toggleClass(Ne).trigger(p.Event(Ae.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||p(this._element).hasClass(Oe)||p(this._menu).hasClass(Ne))){var t={relatedTarget:this._element},e=p.Event(Ae.SHOW,t),n=c._getParentFromElement(this._element);p(n).trigger(e),e.isDefaultPrevented()||(p(this._menu).toggleClass(Ne),p(n).toggleClass(Ne).trigger(p.Event(Ae.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!p(this._element).hasClass(Oe)&&p(this._menu).hasClass(Ne)){var t={relatedTarget:this._element},e=p.Event(Ae.HIDE,t),n=c._getParentFromElement(this._element);p(n).trigger(e),e.isDefaultPrevented()||(p(this._menu).toggleClass(Ne),p(n).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN,t)))}},t.dispose=function(){p.removeData(this._element,Ce),p(this._element).off(Te),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;p(this._element).on(Ae.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,p(this._element).data(),t),m.typeCheckConfig(we,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Fe))}return this._menu},t._getPlacement=function(){var t=p(this._element.parentNode),e=qe;return t.hasClass(ke)?(e=Ue,p(this._menu).hasClass(Pe)&&(e=Be)):t.hasClass(Le)?e=Qe:t.hasClass(xe)?e=Ve:p(this._menu).hasClass(Pe)&&(e=Ke),e},t._detectNavbar=function(){return 0<p(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(Ce);if(t||(t=new c(this,"object"==typeof e?e:null),p(this).data(Ce,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(je)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=p(e[n]).data(Ce),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(p(o).hasClass(Ne)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&p.contains(o,t.target))){var l=p.Event(Ae.HIDE,s);p(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),e[n].setAttribute("aria-expanded","false"),p(a).removeClass(Ne),p(o).removeClass(Ne).trigger(p.Event(Ae.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=m.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||p(t.target).closest(Fe).length)):Ie.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!p(this).hasClass(Oe))){var e=c._getParentFromElement(this),n=p(e).hasClass(Ne);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(We));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(je);p(r).trigger("focus")}p(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Ye}},{key:"DefaultType",get:function(){return ze}}]),c}();p(document).on(Ae.KEYDOWN_DATA_API,je,Xe._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API,Fe,Xe._dataApiKeydownHandler).on(Ae.CLICK_DATA_API+" "+Ae.KEYUP_DATA_API,Xe._clearMenus).on(Ae.CLICK_DATA_API,je,function(t){t.preventDefault(),t.stopPropagation(),Xe._jQueryInterface.call(p(this),"toggle")}).on(Ae.CLICK_DATA_API,Re,function(t){t.stopPropagation()}),p.fn[we]=Xe._jQueryInterface,p.fn[we].Constructor=Xe,p.fn[we].noConflict=function(){return p.fn[we]=De,Xe._jQueryInterface};var Ge="modal",$e="bs.modal",Je="."+$e,Ze=p.fn[Ge],tn={backdrop:!0,keyboard:!0,focus:!0,show:!0},en={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},nn={HIDE:"hide"+Je,HIDDEN:"hidden"+Je,SHOW:"show"+Je,SHOWN:"shown"+Je,FOCUSIN:"focusin"+Je,RESIZE:"resize"+Je,CLICK_DISMISS:"click.dismiss"+Je,KEYDOWN_DISMISS:"keydown.dismiss"+Je,MOUSEUP_DISMISS:"mouseup.dismiss"+Je,MOUSEDOWN_DISMISS:"mousedown.dismiss"+Je,CLICK_DATA_API:"click"+Je+".data-api"},on="modal-dialog-scrollable",rn="modal-scrollbar-measure",sn="modal-backdrop",an="modal-open",ln="fade",cn="show",hn=".modal-dialog",un=".modal-body",fn='[data-toggle="modal"]',dn='[data-dismiss="modal"]',pn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",mn=".sticky-top",gn=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(hn),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){p(this._element).hasClass(ln)&&(this._isTransitioning=!0);var n=p.Event(nn.SHOW,{relatedTarget:t});p(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),p(this._element).on(nn.CLICK_DISMISS,dn,function(t){return e.hide(t)}),p(this._dialog).on(nn.MOUSEDOWN_DISMISS,function(){p(e._element).one(nn.MOUSEUP_DISMISS,function(t){p(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=p.Event(nn.HIDE);if(p(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=p(this._element).hasClass(ln);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),p(document).off(nn.FOCUSIN),p(this._element).removeClass(cn),p(this._element).off(nn.CLICK_DISMISS),p(this._dialog).off(nn.MOUSEDOWN_DISMISS),i){var o=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return p(t).off(Je)}),p(document).off(nn.FOCUSIN),p.removeData(this._element,$e),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},tn,t),m.typeCheckConfig(Ge,t,en),t},t._showElement=function(t){var e=this,n=p(this._element).hasClass(ln);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),p(this._dialog).hasClass(on)?this._dialog.querySelector(un).scrollTop=0:this._element.scrollTop=0,n&&m.reflow(this._element),p(this._element).addClass(cn),this._config.focus&&this._enforceFocus();var i=p.Event(nn.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,p(e._element).trigger(i)};if(n){var r=m.getTransitionDurationFromElement(this._dialog);p(this._dialog).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;p(document).off(nn.FOCUSIN).on(nn.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===p(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?p(this._element).on(nn.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||p(this._element).off(nn.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?p(window).on(nn.RESIZE,function(t){return e.handleUpdate(t)}):p(window).off(nn.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){p(document.body).removeClass(an),t._resetAdjustments(),t._resetScrollbar(),p(t._element).trigger(nn.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(p(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=p(this._element).hasClass(ln)?ln:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=sn,n&&this._backdrop.classList.add(n),p(this._backdrop).appendTo(document.body),p(this._element).on(nn.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&m.reflow(this._backdrop),p(this._backdrop).addClass(cn),!t)return;if(!n)return void t();var i=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){p(this._backdrop).removeClass(cn);var o=function(){e._removeBackdrop(),t&&t()};if(p(this._element).hasClass(ln)){var r=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(pn)),e=[].slice.call(document.querySelectorAll(mn));p(t).each(function(t,e){var n=e.style.paddingRight,i=p(e).css("padding-right");p(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),p(e).each(function(t,e){var n=e.style.marginRight,i=p(e).css("margin-right");p(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=p(document.body).css("padding-right");p(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}p(document.body).addClass(an)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(pn));p(t).each(function(t,e){var n=p(e).data("padding-right");p(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+mn));p(e).each(function(t,e){var n=p(e).data("margin-right");"undefined"!=typeof n&&p(e).css("margin-right",n).removeData("margin-right")});var n=p(document.body).data("padding-right");p(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=rn,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=p(this).data($e),e=l({},tn,p(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),p(this).data($e,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return tn}}]),o}();p(document).on(nn.CLICK_DATA_API,fn,function(t){var e,n=this,i=m.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=p(e).data($e)?"toggle":l({},p(e).data(),p(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=p(e).one(nn.SHOW,function(t){t.isDefaultPrevented()||r.one(nn.HIDDEN,function(){p(n).is(":visible")&&n.focus()})});gn._jQueryInterface.call(p(e),o,this)}),p.fn[Ge]=gn._jQueryInterface,p.fn[Ge].Constructor=gn,p.fn[Ge].noConflict=function(){return p.fn[Ge]=Ze,gn._jQueryInterface};var _n=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],vn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},yn=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,En=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function bn(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===_n.indexOf(n)||Boolean(t.nodeValue.match(yn)||t.nodeValue.match(En));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var wn="tooltip",Cn="bs.tooltip",Tn="."+Cn,Sn=p.fn[wn],Dn="bs-tooltip",In=new RegExp("(^|\\s)"+Dn+"\\S+","g"),An=["sanitize","whiteList","sanitizeFn"],On={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Nn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},kn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:vn},Ln="show",xn="out",Pn={HIDE:"hide"+Tn,HIDDEN:"hidden"+Tn,SHOW:"show"+Tn,SHOWN:"shown"+Tn,INSERTED:"inserted"+Tn,CLICK:"click"+Tn,FOCUSIN:"focusin"+Tn,FOCUSOUT:"focusout"+Tn,MOUSEENTER:"mouseenter"+Tn,MOUSELEAVE:"mouseleave"+Tn},Hn="fade",jn="show",Rn=".tooltip-inner",Fn=".arrow",Mn="hover",Wn="focus",Un="click",Bn="manual",qn=function(){function i(t,e){if("undefined"==typeof be)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=p(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(p(this.getTipElement()).hasClass(jn))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),p.removeData(this.element,this.constructor.DATA_KEY),p(this.element).off(this.constructor.EVENT_KEY),p(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&p(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===p(this.element).css("display"))throw new Error("Please use show on visible elements");var t=p.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){p(this.element).trigger(t);var n=m.findShadowRoot(this.element),i=p.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=m.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&p(o).addClass(Hn);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();p(o).data(this.constructor.DATA_KEY,this),p.contains(this.element.ownerDocument.documentElement,this.tip)||p(o).appendTo(l),p(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new be(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Fn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),p(o).addClass(jn),"ontouchstart"in document.documentElement&&p(document.body).children().on("mouseover",null,p.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,p(e.element).trigger(e.constructor.Event.SHOWN),t===xn&&e._leave(null,e)};if(p(this.tip).hasClass(Hn)){var h=m.getTransitionDurationFromElement(this.tip);p(this.tip).one(m.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=p.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==Ln&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),p(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(p(this.element).trigger(i),!i.isDefaultPrevented()){if(p(n).removeClass(jn),"ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),this._activeTrigger[Un]=!1,this._activeTrigger[Wn]=!1,this._activeTrigger[Mn]=!1,p(this.tip).hasClass(Hn)){var r=m.getTransitionDurationFromElement(n);p(n).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){p(this.getTipElement()).addClass(Dn+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(p(t.querySelectorAll(Rn)),this.getTitle()),p(t).removeClass(Hn+" "+jn)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=bn(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?p(e).parent().is(t)||t.empty().append(e):t.text(p(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:m.isElement(this.config.container)?p(this.config.container):p(document).find(this.config.container)},t._getAttachment=function(t){return Nn[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)p(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Bn){var e=t===Mn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Mn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;p(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),p(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||p(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Wn:Mn]=!0),p(e.getTipElement()).hasClass(jn)||e._hoverState===Ln?e._hoverState=Ln:(clearTimeout(e._timeout),e._hoverState=Ln,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Ln&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||p(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Wn:Mn]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=xn,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===xn&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=p(this.element).data();return Object.keys(e).forEach(function(t){-1!==An.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),m.typeCheckConfig(wn,t,this.constructor.DefaultType),t.sanitize&&(t.template=bn(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=p(this.getTipElement()),e=t.attr("class").match(In);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(p(t).removeClass(Hn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=p(this).data(Cn),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),p(this).data(Cn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return kn}},{key:"NAME",get:function(){return wn}},{key:"DATA_KEY",get:function(){return Cn}},{key:"Event",get:function(){return Pn}},{key:"EVENT_KEY",get:function(){return Tn}},{key:"DefaultType",get:function(){return On}}]),i}();p.fn[wn]=qn._jQueryInterface,p.fn[wn].Constructor=qn,p.fn[wn].noConflict=function(){return p.fn[wn]=Sn,qn._jQueryInterface};var Kn="popover",Qn="bs.popover",Vn="."+Qn,Yn=p.fn[Kn],zn="bs-popover",Xn=new RegExp("(^|\\s)"+zn+"\\S+","g"),Gn=l({},qn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),$n=l({},qn.DefaultType,{content:"(string|element|function)"}),Jn="fade",Zn="show",ti=".popover-header",ei=".popover-body",ni={HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn,INSERTED:"inserted"+Vn,CLICK:"click"+Vn,FOCUSIN:"focusin"+Vn,FOCUSOUT:"focusout"+Vn,MOUSEENTER:"mouseenter"+Vn,MOUSELEAVE:"mouseleave"+Vn},ii=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){p(this.getTipElement()).addClass(zn+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},o.setContent=function(){var t=p(this.getTipElement());this.setElementContent(t.find(ti),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ei),e),t.removeClass(Jn+" "+Zn)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=p(this.getTipElement()),e=t.attr("class").match(Xn);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=p(this).data(Qn),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),p(this).data(Qn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Gn}},{key:"NAME",get:function(){return Kn}},{key:"DATA_KEY",get:function(){return Qn}},{key:"Event",get:function(){return ni}},{key:"EVENT_KEY",get:function(){return Vn}},{key:"DefaultType",get:function(){return $n}}]),i}(qn);p.fn[Kn]=ii._jQueryInterface,p.fn[Kn].Constructor=ii,p.fn[Kn].noConflict=function(){return p.fn[Kn]=Yn,ii._jQueryInterface};var oi="scrollspy",ri="bs.scrollspy",si="."+ri,ai=p.fn[oi],li={offset:10,method:"auto",target:""},ci={offset:"number",method:"string",target:"(string|element)"},hi={ACTIVATE:"activate"+si,SCROLL:"scroll"+si,LOAD_DATA_API:"load"+si+".data-api"},ui="dropdown-item",fi="active",di='[data-spy="scroll"]',pi=".nav, .list-group",mi=".nav-link",gi=".nav-item",_i=".list-group-item",vi=".dropdown",yi=".dropdown-item",Ei=".dropdown-toggle",bi="offset",wi="position",Ci=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+mi+","+this._config.target+" "+_i+","+this._config.target+" "+yi,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,p(this._scrollElement).on(hi.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bi:wi,o="auto"===this._config.method?t:this._config.method,r=o===wi?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=m.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[p(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){p.removeData(this._element,ri),p(this._scrollElement).off(si),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},li,"object"==typeof t&&t?t:{})).target){var e=p(t.target).attr("id");e||(e=m.getUID(oi),p(t.target).attr("id",e)),t.target="#"+e}return m.typeCheckConfig(oi,t,ci),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=p([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(ui)?(n.closest(vi).find(Ei).addClass(fi),n.addClass(fi)):(n.addClass(fi),n.parents(pi).prev(mi+", "+_i).addClass(fi),n.parents(pi).prev(gi).children(mi).addClass(fi)),p(this._scrollElement).trigger(hi.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(fi)}).forEach(function(t){return t.classList.remove(fi)})},n._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(ri);if(t||(t=new n(this,"object"==typeof e&&e),p(this).data(ri,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return li}}]),n}();p(window).on(hi.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(di)),e=t.length;e--;){var n=p(t[e]);Ci._jQueryInterface.call(n,n.data())}}),p.fn[oi]=Ci._jQueryInterface,p.fn[oi].Constructor=Ci,p.fn[oi].noConflict=function(){return p.fn[oi]=ai,Ci._jQueryInterface};var Ti="bs.tab",Si="."+Ti,Di=p.fn.tab,Ii={HIDE:"hide"+Si,HIDDEN:"hidden"+Si,SHOW:"show"+Si,SHOWN:"shown"+Si,CLICK_DATA_API:"click"+Si+".data-api"},Ai="dropdown-menu",Oi="active",Ni="disabled",ki="fade",Li="show",xi=".dropdown",Pi=".nav, .list-group",Hi=".active",ji="> li > .active",Ri='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Fi=".dropdown-toggle",Mi="> .dropdown-menu .active",Wi=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&p(this._element).hasClass(Oi)||p(this._element).hasClass(Ni))){var t,i,e=p(this._element).closest(Pi)[0],o=m.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?ji:Hi;i=(i=p.makeArray(p(e).find(r)))[i.length-1]}var s=p.Event(Ii.HIDE,{relatedTarget:this._element}),a=p.Event(Ii.SHOW,{relatedTarget:i});if(i&&p(i).trigger(s),p(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=p.Event(Ii.HIDDEN,{relatedTarget:n._element}),e=p.Event(Ii.SHOWN,{relatedTarget:i});p(i).trigger(t),p(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){p.removeData(this._element,Ti),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?p(e).children(Hi):p(e).find(ji))[0],r=n&&o&&p(o).hasClass(ki),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=m.getTransitionDurationFromElement(o);p(o).removeClass(Li).one(m.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){p(e).removeClass(Oi);var i=p(e.parentNode).find(Mi)[0];i&&p(i).removeClass(Oi),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(p(t).addClass(Oi),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),m.reflow(t),t.classList.contains(ki)&&t.classList.add(Li),t.parentNode&&p(t.parentNode).hasClass(Ai)){var o=p(t).closest(xi)[0];if(o){var r=[].slice.call(o.querySelectorAll(Fi));p(r).addClass(Oi)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(Ti);if(e||(e=new i(this),t.data(Ti,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();p(document).on(Ii.CLICK_DATA_API,Ri,function(t){t.preventDefault(),Wi._jQueryInterface.call(p(this),"show")}),p.fn.tab=Wi._jQueryInterface,p.fn.tab.Constructor=Wi,p.fn.tab.noConflict=function(){return p.fn.tab=Di,Wi._jQueryInterface};var Ui="toast",Bi="bs.toast",qi="."+Bi,Ki=p.fn[Ui],Qi={CLICK_DISMISS:"click.dismiss"+qi,HIDE:"hide"+qi,HIDDEN:"hidden"+qi,SHOW:"show"+qi,SHOWN:"shown"+qi},Vi="fade",Yi="hide",zi="show",Xi="showing",Gi={animation:"boolean",autohide:"boolean",delay:"number"},$i={animation:!0,autohide:!0,delay:500},Ji='[data-dismiss="toast"]',Zi=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;p(this._element).trigger(Qi.SHOW),this._config.animation&&this._element.classList.add(Vi);var e=function(){t._element.classList.remove(Xi),t._element.classList.add(zi),p(t._element).trigger(Qi.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove(Yi),this._element.classList.add(Xi),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(zi)&&(p(this._element).trigger(Qi.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(zi)&&this._element.classList.remove(zi),p(this._element).off(Qi.CLICK_DISMISS),p.removeData(this._element,Bi),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},$i,p(this._element).data(),"object"==typeof t&&t?t:{}),m.typeCheckConfig(Ui,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;p(this._element).on(Qi.CLICK_DISMISS,Ji,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add(Yi),p(t._element).trigger(Qi.HIDDEN)};if(this._element.classList.remove(zi),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(Bi);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bi,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Gi}},{key:"Default",get:function(){return $i}}]),i}();p.fn[Ui]=Zi._jQueryInterface,p.fn[Ui].Constructor=Zi,p.fn[Ui].noConflict=function(){return p.fn[Ui]=Ki,Zi._jQueryInterface},function(){if("undefined"==typeof p)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=p.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=m,t.Alert=g,t.Button=k,t.Carousel=at,t.Collapse=Ct,t.Dropdown=Xe,t.Modal=gn,t.Popover=ii,t.Scrollspy=Ci,t.Tab=Wi,t.Toast=Zi,t.Tooltip=qn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});


/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.1.4
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function t(e,i,a){function o(r,s){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(n)return n(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var d=i[r]={exports:{}};e[r][0].call(d.exports,function(t){var i=e[r][1][t];return o(i?i:t)},d,d.exports,t,e,i,a)}return i[r].exports}for(var n="function"==typeof require&&require,r=0;r<a.length;r++)o(a[r]);return o}({1:[function(t,e,i){},{}],2:[function(t,e,i){function a(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,i=/^#([a-fA-F0-9]{6})$/,a=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,o=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,n=/(\w+)/,r=[0,0,0],s=1,l=t.match(e);if(l){l=l[1];for(var h=0;h<r.length;h++)r[h]=parseInt(l[h]+l[h],16)}else if(l=t.match(i)){l=l[1];for(var h=0;h<r.length;h++)r[h]=parseInt(l.slice(2*h,2*h+2),16)}else if(l=t.match(a)){for(var h=0;h<r.length;h++)r[h]=parseInt(l[h+1]);s=parseFloat(l[4])}else if(l=t.match(o)){for(var h=0;h<r.length;h++)r[h]=Math.round(2.55*parseFloat(l[h+1]));s=parseFloat(l[4])}else if(l=t.match(n)){if("transparent"==l[1])return[0,0,0,0];if(r=y[l[1]],!r)return}for(var h=0;h<r.length;h++)r[h]=v(r[h],0,255);return s=s||0==s?v(s,0,1):1,r[3]=s,r}}function o(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,i=t.match(e);if(i){var a=parseFloat(i[4]),o=v(parseInt(i[1]),0,360),n=v(parseFloat(i[2]),0,100),r=v(parseFloat(i[3]),0,100),s=v(isNaN(a)?1:a,0,1);return[o,n,r,s]}}}function n(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,i=t.match(e);if(i){var a=parseFloat(i[4]),o=v(parseInt(i[1]),0,360),n=v(parseFloat(i[2]),0,100),r=v(parseFloat(i[3]),0,100),s=v(isNaN(a)?1:a,0,1);return[o,n,r,s]}}}function r(t){var e=a(t);return e&&e.slice(0,3)}function s(t){var e=o(t);return e&&e.slice(0,3)}function l(t){var e=a(t);return e?e[3]:(e=o(t))?e[3]:(e=n(t))?e[3]:void 0}function h(t){return"#"+x(t[0])+x(t[1])+x(t[2])}function d(t,e){return 1>e||t[3]&&t[3]<1?c(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function u(t,e){if(1>e||t[3]&&t[3]<1)return f(t,e);var i=Math.round(t[0]/255*100),a=Math.round(t[1]/255*100),o=Math.round(t[2]/255*100);return"rgb("+i+"%, "+a+"%, "+o+"%)"}function f(t,e){var i=Math.round(t[0]/255*100),a=Math.round(t[1]/255*100),o=Math.round(t[2]/255*100);return"rgba("+i+"%, "+a+"%, "+o+"%, "+(e||t[3]||1)+")"}function g(t,e){return 1>e||t[3]&&t[3]<1?p(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function b(t){return k[t.slice(0,3)]}function v(t,e,i){return Math.min(Math.max(e,t),i)}function x(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var y=t("color-name");e.exports={getRgba:a,getHsla:o,getRgb:r,getHsl:s,getHwb:n,getAlpha:l,hexString:h,rgbString:d,rgbaString:c,percentString:u,percentaString:f,hslString:g,hslaString:p,hwbString:m,keyword:b};var k={};for(var S in y)k[y[S]]=S},{"color-name":6}],3:[function(t,e,i){var a=t("color-convert"),o=t("chartjs-color-string"),n=function(t){if(t instanceof n)return t;if(!(this instanceof n))return new n(t);this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;if("string"==typeof t)if(e=o.getRgba(t))this.setValues("rgb",e);else if(e=o.getHsla(t))this.setValues("hsl",e);else{if(!(e=o.getHwb(t)))throw new Error('Unable to parse color from string "'+t+'"');this.setValues("hwb",e)}else if("object"==typeof t)if(e=t,void 0!==e.r||void 0!==e.red)this.setValues("rgb",e);else if(void 0!==e.l||void 0!==e.lightness)this.setValues("hsl",e);else if(void 0!==e.v||void 0!==e.value)this.setValues("hsv",e);else if(void 0!==e.w||void 0!==e.whiteness)this.setValues("hwb",e);else{if(void 0===e.c&&void 0===e.cyan)throw new Error("Unable to parse color from object "+JSON.stringify(t));this.setValues("cmyk",e)}};n.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=0>t?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return o.hexString(this.values.rgb)},rgbString:function(){return o.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return o.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return o.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return o.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return o.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return o.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return o.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var a=t[i]/255;e[i]=.03928>=a?a/12.92:Math.pow((a+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return 128>e},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;3>e;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=0>i?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=this,a=t,o=void 0===e?.5:e,n=2*o-1,r=i.alpha()-a.alpha(),s=((n*r===-1?n:(n+r)/(1+n*r))+1)/2,l=1-s;return this.rgb(s*i.red()+l*a.red(),s*i.green()+l*a.green(),s*i.blue()+l*a.blue()).alpha(i.alpha()*o+a.alpha()*(1-o))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new n,a=this.values,o=i.values;for(var r in a)a.hasOwnProperty(r)&&(t=a[r],e={}.toString.call(t),"[object Array]"===e?o[r]=t.slice(0):"[object Number]"===e?o[r]=t:console.error("unexpected color value:",t));return i}},n.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},n.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},n.prototype.getValues=function(t){for(var e=this.values,i={},a=0;a<t.length;a++)i[t.charAt(a)]=e[t][a];return 1!==e.alpha&&(i.a=e.alpha),i},n.prototype.setValues=function(t,e){var i,o=this.values,n=this.spaces,r=this.maxes,s=1;if("alpha"===t)s=e;else if(e.length)o[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)o[t][i]=e[t.charAt(i)];s=e.a}else if(void 0!==e[n[t][0]]){var l=n[t];for(i=0;i<t.length;i++)o[t][i]=e[l[i]];s=e.alpha}if(o.alpha=Math.max(0,Math.min(1,void 0===s?o.alpha:s)),"alpha"===t)return!1;var h;for(i=0;i<t.length;i++)h=Math.max(0,Math.min(r[t][i],o[t][i])),o[t][i]=Math.round(h);for(var d in n)d!==t&&(o[d]=a[t][d](o[t]));return!0},n.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},n.prototype.setChannel=function(t,e,i){var a=this.values[t];return void 0===i?a[e]:i===a[e]?this:(a[e]=i,this.setValues(t,a),this)},"undefined"!=typeof window&&(window.Color=n),e.exports=n},{"chartjs-color-string":2,"color-convert":5}],4:[function(t,e,i){function a(t){var e,i,a,o=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.min(o,n,r),l=Math.max(o,n,r),h=l-s;return l==s?e=0:o==l?e=(n-r)/h:n==l?e=2+(r-o)/h:r==l&&(e=4+(o-n)/h),e=Math.min(60*e,360),0>e&&(e+=360),a=(s+l)/2,i=l==s?0:.5>=a?h/(l+s):h/(2-l-s),[e,100*i,100*a]}function o(t){var e,i,a,o=t[0],n=t[1],r=t[2],s=Math.min(o,n,r),l=Math.max(o,n,r),h=l-s;return i=0==l?0:h/l*1e3/10,l==s?e=0:o==l?e=(n-r)/h:n==l?e=2+(r-o)/h:r==l&&(e=4+(o-n)/h),e=Math.min(60*e,360),0>e&&(e+=360),a=l/255*1e3/10,[e,i,a]}function n(t){var e=t[0],i=t[1],o=t[2],n=a(t)[0],r=1/255*Math.min(e,Math.min(i,o)),o=1-1/255*Math.max(e,Math.max(i,o));return[n,100*r,100*o]}function s(t){var e,i,a,o,n=t[0]/255,r=t[1]/255,s=t[2]/255;return o=Math.min(1-n,1-r,1-s),e=(1-n-o)/(1-o)||0,i=(1-r-o)/(1-o)||0,a=(1-s-o)/(1-o)||0,[100*e,100*i,100*a,100*o]}function l(t){return G[JSON.stringify(t)]}function h(t){var e=t[0]/255,i=t[1]/255,a=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92,a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92;var o=.4124*e+.3576*i+.1805*a,n=.2126*e+.7152*i+.0722*a,r=.0193*e+.1192*i+.9505*a;return[100*o,100*n,100*r]}function d(t){var e,i,a,o=h(t),n=o[0],r=o[1],s=o[2];return n/=95.047,r/=100,s/=108.883,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,e=116*r-16,i=500*(n-r),a=200*(r-s),[e,i,a]}function c(t){return B(d(t))}function u(t){var e,i,a,o,n,r=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return n=255*l,[n,n,n];i=.5>l?l*(1+s):l+s-l*s,e=2*l-i,o=[0,0,0];for(var h=0;3>h;h++)a=r+1/3*-(h-1),0>a&&a++,a>1&&a--,n=1>6*a?e+6*(i-e)*a:1>2*a?i:2>3*a?e+(i-e)*(2/3-a)*6:e,o[h]=255*n;return o}function f(t){var e,i,a=t[0],o=t[1]/100,n=t[2]/100;return 0===n?[0,0,0]:(n*=2,o*=1>=n?n:2-n,i=(n+o)/2,e=2*o/(n+o),[a,100*e,100*i])}function p(t){return n(u(t))}function m(t){return s(u(t))}function v(t){return l(u(t))}function x(t){var e=t[0]/60,i=t[1]/100,a=t[2]/100,o=Math.floor(e)%6,n=e-Math.floor(e),r=255*a*(1-i),s=255*a*(1-i*n),l=255*a*(1-i*(1-n)),a=255*a;switch(o){case 0:return[a,l,r];case 1:return[s,a,r];case 2:return[r,a,l];case 3:return[r,s,a];case 4:return[l,r,a];case 5:return[a,r,s]}}function y(t){var e,i,a=t[0],o=t[1]/100,n=t[2]/100;return i=(2-o)*n,e=o*n,e/=1>=i?i:2-i,e=e||0,i/=2,[a,100*e,100*i]}function k(t){return n(x(t))}function S(t){return s(x(t))}function C(t){return l(x(t))}function w(t){var e,i,a,o,n=t[0]/360,s=t[1]/100,l=t[2]/100,h=s+l;switch(h>1&&(s/=h,l/=h),e=Math.floor(6*n),i=1-l,a=6*n-e,0!=(1&e)&&(a=1-a),o=s+a*(i-s),e){default:case 6:case 0:r=i,g=o,b=s;break;case 1:r=o,g=i,b=s;break;case 2:r=s,g=i,b=o;break;case 3:r=s,g=o,b=i;break;case 4:r=o,g=s,b=i;break;case 5:r=i,g=s,b=o}return[255*r,255*g,255*b]}function M(t){return a(w(t))}function D(t){return o(w(t))}function A(t){return s(w(t))}function I(t){return l(w(t))}function F(t){var e,i,a,o=t[0]/100,n=t[1]/100,r=t[2]/100,s=t[3]/100;return e=1-Math.min(1,o*(1-s)+s),i=1-Math.min(1,n*(1-s)+s),a=1-Math.min(1,r*(1-s)+s),[255*e,255*i,255*a]}function _(t){return a(F(t))}function P(t){return o(F(t))}function T(t){return n(F(t))}function V(t){return l(F(t))}function R(t){var e,i,a,o=t[0]/100,n=t[1]/100,r=t[2]/100;return e=3.2406*o+-1.5372*n+r*-.4986,i=o*-.9689+1.8758*n+.0415*r,a=.0557*o+n*-.204+1.057*r,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e=12.92*e,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=12.92*i,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=12.92*a,e=Math.min(Math.max(0,e),1),i=Math.min(Math.max(0,i),1),a=Math.min(Math.max(0,a),1),[255*e,255*i,255*a]}function O(t){var e,i,a,o=t[0],n=t[1],r=t[2];return o/=95.047,n/=100,r/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=116*n-16,i=500*(o-n),a=200*(n-r),[e,i,a]}function W(t){return B(O(t))}function L(t){var e,i,a,o,n=t[0],r=t[1],s=t[2];return 8>=n?(i=100*n/903.3,o=7.787*(i/100)+16/116):(i=100*Math.pow((n+16)/116,3),o=Math.pow(i/100,1/3)),e=.008856>=e/95.047?e=95.047*(r/500+o-16/116)/7.787:95.047*Math.pow(r/500+o,3),a=.008859>=a/108.883?a=108.883*(o-s/200-16/116)/7.787:108.883*Math.pow(o-s/200,3),[e,i,a]}function B(t){var e,i,a,o=t[0],n=t[1],r=t[2];return e=Math.atan2(r,n),i=360*e/2/Math.PI,0>i&&(i+=360),a=Math.sqrt(n*n+r*r),[o,a,i]}function z(t){return R(L(t))}function H(t){var e,i,a,o=t[0],n=t[1],r=t[2];return a=r/360*2*Math.PI,e=n*Math.cos(a),i=n*Math.sin(a),[o,e,i]}function N(t){return L(H(t))}function E(t){return z(H(t))}function U(t){return Q[t]}function j(t){return a(U(t))}function q(t){return o(U(t))}function Y(t){return n(U(t))}function J(t){return s(U(t))}function Z(t){return d(U(t))}function X(t){return h(U(t))}e.exports={rgb2hsl:a,rgb2hsv:o,rgb2hwb:n,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:h,rgb2lab:d,rgb2lch:c,hsl2rgb:u,hsl2hsv:f,hsl2hwb:p,hsl2cmyk:m,hsl2keyword:v,hsv2rgb:x,hsv2hsl:y,hsv2hwb:k,hsv2cmyk:S,hsv2keyword:C,hwb2rgb:w,hwb2hsl:M,hwb2hsv:D,hwb2cmyk:A,hwb2keyword:I,cmyk2rgb:F,cmyk2hsl:_,cmyk2hsv:P,cmyk2hwb:T,cmyk2keyword:V,keyword2rgb:U,keyword2hsl:j,keyword2hsv:q,keyword2hwb:Y,keyword2cmyk:J,keyword2lab:Z,keyword2xyz:X,xyz2rgb:R,xyz2lab:O,xyz2lch:W,lab2xyz:L,lab2rgb:z,lab2lch:B,lch2lab:H,lch2xyz:N,lch2rgb:E};var Q={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},G={};for(var $ in Q)G[JSON.stringify(Q[$])]=$},{}],5:[function(t,e,i){var a=t("./conversions"),o=function(){return new h};for(var n in a){o[n+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),a[t](e)}}(n);var r=/(\w+)2(\w+)/.exec(n),s=r[1],l=r[2];o[s]=o[s]||{},o[s][l]=o[n]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var i=a[t](e);if("string"==typeof i||void 0===i)return i;for(var o=0;o<i.length;o++)i[o]=Math.round(i[o]);return i}}(n)}var h=function(){this.convs={}};h.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},h.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},h.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,a=this.convs[i];e=o[i][t](a),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){h.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=o},{"./conversions":4}],6:[function(t,e,i){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,i){var a=t("./core/core.js")();t("./core/core.helpers")(a),t("./core/core.element")(a),t("./core/core.animation")(a),t("./core/core.controller")(a),t("./core/core.datasetController")(a),t("./core/core.layoutService")(a),t("./core/core.legend")(a),t("./core/core.plugin.js")(a),t("./core/core.scale")(a),t("./core/core.scaleService")(a),t("./core/core.title")(a),t("./core/core.tooltip")(a),t("./elements/element.arc")(a),t("./elements/element.line")(a),t("./elements/element.point")(a),t("./elements/element.rectangle")(a),t("./scales/scale.category")(a),t("./scales/scale.linear")(a),t("./scales/scale.logarithmic")(a),t("./scales/scale.radialLinear")(a),t("./scales/scale.time")(a),t("./controllers/controller.bar")(a),t("./controllers/controller.bubble")(a),t("./controllers/controller.doughnut")(a),t("./controllers/controller.line")(a),t("./controllers/controller.polarArea")(a),t("./controllers/controller.radar")(a),t("./charts/Chart.Bar")(a),t("./charts/Chart.Bubble")(a),t("./charts/Chart.Doughnut")(a),t("./charts/Chart.Line")(a),t("./charts/Chart.PolarArea")(a),t("./charts/Chart.Radar")(a),t("./charts/Chart.Scatter")(a),window.Chart=e.exports=a},{"./charts/Chart.Bar":8,"./charts/Chart.Bubble":9,"./charts/Chart.Doughnut":10,"./charts/Chart.Line":11,"./charts/Chart.PolarArea":12,"./charts/Chart.Radar":13,"./charts/Chart.Scatter":14,"./controllers/controller.bar":15,"./controllers/controller.bubble":16,"./controllers/controller.doughnut":17,"./controllers/controller.line":18,"./controllers/controller.polarArea":19,"./controllers/controller.radar":20,"./core/core.animation":21,"./core/core.controller":22,"./core/core.datasetController":23,"./core/core.element":24,"./core/core.helpers":25,"./core/core.js":26,"./core/core.layoutService":27,"./core/core.legend":28,"./core/core.plugin.js":29,"./core/core.scale":30,"./core/core.scaleService":31,"./core/core.title":32,"./core/core.tooltip":33,"./elements/element.arc":34,"./elements/element.line":35,"./elements/element.point":36,"./elements/element.rectangle":37,"./scales/scale.category":38,"./scales/scale.linear":39,"./scales/scale.logarithmic":40,"./scales/scale.radialLinear":41,"./scales/scale.time":42}],8:[function(t,e,i){"use strict";e.exports=function(t){t.Bar=function(e,i){return i.type="bar",new t(e,i)}}},{}],9:[function(t,e,i){"use strict";e.exports=function(t){t.Bubble=function(e,i){return i.type="bubble",new t(e,i)}}},{}],10:[function(t,e,i){"use strict";e.exports=function(t){t.Doughnut=function(e,i){return i.type="doughnut",new t(e,i)}}},{}],11:[function(t,e,i){"use strict";e.exports=function(t){t.Line=function(e,i){return i.type="line",new t(e,i)}}},{}],12:[function(t,e,i){"use strict";e.exports=function(t){t.PolarArea=function(e,i){return i.type="polarArea",new t(e,i)}}},{}],13:[function(t,e,i){"use strict";e.exports=function(t){t.Radar=function(e,i){return i.options=t.helpers.configMerge({aspectRatio:1},i.options),i.type="radar",new t(e,i)}}},{}],14:[function(t,e,i){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(t,e){return""},label:function(t,e){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,i){return i.type="scatter",new t(e,i)}}},{}],15:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(e,i){t.DatasetController.prototype.initialize.call(this,e,i),this.getMeta().bar=!0},getBarCount:function(){var t=0;return e.each(this.chart.data.datasets,function(e,i){var a=this.chart.getDatasetMeta(i);a.bar&&this.chart.isDatasetVisible(i)&&++t},this),t},update:function(t){e.each(this.getMeta().data,function(e,i){this.updateElement(e,i,t)},this)},updateElement:function(t,i,a){var o=this.getMeta(),n=this.getScaleForId(o.xAxisID),r=this.getScaleForId(o.yAxisID),s=r.getBasePixel(),l=this.chart.options.elements.rectangle,h=t.custom||{},d=this.getDataset();e.extend(t,{_xScale:n,_yScale:r,_datasetIndex:this.index,_index:i,_model:{x:this.calculateBarX(i,this.index),y:a?s:this.calculateBarY(i,this.index),label:this.chart.data.labels[i],datasetLabel:d.label,base:a?s:this.calculateBarBase(this.index,i),width:this.calculateBarWidth(i),backgroundColor:h.backgroundColor?h.backgroundColor:e.getValueAtIndexOrDefault(d.backgroundColor,i,l.backgroundColor),borderSkipped:h.borderSkipped?h.borderSkipped:l.borderSkipped,borderColor:h.borderColor?h.borderColor:e.getValueAtIndexOrDefault(d.borderColor,i,l.borderColor),borderWidth:h.borderWidth?h.borderWidth:e.getValueAtIndexOrDefault(d.borderWidth,i,l.borderWidth)}}),t.pivot()},calculateBarBase:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.yAxisID),o=0;if(a.options.stacked){var n=this.chart,r=n.data.datasets,s=r[t].data[e];if(0>s)for(var l=0;t>l;l++){var h=r[l],d=n.getDatasetMeta(l);d.bar&&d.yAxisID===a.id&&n.isDatasetVisible(l)&&(o+=h.data[e]<0?h.data[e]:0)}else for(var c=0;t>c;c++){var u=r[c],f=n.getDatasetMeta(c);f.bar&&f.yAxisID===a.id&&n.isDatasetVisible(c)&&(o+=u.data[e]>0?u.data[e]:0)}return a.getPixelForValue(o)}return a.getBasePixel()},getRuler:function(t){var e,i=this.getMeta(),a=this.getScaleForId(i.xAxisID),o=this.getBarCount();e="category"===a.options.type?a.getPixelForTick(t+1)-a.getPixelForTick(t):a.width/a.ticks.length;var n=e*a.options.categoryPercentage,r=(e-e*a.options.categoryPercentage)/2,s=n/o;if(a.ticks.length!==this.chart.data.labels.length){var l=a.ticks.length/this.chart.data.labels.length;s*=l}var h=s*a.options.barPercentage,d=s-s*a.options.barPercentage;return{datasetCount:o,tickWidth:e,categoryWidth:n,categorySpacing:r,fullBarWidth:s,barWidth:h,barSpacing:d}},calculateBarWidth:function(t){var e=this.getScaleForId(this.getMeta().xAxisID),i=this.getRuler(t);return e.options.stacked?i.categoryWidth:i.barWidth},getBarIndex:function(t){var e,i,a=0;for(i=0;t>i;++i)e=this.chart.getDatasetMeta(i),e.bar&&this.chart.isDatasetVisible(i)&&++a;return a},calculateBarX:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.xAxisID),o=this.getBarIndex(e),n=this.getRuler(t),r=a.getPixelForValue(null,t,e,this.chart.isCombo);return r-=this.chart.isCombo?n.tickWidth/2:0,a.options.stacked?r+n.categoryWidth/2+n.categorySpacing:r+n.barWidth/2+n.categorySpacing+n.barWidth*o+n.barSpacing/2+n.barSpacing*o},calculateBarY:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.yAxisID),o=this.getDataset().data[t];if(a.options.stacked){for(var n=0,r=0,s=0;e>s;s++){var l=this.chart.data.datasets[s],h=this.chart.getDatasetMeta(s);h.bar&&h.yAxisID===a.id&&this.chart.isDatasetVisible(s)&&(l.data[t]<0?r+=l.data[t]||0:n+=l.data[t]||0)}return 0>o?a.getPixelForValue(r+o):a.getPixelForValue(n+o)}return a.getPixelForValue(o)},draw:function(t){var i=t||1;e.each(this.getMeta().data,function(t,e){var a=this.getDataset().data[e];null===a||void 0===a||isNaN(a)||t.transition(i).draw()},this)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},n=t._model;n.backgroundColor=o.hoverBackgroundColor?o.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.hoverBackgroundColor,a,e.getHoverColor(n.backgroundColor)),n.borderColor=o.hoverBorderColor?o.hoverBorderColor:e.getValueAtIndexOrDefault(i.hoverBorderColor,a,e.getHoverColor(n.borderColor)),n.borderWidth=o.hoverBorderWidth?o.hoverBorderWidth:e.getValueAtIndexOrDefault(i.hoverBorderWidth,a,n.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},n=t._model,r=this.chart.options.elements.rectangle;n.backgroundColor=o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(i.backgroundColor,a,r.backgroundColor),n.borderColor=o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(i.borderColor,a,r.borderColor),n.borderWidth=o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(i.borderWidth,a,r.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var i="";return t.length>0&&(t[0].yLabel?i=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({updateElement:function(t,i,a,o){var n=this.getMeta(),r=this.getScaleForId(n.xAxisID),s=this.getScaleForId(n.yAxisID),l=r.getBasePixel(),h=t.custom||{},d=this.getDataset(),c=this.chart.options.elements.rectangle;
e.extend(t,{_xScale:r,_yScale:s,_datasetIndex:this.index,_index:i,_model:{x:a?l:this.calculateBarX(i,this.index),y:this.calculateBarY(i,this.index),label:this.chart.data.labels[i],datasetLabel:d.label,base:a?l:this.calculateBarBase(this.index,i),height:this.calculateBarHeight(i),backgroundColor:h.backgroundColor?h.backgroundColor:e.getValueAtIndexOrDefault(d.backgroundColor,i,c.backgroundColor),borderSkipped:h.borderSkipped?h.borderSkipped:c.borderSkipped,borderColor:h.borderColor?h.borderColor:e.getValueAtIndexOrDefault(d.borderColor,i,c.borderColor),borderWidth:h.borderWidth?h.borderWidth:e.getValueAtIndexOrDefault(d.borderWidth,i,c.borderWidth)},draw:function(){function t(t){return l[(d+t)%4]}var e=this._chart.ctx,i=this._view,a=i.height/2,o=i.y-a,n=i.y+a,r=i.base-(i.base-i.x),s=i.borderWidth/2;i.borderWidth&&(o+=s,n-=s,r+=s),e.beginPath(),e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth;var l=[[i.base,n],[i.base,o],[r,o],[r,n]],h=["bottom","left","top","right"],d=h.indexOf(i.borderSkipped,0);-1===d&&(d=0),e.moveTo.apply(e,t(0));for(var c=1;4>c;c++)e.lineTo.apply(e,t(c));e.fill(),i.borderWidth&&e.stroke()},inRange:function(t,e){var i=this._view,a=!1;return i&&(a=i.x<i.base?e>=i.y-i.height/2&&e<=i.y+i.height/2&&t>=i.x&&t<=i.base:e>=i.y-i.height/2&&e<=i.y+i.height/2&&t>=i.base&&t<=i.x),a}}),t.pivot()},calculateBarBase:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.xAxisID),o=0;if(a.options.stacked){var n=this.chart.data.datasets[t].data[e];if(0>n)for(var r=0;t>r;r++){var s=this.chart.data.datasets[r],l=this.chart.getDatasetMeta(r);l.bar&&l.xAxisID===a.id&&this.chart.isDatasetVisible(r)&&(o+=s.data[e]<0?s.data[e]:0)}else for(var h=0;t>h;h++){var d=this.chart.data.datasets[h],c=this.chart.getDatasetMeta(h);c.bar&&c.xAxisID===a.id&&this.chart.isDatasetVisible(h)&&(o+=d.data[e]>0?d.data[e]:0)}return a.getPixelForValue(o)}return a.getBasePixel()},getRuler:function(t){var e,i=this.getMeta(),a=this.getScaleForId(i.yAxisID),o=this.getBarCount();e="category"===a.options.type?a.getPixelForTick(t+1)-a.getPixelForTick(t):a.width/a.ticks.length;var n=e*a.options.categoryPercentage,r=(e-e*a.options.categoryPercentage)/2,s=n/o;if(a.ticks.length!==this.chart.data.labels.length){var l=a.ticks.length/this.chart.data.labels.length;s*=l}var h=s*a.options.barPercentage,d=s-s*a.options.barPercentage;return{datasetCount:o,tickHeight:e,categoryHeight:n,categorySpacing:r,fullBarHeight:s,barHeight:h,barSpacing:d}},calculateBarHeight:function(t){var e=this.getScaleForId(this.getMeta().yAxisID),i=this.getRuler(t);return e.options.stacked?i.categoryHeight:i.barHeight},calculateBarX:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.xAxisID),o=this.getDataset().data[t];if(a.options.stacked){for(var n=0,r=0,s=0;e>s;s++){var l=this.chart.data.datasets[s],h=this.chart.getDatasetMeta(s);h.bar&&h.xAxisID===a.id&&this.chart.isDatasetVisible(s)&&(l.data[t]<0?r+=l.data[t]||0:n+=l.data[t]||0)}return 0>o?a.getPixelForValue(r+o):a.getPixelForValue(n+o)}return a.getPixelForValue(o)},calculateBarY:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.yAxisID),o=this.getBarIndex(e),n=this.getRuler(t),r=a.getPixelForValue(null,t,e,this.chart.isCombo);return r-=this.chart.isCombo?n.tickHeight/2:0,a.options.stacked?r+n.categoryHeight/2+n.categorySpacing:r+n.barHeight/2+n.categorySpacing+n.barHeight*o+n.barSpacing/2+n.barSpacing*o}})}},{}],16:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(t,e){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",a=e.datasets[t.datasetIndex].data[t.index];return i+": ("+a.x+", "+a.y+", "+a.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var i=this.getMeta(),a=i.data;e.each(a,function(e,i){this.updateElement(e,i,t)},this)},updateElement:function(t,i,a){var o=this.getMeta(),n=this.getScaleForId(o.xAxisID),r=this.getScaleForId(o.yAxisID),s=t.custom||{},l=this.getDataset(),h=l.data[i],d=this.chart.options.elements.point;e.extend(t,{_xScale:n,_yScale:r,_datasetIndex:this.index,_index:i,_model:{x:a?n.getPixelForDecimal(.5):n.getPixelForValue(h,i,this.index,this.chart.isCombo),y:a?r.getBasePixel():r.getPixelForValue(h,i,this.index),radius:a?0:s.radius?s.radius:this.getRadius(h),backgroundColor:s.backgroundColor?s.backgroundColor:e.getValueAtIndexOrDefault(l.backgroundColor,i,d.backgroundColor),borderColor:s.borderColor?s.borderColor:e.getValueAtIndexOrDefault(l.borderColor,i,d.borderColor),borderWidth:s.borderWidth?s.borderWidth:e.getValueAtIndexOrDefault(l.borderWidth,i,d.borderWidth),hitRadius:s.hitRadius?s.hitRadius:e.getValueAtIndexOrDefault(l.hitRadius,i,d.hitRadius)}});var c=t._model;c.skip=s.skip?s.skip:isNaN(c.x)||isNaN(c.y),t.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},n=t._model;n.radius=o.hoverRadius?o.hoverRadius:e.getValueAtIndexOrDefault(i.hoverRadius,a,this.chart.options.elements.point.hoverRadius)+this.getRadius(this.getDataset().data[t._index]),n.backgroundColor=o.hoverBackgroundColor?o.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.hoverBackgroundColor,a,e.getHoverColor(n.backgroundColor)),n.borderColor=o.hoverBorderColor?o.hoverBorderColor:e.getValueAtIndexOrDefault(i.hoverBorderColor,a,e.getHoverColor(n.borderColor)),n.borderWidth=o.hoverBorderWidth?o.hoverBorderWidth:e.getValueAtIndexOrDefault(i.hoverBorderWidth,a,n.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},n=t._model,r=this.chart.options.elements.point;n.radius=o.radius?o.radius:this.getRadius(i.data[t._index]),n.backgroundColor=o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(i.backgroundColor,a,r.backgroundColor),n.borderColor=o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(i.borderColor,a,r.borderColor),n.borderWidth=o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(i.borderWidth,a,r.borderWidth)}})}},{}],17:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults;i.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,a=i.datasets,o=i.labels;if(a.length)for(var n=0;n<a[0].data.length;++n)e.push('<li><span style="background-color:'+a[0].backgroundColor[n]+'"></span>'),o[n]&&e.push(o[n]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var i=t.data;return i.labels.length&&i.datasets.length?i.labels.map(function(a,o){var n=t.getDatasetMeta(0),r=i.datasets[0],s=n.data[o],l=s.custom||{},h=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:h(r.backgroundColor,o,d.backgroundColor),u=l.borderColor?l.borderColor:h(r.borderColor,o,d.borderColor),f=l.borderWidth?l.borderWidth:h(r.borderWidth,o,d.borderWidth);return{text:a,fillStyle:c,strokeStyle:u,lineWidth:f,hidden:isNaN(r.data[o])||n.data[o].hidden,index:o}}):[]}},onClick:function(t,e){var i,a,o,n=e.index,r=this.chart;for(i=0,a=(r.data.datasets||[]).length;a>i;++i)o=r.getDatasetMeta(i),o.data[n].hidden=!o.data[n].hidden;r.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+e.datasets[t.datasetIndex].data[t.index]}}}},i.pie=e.clone(i.doughnut),e.extend(i.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,i=0;t>i;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var i=this,a=i.chart,o=a.chartArea,n=a.options,r=n.elements.arc,s=o.right-o.left-r.borderWidth,l=o.bottom-o.top-r.borderWidth,h=Math.min(s,l),d={x:0,y:0},c=i.getMeta(),u=n.cutoutPercentage,f=n.circumference;if(f<2*Math.PI){var g=n.rotation%(2*Math.PI);g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0);var p=g+f,m={x:Math.cos(g),y:Math.sin(g)},b={x:Math.cos(p),y:Math.sin(p)},v=0>=g&&p>=0||g<=2*Math.PI&&2*Math.PI<=p,x=g<=.5*Math.PI&&.5*Math.PI<=p||g<=2.5*Math.PI&&2.5*Math.PI<=p,y=g<=-Math.PI&&-Math.PI<=p||g<=Math.PI&&Math.PI<=p,k=g<=.5*-Math.PI&&.5*-Math.PI<=p||g<=1.5*Math.PI&&1.5*Math.PI<=p,S=u/100,C={x:y?-1:Math.min(m.x*(m.x<0?1:S),b.x*(b.x<0?1:S)),y:k?-1:Math.min(m.y*(m.y<0?1:S),b.y*(b.y<0?1:S))},w={x:v?1:Math.max(m.x*(m.x>0?1:S),b.x*(b.x>0?1:S)),y:x?1:Math.max(m.y*(m.y>0?1:S),b.y*(b.y>0?1:S))},M={width:.5*(w.x-C.x),height:.5*(w.y-C.y)};h=Math.min(s/M.width,l/M.height),d={x:(w.x+C.x)*-.5,y:(w.y+C.y)*-.5}}a.outerRadius=Math.max(h/2,0),a.innerRadius=Math.max(u?a.outerRadius/100*u:1,0),a.radiusLength=(a.outerRadius-a.innerRadius)/a.getVisibleDatasetCount(),a.offsetX=d.x*a.outerRadius,a.offsetY=d.y*a.outerRadius,c.total=i.calculateTotal(),i.outerRadius=a.outerRadius-a.radiusLength*i.getRingIndex(i.index),i.innerRadius=i.outerRadius-a.radiusLength,e.each(c.data,function(e,a){i.updateElement(e,a,t)})},updateElement:function(t,i,a){var o=this,n=o.chart,r=n.chartArea,s=n.options,l=s.animation,h=s.elements.arc,d=(r.left+r.right)/2,c=(r.top+r.bottom)/2,u=s.rotation,f=s.rotation,g=o.getDataset(),p=a&&l.animateRotate?0:t.hidden?0:o.calculateCircumference(g.data[i])*(s.circumference/(2*Math.PI)),m=a&&l.animateScale?0:o.innerRadius,b=a&&l.animateScale?0:o.outerRadius,v=t.custom||{},x=e.getValueAtIndexOrDefault;e.extend(t,{_datasetIndex:o.index,_index:i,_model:{x:d+n.offsetX,y:c+n.offsetY,startAngle:u,endAngle:f,circumference:p,outerRadius:b,innerRadius:m,label:x(g.label,i,n.data.labels[i])}});var y=t._model;y.backgroundColor=v.backgroundColor?v.backgroundColor:x(g.backgroundColor,i,h.backgroundColor),y.hoverBackgroundColor=v.hoverBackgroundColor?v.hoverBackgroundColor:x(g.hoverBackgroundColor,i,h.hoverBackgroundColor),y.borderWidth=v.borderWidth?v.borderWidth:x(g.borderWidth,i,h.borderWidth),y.borderColor=v.borderColor?v.borderColor:x(g.borderColor,i,h.borderColor),a&&l.animateRotate||(0===i?y.startAngle=s.rotation:y.startAngle=o.getMeta().data[i-1]._model.endAngle,y.endAngle=y.startAngle+y.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,i=this.getDataset(),a=this.getMeta(),o=0;return e.each(a.data,function(e,a){t=i.data[a],isNaN(t)||e.hidden||(o+=Math.abs(t))}),o},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0}})}},{}],18:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.line={showLines:!0,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,addElementAndReset:function(e){var i=this,a=i.chart.options;t.DatasetController.prototype.addElementAndReset.call(i,e),a.showLines&&0!==a.elements.line.tension&&i.updateBezierControlPoints()},update:function(t){var i,a,o,n,r=this,s=r.getMeta(),l=s.dataset,h=s.data||[],d=r.chart.options,c=d.elements.line,u=r.getScaleForId(s.yAxisID);for(d.showLines&&(o=r.getDataset(),n=l.custom||{},void 0!==o.tension&&void 0===o.lineTension&&(o.lineTension=o.tension),l._scale=u,l._datasetIndex=r.index,l._children=h,l._model={tension:n.tension?n.tension:e.getValueOrDefault(o.lineTension,c.tension),backgroundColor:n.backgroundColor?n.backgroundColor:o.backgroundColor||c.backgroundColor,borderWidth:n.borderWidth?n.borderWidth:o.borderWidth||c.borderWidth,borderColor:n.borderColor?n.borderColor:o.borderColor||c.borderColor,borderCapStyle:n.borderCapStyle?n.borderCapStyle:o.borderCapStyle||c.borderCapStyle,borderDash:n.borderDash?n.borderDash:o.borderDash||c.borderDash,borderDashOffset:n.borderDashOffset?n.borderDashOffset:o.borderDashOffset||c.borderDashOffset,borderJoinStyle:n.borderJoinStyle?n.borderJoinStyle:o.borderJoinStyle||c.borderJoinStyle,fill:n.fill?n.fill:void 0!==o.fill?o.fill:c.fill,scaleTop:u.top,scaleBottom:u.bottom,scaleZero:u.getBasePixel()},l.pivot()),i=0,a=h.length;a>i;++i)r.updateElement(h[i],i,t);d.showLines&&0!==c.tension&&r.updateBezierControlPoints()},getPointBackgroundColor:function(t,i){var a=this.chart.options.elements.point.backgroundColor,o=this.getDataset(),n=t.custom||{};return n.backgroundColor?a=n.backgroundColor:o.pointBackgroundColor?a=e.getValueAtIndexOrDefault(o.pointBackgroundColor,i,a):o.backgroundColor&&(a=o.backgroundColor),a},getPointBorderColor:function(t,i){var a=this.chart.options.elements.point.borderColor,o=this.getDataset(),n=t.custom||{};return n.borderColor?a=n.borderColor:o.pointBorderColor?a=e.getValueAtIndexOrDefault(o.pointBorderColor,i,a):o.borderColor&&(a=o.borderColor),a},getPointBorderWidth:function(t,i){var a=this.chart.options.elements.point.borderWidth,o=this.getDataset(),n=t.custom||{};return n.borderWidth?a=n.borderWidth:o.pointBorderWidth?a=e.getValueAtIndexOrDefault(o.pointBorderWidth,i,a):o.borderWidth&&(a=o.borderWidth),a},updateElement:function(t,i,a){var o,n,r=this,s=r.getMeta(),l=t.custom||{},h=r.getDataset(),d=r.index,c=h.data[i],u=r.getScaleForId(s.yAxisID),f=r.getScaleForId(s.xAxisID),g=r.chart.options.elements.point;void 0!==h.radius&&void 0===h.pointRadius&&(h.pointRadius=h.radius),void 0!==h.hitRadius&&void 0===h.pointHitRadius&&(h.pointHitRadius=h.hitRadius),o=f.getPixelForValue(c,i,d,r.chart.isCombo),n=a?u.getBasePixel():r.calculatePointY(c,i,d,r.chart.isCombo),t._xScale=f,t._yScale=u,t._datasetIndex=d,t._index=i,t._model={x:o,y:n,skip:l.skip||isNaN(o)||isNaN(n),radius:l.radius||e.getValueAtIndexOrDefault(h.pointRadius,i,g.radius),pointStyle:l.pointStyle||e.getValueAtIndexOrDefault(h.pointStyle,i,g.pointStyle),backgroundColor:r.getPointBackgroundColor(t,i),borderColor:r.getPointBorderColor(t,i),borderWidth:r.getPointBorderWidth(t,i),tension:s.dataset._model?s.dataset._model.tension:0,hitRadius:l.hitRadius||e.getValueAtIndexOrDefault(h.pointHitRadius,i,g.hitRadius)}},calculatePointY:function(t,e,i,a){var o,n,r,s=this,l=s.chart,h=s.getMeta(),d=s.getScaleForId(h.yAxisID),c=0,u=0;if(d.options.stacked){for(o=0;i>o;o++)n=l.data.datasets[o],r=l.getDatasetMeta(o),"line"===r.type&&l.isDatasetVisible(o)&&(n.data[e]<0?u+=n.data[e]||0:c+=n.data[e]||0);return 0>t?d.getPixelForValue(u+t):d.getPixelForValue(c+t)}return d.getPixelForValue(t)},updateBezierControlPoints:function(){var t,i,a,o,n,r=this.getMeta(),s=this.chart.chartArea,l=r.data||[];for(t=0,i=l.length;i>t;++t)a=l[t],o=a._model,n=e.splineCurve(e.previousItem(l,t)._model,o,e.nextItem(l,t)._model,r.dataset._model.tension),o.controlPointPreviousX=Math.max(Math.min(n.previous.x,s.right),s.left),o.controlPointPreviousY=Math.max(Math.min(n.previous.y,s.bottom),s.top),o.controlPointNextX=Math.max(Math.min(n.next.x,s.right),s.left),o.controlPointNextY=Math.max(Math.min(n.next.y,s.bottom),s.top),a.pivot()},draw:function(t){var e,i,a=this.getMeta(),o=a.data||[],n=t||1;for(e=0,i=o.length;i>e;++e)o[e].transition(n);for(this.chart.options.showLines&&a.dataset.transition(n).draw(),e=0,i=o.length;i>e;++e)o[e].draw()},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},n=t._model;n.radius=o.hoverRadius||e.getValueAtIndexOrDefault(i.pointHoverRadius,a,this.chart.options.elements.point.hoverRadius),n.backgroundColor=o.hoverBackgroundColor||e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor,a,e.getHoverColor(n.backgroundColor)),n.borderColor=o.hoverBorderColor||e.getValueAtIndexOrDefault(i.pointHoverBorderColor,a,e.getHoverColor(n.borderColor)),n.borderWidth=o.hoverBorderWidth||e.getValueAtIndexOrDefault(i.pointHoverBorderWidth,a,n.borderWidth)},removeHoverStyle:function(t){var i=this,a=i.chart.data.datasets[t._datasetIndex],o=t._index,n=t.custom||{},r=t._model;void 0!==a.radius&&void 0===a.pointRadius&&(a.pointRadius=a.radius),r.radius=n.radius||e.getValueAtIndexOrDefault(a.pointRadius,o,i.chart.options.elements.point.radius),r.backgroundColor=i.getPointBackgroundColor(t,o),r.borderColor=i.getPointBorderColor(t,o),r.borderWidth=i.getPointBorderWidth(t,o)}})}},{}],19:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",lineArc:!0},animation:{animateRotate:!0,animateScale:!0},aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,a=i.datasets,o=i.labels;if(a.length)for(var n=0;n<a[0].data.length;++n)e.push('<li><span style="background-color:'+a[0].backgroundColor[n]+'">'),o[n]&&e.push(o[n]),e.push("</span></li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var i=t.data;return i.labels.length&&i.datasets.length?i.labels.map(function(a,o){var n=t.getDatasetMeta(0),r=i.datasets[0],s=n.data[o],l=s.custom||{},h=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:h(r.backgroundColor,o,d.backgroundColor),u=l.borderColor?l.borderColor:h(r.borderColor,o,d.borderColor),f=l.borderWidth?l.borderWidth:h(r.borderWidth,o,d.borderWidth);return{text:a,fillStyle:c,strokeStyle:u,lineWidth:f,hidden:isNaN(r.data[o])||n.data[o].hidden,index:o}}):[]}},onClick:function(t,e){var i,a,o,n=e.index,r=this.chart;for(i=0,a=(r.data.datasets||[]).length;a>i;++i)o=r.getDatasetMeta(i),o.data[n].hidden=!o.data[n].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var i=this,a=i.chart,o=a.chartArea,n=this.getMeta(),r=a.options,s=r.elements.arc,l=Math.min(o.right-o.left,o.bottom-o.top);a.outerRadius=Math.max((l-s.borderWidth/2)/2,0),a.innerRadius=Math.max(r.cutoutPercentage?a.outerRadius/100*r.cutoutPercentage:1,0),a.radiusLength=(a.outerRadius-a.innerRadius)/a.getVisibleDatasetCount(),i.outerRadius=a.outerRadius-a.radiusLength*i.index,i.innerRadius=i.outerRadius-a.radiusLength,n.count=i.countVisibleElements(),e.each(n.data,function(e,a){i.updateElement(e,a,t)})},updateElement:function(t,i,a){for(var o=this,n=o.chart,r=n.chartArea,s=o.getDataset(),l=n.options,h=l.animation,d=l.elements.arc,c=t.custom||{},u=n.scale,f=e.getValueAtIndexOrDefault,g=n.data.labels,p=o.calculateCircumference(s.data[i]),m=(r.left+r.right)/2,b=(r.top+r.bottom)/2,v=0,x=o.getMeta(),y=0;i>y;++y)isNaN(s.data[y])||x.data[y].hidden||++v;var k=t.hidden?0:u.getDistanceFromCenterForValue(s.data[i]),S=-.5*Math.PI+p*v,C=S+(t.hidden?0:p),w={x:m,y:b,innerRadius:0,outerRadius:h.animateScale?0:u.getDistanceFromCenterForValue(s.data[i]),startAngle:h.animateRotate?Math.PI*-.5:S,endAngle:h.animateRotate?Math.PI*-.5:C,backgroundColor:c.backgroundColor?c.backgroundColor:f(s.backgroundColor,i,d.backgroundColor),borderWidth:c.borderWidth?c.borderWidth:f(s.borderWidth,i,d.borderWidth),borderColor:c.borderColor?c.borderColor:f(s.borderColor,i,d.borderColor),label:f(g,i,g[i])};e.extend(t,{_datasetIndex:o.index,_index:i,_scale:u,_model:a?w:{x:m,y:b,innerRadius:0,outerRadius:k,startAngle:S,endAngle:C,backgroundColor:c.backgroundColor?c.backgroundColor:f(s.backgroundColor,i,d.backgroundColor),borderWidth:c.borderWidth?c.borderWidth:f(s.borderWidth,i,d.borderWidth),borderColor:c.borderColor?c.borderColor:f(s.borderColor,i,d.borderColor),label:f(g,i,g[i])}}),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),i=this.getMeta(),a=0;return e.each(i.data,function(e,i){isNaN(t.data[i])||e.hidden||a++}),a},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,addElementAndReset:function(e){t.DatasetController.prototype.addElementAndReset.call(this,e),this.updateBezierControlPoints()},update:function(t){var i=this.getMeta(),a=i.dataset,o=i.data,n=a.custom||{},r=this.getDataset(),s=this.chart.options.elements.line,l=this.chart.scale;void 0!==r.tension&&void 0===r.lineTension&&(r.lineTension=r.tension),e.extend(i.dataset,{_datasetIndex:this.index,_children:o,_loop:!0,_model:{tension:n.tension?n.tension:e.getValueOrDefault(r.lineTension,s.tension),backgroundColor:n.backgroundColor?n.backgroundColor:r.backgroundColor||s.backgroundColor,borderWidth:n.borderWidth?n.borderWidth:r.borderWidth||s.borderWidth,borderColor:n.borderColor?n.borderColor:r.borderColor||s.borderColor,fill:n.fill?n.fill:void 0!==r.fill?r.fill:s.fill,borderCapStyle:n.borderCapStyle?n.borderCapStyle:r.borderCapStyle||s.borderCapStyle,borderDash:n.borderDash?n.borderDash:r.borderDash||s.borderDash,borderDashOffset:n.borderDashOffset?n.borderDashOffset:r.borderDashOffset||s.borderDashOffset,borderJoinStyle:n.borderJoinStyle?n.borderJoinStyle:r.borderJoinStyle||s.borderJoinStyle,scaleTop:l.top,scaleBottom:l.bottom,scaleZero:l.getBasePosition()}}),i.dataset.pivot(),e.each(o,function(e,i){this.updateElement(e,i,t)},this),this.updateBezierControlPoints()},updateElement:function(t,i,a){var o=t.custom||{},n=this.getDataset(),r=this.chart.scale,s=this.chart.options.elements.point,l=r.getPointPositionForValue(i,n.data[i]);e.extend(t,{_datasetIndex:this.index,_index:i,_scale:r,_model:{x:a?r.xCenter:l.x,y:a?r.yCenter:l.y,tension:o.tension?o.tension:e.getValueOrDefault(n.tension,this.chart.options.elements.line.tension),radius:o.radius?o.radius:e.getValueAtIndexOrDefault(n.pointRadius,i,s.radius),backgroundColor:o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(n.pointBackgroundColor,i,s.backgroundColor),borderColor:o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(n.pointBorderColor,i,s.borderColor),borderWidth:o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(n.pointBorderWidth,i,s.borderWidth),pointStyle:o.pointStyle?o.pointStyle:e.getValueAtIndexOrDefault(n.pointStyle,i,s.pointStyle),hitRadius:o.hitRadius?o.hitRadius:e.getValueAtIndexOrDefault(n.hitRadius,i,s.hitRadius)}}),t._model.skip=o.skip?o.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,i=this.getMeta();e.each(i.data,function(a,o){var n=a._model,r=e.splineCurve(e.previousItem(i.data,o,!0)._model,n,e.nextItem(i.data,o,!0)._model,n.tension);n.controlPointPreviousX=Math.max(Math.min(r.previous.x,t.right),t.left),n.controlPointPreviousY=Math.max(Math.min(r.previous.y,t.bottom),t.top),n.controlPointNextX=Math.max(Math.min(r.next.x,t.right),t.left),n.controlPointNextY=Math.max(Math.min(r.next.y,t.bottom),t.top),a.pivot()},this)},draw:function(t){var i=this.getMeta(),a=t||1;e.each(i.data,function(t,e){t.transition(a)}),i.dataset.transition(a).draw(),e.each(i.data,function(t){t.draw()})},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t.custom||{},o=t._index,n=t._model;n.radius=a.hoverRadius?a.hoverRadius:e.getValueAtIndexOrDefault(i.pointHoverRadius,o,this.chart.options.elements.point.hoverRadius),n.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor,o,e.getHoverColor(n.backgroundColor)),n.borderColor=a.hoverBorderColor?a.hoverBorderColor:e.getValueAtIndexOrDefault(i.pointHoverBorderColor,o,e.getHoverColor(n.borderColor)),n.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:e.getValueAtIndexOrDefault(i.pointHoverBorderWidth,o,n.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t.custom||{},o=t._index,n=t._model,r=this.chart.options.elements.point;n.radius=a.radius?a.radius:e.getValueAtIndexOrDefault(i.radius,o,r.radius),n.backgroundColor=a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(i.pointBackgroundColor,o,r.backgroundColor),n.borderColor=a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(i.pointBorderColor,o,r.borderColor),n.borderWidth=a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(i.pointBorderWidth,o,r.borderWidth)}})}},{}],21:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,i,a){a||(t.animating=!0);for(var o=0;o<this.animations.length;++o)if(this.animations[o].chartInstance===t)return void(this.animations[o].animationObject=e);this.animations.push({chartInstance:t,animationObject:e}),1===this.animations.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var i=e.findIndex(this.animations,function(e){return e.chartInstance===t});-1!==i&&(this.animations.splice(i,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=Date.now(),e=0;this.dropFrames>1&&(e=Math.floor(this.dropFrames),this.dropFrames=this.dropFrames%1);for(var i=0;i<this.animations.length;)null===this.animations[i].animationObject.currentStep&&(this.animations[i].animationObject.currentStep=0),this.animations[i].animationObject.currentStep+=1+e,this.animations[i].animationObject.currentStep>this.animations[i].animationObject.numSteps&&(this.animations[i].animationObject.currentStep=this.animations[i].animationObject.numSteps),this.animations[i].animationObject.render(this.animations[i].chartInstance,this.animations[i].animationObject),this.animations[i].animationObject.onAnimationProgress&&this.animations[i].animationObject.onAnimationProgress.call&&this.animations[i].animationObject.onAnimationProgress.call(this.animations[i].chartInstance,this.animations[i]),this.animations[i].animationObject.currentStep===this.animations[i].animationObject.numSteps?(this.animations[i].animationObject.onAnimationComplete&&this.animations[i].animationObject.onAnimationComplete.call&&this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance,this.animations[i]),this.animations[i].chartInstance.animating=!1,this.animations.splice(i,1)):++i;var a=Date.now(),o=(a-t)/this.frameDuration;this.dropFrames+=o,this.animations.length>0&&this.requestAnimationFrame()}}}},{}],22:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.types={},t.instances={},t.controllers={},t.Controller=function(i){return this.chart=i,this.config=i.config,this.options=this.config.options=e.configMerge(t.defaults.global,t.defaults[this.config.type],this.config.options||{}),this.id=e.uid(),Object.defineProperty(this,"data",{get:function(){return this.config.data}}),t.instances[this.id]=this,this.options.responsive&&this.resize(!0),this.initialize(),this},e.extend(t.Controller.prototype,{initialize:function(){return t.pluginService.notifyPlugins("beforeInit",[this]),this.bindEvents(),this.ensureScalesHaveIDs(),this.buildOrUpdateControllers(),this.buildScales(),this.buildSurroundingItems(),this.updateLayout(),this.resetElements(),this.initToolTip(),this.update(),t.pluginService.notifyPlugins("afterInit",[this]),this},clear:function(){return e.clear(this.chart),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var i=this.chart.canvas,a=e.getMaximumWidth(this.chart.canvas),o=this.options.maintainAspectRatio&&isNaN(this.chart.aspectRatio)===!1&&isFinite(this.chart.aspectRatio)&&0!==this.chart.aspectRatio?a/this.chart.aspectRatio:e.getMaximumHeight(this.chart.canvas),n=this.chart.width!==a||this.chart.height!==o;return n?(i.width=this.chart.width=a,i.height=this.chart.height=o,e.retinaScale(this.chart),t||(this.stop(),this.update(this.options.responsiveAnimationDuration)),this):this},ensureScalesHaveIDs:function(){var t=this.options,i=t.scales||{},a=t.scale;e.each(i.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),e.each(i.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),a&&(a.id=a.id||"scale")},buildScales:function(){var i=this,a=i.options,o=i.scales={},n=[];a.scales&&(n=n.concat((a.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category"}}),(a.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear"}}))),a.scale&&n.push({options:a.scale,dtype:"radialLinear",isDefault:!0}),e.each(n,function(a,n){var r=a.options,s=e.getValueOrDefault(r.type,a.dtype),l=t.scaleService.getScaleConstructor(s);if(l){var h=new l({id:r.id,options:r,ctx:i.chart.ctx,chart:i});o[h.id]=h,a.isDefault&&(i.scale=h)}}),t.scaleService.addScalesToLayout(this)},buildSurroundingItems:function(){this.options.title&&(this.titleBlock=new t.Title({ctx:this.chart.ctx,options:this.options.title,chart:this}),t.layoutService.addBox(this,this.titleBlock)),this.options.legend&&(this.legend=new t.Legend({ctx:this.chart.ctx,options:this.options.legend,chart:this}),t.layoutService.addBox(this,this.legend))},updateLayout:function(){t.layoutService.update(this,this.chart.width,this.chart.height)},buildOrUpdateControllers:function(){var i=[],a=[];if(e.each(this.data.datasets,function(e,o){var n=this.getDatasetMeta(o);n.type||(n.type=e.type||this.config.type),i.push(n.type),n.controller?n.controller.updateIndex(o):(n.controller=new t.controllers[n.type](this,o),a.push(n.controller))},this),i.length>1)for(var o=1;o<i.length;o++)if(i[o]!==i[o-1]){this.isCombo=!0;break}return a},resetElements:function(){e.each(this.data.datasets,function(t,e){this.getDatasetMeta(e).controller.reset()},this)},update:function(i,a){t.pluginService.notifyPlugins("beforeUpdate",[this]),this.tooltip._data=this.data;var o=this.buildOrUpdateControllers();e.each(this.data.datasets,function(t,e){this.getDatasetMeta(e).controller.buildOrUpdateElements()},this),t.layoutService.update(this,this.chart.width,this.chart.height),t.pluginService.notifyPlugins("afterScaleUpdate",[this]),e.each(o,function(t){t.reset()}),e.each(this.data.datasets,function(t,e){this.getDatasetMeta(e).controller.update()},this),t.pluginService.notifyPlugins("afterUpdate",[this]),this.render(i,a)},render:function(i,a){t.pluginService.notifyPlugins("beforeRender",[this]);var o=this.options.animation;if(o&&("undefined"!=typeof i&&0!==i||"undefined"==typeof i&&0!==o.duration)){var n=new t.Animation;n.numSteps=(i||o.duration)/16.66,n.easing=o.easing,n.render=function(t,i){var a=e.easingEffects[i.easing],o=i.currentStep/i.numSteps,n=a(o);t.draw(n,o,i.currentStep)},n.onAnimationProgress=o.onProgress,n.onAnimationComplete=o.onComplete,t.animationService.addAnimation(this,n,i,a)}else this.draw(),o&&o.onComplete&&o.onComplete.call&&o.onComplete.call(this);return this},draw:function(i){var a=i||1;this.clear(),t.pluginService.notifyPlugins("beforeDraw",[this,a]),e.each(this.boxes,function(t){t.draw(this.chartArea)},this),this.scale&&this.scale.draw();var o=this.chart.ctx;o.save(),o.beginPath(),o.rect(this.chartArea.left,this.chartArea.top,this.chartArea.right-this.chartArea.left,this.chartArea.bottom-this.chartArea.top),o.clip(),e.each(this.data.datasets,function(t,e){this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.draw(i)},this,!0),o.restore(),this.tooltip.transition(a).draw(),t.pluginService.notifyPlugins("afterDraw",[this,a])},getElementAtEvent:function(t){var i=e.getRelativePosition(t,this.chart),a=[];return e.each(this.data.datasets,function(t,o){if(this.isDatasetVisible(o)){var n=this.getDatasetMeta(o);e.each(n.data,function(t,e){
return t.inRange(i.x,i.y)?(a.push(t),a):void 0})}},this),a},getElementsAtEvent:function(t){var i=e.getRelativePosition(t,this.chart),a=[],o=function(){if(this.data.datasets)for(var t=0;t<this.data.datasets.length;t++){var e=this.getDatasetMeta(t);if(this.isDatasetVisible(t))for(var a=0;a<e.data.length;a++)if(e.data[a].inRange(i.x,i.y))return e.data[a]}}.call(this);return o?(e.each(this.data.datasets,function(t,e){if(this.isDatasetVisible(e)){var i=this.getDatasetMeta(e);a.push(i.data[o._index])}},this),a):a},getElementsAtEventForMode:function(t,e){var i=this;switch(e){case"single":return i.getElementAtEvent(t);case"label":return i.getElementsAtEvent(t);case"dataset":return i.getDatasetAtEvent(t);default:return t}},getDatasetAtEvent:function(t){var e=this.getElementAtEvent(t);return e.length>0&&(e=this.getDatasetMeta(e[0]._datasetIndex).data),e},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;i>e;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){this.clear(),e.unbindEvents(this,this.events),e.removeResizeListener(this.chart.canvas.parentNode);var i=this.chart.canvas;i.width=this.chart.width,i.height=this.chart.height,void 0!==this.chart.originalDevicePixelRatio&&this.chart.ctx.scale(1/this.chart.originalDevicePixelRatio,1/this.chart.originalDevicePixelRatio),i.style.width=this.chart.originalCanvasStyleWidth,i.style.height=this.chart.originalCanvasStyleHeight,t.pluginService.notifyPlugins("destroy",[this]),delete t.instances[this.id]},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)},initToolTip:function(){this.tooltip=new t.Tooltip({_chart:this.chart,_chartInstance:this,_data:this.data,_options:this.options},this)},bindEvents:function(){e.bindEvents(this,this.options.events,function(t){this.eventHandler(t)})},updateHoverStyle:function(t,e,i){var a,o,n,r=i?"setHoverStyle":"removeHoverStyle";switch(e){case"single":t=[t[0]];break;case"label":case"dataset":break;default:return}for(o=0,n=t.length;n>o;++o)a=t[o],a&&this.getDatasetMeta(a._datasetIndex).controller[r](a)},eventHandler:function(t){var i=this,a=i.tooltip,o=i.options||{},n=o.hover,r=o.tooltips;return i.lastActive=i.lastActive||[],i.lastTooltipActive=i.lastTooltipActive||[],"mouseout"===t.type?(i.active=[],i.tooltipActive=[]):(i.active=i.getElementsAtEventForMode(t,n.mode),i.tooltipActive=i.getElementsAtEventForMode(t,r.mode)),n.onHover&&n.onHover.call(i,i.active),("mouseup"===t.type||"click"===t.type)&&(o.onClick&&o.onClick.call(i,t,i.active),i.legend&&i.legend.handleEvent&&i.legend.handleEvent(t)),i.lastActive.length&&i.updateHoverStyle(i.lastActive,n.mode,!1),i.active.length&&n.mode&&i.updateHoverStyle(i.active,n.mode,!0),(r.enabled||r.custom)&&(a.initialize(),a._active=i.tooltipActive,a.update(!0)),a.pivot(),i.animating||e.arrayEquals(i.active,i.lastActive)&&e.arrayEquals(i.tooltipActive,i.lastTooltipActive)||(i.stop(),(r.enabled||r.custom)&&a.update(!0),i.render(n.animationDuration,!0)),i.lastActive=i.active,i.lastTooltipActive=i.tooltipActive,i}})}},{}],23:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=e.noop;t.DatasetController=function(t,e){this.initialize.call(this,t,e)},e.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.getDataset();null===t.xAxisID&&(t.xAxisID=e.xAxisID||this.chart.options.scales.xAxes[0].id),null===t.yAxisID&&(t.yAxisID=e.yAxisID||this.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,i=e.dataElementType;return i&&new i({_chart:e.chart.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,i=this,a=i.getMeta(),o=i.getDataset().data||[],n=a.data;for(t=0,e=o.length;e>t;++t)n[t]=n[t]||i.createMetaData(a,t);a.dataset=a.dataset||i.createMetaDataset()},addElementAndReset:function(t){var e=this,i=e.createMetaData(t);e.getMeta().data.splice(t,0,i),e.updateElement(i,t,!0)},buildOrUpdateElements:function(){var t=this.getMeta(),e=t.data,i=this.getDataset().data.length,a=e.length;if(a>i)e.splice(i,a-i);else if(i>a)for(var o=a;i>o;++o)this.addElementAndReset(o)},update:i,draw:function(t){var i=t||1;e.each(this.getMeta().data,function(t,e){t.transition(i).draw()})},removeHoverStyle:function(t,i){var a=this.chart.data.datasets[t._datasetIndex],o=t._index,n=t.custom||{},r=e.getValueAtIndexOrDefault,s=(e.color,t._model);s.backgroundColor=n.backgroundColor?n.backgroundColor:r(a.backgroundColor,o,i.backgroundColor),s.borderColor=n.borderColor?n.borderColor:r(a.borderColor,o,i.borderColor),s.borderWidth=n.borderWidth?n.borderWidth:r(a.borderWidth,o,i.borderWidth)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},n=e.getValueAtIndexOrDefault,r=(e.color,e.getHoverColor),s=t._model;s.backgroundColor=o.hoverBackgroundColor?o.hoverBackgroundColor:n(i.hoverBackgroundColor,a,r(s.backgroundColor)),s.borderColor=o.hoverBorderColor?o.hoverBorderColor:n(i.hoverBorderColor,a,r(s.borderColor)),s.borderWidth=o.hoverBorderWidth?o.hoverBorderWidth:n(i.hoverBorderWidth,a,s.borderWidth)}}),t.DatasetController.extend=e.inherits}},{}],24:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){return this._view||(this._view=e.clone(this._model)),this._start=e.clone(this._view),this},transition:function(t){return this._view||(this._view=e.clone(this._model)),1===t?(this._view=this._model,this._start=null,this):(this._start||this.pivot(),e.each(this._model,function(i,a){if("_"===a[0]);else if(this._view.hasOwnProperty(a))if(i===this._view[a]);else if("string"==typeof i)try{var o=e.color(this._model[a]).mix(e.color(this._start[a]),t);this._view[a]=o.rgbString()}catch(n){this._view[a]=i}else if("number"==typeof i){var r=void 0!==this._start[a]&&isNaN(this._start[a])===!1?this._start[a]:0;this._view[a]=(this._model[a]-r)*t+r}else this._view[a]=i;else"number"!=typeof i||isNaN(this._view[a])?this._view[a]=i:this._view[a]=i*t},this),this)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{}],25:[function(t,e,i){"use strict";var a=t("chartjs-color");e.exports=function(t){function e(t,e,i){var a;return"string"==typeof t?(a=parseInt(t,10),-1!=t.indexOf("%")&&(a=a/100*e.parentNode[i])):a=t,a}function i(t){return void 0!==t&&null!==t&&"none"!==t}function o(t,a,o){var n=document.defaultView,r=t.parentNode,s=n.getComputedStyle(t)[a],l=n.getComputedStyle(r)[a],h=i(s),d=i(l),c=Number.POSITIVE_INFINITY;return h||d?Math.min(h?e(s,t,o):c,d?e(l,r,o):c):"none"}var n=t.helpers={};n.each=function(t,e,i,a){var o,r;if(n.isArray(t))if(r=t.length,a)for(o=r-1;o>=0;o--)e.call(i,t[o],o);else for(o=0;r>o;o++)e.call(i,t[o],o);else if("object"==typeof t){var s=Object.keys(t);for(r=s.length,o=0;r>o;o++)e.call(i,t[s[o]],s[o])}},n.clone=function(t){var e={};return n.each(t,function(t,i){n.isArray(t)?e[i]=t.slice(0):"object"==typeof t&&null!==t?e[i]=n.clone(t):e[i]=t}),e},n.extend=function(t){for(var e=arguments.length,i=[],a=1;e>a;a++)i.push(arguments[a]);return n.each(i,function(e){n.each(e,function(e,i){t[i]=e})}),t},n.configMerge=function(e){var i=n.clone(e);return n.each(Array.prototype.slice.call(arguments,1),function(e){n.each(e,function(e,a){if("scales"===a)i[a]=n.scaleMerge(i.hasOwnProperty(a)?i[a]:{},e);else if("scale"===a)i[a]=n.configMerge(i.hasOwnProperty(a)?i[a]:{},t.scaleService.getScaleDefaults(e.type),e);else if(i.hasOwnProperty(a)&&n.isArray(i[a])&&n.isArray(e)){var o=i[a];n.each(e,function(t,e){e<o.length?"object"==typeof o[e]&&null!==o[e]&&"object"==typeof t&&null!==t?o[e]=n.configMerge(o[e],t):o[e]=t:o.push(t)})}else i.hasOwnProperty(a)&&"object"==typeof i[a]&&null!==i[a]&&"object"==typeof e?i[a]=n.configMerge(i[a],e):i[a]=e})}),i},n.extendDeep=function(t){function e(t){return n.each(arguments,function(i){i!==t&&n.each(i,function(i,a){t[a]&&t[a].constructor&&t[a].constructor===Object?e(t[a],i):t[a]=i})}),t}return e.apply(this,arguments)},n.scaleMerge=function(e,i){var a=n.clone(e);return n.each(i,function(e,i){"xAxes"===i||"yAxes"===i?a.hasOwnProperty(i)?n.each(e,function(e,o){var r=n.getValueOrDefault(e.type,"xAxes"===i?"category":"linear"),s=t.scaleService.getScaleDefaults(r);o>=a[i].length||!a[i][o].type?a[i].push(n.configMerge(s,e)):e.type&&e.type!==a[i][o].type?a[i][o]=n.configMerge(a[i][o],s,e):a[i][o]=n.configMerge(a[i][o],e)}):(a[i]=[],n.each(e,function(e){var o=n.getValueOrDefault(e.type,"xAxes"===i?"category":"linear");a[i].push(n.configMerge(t.scaleService.getScaleDefaults(o),e))})):a.hasOwnProperty(i)&&"object"==typeof a[i]&&null!==a[i]&&"object"==typeof e?a[i]=n.configMerge(a[i],e):a[i]=e}),a},n.getValueAtIndexOrDefault=function(t,e,i){return void 0===t||null===t?i:n.isArray(t)?e<t.length?t[e]:i:t},n.getValueOrDefault=function(t,e){return void 0===t?e:t},n.indexOf=function(t,e){if(Array.prototype.indexOf)return t.indexOf(e);for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1},n.where=function(t,e){if(n.isArray(t)&&Array.prototype.filter)return t.filter(e);var i=[];return n.each(t,function(t){e(t)&&i.push(t)}),i},n.findIndex=function(t,e,i){var a=-1;if(Array.prototype.findIndex)a=t.findIndex(e,i);else for(var o=0;o<t.length;++o)if(i=void 0!==i?i:t,e.call(i,t[o],o,t)){a=o;break}return a},n.findNextWhere=function(t,e,i){(void 0===i||null===i)&&(i=-1);for(var a=i+1;a<t.length;a++){var o=t[a];if(e(o))return o}},n.findPreviousWhere=function(t,e,i){(void 0===i||null===i)&&(i=t.length);for(var a=i-1;a>=0;a--){var o=t[a];if(e(o))return o}},n.inherits=function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},a=function(){this.constructor=i};return a.prototype=e.prototype,i.prototype=new a,i.extend=n.inherits,t&&n.extend(i.prototype,t),i.__super__=e.prototype,i},n.noop=function(){},n.uid=function(){var t=0;return function(){return t++}}(),n.warn=function(t){console&&"function"==typeof console.warn&&console.warn(t)},n.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},n.almostEquals=function(t,e,i){return Math.abs(t-e)<i},n.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},n.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},n.sign=function(t){return Math.sign?Math.sign(t):(t=+t,0===t||isNaN(t)?t:t>0?1:-1)},n.log10=function(t){return Math.log10?Math.log10(t):Math.log(t)/Math.LN10},n.toRadians=function(t){return t*(Math.PI/180)},n.toDegrees=function(t){return t*(180/Math.PI)},n.getAngleFromPoint=function(t,e){var i=e.x-t.x,a=e.y-t.y,o=Math.sqrt(i*i+a*a),n=Math.atan2(a,i);return n<-.5*Math.PI&&(n+=2*Math.PI),{angle:n,distance:o}},n.aliasPixel=function(t){return t%2===0?0:.5},n.splineCurve=function(t,e,i,a){var o=t.skip?e:t,n=e,r=i.skip?e:i,s=Math.sqrt(Math.pow(n.x-o.x,2)+Math.pow(n.y-o.y,2)),l=Math.sqrt(Math.pow(r.x-n.x,2)+Math.pow(r.y-n.y,2)),h=s/(s+l),d=l/(s+l);h=isNaN(h)?0:h,d=isNaN(d)?0:d;var c=a*h,u=a*d;return{previous:{x:n.x-c*(r.x-o.x),y:n.y-c*(r.y-o.y)},next:{x:n.x+u*(r.x-o.x),y:n.y+u*(r.y-o.y)}}},n.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},n.previousItem=function(t,e,i){return i?0>=e?t[t.length-1]:t[e-1]:0>=e?t[0]:t[e-1]},n.niceNum=function(t,e){var i,a=Math.floor(n.log10(t)),o=t/Math.pow(10,a);return i=e?1.5>o?1:3>o?2:7>o?5:10:1>=o?1:2>=o?2:5>=o?5:10,i*Math.pow(10,a)};var r=n.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,a=1;return 0===t?0:1===(t/=1)?1:(i||(i=.3),a<Math.abs(1)?(a=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/a),-(a*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)))},easeOutElastic:function(t){var e=1.70158,i=0,a=1;return 0===t?0:1===(t/=1)?1:(i||(i=.3),a<Math.abs(1)?(a=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/a),a*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,a=1;return 0===t?0:2===(t/=.5)?1:(i||(i=1*(.3*1.5)),a<Math.abs(1)?(a=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/a),1>t?-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)):a*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-r.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*r.easeInBounce(2*t):.5*r.easeOutBounce(2*t-1)+.5}};n.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),n.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),n.getRelativePosition=function(t,e){var i,a,o=t.originalEvent||t,r=t.currentTarget||t.srcElement,s=r.getBoundingClientRect(),l=o.touches;l&&l.length>0?(i=l[0].clientX,a=l[0].clientY):(i=o.clientX,a=o.clientY);var h=parseFloat(n.getStyle(r,"padding-left")),d=parseFloat(n.getStyle(r,"padding-top")),c=parseFloat(n.getStyle(r,"padding-right")),u=parseFloat(n.getStyle(r,"padding-bottom")),f=s.right-s.left-h-c,g=s.bottom-s.top-d-u;return i=Math.round((i-s.left-h)/f*r.width/e.currentDevicePixelRatio),a=Math.round((a-s.top-d)/g*r.height/e.currentDevicePixelRatio),{x:i,y:a}},n.addEvent=function(t,e,i){t.addEventListener?t.addEventListener(e,i):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i},n.removeEvent=function(t,e,i){t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent?t.detachEvent("on"+e,i):t["on"+e]=n.noop},n.bindEvents=function(t,e,i){var a=t.events=t.events||{};n.each(e,function(e){a[e]=function(){i.apply(t,arguments)},n.addEvent(t.chart.canvas,e,a[e])})},n.unbindEvents=function(t,e){var i=t.chart.canvas;n.each(e,function(t,e){n.removeEvent(i,e,t)})},n.getConstraintWidth=function(t){return o(t,"max-width","clientWidth")},n.getConstraintHeight=function(t){return o(t,"max-height","clientHeight")},n.getMaximumWidth=function(t){var e=t.parentNode,i=parseInt(n.getStyle(e,"padding-left"))+parseInt(n.getStyle(e,"padding-right")),a=e.clientWidth-i,o=n.getConstraintWidth(t);return isNaN(o)?a:Math.min(a,o)},n.getMaximumHeight=function(t){var e=t.parentNode,i=parseInt(n.getStyle(e,"padding-top"))+parseInt(n.getStyle(e,"padding-bottom")),a=e.clientHeight-i,o=n.getConstraintHeight(t);return isNaN(o)?a:Math.min(a,o)},n.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},n.retinaScale=function(t){var e=t.ctx,i=t.canvas,a=i.width,o=i.height,n=t.currentDevicePixelRatio=window.devicePixelRatio||1;1!==n&&(i.height=o*n,i.width=a*n,e.scale(n,n),t.originalDevicePixelRatio=t.originalDevicePixelRatio||n),i.style.width=a+"px",i.style.height=o+"px"},n.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},n.fontString=function(t,e,i){return e+" "+t+"px "+i},n.longestText=function(t,e,i,a){a=a||{};var o=a.data=a.data||{},r=a.garbageCollect=a.garbageCollect||[];a.font!==e&&(o=a.data={},r=a.garbageCollect=[],a.font=e),t.font=e;var s=0;n.each(i,function(e){if(void 0!==e&&null!==e){var i=o[e];i||(i=o[e]=t.measureText(e).width,r.push(e)),i>s&&(s=i)}});var l=r.length/2;if(l>i.length){for(var h=0;l>h;h++)delete o[r[h]];r.splice(0,l)}return s},n.drawRoundedRectangle=function(t,e,i,a,o,n){t.beginPath(),t.moveTo(e+n,i),t.lineTo(e+a-n,i),t.quadraticCurveTo(e+a,i,e+a,i+n),t.lineTo(e+a,i+o-n),t.quadraticCurveTo(e+a,i+o,e+a-n,i+o),t.lineTo(e+n,i+o),t.quadraticCurveTo(e,i+o,e,i+o-n),t.lineTo(e,i+n),t.quadraticCurveTo(e,i,e+n,i),t.closePath()},n.color=function(e){return a?a(e instanceof CanvasGradient?t.defaults.global.defaultColor:e):(console.log("Color.js not found!"),e)},n.addResizeListener=function(t,e){var i=document.createElement("iframe"),a="chartjs-hidden-iframe";i.classlist?i.classlist.add(a):i.setAttribute("class",a);var o=i.style;o.width="100%",o.display="block",o.border=0,o.height=0,o.margin=0,o.position="absolute",o.left=0,o.right=0,o.top=0,o.bottom=0,t.insertBefore(i,t.firstChild),(i.contentWindow||i).onresize=function(){e&&e()}},n.removeResizeListener=function(t){var e=t.querySelector(".chartjs-hidden-iframe");e&&e.parentNode.removeChild(e)},n.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},n.arrayEquals=function(t,e){var i,a,o,r;if(!t||!e||t.length!=e.length)return!1;for(i=0,a=t.length;a>i;++i)if(o=t[i],r=e[i],o instanceof Array&&r instanceof Array){if(!n.arrayEquals(o,r))return!1}else if(o!=r)return!1;return!0},n.pushAllIfDefined=function(t,e){"undefined"!=typeof t&&(n.isArray(t)?e.push.apply(e,t):e.push(t))},n.callCallback=function(t,e,i){t&&"function"==typeof t.call&&t.apply(i,e)},n.getHoverColor=function(t){return t instanceof CanvasPattern?t:n.color(t).saturate(.5).darken(.1).rgbString()}}},{"chartjs-color":3}],26:[function(t,e,i){"use strict";e.exports=function(){var t=function(e,i){this.config=i,e.length&&e[0].getContext&&(e=e[0]),e.getContext&&(e=e.getContext("2d")),this.ctx=e,this.canvas=e.canvas,this.width=e.canvas.width||parseInt(t.helpers.getStyle(e.canvas,"width"))||t.helpers.getMaximumWidth(e.canvas),this.height=e.canvas.height||parseInt(t.helpers.getStyle(e.canvas,"height"))||t.helpers.getMaximumHeight(e.canvas),this.aspectRatio=this.width/this.height,(isNaN(this.aspectRatio)||isFinite(this.aspectRatio)===!1)&&(this.aspectRatio=void 0!==i.aspectRatio?i.aspectRatio:2),this.originalCanvasStyleWidth=e.canvas.style.width,this.originalCanvasStyleHeight=e.canvas.style.height,t.helpers.retinaScale(this),i&&(this.controller=new t.Controller(this));var a=this;return t.helpers.addResizeListener(e.canvas.parentNode,function(){a.controller&&a.controller.config.options.responsive&&a.controller.resize()}),this.controller?this.controller:this};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"single",animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t}},{}],27:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),t.boxes.push(e)},removeBox:function(t,e){t.boxes&&t.boxes.splice(t.boxes.indexOf(e),1)},update:function(t,i,a){function o(t){var e,i=t.isHorizontal();i?(e=t.update(t.options.fullWidth?p:k,y),S-=e.height):(e=t.update(x,v),k-=e.width),C.push({horizontal:i,minSize:e,box:t})}function n(t){var i=e.findNextWhere(C,function(e){return e.box===t});if(i)if(t.isHorizontal()){var a={left:w,right:M,top:0,bottom:0};t.update(t.options.fullWidth?p:k,m/2,a)}else t.update(i.minSize.width,S)}function r(t){var i=e.findNextWhere(C,function(e){return e.box===t}),a={left:0,right:0,top:D,bottom:A};i&&t.update(i.minSize.width,S,a)}function s(t){t.isHorizontal()?(t.left=t.options.fullWidth?l:w,t.right=t.options.fullWidth?i-l:w+k,t.top=P,t.bottom=P+t.height,P=t.bottom):(t.left=_,t.right=_+t.width,t.top=D,t.bottom=D+S,_=t.right)}if(t){var l=0,h=0,d=e.where(t.boxes,function(t){return"left"===t.options.position}),c=e.where(t.boxes,function(t){return"right"===t.options.position}),u=e.where(t.boxes,function(t){return"top"===t.options.position}),f=e.where(t.boxes,function(t){return"bottom"===t.options.position}),g=e.where(t.boxes,function(t){return"chartArea"===t.options.position});u.sort(function(t,e){return(e.options.fullWidth?1:0)-(t.options.fullWidth?1:0)}),f.sort(function(t,e){return(t.options.fullWidth?1:0)-(e.options.fullWidth?1:0)});var p=i-2*l,m=a-2*h,b=p/2,v=m/2,x=(i-b)/(d.length+c.length),y=(a-v)/(u.length+f.length),k=p,S=m,C=[];e.each(d.concat(c,u,f),o);var w=l,M=l,D=h,A=h;e.each(d.concat(c),n),e.each(d,function(t){w+=t.width}),e.each(c,function(t){M+=t.width}),e.each(u.concat(f),n),e.each(u,function(t){D+=t.height}),e.each(f,function(t){A+=t.height}),e.each(d.concat(c),r),w=l,M=l,D=h,A=h,e.each(d,function(t){w+=t.width}),e.each(c,function(t){M+=t.width}),e.each(u,function(t){D+=t.height}),e.each(f,function(t){A+=t.height});var I=a-D-A,F=i-w-M;(F!==k||I!==S)&&(e.each(d,function(t){t.height=I}),e.each(c,function(t){t.height=I}),e.each(u,function(t){t.options.fullWidth||(t.width=F)}),e.each(f,function(t){t.options.fullWidth||(t.width=F)}),S=I,k=F);var _=l,P=h;e.each(d.concat(u),s),_+=k,P+=S,e.each(c,s),e.each(f,s),t.chartArea={left:w,top:D,right:w+k,bottom:D+S},e.each(g,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,S)})}}}}},{}],28:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=e.noop;t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,onClick:function(t,e){var i=e.datasetIndex,a=this.chart,o=a.getDatasetMeta(i);o.hidden=null===o.hidden?!a.data.datasets[i].hidden:null,a.update()},labels:{boxWidth:40,padding:10,generateLabels:function(t){var i=t.data;return e.isArray(i.datasets)?i.datasets.map(function(e,i){return{text:e.label,fillStyle:e.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,datasetIndex:i}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){e.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:i,update:function(t,e,i){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this.margins=i,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeBuildLabels(),this.buildLabels(),this.afterBuildLabels(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0,this.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:function(){this.legendItems=this.options.labels.generateLabels.call(this,this.chart),this.options.reverse&&this.legendItems.reverse()},afterBuildLabels:i,beforeFit:i,fit:function(){var i=this.options,a=i.labels,o=i.display,n=this.ctx,r=t.defaults.global,s=e.getValueOrDefault,l=s(a.fontSize,r.defaultFontSize),h=s(a.fontStyle,r.defaultFontStyle),d=s(a.fontFamily,r.defaultFontFamily),c=e.fontString(l,h,d),u=this.legendHitBoxes=[],f=this.minSize,g=this.isHorizontal();if(g?(f.width=this.maxWidth,f.height=o?10:0):(f.width=o?10:0,f.height=this.maxHeight),o&&g){var p=this.lineWidths=[0],m=this.legendItems.length?l+a.padding:0;n.textAlign="left",n.textBaseline="top",n.font=c,e.each(this.legendItems,function(t,e){var i=a.boxWidth+l/2+n.measureText(t.text).width;p[p.length-1]+i+a.padding>=this.width&&(m+=l+a.padding,p[p.length]=this.left),u[e]={left:0,top:0,width:i,height:l},p[p.length-1]+=i+a.padding},this),f.height+=m}this.width=f.width,this.height=f.height},afterFit:i,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var i=this.options,a=i.labels,o=t.defaults.global,n=o.elements.line,r=this.width,s=this.lineWidths;if(i.display){var l=this.ctx,h={x:this.left+(r-s[0])/2,y:this.top+a.padding,line:0},d=e.getValueOrDefault,c=d(a.fontColor,o.defaultFontColor),u=d(a.fontSize,o.defaultFontSize),f=d(a.fontStyle,o.defaultFontStyle),g=d(a.fontFamily,o.defaultFontFamily),p=e.fontString(u,f,g);if(this.isHorizontal()){l.textAlign="left",l.textBaseline="top",l.lineWidth=.5,l.strokeStyle=c,l.fillStyle=c,l.font=p;var m=a.boxWidth,b=this.legendHitBoxes;e.each(this.legendItems,function(t,e){var i=l.measureText(t.text).width,c=m+u/2+i,f=h.x,g=h.y;f+c>=r&&(g=h.y+=u+a.padding,h.line++,f=h.x=this.left+(r-s[h.line])/2),l.save(),l.fillStyle=d(t.fillStyle,o.defaultColor),l.lineCap=d(t.lineCap,n.borderCapStyle),l.lineDashOffset=d(t.lineDashOffset,n.borderDashOffset),l.lineJoin=d(t.lineJoin,n.borderJoinStyle),l.lineWidth=d(t.lineWidth,n.borderWidth),l.strokeStyle=d(t.strokeStyle,o.defaultColor),l.setLineDash&&l.setLineDash(d(t.lineDash,n.borderDash)),l.strokeRect(f,g,m,u),l.fillRect(f,g,m,u),l.restore(),b[e].left=f,b[e].top=g,l.fillText(t.text,m+u/2+f,g),t.hidden&&(l.beginPath(),l.lineWidth=2,l.moveTo(m+u/2+f,g+u/2),l.lineTo(m+u/2+f+i,g+u/2),l.stroke()),h.x+=c+a.padding},this)}}},handleEvent:function(t){var i=e.getRelativePosition(t,this.chart.chart),a=i.x,o=i.y,n=this.options;if(a>=this.left&&a<=this.right&&o>=this.top&&o<=this.bottom)for(var r=this.legendHitBoxes,s=0;s<r.length;++s){var l=r[s];if(a>=l.left&&a<=l.left+l.width&&o>=l.top&&o<=l.top+l.height){n.onClick&&n.onClick.call(this,t,this.legendItems[s]);break}}}})}},{}],29:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.plugins=[],t.pluginService={register:function(e){var i=t.plugins;-1===i.indexOf(e)&&i.push(e)},remove:function(e){var i=t.plugins,a=i.indexOf(e);-1!==a&&i.splice(a,1)},notifyPlugins:function(i,a,o){e.each(t.plugins,function(t){t[i]&&"function"==typeof t[i]&&t[i].apply(o,a)},o)}};var i=e.noop;t.PluginBase=t.Element.extend({beforeInit:i,afterInit:i,beforeUpdate:i,afterUpdate:i,beforeDraw:i,afterDraw:i,destroy:i})}},{}],30:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",offsetGridLines:!1},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:10,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:function(t){return""+t}}},t.Scale=t.Element.extend({beforeUpdate:function(){e.callCallback(this.options.beforeUpdate,[this])},update:function(t,i,a){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=i,this.margins=e.extend({left:0,right:0,top:0,bottom:0},a),this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this.beforeBuildTicks(),this.buildTicks(),this.afterBuildTicks(),this.beforeTickToLabelConversion(),this.convertTicksToLabels(),this.afterTickToLabelConversion(),this.beforeCalculateTickRotation(),this.calculateTickRotation(),this.afterCalculateTickRotation(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:function(){e.callCallback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){e.callCallback(this.options.beforeSetDimensions,[this])},setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0},afterSetDimensions:function(){e.callCallback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){e.callCallback(this.options.beforeDataLimits,[this])},determineDataLimits:e.noop,afterDataLimits:function(){e.callCallback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){e.callCallback(this.options.beforeBuildTicks,[this])},buildTicks:e.noop,afterBuildTicks:function(){e.callCallback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){e.callCallback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){this.ticks=this.ticks.map(function(t,e,i){return this.options.ticks.userCallback?this.options.ticks.userCallback(t,e,i):this.options.ticks.callback(t,e,i)},this)},afterTickToLabelConversion:function(){e.callCallback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){e.callCallback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var i=this.ctx,a=t.defaults.global,o=this.options.ticks,n=e.getValueOrDefault(o.fontSize,a.defaultFontSize),r=e.getValueOrDefault(o.fontStyle,a.defaultFontStyle),s=e.getValueOrDefault(o.fontFamily,a.defaultFontFamily),l=e.fontString(n,r,s);i.font=l;var h,d=i.measureText(this.ticks[0]).width,c=i.measureText(this.ticks[this.ticks.length-1]).width;if(this.labelRotation=o.minRotation||0,this.paddingRight=0,this.paddingLeft=0,this.options.display&&this.isHorizontal()){this.paddingRight=c/2+3,this.paddingLeft=d/2+3,this.longestTextCache||(this.longestTextCache={});for(var u,f,g=e.longestText(i,l,this.ticks,this.longestTextCache),p=g,m=this.getPixelForTick(1)-this.getPixelForTick(0)-6;p>m&&this.labelRotation<o.maxRotation;){
if(u=Math.cos(e.toRadians(this.labelRotation)),f=Math.sin(e.toRadians(this.labelRotation)),h=u*d,h+n/2>this.yLabelWidth&&(this.paddingLeft=h+n/2),this.paddingRight=n/2,f*g>this.maxHeight){this.labelRotation--;break}this.labelRotation++,p=u*g}}this.margins&&(this.paddingLeft=Math.max(this.paddingLeft-this.margins.left,0),this.paddingRight=Math.max(this.paddingRight-this.margins.right,0))},afterCalculateTickRotation:function(){e.callCallback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){e.callCallback(this.options.beforeFit,[this])},fit:function(){var i=this.minSize={width:0,height:0},a=this.options,o=t.defaults.global,n=a.ticks,r=a.scaleLabel,s=a.display,l=this.isHorizontal(),h=e.getValueOrDefault(n.fontSize,o.defaultFontSize),d=e.getValueOrDefault(n.fontStyle,o.defaultFontStyle),c=e.getValueOrDefault(n.fontFamily,o.defaultFontFamily),u=e.fontString(h,d,c),f=e.getValueOrDefault(r.fontSize,o.defaultFontSize),g=e.getValueOrDefault(r.fontStyle,o.defaultFontStyle),p=e.getValueOrDefault(r.fontFamily,o.defaultFontFamily),m=(e.fontString(f,g,p),a.gridLines.tickMarkLength);if(l?i.width=this.isFullWidth()?this.maxWidth-this.margins.left-this.margins.right:this.maxWidth:i.width=s?m:0,l?i.height=s?m:0:i.height=this.maxHeight,r.display&&s&&(l?i.height+=1.5*f:i.width+=1.5*f),n.display&&s){this.longestTextCache||(this.longestTextCache={});var b=e.longestText(this.ctx,u,this.ticks,this.longestTextCache);if(l){this.longestLabelWidth=b;var v=Math.sin(e.toRadians(this.labelRotation))*this.longestLabelWidth+1.5*h;i.height=Math.min(this.maxHeight,i.height+v),this.ctx.font=u;var x=this.ctx.measureText(this.ticks[0]).width,y=this.ctx.measureText(this.ticks[this.ticks.length-1]).width,k=Math.cos(e.toRadians(this.labelRotation)),S=Math.sin(e.toRadians(this.labelRotation));this.paddingLeft=0!==this.labelRotation?k*x+3:x/2+3,this.paddingRight=0!==this.labelRotation?S*(h/2)+3:y/2+3}else{var C=this.maxWidth-i.width,w=n.mirror;w?b=0:b+=this.options.ticks.padding,C>b?i.width+=b:i.width=this.maxWidth,this.paddingTop=h/2,this.paddingBottom=h/2}}this.margins&&(this.paddingLeft=Math.max(this.paddingLeft-this.margins.left,0),this.paddingTop=Math.max(this.paddingTop-this.margins.top,0),this.paddingRight=Math.max(this.paddingRight-this.margins.right,0),this.paddingBottom=Math.max(this.paddingBottom-this.margins.bottom,0)),this.width=i.width,this.height=i.height},afterFit:function(){e.callCallback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function i(t){return null===t||"undefined"==typeof t?NaN:"number"==typeof t&&isNaN(t)?NaN:"object"==typeof t?t instanceof Date||t.isValid?t:i(this.isHorizontal()?t.x:t.y):t},getLabelForIndex:e.noop,getPixelForValue:e.noop,getValueForPixel:e.noop,getPixelForTick:function(t,e){if(this.isHorizontal()){var i=this.width-(this.paddingLeft+this.paddingRight),a=i/Math.max(this.ticks.length-(this.options.gridLines.offsetGridLines?0:1),1),o=a*t+this.paddingLeft;e&&(o+=a/2);var n=this.left+Math.round(o);return n+=this.isFullWidth()?this.margins.left:0}var r=this.height-(this.paddingTop+this.paddingBottom);return this.top+t*(r/(this.ticks.length-1))},getPixelForDecimal:function(t){if(this.isHorizontal()){var e=this.width-(this.paddingLeft+this.paddingRight),i=e*t+this.paddingLeft,a=this.left+Math.round(i);return a+=this.isFullWidth()?this.margins.left:0}return this.top+t*this.height},getBasePixel:function(){var t=this,e=t.min,i=t.max;return t.getPixelForValue(t.beginAtZero?0:0>e&&0>i?i:e>0&&i>0?e:0)},draw:function(i){var a=this.options;if(a.display){var o,n,r,s,l,h=this.ctx,d=t.defaults.global,c=a.ticks,u=a.gridLines,f=a.scaleLabel,g=0!==this.labelRotation,p=c.autoSkip;c.maxTicksLimit&&(l=c.maxTicksLimit);var m=e.getValueOrDefault(c.fontColor,d.defaultFontColor),b=e.getValueOrDefault(c.fontSize,d.defaultFontSize),v=e.getValueOrDefault(c.fontStyle,d.defaultFontStyle),x=e.getValueOrDefault(c.fontFamily,d.defaultFontFamily),y=e.fontString(b,v,x),k=u.tickMarkLength,S=e.getValueOrDefault(f.fontColor,d.defaultFontColor),C=e.getValueOrDefault(f.fontSize,d.defaultFontSize),w=e.getValueOrDefault(f.fontStyle,d.defaultFontStyle),M=e.getValueOrDefault(f.fontFamily,d.defaultFontFamily),D=e.fontString(C,w,M),A=e.toRadians(this.labelRotation),I=Math.cos(A),F=(Math.sin(A),this.longestLabelWidth*I);if(h.fillStyle=m,this.isHorizontal()){o=!0;var _="bottom"===a.position?this.top:this.bottom-k,P="bottom"===a.position?this.top+k:this.bottom;if(n=!1,g&&(F/=2),(F+c.autoSkipPadding)*this.ticks.length>this.width-(this.paddingLeft+this.paddingRight)&&(n=1+Math.floor((F+c.autoSkipPadding)*this.ticks.length/(this.width-(this.paddingLeft+this.paddingRight)))),l&&this.ticks.length>l)for(;!n||this.ticks.length/(n||1)>l;)n||(n=1),n+=1;p||(n=!1),e.each(this.ticks,function(t,r){var s=this.ticks.length===r+1,l=n>1&&r%n>0||r%n===0&&r+n>=this.ticks.length;if((!l||s)&&void 0!==t&&null!==t){var d=this.getPixelForTick(r),f=this.getPixelForTick(r,u.offsetGridLines);u.display&&(r===("undefined"!=typeof this.zeroLineIndex?this.zeroLineIndex:0)?(h.lineWidth=u.zeroLineWidth,h.strokeStyle=u.zeroLineColor,o=!0):o&&(h.lineWidth=u.lineWidth,h.strokeStyle=u.color,o=!1),d+=e.aliasPixel(h.lineWidth),h.beginPath(),u.drawTicks&&(h.moveTo(d,_),h.lineTo(d,P)),u.drawOnChartArea&&(h.moveTo(d,i.top),h.lineTo(d,i.bottom)),h.stroke()),c.display&&(h.save(),h.translate(f+c.labelOffset,g?this.top+12:"top"===a.position?this.bottom-k:this.top+k),h.rotate(-1*A),h.font=y,h.textAlign=g?"right":"center",h.textBaseline=g?"middle":"top"===a.position?"bottom":"top",h.fillText(t,0,0),h.restore())}},this),f.display&&(h.textAlign="center",h.textBaseline="middle",h.fillStyle=S,h.font=D,r=this.left+(this.right-this.left)/2,s="bottom"===a.position?this.bottom-C/2:this.top+C/2,h.fillText(f.labelString,r,s))}else{o=!0;var T="right"===a.position?this.left:this.right-5,V="right"===a.position?this.left+5:this.right;if(e.each(this.ticks,function(t,n){if(void 0!==t&&null!==t){var r=this.getPixelForTick(n);if(u.display&&(n===("undefined"!=typeof this.zeroLineIndex?this.zeroLineIndex:0)?(h.lineWidth=u.zeroLineWidth,h.strokeStyle=u.zeroLineColor,o=!0):o&&(h.lineWidth=u.lineWidth,h.strokeStyle=u.color,o=!1),r+=e.aliasPixel(h.lineWidth),h.beginPath(),u.drawTicks&&(h.moveTo(T,r),h.lineTo(V,r)),u.drawOnChartArea&&(h.moveTo(i.left,r),h.lineTo(i.right,r)),h.stroke()),c.display){var s,l=this.getPixelForTick(n,u.offsetGridLines);h.save(),"left"===a.position?c.mirror?(s=this.right+c.padding,h.textAlign="left"):(s=this.right-c.padding,h.textAlign="right"):c.mirror?(s=this.left-c.padding,h.textAlign="right"):(s=this.left+c.padding,h.textAlign="left"),h.translate(s,l+c.labelOffset),h.rotate(-1*A),h.font=y,h.textBaseline="middle",h.fillText(t,0,0),h.restore()}}},this),f.display){r="left"===a.position?this.left+C/2:this.right-C/2,s=this.top+(this.bottom-this.top)/2;var R="left"===a.position?-.5*Math.PI:.5*Math.PI;h.save(),h.translate(r,s),h.rotate(R),h.textAlign="center",h.fillStyle=S,h.font=D,h.textBaseline="middle",h.fillText(f.labelString,0,0),h.restore()}}if(u.drawBorder){h.lineWidth=u.lineWidth,h.strokeStyle=u.color;var O=this.left,W=this.right,L=this.top,B=this.bottom,z=e.aliasPixel(h.lineWidth);this.isHorizontal()?(L=B="top"===a.position?this.bottom:this.top,L+=z,B+=z):(O=W="left"===a.position?this.right:this.left,O+=z,W+=z),h.beginPath(),h.moveTo(O,L),h.lineTo(W,B),h.stroke()}}}})}},{}],31:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,i,a){this.constructors[t]=i,this.defaults[t]=e.clone(a)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(i){return this.defaults.hasOwnProperty(i)?e.scaleMerge(t.defaults.scale,this.defaults[i]):{}},updateScaleDefaults:function(t,i){var a=this.defaults;a.hasOwnProperty(t)&&(a[t]=e.extend(a[t],i))},addScalesToLayout:function(i){e.each(i.scales,function(e){t.layoutService.addBox(i,e)})}}}},{}],32:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.title={display:!1,position:"top",fullWidth:!0,fontStyle:"bold",padding:10,text:""};var i=e.noop;t.Title=t.Element.extend({initialize:function(i){e.extend(this,i),this.options=e.configMerge(t.defaults.global.title,i.options),this.legendHitBoxes=[]},beforeUpdate:i,update:function(t,e,i){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this.margins=i,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeBuildLabels(),this.buildLabels(),this.afterBuildLabels(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0,this.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:i,afterBuildLabels:i,beforeFit:i,fit:function(){var i=this,a=(i.ctx,e.getValueOrDefault),o=i.options,n=t.defaults.global,r=o.display,s=a(o.fontSize,n.defaultFontSize),l=i.minSize;i.isHorizontal()?(l.width=i.maxWidth,l.height=r?s+2*o.padding:0):(l.width=r?s+2*o.padding:0,l.height=i.maxHeight),i.width=l.width,i.height=l.height},afterFit:i,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var i=this,a=i.ctx,o=e.getValueOrDefault,n=i.options,r=t.defaults.global;if(n.display){var s,l,h=o(n.fontSize,r.defaultFontSize),d=o(n.fontStyle,r.defaultFontStyle),c=o(n.fontFamily,r.defaultFontFamily),u=e.fontString(h,d,c),f=0,g=i.top,p=i.left,m=i.bottom,b=i.right;a.fillStyle=o(n.fontColor,r.defaultFontColor),a.font=u,i.isHorizontal()?(s=p+(b-p)/2,l=g+(m-g)/2):(s="left"===n.position?p+h/2:b-h/2,l=g+(m-g)/2,f=Math.PI*("left"===n.position?-.5:.5)),a.save(),a.translate(s,l),a.rotate(f),a.textAlign="center",a.textBaseline="middle",a.fillText(n.text,0,0),a.restore()}}})}},{}],33:[function(t,e,i){"use strict";e.exports=function(t){function e(t,e){return e&&(i.isArray(e)?t=t.concat(e):t.push(e)),t}var i=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"single",backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleColor:"#fff",titleAlign:"left",bodySpacing:2,bodyColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,yAlign:"center",xAlign:"center",caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",callbacks:{beforeTitle:i.noop,title:function(t,e){var i="";return t.length>0&&(t[0].xLabel?i=t[0].xLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},afterTitle:i.noop,beforeBody:i.noop,beforeLabel:i.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i+": "+t.yLabel},afterLabel:i.noop,afterBody:i.noop,beforeFooter:i.noop,footer:i.noop,afterFooter:i.noop}},t.Tooltip=t.Element.extend({initialize:function(){var e=t.defaults.global,a=this._options,o=a.tooltips;i.extend(this,{_model:{xPadding:o.xPadding,yPadding:o.yPadding,xAlign:o.yAlign,yAlign:o.xAlign,bodyColor:o.bodyColor,_bodyFontFamily:i.getValueOrDefault(o.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:i.getValueOrDefault(o.bodyFontStyle,e.defaultFontStyle),_bodyAlign:o.bodyAlign,bodyFontSize:i.getValueOrDefault(o.bodyFontSize,e.defaultFontSize),bodySpacing:o.bodySpacing,titleColor:o.titleColor,_titleFontFamily:i.getValueOrDefault(o.titleFontFamily,e.defaultFontFamily),_titleFontStyle:i.getValueOrDefault(o.titleFontStyle,e.defaultFontStyle),titleFontSize:i.getValueOrDefault(o.titleFontSize,e.defaultFontSize),_titleAlign:o.titleAlign,titleSpacing:o.titleSpacing,titleMarginBottom:o.titleMarginBottom,footerColor:o.footerColor,_footerFontFamily:i.getValueOrDefault(o.footerFontFamily,e.defaultFontFamily),_footerFontStyle:i.getValueOrDefault(o.footerFontStyle,e.defaultFontStyle),footerFontSize:i.getValueOrDefault(o.footerFontSize,e.defaultFontSize),_footerAlign:o.footerAlign,footerSpacing:o.footerSpacing,footerMarginTop:o.footerMarginTop,caretSize:o.caretSize,cornerRadius:o.cornerRadius,backgroundColor:o.backgroundColor,opacity:0,legendColorBackground:o.multiKeyBackground}})},getTitle:function(){var t=this._options.tooltips.callbacks.beforeTitle.apply(this,arguments),i=this._options.tooltips.callbacks.title.apply(this,arguments),a=this._options.tooltips.callbacks.afterTitle.apply(this,arguments),o=[];return o=e(o,t),o=e(o,i),o=e(o,a)},getBeforeBody:function(){var t=this._options.tooltips.callbacks.beforeBody.apply(this,arguments);return i.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var a=[];return i.each(t,function(t){i.pushAllIfDefined(this._options.tooltips.callbacks.beforeLabel.call(this,t,e),a),i.pushAllIfDefined(this._options.tooltips.callbacks.label.call(this,t,e),a),i.pushAllIfDefined(this._options.tooltips.callbacks.afterLabel.call(this,t,e),a)},this),a},getAfterBody:function(){var t=this._options.tooltips.callbacks.afterBody.apply(this,arguments);return i.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this._options.tooltips.callbacks.beforeFooter.apply(this,arguments),i=this._options.tooltips.callbacks.footer.apply(this,arguments),a=this._options.tooltips.callbacks.afterFooter.apply(this,arguments),o=[];return o=e(o,t),o=e(o,i),o=e(o,a)},getAveragePosition:function(t){if(!t.length)return!1;var e=[],a=[];i.each(t,function(t){if(t&&t.hasValue()){var i=t.tooltipPosition();e.push(i.x),a.push(i.y)}});for(var o=0,n=0,r=0;r<e.length;r++)o+=e[r],n+=a[r];return{x:Math.round(o/e.length),y:Math.round(n/e.length)}},update:function(t){if(this._active.length){this._model.opacity=1;var e,a=this._active[0],o=[],n=[];if("single"===this._options.tooltips.mode){var r=a._yScale||a._scale;n.push({xLabel:a._xScale?a._xScale.getLabelForIndex(a._index,a._datasetIndex):"",yLabel:r?r.getLabelForIndex(a._index,a._datasetIndex):"",index:a._index,datasetIndex:a._datasetIndex}),e=this.getAveragePosition(this._active)}else i.each(this._data.datasets,function(t,e){if(this._chartInstance.isDatasetVisible(e)){var i=this._chartInstance.getDatasetMeta(e),o=i.data[a._index];if(o){var r=a._yScale||a._scale;n.push({xLabel:o._xScale?o._xScale.getLabelForIndex(o._index,o._datasetIndex):"",yLabel:r?r.getLabelForIndex(o._index,o._datasetIndex):"",index:a._index,datasetIndex:e})}}},this),i.each(this._active,function(t){t&&o.push({borderColor:t._view.borderColor,backgroundColor:t._view.backgroundColor})},null),e=this.getAveragePosition(this._active);i.extend(this._model,{title:this.getTitle(n,this._data),beforeBody:this.getBeforeBody(n,this._data),body:this.getBody(n,this._data),afterBody:this.getAfterBody(n,this._data),footer:this.getFooter(n,this._data)}),i.extend(this._model,{x:Math.round(e.x),y:Math.round(e.y),caretPadding:i.getValueOrDefault(e.padding,2),labelColors:o});var s=this.getTooltipSize(this._model);this.determineAlignment(s),i.extend(this._model,this.getBackgroundPoint(this._model,s))}else this._model.opacity=0;return t&&this._options.tooltips.custom&&this._options.tooltips.custom.call(this,this._model),this},getTooltipSize:function(t){var e=this._chart.ctx,a={height:2*t.yPadding,width:0},o=t.body.length+t.beforeBody.length+t.afterBody.length;return a.height+=t.title.length*t.titleFontSize,a.height+=(t.title.length-1)*t.titleSpacing,a.height+=t.title.length?t.titleMarginBottom:0,a.height+=o*t.bodyFontSize,a.height+=o?(o-1)*t.bodySpacing:0,a.height+=t.footer.length?t.footerMarginTop:0,a.height+=t.footer.length*t.footerFontSize,a.height+=t.footer.length?(t.footer.length-1)*t.footerSpacing:0,e.font=i.fontString(t.titleFontSize,t._titleFontStyle,t._titleFontFamily),i.each(t.title,function(t){a.width=Math.max(a.width,e.measureText(t).width)}),e.font=i.fontString(t.bodyFontSize,t._bodyFontStyle,t._bodyFontFamily),i.each(t.beforeBody.concat(t.afterBody),function(t){a.width=Math.max(a.width,e.measureText(t).width)}),i.each(t.body,function(i){a.width=Math.max(a.width,e.measureText(i).width+("single"!==this._options.tooltips.mode?t.bodyFontSize+2:0))},this),e.font=i.fontString(t.footerFontSize,t._footerFontStyle,t._footerFontFamily),i.each(t.footer,function(t){a.width=Math.max(a.width,e.measureText(t).width)}),a.width+=2*t.xPadding,a},determineAlignment:function(t){this._model.y<t.height?this._model.yAlign="top":this._model.y>this._chart.height-t.height&&(this._model.yAlign="bottom");var e,i,a,o,n,r=this,s=(this._chartInstance.chartArea.left+this._chartInstance.chartArea.right)/2,l=(this._chartInstance.chartArea.top+this._chartInstance.chartArea.bottom)/2;"center"===this._model.yAlign?(e=function(t){return s>=t},i=function(t){return t>s}):(e=function(e){return e<=t.width/2},i=function(e){return e>=r._chart.width-t.width/2}),a=function(e){return e+t.width>r._chart.width},o=function(e){return e-t.width<0},n=function(t){return l>=t?"top":"bottom"},e(this._model.x)?(this._model.xAlign="left",a(this._model.x)&&(this._model.xAlign="center",this._model.yAlign=n(this._model.y))):i(this._model.x)&&(this._model.xAlign="right",o(this._model.x)&&(this._model.xAlign="center",this._model.yAlign=n(this._model.y)))},getBackgroundPoint:function(t,e){var i={x:t.x,y:t.y};return"right"===t.xAlign?i.x-=e.width:"center"===t.xAlign&&(i.x-=e.width/2),"top"===t.yAlign?i.y+=t.caretPadding+t.caretSize:"bottom"===t.yAlign?i.y-=e.height+t.caretPadding+t.caretSize:i.y-=e.height/2,"center"===t.yAlign?"left"===t.xAlign?i.x+=t.caretPadding+t.caretSize:"right"===t.xAlign&&(i.x-=t.caretPadding+t.caretSize):"left"===t.xAlign?i.x-=t.cornerRadius+t.caretPadding:"right"===t.xAlign&&(i.x+=t.cornerRadius+t.caretPadding),i},drawCaret:function(t,e,a,o){var n,r,s,l,h,d,c=this._view,u=this._chart.ctx;"center"===c.yAlign?("left"===c.xAlign?(n=t.x,r=n-c.caretSize,s=n):(n=t.x+e.width,r=n+c.caretSize,s=n),h=t.y+e.height/2,l=h-c.caretSize,d=h+c.caretSize):("left"===c.xAlign?(n=t.x+c.cornerRadius,r=n+c.caretSize,s=r+c.caretSize):"right"===c.xAlign?(n=t.x+e.width-c.cornerRadius,r=n-c.caretSize,s=r-c.caretSize):(r=t.x+e.width/2,n=r-c.caretSize,s=r+c.caretSize),"top"===c.yAlign?(l=t.y,h=l-c.caretSize,d=l):(l=t.y+e.height,h=l+c.caretSize,d=l));var f=i.color(c.backgroundColor);u.fillStyle=f.alpha(a*f.alpha()).rgbString(),u.beginPath(),u.moveTo(n,l),u.lineTo(r,h),u.lineTo(s,d),u.closePath(),u.fill()},drawTitle:function(t,e,a,o){if(e.title.length){a.textAlign=e._titleAlign,a.textBaseline="top";var n=i.color(e.titleColor);a.fillStyle=n.alpha(o*n.alpha()).rgbString(),a.font=i.fontString(e.titleFontSize,e._titleFontStyle,e._titleFontFamily),i.each(e.title,function(i,o){a.fillText(i,t.x,t.y),t.y+=e.titleFontSize+e.titleSpacing,o+1===e.title.length&&(t.y+=e.titleMarginBottom-e.titleSpacing)})}},drawBody:function(t,e,a,o){a.textAlign=e._bodyAlign,a.textBaseline="top";var n=i.color(e.bodyColor);a.fillStyle=n.alpha(o*n.alpha()).rgbString(),a.font=i.fontString(e.bodyFontSize,e._bodyFontStyle,e._bodyFontFamily),i.each(e.beforeBody,function(i){a.fillText(i,t.x,t.y),t.y+=e.bodyFontSize+e.bodySpacing}),i.each(e.body,function(n,r){"single"!==this._options.tooltips.mode&&(a.fillStyle=i.color(e.legendColorBackground).alpha(o).rgbaString(),a.fillRect(t.x,t.y,e.bodyFontSize,e.bodyFontSize),a.strokeStyle=i.color(e.labelColors[r].borderColor).alpha(o).rgbaString(),a.strokeRect(t.x,t.y,e.bodyFontSize,e.bodyFontSize),a.fillStyle=i.color(e.labelColors[r].backgroundColor).alpha(o).rgbaString(),a.fillRect(t.x+1,t.y+1,e.bodyFontSize-2,e.bodyFontSize-2),a.fillStyle=i.color(e.bodyColor).alpha(o).rgbaString()),a.fillText(n,t.x+("single"!==this._options.tooltips.mode?e.bodyFontSize+2:0),t.y),t.y+=e.bodyFontSize+e.bodySpacing},this),i.each(e.afterBody,function(i){a.fillText(i,t.x,t.y),t.y+=e.bodyFontSize}),t.y-=e.bodySpacing},drawFooter:function(t,e,a,o){if(e.footer.length){t.y+=e.footerMarginTop,a.textAlign=e._footerAlign,a.textBaseline="top";var n=i.color(e.footerColor);a.fillStyle=n.alpha(o*n.alpha()).rgbString(),a.font=i.fontString(e.footerFontSize,e._footerFontStyle,e._footerFontFamily),i.each(e.footer,function(i){a.fillText(i,t.x,t.y),t.y+=e.footerFontSize+e.footerSpacing})}},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var a=e.caretPadding,o=this.getTooltipSize(e),n={x:e.x,y:e.y},r=Math.abs(e.opacity<.001)?0:e.opacity;if(this._options.tooltips.enabled){var s=i.color(e.backgroundColor);t.fillStyle=s.alpha(r*s.alpha()).rgbString(),i.drawRoundedRectangle(t,n.x,n.y,o.width,o.height,e.cornerRadius),t.fill(),this.drawCaret(n,o,r,a),n.x+=e.xPadding,n.y+=e.yPadding,this.drawTitle(n,e,t,r),this.drawBody(n,e,t,r),this.drawFooter(n,e,t,r)}}}})}},{}],34:[function(t,e,i){"use strict";e.exports=function(t,e){var i=t.helpers,a=t.defaults.global;a.elements.arc={backgroundColor:a.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2):!1},inRange:function(t,e){var a=this._view;if(a){for(var o=i.getAngleFromPoint(a,{x:t,y:e}),n=o.angle,r=o.distance,s=a.startAngle,l=a.endAngle;s>l;)l+=2*Math.PI;for(;n>l;)n-=2*Math.PI;for(;s>n;)n+=2*Math.PI;var h=n>=s&&l>=n,d=r>=a.innerRadius&&r<=a.outerRadius;return h&&d}return!1},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t=this._chart.ctx,e=this._view,i=e.startAngle,a=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,i,a),t.arc(e.x,e.y,e.innerRadius,a,i,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],35:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:i.defaultColor,borderWidth:3,borderColor:i.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",fill:!0},t.elements.Line=t.Element.extend({lineToNextPoint:function(t,e,i,a,o){var n=this._chart.ctx;e._view.skip?a.call(this,t,e,i):t._view.skip?o.call(this,t,e,i):0===e._view.tension?n.lineTo(e._view.x,e._view.y):n.bezierCurveTo(t._view.controlPointNextX,t._view.controlPointNextY,e._view.controlPointPreviousX,e._view.controlPointPreviousY,e._view.x,e._view.y)},draw:function(){function t(t){r._view.skip||s._view.skip?t&&n.lineTo(a._view.scaleZero.x,a._view.scaleZero.y):n.bezierCurveTo(s._view.controlPointNextX,s._view.controlPointNextY,r._view.controlPointPreviousX,r._view.controlPointPreviousY,r._view.x,r._view.y)}var a=this,o=this._view,n=this._chart.ctx,r=this._children[0],s=this._children[this._children.length-1];n.save(),this._children.length>0&&o.fill&&(n.beginPath(),e.each(this._children,function(t,i){var a=e.previousItem(this._children,i),r=e.nextItem(this._children,i);0===i?(this._loop?n.moveTo(o.scaleZero.x,o.scaleZero.y):n.moveTo(t._view.x,o.scaleZero),t._view.skip?this._loop||n.moveTo(r._view.x,this._view.scaleZero):n.lineTo(t._view.x,t._view.y)):this.lineToNextPoint(a,t,r,function(t,e,i){this._loop?n.lineTo(this._view.scaleZero.x,this._view.scaleZero.y):(n.lineTo(t._view.x,this._view.scaleZero),n.moveTo(i._view.x,this._view.scaleZero))},function(t,e){n.lineTo(e._view.x,e._view.y)})},this),this._loop?t(!0):(n.lineTo(this._children[this._children.length-1]._view.x,o.scaleZero),n.lineTo(this._children[0]._view.x,o.scaleZero)),n.fillStyle=o.backgroundColor||i.defaultColor,n.closePath(),n.fill());var l=i.elements.line;n.lineCap=o.borderCapStyle||l.borderCapStyle,n.setLineDash&&n.setLineDash(o.borderDash||l.borderDash),n.lineDashOffset=o.borderDashOffset||l.borderDashOffset,n.lineJoin=o.borderJoinStyle||l.borderJoinStyle,n.lineWidth=o.borderWidth||l.borderWidth,n.strokeStyle=o.borderColor||i.defaultColor,n.beginPath(),e.each(this._children,function(t,i){var a=e.previousItem(this._children,i),o=e.nextItem(this._children,i);0===i?n.moveTo(t._view.x,t._view.y):this.lineToNextPoint(a,t,o,function(t,e,i){n.moveTo(i._view.x,i._view.y)},function(t,e){n.moveTo(e._view.x,e._view.y)})},this),this._loop&&this._children.length>0&&t(),n.stroke(),n.restore()}})}},{}],36:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global,a=i.defaultColor;i.elements.point={radius:3,pointStyle:"circle",backgroundColor:a,borderWidth:1,borderColor:a,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var i=this._view;return i?Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2):!1},inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2):!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(){var t,o,n,r,s,l,h=this._view,d=this._chart.ctx,c=h.pointStyle,u=h.radius,f=h.x,g=h.y;if(!h.skip){if("object"==typeof c&&(t=c.toString(),"[object HTMLImageElement]"===t||"[object HTMLCanvasElement]"===t))return void d.drawImage(c,f-c.width/2,g-c.height/2);if(!(isNaN(u)||0>=u)){switch(d.strokeStyle=h.borderColor||a,d.lineWidth=e.getValueOrDefault(h.borderWidth,i.elements.point.borderWidth),d.fillStyle=h.backgroundColor||a,c){default:d.beginPath(),d.arc(f,g,u,0,2*Math.PI),d.closePath(),d.fill();break;case"triangle":d.beginPath(),o=3*u/Math.sqrt(3),s=o*Math.sqrt(3)/2,d.moveTo(f-o/2,g+s/3),d.lineTo(f+o/2,g+s/3),d.lineTo(f,g-2*s/3),d.closePath(),d.fill();break;case"rect":l=1/Math.SQRT2*u,d.fillRect(f-l,g-l,2*l,2*l),d.strokeRect(f-l,g-l,2*l,2*l);break;case"rectRot":d.translate(f,g),d.rotate(Math.PI/4),l=1/Math.SQRT2*u,d.fillRect(-l,-l,2*l,2*l),d.strokeRect(-l,-l,2*l,2*l),d.setTransform(1,0,0,1,0,0);break;case"cross":d.beginPath(),d.moveTo(f,g+u),d.lineTo(f,g-u),d.moveTo(f-u,g),d.lineTo(f+u,g),d.closePath();break;case"crossRot":d.beginPath(),n=Math.cos(Math.PI/4)*u,r=Math.sin(Math.PI/4)*u,d.moveTo(f-n,g-r),d.lineTo(f+n,g+r),d.moveTo(f-n,g+r),d.lineTo(f+n,g-r),d.closePath();break;case"star":d.beginPath(),d.moveTo(f,g+u),d.lineTo(f,g-u),d.moveTo(f-u,g),d.lineTo(f+u,g),n=Math.cos(Math.PI/4)*u,r=Math.sin(Math.PI/4)*u,d.moveTo(f-n,g-r),d.lineTo(f+n,g+r),d.moveTo(f-n,g+r),d.lineTo(f+n,g-r),d.closePath();break;case"line":d.beginPath(),d.moveTo(f-u,g),d.lineTo(f+u,g),d.closePath();break;case"dash":d.beginPath(),d.moveTo(f,g),d.lineTo(f+u,g),d.closePath()}d.stroke()}}}})}},{}],37:[function(t,e,i){"use strict";e.exports=function(t){var e=(t.helpers,t.defaults.global);e.elements.rectangle={backgroundColor:e.defaultColor,borderWidth:0,borderColor:e.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return l[(d+t)%4]}var e=this._chart.ctx,i=this._view,a=i.width/2,o=i.x-a,n=i.x+a,r=i.base-(i.base-i.y),s=i.borderWidth/2;i.borderWidth&&(o+=s,n-=s,r+=s),e.beginPath(),e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth;var l=[[o,i.base],[o,r],[n,r],[n,i.base]],h=["bottom","left","top","right"],d=h.indexOf(i.borderSkipped,0);-1===d&&(d=0),e.moveTo.apply(e,t(0));for(var c=1;4>c;c++)e.lineTo.apply(e,t(c));e.fill(),i.borderWidth&&e.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=this._view;return i?i.y<i.base?t>=i.x-i.width/2&&t<=i.x+i.width/2&&e>=i.y&&e<=i.base:t>=i.x-i.width/2&&t<=i.x+i.width/2&&e>=i.base&&e<=i.y:!1},inLabelRange:function(t){var e=this._view;return e?t>=e.x-e.width/2&&t<=e.x+e.width/2:!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],38:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"bottom"},a=t.Scale.extend({determineDataLimits:function(){this.minIndex=0,this.maxIndex=this.chart.data.labels.length-1;var t;void 0!==this.options.ticks.min&&(t=e.indexOf(this.chart.data.labels,this.options.ticks.min),this.minIndex=-1!==t?t:this.minIndex),void 0!==this.options.ticks.max&&(t=e.indexOf(this.chart.data.labels,this.options.ticks.max),this.maxIndex=-1!==t?t:this.maxIndex),this.min=this.chart.data.labels[this.minIndex],this.max=this.chart.data.labels[this.maxIndex]},buildTicks:function(t){this.ticks=0===this.minIndex&&this.maxIndex===this.chart.data.labels.length-1?this.chart.data.labels:this.chart.data.labels.slice(this.minIndex,this.maxIndex+1)},getLabelForIndex:function(t,e){return this.ticks[t]},getPixelForValue:function(t,e,i,a){var o=Math.max(this.maxIndex+1-this.minIndex-(this.options.gridLines.offsetGridLines?0:1),1);if(this.isHorizontal()){var n=this.width-(this.paddingLeft+this.paddingRight),r=n/o,s=r*(e-this.minIndex)+this.paddingLeft;return this.options.gridLines.offsetGridLines&&a&&(s+=r/2),this.left+Math.round(s)}var l=this.height-(this.paddingTop+this.paddingBottom),h=l/o,d=h*(e-this.minIndex)+this.paddingTop;return this.options.gridLines.offsetGridLines&&a&&(d+=h/2),this.top+Math.round(d)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,i=Math.max(this.ticks.length-(this.options.gridLines.offsetGridLines?0:1),1),a=this.isHorizontal(),o=a?this.width-(this.paddingLeft+this.paddingRight):this.height-(this.paddingTop+this.paddingBottom),n=o/i;return this.options.gridLines.offsetGridLines&&(t-=n/2),t-=a?this.paddingLeft:this.paddingTop,e=0>=t?0:Math.round(t/n)}});t.scaleService.registerScaleType("category",a,i)}},{}],39:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"left",ticks:{callback:function(t,i,a){var o=a.length>3?a[2]-a[1]:a[1]-a[0];Math.abs(o)>1&&t!==Math.floor(t)&&(o=t-Math.floor(t));var n=e.log10(Math.abs(o)),r="";if(0!==t){var s=-1*Math.floor(n);s=Math.max(Math.min(s,20),0),r=t.toFixed(s)}else r="0";return r}}},a=t.Scale.extend({determineDataLimits:function(){function t(t){return l?t.xAxisID===i.id:t.yAxisID===i.id}var i=this,a=i.options,o=a.ticks,n=i.chart,r=n.data,s=r.datasets,l=i.isHorizontal();if(i.min=null,i.max=null,a.stacked){var h={},d=!1,c=!1;e.each(s,function(o,r){var s=n.getDatasetMeta(r);void 0===h[s.type]&&(h[s.type]={positiveValues:[],negativeValues:[]});var l=h[s.type].positiveValues,u=h[s.type].negativeValues;n.isDatasetVisible(r)&&t(s)&&e.each(o.data,function(t,e){var o=+i.getRightValue(t);isNaN(o)||s.data[e].hidden||(l[e]=l[e]||0,u[e]=u[e]||0,a.relativePoints?l[e]=100:0>o?(c=!0,u[e]+=o):(d=!0,l[e]+=o))})}),e.each(h,function(t){var a=t.positiveValues.concat(t.negativeValues),o=e.min(a),n=e.max(a);i.min=null===i.min?o:Math.min(i.min,o),i.max=null===i.max?n:Math.max(i.max,n)})}else e.each(s,function(a,o){var r=n.getDatasetMeta(o);n.isDatasetVisible(o)&&t(r)&&e.each(a.data,function(t,e){var a=+i.getRightValue(t);isNaN(a)||r.data[e].hidden||(null===i.min?i.min=a:a<i.min&&(i.min=a),null===i.max?i.max=a:a>i.max&&(i.max=a))})});if(o.beginAtZero){var u=e.sign(i.min),f=e.sign(i.max);0>u&&0>f?i.max=0:u>0&&f>0&&(i.min=0)}void 0!==o.min?i.min=o.min:void 0!==o.suggestedMin&&(i.min=Math.min(i.min,o.suggestedMin)),void 0!==o.max?i.max=o.max:void 0!==o.suggestedMax&&(i.max=Math.max(i.max,o.suggestedMax)),i.min===i.max&&(i.max++,o.beginAtZero||i.min--)},buildTicks:function(){var i,a=this,o=a.options,n=o.ticks,r=e.getValueOrDefault,s=a.isHorizontal(),l=a.ticks=[];if(s)i=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(a.width/50));else{var h=r(n.fontSize,t.defaults.global.defaultFontSize);i=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(a.height/(2*h)))}i=Math.max(2,i);var d,c=n.fixedStepSize&&n.fixedStepSize>0||n.stepSize&&n.stepSize>0;if(c)d=r(n.fixedStepSize,n.stepSize);else{var u=e.niceNum(a.max-a.min,!1);d=e.niceNum(u/(i-1),!0)}var f=Math.floor(a.min/d)*d,g=Math.ceil(a.max/d)*d,p=(g-f)/d;p=e.almostEquals(p,Math.round(p),d/1e3)?Math.round(p):Math.ceil(p),l.push(void 0!==n.min?n.min:f);for(var m=1;p>m;++m)l.push(f+m*d);l.push(void 0!==n.max?n.max:g),
s||l.reverse(),a.max=e.max(l),a.min=e.min(l),n.reverse?(l.reverse(),a.start=a.max,a.end=a.min):(a.start=a.min,a.end=a.max)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)},getPixelForValue:function(t,e,i,a){var o,n,r=this,s=r.paddingLeft,l=r.paddingBottom,h=r.start,d=+r.getRightValue(t),c=r.end-h;return r.isHorizontal()?(n=r.width-(s+r.paddingRight),o=r.left+n/c*(d-h),Math.round(o+s)):(n=r.height-(r.paddingTop+l),o=r.bottom-l-n/c*(d-h),Math.round(o))},getValueForPixel:function(t){var e=this,i=e.isHorizontal(),a=e.paddingLeft,o=e.paddingBottom,n=i?e.width-(a+e.paddingRight):e.height-(e.paddingTop+o),r=(i?t-e.left-a:e.bottom-o-t)/n;return e.start+(e.end-e.start)*r},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticksAsNumbers[t],null,null,e)}});t.scaleService.registerScaleType("linear",a,i)}},{}],40:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"left",ticks:{callback:function(t,i,a){var o=t/Math.pow(10,Math.floor(e.log10(t)));return 1===o||2===o||5===o||0===i||i===a.length-1?t.toExponential():""}}},a=t.Scale.extend({determineDataLimits:function(){function t(t){return h?t.xAxisID===i.id:t.yAxisID===i.id}var i=this,a=i.options,o=a.ticks,n=i.chart,r=n.data,s=r.datasets,l=e.getValueOrDefault,h=i.isHorizontal();if(i.min=null,i.max=null,a.stacked){var d={};e.each(s,function(o,r){var s=n.getDatasetMeta(r);n.isDatasetVisible(r)&&t(s)&&(void 0===d[s.type]&&(d[s.type]=[]),e.each(o.data,function(t,e){var o=d[s.type],n=+i.getRightValue(t);isNaN(n)||s.data[e].hidden||(o[e]=o[e]||0,a.relativePoints?o[e]=100:o[e]+=n)}))}),e.each(d,function(t){var a=e.min(t),o=e.max(t);i.min=null===i.min?a:Math.min(i.min,a),i.max=null===i.max?o:Math.max(i.max,o)})}else e.each(s,function(a,o){var r=n.getDatasetMeta(o);n.isDatasetVisible(o)&&t(r)&&e.each(a.data,function(t,e){var a=+i.getRightValue(t);isNaN(a)||r.data[e].hidden||(null===i.min?i.min=a:a<i.min&&(i.min=a),null===i.max?i.max=a:a>i.max&&(i.max=a))})});i.min=l(o.min,i.min),i.max=l(o.max,i.max),i.min===i.max&&(0!==i.min&&null!==i.min?(i.min=Math.pow(10,Math.floor(e.log10(i.min))-1),i.max=Math.pow(10,Math.floor(e.log10(i.max))+1)):(i.min=1,i.max=10))},buildTicks:function(){for(var t=this,i=t.options,a=i.ticks,o=e.getValueOrDefault,n=t.ticks=[],r=o(a.min,Math.pow(10,Math.floor(e.log10(t.min))));r<t.max;){n.push(r);var s=Math.floor(e.log10(r)),l=Math.floor(r/Math.pow(10,s))+1;10===l&&(l=1,++s),r=l*Math.pow(10,s)}var h=o(a.max,r);n.push(h),t.isHorizontal()||n.reverse(),t.max=e.max(n),t.min=e.min(n),a.reverse?(n.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t,e){return this.getPixelForValue(this.tickValues[t],null,null,e)},getPixelForValue:function(t,i,a,o){var n,r,s=this,l=s.start,h=+s.getRightValue(t),d=e.log10(s.end)-e.log10(l),c=s.paddingTop,u=s.paddingBottom,f=s.paddingLeft;return s.isHorizontal()?0===h?r=s.left+f:(n=s.width-(f+s.paddingRight),r=s.left+n/d*(e.log10(h)-e.log10(l)),r+=f):0===h?r=s.top+c:(n=s.height-(c+u),r=s.bottom-u-n/d*(e.log10(h)-e.log10(l))),r},getValueForPixel:function(t){var i,a,o=this,n=e.log10(o.end)-e.log10(o.start);return o.isHorizontal()?(a=o.width-(o.paddingLeft+o.paddingRight),i=o.start*Math.pow(10,(t-o.left-o.paddingLeft)*n/a)):(a=o.height-(o.paddingTop+o.paddingBottom),i=Math.pow(10,(o.bottom-o.paddingBottom-t)*n/a)/o.start),i}});t.scaleService.registerScaleType("logarithmic",a,i)}},{}],41:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global,a={display:!0,animate:!0,lineArc:!1,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2},pointLabels:{fontSize:10,callback:function(t){return t}}},o=t.Scale.extend({getValueCount:function(){return this.chart.data.labels.length},setDimensions:function(){var t=this.options;this.width=this.maxWidth,this.height=this.maxHeight,this.xCenter=Math.round(this.width/2),this.yCenter=Math.round(this.height/2);var a=e.min([this.height,this.width]),o=e.getValueOrDefault(t.ticks.fontSize,i.defaultFontSize);this.drawingArea=t.display?a/2-(o/2+t.ticks.backdropPaddingY):a/2},determineDataLimits:function(){if(this.min=null,this.max=null,e.each(this.chart.data.datasets,function(t,i){if(this.chart.isDatasetVisible(i)){var a=this.chart.getDatasetMeta(i);e.each(t.data,function(t,e){var i=+this.getRightValue(t);isNaN(i)||a.data[e].hidden||(null===this.min?this.min=i:i<this.min&&(this.min=i),null===this.max?this.max=i:i>this.max&&(this.max=i))},this)}},this),this.options.ticks.beginAtZero){var t=e.sign(this.min),i=e.sign(this.max);0>t&&0>i?this.max=0:t>0&&i>0&&(this.min=0)}void 0!==this.options.ticks.min?this.min=this.options.ticks.min:void 0!==this.options.ticks.suggestedMin&&(this.min=Math.min(this.min,this.options.ticks.suggestedMin)),void 0!==this.options.ticks.max?this.max=this.options.ticks.max:void 0!==this.options.ticks.suggestedMax&&(this.max=Math.max(this.max,this.options.ticks.suggestedMax)),this.min===this.max&&(this.min--,this.max++)},buildTicks:function(){this.ticks=[];var t=e.getValueOrDefault(this.options.ticks.fontSize,i.defaultFontSize),a=Math.min(this.options.ticks.maxTicksLimit?this.options.ticks.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*t)));a=Math.max(2,a);var o=e.niceNum(this.max-this.min,!1),n=e.niceNum(o/(a-1),!0),r=Math.floor(this.min/n)*n,s=Math.ceil(this.max/n)*n,l=Math.ceil((s-r)/n);this.ticks.push(void 0!==this.options.ticks.min?this.options.ticks.min:r);for(var h=1;l>h;++h)this.ticks.push(r+h*n);this.ticks.push(void 0!==this.options.ticks.max?this.options.ticks.max:s),this.max=e.max(this.ticks),this.min=e.min(this.ticks),this.options.ticks.reverse?(this.ticks.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),this.zeroLineIndex=this.ticks.indexOf(0)},convertTicksToLabels:function(){t.Scale.prototype.convertTicksToLabels.call(this),this.pointLabels=this.chart.data.labels.map(this.options.pointLabels.callback,this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,a,o,n,r,s,l,h,d,c,u,f,g=this.options.pointLabels,p=e.getValueOrDefault(g.fontSize,i.defaultFontSize),m=e.getValueOrDefault(g.fontStyle,i.defaultFontStyle),b=e.getValueOrDefault(g.fontFamily,i.defaultFontFamily),v=e.fontString(p,m,b),x=e.min([this.height/2-p-5,this.width/2]),y=this.width,k=0;for(this.ctx.font=v,a=0;a<this.getValueCount();a++)t=this.getPointPosition(a,x),o=this.ctx.measureText(this.pointLabels[a]?this.pointLabels[a]:"").width+5,0===a||a===this.getValueCount()/2?(n=o/2,t.x+n>y&&(y=t.x+n,r=a),t.x-n<k&&(k=t.x-n,l=a)):a<this.getValueCount()/2?t.x+o>y&&(y=t.x+o,r=a):a>this.getValueCount()/2&&t.x-o<k&&(k=t.x-o,l=a);d=k,c=Math.ceil(y-this.width),s=this.getIndexAngle(r),h=this.getIndexAngle(l),u=c/Math.sin(s+Math.PI/2),f=d/Math.sin(h+Math.PI/2),u=e.isNumber(u)?u:0,f=e.isNumber(f)?f:0,this.drawingArea=Math.round(x-(f+u)/2),this.setCenterPoint(f,u)},setCenterPoint:function(t,e){var i=this.width-e-this.drawingArea,a=t+this.drawingArea;this.xCenter=Math.round((a+i)/2+this.left),this.yCenter=Math.round(this.height/2+this.top)},getIndexAngle:function(t){var e=2*Math.PI/this.getValueCount();return t*e-Math.PI/2},getDistanceFromCenterForValue:function(t){if(null===t)return 0;var e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e},getPointPosition:function(t,e){var i=this.getIndexAngle(t);return{x:Math.round(Math.cos(i)*e)+this.xCenter,y:Math.round(Math.sin(i)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,i=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:0>e&&0>i?i:e>0&&i>0?e:0)},draw:function(){if(this.options.display){var t=this.ctx;if(e.each(this.ticks,function(a,o){if(o>0||this.options.reverse){var n=this.getDistanceFromCenterForValue(this.ticks[o]),r=this.yCenter-n;if(this.options.gridLines.display)if(t.strokeStyle=this.options.gridLines.color,t.lineWidth=this.options.gridLines.lineWidth,this.options.lineArc)t.beginPath(),t.arc(this.xCenter,this.yCenter,n,0,2*Math.PI),t.closePath(),t.stroke();else{t.beginPath();for(var s=0;s<this.getValueCount();s++){var l=this.getPointPosition(s,this.getDistanceFromCenterForValue(this.ticks[o]));0===s?t.moveTo(l.x,l.y):t.lineTo(l.x,l.y)}t.closePath(),t.stroke()}if(this.options.ticks.display){var h=e.getValueOrDefault(this.options.ticks.fontColor,i.defaultFontColor),d=e.getValueOrDefault(this.options.ticks.fontSize,i.defaultFontSize),c=e.getValueOrDefault(this.options.ticks.fontStyle,i.defaultFontStyle),u=e.getValueOrDefault(this.options.ticks.fontFamily,i.defaultFontFamily),f=e.fontString(d,c,u);if(t.font=f,this.options.ticks.showLabelBackdrop){var g=t.measureText(a).width;t.fillStyle=this.options.ticks.backdropColor,t.fillRect(this.xCenter-g/2-this.options.ticks.backdropPaddingX,r-d/2-this.options.ticks.backdropPaddingY,g+2*this.options.ticks.backdropPaddingX,d+2*this.options.ticks.backdropPaddingY)}t.textAlign="center",t.textBaseline="middle",t.fillStyle=h,t.fillText(a,this.xCenter,r)}}},this),!this.options.lineArc){t.lineWidth=this.options.angleLines.lineWidth,t.strokeStyle=this.options.angleLines.color;for(var a=this.getValueCount()-1;a>=0;a--){if(this.options.angleLines.display){var o=this.getPointPosition(a,this.getDistanceFromCenterForValue(this.options.reverse?this.min:this.max));t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(o.x,o.y),t.stroke(),t.closePath()}var n=this.getPointPosition(a,this.getDistanceFromCenterForValue(this.options.reverse?this.min:this.max)+5),r=e.getValueOrDefault(this.options.pointLabels.fontColor,i.defaultFontColor),s=e.getValueOrDefault(this.options.pointLabels.fontSize,i.defaultFontSize),l=e.getValueOrDefault(this.options.pointLabels.fontStyle,i.defaultFontStyle),h=e.getValueOrDefault(this.options.pointLabels.fontFamily,i.defaultFontFamily),d=e.fontString(s,l,h);t.font=d,t.fillStyle=r;var c=this.pointLabels.length,u=this.pointLabels.length/2,f=u/2,g=f>a||a>c-f,p=a===f||a===c-f;0===a?t.textAlign="center":a===u?t.textAlign="center":u>a?t.textAlign="left":t.textAlign="right",p?t.textBaseline="middle":g?t.textBaseline="bottom":t.textBaseline="top",t.fillText(this.pointLabels[a]?this.pointLabels[a]:"",n.x,n.y)}}}}});t.scaleService.registerScaleType("radialLinear",o,a)}},{}],42:[function(t,e,i){"use strict";var a=t("moment");a="function"==typeof a?a:window.moment,e.exports=function(t){var e=t.helpers,i={units:[{name:"millisecond",steps:[1,2,5,10,20,50,100,250,500]},{name:"second",steps:[1,2,5,10,30]},{name:"minute",steps:[1,2,5,10,30]},{name:"hour",steps:[1,2,3,6,12]},{name:"day",steps:[1,2,5]},{name:"week",maxStep:4},{name:"month",maxStep:3},{name:"quarter",maxStep:4},{name:"year",maxStep:!1}]},o={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}},n=t.Scale.extend({initialize:function(){if(!a)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},getLabelMoment:function(t,e){return this.labelMoments[t][e]},getMomentStartOf:function(t){return"week"===this.options.time.unit&&this.options.time.isoWeekday!==!1?t.clone().startOf("isoWeek").isoWeekday(this.options.time.isoWeekday):t.clone().startOf(this.tickUnit)},determineDataLimits:function(){this.labelMoments=[];var t=[];this.chart.data.labels&&this.chart.data.labels.length>0?(e.each(this.chart.data.labels,function(e,i){var a=this.parseTime(e);a.isValid()&&(this.options.time.round&&a.startOf(this.options.time.round),t.push(a))},this),this.firstTick=a.min.call(this,t),this.lastTick=a.max.call(this,t)):(this.firstTick=null,this.lastTick=null),e.each(this.chart.data.datasets,function(i,o){var n=[],r=this.chart.isDatasetVisible(o);"object"==typeof i.data[0]&&null!==i.data[0]?e.each(i.data,function(t,e){var i=this.parseTime(this.getRightValue(t));i.isValid()&&(this.options.time.round&&i.startOf(this.options.time.round),n.push(i),r&&(this.firstTick=null!==this.firstTick?a.min(this.firstTick,i):i,this.lastTick=null!==this.lastTick?a.max(this.lastTick,i):i))},this):n=t,this.labelMoments.push(n)},this),this.options.time.min&&(this.firstTick=this.parseTime(this.options.time.min)),this.options.time.max&&(this.lastTick=this.parseTime(this.options.time.max)),this.firstTick=(this.firstTick||a()).clone(),this.lastTick=(this.lastTick||a()).clone()},buildTicks:function(a){this.ctx.save();var o=e.getValueOrDefault(this.options.ticks.fontSize,t.defaults.global.defaultFontSize),n=e.getValueOrDefault(this.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),r=e.getValueOrDefault(this.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),s=e.fontString(o,n,r);if(this.ctx.font=s,this.ticks=[],this.unitScale=1,this.scaleSizeInUnits=0,this.options.time.unit)this.tickUnit=this.options.time.unit||"day",this.displayFormat=this.options.time.displayFormats[this.tickUnit],this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0),this.unitScale=e.getValueOrDefault(this.options.time.unitStepSize,1);else{var l=this.isHorizontal()?this.width-(this.paddingLeft+this.paddingRight):this.height-(this.paddingTop+this.paddingBottom),h=this.tickFormatFunction(this.firstTick,0,[]),d=this.ctx.measureText(h).width,c=Math.cos(e.toRadians(this.options.ticks.maxRotation)),u=Math.sin(e.toRadians(this.options.ticks.maxRotation));d=d*c+o*u;var f=l/d;this.tickUnit="millisecond",this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0),this.displayFormat=this.options.time.displayFormats[this.tickUnit];for(var g=0,p=i.units[g];g<i.units.length;){if(this.unitScale=1,e.isArray(p.steps)&&Math.ceil(this.scaleSizeInUnits/f)<e.max(p.steps)){for(var m=0;m<p.steps.length;++m)if(p.steps[m]>=Math.ceil(this.scaleSizeInUnits/f)){this.unitScale=e.getValueOrDefault(this.options.time.unitStepSize,p.steps[m]);break}break}if(p.maxStep===!1||Math.ceil(this.scaleSizeInUnits/f)<p.maxStep){this.unitScale=e.getValueOrDefault(this.options.time.unitStepSize,Math.ceil(this.scaleSizeInUnits/f));break}++g,p=i.units[g],this.tickUnit=p.name;var b=this.firstTick.diff(this.getMomentStartOf(this.firstTick),this.tickUnit,!0),v=this.getMomentStartOf(this.lastTick.clone().add(1,this.tickUnit)).diff(this.lastTick,this.tickUnit,!0);this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0)+b+v,this.displayFormat=this.options.time.displayFormats[p.name]}}var x;if(this.options.time.min?x=this.getMomentStartOf(this.firstTick):(this.firstTick=this.getMomentStartOf(this.firstTick),x=this.firstTick),!this.options.time.max){var y=this.getMomentStartOf(this.lastTick);0!==y.diff(this.lastTick,this.tickUnit,!0)&&(this.lastTick=this.getMomentStartOf(this.lastTick.add(1,this.tickUnit)))}this.smallestLabelSeparation=this.width,e.each(this.chart.data.datasets,function(t,e){for(var i=1;i<this.labelMoments[e].length;i++)this.smallestLabelSeparation=Math.min(this.smallestLabelSeparation,this.labelMoments[e][i].diff(this.labelMoments[e][i-1],this.tickUnit,!0))},this),this.options.time.displayFormat&&(this.displayFormat=this.options.time.displayFormat),this.ticks.push(this.firstTick.clone());for(var k=1;k<=this.scaleSizeInUnits;++k){var S=x.clone().add(k,this.tickUnit);if(this.options.time.max&&S.diff(this.lastTick,this.tickUnit,!0)>=0)break;k%this.unitScale===0&&this.ticks.push(S)}var C=this.ticks[this.ticks.length-1].diff(this.lastTick,this.tickUnit);(0!==C||0===this.scaleSizeInUnits)&&(this.options.time.max?(this.ticks.push(this.lastTick.clone()),this.scaleSizeInUnits=this.lastTick.diff(this.ticks[0],this.tickUnit,!0)):(this.ticks.push(this.lastTick.clone()),this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0))),this.ctx.restore()},getLabelForIndex:function(t,e){var i=this.chart.data.labels&&t<this.chart.data.labels.length?this.chart.data.labels[t]:"";return"object"==typeof this.chart.data.datasets[e].data[0]&&(i=this.getRightValue(this.chart.data.datasets[e].data[t])),this.options.time.tooltipFormat&&(i=this.parseTime(i).format(this.options.time.tooltipFormat)),i},tickFormatFunction:function(t,i,a){var o=t.format(this.displayFormat),n=this.options.ticks,r=e.getValueOrDefault(n.callback,n.userCallback);return r?r(o,i,a):o},convertTicksToLabels:function(){this.tickMoments=this.ticks,this.ticks=this.ticks.map(this.tickFormatFunction,this)},getPixelForValue:function(t,e,i,a){var o=t&&t.isValid&&t.isValid()?t:this.getLabelMoment(i,e);if(o){var n=o.diff(this.firstTick,this.tickUnit,!0),r=n/this.scaleSizeInUnits;if(this.isHorizontal()){var s=this.width-(this.paddingLeft+this.paddingRight),l=(s/Math.max(this.ticks.length-1,1),s*r+this.paddingLeft);return this.left+Math.round(l)}var h=this.height-(this.paddingTop+this.paddingBottom),d=(h/Math.max(this.ticks.length-1,1),h*r+this.paddingTop);return this.top+Math.round(d)}},getPixelForTick:function(t,e){return this.getPixelForValue(this.tickMoments[t],null,null,e)},getValueForPixel:function(t){var e=this.isHorizontal()?this.width-(this.paddingLeft+this.paddingRight):this.height-(this.paddingTop+this.paddingBottom),i=(t-(this.isHorizontal()?this.left+this.paddingLeft:this.top+this.paddingTop))/e;return i*=this.scaleSizeInUnits,this.firstTick.clone().add(a.duration(i,this.tickUnit).asSeconds(),"seconds")},parseTime:function(t){return"string"==typeof this.options.time.parser?a(t,this.options.time.parser):"function"==typeof this.options.time.parser?this.options.time.parser(t):"function"==typeof t.getMonth||"number"==typeof t?a(t):t.isValid&&t.isValid()?t:"string"!=typeof this.options.time.format&&this.options.time.format.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"),this.options.time.format(t)):a(t,this.options.time.format)}});t.scaleService.registerScaleType("time",n,o)}},{moment:1}]},{},[7]);

(function(){var AnimatedText,AnimatedTextFactory,Bar,BaseDonut,BaseGauge,Donut,Gauge,GaugePointer,TextRenderer,ValueUpdater,addCommas,cutHex,formatNumber,mergeObjects,secondsToString,updateObjectValues,_ref,_ref1,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;};(function(){var browserRequestAnimationFrame,isCancelled,lastId,vendor,vendors,_i,_len;vendors=['ms','moz','webkit','o'];for(_i=0,_len=vendors.length;_i<_len;_i++){vendor=vendors[_i];if(window.requestAnimationFrame){break;}
window.requestAnimationFrame=window[vendor+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendor+'CancelAnimationFrame']||window[vendor+'CancelRequestAnimationFrame'];}
browserRequestAnimationFrame=null;lastId=0;isCancelled={};if(!requestAnimationFrame){window.requestAnimationFrame=function(callback,element){var currTime,id,lastTime,timeToCall;currTime=new Date().getTime();timeToCall=Math.max(0,16-(currTime-lastTime));id=window.setTimeout(function(){return callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};return window.cancelAnimationFrame=function(id){return clearTimeout(id);};}else if(!window.cancelAnimationFrame){browserRequestAnimationFrame=window.requestAnimationFrame;window.requestAnimationFrame=function(callback,element){var myId;myId=++lastId;browserRequestAnimationFrame(function(){if(!isCancelled[myId]){return callback();}},element);return myId;};return window.cancelAnimationFrame=function(id){return isCancelled[id]=true;};}})();String.prototype.hashCode=function(){var char,hash,i,_i,_ref;hash=0;if(this.length===0){return hash;}
for(i=_i=0,_ref=this.length;0<=_ref?_i<_ref:_i>_ref;i=0<=_ref?++_i:--_i){char=this.charCodeAt(i);hash=((hash<<5)-hash)+char;hash=hash&hash;}
return hash;};secondsToString=function(sec){var hr,min;hr=Math.floor(sec/3600);min=Math.floor((sec-(hr*3600))/60);sec-=(hr*3600)+(min*60);sec+='';min+='';while(min.length<2){min='0'+min;}
while(sec.length<2){sec='0'+sec;}
hr=hr?hr+':':'';return hr+min+':'+sec;};formatNumber=function(num){return addCommas(num.toFixed(0));};updateObjectValues=function(obj1,obj2){var key,val;for(key in obj2){if(!__hasProp.call(obj2,key))continue;val=obj2[key];obj1[key]=val;}
return obj1;};mergeObjects=function(obj1,obj2){var key,out,val;out={};for(key in obj1){if(!__hasProp.call(obj1,key))continue;val=obj1[key];out[key]=val;}
for(key in obj2){if(!__hasProp.call(obj2,key))continue;val=obj2[key];out[key]=val;}
return out;};addCommas=function(nStr){var rgx,x,x1,x2;nStr+='';x=nStr.split('.');x1=x[0];x2='';if(x.length>1){x2='.'+x[1];}
rgx=/(\d+)(\d{3})/;while(rgx.test(x1)){x1=x1.replace(rgx,'$1'+','+'$2');}
return x1+x2;};cutHex=function(nStr){if(nStr.charAt(0)==="#"){return nStr.substring(1,7);}
return nStr;};ValueUpdater=(function(){ValueUpdater.prototype.animationSpeed=32;function ValueUpdater(addToAnimationQueue,clear){if(addToAnimationQueue==null){addToAnimationQueue=true;}
this.clear=clear!=null?clear:true;if(addToAnimationQueue){AnimationUpdater.add(this);}}
ValueUpdater.prototype.update=function(force){var diff;if(force==null){force=false;}
if(force||this.displayedValue!==this.value){if(this.ctx&&this.clear){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);}
diff=this.value-this.displayedValue;if(Math.abs(diff/this.animationSpeed)<=0.001){this.displayedValue=this.value;}else{this.displayedValue=this.displayedValue+diff/this.animationSpeed;}
this.render();return true;}
return false;};return ValueUpdater;})();BaseGauge=(function(_super){__extends(BaseGauge,_super);function BaseGauge(){_ref=BaseGauge.__super__.constructor.apply(this,arguments);return _ref;}
BaseGauge.prototype.displayScale=1;BaseGauge.prototype.setTextField=function(textField){return this.textField=textField instanceof TextRenderer?textField:new TextRenderer(textField);};BaseGauge.prototype.setMinValue=function(minValue,updateStartValue){var gauge,_i,_len,_ref1,_results;this.minValue=minValue;if(updateStartValue==null){updateStartValue=true;}
if(updateStartValue){this.displayedValue=this.minValue;_ref1=this.gp||[];_results=[];for(_i=0,_len=_ref1.length;_i<_len;_i++){gauge=_ref1[_i];_results.push(gauge.displayedValue=this.minValue);}
return _results;}};BaseGauge.prototype.setOptions=function(options){if(options==null){options=null;}
this.options=mergeObjects(this.options,options);if(this.textField){this.textField.el.style.fontSize=options.fontSize+'px';}
if(this.options.angle>.5){this.gauge.options.angle=.5;}
this.configDisplayScale();return this;};BaseGauge.prototype.configDisplayScale=function(){var backingStorePixelRatio,devicePixelRatio,height,prevDisplayScale,width;prevDisplayScale=this.displayScale;if(this.options.highDpiSupport===false){delete this.displayScale;}else{devicePixelRatio=window.devicePixelRatio||1;backingStorePixelRatio=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1;this.displayScale=devicePixelRatio/backingStorePixelRatio;}
if(this.displayScale!==prevDisplayScale){width=this.canvas.G__width||this.canvas.width;height=this.canvas.G__height||this.canvas.height;this.canvas.width=width*this.displayScale;this.canvas.height=height*this.displayScale;this.canvas.style.width=""+width+"px";this.canvas.style.height=""+height+"px";this.canvas.G__width=width;this.canvas.G__height=height;}
return this;};return BaseGauge;})(ValueUpdater);TextRenderer=(function(){function TextRenderer(el){this.el=el;}
TextRenderer.prototype.render=function(gauge){return this.el.innerHTML=formatNumber(gauge.displayedValue);};return TextRenderer;})();AnimatedText=(function(_super){__extends(AnimatedText,_super);AnimatedText.prototype.displayedValue=0;AnimatedText.prototype.value=0;AnimatedText.prototype.setVal=function(value){return this.value=1*value;};function AnimatedText(elem,text){this.elem=elem;this.text=text!=null?text:false;this.value=1*this.elem.innerHTML;if(this.text){this.value=0;}}
AnimatedText.prototype.render=function(){var textVal;if(this.text){textVal=secondsToString(this.displayedValue.toFixed(0));}else{textVal=addCommas(formatNumber(this.displayedValue));}
return this.elem.innerHTML=textVal;};return AnimatedText;})(ValueUpdater);AnimatedTextFactory={create:function(objList){var elem,out,_i,_len;out=[];for(_i=0,_len=objList.length;_i<_len;_i++){elem=objList[_i];out.push(new AnimatedText(elem));}
return out;}};GaugePointer=(function(_super){__extends(GaugePointer,_super);GaugePointer.prototype.displayedValue=0;GaugePointer.prototype.value=0;GaugePointer.prototype.options={strokeWidth:0.035,length:0.1,color:"#000000"};function GaugePointer(gauge){this.gauge=gauge;this.ctx=this.gauge.ctx;this.canvas=this.gauge.canvas;GaugePointer.__super__.constructor.call(this,false,false);this.setOptions();}
GaugePointer.prototype.setOptions=function(options){if(options==null){options=null;}
updateObjectValues(this.options,options);this.length=this.canvas.height*this.options.length;this.strokeWidth=this.canvas.height*this.options.strokeWidth;this.maxValue=this.gauge.maxValue;this.minValue=this.gauge.minValue;this.animationSpeed=this.gauge.animationSpeed;return this.options.angle=this.gauge.options.angle;};GaugePointer.prototype.render=function(){var angle,centerX,centerY,endX,endY,startX,startY,x,y;angle=this.gauge.getAngle.call(this,this.displayedValue);centerX=this.canvas.width/2;centerY=this.canvas.height*0.9;x=Math.round(centerX+this.length*Math.cos(angle));y=Math.round(centerY+this.length*Math.sin(angle));startX=Math.round(centerX+this.strokeWidth*Math.cos(angle-Math.PI/2));startY=Math.round(centerY+this.strokeWidth*Math.sin(angle-Math.PI/2));endX=Math.round(centerX+this.strokeWidth*Math.cos(angle+Math.PI/2));endY=Math.round(centerY+this.strokeWidth*Math.sin(angle+Math.PI/2));this.ctx.fillStyle=this.options.color;this.ctx.beginPath();this.ctx.arc(centerX,centerY,this.strokeWidth,0,Math.PI*2,true);this.ctx.fill();this.ctx.beginPath();this.ctx.moveTo(startX,startY);this.ctx.lineTo(x,y);this.ctx.lineTo(endX,endY);return this.ctx.fill();};return GaugePointer;})(ValueUpdater);Bar=(function(){function Bar(elem){this.elem=elem;}
Bar.prototype.updateValues=function(arrValues){this.value=arrValues[0];this.maxValue=arrValues[1];this.avgValue=arrValues[2];return this.render();};Bar.prototype.render=function(){var avgPercent,valPercent;if(this.textField){this.textField.text(formatNumber(this.value));}
if(this.maxValue===0){this.maxValue=this.avgValue*2;}
valPercent=(this.value/this.maxValue)*100;avgPercent=(this.avgValue/this.maxValue)*100;$(".bar-value",this.elem).css({"width":valPercent+"%"});return $(".typical-value",this.elem).css({"width":avgPercent+"%"});};return Bar;})();Gauge=(function(_super){__extends(Gauge,_super);Gauge.prototype.elem=null;Gauge.prototype.value=[20];Gauge.prototype.maxValue=80;Gauge.prototype.minValue=0;Gauge.prototype.displayedAngle=0;Gauge.prototype.displayedValue=0;Gauge.prototype.lineWidth=40;Gauge.prototype.paddingBottom=0.1;Gauge.prototype.percentColors=null;Gauge.prototype.options={colorStart:"#6fadcf",colorStop:void 0,gradientType:0,strokeColor:"#e0e0e0",pointer:{length:0.8,strokeWidth:0.035},angle:0.15,lineWidth:0.44,fontSize:40,limitMax:false};function Gauge(canvas){this.canvas=canvas;Gauge.__super__.constructor.call(this);this.percentColors=null;if(typeof G_vmlCanvasManager!=='undefined'){this.canvas=window.G_vmlCanvasManager.initElement(this.canvas);}
this.ctx=this.canvas.getContext('2d');this.gp=[new GaugePointer(this)];this.setOptions();this.render();}
Gauge.prototype.setOptions=function(options){var gauge,_i,_len,_ref1;if(options==null){options=null;}
Gauge.__super__.setOptions.call(this,options);this.configPercentColors();this.lineWidth=this.canvas.height*(1-this.paddingBottom)*this.options.lineWidth;this.radius=this.canvas.height*(1-this.paddingBottom)-this.lineWidth;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);this.render();_ref1=this.gp;for(_i=0,_len=_ref1.length;_i<_len;_i++){gauge=_ref1[_i];gauge.setOptions(this.options.pointer);gauge.render();}
return this;};Gauge.prototype.configPercentColors=function(){var bval,gval,i,rval,_i,_ref1,_results;this.percentColors=null;if(this.options.percentColors!==void 0){this.percentColors=new Array();_results=[];for(i=_i=0,_ref1=this.options.percentColors.length-1;0<=_ref1?_i<=_ref1:_i>=_ref1;i=0<=_ref1?++_i:--_i){rval=parseInt((cutHex(this.options.percentColors[i][1])).substring(0,2),16);gval=parseInt((cutHex(this.options.percentColors[i][1])).substring(2,4),16);bval=parseInt((cutHex(this.options.percentColors[i][1])).substring(4,6),16);_results.push(this.percentColors[i]={pct:this.options.percentColors[i][0],color:{r:rval,g:gval,b:bval}});}
return _results;}};Gauge.prototype.set=function(value){var i,max_hit,val,_i,_j,_len,_ref1;if(!(value instanceof Array)){value=[value];}
if(value.length>this.gp.length){for(i=_i=0,_ref1=value.length-this.gp.length;0<=_ref1?_i<_ref1:_i>_ref1;i=0<=_ref1?++_i:--_i){this.gp.push(new GaugePointer(this));}}
i=0;max_hit=false;for(_j=0,_len=value.length;_j<_len;_j++){val=value[_j];if(val>this.maxValue){this.maxValue=this.value*1.1;max_hit=true;}
this.gp[i].value=val;this.gp[i++].setOptions({maxValue:this.maxValue,angle:this.options.angle});}
this.value=value[value.length-1];if(max_hit){if(!this.options.limitMax){return AnimationUpdater.run();}}else{return AnimationUpdater.run();}};Gauge.prototype.getAngle=function(value){return(1+this.options.angle)*Math.PI+((value-this.minValue)/(this.maxValue-this.minValue))*(1-this.options.angle*2)*Math.PI;};Gauge.prototype.getColorForPercentage=function(pct,grad){var color,endColor,i,rangePct,startColor,_i,_ref1;if(pct===0){color=this.percentColors[0].color;}else{color=this.percentColors[this.percentColors.length-1].color;for(i=_i=0,_ref1=this.percentColors.length-1;0<=_ref1?_i<=_ref1:_i>=_ref1;i=0<=_ref1?++_i:--_i){if(pct<=this.percentColors[i].pct){if(grad===true){startColor=this.percentColors[i-1];endColor=this.percentColors[i];rangePct=(pct-startColor.pct)/(endColor.pct-startColor.pct);color={r:Math.floor(startColor.color.r*(1-rangePct)+endColor.color.r*rangePct),g:Math.floor(startColor.color.g*(1-rangePct)+endColor.color.g*rangePct),b:Math.floor(startColor.color.b*(1-rangePct)+endColor.color.b*rangePct)};}else{color=this.percentColors[i].color;}
break;}}}
return'rgb('+[color.r,color.g,color.b].join(',')+')';};Gauge.prototype.getColorForValue=function(val,grad){var pct;pct=(val-this.minValue)/(this.maxValue-this.minValue);return this.getColorForPercentage(pct,grad);};Gauge.prototype.render=function(){var displayedAngle,fillStyle,gauge,h,w,_i,_len,_ref1,_results;w=this.canvas.width/2;h=this.canvas.height*(1-this.paddingBottom);displayedAngle=this.getAngle(this.displayedValue);if(this.textField){this.textField.render(this);}
this.ctx.lineCap="butt";if(this.options.customFillStyle!==void 0){fillStyle=this.options.customFillStyle(this);}else if(this.percentColors!==null){fillStyle=this.getColorForValue(this.displayedValue,true);}else if(this.options.colorStop!==void 0){if(this.options.gradientType===0){fillStyle=this.ctx.createRadialGradient(w,h,9,w,h,70);}else{fillStyle=this.ctx.createLinearGradient(0,0,w,0);}
fillStyle.addColorStop(0,this.options.colorStart);fillStyle.addColorStop(1,this.options.colorStop);}else{fillStyle=this.options.colorStart;}
this.ctx.strokeStyle=fillStyle;this.ctx.beginPath();this.ctx.arc(w,h,this.radius,(1+this.options.angle)*Math.PI,displayedAngle,false);this.ctx.lineWidth=this.lineWidth;this.ctx.stroke();this.ctx.strokeStyle=this.options.strokeColor;this.ctx.beginPath();this.ctx.arc(w,h,this.radius,displayedAngle,(2-this.options.angle)*Math.PI,false);this.ctx.stroke();_ref1=this.gp;_results=[];for(_i=0,_len=_ref1.length;_i<_len;_i++){gauge=_ref1[_i];_results.push(gauge.update(true));}
return _results;};return Gauge;})(BaseGauge);BaseDonut=(function(_super){__extends(BaseDonut,_super);BaseDonut.prototype.lineWidth=15;BaseDonut.prototype.displayedValue=0;BaseDonut.prototype.value=33;BaseDonut.prototype.maxValue=80;BaseDonut.prototype.minValue=0;BaseDonut.prototype.options={lineWidth:0.10,colorStart:"#6f6ea0",colorStop:"#c0c0db",strokeColor:"#eeeeee",shadowColor:"#d5d5d5",angle:0.35};function BaseDonut(canvas){this.canvas=canvas;BaseDonut.__super__.constructor.call(this);if(typeof G_vmlCanvasManager!=='undefined'){this.canvas=window.G_vmlCanvasManager.initElement(this.canvas);}
this.ctx=this.canvas.getContext('2d');this.setOptions();this.render();}
BaseDonut.prototype.getAngle=function(value){return(1-this.options.angle)*Math.PI+((value-this.minValue)/(this.maxValue-this.minValue))*((2+this.options.angle)-(1-this.options.angle))*Math.PI;};BaseDonut.prototype.setOptions=function(options){if(options==null){options=null;}
BaseDonut.__super__.setOptions.call(this,options);this.lineWidth=this.canvas.height*this.options.lineWidth;this.radius=this.canvas.height/2-this.lineWidth/2;return this;};BaseDonut.prototype.set=function(value){this.value=value;if(this.value>this.maxValue){this.maxValue=this.value*1.1;}
return AnimationUpdater.run();};BaseDonut.prototype.render=function(){var displayedAngle,grdFill,h,start,stop,w;displayedAngle=this.getAngle(this.displayedValue);w=this.canvas.width/2;h=this.canvas.height/2;if(this.textField){this.textField.render(this);}
grdFill=this.ctx.createRadialGradient(w,h,39,w,h,70);grdFill.addColorStop(0,this.options.colorStart);grdFill.addColorStop(1,this.options.colorStop);start=this.radius-this.lineWidth/2;stop=this.radius+this.lineWidth/2;this.ctx.strokeStyle=this.options.strokeColor;this.ctx.beginPath();this.ctx.arc(w,h,this.radius,(1-this.options.angle)*Math.PI,(2+this.options.angle)*Math.PI,false);this.ctx.lineWidth=this.lineWidth;this.ctx.lineCap="round";this.ctx.stroke();this.ctx.strokeStyle=grdFill;this.ctx.beginPath();this.ctx.arc(w,h,this.radius,(1-this.options.angle)*Math.PI,displayedAngle,false);return this.ctx.stroke();};return BaseDonut;})(BaseGauge);Donut=(function(_super){__extends(Donut,_super);function Donut(){_ref1=Donut.__super__.constructor.apply(this,arguments);return _ref1;}
Donut.prototype.strokeGradient=function(w,h,start,stop){var grd;grd=this.ctx.createRadialGradient(w,h,start,w,h,stop);grd.addColorStop(0,this.options.shadowColor);grd.addColorStop(0.12,this.options._orgStrokeColor);grd.addColorStop(0.88,this.options._orgStrokeColor);grd.addColorStop(1,this.options.shadowColor);return grd;};Donut.prototype.setOptions=function(options){var h,start,stop,w;if(options==null){options=null;}
Donut.__super__.setOptions.call(this,options);w=this.canvas.width/2;h=this.canvas.height/2;start=this.radius-this.lineWidth/2;stop=this.radius+this.lineWidth/2;this.options._orgStrokeColor=this.options.strokeColor;this.options.strokeColor=this.strokeGradient(w,h,start,stop);return this;};return Donut;})(BaseDonut);window.AnimationUpdater={elements:[],animId:null,addAll:function(list){var elem,_i,_len,_results;_results=[];for(_i=0,_len=list.length;_i<_len;_i++){elem=list[_i];_results.push(AnimationUpdater.elements.push(elem));}
return _results;},add:function(object){return AnimationUpdater.elements.push(object);},run:function(){var animationFinished,elem,_i,_len,_ref2;animationFinished=true;_ref2=AnimationUpdater.elements;for(_i=0,_len=_ref2.length;_i<_len;_i++){elem=_ref2[_i];if(elem.update()){animationFinished=false;}}
if(!animationFinished){return AnimationUpdater.animId=requestAnimationFrame(AnimationUpdater.run);}else{return cancelAnimationFrame(AnimationUpdater.animId);}}};window.Gauge=Gauge;window.Donut=Donut;window.BaseDonut=BaseDonut;window.TextRenderer=TextRenderer;}).call(this);
/*! bootstrap-progressbar v0.9.0 | Copyright (c) 2012-2015 Stephan Groß | MIT license | http://www.minddust.com */
!function(t){"use strict";var e=function(n,s){this.$element=t(n),this.options=t.extend({},e.defaults,s)};e.defaults={transition_delay:300,refresh_speed:50,display_text:"none",use_percentage:!0,percent_format:function(t){return t+"%"},amount_format:function(t,e){return t+" / "+e},update:t.noop,done:t.noop,fail:t.noop},e.prototype.transition=function(){var n=this.$element,s=n.parent(),a=this.$back_text,r=this.$front_text,i=this.options,o=parseInt(n.attr("data-transitiongoal")),h=parseInt(n.attr("aria-valuemin"))||0,d=parseInt(n.attr("aria-valuemax"))||100,f=s.hasClass("vertical"),p=i.update&&"function"==typeof i.update?i.update:e.defaults.update,u=i.done&&"function"==typeof i.done?i.done:e.defaults.done,c=i.fail&&"function"==typeof i.fail?i.fail:e.defaults.fail;if(isNaN(o))return void c("data-transitiongoal not set");var l=Math.round(100*(o-h)/(d-h));if("center"===i.display_text&&!a&&!r){this.$back_text=a=t("<span>").addClass("progressbar-back-text").prependTo(s),this.$front_text=r=t("<span>").addClass("progressbar-front-text").prependTo(n);var g;f?(g=s.css("height"),a.css({height:g,"line-height":g}),r.css({height:g,"line-height":g}),t(window).resize(function(){g=s.css("height"),a.css({height:g,"line-height":g}),r.css({height:g,"line-height":g})})):(g=s.css("width"),r.css({width:g}),t(window).resize(function(){g=s.css("width"),r.css({width:g})}))}setTimeout(function(){var t,e,c,g,_;f?n.css("height",l+"%"):n.css("width",l+"%");var x=setInterval(function(){f?(c=n.height(),g=s.height()):(c=n.width(),g=s.width()),t=Math.round(100*c/g),e=Math.round(h+c/g*(d-h)),t>=l&&(t=l,e=o,u(n),clearInterval(x)),"none"!==i.display_text&&(_=i.use_percentage?i.percent_format(t):i.amount_format(e,d,h),"fill"===i.display_text?n.text(_):"center"===i.display_text&&(a.text(_),r.text(_))),n.attr("aria-valuenow",e),p(t,n)},i.refresh_speed)},i.transition_delay)};var n=t.fn.progressbar;t.fn.progressbar=function(n){return this.each(function(){var s=t(this),a=s.data("bs.progressbar"),r="object"==typeof n&&n;a&&r&&t.extend(a.options,r),a||s.data("bs.progressbar",a=new e(this,r)),a.transition()})},t.fn.progressbar.Constructor=e,t.fn.progressbar.noConflict=function(){return t.fn.progressbar=n,this}}(window.jQuery);
/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
_add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);

(function(global) {
  "use strict";

  /* Set up a RequestAnimationFrame shim so we can animate efficiently FOR
   * GREAT JUSTICE. */
  var requestInterval, cancelInterval;

  (function() {
    var raf = global.requestAnimationFrame       ||
              global.webkitRequestAnimationFrame ||
              global.mozRequestAnimationFrame    ||
              global.oRequestAnimationFrame      ||
              global.msRequestAnimationFrame     ,
        caf = global.cancelAnimationFrame        ||
              global.webkitCancelAnimationFrame  ||
              global.mozCancelAnimationFrame     ||
              global.oCancelAnimationFrame       ||
              global.msCancelAnimationFrame      ;

    if(raf && caf) {
      requestInterval = function(fn, delay) {
        var handle = {value: null};

        function loop() {
          handle.value = raf(loop);
          fn();
        }

        loop();
        return handle;
      };

      cancelInterval = function(handle) {
        caf(handle.value);
      };
    }

    else {
      requestInterval = setInterval;
      cancelInterval = clearInterval;
    }
  }());

  /* Catmull-rom spline stuffs. */
  /*
  function upsample(n, spline) {
    var polyline = [],
        len = spline.length,
        bx  = spline[0],
        by  = spline[1],
        cx  = spline[2],
        cy  = spline[3],
        dx  = spline[4],
        dy  = spline[5],
        i, j, ax, ay, px, qx, rx, sx, py, qy, ry, sy, t;

    for(i = 6; i !== spline.length; i += 2) {
      ax = bx;
      bx = cx;
      cx = dx;
      dx = spline[i    ];
      px = -0.5 * ax + 1.5 * bx - 1.5 * cx + 0.5 * dx;
      qx =        ax - 2.5 * bx + 2.0 * cx - 0.5 * dx;
      rx = -0.5 * ax            + 0.5 * cx           ;
      sx =                   bx                      ;

      ay = by;
      by = cy;
      cy = dy;
      dy = spline[i + 1];
      py = -0.5 * ay + 1.5 * by - 1.5 * cy + 0.5 * dy;
      qy =        ay - 2.5 * by + 2.0 * cy - 0.5 * dy;
      ry = -0.5 * ay            + 0.5 * cy           ;
      sy =                   by                      ;

      for(j = 0; j !== n; ++j) {
        t = j / n;

        polyline.push(
          ((px * t + qx) * t + rx) * t + sx,
          ((py * t + qy) * t + ry) * t + sy
        );
      }
    }

    polyline.push(
      px + qx + rx + sx,
      py + qy + ry + sy
    );

    return polyline;
  }

  function downsample(n, polyline) {
    var len = 0,
        i, dx, dy;

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      len += Math.sqrt(dx * dx + dy * dy);
    }

    len /= n;

    var small = [],
        target = len,
        min = 0,
        max, t;

    small.push(polyline[0], polyline[1]);

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      max = min + Math.sqrt(dx * dx + dy * dy);

      if(max > target) {
        t = (target - min) / (max - min);

        small.push(
          polyline[i - 2] + dx * t,
          polyline[i - 1] + dy * t
        );

        target += len;
      }

      min = max;
    }

    small.push(polyline[polyline.length - 2], polyline[polyline.length - 1]);

    return small;
  }
  */

  /* Define skycon things. */
  /* FIXME: I'm *really really* sorry that this code is so gross. Really, I am.
   * I'll try to clean it up eventually! Promise! */
  var KEYFRAME = 500,
      STROKE = 0.08,
      TAU = 2.0 * Math.PI,
      TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

  function circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU, false);
    ctx.fill();
  }

  function line(ctx, ax, ay, bx, by) {
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  }

  function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var c = Math.cos(t * TAU),
        s = Math.sin(t * TAU);

    rmax -= rmin;

    circle(
      ctx,
      cx - s * rx,
      cy + c * ry + rmax * 0.5,
      rmin + (1 - c * 0.5) * rmax
    );
  }

  function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var i;

    for(i = 5; i--; )
      puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
  }

  function cloud(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.12,
        c = cw * 0.24,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  function sun(ctx, t, cx, cy, cw, s, color) {
    t /= 120000;

    var a = cw * 0.25 - s * 0.5,
        b = cw * 0.32 + s * 0.5,
        c = cw * 0.50 - s * 0.5,
        i, p, cos, sin;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(cx, cy, a, 0, TAU, false);
    ctx.stroke();

    for(i = 8; i--; ) {
      p = (t + i / 8) * TAU;
      cos = Math.cos(p);
      sin = Math.sin(p);
      line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
    }
  }

  function moon(ctx, t, cx, cy, cw, s, color) {
    t /= 15000;

    var a = cw * 0.29 - s * 0.5,
        b = cw * 0.05,
        c = Math.cos(t * TAU),
        p = c * TAU / -16;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    cx += c * b;

    ctx.beginPath();
    ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
    ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
    ctx.closePath();
    ctx.stroke();
  }

  function rain(ctx, t, cx, cy, cw, s, color) {
    t /= 1350;

    var a = cw * 0.16,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.fillStyle = color;

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
      y = cy + p * p * cw;
      ctx.beginPath();
      ctx.moveTo(x, y - s * 1.5);
      ctx.arc(x, y, s * 0.75, b, c, false);
      ctx.fill();
    }
  }

  function sleet(ctx, t, cx, cy, cw, s, color) {
    t /= 750;

    var a = cw * 0.1875,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
      y = cy + p * cw;
      line(ctx, x, y - s * 1.5, x, y + s * 1.5);
    }
  }

  function snow(ctx, t, cx, cy, cw, s, color) {
    t /= 3000;

    var a  = cw * 0.16,
        b  = s * 0.75,
        u  = t * TAU * 0.7,
        ux = Math.cos(u) * b,
        uy = Math.sin(u) * b,
        v  = u + TAU / 3,
        vx = Math.cos(v) * b,
        vy = Math.sin(v) * b,
        w  = u + TAU * 2 / 3,
        wx = Math.cos(w) * b,
        wy = Math.sin(w) * b,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + Math.sin((p + i / 4) * TAU) * a;
      y = cy + p * cw;

      line(ctx, x - ux, y - uy, x + ux, y + uy);
      line(ctx, x - vx, y - vy, x + vx, y + vy);
      line(ctx, x - wx, y - wy, x + wx, y + wy);
    }
  }

  function fogbank(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.06,
        c = cw * 0.21,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  /*
  var WIND_PATHS = [
        downsample(63, upsample(8, [
          -1.00, -0.28,
          -0.75, -0.18,
          -0.50,  0.12,
          -0.20,  0.12,
          -0.04, -0.04,
          -0.07, -0.18,
          -0.19, -0.18,
          -0.23, -0.05,
          -0.12,  0.11,
           0.02,  0.16,
           0.20,  0.15,
           0.50,  0.07,
           0.75,  0.18,
           1.00,  0.28
        ])),
        downsample(31, upsample(16, [
          -1.00, -0.10,
          -0.75,  0.00,
          -0.50,  0.10,
          -0.25,  0.14,
           0.00,  0.10,
           0.25,  0.00,
           0.50, -0.10,
           0.75, -0.14,
           1.00, -0.10
        ]))
      ];
  */

  var WIND_PATHS = [
        [
          -0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225,
          -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262,
          -0.6083,  0.0065, -0.5868,  0.0396, -0.5643,  0.0731,
          -0.5372,  0.1041, -0.5033,  0.1259, -0.4662,  0.1406,
          -0.4275,  0.1493, -0.3881,  0.1530, -0.3487,  0.1526,
          -0.3095,  0.1488, -0.2708,  0.1421, -0.2319,  0.1342,
          -0.1943,  0.1217, -0.1600,  0.1025, -0.1290,  0.0785,
          -0.1012,  0.0509, -0.0764,  0.0206, -0.0547, -0.0120,
          -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241,
          -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964,
          -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453,
          -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317,
          -0.2064,  0.0033, -0.1853,  0.0362, -0.1613,  0.0672,
          -0.1350,  0.0961, -0.1051,  0.1213, -0.0706,  0.1397,
          -0.0332,  0.1512,  0.0053,  0.1580,  0.0442,  0.1624,
           0.0833,  0.1636,  0.1224,  0.1615,  0.1613,  0.1565,
           0.1999,  0.1500,  0.2378,  0.1402,  0.2749,  0.1279,
           0.3118,  0.1147,  0.3487,  0.1015,  0.3858,  0.0892,
           0.4236,  0.0787,  0.4621,  0.0715,  0.5012,  0.0702,
           0.5398,  0.0766,  0.5768,  0.0890,  0.6123,  0.1055,
           0.6466,  0.1244,  0.6805,  0.1440,  0.7147,  0.1630,
           0.7500,  0.1800
        ],
        [
          -0.7500,  0.0000, -0.7033,  0.0195, -0.6569,  0.0399,
          -0.6104,  0.0600, -0.5634,  0.0789, -0.5155,  0.0954,
          -0.4667,  0.1089, -0.4174,  0.1206, -0.3676,  0.1299,
          -0.3174,  0.1365, -0.2669,  0.1398, -0.2162,  0.1391,
          -0.1658,  0.1347, -0.1157,  0.1271, -0.0661,  0.1169,
          -0.0170,  0.1046,  0.0316,  0.0903,  0.0791,  0.0728,
           0.1259,  0.0534,  0.1723,  0.0331,  0.2188,  0.0129,
           0.2656, -0.0064,  0.3122, -0.0263,  0.3586, -0.0466,
           0.4052, -0.0665,  0.4525, -0.0847,  0.5007, -0.1002,
           0.5497, -0.1130,  0.5991, -0.1240,  0.6491, -0.1325,
           0.6994, -0.1380,  0.7500, -0.1400
        ]
      ],
      WIND_OFFSETS = [
        {start: 0.36, end: 0.11},
        {start: 0.56, end: 0.16}
      ];

  function leaf(ctx, t, x, y, cw, s, color) {
    var a = cw / 8,
        b = a / 3,
        c = 2 * b,
        d = (t % 1) * TAU,
        e = Math.cos(d),
        f = Math.sin(d);

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(x        , y        , a, d          , d + Math.PI, false);
    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d          , false);
    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d          , true );
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
  }

  function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
    t /= 2500;

    var path = WIND_PATHS[index],
        a = (t + index - WIND_OFFSETS[index].start) % total,
        c = (t + index - WIND_OFFSETS[index].end  ) % total,
        e = (t + index                            ) % total,
        b, d, f, i;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if(a < 1) {
      ctx.beginPath();

      a *= path.length / 2 - 1;
      b  = Math.floor(a);
      a -= b;
      b *= 2;
      b += 2;

      ctx.moveTo(
        cx + (path[b - 2] * (1 - a) + path[b    ] * a) * cw,
        cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw
      );

      if(c < 1) {
        c *= path.length / 2 - 1;
        d  = Math.floor(c);
        c -= d;
        d *= 2;
        d += 2;

        for(i = b; i !== d; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

        ctx.lineTo(
          cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
          cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
        );
      }

      else
        for(i = b; i !== path.length; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.stroke();
    }

    else if(c < 1) {
      ctx.beginPath();

      c *= path.length / 2 - 1;
      d  = Math.floor(c);
      c -= d;
      d *= 2;
      d += 2;

      ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);

      for(i = 2; i !== d; i += 2)
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.lineTo(
        cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
        cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
      );

      ctx.stroke();
    }

    if(e < 1) {
      e *= path.length / 2 - 1;
      f  = Math.floor(e);
      e -= f;
      f *= 2;
      f += 2;

      leaf(
        ctx,
        t,
        cx + (path[f - 2] * (1 - e) + path[f    ] * e) * cw,
        cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw,
        cw,
        s,
        color
      );
    }
  }

  var Skycons = function(opts) {
        this.list        = [];
        this.interval    = null;
        this.color       = opts && opts.color ? opts.color : "black";
        this.resizeClear = !!(opts && opts.resizeClear);
      };

  Skycons.CLEAR_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.CLEAR_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.CLOUDY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.RAIN = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SLEET = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SNOW = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.WIND = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
  };

  Skycons.FOG = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h),
        k = s * STROKE;

    fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);

    t /= 5000;

    var a = Math.cos((t       ) * TAU) * s * 0.02,
        b = Math.cos((t + 0.25) * TAU) * s * 0.02,
        c = Math.cos((t + 0.50) * TAU) * s * 0.02,
        d = Math.cos((t + 0.75) * TAU) * s * 0.02,
        n = h * 0.936,
        e = Math.floor(n - k * 0.5) + 0.5,
        f = Math.floor(n - k * 2.5) + 0.5;

    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
  };

  Skycons.prototype = {
    _determineDrawingFunction: function(draw) {
      if(typeof draw === "string")
        draw = Skycons[draw.toUpperCase().replace(/-/g, "_")] || null;

      return draw;
    },
    add: function(el, draw) {
      var obj;

      if(typeof el === "string")
        el = document.getElementById(el);

      // Does nothing if canvas name doesn't exists
      if(el === null)
        return;

      draw = this._determineDrawingFunction(draw);

      // Does nothing if the draw function isn't actually a function
      if(typeof draw !== "function")
        return;

      obj = {
        element: el,
        context: el.getContext("2d"),
        drawing: draw
      };

      this.list.push(obj);
      this.draw(obj, KEYFRAME);
    },
    set: function(el, draw) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list[i].drawing = this._determineDrawingFunction(draw);
          this.draw(this.list[i], KEYFRAME);
          return;
        }

      this.add(el, draw);
    },
    remove: function(el) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list.splice(i, 1);
          return;
        }
    },
    draw: function(obj, time) {
      var canvas = obj.context.canvas;

      if(this.resizeClear)
        canvas.width = canvas.width;

      else
        obj.context.clearRect(0, 0, canvas.width, canvas.height);

      obj.drawing(obj.context, time, this.color);
    },
    play: function() {
      var self = this;

      this.pause();
      this.interval = requestInterval(function() {
        var now = Date.now(),
            i;

        for(i = self.list.length; i--; )
          self.draw(self.list[i], now);
      }, 1000 / 60);
    },
    pause: function() {
      var i;

      if(this.interval) {
        cancelInterval(this.interval);
        this.interval = null;
      }
    }
  };

  global.Skycons = Skycons;
}(this));

/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/

// first an inline dependency, jquery.colorhelpers.js, we inline it here
// for convenience

/* Plugin for jQuery for working with colors.
 *
 * Version 1.1.
 *
 * Inspiration from jQuery color animation plugin by John Resig.
 *
 * Released under the MIT license by Ole Laursen, October 2009.
 *
 * Examples:
 *
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
 *   var c = $.color.extract($("#mydiv"), 'background-color');
 *   console.log(c.r, c.g, c.b, c.a);
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
 *
 * Note that .scale() and .add() return the same modified object
 * instead of making a new one.
 *
 * V. 1.1: Fix error handling so e.g. parsing an empty string does
 * produce a color rather than just crashing.
 */
(function($){$.color={};$.color.make=function(r,g,b,a){var o={};o.r=r||0;o.g=g||0;o.b=b||0;o.a=a!=null?a:1;o.add=function(c,d){for(var i=0;i<c.length;++i)o[c.charAt(i)]+=d;return o.normalize()};o.scale=function(c,f){for(var i=0;i<c.length;++i)o[c.charAt(i)]*=f;return o.normalize()};o.toString=function(){if(o.a>=1){return"rgb("+[o.r,o.g,o.b].join(",")+")"}else{return"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"}};o.normalize=function(){function clamp(min,value,max){return value<min?min:value>max?max:value}o.r=clamp(0,parseInt(o.r),255);o.g=clamp(0,parseInt(o.g),255);o.b=clamp(0,parseInt(o.b),255);o.a=clamp(0,o.a,1);return o};o.clone=function(){return $.color.make(o.r,o.b,o.g,o.a)};return o.normalize()};$.color.extract=function(elem,css){var c;do{c=elem.css(css).toLowerCase();if(c!=""&&c!="transparent")break;elem=elem.parent()}while(elem.length&&!$.nodeName(elem.get(0),"body"));if(c=="rgba(0, 0, 0, 0)")c="transparent";return $.color.parse(c)};$.color.parse=function(str){var res,m=$.color.make;if(res=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10));if(res=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10),parseFloat(res[4]));if(res=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55);if(res=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55,parseFloat(res[4]));if(res=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))return m(parseInt(res[1],16),parseInt(res[2],16),parseInt(res[3],16));if(res=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))return m(parseInt(res[1]+res[1],16),parseInt(res[2]+res[2],16),parseInt(res[3]+res[3],16));var name=$.trim(str).toLowerCase();if(name=="transparent")return m(255,255,255,0);else{res=lookupColors[name]||[0,0,0];return m(res[0],res[1],res[2])}};var lookupColors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

// the actual Flot code
(function($) {

	// Cache the prototype hasOwnProperty for faster access

	var hasOwnProperty = Object.prototype.hasOwnProperty;

    // A shim to provide 'detach' to jQuery versions prior to 1.4.  Using a DOM
    // operation produces the same effect as detach, i.e. removing the element
    // without touching its jQuery data.

    // Do not merge this into Flot 0.9, since it requires jQuery 1.4.4+.

    if (!$.fn.detach) {
        $.fn.detach = function() {
            return this.each(function() {
                if (this.parentNode) {
                    this.parentNode.removeChild( this );
                }
            });
        };
    }

	///////////////////////////////////////////////////////////////////////////
	// The Canvas object is a wrapper around an HTML5 <canvas> tag.
	//
	// @constructor
	// @param {string} cls List of classes to apply to the canvas.
	// @param {element} container Element onto which to append the canvas.
	//
	// Requiring a container is a little iffy, but unfortunately canvas
	// operations don't work unless the canvas is attached to the DOM.

	function Canvas(cls, container) {

		var element = container.children("." + cls)[0];

		if (element == null) {

			element = document.createElement("canvas");
			element.className = cls;

			$(element).css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
				.appendTo(container);

			// If HTML5 Canvas isn't available, fall back to [Ex|Flash]canvas

			if (!element.getContext) {
				if (window.G_vmlCanvasManager) {
					element = window.G_vmlCanvasManager.initElement(element);
				} else {
					throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
				}
			}
		}

		this.element = element;

		var context = this.context = element.getContext("2d");

		// Determine the screen's ratio of physical to device-independent
		// pixels.  This is the ratio between the canvas width that the browser
		// advertises and the number of pixels actually present in that space.

		// The iPhone 4, for example, has a device-independent width of 320px,
		// but its screen is actually 640px wide.  It therefore has a pixel
		// ratio of 2, while most normal devices have a ratio of 1.

		var devicePixelRatio = window.devicePixelRatio || 1,
			backingStoreRatio =
				context.webkitBackingStorePixelRatio ||
				context.mozBackingStorePixelRatio ||
				context.msBackingStorePixelRatio ||
				context.oBackingStorePixelRatio ||
				context.backingStorePixelRatio || 1;

		this.pixelRatio = devicePixelRatio / backingStoreRatio;

		// Size the canvas to match the internal dimensions of its container

		this.resize(container.width(), container.height());

		// Collection of HTML div layers for text overlaid onto the canvas

		this.textContainer = null;
		this.text = {};

		// Cache of text fragments and metrics, so we can avoid expensively
		// re-calculating them when the plot is re-rendered in a loop.

		this._textCache = {};
	}

	// Resizes the canvas to the given dimensions.
	//
	// @param {number} width New width of the canvas, in pixels.
	// @param {number} width New height of the canvas, in pixels.

	Canvas.prototype.resize = function(width, height) {

		if (width <= 0 || height <= 0) {
			throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height);
		}

		var element = this.element,
			context = this.context,
			pixelRatio = this.pixelRatio;

		// Resize the canvas, increasing its density based on the display's
		// pixel ratio; basically giving it more pixels without increasing the
		// size of its element, to take advantage of the fact that retina
		// displays have that many more pixels in the same advertised space.

		// Resizing should reset the state (excanvas seems to be buggy though)

		if (this.width != width) {
			element.width = width * pixelRatio;
			element.style.width = width + "px";
			this.width = width;
		}

		if (this.height != height) {
			element.height = height * pixelRatio;
			element.style.height = height + "px";
			this.height = height;
		}

		// Save the context, so we can reset in case we get replotted.  The
		// restore ensure that we're really back at the initial state, and
		// should be safe even if we haven't saved the initial state yet.

		context.restore();
		context.save();

		// Scale the coordinate space to match the display density; so even though we
		// may have twice as many pixels, we still want lines and other drawing to
		// appear at the same size; the extra pixels will just make them crisper.

		context.scale(pixelRatio, pixelRatio);
	};

	// Clears the entire canvas area, not including any overlaid HTML text

	Canvas.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height);
	};

	// Finishes rendering the canvas, including managing the text overlay.

	Canvas.prototype.render = function() {

		var cache = this._textCache;

		// For each text layer, add elements marked as active that haven't
		// already been rendered, and remove those that are no longer active.

		for (var layerKey in cache) {
			if (hasOwnProperty.call(cache, layerKey)) {

				var layer = this.getTextLayer(layerKey),
					layerCache = cache[layerKey];

				layer.hide();

				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {

								var positions = styleCache[key].positions;

								for (var i = 0, position; position = positions[i]; i++) {
									if (position.active) {
										if (!position.rendered) {
											layer.append(position.element);
											position.rendered = true;
										}
									} else {
										positions.splice(i--, 1);
										if (position.rendered) {
											position.element.detach();
										}
									}
								}

								if (positions.length == 0) {
									delete styleCache[key];
								}
							}
						}
					}
				}

				layer.show();
			}
		}
	};

	// Creates (if necessary) and returns the text overlay container.
	//
	// @param {string} classes String of space-separated CSS classes used to
	//     uniquely identify the text layer.
	// @return {object} The jQuery-wrapped text-layer div.

	Canvas.prototype.getTextLayer = function(classes) {

		var layer = this.text[classes];

		// Create the text layer if it doesn't exist

		if (layer == null) {

			// Create the text layer container, if it doesn't exist

			if (this.textContainer == null) {
				this.textContainer = $("<div class='flot-text'></div>")
					.css({
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						'font-size': "smaller",
						color: "#545454"
					})
					.insertAfter(this.element);
			}

			layer = this.text[classes] = $("<div></div>")
				.addClass(classes)
				.css({
					position: "absolute",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0
				})
				.appendTo(this.textContainer);
		}

		return layer;
	};

	// Creates (if necessary) and returns a text info object.
	//
	// The object looks like this:
	//
	// {
	//     width: Width of the text's wrapper div.
	//     height: Height of the text's wrapper div.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     positions: Array of positions at which this text is drawn.
	// }
	//
	// The positions array contains objects that look like this:
	//
	// {
	//     active: Flag indicating whether the text should be visible.
	//     rendered: Flag indicating whether the text is currently visible.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     x: X coordinate at which to draw the text.
	//     y: Y coordinate at which to draw the text.
	// }
	//
	// Each position after the first receives a clone of the original element.
	//
	// The idea is that that the width, height, and general 'identity' of the
	// text is constant no matter where it is placed; the placements are a
	// secondary property.
	//
	// Canvas maintains a cache of recently-used text info objects; getTextInfo
	// either returns the cached element or creates a new entry.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {string} text Text string to retrieve info for.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @return {object} a text info object.

	Canvas.prototype.getTextInfo = function(layer, text, font, angle, width) {

		var textStyle, layerCache, styleCache, info;

		// Cast the value to a string, in case we were given a number or such

		text = "" + text;

		// If the font is a font-spec object, generate a CSS font definition

		if (typeof font === "object") {
			textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px/" + font.lineHeight + "px " + font.family;
		} else {
			textStyle = font;
		}

		// Retrieve (or create) the cache for the text's layer and styles

		layerCache = this._textCache[layer];

		if (layerCache == null) {
			layerCache = this._textCache[layer] = {};
		}

		styleCache = layerCache[textStyle];

		if (styleCache == null) {
			styleCache = layerCache[textStyle] = {};
		}

		info = styleCache[text];

		// If we can't find a matching element in our cache, create a new one

		if (info == null) {

			var element = $("<div></div>").html(text)
				.css({
					position: "absolute",
					'max-width': width,
					top: -9999
				})
				.appendTo(this.getTextLayer(layer));

			if (typeof font === "object") {
				element.css({
					font: textStyle,
					color: font.color
				});
			} else if (typeof font === "string") {
				element.addClass(font);
			}

			info = styleCache[text] = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				element: element,
				positions: []
			};

			element.detach();
		}

		return info;
	};

	// Adds a text string to the canvas text overlay.
	//
	// The text isn't drawn immediately; it is marked as rendering, which will
	// result in its addition to the canvas on the next render pass.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number} x X coordinate at which to draw the text.
	// @param {number} y Y coordinate at which to draw the text.
	// @param {string} text Text string to draw.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @param {string=} halign Horizontal alignment of the text; either "left",
	//     "center" or "right".
	// @param {string=} valign Vertical alignment of the text; either "top",
	//     "middle" or "bottom".

	Canvas.prototype.addText = function(layer, x, y, text, font, angle, width, halign, valign) {

		var info = this.getTextInfo(layer, text, font, angle, width),
			positions = info.positions;

		// Tweak the div's position to match the text's alignment

		if (halign == "center") {
			x -= info.width / 2;
		} else if (halign == "right") {
			x -= info.width;
		}

		if (valign == "middle") {
			y -= info.height / 2;
		} else if (valign == "bottom") {
			y -= info.height;
		}

		// Determine whether this text already exists at this position.
		// If so, mark it for inclusion in the next render pass.

		for (var i = 0, position; position = positions[i]; i++) {
			if (position.x == x && position.y == y) {
				position.active = true;
				return;
			}
		}

		// If the text doesn't exist at this position, create a new entry

		// For the very first position we'll re-use the original element,
		// while for subsequent ones we'll clone it.

		position = {
			active: true,
			rendered: false,
			element: positions.length ? info.element.clone() : info.element,
			x: x,
			y: y
		};

		positions.push(position);

		// Move the element to its final position within the container

		position.element.css({
			top: Math.round(y),
			left: Math.round(x),
			'text-align': halign	// In case the text wraps
		});
	};

	// Removes one or more text strings from the canvas text overlay.
	//
	// If no parameters are given, all text within the layer is removed.
	//
	// Note that the text is not immediately removed; it is simply marked as
	// inactive, which will result in its removal on the next render pass.
	// This avoids the performance penalty for 'clear and redraw' behavior,
	// where we potentially get rid of all text on a layer, but will likely
	// add back most or all of it later, as when redrawing axes, for example.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number=} x X coordinate of the text.
	// @param {number=} y Y coordinate of the text.
	// @param {string=} text Text string to remove.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which the text is rotated, in degrees.
	//     Angle is currently unused, it will be implemented in the future.

	Canvas.prototype.removeText = function(layer, x, y, text, font, angle) {
		if (text == null) {
			var layerCache = this._textCache[layer];
			if (layerCache != null) {
				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {
								var positions = styleCache[key].positions;
								for (var i = 0, position; position = positions[i]; i++) {
									position.active = false;
								}
							}
						}
					}
				}
			}
		} else {
			var positions = this.getTextInfo(layer, text, font, angle).positions;
			for (var i = 0, position; position = positions[i]; i++) {
				if (position.x == x && position.y == y) {
					position.active = false;
				}
			}
		}
	};

	///////////////////////////////////////////////////////////////////////////
	// The top-level container for the entire plot.

    function Plot(placeholder, data_, options_, plugins) {
        // data is on the form:
        //   [ series1, series2 ... ]
        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }

        var series = [],
            options = {
                // the color theme used for graphs
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: 5, // distance from grid edge to default legend container within plot
                    backgroundColor: null, // null means auto-detect
                    backgroundOpacity: 0.85, // set to 0 to avoid background
                    sorted: null    // default to no legend sorting
                },
                xaxis: {
                    show: null, // null = auto-detect, true = always, false = never
                    position: "bottom", // or "top"
                    mode: null, // null or "time"
                    font: null, // null (derived from CSS in placeholder) or object like { size: 11, lineHeight: 13, style: "italic", weight: "bold", family: "sans-serif", variant: "small-caps" }
                    color: null, // base color, labels, ticks
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                    transform: null, // null or f: number -> number to transform axis
                    inverseTransform: null, // if transform is set, this should be the inverse function
                    min: null, // min. value to show, null means set automatically
                    max: null, // max. value to show, null means set automatically
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string
                    labelWidth: null, // size of tick labels in pixels
                    labelHeight: null,
                    reserveSpace: null, // whether to reserve space even if axis isn't shown
                    tickLength: null, // size in pixels of ticks, or "full" for whole line
                    alignTicksWithAxis: null, // axis number or null for no sync
                    tickDecimals: null, // no. of decimals, null means auto
                    tickSize: null, // number or [number, "unit"]
                    minTickSize: null // number or [number, "unit"]
                },
                yaxis: {
                    autoscaleMargin: 0.02,
                    position: "left" // or "right"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: false,
                        radius: 3,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: "#ffffff",
                        symbol: "circle" // or callback
                    },
                    lines: {
                        // we don't put in show: false so we can see
                        // whether lines were actively disabled
                        lineWidth: 2, // in pixels
                        fill: false,
                        fillColor: null,
                        steps: false
                        // Omit 'zero', so we can later default its value to
                        // match that of the 'fill' option.
                    },
                    bars: {
                        show: false,
                        lineWidth: 2, // in pixels
                        barWidth: 1, // in units of the x axis
                        fill: true,
                        fillColor: null,
                        align: "left", // "left", "right", or "center"
                        horizontal: false,
                        zero: true
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: true,
                    aboveData: false,
                    color: "#545454", // primary color used for outline and labels
                    backgroundColor: null, // null for transparent, else color
                    borderColor: null, // set if different from the grid color
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                    margin: 0, // distance from the canvas edge to the grid
                    labelMargin: 5, // in pixels
                    axisMargin: 8, // in pixels
                    borderWidth: 2, // in pixels
                    minBorderMargin: null, // in pixels, null means taken from points radius
                    markings: null, // array of ranges or fn: axes -> array of ranges
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    // interactive stuff
                    clickable: false,
                    hoverable: false,
                    autoHighlight: true, // highlight in case mouse is near
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
                },
                interaction: {
                    redrawOverlayInterval: 1000/60 // time between updates, -1 means in same flow
                },
                hooks: {}
            },
        surface = null,     // the canvas for the plot itself
        overlay = null,     // canvas for interactive stuff on top of plot
        eventHolder = null, // jQuery object that events should be bound to
        ctx = null, octx = null,
        xaxes = [], yaxes = [],
        plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
        plotWidth = 0, plotHeight = 0,
        hooks = {
            processOptions: [],
            processRawData: [],
            processDatapoints: [],
            processOffset: [],
            drawBackground: [],
            drawSeries: [],
            draw: [],
            bindEvents: [],
            drawOverlay: [],
            shutdown: []
        },
        plot = this;

        // public functions
        plot.setData = setData;
        plot.setupGrid = setupGrid;
        plot.draw = draw;
        plot.getPlaceholder = function() { return placeholder; };
        plot.getCanvas = function() { return surface.element; };
        plot.getPlotOffset = function() { return plotOffset; };
        plot.width = function () { return plotWidth; };
        plot.height = function () { return plotHeight; };
        plot.offset = function () {
            var o = eventHolder.offset();
            o.left += plotOffset.left;
            o.top += plotOffset.top;
            return o;
        };
        plot.getData = function () { return series; };
        plot.getAxes = function () {
            var res = {}, i;
            $.each(xaxes.concat(yaxes), function (_, axis) {
                if (axis)
                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
            });
            return res;
        };
        plot.getXAxes = function () { return xaxes; };
        plot.getYAxes = function () { return yaxes; };
        plot.c2p = canvasToAxisCoords;
        plot.p2c = axisToCanvasCoords;
        plot.getOptions = function () { return options; };
        plot.highlight = highlight;
        plot.unhighlight = unhighlight;
        plot.triggerRedrawOverlay = triggerRedrawOverlay;
        plot.pointOffset = function(point) {
            return {
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)
            };
        };
        plot.shutdown = shutdown;
        plot.destroy = function () {
            shutdown();
            placeholder.removeData("plot").empty();

            series = [];
            options = null;
            surface = null;
            overlay = null;
            eventHolder = null;
            ctx = null;
            octx = null;
            xaxes = [];
            yaxes = [];
            hooks = null;
            highlights = [];
            plot = null;
        };
        plot.resize = function () {
        	var width = placeholder.width(),
        		height = placeholder.height();
            surface.resize(width, height);
            overlay.resize(width, height);
        };

        // public attributes
        plot.hooks = hooks;

        // initialize
        initPlugins(plot);
        parseOptions(options_);
        setupCanvases();
        setData(data_);
        setupGrid();
        draw();
        bindEvents();


        function executeHooks(hook, args) {
            args = [plot].concat(args);
            for (var i = 0; i < hook.length; ++i)
                hook[i].apply(this, args);
        }

        function initPlugins() {

            // References to key classes, allowing plugins to modify them

            var classes = {
                Canvas: Canvas
            };

            for (var i = 0; i < plugins.length; ++i) {
                var p = plugins[i];
                p.init(plot, classes);
                if (p.options)
                    $.extend(true, options, p.options);
            }
        }

        function parseOptions(opts) {

            $.extend(true, options, opts);

            // $.extend merges arrays, rather than replacing them.  When less
            // colors are provided than the size of the default palette, we
            // end up with those colors plus the remaining defaults, which is
            // not expected behavior; avoid it by replacing them here.

            if (opts && opts.colors) {
            	options.colors = opts.colors;
            }

            if (options.xaxis.color == null)
                options.xaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();
            if (options.yaxis.color == null)
                options.yaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            if (options.xaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;
            if (options.yaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;

            if (options.grid.borderColor == null)
                options.grid.borderColor = options.grid.color;
            if (options.grid.tickColor == null)
                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            // Fill in defaults for axis options, including any unspecified
            // font-spec fields, if a font-spec was provided.

            // If no x/y axis options were provided, create one of each anyway,
            // since the rest of the code assumes that they exist.

            var i, axisOptions, axisCount,
                fontSize = placeholder.css("font-size"),
                fontSizeDefault = fontSize ? +fontSize.replace("px", "") : 13,
                fontDefaults = {
                    style: placeholder.css("font-style"),
                    size: Math.round(0.8 * fontSizeDefault),
                    variant: placeholder.css("font-variant"),
                    weight: placeholder.css("font-weight"),
                    family: placeholder.css("font-family")
                };

            axisCount = options.xaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.xaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.xaxis, axisOptions);
                options.xaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            axisCount = options.yaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.yaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.yaxis, axisOptions);
                options.yaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            // backwards compatibility, to be removed in future
            if (options.xaxis.noTicks && options.xaxis.ticks == null)
                options.xaxis.ticks = options.xaxis.noTicks;
            if (options.yaxis.noTicks && options.yaxis.ticks == null)
                options.yaxis.ticks = options.yaxis.noTicks;
            if (options.x2axis) {
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
                options.xaxes[1].position = "top";
                // Override the inherit to allow the axis to auto-scale
                if (options.x2axis.min == null) {
                    options.xaxes[1].min = null;
                }
                if (options.x2axis.max == null) {
                    options.xaxes[1].max = null;
                }
            }
            if (options.y2axis) {
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
                options.yaxes[1].position = "right";
                // Override the inherit to allow the axis to auto-scale
                if (options.y2axis.min == null) {
                    options.yaxes[1].min = null;
                }
                if (options.y2axis.max == null) {
                    options.yaxes[1].max = null;
                }
            }
            if (options.grid.coloredAreas)
                options.grid.markings = options.grid.coloredAreas;
            if (options.grid.coloredAreasColor)
                options.grid.markingsColor = options.grid.coloredAreasColor;
            if (options.lines)
                $.extend(true, options.series.lines, options.lines);
            if (options.points)
                $.extend(true, options.series.points, options.points);
            if (options.bars)
                $.extend(true, options.series.bars, options.bars);
            if (options.shadowSize != null)
                options.series.shadowSize = options.shadowSize;
            if (options.highlightColor != null)
                options.series.highlightColor = options.highlightColor;

            // save options on axes for future reference
            for (i = 0; i < options.xaxes.length; ++i)
                getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
            for (i = 0; i < options.yaxes.length; ++i)
                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

            // add hooks from options
            for (var n in hooks)
                if (options.hooks[n] && options.hooks[n].length)
                    hooks[n] = hooks[n].concat(options.hooks[n]);

            executeHooks(hooks.processOptions, [options]);
        }

        function setData(d) {
            series = parseData(d);
            fillInSeriesOptions();
            processData();
        }

        function parseData(d) {
            var res = [];
            for (var i = 0; i < d.length; ++i) {
                var s = $.extend(true, {}, options.series);

                if (d[i].data != null) {
                    s.data = d[i].data; // move the data instead of deep-copy
                    delete d[i].data;

                    $.extend(true, s, d[i]);

                    d[i].data = s.data;
                }
                else
                    s.data = d[i];
                res.push(s);
            }

            return res;
        }

        function axisNumber(obj, coord) {
            var a = obj[coord + "axis"];
            if (typeof a == "object") // if we got a real axis, extract number
                a = a.n;
            if (typeof a != "number")
                a = 1; // default to first axis
            return a;
        }

        function allAxes() {
            // return flat array without annoying null entries
            return $.grep(xaxes.concat(yaxes), function (a) { return a; });
        }

        function canvasToAxisCoords(pos) {
            // return an object with x/y corresponding to all used axes
            var res = {}, i, axis;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used)
                    res["x" + axis.n] = axis.c2p(pos.left);
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used)
                    res["y" + axis.n] = axis.c2p(pos.top);
            }

            if (res.x1 !== undefined)
                res.x = res.x1;
            if (res.y1 !== undefined)
                res.y = res.y1;

            return res;
        }

        function axisToCanvasCoords(pos) {
            // get canvas coords from the first pair of x/y found in pos
            var res = {}, i, axis, key;

            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used) {
                    key = "x" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "x";

                    if (pos[key] != null) {
                        res.left = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used) {
                    key = "y" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "y";

                    if (pos[key] != null) {
                        res.top = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            return res;
        }

        function getOrCreateAxis(axes, number) {
            if (!axes[number - 1])
                axes[number - 1] = {
                    n: number, // save the number for future reference
                    direction: axes == xaxes ? "x" : "y",
                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
                };

            return axes[number - 1];
        }

        function fillInSeriesOptions() {

            var neededColors = series.length, maxIndex = -1, i;

            // Subtract the number of series that already have fixed colors or
            // color indexes from the number that we still need to generate.

            for (i = 0; i < series.length; ++i) {
                var sc = series[i].color;
                if (sc != null) {
                    neededColors--;
                    if (typeof sc == "number" && sc > maxIndex) {
                        maxIndex = sc;
                    }
                }
            }

            // If any of the series have fixed color indexes, then we need to
            // generate at least as many colors as the highest index.

            if (neededColors <= maxIndex) {
                neededColors = maxIndex + 1;
            }

            // Generate all the colors, using first the option colors and then
            // variations on those colors once they're exhausted.

            var c, colors = [], colorPool = options.colors,
                colorPoolSize = colorPool.length, variation = 0;

            for (i = 0; i < neededColors; i++) {

                c = $.color.parse(colorPool[i % colorPoolSize] || "#666");

                // Each time we exhaust the colors in the pool we adjust
                // a scaling factor used to produce more variations on
                // those colors. The factor alternates negative/positive
                // to produce lighter/darker colors.

                // Reset the variation after every few cycles, or else
                // it will end up producing only white or black colors.

                if (i % colorPoolSize == 0 && i) {
                    if (variation >= 0) {
                        if (variation < 0.5) {
                            variation = -variation - 0.2;
                        } else variation = 0;
                    } else variation = -variation;
                }

                colors[i] = c.scale('rgb', 1 + variation);
            }

            // Finalize the series options, filling in their colors

            var colori = 0, s;
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                // assign colors
                if (s.color == null) {
                    s.color = colors[colori].toString();
                    ++colori;
                }
                else if (typeof s.color == "number")
                    s.color = colors[s.color].toString();

                // turn on lines automatically in case nothing is set
                if (s.lines.show == null) {
                    var v, show = true;
                    for (v in s)
                        if (s[v] && s[v].show) {
                            show = false;
                            break;
                        }
                    if (show)
                        s.lines.show = true;
                }

                // If nothing was provided for lines.zero, default it to match
                // lines.fill, since areas by default should extend to zero.

                if (s.lines.zero == null) {
                    s.lines.zero = !!s.lines.fill;
                }

                // setup axes
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
            }
        }

        function processData() {
            var topSentry = Number.POSITIVE_INFINITY,
                bottomSentry = Number.NEGATIVE_INFINITY,
                fakeInfinity = Number.MAX_VALUE,
                i, j, k, m, length,
                s, points, ps, x, y, axis, val, f, p,
                data, format;

            function updateAxis(axis, min, max) {
                if (min < axis.datamin && min != -fakeInfinity)
                    axis.datamin = min;
                if (max > axis.datamax && max != fakeInfinity)
                    axis.datamax = max;
            }

            $.each(allAxes(), function (_, axis) {
                // init axis
                axis.datamin = topSentry;
                axis.datamax = bottomSentry;
                axis.used = false;
            });

            for (i = 0; i < series.length; ++i) {
                s = series[i];
                s.datapoints = { points: [] };

                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
            }

            // first pass: clean and copy data
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                data = s.data;
                format = s.datapoints.format;

                if (!format) {
                    format = [];
                    // find out how to copy
                    format.push({ x: true, number: true, required: true });
                    format.push({ y: true, number: true, required: true });

                    if (s.bars.show || (s.lines.show && s.lines.fill)) {
                        var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
                        format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                        if (s.bars.horizontal) {
                            delete format[format.length - 1].y;
                            format[format.length - 1].x = true;
                        }
                    }

                    s.datapoints.format = format;
                }

                if (s.datapoints.pointsize != null)
                    continue; // already filled in

                s.datapoints.pointsize = format.length;

                ps = s.datapoints.pointsize;
                points = s.datapoints.points;

                var insertSteps = s.lines.show && s.lines.steps;
                s.xaxis.used = s.yaxis.used = true;

                for (j = k = 0; j < data.length; ++j, k += ps) {
                    p = data[j];

                    var nullify = p == null;
                    if (!nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = p[m];
                            f = format[m];

                            if (f) {
                                if (f.number && val != null) {
                                    val = +val; // convert to number
                                    if (isNaN(val))
                                        val = null;
                                    else if (val == Infinity)
                                        val = fakeInfinity;
                                    else if (val == -Infinity)
                                        val = -fakeInfinity;
                                }

                                if (val == null) {
                                    if (f.required)
                                        nullify = true;

                                    if (f.defaultValue != null)
                                        val = f.defaultValue;
                                }
                            }

                            points[k + m] = val;
                        }
                    }

                    if (nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = points[k + m];
                            if (val != null) {
                                f = format[m];
                                // extract min/max info
                                if (f.autoscale !== false) {
                                    if (f.x) {
                                        updateAxis(s.xaxis, val, val);
                                    }
                                    if (f.y) {
                                        updateAxis(s.yaxis, val, val);
                                    }
                                }
                            }
                            points[k + m] = null;
                        }
                    }
                    else {
                        // a little bit of line specific stuff that
                        // perhaps shouldn't be here, but lacking
                        // better means...
                        if (insertSteps && k > 0
                            && points[k - ps] != null
                            && points[k - ps] != points[k]
                            && points[k - ps + 1] != points[k + 1]) {
                            // copy the point to make room for a middle point
                            for (m = 0; m < ps; ++m)
                                points[k + ps + m] = points[k + m];

                            // middle point has same y
                            points[k + 1] = points[k - ps + 1];

                            // we've added a point, better reflect that
                            k += ps;
                        }
                    }
                }
            }

            // give the hooks a chance to run
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
            }

            // second pass: find datamax/datamin for auto-scaling
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                points = s.datapoints.points;
                ps = s.datapoints.pointsize;
                format = s.datapoints.format;

                var xmin = topSentry, ymin = topSentry,
                    xmax = bottomSentry, ymax = bottomSentry;

                for (j = 0; j < points.length; j += ps) {
                    if (points[j] == null)
                        continue;

                    for (m = 0; m < ps; ++m) {
                        val = points[j + m];
                        f = format[m];
                        if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)
                            continue;

                        if (f.x) {
                            if (val < xmin)
                                xmin = val;
                            if (val > xmax)
                                xmax = val;
                        }
                        if (f.y) {
                            if (val < ymin)
                                ymin = val;
                            if (val > ymax)
                                ymax = val;
                        }
                    }
                }

                if (s.bars.show) {
                    // make sure we got room for the bar on the dancing floor
                    var delta;

                    switch (s.bars.align) {
                        case "left":
                            delta = 0;
                            break;
                        case "right":
                            delta = -s.bars.barWidth;
                            break;
                        default:
                            delta = -s.bars.barWidth / 2;
                    }

                    if (s.bars.horizontal) {
                        ymin += delta;
                        ymax += delta + s.bars.barWidth;
                    }
                    else {
                        xmin += delta;
                        xmax += delta + s.bars.barWidth;
                    }
                }

                updateAxis(s.xaxis, xmin, xmax);
                updateAxis(s.yaxis, ymin, ymax);
            }

            $.each(allAxes(), function (_, axis) {
                if (axis.datamin == topSentry)
                    axis.datamin = null;
                if (axis.datamax == bottomSentry)
                    axis.datamax = null;
            });
        }

        function setupCanvases() {

            // Make sure the placeholder is clear of everything except canvases
            // from a previous plot in this container that we'll try to re-use.

            placeholder.css("padding", 0) // padding messes up the positioning
                .children().filter(function(){
                    return !$(this).hasClass("flot-overlay") && !$(this).hasClass('flot-base');
                }).remove();

            if (placeholder.css("position") == 'static')
                placeholder.css("position", "relative"); // for positioning labels and overlay

            surface = new Canvas("flot-base", placeholder);
            overlay = new Canvas("flot-overlay", placeholder); // overlay canvas for interactive features

            ctx = surface.context;
            octx = overlay.context;

            // define which element we're listening for events on
            eventHolder = $(overlay.element).unbind();

            // If we're re-using a plot object, shut down the old one

            var existing = placeholder.data("plot");

            if (existing) {
                existing.shutdown();
                overlay.clear();
            }

            // save in case we get replotted
            placeholder.data("plot", plot);
        }

        function bindEvents() {
            // bind events
            if (options.grid.hoverable) {
                eventHolder.mousemove(onMouseMove);

                // Use bind, rather than .mouseleave, because we officially
                // still support jQuery 1.2.6, which doesn't define a shortcut
                // for mouseenter or mouseleave.  This was a bug/oversight that
                // was fixed somewhere around 1.3.x.  We can return to using
                // .mouseleave when we drop support for 1.2.6.

                eventHolder.bind("mouseleave", onMouseLeave);
            }

            if (options.grid.clickable)
                eventHolder.click(onClick);

            executeHooks(hooks.bindEvents, [eventHolder]);
        }

        function shutdown() {
            if (redrawTimeout)
                clearTimeout(redrawTimeout);

            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mouseleave", onMouseLeave);
            eventHolder.unbind("click", onClick);

            executeHooks(hooks.shutdown, [eventHolder]);
        }

        function setTransformationHelpers(axis) {
            // set helper functions on the axis, assumes plot area
            // has been computed already

            function identity(x) { return x; }

            var s, m, t = axis.options.transform || identity,
                it = axis.options.inverseTransform;

            // precompute how much the axis is scaling a point
            // in canvas space
            if (axis.direction == "x") {
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
                m = Math.min(t(axis.max), t(axis.min));
            }
            else {
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
                s = -s;
                m = Math.max(t(axis.max), t(axis.min));
            }

            // data point to canvas coordinate
            if (t == identity) // slight optimization
                axis.p2c = function (p) { return (p - m) * s; };
            else
                axis.p2c = function (p) { return (t(p) - m) * s; };
            // canvas coordinate to data point
            if (!it)
                axis.c2p = function (c) { return m + c / s; };
            else
                axis.c2p = function (c) { return it(m + c / s); };
        }

        function measureTickLabels(axis) {

            var opts = axis.options,
                ticks = axis.ticks || [],
                labelWidth = opts.labelWidth || 0,
                labelHeight = opts.labelHeight || 0,
                maxWidth = labelWidth || (axis.direction == "x" ? Math.floor(surface.width / (ticks.length || 1)) : null),
                legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                font = opts.font || "flot-tick-label tickLabel";

            for (var i = 0; i < ticks.length; ++i) {

                var t = ticks[i];

                if (!t.label)
                    continue;

                var info = surface.getTextInfo(layer, t.label, font, null, maxWidth);

                labelWidth = Math.max(labelWidth, info.width);
                labelHeight = Math.max(labelHeight, info.height);
            }

            axis.labelWidth = opts.labelWidth || labelWidth;
            axis.labelHeight = opts.labelHeight || labelHeight;
        }

        function allocateAxisBoxFirstPhase(axis) {
            // find the bounding box of the axis by looking at label
            // widths/heights and ticks, make room by diminishing the
            // plotOffset; this first phase only looks at one
            // dimension per axis, the other dimension depends on the
            // other axes so will have to wait

            var lw = axis.labelWidth,
                lh = axis.labelHeight,
                pos = axis.options.position,
                isXAxis = axis.direction === "x",
                tickLength = axis.options.tickLength,
                axisMargin = options.grid.axisMargin,
                padding = options.grid.labelMargin,
                innermost = true,
                outermost = true,
                first = true,
                found = false;

            // Determine the axis's position in its direction and on its side

            $.each(isXAxis ? xaxes : yaxes, function(i, a) {
                if (a && (a.show || a.reserveSpace)) {
                    if (a === axis) {
                        found = true;
                    } else if (a.options.position === pos) {
                        if (found) {
                            outermost = false;
                        } else {
                            innermost = false;
                        }
                    }
                    if (!found) {
                        first = false;
                    }
                }
            });

            // The outermost axis on each side has no margin

            if (outermost) {
                axisMargin = 0;
            }

            // The ticks for the first axis in each direction stretch across

            if (tickLength == null) {
                tickLength = first ? "full" : 5;
            }

            if (!isNaN(+tickLength))
                padding += +tickLength;

            if (isXAxis) {
                lh += padding;

                if (pos == "bottom") {
                    plotOffset.bottom += lh + axisMargin;
                    axis.box = { top: surface.height - plotOffset.bottom, height: lh };
                }
                else {
                    axis.box = { top: plotOffset.top + axisMargin, height: lh };
                    plotOffset.top += lh + axisMargin;
                }
            }
            else {
                lw += padding;

                if (pos == "left") {
                    axis.box = { left: plotOffset.left + axisMargin, width: lw };
                    plotOffset.left += lw + axisMargin;
                }
                else {
                    plotOffset.right += lw + axisMargin;
                    axis.box = { left: surface.width - plotOffset.right, width: lw };
                }
            }

             // save for future reference
            axis.position = pos;
            axis.tickLength = tickLength;
            axis.box.padding = padding;
            axis.innermost = innermost;
        }

        function allocateAxisBoxSecondPhase(axis) {
            // now that all axis boxes have been placed in one
            // dimension, we can set the remaining dimension coordinates
            if (axis.direction == "x") {
                axis.box.left = plotOffset.left - axis.labelWidth / 2;
                axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth;
            }
            else {
                axis.box.top = plotOffset.top - axis.labelHeight / 2;
                axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight;
            }
        }

        function adjustLayoutForThingsStickingOut() {
            // possibly adjust plot offset to ensure everything stays
            // inside the canvas and isn't clipped off

            var minMargin = options.grid.minBorderMargin,
                axis, i;

            // check stuff from the plot (FIXME: this should just read
            // a value from the series, otherwise it's impossible to
            // customize)
            if (minMargin == null) {
                minMargin = 0;
                for (i = 0; i < series.length; ++i)
                    minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth/2));
            }

            var margins = {
                left: minMargin,
                right: minMargin,
                top: minMargin,
                bottom: minMargin
            };

            // check axis labels, note we don't check the actual
            // labels but instead use the overall width/height to not
            // jump as much around with replots
            $.each(allAxes(), function (_, axis) {
                if (axis.reserveSpace && axis.ticks && axis.ticks.length) {
                    if (axis.direction === "x") {
                        margins.left = Math.max(margins.left, axis.labelWidth / 2);
                        margins.right = Math.max(margins.right, axis.labelWidth / 2);
                    } else {
                        margins.bottom = Math.max(margins.bottom, axis.labelHeight / 2);
                        margins.top = Math.max(margins.top, axis.labelHeight / 2);
                    }
                }
            });

            plotOffset.left = Math.ceil(Math.max(margins.left, plotOffset.left));
            plotOffset.right = Math.ceil(Math.max(margins.right, plotOffset.right));
            plotOffset.top = Math.ceil(Math.max(margins.top, plotOffset.top));
            plotOffset.bottom = Math.ceil(Math.max(margins.bottom, plotOffset.bottom));
        }

        function setupGrid() {
            var i, axes = allAxes(), showGrid = options.grid.show;

            // Initialize the plot's offset from the edge of the canvas

            for (var a in plotOffset) {
                var margin = options.grid.margin || 0;
                plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0;
            }

            executeHooks(hooks.processOffset, [plotOffset]);

            // If the grid is visible, add its border width to the offset

            for (var a in plotOffset) {
                if(typeof(options.grid.borderWidth) == "object") {
                    plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0;
                }
                else {
                    plotOffset[a] += showGrid ? options.grid.borderWidth : 0;
                }
            }

            $.each(axes, function (_, axis) {
                var axisOpts = axis.options;
                axis.show = axisOpts.show == null ? axis.used : axisOpts.show;
                axis.reserveSpace = axisOpts.reserveSpace == null ? axis.show : axisOpts.reserveSpace;
                setRange(axis);
            });

            if (showGrid) {

                var allocatedAxes = $.grep(axes, function (axis) {
                    return axis.show || axis.reserveSpace;
                });

                $.each(allocatedAxes, function (_, axis) {
                    // make the ticks
                    setupTickGeneration(axis);
                    setTicks(axis);
                    snapRangeToTicks(axis, axis.ticks);
                    // find labelWidth/Height for axis
                    measureTickLabels(axis);
                });

                // with all dimensions calculated, we can compute the
                // axis bounding boxes, start from the outside
                // (reverse order)
                for (i = allocatedAxes.length - 1; i >= 0; --i)
                    allocateAxisBoxFirstPhase(allocatedAxes[i]);

                // make sure we've got enough space for things that
                // might stick out
                adjustLayoutForThingsStickingOut();

                $.each(allocatedAxes, function (_, axis) {
                    allocateAxisBoxSecondPhase(axis);
                });
            }

            plotWidth = surface.width - plotOffset.left - plotOffset.right;
            plotHeight = surface.height - plotOffset.bottom - plotOffset.top;

            // now we got the proper plot dimensions, we can compute the scaling
            $.each(axes, function (_, axis) {
                setTransformationHelpers(axis);
            });

            if (showGrid) {
                drawAxisLabels();
            }

            insertLegend();
        }

        function setRange(axis) {
            var opts = axis.options,
                min = +(opts.min != null ? opts.min : axis.datamin),
                max = +(opts.max != null ? opts.max : axis.datamax),
                delta = max - min;

            if (delta == 0.0) {
                // degenerate case
                var widen = max == 0 ? 1 : 0.01;

                if (opts.min == null)
                    min -= widen;
                // always widen max if we couldn't widen min to ensure we
                // don't fall into min == max which doesn't work
                if (opts.max == null || opts.min != null)
                    max += widen;
            }
            else {
                // consider autoscaling
                var margin = opts.autoscaleMargin;
                if (margin != null) {
                    if (opts.min == null) {
                        min -= delta * margin;
                        // make sure we don't go below zero if all values
                        // are positive
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)
                            min = 0;
                    }
                    if (opts.max == null) {
                        max += delta * margin;
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)
                            max = 0;
                    }
                }
            }
            axis.min = min;
            axis.max = max;
        }

        function setupTickGeneration(axis) {
            var opts = axis.options;

            // estimate number of ticks
            var noTicks;
            if (typeof opts.ticks == "number" && opts.ticks > 0)
                noTicks = opts.ticks;
            else
                // heuristic based on the model a*sqrt(x) fitted to
                // some data points that seemed reasonable
                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);

            var delta = (axis.max - axis.min) / noTicks,
                dec = -Math.floor(Math.log(delta) / Math.LN10),
                maxDec = opts.tickDecimals;

            if (maxDec != null && dec > maxDec) {
                dec = maxDec;
            }

            var magn = Math.pow(10, -dec),
                norm = delta / magn, // norm is between 1.0 and 10.0
                size;

            if (norm < 1.5) {
                size = 1;
            } else if (norm < 3) {
                size = 2;
                // special case for 2.5, requires an extra decimal
                if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                    size = 2.5;
                    ++dec;
                }
            } else if (norm < 7.5) {
                size = 5;
            } else {
                size = 10;
            }

            size *= magn;

            if (opts.minTickSize != null && size < opts.minTickSize) {
                size = opts.minTickSize;
            }

            axis.delta = delta;
            axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
            axis.tickSize = opts.tickSize || size;

            // Time mode was moved to a plug-in in 0.8, and since so many people use it
            // we'll add an especially friendly reminder to make sure they included it.

            if (opts.mode == "time" && !axis.tickGenerator) {
                throw new Error("Time mode requires the flot.time plugin.");
            }

            // Flot supports base-10 axes; any other mode else is handled by a plug-in,
            // like flot.time.js.

            if (!axis.tickGenerator) {

                axis.tickGenerator = function (axis) {

                    var ticks = [],
                        start = floorInBase(axis.min, axis.tickSize),
                        i = 0,
                        v = Number.NaN,
                        prev;

                    do {
                        prev = v;
                        v = start + i * axis.tickSize;
                        ticks.push(v);
                        ++i;
                    } while (v < axis.max && v != prev);
                    return ticks;
                };

				axis.tickFormatter = function (value, axis) {

					var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
					var formatted = "" + Math.round(value * factor) / factor;

					// If tickDecimals was specified, ensure that we have exactly that
					// much precision; otherwise default to the value's own precision.

					if (axis.tickDecimals != null) {
						var decimal = formatted.indexOf(".");
						var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
						if (precision < axis.tickDecimals) {
							return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);
						}
					}

                    return formatted;
                };
            }

            if ($.isFunction(opts.tickFormatter))
                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };

            if (opts.alignTicksWithAxis != null) {
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
                if (otherAxis && otherAxis.used && otherAxis != axis) {
                    // consider snapping min/max to outermost nice ticks
                    var niceTicks = axis.tickGenerator(axis);
                    if (niceTicks.length > 0) {
                        if (opts.min == null)
                            axis.min = Math.min(axis.min, niceTicks[0]);
                        if (opts.max == null && niceTicks.length > 1)
                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
                    }

                    axis.tickGenerator = function (axis) {
                        // copy ticks, scaled to this axis
                        var ticks = [], v, i;
                        for (i = 0; i < otherAxis.ticks.length; ++i) {
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                            v = axis.min + v * (axis.max - axis.min);
                            ticks.push(v);
                        }
                        return ticks;
                    };

                    // we might need an extra decimal since forced
                    // ticks don't necessarily fit naturally
                    if (!axis.mode && opts.tickDecimals == null) {
                        var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1),
                            ts = axis.tickGenerator(axis);

                        // only proceed if the tick interval rounded
                        // with an extra decimal doesn't give us a
                        // zero at end
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
                            axis.tickDecimals = extraDec;
                    }
                }
            }
        }

        function setTicks(axis) {
            var oticks = axis.options.ticks, ticks = [];
            if (oticks == null || (typeof oticks == "number" && oticks > 0))
                ticks = axis.tickGenerator(axis);
            else if (oticks) {
                if ($.isFunction(oticks))
                    // generate the ticks
                    ticks = oticks(axis);
                else
                    ticks = oticks;
            }

            // clean up/labelify the supplied ticks, copy them over
            var i, v;
            axis.ticks = [];
            for (i = 0; i < ticks.length; ++i) {
                var label = null;
                var t = ticks[i];
                if (typeof t == "object") {
                    v = +t[0];
                    if (t.length > 1)
                        label = t[1];
                }
                else
                    v = +t;
                if (label == null)
                    label = axis.tickFormatter(v, axis);
                if (!isNaN(v))
                    axis.ticks.push({ v: v, label: label });
            }
        }

        function snapRangeToTicks(axis, ticks) {
            if (axis.options.autoscaleMargin && ticks.length > 0) {
                // snap to ticks
                if (axis.options.min == null)
                    axis.min = Math.min(axis.min, ticks[0].v);
                if (axis.options.max == null && ticks.length > 1)
                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
            }
        }

        function draw() {

            surface.clear();

            executeHooks(hooks.drawBackground, [ctx]);

            var grid = options.grid;

            // draw background, if any
            if (grid.show && grid.backgroundColor)
                drawBackground();

            if (grid.show && !grid.aboveData) {
                drawGrid();
            }

            for (var i = 0; i < series.length; ++i) {
                executeHooks(hooks.drawSeries, [ctx, series[i]]);
                drawSeries(series[i]);
            }

            executeHooks(hooks.draw, [ctx]);

            if (grid.show && grid.aboveData) {
                drawGrid();
            }

            surface.render();

            // A draw implies that either the axes or data have changed, so we
            // should probably update the overlay highlights as well.

            triggerRedrawOverlay();
        }

        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = allAxes();

            for (var i = 0; i < axes.length; ++i) {
                axis = axes[i];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)
                        key = coord + "axis"; // support x1axis as xaxis
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break;
                    }
                }
            }

            // backwards-compat stuff - to be removed in future
            if (!ranges[key]) {
                axis = coord == "x" ? xaxes[0] : yaxes[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"];
            }

            // auto-reverse as an added bonus
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp;
            }

            return { from: from, to: to, axis: axis };
        }

        function drawBackground() {
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
            ctx.fillRect(0, 0, plotWidth, plotHeight);
            ctx.restore();
        }

        function drawGrid() {
            var i, axes, bw, bc;

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // draw markings
            var markings = options.grid.markings;
            if (markings) {
                if ($.isFunction(markings)) {
                    axes = plot.getAxes();
                    // xmin etc. is backwards compatibility, to be
                    // removed in the future
                    axes.xmin = axes.xaxis.min;
                    axes.xmax = axes.xaxis.max;
                    axes.ymin = axes.yaxis.min;
                    axes.ymax = axes.yaxis.max;

                    markings = markings(axes);
                }

                for (i = 0; i < markings.length; ++i) {
                    var m = markings[i],
                        xrange = extractRange(m, "x"),
                        yrange = extractRange(m, "y");

                    // fill in missing
                    if (xrange.from == null)
                        xrange.from = xrange.axis.min;
                    if (xrange.to == null)
                        xrange.to = xrange.axis.max;
                    if (yrange.from == null)
                        yrange.from = yrange.axis.min;
                    if (yrange.to == null)
                        yrange.to = yrange.axis.max;

                    // clip
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
                        continue;

                    xrange.from = Math.max(xrange.from, xrange.axis.min);
                    xrange.to = Math.min(xrange.to, xrange.axis.max);
                    yrange.from = Math.max(yrange.from, yrange.axis.min);
                    yrange.to = Math.min(yrange.to, yrange.axis.max);

                    var xequal = xrange.from === xrange.to,
                        yequal = yrange.from === yrange.to;

                    if (xequal && yequal) {
                        continue;
                    }

                    // then draw
                    xrange.from = Math.floor(xrange.axis.p2c(xrange.from));
                    xrange.to = Math.floor(xrange.axis.p2c(xrange.to));
                    yrange.from = Math.floor(yrange.axis.p2c(yrange.from));
                    yrange.to = Math.floor(yrange.axis.p2c(yrange.to));

                    if (xequal || yequal) {
                        var lineWidth = m.lineWidth || options.grid.markingsLineWidth,
                            subPixel = lineWidth % 2 ? 0.5 : 0;
                        ctx.beginPath();
                        ctx.strokeStyle = m.color || options.grid.markingsColor;
                        ctx.lineWidth = lineWidth;
                        if (xequal) {
                            ctx.moveTo(xrange.to + subPixel, yrange.from);
                            ctx.lineTo(xrange.to + subPixel, yrange.to);
                        } else {
                            ctx.moveTo(xrange.from, yrange.to + subPixel);
                            ctx.lineTo(xrange.to, yrange.to + subPixel);                            
                        }
                        ctx.stroke();
                    } else {
                        ctx.fillStyle = m.color || options.grid.markingsColor;
                        ctx.fillRect(xrange.from, yrange.to,
                                     xrange.to - xrange.from,
                                     yrange.from - yrange.to);
                    }
                }
            }

            // draw the ticks
            axes = allAxes();
            bw = options.grid.borderWidth;

            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box,
                    t = axis.tickLength, x, y, xoff, yoff;
                if (!axis.show || axis.ticks.length == 0)
                    continue;

                ctx.lineWidth = 1;

                // find the edges
                if (axis.direction == "x") {
                    x = 0;
                    if (t == "full")
                        y = (axis.position == "top" ? 0 : plotHeight);
                    else
                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
                }
                else {
                    y = 0;
                    if (t == "full")
                        x = (axis.position == "left" ? 0 : plotWidth);
                    else
                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
                }

                // draw tick bar
                if (!axis.innermost) {
                    ctx.strokeStyle = axis.options.color;
                    ctx.beginPath();
                    xoff = yoff = 0;
                    if (axis.direction == "x")
                        xoff = plotWidth + 1;
                    else
                        yoff = plotHeight + 1;

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x") {
                            y = Math.floor(y) + 0.5;
                        } else {
                            x = Math.floor(x) + 0.5;
                        }
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                    ctx.stroke();
                }

                // draw ticks

                ctx.strokeStyle = axis.options.tickColor;

                ctx.beginPath();
                for (i = 0; i < axis.ticks.length; ++i) {
                    var v = axis.ticks[i].v;

                    xoff = yoff = 0;

                    if (isNaN(v) || v < axis.min || v > axis.max
                        // skip those lying on the axes if we got a border
                        || (t == "full"
                            && ((typeof bw == "object" && bw[axis.position] > 0) || bw > 0)
                            && (v == axis.min || v == axis.max)))
                        continue;

                    if (axis.direction == "x") {
                        x = axis.p2c(v);
                        yoff = t == "full" ? -plotHeight : t;

                        if (axis.position == "top")
                            yoff = -yoff;
                    }
                    else {
                        y = axis.p2c(v);
                        xoff = t == "full" ? -plotWidth : t;

                        if (axis.position == "left")
                            xoff = -xoff;
                    }

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x")
                            x = Math.floor(x) + 0.5;
                        else
                            y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                }

                ctx.stroke();
            }


            // draw border
            if (bw) {
                // If either borderWidth or borderColor is an object, then draw the border
                // line by line instead of as one rectangle
                bc = options.grid.borderColor;
                if(typeof bw == "object" || typeof bc == "object") {
                    if (typeof bw !== "object") {
                        bw = {top: bw, right: bw, bottom: bw, left: bw};
                    }
                    if (typeof bc !== "object") {
                        bc = {top: bc, right: bc, bottom: bc, left: bc};
                    }

                    if (bw.top > 0) {
                        ctx.strokeStyle = bc.top;
                        ctx.lineWidth = bw.top;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left, 0 - bw.top/2);
                        ctx.lineTo(plotWidth, 0 - bw.top/2);
                        ctx.stroke();
                    }

                    if (bw.right > 0) {
                        ctx.strokeStyle = bc.right;
                        ctx.lineWidth = bw.right;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);
                        ctx.lineTo(plotWidth + bw.right / 2, plotHeight);
                        ctx.stroke();
                    }

                    if (bw.bottom > 0) {
                        ctx.strokeStyle = bc.bottom;
                        ctx.lineWidth = bw.bottom;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);
                        ctx.lineTo(0, plotHeight + bw.bottom / 2);
                        ctx.stroke();
                    }

                    if (bw.left > 0) {
                        ctx.strokeStyle = bc.left;
                        ctx.lineWidth = bw.left;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left/2, plotHeight + bw.bottom);
                        ctx.lineTo(0- bw.left/2, 0);
                        ctx.stroke();
                    }
                }
                else {
                    ctx.lineWidth = bw;
                    ctx.strokeStyle = options.grid.borderColor;
                    ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
                }
            }

            ctx.restore();
        }

        function drawAxisLabels() {

            $.each(allAxes(), function (_, axis) {
                var box = axis.box,
                    legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                    layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                    font = axis.options.font || "flot-tick-label tickLabel",
                    tick, x, y, halign, valign;

                // Remove text before checking for axis.show and ticks.length;
                // otherwise plugins, like flot-tickrotor, that draw their own
                // tick labels will end up with both theirs and the defaults.

                surface.removeText(layer);

                if (!axis.show || axis.ticks.length == 0)
                    return;

                for (var i = 0; i < axis.ticks.length; ++i) {

                    tick = axis.ticks[i];
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)
                        continue;

                    if (axis.direction == "x") {
                        halign = "center";
                        x = plotOffset.left + axis.p2c(tick.v);
                        if (axis.position == "bottom") {
                            y = box.top + box.padding;
                        } else {
                            y = box.top + box.height - box.padding;
                            valign = "bottom";
                        }
                    } else {
                        valign = "middle";
                        y = plotOffset.top + axis.p2c(tick.v);
                        if (axis.position == "left") {
                            x = box.left + box.width - box.padding;
                            halign = "right";
                        } else {
                            x = box.left + box.padding;
                        }
                    }

                    surface.addText(layer, x, y, tick.label, font, null, null, halign, valign);
                }
            });
        }

        function drawSeries(series) {
            if (series.lines.show)
                drawSeriesLines(series);
            if (series.bars.show)
                drawSeriesBars(series);
            if (series.points.show)
                drawSeriesPoints(series);
        }

        function drawSeriesLines(series) {
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    prevx = null, prevy = null;

                ctx.beginPath();
                for (var i = ps; i < points.length; i += ps) {
                    var x1 = points[i - ps], y1 = points[i - ps + 1],
                        x2 = points[i], y2 = points[i + 1];

                    if (x1 == null || x2 == null)
                        continue;

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min) {
                        if (y2 < axisy.min)
                            continue;   // line segment is outside
                        // compute new intersection point
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min) {
                        if (y1 < axisy.min)
                            continue;
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max) {
                        if (y2 > axisy.max)
                            continue;
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max) {
                        if (y1 > axisy.max)
                            continue;
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (x1 != prevx || y1 != prevy)
                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);

                    prevx = x2;
                    prevy = y2;
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
                }
                ctx.stroke();
            }

            function plotLineArea(datapoints, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),
                    i = 0, top, areaOpen = false,
                    ypos = 1, segmentStart = 0, segmentEnd = 0;

                // we process each segment in two turns, first forward
                // direction to sketch out top, then once we hit the
                // end we go backwards to sketch the bottom
                while (true) {
                    if (ps > 0 && i > points.length + ps)
                        break;

                    i += ps; // ps is negative if going backwards

                    var x1 = points[i - ps],
                        y1 = points[i - ps + ypos],
                        x2 = points[i], y2 = points[i + ypos];

                    if (areaOpen) {
                        if (ps > 0 && x1 != null && x2 == null) {
                            // at turning point
                            segmentEnd = i;
                            ps = -ps;
                            ypos = 2;
                            continue;
                        }

                        if (ps < 0 && i == segmentStart + ps) {
                            // done with the reverse sweep
                            ctx.fill();
                            areaOpen = false;
                            ps = -ps;
                            ypos = 1;
                            i = segmentStart = segmentEnd + ps;
                            continue;
                        }
                    }

                    if (x1 == null || x2 == null)
                        continue;

                    // clip x values

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (!areaOpen) {
                        // open area
                        ctx.beginPath();
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                        areaOpen = true;
                    }

                    // now first check the case where both is outside
                    if (y1 >= axisy.max && y2 >= axisy.max) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                        continue;
                    }
                    else if (y1 <= axisy.min && y2 <= axisy.min) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                        continue;
                    }

                    // else it's a bit more complicated, there might
                    // be a flat maxed out rectangle first, then a
                    // triangular cutout or reverse; to find these
                    // keep track of the current x values
                    var x1old = x1, x2old = x2;

                    // clip the y values, without shortcutting, we
                    // go through all cases in turn

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // if the x value was changed we got a rectangle
                    // to fill
                    if (x1 != x1old) {
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
                        // it goes to (x1, y1), but we fill that below
                    }

                    // fill triangular section, this sometimes result
                    // in redundant points if (x1, y1) hasn't changed
                    // from previous line to, but we just ignore that
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

                    // fill the other rectangle if it's there
                    if (x2 != x2old) {
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
                    }
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineJoin = "round";

            var lw = series.lines.lineWidth,
                sw = series.shadowSize;
            // FIXME: consider another form of shadow when filling is turned on
            if (lw > 0 && sw > 0) {
                // draw shadow as a thick and thin line with transparency
                ctx.lineWidth = sw;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                // position shadow at angle from the mid of line
                var angle = Math.PI/18;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw/2;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                plotLineArea(series.datapoints, series.xaxis, series.yaxis);
            }

            if (lw > 0)
                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function drawSeriesPoints(series) {
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                        continue;

                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                    else
                        symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();

                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            var lw = series.points.lineWidth,
                sw = series.shadowSize,
                radius = series.points.radius,
                symbol = series.points.symbol;

            // If the user sets the line width to 0, we change it to a very 
            // small value. A line width of 0 seems to force the default of 1.
            // Doing the conditional here allows the shadow setting to still be 
            // optional even with a lineWidth of 0.

            if( lw == 0 )
                lw = 0.0001;

            if (lw > 0 && sw > 0) {
                // draw shadow in two steps
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series.datapoints, radius, null, w + w/2, true,
                           series.xaxis, series.yaxis, symbol);

                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w/2, true,
                           series.xaxis, series.yaxis, symbol);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series.datapoints, radius,
                       getFillStyle(series.points, series.color), 0, false,
                       series.xaxis, series.yaxis, symbol);
            ctx.restore();
        }

        function drawBar(x, y, b, barLeft, barRight, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top,
                drawLeft, drawRight, drawTop, drawBottom,
                tmp;

            // in horizontal mode, we start the bar from the left
            // instead of from the bottom so it appears to be
            // horizontal rather than vertical
            if (horizontal) {
                drawBottom = drawRight = drawTop = true;
                drawLeft = false;
                left = b;
                right = x;
                top = y + barLeft;
                bottom = y + barRight;

                // account for negative bars
                if (right < left) {
                    tmp = right;
                    right = left;
                    left = tmp;
                    drawLeft = true;
                    drawRight = false;
                }
            }
            else {
                drawLeft = drawRight = drawTop = true;
                drawBottom = false;
                left = x + barLeft;
                right = x + barRight;
                bottom = b;
                top = y;

                // account for negative bars
                if (top < bottom) {
                    tmp = top;
                    top = bottom;
                    bottom = tmp;
                    drawBottom = true;
                    drawTop = false;
                }
            }

            // clip
            if (right < axisx.min || left > axisx.max ||
                top < axisy.min || bottom > axisy.max)
                return;

            if (left < axisx.min) {
                left = axisx.min;
                drawLeft = false;
            }

            if (right > axisx.max) {
                right = axisx.max;
                drawRight = false;
            }

            if (bottom < axisy.min) {
                bottom = axisy.min;
                drawBottom = false;
            }

            if (top > axisy.max) {
                top = axisy.max;
                drawTop = false;
            }

            left = axisx.p2c(left);
            bottom = axisy.p2c(bottom);
            right = axisx.p2c(right);
            top = axisy.p2c(top);

            // fill the bar
            if (fillStyleCallback) {
                c.fillStyle = fillStyleCallback(bottom, top);
                c.fillRect(left, top, right - left, bottom - top)
            }

            // draw outline
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
                c.beginPath();

                // FIXME: inline moveTo is buggy with excanvas
                c.moveTo(left, bottom);
                if (drawLeft)
                    c.lineTo(left, top);
                else
                    c.moveTo(left, top);
                if (drawTop)
                    c.lineTo(right, top);
                else
                    c.moveTo(right, top);
                if (drawRight)
                    c.lineTo(right, bottom);
                else
                    c.moveTo(right, bottom);
                if (drawBottom)
                    c.lineTo(left, bottom);
                else
                    c.moveTo(left, bottom);
                c.stroke();
            }
        }

        function drawSeriesBars(series) {
            function plotBars(datapoints, barLeft, barRight, fillStyleCallback, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    if (points[i] == null)
                        continue;
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // FIXME: figure out a way to add shadows (for instance along the right edge)
            ctx.lineWidth = series.bars.lineWidth;
            ctx.strokeStyle = series.color;

            var barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function getFillStyle(filloptions, seriesColor, bottom, top) {
            var fill = filloptions.fill;
            if (!fill)
                return null;

            if (filloptions.fillColor)
                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);

            var c = $.color.parse(seriesColor);
            c.a = typeof fill == "number" ? fill : 0.4;
            c.normalize();
            return c.toString();
        }

        function insertLegend() {

            if (options.legend.container != null) {
                $(options.legend.container).html("");
            } else {
                placeholder.find(".legend").remove();
            }

            if (!options.legend.show) {
                return;
            }

            var fragments = [], entries = [], rowStarted = false,
                lf = options.legend.labelFormatter, s, label;

            // Build a list of legend entries, with each having a label and a color

            for (var i = 0; i < series.length; ++i) {
                s = series[i];
                if (s.label) {
                    label = lf ? lf(s.label, s) : s.label;
                    if (label) {
                        entries.push({
                            label: label,
                            color: s.color
                        });
                    }
                }
            }

            // Sort the legend using either the default or a custom comparator

            if (options.legend.sorted) {
                if ($.isFunction(options.legend.sorted)) {
                    entries.sort(options.legend.sorted);
                } else if (options.legend.sorted == "reverse") {
                	entries.reverse();
                } else {
                    var ascending = options.legend.sorted != "descending";
                    entries.sort(function(a, b) {
                        return a.label == b.label ? 0 : (
                            (a.label < b.label) != ascending ? 1 : -1   // Logical XOR
                        );
                    });
                }
            }

            // Generate markup for the list of entries, in their final order

            for (var i = 0; i < entries.length; ++i) {

                var entry = entries[i];

                if (i % options.legend.noColumns == 0) {
                    if (rowStarted)
                        fragments.push('</tr>');
                    fragments.push('<tr>');
                    rowStarted = true;
                }

                fragments.push(
                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' +
                    '<td class="legendLabel">' + entry.label + '</td>'
                );
            }

            if (rowStarted)
                fragments.push('</tr>');

            if (fragments.length == 0)
                return;

            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
            if (options.legend.container != null)
                $(options.legend.container).html(table);
            else {
                var pos = "",
                    p = options.legend.position,
                    m = options.legend.margin;
                if (m[0] == null)
                    m = [m, m];
                if (p.charAt(0) == "n")
                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
                else if (p.charAt(0) == "s")
                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
                if (p.charAt(1) == "e")
                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
                else if (p.charAt(1) == "w")
                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0.0) {
                    // put in the transparent background
                    // separately to avoid blended labels and
                    // label boxes
                    var c = options.legend.backgroundColor;
                    if (c == null) {
                        c = options.grid.backgroundColor;
                        if (c && typeof c == "string")
                            c = $.color.parse(c);
                        else
                            c = $.color.extract(legend, 'background-color');
                        c.a = 1;
                        c = c.toString();
                    }
                    var div = legend.children();
                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
                }
            }
        }


        // interactive features

        var highlights = [],
            redrawTimeout = null;

        // returns the data item the mouse is over, or null if none is found
        function findNearbyItem(mouseX, mouseY, seriesFilter) {
            var maxDistance = options.grid.mouseActiveRadius,
                smallestDistance = maxDistance * maxDistance + 1,
                item = null, foundPoint = false, i, j, ps;

            for (i = series.length - 1; i >= 0; --i) {
                if (!seriesFilter(series[i]))
                    continue;

                var s = series[i],
                    axisx = s.xaxis,
                    axisy = s.yaxis,
                    points = s.datapoints.points,
                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
                    my = axisy.c2p(mouseY),
                    maxx = maxDistance / axisx.scale,
                    maxy = maxDistance / axisy.scale;

                ps = s.datapoints.pointsize;
                // with inverse transforms, we can't use the maxx/maxy
                // optimization, sadly
                if (axisx.options.inverseTransform)
                    maxx = Number.MAX_VALUE;
                if (axisy.options.inverseTransform)
                    maxy = Number.MAX_VALUE;

                if (s.lines.show || s.points.show) {
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1];
                        if (x == null)
                            continue;

                        // For points and lines, the cursor must be within a
                        // certain distance to the data point
                        if (x - mx > maxx || x - mx < -maxx ||
                            y - my > maxy || y - my < -maxy)
                            continue;

                        // We have to calculate distances in pixels, not in
                        // data units, because the scales of the axes may be different
                        var dx = Math.abs(axisx.p2c(x) - mouseX),
                            dy = Math.abs(axisy.p2c(y) - mouseY),
                            dist = dx * dx + dy * dy; // we save the sqrt

                        // use <= to ensure last point takes precedence
                        // (last generally means on top of)
                        if (dist < smallestDistance) {
                            smallestDistance = dist;
                            item = [i, j / ps];
                        }
                    }
                }

                if (s.bars.show && !item) { // no other point can be nearby

                    var barLeft, barRight;

                    switch (s.bars.align) {
                        case "left":
                            barLeft = 0;
                            break;
                        case "right":
                            barLeft = -s.bars.barWidth;
                            break;
                        default:
                            barLeft = -s.bars.barWidth / 2;
                    }

                    barRight = barLeft + s.bars.barWidth;

                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1], b = points[j + 2];
                        if (x == null)
                            continue;

                        // for a bar graph, the cursor must be inside the bar
                        if (series[i].bars.horizontal ?
                            (mx <= Math.max(b, x) && mx >= Math.min(b, x) &&
                             my >= y + barLeft && my <= y + barRight) :
                            (mx >= x + barLeft && mx <= x + barRight &&
                             my >= Math.min(b, y) && my <= Math.max(b, y)))
                                item = [i, j / ps];
                    }
                }
            }

            if (item) {
                i = item[0];
                j = item[1];
                ps = series[i].datapoints.pointsize;

                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                         dataIndex: j,
                         series: series[i],
                         seriesIndex: i };
            }

            return null;
        }

        function onMouseMove(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return s["hoverable"] != false; });
        }

        function onMouseLeave(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return false; });
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e,
                                   function (s) { return s["clickable"] != false; });
        }

        // trigger click or hover event (they send the same parameters
        // so we share their code)
        function triggerClickHoverEvent(eventname, event, seriesFilter) {
            var offset = eventHolder.offset(),
                canvasX = event.pageX - offset.left - plotOffset.left,
                canvasY = event.pageY - offset.top - plotOffset.top,
            pos = canvasToAxisCoords({ left: canvasX, top: canvasY });

            pos.pageX = event.pageX;
            pos.pageY = event.pageY;

            var item = findNearbyItem(canvasX, canvasY, seriesFilter);

            if (item) {
                // fill in mouse pos for any listeners out there
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10);
            }

            if (options.grid.autoHighlight) {
                // clear auto-highlights
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname &&
                        !(item && h.series == item.series &&
                          h.point[0] == item.datapoint[0] &&
                          h.point[1] == item.datapoint[1]))
                        unhighlight(h.series, h.point);
                }

                if (item)
                    highlight(item.series, item.datapoint, eventname);
            }

            placeholder.trigger(eventname, [ pos, item ]);
        }

        function triggerRedrawOverlay() {
            var t = options.interaction.redrawOverlayInterval;
            if (t == -1) {      // skip event queue
                drawOverlay();
                return;
            }

            if (!redrawTimeout)
                redrawTimeout = setTimeout(drawOverlay, t);
        }

        function drawOverlay() {
            redrawTimeout = null;

            // draw highlights
            octx.save();
            overlay.clear();
            octx.translate(plotOffset.left, plotOffset.top);

            var i, hi;
            for (i = 0; i < highlights.length; ++i) {
                hi = highlights[i];

                if (hi.series.bars.show)
                    drawBarHighlight(hi.series, hi.point);
                else
                    drawPointHighlight(hi.series, hi.point);
            }
            octx.restore();

            executeHooks(hooks.drawOverlay, [octx]);
        }

        function highlight(s, point, auto) {
            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i == -1) {
                highlights.push({ series: s, point: point, auto: auto });

                triggerRedrawOverlay();
            }
            else if (!auto)
                highlights[i].auto = false;
        }

        function unhighlight(s, point) {
            if (s == null && point == null) {
                highlights = [];
                triggerRedrawOverlay();
                return;
            }

            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i != -1) {
                highlights.splice(i, 1);

                triggerRedrawOverlay();
            }
        }

        function indexOfHighlight(s, p) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s && h.point[0] == p[0]
                    && h.point[1] == p[1])
                    return i;
            }
            return -1;
        }

        function drawPointHighlight(series, point) {
            var x = point[0], y = point[1],
                axisx = series.xaxis, axisy = series.yaxis,
                highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString();

            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                return;

            var pointRadius = series.points.radius + series.points.lineWidth / 2;
            octx.lineWidth = pointRadius;
            octx.strokeStyle = highlightColor;
            var radius = 1.5 * pointRadius;
            x = axisx.p2c(x);
            y = axisy.p2c(y);

            octx.beginPath();
            if (series.points.symbol == "circle")
                octx.arc(x, y, radius, 0, 2 * Math.PI, false);
            else
                series.points.symbol(octx, x, y, radius, false);
            octx.closePath();
            octx.stroke();
        }

        function drawBarHighlight(series, point) {
            var highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString(),
                fillStyle = highlightColor,
                barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            octx.lineWidth = series.bars.lineWidth;
            octx.strokeStyle = highlightColor;

            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
                    function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
        }

        function getColorOrGradient(spec, bottom, top, defaultColor) {
            if (typeof spec == "string")
                return spec;
            else {
                // assume this is a gradient spec; IE currently only
                // supports a simple vertical gradient properly, so that's
                // what we support too
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);

                for (var i = 0, l = spec.colors.length; i < l; ++i) {
                    var c = spec.colors[i];
                    if (typeof c != "string") {
                        var co = $.color.parse(defaultColor);
                        if (c.brightness != null)
                            co = co.scale('rgb', c.brightness);
                        if (c.opacity != null)
                            co.a *= c.opacity;
                        c = co.toString();
                    }
                    gradient.addColorStop(i / (l - 1), c);
                }

                return gradient;
            }
        }
    }

    // Add the plot function to the top level of the jQuery object

    $.plot = function(placeholder, data, options) {
        //var t0 = new Date();
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
        //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));
        return plot;
    };

    $.plot.version = "0.8.3";

    $.plot.plugins = [];

    // Also add the plot function as a chainable property

    $.fn.plot = function(data, options) {
        return this.each(function() {
            $.plot(this, data, options);
        });
    };

    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }

})(jQuery);

/* Flot plugin for rendering pie charts.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes that each series has a single data value, and that each
value is a positive integer or zero.  Negative numbers don't make sense for a
pie chart, and have unpredictable results.  The values do NOT need to be
passed in as percentages; the plugin will calculate the total and per-slice
percentages internally.

* Created by Brian Medendorp

* Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars

The plugin supports these options:

	series: {
		pie: {
			show: true/false
			radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
			innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
			startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
			tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
			offset: {
				top: integer value to move the pie up or down
				left: integer value to move the pie left or right, or 'auto'
			},
			stroke: {
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
				width: integer pixel width of the stroke
			},
			label: {
				show: true/false, or 'auto'
				formatter:  a user-defined function that modifies the text/style of the label text
				radius: 0-1 for percentage of fullsize, or a specified pixel length
				background: {
					color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
					opacity: 0-1
				},
				threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
			},
			combine: {
				threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
				label: any text value of what the combined slice should be labeled
			}
			highlight: {
				opacity: 0-1
			}
		}
	}

More detail and specific examples can be found in the included HTML file.

*/

(function($) {

	// Maximum redraw attempts when fitting labels within the plot

	var REDRAW_ATTEMPTS = 10;

	// Factor by which to shrink the pie when fitting labels within the plot

	var REDRAW_SHRINK = 0.95;

	function init(plot) {

		var canvas = null,
			target = null,
			options = null,
			maxRadius = null,
			centerLeft = null,
			centerTop = null,
			processed = false,
			ctx = null;

		// interactive variables

		var highlights = [];

		// add hook to determine if pie plugin in enabled, and then perform necessary operations

		plot.hooks.processOptions.push(function(plot, options) {
			if (options.series.pie.show) {

				options.grid.show = false;

				// set labels.show

				if (options.series.pie.label.show == "auto") {
					if (options.legend.show) {
						options.series.pie.label.show = false;
					} else {
						options.series.pie.label.show = true;
					}
				}

				// set radius

				if (options.series.pie.radius == "auto") {
					if (options.series.pie.label.show) {
						options.series.pie.radius = 3/4;
					} else {
						options.series.pie.radius = 1;
					}
				}

				// ensure sane tilt

				if (options.series.pie.tilt > 1) {
					options.series.pie.tilt = 1;
				} else if (options.series.pie.tilt < 0) {
					options.series.pie.tilt = 0;
				}
			}
		});

		plot.hooks.bindEvents.push(function(plot, eventHolder) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				if (options.grid.hoverable) {
					eventHolder.unbind("mousemove").mousemove(onMouseMove);
				}
				if (options.grid.clickable) {
					eventHolder.unbind("click").click(onClick);
				}
			}
		});

		plot.hooks.processDatapoints.push(function(plot, series, data, datapoints) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				processDatapoints(plot, series, data, datapoints);
			}
		});

		plot.hooks.drawOverlay.push(function(plot, octx) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				drawOverlay(plot, octx);
			}
		});

		plot.hooks.draw.push(function(plot, newCtx) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				draw(plot, newCtx);
			}
		});

		function processDatapoints(plot, series, datapoints) {
			if (!processed)	{
				processed = true;
				canvas = plot.getCanvas();
				target = $(canvas).parent();
				options = plot.getOptions();
				plot.setData(combine(plot.getData()));
			}
		}

		function combine(data) {

			var total = 0,
				combined = 0,
				numCombined = 0,
				color = options.series.pie.combine.color,
				newdata = [];

			// Fix up the raw data from Flot, ensuring the data is numeric

			for (var i = 0; i < data.length; ++i) {

				var value = data[i].data;

				// If the data is an array, we'll assume that it's a standard
				// Flot x-y pair, and are concerned only with the second value.

				// Note how we use the original array, rather than creating a
				// new one; this is more efficient and preserves any extra data
				// that the user may have stored in higher indexes.

				if ($.isArray(value) && value.length == 1) {
    				value = value[0];
				}

				if ($.isArray(value)) {
					// Equivalent to $.isNumeric() but compatible with jQuery < 1.7
					if (!isNaN(parseFloat(value[1])) && isFinite(value[1])) {
						value[1] = +value[1];
					} else {
						value[1] = 0;
					}
				} else if (!isNaN(parseFloat(value)) && isFinite(value)) {
					value = [1, +value];
				} else {
					value = [1, 0];
				}

				data[i].data = [value];
			}

			// Sum up all the slices, so we can calculate percentages for each

			for (var i = 0; i < data.length; ++i) {
				total += data[i].data[0][1];
			}

			// Count the number of slices with percentages below the combine
			// threshold; if it turns out to be just one, we won't combine.

			for (var i = 0; i < data.length; ++i) {
				var value = data[i].data[0][1];
				if (value / total <= options.series.pie.combine.threshold) {
					combined += value;
					numCombined++;
					if (!color) {
						color = data[i].color;
					}
				}
			}

			for (var i = 0; i < data.length; ++i) {
				var value = data[i].data[0][1];
				if (numCombined < 2 || value / total > options.series.pie.combine.threshold) {
					newdata.push(
						$.extend(data[i], {     /* extend to allow keeping all other original data values
						                           and using them e.g. in labelFormatter. */
							data: [[1, value]],
							color: data[i].color,
							label: data[i].label,
							angle: value * Math.PI * 2 / total,
							percent: value / (total / 100)
						})
					);
				}
			}

			if (numCombined > 1) {
				newdata.push({
					data: [[1, combined]],
					color: color,
					label: options.series.pie.combine.label,
					angle: combined * Math.PI * 2 / total,
					percent: combined / (total / 100)
				});
			}

			return newdata;
		}

		function draw(plot, newCtx) {

			if (!target) {
				return; // if no series were passed
			}

			var canvasWidth = plot.getPlaceholder().width(),
				canvasHeight = plot.getPlaceholder().height(),
				legendWidth = target.children().filter(".legend").children().width() || 0;

			ctx = newCtx;

			// WARNING: HACK! REWRITE THIS CODE AS SOON AS POSSIBLE!

			// When combining smaller slices into an 'other' slice, we need to
			// add a new series.  Since Flot gives plugins no way to modify the
			// list of series, the pie plugin uses a hack where the first call
			// to processDatapoints results in a call to setData with the new
			// list of series, then subsequent processDatapoints do nothing.

			// The plugin-global 'processed' flag is used to control this hack;
			// it starts out false, and is set to true after the first call to
			// processDatapoints.

			// Unfortunately this turns future setData calls into no-ops; they
			// call processDatapoints, the flag is true, and nothing happens.

			// To fix this we'll set the flag back to false here in draw, when
			// all series have been processed, so the next sequence of calls to
			// processDatapoints once again starts out with a slice-combine.
			// This is really a hack; in 0.9 we need to give plugins a proper
			// way to modify series before any processing begins.

			processed = false;

			// calculate maximum radius and center point

			maxRadius =  Math.min(canvasWidth, canvasHeight / options.series.pie.tilt) / 2;
			centerTop = canvasHeight / 2 + options.series.pie.offset.top;
			centerLeft = canvasWidth / 2;

			if (options.series.pie.offset.left == "auto") {
				if (options.legend.position.match("w")) {
					centerLeft += legendWidth / 2;
				} else {
					centerLeft -= legendWidth / 2;
				}
				if (centerLeft < maxRadius) {
					centerLeft = maxRadius;
				} else if (centerLeft > canvasWidth - maxRadius) {
					centerLeft = canvasWidth - maxRadius;
				}
			} else {
				centerLeft += options.series.pie.offset.left;
			}

			var slices = plot.getData(),
				attempts = 0;

			// Keep shrinking the pie's radius until drawPie returns true,
			// indicating that all the labels fit, or we try too many times.

			do {
				if (attempts > 0) {
					maxRadius *= REDRAW_SHRINK;
				}
				attempts += 1;
				clear();
				if (options.series.pie.tilt <= 0.8) {
					drawShadow();
				}
			} while (!drawPie() && attempts < REDRAW_ATTEMPTS)

			if (attempts >= REDRAW_ATTEMPTS) {
				clear();
				target.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>");
			}

			if (plot.setSeries && plot.insertLegend) {
				plot.setSeries(slices);
				plot.insertLegend();
			}

			// we're actually done at this point, just defining internal functions at this point

			function clear() {
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				target.children().filter(".pieLabel, .pieLabelBackground").remove();
			}

			function drawShadow() {

				var shadowLeft = options.series.pie.shadow.left;
				var shadowTop = options.series.pie.shadow.top;
				var edge = 10;
				var alpha = options.series.pie.shadow.alpha;
				var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

				if (radius >= canvasWidth / 2 - shadowLeft || radius * options.series.pie.tilt >= canvasHeight / 2 - shadowTop || radius <= edge) {
					return;	// shadow would be outside canvas, so don't draw it
				}

				ctx.save();
				ctx.translate(shadowLeft,shadowTop);
				ctx.globalAlpha = alpha;
				ctx.fillStyle = "#000";

				// center and rotate to starting position

				ctx.translate(centerLeft,centerTop);
				ctx.scale(1, options.series.pie.tilt);

				//radius -= edge;

				for (var i = 1; i <= edge; i++) {
					ctx.beginPath();
					ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
					ctx.fill();
					radius -= i;
				}

				ctx.restore();
			}

			function drawPie() {

				var startAngle = Math.PI * options.series.pie.startAngle;
				var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

				// center and rotate to starting position

				ctx.save();
				ctx.translate(centerLeft,centerTop);
				ctx.scale(1, options.series.pie.tilt);
				//ctx.rotate(startAngle); // start at top; -- This doesn't work properly in Opera

				// draw slices

				ctx.save();
				var currentAngle = startAngle;
				for (var i = 0; i < slices.length; ++i) {
					slices[i].startAngle = currentAngle;
					drawSlice(slices[i].angle, slices[i].color, true);
				}
				ctx.restore();

				// draw slice outlines

				if (options.series.pie.stroke.width > 0) {
					ctx.save();
					ctx.lineWidth = options.series.pie.stroke.width;
					currentAngle = startAngle;
					for (var i = 0; i < slices.length; ++i) {
						drawSlice(slices[i].angle, options.series.pie.stroke.color, false);
					}
					ctx.restore();
				}

				// draw donut hole

				drawDonutHole(ctx);

				ctx.restore();

				// Draw the labels, returning true if they fit within the plot

				if (options.series.pie.label.show) {
					return drawLabels();
				} else return true;

				function drawSlice(angle, color, fill) {

					if (angle <= 0 || isNaN(angle)) {
						return;
					}

					if (fill) {
						ctx.fillStyle = color;
					} else {
						ctx.strokeStyle = color;
						ctx.lineJoin = "round";
					}

					ctx.beginPath();
					if (Math.abs(angle - Math.PI * 2) > 0.000000001) {
						ctx.moveTo(0, 0); // Center of the pie
					}

					//ctx.arc(0, 0, radius, 0, angle, false); // This doesn't work properly in Opera
					ctx.arc(0, 0, radius,currentAngle, currentAngle + angle / 2, false);
					ctx.arc(0, 0, radius,currentAngle + angle / 2, currentAngle + angle, false);
					ctx.closePath();
					//ctx.rotate(angle); // This doesn't work properly in Opera
					currentAngle += angle;

					if (fill) {
						ctx.fill();
					} else {
						ctx.stroke();
					}
				}

				function drawLabels() {

					var currentAngle = startAngle;
					var radius = options.series.pie.label.radius > 1 ? options.series.pie.label.radius : maxRadius * options.series.pie.label.radius;

					for (var i = 0; i < slices.length; ++i) {
						if (slices[i].percent >= options.series.pie.label.threshold * 100) {
							if (!drawLabel(slices[i], currentAngle, i)) {
								return false;
							}
						}
						currentAngle += slices[i].angle;
					}

					return true;

					function drawLabel(slice, startAngle, index) {

						if (slice.data[0][1] == 0) {
							return true;
						}

						// format label text

						var lf = options.legend.labelFormatter, text, plf = options.series.pie.label.formatter;

						if (lf) {
							text = lf(slice.label, slice);
						} else {
							text = slice.label;
						}

						if (plf) {
							text = plf(text, slice);
						}

						var halfAngle = ((startAngle + slice.angle) + startAngle) / 2;
						var x = centerLeft + Math.round(Math.cos(halfAngle) * radius);
						var y = centerTop + Math.round(Math.sin(halfAngle) * radius) * options.series.pie.tilt;

						var html = "<span class='pieLabel' id='pieLabel" + index + "' style='position:absolute;top:" + y + "px;left:" + x + "px;'>" + text + "</span>";
						target.append(html);

						var label = target.children("#pieLabel" + index);
						var labelTop = (y - label.height() / 2);
						var labelLeft = (x - label.width() / 2);

						label.css("top", labelTop);
						label.css("left", labelLeft);

						// check to make sure that the label is not outside the canvas

						if (0 - labelTop > 0 || 0 - labelLeft > 0 || canvasHeight - (labelTop + label.height()) < 0 || canvasWidth - (labelLeft + label.width()) < 0) {
							return false;
						}

						if (options.series.pie.label.background.opacity != 0) {

							// put in the transparent background separately to avoid blended labels and label boxes

							var c = options.series.pie.label.background.color;

							if (c == null) {
								c = slice.color;
							}

							var pos = "top:" + labelTop + "px;left:" + labelLeft + "px;";
							$("<div class='pieLabelBackground' style='position:absolute;width:" + label.width() + "px;height:" + label.height() + "px;" + pos + "background-color:" + c + ";'></div>")
								.css("opacity", options.series.pie.label.background.opacity)
								.insertBefore(label);
						}

						return true;
					} // end individual label function
				} // end drawLabels function
			} // end drawPie function
		} // end draw function

		// Placed here because it needs to be accessed from multiple locations

		function drawDonutHole(layer) {
			if (options.series.pie.innerRadius > 0) {

				// subtract the center

				layer.save();
				var innerRadius = options.series.pie.innerRadius > 1 ? options.series.pie.innerRadius : maxRadius * options.series.pie.innerRadius;
				layer.globalCompositeOperation = "destination-out"; // this does not work with excanvas, but it will fall back to using the stroke color
				layer.beginPath();
				layer.fillStyle = options.series.pie.stroke.color;
				layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
				layer.fill();
				layer.closePath();
				layer.restore();

				// add inner stroke

				layer.save();
				layer.beginPath();
				layer.strokeStyle = options.series.pie.stroke.color;
				layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
				layer.stroke();
				layer.closePath();
				layer.restore();

				// TODO: add extra shadow inside hole (with a mask) if the pie is tilted.
			}
		}

		//-- Additional Interactive related functions --

		function isPointInPoly(poly, pt) {
			for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
				((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1]< poly[i][1]))
				&& (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])
				&& (c = !c);
			return c;
		}

		function findNearbySlice(mouseX, mouseY) {

			var slices = plot.getData(),
				options = plot.getOptions(),
				radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius,
				x, y;

			for (var i = 0; i < slices.length; ++i) {

				var s = slices[i];

				if (s.pie.show) {

					ctx.save();
					ctx.beginPath();
					ctx.moveTo(0, 0); // Center of the pie
					//ctx.scale(1, options.series.pie.tilt);	// this actually seems to break everything when here.
					ctx.arc(0, 0, radius, s.startAngle, s.startAngle + s.angle / 2, false);
					ctx.arc(0, 0, radius, s.startAngle + s.angle / 2, s.startAngle + s.angle, false);
					ctx.closePath();
					x = mouseX - centerLeft;
					y = mouseY - centerTop;

					if (ctx.isPointInPath) {
						if (ctx.isPointInPath(mouseX - centerLeft, mouseY - centerTop)) {
							ctx.restore();
							return {
								datapoint: [s.percent, s.data],
								dataIndex: 0,
								series: s,
								seriesIndex: i
							};
						}
					} else {

						// excanvas for IE doesn;t support isPointInPath, this is a workaround.

						var p1X = radius * Math.cos(s.startAngle),
							p1Y = radius * Math.sin(s.startAngle),
							p2X = radius * Math.cos(s.startAngle + s.angle / 4),
							p2Y = radius * Math.sin(s.startAngle + s.angle / 4),
							p3X = radius * Math.cos(s.startAngle + s.angle / 2),
							p3Y = radius * Math.sin(s.startAngle + s.angle / 2),
							p4X = radius * Math.cos(s.startAngle + s.angle / 1.5),
							p4Y = radius * Math.sin(s.startAngle + s.angle / 1.5),
							p5X = radius * Math.cos(s.startAngle + s.angle),
							p5Y = radius * Math.sin(s.startAngle + s.angle),
							arrPoly = [[0, 0], [p1X, p1Y], [p2X, p2Y], [p3X, p3Y], [p4X, p4Y], [p5X, p5Y]],
							arrPoint = [x, y];

						// TODO: perhaps do some mathmatical trickery here with the Y-coordinate to compensate for pie tilt?

						if (isPointInPoly(arrPoly, arrPoint)) {
							ctx.restore();
							return {
								datapoint: [s.percent, s.data],
								dataIndex: 0,
								series: s,
								seriesIndex: i
							};
						}
					}

					ctx.restore();
				}
			}

			return null;
		}

		function onMouseMove(e) {
			triggerClickHoverEvent("plothover", e);
		}

		function onClick(e) {
			triggerClickHoverEvent("plotclick", e);
		}

		// trigger click or hover event (they send the same parameters so we share their code)

		function triggerClickHoverEvent(eventname, e) {

			var offset = plot.offset();
			var canvasX = parseInt(e.pageX - offset.left);
			var canvasY =  parseInt(e.pageY - offset.top);
			var item = findNearbySlice(canvasX, canvasY);

			if (options.grid.autoHighlight) {

				// clear auto-highlights

				for (var i = 0; i < highlights.length; ++i) {
					var h = highlights[i];
					if (h.auto == eventname && !(item && h.series == item.series)) {
						unhighlight(h.series);
					}
				}
			}

			// highlight the slice

			if (item) {
				highlight(item.series, eventname);
			}

			// trigger any hover bind events

			var pos = { pageX: e.pageX, pageY: e.pageY };
			target.trigger(eventname, [pos, item]);
		}

		function highlight(s, auto) {
			//if (typeof s == "number") {
			//	s = series[s];
			//}

			var i = indexOfHighlight(s);

			if (i == -1) {
				highlights.push({ series: s, auto: auto });
				plot.triggerRedrawOverlay();
			} else if (!auto) {
				highlights[i].auto = false;
			}
		}

		function unhighlight(s) {
			if (s == null) {
				highlights = [];
				plot.triggerRedrawOverlay();
			}

			//if (typeof s == "number") {
			//	s = series[s];
			//}

			var i = indexOfHighlight(s);

			if (i != -1) {
				highlights.splice(i, 1);
				plot.triggerRedrawOverlay();
			}
		}

		function indexOfHighlight(s) {
			for (var i = 0; i < highlights.length; ++i) {
				var h = highlights[i];
				if (h.series == s)
					return i;
			}
			return -1;
		}

		function drawOverlay(plot, octx) {

			var options = plot.getOptions();

			var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

			octx.save();
			octx.translate(centerLeft, centerTop);
			octx.scale(1, options.series.pie.tilt);

			for (var i = 0; i < highlights.length; ++i) {
				drawHighlight(highlights[i].series);
			}

			drawDonutHole(octx);

			octx.restore();

			function drawHighlight(series) {

				if (series.angle <= 0 || isNaN(series.angle)) {
					return;
				}

				//octx.fillStyle = parseColor(options.series.pie.highlight.color).scale(null, null, null, options.series.pie.highlight.opacity).toString();
				octx.fillStyle = "rgba(255, 255, 255, " + options.series.pie.highlight.opacity + ")"; // this is temporary until we have access to parseColor
				octx.beginPath();
				if (Math.abs(series.angle - Math.PI * 2) > 0.000000001) {
					octx.moveTo(0, 0); // Center of the pie
				}
				octx.arc(0, 0, radius, series.startAngle, series.startAngle + series.angle / 2, false);
				octx.arc(0, 0, radius, series.startAngle + series.angle / 2, series.startAngle + series.angle, false);
				octx.closePath();
				octx.fill();
			}
		}
	} // end init (plugin body)

	// define pie specific options and their default values

	var options = {
		series: {
			pie: {
				show: false,
				radius: "auto",	// actual radius of the visible pie (based on full calculated radius if <=1, or hard pixel value)
				innerRadius: 0, /* for donut */
				startAngle: 3/2,
				tilt: 1,
				shadow: {
					left: 5,	// shadow left offset
					top: 15,	// shadow top offset
					alpha: 0.02	// shadow alpha
				},
				offset: {
					top: 0,
					left: "auto"
				},
				stroke: {
					color: "#fff",
					width: 1
				},
				label: {
					show: "auto",
					formatter: function(label, slice) {
						return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + slice.color + ";'>" + label + "<br/>" + Math.round(slice.percent) + "%</div>";
					},	// formatter function
					radius: 1,	// radius at which to place the labels (based on full calculated radius if <=1, or hard pixel value)
					background: {
						color: null,
						opacity: 0
					},
					threshold: 0	// percentage at which to hide the label (i.e. the slice is too narrow)
				},
				combine: {
					threshold: -1,	// percentage at which to combine little slices into one larger slice
					color: null,	// color to give the new slice (auto-generated if null)
					label: "Other"	// label to give the new slice
				},
				highlight: {
					//color: "#fff",		// will add this functionality once parseColor is available
					opacity: 0.5
				}
			}
		}
	};

	$.plot.plugins.push({
		init: init,
		options: options,
		name: "pie",
		version: "1.1"
	});

})(jQuery);

/* Pretty handling of time axes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

Set axis.mode to "time" to enable. See the section "Time series data" in
API.txt for details.

*/

(function($) {

	var options = {
		xaxis: {
			timezone: null,		// "browser" for local to the client or timezone for timezone-js
			timeformat: null,	// format string to use
			twelveHourClock: false,	// 12 or 24 time in time mode
			monthNames: null	// list of names of months
		}
	};

	// round to nearby lower multiple of base

	function floorInBase(n, base) {
		return base * Math.floor(n / base);
	}

	// Returns a string with the date d formatted according to fmt.
	// A subset of the Open Group's strftime format is supported.

	function formatDate(d, fmt, monthNames, dayNames) {

		if (typeof d.strftime == "function") {
			return d.strftime(fmt);
		}

		var leftPad = function(n, pad) {
			n = "" + n;
			pad = "" + (pad == null ? "0" : pad);
			return n.length == 1 ? pad + n : n;
		};

		var r = [];
		var escape = false;
		var hours = d.getHours();
		var isAM = hours < 12;

		if (monthNames == null) {
			monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		}

		if (dayNames == null) {
			dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		}

		var hours12;

		if (hours > 12) {
			hours12 = hours - 12;
		} else if (hours == 0) {
			hours12 = 12;
		} else {
			hours12 = hours;
		}

		for (var i = 0; i < fmt.length; ++i) {

			var c = fmt.charAt(i);

			if (escape) {
				switch (c) {
					case 'a': c = "" + dayNames[d.getDay()]; break;
					case 'b': c = "" + monthNames[d.getMonth()]; break;
					case 'd': c = leftPad(d.getDate()); break;
					case 'e': c = leftPad(d.getDate(), " "); break;
					case 'h':	// For back-compat with 0.7; remove in 1.0
					case 'H': c = leftPad(hours); break;
					case 'I': c = leftPad(hours12); break;
					case 'l': c = leftPad(hours12, " "); break;
					case 'm': c = leftPad(d.getMonth() + 1); break;
					case 'M': c = leftPad(d.getMinutes()); break;
					// quarters not in Open Group's strftime specification
					case 'q':
						c = "" + (Math.floor(d.getMonth() / 3) + 1); break;
					case 'S': c = leftPad(d.getSeconds()); break;
					case 'y': c = leftPad(d.getFullYear() % 100); break;
					case 'Y': c = "" + d.getFullYear(); break;
					case 'p': c = (isAM) ? ("" + "am") : ("" + "pm"); break;
					case 'P': c = (isAM) ? ("" + "AM") : ("" + "PM"); break;
					case 'w': c = "" + d.getDay(); break;
				}
				r.push(c);
				escape = false;
			} else {
				if (c == "%") {
					escape = true;
				} else {
					r.push(c);
				}
			}
		}

		return r.join("");
	}

	// To have a consistent view of time-based data independent of which time
	// zone the client happens to be in we need a date-like object independent
	// of time zones.  This is done through a wrapper that only calls the UTC
	// versions of the accessor methods.

	function makeUtcWrapper(d) {

		function addProxyMethod(sourceObj, sourceMethod, targetObj, targetMethod) {
			sourceObj[sourceMethod] = function() {
				return targetObj[targetMethod].apply(targetObj, arguments);
			};
		};

		var utc = {
			date: d
		};

		// support strftime, if found

		if (d.strftime != undefined) {
			addProxyMethod(utc, "strftime", d, "strftime");
		}

		addProxyMethod(utc, "getTime", d, "getTime");
		addProxyMethod(utc, "setTime", d, "setTime");

		var props = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"];

		for (var p = 0; p < props.length; p++) {
			addProxyMethod(utc, "get" + props[p], d, "getUTC" + props[p]);
			addProxyMethod(utc, "set" + props[p], d, "setUTC" + props[p]);
		}

		return utc;
	};

	// select time zone strategy.  This returns a date-like object tied to the
	// desired timezone

	function dateGenerator(ts, opts) {
		if (opts.timezone == "browser") {
			return new Date(ts);
		} else if (!opts.timezone || opts.timezone == "utc") {
			return makeUtcWrapper(new Date(ts));
		} else if (typeof timezoneJS != "undefined" && typeof timezoneJS.Date != "undefined") {
			var d = new timezoneJS.Date();
			// timezone-js is fickle, so be sure to set the time zone before
			// setting the time.
			d.setTimezone(opts.timezone);
			d.setTime(ts);
			return d;
		} else {
			return makeUtcWrapper(new Date(ts));
		}
	}
	
	// map of app. size of time units in milliseconds

	var timeUnitSize = {
		"second": 1000,
		"minute": 60 * 1000,
		"hour": 60 * 60 * 1000,
		"day": 24 * 60 * 60 * 1000,
		"month": 30 * 24 * 60 * 60 * 1000,
		"quarter": 3 * 30 * 24 * 60 * 60 * 1000,
		"year": 365.2425 * 24 * 60 * 60 * 1000
	};

	// the allowed tick sizes, after 1 year we use
	// an integer algorithm

	var baseSpec = [
		[1, "second"], [2, "second"], [5, "second"], [10, "second"],
		[30, "second"], 
		[1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"],
		[30, "minute"], 
		[1, "hour"], [2, "hour"], [4, "hour"],
		[8, "hour"], [12, "hour"],
		[1, "day"], [2, "day"], [3, "day"],
		[0.25, "month"], [0.5, "month"], [1, "month"],
		[2, "month"]
	];

	// we don't know which variant(s) we'll need yet, but generating both is
	// cheap

	var specMonths = baseSpec.concat([[3, "month"], [6, "month"],
		[1, "year"]]);
	var specQuarters = baseSpec.concat([[1, "quarter"], [2, "quarter"],
		[1, "year"]]);

	function init(plot) {
		plot.hooks.processOptions.push(function (plot, options) {
			$.each(plot.getAxes(), function(axisName, axis) {

				var opts = axis.options;

				if (opts.mode == "time") {
					axis.tickGenerator = function(axis) {

						var ticks = [];
						var d = dateGenerator(axis.min, opts);
						var minSize = 0;

						// make quarter use a possibility if quarters are
						// mentioned in either of these options

						var spec = (opts.tickSize && opts.tickSize[1] ===
							"quarter") ||
							(opts.minTickSize && opts.minTickSize[1] ===
							"quarter") ? specQuarters : specMonths;

						if (opts.minTickSize != null) {
							if (typeof opts.tickSize == "number") {
								minSize = opts.tickSize;
							} else {
								minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]];
							}
						}

						for (var i = 0; i < spec.length - 1; ++i) {
							if (axis.delta < (spec[i][0] * timeUnitSize[spec[i][1]]
											  + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2
								&& spec[i][0] * timeUnitSize[spec[i][1]] >= minSize) {
								break;
							}
						}

						var size = spec[i][0];
						var unit = spec[i][1];

						// special-case the possibility of several years

						if (unit == "year") {

							// if given a minTickSize in years, just use it,
							// ensuring that it's an integer

							if (opts.minTickSize != null && opts.minTickSize[1] == "year") {
								size = Math.floor(opts.minTickSize[0]);
							} else {

								var magn = Math.pow(10, Math.floor(Math.log(axis.delta / timeUnitSize.year) / Math.LN10));
								var norm = (axis.delta / timeUnitSize.year) / magn;

								if (norm < 1.5) {
									size = 1;
								} else if (norm < 3) {
									size = 2;
								} else if (norm < 7.5) {
									size = 5;
								} else {
									size = 10;
								}

								size *= magn;
							}

							// minimum size for years is 1

							if (size < 1) {
								size = 1;
							}
						}

						axis.tickSize = opts.tickSize || [size, unit];
						var tickSize = axis.tickSize[0];
						unit = axis.tickSize[1];

						var step = tickSize * timeUnitSize[unit];

						if (unit == "second") {
							d.setSeconds(floorInBase(d.getSeconds(), tickSize));
						} else if (unit == "minute") {
							d.setMinutes(floorInBase(d.getMinutes(), tickSize));
						} else if (unit == "hour") {
							d.setHours(floorInBase(d.getHours(), tickSize));
						} else if (unit == "month") {
							d.setMonth(floorInBase(d.getMonth(), tickSize));
						} else if (unit == "quarter") {
							d.setMonth(3 * floorInBase(d.getMonth() / 3,
								tickSize));
						} else if (unit == "year") {
							d.setFullYear(floorInBase(d.getFullYear(), tickSize));
						}

						// reset smaller components

						d.setMilliseconds(0);

						if (step >= timeUnitSize.minute) {
							d.setSeconds(0);
						}
						if (step >= timeUnitSize.hour) {
							d.setMinutes(0);
						}
						if (step >= timeUnitSize.day) {
							d.setHours(0);
						}
						if (step >= timeUnitSize.day * 4) {
							d.setDate(1);
						}
						if (step >= timeUnitSize.month * 2) {
							d.setMonth(floorInBase(d.getMonth(), 3));
						}
						if (step >= timeUnitSize.quarter * 2) {
							d.setMonth(floorInBase(d.getMonth(), 6));
						}
						if (step >= timeUnitSize.year) {
							d.setMonth(0);
						}

						var carry = 0;
						var v = Number.NaN;
						var prev;

						do {

							prev = v;
							v = d.getTime();
							ticks.push(v);

							if (unit == "month" || unit == "quarter") {
								if (tickSize < 1) {

									// a bit complicated - we'll divide the
									// month/quarter up but we need to take
									// care of fractions so we don't end up in
									// the middle of a day

									d.setDate(1);
									var start = d.getTime();
									d.setMonth(d.getMonth() +
										(unit == "quarter" ? 3 : 1));
									var end = d.getTime();
									d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
									carry = d.getHours();
									d.setHours(0);
								} else {
									d.setMonth(d.getMonth() +
										tickSize * (unit == "quarter" ? 3 : 1));
								}
							} else if (unit == "year") {
								d.setFullYear(d.getFullYear() + tickSize);
							} else {
								d.setTime(v + step);
							}
						} while (v < axis.max && v != prev);

						return ticks;
					};

					axis.tickFormatter = function (v, axis) {

						var d = dateGenerator(v, axis.options);

						// first check global format

						if (opts.timeformat != null) {
							return formatDate(d, opts.timeformat, opts.monthNames, opts.dayNames);
						}

						// possibly use quarters if quarters are mentioned in
						// any of these places

						var useQuarters = (axis.options.tickSize &&
								axis.options.tickSize[1] == "quarter") ||
							(axis.options.minTickSize &&
								axis.options.minTickSize[1] == "quarter");

						var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
						var span = axis.max - axis.min;
						var suffix = (opts.twelveHourClock) ? " %p" : "";
						var hourCode = (opts.twelveHourClock) ? "%I" : "%H";
						var fmt;

						if (t < timeUnitSize.minute) {
							fmt = hourCode + ":%M:%S" + suffix;
						} else if (t < timeUnitSize.day) {
							if (span < 2 * timeUnitSize.day) {
								fmt = hourCode + ":%M" + suffix;
							} else {
								fmt = "%b %d " + hourCode + ":%M" + suffix;
							}
						} else if (t < timeUnitSize.month) {
							fmt = "%b %d";
						} else if ((useQuarters && t < timeUnitSize.quarter) ||
							(!useQuarters && t < timeUnitSize.year)) {
							if (span < timeUnitSize.year) {
								fmt = "%b";
							} else {
								fmt = "%b %Y";
							}
						} else if (useQuarters && t < timeUnitSize.year) {
							if (span < timeUnitSize.year) {
								fmt = "Q%q";
							} else {
								fmt = "Q%q %Y";
							}
						} else {
							fmt = "%Y";
						}

						var rt = formatDate(d, fmt, opts.monthNames, opts.dayNames);

						return rt;
					};
				}
			});
		});
	}

	$.plot.plugins.push({
		init: init,
		options: options,
		name: 'time',
		version: '1.0'
	});

	// Time-axis support used to be in Flot core, which exposed the
	// formatDate function on the plot object.  Various plugins depend
	// on the function, so we need to re-expose it here.

	$.plot.formatDate = formatDate;
	$.plot.dateGenerator = dateGenerator;

})(jQuery);

/* Flot plugin for stacking data sets rather than overlyaing them.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes the data is sorted on x (or y if stacking horizontally).
For line charts, it is assumed that if a line has an undefined gap (from a
null point), then the line above it should have the same gap - insert zeros
instead of "null" if you want another behaviour. This also holds for the start
and end of the chart. Note that stacking a mix of positive and negative values
in most instances doesn't make sense (so it looks weird).

Two or more series are stacked when their "stack" attribute is set to the same
key (which can be any number or string or just "true"). To specify the default
stack, you can set the stack option like this:

	series: {
		stack: null/false, true, or a key (number/string)
	}

You can also specify it for a single series, like this:

	$.plot( $("#placeholder"), [{
		data: [ ... ],
		stack: true
	}])

The stacking order is determined by the order of the data series in the array
(later series end up on top of the previous).

Internally, the plugin modifies the datapoints in each series, adding an
offset to the y value. For line series, extra data points are inserted through
interpolation. If there's a second y value, it's also adjusted (e.g for bar
charts or filled areas).

*/

(function ($) {
    var options = {
        series: { stack: null } // or number/string
    };
    
    function init(plot) {
        function findMatchingSeries(s, allseries) {
            var res = null;
            for (var i = 0; i < allseries.length; ++i) {
                if (s == allseries[i])
                    break;
                
                if (allseries[i].stack == s.stack)
                    res = allseries[i];
            }
            
            return res;
        }
        
        function stackData(plot, s, datapoints) {
            if (s.stack == null || s.stack === false)
                return;

            var other = findMatchingSeries(s, plot.getData());
            if (!other)
                return;

            var ps = datapoints.pointsize,
                points = datapoints.points,
                otherps = other.datapoints.pointsize,
                otherpoints = other.datapoints.points,
                newpoints = [],
                px, py, intery, qx, qy, bottom,
                withlines = s.lines.show,
                horizontal = s.bars.horizontal,
                withbottom = ps > 2 && (horizontal ? datapoints.format[2].x : datapoints.format[2].y),
                withsteps = withlines && s.lines.steps,
                fromgap = true,
                keyOffset = horizontal ? 1 : 0,
                accumulateOffset = horizontal ? 0 : 1,
                i = 0, j = 0, l, m;

            while (true) {
                if (i >= points.length)
                    break;

                l = newpoints.length;

                if (points[i] == null) {
                    // copy gaps
                    for (m = 0; m < ps; ++m)
                        newpoints.push(points[i + m]);
                    i += ps;
                }
                else if (j >= otherpoints.length) {
                    // for lines, we can't use the rest of the points
                    if (!withlines) {
                        for (m = 0; m < ps; ++m)
                            newpoints.push(points[i + m]);
                    }
                    i += ps;
                }
                else if (otherpoints[j] == null) {
                    // oops, got a gap
                    for (m = 0; m < ps; ++m)
                        newpoints.push(null);
                    fromgap = true;
                    j += otherps;
                }
                else {
                    // cases where we actually got two points
                    px = points[i + keyOffset];
                    py = points[i + accumulateOffset];
                    qx = otherpoints[j + keyOffset];
                    qy = otherpoints[j + accumulateOffset];
                    bottom = 0;

                    if (px == qx) {
                        for (m = 0; m < ps; ++m)
                            newpoints.push(points[i + m]);

                        newpoints[l + accumulateOffset] += qy;
                        bottom = qy;
                        
                        i += ps;
                        j += otherps;
                    }
                    else if (px > qx) {
                        // we got past point below, might need to
                        // insert interpolated extra point
                        if (withlines && i > 0 && points[i - ps] != null) {
                            intery = py + (points[i - ps + accumulateOffset] - py) * (qx - px) / (points[i - ps + keyOffset] - px);
                            newpoints.push(qx);
                            newpoints.push(intery + qy);
                            for (m = 2; m < ps; ++m)
                                newpoints.push(points[i + m]);
                            bottom = qy; 
                        }

                        j += otherps;
                    }
                    else { // px < qx
                        if (fromgap && withlines) {
                            // if we come from a gap, we just skip this point
                            i += ps;
                            continue;
                        }
                            
                        for (m = 0; m < ps; ++m)
                            newpoints.push(points[i + m]);
                        
                        // we might be able to interpolate a point below,
                        // this can give us a better y
                        if (withlines && j > 0 && otherpoints[j - otherps] != null)
                            bottom = qy + (otherpoints[j - otherps + accumulateOffset] - qy) * (px - qx) / (otherpoints[j - otherps + keyOffset] - qx);

                        newpoints[l + accumulateOffset] += bottom;
                        
                        i += ps;
                    }

                    fromgap = false;
                    
                    if (l != newpoints.length && withbottom)
                        newpoints[l + 2] += bottom;
                }

                // maintain the line steps invariant
                if (withsteps && l != newpoints.length && l > 0
                    && newpoints[l] != null
                    && newpoints[l] != newpoints[l - ps]
                    && newpoints[l + 1] != newpoints[l - ps + 1]) {
                    for (m = 0; m < ps; ++m)
                        newpoints[l + ps + m] = newpoints[l + m];
                    newpoints[l + 1] = newpoints[l - ps + 1];
                }
            }

            datapoints.points = newpoints;
        }
        
        plot.hooks.processDatapoints.push(stackData);
    }
    
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'stack',
        version: '1.2'
    });
})(jQuery);

/* Flot plugin for automatically redrawing plots as the placeholder resizes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

It works by listening for changes on the placeholder div (through the jQuery
resize event plugin) - if the size changes, it will redraw the plot.

There are no options. If you need to disable the plugin for some plots, you
can just fix the size of their placeholders.

*/

/* Inline dependency:
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,t){"$:nomunge";var i=[],n=$.resize=$.extend($.resize,{}),a,r=false,s="setTimeout",u="resize",m=u+"-special-event",o="pendingDelay",l="activeDelay",f="throttleWindow";n[o]=200;n[l]=20;n[f]=true;$.event.special[u]={setup:function(){if(!n[f]&&this[s]){return false}var e=$(this);i.push(this);e.data(m,{w:e.width(),h:e.height()});if(i.length===1){a=t;h()}},teardown:function(){if(!n[f]&&this[s]){return false}var e=$(this);for(var t=i.length-1;t>=0;t--){if(i[t]==this){i.splice(t,1);break}}e.removeData(m);if(!i.length){if(r){cancelAnimationFrame(a)}else{clearTimeout(a)}a=null}},add:function(e){if(!n[f]&&this[s]){return false}var i;function a(e,n,a){var r=$(this),s=r.data(m)||{};s.w=n!==t?n:r.width();s.h=a!==t?a:r.height();i.apply(this,arguments)}if($.isFunction(e)){i=e;return a}else{i=e.handler;e.handler=a}}};function h(t){if(r===true){r=t||1}for(var s=i.length-1;s>=0;s--){var l=$(i[s]);if(l[0]==e||l.is(":visible")){var f=l.width(),c=l.height(),d=l.data(m);if(d&&(f!==d.w||c!==d.h)){l.trigger(u,[d.w=f,d.h=c]);r=t||true}}else{d=l.data(m);d.w=0;d.h=0}}if(a!==null){if(r&&(t==null||t-r<1e3)){a=e.requestAnimationFrame(h)}else{a=setTimeout(h,n[o]);r=false}}}if(!e.requestAnimationFrame){e.requestAnimationFrame=function(){return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t,i){return e.setTimeout(function(){t((new Date).getTime())},n[l])}}()}if(!e.cancelAnimationFrame){e.cancelAnimationFrame=function(){return e.webkitCancelRequestAnimationFrame||e.mozCancelRequestAnimationFrame||e.oCancelRequestAnimationFrame||e.msCancelRequestAnimationFrame||clearTimeout}()}})(jQuery,this);

(function ($) {
    var options = { }; // no options

    function init(plot) {
        function onResize() {
            var placeholder = plot.getPlaceholder();

            // somebody might have hidden us and we can't plot
            // when we don't have the dimensions
            if (placeholder.width() == 0 || placeholder.height() == 0)
                return;

            plot.resize();
            plot.setupGrid();
            plot.draw();
        }
        
        function bindEvents(plot, eventHolder) {
            plot.getPlaceholder().resize(onResize);
        }

        function shutdown(plot, eventHolder) {
            plot.getPlaceholder().unbind("resize", onResize);
        }
        
        plot.hooks.bindEvents.push(bindEvents);
        plot.hooks.shutdown.push(shutdown);
    }
    
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'resize',
        version: '1.0'
    });
})(jQuery);

/*
 * Flot plugin to order bars side by side.
 *
 * Released under the MIT license by Benjamin BUFFET, 20-Sep-2010.
 * Modifications made by Steven Hall <github.com/emmerich>, 01-May-2013.
 *
 * This plugin is an alpha version.
 *
 * To activate the plugin you must specify the parameter "order" for the specific serie :
 *
 *  $.plot($("#placeholder"), [{ data: [ ... ], bars :{ order = null or integer }])
 *
 * If 2 series have the same order param, they are ordered by the position in the array;
 *
 * The plugin adjust the point by adding a value depanding of the barwidth
 * Exemple for 3 series (barwidth : 0.1) :
 *
 *          first bar décalage : -0.15
 *          second bar décalage : -0.05
 *          third bar décalage : 0.05
 *
 */

// INFO: decalage/decallage is French for gap. It's used to denote the spacing applied to each
// bar.
(function($){
    function init(plot){
        var orderedBarSeries;
        var nbOfBarsToOrder;
        var borderWidth;
        var borderWidthInXabsWidth;
        var pixelInXWidthEquivalent = 1;
        var isHorizontal = false;

        // A mapping of order integers to decallage.
        var decallageByOrder = {};

        /*
         * This method add shift to x values
         */
        function reOrderBars(plot, serie, datapoints){
            var shiftedPoints = null;

            if(serieNeedToBeReordered(serie)){
                checkIfGraphIsHorizontal(serie);
                calculPixel2XWidthConvert(plot);
                retrieveBarSeries(plot);
                calculBorderAndBarWidth(serie);

                if(nbOfBarsToOrder >= 2){
                    var position = findPosition(serie);
                    var decallage = 0;

                    var centerBarShift = calculCenterBarShift();

                    // If we haven't already calculated the decallage for this order value, do it.
                    if(typeof decallageByOrder[serie.bars.order] === 'undefined') {
                        if (isBarAtLeftOfCenter(position)){
                            decallageByOrder[serie.bars.order] = -1*(sumWidth(orderedBarSeries,position-1,Math.floor(nbOfBarsToOrder / 2)-1)) - centerBarShift;
                        }else{
                            decallageByOrder[serie.bars.order] = sumWidth(orderedBarSeries,Math.ceil(nbOfBarsToOrder / 2),position-2) + centerBarShift + borderWidthInXabsWidth*2;
                        }
                    }

                    // Lookup the decallage based on the series' order value.
                    decallage = decallageByOrder[serie.bars.order];

                    shiftedPoints = shiftPoints(datapoints,serie,decallage);
                    datapoints.points = shiftedPoints;
                }
            }
            return shiftedPoints;
        }

        function serieNeedToBeReordered(serie){
            return serie.bars != null
                && serie.bars.show
                && serie.bars.order != null;
        }

        function calculPixel2XWidthConvert(plot){
            var gridDimSize = isHorizontal ? plot.getPlaceholder().innerHeight() : plot.getPlaceholder().innerWidth();
            var minMaxValues = isHorizontal ? getAxeMinMaxValues(plot.getData(),1) : getAxeMinMaxValues(plot.getData(),0);
            var AxeSize = minMaxValues[1] - minMaxValues[0];
            pixelInXWidthEquivalent = AxeSize / gridDimSize;
        }

        function getAxeMinMaxValues(series,AxeIdx){
            var minMaxValues = new Array();
            for(var i = 0; i < series.length; i++){
                minMaxValues[0] = (series[i].data[0]) ? series[i].data[0][AxeIdx]: null;
                minMaxValues[1] = (series[i].data[series[i].data.length - 1]) ? series[i].data[series[i].data.length - 1][AxeIdx]: null;
            }
            return minMaxValues;
        }

        function retrieveBarSeries(plot){
            orderedBarSeries = findOthersBarsToReOrders(plot.getData());
            nbOfBarsToOrder = orderedBarSeries.length;
        }

        function findOthersBarsToReOrders(series){
            var retSeries = new Array();
            var orderValuesSeen = [];

            for(var i = 0; i < series.length; i++){
                if(series[i].bars.order != null && series[i].bars.show &&
                    orderValuesSeen.indexOf(series[i].bars.order) < 0){

                    orderValuesSeen.push(series[i].bars.order);
                    retSeries.push(series[i]);
                }
            }
            return retSeries.sort(sortByOrder);
        }

        function sortByOrder(serie1,serie2){
            var x = serie1.bars.order;
            var y = serie2.bars.order;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        function  calculBorderAndBarWidth(serie){
            borderWidth = typeof serie.bars.lineWidth !== 'undefined' ? serie.bars.lineWidth  : 2;
            borderWidthInXabsWidth = borderWidth * pixelInXWidthEquivalent;
        }

        function checkIfGraphIsHorizontal(serie){
            if(serie.bars.horizontal){
                isHorizontal = true;
            }
        }

        function findPosition(serie){
            var pos = 0
            for (var i = 0; i < orderedBarSeries.length; ++i) {
                if (serie == orderedBarSeries[i]){
                    pos = i;
                    break;
                }
            }

            return pos+1;
        }

        function calculCenterBarShift(){
            var width = 0;

            if(nbOfBarsToOrder%2 != 0)
                width = (orderedBarSeries[Math.ceil(nbOfBarsToOrder / 2)].bars.barWidth)/2;

            return width;
        }

        function isBarAtLeftOfCenter(position){
            return position <= Math.ceil(nbOfBarsToOrder / 2);
        }

        function sumWidth(series,start,end){
            var totalWidth = 0;

            for(var i = start; i <= end; i++){
                totalWidth += series[i].bars.barWidth+borderWidthInXabsWidth*2;
            }

            return totalWidth;
        }

        function shiftPoints(datapoints,serie,dx){
            var ps = datapoints.pointsize;
            var points = datapoints.points;
            var j = 0;
            for(var i = isHorizontal ? 1 : 0;i < points.length; i += ps){
                points[i] += dx;
                //Adding the new x value in the serie to be abble to display the right tooltip value,
                //using the index 3 to not overide the third index.
                serie.data[j][3] = points[i];
                j++;
            }

            return points;
        }

        plot.hooks.processDatapoints.push(reOrderBars);

    }

    var options = {
        series : {
            bars: {order: null} // or number/string
        }
    };

    $.plot.plugins.push({
        init: init,
        options: options,
        name: "orderBars",
        version: "0.2"
    });

})(jQuery);
!function(a){"use strict";function b(a,b,c,d,e,f,g){var j,k,l,m,n,o,p,q,h=Math.pow,i=Math.sqrt;return j=i(h(c-a,2)+h(d-b,2)),k=i(h(e-c,2)+h(f-d,2)),l=g*j/(j+k),m=g-l,n=c+l*(a-e),o=d+l*(b-f),p=c-m*(a-e),q=d-m*(b-f),[n,o,p,q]}function d(b,c,d,e,f){var g=a.color.parse(f);g.a="number"==typeof e?e:.3,g.normalize(),g=g.toString(),c.beginPath(),c.moveTo(b[0][0],b[0][1]);for(var h=b.length,i=0;h>i;i++)c[b[i][3]].apply(c,b[i][2]);c.stroke(),c.lineWidth=0,c.lineTo(b[h-1][0],d),c.lineTo(b[0][0],d),c.closePath(),e!==!1&&(c.fillStyle=g,c.fill())}function e(a,b,d,e){(void 0===b||"bezier"!==b&&"quadratic"!==b)&&(b="quadratic"),b+="CurveTo",0==c.length?c.push([d[0],d[1],e.concat(d.slice(2)),b]):"quadraticCurveTo"==b&&2==d.length?(e=e.slice(0,2).concat(d),c.push([d[0],d[1],e,b])):c.push([d[2],d[3],e.concat(d.slice(2)),b])}function f(f,g,h){if(h.splines.show===!0){var k,l,m,i=[],j=h.splines.tension||.5,n=h.datapoints.points,o=h.datapoints.pointsize,p=f.getPlotOffset(),q=n.length,r=[];if(c=[],4>q/o)return a.extend(h.lines,h.splines),void 0;for(k=0;q>k;k+=o)l=n[k],m=n[k+1],null==l||l<h.xaxis.min||l>h.xaxis.max||m<h.yaxis.min||m>h.yaxis.max||r.push(h.xaxis.p2c(l)+p.left,h.yaxis.p2c(m)+p.top);for(q=r.length,k=0;q-2>k;k+=2)i=i.concat(b.apply(this,r.slice(k,k+6).concat([j])));for(g.save(),g.strokeStyle=h.color,g.lineWidth=h.splines.lineWidth,e(g,"quadratic",r.slice(0,4),i.slice(0,2)),k=2;q-3>k;k+=2)e(g,"bezier",r.slice(k,k+4),i.slice(2*k-2,2*k+2));e(g,"quadratic",r.slice(q-2,q),[i[2*q-10],i[2*q-9],r[q-4],r[q-3]]),d(c,g,f.height()+10,h.splines.fill,h.color),g.restore()}}var c=[];a.plot.plugins.push({init:function(a){a.hooks.drawSeries.push(f)},options:{series:{splines:{show:!1,lineWidth:2,tension:.5,fill:!1}}},name:"spline",version:"0.8.2"})}(jQuery);
/* The MIT License

 Copyright (c) 2011 by Michael Zinsmaier and nergal.dev
 Copyright (c) 2012 by Thomas Ritou

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/*
____________________________________________________

 what it is:
 ____________________________________________________

 curvedLines is a plugin for flot, that tries to display lines in a smoother way.
 This is achieved through adding of more data points. The plugin is a data processor and can thus be used
 in combination with standard line / point rendering options.

 => 1) with large data sets you may get trouble
 => 2) if you want to display the points too, you have to plot them as 2nd data series over the lines
 => 3) consecutive x data points are not allowed to have the same value

 Feel free to further improve the code

 ____________________________________________________

 how to use it:
 ____________________________________________________

 var d1 = [[5,5],[7,3],[9,12]];

 var options = { series: { curvedLines: {  active: true }}};

 $.plot($("#placeholder"), [{data: d1, lines: { show: true}, curvedLines: {apply: true}}], options);

 _____________________________________________________

 options:
 _____________________________________________________

 active:           bool true => plugin can be used
 apply:            bool true => series will be drawn as curved line
 monotonicFit:	   bool true => uses monotone cubic interpolation (preserve monotonicity)
 tension:          int          defines the tension parameter of the hermite spline interpolation (no effect if monotonicFit is set)
 nrSplinePoints:   int 			defines the number of sample points (of the spline) in between two consecutive points

 deprecated options from flot prior to 1.0.0:
 ------------------------------------------------
 legacyOverride	   bool true => use old default
    OR
 legacyOverride    optionArray
 {
 	fit: 	             bool true => forces the max,mins of the curve to be on the datapoints
 	curvePointFactor	 int  		  defines how many "virtual" points are used per "real" data point to
 									  emulate the curvedLines (points total = real points * curvePointFactor)
 	fitPointDist: 	     int  		  defines the x axis distance of the additional two points that are used
 }						   		   	  to enforce the min max condition.
 */

/*
 *  v0.1   initial commit
 *  v0.15  negative values should work now (outcommented a negative -> 0 hook hope it does no harm)
 *  v0.2   added fill option (thanks to monemihir) and multi axis support (thanks to soewono effendi)
 *  v0.3   improved saddle handling and added basic handling of Dates
 *  v0.4   rewritten fill option (thomas ritou) mostly from original flot code (now fill between points rather than to graph bottom), corrected fill Opacity bug
 *  v0.5   rewritten instead of implementing a own draw function CurvedLines is now based on the processDatapoints flot hook (credits go to thomas ritou).
 * 		   This change breakes existing code however CurvedLines are now just many tiny straight lines to flot and therefore all flot lines options (like gradient fill,
 * 	       shadow) are now supported out of the box
 *  v0.6   flot 0.8 compatibility and some bug fixes
 *  v0.6.x changed versioning schema
 *
 *  v1.0.0 API Break marked existing implementation/options as deprecated
 *  v1.1.0 added the new curved line calculations based on hermite splines
 *  v1.1.1 added a rough parameter check to make sure the new options are used
 */

(function($) {

	var options = {
		series : {
			curvedLines : {
				active : false,
				apply : false,
				monotonicFit : false,
				tension : 0.5,
				nrSplinePoints : 20,
				legacyOverride : undefined
			}
		}
	};

	function init(plot) {

		plot.hooks.processOptions.push(processOptions);

		//if the plugin is active register processDatapoints method
		function processOptions(plot, options) {
			if (options.series.curvedLines.active) {
				plot.hooks.processDatapoints.unshift(processDatapoints);
			}
		}

		//only if the plugin is active
		function processDatapoints(plot, series, datapoints) {
			var nrPoints = datapoints.points.length / datapoints.pointsize;
			var EPSILON = 0.005;

			//detects missplaced legacy parameters (prior v1.x.x) in the options object
			//this can happen if somebody upgrades to v1.x.x without adjusting the parameters or uses old examples
            var invalidLegacyOptions = hasInvalidParameters(series.curvedLines);

			if (!invalidLegacyOptions && series.curvedLines.apply == true && series.originSeries === undefined && nrPoints > (1 + EPSILON)) {
				if (series.lines.fill) {

					var pointsTop = calculateCurvePoints(datapoints, series.curvedLines, 1);
					var pointsBottom = calculateCurvePoints(datapoints, series.curvedLines, 2);
					//flot makes sure for us that we've got a second y point if fill is true !

					//Merge top and bottom curve
					datapoints.pointsize = 3;
					datapoints.points = [];
					var j = 0;
					var k = 0;
					var i = 0;
					var ps = 2;
					while (i < pointsTop.length || j < pointsBottom.length) {
						if (pointsTop[i] == pointsBottom[j]) {
							datapoints.points[k] = pointsTop[i];
							datapoints.points[k + 1] = pointsTop[i + 1];
							datapoints.points[k + 2] = pointsBottom[j + 1];
							j += ps;
							i += ps;

						} else if (pointsTop[i] < pointsBottom[j]) {
							datapoints.points[k] = pointsTop[i];
							datapoints.points[k + 1] = pointsTop[i + 1];
							datapoints.points[k + 2] = k > 0 ? datapoints.points[k - 1] : null;
							i += ps;
						} else {
							datapoints.points[k] = pointsBottom[j];
							datapoints.points[k + 1] = k > 1 ? datapoints.points[k - 2] : null;
							datapoints.points[k + 2] = pointsBottom[j + 1];
							j += ps;
						}
						k += 3;
					}
				} else if (series.lines.lineWidth > 0) {
					datapoints.points = calculateCurvePoints(datapoints, series.curvedLines, 1);
					datapoints.pointsize = 2;
				}
			}
		}

		function calculateCurvePoints(datapoints, curvedLinesOptions, yPos) {
			if ( typeof curvedLinesOptions.legacyOverride != 'undefined' && curvedLinesOptions.legacyOverride != false) {
				var defaultOptions = {
					fit : false,
					curvePointFactor : 20,
					fitPointDist : undefined
				};
				var legacyOptions = jQuery.extend(defaultOptions, curvedLinesOptions.legacyOverride);
				return calculateLegacyCurvePoints(datapoints, legacyOptions, yPos);
			}

			return calculateSplineCurvePoints(datapoints, curvedLinesOptions, yPos);
		}

		function calculateSplineCurvePoints(datapoints, curvedLinesOptions, yPos) {
			var points = datapoints.points;
			var ps = datapoints.pointsize;
			
			//create interpolant fuction
			var splines = createHermiteSplines(datapoints, curvedLinesOptions, yPos);
			var result = [];

			//sample the function
			// (the result is intependent from the input data =>
			//	it is ok to alter the input after this method)
			var j = 0;
			for (var i = 0; i < points.length - ps; i += ps) {
				var curX = i;
				var curY = i + yPos;	
				
				var xStart = points[curX];
				var xEnd = points[curX + ps];
				var xStep = (xEnd - xStart) / Number(curvedLinesOptions.nrSplinePoints);

				//add point
				result.push(points[curX]);
				result.push(points[curY]);

				//add curve point
				for (var x = (xStart += xStep); x < xEnd; x += xStep) {
					result.push(x);
					result.push(splines[j](x));
				}
				
				j++;
			}

			//add last point
			result.push(points[points.length - ps]);
			result.push(points[points.length - ps + yPos]);

			return result;
		}



		// Creates an array of splines, one for each segment of the original curve. Algorithm based on the wikipedia articles: 
		//
		// http://de.wikipedia.org/w/index.php?title=Kubisch_Hermitescher_Spline&oldid=130168003 and 
		// http://en.wikipedia.org/w/index.php?title=Monotone_cubic_interpolation&oldid=622341725 and the description of Fritsch-Carlson from
		// http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation
		// for a detailed description see https://github.com/MichaelZinsmaier/CurvedLines/docu
		function createHermiteSplines(datapoints, curvedLinesOptions, yPos) {
			var points = datapoints.points;
			var ps = datapoints.pointsize;
			
			// preparation get length (x_{k+1} - x_k) and slope s=(p_{k+1} - p_k) / (x_{k+1} - x_k) of the segments
			var segmentLengths = [];
			var segmentSlopes = [];

			for (var i = 0; i < points.length - ps; i += ps) {
				var curX = i;
				var curY = i + yPos;			
				var dx = points[curX + ps] - points[curX];
				var dy = points[curY + ps] - points[curY];
							
				segmentLengths.push(dx);
				segmentSlopes.push(dy / dx);
			}

			//get the values for the desired gradients  m_k for all points k
			//depending on the used method the formula is different
			var gradients = [segmentSlopes[0]];	
			if (curvedLinesOptions.monotonicFit) {
				// Fritsch Carlson
				for (var i = 1; i < segmentLengths.length; i++) {
					var slope = segmentSlopes[i];
					var prev_slope = segmentSlopes[i - 1];
					if (slope * prev_slope <= 0) { // sign(prev_slope) != sign(slpe)
						gradients.push(0);
					} else {
						var length = segmentLengths[i];
						var prev_length = segmentLengths[i - 1];
						var common = length + prev_length;
						//m = 3 (prev_length + length) / ((2 length + prev_length) / prev_slope + (length + 2 prev_length) / slope)
						gradients.push(3 * common / ((common + length) / prev_slope + (common + prev_length) / slope));
					}
				}
			} else {
				// Cardinal spline with t € [0,1]
				// Catmull-Rom for t = 0
				for (var i = ps; i < points.length - ps; i += ps) {
					var curX = i;
					var curY = i + yPos;	
					gradients.push(Number(curvedLinesOptions.tension) * (points[curY + ps] - points[curY - ps]) / (points[curX + ps] - points[curX - ps]));
				}
			}
			gradients.push(segmentSlopes[segmentSlopes.length - 1]);

			//get the two major coefficients (c'_{oef1} and c'_{oef2}) for each segment spline
			var coefs1 = [];
			var coefs2 = [];
			for (i = 0; i < segmentLengths.length; i++) {
				var m_k = gradients[i];
				var m_k_plus = gradients[i + 1];
				var slope = segmentSlopes[i];
				var invLength = 1 / segmentLengths[i];
				var common = m_k + m_k_plus - slope - slope;
				
				coefs1.push(common * invLength * invLength);
				coefs2.push((slope - common - m_k) * invLength);
			}

			//create functions with from the coefficients and capture the parameters
			var ret = [];
			for (var i = 0; i < segmentLengths.length; i ++) {
				var spline = function (x_k, coef1, coef2, coef3, coef4) {
					// spline for a segment
					return function (x) {									
						var diff = x - x_k;
						var diffSq = diff * diff;
						return coef1 * diff * diffSq + coef2 * diffSq + coef3 * diff + coef4;
					};
				};			
		
				ret.push(spline(points[i * ps], coefs1[i], coefs2[i], gradients[i], points[i * ps + yPos]));
			}
			
			return ret;
		};

		//no real idea whats going on here code mainly from https://code.google.com/p/flot/issues/detail?id=226
		//if fit option is selected additional datapoints get inserted before the curve calculations in nergal.dev s code.
		function calculateLegacyCurvePoints(datapoints, curvedLinesOptions, yPos) {

			var points = datapoints.points;
			var ps = datapoints.pointsize;
			var num = Number(curvedLinesOptions.curvePointFactor) * (points.length / ps);

			var xdata = new Array;
			var ydata = new Array;

			var curX = -1;
			var curY = -1;
			var j = 0;

			if (curvedLinesOptions.fit) {
				//insert a point before and after the "real" data point to force the line
				//to have a max,min at the data point.

				var fpDist;
				if ( typeof curvedLinesOptions.fitPointDist == 'undefined') {
					//estimate it
					var minX = points[0];
					var maxX = points[points.length - ps];
					fpDist = (maxX - minX) / (500 * 100);
					//x range / (estimated pixel length of placeholder * factor)
				} else {
					//use user defined value
					fpDist = Number(curvedLinesOptions.fitPointDist);
				}

				for (var i = 0; i < points.length; i += ps) {

					var frontX;
					var backX;
					curX = i;
					curY = i + yPos;

					//add point X s
					frontX = points[curX] - fpDist;
					backX = points[curX] + fpDist;

					var factor = 2;
					while (frontX == points[curX] || backX == points[curX]) {
						//inside the ulp
						frontX = points[curX] - (fpDist * factor);
						backX = points[curX] + (fpDist * factor);
						factor++;
					}

					//add curve points
					xdata[j] = frontX;
					ydata[j] = points[curY];
					j++;

					xdata[j] = points[curX];
					ydata[j] = points[curY];
					j++;

					xdata[j] = backX;
					ydata[j] = points[curY];
					j++;
				}
			} else {
				//just use the datapoints
				for (var i = 0; i < points.length; i += ps) {
					curX = i;
					curY = i + yPos;

					xdata[j] = points[curX];
					ydata[j] = points[curY];
					j++;
				}
			}

			var n = xdata.length;

			var y2 = new Array();
			var delta = new Array();
			y2[0] = 0;
			y2[n - 1] = 0;
			delta[0] = 0;

			for (var i = 1; i < n - 1; ++i) {
				var d = (xdata[i + 1] - xdata[i - 1]);
				if (d == 0) {
					//point before current point and after current point need some space in between
					return [];
				}

				var s = (xdata[i] - xdata[i - 1]) / d;
				var p = s * y2[i - 1] + 2;
				y2[i] = (s - 1) / p;
				delta[i] = (ydata[i + 1] - ydata[i]) / (xdata[i + 1] - xdata[i]) - (ydata[i] - ydata[i - 1]) / (xdata[i] - xdata[i - 1]);
				delta[i] = (6 * delta[i] / (xdata[i + 1] - xdata[i - 1]) - s * delta[i - 1]) / p;
			}

			for (var j = n - 2; j >= 0; --j) {
				y2[j] = y2[j] * y2[j + 1] + delta[j];
			}

			//   xmax  - xmin  / #points
			var step = (xdata[n - 1] - xdata[0]) / (num - 1);

			var xnew = new Array;
			var ynew = new Array;
			var result = new Array;

			xnew[0] = xdata[0];
			ynew[0] = ydata[0];

			result.push(xnew[0]);
			result.push(ynew[0]);

			for ( j = 1; j < num; ++j) {
				//new x point (sampling point for the created curve)
				xnew[j] = xnew[0] + j * step;

				var max = n - 1;
				var min = 0;

				while (max - min > 1) {
					var k = Math.round((max + min) / 2);
					if (xdata[k] > xnew[j]) {
						max = k;
					} else {
						min = k;
					}
				}

				//found point one to the left and one to the right of generated new point
				var h = (xdata[max] - xdata[min]);

				if (h == 0) {
					//similar to above two points from original x data need some space between them
					return [];
				}

				var a = (xdata[max] - xnew[j]) / h;
				var b = (xnew[j] - xdata[min]) / h;

				ynew[j] = a * ydata[min] + b * ydata[max] + ((a * a * a - a) * y2[min] + (b * b * b - b) * y2[max]) * (h * h) / 6;

				result.push(xnew[j]);
				result.push(ynew[j]);
			}

			return result;
		}
		
		function hasInvalidParameters(curvedLinesOptions) {
			if (typeof curvedLinesOptions.fit != 'undefined' ||
			    typeof curvedLinesOptions.curvePointFactor != 'undefined' ||
			    typeof curvedLinesOptions.fitPointDist != 'undefined') {
			    	throw new Error("CurvedLines detected illegal parameters. The CurvedLines API changed with version 1.0.0 please check the options object.");
			    	return true;
			    }
			return false;
		}
		

	}//end init


	$.plot.plugins.push({
		init : init,
		options : options,
		name : 'curvedLines',
		version : '1.1.1'
	});

})(jQuery);


/** 
 * @overview datejs
 * @version 1.0.0-rc3
 * @author Gregory Wild-Smith <gregory@wild-smith.com>
 * @copyright 2014 Gregory Wild-Smith
 * @license MIT
 * @homepage https://github.com/abritinthebay/datejs
 */(function () {
	var $D = Date;
	var lang = Date.CultureStrings ? Date.CultureStrings.lang : null;
	var loggedKeys = {}; // for debug purposes.
	var getText = {
		getFromKey: function (key, countryCode) {
			var output;
			if (Date.CultureStrings && Date.CultureStrings[countryCode] && Date.CultureStrings[countryCode][key]) {
				output = Date.CultureStrings[countryCode][key];
			} else {
				output = getText.buildFromDefault(key);
			}
			if (key.charAt(0) === "/") { // Assume it's a regex
				output = getText.buildFromRegex(key, countryCode);
			}
			return output;
		},
		getFromObjectValues: function (obj, countryCode) {
			var key, output = {};
			for(key in obj) {
				if (obj.hasOwnProperty(key)) {
					output[key] = getText.getFromKey(obj[key], countryCode);
				}
			}
			return output;
		},
		getFromObjectKeys: function (obj, countryCode) {
			var key, output = {};
			for(key in obj) {
				if (obj.hasOwnProperty(key)) {
					output[getText.getFromKey(key, countryCode)] = obj[key];
				}
			}
			return output;
		},
		getFromArray: function (arr, countryCode) {
			var output = [];
			for (var i=0; i < arr.length; i++){
				if (i in arr) {
					output[i] = getText.getFromKey(arr[i], countryCode);
				}
			}
			return output;
		},
		buildFromDefault: function (key) {
			var output, length, split, last;
			switch(key) {
				case "name":
					output = "en-US";
					break;
				case "englishName":
					output = "English (United States)";
					break;
				case "nativeName":
					output = "English (United States)";
					break;
				case "twoDigitYearMax":
					output = 2049;
					break;
				case "firstDayOfWeek":
					output = 0;
					break;
				default:
					output = key;
					split = key.split("_");
					length = split.length;
					if (length > 1 && key.charAt(0) !== "/") {
						// if the key isn't a regex and it has a split.
						last = split[(length - 1)].toLowerCase();
						if (last === "initial" || last === "abbr") {
							output = split[0];
						}
					}
					break;
			}
			return output;
		},
		buildFromRegex: function (key, countryCode) {
			var output;
			if (Date.CultureStrings && Date.CultureStrings[countryCode] && Date.CultureStrings[countryCode][key]) {
				output = new RegExp(Date.CultureStrings[countryCode][key], "i");
			} else {
				output = new RegExp(key.replace(new RegExp("/", "g"),""), "i");
			}
			return output;
		}
	};

	var shallowMerge = function (obj1, obj2) {
		for (var attrname in obj2) {
			if (obj2.hasOwnProperty(attrname)) {
				obj1[attrname] = obj2[attrname];
			}
		}
	};

	var __ = function (key, language) {
		var countryCode = (language) ? language : lang;
		loggedKeys[key] = key;
		if (typeof key === "object") {
			if (key instanceof Array) {
				return getText.getFromArray(key, countryCode);
			} else {
				return getText.getFromObjectKeys(key, countryCode);
			}
		} else {
			return getText.getFromKey(key, countryCode);
		}
	};
	
	var loadI18nScript = function (code) {
		// paatterned after jQuery's getScript.
		var url = Date.Config.i18n + code + ".js";
		var head = document.getElementsByTagName("head")[0] || document.documentElement;
		var script = document.createElement("script");
		script.src = url;

		var completed = false;
		var events = {
			done: function (){} // placeholder function
		};
		// Attach handlers for all browsers
		script.onload = script.onreadystatechange = function() {
			if ( !completed && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") ) {
				events.done();
				head.removeChild(script);
			}
		};

		setTimeout(function() {
			head.insertBefore(script, head.firstChild);
		}, 0); // allows return to execute first
		
		return {
			done: function (cb) {
				events.done = function() {
					if (cb) {
						setTimeout(cb,0);
					}
				};
			}
		};
	};

	var buildInfo = {
		buildFromMethodHash: function (obj) {
			var key;
			for(key in obj) {
				if (obj.hasOwnProperty(key)) {
					obj[key] = buildInfo[obj[key]]();
				}
			}
			return obj;
		},
		timeZoneDST: function () {
			var DST = {
				"CHADT": "+1345",
				"NZDT": "+1300",
				"AEDT": "+1100",
				"ACDT": "+1030",
				"AZST": "+0500",
				"IRDT": "+0430",
				"EEST": "+0300",
				"CEST": "+0200",
				"BST": "+0100",
				"PMDT": "-0200",
				"ADT": "-0300",
				"NDT": "-0230",
				"EDT": "-0400",
				"CDT": "-0500",
				"MDT": "-0600",
				"PDT": "-0700",
				"AKDT": "-0800",
				"HADT": "-0900"
			};
			return __(DST);
		},
		timeZoneStandard: function () {
			var standard = {
				"LINT": "+1400",
				"TOT": "+1300",
				"CHAST": "+1245",
				"NZST": "+1200",
				"NFT": "+1130",
				"SBT": "+1100",
				"AEST": "+1000",
				"ACST": "+0930",
				"JST": "+0900",
				"CWST": "+0845",
				"CT": "+0800",
				"ICT": "+0700",
				"MMT": "+0630",
				"BST": "+0600",
				"NPT": "+0545",
				"IST": "+0530",
				"PKT": "+0500",
				"AFT": "+0430",
				"MSK": "+0400",
				"IRST": "+0330",
				"FET": "+0300",
				"EET": "+0200",
				"CET": "+0100",
				"GMT": "+0000",
				"UTC": "+0000",
				"CVT": "-0100",
				"GST": "-0200",
				"BRT": "-0300",
				"NST": "-0330",
				"AST": "-0400",
				"EST": "-0500",
				"CST": "-0600",
				"MST": "-0700",
				"PST": "-0800",
				"AKST": "-0900",
				"MIT": "-0930",
				"HST": "-1000",
				"SST": "-1100",
				"BIT": "-1200"
			};
			return __(standard);
		},
		timeZones: function (data) {
			var zone;
			data.timezones = [];
			for (zone in data.abbreviatedTimeZoneStandard) {
				if (data.abbreviatedTimeZoneStandard.hasOwnProperty(zone)) {
					data.timezones.push({ name: zone, offset: data.abbreviatedTimeZoneStandard[zone]});
				}
			}
			for (zone in data.abbreviatedTimeZoneDST) {
				if (data.abbreviatedTimeZoneDST.hasOwnProperty(zone)) {
					data.timezones.push({ name: zone, offset: data.abbreviatedTimeZoneDST[zone], dst: true});
				}
			}
			return data.timezones;
		},
		days: function () {
			return __(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
		},
		dayAbbr: function () {
			return __(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
		},
		dayShortNames: function () {
			return __(["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]);
		},
		dayFirstLetters: function () {
			return __(["S_Sun_Initial", "M_Mon_Initial", "T_Tues_Initial", "W_Wed_Initial", "T_Thu_Initial", "F_Fri_Initial", "S_Sat_Initial"]);
		},
		months: function () {
			return __(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
		},
		monthAbbr: function () {
			return __(["Jan_Abbr", "Feb_Abbr", "Mar_Abbr", "Apr_Abbr", "May_Abbr", "Jun_Abbr", "Jul_Abbr", "Aug_Abbr", "Sep_Abbr", "Oct_Abbr", "Nov_Abbr", "Dec_Abbr"]);
		},
		formatPatterns: function () {
			return getText.getFromObjectValues({
				shortDate: "M/d/yyyy",
				longDate: "dddd, MMMM dd, yyyy",
				shortTime: "h:mm tt",
				longTime: "h:mm:ss tt",
				fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
				sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
				universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
				rfc1123: "ddd, dd MMM yyyy HH:mm:ss",
				monthDay: "MMMM dd",
				yearMonth: "MMMM, yyyy"
			}, Date.i18n.currentLanguage());
		},
		regex: function () {
			return getText.getFromObjectValues({
				inTheMorning: "/( in the )(morn(ing)?)\\b/",
				thisMorning: "/(this )(morn(ing)?)\\b/",
				amThisMorning: "/(\b\\d(am)? )(this )(morn(ing)?)/",
				inTheEvening: "/( in the )(even(ing)?)\\b/",
				thisEvening: "/(this )(even(ing)?)\\b/",
				pmThisEvening: "/(\b\\d(pm)? )(this )(even(ing)?)/",
				jan: "/jan(uary)?/",
				feb: "/feb(ruary)?/",
				mar: "/mar(ch)?/",
				apr: "/apr(il)?/",
				may: "/may/",
				jun: "/jun(e)?/",
				jul: "/jul(y)?/",
				aug: "/aug(ust)?/",
				sep: "/sep(t(ember)?)?/",
				oct: "/oct(ober)?/",
				nov: "/nov(ember)?/",
				dec: "/dec(ember)?/",
				sun: "/^su(n(day)?)?/",
				mon: "/^mo(n(day)?)?/",
				tue: "/^tu(e(s(day)?)?)?/",
				wed: "/^we(d(nesday)?)?/",
				thu: "/^th(u(r(s(day)?)?)?)?/",
				fri: "/fr(i(day)?)?/",
				sat: "/^sa(t(urday)?)?/",
				future: "/^next/",
				past: "/^last|past|prev(ious)?/",
				add: "/^(\\+|aft(er)?|from|hence)/",
				subtract: "/^(\\-|bef(ore)?|ago)/",
				yesterday: "/^yes(terday)?/",
				today: "/^t(od(ay)?)?/",
				tomorrow: "/^tom(orrow)?/",
				now: "/^n(ow)?/",
				millisecond: "/^ms|milli(second)?s?/",
				second: "/^sec(ond)?s?/",
				minute: "/^mn|min(ute)?s?/",
				hour: "/^h(our)?s?/",
				week: "/^w(eek)?s?/",
				month: "/^m(onth)?s?/",
				day: "/^d(ay)?s?/",
				year: "/^y(ear)?s?/",
				shortMeridian: "/^(a|p)/",
				longMeridian: "/^(a\\.?m?\\.?|p\\.?m?\\.?)/",
				timezone: "/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\\s*(\\+|\\-)\\s*\\d\\d\\d\\d?)|gmt|utc)/",
				ordinalSuffix: "/^\\s*(st|nd|rd|th)/",
				timeContext: "/^\\s*(\\:|a(?!u|p)|p)/"
			}, Date.i18n.currentLanguage());
		}
	};

	var CultureInfo = function () {
		var info = getText.getFromObjectValues({
			name: "name",
			englishName: "englishName",
			nativeName: "nativeName",
			amDesignator: "AM",
			pmDesignator: "PM",
			firstDayOfWeek: "firstDayOfWeek",
			twoDigitYearMax: "twoDigitYearMax",
			dateElementOrder: "mdy"
		}, Date.i18n.currentLanguage());

		var constructedInfo = buildInfo.buildFromMethodHash({
			dayNames: "days",
			abbreviatedDayNames: "dayAbbr",
			shortestDayNames: "dayShortNames",
			firstLetterDayNames: "dayFirstLetters",
			monthNames: "months",
			abbreviatedMonthNames: "monthAbbr",
			formatPatterns: "formatPatterns",
			regexPatterns: "regex",
			abbreviatedTimeZoneDST: "timeZoneDST",
			abbreviatedTimeZoneStandard: "timeZoneStandard"
		});

		shallowMerge(info, constructedInfo);
		buildInfo.timeZones(info);
		return info;
	};

	$D.i18n = {
		__: function (key, lang) {
			return __(key, lang);
		},
		currentLanguage: function () {
			return lang || "en-US";
		},
		setLanguage: function (code, force, cb) {
			var async = false;
			if (force || code === "en-US" || (!!Date.CultureStrings && !!Date.CultureStrings[code])) {
				lang = code;
				Date.CultureStrings = Date.CultureStrings || {};
				Date.CultureStrings.lang = code;
				Date.CultureInfo = new CultureInfo();
			} else {
				if (!(!!Date.CultureStrings && !!Date.CultureStrings[code])) {
					if (typeof exports !== "undefined" && this.exports !== exports) {
						// we're in a Node enviroment, load it using require
						try {
							require("../i18n/" + code + ".js");
							lang = code;
							Date.CultureStrings.lang = code;
							Date.CultureInfo = new CultureInfo();
						} catch (e) {
							// var str = "The language for '" + code + "' could not be loaded by Node. It likely does not exist.";
							throw new Error("The DateJS IETF language tag '" + code + "' could not be loaded by Node. It likely does not exist.");
						}
					} else if (Date.Config && Date.Config.i18n) {
						// we know the location of the files, so lets load them					
						async = true;
						loadI18nScript(code).done(function(){
							lang = code;
							Date.CultureStrings = Date.CultureStrings || {};
							Date.CultureStrings.lang = code;
							Date.CultureInfo = new CultureInfo();
							$D.Parsing.Normalizer.buildReplaceData(); // because this is async
							if ($D.Grammar) {
								$D.Grammar.buildGrammarFormats(); // so we can parse those strings...
							}
							if (cb) {
								setTimeout(cb,0);
							}
						});
					} else {
						Date.console.error("The DateJS IETF language tag '" + code + "' is not available and has not been loaded.");
						return false;
					}
				}
			}
			$D.Parsing.Normalizer.buildReplaceData(); // rebuild normalizer strings
			if ($D.Grammar) {
				$D.Grammar.buildGrammarFormats(); // so we can parse those strings...
			}
			if (!async && cb) {
				setTimeout(cb,0);
			}
		},
		getLoggedKeys: function () {
			return loggedKeys;
		},
		updateCultureInfo: function () {
			Date.CultureInfo = new CultureInfo();
		}
	};
	$D.i18n.updateCultureInfo(); // run automatically
}());
(function () {
	var $D = Date,
		$P = $D.prototype,
		p = function (s, l) {
			if (!l) {
				l = 2;
			}
			return ("000" + s).slice(l * -1);
		};
	
	if (typeof window !== "undefined" && typeof window.console !== "undefined" && typeof window.console.log !== "undefined") {
		$D.console = console; // used only to raise non-critical errors if available
	} else {
		// set mock so we don't give errors.
		$D.console = {
			log: function(){},
			error: function(){}
		};
	}
	$D.Config = $D.Config || {};

	$D.initOverloads = function() {
		/** 
		 * Overload of Date.now. Allows an alternate call for Date.now where it returns the 
		 * current Date as an object rather than just milliseconds since the Unix Epoch.
		 *
		 * Also provides an implementation of now() for browsers (IE<9) that don't have it.
		 * 
		 * Backwards compatible so with work with either:
		 *  Date.now() [returns ms]
		 * or
		 *  Date.now(true) [returns Date]
		 */
		if (!$D.now) {
			$D._now = function now() {
				return new Date().getTime();
			};
		} else if (!$D._now) {
			$D._now = $D.now;
		}

		$D.now = function (returnObj) {
			if (returnObj) {
				return $D.present();
			} else {
				return $D._now();
			}
		};

		if ( !$P.toISOString ) {
			$P.toISOString = function() {
				return this.getUTCFullYear() +
				"-" + p(this.getUTCMonth() + 1) +
				"-" + p(this.getUTCDate()) +
				"T" + p(this.getUTCHours()) +
				":" + p(this.getUTCMinutes()) +
				":" + p(this.getUTCSeconds()) +
				"." + String( (this.getUTCMilliseconds()/1000).toFixed(3)).slice(2, 5) +
				"Z";
			};
		}
		
		// private
		if ( $P._toString === undefined ){
			$P._toString = $P.toString;
		}

	};
	$D.initOverloads();


	/** 
	 * Gets a date that is set to the current date. The time is set to the start of the day (00:00 or 12:00 AM).
	 * @return {Date}    The current date.
	 */
	$D.today = function () {
		return new Date().clearTime();
	};

	/** 
	 * Gets a date that is set to the current date and time (same as new Date, but chainable)
	 * @return {Date}    The current date.
	 */
	$D.present = function () {
		return new Date();
	};

	/**
	 * Compares the first date to the second date and returns an number indication of their relative values.  
	 * @param {Date}     First Date object to compare [Required].
	 * @param {Date}     Second Date object to compare to [Required].
	 * @return {Number}  -1 = date1 is lessthan date2. 0 = values are equal. 1 = date1 is greaterthan date2.
	 */
	$D.compare = function (date1, date2) {
		if (isNaN(date1) || isNaN(date2)) {
			throw new Error(date1 + " - " + date2);
		} else if (date1 instanceof Date && date2 instanceof Date) {
			return (date1 < date2) ? -1 : (date1 > date2) ? 1 : 0;
		} else {
			throw new TypeError(date1 + " - " + date2);
		}
	};
	
	/**
	 * Compares the first Date object to the second Date object and returns true if they are equal.  
	 * @param {Date}     First Date object to compare [Required]
	 * @param {Date}     Second Date object to compare to [Required]
	 * @return {Boolean} true if dates are equal. false if they are not equal.
	 */
	$D.equals = function (date1, date2) {
		return (date1.compareTo(date2) === 0);
	};

	/**
	 * Gets the language appropriate day name when given the day number(0-6)
	 * eg - 0 == Sunday
	 * @return {String}  The day name
	 */
	$D.getDayName = function (n) {
		return Date.CultureInfo.dayNames[n];
	};

	/**
	 * Gets the day number (0-6) if given a CultureInfo specific string which is a valid dayName, abbreviatedDayName or shortestDayName (two char).
	 * @param {String}   The name of the day (eg. "Monday, "Mon", "tuesday", "tue", "We", "we").
	 * @return {Number}  The day number
	 */
	$D.getDayNumberFromName = function (name) {
		var n = Date.CultureInfo.dayNames, m = Date.CultureInfo.abbreviatedDayNames, o = Date.CultureInfo.shortestDayNames, s = name.toLowerCase();
		for (var i = 0; i < n.length; i++) {
			if (n[i].toLowerCase() === s || m[i].toLowerCase() === s || o[i].toLowerCase() === s) {
				return i;
			}
		}
		return -1;
	};
	
	/**
	 * Gets the month number (0-11) if given a Culture Info specific string which is a valid monthName or abbreviatedMonthName.
	 * @param {String}   The name of the month (eg. "February, "Feb", "october", "oct").
	 * @return {Number}  The day number
	 */
	$D.getMonthNumberFromName = function (name) {
		var n = Date.CultureInfo.monthNames, m = Date.CultureInfo.abbreviatedMonthNames, s = name.toLowerCase();
		for (var i = 0; i < n.length; i++) {
			if (n[i].toLowerCase() === s || m[i].toLowerCase() === s) {
				return i;
			}
		}
		return -1;
	};

	/**
	 * Gets the language appropriate month name when given the month number(0-11)
	 * eg - 0 == January
	 * @return {String}  The month name
	 */
	$D.getMonthName = function (n) {
		return Date.CultureInfo.monthNames[n];
	};

	/**
	 * Determines if the current date instance is within a LeapYear.
	 * @param {Number}   The year.
	 * @return {Boolean} true if date is within a LeapYear, otherwise false.
	 */
	$D.isLeapYear = function (year) {
		return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
	};

	/**
	 * Gets the number of days in the month, given a year and month value. Automatically corrects for LeapYear.
	 * @param {Number}   The year.
	 * @param {Number}   The month (0-11).
	 * @return {Number}  The number of days in the month.
	 */
	$D.getDaysInMonth = function (year, month) {
		if (!month && $D.validateMonth(year)) {
				month = year;
				year = Date.today().getFullYear();
		}
		return [31, ($D.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
	};

	$P.getDaysInMonth = function () {
		return $D.getDaysInMonth(this.getFullYear(), this.getMonth());
	};
 
	$D.getTimezoneAbbreviation = function (offset, dst) {
		var p, n = (dst || false) ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard;
		for (p in n) {
			if (n.hasOwnProperty(p)) {
				if (n[p] === offset) {
					return p;
				}
			}
		}
		return null;
	};
	
	$D.getTimezoneOffset = function (name, dst) {
		var i, a =[], z = Date.CultureInfo.timezones;
		if (!name) { name = (new Date()).getTimezone();}
		for (i = 0; i < z.length; i++) {
			if (z[i].name === name.toUpperCase()) {
				a.push(i);
			}
		}
		if (!z[a[0]]) {
			return null;
		}
		if (a.length === 1 || !dst) {
			return z[a[0]].offset;
		} else {
			for (i=0; i < a.length; i++) {
				if (z[a[i]].dst) {
					return z[a[i]].offset;
				}
			}
		}
	};

	$D.getQuarter = function (d) {
		d = d || new Date(); // If no date supplied, use today
		var q = [1,2,3,4];
		return q[Math.floor(d.getMonth() / 3)]; // ~~~ is a bitwise op. Faster than Math.floor
	};

	$D.getDaysLeftInQuarter = function (d) {
		d = d || new Date();
		var qEnd = new Date(d);
		qEnd.setMonth(qEnd.getMonth() + 3 - qEnd.getMonth() % 3, 0);
		return Math.floor((qEnd - d) / 8.64e7);
	};

	// private
	var validate = function (n, min, max, name) {
		name = name ? name : "Object";
		if (typeof n === "undefined") {
			return false;
		} else if (typeof n !== "number") {
			throw new TypeError(n + " is not a Number.");
		} else if (n < min || n > max) {
			// As failing validation is *not* an exceptional circumstance 
			// lets not throw a RangeError Exception here. 
			// It's semantically correct but it's not sensible.
			return false;
		}
		return true;
	};

	/**
	 * Validates the number is within an acceptable range for milliseconds [0-999].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateMillisecond = function (value) {
		return validate(value, 0, 999, "millisecond");
	};

	/**
	 * Validates the number is within an acceptable range for seconds [0-59].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateSecond = function (value) {
		return validate(value, 0, 59, "second");
	};

	/**
	 * Validates the number is within an acceptable range for minutes [0-59].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateMinute = function (value) {
		return validate(value, 0, 59, "minute");
	};

	/**
	 * Validates the number is within an acceptable range for hours [0-23].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateHour = function (value) {
		return validate(value, 0, 23, "hour");
	};

	/**
	 * Validates the number is within an acceptable range for the days in a month [0-MaxDaysInMonth].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateDay = function (value, year, month) {
		if (year === undefined || year === null || month === undefined || month === null) { return false;}
		return validate(value, 1, $D.getDaysInMonth(year, month), "day");
	};

	/**
	 * Validates the number is within an acceptable range for months [0-11].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateWeek = function (value) {
		return validate(value, 0, 53, "week");
	};

	/**
	 * Validates the number is within an acceptable range for months [0-11].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateMonth = function (value) {
		return validate(value, 0, 11, "month");
	};

	/**
	 * Validates the number is within an acceptable range for years.
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateYear = function (value) {
		/**
		 * Per ECMAScript spec the range of times supported by Date objects is 
		 * exactly -100,000,000 days to +100,000,000 days measured relative to 
		 * midnight at the beginning of 01 January, 1970 UTC. 
		 * This gives a range of 8,640,000,000,000,000 milliseconds to either 
		 * side of 01 January, 1970 UTC.
		 *
		 * Earliest possible date: Tue, 20 Apr 271,822 B.C. 00:00:00 UTC
		 * Latest possible date: Sat, 13 Sep 275,760 00:00:00 UTC
		 */
		return validate(value, -271822, 275760, "year");
	};
	$D.validateTimezone = function(value) {
		var timezones = {"ACDT":1,"ACST":1,"ACT":1,"ADT":1,"AEDT":1,"AEST":1,"AFT":1,"AKDT":1,"AKST":1,"AMST":1,"AMT":1,"ART":1,"AST":1,"AWDT":1,"AWST":1,"AZOST":1,"AZT":1,"BDT":1,"BIOT":1,"BIT":1,"BOT":1,"BRT":1,"BST":1,"BTT":1,"CAT":1,"CCT":1,"CDT":1,"CEDT":1,"CEST":1,"CET":1,"CHADT":1,"CHAST":1,"CHOT":1,"ChST":1,"CHUT":1,"CIST":1,"CIT":1,"CKT":1,"CLST":1,"CLT":1,"COST":1,"COT":1,"CST":1,"CT":1,"CVT":1,"CWST":1,"CXT":1,"DAVT":1,"DDUT":1,"DFT":1,"EASST":1,"EAST":1,"EAT":1,"ECT":1,"EDT":1,"EEDT":1,"EEST":1,"EET":1,"EGST":1,"EGT":1,"EIT":1,"EST":1,"FET":1,"FJT":1,"FKST":1,"FKT":1,"FNT":1,"GALT":1,"GAMT":1,"GET":1,"GFT":1,"GILT":1,"GIT":1,"GMT":1,"GST":1,"GYT":1,"HADT":1,"HAEC":1,"HAST":1,"HKT":1,"HMT":1,"HOVT":1,"HST":1,"ICT":1,"IDT":1,"IOT":1,"IRDT":1,"IRKT":1,"IRST":1,"IST":1,"JST":1,"KGT":1,"KOST":1,"KRAT":1,"KST":1,"LHST":1,"LINT":1,"MAGT":1,"MART":1,"MAWT":1,"MDT":1,"MET":1,"MEST":1,"MHT":1,"MIST":1,"MIT":1,"MMT":1,"MSK":1,"MST":1,"MUT":1,"MVT":1,"MYT":1,"NCT":1,"NDT":1,"NFT":1,"NPT":1,"NST":1,"NT":1,"NUT":1,"NZDT":1,"NZST":1,"OMST":1,"ORAT":1,"PDT":1,"PET":1,"PETT":1,"PGT":1,"PHOT":1,"PHT":1,"PKT":1,"PMDT":1,"PMST":1,"PONT":1,"PST":1,"PYST":1,"PYT":1,"RET":1,"ROTT":1,"SAKT":1,"SAMT":1,"SAST":1,"SBT":1,"SCT":1,"SGT":1,"SLST":1,"SRT":1,"SST":1,"SYOT":1,"TAHT":1,"THA":1,"TFT":1,"TJT":1,"TKT":1,"TLT":1,"TMT":1,"TOT":1,"TVT":1,"UCT":1,"ULAT":1,"UTC":1,"UYST":1,"UYT":1,"UZT":1,"VET":1,"VLAT":1,"VOLT":1,"VOST":1,"VUT":1,"WAKT":1,"WAST":1,"WAT":1,"WEDT":1,"WEST":1,"WET":1,"WST":1,"YAKT":1,"YEKT":1,"Z":1};
		return (timezones[value] === 1);
	};
	$D.validateTimezoneOffset= function(value) {
		// timezones go from +14hrs to -12hrs, the +X hours are negative offsets.
		return (value > -841 && value < 721);
	};

}());

(function () {
	var $D = Date,
		$P = $D.prototype,
		p = function (s, l) {
			if (!l) {
				l = 2;
			}
			return ("000" + s).slice(l * -1);
		};

	var validateConfigObject = function (obj) {
		var result = {}, self = this, prop, testFunc;
		testFunc = function (prop, func, value) {
			if (prop === "day") {
				var month = (obj.month !== undefined) ? obj.month : self.getMonth();
				var year = (obj.year !== undefined) ? obj.year : self.getFullYear();
				return $D[func](value, year, month);
			} else {
				return $D[func](value);
			}
		};
		for (prop in obj) {
			if (hasOwnProperty.call(obj, prop)) {
				var func = "validate" + prop.charAt(0).toUpperCase() + prop.slice(1);

				if ($D[func] && obj[prop] !== null && testFunc(prop, func, obj[prop])) {
					result[prop] = obj[prop];
				}
			}
		}
		return result;
	};
	/**
	 * Resets the time of this Date object to 12:00 AM (00:00), which is the start of the day.
	 * @param {Boolean}  .clone() this date instance before clearing Time
	 * @return {Date}    this
	 */
	$P.clearTime = function () {
		this.setHours(0);
		this.setMinutes(0);
		this.setSeconds(0);
		this.setMilliseconds(0);
		return this;
	};

	/**
	 * Resets the time of this Date object to the current time ('now').
	 * @return {Date}    this
	 */
	$P.setTimeToNow = function () {
		var n = new Date();
		this.setHours(n.getHours());
		this.setMinutes(n.getMinutes());
		this.setSeconds(n.getSeconds());
		this.setMilliseconds(n.getMilliseconds());
		return this;
	};
	/**
	 * Returns a new Date object that is an exact date and time copy of the original instance.
	 * @return {Date}    A new Date instance
	 */
	$P.clone = function () {
		return new Date(this.getTime());
	};

	/**
	 * Compares this instance to a Date object and returns an number indication of their relative values.  
	 * @param {Date}     Date object to compare [Required]
	 * @return {Number}  -1 = this is lessthan date. 0 = values are equal. 1 = this is greaterthan date.
	 */
	$P.compareTo = function (date) {
		return Date.compare(this, date);
	};

	/**
	 * Compares this instance to another Date object and returns true if they are equal.  
	 * @param {Date}     Date object to compare. If no date to compare, new Date() [now] is used.
	 * @return {Boolean} true if dates are equal. false if they are not equal.
	 */
	$P.equals = function (date) {
		return Date.equals(this, (date !== undefined ? date : new Date()));
	};

	/**
	 * Determines if this instance is between a range of two dates or equal to either the start or end dates.
	 * @param {Date}     Start of range [Required]
	 * @param {Date}     End of range [Required]
	 * @return {Boolean} true is this is between or equal to the start and end dates, else false
	 */
	$P.between = function (start, end) {
		return this.getTime() >= start.getTime() && this.getTime() <= end.getTime();
	};

	/**
	 * Determines if this date occurs after the date to compare to.
	 * @param {Date}     Date object to compare. If no date to compare, new Date() ("now") is used.
	 * @return {Boolean} true if this date instance is greater than the date to compare to (or "now"), otherwise false.
	 */
	$P.isAfter = function (date) {
		return this.compareTo(date || new Date()) === 1;
	};

	/**
	 * Determines if this date occurs before the date to compare to.
	 * @param {Date}     Date object to compare. If no date to compare, new Date() ("now") is used.
	 * @return {Boolean} true if this date instance is less than the date to compare to (or "now").
	 */
	$P.isBefore = function (date) {
		return (this.compareTo(date || new Date()) === -1);
	};

	/**
	 * Determines if the current Date instance occurs today.
	 * @return {Boolean} true if this date instance is 'today', otherwise false.
	 */
	
	/**
	 * Determines if the current Date instance occurs on the same Date as the supplied 'date'. 
	 * If no 'date' to compare to is provided, the current Date instance is compared to 'today'. 
	 * @param {date}     Date object to compare. If no date to compare, the current Date ("now") is used.
	 * @return {Boolean} true if this Date instance occurs on the same Day as the supplied 'date'.
	 */
	$P.isToday = $P.isSameDay = function (date) {
		return this.clone().clearTime().equals((date || new Date()).clone().clearTime());
	};
	
	/**
	 * Adds the specified number of milliseconds to this instance. 
	 * @param {Number}   The number of milliseconds to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addMilliseconds = function (value) {
		if (!value) { return this; }
		this.setTime(this.getTime() + value * 1);
		return this;
	};

	/**
	 * Adds the specified number of seconds to this instance. 
	 * @param {Number}   The number of seconds to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addSeconds = function (value) {
		if (!value) { return this; }
		return this.addMilliseconds(value * 1000);
	};

	/**
	 * Adds the specified number of seconds to this instance. 
	 * @param {Number}   The number of seconds to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addMinutes = function (value) {
		if (!value) { return this; }
		return this.addMilliseconds(value * 60000); // 60*1000
	};

	/**
	 * Adds the specified number of hours to this instance. 
	 * @param {Number}   The number of hours to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addHours = function (value) {
		if (!value) { return this; }
		return this.addMilliseconds(value * 3600000); // 60*60*1000
	};

	/**
	 * Adds the specified number of days to this instance. 
	 * @param {Number}   The number of days to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addDays = function (value) {
		if (!value) { return this; }
		this.setDate(this.getDate() + value * 1);
		return this;
	};

	/**
	 * Adds the specified number of weekdays (ie - not sat or sun) to this instance. 
	 * @param {Number}   The number of days to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addWeekdays = function (value) {
		if (!value) { return this; }
		var day = this.getDay();
		var weeks = (Math.ceil(Math.abs(value)/7));
		if (day === 0 || day === 6) {
			if (value > 0) {
				this.next().monday();
				this.addDays(-1);
				day = this.getDay();
			}
		}

		if (value < 0) {
			while (value < 0) {
				this.addDays(-1);
				day = this.getDay();
				if (day !== 0 && day !== 6) {
					value++;
				}
			}
			return this;
		} else if (value > 5 || (6-day) <= value) {
			value = value + (weeks * 2);
		}

		return this.addDays(value);
	};

	/**
	 * Adds the specified number of weeks to this instance. 
	 * @param {Number}   The number of weeks to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addWeeks = function (value) {
		if (!value) { return this; }
		return this.addDays(value * 7);
	};


	/**
	 * Adds the specified number of months to this instance. 
	 * @param {Number}   The number of months to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addMonths = function (value) {
		if (!value) { return this; }
		var n = this.getDate();
		this.setDate(1);
		this.setMonth(this.getMonth() + value * 1);
		this.setDate(Math.min(n, $D.getDaysInMonth(this.getFullYear(), this.getMonth())));
		return this;
	};

	$P.addQuarters = function (value) {
		if (!value) { return this; }
		// note this will take you to the same point in the quarter as you are now.
		// i.e. - if you are 15 days into the quarter you'll be 15 days into the resulting one.
		// bonus: this allows adding fractional quarters
		return this.addMonths(value * 3);
	};

	/**
	 * Adds the specified number of years to this instance. 
	 * @param {Number}   The number of years to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addYears = function (value) {
		if (!value) { return this; }
		return this.addMonths(value * 12);
	};

	/**
	 * Adds (or subtracts) to the value of the years, months, weeks, days, hours, minutes, seconds, milliseconds of the date instance using given configuration object. Positive and Negative values allowed.
	 * Example
	<pre><code>
	Date.today().add( { days: 1, months: 1 } )
	 
	new Date().add( { years: -1 } )
	</code></pre> 
	 * @param {Object}   Configuration object containing attributes (months, days, etc.)
	 * @return {Date}    this
	 */
	$P.add = function (config) {
		if (typeof config === "number") {
			this._orient = config;
			return this;
		}
		
		var x = config;

		if (x.day) {
			// If we should be a different date than today (eg: for 'tomorrow -1d', etc).
			// Should only effect parsing, not direct usage (eg, Finish and FinishExact)
			if ((x.day - this.getDate()) !== 0) {
				this.setDate(x.day);
			}
		}
		if (x.milliseconds) {
			this.addMilliseconds(x.milliseconds);
		}
		if (x.seconds) {
			this.addSeconds(x.seconds);
		}
		if (x.minutes) {
			this.addMinutes(x.minutes);
		}
		if (x.hours) {
			this.addHours(x.hours);
		}
		if (x.weeks) {
			this.addWeeks(x.weeks);
		}
		if (x.months) {
			this.addMonths(x.months);
		}
		if (x.years) {
			this.addYears(x.years);
		}
		if (x.days) {
			this.addDays(x.days);
		}
		return this;
	};
	
	/**
	 * Get the week number. Week one (1) is the week which contains the first Thursday of the year. Monday is considered the first day of the week.
	 * The .getWeek() function does NOT convert the date to UTC. The local datetime is used. 
	 * Please use .getISOWeek() to get the week of the UTC converted date.
	 * @return {Number}  1 to 53
	 */
	$P.getWeek = function (utc) {
		// Create a copy of this date object  
		var self, target = new Date(this.valueOf());
		if (utc) {
			target.addMinutes(target.getTimezoneOffset());
			self = target.clone();
		} else {
			self = this;
		}
		// ISO week date weeks start on monday  
		// so correct the day number  
		var dayNr = (self.getDay() + 6) % 7;
		// ISO 8601 states that week 1 is the week  
		// with the first thursday of that year.  
		// Set the target date to the thursday in the target week  
		target.setDate(target.getDate() - dayNr + 3);
		// Store the millisecond value of the target date  
		var firstThursday = target.valueOf();
		// Set the target to the first thursday of the year  
		// First set the target to january first  
		target.setMonth(0, 1);
		// Not a thursday? Correct the date to the next thursday  
		if (target.getDay() !== 4) {
			target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
		}
		// The weeknumber is the number of weeks between the   
		// first thursday of the year and the thursday in the target week  
		return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 3600 * 1000  
	};
	
	/**
	 * Get the ISO 8601 week number. Week one ("01") is the week which contains the first Thursday of the year. Monday is considered the first day of the week.
	 * The .getISOWeek() function does convert the date to it's UTC value. Please use .getWeek() to get the week of the local date.
	 * @return {String}  "01" to "53"
	 */
	$P.getISOWeek = function () {
		return p(this.getWeek(true));
	};

	/**
	 * Moves the date to Monday of the week set. Week one (1) is the week which contains the first Thursday of the year.
	 * @param {Number}   A Number (1 to 53) that represents the week of the year.
	 * @return {Date}    this
	 */
	$P.setWeek = function (n) {
		if ((n - this.getWeek()) === 0) {
			if (this.getDay() !== 1) {
				return this.moveToDayOfWeek(1, (this.getDay() > 1 ? -1 : 1));
			} else {
				return this;
			}
		} else {
			return this.moveToDayOfWeek(1, (this.getDay() > 1 ? -1 : 1)).addWeeks(n - this.getWeek());
		}
	};

	$P.setQuarter = function (qtr) {
		var month = Math.abs(((qtr-1) * 3) + 1);
		return this.setMonth(month, 1);
	};

	$P.getQuarter = function () {
		return Date.getQuarter(this);
	};

	$P.getDaysLeftInQuarter = function () {
		return Date.getDaysLeftInQuarter(this);
	};

	/**
	 * Moves the date to the next n'th occurrence of the dayOfWeek starting from the beginning of the month. The number (-1) is a magic number and will return the last occurrence of the dayOfWeek in the month.
	 * @param {Number}   The dayOfWeek to move to
	 * @param {Number}   The n'th occurrence to move to. Use (-1) to return the last occurrence in the month
	 * @return {Date}    this
	 */
	$P.moveToNthOccurrence = function (dayOfWeek, occurrence) {
		if (dayOfWeek === "Weekday") {
			if (occurrence > 0) {
				this.moveToFirstDayOfMonth();
				if (this.is().weekday()) {
					occurrence -= 1;
				}
			} else if (occurrence < 0) {
				this.moveToLastDayOfMonth();
				if (this.is().weekday()) {
					occurrence += 1;
				}
			} else {
				return this;
			}
			return this.addWeekdays(occurrence);
		}
		var shift = 0;
		if (occurrence > 0) {
			shift = occurrence - 1;
		}
		else if (occurrence === -1) {
			this.moveToLastDayOfMonth();
			if (this.getDay() !== dayOfWeek) {
				this.moveToDayOfWeek(dayOfWeek, -1);
			}
			return this;
		}
		return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek, +1).addWeeks(shift);
	};


	var moveToN = function (getFunc, addFunc, nVal) {
		return function (value, orient) {
			var diff = (value - this[getFunc]() + nVal * (orient || +1)) % nVal;
			return this[addFunc]((diff === 0) ? diff += nVal * (orient || +1) : diff);
		};
	};
	/**
	 * Move to the next or last dayOfWeek based on the orient value.
	 * @param {Number}   The dayOfWeek to move to
	 * @param {Number}   Forward (+1) or Back (-1). Defaults to +1. [Optional]
	 * @return {Date}    this
	 */
	$P.moveToDayOfWeek = moveToN("getDay", "addDays", 7);
	/**
	 * Move to the next or last month based on the orient value.
	 * @param {Number}   The month to move to. 0 = January, 11 = December
	 * @param {Number}   Forward (+1) or Back (-1). Defaults to +1. [Optional]
	 * @return {Date}    this
	 */
	$P.moveToMonth = moveToN("getMonth", "addMonths", 12);
	/**
	 * Get the Ordinate of the current day ("th", "st", "rd").
	 * @return {String} 
	 */
	$P.getOrdinate = function () {
		var num = this.getDate();
		return ord(num);
	};
	/**
	 * Get the Ordinal day (numeric day number) of the year, adjusted for leap year.
	 * @return {Number} 1 through 365 (366 in leap years)
	 */
	$P.getOrdinalNumber = function () {
		return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 86400000) + 1;
	};

	/**
	 * Get the time zone abbreviation of the current date.
	 * @return {String} The abbreviated time zone name (e.g. "EST")
	 */
	$P.getTimezone = function () {
		return $D.getTimezoneAbbreviation(this.getUTCOffset(), this.isDaylightSavingTime());
	};

	$P.setTimezoneOffset = function (offset) {
		var here = this.getTimezoneOffset(), there = Number(offset) * -6 / 10;
		return (there || there === 0) ? this.addMinutes(there - here) : this;
	};

	$P.setTimezone = function (offset) {
		return this.setTimezoneOffset($D.getTimezoneOffset(offset));
	};

	/**
	 * Indicates whether Daylight Saving Time is observed in the current time zone.
	 * @return {Boolean} true|false
	 */
	$P.hasDaylightSavingTime = function () {
		return (Date.today().set({month: 0, day: 1}).getTimezoneOffset() !== Date.today().set({month: 6, day: 1}).getTimezoneOffset());
	};
	
	/**
	 * Indicates whether this Date instance is within the Daylight Saving Time range for the current time zone.
	 * @return {Boolean} true|false
	 */
	$P.isDaylightSavingTime = function () {
		return Date.today().set({month: 0, day: 1}).getTimezoneOffset() !== this.getTimezoneOffset();
	};

	/**
	 * Get the offset from UTC of the current date.
	 * @return {String} The 4-character offset string prefixed with + or - (e.g. "-0500")
	 */
	$P.getUTCOffset = function (offset) {
		var n = (offset || this.getTimezoneOffset()) * -10 / 6, r;
		if (n < 0) {
			r = (n - 10000).toString();
			return r.charAt(0) + r.substr(2);
		} else {
			r = (n + 10000).toString();
			return "+" + r.substr(1);
		}
	};

	/**
	 * Returns the number of milliseconds between this date and date.
	 * @param {Date} Defaults to now
	 * @return {Number} The diff in milliseconds
	 */
	$P.getElapsed = function (date) {
		return (date || new Date()) - this;
	};

	/**
	 * Set the value of year, month, day, hour, minute, second, millisecond of date instance using given configuration object.
	 * Example
	<pre><code>
	Date.today().set( { day: 20, month: 1 } )

	new Date().set( { millisecond: 0 } )
	</code></pre>
	 * 
	 * @param {Object}   Configuration object containing attributes (month, day, etc.)
	 * @return {Date}    this
	 */
	$P.set = function (config) {
		config = validateConfigObject.call(this, config);
		var key;
		for (key in config) {
			if (hasOwnProperty.call(config, key)) {
				var name = key.charAt(0).toUpperCase() + key.slice(1);
				var addFunc, getFunc;
				if (key !== "week" && key !== "month" && key !== "timezone" && key !== "timezoneOffset") {
					name += "s";
				}
				addFunc = "add" + name;
				getFunc = "get" + name;
				if (key === "month") {
					addFunc = addFunc + "s";
				} else if (key === "year"){
					getFunc = "getFullYear";
				}
				if (key !== "day" && key !== "timezone" && key !== "timezoneOffset"  && key !== "week" &&  key !== "hour") {
						this[addFunc](config[key] - this[getFunc]());
				} else if ( key === "timezone"|| key === "timezoneOffset" || key === "week" || key === "hour") {
					this["set"+name](config[key]);
				}
			}
		}
		// day has to go last because you can't validate the day without first knowing the month
		if (config.day) {
			this.addDays(config.day - this.getDate());
		}
		
		return this;
	};

	/**
	 * Moves the date to the first day of the month.
	 * @return {Date}    this
	 */
	$P.moveToFirstDayOfMonth = function () {
		return this.set({ day: 1 });
	};

	/**
	 * Moves the date to the last day of the month.
	 * @return {Date}    this
	 */
	$P.moveToLastDayOfMonth = function () {
		return this.set({ day: $D.getDaysInMonth(this.getFullYear(), this.getMonth())});
	};


	/**
	 * Converts the value of the current Date object to its equivalent string representation.
	 * Format Specifiers
	 * CUSTOM DATE AND TIME FORMAT STRINGS
	 * Format  Description                                                                  Example
	 * ------  ---------------------------------------------------------------------------  -----------------------
	 * s      The seconds of the minute between 0-59.                                      "0" to "59"
	 * ss     The seconds of the minute with leading zero if required.                     "00" to "59"
	 * 
	 * m      The minute of the hour between 0-59.                                         "0"  or "59"
	 * mm     The minute of the hour with leading zero if required.                        "00" or "59"
	 * 
	 * h      The hour of the day between 1-12.                                            "1"  to "12"
	 * hh     The hour of the day with leading zero if required.                           "01" to "12"
	 * 
	 * H      The hour of the day between 0-23.                                            "0"  to "23"
	 * HH     The hour of the day with leading zero if required.                           "00" to "23"
	 * 
	 * d      The day of the month between 1 and 31.                                       "1"  to "31"
	 * dd     The day of the month with leading zero if required.                          "01" to "31"
	 * ddd    Abbreviated day name. Date.CultureInfo.abbreviatedDayNames.                                "Mon" to "Sun" 
	 * dddd   The full day name. Date.CultureInfo.dayNames.                                              "Monday" to "Sunday"
	 * 
	 * M      The month of the year between 1-12.                                          "1" to "12"
	 * MM     The month of the year with leading zero if required.                         "01" to "12"
	 * MMM    Abbreviated month name. Date.CultureInfo.abbreviatedMonthNames.                            "Jan" to "Dec"
	 * MMMM   The full month name. Date.CultureInfo.monthNames.                                          "January" to "December"
	 *
	 * yy     The year as a two-digit number.                                              "99" or "08"
	 * yyyy   The full four digit year.                                                    "1999" or "2008"
	 * 
	 * t      Displays the first character of the A.M./P.M. designator.                    "A" or "P"
	 *		Date.CultureInfo.amDesignator or Date.CultureInfo.pmDesignator
	 * tt     Displays the A.M./P.M. designator.                                           "AM" or "PM"
	 *		Date.CultureInfo.amDesignator or Date.CultureInfo.pmDesignator
	 * 
	 * S      The ordinal suffix ("st, "nd", "rd" or "th") of the current day.            "st, "nd", "rd" or "th"
	 *
	 * STANDARD DATE AND TIME FORMAT STRINGS
	 * Format  Description                                                                  Example
	 *------  ---------------------------------------------------------------------------  -----------------------
	 * d      The CultureInfo shortDate Format Pattern                                     "M/d/yyyy"
	 * D      The CultureInfo longDate Format Pattern                                      "dddd, MMMM dd, yyyy"
	 * F      The CultureInfo fullDateTime Format Pattern                                  "dddd, MMMM dd, yyyy h:mm:ss tt"
	 * m      The CultureInfo monthDay Format Pattern                                      "MMMM dd"
	 * r      The CultureInfo rfc1123 Format Pattern                                       "ddd, dd MMM yyyy HH:mm:ss GMT"
	 * s      The CultureInfo sortableDateTime Format Pattern                              "yyyy-MM-ddTHH:mm:ss"
	 * t      The CultureInfo shortTime Format Pattern                                     "h:mm tt"
	 * T      The CultureInfo longTime Format Pattern                                      "h:mm:ss tt"
	 * u      The CultureInfo universalSortableDateTime Format Pattern                     "yyyy-MM-dd HH:mm:ssZ"
	 * y      The CultureInfo yearMonth Format Pattern                                     "MMMM, yyyy"
	 *
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @return {String}  A string representation of the current Date object.
	 */
	
	var ord = function (n) {
		switch (n * 1) {
		case 1:
		case 21:
		case 31:
			return "st";
		case 2:
		case 22:
			return "nd";
		case 3:
		case 23:
			return "rd";
		default:
			return "th";
		}
	};
	var parseStandardFormats = function (format) {
		var y, c = Date.CultureInfo.formatPatterns;
		switch (format) {
			case "d":
				return this.toString(c.shortDate);
			case "D":
				return this.toString(c.longDate);
			case "F":
				return this.toString(c.fullDateTime);
			case "m":
				return this.toString(c.monthDay);
			case "r":
			case "R":
				y = this.clone().addMinutes(this.getTimezoneOffset());
				return y.toString(c.rfc1123) + " GMT";
			case "s":
				return this.toString(c.sortableDateTime);
			case "t":
				return this.toString(c.shortTime);
			case "T":
				return this.toString(c.longTime);
			case "u":
				y = this.clone().addMinutes(this.getTimezoneOffset());
				return y.toString(c.universalSortableDateTime);
			case "y":
				return this.toString(c.yearMonth);
			default:
				return false;
		}
	};
	var parseFormatStringsClosure = function (context) {
		return function (m) {
			if (m.charAt(0) === "\\") {
				return m.replace("\\", "");
			}
			switch (m) {
				case "hh":
					return p(context.getHours() < 13 ? (context.getHours() === 0 ? 12 : context.getHours()) : (context.getHours() - 12));
				case "h":
					return context.getHours() < 13 ? (context.getHours() === 0 ? 12 : context.getHours()) : (context.getHours() - 12);
				case "HH":
					return p(context.getHours());
				case "H":
					return context.getHours();
				case "mm":
					return p(context.getMinutes());
				case "m":
					return context.getMinutes();
				case "ss":
					return p(context.getSeconds());
				case "s":
					return context.getSeconds();
				case "yyyy":
					return p(context.getFullYear(), 4);
				case "yy":
					return p(context.getFullYear());
				case "y":
					return context.getFullYear();
				case "E":
				case "dddd":
					return Date.CultureInfo.dayNames[context.getDay()];
				case "ddd":
					return Date.CultureInfo.abbreviatedDayNames[context.getDay()];
				case "dd":
					return p(context.getDate());
				case "d":
					return context.getDate();
				case "MMMM":
					return Date.CultureInfo.monthNames[context.getMonth()];
				case "MMM":
					return Date.CultureInfo.abbreviatedMonthNames[context.getMonth()];
				case "MM":
					return p((context.getMonth() + 1));
				case "M":
					return context.getMonth() + 1;
				case "t":
					return context.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
				case "tt":
					return context.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
				case "S":
					return ord(context.getDate());
				case "W":
					return context.getWeek();
				case "WW":
					return context.getISOWeek();
				case "Q":
					return "Q" + context.getQuarter();
				case "q":
					return String(context.getQuarter());
				case "z":
					return context.getTimezone();
				case "Z":
				case "X":
					return Date.getTimezoneOffset(context.getTimezone());
				case "ZZ": // Timezone offset in seconds
					return context.getTimezoneOffset() * -60;
				case "u":
					return context.getDay();
				case "L":
					return ($D.isLeapYear(context.getFullYear())) ? 1 : 0;
				case "B":
					// Swatch Internet Time (.beats)
					return "@"+((context.getUTCSeconds() + (context.getUTCMinutes()*60) + ((context.getUTCHours()+1)*3600))/86.4);
				default:
					return m;
			}
		};
	};
	$P.toString = function (format, ignoreStandards) {
		
		// Standard Date and Time Format Strings. Formats pulled from CultureInfo file and
		// may vary by culture. 
		if (!ignoreStandards && format && format.length === 1) {
			output = parseStandardFormats.call(this, format);
			if (output) {
				return output;
			}
		}
		var parseFormatStrings = parseFormatStringsClosure(this);
		return format ? format.replace(/((\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S|q|Q|WW?W?W?)(?![^\[]*\]))/g, parseFormatStrings).replace(/\[|\]/g, "") : this._toString();
	};

}());
/*************************************************************
 * SugarPak - Domain Specific Language -  Syntactical Sugar  *
 *************************************************************/
 
(function () {
	var $D = Date, $P = $D.prototype, $N = Number.prototype;

	// private
	$P._orient = +1;

	// private
	$P._nth = null;

	// private
	$P._is = false;

	// private
	$P._same = false;
	
	// private
	$P._isSecond = false;

	// private
	$N._dateElement = "days";

	/** 
	 * Moves the date to the next instance of a date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.today().next().friday();
	Date.today().next().fri();
	Date.today().next().march();
	Date.today().next().mar();
	Date.today().next().week();
	</code></pre>
	 * 
	 * @return {Date}    date
	 */
	$P.next = function () {
		this._move = true;
		this._orient = +1;
		return this;
	};

	/** 
	 * Creates a new Date (Date.today()) and moves the date to the next instance of the date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.next().friday();
	Date.next().fri();
	Date.next().march();
	Date.next().mar();
	Date.next().week();
	</code></pre>
	 * 
	 * @return {Date}    date
	 */
	$D.next = function () {
		return $D.today().next();
	};

	/** 
	 * Moves the date to the previous instance of a date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.today().last().friday();
	Date.today().last().fri();
	Date.today().last().march();
	Date.today().last().mar();
	Date.today().last().week();
	</code></pre>
	 *  
	 * @return {Date}    date
	 */
	$P.last = $P.prev = $P.previous = function () {
		this._move = true;
		this._orient = -1;
		return this;
	};

	/** 
	 * Creates a new Date (Date.today()) and moves the date to the previous instance of the date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.last().friday();
	Date.last().fri();
	Date.previous().march();
	Date.prev().mar();
	Date.last().week();
	</code></pre>
	 *  
	 * @return {Date}    date
	 */
	$D.last = $D.prev = $D.previous = function () {
		return $D.today().last();
	};

	/** 
	 * Performs a equality check when followed by either a month name, day name or .weekday() function.
	 * Example
	<pre><code>
	Date.today().is().friday(); // true|false
	Date.today().is().fri();
	Date.today().is().march();
	Date.today().is().mar();
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.is = function () {
		this._is = true;
		return this;
	};

	/** 
	 * Determines if two date objects occur on/in exactly the same instance of the subsequent date part function.
	 * The function .same() must be followed by a date part function (example: .day(), .month(), .year(), etc).
	 *
	 * An optional Date can be passed in the date part function. If now date is passed as a parameter, 'Now' is used. 
	 *
	 * The following example demonstrates how to determine if two dates fall on the exact same day.
	 *
	 * Example
	<pre><code>
	var d1 = Date.today(); // today at 00:00
	var d2 = new Date();   // exactly now.

	// Do they occur on the same day?
	d1.same().day(d2); // true
	
	// Do they occur on the same hour?
	d1.same().hour(d2); // false, unless d2 hour is '00' (midnight).
	
	// What if it's the same day, but one year apart?
	var nextYear = Date.today().add(1).year();

	d1.same().day(nextYear); // false, because the dates must occur on the exact same day. 
	</code></pre>
	 *
	 * Scenario: Determine if a given date occurs during some week period 2 months from now. 
	 *
	 * Example
	<pre><code>
	var future = Date.today().add(2).months();
	return someDate.same().week(future); // true|false;
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.same = function () {
		this._same = true;
		this._isSecond = false;
		return this;
	};

	/** 
	 * Determines if the current date/time occurs during Today. Must be preceded by the .is() function.
	 * Example
	<pre><code>
	someDate.is().today();    // true|false
	new Date().is().today();  // true
	Date.today().is().today();// true
	Date.today().add(-1).day().is().today(); // false
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.today = function () {
		return this.same().day();
	};

	/** 
	 * Determines if the current date is a weekday. This function must be preceded by the .is() function.
	 * Example
	<pre><code>
	Date.today().is().weekday(); // true|false
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.weekday = function () {
		if (this._nth) {
			return df("Weekday").call(this);
		}
		if (this._move) {
			return this.addWeekdays(this._orient);
		}
		if (this._is) {
			this._is = false;
			return (!this.is().sat() && !this.is().sun());
		}
		return false;
	};
	/** 
	 * Determines if the current date is on the weekend. This function must be preceded by the .is() function.
	 * Example
	<pre><code>
	Date.today().is().weekend(); // true|false
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.weekend = function () {
		if (this._is) {
			this._is = false;
			return (this.is().sat() || this.is().sun());
		}
		return false;
	};

	/** 
	 * Sets the Time of the current Date instance. A string "6:15 pm" or config object {hour:18, minute:15} are accepted.
	 * Example
	<pre><code>
	// Set time to 6:15pm with a String
	Date.today().at("6:15pm");

	// Set time to 6:15pm with a config object
	Date.today().at({hour:18, minute:15});
	</code></pre>
	 *  
	 * @return {Date}    date
	 */
	$P.at = function (time) {
		return (typeof time === "string") ? $D.parse(this.toString("d") + " " + time) : this.set(time);
	};
		
	/** 
	 * Creates a new Date() and adds this (Number) to the date based on the preceding date element function (eg. second|minute|hour|day|month|year).
	 * Example
	<pre><code>
	// Undeclared Numbers must be wrapped with parentheses. Requirment of JavaScript.
	(3).days().fromNow();
	(6).months().fromNow();

	// Declared Number variables do not require parentheses. 
	var n = 6;
	n.months().fromNow();
	</code></pre>
	 *  
	 * @return {Date}    A new Date instance
	 */
	$N.fromNow = $N.after = function (date) {
		var c = {};
		c[this._dateElement] = this;
		return ((!date) ? new Date() : date.clone()).add(c);
	};

	/** 
	 * Creates a new Date() and subtract this (Number) from the date based on the preceding date element function (eg. second|minute|hour|day|month|year).
	 * Example
	<pre><code>
	// Undeclared Numbers must be wrapped with parentheses. Requirment of JavaScript.
	(3).days().ago();
	(6).months().ago();

	// Declared Number variables do not require parentheses. 
	var n = 6;
	n.months().ago();
	</code></pre>
	 *  
	 * @return {Date}    A new Date instance
	 */
	$N.ago = $N.before = function (date) {
		var c = {},
		s = (this._dateElement[this._dateElement.length-1] !== "s") ? this._dateElement + "s" : this._dateElement;
		c[s] = this * -1;
		return ((!date) ? new Date() : date.clone()).add(c);
	};

	// Do NOT modify the following string tokens. These tokens are used to build dynamic functions.
	// All culture-specific strings can be found in the CultureInfo files.
	var dx = ("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),
		mx = ("january february march april may june july august september october november december").split(/\s/),
		px = ("Millisecond Second Minute Hour Day Week Month Year Quarter Weekday").split(/\s/),
		pxf = ("Milliseconds Seconds Minutes Hours Date Week Month FullYear Quarter").split(/\s/),
		nth = ("final first second third fourth fifth").split(/\s/),
		de;

   /** 
	 * Returns an object literal of all the date parts.
	 * Example
	<pre><code>
	var o = new Date().toObject();
	
	// { year: 2008, month: 4, week: 20, day: 13, hour: 18, minute: 9, second: 32, millisecond: 812 }
	
	// The object properties can be referenced directly from the object.
	
	alert(o.day);  // alerts "13"
	alert(o.year); // alerts "2008"
	</code></pre>
	 *  
	 * @return {Date}    An object literal representing the original date object.
	 */
	$P.toObject = function () {
		var o = {};
		for (var i = 0; i < px.length; i++) {
			if (this["get" + pxf[i]]) {
				o[px[i].toLowerCase()] = this["get" + pxf[i]]();
			}
		}
		return o;
	};
   
   /** 
	 * Returns a date created from an object literal. Ignores the .week property if set in the config. 
	 * Example
	<pre><code>
	var o = new Date().toObject();
	
	return Date.fromObject(o); // will return the same date. 

	var o2 = {month: 1, day: 20, hour: 18}; // birthday party!
	Date.fromObject(o2);
	</code></pre>
	 *  
	 * @return {Date}    An object literal representing the original date object.
	 */
	$D.fromObject = function(config) {
		config.week = null;
		return Date.today().set(config);
	};
		
	// Create day name functions and abbreviated day name functions (eg. monday(), friday(), fri()).
	
	var df = function (n) {
		return function () {
			if (this._is) {
				this._is = false;
				return this.getDay() === n;
			}
			if (this._move) { this._move = null; }
			if (this._nth !== null) {
				// If the .second() function was called earlier, remove the _orient 
				// from the date, and then continue.
				// This is required because 'second' can be used in two different context.
				// 
				// Example
				//
				//   Date.today().add(1).second();
				//   Date.march().second().monday();
				// 
				// Things get crazy with the following...
				//   Date.march().add(1).second().second().monday(); // but it works!!
				//  
				if (this._isSecond) {
					this.addSeconds(this._orient * -1);
				}
				// make sure we reset _isSecond
				this._isSecond = false;

				var ntemp = this._nth;
				this._nth = null;
				var temp = this.clone().moveToLastDayOfMonth();
				this.moveToNthOccurrence(n, ntemp);
				if (this > temp) {
					throw new RangeError($D.getDayName(n) + " does not occur " + ntemp + " times in the month of " + $D.getMonthName(temp.getMonth()) + " " + temp.getFullYear() + ".");
				}
				return this;
			}
			return this.moveToDayOfWeek(n, this._orient);
		};
	};
	
	var sdf = function (n) {
		return function () {
			var t = $D.today(), shift = n - t.getDay();
			if (n === 0 && Date.CultureInfo.firstDayOfWeek === 1 && t.getDay() !== 0) {
				shift = shift + 7;
			}
			return t.addDays(shift);
		};
	};
	

	
	// Create month name functions and abbreviated month name functions (eg. january(), march(), mar()).
	var month_instance_functions = function (n) {
		return function () {
			if (this._is) {
				this._is = false;
				return this.getMonth() === n;
			}
			return this.moveToMonth(n, this._orient);
		};
	};
	
	var month_static_functions = function (n) {
		return function () {
			return $D.today().set({ month: n, day: 1 });
		};
	};
	
	var processTerms = function (names, staticFunc, instanceFunc) {
		for (var i = 0; i < names.length; i++) {
			// Create constant static Name variables.
			$D[names[i].toUpperCase()] = $D[names[i].toUpperCase().substring(0, 3)] = i;
			// Create Name functions.
			$D[names[i]] = $D[names[i].substring(0, 3)] = staticFunc(i);
			// Create Name instance functions.
			$P[names[i]] = $P[names[i].substring(0, 3)] = instanceFunc(i);
		}

	};

	processTerms(dx, sdf, df);
	processTerms(mx, month_static_functions, month_instance_functions);
	
	// Create date element functions and plural date element functions used with Date (eg. day(), days(), months()).
	var ef = function (j) {
		return function () {
			// if the .second() function was called earlier, the _orient 
			// has alread been added. Just return this and reset _isSecond.
			if (this._isSecond) {
				this._isSecond = false;
				return this;
			}

			if (this._same) {
				this._same = this._is = false;
				var o1 = this.toObject(),
					o2 = (arguments[0] || new Date()).toObject(),
					v = "",
					k = j.toLowerCase();

				// the substr trick with -1 doesn't work in IE8 or less
				k = (k[k.length-1] === "s") ? k.substring(0,k.length-1) : k;
					
				for (var m = (px.length - 1); m > -1; m--) {
					v = px[m].toLowerCase();
					if (o1[v] !== o2[v]) {
						return false;
					}
					if (k === v) {
						break;
					}
				}
				return true;
			}
			
			if (j.substring(j.length - 1) !== "s") {
				j += "s";
			}
			if (this._move) { this._move = null; }
			return this["add" + j](this._orient);
		};
	};
	
	
	var nf = function (n) {
		return function () {
			this._dateElement = n;
			return this;
		};
	};
   
	for (var k = 0; k < px.length; k++) {
		de = px[k].toLowerCase();
		if(de !== "weekday") {
			// Create date element functions and plural date element functions used with Date (eg. day(), days(), months()).
			$P[de] = $P[de + "s"] = ef(px[k]);
			
			// Create date element functions and plural date element functions used with Number (eg. day(), days(), months()).
			$N[de] = $N[de + "s"] = nf(de + "s");
		}
	}
	
	$P._ss = ef("Second");
	
	var nthfn = function (n) {
		return function (dayOfWeek) {
			if (this._same) {
				return this._ss(arguments[0]);
			}
			if (dayOfWeek || dayOfWeek === 0) {
				return this.moveToNthOccurrence(dayOfWeek, n);
			}
			this._nth = n;

			// if the operator is 'second' add the _orient, then deal with it later...
			if (n === 2 && (dayOfWeek === undefined || dayOfWeek === null)) {
				this._isSecond = true;
				return this.addSeconds(this._orient);
			}
			return this;
		};
	};

	for (var l = 0; l < nth.length; l++) {
		$P[nth[l]] = (l === 0) ? nthfn(-1) : nthfn(l);
	}
}());

(function () {
	"use strict";
	Date.Parsing = {
		Exception: function (s) {
			this.message = "Parse error at '" + s.substring(0, 10) + " ...'";
		}
	};
	var $P = Date.Parsing;
	var dayOffsets = {
		standard: [0,31,59,90,120,151,181,212,243,273,304,334],
		leap: [0,31,60,91,121,152,182,213,244,274,305,335]
	};

	$P.isLeapYear = function(year) {
		return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
	};

	var utils = {
		multiReplace : function (str, hash ) {
			var key;
			for (key in hash) {
				if (Object.prototype.hasOwnProperty.call(hash, key)) {
					var regex;
					if (typeof hash[key] === "function") {

					} else {
						regex = (hash[key] instanceof RegExp) ? hash[key] : new RegExp(hash[key], "g");
					}
					str = str.replace(regex, key);
				}
			}
			return str;
		},
		getDayOfYearFromWeek : function (obj) {
			var d, jan4, offset;
			obj.weekDay = (!obj.weekDay && obj.weekDay !== 0) ? 1 : obj.weekDay;
			d = new Date(obj.year, 0, 4);
			jan4 = d.getDay() === 0 ? 7 : d.getDay(); // JS is 0 indexed on Sunday.
			offset = jan4+3;
			obj.dayOfYear = ((obj.week * 7) + (obj.weekDay === 0 ? 7 : obj.weekDay))-offset;
			return obj;
		},
		getDayOfYear : function (obj, dayOffset) {
			if (!obj.dayOfYear) {
				obj = utils.getDayOfYearFromWeek(obj);
			}
			for (var i=0;i <= dayOffset.length;i++) {
				if (obj.dayOfYear < dayOffset[i] || i === dayOffset.length) {
					obj.day = obj.day ? obj.day : (obj.dayOfYear - dayOffset[i-1]);
					break;
				} else {
					obj.month = i;
				}
			}
			return obj;
		},
		adjustForTimeZone : function (obj, date) {
			var offset;
			if (obj.zone.toUpperCase() === "Z" || (obj.zone_hours === 0 && obj.zone_minutes === 0)) {
				// it's UTC/GML so work out the current timeszone offset
				offset = -date.getTimezoneOffset();
			} else {
				offset = (obj.zone_hours*60) + (obj.zone_minutes || 0);
				if (obj.zone_sign === "+") {
					offset *= -1;
				}
				offset -= date.getTimezoneOffset();
			}
			date.setMinutes(date.getMinutes()+offset);
			return date;
		},
		setDefaults : function (obj) {
			obj.year = obj.year || Date.today().getFullYear();
			obj.hours = obj.hours || 0;
			obj.minutes = obj.minutes || 0;
			obj.seconds = obj.seconds || 0;
			obj.milliseconds = obj.milliseconds || 0;
			if (!(!obj.month && (obj.week || obj.dayOfYear))) {
				// if we have a month, or if we don't but don't have the day calculation data
				obj.month = obj.month || 0;
				obj.day = obj.day || 1;
			}
			return obj;
		},
		dataNum: function (data, mod, explict, postProcess) {
			var dataNum = data*1;
			if (mod) {
				if (postProcess) {
					return data ? mod(data)*1 : data;
				} else {
					return data ? mod(dataNum) : data;
				}
			} else if (!explict){
				return data ? dataNum : data;
			} else {
				return (data && typeof data !== "undefined") ? dataNum : data;
			}
		},
		timeDataProcess: function (obj) {
			var timeObj = {};
			for (var x in obj.data) {
				if (obj.data.hasOwnProperty(x)) {
					timeObj[x] = obj.ignore[x] ? obj.data[x] : utils.dataNum(obj.data[x], obj.mods[x], obj.explict[x], obj.postProcess[x]);
				}
			}
			if (obj.data.secmins) {
				obj.data.secmins = obj.data.secmins.replace(",", ".") * 60;
				if (!timeObj.minutes) {
					timeObj.minutes = obj.data.secmins;
				} else if (!timeObj.seconds) {
					timeObj.seconds = obj.data.secmins;
				}
				delete obj.secmins;
			}
			return timeObj;
		},
		buildTimeObjectFromData: function (data) {
			var time = utils.timeDataProcess({
				data: {
					year : data[1],
					month : data[5],
					day : data[7],
					week : data[8],
					dayOfYear : data[10],
					hours : data[15],
					zone_hours : data[23],
					zone_minutes : data[24],
					zone : data[21],
					zone_sign : data[22],
					weekDay : data[9],
					minutes: data[16],
					seconds: data[19],
					milliseconds: data[20],
					secmins: data[18]
				},
				mods: {
					month: function(data) {
						return data-1;
					},
					weekDay: function (data) {
						data = Math.abs(data);
						return (data === 7 ? 0 : data);
					},
					minutes: function (data) {
						return data.replace(":","");
					},
					seconds: function (data) {
						return Math.floor( (data.replace(":","").replace(",","."))*1 );
					},
					milliseconds: function (data) {
						return (data.replace(",",".")*1000);
					}
				},
				postProcess: {
					minutes: true,
					seconds: true,
					milliseconds: true
				},
				explict: {
					zone_hours: true,
					zone_minutes: true
				},
				ignore: {
					zone: true,
					zone_sign: true,
					secmins: true
				}
			});
			return time;
		},
		addToHash: function (hash, keys, data) {
			keys = keys;
			data = data;
			var len = keys.length;
			for (var i = 0; i < len; i++) {
			  hash[keys[i]] = data[i];
			}
			return hash;
		},
		combineRegex: function (r1, r2) {
			return new RegExp("(("+r1.source+")\\s("+r2.source+"))");
		},
		getDateNthString: function(add, last, inc){
			if (add) {
				return Date.today().addDays(inc).toString("d");
			} else if (last) {
				return Date.today().last()[inc]().toString("d");
			}

		},
		buildRegexData: function (array) {
			var arr = [];
			var len = array.length;
			for (var i=0; i < len; i++) {
				if (Object.prototype.toString.call(array[i]) === '[object Array]') { // oldIE compat version of Array.isArray
					arr.push(this.combineRegex(array[i][0], array[i][1]));
				} else {
					arr.push(array[i]);
				}
			}
			return arr;
		}
	};

	$P.processTimeObject = function (obj) {
		var date, dayOffset;

		utils.setDefaults(obj);
		dayOffset = ($P.isLeapYear(obj.year)) ? dayOffsets.leap : dayOffsets.standard;

		if (!obj.month && (obj.week || obj.dayOfYear)) {
			utils.getDayOfYear(obj, dayOffset);
		} else {
			obj.dayOfYear = dayOffset[obj.month] + obj.day;
		}

		date = new Date(obj.year, obj.month, obj.day, obj.hours, obj.minutes, obj.seconds, obj.milliseconds);

		if (obj.zone) {
			utils.adjustForTimeZone(obj, date); // adjust (and calculate) for timezone
		}
		return date;
	};

	$P.ISO = {
		regex : /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-4])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?\s?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
		parse : function (s) {
			var time, data = s.match(this.regex);
			if (!data || !data.length) {
				return null;
			}

			time = utils.buildTimeObjectFromData(data);

			if (!time.year || (!time.year && (!time.month && !time.day) && (!time.week && !time.dayOfYear)) ) {
				return null;
			}
			return $P.processTimeObject(time);
		}
	};

	$P.Numeric = {
		isNumeric: function (e){return!isNaN(parseFloat(e))&&isFinite(e);},
		regex: /\b([0-1]?[0-9])([0-3]?[0-9])([0-2]?[0-9]?[0-9][0-9])\b/i,
		parse: function (s) {
			var data, i,
				time = {},
				order = Date.CultureInfo.dateElementOrder.split("");
			if (!(this.isNumeric(s)) || // if it's non-numeric OR
				(s[0] === "+" && s[0] === "-")) {			// It's an arithmatic string (eg +/-1000)
				return null;
			}
			if (s.length < 5 && s.indexOf(".") < 0 && s.indexOf("/") < 0) { // assume it's just a year.
				time.year = s;
				return $P.processTimeObject(time);
			}
			data = s.match(this.regex);
			if (!data || !data.length) {
				return null;
			}
			for (i=0; i < order.length; i++) {
				switch(order[i]) {
					case "d":
						time.day = data[i+1];
						break;
					case "m":
						time.month = (data[i+1]-1);
						break;
					case "y":
						time.year = data[i+1];
						break;
				}
			}
			return $P.processTimeObject(time);
		}
	};

	$P.Normalizer = {
		regexData: function () {
			var $R = Date.CultureInfo.regexPatterns;
			return utils.buildRegexData([
				$R.tomorrow,
				$R.yesterday,
				[$R.past, $R.mon],
				[$R.past, $R.tue],
				[$R.past, $R.wed],
				[$R.past, $R.thu],
				[$R.past, $R.fri],
				[$R.past, $R.sat],
				[$R.past, $R.sun]
			]);
		},
		basicReplaceHash : function() {
			var $R = Date.CultureInfo.regexPatterns;
			return {
				"January": $R.jan.source,
				"February": $R.feb,
				"March": $R.mar,
				"April": $R.apr,
				"May": $R.may,
				"June": $R.jun,
				"July": $R.jul,
				"August": $R.aug,
				"September": $R.sep,
				"October": $R.oct,
				"November": $R.nov,
				"December": $R.dec,
				"": /\bat\b/gi,
				" ": /\s{2,}/,
				"am": $R.inTheMorning,
				"9am": $R.thisMorning,
				"pm": $R.inTheEvening,
				"7pm":$R.thisEvening
			};
		},
		keys : function(){
			return [
				utils.getDateNthString(true, false, 1),				// tomorrow
				utils.getDateNthString(true, false, -1),			// yesterday
				utils.getDateNthString(false, true, "monday"),		//last mon
				utils.getDateNthString(false, true, "tuesday"),		//last tues
				utils.getDateNthString(false, true, "wednesday"),	//last wed
				utils.getDateNthString(false, true, "thursday"),	//last thurs
				utils.getDateNthString(false, true, "friday"),		//last fri
				utils.getDateNthString(false, true, "saturday"),	//last sat
				utils.getDateNthString(false, true, "sunday")		//last sun
			];
		},
		buildRegexFunctions: function () {
			var $R = Date.CultureInfo.regexPatterns;
			var __ = Date.i18n.__;
			var tomorrowRE = new RegExp("(\\b\\d\\d?("+__("AM")+"|"+__("PM")+")? )("+$R.tomorrow.source.slice(1)+")", "i"); // adapted tomorrow regex for AM PM relative dates
			var todayRE = new RegExp($R.today.source + "(?!\\s*([+-]))\\b"); // today, but excludes the math operators (eg "today + 2h")

			this.replaceFuncs = [
				[todayRE, function (full) {
					return (full.length > 1) ? Date.today().toString("d") : full;
				}],
				[tomorrowRE,
				function(full, m1) {
					var t = Date.today().addDays(1).toString("d");
					return (t + " " + m1);
				}],
				[$R.amThisMorning, function(str, am){return am;}],
				[$R.pmThisEvening, function(str, pm){return pm;}]
			];

		},
		buildReplaceData: function () {
			this.buildRegexFunctions();
			this.replaceHash = utils.addToHash(this.basicReplaceHash(), this.keys(), this.regexData());
		},
		stringReplaceFuncs: function (s) {
			for (var i=0; i < this.replaceFuncs.length; i++) {
				s = s.replace(this.replaceFuncs[i][0], this.replaceFuncs[i][1]);
			}
			return s;
		},
		parse: function (s) {
			s = this.stringReplaceFuncs(s);
			s = utils.multiReplace(s, this.replaceHash);

			try {
				var n = s.split(/([\s\-\.\,\/\x27]+)/);
				if (n.length === 3 &&
					$P.Numeric.isNumeric(n[0]) &&
					$P.Numeric.isNumeric(n[2]) &&
					(n[2].length >= 4)) {
						// ok, so we're dealing with x/year. But that's not a full date.
						// This fixes wonky dateElementOrder parsing when set to dmy order.
						if (Date.CultureInfo.dateElementOrder[0] === "d") {
							s = "1/" + n[0] + "/" + n[2]; // set to 1st of month and normalize the seperator
						}
				}
			} catch (e) {}

			return s;
		}
	};
	$P.Normalizer.buildReplaceData();
}());
(function () {
	var $P = Date.Parsing;
	var _ = $P.Operators = {
		//
		// Tokenizers
		//
		rtoken: function (r) { // regex token
			return function (s) {
				var mx = s.match(r);
				if (mx) {
					return ([ mx[0], s.substring(mx[0].length) ]);
				} else {
					throw new $P.Exception(s);
				}
			};
		},
		token: function () { // whitespace-eating token
			return function (s) {
				return _.rtoken(new RegExp("^\\s*" + s + "\\s*"))(s);
			};
		},
		stoken: function (s) { // string token
			return _.rtoken(new RegExp("^" + s));
		},

		// Atomic Operators

		until: function (p) {
			return function (s) {
				var qx = [], rx = null;
				while (s.length) {
					try {
						rx = p.call(this, s);
					} catch (e) {
						qx.push(rx[0]);
						s = rx[1];
						continue;
					}
					break;
				}
				return [ qx, s ];
			};
		},
		many: function (p) {
			return function (s) {
				var rx = [], r = null;
				while (s.length) {
					try {
						r = p.call(this, s);
					} catch (e) {
						return [ rx, s ];
					}
					rx.push(r[0]);
					s = r[1];
				}
				return [ rx, s ];
			};
		},

		// generator operators -- see below
		optional: function (p) {
			return function (s) {
				var r = null;
				try {
					r = p.call(this, s);
				} catch (e) {
					return [ null, s ];
				}
				return [ r[0], r[1] ];
			};
		},
		not: function (p) {
			return function (s) {
				try {
					p.call(this, s);
				} catch (e) {
					return [null, s];
				}
				throw new $P.Exception(s);
			};
		},
		ignore: function (p) {
			return p ?
			function (s) {
				var r = null;
				r = p.call(this, s);
				return [null, r[1]];
			} : null;
		},
		product: function () {
			var px = arguments[0],
			qx = Array.prototype.slice.call(arguments, 1), rx = [];
			for (var i = 0 ; i < px.length ; i++) {
				rx.push(_.each(px[i], qx));
			}
			return rx;
		},
		cache: function (rule) {
			var cache = {}, cache_length = 0, cache_keys = [], CACHE_MAX = Date.Config.CACHE_MAX || 100000, r = null;
			var cacheCheck = function () {
				if (cache_length === CACHE_MAX) {
					// kill several keys, don't want to have to do this all the time...
					for (var i=0; i < 10; i++) {
						var key = cache_keys.shift();
						if (key) {
							delete cache[key];
							cache_length--;
						}
					}
				}
			};
			return function (s) {
				cacheCheck();
				try {
					r = cache[s] = (cache[s] || rule.call(this, s));
				} catch (e) {
					r = cache[s] = e;
				}
				cache_length++;
				cache_keys.push(s);
				if (r instanceof $P.Exception) {
					throw r;
				} else {
					return r;
				}
			};
		},

		// vector operators -- see below
		any: function () {
			var px = arguments;
			return function (s) {
				var r = null;
				for (var i = 0; i < px.length; i++) {
					if (px[i] == null) {
						continue;
					}
					try {
						r = (px[i].call(this, s));
					} catch (e) {
						r = null;
					}
					if (r) {
						return r;
					}
				}
				throw new $P.Exception(s);
			};
		},
		each: function () {
			var px = arguments;
			return function (s) {
				var rx = [], r = null;
				for (var i = 0; i < px.length ; i++) {
					if (px[i] == null) {
						continue;
					}
					try {
						r = (px[i].call(this, s));
					} catch (e) {
						throw new $P.Exception(s);
					}
					rx.push(r[0]);
					s = r[1];
				}
				return [ rx, s];
			};
		},
		all: function () {
			var px = arguments, _ = _;
			return _.each(_.optional(px));
		},

		// delimited operators
		sequence: function (px, d, c) {
			d = d || _.rtoken(/^\s*/);
			c = c || null;
			
			if (px.length === 1) {
				return px[0];
			}
			return function (s) {
				var r = null, q = null;
				var rx = [];
				for (var i = 0; i < px.length ; i++) {
					try {
						r = px[i].call(this, s);
					} catch (e) {
						break;
					}
					rx.push(r[0]);
					try {
						q = d.call(this, r[1]);
					} catch (ex) {
						q = null;
						break;
					}
					s = q[1];
				}
				if (!r) {
					throw new $P.Exception(s);
				}
				if (q) {
					throw new $P.Exception(q[1]);
				}
				if (c) {
					try {
						r = c.call(this, r[1]);
					} catch (ey) {
						throw new $P.Exception(r[1]);
					}
				}
				return [ rx, (r?r[1]:s) ];
			};
		},

		//
		// Composite Operators
		//

		between: function (d1, p, d2) {
			d2 = d2 || d1;
			var _fn = _.each(_.ignore(d1), p, _.ignore(d2));
			return function (s) {
				var rx = _fn.call(this, s);
				return [[rx[0][0], r[0][2]], rx[1]];
			};
		},
		list: function (p, d, c) {
			d = d || _.rtoken(/^\s*/);
			c = c || null;
			return (p instanceof Array ?
				_.each(_.product(p.slice(0, -1), _.ignore(d)), p.slice(-1), _.ignore(c)) :
				_.each(_.many(_.each(p, _.ignore(d))), px, _.ignore(c)));
		},
		set: function (px, d, c) {
			d = d || _.rtoken(/^\s*/);
			c = c || null;
			return function (s) {
				// r is the current match, best the current 'best' match
				// which means it parsed the most amount of input
				var r = null, p = null, q = null, rx = null, best = [[], s], last = false;
				// go through the rules in the given set
				for (var i = 0; i < px.length ; i++) {

					// last is a flag indicating whether this must be the last element
					// if there is only 1 element, then it MUST be the last one
					q = null;
					p = null;
					r = null;
					last = (px.length === 1);
					// first, we try simply to match the current pattern
					// if not, try the next pattern
					try {
						r = px[i].call(this, s);
					} catch (e) {
						continue;
					}
					// since we are matching against a set of elements, the first
					// thing to do is to add r[0] to matched elements
					rx = [[r[0]], r[1]];
					// if we matched and there is still input to parse and 
					// we don't already know this is the last element,
					// we're going to next check for the delimiter ...
					// if there's none, or if there's no input left to parse
					// than this must be the last element after all ...
					if (r[1].length > 0 && ! last) {
						try {
							q = d.call(this, r[1]);
						} catch (ex) {
							last = true;
						}
					} else {
						last = true;
					}

					// if we parsed the delimiter and now there's no more input,
					// that means we shouldn't have parsed the delimiter at all
					// so don't update r and mark this as the last element ...
					if (!last && q[1].length === 0) {
						last = true;
					}


					// so, if this isn't the last element, we're going to see if
					// we can get any more matches from the remaining (unmatched)
					// elements ...
					if (!last) {
						// build a list of the remaining rules we can match against,
						// i.e., all but the one we just matched against
						var qx = [];
						for (var j = 0; j < px.length ; j++) {
							if (i !== j) {
								qx.push(px[j]);
							}
						}

						// now invoke recursively set with the remaining input
						// note that we don't include the closing delimiter ...
						// we'll check for that ourselves at the end
						p = _.set(qx, d).call(this, q[1]);

						// if we got a non-empty set as a result ...
						// (otw rx already contains everything we want to match)
						if (p[0].length > 0) {
							// update current result, which is stored in rx ...
							// basically, pick up the remaining text from p[1]
							// and concat the result from p[0] so that we don't
							// get endless nesting ...
							rx[0] = rx[0].concat(p[0]);
							rx[1] = p[1];
						}
					}

					// at this point, rx either contains the last matched element
					// or the entire matched set that starts with this element.

					// now we just check to see if this variation is better than
					// our best so far, in terms of how much of the input is parsed
					if (rx[1].length < best[1].length) {
						best = rx;
					}

					// if we've parsed all the input, then we're finished
					if (best[1].length === 0) {
						break;
					}
				}

				// so now we've either gone through all the patterns trying them
				// as the initial match; or we found one that parsed the entire
				// input string ...

				// if best has no matches, just return empty set ...
				if (best[0].length === 0) {
					return best;
				}

				// if a closing delimiter is provided, then we have to check it also
				if (c) {
					// we try this even if there is no remaining input because the pattern
					// may well be optional or match empty input ...
					try {
						q = c.call(this, best[1]);
					} catch (ey) {
						throw new $P.Exception(best[1]);
					}

					// it parsed ... be sure to update the best match remaining input
					best[1] = q[1];
				}
				// if we're here, either there was no closing delimiter or we parsed it
				// so now we have the best match; just return it!
				return best;
			};
		},
		forward: function (gr, fname) {
			return function (s) {
				return gr[fname].call(this, s);
			};
		},

		//
		// Translation Operators
		//
		replace: function (rule, repl) {
			return function (s) {
				var r = rule.call(this, s);
				return [repl, r[1]];
			};
		},
		process: function (rule, fn) {
			return function (s) {
				var r = rule.call(this, s);
				return [fn.call(this, r[0]), r[1]];
			};
		},
		min: function (min, rule) {
			return function (s) {
				var rx = rule.call(this, s);
				if (rx[0].length < min) {
					throw new $P.Exception(s);
				}
				return rx;
			};
		}
	};
	

	// Generator Operators And Vector Operators

	// Generators are operators that have a signature of F(R) => R,
	// taking a given rule and returning another rule, such as 
	// ignore, which parses a given rule and throws away the result.

	// Vector operators are those that have a signature of F(R1,R2,...) => R,
	// take a list of rules and returning a new rule, such as each.

	// Generator operators are converted (via the following _generator
	// function) into functions that can also take a list or array of rules
	// and return an array of new rules as though the function had been
	// called on each rule in turn (which is what actually happens).

	// This allows generators to be used with vector operators more easily.
	// Example:
	// each(ignore(foo, bar)) instead of each(ignore(foo), ignore(bar))

	// This also turns generators into vector operators, which allows
	// constructs like:
	// not(cache(foo, bar))
	
	var _generator = function (op) {
		function gen() {
			var args = null, rx = [], px, i;
			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			} else if (arguments[0] instanceof Array) {
				args = arguments[0];
			}
			if (args) {
				px = args.shift();
				if (px.length > 0) {
					args.unshift(px[i]);
					rx.push(op.apply(null, args));
					args.shift();
					return rx;
				}
			} else {
				return op.apply(null, arguments);
			}
		}

		return gen;
	};
	
	var gx = "optional not ignore cache".split(/\s/);
	
	for (var i = 0 ; i < gx.length ; i++) {
		_[gx[i]] = _generator(_[gx[i]]);
	}

	var _vector = function (op) {
		return function () {
			if (arguments[0] instanceof Array) {
				return op.apply(null, arguments[0]);
			} else {
				return op.apply(null, arguments);
			}
		};
	};
	
	var vx = "each any all".split(/\s/);
	
	for (var j = 0 ; j < vx.length ; j++) {
		_[vx[j]] = _vector(_[vx[j]]);
	}
	
}());
(function () {
	var $D = Date;

	var flattenAndCompact = function (ax) {
		var rx = [];
		for (var i = 0; i < ax.length; i++) {
			if (ax[i] instanceof Array) {
				rx = rx.concat(flattenAndCompact(ax[i]));
			} else {
				if (ax[i]) {
					rx.push(ax[i]);
				}
			}
		}
		return rx;
	};

	var parseMeridian = function () {
		if (this.meridian && (this.hour || this.hour === 0)) {
			if (this.meridian === "a" && this.hour > 11 && Date.Config.strict24hr){
				throw "Invalid hour and meridian combination";
			} else if (this.meridian === "p" && this.hour < 12 && Date.Config.strict24hr){
				throw "Invalid hour and meridian combination";
			} else if (this.meridian === "p" && this.hour < 12) {
				this.hour = this.hour + 12;
			} else if (this.meridian === "a" && this.hour === 12) {
				this.hour = 0;
			}
		}
	};

	var setDefaults = function () {
		var now = new Date();
		if ((this.hour || this.minute) && (!this.month && !this.year && !this.day)) {
			this.day = now.getDate();
		}

		if (!this.year) {
			this.year = now.getFullYear();
		}
		
		if (!this.month && this.month !== 0) {
			this.month = now.getMonth();
		}
		
		if (!this.day) {
			this.day = 1;
		}
		
		if (!this.hour) {
			this.hour = 0;
		}
		
		if (!this.minute) {
			this.minute = 0;
		}

		if (!this.second) {
			this.second = 0;
		}
		if (!this.millisecond) {
			this.millisecond = 0;
		}
	};

	var finishUtils = {
		getToday: function () {
			 if (this.now || "hour minute second".indexOf(this.unit) !== -1) {
				return new Date();
			} else {
				return $D.today();
			}
		},
		setDaysFromWeekday: function (today, orient){
			var gap;
			orient = orient || 1;
			this.unit = "day";
			gap = ($D.getDayNumberFromName(this.weekday) - today.getDay());
			this.days = gap ? ((gap + (orient * 7)) % 7) : (orient * 7);
			return this;
		},
		setMonthsFromMonth: function (today, orient) {
			var gap;
			orient = orient || 1;
			this.unit = "month";
			gap = (this.month - today.getMonth());
			this.months = gap ? ((gap + (orient * 12)) % 12) : (orient * 12);
			this.month = null;
			return this;
		},
		setDMYFromWeekday: function () {
			var d = Date[this.weekday]();
			this.day = d.getDate();
			if (!this.month) {
				this.month = d.getMonth();
			}
			this.year = d.getFullYear();
			return this;
		},
		setUnitValue: function (orient) {
			if (!this.value && this.operator && this.operator !== null && this[this.unit + "s"] && this[this.unit + "s"] !== null) {
				this[this.unit + "s"] = this[this.unit + "s"] + ((this.operator === "add") ? 1 : -1) + (this.value||0) * orient;
			} else if (this[this.unit + "s"] == null || this.operator != null) {
				if (!this.value) {
					this.value = 1;
				}
				this[this.unit + "s"] = this.value * orient;
			}
		},
		generateDateFromWeeks: function () {
			var weekday = (this.weekday !== undefined) ? this.weekday : "today";
			var d = Date[weekday]().addWeeks(this.weeks);
			if (this.now) {
				d.setTimeToNow();
			}
			return d;
		}
	};

	$D.Translator = {
		hour: function (s) {
			return function () {
				this.hour = Number(s);
			};
		},
		minute: function (s) {
			return function () {
				this.minute = Number(s);
			};
		},
		second: function (s) {
			return function () {
				this.second = Number(s);
			};
		},
		/* for ss.s format */
		secondAndMillisecond: function (s) {
			return function () {
				var mx = s.match(/^([0-5][0-9])\.([0-9]{1,3})/);
				this.second = Number(mx[1]);
				this.millisecond = Number(mx[2]);
			};
		},
		meridian: function (s) {
			return function () {
				this.meridian = s.slice(0, 1).toLowerCase();
			};
		},
		timezone: function (s) {
			return function () {
				var n = s.replace(/[^\d\+\-]/g, "");
				if (n.length) {
					this.timezoneOffset = Number(n);
				} else {
					this.timezone = s.toLowerCase();
				}
			};
		},
		day: function (x) {
			var s = x[0];
			return function () {
				this.day = Number(s.match(/\d+/)[0]);
				if (this.day < 1) {
					throw "invalid day";
				}
			};
		},
		month: function (s) {
			return function () {
				this.month = (s.length === 3) ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4 : Number(s) - 1;
				if (this.month < 0) {
					throw "invalid month";
				}
			};
		},
		year: function (s) {
			return function () {
				var n = Number(s);
				this.year = ((s.length > 2) ? n :
					(n + (((n + 2000) < Date.CultureInfo.twoDigitYearMax) ? 2000 : 1900)));
			};
		},
		rday: function (s) {
			return function () {
				switch (s) {
					case "yesterday":
						this.days = -1;
						break;
					case "tomorrow":
						this.days = 1;
						break;
					case "today":
						this.days = 0;
						break;
					case "now":
						this.days = 0;
						this.now = true;
						break;
				}
			};
		},
		finishExact: function (x) {
			var d;
			x = (x instanceof Array) ? x : [x];

			for (var i = 0 ; i < x.length ; i++) {
				if (x[i]) {
					x[i].call(this);
				}
			}
			
			setDefaults.call(this);
			parseMeridian.call(this);

			if (this.day > $D.getDaysInMonth(this.year, this.month)) {
				throw new RangeError(this.day + " is not a valid value for days.");
			}

			d = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
			if (this.year < 100) {
				d.setFullYear(this.year); // means years less that 100 are process correctly. JS will parse it otherwise as 1900-1999.
			}
			if (this.timezone) {
				d.set({ timezone: this.timezone });
			} else if (this.timezoneOffset) {
				d.set({ timezoneOffset: this.timezoneOffset });
			}
			
			return d;
		},
		finish: function (x) {
			var today, expression, orient, temp;

			x = (x instanceof Array) ? flattenAndCompact(x) : [ x ];

			if (x.length === 0) {
				return null;
			}

			for (var i = 0 ; i < x.length ; i++) {
				if (typeof x[i] === "function") {
					x[i].call(this);
				}
			}
			if (this.now && !this.unit && !this.operator) {
				return new Date();
			} else {
				today = finishUtils.getToday.call(this);
			}
			
			expression = !!(this.days && this.days !== null || this.orient || this.operator);
			orient = ((this.orient === "past" || this.operator === "subtract") ? -1 : 1);

			if (this.month && this.unit === "week") {
				this.value = this.month + 1;
				delete this.month;
				delete this.day;
			}

			if ((this.month || this.month === 0) && "year day hour minute second".indexOf(this.unit) !== -1) {
				if (!this.value) {
					this.value = this.month + 1;
				}
				this.month = null;
				expression = true;
			}

			if (!expression && this.weekday && !this.day && !this.days) {
				finishUtils.setDMYFromWeekday.call(this);
			}

			if (expression && this.weekday && this.unit !== "month" && this.unit !== "week") {
				finishUtils.setDaysFromWeekday.call(this, today, orient);
			}

			if (this.weekday && this.unit !== "week" && !this.day && !this.days) {
				temp = Date[this.weekday]();
				this.day = temp.getDate();
				if (temp.getMonth() !== today.getMonth()) {
					this.month = temp.getMonth();
				}
			}

			if (this.month && this.unit === "day" && this.operator) {
				if (!this.value) {
					this.value = (this.month + 1);
				}
				this.month = null;
			}

			if (this.value != null && this.month != null && this.year != null) {
				this.day = this.value * 1;
			}

			if (this.month && !this.day && this.value) {
				today.set({ day: this.value * 1 });
				if (!expression) {
					this.day = this.value * 1;
				}
			}

			if (!this.month && this.value && this.unit === "month" && !this.now) {
				this.month = this.value;
				expression = true;
			}

			if (expression && (this.month || this.month === 0) && this.unit !== "year") {
				finishUtils.setMonthsFromMonth.call(this, today, orient);
			}

			if (!this.unit) {
				this.unit = "day";
			}

			finishUtils.setUnitValue.call(this, orient);
			parseMeridian.call(this);
			
			if ((this.month || this.month === 0) && !this.day) {
				this.day = 1;
			}

			if (!this.orient && !this.operator && this.unit === "week" && this.value && !this.day && !this.month) {
				return Date.today().setWeek(this.value);
			}

			if (this.unit === "week" && this.weeks && !this.day && !this.month) {
				return finishUtils.generateDateFromWeeks.call(this);
			}

			if (expression && this.timezone && this.day && this.days) {
				this.day = this.days;
			}

			if (expression){
				today.add(this);
			} else {
				today.set(this);
			}
			
			if (this.timezone) {
				this.timezone = this.timezone.toUpperCase();
				var offset = $D.getTimezoneOffset(this.timezone);
				var timezone;
				if (today.hasDaylightSavingTime()) {
					// lets check that we're being sane with timezone setting
					timezone = $D.getTimezoneAbbreviation(offset, today.isDaylightSavingTime());
					if (timezone !== this.timezone) {
						// bugger, we're in a place where things like EST vs EDT matters.
						if (today.isDaylightSavingTime()) {
							today.addHours(-1);
						} else {
							today.addHours(1);
						}
					}
				}
				today.setTimezoneOffset(offset);
			}

			return today;
		}
	};
}());
(function () {
	var $D = Date;
	$D.Grammar = {};
	var _ = $D.Parsing.Operators, g = $D.Grammar, t = $D.Translator, _fn;
	// Allow rolling up into general purpose rules
	_fn = function () {
		return _.each(_.any.apply(null, arguments), _.not(g.ctoken2("timeContext")));
	};
	
	g.datePartDelimiter = _.rtoken(/^([\s\-\.\,\/\x27]+)/);
	g.timePartDelimiter = _.stoken(":");
	g.whiteSpace = _.rtoken(/^\s*/);
	g.generalDelimiter = _.rtoken(/^(([\s\,]|at|@|on)+)/);
  
	var _C = {};
	g.ctoken = function (keys) {
		var fn = _C[keys];
		if (! fn) {
			var c = Date.CultureInfo.regexPatterns;
			var kx = keys.split(/\s+/), px = [];
			for (var i = 0; i < kx.length ; i++) {
				px.push(_.replace(_.rtoken(c[kx[i]]), kx[i]));
			}
			fn = _C[keys] = _.any.apply(null, px);
		}
		return fn;
	};
	g.ctoken2 = function (key) {
		return _.rtoken(Date.CultureInfo.regexPatterns[key]);
	};
	var cacheProcessRtoken = function (key, token, type, eachToken) {
		if (eachToken) {
			g[key] = _.cache(_.process(_.each(_.rtoken(token),_.optional(g.ctoken2(eachToken))), type));
		} else {
			g[key] = _.cache(_.process(_.rtoken(token), type));
		}
	};
	var cacheProcessCtoken = function (token, type) {
		return _.cache(_.process(g.ctoken2(token), type));
	};
	var _F = {}; //function cache

	var _get = function (f) {
		_F[f] = (_F[f] || g.format(f)[0]);
		return _F[f];
	};

	g.allformats = function (fx) {
		var rx = [];
		if (fx instanceof Array) {
			for (var i = 0; i < fx.length; i++) {
				rx.push(_get(fx[i]));
			}
		} else {
			rx.push(_get(fx));
		}
		return rx;
	};
  
	g.formats = function (fx) {
		if (fx instanceof Array) {
			var rx = [];
			for (var i = 0 ; i < fx.length ; i++) {
				rx.push(_get(fx[i]));
			}
			return _.any.apply(null, rx);
		} else {
			return _get(fx);
		}
	};

	var grammarFormats = {
		 timeFormats: function(){
			var i,
			RTokenKeys = [
				"h",
				"hh",
				"H",
				"HH",
				"m",
				"mm",
				"s",
				"ss",
				"ss.s",
				"z",
				"zz"
			],
			RToken = [
				/^(0[0-9]|1[0-2]|[1-9])/,
				/^(0[0-9]|1[0-2])/,
				/^([0-1][0-9]|2[0-3]|[0-9])/,
				/^([0-1][0-9]|2[0-3])/,
				/^([0-5][0-9]|[0-9])/,
				/^[0-5][0-9]/,
				/^([0-5][0-9]|[0-9])/,
				/^[0-5][0-9]/,
				/^[0-5][0-9]\.[0-9]{1,3}/,
				/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/,
				/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/
			],
			tokens = [
				t.hour,
				t.hour,
				t.hour,
				t.minute,
				t.minute,
				t.second,
				t.second,
				t.secondAndMillisecond,
				t.timezone,
				t.timezone,
				t.timezone
			];

			for (i=0; i < RTokenKeys.length; i++) {
				cacheProcessRtoken(RTokenKeys[i], RToken[i], tokens[i]);
			}

			g.hms = _.cache(_.sequence([g.H, g.m, g.s], g.timePartDelimiter));

			g.t = cacheProcessCtoken("shortMeridian", t.meridian);
			g.tt = cacheProcessCtoken("longMeridian", t.meridian);
			g.zzz = cacheProcessCtoken("timezone", t.timezone);

			g.timeSuffix = _.each(_.ignore(g.whiteSpace), _.set([ g.tt, g.zzz ]));
			g.time = _.each(_.optional(_.ignore(_.stoken("T"))), g.hms, g.timeSuffix);
		 },
		 dateFormats: function () {
			// pre-loaded rules for different date part order preferences
			var _setfn = function () {
				return  _.set(arguments, g.datePartDelimiter);
			};
			var i,
			RTokenKeys = [
				"d",
				"dd",
				"M",
				"MM",
				"y",
				"yy",
				"yyy",
				"yyyy"
			],
			RToken = [
				/^([0-2]\d|3[0-1]|\d)/,
				/^([0-2]\d|3[0-1])/,
				/^(1[0-2]|0\d|\d)/,
				/^(1[0-2]|0\d)/,
				/^(\d+)/,
				/^(\d\d)/,
				/^(\d\d?\d?\d?)/,
				/^(\d\d\d\d)/
			],
			tokens = [
				t.day,
				t.day,
				t.month,
				t.month,
				t.year,
				t.year,
				t.year,
				t.year
			],
			eachToken = [
				"ordinalSuffix",
				"ordinalSuffix"
			];
			for (i=0; i < RTokenKeys.length; i++) {
				cacheProcessRtoken(RTokenKeys[i], RToken[i], tokens[i], eachToken[i]);
			}

			g.MMM = g.MMMM = _.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), t.month));
			g.ddd = g.dddd = _.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),
				function (s) {
					return function () {
						this.weekday = s;
					};
				}
			));

			g.day = _fn(g.d, g.dd);
			g.month = _fn(g.M, g.MMM);
			g.year = _fn(g.yyyy, g.yy);

			g.mdy = _setfn(g.ddd, g.month, g.day, g.year);
			g.ymd = _setfn(g.ddd, g.year, g.month, g.day);
			g.dmy = _setfn(g.ddd, g.day, g.month, g.year);
						
			g.date = function (s) {
				return ((g[Date.CultureInfo.dateElementOrder] || g.mdy).call(this, s));
			};
		 },
		 relative: function () {
			// relative date / time expressions
			g.orientation = _.process(g.ctoken("past future"),
				function (s) {
					return function () {
						this.orient = s;
					};
				}
			);

			g.operator = _.process(g.ctoken("add subtract"),
				function (s) {
					return function () {
						this.operator = s;
					};
				}
			);
			g.rday = _.process(g.ctoken("yesterday tomorrow today now"), t.rday);
			g.unit = _.process(g.ctoken("second minute hour day week month year"),
				function (s) {
					return function () {
						this.unit = s;
					};
				}
			);
		 }
	};

	g.buildGrammarFormats = function () {
		// these need to be rebuilt every time the language changes.
		_C = {};

		grammarFormats.timeFormats();
		grammarFormats.dateFormats();
		grammarFormats.relative();

		
		g.value = _.process(_.rtoken(/^([-+]?\d+)?(st|nd|rd|th)?/),
			function (s) {
				return function () {
					this.value = s.replace(/\D/g, "");
				};
			}
		);
		g.expression = _.set([g.rday, g.operator, g.value, g.unit, g.orientation, g.ddd, g.MMM ]);

		g.format = _.process(_.many(
			_.any(
				// translate format specifiers into grammar rules
				_.process(
					_.rtoken(/^(dd?d?d?(?!e)|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),
						function (fmt) {
							if (g[fmt]) {
								return g[fmt];
							} else {
								throw $D.Parsing.Exception(fmt);
							}
						}
					),
					// translate separator tokens into token rules
					_.process(_.rtoken(/^[^dMyhHmstz]+/), // all legal separators 
						function (s) {
							return _.ignore(_.stoken(s));
						}
					)
				)
			),
			// construct the parser ...
			function (rules) {
				return _.process(_.each.apply(null, rules), t.finishExact);
			}
		);

		// starting rule for general purpose grammar
		g._start = _.process(_.set([ g.date, g.time, g.expression ],
		g.generalDelimiter, g.whiteSpace), t.finish);
	};

	g.buildGrammarFormats();
	// parsing date format specifiers - ex: "h:m:s tt" 
	// this little guy will generate a custom parser based
	// on the format string, ex: g.format("h:m:s tt")
	// check for these formats first
	g._formats = g.formats([
		"\"yyyy-MM-ddTHH:mm:ssZ\"",
		"yyyy-MM-ddTHH:mm:ss.sz",
		"yyyy-MM-ddTHH:mm:ssZ",
		"yyyy-MM-ddTHH:mm:ssz",
		"yyyy-MM-ddTHH:mm:ss",
		"yyyy-MM-ddTHH:mmZ",
		"yyyy-MM-ddTHH:mmz",
		"yyyy-MM-ddTHH:mm",
		"ddd, MMM dd, yyyy H:mm:ss tt",
		"ddd MMM d yyyy HH:mm:ss zzz",
		"MMddyyyy",
		"ddMMyyyy",
		"Mddyyyy",
		"ddMyyyy",
		"Mdyyyy",
		"dMyyyy",
		"yyyy",
		"Mdyy",
		"dMyy",
		"d"
	]);
	
	// real starting rule: tries selected formats first, 
	// then general purpose rule
	g.start = function (s) {
		try {
			var r = g._formats.call({}, s);
			if (r[1].length === 0) {
				return r;
			}
		} catch (e) {}
		return g._start.call({}, s);
	};
}());
(function () {
	var $D = Date;

	/**
	 * @desc Converts the specified string value into its JavaScript Date equivalent using CultureInfo specific format information.
	 * 
	 * Example
	<pre><code>
	///////////
	// Dates //
	///////////

	// 15-Oct-2004
	var d1 = Date.parse("10/15/2004");

	// 15-Oct-2004
	var d1 = Date.parse("15-Oct-2004");

	// 15-Oct-2004
	var d1 = Date.parse("2004.10.15");

	//Fri Oct 15, 2004
	var d1 = Date.parse("Fri Oct 15, 2004");

	///////////
	// Times //
	///////////

	// Today at 10 PM.
	var d1 = Date.parse("10 PM");

	// Today at 10:30 PM.
	var d1 = Date.parse("10:30 P.M.");

	// Today at 6 AM.
	var d1 = Date.parse("06am");

	/////////////////////
	// Dates and Times //
	/////////////////////

	// 8-July-2004 @ 10:30 PM
	var d1 = Date.parse("July 8th, 2004, 10:30 PM");

	// 1-July-2004 @ 10:30 PM
	var d1 = Date.parse("2004-07-01T22:30:00");

	////////////////////
	// Relative Dates //
	////////////////////

	// Returns today's date. The string "today" is culture specific.
	var d1 = Date.parse("today");

	// Returns yesterday's date. The string "yesterday" is culture specific.
	var d1 = Date.parse("yesterday");

	// Returns the date of the next thursday.
	var d1 = Date.parse("Next thursday");

	// Returns the date of the most previous monday.
	var d1 = Date.parse("last monday");

	// Returns today's day + one year.
	var d1 = Date.parse("next year");

	///////////////
	// Date Math //
	///////////////

	// Today + 2 days
	var d1 = Date.parse("t+2");

	// Today + 2 days
	var d1 = Date.parse("today + 2 days");

	// Today + 3 months
	var d1 = Date.parse("t+3m");

	// Today - 1 year
	var d1 = Date.parse("today - 1 year");

	// Today - 1 year
	var d1 = Date.parse("t-1y"); 


	/////////////////////////////
	// Partial Dates and Times //
	/////////////////////////////

	// July 15th of this year.
	var d1 = Date.parse("July 15");

	// 15th day of current day and year.
	var d1 = Date.parse("15");

	// July 1st of current year at 10pm.
	var d1 = Date.parse("7/1 10pm");
	</code></pre>
	 *
	 * @param {String}   The string value to convert into a Date object [Required]
	 * @return {Date}    A Date object or null if the string cannot be converted into a Date.
	 */
	var parseUtils = {
		removeOrds: function (s) {
			ords = s.match(/\b(\d+)(?:st|nd|rd|th)\b/); // find ordinal matches
			s = ((ords && ords.length === 2) ? s.replace(ords[0], ords[1]) : s);
			return s;
		},
		grammarParser: function (s) {
			var r = null;
			try {
				r = $D.Grammar.start.call({}, s.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"));
			} catch (e) {
				return null;
			}
			
			return ((r[1].length === 0) ? r[0] : null);
		},
		nativeFallback: function(s) {
			var t;
			try {
				// ok we haven't parsed it, last ditch attempt with the built-in parser.
				t = Date._parse(s);
				return (t || t === 0) ? new Date(t) : null;
			} catch (e) {
				return null;
			}
		}
	};
	function parse (s) {
		var d;
		if (!s) {
			return null;
		}
		if (s instanceof Date) {
			return s.clone();
		}
		if (s.length >= 4 && s.charAt(0) !== "0" && s.charAt(0) !== "+"&& s.charAt(0) !== "-") { // ie: 2004 will pass, 0800 won't.
			//  Start with specific formats
			d = $D.Parsing.ISO.parse(s) || $D.Parsing.Numeric.parse(s);
		}
		if (d instanceof Date && !isNaN(d.getTime())) {
			return d;
		} else {
			// find ordinal dates (1st, 3rd, 8th, etc and remove them as they cause parsing issues)
			s = $D.Parsing.Normalizer.parse(parseUtils.removeOrds(s));
			d = parseUtils.grammarParser(s);
			if (d !== null) {
				return d;
			} else {
				return parseUtils.nativeFallback(s);
			}
		}
	}

	if (!$D._parse) {
		$D._parse = $D.parse;
	}
	$D.parse = parse;

	Date.getParseFunction = function (fx) {
		var fns = Date.Grammar.allformats(fx);
		return function (s) {
			var r = null;
			for (var i = 0; i < fns.length; i++) {
				try {
					r = fns[i].call({}, s);
				} catch (e) {
					continue;
				}
				if (r[1].length === 0) {
					return r[0];
				}
			}
			return null;
		};
	};
	
	/**
	 * Converts the specified string value into its JavaScript Date equivalent using the specified format {String} or formats {Array} and the CultureInfo specific format information.
	 * The format of the string value must match one of the supplied formats exactly.
	 * 
	 * Example
	<pre><code>
	// 15-Oct-2004
	var d1 = Date.parseExact("10/15/2004", "M/d/yyyy");

	// 15-Oct-2004
	var d1 = Date.parse("15-Oct-2004", "M-ddd-yyyy");

	// 15-Oct-2004
	var d1 = Date.parse("2004.10.15", "yyyy.MM.dd");

	// Multiple formats
	var d1 = Date.parseExact("10/15/2004", ["M/d/yyyy", "MMMM d, yyyy"]);
	</code></pre>
	 *
	 * @param {String}   The string value to convert into a Date object [Required].
	 * @param {Object}   The expected format {String} or an array of expected formats {Array} of the date string [Required].
	 * @return {Date}    A Date object or null if the string cannot be converted into a Date.
	 */
	$D.parseExact = function (s, fx) {
		return $D.getParseFunction(fx)(s);
	};
}());

(function () {
	var $D = Date,
		$P = $D.prototype,
		// $C = $D.CultureInfo, // not used atm
		p = function (s, l) {
			if (!l) {
				l = 2;
			}
			return ("000" + s).slice(l * -1);
		};
	/**
	 * Converts a PHP format string to Java/.NET format string.
	 * A PHP format string can be used with ._format or .format.
	 * A Java/.NET format string can be used with .toString().
	 * The .parseExact function will only accept a Java/.NET format string
	 *
	 * Example
	 * var f1 = "%m/%d/%y"
	 * var f2 = Date.normalizeFormat(f1);	// "MM/dd/yy"
	 *
	 * new Date().format(f1);	// "04/13/08"
	 * new Date()._format(f1);	// "04/13/08"
	 * new Date().toString(f2);	// "04/13/08"
	 *
	 * var date = Date.parseExact("04/13/08", f2); // Sun Apr 13 2008
	 *
	 * @param {String}   A PHP format string consisting of one or more format spcifiers.
	 * @return {String}  The PHP format converted to a Java/.NET format string.
	 */
	 var normalizerSubstitutions = {
		"d" : "dd",
		"%d": "dd",
		"D" : "ddd",
		"%a": "ddd",
		"j" : "dddd",
		"l" : "dddd",
		"%A": "dddd",
		"S" : "S",
		"F" : "MMMM",
		"%B": "MMMM",
		"m" : "MM",
		"%m": "MM",
		"M" : "MMM",
		"%b": "MMM",
		"%h": "MMM",
		"n" : "M",
		"Y" : "yyyy",
		"%Y": "yyyy",
		"y" : "yy",
		"%y": "yy",
		"g" : "h",
		"%I": "h",
		"G" : "H",
		"h" : "hh",
		"H" : "HH",
		"%H": "HH",
		"i" : "mm",
		"%M": "mm",
		"s" : "ss",
		"%S": "ss",
		"%r": "hh:mm tt",
		"%R": "H:mm",
		"%T": "H:mm:ss",
		"%X": "t",
		"%x": "d",
		"%e": "d",
		"%D": "MM/dd/yy",
		"%n": "\\n",
		"%t": "\\t",
		"e" : "z",
		"T" : "z",
		"%z": "z",
		"%Z": "z",
		"Z" : "ZZ",
		"N" : "u",
		"w" : "u",
		"%w": "u",
		"W" : "W",
		"%V": "W"
	};
	var normalizer = {
		substitutes: function (m) {
			return normalizerSubstitutions[m];
		},
		interpreted: function (m, x) {
			var y;
			switch (m) {
				case "%u":
					return x.getDay() + 1;
				case "z":
					return x.getOrdinalNumber();
				case "%j":
					return p(x.getOrdinalNumber(), 3);
				case "%U":
					var d1 = x.clone().set({month: 0, day: 1}).addDays(-1).moveToDayOfWeek(0),
						d2 = x.clone().addDays(1).moveToDayOfWeek(0, -1);
					return (d2 < d1) ? "00" : p((d2.getOrdinalNumber() - d1.getOrdinalNumber()) / 7 + 1);

				case "%W":
					return p(x.getWeek());
				case "t":
					return $D.getDaysInMonth(x.getFullYear(), x.getMonth());
				case "o":
				case "%G":
					return x.setWeek(x.getISOWeek()).toString("yyyy");
				case "%g":
					return x._format("%G").slice(-2);
				case "a":
				case "%p":
					return t("tt").toLowerCase();
				case "A":
					return t("tt").toUpperCase();
				case "u":
					return p(x.getMilliseconds(), 3);
				case "I":
					return (x.isDaylightSavingTime()) ? 1 : 0;
				case "O":
					return x.getUTCOffset();
				case "P":
					y = x.getUTCOffset();
					return y.substring(0, y.length - 2) + ":" + y.substring(y.length - 2);
				case "B":
					var now = new Date();
					return Math.floor(((now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds() + (now.getTimezoneOffset() + 60) * 60) / 86.4);
				case "c":
					return x.toISOString().replace(/\"/g, "");
				case "U":
					return $D.strtotime("now");
				case "%c":
					return t("d") + " " + t("t");
				case "%C":
					return Math.floor(x.getFullYear() / 100 + 1);
			}
		},
		shouldOverrideDefaults: function (m) {
			switch (m) {
				case "%e":
					return true;
				default:
					return false;
			}
		},
		parse: function (m, context) {
			var formatString, c = context || new Date();
			formatString = normalizer.substitutes(m);
			if (formatString) {
				return formatString;
			}
			formatString = normalizer.interpreted(m, c);

			if (formatString) {
				return formatString;
			} else {
				return m;
			}
		}
	};

	$D.normalizeFormat = function (format, context) {
		return format.replace(/(%|\\)?.|%%/g, function(t){
				return normalizer.parse(t, context);
		});
	};
	/**
	 * Format a local Unix timestamp according to locale settings
	 *
	 * Example:
	 * Date.strftime("%m/%d/%y", new Date());		// "04/13/08"
	 * Date.strftime("c", "2008-04-13T17:52:03Z");	// "04/13/08"
	 *
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @param {Number|String}   The number representing the number of seconds that have elapsed since January 1, 1970 (local time).
	 * @return {String}  A string representation of the current Date object.
	 */
	$D.strftime = function (format, time) {
		var d = Date.parse(time);
		return d._format(format);
	};
	/**
	 * Parse any textual datetime description into a Unix timestamp.
	 * A Unix timestamp is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
	 *
	 * Example:
	 * Date.strtotime("04/13/08");				// 1208044800
	 * Date.strtotime("1970-01-01T00:00:00Z");	// 0
	 *
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @param {Object}   A string or date object.
	 * @return {String}  A string representation of the current Date object.
	 */
	$D.strtotime = function (time) {
		var d = $D.parse(time);
		return Math.round($D.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()) / 1000);
	};
	/**
	 * Converts the value of the current Date object to its equivalent string representation using a PHP/Unix style of date format specifiers.
	 * Format Specifiers
	 * Format  Description																	Example
	 * ------  ---------------------------------------------------------------------------	-----------------------
	 * %a		abbreviated weekday name according to the current localed					"Mon" through "Sun"
	 * %A		full weekday name according to the current localed							"Sunday" through "Saturday"
	 * %b		abbreviated month name according to the current localed						"Jan" through "Dec"
	 * %B		full month name according to the current locale								"January" through "December"
	 * %c		preferred date and time representation for the current locale				"4/13/2008 12:33 PM"
	 * %C		century number (the year divided by 100 and truncated to an integer)		"00" to "99"
	 * %d		day of the month as a decimal number										"01" to "31"
	 * %D		same as %m/%d/%y															"04/13/08"
	 * %e		day of the month as a decimal number, a single digit is preceded by a space	"1" to "31"
	 * %g		like %G, but without the century											"08"
	 * %G		The 4-digit year corresponding to the ISO week number (see %V).				"2008"
	 *		This has the same format and value as %Y, except that if the ISO week number
	 *		belongs to the previous or next year, that year is used instead.
	 * %h		same as %b																	"Jan" through "Dec"
	 * %H		hour as a decimal number using a 24-hour clock.								"00" to "23"
	 * %I		hour as a decimal number using a 12-hour clock.								"01" to "12"
	 * %j		day of the year as a decimal number.										"001" to "366"
	 * %m		month as a decimal number.													"01" to "12"
	 * %M		minute as a decimal number.													"00" to "59"
	 * %n		newline character		"\n"
	 * %p		either "am" or "pm" according to the given time value, or the				"am" or "pm"
	 *		corresponding strings for the current locale.
	 * %r		time in a.m. and p.m. notation												"8:44 PM"
	 * %R		time in 24 hour notation													"20:44"
	 * %S		second as a decimal number													"00" to "59"
	 * %t		tab character																"\t"
	 * %T		current time, equal to %H:%M:%S												"12:49:11"
	 * %u		weekday as a decimal number ["1", "7"], with "1" representing Monday		"1" to "7"
	 * %U		week number of the current year as a decimal number, starting with the		"0" to ("52" or "53")
	 *		first Sunday as the first day of the first week
	 * %V		The ISO 8601:1988 week number of the current year as a decimal number,		"00" to ("52" or "53")
	 *		range 01 to 53, where week 1 is the first week that has at least 4 days
	 *		in the current year, and with Monday as the first day of the week.
	 *		(Use %G or %g for the year component that corresponds to the week number
	 *		for the specified timestamp.)
	 * %W		week number of the current year as a decimal number, starting with the		"00" to ("52" or "53")
	 *		first Monday as the first day of the first week
	 * %w		day of the week as a decimal, Sunday being "0"								"0" to "6"
	 * %x		preferred date representation for the current locale without the time		"4/13/2008"
	 * %X		preferred time representation for the current locale without the date		"12:53:05"
	 * %y		year as a decimal number without a century									"00" "99"
	 * %Y		year as a decimal number including the century								"2008"
	 * %Z		time zone or name or abbreviation											"UTC", "EST", "PST"
	 * %z		same as %Z
	 * %%		a literal "%" characters													"%"
	 * d		Day of the month, 2 digits with leading zeros								"01" to "31"
	 * D		A textual representation of a day, three letters							"Mon" through "Sun"
	 * j		Day of the month without leading zeros										"1" to "31"
	 * l		A full textual representation of the day of the week (lowercase "L")		"Sunday" through "Saturday"
	 * N		ISO-8601 numeric representation of the day of the week (added in PHP 5.1.0)	"1" (for Monday) through "7" (for Sunday)
	 * S		English ordinal suffix for the day of the month, 2 characters				"st", "nd", "rd" or "th". Works well with j
	 * w		Numeric representation of the day of the week								"0" (for Sunday) through "6" (for Saturday)
	 * z		The day of the year (starting from "0")										"0" through "365"
	 * W		ISO-8601 week number of year, weeks starting on Monday						"00" to ("52" or "53")
	 * F		A full textual representation of a month, such as January or March			"January" through "December"
	 * m		Numeric representation of a month, with leading zeros						"01" through "12"
	 * M		A short textual representation of a month, three letters					"Jan" through "Dec"
	 * n		Numeric representation of a month, without leading zeros					"1" through "12"
	 * t		Number of days in the given month											"28" through "31"
	 * L		Whether it's a leap year													"1" if it is a leap year, "0" otherwise
	 * o		ISO-8601 year number. This has the same value as Y, except that if the		"2008"
	 *		ISO week number (W) belongs to the previous or next year, that year
	 *		is used instead.
	 * Y		A full numeric representation of a year, 4 digits							"2008"
	 * y		A two digit representation of a year										"08"
	 * a		Lowercase Ante meridiem and Post meridiem									"am" or "pm"
	 * A		Uppercase Ante meridiem and Post meridiem									"AM" or "PM"
	 * B		Swatch Internet time														"000" through "999"
	 * g		12-hour format of an hour without leading zeros								"1" through "12"
	 * G		24-hour format of an hour without leading zeros								"0" through "23"
	 * h		12-hour format of an hour with leading zeros								"01" through "12"
	 * H		24-hour format of an hour with leading zeros								"00" through "23"
	 * i		Minutes with leading zeros													"00" to "59"
	 * s		Seconds, with leading zeros													"00" through "59"
	 * u		Milliseconds																"54321"
	 * e		Timezone identifier															"UTC", "EST", "PST"
	 * I		Whether or not the date is in daylight saving time (uppercase i)			"1" if Daylight Saving Time, "0" otherwise
	 * O		Difference to Greenwich time (GMT) in hours									"+0200", "-0600"
	 * P		Difference to Greenwich time (GMT) with colon between hours and minutes		"+02:00", "-06:00"
	 * T		Timezone abbreviation														"UTC", "EST", "PST"
	 * Z		Timezone offset in seconds. The offset for timezones west of UTC is			"-43200" through "50400"
	 *			always negative, and for those east of UTC is always positive.
	 * c		ISO 8601 date																"2004-02-12T15:19:21+00:00"
	 * r		RFC 2822 formatted date														"Thu, 21 Dec 2000 16:01:07 +0200"
	 * U		Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)					"0"
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @return {String}  A string representation of the current Date object.
	 */
	var formatReplace = function (context) {
		return function (m) {
			var formatString, override = false;
			if (m.charAt(0) === "\\" || m.substring(0, 2) === "%%") {
				return m.replace("\\", "").replace("%%", "%");
			}

			override = normalizer.shouldOverrideDefaults(m);
			formatString = $D.normalizeFormat(m, context);
			if (formatString) {
				return context.toString(formatString, override);
			}
		};
	};
	$P._format = function (format) {
		var formatter = formatReplace(this);
		if (!format) {
			return this._toString();
		} else {
			return format.replace(/(%|\\)?.|%%/g, formatter);
		}
	};

	if (!$P.format) {
		$P.format = $P._format;
	}
}());
(function () {
	"use strict";
	var gFn = function (attr) {
		return function () {
			return this[attr];
		};
	};
	
	var sFn = function (attr) {
		return function (val) {
			this[attr] = val;
			return this;
		};
	};
	var attrs = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];
	var addSetFuncs = function (context, attrs) {
		for (var i = 0; i < attrs.length ; i++) {
			var $a = attrs[i], $b = $a.slice(0, 1).toUpperCase() + $a.slice(1);
			context.prototype[$a] = 0;
			context.prototype["get" + $b] = gFn($a);
			context.prototype["set" + $b] = sFn($a);
		}
	};
	/**
	 * new TimeSpan(milliseconds);
	 * new TimeSpan(days, hours, minutes, seconds);
	 * new TimeSpan(days, hours, minutes, seconds, milliseconds);
	 */
	var TimeSpan = function (days, hours, minutes, seconds, milliseconds) {
		if (arguments.length === 1 && typeof days === "number") {
			var orient = (days < 0) ? -1 : +1;
			var millsLeft = Math.abs(days);
			this.setDays(Math.floor(millsLeft / 86400000) * orient);
			millsLeft = millsLeft % 86400000;
			this.setHours(Math.floor(millsLeft / 3600000) * orient);
			millsLeft = millsLeft % 3600000;
			this.setMinutes(Math.floor(millsLeft / 60000) * orient);
			millsLeft = millsLeft % 60000;
			this.setSeconds(Math.floor(millsLeft / 1000) * orient);
			millsLeft = millsLeft % 1000;
			this.setMilliseconds(millsLeft * orient);
		} else {
			this.set(days, hours, minutes, seconds, milliseconds);
		}

		this.getTotalMilliseconds = function () {
			return	(this.getDays() * 86400000) +
					(this.getHours() * 3600000) +
					(this.getMinutes() * 60000) +
					(this.getSeconds() * 1000);
		};
		
		this.compareTo = function (time) {
			var t1 = new Date(1970, 1, 1, this.getHours(), this.getMinutes(), this.getSeconds()), t2;
			if (time === null) {
				t2 = new Date(1970, 1, 1, 0, 0, 0);
			}
			else {
				t2 = new Date(1970, 1, 1, time.getHours(), time.getMinutes(), time.getSeconds());
			}
			return (t1 < t2) ? -1 : (t1 > t2) ? 1 : 0;
		};

		this.equals = function (time) {
			return (this.compareTo(time) === 0);
		};

		this.add = function (time) {
			return (time === null) ? this : this.addSeconds(time.getTotalMilliseconds() / 1000);
		};

		this.subtract = function (time) {
			return (time === null) ? this : this.addSeconds(-time.getTotalMilliseconds() / 1000);
		};

		this.addDays = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 86400000));
		};

		this.addHours = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 3600000));
		};

		this.addMinutes = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 60000));
		};

		this.addSeconds = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 1000));
		};

		this.addMilliseconds = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + n);
		};

		this.get12HourHour = function () {
			return (this.getHours() > 12) ? this.getHours() - 12 : (this.getHours() === 0) ? 12 : this.getHours();
		};

		this.getDesignator = function () {
			return (this.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
		};

		this.toString = function (format) {
			this._toString = function () {
				if (this.getDays() !== null && this.getDays() > 0) {
					return this.getDays() + "." + this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds());
				} else {
					return this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds());
				}
			};
			
			this.p = function (s) {
				return (s.toString().length < 2) ? "0" + s : s;
			};
			
			var me = this;
			
			return format ? format.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g,
			function (format) {
				switch (format) {
				case "d":
					return me.getDays();
				case "dd":
					return me.p(me.getDays());
				case "H":
					return me.getHours();
				case "HH":
					return me.p(me.getHours());
				case "h":
					return me.get12HourHour();
				case "hh":
					return me.p(me.get12HourHour());
				case "m":
					return me.getMinutes();
				case "mm":
					return me.p(me.getMinutes());
				case "s":
					return me.getSeconds();
				case "ss":
					return me.p(me.getSeconds());
				case "t":
					return ((me.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator).substring(0, 1);
				case "tt":
					return (me.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
				}
			}
			) : this._toString();
		};
		return this;
	};
	addSetFuncs(TimeSpan, attrs.slice(2));
	TimeSpan.prototype.set = function (days, hours, minutes, seconds, milliseconds){
		this.setDays(days || this.getDays());
		this.setHours(hours || this.getHours());
		this.setMinutes(minutes || this.getMinutes());
		this.setSeconds(seconds || this.getSeconds());
		this.setMilliseconds(milliseconds || this.getMilliseconds());
	};


	/**
	 * Gets the time of day for this date instances. 
	 * @return {TimeSpan} TimeSpan
	 */
	Date.prototype.getTimeOfDay = function () {
		return new TimeSpan(0, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
	};

	Date.TimeSpan = TimeSpan;

	if (typeof window !== "undefined" ) {
		// keeping API compatible for v1.x 
		window.TimeSpan = TimeSpan;
	}
}());
(function () {
	"use strict";
	var attrs = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];
	var gFn = function (attr) {
		return function () {
			return this[attr];
		};
	};
	
	var sFn = function (attr) {
		return function (val) {
			this[attr] = val;
			return this;
		};
	};
	var addSetFuncs = function (context, attrs) {
		for (var i = 0; i < attrs.length ; i++) {
			var $a = attrs[i], $b = $a.slice(0, 1).toUpperCase() + $a.slice(1);
			context.prototype[$a] = 0;
			context.prototype["get" + $b] = gFn($a);
			context.prototype["set" + $b] = sFn($a);
		}
	};

	var setMonthsAndYears = function (orient, d1, d2, context) {
		function inc() {
			d1.addMonths(-orient);
			context.months++;
			if (context.months === 12) {
				context.years++;
				context.months = 0;
			}
		}
		if (orient === +1) {
			while (d1 > d2) {
				inc();
			}
		} else {
			while (d1 < d2) {
				inc();
			}
		}
		context.months--;
		context.months *= orient;
		context.years *= orient;
	};

	var adjustForDST = function(orient, startDate, endDate) {
		var hasDSTMismatch = (false === (startDate.isDaylightSavingTime() === endDate.isDaylightSavingTime()));
		if (hasDSTMismatch && orient === 1) {
			startDate.addHours(-1);
		} else if (hasDSTMismatch) {
			startDate.addHours(1);
		}
	};
	/**
	 * TimePeriod(startDate, endDate);
	 * TimePeriod(years, months, days, hours, minutes, seconds, milliseconds);
	 */
	var TimePeriod = function (years, months, days, hours, minutes, seconds, milliseconds) {
		if (arguments.length === 7) {
			this.set(years, months, days, hours, minutes, seconds, milliseconds);
		} else if (arguments.length === 2 && arguments[0] instanceof Date && arguments[1] instanceof Date) {
			var startDate = arguments[0].clone();
			var endDate = arguments[1].clone();
			var orient = (startDate > endDate) ? +1 : -1;
			this.dates = {
				start: arguments[0].clone(),
				end: arguments[1].clone()
			};

			setMonthsAndYears(orient, startDate, endDate, this);
			adjustForDST(orient, startDate, endDate);
			// // TODO - adjust for DST
			var diff = endDate - startDate;
			if (diff !== 0) {
				var ts = new TimeSpan(diff);
				this.set(this.years, this.months, ts.getDays(), ts.getHours(), ts.getMinutes(), ts.getSeconds(), ts.getMilliseconds());
			}
		}
		return this;
	};
	// create all the set functions.
	addSetFuncs(TimePeriod, attrs);
	TimePeriod.prototype.set = function (years, months, days, hours, minutes, seconds, milliseconds){
		this.setYears(years || this.getYears());
		this.setMonths(months || this.getMonths());
		this.setDays(days || this.getDays());
		this.setHours(hours || this.getHours());
		this.setMinutes(minutes || this.getMinutes());
		this.setSeconds(seconds || this.getSeconds());
		this.setMilliseconds(milliseconds || this.getMilliseconds());
	};

	Date.TimePeriod = TimePeriod;

	if (typeof window !== "undefined") {
		// keeping API compatible for v1.x 
		window.TimePeriod = TimePeriod;
	}
}());
/*!
 * JQVMap: jQuery Vector Map Library
 * @author JQVMap <me@peterschmalfeldt.com>
 * @version 1.5.1
 * @link http://jqvmap.com
 * @license https://github.com/manifestinteractive/jqvmap/blob/master/LICENSE
 * @builddate 2016/05/18
 */

var VectorCanvas = function (width, height, params) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';
  this.params = params;

  if (this.mode === 'svg') {
    this.createSvgNode = function (nodeName) {
      return document.createElementNS(this.svgns, nodeName);
    };
  } else {
    try {
      if (!document.namespaces.rvml) {
        document.namespaces.add('rvml', 'urn:schemas-microsoft-com:vml');
      }
      this.createVmlNode = function (tagName) {
        return document.createElement('<rvml:' + tagName + ' class="rvml">');
      };
    } catch (e) {
      this.createVmlNode = function (tagName) {
        return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
      };
    }

    document.createStyleSheet().addRule('.rvml', 'behavior:url(#default#VML)');
  }

  if (this.mode === 'svg') {
    this.canvas = this.createSvgNode('svg');
  } else {
    this.canvas = this.createVmlNode('group');
    this.canvas.style.position = 'absolute';
  }

  this.setSize(width, height);
};

VectorCanvas.prototype = {
  svgns: 'http://www.w3.org/2000/svg',
  mode: 'svg',
  width: 0,
  height: 0,
  canvas: null
};

var ColorScale = function (colors, normalizeFunction, minValue, maxValue) {
  if (colors) {
    this.setColors(colors);
  }
  if (normalizeFunction) {
    this.setNormalizeFunction(normalizeFunction);
  }
  if (minValue) {
    this.setMin(minValue);
  }
  if (minValue) {
    this.setMax(maxValue);
  }
};

ColorScale.prototype = {
  colors: []
};

var JQVMap = function (params) {
  params = params || {};
  var map = this;
  var mapData = JQVMap.maps[params.map];
  var mapPins;

  if( !mapData){
    throw new Error('Invalid "' + params.map + '" map parameter. Please make sure you have loaded this map file in your HTML.');
  }

  this.selectedRegions = [];
  this.multiSelectRegion = params.multiSelectRegion;

  this.container = params.container;

  this.defaultWidth = mapData.width;
  this.defaultHeight = mapData.height;

  this.color = params.color;
  this.selectedColor = params.selectedColor;
  this.hoverColor = params.hoverColor;
  this.hoverColors = params.hoverColors;
  this.hoverOpacity = params.hoverOpacity;
  this.setBackgroundColor(params.backgroundColor);

  this.width = params.container.width();
  this.height = params.container.height();

  this.resize();

  jQuery(window).resize(function () {
    var newWidth = params.container.width();
    var newHeight = params.container.height();

    if(newWidth && newHeight){
      map.width = newWidth;
      map.height = newHeight;
      map.resize();
      map.canvas.setSize(map.width, map.height);
      map.applyTransform();

      var resizeEvent = jQuery.Event('resize.jqvmap');
      jQuery(params.container).trigger(resizeEvent, [newWidth, newHeight]);

      if(mapPins){
        jQuery('.jqvmap-pin').remove();
        map.pinHandlers = false;
        map.placePins(mapPins.pins, mapPins.mode);
      }
    }
  });

  this.canvas = new VectorCanvas(this.width, this.height, params);
  params.container.append(this.canvas.canvas);

  this.makeDraggable();

  this.rootGroup = this.canvas.createGroup(true);

  this.index = JQVMap.mapIndex;
  this.label = jQuery('<div/>').addClass('jqvmap-label').appendTo(jQuery('body')).hide();

  if (params.enableZoom) {
    jQuery('<div/>').addClass('jqvmap-zoomin').text('+').appendTo(params.container);
    jQuery('<div/>').addClass('jqvmap-zoomout').html('&#x2212;').appendTo(params.container);
  }

  map.countries = [];

  for (var key in mapData.paths) {
    var path = this.canvas.createPath({
      path: mapData.paths[key].path
    });

    path.setFill(this.color);
    path.id = map.getCountryId(key);
    map.countries[key] = path;

    if (this.canvas.mode === 'svg') {
      path.setAttribute('class', 'jqvmap-region');
    } else {
      jQuery(path).addClass('jqvmap-region');
    }

    jQuery(this.rootGroup).append(path);
  }

  jQuery(params.container).delegate(this.canvas.mode === 'svg' ? 'path' : 'shape', 'mouseover mouseout', function (e) {
    var containerPath = e.target,
      code = e.target.id.split('_').pop(),
      labelShowEvent = jQuery.Event('labelShow.jqvmap'),
      regionMouseOverEvent = jQuery.Event('regionMouseOver.jqvmap');

    code = code.toLowerCase();

    if (e.type === 'mouseover') {
      jQuery(params.container).trigger(regionMouseOverEvent, [code, mapData.paths[code].name]);
      if (!regionMouseOverEvent.isDefaultPrevented()) {
        map.highlight(code, containerPath);
      }
      if (params.showTooltip) {
        map.label.text(mapData.paths[code].name);
        jQuery(params.container).trigger(labelShowEvent, [map.label, code]);

        if (!labelShowEvent.isDefaultPrevented()) {
          map.label.show();
          map.labelWidth = map.label.width();
          map.labelHeight = map.label.height();
        }
      }
    } else {
      map.unhighlight(code, containerPath);

      map.label.hide();
      jQuery(params.container).trigger('regionMouseOut.jqvmap', [code, mapData.paths[code].name]);
    }
  });

  jQuery(params.container).delegate(this.canvas.mode === 'svg' ? 'path' : 'shape', 'click', function (regionClickEvent) {

    var targetPath = regionClickEvent.target;
    var code = regionClickEvent.target.id.split('_').pop();
    var mapClickEvent = jQuery.Event('regionClick.jqvmap');

    code = code.toLowerCase();

    jQuery(params.container).trigger(mapClickEvent, [code, mapData.paths[code].name]);

    if ( !params.multiSelectRegion && !mapClickEvent.isDefaultPrevented()) {
      for (var keyPath in mapData.paths) {
        map.countries[keyPath].currentFillColor = map.countries[keyPath].getOriginalFill();
        map.countries[keyPath].setFill(map.countries[keyPath].getOriginalFill());
      }
    }

    if ( !mapClickEvent.isDefaultPrevented()) {
      if (map.isSelected(code)) {
        map.deselect(code, targetPath);
      } else {
        map.select(code, targetPath);
      }
    }
  });

  if (params.showTooltip) {
    params.container.mousemove(function (e) {
      if (map.label.is(':visible')) {
        var left = e.pageX - 15 - map.labelWidth;
        var top = e.pageY - 15 - map.labelHeight;

        if(left < 0) {
          left = e.pageX + 15;
        }
        if(top < 0) {
          top = e.pageY + 15;
        }

        map.label.css({
          left: left,
          top: top
        });
      }
    });
  }

  this.setColors(params.colors);

  this.canvas.canvas.appendChild(this.rootGroup);

  this.applyTransform();

  this.colorScale = new ColorScale(params.scaleColors, params.normalizeFunction, params.valueMin, params.valueMax);

  if (params.values) {
    this.values = params.values;
    this.setValues(params.values);
  }

  if (params.selectedRegions) {
    if (params.selectedRegions instanceof Array) {
      for(var k in params.selectedRegions) {
        this.select(params.selectedRegions[k].toLowerCase());
      }
    } else {
      this.select(params.selectedRegions.toLowerCase());
    }
  }

  this.bindZoomButtons();

  if(params.pins) {
    mapPins = {
      pins: params.pins,
      mode: params.pinMode
    };

    this.pinHandlers = false;
    this.placePins(params.pins, params.pinMode);
  }

  if(params.showLabels){
    this.pinHandlers = false;

    var pins = {};
    for (key in map.countries){
      if (typeof map.countries[key] !== 'function') {
        if( !params.pins || !params.pins[key] ){
          pins[key] = key.toUpperCase();
        }
      }
    }

    mapPins = {
      pins: pins,
      mode: 'content'
    };

    this.placePins(pins, 'content');
  }

  JQVMap.mapIndex++;
};

JQVMap.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,
  width: 0,
  height: 0,
  countries: {},
  countriesColors: {},
  countriesData: {},
  zoomStep: 1.4,
  zoomMaxStep: 4,
  zoomCurStep: 1
};

JQVMap.xlink = 'http://www.w3.org/1999/xlink';
JQVMap.mapIndex = 1;
JQVMap.maps = {};

(function(){

  var apiParams = {
    colors: 1,
    values: 1,
    backgroundColor: 1,
    scaleColors: 1,
    normalizeFunction: 1,
    enableZoom: 1,
    showTooltip: 1,
    borderColor: 1,
    borderWidth: 1,
    borderOpacity: 1,
    selectedRegions: 1,
    multiSelectRegion: 1
  };

  var apiEvents = {
    onLabelShow: 'labelShow',
    onLoad: 'load',
    onRegionOver: 'regionMouseOver',
    onRegionOut: 'regionMouseOut',
    onRegionClick: 'regionClick',
    onRegionSelect: 'regionSelect',
    onRegionDeselect: 'regionDeselect',
    onResize: 'resize'
  };

  jQuery.fn.vectorMap = function (options) {

    var defaultParams = {
      map: 'world_en',
      backgroundColor: '#a5bfdd',
      color: '#f4f3f0',
      hoverColor: '#c9dfaf',
      hoverColors: {},
      selectedColor: '#c9dfaf',
      scaleColors: ['#b6d6ff', '#005ace'],
      normalizeFunction: 'linear',
      enableZoom: true,
      showTooltip: true,
      borderColor: '#818181',
      borderWidth: 1,
      borderOpacity: 0.25,
      selectedRegions: null,
      multiSelectRegion: false
    }, map = this.data('mapObject');

    if (options === 'addMap') {
      JQVMap.maps[arguments[1]] = arguments[2];
    } else if (options === 'set' && apiParams[arguments[1]]) {
      map['set' + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(map, Array.prototype.slice.call(arguments, 2));
    } else if (typeof options === 'string' &&
      typeof map[options] === 'function') {
      return map[options].apply(map, Array.prototype.slice.call(arguments, 1));
    } else {
      jQuery.extend(defaultParams, options);
      defaultParams.container = this;
      this.css({ position: 'relative', overflow: 'hidden' });

      map = new JQVMap(defaultParams);

      this.data('mapObject', map);

      this.unbind('.jqvmap');

      for (var e in apiEvents) {
        if (defaultParams[e]) {
          this.bind(apiEvents[e] + '.jqvmap', defaultParams[e]);
        }
      }

      var loadEvent = jQuery.Event('load.jqvmap');
      jQuery(defaultParams.container).trigger(loadEvent, map);

      return map;
    }
  };

})(jQuery);

ColorScale.arrayToRgb = function (ar) {
  var rgb = '#';
  var d;
  for (var i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length === 1 ? '0' + d : d;
  }
  return rgb;
};

ColorScale.prototype.getColor = function (value) {
  if (typeof this.normalize === 'function') {
    value = this.normalize(value);
  }

  var lengthes = [];
  var fullLength = 0;
  var l;

  for (var i = 0; i < this.colors.length - 1; i++) {
    l = this.vectorLength(this.vectorSubtract(this.colors[i + 1], this.colors[i]));
    lengthes.push(l);
    fullLength += l;
  }

  var c = (this.maxValue - this.minValue) / fullLength;

  for (i = 0; i < lengthes.length; i++) {
    lengthes[i] *= c;
  }

  i = 0;
  value -= this.minValue;

  while (value - lengthes[i] >= 0) {
    value -= lengthes[i];
    i++;
  }

  var color;
  if (i === this.colors.length - 1) {
    color = this.vectorToNum(this.colors[i]).toString(16);
  } else {
    color = (this.vectorToNum(this.vectorAdd(this.colors[i], this.vectorMult(this.vectorSubtract(this.colors[i + 1], this.colors[i]), (value) / (lengthes[i]))))).toString(16);
  }

  while (color.length < 6) {
    color = '0' + color;
  }
  return '#' + color;
};

ColorScale.rgbToArray = function (rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};

ColorScale.prototype.setColors = function (colors) {
  for (var i = 0; i < colors.length; i++) {
    colors[i] = ColorScale.rgbToArray(colors[i]);
  }
  this.colors = colors;
};

ColorScale.prototype.setMax = function (max) {
  this.clearMaxValue = max;
  if (typeof this.normalize === 'function') {
    this.maxValue = this.normalize(max);
  } else {
    this.maxValue = max;
  }
};

ColorScale.prototype.setMin = function (min) {
  this.clearMinValue = min;

  if (typeof this.normalize === 'function') {
    this.minValue = this.normalize(min);
  } else {
    this.minValue = min;
  }
};

ColorScale.prototype.setNormalizeFunction = function (f) {
  if (f === 'polynomial') {
    this.normalize = function (value) {
      return Math.pow(value, 0.2);
    };
  } else if (f === 'linear') {
    delete this.normalize;
  } else {
    this.normalize = f;
  }
  this.setMin(this.clearMinValue);
  this.setMax(this.clearMaxValue);
};

ColorScale.prototype.vectorAdd = function (vector1, vector2) {
  var vector = [];
  for (var i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] + vector2[i];
  }
  return vector;
};

ColorScale.prototype.vectorLength = function (vector) {
  var result = 0;
  for (var i = 0; i < vector.length; i++) {
    result += vector[i] * vector[i];
  }
  return Math.sqrt(result);
};

ColorScale.prototype.vectorMult = function (vector, num) {
  var result = [];
  for (var i = 0; i < vector.length; i++) {
    result[i] = vector[i] * num;
  }
  return result;
};

ColorScale.prototype.vectorSubtract = function (vector1, vector2) {
  var vector = [];
  for (var i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] - vector2[i];
  }
  return vector;
};

ColorScale.prototype.vectorToNum = function (vector) {
  var num = 0;
  for (var i = 0; i < vector.length; i++) {
    num += Math.round(vector[i]) * Math.pow(256, vector.length - i - 1);
  }
  return num;
};

JQVMap.prototype.applyTransform = function () {
  var maxTransX, maxTransY, minTransX, minTransY;
  if (this.defaultWidth * this.scale <= this.width) {
    maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
  } else {
    maxTransX = 0;
    minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
  }

  if (this.defaultHeight * this.scale <= this.height) {
    maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
  } else {
    maxTransY = 0;
    minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
  }

  if (this.transY > maxTransY) {
    this.transY = maxTransY;
  } else if (this.transY < minTransY) {
    this.transY = minTransY;
  }
  if (this.transX > maxTransX) {
    this.transX = maxTransX;
  } else if (this.transX < minTransX) {
    this.transX = minTransX;
  }

  this.canvas.applyTransformParams(this.scale, this.transX, this.transY);
};

JQVMap.prototype.bindZoomButtons = function () {
  var map = this;
  this.container.find('.jqvmap-zoomin').click(function(){
    map.zoomIn();
  });
  this.container.find('.jqvmap-zoomout').click(function(){
    map.zoomOut();
  });
};

JQVMap.prototype.deselect = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (this.isSelected(cc)) {
    this.selectedRegions.splice(this.selectIndex(cc), 1);

    jQuery(this.container).trigger('regionDeselect.jqvmap', [cc]);
    path.currentFillColor = path.getOriginalFill();
    path.setFill(path.getOriginalFill());
  } else {
    for (var key in this.countries) {
      this.selectedRegions.splice(this.selectedRegions.indexOf(key), 1);
      this.countries[key].currentFillColor = this.color;
      this.countries[key].setFill(this.color);
    }
  }
};

JQVMap.prototype.getCountryId = function (cc) {
  return 'jqvmap' + this.index + '_' + cc;
};

JQVMap.prototype.getPin = function(cc){
  var pinObj = jQuery('#' + this.getPinId(cc));
  return pinObj.html();
};

JQVMap.prototype.getPinId = function (cc) {
  return this.getCountryId(cc) + '_pin';
};

JQVMap.prototype.getPins = function(){
  var pins = this.container.find('.jqvmap-pin');
  var ret = {};
  jQuery.each(pins, function(index, pinObj){
    pinObj = jQuery(pinObj);
    var cc = pinObj.attr('for').toLowerCase();
    var pinContent = pinObj.html();
    ret[cc] = pinContent;
  });
  return JSON.stringify(ret);
};

JQVMap.prototype.highlight = function (cc, path) {
  path = path || jQuery('#' + this.getCountryId(cc))[0];
  if (this.hoverOpacity) {
    path.setOpacity(this.hoverOpacity);
  } else if (this.hoverColors && (cc in this.hoverColors)) {
    path.currentFillColor = path.getFill() + '';
    path.setFill(this.hoverColors[cc]);
  } else if (this.hoverColor) {
    path.currentFillColor = path.getFill() + '';
    path.setFill(this.hoverColor);
  }
};

JQVMap.prototype.isSelected = function(cc) {
  return this.selectIndex(cc) >= 0;
};

JQVMap.prototype.makeDraggable = function () {
  var mouseDown = false;
  var oldPageX, oldPageY;
  var self = this;

  self.isMoving = false;
  self.isMovingTimeout = false;

  var lastTouchCount;
  var touchCenterX;
  var touchCenterY;
  var touchStartDistance;
  var touchStartScale;
  var touchX;
  var touchY;

  this.container.mousemove(function (e) {

    if (mouseDown) {
      self.transX -= (oldPageX - e.pageX) / self.scale;
      self.transY -= (oldPageY - e.pageY) / self.scale;

      self.applyTransform();

      oldPageX = e.pageX;
      oldPageY = e.pageY;

      self.isMoving = true;
      if (self.isMovingTimeout) {
        clearTimeout(self.isMovingTimeout);
      }

      self.container.trigger('drag');
    }

    return false;

  }).mousedown(function (e) {

    mouseDown = true;
    oldPageX = e.pageX;
    oldPageY = e.pageY;

    return false;

  }).mouseup(function () {

    mouseDown = false;

    clearTimeout(self.isMovingTimeout);
    self.isMovingTimeout = setTimeout(function () {
      self.isMoving = false;
    }, 100);

    return false;

  }).mouseout(function () {

    if(mouseDown && self.isMoving){

      clearTimeout(self.isMovingTimeout);
      self.isMovingTimeout = setTimeout(function () {
        mouseDown = false;
        self.isMoving = false;
      }, 100);

      return false;
    }
  });

  jQuery(this.container).bind('touchmove', function (e) {

    var offset;
    var scale;
    var touches = e.originalEvent.touches;
    var transformXOld;
    var transformYOld;

    if (touches.length === 1) {
      if (lastTouchCount === 1) {

        if(touchX === touches[0].pageX && touchY === touches[0].pageY){
          return;
        }

        transformXOld = self.transX;
        transformYOld = self.transY;

        self.transX -= (touchX - touches[0].pageX) / self.scale;
        self.transY -= (touchY - touches[0].pageY) / self.scale;

        self.applyTransform();

        if (transformXOld !== self.transX || transformYOld !== self.transY) {
          e.preventDefault();
        }

        self.isMoving = true;
        if (self.isMovingTimeout) {
          clearTimeout(self.isMovingTimeout);
        }
      }

      touchX = touches[0].pageX;
      touchY = touches[0].pageY;

    } else if (touches.length === 2) {

      if (lastTouchCount === 2) {
        scale = Math.sqrt(
            Math.pow(touches[0].pageX - touches[1].pageX, 2) +
            Math.pow(touches[0].pageY - touches[1].pageY, 2)
          ) / touchStartDistance;

        self.setScale(
          touchStartScale * scale,
          touchCenterX,
          touchCenterY
        );

        e.preventDefault();

      } else {

        offset = jQuery(self.container).offset();
        if (touches[0].pageX > touches[1].pageX) {
          touchCenterX = touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
        } else {
          touchCenterX = touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
        }

        if (touches[0].pageY > touches[1].pageY) {
          touchCenterY = touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
        } else {
          touchCenterY = touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
        }

        touchCenterX -= offset.left;
        touchCenterY -= offset.top;
        touchStartScale = self.scale;

        touchStartDistance = Math.sqrt(
          Math.pow(touches[0].pageX - touches[1].pageX, 2) +
          Math.pow(touches[0].pageY - touches[1].pageY, 2)
        );
      }
    }

    lastTouchCount = touches.length;
  });

  jQuery(this.container).bind('touchstart', function () {
    lastTouchCount = 0;
  });

  jQuery(this.container).bind('touchend', function () {
    lastTouchCount = 0;
  });
};

JQVMap.prototype.placePins = function(pins, pinMode){
  var map = this;

  if(!pinMode || (pinMode !== 'content' && pinMode !== 'id')) {
    pinMode = 'content';
  }

  if(pinMode === 'content') {//treat pin as content
    jQuery.each(pins, function(index, pin){
      if(jQuery('#' + map.getCountryId(index)).length === 0){
        return;
      }

      var pinIndex = map.getPinId(index);
      var $pin = jQuery('#' + pinIndex);
      if($pin.length > 0){
        $pin.remove();
      }
      map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute">' + pin + '</div>');
    });
  } else { //treat pin as id of an html content
    jQuery.each(pins, function(index, pin){
      if(jQuery('#' + map.getCountryId(index)).length === 0){
        return;
      }
      var pinIndex = map.getPinId(index);
      var $pin = jQuery('#' + pinIndex);
      if($pin.length > 0){
        $pin.remove();
      }
      map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute"></div>');
      $pin.append(jQuery('#' + pin));
    });
  }

  this.positionPins();
  if(!this.pinHandlers){
    this.pinHandlers = true;
    var positionFix = function(){
      map.positionPins();
    };
    this.container.bind('zoomIn', positionFix)
      .bind('zoomOut', positionFix)
      .bind('drag', positionFix);
  }
};

JQVMap.prototype.positionPins = function(){
  var map = this;
  var pins = this.container.find('.jqvmap-pin');
  jQuery.each(pins, function(index, pinObj){
    pinObj = jQuery(pinObj);
    var countryId = map.getCountryId(pinObj.attr('for').toLowerCase());
    var countryObj = jQuery('#' + countryId);

    var bbox = document.getElementById(countryId).getBBox();
    var position = countryObj.position();

    var scale = map.scale;

    var left = position.left + (bbox.width / 2) * scale - pinObj.width() / 2,
      top = position.top + (bbox.height / 2) * scale - pinObj.height() / 2;

    pinObj.css('left', left).css('top', top);
  });
};

JQVMap.prototype.removePin = function(cc) {
  cc = cc.toLowerCase();
  jQuery('#' + this.getPinId(cc)).remove();
};

JQVMap.prototype.removePins = function(){
  this.container.find('.jqvmap-pin').remove();
};

JQVMap.prototype.reset = function () {
  for (var key in this.countries) {
    this.countries[key].setFill(this.color);
  }
  this.scale = this.baseScale;
  this.transX = this.baseTransX;
  this.transY = this.baseTransY;
  this.applyTransform();
};

JQVMap.prototype.resize = function () {
  var curBaseScale = this.baseScale;
  if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
    this.baseScale = this.height / this.defaultHeight;
    this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale);
  } else {
    this.baseScale = this.width / this.defaultWidth;
    this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale);
  }
  this.scale *= this.baseScale / curBaseScale;
  this.transX *= this.baseScale / curBaseScale;
  this.transY *= this.baseScale / curBaseScale;
};

JQVMap.prototype.select = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (!this.isSelected(cc)) {
    if (this.multiSelectRegion) {
      this.selectedRegions.push(cc);
    } else {
      this.selectedRegions = [cc];
    }

    jQuery(this.container).trigger('regionSelect.jqvmap', [cc]);
    if (this.selectedColor && path) {
      path.currentFillColor = this.selectedColor;
      path.setFill(this.selectedColor);
    }
  }
};

JQVMap.prototype.selectIndex = function (cc) {
  cc = cc.toLowerCase();
  for (var i = 0; i < this.selectedRegions.length; i++) {
    if (cc === this.selectedRegions[i]) {
      return i;
    }
  }
  return -1;
};

JQVMap.prototype.setBackgroundColor = function (backgroundColor) {
  this.container.css('background-color', backgroundColor);
};

JQVMap.prototype.setColors = function (key, color) {
  if (typeof key === 'string') {
    this.countries[key].setFill(color);
    this.countries[key].setAttribute('original', color);
  } else {
    var colors = key;

    for (var code in colors) {
      if (this.countries[code]) {
        this.countries[code].setFill(colors[code]);
        this.countries[code].setAttribute('original', colors[code]);
      }
    }
  }
};

JQVMap.prototype.setNormalizeFunction = function (f) {
  this.colorScale.setNormalizeFunction(f);

  if (this.values) {
    this.setValues(this.values);
  }
};

JQVMap.prototype.setScale = function (scale) {
  this.scale = scale;
  this.applyTransform();
};

JQVMap.prototype.setScaleColors = function (colors) {
  this.colorScale.setColors(colors);

  if (this.values) {
    this.setValues(this.values);
  }
};

JQVMap.prototype.setValues = function (values) {
  var max = 0,
    min = Number.MAX_VALUE,
    val;

  for (var cc in values) {
    cc = cc.toLowerCase();
    val = parseFloat(values[cc]);

    if (isNaN(val)) {
      continue;
    }
    if (val > max) {
      max = values[cc];
    }
    if (val < min) {
      min = val;
    }
  }

  if (min === max) {
    max++;
  }

  this.colorScale.setMin(min);
  this.colorScale.setMax(max);

  var colors = {};
  for (cc in values) {
    cc = cc.toLowerCase();
    val = parseFloat(values[cc]);
    colors[cc] = isNaN(val) ? this.color : this.colorScale.getColor(val);
  }
  this.setColors(colors);
  this.values = values;
};

JQVMap.prototype.unhighlight = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];
  path.setOpacity(1);
  if (path.currentFillColor) {
    path.setFill(path.currentFillColor);
  }
};

JQVMap.prototype.zoomIn = function () {
  var map = this;
  var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

  if (map.zoomCurStep < map.zoomMaxStep) {
    map.transX -= (map.width / map.scale - map.width / (map.scale * map.zoomStep)) / 2;
    map.transY -= (map.height / map.scale - map.height / (map.scale * map.zoomStep)) / 2;
    map.setScale(map.scale * map.zoomStep);
    map.zoomCurStep++;

    var $slider = jQuery('#zoomSlider');

    $slider.css('top', parseInt($slider.css('top'), 10) - sliderDelta);

    map.container.trigger('zoomIn');
  }
};

JQVMap.prototype.zoomOut = function () {
  var map = this;
  var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

  if (map.zoomCurStep > 1) {
    map.transX += (map.width / (map.scale / map.zoomStep) - map.width / map.scale) / 2;
    map.transY += (map.height / (map.scale / map.zoomStep) - map.height / map.scale) / 2;
    map.setScale(map.scale / map.zoomStep);
    map.zoomCurStep--;

    var $slider = jQuery('#zoomSlider');

    $slider.css('top', parseInt($slider.css('top'), 10) + sliderDelta);

    map.container.trigger('zoomOut');
  }
};

VectorCanvas.prototype.applyTransformParams = function (scale, transX, transY) {
  if (this.mode === 'svg') {
    this.rootGroup.setAttribute('transform', 'scale(' + scale + ') translate(' + transX + ', ' + transY + ')');
  } else {
    this.rootGroup.coordorigin = (this.width - transX) + ',' + (this.height - transY);
    this.rootGroup.coordsize = this.width / scale + ',' + this.height / scale;
  }
};

VectorCanvas.prototype.createGroup = function (isRoot) {
  var node;
  if (this.mode === 'svg') {
    node = this.createSvgNode('g');
  } else {
    node = this.createVmlNode('group');
    node.style.width = this.width + 'px';
    node.style.height = this.height + 'px';
    node.style.left = '0px';
    node.style.top = '0px';
    node.coordorigin = '0 0';
    node.coordsize = this.width + ' ' + this.height;
  }

  if (isRoot) {
    this.rootGroup = node;
  }
  return node;
};

VectorCanvas.prototype.createPath = function (config) {
  var node;
  if (this.mode === 'svg') {
    node = this.createSvgNode('path');
    node.setAttribute('d', config.path);

    if (this.params.borderColor !== null) {
      node.setAttribute('stroke', this.params.borderColor);
    }
    if (this.params.borderWidth > 0) {
      node.setAttribute('stroke-width', this.params.borderWidth);
      node.setAttribute('stroke-linecap', 'round');
      node.setAttribute('stroke-linejoin', 'round');
    }
    if (this.params.borderOpacity > 0) {
      node.setAttribute('stroke-opacity', this.params.borderOpacity);
    }

    node.setFill = function (color) {
      this.setAttribute('fill', color);
      if (this.getAttribute('original') === null) {
        this.setAttribute('original', color);
      }
    };

    node.getFill = function () {
      return this.getAttribute('fill');
    };

    node.getOriginalFill = function () {
      return this.getAttribute('original');
    };

    node.setOpacity = function (opacity) {
      this.setAttribute('fill-opacity', opacity);
    };
  } else {
    node = this.createVmlNode('shape');
    node.coordorigin = '0 0';
    node.coordsize = this.width + ' ' + this.height;
    node.style.width = this.width + 'px';
    node.style.height = this.height + 'px';
    node.fillcolor = JQVMap.defaultFillColor;
    node.stroked = false;
    node.path = VectorCanvas.pathSvgToVml(config.path);

    var scale = this.createVmlNode('skew');
    scale.on = true;
    scale.matrix = '0.01,0,0,0.01,0,0';
    scale.offset = '0,0';

    node.appendChild(scale);

    var fill = this.createVmlNode('fill');
    node.appendChild(fill);

    node.setFill = function (color) {
      this.getElementsByTagName('fill')[0].color = color;
      if (this.getAttribute('original') === null) {
        this.setAttribute('original', color);
      }
    };

    node.getFill = function () {
      return this.getElementsByTagName('fill')[0].color;
    };
    node.getOriginalFill = function () {
      return this.getAttribute('original');
    };
    node.setOpacity = function (opacity) {
      this.getElementsByTagName('fill')[0].opacity = parseInt(opacity * 100, 10) + '%';
    };
  }
  return node;
};

VectorCanvas.prototype.pathSvgToVml = function (path) {
  var result = '';
  var cx = 0, cy = 0, ctrlx, ctrly;

  return path.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function (segment, letter, coords) {
    coords = coords.replace(/(\d)-/g, '$1,-').replace(/\s+/g, ',').split(',');
    if (!coords[0]) {
      coords.shift();
    }

    for (var i = 0, l = coords.length; i < l; i++) {
      coords[i] = Math.round(100 * coords[i]);
    }

    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        result = 't' + coords.join(',');
        break;

      case 'M':
        cx = coords[0];
        cy = coords[1];
        result = 'm' + coords.join(',');
        break;

      case 'l':
        cx += coords[0];
        cy += coords[1];
        result = 'r' + coords.join(',');
        break;

      case 'L':
        cx = coords[0];
        cy = coords[1];
        result = 'l' + coords.join(',');
        break;

      case 'h':
        cx += coords[0];
        result = 'r' + coords[0] + ',0';
        break;

      case 'H':
        cx = coords[0];
        result = 'l' + cx + ',' + cy;
        break;

      case 'v':
        cy += coords[0];
        result = 'r0,' + coords[0];
        break;

      case 'V':
        cy = coords[0];
        result = 'l' + cx + ',' + cy;
        break;

      case 'c':
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        result = 'v' + coords.join(',');
        break;

      case 'C':
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        result = 'c' + coords.join(',');
        break;

      case 's':
        coords.unshift(cy - ctrly);
        coords.unshift(cx - ctrlx);
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        result = 'v' + coords.join(',');
        break;

      case 'S':
        coords.unshift(cy + cy - ctrly);
        coords.unshift(cx + cx - ctrlx);
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        result = 'c' + coords.join(',');
        break;

      default:
        break;
    }

    return result;

  }).replace(/z/g, '');
};

VectorCanvas.prototype.setSize = function (width, height) {
  if (this.mode === 'svg') {
    this.canvas.setAttribute('width', width);
    this.canvas.setAttribute('height', height);
  } else {
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    this.canvas.coordsize = width + ' ' + height;
    this.canvas.coordorigin = '0 0';
    if (this.rootGroup) {
      var paths = this.rootGroup.getElementsByTagName('shape');
      for (var i = 0, l = paths.length; i < l; i++) {
        paths[i].coordsize = width + ' ' + height;
        paths[i].style.width = width + 'px';
        paths[i].style.height = height + 'px';
      }
      this.rootGroup.coordsize = width + ' ' + height;
      this.rootGroup.style.width = width + 'px';
      this.rootGroup.style.height = height + 'px';
    }
  }
  this.width = width;
  this.height = height;
};

var sample_data = {"af":"16.63","al":"11.58","dz":"158.97","ao":"85.81","ag":"1.1","ar":"351.02","am":"8.83","au":"1219.72","at":"366.26","az":"52.17","bs":"7.54","bh":"21.73","bd":"105.4","bb":"3.96","by":"52.89","be":"461.33","bz":"1.43","bj":"6.49","bt":"1.4","bo":"19.18","ba":"16.2","bw":"12.5","br":"2023.53","bn":"11.96","bg":"44.84","bf":"8.67","bi":"1.47","kh":"11.36","cm":"21.88","ca":"1563.66","cv":"1.57","cf":"2.11","td":"7.59","cl":"199.18","cn":"5745.13","co":"283.11","km":"0.56","cd":"12.6","cg":"11.88","cr":"35.02","ci":"22.38","hr":"59.92","cy":"22.75","cz":"195.23","dk":"304.56","dj":"1.14","dm":"0.38","do":"50.87","ec":"61.49","eg":"216.83","sv":"21.8","gq":"14.55","er":"2.25","ee":"19.22","et":"30.94","fj":"3.15","fi":"231.98","fr":"2555.44","ga":"12.56","gm":"1.04","ge":"11.23","de":"3305.9","gh":"18.06","gr":"305.01","gd":"0.65","gt":"40.77","gn":"4.34","gw":"0.83","gy":"2.2","ht":"6.5","hn":"15.34","hk":"226.49","hu":"132.28","is":"12.77","in":"1430.02","id":"695.06","ir":"337.9","iq":"84.14","ie":"204.14","il":"201.25","it":"2036.69","jm":"13.74","jp":"5390.9","jo":"27.13","kz":"129.76","ke":"32.42","ki":"0.15","kr":"986.26","undefined":"5.73","kw":"117.32","kg":"4.44","la":"6.34","lv":"23.39","lb":"39.15","ls":"1.8","lr":"0.98","ly":"77.91","lt":"35.73","lu":"52.43","mk":"9.58","mg":"8.33","mw":"5.04","my":"218.95","mv":"1.43","ml":"9.08","mt":"7.8","mr":"3.49","mu":"9.43","mx":"1004.04","md":"5.36","mn":"5.81","me":"3.88","ma":"91.7","mz":"10.21","mm":"35.65","na":"11.45","np":"15.11","nl":"770.31","nz":"138","ni":"6.38","ne":"5.6","ng":"206.66","no":"413.51","om":"53.78","pk":"174.79","pa":"27.2","pg":"8.81","py":"17.17","pe":"153.55","ph":"189.06","pl":"438.88","pt":"223.7","qa":"126.52","ro":"158.39","ru":"1476.91","rw":"5.69","ws":"0.55","st":"0.19","sa":"434.44","sn":"12.66","rs":"38.92","sc":"0.92","sl":"1.9","sg":"217.38","sk":"86.26","si":"46.44","sb":"0.67","za":"354.41","es":"1374.78","lk":"48.24","kn":"0.56","lc":"1","vc":"0.58","sd":"65.93","sr":"3.3","sz":"3.17","se":"444.59","ch":"522.44","sy":"59.63","tw":"426.98","tj":"5.58","tz":"22.43","th":"312.61","tl":"0.62","tg":"3.07","to":"0.3","tt":"21.2","tn":"43.86","tr":"729.05","tm":0,"ug":"17.12","ua":"136.56","ae":"239.65","gb":"2258.57","us":"14624.18","uy":"40.71","uz":"37.72","vu":"0.72","ve":"285.21","vn":"101.99","ye":"30.02","zm":"15.69","zw":"5.57"};
//! moment.js
//! version : 2.13.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return fd.apply(null,arguments)}function b(a){fd=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Ja(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a),c=gd.call(b.parsedDateParts,function(a){return null!=a});a._isValid=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a){return void 0===a}function n(a,b){var c,d,e;if(m(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),m(b._i)||(a._i=b._i),m(b._f)||(a._f=b._f),m(b._l)||(a._l=b._l),m(b._strict)||(a._strict=b._strict),m(b._tzm)||(a._tzm=b._tzm),m(b._isUTC)||(a._isUTC=b._isUTC),m(b._offset)||(a._offset=b._offset),m(b._pf)||(a._pf=j(b)),m(b._locale)||(a._locale=b._locale),hd.length>0)for(c in hd)d=hd[c],e=b[d],m(e)||(a[d]=e);return a}function o(b){n(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),id===!1&&(id=!0,a.updateOffset(this),id=!1)}function p(a){return a instanceof o||null!=a&&null!=a._isAMomentObject}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=q(b)),c}function s(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&r(a[d])!==r(b[d]))&&g++;return g+f}function t(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function u(b,c){var d=!0;return g(function(){return null!=a.deprecationHandler&&a.deprecationHandler(null,b),d&&(t(b+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),d=!1),c.apply(this,arguments)},c)}function v(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),jd[b]||(t(c),jd[b]=!0)}function w(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function x(a){return"[object Object]"===Object.prototype.toString.call(a)}function y(a){var b,c;for(c in a)b=a[c],w(b)?this[c]=b:this["_"+c]=b;this._config=a,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function z(a,b){var c,d=g({},a);for(c in b)f(b,c)&&(x(a[c])&&x(b[c])?(d[c]={},g(d[c],a[c]),g(d[c],b[c])):null!=b[c]?d[c]=b[c]:delete d[c]);return d}function A(a){null!=a&&this.set(a)}function B(a){return a?a.toLowerCase().replace("_","-"):a}function C(a){for(var b,c,d,e,f=0;f<a.length;){for(e=B(a[f]).split("-"),b=e.length,c=B(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=D(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&s(e,c,!0)>=b-1)break;b--}f++}return null}function D(a){var b=null;if(!nd[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=ld._abbr,require("./locale/"+a),E(b)}catch(c){}return nd[a]}function E(a,b){var c;return a&&(c=m(b)?H(a):F(a,b),c&&(ld=c)),ld._abbr}function F(a,b){return null!==b?(b.abbr=a,null!=nd[a]?(v("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"),b=z(nd[a]._config,b)):null!=b.parentLocale&&(null!=nd[b.parentLocale]?b=z(nd[b.parentLocale]._config,b):v("parentLocaleUndefined","specified parentLocale is not defined yet")),nd[a]=new A(b),E(a),nd[a]):(delete nd[a],null)}function G(a,b){if(null!=b){var c;null!=nd[a]&&(b=z(nd[a]._config,b)),c=new A(b),c.parentLocale=nd[a],nd[a]=c,E(a)}else null!=nd[a]&&(null!=nd[a].parentLocale?nd[a]=nd[a].parentLocale:null!=nd[a]&&delete nd[a]);return nd[a]}function H(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return ld;if(!c(a)){if(b=D(a))return b;a=[a]}return C(a)}function I(){return kd(nd)}function J(a,b){var c=a.toLowerCase();od[c]=od[c+"s"]=od[b]=a}function K(a){return"string"==typeof a?od[a]||od[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)f(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(b,c){return function(d){return null!=d?(O(this,b,d),a.updateOffset(this,c),this):N(this,b)}}function N(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function O(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function P(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=K(a),w(this[a]))return this[a](b);return this}function Q(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function R(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(sd[a]=e),b&&(sd[b[0]]=function(){return Q(e.apply(this,arguments),b[1],b[2])}),c&&(sd[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function S(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function T(a){var b,c,d=a.match(pd);for(b=0,c=d.length;c>b;b++)sd[d[b]]?d[b]=sd[d[b]]:d[b]=S(d[b]);return function(b){var e,f="";for(e=0;c>e;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}function U(a,b){return a.isValid()?(b=V(b,a.localeData()),rd[b]=rd[b]||T(b),rd[b](a)):a.localeData().invalidDate()}function V(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(qd.lastIndex=0;d>=0&&qd.test(a);)a=a.replace(qd,c),qd.lastIndex=0,d-=1;return a}function W(a,b,c){Kd[a]=w(b)?b:function(a,d){return a&&c?c:b}}function X(a,b){return f(Kd,a)?Kd[a](b._strict,b._locale):new RegExp(Y(a))}function Y(a){return Z(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function Z(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function $(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=r(a)}),c=0;c<a.length;c++)Ld[a[c]]=d}function _(a,b){$(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function aa(a,b,c){null!=b&&f(Ld,a)&&Ld[a](b,c._a,c,a)}function ba(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function ca(a,b){return c(this._months)?this._months[a.month()]:this._months[Vd.test(b)?"format":"standalone"][a.month()]}function da(a,b){return c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[Vd.test(b)?"format":"standalone"][a.month()]}function ea(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;12>d;++d)f=h([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=md.call(this._shortMonthsParse,g),-1!==e?e:null):(e=md.call(this._longMonthsParse,g),-1!==e?e:null):"MMM"===b?(e=md.call(this._shortMonthsParse,g),-1!==e?e:(e=md.call(this._longMonthsParse,g),-1!==e?e:null)):(e=md.call(this._longMonthsParse,g),-1!==e?e:(e=md.call(this._shortMonthsParse,g),-1!==e?e:null))}function fa(a,b,c){var d,e,f;if(this._monthsParseExact)return ea.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ga(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=r(b);else if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),ba(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ha(b){return null!=b?(ga(this,b),a.updateOffset(this,!0),this):N(this,"Month")}function ia(){return ba(this.year(),this.month())}function ja(a){return this._monthsParseExact?(f(this,"_monthsRegex")||la.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex}function ka(a){return this._monthsParseExact?(f(this,"_monthsRegex")||la.call(this),a?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex}function la(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=h([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;12>b;b++)d[b]=Z(d[b]),e[b]=Z(e[b]),f[b]=Z(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function ma(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[Nd]<0||c[Nd]>11?Nd:c[Od]<1||c[Od]>ba(c[Md],c[Nd])?Od:c[Pd]<0||c[Pd]>24||24===c[Pd]&&(0!==c[Qd]||0!==c[Rd]||0!==c[Sd])?Pd:c[Qd]<0||c[Qd]>59?Qd:c[Rd]<0||c[Rd]>59?Rd:c[Sd]<0||c[Sd]>999?Sd:-1,j(a)._overflowDayOfYear&&(Md>b||b>Od)&&(b=Od),j(a)._overflowWeeks&&-1===b&&(b=Td),j(a)._overflowWeekday&&-1===b&&(b=Ud),j(a).overflow=b),a}function na(a){var b,c,d,e,f,g,h=a._i,i=$d.exec(h)||_d.exec(h);if(i){for(j(a).iso=!0,b=0,c=be.length;c>b;b++)if(be[b][1].exec(i[1])){e=be[b][0],d=be[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=ce.length;c>b;b++)if(ce[b][1].exec(i[3])){f=(i[2]||" ")+ce[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!ae.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),Ca(a)}else a._isValid=!1}function oa(b){var c=de.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(na(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function pa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function qa(a){var b=new Date(Date.UTC.apply(null,arguments));return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ra(a){return sa(a)?366:365}function sa(a){return a%4===0&&a%100!==0||a%400===0}function ta(){return sa(this.year())}function ua(a,b,c){var d=7+b-c,e=(7+qa(a,0,d).getUTCDay()-b)%7;return-e+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=ra(f)+j):j>ra(a)?(f=a+1,g=j-ra(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(ra(a)-d+e)/7}function ya(a,b,c){return null!=a?a:null!=b?b:c}function za(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function Aa(a){var b,c,d,e,f=[];if(!a._d){for(d=za(a),a._w&&null==a._a[Od]&&null==a._a[Nd]&&Ba(a),a._dayOfYear&&(e=ya(a._a[Md],d[Md]),a._dayOfYear>ra(e)&&(j(a)._overflowDayOfYear=!0),c=qa(e,0,a._dayOfYear),a._a[Nd]=c.getUTCMonth(),a._a[Od]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[Pd]&&0===a._a[Qd]&&0===a._a[Rd]&&0===a._a[Sd]&&(a._nextDay=!0,a._a[Pd]=0),a._d=(a._useUTC?qa:pa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[Pd]=24)}}function Ba(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=ya(b.GG,a._a[Md],wa(Ka(),1,4).year),d=ya(b.W,1),e=ya(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=ya(b.gg,a._a[Md],wa(Ka(),f,g).year),d=ya(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>xa(c,f,g)?j(a)._overflowWeeks=!0:null!=i?j(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[Md]=h.year,a._dayOfYear=h.dayOfYear)}function Ca(b){if(b._f===a.ISO_8601)return void na(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=V(b._f,b._locale).match(pd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(X(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),sd[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),aa(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[Pd]<=12&&b._a[Pd]>0&&(j(b).bigHour=void 0),j(b).parsedDateParts=b._a.slice(0),j(b).meridiem=b._meridiem,b._a[Pd]=Da(b._locale,b._a[Pd],b._meridiem),Aa(b),ma(b)}function Da(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function Ea(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],Ca(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function Fa(a){if(!a._d){var b=L(a._i);a._a=e([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),Aa(a)}}function Ga(a){var b=new o(ma(Ha(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Ha(a){var b=a._i,e=a._f;return a._locale=a._locale||H(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),p(b)?new o(ma(b)):(c(e)?Ea(a):e?Ca(a):d(b)?a._d=b:Ia(a),k(a)||(a._d=null),a))}function Ia(b){var f=b._i;void 0===f?b._d=new Date(a.now()):d(f)?b._d=new Date(f.valueOf()):"string"==typeof f?oa(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),Aa(b)):"object"==typeof f?Fa(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Ja(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,Ga(f)}function Ka(a,b,c,d){return Ja(a,b,c,d,!1)}function La(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Ka();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Ma(){var a=[].slice.call(arguments,0);return La("isBefore",a)}function Na(){var a=[].slice.call(arguments,0);return La("isAfter",a)}function Oa(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=H(),this._bubble()}function Pa(a){return a instanceof Oa}function Qa(a,b){R(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+Q(~~(a/60),2)+b+Q(~~a%60,2)})}function Ra(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(ie)||["-",0,0],f=+(60*e[1])+r(e[2]);return"+"===e[0]?f:-f}function Sa(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(p(b)||d(b)?b.valueOf():Ka(b).valueOf())-e.valueOf(),e._d.setTime(e._d.valueOf()+f),a.updateOffset(e,!1),e):Ka(b).local()}function Ta(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Ua(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=Ra(Hd,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ta(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?jb(this,db(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ta(this):null!=b?this:NaN}function Va(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Wa(a){return this.utcOffset(0,a)}function Xa(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ta(this),"m")),this}function Ya(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ra(Gd,this._i)),this}function Za(a){return this.isValid()?(a=a?Ka(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function $a(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function _a(){if(!m(this._isDSTShifted))return this._isDSTShifted;var a={};if(n(a,this),a=Ha(a),a._a){var b=a._isUTC?h(a._a):Ka(a._a);this._isDSTShifted=this.isValid()&&s(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function ab(){return this.isValid()?!this._isUTC:!1}function bb(){return this.isValid()?this._isUTC:!1}function cb(){return this.isValid()?this._isUTC&&0===this._offset:!1}function db(a,b){var c,d,e,g=a,h=null;return Pa(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=je.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:r(h[Od])*c,h:r(h[Pd])*c,m:r(h[Qd])*c,s:r(h[Rd])*c,ms:r(h[Sd])*c}):(h=ke.exec(a))?(c="-"===h[1]?-1:1,g={y:eb(h[2],c),M:eb(h[3],c),w:eb(h[4],c),d:eb(h[5],c),h:eb(h[6],c),m:eb(h[7],c),s:eb(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=gb(Ka(g.from),Ka(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Oa(g),Pa(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function eb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function fb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function gb(a,b){var c;return a.isValid()&&b.isValid()?(b=Sa(b,a),a.isBefore(b)?c=fb(a,b):(c=fb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function hb(a){return 0>a?-1*Math.round(-1*a):Math.round(a)}function ib(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(v(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=db(c,d),jb(this,e,a),this}}function jb(b,c,d,e){var f=c._milliseconds,g=hb(c._days),h=hb(c._months);b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&O(b,"Date",N(b,"Date")+g*d),h&&ga(b,N(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function kb(a,b){var c=a||Ka(),d=Sa(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse",g=b&&(w(b[f])?b[f]():b[f]);return this.format(g||this.localeData().calendar(f,this,Ka(c)))}function lb(){return new o(this)}function mb(a,b){var c=p(a)?a:Ka(a);return this.isValid()&&c.isValid()?(b=K(m(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf()):!1}function nb(a,b){var c=p(a)?a:Ka(a);return this.isValid()&&c.isValid()?(b=K(m(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf()):!1}function ob(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function pb(a,b){var c,d=p(a)?a:Ka(a);return this.isValid()&&d.isValid()?(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf())):!1}function qb(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function rb(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function sb(a,b,c){var d,e,f,g;return this.isValid()?(d=Sa(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=tb(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:q(g)):NaN):NaN}function tb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function ub(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function vb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?w(Date.prototype.toISOString)?this.toDate().toISOString():U(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):U(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function wb(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=U(this,b);return this.localeData().postformat(c)}function xb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ka(a).isValid())?db({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function yb(a){return this.from(Ka(),a)}function zb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ka(a).isValid())?db({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function Ab(a){return this.to(Ka(),a)}function Bb(a){var b;return void 0===a?this._locale._abbr:(b=H(a),null!=b&&(this._locale=b),this)}function Cb(){return this._locale}function Db(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function Eb(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function Fb(){return this._d.valueOf()-6e4*(this._offset||0)}function Gb(){return Math.floor(this.valueOf()/1e3)}function Hb(){return this._offset?new Date(this.valueOf()):this._d}function Ib(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function Jb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Kb(){return this.isValid()?this.toISOString():null}function Lb(){return k(this)}function Mb(){return g({},j(this))}function Nb(){return j(this).overflow}function Ob(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Pb(a,b){R(0,[a,a.length],0,b)}function Qb(a){return Ub.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Rb(a){return Ub.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Sb(){return xa(this.year(),1,4)}function Tb(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ub(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Vb.call(this,a,b,c,d,e))}function Vb(a,b,c,d,e){var f=va(a,b,c,d,e),g=qa(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Wb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Xb(a){return wa(a,this._week.dow,this._week.doy).week}function Yb(){return this._week.dow}function Zb(){return this._week.doy}function $b(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function _b(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function ac(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function bc(a,b){return c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]}function cc(a){return this._weekdaysShort[a.day()]}function dc(a){return this._weekdaysMin[a.day()]}function ec(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;7>d;++d)f=h([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=md.call(this._weekdaysParse,g),-1!==e?e:null):"ddd"===b?(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:null):(e=md.call(this._minWeekdaysParse,g),-1!==e?e:null):"dddd"===b?(e=md.call(this._weekdaysParse,g),-1!==e?e:(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:(e=md.call(this._minWeekdaysParse,g),-1!==e?e:null))):"ddd"===b?(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:(e=md.call(this._weekdaysParse,g),-1!==e?e:(e=md.call(this._minWeekdaysParse,g),-1!==e?e:null))):(e=md.call(this._minWeekdaysParse,g),-1!==e?e:(e=md.call(this._weekdaysParse,g),-1!==e?e:(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:null)))}function fc(a,b,c){var d,e,f;if(this._weekdaysParseExact)return ec.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){if(e=h([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function gc(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=ac(a,this.localeData()),this.add(a-b,"d")):b}function hc(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function ic(a){return this.isValid()?null==a?this.day()||7:this.day(this.day()%7?a:a-7):null!=a?this:NaN}function jc(a){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||mc.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex}function kc(a){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||mc.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex}function lc(a){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||mc.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex}function mc(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],i=[],j=[],k=[];for(b=0;7>b;b++)c=h([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),i.push(e),j.push(f),k.push(d),k.push(e),k.push(f);for(g.sort(a),i.sort(a),j.sort(a),k.sort(a),b=0;7>b;b++)i[b]=Z(i[b]),j[b]=Z(j[b]),k[b]=Z(k[b]);this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function nc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function oc(){return this.hours()%12||12}function pc(){return this.hours()||24}function qc(a,b){R(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function rc(a,b){return b._meridiemParse}function sc(a){return"p"===(a+"").toLowerCase().charAt(0)}function tc(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function uc(a,b){b[Sd]=r(1e3*("0."+a))}function vc(){return this._isUTC?"UTC":""}function wc(){return this._isUTC?"Coordinated Universal Time":""}function xc(a){return Ka(1e3*a)}function yc(){return Ka.apply(null,arguments).parseZone()}function zc(a,b,c){var d=this._calendar[a];return w(d)?d.call(b,c):d}function Ac(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function Bc(){return this._invalidDate}function Cc(a){return this._ordinal.replace("%d",a)}function Dc(a){return a}function Ec(a,b,c,d){var e=this._relativeTime[c];return w(e)?e(a,b,c,d):e.replace(/%d/i,a)}function Fc(a,b){var c=this._relativeTime[a>0?"future":"past"];return w(c)?c(b):c.replace(/%s/i,b)}function Gc(a,b,c,d){var e=H(),f=h().set(d,b);return e[c](f,a)}function Hc(a,b,c){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return Gc(a,b,c,"month");var d,e=[];for(d=0;12>d;d++)e[d]=Gc(a,d,c,"month");return e}function Ic(a,b,c,d){"boolean"==typeof a?("number"==typeof b&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,"number"==typeof b&&(c=b,b=void 0),b=b||"");var e=H(),f=a?e._week.dow:0;if(null!=c)return Gc(b,(c+f)%7,d,"day");var g,h=[];for(g=0;7>g;g++)h[g]=Gc(b,(g+f)%7,d,"day");return h}function Jc(a,b){return Hc(a,b,"months")}function Kc(a,b){return Hc(a,b,"monthsShort")}function Lc(a,b,c){return Ic(a,b,c,"weekdays")}function Mc(a,b,c){return Ic(a,b,c,"weekdaysShort")}function Nc(a,b,c){return Ic(a,b,c,"weekdaysMin")}function Oc(){var a=this._data;return this._milliseconds=Le(this._milliseconds),this._days=Le(this._days),this._months=Le(this._months),a.milliseconds=Le(a.milliseconds),a.seconds=Le(a.seconds),a.minutes=Le(a.minutes),a.hours=Le(a.hours),a.months=Le(a.months),a.years=Le(a.years),this}function Pc(a,b,c,d){var e=db(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function Qc(a,b){return Pc(this,a,b,1)}function Rc(a,b){return Pc(this,a,b,-1)}function Sc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Tc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Sc(Vc(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=q(f/1e3),i.seconds=a%60,b=q(a/60),i.minutes=b%60,c=q(b/60),i.hours=c%24,g+=q(c/24),e=q(Uc(g)),h+=e,g-=Sc(Vc(e)),d=q(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function Uc(a){return 4800*a/146097}function Vc(a){return 146097*a/4800}function Wc(a){var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+Uc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(Vc(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function Xc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*r(this._months/12)}function Yc(a){return function(){return this.as(a)}}function Zc(a){
return a=K(a),this[a+"s"]()}function $c(a){return function(){return this._data[a]}}function _c(){return q(this.days()/7)}function ad(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function bd(a,b,c){var d=db(a).abs(),e=_e(d.as("s")),f=_e(d.as("m")),g=_e(d.as("h")),h=_e(d.as("d")),i=_e(d.as("M")),j=_e(d.as("y")),k=e<af.s&&["s",e]||1>=f&&["m"]||f<af.m&&["mm",f]||1>=g&&["h"]||g<af.h&&["hh",g]||1>=h&&["d"]||h<af.d&&["dd",h]||1>=i&&["M"]||i<af.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,ad.apply(null,k)}function cd(a,b){return void 0===af[a]?!1:void 0===b?af[a]:(af[a]=b,!0)}function dd(a){var b=this.localeData(),c=bd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function ed(){var a,b,c,d=bf(this._milliseconds)/1e3,e=bf(this._days),f=bf(this._months);a=q(d/60),b=q(a/60),d%=60,a%=60,c=q(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var fd,gd;gd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;c>d;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var hd=a.momentProperties=[],id=!1,jd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var kd;kd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)f(a,b)&&c.push(b);return c};var ld,md,nd={},od={},pd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,qd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,rd={},sd={},td=/\d/,ud=/\d\d/,vd=/\d{3}/,wd=/\d{4}/,xd=/[+-]?\d{6}/,yd=/\d\d?/,zd=/\d\d\d\d?/,Ad=/\d\d\d\d\d\d?/,Bd=/\d{1,3}/,Cd=/\d{1,4}/,Dd=/[+-]?\d{1,6}/,Ed=/\d+/,Fd=/[+-]?\d+/,Gd=/Z|[+-]\d\d:?\d\d/gi,Hd=/Z|[+-]\d\d(?::?\d\d)?/gi,Id=/[+-]?\d+(\.\d{1,3})?/,Jd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Kd={},Ld={},Md=0,Nd=1,Od=2,Pd=3,Qd=4,Rd=5,Sd=6,Td=7,Ud=8;md=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1},R("M",["MM",2],"Mo",function(){return this.month()+1}),R("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),R("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),W("M",yd),W("MM",yd,ud),W("MMM",function(a,b){return b.monthsShortRegex(a)}),W("MMMM",function(a,b){return b.monthsRegex(a)}),$(["M","MM"],function(a,b){b[Nd]=r(a)-1}),$(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[Nd]=e:j(c).invalidMonth=a});var Vd=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Wd="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Xd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Yd=Jd,Zd=Jd,$d=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,_d=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ae=/Z|[+-]\d\d(?::?\d\d)?/,be=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],ce=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],de=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=u("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),R("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),R(0,["YY",2],0,function(){return this.year()%100}),R(0,["YYYY",4],0,"year"),R(0,["YYYYY",5],0,"year"),R(0,["YYYYYY",6,!0],0,"year"),J("year","y"),W("Y",Fd),W("YY",yd,ud),W("YYYY",Cd,wd),W("YYYYY",Dd,xd),W("YYYYYY",Dd,xd),$(["YYYYY","YYYYYY"],Md),$("YYYY",function(b,c){c[Md]=2===b.length?a.parseTwoDigitYear(b):r(b)}),$("YY",function(b,c){c[Md]=a.parseTwoDigitYear(b)}),$("Y",function(a,b){b[Md]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return r(a)+(r(a)>68?1900:2e3)};var ee=M("FullYear",!0);a.ISO_8601=function(){};var fe=u("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Ka.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:l()}),ge=u("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Ka.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:l()}),he=function(){return Date.now?Date.now():+new Date};Qa("Z",":"),Qa("ZZ",""),W("Z",Hd),W("ZZ",Hd),$(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ra(Hd,a)});var ie=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var je=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,ke=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;db.fn=Oa.prototype;var le=ib(1,"add"),me=ib(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ne=u("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});R(0,["gg",2],0,function(){return this.weekYear()%100}),R(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Pb("gggg","weekYear"),Pb("ggggg","weekYear"),Pb("GGGG","isoWeekYear"),Pb("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),W("G",Fd),W("g",Fd),W("GG",yd,ud),W("gg",yd,ud),W("GGGG",Cd,wd),W("gggg",Cd,wd),W("GGGGG",Dd,xd),W("ggggg",Dd,xd),_(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=r(a)}),_(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),R("Q",0,"Qo","quarter"),J("quarter","Q"),W("Q",td),$("Q",function(a,b){b[Nd]=3*(r(a)-1)}),R("w",["ww",2],"wo","week"),R("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),W("w",yd),W("ww",yd,ud),W("W",yd),W("WW",yd,ud),_(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=r(a)});var oe={dow:0,doy:6};R("D",["DD",2],"Do","date"),J("date","D"),W("D",yd),W("DD",yd,ud),W("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),$(["D","DD"],Od),$("Do",function(a,b){b[Od]=r(a.match(yd)[0],10)});var pe=M("Date",!0);R("d",0,"do","day"),R("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),R("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),R("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),R("e",0,0,"weekday"),R("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),W("d",yd),W("e",yd),W("E",yd),W("dd",function(a,b){return b.weekdaysMinRegex(a)}),W("ddd",function(a,b){return b.weekdaysShortRegex(a)}),W("dddd",function(a,b){return b.weekdaysRegex(a)}),_(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:j(c).invalidWeekday=a}),_(["d","e","E"],function(a,b,c,d){b[d]=r(a)});var qe="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),re="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),se="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),te=Jd,ue=Jd,ve=Jd;R("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),W("DDD",Bd),W("DDDD",vd),$(["DDD","DDDD"],function(a,b,c){c._dayOfYear=r(a)}),R("H",["HH",2],0,"hour"),R("h",["hh",2],0,oc),R("k",["kk",2],0,pc),R("hmm",0,0,function(){return""+oc.apply(this)+Q(this.minutes(),2)}),R("hmmss",0,0,function(){return""+oc.apply(this)+Q(this.minutes(),2)+Q(this.seconds(),2)}),R("Hmm",0,0,function(){return""+this.hours()+Q(this.minutes(),2)}),R("Hmmss",0,0,function(){return""+this.hours()+Q(this.minutes(),2)+Q(this.seconds(),2)}),qc("a",!0),qc("A",!1),J("hour","h"),W("a",rc),W("A",rc),W("H",yd),W("h",yd),W("HH",yd,ud),W("hh",yd,ud),W("hmm",zd),W("hmmss",Ad),W("Hmm",zd),W("Hmmss",Ad),$(["H","HH"],Pd),$(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),$(["h","hh"],function(a,b,c){b[Pd]=r(a),j(c).bigHour=!0}),$("hmm",function(a,b,c){var d=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d)),j(c).bigHour=!0}),$("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d,2)),b[Rd]=r(a.substr(e)),j(c).bigHour=!0}),$("Hmm",function(a,b,c){var d=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d))}),$("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d,2)),b[Rd]=r(a.substr(e))});var we=/[ap]\.?m?\.?/i,xe=M("Hours",!0);R("m",["mm",2],0,"minute"),J("minute","m"),W("m",yd),W("mm",yd,ud),$(["m","mm"],Qd);var ye=M("Minutes",!1);R("s",["ss",2],0,"second"),J("second","s"),W("s",yd),W("ss",yd,ud),$(["s","ss"],Rd);var ze=M("Seconds",!1);R("S",0,0,function(){return~~(this.millisecond()/100)}),R(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),R(0,["SSS",3],0,"millisecond"),R(0,["SSSS",4],0,function(){return 10*this.millisecond()}),R(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),R(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),R(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),R(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),R(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),W("S",Bd,td),W("SS",Bd,ud),W("SSS",Bd,vd);var Ae;for(Ae="SSSS";Ae.length<=9;Ae+="S")W(Ae,Ed);for(Ae="S";Ae.length<=9;Ae+="S")$(Ae,uc);var Be=M("Milliseconds",!1);R("z",0,0,"zoneAbbr"),R("zz",0,0,"zoneName");var Ce=o.prototype;Ce.add=le,Ce.calendar=kb,Ce.clone=lb,Ce.diff=sb,Ce.endOf=Eb,Ce.format=wb,Ce.from=xb,Ce.fromNow=yb,Ce.to=zb,Ce.toNow=Ab,Ce.get=P,Ce.invalidAt=Nb,Ce.isAfter=mb,Ce.isBefore=nb,Ce.isBetween=ob,Ce.isSame=pb,Ce.isSameOrAfter=qb,Ce.isSameOrBefore=rb,Ce.isValid=Lb,Ce.lang=ne,Ce.locale=Bb,Ce.localeData=Cb,Ce.max=ge,Ce.min=fe,Ce.parsingFlags=Mb,Ce.set=P,Ce.startOf=Db,Ce.subtract=me,Ce.toArray=Ib,Ce.toObject=Jb,Ce.toDate=Hb,Ce.toISOString=vb,Ce.toJSON=Kb,Ce.toString=ub,Ce.unix=Gb,Ce.valueOf=Fb,Ce.creationData=Ob,Ce.year=ee,Ce.isLeapYear=ta,Ce.weekYear=Qb,Ce.isoWeekYear=Rb,Ce.quarter=Ce.quarters=Wb,Ce.month=ha,Ce.daysInMonth=ia,Ce.week=Ce.weeks=$b,Ce.isoWeek=Ce.isoWeeks=_b,Ce.weeksInYear=Tb,Ce.isoWeeksInYear=Sb,Ce.date=pe,Ce.day=Ce.days=gc,Ce.weekday=hc,Ce.isoWeekday=ic,Ce.dayOfYear=nc,Ce.hour=Ce.hours=xe,Ce.minute=Ce.minutes=ye,Ce.second=Ce.seconds=ze,Ce.millisecond=Ce.milliseconds=Be,Ce.utcOffset=Ua,Ce.utc=Wa,Ce.local=Xa,Ce.parseZone=Ya,Ce.hasAlignedHourOffset=Za,Ce.isDST=$a,Ce.isDSTShifted=_a,Ce.isLocal=ab,Ce.isUtcOffset=bb,Ce.isUtc=cb,Ce.isUTC=cb,Ce.zoneAbbr=vc,Ce.zoneName=wc,Ce.dates=u("dates accessor is deprecated. Use date instead.",pe),Ce.months=u("months accessor is deprecated. Use month instead",ha),Ce.years=u("years accessor is deprecated. Use year instead",ee),Ce.zone=u("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Va);var De=Ce,Ee={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Fe={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ge="Invalid date",He="%d",Ie=/\d{1,2}/,Je={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ke=A.prototype;Ke._calendar=Ee,Ke.calendar=zc,Ke._longDateFormat=Fe,Ke.longDateFormat=Ac,Ke._invalidDate=Ge,Ke.invalidDate=Bc,Ke._ordinal=He,Ke.ordinal=Cc,Ke._ordinalParse=Ie,Ke.preparse=Dc,Ke.postformat=Dc,Ke._relativeTime=Je,Ke.relativeTime=Ec,Ke.pastFuture=Fc,Ke.set=y,Ke.months=ca,Ke._months=Wd,Ke.monthsShort=da,Ke._monthsShort=Xd,Ke.monthsParse=fa,Ke._monthsRegex=Zd,Ke.monthsRegex=ka,Ke._monthsShortRegex=Yd,Ke.monthsShortRegex=ja,Ke.week=Xb,Ke._week=oe,Ke.firstDayOfYear=Zb,Ke.firstDayOfWeek=Yb,Ke.weekdays=bc,Ke._weekdays=qe,Ke.weekdaysMin=dc,Ke._weekdaysMin=se,Ke.weekdaysShort=cc,Ke._weekdaysShort=re,Ke.weekdaysParse=fc,Ke._weekdaysRegex=te,Ke.weekdaysRegex=jc,Ke._weekdaysShortRegex=ue,Ke.weekdaysShortRegex=kc,Ke._weekdaysMinRegex=ve,Ke.weekdaysMinRegex=lc,Ke.isPM=sc,Ke._meridiemParse=we,Ke.meridiem=tc,E("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===r(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=u("moment.lang is deprecated. Use moment.locale instead.",E),a.langData=u("moment.langData is deprecated. Use moment.localeData instead.",H);var Le=Math.abs,Me=Yc("ms"),Ne=Yc("s"),Oe=Yc("m"),Pe=Yc("h"),Qe=Yc("d"),Re=Yc("w"),Se=Yc("M"),Te=Yc("y"),Ue=$c("milliseconds"),Ve=$c("seconds"),We=$c("minutes"),Xe=$c("hours"),Ye=$c("days"),Ze=$c("months"),$e=$c("years"),_e=Math.round,af={s:45,m:45,h:22,d:26,M:11},bf=Math.abs,cf=Oa.prototype;cf.abs=Oc,cf.add=Qc,cf.subtract=Rc,cf.as=Wc,cf.asMilliseconds=Me,cf.asSeconds=Ne,cf.asMinutes=Oe,cf.asHours=Pe,cf.asDays=Qe,cf.asWeeks=Re,cf.asMonths=Se,cf.asYears=Te,cf.valueOf=Xc,cf._bubble=Tc,cf.get=Zc,cf.milliseconds=Ue,cf.seconds=Ve,cf.minutes=We,cf.hours=Xe,cf.days=Ye,cf.weeks=_c,cf.months=Ze,cf.years=$e,cf.humanize=dd,cf.toISOString=ed,cf.toString=ed,cf.toJSON=ed,cf.locale=Bb,cf.localeData=Cb,cf.toIsoString=u("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ed),cf.lang=ne,R("X",0,0,"unix"),R("x",0,0,"valueOf"),W("x",Fd),W("X",Id),$("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),$("x",function(a,b,c){c._d=new Date(r(a))}),a.version="2.13.0",b(Ka),a.fn=De,a.min=Ma,a.max=Na,a.now=he,a.utc=h,a.unix=xc,a.months=Jc,a.isDate=d,a.locale=E,a.invalid=l,a.duration=db,a.isMoment=p,a.weekdays=Lc,a.parseZone=yc,a.localeData=H,a.isDuration=Pa,a.monthsShort=Kc,a.weekdaysMin=Nc,a.defineLocale=F,a.updateLocale=G,a.locales=I,a.weekdaysShort=Mc,a.normalizeUnits=K,a.relativeTimeThreshold=cd,a.prototype=De;var df=a;return df});
/**
* @version: 3.0.3
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2018 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
// Following the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Make globaly available as well
        define(['moment', 'jquery'], function (moment, jquery) {
            if (!jquery.fn) jquery.fn = {}; // webpack server rendering
            if (typeof moment !== 'function' && moment.default) moment = moment.default
            return factory(moment, jquery);
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node / Browserify
        //isomorphic issue
        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        var moment = (typeof window != 'undefined' && typeof window.moment != 'undefined') ? window.moment : require('moment');
        module.exports = factory(moment, jQuery);
    } else {
        // Browser globals
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
}(this, function(moment, $) {
    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.maxSpan = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.minYear = moment().subtract(100, 'year').format('YYYY');
        this.maxYear = moment().add(100, 'year').format('YYYY');
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyButtonClasses = 'btn-primary';
        this.cancelButtonClasses = 'btn-default';

        this.locale = {
            direction: 'ltr',
            format: moment.localeData().longDateFormat('L'),
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() { };

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template =
            '<div class="daterangepicker">' +
                '<div class="ranges"></div>' +
                '<div class="drp-calendar left">' +
                    '<div class="calendar-table"></div>' +
                    '<div class="calendar-time"></div>' +
                '</div>' +
                '<div class="drp-calendar right">' +
                    '<div class="calendar-table"></div>' +
                    '<div class="calendar-time"></div>' +
                '</div>' +
                '<div class="drp-buttons">' +
                    '<span class="drp-selected"></span>' +
                    '<button class="cancelBtn" type="button"></button>' +
                    '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.direction === 'string')
                this.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
              this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
              this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
              this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
              this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
              this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string'){
                //Support unicode chars in the custom range name.
                var elem = document.createElement('textarea');
                elem.innerHTML = options.locale.customRangeLabel;
                var rangeHtml = elem.value;
                this.locale.customRangeLabel = rangeHtml;
            }
        }
        this.container.addClass(this.locale.direction);

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyButtonClasses === 'string')
            this.applyButtonClasses = options.applyButtonClasses;

        if (typeof options.applyClass === 'string') //backwards compat
            this.applyButtonClasses = options.applyClass;

        if (typeof options.cancelButtonClasses === 'string')
            this.cancelButtonClasses = options.cancelButtonClasses;

        if (typeof options.cancelClass === 'string') //backwards compat
            this.cancelButtonClasses = options.cancelClass;

        if (typeof options.maxSpan === 'object')
            this.maxSpan = options.maxSpan;

        if (typeof options.dateLimit === 'object') //backwards compat
            this.maxSpan = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.minYear === 'number')
            this.minYear = options.minYear;

        if (typeof options.maxYear === 'number')
            this.maxYear = options.maxYear;

        if (typeof options.showCustomRangeLabel === 'boolean')
            this.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function')
            this.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is(':text')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or maxSpan
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate))
                    maxDate = start.clone().add(this.maxSpan);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day'))
                  || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply) {
            this.container.addClass('auto-apply');
        }

        if (typeof options.ranges === 'object')
            this.container.addClass('show-ranges');

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.drp-calendar.left').addClass('single');
            this.container.find('.drp-calendar.left').show();
            this.container.find('.drp-calendar.right').hide();
            if (!this.timePicker) {
                this.container.addClass('auto-apply');
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyButtonClasses.length)
            this.container.find('.applyBtn').addClass(this.applyButtonClasses);
        if (this.cancelButtonClasses.length)
            this.container.find('.cancelBtn').addClass(this.cancelButtonClasses);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.drp-calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))

        this.container.find('.ranges')
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))

        this.container.find('.drp-buttons')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))

        if (this.element.is('input') || this.element.is('button')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this) //IE 11 compatibility
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
            this.element.on('keydown.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        this.updateElement();

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.add(1,'d').startOf('day').subtract(1,'second');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate.clone();

            if (this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.maxSpan);

            this.previousRightTime = this.endDate.clone();

            this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        isCustomDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate)
                this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
              this.rightCalendar.month = this.maxDate.clone().date(2);
              this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;
            var arrow = this.locale.direction == 'ltr' ? {left: 'chevron-left', right: 'chevron-right'} : {left: 'chevron-right', right: 'chevron-left'};

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><span></span></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (this.maxYear);
                var minYear = (minDate && minDate.year()) || (this.minYear);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><span></span></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the maxSpan setting in order to
            //grey out end dates beyond the maxSpan
            if (this.endDate == null && this.maxSpan) {
                var maxLimit = this.startDate.clone().add(this.maxSpan).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    //apply custom classes for this date
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string')
                            classes.push(isCustom);
                        else
                            Array.prototype.push.apply(classes, isCustom);
                    }

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.drp-calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            // Don't bother updating the time picker if it's currently disabled
            // because an end date hasn't been clicked yet
            if (side == 'right' && !this.endDate) return;

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.maxSpan && (!this.maxDate || this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate)))
                maxDate = this.startDate.clone().add(this.maxSpan);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.drp-calendar.right .calendar-time');
                if (timeSelector.html() != '') {

                    selected.hour(selected.hour() || timeSelector.find('.hourselect option:selected').val());
                    selected.minute(selected.minute() || timeSelector.find('.minuteselect option:selected').val());
                    selected.second(selected.second() || timeSelector.find('.secondselect option:selected').val());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                }

                if (selected.isBefore(this.startDate))
                    selected = this.startDate.clone();

                if (maxDate && selected.isAfter(maxDate))
                    selected = maxDate.clone();

            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.drp-calendar.' + side + ' .calendar-time').html(html);

        },

        updateFormInputs: function() {

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('drop-up');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                            - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
                ) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this);
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        clickRange: function(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.drp-calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.drp-calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.drp-calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.drp-calendar tbody td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.drp-calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.drp-calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            // * if one of the inputs above the calendars was focused, cancel that manual input
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else { // picking end
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                  this.calculateChosenLabel();
                  this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker)
                    this.clickApply();
            }

            this.updateView();

            //This is to cancel the blur event handler if the mouse was in one of the inputs
            e.stopPropagation();

        },

        calculateChosenLabel: function () {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
              if (this.timePicker) {
                    var format = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
                    //ignore times when comparing dates if time picker seconds is not enabled
                    if (this.startDate.format(format) == this.ranges[range][0].format(format) && this.endDate.format(format) == this.ranges[range][1].format(format)) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
                        break;
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').attr('data-range-key');
                } else {
                    this.chosenLabel = null;
                }
                this.showCalendars();
            }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.drp-calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.drp-calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.drp-calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }

            //hide on esc and prevent propagation
            if (e.keyCode === 27) {
                e.preventDefault();
                e.stopPropagation();

                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && this.autoUpdateInput) {
                var newValue = this.startDate.format(this.locale.format);
                if (!this.singleDatePicker) {
                    newValue += this.locale.separator + this.endDate.format(this.locale.format);
                }
                if (newValue !== this.element.val()) {
                    this.element.val(newValue).trigger('change');
                }
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        var implementOptions = $.extend(true, {}, $.fn.daterangepicker.defaultOptions, options);
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, implementOptions, callback));
        });
        return this;
    };

    return DateRangePicker;

}));

!function(a){jQuery.fn[a]=function(e){return e?this.bind("resize",(t=e,function(){var e=this,a=arguments;i?clearTimeout(i):n&&t.apply(e,a),i=setTimeout(function(){n||t.apply(e,a),i=null},o||100)})):this.trigger(a);var t,o,n,i}}((jQuery,"smartresize"));var CURRENT_URL=window.location.href.split("#")[0].split("?")[0],$BODY=$("body"),$MENU_TOGGLE=$("#menu_toggle"),$SIDEBAR_MENU=$("#sidebar-menu"),$SIDEBAR_FOOTER=$(".sidebar-footer"),$LEFT_COL=$(".left_col"),$RIGHT_COL=$(".right_col"),$NAV_MENU=$(".nav_menu"),$FOOTER=$("footer");function init_sidebar(){function t(){$RIGHT_COL.css("min-height",$(window).height());var e=$BODY.outerHeight(),a=$BODY.hasClass("footer_fixed")?-10:$FOOTER.height(),t=$LEFT_COL.eq(1).height()+$SIDEBAR_FOOTER.height(),o=e<t?t:e;o-=$NAV_MENU.height()+a,$RIGHT_COL.css("min-height",o)}function o(){$SIDEBAR_MENU.find("li").removeClass("active active-sm"),$SIDEBAR_MENU.find("li ul").slideUp()}$SIDEBAR_MENU.find("a").on("click",function(e){var a=$(this).parent();a.is(".active")?(a.removeClass("active active-sm"),$("ul:first",a).slideUp(function(){t()})):(a.parent().is(".child_menu")?$BODY.is("nav-sm")&&(a.parent().is("child_menu")||o()):o(),a.addClass("active"),$("ul:first",a).slideDown(function(){t()}))}),$MENU_TOGGLE.on("click",function(){$BODY.hasClass("nav-md")?($SIDEBAR_MENU.find("li.active ul").hide(),$SIDEBAR_MENU.find("li.active").addClass("active-sm").removeClass("active")):($SIDEBAR_MENU.find("li.active-sm ul").show(),$SIDEBAR_MENU.find("li.active-sm").addClass("active").removeClass("active-sm")),$BODY.toggleClass("nav-md nav-sm"),t(),$(".dataTable").each(function(){$(this).dataTable().fnDraw()})}),$SIDEBAR_MENU.find('a[href="'+CURRENT_URL+'"]').parent("li").addClass("current-page"),$SIDEBAR_MENU.find("a").filter(function(){return this.href==CURRENT_URL}).parent("li").addClass("current-page").parents("ul").slideDown(function(){t()}).parent().addClass("active"),$(window).smartresize(function(){t()}),t(),$.fn.mCustomScrollbar&&$(".menu_fixed").mCustomScrollbar({autoHideScrollbar:!0,theme:"minimal",mouseWheel:{preventDefault:!0}})}$(document).ready(function(){$(".collapse-link").on("click",function(){var e=$(this).closest(".x_panel"),a=$(this).find("i"),t=e.find(".x_content");e.attr("style")?t.slideToggle(200,function(){e.removeAttr("style")}):(t.slideToggle(200),e.css("height","auto")),a.toggleClass("fa-chevron-up fa-chevron-down")}),$(".close-link").click(function(){$(this).closest(".x_panel").remove()})}),$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip({container:"body"})}),$(document).ready(function(){$(".progress .progress-bar")[0]&&$(".progress .progress-bar").progressbar()}),$(document).ready(function(){$(".js-switch")[0]&&Array.prototype.slice.call(document.querySelectorAll(".js-switch")).forEach(function(e){new Switchery(e,{color:"#26B99A"})})}),$(document).ready(function(){$("input.flat")[0]&&$(document).ready(function(){$("input.flat").iCheck({checkboxClass:"icheckbox_flat-green",radioClass:"iradio_flat-green"})})}),$("table input").on("ifChecked",function(){checkState="",$(this).parent().parent().parent().addClass("selected"),countChecked()}),$("table input").on("ifUnchecked",function(){checkState="",$(this).parent().parent().parent().removeClass("selected"),countChecked()});var checkState="";function countChecked(){"all"===checkState&&$(".bulk_action input[name='table_records']").iCheck("check"),"none"===checkState&&$(".bulk_action input[name='table_records']").iCheck("uncheck");var e=$(".bulk_action input[name='table_records']:checked").length;e?($(".column-title").hide(),$(".bulk-actions").show(),$(".action-cnt").html(e+" Records Selected")):($(".column-title").show(),$(".bulk-actions").hide())}$(".bulk_action input").on("ifChecked",function(){checkState="",$(this).parent().parent().parent().addClass("selected"),countChecked()}),$(".bulk_action input").on("ifUnchecked",function(){checkState="",$(this).parent().parent().parent().removeClass("selected"),countChecked()}),$(".bulk_action input#check-all").on("ifChecked",function(){checkState="all",countChecked()}),$(".bulk_action input#check-all").on("ifUnchecked",function(){checkState="none",countChecked()}),$(document).ready(function(){$(".expand").on("click",function(){$(this).next().slideToggle(200),$expand=$(this).find(">:first-child"),"+"==$expand.text()?$expand.text("-"):$expand.text("+")})}),"undefined"!=typeof NProgress&&($(document).ready(function(){NProgress.start()}),$(window).on("load",function(){NProgress.done()}));var originalLeave=$.fn.popover.Constructor.prototype.leave;function gd(e,a,t){return new Date(e,a-1,t).getTime()}function init_flot_chart(){if(void 0!==$.plot){console.log("init_flot_chart");for(var e=[[gd(2012,1,1),17],[gd(2012,1,2),74],[gd(2012,1,3),6],[gd(2012,1,4),39],[gd(2012,1,5),20],[gd(2012,1,6),85],[gd(2012,1,7),7]],a=[[gd(2012,1,1),82],[gd(2012,1,2),23],[gd(2012,1,3),66],[gd(2012,1,4),9],[gd(2012,1,5),119],[gd(2012,1,6),6],[gd(2012,1,7),9]],t=[],o=0;o<30;o++)t.push([new Date(Date.today().add(o).days()).getTime(),Math.floor(21*Math.random())+20+o+o+10]);var n={grid:{show:!0,aboveData:!0,color:"#3f3f3f",labelMargin:10,axisMargin:0,borderWidth:0,borderColor:null,minBorderMargin:5,clickable:!0,hoverable:!0,autoHighlight:!0,mouseActiveRadius:100},series:{lines:{show:!0,fill:!0,lineWidth:2,steps:!1},points:{show:!0,radius:4.5,symbol:"circle",lineWidth:3}},legend:{position:"ne",margin:[0,-25],noColumns:0,labelBoxBorderColor:null,labelFormatter:function(e,a){return e+"&nbsp;&nbsp;"},width:40,height:1},colors:["#96CA59","#3F97EB","#72c380","#6f7a8a","#f7cb38","#5a8022","#2c7282"],shadowSize:0,tooltip:!0,tooltipOpts:{content:"%s: %y.0",xDateFormat:"%d/%m",shifts:{x:-30,y:-50},defaultTheme:!1},yaxis:{min:0},xaxis:{mode:"time",minTickSize:[1,"day"],timeformat:"%d/%m/%y",min:t[0][0],max:t[20][0]}};$("#chart_plot_01").length&&(console.log("Plot1"),$.plot($("#chart_plot_01"),[e,a],{series:{lines:{show:!1,fill:!0},splines:{show:!0,tension:.4,lineWidth:1,fill:.4},points:{radius:0,show:!0},shadowSize:2},grid:{verticalLines:!0,hoverable:!0,clickable:!0,tickColor:"#d5d5d5",borderWidth:1,color:"#fff"},colors:["rgba(38, 185, 154, 0.38)","rgba(3, 88, 106, 0.38)"],xaxis:{tickColor:"rgba(51, 51, 51, 0.06)",mode:"time",tickSize:[1,"day"],axisLabel:"Date",axisLabelUseCanvas:!0,axisLabelFontSizePixels:12,axisLabelFontFamily:"Verdana, Arial",axisLabelPadding:10},yaxis:{ticks:8,tickColor:"rgba(51, 51, 51, 0.06)"},tooltip:!1})),$("#chart_plot_02").length&&(console.log("Plot2"),$.plot($("#chart_plot_02"),[{label:"Email Sent",data:t,lines:{fillColor:"rgba(150, 202, 89, 0.12)"},points:{fillColor:"#fff"}}],n)),$("#chart_plot_03").length&&(console.log("Plot3"),$.plot($("#chart_plot_03"),[{label:"Registrations",data:[[0,1],[1,9],[2,6],[3,10],[4,5],[5,17],[6,6],[7,10],[8,7],[9,11],[10,35],[11,9],[12,12],[13,5],[14,3],[15,4],[16,9]],lines:{fillColor:"rgba(150, 202, 89, 0.12)"},points:{fillColor:"#fff"}}],{series:{curvedLines:{apply:!0,active:!0,monotonicFit:!0}},colors:["#26B99A"],grid:{borderWidth:{top:0,right:0,bottom:1,left:1},borderColor:{bottom:"#7F8790",left:"#7F8790"}}}))}}function init_starrr(){"undefined"!=typeof starrr&&(console.log("init_starrr"),$(".stars").starrr(),$(".stars-existing").starrr({rating:4}),$(".stars").on("starrr:change",function(e,a){$(".stars-count").html(a)}),$(".stars-existing").on("starrr:change",function(e,a){$(".stars-count-existing").html(a)}))}function init_JQVmap(){void 0!==jQuery.fn.vectorMap&&(console.log("init_JQVmap"),$("#world-map-gdp").length&&$("#world-map-gdp").vectorMap({map:"world_en",backgroundColor:null,color:"#ffffff",hoverOpacity:.7,selectedColor:"#666666",enableZoom:!0,showTooltip:!0,values:sample_data,scaleColors:["#E6F2F0","#149B7E"],normalizeFunction:"polynomial"}),$("#usa_map").length&&$("#usa_map").vectorMap({map:"usa_en",backgroundColor:null,color:"#ffffff",hoverOpacity:.7,selectedColor:"#666666",enableZoom:!0,showTooltip:!0,values:sample_data,scaleColors:["#E6F2F0","#149B7E"],normalizeFunction:"polynomial"}))}function init_skycons(){if("undefined"!=typeof Skycons){console.log("init_skycons");var e,a=new Skycons({color:"#73879C"}),t=["clear-day","clear-night","partly-cloudy-day","partly-cloudy-night","cloudy","rain","sleet","snow","wind","fog"];for(e=t.length;e--;)a.set(t[e],t[e]);a.play()}}function init_chart_doughnut(){if("undefined"!=typeof Chart&&(console.log("init_chart_doughnut"),$(".canvasDoughnut").length)){var a={type:"doughnut",tooltipFillColor:"rgba(51, 51, 51, 0.55)",data:{labels:["Symbian","Blackberry","Other","Android","IOS"],datasets:[{data:[15,20,30,10,30],backgroundColor:["#BDC3C7","#9B59B6","#E74C3C","#26B99A","#3498DB"],hoverBackgroundColor:["#CFD4D8","#B370CF","#E95E4F","#36CAAB","#49A9EA"]}]},options:{legend:!1,responsive:!1}};$(".canvasDoughnut").each(function(){var e=$(this);new Chart(e,a)})}}function init_gauge(){if("undefined"!=typeof Gauge){console.log("init_gauge ["+$(".gauge-chart").length+"]"),console.log("init_gauge");var e={lines:12,angle:0,lineWidth:.4,pointer:{length:.75,strokeWidth:.042,color:"#1D212A"},limitMax:"false",colorStart:"#1ABC9C",colorStop:"#1ABC9C",strokeColor:"#F0F3F3",generateGradient:!0};if($("#chart_gauge_01").length)var a=document.getElementById("chart_gauge_01"),t=new Gauge(a).setOptions(e);if($("#gauge-text").length&&(t.maxValue=6e3,t.animationSpeed=32,t.set(3200),t.setTextField(document.getElementById("gauge-text"))),$("#chart_gauge_02").length)var o=document.getElementById("chart_gauge_02"),n=new Gauge(o).setOptions(e);$("#gauge-text2").length&&(n.maxValue=9e3,n.animationSpeed=32,n.set(2400),n.setTextField(document.getElementById("gauge-text2")))}}function init_sparklines(){void 0!==jQuery.fn.sparkline&&(console.log("init_sparklines"),$(".sparkline_one").sparkline([2,4,3,4,5,4,5,4,3,4,5,6,4,5,6,3,5,4,5,4,5,4,3,4,5,6,7,5,4,3,5,6],{type:"bar",height:"125",barWidth:13,colorMap:{7:"#a1a1a1"},barSpacing:2,barColor:"#26B99A"}),$(".sparkline_two").sparkline([2,4,3,4,5,4,5,4,3,4,5,6,7,5,4,3,5,6],{type:"bar",height:"40",barWidth:9,colorMap:{7:"#a1a1a1"},barSpacing:2,barColor:"#26B99A"}),$(".sparkline_three").sparkline([2,4,3,4,5,4,5,4,3,4,5,6,7,5,4,3,5,6],{type:"line",width:"200",height:"40",lineColor:"#26B99A",fillColor:"rgba(223, 223, 223, 0.57)",lineWidth:2,spotColor:"#26B99A",minSpotColor:"#26B99A"}),$(".sparkline11").sparkline([2,4,3,4,5,4,5,4,3,4,6,2,4,3,4,5,4,5,4,3],{type:"bar",height:"40",barWidth:8,colorMap:{7:"#a1a1a1"},barSpacing:2,barColor:"#26B99A"}),$(".sparkline22").sparkline([2,4,3,4,7,5,4,3,5,6,2,4,3,4,5,4,5,4,3,4,6],{type:"line",height:"40",width:"200",lineColor:"#26B99A",fillColor:"#ffffff",lineWidth:3,spotColor:"#34495E",minSpotColor:"#34495E"}),$(".sparkline_bar").sparkline([2,4,3,4,5,4,5,4,3,4,5,6,4,5,6,3,5],{type:"bar",colorMap:{7:"#a1a1a1"},barColor:"#26B99A"}),$(".sparkline_area").sparkline([5,6,7,9,9,5,3,2,2,4,6,7],{type:"line",lineColor:"#26B99A",fillColor:"#26B99A",spotColor:"#4578a0",minSpotColor:"#728fb2",maxSpotColor:"#6d93c4",highlightSpotColor:"#ef5179",highlightLineColor:"#8ba8bf",spotRadius:2.5,width:85}),$(".sparkline_line").sparkline([2,4,3,4,5,4,5,4,3,4,5,6,4,5,6,3,5],{type:"line",lineColor:"#26B99A",fillColor:"#ffffff",width:85,spotColor:"#34495E",minSpotColor:"#34495E"}),$(".sparkline_pie").sparkline([1,1,2,1],{type:"pie",sliceColors:["#26B99A","#ccc","#75BCDD","#D66DE2"]}),$(".sparkline_discreet").sparkline([4,6,7,7,4,3,2,1,4,4,2,4,3,7,8,9,7,6,4,3],{type:"discrete",barWidth:3,lineColor:"#26B99A",width:"85"}))}function init_autocomplete(){if(void 0!==$.fn.autocomplete){console.log("init_autocomplete");var e=$.map({AD:"Andorra",A2:"Andorra Test",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AN:"Netherlands Antilles",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei",BO:"Bolivia",BQ:"British Antarctic Territory",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos [Keeling] Islands",CD:"Congo - Kinshasa",CF:"Central African Republic",CG:"Congo - Brazzaville",CH:"Switzerland",CI:"Côte d’Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CS:"Serbia and Montenegro",CT:"Canton and Enderbury Islands",CU:"Cuba",CV:"Cape Verde",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DD:"East Germany",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Micronesia",FO:"Faroe Islands",FQ:"French Southern and Antarctic Territories",FR:"France",FX:"Metropolitan France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong SAR China",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",JT:"Johnston Island",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin",MG:"Madagascar",MH:"Marshall Islands",MI:"Midway Islands",MK:"Macedonia",ML:"Mali",MM:"Myanmar [Burma]",MN:"Mongolia",MO:"Macau SAR China",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NQ:"Dronning Maud Land",NR:"Nauru",NT:"Neutral Zone",NU:"Niue",NZ:"New Zealand",OM:"Oman",PA:"Panama",PC:"Pacific Islands Trust Territory",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn Islands",PR:"Puerto Rico",PS:"Palestinian Territories",PT:"Portugal",PU:"U.S. Miscellaneous Pacific Islands",PW:"Palau",PY:"Paraguay",PZ:"Panama Canal Zone",QA:"Qatar",RE:"Réunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",ST:"São Tomé and Príncipe",SU:"Union of Soviet Socialist Republics",SV:"El Salvador",SY:"Syria",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"U.S. Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Vatican City",VC:"Saint Vincent and the Grenadines",VD:"North Vietnam",VE:"Venezuela",VG:"British Virgin Islands",VI:"U.S. Virgin Islands",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WK:"Wake Island",WS:"Samoa",YD:"People's Democratic Republic of Yemen",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"Unknown or Invalid Region"},function(e,a){return{value:e,data:a}});$("#autocomplete-custom-append").autocomplete({lookup:e})}}function init_autosize(){void 0!==$.fn.autosize&&autosize($(".resizable_textarea"))}function init_parsley(){if("undefined"!=typeof parsley){console.log("init_parsley"),$("parsley:field:validate",function(){e()}),$("#demo-form .btn").on("click",function(){$("#demo-form").parsley().validate(),e()});var e=function(){!0===$("#demo-form").parsley().isValid()?($(".bs-callout-info").removeClass("hidden"),$(".bs-callout-warning").addClass("hidden")):($(".bs-callout-info").addClass("hidden"),$(".bs-callout-warning").removeClass("hidden"))};$("parsley:field:validate",function(){e()}),$("#demo-form2 .btn").on("click",function(){$("#demo-form2").parsley().validate(),e()});e=function(){!0===$("#demo-form2").parsley().isValid()?($(".bs-callout-info").removeClass("hidden"),$(".bs-callout-warning").addClass("hidden")):($(".bs-callout-info").addClass("hidden"),$(".bs-callout-warning").removeClass("hidden"))};try{hljs.initHighlightingOnLoad()}catch(e){}}}function onAddTag(e){alert("Added a tag: "+e)}function onRemoveTag(e){alert("Removed a tag: "+e)}function onChangeTag(e,a){alert("Changed a tag: "+a)}function init_TagsInput(){void 0!==$.fn.tagsInput&&$("#tags_1").tagsInput({width:"auto"})}function init_select2(){"undefined"!=typeof select2&&(console.log("init_toolbox"),$(".select2_single").select2({placeholder:"Select a state",allowClear:!0}),$(".select2_group").select2({}),$(".select2_multiple").select2({maximumSelectionLength:4,placeholder:"With Max Selection limit 4",allowClear:!0}))}function init_wysiwyg(){function a(e,a){var t="";"unsupported-file-type"===e?t="Unsupported format "+a:console.log("error uploading file",e,a),$('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button><strong>File upload error</strong> '+t+" </div>").prependTo("#alerts")}void 0!==$.fn.wysiwyg&&(console.log("init_wysiwyg"),$(".editor-wrapper").each(function(){var e=$(this).attr("id");$(this).wysiwyg({toolbarSelector:'[data-target="#'+e+'"]',fileUploadError:a})}),window.prettyPrint,prettyPrint())}function init_cropper(){if(void 0!==$.fn.cropper){console.log("init_cropper");var i=$("#image"),n=$("#download"),a=$("#dataX"),t=$("#dataY"),o=$("#dataHeight"),r=$("#dataWidth"),l=$("#dataRotate"),s=$("#dataScaleX"),c=$("#dataScaleY"),d={aspectRatio:16/9,preview:".img-preview",crop:function(e){a.val(Math.round(e.x)),t.val(Math.round(e.y)),o.val(Math.round(e.height)),r.val(Math.round(e.width)),l.val(e.rotate),s.val(e.scaleX),c.val(e.scaleY)}};$('[data-toggle="tooltip"]').tooltip(),i.on({"build.cropper":function(e){console.log(e.type)},"built.cropper":function(e){console.log(e.type)},"cropstart.cropper":function(e){console.log(e.type,e.action)},"cropmove.cropper":function(e){console.log(e.type,e.action)},"cropend.cropper":function(e){console.log(e.type,e.action)},"crop.cropper":function(e){console.log(e.type,e.x,e.y,e.width,e.height,e.rotate,e.scaleX,e.scaleY)},"zoom.cropper":function(e){console.log(e.type,e.ratio)}}).cropper(d),$.isFunction(document.createElement("canvas").getContext)||$('button[data-method="getCroppedCanvas"]').prop("disabled",!0),void 0===document.createElement("cropper").style.transition&&($('button[data-method="rotate"]').prop("disabled",!0),$('button[data-method="scale"]').prop("disabled",!0)),void 0===n[0].download&&n.addClass("disabled"),$(".docs-toggles").on("change","input",function(){var e,a,t=$(this),o=t.attr("name"),n=t.prop("type");i.data("cropper")&&("checkbox"===n?(d[o]=t.prop("checked"),e=i.cropper("getCropBoxData"),a=i.cropper("getCanvasData"),d.built=function(){i.cropper("setCropBoxData",e),i.cropper("setCanvasData",a)}):"radio"===n&&(d[o]=t.val()),i.cropper("destroy").cropper(d))}),$(".docs-buttons").on("click","[data-method]",function(){var e,a,t=$(this),o=t.data();if(!t.prop("disabled")&&!t.hasClass("disabled")&&i.data("cropper")&&o.method){if(void 0!==(o=$.extend({},o)).target&&(e=$(o.target),void 0===o.option))try{o.option=JSON.parse(e.val())}catch(e){console.log(e.message)}switch(a=i.cropper(o.method,o.option,o.secondOption),o.method){case"scaleX":case"scaleY":$(this).data("option",-o.option);break;case"getCroppedCanvas":a&&($("#getCroppedCanvasModal").modal().find(".modal-body").html(a),n.hasClass("disabled")||n.attr("href",a.toDataURL()))}if($.isPlainObject(a)&&e)try{e.val(JSON.stringify(a))}catch(e){console.log(e.message)}}}),$(document.body).on("keydown",function(e){if(i.data("cropper")&&!(300<this.scrollTop))switch(e.which){case 37:e.preventDefault(),i.cropper("move",-1,0);break;case 38:e.preventDefault(),i.cropper("move",0,-1);break;case 39:e.preventDefault(),i.cropper("move",1,0);break;case 40:e.preventDefault(),i.cropper("move",0,1)}});var u,m=$("#inputImage"),p=window.URL||window.webkitURL;p?m.change(function(){var e,a=this.files;i.data("cropper")&&a&&a.length&&(e=a[0],/^image\/\w+$/.test(e.type)?(u=p.createObjectURL(e),i.one("built.cropper",function(){p.revokeObjectURL(u)}).cropper("reset").cropper("replace",u),m.val("")):window.alert("Please choose an image file."))}):m.prop("disabled",!0).parent().addClass("disabled")}}function init_knob(){if(void 0!==$.fn.knob){console.log("init_knob"),$(".knob").knob({change:function(e){},release:function(e){console.log("release : "+e)},cancel:function(){console.log("cancel : ",this)},draw:function(){if("tron"==this.$.data("skin")){this.cursorExt=.3;var e,a=this.arc(this.cv);return this.g.lineWidth=this.lineWidth,this.o.displayPrevious&&(e=this.arc(this.v),this.g.beginPath(),this.g.strokeStyle=this.pColor,this.g.arc(this.xy,this.xy,this.radius-this.lineWidth,e.s,e.e,e.d),this.g.stroke()),this.g.beginPath(),this.g.strokeStyle=this.o.fgColor,this.g.arc(this.xy,this.xy,this.radius-this.lineWidth,a.s,a.e,a.d),this.g.stroke(),this.g.lineWidth=2,this.g.beginPath(),this.g.strokeStyle=this.o.fgColor,this.g.arc(this.xy,this.xy,this.radius-this.lineWidth+1+2*this.lineWidth/3,0,2*Math.PI,!1),this.g.stroke(),!1}}});var e,a=0,t=0,o=0,n=$("div.idir"),i=$("div.ival");$("input.infinite").knob({min:0,max:20,stopper:!1,change:function(){e>this.cv?a?(o--,n.show().html("-").fadeOut(),i.html(o),a=0):(a=1,t=0):e<this.cv&&(t?(o++,n.show().html("+").fadeOut(),i.html(o),t=0):(t=1,a=0)),e=this.cv}})}}function init_InputMask(){void 0!==$.fn.inputmask&&(console.log("init_InputMask"),$(":input").inputmask())}function init_ColorPicker(){void 0!==$.fn.colorpicker&&(console.log("init_ColorPicker"),$(".demo1").colorpicker(),$(".demo2").colorpicker(),$("#demo_forceformat").colorpicker({format:"rgba",horizontal:!0}),$("#demo_forceformat3").colorpicker({format:"rgba"}),$(".demo-auto").colorpicker())}function init_IonRangeSlider(){void 0!==$.fn.ionRangeSlider&&(console.log("init_IonRangeSlider"),$("#range_27").ionRangeSlider({type:"double",min:1e6,max:2e6,grid:!0,force_edges:!0}),$("#range").ionRangeSlider({hide_min_max:!0,keyboard:!0,min:0,max:5e3,from:1e3,to:4e3,type:"double",step:1,prefix:"$",grid:!0}),$("#range_25").ionRangeSlider({type:"double",min:1e6,max:2e6,grid:!0}),$("#range_26").ionRangeSlider({type:"double",min:0,max:1e4,step:500,grid:!0,grid_snap:!0}),$("#range_31").ionRangeSlider({type:"double",min:0,max:100,from:30,to:70,from_fixed:!0}),$(".range_min_max").ionRangeSlider({type:"double",min:0,max:100,from:30,to:70,max_interval:50}),$(".range_time24").ionRangeSlider({min:+moment().subtract(12,"hours").format("X"),max:+moment().format("X"),from:+moment().subtract(6,"hours").format("X"),grid:!0,force_edges:!0,prettify:function(e){return moment(e,"X").format("Do MMMM, HH:mm")}}))}function init_daterangepicker(){if(void 0!==$.fn.daterangepicker){console.log("init_daterangepicker");function e(e,a,t){console.log(e.toISOString(),a.toISOString(),t),$("#reportrange span").html(e.format("MMMM D, YYYY")+" - "+a.format("MMMM D, YYYY"))}var a={startDate:moment().subtract(29,"days"),endDate:moment(),minDate:"01/01/2012",maxDate:"12/31/2015",dateLimit:{days:60},showDropdowns:!0,showWeekNumbers:!0,timePicker:!1,timePickerIncrement:1,timePicker12Hour:!0,ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]},opens:"left",buttonClasses:["btn btn-default"],applyClass:"btn-small btn-primary",cancelClass:"btn-small",format:"MM/DD/YYYY",separator:" to ",locale:{applyLabel:"Submit",cancelLabel:"Clear",fromLabel:"From",toLabel:"To",customRangeLabel:"Custom",daysOfWeek:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],firstDay:1}};$("#reportrange span").html(moment().subtract(29,"days").format("MMMM D, YYYY")+" - "+moment().format("MMMM D, YYYY")),$("#reportrange").daterangepicker(a,e),$("#reportrange").on("show.daterangepicker",function(){console.log("show event fired")}),$("#reportrange").on("hide.daterangepicker",function(){console.log("hide event fired")}),$("#reportrange").on("apply.daterangepicker",function(e,a){console.log("apply event fired, start/end dates are "+a.startDate.format("MMMM D, YYYY")+" to "+a.endDate.format("MMMM D, YYYY"))}),$("#reportrange").on("cancel.daterangepicker",function(e,a){console.log("cancel event fired")}),$("#options1").click(function(){$("#reportrange").data("daterangepicker").setOptions(a,e)}),$("#options2").click(function(){$("#reportrange").data("daterangepicker").setOptions(optionSet2,e)}),$("#destroy").click(function(){$("#reportrange").data("daterangepicker").remove()})}}function init_daterangepicker_right(){if(void 0!==$.fn.daterangepicker){console.log("init_daterangepicker_right");function e(e,a,t){console.log(e.toISOString(),a.toISOString(),t),$("#reportrange_right span").html(e.format("MMMM D, YYYY")+" - "+a.format("MMMM D, YYYY"))}var a={startDate:moment().subtract(29,"days"),endDate:moment(),minDate:"01/01/2012",maxDate:"12/31/2020",dateLimit:{days:60},showDropdowns:!0,showWeekNumbers:!0,timePicker:!1,timePickerIncrement:1,timePicker12Hour:!0,ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]},opens:"right",buttonClasses:["btn btn-default"],applyClass:"btn-small btn-primary",cancelClass:"btn-small",format:"MM/DD/YYYY",separator:" to ",locale:{applyLabel:"Submit",cancelLabel:"Clear",fromLabel:"From",toLabel:"To",customRangeLabel:"Custom",daysOfWeek:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],firstDay:1}};$("#reportrange_right span").html(moment().subtract(29,"days").format("MMMM D, YYYY")+" - "+moment().format("MMMM D, YYYY")),$("#reportrange_right").daterangepicker(a,e),$("#reportrange_right").on("show.daterangepicker",function(){console.log("show event fired")}),$("#reportrange_right").on("hide.daterangepicker",function(){console.log("hide event fired")}),$("#reportrange_right").on("apply.daterangepicker",function(e,a){console.log("apply event fired, start/end dates are "+a.startDate.format("MMMM D, YYYY")+" to "+a.endDate.format("MMMM D, YYYY"))}),$("#reportrange_right").on("cancel.daterangepicker",function(e,a){console.log("cancel event fired")}),$("#options1").click(function(){$("#reportrange_right").data("daterangepicker").setOptions(a,e)}),$("#options2").click(function(){$("#reportrange_right").data("daterangepicker").setOptions(optionSet2,e)}),$("#destroy").click(function(){$("#reportrange_right").data("daterangepicker").remove()})}}function init_daterangepicker_single_call(){void 0!==$.fn.daterangepicker&&(console.log("init_daterangepicker_single_call"),$("#single_cal1").daterangepicker({singleDatePicker:!0,singleClasses:"picker_1"},function(e,a,t){console.log(e.toISOString(),a.toISOString(),t)}),$("#single_cal2").daterangepicker({singleDatePicker:!0,singleClasses:"picker_2"},function(e,a,t){console.log(e.toISOString(),a.toISOString(),t)}),$("#single_cal3").daterangepicker({singleDatePicker:!0,singleClasses:"picker_3"},function(e,a,t){console.log(e.toISOString(),a.toISOString(),t)}),$("#single_cal4").daterangepicker({singleDatePicker:!0,singleClasses:"picker_4"},function(e,a,t){console.log(e.toISOString(),a.toISOString(),t)}))}function init_daterangepicker_reservation(){void 0!==$.fn.daterangepicker&&(console.log("init_daterangepicker_reservation"),$("#reservation").daterangepicker(null,function(e,a,t){console.log(e.toISOString(),a.toISOString(),t)}),$("#reservation-time").daterangepicker({timePicker:!0,timePickerIncrement:30,locale:{format:"MM/DD/YYYY h:mm A"}}))}function init_SmartWizard(){void 0!==$.fn.smartWizard&&(console.log("init_SmartWizard"),$("#wizard").smartWizard(),$("#wizard_verticle").smartWizard({transitionEffect:"slide"}),$(".buttonNext").addClass("btn btn-success"),$(".buttonPrevious").addClass("btn btn-primary"),$(".buttonFinish").addClass("btn btn-default"))}function init_validator(){"undefined"!=typeof validator&&(console.log("init_validator"),validator.message.date="not a real date",$("form").on("blur","input[required], input.optional, select.required",validator.checkField).on("change","select.required",validator.checkField).on("keypress","input[required][pattern]",validator.keypress),$(".multi.required").on("keyup blur","input",function(){validator.checkField.apply($(this).siblings().last()[0])}),$("form").submit(function(e){e.preventDefault();var a=!0;return validator.checkAll($(this))||(a=!1),a&&this.submit(),!1}))}function init_PNotify(){"undefined"!=typeof PNotify&&console.log("init_PNotify")}function init_CustomNotification(){if(console.log("run_customtabs"),"undefined"!=typeof CustomTabs){console.log("init_CustomTabs");var t=10;TabbedNotification=function(e){var a="<div id='ntf"+t+"' class='text alert-"+e.type+"' style='display:none'><h2><i class='fa fa-bell'></i> "+e.title+"</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>"+e.text+"</p></div>";document.getElementById("custom_notifications")?($("#custom_notifications ul.notifications").append("<li><a id='ntlink"+t+"' class='alert-"+e.type+"' href='#ntf"+t+"'><i class='fa fa-bell animated shake'></i></a></li>"),$("#custom_notifications #notif-group").append(a),t++,CustomTabs(e)):alert("doesnt exists")},CustomTabs=function(e){$(".tabbed_notifications > div").hide(),$(".tabbed_notifications > div:first-of-type").show(),$("#custom_notifications").removeClass("dsp_none"),$(".notifications a").click(function(e){e.preventDefault();var a=$(this),t="#"+a.parents(".notifications").data("tabbed_notifications"),o=a.closest("li").siblings().children("a"),n=a.attr("href");o.removeClass("active"),a.addClass("active"),$(t).children("div").hide(),$(n).show()})},CustomTabs();var a=idname="";$(document).on("click",".notification_close",function(e){idname=$(this).parent().parent().attr("id"),a=idname.substr(-2),$("#ntf"+a).remove(),$("#ntlink"+a).parent().remove(),$(".notifications a").first().addClass("active"),$("#notif-group div").first().css("display","block")})}}function init_EasyPieChart(){if(void 0!==$.fn.easyPieChart){console.log("init_EasyPieChart"),$(".chart").easyPieChart({easing:"easeOutElastic",delay:3e3,barColor:"#26B99A",trackColor:"#fff",scaleColor:!1,lineWidth:20,trackWidth:16,lineCap:"butt",onStep:function(e,a,t){$(this.el).find(".percent").text(Math.round(t))}});var e=window.chart=$(".chart").data("easyPieChart");$(".js_update").on("click",function(){e.update(200*Math.random()-100)});var n=$.fn.popover.Constructor.prototype.leave;$.fn.popover.Constructor.prototype.leave=function(e){var a,t,o=e instanceof this.constructor?e:$(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);n.call(this,e),e.currentTarget&&(a=$(e.currentTarget).siblings(".popover"),t=o.timeout,a.one("mouseenter",function(){clearTimeout(t),a.one("mouseleave",function(){$.fn.popover.Constructor.prototype.leave.call(o,o)})}))},$("body").popover({selector:"[data-popover]",trigger:"click hover",delay:{show:50,hide:400}})}}function init_charts(){if(console.log("run_charts  typeof ["+typeof Chart+"]"),"undefined"!=typeof Chart){if(console.log("init_charts"),Chart.defaults.global.legend={enabled:!1},$("#canvas_line").length)new Chart(document.getElementById("canvas_line"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(38, 185, 154, 0.31)",borderColor:"rgba(38, 185, 154, 0.7)",pointBorderColor:"rgba(38, 185, 154, 0.7)",pointBackgroundColor:"rgba(38, 185, 154, 0.7)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,data:[31,74,6,39,20,85,7]},{label:"My Second dataset",backgroundColor:"rgba(3, 88, 106, 0.3)",borderColor:"rgba(3, 88, 106, 0.70)",pointBorderColor:"rgba(3, 88, 106, 0.70)",pointBackgroundColor:"rgba(3, 88, 106, 0.70)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",pointBorderWidth:1,data:[82,23,66,9,99,4,2]}]}});if($("#canvas_line1").length)new Chart(document.getElementById("canvas_line1"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(38, 185, 154, 0.31)",borderColor:"rgba(38, 185, 154, 0.7)",pointBorderColor:"rgba(38, 185, 154, 0.7)",pointBackgroundColor:"rgba(38, 185, 154, 0.7)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,data:[31,74,6,39,20,85,7]},{label:"My Second dataset",backgroundColor:"rgba(3, 88, 106, 0.3)",borderColor:"rgba(3, 88, 106, 0.70)",pointBorderColor:"rgba(3, 88, 106, 0.70)",pointBackgroundColor:"rgba(3, 88, 106, 0.70)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",pointBorderWidth:1,data:[82,23,66,9,99,4,2]}]}});if($("#canvas_line2").length)new Chart(document.getElementById("canvas_line2"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(38, 185, 154, 0.31)",borderColor:"rgba(38, 185, 154, 0.7)",pointBorderColor:"rgba(38, 185, 154, 0.7)",pointBackgroundColor:"rgba(38, 185, 154, 0.7)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,data:[31,74,6,39,20,85,7]},{label:"My Second dataset",backgroundColor:"rgba(3, 88, 106, 0.3)",borderColor:"rgba(3, 88, 106, 0.70)",pointBorderColor:"rgba(3, 88, 106, 0.70)",pointBackgroundColor:"rgba(3, 88, 106, 0.70)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",pointBorderWidth:1,data:[82,23,66,9,99,4,2]}]}});if($("#canvas_line3").length)new Chart(document.getElementById("canvas_line3"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(38, 185, 154, 0.31)",borderColor:"rgba(38, 185, 154, 0.7)",pointBorderColor:"rgba(38, 185, 154, 0.7)",pointBackgroundColor:"rgba(38, 185, 154, 0.7)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,data:[31,74,6,39,20,85,7]},{label:"My Second dataset",backgroundColor:"rgba(3, 88, 106, 0.3)",borderColor:"rgba(3, 88, 106, 0.70)",pointBorderColor:"rgba(3, 88, 106, 0.70)",pointBackgroundColor:"rgba(3, 88, 106, 0.70)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",pointBorderWidth:1,data:[82,23,66,9,99,4,2]}]}});if($("#canvas_line4").length)new Chart(document.getElementById("canvas_line4"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(38, 185, 154, 0.31)",borderColor:"rgba(38, 185, 154, 0.7)",pointBorderColor:"rgba(38, 185, 154, 0.7)",pointBackgroundColor:"rgba(38, 185, 154, 0.7)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,data:[31,74,6,39,20,85,7]},{label:"My Second dataset",backgroundColor:"rgba(3, 88, 106, 0.3)",borderColor:"rgba(3, 88, 106, 0.70)",pointBorderColor:"rgba(3, 88, 106, 0.70)",pointBackgroundColor:"rgba(3, 88, 106, 0.70)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",pointBorderWidth:1,data:[82,23,66,9,99,4,2]}]}});if($("#lineChart").length){var e=document.getElementById("lineChart");new Chart(e,{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(38, 185, 154, 0.31)",borderColor:"rgba(38, 185, 154, 0.7)",pointBorderColor:"rgba(38, 185, 154, 0.7)",pointBackgroundColor:"rgba(38, 185, 154, 0.7)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,data:[31,74,6,39,20,85,7]},{label:"My Second dataset",backgroundColor:"rgba(3, 88, 106, 0.3)",borderColor:"rgba(3, 88, 106, 0.70)",pointBorderColor:"rgba(3, 88, 106, 0.70)",pointBackgroundColor:"rgba(3, 88, 106, 0.70)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",pointBorderWidth:1,data:[82,23,66,9,99,4,2]}]}})}if($("#mybarChart").length)e=document.getElementById("mybarChart"),new Chart(e,{type:"bar",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"# of Votes",backgroundColor:"#26B99A",data:[51,30,40,28,92,50,45]},{label:"# of Votes",backgroundColor:"#03586A",data:[41,56,25,48,72,34,12]}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}});if($("#canvasDoughnut").length){e=document.getElementById("canvasDoughnut");var a={labels:["Dark Grey","Purple Color","Gray Color","Green Color","Blue Color"],datasets:[{data:[120,50,140,180,100],backgroundColor:["#455C73","#9B59B6","#BDC3C7","#26B99A","#3498DB"],hoverBackgroundColor:["#34495E","#B370CF","#CFD4D8","#36CAAB","#49A9EA"]}]};new Chart(e,{type:"doughnut",tooltipFillColor:"rgba(51, 51, 51, 0.55)",data:a})}if($("#canvasRadar").length)e=document.getElementById("canvasRadar"),a={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(3, 88, 106, 0.2)",borderColor:"rgba(3, 88, 106, 0.80)",pointBorderColor:"rgba(3, 88, 106, 0.80)",pointBackgroundColor:"rgba(3, 88, 106, 0.80)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(38, 185, 154, 0.2)",borderColor:"rgba(38, 185, 154, 0.85)",pointColor:"rgba(38, 185, 154, 0.85)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:[28,48,40,19,96,27,100]}]},new Chart(e,{type:"radar",data:a});if($("#pieChart").length)e=document.getElementById("pieChart"),a={datasets:[{data:[120,50,140,180,100],backgroundColor:["#455C73","#9B59B6","#BDC3C7","#26B99A","#3498DB"],label:"My dataset"}],labels:["Dark Gray","Purple","Gray","Green","Blue"]},new Chart(e,{data:a,type:"pie",otpions:{legend:!1}});if($("#polarArea").length)e=document.getElementById("polarArea"),a={datasets:[{data:[120,50,140,180,100],backgroundColor:["#455C73","#9B59B6","#BDC3C7","#26B99A","#3498DB"],label:"My dataset"}],labels:["Dark Gray","Purple","Gray","Green","Blue"]},new Chart(e,{data:a,type:"polarArea",options:{scale:{ticks:{beginAtZero:!0}}}})}}function init_compose(){void 0!==$.fn.slideToggle&&(console.log("init_compose"),$("#compose, .compose-close").click(function(){$(".compose").slideToggle()}))}function init_calendar(){if(void 0!==$.fn.fullCalendar){console.log("init_calendar");var o,e=new Date,a=e.getDate(),t=e.getMonth(),n=e.getFullYear(),i=$("#calendar").fullCalendar({header:{left:"prev,next today",center:"title",right:"month,agendaWeek,agendaDay,listMonth"},selectable:!0,selectHelper:!0,select:function(e,a,t){$("#fc_create").click(),o=e,ended=a,$(".antosubmit").on("click",function(){var e=$("#title").val();return a&&(ended=a),$("#event_type").val(),e&&i.fullCalendar("renderEvent",{title:e,start:o,end:a,allDay:t},!0),$("#title").val(""),i.fullCalendar("unselect"),$(".antoclose").click(),!1})},eventClick:function(e,a,t){$("#fc_edit").click(),$("#title2").val(e.title),$("#event_type").val(),$(".antosubmit2").on("click",function(){e.title=$("#title2").val(),i.fullCalendar("updateEvent",e),$(".antoclose2").click()}),i.fullCalendar("unselect")},editable:!0,events:[{title:"All Day Event",start:new Date(n,t,1)},{title:"Long Event",start:new Date(n,t,a-5),end:new Date(n,t,a-2)},{title:"Meeting",start:new Date(n,t,a,10,30),allDay:!1},{title:"Lunch",start:new Date(n,t,a+14,12,0),end:new Date(n,t,a,14,0),allDay:!1},{title:"Birthday Party",start:new Date(n,t,a+1,19,0),end:new Date(n,t,a+1,22,30),allDay:!1},{title:"Click for Google",start:new Date(n,t,28),end:new Date(n,t,29),url:"http://google.com/"}]})}}function init_DataTables(){if(console.log("run_datatables"),void 0!==$.fn.DataTable){console.log("init_DataTables");TableManageButtons=function(){"use strict";return{init:function(){$("#datatable-buttons").length&&$("#datatable-buttons").DataTable({dom:"Blfrtip",buttons:[{extend:"copy",className:"btn-sm"},{extend:"csv",className:"btn-sm"},{extend:"excel",className:"btn-sm"},{extend:"pdfHtml5",className:"btn-sm"},{extend:"print",className:"btn-sm"}],responsive:!0})}}}(),$("#datatable").dataTable(),$("#datatable-keytable").DataTable({keys:!0}),$("#datatable-responsive").DataTable(),$("#datatable-scroller").DataTable({ajax:"js/datatables/json/scroller-demo.json",deferRender:!0,scrollY:380,scrollCollapse:!0,scroller:!0}),$("#datatable-fixed-header").DataTable({fixedHeader:!0});var e=$("#datatable-checkbox");e.dataTable({order:[[1,"asc"]],columnDefs:[{orderable:!1,targets:[0]}]}),e.on("draw.dt",function(){$("checkbox input").iCheck({checkboxClass:"icheckbox_flat-green"})}),TableManageButtons.init()}}function init_morris_charts(){"undefined"!=typeof Morris&&(console.log("init_morris_charts"),$("#graph_bar").length&&Morris.Bar({element:"graph_bar",data:[{device:"iPhone 4",geekbench:380},{device:"iPhone 4S",geekbench:655},{device:"iPhone 3GS",geekbench:275},{device:"iPhone 5",geekbench:1571},{device:"iPhone 5S",geekbench:655},{device:"iPhone 6",geekbench:2154},{device:"iPhone 6 Plus",geekbench:1144},{device:"iPhone 6S",geekbench:2371},{device:"iPhone 6S Plus",geekbench:1471},{device:"Other",geekbench:1371}],xkey:"device",ykeys:["geekbench"],labels:["Geekbench"],barRatio:.4,barColors:["#26B99A","#34495E","#ACADAC","#3498DB"],xLabelAngle:35,hideHover:"auto",resize:!0}),$("#graph_bar_group").length&&Morris.Bar({element:"graph_bar_group",data:[{period:"2016-10-01",licensed:807,sorned:660},{period:"2016-09-30",licensed:1251,sorned:729},{period:"2016-09-29",licensed:1769,sorned:1018},{period:"2016-09-20",licensed:2246,sorned:1461},{period:"2016-09-19",licensed:2657,sorned:1967},{period:"2016-09-18",licensed:3148,sorned:2627},{period:"2016-09-17",licensed:3471,sorned:3740},{period:"2016-09-16",licensed:2871,sorned:2216},{period:"2016-09-15",licensed:2401,sorned:1656},{period:"2016-09-10",licensed:2115,sorned:1022}],xkey:"period",barColors:["#26B99A","#34495E","#ACADAC","#3498DB"],ykeys:["licensed","sorned"],labels:["Licensed","SORN"],hideHover:"auto",xLabelAngle:60,resize:!0}),$("#graphx").length&&Morris.Bar({element:"graphx",data:[{x:"2015 Q1",y:2,z:3,a:4},{x:"2015 Q2",y:3,z:5,a:6},{x:"2015 Q3",y:4,z:3,a:2},{x:"2015 Q4",y:2,z:4,a:5}],xkey:"x",ykeys:["y","z","a"],barColors:["#26B99A","#34495E","#ACADAC","#3498DB"],hideHover:"auto",labels:["Y","Z","A"],resize:!0}).on("click",function(e,a){console.log(e,a)}),$("#graph_area").length&&Morris.Area({element:"graph_area",data:[{period:"2014 Q1",iphone:2666,ipad:null,itouch:2647},{period:"2014 Q2",iphone:2778,ipad:2294,itouch:2441},{period:"2014 Q3",iphone:4912,ipad:1969,itouch:2501},{period:"2014 Q4",iphone:3767,ipad:3597,itouch:5689},{period:"2015 Q1",iphone:6810,ipad:1914,itouch:2293},{period:"2015 Q2",iphone:5670,ipad:4293,itouch:1881},{period:"2015 Q3",iphone:4820,ipad:3795,itouch:1588},{period:"2015 Q4",iphone:15073,ipad:5967,itouch:5175},{period:"2016 Q1",iphone:10687,ipad:4460,itouch:2028},{period:"2016 Q2",iphone:8432,ipad:5713,itouch:1791}],xkey:"period",ykeys:["iphone","ipad","itouch"],lineColors:["#26B99A","#34495E","#ACADAC","#3498DB"],labels:["iPhone","iPad","iPod Touch"],pointSize:2,hideHover:"auto",resize:!0}),$("#graph_donut").length&&Morris.Donut({element:"graph_donut",data:[{label:"Jam",value:25},{label:"Frosted",value:40},{label:"Custard",value:25},{label:"Sugar",value:10}],colors:["#26B99A","#34495E","#ACADAC","#3498DB"],formatter:function(e){return e+"%"},resize:!0}),$("#graph_line").length&&(Morris.Line({element:"graph_line",xkey:"year",ykeys:["value"],labels:["Value"],hideHover:"auto",lineColors:["#26B99A","#34495E","#ACADAC","#3498DB"],data:[{year:"2012",value:20},{year:"2013",value:10},{year:"2014",value:5},{year:"2015",value:5},{year:"2016",value:20}],resize:!0}),$MENU_TOGGLE.on("click",function(){$(window).resize()})))}function init_echarts(){if("undefined"!=typeof echarts){console.log("init_echarts");var e={color:["#26B99A","#34495E","#BDC3C7","#3498DB","#9B59B6","#8abb6f","#759c6a","#bfd3b7"],title:{itemGap:8,textStyle:{fontWeight:"normal",color:"#408829"}},dataRange:{color:["#1f610a","#97b58d"]},toolbox:{color:["#408829","#408829","#408829","#408829"]},tooltip:{backgroundColor:"rgba(0,0,0,0.5)",axisPointer:{type:"line",lineStyle:{color:"#408829",type:"dashed"},crossStyle:{color:"#408829"},shadowStyle:{color:"rgba(200,200,200,0.3)"}}},dataZoom:{dataBackgroundColor:"#eee",fillerColor:"rgba(64,136,41,0.2)",handleColor:"#408829"},grid:{borderWidth:0},categoryAxis:{axisLine:{lineStyle:{color:"#408829"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#408829"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#408829"},controlStyle:{normal:{color:"#408829"},emphasis:{color:"#408829"}}},k:{itemStyle:{normal:{color:"#68a54a",color0:"#a9cba2",lineStyle:{width:1,color:"#408829",color0:"#86b379"}}}},map:{itemStyle:{normal:{areaStyle:{color:"#ddd"},label:{textStyle:{color:"#c12e34"}}},emphasis:{areaStyle:{color:"#99d2dd"},label:{textStyle:{color:"#c12e34"}}}}},force:{itemStyle:{normal:{linkStyle:{strokeColor:"#408829"}}}},chord:{padding:4,itemStyle:{normal:{lineStyle:{width:1,color:"rgba(128, 128, 128, 0.5)"},chordStyle:{lineStyle:{width:1,color:"rgba(128, 128, 128, 0.5)"}}},emphasis:{lineStyle:{width:1,color:"rgba(128, 128, 128, 0.5)"},chordStyle:{lineStyle:{width:1,color:"rgba(128, 128, 128, 0.5)"}}}}},gauge:{startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{color:[[.2,"#86b379"],[.8,"#68a54a"],[1,"#408829"]],width:8}},axisTick:{splitNumber:10,length:12,lineStyle:{color:"auto"}},axisLabel:{textStyle:{color:"auto"}},splitLine:{length:18,lineStyle:{color:"auto"}},pointer:{length:"90%",color:"auto"},title:{textStyle:{color:"#333"}},detail:{textStyle:{color:"auto"}}},textStyle:{fontFamily:"Arial, Verdana, sans-serif"}};if($("#mainb").length)echarts.init(document.getElementById("mainb"),e).setOption({title:{text:"Graph title",subtext:"Graph Sub-text"},tooltip:{trigger:"axis"},legend:{data:["sales","purchases"]},toolbox:{show:!1},calculable:!1,xAxis:[{type:"category",data:["1?","2?","3?","4?","5?","6?","7?","8?","9?","10?","11?","12?"]}],yAxis:[{type:"value"}],series:[{name:"sales",type:"bar",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3],markPoint:{data:[{type:"max",name:"???"},{type:"min",name:"???"}]},markLine:{data:[{type:"average",name:"???"}]}},{name:"purchases",type:"bar",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3],markPoint:{data:[{name:"sales",value:182.2,xAxis:7,yAxis:183},{name:"purchases",value:2.3,xAxis:11,yAxis:3}]},markLine:{data:[{type:"average",name:"???"}]}}]});if($("#echart_sonar").length)echarts.init(document.getElementById("echart_sonar"),e).setOption({title:{text:"Budget vs spending",subtext:"Subtitle"},tooltip:{trigger:"item"},legend:{orient:"vertical",x:"right",y:"bottom",data:["Allocated Budget","Actual Spending"]},toolbox:{show:!0,feature:{restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},polar:[{indicator:[{text:"Sales",max:6e3},{text:"Administration",max:16e3},{text:"Information Techology",max:3e4},{text:"Customer Support",max:38e3},{text:"Development",max:52e3},{text:"Marketing",max:25e3}]}],calculable:!0,series:[{name:"Budget vs spending",type:"radar",data:[{value:[4300,1e4,28e3,35e3,5e4,19e3],name:"Allocated Budget"},{value:[5e3,14e3,28e3,31e3,42e3,21e3],name:"Actual Spending"}]}]});if($("#echart_pyramid").length)echarts.init(document.getElementById("echart_pyramid"),e).setOption({title:{text:"Echart Pyramid Graph",subtext:"Subtitle"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},toolbox:{show:!0,feature:{restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},legend:{data:["Something #1","Something #2","Something #3","Something #4","Something #5"],orient:"vertical",x:"left",y:"bottom"},calculable:!0,series:[{name:"漏斗图",type:"funnel",width:"40%",data:[{value:60,name:"Something #1"},{value:40,name:"Something #2"},{value:20,name:"Something #3"},{value:80,name:"Something #4"},{value:100,name:"Something #5"}]}]});if($("#echart_gauge").length)echarts.init(document.getElementById("echart_gauge"),e).setOption({tooltip:{formatter:"{a} <br/>{b} : {c}%"},toolbox:{show:!0,feature:{restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},series:[{name:"Performance",type:"gauge",center:["50%","50%"],startAngle:140,endAngle:-140,min:0,max:100,precision:0,splitNumber:10,axisLine:{show:!0,lineStyle:{color:[[.2,"lightgreen"],[.4,"orange"],[.8,"skyblue"],[1,"#ff4500"]],width:30}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{color:"#eee",width:1,type:"solid"}},axisLabel:{show:!0,formatter:function(e){switch(e+""){case"10":return"a";case"30":return"b";case"60":return"c";case"90":return"d";default:return""}},textStyle:{color:"#333"}},splitLine:{show:!0,length:30,lineStyle:{color:"#eee",width:2,type:"solid"}},pointer:{length:"80%",width:8,color:"auto"},title:{show:!0,offsetCenter:["-65%",-10],textStyle:{color:"#333",fontSize:15}},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:40,offsetCenter:["-60%",10],formatter:"{value}%",textStyle:{color:"auto",fontSize:30}},data:[{value:50,name:"Performance"}]}]});if($("#echart_line").length)echarts.init(document.getElementById("echart_line"),e).setOption({title:{text:"Line Graph",subtext:"Subtitle"},tooltip:{trigger:"axis"},legend:{x:220,y:40,data:["Intent","Pre-order","Deal"]},toolbox:{show:!0,feature:{magicType:{show:!0,title:{line:"Line",bar:"Bar",stack:"Stack",tiled:"Tiled"},type:["line","bar","stack","tiled"]},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Deal",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[10,12,21,54,260,830,710]},{name:"Pre-order",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[30,182,434,791,390,30,10]},{name:"Intent",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[1320,1132,601,234,120,90,20]}]});if($("#echart_scatter").length)echarts.init(document.getElementById("echart_scatter"),e).setOption({title:{text:"Scatter Graph",subtext:"Heinz  2003"},tooltip:{trigger:"axis",showDelay:0,axisPointer:{type:"cross",lineStyle:{type:"dashed",width:1}}},legend:{data:["Data2","Data1"]},toolbox:{show:!0,feature:{saveAsImage:{show:!0,title:"Save Image"}}},xAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value} cm"}}],yAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value} kg"}}],series:[{name:"Data1",type:"scatter",tooltip:{trigger:"item",formatter:function(e){return 1<e.value.length?e.seriesName+" :<br/>"+e.value[0]+"cm "+e.value[1]+"kg ":e.seriesName+" :<br/>"+e.name+" : "+e.value+"kg "}},data:[[161.2,51.6],[167.5,59],[159.5,49.2],[157,63],[155.8,53.6],[170,59],[159.1,47.6],[166,69.8],[176.2,66.8],[160.2,75.2],[172.5,55.2],[170.9,54.2],[172.9,62.5],[153.4,42],[160,50],[147.2,49.8],[168.2,49.2],[175,73.2],[157,47.8],[167.6,68.8],[159.5,50.6],[175,82.5],[166.8,57.2],[176.5,87.8],[170.2,72.8],[174,54.5],[173,59.8],[179.9,67.3],[170.5,67.8],[160,47],[154.4,46.2],[162,55],[176.5,83],[160,54.4],[152,45.8],[162.1,53.6],[170,73.2],[160.2,52.1],[161.3,67.9],[166.4,56.6],[168.9,62.3],[163.8,58.5],[167.6,54.5],[160,50.2],[161.3,60.3],[167.6,58.3],[165.1,56.2],[160,50.2],[170,72.9],[157.5,59.8],[167.6,61],[160.7,69.1],[163.2,55.9],[152.4,46.5],[157.5,54.3],[168.3,54.8],[180.3,60.7],[165.5,60],[165,62],[164.5,60.3],[156,52.7],[160,74.3],[163,62],[165.7,73.1],[161,80],[162,54.7],[166,53.2],[174,75.7],[172.7,61.1],[167.6,55.7],[151.1,48.7],[164.5,52.3],[163.5,50],[152,59.3],[169,62.5],[164,55.7],[161.2,54.8],[155,45.9],[170,70.6],[176.2,67.2],[170,69.4],[162.5,58.2],[170.3,64.8],[164.1,71.6],[169.5,52.8],[163.2,59.8],[154.5,49],[159.8,50],[173.2,69.2],[170,55.9],[161.4,63.4],[169,58.2],[166.2,58.6],[159.4,45.7],[162.5,52.2],[159,48.6],[162.8,57.8],[159,55.6],[179.8,66.8],[162.9,59.4],[161,53.6],[151.1,73.2],[168.2,53.4],[168.9,69],[173.2,58.4],[171.8,56.2],[178,70.6],[164.3,59.8],[163,72],[168.5,65.2],[166.8,56.6],[172.7,105.2],[163.5,51.8],[169.4,63.4],[167.8,59],[159.5,47.6],[167.6,63],[161.2,55.2],[160,45],[163.2,54],[162.2,50.2],[161.3,60.2],[149.5,44.8],[157.5,58.8],[163.2,56.4],[172.7,62],[155,49.2],[156.5,67.2],[164,53.8],[160.9,54.4],[162.8,58],[167,59.8],[160,54.8],[160,43.2],[168.9,60.5],[158.2,46.4],[156,64.4],[160,48.8],[167.1,62.2],[158,55.5],[167.6,57.8],[156,54.6],[162.1,59.2],[173.4,52.7],[159.8,53.2],[170.5,64.5],[159.2,51.8],[157.5,56],[161.3,63.6],[162.6,63.2],[160,59.5],[168.9,56.8],[165.1,64.1],[162.6,50],[165.1,72.3],[166.4,55],[160,55.9],[152.4,60.4],[170.2,69.1],[162.6,84.5],[170.2,55.9],[158.8,55.5],[172.7,69.5],[167.6,76.4],[162.6,61.4],[167.6,65.9],[156.2,58.6],[175.2,66.8],[172.1,56.6],[162.6,58.6],[160,55.9],[165.1,59.1],[182.9,81.8],[166.4,70.7],[165.1,56.8],[177.8,60],[165.1,58.2],[175.3,72.7],[154.9,54.1],[158.8,49.1],[172.7,75.9],[168.9,55],[161.3,57.3],[167.6,55],[165.1,65.5],[175.3,65.5],[157.5,48.6],[163.8,58.6],[167.6,63.6],[165.1,55.2],[165.1,62.7],[168.9,56.6],[162.6,53.9],[164.5,63.2],[176.5,73.6],[168.9,62],[175.3,63.6],[159.4,53.2],[160,53.4],[170.2,55],[162.6,70.5],[167.6,54.5],[162.6,54.5],[160.7,55.9],[160,59],[157.5,63.6],[162.6,54.5],[152.4,47.3],[170.2,67.7],[165.1,80.9],[172.7,70.5],[165.1,60.9],[170.2,63.6],[170.2,54.5],[170.2,59.1],[161.3,70.5],[167.6,52.7],[167.6,62.7],[165.1,86.3],[162.6,66.4],[152.4,67.3],[168.9,63],[170.2,73.6],[175.2,62.3],[175.2,57.7],[160,55.4],[165.1,104.1],[174,55.5],[170.2,77.3],[160,80.5],[167.6,64.5],[167.6,72.3],[167.6,61.4],[154.9,58.2],[162.6,81.8],[175.3,63.6],[171.4,53.4],[157.5,54.5],[165.1,53.6],[160,60],[174,73.6],[162.6,61.4],[174,55.5],[162.6,63.6],[161.3,60.9],[156.2,60],[149.9,46.8],[169.5,57.3],[160,64.1],[175.3,63.6],[169.5,67.3],[160,75.5],[172.7,68.2],[162.6,61.4],[157.5,76.8],[176.5,71.8],[164.4,55.5],[160.7,48.6],[174,66.4],[163.8,67.3]],markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{data:[{type:"average",name:"Mean"}]}},{name:"Data2",type:"scatter",tooltip:{trigger:"item",formatter:function(e){return 1<e.value.length?e.seriesName+" :<br/>"+e.value[0]+"cm "+e.value[1]+"kg ":e.seriesName+" :<br/>"+e.name+" : "+e.value+"kg "}},data:[[174,65.6],[175.3,71.8],[193.5,80.7],[186.5,72.6],[187.2,78.8],[181.5,74.8],[184,86.4],[184.5,78.4],[175,62],[184,81.6],[180,76.6],[177.8,83.6],[192,90],[176,74.6],[174,71],[184,79.6],[192.7,93.8],[171.5,70],[173,72.4],[176,85.9],[176,78.8],[180.5,77.8],[172.7,66.2],[176,86.4],[173.5,81.8],[178,89.6],[180.3,82.8],[180.3,76.4],[164.5,63.2],[173,60.9],[183.5,74.8],[175.5,70],[188,72.4],[189.2,84.1],[172.8,69.1],[170,59.5],[182,67.2],[170,61.3],[177.8,68.6],[184.2,80.1],[186.7,87.8],[171.4,84.7],[172.7,73.4],[175.3,72.1],[180.3,82.6],[182.9,88.7],[188,84.1],[177.2,94.1],[172.1,74.9],[167,59.1],[169.5,75.6],[174,86.2],[172.7,75.3],[182.2,87.1],[164.1,55.2],[163,57],[171.5,61.4],[184.2,76.8],[174,86.8],[174,72.2],[177,71.6],[186,84.8],[167,68.2],[171.8,66.1],[182,72],[167,64.6],[177.8,74.8],[164.5,70],[192,101.6],[175.5,63.2],[171.2,79.1],[181.6,78.9],[167.4,67.7],[181.1,66],[177,68.2],[174.5,63.9],[177.5,72],[170.5,56.8],[182.4,74.5],[197.1,90.9],[180.1,93],[175.5,80.9],[180.6,72.7],[184.4,68],[175.5,70.9],[180.6,72.5],[177,72.5],[177.1,83.4],[181.6,75.5],[176.5,73],[175,70.2],[174,73.4],[165.1,70.5],[177,68.9],[192,102.3],[176.5,68.4],[169.4,65.9],[182.1,75.7],[179.8,84.5],[175.3,87.7],[184.9,86.4],[177.3,73.2],[167.4,53.9],[178.1,72],[168.9,55.5],[157.2,58.4],[180.3,83.2],[170.2,72.7],[177.8,64.1],[172.7,72.3],[165.1,65],[186.7,86.4],[165.1,65],[174,88.6],[175.3,84.1],[185.4,66.8],[177.8,75.5],[180.3,93.2],[180.3,82.7],[177.8,58],[177.8,79.5],[177.8,78.6],[177.8,71.8],[177.8,116.4],[163.8,72.2],[188,83.6],[198.1,85.5],[175.3,90.9],[166.4,85.9],[190.5,89.1],[166.4,75],[177.8,77.7],[179.7,86.4],[172.7,90.9],[190.5,73.6],[185.4,76.4],[168.9,69.1],[167.6,84.5],[175.3,64.5],[170.2,69.1],[190.5,108.6],[177.8,86.4],[190.5,80.9],[177.8,87.7],[184.2,94.5],[176.5,80.2],[177.8,72],[180.3,71.4],[171.4,72.7],[172.7,84.1],[172.7,76.8],[177.8,63.6],[177.8,80.9],[182.9,80.9],[170.2,85.5],[167.6,68.6],[175.3,67.7],[165.1,66.4],[185.4,102.3],[181.6,70.5],[172.7,95.9],[190.5,84.1],[179.1,87.3],[175.3,71.8],[170.2,65.9],[193,95.9],[171.4,91.4],[177.8,81.8],[177.8,96.8],[167.6,69.1],[167.6,82.7],[180.3,75.5],[182.9,79.5],[176.5,73.6],[186.7,91.8],[188,84.1],[188,85.9],[177.8,81.8],[174,82.5],[177.8,80.5],[171.4,70],[185.4,81.8],[185.4,84.1],[188,90.5],[188,91.4],[182.9,89.1],[176.5,85],[175.3,69.1],[175.3,73.6],[188,80.5],[188,82.7],[175.3,86.4],[170.5,67.7],[179.1,92.7],[177.8,93.6],[175.3,70.9],[182.9,75],[170.8,93.2],[188,93.2],[180.3,77.7],[177.8,61.4],[185.4,94.1],[168.9,75],[185.4,83.6],[180.3,85.5],[174,73.9],[167.6,66.8],[182.9,87.3],[160,72.3],[180.3,88.6],[167.6,75.5],[186.7,101.4],[175.3,91.1],[175.3,67.3],[175.9,77.7],[175.3,81.8],[179.1,75.5],[181.6,84.5],[177.8,76.6],[182.9,85],[177.8,102.5],[184.2,77.3],[179.1,71.8],[176.5,87.9],[188,94.3],[174,70.9],[167.6,64.5],[170.2,77.3],[167.6,72.3],[188,87.3],[174,80],[176.5,82.3],[180.3,73.6],[167.6,74.1],[188,85.9],[180.3,73.2],[167.6,76.3],[183,65.9],[183,90.9],[179.1,89.1],[170.2,62.3],[177.8,82.7],[179.1,79.1],[190.5,98.2],[177.8,84.1],[180.3,83.2],[180.3,83.2]],markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{data:[{type:"average",name:"Mean"}]}}]});if($("#echart_bar_horizontal").length)echarts.init(document.getElementById("echart_bar_horizontal"),e).setOption({title:{text:"Bar Graph",subtext:"Graph subtitle"},tooltip:{trigger:"axis"},legend:{x:100,data:["2015","2016"]},toolbox:{show:!0,feature:{saveAsImage:{show:!0,title:"Save Image"}}},calculable:!0,xAxis:[{type:"value",boundaryGap:[0,.01]}],yAxis:[{type:"category",data:["Jan","Feb","Mar","Apr","May","Jun"]}],series:[{name:"2015",type:"bar",data:[18203,23489,29034,104970,131744,630230]},{name:"2016",type:"bar",data:[19325,23438,31e3,121594,134141,681807]}]});if($("#echart_pie2").length)echarts.init(document.getElementById("echart_pie2"),e).setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{x:"center",y:"bottom",data:["rose1","rose2","rose3","rose4","rose5","rose6"]},toolbox:{show:!0,feature:{magicType:{show:!0,type:["pie","funnel"]},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},calculable:!0,series:[{name:"Area Mode",type:"pie",radius:[25,90],center:["50%",170],roseType:"area",x:"50%",max:40,sort:"ascending",data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"}]}]});if($("#echart_donut").length)echarts.init(document.getElementById("echart_donut"),e).setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},calculable:!0,legend:{x:"center",y:"bottom",data:["Direct Access","E-mail Marketing","Union Ad","Video Ads","Search Engine"]},toolbox:{show:!0,feature:{magicType:{show:!0,type:["pie","funnel"],option:{funnel:{x:"25%",width:"50%",funnelAlign:"center",max:1548}}},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},series:[{name:"Access to the resource",type:"pie",radius:["35%","55%"],itemStyle:{normal:{label:{show:!0},labelLine:{show:!0}},emphasis:{label:{show:!0,position:"center",textStyle:{fontSize:"14",fontWeight:"normal"}}}},data:[{value:335,name:"Direct Access"},{value:310,name:"E-mail Marketing"},{value:234,name:"Union Ad"},{value:135,name:"Video Ads"},{value:1548,name:"Search Engine"}]}]});if($("#echart_pie").length){echarts.init(document.getElementById("echart_pie"),e).setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{x:"center",y:"bottom",data:["Direct Access","E-mail Marketing","Union Ad","Video Ads","Search Engine"]},toolbox:{show:!0,feature:{magicType:{show:!0,type:["pie","funnel"],option:{funnel:{x:"25%",width:"50%",funnelAlign:"left",max:1548}}},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},calculable:!0,series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","48%"],data:[{value:335,name:"Direct Access"},{value:310,name:"E-mail Marketing"},{value:234,name:"Union Ad"},{value:135,name:"Video Ads"},{value:1548,name:"Search Engine"}]}]});var a={normal:{label:{show:!1},labelLine:{show:!1}}},t={normal:{color:"rgba(0,0,0,0)",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"rgba(0,0,0,0)"}}}if($("#echart_mini_pie").length)echarts.init(document.getElementById("echart_mini_pie"),e).setOption({title:{text:"Chart #2",subtext:"From ExcelHome",sublink:"http://e.weibo.com/1341556070/AhQXtjbqh",x:"center",y:"center",itemGap:20,textStyle:{color:"rgba(30,144,255,0.8)",fontFamily:"微软雅黑",fontSize:35,fontWeight:"bolder"}},tooltip:{show:!0,formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",x:170,y:45,itemGap:12,data:["68%Something #1","29%Something #2","3%Something #3"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,title:"Text View",lang:["Text View","Close","Refresh"],readOnly:!1},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},series:[{name:"1",type:"pie",clockWise:!1,radius:[105,130],itemStyle:a,data:[{value:68,name:"68%Something #1"},{value:32,name:"invisible",itemStyle:t}]},{name:"2",type:"pie",clockWise:!1,radius:[80,105],itemStyle:a,data:[{value:29,name:"29%Something #2"},{value:71,name:"invisible",itemStyle:t}]},{name:"3",type:"pie",clockWise:!1,radius:[25,80],itemStyle:a,data:[{value:3,name:"3%Something #3"},{value:97,name:"invisible",itemStyle:t}]}]});if($("#echart_world_map").length)echarts.init(document.getElementById("echart_world_map"),e).setOption({title:{text:"World Population (2010)",subtext:"from United Nations, Total population, both sexes combined, as of 1 July (thousands)",x:"center",y:"top"},tooltip:{trigger:"item",formatter:function(e){var a=(e.value+"").split(".");return a=a[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+"."+a[1],e.seriesName+"<br/>"+e.name+" : "+a}},toolbox:{show:!0,orient:"vertical",x:"right",y:"center",feature:{mark:{show:!0},dataView:{show:!0,title:"Text View",lang:["Text View","Close","Refresh"],readOnly:!1},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},dataRange:{min:0,max:1e6,text:["High","Low"],realtime:!1,calculable:!0,color:["#087E65","#26B99A","#CBEAE3"]},series:[{name:"World Population (2010)",type:"map",mapType:"world",roam:!1,mapLocation:{y:60},itemStyle:{emphasis:{label:{show:!0}}},data:[{name:"Afghanistan",value:28397.812},{name:"Angola",value:19549.124},{name:"Albania",value:3150.143},{name:"United Arab Emirates",value:8441.537},{name:"Argentina",value:40374.224},{name:"Armenia",value:2963.496},{name:"French Southern and Antarctic Lands",value:268.065},{name:"Australia",value:22404.488},{name:"Austria",value:8401.924},{name:"Azerbaijan",value:9094.718},{name:"Burundi",value:9232.753},{name:"Belgium",value:10941.288},{name:"Benin",value:9509.798},{name:"Burkina Faso",value:15540.284},{name:"Bangladesh",value:151125.475},{name:"Bulgaria",value:7389.175},{name:"The Bahamas",value:66402.316},{name:"Bosnia and Herzegovina",value:3845.929},{name:"Belarus",value:9491.07},{name:"Belize",value:308.595},{name:"Bermuda",value:64.951},{name:"Bolivia",value:716.939},{name:"Brazil",value:195210.154},{name:"Brunei",value:27.223},{name:"Bhutan",value:716.939},{name:"Botswana",value:1969.341},{name:"Central African Republic",value:4349.921},{name:"Canada",value:34126.24},{name:"Switzerland",value:7830.534},{name:"Chile",value:17150.76},{name:"China",value:1359821.465},{name:"Ivory Coast",value:60508.978},{name:"Cameroon",value:20624.343},{name:"Democratic Republic of the Congo",value:62191.161},{name:"Republic of the Congo",value:3573.024},{name:"Colombia",value:46444.798},{name:"Costa Rica",value:4669.685},{name:"Cuba",value:11281.768},{name:"Northern Cyprus",value:1.468},{name:"Cyprus",value:1103.685},{name:"Czech Republic",value:10553.701},{name:"Germany",value:83017.404},{name:"Djibouti",value:834.036},{name:"Denmark",value:5550.959},{name:"Dominican Republic",value:10016.797},{name:"Algeria",value:37062.82},{name:"Ecuador",value:15001.072},{name:"Egypt",value:78075.705},{name:"Eritrea",value:5741.159},{name:"Spain",value:46182.038},{name:"Estonia",value:1298.533},{name:"Ethiopia",value:87095.281},{name:"Finland",value:5367.693},{name:"Fiji",value:860.559},{name:"Falkland Islands",value:49.581},{name:"France",value:63230.866},{name:"Gabon",value:1556.222},{name:"United Kingdom",value:62066.35},{name:"Georgia",value:4388.674},{name:"Ghana",value:24262.901},{name:"Guinea",value:10876.033},{name:"Gambia",value:1680.64},{name:"Guinea Bissau",value:10876.033},{name:"Equatorial Guinea",value:696.167},{name:"Greece",value:11109.999},{name:"Greenland",value:56.546},{name:"Guatemala",value:14341.576},{name:"French Guiana",value:231.169},{name:"Guyana",value:786.126},{name:"Honduras",value:7621.204},{name:"Croatia",value:4338.027},{name:"Haiti",value:9896.4},{name:"Hungary",value:10014.633},{name:"Indonesia",value:240676.485},{name:"India",value:1205624.648},{name:"Ireland",value:4467.561},{name:"Iran",value:240676.485},{name:"Iraq",value:30962.38},{name:"Iceland",value:318.042},{name:"Israel",value:7420.368},{name:"Italy",value:60508.978},{name:"Jamaica",value:2741.485},{name:"Jordan",value:6454.554},{name:"Japan",value:127352.833},{name:"Kazakhstan",value:15921.127},{name:"Kenya",value:40909.194},{name:"Kyrgyzstan",value:5334.223},{name:"Cambodia",value:14364.931},{name:"South Korea",value:51452.352},{name:"Kosovo",value:97.743},{name:"Kuwait",value:2991.58},{name:"Laos",value:6395.713},{name:"Lebanon",value:4341.092},{name:"Liberia",value:3957.99},{name:"Libya",value:6040.612},{name:"Sri Lanka",value:20758.779},{name:"Lesotho",value:2008.921},{name:"Lithuania",value:3068.457},{name:"Luxembourg",value:507.885},{name:"Latvia",value:2090.519},{name:"Morocco",value:31642.36},{name:"Moldova",value:103.619},{name:"Madagascar",value:21079.532},{name:"Mexico",value:117886.404},{name:"Macedonia",value:507.885},{name:"Mali",value:13985.961},{name:"Myanmar",value:51931.231},{name:"Montenegro",value:620.078},{name:"Mongolia",value:2712.738},{name:"Mozambique",value:23967.265},{name:"Mauritania",value:3609.42},{name:"Malawi",value:15013.694},{name:"Malaysia",value:28275.835},{name:"Namibia",value:2178.967},{name:"New Caledonia",value:246.379},{name:"Niger",value:15893.746},{name:"Nigeria",value:159707.78},{name:"Nicaragua",value:5822.209},{name:"Netherlands",value:16615.243},{name:"Norway",value:4891.251},{name:"Nepal",value:26846.016},{name:"New Zealand",value:4368.136},{name:"Oman",value:2802.768},{name:"Pakistan",value:173149.306},{name:"Panama",value:3678.128},{name:"Peru",value:29262.83},{name:"Philippines",value:93444.322},{name:"Papua New Guinea",value:6858.945},{name:"Poland",value:38198.754},{name:"Puerto Rico",value:3709.671},{name:"North Korea",value:1.468},{name:"Portugal",value:10589.792},{name:"Paraguay",value:6459.721},{name:"Qatar",value:1749.713},{name:"Romania",value:21861.476},{name:"Russia",value:21861.476},{name:"Rwanda",value:10836.732},{name:"Western Sahara",value:514.648},{name:"Saudi Arabia",value:27258.387},{name:"Sudan",value:35652.002},{name:"South Sudan",value:9940.929},{name:"Senegal",value:12950.564},{name:"Solomon Islands",value:526.447},{name:"Sierra Leone",value:5751.976},{name:"El Salvador",value:6218.195},{name:"Somaliland",value:9636.173},{name:"Somalia",value:9636.173},{name:"Republic of Serbia",value:3573.024},{name:"Suriname",value:524.96},{name:"Slovakia",value:5433.437},{name:"Slovenia",value:2054.232},{name:"Sweden",value:9382.297},{name:"Swaziland",value:1193.148},{name:"Syria",value:7830.534},{name:"Chad",value:11720.781},{name:"Togo",value:6306.014},{name:"Thailand",value:66402.316},{name:"Tajikistan",value:7627.326},{name:"Turkmenistan",value:5041.995},{name:"East Timor",value:10016.797},{name:"Trinidad and Tobago",value:1328.095},{name:"Tunisia",value:10631.83},{name:"Turkey",value:72137.546},{name:"United Republic of Tanzania",value:44973.33},{name:"Uganda",value:33987.213},{name:"Ukraine",value:46050.22},{name:"Uruguay",value:3371.982},{name:"United States of America",value:312247.116},{name:"Uzbekistan",value:27769.27},{name:"Venezuela",value:236.299},{name:"Vietnam",value:89047.397},{name:"Vanuatu",value:236.299},{name:"West Bank",value:13.565},{name:"Yemen",value:22763.008},{name:"South Africa",value:51452.352},{name:"Zambia",value:13216.985},{name:"Zimbabwe",value:13076.978}]}]})}}$.fn.popover.Constructor.prototype.leave=function(e){var a,t,o=e instanceof this.constructor?e:$(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);originalLeave.call(this,e),e.currentTarget&&(a=$(e.currentTarget).siblings(".popover"),t=o.timeout,a.one("mouseenter",function(){clearTimeout(t),a.one("mouseleave",function(){$.fn.popover.Constructor.prototype.leave.call(o,o)})}))},$("body").popover({selector:"[data-popover]",trigger:"click hover",delay:{show:50,hide:400}}),$(document).ready(function(){init_sparklines(),init_flot_chart(),init_sidebar(),init_wysiwyg(),init_InputMask(),init_JQVmap(),init_cropper(),init_knob(),init_IonRangeSlider(),init_ColorPicker(),init_TagsInput(),init_parsley(),init_daterangepicker(),init_daterangepicker_right(),init_daterangepicker_single_call(),init_daterangepicker_reservation(),init_SmartWizard(),init_EasyPieChart(),init_charts(),init_echarts(),init_morris_charts(),init_skycons(),init_select2(),init_validator(),init_DataTables(),init_chart_doughnut(),init_gauge(),init_PNotify(),init_starrr(),init_calendar(),init_compose(),init_CustomNotification(),init_autosize(),init_autocomplete()});