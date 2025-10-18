(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function s_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ef={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function B0(){if(sg)return Ce;sg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,$={};function j(V,q,Se){this.props=V,this.context=q,this.refs=$,this.updater=Se||L}j.prototype.isReactComponent={},j.prototype.setState=function(V,q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,q,"setState")},j.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function Y(){}Y.prototype=j.prototype;function ie(V,q,Se){this.props=V,this.context=q,this.refs=$,this.updater=Se||L}var he=ie.prototype=new Y;he.constructor=ie,z(he,j.prototype),he.isPureReactComponent=!0;var fe=Array.isArray,Re=Object.prototype.hasOwnProperty,Ee={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(V,q,Se){var Ae,Pe={},ke=null,Be=null;if(q!=null)for(Ae in q.ref!==void 0&&(Be=q.ref),q.key!==void 0&&(ke=""+q.key),q)Re.call(q,Ae)&&!k.hasOwnProperty(Ae)&&(Pe[Ae]=q[Ae]);var Me=arguments.length-2;if(Me===1)Pe.children=Se;else if(1<Me){for(var He=Array(Me),jt=0;jt<Me;jt++)He[jt]=arguments[jt+2];Pe.children=He}if(V&&V.defaultProps)for(Ae in Me=V.defaultProps,Me)Pe[Ae]===void 0&&(Pe[Ae]=Me[Ae]);return{$$typeof:r,type:V,key:ke,ref:Be,props:Pe,_owner:Ee.current}}function C(V,q){return{$$typeof:r,type:V.type,key:q,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function N(V){var q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Se){return q[Se]})}var O=/\/+/g;function R(V,q){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):q.toString(36)}function oe(V,q,Se,Ae,Pe){var ke=typeof V;(ke==="undefined"||ke==="boolean")&&(V=null);var Be=!1;if(V===null)Be=!0;else switch(ke){case"string":case"number":Be=!0;break;case"object":switch(V.$$typeof){case r:case e:Be=!0}}if(Be)return Be=V,Pe=Pe(Be),V=Ae===""?"."+R(Be,0):Ae,fe(Pe)?(Se="",V!=null&&(Se=V.replace(O,"$&/")+"/"),oe(Pe,q,Se,"",function(jt){return jt})):Pe!=null&&(x(Pe)&&(Pe=C(Pe,Se+(!Pe.key||Be&&Be.key===Pe.key?"":(""+Pe.key).replace(O,"$&/")+"/")+V)),q.push(Pe)),1;if(Be=0,Ae=Ae===""?".":Ae+":",fe(V))for(var Me=0;Me<V.length;Me++){ke=V[Me];var He=Ae+R(ke,Me);Be+=oe(ke,q,Se,He,Pe)}else if(He=I(V),typeof He=="function")for(V=He.call(V),Me=0;!(ke=V.next()).done;)ke=ke.value,He=Ae+R(ke,Me++),Be+=oe(ke,q,Se,He,Pe);else if(ke==="object")throw q=String(V),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Be}function Ve(V,q,Se){if(V==null)return V;var Ae=[],Pe=0;return oe(V,Ae,"","",function(ke){return q.call(Se,ke,Pe++)}),Ae}function $e(V){if(V._status===-1){var q=V._result;q=q(),q.then(function(Se){(V._status===0||V._status===-1)&&(V._status=1,V._result=Se)},function(Se){(V._status===0||V._status===-1)&&(V._status=2,V._result=Se)}),V._status===-1&&(V._status=0,V._result=q)}if(V._status===1)return V._result.default;throw V._result}var Je={current:null},ee={transition:null},de={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Ee};function re(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Ve,forEach:function(V,q,Se){Ve(V,function(){q.apply(this,arguments)},Se)},count:function(V){var q=0;return Ve(V,function(){q++}),q},toArray:function(V){return Ve(V,function(q){return q})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=j,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=ie,Ce.StrictMode=s,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Ce.act=re,Ce.cloneElement=function(V,q,Se){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ae=z({},V.props),Pe=V.key,ke=V.ref,Be=V._owner;if(q!=null){if(q.ref!==void 0&&(ke=q.ref,Be=Ee.current),q.key!==void 0&&(Pe=""+q.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(He in q)Re.call(q,He)&&!k.hasOwnProperty(He)&&(Ae[He]=q[He]===void 0&&Me!==void 0?Me[He]:q[He])}var He=arguments.length-2;if(He===1)Ae.children=Se;else if(1<He){Me=Array(He);for(var jt=0;jt<He;jt++)Me[jt]=arguments[jt+2];Ae.children=Me}return{$$typeof:r,type:V.type,key:Pe,ref:ke,props:Ae,_owner:Be}},Ce.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ce.createElement=S,Ce.createFactory=function(V){var q=S.bind(null,V);return q.type=V,q},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:d,render:V}},Ce.isValidElement=x,Ce.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:$e}},Ce.memo=function(V,q){return{$$typeof:y,type:V,compare:q===void 0?null:q}},Ce.startTransition=function(V){var q=ee.transition;ee.transition={};try{V()}finally{ee.transition=q}},Ce.unstable_act=re,Ce.useCallback=function(V,q){return Je.current.useCallback(V,q)},Ce.useContext=function(V){return Je.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return Je.current.useDeferredValue(V)},Ce.useEffect=function(V,q){return Je.current.useEffect(V,q)},Ce.useId=function(){return Je.current.useId()},Ce.useImperativeHandle=function(V,q,Se){return Je.current.useImperativeHandle(V,q,Se)},Ce.useInsertionEffect=function(V,q){return Je.current.useInsertionEffect(V,q)},Ce.useLayoutEffect=function(V,q){return Je.current.useLayoutEffect(V,q)},Ce.useMemo=function(V,q){return Je.current.useMemo(V,q)},Ce.useReducer=function(V,q,Se){return Je.current.useReducer(V,q,Se)},Ce.useRef=function(V){return Je.current.useRef(V)},Ce.useState=function(V){return Je.current.useState(V)},Ce.useSyncExternalStore=function(V,q,Se){return Je.current.useSyncExternalStore(V,q,Se)},Ce.useTransition=function(){return Je.current.useTransition()},Ce.version="18.3.1",Ce}var og;function ac(){return og||(og=1,ef.exports=B0()),ef.exports}var gt=ac();const X=s_(gt);var vu={},tf={exports:{}},Xt={},nf={exports:{}},rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function z0(){return ag||(ag=1,(function(r){function e(ee,de){var re=ee.length;ee.push(de);e:for(;0<re;){var V=re-1>>>1,q=ee[V];if(0<o(q,de))ee[V]=de,ee[re]=q,re=V;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var de=ee[0],re=ee.pop();if(re!==de){ee[0]=re;e:for(var V=0,q=ee.length,Se=q>>>1;V<Se;){var Ae=2*(V+1)-1,Pe=ee[Ae],ke=Ae+1,Be=ee[ke];if(0>o(Pe,re))ke<q&&0>o(Be,Pe)?(ee[V]=Be,ee[ke]=re,V=ke):(ee[V]=Pe,ee[Ae]=re,V=Ae);else if(ke<q&&0>o(Be,re))ee[V]=Be,ee[ke]=re,V=ke;else break e}}return de}function o(ee,de){var re=ee.sortIndex-de.sortIndex;return re!==0?re:ee.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var g=[],y=[],E=1,T=null,I=3,L=!1,z=!1,$=!1,j=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function he(ee){for(var de=t(y);de!==null;){if(de.callback===null)s(y);else if(de.startTime<=ee)s(y),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(y)}}function fe(ee){if($=!1,he(ee),!z)if(t(g)!==null)z=!0,$e(Re);else{var de=t(y);de!==null&&Je(fe,de.startTime-ee)}}function Re(ee,de){z=!1,$&&($=!1,Y(S),S=-1),L=!0;var re=I;try{for(he(de),T=t(g);T!==null&&(!(T.expirationTime>de)||ee&&!N());){var V=T.callback;if(typeof V=="function"){T.callback=null,I=T.priorityLevel;var q=V(T.expirationTime<=de);de=r.unstable_now(),typeof q=="function"?T.callback=q:T===t(g)&&s(g),he(de)}else s(g);T=t(g)}if(T!==null)var Se=!0;else{var Ae=t(y);Ae!==null&&Je(fe,Ae.startTime-de),Se=!1}return Se}finally{T=null,I=re,L=!1}}var Ee=!1,k=null,S=-1,C=5,x=-1;function N(){return!(r.unstable_now()-x<C)}function O(){if(k!==null){var ee=r.unstable_now();x=ee;var de=!0;try{de=k(!0,ee)}finally{de?R():(Ee=!1,k=null)}}else Ee=!1}var R;if(typeof ie=="function")R=function(){ie(O)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,Ve=oe.port2;oe.port1.onmessage=O,R=function(){Ve.postMessage(null)}}else R=function(){j(O,0)};function $e(ee){k=ee,Ee||(Ee=!0,R())}function Je(ee,de){S=j(function(){ee(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){z||L||(z=!0,$e(Re))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var de=3;break;default:de=I}var re=I;I=de;try{return ee()}finally{I=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,de){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var re=I;I=ee;try{return de()}finally{I=re}},r.unstable_scheduleCallback=function(ee,de,re){var V=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?V+re:V):re=V,ee){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=re+q,ee={id:E++,callback:de,priorityLevel:ee,startTime:re,expirationTime:q,sortIndex:-1},re>V?(ee.sortIndex=re,e(y,ee),t(g)===null&&ee===t(y)&&($?(Y(S),S=-1):$=!0,Je(fe,re-V))):(ee.sortIndex=q,e(g,ee),z||L||(z=!0,$e(Re))),ee},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(ee){var de=I;return function(){var re=I;I=de;try{return ee.apply(this,arguments)}finally{I=re}}}})(rf)),rf}var lg;function j0(){return lg||(lg=1,nf.exports=z0()),nf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function $0(){if(ug)return Xt;ug=1;var r=ac(),e=j0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function I(n){return g.call(T,n)?!0:g.call(E,n)?!1:y.test(n)?T[n]=!0:(E[n]=!0,!1)}function L(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z(n,i,a,c){if(i===null||typeof i>"u"||L(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(n,i,a,c,f,p,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=v}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){j[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];j[i]=new $(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){j[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){j[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){j[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){j[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){j[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){j[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){j[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var Y=/[\-:]([a-z])/g;function ie(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(Y,ie);j[i]=new $(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(Y,ie);j[i]=new $(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(Y,ie);j[i]=new $(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){j[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),j.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){j[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function he(n,i,a,c){var f=j.hasOwnProperty(i)?j[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(z(i,a,f,c)&&(a=null),c||f===null?I(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var fe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Re=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),Ve=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),ee=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,V;function q(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var Se=!1;function Ae(n,i){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var f=F.stack.split(`
`),p=c.stack.split(`
`),v=f.length-1,A=p.length-1;1<=v&&0<=A&&f[v]!==p[A];)A--;for(;1<=v&&0<=A;v--,A--)if(f[v]!==p[A]){if(v!==1||A!==1)do if(v--,A--,0>A||f[v]!==p[A]){var P=`
`+f[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=A);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Pe(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Ee:return"Portal";case C:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ve:return i=n.displayName||null,i!==null?i:ke(n.type)||"Memo";case $e:i=n._payload,n=n._init;try{return ke(n(i))}catch{}}return null}function Be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function jt(n){var i=He(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function vs(n){n._valueTracker||(n._valueTracker=jt(n))}function Oo(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=He(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Lr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Es(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function il(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ws(n,i){i=i.checked,i!=null&&he(n,"checked",i,!1)}function Vi(n,i){ws(n,i);var a=Me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ut(n,i.type,a):i.hasOwnProperty("defaultValue")&&ut(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Vo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ut(n,i,a){(i!=="number"||Lr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var st=Array.isArray;function En(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Lo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Mo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(st(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Me(a)}}function sl(n,i){var a=Me(i.value),c=Me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Mr(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function bo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ts(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?bo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var br,ol=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=br.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Li(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},al=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(n){al.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ur[i]=Ur[n]})});function Fr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ur.hasOwnProperty(n)&&Ur[n]?(""+i).trim():i+"px"}function Is(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Fr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Uo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wn(n,i){if(i){if(Uo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ss(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Br=null;function As(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hr=null,fr=null,rt=null;function Fo(n){if(n=fa(n)){if(typeof hr!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Vl(i),hr(n.stateNode,n.type,i))}}function zr(n){fr?rt?rt.push(n):rt=[n]:fr=n}function jr(){if(fr){var n=fr,i=rt;if(rt=fr=null,Fo(n),i)for(n=0;n<i.length;n++)Fo(i[n])}}function ll(n,i){return n(i)}function ul(){}var Vn=!1;function cl(n,i,a){if(Vn)return n(i,a);Vn=!0;try{return ll(n,i,a)}finally{Vn=!1,(fr!==null||rt!==null)&&(ul(),jr())}}function Mi(n,i){var a=n.stateNode;if(a===null)return null;var c=Vl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var $r=!1;if(d)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){$r=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{$r=!1}function hl(n,i,a,c,f,p,v,A,P){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(G){this.onError(G)}}var dr=!1,Ln=null,Rs=!1,cn=null,fl={onError:function(n){dr=!0,Ln=n}};function dl(n,i,a,c,f,p,v,A,P){dr=!1,Ln=null,hl.apply(fl,arguments)}function Bo(n,i,a,c,f,p,v,A,P){if(dl.apply(this,arguments),dr){if(dr){var F=Ln;dr=!1,Ln=null}else throw Error(t(198));Rs||(Rs=!0,cn=F)}}function Tn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function zo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function pl(n){if(Tn(n)!==n)throw Error(t(188))}function ml(n){var i=n.alternate;if(!i){if(i=Tn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return pl(f),n;if(p===c)return pl(f),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=p;else{for(var v=!1,A=f.child;A;){if(A===a){v=!0,a=f,c=p;break}if(A===c){v=!0,c=f,a=p;break}A=A.sibling}if(!v){for(A=p.child;A;){if(A===a){v=!0,a=p,c=f;break}if(A===c){v=!0,c=p,a=f;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function gl(n){return n=ml(n),n!==null?bi(n):null}function bi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=bi(n);if(i!==null)return i;n=n.sibling}return null}var jo=e.unstable_scheduleCallback,Cs=e.unstable_cancelCallback,Ui=e.unstable_shouldYield,pr=e.unstable_requestPaint,Ke=e.unstable_now,Dc=e.unstable_getCurrentPriorityLevel,Ps=e.unstable_ImmediatePriority,$o=e.unstable_UserBlockingPriority,Fi=e.unstable_NormalPriority,Ho=e.unstable_LowPriority,ks=e.unstable_IdlePriority,Bi=null,Zt=null;function yl(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Bi,n,void 0,(n.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:zi,Mn=Math.log,hn=Math.LN2;function zi(n){return n>>>=0,n===0?32:31-(Mn(n)/hn|0)|0}var bn=64,qr=4194304;function Fe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var A=v&~f;A!==0?c=Fe(A):(p&=v,p!==0&&(c=Fe(p)))}else v=a&~f,v!==0?c=Fe(v):p!==0&&(c=Fe(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-en(i),f=1<<a,c|=n[a],i&=~f;return c}function ji(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $i(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-en(p),A=1<<v,P=f[v];P===-1?((A&a)===0||(A&c)!==0)&&(f[v]=ji(A,i)):P<=i&&(n.expiredLanes|=A),p&=~A}}function qo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wo(){var n=bn;return bn<<=1,(bn&4194240)===0&&(bn=64),n}function Ko(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Hi(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-en(i),n[i]=a}function xc(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-en(a),p=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~p}}function Go(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-en(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var Oe=0;function Un(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Qo,Ns,Xo,Yo,Jo,Fn=!1,Ds=[],Bn=null,zn=null,At=null,qi=new Map,gr=new Map,tn=[],_l="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wr(n,i){switch(n){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":qi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(i.pointerId)}}function In(n,i,a,c,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},i!==null&&(i=fa(i),i!==null&&Ns(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function vl(n,i,a,c,f){switch(i){case"focusin":return Bn=In(Bn,n,i,a,c,f),!0;case"dragenter":return zn=In(zn,n,i,a,c,f),!0;case"mouseover":return At=In(At,n,i,a,c,f),!0;case"pointerover":var p=f.pointerId;return qi.set(p,In(qi.get(p)||null,n,i,a,c,f)),!0;case"gotpointercapture":return p=f.pointerId,gr.set(p,In(gr.get(p)||null,n,i,a,c,f)),!0}return!1}function xs(n){var i=Qi(n.target);if(i!==null){var a=Tn(i);if(a!==null){if(i=a.tag,i===13){if(i=zo(a),i!==null){n.blockedOn=i,Jo(n.priority,function(){Xo(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qe(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Os(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Br=c,a.target.dispatchEvent(c),Br=null}else return i=fa(a),i!==null&&Ns(i),n.blockedOn=a,!1;i.shift()}return!0}function El(n,i,a){qe(n)&&a.delete(i)}function Oc(){Fn=!1,Bn!==null&&qe(Bn)&&(Bn=null),zn!==null&&qe(zn)&&(zn=null),At!==null&&qe(At)&&(At=null),qi.forEach(El),gr.forEach(El)}function Kr(n,i){n.blockedOn===i&&(n.blockedOn=null,Fn||(Fn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Oc)))}function Gr(n){function i(f){return Kr(f,n)}if(0<Ds.length){Kr(Ds[0],n);for(var a=1;a<Ds.length;a++){var c=Ds[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Bn!==null&&Kr(Bn,n),zn!==null&&Kr(zn,n),At!==null&&Kr(At,n),qi.forEach(i),gr.forEach(i),a=0;a<tn.length;a++)c=tn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tn.length&&(a=tn[0],a.blockedOn===null);)xs(a),a.blockedOn===null&&tn.shift()}var yr=fe.ReactCurrentBatchConfig,_r=!0;function jn(n,i,a,c){var f=Oe,p=yr.transition;yr.transition=null;try{Oe=1,Zo(n,i,a,c)}finally{Oe=f,yr.transition=p}}function wl(n,i,a,c){var f=Oe,p=yr.transition;yr.transition=null;try{Oe=4,Zo(n,i,a,c)}finally{Oe=f,yr.transition=p}}function Zo(n,i,a,c){if(_r){var f=Os(n,i,a,c);if(f===null)Hc(n,i,c,$n,a),Wr(n,c);else if(vl(f,n,i,a,c))c.stopPropagation();else if(Wr(n,c),i&4&&-1<_l.indexOf(n)){for(;f!==null;){var p=fa(f);if(p!==null&&Qo(p),p=Os(n,i,a,c),p===null&&Hc(n,i,c,$n,a),p===f)break;f=p}f!==null&&c.stopPropagation()}else Hc(n,i,c,null,a)}}var $n=null;function Os(n,i,a,c){if($n=null,n=As(c),n=Qi(n),n!==null)if(i=Tn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=zo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return $n=n,null}function Vs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dc()){case Ps:return 1;case $o:return 4;case Fi:case Ho:return 16;case ks:return 536870912;default:return 16}default:return 16}}var nn=null,Ls=null,vr=null;function Tl(){if(vr)return vr;var n,i=Ls,a=i.length,c,f="value"in nn?nn.value:nn.textContent,p=f.length;for(n=0;n<a&&i[n]===f[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===f[p-c];c++);return vr=f.slice(n,1<c?1-c:void 0)}function Wi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Hn(){return!0}function ea(){return!1}function Ot(n){function i(a,c,f,p,v){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Hn:ea,this.isPropagationStopped=ea,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),i}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=Ot(qn),Qr=re({},qn,{view:0,detail:0}),Ms=Ot(Qr),bs,Us,rn,Gi=re({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Te,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rn&&(rn&&n.type==="mousemove"?(bs=n.screenX-rn.screenX,Us=n.screenY-rn.screenY):Us=bs=0,rn=n),bs)},movementY:function(n){return"movementY"in n?n.movementY:Us}}),ta=Ot(Gi),Il=re({},Gi,{dataTransfer:0}),Sl=Ot(Il),Fs=re({},Qr,{relatedTarget:0}),Rt=Ot(Fs),Al=re({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rl=Ot(Al),Xr=re({},qn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Ot(Xr),m=re({},qn,{data:0}),_=Ot(m),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=B[n])?!!i[n]:!1}function Te(){return Z}var ot=re({},Qr,{key:function(n){if(n.key){var i=w[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Wi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?b[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Te,charCode:function(n){return n.type==="keypress"?Wi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Wi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),je=Ot(ot),ct=re({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sn=Ot(ct),Er=re({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Te}),Wn=Ot(Er),Kn=re({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bs=Ot(Kn),na=re({},Gi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),VE=Ot(na),LE=[9,13,27,32],Vc=d&&"CompositionEvent"in window,ra=null;d&&"documentMode"in document&&(ra=document.documentMode);var ME=d&&"TextEvent"in window&&!ra,Yd=d&&(!Vc||ra&&8<ra&&11>=ra),Jd=" ",Zd=!1;function ep(n,i){switch(n){case"keyup":return LE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zs=!1;function bE(n,i){switch(n){case"compositionend":return tp(i);case"keypress":return i.which!==32?null:(Zd=!0,Jd);case"textInput":return n=i.data,n===Jd&&Zd?null:n;default:return null}}function UE(n,i){if(zs)return n==="compositionend"||!Vc&&ep(n,i)?(n=Tl(),vr=Ls=nn=null,zs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Yd&&i.locale!=="ko"?null:i.data;default:return null}}var FE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!FE[n.type]:i==="textarea"}function rp(n,i,a,c){zr(c),i=Dl(i,"onChange"),0<i.length&&(a=new Ki("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ia=null,sa=null;function BE(n){wp(n,0)}function Cl(n){var i=Ws(n);if(Oo(i))return n}function zE(n,i){if(n==="change")return i}var ip=!1;if(d){var Lc;if(d){var Mc="oninput"in document;if(!Mc){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),Mc=typeof sp.oninput=="function"}Lc=Mc}else Lc=!1;ip=Lc&&(!document.documentMode||9<document.documentMode)}function op(){ia&&(ia.detachEvent("onpropertychange",ap),sa=ia=null)}function ap(n){if(n.propertyName==="value"&&Cl(sa)){var i=[];rp(i,sa,n,As(n)),cl(BE,i)}}function jE(n,i,a){n==="focusin"?(op(),ia=i,sa=a,ia.attachEvent("onpropertychange",ap)):n==="focusout"&&op()}function $E(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Cl(sa)}function HE(n,i){if(n==="click")return Cl(i)}function qE(n,i){if(n==="input"||n==="change")return Cl(i)}function WE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Sn=typeof Object.is=="function"?Object.is:WE;function oa(n,i){if(Sn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!g.call(i,f)||!Sn(n[f],i[f]))return!1}return!0}function lp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function up(n,i){var a=lp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lp(a)}}function cp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?cp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function hp(){for(var n=window,i=Lr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Lr(n.document)}return i}function bc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function KE(n){var i=hp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&cp(a.ownerDocument.documentElement,a)){if(c!==null&&bc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,p=Math.min(c.start,f);c=c.end===void 0?p:Math.min(c.end,f),!n.extend&&p>c&&(f=c,c=p,p=f),f=up(a,p);var v=up(a,c);f&&v&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var GE=d&&"documentMode"in document&&11>=document.documentMode,js=null,Uc=null,aa=null,Fc=!1;function fp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||js==null||js!==Lr(c)||(c=js,"selectionStart"in c&&bc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),aa&&oa(aa,c)||(aa=c,c=Dl(Uc,"onSelect"),0<c.length&&(i=new Ki("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=js)))}function Pl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var $s={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},Bc={},dp={};d&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function kl(n){if(Bc[n])return Bc[n];if(!$s[n])return n;var i=$s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in dp)return Bc[n]=i[a];return n}var pp=kl("animationend"),mp=kl("animationiteration"),gp=kl("animationstart"),yp=kl("transitionend"),_p=new Map,vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,i){_p.set(n,i),l(i,[n])}for(var zc=0;zc<vp.length;zc++){var jc=vp[zc],QE=jc.toLowerCase(),XE=jc[0].toUpperCase()+jc.slice(1);Yr(QE,"on"+XE)}Yr(pp,"onAnimationEnd"),Yr(mp,"onAnimationIteration"),Yr(gp,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(yp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YE=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Ep(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Bo(c,i,void 0,n),n.currentTarget=null}function wp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var v=c.length-1;0<=v;v--){var A=c[v],P=A.instance,F=A.currentTarget;if(A=A.listener,P!==p&&f.isPropagationStopped())break e;Ep(f,A,F),p=P}else for(v=0;v<c.length;v++){if(A=c[v],P=A.instance,F=A.currentTarget,A=A.listener,P!==p&&f.isPropagationStopped())break e;Ep(f,A,F),p=P}}}if(Rs)throw n=cn,Rs=!1,cn=null,n}function Ge(n,i){var a=i[Xc];a===void 0&&(a=i[Xc]=new Set);var c=n+"__bubble";a.has(c)||(Tp(i,n,2,!1),a.add(c))}function $c(n,i,a){var c=0;i&&(c|=4),Tp(a,n,c,i)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function ua(n){if(!n[Nl]){n[Nl]=!0,s.forEach(function(a){a!=="selectionchange"&&(YE.has(a)||$c(a,!1,n),$c(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Nl]||(i[Nl]=!0,$c("selectionchange",!1,i))}}function Tp(n,i,a,c){switch(Vs(i)){case 1:var f=jn;break;case 4:f=wl;break;default:f=Zo}a=f.bind(null,i,a,n),f=void 0,!$r||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Hc(n,i,a,c,f){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===f||P.nodeType===8&&P.parentNode===f))return;v=v.return}for(;A!==null;){if(v=Qi(A),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}A=A.parentNode}}c=c.return}cl(function(){var F=p,G=As(a),Q=[];e:{var K=_p.get(n);if(K!==void 0){var te=Ki,ae=n;switch(n){case"keypress":if(Wi(a)===0)break e;case"keydown":case"keyup":te=je;break;case"focusin":ae="focus",te=Rt;break;case"focusout":ae="blur",te=Rt;break;case"beforeblur":case"afterblur":te=Rt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Sl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=Wn;break;case pp:case mp:case gp:te=Rl;break;case yp:te=Bs;break;case"scroll":te=Ms;break;case"wheel":te=VE;break;case"copy":case"cut":case"paste":te=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=sn}var le=(i&4)!==0,at=!le&&n==="scroll",M=le?K!==null?K+"Capture":null:K;le=[];for(var D=F,U;D!==null;){U=D;var J=U.stateNode;if(U.tag===5&&J!==null&&(U=J,M!==null&&(J=Mi(D,M),J!=null&&le.push(ca(D,J,U)))),at)break;D=D.return}0<le.length&&(K=new te(K,ae,null,a,G),Q.push({event:K,listeners:le}))}}if((i&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",K&&a!==Br&&(ae=a.relatedTarget||a.fromElement)&&(Qi(ae)||ae[wr]))break e;if((te||K)&&(K=G.window===G?G:(K=G.ownerDocument)?K.defaultView||K.parentWindow:window,te?(ae=a.relatedTarget||a.toElement,te=F,ae=ae?Qi(ae):null,ae!==null&&(at=Tn(ae),ae!==at||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(te=null,ae=F),te!==ae)){if(le=ta,J="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(le=sn,J="onPointerLeave",M="onPointerEnter",D="pointer"),at=te==null?K:Ws(te),U=ae==null?K:Ws(ae),K=new le(J,D+"leave",te,a,G),K.target=at,K.relatedTarget=U,J=null,Qi(G)===F&&(le=new le(M,D+"enter",ae,a,G),le.target=U,le.relatedTarget=at,J=le),at=J,te&&ae)t:{for(le=te,M=ae,D=0,U=le;U;U=Hs(U))D++;for(U=0,J=M;J;J=Hs(J))U++;for(;0<D-U;)le=Hs(le),D--;for(;0<U-D;)M=Hs(M),U--;for(;D--;){if(le===M||M!==null&&le===M.alternate)break t;le=Hs(le),M=Hs(M)}le=null}else le=null;te!==null&&Ip(Q,K,te,le,!1),ae!==null&&at!==null&&Ip(Q,at,ae,le,!0)}}e:{if(K=F?Ws(F):window,te=K.nodeName&&K.nodeName.toLowerCase(),te==="select"||te==="input"&&K.type==="file")var ue=zE;else if(np(K))if(ip)ue=qE;else{ue=$E;var me=jE}else(te=K.nodeName)&&te.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ue=HE);if(ue&&(ue=ue(n,F))){rp(Q,ue,a,G);break e}me&&me(n,K,F),n==="focusout"&&(me=K._wrapperState)&&me.controlled&&K.type==="number"&&ut(K,"number",K.value)}switch(me=F?Ws(F):window,n){case"focusin":(np(me)||me.contentEditable==="true")&&(js=me,Uc=F,aa=null);break;case"focusout":aa=Uc=js=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,fp(Q,a,G);break;case"selectionchange":if(GE)break;case"keydown":case"keyup":fp(Q,a,G)}var ge;if(Vc)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else zs?ep(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Yd&&a.locale!=="ko"&&(zs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&zs&&(ge=Tl()):(nn=G,Ls="value"in nn?nn.value:nn.textContent,zs=!0)),me=Dl(F,ve),0<me.length&&(ve=new _(ve,n,null,a,G),Q.push({event:ve,listeners:me}),ge?ve.data=ge:(ge=tp(a),ge!==null&&(ve.data=ge)))),(ge=ME?bE(n,a):UE(n,a))&&(F=Dl(F,"onBeforeInput"),0<F.length&&(G=new _("onBeforeInput","beforeinput",null,a,G),Q.push({event:G,listeners:F}),G.data=ge))}wp(Q,i)})}function ca(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Dl(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Mi(n,a),p!=null&&c.unshift(ca(n,p,f)),p=Mi(n,i),p!=null&&c.push(ca(n,p,f))),n=n.return}return c}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ip(n,i,a,c,f){for(var p=i._reactName,v=[];a!==null&&a!==c;){var A=a,P=A.alternate,F=A.stateNode;if(P!==null&&P===c)break;A.tag===5&&F!==null&&(A=F,f?(P=Mi(a,p),P!=null&&v.unshift(ca(a,P,A))):f||(P=Mi(a,p),P!=null&&v.push(ca(a,P,A)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var JE=/\r\n?/g,ZE=/\u0000|\uFFFD/g;function Sp(n){return(typeof n=="string"?n:""+n).replace(JE,`
`).replace(ZE,"")}function xl(n,i,a){if(i=Sp(i),Sp(n)!==i&&a)throw Error(t(425))}function Ol(){}var qc=null,Wc=null;function Kc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(n){return Ap.resolve(null).then(n).catch(n0)}:Gc;function n0(n){setTimeout(function(){throw n})}function Qc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),Gr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Gr(i)}function Jr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Rp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var qs=Math.random().toString(36).slice(2),Gn="__reactFiber$"+qs,ha="__reactProps$"+qs,wr="__reactContainer$"+qs,Xc="__reactEvents$"+qs,r0="__reactListeners$"+qs,i0="__reactHandles$"+qs;function Qi(n){var i=n[Gn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[wr]||a[Gn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Rp(n);n!==null;){if(a=n[Gn])return a;n=Rp(n)}return i}n=a,a=n.parentNode}return null}function fa(n){return n=n[Gn]||n[wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vl(n){return n[ha]||null}var Yc=[],Ks=-1;function Zr(n){return{current:n}}function Qe(n){0>Ks||(n.current=Yc[Ks],Yc[Ks]=null,Ks--)}function We(n,i){Ks++,Yc[Ks]=n.current,n.current=i}var ei={},Vt=Zr(ei),qt=Zr(!1),Xi=ei;function Gs(n,i){var a=n.type.contextTypes;if(!a)return ei;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Wt(n){return n=n.childContextTypes,n!=null}function Ll(){Qe(qt),Qe(Vt)}function Cp(n,i,a){if(Vt.current!==ei)throw Error(t(168));We(Vt,i),We(qt,a)}function Pp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,Be(n)||"Unknown",f));return re({},a,c)}function Ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ei,Xi=Vt.current,We(Vt,n),We(qt,qt.current),!0}function kp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Pp(n,i,Xi),c.__reactInternalMemoizedMergedChildContext=n,Qe(qt),Qe(Vt),We(Vt,n)):Qe(qt),We(qt,a)}var Tr=null,bl=!1,Jc=!1;function Np(n){Tr===null?Tr=[n]:Tr.push(n)}function s0(n){bl=!0,Np(n)}function ti(){if(!Jc&&Tr!==null){Jc=!0;var n=0,i=Oe;try{var a=Tr;for(Oe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Tr=null,bl=!1}catch(f){throw Tr!==null&&(Tr=Tr.slice(n+1)),jo(Ps,ti),f}finally{Oe=i,Jc=!1}}return null}var Qs=[],Xs=0,Ul=null,Fl=0,fn=[],dn=0,Yi=null,Ir=1,Sr="";function Ji(n,i){Qs[Xs++]=Fl,Qs[Xs++]=Ul,Ul=n,Fl=i}function Dp(n,i,a){fn[dn++]=Ir,fn[dn++]=Sr,fn[dn++]=Yi,Yi=n;var c=Ir;n=Sr;var f=32-en(c)-1;c&=~(1<<f),a+=1;var p=32-en(i)+f;if(30<p){var v=f-f%5;p=(c&(1<<v)-1).toString(32),c>>=v,f-=v,Ir=1<<32-en(i)+f|a<<f|c,Sr=p+n}else Ir=1<<p|a<<f|c,Sr=n}function Zc(n){n.return!==null&&(Ji(n,1),Dp(n,1,0))}function eh(n){for(;n===Ul;)Ul=Qs[--Xs],Qs[Xs]=null,Fl=Qs[--Xs],Qs[Xs]=null;for(;n===Yi;)Yi=fn[--dn],fn[dn]=null,Sr=fn[--dn],fn[dn]=null,Ir=fn[--dn],fn[dn]=null}var on=null,an=null,Ze=!1,An=null;function xp(n,i){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Op(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,on=n,an=Jr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,on=n,an=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Yi!==null?{id:Ir,overflow:Sr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function th(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nh(n){if(Ze){var i=an;if(i){var a=i;if(!Op(n,i)){if(th(n))throw Error(t(418));i=Jr(a.nextSibling);var c=on;i&&Op(n,i)?xp(c,a):(n.flags=n.flags&-4097|2,Ze=!1,on=n)}}else{if(th(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ze=!1,on=n}}}function Vp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Bl(n){if(n!==on)return!1;if(!Ze)return Vp(n),Ze=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Kc(n.type,n.memoizedProps)),i&&(i=an)){if(th(n))throw Lp(),Error(t(418));for(;i;)xp(n,i),i=Jr(i.nextSibling)}if(Vp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){an=Jr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}an=null}}else an=on?Jr(n.stateNode.nextSibling):null;return!0}function Lp(){for(var n=an;n;)n=Jr(n.nextSibling)}function Ys(){an=on=null,Ze=!1}function rh(n){An===null?An=[n]:An.push(n)}var o0=fe.ReactCurrentBatchConfig;function da(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(v){var A=f.refs;v===null?delete A[p]:A[p]=v},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Mp(n){var i=n._init;return i(n._payload)}function bp(n){function i(M,D){if(n){var U=M.deletions;U===null?(M.deletions=[D],M.flags|=16):U.push(D)}}function a(M,D){if(!n)return null;for(;D!==null;)i(M,D),D=D.sibling;return null}function c(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function f(M,D){return M=ui(M,D),M.index=0,M.sibling=null,M}function p(M,D,U){return M.index=U,n?(U=M.alternate,U!==null?(U=U.index,U<D?(M.flags|=2,D):U):(M.flags|=2,D)):(M.flags|=1048576,D)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function A(M,D,U,J){return D===null||D.tag!==6?(D=Gh(U,M.mode,J),D.return=M,D):(D=f(D,U),D.return=M,D)}function P(M,D,U,J){var ue=U.type;return ue===k?G(M,D,U.props.children,J,U.key):D!==null&&(D.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===$e&&Mp(ue)===D.type)?(J=f(D,U.props),J.ref=da(M,D,U),J.return=M,J):(J=hu(U.type,U.key,U.props,null,M.mode,J),J.ref=da(M,D,U),J.return=M,J)}function F(M,D,U,J){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=Qh(U,M.mode,J),D.return=M,D):(D=f(D,U.children||[]),D.return=M,D)}function G(M,D,U,J,ue){return D===null||D.tag!==7?(D=os(U,M.mode,J,ue),D.return=M,D):(D=f(D,U),D.return=M,D)}function Q(M,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Gh(""+D,M.mode,U),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Re:return U=hu(D.type,D.key,D.props,null,M.mode,U),U.ref=da(M,null,D),U.return=M,U;case Ee:return D=Qh(D,M.mode,U),D.return=M,D;case $e:var J=D._init;return Q(M,J(D._payload),U)}if(st(D)||de(D))return D=os(D,M.mode,U,null),D.return=M,D;zl(M,D)}return null}function K(M,D,U,J){var ue=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return ue!==null?null:A(M,D,""+U,J);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Re:return U.key===ue?P(M,D,U,J):null;case Ee:return U.key===ue?F(M,D,U,J):null;case $e:return ue=U._init,K(M,D,ue(U._payload),J)}if(st(U)||de(U))return ue!==null?null:G(M,D,U,J,null);zl(M,U)}return null}function te(M,D,U,J,ue){if(typeof J=="string"&&J!==""||typeof J=="number")return M=M.get(U)||null,A(D,M,""+J,ue);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Re:return M=M.get(J.key===null?U:J.key)||null,P(D,M,J,ue);case Ee:return M=M.get(J.key===null?U:J.key)||null,F(D,M,J,ue);case $e:var me=J._init;return te(M,D,U,me(J._payload),ue)}if(st(J)||de(J))return M=M.get(U)||null,G(D,M,J,ue,null);zl(D,J)}return null}function ae(M,D,U,J){for(var ue=null,me=null,ge=D,ve=D=0,Tt=null;ge!==null&&ve<U.length;ve++){ge.index>ve?(Tt=ge,ge=null):Tt=ge.sibling;var Ue=K(M,ge,U[ve],J);if(Ue===null){ge===null&&(ge=Tt);break}n&&ge&&Ue.alternate===null&&i(M,ge),D=p(Ue,D,ve),me===null?ue=Ue:me.sibling=Ue,me=Ue,ge=Tt}if(ve===U.length)return a(M,ge),Ze&&Ji(M,ve),ue;if(ge===null){for(;ve<U.length;ve++)ge=Q(M,U[ve],J),ge!==null&&(D=p(ge,D,ve),me===null?ue=ge:me.sibling=ge,me=ge);return Ze&&Ji(M,ve),ue}for(ge=c(M,ge);ve<U.length;ve++)Tt=te(ge,M,ve,U[ve],J),Tt!==null&&(n&&Tt.alternate!==null&&ge.delete(Tt.key===null?ve:Tt.key),D=p(Tt,D,ve),me===null?ue=Tt:me.sibling=Tt,me=Tt);return n&&ge.forEach(function(ci){return i(M,ci)}),Ze&&Ji(M,ve),ue}function le(M,D,U,J){var ue=de(U);if(typeof ue!="function")throw Error(t(150));if(U=ue.call(U),U==null)throw Error(t(151));for(var me=ue=null,ge=D,ve=D=0,Tt=null,Ue=U.next();ge!==null&&!Ue.done;ve++,Ue=U.next()){ge.index>ve?(Tt=ge,ge=null):Tt=ge.sibling;var ci=K(M,ge,Ue.value,J);if(ci===null){ge===null&&(ge=Tt);break}n&&ge&&ci.alternate===null&&i(M,ge),D=p(ci,D,ve),me===null?ue=ci:me.sibling=ci,me=ci,ge=Tt}if(Ue.done)return a(M,ge),Ze&&Ji(M,ve),ue;if(ge===null){for(;!Ue.done;ve++,Ue=U.next())Ue=Q(M,Ue.value,J),Ue!==null&&(D=p(Ue,D,ve),me===null?ue=Ue:me.sibling=Ue,me=Ue);return Ze&&Ji(M,ve),ue}for(ge=c(M,ge);!Ue.done;ve++,Ue=U.next())Ue=te(ge,M,ve,Ue.value,J),Ue!==null&&(n&&Ue.alternate!==null&&ge.delete(Ue.key===null?ve:Ue.key),D=p(Ue,D,ve),me===null?ue=Ue:me.sibling=Ue,me=Ue);return n&&ge.forEach(function(F0){return i(M,F0)}),Ze&&Ji(M,ve),ue}function at(M,D,U,J){if(typeof U=="object"&&U!==null&&U.type===k&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Re:e:{for(var ue=U.key,me=D;me!==null;){if(me.key===ue){if(ue=U.type,ue===k){if(me.tag===7){a(M,me.sibling),D=f(me,U.props.children),D.return=M,M=D;break e}}else if(me.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===$e&&Mp(ue)===me.type){a(M,me.sibling),D=f(me,U.props),D.ref=da(M,me,U),D.return=M,M=D;break e}a(M,me);break}else i(M,me);me=me.sibling}U.type===k?(D=os(U.props.children,M.mode,J,U.key),D.return=M,M=D):(J=hu(U.type,U.key,U.props,null,M.mode,J),J.ref=da(M,D,U),J.return=M,M=J)}return v(M);case Ee:e:{for(me=U.key;D!==null;){if(D.key===me)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(M,D.sibling),D=f(D,U.children||[]),D.return=M,M=D;break e}else{a(M,D);break}else i(M,D);D=D.sibling}D=Qh(U,M.mode,J),D.return=M,M=D}return v(M);case $e:return me=U._init,at(M,D,me(U._payload),J)}if(st(U))return ae(M,D,U,J);if(de(U))return le(M,D,U,J);zl(M,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(a(M,D.sibling),D=f(D,U),D.return=M,M=D):(a(M,D),D=Gh(U,M.mode,J),D.return=M,M=D),v(M)):a(M,D)}return at}var Js=bp(!0),Up=bp(!1),jl=Zr(null),$l=null,Zs=null,ih=null;function sh(){ih=Zs=$l=null}function oh(n){var i=jl.current;Qe(jl),n._currentValue=i}function ah(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function eo(n,i){$l=n,ih=Zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Kt=!0),n.firstContext=null)}function pn(n){var i=n._currentValue;if(ih!==n)if(n={context:n,memoizedValue:i,next:null},Zs===null){if($l===null)throw Error(t(308));Zs=n,$l.dependencies={lanes:0,firstContext:n}}else Zs=Zs.next=n;return i}var Zi=null;function lh(n){Zi===null?Zi=[n]:Zi.push(n)}function Fp(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,lh(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ar(n,c)}function Ar(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ni=!1;function uh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Rr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ri(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ar(n,a)}return f=c.interleaved,f===null?(i.next=i,lh(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ar(n,a)}function Hl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Go(n,a)}}function zp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ql(n,i,a,c){var f=n.updateQueue;ni=!1;var p=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var P=A,F=P.next;P.next=null,v===null?p=F:v.next=F,v=P;var G=n.alternate;G!==null&&(G=G.updateQueue,A=G.lastBaseUpdate,A!==v&&(A===null?G.firstBaseUpdate=F:A.next=F,G.lastBaseUpdate=P))}if(p!==null){var Q=f.baseState;v=0,G=F=P=null,A=p;do{var K=A.lane,te=A.eventTime;if((c&K)===K){G!==null&&(G=G.next={eventTime:te,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ae=n,le=A;switch(K=i,te=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){Q=ae.call(te,Q,K);break e}Q=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,K=typeof ae=="function"?ae.call(te,Q,K):ae,K==null)break e;Q=re({},Q,K);break e;case 2:ni=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,K=f.effects,K===null?f.effects=[A]:K.push(A))}else te={eventTime:te,lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},G===null?(F=G=te,P=Q):G=G.next=te,v|=K;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;K=A,A=K.next,K.next=null,f.lastBaseUpdate=K,f.shared.pending=null}}while(!0);if(G===null&&(P=Q),f.baseState=P,f.firstBaseUpdate=F,f.lastBaseUpdate=G,i=f.shared.interleaved,i!==null){f=i;do v|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);ns|=v,n.lanes=v,n.memoizedState=Q}}function jp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var pa={},Qn=Zr(pa),ma=Zr(pa),ga=Zr(pa);function es(n){if(n===pa)throw Error(t(174));return n}function ch(n,i){switch(We(ga,i),We(ma,n),We(Qn,pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ts(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ts(i,n)}Qe(Qn),We(Qn,i)}function to(){Qe(Qn),Qe(ma),Qe(ga)}function $p(n){es(ga.current);var i=es(Qn.current),a=Ts(i,n.type);i!==a&&(We(ma,n),We(Qn,a))}function hh(n){ma.current===n&&(Qe(Qn),Qe(ma))}var et=Zr(0);function Wl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var fh=[];function dh(){for(var n=0;n<fh.length;n++)fh[n]._workInProgressVersionPrimary=null;fh.length=0}var Kl=fe.ReactCurrentDispatcher,ph=fe.ReactCurrentBatchConfig,ts=0,tt=null,pt=null,Et=null,Gl=!1,ya=!1,_a=0,a0=0;function Lt(){throw Error(t(321))}function mh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Sn(n[a],i[a]))return!1;return!0}function gh(n,i,a,c,f,p){if(ts=p,tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Kl.current=n===null||n.memoizedState===null?h0:f0,n=a(c,f),ya){p=0;do{if(ya=!1,_a=0,25<=p)throw Error(t(301));p+=1,Et=pt=null,i.updateQueue=null,Kl.current=d0,n=a(c,f)}while(ya)}if(Kl.current=Yl,i=pt!==null&&pt.next!==null,ts=0,Et=pt=tt=null,Gl=!1,i)throw Error(t(300));return n}function yh(){var n=_a!==0;return _a=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?tt.memoizedState=Et=n:Et=Et.next=n,Et}function mn(){if(pt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var i=Et===null?tt.memoizedState:Et.next;if(i!==null)Et=i,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Et===null?tt.memoizedState=Et=n:Et=Et.next=n}return Et}function va(n,i){return typeof i=="function"?i(n):i}function _h(n){var i=mn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,f=c.baseQueue,p=a.pending;if(p!==null){if(f!==null){var v=f.next;f.next=p.next,p.next=v}c.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,c=c.baseState;var A=v=null,P=null,F=p;do{var G=F.lane;if((ts&G)===G)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:G,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(A=P=Q,v=c):P=P.next=Q,tt.lanes|=G,ns|=G}F=F.next}while(F!==null&&F!==p);P===null?v=c:P.next=A,Sn(c,i.memoizedState)||(Kt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do p=f.lane,tt.lanes|=p,ns|=p,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function vh(n){var i=mn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do p=n(p,v.action),v=v.next;while(v!==f);Sn(p,i.memoizedState)||(Kt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function Hp(){}function qp(n,i){var a=tt,c=mn(),f=i(),p=!Sn(c.memoizedState,f);if(p&&(c.memoizedState=f,Kt=!0),c=c.queue,Eh(Gp.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Ea(9,Kp.bind(null,a,c,f,i),void 0,null),wt===null)throw Error(t(349));(ts&30)!==0||Wp(a,i,f)}return f}function Wp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Kp(n,i,a,c){i.value=a,i.getSnapshot=c,Qp(i)&&Xp(n)}function Gp(n,i,a){return a(function(){Qp(i)&&Xp(n)})}function Qp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Sn(n,a)}catch{return!0}}function Xp(n){var i=Ar(n,1);i!==null&&kn(i,n,1,-1)}function Yp(n){var i=Xn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:n},i.queue=n,n=n.dispatch=c0.bind(null,tt,n),[i.memoizedState,n]}function Ea(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Jp(){return mn().memoizedState}function Ql(n,i,a,c){var f=Xn();tt.flags|=n,f.memoizedState=Ea(1|i,a,void 0,c===void 0?null:c)}function Xl(n,i,a,c){var f=mn();c=c===void 0?null:c;var p=void 0;if(pt!==null){var v=pt.memoizedState;if(p=v.destroy,c!==null&&mh(c,v.deps)){f.memoizedState=Ea(i,a,p,c);return}}tt.flags|=n,f.memoizedState=Ea(1|i,a,p,c)}function Zp(n,i){return Ql(8390656,8,n,i)}function Eh(n,i){return Xl(2048,8,n,i)}function em(n,i){return Xl(4,2,n,i)}function tm(n,i){return Xl(4,4,n,i)}function nm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function rm(n,i,a){return a=a!=null?a.concat([n]):null,Xl(4,4,nm.bind(null,i,n),a)}function wh(){}function im(n,i){var a=mn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&mh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function sm(n,i){var a=mn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&mh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function om(n,i,a){return(ts&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Sn(a,i)||(a=Wo(),tt.lanes|=a,ns|=a,n.baseState=!0),i)}function l0(n,i){var a=Oe;Oe=a!==0&&4>a?a:4,n(!0);var c=ph.transition;ph.transition={};try{n(!1),i()}finally{Oe=a,ph.transition=c}}function am(){return mn().memoizedState}function u0(n,i,a){var c=ai(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},lm(n))um(i,a);else if(a=Fp(n,i,a,c),a!==null){var f=Ht();kn(a,n,c,f),cm(a,i,c)}}function c0(n,i,a){var c=ai(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(lm(n))um(i,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var v=i.lastRenderedState,A=p(v,a);if(f.hasEagerState=!0,f.eagerState=A,Sn(A,v)){var P=i.interleaved;P===null?(f.next=f,lh(i)):(f.next=P.next,P.next=f),i.interleaved=f;return}}catch{}finally{}a=Fp(n,i,f,c),a!==null&&(f=Ht(),kn(a,n,c,f),cm(a,i,c))}}function lm(n){var i=n.alternate;return n===tt||i!==null&&i===tt}function um(n,i){ya=Gl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function cm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Go(n,a)}}var Yl={readContext:pn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},h0={readContext:pn,useCallback:function(n,i){return Xn().memoizedState=[n,i===void 0?null:i],n},useContext:pn,useEffect:Zp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ql(4194308,4,nm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ql(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ql(4,2,n,i)},useMemo:function(n,i){var a=Xn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Xn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=u0.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var i=Xn();return n={current:n},i.memoizedState=n},useState:Yp,useDebugValue:wh,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=Yp(!1),i=n[0];return n=l0.bind(null,n[1]),Xn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tt,f=Xn();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wt===null)throw Error(t(349));(ts&30)!==0||Wp(c,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,Zp(Gp.bind(null,c,p,n),[n]),c.flags|=2048,Ea(9,Kp.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=Xn(),i=wt.identifierPrefix;if(Ze){var a=Sr,c=Ir;a=(c&~(1<<32-en(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=_a++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=a0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},f0={readContext:pn,useCallback:im,useContext:pn,useEffect:Eh,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:tm,useMemo:sm,useReducer:_h,useRef:Jp,useState:function(){return _h(va)},useDebugValue:wh,useDeferredValue:function(n){var i=mn();return om(i,pt.memoizedState,n)},useTransition:function(){var n=_h(va)[0],i=mn().memoizedState;return[n,i]},useMutableSource:Hp,useSyncExternalStore:qp,useId:am,unstable_isNewReconciler:!1},d0={readContext:pn,useCallback:im,useContext:pn,useEffect:Eh,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:tm,useMemo:sm,useReducer:vh,useRef:Jp,useState:function(){return vh(va)},useDebugValue:wh,useDeferredValue:function(n){var i=mn();return pt===null?i.memoizedState=n:om(i,pt.memoizedState,n)},useTransition:function(){var n=vh(va)[0],i=mn().memoizedState;return[n,i]},useMutableSource:Hp,useSyncExternalStore:qp,useId:am,unstable_isNewReconciler:!1};function Rn(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Th(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Jl={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ht(),f=ai(n),p=Rr(c,f);p.payload=i,a!=null&&(p.callback=a),i=ri(n,p,f),i!==null&&(kn(i,n,f,c),Hl(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ht(),f=ai(n),p=Rr(c,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=ri(n,p,f),i!==null&&(kn(i,n,f,c),Hl(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ht(),c=ai(n),f=Rr(a,c);f.tag=2,i!=null&&(f.callback=i),i=ri(n,f,c),i!==null&&(kn(i,n,c,a),Hl(i,n,c))}};function hm(n,i,a,c,f,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):i.prototype&&i.prototype.isPureReactComponent?!oa(a,c)||!oa(f,p):!0}function fm(n,i,a){var c=!1,f=ei,p=i.contextType;return typeof p=="object"&&p!==null?p=pn(p):(f=Wt(i)?Xi:Vt.current,c=i.contextTypes,p=(c=c!=null)?Gs(n,f):ei),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Jl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=p),i}function dm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Jl.enqueueReplaceState(i,i.state,null)}function Ih(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},uh(n);var p=i.contextType;typeof p=="object"&&p!==null?f.context=pn(p):(p=Wt(i)?Xi:Vt.current,f.context=Gs(n,p)),f.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Th(n,i,p,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Jl.enqueueReplaceState(f,f.state,null),ql(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function no(n,i){try{var a="",c=i;do a+=Pe(c),c=c.return;while(c);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:f,digest:null}}function Sh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ah(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var p0=typeof WeakMap=="function"?WeakMap:Map;function pm(n,i,a){a=Rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){su||(su=!0,Bh=c),Ah(n,i)},a}function mm(n,i,a){a=Rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){Ah(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Ah(n,i),typeof c!="function"&&(si===null?si=new Set([this]):si.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function gm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new p0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=P0.bind(null,n,i,a),i.then(n,n))}function ym(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function _m(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Rr(-1,1),i.tag=2,ri(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var m0=fe.ReactCurrentOwner,Kt=!1;function $t(n,i,a,c){i.child=n===null?Up(i,null,a,c):Js(i,n.child,a,c)}function vm(n,i,a,c,f){a=a.render;var p=i.ref;return eo(i,f),c=gh(n,i,a,c,p,f),a=yh(),n!==null&&!Kt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Cr(n,i,f)):(Ze&&a&&Zc(i),i.flags|=1,$t(n,i,c,f),i.child)}function Em(n,i,a,c,f){if(n===null){var p=a.type;return typeof p=="function"&&!Kh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,wm(n,i,p,c,f)):(n=hu(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&f)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:oa,a(v,c)&&n.ref===i.ref)return Cr(n,i,f)}return i.flags|=1,n=ui(p,c),n.ref=i.ref,n.return=i,i.child=n}function wm(n,i,a,c,f){if(n!==null){var p=n.memoizedProps;if(oa(p,c)&&n.ref===i.ref)if(Kt=!1,i.pendingProps=c=p,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Kt=!0);else return i.lanes=n.lanes,Cr(n,i,f)}return Rh(n,i,a,c,f)}function Tm(n,i,a){var c=i.pendingProps,f=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(io,ln),ln|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,We(io,ln),ln|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,We(io,ln),ln|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,We(io,ln),ln|=c;return $t(n,i,f,a),i.child}function Im(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Rh(n,i,a,c,f){var p=Wt(a)?Xi:Vt.current;return p=Gs(i,p),eo(i,f),a=gh(n,i,a,c,p,f),c=yh(),n!==null&&!Kt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Cr(n,i,f)):(Ze&&c&&Zc(i),i.flags|=1,$t(n,i,a,f),i.child)}function Sm(n,i,a,c,f){if(Wt(a)){var p=!0;Ml(i)}else p=!1;if(eo(i,f),i.stateNode===null)eu(n,i),fm(i,a,c),Ih(i,a,c,f),c=!0;else if(n===null){var v=i.stateNode,A=i.memoizedProps;v.props=A;var P=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=pn(F):(F=Wt(a)?Xi:Vt.current,F=Gs(i,F));var G=a.getDerivedStateFromProps,Q=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||P!==F)&&dm(i,v,c,F),ni=!1;var K=i.memoizedState;v.state=K,ql(i,c,v,f),P=i.memoizedState,A!==c||K!==P||qt.current||ni?(typeof G=="function"&&(Th(i,a,G,c),P=i.memoizedState),(A=ni||hm(i,a,A,c,K,P,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=F,c=A):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Bp(n,i),A=i.memoizedProps,F=i.type===i.elementType?A:Rn(i.type,A),v.props=F,Q=i.pendingProps,K=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=pn(P):(P=Wt(a)?Xi:Vt.current,P=Gs(i,P));var te=a.getDerivedStateFromProps;(G=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==Q||K!==P)&&dm(i,v,c,P),ni=!1,K=i.memoizedState,v.state=K,ql(i,c,v,f);var ae=i.memoizedState;A!==Q||K!==ae||qt.current||ni?(typeof te=="function"&&(Th(i,a,te,c),ae=i.memoizedState),(F=ni||hm(i,a,F,c,K,ae,P)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),v.props=c,v.state=ae,v.context=P,c=F):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),c=!1)}return Ch(n,i,a,c,p,f)}function Ch(n,i,a,c,f,p){Im(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return f&&kp(i,a,!1),Cr(n,i,p);c=i.stateNode,m0.current=i;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Js(i,n.child,null,p),i.child=Js(i,null,A,p)):$t(n,i,A,p),i.memoizedState=c.state,f&&kp(i,a,!0),i.child}function Am(n){var i=n.stateNode;i.pendingContext?Cp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Cp(n,i.context,!1),ch(n,i.containerInfo)}function Rm(n,i,a,c,f){return Ys(),rh(f),i.flags|=256,$t(n,i,a,c),i.child}var Ph={dehydrated:null,treeContext:null,retryLane:0};function kh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cm(n,i,a){var c=i.pendingProps,f=et.current,p=!1,v=(i.flags&128)!==0,A;if((A=v)||(A=n!==null&&n.memoizedState===null?!1:(f&2)!==0),A?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),We(et,f&1),n===null)return nh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=i.mode,p=i.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=fu(v,c,0,null),n=os(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=kh(a),i.memoizedState=Ph,n):Nh(i,v));if(f=n.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return g0(n,i,v,c,A,f,a);if(p){p=c.fallback,v=i.mode,f=n.child,A=f.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ui(f,P),c.subtreeFlags=f.subtreeFlags&14680064),A!==null?p=ui(A,p):(p=os(p,v,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,v=n.child.memoizedState,v=v===null?kh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,i.memoizedState=Ph,c}return p=n.child,n=p.sibling,c=ui(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Nh(n,i){return i=fu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Zl(n,i,a,c){return c!==null&&rh(c),Js(i,n.child,null,a),n=Nh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function g0(n,i,a,c,f,p,v){if(a)return i.flags&256?(i.flags&=-257,c=Sh(Error(t(422))),Zl(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,f=i.mode,c=fu({mode:"visible",children:c.children},f,0,null),p=os(p,f,v,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Js(i,n.child,null,v),i.child.memoizedState=kh(v),i.memoizedState=Ph,p);if((i.mode&1)===0)return Zl(n,i,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var A=c.dgst;return c=A,p=Error(t(419)),c=Sh(p,c,void 0),Zl(n,i,v,c)}if(A=(v&n.childLanes)!==0,Kt||A){if(c=wt,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|v))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ar(n,f),kn(c,n,f,-1))}return Wh(),c=Sh(Error(t(421))),Zl(n,i,v,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=k0.bind(null,n),f._reactRetry=i,null):(n=p.treeContext,an=Jr(f.nextSibling),on=i,Ze=!0,An=null,n!==null&&(fn[dn++]=Ir,fn[dn++]=Sr,fn[dn++]=Yi,Ir=n.id,Sr=n.overflow,Yi=i),i=Nh(i,c.children),i.flags|=4096,i)}function Pm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ah(n.return,i,a)}function Dh(n,i,a,c,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=f)}function km(n,i,a){var c=i.pendingProps,f=c.revealOrder,p=c.tail;if($t(n,i,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pm(n,a,i);else if(n.tag===19)Pm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(et,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Wl(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Dh(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Wl(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Dh(i,!0,a,null,p);break;case"together":Dh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function eu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Cr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ns|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ui(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ui(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function y0(n,i,a){switch(i.tag){case 3:Am(i),Ys();break;case 5:$p(i);break;case 1:Wt(i.type)&&Ml(i);break;case 4:ch(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;We(jl,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(et,et.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Cm(n,i,a):(We(et,et.current&1),n=Cr(n,i,a),n!==null?n.sibling:null);We(et,et.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return km(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),We(et,et.current),c)break;return null;case 22:case 23:return i.lanes=0,Tm(n,i,a)}return Cr(n,i,a)}var Nm,xh,Dm,xm;Nm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},xh=function(){},Dm=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,es(Qn.current);var p=null;switch(a){case"input":f=Es(n,f),c=Es(n,c),p=[];break;case"select":f=re({},f,{value:void 0}),c=re({},c,{value:void 0}),p=[];break;case"textarea":f=Lo(n,f),c=Lo(n,c),p=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ol)}wn(a,c);var v;a=null;for(F in f)if(!c.hasOwnProperty(F)&&f.hasOwnProperty(F)&&f[F]!=null)if(F==="style"){var A=f[F];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var P=c[F];if(A=f?.[F],c.hasOwnProperty(F)&&P!==A&&(P!=null||A!=null))if(F==="style")if(A){for(v in A)!A.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&A[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(F,a)),a=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(p=p||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&Ge("scroll",n),p||A===P||(p=[])):(p=p||[]).push(F,P))}a&&(p=p||[]).push("style",a);var F=p;(i.updateQueue=F)&&(i.flags|=4)}},xm=function(n,i,a,c){a!==c&&(i.flags|=4)};function wa(n,i){if(!Ze)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function _0(n,i,a){var c=i.pendingProps;switch(eh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(i),null;case 1:return Wt(i.type)&&Ll(),Mt(i),null;case 3:return c=i.stateNode,to(),Qe(qt),Qe(Vt),dh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,An!==null&&($h(An),An=null))),xh(n,i),Mt(i),null;case 5:hh(i);var f=es(ga.current);if(a=i.type,n!==null&&i.stateNode!=null)Dm(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mt(i),null}if(n=es(Qn.current),Bl(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[Gn]=i,c[ha]=p,n=(i.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(f=0;f<la.length;f++)Ge(la[f],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":il(c,p),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ge("invalid",c);break;case"textarea":Mo(c,p),Ge("invalid",c)}wn(a,p),f=null;for(var v in p)if(p.hasOwnProperty(v)){var A=p[v];v==="children"?typeof A=="string"?c.textContent!==A&&(p.suppressHydrationWarning!==!0&&xl(c.textContent,A,n),f=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(p.suppressHydrationWarning!==!0&&xl(c.textContent,A,n),f=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Ge("scroll",c)}switch(a){case"input":vs(c),Vo(c,p,!0);break;case"textarea":vs(c),Mr(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ol)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=bo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Gn]=i,n[ha]=c,Nm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Ss(a,c),a){case"dialog":Ge("cancel",n),Ge("close",n),f=c;break;case"iframe":case"object":case"embed":Ge("load",n),f=c;break;case"video":case"audio":for(f=0;f<la.length;f++)Ge(la[f],n);f=c;break;case"source":Ge("error",n),f=c;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),f=c;break;case"details":Ge("toggle",n),f=c;break;case"input":il(n,c),f=Es(n,c),Ge("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=re({},c,{value:void 0}),Ge("invalid",n);break;case"textarea":Mo(n,c),f=Lo(n,c),Ge("invalid",n);break;default:f=c}wn(a,f),A=f;for(p in A)if(A.hasOwnProperty(p)){var P=A[p];p==="style"?Is(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ol(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Li(n,P):typeof P=="number"&&Li(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&Ge("scroll",n):P!=null&&he(n,p,P,v))}switch(a){case"input":vs(n),Vo(n,c,!1);break;case"textarea":vs(n),Mr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?En(n,!!c.multiple,p,!1):c.defaultValue!=null&&En(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ol)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mt(i),null;case 6:if(n&&i.stateNode!=null)xm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=es(ga.current),es(Qn.current),Bl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Gn]=i,(p=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:xl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xl(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Gn]=i,i.stateNode=c}return Mt(i),null;case 13:if(Qe(et),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ze&&an!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Lp(),Ys(),i.flags|=98560,p=!1;else if(p=Bl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Gn]=i}else Ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mt(i),p=!1}else An!==null&&($h(An),An=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(et.current&1)!==0?mt===0&&(mt=3):Wh())),i.updateQueue!==null&&(i.flags|=4),Mt(i),null);case 4:return to(),xh(n,i),n===null&&ua(i.stateNode.containerInfo),Mt(i),null;case 10:return oh(i.type._context),Mt(i),null;case 17:return Wt(i.type)&&Ll(),Mt(i),null;case 19:if(Qe(et),p=i.memoizedState,p===null)return Mt(i),null;if(c=(i.flags&128)!==0,v=p.rendering,v===null)if(c)wa(p,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Wl(n),v!==null){for(i.flags|=128,wa(p,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(et,et.current&1|2),i.child}n=n.sibling}p.tail!==null&&Ke()>so&&(i.flags|=128,c=!0,wa(p,!1),i.lanes=4194304)}else{if(!c)if(n=Wl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),wa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ze)return Mt(i),null}else 2*Ke()-p.renderingStartTime>so&&a!==1073741824&&(i.flags|=128,c=!0,wa(p,!1),i.lanes=4194304);p.isBackwards?(v.sibling=i.child,i.child=v):(a=p.last,a!==null?a.sibling=v:i.child=v,p.last=v)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ke(),i.sibling=null,a=et.current,We(et,c?a&1|2:a&1),i):(Mt(i),null);case 22:case 23:return qh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ln&1073741824)!==0&&(Mt(i),i.subtreeFlags&6&&(i.flags|=8192)):Mt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function v0(n,i){switch(eh(i),i.tag){case 1:return Wt(i.type)&&Ll(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return to(),Qe(qt),Qe(Vt),dh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return hh(i),null;case 13:if(Qe(et),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ys()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qe(et),null;case 4:return to(),null;case 10:return oh(i.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var tu=!1,bt=!1,E0=typeof WeakSet=="function"?WeakSet:Set,se=null;function ro(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,i,c)}else a.current=null}function Oh(n,i,a){try{a()}catch(c){it(n,i,c)}}var Om=!1;function w0(n,i){if(qc=_r,n=hp(),bc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,A=-1,P=-1,F=0,G=0,Q=n,K=null;t:for(;;){for(var te;Q!==a||f!==0&&Q.nodeType!==3||(A=v+f),Q!==p||c!==0&&Q.nodeType!==3||(P=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(te=Q.firstChild)!==null;)K=Q,Q=te;for(;;){if(Q===n)break t;if(K===a&&++F===f&&(A=v),K===p&&++G===c&&(P=v),(te=Q.nextSibling)!==null)break;Q=K,K=Q.parentNode}Q=te}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wc={focusedElem:n,selectionRange:a},_r=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var ae=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,at=ae.memoizedState,M=i.stateNode,D=M.getSnapshotBeforeUpdate(i.elementType===i.type?le:Rn(i.type,le),at);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){it(i,i.return,J)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return ae=Om,Om=!1,ae}function Ta(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var p=f.destroy;f.destroy=void 0,p!==void 0&&Oh(i,a,p)}f=f.next}while(f!==c)}}function nu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Vh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Vm(n){var i=n.alternate;i!==null&&(n.alternate=null,Vm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Gn],delete i[ha],delete i[Xc],delete i[r0],delete i[i0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lm(n){return n.tag===5||n.tag===3||n.tag===4}function Mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ol));else if(c!==4&&(n=n.child,n!==null))for(Lh(n,i,a),n=n.sibling;n!==null;)Lh(n,i,a),n=n.sibling}function Mh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Mh(n,i,a),n=n.sibling;n!==null;)Mh(n,i,a),n=n.sibling}var Ct=null,Cn=!1;function ii(n,i,a){for(a=a.child;a!==null;)bm(n,i,a),a=a.sibling}function bm(n,i,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Bi,a)}catch{}switch(a.tag){case 5:bt||ro(a,i);case 6:var c=Ct,f=Cn;Ct=null,ii(n,i,a),Ct=c,Cn=f,Ct!==null&&(Cn?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Cn?(n=Ct,a=a.stateNode,n.nodeType===8?Qc(n.parentNode,a):n.nodeType===1&&Qc(n,a),Gr(n)):Qc(Ct,a.stateNode));break;case 4:c=Ct,f=Cn,Ct=a.stateNode.containerInfo,Cn=!0,ii(n,i,a),Ct=c,Cn=f;break;case 0:case 11:case 14:case 15:if(!bt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var p=f,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Oh(a,i,v),f=f.next}while(f!==c)}ii(n,i,a);break;case 1:if(!bt&&(ro(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){it(a,i,A)}ii(n,i,a);break;case 21:ii(n,i,a);break;case 22:a.mode&1?(bt=(c=bt)||a.memoizedState!==null,ii(n,i,a),bt=c):ii(n,i,a);break;default:ii(n,i,a)}}function Um(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new E0),i.forEach(function(c){var f=N0.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Pn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var p=n,v=i,A=v;e:for(;A!==null;){switch(A.tag){case 5:Ct=A.stateNode,Cn=!1;break e;case 3:Ct=A.stateNode.containerInfo,Cn=!0;break e;case 4:Ct=A.stateNode.containerInfo,Cn=!0;break e}A=A.return}if(Ct===null)throw Error(t(160));bm(p,v,f),Ct=null,Cn=!1;var P=f.alternate;P!==null&&(P.return=null),f.return=null}catch(F){it(f,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Fm(i,n),i=i.sibling}function Fm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pn(i,n),Yn(n),c&4){try{Ta(3,n,n.return),nu(3,n)}catch(le){it(n,n.return,le)}try{Ta(5,n,n.return)}catch(le){it(n,n.return,le)}}break;case 1:Pn(i,n),Yn(n),c&512&&a!==null&&ro(a,a.return);break;case 5:if(Pn(i,n),Yn(n),c&512&&a!==null&&ro(a,a.return),n.flags&32){var f=n.stateNode;try{Li(f,"")}catch(le){it(n,n.return,le)}}if(c&4&&(f=n.stateNode,f!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,A=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{A==="input"&&p.type==="radio"&&p.name!=null&&ws(f,p),Ss(A,v);var F=Ss(A,p);for(v=0;v<P.length;v+=2){var G=P[v],Q=P[v+1];G==="style"?Is(f,Q):G==="dangerouslySetInnerHTML"?ol(f,Q):G==="children"?Li(f,Q):he(f,G,Q,F)}switch(A){case"input":Vi(f,p);break;case"textarea":sl(f,p);break;case"select":var K=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?En(f,!!p.multiple,te,!1):K!==!!p.multiple&&(p.defaultValue!=null?En(f,!!p.multiple,p.defaultValue,!0):En(f,!!p.multiple,p.multiple?[]:"",!1))}f[ha]=p}catch(le){it(n,n.return,le)}}break;case 6:if(Pn(i,n),Yn(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,p=n.memoizedProps;try{f.nodeValue=p}catch(le){it(n,n.return,le)}}break;case 3:if(Pn(i,n),Yn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Gr(i.containerInfo)}catch(le){it(n,n.return,le)}break;case 4:Pn(i,n),Yn(n);break;case 13:Pn(i,n),Yn(n),f=n.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Fh=Ke())),c&4&&Um(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(bt=(F=bt)||G,Pn(i,n),bt=F):Pn(i,n),Yn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!G&&(n.mode&1)!==0)for(se=n,G=n.child;G!==null;){for(Q=se=G;se!==null;){switch(K=se,te=K.child,K.tag){case 0:case 11:case 14:case 15:Ta(4,K,K.return);break;case 1:ro(K,K.return);var ae=K.stateNode;if(typeof ae.componentWillUnmount=="function"){c=K,a=K.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(le){it(c,a,le)}}break;case 5:ro(K,K.return);break;case 22:if(K.memoizedState!==null){jm(Q);continue}}te!==null?(te.return=K,se=te):jm(Q)}G=G.sibling}e:for(G=null,Q=n;;){if(Q.tag===5){if(G===null){G=Q;try{f=Q.stateNode,F?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(A=Q.stateNode,P=Q.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=Fr("display",v))}catch(le){it(n,n.return,le)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(le){it(n,n.return,le)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Pn(i,n),Yn(n),c&4&&Um(n);break;case 21:break;default:Pn(i,n),Yn(n)}}function Yn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Lm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Li(f,""),c.flags&=-33);var p=Mm(n);Mh(n,p,f);break;case 3:case 4:var v=c.stateNode.containerInfo,A=Mm(n);Lh(n,A,v);break;default:throw Error(t(161))}}catch(P){it(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function T0(n,i,a){se=n,Bm(n)}function Bm(n,i,a){for(var c=(n.mode&1)!==0;se!==null;){var f=se,p=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||tu;if(!v){var A=f.alternate,P=A!==null&&A.memoizedState!==null||bt;A=tu;var F=bt;if(tu=v,(bt=P)&&!F)for(se=f;se!==null;)v=se,P=v.child,v.tag===22&&v.memoizedState!==null?$m(f):P!==null?(P.return=v,se=P):$m(f);for(;p!==null;)se=p,Bm(p),p=p.sibling;se=f,tu=A,bt=F}zm(n)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,se=p):zm(n)}}function zm(n){for(;se!==null;){var i=se;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:bt||nu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!bt)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Rn(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&jp(i,p,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}jp(i,v,a)}break;case 5:var A=i.stateNode;if(a===null&&i.flags&4){a=A;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&Gr(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bt||i.flags&512&&Vh(i)}catch(K){it(i,i.return,K)}}if(i===n){se=null;break}if(a=i.sibling,a!==null){a.return=i.return,se=a;break}se=i.return}}function jm(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var a=i.sibling;if(a!==null){a.return=i.return,se=a;break}se=i.return}}function $m(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{nu(4,i)}catch(P){it(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(P){it(i,f,P)}}var p=i.return;try{Vh(i)}catch(P){it(i,p,P)}break;case 5:var v=i.return;try{Vh(i)}catch(P){it(i,v,P)}}}catch(P){it(i,i.return,P)}if(i===n){se=null;break}var A=i.sibling;if(A!==null){A.return=i.return,se=A;break}se=i.return}}var I0=Math.ceil,ru=fe.ReactCurrentDispatcher,bh=fe.ReactCurrentOwner,gn=fe.ReactCurrentBatchConfig,be=0,wt=null,ht=null,Pt=0,ln=0,io=Zr(0),mt=0,Ia=null,ns=0,iu=0,Uh=0,Sa=null,Gt=null,Fh=0,so=1/0,Pr=null,su=!1,Bh=null,si=null,ou=!1,oi=null,au=0,Aa=0,zh=null,lu=-1,uu=0;function Ht(){return(be&6)!==0?Ke():lu!==-1?lu:lu=Ke()}function ai(n){return(n.mode&1)===0?1:(be&2)!==0&&Pt!==0?Pt&-Pt:o0.transition!==null?(uu===0&&(uu=Wo()),uu):(n=Oe,n!==0||(n=window.event,n=n===void 0?16:Vs(n.type)),n)}function kn(n,i,a,c){if(50<Aa)throw Aa=0,zh=null,Error(t(185));Hi(n,a,c),((be&2)===0||n!==wt)&&(n===wt&&((be&2)===0&&(iu|=a),mt===4&&li(n,Pt)),Qt(n,c),a===1&&be===0&&(i.mode&1)===0&&(so=Ke()+500,bl&&ti()))}function Qt(n,i){var a=n.callbackNode;$i(n,i);var c=mr(n,n===wt?Pt:0);if(c===0)a!==null&&Cs(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Cs(a),i===1)n.tag===0?s0(qm.bind(null,n)):Np(qm.bind(null,n)),t0(function(){(be&6)===0&&ti()}),a=null;else{switch(Un(c)){case 1:a=Ps;break;case 4:a=$o;break;case 16:a=Fi;break;case 536870912:a=ks;break;default:a=Fi}a=Zm(a,Hm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Hm(n,i){if(lu=-1,uu=0,(be&6)!==0)throw Error(t(327));var a=n.callbackNode;if(oo()&&n.callbackNode!==a)return null;var c=mr(n,n===wt?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=cu(n,c);else{i=c;var f=be;be|=2;var p=Km();(wt!==n||Pt!==i)&&(Pr=null,so=Ke()+500,is(n,i));do try{R0();break}catch(A){Wm(n,A)}while(!0);sh(),ru.current=p,be=f,ht!==null?i=0:(wt=null,Pt=0,i=mt)}if(i!==0){if(i===2&&(f=qo(n),f!==0&&(c=f,i=jh(n,f))),i===1)throw a=Ia,is(n,0),li(n,c),Qt(n,Ke()),a;if(i===6)li(n,c);else{if(f=n.current.alternate,(c&30)===0&&!S0(f)&&(i=cu(n,c),i===2&&(p=qo(n),p!==0&&(c=p,i=jh(n,p))),i===1))throw a=Ia,is(n,0),li(n,c),Qt(n,Ke()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ss(n,Gt,Pr);break;case 3:if(li(n,c),(c&130023424)===c&&(i=Fh+500-Ke(),10<i)){if(mr(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Gc(ss.bind(null,n,Gt,Pr),i);break}ss(n,Gt,Pr);break;case 4:if(li(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var v=31-en(c);p=1<<v,v=i[v],v>f&&(f=v),c&=~p}if(c=f,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*I0(c/1960))-c,10<c){n.timeoutHandle=Gc(ss.bind(null,n,Gt,Pr),c);break}ss(n,Gt,Pr);break;case 5:ss(n,Gt,Pr);break;default:throw Error(t(329))}}}return Qt(n,Ke()),n.callbackNode===a?Hm.bind(null,n):null}function jh(n,i){var a=Sa;return n.current.memoizedState.isDehydrated&&(is(n,i).flags|=256),n=cu(n,i),n!==2&&(i=Gt,Gt=a,i!==null&&$h(i)),n}function $h(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function S0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],p=f.getSnapshot;f=f.value;try{if(!Sn(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function li(n,i){for(i&=~Uh,i&=~iu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-en(i),c=1<<a;n[a]=-1,i&=~c}}function qm(n){if((be&6)!==0)throw Error(t(327));oo();var i=mr(n,0);if((i&1)===0)return Qt(n,Ke()),null;var a=cu(n,i);if(n.tag!==0&&a===2){var c=qo(n);c!==0&&(i=c,a=jh(n,c))}if(a===1)throw a=Ia,is(n,0),li(n,i),Qt(n,Ke()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ss(n,Gt,Pr),Qt(n,Ke()),null}function Hh(n,i){var a=be;be|=1;try{return n(i)}finally{be=a,be===0&&(so=Ke()+500,bl&&ti())}}function rs(n){oi!==null&&oi.tag===0&&(be&6)===0&&oo();var i=be;be|=1;var a=gn.transition,c=Oe;try{if(gn.transition=null,Oe=1,n)return n()}finally{Oe=c,gn.transition=a,be=i,(be&6)===0&&ti()}}function qh(){ln=io.current,Qe(io)}function is(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,e0(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(eh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ll();break;case 3:to(),Qe(qt),Qe(Vt),dh();break;case 5:hh(c);break;case 4:to();break;case 13:Qe(et);break;case 19:Qe(et);break;case 10:oh(c.type._context);break;case 22:case 23:qh()}a=a.return}if(wt=n,ht=n=ui(n.current,null),Pt=ln=i,mt=0,Ia=null,Uh=iu=ns=0,Gt=Sa=null,Zi!==null){for(i=0;i<Zi.length;i++)if(a=Zi[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=f,c.next=v}a.pending=c}Zi=null}return n}function Wm(n,i){do{var a=ht;try{if(sh(),Kl.current=Yl,Gl){for(var c=tt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Gl=!1}if(ts=0,Et=pt=tt=null,ya=!1,_a=0,bh.current=null,a===null||a.return===null){mt=1,Ia=i,ht=null;break}e:{var p=n,v=a.return,A=a,P=i;if(i=Pt,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,G=A,Q=G.tag;if((G.mode&1)===0&&(Q===0||Q===11||Q===15)){var K=G.alternate;K?(G.updateQueue=K.updateQueue,G.memoizedState=K.memoizedState,G.lanes=K.lanes):(G.updateQueue=null,G.memoizedState=null)}var te=ym(v);if(te!==null){te.flags&=-257,_m(te,v,A,p,i),te.mode&1&&gm(p,F,i),i=te,P=F;var ae=i.updateQueue;if(ae===null){var le=new Set;le.add(P),i.updateQueue=le}else ae.add(P);break e}else{if((i&1)===0){gm(p,F,i),Wh();break e}P=Error(t(426))}}else if(Ze&&A.mode&1){var at=ym(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),_m(at,v,A,p,i),rh(no(P,A));break e}}p=P=no(P,A),mt!==4&&(mt=2),Sa===null?Sa=[p]:Sa.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var M=pm(p,P,i);zp(p,M);break e;case 1:A=P;var D=p.type,U=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(si===null||!si.has(U)))){p.flags|=65536,i&=-i,p.lanes|=i;var J=mm(p,A,i);zp(p,J);break e}}p=p.return}while(p!==null)}Qm(a)}catch(ue){i=ue,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function Km(){var n=ru.current;return ru.current=Yl,n===null?Yl:n}function Wh(){(mt===0||mt===3||mt===2)&&(mt=4),wt===null||(ns&268435455)===0&&(iu&268435455)===0||li(wt,Pt)}function cu(n,i){var a=be;be|=2;var c=Km();(wt!==n||Pt!==i)&&(Pr=null,is(n,i));do try{A0();break}catch(f){Wm(n,f)}while(!0);if(sh(),be=a,ru.current=c,ht!==null)throw Error(t(261));return wt=null,Pt=0,mt}function A0(){for(;ht!==null;)Gm(ht)}function R0(){for(;ht!==null&&!Ui();)Gm(ht)}function Gm(n){var i=Jm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,i===null?Qm(n):ht=i,bh.current=null}function Qm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=_0(a,i,ln),a!==null){ht=a;return}}else{if(a=v0(a,i),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,ht=null;return}}if(i=i.sibling,i!==null){ht=i;return}ht=i=n}while(i!==null);mt===0&&(mt=5)}function ss(n,i,a){var c=Oe,f=gn.transition;try{gn.transition=null,Oe=1,C0(n,i,a,c)}finally{gn.transition=f,Oe=c}return null}function C0(n,i,a,c){do oo();while(oi!==null);if((be&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(xc(n,p),n===wt&&(ht=wt=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ou||(ou=!0,Zm(Fi,function(){return oo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=gn.transition,gn.transition=null;var v=Oe;Oe=1;var A=be;be|=4,bh.current=null,w0(n,a),Fm(a,n),KE(Wc),_r=!!qc,Wc=qc=null,n.current=a,T0(a),pr(),be=A,Oe=v,gn.transition=p}else n.current=a;if(ou&&(ou=!1,oi=n,au=f),p=n.pendingLanes,p===0&&(si=null),yl(a.stateNode),Qt(n,Ke()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(su)throw su=!1,n=Bh,Bh=null,n;return(au&1)!==0&&n.tag!==0&&oo(),p=n.pendingLanes,(p&1)!==0?n===zh?Aa++:(Aa=0,zh=n):Aa=0,ti(),null}function oo(){if(oi!==null){var n=Un(au),i=gn.transition,a=Oe;try{if(gn.transition=null,Oe=16>n?16:n,oi===null)var c=!1;else{if(n=oi,oi=null,au=0,(be&6)!==0)throw Error(t(331));var f=be;for(be|=4,se=n.current;se!==null;){var p=se,v=p.child;if((se.flags&16)!==0){var A=p.deletions;if(A!==null){for(var P=0;P<A.length;P++){var F=A[P];for(se=F;se!==null;){var G=se;switch(G.tag){case 0:case 11:case 15:Ta(8,G,p)}var Q=G.child;if(Q!==null)Q.return=G,se=Q;else for(;se!==null;){G=se;var K=G.sibling,te=G.return;if(Vm(G),G===F){se=null;break}if(K!==null){K.return=te,se=K;break}se=te}}}var ae=p.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var at=le.sibling;le.sibling=null,le=at}while(le!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,se=v;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ta(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var D=n.current;for(se=D;se!==null;){v=se;var U=v.child;if((v.subtreeFlags&2064)!==0&&U!==null)U.return=v,se=U;else e:for(v=D;se!==null;){if(A=se,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:nu(9,A)}}catch(ue){it(A,A.return,ue)}if(A===v){se=null;break e}var J=A.sibling;if(J!==null){J.return=A.return,se=J;break e}se=A.return}}if(be=f,ti(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Bi,n)}catch{}c=!0}return c}finally{Oe=a,gn.transition=i}}return!1}function Xm(n,i,a){i=no(a,i),i=pm(n,i,1),n=ri(n,i,1),i=Ht(),n!==null&&(Hi(n,1,i),Qt(n,i))}function it(n,i,a){if(n.tag===3)Xm(n,n,a);else for(;i!==null;){if(i.tag===3){Xm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(si===null||!si.has(c))){n=no(a,n),n=mm(i,n,1),i=ri(i,n,1),n=Ht(),i!==null&&(Hi(i,1,n),Qt(i,n));break}}i=i.return}}function P0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ht(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(Pt&a)===a&&(mt===4||mt===3&&(Pt&130023424)===Pt&&500>Ke()-Fh?is(n,0):Uh|=a),Qt(n,i)}function Ym(n,i){i===0&&((n.mode&1)===0?i=1:(i=qr,qr<<=1,(qr&130023424)===0&&(qr=4194304)));var a=Ht();n=Ar(n,i),n!==null&&(Hi(n,i,a),Qt(n,a))}function k0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Ym(n,a)}function N0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Ym(n,a)}var Jm;Jm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||qt.current)Kt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Kt=!1,y0(n,i,a);Kt=(n.flags&131072)!==0}else Kt=!1,Ze&&(i.flags&1048576)!==0&&Dp(i,Fl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;eu(n,i),n=i.pendingProps;var f=Gs(i,Vt.current);eo(i,a),f=gh(null,i,c,n,f,a);var p=yh();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wt(c)?(p=!0,Ml(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,uh(i),f.updater=Jl,i.stateNode=f,f._reactInternals=i,Ih(i,c,n,a),i=Ch(null,i,c,!0,p,a)):(i.tag=0,Ze&&p&&Zc(i),$t(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(eu(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=x0(c),n=Rn(c,n),f){case 0:i=Rh(null,i,c,n,a);break e;case 1:i=Sm(null,i,c,n,a);break e;case 11:i=vm(null,i,c,n,a);break e;case 14:i=Em(null,i,c,Rn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Rn(c,f),Rh(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Rn(c,f),Sm(n,i,c,f,a);case 3:e:{if(Am(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,f=p.element,Bp(n,i),ql(i,c,null,a);var v=i.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=no(Error(t(423)),i),i=Rm(n,i,c,a,f);break e}else if(c!==f){f=no(Error(t(424)),i),i=Rm(n,i,c,a,f);break e}else for(an=Jr(i.stateNode.containerInfo.firstChild),on=i,Ze=!0,An=null,a=Up(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ys(),c===f){i=Cr(n,i,a);break e}$t(n,i,c,a)}i=i.child}return i;case 5:return $p(i),n===null&&nh(i),c=i.type,f=i.pendingProps,p=n!==null?n.memoizedProps:null,v=f.children,Kc(c,f)?v=null:p!==null&&Kc(c,p)&&(i.flags|=32),Im(n,i),$t(n,i,v,a),i.child;case 6:return n===null&&nh(i),null;case 13:return Cm(n,i,a);case 4:return ch(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Js(i,null,c,a):$t(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Rn(c,f),vm(n,i,c,f,a);case 7:return $t(n,i,i.pendingProps,a),i.child;case 8:return $t(n,i,i.pendingProps.children,a),i.child;case 12:return $t(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,p=i.memoizedProps,v=f.value,We(jl,c._currentValue),c._currentValue=v,p!==null)if(Sn(p.value,v)){if(p.children===f.children&&!qt.current){i=Cr(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var A=p.dependencies;if(A!==null){v=p.child;for(var P=A.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=Rr(-1,a&-a),P.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var G=F.pending;G===null?P.next=P:(P.next=G.next,G.next=P),F.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),ah(p.return,a,i),A.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===i.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),ah(v,a,i),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===i){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}$t(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,eo(i,a),f=pn(f),c=c(f),i.flags|=1,$t(n,i,c,a),i.child;case 14:return c=i.type,f=Rn(c,i.pendingProps),f=Rn(c.type,f),Em(n,i,c,f,a);case 15:return wm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Rn(c,f),eu(n,i),i.tag=1,Wt(c)?(n=!0,Ml(i)):n=!1,eo(i,a),fm(i,c,f),Ih(i,c,f,a),Ch(null,i,c,!0,n,a);case 19:return km(n,i,a);case 22:return Tm(n,i,a)}throw Error(t(156,i.tag))};function Zm(n,i){return jo(n,i)}function D0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,i,a,c){return new D0(n,i,a,c)}function Kh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function x0(n){if(typeof n=="function")return Kh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Ve)return 14}return 2}function ui(n,i){var a=n.alternate;return a===null?(a=yn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hu(n,i,a,c,f,p){var v=2;if(c=n,typeof n=="function")Kh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return os(a.children,f,p,i);case S:v=8,f|=8;break;case C:return n=yn(12,a,i,f|2),n.elementType=C,n.lanes=p,n;case R:return n=yn(13,a,i,f),n.elementType=R,n.lanes=p,n;case oe:return n=yn(19,a,i,f),n.elementType=oe,n.lanes=p,n;case Je:return fu(a,f,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:v=10;break e;case N:v=9;break e;case O:v=11;break e;case Ve:v=14;break e;case $e:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=yn(v,a,i,f),i.elementType=n,i.type=c,i.lanes=p,i}function os(n,i,a,c){return n=yn(7,n,c,i),n.lanes=a,n}function fu(n,i,a,c){return n=yn(22,n,c,i),n.elementType=Je,n.lanes=a,n.stateNode={isHidden:!1},n}function Gh(n,i,a){return n=yn(6,n,null,i),n.lanes=a,n}function Qh(n,i,a){return i=yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function O0(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Xh(n,i,a,c,f,p,v,A,P){return n=new O0(n,i,a,A,P),i===1?(i=1,p===!0&&(i|=8)):i=0,p=yn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},uh(p),n}function V0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function eg(n){if(!n)return ei;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return Pp(n,a,i)}return i}function tg(n,i,a,c,f,p,v,A,P){return n=Xh(a,c,!0,n,f,p,v,A,P),n.context=eg(null),a=n.current,c=Ht(),f=ai(a),p=Rr(c,f),p.callback=i??null,ri(a,p,f),n.current.lanes=f,Hi(n,f,c),Qt(n,c),n}function du(n,i,a,c){var f=i.current,p=Ht(),v=ai(f);return a=eg(a),i.context===null?i.context=a:i.pendingContext=a,i=Rr(p,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ri(f,i,v),n!==null&&(kn(n,f,v,p),Hl(n,f,v)),v}function pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ng(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Yh(n,i){ng(n,i),(n=n.alternate)&&ng(n,i)}function L0(){return null}var rg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jh(n){this._internalRoot=n}mu.prototype.render=Jh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));du(n,i,null,null)},mu.prototype.unmount=Jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;rs(function(){du(null,n,null,null)}),i[wr]=null}};function mu(n){this._internalRoot=n}mu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Yo();n={blockedOn:null,target:n,priority:i};for(var a=0;a<tn.length&&i!==0&&i<tn[a].priority;a++);tn.splice(a,0,n),a===0&&xs(n)}};function Zh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ig(){}function M0(n,i,a,c,f){if(f){if(typeof c=="function"){var p=c;c=function(){var F=pu(v);p.call(F)}}var v=tg(i,c,n,0,null,!1,!1,"",ig);return n._reactRootContainer=v,n[wr]=v.current,ua(n.nodeType===8?n.parentNode:n),rs(),v}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var A=c;c=function(){var F=pu(P);A.call(F)}}var P=Xh(n,0,!1,null,null,!1,!1,"",ig);return n._reactRootContainer=P,n[wr]=P.current,ua(n.nodeType===8?n.parentNode:n),rs(function(){du(i,P,a,c)}),P}function yu(n,i,a,c,f){var p=a._reactRootContainer;if(p){var v=p;if(typeof f=="function"){var A=f;f=function(){var P=pu(v);A.call(P)}}du(i,v,n,f)}else v=M0(a,i,n,f,c);return pu(v)}Qo=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Fe(i.pendingLanes);a!==0&&(Go(i,a|1),Qt(i,Ke()),(be&6)===0&&(so=Ke()+500,ti()))}break;case 13:rs(function(){var c=Ar(n,1);if(c!==null){var f=Ht();kn(c,n,1,f)}}),Yh(n,1)}},Ns=function(n){if(n.tag===13){var i=Ar(n,134217728);if(i!==null){var a=Ht();kn(i,n,134217728,a)}Yh(n,134217728)}},Xo=function(n){if(n.tag===13){var i=ai(n),a=Ar(n,i);if(a!==null){var c=Ht();kn(a,n,i,c)}Yh(n,i)}},Yo=function(){return Oe},Jo=function(n,i){var a=Oe;try{return Oe=n,i()}finally{Oe=a}},hr=function(n,i,a){switch(i){case"input":if(Vi(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Vl(c);if(!f)throw Error(t(90));Oo(c),Vi(c,f)}}}break;case"textarea":sl(n,a);break;case"select":i=a.value,i!=null&&En(n,!!a.multiple,i,!1)}},ll=Hh,ul=rs;var b0={usingClientEntryPoint:!1,Events:[fa,Ws,Vl,zr,jr,Hh]},Ra={findFiberByHostInstance:Qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U0={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=gl(n),n===null?null:n.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||L0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Bi=_u.inject(U0),Zt=_u}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0,Xt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zh(i))throw Error(t(200));return V0(n,i,null,a)},Xt.createRoot=function(n,i){if(!Zh(n))throw Error(t(299));var a=!1,c="",f=rg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Xh(n,1,!1,null,null,a,!1,c,f),n[wr]=i.current,ua(n.nodeType===8?n.parentNode:n),new Jh(i)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=gl(i),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return rs(n)},Xt.hydrate=function(n,i,a){if(!gu(i))throw Error(t(200));return yu(null,n,i,!0,a)},Xt.hydrateRoot=function(n,i,a){if(!Zh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,p="",v=rg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=tg(i,null,n,1,a??null,f,!1,p,v),n[wr]=i.current,ua(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new mu(i)},Xt.render=function(n,i,a){if(!gu(i))throw Error(t(200));return yu(null,n,i,!1,a)},Xt.unmountComponentAtNode=function(n){if(!gu(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){yu(null,null,n,!1,function(){n._reactRootContainer=null,n[wr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Hh,Xt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!gu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yu(n,i,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var cg;function H0(){if(cg)return tf.exports;cg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),tf.exports=$0(),tf.exports}var hg;function q0(){if(hg)return vu;hg=1;var r=H0();return vu.createRoot=r.createRoot,vu.hydrateRoot=r.hydrateRoot,vu}var W0=q0();const kt=[];for(let r=0;r<256;++r)kt.push((r+256).toString(16).slice(1));function K0(r,e=0){return(kt[r[e+0]]+kt[r[e+1]]+kt[r[e+2]]+kt[r[e+3]]+"-"+kt[r[e+4]]+kt[r[e+5]]+"-"+kt[r[e+6]]+kt[r[e+7]]+"-"+kt[r[e+8]]+kt[r[e+9]]+"-"+kt[r[e+10]]+kt[r[e+11]]+kt[r[e+12]]+kt[r[e+13]]+kt[r[e+14]]+kt[r[e+15]]).toLowerCase()}let sf;const G0=new Uint8Array(16);function Q0(){if(!sf){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");sf=crypto.getRandomValues.bind(crypto)}return sf(G0)}const X0=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),fg={randomUUID:X0};function Y0(r,e,t){r=r||{};const s=r.random??r.rng?.()??Q0();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,K0(s)}function J0(r,e,t){return fg.randomUUID&&!r?fg.randomUUID():Y0(r)}const Z0=()=>{};var dg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},e1=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],d=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},a_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,d=h?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,E=l>>2,T=(l&3)<<4|d>>4;let I=(d&15)<<2|y>>6,L=y&63;g||(L=64,h||(I=64)),s.push(t[E],t[T],t[I],t[L])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(o_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):e1(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],d=o<r.length?t[r.charAt(o)]:0;++o;const y=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new t1;const I=l<<2|d>>4;if(s.push(I),y!==64){const L=d<<4&240|y>>2;if(s.push(L),T!==64){const z=y<<6&192|T;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class t1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const n1=function(r){const e=o_(r);return a_.encodeByteArray(e,!0)},Fu=function(r){return n1(r).replace(/\./g,"")},l_=function(r){try{return a_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=()=>r1().__FIREBASE_DEFAULTS__,s1=()=>{if(typeof process>"u"||typeof dg>"u")return;const r=dg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},o1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&l_(r[1]);return e&&JSON.parse(e)},lc=()=>{try{return Z0()||i1()||s1()||o1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},u_=r=>lc()?.emulatorHosts?.[r],c_=r=>{const e=u_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},h_=()=>lc()?.config,f_=r=>lc()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rd(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Fu(JSON.stringify(t)),Fu(JSON.stringify(h)),""].join(".")}const xa={};function l1(){const r={prod:[],emulator:[]};for(const e of Object.keys(xa))xa[e]?r.emulator.push(e):r.prod.push(e);return r}function u1(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let pg=!1;function id(r,e){if(typeof window>"u"||typeof document>"u"||!ps(window.location.host)||xa[r]===e||xa[r]||pg)return;xa[r]=e;function t(I){return`__firebase__banner__${I}`}const s="__firebase__banner",l=l1().prod.length>0;function h(){const I=document.getElementById(s);I&&I.remove()}function d(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,L){I.setAttribute("width","24"),I.setAttribute("id",L),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{pg=!0,h()},I}function E(I,L){I.setAttribute("id",L),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=u1(s),L=t("text"),z=document.getElementById(L)||document.createElement("span"),$=t("learnmore"),j=document.getElementById($)||document.createElement("a"),Y=t("preprendIcon"),ie=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const he=I.element;d(he),E(j,$);const fe=y();g(ie,Y),he.append(ie,z,j,fe),document.body.appendChild(he)}l?(z.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function h1(){const r=lc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function f1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function d1(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function p1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function m1(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function g1(){return!h1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function y1(){try{return typeof indexedDB=="object"}catch{return!1}}function _1(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="FirebaseError";class ur extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=v1,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ka.prototype.create)}}class Ka{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?E1(l,s):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new ur(o,d,s)}}function E1(r,e){return r.replace(w1,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const w1=/\{\$([^}]+)}/g;function T1(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function us(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(mg(l)&&mg(h)){if(!us(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function mg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ca(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Pa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function I1(r,e){const t=new S1(r,e);return t.subscribe.bind(t)}class S1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");A1(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=of),o.error===void 0&&(o.error=of),o.complete===void 0&&(o.complete=of);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function A1(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function of(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(r){return r&&r._delegate?r._delegate:r}class Ii{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new a1;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(P1(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:C1(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function C1(r){return r===as?void 0:r}function P1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new R1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ne||(Ne={}));const N1={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},D1=Ne.INFO,x1={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},O1=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=x1[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sd{constructor(e){this.name=e,this._logLevel=D1,this._logHandler=O1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?N1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const V1=(r,e)=>e.some(t=>r instanceof t);let gg,yg;function L1(){return gg||(gg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M1(){return yg||(yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const p_=new WeakMap,xf=new WeakMap,m_=new WeakMap,af=new WeakMap,od=new WeakMap;function b1(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(yi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&p_.set(t,r)}).catch(()=>{}),od.set(e,r),e}function U1(r){if(xf.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});xf.set(r,e)}let Of={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return xf.get(r);if(e==="objectStoreNames")return r.objectStoreNames||m_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function F1(r){Of=r(Of)}function B1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(lf(this),e,...t);return m_.set(s,e.sort?e.sort():[e]),yi(s)}:M1().includes(r)?function(...e){return r.apply(lf(this),e),yi(p_.get(this))}:function(...e){return yi(r.apply(lf(this),e))}}function z1(r){return typeof r=="function"?B1(r):(r instanceof IDBTransaction&&U1(r),V1(r,L1())?new Proxy(r,Of):r)}function yi(r){if(r instanceof IDBRequest)return b1(r);if(af.has(r))return af.get(r);const e=z1(r);return e!==r&&(af.set(r,e),od.set(e,r)),e}const lf=r=>od.get(r);function j1(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),d=yi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(yi(h.result),g.oldVersion,g.newVersion,yi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),d.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const $1=["get","getKey","getAll","getAllKeys","count"],H1=["put","add","delete","clear"],uf=new Map;function _g(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(uf.get(e))return uf.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=H1.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||$1.includes(t)))return;const l=async function(h,...d){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&g.done]))[0]};return uf.set(e,l),l}F1(r=>({...r,get:(e,t,s)=>_g(e,t)||r.get(e,t,s),has:(e,t)=>!!_g(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(W1(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function W1(r){return r.getComponent()?.type==="VERSION"}const Vf="@firebase/app",vg="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new sd("@firebase/app"),K1="@firebase/app-compat",G1="@firebase/analytics-compat",Q1="@firebase/analytics",X1="@firebase/app-check-compat",Y1="@firebase/app-check",J1="@firebase/auth",Z1="@firebase/auth-compat",ew="@firebase/database",tw="@firebase/data-connect",nw="@firebase/database-compat",rw="@firebase/functions",iw="@firebase/functions-compat",sw="@firebase/installations",ow="@firebase/installations-compat",aw="@firebase/messaging",lw="@firebase/messaging-compat",uw="@firebase/performance",cw="@firebase/performance-compat",hw="@firebase/remote-config",fw="@firebase/remote-config-compat",dw="@firebase/storage",pw="@firebase/storage-compat",mw="@firebase/firestore",gw="@firebase/ai",yw="@firebase/firestore-compat",_w="firebase",vw="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="[DEFAULT]",Ew={[Vf]:"fire-core",[K1]:"fire-core-compat",[Q1]:"fire-analytics",[G1]:"fire-analytics-compat",[Y1]:"fire-app-check",[X1]:"fire-app-check-compat",[J1]:"fire-auth",[Z1]:"fire-auth-compat",[ew]:"fire-rtdb",[tw]:"fire-data-connect",[nw]:"fire-rtdb-compat",[rw]:"fire-fn",[iw]:"fire-fn-compat",[sw]:"fire-iid",[ow]:"fire-iid-compat",[aw]:"fire-fcm",[lw]:"fire-fcm-compat",[uw]:"fire-perf",[cw]:"fire-perf-compat",[hw]:"fire-rc",[fw]:"fire-rc-compat",[dw]:"fire-gcs",[pw]:"fire-gcs-compat",[mw]:"fire-fst",[yw]:"fire-fst-compat",[gw]:"fire-vertex","fire-js":"fire-js",[_w]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Map,ww=new Map,Mf=new Map;function Eg(r,e){try{r.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function cs(r){const e=r.name;if(Mf.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Mf.set(e,r);for(const t of Bu.values())Eg(t,r);for(const t of ww.values())Eg(t,r);return!0}function uc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function _n(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new Ka("app","Firebase",Tw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=vw;function g_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Lf,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(t||(t=h_()),!t)throw _i.create("no-options");const l=Bu.get(o);if(l){if(us(t,l.options)&&us(s,l.config))return l;throw _i.create("duplicate-app",{appName:o})}const h=new k1(o);for(const g of Mf.values())h.addComponent(g);const d=new Iw(t,s,h);return Bu.set(o,d),d}function ad(r=Lf){const e=Bu.get(r);if(!e&&r===Lf&&h_())return g_();if(!e)throw _i.create("no-app",{appName:r});return e}function Zn(r,e,t){let s=Ew[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(h.join(" "));return}cs(new Ii(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="firebase-heartbeat-database",Aw=1,Ua="firebase-heartbeat-store";let cf=null;function y_(){return cf||(cf=j1(Sw,Aw,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ua)}catch(t){console.warn(t)}}}}).catch(r=>{throw _i.create("idb-open",{originalErrorMessage:r.message})})),cf}async function Rw(r){try{const t=(await y_()).transaction(Ua),s=await t.objectStore(Ua).get(__(r));return await t.done,s}catch(e){if(e instanceof ur)Dr.warn(e.message);else{const t=_i.create("idb-get",{originalErrorMessage:e?.message});Dr.warn(t.message)}}}async function wg(r,e){try{const s=(await y_()).transaction(Ua,"readwrite");await s.objectStore(Ua).put(e,__(r)),await s.done}catch(t){if(t instanceof ur)Dr.warn(t.message);else{const s=_i.create("idb-set",{originalErrorMessage:t?.message});Dr.warn(s.message)}}}function __(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=1024,Pw=30;class kw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Dw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>Pw){const o=xw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Dr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tg(),{heartbeatsToSend:t,unsentEntries:s}=Nw(this._heartbeatsCache.heartbeats),o=Fu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Dr.warn(e),""}}}function Tg(){return new Date().toISOString().substring(0,10)}function Nw(r,e=Cw){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Ig(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ig(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Dw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return y1()?_1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Rw(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ig(r){return Fu(JSON.stringify({version:2,heartbeats:r})).length}function xw(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(r){cs(new Ii("platform-logger",e=>new q1(e),"PRIVATE")),cs(new Ii("heartbeat",e=>new kw(e),"PRIVATE")),Zn(Vf,vg,r),Zn(Vf,vg,"esm2020"),Zn("fire-js","")}Ow("");var Vw="firebase",Lw="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(Vw,Lw,"app");var Sg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vi,v_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function C(){}C.prototype=S.prototype,k.F=S.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(x,N,O){for(var R=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)R[oe-2]=arguments[oe];return S.prototype[N].apply(x,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,C){C||(C=0);const x=Array(16);if(typeof S=="string")for(var N=0;N<16;++N)x[N]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(N=0;N<16;++N)x[N]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=k.g[0],C=k.g[1],N=k.g[2];let O=k.g[3],R;R=S+(O^C&(N^O))+x[0]+3614090360&4294967295,S=C+(R<<7&4294967295|R>>>25),R=O+(N^S&(C^N))+x[1]+3905402710&4294967295,O=S+(R<<12&4294967295|R>>>20),R=N+(C^O&(S^C))+x[2]+606105819&4294967295,N=O+(R<<17&4294967295|R>>>15),R=C+(S^N&(O^S))+x[3]+3250441966&4294967295,C=N+(R<<22&4294967295|R>>>10),R=S+(O^C&(N^O))+x[4]+4118548399&4294967295,S=C+(R<<7&4294967295|R>>>25),R=O+(N^S&(C^N))+x[5]+1200080426&4294967295,O=S+(R<<12&4294967295|R>>>20),R=N+(C^O&(S^C))+x[6]+2821735955&4294967295,N=O+(R<<17&4294967295|R>>>15),R=C+(S^N&(O^S))+x[7]+4249261313&4294967295,C=N+(R<<22&4294967295|R>>>10),R=S+(O^C&(N^O))+x[8]+1770035416&4294967295,S=C+(R<<7&4294967295|R>>>25),R=O+(N^S&(C^N))+x[9]+2336552879&4294967295,O=S+(R<<12&4294967295|R>>>20),R=N+(C^O&(S^C))+x[10]+4294925233&4294967295,N=O+(R<<17&4294967295|R>>>15),R=C+(S^N&(O^S))+x[11]+2304563134&4294967295,C=N+(R<<22&4294967295|R>>>10),R=S+(O^C&(N^O))+x[12]+1804603682&4294967295,S=C+(R<<7&4294967295|R>>>25),R=O+(N^S&(C^N))+x[13]+4254626195&4294967295,O=S+(R<<12&4294967295|R>>>20),R=N+(C^O&(S^C))+x[14]+2792965006&4294967295,N=O+(R<<17&4294967295|R>>>15),R=C+(S^N&(O^S))+x[15]+1236535329&4294967295,C=N+(R<<22&4294967295|R>>>10),R=S+(N^O&(C^N))+x[1]+4129170786&4294967295,S=C+(R<<5&4294967295|R>>>27),R=O+(C^N&(S^C))+x[6]+3225465664&4294967295,O=S+(R<<9&4294967295|R>>>23),R=N+(S^C&(O^S))+x[11]+643717713&4294967295,N=O+(R<<14&4294967295|R>>>18),R=C+(O^S&(N^O))+x[0]+3921069994&4294967295,C=N+(R<<20&4294967295|R>>>12),R=S+(N^O&(C^N))+x[5]+3593408605&4294967295,S=C+(R<<5&4294967295|R>>>27),R=O+(C^N&(S^C))+x[10]+38016083&4294967295,O=S+(R<<9&4294967295|R>>>23),R=N+(S^C&(O^S))+x[15]+3634488961&4294967295,N=O+(R<<14&4294967295|R>>>18),R=C+(O^S&(N^O))+x[4]+3889429448&4294967295,C=N+(R<<20&4294967295|R>>>12),R=S+(N^O&(C^N))+x[9]+568446438&4294967295,S=C+(R<<5&4294967295|R>>>27),R=O+(C^N&(S^C))+x[14]+3275163606&4294967295,O=S+(R<<9&4294967295|R>>>23),R=N+(S^C&(O^S))+x[3]+4107603335&4294967295,N=O+(R<<14&4294967295|R>>>18),R=C+(O^S&(N^O))+x[8]+1163531501&4294967295,C=N+(R<<20&4294967295|R>>>12),R=S+(N^O&(C^N))+x[13]+2850285829&4294967295,S=C+(R<<5&4294967295|R>>>27),R=O+(C^N&(S^C))+x[2]+4243563512&4294967295,O=S+(R<<9&4294967295|R>>>23),R=N+(S^C&(O^S))+x[7]+1735328473&4294967295,N=O+(R<<14&4294967295|R>>>18),R=C+(O^S&(N^O))+x[12]+2368359562&4294967295,C=N+(R<<20&4294967295|R>>>12),R=S+(C^N^O)+x[5]+4294588738&4294967295,S=C+(R<<4&4294967295|R>>>28),R=O+(S^C^N)+x[8]+2272392833&4294967295,O=S+(R<<11&4294967295|R>>>21),R=N+(O^S^C)+x[11]+1839030562&4294967295,N=O+(R<<16&4294967295|R>>>16),R=C+(N^O^S)+x[14]+4259657740&4294967295,C=N+(R<<23&4294967295|R>>>9),R=S+(C^N^O)+x[1]+2763975236&4294967295,S=C+(R<<4&4294967295|R>>>28),R=O+(S^C^N)+x[4]+1272893353&4294967295,O=S+(R<<11&4294967295|R>>>21),R=N+(O^S^C)+x[7]+4139469664&4294967295,N=O+(R<<16&4294967295|R>>>16),R=C+(N^O^S)+x[10]+3200236656&4294967295,C=N+(R<<23&4294967295|R>>>9),R=S+(C^N^O)+x[13]+681279174&4294967295,S=C+(R<<4&4294967295|R>>>28),R=O+(S^C^N)+x[0]+3936430074&4294967295,O=S+(R<<11&4294967295|R>>>21),R=N+(O^S^C)+x[3]+3572445317&4294967295,N=O+(R<<16&4294967295|R>>>16),R=C+(N^O^S)+x[6]+76029189&4294967295,C=N+(R<<23&4294967295|R>>>9),R=S+(C^N^O)+x[9]+3654602809&4294967295,S=C+(R<<4&4294967295|R>>>28),R=O+(S^C^N)+x[12]+3873151461&4294967295,O=S+(R<<11&4294967295|R>>>21),R=N+(O^S^C)+x[15]+530742520&4294967295,N=O+(R<<16&4294967295|R>>>16),R=C+(N^O^S)+x[2]+3299628645&4294967295,C=N+(R<<23&4294967295|R>>>9),R=S+(N^(C|~O))+x[0]+4096336452&4294967295,S=C+(R<<6&4294967295|R>>>26),R=O+(C^(S|~N))+x[7]+1126891415&4294967295,O=S+(R<<10&4294967295|R>>>22),R=N+(S^(O|~C))+x[14]+2878612391&4294967295,N=O+(R<<15&4294967295|R>>>17),R=C+(O^(N|~S))+x[5]+4237533241&4294967295,C=N+(R<<21&4294967295|R>>>11),R=S+(N^(C|~O))+x[12]+1700485571&4294967295,S=C+(R<<6&4294967295|R>>>26),R=O+(C^(S|~N))+x[3]+2399980690&4294967295,O=S+(R<<10&4294967295|R>>>22),R=N+(S^(O|~C))+x[10]+4293915773&4294967295,N=O+(R<<15&4294967295|R>>>17),R=C+(O^(N|~S))+x[1]+2240044497&4294967295,C=N+(R<<21&4294967295|R>>>11),R=S+(N^(C|~O))+x[8]+1873313359&4294967295,S=C+(R<<6&4294967295|R>>>26),R=O+(C^(S|~N))+x[15]+4264355552&4294967295,O=S+(R<<10&4294967295|R>>>22),R=N+(S^(O|~C))+x[6]+2734768916&4294967295,N=O+(R<<15&4294967295|R>>>17),R=C+(O^(N|~S))+x[13]+1309151649&4294967295,C=N+(R<<21&4294967295|R>>>11),R=S+(N^(C|~O))+x[4]+4149444226&4294967295,S=C+(R<<6&4294967295|R>>>26),R=O+(C^(S|~N))+x[11]+3174756917&4294967295,O=S+(R<<10&4294967295|R>>>22),R=N+(S^(O|~C))+x[2]+718787259&4294967295,N=O+(R<<15&4294967295|R>>>17),R=C+(O^(N|~S))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+N&4294967295,k.g[3]=k.g[3]+O&4294967295}s.prototype.v=function(k,S){S===void 0&&(S=k.length);const C=S-this.blockSize,x=this.C;let N=this.h,O=0;for(;O<S;){if(N==0)for(;O<=C;)o(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<S;)if(x[N++]=k.charCodeAt(O++),N==this.blockSize){o(this,x),N=0;break}}else for(;O<S;)if(x[N++]=k[O++],N==this.blockSize){o(this,x),N=0;break}}this.h=N,this.o+=S},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;S=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=S&255,S/=256;for(this.v(k),k=Array(16),S=0,C=0;C<4;++C)for(let x=0;x<32;x+=8)k[S++]=this.g[C]>>>x&255;return k};function l(k,S){var C=d;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=S(k)}function h(k,S){this.h=S;const C=[];let x=!0;for(let N=k.length-1;N>=0;N--){const O=k[N]|0;x&&O==S||(C[N]=O,x=!1)}this.g=C}var d={};function g(k){return-128<=k&&k<128?l(k,function(S){return new h([S|0],S<0?-1:0)}):new h([k|0],k<0?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return T;if(k<0)return j(y(-k));const S=[];let C=1;for(let x=0;k>=C;x++)S[x]=k/C|0,C*=4294967296;return new h(S,0)}function E(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return j(E(k.substring(1),S));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(S,8));let x=T;for(let O=0;O<k.length;O+=8){var N=Math.min(8,k.length-O);const R=parseInt(k.substring(O,O+N),S);N<8?(N=y(Math.pow(S,N)),x=x.j(N).add(y(R))):(x=x.j(C),x=x.add(y(R)))}return x}var T=g(0),I=g(1),L=g(16777216);r=h.prototype,r.m=function(){if($(this))return-j(this).m();let k=0,S=1;for(let C=0;C<this.g.length;C++){const x=this.i(C);k+=(x>=0?x:4294967296+x)*S,S*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(z(this))return"0";if($(this))return"-"+j(this).toString(k);const S=y(Math.pow(k,6));var C=this;let x="";for(;;){const N=fe(C,S).g;C=Y(C,N.j(S));let O=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=N,z(C))return O+x;for(;O.length<6;)O="0"+O;x=O+x}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function z(k){if(k.h!=0)return!1;for(let S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function $(k){return k.h==-1}r.l=function(k){return k=Y(this,k),$(k)?-1:z(k)?0:1};function j(k){const S=k.g.length,C=[];for(let x=0;x<S;x++)C[x]=~k.g[x];return new h(C,~k.h).add(I)}r.abs=function(){return $(this)?j(this):this},r.add=function(k){const S=Math.max(this.g.length,k.g.length),C=[];let x=0;for(let N=0;N<=S;N++){let O=x+(this.i(N)&65535)+(k.i(N)&65535),R=(O>>>16)+(this.i(N)>>>16)+(k.i(N)>>>16);x=R>>>16,O&=65535,R&=65535,C[N]=R<<16|O}return new h(C,C[C.length-1]&-2147483648?-1:0)};function Y(k,S){return k.add(j(S))}r.j=function(k){if(z(this)||z(k))return T;if($(this))return $(k)?j(this).j(j(k)):j(j(this).j(k));if($(k))return j(this.j(j(k)));if(this.l(L)<0&&k.l(L)<0)return y(this.m()*k.m());const S=this.g.length+k.g.length,C=[];for(var x=0;x<2*S;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(let N=0;N<k.g.length;N++){const O=this.i(x)>>>16,R=this.i(x)&65535,oe=k.i(N)>>>16,Ve=k.i(N)&65535;C[2*x+2*N]+=R*Ve,ie(C,2*x+2*N),C[2*x+2*N+1]+=O*Ve,ie(C,2*x+2*N+1),C[2*x+2*N+1]+=R*oe,ie(C,2*x+2*N+1),C[2*x+2*N+2]+=O*oe,ie(C,2*x+2*N+2)}for(k=0;k<S;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=S;k<2*S;k++)C[k]=0;return new h(C,0)};function ie(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function he(k,S){this.g=k,this.h=S}function fe(k,S){if(z(S))throw Error("division by zero");if(z(k))return new he(T,T);if($(k))return S=fe(j(k),S),new he(j(S.g),j(S.h));if($(S))return S=fe(k,j(S)),new he(j(S.g),S.h);if(k.g.length>30){if($(k)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var C=I,x=S;x.l(k)<=0;)C=Re(C),x=Re(x);var N=Ee(C,1),O=Ee(x,1);for(x=Ee(x,2),C=Ee(C,2);!z(x);){var R=O.add(x);R.l(k)<=0&&(N=N.add(C),O=R),x=Ee(x,1),C=Ee(C,1)}return S=Y(k,N.j(S)),new he(N,S)}for(N=T;k.l(S)>=0;){for(C=Math.max(1,Math.floor(k.m()/S.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),O=y(C),R=O.j(S);$(R)||R.l(k)>0;)C-=x,O=y(C),R=O.j(S);z(O)&&(O=I),N=N.add(O),k=Y(k,R)}return new he(N,k)}r.B=function(k){return fe(this,k).h},r.and=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<S;x++)C[x]=this.i(x)&k.i(x);return new h(C,this.h&k.h)},r.or=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<S;x++)C[x]=this.i(x)|k.i(x);return new h(C,this.h|k.h)},r.xor=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<S;x++)C[x]=this.i(x)^k.i(x);return new h(C,this.h^k.h)};function Re(k){const S=k.g.length+1,C=[];for(let x=0;x<S;x++)C[x]=k.i(x)<<1|k.i(x-1)>>>31;return new h(C,k.h)}function Ee(k,S){const C=S>>5;S%=32;const x=k.g.length-C,N=[];for(let O=0;O<x;O++)N[O]=S>0?k.i(O+C)>>>S|k.i(O+C+1)<<32-S:k.i(O+C);return new h(N,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,v_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,vi=h}).apply(typeof Sg<"u"?Sg:typeof self<"u"?self:typeof window<"u"?window:{});var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var E_,ka,w_,ku,bf,T_,I_,S_;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eu=="object"&&Eu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(u,m){if(m)e:{var _=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var b=u[w];if(!(b in _))break e;_=_[b]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var _=[],w;for(w in m)Object.prototype.hasOwnProperty.call(m,w)&&_.push([w,m[w]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function d(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,_){return u.call.apply(u.bind,arguments)}function y(u,m,_){return y=g,y.apply(null,arguments)}function E(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function T(u,m){function _(){}_.prototype=m.prototype,u.Z=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(w,b,B){for(var Z=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)Z[Te-2]=arguments[Te];return m.prototype[b].apply(w,Z)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function L(u){const m=u.length;if(m>0){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function z(u,m){for(let w=1;w<arguments.length;w++){const b=arguments[w];var _=typeof b;if(_=_!="object"?_:b?Array.isArray(b)?"array":_:"null",_=="array"||_=="object"&&typeof b.length=="number"){_=u.length||0;const B=b.length||0;u.length=_+B;for(let Z=0;Z<B;Z++)u[_+Z]=b[Z]}else u.push(b)}}class ${constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function j(u){h.setTimeout(()=>{throw u},0)}function Y(){var u=k;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class ie{constructor(){this.h=this.g=null}add(m,_){const w=he.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var he=new $(()=>new fe,u=>u.reset());class fe{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Ee=!1,k=new ie,S=()=>{const u=Promise.resolve(void 0);Re=()=>{u.then(C)}};function C(){for(var u;u=Y();){try{u.h.call(u.g)}catch(_){j(_)}var m=he;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}Ee=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,m),h.removeEventListener("test",_,m)}catch{}return u})();function R(u){return/^[\s\xa0]*$/.test(u)}function oe(u,m){N.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}T(oe,N),oe.prototype.init=function(u,m){const _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(_=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&oe.Z.h.call(this)},oe.prototype.h=function(){oe.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ve="closure_listenable_"+(Math.random()*1e6|0),$e=0;function Je(u,m,_,w,b){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=b,this.key=++$e,this.da=this.fa=!1}function ee(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function de(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function re(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function V(u){const m={};for(const _ in u)m[_]=u[_];return m}const q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(u,m){let _,w;for(let b=1;b<arguments.length;b++){w=arguments[b];for(_ in w)u[_]=w[_];for(let B=0;B<q.length;B++)_=q[B],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function Ae(u){this.src=u,this.g={},this.h=0}Ae.prototype.add=function(u,m,_,w,b){const B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);const Z=ke(u,m,w,b);return Z>-1?(m=u[Z],_||(m.fa=!1)):(m=new Je(m,this.src,B,!!w,b),m.fa=_,u.push(m)),m};function Pe(u,m){const _=m.type;if(_ in u.g){var w=u.g[_],b=Array.prototype.indexOf.call(w,m,void 0),B;(B=b>=0)&&Array.prototype.splice.call(w,b,1),B&&(ee(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function ke(u,m,_,w){for(let b=0;b<u.length;++b){const B=u[b];if(!B.da&&B.listener==m&&B.capture==!!_&&B.ha==w)return b}return-1}var Be="closure_lm_"+(Math.random()*1e6|0),Me={};function He(u,m,_,w,b){if(Array.isArray(m)){for(let B=0;B<m.length;B++)He(u,m[B],_,w,b);return null}return _=Vo(_),u&&u[Ve]?u.J(m,_,d(w)?!!w.capture:!1,b):jt(u,m,_,!1,w,b)}function jt(u,m,_,w,b,B){if(!m)throw Error("Invalid event type");const Z=d(b)?!!b.capture:!!b;let Te=ws(u);if(Te||(u[Be]=Te=new Ae(u)),_=Te.add(m,_,w,Z,B),_.proxy)return _;if(w=vs(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)O||(b=Z),b===void 0&&(b=!1),u.addEventListener(m.toString(),w,b);else if(u.attachEvent)u.attachEvent(Es(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function vs(){function u(_){return m.call(u.src,u.listener,_)}const m=il;return u}function Oo(u,m,_,w,b){if(Array.isArray(m))for(var B=0;B<m.length;B++)Oo(u,m[B],_,w,b);else w=d(w)?!!w.capture:!!w,_=Vo(_),u&&u[Ve]?(u=u.i,B=String(m).toString(),B in u.g&&(m=u.g[B],_=ke(m,_,w,b),_>-1&&(ee(m[_]),Array.prototype.splice.call(m,_,1),m.length==0&&(delete u.g[B],u.h--)))):u&&(u=ws(u))&&(m=u.g[m.toString()],u=-1,m&&(u=ke(m,_,w,b)),(_=u>-1?m[u]:null)&&Lr(_))}function Lr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ve])Pe(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(Es(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=ws(m))?(Pe(_,u),_.h==0&&(_.src=null,m[Be]=null)):ee(u)}}}function Es(u){return u in Me?Me[u]:Me[u]="on"+u}function il(u,m){if(u.da)u=!0;else{m=new oe(m,this);const _=u.listener,w=u.ha||u.src;u.fa&&Lr(u),u=_.call(w,m)}return u}function ws(u){return u=u[Be],u instanceof Ae?u:null}var Vi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vo(u){return typeof u=="function"?u:(u[Vi]||(u[Vi]=function(m){return u.handleEvent(m)}),u[Vi])}function ut(){x.call(this),this.i=new Ae(this),this.M=this,this.G=null}T(ut,x),ut.prototype[Ve]=!0,ut.prototype.removeEventListener=function(u,m,_,w){Oo(this,u,m,_,w)};function st(u,m){var _,w=u.G;if(w)for(_=[];w;w=w.G)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new N(m,u);else if(m instanceof N)m.target=m.target||u;else{var b=m;m=new N(w,u),Se(m,b)}b=!0;let B,Z;if(_)for(Z=_.length-1;Z>=0;Z--)B=m.g=_[Z],b=En(B,w,!0,m)&&b;if(B=m.g=u,b=En(B,w,!0,m)&&b,b=En(B,w,!1,m)&&b,_)for(Z=0;Z<_.length;Z++)B=m.g=_[Z],b=En(B,w,!1,m)&&b}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const _=u.g[m];for(let w=0;w<_.length;w++)ee(_[w]);delete u.g[m],u.h--}}this.G=null},ut.prototype.J=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},ut.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function En(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let b=!0;for(let B=0;B<m.length;++B){const Z=m[B];if(Z&&!Z.da&&Z.capture==_){const Te=Z.listener,ot=Z.ha||Z.src;Z.fa&&Pe(u.i,Z),b=Te.call(ot,w)!==!1&&b}}return b&&!w.defaultPrevented}function Lo(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:h.setTimeout(u,m||0)}function Mo(u){u.g=Lo(()=>{u.g=null,u.i&&(u.i=!1,Mo(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class sl extends x{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Mo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mr(u){x.call(this),this.h=u,this.g={}}T(Mr,x);var bo=[];function Ts(u){de(u.g,function(m,_){this.g.hasOwnProperty(_)&&Lr(m)},u),u.g={}}Mr.prototype.N=function(){Mr.Z.N.call(this),Ts(this)},Mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var br=h.JSON.stringify,ol=h.JSON.parse,Li=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Ur(){}function al(){}var Fr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Is(){N.call(this,"d")}T(Is,N);function Uo(){N.call(this,"c")}T(Uo,N);var wn={},Ss=null;function Br(){return Ss=Ss||new ut}wn.Ia="serverreachability";function As(u){N.call(this,wn.Ia,u)}T(As,N);function hr(u){const m=Br();st(m,new As(m))}wn.STAT_EVENT="statevent";function fr(u,m){N.call(this,wn.STAT_EVENT,u),this.stat=m}T(fr,N);function rt(u){const m=Br();st(m,new fr(m,u))}wn.Ja="timingevent";function Fo(u,m){N.call(this,wn.Ja,u),this.size=m}T(Fo,N);function zr(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function jr(){this.g=!0}jr.prototype.ua=function(){this.g=!1};function ll(u,m,_,w,b,B){u.info(function(){if(u.g)if(B){var Z="",Te=B.split("&");for(let je=0;je<Te.length;je++){var ot=Te[je].split("=");if(ot.length>1){const ct=ot[0];ot=ot[1];const sn=ct.split("_");Z=sn.length>=2&&sn[1]=="type"?Z+(ct+"="+ot+"&"):Z+(ct+"=redacted&")}}}else Z=null;else Z=B;return"XMLHTTP REQ ("+w+") [attempt "+b+"]: "+m+`
`+_+`
`+Z})}function ul(u,m,_,w,b,B,Z){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+b+"]: "+m+`
`+_+`
`+B+" "+Z})}function Vn(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Mi(u,_)+(w?" "+w:"")})}function cl(u,m){u.info(function(){return"TIMEOUT: "+m})}jr.prototype.info=function(){};function Mi(u,m){if(!u.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(u=0;u<B.length;u++)if(Array.isArray(B[u])){var _=B[u];if(!(_.length<2)){var w=_[1];if(Array.isArray(w)&&!(w.length<1)){var b=w[0];if(b!="noop"&&b!="stop"&&b!="close")for(let Z=1;Z<w.length;Z++)w[Z]=""}}}}return br(B)}catch{return m}}var $r={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Hr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hl;function dr(){}T(dr,Ur),dr.prototype.g=function(){return new XMLHttpRequest},hl=new dr;function Ln(u){return encodeURIComponent(String(u))}function Rs(u){var m=1;u=u.split(":");const _=[];for(;m>0&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function cn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.S=w||1,this.V=new Mr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new fl}function fl(){this.i=null,this.g="",this.h=!1}var dl={},Bo={};function Tn(u,m,_){u.M=1,u.A=mr(hn(m)),u.u=_,u.R=!0,zo(u,null)}function zo(u,m){u.F=Date.now(),bi(u),u.B=hn(u.A);var _=u.B,w=u.S;Array.isArray(w)||(w=[String(w)]),Yo(_.i,"t",w),u.C=0,_=u.j.L,u.h=new fl,u.g=Il(u.j,_?m:null,!u.u),u.P>0&&(u.O=new sl(y(u.Y,u,u.g),u.P)),m=u.V,_=u.g,w=u.ba;var b="readystatechange";Array.isArray(b)||(b&&(bo[0]=b.toString()),b=bo);for(let B=0;B<b.length;B++){const Z=He(_,b[B],w||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=u.J?V(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),hr(),ll(u.i,u.v,u.B,u.l,u.S,u.u)}cn.prototype.ba=function(u){u=u.target;const m=this.O;m&&jn(u)==3?m.j():this.Y(u)},cn.prototype.Y=function(u){try{if(u==this.g)e:{const Te=jn(this.g),ot=this.g.ya(),je=this.g.ca();if(!(Te<3)&&(Te!=3||this.g&&(this.h.h||this.g.la()||wl(this.g)))){this.K||Te!=4||ot==7||(ot==8||je<=0?hr(3):hr(2)),Cs(this);var m=this.g.ca();this.X=m;var _=pl(this);if(this.o=m==200,ul(this.i,this.v,this.B,this.l,this.S,Te,m),this.o){if(this.U&&!this.L){t:{if(this.g){var w,b=this.g;if((w=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(w)){var B=w;break t}}B=null}if(u=B)Vn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ke(this,u);else{this.o=!1,this.m=3,rt(12),pr(this),Ui(this);break e}}if(this.R){u=!0;let ct;for(;!this.K&&this.C<_.length;)if(ct=gl(this,_),ct==Bo){Te==4&&(this.m=4,rt(14),u=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==dl){this.m=4,rt(15),Vn(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else Vn(this.i,this.l,ct,null),Ke(this,ct);if(ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||_.length!=0||this.h.h||(this.m=1,rt(16),u=!1),this.o=this.o&&u,!u)Vn(this.i,this.l,_,"[Invalid Chunked Response]"),pr(this),Ui(this);else if(_.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Ki(Z),Z.P=!0,rt(11))}}else Vn(this.i,this.l,_,null),Ke(this,_);Te==4&&pr(this),this.o&&!this.K&&(Te==4?bs(this.j,this):(this.o=!1,bi(this)))}else Zo(this.g),m==400&&_.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),pr(this),Ui(this)}}}catch{}finally{}};function pl(u){if(!ml(u))return u.g.la();const m=wl(u.g);if(m==="")return"";let _="";const w=m.length,b=jn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return pr(u),Ui(u),"";u.h.i=new h.TextDecoder}for(let B=0;B<w;B++)u.h.h=!0,_+=u.h.i.decode(m[B],{stream:!(b&&B==w-1)});return m.length=0,u.h.g+=_,u.C=0,u.h.g}function ml(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function gl(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Bo:(_=Number(m.substring(_,w)),isNaN(_)?dl:(w+=1,w+_>m.length?Bo:(m=m.slice(w,w+_),u.C=w+_,m)))}cn.prototype.cancel=function(){this.K=!0,pr(this)};function bi(u){u.T=Date.now()+u.H,jo(u,u.H)}function jo(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=zr(y(u.aa,u),m)}function Cs(u){u.D&&(h.clearTimeout(u.D),u.D=null)}cn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(cl(this.i,this.B),this.M!=2&&(hr(),rt(17)),pr(this),this.m=2,Ui(this)):jo(this,this.T-u)};function Ui(u){u.j.I==0||u.K||bs(u.j,u)}function pr(u){Cs(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,Ts(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ke(u,m){try{var _=u.j;if(_.I!=0&&(_.g==u||Ho(_.h,u))){if(!u.L&&Ho(_.h,u)&&_.I==3){try{var w=_.Ba.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var b=w;if(b[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)Ms(_),nn(_);else break e;qn(_),rt(18)}}else _.xa=b[1],0<_.xa-_.K&&b[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=zr(y(_.Va,_),6e3));Fi(_.h)<=1&&_.ta&&(_.ta=void 0)}else rn(_,11)}else if((u.L||_.g==u)&&Ms(_),!R(m))for(b=_.Ba.g.parse(m),m=0;m<b.length;m++){let je=b[m];const ct=je[0];if(!(ct<=_.K))if(_.K=ct,je=je[1],_.I==2)if(je[0]=="c"){_.M=je[1],_.ba=je[2];const sn=je[3];sn!=null&&(_.ka=sn,_.j.info("VER="+_.ka));const Er=je[4];Er!=null&&(_.za=Er,_.j.info("SVER="+_.za));const Wn=je[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(w=1.5*Wn,_.O=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const Kn=u.g;if(Kn){const Bs=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bs){var B=w.h;B.g||Bs.indexOf("spdy")==-1&&Bs.indexOf("quic")==-1&&Bs.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(ks(B,B.h),B.h=null))}if(w.G){const na=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;na&&(w.wa=na,Fe(w.J,w.G,na))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),w=_;var Z=u;if(w.na=ta(w,w.L?w.ba:null,w.W),Z.L){Bi(w.h,Z);var Te=Z,ot=w.O;ot&&(Te.H=ot),Te.D&&(Cs(Te),bi(Te)),w.g=Z}else Ot(w);_.i.length>0&&vr(_)}else je[0]!="stop"&&je[0]!="close"||rn(_,7);else _.I==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?rn(_,7):Vs(_):je[0]!="noop"&&_.l&&_.l.qa(je),_.A=0)}}hr(4)}catch{}}var Dc=class{constructor(u,m){this.g=u,this.map=m}};function Ps(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $o(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Fi(u){return u.h?1:u.g?u.g.size:0}function Ho(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ks(u,m){u.g?u.g.add(m):u.h=m}function Bi(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Ps.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Zt(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.G);return m}return L(u.i)}var yl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function en(u,m){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const w=u[_].indexOf("=");let b,B=null;w>=0?(b=u[_].substring(0,w),B=u[_].substring(w+1)):b=u[_],m(b,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Mn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Mn?(this.l=u.l,zi(this,u.j),this.o=u.o,this.g=u.g,bn(this,u.u),this.h=u.h,qr(this,Jo(u.i)),this.m=u.m):u&&(m=String(u).match(yl))?(this.l=!1,zi(this,m[1]||"",!0),this.o=ji(m[2]||""),this.g=ji(m[3]||"",!0),bn(this,m[4]),this.h=ji(m[5]||"",!0),qr(this,m[6]||"",!0),this.m=ji(m[7]||"")):(this.l=!1,this.i=new Oe(null,this.l))}Mn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push($i(m,Wo,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push($i(m,Wo,!0),"@"),u.push(Ln(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push($i(_,_.charAt(0)=="/"?Hi:Ko,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",$i(_,Go)),u.join("")},Mn.prototype.resolve=function(u){const m=hn(this);let _=!!u.j;_?zi(m,u.j):_=!!u.o,_?m.o=u.o:_=!!u.g,_?m.g=u.g:_=u.u!=null;var w=u.h;if(_)bn(m,u.u);else if(_=!!u.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var b=m.h.lastIndexOf("/");b!=-1&&(w=m.h.slice(0,b+1)+w)}if(b=w,b==".."||b==".")w="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){w=b.lastIndexOf("/",0)==0,b=b.split("/");const B=[];for(let Z=0;Z<b.length;){const Te=b[Z++];Te=="."?w&&Z==b.length&&B.push(""):Te==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),w&&Z==b.length&&B.push("")):(B.push(Te),w=!0)}w=B.join("/")}else w=b}return _?m.h=w:_=u.i.toString()!=="",_?qr(m,Jo(u.i)):_=!!u.m,_&&(m.m=u.m),m};function hn(u){return new Mn(u)}function zi(u,m,_){u.j=_?ji(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function bn(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function qr(u,m,_){m instanceof Oe?(u.i=m,Ds(u.i,u.l)):(_||(m=$i(m,xc)),u.i=new Oe(m,u.l))}function Fe(u,m,_){u.i.set(m,_)}function mr(u){return Fe(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function ji(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function $i(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,qo),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function qo(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Wo=/[#\/\?@]/g,Ko=/[#\?:]/g,Hi=/[#\?]/g,xc=/[#\?@]/g,Go=/#/g;function Oe(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Un(u){u.g||(u.g=new Map,u.h=0,u.i&&en(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Oe.prototype,r.add=function(u,m){Un(this),this.i=null,u=Fn(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Qo(u,m){Un(u),m=Fn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ns(u,m){return Un(u),m=Fn(u,m),u.g.has(m)}r.forEach=function(u,m){Un(this),this.g.forEach(function(_,w){_.forEach(function(b){u.call(m,b,w,this)},this)},this)};function Xo(u,m){Un(u);let _=[];if(typeof m=="string")Ns(u,m)&&(_=_.concat(u.g.get(Fn(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)_=_.concat(u[m]);return _}r.set=function(u,m){return Un(this),this.i=null,u=Fn(this,u),Ns(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=Xo(this,u),u.length>0?String(u[0]):m):m};function Yo(u,m,_){Qo(u,m),_.length>0&&(u.i=null,u.g.set(Fn(u,m),L(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let w=0;w<m.length;w++){var _=m[w];const b=Ln(_);_=Xo(this,_);for(let B=0;B<_.length;B++){let Z=b;_[B]!==""&&(Z+="="+Ln(_[B])),u.push(Z)}}return this.i=u.join("&")};function Jo(u){const m=new Oe;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function Fn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Ds(u,m){m&&!u.j&&(Un(u),u.i=null,u.g.forEach(function(_,w){const b=w.toLowerCase();w!=b&&(Qo(this,w),Yo(this,b,_))},u)),u.j=m}function Bn(u,m){const _=new jr;if(h.Image){const w=new Image;w.onload=E(At,_,"TestLoadImage: loaded",!0,m,w),w.onerror=E(At,_,"TestLoadImage: error",!1,m,w),w.onabort=E(At,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=E(At,_,"TestLoadImage: timeout",!1,m,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function zn(u,m){const _=new jr,w=new AbortController,b=setTimeout(()=>{w.abort(),At(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then(B=>{clearTimeout(b),B.ok?At(_,"TestPingServer: ok",!0,m):At(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(b),At(_,"TestPingServer: error",!1,m)})}function At(u,m,_,w,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),w(_)}catch{}}function qi(){this.g=new Li}function gr(u){this.i=u.Sb||null,this.h=u.ab||!1}T(gr,Ur),gr.prototype.g=function(){return new tn(this.i,this.h)};function tn(u,m){ut.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(tn,ut),r=tn.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,In(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||h).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Wr(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_l(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function _l(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Wr(this):In(this),this.readyState==3&&_l(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,Wr(this))},r.Na=function(u){this.g&&(this.response=u,Wr(this))},r.ga=function(){this.g&&Wr(this)};function Wr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,In(u)}r.setRequestHeader=function(u,m){this.A.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function In(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function vl(u){let m="";return de(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function xs(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=vl(_),typeof u=="string"?_!=null&&Ln(_):Fe(u,m,_))}function qe(u){ut.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(qe,ut);var El=/^https?$/i,Oc=["POST","PUT"];r=qe.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hl.g(),this.g.onreadystatechange=I(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){Kr(this,B);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var b in w)_.set(b,w[b]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const B of w.keys())_.set(B,w.get(B));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),b=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(Oc,m,void 0)>=0)||w||b||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of _)this.g.setRequestHeader(B,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(B){Kr(this,B)}};function Kr(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,Gr(u),_r(u)}function Gr(u){u.A||(u.A=!0,st(u,"complete"),st(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,st(this,"complete"),st(this,"abort"),_r(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_r(this,!0)),qe.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?yr(this):this.Xa())},r.Xa=function(){yr(this)};function yr(u){if(u.h&&typeof l<"u"){if(u.v&&jn(u)==4)setTimeout(u.Ca.bind(u),0);else if(st(u,"readystatechange"),jn(u)==4){u.h=!1;try{const B=u.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=B===0){let Z=String(u.D).match(yl)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),w=!El.test(Z?Z.toLowerCase():"")}_=w}if(_)st(u,"complete"),st(u,"success");else{u.o=6;try{var b=jn(u)>2?u.g.statusText:""}catch{b=""}u.l=b+" ["+u.ca()+"]",Gr(u)}}finally{_r(u)}}}}function _r(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,m||st(u,"ready");try{_.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function jn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return jn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ol(m)}};function wl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Zo(u){const m={};u=(u.g&&jn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(R(u[w]))continue;var _=Rs(u[w]);const b=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=m[b]||[];m[b]=B,B.push(_)}re(m,function(w){return w.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Os(u){this.za=0,this.i=[],this.j=new jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$n("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$n("baseRetryDelayMs",5e3,u),this.Za=$n("retryDelaySeedMs",1e4,u),this.Ta=$n("forwardChannelMaxRetries",2,u),this.va=$n("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Ps(u&&u.concurrentRequestLimit),this.Ba=new qi,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Os.prototype,r.ka=8,r.I=1,r.connect=function(u,m,_,w){rt(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.J=ta(this,null,this.W),vr(this)};function Vs(u){if(Ls(u),u.I==3){var m=u.V++,_=hn(u.J);if(Fe(_,"SID",u.M),Fe(_,"RID",m),Fe(_,"TYPE","terminate"),Hn(u,_),m=new cn(u,u.j,m),m.M=2,m.A=mr(hn(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(m.A.toString(),"")}catch{}!_&&h.Image&&(new Image().src=m.A,_=!0),_||(m.g=Il(m.j,null),m.g.ea(m.A)),m.F=Date.now(),bi(m)}Gi(u)}function nn(u){u.g&&(Ki(u),u.g.cancel(),u.g=null)}function Ls(u){nn(u),u.v&&(h.clearTimeout(u.v),u.v=null),Ms(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function vr(u){if(!$o(u.h)&&!u.m){u.m=!0;var m=u.Ea;Re||S(),Ee||(Re(),Ee=!0),k.add(m,u),u.D=0}}function Tl(u,m){return Fi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=zr(y(u.Ea,u,m),Us(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const b=new cn(this,this.j,u);let B=this.o;if(this.U&&(B?(B=V(B),Se(B,this.U)):B=this.U),this.u!==null||this.R||(b.J=B,B=null),this.S)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,m>4096){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ea(this,b,m),_=hn(this.J),Fe(_,"RID",u),Fe(_,"CVER",22),this.G&&Fe(_,"X-HTTP-Session-Id",this.G),Hn(this,_),B&&(this.R?m="headers="+Ln(vl(B))+"&"+m:this.u&&xs(_,this.u,B)),ks(this.h,b),this.Ra&&Fe(_,"TYPE","init"),this.S?(Fe(_,"$req",m),Fe(_,"SID","null"),b.U=!0,Tn(b,_,null)):Tn(b,_,m),this.I=2}}else this.I==3&&(u?Wi(this,u):this.i.length==0||$o(this.h)||Wi(this))};function Wi(u,m){var _;m?_=m.l:_=u.V++;const w=hn(u.J);Fe(w,"SID",u.M),Fe(w,"RID",_),Fe(w,"AID",u.K),Hn(u,w),u.u&&u.o&&xs(w,u.u,u.o),_=new cn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),m&&(u.i=m.G.concat(u.i)),m=ea(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),ks(u.h,_),Tn(_,w,m)}function Hn(u,m){u.H&&de(u.H,function(_,w){Fe(m,w,_)}),u.l&&de({},function(_,w){Fe(m,w,_)})}function ea(u,m,_){_=Math.min(u.i.length,_);const w=u.l?y(u.l.Ka,u.l,u):null;e:{var b=u.i;let Te=-1;for(;;){const ot=["count="+_];Te==-1?_>0?(Te=b[0].g,ot.push("ofs="+Te)):Te=0:ot.push("ofs="+Te);let je=!0;for(let ct=0;ct<_;ct++){var B=b[ct].g;const sn=b[ct].map;if(B-=Te,B<0)Te=Math.max(0,b[ct].g-100),je=!1;else try{B="req"+B+"_"||"";try{var Z=sn instanceof Map?sn:Object.entries(sn);for(const[Er,Wn]of Z){let Kn=Wn;d(Wn)&&(Kn=br(Wn)),ot.push(B+Er+"="+encodeURIComponent(Kn))}}catch(Er){throw ot.push(B+"type="+encodeURIComponent("_badmap")),Er}}catch{w&&w(sn)}}if(je){Z=ot.join("&");break e}}Z=void 0}return u=u.i.splice(0,_),m.G=u,Z}function Ot(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;Re||S(),Ee||(Re(),Ee=!0),k.add(m,u),u.A=0}}function qn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=zr(y(u.Da,u),Us(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,Qr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=zr(y(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),nn(this),Qr(this))};function Ki(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function Qr(u){u.g=new cn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=hn(u.na);Fe(m,"RID","rpc"),Fe(m,"SID",u.M),Fe(m,"AID",u.K),Fe(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Fe(m,"TO",u.ia),Fe(m,"TYPE","xmlhttp"),Hn(u,m),u.u&&u.o&&xs(m,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=mr(hn(m)),_.u=null,_.R=!0,zo(_,u)}r.Va=function(){this.C!=null&&(this.C=null,nn(this),qn(this),rt(19))};function Ms(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function bs(u,m){var _=null;if(u.g==m){Ms(u),Ki(u),u.g=null;var w=2}else if(Ho(u.h,m))_=m.G,Bi(u.h,m),w=1;else return;if(u.I!=0){if(m.o)if(w==1){_=m.u?m.u.length:0,m=Date.now()-m.F;var b=u.D;w=Br(),st(w,new Fo(w,_)),vr(u)}else Ot(u);else if(b=m.m,b==3||b==0&&m.X>0||!(w==1&&Tl(u,m)||w==2&&qn(u)))switch(_&&_.length>0&&(m=u.h,m.i=m.i.concat(_)),b){case 1:rn(u,5);break;case 4:rn(u,10);break;case 3:rn(u,6);break;default:rn(u,2)}}}function Us(u,m){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*m}function rn(u,m){if(u.j.info("Error code "+m),m==2){var _=y(u.bb,u),w=u.Ua;const b=!w;w=new Mn(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||zi(w,"https"),mr(w),b?Bn(w.toString(),_):zn(w.toString(),_)}else rt(2);u.I=0,u.l&&u.l.pa(m),Gi(u),Ls(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Gi(u){if(u.I=0,u.ja=[],u.l){const m=Zt(u.h);(m.length!=0||u.i.length!=0)&&(z(u.ja,m),z(u.ja,u.i),u.h.i.length=0,L(u.i),u.i.length=0),u.l.oa()}}function ta(u,m,_){var w=_ instanceof Mn?hn(_):new Mn(_);if(w.g!="")m&&(w.g=m+"."+w.g),bn(w,w.u);else{var b=h.location;w=b.protocol,m=m?m+"."+b.hostname:b.hostname,b=+b.port;const B=new Mn(null);w&&zi(B,w),m&&(B.g=m),b&&bn(B,b),_&&(B.h=_),w=B}return _=u.G,m=u.wa,_&&m&&Fe(w,_,m),Fe(w,"VER",u.ka),Hn(u,w),w}function Il(u,m,_){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new qe(new gr({ab:_})):new qe(u.ma),m.Fa(u.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sl(){}r=Sl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Fs(){}Fs.prototype.g=function(u,m){return new Rt(u,m)};function Rt(u,m){ut.call(this),this.g=new Os(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!R(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!R(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Xr(this)}T(Rt,ut),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Vs(this.g)},Rt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=br(u),u=_);m.i.push(new Dc(m.Ya++,u)),m.I==3&&vr(m)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Vs(this.g),delete this.g,Rt.Z.N.call(this)};function Al(u){Is.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}T(Al,Is);function Rl(){Uo.call(this),this.status=1}T(Rl,Uo);function Xr(u){this.g=u}T(Xr,Sl),Xr.prototype.ra=function(){st(this.g,"a")},Xr.prototype.qa=function(u){st(this.g,new Al(u))},Xr.prototype.pa=function(u){st(this.g,new Rl)},Xr.prototype.oa=function(){st(this.g,"b")},Fs.prototype.createWebChannel=Fs.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,S_=function(){return new Fs},I_=function(){return Br()},T_=wn,bf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},$r.NO_ERROR=0,$r.TIMEOUT=8,$r.HTTP_ERROR=6,ku=$r,Hr.COMPLETE="complete",w_=Hr,al.EventType=Fr,Fr.OPEN="a",Fr.CLOSE="b",Fr.ERROR="c",Fr.MESSAGE="d",ut.prototype.listen=ut.prototype.J,ka=al,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,E_=qe}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});const Ag="@firebase/firestore",Rg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new sd("@firebase/firestore");function lo(){return hs.logLevel}function ne(r,...e){if(hs.logLevel<=Ne.DEBUG){const t=e.map(ld);hs.debug(`Firestore (${Co}): ${r}`,...t)}}function xr(r,...e){if(hs.logLevel<=Ne.ERROR){const t=e.map(ld);hs.error(`Firestore (${Co}): ${r}`,...t)}}function Eo(r,...e){if(hs.logLevel<=Ne.WARN){const t=e.map(ld);hs.warn(`Firestore (${Co}): ${r}`,...t)}}function ld(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,A_(r,s,t)}function A_(r,e,t){let s=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xr(s),new Error(s)}function ze(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||A_(e,o,s)}function Ie(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends ur{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class bw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Uw{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ei,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},d=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>d(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?d(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ei)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new R_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class Fw{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Bw{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Fw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Cg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_n(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Cg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Cg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=jw(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function De(r,e){return r<e?-1:r>e?1:0}function Uf(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),l=e.charAt(s);if(o!==l)return hf(o)===hf(l)?De(o,l):hf(o)?1:-1}return De(r.length,e.length)}const $w=55296,Hw=57343;function hf(r){const e=r.charCodeAt(0);return e>=$w&&e<=Hw}function wo(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="__name__";class Jn{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=Jn.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return De(e.length,t.length)}static compareSegments(e,t){const s=Jn.isNumericId(e),o=Jn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Jn.extractNumericId(e).compare(Jn.extractNumericId(t)):Uf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vi.fromString(e.substring(4,e.length-2))}}class Xe extends Jn{construct(e,t,s){return new Xe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Xe(t)}static emptyPath(){return new Xe([])}}const qw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends Jn{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return qw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pg}static keyField(){return new Dt([Pg])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ce(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ce(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ce(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else d==="`"?(h=!h,o++):d!=="."||h?(s+=d,o++):(l(),o++)}if(l(),h)throw new ce(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Xe.fromString(e))}static fromName(e){return new pe(Xe.fromString(e).popFirst(5))}static empty(){return new pe(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Xe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(r,e,t){if(!t)throw new ce(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Ww(r,e,t,s){if(e===!0&&s===!0)throw new ce(W.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function kg(r){if(!pe.isDocumentKey(r))throw new ce(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ng(r){if(pe.isDocumentKey(r))throw new ce(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function P_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function cd(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function Si(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ce(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=cd(r);throw new ce(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(r,e){const t={typeString:r};return e&&(t.value=e),t}function Qa(r,e){if(!P_(r))throw new ce(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ce(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=-62135596800,xg=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*xg);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Dg)throw new ce(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xg}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qa(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:dt("string",Ye._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Ye(0,0))}static max(){return new we(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=-1;function Kw(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new Ai(o,pe.empty(),e)}function Gw(r){return new Ai(r.readTime,r.key,Fa)}class Ai{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ai(we.min(),pe.empty(),Fa)}static max(){return new Ai(we.max(),pe.empty(),Fa)}}function Qw(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(r.documentKey,e.documentKey),t!==0?t:De(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==Xw)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,l=0,h=!1;e.forEach((d=>{++o,d.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const l=e.length,h=new Array(l);let d=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((E=>{h[y]=E,++d,d===l&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new H(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function Jw(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ko(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}cc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=-1;function hc(r){return r==null}function zu(r){return r===0&&1/r==-1/0}function Zw(r){return typeof r=="number"&&Number.isInteger(r)&&!zu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="";function eT(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Og(e)),e=tT(r.get(t),e);return Og(e)}function tT(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case k_:t+="";break;default:t+=l}}return t}function Og(r){return r+k_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Di(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function N_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wu(this.root,e,this.comparator,!0)}}class wu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Nt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lg(this.data.getIterator())}getIteratorFrom(e){return new Lg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Lg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new un([])}unionWith(e){let t=new vt(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new D_("Invalid base64 string: "+l):l}})(e);return new xt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const nT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(r){if(ze(!!r,39018),typeof r=="string"){let e=0;const t=nT.exec(r);if(ze(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ci(r){return typeof r=="string"?xt.fromBase64String(r):xt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="server_timestamp",O_="__type__",V_="__previous_value__",L_="__local_write_time__";function fd(r){return(r?.mapValue?.fields||{})[O_]?.stringValue===x_}function fc(r){const e=r.mapValue.fields[V_];return fd(e)?fc(e):e}function Ba(r){const e=Ri(r.mapValue.fields[L_].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,s,o,l,h,d,g,y,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=E}}const ju="(default)";class za{constructor(e,t){this.projectId=e,this.database=t||ju}static empty(){return new za("","")}get isDefaultDatabase(){return this.database===ju}isEqual(e){return e instanceof za&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="__type__",iT="__max__",Tu={mapValue:{}},b_="__vector__",$u="value";function Pi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?fd(r)?4:oT(r)?9007199254740991:sT(r)?10:11:_e(28295,{value:r})}function or(r,e){if(r===e)return!0;const t=Pi(r);if(t!==Pi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ba(r).isEqual(Ba(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ri(o.timestampValue),d=Ri(l.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ci(o.bytesValue).isEqual(Ci(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=lt(o.doubleValue),d=lt(l.doubleValue);return h===d?zu(h)===zu(d):isNaN(h)&&isNaN(d)}return!1})(r,e);case 9:return wo(r.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},d=l.mapValue.fields||{};if(Vg(h)!==Vg(d))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(d[g]===void 0||!or(h[g],d[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function ja(r,e){return(r.values||[]).find((t=>or(t,e)))!==void 0}function To(r,e){if(r===e)return 0;const t=Pi(r),s=Pi(e);if(t!==s)return De(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const d=lt(l.integerValue||l.doubleValue),g=lt(h.integerValue||h.doubleValue);return d<g?-1:d>g?1:d===g?0:isNaN(d)?isNaN(g)?0:-1:1})(r,e);case 3:return Mg(r.timestampValue,e.timestampValue);case 4:return Mg(Ba(r),Ba(e));case 5:return Uf(r.stringValue,e.stringValue);case 6:return(function(l,h){const d=Ci(l),g=Ci(h);return d.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const d=l.split("/"),g=h.split("/");for(let y=0;y<d.length&&y<g.length;y++){const E=De(d[y],g[y]);if(E!==0)return E}return De(d.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const d=De(lt(l.latitude),lt(h.latitude));return d!==0?d:De(lt(l.longitude),lt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return bg(r.arrayValue,e.arrayValue);case 10:return(function(l,h){const d=l.fields||{},g=h.fields||{},y=d[$u]?.arrayValue,E=g[$u]?.arrayValue,T=De(y?.values?.length||0,E?.values?.length||0);return T!==0?T:bg(y,E)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Tu.mapValue&&h===Tu.mapValue)return 0;if(l===Tu.mapValue)return 1;if(h===Tu.mapValue)return-1;const d=l.fields||{},g=Object.keys(d),y=h.fields||{},E=Object.keys(y);g.sort(),E.sort();for(let T=0;T<g.length&&T<E.length;++T){const I=Uf(g[T],E[T]);if(I!==0)return I;const L=To(d[g[T]],y[E[T]]);if(L!==0)return L}return De(g.length,E.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function Mg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return De(r,e);const t=Ri(r),s=Ri(e),o=De(t.seconds,s.seconds);return o!==0?o:De(t.nanos,s.nanos)}function bg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=To(t[o],s[o]);if(l)return l}return De(t.length,s.length)}function Io(r){return Ff(r)}function Ff(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ri(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ci(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return pe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Ff(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Ff(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function Nu(r){switch(Pi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fc(r);return e?16+Nu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ci(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Nu(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Di(s.fields,((l,h)=>{o+=l.length+Nu(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function Bf(r){return!!r&&"integerValue"in r}function dd(r){return!!r&&"arrayValue"in r}function Ug(r){return!!r&&"nullValue"in r}function Fg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Du(r){return!!r&&"mapValue"in r}function sT(r){return(r?.mapValue?.fields||{})[M_]?.stringValue===b_}function Oa(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Di(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Oa(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Oa(r.arrayValue.values[t]);return e}return{...r}}function oT(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===iT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oa(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach(((h,d)=>{if(!t.isImmediateParentOf(d)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=d.popLast()}h?s[d.lastSegment()]=Oa(h):o.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Du(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Di(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new Jt(Oa(this.value))}}function U_(r){const e=[];return Di(r.fields,((t,s)=>{const o=new Dt([t]);if(Du(s)){const l=U_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,s,o,l,h,d){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=d}static newInvalidDocument(e){return new Bt(e,0,we.min(),we.min(),we.min(),Jt.empty(),0)}static newFoundDocument(e,t,s,o){return new Bt(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,we.min(),we.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,we.min(),we.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.position=e,this.inclusive=t}}function Bg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=pe.comparator(pe.fromName(h.referenceValue),t.key):s=To(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function zg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!or(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t="asc"){this.field=e,this.dir=t}}function aT(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{}class yt extends F_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new uT(e,t,s):t==="array-contains"?new fT(e,s):t==="in"?new dT(e,s):t==="not-in"?new pT(e,s):t==="array-contains-any"?new mT(e,s):new yt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new cT(e,s):new hT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(To(t,this.value)):t!==null&&Pi(this.value)===Pi(t)&&this.matchesComparison(To(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends F_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ar(e,t)}matches(e){return B_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function B_(r){return r.op==="and"}function z_(r){return lT(r)&&B_(r)}function lT(r){for(const e of r.filters)if(e instanceof ar)return!1;return!0}function zf(r){if(r instanceof yt)return r.field.canonicalString()+r.op.toString()+Io(r.value);if(z_(r))return r.filters.map((e=>zf(e))).join(",");{const e=r.filters.map((t=>zf(t))).join(",");return`${r.op}(${e})`}}function j_(r,e){return r instanceof yt?(function(s,o){return o instanceof yt&&s.op===o.op&&s.field.isEqual(o.field)&&or(s.value,o.value)})(r,e):r instanceof ar?(function(s,o){return o instanceof ar&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,d)=>l&&j_(h,o.filters[d])),!0):!1})(r,e):void _e(19439)}function $_(r){return r instanceof yt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Io(t.value)}`})(r):r instanceof ar?(function(t){return t.op.toString()+" {"+t.getFilters().map($_).join(" ,")+"}"})(r):"Filter"}class uT extends yt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class cT extends yt{constructor(e,t){super(e,"in",t),this.keys=H_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class hT extends yt{constructor(e,t){super(e,"not-in",t),this.keys=H_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function H_(r,e){return(e.arrayValue?.values||[]).map((t=>pe.fromName(t.referenceValue)))}class fT extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return dd(t)&&ja(t.arrayValue,this.value)}}class dT extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ja(this.value.arrayValue,t)}}class pT extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ja(this.value.arrayValue,t)}}class mT extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!dd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ja(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,t=null,s=[],o=[],l=null,h=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=d,this.Te=null}}function jg(r,e=null,t=[],s=[],o=null,l=null,h=null){return new gT(r,e,t,s,o,l,h)}function pd(r){const e=Ie(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>zf(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),hc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Io(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Io(s))).join(",")),e.Te=t}return e.Te}function md(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!aT(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!j_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!zg(r.startAt,e.startAt)&&zg(r.endAt,e.endAt)}function jf(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t=null,s=[],o=[],l=null,h="F",d=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=d,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function yT(r,e,t,s,o,l,h,d){return new dc(r,e,t,s,o,l,h,d)}function q_(r){return new dc(r)}function $g(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function _T(r){return r.collectionGroup!==null}function Va(r){const e=Ie(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new vt(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(d=d.add(y.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new qu(l,s))})),t.has(Dt.keyField().canonicalString())||e.Ie.push(new qu(Dt.keyField(),s))}return e.Ie}function er(r){const e=Ie(r);return e.Ee||(e.Ee=vT(e,Va(r))),e.Ee}function vT(r,e){if(r.limitType==="F")return jg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new qu(o.field,l)}));const t=r.endAt?new Hu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Hu(r.startAt.position,r.startAt.inclusive):null;return jg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function $f(r,e,t){return new dc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function pc(r,e){return md(er(r),er(e))&&r.limitType===e.limitType}function W_(r){return`${pd(er(r))}|lt:${r.limitType}`}function uo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>$_(o))).join(", ")}]`),hc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Io(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Io(o))).join(",")),`Target(${s})`})(er(r))}; limitType=${r.limitType})`}function mc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):pe.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of Va(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,d,g){const y=Bg(h,d,g);return h.inclusive?y<=0:y<0})(s.startAt,Va(s),o)||s.endAt&&!(function(h,d,g){const y=Bg(h,d,g);return h.inclusive?y>=0:y>0})(s.endAt,Va(s),o))})(r,e)}function ET(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function K_(r){return(e,t)=>{let s=!1;for(const o of Va(r)){const l=wT(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function wT(r,e,t){const s=r.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,h,d){const g=h.data.field(l),y=d.data.field(l);return g!==null&&y!==null?To(g,y):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return N_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new nt(pe.comparator);function Or(){return TT}const G_=new nt(pe.comparator);function Na(...r){let e=G_;for(const t of r)e=e.insert(t.key,t);return e}function Q_(r){let e=G_;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ls(){return La()}function X_(){return La()}function La(){return new gs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const IT=new nt(pe.comparator),ST=new vt(pe.comparator);function xe(...r){let e=ST;for(const t of r)e=e.add(t);return e}const AT=new vt(De);function RT(){return AT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function Y_(r){return{integerValue:""+r}}function CT(r,e){return Zw(e)?Y_(e):gd(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this._=void 0}}function PT(r,e,t){return r instanceof Wu?(function(o,l){const h={fields:{[O_]:{stringValue:x_},[L_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&fd(l)&&(l=fc(l)),l&&(h.fields[V_]=l),{mapValue:h}})(t,e):r instanceof $a?Z_(r,e):r instanceof Ha?ev(r,e):(function(o,l){const h=J_(o,l),d=Hg(h)+Hg(o.Ae);return Bf(h)&&Bf(o.Ae)?Y_(d):gd(o.serializer,d)})(r,e)}function kT(r,e,t){return r instanceof $a?Z_(r,e):r instanceof Ha?ev(r,e):t}function J_(r,e){return r instanceof Ku?(function(s){return Bf(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Wu extends gc{}class $a extends gc{constructor(e){super(),this.elements=e}}function Z_(r,e){const t=tv(e);for(const s of r.elements)t.some((o=>or(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ha extends gc{constructor(e){super(),this.elements=e}}function ev(r,e){let t=tv(e);for(const s of r.elements)t=t.filter((o=>!or(o,s)));return{arrayValue:{values:t}}}class Ku extends gc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Hg(r){return lt(r.integerValue||r.doubleValue)}function tv(r){return dd(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function NT(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof $a&&o instanceof $a||s instanceof Ha&&o instanceof Ha?wo(s.elements,o.elements,or):s instanceof Ku&&o instanceof Ku?or(s.Ae,o.Ae):s instanceof Wu&&o instanceof Wu})(r.transform,e.transform)}class DT{constructor(e,t){this.version=e,this.transformResults=t}}class xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class yc{}function nv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new yd(r.key,xn.none()):new Xa(r.key,r.data,xn.none());{const t=r.data,s=Jt.empty();let o=new vt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new xi(r.key,s,new un(o.toArray()),xn.none())}}function xT(r,e,t){r instanceof Xa?(function(o,l,h){const d=o.value.clone(),g=Wg(o.fieldTransforms,l,h.transformResults);d.setAll(g),l.convertToFoundDocument(h.version,d).setHasCommittedMutations()})(r,e,t):r instanceof xi?(function(o,l,h){if(!xu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const d=Wg(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(rv(o)),g.setAll(d),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ma(r,e,t,s){return r instanceof Xa?(function(l,h,d,g){if(!xu(l.precondition,h))return d;const y=l.value.clone(),E=Kg(l.fieldTransforms,g,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(r,e,t,s):r instanceof xi?(function(l,h,d,g){if(!xu(l.precondition,h))return d;const y=Kg(l.fieldTransforms,g,h),E=h.data;return E.setAll(rv(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(l,h,d){return xu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d})(r,e,t)}function OT(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=J_(s.transform,o||null);l!=null&&(t===null&&(t=Jt.empty()),t.set(s.field,l))}return t||null}function qg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&wo(s,o,((l,h)=>NT(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Xa extends yc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class xi extends yc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function rv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Wg(r,e,t){const s=new Map;ze(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,d=e.data.field(l.field);s.set(l.field,kT(h,d,t[o]))}return s}function Kg(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,PT(l,h,e))}return s}class yd extends yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VT extends yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&xT(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ma(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ma(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=X_();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let d=this.applyToLocalView(h,l.mutatedFields);d=t.has(o.key)?null:d;const g=nv(h,d);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&wo(this.mutations,e.mutations,((t,s)=>qg(t,s)))&&wo(this.baseMutations,e.baseMutations,((t,s)=>qg(t,s)))}}class _d{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return IT})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new _d(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Le;function UT(r){switch(r){case W.OK:return _e(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function iv(r){if(r===void 0)return xr("GRPC error has no .code"),W.UNKNOWN;switch(r){case ft.OK:return W.OK;case ft.CANCELLED:return W.CANCELLED;case ft.UNKNOWN:return W.UNKNOWN;case ft.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ft.INTERNAL:return W.INTERNAL;case ft.UNAVAILABLE:return W.UNAVAILABLE;case ft.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ft.NOT_FOUND:return W.NOT_FOUND;case ft.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ft.ABORTED:return W.ABORTED;case ft.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ft.DATA_LOSS:return W.DATA_LOSS;default:return _e(39323,{code:r})}}(Le=ft||(ft={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=new vi([4294967295,4294967295],0);function Gg(r){const e=FT().encode(r),t=new v_;return t.update(e),new Uint8Array(t.digest())}function Qg(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new vi([t,s],0),new vi([o,l],0)]}class vd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Da(`Invalid padding: ${t}`);if(s<0)throw new Da(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Da(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Da(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(vi.fromNumber(s)));return o.compare(BT)===1&&(o=new vi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Gg(e),[s,o]=Qg(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new vd(l,o,t);return s.forEach((d=>h.insert(d))),h}insert(e){if(this.ge===0)return;const t=Gg(e),[s,o]=Qg(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ya.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new _c(we.min(),o,new nt(De),Or(),xe())}}class Ya{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ya(s,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class sv{constructor(e,t){this.targetId=e,this.Ce=t}}class ov{constructor(e,t,s=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Xg{constructor(){this.ve=0,this.Fe=Yg(),this.Me=xt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=xe(),t=xe(),s=xe();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:l})}})),new Ya(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Yg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class zT{constructor(e){this.Ge=e,this.ze=new Map,this.je=Or(),this.Je=Iu(),this.He=Iu(),this.Ye=new nt(De)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(jf(l))if(s===0){const h=new pe(l.path);this.et(t,h,Bt.newNoDocument(h,we.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const d=this.ut(e),g=d?this.ct(d,e,h):1;if(g!==0){this.it(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,d;try{h=Ci(s).toUint8Array()}catch(g){if(g instanceof D_)return Eo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{d=new vd(h,o,l)}catch(g){return Eo(g instanceof Da?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.Ge.ht(),d=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const d=this.ot(h);if(d){if(l.current&&jf(d.target)){const g=new pe(d.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,Bt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let s=xe();this.He.forEach(((l,h)=>{let d=!0;h.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new _c(e,t,this.Ye,this.je,s);return this.je=Or(),this.Je=Iu(),this.He=Iu(),this.Ye=new nt(De),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Xg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new vt(De),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new vt(De),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Iu(){return new nt(pe.comparator)}function Yg(){return new nt(pe.comparator)}const jT={asc:"ASCENDING",desc:"DESCENDING"},$T={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HT={and:"AND",or:"OR"};class qT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hf(r,e){return r.useProto3Json||hc(e)?e:{value:e}}function Gu(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function av(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function WT(r,e){return Gu(r,e.toTimestamp())}function tr(r){return ze(!!r,49232),we.fromTimestamp((function(t){const s=Ri(t);return new Ye(s.seconds,s.nanos)})(r))}function Ed(r,e){return qf(r,e).canonicalString()}function qf(r,e){const t=(function(o){return new Xe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function lv(r){const e=Xe.fromString(r);return ze(dv(e),10190,{key:e.toString()}),e}function Wf(r,e){return Ed(r.databaseId,e.path)}function ff(r,e){const t=lv(e);if(t.get(1)!==r.databaseId.projectId)throw new ce(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ce(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new pe(cv(t))}function uv(r,e){return Ed(r.databaseId,e)}function KT(r){const e=lv(r);return e.length===4?Xe.emptyPath():cv(e)}function Kf(r){return new Xe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function cv(r){return ze(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Jg(r,e,t){return{name:Wf(r,e),fields:t.value.mapValue.fields}}function GT(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,E){return y.useProto3Json?(ze(E===void 0||typeof E=="string",58123),xt.fromBase64String(E||"")):(ze(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),xt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&(function(y){const E=y.code===void 0?W.UNKNOWN:iv(y.code);return new ce(E,y.message||"")})(h);t=new ov(s,o,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ff(r,s.document.name),l=tr(s.document.updateTime),h=s.document.createTime?tr(s.document.createTime):we.min(),d=new Jt({mapValue:{fields:s.document.fields}}),g=Bt.newFoundDocument(o,l,h,d),y=s.targetIds||[],E=s.removedTargetIds||[];t=new Ou(y,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ff(r,s.document),l=s.readTime?tr(s.readTime):we.min(),h=Bt.newNoDocument(o,l),d=s.removedTargetIds||[];t=new Ou([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ff(r,s.document),l=s.removedTargetIds||[];t=new Ou([],l,o,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new bT(o,l),d=s.targetId;t=new sv(d,h)}}return t}function QT(r,e){let t;if(e instanceof Xa)t={update:Jg(r,e.key,e.value)};else if(e instanceof yd)t={delete:Wf(r,e.key)};else if(e instanceof xi)t={update:Jg(r,e.key,e.data),updateMask:iI(e.fieldMask)};else{if(!(e instanceof VT))return _e(16599,{Vt:e.type});t={verify:Wf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const d=h.transform;if(d instanceof Wu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof $a)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Ha)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Ku)return{fieldPath:h.field.canonicalString(),increment:d.Ae};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:WT(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(r,e.precondition)),t}function XT(r,e){return r&&r.length>0?(ze(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?tr(o.updateTime):tr(l);return h.isEqual(we.min())&&(h=tr(l)),new DT(h,o.transformResults||[])})(t,e)))):[]}function YT(r,e){return{documents:[uv(r,e.path)]}}function JT(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=uv(r,o);const l=(function(y){if(y.length!==0)return fv(ar.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((E=>(function(I){return{field:co(I.field),direction:tI(I.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const d=Hf(r,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function ZT(r){let e=KT(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(T){const I=hv(T);return I instanceof ar&&z_(I)?I.getFilters():[I]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((I=>(function(z){return new qu(ho(z.field),(function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(I)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let I;return I=typeof T=="object"?T.value:T,hc(I)?null:I})(t.limit));let g=null;t.startAt&&(g=(function(T){const I=!!T.before,L=T.values||[];return new Hu(L,I)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const I=!T.before,L=T.values||[];return new Hu(L,I)})(t.endAt)),yT(e,o,h,l,d,"F",g,y)}function eI(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ho(t.unaryFilter.field);return yt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ho(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ho(t.unaryFilter.field);return yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ho(t.unaryFilter.field);return yt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return yt.create(ho(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return ar.create(t.compositeFilter.filters.map((s=>hv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function tI(r){return jT[r]}function nI(r){return $T[r]}function rI(r){return HT[r]}function co(r){return{fieldPath:r.canonicalString()}}function ho(r){return Dt.fromServerFormat(r.fieldPath)}function fv(r){return r instanceof yt?(function(t){if(t.op==="=="){if(Fg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NAN"}};if(Ug(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NOT_NAN"}};if(Ug(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:co(t.field),op:nI(t.op),value:t.value}}})(r):r instanceof ar?(function(t){const s=t.getFilters().map((o=>fv(o)));return s.length===1?s[0]:{compositeFilter:{op:rI(t.op),filters:s}}})(r):_e(54877,{filter:r})}function iI(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function dv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,s,o,l=we.min(),h=we.min(),d=xt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=g}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.yt=e}}function oI(r){const e=ZT({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?$f(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.Cn=new lI}addToCollectionParentIndex(e,t){return this.Cn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ai.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ai.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class lI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new vt(Xe.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new vt(Xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pv=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(pv,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new So(0)}static cr(){return new So(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="LruGarbageCollector",uI=1048576;function ty([r,e],[t,s]){const o=De(r,t);return o===0?De(e,s):o}class cI{constructor(e){this.Ir=e,this.buffer=new vt(ty),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ty(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ne(ey,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ko(t)?ne(ey,"Ignoring IndexedDB error during garbage collection: ",t):await Po(t)}await this.Vr(3e5)}))}}class fI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(cc.ce);const s=new cI(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Zg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,l,h,d,g,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(y=Date.now(),lo()<=Ne.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(d-h)+`ms
	Removed ${l} targets in `+(g-d)+`ms
	Removed ${T} documents in `+(y-g)+`ms
Total Duration: ${y-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function dI(r,e){return new fI(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.changes=new gs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ma(s.mutation,o,un.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,xe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=xe()){const o=ls();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Na();return l.forEach(((d,g)=>{h=h.insert(d,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ls();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,xe())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,d)=>{t.set(h,d)}))}))}computeViews(e,t,s,o){let l=Or();const h=La(),d=(function(){return La()})();return t.forEach(((g,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof xi)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Ma(E.mutation,y,E.mutation.getFieldMask(),Ye.now())):h.set(y.key,un.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,E)=>h.set(y,E))),t.forEach(((y,E)=>d.set(y,new mI(E,h.get(y)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=La();let o=new nt(((h,d)=>h-d)),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const d of h)d.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let E=s.get(g)||un.empty();E=d.applyToLocalView(y,E),s.set(g,E);const T=(o.get(d.batchId)||xe()).add(g);o=o.insert(d.batchId,T)}))})).next((()=>{const h=[],d=o.getReverseIterator();for(;d.hasNext();){const g=d.getNext(),y=g.key,E=g.value,T=X_();E.forEach((I=>{if(!l.has(I)){const L=nv(t.get(I),s.get(I));L!==null&&T.set(I,L),l=l.add(I)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_T(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):H.resolve(ls());let d=Fa,g=l;return h.next((y=>H.forEach(y,((E,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next((I=>{g=g.insert(E,I)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,xe()))).next((E=>({batchId:d,changes:Q_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let o=Na();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Na();return this.indexManager.getCollectionParents(e,l).next((d=>H.forEach(d,(g=>{const y=(function(T,I){return new dc(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((E=>{E.forEach(((T,I)=>{h=h.insert(T,I)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,Bt.newInvalidDocument(E)))}));let d=Na();return h.forEach(((g,y)=>{const E=l.get(g);E!==void 0&&Ma(E.mutation,y,un.empty(),Ye.now()),mc(t,y)&&(d=d.insert(g,y))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return H.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:tr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:oI(o.bundledQuery),readTime:tr(o.readTime)}})(t)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.overlays=new nt(pe.comparator),this.qr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ls();return H.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.St(e,t,l)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=ls(),l=t.length+1,h=new pe(t.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const g=d.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new nt(((y,E)=>y-E));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let E=l.get(y.largestBatchId);E===null&&(E=ls(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const d=ls(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,E)=>d.set(y,E))),!(d.size()>=o)););return H.resolve(d)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new MT(t,s));let l=this.qr.get(t);l===void 0&&(l=xe(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.Qr=new vt(It.$r),this.Ur=new vt(It.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new It(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new It(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new pe(new Xe([])),s=new It(t,e),o=new It(t,e+1),l=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),l.push(h.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new pe(new Xe([])),s=new It(t,e),o=new It(t,e+1);let l=xe();return this.Ur.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new It(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return pe.comparator(e.key,t.key)||De(e.Yr,t.Yr)}static Kr(e,t){return De(e.Yr,t.Yr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new vt(It.$r)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new LT(l,t,s,o);this.mutationQueue.push(h);for(const d of o)this.Zr=this.Zr.add(new It(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?hd:this.tr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,o],(h=>{const d=this.Xr(h.Yr);l.push(d)})),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new vt(De);return t.forEach((o=>{const l=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,h],(d=>{s=s.add(d.Yr)}))})),H.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;pe.isDocumentKey(l)||(l=l.child(""));const h=new It(new pe(l),0);let d=new vt(De);return this.Zr.forEachWhile((g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(d=d.add(g.Yr)),!0)}),h),H.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return H.forEach(t.mutations,(o=>{const l=new It(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new It(t,0),o=this.Zr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.ri=e,this.docs=(function(){return new nt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let s=Or();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Or();const h=t.path,d=new pe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(d);for(;g.hasNext();){const{key:y,value:{document:E}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||Qw(Gw(E),s)<=0||(o.has(E.key)||mc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ii(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new TI(this)}getSize(e){return H.resolve(this.size)}}class TI extends pI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.persistence=e,this.si=new gs((t=>pd(t)),md),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.oi=0,this._i=new wd,this.targetCount=0,this.ai=So.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),H.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new So(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Pr(t),H.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.si.forEach(((h,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(h),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),H.waitFor(l).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,t){this.ui={},this.overlays={},this.ci=new cc(0),this.li=!1,this.li=!0,this.hi=new vI,this.referenceDelegate=e(this),this.Pi=new II(this),this.indexManager=new aI,this.remoteDocumentCache=(function(o){return new wI(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new sI(t),this.Ii=new yI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _I,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new EI(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new SI(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ai(e,t){return H.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class SI extends Yw{constructor(e){super(),this.currentSequenceNumber=e}}class Td{constructor(e){this.persistence=e,this.Ri=new wd,this.Vi=null}static mi(e){return new Td(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.fi,(s=>{const o=pe.fromPath(s);return this.gi(e,o).next((l=>{l||t.removeEntry(o,we.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Qu{constructor(e,t){this.persistence=e,this.pi=new gs((s=>eT(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=dI(this,t)}static mi(e,t){return new Qu(e,t)}Ei(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return H.forEach(this.pi,((s,o)=>this.br(e,s,o).next((l=>l?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((d=>{d||(s++,l.removeEntry(h,we.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Nu(e.data.value)),t}br(e,t,s){return H.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=xe(),o=xe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Id(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return g1()?8:Jw(zt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ys(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ws(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new AI;return this.Ss(e,t,h).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,h,d.size)}))})).next((()=>l.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(lo()<=Ne.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",uo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),H.resolve()):(lo()<=Ne.DEBUG&&ne("QueryEngine","Query:",uo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(lo()<=Ne.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",uo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(t))):H.resolve())}ys(e,t){if($g(t))return H.resolve(null);let s=er(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=$f(t,null,"F"),s=er(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=xe(...l);return this.ps.getDocuments(e,h).next((d=>this.indexManager.getMinOffset(e,s).next((g=>{const y=this.Ds(t,d);return this.Cs(t,y,h,g.readTime)?this.ys(e,$f(t,null,"F")):this.vs(e,y,t,g)}))))})))))}ws(e,t,s,o){return $g(t)||o.isEqual(we.min())?H.resolve(null):this.ps.getDocuments(e,s).next((l=>{const h=this.Ds(t,l);return this.Cs(t,h,s,o)?H.resolve(null):(lo()<=Ne.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),uo(t)),this.vs(e,h,t,Kw(o,Fa)).next((d=>d)))}))}Ds(e,t){let s=new vt(K_(e));return t.forEach(((o,l)=>{mc(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,s){return lo()<=Ne.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",uo(t)),this.ps.getDocumentsMatchingQuery(e,t,Ai.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="LocalStore",CI=3e8;class PI{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new nt(De),this.xs=new gs((l=>pd(l)),md),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function kI(r,e,t,s){return new PI(r,e,t,s)}async function gv(r,e){const t=Ie(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],d=[];let g=xe();for(const y of o){h.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}for(const y of l){d.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((y=>({Ls:y,removedBatchIds:h,addedBatchIds:d})))}))}))}function NI(r,e){const t=Ie(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,g,y,E){const T=y.batch,I=T.keys();let L=H.resolve();return I.forEach((z=>{L=L.next((()=>E.getEntry(g,z))).next(($=>{const j=y.docVersions.get(z);ze(j!==null,48541),$.version.compareTo(j)<0&&(T.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),E.addEntry($)))}))})),L.next((()=>d.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let g=xe();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(g=g.add(d.batch.mutations[y].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function yv(r){const e=Ie(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function DI(r,e){const t=Ie(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const d=[];e.targetChanges.forEach(((E,T)=>{const I=o.get(T);if(!I)return;d.push(t.Pi.removeMatchingKeys(l,E.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,E.addedDocuments,T))));let L=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?L=L.withResumeToken(xt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(E.resumeToken,s)),o=o.insert(T,L),(function($,j,Y){return $.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=CI?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0})(I,L,E)&&d.push(t.Pi.updateTargetData(l,L))}));let g=Or(),y=xe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),d.push(xI(l,h,e.documentUpdates).next((E=>{g=E.ks,y=E.qs}))),!s.isEqual(we.min())){const E=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(E)}return H.waitFor(d).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.Ms=o,l)))}function xI(r,e,t){let s=xe(),o=xe();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=Or();return t.forEach(((d,g)=>{const y=l.get(d);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(d,g.readTime),h=h.insert(d,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(d,g)):ne(Sd,"Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",g.version)})),{ks:h,qs:o}}))}function OI(r,e){const t=Ie(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=hd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function VI(r,e){const t=Ie(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((l=>l?(o=l,H.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new gi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Gf(r,e,t){const s=Ie(r),o=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ko(h))throw h;ne(Sd,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function ny(r,e,t){const s=Ie(r);let o=we.min(),l=xe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,y,E){const T=Ie(g),I=T.xs.get(E);return I!==void 0?H.resolve(T.Ms.get(I)):T.Pi.getTargetData(y,E)})(s,h,er(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,d.targetId).next((g=>{l=g}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:xe()))).next((d=>(LI(s,ET(e),d),{documents:d,Qs:l})))))}function LI(r,e,t){let s=r.Os.get(e)||we.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.Os.set(e,s)}class ry{constructor(){this.activeTargetIds=RT()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MI{constructor(){this.Mo=new ry,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ry,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="ConnectivityMonitor";class sy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ne(iy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ne(iy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su=null;function Qf(){return Su===null?Su=(function(){return 268435456+Math.round(2147483648*Math.random())})():Su++,"0x"+Su.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="RestConnection",UI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class FI{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===ju?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,l){const h=Qf(),d=this.zo(e,t.toUriEncodedString());ne(df,`Sending RPC '${e}' ${h}:`,d,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,l);const{host:y}=new URL(d),E=ps(y);return this.Jo(e,d,g,s,E).then((T=>(ne(df,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw Eo(df,`RPC '${e}' ${h} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,o,l,h){return this.Go(e,t,s,o,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Co})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}zo(e,t){const s=UI[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class zI extends FI{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,l){const h=Qf();return new Promise(((d,g)=>{const y=new E_;y.setWithCredentials(!0),y.listenOnce(w_.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case ku.NO_ERROR:const T=y.getResponseJson();ne(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),d(T);break;case ku.TIMEOUT:ne(Ut,`RPC '${e}' ${h} timed out`),g(new ce(W.DEADLINE_EXCEEDED,"Request time out"));break;case ku.HTTP_ERROR:const I=y.getStatus();if(ne(Ut,`RPC '${e}' ${h} failed with status:`,I,"response text:",y.getResponseText()),I>0){let L=y.getResponseJson();Array.isArray(L)&&(L=L[0]);const z=L?.error;if(z&&z.status&&z.message){const $=(function(Y){const ie=Y.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ie)>=0?ie:W.UNKNOWN})(z.status);g(new ce($,z.message))}else g(new ce(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ce(W.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ne(Ut,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ne(Ut,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=Qf(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=S_(),d=I_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=l.join("");ne(Ut,`Creating RPC '${e}' stream ${o}: ${E}`,g);const T=h.createWebChannel(E,g);this.I_(T);let I=!1,L=!1;const z=new BI({Yo:j=>{L?ne(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(I||(ne(Ut,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ne(Ut,`RPC '${e}' stream ${o} sending:`,j),T.send(j))},Zo:()=>T.close()}),$=(j,Y,ie)=>{j.listen(Y,(he=>{try{ie(he)}catch(fe){setTimeout((()=>{throw fe}),0)}}))};return $(T,ka.EventType.OPEN,(()=>{L||(ne(Ut,`RPC '${e}' stream ${o} transport opened.`),z.o_())})),$(T,ka.EventType.CLOSE,(()=>{L||(L=!0,ne(Ut,`RPC '${e}' stream ${o} transport closed`),z.a_(),this.E_(T))})),$(T,ka.EventType.ERROR,(j=>{L||(L=!0,Eo(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,j.name,"Message:",j.message),z.a_(new ce(W.UNAVAILABLE,"The operation could not be completed")))})),$(T,ka.EventType.MESSAGE,(j=>{if(!L){const Y=j.data[0];ze(!!Y,16349);const ie=Y,he=ie?.error||ie[0]?.error;if(he){ne(Ut,`RPC '${e}' stream ${o} received error:`,he);const fe=he.status;let Re=(function(S){const C=ft[S];if(C!==void 0)return iv(C)})(fe),Ee=he.message;Re===void 0&&(Re=W.INTERNAL,Ee="Unknown error status: "+fe+" with message "+he.message),L=!0,z.a_(new ce(Re,Ee)),T.close()}else ne(Ut,`RPC '${e}' stream ${o} received:`,Y),z.u_(Y)}})),$(d,T_.STAT_EVENT,(j=>{j.stat===bf.PROXY?ne(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===bf.NOPROXY&&ne(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{z.__()}),0),z}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function pf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(r){return new qT(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="PersistentStream";class vv{constructor(e,t,s,o,l,h,d,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _v(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(xr(t.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ce(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(oy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ne(oy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class jI extends vv{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=GT(this.serializer,e),s=(function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?tr(h.readTime):we.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Kf(this.serializer),t.addTarget=(function(l,h){let d;const g=h.target;if(d=jf(g)?{documents:YT(l,g)}:{query:JT(l,g).ft},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=av(l,h.resumeToken);const y=Hf(l,h.expectedCount);y!==null&&(d.expectedCount=y)}else if(h.snapshotVersion.compareTo(we.min())>0){d.readTime=Gu(l,h.snapshotVersion.toTimestamp());const y=Hf(l,h.expectedCount);y!==null&&(d.expectedCount=y)}return d})(this.serializer,e);const s=eI(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Kf(this.serializer),t.removeTarget=e,this.q_(t)}}class $I extends vv{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=XT(e.writeResults,e.commitTime),s=tr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Kf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>QT(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{}class qI extends HI{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ce(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Go(e,qf(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ce(W.UNKNOWN,l.toString())}))}Ho(e,t,s,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,d])=>this.connection.Ho(e,qf(t,s),o,h,d,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ce(W.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class WI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xr(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="RemoteStore";class KI{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{ys(this)&&(ne(fs,"Restarting streams for network reachability change."),await(async function(g){const y=Ie(g);y.Ea.add(4),await Ja(y),y.Ra.set("Unknown"),y.Ea.delete(4),await Ec(y)})(this))}))})),this.Ra=new WI(s,o)}}async function Ec(r){if(ys(r))for(const e of r.da)await e(!0)}async function Ja(r){for(const e of r.da)await e(!1)}function Ev(r,e){const t=Ie(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Pd(t)?Cd(t):No(t).O_()&&Rd(t,e))}function Ad(r,e){const t=Ie(r),s=No(t);t.Ia.delete(e),s.O_()&&wv(t,e),t.Ia.size===0&&(s.O_()?s.L_():ys(t)&&t.Ra.set("Unknown"))}function Rd(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}No(r).Y_(e)}function wv(r,e){r.Va.Ue(e),No(r).Z_(e)}function Cd(r){r.Va=new zT({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),No(r).start(),r.Ra.ua()}function Pd(r){return ys(r)&&!No(r).x_()&&r.Ia.size>0}function ys(r){return Ie(r).Ea.size===0}function Tv(r){r.Va=void 0}async function GI(r){r.Ra.set("Online")}async function QI(r){r.Ia.forEach(((e,t)=>{Rd(r,e)}))}async function XI(r,e){Tv(r),Pd(r)?(r.Ra.ha(e),Cd(r)):r.Ra.set("Unknown")}async function YI(r,e,t){if(r.Ra.set("Online"),e instanceof ov&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const d of l.targetIds)o.Ia.has(d)&&(await o.remoteSyncer.rejectListen(d,h),o.Ia.delete(d),o.Va.removeTarget(d))})(r,e)}catch(s){ne(fs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xu(r,s)}else if(e instanceof Ou?r.Va.Ze(e):e instanceof sv?r.Va.st(e):r.Va.tt(e),!t.isEqual(we.min()))try{const s=await yv(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const d=l.Va.Tt(h);return d.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ia.get(y);E&&l.Ia.set(y,E.withResumeToken(g.resumeToken,h))}})),d.targetMismatches.forEach(((g,y)=>{const E=l.Ia.get(g);if(!E)return;l.Ia.set(g,E.withResumeToken(xt.EMPTY_BYTE_STRING,E.snapshotVersion)),wv(l,g);const T=new gi(E.target,g,y,E.sequenceNumber);Rd(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(r,t)}catch(s){ne(fs,"Failed to raise snapshot:",s),await Xu(r,s)}}async function Xu(r,e,t){if(!ko(e))throw e;r.Ea.add(1),await Ja(r),r.Ra.set("Offline"),t||(t=()=>yv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ne(fs,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Ec(r)}))}function Iv(r,e){return e().catch((t=>Xu(r,t,e)))}async function wc(r){const e=Ie(r),t=ki(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:hd;for(;JI(e);)try{const o=await OI(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,ZI(e,o)}catch(o){await Xu(e,o)}Sv(e)&&Av(e)}function JI(r){return ys(r)&&r.Ta.length<10}function ZI(r,e){r.Ta.push(e);const t=ki(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Sv(r){return ys(r)&&!ki(r).x_()&&r.Ta.length>0}function Av(r){ki(r).start()}async function eS(r){ki(r).ra()}async function tS(r){const e=ki(r);for(const t of r.Ta)e.ea(t.mutations)}async function nS(r,e,t){const s=r.Ta.shift(),o=_d.from(s,e,t);await Iv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await wc(r)}async function rS(r,e){e&&ki(r).X_&&await(async function(s,o){if((function(h){return UT(h)&&h!==W.ABORTED})(o.code)){const l=s.Ta.shift();ki(s).B_(),await Iv(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await wc(s)}})(r,e),Sv(r)&&Av(r)}async function ay(r,e){const t=Ie(r);t.asyncQueue.verifyOperationInProgress(),ne(fs,"RemoteStore received new credentials");const s=ys(t);t.Ea.add(3),await Ja(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ec(t)}async function iS(r,e){const t=Ie(r);e?(t.Ea.delete(2),await Ec(t)):e||(t.Ea.add(2),await Ja(t),t.Ra.set("Unknown"))}function No(r){return r.ma||(r.ma=(function(t,s,o){const l=Ie(t);return l.sa(),new jI(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:GI.bind(null,r),t_:QI.bind(null,r),r_:XI.bind(null,r),H_:YI.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Pd(r)?Cd(r):r.Ra.set("Unknown")):(await r.ma.stop(),Tv(r))}))),r.ma}function ki(r){return r.fa||(r.fa=(function(t,s,o){const l=Ie(t);return l.sa(),new $I(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:eS.bind(null,r),r_:rS.bind(null,r),ta:tS.bind(null,r),na:nS.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await wc(r)):(await r.fa.stop(),r.Ta.length>0&&(ne(fs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,d=new kd(e,t,h,o,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nd(r,e){if(xr("AsyncQueue",`${e}: ${r}`),ko(r))return new ce(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{static emptySet(e){return new po(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=Na(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new po;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.ga=new nt(pe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Ao{constructor(e,t,s,o,l,h,d,g,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((d=>{h.push({type:0,doc:d})})),new Ao(e,t,po.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class oS{constructor(){this.queries=uy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ie(t),l=o.queries;o.queries=uy(),l.forEach(((h,d)=>{for(const g of d.Sa)g.onError(s)}))})(this,new ce(W.ABORTED,"Firestore shutting down"))}}function uy(){return new gs((r=>W_(r)),pc)}async function aS(r,e){const t=Ie(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(s=2):(l=new sS,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const d=Nd(h,`Initialization of query '${uo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Dd(t)}async function lS(r,e){const t=Ie(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function uS(r,e){const t=Ie(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const d of h.Sa)d.Fa(o)&&(s=!0);h.wa=o}}s&&Dd(t)}function cS(r,e,t){const s=Ie(r),o=s.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);s.queries.delete(e)}function Dd(r){r.Ca.forEach((e=>{e.next()}))}var Xf,cy;(cy=Xf||(Xf={})).Ma="default",cy.Cache="cache";class hS{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ao(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Xf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.key=e}}class Cv{constructor(e){this.key=e}}class fS{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=xe(),this.mutatedKeys=xe(),this.eu=K_(e),this.tu=new po(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new ly,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,d=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const I=o.get(E),L=mc(this.query,T)?T:null,z=!!I&&this.mutatedKeys.has(I.key),$=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let j=!1;I&&L?I.data.isEqual(L.data)?z!==$&&(s.track({type:3,doc:L}),j=!0):this.su(I,L)||(s.track({type:2,doc:L}),j=!0,(g&&this.eu(L,g)>0||y&&this.eu(L,y)<0)&&(d=!0)):!I&&L?(s.track({type:0,doc:L}),j=!0):I&&!L&&(s.track({type:1,doc:I}),j=!0,(g||y)&&(d=!0)),j&&(L?(h=h.add(L),l=$?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,T)=>(function(L,z){const $=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:j})}};return $(L)-$(z)})(E.type,T.type)||this.eu(E.doc,T.doc))),this.ou(s),o=o??!1;const d=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,y=g!==this.Za;return this.Za=g,h.length!==0||y?{snapshot:new Ao(this.query,e.tu,l,h,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ly,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=xe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new Cv(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Rv(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=xe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ao.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const xd="SyncEngine";class dS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class pS{constructor(e){this.key=e,this.hu=!1}}class mS{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new gs((d=>W_(d)),pc),this.Iu=new Map,this.Eu=new Set,this.du=new nt(pe.comparator),this.Au=new Map,this.Ru=new wd,this.Vu={},this.mu=new Map,this.fu=So.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gS(r,e,t=!0){const s=Ov(r);let o;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await Pv(s,e,t,!0),o}async function yS(r,e){const t=Ov(r);await Pv(t,e,!0,!1)}async function Pv(r,e,t,s){const o=await VI(r.localStore,er(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await _S(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Ev(r.remoteStore,o),d}async function _S(r,e,t,s,o){r.pu=(T,I,L)=>(async function($,j,Y,ie){let he=j.view.ru(Y);he.Cs&&(he=await ny($.localStore,j.query,!1).then((({documents:k})=>j.view.ru(k,he))));const fe=ie&&ie.targetChanges.get(j.targetId),Re=ie&&ie.targetMismatches.get(j.targetId)!=null,Ee=j.view.applyChanges(he,$.isPrimaryClient,fe,Re);return fy($,j.targetId,Ee.au),Ee.snapshot})(r,T,I,L);const l=await ny(r.localStore,e,!0),h=new fS(e,l.Qs),d=h.ru(l.documents),g=Ya.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),y=h.applyChanges(d,r.isPrimaryClient,g);fy(r,t,y.au);const E=new dS(e,t,h);return r.Tu.set(e,E),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),y.snapshot}async function vS(r,e,t){const s=Ie(r),o=s.Tu.get(e),l=s.Iu.get(o.targetId);if(l.length>1)return s.Iu.set(o.targetId,l.filter((h=>!pc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Gf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Ad(s.remoteStore,o.targetId),Yf(s,o.targetId)})).catch(Po)):(Yf(s,o.targetId),await Gf(s.localStore,o.targetId,!0))}async function ES(r,e){const t=Ie(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ad(t.remoteStore,s.targetId))}async function wS(r,e,t){const s=PS(r);try{const o=await(function(h,d){const g=Ie(h),y=Ye.now(),E=d.reduce(((L,z)=>L.add(z.key)),xe());let T,I;return g.persistence.runTransaction("Locally write mutations","readwrite",(L=>{let z=Or(),$=xe();return g.Ns.getEntries(L,E).next((j=>{z=j,z.forEach(((Y,ie)=>{ie.isValidDocument()||($=$.add(Y))}))})).next((()=>g.localDocuments.getOverlayedDocuments(L,z))).next((j=>{T=j;const Y=[];for(const ie of d){const he=OT(ie,T.get(ie.key).overlayedDocument);he!=null&&Y.push(new xi(ie.key,he,U_(he.value.mapValue),xn.exists(!0)))}return g.mutationQueue.addMutationBatch(L,y,Y,d)})).next((j=>{I=j;const Y=j.applyToLocalDocumentSet(T,$);return g.documentOverlayCache.saveOverlays(L,j.batchId,Y)}))})).then((()=>({batchId:I.batchId,changes:Q_(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,d,g){let y=h.Vu[h.currentUser.toKey()];y||(y=new nt(De)),y=y.insert(d,g),h.Vu[h.currentUser.toKey()]=y})(s,o.batchId,t),await Za(s,o.changes),await wc(s.remoteStore)}catch(o){const l=Nd(o,"Failed to persist write");t.reject(l)}}async function kv(r,e){const t=Ie(r);try{const s=await DI(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await Za(t,s,e)}catch(s){await Po(s)}}function hy(r,e,t){const s=Ie(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((l,h)=>{const d=h.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(h,d){const g=Ie(h);g.onlineState=d;let y=!1;g.queries.forEach(((E,T)=>{for(const I of T.Sa)I.va(d)&&(y=!0)})),y&&Dd(g)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function TS(r,e,t){const s=Ie(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),l=o&&o.key;if(l){let h=new nt(pe.comparator);h=h.insert(l,Bt.newNoDocument(l,we.min()));const d=xe().add(l),g=new _c(we.min(),new Map,new nt(De),h,d);await kv(s,g),s.du=s.du.remove(l),s.Au.delete(e),Od(s)}else await Gf(s.localStore,e,!1).then((()=>Yf(s,e,t))).catch(Po)}async function IS(r,e){const t=Ie(r),s=e.batch.batchId;try{const o=await NI(t.localStore,e);Dv(t,s,null),Nv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Za(t,o)}catch(o){await Po(o)}}async function SS(r,e,t){const s=Ie(r);try{const o=await(function(h,d){const g=Ie(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let E;return g.mutationQueue.lookupMutationBatch(y,d).next((T=>(ze(T!==null,37113),E=T.keys(),g.mutationQueue.removeMutationBatch(y,T)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,E,d))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E))).next((()=>g.localDocuments.getDocuments(y,E)))}))})(s.localStore,e);Dv(s,e,t),Nv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Za(s,o)}catch(o){await Po(o)}}function Nv(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Dv(r,e,t){const s=Ie(r);let o=s.Vu[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Yf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||xv(r,s)}))}function xv(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Ad(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Od(r))}function fy(r,e,t){for(const s of t)s instanceof Rv?(r.Ru.addReference(s.key,e),AS(r,s)):s instanceof Cv?(ne(xd,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||xv(r,s.key)):_e(19791,{wu:s})}function AS(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(ne(xd,"New document in limbo: "+t),r.Eu.add(s),Od(r))}function Od(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new pe(Xe.fromString(e)),s=r.fu.next();r.Au.set(s,new pS(t)),r.du=r.du.insert(t,s),Ev(r.remoteStore,new gi(er(q_(t.path)),s,"TargetPurposeLimboResolution",cc.ce))}}async function Za(r,e,t){const s=Ie(r),o=[],l=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,g)=>{h.push(s.pu(g,e,t).then((y=>{if((y||t)&&s.isPrimaryClient){const E=y?!y.fromCache:t?.targetChanges.get(g.targetId)?.current;s.sharedClientState.updateQueryState(g.targetId,E?"current":"not-current")}if(y){o.push(y);const E=Id.As(g.targetId,y);l.push(E)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(g,y){const E=Ie(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>H.forEach(y,(I=>H.forEach(I.Es,(L=>E.persistence.referenceDelegate.addReference(T,I.targetId,L))).next((()=>H.forEach(I.ds,(L=>E.persistence.referenceDelegate.removeReference(T,I.targetId,L)))))))))}catch(T){if(!ko(T))throw T;ne(Sd,"Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const L=E.Ms.get(I),z=L.snapshotVersion,$=L.withLastLimboFreeSnapshotVersion(z);E.Ms=E.Ms.insert(I,$)}}})(s.localStore,l))}async function RS(r,e){const t=Ie(r);if(!t.currentUser.isEqual(e)){ne(xd,"User change. New user:",e.toKey());const s=await gv(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((d=>{d.forEach((g=>{g.reject(new ce(W.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Za(t,s.Ls)}}function CS(r,e){const t=Ie(r),s=t.Au.get(e);if(s&&s.hu)return xe().add(s.key);{let o=xe();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const d=t.Tu.get(h);o=o.unionWith(d.view.nu)}return o}}function Ov(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TS.bind(null,e),e.Pu.H_=uS.bind(null,e.eventManager),e.Pu.yu=cS.bind(null,e.eventManager),e}function PS(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SS.bind(null,e),e}class Yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return kI(this.persistence,new RI,e.initialUser,this.serializer)}Cu(e){return new mv(Td.mi,this.serializer)}Du(e){return new MI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yu.provider={build:()=>new Yu};class kS extends Yu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof Qu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new hI(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new mv((s=>Qu.mi(s,t)),this.serializer)}}class Jf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=RS.bind(null,this.syncEngine),await iS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new oS})()}createDatastore(e){const t=vc(e.databaseInfo.databaseId),s=(function(l){return new zI(l)})(e.databaseInfo);return(function(l,h,d,g){return new qI(l,h,d,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,d){return new KI(s,o,l,h,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>hy(this.syncEngine,t,0)),(function(){return sy.v()?new sy:new bI})())}createSyncEngine(e,t){return(function(o,l,h,d,g,y,E){const T=new mS(o,l,h,d,g,y);return E&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Ie(t);ne(fs,"RemoteStore shutting down."),s.Ea.add(5),await Ja(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Jf.provider={build:()=>new Jf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="FirestoreClient";class DS{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=ud.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ne(Ni,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Ni,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Nd(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function mf(r,e){r.asyncQueue.verifyOperationInProgress(),ne(Ni,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await gv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function dy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await xS(r);ne(Ni,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>ay(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>ay(e.remoteStore,o))),r._onlineComponents=e}async function xS(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(Ni,"Using user provided OfflineComponentProvider");try{await mf(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Eo("Error using user provided cache. Falling back to memory cache: "+t),await mf(r,new Yu)}}else ne(Ni,"Using default OfflineComponentProvider"),await mf(r,new kS(void 0));return r._offlineComponents}async function Vv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(Ni,"Using user provided OnlineComponentProvider"),await dy(r,r._uninitializedComponentsProvider._online)):(ne(Ni,"Using default OnlineComponentProvider"),await dy(r,new Jf))),r._onlineComponents}function OS(r){return Vv(r).then((e=>e.syncEngine))}async function VS(r){const e=await Vv(r),t=e.eventManager;return t.onListen=gS.bind(null,e.syncEngine),t.onUnlisten=vS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ES.bind(null,e.syncEngine),t}function LS(r,e,t={}){const s=new Ei;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,d,g,y){const E=new NS({next:I=>{E.Nu(),h.enqueueAndForget((()=>lS(l,T))),I.fromCache&&g.source==="server"?y.reject(new ce(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new hS(d,E,{includeMetadataChanges:!0,qa:!0});return aS(l,T)})(await VS(r),r.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="firestore.googleapis.com",my=!0;class gy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ce(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mv,this.ssl=my}else this.host=e.host,this.ssl=e.ssl??my;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uI)throw new ce(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ww("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ce(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ce(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ce(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Mw;switch(s.type){case"firstParty":return new Bw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=py.get(t);s&&(ne("ComponentProvider","Removing Datastore"),py.delete(t),s.terminate())})(this),Promise.resolve()}}function MS(r,e,t,s={}){r=Si(r,Tc);const o=ps(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},d=`${e}:${t}`;o&&(rd(`https://${d}`),id("Firestore",!0)),l.host!==Mv&&l.host!==d&&Eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:d,ssl:o,emulatorOptions:s};if(!us(g,h)&&(r._setSettings(g),s.mockUserToken)){let y,E;if(typeof s.mockUserToken=="string")y=s.mockUserToken,E=Ft.MOCK_USER;else{y=d_(s.mockUserToken,r._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new ce(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Ft(T)}r._authCredentials=new bw(new R_(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ic(this.firestore,e,this._query)}}class _t{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Qa(t,_t._jsonSchema))return new _t(e,s||null,new pe(Xe.fromString(t.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:dt("string",_t._jsonSchemaVersion),referencePath:dt("string")};class wi extends Ic{constructor(e,t,s){super(e,t,q_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new pe(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}function bS(r,e,...t){if(r=St(r),C_("collection","path",e),r instanceof Tc){const s=Xe.fromString(e,...t);return Ng(s),new wi(r,null,s)}{if(!(r instanceof _t||r instanceof wi))throw new ce(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Xe.fromString(e,...t));return Ng(s),new wi(r.firestore,null,s)}}function Vd(r,e,...t){if(r=St(r),arguments.length===1&&(e=ud.newId()),C_("doc","path",e),r instanceof Tc){const s=Xe.fromString(e,...t);return kg(s),new _t(r,null,new pe(s))}{if(!(r instanceof _t||r instanceof wi))throw new ce(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Xe.fromString(e,...t));return kg(s),new _t(r.firestore,r instanceof wi?r.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="AsyncQueue";class _y{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _v(this,"async_queue_retry"),this._c=()=>{const s=pf();s&&ne(yy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=pf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=pf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ei;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ko(e))throw e;ne(yy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,xr("INTERNAL UNHANDLED ERROR: ",vy(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=kd.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:vy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function vy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class el extends Tc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new _y,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _y(e),this._firestoreClient=void 0,await e}}}function US(r,e){const t=typeof r=="object"?r:ad(),s=typeof r=="string"?r:ju,o=uc(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=c_("firestore");l&&MS(o,...l)}return o}function bv(r){if(r._terminated)throw new ce(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||FS(r),r._firestoreClient}function FS(r){const e=r._freezeSettings(),t=(function(o,l,h,d){return new rT(o,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Lv(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new DS(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(o){const l=o?._online.build();return{_offline:o?._offline.build(l),_online:l}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(xt.fromBase64String(e))}catch(t){throw new ce(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qa(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:dt("string",vn._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nr._jsonSchemaVersion}}static fromJSON(e){if(Qa(e,nr._jsonSchema))return new nr(e.latitude,e.longitude)}}nr._jsonSchemaVersion="firestore/geoPoint/1.0",nr._jsonSchema={type:dt("string",nr._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:rr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qa(e,rr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new rr(e.vectorValues);throw new ce(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rr._jsonSchemaVersion="firestore/vectorValue/1.0",rr._jsonSchema={type:dt("string",rr._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=/^__.*__$/;class zS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xa(e,this.data,t,this.fieldTransforms)}}class Uv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new xi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Fv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:r})}}class Md{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Md({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ju(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Fv(this.Ac)&&BS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class jS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||vc(e)}Cc(e,t,s,o=!1){return new Md({Ac:e,methodName:t,Dc:s,path:Dt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bv(r){const e=r._freezeSettings(),t=vc(r._databaseId);return new jS(r._databaseId,!!e.ignoreUndefinedProperties,t)}function $S(r,e,t,s,o,l={}){const h=r.Cc(l.merge||l.mergeFields?2:0,e,t,o);bd("Data must be an object, but it was:",h,s);const d=zv(s,h);let g,y;if(l.merge)g=new un(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const I=Zf(e,T,t);if(!h.contains(I))throw new ce(W.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);$v(E,I)||E.push(I)}g=new un(E),y=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,y=h.fieldTransforms;return new zS(new Jt(d),g,y)}class Ac extends Ld{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ac}}function HS(r,e,t,s){const o=r.Cc(1,e,t);bd("Data must be an object, but it was:",o,s);const l=[],h=Jt.empty();Di(s,((g,y)=>{const E=Ud(e,g,t);y=St(y);const T=o.yc(E);if(y instanceof Ac)l.push(E);else{const I=Rc(y,T);I!=null&&(l.push(E),h.set(E,I))}}));const d=new un(l);return new Uv(h,d,o.fieldTransforms)}function qS(r,e,t,s,o,l){const h=r.Cc(1,e,t),d=[Zf(e,s,t)],g=[o];if(l.length%2!=0)throw new ce(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)d.push(Zf(e,l[I])),g.push(l[I+1]);const y=[],E=Jt.empty();for(let I=d.length-1;I>=0;--I)if(!$v(y,d[I])){const L=d[I];let z=g[I];z=St(z);const $=h.yc(L);if(z instanceof Ac)y.push(L);else{const j=Rc(z,$);j!=null&&(y.push(L),E.set(L,j))}}const T=new un(y);return new Uv(E,T,h.fieldTransforms)}function Rc(r,e){if(jv(r=St(r)))return bd("Unsupported field value:",e,r),zv(r,e);if(r instanceof Ld)return(function(s,o){if(!Fv(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const d of s){let g=Rc(d,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=St(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return CT(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ye.fromDate(s);return{timestampValue:Gu(o.serializer,l)}}if(s instanceof Ye){const l=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Gu(o.serializer,l)}}if(s instanceof nr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vn)return{bytesValue:av(o.serializer,s._byteString)};if(s instanceof _t){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Ed(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof rr)return(function(h,d){return{mapValue:{fields:{[M_]:{stringValue:b_},[$u]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw d.Sc("VectorValues must only contain numeric values.");return gd(d.serializer,y)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${cd(s)}`)})(r,e)}function zv(r,e){const t={};return N_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(r,((s,o)=>{const l=Rc(o,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function jv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ye||r instanceof nr||r instanceof vn||r instanceof _t||r instanceof Ld||r instanceof rr)}function bd(r,e,t){if(!jv(t)||!P_(t)){const s=cd(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function Zf(r,e,t){if((e=St(e))instanceof Sc)return e._internalPath;if(typeof e=="string")return Ud(r,e);throw Ju("Field path arguments must be of type string or ",r,!1,void 0,t)}const WS=new RegExp("[~\\*/\\[\\]]");function Ud(r,e,t){if(e.search(WS)>=0)throw Ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Sc(...e.split("."))._internalPath}catch{throw Ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ju(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ce(W.INVALID_ARGUMENT,d+r+g)}function $v(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class KS extends Hv{data(){return super.data()}}function qv(r,e){return typeof e=="string"?Ud(r,e):e instanceof Sc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ce(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class QS{convertValue(e,t="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Di(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[$u].arrayValue?.values?.map((s=>lt(s.doubleValue)));return new rr(t)}convertGeoPoint(e){return new nr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=fc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ba(e));default:return null}}convertTimestamp(e){const t=Ri(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Xe.fromString(e);ze(dv(s),9688,{name:e});const o=new za(s.get(1),s.get(3)),l=new pe(s.popFirst(5));return o.isEqual(t)||xr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Au{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mo extends Hv{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(qv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=mo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}mo._jsonSchemaVersion="firestore/documentSnapshot/1.0",mo._jsonSchema={type:dt("string",mo._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Vu extends mo{data(e={}){return super.data(e)}}class go{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Au(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Vu(this._firestore,this._userDataWriter,s.key,s,new Au(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((d=>{const g=new Vu(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Au(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const g=new Vu(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Au(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return d.type!==0&&(y=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),E=h.indexOf(d.doc.key)),{type:YS(d.type),doc:g,oldIndex:y,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=go._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ud.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function YS(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}go._jsonSchemaVersion="firestore/querySnapshot/1.0",go._jsonSchema={type:dt("string",go._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class JS extends QS{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}function ZS(r){r=Si(r,Ic);const e=Si(r.firestore,el),t=bv(e),s=new JS(e);return GS(r._query),LS(t,r._query).then((o=>new go(e,s,r,o)))}function eA(r,e,t){r=Si(r,_t);const s=Si(r.firestore,el),o=XS(r.converter,e);return Fd(s,[$S(Bv(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,xn.none())])}function tA(r,e,t,...s){r=Si(r,_t);const o=Si(r.firestore,el),l=Bv(o);let h;return h=typeof(e=St(e))=="string"||e instanceof Sc?qS(l,"updateDoc",r._key,e,t,s):HS(l,"updateDoc",r._key,e),Fd(o,[h.toMutation(r._key,xn.exists(!0))])}function nA(r){return Fd(Si(r.firestore,el),[new yd(r._key,xn.none())])}function Fd(r,e){return(function(s,o){const l=new Ei;return s.asyncQueue.enqueueAndForget((async()=>wS(await OS(s),o,l))),l.promise})(bv(r),e)}(function(e,t=!0){(function(o){Co=o})(ms),cs(new Ii("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),d=new el(new Uw(s.getProvider("auth-internal")),new zw(h,s.getProvider("app-check-internal")),(function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ce(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new za(y.options.projectId,E)})(h,o),h);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Zn(Ag,Rg,e),Zn(Ag,Rg,"esm2020")})();function Wv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rA=Wv,Kv=new Ka("auth","Firebase",Wv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new sd("@firebase/auth");function iA(r,...e){Zu.logLevel<=Ne.WARN&&Zu.warn(`Auth (${ms}): ${r}`,...e)}function Lu(r,...e){Zu.logLevel<=Ne.ERROR&&Zu.error(`Auth (${ms}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(r,...e){throw Bd(r,...e)}function ir(r,...e){return Bd(r,...e)}function Gv(r,e,t){const s={...rA(),[e]:t};return new Ka("auth","Firebase",s).create(e,{appName:r.name})}function Ti(r){return Gv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Kv.create(r,...e)}function ye(r,e,...t){if(!r)throw Bd(e,...t)}function kr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Lu(e),new Error(e)}function Vr(r,e){r||kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){return typeof self<"u"&&self.location?.href||""}function sA(){return Ey()==="http:"||Ey()==="https:"}function Ey(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sA()||d1()||"connection"in navigator)?navigator.onLine:!0}function aA(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile=c1()||p1()}get(){return oA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(r,e){Vr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cA=new tl(3e4,6e4);function _s(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Oi(r,e,t,s,o={}){return Xv(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const d=Ga({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:g,...l};return f1()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&ps(r.emulatorConfig.host)&&(y.credentials="include"),Qv.fetch()(await Yv(r,r.config.apiHost,t,d),y)})}async function Xv(r,e,t){r._canInitEmulator=!1;const s={...lA,...e};try{const o=new fA(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Ru(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const d=l.ok?h.errorMessage:h.error.message,[g,y]=d.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Ru(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Ru(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Gv(r,E,y);On(r,E)}}catch(o){if(o instanceof ur)throw o;On(r,"network-request-failed",{message:String(o)})}}async function Cc(r,e,t,s,o={}){const l=await Oi(r,e,t,s,o);return"mfaPendingCredential"in l&&On(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function Yv(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?zd(r.config,o):`${r.config.apiScheme}://${o}`;return uA.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function hA(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ir(this.auth,"network-request-failed")),cA.get())})}}function Ru(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=ir(r,e,s);return o.customData._tokenResponse=t,o}function wy(r){return r!==void 0&&r.enterprise!==void 0}class dA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return hA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function pA(r,e){return Oi(r,"GET","/v2/recaptchaConfig",_s(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(r,e){return Oi(r,"POST","/v1/accounts:delete",e)}async function ec(r,e){return Oi(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gA(r,e=!1){const t=St(r),s=await t.getIdToken(e),o=jd(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:s,authTime:ba(gf(o.auth_time)),issuedAtTime:ba(gf(o.iat)),expirationTime:ba(gf(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function gf(r){return Number(r)*1e3}function jd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Lu("JWT malformed, contained fewer than 3 sections"),null;try{const o=l_(t);return o?JSON.parse(o):(Lu("Failed to decode base64 JWT payload"),null)}catch(o){return Lu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Ty(r){const e=jd(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ur&&yA(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function yA({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(r){const e=r.auth,t=await r.getIdToken(),s=await qa(r,ec(e,{idToken:t}));ye(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const l=o.providerUserInfo?.length?Jv(o.providerUserInfo):[],h=EA(r.providerData,l),d=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!h?.length,y=d?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new td(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,E)}async function vA(r){const e=St(r);await tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EA(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Jv(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(r,e){const t=await Xv(r,{},async()=>{const s=Ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await Yv(r,o,"/v1/token",`key=${l}`),d=await r._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:d,body:s};return r.emulatorConfig&&ps(r.emulatorConfig.host)&&(g.credentials="include"),Qv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function TA(r,e){return Oi(r,"POST","/v2/accounts:revokeToken",_s(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=Ty(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await wA(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new yo;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yo,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Nn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new _A(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new td(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await qa(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gA(this,e)}reload(){return vA(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await tc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Ti(this.auth));const e=await this.getIdToken();return await qa(this,mA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,d=t.tenantId??void 0,g=t._redirectEventId??void 0,y=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:T,emailVerified:I,isAnonymous:L,providerData:z,stsTokenManager:$}=t;ye(T&&$,e,"internal-error");const j=yo.fromJSON(this.name,$);ye(typeof T=="string",e,"internal-error"),hi(s,e.name),hi(o,e.name),ye(typeof I=="boolean",e,"internal-error"),ye(typeof L=="boolean",e,"internal-error"),hi(l,e.name),hi(h,e.name),hi(d,e.name),hi(g,e.name),hi(y,e.name),hi(E,e.name);const Y=new Nn({uid:T,auth:e,email:o,emailVerified:I,displayName:s,isAnonymous:L,photoURL:h,phoneNumber:l,tenantId:d,stsTokenManager:j,createdAt:y,lastLoginAt:E});return z&&Array.isArray(z)&&(Y.providerData=z.map(ie=>({...ie}))),g&&(Y._redirectEventId=g),Y}static async _fromIdTokenResponse(e,t,s=!1){const o=new yo;o.updateFromServerResponse(t);const l=new Nn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await tc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Jv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,d=new yo;d.updateFromIdToken(s);const g=new Nn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new td(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new Map;function Nr(r){Vr(r instanceof Function,"Expected a class definition");let e=Iy.get(r);return e?(Vr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Iy.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zv.type="NONE";const Sy=Zv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(r,e,t){return`firebase:${r}:${e}:${t}`}class _o{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Mu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Mu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ec(this.auth,{idToken:e}).catch(()=>{});return t?Nn._fromGetAccountInfoResponse(this.auth,t,e):null}return Nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new _o(Nr(Sy),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Nr(Sy);const h=Mu(s,e.config.apiKey,e.name);let d=null;for(const y of t)try{const E=await y._get(h);if(E){let T;if(typeof E=="string"){const I=await ec(e,{idToken:E}).catch(()=>{});if(!I)break;T=await Nn._fromGetAccountInfoResponse(e,I,E)}else T=Nn._fromJSON(e,E);y!==l&&(d=T),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new _o(l,e,s):(l=g[0],d&&await l._set(h,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new _o(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sE(e))return"Blackberry";if(oE(e))return"Webos";if(tE(e))return"Safari";if((e.includes("chrome/")||nE(e))&&!e.includes("edge/"))return"Chrome";if(iE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if(s?.length===2)return s[1]}return"Other"}function eE(r=zt()){return/firefox\//i.test(r)}function tE(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nE(r=zt()){return/crios\//i.test(r)}function rE(r=zt()){return/iemobile/i.test(r)}function iE(r=zt()){return/android/i.test(r)}function sE(r=zt()){return/blackberry/i.test(r)}function oE(r=zt()){return/webos/i.test(r)}function $d(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function IA(r=zt()){return $d(r)&&!!window.navigator?.standalone}function SA(){return m1()&&document.documentMode===10}function aE(r=zt()){return $d(r)||iE(r)||oE(r)||sE(r)||/windows phone/i.test(r)||rE(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(r,e=[]){let t;switch(r){case"Browser":t=Ay(zt());break;case"Worker":t=`${Ay(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ms}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,d)=>{try{const g=e(l);h(g)}catch(g){d(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(r,e={}){return Oi(r,"GET","/v2/passwordPolicy",_s(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=6;class PA{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??CA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ry(this),this.idTokenSubscription=new Ry(this),this.beforeStateQueue=new AA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await _o.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ec(this,{idToken:e}),s=await Nn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(_n(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,h=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===h)&&d?.user&&(s=d.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(Ti(this));const t=e?St(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Ti(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(Ti(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RA(this),t=new PA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ka("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await TA(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await _o.create(this,[Nr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(d,this,"internal-error"),d.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&iA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Do(r){return St(r)}class Ry{constructor(e){this.auth=e,this.observer=null,this.addObserver=I1(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NA(r){Pc=r}function uE(r){return Pc.loadJS(r)}function DA(){return Pc.recaptchaEnterpriseScript}function xA(){return Pc.gapiScript}function OA(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class VA{constructor(){this.enterprise=new LA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class LA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const MA="recaptcha-enterprise",cE="NO_RECAPTCHA";class bA{constructor(e){this.type=MA,this.auth=Do(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,d)=>{pA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new dA(g);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(g=>{d(g)})})}function o(l,h,d){const g=window.grecaptcha;wy(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(cE)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VA().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(d=>{if(!t&&wy(window.grecaptcha))o(d,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=DA();g.length!==0&&(g+=d),uE(g).then(()=>{o(d,l,h)}).catch(y=>{h(y)})}}).catch(d=>{h(d)})})}}async function Cy(r,e,t,s=!1,o=!1){const l=new bA(r);let h;if(o)h=cE;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const d={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const g=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const g=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Py(r,e,t,s,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Cy(r,e,t,t==="getOobCode");return s(r,l)}else return s(r,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Cy(r,e,t,t==="getOobCode");return s(r,h)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(r,e){const t=uc(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(us(l,e??{}))return o;On(o,"already-initialized")}return t.initialize({options:e})}function FA(r,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Nr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function BA(r,e,t){const s=Do(r);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=hE(e),{host:h,port:d}=zA(e),g=d===null?"":`:${d}`,y={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(us(y,s.config.emulator)&&us(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,ps(h)?(rd(`${l}//${h}${g}`),id("Auth",!0)):jA()}function hE(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function zA(r){const e=hE(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:ky(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:ky(h)}}}function ky(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function jA(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function $A(r,e){return Oi(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(r,e){return Cc(r,"POST","/v1/accounts:signInWithPassword",_s(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(r,e){return Cc(r,"POST","/v1/accounts:signInWithEmailLink",_s(r,e))}async function WA(r,e){return Cc(r,"POST","/v1/accounts:signInWithEmailLink",_s(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends Hd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Wa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Wa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Py(e,t,"signInWithPassword",HA);case"emailLink":return qA(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Py(e,s,"signUpPassword",$A);case"emailLink":return WA(e,{idToken:t,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(r,e){return Cc(r,"POST","/v1/accounts:signInWithIdp",_s(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="http://localhost";class ds extends Hd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):On("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const h=new ds(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return vo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,vo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vo(e,t)}buildRequest(){const e={requestUri:KA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ga(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QA(r){const e=Ca(Pa(r)).link,t=e?Ca(Pa(e)).deep_link_id:null,s=Ca(Pa(r)).deep_link_id;return(s?Ca(Pa(s)).link:null)||s||t||e||r}class qd{constructor(e){const t=Ca(Pa(e)),s=t.apiKey??null,o=t.oobCode??null,l=GA(t.mode??null);ye(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=QA(e);try{return new qd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.providerId=xo.PROVIDER_ID}static credential(e,t){return Wa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=qd.parseLink(t);return ye(s,"argument-error"),Wa._fromEmailAndCode(e,s.code,s.tenantId)}}xo.PROVIDER_ID="password";xo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends fE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends nl{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ds._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return di.credential(t,s)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends nl{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.GITHUB_SIGN_IN_METHOD="github.com";pi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends nl{constructor(){super("twitter.com")}static credential(e,t){return ds._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return mi.credential(t,s)}catch{return null}}}mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Nn._fromIdTokenResponse(e,s,o),h=Ny(s);return new Ro({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Ny(s);return new Ro({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Ny(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends ur{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,nc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new nc(e,t,s,o)}}function dE(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?nc._fromErrorAndOperation(r,l,e,s):l})}async function XA(r,e,t=!1){const s=await qa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ro._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(r,e,t=!1){const{auth:s}=r;if(_n(s.app))return Promise.reject(Ti(s));const o="reauthenticate";try{const l=await qa(r,dE(s,o,e,r),t);ye(l.idToken,s,"internal-error");const h=jd(l.idToken);ye(h,s,"internal-error");const{sub:d}=h;return ye(r.uid===d,s,"user-mismatch"),Ro._forOperation(r,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&On(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(r,e,t=!1){if(_n(r.app))return Promise.reject(Ti(r));const s="signIn",o=await dE(r,s,e),l=await Ro._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function JA(r,e){return pE(Do(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(r){const e=Do(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function eR(r,e,t){return _n(r.app)?Promise.reject(Ti(r)):JA(St(r),xo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ZA(r),s})}function tR(r,e,t,s){return St(r).onIdTokenChanged(e,t,s)}function nR(r,e,t){return St(r).beforeAuthStateChanged(e,t)}function rR(r,e,t,s){return St(r).onAuthStateChanged(e,t,s)}function iR(r){return St(r).signOut()}const rc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rc,"1"),this.storage.removeItem(rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=1e3,oR=10;class gE extends mE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=aE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,d,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);SA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,oR):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},sR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gE.type="LOCAL";const aR=gE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE extends mE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yE.type="SESSION";const _E=yE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new kc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const d=Array.from(h).map(async y=>y(t.origin,l)),g=await lR(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((d,g)=>{const y=Wd("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(I.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function cR(r){sr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function hR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fR(){return navigator?.serviceWorker?.controller||null}function dR(){return vE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="firebaseLocalStorageDb",pR=1,ic="firebaseLocalStorage",wE="fbase_key";class rl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nc(r,e){return r.transaction([ic],e?"readwrite":"readonly").objectStore(ic)}function mR(){const r=indexedDB.deleteDatabase(EE);return new rl(r).toPromise()}function nd(){const r=indexedDB.open(EE,pR);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(ic,{keyPath:wE})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(ic)?e(s):(s.close(),await mR(),e(await nd()))})})}async function Dy(r,e,t){const s=Nc(r,!0).put({[wE]:e,value:t});return new rl(s).toPromise()}async function gR(r,e){const t=Nc(r,!1).get(e),s=await new rl(t).toPromise();return s===void 0?null:s.value}function xy(r,e){const t=Nc(r,!0).delete(e);return new rl(t).toPromise()}const yR=800,_R=3;class TE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>_R)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(dR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await hR(),!this.activeServiceWorker)return;this.sender=new uR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nd();return await Dy(e,rc,"1"),await xy(e,rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Dy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>gR(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Nc(o,!1).getAll();return new rl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TE.type="LOCAL";const vR=TE;new tl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(r,e){return e?Nr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends Hd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wR(r){return pE(r.auth,new Kd(r),r.bypassAuthState)}function TR(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),YA(t,new Kd(r),r.bypassAuthState)}async function IR(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),XA(t,new Kd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:d}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wR;case"linkViaPopup":case"linkViaRedirect":return IR;case"reauthViaPopup":case"reauthViaRedirect":return TR;default:On(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=new tl(2e3,1e4);class fo extends IE{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,fo.currentPopupAction&&fo.currentPopupAction.cancel(),fo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=Wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SR.get())};e()}}fo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="pendingRedirect",bu=new Map;class RR extends IE{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const s=await CR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CR(r,e){const t=NR(e),s=kR(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function PR(r,e){bu.set(r._key(),e)}function kR(r){return Nr(r._redirectPersistence)}function NR(r){return Mu(AR,r.config.apiKey,r.name)}async function DR(r,e,t=!1){if(_n(r.app))return Promise.reject(Ti(r));const s=Do(r),o=ER(s,e),h=await new RR(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=600*1e3;class OR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!SE(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ir(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oy(e))}saveEventToCache(e){this.cachedEventUids.add(Oy(e)),this.lastProcessedEventTime=Date.now()}}function Oy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function SE({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function VR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SE(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(r,e={}){return Oi(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bR=/^https?/;async function UR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await LR(r);for(const t of e)try{if(FR(t))return}catch{}On(r,"unauthorized-domain")}function FR(r){const e=ed(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!bR.test(t))return!1;if(MR.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=new tl(3e4,6e4);function Vy(){const r=sr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function zR(r){return new Promise((e,t)=>{function s(){Vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vy(),t(ir(r,"network-request-failed"))},timeout:BR.get()})}if(sr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(sr().gapi?.load)s();else{const o=OA("iframefcb");return sr()[o]=()=>{gapi.load?s():t(ir(r,"network-request-failed"))},uE(`${xA()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw Uu=null,e})}let Uu=null;function jR(r){return Uu=Uu||zR(r),Uu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new tl(5e3,15e3),HR="__/auth/iframe",qR="emulator/auth/iframe",WR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GR(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?zd(e,qR):`https://${r.config.authDomain}/${HR}`,s={apiKey:e.apiKey,appName:r.name,v:ms},o=KR.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Ga(s).slice(1)}`}async function QR(r){const e=await jR(r),t=sr().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:GR(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WR,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=ir(r,"network-request-failed"),d=sr().setTimeout(()=>{l(h)},$R.get());function g(){sr().clearTimeout(d),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YR=500,JR=600,ZR="_blank",eC="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tC(r,e,t,s=YR,o=JR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const g={...XR,width:s.toString(),height:o.toString(),top:l,left:h},y=zt().toLowerCase();t&&(d=nE(y)?ZR:t),eE(y)&&(e=e||eC,g.scrollbars="yes");const E=Object.entries(g).reduce((I,[L,z])=>`${I}${L}=${z},`,"");if(IA(y)&&d!=="_self")return nC(e||"",d),new Ly(null);const T=window.open(e||"",d,E);ye(T,r,"popup-blocked");try{T.focus()}catch{}return new Ly(T)}function nC(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="__/auth/handler",iC="emulator/auth/handler",sC=encodeURIComponent("fac");async function My(r,e,t,s,o,l){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:ms,eventId:o};if(e instanceof fE){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",T1(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof nl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const d=h;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const g=await r._getAppCheckToken(),y=g?`#${sC}=${encodeURIComponent(g)}`:"";return`${oC(r)}?${Ga(d).slice(1)}${y}`}function oC({config:r}){return r.emulator?zd(r,iC):`https://${r.authDomain}/${rC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="webStorageSupport";class aC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_E,this._completeRedirectFn=DR,this._overrideRedirectResult=PR}async _openPopup(e,t,s,o){Vr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await My(e,t,s,ed(),o);return tC(e,l,Wd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await My(e,t,s,ed(),o);return cR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Vr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await QR(e),s=new OR(e);return t.register("authEvent",o=>(ye(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yf,{type:yf},o=>{const l=o?.[0]?.[yf];l!==void 0&&t(!!l),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=UR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return aE()||tE()||$d()}}const lC=aC;var by="@firebase/auth",Uy="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hC(r){cs(new Ii("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:d,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lE(r)},y=new kA(s,o,l,g);return FA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),cs(new Ii("auth-internal",e=>{const t=Do(e.getProvider("auth").getImmediate());return(s=>new uC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(by,Uy,cC(r)),Zn(by,Uy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=300,dC=f_("authIdTokenMaxAge")||fC;let Fy=null;const pC=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>dC)return;const o=t?.token;Fy!==o&&(Fy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function mC(r=ad()){const e=uc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=UA(r,{popupRedirectResolver:lC,persistence:[vR,aR,_E]}),s=f_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=pC(l.toString());nR(t,h,()=>h(t.currentUser)),tR(t,d=>h(d))}}const o=u_("auth");return o&&BA(t,`http://${o}`),t}function gC(){return document.getElementsByTagName("head")?.[0]??document}NA({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=ir("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",gC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hC("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="firebasestorage.googleapis.com",yC="storageBucket",_C=120*1e3,vC=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends ur{constructor(e,t,s=0){super(_f(e),`Firebase Storage: ${t} (${_f(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,cr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lr;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lr||(lr={}));function _f(r){return"storage/"+r}function EC(){const r="An unknown error occurred, please check the error payload for server response.";return new cr(lr.UNKNOWN,r)}function wC(){return new cr(lr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function TC(){return new cr(lr.CANCELED,"User canceled the upload/download.")}function IC(r){return new cr(lr.INVALID_URL,"Invalid URL '"+r+"'.")}function SC(r){return new cr(lr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function By(r){return new cr(lr.INVALID_ARGUMENT,r)}function RE(){return new cr(lr.APP_DELETED,"The Firebase app was deleted.")}function AC(r){return new cr(lr.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Dn.makeFromUrl(e,t)}catch{return new Dn(e,"")}if(s.path==="")return s;throw SC(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(fe){fe.path.charAt(fe.path.length-1)==="/"&&(fe.path_=fe.path_.slice(0,-1))}const h="(/(.*))?$",d=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function y(fe){fe.path_=decodeURIComponent(fe.path)}const E="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",L=new RegExp(`^https?://${T}/${E}/b/${o}/o${I}`,"i"),z={bucket:1,path:3},$=t===AE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,j="([^?#]*)",Y=new RegExp(`^https?://${$}/${o}/${j}`,"i"),he=[{regex:d,indices:g,postModify:l},{regex:L,indices:z,postModify:y},{regex:Y,indices:{bucket:1,path:2},postModify:y}];for(let fe=0;fe<he.length;fe++){const Re=he[fe],Ee=Re.regex.exec(e);if(Ee){const k=Ee[Re.indices.bucket];let S=Ee[Re.indices.path];S||(S=""),s=new Dn(k,S),Re.postModify(s);break}}if(s==null)throw IC(e);return s}}class RC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(r,e,t){let s=1,o=null,l=null,h=!1,d=0;function g(){return d===2}let y=!1;function E(...j){y||(y=!0,e.apply(null,j))}function T(j){o=setTimeout(()=>{o=null,r(L,g())},j)}function I(){l&&clearTimeout(l)}function L(j,...Y){if(y){I();return}if(j){I(),E.call(null,j,...Y);return}if(g()||h){I(),E.call(null,j,...Y);return}s<64&&(s*=2);let he;d===1?(d=2,he=0):he=(s+Math.random())*1e3,T(he)}let z=!1;function $(j){z||(z=!0,I(),!y&&(o!==null?(j||(d=2),clearTimeout(o),T(0)):j||(d=1)))}return T(0),l=setTimeout(()=>{h=!0,$(!0)},t),$}function PC(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(r){return r!==void 0}function zy(r,e,t,s){if(s<e)throw By(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>t)throw By(`Invalid value for '${r}'. Expected ${t} or less.`)}function NC(r){const e=encodeURIComponent;let t="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var sc;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(sc||(sc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,t,s,o,l,h,d,g,y,E,T,I=!0,L=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=d,this.errorCallback_=g,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=T,this.retry=I,this.isUsingEmulator=L,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((z,$)=>{this.resolve_=z,this.reject_=$,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Cu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=d=>{const g=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const d=l.getErrorCode()===sc.NO_ERROR,g=l.getStatus();if(!d||DC(g,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===sc.ABORT;s(!1,new Cu(!1,null,E));return}const y=this.successCodes_.indexOf(g)!==-1;s(!0,new Cu(y,l))})},t=(s,o)=>{const l=this.resolve_,h=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(d,d.getResponse());kC(g)?l(g):l()}catch(g){h(g)}else if(d!==null){const g=EC();g.serverResponse=d.getErrorText(),this.errorCallback_?h(this.errorCallback_(d,g)):h(g)}else if(o.canceled){const g=this.appDelete_?RE():TC();h(g)}else{const g=wC();h(g)}};this.canceled_?t(!1,new Cu(!1,null,!0)):this.backoffId_=CC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cu{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function OC(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function VC(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function LC(r,e){e&&(r["X-Firebase-GMPID"]=e)}function MC(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function bC(r,e,t,s,o,l,h=!0,d=!1){const g=NC(r.urlParams),y=r.url+g,E=Object.assign({},r.headers);return LC(E,e),OC(E,t),VC(E,l),MC(E,s),new xC(y,r.method,E,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function FC(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){this._service=e,t instanceof Dn?this._location=t:this._location=Dn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new oc(e,t)}get root(){const e=new Dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return FC(this._location.path)}get storage(){return this._service}get parent(){const e=UC(this._location.path);if(e===null)return null;const t=new Dn(this._location.bucket,e);return new oc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw AC(e)}}function jy(r,e){const t=e?.[yC];return t==null?null:Dn.makeFromBucketSpec(t,r)}function BC(r,e,t,s={}){r.host=`${e}:${t}`;const o=ps(e);o&&(rd(`https://${r.host}/b`),id("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:l}=s;l&&(r._overrideAuthToken=typeof l=="string"?l:d_(l,r.app.options.projectId))}class zC{constructor(e,t,s,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=AE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_C,this._maxUploadRetryTime=vC,this._requests=new Set,o!=null?this._bucket=Dn.makeFromBucketSpec(o,this._host):this._bucket=jy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dn.makeFromBucketSpec(this._url,e):this._bucket=jy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new oc(this,e)}_makeRequest(e,t,s,o,l=!0){if(this._deleted)return new RC(RE());{const h=bC(e,this._appId,s,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const $y="@firebase/storage",Hy="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="storage";function jC(r=ad(),e){r=St(r);const s=uc(r,CE).getImmediate({identifier:e}),o=c_("storage");return o&&$C(s,...o),s}function $C(r,e,t,s={}){BC(r,e,t,s)}function HC(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new zC(t,s,o,e,ms)}function qC(){cs(new Ii(CE,HC,"PUBLIC").setMultipleInstances(!0)),Zn($y,Hy,""),Zn($y,Hy,"esm2020")}qC();const WC={apiKey:"AIzaSy...xxxxxxxxxxxx",authDomain:"tu-proyecto.firebaseapp.com",projectId:"tu-proyecto",storageBucket:"tu-proyecto.appspot.com",messagingSenderId:"xxxxxxxxxxxx",appId:"1:xxxxxxxxxxxx:web:xxxxxxxxxxxx"},Gd=g_(WC),Qd=mC(Gd),Xd=US(Gd);jC(Gd);const PE=bS(Xd,"animales"),vf=async()=>(await ZS(PE)).docs.map(e=>({id:e.id,...e.data()})),KC=r=>{const e=Vd(Xd,"animales",r.id);return tA(e,r,{merge:!0})},GC=r=>{const e=Vd(PE,r.id);return eA(e,r)},QC=r=>{const e=Vd(Xd,"animales",r);return nA(e)},XC=(r,e)=>eR(Qd,r,e),YC=()=>iR(Qd),JC=r=>rR(Qd,r);function ZC({animal:r,onOpen:e,isAdmin:t,onEdit:s,onDelete:o}){return X.createElement("div",{className:"bg-blue-600 text-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center p-4 relative"},t&&X.createElement("div",{className:"absolute top-4 left-4 flex flex-col gap-2 z-10"},X.createElement("button",{onClick:l=>{l.stopPropagation(),s(r)},className:"w-10 h-10 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center hover:bg-opacity-100",title:"Editar"},X.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5"},X.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"}))),X.createElement("button",{onClick:l=>{l.stopPropagation(),o(r.id)},className:"w-10 h-10 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center hover:bg-opacity-100",title:"Eliminar"},X.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5"},X.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.54 0c.04.03.079.062.118.095m-1.18-.095a48.145 48.145 0 0 1-3.478-.397m15.708 0-1.08-1.173A1.125 1.125 0 0 0 16.31 4.23l-1.32.378m-1.32-.378L12.9 3.12a1.125 1.125 0 0 0-1.8 0L9.81 4.23m-1.32.378-1.08 1.173A1.125 1.125 0 0 0 6.19 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.54 0c.04.03.079.062.118.095m-1.18-.095a48.145 48.145 0 0 1-3.478-.397M15 8.25v9.75M8.25 8.25v9.75"})))),X.createElement("div",{className:"w-full h-48 rounded-2xl overflow-hidden mb-4 cursor-pointer",onClick:()=>e(r)},r.imageURL?X.createElement("img",{alt:r.nombre,src:r.imageURL,className:"w-full h-full object-cover transition-transform duration-300 hover:scale-110"}):X.createElement("div",{className:"w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-sm"},"Sin imagen")),X.createElement("div",{className:"text-center"},X.createElement("h3",{className:"text-xl font-extrabold uppercase"},r.nombre),X.createElement("div",{className:"text-sm opacity-80 uppercase"},r.tipo)))}function eP({animal:r,onClose:e}){return r?X.createElement("div",{className:"modal-backdrop",onClick:e},X.createElement("div",{className:"modal modal-animal",onClick:t=>t.stopPropagation()},X.createElement("div",{className:"modal-thumb"},r.image?X.createElement("img",{src:r.image,alt:r.name,className:"object-cover h-full w-full"}):X.createElement("div",{className:"text-sm text-gray-400"},"Sin imagen")),X.createElement("div",{className:"modal-content"},X.createElement("h2",{className:"text-2xl font-extrabold text-sky-700"},r.name),X.createElement("div",{className:"text-sm text-gray-600 mt-1"},r.type," • ",r.habitat),X.createElement("p",{className:"mt-4 text-gray-700 leading-relaxed"},r.description),X.createElement("button",{onClick:e,className:"mt-6 w-full px-4 py-2 rounded-lg bg-gray-600 text-white font-bold transition-transform transform hover:scale-105"},"Cerrar")))):null}function tP({onClose:r,onSuccess:e}){const[t,s]=gt.useState(""),[o,l]=gt.useState(""),[h,d]=gt.useState(!1),g=async()=>{d(!0);try{await e(t,o)}catch{alert("Error: Email o contraseña incorrectos."),d(!1)}};return X.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",onClick:r},X.createElement("div",{className:"bg-yellow-400 p-8 rounded-2xl shadow-lg w-full max-w-md",onClick:y=>y.stopPropagation()},X.createElement("h2",{className:"text-3xl font-extrabold text-black text-center mb-6"},"MODO ADMINISTRADOR"),X.createElement("label",{className:"block text-black font-bold mb-2",htmlFor:"email"},"CLAVE (Email)"),X.createElement("input",{id:"email",type:"email",value:t,onChange:y=>s(y.target.value),placeholder:"admin@angostura.cl",className:"w-full p-3 rounded-lg border-2 border-black text-black"}),X.createElement("label",{className:"block text-black font-bold mb-2 mt-4",htmlFor:"password"},"CLAVE (Contraseña)"),X.createElement("input",{id:"password",type:"password",value:o,onChange:y=>l(y.target.value),onKeyDown:y=>y.key==="Enter"&&g(),className:"w-full p-3 rounded-lg border-2 border-black text-black"}),X.createElement("div",{className:"flex justify-end gap-4 mt-8"},X.createElement("button",{onClick:r,disabled:h,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg shadow hover:bg-gray-700 transition"},"Cancelar"),X.createElement("button",{onClick:g,disabled:h,className:"px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"},h?"Ingresando...":"Ingresar"))))}function nP({initialData:r,onClose:e,onSave:t}){const[s,o]=gt.useState(r);gt.useEffect(()=>{o(r)},[r]);function l(g){const{name:y,value:E}=g.target;o(T=>({...T,[y]:E}))}function h(){t(s)}const d=({label:g,name:y,value:E,onChange:T,placeholder:I="",rows:L=1})=>X.createElement("label",{className:"block mb-3"},X.createElement("span",{className:"text-gray-700 font-bold"},g),L>1?X.createElement("textarea",{name:y,value:E,onChange:T,placeholder:I,rows:L,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"}):X.createElement("input",{type:"text",name:y,value:E,onChange:T,placeholder:I,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"}));return X.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",onClick:e},X.createElement("div",{className:"bg-lime-100 border-8 border-lime-300 rounded-3xl p-8 w-full max-w-3xl relative shadow-lg h-[90vh] overflow-y-auto",onClick:g=>g.stopPropagation()},X.createElement("h2",{className:"text-2xl font-bold mb-4 text-lime-800"},r.isNew?"Añadir Nuevo Animal":"Editar Animal"),X.createElement("div",{className:"grid grid-cols-2 gap-x-6"},X.createElement(d,{label:"Nombre",name:"nombre",value:s.nombre,onChange:l,placeholder:"Perdiz Chilena"}),X.createElement(d,{label:"Nombre Científico",name:"nombreCientifico",value:s.nombreCientifico,onChange:l,placeholder:"Nothoprocta perdicaria"}),X.createElement(d,{label:"Tipo",name:"tipo",value:s.tipo,onChange:l,placeholder:"Ave"}),X.createElement(d,{label:"URL de Imagen",name:"imageURL",value:s.imageURL,onChange:l,placeholder:"https://..."})),X.createElement("hr",{className:"my-4 border-lime-300"}),X.createElement(d,{label:"Dónde vive",name:"dondeVive",value:s.dondeVive,onChange:l,placeholder:"En Chile, desde Atacama hasta el Biobío...",rows:2}),X.createElement(d,{label:"Cómo es",name:"comoEs",value:s.comoEs,onChange:l,placeholder:"Pequeña, de color café...",rows:2}),X.createElement(d,{label:"Qué come",name:"queCome",value:s.queCome,onChange:l,placeholder:"Semillas, raíces, insectos...",rows:2}),X.createElement(d,{label:"Reproducción",name:"reproduccion",value:s.reproduccion,onChange:l,placeholder:"Pone hasta 12 huevos...",rows:2}),X.createElement(d,{label:"Dato curioso",name:"datoCurioso",value:s.datoCurioso,onChange:l,placeholder:"Su silbido es fuerte...",rows:2}),X.createElement("div",{className:"flex justify-end gap-4 mt-6"},X.createElement("button",{onClick:e,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg shadow hover:bg-gray-700 transition"},"Cancelar"),X.createElement("button",{onClick:h,className:"px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"},"Guardar"))))}var ao={},Ef={exports:{}},wf,qy;function rP(){if(qy)return wf;qy=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return wf=r,wf}var Tf,Wy;function iP(){if(Wy)return Tf;Wy=1;var r=rP();function e(){}function t(){}return t.resetWarningCache=e,Tf=function(){function s(h,d,g,y,E,T){if(T!==r){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}s.isRequired=s;function o(){return s}var l={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},Tf}var Ky;function kE(){return Ky||(Ky=1,Ef.exports=iP()()),Ef.exports}var If,Gy;function NE(){return Gy||(Gy=1,If={L:1,M:0,Q:3,H:2}),If}var Sf,Qy;function DE(){return Qy||(Qy=1,Sf={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}),Sf}var Af,Xy;function sP(){if(Xy)return Af;Xy=1;var r=DE();function e(t){this.mode=r.MODE_8BIT_BYTE,this.data=t}return e.prototype={getLength:function(t){return this.data.length},write:function(t){for(var s=0;s<this.data.length;s++)t.put(this.data.charCodeAt(s),8)}},Af=e,Af}var Rf,Yy;function oP(){if(Yy)return Rf;Yy=1;var r=NE();function e(t,s){this.totalCount=t,this.dataCount=s}return e.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e.getRSBlocks=function(t,s){var o=e.getRsBlockTable(t,s);if(o==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+s);for(var l=o.length/3,h=new Array,d=0;d<l;d++)for(var g=o[d*3+0],y=o[d*3+1],E=o[d*3+2],T=0;T<g;T++)h.push(new e(y,E));return h},e.getRsBlockTable=function(t,s){switch(s){case r.L:return e.RS_BLOCK_TABLE[(t-1)*4+0];case r.M:return e.RS_BLOCK_TABLE[(t-1)*4+1];case r.Q:return e.RS_BLOCK_TABLE[(t-1)*4+2];case r.H:return e.RS_BLOCK_TABLE[(t-1)*4+3];default:return}},Rf=e,Rf}var Cf,Jy;function aP(){if(Jy)return Cf;Jy=1;function r(){this.buffer=new Array,this.length=0}return r.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(var s=0;s<t;s++)this.putBit((e>>>t-s-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Cf=r,Cf}var Pf,Zy;function xE(){if(Zy)return Pf;Zy=1;for(var r={glog:function(t){if(t<1)throw new Error("glog("+t+")");return r.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},e=0;e<8;e++)r.EXP_TABLE[e]=1<<e;for(var e=8;e<256;e++)r.EXP_TABLE[e]=r.EXP_TABLE[e-4]^r.EXP_TABLE[e-5]^r.EXP_TABLE[e-6]^r.EXP_TABLE[e-8];for(var e=0;e<255;e++)r.LOG_TABLE[r.EXP_TABLE[e]]=e;return Pf=r,Pf}var kf,e_;function OE(){if(e_)return kf;e_=1;var r=xE();function e(t,s){if(t.length==null)throw new Error(t.length+"/"+s);for(var o=0;o<t.length&&t[o]==0;)o++;this.num=new Array(t.length-o+s);for(var l=0;l<t.length-o;l++)this.num[l]=t[l+o]}return e.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var s=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var l=0;l<t.getLength();l++)s[o+l]^=r.gexp(r.glog(this.get(o))+r.glog(t.get(l)));return new e(s,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var s=r.glog(this.get(0))-r.glog(t.get(0)),o=new Array(this.getLength()),l=0;l<this.getLength();l++)o[l]=this.get(l);for(var l=0;l<t.getLength();l++)o[l]^=r.gexp(r.glog(t.get(l))+s);return new e(o,0).mod(t)}},kf=e,kf}var Nf,t_;function lP(){if(t_)return Nf;t_=1;var r=DE(),e=OE(),t=xE(),s={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},o={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(l){for(var h=l<<10;o.getBCHDigit(h)-o.getBCHDigit(o.G15)>=0;)h^=o.G15<<o.getBCHDigit(h)-o.getBCHDigit(o.G15);return(l<<10|h)^o.G15_MASK},getBCHTypeNumber:function(l){for(var h=l<<12;o.getBCHDigit(h)-o.getBCHDigit(o.G18)>=0;)h^=o.G18<<o.getBCHDigit(h)-o.getBCHDigit(o.G18);return l<<12|h},getBCHDigit:function(l){for(var h=0;l!=0;)h++,l>>>=1;return h},getPatternPosition:function(l){return o.PATTERN_POSITION_TABLE[l-1]},getMask:function(l,h,d){switch(l){case s.PATTERN000:return(h+d)%2==0;case s.PATTERN001:return h%2==0;case s.PATTERN010:return d%3==0;case s.PATTERN011:return(h+d)%3==0;case s.PATTERN100:return(Math.floor(h/2)+Math.floor(d/3))%2==0;case s.PATTERN101:return h*d%2+h*d%3==0;case s.PATTERN110:return(h*d%2+h*d%3)%2==0;case s.PATTERN111:return(h*d%3+(h+d)%2)%2==0;default:throw new Error("bad maskPattern:"+l)}},getErrorCorrectPolynomial:function(l){for(var h=new e([1],0),d=0;d<l;d++)h=h.multiply(new e([1,t.gexp(d)],0));return h},getLengthInBits:function(l,h){if(1<=h&&h<10)switch(l){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:return 8;case r.MODE_KANJI:return 8;default:throw new Error("mode:"+l)}else if(h<27)switch(l){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+l)}else if(h<41)switch(l){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+l)}else throw new Error("type:"+h)},getLostPoint:function(l){for(var h=l.getModuleCount(),d=0,g=0;g<h;g++)for(var y=0;y<h;y++){for(var E=0,T=l.isDark(g,y),I=-1;I<=1;I++)if(!(g+I<0||h<=g+I))for(var L=-1;L<=1;L++)y+L<0||h<=y+L||I==0&&L==0||T==l.isDark(g+I,y+L)&&E++;E>5&&(d+=3+E-5)}for(var g=0;g<h-1;g++)for(var y=0;y<h-1;y++){var z=0;l.isDark(g,y)&&z++,l.isDark(g+1,y)&&z++,l.isDark(g,y+1)&&z++,l.isDark(g+1,y+1)&&z++,(z==0||z==4)&&(d+=3)}for(var g=0;g<h;g++)for(var y=0;y<h-6;y++)l.isDark(g,y)&&!l.isDark(g,y+1)&&l.isDark(g,y+2)&&l.isDark(g,y+3)&&l.isDark(g,y+4)&&!l.isDark(g,y+5)&&l.isDark(g,y+6)&&(d+=40);for(var y=0;y<h;y++)for(var g=0;g<h-6;g++)l.isDark(g,y)&&!l.isDark(g+1,y)&&l.isDark(g+2,y)&&l.isDark(g+3,y)&&l.isDark(g+4,y)&&!l.isDark(g+5,y)&&l.isDark(g+6,y)&&(d+=40);for(var $=0,y=0;y<h;y++)for(var g=0;g<h;g++)l.isDark(g,y)&&$++;var j=Math.abs(100*$/h/h-50)/5;return d+=j*10,d}};return Nf=o,Nf}var Df,n_;function uP(){if(n_)return Df;n_=1;var r=sP(),e=oP(),t=aP(),s=lP(),o=OE();function l(d,g){this.typeNumber=d,this.errorCorrectLevel=g,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var h=l.prototype;return h.addData=function(d){var g=new r(d);this.dataList.push(g),this.dataCache=null},h.isDark=function(d,g){if(d<0||this.moduleCount<=d||g<0||this.moduleCount<=g)throw new Error(d+","+g);return this.modules[d][g]},h.getModuleCount=function(){return this.moduleCount},h.make=function(){if(this.typeNumber<1){var d=1;for(d=1;d<40;d++){for(var g=e.getRSBlocks(d,this.errorCorrectLevel),y=new t,E=0,T=0;T<g.length;T++)E+=g[T].dataCount;for(var T=0;T<this.dataList.length;T++){var I=this.dataList[T];y.put(I.mode,4),y.put(I.getLength(),s.getLengthInBits(I.mode,d)),I.write(y)}if(y.getLengthInBits()<=E*8)break}this.typeNumber=d}this.makeImpl(!1,this.getBestMaskPattern())},h.makeImpl=function(d,g){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var y=0;y<this.moduleCount;y++){this.modules[y]=new Array(this.moduleCount);for(var E=0;E<this.moduleCount;E++)this.modules[y][E]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(d,g),this.typeNumber>=7&&this.setupTypeNumber(d),this.dataCache==null&&(this.dataCache=l.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,g)},h.setupPositionProbePattern=function(d,g){for(var y=-1;y<=7;y++)if(!(d+y<=-1||this.moduleCount<=d+y))for(var E=-1;E<=7;E++)g+E<=-1||this.moduleCount<=g+E||(0<=y&&y<=6&&(E==0||E==6)||0<=E&&E<=6&&(y==0||y==6)||2<=y&&y<=4&&2<=E&&E<=4?this.modules[d+y][g+E]=!0:this.modules[d+y][g+E]=!1)},h.getBestMaskPattern=function(){for(var d=0,g=0,y=0;y<8;y++){this.makeImpl(!0,y);var E=s.getLostPoint(this);(y==0||d>E)&&(d=E,g=y)}return g},h.createMovieClip=function(d,g,y){var E=d.createEmptyMovieClip(g,y),T=1;this.make();for(var I=0;I<this.modules.length;I++)for(var L=I*T,z=0;z<this.modules[I].length;z++){var $=z*T,j=this.modules[I][z];j&&(E.beginFill(0,100),E.moveTo($,L),E.lineTo($+T,L),E.lineTo($+T,L+T),E.lineTo($,L+T),E.endFill())}return E},h.setupTimingPattern=function(){for(var d=8;d<this.moduleCount-8;d++)this.modules[d][6]==null&&(this.modules[d][6]=d%2==0);for(var g=8;g<this.moduleCount-8;g++)this.modules[6][g]==null&&(this.modules[6][g]=g%2==0)},h.setupPositionAdjustPattern=function(){for(var d=s.getPatternPosition(this.typeNumber),g=0;g<d.length;g++)for(var y=0;y<d.length;y++){var E=d[g],T=d[y];if(this.modules[E][T]==null)for(var I=-2;I<=2;I++)for(var L=-2;L<=2;L++)I==-2||I==2||L==-2||L==2||I==0&&L==0?this.modules[E+I][T+L]=!0:this.modules[E+I][T+L]=!1}},h.setupTypeNumber=function(d){for(var g=s.getBCHTypeNumber(this.typeNumber),y=0;y<18;y++){var E=!d&&(g>>y&1)==1;this.modules[Math.floor(y/3)][y%3+this.moduleCount-8-3]=E}for(var y=0;y<18;y++){var E=!d&&(g>>y&1)==1;this.modules[y%3+this.moduleCount-8-3][Math.floor(y/3)]=E}},h.setupTypeInfo=function(d,g){for(var y=this.errorCorrectLevel<<3|g,E=s.getBCHTypeInfo(y),T=0;T<15;T++){var I=!d&&(E>>T&1)==1;T<6?this.modules[T][8]=I:T<8?this.modules[T+1][8]=I:this.modules[this.moduleCount-15+T][8]=I}for(var T=0;T<15;T++){var I=!d&&(E>>T&1)==1;T<8?this.modules[8][this.moduleCount-T-1]=I:T<9?this.modules[8][15-T-1+1]=I:this.modules[8][15-T-1]=I}this.modules[this.moduleCount-8][8]=!d},h.mapData=function(d,g){for(var y=-1,E=this.moduleCount-1,T=7,I=0,L=this.moduleCount-1;L>0;L-=2)for(L==6&&L--;;){for(var z=0;z<2;z++)if(this.modules[E][L-z]==null){var $=!1;I<d.length&&($=(d[I]>>>T&1)==1);var j=s.getMask(g,E,L-z);j&&($=!$),this.modules[E][L-z]=$,T--,T==-1&&(I++,T=7)}if(E+=y,E<0||this.moduleCount<=E){E-=y,y=-y;break}}},l.PAD0=236,l.PAD1=17,l.createData=function(d,g,y){for(var E=e.getRSBlocks(d,g),T=new t,I=0;I<y.length;I++){var L=y[I];T.put(L.mode,4),T.put(L.getLength(),s.getLengthInBits(L.mode,d)),L.write(T)}for(var z=0,I=0;I<E.length;I++)z+=E[I].dataCount;if(T.getLengthInBits()>z*8)throw new Error("code length overflow. ("+T.getLengthInBits()+">"+z*8+")");for(T.getLengthInBits()+4<=z*8&&T.put(0,4);T.getLengthInBits()%8!=0;)T.putBit(!1);for(;!(T.getLengthInBits()>=z*8||(T.put(l.PAD0,8),T.getLengthInBits()>=z*8));)T.put(l.PAD1,8);return l.createBytes(T,E)},l.createBytes=function(d,g){for(var y=0,E=0,T=0,I=new Array(g.length),L=new Array(g.length),z=0;z<g.length;z++){var $=g[z].dataCount,j=g[z].totalCount-$;E=Math.max(E,$),T=Math.max(T,j),I[z]=new Array($);for(var Y=0;Y<I[z].length;Y++)I[z][Y]=255&d.buffer[Y+y];y+=$;var ie=s.getErrorCorrectPolynomial(j),he=new o(I[z],ie.getLength()-1),fe=he.mod(ie);L[z]=new Array(ie.getLength()-1);for(var Y=0;Y<L[z].length;Y++){var Re=Y+fe.getLength()-L[z].length;L[z][Y]=Re>=0?fe.get(Re):0}}for(var Ee=0,Y=0;Y<g.length;Y++)Ee+=g[Y].totalCount;for(var k=new Array(Ee),S=0,Y=0;Y<E;Y++)for(var z=0;z<g.length;z++)Y<I[z].length&&(k[S++]=I[z][Y]);for(var Y=0;Y<T;Y++)for(var z=0;z<g.length;z++)Y<L[z].length&&(k[S++]=L[z][Y]);return k},Df=l,Df}var Pu={},r_;function cP(){if(r_)return Pu;r_=1,Object.defineProperty(Pu,"__esModule",{value:!0});var r=Object.assign||function(y){for(var E=1;E<arguments.length;E++){var T=arguments[E];for(var I in T)Object.prototype.hasOwnProperty.call(T,I)&&(y[I]=T[I])}return y},e=kE(),t=l(e),s=ac(),o=l(s);function l(y){return y&&y.__esModule?y:{default:y}}function h(y,E){var T={};for(var I in y)E.indexOf(I)>=0||Object.prototype.hasOwnProperty.call(y,I)&&(T[I]=y[I]);return T}var d={bgColor:t.default.oneOfType([t.default.object,t.default.string]).isRequired,bgD:t.default.string.isRequired,fgColor:t.default.oneOfType([t.default.object,t.default.string]).isRequired,fgD:t.default.string.isRequired,size:t.default.number.isRequired,title:t.default.string,viewBoxSize:t.default.number.isRequired,xmlns:t.default.string},g=(0,s.forwardRef)(function(y,E){var T=y.bgColor,I=y.bgD,L=y.fgD,z=y.fgColor,$=y.size,j=y.title,Y=y.viewBoxSize,ie=y.xmlns,he=ie===void 0?"http://www.w3.org/2000/svg":ie,fe=h(y,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize","xmlns"]);return o.default.createElement("svg",r({},fe,{height:$,ref:E,viewBox:"0 0 "+Y+" "+Y,width:$,xmlns:he}),j?o.default.createElement("title",null,j):null,o.default.createElement("path",{d:I,fill:T}),o.default.createElement("path",{d:L,fill:z}))});return g.displayName="QRCodeSvg",g.propTypes=d,Pu.default=g,Pu}var i_;function hP(){if(i_)return ao;i_=1,Object.defineProperty(ao,"__esModule",{value:!0}),ao.QRCode=void 0;var r=Object.assign||function($){for(var j=1;j<arguments.length;j++){var Y=arguments[j];for(var ie in Y)Object.prototype.hasOwnProperty.call(Y,ie)&&($[ie]=Y[ie])}return $},e=kE(),t=T(e),s=NE(),o=T(s),l=uP(),h=T(l),d=ac(),g=T(d),y=cP(),E=T(y);function T($){return $&&$.__esModule?$:{default:$}}function I($,j){var Y={};for(var ie in $)j.indexOf(ie)>=0||Object.prototype.hasOwnProperty.call($,ie)&&(Y[ie]=$[ie]);return Y}var L={bgColor:t.default.oneOfType([t.default.object,t.default.string]),fgColor:t.default.oneOfType([t.default.object,t.default.string]),level:t.default.string,size:t.default.number,value:t.default.string.isRequired},z=(0,d.forwardRef)(function($,j){var Y=$.bgColor,ie=Y===void 0?"#FFFFFF":Y,he=$.fgColor,fe=he===void 0?"#000000":he,Re=$.level,Ee=Re===void 0?"L":Re,k=$.size,S=k===void 0?256:k,C=$.value,x=I($,["bgColor","fgColor","level","size","value"]),N=new h.default(-1,o.default[Ee]);N.addData(C),N.make();var O=N.modules;return g.default.createElement(E.default,r({},x,{bgColor:ie,bgD:O.map(function(R,oe){return R.map(function(Ve,$e){return Ve?"":"M "+$e+" "+oe+" l 1 0 0 1 -1 0 Z"}).join(" ")}).join(" "),fgColor:fe,fgD:O.map(function(R,oe){return R.map(function(Ve,$e){return Ve?"M "+$e+" "+oe+" l 1 0 0 1 -1 0 Z":""}).join(" ")}).join(" "),ref:j,size:S,viewBoxSize:O.length}))});return ao.QRCode=z,z.displayName="QRCode",z.propTypes=L,ao.default=z,ao}var fP=hP();const dP=s_(fP);function pP({onClose:r}){const e=window.location.href;return X.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",onClick:r},X.createElement("div",{className:"bg-white p-8 rounded-2xl flex flex-col items-center gap-4",onClick:t=>t.stopPropagation()},X.createElement("h2",{className:"text-xl font-bold text-gray-800"},"Compartir Pantalla Interactiva"),X.createElement("div",{className:"p-4 bg-white border-4 border-red-500 rounded-lg"},X.createElement(dP,{value:e,size:200})),X.createElement("p",{className:"text-gray-600"},"Escanea el código para ver esta página."),X.createElement("button",{onClick:r,className:"mt-2 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"},"Cerrar")))}const mP="/volver.png";function gP(){const[r,e]=gt.useState([]),[t,s]=gt.useState([]),[o,l]=gt.useState(""),[h,d]=gt.useState("Todos"),[g,y]=gt.useState(!0),[E,T]=gt.useState(null),[I,L]=gt.useState(null),[z,$]=gt.useState(!1),[j,Y]=gt.useState(!1),[ie,he]=gt.useState(!1),[fe,Re]=gt.useState(!1);gt.useEffect(()=>{(async()=>{y(!0);const $e=await vf();e($e),s($e),y(!1)})();const Ve=JC($e=>{Re(!!$e)});return()=>Ve()},[]),gt.useEffect(()=>{let oe=r;h!=="Todos"&&(oe=oe.filter(Ve=>Ve.tipo===h)),o&&(oe=oe.filter(Ve=>Ve.nombre.toLowerCase().includes(o.toLowerCase()))),s(oe)},[o,h,r]);const Ee=oe=>{l(oe)},k=oe=>{d(oe)},S=async(oe,Ve)=>{try{await XC(oe,Ve),Y(!1)}catch($e){alert("Error: "+$e.message)}},C=async()=>{await YC()},x=async oe=>{oe.isNew?(delete oe.isNew,await GC(oe)):await KC(oe);const Ve=await vf();e(Ve),$(!1),L(null)},N=async oe=>{if(window.confirm("¿Estás seguro de que quieres eliminar este animal?")){await QC(oe);const Ve=await vf();e(Ve)}},O=()=>{L({id:J0(),nombre:"",nombreCientifico:"",tipo:"Ave",dondeVive:"",comoEs:"",queCome:"",reproduccion:"",datoCurioso:"",imageURL:"",isNew:!0}),$(!0)},R=oe=>{L(oe),$(!0)};return X.createElement("div",{className:"min-h-screen bg-gray-100"},X.createElement("nav",{className:"bg-blue-500 p-4 shadow-md sticky top-0 z-40"},X.createElement("div",{className:"container mx-auto flex justify-between items-center"},X.createElement("img",{src:"/logo-angostura.png",alt:"Angostura del Biobío",className:"h-12"})," ",X.createElement("div",{className:"relative"},X.createElement("input",{type:"text",placeholder:"BUSCAR",className:"px-4 py-2 rounded-full w-64 text-sm",onChange:oe=>Ee(oe.target.value)}),X.createElement("span",{className:"absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"},"🔍")),X.createElement("div",{className:"flex items-center gap-4"},X.createElement("button",{className:"flex items-center gap-2 text-white font-semibold",onClick:()=>he(!0)},"COMPARTIR PANTALLA INTERACTIVA",X.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6"},X.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.186 2.25 2.25 0 0 0-3.933 2.186Z"}))),fe?X.createElement("button",{onClick:C,className:"p-2 rounded-full bg-red-500 text-white",title:"Salir Modo Admin"},X.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6"},X.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"}))):X.createElement("button",{onClick:()=>Y(!0),className:"p-2 rounded-full bg-white text-blue-500",title:"Modo Administrador"},X.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6"},X.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))),fe&&X.createElement("button",{onClick:O,className:"p-2 rounded-full bg-green-500 text-white",title:"Añadir Animal"},X.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6"},X.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})))))),X.createElement("div",{className:"container mx-auto p-4 flex justify-center gap-3"},["Todos","Aves","Mamíferos","Reptiles","Anfibios","Peces"].map(oe=>X.createElement("button",{key:oe,onClick:()=>k(oe),className:`px-6 py-2 rounded-full font-bold text-sm shadow
              ${h===oe?"bg-red-500 text-white":"bg-white text-gray-700 hover:bg-gray-200"}
            `},oe.toUpperCase()))),X.createElement("main",{className:"container mx-auto p-4"},g?X.createElement("div",{className:"text-center text-gray-500"},"Cargando animales..."):X.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},t.map(oe=>X.createElement(ZC,{key:oe.id,animal:oe,isAdmin:fe,onOpen:()=>T(oe),onEdit:()=>R(oe),onDelete:()=>N(oe.id)})))),E&&X.createElement(eP,{animal:E,onClose:()=>T(null),volverImg:mP}),j&&X.createElement(tP,{onClose:()=>Y(!1),onSuccess:S}),ie&&X.createElement(pP,{onClose:()=>he(!1)}),z&&X.createElement(nP,{initialData:I,onClose:()=>{$(!1),L(null)},onSave:x}))}W0.createRoot(document.getElementById("root")).render(X.createElement(X.StrictMode,null,X.createElement(gP,null)));
