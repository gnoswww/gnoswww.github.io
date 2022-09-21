var by=Object.defineProperty;var Cy=(t,e,n)=>e in t?by(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var E=(t,e,n)=>(Cy(t,typeof e!="symbol"?e+"":e,n),n);const Ty=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Ty();function Ay(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xv={exports:{}},yv={},he={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),Py=Symbol.for("react.portal"),Ly=Symbol.for("react.fragment"),Ry=Symbol.for("react.strict_mode"),Dy=Symbol.for("react.profiler"),Iy=Symbol.for("react.provider"),Oy=Symbol.for("react.context"),ky=Symbol.for("react.forward_ref"),zy=Symbol.for("react.suspense"),Fy=Symbol.for("react.memo"),Ny=Symbol.for("react.lazy"),Zp=Symbol.iterator;function By(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var Sv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wv=Object.assign,Mv={};function wo(t,e,n){this.props=t,this.context=e,this.refs=Mv,this.updater=n||Sv}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ev(){}Ev.prototype=wo.prototype;function gh(t,e,n){this.props=t,this.context=e,this.refs=Mv,this.updater=n||Sv}var vh=gh.prototype=new Ev;vh.constructor=gh;wv(vh,wo.prototype);vh.isPureReactComponent=!0;var Qp=Array.isArray,bv=Object.prototype.hasOwnProperty,_h={current:null},Cv={key:!0,ref:!0,__self:!0,__source:!0};function Tv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bv.call(e,i)&&!Cv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ba,type:t,key:s,ref:o,props:r,_owner:_h.current}}function Uy(t,e){return{$$typeof:Ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ba}function Gy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jp=/\/+/g;function Fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gy(""+t.key):e.toString(36)}function Ul(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ba:case Py:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Fu(o,0):i,Qp(r)?(n="",t!=null&&(n=t.replace(Jp,"$&/")+"/"),Ul(r,e,n,"",function(c){return c})):r!=null&&(xh(r)&&(r=Uy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Jp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Qp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Fu(s,a);o+=Ul(s,e,n,l,r)}else if(l=By(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Fu(s,a++),o+=Ul(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $a(t,e,n){if(t==null)return t;var i=[],r=0;return Ul(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Vy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},Gl={transition:null},Hy={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Gl,ReactCurrentOwner:_h};Be.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=wo;Be.Fragment=Ly;Be.Profiler=Dy;Be.PureComponent=gh;Be.StrictMode=Ry;Be.Suspense=zy;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=wv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_h.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)bv.call(e,l)&&!Cv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ba,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:Oy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Iy,_context:t},t.Consumer=t};Be.createElement=Tv;Be.createFactory=function(t){var e=Tv.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:ky,render:t}};Be.isValidElement=xh;Be.lazy=function(t){return{$$typeof:Ny,_payload:{_status:-1,_result:t},_init:Vy}};Be.memo=function(t,e){return{$$typeof:Fy,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Gl.transition;Gl.transition={};try{t()}finally{Gl.transition=e}};Be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Be.useCallback=function(t,e){return an.current.useCallback(t,e)};Be.useContext=function(t){return an.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Be.useEffect=function(t,e){return an.current.useEffect(t,e)};Be.useId=function(){return an.current.useId()};Be.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return an.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Be.useRef=function(t){return an.current.useRef(t)};Be.useState=function(t){return an.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return an.current.useTransition()};Be.version="18.2.0";(function(t){t.exports=Be})(he);const Kn=Ay(he.exports);/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=he.exports;function Wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $y=typeof Object.is=="function"?Object.is:Wy,jy=ao.useState,Xy=ao.useEffect,qy=ao.useLayoutEffect,Yy=ao.useDebugValue;function Zy(t,e){var n=e(),i=jy({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return qy(function(){r.value=n,r.getSnapshot=e,Nu(r)&&s({inst:r})},[t,n,e]),Xy(function(){return Nu(r)&&s({inst:r}),t(function(){Nu(r)&&s({inst:r})})},[t]),Yy(n),n}function Nu(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$y(t,n)}catch{return!0}}function Qy(t,e){return e()}var Jy=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Qy:Zy;yv.useSyncExternalStore=ao.useSyncExternalStore!==void 0?ao.useSyncExternalStore:Jy;(function(t){t.exports=yv})(xv);var Av={exports:{}},Pv={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc=he.exports,Ky=xv.exports;function eS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tS=typeof Object.is=="function"?Object.is:eS,nS=Ky.useSyncExternalStore,iS=Hc.useRef,rS=Hc.useEffect,sS=Hc.useMemo,oS=Hc.useDebugValue;Pv.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=iS(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=sS(function(){function l(m){if(!c){if(c=!0,u=m,m=i(m),r!==void 0&&o.hasValue){var _=o.value;if(r(_,m))return f=_}return f=m}if(_=f,tS(u,m))return _;var h=i(m);return r!==void 0&&r(_,h)?_:(u=m,f=h)}var c=!1,u,f,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var a=nS(t,s[0],s[1]);return rS(function(){o.hasValue=!0,o.value=a},[a]),oS(a),a};(function(t){t.exports=Pv})(Av);var yh={exports:{}},Cn={},Lv={exports:{}},Rv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,k){var G=O.length;O.push(k);e:for(;0<G;){var K=G-1>>>1,N=O[K];if(0<r(N,k))O[K]=k,O[G]=N,G=K;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var k=O[0],G=O.pop();if(G!==k){O[0]=G;e:for(var K=0,N=O.length,V=N>>>1;K<V;){var q=2*(K+1)-1,le=O[q],A=q+1,Se=O[A];if(0>r(le,G))A<N&&0>r(Se,le)?(O[K]=Se,O[A]=G,K=A):(O[K]=le,O[q]=G,K=q);else if(A<N&&0>r(Se,G))O[K]=Se,O[A]=G,K=A;else break e}}return k}function r(O,k){var G=O.sortIndex-k.sortIndex;return G!==0?G:O.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,m=!1,_=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(O){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=O)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function S(O){if(h=!1,x(O),!_)if(n(l)!==null)_=!0,$(w);else{var k=n(c);k!==null&&J(S,k.startTime-O)}}function w(O,k){_=!1,h&&(h=!1,g(y),y=-1),m=!0;var G=d;try{for(x(k),f=n(l);f!==null&&(!(f.expirationTime>k)||O&&!F());){var K=f.callback;if(typeof K=="function"){f.callback=null,d=f.priorityLevel;var N=K(f.expirationTime<=k);k=t.unstable_now(),typeof N=="function"?f.callback=N:f===n(l)&&i(l),x(k)}else i(l);f=n(l)}if(f!==null)var V=!0;else{var q=n(c);q!==null&&J(S,q.startTime-k),V=!1}return V}finally{f=null,d=G,m=!1}}var C=!1,R=null,y=-1,T=5,I=-1;function F(){return!(t.unstable_now()-I<T)}function re(){if(R!==null){var O=t.unstable_now();I=O;var k=!0;try{k=R(!0,O)}finally{k?ee():(C=!1,R=null)}}else C=!1}var ee;if(typeof v=="function")ee=function(){v(re)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,X=U.port2;U.port1.onmessage=re,ee=function(){X.postMessage(null)}}else ee=function(){p(re,0)};function $(O){R=O,C||(C=!0,ee())}function J(O,k){y=p(function(){O(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,$(w))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var G=d;d=k;try{return O()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,k){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var G=d;d=O;try{return k()}finally{d=G}},t.unstable_scheduleCallback=function(O,k,G){var K=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?K+G:K):G=K,O){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=G+N,O={id:u++,callback:k,priorityLevel:O,startTime:G,expirationTime:N,sortIndex:-1},G>K?(O.sortIndex=G,e(c,O),n(l)===null&&O===n(c)&&(h?(g(y),y=-1):h=!0,J(S,G-K))):(O.sortIndex=N,e(l,O),_||m||(_=!0,$(w))),O},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(O){var k=d;return function(){var G=d;d=k;try{return O.apply(this,arguments)}finally{d=G}}}})(Rv);(function(t){t.exports=Rv})(Lv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=he.exports,En=Lv.exports;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iv=new Set,ma={};function us(t,e){lo(t,e),lo(t+"Capture",e)}function lo(t,e){for(ma[t]=e,t=0;t<e.length;t++)Iv.add(e[t])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),td=Object.prototype.hasOwnProperty,aS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kp={},em={};function lS(t){return td.call(em,t)?!0:td.call(Kp,t)?!1:aS.test(t)?em[t]=!0:(Kp[t]=!0,!1)}function cS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uS(t,e,n,i){if(e===null||typeof e>"u"||cS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sh=/[\-:]([a-z])/g;function wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sh,wh);Gt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sh,wh);Gt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sh,wh);Gt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mh(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uS(e,n,r,i)&&(n=null),i||r===null?lS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),Os=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),Eh=Symbol.for("react.strict_mode"),nd=Symbol.for("react.profiler"),Ov=Symbol.for("react.provider"),kv=Symbol.for("react.context"),bh=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),Ch=Symbol.for("react.memo"),Qi=Symbol.for("react.lazy"),zv=Symbol.for("react.offscreen"),tm=Symbol.iterator;function Io(t){return t===null||typeof t!="object"?null:(t=tm&&t[tm]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,Bu;function Wo(t){if(Bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bu=e&&e[1]||""}return`
`+Bu+t}var Uu=!1;function Gu(t,e){if(!t||Uu)return"";Uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wo(t):""}function fS(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=Gu(t.type,!1),t;case 11:return t=Gu(t.type.render,!1),t;case 1:return t=Gu(t.type,!0),t;default:return""}}function sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case Os:return"Portal";case nd:return"Profiler";case Eh:return"StrictMode";case id:return"Suspense";case rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kv:return(t.displayName||"Context")+".Consumer";case Ov:return(t._context.displayName||"Context")+".Provider";case bh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ch:return e=t.displayName||null,e!==null?e:sd(t.type)||"Memo";case Qi:e=t._payload,t=t._init;try{return sd(t(e))}catch{}}return null}function dS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sd(e);case 8:return e===Eh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hS(t){var e=Fv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=hS(t))}function Nv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function od(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function nm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bv(t,e){e=e.checked,e!=null&&Mh(t,"checked",e,!1)}function ad(t,e){Bv(t,e);var n=gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&ld(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function im(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ld(t,e,n){(e!=="number"||ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function Zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if($o(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function Uv(t,e){var n=gr(e.value),i=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qa,Vv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pS=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){pS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function Hv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function Wv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var mS=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fd(t,e){if(e){if(mS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function dd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hd=null;function Th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pd=null,Qs=null,Js=null;function om(t){if(t=Va(t)){if(typeof pd!="function")throw Error(se(280));var e=t.stateNode;e&&(e=qc(e),pd(t.stateNode,t.type,e))}}function $v(t){Qs?Js?Js.push(t):Js=[t]:Qs=t}function jv(){if(Qs){var t=Qs,e=Js;if(Js=Qs=null,om(t),e)for(t=0;t<e.length;t++)om(e[t])}}function Xv(t,e){return t(e)}function qv(){}var Vu=!1;function Yv(t,e,n){if(Vu)return t(e,n);Vu=!0;try{return Xv(t,e,n)}finally{Vu=!1,(Qs!==null||Js!==null)&&(qv(),jv())}}function va(t,e){var n=t.stateNode;if(n===null)return null;var i=qc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var md=!1;if(ki)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){md=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{md=!1}function gS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ta=!1,rc=null,sc=!1,gd=null,vS={onError:function(t){ta=!0,rc=t}};function _S(t,e,n,i,r,s,o,a,l){ta=!1,rc=null,gS.apply(vS,arguments)}function xS(t,e,n,i,r,s,o,a,l){if(_S.apply(this,arguments),ta){if(ta){var c=rc;ta=!1,rc=null}else throw Error(se(198));sc||(sc=!0,gd=c)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function am(t){if(fs(t)!==t)throw Error(se(188))}function yS(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return am(r),t;if(s===i)return am(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Qv(t){return t=yS(t),t!==null?Jv(t):null}function Jv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jv(t);if(e!==null)return e;t=t.sibling}return null}var Kv=En.unstable_scheduleCallback,lm=En.unstable_cancelCallback,SS=En.unstable_shouldYield,wS=En.unstable_requestPaint,Mt=En.unstable_now,MS=En.unstable_getCurrentPriorityLevel,Ah=En.unstable_ImmediatePriority,e1=En.unstable_UserBlockingPriority,oc=En.unstable_NormalPriority,ES=En.unstable_LowPriority,t1=En.unstable_IdlePriority,Wc=null,mi=null;function bS(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(Wc,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:AS,CS=Math.log,TS=Math.LN2;function AS(t){return t>>>=0,t===0?32:31-(CS(t)/TS|0)|0}var Ya=64,Za=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ac(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=jo(a):(s&=o,s!==0&&(i=jo(s)))}else o=n&~r,o!==0?i=jo(o):s!==0&&(i=jo(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function PS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=PS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function n1(){var t=Ya;return Ya<<=1,(Ya&4194240)===0&&(Ya=64),t}function Hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function RS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ph(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function i1(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var r1,Lh,s1,o1,a1,_d=!1,Qa=[],sr=null,or=null,ar=null,_a=new Map,xa=new Map,Ki=[],DS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cm(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":_a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(e.pointerId)}}function ko(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Va(e),e!==null&&Lh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function IS(t,e,n,i,r){switch(e){case"focusin":return sr=ko(sr,t,e,n,i,r),!0;case"dragenter":return or=ko(or,t,e,n,i,r),!0;case"mouseover":return ar=ko(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return _a.set(s,ko(_a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,xa.set(s,ko(xa.get(s)||null,t,e,n,i,r)),!0}return!1}function l1(t){var e=Fr(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=Zv(n),e!==null){t.blockedOn=e,a1(t.priority,function(){s1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hd=i,n.target.dispatchEvent(i),hd=null}else return e=Va(n),e!==null&&Lh(e),t.blockedOn=n,!1;e.shift()}return!0}function um(t,e,n){Vl(t)&&n.delete(e)}function OS(){_d=!1,sr!==null&&Vl(sr)&&(sr=null),or!==null&&Vl(or)&&(or=null),ar!==null&&Vl(ar)&&(ar=null),_a.forEach(um),xa.forEach(um)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,_d||(_d=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,OS)))}function ya(t){function e(r){return zo(r,t)}if(0<Qa.length){zo(Qa[0],t);for(var n=1;n<Qa.length;n++){var i=Qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&zo(sr,t),or!==null&&zo(or,t),ar!==null&&zo(ar,t),_a.forEach(e),xa.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)l1(n),n.blockedOn===null&&Ki.shift()}var Ks=Ui.ReactCurrentBatchConfig,lc=!0;function kS(t,e,n,i){var r=Ke,s=Ks.transition;Ks.transition=null;try{Ke=1,Rh(t,e,n,i)}finally{Ke=r,Ks.transition=s}}function zS(t,e,n,i){var r=Ke,s=Ks.transition;Ks.transition=null;try{Ke=4,Rh(t,e,n,i)}finally{Ke=r,Ks.transition=s}}function Rh(t,e,n,i){if(lc){var r=xd(t,e,n,i);if(r===null)Ku(t,e,i,cc,n),cm(t,i);else if(IS(r,t,e,n,i))i.stopPropagation();else if(cm(t,i),e&4&&-1<DS.indexOf(t)){for(;r!==null;){var s=Va(r);if(s!==null&&r1(s),s=xd(t,e,n,i),s===null&&Ku(t,e,i,cc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ku(t,e,i,null,n)}}var cc=null;function xd(t,e,n,i){if(cc=null,t=Th(i),t=Fr(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cc=t,null}function c1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MS()){case Ah:return 1;case e1:return 4;case oc:case ES:return 16;case t1:return 536870912;default:return 16}default:return 16}}var nr=null,Dh=null,Hl=null;function u1(){if(Hl)return Hl;var t,e=Dh,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Hl=r.slice(t,1<i?1-i:void 0)}function Wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function fm(){return!1}function Tn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:fm,this.isPropagationStopped=fm,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var Mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ih=Tn(Mo),Ga=pt({},Mo,{view:0,detail:0}),FS=Tn(Ga),Wu,$u,Fo,$c=pt({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(Wu=t.screenX-Fo.screenX,$u=t.screenY-Fo.screenY):$u=Wu=0,Fo=t),Wu)},movementY:function(t){return"movementY"in t?t.movementY:$u}}),dm=Tn($c),NS=pt({},$c,{dataTransfer:0}),BS=Tn(NS),US=pt({},Ga,{relatedTarget:0}),ju=Tn(US),GS=pt({},Mo,{animationName:0,elapsedTime:0,pseudoElement:0}),VS=Tn(GS),HS=pt({},Mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WS=Tn(HS),$S=pt({},Mo,{data:0}),hm=Tn($S),jS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qS[t])?!!e[t]:!1}function Oh(){return YS}var ZS=pt({},Ga,{key:function(t){if(t.key){var e=jS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oh,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QS=Tn(ZS),JS=pt({},$c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=Tn(JS),KS=pt({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oh}),e2=Tn(KS),t2=pt({},Mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),n2=Tn(t2),i2=pt({},$c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r2=Tn(i2),s2=[9,13,27,32],kh=ki&&"CompositionEvent"in window,na=null;ki&&"documentMode"in document&&(na=document.documentMode);var o2=ki&&"TextEvent"in window&&!na,f1=ki&&(!kh||na&&8<na&&11>=na),mm=String.fromCharCode(32),gm=!1;function d1(t,e){switch(t){case"keyup":return s2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zs=!1;function a2(t,e){switch(t){case"compositionend":return h1(e);case"keypress":return e.which!==32?null:(gm=!0,mm);case"textInput":return t=e.data,t===mm&&gm?null:t;default:return null}}function l2(t,e){if(zs)return t==="compositionend"||!kh&&d1(t,e)?(t=u1(),Hl=Dh=nr=null,zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return f1&&e.locale!=="ko"?null:e.data;default:return null}}var c2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!c2[t.type]:e==="textarea"}function p1(t,e,n,i){$v(i),e=uc(e,"onChange"),0<e.length&&(n=new Ih("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ia=null,Sa=null;function u2(t){b1(t,0)}function jc(t){var e=Bs(t);if(Nv(e))return t}function f2(t,e){if(t==="change")return e}var m1=!1;if(ki){var Xu;if(ki){var qu="oninput"in document;if(!qu){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),qu=typeof _m.oninput=="function"}Xu=qu}else Xu=!1;m1=Xu&&(!document.documentMode||9<document.documentMode)}function xm(){ia&&(ia.detachEvent("onpropertychange",g1),Sa=ia=null)}function g1(t){if(t.propertyName==="value"&&jc(Sa)){var e=[];p1(e,Sa,t,Th(t)),Yv(u2,e)}}function d2(t,e,n){t==="focusin"?(xm(),ia=e,Sa=n,ia.attachEvent("onpropertychange",g1)):t==="focusout"&&xm()}function h2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jc(Sa)}function p2(t,e){if(t==="click")return jc(e)}function m2(t,e){if(t==="input"||t==="change")return jc(e)}function g2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:g2;function wa(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!td.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sm(t,e){var n=ym(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ym(n)}}function v1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _1(){for(var t=window,e=ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ic(t.document)}return e}function zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function v2(t){var e=_1(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&v1(n.ownerDocument.documentElement,n)){if(i!==null&&zh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Sm(n,s);var o=Sm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _2=ki&&"documentMode"in document&&11>=document.documentMode,Fs=null,yd=null,ra=null,Sd=!1;function wm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sd||Fs==null||Fs!==ic(i)||(i=Fs,"selectionStart"in i&&zh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ra&&wa(ra,i)||(ra=i,i=uc(yd,"onSelect"),0<i.length&&(e=new Ih("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fs)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ns={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},Yu={},x1={};ki&&(x1=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Xc(t){if(Yu[t])return Yu[t];if(!Ns[t])return t;var e=Ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x1)return Yu[t]=e[n];return t}var y1=Xc("animationend"),S1=Xc("animationiteration"),w1=Xc("animationstart"),M1=Xc("transitionend"),E1=new Map,Mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){E1.set(t,e),us(e,[t])}for(var Zu=0;Zu<Mm.length;Zu++){var Qu=Mm[Zu],x2=Qu.toLowerCase(),y2=Qu[0].toUpperCase()+Qu.slice(1);wr(x2,"on"+y2)}wr(y1,"onAnimationEnd");wr(S1,"onAnimationIteration");wr(w1,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(M1,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function Em(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,xS(i,e,void 0,t),t.currentTarget=null}function b1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Em(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Em(r,a,c),s=l}}}if(sc)throw t=gd,sc=!1,gd=null,t}function st(t,e){var n=e[Cd];n===void 0&&(n=e[Cd]=new Set);var i=t+"__bubble";n.has(i)||(C1(e,t,2,!1),n.add(i))}function Ju(t,e,n){var i=0;e&&(i|=4),C1(n,t,i,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function Ma(t){if(!t[el]){t[el]=!0,Iv.forEach(function(n){n!=="selectionchange"&&(S2.has(n)||Ju(n,!1,t),Ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[el]||(e[el]=!0,Ju("selectionchange",!1,e))}}function C1(t,e,n,i){switch(c1(e)){case 1:var r=kS;break;case 4:r=zS;break;default:r=Rh}n=r.bind(null,e,n,t),r=void 0,!md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ku(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Yv(function(){var c=s,u=Th(n),f=[];e:{var d=E1.get(t);if(d!==void 0){var m=Ih,_=t;switch(t){case"keypress":if(Wl(n)===0)break e;case"keydown":case"keyup":m=QS;break;case"focusin":_="focus",m=ju;break;case"focusout":_="blur",m=ju;break;case"beforeblur":case"afterblur":m=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=BS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=e2;break;case y1:case S1:case w1:m=VS;break;case M1:m=n2;break;case"scroll":m=FS;break;case"wheel":m=r2;break;case"copy":case"cut":case"paste":m=WS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=pm}var h=(e&4)!==0,p=!h&&t==="scroll",g=h?d!==null?d+"Capture":null:d;h=[];for(var v=c,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,g!==null&&(S=va(v,g),S!=null&&h.push(Ea(v,S,x)))),p)break;v=v.return}0<h.length&&(d=new m(d,_,null,n,u),f.push({event:d,listeners:h}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==hd&&(_=n.relatedTarget||n.fromElement)&&(Fr(_)||_[zi]))break e;if((m||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Fr(_):null,_!==null&&(p=fs(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(h=dm,S="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(h=pm,S="onPointerLeave",g="onPointerEnter",v="pointer"),p=m==null?d:Bs(m),x=_==null?d:Bs(_),d=new h(S,v+"leave",m,n,u),d.target=p,d.relatedTarget=x,S=null,Fr(u)===c&&(h=new h(g,v+"enter",_,n,u),h.target=x,h.relatedTarget=p,S=h),p=S,m&&_)t:{for(h=m,g=_,v=0,x=h;x;x=ms(x))v++;for(x=0,S=g;S;S=ms(S))x++;for(;0<v-x;)h=ms(h),v--;for(;0<x-v;)g=ms(g),x--;for(;v--;){if(h===g||g!==null&&h===g.alternate)break t;h=ms(h),g=ms(g)}h=null}else h=null;m!==null&&bm(f,d,m,h,!1),_!==null&&p!==null&&bm(f,p,_,h,!0)}}e:{if(d=c?Bs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var w=f2;else if(vm(d))if(m1)w=m2;else{w=h2;var C=d2}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=p2);if(w&&(w=w(t,c))){p1(f,w,n,u);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&ld(d,"number",d.value)}switch(C=c?Bs(c):window,t){case"focusin":(vm(C)||C.contentEditable==="true")&&(Fs=C,yd=c,ra=null);break;case"focusout":ra=yd=Fs=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,wm(f,n,u);break;case"selectionchange":if(_2)break;case"keydown":case"keyup":wm(f,n,u)}var R;if(kh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else zs?d1(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(f1&&n.locale!=="ko"&&(zs||y!=="onCompositionStart"?y==="onCompositionEnd"&&zs&&(R=u1()):(nr=u,Dh="value"in nr?nr.value:nr.textContent,zs=!0)),C=uc(c,y),0<C.length&&(y=new hm(y,t,null,n,u),f.push({event:y,listeners:C}),R?y.data=R:(R=h1(n),R!==null&&(y.data=R)))),(R=o2?a2(t,n):l2(t,n))&&(c=uc(c,"onBeforeInput"),0<c.length&&(u=new hm("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=R))}b1(f,e)})}function Ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=va(t,n),s!=null&&i.unshift(Ea(t,s,r)),s=va(t,e),s!=null&&i.push(Ea(t,s,r))),t=t.return}return i}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=va(n,s),l!=null&&o.unshift(Ea(n,l,a))):r||(l=va(n,s),l!=null&&o.push(Ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var w2=/\r\n?/g,M2=/\u0000|\uFFFD/g;function Cm(t){return(typeof t=="string"?t:""+t).replace(w2,`
`).replace(M2,"")}function tl(t,e,n){if(e=Cm(e),Cm(t)!==e&&n)throw Error(se(425))}function fc(){}var wd=null,Md=null;function Ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,E2=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,b2=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(t){return Tm.resolve(null).then(t).catch(C2)}:bd;function C2(t){setTimeout(function(){throw t})}function ef(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ya(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ya(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),di="__reactFiber$"+Eo,ba="__reactProps$"+Eo,zi="__reactContainer$"+Eo,Cd="__reactEvents$"+Eo,T2="__reactListeners$"+Eo,A2="__reactHandles$"+Eo;function Fr(t){var e=t[di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Am(t);t!==null;){if(n=t[di])return n;t=Am(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[di]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function qc(t){return t[ba]||null}var Td=[],Us=-1;function Mr(t){return{current:t}}function at(t){0>Us||(t.current=Td[Us],Td[Us]=null,Us--)}function rt(t,e){Us++,Td[Us]=t.current,t.current=e}var vr={},Yt=Mr(vr),pn=Mr(!1),Qr=vr;function co(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function dc(){at(pn),at(Yt)}function Pm(t,e,n){if(Yt.current!==vr)throw Error(se(168));rt(Yt,e),rt(pn,n)}function T1(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,dS(t)||"Unknown",r));return pt({},n,i)}function hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Qr=Yt.current,rt(Yt,t),rt(pn,pn.current),!0}function Lm(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=T1(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,at(pn),at(Yt),rt(Yt,t)):at(pn),rt(pn,n)}var Ai=null,Yc=!1,tf=!1;function A1(t){Ai===null?Ai=[t]:Ai.push(t)}function P2(t){Yc=!0,A1(t)}function Er(){if(!tf&&Ai!==null){tf=!0;var t=0,e=Ke;try{var n=Ai;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ai=null,Yc=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(t+1)),Kv(Ah,Er),r}finally{Ke=e,tf=!1}}return null}var Gs=[],Vs=0,pc=null,mc=0,Dn=[],In=0,Jr=null,Li=1,Ri="";function Lr(t,e){Gs[Vs++]=mc,Gs[Vs++]=pc,pc=t,mc=e}function P1(t,e,n){Dn[In++]=Li,Dn[In++]=Ri,Dn[In++]=Jr,Jr=t;var i=Li;t=Ri;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Li=1<<32-ei(e)+r|n<<r|i,Ri=s+t}else Li=1<<s|n<<r|i,Ri=t}function Fh(t){t.return!==null&&(Lr(t,1),P1(t,1,0))}function Nh(t){for(;t===pc;)pc=Gs[--Vs],Gs[Vs]=null,mc=Gs[--Vs],Gs[Vs]=null;for(;t===Jr;)Jr=Dn[--In],Dn[In]=null,Ri=Dn[--In],Dn[In]=null,Li=Dn[--In],Dn[In]=null}var Mn=null,Sn=null,ct=!1,Yn=null;function L1(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Li,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,Sn=null,!0):!1;default:return!1}}function Ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pd(t){if(ct){var e=Sn;if(e){var n=e;if(!Rm(t,e)){if(Ad(t))throw Error(se(418));e=lr(n.nextSibling);var i=Mn;e&&Rm(t,e)?L1(i,n):(t.flags=t.flags&-4097|2,ct=!1,Mn=t)}}else{if(Ad(t))throw Error(se(418));t.flags=t.flags&-4097|2,ct=!1,Mn=t}}}function Dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function nl(t){if(t!==Mn)return!1;if(!ct)return Dm(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ed(t.type,t.memoizedProps)),e&&(e=Sn)){if(Ad(t))throw R1(),Error(se(418));for(;e;)L1(t,e),e=lr(e.nextSibling)}if(Dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=Mn?lr(t.stateNode.nextSibling):null;return!0}function R1(){for(var t=Sn;t;)t=lr(t.nextSibling)}function uo(){Sn=Mn=null,ct=!1}function Bh(t){Yn===null?Yn=[t]:Yn.push(t)}var L2=Ui.ReactCurrentBatchConfig;function Xn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var gc=Mr(null),vc=null,Hs=null,Uh=null;function Gh(){Uh=Hs=vc=null}function Vh(t){var e=gc.current;at(gc),t._currentValue=e}function Ld(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function eo(t,e){vc=t,Uh=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(dn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(Uh!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(vc===null)throw Error(se(308));Hs=t,vc.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var Nr=null;function Hh(t){Nr===null?Nr=[t]:Nr.push(t)}function D1(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Hh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Fi(t,i)}function Fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ji=!1;function Wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(We&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(t,n)}return r=i.interleaved,r===null?(e.next=e,Hh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(t,n)}function $l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ph(t,n)}}function Im(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _c(t,e,n,i){var r=t.updateQueue;Ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,h=a;switch(d=e,m=n,h.tag){case 1:if(_=h.payload,typeof _=="function"){f=_.call(m,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=h.payload,d=typeof _=="function"?_.call(m,f,d):_,d==null)break e;f=pt({},f,d);break e;case 2:Ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=f}}function Om(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var O1=new Dv.Component().refs;function Rd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=fr(t),s=Di(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ti(e,t,r,i),$l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=fr(t),s=Di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ti(e,t,r,i),$l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=fr(t),r=Di(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(ti(e,t,i,n),$l(e,t,i))}};function km(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!wa(n,i)||!wa(r,s):!0}function k1(t,e,n){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=mn(e)?Qr:Yt.current,i=e.contextTypes,s=(i=i!=null)?co(t,r):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function zm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function Dd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=O1,Wh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=mn(e)?Qr:Yt.current,r.context=co(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zc.enqueueReplaceState(r,r.state,null),_c(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function No(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===O1&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function il(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fm(t){var e=t._init;return e(t._payload)}function z1(t){function e(g,v){if(t){var x=g.deletions;x===null?(g.deletions=[v],g.flags|=16):x.push(v)}}function n(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function i(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function r(g,v){return g=dr(g,v),g.index=0,g.sibling=null,g}function s(g,v,x){return g.index=x,t?(x=g.alternate,x!==null?(x=x.index,x<v?(g.flags|=2,v):x):(g.flags|=2,v)):(g.flags|=1048576,v)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,v,x,S){return v===null||v.tag!==6?(v=cf(x,g.mode,S),v.return=g,v):(v=r(v,x),v.return=g,v)}function l(g,v,x,S){var w=x.type;return w===ks?u(g,v,x.props.children,S,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Qi&&Fm(w)===v.type)?(S=r(v,x.props),S.ref=No(g,v,x),S.return=g,S):(S=Ql(x.type,x.key,x.props,null,g.mode,S),S.ref=No(g,v,x),S.return=g,S)}function c(g,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=uf(x,g.mode,S),v.return=g,v):(v=r(v,x.children||[]),v.return=g,v)}function u(g,v,x,S,w){return v===null||v.tag!==7?(v=jr(x,g.mode,S,w),v.return=g,v):(v=r(v,x),v.return=g,v)}function f(g,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=cf(""+v,g.mode,x),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ja:return x=Ql(v.type,v.key,v.props,null,g.mode,x),x.ref=No(g,null,v),x.return=g,x;case Os:return v=uf(v,g.mode,x),v.return=g,v;case Qi:var S=v._init;return f(g,S(v._payload),x)}if($o(v)||Io(v))return v=jr(v,g.mode,x,null),v.return=g,v;il(g,v)}return null}function d(g,v,x,S){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(g,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ja:return x.key===w?l(g,v,x,S):null;case Os:return x.key===w?c(g,v,x,S):null;case Qi:return w=x._init,d(g,v,w(x._payload),S)}if($o(x)||Io(x))return w!==null?null:u(g,v,x,S,null);il(g,x)}return null}function m(g,v,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(x)||null,a(v,g,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ja:return g=g.get(S.key===null?x:S.key)||null,l(v,g,S,w);case Os:return g=g.get(S.key===null?x:S.key)||null,c(v,g,S,w);case Qi:var C=S._init;return m(g,v,x,C(S._payload),w)}if($o(S)||Io(S))return g=g.get(x)||null,u(v,g,S,w,null);il(v,S)}return null}function _(g,v,x,S){for(var w=null,C=null,R=v,y=v=0,T=null;R!==null&&y<x.length;y++){R.index>y?(T=R,R=null):T=R.sibling;var I=d(g,R,x[y],S);if(I===null){R===null&&(R=T);break}t&&R&&I.alternate===null&&e(g,R),v=s(I,v,y),C===null?w=I:C.sibling=I,C=I,R=T}if(y===x.length)return n(g,R),ct&&Lr(g,y),w;if(R===null){for(;y<x.length;y++)R=f(g,x[y],S),R!==null&&(v=s(R,v,y),C===null?w=R:C.sibling=R,C=R);return ct&&Lr(g,y),w}for(R=i(g,R);y<x.length;y++)T=m(R,g,y,x[y],S),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?y:T.key),v=s(T,v,y),C===null?w=T:C.sibling=T,C=T);return t&&R.forEach(function(F){return e(g,F)}),ct&&Lr(g,y),w}function h(g,v,x,S){var w=Io(x);if(typeof w!="function")throw Error(se(150));if(x=w.call(x),x==null)throw Error(se(151));for(var C=w=null,R=v,y=v=0,T=null,I=x.next();R!==null&&!I.done;y++,I=x.next()){R.index>y?(T=R,R=null):T=R.sibling;var F=d(g,R,I.value,S);if(F===null){R===null&&(R=T);break}t&&R&&F.alternate===null&&e(g,R),v=s(F,v,y),C===null?w=F:C.sibling=F,C=F,R=T}if(I.done)return n(g,R),ct&&Lr(g,y),w;if(R===null){for(;!I.done;y++,I=x.next())I=f(g,I.value,S),I!==null&&(v=s(I,v,y),C===null?w=I:C.sibling=I,C=I);return ct&&Lr(g,y),w}for(R=i(g,R);!I.done;y++,I=x.next())I=m(R,g,y,I.value,S),I!==null&&(t&&I.alternate!==null&&R.delete(I.key===null?y:I.key),v=s(I,v,y),C===null?w=I:C.sibling=I,C=I);return t&&R.forEach(function(re){return e(g,re)}),ct&&Lr(g,y),w}function p(g,v,x,S){if(typeof x=="object"&&x!==null&&x.type===ks&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ja:e:{for(var w=x.key,C=v;C!==null;){if(C.key===w){if(w=x.type,w===ks){if(C.tag===7){n(g,C.sibling),v=r(C,x.props.children),v.return=g,g=v;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Qi&&Fm(w)===C.type){n(g,C.sibling),v=r(C,x.props),v.ref=No(g,C,x),v.return=g,g=v;break e}n(g,C);break}else e(g,C);C=C.sibling}x.type===ks?(v=jr(x.props.children,g.mode,S,x.key),v.return=g,g=v):(S=Ql(x.type,x.key,x.props,null,g.mode,S),S.ref=No(g,v,x),S.return=g,g=S)}return o(g);case Os:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(g,v.sibling),v=r(v,x.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else e(g,v);v=v.sibling}v=uf(x,g.mode,S),v.return=g,g=v}return o(g);case Qi:return C=x._init,p(g,v,C(x._payload),S)}if($o(x))return _(g,v,x,S);if(Io(x))return h(g,v,x,S);il(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(g,v.sibling),v=r(v,x),v.return=g,g=v):(n(g,v),v=cf(x,g.mode,S),v.return=g,g=v),o(g)):n(g,v)}return p}var fo=z1(!0),F1=z1(!1),Ha={},gi=Mr(Ha),Ca=Mr(Ha),Ta=Mr(Ha);function Br(t){if(t===Ha)throw Error(se(174));return t}function $h(t,e){switch(rt(Ta,e),rt(Ca,t),rt(gi,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ud(e,t)}at(gi),rt(gi,e)}function ho(){at(gi),at(Ca),at(Ta)}function N1(t){Br(Ta.current);var e=Br(gi.current),n=ud(e,t.type);e!==n&&(rt(Ca,t),rt(gi,n))}function jh(t){Ca.current===t&&(at(gi),at(Ca))}var ut=Mr(0);function xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nf=[];function Xh(){for(var t=0;t<nf.length;t++)nf[t]._workInProgressVersionPrimary=null;nf.length=0}var jl=Ui.ReactCurrentDispatcher,rf=Ui.ReactCurrentBatchConfig,Kr=0,dt=null,At=null,Dt=null,yc=!1,sa=!1,Aa=0,R2=0;function Vt(){throw Error(se(321))}function qh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function Yh(t,e,n,i,r,s){if(Kr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jl.current=t===null||t.memoizedState===null?k2:z2,t=n(i,r),sa){s=0;do{if(sa=!1,Aa=0,25<=s)throw Error(se(301));s+=1,Dt=At=null,e.updateQueue=null,jl.current=F2,t=n(i,r)}while(sa)}if(jl.current=Sc,e=At!==null&&At.next!==null,Kr=0,Dt=At=dt=null,yc=!1,e)throw Error(se(300));return t}function Zh(){var t=Aa!==0;return Aa=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?dt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Bn(){if(At===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Dt===null?dt.memoizedState:Dt.next;if(e!==null)Dt=e,At=t;else{if(t===null)throw Error(se(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?dt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Pa(t,e){return typeof e=="function"?e(t):e}function sf(t){var e=Bn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,dt.lanes|=u,es|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ri(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,es|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function of(t){var e=Bn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ri(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function B1(){}function U1(t,e){var n=dt,i=Bn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Qh(H1.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,La(9,V1.bind(null,n,i,r,e),void 0,null),It===null)throw Error(se(349));(Kr&30)!==0||G1(n,e,r)}return r}function G1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function V1(t,e,n,i){e.value=n,e.getSnapshot=i,W1(e)&&$1(t)}function H1(t,e,n){return n(function(){W1(e)&&$1(t)})}function W1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function $1(t){var e=Fi(t,1);e!==null&&ti(e,t,1,-1)}function Nm(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=O2.bind(null,dt,t),[e.memoizedState,t]}function La(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function j1(){return Bn().memoizedState}function Xl(t,e,n,i){var r=fi();dt.flags|=t,r.memoizedState=La(1|e,n,void 0,i===void 0?null:i)}function Qc(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&qh(i,o.deps)){r.memoizedState=La(e,n,s,i);return}}dt.flags|=t,r.memoizedState=La(1|e,n,s,i)}function Bm(t,e){return Xl(8390656,8,t,e)}function Qh(t,e){return Qc(2048,8,t,e)}function X1(t,e){return Qc(4,2,t,e)}function q1(t,e){return Qc(4,4,t,e)}function Y1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z1(t,e,n){return n=n!=null?n.concat([t]):null,Qc(4,4,Y1.bind(null,e,t),n)}function Jh(){}function Q1(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&qh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function J1(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&qh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function K1(t,e,n){return(Kr&21)===0?(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n):(ri(n,e)||(n=n1(),dt.lanes|=n,es|=n,t.baseState=!0),e)}function D2(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=rf.transition;rf.transition={};try{t(!1),e()}finally{Ke=n,rf.transition=i}}function e_(){return Bn().memoizedState}function I2(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},t_(t))n_(e,n);else if(n=D1(t,e,n,i),n!==null){var r=rn();ti(n,t,i,r),i_(n,e,i)}}function O2(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(t_(t))n_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ri(a,o)){var l=e.interleaved;l===null?(r.next=r,Hh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=D1(t,e,r,i),n!==null&&(r=rn(),ti(n,t,i,r),i_(n,e,i))}}function t_(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function n_(t,e){sa=yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function i_(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ph(t,n)}}var Sc={readContext:Nn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},k2={readContext:Nn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:Bm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4194308,4,Y1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xl(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=I2.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:Nm,useDebugValue:Jh,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=Nm(!1),e=t[0];return t=D2.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=fi();if(ct){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),It===null)throw Error(se(349));(Kr&30)!==0||G1(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bm(H1.bind(null,i,s,t),[t]),i.flags|=2048,La(9,V1.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=fi(),e=It.identifierPrefix;if(ct){var n=Ri,i=Li;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=R2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},z2={readContext:Nn,useCallback:Q1,useContext:Nn,useEffect:Qh,useImperativeHandle:Z1,useInsertionEffect:X1,useLayoutEffect:q1,useMemo:J1,useReducer:sf,useRef:j1,useState:function(){return sf(Pa)},useDebugValue:Jh,useDeferredValue:function(t){var e=Bn();return K1(e,At.memoizedState,t)},useTransition:function(){var t=sf(Pa)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:B1,useSyncExternalStore:U1,useId:e_,unstable_isNewReconciler:!1},F2={readContext:Nn,useCallback:Q1,useContext:Nn,useEffect:Qh,useImperativeHandle:Z1,useInsertionEffect:X1,useLayoutEffect:q1,useMemo:J1,useReducer:of,useRef:j1,useState:function(){return of(Pa)},useDebugValue:Jh,useDeferredValue:function(t){var e=Bn();return At===null?e.memoizedState=t:K1(e,At.memoizedState,t)},useTransition:function(){var t=of(Pa)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:B1,useSyncExternalStore:U1,useId:e_,unstable_isNewReconciler:!1};function po(t,e){try{var n="",i=e;do n+=fS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function af(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var N2=typeof WeakMap=="function"?WeakMap:Map;function r_(t,e,n){n=Di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Mc||(Mc=!0,Hd=i),Id(t,e)},n}function s_(t,e,n){n=Di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Id(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Id(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Um(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new N2;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=J2.bind(null,t,e,n),e.then(t,t))}function Gm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vm(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Di(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var B2=Ui.ReactCurrentOwner,dn=!1;function tn(t,e,n,i){e.child=t===null?F1(e,null,n,i):fo(e,t.child,n,i)}function Hm(t,e,n,i,r){n=n.render;var s=e.ref;return eo(e,r),i=Yh(t,e,n,i,s,r),n=Zh(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(ct&&n&&Fh(e),e.flags|=1,tn(t,e,i,r),e.child)}function Wm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!op(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,o_(t,e,s,i,r)):(t=Ql(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function o_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(wa(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(dn=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return Od(t,e,n,i,r)}function a_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt($s,yn),yn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt($s,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt($s,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt($s,yn),yn|=i;return tn(t,e,r,n),e.child}function l_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Od(t,e,n,i,r){var s=mn(n)?Qr:Yt.current;return s=co(e,s),eo(e,r),n=Yh(t,e,n,i,s,r),i=Zh(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(ct&&i&&Fh(e),e.flags|=1,tn(t,e,n,r),e.child)}function $m(t,e,n,i,r){if(mn(n)){var s=!0;hc(e)}else s=!1;if(eo(e,r),e.stateNode===null)ql(t,e),k1(e,n,i),Dd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Nn(c):(c=mn(n)?Qr:Yt.current,c=co(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&zm(e,o,i,c),Ji=!1;var d=e.memoizedState;o.state=d,_c(e,i,o,r),l=e.memoizedState,a!==i||d!==l||pn.current||Ji?(typeof u=="function"&&(Rd(e,n,u,i),l=e.memoizedState),(a=Ji||km(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,I1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=mn(n)?Qr:Yt.current,l=co(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&zm(e,o,i,l),Ji=!1,d=e.memoizedState,o.state=d,_c(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||pn.current||Ji?(typeof m=="function"&&(Rd(e,n,m,i),_=e.memoizedState),(c=Ji||km(e,n,c,i,d,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return kd(t,e,n,i,s,r)}function kd(t,e,n,i,r,s){l_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Lm(e,n,!1),Ni(t,e,s);i=e.stateNode,B2.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=fo(e,t.child,null,s),e.child=fo(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&Lm(e,n,!0),e.child}function c_(t){var e=t.stateNode;e.pendingContext?Pm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pm(t,e.context,!1),$h(t,e.containerInfo)}function jm(t,e,n,i,r){return uo(),Bh(r),e.flags|=256,tn(t,e,n,i),e.child}var zd={dehydrated:null,treeContext:null,retryLane:0};function Fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function u_(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ut,r&1),t===null)return Pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=eu(o,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fd(n),e.memoizedState=zd,t):Kh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return U2(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Fd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zd,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Kh(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function rl(t,e,n,i){return i!==null&&Bh(i),fo(e,t.child,null,n),t=Kh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function U2(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=af(Error(se(422))),rl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=eu({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&fo(e,t.child,null,o),e.child.memoizedState=Fd(o),e.memoizedState=zd,s);if((e.mode&1)===0)return rl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=af(s,i,void 0),rl(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Fi(t,r),ti(i,t,r,-1))}return sp(),i=af(Error(se(421))),rl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=K2.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=lr(r.nextSibling),Mn=e,ct=!0,Yn=null,t!==null&&(Dn[In++]=Li,Dn[In++]=Ri,Dn[In++]=Jr,Li=t.id,Ri=t.overflow,Jr=e),e=Kh(e,i.children),e.flags|=4096,e)}function Xm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ld(t.return,e,n)}function lf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function f_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=ut.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xm(t,n,e);else if(t.tag===19)Xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ut,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),lf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}lf(e,!0,n,null,s);break;case"together":lf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ql(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function G2(t,e,n){switch(e.tag){case 3:c_(e),uo();break;case 5:N1(e);break;case 1:mn(e.type)&&hc(e);break;case 4:$h(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(gc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ut,ut.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?u_(t,e,n):(rt(ut,ut.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);rt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return f_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,a_(t,e,n)}return Ni(t,e,n)}var d_,Nd,h_,p_;d_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nd=function(){};h_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(gi.current);var s=null;switch(n){case"input":r=od(t,r),i=od(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=cd(t,r),i=cd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=fc)}fd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};p_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Bo(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function V2(t,e,n){var i=e.pendingProps;switch(Nh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return mn(e.type)&&dc(),Ht(e),null;case 3:return i=e.stateNode,ho(),at(pn),at(Yt),Xh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Yn!==null&&(jd(Yn),Yn=null))),Nd(t,e),Ht(e),null;case 5:jh(e);var r=Br(Ta.current);if(n=e.type,t!==null&&e.stateNode!=null)h_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Ht(e),null}if(t=Br(gi.current),nl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[di]=e,i[ba]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Xo.length;r++)st(Xo[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":nm(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":rm(i,s),st("invalid",i)}fd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,a,t),r=["children",""+a]):ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":Xa(i),im(i,s,!0);break;case"textarea":Xa(i),sm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[di]=e,t[ba]=i,d_(t,e,!1,!1),e.stateNode=t;e:{switch(o=dd(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xo.length;r++)st(Xo[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":nm(t,i),r=od(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),st("invalid",t);break;case"textarea":rm(t,i),r=cd(t,i),st("invalid",t);break;default:r=i}fd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Wv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(t,l):typeof l=="number"&&ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&Mh(t,s,l,o))}switch(n){case"input":Xa(t),im(t,i,!1);break;case"textarea":Xa(t),sm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=fc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)p_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Br(Ta.current),Br(gi.current),nl(e)){if(i=e.stateNode,n=e.memoizedProps,i[di]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:tl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return Ht(e),null;case 13:if(at(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&Sn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)R1(),uo(),e.flags|=98560,s=!1;else if(s=nl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[di]=e}else uo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Yn!==null&&(jd(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ut.current&1)!==0?Pt===0&&(Pt=3):sp())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return ho(),Nd(t,e),t===null&&Ma(e.stateNode.containerInfo),Ht(e),null;case 10:return Vh(e.type._context),Ht(e),null;case 17:return mn(e.type)&&dc(),Ht(e),null;case 19:if(at(ut),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Bo(s,!1);else{if(Pt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=xc(t),o!==null){for(e.flags|=128,Bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>mo&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304)}else{if(!i)if(t=xc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Ht(e),null}else 2*Mt()-s.renderingStartTime>mo&&n!==1073741824&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=ut.current,rt(ut,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return rp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(yn&1073741824)!==0&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function H2(t,e){switch(Nh(e),e.tag){case 1:return mn(e.type)&&dc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ho(),at(pn),at(Yt),Xh(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return jh(e),null;case 13:if(at(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ut),null;case 4:return ho(),null;case 10:return Vh(e.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var sl=!1,qt=!1,W2=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function Bd(t,e,n){try{n()}catch(i){xt(t,e,i)}}var qm=!1;function $2(t,e){if(wd=lc,t=_1(),zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Md={focusedElem:t,selectionRange:n},lc=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var h=_.memoizedProps,p=_.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:Xn(e.type,h),p);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){xt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=qm,qm=!1,_}function oa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Bd(e,n,s)}r=r.next}while(r!==i)}}function Jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ud(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function m_(t){var e=t.alternate;e!==null&&(t.alternate=null,m_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[di],delete e[ba],delete e[Cd],delete e[T2],delete e[A2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function g_(t){return t.tag===5||t.tag===3||t.tag===4}function Ym(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fc));else if(i!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}function Vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Vd(t,e,n),t=t.sibling;t!==null;)Vd(t,e,n),t=t.sibling}var Ft=null,qn=!1;function Hi(t,e,n){for(n=n.child;n!==null;)v_(t,e,n),n=n.sibling}function v_(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(Wc,n)}catch{}switch(n.tag){case 5:qt||Ws(n,e);case 6:var i=Ft,r=qn;Ft=null,Hi(t,e,n),Ft=i,qn=r,Ft!==null&&(qn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(qn?(t=Ft,n=n.stateNode,t.nodeType===8?ef(t.parentNode,n):t.nodeType===1&&ef(t,n),ya(t)):ef(Ft,n.stateNode));break;case 4:i=Ft,r=qn,Ft=n.stateNode.containerInfo,qn=!0,Hi(t,e,n),Ft=i,qn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Bd(n,e,o),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!qt&&(Ws(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Hi(t,e,n),qt=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function Zm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new W2),e.forEach(function(i){var r=ew.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,qn=!1;break e;case 3:Ft=a.stateNode.containerInfo,qn=!0;break e;case 4:Ft=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(Ft===null)throw Error(se(160));v_(s,o,r),Ft=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)__(e,t),e=e.sibling}function __(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ai(t),i&4){try{oa(3,t,t.return),Jc(3,t)}catch(h){xt(t,t.return,h)}try{oa(5,t,t.return)}catch(h){xt(t,t.return,h)}}break;case 1:Vn(e,t),ai(t),i&512&&n!==null&&Ws(n,n.return);break;case 5:if(Vn(e,t),ai(t),i&512&&n!==null&&Ws(n,n.return),t.flags&32){var r=t.stateNode;try{ga(r,"")}catch(h){xt(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bv(r,s),dd(a,o);var c=dd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Wv(r,f):u==="dangerouslySetInnerHTML"?Vv(r,f):u==="children"?ga(r,f):Mh(r,u,f,c)}switch(a){case"input":ad(r,s);break;case"textarea":Uv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Zs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Zs(r,!!s.multiple,s.defaultValue,!0):Zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(h){xt(t,t.return,h)}}break;case 6:if(Vn(e,t),ai(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(h){xt(t,t.return,h)}}break;case 3:if(Vn(e,t),ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(h){xt(t,t.return,h)}break;case 4:Vn(e,t),ai(t);break;case 13:Vn(e,t),ai(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(np=Mt())),i&4&&Zm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||u,Vn(e,t),qt=c):Vn(e,t),ai(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&(t.mode&1)!==0)for(xe=t,u=t.child;u!==null;){for(f=xe=u;xe!==null;){switch(d=xe,m=d.child,d.tag){case 0:case 11:case 14:case 15:oa(4,d,d.return);break;case 1:Ws(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(h){xt(i,n,h)}}break;case 5:Ws(d,d.return);break;case 22:if(d.memoizedState!==null){Jm(f);continue}}m!==null?(m.return=d,xe=m):Jm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hv("display",o))}catch(h){xt(t,t.return,h)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(h){xt(t,t.return,h)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vn(e,t),ai(t),i&4&&Zm(t);break;case 21:break;default:Vn(e,t),ai(t)}}function ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(g_(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ga(r,""),i.flags&=-33);var s=Ym(t);Vd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ym(t);Gd(t,a,o);break;default:throw Error(se(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function j2(t,e,n){xe=t,x_(t)}function x_(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||sl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=sl;var c=qt;if(sl=o,(qt=l)&&!c)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?Km(r):l!==null?(l.return=o,xe=l):Km(r);for(;s!==null;)xe=s,x_(s),s=s.sibling;xe=r,sl=a,qt=c}Qm(t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,xe=s):Qm(t)}}function Qm(t){for(;xe!==null;){var e=xe;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:qt||Jc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Om(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Om(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ya(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}qt||e.flags&512&&Ud(e)}catch(d){xt(e,e.return,d)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Jm(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Km(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jc(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Ud(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{Ud(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var X2=Math.ceil,wc=Ui.ReactCurrentDispatcher,ep=Ui.ReactCurrentOwner,Fn=Ui.ReactCurrentBatchConfig,We=0,It=null,Ct=null,Bt=0,yn=0,$s=Mr(0),Pt=0,Ra=null,es=0,Kc=0,tp=0,aa=null,cn=null,np=0,mo=1/0,Ci=null,Mc=!1,Hd=null,ur=null,ol=!1,ir=null,Ec=0,la=0,Wd=null,Yl=-1,Zl=0;function rn(){return(We&6)!==0?Mt():Yl!==-1?Yl:Yl=Mt()}function fr(t){return(t.mode&1)===0?1:(We&2)!==0&&Bt!==0?Bt&-Bt:L2.transition!==null?(Zl===0&&(Zl=n1()),Zl):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:c1(t.type)),t)}function ti(t,e,n,i){if(50<la)throw la=0,Wd=null,Error(se(185));Ua(t,n,i),((We&2)===0||t!==It)&&(t===It&&((We&2)===0&&(Kc|=n),Pt===4&&er(t,Bt)),gn(t,i),n===1&&We===0&&(e.mode&1)===0&&(mo=Mt()+500,Yc&&Er()))}function gn(t,e){var n=t.callbackNode;LS(t,e);var i=ac(t,t===It?Bt:0);if(i===0)n!==null&&lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lm(n),e===1)t.tag===0?P2(eg.bind(null,t)):A1(eg.bind(null,t)),b2(function(){(We&6)===0&&Er()}),n=null;else{switch(i1(i)){case 1:n=Ah;break;case 4:n=e1;break;case 16:n=oc;break;case 536870912:n=t1;break;default:n=oc}n=T_(n,y_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function y_(t,e){if(Yl=-1,Zl=0,(We&6)!==0)throw Error(se(327));var n=t.callbackNode;if(to()&&t.callbackNode!==n)return null;var i=ac(t,t===It?Bt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=bc(t,i);else{e=i;var r=We;We|=2;var s=w_();(It!==t||Bt!==e)&&(Ci=null,mo=Mt()+500,$r(t,e));do try{Z2();break}catch(a){S_(t,a)}while(1);Gh(),wc.current=s,We=r,Ct!==null?e=0:(It=null,Bt=0,e=Pt)}if(e!==0){if(e===2&&(r=vd(t),r!==0&&(i=r,e=$d(t,r))),e===1)throw n=Ra,$r(t,0),er(t,i),gn(t,Mt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,(i&30)===0&&!q2(r)&&(e=bc(t,i),e===2&&(s=vd(t),s!==0&&(i=s,e=$d(t,s))),e===1))throw n=Ra,$r(t,0),er(t,i),gn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Rr(t,cn,Ci);break;case 3:if(er(t,i),(i&130023424)===i&&(e=np+500-Mt(),10<e)){if(ac(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bd(Rr.bind(null,t,cn,Ci),e);break}Rr(t,cn,Ci);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*X2(i/1960))-i,10<i){t.timeoutHandle=bd(Rr.bind(null,t,cn,Ci),i);break}Rr(t,cn,Ci);break;case 5:Rr(t,cn,Ci);break;default:throw Error(se(329))}}}return gn(t,Mt()),t.callbackNode===n?y_.bind(null,t):null}function $d(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=bc(t,e),t!==2&&(e=cn,cn=n,e!==null&&jd(e)),t}function jd(t){cn===null?cn=t:cn.push.apply(cn,t)}function q2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~tp,e&=~Kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function eg(t){if((We&6)!==0)throw Error(se(327));to();var e=ac(t,0);if((e&1)===0)return gn(t,Mt()),null;var n=bc(t,e);if(t.tag!==0&&n===2){var i=vd(t);i!==0&&(e=i,n=$d(t,i))}if(n===1)throw n=Ra,$r(t,0),er(t,e),gn(t,Mt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,cn,Ci),gn(t,Mt()),null}function ip(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(mo=Mt()+500,Yc&&Er())}}function ts(t){ir!==null&&ir.tag===0&&(We&6)===0&&to();var e=We;We|=1;var n=Fn.transition,i=Ke;try{if(Fn.transition=null,Ke=1,t)return t()}finally{Ke=i,Fn.transition=n,We=e,(We&6)===0&&Er()}}function rp(){yn=$s.current,at($s)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,E2(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(Nh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dc();break;case 3:ho(),at(pn),at(Yt),Xh();break;case 5:jh(i);break;case 4:ho();break;case 13:at(ut);break;case 19:at(ut);break;case 10:Vh(i.type._context);break;case 22:case 23:rp()}n=n.return}if(It=t,Ct=t=dr(t.current,null),Bt=yn=e,Pt=0,Ra=null,tp=Kc=es=0,cn=aa=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Nr=null}return t}function S_(t,e){do{var n=Ct;try{if(Gh(),jl.current=Sc,yc){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yc=!1}if(Kr=0,Dt=At=dt=null,sa=!1,Aa=0,ep.current=null,n===null||n.return===null){Pt=1,Ra=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if((u.mode&1)===0&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Gm(o);if(m!==null){m.flags&=-257,Vm(m,o,a,s,e),m.mode&1&&Um(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var h=new Set;h.add(l),e.updateQueue=h}else _.add(l);break e}else{if((e&1)===0){Um(s,c,e),sp();break e}l=Error(se(426))}}else if(ct&&a.mode&1){var p=Gm(o);if(p!==null){(p.flags&65536)===0&&(p.flags|=256),Vm(p,o,a,s,e),Bh(po(l,a));break e}}s=l=po(l,a),Pt!==4&&(Pt=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=r_(s,l,e);Im(s,g);break e;case 1:a=l;var v=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ur===null||!ur.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=s_(s,a,e);Im(s,S);break e}}s=s.return}while(s!==null)}E_(n)}catch(w){e=w,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(1)}function w_(){var t=wc.current;return wc.current=Sc,t===null?Sc:t}function sp(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),It===null||(es&268435455)===0&&(Kc&268435455)===0||er(It,Bt)}function bc(t,e){var n=We;We|=2;var i=w_();(It!==t||Bt!==e)&&(Ci=null,$r(t,e));do try{Y2();break}catch(r){S_(t,r)}while(1);if(Gh(),We=n,wc.current=i,Ct!==null)throw Error(se(261));return It=null,Bt=0,Pt}function Y2(){for(;Ct!==null;)M_(Ct)}function Z2(){for(;Ct!==null&&!SS();)M_(Ct)}function M_(t){var e=C_(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?E_(t):Ct=e,ep.current=null}function E_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=V2(n,e,yn),n!==null){Ct=n;return}}else{if(n=H2(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function Rr(t,e,n){var i=Ke,r=Fn.transition;try{Fn.transition=null,Ke=1,Q2(t,e,n,i)}finally{Fn.transition=r,Ke=i}return null}function Q2(t,e,n,i){do to();while(ir!==null);if((We&6)!==0)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(RS(t,s),t===It&&(Ct=It=null,Bt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ol||(ol=!0,T_(oc,function(){return to(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Fn.transition,Fn.transition=null;var o=Ke;Ke=1;var a=We;We|=4,ep.current=null,$2(t,n),__(n,t),v2(Md),lc=!!wd,Md=wd=null,t.current=n,j2(n),wS(),We=a,Ke=o,Fn.transition=s}else t.current=n;if(ol&&(ol=!1,ir=t,Ec=r),s=t.pendingLanes,s===0&&(ur=null),bS(n.stateNode),gn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Mc)throw Mc=!1,t=Hd,Hd=null,t;return(Ec&1)!==0&&t.tag!==0&&to(),s=t.pendingLanes,(s&1)!==0?t===Wd?la++:(la=0,Wd=t):la=0,Er(),null}function to(){if(ir!==null){var t=i1(Ec),e=Fn.transition,n=Ke;try{if(Fn.transition=null,Ke=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,Ec=0,(We&6)!==0)throw Error(se(331));var r=We;for(We|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if((xe.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(xe=c;xe!==null;){var u=xe;switch(u.tag){case 0:case 11:case 15:oa(8,u,s)}var f=u.child;if(f!==null)f.return=u,xe=f;else for(;xe!==null;){u=xe;var d=u.sibling,m=u.return;if(m_(u),u===c){xe=null;break}if(d!==null){d.return=m,xe=d;break}xe=m}}}var _=s.alternate;if(_!==null){var h=_.child;if(h!==null){_.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}xe=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,xe=g;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){o=xe;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,xe=x;else e:for(o=v;xe!==null;){if(a=xe,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Jc(9,a)}}catch(w){xt(a,a.return,w)}if(a===o){xe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,xe=S;break e}xe=a.return}}if(We=r,Er(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(Wc,t)}catch{}i=!0}return i}finally{Ke=n,Fn.transition=e}}return!1}function tg(t,e,n){e=po(n,e),e=r_(t,e,1),t=cr(t,e,1),e=rn(),t!==null&&(Ua(t,1,e),gn(t,e))}function xt(t,e,n){if(t.tag===3)tg(t,t,n);else for(;e!==null;){if(e.tag===3){tg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=po(n,t),t=s_(e,t,1),e=cr(e,t,1),t=rn(),e!==null&&(Ua(e,1,t),gn(e,t));break}}e=e.return}}function J2(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Bt&n)===n&&(Pt===4||Pt===3&&(Bt&130023424)===Bt&&500>Mt()-np?$r(t,0):tp|=n),gn(t,e)}function b_(t,e){e===0&&((t.mode&1)===0?e=1:(e=Za,Za<<=1,(Za&130023424)===0&&(Za=4194304)));var n=rn();t=Fi(t,e),t!==null&&(Ua(t,e,n),gn(t,n))}function K2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),b_(t,n)}function ew(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),b_(t,n)}var C_;C_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)dn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return dn=!1,G2(t,e,n);dn=(t.flags&131072)!==0}else dn=!1,ct&&(e.flags&1048576)!==0&&P1(e,mc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ql(t,e),t=e.pendingProps;var r=co(e,Yt.current);eo(e,n),r=Yh(null,e,i,t,r,n);var s=Zh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,hc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wh(e),r.updater=Zc,e.stateNode=r,r._reactInternals=e,Dd(e,i,t,n),e=kd(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Fh(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ql(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nw(i),t=Xn(i,t),r){case 0:e=Od(null,e,i,t,n);break e;case 1:e=$m(null,e,i,t,n);break e;case 11:e=Hm(null,e,i,t,n);break e;case 14:e=Wm(null,e,i,Xn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Od(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),$m(t,e,i,r,n);case 3:e:{if(c_(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,I1(t,e),_c(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=po(Error(se(423)),e),e=jm(t,e,i,n,r);break e}else if(i!==r){r=po(Error(se(424)),e),e=jm(t,e,i,n,r);break e}else for(Sn=lr(e.stateNode.containerInfo.firstChild),Mn=e,ct=!0,Yn=null,n=F1(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(uo(),i===r){e=Ni(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return N1(e),t===null&&Pd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ed(i,r)?o=null:s!==null&&Ed(i,s)&&(e.flags|=32),l_(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&Pd(e),null;case 13:return u_(t,e,n);case 4:return $h(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fo(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Hm(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(gc,i._currentValue),i._currentValue=o,s!==null)if(ri(s.value,o)){if(s.children===r.children&&!pn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ld(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ld(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,eo(e,n),r=Nn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),Wm(t,e,i,r,n);case 15:return o_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),ql(t,e),e.tag=1,mn(i)?(t=!0,hc(e)):t=!1,eo(e,n),k1(e,i,r),Dd(e,i,r,n),kd(null,e,i,!0,t,n);case 19:return f_(t,e,n);case 22:return a_(t,e,n)}throw Error(se(156,e.tag))};function T_(t,e){return Kv(t,e)}function tw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new tw(t,e,n,i)}function op(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nw(t){if(typeof t=="function")return op(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bh)return 11;if(t===Ch)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ql(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")op(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ks:return jr(n.children,r,s,e);case Eh:o=8,r|=8;break;case nd:return t=kn(12,n,e,r|2),t.elementType=nd,t.lanes=s,t;case id:return t=kn(13,n,e,r),t.elementType=id,t.lanes=s,t;case rd:return t=kn(19,n,e,r),t.elementType=rd,t.lanes=s,t;case zv:return eu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ov:o=10;break e;case kv:o=9;break e;case bh:o=11;break e;case Ch:o=14;break e;case Qi:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function eu(t,e,n,i){return t=kn(22,t,i,e),t.elementType=zv,t.lanes=n,t.stateNode={isHidden:!1},t}function cf(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function uf(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hu(0),this.expirationTimes=Hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ap(t,e,n,i,r,s,o,a,l){return t=new iw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wh(s),t}function rw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function A_(t){if(!t)return vr;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(mn(n))return T1(t,n,e)}return e}function P_(t,e,n,i,r,s,o,a,l){return t=ap(n,i,!0,t,r,s,o,a,l),t.context=A_(null),n=t.current,i=rn(),r=fr(n),s=Di(i,r),s.callback=e!=null?e:null,cr(n,s,r),t.current.lanes=r,Ua(t,r,i),gn(t,i),t}function tu(t,e,n,i){var r=e.current,s=rn(),o=fr(r);return n=A_(n),e.context===null?e.context=n:e.pendingContext=n,e=Di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,o),t!==null&&(ti(t,r,o,s),$l(t,r,o)),o}function Cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ng(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lp(t,e){ng(t,e),(t=t.alternate)&&ng(t,e)}function sw(){return null}var L_=typeof reportError=="function"?reportError:function(t){console.error(t)};function cp(t){this._internalRoot=t}nu.prototype.render=cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));tu(t,e,null,null)};nu.prototype.unmount=cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){tu(null,t,null,null)}),e[zi]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=o1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&l1(t)}};function up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ig(){}function ow(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Cc(o);s.call(c)}}var o=P_(e,i,t,0,null,!1,!1,"",ig);return t._reactRootContainer=o,t[zi]=o.current,Ma(t.nodeType===8?t.parentNode:t),ts(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Cc(l);a.call(c)}}var l=ap(t,0,!1,null,null,!1,!1,"",ig);return t._reactRootContainer=l,t[zi]=l.current,Ma(t.nodeType===8?t.parentNode:t),ts(function(){tu(e,l,n,i)}),l}function ru(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Cc(o);a.call(l)}}tu(e,o,t,r)}else o=ow(n,e,t,r,i);return Cc(o)}r1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jo(e.pendingLanes);n!==0&&(Ph(e,n|1),gn(e,Mt()),(We&6)===0&&(mo=Mt()+500,Er()))}break;case 13:ts(function(){var i=Fi(t,1);if(i!==null){var r=rn();ti(i,t,1,r)}}),lp(t,1)}};Lh=function(t){if(t.tag===13){var e=Fi(t,134217728);if(e!==null){var n=rn();ti(e,t,134217728,n)}lp(t,134217728)}};s1=function(t){if(t.tag===13){var e=fr(t),n=Fi(t,e);if(n!==null){var i=rn();ti(n,t,e,i)}lp(t,e)}};o1=function(){return Ke};a1=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};pd=function(t,e,n){switch(e){case"input":if(ad(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=qc(i);if(!r)throw Error(se(90));Nv(i),ad(i,r)}}}break;case"textarea":Uv(t,n);break;case"select":e=n.value,e!=null&&Zs(t,!!n.multiple,e,!1)}};Xv=ip;qv=ts;var aw={usingClientEntryPoint:!1,Events:[Va,Bs,qc,$v,jv,ip]},Uo={findFiberByHostInstance:Fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lw={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qv(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||sw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{Wc=al.inject(lw),mi=al}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aw;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!up(e))throw Error(se(200));return rw(t,e,null,n)};Cn.createRoot=function(t,e){if(!up(t))throw Error(se(299));var n=!1,i="",r=L_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ap(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,Ma(t.nodeType===8?t.parentNode:t),new cp(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Qv(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return ts(t)};Cn.hydrate=function(t,e,n){if(!iu(e))throw Error(se(200));return ru(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!up(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=L_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P_(e,null,t,1,n!=null?n:null,r,!1,s,o),t[zi]=e.current,Ma(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nu(e)};Cn.render=function(t,e,n){if(!iu(e))throw Error(se(200));return ru(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!iu(t))throw Error(se(40));return t._reactRootContainer?(ts(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};Cn.unstable_batchedUpdates=ip;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!iu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return ru(t,e,n,!1,i)};Cn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Cn})(yh);function cw(t){t()}let R_=cw;const uw=t=>R_=t,fw=()=>R_,_r=Kn.createContext(null);function D_(){return he.exports.useContext(_r)}const dw=()=>{throw new Error("uSES not initialized!")};let I_=dw;const hw=t=>{I_=t},pw=(t,e)=>t===e;function mw(t=_r){const e=t===_r?D_:()=>he.exports.useContext(t);return function(i,r=pw){const{store:s,subscription:o,getServerState:a}=e(),l=I_(o.addNestedSub,s.getState,a||s.getState,i,r);return he.exports.useDebugValue(l),l}}const O_=mw();function Tc(){return Tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Tc.apply(this,arguments)}function gw(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var k_={exports:{}},et={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ot=typeof Symbol=="function"&&Symbol.for,fp=Ot?Symbol.for("react.element"):60103,dp=Ot?Symbol.for("react.portal"):60106,su=Ot?Symbol.for("react.fragment"):60107,ou=Ot?Symbol.for("react.strict_mode"):60108,au=Ot?Symbol.for("react.profiler"):60114,lu=Ot?Symbol.for("react.provider"):60109,cu=Ot?Symbol.for("react.context"):60110,hp=Ot?Symbol.for("react.async_mode"):60111,uu=Ot?Symbol.for("react.concurrent_mode"):60111,fu=Ot?Symbol.for("react.forward_ref"):60112,du=Ot?Symbol.for("react.suspense"):60113,vw=Ot?Symbol.for("react.suspense_list"):60120,hu=Ot?Symbol.for("react.memo"):60115,pu=Ot?Symbol.for("react.lazy"):60116,_w=Ot?Symbol.for("react.block"):60121,xw=Ot?Symbol.for("react.fundamental"):60117,yw=Ot?Symbol.for("react.responder"):60118,Sw=Ot?Symbol.for("react.scope"):60119;function An(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case fp:switch(t=t.type,t){case hp:case uu:case su:case au:case ou:case du:return t;default:switch(t=t&&t.$$typeof,t){case cu:case fu:case pu:case hu:case lu:return t;default:return e}}case dp:return e}}}function z_(t){return An(t)===uu}et.AsyncMode=hp;et.ConcurrentMode=uu;et.ContextConsumer=cu;et.ContextProvider=lu;et.Element=fp;et.ForwardRef=fu;et.Fragment=su;et.Lazy=pu;et.Memo=hu;et.Portal=dp;et.Profiler=au;et.StrictMode=ou;et.Suspense=du;et.isAsyncMode=function(t){return z_(t)||An(t)===hp};et.isConcurrentMode=z_;et.isContextConsumer=function(t){return An(t)===cu};et.isContextProvider=function(t){return An(t)===lu};et.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===fp};et.isForwardRef=function(t){return An(t)===fu};et.isFragment=function(t){return An(t)===su};et.isLazy=function(t){return An(t)===pu};et.isMemo=function(t){return An(t)===hu};et.isPortal=function(t){return An(t)===dp};et.isProfiler=function(t){return An(t)===au};et.isStrictMode=function(t){return An(t)===ou};et.isSuspense=function(t){return An(t)===du};et.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===su||t===uu||t===au||t===ou||t===du||t===vw||typeof t=="object"&&t!==null&&(t.$$typeof===pu||t.$$typeof===hu||t.$$typeof===lu||t.$$typeof===cu||t.$$typeof===fu||t.$$typeof===xw||t.$$typeof===yw||t.$$typeof===Sw||t.$$typeof===_w)};et.typeOf=An;(function(t){t.exports=et})(k_);var pp=k_.exports,ww={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ew={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},F_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mp={};mp[pp.ForwardRef]=Ew;mp[pp.Memo]=F_;function rg(t){return pp.isMemo(t)?F_:mp[t.$$typeof]||ww}var bw=Object.defineProperty,Cw=Object.getOwnPropertyNames,sg=Object.getOwnPropertySymbols,Tw=Object.getOwnPropertyDescriptor,Aw=Object.getPrototypeOf,og=Object.prototype;function N_(t,e,n){if(typeof e!="string"){if(og){var i=Aw(e);i&&i!==og&&N_(t,i,n)}var r=Cw(e);sg&&(r=r.concat(sg(e)));for(var s=rg(t),o=rg(e),a=0;a<r.length;++a){var l=r[a];if(!Mw[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var c=Tw(e,l);try{bw(t,l,c)}catch{}}}}return t}var Pw=N_,gp={exports:{}},tt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=Symbol.for("react.element"),_p=Symbol.for("react.portal"),mu=Symbol.for("react.fragment"),gu=Symbol.for("react.strict_mode"),vu=Symbol.for("react.profiler"),_u=Symbol.for("react.provider"),xu=Symbol.for("react.context"),Lw=Symbol.for("react.server_context"),yu=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),Mu=Symbol.for("react.memo"),Eu=Symbol.for("react.lazy"),Rw=Symbol.for("react.offscreen"),B_;B_=Symbol.for("react.module.reference");function Un(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case vp:switch(t=t.type,t){case mu:case vu:case gu:case Su:case wu:return t;default:switch(t=t&&t.$$typeof,t){case Lw:case xu:case yu:case Eu:case Mu:case _u:return t;default:return e}}case _p:return e}}}tt.ContextConsumer=xu;tt.ContextProvider=_u;tt.Element=vp;tt.ForwardRef=yu;tt.Fragment=mu;tt.Lazy=Eu;tt.Memo=Mu;tt.Portal=_p;tt.Profiler=vu;tt.StrictMode=gu;tt.Suspense=Su;tt.SuspenseList=wu;tt.isAsyncMode=function(){return!1};tt.isConcurrentMode=function(){return!1};tt.isContextConsumer=function(t){return Un(t)===xu};tt.isContextProvider=function(t){return Un(t)===_u};tt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===vp};tt.isForwardRef=function(t){return Un(t)===yu};tt.isFragment=function(t){return Un(t)===mu};tt.isLazy=function(t){return Un(t)===Eu};tt.isMemo=function(t){return Un(t)===Mu};tt.isPortal=function(t){return Un(t)===_p};tt.isProfiler=function(t){return Un(t)===vu};tt.isStrictMode=function(t){return Un(t)===gu};tt.isSuspense=function(t){return Un(t)===Su};tt.isSuspenseList=function(t){return Un(t)===wu};tt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===mu||t===vu||t===gu||t===Su||t===wu||t===Rw||typeof t=="object"&&t!==null&&(t.$$typeof===Eu||t.$$typeof===Mu||t.$$typeof===_u||t.$$typeof===xu||t.$$typeof===yu||t.$$typeof===B_||t.getModuleId!==void 0)};tt.typeOf=Un;(function(t){t.exports=tt})(gp);function Dw(){const t=fw();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let i=e;for(;i;)i.callback(),i=i.next})},get(){let i=[],r=e;for(;r;)i.push(r),r=r.next;return i},subscribe(i){let r=!0,s=n={callback:i,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!r||e===null||(r=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const ag={notify(){},get:()=>[]};function Iw(t,e){let n,i=ag;function r(f){return l(),i.subscribe(f)}function s(){i.notify()}function o(){u.onStateChange&&u.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),i=Dw())}function c(){n&&(n(),n=void 0,i.clear(),i=ag)}const u={addNestedSub:r,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:c,getListeners:()=>i};return u}const Ow=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kw=Ow?he.exports.useLayoutEffect:he.exports.useEffect;var bu={exports:{}},Cu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zw=he.exports,Fw=Symbol.for("react.element"),Nw=Symbol.for("react.fragment"),Bw=Object.prototype.hasOwnProperty,Uw=zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gw={key:!0,ref:!0,__self:!0,__source:!0};function U_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Bw.call(e,i)&&!Gw.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Fw,type:t,key:s,ref:o,props:r,_owner:Uw.current}}Cu.Fragment=Nw;Cu.jsx=U_;Cu.jsxs=U_;(function(t){t.exports=Cu})(bu);const $e=bu.exports.Fragment,L=bu.exports.jsx,Ae=bu.exports.jsxs;function Vw({store:t,context:e,children:n,serverState:i}){const r=he.exports.useMemo(()=>{const a=Iw(t);return{store:t,subscription:a,getServerState:i?()=>i:void 0}},[t,i]),s=he.exports.useMemo(()=>t.getState(),[t]);return kw(()=>{const{subscription:a}=r;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[r,s]),L((e||_r).Provider,{value:r,children:n})}function G_(t=_r){const e=t===_r?D_:()=>he.exports.useContext(t);return function(){const{store:i}=e();return i}}const Hw=G_();function Ww(t=_r){const e=t===_r?Hw:G_(t);return function(){return e().dispatch}}const V_=Ww();hw(Av.exports.useSyncExternalStoreWithSelector);uw(yh.exports.unstable_batchedUpdates);var Ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ur||(Ur={}));var lg=function(t){return t},cg="beforeunload",$w="hashchange",jw="popstate";function Xw(t){t===void 0&&(t={});var e=t,n=e.window,i=n===void 0?document.defaultView:n,r=i.history;function s(){var y=ns(i.location.hash.substr(1)),T=y.pathname,I=T===void 0?"/":T,F=y.search,re=F===void 0?"":F,ee=y.hash,U=ee===void 0?"":ee,X=r.state||{};return[X.idx,lg({pathname:I,search:re,hash:U,state:X.usr||null,key:X.key||"default"})]}var o=null;function a(){if(o)m.call(o),o=null;else{var y=Ur.Pop,T=s(),I=T[0],F=T[1];if(m.length){if(I!=null){var re=u-I;re&&(o={action:y,location:F,retry:function(){C(re*-1)}},C(re))}}else x(y)}}i.addEventListener(jw,a),i.addEventListener($w,function(){var y=s(),T=y[1];ff(T)!==ff(f)&&a()});var l=Ur.Pop,c=s(),u=c[0],f=c[1],d=fg(),m=fg();u==null&&(u=0,r.replaceState(Tc({},r.state,{idx:u}),""));function _(){var y=document.querySelector("base"),T="";if(y&&y.getAttribute("href")){var I=i.location.href,F=I.indexOf("#");T=F===-1?I:I.slice(0,F)}return T}function h(y){return _()+"#"+(typeof y=="string"?y:ff(y))}function p(y,T){return T===void 0&&(T=null),lg(Tc({pathname:f.pathname,hash:"",search:""},typeof y=="string"?ns(y):y,{state:T,key:qw()}))}function g(y,T){return[{usr:y.state,key:y.key,idx:T},h(y)]}function v(y,T,I){return!m.length||(m.call({action:y,location:T,retry:I}),!1)}function x(y){l=y;var T=s();u=T[0],f=T[1],d.call({action:l,location:f})}function S(y,T){var I=Ur.Push,F=p(y,T);function re(){S(y,T)}if(v(I,F,re)){var ee=g(F,u+1),U=ee[0],X=ee[1];try{r.pushState(U,"",X)}catch{i.location.assign(X)}x(I)}}function w(y,T){var I=Ur.Replace,F=p(y,T);function re(){w(y,T)}if(v(I,F,re)){var ee=g(F,u),U=ee[0],X=ee[1];r.replaceState(U,"",X),x(I)}}function C(y){r.go(y)}var R={get action(){return l},get location(){return f},createHref:h,push:S,replace:w,go:C,back:function(){C(-1)},forward:function(){C(1)},listen:function(T){return d.push(T)},block:function(T){var I=m.push(T);return m.length===1&&i.addEventListener(cg,ug),function(){I(),m.length||i.removeEventListener(cg,ug)}}};return R}function ug(t){t.preventDefault(),t.returnValue=""}function fg(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(i){return i!==n})}},call:function(n){t.forEach(function(i){return i&&i(n)})}}}function qw(){return Math.random().toString(36).substr(2,8)}function ff(t){var e=t.pathname,n=e===void 0?"/":e,i=t.search,r=i===void 0?"":i,s=t.hash,o=s===void 0?"":s;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function ns(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const H_=he.exports.createContext(null),xp=he.exports.createContext(null),yp=he.exports.createContext({outlet:null,matches:[]});function is(t,e){if(!t)throw new Error(e)}function Yw(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?ns(e):e,r=$_(i.pathname||"/",n);if(r==null)return null;let s=W_(t);Zw(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=sM(s[a],r);return o}function W_(t,e,n,i){return e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i=""),t.forEach((r,s)=>{let o={relativePath:r.path||"",caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(i)||is(!1),o.relativePath=o.relativePath.slice(i.length));let a=Xr([i,o.relativePath]),l=n.concat(o);r.children&&r.children.length>0&&(r.index===!0&&is(!1),W_(r.children,e,l,a)),!(r.path==null&&!r.index)&&e.push({path:a,score:iM(a,r.index),routesMeta:l})}),e}function Zw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:rM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Qw=/^:\w+$/,Jw=3,Kw=2,eM=1,tM=10,nM=-2,dg=t=>t==="*";function iM(t,e){let n=t.split("/"),i=n.length;return n.some(dg)&&(i+=nM),e&&(i+=Kw),n.filter(r=>!dg(r)).reduce((r,s)=>r+(Qw.test(s)?Jw:s===""?eM:tM),i)}function rM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function sM(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=r==="/"?e:e.slice(r.length)||"/",u=oM({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(i,u.params);let f=a.route;s.push({params:i,pathname:Xr([r,u.pathname]),pathnameBase:j_(Xr([r,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(r=Xr([r,u.pathnameBase]))}return s}function oM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=aM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,f)=>{if(u==="*"){let d=a[f]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return c[u]=lM(a[f]||""),c},{}),pathname:s,pathnameBase:o,pattern:t}}function aM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(i.push(a),"([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(r,e?void 0:"i"),i]}function lM(t,e){try{return decodeURIComponent(t)}catch{return t}}function cM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ns(t):t;return{pathname:n?n.startsWith("/")?n:uM(n,e):e,search:dM(i),hash:hM(r)}}function uM(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function fM(t,e,n){let i=typeof t=="string"?ns(t):t,r=t===""||i.pathname===""?"/":i.pathname,s;if(r==null)s=n;else{let a=e.length-1;if(r.startsWith("..")){let l=r.split("/");for(;l[0]==="..";)l.shift(),a-=1;i.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=cM(i,s);return r&&r!=="/"&&r.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function $_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Xr=t=>t.join("/").replace(/\/\/+/g,"/"),j_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Tu(){return he.exports.useContext(xp)!=null}function X_(){return Tu()||is(!1),he.exports.useContext(xp).location}function Au(){Tu()||is(!1);let{basename:t,navigator:e}=he.exports.useContext(H_),{matches:n}=he.exports.useContext(yp),{pathname:i}=X_(),r=JSON.stringify(n.map(a=>a.pathnameBase)),s=he.exports.useRef(!1);return he.exports.useEffect(()=>{s.current=!0}),he.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let c=fM(a,JSON.parse(r),i);t!=="/"&&(c.pathname=Xr([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state)},[t,e,r,i])}function pM(t,e){Tu()||is(!1);let{matches:n}=he.exports.useContext(yp),i=n[n.length-1],r=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let o=X_(),a;if(e){var l;let d=typeof e=="string"?ns(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||is(!1),a=d}else a=o;let c=a.pathname||"/",u=s==="/"?c:c.slice(s.length)||"/",f=Yw(t,{pathname:u});return mM(f&&f.map(d=>Object.assign({},d,{params:Object.assign({},r,d.params),pathname:Xr([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:Xr([s,d.pathnameBase])})),n)}function mM(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,i,r)=>he.exports.createElement(yp.Provider,{children:i.route.element!==void 0?i.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,r+1))}}),null)}function gM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ur.Pop,navigator:s,static:o=!1}=t;Tu()&&is(!1);let a=j_(e),l=he.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=ns(i));let{pathname:c="/",search:u="",hash:f="",state:d=null,key:m="default"}=i,_=he.exports.useMemo(()=>{let h=$_(c,a);return h==null?null:{pathname:h,search:u,hash:f,state:d,key:m}},[a,c,u,f,d,m]);return _==null?null:he.exports.createElement(H_.Provider,{value:l},he.exports.createElement(xp.Provider,{children:n,value:{location:_,navigationType:r}}))}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vM(t){let{basename:e,children:n,window:i}=t,r=he.exports.useRef();r.current==null&&(r.current=Xw({window:i}));let s=r.current,[o,a]=he.exports.useState({action:s.action,location:s.location});return he.exports.useLayoutEffect(()=>s.listen(a),[s]),he.exports.createElement(gM,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const _M=()=>L("div",{children:"Course"}),xM=()=>L("div",{children:"Document"}),jp=class{constructor(){E(this,"type");E(this,"nativeEvent");E(this,"target");E(this,"currentTarget");E(this,"_stoped");E(this,"touchId");E(this,"keyCode");E(this,"delta")}setTo(e,n,i){return this.type=e,this.currentTarget=n,this.target=i,this}stopPropagation(){this._stoped=!0}get altKey(){return this.nativeEvent.altKey}get ctrlKey(){return this.nativeEvent.ctrlKey}get shiftKey(){return this.nativeEvent.shiftKey}get charCode(){return this.nativeEvent.charCode}get keyLocation(){return this.nativeEvent.location||this.nativeEvent.keyLocation}};let ge=jp;E(ge,"EMPTY",new jp),E(ge,"MOUSE_DOWN","mousedown"),E(ge,"MOUSE_UP","mouseup"),E(ge,"CLICK","click"),E(ge,"RIGHT_MOUSE_DOWN","rightmousedown"),E(ge,"RIGHT_MOUSE_UP","rightmouseup"),E(ge,"RIGHT_CLICK","rightclick"),E(ge,"MOUSE_MOVE","mousemove"),E(ge,"MOUSE_OVER","mouseover"),E(ge,"MOUSE_OUT","mouseout"),E(ge,"MOUSE_WHEEL","mousewheel"),E(ge,"ROLL_OVER","mouseover"),E(ge,"ROLL_OUT","mouseout"),E(ge,"DOUBLE_CLICK","doubleclick"),E(ge,"CHANGE","change"),E(ge,"CHANGED","changed"),E(ge,"RESIZE","resize"),E(ge,"ADDED","added"),E(ge,"REMOVED","removed"),E(ge,"DISPLAY","display"),E(ge,"UNDISPLAY","undisplay"),E(ge,"ERROR","error"),E(ge,"COMPLETE","complete"),E(ge,"LOADED","loaded"),E(ge,"READY","ready"),E(ge,"PROGRESS","progress"),E(ge,"INPUT","input"),E(ge,"RENDER","render"),E(ge,"OPEN","open"),E(ge,"MESSAGE","message"),E(ge,"CLOSE","close"),E(ge,"KEY_DOWN","keydown"),E(ge,"KEY_PRESS","keypress"),E(ge,"KEY_UP","keyup"),E(ge,"FRAME","enterframe"),E(ge,"DRAG_START","dragstart"),E(ge,"DRAG_MOVE","dragmove"),E(ge,"DRAG_END","dragend"),E(ge,"ENTER","enter"),E(ge,"SELECT","select"),E(ge,"BLUR","blur"),E(ge,"FOCUS","focus"),E(ge,"VISIBILITY_CHANGE","visibilitychange"),E(ge,"FOCUS_CHANGE","focuschange"),E(ge,"PLAYED","played"),E(ge,"PAUSED","paused"),E(ge,"STOPPED","stopped"),E(ge,"START","start"),E(ge,"END","end"),E(ge,"COMPONENT_ADDED","componentadded"),E(ge,"COMPONENT_REMOVED","componentremoved"),E(ge,"RELEASED","released"),E(ge,"LINK","link"),E(ge,"LABEL","label"),E(ge,"FULL_SCREEN_CHANGE","fullscreenchange"),E(ge,"DEVICE_LOST","devicelost"),E(ge,"TRANSFORM_CHANGED","transformchanged"),E(ge,"ANIMATION_CHANGED","animationchanged"),E(ge,"TRAIL_FILTER_CHANGE","trailfilterchange"),E(ge,"TRIGGER_ENTER","triggerenter"),E(ge,"TRIGGER_STAY","triggerstay"),E(ge,"TRIGGER_EXIT","triggerexit");class ie{}E(ie,"NUMBER_0",48),E(ie,"NUMBER_1",49),E(ie,"NUMBER_2",50),E(ie,"NUMBER_3",51),E(ie,"NUMBER_4",52),E(ie,"NUMBER_5",53),E(ie,"NUMBER_6",54),E(ie,"NUMBER_7",55),E(ie,"NUMBER_8",56),E(ie,"NUMBER_9",57),E(ie,"A",65),E(ie,"B",66),E(ie,"C",67),E(ie,"D",68),E(ie,"E",69),E(ie,"F",70),E(ie,"G",71),E(ie,"H",72),E(ie,"I",73),E(ie,"J",74),E(ie,"K",75),E(ie,"L",76),E(ie,"M",77),E(ie,"N",78),E(ie,"O",79),E(ie,"P",80),E(ie,"Q",81),E(ie,"R",82),E(ie,"S",83),E(ie,"T",84),E(ie,"U",85),E(ie,"V",86),E(ie,"W",87),E(ie,"X",88),E(ie,"Y",89),E(ie,"Z",90),E(ie,"F1",112),E(ie,"F2",113),E(ie,"F3",114),E(ie,"F4",115),E(ie,"F5",116),E(ie,"F6",117),E(ie,"F7",118),E(ie,"F8",119),E(ie,"F9",120),E(ie,"F10",121),E(ie,"F11",122),E(ie,"F12",123),E(ie,"F13",124),E(ie,"F14",125),E(ie,"F15",126),E(ie,"NUMPAD",21),E(ie,"NUMPAD_0",96),E(ie,"NUMPAD_1",97),E(ie,"NUMPAD_2",98),E(ie,"NUMPAD_3",99),E(ie,"NUMPAD_4",100),E(ie,"NUMPAD_5",101),E(ie,"NUMPAD_6",102),E(ie,"NUMPAD_7",103),E(ie,"NUMPAD_8",104),E(ie,"NUMPAD_9",105),E(ie,"NUMPAD_ADD",107),E(ie,"NUMPAD_DECIMAL",110),E(ie,"NUMPAD_DIVIDE",111),E(ie,"NUMPAD_ENTER",108),E(ie,"NUMPAD_MULTIPLY",106),E(ie,"NUMPAD_SUBTRACT",109),E(ie,"SEMICOLON",186),E(ie,"EQUAL",187),E(ie,"COMMA",188),E(ie,"MINUS",189),E(ie,"PERIOD",190),E(ie,"SLASH",191),E(ie,"BACKQUOTE",192),E(ie,"LEFTBRACKET",219),E(ie,"BACKSLASH",220),E(ie,"RIGHTBRACKET",221),E(ie,"QUOTE",222),E(ie,"ALTERNATE",18),E(ie,"BACKSPACE",8),E(ie,"CAPS_LOCK",20),E(ie,"COMMAND",15),E(ie,"CONTROL",17),E(ie,"DELETE",46),E(ie,"ENTER",13),E(ie,"ESCAPE",27),E(ie,"PAGE_UP",33),E(ie,"PAGE_DOWN",34),E(ie,"END",35),E(ie,"HOME",36),E(ie,"LEFT",37),E(ie,"UP",38),E(ie,"RIGHT",39),E(ie,"DOWN",40),E(ie,"SHIFT",16),E(ie,"SPACE",32),E(ie,"TAB",9),E(ie,"INSERT",45);class yM{startUp(){console.log("test module start up."),this.addEvent()}exit(){console.log("test module exit."),this.dispose(),this.removeEvent()}dispose(){}addEvent(){Fe.ED.on(ge.KEY_DOWN,this,this.onkeydown)}removeEvent(){Fe.ED.off(ge.KEY_DOWN,this,this.onkeydown)}onkeydown(e){switch(e.keyCode){case ie.ESCAPE:console.log("press escape key");break}}}var hn=(t=>(t.CAD_SERVICE="service.cad",t.SCHEME_SERVICE="service.scheme",t.SCENE_SERVICE="service.scene",t.MESH_SERVICE="service.mesh",t))(hn||{}),_t=(t=>(t[t.NONE=-1]="NONE",t[t.ROTATE=0]="ROTATE",t[t.ZOOM=1]="ZOOM",t[t.PAN=2]="PAN",t[t.TOUCH_ROTATE=3]="TOUCH_ROTATE",t[t.TOUCH_ZOOM_PAN=4]="TOUCH_ZOOM_PAN",t))(_t||{}),ui=(t=>(t[t.COLOR_PIURITY_DEPTH=3355443]="COLOR_PIURITY_DEPTH",t[t.COLOR_PIURITY_LIGHT=13816790]="COLOR_PIURITY_LIGHT",t[t.IDC_PLANE_COLOR=14014683]="IDC_PLANE_COLOR",t[t.IDC_LINE_COLOR=5526870]="IDC_LINE_COLOR",t[t.IDC_SELECT_COLOR=1272552]="IDC_SELECT_COLOR",t))(ui||{}),Ac=(t=>(t.LEFT_MENU_ITEM_CLICK="left-menu-item-click",t))(Ac||{}),it=(t=>(t[t.RIGHT=0]="RIGHT",t[t.LEFT=1]="LEFT",t[t.TOP=2]="TOP",t[t.BOTTOM=3]="BOTTOM",t[t.FRONT=4]="FRONT",t[t.BACK=5]="BACK",t[t.FRONT_RIGHT_TOP=6]="FRONT_RIGHT_TOP",t[t.FRONT_RIGHT_BOTTOM=7]="FRONT_RIGHT_BOTTOM",t[t.FRONT_LEFT_TOP=8]="FRONT_LEFT_TOP",t[t.FRONT_LEFT_BOTTOM=9]="FRONT_LEFT_BOTTOM",t[t.BACK_RIGHT_TOP=10]="BACK_RIGHT_TOP",t[t.BACK_RIGHT_BOTTOM=11]="BACK_RIGHT_BOTTOM",t[t.BACK_LEFT_TOP=12]="BACK_LEFT_TOP",t[t.BACK_LFET_BORROM=13]="BACK_LFET_BORROM",t[t.EDGE_TOP_FRONE=14]="EDGE_TOP_FRONE",t[t.EDGE_TOP_RIGHT=15]="EDGE_TOP_RIGHT",t[t.EDGE_TOP_BACK=16]="EDGE_TOP_BACK",t[t.EDGE_TOP_LEFT=17]="EDGE_TOP_LEFT",t[t.EDGE_MF_LEFT=18]="EDGE_MF_LEFT",t[t.EDGE_MF_RIGHT=19]="EDGE_MF_RIGHT",t[t.EDGE_MB_RIGHT=20]="EDGE_MB_RIGHT",t[t.EDGE_MB_LEFT=21]="EDGE_MB_LEFT",t[t.EDGE_BOTTOM_FRONE=22]="EDGE_BOTTOM_FRONE",t[t.EDGE_BOTTOM_RIGHT=23]="EDGE_BOTTOM_RIGHT",t[t.EDGE_BOTTOM_BACK=24]="EDGE_BOTTOM_BACK",t[t.EDGE_BOTTOM_LEFT=25]="EDGE_BOTTOM_LEFT",t))(it||{});class SM{startUp(){console.log("event mgr start up"),this.addEvent()}dispose(){this.removeEvent()}addEvent(){Fe.ED.on(Ac.LEFT_MENU_ITEM_CLICK,this,this.leftMenuClick)}removeEvent(){Fe.ED.off(Ac.LEFT_MENU_ITEM_CLICK,this,this.leftMenuClick)}leftMenuClick(e){console.log("left menu click :",e)}}class wM{startUp(){console.log("mesh mgr start up")}dispose(){}}var ca={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-ca.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?ca.Bounce.In(t*2)*.5:ca.Bounce.Out(t*2-1)*.5+.5}}},qo;typeof self>"u"&&typeof process<"u"&&process.hrtime?qo=function(){var t=process.hrtime();return t[0]*1e3+t[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?qo=self.performance.now.bind(self.performance):Date.now!==void 0?qo=Date.now:qo=function(){return new Date().getTime()};var Rs=qo,MM=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(n){return e._tweens[n]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,n){e===void 0&&(e=Rs()),n===void 0&&(n=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!n;s&&s.update(e,o)===!1&&!n&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),Yo={Linear:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),s=Yo.Utils.Linear;return e<0?s(t[0],t[1],i):e>1?s(t[n],t[n-1],n-i):s(t[r],t[r+1>n?n:r+1],i-r)},Bezier:function(t,e){for(var n=0,i=t.length-1,r=Math.pow,s=Yo.Utils.Bernstein,o=0;o<=i;o++)n+=r(1-e,i-o)*r(e,o)*t[o]*s(i,o);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),s=Yo.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(r=Math.floor(i=n*(1+e))),s(t[(r-1+n)%n],t[r],t[(r+1)%n],t[(r+2)%n],i-r)):e<0?t[0]-(s(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(s(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):s(t[r?r-1:0],t[r],t[n<r+1?n:r+1],t[n<r+2?n:r+2],i-r)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=Yo.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,r){var s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}}},q_=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),Y_=new MM,hg=function(){function t(e,n){n===void 0&&(n=Y_),this._object=e,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ca.Linear.None,this._interpolationFunction=Yo.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=q_.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(e,n){return this._valuesEnd=Object.create(e),n!==void 0&&(this._duration=n),this},t.prototype.duration=function(e){return this._duration=e,this},t.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Rs()+parseFloat(e):e:Rs(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},t.prototype._setupProperties=function(e,n,i,r){for(var s in i){var o=e[s],a=Array.isArray(o),l=a?"array":typeof o,c=!a&&Array.isArray(i[s]);if(!(l==="undefined"||l==="function")){if(c){var u=i[s];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,o)),i[s]=[o].concat(u)}if((l==="object"||a)&&o&&!c){n[s]=a?[]:{};for(var f in o)n[s][f]=o[f];r[s]=a?[]:{},this._setupProperties(o,n[s],i[s],r[s])}else typeof n[s]>"u"&&(n[s]=o),a||(n[s]*=1),c?r[s]=i[s].slice().reverse():r[s]=n[s]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=Rs()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=Rs()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,n=this._chainedTweens.length;e<n;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return this._group=e,this},t.prototype.delay=function(e){return this._delayTime=e,this},t.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return this._yoyo=e,this},t.prototype.easing=function(e){return this._easingFunction=e,this},t.prototype.interpolation=function(e){return this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,n){if(e===void 0&&(e=Rs()),n===void 0&&(n=!0),this._isPaused)return!0;var i,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;n&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,n,i,r){for(var s in i)if(n[s]!==void 0){var o=n[s]||0,a=i[s],l=Array.isArray(e[s]),c=Array.isArray(a),u=!l&&c;u?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},t.prototype._handleRelativeValue=function(e,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?e+parseFloat(n):parseFloat(n)},t.prototype._swapEndStartRepeatValues=function(e){var n=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=n},t}();q_.nextId;var xi=Y_;xi.getAll.bind(xi);xi.removeAll.bind(xi);xi.add.bind(xi);xi.remove.bind(xi);var EM=xi.update.bind(xi);class bM{startUp(){console.log("render mgr start up")}dispose(){}render(){const e=Fe.MGR.scene;e.main.render&&(e.main.render.render(e.main.scene,e.main.camera),e.idc&&(e.idc.changeFace(),e.idc.camera.position.copy(e.main.camera.position.clone().sub(e.main.controls.target)),e.idc.camera.updateProjectionMatrix(),e.idc.camera.lookAt(e.main.scene.position),e.idc.render.render(e.idc.scene,e.idc.camera))),e.main.css2dRender&&e.main.css2dRender.render(e.main.scene,e.main.camera),e.example.render&&e.example.render.render(e.example.scene,e.example.camera),e.update();try{EM(void 0)}catch{console.log("Tween.js update error!")}}}class CM{static animateCamera(e,n,i,r,s,o,a,l){if(hg){let u={x1:i.x,y1:i.y,z1:i.z,x2:r.x,y2:r.y,z2:r.z};var c=new hg(u);c.to({x1:s.x,y1:s.y,z1:s.z,x2:o.x,y2:o.y,z2:o.z},a),c.onUpdate(function(){e.position.x=u.x1,e.position.y=u.y1,e.position.z=u.z1,n.target.x=u.x2,n.target.y=u.y2,n.target.z=u.z2,n.update()}),c.onComplete(function(){n.enabled=!0,l&&l()}),c.easing(ca.Linear.None),c.start(void 0)}}}var Pc=(t=>(t.IDC_POINTER_DOWN="idc_pointer_down",t))(Pc||{});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sp="143",df={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},TM=0,pg=1,AM=2,Z_=1,PM=2,Zo=3,Da=0,ni=1,xr=2,LM=1,hr=0,no=1,mg=2,gg=3,vg=4,RM=5,Ds=100,DM=101,IM=102,_g=103,xg=104,OM=200,kM=201,zM=202,FM=203,Q_=204,J_=205,NM=206,BM=207,UM=208,GM=209,VM=210,HM=0,WM=1,$M=2,Xd=3,jM=4,XM=5,qM=6,YM=7,wp=0,ZM=1,QM=2,Ii=0,JM=1,KM=2,e3=3,t3=4,n3=5,K_=300,go=301,vo=302,qd=303,Yd=304,Pu=306,Zd=1e3,Zn=1001,Qd=1002,un=1003,yg=1004,Sg=1005,On=1006,i3=1007,Lu=1008,rs=1009,r3=1010,s3=1011,ex=1012,o3=1013,Gr=1014,Vr=1015,Ia=1016,a3=1017,l3=1018,io=1020,c3=1021,tx=1022,pi=1023,u3=1024,f3=1025,qr=1026,_o=1027,d3=1028,h3=1029,p3=1030,m3=1031,g3=1033,hf=33776,pf=33777,mf=33778,gf=33779,wg=35840,Mg=35841,Eg=35842,bg=35843,v3=36196,Cg=37492,Tg=37496,Ag=37808,Pg=37809,Lg=37810,Rg=37811,Dg=37812,Ig=37813,Og=37814,kg=37815,zg=37816,Fg=37817,Ng=37818,Bg=37819,Ug=37820,Gg=37821,Vg=36492,ss=3e3,ot=3001,_3=3200,x3=3201,nx=0,y3=1,Ti="srgb",Hr="srgb-linear",vf=7680,S3=519,Jd=35044,Hg="300 es",Kd=1035;class bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wg=1234567;const ua=Math.PI/180,Lc=180/Math.PI;function Oi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function Mp(t,e){return(t%e+e)%e}function w3(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function M3(t,e,n){return t!==e?(n-t)/(e-t):0}function fa(t,e,n){return(1-n)*t+n*e}function E3(t,e,n,i){return fa(t,e,1-Math.exp(-n*i))}function b3(t,e=1){return e-Math.abs(Mp(t,e*2)-e)}function C3(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function T3(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function A3(t,e){return t+Math.floor(Math.random()*(e-t+1))}function P3(t,e){return t+Math.random()*(e-t)}function L3(t){return t*(.5-Math.random())}function R3(t){t!==void 0&&(Wg=t);let e=Wg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function D3(t){return t*ua}function I3(t){return t*Lc}function eh(t){return(t&t-1)===0&&t!==0}function O3(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Rc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function k3(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),m=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*m,a*c);break;case"YXY":t.set(l*m,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function z3(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function F3(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var N3=Object.freeze({__proto__:null,DEG2RAD:ua,RAD2DEG:Lc,generateUUID:Oi,clamp:nn,euclideanModulo:Mp,mapLinear:w3,inverseLerp:M3,lerp:fa,damp:E3,pingpong:b3,smoothstep:C3,smootherstep:T3,randInt:A3,randFloat:P3,randFloatSpread:L3,seededRandom:R3,degToRad:D3,radToDeg:I3,isPowerOfTwo:eh,ceilPowerOfTwo:O3,floorPowerOfTwo:Rc,setQuaternionFromProperEuler:k3,normalize:F3,denormalize:z3});class Re{constructor(e=0,n=0){Re.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zn{constructor(){zn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],_=i[8],h=r[0],p=r[3],g=r[6],v=r[1],x=r[4],S=r[7],w=r[2],C=r[5],R=r[8];return s[0]=o*h+a*v+l*w,s[3]=o*p+a*x+l*C,s[6]=o*g+a*S+l*R,s[1]=c*h+u*v+f*w,s[4]=c*p+u*x+f*C,s[7]=c*g+u*S+f*R,s[2]=d*h+m*v+_*w,s[5]=d*p+m*x+_*C,s[8]=d*g+m*S+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,_=n*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/_;return e[0]=f*h,e[1]=(r*c-u*i)*h,e[2]=(a*i-r*o)*h,e[3]=d*h,e[4]=(u*n-r*l)*h,e[5]=(r*s-a*n)*h,e[6]=m*h,e[7]=(i*l-c*n)*h,e[8]=(o*n-i*s)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*c,r[6]=n*a+i*u,r[1]=-i*s+n*l,r[4]=-i*o+n*c,r[7]=-i*a+n*u,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ix(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function Dc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Yr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const _f={[Ti]:{[Hr]:Yr},[Hr]:{[Ti]:Jl}},Hn={legacyMode:!0,get workingColorSpace(){return Hr},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(_f[e]&&_f[e][n]!==void 0){const i=_f[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tt={r:0,g:0,b:0},Wn={h:0,s:0,l:0},ll={h:0,s:0,l:0};function xf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function cl(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Hn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Hr){return this.r=e,this.g=n,this.b=i,Hn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Hr){if(e=Mp(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=xf(o,s,e+1/3),this.g=xf(o,s,e),this.b=xf(o,s,e-1/3)}return Hn.toWorkingColorSpace(this,r),this}setStyle(e,n=Ti){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Hn.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Hn.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Hn.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Hn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Ti){const i=rx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=Jl(e.r),this.g=Jl(e.g),this.b=Jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return Hn.fromWorkingColorSpace(cl(this,Tt),e),nn(Tt.r*255,0,255)<<16^nn(Tt.g*255,0,255)<<8^nn(Tt.b*255,0,255)<<0}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Hr){Hn.fromWorkingColorSpace(cl(this,Tt),n);const i=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Hr){return Hn.fromWorkingColorSpace(cl(this,Tt),n),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Ti){return Hn.fromWorkingColorSpace(cl(this,Tt),e),e!==Ti?`color(${e} ${Tt.r} ${Tt.g} ${Tt.b})`:`rgb(${Tt.r*255|0},${Tt.g*255|0},${Tt.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(Wn),Wn.h+=e,Wn.s+=n,Wn.l+=i,this.setHSL(Wn.h,Wn.s,Wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wn),e.getHSL(ll);const i=fa(Wn.h,ll.h,n),r=fa(Wn.s,ll.s,n),s=fa(Wn.l,ll.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}He.NAMES=rx;let gs;class sx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Dc("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yr(n[i]/255)*255):n[i]=Yr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ox{constructor(e=null){this.isSource=!0,this.uuid=Oi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yf(r[o].image)):s.push(yf(r[o]))}else s=yf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function yf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B3=0;class si extends bo{constructor(e=si.DEFAULT_IMAGE,n=si.DEFAULT_MAPPING,i=Zn,r=Zn,s=On,o=Lu,a=pi,l=rs,c=1,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B3++}),this.uuid=Oi(),this.name="",this.source=new ox(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zd:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zd:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=K_;class ft{constructor(e=0,n=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-h)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+h)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(m+1)/2,w=(g+1)/2,C=(u+d)/4,R=(f+h)/4,y=(_+p)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=R/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(f-h)*(f-h)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(f-h)/v,this.z=(d-u)/v,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class os extends bo{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new si(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:On,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ox(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ax extends si{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U3 extends si{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Co{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],_=s[o+2],h=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=_,e[n+3]=h;return}if(f!==h||l!==d||c!==m||u!==_){let p=1-a;const g=l*d+c*m+u*_+f*h,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const w=Math.sqrt(x),C=Math.atan2(w,g*v);p=Math.sin(p*C)/w,a=Math.sin(a*C)/w}const S=a*v;if(l=l*p+d*S,c=c*p+m*S,u=u*p+_*S,f=f*p+h*S,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*m-c*d,e[n+1]=l*_+u*d+c*f-a*m,e[n+2]=c*_+u*m+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($g.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($g.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=c*l+d*-s+u*-a-f*-o,this.y=u*l+d*-o+f*-s-c*-a,this.z=f*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sf.copy(this).projectOnVector(e),this.sub(Sf)}reflect(e){return this.sub(Sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sf=new D,$g=new Co;class br{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<n&&(n=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<n&&(n=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Tr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Tr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Tr)}else i.boundingBox===null&&i.computeBoundingBox(),wf.copy(i.boundingBox),wf.applyMatrix4(e.matrixWorld),this.union(wf);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tr),Tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),ul.subVectors(this.max,Go),vs.subVectors(e.a,Go),_s.subVectors(e.b,Go),xs.subVectors(e.c,Go),Wi.subVectors(_s,vs),$i.subVectors(xs,_s),Ar.subVectors(vs,xs);let n=[0,-Wi.z,Wi.y,0,-$i.z,$i.y,0,-Ar.z,Ar.y,Wi.z,0,-Wi.x,$i.z,0,-$i.x,Ar.z,0,-Ar.x,-Wi.y,Wi.x,0,-$i.y,$i.x,0,-Ar.y,Ar.x,0];return!Mf(n,vs,_s,xs,ul)||(n=[1,0,0,0,1,0,0,0,1],!Mf(n,vs,_s,xs,ul))?!1:(fl.crossVectors(Wi,$i),n=[fl.x,fl.y,fl.z],Mf(n,vs,_s,xs,ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Tr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Tr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new D,new D,new D,new D,new D,new D,new D,new D],Tr=new D,wf=new br,vs=new D,_s=new D,xs=new D,Wi=new D,$i=new D,Ar=new D,Go=new D,ul=new D,fl=new D,Pr=new D;function Mf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Pr.fromArray(t,s);const a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=n.dot(Pr),u=i.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const G3=new br,jg=new D,dl=new D,Ef=new D;class To{constructor(e=new D,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):G3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ef.subVectors(e,this.center);const n=Ef.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(Ef.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?dl.set(0,0,1).multiplyScalar(e.radius):dl.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(jg.copy(e.center).add(dl)),this.expandByPoint(jg.copy(e.center).sub(dl)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new D,bf=new D,hl=new D,ji=new D,Cf=new D,pl=new D,Tf=new D;class Ep{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.direction).multiplyScalar(n).add(this.origin),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){bf.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),ji.copy(this.origin).sub(bf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(hl),a=ji.dot(this.direction),l=-ji.dot(hl),c=ji.lengthSq(),u=Math.abs(1-o*o);let f,d,m,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const h=1/u;f*=h,d*=h,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(hl).multiplyScalar(d).add(bf),m}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){Cf.subVectors(n,e),pl.subVectors(i,e),Tf.crossVectors(Cf,pl);let o=this.direction.dot(Tf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(pl.crossVectors(ji,pl));if(l<0)return null;const c=a*this.direction.dot(Cf.cross(ji));if(c<0||l+c>o)return null;const u=-a*ji.dot(Tf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,c,u,f,d,m,_,h,p){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=d,g[3]=m,g[7]=_,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,_=a*u,h=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=d-h*c,n[9]=-a*l,n[2]=h-d*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,_=c*u,h=c*f;n[0]=d+h*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-_,n[6]=h+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,_=c*u,h=c*f;n[0]=d-h*a,n[4]=-o*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*u,n[9]=h-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,_=a*u,h=a*f;n[0]=l*u,n[4]=_*c-m,n[8]=d*c+h,n[1]=l*f,n[5]=h*c+d,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=a*l,h=a*c;n[0]=l*u,n[4]=h-d*f,n[8]=_*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+_,n[10]=d-h*f}else if(e.order==="XZY"){const d=o*l,m=o*c,_=a*l,h=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+h,n[5]=o*u,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*u,n[10]=h*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V3,e,H3)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Xi.crossVectors(i,_n),Xi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Xi.crossVectors(i,_n)),Xi.normalize(),ml.crossVectors(_n,Xi),r[0]=Xi.x,r[4]=ml.x,r[8]=_n.x,r[1]=Xi.y,r[5]=ml.y,r[9]=_n.y,r[2]=Xi.z,r[6]=ml.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],_=i[2],h=i[6],p=i[10],g=i[14],v=i[3],x=i[7],S=i[11],w=i[15],C=r[0],R=r[4],y=r[8],T=r[12],I=r[1],F=r[5],re=r[9],ee=r[13],U=r[2],X=r[6],$=r[10],J=r[14],O=r[3],k=r[7],G=r[11],K=r[15];return s[0]=o*C+a*I+l*U+c*O,s[4]=o*R+a*F+l*X+c*k,s[8]=o*y+a*re+l*$+c*G,s[12]=o*T+a*ee+l*J+c*K,s[1]=u*C+f*I+d*U+m*O,s[5]=u*R+f*F+d*X+m*k,s[9]=u*y+f*re+d*$+m*G,s[13]=u*T+f*ee+d*J+m*K,s[2]=_*C+h*I+p*U+g*O,s[6]=_*R+h*F+p*X+g*k,s[10]=_*y+h*re+p*$+g*G,s[14]=_*T+h*ee+p*J+g*K,s[3]=v*C+x*I+S*U+w*O,s[7]=v*R+x*F+S*X+w*k,s[11]=v*y+x*re+S*$+w*G,s[15]=v*T+x*ee+S*J+w*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],h=e[7],p=e[11],g=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+h*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+g*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],h=e[13],p=e[14],g=e[15],v=f*p*c-h*d*c+h*l*m-a*p*m-f*l*g+a*d*g,x=_*d*c-u*p*c-_*l*m+o*p*m+u*l*g-o*d*g,S=u*h*c-_*f*c+_*a*m-o*h*m-u*a*g+o*f*g,w=_*f*l-u*h*l-_*a*d+o*h*d+u*a*p-o*f*p,C=n*v+i*x+r*S+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=v*R,e[1]=(h*d*s-f*p*s-h*r*m+i*p*m+f*r*g-i*d*g)*R,e[2]=(a*p*s-h*l*s+h*r*c-i*p*c-a*r*g+i*l*g)*R,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*R,e[4]=x*R,e[5]=(u*p*s-_*d*s+_*r*m-n*p*m-u*r*g+n*d*g)*R,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*g-n*l*g)*R,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*m+n*l*m)*R,e[8]=S*R,e[9]=(_*f*s-u*h*s-_*i*m+n*h*m+u*i*g-n*f*g)*R,e[10]=(o*h*s-_*a*s+_*i*c-n*h*c-o*i*g+n*a*g)*R,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*m-n*a*m)*R,e[12]=w*R,e[13]=(u*h*r-_*f*r+_*i*d-n*h*d-u*i*p+n*f*p)*R,e[14]=(_*a*r-o*h*r-_*i*l+n*h*l+o*i*p-n*a*p)*R,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,_=s*f,h=o*u,p=o*f,g=a*f,v=l*c,x=l*u,S=l*f,w=i.x,C=i.y,R=i.z;return r[0]=(1-(h+g))*w,r[1]=(m+S)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(d+g))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(_+x)*R,r[9]=(p-v)*R,r[10]=(1-(d+h))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const c=1/s,u=1/o,f=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,n.setFromRotationMatrix($n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),c=2*s/(i-r),u=(n+e)/(n-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),c=1/(i-r),u=1/(o-s),f=(n+e)*l,d=(i+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ys=new D,$n=new ht,V3=new D(0,0,0),H3=new D(1,1,1),Xi=new D,ml=new D,_n=new D,Xg=new ht,qg=new Co;class Wa{constructor(e=0,n=0,i=0,r=Wa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qg.setFromEuler(this),this.setFromQuaternion(qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Wa.DefaultOrder="XYZ";Wa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W3=0;const Yg=new D,Ss=new Co,Mi=new ht,gl=new D,Vo=new D,$3=new D,j3=new Co,Zg=new D(1,0,0),Qg=new D(0,1,0),Jg=new D(0,0,1),X3={type:"added"},Kg={type:"removed"};class Zt extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W3++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DefaultUp.clone();const e=new D,n=new Wa,i=new Co,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new zn}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Zt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Zg,e)}rotateY(e){return this.rotateOnAxis(Qg,e)}rotateZ(e){return this.rotateOnAxis(Jg,e)}translateOnAxis(e,n){return Yg.copy(e).applyQuaternion(this.quaternion),this.position.add(Yg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zg,e)}translateY(e){return this.translateOnAxis(Qg,e)}translateZ(e){return this.translateOnAxis(Jg,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?gl.copy(e):gl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Vo,gl,this.up):Mi.lookAt(gl,Vo,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(X3)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Kg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Kg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,$3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,j3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DefaultUp=new D(0,1,0);Zt.DefaultMatrixAutoUpdate=!0;const jn=new D,Ei=new D,Af=new D,bi=new D,ws=new D,Ms=new D,e0=new D,Pf=new D,Lf=new D,Rf=new D;class Pi{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),Ei.subVectors(i,n),Af.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(Ei),l=jn.dot(Af),c=Ei.dot(Ei),u=Ei.dot(Af),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi),bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,bi),l.set(0,0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),Ei.subVectors(e,n),jn.cross(Ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),jn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Pi.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ws.subVectors(r,i),Ms.subVectors(s,i),Pf.subVectors(e,i);const l=ws.dot(Pf),c=Ms.dot(Pf);if(l<=0&&c<=0)return n.copy(i);Lf.subVectors(e,r);const u=ws.dot(Lf),f=Ms.dot(Lf);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ws,o);Rf.subVectors(e,s);const m=ws.dot(Rf),_=Ms.dot(Rf);if(_>=0&&m<=_)return n.copy(s);const h=m*c-l*_;if(h<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ms,a);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return e0.subVectors(s,r),a=(f-u)/(f-u+(m-_)),n.copy(r).addScaledVector(e0,a);const g=1/(p+h+d);return o=h*g,a=d*g,n.copy(i).addScaledVector(ws,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let q3=0;class Ao extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q3++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=no,this.side=Da,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Q_,this.blendDst=J_,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S3,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vf,this.stencilZFail=vf,this.stencilZPass=vf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===LM;continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(i.blending=this.blending),this.side!==Da&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ic extends Ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new D,vl=new Re;class ii{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=Jd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new He),n[i++]=o.r,n[i++]=o.g,n[i++]=o.b}return this}copyVector2sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Re),n[i++]=o.x,n[i++]=o.y}return this}copyVector3sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new D),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z}return this}copyVector4sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new ft),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z,n[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vl.fromBufferAttribute(this,n),vl.applyMatrix3(e),this.setXY(n,vl.x,vl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class lx extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class cx extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ut extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Y3=0;const Rn=new ht,Df=new Zt,Es=new D,xn=new br,Ho=new br,Rt=new D;class Gn extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y3++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ix(e)?cx:lx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return Df.lookAt(e),Df.updateMatrix(),this.applyMatrix4(Df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ut(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new To);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(xn.min,Ho.min),xn.expandByPoint(Rt),Rt.addVectors(xn.max,Ho.max),xn.expandByPoint(Rt)):(xn.expandByPoint(Ho.min),xn.expandByPoint(Ho.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(e,c),Rt.add(Es)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new D,u[I]=new D;const f=new D,d=new D,m=new D,_=new Re,h=new Re,p=new Re,g=new D,v=new D;function x(I,F,re){f.fromArray(r,I*3),d.fromArray(r,F*3),m.fromArray(r,re*3),_.fromArray(o,I*2),h.fromArray(o,F*2),p.fromArray(o,re*2),d.sub(f),m.sub(f),h.sub(_),p.sub(_);const ee=1/(h.x*p.y-p.x*h.y);!isFinite(ee)||(g.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(ee),v.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(ee),c[I].add(g),c[F].add(g),c[re].add(g),u[I].add(v),u[F].add(v),u[re].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let I=0,F=S.length;I<F;++I){const re=S[I],ee=re.start,U=re.count;for(let X=ee,$=ee+U;X<$;X+=3)x(i[X+0],i[X+1],i[X+2])}const w=new D,C=new D,R=new D,y=new D;function T(I){R.fromArray(s,I*3),y.copy(R);const F=c[I];w.copy(F),w.sub(R.multiplyScalar(R.dot(F))).normalize(),C.crossVectors(y,F);const ee=C.dot(u[I])<0?-1:1;l[I*4]=w.x,l[I*4+1]=w.y,l[I*4+2]=w.z,l[I*4+3]=ee}for(let I=0,F=S.length;I<F;++I){const re=S[I],ee=re.start,U=re.count;for(let X=ee,$=ee+U;X<$;X+=3)T(i[X+0]),T(i[X+1]),T(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,h),o.fromBufferAttribute(n,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,h),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*n,u=Math.min(l.length,o.length-c);for(let f=0,d=c;f<u;f++,d++)o[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*u;for(let g=0;g<u;g++)d[_++]=c[m++]}return new ii(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const t0=new ht,bs=new Ep,If=new To,qi=new D,Yi=new D,Zi=new D,Of=new D,kf=new D,zf=new D,_l=new D,xl=new D,yl=new D,Sl=new Re,wl=new Re,Ml=new Re,Ff=new D,El=new D;class wn extends Zt{constructor(e=new Gn,n=new Ic){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),If.copy(i.boundingSphere),If.applyMatrix4(s),e.ray.intersectsSphere(If)===!1)||(t0.copy(s).invert(),bs.copy(e.ray).applyMatrix4(t0),i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,m=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let h=0,p=m.length;h<p;h++){const g=m[h],v=r[g.materialIndex],x=Math.max(g.start,_.start),S=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let w=x,C=S;w<C;w+=3){const R=a.getX(w),y=a.getX(w+1),T=a.getX(w+2);o=bl(this,v,e,bs,l,c,u,f,d,R,y,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const h=Math.max(0,_.start),p=Math.min(a.count,_.start+_.count);for(let g=h,v=p;g<v;g+=3){const x=a.getX(g),S=a.getX(g+1),w=a.getX(g+2);o=bl(this,r,e,bs,l,c,u,f,d,x,S,w),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let h=0,p=m.length;h<p;h++){const g=m[h],v=r[g.materialIndex],x=Math.max(g.start,_.start),S=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let w=x,C=S;w<C;w+=3){const R=w,y=w+1,T=w+2;o=bl(this,v,e,bs,l,c,u,f,d,R,y,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const h=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let g=h,v=p;g<v;g+=3){const x=g,S=g+1,w=g+2;o=bl(this,r,e,bs,l,c,u,f,d,x,S,w),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}}}function Z3(t,e,n,i,r,s,o,a){let l;if(e.side===ni?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==xr,a),l===null)return null;El.copy(a),El.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(El);return c<n.near||c>n.far?null:{distance:c,point:El.clone(),object:t}}function bl(t,e,n,i,r,s,o,a,l,c,u,f){qi.fromBufferAttribute(r,c),Yi.fromBufferAttribute(r,u),Zi.fromBufferAttribute(r,f);const d=t.morphTargetInfluences;if(s&&d){_l.set(0,0,0),xl.set(0,0,0),yl.set(0,0,0);for(let _=0,h=s.length;_<h;_++){const p=d[_],g=s[_];p!==0&&(Of.fromBufferAttribute(g,c),kf.fromBufferAttribute(g,u),zf.fromBufferAttribute(g,f),o?(_l.addScaledVector(Of,p),xl.addScaledVector(kf,p),yl.addScaledVector(zf,p)):(_l.addScaledVector(Of.sub(qi),p),xl.addScaledVector(kf.sub(Yi),p),yl.addScaledVector(zf.sub(Zi),p)))}qi.add(_l),Yi.add(xl),Zi.add(yl)}t.isSkinnedMesh&&(t.boneTransform(c,qi),t.boneTransform(u,Yi),t.boneTransform(f,Zi));const m=Z3(t,e,n,i,qi,Yi,Zi,Ff);if(m){a&&(Sl.fromBufferAttribute(a,c),wl.fromBufferAttribute(a,u),Ml.fromBufferAttribute(a,f),m.uv=Pi.getUV(Ff,qi,Yi,Zi,Sl,wl,Ml,new Re)),l&&(Sl.fromBufferAttribute(l,c),wl.fromBufferAttribute(l,u),Ml.fromBufferAttribute(l,f),m.uv2=Pi.getUV(Ff,qi,Yi,Zi,Sl,wl,Ml,new Re));const _={a:c,b:u,c:f,normal:new D,materialIndex:0};Pi.getNormal(qi,Yi,Zi,_.normal),m.face=_}return m}class vi extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(f,2));function _(h,p,g,v,x,S,w,C,R,y,T){const I=S/R,F=w/y,re=S/2,ee=w/2,U=C/2,X=R+1,$=y+1;let J=0,O=0;const k=new D;for(let G=0;G<$;G++){const K=G*F-ee;for(let N=0;N<X;N++){const V=N*I-re;k[h]=V*v,k[p]=K*x,k[g]=U,c.push(k.x,k.y,k.z),k[h]=0,k[p]=0,k[g]=C>0?1:-1,u.push(k.x,k.y,k.z),f.push(N/R),f.push(1-G/y),J+=1}}for(let G=0;G<y;G++)for(let K=0;K<R;K++){const N=d+K+X*G,V=d+K+X*(G+1),q=d+(K+1)+X*(G+1),le=d+(K+1)+X*G;l.push(N,V,le),l.push(V,q,le),O+=6}a.addGroup(m,O,T),m+=O,d+=J}}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=xo(t[n]);for(const r in i)e[r]=i[r]}return e}function Q3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}const Cp={clone:xo,merge:$t};var J3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J3,this.fragmentShader=K3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=Q3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ux extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends ux{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lc*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cs=90,Ts=1;class eE extends Zt{constructor(e,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Nt(Cs,Ts,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const s=new Nt(Cs,Ts,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new Nt(Cs,Ts,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new Nt(Cs,Ts,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new Nt(Cs,Ts,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const c=new Nt(Cs,Ts,e,n);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Ii,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class fx extends si{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:go,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tE extends os{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vi(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:hr});s.uniforms.tEquirect.value=n;const o=new wn(r,s),a=n.minFilter;return n.minFilter===Lu&&(n.minFilter=On),new eE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Nf=new D,nE=new D,iE=new zn;class Dr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nf.subVectors(i,n).cross(nE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(Nf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iE.getNormalMatrix(e),r=this.coplanarPoint(Nf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new To,Cl=new D;class Tp{constructor(e=new Dr,n=new Dr,i=new Dr,r=new Dr,s=new Dr,o=new Dr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],d=i[8],m=i[9],_=i[10],h=i[11],p=i[12],g=i[13],v=i[14],x=i[15];return n[0].setComponents(a-r,f-l,h-d,x-p).normalize(),n[1].setComponents(a+r,f+l,h+d,x+p).normalize(),n[2].setComponents(a+s,f+c,h+m,x+g).normalize(),n[3].setComponents(a-s,f-c,h-m,x-g).normalize(),n[4].setComponents(a-o,f-u,h-_,x-v).normalize(),n[5].setComponents(a+o,f+u,h+_,x+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSprite(e){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Cl.x=r.normal.x>0?e.max.x:e.min.x,Cl.y=r.normal.y>0?e.max.y:e.min.y,Cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=t.createBuffer();t.bindBuffer(u,m),t.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;t.bindBuffer(f,c),m.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Ap extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,m=[],_=[],h=[],p=[];for(let g=0;g<u;g++){const v=g*d-o;for(let x=0;x<c;x++){const S=x*f-s;_.push(S,-v,0),h.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const x=v+c*g,S=v+c*(g+1),w=v+1+c*(g+1),C=v+1+c*g;m.push(x,S,C),m.push(S,w,C)}this.setIndex(m),this.setAttribute("position",new Ut(_,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(p,2))}static fromJSON(e){return new Ap(e.width,e.height,e.widthSegments,e.heightSegments)}}var sE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,oE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fE="vec3 transformed = vec3( position );",dE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hE=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,pE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,EE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,bE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CE=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",DE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,HE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,WE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$E=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,jE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XE=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,qE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ZE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,JE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,KE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eb=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ib=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ob=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,db=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mb=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,_b=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Cb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ab=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zb=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fb=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Nb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ub=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,qb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Yb=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Zb=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Qb=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Jb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Kb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,eC=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,tC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iC=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sC=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,oC=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pC=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gC=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vC=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_C=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LC=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,DC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:sE,alphamap_pars_fragment:oE,alphatest_fragment:aE,alphatest_pars_fragment:lE,aomap_fragment:cE,aomap_pars_fragment:uE,begin_vertex:fE,beginnormal_vertex:dE,bsdfs:hE,iridescence_fragment:pE,bumpmap_pars_fragment:mE,clipping_planes_fragment:gE,clipping_planes_pars_fragment:vE,clipping_planes_pars_vertex:_E,clipping_planes_vertex:xE,color_fragment:yE,color_pars_fragment:SE,color_pars_vertex:wE,color_vertex:ME,common:EE,cube_uv_reflection_fragment:bE,defaultnormal_vertex:CE,displacementmap_pars_vertex:TE,displacementmap_vertex:AE,emissivemap_fragment:PE,emissivemap_pars_fragment:LE,encodings_fragment:RE,encodings_pars_fragment:DE,envmap_fragment:IE,envmap_common_pars_fragment:OE,envmap_pars_fragment:kE,envmap_pars_vertex:zE,envmap_physical_pars_fragment:XE,envmap_vertex:FE,fog_vertex:NE,fog_pars_vertex:BE,fog_fragment:UE,fog_pars_fragment:GE,gradientmap_pars_fragment:VE,lightmap_fragment:HE,lightmap_pars_fragment:WE,lights_lambert_vertex:$E,lights_pars_begin:jE,lights_toon_fragment:qE,lights_toon_pars_fragment:YE,lights_phong_fragment:ZE,lights_phong_pars_fragment:QE,lights_physical_fragment:JE,lights_physical_pars_fragment:KE,lights_fragment_begin:eb,lights_fragment_maps:tb,lights_fragment_end:nb,logdepthbuf_fragment:ib,logdepthbuf_pars_fragment:rb,logdepthbuf_pars_vertex:sb,logdepthbuf_vertex:ob,map_fragment:ab,map_pars_fragment:lb,map_particle_fragment:cb,map_particle_pars_fragment:ub,metalnessmap_fragment:fb,metalnessmap_pars_fragment:db,morphcolor_vertex:hb,morphnormal_vertex:pb,morphtarget_pars_vertex:mb,morphtarget_vertex:gb,normal_fragment_begin:vb,normal_fragment_maps:_b,normal_pars_fragment:xb,normal_pars_vertex:yb,normal_vertex:Sb,normalmap_pars_fragment:wb,clearcoat_normal_fragment_begin:Mb,clearcoat_normal_fragment_maps:Eb,clearcoat_pars_fragment:bb,iridescence_pars_fragment:Cb,output_fragment:Tb,packing:Ab,premultiplied_alpha_fragment:Pb,project_vertex:Lb,dithering_fragment:Rb,dithering_pars_fragment:Db,roughnessmap_fragment:Ib,roughnessmap_pars_fragment:Ob,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:zb,shadowmap_vertex:Fb,shadowmask_pars_fragment:Nb,skinbase_vertex:Bb,skinning_pars_vertex:Ub,skinning_vertex:Gb,skinnormal_vertex:Vb,specularmap_fragment:Hb,specularmap_pars_fragment:Wb,tonemapping_fragment:$b,tonemapping_pars_fragment:jb,transmission_fragment:Xb,transmission_pars_fragment:qb,uv_pars_fragment:Yb,uv_pars_vertex:Zb,uv_vertex:Qb,uv2_pars_fragment:Jb,uv2_pars_vertex:Kb,uv2_vertex:eC,worldpos_vertex:tC,background_vert:nC,background_frag:iC,cube_vert:rC,cube_frag:sC,depth_vert:oC,depth_frag:aC,distanceRGBA_vert:lC,distanceRGBA_frag:cC,equirect_vert:uC,equirect_frag:fC,linedashed_vert:dC,linedashed_frag:hC,meshbasic_vert:pC,meshbasic_frag:mC,meshlambert_vert:gC,meshlambert_frag:vC,meshmatcap_vert:_C,meshmatcap_frag:xC,meshnormal_vert:yC,meshnormal_frag:SC,meshphong_vert:wC,meshphong_frag:MC,meshphysical_vert:EC,meshphysical_frag:bC,meshtoon_vert:CC,meshtoon_frag:TC,points_vert:AC,points_frag:PC,shadow_vert:LC,shadow_frag:RC,sprite_vert:DC,sprite_frag:IC},fe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zn},uv2Transform:{value:new zn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zn}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zn}}},fn={basic:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.fog,fe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:$t([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:$t([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:$t([fe.points,fe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:$t([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:$t([fe.common,fe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:$t([fe.sprite,fe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new zn},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},cube:{uniforms:$t([fe.envmap,{opacity:{value:1}}]),vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:$t([fe.common,fe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:$t([fe.lights,fe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};fn.physical={uniforms:$t([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Re(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};function OC(t,e,n,i,r,s){const o=new He(0);let a=r===!0?0:1,l,c,u=null,f=0,d=null;function m(h,p){let g=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const x=t.xr,S=x.getSession&&x.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Pu)?(c===void 0&&(c=new wn(new vi(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:xo(fn.cube.uniforms),vertexShader:fn.cube.vertexShader,fragmentShader:fn.cube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||f!==v.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=t.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new wn(new Ap(2,2),new yr({name:"BackgroundMaterial",uniforms:xo(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Da,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=t.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function _(h,p){n.buffers.color.setClear(h.r,h.g,h.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(h,p=1){o.set(h),a=p,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(h){a=h,_(o,a)},render:m}}function kC(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(U,X,$,J,O){let k=!1;if(o){const G=h(J,$,X);c!==G&&(c=G,m(c.object)),k=g(U,J,$,O),k&&v(U,J,$,O)}else{const G=X.wireframe===!0;(c.geometry!==J.id||c.program!==$.id||c.wireframe!==G)&&(c.geometry=J.id,c.program=$.id,c.wireframe=G,k=!0)}O!==null&&n.update(O,34963),(k||u)&&(u=!1,y(U,X,$,J),O!==null&&t.bindBuffer(34963,n.get(O).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function h(U,X,$){const J=$.wireframe===!0;let O=a[U.id];O===void 0&&(O={},a[U.id]=O);let k=O[X.id];k===void 0&&(k={},O[X.id]=k);let G=k[J];return G===void 0&&(G=p(d()),k[J]=G),G}function p(U){const X=[],$=[],J=[];for(let O=0;O<r;O++)X[O]=0,$[O]=0,J[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:$,attributeDivisors:J,object:U,attributes:{},index:null}}function g(U,X,$,J){const O=c.attributes,k=X.attributes;let G=0;const K=$.getAttributes();for(const N in K)if(K[N].location>=0){const q=O[N];let le=k[N];if(le===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),q===void 0||q.attribute!==le||le&&q.data!==le.data)return!0;G++}return c.attributesNum!==G||c.index!==J}function v(U,X,$,J){const O={},k=X.attributes;let G=0;const K=$.getAttributes();for(const N in K)if(K[N].location>=0){let q=k[N];q===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(q=U.instanceColor));const le={};le.attribute=q,q&&q.data&&(le.data=q.data),O[N]=le,G++}c.attributes=O,c.attributesNum=G,c.index=J}function x(){const U=c.newAttributes;for(let X=0,$=U.length;X<$;X++)U[X]=0}function S(U){w(U,0)}function w(U,X){const $=c.newAttributes,J=c.enabledAttributes,O=c.attributeDivisors;$[U]=1,J[U]===0&&(t.enableVertexAttribArray(U),J[U]=1),O[U]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,X),O[U]=X)}function C(){const U=c.newAttributes,X=c.enabledAttributes;for(let $=0,J=X.length;$<J;$++)X[$]!==U[$]&&(t.disableVertexAttribArray($),X[$]=0)}function R(U,X,$,J,O,k){i.isWebGL2===!0&&($===5124||$===5125)?t.vertexAttribIPointer(U,X,$,O,k):t.vertexAttribPointer(U,X,$,J,O,k)}function y(U,X,$,J){if(i.isWebGL2===!1&&(U.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const O=J.attributes,k=$.getAttributes(),G=X.defaultAttributeValues;for(const K in k){const N=k[K];if(N.location>=0){let V=O[K];if(V===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(V=U.instanceColor)),V!==void 0){const q=V.normalized,le=V.itemSize,A=n.get(V);if(A===void 0)continue;const Se=A.buffer,Z=A.type,ye=A.bytesPerElement;if(V.isInterleavedBufferAttribute){const ae=V.data,Ee=ae.stride,ue=V.offset;if(ae.isInstancedInterleavedBuffer){for(let ve=0;ve<N.locationSize;ve++)w(N.location+ve,ae.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<N.locationSize;ve++)S(N.location+ve);t.bindBuffer(34962,Se);for(let ve=0;ve<N.locationSize;ve++)R(N.location+ve,le/N.locationSize,Z,q,Ee*ye,(ue+le/N.locationSize*ve)*ye)}else{if(V.isInstancedBufferAttribute){for(let ae=0;ae<N.locationSize;ae++)w(N.location+ae,V.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ae=0;ae<N.locationSize;ae++)S(N.location+ae);t.bindBuffer(34962,Se);for(let ae=0;ae<N.locationSize;ae++)R(N.location+ae,le/N.locationSize,Z,q,le*ye,le/N.locationSize*ae*ye)}}else if(G!==void 0){const q=G[K];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(N.location,q);break;case 3:t.vertexAttrib3fv(N.location,q);break;case 4:t.vertexAttrib4fv(N.location,q);break;default:t.vertexAttrib1fv(N.location,q)}}}}C()}function T(){re();for(const U in a){const X=a[U];for(const $ in X){const J=X[$];for(const O in J)_(J[O].object),delete J[O];delete X[$]}delete a[U]}}function I(U){if(a[U.id]===void 0)return;const X=a[U.id];for(const $ in X){const J=X[$];for(const O in J)_(J[O].object),delete J[O];delete X[$]}delete a[U.id]}function F(U){for(const X in a){const $=a[X];if($[U.id]===void 0)continue;const J=$[U.id];for(const O in J)_(J[O].object),delete J[O];delete $[U.id]}}function re(){ee(),u=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:re,resetDefaultState:ee,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:S,disableUnusedAttributes:C}}function zC(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),n.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function FC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),d=t.getParameter(35660),m=t.getParameter(3379),_=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),g=t.getParameter(36348),v=t.getParameter(36349),x=d>0,S=o||e.has("OES_texture_float"),w=x&&S,C=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:C}}function NC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Dr,a=new zn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const _=f.length!==0||d||i!==0||r;return r=d,n=u(f,m,0),i=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,d,m){const _=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,g=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,x=v*4;let S=g.clippingState||null;l.value=S,S=u(_,d,x,m);for(let w=0;w!==x;++w)S[w]=n[w];g.clippingState=S,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,_){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,_!==!0||p===null){const g=m+h*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,S=m;x!==h;++x,S+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function BC(t){let e=new WeakMap;function n(o,a){return a===qd?o.mapping=go:a===Yd&&(o.mapping=vo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===qd||a===Yd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tE(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Wr extends ux{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const js=4,n0=[.125,.215,.35,.446,.526,.582],kr=20,Bf=new Wr,i0=new He;let Uf=null;const Ir=(1+Math.sqrt(5))/2,Ps=1/Ir,r0=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ir,Ps),new D(0,Ir,-Ps),new D(Ps,0,Ir),new D(-Ps,0,Ir),new D(Ir,Ps,0),new D(-Ir,Ps,0)];class s0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf),e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===go||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ia,format:pi,encoding:ss,depthBuffer:!1},r=o0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UC(s)),this._blurMaterial=GC(s,e,n)}return r}_compileMaterial(e){const n=new wn(this._lodPlanes[0],e);this._renderer.compile(n,Bf)}_sceneToCubeUV(e,n,i,r){const a=new Nt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(i0),u.toneMapping=Ii,u.autoClear=!1;const m=new Ic({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1}),_=new wn(new vi,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(i0),h=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const x=this._cubeSize;Tl(r,v*x,g>2?x:0,x,x),u.setRenderTarget(r),h&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===go||e.mapping===vo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=l0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Bf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=r0[(r-1)%r0.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new wn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*kr-1),h=s/_,p=isFinite(s)?1+Math.floor(u*h):kr;p>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kr}`);const g=[];let v=0;for(let R=0;R<kr;++R){const y=R/h,T=Math.exp(-y*y/2);g.push(T),R===0?v+=T:R<p&&(v+=2*T)}for(let R=0;R<g.length;R++)g[R]=g[R]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-js?r-x+js:0),C=4*(this._cubeSize-S);Tl(n,w,C,3*S,2*S),l.setRenderTarget(n),l.render(f,Bf)}}function UC(t){const e=[],n=[],i=[];let r=t;const s=t-js+1+n0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-js?l=n0[o-t+js-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,h=3,p=2,g=1,v=new Float32Array(h*_*m),x=new Float32Array(p*_*m),S=new Float32Array(g*_*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,y=C>2?0:-1,T=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];v.set(T,h*_*C),x.set(d,p*_*C);const I=[C,C,C,C,C,C];S.set(I,g*_*C)}const w=new Gn;w.setAttribute("position",new ii(v,h)),w.setAttribute("uv",new ii(x,p)),w.setAttribute("faceIndex",new ii(S,g)),e.push(w),r>js&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function o0(t,e,n){const i=new os(t,e,n);return i.texture.mapping=Pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function GC(t,e,n){const i=new Float32Array(kr),r=new D(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function a0(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function l0(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Pp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qd||l===Yd,u=l===go||l===vo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new s0(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new s0(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function HC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WC(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const m=f.morphAttributes;for(const _ in m){const h=m[_];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let h=0;if(m!==null){const v=m.array;h=m.version;for(let x=0,S=v.length;x<S;x+=3){const w=v[x+0],C=v[x+1],R=v[x+2];d.push(w,C,C,R,R,w)}}else{const v=_.array;h=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const w=x+0,C=x+1,R=x+2;d.push(w,C,C,R,R,w)}}const p=new(ix(d)?cx:lx)(d,1);p.version=h;const g=s.get(f);g&&e.remove(g),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function $C(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){t.drawElements(s,m,a,d*l),n.update(m,s,1)}function f(d,m,_){if(_===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,d*l,_),n.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function jC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function XC(t,e){return t[0]-e[0]}function qC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Gf(t,e){let n=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?n=127:i instanceof Uint8Array?n=255:i instanceof Uint16Array?n=65535:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function YC(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new ft,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=h!==void 0?h.length:0;let g=s.get(u);if(g===void 0||g.count!==p){let $=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var _=$;g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let I=0;S===!0&&(I=1),w===!0&&(I=2),C===!0&&(I=3);let F=u.attributes.position.count*I,re=1;F>e.maxTextureSize&&(re=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const ee=new Float32Array(F*re*4*p),U=new ax(ee,F,re,p);U.type=Vr,U.needsUpdate=!0;const X=I*4;for(let J=0;J<p;J++){const O=R[J],k=y[J],G=T[J],K=F*re*4*J;for(let N=0;N<O.count;N++){const V=N*X;S===!0&&(o.fromBufferAttribute(O,N),O.normalized===!0&&Gf(o,O),ee[K+V+0]=o.x,ee[K+V+1]=o.y,ee[K+V+2]=o.z,ee[K+V+3]=0),w===!0&&(o.fromBufferAttribute(k,N),k.normalized===!0&&Gf(o,k),ee[K+V+4]=o.x,ee[K+V+5]=o.y,ee[K+V+6]=o.z,ee[K+V+7]=0),C===!0&&(o.fromBufferAttribute(G,N),G.normalized===!0&&Gf(o,G),ee[K+V+8]=o.x,ee[K+V+9]=o.y,ee[K+V+10]=o.z,ee[K+V+11]=G.itemSize===4?o.w:1)}}g={count:p,texture:U,size:new Re(F,re)},s.set(u,g),u.addEventListener("dispose",$)}let v=0;for(let S=0;S<m.length;S++)v+=m[S];const x=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",x),d.getUniforms().setValue(t,"morphTargetInfluences",m),d.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const h=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==h){p=[];for(let w=0;w<h;w++)p[w]=[w,0];i[u.id]=p}for(let w=0;w<h;w++){const C=p[w];C[0]=w,C[1]=m[w]}p.sort(qC);for(let w=0;w<8;w++)w<h&&p[w][1]?(a[w][0]=p[w][0],a[w][1]=p[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(XC);const g=u.morphAttributes.position,v=u.morphAttributes.normal;let x=0;for(let w=0;w<8;w++){const C=a[w],R=C[0],y=C[1];R!==Number.MAX_SAFE_INTEGER&&y?(g&&u.getAttribute("morphTarget"+w)!==g[R]&&u.setAttribute("morphTarget"+w,g[R]),v&&u.getAttribute("morphNormal"+w)!==v[R]&&u.setAttribute("morphNormal"+w,v[R]),r[w]=y,x+=y):(g&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),v&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const S=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(t,"morphTargetBaseInfluence",S),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function ZC(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const hx=new si,px=new ax,mx=new U3,gx=new fx,c0=[],u0=[],f0=new Float32Array(16),d0=new Float32Array(9),h0=new Float32Array(4);function Po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=c0[r];if(s===void 0&&(s=new Float32Array(r),c0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function sn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function on(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ru(t,e){let n=u0[e];n===void 0&&(n=new Int32Array(e),u0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2fv(this.addr,e),on(n,e)}}function KC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(sn(n,e))return;t.uniform3fv(this.addr,e),on(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4fv(this.addr,e),on(n,e)}}function tT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),on(n,e)}else{if(sn(n,i))return;h0.set(i),t.uniformMatrix2fv(this.addr,!1,h0),on(n,i)}}function nT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),on(n,e)}else{if(sn(n,i))return;d0.set(i),t.uniformMatrix3fv(this.addr,!1,d0),on(n,i)}}function iT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),on(n,e)}else{if(sn(n,i))return;f0.set(i),t.uniformMatrix4fv(this.addr,!1,f0),on(n,i)}}function rT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sT(t,e){const n=this.cache;sn(n,e)||(t.uniform2iv(this.addr,e),on(n,e))}function oT(t,e){const n=this.cache;sn(n,e)||(t.uniform3iv(this.addr,e),on(n,e))}function aT(t,e){const n=this.cache;sn(n,e)||(t.uniform4iv(this.addr,e),on(n,e))}function lT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cT(t,e){const n=this.cache;sn(n,e)||(t.uniform2uiv(this.addr,e),on(n,e))}function uT(t,e){const n=this.cache;sn(n,e)||(t.uniform3uiv(this.addr,e),on(n,e))}function fT(t,e){const n=this.cache;sn(n,e)||(t.uniform4uiv(this.addr,e),on(n,e))}function dT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||hx,r)}function hT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||mx,r)}function pT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||gx,r)}function mT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||px,r)}function gT(t){switch(t){case 5126:return QC;case 35664:return JC;case 35665:return KC;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return oT;case 35669:case 35673:return aT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function vT(t,e){t.uniform1fv(this.addr,e)}function _T(t,e){const n=Po(e,this.size,2);t.uniform2fv(this.addr,n)}function xT(t,e){const n=Po(e,this.size,3);t.uniform3fv(this.addr,n)}function yT(t,e){const n=Po(e,this.size,4);t.uniform4fv(this.addr,n)}function ST(t,e){const n=Po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function wT(t,e){const n=Po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function MT(t,e){const n=Po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ET(t,e){t.uniform1iv(this.addr,e)}function bT(t,e){t.uniform2iv(this.addr,e)}function CT(t,e){t.uniform3iv(this.addr,e)}function TT(t,e){t.uniform4iv(this.addr,e)}function AT(t,e){t.uniform1uiv(this.addr,e)}function PT(t,e){t.uniform2uiv(this.addr,e)}function LT(t,e){t.uniform3uiv(this.addr,e)}function RT(t,e){t.uniform4uiv(this.addr,e)}function DT(t,e,n){const i=e.length,r=Ru(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||hx,r[s])}function IT(t,e,n){const i=e.length,r=Ru(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||mx,r[s])}function OT(t,e,n){const i=e.length,r=Ru(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||gx,r[s])}function kT(t,e,n){const i=e.length,r=Ru(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||px,r[s])}function zT(t){switch(t){case 5126:return vT;case 35664:return _T;case 35665:return xT;case 35666:return yT;case 35674:return ST;case 35675:return wT;case 35676:return MT;case 5124:case 35670:return ET;case 35667:case 35671:return bT;case 35668:case 35672:return CT;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return PT;case 36295:return LT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return kT}}class FT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=gT(n.type)}}class NT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=zT(n.type)}}class BT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Vf=/(\w+)(\])?(\[|\.)?/g;function p0(t,e){t.seq.push(e),t.map[e.id]=e}function UT(t,e,n){const i=t.name,r=i.length;for(Vf.lastIndex=0;;){const s=Vf.exec(i),o=Vf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){p0(n,c===void 0?new FT(a,t,e):new NT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new BT(a),p0(n,f)),n=f}}}class Kl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);UT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function m0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let GT=0;function VT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function HT(t){switch(t){case ss:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function g0(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+VT(t.getShaderSource(e),o)}else return r}function WT(t,e){const n=HT(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function $T(t,e){let n;switch(e){case JM:n="Linear";break;case KM:n="Reinhard";break;case e3:n="OptimizedCineon";break;case t3:n="ACESFilmic";break;case n3:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function jT(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qo).join(`
`)}function XT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function qT(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qo(t){return t!==""}function v0(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YT=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(t){return t.replace(YT,ZT)}function ZT(t,e){const n=Ne[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return th(n)}const QT=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x0(t){return t.replace(JT,vx).replace(QT,KT)}function KT(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),vx(t,e,n,i)}function vx(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function y0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e4(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Z_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===PM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zo&&(e="SHADOWMAP_TYPE_VSM"),e}function t4(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case go:case vo:e="ENVMAP_TYPE_CUBE";break;case Pu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n4(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case vo:e="ENVMAP_MODE_REFRACTION";break}return e}function i4(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wp:e="ENVMAP_BLENDING_MULTIPLY";break;case ZM:e="ENVMAP_BLENDING_MIX";break;case QM:e="ENVMAP_BLENDING_ADD";break}return e}function r4(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function s4(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=e4(n),c=t4(n),u=n4(n),f=i4(n),d=r4(n),m=n.isWebGL2?"":jT(n),_=XT(s),h=r.createProgram();let p,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[_].filter(Qo).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(Qo).join(`
`),g.length>0&&(g+=`
`)):(p=[y0(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),g=[m,y0(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ii?"#define TONE_MAPPING":"",n.toneMapping!==Ii?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Ii?$T("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,WT("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qo).join(`
`)),o=th(o),o=v0(o,n),o=_0(o,n),a=th(a),a=v0(a,n),a=_0(a,n),o=x0(o),a=x0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",n.glslVersion===Hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=v+p+o,S=v+g+a,w=m0(r,35633,x),C=m0(r,35632,S);if(r.attachShader(h,w),r.attachShader(h,C),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const T=r.getProgramInfoLog(h).trim(),I=r.getShaderInfoLog(w).trim(),F=r.getShaderInfoLog(C).trim();let re=!0,ee=!0;if(r.getProgramParameter(h,35714)===!1){re=!1;const U=g0(r,w,"vertex"),X=g0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+U+`
`+X)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||F==="")&&(ee=!1);ee&&(this.diagnostics={runnable:re,programLog:T,vertexShader:{log:I,prefix:p},fragmentShader:{log:F,prefix:g}})}r.deleteShader(w),r.deleteShader(C);let R;this.getUniforms=function(){return R===void 0&&(R=new Kl(r,h)),R};let y;return this.getAttributes=function(){return y===void 0&&(y=qT(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=GT++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=w,this.fragmentShader=C,this}let o4=0;class a4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const i=new l4(e);n.set(e,i)}return n.get(e)}}class l4{constructor(e){this.id=o4++,this.code=e,this.usedTimes=0}}function c4(t,e,n,i,r,s,o){const a=new bp,l=new a4,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,T,I,F,re){const ee=F.fog,U=re.geometry,X=y.isMeshStandardMaterial?F.environment:null,$=(y.isMeshStandardMaterial?n:e).get(y.envMap||X),J=!!$&&$.mapping===Pu?$.image.height:null,O=_[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const k=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,G=k!==void 0?k.length:0;let K=0;U.morphAttributes.position!==void 0&&(K=1),U.morphAttributes.normal!==void 0&&(K=2),U.morphAttributes.color!==void 0&&(K=3);let N,V,q,le;if(O){const Ee=fn[O];N=Ee.vertexShader,V=Ee.fragmentShader}else N=y.vertexShader,V=y.fragmentShader,l.update(y),q=l.getVertexShaderID(y),le=l.getFragmentShaderID(y);const A=t.getRenderTarget(),Se=y.alphaTest>0,Z=y.clearcoat>0,ye=y.iridescence>0;return{isWebGL2:u,shaderID:O,shaderName:y.type,vertexShader:N,fragmentShader:V,defines:y.defines,customVertexShaderID:q,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:d,outputEncoding:A===null?t.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:ss,map:!!y.map,matcap:!!y.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:J,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===y3,tangentSpaceNormalMap:y.normalMapType===nx,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===ot,clearcoat:Z,clearcoatMap:Z&&!!y.clearcoatMap,clearcoatRoughnessMap:Z&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Z&&!!y.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!y.iridescenceMap,iridescenceThicknessMap:ye&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===no,alphaMap:!!y.alphaMap,alphaTest:Se,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!U.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!ee,useFog:y.fog===!0,fogExp2:ee&&ee.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:re.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:Ii,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xr,flipSided:y.side===ni,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)T.push(I),T.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(g(T,y),v(T,y),T.push(t.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),y.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),y.push(a.mask)}function x(y){const T=_[y.type];let I;if(T){const F=fn[T];I=Cp.clone(F.uniforms)}else I=y.uniforms;return I}function S(y,T){let I;for(let F=0,re=c.length;F<re;F++){const ee=c[F];if(ee.cacheKey===T){I=ee,++I.usedTimes;break}}return I===void 0&&(I=new s4(t,T,y,s),c.push(I)),I}function w(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function R(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:R}}function u4(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function f4(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function S0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function w0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,_,h,p){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:h,group:p},t[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=h,g.group=p),e++,g}function a(f,d,m,_,h,p){const g=o(f,d,m,_,h,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):n.push(g)}function l(f,d,m,_,h,p){const g=o(f,d,m,_,h,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function c(f,d){n.length>1&&n.sort(f||f4),i.length>1&&i.sort(d||S0),r.length>1&&r.sort(d||S0)}function u(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function d4(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new w0,t.set(i,[s])):r>=t.get(i).length?(s=new w0,t.get(i).push(s)):s=t.get(i)[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function h4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new He};break;case"SpotLight":n={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function p4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let m4=0;function g4(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function v4(t,e){const n=new h4,i=p4(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new ht,a=new ht;function l(u,f){let d=0,m=0,_=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let h=0,p=0,g=0,v=0,x=0,S=0,w=0,C=0;u.sort(g4);const R=f!==!0?Math.PI:1;for(let T=0,I=u.length;T<I;T++){const F=u[T],re=F.color,ee=F.intensity,U=F.distance,X=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=re.r*ee*R,m+=re.g*ee*R,_+=re.b*ee*R;else if(F.isLightProbe)for(let $=0;$<9;$++)r.probe[$].addScaledVector(F.sh.coefficients[$],ee);else if(F.isDirectionalLight){const $=n.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){const J=F.shadow,O=i.get(F);O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,r.directionalShadow[h]=O,r.directionalShadowMap[h]=X,r.directionalShadowMatrix[h]=F.shadow.matrix,S++}r.directional[h]=$,h++}else if(F.isSpotLight){const $=n.get(F);if($.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(re).multiplyScalar(ee*R),$.distance=U,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,F.castShadow){const J=F.shadow,O=i.get(F);O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,r.spotShadow[g]=O,r.spotShadowMap[g]=X,r.spotShadowMatrix[g]=F.shadow.matrix,C++}r.spot[g]=$,g++}else if(F.isRectAreaLight){const $=n.get(F);$.color.copy(re).multiplyScalar(ee),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),r.rectArea[v]=$,v++}else if(F.isPointLight){const $=n.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*R),$.distance=F.distance,$.decay=F.decay,F.castShadow){const J=F.shadow,O=i.get(F);O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,O.shadowCameraNear=J.camera.near,O.shadowCameraFar=J.camera.far,r.pointShadow[p]=O,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=F.shadow.matrix,w++}r.point[p]=$,p++}else if(F.isHemisphereLight){const $=n.get(F);$.skyColor.copy(F.color).multiplyScalar(ee*R),$.groundColor.copy(F.groundColor).multiplyScalar(ee*R),r.hemi[x]=$,x++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=_;const y=r.hash;(y.directionalLength!==h||y.pointLength!==p||y.spotLength!==g||y.rectAreaLength!==v||y.hemiLength!==x||y.numDirectionalShadows!==S||y.numPointShadows!==w||y.numSpotShadows!==C)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=v,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=C,y.directionalLength=h,y.pointLength=p,y.spotLength=g,y.rectAreaLength=v,y.hemiLength=x,y.numDirectionalShadows=S,y.numPointShadows=w,y.numSpotShadows=C,r.version=m4++)}function c(u,f){let d=0,m=0,_=0,h=0,p=0;const g=f.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const S=u[v];if(S.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(S.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),_++}else if(S.isRectAreaLight){const w=r.rectArea[h];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),h++}else if(S.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:r}}function M0(t,e){const n=new v4(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _4(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new M0(t,e),n.set(s,[a])):o>=n.get(s).length?(a=new M0(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}class x4 extends Ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y4 extends Ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const S4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function M4(t,e,n){let i=new Tp;const r=new Re,s=new Re,o=new ft,a=new x4({depthPacking:x3}),l=new y4,c={},u=n.maxTextureSize,f={0:ni,1:Da,2:xr},d=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:S4,fragmentShader:w4}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Gn;_.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new wn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z_,this.render=function(S,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const R=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),I=t.state;I.setBlending(hr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let F=0,re=S.length;F<re;F++){const ee=S[F],U=ee.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const X=U.getFrameExtents();if(r.multiply(X),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,U.mapSize.y=s.y)),U.map===null){const J=this.type!==Zo?{minFilter:un,magFilter:un}:{};U.map=new os(r.x,r.y,J),U.map.texture.name=ee.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const $=U.getViewportCount();for(let J=0;J<$;J++){const O=U.getViewport(J);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),I.viewport(o),U.updateMatrices(ee,J),i=U.getFrustum(),x(w,C,U.camera,ee,this.type)}U.isPointLightShadow!==!0&&this.type===Zo&&g(U,C),U.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(R,y,T)};function g(S,w){const C=e.update(h);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new os(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(w,null,C,d,h,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(w,null,C,m,h,null)}function v(S,w,C,R,y,T){let I=null;const F=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0?I=F:I=C.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const re=I.uuid,ee=w.uuid;let U=c[re];U===void 0&&(U={},c[re]=U);let X=U[ee];X===void 0&&(X=I.clone(),U[ee]=X),I=X}return I.visible=w.visible,I.wireframe=w.wireframe,T===Zo?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:f[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,C.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(C.matrixWorld),I.nearDistance=R,I.farDistance=y),I}function x(S,w,C,R,y){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Zo)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const F=e.update(S),re=S.material;if(Array.isArray(re)){const ee=F.groups;for(let U=0,X=ee.length;U<X;U++){const $=ee[U],J=re[$.materialIndex];if(J&&J.visible){const O=v(S,J,R,C.near,C.far,y);t.renderBufferDirect(C,null,F,O,S,$)}}}else if(re.visible){const ee=v(S,re,R,C.near,C.far,y);t.renderBufferDirect(C,null,F,ee,S,null)}}const I=S.children;for(let F=0,re=I.length;F<re;F++)x(I[F],w,C,R,y)}}function E4(t,e,n){const i=n.isWebGL2;function r(){let z=!1;const _e=new ft;let Q=null;const me=new ft(0,0,0,0);return{setMask:function(pe){Q!==pe&&!z&&(t.colorMask(pe,pe,pe,pe),Q=pe)},setLocked:function(pe){z=pe},setClear:function(pe,qe,Lt,St,Gi){Gi===!0&&(pe*=St,qe*=St,Lt*=St),_e.set(pe,qe,Lt,St),me.equals(_e)===!1&&(t.clearColor(pe,qe,Lt,St),me.copy(_e))},reset:function(){z=!1,Q=null,me.set(-1,0,0,0)}}}function s(){let z=!1,_e=null,Q=null,me=null;return{setTest:function(pe){pe?Se(2929):Z(2929)},setMask:function(pe){_e!==pe&&!z&&(t.depthMask(pe),_e=pe)},setFunc:function(pe){if(Q!==pe){if(pe)switch(pe){case HM:t.depthFunc(512);break;case WM:t.depthFunc(519);break;case $M:t.depthFunc(513);break;case Xd:t.depthFunc(515);break;case jM:t.depthFunc(514);break;case XM:t.depthFunc(518);break;case qM:t.depthFunc(516);break;case YM:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);Q=pe}},setLocked:function(pe){z=pe},setClear:function(pe){me!==pe&&(t.clearDepth(pe),me=pe)},reset:function(){z=!1,_e=null,Q=null,me=null}}}function o(){let z=!1,_e=null,Q=null,me=null,pe=null,qe=null,Lt=null,St=null,Gi=null;return{setTest:function(gt){z||(gt?Se(2960):Z(2960))},setMask:function(gt){_e!==gt&&!z&&(t.stencilMask(gt),_e=gt)},setFunc:function(gt,yi,Pn){(Q!==gt||me!==yi||pe!==Pn)&&(t.stencilFunc(gt,yi,Pn),Q=gt,me=yi,pe=Pn)},setOp:function(gt,yi,Pn){(qe!==gt||Lt!==yi||St!==Pn)&&(t.stencilOp(gt,yi,Pn),qe=gt,Lt=yi,St=Pn)},setLocked:function(gt){z=gt},setClear:function(gt){Gi!==gt&&(t.clearStencil(gt),Gi=gt)},reset:function(){z=!1,_e=null,Q=null,me=null,pe=null,qe=null,Lt=null,St=null,Gi=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,h=[],p=null,g=!1,v=null,x=null,S=null,w=null,C=null,R=null,y=null,T=!1,I=null,F=null,re=null,ee=null,U=null;const X=t.getParameter(35661);let $=!1,J=0;const O=t.getParameter(7938);O.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(O)[1]),$=J>=1):O.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),$=J>=2);let k=null,G={};const K=t.getParameter(3088),N=t.getParameter(2978),V=new ft().fromArray(K),q=new ft().fromArray(N);function le(z,_e,Q){const me=new Uint8Array(4),pe=t.createTexture();t.bindTexture(z,pe),t.texParameteri(z,10241,9728),t.texParameteri(z,10240,9728);for(let qe=0;qe<Q;qe++)t.texImage2D(_e+qe,0,6408,1,1,0,6408,5121,me);return pe}const A={};A[3553]=le(3553,3553,1),A[34067]=le(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(2929),l.setFunc(Xd),Xe(!1),De(pg),Se(2884),je(hr);function Se(z){d[z]!==!0&&(t.enable(z),d[z]=!0)}function Z(z){d[z]!==!1&&(t.disable(z),d[z]=!1)}function ye(z,_e){return m[z]!==_e?(t.bindFramebuffer(z,_e),m[z]=_e,i&&(z===36009&&(m[36160]=_e),z===36160&&(m[36009]=_e)),!0):!1}function ae(z,_e){let Q=h,me=!1;if(z)if(Q=_.get(_e),Q===void 0&&(Q=[],_.set(_e,Q)),z.isWebGLMultipleRenderTargets){const pe=z.texture;if(Q.length!==pe.length||Q[0]!==36064){for(let qe=0,Lt=pe.length;qe<Lt;qe++)Q[qe]=36064+qe;Q.length=pe.length,me=!0}}else Q[0]!==36064&&(Q[0]=36064,me=!0);else Q[0]!==1029&&(Q[0]=1029,me=!0);me&&(n.isWebGL2?t.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ee(z){return p!==z?(t.useProgram(z),p=z,!0):!1}const ue={[Ds]:32774,[DM]:32778,[IM]:32779};if(i)ue[_g]=32775,ue[xg]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(ue[_g]=z.MIN_EXT,ue[xg]=z.MAX_EXT)}const ve={[OM]:0,[kM]:1,[zM]:768,[Q_]:770,[VM]:776,[UM]:774,[NM]:772,[FM]:769,[J_]:771,[GM]:775,[BM]:773};function je(z,_e,Q,me,pe,qe,Lt,St){if(z===hr){g===!0&&(Z(3042),g=!1);return}if(g===!1&&(Se(3042),g=!0),z!==RM){if(z!==v||St!==T){if((x!==Ds||C!==Ds)&&(t.blendEquation(32774),x=Ds,C=Ds),St)switch(z){case no:t.blendFuncSeparate(1,771,1,771);break;case mg:t.blendFunc(1,1);break;case gg:t.blendFuncSeparate(0,769,0,1);break;case vg:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case no:t.blendFuncSeparate(770,771,1,771);break;case mg:t.blendFunc(770,1);break;case gg:t.blendFuncSeparate(0,769,0,1);break;case vg:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,w=null,R=null,y=null,v=z,T=St}return}pe=pe||_e,qe=qe||Q,Lt=Lt||me,(_e!==x||pe!==C)&&(t.blendEquationSeparate(ue[_e],ue[pe]),x=_e,C=pe),(Q!==S||me!==w||qe!==R||Lt!==y)&&(t.blendFuncSeparate(ve[Q],ve[me],ve[qe],ve[Lt]),S=Q,w=me,R=qe,y=Lt),v=z,T=null}function Pe(z,_e){z.side===xr?Z(2884):Se(2884);let Q=z.side===ni;_e&&(Q=!Q),Xe(Q),z.blending===no&&z.transparent===!1?je(hr):je(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const me=z.stencilWrite;c.setTest(me),me&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ge(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Se(32926):Z(32926)}function Xe(z){I!==z&&(z?t.frontFace(2304):t.frontFace(2305),I=z)}function De(z){z!==TM?(Se(2884),z!==F&&(z===pg?t.cullFace(1029):z===AM?t.cullFace(1028):t.cullFace(1032))):Z(2884),F=z}function Ue(z){z!==re&&($&&t.lineWidth(z),re=z)}function Ge(z,_e,Q){z?(Se(32823),(ee!==_e||U!==Q)&&(t.polygonOffset(_e,Q),ee=_e,U=Q)):Z(32823)}function nt(z){z?Se(3089):Z(3089)}function Qt(z){z===void 0&&(z=33984+X-1),k!==z&&(t.activeTexture(z),k=z)}function P(z,_e){k===null&&Qt();let Q=G[k];Q===void 0&&(Q={type:void 0,texture:void 0},G[k]=Q),(Q.type!==z||Q.texture!==_e)&&(t.bindTexture(z,_e||A[z]),Q.type=z,Q.texture=_e)}function M(){const z=G[k];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function B(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(z){V.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),V.copy(z))}function Me(z){q.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),q.copy(z))}function Oe(z,_e){let Q=f.get(_e);Q===void 0&&(Q=new WeakMap,f.set(_e,Q));let me=Q.get(z);me===void 0&&(me=t.getUniformBlockIndex(_e,z.name),Q.set(z,me))}function Ze(z,_e){const me=f.get(_e).get(z);u.get(z)!==me&&(t.uniformBlockBinding(_e,me,z.__bindingPointIndex),u.set(z,me))}function yt(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},k=null,G={},m={},_=new WeakMap,h=[],p=null,g=!1,v=null,x=null,S=null,w=null,C=null,R=null,y=null,T=!1,I=null,F=null,re=null,ee=null,U=null,V.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:Z,bindFramebuffer:ye,drawBuffers:ae,useProgram:Ee,setBlending:je,setMaterial:Pe,setFlipSided:Xe,setCullFace:De,setLineWidth:Ue,setPolygonOffset:Ge,setScissorTest:nt,activeTexture:Qt,bindTexture:P,unbindTexture:M,compressedTexImage2D:B,texImage2D:Ce,texImage3D:we,updateUBOMapping:Oe,uniformBlockBinding:Ze,texStorage2D:Te,texStorage3D:Y,texSubImage2D:te,texSubImage3D:ce,compressedTexSubImage2D:de,scissor:be,viewport:Me,reset:yt}}function b4(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,M){return g?new OffscreenCanvas(P,M):Dc("canvas")}function x(P,M,B,te){let ce=1;if((P.width>te||P.height>te)&&(ce=te/Math.max(P.width,P.height)),ce<1||M===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const de=M?Rc:Math.floor,Te=de(ce*P.width),Y=de(ce*P.height);h===void 0&&(h=v(Te,Y));const Ce=B?v(Te,Y):h;return Ce.width=Te,Ce.height=Y,Ce.getContext("2d").drawImage(P,0,0,Te,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Te+"x"+Y+")."),Ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return eh(P.width)&&eh(P.height)}function w(P){return a?!1:P.wrapS!==Zn||P.wrapT!==Zn||P.minFilter!==un&&P.minFilter!==On}function C(P,M){return P.generateMipmaps&&M&&P.minFilter!==un&&P.minFilter!==On}function R(P){t.generateMipmap(P)}function y(P,M,B,te,ce=!1){if(a===!1)return M;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=M;return M===6403&&(B===5126&&(de=33326),B===5131&&(de=33325),B===5121&&(de=33321)),M===33319&&(B===5126&&(de=33328),B===5131&&(de=33327),B===5121&&(de=33323)),M===6408&&(B===5126&&(de=34836),B===5131&&(de=34842),B===5121&&(de=te===ot&&ce===!1?35907:32856),B===32819&&(de=32854),B===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function T(P,M,B){return C(P,B)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==On?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function I(P){return P===un||P===yg||P===Sg?9728:9729}function F(P){const M=P.target;M.removeEventListener("dispose",F),ee(M),M.isVideoTexture&&_.delete(M)}function re(P){const M=P.target;M.removeEventListener("dispose",re),X(M)}function ee(P){const M=i.get(P);if(M.__webglInit===void 0)return;const B=P.source,te=p.get(B);if(te){const ce=te[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&U(P),Object.keys(te).length===0&&p.delete(B)}i.remove(P)}function U(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const B=P.source,te=p.get(B);delete te[M.__cacheKey],o.memory.textures--}function X(P){const M=P.texture,B=i.get(P),te=i.get(M);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)t.deleteFramebuffer(B.__webglFramebuffer[ce]),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[ce]);else{if(t.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ce=0;ce<B.__webglColorRenderbuffer.length;ce++)B.__webglColorRenderbuffer[ce]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[ce]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ce=0,de=M.length;ce<de;ce++){const Te=i.get(M[ce]);Te.__webglTexture&&(t.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(M[ce])}i.remove(M),i.remove(P)}let $=0;function J(){$=0}function O(){const P=$;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),$+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.encoding),M.join()}function G(P,M){const B=i.get(P);if(P.isVideoTexture&&nt(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,P,M);return}}n.activeTexture(33984+M),n.bindTexture(3553,B.__webglTexture)}function K(P,M){const B=i.get(P);if(P.version>0&&B.__version!==P.version){Z(B,P,M);return}n.activeTexture(33984+M),n.bindTexture(35866,B.__webglTexture)}function N(P,M){const B=i.get(P);if(P.version>0&&B.__version!==P.version){Z(B,P,M);return}n.activeTexture(33984+M),n.bindTexture(32879,B.__webglTexture)}function V(P,M){const B=i.get(P);if(P.version>0&&B.__version!==P.version){ye(B,P,M);return}n.activeTexture(33984+M),n.bindTexture(34067,B.__webglTexture)}const q={[Zd]:10497,[Zn]:33071,[Qd]:33648},le={[un]:9728,[yg]:9984,[Sg]:9986,[On]:9729,[i3]:9985,[Lu]:9987};function A(P,M,B){if(B?(t.texParameteri(P,10242,q[M.wrapS]),t.texParameteri(P,10243,q[M.wrapT]),(P===32879||P===35866)&&t.texParameteri(P,32882,q[M.wrapR]),t.texParameteri(P,10240,le[M.magFilter]),t.texParameteri(P,10241,le[M.minFilter])):(t.texParameteri(P,10242,33071),t.texParameteri(P,10243,33071),(P===32879||P===35866)&&t.texParameteri(P,32882,33071),(M.wrapS!==Zn||M.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,10240,I(M.magFilter)),t.texParameteri(P,10241,I(M.minFilter)),M.minFilter!==un&&M.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.type===Vr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ia&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Se(P,M){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",F));const te=M.source;let ce=p.get(te);ce===void 0&&(ce={},p.set(te,ce));const de=k(M);if(de!==P.__cacheKey){ce[de]===void 0&&(ce[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ce[de].usedTimes++;const Te=ce[P.__cacheKey];Te!==void 0&&(ce[P.__cacheKey].usedTimes--,Te.usedTimes===0&&U(M)),P.__cacheKey=de,P.__webglTexture=ce[de].texture}return B}function Z(P,M,B){let te=3553;M.isDataArrayTexture&&(te=35866),M.isData3DTexture&&(te=32879);const ce=Se(P,M),de=M.source;if(n.activeTexture(33984+B),n.bindTexture(te,P.__webglTexture),de.version!==de.__currentVersion||ce===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const Te=w(M)&&S(M.image)===!1;let Y=x(M.image,Te,!1,u);Y=Qt(M,Y);const Ce=S(Y)||a,we=s.convert(M.format,M.encoding);let be=s.convert(M.type),Me=y(M.internalFormat,we,be,M.encoding,M.isVideoTexture);A(te,M,Ce);let Oe;const Ze=M.mipmaps,yt=a&&M.isVideoTexture!==!0,z=de.__currentVersion===void 0||ce===!0,_e=T(M,Y,Ce);if(M.isDepthTexture)Me=6402,a?M.type===Vr?Me=36012:M.type===Gr?Me=33190:M.type===io?Me=35056:Me=33189:M.type===Vr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===qr&&Me===6402&&M.type!==ex&&M.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Gr,be=s.convert(M.type)),M.format===_o&&Me===6402&&(Me=34041,M.type!==io&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=io,be=s.convert(M.type))),z&&(yt?n.texStorage2D(3553,1,Me,Y.width,Y.height):n.texImage2D(3553,0,Me,Y.width,Y.height,0,we,be,null));else if(M.isDataTexture)if(Ze.length>0&&Ce){yt&&z&&n.texStorage2D(3553,_e,Me,Ze[0].width,Ze[0].height);for(let Q=0,me=Ze.length;Q<me;Q++)Oe=Ze[Q],yt?n.texSubImage2D(3553,Q,0,0,Oe.width,Oe.height,we,be,Oe.data):n.texImage2D(3553,Q,Me,Oe.width,Oe.height,0,we,be,Oe.data);M.generateMipmaps=!1}else yt?(z&&n.texStorage2D(3553,_e,Me,Y.width,Y.height),n.texSubImage2D(3553,0,0,0,Y.width,Y.height,we,be,Y.data)):n.texImage2D(3553,0,Me,Y.width,Y.height,0,we,be,Y.data);else if(M.isCompressedTexture){yt&&z&&n.texStorage2D(3553,_e,Me,Ze[0].width,Ze[0].height);for(let Q=0,me=Ze.length;Q<me;Q++)Oe=Ze[Q],M.format!==pi?we!==null?yt?n.compressedTexSubImage2D(3553,Q,0,0,Oe.width,Oe.height,we,Oe.data):n.compressedTexImage2D(3553,Q,Me,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?n.texSubImage2D(3553,Q,0,0,Oe.width,Oe.height,we,be,Oe.data):n.texImage2D(3553,Q,Me,Oe.width,Oe.height,0,we,be,Oe.data)}else if(M.isDataArrayTexture)yt?(z&&n.texStorage3D(35866,_e,Me,Y.width,Y.height,Y.depth),n.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,we,be,Y.data)):n.texImage3D(35866,0,Me,Y.width,Y.height,Y.depth,0,we,be,Y.data);else if(M.isData3DTexture)yt?(z&&n.texStorage3D(32879,_e,Me,Y.width,Y.height,Y.depth),n.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,we,be,Y.data)):n.texImage3D(32879,0,Me,Y.width,Y.height,Y.depth,0,we,be,Y.data);else if(M.isFramebufferTexture){if(z)if(yt)n.texStorage2D(3553,_e,Me,Y.width,Y.height);else{let Q=Y.width,me=Y.height;for(let pe=0;pe<_e;pe++)n.texImage2D(3553,pe,Me,Q,me,0,we,be,null),Q>>=1,me>>=1}}else if(Ze.length>0&&Ce){yt&&z&&n.texStorage2D(3553,_e,Me,Ze[0].width,Ze[0].height);for(let Q=0,me=Ze.length;Q<me;Q++)Oe=Ze[Q],yt?n.texSubImage2D(3553,Q,0,0,we,be,Oe):n.texImage2D(3553,Q,Me,we,be,Oe);M.generateMipmaps=!1}else yt?(z&&n.texStorage2D(3553,_e,Me,Y.width,Y.height),n.texSubImage2D(3553,0,0,0,we,be,Y)):n.texImage2D(3553,0,Me,we,be,Y);C(M,Ce)&&R(te),de.__currentVersion=de.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ye(P,M,B){if(M.image.length!==6)return;const te=Se(P,M),ce=M.source;if(n.activeTexture(33984+B),n.bindTexture(34067,P.__webglTexture),ce.version!==ce.__currentVersion||te===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,Te=M.image[0]&&M.image[0].isDataTexture,Y=[];for(let Q=0;Q<6;Q++)!de&&!Te?Y[Q]=x(M.image[Q],!1,!0,c):Y[Q]=Te?M.image[Q].image:M.image[Q],Y[Q]=Qt(M,Y[Q]);const Ce=Y[0],we=S(Ce)||a,be=s.convert(M.format,M.encoding),Me=s.convert(M.type),Oe=y(M.internalFormat,be,Me,M.encoding),Ze=a&&M.isVideoTexture!==!0,yt=ce.__currentVersion===void 0||te===!0;let z=T(M,Ce,we);A(34067,M,we);let _e;if(de){Ze&&yt&&n.texStorage2D(34067,z,Oe,Ce.width,Ce.height);for(let Q=0;Q<6;Q++){_e=Y[Q].mipmaps;for(let me=0;me<_e.length;me++){const pe=_e[me];M.format!==pi?be!==null?Ze?n.compressedTexSubImage2D(34069+Q,me,0,0,pe.width,pe.height,be,pe.data):n.compressedTexImage2D(34069+Q,me,Oe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?n.texSubImage2D(34069+Q,me,0,0,pe.width,pe.height,be,Me,pe.data):n.texImage2D(34069+Q,me,Oe,pe.width,pe.height,0,be,Me,pe.data)}}}else{_e=M.mipmaps,Ze&&yt&&(_e.length>0&&z++,n.texStorage2D(34067,z,Oe,Y[0].width,Y[0].height));for(let Q=0;Q<6;Q++)if(Te){Ze?n.texSubImage2D(34069+Q,0,0,0,Y[Q].width,Y[Q].height,be,Me,Y[Q].data):n.texImage2D(34069+Q,0,Oe,Y[Q].width,Y[Q].height,0,be,Me,Y[Q].data);for(let me=0;me<_e.length;me++){const qe=_e[me].image[Q].image;Ze?n.texSubImage2D(34069+Q,me+1,0,0,qe.width,qe.height,be,Me,qe.data):n.texImage2D(34069+Q,me+1,Oe,qe.width,qe.height,0,be,Me,qe.data)}}else{Ze?n.texSubImage2D(34069+Q,0,0,0,be,Me,Y[Q]):n.texImage2D(34069+Q,0,Oe,be,Me,Y[Q]);for(let me=0;me<_e.length;me++){const pe=_e[me];Ze?n.texSubImage2D(34069+Q,me+1,0,0,be,Me,pe.image[Q]):n.texImage2D(34069+Q,me+1,Oe,be,Me,pe.image[Q])}}}C(M,we)&&R(34067),ce.__currentVersion=ce.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ae(P,M,B,te,ce){const de=s.convert(B.format,B.encoding),Te=s.convert(B.type),Y=y(B.internalFormat,de,Te,B.encoding);i.get(M).__hasExternalTextures||(ce===32879||ce===35866?n.texImage3D(ce,0,Y,M.width,M.height,M.depth,0,de,Te,null):n.texImage2D(ce,0,Y,M.width,M.height,0,de,Te,null)),n.bindFramebuffer(36160,P),Ge(M)?d.framebufferTexture2DMultisampleEXT(36160,te,ce,i.get(B).__webglTexture,0,Ue(M)):t.framebufferTexture2D(36160,te,ce,i.get(B).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ee(P,M,B){if(t.bindRenderbuffer(36161,P),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(B||Ge(M)){const ce=M.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Vr?te=36012:ce.type===Gr&&(te=33190));const de=Ue(M);Ge(M)?d.renderbufferStorageMultisampleEXT(36161,de,te,M.width,M.height):t.renderbufferStorageMultisample(36161,de,te,M.width,M.height)}else t.renderbufferStorage(36161,te,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,P)}else if(M.depthBuffer&&M.stencilBuffer){const te=Ue(M);B&&Ge(M)===!1?t.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):Ge(M)?d.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,P)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ce=0;ce<te.length;ce++){const de=te[ce],Te=s.convert(de.format,de.encoding),Y=s.convert(de.type),Ce=y(de.internalFormat,Te,Y,de.encoding),we=Ue(M);B&&Ge(M)===!1?t.renderbufferStorageMultisample(36161,we,Ce,M.width,M.height):Ge(M)?d.renderbufferStorageMultisampleEXT(36161,we,Ce,M.width,M.height):t.renderbufferStorage(36161,Ce,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function ue(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,ce=Ue(M);if(M.depthTexture.format===qr)Ge(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ce):t.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===_o)Ge(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ce):t.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ve(P){const M=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,P)}else if(B){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),Ee(M.__webglDepthbuffer[te],P,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ee(M.__webglDepthbuffer,P,!1);n.bindFramebuffer(36160,null)}function je(P,M,B){const te=i.get(P);M!==void 0&&ae(te.__webglFramebuffer,P,P.texture,36064,3553),B!==void 0&&ve(P)}function Pe(P){const M=P.texture,B=i.get(P),te=i.get(M);P.addEventListener("dispose",re),P.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,o.memory.textures++);const ce=P.isWebGLCubeRenderTarget===!0,de=P.isWebGLMultipleRenderTargets===!0,Te=S(P)||a;if(ce){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)B.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(B.__webglFramebuffer=t.createFramebuffer(),de)if(r.drawBuffers){const Y=P.texture;for(let Ce=0,we=Y.length;Ce<we;Ce++){const be=i.get(Y[Ce]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ge(P)===!1){const Y=de?M:[M];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Y.length;Ce++){const we=Y[Ce];B.__webglColorRenderbuffer[Ce]=t.createRenderbuffer(),t.bindRenderbuffer(36161,B.__webglColorRenderbuffer[Ce]);const be=s.convert(we.format,we.encoding),Me=s.convert(we.type),Oe=y(we.internalFormat,be,Me,we.encoding),Ze=Ue(P);t.renderbufferStorageMultisample(36161,Ze,Oe,P.width,P.height),t.framebufferRenderbuffer(36160,36064+Ce,36161,B.__webglColorRenderbuffer[Ce])}t.bindRenderbuffer(36161,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ee(B.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(36160,null)}}if(ce){n.bindTexture(34067,te.__webglTexture),A(34067,M,Te);for(let Y=0;Y<6;Y++)ae(B.__webglFramebuffer[Y],P,M,36064,34069+Y);C(M,Te)&&R(34067),n.unbindTexture()}else if(de){const Y=P.texture;for(let Ce=0,we=Y.length;Ce<we;Ce++){const be=Y[Ce],Me=i.get(be);n.bindTexture(3553,Me.__webglTexture),A(3553,be,Te),ae(B.__webglFramebuffer,P,be,36064+Ce,3553),C(be,Te)&&R(3553)}n.unbindTexture()}else{let Y=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?Y=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Y,te.__webglTexture),A(Y,M,Te),ae(B.__webglFramebuffer,P,M,36064,Y),C(M,Te)&&R(Y),n.unbindTexture()}P.depthBuffer&&ve(P)}function Xe(P){const M=S(P)||a,B=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let te=0,ce=B.length;te<ce;te++){const de=B[te];if(C(de,M)){const Te=P.isWebGLCubeRenderTarget?34067:3553,Y=i.get(de).__webglTexture;n.bindTexture(Te,Y),R(Te),n.unbindTexture()}}}function De(P){if(a&&P.samples>0&&Ge(P)===!1){const M=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],B=P.width,te=P.height;let ce=16384;const de=[],Te=P.stencilBuffer?33306:36096,Y=i.get(P),Ce=P.isWebGLMultipleRenderTargets===!0;if(Ce)for(let we=0;we<M.length;we++)n.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+we,36161,null),n.bindFramebuffer(36160,Y.__webglFramebuffer),t.framebufferTexture2D(36009,36064+we,3553,null,0);n.bindFramebuffer(36008,Y.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,Y.__webglFramebuffer);for(let we=0;we<M.length;we++){de.push(36064+we),P.depthBuffer&&de.push(Te);const be=Y.__ignoreDepthValues!==void 0?Y.__ignoreDepthValues:!1;if(be===!1&&(P.depthBuffer&&(ce|=256),P.stencilBuffer&&(ce|=1024)),Ce&&t.framebufferRenderbuffer(36008,36064,36161,Y.__webglColorRenderbuffer[we]),be===!0&&(t.invalidateFramebuffer(36008,[Te]),t.invalidateFramebuffer(36009,[Te])),Ce){const Me=i.get(M[we]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,Me,0)}t.blitFramebuffer(0,0,B,te,0,0,B,te,ce,9728),m&&t.invalidateFramebuffer(36008,de)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),Ce)for(let we=0;we<M.length;we++){n.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+we,36161,Y.__webglColorRenderbuffer[we]);const be=i.get(M[we]).__webglTexture;n.bindFramebuffer(36160,Y.__webglFramebuffer),t.framebufferTexture2D(36009,36064+we,3553,be,0)}n.bindFramebuffer(36009,Y.__webglMultisampledFramebuffer)}}function Ue(P){return Math.min(f,P.samples)}function Ge(P){const M=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(P){const M=o.render.frame;_.get(P)!==M&&(_.set(P,M),P.update())}function Qt(P,M){const B=P.encoding,te=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Kd||B!==ss&&(B===ot?a===!1?e.has("EXT_sRGB")===!0&&te===pi?(P.format=Kd,P.minFilter=On,P.generateMipmaps=!1):M=sx.sRGBToLinear(M):(te!==pi||ce!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),M}this.allocateTextureUnit=O,this.resetTextureUnits=J,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=N,this.setTextureCube=V,this.rebindTextures=je,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ge}function C4(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===rs)return 5121;if(s===a3)return 32819;if(s===l3)return 32820;if(s===r3)return 5120;if(s===s3)return 5122;if(s===ex)return 5123;if(s===o3)return 5124;if(s===Gr)return 5125;if(s===Vr)return 5126;if(s===Ia)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===c3)return 6406;if(s===pi)return 6408;if(s===u3)return 6409;if(s===f3)return 6410;if(s===qr)return 6402;if(s===_o)return 34041;if(s===d3)return 6403;if(s===tx)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Kd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===h3)return 36244;if(s===p3)return 33319;if(s===m3)return 33320;if(s===g3)return 36249;if(s===hf||s===pf||s===mf||s===gf)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wg||s===Mg||s===Eg||s===bg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===wg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Eg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===v3)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Cg||s===Tg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Cg)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Tg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ag||s===Pg||s===Lg||s===Rg||s===Dg||s===Ig||s===Og||s===kg||s===zg||s===Fg||s===Ng||s===Bg||s===Ug||s===Gg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ag)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ig)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Og)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ng)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ug)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Vg)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===io?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class T4 extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Al extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A4={type:"move"};class Hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i);if(c.joints[h.jointName]===void 0){const v=new Al;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[h.jointName]=v,c.add(v)}const g=c.joints[h.jointName];p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A4)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class P4 extends si{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:qr,u!==qr&&u!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===qr&&(i=Gr),i===void 0&&u===_o&&(i=io),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1}}class L4 extends bo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,d=null,m=null;const _=n.getContextAttributes();let h=null,p=null;const g=[],v=[],x=new Nt;x.layers.enable(1),x.viewport=new ft;const S=new Nt;S.layers.enable(2),S.viewport=new ft;const w=[x,S],C=new T4;C.layers.enable(1),C.layers.enable(2);let R=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let G=g[k];return G===void 0&&(G=new Hf,g[k]=G),G.getTargetRaySpace()},this.getControllerGrip=function(k){let G=g[k];return G===void 0&&(G=new Hf,g[k]=G),G.getGripSpace()},this.getHand=function(k){let G=g[k];return G===void 0&&(G=new Hf,g[k]=G),G.getHandSpace()};function T(k){const G=v.indexOf(k.inputSource);if(G===-1)return;const K=g[G];K!==void 0&&K.dispatchEvent({type:k.type,data:k.inputSource})}function I(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",F);for(let k=0;k<g.length;k++){const G=v[k];G!==null&&(v[k]=null,g[k].disconnect(G))}R=null,y=null,e.setRenderTarget(h),d=null,f=null,u=null,r=null,p=null,O.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",I),r.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,G),r.updateRenderState({baseLayer:d}),p=new os(d.framebufferWidth,d.framebufferHeight,{format:pi,type:rs,encoding:e.outputEncoding})}else{let G=null,K=null,N=null;_.depth&&(N=_.stencil?35056:33190,G=_.stencil?_o:qr,K=_.stencil?io:Gr);const V={colorFormat:32856,depthFormat:N,scaleFactor:s};u=new XRWebGLBinding(r,n),f=u.createProjectionLayer(V),r.updateRenderState({layers:[f]}),p=new os(f.textureWidth,f.textureHeight,{format:pi,type:rs,depthTexture:new P4(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const q=e.properties.get(p);q.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),O.setContext(r),O.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(k){for(let G=0;G<k.removed.length;G++){const K=k.removed[G],N=v.indexOf(K);N>=0&&(v[N]=null,g[N].dispatchEvent({type:"disconnected",data:K}))}for(let G=0;G<k.added.length;G++){const K=k.added[G];let N=v.indexOf(K);if(N===-1){for(let q=0;q<g.length;q++)if(q>=v.length){v.push(K),N=q;break}else if(v[q]===null){v[q]=K,N=q;break}if(N===-1)break}const V=g[N];V&&V.dispatchEvent({type:"connected",data:K})}}const re=new D,ee=new D;function U(k,G,K){re.setFromMatrixPosition(G.matrixWorld),ee.setFromMatrixPosition(K.matrixWorld);const N=re.distanceTo(ee),V=G.projectionMatrix.elements,q=K.projectionMatrix.elements,le=V[14]/(V[10]-1),A=V[14]/(V[10]+1),Se=(V[9]+1)/V[5],Z=(V[9]-1)/V[5],ye=(V[8]-1)/V[0],ae=(q[8]+1)/q[0],Ee=le*ye,ue=le*ae,ve=N/(-ye+ae),je=ve*-ye;G.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(je),k.translateZ(ve),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Pe=le+ve,Xe=A+ve,De=Ee-je,Ue=ue+(N-je),Ge=Se*A/Xe*Pe,nt=Z*A/Xe*Pe;k.projectionMatrix.makePerspective(De,Ue,Ge,nt,Pe,Xe)}function X(k,G){G===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(G.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;C.near=S.near=x.near=k.near,C.far=S.far=x.far=k.far,(R!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),R=C.near,y=C.far);const G=k.parent,K=C.cameras;X(C,G);for(let V=0;V<K.length;V++)X(K[V],G);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),k.position.copy(C.position),k.quaternion.copy(C.quaternion),k.scale.copy(C.scale),k.matrix.copy(C.matrix),k.matrixWorld.copy(C.matrixWorld);const N=k.children;for(let V=0,q=N.length;V<q;V++)N[V].updateMatrixWorld(!0);K.length===2?U(C,x,S):C.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(k){f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let $=null;function J(k,G){if(c=G.getViewerPose(l||o),m=G,c!==null){const K=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let N=!1;K.length!==C.cameras.length&&(C.cameras.length=0,N=!0);for(let V=0;V<K.length;V++){const q=K[V];let le=null;if(d!==null)le=d.getViewport(q);else{const Se=u.getViewSubImage(f,q);le=Se.viewport,V===0&&(e.setRenderTargetTextures(p,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(p))}let A=w[V];A===void 0&&(A=new Nt,A.layers.enable(V),A.viewport=new ft,w[V]=A),A.matrix.fromArray(q.transform.matrix),A.projectionMatrix.fromArray(q.projectionMatrix),A.viewport.set(le.x,le.y,le.width,le.height),V===0&&C.matrix.copy(A.matrix),N===!0&&C.cameras.push(A)}}for(let K=0;K<g.length;K++){const N=v[K],V=g[K];N!==null&&V!==void 0&&V.update(N,G,l||o)}$&&$(k,G),m=null}const O=new dx;O.setAnimationLoop(J),this.setAnimationLoop=function(k){$=k},this.dispose=function(){}}}function R4(t,e){function n(h,p){h.fogColor.value.copy(p.color),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,g,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),u(h,p)):p.isMeshPhongMaterial?(r(h,p),c(h,p)):p.isMeshStandardMaterial?(r(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,x)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),_(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,g,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===ni&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===ni&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const S=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uv2Transform.value.copy(x.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uvTransform.value.copy(x.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ni&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function _(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function D4(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function c(v,x){let S=r[v.id];S===void 0&&(_(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",p));const w=x.program;i.updateUBOMapping(v,w);const C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function u(v){const x=f();v.__bindingPointIndex=x;const S=t.createBuffer(),w=v.__size,C=v.usage;return t.bindBuffer(35345,S),t.bufferData(35345,w,C),t.bindBuffer(35345,null),t.bindBufferBase(35345,x,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],S=v.uniforms,w=v.__cache;t.bindBuffer(35345,x);for(let C=0,R=S.length;C<R;C++){const y=S[C];if(m(y,C,w)===!0){const T=y.value,I=y.__offset;typeof T=="number"?(y.__data[0]=T,t.bufferSubData(35345,I,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):T.toArray(y.__data),t.bufferSubData(35345,I,y.__data))}}t.bindBuffer(35345,null)}function m(v,x,S){const w=v.value;if(S[x]===void 0)return typeof w=="number"?S[x]=w:S[x]=w.clone(),!0;if(typeof w=="number"){if(S[x]!==w)return S[x]=w,!0}else{const C=S[x];if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(v){const x=v.uniforms;let S=0;const w=16;let C=0;for(let R=0,y=x.length;R<y;R++){const T=x[R],I=h(T);if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,R>0){C=S%w;const F=w-C;C!==0&&F-I.boundary<0&&(S+=w-C,T.__offset=S)}S+=I.storage}return C=S%w,C>0&&(S+=w-C),v.__size=S,v.__cache={},this}function h(v){const x=v.value,S={boundary:0,storage:0};return typeof x=="number"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function p(v){const x=v.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function g(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}function I4(){const t=Dc("canvas");return t.style.display="block",t}function Du(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:I4(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",c=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let u;n!==null?u=n.getContextAttributes().alpha:u=t.alpha!==void 0?t.alpha:!1;let f=null,d=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ss,this.physicallyCorrectLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const h=this;let p=!1,g=0,v=0,x=null,S=-1,w=null;const C=new ft,R=new ft;let y=null,T=e.width,I=e.height,F=1,re=null,ee=null;const U=new ft(0,0,T,I),X=new ft(0,0,T,I);let $=!1;const J=new Tp;let O=!1,k=!1,G=null;const K=new ht,N=new Re,V=new D,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return x===null?F:1}let A=n;function Se(b,H){for(let j=0;j<b.length;j++){const W=b[j],ne=e.getContext(W,H);if(ne!==null)return ne}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sp}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",Ze,!1),e.addEventListener("webglcontextcreationerror",yt,!1),A===null){const H=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&H.shift(),A=Se(H,b),A===null)throw Se(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Z,ye,ae,Ee,ue,ve,je,Pe,Xe,De,Ue,Ge,nt,Qt,P,M,B,te,ce,de,Te,Y,Ce,we;function be(){Z=new HC(A),ye=new FC(A,Z,t),Z.init(ye),Y=new C4(A,Z,ye),ae=new E4(A,Z,ye),Ee=new jC,ue=new u4,ve=new b4(A,Z,ae,ue,ye,Y,Ee),je=new BC(h),Pe=new VC(h),Xe=new rE(A,ye),Ce=new kC(A,Z,Xe,ye),De=new WC(A,Xe,Ee,Ce),Ue=new ZC(A,De,Xe,Ee),ce=new YC(A,ye,ve),M=new NC(ue),Ge=new c4(h,je,Pe,Z,ye,Ce,M),nt=new R4(h,ue),Qt=new d4,P=new _4(Z,ye),te=new OC(h,je,ae,Ue,u,o),B=new M4(h,Ue,ye),we=new D4(A,Ee,ye,ae),de=new zC(A,Z,Ee,ye),Te=new $C(A,Z,Ee,ye),Ee.programs=Ge.programs,h.capabilities=ye,h.extensions=Z,h.properties=ue,h.renderLists=Qt,h.shadowMap=B,h.state=ae,h.info=Ee}be();const Me=new L4(h,A);this.xr=Me,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=Z.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Z.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(b){b!==void 0&&(F=b,this.setSize(T,I,!1))},this.getSize=function(b){return b.set(T,I)},this.setSize=function(b,H,j){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=b,I=H,e.width=Math.floor(b*F),e.height=Math.floor(H*F),j!==!1&&(e.style.width=b+"px",e.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(T*F,I*F).floor()},this.setDrawingBufferSize=function(b,H,j){T=b,I=H,F=j,e.width=Math.floor(b*j),e.height=Math.floor(H*j),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(U)},this.setViewport=function(b,H,j,W){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,H,j,W),ae.viewport(C.copy(U).multiplyScalar(F).floor())},this.getScissor=function(b){return b.copy(X)},this.setScissor=function(b,H,j,W){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,H,j,W),ae.scissor(R.copy(X).multiplyScalar(F).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(b){ae.setScissorTest($=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(b=!0,H=!0,j=!0){let W=0;b&&(W|=16384),H&&(W|=256),j&&(W|=1024),A.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",Ze,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Qt.dispose(),P.dispose(),ue.dispose(),je.dispose(),Pe.dispose(),Ue.dispose(),Ce.dispose(),we.dispose(),Ge.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",qe),Me.removeEventListener("sessionend",Lt),G&&(G.dispose(),G=null),St.stop()};function Oe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Ze(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const b=Ee.autoReset,H=B.enabled,j=B.autoUpdate,W=B.needsUpdate,ne=B.type;be(),Ee.autoReset=b,B.enabled=H,B.autoUpdate=j,B.needsUpdate=W,B.type=ne}function yt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function z(b){const H=b.target;H.removeEventListener("dispose",z),_e(H)}function _e(b){Q(b),ue.remove(b)}function Q(b){const H=ue.get(b).programs;H!==void 0&&(H.forEach(function(j){Ge.releaseProgram(j)}),b.isShaderMaterial&&Ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,j,W,ne,Le){H===null&&(H=q);const Ie=ne.isMesh&&ne.matrixWorld.determinant()<0,ze=Sy(b,H,j,W,ne);ae.setMaterial(W,Ie);let ke=j.index;const Je=j.attributes.position;if(ke===null){if(Je===void 0||Je.count===0)return}else if(ke.count===0)return;let Ve=1;W.wireframe===!0&&(ke=De.getWireframeAttribute(j),Ve=2),Ce.setup(ne,W,ze,j,ke);let Ye,vt=de;ke!==null&&(Ye=Xe.get(ke),vt=Te,vt.setIndex(Ye));const Cr=ke!==null?ke.count:Je.count,ds=j.drawRange.start*Ve,hs=j.drawRange.count*Ve,oi=Le!==null?Le.start*Ve:0,Qe=Le!==null?Le.count*Ve:1/0,ps=Math.max(ds,oi),Et=Math.min(Cr,ds+hs,oi+Qe)-1,Ln=Math.max(0,Et-ps+1);if(Ln!==0){if(ne.isMesh)W.wireframe===!0?(ae.setLineWidth(W.wireframeLinewidth*le()),vt.setMode(1)):vt.setMode(4);else if(ne.isLine){let Vi=W.linewidth;Vi===void 0&&(Vi=1),ae.setLineWidth(Vi*le()),ne.isLineSegments?vt.setMode(1):ne.isLineLoop?vt.setMode(2):vt.setMode(3)}else ne.isPoints?vt.setMode(0):ne.isSprite&&vt.setMode(4);if(ne.isInstancedMesh)vt.renderInstances(ps,Ln,ne.count);else if(j.isInstancedBufferGeometry){const Vi=Math.min(j.instanceCount,j._maxInstanceCount);vt.renderInstances(ps,Ln,Vi)}else vt.render(ps,Ln)}},this.compile=function(b,H){d=P.get(b),d.init(),_.push(d),b.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),d.setupLights(h.physicallyCorrectLights),b.traverse(function(j){const W=j.material;if(W)if(Array.isArray(W))for(let ne=0;ne<W.length;ne++){const Le=W[ne];Iu(Le,b,j)}else Iu(W,b,j)}),_.pop(),d=null};let me=null;function pe(b){me&&me(b)}function qe(){St.stop()}function Lt(){St.start()}const St=new dx;St.setAnimationLoop(pe),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(b){me=b,Me.setAnimationLoop(b),b===null?St.stop():St.start()},Me.addEventListener("sessionstart",qe),Me.addEventListener("sessionend",Lt),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(H),H=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(h,b,H,x),d=P.get(b,_.length),d.init(),_.push(d),K.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),J.setFromProjectionMatrix(K),k=this.localClippingEnabled,O=M.init(this.clippingPlanes,k,H),f=Qt.get(b,m.length),f.init(),m.push(f),Gi(b,H,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(re,ee),O===!0&&M.beginShadows();const j=d.state.shadowsArray;if(B.render(j,b,H),O===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(f,b),d.setupLights(h.physicallyCorrectLights),H.isArrayCamera){const W=H.cameras;for(let ne=0,Le=W.length;ne<Le;ne++){const Ie=W[ne];gt(f,b,Ie,Ie.viewport)}}else gt(f,b,H);x!==null&&(ve.updateMultisampleRenderTarget(x),ve.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(h,b,H),Ce.resetDefaultState(),S=-1,w=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Gi(b,H,j,W){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){W&&V.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const Ie=Ue.update(b),ze=b.material;ze.visible&&f.push(b,Ie,ze,j,V.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ee.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ee.render.frame),!b.frustumCulled||J.intersectsObject(b))){W&&V.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const Ie=Ue.update(b),ze=b.material;if(Array.isArray(ze)){const ke=Ie.groups;for(let Je=0,Ve=ke.length;Je<Ve;Je++){const Ye=ke[Je],vt=ze[Ye.materialIndex];vt&&vt.visible&&f.push(b,Ie,vt,j,V.z,Ye)}}else ze.visible&&f.push(b,Ie,ze,j,V.z,null)}}const Le=b.children;for(let Ie=0,ze=Le.length;Ie<ze;Ie++)Gi(Le[Ie],H,j,W)}function gt(b,H,j,W){const ne=b.opaque,Le=b.transmissive,Ie=b.transparent;d.setupLightsView(j),Le.length>0&&yi(ne,H,j),W&&ae.viewport(C.copy(W)),ne.length>0&&Pn(ne,H,j),Le.length>0&&Pn(Le,H,j),Ie.length>0&&Pn(Ie,H,j),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function yi(b,H,j){const W=ye.isWebGL2;G===null&&(G=new os(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?Ia:rs,minFilter:Lu,samples:W&&s===!0?4:0})),h.getDrawingBufferSize(N),W?G.setSize(N.x,N.y):G.setSize(Rc(N.x),Rc(N.y));const ne=h.getRenderTarget();h.setRenderTarget(G),h.clear();const Le=h.toneMapping;h.toneMapping=Ii,Pn(b,H,j),h.toneMapping=Le,ve.updateMultisampleRenderTarget(G),ve.updateRenderTargetMipmap(G),h.setRenderTarget(ne)}function Pn(b,H,j){const W=H.isScene===!0?H.overrideMaterial:null;for(let ne=0,Le=b.length;ne<Le;ne++){const Ie=b[ne],ze=Ie.object,ke=Ie.geometry,Je=W===null?Ie.material:W,Ve=Ie.group;ze.layers.test(j.layers)&&yy(ze,H,j,ke,Je,Ve)}}function yy(b,H,j,W,ne,Le){b.onBeforeRender(h,H,j,W,ne,Le),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ne.onBeforeRender(h,H,j,W,b,Le),ne.transparent===!0&&ne.side===xr?(ne.side=ni,ne.needsUpdate=!0,h.renderBufferDirect(j,H,W,ne,b,Le),ne.side=Da,ne.needsUpdate=!0,h.renderBufferDirect(j,H,W,ne,b,Le),ne.side=xr):h.renderBufferDirect(j,H,W,ne,b,Le),b.onAfterRender(h,H,j,W,ne,Le)}function Iu(b,H,j){H.isScene!==!0&&(H=q);const W=ue.get(b),ne=d.state.lights,Le=d.state.shadowsArray,Ie=ne.state.version,ze=Ge.getParameters(b,ne.state,Le,H,j),ke=Ge.getProgramCacheKey(ze);let Je=W.programs;W.environment=b.isMeshStandardMaterial?H.environment:null,W.fog=H.fog,W.envMap=(b.isMeshStandardMaterial?Pe:je).get(b.envMap||W.environment),Je===void 0&&(b.addEventListener("dispose",z),Je=new Map,W.programs=Je);let Ve=Je.get(ke);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===Ie)return qp(b,ze),Ve}else ze.uniforms=Ge.getUniforms(b),b.onBuild(j,ze,h),b.onBeforeCompile(ze,h),Ve=Ge.acquireProgram(ze,ke),Je.set(ke,Ve),W.uniforms=ze.uniforms;const Ye=W.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ye.clippingPlanes=M.uniform),qp(b,ze),W.needsLights=My(b),W.lightsStateVersion=Ie,W.needsLights&&(Ye.ambientLightColor.value=ne.state.ambient,Ye.lightProbe.value=ne.state.probe,Ye.directionalLights.value=ne.state.directional,Ye.directionalLightShadows.value=ne.state.directionalShadow,Ye.spotLights.value=ne.state.spot,Ye.spotLightShadows.value=ne.state.spotShadow,Ye.rectAreaLights.value=ne.state.rectArea,Ye.ltc_1.value=ne.state.rectAreaLTC1,Ye.ltc_2.value=ne.state.rectAreaLTC2,Ye.pointLights.value=ne.state.point,Ye.pointLightShadows.value=ne.state.pointShadow,Ye.hemisphereLights.value=ne.state.hemi,Ye.directionalShadowMap.value=ne.state.directionalShadowMap,Ye.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ye.spotShadowMap.value=ne.state.spotShadowMap,Ye.spotShadowMatrix.value=ne.state.spotShadowMatrix,Ye.pointShadowMap.value=ne.state.pointShadowMap,Ye.pointShadowMatrix.value=ne.state.pointShadowMatrix);const vt=Ve.getUniforms(),Cr=Kl.seqWithValue(vt.seq,Ye);return W.currentProgram=Ve,W.uniformsList=Cr,Ve}function qp(b,H){const j=ue.get(b);j.outputEncoding=H.outputEncoding,j.instancing=H.instancing,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function Sy(b,H,j,W,ne){H.isScene!==!0&&(H=q),ve.resetTextureUnits();const Le=H.fog,Ie=W.isMeshStandardMaterial?H.environment:null,ze=x===null?h.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:ss,ke=(W.isMeshStandardMaterial?Pe:je).get(W.envMap||Ie),Je=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!W.normalMap&&!!j.attributes.tangent,Ye=!!j.morphAttributes.position,vt=!!j.morphAttributes.normal,Cr=!!j.morphAttributes.color,ds=W.toneMapped?h.toneMapping:Ii,hs=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,oi=hs!==void 0?hs.length:0,Qe=ue.get(W),ps=d.state.lights;if(O===!0&&(k===!0||b!==w)){const vn=b===w&&W.id===S;M.setState(W,b,vn)}let Et=!1;W.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ps.state.version||Qe.outputEncoding!==ze||ne.isInstancedMesh&&Qe.instancing===!1||!ne.isInstancedMesh&&Qe.instancing===!0||ne.isSkinnedMesh&&Qe.skinning===!1||!ne.isSkinnedMesh&&Qe.skinning===!0||Qe.envMap!==ke||W.fog===!0&&Qe.fog!==Le||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==M.numPlanes||Qe.numIntersection!==M.numIntersection)||Qe.vertexAlphas!==Je||Qe.vertexTangents!==Ve||Qe.morphTargets!==Ye||Qe.morphNormals!==vt||Qe.morphColors!==Cr||Qe.toneMapping!==ds||ye.isWebGL2===!0&&Qe.morphTargetsCount!==oi)&&(Et=!0):(Et=!0,Qe.__version=W.version);let Ln=Qe.currentProgram;Et===!0&&(Ln=Iu(W,H,ne));let Vi=!1,Ro=!1,Ou=!1;const Jt=Ln.getUniforms(),Do=Qe.uniforms;if(ae.useProgram(Ln.program)&&(Vi=!0,Ro=!0,Ou=!0),W.id!==S&&(S=W.id,Ro=!0),Vi||w!==b){if(Jt.setValue(A,"projectionMatrix",b.projectionMatrix),ye.logarithmicDepthBuffer&&Jt.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,Ro=!0,Ou=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const vn=Jt.map.cameraPosition;vn!==void 0&&vn.setValue(A,V.setFromMatrixPosition(b.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Jt.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ne.isSkinnedMesh)&&Jt.setValue(A,"viewMatrix",b.matrixWorldInverse)}if(ne.isSkinnedMesh){Jt.setOptional(A,ne,"bindMatrix"),Jt.setOptional(A,ne,"bindMatrixInverse");const vn=ne.skeleton;vn&&(ye.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Jt.setValue(A,"boneTexture",vn.boneTexture,ve),Jt.setValue(A,"boneTextureSize",vn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ku=j.morphAttributes;if((ku.position!==void 0||ku.normal!==void 0||ku.color!==void 0&&ye.isWebGL2===!0)&&ce.update(ne,j,W,Ln),(Ro||Qe.receiveShadow!==ne.receiveShadow)&&(Qe.receiveShadow=ne.receiveShadow,Jt.setValue(A,"receiveShadow",ne.receiveShadow)),Ro&&(Jt.setValue(A,"toneMappingExposure",h.toneMappingExposure),Qe.needsLights&&wy(Do,Ou),Le&&W.fog===!0&&nt.refreshFogUniforms(Do,Le),nt.refreshMaterialUniforms(Do,W,F,I,G),Kl.upload(A,Qe.uniformsList,Do,ve)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Kl.upload(A,Qe.uniformsList,Do,ve),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Jt.setValue(A,"center",ne.center),Jt.setValue(A,"modelViewMatrix",ne.modelViewMatrix),Jt.setValue(A,"normalMatrix",ne.normalMatrix),Jt.setValue(A,"modelMatrix",ne.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const vn=W.uniformsGroups;for(let zu=0,Ey=vn.length;zu<Ey;zu++)if(ye.isWebGL2){const Yp=vn[zu];we.update(Yp,Ln),we.bind(Yp,Ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ln}function wy(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function My(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,H,j){ue.get(b.texture).__webglTexture=H,ue.get(b.depthTexture).__webglTexture=j;const W=ue.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=j===void 0,W.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,H){const j=ue.get(b);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,j=0){x=b,g=H,v=j;let W=!0;if(b){const ke=ue.get(b);ke.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),W=!1):ke.__webglFramebuffer===void 0?ve.setupRenderTarget(b):ke.__hasExternalTextures&&ve.rebindTextures(b,ue.get(b.texture).__webglTexture,ue.get(b.depthTexture).__webglTexture)}let ne=null,Le=!1,Ie=!1;if(b){const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture)&&(Ie=!0);const Je=ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(ne=Je[H],Le=!0):ye.isWebGL2&&b.samples>0&&ve.useMultisampledRTT(b)===!1?ne=ue.get(b).__webglMultisampledFramebuffer:ne=Je,C.copy(b.viewport),R.copy(b.scissor),y=b.scissorTest}else C.copy(U).multiplyScalar(F).floor(),R.copy(X).multiplyScalar(F).floor(),y=$;if(ae.bindFramebuffer(36160,ne)&&ye.drawBuffers&&W&&ae.drawBuffers(b,ne),ae.viewport(C),ae.scissor(R),ae.setScissorTest(y),Le){const ke=ue.get(b.texture);A.framebufferTexture2D(36160,36064,34069+H,ke.__webglTexture,j)}else if(Ie){const ke=ue.get(b.texture),Je=H||0;A.framebufferTextureLayer(36160,36064,ke.__webglTexture,j||0,Je)}S=-1},this.readRenderTargetPixels=function(b,H,j,W,ne,Le,Ie){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){ae.bindFramebuffer(36160,ze);try{const ke=b.texture,Je=ke.format,Ve=ke.type;if(Je!==pi&&Y.convert(Je)!==A.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Ve===Ia&&(Z.has("EXT_color_buffer_half_float")||ye.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Ve!==rs&&Y.convert(Ve)!==A.getParameter(35738)&&!(Ve===Vr&&(ye.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-W&&j>=0&&j<=b.height-ne&&A.readPixels(H,j,W,ne,Y.convert(Je),Y.convert(Ve),Le)}finally{const ke=x!==null?ue.get(x).__webglFramebuffer:null;ae.bindFramebuffer(36160,ke)}}},this.copyFramebufferToTexture=function(b,H,j=0){const W=Math.pow(2,-j),ne=Math.floor(H.image.width*W),Le=Math.floor(H.image.height*W);ve.setTexture2D(H,0),A.copyTexSubImage2D(3553,j,0,0,b.x,b.y,ne,Le),ae.unbindTexture()},this.copyTextureToTexture=function(b,H,j,W=0){const ne=H.image.width,Le=H.image.height,Ie=Y.convert(j.format),ze=Y.convert(j.type);ve.setTexture2D(j,0),A.pixelStorei(37440,j.flipY),A.pixelStorei(37441,j.premultiplyAlpha),A.pixelStorei(3317,j.unpackAlignment),H.isDataTexture?A.texSubImage2D(3553,W,b.x,b.y,ne,Le,Ie,ze,H.image.data):H.isCompressedTexture?A.compressedTexSubImage2D(3553,W,b.x,b.y,H.mipmaps[0].width,H.mipmaps[0].height,Ie,H.mipmaps[0].data):A.texSubImage2D(3553,W,b.x,b.y,Ie,ze,H.image),W===0&&j.generateMipmaps&&A.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(b,H,j,W,ne=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=b.max.x-b.min.x+1,Ie=b.max.y-b.min.y+1,ze=b.max.z-b.min.z+1,ke=Y.convert(W.format),Je=Y.convert(W.type);let Ve;if(W.isData3DTexture)ve.setTexture3D(W,0),Ve=32879;else if(W.isDataArrayTexture)ve.setTexture2DArray(W,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(37440,W.flipY),A.pixelStorei(37441,W.premultiplyAlpha),A.pixelStorei(3317,W.unpackAlignment);const Ye=A.getParameter(3314),vt=A.getParameter(32878),Cr=A.getParameter(3316),ds=A.getParameter(3315),hs=A.getParameter(32877),oi=j.isCompressedTexture?j.mipmaps[0]:j.image;A.pixelStorei(3314,oi.width),A.pixelStorei(32878,oi.height),A.pixelStorei(3316,b.min.x),A.pixelStorei(3315,b.min.y),A.pixelStorei(32877,b.min.z),j.isDataTexture||j.isData3DTexture?A.texSubImage3D(Ve,ne,H.x,H.y,H.z,Le,Ie,ze,ke,Je,oi.data):j.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(Ve,ne,H.x,H.y,H.z,Le,Ie,ze,ke,oi.data)):A.texSubImage3D(Ve,ne,H.x,H.y,H.z,Le,Ie,ze,ke,Je,oi),A.pixelStorei(3314,Ye),A.pixelStorei(32878,vt),A.pixelStorei(3316,Cr),A.pixelStorei(3315,ds),A.pixelStorei(32877,hs),ne===0&&W.generateMipmaps&&A.generateMipmap(Ve),ae.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ve.setTextureCube(b,0):b.isData3DTexture?ve.setTexture3D(b,0):b.isDataArrayTexture?ve.setTexture2DArray(b,0):ve.setTexture2D(b,0),ae.unbindTexture()},this.resetState=function(){g=0,v=0,x=null,ae.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class O4 extends Du{}O4.prototype.isWebGL1Renderer=!0;class Lp extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class k4{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Jd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new D;class rr{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}setX(e,n){return this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new ii(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _x extends Ao{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const E0=new D,b0=new D,C0=new ht,Wf=new Ep,Pl=new To;class z4 extends Zt{constructor(e=new Gn,n=new _x){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)E0.fromBufferAttribute(n,r-1),b0.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=E0.distanceTo(b0);e.setAttribute("lineDistance",new Ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(r),Pl.radius+=s,e.ray.intersectsSphere(Pl)===!1)return;C0.copy(r).invert(),Wf.copy(e.ray).applyMatrix4(C0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,f=new D,d=new D,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const g=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let x=g,S=v-1;x<S;x+=m){const w=_.getX(x),C=_.getX(x+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,C),Wf.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||n.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=g,S=v-1;x<S;x+=m){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Wf.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||n.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const T0=new D,A0=new D;class F4 extends z4{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)T0.fromBufferAttribute(n,r),A0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+T0.distanceTo(A0);e.setAttribute("lineDistance",new Ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xs extends Gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new D,d=new D,m=[],_=[],h=[],p=[];for(let g=0;g<=i;g++){const v=[],x=g/i;let S=0;g==0&&o==0?S=.5/n:g==i&&l==Math.PI&&(S=-.5/n);for(let w=0;w<=n;w++){const C=w/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),h.push(d.x,d.y,d.z),p.push(C+S,1-x),v.push(c++)}u.push(v)}for(let g=0;g<i;g++)for(let v=0;v<n;v++){const x=u[g][v+1],S=u[g][v],w=u[g+1][v],C=u[g+1][v+1];(g!==0||o>0)&&m.push(x,S,C),(g!==i-1||l<Math.PI)&&m.push(S,w,C)}this.setIndex(m),this.setAttribute("position",new Ut(_,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(p,2))}static fromJSON(e){return new Xs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class N4 extends Gn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new D,s=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],d=f.start,m=f.count;for(let _=d,h=d+m;_<h;_+=3)for(let p=0;p<3;p++){const g=a.getX(_+p),v=a.getX(_+(p+1)%3);r.fromBufferAttribute(o,g),s.fromBufferAttribute(o,v),P0(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,f),P0(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ut(n,3))}}}function P0(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class xx extends Ao{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nx,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rp extends Zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class yx extends Rp{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DefaultUp),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const L0=new ht,R0=new D,D0=new D;class B4{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tp,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;R0.setFromMatrixPosition(e.matrixWorld),n.position.copy(R0),D0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(D0),n.updateMatrixWorld(),L0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(L0),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(n.projectionMatrix),i.multiply(n.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class U4 extends B4{constructor(){super(new Wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sx extends Rp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DefaultUp),this.updateMatrix(),this.target=new Zt,this.shadow=new U4}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class G4 extends Rp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class V4 extends Gn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class nh extends k4{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class H4{constructor(e,n,i=0,r=1/0){this.ray=new Ep(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new bp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return ih(e,this,i,n),i.sort(I0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ih(e[r],this,i,n);return i.sort(I0),i}}function I0(t,e){return t.distance-e.distance}function ih(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)ih(r[s],e,n,!0)}}const O0=new D,Ll=new D;class W4{constructor(e=new D,n=new D){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){O0.subVectors(e,this.start),Ll.subVectors(this.end,this.start);const i=Ll.dot(Ll);let s=Ll.dot(O0)/i;return n&&(s=nn(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class $4 extends F4{constructor(e=10,n=10,i=4473924,r=8947848){i=new He(i),r=new He(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,m=0,_=-a;d<=n;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const h=d===s?i:r;h.toArray(c,m),m+=3,h.toArray(c,m),m+=3,h.toArray(c,m),m+=3,h.toArray(c,m),m+=3}const u=new Gn;u.setAttribute("position",new Ut(l,3)),u.setAttribute("color",new Ut(c,3));const f=new _x({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sp);class j4{constructor(){E(this,"_scene");E(this,"_pcamera");E(this,"_render");E(this,"_viewWidth");E(this,"_viewHeight");E(this,"_box");this._viewWidth=1620,this._viewHeight=969,this.createScene(),this.createPCamera(),this.createLight(),this.addBox(),this.createRender()}get scene(){return this._scene}get camera(){return this._pcamera}get render(){return this._render}createScene(){this._scene=new Lp}addBox(){let e=new vi(5,5,5),n=new xx({color:16711680,side:xr});this._box=new wn(e,n),this._scene.add(this._box)}createPCamera(){this._pcamera=new Nt(60,this._viewWidth/this._viewHeight,.01,1e3),this._pcamera.position.set(10,10,10),this._pcamera.lookAt(new D(0,0,0))}createLight(){const e=new yx(16777215,209715,.6);e.position.set(0,200,0),this._scene.add(e);let n=new Sx(16777215,.6);n.position.set(0,100,100),this._scene.add(n)}createRender(){this._render=new Du({precision:"highp",antialias:!0,alpha:!0}),this._render.setSize(this._viewWidth,this._viewHeight),this._render.outputEncoding=ot}update(){this._box&&(this._box.rotation.x+=.01,this._box.rotation.y+=.01,this._box.rotation.z+=.01)}}const k0=new br,Rl=new D;class wx extends V4{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ut(e,3)),this.setAttribute("uv",new Ut(n,2))}applyMatrix4(e){const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new nh(n,6,1);return this.setAttribute("instanceStart",new rr(i,3,0)),this.setAttribute("instanceEnd",new rr(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new nh(n,6,1);return this.setAttribute("instanceColorStart",new rr(i,3,0)),this.setAttribute("instanceColorEnd",new rr(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new N4(e.geometry)),this}fromLineSegments(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),k0.setFromBufferAttribute(n),this.boundingBox.union(k0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new To),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rl.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rl)),Rl.fromBufferAttribute(n,s),r=Math.max(r,i.distanceToSquared(Rl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}fe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Re(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};fn.line={uniforms:Cp.merge([fe.common,fe.fog,fe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Dp extends yr{constructor(e){super({type:"LineMaterial",uniforms:Cp.clone(fn.line.uniforms),vertexShader:fn.line.vertexShader,fragmentShader:fn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(n){n===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(n){Boolean(n)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),n===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(n){this.uniforms.dashOffset.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(n){Boolean(n)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),n===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const z0=new D,F0=new D,kt=new ft,zt=new ft,li=new ft,$f=new D,jf=new ht,jt=new W4,N0=new D,Dl=new br,Il=new To,ci=new ft;let hi,rh,Mx,Zr;function B0(t,e,n){return ci.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),ci.multiplyScalar(1/ci.w),ci.x=Zr/n.width,ci.y=Zr/n.height,ci.applyMatrix4(t.projectionMatrixInverse),ci.multiplyScalar(1/ci.w),Math.abs(Math.max(ci.x,ci.y))}function X4(t,e){for(let n=0,i=rh.count;n<i;n++){jt.start.fromBufferAttribute(rh,n),jt.end.fromBufferAttribute(Mx,n);const r=new D,s=new D;hi.distanceSqToSegment(jt.start,jt.end,s,r),s.distanceTo(r)<Zr*.5&&e.push({point:s,pointOnLine:r,distance:hi.origin.distanceTo(s),object:t,face:null,faceIndex:n,uv:null,uv2:null})}}function q4(t,e,n){const i=e.projectionMatrix,s=t.material.resolution,o=t.matrixWorld,a=t.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=-e.near;hi.at(1,li),li.w=1,li.applyMatrix4(e.matrixWorldInverse),li.applyMatrix4(i),li.multiplyScalar(1/li.w),li.x*=s.x/2,li.y*=s.y/2,li.z=0,$f.copy(li),jf.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=l.count;f<d;f++){if(kt.fromBufferAttribute(l,f),zt.fromBufferAttribute(c,f),kt.w=1,zt.w=1,kt.applyMatrix4(jf),zt.applyMatrix4(jf),kt.z>u&&zt.z>u)continue;if(kt.z>u){const v=kt.z-zt.z,x=(kt.z-u)/v;kt.lerp(zt,x)}else if(zt.z>u){const v=zt.z-kt.z,x=(zt.z-u)/v;zt.lerp(kt,x)}kt.applyMatrix4(i),zt.applyMatrix4(i),kt.multiplyScalar(1/kt.w),zt.multiplyScalar(1/zt.w),kt.x*=s.x/2,kt.y*=s.y/2,zt.x*=s.x/2,zt.y*=s.y/2,jt.start.copy(kt),jt.start.z=0,jt.end.copy(zt),jt.end.z=0;const _=jt.closestPointToPointParameter($f,!0);jt.at(_,N0);const h=N3.lerp(kt.z,zt.z,_),p=h>=-1&&h<=1,g=$f.distanceTo(N0)<Zr*.5;if(p&&g){jt.start.fromBufferAttribute(l,f),jt.end.fromBufferAttribute(c,f),jt.start.applyMatrix4(o),jt.end.applyMatrix4(o);const v=new D,x=new D;hi.distanceSqToSegment(jt.start,jt.end,x,v),n.push({point:x,pointOnLine:v,distance:hi.origin.distanceTo(x),object:t,face:null,faceIndex:f,uv:null,uv2:null})}}}class Y4 extends wn{constructor(e=new wx,n=new Dp({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*n.count);for(let o=0,a=0,l=n.count;o<l;o++,a+=2)z0.fromBufferAttribute(n,o),F0.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+z0.distanceTo(F0);const s=new nh(r,2,1);return e.setAttribute("instanceDistanceStart",new rr(s,1,0)),e.setAttribute("instanceDistanceEnd",new rr(s,1,1)),this}raycast(e,n){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;hi=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Zr=l.linewidth+s,rh=a.attributes.instanceStart,Mx=a.attributes.instanceEnd,a.boundingSphere===null&&a.computeBoundingSphere(),Il.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=Zr*.5;else{const f=Math.max(r.near,Il.distanceToPoint(hi.origin));c=B0(r,f,l.resolution)}if(Il.radius+=c,hi.intersectsSphere(Il)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Dl.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=Zr*.5;else{const f=Math.max(r.near,Dl.distanceToPoint(hi.origin));u=B0(r,f,l.resolution)}Dl.expandByScalar(u),hi.intersectsBox(Dl)!==!1&&(i?X4(this,n):q4(this,r,n))}}class Ex extends wx{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const n=e.length-3,i=new Float32Array(2*n);for(let r=0;r<n;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){const n=e.length-3,i=new Float32Array(2*n);for(let r=0;r<n;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}fromLine(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}}class Ol extends Y4{constructor(e=new Ex,n=new Dp({color:Math.random()*16777215})){super(e,n),this.isLine2=!0,this.type="Line2"}}class Z4{constructor(){E(this,"_scene");E(this,"_camera");E(this,"_glrender");E(this,"_viewHeight");E(this,"_viewWidth");E(this,"_pointer");E(this,"_raycaster");E(this,"INTERSECTED");E(this,"_faceIndex");this._viewHeight=100,this._viewWidth=100,this._faceIndex=-1,this._raycaster=new H4,this._scene=new Lp;const e=10,n=this._viewWidth/this._viewHeight;this._camera=new Wr(e*n/-2,e*n/2,e/2,e/-2,.1,1e3);let i=new G4(0);this._scene.add(i),this.loadIdcImage(),this._glrender=new Du({precision:"highp",antialias:!0,alpha:!0}),this._glrender.setSize(this._viewWidth,this._viewHeight),this._glrender.setPixelRatio(window.devicePixelRatio),this._glrender.outputEncoding=ot}get render(){return this._glrender}get camera(){return this._camera}get scene(){return this._scene}loadIdcImage(){const e=ui.IDC_PLANE_COLOR,n=5;let i=new vi(n,n,n);const r=new wn(i,new Ic({color:e}));r.position.set(0,0,0),this._scene.add(r);let s=n/2+.1,o=[s,s,s,s,-s,s,-s,s,s,-s,-s,s,s,s,-s,s,-s,-s,-s,s,-s,-s,-s,-s],a=8;for(let f=0;f<a;f++){const d=new Xs(.5),m=new Ic({color:ui.IDC_LINE_COLOR,format:tx}),_=new wn(d,m);_.position.set(o[f*3],o[f*3+1],o[f*3+2]);let h=f+6;_.name=h.toString(),this._scene.add(_)}let l=[{start:[-s,s,s],end:[s,s,s]},{start:[s,s,s],end:[s,s,-s]},{start:[s,s,-s],end:[-s,s,-s]},{start:[-s,s,-s],end:[-s,s,s]},{start:[-s,s,s],end:[-s,-s,s]},{start:[s,s,s],end:[s,-s,s]},{start:[s,s,-s],end:[s,-s,-s]},{start:[-s,s,-s],end:[-s,-s,-s]},{start:[-s,-s,s],end:[s,-s,s]},{start:[s,-s,s],end:[s,-s,-s]},{start:[s,-s,-s],end:[-s,-s,-s]},{start:[-s,-s,-s],end:[-s,-s,s]}];for(let f=0;f<l.length;f++){let d=l[f],m=[d.start[0],d.start[1],d.start[2],d.end[0],d.end[1],d.end[2]],_=new Ex;_.setPositions(m);var c=new Dp({color:ui.IDC_LINE_COLOR,linewidth:3});c.resolution.set(this._viewWidth,this._viewHeight);var u=new Ol(_,c);u.computeLineDistances(),u.name=(f+14).toString(),this._scene.add(u)}}addEvent(){Fe.idc.addEventListener("pointermove",e=>this.onPointerMove(e)),Fe.idc.addEventListener("pointerout",e=>this.onPointerOut(e)),Fe.idc.addEventListener("pointerdown",e=>this.onPointerDown(e))}removeEvent(){}dispose(){}onPointerMove(e){this._pointer||(this._pointer=new Re),this._pointer.x=e.offsetX/this._viewWidth*2-1,this._pointer.y=-(e.offsetY/this._viewHeight)*2+1}onPointerOut(e){this.clearColor(),this._pointer=null}onPointerDown(e){this._pointer||(this._pointer=new Re),this._pointer.x=e.offsetX/this._viewWidth*2-1,this._pointer.y=-(e.offsetY/this._viewHeight)*2+1,this._raycaster.setFromCamera(this._pointer,this._camera);const n=this._raycaster.intersectObjects(this._scene.children,!0);if(n.length>0){let i=-1;n[0].object.geometry instanceof Xs?i=Number(n[0].object.name):n[0].object.geometry instanceof vi?i=n[0].face.materialIndex:n[0].object instanceof Ol&&(i=Number(n[0].object.name)),i!=-1&&Fe.ED.event(Pc.IDC_POINTER_DOWN,i)}}changeFace(){if(this._pointer&&this._raycaster&&this._camera){this.clearColor(),this._raycaster.setFromCamera(this._pointer,this._camera);const e=this._raycaster.intersectObjects(this._scene.children,!0);e.length>0?e[0].object instanceof Ol?(this.INTERSECTED=e[0].object,this.INTERSECTED.material.color.set(ui.IDC_SELECT_COLOR)):e[0].object.geometry instanceof Xs?(this._faceIndex=-1,this.INTERSECTED=e[0].object,this.INTERSECTED.material.color.set(ui.IDC_SELECT_COLOR)):e[0].face.materialIndex!=this._faceIndex&&(this._faceIndex=e[0].face.materialIndex,this.INTERSECTED=e[0].object,this.INTERSECTED.material[this._faceIndex]&&this.INTERSECTED.material[this._faceIndex].color.set(ui.IDC_SELECT_COLOR)):this.INTERSECTED=null}}clearColor(){this.INTERSECTED&&(this.INTERSECTED.geometry instanceof vi&&this._faceIndex!=-1?(this.INTERSECTED.material[this._faceIndex]&&this.INTERSECTED.material[this._faceIndex].color.set(ui.IDC_PLANE_COLOR),this._faceIndex=-1):this.INTERSECTED.geometry instanceof Xs?this.INTERSECTED.material.color.set(ui.IDC_LINE_COLOR):this.INTERSECTED instanceof Ol&&this.INTERSECTED.material.color.set(ui.IDC_LINE_COLOR))}}const Ls=new D,U0=new ht,G0=new ht,V0=new D,H0=new D;class Q4{constructor(e={}){const n=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(m,_){m.autoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.updateMatrixWorld(),U0.copy(_.matrixWorldInverse),G0.multiplyMatrices(_.projectionMatrix,U0),c(m,m,_),d(m)},this.setSize=function(m,_){i=m,r=_,s=i/2,o=r/2,l.style.width=m+"px",l.style.height=_+"px"};function c(m,_,h){if(m.isCSS2DObject){Ls.setFromMatrixPosition(m.matrixWorld),Ls.applyMatrix4(G0);const p=m.visible===!0&&Ls.z>=-1&&Ls.z<=1&&m.layers.test(h.layers)===!0;if(m.element.style.display=p===!0?"":"none",p===!0){m.onBeforeRender(n,_,h);const v=m.element;v.style.transform="translate(-50%,-50%) translate("+(Ls.x*s+s)+"px,"+(-Ls.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),m.onAfterRender(n,_,h)}const g={distanceToCameraSquared:u(h,m)};a.objects.set(m,g)}for(let p=0,g=m.children.length;p<g;p++)c(m.children[p],_,h)}function u(m,_){return V0.setFromMatrixPosition(m.matrixWorld),H0.setFromMatrixPosition(_.matrixWorld),V0.distanceToSquared(H0)}function f(m){const _=[];return m.traverse(function(h){h.isCSS2DObject&&_.push(h)}),_}function d(m){const _=f(m).sort(function(p,g){if(p.renderOrder!==g.renderOrder)return g.renderOrder-p.renderOrder;const v=a.objects.get(p).distanceToCameraSquared,x=a.objects.get(g).distanceToCameraSquared;return v-x}),h=_.length;for(let p=0,g=_.length;p<g;p++)_[p].element.style.zIndex=h-p}}}class J4{constructor(e,n,i){E(this,"camera");E(this,"domElement");E(this,"enabled");E(this,"screen");E(this,"rotateSpeed");E(this,"zoomSpeed");E(this,"panSpeed");E(this,"noRotate");E(this,"noZoom");E(this,"noPan");E(this,"staticMoving");E(this,"dynamicDampingFactor");E(this,"minDistance");E(this,"maxDistance");E(this,"keys");E(this,"mouseButtons");E(this,"target");E(this,"target0");E(this,"position0");E(this,"up0");E(this,"zoom0");E(this,"lastZoom");E(this,"EPS");E(this,"lastPosition");E(this,"_eye");E(this,"_movePrev");E(this,"_moveCurr");E(this,"_lastAxis");E(this,"_zoomStart");E(this,"_zoomEnd");E(this,"_panStart");E(this,"_panEnd");E(this,"_pointers");E(this,"_pointerPositions");E(this,"_state");E(this,"_touchZoomDistanceStart");E(this,"_touchZoomDistanceEnd");E(this,"_lastAngle");E(this,"context_menu");E(this,"pointer_down");E(this,"pointer_move");E(this,"pointer_up");E(this,"pointer_cancel");E(this,"mouse_wheel");E(this,"_rendDom");E(this,"_meshCenter");E(this,"_isRY",!0);n===void 0&&console.warn("TrackCameraCtrl: domElement is undefined."),n===document&&console.error('TrackCameraCtrl: Please use "renderer.domElement" instead.'),this._rendDom=i,this.camera=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=3,this.zoomSpeed=3,this.panSpeed=2.5,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!0,this.dynamicDampingFactor=20,this.minDistance=0,this.maxDistance=1e3,this.mouseButtons={LEFT:df.ROTATE,MIDDLE:df.DOLLY,RIGHT:df.PAN},this.target=new D(0,0,0),this.EPS=1e-6,this.lastPosition=new D,this.lastZoom=1,this._lastAngle=0,this._state=_t.NONE,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._eye=new D,this._movePrev=new Re,this._moveCurr=new Re,this._lastAxis=new D,this._zoomStart=new Re,this._zoomEnd=new Re,this._panStart=new Re,this._panEnd=new Re,this._pointers=[],this._pointerPositions={},this.target0=this.target.clone(),this.position0=this.camera.position.clone(),this.up0=this.camera.up.clone(),this.zoom0=this.camera.zoom,this.addEve(),this.handleResize(),this.update()}clearData(){this._rendDom=null,this.camera=null,this.domElement=null,this.screen=null,this.mouseButtons=null,this.target=null,this.lastPosition=null,this._eye=null,this._movePrev=null,this._moveCurr=null,this._lastAxis=null,this._zoomStart=null,this._zoomEnd=null,this._panStart=null,this._panEnd=null,this._pointers=null,this._pointerPositions=null,this.target0=null,this.position0=null,this.up0=null,this.context_menu=null,this.pointer_down=null,this.pointer_move=null,this.pointer_up=null,this.pointer_cancel=null,this.mouse_wheel=null}dispose(){this.removeEve(),this.clearData()}addEve(){console.log("track add eve"),this.context_menu=e=>{this.contextmenu(e)},this.pointer_down=e=>{this.onPointerDown(e)},this.pointer_move=e=>{this.onPointerMove(e)},this.pointer_up=e=>{this.onPointerUp(e)},this.pointer_cancel=e=>{this.onPointerCancel(e)},this.mouse_wheel=e=>{this.onMouseWheel(e)},this.domElement.addEventListener("contextmenu",this.context_menu),this.domElement.addEventListener("pointerdown",this.pointer_down),this.domElement.addEventListener("pointercancel",this.pointer_cancel),this.domElement.addEventListener("wheel",this.mouse_wheel,{passive:!1})}removeEve(){this.domElement.removeEventListener("contextmenu",this.context_menu),this.domElement.removeEventListener("pointerdown",this.pointer_down),this.domElement.removeEventListener("pointercancel",this.pointer_cancel),this.domElement.removeEventListener("wheel",this.mouse_wheel),this.domElement.removeEventListener("pointermove",this.pointer_move),this.domElement.removeEventListener("pointerup",this.pointer_up)}handleResize(){this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight}getMouseOnScreen(e,n){let i=new Re,r=(e-this.screen.left)/this.screen.width,s=(n-this.screen.top)/this.screen.height;return i.set(r,s),i}getMouseOnCircle(e,n){let i=new Re,r=(e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),s=(this.screen.height+2*(this.screen.top-n))/this.screen.width;return i.set(r,s),i}rotateCamera(){let e=new D,n=new Co,i=new D,r=new D,s=new D,o=new D;o.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let a=o.length();if(a){let c=this._moveCurr.clone().sub(this._movePrev.clone()).angle();if(this._isRY=c>Math.PI*.25&&c<Math.PI*.75||c>Math.PI*1.25&&c<Math.PI*1.75,this._eye.copy(this.camera.position).sub(this.target),i.copy(this._eye).normalize(),r.copy(this.camera.up).normalize(),s.crossVectors(r,i).normalize(),this._isRY?(s.setLength(0),r.setLength(this._moveCurr.y-this._movePrev.y)):(s.setLength(this._moveCurr.x-this._movePrev.x),r.setLength(0)),o.copy(r.add(s)),a*=this.rotateSpeed,this._isRY)e.crossVectors(o,this._eye).normalize();else{let u=this.camera.up.clone(),f=new D;u.y>1||u.y<-1?f.set(0,-1,0):f.set(0,1,0),e.copy(f),a=this._moveCurr.x-this._movePrev.x>0?-a:a}n.setFromAxisAngle(e,a),this._eye.applyQuaternion(n),this.camera.up.applyQuaternion(n),this._meshCenter&&(this.target.sub(this._meshCenter).applyQuaternion(n),this.target.add(this._meshCenter)),this._lastAxis.copy(e),this._lastAngle=a}else!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.camera.position).sub(this.target),n.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(n),this.camera.up.applyQuaternion(n),this._meshCenter&&(this.target.sub(this._meshCenter).applyQuaternion(n),this.target.add(this._meshCenter)));this._movePrev.copy(this._moveCurr)}zoomCamera(){let e;this._state===_t.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.camera instanceof Nt?this._eye.multiplyScalar(e):this.camera instanceof Wr?(this.camera.zoom/=e,this.camera.updateProjectionMatrix()):console.warn("TrackCameraCtrl: undefine camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.camera instanceof Nt?this._eye.multiplyScalar(e):this.camera instanceof Wr?(this.camera.zoom/=e,this.camera.updateProjectionMatrix()):console.warn("TrackCameraCtrl: undefine camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor),this._eye.length()/165}adjustCameraUp(e){e.y>0?this.camera.up.set(0,1,0):e.y<0?this.camera.up.set(0,-1,0):e.x>0?this.camera.up.set(1,0,0):e.x<0?this.camera.up.set(-1,0,0):e.z>0?this.camera.up.set(0,0,1):e.z<0&&this.camera.up.set(0,0,-1)}panCameraByKey(e=-1){let n=new D,i=new D,r=new D,s=this._eye.length()*this.panSpeed*.01;if(r.x=e===0?s:e===1?-s:0,r.y=e===2?s:e===3?-s:0,r.z=e===4?s:e===5?-s:0,r.x!==0&&n.copy(this._eye).cross(this.camera.up).setLength(r.x),r.y!==0){let o=new D(0,1,0);n.add(i.copy(o).setLength(r.y))}if(r.z!==0){let o=new D(-this._eye.x,0,-this._eye.z);n.add(i.copy(o).setLength(r.z))}this.camera.position.add(n),this.target.add(n),this.update()}panCamera(){let e=new Re,n=new D,i=new D;if(e.copy(this._panEnd).sub(this._panStart),e.lengthSq()){if(this.camera instanceof Wr){const l=(this.camera.right-this.camera.left)/this.camera.zoom/this._rendDom.clientWidth,c=(this.camera.top-this.camera.bottom)/this.camera.zoom/this._rendDom.clientHeight;e.x*=l*.04,e.y*=c*.04}e.multiplyScalar(this._eye.length()*this.panSpeed);let r=new D(0,1,0),s=this.camera.position.y>=0?-this._eye.x:this._eye.x,o=this.camera.position.y>=0?-this._eye.z:this._eye.z,a=new D(s,0,o);i.copy(this._eye).cross(r).setLength(e.x),i.add(n.copy(a).setLength(e.y)),this.camera.position.add(i),this.target.add(i),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(e.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.camera.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.camera.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}update(){this._eye.subVectors(this.camera.position,this.target),this.noRotate||this.rotateCamera(),this.noZoom||this.zoomCamera(),this.noPan||this.panCamera(),this.camera.position.addVectors(this.target,this._eye),this.camera instanceof Nt?(this.checkDistances(),this.camera.lookAt(this.target),this.lastPosition.distanceToSquared(this.camera.position)>this.EPS&&this.lastPosition.copy(this.camera.position)):this.camera instanceof Wr?(this.camera.lookAt(this.target),(this.lastPosition.distanceToSquared(this.camera.position)>this.EPS||this.lastZoom!==this.camera.zoom)&&(this.lastPosition.copy(this.camera.position),this.lastZoom=this.camera.zoom)):console.warn("TrackCameraCtrl: undefine camera type")}reset(){this._state=_t.NONE,this.target.copy(this.target0),this.camera.position.copy(this.position0),this.camera.up.copy(this.up0),this.camera.zoom=this.zoom0,this.camera.updateProjectionMatrix(),this._eye.subVectors(this.camera.position,this.target),this.camera.lookAt(this.target),this.lastPosition.copy(this.camera.position),this.lastZoom=this.camera.zoom}onPointerDown(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this.pointer_move),this.domElement.addEventListener("pointerup",this.pointer_up)),this.addPointer(e),e.pointerType==="touch"?this.onTouchStart(e):this.onMouseDown(e))}onPointerMove(e){this.enabled!==!1&&(e.pointerType==="touch"?this.onTouchMove(e):this.onMouseMove(e))}onPointerUp(e){e.pointerType==="touch"?this.onTouchEnd(e):this.onMouseUp(),this.removePointer(e),this._pointers.length===0&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this.pointer_move),this.domElement.removeEventListener("pointerup",this.pointer_up))}onPointerCancel(e){this.removePointer(e)}keyup(){this.enabled!==!1&&(this._state=_t.NONE)}onMouseDown(e){switch(e.button){case this.mouseButtons.LEFT:this._state=_t.ROTATE;break;case this.mouseButtons.MIDDLE:this._state=_t.PAN;break;case this.mouseButtons.RIGHT:this._state=_t.PAN;break;default:this._state=_t.NONE;break}this._state===_t.ROTATE&&!this.noRotate?(this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr)):this._state===_t.ZOOM&&!this.noZoom?(this._zoomStart.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._zoomEnd.copy(this._zoomStart)):this._state===_t.PAN&&!this.noPan&&(this._panStart.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._panEnd.copy(this._panStart))}onMouseMove(e){this._state===_t.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._meshCenter?this._meshCenter:this.target):this._state===_t.ZOOM&&!this.noZoom?this._zoomEnd.copy(this.getMouseOnScreen(e.pageX,e.pageY)):this._state===_t.PAN&&!this.noPan&&this._panEnd.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._state!=_t.NONE&&this.update()}zoomCameraByTarget(e){var n=e.clientX/this.screen.width*2-1,i=-(e.clientY/this.screen.height)*2+1;let r=new D(n,i,.5);r.unproject(this.camera);let s=3;r.sub(this.camera.position).setLength(s),e.deltaY<0?(this.camera.position.add(r),this.target.add(r)):(this.camera.position.sub(r),this.target.sub(r))}onMouseUp(){this._state=_t.NONE}onMouseWheel(e){if(this.enabled!==!1&&this.noZoom!==!0){switch(e.preventDefault(),e.deltaMode){case 2:this._zoomStart.y-=e.deltaY*.025;break;case 1:this._zoomStart.y-=e.deltaY*.01;break;default:this._zoomStart.y-=e.deltaY*25e-5;break}this.zoomCameraByTarget(e),this.update()}}resetMouse(){}onTouchStart(e){switch(this.trackPointer(e),this._pointers.length){case 1:this._state=_t.TOUCH_ROTATE,this._moveCurr.copy(this.getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this._state=_t.TOUCH_ZOOM_PAN;const n=this._pointers[0].pageX-this._pointers[1].pageX,i=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(n*n+i*i);const r=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this.getMouseOnScreen(r,s)),this._panEnd.copy(this._panStart);break}}onTouchMove(e){switch(this.trackPointer(e),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY));break;default:const n=this.getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y;this._touchZoomDistanceEnd=Math.sqrt(i*i+r*r);const s=(e.pageX+n.x)/2,o=(e.pageY+n.y)/2;this._panEnd.copy(this.getMouseOnScreen(s,o));break}}onTouchEnd(e){switch(this._pointers.length){case 0:this._state=_t.NONE;break;case 1:this._state=_t.TOUCH_ROTATE,this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this._state=_t.TOUCH_ZOOM_PAN,this._moveCurr.copy(this.getMouseOnCircle(e.pageX-this._movePrev.x,e.pageY-this._movePrev.y)),this._movePrev.copy(this._moveCurr);break}}contextmenu(e){this.enabled!==!1&&e.preventDefault()}addPointer(e){this._pointers.push(e)}removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n].pointerId==e.pointerId){this._pointers.splice(n,1);return}}trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Re,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[n.pointerId]}}class K4{constructor(){E(this,"_scene");E(this,"_pcamera");E(this,"_render");E(this,"_css2dReder");E(this,"_trackCtrl");E(this,"_controls");E(this,"_camera");E(this,"_grid");E(this,"_box");this.createScene(),this.createPCamera(),this.createLight(),this.addGrid(),this.addBox(),this.createRender(),this.createCSS2DRender(),this.createControls()}get camera(){return this._camera}get css2dRender(){return this._css2dReder}get controls(){return this._controls}get scene(){return this._scene}get render(){return this._render}createScene(){this._scene=new Lp,this._scene.background=new He(3355443)}addBox(){let e=new vi(1,1,1),n=new xx({color:16711680,side:xr});this._box=new wn(e,n),this._scene.add(this._box)}createPCamera(){this._pcamera=new Nt(60,window.innerWidth/window.innerHeight,.01,1e3),this._pcamera.position.set(5,5,5),this._pcamera.lookAt(new D(0,0,0)),this._camera=this._pcamera}createControls(){this._trackCtrl=new J4(this._camera,this._css2dReder.domElement,this._render.domElement),this._controls=this._trackCtrl}createLight(){const e=new yx(16777215,209715,.6);e.position.set(0,200,0),this._scene.add(e);let n=new Sx(16777215,.6);n.position.set(0,100,100),this._scene.add(n)}addGrid(){this._grid=new $4(50,50,2236962,1118481),this._grid.material.opacity=.6,this._grid.material.transparent=!0,this._grid.position.set(0,0,0),this._scene.add(this._grid)}createCSS2DRender(){this._css2dReder=new Q4,this._css2dReder.setSize(window.innerWidth,window.innerHeight),this._css2dReder.domElement.style.position="absolute",this._css2dReder.domElement.style.top="0px"}createRender(){this._render=new Du({precision:"highp",antialias:!0,alpha:!0,logarithmicDepthBuffer:!0}),this._render.setSize(window.innerWidth,window.innerHeight),this._render.setPixelRatio(window.devicePixelRatio),this._render.outputEncoding=ot}onResize(){this._trackCtrl&&(this._trackCtrl.screen.width=window.innerWidth,this._trackCtrl.screen.height=window.innerHeight),this._render.setSize(window.innerWidth,window.innerHeight),this._css2dReder.setSize(window.innerWidth,window.innerHeight),this.camera instanceof Nt&&(this._camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}}class eA{constructor(){E(this,"_main");E(this,"_example");E(this,"_idc");E(this,"_center")}get main(){return this._main}get example(){return this._example}get idc(){return this._idc}startUp(){console.log("scene mgr start up"),this._main=new K4,this._example=new j4,this._idc=new Z4,this._center=new D(0,1.5,0),Fe.ED.on(Pc.IDC_POINTER_DOWN,this,this.onIdcPointerDwon)}dispose(){Fe.ED.off(Pc.IDC_POINTER_DOWN,this,this.onIdcPointerDwon)}onResize(){this._main&&this._main.onResize()}mountedMainScene(){Fe.container.appendChild(this._main.render.domElement),Fe.container.appendChild(this._main.css2dRender.domElement)}mountedExampleScene(){Fe.example.appendChild(this._example.render.domElement)}mountedIdcScene(){Fe.idc.appendChild(this._idc.render.domElement),this._idc.addEvent()}update(){this._example&&this._example.update()}onIdcPointerDwon(e,n=10){console.log("\u70B9\u51FB\u4E86\u9762\uFF1A",e),this._main.camera.up.set(0,1,0);let i=new D,r=.001,s=new D(this._center.x,this._center.y,this._center.z);switch(e){case it.RIGHT:i.set(n,0,0);break;case it.LEFT:i.set(-n,0,0);break;case it.TOP:i.set(0,n,r);break;case it.BOTTOM:i.set(0,-n,r);break;case it.FRONT:i.set(0,0,n);break;case it.BACK:i.set(0,0,-n);break;case it.FRONT_RIGHT_TOP:i.set(n/2,n*Math.sqrt(2),n/2);break;case it.FRONT_RIGHT_BOTTOM:i.set(n/2,-n*Math.sqrt(2),n/2);break;case it.FRONT_LEFT_TOP:i.set(-n/2,n*Math.sqrt(2),n/2);break;case it.FRONT_LEFT_BOTTOM:i.set(-n/2,-n*Math.sqrt(2),n/2);break;case it.BACK_RIGHT_TOP:i.set(n/2,n*Math.sqrt(2),-n/2);break;case it.BACK_RIGHT_BOTTOM:i.set(n/2,-n*Math.sqrt(2),-n/2);break;case it.BACK_LEFT_TOP:i.set(-n/2,n*Math.sqrt(2),-n/2);break;case it.BACK_LFET_BORROM:i.set(-n/2,-n*Math.sqrt(2),-n/2);break;case it.EDGE_TOP_FRONE:i.set(0,n/2*Math.sqrt(2),n/2*Math.sqrt(2));break;case it.EDGE_TOP_RIGHT:i.set(n/2*Math.sqrt(2),n/2*Math.sqrt(2),0);break;case it.EDGE_TOP_BACK:i.set(0,n/2*Math.sqrt(2),-n/2*Math.sqrt(2));break;case it.EDGE_TOP_LEFT:i.set(n/2*Math.sqrt(2),n/2*Math.sqrt(2),0);break;case it.EDGE_MF_LEFT:i.set(-n/2*Math.sqrt(2),0,n/2*Math.sqrt(2));break;case it.EDGE_MF_RIGHT:i.set(n/2*Math.sqrt(2),0,n/2*Math.sqrt(2));break;case it.EDGE_MB_RIGHT:i.set(n/2*Math.sqrt(2),0,-n/2*Math.sqrt(2));break;case it.EDGE_MB_LEFT:i.set(-n/2*Math.sqrt(2),0,-n/2*Math.sqrt(2));break;case it.EDGE_BOTTOM_FRONE:i.set(0,-n/2*Math.sqrt(2),n/2*Math.sqrt(2));break;case it.EDGE_BOTTOM_RIGHT:i.set(n/2*Math.sqrt(2),-n/2*Math.sqrt(2),0);break;case it.EDGE_BOTTOM_BACK:i.set(0,-n/2*Math.sqrt(2),-n/2*Math.sqrt(2));break;case it.EDGE_BOTTOM_LEFT:i.set(-n/2*Math.sqrt(2),-n/2*Math.sqrt(2),0);break;default:console.error("\u51FA\u73B0\u4E86\u4F4D\u7F6E\u7684\u89C6\u89D2\u4F4D\u7F6E");break}let o=new D(this._center.x,this._center.y,this._center.z);i.add(o),this.showTween(i,s,500,this.complate)}complate(){console.log("\u6307\u793A\u5668\u65CB\u8F6C\u5B8C\u6BD5")}showTween(e,n,i=1e3,r){CM.animateCamera(this._main.camera,this._main.controls,this._main.camera.position,this._main.controls.target,e,n,i,r)}}class tA{constructor(){E(this,"scene",new eA);E(this,"render",new bM);E(this,"mesh",new wM);E(this,"event",new SM);E(this,"test",new yM)}startUp(){this.mesh.startUp(),this.scene.startUp(),this.render.startUp(),this.event.startUp(),this.test.startUp()}dispose(){this.test&&(this.test.dispose(),this.test=null),this.event&&(this.event.dispose(),this.event=null),this.mesh&&(this.mesh.dispose(),this.mesh=null),this.scene&&(this.scene.dispose(),this.scene=null),this.render&&(this.render.dispose(),this.render=null)}}const ha=class{constructor(){E(this,"_serviceFactory");E(this,"_serviceList");this._serviceFactory=new Map,this._serviceList=new Map}static get ins(){return this._ins||(this._ins=new ha),this._ins}static RegSer(e,n){if(ha.ins._serviceFactory.has(e))throw new Error("\u5DF2\u7ECF\u6CE8\u518C\u8FC7\u6B64\u7C7B\u578B\u7684\u670D\u52A1\u5DE5\u5382\uFF0C\u8BF7\u52FF\u518D\u6B21\u6CE8\u518C");ha.ins._serviceFactory.set(e,n)}getService(e){let n;if(this._serviceList.has(e))n=this._serviceList.get(e);else if(this._serviceFactory.has(e)){let i=this._serviceFactory.get(e);i&&(n=this.initService(i))}return n&&n.inited||console.log("[ServiceManager] \u6709\u4EBA\u62FF\u5230\u4E86\u4E00\u4E2A\u7A7A\u7684\u670D\u52A1\u5BF9\u8C61::",e),n}initService(e){var n=e.createService();return this._serviceList.set(n.type,n),n.serviceInit(),n}removeService(e){if(this._serviceList.has(e)){var n=this._serviceList.get(e);n&&n.dispose(),this._serviceList.delete(e)}}};let pr=ha;E(pr,"_ins");class nA{constructor(){E(this,"_scheme");E(this,"_cad");E(this,"_scene");E(this,"_mesh")}static hasService(e){return pr.ins.getService(e)!=null}tryGetService(e){var n=pr.ins.getService(e);if(!n)throw Error("\u670D\u52A1\u83B7\u53D6\u5931\u8D25:"+e);return n}get cad(){return this._cad==null&&(this._cad=this.tryGetService(hn.CAD_SERVICE)),this._cad}get scheme(){return this._scheme==null&&(this._scheme=this.tryGetService(hn.SCHEME_SERVICE)),this._scheme}get scene(){return this._scene==null&&(this._scene=this.tryGetService(hn.SCENE_SERVICE)),this._scene}get mesh(){return this._mesh==null&&(this._mesh=this.tryGetService(hn.MESH_SERVICE)),this._mesh}}const zr=class{constructor(e=null,n=null,i=null,r=!1){E(this,"caller");E(this,"method");E(this,"args");E(this,"once",!1);E(this,"_id",0);this.setTo(e,n,i,r)}setTo(e,n,i,r=!1){return this._id=zr._gid++,this.caller=e,this.method=n,this.args=i,this.once=r,this}run(){if(this.method==null)return null;var e=this._id,n=this.method.apply(this.caller,this.args);return this._id===e&&this.once&&this.recover(),n}runWith(e){if(this.method==null)return null;var n=this._id;if(e==null)var i=this.method.apply(this.caller,this.args);else!this.args&&!e.unshift?i=this.method.call(this.caller,e):this.args?i=this.method.apply(this.caller,this.args.concat(e)):i=this.method.apply(this.caller,e);return this._id===n&&this.once&&this.recover(),i}clear(){return this.caller=null,this.method=null,this.args=null,this}recover(){this._id>0&&(this._id=0,zr._pool.push(this.clear()))}static create(e,n,i=null,r=!0){return zr._pool.length?zr._pool.pop().setTo(e,n,i,r):new zr(e,n,i,r)}};let Jo=zr;E(Jo,"_pool",[]),E(Jo,"_gid",1);const Xp=class{constructor(){E(this,"_events")}hasListener(e){var n=this._events&&this._events[e];return!!n}event(e,n=null){if(!this._events||!this._events[e])return!1;var i=this._events[e];if(i.run)i.once&&delete this._events[e],n!=null?i.runWith(n):i.run();else{for(var r=0,s=i.length;r<s;r++){var o=i[r];o&&(n!=null?o.runWith(n):o.run()),(!o||o.once)&&(i.splice(r,1),r--,s--)}i.length===0&&this._events&&!this._events[e].run&&delete this._events[e]}return!0}on(e,n,i,r=null){return this._createListener(e,n,i,r,!1)}once(e,n,i,r=null){return this._createListener(e,n,i,r,!0)}_createListener(e,n,i,r,s,o=!0){o&&this.off(e,n,i,s);var a=tc.create(n||this,i,r,s);this._events||(this._events={});var l=this._events;return l[e]?l[e].run?l[e]=[l[e],a]:l[e].push(a):l[e]=a,this}off(e,n,i,r=!1){if(!this._events||!this._events[e])return this;var s=this._events[e];if(s!=null)if(s.run)(!n||s.caller===n)&&(i==null||s.method===i)&&(!r||s.once)&&(delete this._events[e],s.recover());else{for(var o=0,a=0,l=s.length;a<l;a++){var c=s[a];if(!c){o++;continue}c&&(!n||c.caller===n)&&(i==null||c.method===i)&&(!r||c.once)&&(o++,s[a]=null,c.recover())}o===l&&delete this._events[e]}return this}offAll(e=null){var n=this._events;if(!n)return this;if(e)this._recoverHandlers(n[e]),delete n[e];else{for(var i in n)this._recoverHandlers(n[i]);this._events=null}return this}offAllCaller(e){if(e&&this._events)for(var n in this._events)this.off(n,e,null);return this}_recoverHandlers(e){if(!!e)if(e.run)e.recover();else for(var n=e.length-1;n>-1;n--)e[n]&&(e[n].recover(),e[n]=null)}isMouseEvent(e){return Xp.MOUSE_EVENTS[e]||!1}};let ec=Xp;E(ec,"MOUSE_EVENTS",{rightmousedown:!0,rightmouseup:!0,rightclick:!0,mousedown:!0,mouseup:!0,mousemove:!0,mouseover:!0,mouseout:!0,click:!0,doubleclick:!0});const Ys=class extends Jo{constructor(e,n,i,r){super(e,n,i,r)}recover(){this._id>0&&(this._id=0,Ys._pool.push(this.clear()))}static create(e,n,i=null,r=!0){return Ys._pool.length?Ys._pool.pop().setTo(e,n,i,r):new Ys(e,n,i,r)}};let tc=Ys;E(tc,"_pool",[]);const en=class{static init(){en._addEvent("keydown"),en._addEvent("keypress"),en._addEvent("keyup")}static _addEvent(e){window.document.addEventListener(e,function(n){en.preventDefault(n),en._dispatch(n,e)},!1)}static _dispatch(e,n){en._event._stoped=!1,en._event.nativeEvent=e,en._event.keyCode=e.keyCode||e.which||e.charCode,n==="keydown"?en._pressKeys[en._event.keyCode]=!0:n==="keyup"&&(en._pressKeys[en._event.keyCode]=null),Fe.ED.event(n,e)}static hasKeyDown(e){return en._pressKeys[e]}static preventDefault(e){let n=e.ctrlKey;e.keyCode;let i=e.key;n&&(i=="s"||i=="z")&&e.preventDefault()}};let Is=en;E(Is,"_pressKeys",{}),E(Is,"enabled",!0),E(Is,"_event",new ge);class Ip{constructor(e,n,i){E(this,"_type");E(this,"_serviceClass");E(this,"_syncInit");this._type=e,this._serviceClass=n,this._syncInit=i}get type(){return this._type}createService(){return new this._serviceClass}get asyncInitService(){return this._syncInit}}class Op{constructor(e){E(this,"_type");E(this,"_firstInit");E(this,"_inited");E(this,"_disposed");this._firstInit=!1,this._inited=!1,this._type=e,this._disposed=!1}get type(){return this._type}serviceInit(){this._firstInit||(this._firstInit=!0,this.onInit())}notifyServiceInited(e=!0){if(this._disposed)throw Error("\u5DF2\u88AB\u9500\u6BC1");e&&(this._inited=!0)}get inited(){return this._inited}dispose(){this.onDispose(),this._disposed=!0}onInit(){throw new Error("\u9700\u8981\u5B50\u7C7B\u590D\u5199\uFF0C\u5E76\u5728\u5B8C\u6210\u521D\u59CB\u5316\u540E\u901A\u8FC7 notifyServiceInited \u901A\u77E5\u51FA\u6765")}onDispose(){throw new Error("\u9700\u8981\u5B50\u7C7B\u590D\u5199\uFF0C\u7528\u4E8E\u91CA\u653E\u670D\u52A1")}}class iA{dispose(){}}class rA extends Op{constructor(){super(hn.CAD_SERVICE);E(this,"_ctrl");this._ctrl=new iA}onDispose(){this._ctrl.dispose()}onInit(){this.notifyServiceInited()}}class sA extends Ip{constructor(){super(hn.CAD_SERVICE,rA)}}class oA{startUp(){console.log("enter draw mesh")}exit(){console.log("exit draw mesh"),this.dispose()}dispose(){}}class aA extends Op{constructor(){super(hn.MESH_SERVICE);E(this,"_drawMesh");this._drawMesh=new oA}onDispose(){this._drawMesh&&(this._drawMesh.dispose(),this._drawMesh=null)}onInit(){this.notifyServiceInited()}}class lA extends Ip{constructor(){super(hn.MESH_SERVICE,aA)}}class cA extends Op{constructor(){super(hn.CAD_SERVICE)}onDispose(){}onInit(){this.notifyServiceInited()}mountedMainScene(){Fe.MGR.scene.mountedMainScene()}mountedPanel(){}mountedExampleScene(){Fe.MGR.scene.mountedExampleScene()}mountedIdcScene(){Fe.MGR.scene.mountedIdcScene()}}class uA extends Ip{constructor(){super(hn.SCENE_SERVICE,cA)}}class fA{static init(){pr.RegSer(hn.CAD_SERVICE,new sA),pr.RegSer(hn.SCENE_SERVICE,new uA),pr.RegSer(hn.MESH_SERVICE,new lA)}}const pa=class{startUp(){console.log("BIM start up."),fA.init(),Is.init(),pa.MGR.startUp(),window.addEventListener("resize",()=>this.onWindowResize()),this.startRenderLoop()}exit(){console.log("BIM exit.")}startRenderLoop(){pa.MGR.render.render(),requestAnimationFrame(()=>this.startRenderLoop())}onWindowResize(){console.log("windows resize"),pa.MGR.scene.onResize()}};let Fe=pa;E(Fe,"mode"),E(Fe,"container"),E(Fe,"example"),E(Fe,"uicontainer"),E(Fe,"idc"),E(Fe,"MGR",new tA),E(Fe,"SC",new nA),E(Fe,"ED",new ec);function dA(t){function e(N,V,q,le,A){for(var Se=0,Z=0,ye=0,ae=0,Ee,ue,ve=0,je=0,Pe,Xe=Pe=Ee=0,De=0,Ue=0,Ge=0,nt=0,Qt=q.length,P=Qt-1,M,B="",te="",ce="",de="",Te;De<Qt;){if(ue=q.charCodeAt(De),De===P&&Z+ae+ye+Se!==0&&(Z!==0&&(ue=Z===47?10:47),ae=ye=Se=0,Qt++,P++),Z+ae+ye+Se===0){if(De===P&&(0<Ue&&(B=B.replace(d,"")),0<B.trim().length)){switch(ue){case 32:case 9:case 59:case 13:case 10:break;default:B+=q.charAt(De)}ue=59}switch(ue){case 123:for(B=B.trim(),Ee=B.charCodeAt(0),Pe=1,nt=++De;De<Qt;){switch(ue=q.charCodeAt(De)){case 123:Pe++;break;case 125:Pe--;break;case 47:switch(ue=q.charCodeAt(De+1)){case 42:case 47:e:{for(Xe=De+1;Xe<P;++Xe)switch(q.charCodeAt(Xe)){case 47:if(ue===42&&q.charCodeAt(Xe-1)===42&&De+2!==Xe){De=Xe+1;break e}break;case 10:if(ue===47){De=Xe+1;break e}}De=Xe}}break;case 91:ue++;case 40:ue++;case 34:case 39:for(;De++<P&&q.charCodeAt(De)!==ue;);}if(Pe===0)break;De++}switch(Pe=q.substring(nt,De),Ee===0&&(Ee=(B=B.replace(f,"").trim()).charCodeAt(0)),Ee){case 64:switch(0<Ue&&(B=B.replace(d,"")),ue=B.charCodeAt(1),ue){case 100:case 109:case 115:case 45:Ue=V;break;default:Ue=$}if(Pe=e(V,Ue,Pe,ue,A+1),nt=Pe.length,0<O&&(Ue=n($,B,Ge),Te=a(3,Pe,Ue,V,ee,re,nt,ue,A,le),B=Ue.join(""),Te!==void 0&&(nt=(Pe=Te.trim()).length)===0&&(ue=0,Pe="")),0<nt)switch(ue){case 115:B=B.replace(C,o);case 100:case 109:case 45:Pe=B+"{"+Pe+"}";break;case 107:B=B.replace(v,"$1 $2"),Pe=B+"{"+Pe+"}",Pe=X===1||X===2&&s("@"+Pe,3)?"@-webkit-"+Pe+"@"+Pe:"@"+Pe;break;default:Pe=B+Pe,le===112&&(Pe=(te+=Pe,""))}else Pe="";break;default:Pe=e(V,n(V,B,Ge),Pe,le,A+1)}ce+=Pe,Pe=Ge=Ue=Xe=Ee=0,B="",ue=q.charCodeAt(++De);break;case 125:case 59:if(B=(0<Ue?B.replace(d,""):B).trim(),1<(nt=B.length))switch(Xe===0&&(Ee=B.charCodeAt(0),Ee===45||96<Ee&&123>Ee)&&(nt=(B=B.replace(" ",":")).length),0<O&&(Te=a(1,B,V,N,ee,re,te.length,le,A,le))!==void 0&&(nt=(B=Te.trim()).length)===0&&(B="\0\0"),Ee=B.charCodeAt(0),ue=B.charCodeAt(1),Ee){case 0:break;case 64:if(ue===105||ue===99){de+=B+q.charAt(De);break}default:B.charCodeAt(nt-1)!==58&&(te+=r(B,Ee,ue,B.charCodeAt(2)))}Ge=Ue=Xe=Ee=0,B="",ue=q.charCodeAt(++De)}}switch(ue){case 13:case 10:Z===47?Z=0:1+Ee===0&&le!==107&&0<B.length&&(Ue=1,B+="\0"),0<O*G&&a(0,B,V,N,ee,re,te.length,le,A,le),re=1,ee++;break;case 59:case 125:if(Z+ae+ye+Se===0){re++;break}default:switch(re++,M=q.charAt(De),ue){case 9:case 32:if(ae+Se+Z===0)switch(ve){case 44:case 58:case 9:case 32:M="";break;default:ue!==32&&(M=" ")}break;case 0:M="\\0";break;case 12:M="\\f";break;case 11:M="\\v";break;case 38:ae+Z+Se===0&&(Ue=Ge=1,M="\f"+M);break;case 108:if(ae+Z+Se+U===0&&0<Xe)switch(De-Xe){case 2:ve===112&&q.charCodeAt(De-3)===58&&(U=ve);case 8:je===111&&(U=je)}break;case 58:ae+Z+Se===0&&(Xe=De);break;case 44:Z+ye+ae+Se===0&&(Ue=1,M+="\r");break;case 34:case 39:Z===0&&(ae=ae===ue?0:ae===0?ue:ae);break;case 91:ae+Z+ye===0&&Se++;break;case 93:ae+Z+ye===0&&Se--;break;case 41:ae+Z+Se===0&&ye--;break;case 40:if(ae+Z+Se===0){if(Ee===0)switch(2*ve+3*je){case 533:break;default:Ee=1}ye++}break;case 64:Z+ye+ae+Se+Xe+Pe===0&&(Pe=1);break;case 42:case 47:if(!(0<ae+Se+ye))switch(Z){case 0:switch(2*ue+3*q.charCodeAt(De+1)){case 235:Z=47;break;case 220:nt=De,Z=42}break;case 42:ue===47&&ve===42&&nt+2!==De&&(q.charCodeAt(nt+2)===33&&(te+=q.substring(nt,De+1)),M="",Z=0)}}Z===0&&(B+=M)}je=ve,ve=ue,De++}if(nt=te.length,0<nt){if(Ue=V,0<O&&(Te=a(2,te,Ue,N,ee,re,nt,le,A,le),Te!==void 0&&(te=Te).length===0))return de+te+ce;if(te=Ue.join(",")+"{"+te+"}",X*U!==0){switch(X!==2||s(te,2)||(U=0),U){case 111:te=te.replace(S,":-moz-$1")+te;break;case 112:te=te.replace(x,"::-webkit-input-$1")+te.replace(x,"::-moz-$1")+te.replace(x,":-ms-input-$1")+te}U=0}}return de+te+ce}function n(N,V,q){var le=V.trim().split(p);V=le;var A=le.length,Se=N.length;switch(Se){case 0:case 1:var Z=0;for(N=Se===0?"":N[0]+" ";Z<A;++Z)V[Z]=i(N,V[Z],q).trim();break;default:var ye=Z=0;for(V=[];Z<A;++Z)for(var ae=0;ae<Se;++ae)V[ye++]=i(N[ae]+" ",le[Z],q).trim()}return V}function i(N,V,q){var le=V.charCodeAt(0);switch(33>le&&(le=(V=V.trim()).charCodeAt(0)),le){case 38:return V.replace(g,"$1"+N.trim());case 58:return N.trim()+V.replace(g,"$1"+N.trim());default:if(0<1*q&&0<V.indexOf("\f"))return V.replace(g,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+V}function r(N,V,q,le){var A=N+";",Se=2*V+3*q+4*le;if(Se===944){N=A.indexOf(":",9)+1;var Z=A.substring(N,A.length-1).trim();return Z=A.substring(0,N).trim()+Z+";",X===1||X===2&&s(Z,1)?"-webkit-"+Z+Z:Z}if(X===0||X===2&&!s(A,1))return A;switch(Se){case 1015:return A.charCodeAt(10)===97?"-webkit-"+A+A:A;case 951:return A.charCodeAt(3)===116?"-webkit-"+A+A:A;case 963:return A.charCodeAt(5)===110?"-webkit-"+A+A:A;case 1009:if(A.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+A+A;case 978:return"-webkit-"+A+"-moz-"+A+A;case 1019:case 983:return"-webkit-"+A+"-moz-"+A+"-ms-"+A+A;case 883:if(A.charCodeAt(8)===45)return"-webkit-"+A+A;if(0<A.indexOf("image-set(",11))return A.replace(F,"$1-webkit-$2")+A;break;case 932:if(A.charCodeAt(4)===45)switch(A.charCodeAt(5)){case 103:return"-webkit-box-"+A.replace("-grow","")+"-webkit-"+A+"-ms-"+A.replace("grow","positive")+A;case 115:return"-webkit-"+A+"-ms-"+A.replace("shrink","negative")+A;case 98:return"-webkit-"+A+"-ms-"+A.replace("basis","preferred-size")+A}return"-webkit-"+A+"-ms-"+A+A;case 964:return"-webkit-"+A+"-ms-flex-"+A+A;case 1023:if(A.charCodeAt(8)!==99)break;return Z=A.substring(A.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Z+"-webkit-"+A+"-ms-flex-pack"+Z+A;case 1005:return _.test(A)?A.replace(m,":-webkit-")+A.replace(m,":-moz-")+A:A;case 1e3:switch(Z=A.substring(13).trim(),V=Z.indexOf("-")+1,Z.charCodeAt(0)+Z.charCodeAt(V)){case 226:Z=A.replace(w,"tb");break;case 232:Z=A.replace(w,"tb-rl");break;case 220:Z=A.replace(w,"lr");break;default:return A}return"-webkit-"+A+"-ms-"+Z+A;case 1017:if(A.indexOf("sticky",9)===-1)break;case 975:switch(V=(A=N).length-10,Z=(A.charCodeAt(V)===33?A.substring(0,V):A).substring(N.indexOf(":",7)+1).trim(),Se=Z.charCodeAt(0)+(Z.charCodeAt(7)|0)){case 203:if(111>Z.charCodeAt(8))break;case 115:A=A.replace(Z,"-webkit-"+Z)+";"+A;break;case 207:case 102:A=A.replace(Z,"-webkit-"+(102<Se?"inline-":"")+"box")+";"+A.replace(Z,"-webkit-"+Z)+";"+A.replace(Z,"-ms-"+Z+"box")+";"+A}return A+";";case 938:if(A.charCodeAt(5)===45)switch(A.charCodeAt(6)){case 105:return Z=A.replace("-items",""),"-webkit-"+A+"-webkit-box-"+Z+"-ms-flex-"+Z+A;case 115:return"-webkit-"+A+"-ms-flex-item-"+A.replace(y,"")+A;default:return"-webkit-"+A+"-ms-flex-line-pack"+A.replace("align-content","").replace(y,"")+A}break;case 973:case 989:if(A.charCodeAt(3)!==45||A.charCodeAt(4)===122)break;case 931:case 953:if(I.test(N)===!0)return(Z=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?r(N.replace("stretch","fill-available"),V,q,le).replace(":fill-available",":stretch"):A.replace(Z,"-webkit-"+Z)+A.replace(Z,"-moz-"+Z.replace("fill-",""))+A;break;case 962:if(A="-webkit-"+A+(A.charCodeAt(5)===102?"-ms-"+A:"")+A,q+le===211&&A.charCodeAt(13)===105&&0<A.indexOf("transform",10))return A.substring(0,A.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+A}return A}function s(N,V){var q=N.indexOf(V===1?":":"{"),le=N.substring(0,V!==3?q:10);return q=N.substring(q+1,N.length-1),k(V!==2?le:le.replace(T,"$1"),q,V)}function o(N,V){var q=r(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return q!==V+";"?q.replace(R," or ($1)").substring(4):"("+V+")"}function a(N,V,q,le,A,Se,Z,ye,ae,Ee){for(var ue=0,ve=V,je;ue<O;++ue)switch(je=J[ue].call(u,N,ve,q,le,A,Se,Z,ye,ae,Ee)){case void 0:case!1:case!0:case null:break;default:ve=je}if(ve!==V)return ve}function l(N){switch(N){case void 0:case null:O=J.length=0;break;default:if(typeof N=="function")J[O++]=N;else if(typeof N=="object")for(var V=0,q=N.length;V<q;++V)l(N[V]);else G=!!N|0}return l}function c(N){return N=N.prefix,N!==void 0&&(k=null,N?typeof N!="function"?X=1:(X=2,k=N):X=0),c}function u(N,V){var q=N;if(33>q.charCodeAt(0)&&(q=q.trim()),K=q,q=[K],0<O){var le=a(-1,V,q,q,ee,re,0,0,0,0);le!==void 0&&typeof le=="string"&&(V=le)}var A=e($,q,V,0,0);return 0<O&&(le=a(-2,A,q,q,ee,re,A.length,0,0,0),le!==void 0&&(A=le)),K="",U=0,re=ee=1,A}var f=/^\0+/g,d=/[\0\r\f]/g,m=/: */g,_=/zoo|gra/,h=/([,: ])(transform)/g,p=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,S=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,R=/([\s\S]*?);/g,y=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,F=/([^-])(image-set\()/,re=1,ee=1,U=0,X=1,$=[],J=[],O=0,k=null,G=0,K="";return u.use=l,u.set=c,t!==void 0&&c(t),u}var hA={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function pA(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var mA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,W0=pA(function(t){return mA.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Jn(){return(Jn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var $0=function(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n},sh=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!gp.exports.typeOf(t)},Oc=Object.freeze([]),mr=Object.freeze({});function yo(t){return typeof t=="function"}function j0(t){return t.displayName||t.name||"Component"}function kp(t){return t&&typeof t.styledComponentId=="string"}var So=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",zp=typeof window<"u"&&"HTMLElement"in window,gA=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),vA={};function as(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var _A=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var i=0,r=0;r<n;r++)i+=this.groupSizes[r];return i},e.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,o=s;n>=o;)(o<<=1)<0&&as(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),c=0,u=i.length;c<u;c++)this.tag.insertRule(l,i[c])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],r=this.indexOfGroup(n),s=r+i;this.groupSizes[n]=0;for(var o=r;o<s;o++)this.tag.deleteRule(r)}},e.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var r=this.groupSizes[n],s=this.indexOfGroup(n),o=s+r,a=s;a<o;a++)i+=this.tag.getRule(a)+`/*!sc*/
`;return i},t}(),nc=new Map,kc=new Map,da=1,kl=function(t){if(nc.has(t))return nc.get(t);for(;kc.has(da);)da++;var e=da++;return nc.set(t,e),kc.set(e,t),e},xA=function(t){return kc.get(t)},yA=function(t,e){e>=da&&(da=e+1),nc.set(t,e),kc.set(e,t)},SA="style["+So+'][data-styled-version="5.3.5"]',wA=new RegExp("^"+So+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),MA=function(t,e,n){for(var i,r=n.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&t.registerName(e,i)},EA=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),i=[],r=0,s=n.length;r<s;r++){var o=n[r].trim();if(o){var a=o.match(wA);if(a){var l=0|parseInt(a[1],10),c=a[2];l!==0&&(yA(c,l),MA(t,c,a[3]),t.getTag().insertRules(l,i)),i.length=0}else i.push(o)}}},bA=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},bx=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){for(var l=a.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(So))return u}}(n),s=r!==void 0?r.nextSibling:null;i.setAttribute(So,"active"),i.setAttribute("data-styled-version","5.3.5");var o=bA();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},CA=function(){function t(n){var i=this.element=bx(n);i.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===r)return l}as(17)}(i),this.length=0}var e=t.prototype;return e.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var i=this.sheet.cssRules[n];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},t}(),TA=function(){function t(n){var i=this.element=bx(n);this.nodes=i.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,i){if(n<=this.length&&n>=0){var r=document.createTextNode(i),s=this.nodes[n];return this.element.insertBefore(r,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),AA=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),X0=zp,PA={isServer:!zp,useCSSOMInjection:!gA},zc=function(){function t(n,i,r){n===void 0&&(n=mr),i===void 0&&(i={}),this.options=Jn({},PA,{},n),this.gs=i,this.names=new Map(r),this.server=!!n.isServer,!this.server&&zp&&X0&&(X0=!1,function(s){for(var o=document.querySelectorAll(SA),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(So)!=="active"&&(EA(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}t.registerId=function(n){return kl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new t(Jn({},this.options,{},n),this.gs,i&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(r=(i=this.options).isServer,s=i.useCSSOMInjection,o=i.target,n=r?new AA(o):s?new CA(o):new TA(o),new _A(n)));var n,i,r,s,o},e.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.registerName=function(n,i){if(kl(n),this.names.has(n))this.names.get(n).add(i);else{var r=new Set;r.add(i),this.names.set(n,r)}},e.insertRules=function(n,i,r){this.registerName(n,i),this.getTag().insertRules(kl(n),r)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(kl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var i=n.getTag(),r=i.length,s="",o=0;o<r;o++){var a=xA(o);if(a!==void 0){var l=n.names.get(a),c=i.getGroup(o);if(l&&c&&l.size){var u=So+".g"+o+'[id="'+a+'"]',f="";l!==void 0&&l.forEach(function(d){d.length>0&&(f+=d+",")}),s+=""+c+u+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},t}(),LA=/(a)(d)/gi,q0=function(t){return String.fromCharCode(t+(t>25?39:97))};function oh(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=q0(e%52)+n;return(q0(e%52)+n).replace(LA,"$1-$2")}var qs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Cx=function(t){return qs(5381,t)};function Tx(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(yo(n)&&!kp(n))return!1}return!0}var RA=Cx("5.3.5"),DA=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Tx(e),this.componentId=n,this.baseHash=qs(RA,n),this.baseStyle=i,zc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(r,this.staticRulesId))s.push(this.staticRulesId);else{var o=ls(this.rules,e,n,i).join(""),a=oh(qs(this.baseHash,o)>>>0);if(!n.hasNameForId(r,a)){var l=i(o,"."+a,void 0,r);n.insertRules(r,a,l)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,u=qs(this.baseHash,i.hash),f="",d=0;d<c;d++){var m=this.rules[d];if(typeof m=="string")f+=m;else if(m){var _=ls(m,e,n,i),h=Array.isArray(_)?_.join(""):_;u=qs(u,h+d),f+=h}}if(f){var p=oh(u>>>0);if(!n.hasNameForId(r,p)){var g=i(f,"."+p,void 0,r);n.insertRules(r,p,g)}s.push(p)}}return s.join(" ")},t}(),IA=/^\s*\/\/.*$/gm,OA=[":","[",".","#"];function kA(t){var e,n,i,r,s=t===void 0?mr:t,o=s.options,a=o===void 0?mr:o,l=s.plugins,c=l===void 0?Oc:l,u=new dA(a),f=[],d=function(h){function p(g){if(g)try{h(g+"}")}catch{}}return function(g,v,x,S,w,C,R,y,T,I){switch(g){case 1:if(T===0&&v.charCodeAt(0)===64)return h(v+";"),"";break;case 2:if(y===0)return v+"/*|*/";break;case 3:switch(y){case 102:case 112:return h(x[0]+v),"";default:return v+(I===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(p)}}}(function(h){f.push(h)}),m=function(h,p,g){return p===0&&OA.indexOf(g[n.length])!==-1||g.match(r)?h:"."+e};function _(h,p,g,v){v===void 0&&(v="&");var x=h.replace(IA,""),S=p&&g?g+" "+p+" { "+x+" }":x;return e=v,n=p,i=new RegExp("\\"+n+"\\b","g"),r=new RegExp("(\\"+n+"\\b){2,}"),u(g||!p?"":p,S)}return u.use([].concat(c,[function(h,p,g){h===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(i,m))},d,function(h){if(h===-2){var p=f;return f=[],p}}])),_.hash=c.length?c.reduce(function(h,p){return p.name||as(15),qs(h,p.name)},5381).toString():"",_}var Ax=Kn.createContext();Ax.Consumer;var Px=Kn.createContext(),zA=(Px.Consumer,new zc),ah=kA();function Lx(){return he.exports.useContext(Ax)||zA}function Rx(){return he.exports.useContext(Px)||ah}var FA=function(){function t(e,n){var i=this;this.inject=function(r,s){s===void 0&&(s=ah);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.toString=function(){return as(12,String(i.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=ah),this.name+e.hash},t}(),NA=/([A-Z])/,BA=/([A-Z])/g,UA=/^ms-/,GA=function(t){return"-"+t.toLowerCase()};function Y0(t){return NA.test(t)?t.replace(BA,GA).replace(UA,"-ms-"):t}var Z0=function(t){return t==null||t===!1||t===""};function ls(t,e,n,i){if(Array.isArray(t)){for(var r,s=[],o=0,a=t.length;o<a;o+=1)(r=ls(t[o],e,n,i))!==""&&(Array.isArray(r)?s.push.apply(s,r):s.push(r));return s}if(Z0(t))return"";if(kp(t))return"."+t.styledComponentId;if(yo(t)){if(typeof(c=t)!="function"||c.prototype&&c.prototype.isReactComponent||!e)return t;var l=t(e);return ls(l,e,n,i)}var c;return t instanceof FA?n?(t.inject(n,i),t.getName(i)):t:sh(t)?function u(f,d){var m,_,h=[];for(var p in f)f.hasOwnProperty(p)&&!Z0(f[p])&&(Array.isArray(f[p])&&f[p].isCss||yo(f[p])?h.push(Y0(p)+":",f[p],";"):sh(f[p])?h.push.apply(h,u(f[p],p)):h.push(Y0(p)+": "+(m=p,(_=f[p])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||m in hA?String(_).trim():_+"px")+";"));return d?[d+" {"].concat(h,["}"]):h}(t):t.toString()}var Q0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Dx(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return yo(t)||sh(t)?Q0(ls($0(Oc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Q0(ls($0(t,n)))}var Ix=function(t,e,n){return n===void 0&&(n=mr),t.theme!==n.theme&&t.theme||e||n.theme},VA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,HA=/(^-|-$)/g;function Xf(t){return t.replace(VA,"-").replace(HA,"")}var Ox=function(t){return oh(Cx(t)>>>0)};function zl(t){return typeof t=="string"&&!0}var lh=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},WA=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function $A(t,e,n){var i=t[n];lh(e)&&lh(i)?kx(i,e):t[n]=e}function kx(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(var r=0,s=n;r<s.length;r++){var o=s[r];if(lh(o))for(var a in o)WA(a)&&$A(t,o[a],a)}return t}var Oa=Kn.createContext();Oa.Consumer;function jA(t){var e=he.exports.useContext(Oa),n=he.exports.useMemo(function(){return function(i,r){if(!i)return as(14);if(yo(i)){var s=i(r);return s}return Array.isArray(i)||typeof i!="object"?as(8):r?Jn({},r,{},i):i}(t.theme,e)},[t.theme,e]);return t.children?Kn.createElement(Oa.Provider,{value:n},t.children):null}var qf={};function zx(t,e,n){var i=kp(t),r=!zl(t),s=e.attrs,o=s===void 0?Oc:s,a=e.componentId,l=a===void 0?function(v,x){var S=typeof v!="string"?"sc":Xf(v);qf[S]=(qf[S]||0)+1;var w=S+"-"+Ox("5.3.5"+S+qf[S]);return x?x+"-"+w:w}(e.displayName,e.parentComponentId):a,c=e.displayName,u=c===void 0?function(v){return zl(v)?"styled."+v:"Styled("+j0(v)+")"}(t):c,f=e.displayName&&e.componentId?Xf(e.displayName)+"-"+e.componentId:e.componentId||l,d=i&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,m=e.shouldForwardProp;i&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(v,x,S){return t.shouldForwardProp(v,x,S)&&e.shouldForwardProp(v,x,S)}:t.shouldForwardProp);var _,h=new DA(n,f,i?t.componentStyle:void 0),p=h.isStatic&&o.length===0,g=function(v,x){return function(S,w,C,R){var y=S.attrs,T=S.componentStyle,I=S.defaultProps,F=S.foldedComponentIds,re=S.shouldForwardProp,ee=S.styledComponentId,U=S.target,X=function(le,A,Se){le===void 0&&(le=mr);var Z=Jn({},A,{theme:le}),ye={};return Se.forEach(function(ae){var Ee,ue,ve,je=ae;for(Ee in yo(je)&&(je=je(Z)),je)Z[Ee]=ye[Ee]=Ee==="className"?(ue=ye[Ee],ve=je[Ee],ue&&ve?ue+" "+ve:ue||ve):je[Ee]}),[Z,ye]}(Ix(w,he.exports.useContext(Oa),I)||mr,w,y),$=X[0],J=X[1],O=function(le,A,Se,Z){var ye=Lx(),ae=Rx(),Ee=A?le.generateAndInjectStyles(mr,ye,ae):le.generateAndInjectStyles(Se,ye,ae);return Ee}(T,R,$),k=C,G=J.$as||w.$as||J.as||w.as||U,K=zl(G),N=J!==w?Jn({},w,{},J):w,V={};for(var q in N)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?V.as=N[q]:(re?re(q,W0,G):!K||W0(q))&&(V[q]=N[q]));return w.style&&J.style!==w.style&&(V.style=Jn({},w.style,{},J.style)),V.className=Array.prototype.concat(F,ee,O!==ee?O:null,w.className,J.className).filter(Boolean).join(" "),V.ref=k,he.exports.createElement(G,V)}(_,v,x,p)};return g.displayName=u,(_=Kn.forwardRef(g)).attrs=d,_.componentStyle=h,_.displayName=u,_.shouldForwardProp=m,_.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Oc,_.styledComponentId=f,_.target=i?t.target:t,_.withComponent=function(v){var x=e.componentId,S=function(C,R){if(C==null)return{};var y,T,I={},F=Object.keys(C);for(T=0;T<F.length;T++)y=F[T],R.indexOf(y)>=0||(I[y]=C[y]);return I}(e,["componentId"]),w=x&&x+"-"+(zl(v)?v:Xf(j0(v)));return zx(v,Jn({},S,{attrs:d,componentId:w}),n)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?kx({},t.defaultProps,v):v}}),_.toString=function(){return"."+_.styledComponentId},r&&Pw(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var ch=function(t){return function e(n,i,r){if(r===void 0&&(r=mr),!gp.exports.isValidElementType(i))return as(1,String(i));var s=function(){return n(i,r,Dx.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,i,Jn({},r,{},o))},s.attrs=function(o){return e(n,i,Jn({},r,{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},s}(zx,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){ch[t]=ch(t)});var XA=function(){function t(n,i){this.rules=n,this.componentId=i,this.isStatic=Tx(n),zc.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,i,r,s){var o=s(ls(this.rules,i,r,s).join(""),""),a=this.componentId+n;r.insertRules(a,a,o)},e.removeStyles=function(n,i){i.clearRules(this.componentId+n)},e.renderStyles=function(n,i,r,s){n>2&&zc.registerId(this.componentId+n),this.removeStyles(n,r),this.createStyles(n,i,r,s)},t}();function qA(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Dx.apply(void 0,[t].concat(n)),s="sc-global-"+Ox(JSON.stringify(r)),o=new XA(r,s);function a(c){var u=Lx(),f=Rx(),d=he.exports.useContext(Oa),m=he.exports.useRef(u.allocateGSInstance(s)).current;return u.server&&l(m,c,u,d,f),he.exports.useLayoutEffect(function(){if(!u.server)return l(m,c,u,d,f),function(){return o.removeStyles(m,u)}},[m,c,u,d,f]),null}function l(c,u,f,d,m){if(o.isStatic)o.renderStyles(c,vA,f,m);else{var _=Jn({},u,{theme:Ix(u,d,a.defaultProps)});o.renderStyles(c,_,f,m)}}return Kn.memo(a)}const oe=ch,YA=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 80px;
    margin: 5px;
    color: white;
    background-color: rgb(54,54,54);
    &:hover{
        background-color: rgb(100,100,100);
    }
`,ZA=t=>{const e=n=>{let i=n.target.innerText;console.log("\u70B9\u51FB\u4E86"+i),Fe.ED.event(Ac.LEFT_MENU_ITEM_CLICK,[i])};return L($e,{children:Ae(YA,{onClick:n=>e(n),children:[t.icon,t.label]})})};function Fx(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function QA(t,e){if(t==null)return{};var n=gw(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function JA(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var KA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,e5=JA(function(t){return KA.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function J0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function t5(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?J0(Object(n),!0).forEach(function(i){Fx(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function n5(t){return e5(t)}function i5(t){return Object.keys(t).reduce(function(e,n){return n5(n)&&(e[n]=t[n]),e},{})}var r5=he.exports.forwardRef(function(t,e){var n=t.children,i=t.iconAttrs;t.iconVerticalAlign;var r=t.iconViewBox,s=t.size,o=t.title,a=QA(t,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),l=t5({viewBox:r,height:t.height!==void 0?t.height:s,width:t.width!==void 0?t.width:s,"aria-hidden":o==null?"true":void 0,focusable:"false",role:o!=null?"img":void 0},i),c=i5(a);return Ae("svg",{...l,...c,ref:e,children:[o&&L("title",{children:o},"icon-title"),n]})}),mt=oe(r5).withConfig({displayName:"StyledIconBase",componentId:"ea9ulj-0"})(["display:inline-block;vertical-align:",";overflow:hidden;"],function(t){return t.iconVerticalAlign}),Fp=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("path",{fill:"none",d:"M0 0h24v24H0z"}),L("path",{d:"M3 19V5.7a1 1 0 01.658-.94l9.671-3.516a.5.5 0 01.671.47v4.953l6.316 2.105a1 1 0 01.684.949V19h2v2H1v-2h2zm2 0h7V3.855L5 6.401V19zm14 0v-8.558l-5-1.667V19h5z"})]})});Fp.displayName="Building2";const s5=oe.div`
  width: 220px;
  height: 100%;
  background-color: rgb(38,38,38);
  border-radius: 0 5px 5px 0;
`,o5=oe.div`
  display: flex;
  /* justify-content: center; */
  flex-flow: row wrap;
  width: 100%;
  /* margin: 10px; */
  
`,wt=oe(Fp)`
    color: white;

`,a5={sd1:[{id:"bim1",label:"\u753B\u5899",icon:L(wt,{size:"16"})},{id:"bim2",label:"\u5F27\u5899",icon:L(wt,{size:"16"})},{id:"bim3",label:"\u5F02\u5F62\u5899",icon:L(wt,{size:"16"})},{id:"bim4",label:"\u6A2A\u6881",icon:L(wt,{size:"16"})},{id:"bim5",label:"\u697C\u677F",icon:L(wt,{size:"16"})},{id:"bim6",label:"\u5F02\u5F62\u697C\u677F",icon:L(wt,{size:"16"})},{id:"bim7",label:"\u65B9\u5F62\u67F1",icon:L(wt,{size:"16"})},{id:"bim8",label:"\u5706\u67F1\u67F1",icon:L(wt,{size:"16"})},{id:"bim9",label:"\u5F02\u5F62\u67F1",icon:L(wt,{size:"16"})},{id:"bim10",label:"\u5355\u8DD1\u697C\u68AF",icon:L(wt,{size:"16"})},{id:"bim11",label:"\u53CC\u8DD1\u697C\u68AF",icon:L(wt,{size:"16"})},{id:"bim12",label:"\u526A\u5200\u697C\u68AF",icon:L(wt,{size:"16"})},{id:"bim13",label:"\u5899\u6D1E",icon:L(wt,{size:"16"})},{id:"bim14",label:"\u677F\u6D1E",icon:L(wt,{size:"16"})}],sd2:[{id:"bim1",label:"\u8D34\u56FE",icon:L(wt,{size:"16"})},{id:"bim2",label:"\u989C\u8272",icon:L(wt,{size:"16"})}],sd3:[{id:"bim1",label:"\u7269\u54C1",icon:L(wt,{size:"16"})},{id:"bim2",label:"\u573A\u666F",icon:L(wt,{size:"16"})},{id:"bim3",label:"\u4EBA\u7269",icon:L(wt,{size:"16"})}],sd4:[{id:"bim1",label:"\u56FE\u7EB8",icon:L(wt,{size:"16"})},{id:"bim2",label:"\u6E05\u5355",icon:L(wt,{size:"16"})}]},l5=()=>{const t=O_(e=>e.editor.idx);return L($e,{children:L(s5,{children:L(o5,{children:a5[t].map(e=>L(ZA,{icon:e.icon,label:e.label},e.id))})})})};var Nx=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.45 21 6.25 21h4.91l.36-1.42.02-.08H6.25c-.2 0-.4-.04-.58-.1l5.8-5.69.09-.07c.29-.2.7-.19.96.07l2.08 2.04 1.06-1.06-2.09-2.05-.13-.11a2.25 2.25 0 0 0-3.01.11l-5.83 5.7c-.06-.18-.1-.38-.1-.6V6.26c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v4.98c.48-.19 1-.26 1.5-.22V6.25zm-3.5 2.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zm-3 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0zm4.6 3.92-5.9 5.9c-.35.34-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24z"})})});Nx.displayName="ImageEdit";var Bx=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 48 48",...t,ref:e,children:L("path",{d:"M32 24a10 10 0 1 0-8.55-4.8l-5.38 3.58a8 8 0 1 0 .44 9.87l7.68 3.84a6.01 6.01 0 1 0 1.12-2.23l-7.68-3.84a8 8 0 0 0-.25-5.5l5.64-3.76A9.97 9.97 0 0 0 32 24zm0-2.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm-20 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zM35.5 38a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"})})});Bx.displayName="Molecule";var Ux=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M16.5 8a4.25 4.25 0 0 0 0 8.5h.5v4.75a.75.75 0 0 0 1.5 0V9.5h1v11.75a.75.75 0 0 0 1.5 0V9.5h.25a.75.75 0 0 0 0-1.5H16.5zm0 1.5h.5V15h-.5a2.75 2.75 0 1 1 0-5.5zM2.75 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H2.75zM2.75 10a.75.75 0 0 0 0 1.5h8.55c.08-.53.23-1.03.46-1.5H2.75zM12.03 15H2.75a.75.75 0 0 0 0 1.5h10.67a5.28 5.28 0 0 1-1.4-1.5z"})})});Ux.displayName="TextParagraph";function Qn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(r){return"'"+r+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Sr(t){return!!t&&!!t[lt]}function Bi(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var n=Object.getPrototypeOf(e);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===v5}(t)||Array.isArray(t)||!!t[sv]||!!t.constructor[sv]||Np(t)||Bp(t))}function cs(t,e,n){n===void 0&&(n=!1),Lo(t)===0?(n?Object.keys:so)(t).forEach(function(i){n&&typeof i=="symbol"||e(i,t[i],t)}):t.forEach(function(i,r){return e(r,i,t)})}function Lo(t){var e=t[lt];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Np(t)?2:Bp(t)?3:0}function ro(t,e){return Lo(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function c5(t,e){return Lo(t)===2?t.get(e):t[e]}function Gx(t,e,n){var i=Lo(t);i===2?t.set(e,n):i===3?(t.delete(e),t.add(n)):t[e]=n}function Vx(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Np(t){return m5&&t instanceof Map}function Bp(t){return g5&&t instanceof Set}function Or(t){return t.o||t.t}function Up(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Wx(t);delete e[lt];for(var n=so(e),i=0;i<n.length;i++){var r=n[i],s=e[r];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[r]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[r]})}return Object.create(Object.getPrototypeOf(t),e)}function Gp(t,e){return e===void 0&&(e=!1),Vp(t)||Sr(t)||!Bi(t)||(Lo(t)>1&&(t.set=t.add=t.clear=t.delete=u5),Object.freeze(t),e&&cs(t,function(n,i){return Gp(i,!0)},!0)),t}function u5(){Qn(2)}function Vp(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function _i(t){var e=hh[t];return e||Qn(18,t),e}function f5(t,e){hh[t]||(hh[t]=e)}function uh(){return ka}function Yf(t,e){e&&(_i("Patches"),t.u=[],t.s=[],t.v=e)}function Fc(t){fh(t),t.p.forEach(d5),t.p=null}function fh(t){t===ka&&(ka=t.l)}function K0(t){return ka={p:[],l:ka,h:t,m:!0,_:0}}function d5(t){var e=t[lt];e.i===0||e.i===1?e.j():e.O=!0}function Zf(t,e){e._=e.p.length;var n=e.p[0],i=t!==void 0&&t!==n;return e.h.g||_i("ES5").S(e,t,i),i?(n[lt].P&&(Fc(e),Qn(4)),Bi(t)&&(t=Nc(e,t),e.l||Bc(e,t)),e.u&&_i("Patches").M(n[lt].t,t,e.u,e.s)):t=Nc(e,n,[]),Fc(e),e.u&&e.v(e.u,e.s),t!==Hx?t:void 0}function Nc(t,e,n){if(Vp(e))return e;var i=e[lt];if(!i)return cs(e,function(s,o){return ev(t,i,e,s,o,n)},!0),e;if(i.A!==t)return e;if(!i.P)return Bc(t,i.t,!0),i.t;if(!i.I){i.I=!0,i.A._--;var r=i.i===4||i.i===5?i.o=Up(i.k):i.o;cs(i.i===3?new Set(r):r,function(s,o){return ev(t,i,r,s,o,n)}),Bc(t,r,!1),n&&t.u&&_i("Patches").R(i,n,t.u,t.s)}return i.o}function ev(t,e,n,i,r,s){if(Sr(r)){var o=Nc(t,r,s&&e&&e.i!==3&&!ro(e.D,i)?s.concat(i):void 0);if(Gx(n,i,o),!Sr(o))return;t.m=!1}if(Bi(r)&&!Vp(r)){if(!t.h.F&&t._<1)return;Nc(t,r),e&&e.A.l||Bc(t,r)}}function Bc(t,e,n){n===void 0&&(n=!1),t.h.F&&t.m&&Gp(e,n)}function Qf(t,e){var n=t[lt];return(n?Or(n):t)[e]}function tv(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var i=Object.getOwnPropertyDescriptor(n,e);if(i)return i;n=Object.getPrototypeOf(n)}}function tr(t){t.P||(t.P=!0,t.l&&tr(t.l))}function Jf(t){t.o||(t.o=Up(t.t))}function dh(t,e,n){var i=Np(e)?_i("MapSet").N(e,n):Bp(e)?_i("MapSet").T(e,n):t.g?function(r,s){var o=Array.isArray(r),a={i:o?1:0,A:s?s.A:uh(),P:!1,I:!1,D:{},l:s,t:r,k:null,o:null,j:null,C:!1},l=a,c=za;o&&(l=[a],c=Ko);var u=Proxy.revocable(l,c),f=u.revoke,d=u.proxy;return a.k=d,a.j=f,d}(e,n):_i("ES5").J(e,n);return(n?n.A:uh()).p.push(i),i}function h5(t){return Sr(t)||Qn(22,t),function e(n){if(!Bi(n))return n;var i,r=n[lt],s=Lo(n);if(r){if(!r.P&&(r.i<4||!_i("ES5").K(r)))return r.t;r.I=!0,i=nv(n,s),r.I=!1}else i=nv(n,s);return cs(i,function(o,a){r&&c5(r.t,o)===a||Gx(i,o,e(a))}),s===3?new Set(i):i}(t)}function nv(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Up(t)}function p5(){function t(s,o){var a=r[s];return a?a.enumerable=o:r[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[lt];return za.get(l,s)},set:function(l){var c=this[lt];za.set(c,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][lt];if(!a.P)switch(a.i){case 5:i(a)&&tr(a);break;case 4:n(a)&&tr(a)}}}function n(s){for(var o=s.t,a=s.k,l=so(a),c=l.length-1;c>=0;c--){var u=l[c];if(u!==lt){var f=o[u];if(f===void 0&&!ro(o,u))return!0;var d=a[u],m=d&&d[lt];if(m?m.t!==f:!Vx(d,f))return!0}}var _=!!o[lt];return l.length!==so(o).length+(_?0:1)}function i(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var r={};f5("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(u,f){if(u){for(var d=Array(f.length),m=0;m<f.length;m++)Object.defineProperty(d,""+m,t(m,!0));return d}var _=Wx(f);delete _[lt];for(var h=so(_),p=0;p<h.length;p++){var g=h[p];_[g]=t(g,u||!!_[g].enumerable)}return Object.create(Object.getPrototypeOf(f),_)}(a,s),c={i:a?5:4,A:o?o.A:uh(),P:!1,I:!1,D:{},l:o,t:s,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,lt,{value:c,writable:!0}),l},S:function(s,o,a){a?Sr(o)&&o[lt].A===s&&e(s.p):(s.u&&function l(c){if(c&&typeof c=="object"){var u=c[lt];if(u){var f=u.t,d=u.k,m=u.D,_=u.i;if(_===4)cs(d,function(x){x!==lt&&(f[x]!==void 0||ro(f,x)?m[x]||l(d[x]):(m[x]=!0,tr(u)))}),cs(f,function(x){d[x]!==void 0||ro(d,x)||(m[x]=!1,tr(u))});else if(_===5){if(i(u)&&(tr(u),m.length=!0),d.length<f.length)for(var h=d.length;h<f.length;h++)m[h]=!1;else for(var p=f.length;p<d.length;p++)m[p]=!0;for(var g=Math.min(d.length,f.length),v=0;v<g;v++)d.hasOwnProperty(v)||(m[v]=!0),m[v]===void 0&&l(d[v])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):i(s)}})}var iv,ka,Hp=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",m5=typeof Map<"u",g5=typeof Set<"u",rv=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Hx=Hp?Symbol.for("immer-nothing"):((iv={})["immer-nothing"]=!0,iv),sv=Hp?Symbol.for("immer-draftable"):"__$immer_draftable",lt=Hp?Symbol.for("immer-state"):"__$immer_state",v5=""+Object.prototype.constructor,so=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Wx=Object.getOwnPropertyDescriptors||function(t){var e={};return so(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},hh={},za={get:function(t,e){if(e===lt)return t;var n=Or(t);if(!ro(n,e))return function(r,s,o){var a,l=tv(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(r.k):void 0}(t,n,e);var i=n[e];return t.I||!Bi(i)?i:i===Qf(t.t,e)?(Jf(t),t.o[e]=dh(t.A.h,i,t)):i},has:function(t,e){return e in Or(t)},ownKeys:function(t){return Reflect.ownKeys(Or(t))},set:function(t,e,n){var i=tv(Or(t),e);if(i!=null&&i.set)return i.set.call(t.k,n),!0;if(!t.P){var r=Qf(Or(t),e),s=r==null?void 0:r[lt];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(Vx(n,r)&&(n!==void 0||ro(t.t,e)))return!0;Jf(t),tr(t)}return t.o[e]===n&&typeof n!="number"&&(n!==void 0||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return Qf(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,Jf(t),tr(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Or(t),i=Reflect.getOwnPropertyDescriptor(n,e);return i&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:i.enumerable,value:n[e]}},defineProperty:function(){Qn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){Qn(12)}},Ko={};cs(za,function(t,e){Ko[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ko.deleteProperty=function(t,e){return Ko.set.call(this,t,e,void 0)},Ko.set=function(t,e,n){return za.set.call(this,t[0],e,n,t[0])};var _5=function(){function t(n){var i=this;this.g=rv,this.F=!0,this.produce=function(r,s,o){if(typeof r=="function"&&typeof s!="function"){var a=s;s=r;var l=i;return function(h){var p=this;h===void 0&&(h=a);for(var g=arguments.length,v=Array(g>1?g-1:0),x=1;x<g;x++)v[x-1]=arguments[x];return l.produce(h,function(S){var w;return(w=s).call.apply(w,[p,S].concat(v))})}}var c;if(typeof s!="function"&&Qn(6),o!==void 0&&typeof o!="function"&&Qn(7),Bi(r)){var u=K0(i),f=dh(i,r,void 0),d=!0;try{c=s(f),d=!1}finally{d?Fc(u):fh(u)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(h){return Yf(u,o),Zf(h,u)},function(h){throw Fc(u),h}):(Yf(u,o),Zf(c,u))}if(!r||typeof r!="object"){if((c=s(r))===void 0&&(c=r),c===Hx&&(c=void 0),i.F&&Gp(c,!0),o){var m=[],_=[];_i("Patches").M(r,c,m,_),o(m,_)}return c}Qn(21,r)},this.produceWithPatches=function(r,s){if(typeof r=="function")return function(c){for(var u=arguments.length,f=Array(u>1?u-1:0),d=1;d<u;d++)f[d-1]=arguments[d];return i.produceWithPatches(c,function(m){return r.apply(void 0,[m].concat(f))})};var o,a,l=i.produce(r,s,function(c,u){o=c,a=u});return typeof Promise<"u"&&l instanceof Promise?l.then(function(c){return[c,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Bi(n)||Qn(8),Sr(n)&&(n=h5(n));var i=K0(this),r=dh(this,n,void 0);return r[lt].C=!0,fh(i),r},e.finishDraft=function(n,i){var r=n&&n[lt],s=r.A;return Yf(s,i),Zf(void 0,s)},e.setAutoFreeze=function(n){this.F=n},e.setUseProxies=function(n){n&&!rv&&Qn(20),this.g=n},e.applyPatches=function(n,i){var r;for(r=i.length-1;r>=0;r--){var s=i[r];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}r>-1&&(i=i.slice(r+1));var o=_i("Patches").$;return Sr(n)?o(n,i):this.produce(n,function(a){return o(a,i)})},t}(),bn=new _5,$x=bn.produce;bn.produceWithPatches.bind(bn);bn.setAutoFreeze.bind(bn);bn.setUseProxies.bind(bn);bn.applyPatches.bind(bn);bn.createDraft.bind(bn);bn.finishDraft.bind(bn);function ov(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function av(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ov(Object(n),!0).forEach(function(i){Fx(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ov(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Xt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var lv=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Kf=function(){return Math.random().toString(36).substring(7).split("").join(".")},Uc={INIT:"@@redux/INIT"+Kf(),REPLACE:"@@redux/REPLACE"+Kf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Kf()}};function x5(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function jx(t,e,n){var i;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Xt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Xt(1));return n(jx)(t,e)}if(typeof t!="function")throw new Error(Xt(2));var r=t,s=e,o=[],a=o,l=!1;function c(){a===o&&(a=o.slice())}function u(){if(l)throw new Error(Xt(3));return s}function f(h){if(typeof h!="function")throw new Error(Xt(4));if(l)throw new Error(Xt(5));var p=!0;return c(),a.push(h),function(){if(!!p){if(l)throw new Error(Xt(6));p=!1,c();var v=a.indexOf(h);a.splice(v,1),o=null}}}function d(h){if(!x5(h))throw new Error(Xt(7));if(typeof h.type>"u")throw new Error(Xt(8));if(l)throw new Error(Xt(9));try{l=!0,s=r(s,h)}finally{l=!1}for(var p=o=a,g=0;g<p.length;g++){var v=p[g];v()}return h}function m(h){if(typeof h!="function")throw new Error(Xt(10));r=h,d({type:Uc.REPLACE})}function _(){var h,p=f;return h={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(Xt(11));function x(){v.next&&v.next(u())}x();var S=p(x);return{unsubscribe:S}}},h[lv]=function(){return this},h}return d({type:Uc.INIT}),i={dispatch:d,subscribe:f,getState:u,replaceReducer:m},i[lv]=_,i}function y5(t){Object.keys(t).forEach(function(e){var n=t[e],i=n(void 0,{type:Uc.INIT});if(typeof i>"u")throw new Error(Xt(12));if(typeof n(void 0,{type:Uc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Xt(13))})}function S5(t){for(var e=Object.keys(t),n={},i=0;i<e.length;i++){var r=e[i];typeof t[r]=="function"&&(n[r]=t[r])}var s=Object.keys(n),o;try{y5(n)}catch(a){o=a}return function(l,c){if(l===void 0&&(l={}),o)throw o;for(var u=!1,f={},d=0;d<s.length;d++){var m=s[d],_=n[m],h=l[m],p=_(h,c);if(typeof p>"u")throw c&&c.type,new Error(Xt(14));f[m]=p,u=u||p!==h}return u=u||s.length!==Object.keys(l).length,u?f:l}}function Gc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(i){return i}:e.length===1?e[0]:e.reduce(function(i,r){return function(){return i(r.apply(void 0,arguments))}})}function w5(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return function(){var r=i.apply(void 0,arguments),s=function(){throw new Error(Xt(15))},o={getState:r.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Gc.apply(void 0,a)(r.dispatch),av(av({},r),{},{dispatch:s})}}}function Xx(t){var e=function(i){var r=i.dispatch,s=i.getState;return function(o){return function(a){return typeof a=="function"?a(r,s,t):o(a)}}};return e}var qx=Xx();qx.withExtraArgument=Xx;const cv=qx;var M5=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function i(){this.constructor=e}e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();globalThis&&globalThis.__generator;var Vc=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,i=e.length,r=t.length;n<i;n++,r++)t[r]=e[n];return t},E5=Object.defineProperty,uv=Object.getOwnPropertySymbols,b5=Object.prototype.hasOwnProperty,C5=Object.prototype.propertyIsEnumerable,fv=function(t,e,n){return e in t?E5(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Fa=function(t,e){for(var n in e||(e={}))b5.call(e,n)&&fv(t,n,e[n]);if(uv)for(var i=0,r=uv(e);i<r.length;i++){var n=r[i];C5.call(e,n)&&fv(t,n,e[n])}return t},T5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Gc:Gc.apply(null,arguments)};function A5(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var P5=function(t){M5(e,t);function e(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=t.apply(this,n)||this;return Object.setPrototypeOf(r,e.prototype),r}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Vc([void 0],n[0].concat(this)))):new(e.bind.apply(e,Vc([void 0],n.concat(this))))},e}(Array);function ph(t){return Bi(t)?$x(t,function(){}):t}function L5(t){return typeof t=="boolean"}function R5(){return function(e){return D5(e)}}function D5(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var i=new P5;return n&&(L5(n)?i.push(cv):i.push(cv.withExtraArgument(n.extraArgument))),i}var I5=!0;function O5(t){var e=R5(),n=t||{},i=n.reducer,r=i===void 0?void 0:i,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,c=n.preloadedState,u=c===void 0?void 0:c,f=n.enhancers,d=f===void 0?void 0:f,m;if(typeof r=="function")m=r;else if(A5(r))m=S5(r);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var _=o;typeof _=="function"&&(_=_(e));var h=w5.apply(void 0,_),p=Gc;l&&(p=T5(Fa({trace:!I5},typeof l=="object"&&l)));var g=[h];Array.isArray(d)?g=Vc([h],d):typeof d=="function"&&(g=d(g));var v=p.apply(void 0,g);return jx(m,u,v)}function Na(t,e){function n(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(e){var s=e.apply(void 0,i);if(!s)throw new Error("prepareAction did not return an object");return Fa(Fa({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:i[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(i){return i.type===t},n}function Yx(t){var e={},n=[],i,r={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,r},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),r},addDefaultCase:function(s){return i=s,r}};return t(r),[e,n,i]}function k5(t){return typeof t=="function"}function z5(t,e,n,i){n===void 0&&(n=[]);var r=typeof e=="function"?Yx(e):[e,n,i],s=r[0],o=r[1],a=r[2],l;if(k5(t))l=function(){return ph(t())};else{var c=ph(t);l=function(){return c}}function u(f,d){f===void 0&&(f=l());var m=Vc([s[d.type]],o.filter(function(_){var h=_.matcher;return h(d)}).map(function(_){var h=_.reducer;return h}));return m.filter(function(_){return!!_}).length===0&&(m=[a]),m.reduce(function(_,h){if(h)if(Sr(_)){var p=_,g=h(p,d);return typeof g>"u"?_:g}else{if(Bi(_))return $x(_,function(v){return h(v,d)});var g=h(_,d);if(typeof g>"u"){if(_===null)return _;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return _},f)}return u.getInitialState=l,u}function F5(t,e){return t+"/"+e}function Zx(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:ph(t.initialState),i=t.reducers||{},r=Object.keys(i),s={},o={},a={};r.forEach(function(u){var f=i[u],d=F5(e,u),m,_;"reducer"in f?(m=f.reducer,_=f.prepare):m=f,s[u]=m,o[d]=m,a[u]=_?Na(d,_):Na(d)});function l(){var u=typeof t.extraReducers=="function"?Yx(t.extraReducers):[t.extraReducers],f=u[0],d=f===void 0?{}:f,m=u[1],_=m===void 0?[]:m,h=u[2],p=h===void 0?void 0:h,g=Fa(Fa({},d),o);return z5(n,g,_,p)}var c;return{name:e,reducer:function(u,f){return c||(c=l()),c(u,f)},actions:a,caseReducers:s,getInitialState:function(){return c||(c=l()),c.getInitialState()}}}var Wp="listenerMiddleware";Na(Wp+"/add");Na(Wp+"/removeAll");Na(Wp+"/remove");p5();const N5={idx:"sd1"},Qx=Zx({name:"editor",initialState:N5,reducers:{changeItem:(t,e)=>{t.idx=e.payload}}}),{changeItem:B5}=Qx.actions,U5=Qx.reducer,G5=oe.div`
    width: 48px;
    height: 100%;
    background-color: rgb(18,18,18);
`,V5=oe.button`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    color: white;
    font-size: 12px;
    border: 0;
    background-color:rgb(18,18,18);
    &:hover{
        background-color:rgb(54,54,54);
    }
    &:focus{
        background-color:rgb(38,38,38);
    }
`,H5=oe(Fp)`
    color: white;
    
`,W5=oe(Nx)`
    color: white;

`,$5=oe(Bx)`
    color: white;

`,j5=oe(Ux)`
    color: white;

`,X5=[{id:"sd1",label:"\u7ED3\u6784",icon:L(H5,{size:"20"})},{id:"sd2",label:"\u6750\u8D28",icon:L(W5,{size:"20"})},{id:"sd3",label:"\u6A21\u578B",icon:L($5,{size:"20"})},{id:"sd4",label:"\u56FE\u7EB8",icon:L(j5,{size:"20"})}],q5=()=>{const t=V_();return L($e,{children:L(G5,{children:X5.map(e=>Ae(V5,{onClick:()=>{t(B5(e.id))},children:[e.icon,e.label]},e.id))})})},Y5=oe.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`,Z5=()=>L($e,{children:Ae(Y5,{children:[L(q5,{}),L(l5,{})]})}),Q5=oe.div`
    position: relative;
    top: 0;
    left: 0;
    width: 240px;
    height: 250px;
    background-color: rgb(54,54,54);
`,J5=()=>L($e,{children:L(Q5,{})}),K5=oe.div`
    width: 100%;
    height: 40px;
    background-color: rgb(54,54,54);
    border-radius: 5px;
`,eP=oe.span`
    margin-left: 10px;
    width: 100%;
    color:white;
    font-size: 15px;
    line-height: 40px;
    background-color: rgb(54,54,54);
`,tP=t=>L($e,{children:L(K5,{children:L(eP,{children:t.label})})}),nP=oe.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 2px;
    color: white;
    text-align: left;
    line-height: 40px;
    background-color: rgb(38,38,38);
    border-radius: 5px;
`,iP=oe.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
`,rP=()=>L($e,{children:L(nP,{children:L(iP,{children:L(tP,{label:"\u5C5E\u6027"})})})}),sP=oe.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,oP=()=>L($e,{children:Ae(sP,{children:[L(J5,{}),L(rP,{})]})});var Jx=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M6.42 9.87 12 20.78l5.58-10.91H6.42zM5.9 4.01 2 9.24h3.62l.28-5.23zm6.1-.59L6.63 9.24h10.74L12 3.42zM2.04 9.87l9.09 10.58L5.72 9.87H2.04zM11.53 3h-.15l-4.84.51a.09.09 0 0 1 0 .05l-.27 5.15zm1.34 17.45 9.09-10.58h-3.68l-5.41 10.58zm4.58-16.87a.09.09 0 0 1 0-.05l-4-.42-1-.11 5.26 5.71zm.65.43.28 5.23H22l-2.22-2.98-1.68-2.25z"})})});Jx.displayName="Sketch";const aP=oe.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    color: ${t=>t.primary?"black":"white"};
    font-size: 1.2rem;
    line-height: 1.57;
    font-family: "Public Sans", sans-serif;
    font-weight: bold;
    text-align: left;
    margin-left: 40px;
    
`,lP=oe(Jx)`
  color: rgb(242, 112, 19);
  margin: 0 5px;
`,$p=t=>L($e,{children:Ae(aP,{...t,children:[L(lP,{title:"Sketch Icon",size:"32"}),L("span",{children:"Bim3dEditor"})]})}),cP=oe.div`
    overflow: hidden;
    position: absolute;
    top: 48px;
    /* left: 0px; */
    margin-left: ${t=>t.pleft};
    width: 140px;
    height: 0px;
    background-color: rgb(38, 38, 38);
    box-shadow: 0 0 3px rgb(102, 102, 102);
    text-align: left;
    line-height: 40px;
    transition-duration: 300ms;
    z-index: 1000;
    color: #ccc;
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
`,uP=oe.li`
    width: 100%;
    height: 40px;
    margin: 0;
    left: 0;
    top: 0;
    &:hover {
        color: #fff;
        background-color: rgb(242, 112, 19);
    }
`,fP=oe.span`
    padding-left: 10px;
`,Kx=t=>{let e=Au();const n=()=>{e("/middle")},i=r=>{switch(console.log("submenu:",r),r){case"\u540E\u53F0\u7BA1\u7406":n();break}};return L($e,{children:L(cP,{pleft:t.pleft,children:L("ul",{children:t.menus.map(r=>L(uP,{onClick:()=>i(r.label),children:L(fP,{children:r.label})},r.key))})})})};var ey=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("path",{d:"M11 16h2V7h3l-4-5-4 5h3z"}),L("path",{d:"M5 22h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2z"})]})});ey.displayName="Export";var ty=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("path",{d:"m12 18 4-5h-3V2h-2v11H8z"}),L("path",{d:"M19 9h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2z"})]})});ty.displayName="Import";var ny=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M18.25 4c.41 0 .75.34.75.75v8.5a.75.75 0 0 1-1.5 0v-8.5c0-.41.34-.75.75-.75zM4 18.25c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75zM8.28 7.22a.75.75 0 0 0-1.06 1.06l6.5 6.5a.75.75 0 1 0 1.06-1.06l-6.5-6.5z"})})});ny.displayName="New";var iy=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("rect",{width:24,height:24,fill:"none"}),L("path",{d:"M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})]})});iy.displayName="Clear";var ry=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("path",{fill:"none",d:"M0 0h24v24H0z"}),L("path",{d:"M6.343 14.621L3.515 17.45l3.535 3.535L20.485 7.55 16.95 4.015l-2.122 2.121 1.415 1.414-1.415 1.414-1.414-1.414-2.121 2.122 2.121 2.12L12 13.208l-2.121-2.121-2.122 2.121 1.415 1.414-1.415 1.415-1.414-1.415zM17.657 1.893l4.95 4.95a1 1 0 010 1.414l-14.85 14.85a1 1 0 01-1.414 0l-4.95-4.95a1 1 0 010-1.414l14.85-14.85a1 1 0 011.414 0z"})]})});ry.displayName="Ruler";const dP=oe.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`,hP=oe.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    min-width: 24px;
    height: 100%;
    color: #ccc;
    font-size: 10px;
    /* text-align: center; */
    /* line-height: 48px; */
    cursor: pointer;
    &:hover{
        color: #fff;
        background-color: rgb(242, 112, 19);

        div {
            height: ${t=>t.menuh};
        }
    }
   
`,pP=oe(ny)`
    color: #fff;
    margin: 2px 0px;
`,mP=oe(ty)`
    color: #fff;
    margin: 2px 0px;
`,gP=oe(ey)`
    color: #fff;
    margin: 2px 0px;
`,vP=oe(ry)`
    color: #fff;
    margin: 2px 0px;
`,_P=oe(iy)`
    color: #fff;
    margin: 2px 0px;
`,xP=[{id:"0",label:"\u573A\u666F",icon:L(pP,{size:"16"}),menus:[{key:"doc1",label:"\u65B0\u5EFA\u573A\u666F"},{key:"doc2",label:"\u6253\u5F00\u573A\u666F"},{key:"doc3",label:"\u5386\u53F2\u8BB0\u5F55"},{key:"doc4",label:"\u7F16\u8F91\u573A\u666F"}]},{id:"1",label:"\u5BFC\u5165",icon:L(mP,{size:"16"}),menus:[{key:"export1",label:"\u5BFC\u5165\u6A21\u578B"},{key:"export2",label:"\u5BFC\u5165CAD"}]},{id:"2",label:"\u5BFC\u51FA",icon:L(gP,{size:"16"})},{id:"3",label:"\u6D4B\u91CF",icon:L(vP,{size:"16"})},{id:"4",label:"\u6E05\u7A7A",icon:L(_P,{size:"16"}),menus:[{key:"clear1",label:"\u5E95\u56FE"},{key:"clear2",label:"\u6A21\u578B"},{key:"clear3",label:"\u5168\u90E8"}]}],yP=()=>{const t=e=>{let n=e.target.innerText;console.log(n)};return L($e,{children:L(dP,{children:xP.map(e=>{var n;return Ae(hP,{menuh:((n=e.menus)==null?void 0:n.length)*40+"px",onClick:i=>t(i),children:[e.icon,e.label,e.menus&&L(Kx,{menus:e.menus,pleft:"74px"})]},e.id)})})})};var sy=he.exports.forwardRef(function(t,e){var n={fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"};return Ae(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("circle",{cx:12,cy:12,r:3}),L("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"})]})});sy.displayName="Settings";var oy=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512",...t,ref:e,children:[L("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:40,d:"M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324"}),L("circle",{cx:248,cy:399.99,r:32})]})});oy.displayName="Help";var ay=he.exports.forwardRef(function(t,e){var n={fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"};return Ae(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),L("circle",{cx:9,cy:7,r:4}),L("path",{d:"M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"})]})});ay.displayName="Users";const SP=oe.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    margin-right: 40px;
`,wP=oe.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    min-width: 24px;
    height: 100%;
    color: #ccc;
    font-size: 10px;
    /* text-align: center;
    line-height: 48px; */
    cursor: pointer;
    &:hover{
        color: #fff;
        background-color: rgb(242, 112, 19);
        div {
            height: ${t=>t.menuh};
        }
    }
`,MP=oe(sy)`
    color: #fff;
    margin: 2px 0px;
`,EP=oe(oy)`
    color: #fff;
    margin: 2px 0px;
`,bP=oe(ay)`
    color: #fff;
    margin: 2px 0px;
`,CP=[{id:"0",label:"\u8BBE\u7F6E",icon:L(MP,{size:"16"})},{id:"1",label:"\u5E2E\u52A9",icon:L(EP,{size:"16"})},{id:"2",label:"\u7528\u6237\u4FE1\u606F",icon:L(bP,{size:"16"}),menus:[{key:"user1",label:"\u4E2A\u4EBA\u4E3B\u9875"},{key:"user2",label:"\u540E\u53F0\u7BA1\u7406"},{key:"user3",label:"\u6350\u8D60\u4FE1\u606F"},{key:"user4",label:"\u9000\u51FA\u767B\u5F55"}]}],TP=()=>{const t=e=>{console.log(e)};return L($e,{children:L(SP,{children:CP.map(e=>{var n;return Ae(wP,{menuh:((n=e.menus)==null?void 0:n.length)*40+"px",onClick:()=>t(e.label),children:[e.icon,e.label,e.menus&&L(Kx,{menus:e.menus,pleft:"-50px"})]},e.id)})})})},AP=oe.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 48px;
  background-color: rgb(18,18,18);
`,PP=()=>L($e,{children:Ae(AP,{children:[L($p,{primary:!1}),L(yP,{}),L(TP,{})]})}),LP=oe.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 48px;
    cursor: pointer;
`,RP=oe.div`
    position: absolute;
    top: 48px;
    left: 0px;
    width: 288px;
    height: calc(100vh - 48px);
    cursor: pointer;
`,DP=oe.div`
    position: absolute;
    top: 48px;
    right: 0px;
    width: 240px;
    height: calc(100vh - 48px);
    cursor: pointer;
`,IP=oe.div`
    position: absolute;
    top: 48px;
    right: 240px;
    width: 100px;
    height: 100px;
    /* background-color: yellow; */
`,OP=()=>{const t=he.exports.useRef(null);return he.exports.useEffect(()=>(t&&(Fe.idc=t.current,Fe.SC.scene.mountedIdcScene()),()=>{console.log("idc unmount")})),Ae($e,{children:[L(LP,{children:L(PP,{})}),L(RP,{children:L(Z5,{})}),L(DP,{children:L(oP,{})}),L(IP,{ref:t})]})};class kP extends Kn.Component{constructor(){super(...arguments);E(this,"container",Kn.createRef());E(this,"editorview",Kn.createRef())}componentDidMount(){console.log("editor mount"),this.container&&(Fe.container=this.container.current,Fe.SC.scene.mountedMainScene()),this.editorview&&(Fe.uicontainer=this.editorview.current)}componentWillUnmount(){console.log("editor unmount")}render(){return Ae($e,{children:[L("div",{id:"bim",ref:this.container}),L(OP,{})]})}}const zP=()=>L("div",{children:"MiddleGround"}),FP=oe.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px;
    width: 260px;
    overflow: auto;
`,NP=oe.span`
    padding: 8px 0;
    color:#333;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    &:hover{
        background-color: #f5f4f4;
    }
`,BP=[{id:"example1",lable:"\u7ACB\u65B9\u4F53"},{id:"example2",lable:"\u5706\u7BA1"},{id:"example3",lable:"\u5EFA\u7B51"},{id:"example4",lable:"\u5149\u6548"},{id:"example5",lable:"\u667A\u6167\u5DE5\u5382"},{id:"example6",lable:"\u6570\u5B57\u57CE\u5E02"},{id:"example7",lable:"\u6750\u8D28"},{id:"example8",lable:"\u9876\u70B9\u989C\u8272"},{id:"example9",lable:"\u6444\u50CF\u673A"},{id:"example10",lable:"\u6D4B\u8BD5"},{id:"example11",lable:"\u6D4B\u8BD5"},{id:"example12",lable:"\u6D4B\u8BD5"},{id:"example13",lable:"\u6D4B\u8BD5"},{id:"example14",lable:"\u6D4B\u8BD5"},{id:"example15",lable:"\u6D4B\u8BD5"},{id:"example16",lable:"\u6D4B\u8BD5"},{id:"example17",lable:"\u6D4B\u8BD5"},{id:"example18",lable:"\u6D4B\u8BD5"},{id:"example19",lable:"\u6D4B\u8BD5"},{id:"example20",lable:"\u6D4B\u8BD5"},{id:"example21",lable:"\u6D4B\u8BD5"},{id:"example22",lable:"\u6D4B\u8BD5"},{id:"example23",lable:"\u6D4B\u8BD5"},{id:"example24",lable:"\u6D4B\u8BD5"},{id:"example25",lable:"\u6D4B\u8BD5"},{id:"example26",lable:"\u6D4B\u8BD5"},{id:"example27",lable:"\u6D4B\u8BD5"},{id:"example28",lable:"\u6D4B\u8BD5"}],UP=()=>{const t=e=>{let n=e.target.innerText;console.log("example item click:",n)};return L($e,{children:L(FP,{children:BP.map(e=>L(NP,{onClick:n=>t(n),children:e.lable},e.id))})})},GP=oe.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40px;
    margin: 20px 0;
    /* background-color: yellow; */
`,ly=oe.span`
    color: #333;
    font-size: 18px;
    font-weight: bold;
    line-height: 18px;
    padding-left: 20px;
`,VP=oe(ly)`
    font-weight: 100;
    margin: 16px 0 0 16px;
`,HP=()=>L($e,{children:Ae(GP,{children:[L(ly,{children:"Bim3dEditor"}),L(VP,{children:"Example"})]})}),WP=oe.div`
    width: 300px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
`,$P=()=>L($e,{children:Ae(WP,{children:[L(HP,{}),L(UP,{})]})}),jP=oe.div`
    width: calc(100vw - 300px);
    height: 100%;
`,XP=()=>{const t=he.exports.useRef(null);return he.exports.useEffect(()=>(t&&(Fe.example=t.current,Fe.SC.scene.mountedExampleScene()),()=>{console.log("example unmount")})),L($e,{children:L(jP,{ref:t})})},qP=oe.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`,YP=()=>L($e,{children:Ae(qP,{children:[L($P,{}),L(XP,{})]})}),ZP=oe.div`

    position: relative;
    background-color: rgb(38, 38, 38);
    overflow: hidden;
    min-height: 50vh;
    z-index: 1;

`,QP=()=>L($e,{children:L(ZP,{})});var oo=(t=>(t.Light="light",t.Dark="dark",t))(oo||{});const ed=localStorage.getItem("theme"),JP={theme:ed!=null?ed:oo.Light},cy=Zx({name:"user",initialState:JP,reducers:{toggleTheme:t=>{t.theme=t.theme===oo.Dark?oo.Light:oo.Dark,localStorage.setItem("theme",t.theme)}}}),{toggleTheme:KP}=cy.actions,eL=cy.reducer,tL=oe.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 100%;
    width: 100%;
`,nL=oe.button`
    border: 0;
    background: none;
    text-transform: uppercase;
    color: white;
    /* font-weight: bold; */
    position: relative;
    outline: none;
    padding: 10px 20px;
    box-sizing: border-box;

    &:hover{
        color: rgb(242, 112, 19);
    }
    &::before, &::after{
        box-sizing: inherit;
        position: absolute;
        content: '';
        border: 2px solid transparent;
        width: 0;
        height: 0;  
    }
    &::after{
        bottom: 0;
        right: 0;
    }
    &::before {
        top: 0;
        left: 0;
    }
    &:hover::before, &:hover::after {
        width: 100%;
        height: 100%;
    }
    &:hover::before{
        border-top-color: rgb(242, 112, 19);
        border-right-color: rgb(242, 112, 19);
        transition: width 0.1s ease-out, height 0.1s ease-out 0.1s;
    }
    &:hover::after {
        border-bottom-color: rgb(242, 112, 19);
        border-left-color: rgb(242, 112, 19);
        transition: border-color 0s ease-out 0.3s, width 0.1s ease-out 0.3s, height 0.1s ease-out 0.5s;
    }
`,iL=oe.button`
    border: 0;
    color: ${t=>t.theme.colors.body};
    width: 84px;
    height: 32px;
    margin: 0 20px;
    border-radius: 6px;
    background: rgb(242, 112, 19);
    &:hover{
        background: rgb(248, 140, 64);
    }
`,dv=[{id:"6",lable:"\u767B\u5F55"},{id:"5",lable:"\u7F16\u8F91\u5668"},{id:"4",lable:"\u793A\u4F8B"},{id:"3",lable:"\u6587\u6863"},{id:"2",lable:"\u6559\u7A0B"},{id:"1",lable:"theme"}],rL=()=>{let t=Au();const e=()=>{t("/editor")},n=V_();function i(){n(KP())}const r=o=>{switch(o.target.innerHTML){case"\u6559\u7A0B":t("/course");break;case"\u6587\u6863":t("/document");break;case"\u793A\u4F8B":t("/example");break;case"\u7F16\u8F91\u5668":e();break;case"theme":i();break}},s=()=>{t("/login")};return L($e,{children:L(tL,{children:dv.map(o=>parseInt(o.id)===dv.length?L(iL,{onClick:s,children:"\u767B \u5F55"},o.id):L(nL,{onClick:a=>r(a),children:o.lable},o.id))})})},sL=oe.div`
    display: flex;
    position: fixed;
    top: 0px;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 64px;
    color: red;
    background: rgb(18,18,18);
    z-index: 5;
`,oL=oe.div`
    display: flex;
    /* background: yellow; */
    height: 32px;
    width: 80%;
    flex-direction: row;
`,aL=()=>L($e,{children:L(sL,{children:Ae(oL,{children:[L($p,{primary:!1}),L(rL,{})]})})}),lL=oe.div`

    position: relative;
    min-height: 200vh;
    z-index: 1;

`,cL=()=>L($e,{children:L(lL,{})});var uy=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("rect",{width:24,height:24,fill:"none"}),L("path",{d:"M3 4c0-.55.45-1 1-1h2V1H4C2.34 1 1 2.34 1 4v2h2V4zM3 20v-2H1v2c0 1.66 1.34 3 3 3h2v-2H4c-.55 0-1-.45-1-1zM20 1h-2v2h2c.55 0 1 .45 1 1v2h2V4c0-1.66-1.34-3-3-3zM21 20c0 .55-.45 1-1 1h-2v2h2c1.66 0 3-1.34 3-3v-2h-2v2zM19 14.87V9.13c0-.72-.38-1.38-1-1.73l-5-2.88c-.31-.18-.65-.27-1-.27s-.69.09-1 .27L6 7.39c-.62.36-1 1.02-1 1.74v5.74c0 .72.38 1.38 1 1.73l5 2.88c.31.18.65.27 1 .27s.69-.09 1-.27l5-2.88c.62-.35 1-1.01 1-1.73zm-8 2.3l-4-2.3v-4.63l4 2.33v4.6zm1-6.33L8.04 8.53 12 6.25l3.96 2.28L12 10.84zm5 4.03l-4 2.3v-4.6l4-2.33v4.63z"})]})});uy.displayName="ViewInAr";const uL=oe.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 0 20px 0;
`,fL=oe.button`
    width: 140px;
    height: 32px;
    background: transparent;
    color: rgb(242, 112, 19);
    background: none;
    border: 1px solid rgb(242, 112, 19);
    border-radius: 5px 5px;
    font-size: 16px;
    margin: 0 20px;

    &:hover{
        color: rgb(179, 78, 6);
        border: 1px solid rgb(179, 78, 6);
    }
`,dL=oe.button`
    width: 140px;
    height: 32px;
    color: white;
    background: rgb(242, 112, 19);
    font-size: 16px;
    text-align: center;
    margin: 0 20px;
    border: 0;
    border-radius: 5px 5px;
    &:hover{
        background: rgb(179, 78, 6);
    }
`,hL=oe(uy)`
    color: white;
    margin-right: 10px;
    padding-bottom: 2px;
`,pL=()=>{let t=Au();function e(){t("/editor")}return L($e,{children:Ae(uL,{children:[L("a",{href:"https://gitee.com/songmy1093697597/bim3d-editor",target:"_blank",children:L(fL,{children:"\u5BFC\u51FA\u9879\u76EE"})}),Ae(dL,{onClick:e,children:[L(hL,{size:"16"}),"\u9884\u89C8\u7F16\u8F91"]})]})})};var fy=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{fillRule:"evenodd",d:"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z",clipRule:"evenodd"})})});fy.displayName="Github";var dy=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512",...t,ref:e,children:L("path",{fill:"currentColor",d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"})})});dy.displayName="ReactLogo";var hy=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12 1.217 4.926-4.877-1.4zm6.28 1.538 4.878 1.404-3.662 3.53zm-.52.13 1.208 4.9-4.853-1.392zm6.3 1.534 4.947 1.424-3.715 3.574zm-.524.12 1.215 4.926-4.876-1.398zm-15.432.696 4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137 1.236 5.017-4.963-1.432zm6.274 1.535 4.965 1.425-3.73 3.586zm-.52.127 1.235 5.012-4.958-1.43zm-9.63 2.438 4.873 1.406-3.656 3.523zm5.854 1.687 4.863 1.403-3.648 3.51zm-.54.04 1.214 4.927-4.875-1.4zm-3.896 4.02 5.037 1.442-3.782 3.638z"})})});hy.displayName="Threedotjs";var py=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"})})});py.displayName="Typescript";var my=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"})})});my.displayName="Gitee";const mL=oe.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`,gL=oe(fy)`
  color: white;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,vL=oe(dy)`
  color: #38d2f8;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,_L=oe(hy)`
  color: white;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,xL=oe(py)`
  color: #067ceb;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,yL=oe(my)`
  color: #f74141;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,SL=()=>L($e,{children:Ae(mL,{children:[L(vL,{title:"React icon",size:"36"}),L(_L,{title:"Three.js icon",size:"36"}),L(xL,{title:"Typescript icon",size:"36"}),L(yL,{title:"Javascript icon",size:"36"}),L(gL,{title:"Github icon",size:"36"})]})}),hv=oe.span`
  color: rgb(242, 112, 19);
`,wL=()=>Ae($e,{children:[Ae("h1",{children:[Ae("span",{children:["\u6B22\u8FCE\u6765\u5230",L(hv,{children:" Bim3dEditor "}),L("br",{}),"\u8FD9\u662F\u4E3A\u60A8\u7CBE\u5FC3\u6253\u9020\u7684\u53EF\u9884"]}),L("br",{}),L("span",{children:"\u89C8\u548C\u7F16\u8F91\u7684"}),Ae("span",{children:[L(hv,{children:" WebGL "}),"\u9879\u76EE"]})]}),Ae("h5",{children:[L("span",{children:"Bim3dEditor \u4F7F\u7528\u6D41\u884C\u7684\u524D\u7AEF\u6846\u67B6 React \u548C\u4F18\u79C0\u7684 webgl"}),L("br",{}),L("span",{children:"\u5E93 Three.js \u6253\u9020\u5728\u7EBF\u53EF\u7F16\u8F91\u7684Cad\u89E3\u6790\u7F16\u8F91\u5668"})]})]}),ML=oe.div`
    position: relative;
    background-color: rgb(38, 38, 38);
    overflow: hidden;
    min-height: 100vh;
    z-index: 1;
`,EL=oe.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`,bL=oe.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    color:white;
    align-items: center;
    justify-content: center;
    /* background-color: rgb(73, 73, 73); */
    overflow: hidden;
    z-index: 1;
`,CL=oe.div`
  display: flex;
  /* background-color: red; */
  width: 100%;
  min-height: 100vh;
`,TL=()=>L($e,{children:L(ML,{children:Ae(EL,{children:[Ae(bL,{children:[L(wL,{}),L(pL,{}),L(SL,{})]}),L(CL,{})]})})}),AL=()=>Ae($e,{children:[L(aL,{}),L(TL,{}),L(cL,{}),L(QP,{})]}),PL=oe.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: black;
    width: 100%;
    height: 10%;
    /* background-color: greenyellow; */
`,LL=oe.div`

    display: flex;
    align-items: center;
    width: 100%;
    height: 10%;
    font-size: 14px;
    /* background-color: #2f71ff; */
    margin-left: 200px;
    
`,RL=oe.div`
 
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-right: 200px;
    width: 100%;
    height: 10%;
   
    font-size: 14px;
    /* background-color: greenyellow; */
`,Fl=oe.a`
    margin: 0 20px;
    color:  #7c7c7c;
    text-decoration:none;
    &:hover{
        color:  black;
        text-decoration:underline;
        text-decoration-color:black;
    }
`,DL=()=>L($e,{children:Ae(PL,{children:[L(LL,{children:L(Fl,{href:"",children:"\u672C\u7F51\u7AD9\u53D7\u9690\u79C1\u653F\u7B56\u4FDD\u62A4"})}),Ae(RL,{children:[L(Fl,{href:"",children:"\u670D\u52A1\u6761\u6B3E"}),L(Fl,{href:"",children:"\u9690\u79C1\u653F\u7B56"}),L(Fl,{href:"",children:"\u5F00\u53D1\u56E2\u961F"})]})]})}),IL=oe.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: black;
    width: 100%;
    height: 10%;
    /* background-color: yellow; */
`,OL=()=>L($e,{children:L(IL,{children:L($p,{primary:!0})})}),kL=oe.div`
    height:40px;
    line-height:40px;
    text-align: center;
    .line {
        display: inline-block;
        width:35%;
        border-top: 1px solid #ccc ;
    }
    .txt {
        color: #7c7c7c;
        vertical-align: -4px;
        margin: 0 5px;
    }
`,zL=t=>Ae(kL,{children:[L("span",{className:"line"}),L("span",{className:"txt",children:t.label}),L("span",{className:"line"})]});var gy=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512",...t,ref:e,children:[L("path",{d:"M408.67 298.53a21 21 0 1120.9-21 20.85 20.85 0 01-20.9 21m-102.17 0a21 21 0 1120.9-21 20.84 20.84 0 01-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35 68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7 2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 018.13 2.34L454 462.83a11.62 11.62 0 003.48 1.17 5 5 0 004.65-4.66 14.27 14.27 0 00-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 01-.33-3.47 11.4 11.4 0 015-9.35","data-name":"XMLID 501 -1"}),L("path",{d:"M246.13 178.51a24.47 24.47 0 010-48.94c12.77 0 24.38 11.65 24.38 24.47 1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 11147.45 154a24.57 24.57 0 01-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 01-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 005.8 5.83 7.15 7.15 0 003.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 015.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 01-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48","data-name":"XMLID 505 -7"})]})});gy.displayName="LogoWechat";var vy=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 20 20",...t,ref:e,children:L("path",{d:"M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm4.008 11.92c-.184.096-.47-.122-.737-.52-.105.435-.369.828-.743 1.144.394.144.65.38.65.65 0 .442-.695.799-1.553.799-.773 0-1.415-.291-1.533-.672h-.184c-.12.38-.76.672-1.533.672-.857 0-1.552-.357-1.552-.8 0-.268.256-.505.65-.65-.375-.315-.638-.708-.745-1.143-.267.398-.553.616-.735.52-.265-.136-.213-.88.117-1.654.26-.61.612-1.06.879-1.158a1.18 1.18 0 01.172-.748l-.002-.041c0-.11.026-.21.07-.298.068-1.586 1.1-2.845 2.771-2.845 1.67 0 2.703 1.259 2.771 2.845.044.088.07.188.07.298 0 .012 0 .027-.003.041a1.169 1.169 0 01.173.748c.267.098.62.547.878 1.158.331.775.383 1.518.119 1.655z"})})});vy.displayName="QqWithCircle";var _y=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M16.076 13.732a19.299 19.299 0 0 0 2.003-5.045h-4.731V6.988h5.795V6.04h-5.795V3.207h-2.365c-.415 0-.415.408-.415.408V6.04H4.707v.948h5.861v1.699H5.729v.948h9.386a16.63 16.63 0 0 1-1.352 3.294c-3.045-1.002-6.295-1.814-8.337-1.314-1.305.321-2.146.893-2.641 1.493-2.267 2.751-.641 6.929 4.147 6.929 2.831 0 5.559-1.574 7.673-4.168C17.758 17.381 24 19.976 24 19.976v.157a3.837 3.837 0 0 1-3.843 3.833H3.845A3.839 3.839 0 0 1 0 20.132V3.868A3.838 3.838 0 0 1 3.845.034h16.312A3.837 3.837 0 0 1 24 3.868v12.409s-.784-.062-4.24-1.216c-.96-.321-2.249-.811-3.684-1.329zm-10.242-.698c-.6.059-1.725.324-2.341.866-1.845 1.604-.741 4.537 2.993 4.537 2.17 0 4.339-1.384 6.042-3.599-2.424-1.179-4.476-2.022-6.694-1.804z"})})});_y.displayName="Alipay";var xy=he.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(mt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zm.75 3h-9v14.75c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V5z"})})});xy.displayName="PhonePageHeader";const FL=oe.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
    width: 100%;
    height: 80%;
    /* background-color: red; */
`,NL=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 400px;
    min-height: 512px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgb(230, 235, 241);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 4px;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`,BL=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 370px;
    height:100%;
    /* background-color: #961414; */
`,pv=oe.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`,Nl=oe.span`
    color: #333;
    font-size: ${t=>t.size};
   

`,Bl=oe.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: ${t=>t.position?"right":"left"};
`,UL=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 20px 0;
`,mv=oe.input`
    width: 100%;
    height: 36px;
    font-size: 24px;
    margin: 5px 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
`,GL=oe.input`
    position: relative;
    width: 18px;
    height: 18px;
    font-size: 16px;
    margin: 0 5px 0 0;
    padding: 0;
    cursor: pointer;
    &::after {
        position: absolute;
        top: 0;
        width: 18px;
        height: 18px;
        display: inline-block;
        visibility: visible;
        /* background-color: white; */
        text-align: center;
        content: ' ';
        border-radius: 2px
    }
    &:checked::after {
        content: "✓";
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        background-color: rgb(242, 112, 19);
    }
`,gv=oe.a`
    margin: 0;
    padding: 0;
   
    color:  #7c7c7c;
    text-decoration:none;
    &:hover{
        color:  black;
        text-decoration:underline;
        text-decoration-color:black;
    }
`,VL=oe(gy)`
    color: #03a303;
    margin: 5px 20px;
`,HL=oe(vy)`
    color: #f84747;
    margin: 5px 20px;
`,WL=oe(_y)`
    color: #3664fc;
    margin: 5px 20px;
`,$L=oe(xy)`
    color: #ccc;
    margin: 5px 20px;
`,jL=oe.button`
    width: 100%;
    height: 42px;
    color: white;
    background: rgb(242, 112, 19);
    font-size: 16px;
    text-align: center;
    margin: 20px 0px;
    border: 0;
    border-radius: 5px 5px;
    &:hover{
        background: rgb(179, 78, 6);
    }
`,vv=oe.div`
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: auto;
    margin: 5px 0;
`,XL=()=>{let t=Au();return L($e,{children:L(FL,{children:L(NL,{children:Ae(BL,{children:[Ae(pv,{children:[L(Nl,{size:"24px",children:"\u767B\u5F55"}),L(gv,{children:"\u6CA1\u6709\u8D26\u53F7\uFF1F"})]}),Ae(UL,{children:[L(Bl,{children:L(Nl,{size:"16px",children:"\u90AE\u7BB1\uFF1A"})}),L(mv,{type:"email"}),L(Bl,{children:L(Nl,{size:"16px",children:"\u5BC6\u7801\uFF1A"})}),L(mv,{type:"password"})]}),Ae(pv,{children:[Ae(Bl,{children:[L(GL,{type:"checkbox"}),L(Nl,{size:"12px",children:"\u8BB0\u4F4F\u5BC6\u7801"})]}),L(Bl,{position:!0,children:L(gv,{children:"\u5FD8\u8BB0\u5BC6\u7801\uFF1F"})})]}),L(jL,{onClick:()=>{t("/editor")},children:"\u767B\u5F55"}),L(vv,{children:L(zL,{label:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"})}),Ae(vv,{children:[L(VL,{size:"40"}),L(HL,{size:"40"}),L(WL,{size:"40"}),L($L,{size:"40"})]})]})})})})},qL=oe.div`
    display: flex;
    flex-direction: column;
    color: black;
    width: 100%;
    height: 100vh;
`,YL=()=>L($e,{children:Ae(qL,{children:[L(OL,{}),L(XL,{}),L(DL,{})]})}),ZL=[{path:"/",element:L(AL,{})},{path:"/example",element:L(YP,{})},{path:"/document",element:L(xM,{})},{path:"/course",element:L(_M,{})},{path:"/editor",element:L(kP,{})},{path:"/middle",element:L(zP,{})},{path:"/login",element:L(YL,{})}],QL=O5({reducer:{user:eL,editor:U5}}),JL=qA`
    body {
        background: ${t=>t.theme.colors.body};
    }
`,KL={colors:{body:"#000"}},eR={colors:{body:"#fff"}},tR=t=>{const e=O_(n=>n.user.theme);return L(jA,{theme:e===oo.Dark?KL:eR,...t})},nR=()=>{const t=pM(ZL);return L(Vw,{store:QL,children:Ae(tR,{children:[L(JL,{}),t]})})};var mh={},_v=yh.exports;mh.createRoot=_v.createRoot,mh.hydrateRoot=_v.hydrateRoot;new Fe().startUp();mh.createRoot(document.getElementById("root")).render(L(Kn.StrictMode,{children:L(vM,{children:L(nR,{})})}));
